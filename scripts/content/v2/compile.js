/* ============================================================
   Content engine v2 — compile.js
   Compiles the 250-lesson curriculum from per-section data
   files (scripts/content/v2/data/sXX-*.js) into lesson modules,
   the manifest and a content report.

   Guarantees:
   - lesson ids lesson-001..lesson-250, one per curriculum entry
   - numbering follows curriculum order (no gaps / duplicates)
   - global cross-lesson sentence uniqueness (via builder registry)
   - schema compliance for every produced lesson
   - deterministic exercise-type interleave per lesson length
   Usage: node scripts/content/v2/compile.js
   ============================================================ */

import { readdirSync, writeFileSync, rmSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { CURRICULUM, SECTIONS_V2 } from './curriculum.js';
import { expandPattern, fillFrom, orderFrom, resetRegistry, registrySize, writeLessonFile } from '../lib/builder.js';
import { normalizeForDup, validateLessonStructure } from '../../../js/lesson-schema.js';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '../../..');
const DATA_DIR = join(HERE, 'data');

/* ---------- per-kind exercise plan ---------- */
const PLAN = {
  lesson:   { count: 55, fill: 6,  order: 4, mc: 3 },
  review:   { count: 70, fill: 9,  order: 6, mc: 5 },
  capstone: { count: 80, fill: 10, order: 7, mc: 6 },
};

const MIN_MINUTES = { A1: 12, A2: 14, B1: 16, B2: 18, C1: 20 };

function estimatedMinutes(level, kind) {
  let m = MIN_MINUTES[level] || 15;
  if (kind === 'review') m += 6;
  if (kind === 'capstone') m = 25;
  return m;
}

/** Deterministic collision-free slot plan for a lesson of `count` exercises. */
function slotPlan(count, kinds) {
  const plan = new Array(count).fill('lt');
  const taken = new Set();
  const put = (name, start, c) => {
    if (!c) return;
    const step = Math.max(3, Math.floor((count - start - 2) / c));
    for (let j = 0; j < c; j += 1) {
      let pos = start + j * step;
      while (pos < count && taken.has(pos)) pos += 1;
      if (pos >= count) {
        pos = count - 1;
        while (pos > 0 && taken.has(pos)) pos -= 1;
      }
      plan[pos] = name;
      taken.add(pos);
    }
  };
  put('fill', 3, kinds.fill);
  put('mc', 6, kinds.mc);
  put('order', 9, kinds.order);
  return plan;
}

/* ---------- definition linter ---------- */

const KEBAB = /^[a-z0-9-]+$/;

export function lintDef(def, file) {
  const ctx = `${file} · lesson ${def.num}`;
  const errs = [];
  const bad = (m) => errs.push(m);
  if (!Number.isInteger(def.num) || def.num < 1 || def.num > 250) bad(`bad num: ${def.num}`);

  if (!Array.isArray(def.tags) || def.tags.length < 1 || def.tags.some((t) => !KEBAB.test(t))) {
    bad(`tags must be a non-empty kebab-case array, got ${JSON.stringify(def.tags)}`);
  }
  if (!Array.isArray(def.objectives) || def.objectives.length < 2
    || def.objectives.some((o) => typeof o !== 'string' || !o.trim())) bad('objectives: need 2+ strings');

  const g = def.grammar;
  if (!g || typeof g !== 'object') bad('missing grammar block');
  else {
    if (typeof g.explanation !== 'string' || g.explanation.trim().length < 60) bad(`grammar.explanation too short (${(g.explanation || '').length} chars, need 60+)`);
    if (typeof g.explanationAr !== 'string' || g.explanationAr.trim().length < 40) bad('grammar.explanationAr too short (need 40+ chars)');
    if (!Array.isArray(g.examples) || g.examples.length < 3
      || g.examples.some((e) => !e || typeof e.en !== 'string' || typeof e.ar !== 'string' || !e.en.trim() || !e.ar.trim())) bad('grammar.examples: need 3+ {en, ar} pairs');
  }

  if (!Array.isArray(def.vocabulary) || def.vocabulary.length < 6) {
    bad(`vocabulary: need 6+ words, got ${Array.isArray(def.vocabulary) ? def.vocabulary.length : 0}`);
  } else {
    def.vocabulary.forEach((v, i) => {
      if (!v || typeof v.word !== 'string' || !v.word.trim()) bad(`vocabulary[${i}].word missing`);
      else if (v.word !== v.word.trim()) bad(`vocabulary[${i}].word has spaces`);
      if (!v || typeof v.meaningAr !== 'string' || !v.meaningAr.trim()) bad(`vocabulary[${i}].meaningAr missing`);
      if (!v || typeof v.example !== 'string' || !v.example.trim()) bad(`vocabulary[${i}].example missing`);
    });
  }

  const sc = Array.isArray(def.scenario) ? def.scenario : [];
  if (sc.length < 10) bad(`scenario: need 10+ pairs, got ${sc.length}`);
  sc.forEach((p, i) => {
    if (!p || typeof p.en !== 'string' || p.en.trim().length < 8) bad(`scenario[${i}].en too short/missing`);
    if (!p || typeof p.ar !== 'string' || !p.ar.trim()) bad(`scenario[${i}].ar missing`);
    if (p && p.d !== undefined && ![1, 2, 3].includes(p.d)) bad(`scenario[${i}].d must be 1..3`);
    if (p && p.tags && (!Array.isArray(p.tags) || p.tags.some((t) => !KEBAB.test(t)))) bad(`scenario[${i}].tags bad`);
  });

  (def.patterns || []).forEach((p, i) => {
    if (!p || typeof p.tmpl !== 'string' || !p.tmpl.trim()) bad(`patterns[${i}].tmpl missing`);
    else if (!/\{[A-Z][A-Za-z]*\}/.test(p.tmpl)) bad(`patterns[${i}].tmpl has no {Slot} placeholders`);
    if (!p || typeof p.arTmpl !== 'string' || !p.arTmpl.trim()) bad(`patterns[${i}].arTmpl missing`);
    if (!p || !p.slots || typeof p.slots !== 'object' || !Object.keys(p.slots).length) bad(`patterns[${i}].slots missing`);
    if (p && p.limit !== undefined && (!Number.isInteger(p.limit) || p.limit < 1)) bad(`patterns[${i}].limit bad`);
  });

  const fl = Array.isArray(def.fills) ? def.fills : [];
  if (fl.length < 6) bad(`fills: need 6+, got ${fl.length}`);
  fl.forEach((f, i) => {
    if (!f || typeof f.en !== 'string' || !f.en.trim()) { bad(`fills[${i}].en missing`); return; }
    if (!f || typeof f.ar !== 'string' || !f.ar.trim()) bad(`fills[${i}].ar missing`);
    if (!f || typeof f.word !== 'string' || !f.word.trim()) { bad(`fills[${i}].word missing`); return; }
    if (!f.en.includes(f.word)) bad(`fills[${i}]: word "${f.word}" not found in "${f.en}"`);
    if (f.hint !== undefined && typeof f.hint !== 'string') bad(`fills[${i}].hint bad`);
  });

  const or = Array.isArray(def.orders) ? def.orders : [];
  if (or.length < 4) bad(`orders: need 4+, got ${or.length}`);
  or.forEach((o, i) => {
    if (!o || typeof o.en !== 'string' || !o.en.trim()) { bad(`orders[${i}].en missing`); return; }
    if (!o || typeof o.ar !== 'string' || !o.ar.trim()) bad(`orders[${i}].ar missing`);
    const wc = o.en.replace(/[.!?]+$/, '').split(/\s+/).filter(Boolean).length;
    if (wc < 4) bad(`orders[${i}]: sentence too short to scramble (${wc} words)`);
  });

  const mc = Array.isArray(def.mc) ? def.mc : [];
  if (mc.length < 3) bad(`mc: need 3+, got ${mc.length}`);
  mc.forEach((m, i) => {
    if (!m || typeof m.question !== 'string' || !m.question.trim()) { bad(`mc[${i}].question missing`); return; }
    if (!m || !Array.isArray(m.options) || m.options.length < 3 || m.options.length > 4) bad(`mc[${i}].options must be 3-4`);
    else if (!Number.isInteger(m.answerIndex) || m.answerIndex < 0 || m.answerIndex >= m.options.length) bad(`mc[${i}].answerIndex out of range`);
    if (!m || typeof m.ar !== 'string' || !m.ar.trim()) bad(`mc[${i}].ar missing`);
  });

  if (errs.length) throw new Error(`lint failed for ${ctx}:\n  - ${errs.join('\n  - ')}`);
}

/* ---------- exercise constructors (mirror lib/builder.js shapes) ---------- */

function ltEx(lessonId, n, pair) {
  return {
    id: `${lessonId}-ex-${String(n).padStart(3, '0')}`,
    type: 'listen-and-type',
    en: pair.en,
    ar: pair.ar,
    acceptedAnswers: [pair.en],
    grammarTags: pair.tags || [],
    difficulty: pair.difficulty || 1,
    ...(pair.hint ? { hint: pair.hint } : {}),
  };
}

function fillEx(lessonId, n, f) {
  return {
    id: `${lessonId}-ex-${String(n).padStart(3, '0')}`,
    type: 'fill-blank',
    display: f.display,
    blankWord: f.blankWord,
    en: f.en,
    ar: f.ar,
    acceptedAnswers: [f.blankWord, f.blankWord[0].toUpperCase() + f.blankWord.slice(1), f.blankWord.toLowerCase()],
    grammarTags: f.tags || [],
    difficulty: f.difficulty || 2,
    ...(f.hint ? { hint: f.hint } : {}),
    ...(f.explanation ? { explanation: f.explanation } : {}),
  };
}

function orderEx(lessonId, n, o) {
  const clean = o.en.replace(/[.!?]+$/, '');
  const words = clean.split(' ').filter(Boolean);
  const rotated = words.length > 2 ? [...words.slice(1), words[0]] : [...words].reverse();
  return {
    id: `${lessonId}-ex-${String(n).padStart(3, '0')}`,
    type: 'word-order',
    en: o.en,
    ar: o.ar,
    words: rotated,
    acceptedAnswers: [o.en, clean],
    grammarTags: o.tags || [],
    difficulty: o.difficulty || 2,
  };
}

function mcEx(lessonId, n, m) {
  return {
    id: `${lessonId}-ex-${String(n).padStart(3, '0')}`,
    type: 'multiple-choice',
    question: m.question,
    options: m.options,
    answerIndex: m.answerIndex,
    ar: m.ar,
    grammarTags: m.tags || [],
    difficulty: m.difficulty || 2,
    ...(m.hint ? { hint: m.hint } : {}),
    ...(m.explanation ? { explanation: m.explanation } : {}),
  };
}

/* ---------- lesson assembly ---------- */

function buildLesson(cur, def, file) {
  lintDef(def, file);
  const kind = cur.kind || 'lesson';
  const { count, fill, order, mc } = PLAN[kind];
  const lessonId = `lesson-${String(cur.n).padStart(3, '0')}`;

  /* listen-and-type pool: scenarios + pattern expansions */
  const ltPool = [];
  for (const s of def.scenario) {
    ltPool.push({ en: s.en, ar: s.ar, tags: s.tags && s.tags.length ? s.tags : def.tags, difficulty: s.d || 1, hint: s.hint });
  }
  for (const p of def.patterns || []) {
    const meta = { tags: p.tags && p.tags.length ? p.tags : def.tags, difficulty: p.d || 2 };
    const { tmpl, arTmpl, slots, limit, filter } = p;
    for (const pair of expandPattern({ tmpl, arTmpl, slots, limit, filter })) {
      ltPool.push({ ...pair, ...meta });
    }
  }

  /* fill pool */
  const fillPool = def.fills.map((f) => fillFrom(
    { en: f.en, ar: f.ar, tags: f.tags && f.tags.length ? f.tags : def.tags },
    f.word,
    { hint: f.hint, difficulty: f.d || 2 },
  ));

  /* word-order pool */
  const orderPool = def.orders.map((o) => orderFrom(
    { en: o.en, ar: o.ar, tags: o.tags && o.tags.length ? o.tags : def.tags },
    { difficulty: o.d || 2 },
  ));

  /* mc pool — deterministic option rotation so the answer is not always first */
  const mcPool = def.mc.map((m, idx) => {
    const opts = [...m.options];
    const correct = opts[m.answerIndex];
    const shift = (cur.n + idx * 3) % opts.length;
    const rotated = [...opts.slice(shift), ...opts.slice(0, shift)];
    return {
      question: m.question,
      options: rotated,
      answerIndex: rotated.indexOf(correct),
      ar: m.ar,
      tags: m.tags && m.tags.length ? m.tags : def.tags,
      difficulty: m.d || 2,
      explanation: m.explanation,
      hint: m.hint,
    };
  });

  /* fresh pools against the global registry + local sets */
  const plan = slotPlan(count, { fill, order, mc });
  const usedLocal = new Set();
  const freshLt = [];
  for (const p of ltPool) {
    const key = normalizeForDup(p.en);
    if (usedLocal.has(key)) continue;
    if (freshLt.length >= count) break;
    usedLocal.add(key);
    if (!registryHas(p.en)) freshLt.push(p);
  }
  const seenF = new Set();
  const freshFills = [];
  for (const f of fillPool) {
    const key = normalizeForDup(f.en);
    if (seenF.has(key)) continue;
    seenF.add(key);
    if (registryHas(f.en)) continue;
    freshFills.push(f);
    if (freshFills.length >= plan.filter((x) => x === 'fill').length) break;
  }
  const seenO = new Set();
  const freshOrders = [];
  for (const o of orderPool) {
    const key = normalizeForDup(o.en);
    if (seenO.has(key)) continue;
    seenO.add(key);
    if (registryHas(o.en)) continue;
    freshOrders.push(o);
    if (freshOrders.length >= plan.filter((x) => x === 'order').length) break;
  }
  const seenQ = new Set();
  const freshMc = [];
  for (const m of mcPool) {
    const key = normalizeForDup(m.question);
    if (seenQ.has(key)) continue;
    seenQ.add(key);
    freshMc.push(m);
  }

  const ltSlots = plan.filter((x) => x === 'lt').length;
  if (freshLt.length < ltSlots) {
    throw new Error(`not enough unique sentences: need ${ltSlots} listen-and-type, have ${freshLt.length} fresh (pool ${ltPool.length}). Add scenarios/patterns.`);
  }
  if (freshFills.length < plan.filter((x) => x === 'fill').length) {
    throw new Error(`not enough fill sentences: need ${plan.filter((x) => x === 'fill')}, have ${freshFills.length}`);
  }
  if (freshOrders.length < plan.filter((x) => x === 'order').length) {
    throw new Error(`not enough word-order sentences: need ${plan.filter((x) => x === 'order')}, have ${freshOrders.length}`);
  }
  if (freshMc.length < plan.filter((x) => x === 'mc').length) {
    throw new Error(`not enough multiple-choice: need ${plan.filter((x) => x === 'mc')}, have ${freshMc.length}`);
  }

  const exercises = [];
  let n = 1, ltI = 0, fI = 0, oI = 0, mI = 0;
  for (let i = 0; i < count; i += 1) {
    const kindSlot = plan[i];
    if (kindSlot === 'fill') {
      const f = freshFills[fI++];
      markSeen(f.en);
      exercises.push(fillEx(lessonId, n++, f));
    } else if (kindSlot === 'order') {
      const o = freshOrders[oI++];
      markSeen(o.en);
      exercises.push(orderEx(lessonId, n++, o));
    } else if (kindSlot === 'mc') {
      exercises.push(mcEx(lessonId, n++, freshMc[mI++]));
    } else {
      const pair = freshLt[ltI++];
      markSeen(pair.en);
      exercises.push(ltEx(lessonId, n++, pair));
    }
  }

  return {
    id: lessonId,
    title: cur.title,
    titleAr: cur.titleAr,
    section: cur.section,
    level: cur.level,
    estimatedMinutes: estimatedMinutes(cur.level, kind),
    objectives: def.objectives,
    grammar: def.grammar,
    vocabulary: def.vocabulary,
    exercises,
  };
}

/* registry bridge (builder.js module state) */
import { isSeen, markSeen } from '../lib/builder.js';
function registryHas(en) { return isSeen(en); }

/* ---------- data loading ---------- */

async function loadDataFiles() {
  const bySection = new Map(SECTIONS_V2.map((s) => [s.id, []]));
  const files = readdirSync(DATA_DIR).filter((f) => /^s\d{2}-.*\.js$/.test(f)).sort();
  if (!files.length) throw new Error('no section data files found in v2/data (expected sXX-*.js)');
  for (const f of files) {
    const mod = await import(new URL(`file://${join(DATA_DIR, f)}`));
    const list = mod.lessons;
    if (!Array.isArray(list) || !list.length) throw new Error(`${f}: must export a non-empty "lessons" array`);
    for (const def of list) {
      def.__file = f;
      const sec = sectionOf(def.num);
      bySection.get(sec).push(def);
    }
  }
  return { bySection, files };
}

function sectionOf(n) {
  if (n <= 20) return 'foundations';
  if (n <= 45) return 'daily-life';
  if (n <= 70) return 'home-family';
  if (n <= 95) return 'food-services';
  if (n <= 120) return 'travel';
  if (n <= 145) return 'health-emergency';
  if (n <= 170) return 'social-communication';
  if (n <= 195) return 'work-money';
  if (n <= 220) return 'education-digital';
  if (n <= 240) return 'complex-rights';
  return 'specialized';
}

/* ---------- main ---------- */

export async function main() {
  resetRegistry();

  for (const s of SECTIONS_V2) {
    rmSync(join(ROOT, 'lessons', s.id), { recursive: true, force: true });
  }

  const { bySection, files } = await loadDataFiles();
  console.log(`data files: ${files.join(', ')}`);

  const errors = [];
  const vocabWords = new Set();
  let vocabItems = 0;
  const perSection = new Map(SECTIONS_V2.map((s) => [s.id, { lessons: 0, exercises: 0, vocab: 0 }]));
  const byLevel = {};

  for (const cur of CURRICULUM) {
    const defs = bySection.get(cur.section).filter((d) => d.num === cur.n);
    if (defs.length !== 1) {
      errors.push(`lesson ${cur.n} (${cur.title}): expected exactly 1 definition in section ${cur.section}, found ${defs.length}`);
      continue;
    }
    const def = defs[0];
    try {
      const lesson = buildLesson(cur, def, def.__file);
      const errs = validateLessonStructure(lesson);
      if (errs.length) throw new Error(`schema: ${errs.slice(0, 5).join(' | ')}`);
      writeLessonFile(lesson);
      const st = perSection.get(cur.section);
      st.lessons += 1;
      st.exercises += lesson.exercises.length;
      st.vocab += lesson.vocabulary.length;
      vocabItems += lesson.vocabulary.length;
      lesson.vocabulary.forEach((v) => vocabWords.add(String(v.word).toLowerCase()));
      byLevel[cur.level] = (byLevel[cur.level] || 0) + 1;
    } catch (e) {
      errors.push(`lesson ${cur.n} (${cur.title}) [${def.__file}]: ${e.message}`);
    }
  }

  /* manifest + global dup scan (import every produced file) */
  const manifest = [];
  const seenIds = new Set();
  const globalSeen = new Map();
  let raw = 0, dupes = 0;
  for (const cur of CURRICULUM) {
    const sec = cur.section;
    const id = `lesson-${String(cur.n).padStart(3, '0')}`;
    const rel = `lessons/${sec}/${id}.js`;
    if (!existsSync(join(ROOT, rel))) continue;
    const mod = await import(new URL(`file://${join(ROOT, rel)}`));
    const l = mod.default;
    if (!l || !l.id || seenIds.has(l.id)) { errors.push(`duplicate/missing lesson id in ${rel}`); continue; }
    seenIds.add(l.id);
    manifest.push({
      id: l.id,
      n: cur.n,
      title: l.title,
      titleAr: l.titleAr,
      section: sec,
      level: l.level,
      path: rel,
      exercises: l.exercises.length,
      available: true,
    });
    for (const ex of l.exercises) {
      const sentences = [];
      if (ex.type === 'listen-and-type' || ex.type === 'word-order' || ex.type === 'fill-blank') sentences.push(ex.en);
      for (const s of sentences) {
        raw += 1;
        const key = normalizeForDup(s);
        if (ex.type === 'listen-and-type') {
          const owner = globalSeen.get(key);
          if (owner !== undefined && owner !== l.id) { dupes += 1; errors.push(`CROSS-LESSON DUP [${owner} → ${l.id}]: ${s}`); }
        }
        if (!globalSeen.has(key)) globalSeen.set(key, l.id);
      }
    }
  }

  const manifestSrc = `/* LingoStep lesson manifest — generated by scripts/content/v2/compile.js
   250 lessons across 11 sections (v2 curriculum). Each entry maps to an
   independent lesson module loaded on demand by js/lesson-loader.js.
   "n" is the official lesson number (1..250) and matches the id. */
export const lessonManifest = ${JSON.stringify(manifest, null, 2)};
`;
  writeFileSync(join(ROOT, 'data/lesson-manifest.js'), manifestSrc, 'utf-8');

  const report = {
    generatedAt: new Date().toISOString(),
    curriculum: 'v2 — 250 lessons / 11 sections',
    totalLessons: manifest.length,
    totalExercises: manifest.reduce((s, m) => s + m.exercises, 0),
    uniqueSentences: globalSeen.size,
    rawSentences: raw,
    duplicates: dupes,
    vocabularyItems: vocabItems,
    uniqueVocabularyWords: vocabWords.size,
    byLevel,
    sections: SECTIONS_V2.map((s) => ({ section: s.id, ...(perSection.get(s.id) || {}) })),
  };
  writeFileSync(join(ROOT, 'scripts/content-report.json'), JSON.stringify(report, null, 2), 'utf-8');

  console.log('\n=== compile v2 summary ===');
  console.log(`lessons: ${report.totalLessons}/250, exercises: ${report.totalExercises}`);
  console.log(`raw sentences: ${raw}, unique: ${globalSeen.size}, duplicates: ${dupes}`);
  console.log(`vocabulary items: ${vocabItems}, unique words: ${vocabWords.size}`);
  for (const s of report.sections) console.log(`  ${s.section}: ${s.lessons} lessons / ${s.exercises} exercises / ${s.vocab} words`);
  if (errors.length) {
    console.error(`\nFAILED with ${errors.length} error(s):`);
    errors.slice(0, 40).forEach((e) => console.error('  -', e));
    if (errors.length > 40) console.error(`  ... and ${errors.length - 40} more`);
    process.exit(1);
  }
  if (report.totalLessons !== 250) {
    console.error(`FAILED: expected 250 lessons, got ${report.totalLessons}`);
    process.exit(1);
  }
  console.log('\nPASSED: 250 lessons compiled.');
}

/* run only when invoked directly: node scripts/content/v2/compile.js */
const isMain = process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href;
if (isMain) main().catch((e) => { console.error('compile v2 failed:', e); process.exit(1); });
