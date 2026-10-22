/* ============================================================
   v2 section data — s03-a3.js
   Home & Family · lessons 53–58 (kitchen, groceries, household
   problems, utilities, keys, pets)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

/* ---------- local helper banks (topic-specific, definite forms) ---------- */

/* kitchen tools, definite Arabic, for "The {K} is in the {P}." grids */
const KT_D = [
  { en: 'knife', ar: 'السكين' }, { en: 'spoon', ar: 'الملعقة' },
  { en: 'fork', ar: 'الشوكة' }, { en: 'plate', ar: 'الطبق' },
  { en: 'cup', ar: 'الكوب' }, { en: 'pan', ar: 'المقلاة' },
  { en: 'pot', ar: 'القدر' }, { en: 'bowl', ar: 'السلطانية' },
  { en: 'kettle', ar: 'الغلاية' }, { en: 'cutting board', ar: 'لوح التقطيع' },
  { en: 'strainer', ar: 'المنخل' }, { en: 'tray', ar: 'الصينية' },
];

/* where kitchen things are kept */
const KT_PLACE = [
  { en: 'drawer', ar: 'الدرج' }, { en: 'cupboard', ar: 'خزانة المطبخ' },
  { en: 'shelf', ar: 'الرف' }, { en: 'sink', ar: 'الحوض' },
  { en: 'box', ar: 'الصندوق' },
];

/* gendered broken-thing adjectives */
const BROKEN_ADJ = [
  { en: 'broken', m: 'مكسور', f: 'مكسورة' },
  { en: 'leaking', m: 'مسرب', f: 'مسربة' },
  { en: 'stuck', m: 'عالق', f: 'عالقة' },
  { en: 'noisy', m: 'صاخب', f: 'صاخبة' },
  { en: 'old', m: 'قديم', f: 'قديمة' },
];

/* quantifier phrases for groceries */
const GROcery_Q = [
  { en: 'a kilo', ar: 'كيلو' }, { en: 'two kilos', ar: 'كيلوهين' },
  { en: 'half a kilo', ar: 'نصف كيلو' }, { en: 'a bag', ar: 'كيس' },
];

/* pets + where they can be */
const PET_A = [
  { en: 'cat', ar: 'القطة', ok: ['in the cage', 'in the house', 'on the sofa', 'outside'] },
  { en: 'dog', ar: 'الكلب', ok: ['in the house', 'on the sofa', 'outside'] },
  { en: 'bird', ar: 'الطائر', ok: ['in the cage', 'outside'] },
  { en: 'rabbit', ar: 'الأرنب', ok: ['in the cage', 'outside'] },
  { en: 'turtle', ar: 'السلحفاة', ok: ['outside'] },
];

const PET_L = [
  { en: 'in the cage', ar: 'في القفص' }, { en: 'in the house', ar: 'في المنزل' },
  { en: 'on the sofa', ar: 'على الأريكة' }, { en: 'outside', ar: 'خارج المنزل' },
];

export const lessons = [

  /* ================= lesson 53 — Kitchen Tools ================= */
  {
    num: 53,
    tags: ['kitchen', 'household'],
    objectives: [
      'Name common kitchen tools',
      'Say where kitchen things are kept',
      'Ask for tools and give simple instructions',
    ],
    grammar: {
      explanation: 'In the kitchen we use short imperatives: "Pass me the spoon", "Wash the plates", "Put the rice in the pot". Add "please" to be polite. To say where a tool is kept, use be + place: "The knife is in the drawer", "The spoons are in the cupboard" (plural verb are). Use "Where is/are ...?" to ask. Remember: one knife but two knives, one loaf but two loaves.',
      explanationAr: 'في المطبخ نستخدم الأمر المختصر: Pass me the spoon، Wash the plates، Put the rice in the pot. وأضف please للتأدب. ولتقول أين تُحفظ الأداة استخدم فعل الكينونة مع المكان: The knife is in the drawer، والمفردهم The spoons are in the cupboard. وللسؤال استخدم Where is/are. وتذكر: مفرد knife وجمعها knives.',
      examples: [
        { en: 'Where is the big knife? It is in the drawer.', ar: 'أين السكين الكبيرة؟ إنها في الدرج.' },
        { en: 'Please pass me the salt.', ar: 'مرر لي الملح من فضلك.' },
        { en: 'The kettle is boiling. Wash the cups, please.', ar: 'الغلاية تغلي. اغسل الأكواب من فضلك.' },
      ],
    },
    vocabulary: [
      { word: 'knife', meaningAr: 'سكين', example: 'The knife is very sharp.', ipa: 'naɪf' },
      { word: 'spoon', meaningAr: 'ملعقة', example: 'Give the baby a small spoon.' },
      { word: 'fork', meaningAr: 'شوكة', example: 'Use a fork for the meat.' },
      { word: 'pan', meaningAr: 'مقلاة', example: 'Heat the pan before cooking.' },
      { word: 'pot', meaningAr: 'قدر', example: 'The soup is in the big pot.' },
      { word: 'kettle', meaningAr: 'غلاية', example: 'Boil water in the kettle for tea.' },
      { word: 'cutting board', meaningAr: 'لوح تقطيع', example: 'Cut the bread on the cutting board.' },
      { word: 'drawer', meaningAr: 'درج', example: 'The forks are in the drawer.' },
      { word: 'cupboard', meaningAr: 'خزانة المطبخ', example: 'The cups are in the cupboard.' },
      { word: 'sharp', meaningAr: 'حاد', example: 'Be careful, this knife is sharp.' },
      { word: 'boil', meaningAr: 'يغلي', example: 'The water is boiling now.' },
      { word: 'wash', meaningAr: 'يغسل', example: 'Wash your hands before cooking.' },
    ],
    scenario: [
      { en: 'Where is the big knife?', ar: 'أين السكين الكبيرة؟', d: 1 },
      { en: 'The big knife is in the drawer.', ar: 'السكين الكبيرة في الدرج.', d: 1 },
      { en: 'Please bring me a clean spoon.', ar: 'أحضر لي ملعقة نظيفة من فضلك.', d: 1 },
      { en: 'I need a fork for the salad.', ar: 'أحتاج شوكة للسلطة.', d: 1 },
      { en: 'The pan is on the stove.', ar: 'المقلاة على الموقد.', d: 1 },
      { en: 'Put the rice in the big pot.', ar: 'ضع الأرز في القدر الكبير.', d: 1 },
      { en: 'The kettle is boiling.', ar: 'الغلاية تغلي.', d: 1 },
      { en: 'Use the cutting board for the onions.', ar: 'استخدم لوح التقطيع للبصل.', d: 2 },
      { en: 'Wash the plates, please.', ar: 'اغسل الأطباق من فضلك.', d: 1 },
      { en: 'Be careful, the knife is sharp.', ar: 'احترس، السكين حادة.', d: 2 },
      { en: 'The spoons are in the cupboard.', ar: 'الملاعق في الخزانة.', d: 1 },
      { en: 'I bought a new kettle yesterday.', ar: 'اشتريت غلاية جديدة أمس.', d: 2 },
      { en: 'Did you wash the pan?', ar: 'هل غسلت المقلاة؟', d: 2 },
      { en: 'No, I did not wash it yet.', ar: 'لا، لم أغسلها بعد.', d: 2 },
      { en: 'We need two more forks.', ar: 'نحتاج شوكتين إضافيتين.', d: 2 },
      { en: 'My mother keeps the pots here.', ar: 'تحتفظ أمي بالقدور هنا.', d: 2 },
      { en: 'Do we have a big strainer?', ar: 'هل لدينا منخل كبير؟', d: 2 },
      { en: 'Yes, it is on the top shelf.', ar: 'نعم، إنه على الرف العلوي.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'The {K} is in the {P}.', arTmpl: '{K_ar} في {P_ar}.',
        slots: { K: KT_D, P: KT_PLACE },
        tags: ['kitchen', 'prepositions'], d: 1, limit: 24,
      },
      {
        tmpl: 'Please pass me {K}.', arTmpl: 'مرر لي {K_ar} من فضلك.',
        slots: {
          K: [
            { en: 'the salt', ar: 'الملح' }, { en: 'the spoon', ar: 'الملعقة' },
            { en: 'the knife', ar: 'السكين' }, { en: 'the fork', ar: 'الشوكة' },
            { en: 'the plate', ar: 'الطبق' }, { en: 'the cup', ar: 'الكوب' },
            { en: 'the pepper', ar: 'الفلفل' },
          ],
        },
        tags: ['kitchen', 'imperative'], d: 1, limit: 6,
      },
      {
        tmpl: 'I will wash {K} after lunch.', arTmpl: 'سأغسل {K_ar} بعد الغداء.',
        slots: {
          K: [
            { en: 'the dishes', ar: 'الأطباق' }, { en: 'the cups', ar: 'الأكواب' },
            { en: 'the forks', ar: 'الشوك' }, { en: 'the knives', ar: 'السكاكين' },
            { en: 'the pans', ar: 'المقالي' }, { en: 'the spoons', ar: 'الملاعق' },
          ],
        },
        tags: ['kitchen', 'future'], d: 2, limit: 6,
      },
      {
        tmpl: 'Where is the {K}?', arTmpl: 'أين {K_ar}؟',
        slots: {
          K: [
            { en: 'big pot', ar: 'القدر الكبير' }, { en: 'small knife', ar: 'السكين الصغيرة' },
            { en: 'kettle', ar: 'الغلاية' }, { en: 'cutting board', ar: 'لوح التقطيع' },
            { en: 'strainer', ar: 'المنخل' }, { en: 'tray', ar: 'الصينية' },
          ],
        },
        tags: ['kitchen', 'questions'], d: 1, limit: 6,
      },
    ],
    fills: [
      { en: 'The big knife is in the drawer.', ar: 'السكين الكبيرة في الدرج.', word: 'drawer', hint: 'مكان الحفظ' },
      { en: 'Please bring me a clean spoon.', ar: 'أحضر لي ملعقة نظيفة من فضلك.', word: 'spoon' },
      { en: 'The kettle is boiling.', ar: 'الغلاية تغلي.', word: 'kettle' },
      { en: 'Use the cutting board for the onions.', ar: 'استخدم لوح التقطيع للبصل.', word: 'cutting', hint: 'أداة' },
      { en: 'Be careful, the knife is sharp.', ar: 'احترس، السكين حادة.', word: 'sharp', hint: 'صفة' },
      { en: 'I bought a new kettle yesterday.', ar: 'اشتريت غلاية جديدة أمس.', word: 'bought', hint: 'فعل ماض' },
      { en: 'The spoons are in the cupboard.', ar: 'الملاعق في الخزانة.', word: 'cupboard' },
      { en: 'Did you wash the pan?', ar: 'هل غسلت المقلاة؟', word: 'wash' },
    ],
    orders: [
      { en: 'The big knife is in the drawer.', ar: 'السكين الكبيرة في الدرج.' },
      { en: 'Please pass me the small plate.', ar: 'مرر لي الطبق الصغير من فضلك.' },
      { en: 'Where is the big pot?', ar: 'أين القدر الكبير؟' },
      { en: 'I bought a new kettle yesterday.', ar: 'اشتريت غلاية جديدة أمس.' },
      { en: 'The kettle is boiling now.', ar: 'الغلاية تغلي الآن.' },
      { en: 'Put the rice in the big pot.', ar: 'ضع الأرز في القدر الكبير.' },
    ],
    mc: [
      { question: 'Which tool do you use to cut bread?', options: ['a knife', 'a kettle', 'a plate', 'a cup'], answerIndex: 0, ar: 'أي أداة تستخدم لتقطيع الخبز؟' },
      { question: 'Where do we boil water?', options: ['in a kettle', 'in a plate', 'in a drawer', 'on a tray'], answerIndex: 0, ar: 'أين نغلي الماء؟' },
      { question: 'You eat soup with a ___', options: ['spoon', 'fork', 'knife', 'kettle'], answerIndex: 0, ar: 'تأكل الشوربة بـ ___' },
      { question: '"The pan is hot" means:', options: ['المقلاة ساخنة', 'المقلاة نظيفة', 'المقلاة في الخزانة', 'المقلاة صغيرة'], answerIndex: 0, ar: 'ما معنى The pan is hot؟' },
    ],
  },

  /* ================= lesson 54 — Grocery Shopping ================= */
  {
    num: 54,
    tags: ['shopping', 'food'],
    objectives: [
      'Buy food with quantifiers: a kilo of, a bottle of, a loaf of',
      'Ask and answer about prices at the grocery store',
      'Write and use a simple shopping list',
    ],
    grammar: {
      explanation: 'At the grocery store we count food with measure words: "a kilo of tomatoes", "two kilos of onions", "a bottle of oil", "a loaf of bread", "a bag of rice". The food noun stays singular after "of": a kilo of rice (not rices). Ask the price with "How much is a kilo of tomatoes?". Use "cheap" for a low price and "expensive" for a high price. Talk about the future with will: "I will pay with my card".',
      explanationAr: 'في متجر البقالة نعد الطعام بكلمات قياس: a kilo of tomatoes، two kilos of onions، a bottle of oil، a loaf of bread، a bag of rice. ويبقى الاسم بعد of مفردا: a kilo of rice. واسأل عن السعر بـ How much is a kilo of tomatoes؟ واستخدم cheap للسعر المنخفض وexpensive للمرتفع. وللتحدث عن المستقبل استخدم will: I will pay with my card.',
      examples: [
        { en: 'I need a kilo of tomatoes and a loaf of bread.', ar: 'أحتاج كيلو من الطماطم ورغيفا من الخبز.' },
        { en: 'How much is a bottle of oil? It is five dollars.', ar: 'كم سعر زجاجة الزيت؟ بخمسة دولارات.' },
        { en: 'The bread is cheap today. I will buy two loaves.', ar: 'الخبز رخيص اليوم. سأشتري رغيفين.' },
      ],
    },
    vocabulary: [
      { word: 'grocery store', meaningAr: 'متجر البقالة', example: 'The grocery store is near my house.' },
      { word: 'shopping list', meaningAr: 'قائمة المشتريات', example: 'Read the shopping list to me.' },
      { word: 'kilo', meaningAr: 'كيلوغرام', example: 'I want a kilo of rice.', ipa: 'ˈkiːloʊ' },
      { word: 'bottle', meaningAr: 'زجاجة', example: 'Buy a bottle of oil, please.' },
      { word: 'loaf', meaningAr: 'رغيف', example: 'This loaf of bread is fresh.' },
      { word: 'bag', meaningAr: 'كيس / حقيبة', example: 'Put the eggs in a bag.' },
      { word: 'price', meaningAr: 'السعر', example: 'The price of milk went up.' },
      { word: 'cheap', meaningAr: 'رخيص', example: 'The bananas are cheap today.' },
      { word: 'expensive', meaningAr: 'غالٍ', example: 'The meat is expensive this week.' },
      { word: 'market', meaningAr: 'سوق', example: 'We buy vegetables at the market.' },
      { word: 'money', meaningAr: 'نقود', example: 'Take this money with you.' },
      { word: 'total', meaningAr: 'المجموع', example: 'The total is twelve dollars.' },
    ],
    scenario: [
      { en: 'I am going to the grocery store.', ar: 'أنا ذاهب إلى متجر البقالة.', d: 1 },
      { en: 'I need a kilo of tomatoes.', ar: 'أحتاج كيلو من الطماطم.', d: 1 },
      { en: 'Please buy a loaf of bread.', ar: 'اشترِ رغيف خبز من فضلك.', d: 1 },
      { en: 'How much is a bottle of oil?', ar: 'كم سعر زجاجة الزيت؟', d: 2 },
      { en: 'It is five dollars.', ar: 'بخمسة دولارات.', d: 1 },
      { en: 'The tomatoes are expensive today.', ar: 'الطماطم غالية اليوم.', d: 2 },
      { en: 'The bread is cheap at the market.', ar: 'الخبز رخيص في السوق.', d: 2 },
      { en: 'Did you bring the shopping list?', ar: 'هل أحضرت قائمة المشتريات؟', d: 2 },
      { en: 'Yes, it is in my bag.', ar: 'نعم، إنها في حقيبتي.', d: 1 },
      { en: 'We do not need sugar this week.', ar: 'لا نحتاج السكر هذا الأسبوع.', d: 2 },
      { en: 'She bought two kilos of oranges.', ar: 'اشترت كيلوهين من البرتقال.', d: 2 },
      { en: 'The bag is very heavy.', ar: 'الحقيبة ثقيلة جدا.', d: 1 },
      { en: 'I will pay with my card.', ar: 'سأدفع ببطاقتي.', d: 2 },
      { en: 'Put the eggs in the bag carefully.', ar: 'ضع البيض في الكيس بعناية.', d: 2 },
      { en: 'The price of meat is high.', ar: 'سعر اللحم مرتفع.', d: 2 },
      { en: 'Where is the rice?', ar: 'أين الأرز؟', d: 1 },
      { en: 'It is next to the flour.', ar: 'إنه بجانب الدقيق.', d: 2 },
      { en: 'How much are the eggs?', ar: 'كم سعر البيض؟', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I need {Q} of {F}.', arTmpl: 'أحتاج {Q_ar} من {F_ar}.',
        slots: {
          Q: GROcery_Q,
          F: [
            { en: 'tomatoes', ar: 'الطماطم' }, { en: 'onions', ar: 'البصل' },
            { en: 'potatoes', ar: 'البطاطس' }, { en: 'rice', ar: 'الأرز' },
            { en: 'sugar', ar: 'السكر' }, { en: 'lentils', ar: 'العدس' },
          ],
        },
        tags: ['shopping', 'food'], d: 1, limit: 20,
      },
      {
        tmpl: 'How much is {I}?', arTmpl: 'كم سعر {I_ar}؟',
        slots: {
          I: [
            { en: 'a kilo of tomatoes', ar: 'كيلو الطماطم' }, { en: 'a bottle of oil', ar: 'زجاجة الزيت' },
            { en: 'a loaf of bread', ar: 'رغيف الخبز' }, { en: 'a bag of rice', ar: 'كيس الأرز' },
            { en: 'a box of cookies', ar: 'علبة البسكويت' }, { en: 'a kilo of grapes', ar: 'كيلو العنب' },
          ],
        },
        tags: ['shopping', 'questions'], d: 1, limit: 6,
      },
      {
        tmpl: 'She will buy {F} at the market.', arTmpl: 'ستشتري {F_ar} من السوق.',
        slots: {
          F: [
            { en: 'the tomatoes', ar: 'الطماطم' }, { en: 'the onions', ar: 'البصل' },
            { en: 'the potatoes', ar: 'البطاطس' }, { en: 'the meat', ar: 'اللحم' },
            { en: 'the grapes', ar: 'العنب' }, { en: 'the cookies', ar: 'البسكويت' },
          ],
        },
        tags: ['shopping', 'future'], d: 2, limit: 6,
      },
      {
        tmpl: 'Put the {G} in the bag, please.', arTmpl: 'ضع {G_ar} في الكيس من فضلك.',
        slots: {
          G: [
            { en: 'eggs', ar: 'البيض' }, { en: 'cheese', ar: 'الجبن' },
            { en: 'milk', ar: 'الحليب' }, { en: 'bread', ar: 'الخبز' },
            { en: 'butter', ar: 'الزبدة' }, { en: 'vegetables', ar: 'الخضار' },
          ],
        },
        tags: ['shopping', 'imperative'], d: 1, limit: 6,
      },
    ],
    fills: [
      { en: 'I need a kilo of tomatoes.', ar: 'أحتاج كيلو من الطماطم.', word: 'kilo', hint: 'قياس' },
      { en: 'Please buy a loaf of bread.', ar: 'اشترِ رغيف خبز من فضلك.', word: 'loaf' },
      { en: 'How much is a bottle of oil?', ar: 'كم سعر زجاجة الزيت؟', word: 'bottle' },
      { en: 'Did you bring the shopping list?', ar: 'هل أحضرت قائمة المشتريات؟', word: 'shopping', hint: 'قائمة' },
      { en: 'The bread is cheap at the market.', ar: 'الخبز رخيص في السوق.', word: 'cheap', hint: 'صفة سعر' },
      { en: 'The price of meat is high.', ar: 'سعر اللحم مرتفع.', word: 'price' },
      { en: 'I will pay with my card.', ar: 'سأدفع ببطاقتي.', word: 'pay', hint: 'فعل' },
      { en: 'The total is twelve dollars.', ar: 'المجموع اثنا عشر دولارا.', word: 'total', hint: 'حساب' },
    ],
    orders: [
      { en: 'I need a kilo of tomatoes.', ar: 'أحتاج كيلو من الطماطم.' },
      { en: 'How much is a bottle of oil?', ar: 'كم سعر زجاجة الزيت؟' },
      { en: 'The bread is cheap at the market.', ar: 'الخبز رخيص في السوق.' },
      { en: 'She bought two kilos of oranges.', ar: 'اشترت كيلوهين من البرتقال.' },
      { en: 'Put the eggs in the bag carefully.', ar: 'ضع البيض في الكيس بعناية.' },
      { en: 'The price of meat is very high.', ar: 'سعر اللحم مرتفع جدا.' },
    ],
    mc: [
      { question: 'What do you check before you go shopping?', options: ['the shopping list', 'the drawer', 'the kettle', 'the mat'], answerIndex: 0, ar: 'ماذا تفحص قبل الذهاب للتسوق؟' },
      { question: 'We buy olive oil in a ___', options: ['bottle', 'loaf', 'kilo', 'mat'], answerIndex: 0, ar: 'نشتري زيت الزيتون في زجاجة.' },
      { question: 'The bread costs one dollar. It is ___', options: ['cheap', 'broken', 'locked', 'dark'], answerIndex: 0, ar: 'الخبز سعره دولار واحد، فهو ___' },
      { question: '"a loaf of bread" means:', options: ['رغيف خبز', 'كيلو خبز', 'زجاجة خبز', 'كيس خبز'], answerIndex: 0, ar: 'ما معنى a loaf of bread؟' },
    ],
  },

  /* ================= lesson 55 — Household Problems ================= */
  {
    num: 55,
    tags: ['home', 'problems'],
    objectives: [
      'Describe broken things at home',
      'Call the right repairman for a problem',
      'Ask for and offer help politely',
    ],
    grammar: {
      explanation: 'Describe problems with be + adjective: "The tap is leaking", "The AC is broken", "The door is stuck". For machines, use "does not work": "The heater does not work". To ask for help, use "Can you fix ... ?" or the polite request "Call a repairman, please". Talk about the future with will or going to: "I will call the plumber tomorrow", "The repairman is going to come at noon".',
      explanationAr: 'صف المشكلات بفعل الكينونة مع الصفة: The tap is leaking، The AC is broken، The door is stuck. وللأجهزة استخدم does not work: The heater does not work. ولتطلب المساعدة قل Can you fix ...؟ أو الطلب المهذب Call a repairman, please. وللحديث عن المستقبل استخدم will أو going to: I will call the plumber tomorrow، The repairman is going to come at noon.',
      examples: [
        { en: 'The light does not work. Can you fix it?', ar: 'الضوء لا يعمل. هل يمكنك إصلاحه؟' },
        { en: 'The pipe under the sink is leaking.', ar: 'الأنبوب تحت الحوض مسرب.' },
        { en: 'I will call an electrician this afternoon.', ar: 'سأتصل بكهربائي بعد الظهر.' },
      ],
    },
    vocabulary: [
      { word: 'broken', meaningAr: 'معطل / مكسور', example: 'The window is broken.', ipa: 'ˈbroʊkən' },
      { word: 'leaking', meaningAr: 'مسرب', example: 'The tap is leaking again.' },
      { word: 'repairman', meaningAr: 'فني إصلاحات', example: 'The repairman fixed the heater.' },
      { word: 'plumber', meaningAr: 'سباك', example: 'The plumber will come tomorrow.' },
      { word: 'electrician', meaningAr: 'كهربائي', example: 'An electrician checks the wires.' },
      { word: 'fix', meaningAr: 'يصلح', example: 'Can you fix the door?' },
      { word: 'pipe', meaningAr: 'أنبوب', example: 'Water comes from the pipe.' },
      { word: 'stuck', meaningAr: 'عالق', example: 'This window is stuck.' },
      { word: 'noisy', meaningAr: 'صاخب', example: 'The fan is very noisy.' },
      { word: 'problem', meaningAr: 'مشكلة', example: 'What is the problem?' },
      { word: 'tool', meaningAr: 'أداة', example: 'He brought his tools.' },
      { word: 'screwdriver', meaningAr: 'مفك', example: 'Give me the screwdriver, please.' },
    ],
    scenario: [
      { en: 'The tap is leaking again.', ar: 'الحنفية مسربة مجددا.', d: 1 },
      { en: 'The light does not work.', ar: 'الضوء لا يعمل.', d: 1 },
      { en: 'The AC is broken in the bedroom.', ar: 'المكيف معطل في غرفة النوم.', d: 2 },
      { en: 'Call a repairman, please.', ar: 'اتصل بفني إصلاحات من فضلك.', d: 1 },
      { en: 'The pipe under the sink is leaking.', ar: 'الأنبوب تحت الحوض مسرب.', d: 2 },
      { en: 'The front door is stuck.', ar: 'الباب الأمامي عالق.', d: 1 },
      { en: 'Can you fix the window?', ar: 'هل يمكنك إصلاح النافذة؟', d: 2 },
      { en: 'I will call the plumber tomorrow.', ar: 'سأتصل بالسباك غدا.', d: 2 },
      { en: 'The washing machine is very noisy.', ar: 'الغسالة صاخبة جدا.', d: 2 },
      { en: 'What is the problem?', ar: 'ما المشكلة؟', d: 1 },
      { en: 'The new heater does not work.', ar: 'المدفأة الجديدة لا تعمل.', d: 1 },
      { en: 'The electrician came this morning.', ar: 'جاء الكهربائي هذا الصباح.', d: 2 },
      { en: 'He fixed the switch in one hour.', ar: 'أصلح مفتاح الكهرباء في ساعة واحدة.', d: 2 },
      { en: 'The water heater is not working.', ar: 'سخان الماء لا يعمل.', d: 2 },
      { en: 'Is the oven broken too?', ar: 'هل الفرن معطل أيضا؟', d: 2 },
      { en: 'No, it works fine.', ar: 'لا، إنه يعمل جيدا.', d: 1 },
      { en: 'The repairman is going to come at noon.', ar: 'سيأتي فني الإصلاحات عند الظهر.', d: 2 },
      { en: 'The stairs are broken.', ar: 'السلالم مكسورة.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'The {T} is {A}.', arTmpl: '{T_ar} {A_ar}.',
        slots: {
          T: [
            { en: 'tap', ar: 'الحنفية', g: 'f', ok: ['leaking', 'stuck', 'old'] },
            { en: 'pipe', ar: 'الأنبوب', g: 'm', ok: ['leaking', 'old'] },
            { en: 'door', ar: 'الباب', g: 'm', ok: ['broken', 'stuck', 'old'] },
            { en: 'window', ar: 'النافذة', g: 'f', ok: ['broken', 'stuck', 'old'] },
            { en: 'lamp', ar: 'المصباح', g: 'm', ok: ['broken', 'old'] },
            { en: 'AC', ar: 'المكيف', g: 'm', ok: ['broken', 'noisy', 'old'] },
            { en: 'fan', ar: 'المروحة', g: 'f', ok: ['broken', 'noisy', 'old'] },
            { en: 'heater', ar: 'المدفأة', g: 'f', ok: ['broken', 'noisy', 'old'] },
          ],
          A: (x) => BROKEN_ADJ
            .filter((a) => x.T.ok.includes(a.en))
            .map((a) => ({ en: a.en, ar: x.T.g === 'f' ? a.f : a.m })),
        },
        tags: ['home', 'problems'], d: 1, limit: 20,
      },
      {
        tmpl: 'I will call {J} {T}.', arTmpl: 'سأتصل ب{J_ar} {T_ar}.',
        slots: {
          J: [
            { en: 'a plumber', ar: 'سباك' }, { en: 'an electrician', ar: 'كهربائي' },
            { en: 'a repairman', ar: 'فني إصلاحات' }, { en: 'a carpenter', ar: 'نجار' },
            { en: 'a mechanic', ar: 'ميكانيكي' },
          ],
          T: [
            { en: 'tomorrow', ar: 'غدا' }, { en: 'this afternoon', ar: 'بعد الظهر' },
            { en: 'in the morning', ar: 'في الصباح' }, { en: 'now', ar: 'الآن' },
          ],
        },
        tags: ['home', 'future'], d: 2, limit: 12,
      },
      {
        tmpl: 'Can you fix {T} today?', arTmpl: 'هل يمكنك إصلاح {T_ar} اليوم؟',
        slots: {
          T: [
            { en: 'the tap', ar: 'الحنفية' }, { en: 'the door', ar: 'الباب' },
            { en: 'the window', ar: 'النافذة' }, { en: 'the light', ar: 'الضوء' },
            { en: 'the switch', ar: 'مفتاح الكهرباء' }, { en: 'the heater', ar: 'المدفأة' },
          ],
        },
        tags: ['home', 'requests'], d: 2, limit: 6,
      },
      {
        tmpl: 'The {T} does not work.', arTmpl: '{T_ar} لا {W_ar}.',
        slots: {
          T: [
            { en: 'heater', ar: 'المدفأة', g: 'f' }, { en: 'fan', ar: 'المروحة', g: 'f' },
            { en: 'doorbell', ar: 'جرس الباب', g: 'm' }, { en: 'phone line', ar: 'خط الهاتف', g: 'm' },
            { en: 'shower', ar: 'الدش', g: 'm' }, { en: 'washing machine', ar: 'الغسالة', g: 'f' },
          ],
          W: (x) => [{ en: 'work', ar: x.T.g === 'f' ? 'تعمل' : 'يعمل' }],
        },
        tags: ['home', 'negation'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'The tap is leaking again.', ar: 'الحنفية مسربة مجددا.', word: 'leaking', hint: 'صفة عطل' },
      { en: 'Call a repairman, please.', ar: 'اتصل بفني إصلاحات من فضلك.', word: 'repairman' },
      { en: 'The front door is stuck.', ar: 'الباب الأمامي عالق.', word: 'stuck', hint: 'صفة' },
      { en: 'I will call the plumber tomorrow.', ar: 'سأتصل بالسباك غدا.', word: 'plumber' },
      { en: 'The washing machine is very noisy.', ar: 'الغسالة صاخبة جدا.', word: 'noisy', hint: 'صفة' },
      { en: 'He fixed the switch in one hour.', ar: 'أصلح مفتاح الكهرباء في ساعة واحدة.', word: 'fixed', hint: 'فعل ماض' },
      { en: 'The water heater is not working.', ar: 'سخان الماء لا يعمل.', word: 'working' },
      { en: 'What is the problem?', ar: 'ما المشكلة؟', word: 'problem' },
    ],
    orders: [
      { en: 'The tap is leaking again.', ar: 'الحنفية مسربة مجددا.' },
      { en: 'I will call the plumber tomorrow.', ar: 'سأتصل بالسباك غدا.' },
      { en: 'The washing machine is very noisy.', ar: 'الغسالة صاخبة جدا.' },
      { en: 'The electrician came this morning.', ar: 'جاء الكهربائي هذا الصباح.' },
      { en: 'Is the oven broken too?', ar: 'هل الفرن معطل أيضا؟' },
      { en: 'The repairman is going to come at noon.', ar: 'سيأتي فني الإصلاحات عند الظهر.' },
    ],
    mc: [
      { question: 'Water is coming from the pipe. The pipe is ___', options: ['leaking', 'boiling', 'locked', 'cute'], answerIndex: 0, ar: 'يخرج الماء من الأنبوب، فهو ___' },
      { question: 'Who fixes the water pipes?', options: ['a plumber', 'a vet', 'a cashier', 'a barber'], answerIndex: 0, ar: 'من يصلح أنابيب الماء؟' },
      { question: 'The light does not work. You call ___', options: ['an electrician', 'a waiter', 'a farmer', 'a pilot'], answerIndex: 0, ar: 'الضوء لا يعمل، فتتصل بـ ___' },
      { question: '"The door is stuck" means:', options: ['الباب عالق', 'الباب مقفل', 'الباب مكسور', 'الباب مفتوح'], answerIndex: 0, ar: 'ما معنى The door is stuck؟' },
    ],
  },

  /* ================= lesson 56 — Electricity and Water ================= */
  {
    num: 56,
    tags: ['utilities', 'home'],
    objectives: [
      'Talk about power cuts and hot water',
      'Turn things on and off politely',
      'Discuss bills and saving water',
    ],
    grammar: {
      explanation: 'Use "There is/There was" for power cuts: "There was a power cut last night". Turn things on and off with the verb turn: "turn on the heater", "turn off the lights". For warnings use "Do not" + base verb: "Do not waste water", "Do not touch the plug". Talk about the future with will: "I will pay the bill on Sunday". Past simple: "The electricity went off", "The power came back".',
      explanationAr: 'استخدم There is/There was لانقطاع الكهرباء: There was a power cut last night. وشغل الأجهزة وأطفئها بفعل turn: turn on the heater، turn off the lights. وللتحذير استخدم Do not مع مصدر الفعل: Do not waste water، Do not touch the plug. وللمستقبل will: I will pay the bill on Sunday. وللماضي البسيط: The electricity went off، The power came back.',
      examples: [
        { en: 'There was a power cut last night.', ar: 'كان هناك انقطاع للكهرباء الليلة الماضية.' },
        { en: 'Please turn off the lights when you leave.', ar: 'أطفئ الأنوار عند خروجك من فضلك.' },
        { en: 'Do not waste water. The bill is high.', ar: 'لا تبذر الماء. الفاتورة عالية.' },
      ],
    },
    vocabulary: [
      { word: 'electricity', meaningAr: 'كهرباء', example: 'The electricity is off again.' },
      { word: 'power cut', meaningAr: 'انقطاع الكهرباء', example: 'There is a power cut in our street.' },
      { word: 'bill', meaningAr: 'فاتورة', example: 'The water bill is high.' },
      { word: 'light', meaningAr: 'ضوء / نور', example: 'Turn on the light, please.' },
      { word: 'switch', meaningAr: 'مفتاح الكهرباء', example: 'Press the switch twice.' },
      { word: 'plug', meaningAr: 'قابس', example: 'Do not touch the plug with wet hands.' },
      { word: 'candle', meaningAr: 'شمعة', example: 'We lit two candles.' },
      { word: 'turn off', meaningAr: 'يطفئ', example: 'Turn off the heater before you sleep.' },
      { word: 'turn on', meaningAr: 'يشغل / يشعل', example: 'Turn on the lamp, please.' },
      { word: 'save', meaningAr: 'يوفر / يقتصد', example: 'Save water and electricity.' },
      { word: 'dark', meaningAr: 'مظلم', example: 'The house is dark without electricity.' },
      { word: 'hot water', meaningAr: 'ماء ساخن', example: 'There is no hot water this morning.' },
    ],
    scenario: [
      { en: 'The electricity went off last night.', ar: 'انقطعت الكهرباء الليلة الماضية.', d: 2 },
      { en: 'There is a power cut in our street.', ar: 'هناك انقطاع للكهرباء في شارعنا.', d: 2 },
      { en: 'Please turn off the lights.', ar: 'أطفئ الأنوار من فضلك.', d: 1 },
      { en: 'The house is dark without electricity.', ar: 'المنزل مظلم بدون كهرباء.', d: 2 },
      { en: 'We used candles last night.', ar: 'استخدمنا الشموع الليلة الماضية.', d: 2 },
      { en: 'Do we have hot water?', ar: 'هل لدينا ماء ساخن؟', d: 2 },
      { en: 'Yes, the water heater works now.', ar: 'نعم، سخان الماء يعمل الآن.', d: 2 },
      { en: 'Please save water.', ar: 'وفر الماء من فضلك.', d: 1 },
      { en: 'Close the tap well.', ar: 'أغلق الحنفية جيدا.', d: 1 },
      { en: 'The water bill is high this month.', ar: 'فاتورة الماء عالية هذا الشهر.', d: 2 },
      { en: 'I will pay the bill on Sunday.', ar: 'سأدفع الفاتورة يوم الأحد.', d: 2 },
      { en: 'Do not waste water.', ar: 'لا تبذر الماء.', d: 1 },
      { en: 'My brother fixed the switch.', ar: 'أصلح أخي مفتاح النور.', d: 2 },
      { en: 'The power came back after two hours.', ar: 'عادت الكهرباء بعد ساعتين.', d: 2 },
      { en: 'Is the fridge working?', ar: 'هل تعمل الثلاجة؟', d: 2 },
      { en: 'Yes, it is working well.', ar: 'نعم، إنها تعمل جيدا.', d: 1 },
      { en: 'Why is the house so dark?', ar: 'لماذا المنزل مظلم جدا؟', d: 2 },
      { en: 'Because the power is off again.', ar: 'لأن الكهرباء مقطوعة مجددا.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Please turn {D} {L}.', arTmpl: '{D_ar} {L_ar} من فضلك.',
        slots: {
          D: [
            { en: 'off', ar: 'أطفئ' }, { en: 'on', ar: 'أشعل' },
          ],
          L: [
            { en: 'the lights', ar: 'الأنوار' }, { en: 'the lamp', ar: 'المصباح' },
            { en: 'the heater', ar: 'المدفأة' }, { en: 'the AC', ar: 'المكيف' },
          ],
        },
        tags: ['utilities', 'imperative'], d: 1, limit: 8,
      },
      {
        tmpl: '{B} is high this month.', arTmpl: '{B_ar} عالية هذا الشهر.',
        slots: {
          B: [
            { en: 'The water bill', ar: 'فاتورة الماء' }, { en: 'The electricity bill', ar: 'فاتورة الكهرباء' },
            { en: 'The phone bill', ar: 'فاتورة الهاتف' }, { en: 'The gas bill', ar: 'فاتورة الغاز' },
          ],
        },
        tags: ['utilities', 'money'], d: 2, limit: 4,
      },
      {
        tmpl: 'There was a power cut {T}.', arTmpl: 'كان هناك انقطاع للكهرباء {T_ar}.',
        slots: {
          T: [
            { en: 'last night', ar: 'الليلة الماضية' }, { en: 'yesterday', ar: 'أمس' },
            { en: 'this morning', ar: 'هذا الصباح' }, { en: 'last week', ar: 'الأسبوع الماضي' },
            { en: 'on Friday', ar: 'يوم الجمعة' }, { en: 'on Monday', ar: 'يوم الاثنين' },
          ],
        },
        tags: ['utilities', 'past-simple'], d: 2, limit: 6,
      },
      {
        tmpl: 'Do not {W}.', arTmpl: 'لا {W_ar}.',
        slots: {
          W: [
            { en: 'waste water', ar: 'تبذر الماء' }, { en: 'leave the lights on', ar: 'تترك الأنوار مضاءة' },
            { en: 'touch the plug', ar: 'تلمس القابس' }, { en: 'forget to close the tap', ar: 'تنس إغلاق الحنفية' },
          ],
        },
        tags: ['utilities', 'negation'], d: 1, limit: 4,
      },
      {
        tmpl: 'I will pay the {U} bill {T}.', arTmpl: 'سأدفع فاتورة {U_ar} {T_ar}.',
        slots: {
          U: [
            { en: 'water', ar: 'الماء' }, { en: 'electricity', ar: 'الكهرباء' },
            { en: 'gas', ar: 'الغاز' }, { en: 'phone', ar: 'الهاتف' },
          ],
          T: [
            { en: 'tomorrow', ar: 'غدا' }, { en: 'on Sunday', ar: 'يوم الأحد' },
            { en: 'this evening', ar: 'هذا المساء' }, { en: 'at the bank', ar: 'في المصرف' },
          ],
        },
        tags: ['utilities', 'future'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'There is a power cut in our street.', ar: 'هناك انقطاع للكهرباء في شارعنا.', word: 'power', hint: 'كهرباء' },
      { en: 'Please turn off the lights.', ar: 'أطفئ الأنوار من فضلك.', word: 'turn', hint: 'فعل' },
      { en: 'We used candles last night.', ar: 'استخدمنا الشموع الليلة الماضية.', word: 'candles' },
      { en: 'The water bill is high this month.', ar: 'فاتورة الماء عالية هذا الشهر.', word: 'bill' },
      { en: 'Do not waste water.', ar: 'لا تبذر الماء.', word: 'waste', hint: 'فعل' },
      { en: 'My brother fixed the switch.', ar: 'أصلح أخي مفتاح النور.', word: 'switch' },
      { en: 'The power came back after two hours.', ar: 'عادت الكهرباء بعد ساعتين.', word: 'hours', hint: 'زمن' },
      { en: 'Please save water.', ar: 'وفر الماء من فضلك.', word: 'save', hint: 'فعل' },
    ],
    orders: [
      { en: 'The electricity went off last night.', ar: 'انقطعت الكهرباء الليلة الماضية.' },
      { en: 'Please turn off the lights.', ar: 'أطفئ الأنوار من فضلك.' },
      { en: 'The water bill is high this month.', ar: 'فاتورة الماء عالية هذا الشهر.' },
      { en: 'The power came back after two hours.', ar: 'عادت الكهرباء بعد ساعتين.' },
      { en: 'Do we have hot water?', ar: 'هل لدينا ماء ساخن؟' },
      { en: 'I will pay the bill on Sunday.', ar: 'سأدفع الفاتورة يوم الأحد.' },
    ],
    mc: [
      { question: 'There is no electricity in the house. This is a ___', options: ['power cut', 'shopping list', 'spare key', 'pet food'], answerIndex: 0, ar: 'لا توجد كهرباء في المنزل، فهذا ___' },
      { question: 'We use ___ when the power is off.', options: ['candles', 'forks', 'loaves', 'cages'], answerIndex: 0, ar: 'نستخدم ___ عند انقطاع الكهرباء.' },
      { question: '"Save water" means:', options: ['وفر الماء', 'اشرب الماء', 'اسكب الماء', 'اغلي الماء'], answerIndex: 0, ar: 'ما معنى Save water؟' },
      { question: 'The electricity bill is high. You must ___', options: ['pay it', 'eat it', 'wash it', 'feed it'], answerIndex: 0, ar: 'فاتورة الكهرباء عالية، فعليك أن ___' },
    ],
  },

  /* ================= lesson 57 — Keys and Locked Doors ================= */
  {
    num: 57,
    tags: ['home', 'keys'],
    objectives: [
      'Talk about lost keys and locked doors',
      'Ask and answer about closing the door',
      'Find a spare key and ask a neighbor for help',
    ],
    grammar: {
      explanation: 'Talk about past problems with past simple: "I lost my keys yesterday", "I forgot my keys at the office", "We waited for one hour". Ask about the past with Did: "Did you close the door?", "Did you check your bag?". Use the negative with cannot or do not: "I cannot find my key", "Do not lose the spare key". The future: "He will bring his keys in ten minutes".',
      explanationAr: 'تحدث عن المشكلات الماضية بالماضي البسيط: I lost my keys yesterday، I forgot my keys at the office، We waited for one hour. واسأل عن الماضي بـ Did: Did you close the door؟، Did you check your bag؟ ونفي الأمر بـ cannot أو do not: I cannot find my key، Do not lose the spare key. وللمستقبل: He will bring his keys in ten minutes.',
      examples: [
        { en: 'I lost my keys yesterday. I cannot find them.', ar: 'فقدت مفاتيحي أمس. لا أستطيع إيجادها.' },
        { en: 'Did you close the door? Yes, I locked it twice.', ar: 'هل أغلقت الباب؟ نعم، أقفلته مرتين.' },
        { en: 'There is a spare key under the mat.', ar: 'هناك مفتاح احتياطي تحت البساط.' },
      ],
    },
    vocabulary: [
      { word: 'key', meaningAr: 'مفتاح', example: 'This key opens the front door.' },
      { word: 'keys', meaningAr: 'مفاتيح', example: 'My keys are in my bag.' },
      { word: 'lock', meaningAr: 'قفل', example: 'The lock is old.' },
      { word: 'locked', meaningAr: 'مقفل', example: 'The door is locked.' },
      { word: 'spare key', meaningAr: 'مفتاح احتياطي', example: 'Keep a spare key with a neighbor.' },
      { word: 'mat', meaningAr: 'بساط / ممسحة', example: 'Look under the mat.' },
      { word: 'forget', meaningAr: 'ينسى', example: 'I forgot my keys at home.' },
      { word: 'lose', meaningAr: 'يفقد', example: 'Do not lose this key.' },
      { word: 'knock', meaningAr: 'يطرق', example: 'Knock on the door twice.' },
      { word: 'neighbor', meaningAr: 'جار', example: 'My neighbor is very kind.' },
      { word: 'pocket', meaningAr: 'جيب', example: 'The key is in my pocket.' },
      { word: 'wait', meaningAr: 'ينتظر', example: 'We waited outside for one hour.' },
    ],
    scenario: [
      { en: 'I lost my keys yesterday.', ar: 'فقدت مفاتيحي أمس.', d: 1 },
      { en: 'I cannot find my key.', ar: 'لا أستطيع إيجاد مفتاحي.', d: 1 },
      { en: 'I am locked out of the house.', ar: 'أنا محبوس خارج المنزل.', d: 2 },
      { en: 'Did you close the door?', ar: 'هل أغلقت الباب؟', d: 1 },
      { en: 'Yes, I locked it twice.', ar: 'نعم، أقفلته مرتين.', d: 2 },
      { en: 'Check the spare key under the flowerpot.', ar: 'تحقق من المفتاح الاحتياطي تحت أصيص الزهور.', d: 2 },
      { en: 'There is a spare key under the mat.', ar: 'هناك مفتاح احتياطي تحت البساط.', d: 2 },
      { en: 'I forgot my keys at the office.', ar: 'نسيت مفاتيحي في المكتب.', d: 2 },
      { en: 'Knock on the neighbor\'s door, please.', ar: 'اطرق باب الجار من فضلك.', d: 2 },
      { en: 'My neighbor has a spare key.', ar: 'جاري يملك مفتاحا احتياطيا.', d: 2 },
      { en: 'We waited for my father for one hour.', ar: 'انتظرنا أبي لمدة ساعة.', d: 2 },
      { en: 'He will bring his keys in ten minutes.', ar: 'سيحضر مفاتيحه بعد عشر دقائق.', d: 2 },
      { en: 'The door is locked.', ar: 'الباب مقفل.', d: 1 },
      { en: 'Did you check your bag?', ar: 'هل فحصت حقيبتك؟', d: 2 },
      { en: 'Look! The key is in my pocket!', ar: 'انظر! المفتاح في جيبي!', d: 1 },
      { en: 'Lock the door when you leave.', ar: 'أقفل الباب عند خروجك.', d: 2 },
      { en: 'Do not lose the spare key.', ar: 'لا تفقد المفتاح الاحتياطي.', d: 2 },
      { en: 'Where is the spare key?', ar: 'أين المفتاح الاحتياطي؟', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'I {V} my keys {T}.', arTmpl: '{V_ar} مفاتيحي {T_ar}.',
        slots: {
          V: [
            { en: 'lost', ar: 'فقدت' }, { en: 'forgot', ar: 'نسيت' },
            { en: 'found', ar: 'وجدت' }, { en: 'left', ar: 'تركت' },
          ],
          T: [
            { en: 'yesterday', ar: 'أمس' }, { en: 'this morning', ar: 'هذا الصباح' },
            { en: 'at work', ar: 'في العمل' }, { en: 'at the market', ar: 'في السوق' },
            { en: 'in the taxi', ar: 'في سيارة الأجرة' }, { en: 'on the bus', ar: 'في الحافلة' },
          ],
        },
        tags: ['keys', 'past-simple'], d: 2, limit: 18,
      },
      {
        tmpl: 'The key is {L}.', arTmpl: 'المفتاح {L_ar}.',
        slots: {
          L: [
            { en: 'in my pocket', ar: 'في جيبي' }, { en: 'in my bag', ar: 'في حقيبتي' },
            { en: 'under the mat', ar: 'تحت البساط' }, { en: 'on the shelf', ar: 'على الرف' },
            { en: 'in the door', ar: 'في الباب' }, { en: 'in the drawer', ar: 'في الدرج' },
            { en: 'under the newspaper', ar: 'تحت الجريدة' }, { en: 'in my other jacket', ar: 'في سترتي الأخرى' },
          ],
        },
        tags: ['keys', 'prepositions'], d: 1, limit: 8,
      },
      {
        tmpl: 'Did you {V} the door?', arTmpl: 'هل {V_ar} الباب؟',
        slots: {
          V: [
            { en: 'close', ar: 'أغلقت' }, { en: 'lock', ar: 'أقفلت' },
            { en: 'open', ar: 'فتحت' }, { en: 'check', ar: 'فحصت' },
          ],
        },
        tags: ['keys', 'questions'], d: 1, limit: 4,
      },
      {
        tmpl: 'My father will bring the spare key {T}.', arTmpl: 'سيحضر أبي المفتاح الاحتياطي {T_ar}.',
        slots: {
          T: [
            { en: 'soon', ar: 'قريبا' }, { en: 'in ten minutes', ar: 'بعد عشر دقائق' },
            { en: 'this evening', ar: 'هذا المساء' }, { en: 'at noon', ar: 'عند الظهر' },
          ],
        },
        tags: ['keys', 'future'], d: 2, limit: 4,
      },
    ],
    fills: [
      { en: 'I lost my keys yesterday.', ar: 'فقدت مفاتيحي أمس.', word: 'lost', hint: 'فعل ماض' },
      { en: 'I cannot find my key.', ar: 'لا أستطيع إيجاد مفتاحي.', word: 'find', hint: 'فعل' },
      { en: 'The door is locked.', ar: 'الباب مقفل.', word: 'locked', hint: 'صفة' },
      { en: 'There is a spare key under the mat.', ar: 'هناك مفتاح احتياطي تحت البساط.', word: 'spare', hint: 'إضافي' },
      { en: 'Did you close the door?', ar: 'هل أغلقت الباب؟', word: 'close', hint: 'فعل' },
      { en: 'Knock on the neighbor\'s door, please.', ar: 'اطرق باب الجار من فضلك.', word: 'Knock', hint: 'فعل' },
      { en: 'We waited for my father for one hour.', ar: 'انتظرنا أبي لمدة ساعة.', word: 'waited', hint: 'فعل ماض' },
      { en: 'Lock the door when you leave.', ar: 'أقفل الباب عند خروجك.', word: 'leave', hint: 'فعل' },
    ],
    orders: [
      { en: 'I lost my keys yesterday.', ar: 'فقدت مفاتيحي أمس.' },
      { en: 'I am locked out of the house.', ar: 'أنا محبوس خارج المنزل.' },
      { en: 'Did you close the door?', ar: 'هل أغلقت الباب؟' },
      { en: 'There is a spare key under the mat.', ar: 'هناك مفتاح احتياطي تحت البساط.' },
      { en: 'He will bring his keys in ten minutes.', ar: 'سيحضر مفاتيحه بعد عشر دقائق.' },
      { en: 'Lock the door when you leave.', ar: 'أقفل الباب عند خروجك.' },
    ],
    mc: [
      { question: 'You cannot open the door. You are ___', options: ['locked out', 'going out', 'eating out', 'very old'], answerIndex: 0, ar: 'لا تستطيع فتح الباب، فأنت ___' },
      { question: 'A second key for emergencies is a ___', options: ['spare key', 'shopping bag', 'pet food', 'power cut'], answerIndex: 0, ar: 'المفتاح الثاني للطوارئ هو ___' },
      { question: 'Where is the spare key in many homes?', options: ['under the mat', 'in the fridge', 'in the kettle', 'on the stove'], answerIndex: 0, ar: 'أين يكون المفتاح الاحتياطي في كثير من البيوت؟' },
      { question: '"I lost my keys" means:', options: ['فقدت مفاتيحي', 'وجدت مفاتيحي', 'أغلق الباب', 'اشتريت مفاتيحا'], answerIndex: 0, ar: 'ما معنى I lost my keys؟' },
    ],
  },

  /* ================= lesson 58 — Pets ================= */
  {
    num: 58,
    tags: ['pets', 'animals'],
    objectives: [
      'Name common pets and their homes',
      'Talk about feeding and walking a pet',
      'Take a pet to the vet and describe it',
    ],
    grammar: {
      explanation: 'Pets live with us, so we use present simple for their habits: "The cat drinks milk", "He walks the dog every morning", "My brother feeds the fish". Ask with does: "Does the dog sleep in the house?", "What does the cat eat?". Use the negative: "The bird does not sing at night". The future: "I will buy a new cage on Friday". Remember plurals: one cat, two cats; one bird, two birds.',
      explanationAr: 'الحيوانات الأليفة تعيش معنا، فنستخدم المضارع البسيط لعاداتها: The cat drinks milk، He walks the dog every morning، My brother feeds the fish. واسأل بـ does: Does the dog sleep in the house؟، What does the cat eat؟ ونفي بـ does not: The bird does not sing at night. وللمستقبل: I will buy a new cage on Friday. وتذكر الجمع: one cat, two cats; one bird, two birds.',
      examples: [
        { en: 'Please feed the cat while I am away.', ar: 'أطعم القطة أثناء غيابي من فضلك.' },
        { en: 'Does the dog sleep in the house? No, it sleeps in the garden.', ar: 'هل ينام الكلب في المنزل؟ لا، إنه ينام في الحديقة.' },
        { en: 'The vet checked the dog yesterday.', ar: 'فحص الطبيب البيطري الكلب أمس.' },
      ],
    },
    vocabulary: [
      { word: 'pet', meaningAr: 'حيوان أليف', example: 'A rabbit is a quiet pet.' },
      { word: 'cat', meaningAr: 'قطة', example: 'The cat sleeps on the sofa.', ipa: 'kæt' },
      { word: 'dog', meaningAr: 'كلب', example: 'Our dog is very friendly.' },
      { word: 'bird', meaningAr: 'طائر', example: 'The bird sings in the morning.' },
      { word: 'fish', meaningAr: 'سمكة', example: 'The fish swims in the tank.' },
      { word: 'feed', meaningAr: 'يطعم', example: 'Feed the cat twice a day.' },
      { word: 'walk the dog', meaningAr: 'يتمشى مع الكلب', example: 'I walk the dog after school.' },
      { word: 'vet', meaningAr: 'طبيب بيطري', example: 'The vet is on Green Street.' },
      { word: 'pet food', meaningAr: 'طعام الحيوانات', example: 'We need more pet food.' },
      { word: 'cage', meaningAr: 'قفص', example: 'Clean the cage every week.' },
      { word: 'tail', meaningAr: 'ذيل', example: 'The dog is moving its tail.' },
      { word: 'cute', meaningAr: 'لطيف', example: 'My cat is very cute.' },
    ],
    scenario: [
      { en: 'We have a beautiful cat.', ar: 'لدينا قطة جميلة.', d: 1 },
      { en: 'My sister has two birds.', ar: 'أختي لديها طائرين.', d: 1 },
      { en: 'My cat sleeps on the sofa.', ar: 'قطتي تنام على الأريكة.', d: 1 },
      { en: 'Please feed the cat.', ar: 'أطعم القطة من فضلك.', d: 1 },
      { en: 'The cat drinks milk.', ar: 'تشرب القطة الحليب.', d: 1 },
      { en: 'Feed the dog at six o\'clock.', ar: 'أطعم الكلب في الساعة السادسة.', d: 2 },
      { en: 'He walks the dog every morning.', ar: 'يتمشى مع الكلب كل صباح.', d: 2 },
      { en: 'Who feeds the fish?', ar: 'من يطعم السمك؟', d: 2 },
      { en: 'My brother feeds them in the morning.', ar: 'أخي يطعمها في الصباح.', d: 2 },
      { en: 'The bird does not sing at night.', ar: 'الطائر لا يغرد في الليل.', d: 1 },
      { en: 'Take the cat to the vet tomorrow.', ar: 'خذ القطة إلى الطبيب البيطري غدا.', d: 2 },
      { en: 'The vet checked the dog yesterday.', ar: 'فحص الطبيب البيطري الكلب أمس.', d: 2 },
      { en: 'We bought pet food at the market.', ar: 'اشترينا طعام الحيوانات من السوق.', d: 2 },
      { en: 'Does the dog sleep in the house?', ar: 'هل ينام الكلب في المنزل؟', d: 2 },
      { en: 'No, it sleeps in the garden.', ar: 'لا، إنه ينام في الحديقة.', d: 1 },
      { en: 'What does the cat eat?', ar: 'ماذا تأكل القطة؟', d: 2 },
      { en: 'It eats fish and rice.', ar: 'تأكل السمك والأرز.', d: 2 },
      { en: 'I will buy a new cage on Friday.', ar: 'سأشتري قفصا جديدا يوم الجمعة.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'The {A} is {L}.', arTmpl: '{A_ar} {L_ar}.',
        slots: {
          A: PET_A,
          L: (x) => PET_L.filter((l) => x.A.ok.includes(l.en)),
        },
        tags: ['pets', 'prepositions'], d: 1, limit: 12,
      },
      {
        tmpl: 'Please feed the {A} {T}.', arTmpl: 'أطعم {A_ar} {T_ar} من فضلك.',
        slots: {
          A: [
            { en: 'cat', ar: 'القطة' }, { en: 'dog', ar: 'الكلب' },
            { en: 'birds', ar: 'الطيور' }, { en: 'fish', ar: 'السمك' },
          ],
          T: [
            { en: 'now', ar: 'الآن' }, { en: 'in the morning', ar: 'في الصباح' },
            { en: 'before you go out', ar: 'قبل خروجك' },
          ],
        },
        tags: ['pets', 'imperative'], d: 1, limit: 8,
      },
      {
        tmpl: '{S} {V} the dog every evening.', arTmpl: '{S_ar} {V_ar} مع الكلب كل مساء.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('walk', x.S.agr), ar: B.arPresent('walk', x.S.agr) }],
        },
        tags: ['pets', 'present-simple'], d: 2, limit: 6,
      },
      {
        tmpl: 'I will take the {A} to the vet {T}.', arTmpl: 'سآخذ {A_ar} إلى الطبيب البيطري {T_ar}.',
        slots: {
          A: [
            { en: 'cat', ar: 'القطة' }, { en: 'dog', ar: 'الكلب' },
            { en: 'bird', ar: 'الطائر' }, { en: 'rabbit', ar: 'الأرنب' },
          ],
          T: [
            { en: 'tomorrow', ar: 'غدا' }, { en: 'this afternoon', ar: 'بعد الظهر' },
            { en: 'on Sunday', ar: 'يوم الأحد' }, { en: 'next week', ar: 'الأسبوع القادم' },
          ],
        },
        tags: ['pets', 'future'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'We have a beautiful cat.', ar: 'لدينا قطة جميلة.', word: 'cat' },
      { en: 'My sister has two birds.', ar: 'أختي لديها طائرين.', word: 'birds' },
      { en: 'The cat drinks milk.', ar: 'تشرب القطة الحليب.', word: 'milk' },
      { en: 'Who feeds the fish?', ar: 'من يطعم السمك؟', word: 'feeds', hint: 'فعل' },
      { en: 'Take the cat to the vet tomorrow.', ar: 'خذ القطة إلى الطبيب البيطري غدا.', word: 'vet' },
      { en: 'The bird does not sing at night.', ar: 'الطائر لا يغرد في الليل.', word: 'sing', hint: 'فعل' },
      { en: 'We bought pet food at the market.', ar: 'اشترينا طعام الحيوانات من السوق.', word: 'food' },
      { en: 'I will buy a new cage on Friday.', ar: 'سأشتري قفصا جديدا يوم الجمعة.', word: 'cage' },
    ],
    orders: [
      { en: 'We have a beautiful cat.', ar: 'لدينا قطة جميلة.' },
      { en: 'The dog is outside now.', ar: 'الكلب خارج المنزل الآن.' },
      { en: 'Who feeds the fish?', ar: 'من يطعم السمك؟' },
      { en: 'The vet checked the dog yesterday.', ar: 'فحص الطبيب البيطري الكلب أمس.' },
      { en: 'I will buy a new cage on Friday.', ar: 'سأشتري قفصا جديدا يوم الجمعة.' },
      { en: 'Take the cat to the vet tomorrow.', ar: 'خذ القطة إلى الطبيب البيطري غدا.' },
    ],
    mc: [
      { question: 'Which animal is a common pet?', options: ['a cat', 'a lion', 'a camel', 'a horse'], answerIndex: 0, ar: 'أي حيوان حيوان أليف شائع؟' },
      { question: 'The dog needs exercise. You ___ every day.', options: ['walk the dog', 'feed the fish', 'wash the car', 'close the door'], answerIndex: 0, ar: 'الكلب يحتاج حركة، فأنت ___ كل يوم.' },
      { question: 'The cat is sick. Take it to the ___', options: ['vet', 'market', 'kitchen', 'garage'], answerIndex: 0, ar: 'القطة مريضة، فخذها إلى ___' },
      { question: '"pet food" means:', options: ['طعام الحيوانات الأليفة', 'طعام الأطفال', 'مطعم للحيوانات', 'لعبة للقطط'], answerIndex: 0, ar: 'ما معنى pet food؟' },
    ],
  },
];
