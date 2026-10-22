/* ============================================================
   Content engine — gen-all.js (v2)
   Thin orchestrator that compiles the full 250-lesson v2
   curriculum (all 11 sections) in ONE process so the global
   sentence-dedup registry sees every lesson, then writes
   data/lesson-manifest.js and scripts/content-report.json.
   Usage: node scripts/content/gen-all.js
   ============================================================ */

import { main } from './v2/compile.js';

await main();
