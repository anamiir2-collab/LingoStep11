# LingoStep — Learn English Step by Step

LingoStep is a free, offline-friendly English learning web app. Listen to English sentences, type what you hear, get instant correction, study the grammar, and let spaced repetition bring your mistakes back at the right time. The whole interface works in **English and Arabic (RTL)**, and all progress stays on your device.

- **250 independent lessons** (numbered 1–250) in 11 progressive sections — from first greetings to specialized English and a final capstone project
- **13,925 exercises** carrying **11,279 verified unique practice sentences** (dictation, gap-fill and word-order) plus **2,996 vocabulary items** (1,844 unique words)
- **Zero runtime dependencies** — plain HTML/CSS/JS ES modules, no build step
- **Browser-native speech** (Web Speech API) — no paid API, no keys
- **XP system with anti-double-award ledger** — first-try 10 XP, hint-assisted 5 XP, lesson bonus 20 XP; reloads and repeated lessons never re-award
- **57 Arabic motivational messages** in a standalone data file, `{name}`-aware, grouped by context
- **Interactive on-screen keyboard** (A–Z, Shift, Space, Backspace, Clear, Enter) that edits the real input at the caret — native keyboards keep working
- **Word-level answer feedback** — green/red/orange tokens show exactly which word was wrong or missing
- **Sentence analysis word cards** — tap any word for its part of speech (10 classes, Arabic names), verified phonetics only, meaning, and pronunciation
- **Vocabulary hub** — browse and practice only words from lessons you actually practiced
- **Installable PWA** with offline support and service-worker caching
- **IndexedDB progress** with export/import backups

---

## Features

| Area | What you get |
| --- | --- |
| Listening & typing | Web Speech playback (normal + slow), replay, typed answers, instant feedback with the expected answer, Arabic meaning and a word-level diff |
| Exercise types | `listen-and-type` (dictation), `fill-blank`, `word-order`, `multiple-choice` |
| Grammar | Every lesson opens with an English + Arabic explanation, worked examples and key vocabulary |
| Grading | Predictable and testable: `correct` / `minor` / `incorrect` / `empty`. Case and spacing are forgiven; missing final punctuation is `minor`; contractions and grammar differences are respected (configurable strict mode) |
| Progress | Completed lessons, accuracy, streaks, daily goal, time spent, resume position — all stored locally (IndexedDB with localStorage/memory fallbacks) |
| Revision | SM-2-inspired spaced repetition: mistakes return sooner, repeated correct answers push items away (1 → 2 → 4 → 8 → 16 → 35 days). Filter revision by lesson or grammar topic |
| Bilingual UI | Full English/Arabic interface with automatic LTR/RTL layout switching |
| Themes | Light, dark, and follow-system |
| Offline | App shell precached; lessons cached as you open them; one-click “Download all lessons” in Settings; honest messaging when speech is unavailable |
| Safety | No accounts, no tracking, no network calls beyond static hosting; safe text rendering (no innerHTML for user input); validated backup import |

## The eleven learning sections

1. **Foundations & Core Communication** — 20 lessons · greetings, self-introduction, pronouns, colors, days/months, numbers, family, question words, first sentences, pronunciation inside words
2. **Simple Daily Life** — 25 lessons · routines, time, polite requests, thanks, phone calls, texts, appointments, descriptions, feelings, directions, cafés, transport
3. **Home & Family** — 25 lessons · family ties, rooms, renting, cleaning, laundry, cooking, groceries, repairs, utilities, guests, neighbors, home safety
4. **Food, Shopping & Services** — 25 lessons · restaurants, allergies, bills, supermarkets, clothes, returns, haggling, online orders, pharmacies, banks, post office
5. **Mobility & Travel** — 25 lessons · buses, metro, taxis, driving, trains, airports, hotels, customs, currency, tours, travel problems
6. **Health & Emergencies** — 25 lessons · doctors, symptoms, medicine, hospitals, insurance, emergency calls, first aid, healthy habits, caregiving
7. **Relationships & Social Communication** — 25 lessons · small talk, invitations, opinions, advice, boundaries, conflicts, friendship, celebrations, etiquette
8. **Work & Money** — 25 lessons · CVs, interviews, meetings, emails, presentations, salaries, budgeting, banking, contracts, invoices, remote work
9. **Education & Digital Skills** — 25 lessons · schools, courses, exams, online learning, devices, security, video calls, AI tools, study skills
10. **Complex Situations & Rights** — 20 lessons · formal complaints, refunds, landlord issues, police reports, insurance claims, immigration, formal letters
11. **Specialized English & Leadership** — 10 lessons · business, finance, healthcare, technology, tourism, legal and HR English, leadership, public speaking, and a final real-life communication project (80-exercise capstone)

Section minimums from the curriculum plan are enforced by `scripts/validate-lessons.js` (20/25/25/25/25/25/25/25/25/20/10 lessons and matching sentence minimums). Every lesson's number matches its id (`lesson-NNN` = official lesson number NNN), so the course is numbered 1–250 with no gaps or duplicates by construction.

## How each lesson file works

Every lesson is one independent ES module under `lessons/<section>/`:

```js
// lessons/tenses/lesson-013.js (excerpt)
export default {
  id: "lesson-013",
  title: "Present Simple — Affirmative",
  titleAr: "المضارع البسيط — الإثبات",
  section: "tenses",
  level: "A1",
  estimatedMinutes: 12,
  objectives: ["…", "…", "…"],
  grammar: {
    explanation: "…",     // ≥ 30 chars
    explanationAr: "…",   // ≥ 20 chars
    examples: [{ en: "…", ar: "…" }, /* 2+ */]
  },
  vocabulary: [{ word: "…", meaningAr: "…", example: "…" } /* 4+ */],
  exercises: [
    {
      id: "lesson-013-ex-001",          // sequential, unique
      type: "listen-and-type",
      en: "I eat an apple every day.",
      ar: "آكل تفاحة كل يوم.",
      acceptedAnswers: ["I eat an apple every day."],
      grammarTags: ["present-simple"],
      difficulty: 1
    },
    // … fill-blank / word-order / multiple-choice
  ]
};
```

`data/lesson-manifest.js` is the central registry (id, titles, section, level, path, exercise count, availability). The app never loads all lessons at startup — `js/lesson-loader.js` dynamically imports only the requested module, validates its structure before rendering, caches it, and shows a friendly error if a file is missing or invalid. All URLs resolve **relative to the module location**, so the app works at `https://USER.github.io/REPO/` and at a domain root.

### Adding a new lesson

1. Create `lessons/<section>/lesson-124.js` following the structure above (id must match the filename; exercise ids are `lesson-124-ex-001`…).
2. Register it in `data/lesson-manifest.js`:
   ```js
   {
     id: "lesson-124",
     title: "My New Lesson",
     titleAr: "درسي الجديد",
     section: "vocabulary",        // must be one of the 7 sections
     level: "A2",
     path: "lessons/vocabulary/lesson-124.js",
     exercises: 55,                // keep in sync with the file
     available: true
   }
   ```
3. Run `npm run validate` — it imports the lesson, checks the schema and counts, and fails on any problem.

## Running locally

Any static file server works (ES modules need http, not `file://`):

```bash
npm start            # zero-dependency server on http://localhost:8080
# or: python3 -m http.server 8080
```

Open <http://localhost:8080>, pick a section, press **Listen**, type what you hear.

## Validation and tests

```bash
npm run validate           # structure + PWA + lessons + duplicates (CI gate)
npm run validate:lessons   # content only
npm run detect:duplicates  # exact-dup check + similarity report
npm test                   # 7 test suites: grading, storage/progress/review, navigation/paths, lessons, XP, motivation, word cards
npm run build:content      # regenerate all lessons + manifest from scripts/content/
```

- `scripts/validate-lessons.js` imports every lesson, validates the schema, checks manifest↔file mapping, per-section minimums, unique id/sentence rules and the 120-lesson / 6,000-sentence gates.
- `scripts/detect-duplicates.js` fails on any exact cross-lesson duplicate and writes a similarity report (`scripts/duplicates-report.json`) for human review — similar sentences are **not** auto-removed.
- The build must pass both before deployment (enforced by GitHub Actions).

## Enable GitHub Pages

1. Push this project to a GitHub repository (name it `LingoStep` or anything you like).
2. Repository **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The included workflow `.github/workflows/deploy.yml` runs validation + tests, then deploys the static site on every push to `main` (see `.github/workflows/validate.yml` for the validation-only PR workflow).
4. Your app will be live at `https://<username>.github.io/<repository>/` — all asset paths are relative, so sub-path hosting works out of the box.

No Personal Access Token is needed for this flow; GitHub’s built-in `GITHUB_TOKEN` handles deployment inside Actions.

## Install LingoStep on an Android phone (PWA — recommended)

LingoStep is an installable Progressive Web App: it opens from your home screen in a standalone window (no browser bars), uses the real LingoStep logo, and keeps working offline for cached lessons.

1. Open the live site in **Chrome** (or any modern Android browser): `https://<username>.github.io/<repository>/`
2. Tap the browser’s **⋮ menu → “Install app” / “Add to Home screen”** (wording varies by browser).
3. Confirm. The LingoStep icon appears on your home screen and in the app drawer.
4. Launch it — it starts in standalone mode with the app name and logo, and remembers your progress, language, and theme.

On iOS (Safari): **Share → “Add to Home Screen”** — same standalone experience.

Notes:
- A PWA install is not a native Android app; it runs on the browser engine but behaves like one (own window, icon, offline cache).
- Prefer an actual APK? See **docs/ANDROID-APK.md** for the optional Capacitor build (not pre-built in this repo).
- After installing, open **More → Application → Download all lessons** once while online to make the whole course available offline.

## Offline mode & local progress

- The service worker precaches the app shell and caches each lesson module the first time you open it. **More → Application → Download all lessons** fetches every lesson once so the complete course works offline. The cache is versioned; new deployments replace old caches cleanly.
- Progress (attempts, accuracy, streaks, revision schedule, settings) lives in **IndexedDB** (fallback: localStorage). Nothing is uploaded anywhere.
- ⚠️ Browser-local data is lost if you clear site data or switch devices. **More → Backup & restore → Export progress** produces a JSON backup; **Import progress** restores it (validated, with confirmation). Keep regular backups.

## Known browser speech limitations

- Voices come from your browser/OS via the Web Speech API. Quality and availability vary; Chrome downloads voices lazily (reload once if the voice list is empty).
- Offline speech depends on locally installed voices; some systems have none. The app shows a clear message and reveals the sentence so every exercise stays usable.
- No external speech service, API key or subscription is used — if it can’t speak, the app still works.
- Optional speech recognition (where supported) is never required.

## Backup & restore

1. **More → Backup & restore → Export progress** → downloads `lingostep-backup-YYYY-MM-DD.json`.
2. On another device/browser: **More → Backup & restore → Import progress** → choose the file → confirm the overwrite warning.
3. Import validates the file structure; invalid files are rejected without touching your data.

## Project structure

```
LingoStep/
├── index.html                  # single-page app shell
├── manifest.json               # PWA manifest
├── sw.js                       # service worker (shell + lesson caching)
├── css/                        # style.css, themes.css, responsive.css
├── js/                         # app, router, lesson-loader, lesson-engine,
│                               # speech, grading, progress, review, storage,
│                               # settings, i18n, utils, lesson-schema,
│                               # keyboard (on-screen), xp (rewards),
│                               # motivation, word-cards, vocabulary
├── data/
│   ├── lesson-manifest.js      # registry of all lessons
│   └── motivational-messages.js # 57 Arabic messages ({name}-aware)
├── lessons/                    # 7 section folders, one .js file per lesson
│   ├── basics/                 # lesson-001 … lesson-012
│   ├── tenses/                 # lesson-013 … lesson-036
│   ├── grammar/                # lesson-037 … lesson-052
│   ├── conversations/          # lesson-053 … lesson-072
│   ├── practical-scenarios/    # lesson-073 … lesson-088
│   ├── vocabulary/             # lesson-089 … lesson-104
│   └── listening-writing/      # lesson-105 … lesson-123
├── scripts/
│   ├── validate-lessons.js     # content gate
│   ├── detect-duplicates.js    # exact-dup + similarity report
│   ├── validate-project.js     # full pre-deployment gate
│   ├── serve.js                # zero-dependency dev server
│   ├── make-icons.py           # PWA icon generator
│   └── content/                # content engine + generators
│       ├── lib/                # builder, conjugations, banks
│       └── gen-*.js            # deterministic curriculum generators
├── tests/                      # grading, storage, navigation, lesson, xp,
│                               # motivation, word-cards tests
└── .github/workflows/          # validate.yml (PRs), deploy.yml (Pages)
```

## License

MIT — see [LICENSE](LICENSE). Original application, original curriculum content, original design. Not affiliated with any other English-learning product.
