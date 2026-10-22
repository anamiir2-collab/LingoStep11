/* ============================================================
   v2 section data — s05-c2.js
   Mobility & Travel · lessons 114–116
   114 Asking for Help Abroad · 115 Currency Exchange ·
   116 Tourist Attractions
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 114 — Asking for Help Abroad ================= */
  {
    num: 114,
    tags: ['help', 'abroad'],
    objectives: [
      'Ask strangers for help politely in a foreign city',
      'Explain that you do not speak the language well',
      'Ask people to repeat, slow down or write things down',
    ],
    grammar: {
      explanation: 'When you need help abroad, start with "Excuse me" and use polite modals: "Could you write it down for me?", "Can you show me the way?". Explain your level with "I do not speak the language well". Present perfect continuous shows effort until now: "I have been walking for an hour". If-clauses describe plans for problems: "If you get lost, look for a police officer". The embassy helps with serious problems like lost passports abroad.',
      explanationAr: 'عند حاجتك للمساعدة في الخارج ابدأ بـ Excuse me واستخدم أفعال القدرة المهذبة: Could you write it down for me؟ وCan you show me the way؟ واشرح مستواك بـ I do not speak the language well. والمضارع التام المستمر يبين جهدًا مستمرا حتى الآن: I have been walking for an hour. وجمل الشرط تصف خطط المواجهة: If you get lost, look for a police officer. والسفارة تساعد في المشاكل الكبيرة مثل فقدان جواز السفر في الخارج.',
      examples: [
        { en: 'Excuse me, I am lost.', ar: 'عفوا، لقد ضللت الطريق.' },
        { en: 'I do not speak the language well.', ar: 'لا أتكلم اللغة جيدا.' },
        { en: 'Could you write it down for me?', ar: 'هل تكتبه لي من فضلك؟' },
      ],
    },
    vocabulary: [
      { word: 'lost', meaningAr: 'تائه / ضلل الطريق', example: 'Excuse me, I am lost.', ipa: 'lɒst' },
      { word: 'abroad', meaningAr: 'في الخارج', example: 'It is my first time abroad.' },
      { word: 'embassy', meaningAr: 'سفارة', example: 'Where is the nearest embassy, please?' },
      { word: 'language', meaningAr: 'لغة', example: 'I do not speak the language well.' },
      { word: 'write down', meaningAr: 'يكتب (دونًا)', example: 'Could you write it down for me?' },
      { word: 'way', meaningAr: 'طريق / اتجاه', example: 'Can you show me the way?' },
      { word: 'battery', meaningAr: 'بطارية', example: 'My phone battery has died.' },
      { word: 'local', meaningAr: 'محلي', example: 'You should buy a local SIM card.' },
      { word: 'explain', meaningAr: 'يشرح', example: 'Could you explain that again, please?' },
      { word: 'police officer', meaningAr: 'شرطي', example: 'Look for a police officer if you get lost.' },
      { word: 'street name', meaningAr: 'اسم الشارع', example: 'Here is the street name on paper.' },
      { word: 'friendly', meaningAr: 'ودود', example: 'Most people here are friendly.' },
    ],
    scenario: [
      { en: 'Excuse me, I am lost.', ar: 'عفوا، لقد ضللت الطريق.', d: 1 },
      { en: 'Can you show me the way to the museum?', ar: 'هل تدلني على الطريق إلى المتحف؟', d: 2 },
      { en: 'I do not speak the language well.', ar: 'لا أتكلم اللغة جيدا.', d: 1 },
      { en: 'Could you write it down for me?', ar: 'هل تكتبه لي من فضلك؟', d: 2 },
      { en: 'Sure, here is the street name.', ar: 'بالتأكيد، هذا اسم الشارع.', d: 1 },
      { en: 'If you get lost, look for a police officer.', ar: 'إذا ضللت الطريق فابحث عن شرطي.', d: 3 },
      { en: 'The embassy can help with serious problems.', ar: 'السفارة تستطيع المساعدة في المشاكل الكبيرة.', d: 2 },
      { en: 'Where is the nearest embassy, please?', ar: 'أين أقرب سفارة من فضلك؟', d: 2 },
      { en: 'I have been walking for an hour.', ar: 'أمشي منذ ساعة.', d: 2 },
      { en: 'My phone battery has died, so I cannot check the map.', ar: 'نفدت بطارية هاتفي، لذا لا أستطيع رؤية الخريطة.', d: 3 },
      { en: 'You should buy a local SIM card next time.', ar: 'يجب أن تشتري شريحة اتصال محلية في المرة القادمة.', d: 2 },
      { en: 'Please say that again slowly.', ar: 'من فضلك قلها مرة أخرى ببطء.', d: 1 },
      { en: 'I do not understand this sign.', ar: 'لا أفهم هذه اللافتة.', d: 1 },
      { en: 'It means the road is closed today.', ar: 'تعني أن الطريق مغلق اليوم.', d: 2 },
      { en: 'I really appreciate your help today.', ar: 'أقدّر مساعدتك اليوم حقا.', d: 1 },
      { en: 'Do not worry. Most people here are friendly.', ar: 'لا تقلق. معظم الناس هنا ودودون.', d: 2 },
      { en: 'If the bus does not come, we might walk home.', ar: 'إذا لم يأت الباص فقد نمشي إلى البيت.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Excuse me, I am looking for {P}.', arTmpl: 'عفوا، أبحث عن {P_ar}.',
        slots: {
          P: [
            { en: 'the main square', ar: 'الساحة الرئيسة' }, { en: 'the bus stop', ar: 'موقف الباص' },
            { en: 'a pharmacy', ar: 'صيدلية' }, { en: 'the tourist office', ar: 'مكتب السياحة' },
            { en: 'the nearest bank', ar: 'أقرب بنك' }, { en: 'the embassy', ar: 'السفارة' },
          ],
        },
        tags: ['help', 'directions'], d: 1, limit: 6,
      },
      {
        tmpl: 'Could you write {O} down for me?', arTmpl: 'هل يمكنك كتابة {O_ar} لي؟',
        slots: {
          O: [
            { en: 'the address', ar: 'العنوان' }, { en: 'the name', ar: 'الاسم' },
            { en: 'the price', ar: 'السعر' }, { en: 'the bus number', ar: 'رقم الباص' },
          ],
        },
        tags: ['help', 'requests'], d: 2, limit: 4,
      },
      {
        tmpl: 'If I do not know the way, I will ask a {L}.', arTmpl: 'إذا لم أكن أعرف الطريق، سأسأل {L_ar}.',
        slots: {
          L: [
            { en: 'local person', ar: 'شخصا محليا' }, { en: 'police officer', ar: 'شرطيا' },
            { en: 'shopkeeper', ar: 'صاحب متجر' }, { en: 'taxi driver', ar: 'سائق سيارة أجرة' },
          ],
        },
        tags: ['help', 'if-clauses'], d: 3, limit: 4,
      },
      {
        tmpl: 'I have been in {C} for {D}.', arTmpl: 'أنا في {C_ar} منذ {D_ar}.',
        slots: {
          C: [
            { en: 'Spain', ar: 'إسبانيا' }, { en: 'Japan', ar: 'اليابان' },
            { en: 'Germany', ar: 'ألمانيا' }, { en: 'Brazil', ar: 'البرازيل' },
          ],
          D: [
            { en: 'two days', ar: 'يومين' }, { en: 'a week', ar: 'أسبوع' },
            { en: 'three hours', ar: 'ثلاث ساعات' }, { en: 'a month', ar: 'شهر' },
          ],
        },
        tags: ['help', 'present-perfect'], d: 2, limit: 16,
      },
      {
        tmpl: 'You should carry {I} when you travel.', arTmpl: 'يجب أن تحمل {I_ar} عند سفرك.',
        slots: {
          I: [
            { en: 'a paper map', ar: 'خريطة ورقية' }, { en: 'a hotel business card', ar: 'بطاقة من الفندق' },
            { en: 'some cash', ar: 'بعض النقود' }, { en: 'a charged phone', ar: 'هاتفا مشحونا' },
          ],
        },
        tags: ['help', 'modals'], d: 2, limit: 4,
      },
    ],
    fills: [
      { en: 'Excuse me, I am lost.', ar: 'عفوا، لقد ضللت الطريق.', word: 'lost', hint: 'تائه' },
      { en: 'I do not speak the language well.', ar: 'لا أتكلم اللغة جيدا.', word: 'language' },
      { en: 'Could you write it down for me?', ar: 'هل تكتبه لي من فضلك؟', word: 'write' },
      { en: 'Where is the nearest embassy, please?', ar: 'أين أقرب سفارة من فضلك؟', word: 'embassy' },
      { en: 'My phone battery has died, so I cannot check the map.', ar: 'نفدت بطارية هاتفي، لذا لا أستطيع رؤية الخريطة.', word: 'battery' },
      { en: 'You should buy a local SIM card next time.', ar: 'يجب أن تشتري شريحة اتصال محلية في المرة القادمة.', word: 'local' },
      { en: 'I do not understand this sign.', ar: 'لا أفهم هذه اللافتة.', word: 'understand' },
      { en: 'I really appreciate your help today.', ar: 'أقدّر مساعدتك اليوم حقا.', word: 'help' },
    ],
    orders: [
      { en: 'Excuse me, I am lost.', ar: 'عفوا، لقد ضللت الطريق.' },
      { en: 'I do not speak the language well.', ar: 'لا أتكلم اللغة جيدا.' },
      { en: 'Could you write it down for me?', ar: 'هل تكتبه لي من فضلك؟' },
      { en: 'Where is the nearest embassy, please?', ar: 'أين أقرب سفارة من فضلك؟' },
      { en: 'If you get lost, look for a police officer.', ar: 'إذا ضللت الطريق فابحث عن شرطي.' },
      { en: 'I really appreciate your help today.', ar: 'أقدّر مساعدتك اليوم حقا.' },
    ],
    mc: [
      { question: 'You do not know where you are. You say:', options: ['Excuse me, I am lost.', 'I am leaving now.', 'I am at home.', 'I am early.'], answerIndex: 0, ar: 'لا تعرف مكانك، فتقول:' },
      { question: 'Which sentence asks someone to help with writing?', options: ['Could you write it down for me?', 'Write your name now!', 'I wrote a letter.', 'The pen is new.'], answerIndex: 0, ar: 'أي جملة تطلب مساعدة في الكتابة؟' },
      { question: 'Where do you go for serious problems abroad, like a lost passport?', options: ['the embassy', 'the minibar', 'the duty-free shop', 'the parking'], answerIndex: 0, ar: 'أين تذهب للمشاكل الكبيرة في الخارج مثل فقدان جواز السفر؟' },
      { question: '"I have been walking for an hour" means:', options: ['أمشي منذ ساعة', 'مشيت ساعة بالأمس', 'سأمشي ساعة', 'أكره المشي'], answerIndex: 0, ar: 'ما معنى I have been walking for an hour؟' },
      { question: 'Someone speaks fast. You politely say:', options: ['Please say that again slowly.', 'Speak quickly!', 'I understand everything.', 'Do not talk.'], answerIndex: 0, ar: 'يتكلم أحدهم بسرعة، فتقول بأدب:' },
    ],
  },

  /* ================= lesson 115 — Currency Exchange ================= */
  {
    num: 115,
    tags: ['money', 'currency'],
    objectives: [
      'Exchange money and ask about the rate',
      'Ask about commission and get a receipt',
      'Compare places to change money safely',
    ],
    grammar: {
      explanation: 'At the exchange office, say what you want with "I want to exchange ... to ...": "I want to exchange dollars to euros". Ask about costs with "What is the commission here?". Percent answers the question: "The commission is two percent". Always ask "Can I have a receipt for the exchange?". Use "better than" to compare: "Banks give better rates than airports". Negative permission uses "cannot": "I cannot change money without my passport".',
      explanationAr: 'في مكتب الصرف قل ما تريد بـ I want to exchange ... to ... مثل: I want to exchange dollars to euros. واسأل عن التكلفة بـ What is the commission here؟ ويجيب عنها السعر: The commission is two percent. واطلب دائما إيصالا بـ Can I have a receipt for the exchange؟ وقارن بـ better than مثل: Banks give better rates than airports. أما نفي الإذن فبـ cannot مثل: I cannot change money without my passport.',
      examples: [
        { en: 'I want to exchange dollars to euros.', ar: 'أريد تحويل دولارات إلى يوروهات.' },
        { en: 'The commission is two percent.', ar: 'العمولة اثنين بالمئة.' },
        { en: 'Can I have a receipt for the exchange?', ar: 'هل أحصل على إيصال للتحويل؟' },
      ],
    },
    vocabulary: [
      { word: 'currency', meaningAr: 'عملة', example: 'What is the local currency here?', ipa: 'ˈkʌrənsi' },
      { word: 'exchange', meaningAr: 'يحوّل / صرف', example: 'I want to exchange dollars to euros.' },
      { word: 'rate', meaningAr: 'سعر الصرف', example: 'The rate is good at the bank.' },
      { word: 'commission', meaningAr: 'عمولة', example: 'What is the commission here?' },
      { word: 'percent', meaningAr: 'بالمئة', example: 'The commission is two percent.' },
      { word: 'euro', meaningAr: 'يورو', example: 'One hundred euros, please.' },
      { word: 'exchange office', meaningAr: 'مكتب صرف', example: 'The exchange office closes at five.' },
      { word: 'receipt', meaningAr: 'إيصال', example: 'Can I have a receipt for the exchange?' },
      { word: 'pound', meaningAr: 'جنيه / باوند', example: 'Can I exchange pounds too?' },
      { word: 'accept', meaningAr: 'يقبل', example: 'We accept pounds, dollars and yen.' },
      { word: 'note', meaningAr: 'ورقة نقدية', example: 'The notes are old and torn.' },
      { word: 'torn', meaningAr: 'ممزق', example: 'They refused the torn note.' },
    ],
    scenario: [
      { en: 'I want to exchange dollars to euros.', ar: 'أريد تحويل دولارات إلى يوروهات.', d: 1 },
      { en: 'How much is one hundred dollars in euros?', ar: 'كم يساوي مئة دولار باليورو؟', d: 2 },
      { en: 'The rate is one dollar to ninety cents.', ar: 'سعر الصرف دولار واحد إلى تسعين سنتا.', d: 2 },
      { en: 'What is the commission here?', ar: 'كم العمولة هنا؟', d: 1 },
      { en: 'The commission is two percent.', ar: 'العمولة اثنين بالمئة.', d: 1 },
      { en: 'That is fair. I will change two hundred dollars.', ar: 'هذا معقول. سأحول مئتي دولار.', d: 2 },
      { en: 'Can I have a receipt for the exchange?', ar: 'هل أحصل على إيصال للتحويل؟', d: 2 },
      { en: 'Here is your receipt and your euros.', ar: 'هذا إيصالك ويوروهاتك.', d: 1 },
      { en: 'Please count the money before you leave.', ar: 'من فضلك عد المال قبل أن تغادر.', d: 2 },
      { en: 'The exchange office closes at five.', ar: 'مكتب الصرف يغلق في الخامسة.', d: 1 },
      { en: 'Banks give better rates than airports.', ar: 'البنوك تعطي أسعار صرف أفضل من المطارات.', d: 2 },
      { en: 'I cannot change money without my passport.', ar: 'لا أستطيع تغيير المال بدون جواز سفري.', d: 2 },
      { en: 'Can I exchange pounds too?', ar: 'هل أستطيع تحويل الجنيهات أيضا؟', d: 1 },
      { en: 'Yes, we accept pounds, dollars and yen.', ar: 'نعم، نقبل الجنيهات والدولارات والين.', d: 2 },
      { en: 'Do not change money on the street.', ar: 'لا تغير المال في الشارع.', d: 2 },
      { en: 'The notes are old and torn.', ar: 'الأوراق النقدية قديمة وممزقة.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I want to exchange {A} dollars to {T}.', arTmpl: 'أريد تحويل {A_ar} دولارا إلى {T_ar}.',
        slots: {
          A: [
            { en: 'fifty', ar: 'خمسين' }, { en: 'one hundred', ar: 'مئة' },
            { en: 'two hundred', ar: 'مئتين' }, { en: 'three hundred', ar: 'ثلاث مئة' }, { en: 'four hundred', ar: 'أربع مئة' },
          ],
          T: [
            { en: 'euros', ar: 'يوروهات' }, { en: 'dirhams', ar: 'دراهم' },
            { en: 'pounds', ar: 'جنيهات' }, { en: 'riyals', ar: 'ريالات' },
          ],
        },
        tags: ['money', 'currency'], d: 1, limit: 20,
      },
      {
        tmpl: 'The commission is {P} percent.', arTmpl: 'العمولة {P_ar} بالمئة.',
        slots: {
          P: [
            { en: 'one', ar: 'واحد' }, { en: 'two', ar: 'اثنين' },
            { en: 'three', ar: 'ثلاثة' }, { en: 'five', ar: 'خمسة' },
            { en: 'zero', ar: 'صفر' },
          ],
        },
        tags: ['money', 'numbers'], d: 1, limit: 5,
      },
      {
        tmpl: 'Can I exchange {C} here?', arTmpl: 'هل أستطيع تحويل {C_ar} هنا؟',
        slots: {
          C: [
            { en: 'pounds', ar: 'الجنيهات' }, { en: 'euros', ar: 'اليوروهات' },
            { en: 'dollars', ar: 'الدولارات' }, { en: 'dirhams', ar: 'الدراهم' },
            { en: 'riyals', ar: 'الريالات' }, { en: 'yen', ar: 'الين' },
          ],
        },
        tags: ['money', 'questions'], d: 2, limit: 6,
      },
      {
        tmpl: 'Is the rate better at the {P}?', arTmpl: 'هل سعر الصرف أفضل في {P_ar}؟',
        slots: {
          P: [
            { en: 'bank', ar: 'البنك' }, { en: 'hotel', ar: 'الفندق' },
            { en: 'airport', ar: 'المطار' }, { en: 'post office', ar: 'مكتب البريد' },
          ],
        },
        tags: ['money', 'questions'], d: 2, limit: 4,
      },
      {
        tmpl: 'Please give me the money in {S}.', arTmpl: 'من فضلك أعطني المال بـ{S_ar}.',
        slots: {
          S: [
            { en: 'small notes', ar: 'فئات صغيرة' }, { en: 'large notes', ar: 'فئات كبيرة' },
            { en: 'a mix of notes', ar: 'فئات مختلطة' },
          ],
        },
        tags: ['money', 'requests'], d: 2, limit: 3,
      },
    ],
    fills: [
      { en: 'I want to exchange dollars to euros.', ar: 'أريد تحويل دولارات إلى يوروهات.', word: 'exchange', hint: 'يحوّل' },
      { en: 'What is the commission here?', ar: 'كم العمولة هنا؟', word: 'commission' },
      { en: 'The commission is two percent.', ar: 'العمولة اثنين بالمئة.', word: 'percent' },
      { en: 'Can I have a receipt for the exchange?', ar: 'هل أحصل على إيصال للتحويل؟', word: 'receipt' },
      { en: 'I cannot change money without my passport.', ar: 'لا أستطيع تغيير المال بدون جواز سفري.', word: 'passport' },
      { en: 'Do not change money on the street.', ar: 'لا تغير المال في الشارع.', word: 'street' },
      { en: 'Banks give better rates than airports.', ar: 'البنوك تعطي أسعار صرف أفضل من المطارات.', word: 'rates' },
      { en: 'Yes, we accept pounds, dollars and yen.', ar: 'نعم، نقبل الجنيهات والدولارات والين.', word: 'accept' },
    ],
    orders: [
      { en: 'I want to exchange dollars to euros.', ar: 'أريد تحويل دولارات إلى يوروهات.' },
      { en: 'What is the commission here?', ar: 'كم العمولة هنا؟' },
      { en: 'Can I have a receipt for the exchange?', ar: 'هل أحصل على إيصال للتحويل؟' },
      { en: 'Banks give better rates than airports.', ar: 'البنوك تعطي أسعار صرف أفضل من المطارات.' },
      { en: 'Please count the money before you leave.', ar: 'من فضلك عد المال قبل أن تغادر.' },
      { en: 'How much is one hundred dollars in euros?', ar: 'كم يساوي مئة دولار باليورو؟' },
    ],
    mc: [
      { question: 'The office takes two percent of the money you change. This is the:', options: ['commission', 'rate', 'receipt', 'note'], answerIndex: 0, ar: 'المكتب يأخذ اثنين بالمئة من المال الذي تحوله، وهذا يسمى:' },
      { question: 'What tells you how many euros you get for one dollar?', options: ['the exchange rate', 'the receipt book', 'the torn note', 'the passport'], answerIndex: 0, ar: 'ما الذي يخبرك كم يورو تحصل عليه مقابل دولار؟' },
      { question: 'Where are rates usually worse?', options: ['at the airport', 'at the bank', 'at the post office', 'in the city center'], answerIndex: 0, ar: 'أين تكون أسعار الصرف أسوأ عادة؟' },
      { question: 'Why do you ask for a receipt for the exchange?', options: ['to keep proof of the transaction', 'to pay more money', 'to open a bank account', 'to buy gifts'], answerIndex: 0, ar: 'لماذا تطلب إيصالا للتحويل؟' },
      { question: '"I cannot change money without my passport" means:', options: ['لا أستطيع التحويل بدون جواز السفر', 'أستطيع التحويل بدون جواز السفر', 'جواز السفر ممزق', 'العملة محلية'], answerIndex: 0, ar: 'ما معنى I cannot change money without my passport؟' },
    ],
  },

  /* ================= lesson 116 — Tourist Attractions ================= */
  {
    num: 116,
    tags: ['tourism', 'attractions'],
    objectives: [
      'Describe famous tourist attractions',
      'Ask about opening hours and entrance fees',
      'Follow simple rules when visiting sites',
    ],
    grammar: {
      explanation: 'To describe attractions, use be + adjective: "The pyramids are amazing". Ask about times with "What are the opening hours?" and about price with "How much is the entrance fee?". Plural subjects take plural verbs: "The museums open at nine", "Children pay half price". Rules are often negative imperatives: "Do not touch the old statues". "Famous" means many people know the place: "This is a famous museum in Cairo".',
      explanationAr: 'لوصف الأماكن السياحية استخدم فعل الكينونة مع الصفة: The pyramids are amazing. واسأل عن الأوقات بـ What are the opening hours؟ وعن السعر بـ How much is the entrance fee؟ والأسماء الجمع تأخذ أفعالا جمعية: The museums open at nine، وChildren pay half price. أما القواعد فغالبا أمر منفي: Do not touch the old statues. وfamous تعني أن الناس يعرفون المكان كثيرا: This is a famous museum in Cairo.',
      examples: [
        { en: 'The pyramids are amazing.', ar: 'الأهرامات مذهلة.' },
        { en: 'What are the opening hours?', ar: 'ما ساعات العمل؟' },
        { en: 'How much is the entrance fee?', ar: 'كم رسوم الدخول؟' },
      ],
    },
    vocabulary: [
      { word: 'attraction', meaningAr: 'معلم سياحي', example: 'This castle is a top attraction.' },
      { word: 'pyramids', meaningAr: 'الأهرامات', example: 'The pyramids are amazing.', ipa: 'ˈpɪrəmɪdz' },
      { word: 'opening hours', meaningAr: 'ساعات العمل', example: 'What are the opening hours?' },
      { word: 'entrance fee', meaningAr: 'رسوم الدخول', example: 'How much is the entrance fee?' },
      { word: 'famous', meaningAr: 'شهير', example: 'This is a famous museum in Cairo.' },
      { word: 'museum', meaningAr: 'متحف', example: 'The museum opens at nine.' },
      { word: 'guide', meaningAr: 'مرشد سياحي', example: 'We need a guide for the old castle.' },
      { word: 'tour', meaningAr: 'جولة سياحية', example: 'The tour starts at ten in the morning.' },
      { word: 'crowded', meaningAr: 'مزدحم', example: 'The pyramids are crowded in summer.' },
      { word: 'statue', meaningAr: 'تمثال', example: 'Do not touch the old statues, please.' },
      { word: 'half price', meaningAr: 'نصف السعر', example: 'Children pay half price.' },
      { word: 'photo', meaningAr: 'صورة', example: 'Can we take photos inside?' },
    ],
    scenario: [
      { en: 'The pyramids are amazing.', ar: 'الأهرامات مذهلة.', d: 1 },
      { en: 'What are the opening hours?', ar: 'ما ساعات العمل؟', d: 1 },
      { en: 'They open at eight and close at five.', ar: 'تفتح في الثامنة وتغلق في الخامسة.', d: 1 },
      { en: 'How much is the entrance fee?', ar: 'كم رسوم الدخول؟', d: 1 },
      { en: 'It is ten dollars for adults.', ar: 'إنها عشرة دولارات للبالغين.', d: 1 },
      { en: 'Children pay half price.', ar: 'الأطفال يدفعون نصف السعر.', d: 2 },
      { en: 'This is a famous museum in Cairo.', ar: 'هذا متحف شهير في القاهرة.', d: 1 },
      { en: 'Is the museum open on Saturday?', ar: 'هل المتحف مفتوح يوم السبت؟', d: 2 },
      { en: 'No, it opens on Sunday morning.', ar: 'لا، يفتح صباح الأحد.', d: 2 },
      { en: 'We need a guide for the old castle.', ar: 'نحتاج مرشدا للقلعة القديمة.', d: 2 },
      { en: 'Can we take photos inside?', ar: 'هل نستطيع التصوير في الداخل؟', d: 2 },
      { en: 'Photos are not allowed inside the tomb.', ar: 'التصوير غير مسموح داخل المقبرة.', d: 2 },
      { en: 'The tour starts at ten in the morning.', ar: 'تبدأ الجولة في العاشرة صباحا.', d: 1 },
      { en: 'The pyramids are always crowded in summer.', ar: 'الأهرامات مزدحمة دائما في الصيف.', d: 3 },
      { en: 'I want to visit the big mosque today.', ar: 'أريد زيارة المسجد الكبير اليوم.', d: 2 },
      { en: 'Do not touch the old statues, please.', ar: 'لا تلمس التماثيل القديمة من فضلك.', d: 2 },
      { en: 'The guide speaks three languages.', ar: 'المرشد يتكلم ثلاث لغات.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'The {A} in {C} are amazing.', arTmpl: '{A_ar} في {C_ar} مذهلة.',
        slots: {
          A: [
            { en: 'pyramids', ar: 'الأهرامات' }, { en: 'museums', ar: 'المتاحف' },
            { en: 'old mosques', ar: 'المساجد القديمة' }, { en: 'castles', ar: 'القلاع' },
            { en: 'old markets', ar: 'الأسواق القديمة' },
          ],
          C: B.pick(B.COUNTRIES, 0, 4),
        },
        tags: ['tourism', 'attractions'], d: 1, limit: 20,
      },
      {
        tmpl: 'What are the opening hours of the {P}?', arTmpl: 'ما ساعات عمل {P_ar}؟',
        slots: {
          P: [
            { en: 'museum', ar: 'المتحف' }, { en: 'castle', ar: 'القلعة' },
            { en: 'palace', ar: 'القصر' }, { en: 'old market', ar: 'السوق القديم' },
            { en: 'temple', ar: 'المعبد' },
          ],
        },
        tags: ['tourism', 'questions'], d: 1, limit: 5,
      },
      {
        tmpl: 'How much is the entrance fee for the {A}?', arTmpl: 'كم رسوم الدخول إلى {A_ar}؟',
        slots: {
          A: [
            { en: 'museum', ar: 'المتحف' }, { en: 'pyramids', ar: 'الأهرامات' },
            { en: 'castle', ar: 'القلعة' }, { en: 'garden', ar: 'الحديقة' },
            { en: 'tower', ar: 'البرج' },
          ],
        },
        tags: ['tourism', 'money'], d: 1, limit: 5,
      },
      {
        tmpl: 'We want to visit the {A} tomorrow.', arTmpl: 'نريد زيارة {A_ar} غدا.',
        slots: {
          A: [
            { en: 'famous museum', ar: 'المتحف الشهير' }, { en: 'old castle', ar: 'القلعة القديمة' },
            { en: 'big mosque', ar: 'المسجد الكبير' }, { en: 'national park', ar: 'الحديقة الوطنية' },
            { en: 'old bridge', ar: 'الجسر القديم' },
          ],
        },
        tags: ['tourism', 'plans'], d: 2, limit: 5,
      },
      {
        tmpl: 'Is the {P} open on {D}?', arTmpl: 'هل يفتح باب {P_ar} يوم {D_ar}؟',
        slots: {
          P: [
            { en: 'museum', ar: 'المتحف' }, { en: 'castle', ar: 'القلعة' },
            { en: 'zoo', ar: 'حديقة الحيوان' }, { en: 'art gallery', ar: 'معرض الفنون' },
          ],
          D: [
            { en: 'Friday', ar: 'الجمعة' }, { en: 'Monday', ar: 'الاثنين' },
            { en: 'Sunday', ar: 'الأحد' },
          ],
        },
        tags: ['tourism', 'questions'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'The pyramids are amazing.', ar: 'الأهرامات مذهلة.', word: 'pyramids', hint: 'الأهرامات' },
      { en: 'What are the opening hours?', ar: 'ما ساعات العمل؟', word: 'opening' },
      { en: 'How much is the entrance fee?', ar: 'كم رسوم الدخول؟', word: 'entrance' },
      { en: 'This is a famous museum in Cairo.', ar: 'هذا متحف شهير في القاهرة.', word: 'famous' },
      { en: 'The tour starts at ten in the morning.', ar: 'تبدأ الجولة في العاشرة صباحا.', word: 'tour' },
      { en: 'Photos are not allowed inside the tomb.', ar: 'التصوير غير مسموح داخل المقبرة.', word: 'allowed' },
      { en: 'We need a guide for the old castle.', ar: 'نحتاج مرشدا للقلعة القديمة.', word: 'guide' },
      { en: 'Children pay half price.', ar: 'الأطفال يدفعون نصف السعر.', word: 'half' },
    ],
    orders: [
      { en: 'The pyramids are amazing.', ar: 'الأهرامات مذهلة.' },
      { en: 'What are the opening hours?', ar: 'ما ساعات العمل؟' },
      { en: 'How much is the entrance fee?', ar: 'كم رسوم الدخول؟' },
      { en: 'The tour starts at ten in the morning.', ar: 'تبدأ الجولة في العاشرة صباحا.' },
      { en: 'We need a guide for the old castle.', ar: 'نحتاج مرشدا للقلعة القديمة.' },
      { en: 'Do not touch the old statues, please.', ar: 'لا تلمس التماثيل القديمة من فضلك.' },
    ],
    mc: [
      { question: 'You want to know the price to enter. You ask:', options: ['How much is the entrance fee?', 'Where are the statues?', 'Do you like the guide?', 'Is it crowded now?'], answerIndex: 0, ar: 'تريد معرفة سعر الدخول، فتسأل:' },
      { question: '"The pyramids are amazing" means:', options: ['الأهرامات مذهلة', 'الأهرامات مزدحمة', 'الأهرامات مغلقة', 'الأهرامات بعيدة'], answerIndex: 0, ar: 'ما معنى The pyramids are amazing؟' },
      { question: '"Opening hours" tell you:', options: ['when the place opens and closes', 'how much to pay', 'where to eat', 'who the guide is'], answerIndex: 0, ar: 'ساعات العمل تخبرك:' },
      { question: 'Which sentence is a rule at tourist sites?', options: ['Do not touch the old statues.', 'The tour starts at ten.', 'The entrance fee is ten dollars.', 'The guide speaks three languages.'], answerIndex: 0, ar: 'أي جملة تمثل قاعدة في المواقع السياحية؟' },
      { question: 'Children pay half price means children pay:', options: ['less than adults', 'more than adults', 'nothing at all', 'twice the price'], answerIndex: 0, ar: 'الأطفال يدفعون نصف السعر يعني أنهم يدفعون:' },
    ],
  },
];
