/* ============================================================
   Content engine v2 — lint.js
   Self-check for section data files (used by content authors).
   Checks the full definition contract AND estimates the
   listen-and-type yield per lesson (pattern expansion included)
   so shortfalls are caught before compiling.

   Usage:
     node scripts/content/v2/lint.js data/s01-a.js
     node scripts/content/v2/lint.js            (lint every file in v2/data)
   ============================================================ */

import { readdirSync } from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import { lintDef } from './compile.js';
import { expandPattern } from '../lib/builder.js';
import { normalizeForDup } from '../../../js/lesson-schema.js';

const HERE = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(HERE, 'data');

/* listen-and-type slots required per lesson kind (minus fill/order/mc slots) */
const LT_SLOTS = { lesson: 42, review: 50, capstone: 57 };
const KIND_BY_NUM = (n) => {
  const reviews = new Set([20, 45, 70, 95, 120, 145, 170, 195, 220, 240]);
  if (n === 250) return 'capstone';
  return reviews.has(n) ? 'review' : 'lesson';
};

const targets = process.argv.slice(2);
const files = targets.length
  ? targets.map((t) => (t.includes('/') ? t : join('data', t)))
  : readdirSync(DATA_DIR).filter((f) => /^s\d{2}-.*\.js$/.test(f)).map((f) => join('data', f));

if (!files.length) {
  console.error('nothing to lint: pass a data file (e.g. node lint.js data/s01-a.js) or add files to v2/data');
  process.exit(1);
}

let hadErrors = false;

for (const rel of files) {
  const abs = rel.startsWith('/') ? rel : new URL(`file://${join(HERE, rel)}`).href;
  const mod = await import(abs);
  const list = mod.lessons;
  const name = basename(rel);
  if (!Array.isArray(list) || !list.length) {
    console.error(`✗ ${name}: must export a non-empty "lessons" array`);
    hadErrors = true;
    continue;
  }

  /* local sentence-duplicate map inside the file (across lessons) */
  const seen = new Map();
  let fileDupes = 0;

  console.log(`\n=== ${name} — ${list.length} lesson definition(s) ===`);

  for (const def of list) {
    try {
      lintDef(def, name);
    } catch (e) {
      console.error(`✗ lesson ${def.num}:\n${e.message}`);
      hadErrors = true;
      continue;
    }

    const kind = KIND_BY_NUM(def.num);
    const need = LT_SLOTS[kind];

    /* yield estimate: scenarios + pattern expansions (unique, local file scope) */
    const pool = [];
    for (const s of def.scenario) pool.push(s.en);
    for (const p of def.patterns || []) {
      try {
        for (const pair of expandPattern(p)) pool.push(pair.en);
      } catch (err) {
        console.error(`✗ lesson ${def.num} pattern "${p.tmpl}": ${err.message}`);
        hadErrors = true;
      }
    }
    const uniq = [];
    const local = new Set();
    for (const en of pool) {
      const key = normalizeForDup(en);
      if (local.has(key)) continue;
      local.add(key);
      uniq.push(en);
    }
    /* cross-lesson dupes inside the same file */
    for (const en of uniq) {
      const key = normalizeForDup(en);
      if (seen.has(key)) { fileDupes += 1; console.error(`✗ lesson ${def.num}: sentence already used in lesson ${seen.get(key)}: "${en}"`); }
      else seen.set(key, def.num);
    }

    const okYield = uniq.length >= need + 6;   // 6+ margin for cross-file collisions
    const warnYield = !okYield && uniq.length >= need;
    if (!okYield && !warnYield) hadErrors = true;

    console.log(
      `  lesson ${String(def.num).padStart(3, '0')} [${kind}] vocab:${def.vocabulary.length} `
      + `scenario:${def.scenario.length} patterns:${(def.patterns || []).length} `
      + `yield:${uniq.length} need:~${need} ${okYield ? 'OK' : warnYield ? 'TIGHT' : 'SHORT'}`
    );
  }

  if (fileDupes > 0) hadErrors = true;
}

console.log(hadErrors ? '\nLINT: FAIL' : '\nLINT: PASS');
process.exit(hadErrors ? 1 : 0);
