# LingoStep — Learn English Step by Step

[![License: MIT](https://img.shields.io/badge/License-MIT-2e7ce6.svg)](LICENSE)
[![Lessons](https://img.shields.io/badge/lessons-250-2e7ce6.svg)](#the-eleven-learning-sections)
[![Exercises](https://img.shields.io/badge/exercises-13%2C925-2f9e5f.svg)](#the-eleven-learning-sections)
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

- **250 independent lessons** (numbered 1–250) in **11 progressive sections** — from first greetings to specialized English and a final capstone project.
- **13,925 exercises** carrying **11,279 verified unique practice sentences** (dictation, gap-fill and word-order) plus **2,996 vocabulary items** (1,844 unique words).
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
| **Grading** | Predictable and testable: `correct` / `minor` / `incorrect` / `empty`. Case and spacing are forgiven; missing final punctuation is `minor`; contractions and grammar differences are respected (configurable strict mode). |
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
| 8 | **Work & Money** | 25 | 171–195 | CVs, interviews, meetings, emails, presentations, salaries, budgeting, banking, contracts, invoices, remote work |
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