/* ============================================================
   v2 section data — s04-a1.js
   Food, Shopping & Services · lessons 71–74
   (restaurant ordering, allergies, bill & tipping, supermarket)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

/* restaurant dishes (with article) — shared by lesson 71 patterns */
const DISHES = [
  { en: 'the grilled chicken', ar: 'الدجاج المشوي' }, { en: 'the grilled fish', ar: 'السمك المشوي' },
  { en: 'the lamb kebab', ar: 'كباب اللحم' }, { en: 'the tomato soup', ar: 'شوربة الطماطم' },
  { en: 'the lentil soup', ar: 'شوربة العدس' }, { en: 'the mixed salad', ar: 'السلطة المشكلة' },
  { en: 'the vegetable rice', ar: 'الأرز بالخضار' }, { en: 'the chicken pasta', ar: 'المكرونة بالدجاج' },
  { en: 'the cheese sandwich', ar: 'شطيرة الجبن' }, { en: 'the fruit plate', ar: 'طبق الفواكه' },
];

/* desserts for lesson 71 */
const DESSERTS = [
  { en: 'chocolate cake', ar: 'الكعك بالشوكولاتة' }, { en: 'fruit salad', ar: 'سلطة الفواكه' },
  { en: 'ice cream', ar: 'الآيس كريم' }, { en: 'rice pudding', ar: 'أرز باللبن' },
  { en: 'apple pie', ar: 'فطيرة التفاح' }, { en: 'honey cookies', ar: 'بسكويت بالعسل' },
];

/* common allergens — shared by lesson 72 patterns */
const ALLERGENS = [
  { en: 'nuts', ar: 'المكسرات' }, { en: 'peanuts', ar: 'الفول السوداني' },
  { en: 'eggs', ar: 'البيض' }, { en: 'milk', ar: 'الحليب' },
  { en: 'seafood', ar: 'المأكولات البحرية' }, { en: 'strawberries', ar: 'الفراولة' },
  { en: 'wheat', ar: 'القمح' }, { en: 'honey', ar: 'العسل' },
];

/* supermarket sections — shared by lesson 74 patterns */
const SECTIONS = [
  { en: 'milk and cheese', ar: 'الحليب والجبن' }, { en: 'bread and rice', ar: 'الخبز والأرز' },
  { en: 'fresh fruit', ar: 'الفاكهة الطازجة' }, { en: 'fresh vegetables', ar: 'الخضار الطازجة' },
  { en: 'frozen food', ar: 'الأطعمة المجمدة' }, { en: 'cleaning products', ar: 'منتجات التنظيف' },
  { en: 'tea and coffee', ar: 'الشاي والقهوة' }, { en: 'cookies and snacks', ar: 'البسكويت والوجبات الخفيفة' },
];

export const lessons = [

  /* ================= lesson 71 — Ordering Food at a Restaurant ================= */
  {
    num: 71,
    tags: ['restaurant', 'ordering'],
    objectives: [
      'Ask for a table and read the menu',
      'Order a starter, a main course and a dessert',
      'Ask the waiter politely for another drink or item',
    ],
    grammar: {
      explanation: 'In a restaurant, the waiter asks "Are you ready to order?" or "What would you like?". You answer with "I will have ..." plus the dish: "I will have the grilled chicken, please". You can also use "I am going to try ..." for a plan. A full meal often has three parts: a starter (soup or salad), a main course (meat, fish or rice) and a dessert (cake or ice cream). For more drinks or bread, say "Can we have another glass of water, please?" — "another" means one more.',
      explanationAr: 'في المطعم يسألك النادل Are you ready to order؟ أو What would you like؟ فتجيب بـ I will have مع اسم الطبق: I will have the grilled chicken, please. ويمكنك استخدام I am going to try للتعبير عن خطة. والوجبة الكاملة غالبا ثلاثة أجزاء: طبق أول (شوربة أو سلطة) وطبق رئيسي (لحم أو سمك أو أرز) وحلوى (كعك أو آيس كريم). ولكل مشروب أو خبز إضافي قل Can we have another glass of water, please؟ فكلمة another تعني واحدا آخرا.',
      examples: [
        { en: 'I will have the grilled chicken, please.', ar: 'سأتناول الدجاج المشوي من فضلك.' },
        { en: 'For the starter, we will have the soup.', ar: 'بالنسبة للطبق الأول سنتناول الشوربة.' },
        { en: 'Can we have another glass of water, please?', ar: 'هل يمكننا طلب كأس ماء آخر من فضلك؟' },
      ],
    },
    vocabulary: [
      { word: 'waiter', meaningAr: 'نادل', example: 'The waiter is very friendly.', ipa: 'ˈweɪtər' },
      { word: 'menu', meaningAr: 'قائمة الطعام', example: 'Can we see the dinner menu, please?' },
      { word: 'starter', meaningAr: 'الطبق الأول', example: 'For the starter, I will have the soup.' },
      { word: 'main course', meaningAr: 'الطبق الرئيسي', example: 'The main course is grilled fish.' },
      { word: 'dessert', meaningAr: 'الحلوى', example: 'We will order a dessert later.' },
      { word: 'order', meaningAr: 'يطلب (طعاما)', example: 'Are you ready to order, sir?' },
      { word: 'recommend', meaningAr: 'يوصي بـ', example: 'What do you recommend today?' },
      { word: 'delicious', meaningAr: 'لذيذ', example: 'The soup was delicious yesterday.' },
      { word: 'glass', meaningAr: 'كأس', example: 'Another glass of water, please.' },
      { word: 'another', meaningAr: 'آخر / واحد إضافي', example: 'Can we have another cup of tea?' },
      { word: 'table', meaningAr: 'طاولة', example: 'A table for two, please.' },
      { word: 'enjoy', meaningAr: 'يستمتع بـ', example: 'We enjoyed the meal very much.' },
    ],
    scenario: [
      { en: 'Good evening. A table for two, please.', ar: 'مساء الخير. طاولة لشخصين من فضلك.', d: 1 },
      { en: 'Right this way, please.', ar: 'من هنا من فضلكم.', d: 1 },
      { en: 'Can we see the dinner menu, please?', ar: 'هل يمكننا رؤية قائمة العشاء من فضلك؟', d: 1 },
      { en: 'Of course. Here it is.', ar: 'بالطبع. تفضلوا.', d: 1 },
      { en: 'What do you recommend?', ar: 'بماذا توصي؟', d: 2 },
      { en: 'The grilled chicken is very popular.', ar: 'الدجاج المشوي مطلوب جدا.', d: 2 },
      { en: 'For the starter, we will have the soup.', ar: 'بالنسبة للطبق الأول سنتناول الشوربة.', d: 2 },
      { en: 'I do not eat meat, so I will take the fish.', ar: 'لا آكل اللحم، لذلك سآخذ السمك.', d: 2 },
      { en: 'Are you ready to order your main course?', ar: 'هل أنتم مستعدون لطلب الطبق الرئيسي؟', d: 2 },
      { en: 'Yes, I will have the grilled chicken, please.', ar: 'نعم، سأتناول الدجاج المشوي من فضلك.', d: 2 },
      { en: 'She is going to try the vegetable rice.', ar: 'سنجرب الأرز بالخضار.', d: 2 },
      { en: 'My daughter wants pasta with cheese.', ar: 'ابنتي تريد مكرونة بالجبن.', d: 3 },
      { en: 'Can we have another glass of water, please?', ar: 'هل يمكننا طلب كأس ماء آخر من فضلك؟', d: 2 },
      { en: 'Certainly. I will bring it now.', ar: 'بالتأكيد. سأحضره الآن.', d: 2 },
      { en: 'The soup was delicious yesterday.', ar: 'كانت الشوربة لذيذة أمس.', d: 3 },
      { en: 'We enjoyed the meal very much. Thank you!', ar: 'استمتعنا بالوجبة كثيرا. شكرا لكم!', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I will have {D}, please.', arTmpl: 'سأتناول {D_ar} من فضلك.',
        slots: { D: DISHES },
        tags: ['restaurant', 'ordering'], d: 1, limit: 10,
      },
      {
        tmpl: 'For the {C}, I will have {D}.', arTmpl: 'بالنسبة للطبق {C_ar} سأتناول {D_ar}.',
        slots: {
          C: [
            { en: 'starter', ar: 'الأول' }, { en: 'main course', ar: 'الرئيسي' },
            { en: 'dessert', ar: 'الحلوى' },
          ],
          D: DISHES,
        },
        tags: ['restaurant', 'ordering'], d: 2, limit: 18,
      },
      {
        tmpl: 'Can we have {DR}, please?', arTmpl: 'هل يمكننا طلب {DR_ar} من فضلك؟',
        slots: {
          DR: [
            { en: 'another glass of water', ar: 'كأس ماء آخر' },
            { en: 'another cup of tea', ar: 'كوب شاي آخر' },
            { en: 'another orange juice', ar: 'عصير برتقال آخر' },
            { en: 'another bottle of water', ar: 'زجاجة ماء أخرى' },
            { en: 'a soft drink', ar: 'مشروبا غازيا' },
            { en: 'a cup of coffee', ar: 'كوبا من القهوة' },
          ],
        },
        tags: ['restaurant', 'drinks'], d: 1, limit: 6,
      },
      {
        tmpl: '{D} is for {P}.', arTmpl: '{D_ar} هذا لـ{P_ar}.',
        slots: { D: DISHES, P: B.NAMED_SING },
        tags: ['restaurant'], d: 2, limit: 16,
      },
      {
        tmpl: 'We are going to try the {DT}.', arTmpl: 'سنجرّب {DT_ar}.',
        slots: { DT: DESSERTS },
        tags: ['restaurant', 'dessert'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'What do you recommend?', ar: 'بماذا توصي؟', word: 'recommend', hint: 'يوصي بـ' },
      { en: 'I will have the grilled chicken, please.', ar: 'سأتناول الدجاج المشوي من فضلك.', word: 'chicken' },
      { en: 'Can we have another glass of water, please?', ar: 'هل يمكننا طلب كأس ماء آخر من فضلك؟', word: 'another', hint: 'واحد إضافي' },
      { en: 'The starter is soup or salad.', ar: 'الطبق الأول شوربة أو سلطة.', word: 'starter' },
      { en: 'She is going to try the chocolate cake.', ar: 'سنجرب الكعك بالشوكولاتة.', word: 'cake' },
      { en: 'My daughter wants pasta with cheese.', ar: 'ابنتي تريد مكرونة بالجبن.', word: 'daughter' },
      { en: 'We enjoyed the meal very much.', ar: 'استمتعنا بالوجبة كثيرا.', word: 'enjoyed' },
      { en: 'The waiter brought the menu quickly.', ar: 'أحضر النادل القائمة بسرعة.', word: 'waiter' },
    ],
    orders: [
      { en: 'I will have the grilled chicken, please.', ar: 'سأتناول الدجاج المشوي من فضلك.' },
      { en: 'Can we see the dinner menu, please?', ar: 'هل يمكننا رؤية قائمة العشاء من فضلك؟' },
      { en: 'What do you recommend today, waiter?', ar: 'بماذا توصي اليوم يا نادل؟' },
      { en: 'She is going to try the fish.', ar: 'سنجرب السمك.' },
      { en: 'We will order the main course now.', ar: 'سنطلب الطبق الرئيسي الآن.' },
      { en: 'Please bring us another glass of water.', ar: 'أحضر لنا كأس ماء آخر من فضلك.' },
    ],
    mc: [
      { question: 'You want to order food. You say:', options: ['I will have the soup, please.', 'I am fine, thank you.', 'Good night.', 'My name is Sara.'], answerIndex: 0, ar: 'تريد طلب الطعام، فتقول:' },
      { question: 'What comes after the main course?', options: ['dessert', 'starter', 'menu', 'waiter'], answerIndex: 0, ar: 'ماذا يأتي بعد الطبق الرئيسي؟' },
      { question: '"Another glass of water, please" is:', options: ['a polite request', 'a goodbye', 'an apology', 'a question about the price'], answerIndex: 0, ar: 'عبارة Another glass of water, please هي:' },
      { question: 'Which sentence talks about a plan with "going to"?', options: ['She is going to try the cake.', 'She tried the cake.', 'She tries cakes.', 'She likes cake.'], answerIndex: 0, ar: 'أي جملة تعبر عن خطة باستخدام going to؟' },
    ],
  },

  /* ================= lesson 72 — Food Allergies and Dietary Needs ================= */
  {
    num: 72,
    tags: ['allergies', 'food', 'health'],
    objectives: [
      'Say what you are allergic to',
      'Ask if a dish contains certain ingredients',
      'Explain vegetarian and other dietary needs',
    ],
    grammar: {
      explanation: 'To talk about food allergies, say "I am allergic to" plus the food: "I am allergic to nuts". Ask about ingredients with "Does this dish contain ... ?" or "Are there eggs in this cake?". To remove something from your food, say "without": "I will have the salad without onions". A vegetarian does not eat meat or fish, so he or she chooses vegetables, rice, beans or cheese. If a dish has no dangerous ingredient, tell the guest: "It is safe for you".',
      explanationAr: 'للحديث عن الحساسية الغذائية قل I am allergic to مع اسم الطعام: I am allergic to nuts. واسأل عن المكوّنات بـ Does this dish contain ...؟ أو Are there eggs in this cake؟ ولحذف مكوّن من طعامك استخدم without: I will have the salad without onions. والنباتي لا يأكل اللحم أو السمك فيختار الخضار والأرز والفاصولياء والجبن. وإذا لم يكن في الطبق مكوّن ضار فقل للضيف: It is safe for you.',
      examples: [
        { en: 'I am allergic to nuts, so I do not eat them.', ar: 'عندي حساسية من المكسرات، لذلك لا آكلها.' },
        { en: 'Does this dish contain eggs or milk?', ar: 'هل يحتوي هذا الطبق على البيض أو الحليب؟' },
        { en: 'My sister is a vegetarian and will eat the salad.', ar: 'أختي نباتية وستتناول السلطة.' },
      ],
    },
    vocabulary: [
      { word: 'allergy', meaningAr: 'حساسية', example: 'My son has a food allergy.', ipa: 'ˈælərdʒi' },
      { word: 'allergic', meaningAr: 'لديه حساسية', example: 'I am allergic to peanuts.' },
      { word: 'nuts', meaningAr: 'مكسرات', example: 'This cake contains nuts.' },
      { word: 'peanuts', meaningAr: 'فول سوداني', example: 'Peanuts are dangerous for me.' },
      { word: 'seafood', meaningAr: 'مأكولات بحرية', example: 'He does not eat seafood.' },
      { word: 'vegetarian', meaningAr: 'نباتي', example: 'My daughter is a vegetarian.' },
      { word: 'spicy', meaningAr: 'حار (بهار)', example: 'Is this dish spicy?' },
      { word: 'ingredient', meaningAr: 'مكوّن', example: 'Read the ingredients on the box.' },
      { word: 'without', meaningAr: 'بدون', example: 'I will have the salad without onions.' },
      { word: 'diet', meaningAr: 'نظام غذائي', example: 'The doctor gave me a new diet.' },
      { word: 'safe', meaningAr: 'آمن', example: 'This meal is safe for my son.' },
      { word: 'milk', meaningAr: 'الحليب', example: 'The baby drinks milk every morning.' },
    ],
    scenario: [
      { en: 'I am allergic to nuts.', ar: 'عندي حساسية من المكسرات.', d: 1 },
      { en: 'My son is allergic to eggs.', ar: 'ابني عنده حساسية من البيض.', d: 1 },
      { en: 'Does this dish contain peanuts?', ar: 'هل يحتوي هذا الطبق على الفول السوداني؟', d: 1 },
      { en: 'No, it does not. It is safe for you.', ar: 'لا، لا يحتوي. هو آمن لك.', d: 2 },
      { en: 'Thank you. I will order it.', ar: 'شكرا لك. سأطلبه.', d: 2 },
      { en: 'I do not eat seafood because of my allergy.', ar: 'لا آكل المأكولات البحرية بسبب حساسيتي.', d: 2 },
      { en: 'Is this dish spicy?', ar: 'هل هذا الطبق حار؟', d: 1 },
      { en: 'It is a little spicy, but not hot.', ar: 'إنه حار قليلا، لكن ليس ساطعا.', d: 2 },
      { en: 'My daughter is a vegetarian.', ar: 'ابنتي نباتية.', d: 2 },
      { en: 'She does not eat meat or chicken.', ar: 'هي لا تأكل اللحم أو الدجاج.', d: 2 },
      { en: 'We will make the salad without onions.', ar: 'سنعمل السلطة بدون البصل.', d: 2 },
      { en: 'Are there eggs in this cake?', ar: 'هل هناك بيض في هذه الكعكة؟', d: 2 },
      { en: 'The doctor checked my food allergy last week.', ar: 'فحص الطبيب حساسيتي الغذائية الأسبوع الماضي.', d: 3 },
      { en: 'He said I must follow a strict diet.', ar: 'قال إن عليّ اتباع نظام غذائي صارم.', d: 3 },
      { en: 'Could you tell the chef about my allergy, please?', ar: 'هل يمكنك إخبار الطاهي بحساسيتي من فضلك؟', d: 3 },
      { en: 'Of course. We take allergies very seriously.', ar: 'بالطبع. نتعامل مع الحساسية بجدية تامة.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I am allergic to {A}.', arTmpl: 'عندي حساسية من {A_ar}.',
        slots: { A: ALLERGENS },
        tags: ['allergies'], d: 1, limit: 8,
      },
      {
        tmpl: 'Does this dish contain {A}?', arTmpl: 'هل يحتوي هذا الطبق على {A_ar}؟',
        slots: { A: ALLERGENS },
        tags: ['allergies', 'questions'], d: 2, limit: 8,
      },
      {
        tmpl: 'Please make the salad without {A}.', arTmpl: 'من فضلك اصنع السلطة بدون {A_ar}.',
        slots: { A: ALLERGENS },
        tags: ['allergies', 'requests'], d: 2, limit: 8,
      },
      {
        tmpl: 'Is this dish {T}?', arTmpl: 'هل هذا الطبق {T_ar}؟',
        slots: {
          T: [
            { en: 'spicy', ar: 'حار' }, { en: 'very spicy', ar: 'حار جدا' },
            { en: 'salty', ar: 'مالح' }, { en: 'sweet', ar: 'حلو' },
            { en: 'sour', ar: 'حامض' },
          ],
        },
        tags: ['taste', 'questions'], d: 1, limit: 5,
      },
      {
        tmpl: '{S} {VG} and {EV} the {V}.', arTmpl: '{S_ar} {VG_ar} و{EV_ar} {V_ar}.',
        slots: {
          S: [
            { en: 'My brother', ar: 'أخي', g: 'm' }, { en: 'My sister', ar: 'أختي', g: 'f' },
            { en: 'My father', ar: 'أبي', g: 'm' }, { en: 'My mother', ar: 'أمي', g: 'f' },
            { en: 'My son', ar: 'ابني', g: 'm' }, { en: 'My daughter', ar: 'ابنتي', g: 'f' },
          ],
          VG: (x) => [{ en: 'is a vegetarian', ar: x.S.g === 'f' ? 'نباتية' : 'نباتي' }],
          EV: (x) => [{ en: 'will eat', ar: x.S.g === 'f' ? 'ستتناول' : 'سيتناول' }],
          V: [
            { en: 'vegetable soup', ar: 'شوربة الخضار' }, { en: 'mixed salad', ar: 'السلطة المشكلة' },
            { en: 'cheese sandwiches', ar: 'شطائر الجبن' }, { en: 'rice and beans', ar: 'الأرز والفاصولياء' },
          ],
        },
        tags: ['vegetarian', 'family'], d: 3, limit: 10,
      },
    ],
    fills: [
      { en: 'I am allergic to nuts.', ar: 'عندي حساسية من المكسرات.', word: 'allergic', hint: 'حساسية' },
      { en: 'Does this dish contain peanuts?', ar: 'هل يحتوي هذا الطبق على الفول السوداني؟', word: 'contain' },
      { en: 'She does not eat meat or chicken.', ar: 'هي لا تأكل اللحم أو الدجاج.', word: 'meat' },
      { en: 'Is this dish spicy?', ar: 'هل هذا الطبق حار؟', word: 'spicy' },
      { en: 'We will make the salad without onions.', ar: 'سنعمل السلطة بدون البصل.', word: 'without' },
      { en: 'The doctor said I must follow a strict diet.', ar: 'قال الطبيب إن عليّ اتباع نظام غذائي صارم.', word: 'diet' },
      { en: 'Could you tell the chef about my allergy, please?', ar: 'هل يمكنك إخبار الطاهي بحساسيتي من فضلك؟', word: 'chef' },
      { en: 'This meal is safe for my son.', ar: 'هذه الوجبة آمن لابني.', word: 'safe' },
    ],
    orders: [
      { en: 'I am allergic to nuts and seafood.', ar: 'عندي حساسية من المكسرات والمأكولات البحرية.' },
      { en: 'Does this dish contain eggs or milk?', ar: 'هل يحتوي هذا الطبق على البيض أو الحليب؟' },
      { en: 'My daughter does not eat meat.', ar: 'ابنتي لا تأكل اللحم.' },
      { en: 'Please make the salad without onions.', ar: 'اصنع السلطة بدون البصل من فضلك.' },
      { en: 'Is this dish spicy or sweet?', ar: 'هل هذا الطبق حار أم حلو؟' },
      { en: 'She is going to order the vegetable soup.', ar: 'ستطلب شوربة الخضار.' },
    ],
    mc: [
      { question: 'You cannot eat peanuts. You tell the waiter:', options: ['I am allergic to peanuts.', 'I am thirty years old.', 'The check, please.', 'See you tomorrow.'], answerIndex: 0, ar: 'لا تستطيع أكل الفول السوداني، فتقول للنادل:' },
      { question: '"Vegetarian" means a person who:', options: ['does not eat meat', 'eats only meat', 'cooks fish', 'drinks coffee'], answerIndex: 0, ar: 'كلمة Vegetarian تعني شخصا:' },
      { question: 'Which question asks about ingredients?', options: ['Does this dish contain nuts?', 'Where is the station?', 'How old are you?', 'What is your name?'], answerIndex: 0, ar: 'أي سؤال يستفسر عن المكوّنات؟' },
      { question: 'The soup has no meat. It is ___ for a vegetarian.', options: ['safe', 'dangerous', 'spicy', 'expensive'], answerIndex: 0, ar: 'الحساء بلا لحم، فهو ___ للنباتي.' },
    ],
  },

  /* ================= lesson 73 — Paying the Bill and Tipping ================= */
  {
    num: 73,
    tags: ['money', 'restaurant', 'bill'],
    objectives: [
      'Ask for the check and understand the total',
      'Pay by card or cash and split the bill',
      'Leave a tip and keep the change politely',
    ],
    grammar: {
      explanation: 'When you finish the meal, ask for the check with "Could we have the check, please?" or "The check, please". The total is the full amount. To share the cost, say "Can we split the bill?" — then each person pays a part. Pay with "I will pay by card" or "I will pay with cash". Extra money for the waiter is a tip; give it with "Please keep the change" or "Here is a tip for you". The past forms are "I paid" and "she left a tip".',
      explanationAr: 'عند الانتهاء من الطعام اطلب الحساب بـ Could we have the check, please؟ أو The check, please. والـ total هو المبلغ الكامل. لتقاسم التكلفة قل Can we split the bill؟ فيدفع كل شخص حصته. وادفع بـ I will pay by card أو I will pay with cash. والمال الإضافي للنادل هو الإكرامية، واعطه بـ Please keep the change أو Here is a tip for you. وصيغة الماضي: I paid و she left a tip.',
      examples: [
        { en: 'Could we have the check, please?', ar: 'هل يمكننا طلب الحساب من فضلك؟' },
        { en: 'Can we split the bill three ways?', ar: 'هل يمكننا تقسيم الحساب ثلاثة أقسام؟' },
        { en: 'She left a generous tip for the waiter.', ar: 'تركت إكرامية سخية للنادل.' },
      ],
    },
    vocabulary: [
      { word: 'check', meaningAr: 'الحساب (في المطعم)', example: 'The check, please.', ipa: 'tʃɛk' },
      { word: 'bill', meaningAr: 'الفاتورة / الحساب', example: 'Can we have the bill now?' },
      { word: 'pay', meaningAr: 'يدفع', example: 'I will pay by card today.' },
      { word: 'tip', meaningAr: 'إكرامية', example: 'She left a good tip.' },
      { word: 'split', meaningAr: 'يقسم', example: 'Can we split the bill?' },
      { word: 'total', meaningAr: 'المجموع', example: 'The total is twenty-three dollars.' },
      { word: 'card', meaningAr: 'بطاقة', example: 'Do you take cards here?' },
      { word: 'cash', meaningAr: 'نقد', example: 'I will pay with cash.' },
      { word: 'counter', meaningAr: 'الكاونتر / الصندوق', example: 'You can pay at the counter.' },
      { word: 'dollar', meaningAr: 'دولار', example: 'This meal costs twelve dollars.' },
      { word: 'keep', meaningAr: 'يحتفظ', example: 'Please keep the change.' },
      { word: 'include', meaningAr: 'يشمل', example: 'The total does not include the dessert.' },
    ],
    scenario: [
      { en: 'The meal was excellent, thank you.', ar: 'كانت الوجبة ممتازة، شكرا لك.', d: 2 },
      { en: 'Could we have the check, please?', ar: 'هل يمكننا طلب الحساب من فضلك؟', d: 1 },
      { en: 'Of course. The total is twenty-three dollars.', ar: 'بالطبع. المجموع ثلاثة وعشرون دولارا.', d: 2 },
      { en: 'Can we split the bill three ways?', ar: 'هل يمكننا تقسيم الحساب ثلاثة أقسام؟', d: 1 },
      { en: 'No problem. You each pay eight dollars.', ar: 'لا مشكلة. تدفع كل واحد منكم ثمانية دولارات.', d: 2 },
      { en: 'I will pay by card today.', ar: 'سأدفع بالبطاقة اليوم.', d: 1 },
      { en: 'Sorry, the card machine does not work.', ar: 'عذرا، جهاز البطاقات لا يعمل.', d: 2 },
      { en: 'Then I will pay with cash.', ar: 'إذا سأدفع نقدا.', d: 1 },
      { en: 'Do you accept tips on the card?', ar: 'هل تقبلون الإكرامية على البطاقة؟', d: 2 },
      { en: 'Yes, you can add the tip on the screen.', ar: 'نعم، يمكنك إضافة الإكرامية على الشاشة.', d: 2 },
      { en: 'My sister paid her half yesterday.', ar: 'دفعت أختي حصتها أمس.', d: 3 },
      { en: 'She left a generous tip for the waiter.', ar: 'تركت إكرامية سخية للنادل.', d: 3 },
      { en: 'Please keep the change.', ar: 'احتفظ بالباقي من فضلك.', d: 1 },
      { en: 'Thank you, sir. Have a nice evening!', ar: 'شكرا لك يا سيدي. أتمنى لك سهرة سعيدة!', d: 2 },
      { en: 'We did not include the dessert in the total.', ar: 'لم نشمل الحلوى في المجموع.', d: 3 },
      { en: 'I am going to check the bill again.', ar: 'سأراجع الفاتورة مرة أخرى.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Can we {PAY}, please?', arTmpl: 'هل يمكننا أن {PAY_ar} من فضلك؟',
        slots: {
          PAY: [
            { en: 'pay by card', ar: 'ندفع بالبطاقة' }, { en: 'pay with cash', ar: 'ندفع نقدا' },
            { en: 'split the bill', ar: 'نقسم الحساب' }, { en: 'have the check', ar: 'نطلب الحساب' },
            { en: 'get a receipt', ar: 'نحصل على إيصال' },
          ],
        },
        tags: ['money', 'requests'], d: 1, limit: 5,
      },
      {
        tmpl: 'The {N} is {A} dollars.', arTmpl: '{N_ar} {A_ar} دولارا.',
        slots: {
          N: [
            { en: 'check', ar: 'الحساب' }, { en: 'bill', ar: 'الفاتورة' },
            { en: 'total', ar: 'المجموع' }, { en: 'tip', ar: 'الإكرامية' },
          ],
          A: [
            { en: 'twelve', ar: 'اثنا عشر' }, { en: 'fifteen', ar: 'خمسة عشر' },
            { en: 'twenty', ar: 'عشرين' }, { en: 'thirty', ar: 'ثلاثين' },
            { en: 'fifty', ar: 'خمسين' },
          ],
        },
        tags: ['money', 'numbers'], d: 2, limit: 20,
      },
      {
        tmpl: 'I will pay {W}.', arTmpl: 'سأدفع {W_ar}.',
        slots: {
          W: [
            { en: 'by card', ar: 'بالبطاقة' }, { en: 'with cash', ar: 'نقدا' },
            { en: 'at the counter', ar: 'عند الصندوق' }, { en: 'next time', ar: 'في المرة القادمة' },
            { en: 'in dollars', ar: 'بالدولارات' },
          ],
        },
        tags: ['money'], d: 1, limit: 5,
      },
      {
        tmpl: 'Here is the {K}.', arTmpl: 'تفضل {K_ar}.',
        slots: {
          K: [
            { en: 'check', ar: 'الحساب' }, { en: 'bill', ar: 'الفاتورة' },
            { en: 'receipt', ar: 'الإيصال' }, { en: 'tip', ar: 'الإكرامية' },
            { en: 'change', ar: 'الباقي' },
          ],
        },
        tags: ['money'], d: 1, limit: 5,
      },
      {
        tmpl: '{S} will give the waiter a tip.', arTmpl: '{S_ar} س{V_ar} للنادل إكرامية.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: 'will give', ar: B.arFuture('give', x.S.agr) }],
        },
        tags: ['money', 'tipping'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'Could we have the check, please?', ar: 'هل يمكننا طلب الحساب من فضلك؟', word: 'check', hint: 'الحساب' },
      { en: 'The total is twenty-three dollars.', ar: 'المجموع ثلاثة وعشرون دولارا.', word: 'total' },
      { en: 'Can we split the bill three ways?', ar: 'هل يمكننا تقسيم الحساب ثلاثة أقسام؟', word: 'split' },
      { en: 'I will pay by card today.', ar: 'سأدفع بالبطاقة اليوم.', word: 'card' },
      { en: 'Please keep the change.', ar: 'احتفظ بالباقي من فضلك.', word: 'change' },
      { en: 'She left a generous tip for the waiter.', ar: 'تركت إكرامية سخية للنادل.', word: 'tip' },
      { en: 'Sorry, the card machine does not work.', ar: 'عذرا، جهاز البطاقات لا يعمل.', word: 'machine' },
      { en: 'My sister paid her half yesterday.', ar: 'دفعت أختي حصتها أمس.', word: 'half' },
    ],
    orders: [
      { en: 'Could we have the check, please?', ar: 'هل يمكننا طلب الحساب من فضلك؟' },
      { en: 'The total is fifteen dollars.', ar: 'المجموع خمسة عشر دولارا.' },
      { en: 'Can we split the bill tonight?', ar: 'هل نقسم الحساب الليلة؟' },
      { en: 'I will pay by card, not cash.', ar: 'سأدفع بالبطاقة لا نقدا.' },
      { en: 'She left a good tip yesterday.', ar: 'تركت إكرامية جيدة أمس.' },
      { en: 'Please keep the change, thank you.', ar: 'احتفظ بالباقي من فضلك، شكرا لك.' },
    ],
    mc: [
      { question: 'You finished the meal. You ask the waiter:', options: ['Could we have the check, please?', 'Where is the school?', 'Is it raining?', 'I am allergic to nuts.'], answerIndex: 0, ar: 'انتهيت من الطعام، فتسأل النادل:' },
      { question: '"Split the bill" means:', options: ['نقسم الحساب بيننا', 'نحجز طاولة', 'نطلب حلوى', 'نغادر المطعم'], answerIndex: 0, ar: 'ما معنى Split the bill؟' },
      { question: 'Extra money for good service is:', options: ['a tip', 'a receipt', 'a menu', 'a cart'], answerIndex: 0, ar: 'المال الإضافي مقابل الخدمة الجيدة هو:' },
      { question: 'You have no cash. You say:', options: ['I will pay by card.', 'I will wash dishes.', 'Call the police.', 'Give me the menu.'], answerIndex: 0, ar: 'ليس معك نقد، فتقول:' },
    ],
  },

  /* ================= lesson 74 — Supermarket Shopping ================= */
  {
    num: 74,
    tags: ['supermarket', 'shopping'],
    objectives: [
      'Find products in the right aisle',
      'Use a cart and talk about prices and sales',
      'Check dates and buy fresh food',
    ],
    grammar: {
      explanation: 'In a supermarket, ask for help with "Where can I find the milk?" — the answer names an aisle: "It is on aisle three". A cart is big and a basket is small, and products stand on shelves. When the price is lower this week, the product is "on sale": "The rice is on sale this week". Always check the date: food that is too old is "expired", and good food is "fresh". Say plans with "I am going to pay at the checkout" and past actions with "We bought rice and sugar last Friday".',
      explanationAr: 'في السوبر ماركت اطلب المساعدة بـ Where can I find the milk؟ والجواب يذكر الممر: It is on aisle three. العربة كبيرة والسلة صغيرة، وتوضع المنتجات على الأرفف. وحين ينخفض السعر هذا الأسبوع نقول إن المنتج on sale: The rice is on sale this week. وتحقق دائما من التاريخ: الطعام القديم جدا expired والجيد fresh. وقل خطتك بـ I am going to pay at the checkout، والماضي بـ We bought rice and sugar last Friday.',
      examples: [
        { en: 'Where can I find the milk?', ar: 'أين أجد الحليب؟' },
        { en: 'The rice is on sale this week.', ar: 'الأرز عليه خصم هذا الأسبوع.' },
        { en: 'She does not buy expired food.', ar: 'هي لا تشتري طعاما منتهي الصلاحية.' },
      ],
    },
    vocabulary: [
      { word: 'supermarket', meaningAr: 'سوبر ماركت', example: 'The supermarket is open until ten.', ipa: 'ˈsuːpərmɑːrkɪt' },
      { word: 'aisle', meaningAr: 'ممر', example: 'The milk is on aisle three.' },
      { word: 'shelf', meaningAr: 'رف', example: 'I will get bread from the top shelf.' },
      { word: 'checkout', meaningAr: 'منطقة الدفع', example: 'The checkout was busy today.' },
      { word: 'cart', meaningAr: 'عربة تسوق', example: 'We need a big cart.' },
      { word: 'basket', meaningAr: 'سلة', example: 'Please put the eggs in the basket.' },
      { word: 'sale', meaningAr: 'عرض / تخفيض', example: 'The juice is on sale this week.' },
      { word: 'fresh', meaningAr: 'طازج', example: 'Are these apples fresh?' },
      { word: 'expired', meaningAr: 'منتهي الصلاحية', example: 'This yogurt is expired.' },
      { word: 'date', meaningAr: 'تاريخ (الصلاحية)', example: 'My mother checks the date on milk.' },
      { word: 'freezer', meaningAr: 'مجمد', example: 'The ice cream is in the freezer.' },
      { word: 'customer', meaningAr: 'زبون', example: 'The customer wants a refund.' },
    ],
    scenario: [
      { en: 'We need a big cart for the shopping.', ar: 'نحتاج عربة كبيرة للتسوق.', d: 1 },
      { en: 'Where can I find the milk?', ar: 'أين أجد الحليب؟', d: 1 },
      { en: 'It is on aisle three, next to the cheese.', ar: 'إنه في الممر الثالث بجانب الجبن.', d: 1 },
      { en: 'This store has ten aisles of food.', ar: 'في هذا المتجر عشرة ممرات من الطعام.', d: 2 },
      { en: 'I will get bread from the top shelf.', ar: 'سآخذ الخبز من الرف العلوي.', d: 2 },
      { en: 'The orange juice is on sale this week.', ar: 'عصير البرتقال عليه خصم هذا الأسبوع.', d: 2 },
      { en: 'How much is this big bottle of oil?', ar: 'كم سعر هذه الزجاجة الكبيرة من الزيت؟', d: 2 },
      { en: 'It costs five dollars today.', ar: 'سعرها خمسة دولارات اليوم.', d: 2 },
      { en: 'My mother always checks the date on milk.', ar: 'أمي تتحقق دائما من تاريخ الحليب.', d: 3 },
      { en: 'She does not buy expired food.', ar: 'هي لا تشتري طعاما منتهي الصلاحية.', d: 2 },
      { en: 'Are these apples fresh?', ar: 'هل هذه التفاحات طازجة؟', d: 1 },
      { en: 'Yes, they arrived from the farm this morning.', ar: 'نعم، وصلت من المزرعة هذا الصباح.', d: 2 },
      { en: 'We bought rice, sugar and tea last Friday.', ar: 'اشترينا الأرز والسكر والشاي الجمعة الماضية.', d: 3 },
      { en: 'The checkout was busy, so we waited ten minutes.', ar: 'كانت منطقة الدفع مزدحمة، فانتظرنا عشر دقائق.', d: 3 },
      { en: 'I am going to pay at the self-checkout.', ar: 'سأدفع عند الصندوق الذاتي.', d: 3 },
      { en: 'Please put the eggs in the basket carefully.', ar: 'ضع البيض في السلة بعناية من فضلك.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Where can I find the {S}?', arTmpl: 'أين أجد {S_ar}؟',
        slots: { S: SECTIONS },
        tags: ['supermarket', 'questions'], d: 1, limit: 8,
      },
      {
        tmpl: 'The {F} is on sale this week.', arTmpl: '{F_ar} {ON_ar} خصم هذا الأسبوع.',
        slots: {
          F: [
            { en: 'cheese', ar: 'الجبن', g: 'm' }, { en: 'jam', ar: 'المربى', g: 'f' },
            { en: 'olive oil', ar: 'زيت الزيتون', g: 'm' }, { en: 'rice', ar: 'الأرز', g: 'm' },
            { en: 'chicken', ar: 'الدجاج', g: 'm' }, { en: 'yogurt', ar: 'الزبادي', g: 'm' },
          ],
          ON: (x) => [{ en: 'is on sale', ar: x.F.g === 'f' ? 'عليها' : 'عليه' }],
        },
        tags: ['supermarket', 'sale'], d: 2, limit: 6,
      },
      {
        tmpl: 'Please put {F} in the cart.', arTmpl: 'من فضلك ضع {F_ar} في العربة.',
        slots: {
          F: [
            { en: 'the eggs', ar: 'البيض' }, { en: 'the rice', ar: 'الأرز' },
            { en: 'the chicken', ar: 'الدجاج' }, { en: 'the cheese', ar: 'الجبن' },
            { en: 'the vegetables', ar: 'الخضار' }, { en: 'the juice', ar: 'العصير' },
            { en: 'the sugar', ar: 'السكر' },
          ],
        },
        tags: ['supermarket', 'requests'], d: 1, limit: 7,
      },
      {
        tmpl: 'Is the {F} fresh or expired?', arTmpl: 'هل {F_ar} {AD_ar}؟',
        slots: {
          F: [
            { en: 'bread', ar: 'الخبز', g: 'm' }, { en: 'milk', ar: 'الحليب', g: 'm' },
            { en: 'fish', ar: 'السمك', g: 'm' }, { en: 'cheese', ar: 'الجبن', g: 'm' },
            { en: 'fruit', ar: 'الفاكهة', g: 'f' }, { en: 'yogurt', ar: 'الزبادي', g: 'm' },
          ],
          AD: (x) => [{ en: 'fresh or expired', ar: x.F.g === 'f' ? 'طازجة أم منتهية الصلاحية' : 'طازج أم منتهي الصلاحية' }],
        },
        tags: ['supermarket', 'fresh'], d: 2, limit: 6,
      },
      {
        tmpl: 'Aisle {N} has {S}.', arTmpl: 'الممر رقم {N_ar} فيه {S_ar}.',
        slots: {
          N: [
            { en: 'one', ar: '١' }, { en: 'two', ar: '٢' }, { en: 'three', ar: '٣' },
            { en: 'four', ar: '٤' }, { en: 'five', ar: '٥' }, { en: 'six', ar: '٦' },
            { en: 'seven', ar: '٧' }, { en: 'eight', ar: '٨' },
          ],
          S: SECTIONS,
        },
        tags: ['supermarket', 'numbers'], d: 2, limit: 16,
      },
    ],
    fills: [
      { en: 'Where can I find the milk?', ar: 'أين أجد الحليب؟', word: 'milk' },
      { en: 'The orange juice is on sale this week.', ar: 'عصير البرتقال عليه خصم هذا الأسبوع.', word: 'sale', hint: 'تخفيض' },
      { en: 'We need a big cart for the shopping.', ar: 'نحتاج عربة كبيرة للتسوق.', word: 'cart' },
      { en: 'She does not buy expired food.', ar: 'هي لا تشتري طعاما منتهي الصلاحية.', word: 'expired' },
      { en: 'Are these apples fresh?', ar: 'هل هذه التفاحات طازجة؟', word: 'fresh' },
      { en: 'I will get bread from the top shelf.', ar: 'سآخذ الخبز من الرف العلوي.', word: 'shelf' },
      { en: 'The checkout was busy, so we waited.', ar: 'كانت منطقة الدفع مزدحمة، فانتظرنا.', word: 'checkout' },
      { en: 'My mother always checks the date on milk.', ar: 'أمي تتحقق دائما من تاريخ الحليب.', word: 'date' },
    ],
    orders: [
      { en: 'Where can I find the fresh milk?', ar: 'أين أجد الحليب الطازج؟' },
      { en: 'The orange juice is on sale today.', ar: 'عصير البرتقال عليه خصم اليوم.' },
      { en: 'Please put the eggs in the cart.', ar: 'ضع البيض في العربة من فضلك.' },
      { en: 'She does not buy expired food here.', ar: 'هي لا تشتري طعاما منتهي الصلاحية هنا.' },
      { en: 'We bought rice and sugar last Friday.', ar: 'اشترينا الأرز والسكر الجمعة الماضية.' },
      { en: 'I am going to pay at the checkout.', ar: 'سأدفع عند منطقة الدفع.' },
    ],
    mc: [
      { question: 'Where do you push a cart in a supermarket?', options: ['in the aisles', 'in the kitchen', 'on the plane', 'at school'], answerIndex: 0, ar: 'أين تدفع العربة في السوبر ماركت؟' },
      { question: '"On sale" means the food is:', options: ['cheaper this week', 'expired', 'very spicy', 'from another country'], answerIndex: 0, ar: 'عبارة On sale تعني أن الطعام:' },
      { question: 'The date on the box tells you if the food is:', options: ['expired or fresh', 'heavy or light', 'red or blue', 'big or small'], answerIndex: 0, ar: 'التاريخ على العلبة يخبرك إن كان الطعام:' },
      { question: 'You look for bread. You ask:', options: ['Where can I find the bread?', 'How old are you?', 'Who is your teacher?', 'When is the party?'], answerIndex: 0, ar: 'تبحث عن الخبز، فتسأل:' },
    ],
  },
];
