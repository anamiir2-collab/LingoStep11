/* ============================================================
   v2 section data — s03-b2.js
   Home & Family · lessons 63–65
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

/* ---------- shared module banks ---------- */

/* chores with future forms (س + present) keyed by agreement class */
const CHORES_F = [
  {
    en: 'wash the dishes',
    ar: { I: 'سأغسل الأطباق', you: 'ستغسل الأطباق', he: 'سيغسل الأطباق', she: 'ستغسل الأطباق', we: 'سنغسل الأطباق', they: 'سيغسلون الأطباق' },
  },
  {
    en: 'cook lunch',
    ar: { I: 'سأطبخ الغداء', you: 'ستطبخ الغداء', he: 'سيطبخ الغداء', she: 'ستطبخ الغداء', we: 'سنطبخ الغداء', they: 'سيطبخون الغداء' },
  },
  {
    en: 'sweep the floor',
    ar: { I: 'سأكنس الأرضية', you: 'ستكنس الأرضية', he: 'سيكنس الأرضية', she: 'ستكنس الأرضية', we: 'سنكنس الأرضية', they: 'سيكنسون الأرضية' },
  },
  {
    en: 'take out the trash',
    ar: { I: 'سأخرج القمامة', you: 'ستخرج القمامة', he: 'سيخرج القمامة', she: 'ستخرج القمامة', we: 'سنخرج القمامة', they: 'سيخرجون القمامة' },
  },
  {
    en: 'water the plants',
    ar: { I: 'سأسقي النباتات', you: 'ستسقي النباتات', he: 'سيسقي النباتات', she: 'ستسقي النباتات', we: 'سنسقي النباتات', they: 'سيسقون النباتات' },
  },
];

/* chores after "It is ... turn to ..." (أن + present) keyed by agreement class */
const TURN_CHORES = [
  {
    en: 'wash the dishes',
    ar: { I: 'أغسل الأطباق', he: 'يغسل الأطباق', she: 'تغسل الأطباق', they: 'يغسلون الأطباق' },
  },
  {
    en: 'cook dinner',
    ar: { I: 'أطبخ العشاء', he: 'يطبخ العشاء', she: 'تطبخ العشاء', they: 'يطبخون العشاء' },
  },
  {
    en: 'set the table',
    ar: { I: 'أجهز الطاولة', he: 'يجهز الطاولة', she: 'تجهز الطاولة', they: 'يجهزون الطاولة' },
  },
  {
    en: 'sweep the floor',
    ar: { I: 'أكنس الأرضية', he: 'يكنس الأرضية', she: 'تكنس الأرضية', they: 'يكنسون الأرضية' },
  },
];

/* chore nouns for "Whose turn is it to ...?" (masdar forms) */
const CHORE_NOUNS = [
  { en: 'wash the dishes', ar: 'غسل الأطباق' }, { en: 'cook dinner', ar: 'طبخ العشاء' },
  { en: 'sweep the floor', ar: 'كنس الأرضية' }, { en: 'take out the trash', ar: 'إخراج القمامة' },
  { en: 'fold the laundry', ar: 'ثني الغسيل' }, { en: 'set the table', ar: 'تجهيز الطاولة' },
];

export const lessons = [

  /* ================= lesson 63 — Hosting Guests ================= */
  {
    num: 63,
    tags: ['hosting', 'guests', 'hospitality'],
    objectives: [
      'Welcome guests and offer drinks and food politely',
      'Serve guests using past simple and will',
      'Close a visit with warm thanks',
    ],
    grammar: {
      explanation: 'A good host welcomes guests warmly: "Welcome to our home!". Offer politely with "Would you like ...?" or "Can I offer you ...?". Say "Make yourself at home" so guests feel relaxed, and "Help yourself" for food and drinks. Use the past simple for what happened: "The guests arrived at seven". Use will for what you will do: "We will serve dinner at nine". Close the visit with "Thank you for a lovely evening".',
      explanationAr: 'يستقبل المضيف الجيد ضيوفه بحرارة: Welcome to our home! ويعرض بأدب بـ Would you like ...؟ أو Can I offer you ...؟ ويقول Make yourself at home ليشعر الضيف بالراحة وHelp yourself للطعام والشراب. واستخدم الماضي البسيط لما جرى: The guests arrived at seven. وwill لما ستفعله: We will serve dinner at nine. واختم الزيارة بـ Thank you for a lovely evening.',
      examples: [
        { en: 'Would you like a cup of tea?', ar: 'هل تريد كوب شاي؟' },
        { en: 'Help yourself to some sweets.', ar: 'تفضل وخذ بعض الحلويات.' },
        { en: 'We will serve dinner at nine.', ar: 'سنقدم العشاء في التاسعة.' },
      ],
    },
    vocabulary: [
      { word: 'welcome', meaningAr: 'أهلا وسهلا', example: 'Welcome to our home!' },
      { word: 'greet', meaningAr: 'يستقبل', example: 'We greet our guests at the door.' },
      { word: 'offer', meaningAr: 'يعرض', example: 'Can I offer you some coffee?' },
      { word: 'tea', meaningAr: 'شاي', example: 'Would you like some tea?', ipa: 'tiː' },
      { word: 'juice', meaningAr: 'عصير', example: 'The kids love juice.' },
      { word: 'sweets', meaningAr: 'حلويات', example: 'Help yourself to the sweets.' },
      { word: 'snack', meaningAr: 'وجبة خفيفة', example: 'Would you like a snack?' },
      { word: 'help yourself', meaningAr: 'تفضل وخذ بنفسك', example: 'Help yourself to some cake.' },
      { word: 'make yourself at home', meaningAr: 'اجعل نفسك كأنك في بيتك', example: 'Please make yourself at home.' },
      { word: 'glass', meaningAr: 'كأس', example: 'He poured juice into a glass.' },
      { word: 'serve', meaningAr: 'يقدم (طعاما)', example: 'We serve dinner at nine.' },
      { word: 'enjoy', meaningAr: 'يستمتع', example: 'Enjoy your meal!' },
    ],
    scenario: [
      { en: 'Welcome to our home!', ar: 'أهلا بكم في منزلنا!', d: 1 },
      { en: 'Please make yourself at home.', ar: 'اجعل نفسك كأنك في بيتك من فضلك.', d: 1 },
      { en: 'Would you like a cup of tea?', ar: 'هل تريد كوب شاي؟', d: 1 },
      { en: 'Yes, please. With a little sugar.', ar: 'نعم من فضلك. مع قليل من السكر.', d: 2 },
      { en: 'Help yourself to some sweets.', ar: 'تفضل وخذ بعض الحلويات.', d: 2 },
      { en: 'Can I offer you some juice?', ar: 'هل أعرض عليك بعض العصير؟', d: 2 },
      { en: 'The guests arrived at seven.', ar: 'وصل الضيوف في السابعة.', d: 1 },
      { en: 'My mother greeted them at the door.', ar: 'رحبت بهم أمي عند الباب.', d: 2 },
      { en: 'We will serve dinner at nine.', ar: 'سنقدم العشاء في التاسعة.', d: 2 },
      { en: 'The children offered dates and coffee.', ar: 'قدم الأطفال التمر والقهوة.', d: 2 },
      { en: 'Do the guests have everything they need?', ar: 'هل لدى الضيوف كل ما يحتاجون؟', d: 2 },
      { en: 'Would the kids like some juice?', ar: 'هل يريد الأطفال بعض العصير؟', d: 2 },
      { en: 'They do not want more food, thank you.', ar: 'لا يريدون مزيدا من الطعام، شكرا.', d: 2 },
      { en: 'I put a clean glass on the tray.', ar: 'وضعت كأسا نظيفا على الصينية.', d: 2 },
      { en: 'Do you want more tea?', ar: 'هل تريد المزيد من الشاي؟', d: 1 },
      { en: 'Thank you for a lovely evening.', ar: 'شكرا على أمسية جميلة.', d: 2 },
      { en: 'You are welcome. Come back soon.', ar: 'على الرحب والسعة. عد قريبا.', d: 2 },
      { en: 'I hope you liked the dinner.', ar: 'آمل أن يكون العشاء قد نال إعجابكم.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Would you like {DR}?', arTmpl: 'هل تريد {DR_ar}؟',
        slots: {
          DR: [
            { en: 'some tea', ar: 'الشاي' }, { en: 'some coffee', ar: 'القهوة' },
            { en: 'some juice', ar: 'العصير' }, { en: 'some water', ar: 'الماء' },
            { en: 'a snack', ar: 'وجبة خفيفة' }, { en: 'some hot chocolate', ar: 'الشوكولاتة الساخنة' },
          ],
        },
        tags: ['hosting', 'offers'], d: 1, limit: 6,
      },
      {
        tmpl: 'Help yourself to {F}.', arTmpl: 'تفضل وخذ من {F_ar}.',
        slots: {
          F: [
            { en: 'the sweets', ar: 'الحلويات' }, { en: 'the fruit', ar: 'الفاكهة' },
            { en: 'the cake', ar: 'الكعك' }, { en: 'the dates', ar: 'التمر' },
            { en: 'the cookies', ar: 'البسكويت' },
          ],
        },
        tags: ['hosting', 'food'], d: 1, limit: 5,
      },
      {
        tmpl: 'The guests {V} at {T}.', arTmpl: '{V_ar} الضيوف في {T_ar}.',
        slots: {
          V: [
            { en: 'arrived', ar: 'وصلوا' }, { en: 'sat down', ar: 'جلسوا' },
            { en: 'left', ar: 'غادروا' },
          ],
          T: [
            { en: 'seven', ar: 'السابعة' }, { en: 'eight', ar: 'الثامنة' },
            { en: 'nine', ar: 'التاسعة' }, { en: 'ten', ar: 'العاشرة' },
            { en: 'eleven', ar: 'الحادية عشرة' },
          ],
        },
        tags: ['hosting', 'past-simple'], d: 1, limit: 15,
      },
      {
        tmpl: 'We will serve {FD} to our guests.', arTmpl: 'سنقدم {FD_ar} لضيوفنا.',
        slots: {
          FD: [
            { en: 'rice and meat', ar: 'أرزا ولحما' }, { en: 'chicken and salad', ar: 'دجاجا وسلطة' },
            { en: 'soup and bread', ar: 'حساء وخبزا' }, { en: 'sweets and fruit', ar: 'حلويات وفاكهة' },
            { en: 'tea and sweets', ar: 'شاي وحلويات' }, { en: 'cake and juice', ar: 'كعكا وعصيرا' },
          ],
        },
        tags: ['hosting', 'future'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'Welcome to our home!', ar: 'أهلا بكم في منزلنا!', word: 'Welcome' },
      { en: 'Please make yourself at home.', ar: 'اجعل نفسك كأنك في بيتك من فضلك.', word: 'yourself' },
      { en: 'Would you like a cup of tea?', ar: 'هل تريد كوب شاي؟', word: 'tea' },
      { en: 'Help yourself to some sweets.', ar: 'تفضل وخذ بعض الحلويات.', word: 'Help' },
      { en: 'The guests arrived at seven.', ar: 'وصل الضيوف في السابعة.', word: 'arrived' },
      { en: 'We will serve dinner at nine.', ar: 'سنقدم العشاء في التاسعة.', word: 'serve' },
      { en: 'I put a clean glass on the tray.', ar: 'وضعت كأسا نظيفا على الصينية.', word: 'glass' },
      { en: 'Do you want more tea?', ar: 'هل تريد المزيد من الشاي؟', word: 'more' },
    ],
    orders: [
      { en: 'Please make yourself at home.', ar: 'اجعل نفسك كأنك في بيتك من فضلك.' },
      { en: 'Would you like a cup of tea?', ar: 'هل تريد كوب شاي؟' },
      { en: 'The guests arrived at seven.', ar: 'وصل الضيوف في السابعة.' },
      { en: 'We will serve dinner at nine.', ar: 'سنقدم العشاء في التاسعة.' },
      { en: 'Do the guests have everything they need?', ar: 'هل لدى الضيوف كل ما يحتاجون؟' },
      { en: 'Thank you for a lovely evening.', ar: 'شكرا على أمسية جميلة.' },
    ],
    mc: [
      { question: 'A guest sits down. You say:', options: ['Make yourself at home.', 'Go home now.', 'Do not sit.', 'Close the door.'], answerIndex: 0, ar: 'جلس الضيف، فتقول له:' },
      { question: '"Help yourself" means:', options: ['تفضل وخذ بنفسك', 'ساعدني في التنظيف', 'اجلس في مكانك', 'انتظر قليلا'], answerIndex: 0, ar: 'ما معنى Help yourself؟' },
      { question: 'The guests arrive. What do you offer first?', options: ['something to drink', 'your homework', 'your keys', 'the bill'], answerIndex: 0, ar: 'وصل الضيوف، فما تقدمه أولا؟' },
      { question: '"I hope you liked the dinner" means:', options: ['آمل أن يكون العشاء قد نال إعجابكم', 'لا أحب العشاء', 'العشاء جاهز', 'اطبخ العشاء'], answerIndex: 0, ar: 'ما معنى I hope you liked the dinner؟' },
      { question: 'Which one is a polite offer?', options: ['Would you like some coffee?', 'Give me the cup.', 'Drink now.', 'The tea is cold.'], answerIndex: 0, ar: 'أي جملة تعرض بأدب؟' },
    ],
  },

  /* ================= lesson 64 — Helping Neighbors ================= */
  {
    num: 64,
    tags: ['neighbors', 'helping', 'past-simple'],
    objectives: [
      'Borrow and lend things politely',
      'Offer help with tasks around the home',
      'Thank a neighbor for a favor',
    ],
    grammar: {
      explanation: 'Neighbors help each other with small favors. To take something, ask "Can I borrow your ladder?"; the answer is "Sure, I can lend it to you". Remember: you borrow from someone, but you lend to someone. Offer help with "I can help you with the dishes" or "Could you carry this bag for me?". Thank with "Thank you for helping me yesterday" and answer "Anytime". Use the past simple for finished help: "My neighbor lent me his tools".',
      explanationAr: 'يتعاون الجيران في المعروف. ولأخذ شيء اسأل Can I borrow your ladder؟ فيكون الجواب Sure, I can lend it to you. وتذكر: تستعير من شخص لكنك تُسلّف إلى شخص. واعرض المساعدة بـ I can help you with the dishes أو Could you carry this bag for me؟ واشكر بـ Thank you for helping me yesterday فيجيب عليه Anytime. واستخدم الماضي البسيط للمساعدة المنتهية: My neighbor lent me his tools.',
      examples: [
        { en: 'Can I borrow your ladder?', ar: 'هل يمكنني استعارة سلمك؟' },
        { en: 'I can help you with the dishes.', ar: 'أستطيع مساعدتك في الأطباق.' },
        { en: 'Thank you for helping me yesterday.', ar: 'شكرا لمساعدتي أمس.' },
      ],
    },
    vocabulary: [
      { word: 'neighbor', meaningAr: 'جار', example: 'My neighbor is kind.', ipa: 'neɪbər' },
      { word: 'borrow', meaningAr: 'يستعير', example: 'Can I borrow your pen?' },
      { word: 'lend', meaningAr: 'يسلّف', example: 'I can lend you my car.' },
      { word: 'favor', meaningAr: 'معروف / خدمة', example: 'Can you do me a favor?' },
      { word: 'carry', meaningAr: 'يحمل', example: 'Let me carry that bag.' },
      { word: 'heavy', meaningAr: 'ثقيل', example: 'The box is too heavy.' },
      { word: 'fix', meaningAr: 'يصلح', example: 'He fixed my bicycle.' },
      { word: 'thank', meaningAr: 'يشكر', example: 'Thank your neighbor today.' },
      { word: 'anytime', meaningAr: 'في أي وقت', example: '"Can you help?" "Anytime!"' },
      { word: 'together', meaningAr: 'معا', example: 'We clean the yard together.' },
      { word: 'kind', meaningAr: 'طيب', example: 'She is kind to everyone.' },
      { word: 'ask', meaningAr: 'يطلب', example: 'Just ask if you need help.' },
    ],
    scenario: [
      { en: 'Our neighbors help us a lot.', ar: 'يساعدنا جيراننا كثيرا.', d: 1 },
      { en: 'My neighbor is a kind man.', ar: 'جاري رجل طيب.', d: 1 },
      { en: 'Can I borrow your ladder?', ar: 'هل يمكنني استعارة سلمك؟', d: 1 },
      { en: 'Sure, I can lend it to you.', ar: 'بالتأكيد، سأسلّفك إياه.', d: 1 },
      { en: 'I will return it tomorrow.', ar: 'سأعيده غدا.', d: 2 },
      { en: 'Could you carry this bag for me?', ar: 'هل يمكنك حمل هذه الحقيبة من أجلي؟', d: 2 },
      { en: 'With pleasure. It is not heavy.', ar: 'بكل سرور. إنها ليست ثقيلة.', d: 2 },
      { en: 'I need a small favor.', ar: 'أحتاج معروفا صغيرا.', d: 1 },
      { en: 'Can you help me with the boxes?', ar: 'هل تساعدني مع الصناديق؟', d: 1 },
      { en: 'I can help you in the kitchen.', ar: 'أستطيع مساعدتك في المطبخ.', d: 1 },
      { en: 'My neighbor lent me his tools.', ar: 'أسلف لي جاري أدواته.', d: 2 },
      { en: 'She borrowed two eggs from us.', ar: 'استعرت منا بيضتين.', d: 2 },
      { en: 'Do not carry the heavy box alone.', ar: 'لا تحمل الصندوق الثقيل وحدك.', d: 2 },
      { en: 'Did you thank your neighbor?', ar: 'هل شكرت جارك؟', d: 2 },
      { en: 'Yes, I thanked him this morning.', ar: 'نعم، شكرته هذا الصباح.', d: 2 },
      { en: 'Thank you for helping me yesterday.', ar: 'شكرا لمساعدتي أمس.', d: 2 },
      { en: 'Anytime. We are good neighbors.', ar: 'في أي وقت. نحن جيران طيبون.', d: 2 },
      { en: 'We water their plants when they travel.', ar: 'نسقي نباتاتهم عندما يسافرون.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Can I borrow your {T}?', arTmpl: 'هل يمكنني استعارة {T_ar}؟',
        slots: {
          T: [
            { en: 'ladder', ar: 'سلمك' }, { en: 'car', ar: 'سيارتك' },
            { en: 'umbrella', ar: 'مظلتك' }, { en: 'phone charger', ar: 'شاحن هاتفك' },
            { en: 'vacuum cleaner', ar: 'مكنستك الكهربائية' }, { en: 'tools', ar: 'أدواتك' },
          ],
        },
        tags: ['neighbors', 'borrow'], d: 1, limit: 6,
      },
      {
        tmpl: 'I can help you with {TH}.', arTmpl: 'أستطيع مساعدتك في {TH_ar}.',
        slots: {
          TH: [
            { en: 'the dishes', ar: 'الأطباق' }, { en: 'the shopping bags', ar: 'حقائب التسوق' },
            { en: 'your homework', ar: 'واجبك' }, { en: 'the garden', ar: 'الحديقة' },
            { en: 'the boxes', ar: 'الصناديق' }, { en: 'your car', ar: 'سيارتك' },
            { en: 'the laundry', ar: 'الغسيل' },
          ],
        },
        tags: ['neighbors', 'helping'], d: 1, limit: 7,
      },
      {
        tmpl: '{P} {V} me {TL} last week.', arTmpl: '{V_ar} لي {P_ar} {TL_ar} الأسبوع الماضي.',
        slots: {
          P: [
            { en: 'My neighbor', ar: 'جاري', agr: 'he' }, { en: 'Our neighbor', ar: 'جارتنا', agr: 'she' },
            { en: 'My cousin', ar: 'ابن عمي', agr: 'he' },
          ],
          V: (x) => [{ en: 'lent', ar: x.P.agr === 'she' ? 'أسلفت' : 'أسلف' }],
          TL: [
            { en: 'a hammer', ar: 'مطرقا' }, { en: 'some money', ar: 'بعض المال' },
            { en: 'a toolbox', ar: 'صندوق أدوات' }, { en: 'an umbrella', ar: 'مظلة' },
          ],
        },
        tags: ['neighbors', 'lend', 'past-simple'], d: 2, limit: 12,
      },
      {
        tmpl: 'Thank you for {GH}.', arTmpl: 'شكرا على {GH_ar}.',
        slots: {
          GH: [
            { en: 'helping me', ar: 'مساعدتي' }, { en: 'carrying the bags', ar: 'حملك الحقائب' },
            { en: 'lending me the ladder', ar: 'إعارتي السلم' }, { en: 'your kind visit', ar: 'زيارتك الطيبة' },
            { en: 'watching the kids', ar: 'حراستك الأطفال' },
          ],
        },
        tags: ['neighbors', 'thanks'], d: 2, limit: 5,
      },
      {
        tmpl: 'We help {P} every {T}.', arTmpl: 'نساعد {P_ar} كل {T_ar}.',
        slots: {
          P: [
            { en: 'our neighbors', ar: 'جيراننا' }, { en: 'my grandmother', ar: 'جدتي' },
            { en: 'the old man next door', ar: 'الرجل العجوز المجاور' }, { en: 'my aunt', ar: 'عمتي' },
          ],
          T: [
            { en: 'Friday', ar: 'جمعة' }, { en: 'weekend', ar: 'عطلة نهاية الأسبوع' },
            { en: 'morning', ar: 'صباح' },
          ],
        },
        tags: ['neighbors', 'helping'], d: 1, limit: 12,
      },
    ],
    fills: [
      { en: 'Can I borrow your ladder?', ar: 'هل يمكنني استعارة سلمك؟', word: 'borrow' },
      { en: 'I need a small favor.', ar: 'أحتاج معروفا صغيرا.', word: 'favor' },
      { en: 'Could you carry this bag for me?', ar: 'هل يمكنك حمل هذه الحقيبة من أجلي؟', word: 'carry' },
      { en: 'My neighbor lent me his tools.', ar: 'أسلف لي جاري أدواته.', word: 'lent', hint: 'ماضي lend' },
      { en: 'She borrowed two eggs from us.', ar: 'استعرت منا بيضتين.', word: 'eggs' },
      { en: 'Do not carry the heavy box alone.', ar: 'لا تحمل الصندوق الثقيل وحدك.', word: 'alone' },
      { en: 'Thank you for helping me yesterday.', ar: 'شكرا لمساعدتي أمس.', word: 'helping' },
      { en: 'We water their plants when they travel.', ar: 'نسقي نباتاتهم عندما يسافرون.', word: 'water' },
    ],
    orders: [
      { en: 'Sure, I can lend it to you.', ar: 'بالتأكيد، سأسلّفك إياه.' },
      { en: 'My neighbor is a kind man.', ar: 'جاري رجل طيب.' },
      { en: 'Can you help me with the boxes?', ar: 'هل تساعدني مع الصناديق؟' },
      { en: 'Did you thank your neighbor?', ar: 'هل شكرت جارك؟' },
      { en: 'I will return it tomorrow.', ar: 'سأعيده غدا.' },
      { en: 'Our neighbors help us a lot.', ar: 'يساعدنا جيراننا كثيرا.' },
    ],
    mc: [
      { question: "You need your neighbor's tool. You ask:", options: ['Can I borrow it?', 'Keep it forever.', 'Buy a new door.', 'It is your fault.'], answerIndex: 0, ar: 'تحتاج أداة جارك، فتقول له:' },
      { question: '"Lend" means:', options: ['يسلّف', 'يستعير', 'يشتري', 'يكسر'], answerIndex: 0, ar: 'ما معنى lend؟' },
      { question: 'Your neighbor carries heavy bags. You:', options: ['offer to help', 'close the window', 'go to sleep', 'borrow his bags'], answerIndex: 0, ar: 'يحمل جارك حقائب ثقيلة، فأنت:' },
      { question: 'Which sentence asks politely?', options: ['Could you help me, please?', 'Carry this now!', 'You must help.', 'Help is here.'], answerIndex: 0, ar: 'أي جملة تسأل بأدب؟' },
      { question: '"Favor" means:', options: ['معروف / خدمة', 'جار', 'أداة', 'سلم'], answerIndex: 0, ar: 'ما معنى favor؟' },
    ],
  },

  /* ================= lesson 65 — Sharing Household Chores ================= */
  {
    num: 65,
    tags: ['chores', 'family', 'future'],
    objectives: [
      'Name common household chores',
      'Divide the chores and say whose turn it is',
      'Use will and going to for this week\'s chores',
    ],
    grammar: {
      explanation: 'Families divide the chores so the work is fair. Use the present simple for routines: "My brother sweeps the floor twice a week". Use will or going to for this week\'s plan: "I will cook lunch", "We are going to clean the house". Say whose turn it is: "I cooked today, so it is your turn" or "It is my turn to set the table". Ask politely: "Can you set the table, please?".',
      explanationAr: 'تقسم العائلة الأعمال المنزلية ليبقى العمل عادلا. واستخدم المضارع البسيط للروتين: My brother sweeps the floor twice a week. وwill أو going to لخطة هذا الأسبوع: I will cook lunch، We are going to clean the house. وقل مَن عليه الدور: I cooked today, so it is your turn أو It is my turn to set the table. واسأل بأدب: Can you set the table, please؟',
      examples: [
        { en: 'We divide the chores every Sunday.', ar: 'نقسم الأعمال المنزلية كل أحد.' },
        { en: 'I cooked today, so it is your turn.', ar: 'طبخت اليوم، إذن حان دورك.' },
        { en: 'Whose turn is it to wash the dishes?', ar: 'من عليه دور غسل الأطباق؟' },
      ],
    },
    vocabulary: [
      { word: 'chores', meaningAr: 'الأعمال المنزلية', example: 'We share the chores.' },
      { word: 'divide', meaningAr: 'يقسم', example: 'Divide the chores on Sunday.' },
      { word: 'share', meaningAr: 'يتشارك', example: 'We share the work.' },
      { word: 'wash the dishes', meaningAr: 'يغسل الأطباق', example: 'It is my turn to wash the dishes.' },
      { word: 'cook', meaningAr: 'يطبخ', example: 'I cook dinner on Mondays.' },
      { word: 'sweep', meaningAr: 'يكنس', example: 'Sweep the floor after dinner.' },
      { word: 'take out the trash', meaningAr: 'يخرج القمامة', example: 'Take out the trash, please.' },
      { word: 'fold the laundry', meaningAr: 'يثني الغسيل', example: 'Fold the laundry when it is dry.' },
      { word: 'set the table', meaningAr: 'يجهز الطاولة', example: 'Set the table for dinner.' },
      { word: 'fair', meaningAr: 'عادل', example: 'The plan is fair for everyone.' },
      { word: 'turn', meaningAr: 'دور', example: 'It is your turn now.' },
      { word: 'rest', meaningAr: 'يستريح', example: 'Rest after the work is done.' },
    ],
    scenario: [
      { en: 'We divide the chores every Sunday.', ar: 'نقسم الأعمال المنزلية كل أحد.', d: 1 },
      { en: 'We are going to clean the house after breakfast.', ar: 'سننظف المنزل بعد الفطور.', d: 2 },
      { en: 'I cooked today, so it is your turn.', ar: 'طبخت اليوم، إذن حان دورك.', d: 2 },
      { en: 'It is your turn to wash the dishes.', ar: 'حان دورك لغسل الأطباق.', d: 1 },
      { en: 'My brother sweeps the floor twice a week.', ar: 'يكنس أخي الأرضية مرتين في الأسبوع.', d: 2 },
      { en: 'Who will cook dinner tonight?', ar: 'من سيطبخ العشاء الليلة؟', d: 2 },
      { en: 'I will cook rice and chicken.', ar: 'سأطبخ الأرز والدجاج.', d: 2 },
      { en: 'Can you set the table, please?', ar: 'هل تجهز الطاولة من فضلك؟', d: 1 },
      { en: 'Of course. Where are the plates?', ar: 'بالطبع. أين الأطباق؟', d: 2 },
      { en: 'My sister does not like to sweep.', ar: 'لا تحب أختي الكنس.', d: 1 },
      { en: 'We share the work fairly.', ar: 'نتشارك العمل بعدالة.', d: 2 },
      { en: 'Did you take out the trash?', ar: 'هل أخرجت القمامة؟', d: 1 },
      { en: 'Yes, I took it out after breakfast.', ar: 'نعم، أخرجتها بعد الفطور.', d: 2 },
      { en: 'She folded the laundry and cleaned the kitchen.', ar: 'ثنت الغسيل ونظفت المطبخ.', d: 2 },
      { en: 'I will rest after I finish.', ar: 'سأستريح بعد أن أنهي.', d: 2 },
      { en: 'Do not forget to water the plants.', ar: 'لا تنس أن تسقي النباتات.', d: 2 },
      { en: 'Everyone helps in our home.', ar: 'الجميع يساعد في منزلنا.', d: 1 },
      { en: 'The kids dried the plates with a towel.', ar: 'نشف الأطفال الأطباق بمنشفة.', d: 2 },
    ],
    patterns: [
      {
        tmpl: '{P} will {C} this week.', arTmpl: '{P_ar} {C_ar} هذا الأسبوع.',
        slots: {
          P: [
            { en: 'My brother', ar: 'أخي', agr: 'he' }, { en: 'My sister', ar: 'أختي', agr: 'she' },
            { en: 'My parents', ar: 'والداي', agr: 'they' }, { en: 'The kids', ar: 'الأطفال', agr: 'they' },
          ],
          C: (x) => CHORES_F.map((c) => ({ en: c.en, ar: c.ar[x.P.agr] })),
        },
        tags: ['chores', 'future'], d: 2, limit: 20,
      },
      {
        tmpl: 'Whose turn is it to {CN}?', arTmpl: 'من عليه دور {CN_ar}؟',
        slots: { CN: CHORE_NOUNS },
        tags: ['chores', 'questions'], d: 2, limit: 6,
      },
      {
        tmpl: 'I {V} today, so it is your turn.', arTmpl: '{V_ar} اليوم، إذن حان دورك.',
        slots: {
          V: [
            { en: 'cleaned the house', ar: 'نظفت المنزل' }, { en: 'did the shopping', ar: 'قمت بالتسوق' },
            { en: 'washed the dishes', ar: 'غسلت الأطباق' }, { en: 'cooked lunch', ar: 'طبخت الغداء' },
          ],
        },
        tags: ['chores', 'past-simple'], d: 2, limit: 4,
      },
      {
        tmpl: 'It is {PS} turn to {CT}.', arTmpl: '{PS_ar} أن {CT_ar}.',
        slots: {
          PS: [
            { en: 'my', ar: 'دوري', agr: 'I' }, { en: 'his', ar: 'دوره', agr: 'he' },
            { en: 'her', ar: 'دورها', agr: 'she' }, { en: 'their', ar: 'دورهم', agr: 'they' },
          ],
          CT: (x) => TURN_CHORES.map((c) => ({ en: c.en, ar: c.ar[x.PS.agr] })),
        },
        tags: ['chores', 'turns'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'We divide the chores every Sunday.', ar: 'نقسم الأعمال المنزلية كل أحد.', word: 'chores' },
      { en: 'I cooked today, so it is your turn.', ar: 'طبخت اليوم، إذن حان دورك.', word: 'turn' },
      { en: 'My brother sweeps the floor twice a week.', ar: 'يكنس أخي الأرضية مرتين في الأسبوع.', word: 'sweeps' },
      { en: 'Can you set the table, please?', ar: 'هل تجهز الطاولة من فضلك؟', word: 'set' },
      { en: 'Did you take out the trash?', ar: 'هل أخرجت القمامة؟', word: 'trash' },
      { en: 'She folded the laundry and cleaned the kitchen.', ar: 'ثنت الغسيل ونظفت المطبخ.', word: 'laundry' },
      { en: 'I will rest after I finish.', ar: 'سأستريح بعد أن أنهي.', word: 'rest' },
      { en: 'Everyone helps in our home.', ar: 'الجميع يساعد في منزلنا.', word: 'Everyone' },
    ],
    orders: [
      { en: 'We share the work fairly.', ar: 'نتشارك العمل بعدالة.' },
      { en: 'I cooked today, so it is your turn.', ar: 'طبخت اليوم، إذن حان دورك.' },
      { en: 'Who will cook dinner tonight?', ar: 'من سيطبخ العشاء الليلة؟' },
      { en: 'Do not forget to water the plants.', ar: 'لا تنس أن تسقي النباتات.' },
      { en: 'The kids dried the plates with a towel.', ar: 'نشف الأطفال الأطباق بمنشفة.' },
      { en: 'It is your turn to wash the dishes.', ar: 'حان دورك لغسل الأطباق.' },
    ],
    mc: [
      { question: 'Dinner is ready and you made it. You say:', options: ['I cooked today.', 'I will sleep.', 'Set the bed.', 'Divide the wall.'], answerIndex: 0, ar: 'العشاء جاهز وأنت من طبخه، فتقول:' },
      { question: '"Divide the chores" means:', options: ['تقسيم الأعمال المنزلية', 'طبخ العشاء', 'غسل السيارة', 'شراء الأغراض'], answerIndex: 0, ar: 'ما معنى divide the chores؟' },
      { question: 'Whose turn is it to wash the dishes? It is ___ turn.', options: ['her', 'he', 'him', 'she'], answerIndex: 0, ar: 'أكمل: إنه دور ___ لغسل الأطباق.' },
      { question: 'Which chore uses a broom?', options: ['sweep the floor', 'cook rice', 'fold laundry', 'water plants'], answerIndex: 0, ar: 'أي عمل منزلي يستخدم المكنسة؟' },
      { question: '"Fair" means:', options: ['عادل', 'متعب', 'ثقيل', 'صغير'], answerIndex: 0, ar: 'ما معنى fair؟' },
    ],
  },
];
