/* ============================================================
   content-audit.js — full-content inventory & quality audit.
   Phase-1 tool for the content review:
     1. inventory of every lesson (exercises, sentences, vocab)
     2. repetition analysis (max 4 rule)
        - exact sentence repetition across the whole app
        - template repetition (name/number variants treated as
          the same learning content inside one lesson)
        - vocabulary word repetition across the whole app
     3. Arabic quality scan (colloquialisms, missing tanween,
        Arabic inside English text, untranslated exercises)
     4. data integrity (acceptedAnswers, manifest counts)
   Writes scripts/content-audit-report.json
   Run: node scripts/content-audit.js
   ============================================================ */

import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { lessonManifest } from '../data/lesson-manifest.js';
import { normalizeForDup } from '../js/lesson-schema.js';
import { TANWEEN_MAP } from './fix-arabic.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const MAX_REPEAT = 4; // the hard cap requested for the whole app

/* ---------- helpers ---------- */

// Common first names used by the generators — name-swap variants of a
// sentence are the SAME learning content and count as repetitions.
const NAMES = new Set([
  'omar', 'sara', 'lina', 'khalid', 'youssef', 'ahmed', 'ahmad', 'mariam', 'mona',
  'ali', 'hassan', 'hussein', 'fatima', 'amina', 'layla', 'leila', 'nour', 'noor',
  'adam', 'hana', 'hanna', 'salma', 'yara', 'tariq', 'tarek', 'samir', 'huda',
  'john', 'mary', 'david', 'anna', 'peter', 'susan', 'mike', 'emma', 'tom',
  'mr', 'mrs', 'ms', 'dr', 'ali.', 'sara.', 'omar.',
]);

function templateKey(en) {
  let k = normalizeForDup(en);
  // numbers → #
  k = k.replace(/\b\d+\b/g, '#');
  // known names → NAME (word boundary, keep punctuation)
  k = k.replace(/[a-z']+/g, (w) => (NAMES.has(w.replace(/[.,!?]$/, '')) ? 'NAME' : w));
  return k;
}

const ARABIC_RE = /[\u0600-\u06FF]/;
const COLLOQUIAL = [
  'عشان', 'كده', 'ازاي', 'إزاي', 'أوي', 'اوي', 'خالص', 'دلوقتي',
  'عايز', 'عاوز', 'عايزة', 'برضه', 'بكده', 'مش', 'اللي', 'فين', 'ليه',
  'إمتى', 'امتى', 'كمان', 'أوكي', 'اوكي', 'سوري', 'بقة', 'يلا',
  'زي', 'هنروح', 'ده', 'دي', 'النهاردة', 'بكره', 'انهرده',
];

// whole-word Arabic match (no substring false positives like مشكلة/زيادة)
function arabicWords(text) {
  return String(text ?? '').split(/[^\u0600-\u06FF\u0640]+/).filter(Boolean);
}

// tanween candidate list comes from scripts/fix-arabic.js (single source of truth)


/* ---------- load all lessons ---------- */

const lessons = [];
for (const entry of lessonManifest) {
  const mod = await import(new URL(`file://${join(ROOT, entry.path)}`));
  lessons.push({ entry, lesson: mod.default });
}

/* ---------- 1. inventory ---------- */

const inventory = lessons.map(({ entry, lesson }) => {
  const byType = {};
  for (const ex of lesson.exercises) byType[ex.type] = (byType[ex.type] || 0) + 1;
  const sentences = new Set();
  for (const ex of lesson.exercises) {
    if (['listen-and-type', 'fill-blank', 'word-order'].includes(ex.type)) sentences.add(normalizeForDup(ex.en));
  }
  return {
    id: lesson.id, n: entry.n, title: lesson.title, titleAr: lesson.titleAr,
    section: lesson.section, level: lesson.level,
    exercises: lesson.exercises.length, byType,
    uniqueSentences: sentences.size,
    vocab: lesson.vocabulary.length,
    manifestCount: entry.exercises,
    manifestMismatch: entry.exercises !== lesson.exercises.length,
  };
});

/* ---------- 2. repetition ---------- */

// 2a. exact sentence repetition across the whole app
const exactCount = new Map(); // key -> {count, lessons:Set, sample}
for (const { lesson } of lessons) {
  for (const ex of lesson.exercises) {
    if (!['listen-and-type', 'fill-blank', 'word-order'].includes(ex.type)) continue;
    const key = normalizeForDup(ex.en);
    if (!exactCount.has(key)) exactCount.set(key, { count: 0, lessons: new Set(), sample: ex.en });
    const rec = exactCount.get(key);
    rec.count += 1;
    rec.lessons.add(lesson.id);
  }
}
const exactOver = [...exactCount.entries()]
  .filter(([, r]) => r.count > MAX_REPEAT)
  .map(([key, r]) => ({ key, count: r.count, lessons: [...r.lessons], sample: r.sample }))
  .sort((a, b) => b.count - a.count);

// 2b. template repetition inside each lesson (name/number swap padding)
const templateGroups = []; // {lessonId, templateKey, count, samples}
for (const { lesson } of lessons) {
  const groups = new Map();
  for (const ex of lesson.exercises) {
    if (ex.type !== 'listen-and-type') continue;
    const tk = templateKey(ex.en);
    if (!groups.has(tk)) groups.set(tk, []);
    groups.get(tk).push(ex.en);
  }
  for (const [tk, list] of groups) {
    if (list.length > MAX_REPEAT) {
      templateGroups.push({ lessonId: lesson.id, template: tk, count: list.length, samples: list.slice(0, 6) });
    }
  }
}
templateGroups.sort((a, b) => b.count - a.count);

// 2c. vocabulary word repetition across the whole app
const vocabCount = new Map();
for (const { lesson } of lessons) {
  for (const v of lesson.vocabulary) {
    const key = normalizeForDup(v.word);
    if (!vocabCount.has(key)) vocabCount.set(key, { count: 0, lessons: [], meaning: v.meaningAr });
    const rec = vocabCount.get(key);
    rec.count += 1;
    if (rec.lessons.length < 8) rec.lessons.push(lesson.id);
  }
}
const vocabOver = [...vocabCount.entries()]
  .filter(([, r]) => r.count > MAX_REPEAT)
  .map(([key, r]) => ({ word: key, count: r.count, lessons: r.lessons, meaning: r.meaning }))
  .sort((a, b) => b.count - a.count);

/* ---------- 3. Arabic quality ---------- */

const arabicIssues = { colloquial: [], tanween: 0, arabicInEnglish: [], missingTranslation: [], latinHeavyAr: [] };
for (const { lesson } of lessons) {
  const scanAr = (text, where) => {
    if (!text) return;
    const words = arabicWords(text);
    for (const word of COLLOQUIAL) {
      if (words.includes(word)) {
        arabicIssues.colloquial.push({ lesson: lesson.id, where, word, text: text.slice(0, 80) });
        break;
      }
    }
  };
  for (const ex of lesson.exercises) {
    if (ex.ar) {
      scanAr(ex.ar, `exercise ${ex.id}`);
      if (!ARABIC_RE.test(ex.ar)) arabicIssues.missingTranslation.push({ lesson: lesson.id, id: ex.id, en: ex.en, ar: ex.ar });
      else {
        const latin = (ex.ar.match(/[A-Za-z]/g) || []).length;
        const arab = (ex.ar.match(/[\u0600-\u06FF]/g) || []).length;
        if (latin > arab) arabicIssues.latinHeavyAr.push({ lesson: lesson.id, id: ex.id, ar: ex.ar.slice(0, 70) });
      }
      // tanween count
      for (const w of ex.ar.split(/\s+/)) {
        const clean = w.replace(/[.,!?؟،:;""()]/g, '');
        if (TANWEEN_MAP[clean] && TANWEEN_MAP[clean] !== clean && /ا$|ى$/.test(clean)) arabicIssues.tanween += 1;
      }
    }
    if (ex.en && ARABIC_RE.test(ex.en)) arabicIssues.arabicInEnglish.push({ lesson: lesson.id, id: ex.id, en: ex.en });
    if (ex.type === 'multiple-choice') for (const opt of ex.options || []) {
      if (ARABIC_RE.test(opt) === false && ARABIC_RE.test(ex.question)) { /* English options for English question: fine */ }
    }
  }
  for (const v of lesson.vocabulary) scanAr(v.meaningAr, `vocab ${v.word}`);
  if (lesson.grammar?.explanationAr) scanAr(lesson.grammar.explanationAr, 'grammar.explanationAr');
  if (lesson.titleAr) scanAr(lesson.titleAr, 'titleAr');
}

/* ---------- 4. data integrity ---------- */

const integrity = { manifestMismatch: [], dupAccepted: 0, acceptedMissingCanonical: 0, badWordOrderDup: 0 };
for (const inv of inventory) if (inv.manifestMismatch) integrity.manifestMismatch.push({ id: inv.id, manifest: inv.manifestCount, actual: inv.exercises });
for (const { lesson } of lessons) {
  for (const ex of lesson.exercises) {
    if (Array.isArray(ex.acceptedAnswers)) {
      const set = new Set(ex.acceptedAnswers.map(normalizeForDup));
      if (set.size !== ex.acceptedAnswers.length) integrity.dupAccepted += 1;
      if (ex.en && !set.has(normalizeForDup(ex.en)) && ex.type !== 'fill-blank') integrity.acceptedMissingCanonical += 1;
    }
  }
}

/* ---------- report ---------- */

const totals = {
  lessons: lessons.length,
  exercises: inventory.reduce((a, l) => a + l.exercises, 0),
  uniqueSentences: exactCount.size,
  vocabCards: [...vocabCount.values()].reduce((a, r) => a + r.count, 0),
  uniqueVocabWords: vocabCount.size,
};

const report = {
  generatedAt: new Date().toISOString(),
  maxRepeatAllowed: MAX_REPEAT,
  totals,
  inventory,
  repetition: {
    exactOverCap: exactOver,
    exactOverCapCount: exactOver.length,
    templatePaddingGroups: templateGroups.length,
    templatePaddingTop: templateGroups.slice(0, 60),
    vocabOverCap: vocabOver,
    vocabOverCapCount: vocabOver.length,
  },
  arabicQuality: {
    colloquialCount: arabicIssues.colloquial.length,
    colloquialSamples: arabicIssues.colloquial.slice(0, 40),
    tanweenCandidates: arabicIssues.tanween,
    arabicInEnglish: arabicIssues.arabicInEnglish,
    missingTranslation: arabicIssues.missingTranslation,
    latinHeavyArCount: arabicIssues.latinHeavyAr.length,
    latinHeavyArSamples: arabicIssues.latinHeavyAr.slice(0, 30),
  },
  integrity,
};

writeFileSync(join(ROOT, 'scripts/content-audit-report.json'), JSON.stringify(report, null, 2), 'utf-8');

console.log('=== content-audit ===');
console.log(`  lessons: ${totals.lessons} | exercises: ${totals.exercises} | unique sentences: ${totals.uniqueSentences} | vocab cards: ${totals.vocabCards} (${totals.uniqueVocabWords} unique)`);
console.log(`  [repetition] exact sentences over cap(${MAX_REPEAT}): ${exactOver.length}`);
console.log(`  [repetition] intra-lesson template padding groups (>4): ${templateGroups.length} (exercises inside: ${templateGroups.reduce((a, g) => a + g.count, 0)})`);
console.log(`  [repetition] vocab words over cap(${MAX_REPEAT}): ${vocabOver.length}`);
console.log(`  [arabic] colloquial hits: ${arabicIssues.colloquial.length} | tanween fix candidates: ${arabicIssues.tanween}`);
console.log(`  [arabic] Arabic inside English: ${arabicIssues.arabicInEnglish.length} | untranslated: ${arabicIssues.missingTranslation.length} | latin-heavy ar: ${arabicIssues.latinHeavyAr.length}`);
console.log(`  [integrity] manifest count mismatches: ${integrity.manifestMismatch.length} | duplicate acceptedAnswers: ${integrity.dupAccepted}`);
console.log('  full report: scripts/content-audit-report.json');
