/* ============================================================
   check-repetition.js — permanent gate for the max-4 rule.
   Run in CI or before any content change:
       node scripts/check-repetition.js     (npm run check:repetition)

   COUNTING METHODOLOGY (documented, stable):
   1. SENTENCE repetition — a "content presentation" is any
      listen-and-type / fill-blank / word-order exercise that
      carries the sentence. The same sentence (compared after
      lowercasing, collapsing whitespace and ignoring
      punctuation) may appear at most 4 times across the whole
      app. Review / revision sessions are runtime features, not
      content files, so they never count here.
   2. TEMPLATE repetition — sentences that differ only in a
      proper name or a number ("Good morning, Omar." /
      "Good morning, Sara.") teach the same content. Each such
      template group inside ONE lesson is capped at 4.
   3. WORD repetition — a standalone vocabulary card (a new
      word introduction) is capped at 4 app-wide. A word that
      merely appears INSIDE different sentences is not counted:
      function words would make that impossible, and the
      learning value there is the sentence, not the word.
   Exit 1 on any violation; prints a table of the worst groups.
   ============================================================ */

import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { lessonManifest } from '../data/lesson-manifest.js';
import { normalizeForDup } from '../js/lesson-schema.js';
import { stripPunct } from '../js/grading.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const MAX = 4;

const NAMES = new Set([
  'omar', 'sara', 'lina', 'khalid', 'youssef', 'ahmed', 'ahmad', 'mariam', 'mona',
  'ali', 'hassan', 'hussein', 'fatima', 'amina', 'layla', 'leila', 'nour', 'noor',
  'adam', 'hana', 'hanna', 'salma', 'yara', 'tariq', 'tarek', 'samir', 'huda',
  'john', 'mary', 'david', 'anna', 'peter', 'susan', 'mike', 'emma', 'tom',
  'amal', 'nada', 'rami', 'salem', 'brown', 'taylor', 'parker',
]);

function templateKey(en) {
  let k = stripPunct(en); // punctuation does not create a new sentence
  k = k.replace(/\b\d+\b/g, '#');
  k = k.replace(/[a-z']+/g, (w) => (NAMES.has(w) ? 'NAME' : w));
  return k;
}

const lessons = [];
for (const entry of lessonManifest) {
  const mod = await import(new URL(`file://${join(ROOT, entry.path)}`));
  lessons.push({ entry, lesson: mod.default });
}

/* 1. sentence repetition (whole app, punctuation-insensitive) */
const sentCount = new Map();
for (const { lesson } of lessons) {
  for (const ex of lesson.exercises) {
    if (!['listen-and-type', 'fill-blank', 'word-order'].includes(ex.type)) continue;
    const k = stripPunct(ex.en);
    if (!sentCount.has(k)) sentCount.set(k, { count: 0, sample: ex.en, lessons: new Set() });
    const r = sentCount.get(k);
    r.count += 1;
    r.lessons.add(lesson.id);
  }
}
const sentViolations = [...sentCount.entries()].filter(([, r]) => r.count > MAX);

/* 2. template repetition (per lesson) */
const tmplViolations = [];
for (const { lesson } of lessons) {
  const groups = new Map();
  for (const ex of lesson.exercises) {
    if (ex.type !== 'listen-and-type') continue;
    const k = templateKey(ex.en);
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(ex.en);
  }
  for (const [k, list] of groups) {
    if (list.length > MAX) tmplViolations.push({ lesson: lesson.id, template: k, count: list.length, samples: list.slice(0, 5) });
  }
}

/* 3. vocabulary card repetition (whole app) */
const vocabCount = new Map();
for (const { lesson } of lessons) {
  for (const v of lesson.vocabulary) {
    const k = normalizeForDup(v.word);
    if (!vocabCount.has(k)) vocabCount.set(k, { count: 0, sample: v.word, lessons: [] });
    const r = vocabCount.get(k);
    r.count += 1;
    if (r.lessons.length < 6) r.lessons.push(lesson.id);
  }
}
const vocabViolations = [...vocabCount.entries()].filter(([, r]) => r.count > MAX);

/* report */
console.log('=== check-repetition (max 4) ===');
console.log(`  content presentations scanned: ${[...sentCount.values()].reduce((a, r) => a + r.count, 0)}`);
console.log(`  unique sentences: ${sentCount.size} | unique vocab words: ${vocabCount.size}`);
let failed = false;
if (sentViolations.length) {
  failed = true;
  console.error(`  SENTENCE over cap: ${sentViolations.length}`);
  sentViolations.slice(0, 10).forEach(([, r]) => console.error(`    x${r.count} [${[...r.lessons].join(',')}] "${r.sample}"`));
} else console.log('  sentences: OK (no string exceeds 4 presentations)');
if (tmplViolations.length) {
  failed = true;
  console.error(`  TEMPLATE over cap: ${tmplViolations.length}`);
  tmplViolations.slice(0, 10).forEach((t) => console.error(`    ${t.lesson} x${t.count}: ${t.samples[0]}`));
} else console.log('  templates: OK (no name/number padding group exceeds 4)');
if (vocabViolations.length) {
  failed = true;
  console.error(`  VOCAB over cap: ${vocabViolations.length}`);
  vocabViolations.slice(0, 10).forEach(([k, r]) => console.error(`    x${r.count} [${r.lessons.join(',')}] "${k}"`));
} else console.log('  vocabulary: OK (no word card exceeds 4 introductions)');

if (failed) process.exit(1);
console.log('PASSED: max-4 repetition rule satisfied.');
