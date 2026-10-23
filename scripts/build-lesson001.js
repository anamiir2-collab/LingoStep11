/* ============================================================
   build-lesson001.js — hand-authored rebuild of lesson-001
   (Greetings and Goodbyes), per the content spec:
   - covers time-of-day greetings, the "How are you?" family,
     common responses, meeting people, farewells and informal
     expressions from the approved list
   - every Arabic string is simple MSA (فصحى) following the
     approved translation table (أهلًا، مرحبًا، طاب يومك…)
   - no name-swap padding: 55 exercises, each teaching something
   - writes the file in the exact builder.js format and syncs
     the manifest exercise count
   Run: node scripts/build-lesson001.js
   ============================================================ */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const lt = (en, ar, d = 1) => ({ type: 'listen-and-type', en, ar, difficulty: d });
const fb = (display, blankWord, en, ar, hint) => ({ type: 'fill-blank', display, blankWord, en, ar, difficulty: 2, ...(hint ? { hint } : {}) });
const wo = (en, ar, words, d = 2) => ({ type: 'word-order', en, ar, words, difficulty: d });
const mc = (question, options, answerIndex, ar, d = 2) => ({ type: 'multiple-choice', question, options, answerIndex, ar, difficulty: d });

const EX = [
  lt("Hello! How are you?", "مرحبًا! كيف حالك؟"),
  lt("Hi, Sara!", "أهلًا يا سارة!"),
  lt("Good morning.", "صباح الخير."),
  lt("Good afternoon.", "طاب يومك."),
  lt("Good evening.", "مساء الخير."),
  lt("Good night.", "تصبح على خير."),
  lt("How are you?", "كيف حالك؟"),
  lt("How are you doing?", "كيف تسير أمورك؟"),
  lt("How's it going?", "كيف تسير الأمور؟"),
  lt("What's up?", "ما الأخبار؟"),
  lt("How have you been?", "كيف كانت أحوالك منذ آخر لقاء؟"),
  lt("Long time no see!", "لم أرك منذ وقت طويل!"),
  lt("I'm fine, thanks.", "أنا بخير، شكرًا لك."),
  lt("Pretty good.", "أنا بخير إلى حد كبير."),
  lt("Not bad.", "لا بأس."),
  lt("Can't complain.", "الأمور تسير على ما يرام."),
  lt("Same as usual.", "كالمعتاد."),
  lt("Good, thanks for asking.", "أنا بخير، شكرًا لسؤالك."),
  lt("Nice to meet you, Sara.", "سررت بلقائك يا سارة."),
  lt("Nice to see you.", "سعيد برؤيتك."),
  lt("Welcome!", "أهلًا وسهلًا."),
  lt("Welcome back!", "أهلًا بعودتك!"),
  fb("___! How are you?", "Hello", "Hello! How are you?", "مرحبًا! كيف حالك؟", "تحية"),
  lt("I'm fine, thanks. And you?", "أنا بخير، شكرًا لك. وأنت؟", 2),
  lt("Bye, everyone!", "إلى اللقاء جميعًا!"),
  lt("Goodbye!", "مع السلامة."),
  lt("See you!", "أراك لاحقًا!"),
  lt("See you later, my friend.", "أراك لاحقًا يا صديقي."),
  lt("See you soon, everyone.", "أراك قريبًا جميعًا."),
  lt("See you tomorrow, Omar.", "أراك غدًا يا عمر."),
  lt("Take care.", "اعتنِ بنفسك."),
  lt("Have a nice day!", "أتمنى لك يومًا سعيدًا!"),
  lt("Have a good one!", "أتمنى لك يومًا سعيدًا!", 2),
  lt("Talk to you later.", "سأتحدث معك لاحقًا.", 2),
  lt("Catch you later.", "أراك لاحقًا.", 2),
  lt("I gotta go.", "يجب أن أذهب الآن.", 2),
  lt("I'm off.", "سأغادر الآن.", 2),
  lt("Later, my friend!", "إلى اللقاء يا صديقي!", 2),
  lt("Keep in touch.", "حافظ على التواصل.", 2),
  lt("Take it easy.", "تمهّل وخذ الأمور ببساطة.", 2),
  lt("Gotta run!", "يجب أن أغادر بسرعة!", 2),
  lt("Talk soon.", "سنتحدث قريبًا.", 2),
  lt("Hey, what's up?", "أهلًا، ما الأخبار؟", 2),
  lt("See ya, Omar!", "إلى اللقاء يا عمر!", 2),
  fb("Good ___, teacher.", "morning", "Good morning, teacher.", "صباح الخير يا معلم.", "وقت اليوم"),
  fb("I am fine, thank ___.", "you", "I am fine, thank you.", "أنا بخير، شكرًا لك."),
  fb("___ to meet you, Sara.", "Nice", "Nice to meet you, Sara.", "سررت بلقائك يا سارة.", "تحية لقاء"),
  fb("Welcome ___!", "back", "Welcome back!", "أهلًا بعودتك!", "العودة"),
  wo("How are you?", "كيف حالك؟", ["you", "are", "How"]),
  wo("I am fine, thank you.", "أنا بخير، شكرًا لك.", ["I", "am", "fine,", "thank", "you."]),
  wo("See you later, my friend.", "أراك لاحقًا يا صديقي.", ["you", "later,", "my", "friend", "See"]),
  wo("Nice to meet you, Sara.", "سررت بلقائك يا سارة.", ["you,", "Nice", "meet", "to", "Sara."]),
  mc("Which greeting do you use in the morning?", ["Good night", "Goodbye", "See you later", "Good morning"], 3, "أي تحية تستخدمها في الصباح؟"),
  mc('Someone asks "How are you?" What is a good answer?', ["I am fine, thank you.", "My name is Omar.", "Good night.", "See you later."], 0, "سألك أحدهم How are you؟ ما الجواب المناسب؟"),
  mc("What do you say when you leave at night?", ["Good night.", "Good morning.", "What's up?", "Nice to meet you."], 0, "ماذا تقول عندما تنصرف ليلًا؟"),
];

// sanity: exactly 55 exercises
if (EX.length !== 55) {
  console.error(`exercise list has ${EX.length} items, expected 55`);
  process.exit(1);
}

const lesson = {
  id: "lesson-001",
  title: "Greetings and Goodbyes",
  titleAr: "التحيات والوداع",
  section: "foundations",
  level: "A1",
  estimatedMinutes: 12,
  objectives: [
    "Greet people at any time of day",
    'Ask and answer "How are you?" in natural ways',
    "Say goodbye with common formal and informal phrases",
  ],
  grammar: {
    explanation: 'English greetings change with the time of day: "Good morning" before noon, "Good afternoon" during the afternoon, and "Good evening" after sunset. Use "Good night" ONLY when leaving at night or going to bed — it is a farewell, not a greeting. "Hello" and "Hi" work any time; "Hi", "Hey", "What\'s up?" and "How\'s it going?" are informal and common between friends. To answer "How are you?", say "I\'m fine, thanks" or "Pretty good", then ask back "And you?". To leave politely, use "Goodbye", "See you later", "Take care" or "Have a nice day". Some farewells are more American ("Catch you later", "Have a good one") while "Keep in touch" works everywhere.',
    explanationAr: "تتغير التحيات الإنجليزية حسب وقت اليوم: Good morning قبل الظهر، وGood afternoon بعد الظهر، وGood evening بعد الغروب. أما Good night فتُستخدم فقط عند الوداع ليلًا أو قبل النوم، فهي وداع وليست تحية، بينما Good evening تُستخدم للتحية عند اللقاء مساءً. تعمل Hello وHi في أي وقت، وتُعد Hi وHey وWhat's up? وHow's it going? تعبيرات غير رسمية شائعة بين الأصدقاء. عند سؤالك How are you? أجب بـ I'm fine, thanks أو Pretty good ثم اسأل And you? وللوداع المهذب استخدم Goodbye أو See you later أو Take care أو Have a nice day. بعض الوداعات أكثر شيوعًا في الإنجليزية الأمريكية مثل Catch you later وHave a good one، بينما Keep in touch مناسبة في كل الأحوال.",
    examples: [
      { en: "Good morning! How are you?", ar: "صباح الخير! كيف حالك؟" },
      { en: "What's up? Long time no see!", ar: "ما الأخبار؟ لم أرك منذ وقت طويل!" },
      { en: "Good night. Take care.", ar: "تصبح على خير. اعتنِ بنفسك." },
    ],
  },
  vocabulary: [
    { word: "hello", meaningAr: "مرحبًا", example: "Hello, my friend!", ipa: "həˈloʊ" },
    { word: "hi", meaningAr: "أهلًا", example: "Hi, Sara! How are you?", ipa: "haɪ" },
    { word: "good morning", meaningAr: "صباح الخير", example: "Good morning, teacher." },
    { word: "good afternoon", meaningAr: "طاب يومك", example: "Good afternoon, everyone." },
    { word: "good evening", meaningAr: "مساء الخير", example: "Good evening, everyone." },
    { word: "good night", meaningAr: "تصبح على خير", example: "Good night. Sleep well." },
    { word: "how are you?", meaningAr: "كيف حالك؟", example: "How are you today?" },
    { word: "fine", meaningAr: "بخير", example: "I am fine, thank you.", ipa: "faɪn" },
    { word: "see you later", meaningAr: "أراك لاحقًا", example: "See you later, Omar." },
    { word: "take care", meaningAr: "اعتنِ بنفسك", example: "Goodbye, take care!" },
    { word: "nice to meet you", meaningAr: "سررت بلقائك", example: "Nice to meet you, Lina." },
    { word: "welcome", meaningAr: "أهلًا وسهلًا", example: "Welcome to our school.", ipa: "ˈwelkəm" },
  ],
  exercises: [],
};

/* attach sequential ids + tags */
EX.forEach((ex, i) => {
  ex.id = `lesson-001-ex-${String(i + 1).padStart(3, "0")}`;
  ex.grammarTags = ["greetings"];
  if (ex.type === "listen-and-type") ex.acceptedAnswers = [ex.en];
  if (ex.type === "fill-blank") {
    ex.acceptedAnswers = [ex.blankWord]; // grading is case-insensitive
  }
  if (ex.type === "word-order") ex.acceptedAnswers = [ex.en];
});
lesson.exercises = EX;

/* ---------- write lesson file ---------- */
const filePath = join(ROOT, "lessons/foundations/lesson-001.js");
const body = JSON.stringify(lesson, null, 2);
writeFileSync(filePath, `// LingoStep lesson — auto-registered in data/lesson-manifest.js\n// Grammar topic: ${lesson.title}\nexport default ${body};\n`, "utf-8");

/* ---------- sync manifest exercise count ---------- */
const manifestPath = join(ROOT, "data/lesson-manifest.js");
let manifest = readFileSync(manifestPath, "utf-8");
const marker = '"id": "lesson-001"';
const at = manifest.indexOf(marker);
if (at === -1) throw new Error("lesson-001 not found in manifest");
const nextChunk = manifest.slice(at, at + 400);
const updated = nextChunk.replace(/"exercises": \d+/, '"exercises": 55');
if (updated === nextChunk && !/"exercises": 55/.test(nextChunk)) {
  throw new Error("exercises count not found near lesson-001 entry");
}
manifest = manifest.slice(0, at) + updated + manifest.slice(at + 400);
writeFileSync(manifestPath, manifest, "utf-8");

console.log(`lesson-001 rebuilt: ${lesson.exercises.length} exercises; manifest count synced to 55.`);
