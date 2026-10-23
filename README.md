
# LingoStep — Learn English Step by Step

[![License: MIT](https://img.shields.io/badge/License-MIT-2e7ce6.svg)](LICENSE)
[![Lessons](https://img.shields.io/badge/lessons-252-2e7ce6.svg)](#the-eleven-learning-sections)
[![Exercises](https://img.shields.io/badge/exercises-14%2C035-2f9e5f.svg)](#the-eleven-learning-sections)
[![PWA](https://img.shields.io/badge/PWA-installable-d97b1d.svg)](#install-lingostep-on-android-pwa--recommended)
[![Zero deps](https://img.shields.io/badge/runtime%20deps-0-77839a.svg)](#tech-stack)
[![Languages](https://img.shields.io/badge/UI-English%20%2B%20Arabic%20(RTL)-d4636f.svg)](#bilingual-ui)

LingoStep is a free, offline-friendly English learning web app. Listen to English sentences, type what you hear, get instant correction, study the grammar, and let spaced repetition bring your mistakes back at the right time. The whole interface works in **English and Arabic (RTL)**, and all progress stays on your device.

---

## Table of contents

- [Highlights](#highlights)
- [Features](#features)
- [The eleven learning sections](#the-eleven-learning-sections)
- [How each lesson file works](#how-each-lesson-file-works)
- [Adding a new lesson](#adding-a-new-lesson)
- [Running locally](#running-locally)
- [Validation and tests](#validation-and-tests)
- [Tech stack](#tech-stack)
- [Enable GitHub Pages](#enable-github-pages)
- [Install LingoStep on Android (PWA — recommended)](#install-lingostep-on-android-pwa--recommended)
- [Offline mode & local progress](#offline-mode--local-progress)
- [Backup & restore](#backup--restore)
- [Known browser speech limitations](#known-browser-speech-limitations)
- [Project structure](#project-structure)
- [License](#license)

---

## Highlights

- **252 independent lessons** (numbered 1–252) in **11 progressive sections** — from first greetings to specialized English and a final capstone project, plus dedicated operational-work lessons (warehouse, inventory, quality, safety).
- **14,035 exercises** carrying **11,364 verified unique practice sentences** (dictation, gap-fill and word-order) plus **3,022 vocabulary items** (1,924 unique words).
- **Zero runtime dependencies** — plain HTML/CSS/JS ES modules, no build step.
- **Browser-native speech** (Web Speech API) — no paid API, no keys.
- **XP system with anti-double-award ledger** — first-try 10 XP, hint-assisted 5 XP, lesson bonus 20 XP; reloads and repeated lessons never re-award.
- **57 Arabic motivational messages** in a standalone data file, `{name}`-aware, grouped by context.
- **Interactive on-screen keyboard** (A–Z, Shift, Space, Backspace, Clear, Enter) that edits the real input at the caret — native keyboards keep working.
- **Word-level answer feedback** — green / red / orange tokens show exactly which word was wrong or missing.
- **Sentence analysis word cards** — tap any word for its part of speech (10 classes, Arabic names), verified phonetics only, meaning, and pronunciation.
- **Vocabulary hub** — browse and practice only words from lessons you actually practiced.
- **Installable PWA** with offline support and service-worker caching.
- **IndexedDB progress** with export/import backups.

---

## Features

| Area | What you get |
|---|---|
| **Listening & typing** | Web Speech playback (normal + slow), replay, typed answers, instant feedback with the expected answer, Arabic meaning and a word-level diff. |
| **Exercise types** | `listen-and-type` (dictation), `fill-blank`, `word-order`, `multiple-choice`. |
| **Grammar** | Every lesson opens with an English + Arabic explanation, worked examples and key vocabulary. |
| **Grading** | Predictable and testable: `correct` / `minor` / `incorrect` / `empty`. Case and spacing are forgiven; **punctuation never decides the result** — missing, extra or different `. , ? ! : ;` marks still count as `correct`, while apostrophes inside contractions (`don't`, `I'm`) stay required; contraction differences are respected (configurable strict mode). |
| **Progress** | Completed lessons, accuracy, streaks, daily goal, time spent, resume position — all stored locally (IndexedDB with localStorage/memory fallbacks). |
| **Revision** | SM-2-inspired spaced repetition: mistakes return sooner, repeated correct answers push items away (1 → 2 → 4 → 8 → 16 → 35 days). Filter revision by lesson or grammar topic. |
| **Bilingual UI** | Full English/Arabic interface with automatic LTR/RTL layout switching. |
| **Themes** | Light, dark, and follow-system. |
| **Offline** | App shell precached; lessons cached as you open them; one-click **Download all lessons** in Settings; honest messaging when speech is unavailable. |
| **Safety** | No accounts, no tracking, no network calls beyond static hosting; safe text rendering (no `innerHTML` for user input); validated backup import. |

---

## The eleven learning sections

| # | Section | Lessons | Range | Focus |
|---|---|---|---|---|
| 1 | **Foundations & Core Communication** | 20 | 001–020 | greetings, self-introduction, pronouns, colors, days/months, numbers, family, question words, first sentences, pronunciation inside words |
| 2 | **Simple Daily Life** | 25 | 021–045 | routines, time, polite requests, thanks, phone calls, texts, appointments, descriptions, feelings, directions, cafés, transport |
| 3 | **Home & Family** | 25 | 046–070 | family ties, rooms, renting, cleaning, laundry, cooking, groceries, repairs, utilities, guests, neighbors, home safety |
| 4 | **Food, Shopping & Services** | 25 | 071–095 | restaurants, allergies, bills, supermarkets, clothes, returns, haggling, online orders, pharmacies, banks, post office |
| 5 | **Mobility & Travel** | 25 | 096–120 | buses, metro, taxis, driving, trains, airports, hotels, customs, currency, tours, travel problems |
| 6 | **Health & Emergencies** | 25 | 121–145 | doctors, symptoms, medicine, hospitals, insurance, emergency calls, first aid, healthy habits, caregiving |
| 7 | **Relationships & Social Communication** | 25 | 146–170 | small talk, invitations, opinions, advice, boundaries, conflicts, friendship, celebrations, etiquette |
| 8 | **Work & Money** | 27 | 171–195, 251–252 | CVs, interviews, meetings, emails, presentations, salaries, budgeting, banking, contracts, invoices, remote work, plus warehouse & inventory and tasks, quality & safety |
| 9 | **Education & Digital Skills** | 25 | 196–220 | schools, courses, exams, online learning, devices, security, video calls, AI tools, study skills |
| 10 | **Complex Situations & Rights** | 20 | 221–240 | formal complaints, refunds, landlord issues, police reports, insurance claims, immigration, formal letters |
| 11 | **Specialized English & Leadership** | 10 | 241–250 | business, finance, healthcare, technology, tourism, legal and HR English, leadership, public speaking, and a final real-life communication project (80-exercise capstone) |

Section minimums from the curriculum plan are enforced by `scripts/validate-lessons.js` (20 / 25 / 25 / 25 / 25 / 25 / 25 / 25 / 25 / 20 / 10 lessons and matching sentence minimums). Every lesson's number matches its id (`lesson-NNN` = official lesson number NNN), so the course is numbered 1–250 with no gaps or duplicates by construction.

---

## How each lesson file works

Every lesson is one independent ES module under `lessons/<section>/`:

```js
// lessons/foundations/lesson-013.js (excerpt)
export default {
  id: "lesson-013",
  title: "Present Simple — Affirmative",
  titleAr: "المضارع البسيط — الإثبات",
  section: "foundations",
  level: "A1",
  estimatedMinutes: 12,
  objectives: ["…", "…", "…"],
  grammar: {
    explanation: "…",      // ≥ 30 chars
    explanationAr: "…",    // ≥ 20 chars
    examples: [{ en: "…", ar: "…" } /* 2+ */]
  },
  vocabulary: [
    { word: "…", meaningAr: "…", example: "…" } /* 4+ */
  ],
  exercises: [
    {
      id: "lesson-013-ex-001",       // sequential, unique
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

data/lesson-manifest.js is the central registry (id, n, titles, section, level, path, exercise count, availability). The app never loads all lessons at startup — js/lesson-loader.js dynamically imports only the requested module, validates its structure before rendering, caches it, and shows a friendly error if a file is missing or invalid. All URLs resolve relative to the module location, so the app works at https://<user>.github.io/<repo>/ and at a domain root.

---

Adding a new lesson

1. Create lessons/<section>/lesson-NNN.js following the structure above (id must match the filename; exercise ids are lesson-NNN-ex-001…).
2. Register it in data/lesson-manifest.js:

```js
{
  id: "lesson-251",
  n: 251,
  title: "My New Lesson",
  titleAr: "درسي الجديد",
  section: "vocabulary",       // one of the 11 sections listed above
  level: "A2",
  path: "lessons/vocabulary/lesson-251.js",
  exercises: 55,               // keep in sync with the file
  available: true
}
```

3. Run npm run validate — it imports the lesson, checks the schema and counts, and fails on any problem.

---

Running locally

Any static file server works (ES modules need http, not file://):

```bash
npm start
# zero-dependency server on http://localhost:8080

# or:
python3 -m http.server 8080
```

Open http://localhost:8080, pick a section, press Listen, type what you hear.

---

Validation and tests

```bash
npm run validate          # structure + PWA + lessons + duplicates (CI gate)
npm run validate:lessons  # content only
npm run detect:duplicates # exact-dup check + similarity report
npm run check:repetition  # max-4 repetition gate (sentences / templates / vocab)
npm run audit:content     # full content inventory + Arabic quality audit
npm test                  # 9 test suites: grading, punctuation, storage/progress/review,
                          # navigation/paths, lessons, XP, motivation, word cards, letter track
npm run build:content     # regenerate all lessons + manifest from scripts/content/
```

· scripts/validate-lessons.js imports every lesson, validates the schema, checks manifest ↔ file mapping, per-section minimums, unique id/sentence rules and the 250-lesson / 11,000-sentence gates.
· scripts/detect-duplicates.js fails on any exact cross-lesson duplicate and writes a similarity report (scripts/duplicates-report.json) for human review — similar sentences are not auto-removed.
· scripts/check-repetition.js enforces the content rule that no sentence, name/number template group or vocabulary word is presented as new content more than four times across the whole app (methodology documented in the script header).
· The build must pass all of the above before deployment (enforced by GitHub Actions).

---

Tech stack

Layer Choice
App shell Single-page index.html, hash-based router
UI Plain HTML + CSS (no framework, no preprocessor)
Logic Vanilla JavaScript ES modules — no bundler, no build step
Speech Browser SpeechSynthesis (Web Speech API)
Storage IndexedDB (primary), localStorage + in-memory fallbacks
Offline Service worker with versioned cache
PWA manifest.json, installable on Android & iOS

---

Enable GitHub Pages

1. Push this project to a GitHub repository (name it LingoStep or anything you like).
2. Repository Settings → Pages → Build and deployment → Source: GitHub Actions.
3. The included workflow .github/workflows/deploy.yml runs validation + tests, then deploys the static site on every push to main (see .github/workflows/validate.yml for the validation-only PR workflow).
4. Your app will be live at https://<username>.github.io/<repo>/ — all asset paths are relative, so sub-path hosting works out of the box.

No Personal Access Token is needed for this flow; GitHub's built-in GITHUB_TOKEN handles deployment inside Actions.

---

Install LingoStep on Android (PWA — recommended)

LingoStep is an installable Progressive Web App: it opens from your home screen in a standalone window (no browser bars), uses the real LingoStep logo, and keeps working offline for cached lessons.

1. Open the live site in Chrome (or any modern Android browser): https://<username>.github.io/<repo>/
2. Tap the browser's ⋮ menu → "Install app" / "Add to Home screen" (wording varies by browser).
3. Confirm. The LingoStep icon appears on your home screen and in the app drawer.
4. Launch it — it starts in standalone mode with the app name and logo, and remembers your progress, language, and theme.

On iOS (Safari): Share → Add to Home Screen — same standalone experience.

Notes

· A PWA install is not a native Android app; it runs on the browser engine but behaves like one (own window, icon, offline cache).
· Prefer an actual APK? See docs/ANDROID-APK.md for the optional Capacitor build (not pre-built in this repo).
· After installing, open More → Application → Download all lessons once while online to make the whole course available offline.

---

Offline mode & local progress

· The service worker precaches the app shell and caches each lesson module the first time you open it. More → Application → Download all lessons fetches every lesson once so the complete course works offline. The cache is versioned; new deployments replace old caches cleanly.
· Progress (attempts, accuracy, streaks, revision schedule, settings) lives in IndexedDB (fallback: localStorage). Nothing is uploaded anywhere.
· ⚠️ Browser-local data is lost if you clear site data or switch devices. More → Backup & restore → Export progress produces a JSON backup; Import progress restores it (validated, with confirmation). Keep regular backups.

---

Backup & restore

1. More → Backup & restore → Export progress → downloads lingostep-backup-YYYY-MM-DD.json.
2. On another device/browser: More → Backup & restore → Import progress → choose the file → confirm the overwrite warning.
3. Import validates the file structure; invalid files are rejected without touching your data.

---

Known browser speech limitations

· Voices come from your browser/OS via the Web Speech API. Quality and availability vary; Chrome downloads voices lazily (reload once if the voice list is empty).
· Offline speech depends on locally installed voices; some systems have none. The app shows a clear message and reveals the sentence so every exercise stays usable.
· No external speech service, API key or subscription is used — if it can't speak, the app still works.
· Optional speech recognition (where supported) is never required.

---

Project structure

```
LingoStep11/
├── index.html                     # single-page app shell
├── manifest.json                  # PWA manifest
├── sw.js                          # service worker (shell + lesson caching)
├── capacitor.config.json          # optional Capacitor build config
├── css/
│   ├── style.css                  # main styles
│   ├── themes.css                 # light / dark tokens
│   └── responsive.css             # layout breakpoints
├── js/
│   ├── app.js                     # bootstrap
│   ├── router.js                  # hash router
│   ├── lesson-loader.js           # dynamic import + validation
│   ├── lesson-engine.js           # exercise runtime
│   ├── speech.js                  # Web Speech wrapper
│   ├── grading.js                 # correct / minor / incorrect / empty
│   ├── progress.js                # attempts, accuracy, streaks
│   ├── review.js                  # SM-2-inspired scheduler
│   ├── storage.js                 # IndexedDB + fallbacks
│   ├── settings.js                # theme, language, strict mode
│   ├── i18n.js                    # English / Arabic strings
│   ├── lesson-schema.js           # schema validator
│   ├── keyboard.js                # on-screen keyboard
│   ├── xp.js                      # XP + anti-double-award ledger
│   ├── motivation.js              # 57 Arabic messages
│   ├── word-cards.js              # sentence analysis word cards
│   ├── vocabulary.js              # vocabulary hub
│   └── utils.js
├── data/
│   ├── lesson-manifest.js         # registry of all 250 lessons
│   └── motivational-messages.js   # 57 Arabic messages ({name}-aware)
├── lessons/                       # 11 section folders, one .js per lesson
│   ├── foundations/               # lesson-001 … lesson-020
│   ├── daily-life/                # lesson-021 … lesson-045
│   ├── home-family/               # lesson-046 … lesson-070
│   ├── food-services/             # lesson-071 … lesson-095
│   ├── travel/                    # lesson-096 … lesson-120
│   ├── health-emergency/          # lesson-121 … lesson-145
│   ├── social-communication/      # lesson-146 … lesson-170
│   ├── work-money/                # lesson-171 … lesson-195
│   ├── education-digital/         # lesson-196 … lesson-220
│   ├── complex-rights/            # lesson-221 … lesson-240
│   └── specialized/               # lesson-241 … lesson-250
├── scripts/
│   ├── validate-lessons.js        # content gate
│   ├── detect-duplicates.js       # exact-dup + similarity report
│   ├── validate-project.js        # full pre-deployment gate
│   ├── serve.js                   # zero-dependency dev server
│   ├── make-icons.py              # PWA icon generator
│   └── content/                   # content engine + generators
│       ├── lib/                   # builder, conjugations, banks
│       └── gen-*.js               # deterministic curriculum generators
├── tests/                         # grading, storage, navigation, lesson, xp,
│                                  # motivation, word-cards test suites
├── docs/
│   └── ANDROID-APK.md             # optional Capacitor APK build
├── assets/icons/                  # PWA icons + lock symbol
└── .github/workflows/
    ├── validate.yml               # PR validation
    └── deploy.yml                 # GitHub Pages deployment
```

---

License

MIT — see LICENSE.

Original application, original curriculum content, original design. Not affiliated with any other English-learning product.

```