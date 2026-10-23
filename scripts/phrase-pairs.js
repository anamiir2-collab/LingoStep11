/* phrase-pairs.js — frequency report of EN n-gram → most common AR rendering.
   Surfaces systematic mistranslations across all 250 lessons. */
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { lessonManifest } from '../data/lesson-manifest.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const pairs = new Map(); // en phrase -> Map(ar phrase -> count)
function bump(en, ar) {
  if (!pairs.has(en)) pairs.set(en, new Map());
  const m = pairs.get(en);
  m.set(ar, (m.get(ar) || 0) + 1);
}

for (const entry of lessonManifest) {
  const mod = await import(new URL(`file://${join(ROOT, entry.path)}`));
  for (const ex of mod.default.exercises) {
    if (!ex.en || !ex.ar) continue;
    const en = ex.en.toLowerCase();
    // scan 2..4 word windows
    const words = en.replace(/[.!?]+$/,'').split(/\s+/);
    for (let n = 2; n <= 4; n++) {
      for (let i = 0; i + n <= words.length; i++) {
        const phrase = words.slice(i, i + n).join(' ');
        if (phrase.split(' ').every(w => ['i','you','he','she','it','we','they','the','a','an','is','are','am','was','were','do','does','did','have','has','my','your','his','her','our','their','this','that','to','of','and','in','on','at','for','with'].includes(w))) continue;
        bump(phrase, ex.ar);
      }
    }
  }
}

// find EN phrases that occur often AND whose top-AR variants disagree strongly
const rows = [];
for (const [en, m] of pairs) {
  const total = [...m.values()].reduce((a, b) => a + b, 0);
  if (total < 12) continue;
  const sorted = [...m.entries()].sort((a, b) => b[1] - a[1]);
  const top = sorted.slice(0, 3);
  const distinct = sorted.filter(([, c]) => c >= Math.max(2, total * 0.08)).length;
  rows.push({ en, total, distinct, top });
}
rows.sort((a, b) => b.total - a.total);
for (const r of rows.slice(0, 120)) {
  console.log(`[${r.total}x, ${r.distinct} variants] "${r.en}"`);
  for (const [ar, c] of r.top) console.log(`     ${c}x  ${ar.slice(0, 90)}`);
}
