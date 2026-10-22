/* ============================================================
   v2 section data — s01-c.js
   Foundations & Core Communication · lessons 11–15
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

/* local helper banks (topic-specific to this file) */
const HAVE_AR = { I: 'لدي', you: 'لديك', he: 'لديه', she: 'لديها', we: 'لدينا', they: 'لديهم' };

const JOBS_G = [
  { en: 'a teacher', m: 'معلم', f: 'معلمة' },
  { en: 'a doctor', m: 'طبيب', f: 'طبيبة' },
  { en: 'an engineer', m: 'مهندس', f: 'مهندسة' },
  { en: 'a nurse', m: 'ممرض', f: 'ممرضة' },
  { en: 'a driver', m: 'سائق', f: 'سائقة' },
  { en: 'an accountant', m: 'محاسب', f: 'محاسبة' },
];

const WADJ_F = {
  sunny: 'مشمسة', cloudy: 'غائمة', windy: 'عاصفة', rainy: 'ممطرة',
  hot: 'حارة', cold: 'باردة', warm: 'دافئة', cool: 'معتدلة', humid: 'رطبة',
};

const HOME_ADJ = [
  { en: 'clean', m: 'نظيف', f: 'نظيفة' },
  { en: 'small', m: 'صغير', f: 'صغيرة' },
  { en: 'big', m: 'كبير', f: 'كبيرة' },
];

export const lessons = [

  /* ================= lesson 11 — Subject, Verb and Object ================= */
  {
    num: 11,
    tags: ['svo', 'present-simple'],
    objectives: [
      'Make simple subject + verb + object sentences',
      'Use eat, drink, cook, buy, open and close with sensible objects',
      'Ask simple questions with Do / Does',
    ],
    grammar: {
      explanation: 'In English the simple sentence follows a fixed order: Subject + Verb + Object — "Sara eats an apple". The subject does the action, the verb is the action, and the object receives the action. Unlike Arabic, where the verb may come first (تأكل سارة تفاحة), English keeps this order almost always. With he, she and it we add -s to the verb: he eats, she drinks, it closes. To make a negative, use do not / does not, and to ask a question, start with Do / Does.',
      explanationAr: 'في الإنجليزية تتبع الجملة البسيطة ترتيبا ثابتا: الفاعل ثم الفعل ثم المفعول به: Sara eats an apple. الفاعل من يقوم بالفعل، والفعل هو الحدث، والمفعول به من يقع عليه الفعل. هذا الترتيب لا يتغير تقريبا في الإنجليزية، بخلاف العربية التي يجوز فيها تقديم الفعل. مع he وshe وit نضيف s للفعل: he eats، she drinks. وللنفي نستخدم do not أو does not، وللسؤال نبدأ بـ Do أو Does.',
      examples: [
        { en: 'Sara eats an apple.', ar: 'تأكل سارة تفاحة.' },
        { en: 'We watch TV after dinner.', ar: 'نشاهد التلفاز بعد العشاء.' },
        { en: 'Does Khalid drink milk?', ar: 'هل يشرب خالد الحليب؟' },
      ],
    },
    vocabulary: [
      { word: 'subject', meaningAr: 'الفاعل', example: 'The subject comes before the verb.', ipa: 'ˈsʌbdʒɪkt' },
      { word: 'verb', meaningAr: 'الفعل', example: 'Eat and drink are verbs.' },
      { word: 'object', meaningAr: 'المفعول به', example: 'The object comes after the verb.' },
      { word: 'eat', meaningAr: 'يأكل', example: 'We eat bread every day.', ipa: 'iːt' },
      { word: 'drink', meaningAr: 'يشرب', example: 'She drinks milk in the morning.' },
      { word: 'cook', meaningAr: 'يطبخ', example: 'My mother cooks rice.' },
      { word: 'open', meaningAr: 'يفتح', example: 'Open the door, please.' },
      { word: 'close', meaningAr: 'يغلق', example: 'Close the window at night.' },
      { word: 'buy', meaningAr: 'يشتري', example: 'I buy fresh bread.' },
      { word: 'watch', meaningAr: 'يشاهد', example: 'They watch TV at night.' },
      { word: 'read', meaningAr: 'يقرأ', example: 'Omar reads a story.' },
      { word: 'breakfast', meaningAr: 'الفطور', example: 'I eat eggs for breakfast.' },
    ],
    scenario: [
      { en: 'I eat bread and cheese in the morning.', ar: 'آكل الخبز والجبن في الصباح.', d: 1 },
      { en: 'She drinks tea with her family.', ar: 'تشرب الشاي مع عائلتها.', d: 1 },
      { en: 'We cook rice on Friday.', ar: 'نطبخ الأرز يوم الجمعة.', d: 1 },
      { en: 'My father reads the newspaper every morning.', ar: 'يقرأ أبي الصحيفة كل صباح.', d: 2 },
      { en: 'The children watch TV after dinner.', ar: 'يشاهد الأطفال التلفاز بعد العشاء.', d: 2 },
      { en: 'The workers open the shop early.', ar: 'يفتح العمال المتجر مبكرا.', d: 2 },
      { en: 'Please close the window, Sara.', ar: 'من فضلك أغلقي النافذة يا سارة.', d: 1 },
      { en: 'Omar buys fresh bread every morning.', ar: 'يشتري عمر الخبز الطازج كل صباح.', d: 2 },
      { en: 'I do not drink coffee at night.', ar: 'لا أشرب القهوة ليلا.', d: 1 },
      { en: 'Sara does not eat meat.', ar: 'سارة لا تأكل اللحم.', d: 2 },
      { en: 'Do you eat rice every day?', ar: 'هل تأكل الأرز كل يوم؟', d: 1 },
      { en: 'Does your brother drink milk?', ar: 'هل يشرب أخوك الحليب؟', d: 2 },
      { en: 'What do you cook on Sunday?', ar: 'ماذا تطبخ يوم الأحد؟', d: 2 },
      { en: 'Do you watch the game today?', ar: 'هل تشاهد المباراة اليوم؟', d: 1 },
      { en: 'Yes, we watch it with our friends.', ar: 'نعم، نشاهدها مع أصدقائنا.', d: 1 },
      { en: 'We buy fresh fruit at the market.', ar: 'نشتري الفاكهة الطازجة في السوق.', d: 2 },
      { en: 'The students open their books in class.', ar: 'يفتح الطلاب كتبهم في الصف.', d: 2 },
      { en: 'My mother cooks dinner every evening.', ar: 'تطبخ أمي العشاء كل مساء.', d: 1 },
    ],
    patterns: [
      {
        tmpl: '{S} {V} {O}.', arTmpl: '{S_ar} {V_ar} {O_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('eat', x.S.agr), ar: B.arPresent('eat', x.S.agr) }],
          O: [
            { en: 'a banana', ar: 'موزة' }, { en: 'the sandwich', ar: 'الشطيرة' },
            { en: 'chicken', ar: 'الدجاج' }, { en: 'meat', ar: 'اللحم' },
            { en: 'cheese', ar: 'الجبن' }, { en: 'salad', ar: 'السلطة' },
            { en: 'the soup', ar: 'الحساء' }, { en: 'the cake', ar: 'الكعك' },
            { en: 'yogurt', ar: 'الزبادي' },
          ],
        },
        tags: ['svo', 'present-simple'], d: 1, limit: 30,
      },
      {
        tmpl: '{S} {V} {O}.', arTmpl: '{S_ar} {V_ar} {O_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('drink', x.S.agr), ar: B.arPresent('drink', x.S.agr) }],
          O: [
            { en: 'fresh juice', ar: 'عصيرا طازجا' }, { en: 'orange juice', ar: 'عصير البرتقال' },
            { en: 'green tea', ar: 'الشاي الأخضر' }, { en: 'lemonade', ar: 'الليموناضة' },
            { en: 'hot chocolate', ar: 'الشوكولاتة الساخنة' }, { en: 'a soft drink', ar: 'مشروب غازي' },
            { en: 'mineral water', ar: 'المياه المعدنية' },
          ],
        },
        tags: ['svo', 'present-simple'], d: 1, limit: 20,
      },
      {
        tmpl: '{S} {V} {O} in the kitchen.', arTmpl: '{S_ar} {V_ar} {O_ar} في المطبخ.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('cook', x.S.agr), ar: B.arPresent('cook', x.S.agr) }],
          O: [
            { en: 'rice', ar: 'الأرز' }, { en: 'the fish', ar: 'السمك' },
            { en: 'the chicken', ar: 'الدجاج' }, { en: 'the soup', ar: 'الحساء' },
            { en: 'lentils', ar: 'العدس' }, { en: 'pasta', ar: 'المكرونة' },
          ],
        },
        tags: ['svo', 'present-simple'], d: 2, limit: 18,
      },
      {
        tmpl: '{N} {V} {O} every week.', arTmpl: '{N_ar} {V_ar} {O_ar} كل أسبوع.',
        slots: {
          N: B.NAMED_SING,
          V: (x) => [{ en: B.enPresent('buy', x.N.agr), ar: B.arPresent('buy', x.N.agr) }],
          O: [
            { en: 'tomatoes', ar: 'الطماطم' }, { en: 'onions', ar: 'البصل' },
            { en: 'potatoes', ar: 'البطاطس' }, { en: 'grapes', ar: 'العنب' },
            { en: 'olive oil', ar: 'زيت الزيتون' }, { en: 'salt', ar: 'الملح' },
            { en: 'sugar', ar: 'السكر' },
          ],
        },
        tags: ['svo', 'present-simple'], d: 2, limit: 24,
      },
      {
        tmpl: 'Do you {V} {O}?', arTmpl: 'هل {V_ar} {O_ar}؟',
        slots: {
          V: [
            { en: 'eat', ar: 'تأكل' }, { en: 'drink', ar: 'تشرب' },
            { en: 'cook', ar: 'تطبخ' }, { en: 'open', ar: 'تفتح' },
            { en: 'close', ar: 'تغلق' }, { en: 'watch', ar: 'تشاهد' },
          ],
          O: [
            { en: 'fish', ar: 'السمك' }, { en: 'tea', ar: 'الشاي' },
            { en: 'rice', ar: 'الأرز' }, { en: 'the window', ar: 'النافذة' },
            { en: 'the door', ar: 'الباب' }, { en: 'TV', ar: 'التلفاز' },
            { en: 'the news', ar: 'الأخبار' },
          ],
        },
        tags: ['svo', 'questions'], d: 1, limit: 20,
      },
    ],
    fills: [
      { en: 'I eat bread and cheese in the morning.', ar: 'آكل الخبز والجبن في الصباح.', word: 'eat', hint: 'فعل' },
      { en: 'She drinks tea with her family.', ar: 'تشرب الشاي مع عائلتها.', word: 'tea', hint: 'مشروب' },
      { en: 'Please close the window, Sara.', ar: 'من فضلك أغلقي النافذة يا سارة.', word: 'close' },
      { en: 'I do not drink coffee at night.', ar: 'لا أشرب القهوة ليلا.', word: 'coffee', hint: 'مشروب' },
      { en: 'The children watch TV after dinner.', ar: 'يشاهد الأطفال التلفاز بعد العشاء.', word: 'watch' },
      { en: 'Omar buys fresh bread every morning.', ar: 'يشتري عمر الخبز الطازج كل صباح.', word: 'bread' },
      { en: 'Do you eat rice every day?', ar: 'هل تأكل الأرز كل يوم؟', word: 'rice' },
      { en: 'My father reads the newspaper every morning.', ar: 'يقرأ أبي الصحيفة كل صباح.', word: 'newspaper' },
      { en: 'The workers open the shop early.', ar: 'يفتح العمال المتجر مبكرا.', word: 'open' },
    ],
    orders: [
      { en: 'I eat bread every morning.', ar: 'آكل الخبز كل صباح.' },
      { en: 'She drinks tea with her family.', ar: 'تشرب الشاي مع عائلتها.' },
      { en: 'The children watch TV after dinner.', ar: 'يشاهد الأطفال التلفاز بعد العشاء.' },
      { en: 'Please close the window now.', ar: 'من فضلك أغلق النافذة الآن.' },
      { en: 'Does your brother drink milk?', ar: 'هل يشرب أخوك الحليب؟' },
      { en: 'My father reads the newspaper every morning.', ar: 'يقرأ أبي الصحيفة كل صباح.' },
    ],
    mc: [
      { question: 'What is the correct word order in English?', options: ['Subject + verb + object', 'Subject + object + verb', 'Verb + subject + object', 'Object + subject + verb'], answerIndex: 0, ar: 'ما الترتيب الصحيح للجملة في الإنجليزية؟' },
      { question: 'She ___ tea every morning.', options: ['drinks', 'drink', 'drinking', 'drank'], answerIndex: 0, ar: 'هي ___ الشاي كل صباح.', explanation: 'With he / she / it we add -s: she drinks.' },
      { question: '"The children watch TV" — the subject is:', options: ['The children', 'watch', 'TV', 'after'], answerIndex: 0, ar: 'في جملة The children watch TV الفاعل هو:' },
      { question: 'Which sentence is negative?', options: ['I do not drink coffee.', 'I drink coffee.', 'Do you drink coffee?', 'She drinks coffee.'], answerIndex: 0, ar: 'أي جملة منفية؟' },
      { question: 'Choose the correct question:', options: ['Do you eat fish?', 'You eat fish do?', 'Eat you fish?', 'Do you eats fish?'], answerIndex: 0, ar: 'اختر السؤال الصحيح:' },
    ],
  },

  /* ================= lesson 12 — A, An and The ================= */
  {
    num: 12,
    tags: ['articles'],
    objectives: [
      'Use "a" before consonant sounds',
      'Use "an" before vowel sounds',
      'Use "the" for things both speakers know',
    ],
    grammar: {
      explanation: 'English has three small words before nouns: a, an and the. Use "a" before a consonant sound: a book, a car, a house. Use "an" before a vowel sound (a, e, i, o, u): an apple, an egg, an engineer. Use "the" for one specific thing that both people know: "Close the door" (our door), "the sun", "the moon". First introduce a thing with a/an — "I have a car" — then talk about it with the — "The car is new".',
      explanationAr: 'للإنجليزية ثلاث كلمات صغيرة قبل الأسماء: a وan وthe. استخدم a قبل الصوت الساكن: a book، a car. واستخدم an قبل صوت العلة (a, e, i, o, u): an apple، an egg، an engineer. واستخدم the للشيء المحدد المعروف لدى الطرفين: Close the door أي بابنا المعروف، وthe sun وthe moon. عرّف الشيء أولا بـ a أو an: I have a car، ثم تحدث عنه بـ the: The car is new.',
      examples: [
        { en: 'She eats an apple every morning.', ar: 'تأكل تفاحة كل صباح.' },
        { en: 'My neighbor is an engineer.', ar: 'جاري مهندس.' },
        { en: 'The sun is very hot today.', ar: 'الشمس حارة جدا اليوم.' },
      ],
    },
    vocabulary: [
      { word: 'a', meaningAr: 'أداة تنكير (قبل صوت ساكن)', example: 'I have a car.' },
      { word: 'an', meaningAr: 'أداة تنكير (قبل صوت علة)', example: 'She eats an egg.' },
      { word: 'the', meaningAr: 'أداة التعريف', example: 'Close the door, please.' },
      { word: 'apple', meaningAr: 'تفاحة', example: 'An apple is on the table.', ipa: 'ˈæpəl' },
      { word: 'orange', meaningAr: 'برتقالة', example: 'She buys an orange.' },
      { word: 'egg', meaningAr: 'بيضة', example: 'I eat an egg for breakfast.' },
      { word: 'book', meaningAr: 'كتاب', example: 'I read a book at night.' },
      { word: 'car', meaningAr: 'سيارة', example: 'My father has a car.' },
      { word: 'house', meaningAr: 'منزل', example: 'We have an old house.' },
      { word: 'sun', meaningAr: 'الشمس', example: 'The sun is bright today.' },
      { word: 'moon', meaningAr: 'القمر', example: 'The moon is white tonight.' },
      { word: 'animal', meaningAr: 'حيوان', example: 'A cat is a small animal.' },
    ],
    scenario: [
      { en: 'I have a new car.', ar: 'لدي سيارة جديدة.', d: 1 },
      { en: 'She eats an apple every morning.', ar: 'تأكل تفاحة كل صباح.', d: 1 },
      { en: 'We have an old house.', ar: 'لدينا منزل قديم.', d: 1 },
      { en: 'My neighbor is an engineer.', ar: 'جاري مهندس.', d: 1 },
      { en: 'Sara is a good student.', ar: 'سارة طالبة جيدة.', d: 1 },
      { en: 'The sun is very hot today.', ar: 'الشمس حارة جدا اليوم.', d: 1 },
      { en: 'The moon is white tonight.', ar: 'القمر أبيض الليلة.', d: 1 },
      { en: 'Close the door, please.', ar: 'أغلق الباب من فضلك.', d: 1 },
      { en: 'The children are in the garden.', ar: 'الأطفال في الحديقة.', d: 1 },
      { en: 'We have a dog and two cats.', ar: 'لدينا كلب وقطتان.', d: 2 },
      { en: 'I do not need a new bag.', ar: 'لا أحتاج حقيبة جديدة.', d: 2 },
      { en: 'Do not open the box, Ahmed.', ar: 'لا تفتح الصندوق يا أحمد.', d: 2 },
      { en: 'Do you have a pen?', ar: 'هل لديك قلم؟', d: 1 },
      { en: 'Is there an apple on the table?', ar: 'هل توجد تفاحة على الطاولة؟', d: 2 },
      { en: 'What a beautiful day!', ar: 'يا لها من يوم جميل!', d: 2 },
      { en: 'Where is the dog?', ar: 'أين الكلب؟', d: 1 },
      { en: 'The dog is in the garden.', ar: 'الكلب في الحديقة.', d: 1 },
      { en: 'A square has four sides.', ar: 'للمربع أربعة أضلاع.', d: 2 },
    ],
    patterns: [
      {
        tmpl: '{S} {H} {O}.', arTmpl: '{H_ar} {O_ar}.',
        slots: {
          S: B.PRONOUNS,
          O: [
            { en: 'a book', ar: 'كتاب' }, { en: 'a car', ar: 'سيارة' },
            { en: 'a new bag', ar: 'حقيبة جديدة' }, { en: 'a big house', ar: 'منزل كبير' },
            { en: 'an apple', ar: 'تفاحة' }, { en: 'an egg', ar: 'بيضة' },
            { en: 'an orange', ar: 'برتقالة' }, { en: 'a dog', ar: 'كلب' },
            { en: 'an old map', ar: 'خريطة قديمة' },
          ],
          H: (x) => [{ en: B.AGR[x.S.agr].have, ar: HAVE_AR[x.S.agr] }],
        },
        tags: ['articles'], d: 1, limit: 24,
      },
      {
        tmpl: '{P} is {J}.', arTmpl: '{P_ar} {J_ar}.',
        slots: {
          P: B.NAMED_SING,
          J: (x) => JOBS_G.map((j) => ({ en: j.en, ar: x.P.agr === 'she' ? j.f : j.m })),
        },
        tags: ['articles', 'jobs'], d: 1, limit: 24,
      },
      {
        tmpl: 'Look at the {N}.', arTmpl: 'انظر إلى {N_ar}.',
        slots: {
          N: [
            { en: 'sun', ar: 'الشمس' }, { en: 'moon', ar: 'القمر' },
            { en: 'sky', ar: 'السماء' }, { en: 'door', ar: 'الباب' },
            { en: 'window', ar: 'النافذة' }, { en: 'sea', ar: 'البحر' },
            { en: 'garden', ar: 'الحديقة' }, { en: 'new house', ar: 'المنزل الجديد' },
          ],
        },
        tags: ['articles'], d: 1, limit: 8,
      },
      {
        tmpl: 'I see {O}.', arTmpl: 'أرى {O_ar}.',
        slots: {
          O: [
            { en: 'a car', ar: 'سيارة' }, { en: 'a bird', ar: 'طائرا' },
            { en: 'a cat', ar: 'قطة' }, { en: 'an apple', ar: 'تفاحة' },
            { en: 'an egg', ar: 'بيضة' }, { en: 'an orange', ar: 'برتقالة' },
            { en: 'a book', ar: 'كتابا' }, { en: 'a big house', ar: 'منزلا كبيرا' },
          ],
        },
        tags: ['articles', 'present-simple'], d: 1, limit: 8,
      },
      {
        tmpl: 'Open the {N}, please.', arTmpl: 'افتح {N_ar} من فضلك.',
        slots: {
          N: [
            { en: 'door', ar: 'الباب' }, { en: 'window', ar: 'النافذة' },
            { en: 'box', ar: 'الصندوق' }, { en: 'book', ar: 'الكتاب' },
            { en: 'bag', ar: 'الحقيبة' }, { en: 'shop', ar: 'المتجر' },
          ],
        },
        tags: ['articles', 'imperative'], d: 1, limit: 6,
      },
    ],
    fills: [
      { en: 'I have a new car.', ar: 'لدي سيارة جديدة.', word: 'car' },
      { en: 'She eats an apple every morning.', ar: 'تأكل تفاحة كل صباح.', word: 'apple', hint: 'فاكهة' },
      { en: 'My neighbor is an engineer.', ar: 'جاري مهندس.', word: 'engineer' },
      { en: 'The sun is very hot today.', ar: 'الشمس حارة جدا اليوم.', word: 'sun' },
      { en: 'Close the door, please.', ar: 'أغلق الباب من فضلك.', word: 'door' },
      { en: 'We have a dog and two cats.', ar: 'لدينا كلب وقطتان.', word: 'dog' },
      { en: 'What a beautiful day!', ar: 'يا لها من يوم جميل!', word: 'beautiful', hint: 'صفة' },
      { en: 'Is there an apple on the table?', ar: 'هل توجد تفاحة على الطاولة؟', word: 'table' },
      { en: 'The moon is white tonight.', ar: 'القمر أبيض الليلة.', word: 'moon' },
    ],
    orders: [
      { en: 'I have a new car.', ar: 'لدي سيارة جديدة.' },
      { en: 'My neighbor is an engineer.', ar: 'جاري مهندس.' },
      { en: 'The children are in the garden.', ar: 'الأطفال في الحديقة.' },
      { en: 'Close the door, please.', ar: 'أغلق الباب من فضلك.' },
      { en: 'Is there an apple on the table?', ar: 'هل توجد تفاحة على الطاولة؟' },
      { en: 'A square has four sides.', ar: 'للمربع أربعة أضلاع.' },
    ],
    mc: [
      { question: 'Which is correct?', options: ['an apple', 'a apple', 'an book', 'a orange'], answerIndex: 0, ar: 'أيها صحيح؟', explanation: 'Apple starts with a vowel sound, so we use "an".' },
      { question: 'We use "an" before:', options: ['a vowel sound', 'a consonant sound', 'a number', 'a name'], answerIndex: 0, ar: 'نستخدم an قبل:' },
      { question: 'Which sentence is correct?', options: ['The sun is hot.', 'A sun is hot.', 'An sun is hot.', 'Sun is hot.'], answerIndex: 0, ar: 'أي جملة صحيحة؟' },
      { question: 'I see ___ elephant at the zoo.', options: ['an', 'a', 'the', 'some'], answerIndex: 0, ar: 'أرى ___ فيل في حديقة الحيوان.' },
      { question: '"Close the door" — why "the"?', options: ['The door is known to both of us', 'Door starts with a vowel', 'It is a question', 'It is plural'], answerIndex: 0, ar: 'لماذا استخدمنا the في Close the door؟' },
    ],
  },

  /* ================= lesson 13 — Basic Prepositions ================= */
  {
    num: 13,
    tags: ['prepositions'],
    objectives: [
      'Use in, on and under for place',
      'Use next to, behind, in front of, between and near',
      'Ask where things are with "Where ...?"',
    ],
    grammar: {
      explanation: 'Prepositions show where things are. "In" means inside: in the kitchen, in the box. "On" means on a surface: on the table, on the wall. "Under" means below: under the bed. "Next to" means beside, "behind" means at the back of, "in front of" means before, "between" means in the middle of two things, and "near" means close to. To ask about place, use "Where ...?": "Where is the key?" — "It is on the table".',
      explanationAr: 'حروف الجر تبين مكان الأشياء. in تعني داخل: in the kitchen، وon تعني على السطح: on the table، وunder تعني تحت: under the bed. وnext to تعني بجانب، وbehind خلف، وin front of أمام، وbetween بين شيئين، وnear قريب من. وللسؤال عن المكان استخدم Where: Where is the key؟ والجواب: It is on the table.',
      examples: [
        { en: 'The keys are on the table.', ar: 'المفاتيح على الطاولة.' },
        { en: 'The cat is under the chair.', ar: 'القطة تحت الكرسي.' },
        { en: 'Where is my phone? It is in your bag.', ar: 'أين هاتفي؟ إنه في حقيبتك.' },
      ],
    },
    vocabulary: [
      { word: 'in', meaningAr: 'في (داخل)', example: 'The milk is in the fridge.' },
      { word: 'on', meaningAr: 'على', example: 'The keys are on the table.' },
      { word: 'under', meaningAr: 'تحت', example: 'The shoes are under the bed.' },
      { word: 'next to', meaningAr: 'بجانب', example: 'The mosque is next to the market.' },
      { word: 'behind', meaningAr: 'خلف', example: 'The ball is behind the door.' },
      { word: 'in front of', meaningAr: 'أمام', example: 'The car is in front of the house.' },
      { word: 'between', meaningAr: 'بين', example: 'The park is between the school and the mosque.' },
      { word: 'near', meaningAr: 'قريب من', example: 'I live near the park.' },
      { word: 'floor', meaningAr: 'الأرضية', example: 'The baby plays on the floor.' },
      { word: 'table', meaningAr: 'الطاولة', example: 'The cups are on the table.' },
      { word: 'where', meaningAr: 'أين', example: 'Where are the children?' },
      { word: 'here', meaningAr: 'هنا', example: 'Come here, please.' },
    ],
    scenario: [
      { en: 'The keys are on the table.', ar: 'المفاتيح على الطاولة.', d: 1 },
      { en: 'The cat is under the chair.', ar: 'القطة تحت الكرسي.', d: 1 },
      { en: 'I live near the park.', ar: 'أسكن بالقرب من الحديقة.', d: 1 },
      { en: 'The mosque is next to the market.', ar: 'الجامع بجانب السوق.', d: 2 },
      { en: 'The car is in front of the house.', ar: 'السيارة أمام المنزل.', d: 1 },
      { en: 'The ball is behind the door.', ar: 'الكرة خلف الباب.', d: 1 },
      { en: 'My shoes are under the bed.', ar: 'حذائي تحت السرير.', d: 1 },
      { en: 'The park is between the school and the mosque.', ar: 'الحديقة بين المدرسة والجامع.', d: 2 },
      { en: 'Sara sits next to me in class.', ar: 'تجلس سارة بجانبي في الصف.', d: 2 },
      { en: 'My phone is not in my bag.', ar: 'هاتفي ليس في حقيبتي.', d: 1 },
      { en: 'Where is my phone?', ar: 'أين هاتفي؟', d: 1 },
      { en: 'Where are the children?', ar: 'أين الأطفال؟', d: 1 },
      { en: 'Is the milk in the fridge?', ar: 'هل الحليب في الثلاجة؟', d: 2 },
      { en: 'Excuse me, where is the market?', ar: 'عفوا، أين السوق؟', d: 1 },
      { en: 'The market is next to the mosque.', ar: 'السوق بجانب الجامع.', d: 1 },
      { en: 'Please put the bag near the door.', ar: 'من فضلك ضع الحقيبة قرب الباب.', d: 2 },
      { en: 'The elevator is near the stairs.', ar: 'المصعد بالقرب من السلالم.', d: 2 },
      { en: 'The mirror is on the wall.', ar: 'المرآة على الحائط.', d: 1 },
    ],
    patterns: [
      {
        tmpl: '{O} is {L}.', arTmpl: '{O_ar} {L_ar}.',
        slots: {
          O: [
            { en: 'The key', ar: 'المفتاح' }, { en: 'The bag', ar: 'الحقيبة' },
            { en: 'The phone', ar: 'الهاتف' }, { en: 'The book', ar: 'الكتاب' },
            { en: 'The cup', ar: 'الكوب' }, { en: 'The cat', ar: 'القطة' },
            { en: 'The ball', ar: 'الكرة' },
          ],
          L: B.LOCATIONS,
        },
        tags: ['prepositions'], d: 1, limit: 30,
      },
      {
        tmpl: 'Where is the {N}?', arTmpl: 'أين {N_ar}؟',
        slots: {
          N: [
            { en: 'key', ar: 'المفتاح' }, { en: 'bag', ar: 'الحقيبة' },
            { en: 'phone', ar: 'الهاتف' }, { en: 'book', ar: 'الكتاب' },
            { en: 'car', ar: 'السيارة' }, { en: 'cup', ar: 'الكوب' },
            { en: 'cat', ar: 'القطة' },
          ],
        },
        tags: ['prepositions', 'questions'], d: 1, limit: 7,
      },
      {
        tmpl: '{S} {V} {L}.', arTmpl: '{S_ar} {V_ar} {L_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('sit', x.S.agr), ar: B.arPresent('sit', x.S.agr) }],
          L: [
            { en: 'in the garden', ar: 'في الحديقة' }, { en: 'in the kitchen', ar: 'في المطبخ' },
            { en: 'near the window', ar: 'بالقرب من النافذة' }, { en: 'in front of the school', ar: 'أمام المدرسة' },
            { en: 'in the office', ar: 'في المكتب' }, { en: 'at the bus stop', ar: 'في موقف الحافلة' },
          ],
        },
        tags: ['prepositions', 'present-simple'], d: 2, limit: 18,
      },
      {
        tmpl: '{O} is {P} {N}.', arTmpl: '{O_ar} {P_ar} {N_ar}.',
        slots: {
          O: [
            { en: 'The chair', ar: 'الكرسي' }, { en: 'The table', ar: 'الطاولة' },
            { en: 'The bed', ar: 'السرير' }, { en: 'The sofa', ar: 'الأريكة' },
            { en: 'The lamp', ar: 'المصباح' },
          ],
          P: [
            { en: 'next to', ar: 'بجانب' }, { en: 'behind', ar: 'خلف' },
            { en: 'in front of', ar: 'أمام' }, { en: 'near', ar: 'بالقرب من' },
          ],
          N: [
            { en: 'the door', ar: 'الباب' }, { en: 'the window', ar: 'النافذة' },
            { en: 'the wall', ar: 'الحائط' }, { en: 'the garden', ar: 'الحديقة' },
          ],
        },
        tags: ['prepositions'], d: 2, limit: 30,
      },
    ],
    fills: [
      { en: 'The keys are on the table.', ar: 'المفاتيح على الطاولة.', word: 'on', hint: 'حرف جر' },
      { en: 'The cat is under the chair.', ar: 'القطة تحت الكرسي.', word: 'under', hint: 'حرف جر' },
      { en: 'The mosque is next to the market.', ar: 'الجامع بجانب السوق.', word: 'market' },
      { en: 'The car is in front of the house.', ar: 'السيارة أمام المنزل.', word: 'front' },
      { en: 'My phone is not in my bag.', ar: 'هاتفي ليس في حقيبتي.', word: 'in', hint: 'حرف جر' },
      { en: 'Where are the children?', ar: 'أين الأطفال؟', word: 'Where', hint: 'أداة استفهام' },
      { en: 'Please put the bag near the door.', ar: 'من فضلك ضع الحقيبة قرب الباب.', word: 'near' },
      { en: 'The elevator is near the stairs.', ar: 'المصعد بالقرب من السلالم.', word: 'stairs' },
      { en: 'The park is between the school and the mosque.', ar: 'الحديقة بين المدرسة والجامع.', word: 'between' },
    ],
    orders: [
      { en: 'The keys are on the table.', ar: 'المفاتيح على الطاولة.' },
      { en: 'The cat is under the chair.', ar: 'القطة تحت الكرسي.' },
      { en: 'The car is in front of the house.', ar: 'السيارة أمام المنزل.' },
      { en: 'Where are the children?', ar: 'أين الأطفال؟' },
      { en: 'The park is between the school and the mosque.', ar: 'الحديقة بين المدرسة والجامع.' },
      { en: 'Please put the bag near the door.', ar: 'من فضلك ضع الحقيبة قرب الباب.' },
    ],
    mc: [
      { question: 'The cat is ___ the table. (تحت)', options: ['under', 'on', 'in', 'next to'], answerIndex: 0, ar: 'القطة ___ الطاولة. (تحت)' },
      { question: 'The bank is ___ the mosque. (بجانب)', options: ['next to', 'behind', 'under', 'in front of'], answerIndex: 0, ar: 'البنك ___ الجامع. (بجانب)' },
      { question: 'Which question asks about a place?', options: ['Where is the key?', 'What is your name?', 'How are you?', 'When do you eat?'], answerIndex: 0, ar: 'أي سؤال يستفسر عن المكان؟' },
      { question: 'The picture is ___ the wall. (على)', options: ['on', 'in', 'under', 'between'], answerIndex: 0, ar: 'الصورة ___ الحائط. (على)' },
    ],
  },

  /* ================= lesson 14 — Talking About the Weather ================= */
  {
    num: 14,
    tags: ['weather', 'present-simple'],
    objectives: [
      "Describe today's weather with It is + adjective",
      'Ask about the weather',
      'Talk about the weather in seasons and months',
    ],
    grammar: {
      explanation: 'We talk about the weather with "It is" + adjective: "It is sunny today", "It is cold in winter". We can also say "The weather is nice" or "The sky is cloudy". To ask, say "What is the weather like today?" or simply "Is it hot today?". Use "in" with seasons and months (in summer, in July) and "in the" with parts of the day (in the morning, in the evening). Rain, wind and snow are nouns: "I like the rain".',
      explanationAr: 'نتحدث عن الطقس بـ It is ثم صفة: It is sunny today، It is cold in winter. ويمكن أن نقول The weather is nice أو The sky is cloudy. وللسؤال نقول What is the weather like today؟ أو Is it hot today؟ استخدم in مع الفصول والشهور (in summer، in July) ومع أجزاء اليوم (in the morning، in the evening). أما rain وwind وsnow فأسماء نقول: I like the rain.',
      examples: [
        { en: 'The weather is nice today.', ar: 'الجو جميل اليوم.' },
        { en: 'It is very hot in July.', ar: 'الجو حار جدا في يوليو.' },
        { en: 'What is the weather like today? It is sunny and warm.', ar: 'كيف الطقس اليوم؟ الجو مشمس ودافئ.' },
      ],
    },
    vocabulary: [
      { word: 'weather', meaningAr: 'الطقس / الجو', example: 'The weather is nice today.', ipa: 'ˈwɛðə' },
      { word: 'sunny', meaningAr: 'مشمس', example: 'It is sunny in June.' },
      { word: 'rainy', meaningAr: 'ممطر', example: 'It is rainy in April.' },
      { word: 'cloudy', meaningAr: 'غائم', example: 'The sky is cloudy tonight.' },
      { word: 'windy', meaningAr: 'عاصف', example: 'It is windy near the sea.' },
      { word: 'hot', meaningAr: 'حار', example: 'It is very hot in July.' },
      { word: 'cold', meaningAr: 'بارد', example: 'It is cold in the morning.' },
      { word: 'warm', meaningAr: 'دافئ', example: 'The weather is warm in spring.' },
      { word: 'cool', meaningAr: 'معتدل', example: 'It is cool in the evening.' },
      { word: 'rain', meaningAr: 'المطر', example: 'I like the rain.' },
      { word: 'snow', meaningAr: 'الثلج', example: 'Snow is white and cold.' },
      { word: 'sun', meaningAr: 'الشمس', example: 'The sun is bright today.' },
    ],
    scenario: [
      { en: 'The weather is nice today.', ar: 'الجو جميل اليوم.', d: 1 },
      { en: 'It is cold in the morning.', ar: 'الجو بارد في الصباح.', d: 1 },
      { en: 'Is it rainy in April?', ar: 'هل الجو ممطر في أبريل؟', d: 1 },
      { en: 'The sky is cloudy tonight.', ar: 'السماء غائمة الليلة.', d: 1 },
      { en: 'I do not like the cold wind.', ar: 'لا أحب الريح الباردة.', d: 2 },
      { en: 'We drink hot tea in winter.', ar: 'نشرب الشاي الساخن في الشتاء.', d: 1 },
      { en: 'Do you like the rain?', ar: 'هل تحب المطر؟', d: 1 },
      { en: 'Yes, I love the rain in spring.', ar: 'نعم، أحب المطر في الربيع.', d: 1 },
      { en: 'It is very hot in July.', ar: 'الجو حار جدا في يوليو.', d: 1 },
      { en: 'We play outside in the summer.', ar: 'نلعب في الخارج في الصيف.', d: 2 },
      { en: 'The wind is strong near the sea.', ar: 'الريح قوية بالقرب من البحر.', d: 2 },
      { en: 'It is not cold in April.', ar: 'الجو ليس باردا في أبريل.', d: 2 },
      { en: 'What is the weather like today?', ar: 'كيف الطقس اليوم؟', d: 1 },
      { en: 'It is sunny and warm.', ar: 'الجو مشمس ودافئ.', d: 1 },
      { en: 'I read at home on rainy days.', ar: 'أقرأ في المنزل في الأيام الممطرة.', d: 2 },
      { en: 'Does it snow in your country?', ar: 'هل تثلج في بلدك؟', d: 2 },
      { en: 'The children wear warm clothes in winter.', ar: 'يلبس الأطفال ملابس دافئة في الشتاء.', d: 2 },
      { en: 'Please bring me a cup of tea.', ar: 'من فضلك أحضر لي كوبا من الشاي.', d: 1 },
    ],
    patterns: [
      {
        tmpl: '{W} is {A} today.', arTmpl: '{W_ar} {A_ar} اليوم.',
        slots: {
          W: [
            { en: 'The weather', ar: 'الجو', g: 'm' }, { en: 'The sky', ar: 'السماء', g: 'f' },
            { en: 'The wind', ar: 'الريح', g: 'f' }, { en: 'The sun', ar: 'الشمس', g: 'f' },
            { en: 'The rain', ar: 'المطر', g: 'm' },
          ],
          ADJ: B.WEATHER_ADJ,
          A: (x) => [(x.W.g === 'f'
            ? { en: x.ADJ.en, ar: WADJ_F[x.ADJ.en] }
            : { en: x.ADJ.en, ar: x.ADJ.ar })],
        },
        filter: (x) => !((x.W.en === 'The wind' && x.ADJ.en === 'windy')
          || (x.W.en === 'The rain' && x.ADJ.en === 'rainy')
          || (x.W.en === 'The sun' && x.ADJ.en === 'sunny')),
        tags: ['weather'], d: 1, limit: 24,
      },
      {
        tmpl: 'It is {A} in {M}.', arTmpl: 'الجو {A_ar} في {M_ar}.',
        slots: {
          A: B.WEATHER_ADJ,
          M: B.MONTHS,
        },
        tags: ['weather', 'time'], d: 2, limit: 30,
      },
      {
        tmpl: 'Do you like {W}?', arTmpl: 'هل تحب {W_ar}؟',
        slots: {
          W: [
            { en: 'the snow', ar: 'الثلج' }, { en: 'the sun', ar: 'الشمس' },
            { en: 'the wind', ar: 'الريح' }, { en: 'hot weather', ar: 'الجو الحار' },
            { en: 'cold weather', ar: 'الجو البارد' }, { en: 'warm weather', ar: 'الجو الدافئ' },
          ],
        },
        tags: ['weather', 'questions'], d: 1, limit: 6,
      },
      {
        tmpl: 'I wear {C} in {A} weather.', arTmpl: 'ألبس {C_ar} في الجو {A_ar}.',
        slots: {
          C: [
            { en: 'warm clothes', ar: 'ملابس دافئة' }, { en: 'light clothes', ar: 'ملابس خفيفة' },
            { en: 'a heavy jacket', ar: 'سترة ثقيلة' }, { en: 'a hat', ar: 'قبعة' },
          ],
          A: [
            { en: 'cold', ar: 'البارد' }, { en: 'hot', ar: 'الحار' },
            { en: 'sunny', ar: 'المشمس' }, { en: 'rainy', ar: 'الممطر' },
          ],
        },
        tags: ['weather', 'clothes'], d: 2, limit: 16,
      },
    ],
    fills: [
      { en: 'The weather is nice today.', ar: 'الجو جميل اليوم.', word: 'weather', hint: 'الطقس' },
      { en: 'It is cold in the morning.', ar: 'الجو بارد في الصباح.', word: 'cold', hint: 'صفة طقس' },
      { en: 'Is it rainy in April?', ar: 'هل الجو ممطر في أبريل؟', word: 'rainy' },
      { en: 'We drink hot tea in winter.', ar: 'نشرب الشاي الساخن في الشتاء.', word: 'tea' },
      { en: 'The wind is strong near the sea.', ar: 'الريح قوية بالقرب من البحر.', word: 'wind' },
      { en: 'What is the weather like today?', ar: 'كيف الطقس اليوم؟', word: 'What', hint: 'أداة استفهام' },
      { en: 'I read at home on rainy days.', ar: 'أقرأ في المنزل في الأيام الممطرة.', word: 'home' },
      { en: 'Does it snow in your country?', ar: 'هل تثلج في بلدك؟', word: 'snow' },
      { en: 'The children wear warm clothes in winter.', ar: 'يلبس الأطفال ملابس دافئة في الشتاء.', word: 'warm' },
    ],
    orders: [
      { en: 'The weather is nice today.', ar: 'الجو جميل اليوم.' },
      { en: 'It is very hot in July.', ar: 'الجو حار جدا في يوليو.' },
      { en: 'What is the weather like today?', ar: 'كيف الطقس اليوم؟' },
      { en: 'The wind is strong near the sea.', ar: 'الريح قوية بالقرب من البحر.' },
      { en: 'We drink hot tea in winter.', ar: 'نشرب الشاي الساخن في الشتاء.' },
      { en: 'Does it snow in your country?', ar: 'هل تثلج في بلدك؟' },
    ],
    mc: [
      { question: 'It is raining. You need:', options: ['an umbrella', 'a fan', 'a knife', 'a lamp'], answerIndex: 0, ar: 'إنها تمطر. تحتاج:' },
      { question: 'The opposite of "hot" is:', options: ['cold', 'sunny', 'windy', 'warm'], answerIndex: 0, ar: 'عكس hot هو:' },
      { question: 'How do you ask about the weather?', options: ['What is the weather like today?', 'What is your name?', 'Where is the cat?', 'How old are you?'], answerIndex: 0, ar: 'كيف تسأل عن الطقس؟' },
      { question: 'In summer, the weather is usually:', options: ['hot', 'cold', 'snowy', 'freezing'], answerIndex: 0, ar: 'في الصيف يكون الجو عادة:' },
      { question: '"It is windy" means:', options: ['الجو عاصف', 'الجو ممطر', 'الجو مشمس', 'الجو غائم'], answerIndex: 0, ar: 'ما معنى It is windy؟' },
    ],
  },

  /* ================= lesson 15 — Basic Home Vocabulary ================= */
  {
    num: 15,
    tags: ['home', 'vocabulary'],
    objectives: [
      'Name the rooms of a house',
      'Name common furniture and home objects',
      'Say where things are in the home',
    ],
    grammar: {
      explanation: 'The home words you need every day: rooms (kitchen, bathroom, bedroom, living room), furniture (table, chair, bed, sofa) and parts of the house (door, window, wall, roof). Use "in" for things inside rooms: "The fridge is in the kitchen". Use "the" for the things in your house because they are known: "Close the door", "Open the window". To ask: "Where is the bathroom?" and "How many rooms are in your house?".',
      explanationAr: 'كلمات المنزل التي تحتاجها يوميا: الغرف (المطبخ، الحمام، غرفة النوم، غرفة الجلوس)، والأثاث (الطاولة، الكرسي، السرير، الأريكة)، وأجزاء المنزل (الباب، النافذة، الحائط، السطح). استخدم in للأشياء داخل الغرف: The fridge is in the kitchen. واستخدم the لأشياء منزلك لأنها معروفة: Close the door، Open the window. وللسؤال: Where is the bathroom؟ وHow many rooms are in your house؟',
      examples: [
        { en: 'The kitchen is small and clean.', ar: 'المطبخ صغير ونظيف.' },
        { en: 'We watch TV in the living room.', ar: 'نشاهد التلفاز في غرفة الجلوس.' },
        { en: 'Where is the bathroom? It is next to the kitchen.', ar: 'أين الحمام؟ إنه بجانب المطبخ.' },
      ],
    },
    vocabulary: [
      { word: 'house', meaningAr: 'المنزل', example: 'Our house has two bedrooms.', ipa: 'haʊs' },
      { word: 'door', meaningAr: 'الباب', example: 'Close the door, please.' },
      { word: 'window', meaningAr: 'النافذة', example: 'Open the window, please.' },
      { word: 'table', meaningAr: 'الطاولة', example: 'We eat at the table.' },
      { word: 'bed', meaningAr: 'السرير', example: 'My bed is near the window.' },
      { word: 'kitchen', meaningAr: 'المطبخ', example: 'My mother is in the kitchen.' },
      { word: 'bathroom', meaningAr: 'الحمام', example: 'Where is the bathroom?' },
      { word: 'bedroom', meaningAr: 'غرفة النوم', example: 'The children sleep in one bedroom.' },
      { word: 'living room', meaningAr: 'غرفة الجلوس', example: 'We watch TV in the living room.' },
      { word: 'chair', meaningAr: 'الكرسي', example: 'Sit on this chair, please.' },
      { word: 'fridge', meaningAr: 'الثلاجة', example: 'The milk is in the fridge.' },
      { word: 'garden', meaningAr: 'الحديقة', example: 'There are flowers in the garden.' },
    ],
    scenario: [
      { en: 'Our house has two bedrooms.', ar: 'منزلنا فيه غرفتا نوم.', d: 1 },
      { en: 'The kitchen is next to the living room.', ar: 'المطبخ بجانب غرفة الجلوس.', d: 2 },
      { en: 'I clean the bathroom on Saturday.', ar: 'أنظف الحمام يوم السبت.', d: 1 },
      { en: 'The milk is in the fridge.', ar: 'الحليب في الثلاجة.', d: 1 },
      { en: 'We eat dinner at the big table.', ar: 'نتناول العشاء على الطاولة الكبيرة.', d: 2 },
      { en: 'My bed is near the window.', ar: 'سريري بالقرب من النافذة.', d: 1 },
      { en: 'Please turn on the light.', ar: 'من فضلك أضئ الضوء.', d: 1 },
      { en: 'The bathroom is not big.', ar: 'الحمام ليس كبيرا.', d: 1 },
      { en: 'Where is the bathroom?', ar: 'أين الحمام؟', d: 1 },
      { en: 'How many rooms are in your house?', ar: 'كم غرفة في منزلك؟', d: 2 },
      { en: 'Is your house big?', ar: 'هل منزلك كبير؟', d: 1 },
      { en: 'Yes, it has a beautiful garden.', ar: 'نعم، فيه حديقة جميلة.', d: 1 },
      { en: 'My mother is in the kitchen.', ar: 'أمي في المطبخ.', d: 1 },
      { en: 'The children sleep in one bedroom.', ar: 'ينام الأطفال في غرفة نوم واحدة.', d: 2 },
      { en: 'The doors of the house are brown.', ar: 'أبواب المنزل بنية.', d: 2 },
      { en: 'We sit on the balcony in the evening.', ar: 'نجلس على الشرفة في المساء.', d: 2 },
      { en: 'The mirror is in the bathroom.', ar: 'المرآة في الحمام.', d: 1 },
      { en: 'Welcome to our new house!', ar: 'أهلا بكم في منزلنا الجديد!', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'The {R} is {A}.', arTmpl: '{R_ar} {A_ar}.',
        slots: {
          R: B.ROOMS,
          A: (x) => HOME_ADJ.map((a) => ({ en: a.en, ar: x.R.g === 'f' ? a.f : a.m })),
        },
        tags: ['home', 'adjectives'], d: 1, limit: 16,
      },
      {
        tmpl: '{O} is in the {R}.', arTmpl: '{O_ar} في {R_ar}.',
        slots: {
          O: [
            { en: 'The table', ar: 'الطاولة' }, { en: 'The chair', ar: 'الكرسي' },
            { en: 'The bed', ar: 'السرير' }, { en: 'The sofa', ar: 'الأريكة' },
            { en: 'The fridge', ar: 'الثلاجة' }, { en: 'The mirror', ar: 'المرآة' },
          ],
          R: [
            { en: 'kitchen', ar: 'المطبخ' }, { en: 'bedroom', ar: 'غرفة النوم' },
            { en: 'living room', ar: 'غرفة الجلوس' }, { en: 'balcony', ar: 'الشرفة' },
            { en: 'garden', ar: 'الحديقة' }, { en: 'garage', ar: 'المرآب' },
          ],
        },
        tags: ['home', 'prepositions'], d: 1, limit: 18,
      },
      {
        tmpl: 'The {O} of the house is {C}.', arTmpl: '{O_ar} المنزل {C_ar}.',
        slots: {
          O: [
            { en: 'door', ar: 'باب', g: 'm' }, { en: 'window', ar: 'نافذة', g: 'f' },
            { en: 'wall', ar: 'حائط', g: 'm' }, { en: 'floor', ar: 'أرضية', g: 'f' },
            { en: 'roof', ar: 'سطح', g: 'm' },
          ],
          C0: B.COLORS,
          C: (x) => [(x.O.g === 'f'
            ? { en: x.C0.en, ar: x.C0.f }
            : { en: x.C0.en, ar: x.C0.ar })],
        },
        tags: ['home', 'colors'], d: 2, limit: 24,
      },
      {
        tmpl: 'We {V} in the {R}.', arTmpl: '{V_ar} في {R_ar}.',
        slots: {
          V: [
            { en: 'watch TV', ar: 'نشاهد التلفاز' }, { en: 'eat dinner', ar: 'نتناول العشاء' },
            { en: 'drink tea', ar: 'نشرب الشاي' }, { en: 'sit together', ar: 'نجلس معا' },
          ],
          R: [
            { en: 'living room', ar: 'غرفة الجلوس' }, { en: 'kitchen', ar: 'المطبخ' },
            { en: 'garden', ar: 'الحديقة' }, { en: 'balcony', ar: 'الشرفة' },
          ],
        },
        tags: ['home', 'present-simple'], d: 1, limit: 16,
      },
      {
        tmpl: 'Is the {O} in the {R}?', arTmpl: 'هل {O_ar} في {R_ar}؟',
        slots: {
          O: [
            { en: 'table', ar: 'الطاولة' }, { en: 'chair', ar: 'الكرسي' },
            { en: 'bed', ar: 'السرير' }, { en: 'sofa', ar: 'الأريكة' },
            { en: 'fridge', ar: 'الثلاجة' }, { en: 'mirror', ar: 'المرآة' },
          ],
          R: [
            { en: 'kitchen', ar: 'المطبخ' }, { en: 'bedroom', ar: 'غرفة النوم' },
            { en: 'living room', ar: 'غرفة الجلوس' }, { en: 'balcony', ar: 'الشرفة' },
            { en: 'garden', ar: 'الحديقة' }, { en: 'garage', ar: 'المرآب' },
          ],
        },
        tags: ['home', 'questions'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'Our house has two bedrooms.', ar: 'منزلنا فيه غرفتا نوم.', word: 'house' },
      { en: 'The milk is in the fridge.', ar: 'الحليب في الثلاجة.', word: 'fridge', hint: 'من أجهزة المطبخ' },
      { en: 'I clean the bathroom on Saturday.', ar: 'أنظف الحمام يوم السبت.', word: 'clean' },
      { en: 'Please turn on the light.', ar: 'من فضلك أضئ الضوء.', word: 'light' },
      { en: 'Where is the bathroom?', ar: 'أين الحمام؟', word: 'bathroom' },
      { en: 'How many rooms are in your house?', ar: 'كم غرفة في منزلك؟', word: 'rooms' },
      { en: 'The car is in the garage.', ar: 'السيارة في المرآب.', word: 'garage' },
      { en: 'My mother is in the kitchen.', ar: 'أمي في المطبخ.', word: 'kitchen' },
      { en: 'The doors of the house are brown.', ar: 'أبواب المنزل بنية.', word: 'doors' },
    ],
    orders: [
      { en: 'Our house has two bedrooms.', ar: 'منزلنا فيه غرفتا نوم.' },
      { en: 'The milk is in the fridge.', ar: 'الحليب في الثلاجة.' },
      { en: 'Where is the bathroom?', ar: 'أين الحمام؟' },
      { en: 'The car is in the garage.', ar: 'السيارة في المرآب.' },
      { en: 'Please turn on the light.', ar: 'من فضلك أضئ الضوء.' },
      { en: 'The doors of the house are brown.', ar: 'أبواب المنزل بنية.' },
    ],
    mc: [
      { question: 'Where do you cook food?', options: ['in the kitchen', 'in the bedroom', 'in the car', 'on the roof'], answerIndex: 0, ar: 'أين تطبخ الطعام؟' },
      { question: 'You sleep in the:', options: ['bed', 'fridge', 'garage', 'window'], answerIndex: 0, ar: 'تنام في:' },
      { question: 'The opposite of a small house is a:', options: ['big house', 'old door', 'cold room', 'new day'], answerIndex: 0, ar: 'عكس المنزل الصغير هو:' },
      { question: '"غرفة الجلوس" in English is:', options: ['living room', 'kitchen', 'bathroom', 'balcony'], answerIndex: 0, ar: 'ما معنى غرفة الجلوس بالإنجليزية؟' },
      { question: 'We enter the house through the:', options: ['door', 'fridge', 'mirror', 'table'], answerIndex: 0, ar: 'ندخل المنزل من:' },
    ],
  },
];
