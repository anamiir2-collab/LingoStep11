/* ============================================================
   v2 section data — s02-b.js
   Simple Daily Life · lessons 34–45
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

/* ---------- shared module banks ---------- */

/* feelings with masculine/feminine Arabic forms (from EMOTIONS bank) */
const FEELINGS = Object.entries(B.EMOTIONS).map(([en, v]) => ({ en, ar: v.m, f: v.f }));

/* materials for "made of" patterns */
const MATERIALS = [
  { en: 'wood', ar: 'الخشب' }, { en: 'metal', ar: 'المعدن' }, { en: 'plastic', ar: 'البلاستيك' },
  { en: 'glass', ar: 'الزجاج' }, { en: 'leather', ar: 'الجلد' }, { en: 'paper', ar: 'الورق' },
  { en: 'silver', ar: 'الفضة' }, { en: 'steel', ar: 'الفولاذ' },
];

/* objects for "The X is made of Y" (Arabic gender marked) */
const MADE_OF_T = [
  { en: 'table', ar: 'الطاولة', g: 'f' }, { en: 'box', ar: 'الصندوق', g: 'm' },
  { en: 'chair', ar: 'الكرسي', g: 'm' }, { en: 'door', ar: 'الباب', g: 'm' },
  { en: 'bag', ar: 'الحقيبة', g: 'f' }, { en: 'window', ar: 'النافذة', g: 'f' },
  { en: 'ring', ar: 'الخاتم', g: 'm' }, { en: 'cup', ar: 'الكوب', g: 'm' },
];

/* size/weight adjectives with feminine Arabic forms */
const ADJMF = [
  { en: 'small', ar: 'صغير', f: 'صغيرة' }, { en: 'big', ar: 'كبير', f: 'كبيرة' },
  { en: 'light', ar: 'خفيف', f: 'خفيفة' }, { en: 'heavy', ar: 'ثقيل', f: 'ثقيلة' },
  { en: 'new', ar: 'جديد', f: 'جديدة' }, { en: 'old', ar: 'قديم', f: 'قديمة' },
  { en: 'soft', ar: 'ناعم', f: 'ناعمة' }, { en: 'hard', ar: 'صلب', f: 'صلبة' },
];

/* "my ..." things (Arabic possessive built in, gender marked) */
const MY_THINGS = [
  { en: 'phone', ar: 'هاتفي', g: 'm' }, { en: 'car', ar: 'سيارتي', g: 'f' },
  { en: 'watch', ar: 'ساعتي', g: 'f' }, { en: 'wallet', ar: 'محفظتي', g: 'f' },
  { en: 'umbrella', ar: 'مظلتي', g: 'f' }, { en: 'pen', ar: 'قلمي', g: 'm' },
  { en: 'key', ar: 'مفتاحي', g: 'm' }, { en: 'magazine', ar: 'مجلتي', g: 'f' },
];

/* store items for "How much is this ...?" (gender marked) */
const SHOP_ITEMS = [
  { en: 'jacket', ar: 'السترة', g: 'f' }, { en: 'hat', ar: 'القبعة', g: 'f' },
  { en: 'bag', ar: 'الحقيبة', g: 'f' }, { en: 'watch', ar: 'الساعة', g: 'f' },
  { en: 'phone', ar: 'الهاتف', g: 'm' }, { en: 'book', ar: 'الكتاب', g: 'm' },
  { en: 'lamp', ar: 'المصباح', g: 'm' }, { en: 'scarf', ar: 'الوشاح', g: 'm' },
];

export const lessons = [

  /* ================= lesson 34 — Describing an Object ================= */
  {
    num: 34,
    tags: ['describing', 'adjectives'],
    objectives: [
      'Describe size, weight and feel of objects',
      'Say what an object is made of',
      'Ask simple questions about an object',
    ],
    grammar: {
      explanation: 'To describe an object, use It is + adjective: "It is small", "It is heavy". Join two adjectives with "and": "It is small and light". To talk about material, use made of: "The table is made of wood", "The keys are made of metal". Ask about material with "What is it made of?" and about weight with "How heavy is it?". Adjectives never take a plural s: "The boxes are heavy" (not "heavies").',
      explanationAr: 'لوصف شيء استخدم It is ثم الصفة: It is small، It is heavy. ويمكنك ربط صفتين بـ and: It is small and light. وللتحدث عن المادة استخدم made of: The table is made of wood، The keys are made of metal. اسأل عن المادة بـ What is it made of؟ وعن الوزن بـ How heavy is it؟ ولا تضف ياء الجمع للصفة أبدا: The boxes are heavy.',
      examples: [
        { en: 'The box is small and light.', ar: 'الصندوق صغير وخفيف.' },
        { en: 'This chair is made of wood.', ar: 'هذا الكرسي مصنوع من الخشب.' },
        { en: 'What is it made of? It is made of glass.', ar: 'مم هو مصنوع؟ إنه مصنوع من الزجاج.' },
      ],
    },
    vocabulary: [
      { word: 'small', meaningAr: 'صغير', example: 'The box is small.', ipa: 'smɔːl' },
      { word: 'light', meaningAr: 'خفيف', example: 'This bag is light.' },
      { word: 'heavy', meaningAr: 'ثقيل', example: 'The suitcase is heavy.' },
      { word: 'wood', meaningAr: 'خشب', example: 'The table is made of wood.' },
      { word: 'metal', meaningAr: 'معدن', example: 'The key is made of metal.' },
      { word: 'plastic', meaningAr: 'بلاستيك', example: 'The cup is made of plastic.' },
      { word: 'glass', meaningAr: 'زجاج', example: 'The window is made of glass.' },
      { word: 'leather', meaningAr: 'جلد', example: 'My wallet is made of leather.' },
      { word: 'round', meaningAr: 'مستدير', example: 'The ball is round.' },
      { word: 'soft', meaningAr: 'ناعم', example: 'The pillow is soft.' },
      { word: 'hard', meaningAr: 'صلب', example: 'The chair is hard.' },
      { word: 'made of', meaningAr: 'مصنوع من', example: 'What is it made of?' },
    ],
    scenario: [
      { en: 'The box is small and light.', ar: 'الصندوق صغير وخفيف.', d: 1 },
      { en: 'This table is made of wood.', ar: 'هذه الطاولة مصنوعة من الخشب.', d: 1 },
      { en: 'My keys are made of metal.', ar: 'مفاتيحي مصنوعة من المعدن.', d: 1 },
      { en: 'The bag is not heavy.', ar: 'الحقيبة ليست ثقيلة.', d: 1 },
      { en: 'It is a small plastic clock.', ar: 'إنها ساعة صغيرة من بلاستيك.', d: 2 },
      { en: 'What is it made of?', ar: 'مم هو مصنوع؟', d: 1 },
      { en: 'Is the box heavy?', ar: 'هل الصندوق ثقيل؟', d: 1 },
      { en: 'No, it is very light.', ar: 'لا، إنه خفيف جدا.', d: 1 },
      { en: 'Our windows are made of glass.', ar: 'نوافذنا مصنوعة من الزجاج.', d: 2 },
      { en: 'My wallet is made of leather.', ar: 'محفظتي مصنوعة من الجلد.', d: 2 },
      { en: 'The ball is round and soft.', ar: 'الكرة مستديرة وناعمة.', d: 1 },
      { en: 'These spoons are made of steel.', ar: 'هذه الملاعق مصنوعة من الفولاذ.', d: 2 },
      { en: 'Please describe the small box.', ar: 'صف الصندوق الصغير من فضلك.', d: 2 },
      { en: 'My suitcase is big and heavy.', ar: 'حقيبة سفرتي كبيرة وثقيلة.', d: 2 },
      { en: 'How heavy is your suitcase?', ar: 'كم وزن حقيبة سفرك؟', d: 2 },
      { en: 'The old door was made of wood.', ar: 'كان الباب القديم مصنوعا من الخشب.', d: 2 },
      { en: 'This ring is made of silver.', ar: 'هذا الخاتم مصنوع من الفضة.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'The {T} is {MADE} {M}.', arTmpl: '{T_ar} {MADE_ar} {M_ar}.',
        slots: {
          T: MADE_OF_T,
          M: MATERIALS,
          MADE: (x) => [{ en: 'made of', ar: x.T.g === 'f' ? 'مصنوعة من' : 'مصنوع من' }],
        },
        tags: ['describing', 'materials'], d: 1, limit: 24,
      },
      {
        tmpl: 'My {T} is {AG}.', arTmpl: '{T_ar} {AG_ar}.',
        slots: {
          T: MY_THINGS,
          A: ADJMF,
          AG: (x) => [{ en: x.A.en, ar: x.T.g === 'f' ? x.A.f : x.A.ar }],
        },
        tags: ['describing', 'adjectives'], d: 1, limit: 24,
      },
      {
        tmpl: 'What is the {T} made of?', arTmpl: 'مم {MD_ar} {T_ar}؟',
        slots: {
          T: MADE_OF_T,
          MD: (x) => [{ en: '', ar: x.T.g === 'f' ? 'مصنوعة' : 'مصنوع' }],
        },
        tags: ['describing', 'questions'], d: 2, limit: 8,
      },
      {
        tmpl: 'The box is {A} and {B}.', arTmpl: 'الصندوق {A_ar} و{B_ar}.',
        slots: {
          A: ADJMF,
          B: [
            { en: 'small', ar: 'صغير' }, { en: 'big', ar: 'كبير' },
            { en: 'light', ar: 'خفيف' }, { en: 'heavy', ar: 'ثقيل' },
          ],
        },
        filter: (x) => x.A.en !== x.B.en,
        tags: ['describing', 'adjectives'], d: 2, limit: 20,
      },
    ],
    fills: [
      { en: 'The box is small and light.', ar: 'الصندوق صغير وخفيف.', word: 'small', hint: 'حجم' },
      { en: 'This table is made of wood.', ar: 'هذه الطاولة مصنوعة من الخشب.', word: 'wood', hint: 'مادة' },
      { en: 'My keys are made of metal.', ar: 'مفاتيحي مصنوعة من المعدن.', word: 'metal', hint: 'مادة' },
      { en: 'The bag is not heavy.', ar: 'الحقيبة ليست ثقيلة.', word: 'heavy', hint: 'وزن' },
      { en: 'My wallet is made of leather.', ar: 'محفظتي مصنوعة من الجلد.', word: 'leather', hint: 'مادة' },
      { en: 'The ball is round and soft.', ar: 'الكرة مستديرة وناعمة.', word: 'round', hint: 'شكل' },
      { en: 'What is it made of?', ar: 'مم هو مصنوع؟', word: 'made', hint: 'مصنوع من' },
      { en: 'These spoons are made of steel.', ar: 'هذه الملاعق مصنوعة من الفولاذ.', word: 'steel', hint: 'مادة' },
    ],
    orders: [
      { en: 'My new table is made of wood.', ar: 'طاولتي الجديدة مصنوعة من الخشب.' },
      { en: 'The bag is not very heavy.', ar: 'الحقيبة ليست ثقيلة جدا.' },
      { en: 'What is this ring made of?', ar: 'مم هذا الخاتم مصنوع؟' },
      { en: 'These keys are small and light.', ar: 'هذه المفاتيح صغيرة وخفيفة.' },
      { en: 'Your suitcase is big and heavy.', ar: 'حقيبة سفرك كبيرة وثقيلة.' },
      { en: 'The old clock is made of metal.', ar: 'الساعة القديمة مصنوعة من المعدن.' },
    ],
    mc: [
      { question: 'The table is made of wood. What is the material?', options: ['wood', 'glass', 'paper', 'plastic'], answerIndex: 0, ar: 'الطاولة مصنوعة من الخشب. ما المادة؟' },
      { question: 'A small and light box is:', options: ['easy to carry', 'hard to carry', 'very expensive', 'made of glass'], answerIndex: 0, ar: 'الصندوق الصغير الخفيف:' },
      { question: '"Made of" tells us about the:', options: ['material', 'color', 'price', 'size'], answerIndex: 0, ar: 'Made of تخبرنا عن:' },
      { question: 'Which sentence is correct?', options: ['The ring is made of silver.', 'The ring are made of silver.', 'The ring made is silver.', 'The ring is made silver of.'], answerIndex: 0, ar: 'أي جملة صحيحة؟' },
    ],
  },

  /* ================= lesson 35 — Expressing Feelings ================= */
  {
    num: 35,
    tags: ['feelings', 'emotions'],
    objectives: [
      'Say how you feel with be and feel',
      'Ask others about their feelings',
      'Give a reason with because',
    ],
    grammar: {
      explanation: 'Feelings are adjectives, so use the verb be: "I am happy", "She is sad". With the verb feel, say "I feel tired" or "He feels worried". Ask "How do you feel?" or "Why are you sad?". In English the feeling never changes, but in Arabic it matches the speaker: "أنا سعيد" (male) and "أنا سعيدة" (female). To give the reason, use because: "I am happy because it is Friday".',
      explanationAr: 'المشاعر صفات، فاستخدم معها فعل الكينونة: I am happy، She is sad. ومع فعل feel قل I feel tired أو He feels worried. اسأل How do you feel؟ أو Why are you sad؟ في الإنجليزية لا تتغير الصفة، أما في العربية فتطابق المتكلم: أنا سعيد (للمذكر) وأنا سعيدة (للمؤنث). ولذكر السبب استخدم because: I am happy because it is Friday.',
      examples: [
        { en: 'I feel tired after work.', ar: 'أشعر بالتعب بعد العمل.' },
        { en: 'Why are you sad, Sara?', ar: 'لماذا أنت حزينة يا سارة؟' },
        { en: 'They were happy at the party.', ar: 'كانوا سعداء في الحفلة.' },
      ],
    },
    vocabulary: [
      { word: 'feel', meaningAr: 'يشعر', example: 'I feel tired today.', ipa: 'fiːl' },
      { word: 'happy', meaningAr: 'سعيد', example: 'She is happy today.' },
      { word: 'sad', meaningAr: 'حزين', example: 'He is sad today.' },
      { word: 'angry', meaningAr: 'غاضب', example: 'He is angry with me.' },
      { word: 'tired', meaningAr: 'متعب', example: 'We are tired after work.' },
      { word: 'worried', meaningAr: 'قلق', example: 'I am worried about the test.' },
      { word: 'excited', meaningAr: 'متحمس', example: 'Are you excited about the trip?' },
      { word: 'scared', meaningAr: 'خائف', example: 'The child is scared of dogs.' },
      { word: 'proud', meaningAr: 'فخور', example: 'My father is proud of me.' },
      { word: 'calm', meaningAr: 'هادئ', example: 'Please stay calm.' },
      { word: 'nervous', meaningAr: 'متوتر', example: 'She feels nervous before exams.' },
      { word: 'because', meaningAr: 'لأن', example: 'I am happy because it is Friday.' },
    ],
    scenario: [
      { en: 'I am happy today.', ar: 'أنا سعيد اليوم.', d: 1 },
      { en: 'She is sad because it is raining.', ar: 'هي حزينة لأن الجو ممطر.', d: 2 },
      { en: 'We are tired after work.', ar: 'نحن متعبون بعد العمل.', d: 1 },
      { en: 'He is angry with his brother.', ar: 'هو غاضب من أخيه.', d: 1 },
      { en: 'I feel worried about the test.', ar: 'أشعر بالقلق من الاختبار.', d: 1 },
      { en: 'Are you excited about the trip?', ar: 'هل أنت متحمس للرحلة؟', d: 1 },
      { en: 'Yes, I am very excited.', ar: 'نعم، أنا متحمس جدا.', d: 1 },
      { en: 'My mother is not happy today.', ar: 'أمي ليست سعيدة اليوم.', d: 2 },
      { en: 'Why are you sad, Sara?', ar: 'لماذا أنت حزينة يا سارة؟', d: 1 },
      { en: 'I lost my new phone.', ar: 'أضعت هاتفي الجديد.', d: 1 },
      { en: 'They were happy at the party.', ar: 'كانوا سعداء في الحفلة.', d: 2 },
      { en: 'The children are scared of the dark.', ar: 'الأطفال خائفون من الظلام.', d: 2 },
      { en: 'I will be happy on Friday.', ar: 'سأكون سعيدا يوم الجمعة.', d: 2 },
      { en: 'She feels nervous before the exam.', ar: 'هي تشعر بالتوتر قبل الامتحان.', d: 2 },
      { en: 'My father is proud of me.', ar: 'أبي فخور بي.', d: 1 },
      { en: 'Please calm down and relax.', ar: 'اهدأ من فضلك واسترح.', d: 1 },
      { en: 'He was tired yesterday.', ar: 'كان متعبا أمس.', d: 2 },
      { en: 'Why is he angry?', ar: 'لماذا هو غاضب؟', d: 2 },
    ],
    patterns: [
      {
        tmpl: '{N} is {FG} today.', arTmpl: '{N_ar} {FG_ar} اليوم.',
        slots: {
          N: B.NAMED_SING,
          F: FEELINGS,
          FG: (x) => [{ en: x.F.en, ar: x.N.agr === 'she' ? x.F.f : x.F.ar }],
        },
        tags: ['feelings', 'present-simple'], d: 1, limit: 20,
      },
      {
        tmpl: 'Why are you {F}?', arTmpl: 'لماذا أنت {F_ar}؟',
        slots: { F: FEELINGS },
        tags: ['feelings', 'questions'], d: 1, limit: 6,
      },
      {
        tmpl: '{N} is {NOT} {FG}.', arTmpl: '{N_ar} {NOT_ar} {FG_ar}.',
        slots: {
          N: B.NAMED_SING,
          F: FEELINGS,
          FG: (x) => [{ en: x.F.en, ar: x.N.agr === 'she' ? x.F.f : x.F.ar }],
          NOT: (x) => [{ en: 'not', ar: x.N.agr === 'she' ? 'ليست' : 'ليس' }],
        },
        tags: ['feelings', 'negation'], d: 2, limit: 20,
      },
      {
        tmpl: '{N} was {FG} {T}.', arTmpl: '{K_ar} {N_ar} {FG_ar} {T_ar}.',
        slots: {
          N: B.NAMED_SING,
          T: [
            { en: 'yesterday', ar: 'أمس' }, { en: 'last night', ar: 'الليلة الماضية' },
            { en: 'this morning', ar: 'هذا الصباح' }, { en: 'at the party', ar: 'في الحفلة' },
            { en: 'after the exam', ar: 'بعد الامتحان' },
          ],
          F: FEELINGS,
          FG: (x) => [{ en: x.F.en, ar: x.N.agr === 'she' ? x.F.f : x.F.ar }],
          K: (x) => [{ en: 'was', ar: B.AR_KANA[x.N.agr] }],
        },
        tags: ['feelings', 'past-simple'], d: 2, limit: 20,
      },
    ],
    fills: [
      { en: 'I am happy today.', ar: 'أنا سعيد اليوم.', word: 'happy', hint: 'شعور' },
      { en: 'We are tired after work.', ar: 'نحن متعبون بعد العمل.', word: 'tired', hint: 'شعور' },
      { en: 'He is angry with his brother.', ar: 'هو غاضب من أخيه.', word: 'angry', hint: 'شعور' },
      { en: 'I feel worried about the test.', ar: 'أشعر بالقلق من الاختبار.', word: 'worried', hint: 'شعور' },
      { en: 'Are you excited about the trip?', ar: 'هل أنت متحمس للرحلة؟', word: 'excited', hint: 'شعور' },
      { en: 'The children are scared of the dark.', ar: 'الأطفال خائفون من الظلام.', word: 'scared', hint: 'شعور' },
      { en: 'My father is proud of me.', ar: 'أبي فخور بي.', word: 'proud', hint: 'شعور' },
      { en: 'Please calm down and relax.', ar: 'اهدأ من فضلك واسترح.', word: 'calm', hint: 'شعور' },
    ],
    orders: [
      { en: 'I feel tired after work today.', ar: 'أشعر بالتعب بعد العمل اليوم.' },
      { en: 'Why are you sad, my friend?', ar: 'لماذا أنت حزين يا صديقي؟' },
      { en: 'She is not angry with you.', ar: 'هي ليست غاضبة منك.' },
      { en: 'The children were scared last night.', ar: 'كان الأطفال خائفين الليلة الماضية.' },
      { en: 'My mother is proud of me.', ar: 'أمي فخورة بي.' },
      { en: 'We will be happy tomorrow.', ar: 'سنكون سعداء غدا.' },
    ],
    mc: [
      { question: 'You worked all day. Now you feel:', options: ['tired', 'angry', 'scared', 'bored'], answerIndex: 0, ar: 'عملت طوال اليوم. الآن تشعر بأنك:' },
      { question: 'Your friend won a prize. You feel:', options: ['proud', 'sad', 'angry', 'tired'], answerIndex: 0, ar: 'صديقك فاز بجائزة. أنت تشعر بـ:' },
      { question: '"I am worried" means:', options: ['أنا قلق', 'أنا سعيد', 'أنا متعب', 'أنا غاضب'], answerIndex: 0, ar: 'ما معنى I am worried؟' },
      { question: 'Which feeling is positive?', options: ['excited', 'angry', 'sad', 'scared'], answerIndex: 0, ar: 'أي شعور إيجابي؟' },
    ],
  },

  /* ================= lesson 36 — Asking for Help ================= */
  {
    num: 36,
    tags: ['help', 'requests'],
    objectives: [
      'Ask for help politely with can and could',
      'Say what you need help with',
      'Offer help and thank the helper',
    ],
    grammar: {
      explanation: 'To ask for help politely, use Can you...? or Could you...?: "Can you help me, please?", "Could you show me the way?". Say what you need with "I need help with..." — for example "I need help with this form". "Could" sounds a little more polite than "can". Always add "please" to be polite, and thank the person afterwards with "Thank you for your help".',
      explanationAr: 'لطلب المساعدة بأدب استخدم Can you...؟ أو Could you...؟: Can you help me, please؟، Could you show me the way؟ وقل ما تحتاجه بـ I need help with... مثل I need help with this form. صيغة Could أكثر تأدبا قليلا من can. أضف always please ليكون الطلب مهذبا، ثم اشكر الشخص بـ Thank you for your help.',
      examples: [
        { en: 'Can you help me, please?', ar: 'هل يمكنك مساعدتي من فضلك؟' },
        { en: 'I need help with this form.', ar: 'أحتاج مساعدة في هذا النموذج.' },
        { en: 'I will help you after lunch.', ar: 'سأساعدك بعد الغداء.' },
      ],
    },
    vocabulary: [
      { word: 'help', meaningAr: 'يساعد / مساعدة', example: 'Can you help me, please?', ipa: 'hɛlp' },
      { word: 'need', meaningAr: 'يحتاج', example: 'I need help with this form.' },
      { word: 'show', meaningAr: 'يريك', example: 'Could you show me the menu?' },
      { word: 'understand', meaningAr: 'يفهم', example: 'I do not understand this word.' },
      { word: 'carry', meaningAr: 'يحمل', example: 'Could you carry this bag, please?' },
      { word: 'slowly', meaningAr: 'ببطء', example: 'Please speak more slowly.' },
      { word: 'problem', meaningAr: 'مشكلة', example: 'No problem, I can help.' },
      { word: 'wait', meaningAr: 'ينتظر', example: 'Please wait here a minute.' },
      { word: 'find', meaningAr: 'يجد', example: 'I cannot find my keys.' },
      { word: 'kind', meaningAr: 'طيب', example: 'You are very kind.' },
      { word: 'ask', meaningAr: 'يطلب / يسأل', example: 'He asked me for help.' },
      { word: 'sure', meaningAr: 'بالتأكيد', example: 'Sure, I can help you.' },
    ],
    scenario: [
      { en: 'Can you help me, please?', ar: 'هل يمكنك مساعدتي من فضلك؟', d: 1 },
      { en: 'Sure, I can help you.', ar: 'بالتأكيد، أستطيع مساعدتك.', d: 1 },
      { en: 'I need help with this form.', ar: 'أحتاج مساعدة في هذا النموذج.', d: 1 },
      { en: 'Could you show me the way?', ar: 'هل يمكنك أن تريني الطريق؟', d: 1 },
      { en: 'Please open the window for me.', ar: 'افتح النافذة لي من فضلك.', d: 1 },
      { en: 'I do not understand this word.', ar: 'لا أفهم هذه الكلمة.', d: 1 },
      { en: 'Can you speak more slowly, please?', ar: 'هل يمكنك التكلم ببطء أكثر من فضلك؟', d: 1 },
      { en: 'Of course, no problem.', ar: 'بالطبع، لا مشكلة.', d: 1 },
      { en: 'He asked me for help yesterday.', ar: 'طلب مني المساعدة أمس.', d: 2 },
      { en: 'We need help with the bags.', ar: 'نحتاج مساعدة في الحقائب.', d: 1 },
      { en: 'Could you carry this box, please?', ar: 'هل يمكنك حمل هذا الصندوق من فضلك؟', d: 1 },
      { en: 'I will help you after lunch.', ar: 'سأساعدك بعد الغداء.', d: 2 },
      { en: 'She cannot find her keys.', ar: 'هي لا تجد مفاتيحها.', d: 2 },
      { en: 'Can you write your name here?', ar: 'هل يمكنك كتابة اسمك هنا؟', d: 1 },
      { en: 'I am going to call the manager.', ar: 'سوف أتصل بالمدير.', d: 2 },
      { en: 'Do you need any help?', ar: 'هل تحتاج أي مساعدة؟', d: 1 },
      { en: 'Thank you, you are very kind.', ar: 'شكرا لك، أنت طيب جدا.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'Can you {V}, please?', arTmpl: 'هل يمكنك {V_ar} من فضلك؟',
        slots: {
          V: [
            { en: 'help me', ar: 'أن تساعدني' }, { en: 'open the door', ar: 'أن تفتح الباب' },
            { en: 'close the window', ar: 'أن تغلق النافذة' }, { en: 'carry this box', ar: 'أن تحمل هذا الصندوق' },
            { en: 'repeat the word', ar: 'أن تعيد الكلمة' }, { en: 'show me the way', ar: 'أن تريني الطريق' },
            { en: 'speak slowly', ar: 'أن تتكلم ببطء' }, { en: 'wait here', ar: 'أن تنتظر هنا' },
            { en: 'write your name', ar: 'أن تكتب اسمك' }, { en: 'sign here', ar: 'أن توقع هنا' },
          ],
        },
        tags: ['help', 'requests'], d: 1, limit: 10,
      },
      {
        tmpl: 'I need help with {X}.', arTmpl: 'أحتاج مساعدة في {X_ar}.',
        slots: {
          X: [
            { en: 'this form', ar: 'هذا النموذج' }, { en: 'my homework', ar: 'واجبي المنزلي' },
            { en: 'the heavy bags', ar: 'الحقائب الثقيلة' }, { en: 'this English word', ar: 'هذه الكلمة الإنجليزية' },
            { en: 'the new machine', ar: 'الآلة الجديدة' }, { en: 'my computer', ar: 'حاسوبي' },
            { en: 'this application', ar: 'هذا التطبيق' }, { en: 'the heavy box', ar: 'الصندوق الثقيل' },
          ],
        },
        tags: ['help', 'requests'], d: 1, limit: 8,
      },
      {
        tmpl: 'I am going to {V} tomorrow.', arTmpl: 'سوف {V_ar} غدا.',
        slots: {
          V: [
            { en: 'ask the teacher', ar: 'أسأل المعلم' }, { en: 'call the doctor', ar: 'أتصل بالطبيب' },
            { en: 'buy a new lock', ar: 'أشتري قفلا جديدا' }, { en: 'ask my neighbor', ar: 'أسأل جاري' },
            { en: 'watch a video', ar: 'أشاهد فيديو' }, { en: 'write to the office', ar: 'أكتب إلى المكتب' },
            { en: 'search on my phone', ar: 'أبحث في هاتفي' }, { en: 'clean the garden', ar: 'أنظف الحديقة' },
          ],
        },
        tags: ['help', 'future'], d: 2, limit: 8,
      },
      {
        tmpl: 'Could you show me {X}, please?', arTmpl: 'هل يمكنك أن تريني {X_ar} من فضلك؟',
        slots: {
          X: [
            { en: 'your phone', ar: 'هاتفك' }, { en: 'the menu', ar: 'القائمة' },
            { en: 'your ticket', ar: 'تذكرتك' }, { en: 'the way', ar: 'الطريق' },
            { en: 'your address', ar: 'عنوانك' }, { en: 'the book', ar: 'الكتاب' },
            { en: 'your card', ar: 'بطاقتك' }, { en: 'the letter', ar: 'الرسالة' },
          ],
        },
        tags: ['help', 'requests'], d: 1, limit: 8,
      },
    ],
    fills: [
      { en: 'Can you help me, please?', ar: 'هل يمكنك مساعدتي من فضلك؟', word: 'help', hint: 'فعل المساعدة' },
      { en: 'I need help with this form.', ar: 'أحتاج مساعدة في هذا النموذج.', word: 'need', hint: 'فعل' },
      { en: 'Could you show me the way?', ar: 'هل يمكنك أن تريني الطريق؟', word: 'show', hint: 'فعل' },
      { en: 'I do not understand this word.', ar: 'لا أفهم هذه الكلمة.', word: 'understand', hint: 'فعل' },
      { en: 'Can you speak more slowly, please?', ar: 'هل يمكنك التكلم ببطء أكثر من فضلك؟', word: 'slowly', hint: 'ببطء' },
      { en: 'She cannot find her keys.', ar: 'هي لا تجد مفاتيحها.', word: 'find', hint: 'فعل' },
      { en: 'I will help you after lunch.', ar: 'سأساعدك بعد الغداء.', word: 'after', hint: 'حرف جر' },
      { en: 'Please open the window for me.', ar: 'افتح النافذة لي من فضلك.', word: 'open', hint: 'فعل' },
    ],
    orders: [
      { en: 'Can you help me with this?', ar: 'هل تساعدني في هذا؟' },
      { en: 'Could you show me your ticket?', ar: 'هل تريني تذكرتك؟' },
      { en: 'I need help with my homework.', ar: 'أحتاج مساعدة في واجبي المنزلي.' },
      { en: 'She cannot find her phone.', ar: 'هي لا تجد هاتفها.' },
      { en: 'I will help you tomorrow morning.', ar: 'سأساعدك غدا صباحا.' },
      { en: 'Please speak more slowly, thank you.', ar: 'تكلم ببطء أكثر من فضلك، شكرا.' },
    ],
    mc: [
      { question: 'Someone says "Can you help me?" What do they want?', options: ['help', 'money', 'food', 'time'], answerIndex: 0, ar: 'قال أحدهم Can you help me؟ ماذا يريد؟' },
      { question: 'Which request is the most polite?', options: ['Could you help me, please?', 'Help me!', 'You help me.', 'Help now.'], answerIndex: 0, ar: 'أي طلب هو الأكثر تأدبا؟' },
      { question: '"I do not understand" means:', options: ['لا أفهم', 'لا أسمع', 'لا أعرف', 'لا أريد'], answerIndex: 0, ar: 'ما معنى I do not understand؟' },
      { question: 'After someone helps you, say:', options: ['Thank you.', 'Go away.', 'Hurry up.', 'Stop it.'], answerIndex: 0, ar: 'بعد أن يساعدك أحدهم قل:' },
    ],
  },

  /* ================= lesson 37 — Asking for Directions ================= */
  {
    num: 37,
    tags: ['directions', 'questions'],
    objectives: [
      'Ask where places are in the city',
      'Ask if a place is far or near',
      'Say what you are looking for',
    ],
    grammar: {
      explanation: 'To ask for directions, start politely with "Excuse me": "Excuse me, where is the bank?". Other useful questions are "How do I get to the station?", "Is it far from here?" and "Is there a pharmacy near here?". To say what you want, use "I am looking for the post office". If you do not know the area, say "Sorry, I am new here".',
      explanationAr: 'للسؤال عن الاتجاهات ابدأ بأدب بـ Excuse me: Excuse me, where is the bank؟ ومن الأسئلة المفيدة أيضا How do I get to the station؟ وIs it far from here؟ وIs there a pharmacy near here؟ وللتعبير عما تبحث عنه قل I am looking for the post office. وإذا لم تكن تعرف المنطقة قل Sorry, I am new here.',
      examples: [
        { en: 'Excuse me, where is the bank?', ar: 'عفوا، أين البنك؟' },
        { en: 'How do I get to the station?', ar: 'كيف أصل إلى المحطة؟' },
        { en: 'Is it far from here?', ar: 'هل هو بعيد من هنا؟' },
      ],
    },
    vocabulary: [
      { word: 'where', meaningAr: 'أين', example: 'Where is the bank?', ipa: 'wɛər' },
      { word: 'street', meaningAr: 'شارع', example: 'The bank is on this street.' },
      { word: 'near', meaningAr: 'قريب', example: 'Is there a pharmacy near here?' },
      { word: 'far', meaningAr: 'بعيد', example: 'Is the station far from here?' },
      { word: 'left', meaningAr: 'يسار', example: 'The shop is on the left.' },
      { word: 'right', meaningAr: 'يمين', example: 'The school is on the right.' },
      { word: 'next to', meaningAr: 'بجانب', example: 'The mosque is next to the bank.' },
      { word: 'between', meaningAr: 'بين', example: 'The park is between two shops.' },
      { word: 'corner', meaningAr: 'زاوية', example: 'Meet me at the corner.' },
      { word: 'traffic light', meaningAr: 'إشارة المرور', example: 'Stop at the traffic light.' },
      { word: 'excuse me', meaningAr: 'عفوا', example: 'Excuse me, where is the market?' },
      { word: 'lost', meaningAr: 'ضل الطريق / ضائع', example: 'I lost my way.' },
    ],
    scenario: [
      { en: 'Where is the bank, please?', ar: 'أين البنك من فضلك؟', d: 1 },
      { en: 'It is next to the mosque.', ar: 'إنه بجانب المسجد.', d: 1 },
      { en: 'How do I get to the station?', ar: 'كيف أصل إلى المحطة؟', d: 1 },
      { en: 'Is it far from here?', ar: 'هل هو بعيد من هنا؟', d: 1 },
      { en: 'No, it is very close.', ar: 'لا، إنه قريب جدا.', d: 1 },
      { en: 'I am looking for the post office.', ar: 'أبحث عن مكتب البريد.', d: 1 },
      { en: 'Sorry, I am new here too.', ar: 'عفوا، أنا جديد هنا أيضا.', d: 1 },
      { en: 'Excuse me, where is the market?', ar: 'عفوا، أين السوق؟', d: 1 },
      { en: 'Is there a pharmacy near here?', ar: 'هل توجد صيدلية قريبة من هنا؟', d: 1 },
      { en: 'The bus stop is not far.', ar: 'موقف الحافلة ليس بعيدا.', d: 1 },
      { en: 'I asked a policeman for directions.', ar: 'سألت شرطيا عن الاتجاهات.', d: 2 },
      { en: 'She will show you the way.', ar: 'ستريك الطريق.', d: 2 },
      { en: 'Which bus goes to the airport?', ar: 'أي حافلة تذهب إلى المطار؟', d: 2 },
      { en: 'Is the hotel near the park?', ar: 'هل الفندق قريب من الحديقة؟', d: 1 },
      { en: 'The museums are in the city center.', ar: 'المتاحف في وسط المدينة.', d: 2 },
      { en: 'I lost my way in the old city.', ar: 'ضللت طريقي في المدينة القديمة.', d: 2 },
      { en: 'Thank you for your help.', ar: 'شكرا على مساعدتك.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'Where is the {P}, please?', arTmpl: 'أين {P_ar} من فضلك؟',
        slots: {
          P: [
            { en: 'bank', ar: 'البنك' }, { en: 'mosque', ar: 'المسجد' },
            { en: 'station', ar: 'المحطة' }, { en: 'market', ar: 'السوق' },
            { en: 'pharmacy', ar: 'الصيدلية' }, { en: 'hospital', ar: 'المستشفى' },
            { en: 'post office', ar: 'مكتب البريد' }, { en: 'school', ar: 'المدرسة' },
            { en: 'park', ar: 'الحديقة' }, { en: 'museum', ar: 'المتحف' },
          ],
        },
        tags: ['directions', 'questions'], d: 1, limit: 10,
      },
      {
        tmpl: 'How do I get to {X}?', arTmpl: 'كيف أصل إلى {X_ar}؟',
        slots: {
          X: [
            { en: 'the airport', ar: 'المطار' }, { en: 'the city center', ar: 'وسط المدينة' },
            { en: 'the train station', ar: 'محطة القطار' }, { en: 'the nearest bank', ar: 'أقرب بنك' },
            { en: 'the bus station', ar: 'محطة الحافلات' }, { en: 'the main square', ar: 'الساحة الرئيسة' },
          ],
        },
        tags: ['directions', 'questions'], d: 2, limit: 6,
      },
      {
        tmpl: 'Is the {P} near here?', arTmpl: 'هل {P_ar} قريب من هنا؟',
        slots: {
          P: [
            { en: 'bank', ar: 'البنك' }, { en: 'mosque', ar: 'المسجد' },
            { en: 'market', ar: 'السوق' }, { en: 'pharmacy', ar: 'الصيدلية' },
            { en: 'hospital', ar: 'المستشفى' }, { en: 'school', ar: 'المدرسة' },
            { en: 'park', ar: 'الحديقة' }, { en: 'museum', ar: 'المتحف' },
            { en: 'station', ar: 'المحطة' }, { en: 'hotel', ar: 'الفندق' },
          ],
        },
        tags: ['directions', 'questions'], d: 1, limit: 10,
      },
      {
        tmpl: 'Is there a {P} near here?', arTmpl: 'هل يوجد {P_ar} قريب من هنا؟',
        slots: {
          P: [
            { en: 'bank', ar: 'بنك' }, { en: 'mosque', ar: 'مسجد' },
            { en: 'market', ar: 'سوق' }, { en: 'hospital', ar: 'مستشفى' },
            { en: 'school', ar: 'مدرسة' }, { en: 'park', ar: 'حديقة' },
            { en: 'museum', ar: 'متحف' }, { en: 'hotel', ar: 'فندق' },
          ],
        },
        tags: ['directions', 'questions'], d: 1, limit: 8,
      },
    ],
    fills: [
      { en: 'Where is the bank, please?', ar: 'أين البنك من فضلك؟', word: 'Where', hint: 'أداة استفهام' },
      { en: 'Is it far from here?', ar: 'هل هو بعيد من هنا؟', word: 'far', hint: 'مسافة' },
      { en: 'I am looking for the post office.', ar: 'أبحث عن مكتب البريد.', word: 'looking', hint: 'فعل' },
      { en: 'Is there a pharmacy near here?', ar: 'هل توجد صيدلية قريبة من هنا؟', word: 'near', hint: 'قرب' },
      { en: 'The bus stop is not far.', ar: 'موقف الحافلة ليس بعيدا.', word: 'bus', hint: 'مواصلات' },
      { en: 'Excuse me, where is the market?', ar: 'عفوا، أين السوق؟', word: 'Excuse', hint: 'لقول عفوا' },
      { en: 'She will show you the way.', ar: 'ستريك الطريق.', word: 'way', hint: 'طريق' },
      { en: 'I lost my way in the old city.', ar: 'ضللت طريقي في المدينة القديمة.', word: 'lost', hint: 'فعل ماض' },
    ],
    orders: [
      { en: 'Excuse me, where is the bank?', ar: 'عفوا، أين البنك؟' },
      { en: 'How do I get to the museum?', ar: 'كيف أصل إلى المتحف؟' },
      { en: 'Is there a bank near the hotel?', ar: 'هل يوجد بنك قرب الفندق؟' },
      { en: 'The post office is not far.', ar: 'مكتب البريد ليس بعيدا.' },
      { en: 'Which bus goes to the airport?', ar: 'أي حافلة تذهب إلى المطار؟' },
      { en: 'I am looking for the market.', ar: 'أبحث عن السوق.' },
    ],
    mc: [
      { question: 'You want to find the bank. You ask:', options: ['Where is the bank?', 'When is the bank?', 'Why is the bank?', 'Who is the bank?'], answerIndex: 0, ar: 'تريد أن تجد البنك، فتسأل:' },
      { question: '"Is it far?" asks about:', options: ['distance', 'price', 'color', 'weather'], answerIndex: 0, ar: 'Is it far؟ تسأل عن:' },
      { question: 'The pharmacy is next to the mosque. It is:', options: ['بجانب المسجد', 'أمام المستشفى', 'خلف المدرسة', 'في السوق'], answerIndex: 0, ar: 'ما معنى next to the mosque؟' },
      { question: 'A polite way to stop someone in the street:', options: ['Excuse me', 'Move', 'Listen to me', 'Come here'], answerIndex: 0, ar: 'طريقة مهذبة لتوقف أحدهم في الشارع:' },
    ],
  },

  /* ================= lesson 38 — Giving Directions ================= */
  {
    num: 38,
    tags: ['directions', 'imperative'],
    objectives: [
      'Give clear directions with go, turn and cross',
      'Say where a place is in the street',
      'Use polite and negative commands',
    ],
    grammar: {
      explanation: 'To give directions, start with the verb: "Go straight", "Turn left", "Turn right". Say where the place is with next to, on your right, on your left, in front of, behind and between: "The bank is next to the bakery". For negative commands use do not: "Do not turn left here". Add "please" to sound polite: "Stop at the corner, please".',
      explanationAr: 'لإعطاء الاتجاهات ابدأ بالفعل: Go straight، Turn left، Turn right. وحدد مكان المكان بكلمات مثل next to وon your right وon your left وin front of وbehind وbetween: The bank is next to the bakery. وللنهي استخدم do not: Do not turn left here. وأضف please ليكون الكلام مهذبا: Stop at the corner, please.',
      examples: [
        { en: 'Go straight and turn left.', ar: 'امش مستقيما ثم انعطف يسارا.' },
        { en: 'The bank is on your right.', ar: 'البنك على يمينك.' },
        { en: 'Do not turn left here.', ar: 'لا تنعطف يسارا هنا.' },
      ],
    },
    vocabulary: [
      { word: 'go straight', meaningAr: 'امش مستقيما', example: 'Go straight for two minutes.', ipa: 'ɡoʊ streɪt' },
      { word: 'turn left', meaningAr: 'انعطف يسارا', example: 'Turn left at the traffic light.' },
      { word: 'turn right', meaningAr: 'انعطف يمينا', example: 'Turn right at the corner.' },
      { word: 'cross', meaningAr: 'يعبر', example: 'Cross the street at the light.' },
      { word: 'on your right', meaningAr: 'على يمينك', example: 'The bank is on your right.' },
      { word: 'on your left', meaningAr: 'على يسارك', example: 'The pharmacy is on your left.' },
      { word: 'in front of', meaningAr: 'أمام', example: 'The station is in front of the park.' },
      { word: 'behind', meaningAr: 'خلف', example: 'The mosque is behind the school.' },
      { word: 'meters', meaningAr: 'أمتار', example: 'Walk fifty meters, please.' },
      { word: 'bridge', meaningAr: 'جسر', example: 'Turn right after the bridge.' },
      { word: 'stop', meaningAr: 'يتوقف / توقف', example: 'Stop at the corner, please.' },
      { word: 'follow', meaningAr: 'يتبع', example: 'Follow this street to the end.' },
    ],
    scenario: [
      { en: 'Go straight on this street.', ar: 'امش مستقيما في هذا الشارع.', d: 1 },
      { en: 'Turn left at the second light.', ar: 'انعطف يسارا عند الإشارة الثانية.', d: 1 },
      { en: 'Turn right after the bridge.', ar: 'انعطف يمينا بعد الجسر.', d: 1 },
      { en: 'The bakery is next to the bank.', ar: 'المخبزة بجانب البنك.', d: 1 },
      { en: 'It is on your right.', ar: 'إنه على يمينك.', d: 1 },
      { en: 'The café is on your left.', ar: 'المقهى على يسارك.', d: 1 },
      { en: 'Can you show me the way on the map?', ar: 'هل يمكنك أن تريني الطريق على الخريطة؟', d: 1 },
      { en: 'Do not turn left here.', ar: 'لا تنعطف يسارا هنا.', d: 1 },
      { en: 'Cross the street at the light.', ar: 'اعبر الشارع عند الإشارة.', d: 1 },
      { en: 'The hospital is in front of the park.', ar: 'المستشفى أمام الحديقة.', d: 1 },
      { en: 'It is not far, go straight.', ar: 'ليس بعيدا، امش مستقيما.', d: 1 },
      { en: 'Stop at the corner, please.', ar: 'توقف عند الزاوية من فضلك.', d: 1 },
      { en: 'Then turn right at the mosque.', ar: 'ثم انعطف يمينا عند المسجد.', d: 1 },
      { en: 'The school is between the two shops.', ar: 'المدرسة بين المتجرين.', d: 2 },
      { en: 'I will wait for you at the corner.', ar: 'سأنتظرك عند الزاوية.', d: 2 },
      { en: 'How do I get to the museum, please?', ar: 'كيف أصل إلى المتحف من فضلك؟', d: 1 },
      { en: 'Go straight and turn left.', ar: 'امش مستقيما ثم انعطف يسارا.', d: 1 },
      { en: 'Which is the way to the market?', ar: 'أي الطرق يؤدي إلى السوق؟', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Turn {DIR} at the {L}.', arTmpl: 'انعطف {DIR_ar} عند {L_ar}.',
        slots: {
          DIR: [
            { en: 'left', ar: 'يسارا' }, { en: 'right', ar: 'يمينا' },
          ],
          L: [
            { en: 'corner', ar: 'الزاوية' }, { en: 'mosque', ar: 'المسجد' },
            { en: 'bank', ar: 'البنك' }, { en: 'bridge', ar: 'الجسر' },
            { en: 'roundabout', ar: 'الدوار' }, { en: 'crossroads', ar: 'التقاطع' },
          ],
        },
        tags: ['directions', 'imperative'], d: 1, limit: 12,
      },
      {
        tmpl: '{P} is {POS}.', arTmpl: '{P_ar} {POS_ar}.',
        slots: {
          P: [
            { en: 'The bank', ar: 'البنك' }, { en: 'The pharmacy', ar: 'الصيدلية' },
            { en: 'The station', ar: 'المحطة' }, { en: 'The school', ar: 'المدرسة' },
            { en: 'The mosque', ar: 'المسجد' }, { en: 'The hotel', ar: 'الفندق' },
          ],
          POS: [
            { en: 'next to the bakery', ar: 'بجانب المخبزة' }, { en: 'on your right', ar: 'على يمينك' },
            { en: 'on your left', ar: 'على يسارك' }, { en: 'in front of the park', ar: 'أمام الحديقة' },
            { en: 'behind the mosque', ar: 'خلف المسجد' }, { en: 'near the market', ar: 'قرب السوق' },
          ],
        },
        tags: ['directions', 'places'], d: 1, limit: 24,
      },
      {
        tmpl: 'Go straight for {N} meters.', arTmpl: 'امش مستقيما لمسافة {N_ar} مترا.',
        slots: {
          N: [
            { en: 'fifty', ar: 'خمسين' }, { en: 'thirty', ar: 'ثلاثين' },
            { en: 'hundred', ar: 'مئة' }, { en: 'twenty', ar: 'عشرين' },
          ],
        },
        tags: ['directions', 'imperative'], d: 2, limit: 4,
      },
      {
        tmpl: 'Cross the street at the {X}.', arTmpl: 'اعبر الشارع عند {X_ar}.',
        slots: {
          X: [
            { en: 'traffic light', ar: 'إشارة المرور' }, { en: 'zebra crossing', ar: 'معبر المشاة' },
            { en: 'corner', ar: 'الزاوية' },
          ],
        },
        tags: ['directions', 'imperative'], d: 2, limit: 3,
      },
    ],
    fills: [
      { en: 'Go straight on this street.', ar: 'امش مستقيما في هذا الشارع.', word: 'straight', hint: 'اتجاه' },
      { en: 'Turn left at the second light.', ar: 'انعطف يسارا عند الإشارة الثانية.', word: 'left', hint: 'اتجاه' },
      { en: 'Turn right after the bridge.', ar: 'انعطف يمينا بعد الجسر.', word: 'right', hint: 'اتجاه' },
      { en: 'Cross the street at the light.', ar: 'اعبر الشارع عند الإشارة.', word: 'Cross', hint: 'فعل' },
      { en: 'It is not far, go straight.', ar: 'ليس بعيدا، امش مستقيما.', word: 'far', hint: 'مسافة' },
      { en: 'The school is between the two shops.', ar: 'المدرسة بين المتجرين.', word: 'between', hint: 'موقع' },
      { en: 'I will wait for you at the corner.', ar: 'سأنتظرك عند الزاوية.', word: 'corner', hint: 'مكان' },
      { en: 'Which is the way to the market?', ar: 'أي الطرق يؤدي إلى السوق؟', word: 'way', hint: 'طريق' },
    ],
    orders: [
      { en: 'Go straight on this street.', ar: 'امش مستقيما في هذا الشارع.' },
      { en: 'Turn left at the next corner.', ar: 'انعطف يسارا عند الزاوية القادمة.' },
      { en: 'The bakery is on your right.', ar: 'المخبزة على يمينك.' },
      { en: 'Do not turn left here, please.', ar: 'لا تنعطف يسارا هنا من فضلك.' },
      { en: 'The museum is not far from here.', ar: 'المتحف ليس بعيدا من هنا.' },
      { en: 'Stop at the corner, please.', ar: 'توقف عند الزاوية من فضلك.' },
    ],
    mc: [
      { question: '"Turn left" means:', options: ['انعطف يسارا', 'انعطف يمينا', 'امش مستقيما', 'توقف هنا'], answerIndex: 0, ar: 'ما معنى Turn left؟' },
      { question: 'The bank is on your right. Where is it?', options: ['على يمينك', 'على يسارك', 'أمامك', 'خلفك'], answerIndex: 0, ar: 'البنك على يمينك. أين هو؟' },
      { question: 'You must not turn here. The sign says:', options: ['Do not turn left', 'Turn left', 'Go straight', 'Stop the car'], answerIndex: 0, ar: 'ممنوع الانعطاف هنا، فاللافتة تقول:' },
      { question: 'Which sentence gives directions?', options: ['Go straight for two minutes.', 'I like this city.', 'The weather is nice.', 'She is my sister.'], answerIndex: 0, ar: 'أي جملة تعطي اتجاهات؟' },
    ],
  },

  /* ================= lesson 39 — Shopping at a Small Store ================= */
  {
    num: 39,
    tags: ['shopping', 'questions'],
    objectives: [
      'Ask and say prices',
      'Ask for items and sizes in a shop',
      'Pay and understand the change',
    ],
    grammar: {
      explanation: 'In a small shop, ask the price with "How much is this shirt?" (one thing) or "How much are these apples?" (more than one). Say what you want with "I am looking for..." or "Do you have...?". To try the item first, say "Can I try on this jacket?". To pay, ask "Do you take credit cards?" or say "I will pay in cash". The money the seller gives back is "the change".',
      explanationAr: 'في المحل الصغير اسأل عن السعر بـ How much is this shirt؟ (لشيء واحد) أو How much are these apples؟ (لأكثر من شيء). وقل ما تريده بـ I am looking for... أو Do you have...؟ وللتجربة أولا قل Can I try on this jacket؟ وللدفع اسأل Do you take credit cards؟ أو قل I will pay in cash. والمال الذي يرده البائع يسمى the change.',
      examples: [
        { en: 'How much is this shirt?', ar: 'بكم هذا القميص؟' },
        { en: 'Do you have a bigger size?', ar: 'هل لديك مقاس أكبر؟' },
        { en: 'I will pay in cash.', ar: 'سأدفع نقدا.' },
      ],
    },
    vocabulary: [
      { word: 'how much', meaningAr: 'بكم', example: 'How much is this shirt?', ipa: 'haʊ mʌtʃ' },
      { word: 'price', meaningAr: 'السعر', example: 'The price is ten dollars.' },
      { word: 'look for', meaningAr: 'يبحث عن', example: 'I am looking for a jacket.' },
      { word: 'size', meaningAr: 'مقاس', example: 'What size do you want?' },
      { word: 'try on', meaningAr: 'يقيس الملابس', example: 'Can I try on this jacket?' },
      { word: 'expensive', meaningAr: 'غالٍ', example: 'This bag is too expensive.' },
      { word: 'cheap', meaningAr: 'رخيص', example: 'These pens are cheap.' },
      { word: 'take', meaningAr: 'يأخذ', example: 'I will take two, please.' },
      { word: 'cash', meaningAr: 'نقدا', example: 'He paid in cash.' },
      { word: 'change', meaningAr: 'الباقي', example: 'Here is your change.' },
      { word: 'card', meaningAr: 'بطاقة', example: 'Do you take credit cards?' },
      { word: 'bigger', meaningAr: 'أكبر', example: 'Do you have a bigger size?' },
    ],
    scenario: [
      { en: 'How much is this shirt?', ar: 'بكم هذا القميص؟', d: 1 },
      { en: 'It is ten dollars.', ar: 'إنه بعشرة دولارات.', d: 1 },
      { en: 'I am looking for a warm jacket.', ar: 'أبحث عن سترة دافئة.', d: 1 },
      { en: 'Do you have a bigger size?', ar: 'هل لديك مقاس أكبر؟', d: 1 },
      { en: 'Can I try on this jacket?', ar: 'هل يمكنني تجربة هذه السترة؟', d: 1 },
      { en: 'Of course, the room is there.', ar: 'بالطبع، غرفة القياس هناك.', d: 1 },
      { en: 'I will take two of them.', ar: 'سآخذ اثنين منهما.', d: 2 },
      { en: 'That is too expensive for me.', ar: 'هذا غالٍ علي جدا.', d: 1 },
      { en: 'This bag is not expensive.', ar: 'هذه الحقيبة ليست غالية.', d: 1 },
      { en: 'I bought some fruit yesterday.', ar: 'اشتريت فاكهة أمس.', d: 2 },
      { en: 'He paid in cash.', ar: 'دفع نقدا.', d: 2 },
      { en: 'Do you take credit cards?', ar: 'هل تقبلون البطاقات الائتمانية؟', d: 1 },
      { en: 'Yes, we take cards and cash.', ar: 'نعم، نقبل البطاقات والنقد.', d: 1 },
      { en: 'I am going to buy a new phone.', ar: 'سوف أشتري هاتفا جديدا.', d: 2 },
      { en: 'How much are these apples?', ar: 'بكم هذه التفاحات؟', d: 1 },
      { en: 'Can you give me a bag, please?', ar: 'هل تعطيني كيسا من فضلك؟', d: 1 },
      { en: 'Here is your change.', ar: 'هذا باقيك.', d: 1 },
      { en: 'The shop opens at nine.', ar: 'يفتح المحل في التاسعة.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'How much is {DEMO} {I}?', arTmpl: 'بكم {DEMO_ar} {I_ar}؟',
        slots: {
          I: SHOP_ITEMS,
          DEMO: (x) => [{ en: 'this', ar: x.I.g === 'f' ? 'هذه' : 'هذا' }],
        },
        tags: ['shopping', 'questions'], d: 1, limit: 8,
      },
      {
        tmpl: 'How much are these {PL}?', arTmpl: 'بكم هذه {PL_ar}؟',
        slots: {
          PL: [
            { en: 'oranges', ar: 'البرتقال' }, { en: 'tomatoes', ar: 'الطماطم' },
            { en: 'eggs', ar: 'البيض' }, { en: 'bananas', ar: 'الموز' },
            { en: 'socks', ar: 'الجوارب' }, { en: 'potatoes', ar: 'البطاطس' },
          ],
        },
        tags: ['shopping', 'questions'], d: 1, limit: 6,
      },
      {
        tmpl: 'Do you have {X}?', arTmpl: 'هل لديك {X_ar}؟',
        slots: {
          X: [
            { en: 'a black shirt', ar: 'قميصا أسود' }, { en: 'a small bag', ar: 'حقيبة صغيرة' },
            { en: 'warm gloves', ar: 'قفازات دافئة' }, { en: 'a birthday card', ar: 'بطاقة معايدة' },
            { en: 'fresh bread', ar: 'خبزا طازجا' }, { en: 'cold water', ar: 'ماء بارد' },
            { en: 'a white scarf', ar: 'وشاحا أبيض' }, { en: 'a yellow umbrella', ar: 'مظلا صفراء' },
          ],
        },
        tags: ['shopping', 'questions'], d: 1, limit: 8,
      },
      {
        tmpl: 'I am looking for {X}.', arTmpl: 'أبحث عن {X_ar}.',
        slots: {
          X: [
            { en: 'a black shirt', ar: 'قميص أسود' }, { en: 'a small bag', ar: 'حقيبة صغيرة' },
            { en: 'warm gloves', ar: 'قفازات دافئة' }, { en: 'a birthday card', ar: 'بطاقة معايدة' },
            { en: 'fresh bread', ar: 'خبز طازج' }, { en: 'cold water', ar: 'ماء بارد' },
            { en: 'a white scarf', ar: 'وشاح أبيض' }, { en: 'a yellow umbrella', ar: 'مظلة صفراء' },
          ],
        },
        tags: ['shopping'], d: 1, limit: 8,
      },
      {
        tmpl: 'I will take {Q}.', arTmpl: 'سآخذ {Q_ar}.',
        slots: {
          Q: [
            { en: 'this one', ar: 'هذا' }, { en: 'the blue one', ar: 'الأزرق' },
            { en: 'two boxes', ar: 'علبتين' }, { en: 'three of them', ar: 'ثلاثة منها' },
            { en: 'the large one', ar: 'الكبير' },
          ],
        },
        tags: ['shopping', 'future'], d: 2, limit: 5,
      },
    ],
    fills: [
      { en: 'How much is this shirt?', ar: 'بكم هذا القميص؟', word: 'much', hint: 'سعر' },
      { en: 'I am looking for a warm jacket.', ar: 'أبحث عن سترة دافئة.', word: 'looking', hint: 'فعل' },
      { en: 'Do you have a bigger size?', ar: 'هل لديك مقاس أكبر؟', word: 'size', hint: 'مقاس' },
      { en: 'That is too expensive for me.', ar: 'هذا غالٍ علي جدا.', word: 'expensive', hint: 'سعر' },
      { en: 'He paid in cash.', ar: 'دفع نقدا.', word: 'cash', hint: 'دفع' },
      { en: 'Here is your change.', ar: 'هذا باقيك.', word: 'change', hint: 'باقي' },
      { en: 'Can I try on this jacket?', ar: 'هل يمكنني تجربة هذه السترة؟', word: 'try', hint: 'قياس' },
      { en: 'Do you take credit cards?', ar: 'هل تقبلون البطاقات الائتمانية؟', word: 'cards', hint: 'دفع' },
    ],
    orders: [
      { en: 'How much is this shirt?', ar: 'بكم هذا القميص؟' },
      { en: 'I am looking for a gift for my mother.', ar: 'أبحث عن هدية لأمي.' },
      { en: 'Do you have a bigger size?', ar: 'هل لديك مقاس أكبر؟' },
      { en: 'This bag is too expensive.', ar: 'هذه الحقيبة غالية جدا.' },
      { en: 'I will take the blue one, please.', ar: 'سآخذ الأزرق من فضلك.' },
      { en: 'Can I pay by card, please?', ar: 'هل أدفع بالبطاقة من فضلك؟' },
    ],
    mc: [
      { question: 'You want to know the price. You ask:', options: ['How much is it?', 'Where is it?', 'When is it?', 'Who is it?'], answerIndex: 0, ar: 'تريد معرفة السعر، فتسأل:' },
      { question: '"Do you have a bigger size?" — "size" means:', options: ['مقاس', 'لون', 'سعر', 'نوع'], answerIndex: 0, ar: 'ما معنى size في السؤال؟' },
      { question: 'The shirt costs ten dollars. It is:', options: ['ten dollars', 'twenty dollars', 'five dollars', 'free'], answerIndex: 0, ar: 'القميص بعشرة دولارات، أي إن سعره:' },
      { question: 'You want to pay with a card. You say:', options: ['Can I pay by card?', 'Can I eat it?', 'Where is the doctor?', 'Is it raining?'], answerIndex: 0, ar: 'تريد الدفع بالبطاقة، فتقول:' },
    ],
  },

  /* ================= lesson 40 — At a Café ================= */
  {
    num: 40,
    tags: ['cafe', 'food'],
    objectives: [
      'Order drinks and snacks politely',
      'Answer for here or to go',
      'Talk about a visit to a café',
    ],
    grammar: {
      explanation: 'At a café, the waiter may ask "What would you like?" — answer with "I would like a coffee, please" or "A tea, please". "Would like" is the polite way to order. The waiter may also ask "For here or to go?" — answer "For here, please" or "To go, please". To see the choices, ask "Can I have the menu, please?". To pay, say "The bill, please".',
      explanationAr: 'في المقهى قد يسألك النادل What would you like؟ فأجب I would like a coffee, please أو A tea, please. صيغة would like هي الطريقة المهذبة للطلب. وقد يسألك النادل For here or to go؟ فأجب For here, please أو To go, please. ولرؤية الخيارات اسأل Can I have the menu, please؟ وللدفع قل The bill, please.',
      examples: [
        { en: 'A coffee, please.', ar: 'قهوة من فضلك.' },
        { en: 'For here or to go?', ar: 'هنا أم للخارج؟' },
        { en: 'We sat near the window.', ar: 'جلسنا قرب النافذة.' },
      ],
    },
    vocabulary: [
      { word: 'café', meaningAr: 'مقهى', example: 'This café is small but nice.', ipa: 'kæfeɪ' },
      { word: 'coffee', meaningAr: 'قهوة', example: 'A coffee, please.' },
      { word: 'tea', meaningAr: 'شاي', example: 'She likes tea with milk.' },
      { word: 'menu', meaningAr: 'قائمة', example: 'Can I have the menu, please?' },
      { word: 'order', meaningAr: 'يطلب', example: 'I will order a piece of cake.' },
      { word: 'juice', meaningAr: 'عصير', example: 'Do you have fresh juice?' },
      { word: 'cake', meaningAr: 'كعك', example: 'The cake was delicious.' },
      { word: 'for here', meaningAr: 'هنا (للشرب في المكان)', example: 'For here or to go?' },
      { word: 'to go', meaningAr: 'للذهاب', example: 'Two coffees to go, please.' },
      { word: 'sit', meaningAr: 'يجلس', example: 'We sat near the window.' },
      { word: 'delicious', meaningAr: 'لذيذ', example: 'The cake is delicious.' },
      { word: 'bill', meaningAr: 'الحساب', example: 'The bill, please.' },
    ],
    scenario: [
      { en: 'A coffee, please.', ar: 'قهوة من فضلك.', d: 1 },
      { en: 'What would you like?', ar: 'ماذا تريد؟', d: 1 },
      { en: 'I would like a glass of tea.', ar: 'أريد كوبا من الشاي.', d: 1 },
      { en: 'For here or to go?', ar: 'هنا أم للخارج؟', d: 1 },
      { en: 'To go, please.', ar: 'للخارج من فضلك.', d: 1 },
      { en: 'Can I have the menu, please?', ar: 'هل يمكنني رؤية القائمة من فضلك؟', d: 1 },
      { en: 'The coffee is very hot.', ar: 'القهوة ساخنة جدا.', d: 1 },
      { en: 'This café is small but nice.', ar: 'هذا المقهى صغير لكنه جميل.', d: 1 },
      { en: 'We sat near the window.', ar: 'جلسنا قرب النافذة.', d: 2 },
      { en: 'He drank his coffee quickly.', ar: 'شرب قهوته بسرعة.', d: 2 },
      { en: 'I will order a piece of cake.', ar: 'سأطلب قطعة كعك.', d: 2 },
      { en: 'Do you have fresh juice?', ar: 'هل لديك عصير طازج؟', d: 1 },
      { en: 'The service here is good.', ar: 'الخدمة هنا جيدة.', d: 2 },
      { en: 'Two teas, please.', ar: 'شايين من فضلك.', d: 1 },
      { en: 'I do not drink coffee at night.', ar: 'لا أشرب القهوة في الليل.', d: 2 },
      { en: 'We are going to meet at the café.', ar: 'سوف نتقابل في المقهى.', d: 2 },
      { en: 'Thank you, it was delicious.', ar: 'شكرا، كان لذيذا.', d: 2 },
      { en: 'The bill, please.', ar: 'الحساب من فضلك.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'I would like {D}, please.', arTmpl: 'أريد {D_ar} من فضلك.',
        slots: {
          D: [
            { en: 'a cup of coffee', ar: 'فنجان قهوة' }, { en: 'a cup of tea', ar: 'فنجان شاي' },
            { en: 'a glass of water', ar: 'كوب ماء' }, { en: 'an orange juice', ar: 'عصير برتقال' },
            { en: 'a piece of cake', ar: 'قطعة كعك' }, { en: 'a cheese sandwich', ar: 'سندويش بالجبن' },
            { en: 'hot chocolate', ar: 'شوكولاتة ساخنة' }, { en: 'a cappuccino', ar: 'كابتشينو' },
          ],
        },
        tags: ['cafe', 'requests'], d: 1, limit: 8,
      },
      {
        tmpl: '{S} would like {D}.', arTmpl: '{S_ar} {V_ar} {D_ar}.',
        slots: {
          S: B.PRONOUNS.slice(2),
          V: (x) => [{ en: 'would like', ar: B.arPresent('want', x.S.agr) }],
          D: [
            { en: 'a cup of coffee', ar: 'فنجان قهوة' }, { en: 'a cup of tea', ar: 'فنجان شاي' },
            { en: 'a glass of water', ar: 'كوب ماء' }, { en: 'an orange juice', ar: 'عصير برتقال' },
            { en: 'a piece of cake', ar: 'قطعة كعك' }, { en: 'a cheese sandwich', ar: 'سندويش بالجبن' },
            { en: 'hot chocolate', ar: 'شوكولاتة ساخنة' }, { en: 'a cappuccino', ar: 'كابتشينو' },
          ],
        },
        tags: ['cafe', 'present-simple'], d: 1, limit: 24,
      },
      {
        tmpl: 'Can I have {D}, please?', arTmpl: 'هل أعطيتني {D_ar} من فضلك؟',
        slots: {
          D: [
            { en: 'a cup of coffee', ar: 'فنجان قهوة' }, { en: 'a cup of tea', ar: 'فنجان شاي' },
            { en: 'a glass of water', ar: 'كوب ماء' }, { en: 'an orange juice', ar: 'عصير برتقال' },
            { en: 'a piece of cake', ar: 'قطعة كعك' }, { en: 'a cheese sandwich', ar: 'سندويش بالجبن' },
            { en: 'hot chocolate', ar: 'شوكولاتة ساخنة' }, { en: 'a cappuccino', ar: 'كابتشينو' },
          ],
        },
        tags: ['cafe', 'requests'], d: 1, limit: 8,
      },
    ],
    fills: [
      { en: 'A coffee, please.', ar: 'قهوة من فضلك.', word: 'coffee', hint: 'مشروب' },
      { en: 'What would you like?', ar: 'ماذا تريد؟', word: 'would', hint: 'طلب مهذب' },
      { en: 'For here or to go?', ar: 'هنا أم للخارج؟', word: 'here', hint: 'مكان' },
      { en: 'Can I have the menu, please?', ar: 'هل يمكنني رؤية القائمة من فضلك؟', word: 'menu', hint: 'قائمة' },
      { en: 'The coffee is very hot.', ar: 'القهوة ساخنة جدا.', word: 'hot', hint: 'حرارة' },
      { en: 'Do you have fresh juice?', ar: 'هل لديك عصير طازج؟', word: 'juice', hint: 'مشروب' },
      { en: 'I will order a piece of cake.', ar: 'سأطلب قطعة كعك.', word: 'order', hint: 'فعل' },
      { en: 'Two teas, please.', ar: 'شايين من فضلك.', word: 'teas', hint: 'جمع' },
    ],
    orders: [
      { en: 'One coffee to go, please.', ar: 'قهوة واحدة للخارج من فضلك.' },
      { en: 'What would you like to drink?', ar: 'ماذا تريد أن تشرب؟' },
      { en: 'I would like a piece of cake.', ar: 'أريد قطعة كعك.' },
      { en: 'We sat near the window.', ar: 'جلسنا قرب النافذة.' },
      { en: 'She does not drink coffee at all.', ar: 'هي لا تشرب القهوة أبدا.' },
      { en: 'The bill for our table, please.', ar: 'حساب طاولتنا من فضلك.' },
    ],
    mc: [
      { question: 'The waiter asks "For here or to go?" He wants to know:', options: ['eat here or take it away', 'your name', 'your address', 'the time'], answerIndex: 0, ar: 'سألك النادل For here or to go؟ يريد أن يعرف:' },
      { question: 'You want tea. You say:', options: ['A tea, please.', 'A ticket, please.', 'A room, please.', 'A taxi, please.'], answerIndex: 0, ar: 'تريد شايا، فتقول:' },
      { question: '"I would like a coffee" is:', options: ['a polite request', 'a goodbye', 'a question', 'an apology'], answerIndex: 0, ar: 'جملة I would like a coffee هي:' },
      { question: 'The cake was delicious. It tasted:', options: ['very good', 'very bad', 'very cold', 'very cheap'], answerIndex: 0, ar: 'الكعك كان لذيذا، أي طعمه:' },
    ],
  },

  /* ================= lesson 41 — At a Fast-Food Restaurant ================= */
  {
    num: 41,
    tags: ['restaurant', 'food'],
    objectives: [
      'Order burgers, meals and drinks',
      'Choose to eat in or take away',
      'Ask about the menu and the price',
    ],
    grammar: {
      explanation: 'At a fast-food restaurant, order with "I would like a burger" or "A meal with fries, please". The cashier may ask "Do you want to eat in or take away?" — answer "To eat in, please" or "To take away, please". "A meal" usually means a burger, fries and a drink together. If something is wrong, say it politely: "Excuse me, the burger is cold".',
      explanationAr: 'في مطعم الوجبات السريعة اطلب بـ I would like a burger أو A meal with fries, please. وقد يسألك الموظف Do you want to eat in or take away؟ فأجب To eat in, please أو To take away, please. والوجبة meal تعني عادة برجرا وبطاطس ومشروبا معا. وإذا كان هناك خطأ فقوله بأدب: Excuse me, the burger is cold.',
      examples: [
        { en: 'I would like a big burger.', ar: 'أريد برجرا كبيرا.' },
        { en: 'Do you want to eat in or take away?', ar: 'هل تريد الأكل هنا أم تأخذ الطعام؟' },
        { en: 'We ordered two large pizzas.', ar: 'طلبنا بيتزتين كبيرتين.' },
      ],
    },
    vocabulary: [
      { word: 'fast food', meaningAr: 'وجبات سريعة', example: 'I like fast food.', ipa: 'fæst fuːd' },
      { word: 'burger', meaningAr: 'برجر', example: 'I would like a big burger.' },
      { word: 'fries', meaningAr: 'بطاطس مقلية', example: 'A meal with fries, please.' },
      { word: 'meal', meaningAr: 'وجبة', example: 'The meal is eight dollars.' },
      { word: 'chicken', meaningAr: 'دجاج', example: 'Do you have chicken burgers?' },
      { word: 'pizza', meaningAr: 'بيتزا', example: 'We ordered two pizzas.' },
      { word: 'take away', meaningAr: 'يأخذ الطعام معه', example: 'Is that to eat in or take away?' },
      { word: 'cold', meaningAr: 'بارد', example: 'The burger is cold.' },
      { word: 'tray', meaningAr: 'صينية', example: 'Please bring a tray.' },
      { word: 'napkin', meaningAr: 'منديل', example: 'Can I have a napkin, please?' },
      { word: 'drink', meaningAr: 'مشروب / يشرب', example: 'Do you want a drink?' },
      { word: 'same', meaningAr: 'نفسه', example: 'I will have the same, please.' },
    ],
    scenario: [
      { en: 'I would like a big burger.', ar: 'أريد برجرا كبيرا.', d: 1 },
      { en: 'Can I see the menu, please?', ar: 'هل يمكنني رؤية القائمة من فضلك؟', d: 1 },
      { en: 'Here is the menu, sir.', ar: 'هذه هي القائمة يا سيدي.', d: 1 },
      { en: 'A meal with fries, please.', ar: 'وجبة مع بطاطس مقلية من فضلك.', d: 1 },
      { en: 'Do you want to eat in or take away?', ar: 'هل تريد الأكل هنا أم تأخذ الطعام؟', d: 1 },
      { en: 'To take away, please.', ar: 'لأخذها معي من فضلك.', d: 1 },
      { en: 'The burger is cold.', ar: 'البرجر بارد.', d: 1 },
      { en: 'This table is not clean.', ar: 'هذه الطاولة ليست نظيفة.', d: 1 },
      { en: 'We ordered two large pizzas.', ar: 'طلبنا بيتزتين كبيرتين.', d: 2 },
      { en: 'The children ate their meals quickly.', ar: 'أكل الأطفال وجباتهم بسرعة.', d: 2 },
      { en: 'I will have a small meal.', ar: 'سأتناول وجبة صغيرة.', d: 2 },
      { en: 'How much is the meal?', ar: 'بكم الوجبة؟', d: 1 },
      { en: 'It is eight dollars.', ar: 'إنها بثمانية دولارات.', d: 1 },
      { en: 'Do you have chicken burgers?', ar: 'هل لديكم برجر دجاج؟', d: 1 },
      { en: 'I am going to try the new sandwich.', ar: 'سوف أجرب السندويش الجديد.', d: 2 },
      { en: 'Please sit at that table.', ar: 'اجلسوا على تلك الطاولة من فضلك.', d: 1 },
      { en: 'Enjoy your meal!', ar: 'شهية طيبة!', d: 1 },
      { en: 'Can I have a napkin, please?', ar: 'هل تعطيني منديلا من فضلك؟', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'I would like {F}.', arTmpl: 'أريد {F_ar}.',
        slots: {
          F: [
            { en: 'a cheese burger', ar: 'برجر بالجبن' }, { en: 'a chicken burger', ar: 'برجر دجاج' },
            { en: 'a beef burger', ar: 'برجر لحم' }, { en: 'a small meal', ar: 'وجبة صغيرة' },
            { en: 'a large meal', ar: 'وجبة كبيرة' }, { en: 'large fries', ar: 'بطاطس مقلية كبيرة' },
            { en: 'two hot dogs', ar: 'هوت دوغ' }, { en: 'six chicken nuggets', ar: 'ست قطع دجاج' },
          ],
        },
        tags: ['restaurant', 'requests'], d: 1, limit: 8,
      },
      {
        tmpl: 'Can I have {F}, please?', arTmpl: 'هل تعطيني {F_ar} من فضلك؟',
        slots: {
          F: [
            { en: 'a cheese burger', ar: 'برجر بالجبن' }, { en: 'a chicken burger', ar: 'برجر دجاج' },
            { en: 'a beef burger', ar: 'برجر لحم' }, { en: 'a small meal', ar: 'وجبة صغيرة' },
            { en: 'a large meal', ar: 'وجبة كبيرة' }, { en: 'large fries', ar: 'بطاطس مقلية كبيرة' },
          ],
        },
        tags: ['restaurant', 'requests'], d: 1, limit: 6,
      },
      {
        tmpl: '{S} {V} {F2}.', arTmpl: '{S_ar} {V_ar} {F2_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPast('order'), ar: B.arPast('order', x.S.agr) }],
          F2: [
            { en: 'two pizzas', ar: 'بيتزتين' }, { en: 'a family meal', ar: 'وجبة عائلية' },
            { en: 'three burgers', ar: 'ثلاثة برغر' }, { en: 'a chicken meal', ar: 'وجبة دجاج' },
          ],
        },
        tags: ['restaurant', 'past-simple'], d: 2, limit: 16,
      },
      {
        tmpl: 'Do you have {FT}?', arTmpl: 'هل لديكم {FT_ar}؟',
        slots: {
          FT: [
            { en: 'fish burgers', ar: 'برجر السمك' }, { en: 'vegetarian meals', ar: 'وجبات نباتية' },
            { en: 'soft drinks', ar: 'مشروبات غازية' }, { en: 'ice cream', ar: 'آيس كريم' },
          ],
        },
        tags: ['restaurant', 'questions'], d: 1, limit: 4,
      },
    ],
    fills: [
      { en: 'I would like a big burger.', ar: 'أريد برجرا كبيرا.', word: 'burger', hint: 'طعام' },
      { en: 'A meal with fries, please.', ar: 'وجبة مع بطاطس مقلية من فضلك.', word: 'fries', hint: 'طعام' },
      { en: 'The burger is cold.', ar: 'البرجر بارد.', word: 'cold', hint: 'حرارة' },
      { en: 'We ordered two large pizzas.', ar: 'طلبنا بيتزتين كبيرتين.', word: 'ordered', hint: 'فعل ماض' },
      { en: 'How much is the meal?', ar: 'بكم الوجبة؟', word: 'meal', hint: 'وجبة' },
      { en: 'Do you have chicken burgers?', ar: 'هل لديكم برجر دجاج؟', word: 'chicken', hint: 'طعام' },
      { en: 'Enjoy your meal!', ar: 'شهية طيبة!', word: 'Enjoy', hint: 'تمني' },
      { en: 'I am going to try the new sandwich.', ar: 'سوف أجرب السندويش الجديد.', word: 'sandwich', hint: 'طعام' },
    ],
    orders: [
      { en: 'I would like a big burger.', ar: 'أريد برجرا كبيرا.' },
      { en: 'Do you want to eat in or take away?', ar: 'هل تريد الأكل هنا أم تأخذ الطعام؟' },
      { en: 'The children ate their meals quickly.', ar: 'أكل الأطفال وجباتهم بسرعة.' },
      { en: 'Please bring us the menu again.', ar: 'أحضر لنا القائمة مرة أخرى من فضلك.' },
      { en: 'How much is the meal?', ar: 'بكم الوجبة؟' },
      { en: 'The fries are cold, sorry.', ar: 'البطاطس المقلية باردة، آسف.' },
    ],
    mc: [
      { question: '"Eat in or take away?" means:', options: ['كل هنا أو تأخذ الطعام', 'ادفع الآن أو لاحقا', 'اجلس أو قف', 'انتظر أو اذهب'], answerIndex: 0, ar: 'ما معنى Eat in or take away؟' },
      { question: 'You want to see the food list. You ask for:', options: ['the menu', 'the bill', 'the window', 'the ticket'], answerIndex: 0, ar: 'تريد رؤية قائمة الطعام، فتطلب:' },
      { question: 'A burger, fries and a drink together are:', options: ['a meal', 'a ticket', 'a key', 'a shower'], answerIndex: 0, ar: 'برجر وبطاطس ومشروب معا هي:' },
      { question: 'The burger is cold. This is:', options: ['a problem', 'great news', 'a question', 'a greeting'], answerIndex: 0, ar: 'البرجر بارد، وهذا:' },
    ],
  },

  /* ================= lesson 42 — Public Transportation ================= */
  {
    num: 42,
    tags: ['transport', 'travel'],
    objectives: [
      'Find stops, stations and tickets',
      'Ask which bus or train to take',
      'Talk about getting on and off',
    ],
    grammar: {
      explanation: 'For public transportation you need the bus stop, the metro station and a ticket. Ask "Which bus goes to the center?" and "Where do I get off?". Use get on to enter the bus and get off to leave it: "You get off at the third stop". The future with will helps you talk about travel: "We will take the train tomorrow".',
      explanationAr: 'للمواصلات العامة تحتاج موقف الحافلة ومحطة المترو وتذكرة. اسأل Which bus goes to the center؟ وWhere do I get off؟ واستخدم get on للركوب وget off للنزول: You get off at the third stop. ويساعدك المستقبل مع will للحديث عن التنقل: We will take the train tomorrow.',
      examples: [
        { en: 'Where is the bus stop?', ar: 'أين موقف الحافلات؟' },
        { en: 'You get off at the third stop.', ar: 'تنزل عند الموقف الثالث.' },
        { en: 'We will take the train tomorrow.', ar: 'سنركب القطار غدا.' },
      ],
    },
    vocabulary: [
      { word: 'bus stop', meaningAr: 'موقف الحافلة', example: 'Where is the bus stop?', ipa: 'bʌs stɒp' },
      { word: 'bus', meaningAr: 'حافلة', example: 'The bus was full.' },
      { word: 'metro', meaningAr: 'مترو', example: 'The metro is fast and cheap.' },
      { word: 'train', meaningAr: 'قطار', example: 'The next train leaves at nine.' },
      { word: 'ticket', meaningAr: 'تذكرة', example: 'A ticket to the airport, please.' },
      { word: 'stop', meaningAr: 'موقف / محطة', example: 'You get off at the third stop.' },
      { word: 'get on', meaningAr: 'يركب', example: 'She got on the wrong bus.' },
      { word: 'get off', meaningAr: 'ينزل', example: 'Where do I get off?' },
      { word: 'leave', meaningAr: 'يغادر', example: 'The bus leaves in five minutes.' },
      { word: 'full', meaningAr: 'ممتلئ', example: 'The bus was full this morning.' },
      { word: 'pass', meaningAr: 'تذكرة شهرية', example: 'I am going to buy a monthly pass.' },
      { word: 'wait', meaningAr: 'ينتظر', example: 'We waited twenty minutes.' },
    ],
    scenario: [
      { en: 'Where is the bus stop?', ar: 'أين موقف الحافلات؟', d: 1 },
      { en: 'The bus stop is near the bank.', ar: 'موقف الحافلات قرب البنك.', d: 1 },
      { en: 'Which bus goes to the center?', ar: 'أي حافلة تذهب إلى الوسط؟', d: 1 },
      { en: 'The number five bus goes there.', ar: 'الحافلة رقم خمسة تذهب إلى هناك.', d: 2 },
      { en: 'A ticket to the airport, please.', ar: 'تذكرة إلى المطار من فضلك.', d: 1 },
      { en: 'The ticket costs two dollars.', ar: 'التذكرة بدولارين.', d: 1 },
      { en: 'Where do I get off?', ar: 'أين أنزل؟', d: 1 },
      { en: 'You get off at the third stop.', ar: 'تنزل عند الموقف الثالث.', d: 1 },
      { en: 'The next bus arrives in five minutes.', ar: 'الحافلة القادمة تصل بعد خمس دقائق.', d: 1 },
      { en: 'The metro is fast and cheap.', ar: 'المترو سريع ورخيص.', d: 1 },
      { en: 'We waited for the bus for twenty minutes.', ar: 'انتظرنا الحافلة عشرين دقيقة.', d: 2 },
      { en: 'The bus was full this morning.', ar: 'كانت الحافلة ممتلئة هذا الصباح.', d: 2 },
      { en: 'I do not take the metro often.', ar: 'لا أركب المترو كثيرا.', d: 2 },
      { en: 'We will take the train tomorrow.', ar: 'سنركب القطار غدا.', d: 2 },
      { en: 'Do not run for the bus.', ar: 'لا تركض خلف الحافلة.', d: 1 },
      { en: 'I am going to buy a monthly pass.', ar: 'سوف أشتري تذكرة شهرية.', d: 2 },
      { en: 'The buses do not run at night.', ar: 'الحافلات لا تسير في الليل.', d: 2 },
      { en: 'She got on the wrong bus.', ar: 'ركبت الحافلة الخطأ.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Where is the nearest {ST}?', arTmpl: 'أين أقرب {ST_ar}؟',
        slots: {
          ST: [
            { en: 'bus stop', ar: 'موقف حافلات' }, { en: 'metro station', ar: 'محطة مترو' },
            { en: 'train station', ar: 'محطة قطار' }, { en: 'taxi rank', ar: 'موقف سيارات أجرة' },
            { en: 'tram stop', ar: 'موقف ترام' },
          ],
        },
        tags: ['transport', 'questions'], d: 1, limit: 5,
      },
      {
        tmpl: 'The next {T1} leaves at {TIME}.', arTmpl: 'يغادر {T1_ar} القادم الساعة {TIME_ar}.',
        slots: {
          T1: [
            { en: 'train', ar: 'القطار' }, { en: 'bus', ar: 'الحافلة' },
            { en: 'metro', ar: 'المترو' },
          ],
          TIME: [
            { en: 'nine', ar: 'التاسعة' }, { en: 'seven thirty', ar: 'السابعة والنصف' },
            { en: 'ten fifteen', ar: 'العاشرة والربع' }, { en: 'twelve', ar: 'الثانية عشرة' },
            { en: 'five', ar: 'الخامسة' }, { en: 'eight thirty', ar: 'الثامنة والنصف' },
          ],
        },
        tags: ['transport', 'time'], d: 1, limit: 18,
      },
      {
        tmpl: 'I take the {TR} to work every day.', arTmpl: 'أركب {TR_ar} إلى العمل كل يوم.',
        slots: {
          TR: [
            { en: 'bus', ar: 'الحافلة' }, { en: 'metro', ar: 'المترو' },
            { en: 'train', ar: 'القطار' },
          ],
        },
        tags: ['transport', 'present-simple'], d: 1, limit: 3,
      },
      {
        tmpl: 'Do I have to change {TC}?', arTmpl: 'هل علي أن أبدل {TC_ar}؟',
        slots: {
          TC: [
            { en: 'buses', ar: 'الحافلات' }, { en: 'trains', ar: 'القطارات' },
            { en: 'lines', ar: 'الخطوط' },
          ],
        },
        tags: ['transport', 'questions'], d: 2, limit: 3,
      },
      {
        tmpl: 'How much is a ticket to {C}?', arTmpl: 'بكم تذكرة إلى {C_ar}؟',
        slots: {
          C: [
            { en: 'the airport', ar: 'المطار' }, { en: 'the city center', ar: 'وسط المدينة' },
            { en: 'the main station', ar: 'المحطة الرئيسة' }, { en: 'the university', ar: 'الجامعة' },
            { en: 'the stadium', ar: 'الملعب' }, { en: 'the harbor', ar: 'الميناء' },
          ],
        },
        tags: ['transport', 'questions'], d: 1, limit: 6,
      },
    ],
    fills: [
      { en: 'Where is the bus stop?', ar: 'أين موقف الحافلات؟', word: 'bus', hint: 'مواصلات' },
      { en: 'The metro is fast and cheap.', ar: 'المترو سريع ورخيص.', word: 'metro', hint: 'مواصلات' },
      { en: 'A ticket to the airport, please.', ar: 'تذكرة إلى المطار من فضلك.', word: 'ticket', hint: 'سفر' },
      { en: 'Where do I get off?', ar: 'أين أنزل؟', word: 'off', hint: 'نزول' },
      { en: 'The next bus arrives in five minutes.', ar: 'الحافلة القادمة تصل بعد خمس دقائق.', word: 'arrives', hint: 'فعل' },
      { en: 'The bus was full this morning.', ar: 'كانت الحافلة ممتلئة هذا الصباح.', word: 'full', hint: 'حالة' },
      { en: 'We will take the train tomorrow.', ar: 'سنركب القطار غدا.', word: 'train', hint: 'مواصلات' },
      { en: 'She got on the wrong bus.', ar: 'ركبت الحافلة الخطأ.', word: 'wrong', hint: 'خطأ' },
    ],
    orders: [
      { en: 'Where is the bus stop?', ar: 'أين موقف الحافلات؟' },
      { en: 'Which bus goes to the center?', ar: 'أي حافلة تذهب إلى الوسط؟' },
      { en: 'You get off at the third stop.', ar: 'تنزل عند الموقف الثالث.' },
      { en: 'We waited for the metro for ten minutes.', ar: 'انتظرنا المترو عشر دقائق.' },
      { en: 'I do not take the metro often.', ar: 'لا أركب المترو كثيرا.' },
      { en: 'A ticket to the airport, please.', ar: 'تذكرة إلى المطار من فضلك.' },
    ],
    mc: [
      { question: 'You wait for the bus at:', options: ['the bus stop', 'the kitchen', 'the bedroom', 'the garden'], answerIndex: 0, ar: 'تنتظر الحافلة في:' },
      { question: '"Get off" means:', options: ['تنزل من المركبة', 'تركب المركبة', 'تشتري تذكرة', 'تقود السيارة'], answerIndex: 0, ar: 'ما معنى Get off؟' },
      { question: 'The next train leaves at nine. "Leaves" means:', options: ['يغادر', 'يصل', 'يتوقف', 'يعود'], answerIndex: 0, ar: 'القطار القادم يغادر في التاسعة، أي أن leaves تعني:' },
      { question: 'A monthly pass is good for:', options: ['thirty days', 'one day', 'one trip', 'one hour'], answerIndex: 0, ar: 'التذكرة الشهرية صالحة لمدة:' },
    ],
  },

  /* ================= lesson 43 — Taking a Taxi ================= */
  {
    num: 43,
    tags: ['taxi', 'travel'],
    objectives: [
      'Tell the driver your destination',
      'Ask about the fare and pay',
      'Give the driver simple instructions',
    ],
    grammar: {
      explanation: 'In a taxi, say your destination first: "To the airport, please" or "Take me to this address, please". Ask the price with "How much is the fare?". Useful instructions are "Please drive slowly", "Stop here, please" and "Keep the change". Past simple is common in taxi talk: "We took a taxi to the hospital yesterday".',
      explanationAr: 'في التاكسي قل وجهتك أولا: To the airport, please أو Take me to this address, please. واسأل عن السعر بـ How much is the fare؟ ومن التعليمات المفيدة Please drive slowly وStop here, please وKeep the change. والماضي البسيط شائع في حديث التاكسي: We took a taxi to the hospital yesterday.',
      examples: [
        { en: 'To the airport, please.', ar: 'إلى المطار من فضلك.' },
        { en: 'How much is the fare?', ar: 'بكم الأجرة؟' },
        { en: 'Keep the change, thank you.', ar: 'احتفظ بالباقي، شكرا لك.' },
      ],
    },
    vocabulary: [
      { word: 'taxi', meaningAr: 'تاكسي / سيارة أجرة', example: 'We took a taxi yesterday.', ipa: 'tæksi' },
      { word: 'driver', meaningAr: 'سائق', example: 'The driver was friendly.' },
      { word: 'fare', meaningAr: 'أجرة', example: 'How much is the fare?' },
      { word: 'airport', meaningAr: 'مطار', example: 'To the airport, please.' },
      { word: 'address', meaningAr: 'عنوان', example: 'The driver knew the address.' },
      { word: 'trunk', meaningAr: 'صندوق السيارة', example: 'My bags are in the trunk.' },
      { word: 'traffic', meaningAr: 'زحام / مرور', example: 'The traffic is heavy today.' },
      { word: 'meter', meaningAr: 'عداد', example: 'Please turn on the meter.' },
      { word: 'seat', meaningAr: 'مقعد', example: 'Is this seat free?' },
      { word: 'ride', meaningAr: 'رحلة / مشوار', example: 'The ride takes ten minutes.' },
      { word: 'safe', meaningAr: 'آمن', example: 'Have a safe trip.' },
      { word: 'keep', meaningAr: 'يحتفظ', example: 'Keep the change, please.' },
    ],
    scenario: [
      { en: 'Take me to the airport, please.', ar: 'خذني إلى المطار من فضلك.', d: 1 },
      { en: 'Get in, please.', ar: 'تفضل بالدخول.', d: 1 },
      { en: 'How much is the fare to the station?', ar: 'بكم الأجرة إلى المحطة؟', d: 1 },
      { en: 'It is about ten dollars.', ar: 'نحو عشرة دولارات.', d: 1 },
      { en: 'Please drive more slowly.', ar: 'اقط ببطء أكثر من فضلك.', d: 1 },
      { en: 'Stop here, please.', ar: 'توقف هنا من فضلك.', d: 1 },
      { en: 'It is not far, about ten minutes.', ar: 'ليس بعيدا، نحو عشر دقائق.', d: 1 },
      { en: 'Can you wait for me here?', ar: 'هل يمكنك انتظاري هنا؟', d: 1 },
      { en: 'Sure, I will wait for you.', ar: 'بالتأكيد، سأنتظرك.', d: 1 },
      { en: 'We took a taxi to the hospital yesterday.', ar: 'أخذنا سيارة أجرة إلى المستشفى أمس.', d: 2 },
      { en: 'The driver did not know the address.', ar: 'السائق لم يعرف العنوان.', d: 2 },
      { en: 'Keep the change, thank you.', ar: 'احتفظ بالباقي، شكرا لك.', d: 1 },
      { en: 'Which way is faster?', ar: 'أي طريق أسرع؟', d: 1 },
      { en: 'My bags are in the trunk.', ar: 'حقائبي في صندوق السيارة.', d: 1 },
      { en: 'The traffic is heavy today.', ar: 'الزحام شديد اليوم.', d: 2 },
      { en: 'Please turn on the meter.', ar: 'شغل العداد من فضلك.', d: 1 },
      { en: 'Have a safe trip.', ar: 'أتمنى لك رحلة آمنة.', d: 1 },
      { en: 'To the hotel, please.', ar: 'إلى الفندق من فضلك.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'To {PL}, please.', arTmpl: 'إلى {PL_ar} من فضلك.',
        slots: {
          PL: [
            { en: 'the airport', ar: 'المطار' }, { en: 'the main station', ar: 'المحطة الرئيسة' },
            { en: 'the city center', ar: 'وسط المدينة' }, { en: 'the Grand Hotel', ar: 'فندق جراند' },
            { en: 'the university', ar: 'الجامعة' }, { en: 'the museum', ar: 'المتحف' },
          ],
        },
        tags: ['taxi', 'requests'], d: 1, limit: 6,
      },
      {
        tmpl: 'How much is the fare to {PL}?', arTmpl: 'بكم الأجرة إلى {PL_ar}؟',
        slots: {
          PL: [
            { en: 'the airport', ar: 'المطار' }, { en: 'the main station', ar: 'المحطة الرئيسة' },
            { en: 'the city center', ar: 'وسط المدينة' }, { en: 'the Grand Hotel', ar: 'فندق جراند' },
            { en: 'the university', ar: 'الجامعة' }, { en: 'the museum', ar: 'المتحف' },
          ],
        },
        tags: ['taxi', 'questions'], d: 1, limit: 6,
      },
      {
        tmpl: 'Please {V}.', arTmpl: '{V_ar} من فضلك.',
        slots: {
          V: [
            { en: 'drive slowly', ar: 'اقط ببطء' }, { en: 'stop here', ar: 'توقف هنا' },
            { en: 'wait here', ar: 'انتظر هنا' }, { en: 'take this street', ar: 'خذ هذا الشارع' },
            { en: 'open the trunk', ar: 'افتح صندوق السيارة' }, { en: 'follow this street', ar: 'اتبع هذا الشارع' },
          ],
        },
        tags: ['taxi', 'imperative'], d: 1, limit: 6,
      },
      {
        tmpl: '{S} {V} a taxi to {PL2} {T}.', arTmpl: '{S_ar} {V_ar} سيارة أجرة إلى {PL2_ar} {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPast('take'), ar: B.arPast('take', x.S.agr) }],
          PL2: [
            { en: 'the airport', ar: 'المطار' }, { en: 'the train station', ar: 'محطة القطار' },
            { en: 'the old city', ar: 'المدينة القديمة' }, { en: 'the beach', ar: 'الشاطئ' },
          ],
          T: [
            { en: 'yesterday', ar: 'أمس' }, { en: 'last night', ar: 'الليلة الماضية' },
            { en: 'this morning', ar: 'هذا الصباح' }, { en: 'on Friday', ar: 'يوم الجمعة' },
          ],
        },
        tags: ['taxi', 'past-simple'], d: 2, limit: 24,
      },
    ],
    fills: [
      { en: 'Take me to the airport, please.', ar: 'خذني إلى المطار من فضلك.', word: 'airport', hint: 'مكان' },
      { en: 'How much is the fare to the station?', ar: 'بكم الأجرة إلى المحطة؟', word: 'fare', hint: 'أجرة' },
      { en: 'Stop here, please.', ar: 'توقف هنا من فضلك.', word: 'Stop', hint: 'فعل' },
      { en: 'The driver did not know the address.', ar: 'السائق لم يعرف العنوان.', word: 'driver', hint: 'شخص' },
      { en: 'Keep the change, thank you.', ar: 'احتفظ بالباقي، شكرا لك.', word: 'change', hint: 'باقي' },
      { en: 'My bags are in the trunk.', ar: 'حقائبي في صندوق السيارة.', word: 'trunk', hint: 'سيارة' },
      { en: 'The traffic is heavy today.', ar: 'الزحام شديد اليوم.', word: 'traffic', hint: 'شارع' },
      { en: 'Please turn on the meter.', ar: 'شغل العداد من فضلك.', word: 'meter', hint: 'تاكسي' },
    ],
    orders: [
      { en: 'Take me to the airport, please.', ar: 'خذني إلى المطار من فضلك.' },
      { en: 'How much is the fare to the station?', ar: 'بكم الأجرة إلى المحطة؟' },
      { en: 'The driver did not know the address.', ar: 'السائق لم يعرف العنوان.' },
      { en: 'Please drive more slowly.', ar: 'اقط ببطء أكثر من فضلك.' },
      { en: 'Keep the change, thank you.', ar: 'احتفظ بالباقي، شكرا لك.' },
      { en: 'Our bags are still in the trunk.', ar: 'حقائبنا ما زالت في صندوق السيارة.' },
    ],
    mc: [
      { question: 'You enter a taxi. First you say:', options: ['To the airport, please.', 'How old are you?', 'What is this?', 'Good night.'], answerIndex: 0, ar: 'ركبت التاكسي، فتقول أولا:' },
      { question: '"How much is the fare?" asks about:', options: ['the price', 'the time', 'the name', 'the weather'], answerIndex: 0, ar: 'How much is the fare؟ تسأل عن:' },
      { question: '"Keep the change" means:', options: ['احتفظ بالباقي', 'ادفع الغرامة', 'أغلق النافذة', 'انتظر هنا'], answerIndex: 0, ar: 'ما معنى Keep the change؟' },
      { question: 'You want the taxi to stop. You say:', options: ['Stop here, please.', 'Drive faster!', 'Where is the menu?', 'What time is it?'], answerIndex: 0, ar: 'تريد أن يتوقف التاكسي، فتقول:' },
    ],
  },

  /* ================= lesson 44 — Everyday Situations ================= */
  {
    num: 44,
    tags: ['everyday', 'places'],
    objectives: [
      'Use doors: push, pull and knock',
      'Talk about floors and elevators',
      'Be polite in lines and wait your turn',
    ],
    grammar: {
      explanation: 'Everyday places have small rules. Doors say push (ادفع) or pull (اسحب). In an elevator someone may ask "Which floor are you going to?" and you can say "Hold the door, please!". In a line (queue) wait for your turn; ask "Are you in the line?" and say "It is your turn now". If the elevator is broken, it is out of order — take the stairs.',
      explanationAr: 'للأماكن اليومية قواعد صغيرة. على الأبواب كلمات push (ادفع) وpull (اسحب). وفي المصعد قد يسألك أحدهم Which floor are you going to؟ ويمكنك أن تقول Hold the door, please! وفي الطابور انتظر دورك واسأل Are you in the line؟ وقل It is your turn now. وإذا تعطل المصعد فهو out of order، فاستخدم السلالم.',
      examples: [
        { en: 'Push the door to open it.', ar: 'ادفع الباب لفتحه.' },
        { en: 'Which floor are you going to?', ar: 'إلى أي طابق تذهب؟' },
        { en: 'It is your turn now.', ar: 'حان دورك الآن.' },
      ],
    },
    vocabulary: [
      { word: 'push', meaningAr: 'يدفع', example: 'Push the door to open it.', ipa: 'pʊʃ' },
      { word: 'pull', meaningAr: 'يسحب', example: 'Pull the door on the left.' },
      { word: 'knock', meaningAr: 'يطرق', example: 'Knock before you enter, please.' },
      { word: 'sign', meaningAr: 'لافتة', example: 'The sign says push.' },
      { word: 'floor', meaningAr: 'طابق', example: 'The office is on the third floor.' },
      { word: 'elevator', meaningAr: 'مصعد', example: 'The elevator is out of order.' },
      { word: 'hold', meaningAr: 'يمسك', example: 'Hold the door, please!' },
      { word: 'line', meaningAr: 'طابور / صف', example: 'Are you in the line?' },
      { word: 'turn', meaningAr: 'دور', example: 'It is your turn now.' },
      { word: 'stairs', meaningAr: 'سلالم', example: 'Let us take the stairs.' },
      { word: 'enter', meaningAr: 'يدخل', example: 'Knock before you enter.' },
      { word: 'hurry', meaningAr: 'يستعجل', example: 'I am in a hurry.' },
    ],
    scenario: [
      { en: 'Push the door to open it.', ar: 'ادفع الباب لفتحه.', d: 1 },
      { en: 'Pull the door on the left.', ar: 'اسحب الباب على اليسار.', d: 1 },
      { en: 'Knock before you enter, please.', ar: 'اطرق الباب قبل الدخول من فضلك.', d: 1 },
      { en: 'Which floor are you going to?', ar: 'إلى أي طابق تذهب؟', d: 1 },
      { en: 'The fifth floor, please.', ar: 'الطابق الخامس من فضلك.', d: 1 },
      { en: 'Hold the door, please!', ar: 'امسك الباب من فضلك!', d: 1 },
      { en: 'Thank you, I am in a hurry.', ar: 'شكرا، أنا على عجلة من أمري.', d: 1 },
      { en: 'The elevator is out of order.', ar: 'المصعد معطل.', d: 1 },
      { en: 'Let us take the stairs.', ar: 'لنأخذ السلالم.', d: 1 },
      { en: 'Are you in the line?', ar: 'هل أنت في الطابور؟', d: 1 },
      { en: 'No, go ahead, please.', ar: 'لا، تفضل من فضلك.', d: 1 },
      { en: 'It is your turn now.', ar: 'حان دورك الآن.', d: 1 },
      { en: 'I waited in the line for ten minutes.', ar: 'انتظرت في الطابور عشر دقائق.', d: 2 },
      { en: 'The clinic is on the ground floor.', ar: 'العيادة في الطابق الأرضي.', d: 1 },
      { en: 'We will take the elevator together.', ar: 'سنصعد بالمصعد معا.', d: 2 },
      { en: 'Is the elevator working?', ar: 'هل المصعد يعمل؟', d: 1 },
      { en: 'He knocked twice on the door.', ar: 'طرق الباب مرتين.', d: 2 },
      { en: 'Do not block the door, please.', ar: 'لا تسد الباب من فضلك.', d: 1 },
    ],
    patterns: [
      {
        tmpl: '{V} the door, please.', arTmpl: '{V_ar} الباب من فضلك.',
        slots: {
          V: [
            { en: 'Push', ar: 'ادفع' }, { en: 'Pull', ar: 'اسحب' },
            { en: 'Open', ar: 'افتح' }, { en: 'Close', ar: 'أغلق' },
            { en: 'Lock', ar: 'أقفل' },
          ],
        },
        tags: ['everyday', 'imperative'], d: 1, limit: 5,
      },
      {
        tmpl: 'The {N} is on the {ORD} floor.', arTmpl: '{N_ar} في الطابق {ORD_ar}.',
        slots: {
          N: [
            { en: 'office', ar: 'المكتب' }, { en: 'clinic', ar: 'العيادة' },
            { en: 'apartment', ar: 'الشقة' }, { en: 'meeting room', ar: 'قاعة الاجتماعات' },
          ],
          ORD: [
            { en: 'first', ar: 'الأول' }, { en: 'second', ar: 'الثاني' },
            { en: 'third', ar: 'الثالث' }, { en: 'fourth', ar: 'الرابع' },
            { en: 'fifth', ar: 'الخامس' }, { en: 'sixth', ar: 'السادس' },
            { en: 'seventh', ar: 'السابع' }, { en: 'eighth', ar: 'الثامن' },
          ],
        },
        tags: ['everyday', 'places'], d: 1, limit: 24,
      },
      {
        tmpl: 'Are you in the {Q}?', arTmpl: 'هل أنت في {Q_ar}؟',
        slots: {
          Q: [
            { en: 'line for the tickets', ar: 'طابور التذاكر' },
            { en: 'line for the elevator', ar: 'طابور المصعد' },
            { en: 'line at the counter', ar: 'الطابور أمام الشباك' },
          ],
        },
        tags: ['everyday', 'questions'], d: 1, limit: 3,
      },
      {
        tmpl: 'Do not {V} the door.', arTmpl: 'لا {V_ar} الباب.',
        slots: {
          V: [
            { en: 'push', ar: 'تدفع' }, { en: 'pull', ar: 'تسحب' },
            { en: 'block', ar: 'تسد' }, { en: 'close', ar: 'تغلق' },
          ],
        },
        tags: ['everyday', 'negation'], d: 2, limit: 4,
      },
    ],
    fills: [
      { en: 'Push the door to open it.', ar: 'ادفع الباب لفتحه.', word: 'Push', hint: 'باب' },
      { en: 'Pull the door on the left.', ar: 'اسحب الباب على اليسار.', word: 'Pull', hint: 'باب' },
      { en: 'Knock before you enter, please.', ar: 'اطرق الباب قبل الدخول من فضلك.', word: 'Knock', hint: 'باب' },
      { en: 'Which floor are you going to?', ar: 'إلى أي طابق تذهب؟', word: 'floor', hint: 'مبنى' },
      { en: 'The elevator is out of order.', ar: 'المصعد معطل.', word: 'elevator', hint: 'مبنى' },
      { en: 'It is your turn now.', ar: 'حان دورك الآن.', word: 'turn', hint: 'طابور' },
      { en: 'Are you in the line?', ar: 'هل أنت في الطابور؟', word: 'line', hint: 'طابور' },
      { en: 'Hold the door, please!', ar: 'امسك الباب من فضلك!', word: 'Hold', hint: 'باب' },
    ],
    orders: [
      { en: 'Push the door to open it.', ar: 'ادفع الباب لفتحه.' },
      { en: 'Knock before you enter, please.', ar: 'اطرق الباب قبل الدخول من فضلك.' },
      { en: 'The meeting is on the fifth floor.', ar: 'الاجتماع في الطابق الخامس.' },
      { en: 'The elevator is out of order.', ar: 'المصعد معطل.' },
      { en: 'Wait for your turn, please.', ar: 'انتظر دورك من فضلك.' },
      { en: 'Do not block the door, please.', ar: 'لا تسد الباب من فضلك.' },
    ],
    mc: [
      { question: 'A door says "Pull". You must:', options: ['pull the door', 'push the door', 'knock on the door', 'close the door'], answerIndex: 0, ar: 'على الباب كلمة Pull، فعليك أن:' },
      { question: 'Someone says "Hold the door, please!" They want:', options: ['the door to stay open', 'the door closed', 'a new door', 'the key'], answerIndex: 0, ar: 'قال أحدهم Hold the door, please! فهو يريد:' },
      { question: '"It is your turn" means:', options: ['حان دورك', 'انتهى وقتك', 'اذهب إلى البيت', 'انتظر دقيقتين'], answerIndex: 0, ar: 'ما معنى It is your turn؟' },
      { question: 'The elevator is out of order. You should:', options: ['take the stairs', 'push the elevator', 'call the police', 'open the window'], answerIndex: 0, ar: 'المصعد معطل، فيجب أن:' },
    ],
  },

  /* ================= lesson 45 — Daily Life Review (review) ================= */
  {
    num: 45,
    tags: ['review', 'daily-life'],
    objectives: [
      'Reuse daily-life words in new sentences',
      'Combine feelings, requests and directions',
      'Talk about shopping, cafés and transport',
    ],
    grammar: {
      explanation: 'This lesson reviews the language of daily life: routine and time, polite requests, thanks, phone calls and messages, appointments, descriptions, feelings, directions, shopping, cafés, transportation, taxis and everyday situations. Use the verb be for feelings, can and could for requests, made of for materials, and go straight and turn left for directions. Mix present, past simple and will to talk about your day.',
      explanationAr: 'تراجع هذه الدرس لغة الحياة اليومية: الروتين والوقت، الطلبات المهذبة، الشكر، المكالمات والرسائل، المواعيد، الوصف، المشاعر، الاتجاهات، التسوق، المقهى، المواصلات، التاكسي والمواقف اليومية. استخدم فعل الكينونة للمشاعر، وcan وcould للطلبات، وmade of للمواد، وgo straight وturn left للاتجاهات. وامزج بين المضارع والماضي البسيط وwill للحديث عن يومك.',
      examples: [
        { en: 'I woke up late and missed the bus.', ar: 'استيقظت متأخرا وفوّت الحافلة.' },
        { en: 'Could you spell your family name, please?', ar: 'هل يمكنك تهجئة اسم عائلتك من فضلك؟' },
        { en: 'Turn right at the bank, then go straight.', ar: 'انعطف يمينا عند البنك ثم امش مستقيما.' },
      ],
    },
    vocabulary: [
      { word: 'routine', meaningAr: 'روتين', example: 'My routine is simple.' },
      { word: 'appointment', meaningAr: 'موعد', example: 'I have an appointment on Monday.' },
      { word: 'dentist', meaningAr: 'طبيب أسنان', example: 'The dentist is busy today.' },
      { word: 'spell', meaningAr: 'يتهجى', example: 'Could you spell your name?' },
      { word: 'message', meaningAr: 'رسالة', example: 'She sent a message.' },
      { word: 'light', meaningAr: 'خفيف', example: 'The bag is light.' },
      { word: 'worried', meaningAr: 'قلق', example: 'I was worried.' },
      { word: 'pharmacy', meaningAr: 'صيدلية', example: 'Where is the pharmacy?' },
      { word: 'fare', meaningAr: 'أجرة', example: 'The fare is ten dollars.' },
      { word: 'elevator', meaningAr: 'مصعد', example: 'Hold the elevator!' },
      { word: 'change', meaningAr: 'الباقي', example: 'Keep the change.' },
      { word: 'straight', meaningAr: 'مستقيما', example: 'Go straight, please.' },
    ],
    scenario: [
      { en: 'I woke up late and missed the bus.', ar: 'استيقظت متأخرا وفوّت الحافلة.', d: 2 },
      { en: 'She gets up at six every morning.', ar: 'تستيقظ في السادسة كل صباح.', d: 1 },
      { en: 'It is half past seven now.', ar: 'الساعة الآن السابعة والنصف.', d: 1 },
      { en: 'I have an appointment with the dentist on Monday.', ar: 'لدي موعد مع طبيب الأسنان يوم الاثنين.', d: 2 },
      { en: 'Please call me after dinner.', ar: 'اتصل بي بعد العشاء من فضلك.', d: 1 },
      { en: 'He sent me a long text message.', ar: 'أرسل لي رسالة نصية طويلة.', d: 2 },
      { en: 'Could you spell your family name, please?', ar: 'هل يمكنك تهجئة اسم عائلتك من فضلك؟', d: 1 },
      { en: 'Yes, it is A, L, I.', ar: 'نعم، إنها ألف، لام، ياء.', d: 1 },
      { en: 'I did not understand the question.', ar: 'لم أفهم السؤال.', d: 2 },
      { en: 'My new bag is small and light.', ar: 'حقيبتي الجديدة صغيرة وخفيفة.', d: 1 },
      { en: 'The old man was tired and hungry.', ar: 'كان الرجل المسن متعبا وجوعانا.', d: 2 },
      { en: 'We were worried before the exam.', ar: 'كنا قلقين قبل الامتحان.', d: 2 },
      { en: 'Excuse me, where is the nearest pharmacy?', ar: 'عفوا، أين أقرب صيدلية؟', d: 1 },
      { en: 'Turn right at the bank, then go straight.', ar: 'انعطف يمينا عند البنك ثم امش مستقيما.', d: 1 },
      { en: 'I bought two shirts and a hat.', ar: 'اشتريت قميصين وقبعة.', d: 2 },
      { en: 'How much is the ticket to the center?', ar: 'بكم تذكرة الذهاب إلى الوسط؟', d: 1 },
      { en: 'A tea with milk and a glass of water, please.', ar: 'شاي بالحليب وكوب ماء من فضلك.', d: 1 },
      { en: 'The taxi driver did not know the hotel.', ar: 'سائق التاكسي لم يعرف الفندق.', d: 2 },
      { en: 'Hold the elevator, I am coming!', ar: 'امسكوا المصعد، أنا قادم!', d: 1 },
      { en: 'Thank you very much for your help.', ar: 'شكرا جزيلا على مساعدتك.', d: 1 },
      { en: 'I will meet my friend at the café tomorrow.', ar: 'سأقابل صديقي في المقهى غدا.', d: 2 },
      { en: 'Where do I get off for the museum?', ar: 'أين أنزل للمتحف؟', d: 1 },
    ],
    patterns: [
      {
        tmpl: '{S} {V} at {T} every day.', arTmpl: '{S_ar} {V_ar} الساعة {T_ar} كل يوم.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('wake', x.S.agr), ar: B.arPresent('wake', x.S.agr) }],
          T: [
            { en: 'six', ar: 'السادسة' }, { en: 'seven', ar: 'السابعة' },
            { en: 'five thirty', ar: 'الخامسة والنصف' }, { en: 'half past six', ar: 'السادسة والنصف' },
            { en: 'eight', ar: 'الثامنة' },
          ],
        },
        tags: ['review', 'routine'], d: 1, limit: 20,
      },
      {
        tmpl: 'Can you {V} on {D}?', arTmpl: 'هل يمكنك {V_ar} يوم {D_ar}؟',
        slots: {
          V: [
            { en: 'come to my office', ar: 'أن تأتي إلى مكتبي' },
            { en: 'call me back', ar: 'أن تعاود الاتصال بي' },
            { en: 'meet me at the café', ar: 'أن تقابلني في المقهى' },
            { en: 'send me the address', ar: 'أن ترسل لي العنوان' },
            { en: 'visit us in the morning', ar: 'أن تزورنا في الصباح' },
          ],
          D: B.DAYS,
        },
        tags: ['review', 'requests'], d: 1, limit: 20,
      },
      {
        tmpl: 'I am going to {V} {PL} tomorrow.', arTmpl: 'سوف {V_ar} {PL_ar} غدا.',
        slots: {
          V: [
            { en: 'buy', ar: 'أشتري' }, { en: 'order', ar: 'أطلب' },
          ],
          PL: [
            { en: 'two shirts', ar: 'قميصين' }, { en: 'a warm jacket', ar: 'سترة دافئة' },
            { en: 'some fresh bread', ar: 'خبزا طازجا' }, { en: 'a small table', ar: 'طاولة صغيرة' },
            { en: 'new shoes', ar: 'حذاء جديدا' },
          ],
        },
        tags: ['review', 'future'], d: 2, limit: 10,
      },
      {
        tmpl: '{N} will be {FG} {T}.', arTmpl: '{K_ar} {N_ar} {FG_ar} {T_ar}.',
        slots: {
          N: B.NAMED_SING,
          T: [
            { en: 'tomorrow', ar: 'غدا' }, { en: 'next week', ar: 'الأسبوع القادم' },
            { en: 'at the party', ar: 'في الحفلة' }, { en: 'after the trip', ar: 'بعد الرحلة' },
          ],
          F: FEELINGS,
          FG: (x) => [{ en: x.F.en, ar: x.N.agr === 'she' ? x.F.f : x.F.ar }],
          K: (x) => [{ en: 'will be', ar: B.AR_FUT_KANA[x.N.agr] }],
        },
        tags: ['review', 'feelings'], d: 2, limit: 20,
      },
      {
        tmpl: 'How do I get to {X} from here?', arTmpl: 'كيف أصل إلى {X_ar} من هنا؟',
        slots: {
          X: [
            { en: 'the museum', ar: 'المتحف' }, { en: 'the main square', ar: 'الساحة الرئيسة' },
            { en: 'the bus station', ar: 'محطة الحافلات' }, { en: 'the nearest hospital', ar: 'أقرب مستشفى' },
            { en: 'the new mall', ar: 'المركز التجاري الجديد' },
          ],
        },
        tags: ['review', 'directions'], d: 1, limit: 5,
      },
    ],
    fills: [
      { en: 'My daily routine is very simple.', ar: 'روتيني اليومي بسيط جدا.', word: 'routine', hint: 'روتين' },
      { en: 'The film starts at eight thirty.', ar: 'يبدأ الفيلم في الثامنة والنصف.', word: 'starts', hint: 'فعل' },
      { en: 'I have an appointment at four.', ar: 'لدي موعد في الرابعة.', word: 'appointment', hint: 'موعد' },
      { en: 'Could you repeat your address, please?', ar: 'هل تعيد عنوانك من فضلك؟', word: 'repeat', hint: 'فعل' },
      { en: 'She sent me a message last night.', ar: 'أرسلت لي رسالة الليلة الماضية.', word: 'message', hint: 'رسالة' },
      { en: 'The fare was five dollars only.', ar: 'كانت الأجرة خمسة دولارات فقط.', word: 'fare', hint: 'أجرة' },
      { en: 'Hold the door for the old man.', ar: 'امسك الباب للرجل المسن.', word: 'Hold', hint: 'فعل' },
      { en: 'Go straight and take the first right.', ar: 'امش مستقيما وخذ أول يمين.', word: 'straight', hint: 'اتجاه' },
      { en: 'I feel much better today, thank you.', ar: 'أشعر بتحسن كبير اليوم، شكرا.', word: 'better', hint: 'شعور' },
      { en: 'Do not forget your ticket.', ar: 'لا تنس تذكرتك.', word: 'forget', hint: 'فعل' },
    ],
    orders: [
      { en: 'I will meet my friend tomorrow.', ar: 'سأقابل صديقي غدا.' },
      { en: 'Please spell your name slowly.', ar: 'تهجَّ اسمك ببطء من فضلك.' },
      { en: 'We waited for the bus for an hour.', ar: 'انتظرنا الحافلة ساعة كاملة.' },
      { en: 'The taxi driver was very friendly.', ar: 'كان سائق التاكسي لطيفا جدا.' },
      { en: 'Turn left after the traffic light.', ar: 'انعطف يسارا بعد إشارة المرور.' },
      { en: 'Do you have this shirt in a large size?', ar: 'هل لديك هذا القميص بمقاس كبير؟' },
      { en: 'My appointment is on Monday morning.', ar: 'موعد صباح الاثنين.' },
    ],
    mc: [
      { question: 'You want a coffee. You say:', options: ['A coffee, please.', 'A ticket, please.', 'A pill, please.', 'A key, please.'], answerIndex: 0, ar: 'تريد قهوة، فتقول:' },
      { question: 'Your friend is sad. You ask:', options: ['Why are you sad?', 'Where is my bag?', 'Is it far?', 'How much is it?'], answerIndex: 0, ar: 'صديقك حزين، فتسأل:' },
      { question: 'You do not know the way. You ask:', options: ['How do I get to the station?', 'What is your name?', 'I am fine, thanks.', 'See you later.'], answerIndex: 0, ar: 'لا تعرف الطريق، فتسأل:' },
      { question: '"I woke up late" is:', options: ['past simple', 'future', 'a question', 'a request'], answerIndex: 0, ar: 'جملة I woke up late هي:' },
      { question: 'Someone helps you. You say:', options: ['Thank you very much.', 'Go away, please.', 'Turn left.', 'Hold the door.'], answerIndex: 0, ar: 'ساعدك أحدهم، فتقول:' },
    ],
  },
];
