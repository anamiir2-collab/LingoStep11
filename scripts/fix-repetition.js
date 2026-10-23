/* ============================================================
   fix-repetition.js — enforce the max-4 repetition rule.
   Methodology (documented for the final report):
     - SENTENCE repetition: the same English sentence, compared
       after normalizing case/spacing/punctuation, counts as one
       content item each time it is PRESENTED as new practice
       content (listen-and-type / fill-blank / word-order).
       Cap: 4 occurrences across the whole app.
     - TEMPLATE repetition: sentences that differ only in a
       proper name or a number ("Good morning, Omar." /
       "Good morning, Sara.") teach the same content, so each
       template group inside one lesson is capped at 4; the
       excess is replaced with new topic sentences.
     - WORD repetition: a standalone vocabulary card (new word
       introduction) is capped at 4 app-wide. Words INSIDE
       different sentences never count as repetition. Review /
       revision reuse is not new content and never counts.
     - "Best four positions": for vocab cards, occurrences in
       lessons where the word is topically central (title or
       grammar explanation mentions it) are kept first.
   Run: node scripts/fix-repetition.js
   Exit 1 if any group still exceeds the cap afterwards.
   ============================================================ */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { lessonManifest } from '../data/lesson-manifest.js';
import { normalizeForDup } from '../js/lesson-schema.js';
import { REPLACEMENTS, DICT, cleanBank } from './repetition-bank.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const MAX = 4;
const NAMES = new Set([
  'omar', 'sara', 'lina', 'khalid', 'youssef', 'ahmed', 'ahmad', 'mariam', 'mona',
  'ali', 'hassan', 'hussein', 'fatima', 'amina', 'layla', 'leila', 'nour', 'noor',
  'adam', 'hana', 'hanna', 'salma', 'yara', 'tariq', 'tarek', 'samir', 'huda',
  'john', 'mary', 'david', 'anna', 'peter', 'susan', 'mike', 'emma', 'tom',
  'amal', 'nada', 'rami', 'salem', 'brown', 'taylor', 'parker',
]);

const STOPWORDS = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'to', 'of', 'in', 'on', 'at', 'for', 'with', 'is', 'are', 'am', 'was', 'were', 'be', 'been', 'do', 'does', 'did', 'have', 'has', 'had', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'my', 'your', 'his', 'her', 'our', 'their', 'this', 'that', 'these', 'those', 'will', 'would', 'can', 'could', 'should', 'not', 'no', 'please', 'when', 'where', 'what', 'how', 'very', 'me', 'him', 'us', 'them']);

function templateKey(en) {
  let k = normalizeForDup(en);
  k = k.replace(/\b\d+\b/g, '#');
  k = k.replace(/[a-z']+/g, (w) => (NAMES.has(w.replace(/[.,!?]$/, '')) ? 'NAME' : w));
  return k;
}

function sentenceWords(en) {
  return String(en ?? '').toLowerCase().replace(/[^a-z'\s]/g, ' ').split(/\s+/).filter(Boolean);
}

/* ---------- load ---------- */

const lessons = [];
for (const entry of lessonManifest) {
  const mod = await import(new URL(`file://${join(ROOT, entry.path)}`));
  lessons.push({ entry, lesson: mod.default });
}
const byId = new Map(lessons.map((x) => [x.lesson.id, x]));

/* global registries (counted over CURRENT content) */
const sentenceCount = new Map(); // normalized en -> count
for (const { lesson } of lessons) {
  for (const ex of lesson.exercises) {
    if (!['listen-and-type', 'fill-blank', 'word-order'].includes(ex.type)) continue;
    const k = normalizeForDup(ex.en);
    sentenceCount.set(k, (sentenceCount.get(k) || 0) + 1);
  }
}
const vocabCount = new Map(); // normalized word -> count
for (const { lesson } of lessons) {
  for (const v of lesson.vocabulary) {
    const k = normalizeForDup(v.word);
    vocabCount.set(k, (vocabCount.get(k) || 0) + 1);
  }
}

const dirtyFiles = new Set();
let exReplaced = 0;
let vocabReplaced = 0;
const problems = [];

/* ---------- 1. template padding (skip lesson-001: hand-rewritten) ---------- */

for (const { lesson } of lessons) {
  if (lesson.id === 'lesson-001') continue;
  const groups = new Map();
  lesson.exercises.forEach((ex, i) => {
    if (ex.type !== 'listen-and-type') return;
    const tk = templateKey(ex.en);
    if (!groups.has(tk)) groups.set(tk, []);
    groups.get(tk).push(i);
  });
  const bank = REPLACEMENTS[lesson.id] || [];
  let bankCursor = 0;
  for (const [tk, idxs] of groups) {
    if (idxs.length <= MAX) continue;
    const excess = idxs.slice(MAX);
    for (const i of excess) {
      const ex = lesson.exercises[i];
      // pick next unique replacement
      let chosen = null;
      while (bankCursor < bank.length) {
        const [en, ar] = bank[bankCursor];
        bankCursor += 1;
        const k = normalizeForDup(en);
        if ((sentenceCount.get(k) || 0) === 0) { chosen = [en, ar, k]; break; }
        // else: collision — try the next candidate
      }
      if (!chosen) { problems.push(`${lesson.id}: no unique replacement left for template ${tk}`); continue; }
      const [en, ar, k] = chosen;
      sentenceCount.set(k, 1);
      ex.en = en;
      ex.ar = ar;
      ex.acceptedAnswers = [en];
      exReplaced += 1;
      dirtyFiles.add(lesson.id);
    }
  }
}

/* ---------- 2. vocabulary over-cap ---------- */

const overCapWords = new Set([...vocabCount.entries()].filter(([, c]) => c > MAX).map(([k]) => k));
const sectionBank = cleanBank();
const bankUsed = new Set(); // `${section}:${word}`

for (const wordKey of overCapWords) {
  const occurrences = [];
  lessons.forEach(({ lesson }, li) => {
    lesson.vocabulary.forEach((v, vi) => {
      if (normalizeForDup(v.word) === wordKey) occurrences.push({ lesson, vi, li });
    });
  });
  if (occurrences.length <= MAX) continue;

  const topical = (o) => {
    const t = o.lesson.title || '';
    const ta = o.lesson.titleAr || '';
    const g = o.lesson.grammar?.explanation || '';
    const ga = o.lesson.grammar?.explanationAr || '';
    const w = wordKey;
    return t.toLowerCase().includes(w) || ga.includes(w) || g.toLowerCase().includes(new RegExp(`\\b${w}\\b`).source ? new RegExp(`\\b${w}\\b`, 'i').test(g) : false) || ta.includes(w);
  };
  occurrences.sort((a, b) => (topical(b) === topical(a) ? a.li - b.li : topical(b) ? 1 : -1));
  const keep = occurrences.slice(0, MAX);
  const excess = occurrences.slice(MAX);

  // lesson sentences for dict-sourced candidates
  const lessonSentenceCache = new Map();
  const sentencesOf = (lesson) => {
    if (!lessonSentenceCache.has(lesson.id)) {
      const list = [];
      for (const ex of lesson.exercises) {
        if (ex.type === 'listen-and-type' && ex.en) list.push(ex.en);
      }
      lessonSentenceCache.set(lesson.id, list);
    }
    return lessonSentenceCache.get(lesson.id);
  };

  for (const o of excess) {
    const lesson = o.lesson;
    const inLesson = new Set(lesson.vocabulary.map((v) => normalizeForDup(v.word)));
    // candidate priority 1: words from THIS lesson's own sentences that we know
    const candidates = [];
    for (const s of sentencesOf(lesson)) {
      for (const w of sentenceWords(s)) {
        if (DICT[w] && !inLesson.has(w) && !overCapWords.has(w) && (vocabCount.get(w) || 0) < MAX) candidates.push(w);
      }
    }
    // prefer the least-used candidates for variety
    candidates.sort((a, b) => (vocabCount.get(a) || 0) - (vocabCount.get(b) || 0));
    let replacement = null;
    for (const w of candidates) {
      replacement = {
        word: w,
        meaningAr: DICT[w],
        example: sentencesOf(lesson).find((s) => new RegExp(`\\b${w}\\b`, 'i').test(s)) || `I know this word: ${w}.`,
      };
      break;
    }
    // candidate priority 2: section bank
    if (!replacement) {
      for (const v of sectionBank[lesson.section] || []) {
        const k = normalizeForDup(v.word);
        const usedKey = `${lesson.section}:${k}`;
        if (inLesson.has(k) || overCapWords.has(k) || (vocabCount.get(k) || 0) >= MAX || bankUsed.has(usedKey)) continue;
        replacement = { word: v.word, meaningAr: v.meaningAr, example: v.example };
        bankUsed.add(usedKey);
        break;
      }
    }
    if (!replacement) { problems.push(`${lesson.id}: no vocab replacement for "${wordKey}"`); continue; }

    const old = lesson.vocabulary[o.vi];
    vocabCount.set(normalizeForDup(wordKey), (vocabCount.get(wordKey) || 1) - 1);
    vocabCount.set(normalizeForDup(replacement.word), (vocabCount.get(normalizeForDup(replacement.word)) || 0) + 1);
    lesson.vocabulary[o.vi] = { word: replacement.word, meaningAr: replacement.meaningAr, example: replacement.example };
    vocabReplaced += 1;
    dirtyFiles.add(lesson.id);
  }
}

/* ---------- write ---------- */

for (const id of dirtyFiles) {
  const { entry, lesson } = byId.get(id);
  const filePath = join(ROOT, entry.path);
  const src = readFileSync(filePath, 'utf-8');
  const headerEnd = src.indexOf('export default');
  const header = src.slice(0, headerEnd);
  const out = `${header}export default ${JSON.stringify(lesson, null, 2)};\n`;
  writeFileSync(filePath, out, 'utf-8');
}

/* ---------- post-verification ---------- */

const vocabFinal = new Map();
for (const { lesson } of lessons) {
  for (const v of lesson.vocabulary) vocabFinal.set(normalizeForDup(v.word), (vocabFinal.get(normalizeForDup(v.word)) || 0) + 1);
}
const stillOverVocab = [...vocabFinal.entries()].filter(([, c]) => c > MAX);
const stillOverSent = [...sentenceCount.entries()].filter(([, c]) => c > MAX);

console.log('=== fix-repetition ===');
console.log(`  template exercises replaced: ${exReplaced}`);
console.log(`  vocabulary cards replaced: ${vocabReplaced}`);
console.log(`  files rewritten: ${dirtyFiles.size}`);
if (stillOverSent.length) console.log(`  sentences over cap AFTER fix: ${stillOverSent.length}`);
if (stillOverVocab.length) console.log(`  vocab words over cap AFTER fix: ${stillOverVocab.length} -> ${stillOverVocab.slice(0, 5).map(([k, c]) => `${k}:${c}`).join(', ')}`);
if (problems.length) {
  console.error('PROBLEMS:');
  problems.slice(0, 20).forEach((p) => console.error('  -', p));
  process.exit(1);
}
if (stillOverVocab.length || stillOverSent.length) process.exit(1);
console.log('  repetition caps satisfied (max 4).');
