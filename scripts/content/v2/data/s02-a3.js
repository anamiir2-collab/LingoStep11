/* ============================================================
   v2 section data — s02-a3.js
   Daily Life · lessons 28–33 (phone, texts, appointments,
   contact details, describing people and places)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

/* ---------- local banks ---------- */

/* character adjectives with gendered Arabic forms */
const CHAR_ADJ = {
  kind: { m: 'طيب', f: 'طيبة' },
  funny: { m: 'مضحك', f: 'مضحكة' },
  smart: { m: 'ذكي', f: 'ذكية' },
  generous: { m: 'كريم', f: 'كريمة' },
  serious: { m: 'جاد', f: 'جادة' },
  friendly: { m: 'ودود', f: 'ودودة' },
  honest: { m: 'صادق', f: 'صادقة' },
  helpful: { m: 'متعاون', f: 'متعاونة' },
};
const charAdj = (agr) => Object.entries(CHAR_ADJ).map(([en, v]) => ({ en, ar: agr === 'she' ? v.f : v.m }));

/* singular third-person subjects for describing people */
const DESCRIBE_S = [
  { en: 'He', ar: 'هو', agr: 'he' }, { en: 'She', ar: 'هي', agr: 'she' },
  { en: 'My father', ar: 'أبي', agr: 'he' }, { en: 'My mother', ar: 'أمي', agr: 'she' },
  { en: 'My teacher', ar: 'معلمي', agr: 'he' }, { en: 'My aunt', ar: 'عمتي', agr: 'she' },
];

/* singular places with grammatical gender for describing places */
const PLACES = [
  { en: 'park', ar: 'الحديقة', g: 'f' },
  { en: 'market', ar: 'السوق', g: 'm' },
  { en: 'café', ar: 'المقهى', g: 'm' },
  { en: 'city', ar: 'المدينة', g: 'f' },
  { en: 'mall', ar: 'المركز التجاري', g: 'm' },
  { en: 'library', ar: 'المكتبة', g: 'f' },
  { en: 'village', ar: 'القرية', g: 'f' },
];
const placePairAdj = (x) => (x.P.g === 'f'
  ? [
    { en: 'quiet and green', ar: 'هادئة وخضراء' }, { en: 'old and beautiful', ar: 'قديمة وجميلة' },
    { en: 'small but clean', ar: 'صغيرة لكنها نظيفة' }, { en: 'big and modern', ar: 'كبيرة وحديثة' },
  ]
  : [
    { en: 'quiet and green', ar: 'هادئ وأخضر' }, { en: 'old and beautiful', ar: 'قديم وجميل' },
    { en: 'clean and modern', ar: 'نظيف وحديث' }, { en: 'busy and big', ar: 'مزدحم وكبير' },
  ]);
const placeSingleAdj = (x) => (x.P.g === 'f'
  ? [
    { en: 'quiet', ar: 'هادئة' }, { en: 'busy', ar: 'مزدحمة' },
    { en: 'old', ar: 'قديمة' }, { en: 'modern', ar: 'حديثة' },
    { en: 'beautiful', ar: 'جميلة' }, { en: 'crowded', ar: 'مزدحمة' },
  ]
  : [
    { en: 'quiet', ar: 'هادئ' }, { en: 'busy', ar: 'مزدحم' },
    { en: 'old', ar: 'قديم' }, { en: 'modern', ar: 'حديث' },
    { en: 'beautiful', ar: 'جميل' }, { en: 'crowded', ar: 'مزدحم' },
  ]);

export const lessons = [

  /* ================= lesson 28 — Basic Phone Calls ================= */
  {
    num: 28,
    tags: ['phone-calls', 'daily-life'],
    objectives: [
      'Answer the phone and say who you are',
      'Ask for a person and leave a message',
      'Use polite phone phrases like hold on',
    ],
    grammar: {
      explanation: 'Telephone English has its own habits. When you answer, say "Hello, this is Omar" — use "this is", not "I am". To ask for a person, say "Is Sara there, please?" or "Can I speak to Sara?". If she is not there, say "Sorry, she is not here now" and offer "Can I take a message?". Use "Hold on, please" to ask someone to wait, and "I will call back later" as a friendly promise with will.',
      explanationAr: 'للمكالمات الهاتفية عاداتها الخاصة. عند الرد قل Hello, this is Omar، واستخدم this is وليس I am. وللسؤال عن شخص قل Is Sara there, please؟ أو Can I speak to Sara؟. وإذا لم تكن موجودة قل Sorry, she is not here now واعرض Can I take a message؟. واستخدم Hold on, please لطلب الانتظار، وI will call back later وعدا لطيفا بـ will.',
      examples: [
        { en: 'Hello, this is Omar.', ar: 'أهلا، أنا عمر.' },
        { en: 'Is Sara there, please?', ar: 'هل سارة موجودة، من فضلك؟' },
        { en: 'Hold on, please. I will get her.', ar: 'انتظر من فضلك. سأحضرها.' },
      ],
    },
    vocabulary: [
      { word: 'phone', meaningAr: 'هاتف', example: 'My new phone is small.', ipa: 'foʊn' },
      { word: 'call', meaningAr: 'مكالمة / يتصل', example: 'Give me a call, please.' },
      { word: 'message', meaningAr: 'رسالة', example: 'Can I leave a message?' },
      { word: 'hold on', meaningAr: 'انتظر قليلا', example: 'Hold on, please.' },
      { word: 'moment', meaningAr: 'لحظة', example: 'One moment, please.' },
      { word: 'line', meaningAr: 'خط (الهاتف)', example: 'The line is busy.' },
      { word: 'speak', meaningAr: 'يتكلم', example: 'Can I speak to Sara?' },
      { word: 'back', meaningAr: 'من جديد', example: 'He will call back soon.' },
      { word: 'busy', meaningAr: 'مشغول', example: 'The manager is busy now.' },
      { word: 'there', meaningAr: 'هناك / موجود', example: 'Is she there now?' },
      { word: 'hear', meaningAr: 'يسمع', example: 'Can you hear me?' },
      { word: 'tonight', meaningAr: 'الليلة', example: 'I will call you tonight.' },
    ],
    scenario: [
      { en: 'Hello, this is Omar.', ar: 'أهلا، أنا عمر.', d: 1 },
      { en: 'Hi Omar, this is Lina.', ar: 'أهلا عمر، أنا لينا.', d: 1 },
      { en: 'Is Sara there, please?', ar: 'هل سارة موجودة، من فضلك؟', d: 1 },
      { en: 'Sorry, she is not here now.', ar: 'آسف، هي ليست هنا الآن.', d: 1 },
      { en: 'Can I leave a message for her?', ar: 'هل أترك رسالة لها؟', d: 2 },
      { en: 'Yes, one moment, please.', ar: 'نعم، لحظة واحدة من فضلك.', d: 1 },
      { en: 'Can I speak to the manager?', ar: 'هل أتكلم مع المدير؟', d: 2 },
      { en: 'The lines are very busy today.', ar: 'الخطوط مشغولة جدا اليوم.', d: 2 },
      { en: 'My sisters are not at home now.', ar: 'أخواتي ليسن في المنزل الآن.', d: 2 },
      { en: 'I will call back later.', ar: 'سأعاود الاتصال لاحقا.', d: 1 },
      { en: 'Is this the right number?', ar: 'هل هذا الرقم صحيح؟', d: 2 },
      { en: 'Can you hear me well?', ar: 'هل تسمعني جيدا؟', d: 1 },
      { en: 'Yes, I can hear you well.', ar: 'نعم، أسمعك جيدا.', d: 1 },
      { en: 'Please ask him to call me.', ar: 'اطلب منه أن يتصل بي من فضلك.', d: 2 },
      { en: 'The children are asleep now.', ar: 'الأطفال نائمون الآن.', d: 2 },
      { en: 'When will she be home?', ar: 'متى ستكون في المنزل؟', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Hello, this is {N}.', arTmpl: 'أهلا، أنا {N_ar}.',
        slots: { N: B.NAMED_SING },
        tags: ['phone-calls'], d: 1, limit: 8,
      },
      {
        tmpl: 'Is {N} there, please?', arTmpl: 'هل {N_ar} {G_ar} من فضلك؟',
        slots: {
          N: B.NAMED_SING,
          G: (x) => [{ en: '', ar: x.N.agr === 'she' ? 'موجودة' : 'موجود' }],
        },
        tags: ['phone-calls', 'questions'], d: 1, limit: 8,
      },
      {
        tmpl: 'Can I speak to {N}, please?', arTmpl: 'هل أتكلم مع {N_ar} من فضلك؟',
        slots: { N: B.NAMED_SING },
        tags: ['phone-calls', 'questions'], d: 2, limit: 6,
      },
      {
        tmpl: 'Please tell {N} I called.', arTmpl: 'من فضلك بلغ {N_ar} أنني اتصلت.',
        slots: { N: B.NAMED_SING },
        tags: ['phone-calls', 'messages'], d: 2, limit: 6,
      },
      {
        tmpl: 'She is not here {T}.', arTmpl: 'هي ليست هنا {T_ar}.',
        slots: {
          T: [
            { en: 'now', ar: 'الآن' }, { en: 'at the moment', ar: 'في هذه اللحظة' },
            { en: 'today', ar: 'اليوم' }, { en: 'tonight', ar: 'الليلة' },
          ],
        },
        tags: ['phone-calls', 'negation'], d: 1, limit: 4,
      },
      {
        tmpl: 'I will call back {T}.', arTmpl: 'سأعاود الاتصال {T_ar}.',
        slots: {
          T: [
            { en: 'tomorrow', ar: 'غدا' }, { en: 'this evening', ar: 'هذا المساء' },
            { en: 'after lunch', ar: 'بعد الغداء' }, { en: 'on Sunday', ar: 'يوم الأحد' },
            { en: 'tonight', ar: 'الليلة' },
          ],
        },
        tags: ['phone-calls', 'will'], d: 2, limit: 5,
      },
    ],
    fills: [
      { en: 'Hello, this is Omar.', ar: 'أهلا، أنا عمر.', word: 'Hello', hint: 'تحية' },
      { en: 'Is Sara there, please?', ar: 'هل سارة موجودة، من فضلك؟', word: 'there' },
      { en: 'Can I leave a message for her?', ar: 'هل أترك رسالة لها؟', word: 'message', hint: 'رسالة' },
      { en: 'Hold on, please.', ar: 'انتظر من فضلك.', word: 'Hold', hint: 'فعل انتظار' },
      { en: 'I will call back later.', ar: 'سأعاود الاتصال لاحقا.', word: 'call' },
      { en: 'She is not here now.', ar: 'هي ليست هنا الآن.', word: 'now', hint: 'الزمن' },
      { en: 'Can you hear me well?', ar: 'هل تسمعني جيدا؟', word: 'hear' },
      { en: 'The lines are very busy today.', ar: 'الخطوط مشغولة جدا اليوم.', word: 'busy', hint: 'صفة' },
    ],
    orders: [
      { en: 'Hello, this is Omar.', ar: 'أهلا، أنا عمر.' },
      { en: 'Can I leave a message?', ar: 'هل أترك رسالة؟' },
      { en: 'I will call back later.', ar: 'سأعاود الاتصال لاحقا.' },
      { en: 'She is not here now.', ar: 'هي ليست هنا الآن.' },
      { en: 'Please ask him to call me.', ar: 'اطلب منه أن يتصل بي من فضلك.' },
      { en: 'Can you hear me well?', ar: 'هل تسمعني جيدا؟' },
    ],
    mc: [
      { question: 'You answer the phone. You say:', options: ['Hello, this is Omar.', 'I am Omar phone.', 'Omar is calling me.', 'This Omar speak.'], answerIndex: 0, ar: 'ترد على الهاتف، فتقول:' },
      { question: 'Sara is not there. You ask to:', options: ['leave a message', 'buy a phone', 'close the line', 'go to her house'], answerIndex: 0, ar: 'سارة غير موجودة، فتطلب:' },
      { question: '"Hold on, please" means:', options: ['انتظر قليلا', 'اتصل مرة أخرى', 'اترك رسالة', 'أغلق الهاتف'], answerIndex: 0, ar: 'ما معنى Hold on, please؟' },
      { question: '"I will call back later" means:', options: ['سأعاود الاتصال لاحقا', 'سأرسل رسالة نصية', 'سأنتظر هنا الآن', 'سأزورك غدا'], answerIndex: 0, ar: 'ما معنى I will call back later؟' },
      { question: 'Which phrase asks for another person?', options: ['Can I speak to Sara?', 'My number is new.', 'The line is busy.', 'I hear you well.'], answerIndex: 0, ar: 'أي عبارة تطلب التحدث مع شخص آخر؟' },
    ],
  },

  /* ================= lesson 29 — Text Messages ================= */
  {
    num: 29,
    tags: ['text-messages', 'daily-life'],
    objectives: [
      'Send short messages with common phrases',
      'Promise with will: I will call you later',
      'Say where you are: on my way, at home',
    ],
    grammar: {
      explanation: 'Text messages are short and direct. Use contractions like "I\'ll" for "I will", and answer with very short sentences: "On my way", "See you soon", "I am at home". Use will for promises and plans: "I will call you later", "I will send you the photos". Ask quick questions: "Where are you?", "Are you busy?", "Will you be home soon?". Keep the words small and the meaning clear.',
      explanationAr: 'الرسائل النصية قصيرة ومباشرة. استخدم الصيغ المختصرة مثل I\'ll بدلا من I will، وأجب بجمل قصيرة جدا: On my way، See you soon، I am at home. واستخدم will للوعود والخطط: I will call you later، I will send you the photos. واسأل أسئلة سريعة: Where are you؟ وAre you busy؟ وWill you be home soon؟. اجعل الكلمات قصيرة والمعنى واضحا.',
      examples: [
        { en: 'I will call you later.', ar: 'سأتصل بك لاحقا.' },
        { en: 'I am on my way.', ar: 'أنا في الطريق.' },
        { en: 'Are you busy now?', ar: 'هل أنت مشغول الآن؟' },
      ],
    },
    vocabulary: [
      { word: 'text', meaningAr: 'رسالة نصية', example: 'I will send you a text.' },
      { word: 'send', meaningAr: 'يرسل', example: 'Send me the file, please.' },
      { word: 'reply', meaningAr: 'يرد على', example: 'Please reply to my message.' },
      { word: 'later', meaningAr: 'لاحقا', example: 'Call me later, please.' },
      { word: 'soon', meaningAr: 'قريبا', example: 'I will be back soon.' },
      { word: 'way', meaningAr: 'طريق', example: 'I am on my way.' },
      { word: 'busy', meaningAr: 'مشغول', example: 'Are you busy now?' },
      { word: 'home', meaningAr: 'المنزل', example: 'I am at home now.' },
      { word: 'sorry', meaningAr: 'آسف', example: 'Sorry, I am late.' },
      { word: 'wait', meaningAr: 'ينتظر', example: 'Wait for me, please.' },
      { word: 'now', meaningAr: 'الآن', example: 'Where are you now?' },
      { word: 'tonight', meaningAr: 'الليلة', example: 'Call me tonight.' },
    ],
    scenario: [
      { en: 'I will call you later.', ar: 'سأتصل بك لاحقا.', d: 1 },
      { en: 'I am on my way.', ar: 'أنا في الطريق.', d: 1 },
      { en: 'See you soon, Sara.', ar: 'أراك قريبا يا سارة.', d: 1 },
      { en: 'Where are you now?', ar: 'أين أنت الآن؟', d: 1 },
      { en: 'I am at home.', ar: 'أنا في المنزل.', d: 1 },
      { en: 'Sorry, I am busy right now.', ar: 'آسف، أنا مشغول الآن.', d: 1 },
      { en: 'I cannot talk now.', ar: 'لا أستطيع الكلام الآن.', d: 2 },
      { en: 'I will send you the photos.', ar: 'سأرسل لك الصور.', d: 2 },
      { en: 'Did you get my text message?', ar: 'هل وصلتك رسالتي النصية؟', d: 2 },
      { en: 'Yes, I got it yesterday.', ar: 'نعم، وصلتني أمس.', d: 2 },
      { en: 'Please send me the address.', ar: 'أرسل لي العنوان من فضلك.', d: 2 },
      { en: 'Texts are quick and cheap.', ar: 'الرسائل النصية سريعة ورخيصة.', d: 2 },
      { en: 'Will you be home soon?', ar: 'هل ستكون في المنزل قريبا؟', d: 1 },
      { en: 'Yes, I will be there at six.', ar: 'نعم، سأكون هناك في السادسة.', d: 1 },
      { en: 'I do not like long calls.', ar: 'لا أحب المكالمات الطويلة.', d: 2 },
      { en: 'We can talk in the evening.', ar: 'يمكننا الكلام في المساء.', d: 2 },
      { en: 'Wait for me at the café.', ar: 'انتظرني في المقهى.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I will call you {T}.', arTmpl: 'سأتصل بك {T_ar}.',
        slots: {
          T: [
            { en: 'tomorrow', ar: 'غدا' }, { en: 'this evening', ar: 'هذا المساء' },
            { en: 'after work', ar: 'بعد العمل' }, { en: 'on Friday', ar: 'يوم الجمعة' },
            { en: 'tonight', ar: 'الليلة' }, { en: 'in the morning', ar: 'في الصباح' },
          ],
        },
        tags: ['text-messages', 'will'], d: 1, limit: 6,
      },
      {
        tmpl: 'I am at {P} now.', arTmpl: 'أنا في {P_ar} الآن.',
        slots: {
          P: [
            { en: 'home', ar: 'المنزل' }, { en: 'work', ar: 'العمل' },
            { en: 'school', ar: 'المدرسة' }, { en: 'the market', ar: 'السوق' },
            { en: 'the café', ar: 'المقهى' }, { en: 'the park', ar: 'الحديقة' },
          ],
        },
        tags: ['text-messages', 'places'], d: 1, limit: 6,
      },
      {
        tmpl: 'See you {T}.', arTmpl: 'أراك {T_ar}.',
        slots: {
          T: [
            { en: 'soon', ar: 'قريبا' }, { en: 'later', ar: 'لاحقا' },
            { en: 'tomorrow', ar: 'غدا' }, { en: 'on Sunday', ar: 'يوم الأحد' },
            { en: 'at eight', ar: 'في الثامنة' }, { en: 'next week', ar: 'الأسبوع القادم' },
          ],
        },
        tags: ['text-messages', 'goodbyes'], d: 1, limit: 6,
      },
      {
        tmpl: 'I will send you {O}.', arTmpl: 'سأرسل لك {O_ar}.',
        slots: {
          O: [
            { en: 'the photos', ar: 'الصور' }, { en: 'the file', ar: 'الملف' },
            { en: 'the link', ar: 'الرابط' }, { en: 'the video', ar: 'الفيديو' },
            { en: 'my address', ar: 'عنواني' }, { en: 'a message', ar: 'رسالة' },
          ],
        },
        tags: ['text-messages', 'will'], d: 2, limit: 6,
      },
      {
        tmpl: 'Are you {A} now?', arTmpl: 'هل أنت {A_ar} الآن؟',
        slots: {
          A: [
            { en: 'at home', ar: 'في المنزل' }, { en: 'at work', ar: 'في العمل' },
            { en: 'at school', ar: 'في المدرسة' }, { en: 'busy', ar: 'مشغول' },
            { en: 'on the way', ar: 'في الطريق' }, { en: 'free', ar: 'متاح' },
          ],
        },
        tags: ['text-messages', 'questions'], d: 1, limit: 6,
      },
      {
        tmpl: 'Please send {N} a message.', arTmpl: 'من فضلك أرسل رسالة إلى {N_ar}.',
        slots: { N: B.NAMED_SING },
        tags: ['text-messages', 'messages'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'I will call you later.', ar: 'سأتصل بك لاحقا.', word: 'later' },
      { en: 'I am on my way.', ar: 'أنا في الطريق.', word: 'way', hint: 'طريق' },
      { en: 'Where are you now?', ar: 'أين أنت الآن؟', word: 'now' },
      { en: 'I am at home.', ar: 'أنا في المنزل.', word: 'home' },
      { en: 'See you soon, Sara.', ar: 'أراك قريبا يا سارة.', word: 'soon' },
      { en: 'I cannot talk now.', ar: 'لا أستطيع الكلام الآن.', word: 'cannot', hint: 'نفي' },
      { en: 'Did you get my last message?', ar: 'هل وصلتك آخر رسالة؟', word: 'message' },
      { en: 'Please send me the address.', ar: 'أرسل لي العنوان من فضلك.', word: 'send' },
    ],
    orders: [
      { en: 'I will call you later.', ar: 'سأتصل بك لاحقا.' },
      { en: 'I am on my way now.', ar: 'أنا في الطريق الآن.' },
      { en: 'Where are you now?', ar: 'أين أنت الآن؟' },
      { en: 'Will you be home soon?', ar: 'هل ستكون في المنزل قريبا؟' },
      { en: 'Please send me the address.', ar: 'أرسل لي العنوان من فضلك.' },
      { en: 'I cannot talk right now.', ar: 'لا أستطيع الكلام الآن.' },
    ],
    mc: [
      { question: 'Your friend texts "On my way". This means:', options: ['هو قادم الآن', 'هو في المنزل', 'هو مشغول', 'هو نائم'], answerIndex: 0, ar: 'صديقك أرسل On my way، أي:' },
      { question: 'Which sentence is a promise?', options: ['I will call you later.', 'Where are you?', 'I am at home.', 'See you soon.'], answerIndex: 0, ar: 'أي جملة هي وعد؟' },
      { question: '"I am busy now" means:', options: ['أنا مشغول الآن', 'أنا في الطريق', 'أنا في المنزل', 'أنا متاح الآن'], answerIndex: 0, ar: 'ما معنى I am busy now؟' },
      { question: 'You want the photos. You text:', options: ['Send me the photos, please.', 'I am sending photos.', 'The photos are old.', 'Are photos here?'], answerIndex: 0, ar: 'تريد الصور، فترسل:' },
      { question: 'Which reply answers "Where are you?"', options: ['I am at home.', 'I am fine.', 'See you soon.', 'I will call you.'], answerIndex: 0, ar: 'أي جواب يناسب سؤال Where are you؟' },
    ],
  },

  /* ================= lesson 30 — Making an Appointment ================= */
  {
    num: 30,
    tags: ['appointments', 'daily-life'],
    objectives: [
      'Ask for an appointment politely',
      'Ask about and confirm free times and days',
      'Arrange a meeting with "See you then"',
    ],
    grammar: {
      explanation: 'To arrange a meeting politely, say "I would like to make an appointment" or "I\'d like to see the doctor". Ask about free times with "Is Monday at ten free?" or "Are you free on Friday?". A friendly answer is "Sorry, I am busy then" or "Yes, that works for me". Ask "What time works for you?" and finish with "See you then". Use at with clock times (at ten) and on with days (on Monday).',
      explanationAr: 'لترتيب موعد بأدب قل I would like to make an appointment أو I\'d like to see the doctor. واسأل عن الأوقات المتاحة بـ Is Monday at ten free؟ أو Are you free on Friday؟. والجواب الودي هو Sorry, I am busy then أو Yes, that works for me. اسأل What time works for you؟ واختم بـ See you then. استخدم at مع أوقات الساعة (at ten) وon مع الأيام (on Monday).',
      examples: [
        { en: 'I would like to make an appointment.', ar: 'أود أن أحجز موعدا.' },
        { en: 'Is Monday at ten free?', ar: 'هل الاثنين في العاشرة متاح؟' },
        { en: 'Saturday works for me. See you then.', ar: 'السبت يناسبني. أراك حينها.' },
      ],
    },
    vocabulary: [
      { word: 'appointment', meaningAr: 'موعد', example: 'I have an appointment today.', ipa: 'əˈpɔɪntmənt' },
      { word: 'free', meaningAr: 'متاح / فارغ', example: 'The doctor is free today.' },
      { word: 'Monday', meaningAr: 'الاثنين', example: 'Monday is good for me.' },
      { word: 'time', meaningAr: 'وقت / ساعة', example: 'I do not have time now.' },
      { word: 'works', meaningAr: 'يناسب', example: 'Friday works for me.' },
      { word: 'then', meaningAr: 'حينها / إذن', example: 'I will call you then.' },
      { word: 'book', meaningAr: 'يحجز', example: 'I want to book a table.' },
      { word: 'meeting', meaningAr: 'اجتماع', example: 'The meeting is at two.' },
      { word: 'confirm', meaningAr: 'يؤكد', example: 'Please confirm the time.' },
      { word: 'noon', meaningAr: 'الظهر', example: 'Meet me at noon.' },
      { word: 'sure', meaningAr: 'بالتأكيد', example: 'Sure, come at three.' },
      { word: 'morning', meaningAr: 'صباح', example: 'I am free in the morning.' },
    ],
    scenario: [
      { en: 'I would like to make an appointment.', ar: 'أود أن أحجز موعدا.', d: 1 },
      { en: 'Is Monday at ten free?', ar: 'هل الاثنين في العاشرة متاح؟', d: 1 },
      { en: 'See you then.', ar: 'أراك حينها.', d: 1 },
      { en: 'What time works for you?', ar: 'ما الوقت المناسب لك؟', d: 1 },
      { en: 'The doctor is free on Tuesday.', ar: 'الطبيب متاح يوم الثلاثاء.', d: 2 },
      { en: 'I am not free in the morning.', ar: 'لست متاحا في الصباح.', d: 2 },
      { en: 'Can we meet at three?', ar: 'هل نلتقي في الثالثة؟', d: 1 },
      { en: 'Yes, three is good for me.', ar: 'نعم، الثالثة مناسبة لي.', d: 1 },
      { en: 'Are you free on Friday?', ar: 'هل أنت متاح يوم الجمعة؟', d: 2 },
      { en: 'Sorry, Friday is very busy.', ar: 'آسف، الجمعة مشغولة جدا.', d: 2 },
      { en: 'How about Saturday at noon?', ar: 'ماذا عن السبت في الظهر؟', d: 2 },
      { en: 'Saturday works for me.', ar: 'السبت يناسبني.', d: 2 },
      { en: 'My dentist is busy all week.', ar: 'طبيب أسناني مشغول طوال الأسبوع.', d: 2 },
      { en: 'The meetings are on Monday.', ar: 'الاجتماعات يوم الاثنين.', d: 2 },
      { en: 'Please call me to confirm.', ar: 'اتصل بي للتأكيد من فضلك.', d: 2 },
      { en: 'We will see the manager tomorrow.', ar: 'سنرى المدير غدا.', d: 2 },
      { en: 'Is the clinic open at nine?', ar: 'هل العيادة مفتوحة في التاسعة؟', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I would like to make an appointment {T}.', arTmpl: 'أود حجز موعد {T_ar}.',
        slots: {
          T: [
            { en: 'this week', ar: 'هذا الأسبوع' }, { en: 'on Monday', ar: 'يوم الاثنين' },
            { en: 'on Thursday', ar: 'يوم الخميس' }, { en: 'for tomorrow', ar: 'للغد' },
            { en: 'next week', ar: 'الأسبوع القادم' },
          ],
        },
        tags: ['appointments'], d: 1, limit: 5,
      },
      {
        tmpl: 'Is {D} at {T} free?', arTmpl: 'هل يوم {D_ar} في الساعة {T_ar} متاح؟',
        slots: {
          D: B.DAYS,
          T: [
            { en: 'ten', ar: 'العاشرة' }, { en: 'eleven', ar: 'الحادية عشرة' },
            { en: 'two', ar: 'الثانية' }, { en: 'four', ar: 'الرابعة' },
            { en: 'five', ar: 'الخامسة' }, { en: 'six', ar: 'السادسة' },
          ],
        },
        tags: ['appointments', 'questions', 'time'], d: 2, limit: 14,
      },
      {
        tmpl: '{D} works for me.', arTmpl: 'يوم {D_ar} يناسبني.',
        slots: { D: B.DAYS },
        tags: ['appointments', 'days'], d: 1, limit: 7,
      },
      {
        tmpl: 'What time works for you on {D}?', arTmpl: 'ما الوقت المناسب لك يوم {D_ar}؟',
        slots: { D: B.DAYS },
        tags: ['appointments', 'questions', 'time'], d: 2, limit: 7,
      },
      {
        tmpl: 'I am not free on {D}.', arTmpl: 'لست متاحا يوم {D_ar}.',
        slots: { D: B.DAYS },
        tags: ['appointments', 'negation', 'days'], d: 2, limit: 7,
      },
    ],
    fills: [
      { en: 'I would like to make an appointment.', ar: 'أود أن أحجز موعدا.', word: 'appointment', hint: 'موعد' },
      { en: 'Is Monday at ten free?', ar: 'هل الاثنين في العاشرة متاح؟', word: 'free', hint: 'متاح' },
      { en: 'What time works for you?', ar: 'ما الوقت المناسب لك؟', word: 'time' },
      { en: 'See you then, my friend.', ar: 'أراك حينها يا صديقي.', word: 'then' },
      { en: 'The doctor is free on Tuesday.', ar: 'الطبيب متاح يوم الثلاثاء.', word: 'doctor' },
      { en: 'The meetings are on Monday.', ar: 'الاجتماعات يوم الاثنين.', word: 'meetings' },
      { en: 'Please call me to confirm.', ar: 'اتصل بي للتأكيد من فضلك.', word: 'confirm', hint: 'فعل' },
      { en: 'Is the clinic open at nine?', ar: 'هل العيادة مفتوحة في التاسعة؟', word: 'open' },
    ],
    orders: [
      { en: 'I would like to make an appointment.', ar: 'أود أن أحجز موعدا.' },
      { en: 'Is Monday at ten free?', ar: 'هل الاثنين في العاشرة متاح؟' },
      { en: 'What time works for you?', ar: 'ما الوقت المناسب لك؟' },
      { en: 'Sorry, Friday is very busy.', ar: 'آسف، الجمعة مشغولة جدا.' },
      { en: 'We will see the manager tomorrow.', ar: 'سنرى المدير غدا.' },
      { en: 'Can we meet at three?', ar: 'هل نلتقي في الثالثة؟' },
    ],
    mc: [
      { question: 'You want to see the doctor. You say:', options: ['I would like to make an appointment.', 'I like doctors a lot.', 'The doctor is my friend.', 'I am a doctor now.'], answerIndex: 0, ar: 'تريد رؤية الطبيب، فتقول:' },
      { question: 'Which day does the speaker like? "Saturday works for me."', options: ['Saturday', 'Sunday', 'Monday', 'Friday'], answerIndex: 0, ar: 'أي يوم يناسب المتكلم؟' },
      { question: '"Are you free on Friday?" — "free" means:', options: ['متاح', 'مشغول', 'متعب', 'سعيد'], answerIndex: 0, ar: 'ما معنى free في السؤال؟' },
      { question: 'What do you say to end the arrangement?', options: ['See you then.', 'What time is it?', 'Who are you?', 'Where is it?'], answerIndex: 0, ar: 'ماذا تقول لإنهاء الترتيب؟' },
      { question: 'At is for clock times, on is for:', options: ['days', 'numbers', 'colors', 'names'], answerIndex: 0, ar: 'تستخدم at لأوقات الساعة وon لـ:' },
    ],
  },

  /* ================= lesson 31 — Phone Numbers and Addresses ================= */
  {
    num: 31,
    tags: ['personal-info', 'contact-details'],
    objectives: [
      'Give your phone number in digit groups',
      'Say and ask for street addresses',
      'Ask for and share an email address',
    ],
    grammar: {
      explanation: 'Give phone numbers as digits, group by group: "My number is 0123 456 789" — say "zero", not "oh", and you may say "double five" for 55. For an address, start with the number, then the street: "I live at 15 Green Street". Use on for streets without a number: "My parents live on River Road". For email, say "My email is ..." and ask "What is your email address?". Write important details down, because numbers are easy to forget.',
      explanationAr: 'قل أرقام الهاتف بالأرقام مجموعة مجموعة: My number is 0123 456 789، ونطق zero وليس oh، ويمكنك قول double five للرقم 55. وللعنوان ابدأ بالرقم ثم الشارع: I live at 15 Green Street. واستخدم on للشوارع بدون رقم: My parents live on River Road. وللبريد الإلكتروني قل My email is ... واسأل What is your email address؟. ودوّن التفاصيل المهمة لأن الأرقام سهلة النسيان.',
      examples: [
        { en: "What's your phone number?", ar: 'ما رقم هاتفك؟' },
        { en: 'I live at 15 Green Street.', ar: 'أسكن في 15 شارع جرين.' },
        { en: 'My email is omar22@mail.com.', ar: 'بريدي الإلكتروني هو omar22@mail.com.' },
      ],
    },
    vocabulary: [
      { word: 'number', meaningAr: 'رقم', example: 'My number is new.', ipa: 'nʌmbər' },
      { word: 'digit', meaningAr: 'رقم مفرد', example: 'Say each digit slowly.' },
      { word: 'email', meaningAr: 'بريد إلكتروني', example: 'My email is easy to remember.' },
      { word: 'address', meaningAr: 'عنوان', example: 'Is this address correct?' },
      { word: 'street', meaningAr: 'شارع', example: 'I live on a quiet street.' },
      { word: 'spell', meaningAr: 'يتهجى', example: 'Please spell your name.' },
      { word: 'write down', meaningAr: 'يدوّن', example: 'Write down my number, please.' },
      { word: 'contact', meaningAr: 'جهة اتصال', example: 'Save my contact, please.' },
      { word: 'apartment', meaningAr: 'شقة', example: 'Our apartment is on the third floor.' },
      { word: 'building', meaningAr: 'مبنى / عمارة', example: 'That building is very tall.' },
      { word: 'correct', meaningAr: 'صحيح', example: 'Your answer is correct.' },
      { word: 'wrong', meaningAr: 'خطأ', example: 'He gave me the wrong number.' },
    ],
    scenario: [
      { en: "What's your phone number?", ar: 'ما رقم هاتفك؟', d: 1 },
      { en: 'My number is 0123 456 789.', ar: 'رقمي هو 0123 456 789.', d: 1 },
      { en: 'I live at 15 Green Street.', ar: 'أسكن في 15 شارع جرين.', d: 1 },
      { en: 'What is your email address?', ar: 'ما عنوان بريدك الإلكتروني؟', d: 1 },
      { en: 'My email is omar22@mail.com.', ar: 'بريدي الإلكتروني هو omar22@mail.com.', d: 1 },
      { en: 'She wrote down my new number.', ar: 'دوّنت رقمي الجديد.', d: 2 },
      { en: 'Did you write the address correctly?', ar: 'هل كتبت العنوان بشكل صحيح؟', d: 2 },
      { en: 'Yes, I wrote it in my notebook.', ar: 'نعم، كتبته في دفتري.', d: 2 },
      { en: 'My parents live on River Road.', ar: 'يسكن والداي في شارع الريفر.', d: 2 },
      { en: 'The building has ten floors.', ar: 'المبنى فيه عشرة طوابق.', d: 2 },
      { en: 'I did not get your email.', ar: 'لم يصلني بريدك الإلكتروني.', d: 2 },
      { en: 'Can you send it again, please?', ar: 'هل ترسله مرة أخرى من فضلك؟', d: 2 },
      { en: 'We moved to a new apartment last month.', ar: 'انتقلنا إلى شقة جديدة الشهر الماضي.', d: 3 },
      { en: 'Is this your current address?', ar: 'هل هذا عنوانك الحالي؟', d: 2 },
      { en: 'Please spell your name for me.', ar: 'هجّ اسمي لي من فضلك.', d: 2 },
      { en: 'He gave me the wrong number yesterday.', ar: 'أعطاني الرقم الخطأ أمس.', d: 2 },
      { en: 'My email is not working today.', ar: 'بريدي الإلكتروني لا يعمل اليوم.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'My number is {N}.', arTmpl: 'رقمي هو {N_ar}.',
        slots: {
          N: [
            { en: '0500 987 654', ar: '0500 987 654' }, { en: '0777 123 123', ar: '0777 123 123' },
            { en: '0111 222 333', ar: '0111 222 333' }, { en: '0455 666 777', ar: '0455 666 777' },
            { en: '0999 888 111', ar: '0999 888 111' },
          ],
        },
        tags: ['personal-info', 'numbers'], d: 1, limit: 5,
      },
      {
        tmpl: 'I live at {A}.', arTmpl: 'أسكن في {A_ar}.',
        slots: {
          A: [
            { en: '22 Palm Road', ar: '22 طريق النخيل' }, { en: '8 King Street', ar: '8 شارع الملك' },
            { en: '30 Orange Street', ar: '30 شارع البرتقال' }, { en: '12 Bay Road', ar: '12 طريق الخليج' },
            { en: '77 Rose Street', ar: '77 شارع الورد' },
          ],
        },
        tags: ['personal-info', 'addresses'], d: 2, limit: 5,
      },
      {
        tmpl: 'What is your {F}?', arTmpl: 'ما {F_ar}؟',
        slots: {
          F: [
            { en: 'home address', ar: 'عنوان منزلك' }, { en: 'new address', ar: 'عنوانك الجديد' },
            { en: 'office number', ar: 'رقم مكتبك' }, { en: 'work email', ar: 'بريد عملك' },
            { en: 'old number', ar: 'رقمك القديم' },
          ],
        },
        tags: ['personal-info', 'questions'], d: 2, limit: 5,
      },
      {
        tmpl: 'She {V} the number {T}.', arTmpl: 'هي {V_ar} الرقم {T_ar}.',
        slots: {
          V: [
            { en: 'wrote down', ar: 'كتبت' }, { en: 'saved', ar: 'حفظت' },
            { en: 'copied', ar: 'نسخت' }, { en: 'lost', ar: 'فقدت' },
          ],
          T: [
            { en: 'yesterday', ar: 'أمس' }, { en: 'this morning', ar: 'هذا الصباح' },
            { en: 'last night', ar: 'الليلة الماضية' }, { en: 'on Friday', ar: 'يوم الجمعة' },
          ],
        },
        tags: ['personal-info', 'past-simple'], d: 2, limit: 14,
      },
      {
        tmpl: 'Did you get my {M}?', arTmpl: 'هل وصلتك {M_ar}؟',
        slots: {
          M: [
            { en: 'email', ar: 'بريدي الإلكتروني' }, { en: 'message', ar: 'رسالتي' },
            { en: 'text', ar: 'رسالتي النصية' }, { en: 'photo', ar: 'صورتي' },
            { en: 'last email', ar: 'آخر رسالة إلكترونية' },
          ],
        },
        tags: ['personal-info', 'questions', 'past-simple'], d: 2, limit: 5,
      },
      {
        tmpl: 'Please call me at {N}.', arTmpl: 'من فضلك اتصل بي على {N_ar}.',
        slots: {
          N: [
            { en: '0500 987 654', ar: '0500 987 654' }, { en: '0111 222 333', ar: '0111 222 333' },
            { en: '0455 666 777', ar: '0455 666 777' },
          ],
        },
        tags: ['personal-info', 'numbers'], d: 2, limit: 3,
      },
    ],
    fills: [
      { en: "What's your phone number?", ar: 'ما رقم هاتفك؟', word: 'phone', hint: 'هاتف' },
      { en: 'My number is 0123 456 789.', ar: 'رقمي هو 0123 456 789.', word: 'number' },
      { en: 'I live at 15 Green Street.', ar: 'أسكن في 15 شارع جرين.', word: 'Street', hint: 'شارع' },
      { en: 'What is your email address?', ar: 'ما عنوان بريدك الإلكتروني؟', word: 'email' },
      { en: 'She wrote down my new number.', ar: 'دوّنت رقمي الجديد.', word: 'wrote' },
      { en: 'I did not get your email.', ar: 'لم يصلني بريدك الإلكتروني.', word: 'get' },
      { en: 'Please spell your name for me.', ar: 'هجّ اسمي لي من فضلك.', word: 'spell' },
      { en: 'He gave me the wrong number yesterday.', ar: 'أعطاني الرقم الخطأ أمس.', word: 'wrong', hint: 'خطأ' },
    ],
    orders: [
      { en: "What's your phone number?", ar: 'ما رقم هاتفك؟' },
      { en: 'My number is 0123 456 789.', ar: 'رقمي هو 0123 456 789.' },
      { en: 'I live at 15 Green Street.', ar: 'أسكن في 15 شارع جرين.' },
      { en: 'What is your email address?', ar: 'ما عنوان بريدك الإلكتروني؟' },
      { en: 'We moved to a new apartment last month.', ar: 'انتقلنا إلى شقة جديدة الشهر الماضي.' },
      { en: 'He gave me the wrong number yesterday.', ar: 'أعطاني الرقم الخطأ أمس.' },
    ],
    mc: [
      { question: 'You give a phone number. You say:', options: ['My number is 0123 456 789.', 'My number zero is.', 'I am number 0123.', 'Number me is 789.'], answerIndex: 0, ar: 'تعطي رقم هاتفك، فتقول:' },
      { question: '"I live at 15 Green Street" tells your:', options: ['address', 'age', 'job', 'email'], answerIndex: 0, ar: 'الجملة تخبر عن:' },
      { question: 'Which question asks for an email?', options: ['What is your email address?', 'What is your name?', 'Where is your school?', 'How old are you?'], answerIndex: 0, ar: 'أي سؤال يطلب البريد الإلكتروني؟' },
      { question: '"She wrote down my number" means:', options: ['دوّنت رقمي', 'قرأت رقمي بصوت عال', 'نسيت رقمي', 'غيّرت رقمي'], answerIndex: 0, ar: 'ما معنى She wrote down my number؟' },
      { question: 'The email did not arrive. You say:', options: ['Can you send it again, please?', 'I live at 15 Green Street.', 'My email is omar22@mail.com.', 'Please spell your name.'], answerIndex: 0, ar: 'لم يصلك البريد الإلكتروني، فتقول:' },
    ],
  },

  /* ================= lesson 32 — Describing a Person ================= */
  {
    num: 32,
    tags: ['describing-people', 'adjectives'],
    objectives: [
      'Describe appearance: tall, young, wears glasses',
      'Describe character: kind, funny, smart, generous',
      'Talk about what people always do',
    ],
    grammar: {
      explanation: 'To describe a person, use the verb be with an adjective: "My brother is tall and kind". Adjectives never take a plural -s: "The twins are smart", not "smarts". Talk about character with kind, funny, smart, generous, helpful, serious and shy. For habits use the present simple with always or never: "He always helps people", "She never tells lies". For clothes and features say "He wears glasses" or "She has curly hair". Join two adjectives with and: "funny and friendly".',
      explanationAr: 'لوصف شخص استخدم فعل الكينونة مع الصفة: My brother is tall and kind. الصفة لا تأخذ s للجمع: The twins are smart وليس smarts. صف الشخصية بكلمات مثل kind أي طيب وfunny أي مضحك وsmart أي ذكي وgenerous أي كريم وhelpful أي متعاون وserious أي جاد وshy أي خجول. وللعادات استخدم المضارع البسيط مع always أو never: He always helps people، She never tells lies. وللملابس والملامح قل He wears glasses أو She has curly hair. واربط صفتين بـ and: funny and friendly.',
      examples: [
        { en: 'My brother is tall and kind.', ar: 'أخي طويل وطيب.' },
        { en: 'He always helps people.', ar: 'يساعد الناس دائما.' },
        { en: 'She wears glasses and reads a lot.', ar: 'ترتدي نظارة وتقرأ كثيرا.' },
      ],
    },
    vocabulary: [
      { word: 'kind', meaningAr: 'طيب', example: 'My uncle is very kind.', ipa: 'kaɪnd' },
      { word: 'funny', meaningAr: 'مضحك', example: 'The new student is funny.' },
      { word: 'smart', meaningAr: 'ذكي', example: 'My cousin is smart and fast.' },
      { word: 'tall', meaningAr: 'طويل', example: 'Who is that tall man?' },
      { word: 'glasses', meaningAr: 'نظارة', example: 'He wears glasses at work.' },
      { word: 'helpful', meaningAr: 'متعاون', example: 'A helpful friend is a gift.' },
      { word: 'generous', meaningAr: 'كريم', example: 'The generous man paid for everything.' },
      { word: 'shy', meaningAr: 'خجول', example: 'The young boy is shy.' },
      { word: 'serious', meaningAr: 'جاد', example: 'My aunt is serious at work.' },
      { word: 'friendly', meaningAr: 'ودود', example: 'Are they friendly?' },
      { word: 'honest', meaningAr: 'صادق', example: 'A good friend is honest.' },
      { word: 'laugh', meaningAr: 'يضحك', example: 'Her jokes make me laugh.' },
    ],
    scenario: [
      { en: 'My brother is tall and kind.', ar: 'أخي طويل وطيب.', d: 1 },
      { en: 'She wears glasses and reads a lot.', ar: 'ترتدي نظارة وتقرأ كثيرا.', d: 1 },
      { en: 'He always helps people in the neighborhood.', ar: 'يساعد الناس في الحي دائما.', d: 2 },
      { en: 'My grandmother is very generous.', ar: 'جدتي كريمة جدا.', d: 1 },
      { en: 'The new student is funny and smart.', ar: 'الطالب الجديد مضحك وذكي.', d: 2 },
      { en: 'Are your cousins friendly?', ar: 'هل أبناء عمك ودودون؟', d: 2 },
      { en: 'Yes, they always make me laugh.', ar: 'نعم، يجعلونني أضحك دائما.', d: 2 },
      { en: 'My uncle is serious but very kind.', ar: 'عمي جاد لكنه طيب جدا.', d: 2 },
      { en: 'My little sister is not shy at all.', ar: 'أختي الصغيرة ليست خجولة أبدا.', d: 2 },
      { en: 'Who is that tall man over there?', ar: 'من ذلك الرجل الطويل هناك؟', d: 2 },
      { en: "He is my father's oldest friend.", ar: 'هو أقدم أصدقاء أبي.', d: 2 },
      { en: 'Our neighbors are kind and helpful.', ar: 'جيراننا طيبون ومتعاونون.', d: 2 },
      { en: 'The twins are very smart.', ar: 'التوأمان ذكيان جدا.', d: 2 },
      { en: 'Is your new teacher serious?', ar: 'هل معلمك الجديد جاد؟', d: 3 },
      { en: 'Yes, she never smiles in class.', ar: 'نعم، هي لا تبتسم في الصف أبدا.', d: 3 },
      { en: 'I like people who are kind and honest.', ar: 'أحب الناس الطيبين الصادقين.', d: 3 },
      { en: 'My best friend always tells funny jokes.', ar: 'صديقي المفضل يروي نكات مضحكة دائما.', d: 3 },
      { en: 'Please describe your best friend.', ar: 'صِف صديقك المفضل من فضلك.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'My {R} is very {ADJ}.', arTmpl: '{R_ar} {ADJ_ar} جدا.',
        slots: {
          R: B.FAMILY,
          ADJ: (x) => charAdj(x.R.agr),
        },
        tags: ['describing-people', 'family'], d: 1, limit: 20,
      },
      {
        tmpl: '{P} always {V} people.', arTmpl: '{P_ar} {V_ar} الناس دائما.',
        slots: {
          P: DESCRIBE_S,
          V: (x) => [{ en: 'helps', ar: x.P.agr === 'she' ? 'تساعد' : 'يساعد' }],
        },
        tags: ['describing-people', 'present-simple'], d: 2, limit: 6,
      },
      {
        tmpl: '{P} {W} glasses.', arTmpl: '{P_ar} {W_ar} نظارة.',
        slots: {
          P: DESCRIBE_S,
          W: (x) => [{ en: 'wears', ar: x.P.agr === 'she' ? 'ترتدي' : 'يرتدي' }],
        },
        tags: ['describing-people', 'appearance'], d: 1, limit: 6,
      },
      {
        tmpl: '{RP} are {ADJP}.', arTmpl: '{RP_ar} {ADJP_ar}.',
        slots: {
          RP: B.FAMILY_PLURAL,
          ADJP: [
            { en: 'kind and helpful', ar: 'طيبون ومتعاونون' },
            { en: 'funny and friendly', ar: 'مضحكون وودودون' },
            { en: 'smart and hardworking', ar: 'أذكياء مجتهدون' },
            { en: 'generous and kind', ar: 'كرام وطيبون' },
          ],
        },
        tags: ['describing-people', 'family', 'plural'], d: 2, limit: 12,
      },
      {
        tmpl: 'Who is the {A} in your family?', arTmpl: 'من هو {A_ar} في عائلتك؟',
        slots: {
          A: [
            { en: 'kindest', ar: 'الألطف' }, { en: 'smartest', ar: 'الأذكى' },
            { en: 'oldest', ar: 'الأكبر' }, { en: 'youngest', ar: 'الأصغر' },
            { en: 'funniest', ar: 'الأكثر إضحاكا' }, { en: 'most helpful', ar: 'الأكثر مساعدة' },
          ],
        },
        tags: ['describing-people', 'questions', 'family'], d: 3, limit: 6,
      },
    ],
    fills: [
      { en: 'My brother is tall and kind.', ar: 'أخي طويل وطيب.', word: 'kind', hint: 'صفة شخصية' },
      { en: 'She wears glasses and reads a lot.', ar: 'ترتدي نظارة وتقرأ كثيرا.', word: 'glasses' },
      { en: 'He always helps people in the neighborhood.', ar: 'يساعد الناس في الحي دائما.', word: 'always', hint: 'ظرف تكرار' },
      { en: 'My grandmother is very generous.', ar: 'جدتي كريمة جدا.', word: 'generous' },
      { en: 'The new student is funny and smart.', ar: 'الطالب الجديد مضحك وذكي.', word: 'funny' },
      { en: 'My little sister is not shy at all.', ar: 'أختي الصغيرة ليست خجولة أبدا.', word: 'shy' },
      { en: 'Who is that tall man over there?', ar: 'من ذلك الرجل الطويل هناك؟', word: 'tall' },
      { en: 'Please describe your best friend.', ar: 'صِف صديقك المفضل من فضلك.', word: 'describe' },
    ],
    orders: [
      { en: 'My brother is tall and kind.', ar: 'أخي طويل وطيب.' },
      { en: 'He always helps people.', ar: 'يساعد الناس دائما.' },
      { en: 'The new student is funny and smart.', ar: 'الطالب الجديد مضحك وذكي.' },
      { en: 'Who is that tall man over there?', ar: 'من ذلك الرجل الطويل هناك؟' },
      { en: 'Our neighbors are kind and helpful.', ar: 'جيراننا طيبون ومتعاونون.' },
      { en: 'Please describe your best friend.', ar: 'صِف صديقك المفضل من فضلك.' },
    ],
    mc: [
      { question: 'My uncle always helps people. He is:', options: ['helpful', 'shy', 'tired', 'hungry'], answerIndex: 0, ar: 'عمي يساعد الناس دائما، فهو:' },
      { question: 'Which sentence describes appearance?', options: ['She wears glasses.', 'She is generous.', 'She is honest.', 'She is kind.'], answerIndex: 0, ar: 'أي جملة تصف المظهر؟' },
      { question: '"The twins are smart" — twins means:', options: ['توأمان', 'أخ واحد', 'جيران', 'أبناء عم'], answerIndex: 0, ar: 'ما معنى twins؟' },
      { question: 'A person who makes you laugh is:', options: ['funny', 'serious', 'shy', 'old'], answerIndex: 0, ar: 'الشخص الذي يجعلك تضحك هو:' },
      { question: 'He never smiles. He is very:', options: ['serious', 'funny', 'generous', 'friendly'], answerIndex: 0, ar: 'هو لا يبتسم أبدا، فهو جدا:' },
    ],
  },

  /* ================= lesson 33 — Describing a Place ================= */
  {
    num: 33,
    tags: ['describing-places', 'adjectives'],
    objectives: [
      'Describe places with adjectives: quiet, busy, old',
      'Say why you like a place with because',
      'Use was for places in the past',
    ],
    grammar: {
      explanation: 'Places take adjectives after the verb be: "The park is quiet and green", "The café is small but beautiful". Use and for two similar ideas and but for a contrast. Common place adjectives are quiet, busy, crowded, old, modern, clean and beautiful. To say why you like a place, use because: "I like the market because it is lively". For the past, use was and were: "The market was crowded yesterday". Ask "Is the park near your house?" to talk about location.',
      explanationAr: 'توصف الأماكن بصفات تأتي بعد فعل الكينونة: The park is quiet and green، وThe café is small but beautiful. استخدم and لفكرتين متشابهتين وbut للتضاد. ومن صفات الأماكن الشائعة: quiet أي هادئ وbusy أي مزدحم وold أي قديم وmodern أي حديث وclean أي نظيف وbeautiful أي جميل. ولقول سبب حبك للمكان استخدم because: I like the market because it is lively. وللماضي استخدم was وwere: The market was crowded yesterday. واسأل Is the park near your house؟ للتحدث عن الموقع.',
      examples: [
        { en: 'The park is quiet and green.', ar: 'الحديقة هادئة وخضراء.' },
        { en: 'The café is small but beautiful.', ar: 'المقهى صغير لكنه جميل.' },
        { en: 'The market was crowded yesterday.', ar: 'كان السوق مزدحما أمس.' },
      ],
    },
    vocabulary: [
      { word: 'place', meaningAr: 'مكان', example: 'This is my favorite place.', ipa: 'pleɪs' },
      { word: 'park', meaningAr: 'حديقة', example: 'The park is near my house.' },
      { word: 'market', meaningAr: 'سوق', example: 'The market opens early.' },
      { word: 'city', meaningAr: 'مدينة', example: 'Our city is very old.' },
      { word: 'café', meaningAr: 'مقهى', example: 'We meet at the café.' },
      { word: 'quiet', meaningAr: 'هادئ', example: 'The village is quiet at night.' },
      { word: 'crowded', meaningAr: 'مزدحم', example: 'The bus is crowded now.' },
      { word: 'modern', meaningAr: 'حديث', example: 'The new school is modern.' },
      { word: 'village', meaningAr: 'قرية', example: 'Our village is small.' },
      { word: 'beautiful', meaningAr: 'جميل', example: 'The garden is beautiful in spring.' },
      { word: 'library', meaningAr: 'مكتبة', example: 'I read in the library.' },
      { word: 'favorite', meaningAr: 'مفضل', example: 'Green is my favorite color.' },
    ],
    scenario: [
      { en: 'The park is quiet and green.', ar: 'الحديقة هادئة وخضراء.', d: 1 },
      { en: 'The café is small but beautiful.', ar: 'المقهى صغير لكنه جميل.', d: 1 },
      { en: 'The market is very busy on Friday.', ar: 'السوق مزدحم جدا يوم الجمعة.', d: 2 },
      { en: 'This city is old and beautiful.', ar: 'هذه المدينة قديمة وجميلة.', d: 2 },
      { en: 'The new mall is big and modern.', ar: 'المركز التجاري الجديد كبير وحديث.', d: 2 },
      { en: 'Our village is small and quiet.', ar: 'قريتنا صغيرة وهادئة.', d: 2 },
      { en: 'Is the park near your house?', ar: 'هل الحديقة قريبة من منزلك؟', d: 2 },
      { en: 'Yes, it is next to my school.', ar: 'نعم، إنها بجوار مدرستي.', d: 2 },
      { en: 'The streets are crowded today.', ar: 'الشوارع مزدحمة اليوم.', d: 2 },
      { en: 'My street is not noisy at night.', ar: 'شارعي ليس مزعجا ليلا.', d: 2 },
      { en: 'The old market is my favorite place.', ar: 'السوق القديم مكتبي المفضل.', d: 2 },
      { en: 'Are the museums free on Sunday?', ar: 'هل المتاحف مجانية يوم الأحد؟', d: 3 },
      { en: 'No, they are not free on Sunday.', ar: 'لا، هي ليست مجانية يوم الأحد.', d: 3 },
      { en: 'The library is a quiet place to read.', ar: 'المكتبة مكان هادئ للقراءة.', d: 2 },
      { en: 'Please describe your city for us.', ar: 'صِف مدينتنا لنا من فضلك.', d: 2 },
      { en: 'The sea is beautiful in the morning.', ar: 'البحر جميل في الصباح.', d: 2 },
      { en: 'The market was crowded yesterday.', ar: 'كان السوق مزدحما أمس.', d: 3 },
      { en: 'What is your favorite place?', ar: 'ما مكانك المفضل؟', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'The {P} is {A}.', arTmpl: '{P_ar} {A_ar}.',
        slots: {
          P: PLACES,
          A: (x) => placePairAdj(x),
        },
        tags: ['describing-places'], d: 1, limit: 16,
      },
      {
        tmpl: 'The {P} is very {S}.', arTmpl: '{P_ar} {S_ar} جدا.',
        slots: {
          P: PLACES,
          S: (x) => placeSingleAdj(x),
        },
        tags: ['describing-places'], d: 1, limit: 16,
      },
      {
        tmpl: 'Is the {P} {A}?', arTmpl: 'هل {P_ar} {A_ar}؟',
        slots: {
          P: PLACES,
          A: (x) => (x.P.g === 'f'
            ? [
              { en: 'busy today', ar: 'مزدحمة اليوم' }, { en: 'quiet at night', ar: 'هادئة ليلا' },
              { en: 'open now', ar: 'مفتوحة الآن' }, { en: 'clean', ar: 'نظيفة' },
            ]
            : [
              { en: 'busy today', ar: 'مزدحم اليوم' }, { en: 'quiet at night', ar: 'هادئ ليلا' },
              { en: 'open now', ar: 'مفتوح الآن' }, { en: 'clean', ar: 'نظيف' },
            ]),
        },
        tags: ['describing-places', 'questions'], d: 2, limit: 12,
      },
      {
        tmpl: 'I like the {P} because it is {S}.', arTmpl: 'أحب {P_ar} {LK_ar} {S_ar}.',
        slots: {
          P: PLACES,
          LK: (x) => [{ en: '', ar: x.P.g === 'f' ? 'لأنها' : 'لأنه' }],
          S: (x) => (x.P.g === 'f'
            ? [
              { en: 'quiet', ar: 'هادئة' }, { en: 'beautiful', ar: 'جميلة' },
              { en: 'big', ar: 'كبيرة' }, { en: 'clean', ar: 'نظيفة' },
            ]
            : [
              { en: 'quiet', ar: 'هادئ' }, { en: 'beautiful', ar: 'جميل' },
              { en: 'big', ar: 'كبير' }, { en: 'clean', ar: 'نظيف' },
            ]),
        },
        tags: ['describing-places', 'because'], d: 2, limit: 12,
      },
      {
        tmpl: 'The {P} was {S} {T}.', arTmpl: '{K_ar} {P_ar} {S_ar} {T_ar}.',
        slots: {
          P: PLACES,
          K: (x) => [{ en: 'was', ar: x.P.g === 'f' ? 'كانت' : 'كان' }],
          S: (x) => (x.P.g === 'f'
            ? [
              { en: 'quiet', ar: 'هادئة' }, { en: 'crowded', ar: 'مزدحمة' },
              { en: 'beautiful', ar: 'جميلة' },
            ]
            : [
              { en: 'quiet', ar: 'هادئا' }, { en: 'crowded', ar: 'مزدحما' },
              { en: 'beautiful', ar: 'جميلا' },
            ]),
          T: [
            { en: 'yesterday', ar: 'أمس' }, { en: 'last night', ar: 'الليلة الماضية' },
            { en: 'this morning', ar: 'هذا الصباح' }, { en: 'last summer', ar: 'الصيف الماضي' },
          ],
        },
        tags: ['describing-places', 'past-simple'], d: 3, limit: 12,
      },
    ],
    fills: [
      { en: 'The park is quiet and green.', ar: 'الحديقة هادئة وخضراء.', word: 'quiet', hint: 'صفة' },
      { en: 'The café is small but beautiful.', ar: 'المقهى صغير لكنه جميل.', word: 'beautiful' },
      { en: 'The market is very busy on Friday.', ar: 'السوق مزدحم جدا يوم الجمعة.', word: 'busy' },
      { en: 'Is the park near your house?', ar: 'هل الحديقة قريبة من منزلك؟', word: 'near', hint: 'حرف جر' },
      { en: 'The streets are crowded today.', ar: 'الشوارع مزدحمة اليوم.', word: 'crowded' },
      { en: 'The library is a quiet place to read.', ar: 'المكتبة مكان هادئ للقراءة.', word: 'library' },
      { en: 'The market was crowded yesterday.', ar: 'كان السوق مزدحما أمس.', word: 'was', hint: 'فعل ماضي' },
      { en: 'Please describe your city for us.', ar: 'صِف مدينتنا لنا من فضلك.', word: 'describe' },
    ],
    orders: [
      { en: 'The park is quiet and green.', ar: 'الحديقة هادئة وخضراء.' },
      { en: 'The café is small but beautiful.', ar: 'المقهى صغير لكنه جميل.' },
      { en: 'Is the park near your house?', ar: 'هل الحديقة قريبة من منزلك؟' },
      { en: 'The streets are crowded today.', ar: 'الشوارع مزدحمة اليوم.' },
      { en: 'The market was crowded yesterday.', ar: 'كان السوق مزدحما أمس.' },
      { en: 'What is your favorite place?', ar: 'ما مكانك المفضل؟' },
    ],
    mc: [
      { question: 'A place with many people is:', options: ['crowded', 'quiet', 'empty', 'small'], answerIndex: 0, ar: 'المكان الذي فيه كثير من الناس هو:' },
      { question: 'Which sentence describes a place in the past?', options: ['The market was crowded yesterday.', 'The market is crowded today.', 'Is the market near?', 'I like the market.'], answerIndex: 0, ar: 'أي جملة تصف مكانا في الماضي؟' },
      { question: '"The café is small but beautiful" — "but" shows:', options: ['a contrast', 'a question', 'a number', 'a name'], answerIndex: 0, ar: 'أداة but في الجملة تدل على:' },
      { question: 'You love the park because it is quiet. You say:', options: ['I like the park because it is quiet.', 'The park is my number.', 'The park was my street.', 'I am the park today.'], answerIndex: 0, ar: 'تحب الحديقة لأنها هادئة، فتقول:' },
      { question: 'Where can you read quietly?', options: ['In the library.', 'In the crowded market.', 'On the busy street.', 'In the bus.'], answerIndex: 0, ar: 'أين يمكنك القراءة بهدوء؟' },
    ],
  },
];
