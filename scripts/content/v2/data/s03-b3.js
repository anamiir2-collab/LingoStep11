/* ============================================================
   v2 section data — s03-b3.js
   Home & Family · lessons 66–70 (Home Safety, Moving, Repairs,
   Utility Bills, Section Review)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 66 — Home Safety ================= */
  {
    num: 66,
    tags: ['safety', 'home'],
    objectives: [
      'Give safety warnings with "Be careful" and "Don\'t..."',
      'Name home hazards: fire, smoke, knives and outlets',
      'Say what to do in a small emergency at home',
    ],
    grammar: {
      explanation: 'We warn people about danger with short imperatives. For a positive warning say "Be careful with the knife" or "Hold the ladder, please". For a negative warning put "Don\'t" or "Never" before the verb: "Don\'t touch the outlet", "Never leave the stove on at night". We can also describe danger with be: "Fire is dangerous", "The house is safe now". To talk about a finished accident use the past simple: "My brother burned his hand yesterday". To promise a safety step use will: "I will buy a first-aid kit tomorrow".',
      explanationAr: 'نحذّر الناس من الخطر بأوامر قصيرة. للتحذير الإيجابي قل Be careful with the knife أو Hold the ladder, please. وللتحذير السلبي ضع Don\'t أو Never قبل الفعل: Don\'t touch the outlet، وNever leave the stove on at night. ويمكن وصف الخطر بفعل الكينونة: Fire is dangerous، وThe house is safe now. وللحديث عن حادث واقع في الماضي استخدم الماضي البسيط: My brother burned his hand yesterday. وللوعد بخطوة أمان استخدم will: I will buy a first-aid kit tomorrow.',
      examples: [
        { en: 'Be careful with the hot pan.', ar: 'كن حذرا مع المقلاة الساخنة.' },
        { en: "Don't touch the outlet with wet hands.", ar: 'لا تلمس المقبس بيدين مبللتين.' },
        { en: 'There is smoke in the kitchen!', ar: 'يوجد دخان في المطبخ!' },
      ],
    },
    vocabulary: [
      { word: 'fire', meaningAr: 'نار / حريق', example: 'Fire is very dangerous.', ipa: 'faɪər' },
      { word: 'smoke', meaningAr: 'دخان', example: 'I smell smoke.', ipa: 'smoʊk' },
      { word: 'dangerous', meaningAr: 'خطير', example: 'This wire is dangerous.' },
      { word: 'careful', meaningAr: 'حذر', example: 'Be careful, please!' },
      { word: 'knife', meaningAr: 'سكين', example: 'Cut the bread with the knife.', ipa: 'naɪf' },
      { word: 'outlet', meaningAr: 'مقبس كهربائي', example: "Don't touch the outlet." },
      { word: 'first-aid kit', meaningAr: 'علبة إسعافات أولية', example: 'The first-aid kit is in the bathroom.' },
      { word: 'match', meaningAr: 'عود ثقاب', example: 'Keep the matches away from children.' },
      { word: 'burn', meaningAr: 'يحرق', example: 'The hot pan can burn you.' },
      { word: 'ladder', meaningAr: 'سلم', example: 'Hold the ladder, please.' },
      { word: 'emergency', meaningAr: 'حالة طارئ', example: 'Call this number in an emergency.' },
      { word: 'safe', meaningAr: 'آمن', example: 'Now the house is safe.' },
    ],
    scenario: [
      { en: 'Be careful with the knife.', ar: 'كن حذرا مع السكين.', d: 1 },
      { en: "Don't touch the outlet!", ar: 'لا تلمس المقبس!', d: 1 },
      { en: 'Fire is very dangerous for children.', ar: 'النار خطيرة جدا للأطفال.', d: 2 },
      { en: 'I smell smoke in the kitchen.', ar: 'أشم رائحة دخان في المطبخ.', d: 2 },
      { en: 'Do you smell it too?', ar: 'هل تشمها أيضا؟', d: 2 },
      { en: 'Please call the fire department now.', ar: 'اتصل بالإطفاء الآن من فضلك.', d: 2 },
      { en: 'My brother burned his hand yesterday.', ar: 'أحرق أخي يده أمس.', d: 2 },
      { en: 'Where is the first-aid kit?', ar: 'أين علبة الإسعافات الأولية؟', d: 1 },
      { en: 'It is in the bathroom, next to the mirror.', ar: 'إنها في الحمام بجانب المرآة.', d: 2 },
      { en: 'Never leave the stove on at night.', ar: 'لا تترك الموقد مشتعلا ليلا أبدا.', d: 2 },
      { en: 'Keep the matches away from the little ones.', ar: 'أبق عيدان الثقاب بعيدا عن الصغار.', d: 2 },
      { en: 'We bought a fire extinguisher last month.', ar: 'اشترينا طفاية حريق الشهر الماضي.', d: 3 },
      { en: "Don't run down the stairs!", ar: 'لا تركض على الدرج!', d: 1 },
      { en: 'Is the smoke coming from the window?', ar: 'هل يأتي الدخان من النافذة؟', d: 2 },
      { en: 'I will buy a first-aid kit tomorrow.', ar: 'سأشتري علبة إسعافات أولية غدا.', d: 2 },
      { en: 'The house is safe now, thank you.', ar: 'المنزل آمن الآن، شكرا لك.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'Be careful with {O}.', arTmpl: 'كن حذرا مع {O_ar}.',
        slots: {
          O: [
            { en: 'the knife', ar: 'السكين' }, { en: 'the hot pan', ar: 'المقلاة الساخنة' },
            { en: 'the boiling water', ar: 'الماء المغلي' }, { en: 'the broken glass', ar: 'الزجاج المكسور' },
            { en: 'the wet floor', ar: 'الأرضية المبللة' }, { en: 'the sharp edge', ar: 'الحافة الحادة' },
          ],
        },
        tags: ['safety', 'imperative'], d: 1, limit: 6,
      },
      {
        tmpl: "Don't touch the {N}!", arTmpl: 'لا تلمس {N_ar}!',
        slots: {
          N: [
            { en: 'outlet', ar: 'المقبس' }, { en: 'stove', ar: 'الموقد' }, { en: 'iron', ar: 'المكواة' },
            { en: 'wire', ar: 'السلك' }, { en: 'heater', ar: 'السخان' }, { en: 'broken window', ar: 'النافذة المكسورة' },
          ],
        },
        tags: ['safety', 'negation'], d: 1, limit: 6,
      },
      {
        tmpl: 'There is {H} in {R}.', arTmpl: 'يوجد {H_ar} في {R_ar}.',
        slots: {
          H: [
            { en: 'smoke', ar: 'دخان' }, { en: 'a small fire', ar: 'حريق صغير' },
            { en: 'water', ar: 'ماء' }, { en: 'a strange smell', ar: 'رائحة غريبة' },
          ],
          R: B.ROOMS,
        },
        tags: ['safety', 'home'], d: 2, limit: 20,
      },
      {
        tmpl: 'Quick, we need the {T}!', arTmpl: 'بسرعة، نحتاج {T_ar}!',
        slots: {
          T: [
            { en: 'first-aid kit', ar: 'علبة الإسعافات' }, { en: 'fire extinguisher', ar: 'طفاية الحريق' },
            { en: 'flashlight', ar: 'الكشاف' }, { en: 'emergency number', ar: 'رقم الطوارئ' },
          ],
        },
        tags: ['safety', 'emergency'], d: 2, limit: 4,
      },
      {
        tmpl: 'Did you {V} the {N} yet?', arTmpl: 'هل {V_ar} {N_ar} بعد؟',
        slots: {
          V: [
            { en: 'close', ar: 'أغلقت' }, { en: 'check', ar: 'فحصت' }, { en: 'turn off', ar: 'أطفأت' },
          ],
          N: [
            { en: 'gas', ar: 'الغاز' }, { en: 'door', ar: 'الباب' }, { en: 'iron', ar: 'المكواة' },
            { en: 'heater', ar: 'السخان' }, { en: 'window', ar: 'النافذة' },
          ],
        },
        tags: ['safety', 'questions'], d: 2, limit: 15,
      },
    ],
    fills: [
      { en: 'Be careful with the knife.', ar: 'كن حذرا مع السكين.', word: 'careful', hint: 'حذر' },
      { en: "Don't touch the outlet with wet hands.", ar: 'لا تلمس المقبس بيدين مبللتين.', word: 'touch', hint: 'فعل' },
      { en: 'I smell smoke in the kitchen.', ar: 'أشم رائحة دخان في المطبخ.', word: 'smoke', hint: 'دخان' },
      { en: 'Where is the first-aid kit?', ar: 'أين علبة الإسعافات الأولية؟', word: 'kit' },
      { en: 'Never leave the stove on at night.', ar: 'لا تترك الموقد مشتعلا ليلا أبدا.', word: 'Never', hint: 'تحذير' },
      { en: 'Fire is very dangerous for children.', ar: 'النار خطيرة جدا للأطفال.', word: 'dangerous', hint: 'صفة' },
      { en: 'Please call the fire department now.', ar: 'اتصل بالإطفاء الآن من فضلك.', word: 'fire' },
      { en: 'My brother burned his hand yesterday.', ar: 'أحرق أخي يده أمس.', word: 'burned', hint: 'فعل ماض' },
    ],
    orders: [
      { en: 'Be careful with the hot pan.', ar: 'كن حذرا مع المقلاة الساخنة.' },
      { en: "Don't touch the outlet, please.", ar: 'لا تلمس المقبس من فضلك.' },
      { en: 'Fire is very dangerous for children.', ar: 'النار خطيرة جدا للأطفال.' },
      { en: 'We bought a fire extinguisher last month.', ar: 'اشترينا طفاية حريق الشهر الماضي.' },
      { en: 'I will buy a first-aid kit tomorrow.', ar: 'سأشتري علبة إسعافات أولية غدا.' },
      { en: 'My brother burned his hand yesterday.', ar: 'أحرق أخي يده أمس.' },
    ],
    mc: [
      { question: 'What should you do with a sharp knife?', options: ['Be careful with it', 'Play with it', 'Leave it on the floor', 'Give it to a baby'], answerIndex: 0, ar: 'ماذا تفعل بالسكين الحادة؟' },
      { question: 'You see smoke in the kitchen. First you:', options: ['call for help', 'go to sleep', 'open a shop', 'water the garden'], answerIndex: 0, ar: 'ترى دخانا في المطبخ، أولا:' },
      { question: 'What does "outlet" mean?', options: ['مقبس كهربائي', 'نافذة', 'سقف', 'درج'], answerIndex: 0, ar: 'ما معنى outlet؟' },
      { question: 'Where do you keep bandages at home?', options: ['in the first-aid kit', 'in the freezer', 'under the car', 'in a shoe box'], answerIndex: 0, ar: 'أين تحتفظ بالضمادات في المنزل؟' },
    ],
  },

  /* ================= lesson 67 — Moving to a New Home ================= */
  {
    num: 67,
    tags: ['moving', 'home'],
    objectives: [
      'Talk about moving day and moving boxes',
      'Ask for help with heavy things politely',
      'Say and write your new address',
    ],
    grammar: {
      explanation: 'Moving day talk mixes the future and the past. Use will for plans that are not fixed yet: "We will move tomorrow", "The truck will come at eight". Use the past simple for things you already did: "We unpacked the dishes", "The neighbors came to say goodbye". To ask for help politely say "Can you help me with these boxes, please?". Count things with how many: "How many boxes do we have?". Your address has a number and a street name: "My new address is number twelve, Garden Street".',
      explanationAr: 'حديث يوم الانتقال يمزج المستقبل والماضي. استخدم will للخطط غير المحسومة بعد: We will move tomorrow، وThe truck will come at eight. واستخدم الماضي البسيط لما أنجزته فعلا: We unpacked the dishes، وThe neighbors came to say goodbye. ولطلب المساعدة بأدب قل Can you help me with these boxes, please؟ وعدّ الأشياء بـ how many: How many boxes do we have؟ والعنوان يتكون من رقم واسم شارع: My new address is number twelve, Garden Street.',
      examples: [
        { en: 'We will move to the new home on Saturday.', ar: 'سننتقل إلى المنزل الجديد يوم السبت.' },
        { en: 'The truck carried all our boxes.', ar: 'حملت الشاحنة كل صناديقنا.' },
        { en: 'Can you help me with these boxes, please?', ar: 'هل تساعدني مع هذه الصناديق من فضلك؟' },
      ],
    },
    vocabulary: [
      { word: 'move', meaningAr: 'ينتقل', example: 'We will move next week.', ipa: 'muːv' },
      { word: 'box', meaningAr: 'صندوق', example: 'This box is heavy.' },
      { word: 'truck', meaningAr: 'شاحنة', example: 'The truck is in front of the house.', ipa: 'trʌk' },
      { word: 'unpack', meaningAr: 'يفرغ الصناديق', example: 'Let me unpack the kitchen first.' },
      { word: 'address', meaningAr: 'عنوان', example: 'My new address is short.' },
      { word: 'furniture', meaningAr: 'أثاث', example: 'The furniture is old but good.' },
      { word: 'heavy', meaningAr: 'ثقيل', example: 'The wardrobe is very heavy.' },
      { word: 'label', meaningAr: 'يلصق بطاقة على', example: 'Please label every box.' },
      { word: 'elevator', meaningAr: 'مصعد', example: 'The elevator is small.' },
      { word: 'neighbor', meaningAr: 'جار', example: 'Our new neighbor is friendly.' },
      { word: 'key', meaningAr: 'مفتاح', example: 'Do you have the key?' },
      { word: 'change', meaningAr: 'يغير', example: 'I will change my address at the bank.' },
    ],
    scenario: [
      { en: 'We are moving to a new home on Saturday.', ar: 'ننتقل إلى منزل جديد يوم السبت.', d: 1 },
      { en: 'The moving boxes are in the hall.', ar: 'صناديق الانتقال في المدخل.', d: 1 },
      { en: 'This box is heavy, please help me.', ar: 'هذا الصندوق ثقيل، ساعدني من فضلك.', d: 1 },
      { en: 'Where do we put this box?', ar: 'أين نضع هذا الصندوق؟', d: 1 },
      { en: 'In the bedroom, next to the window.', ar: 'في غرفة النوم بجانب النافذة.', d: 2 },
      { en: 'The truck will come at eight in the morning.', ar: 'ستأتي الشاحنة في الثامنة صباحا.', d: 2 },
      { en: 'Did you label all the boxes?', ar: 'هل وسمت كل الصناديق؟', d: 2 },
      { en: 'Yes, I wrote the room name on each box.', ar: 'نعم، كتبت اسم الغرفة على كل صندوق.', d: 2 },
      { en: 'The old neighbors came to say goodbye.', ar: 'جاء الجيران القدامى ليقولوا وداعا.', d: 2 },
      { en: 'We unpacked the dishes in the kitchen.', ar: 'فرغنا الأطباق في المطبخ.', d: 2 },
      { en: 'The elevator is small, so we took the stairs.', ar: 'المصعد صغير فاستعملنا الدرج.', d: 3 },
      { en: 'I will change the address at the bank tomorrow.', ar: 'سأغير العنوان في المصرف غدا.', d: 2 },
      { en: 'My new address is number twelve, Garden Street.', ar: 'عنواني الجديد رقم اثنا عشر شارع الحديقة.', d: 1 },
      { en: 'The new neighbors invited us for dinner.', ar: 'دعانا الجيران الجدد إلى العشاء.', d: 2 },
      { en: 'These boxes are not heavy at all.', ar: 'هذه الصناديق ليست ثقيلة أبدا.', d: 1 },
      { en: 'When will you unpack the kitchen boxes?', ar: 'متى ستفرد صناديق المطبخ؟', d: 2 },
      { en: 'Welcome to our new home!', ar: 'أهلا بكم في منزلنا الجديد!', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'This box is full of {T}.', arTmpl: '{T_ar} تملأ هذا الصندوق.',
        slots: {
          T: [
            { en: 'books', ar: 'الكتب' }, { en: 'clothes', ar: 'الملابس' }, { en: 'dishes', ar: 'الأطباق' },
            { en: 'toys', ar: 'الألعاب' }, { en: 'towels', ar: 'المناشف' }, { en: 'kitchen tools', ar: 'أدوات المطبخ' },
          ],
        },
        tags: ['moving', 'home'], d: 1, limit: 6,
      },
      {
        tmpl: 'Can you help me with {O}?', arTmpl: 'هل تساعدني مع {O_ar}؟',
        slots: {
          O: [
            { en: 'these boxes', ar: 'هذه الصناديق' }, { en: 'the heavy sofa', ar: 'الأريكة الثقيلة' },
            { en: 'the big wardrobe', ar: 'خزانة الملابس الكبيرة' }, { en: 'the fridge', ar: 'الثلاجة' },
            { en: 'these bags', ar: 'هذه الحقائب' },
          ],
        },
        tags: ['moving', 'requests'], d: 1, limit: 5,
      },
      {
        tmpl: 'The truck is {L} the house.', arTmpl: 'الشاحنة {L_ar} المنزل.',
        slots: {
          L: [
            { en: 'in front of', ar: 'أمام' }, { en: 'behind', ar: 'خلف' },
            { en: 'near', ar: 'قرب' }, { en: 'next to', ar: 'بجانب' },
          ],
        },
        tags: ['moving', 'prepositions'], d: 1, limit: 4,
      },
      {
        tmpl: 'We will {V} tomorrow.', arTmpl: '{V_ar} غدا.',
        slots: {
          V: [
            { en: 'move', ar: B.arFuture('move', 'we') },
            { en: 'carry the boxes', ar: 'سنحمل الصناديق' },
            { en: 'clean the new home', ar: 'سننظف المنزل الجديد' },
            { en: 'unpack the kitchen', ar: 'سنفرغ المطبخ' },
          ],
        },
        tags: ['moving', 'future'], d: 2, limit: 4,
      },
      {
        tmpl: 'I put the {O} {P}.', arTmpl: 'وضعت {O_ar} {P_ar}.',
        slots: {
          O: [
            { en: 'plates', ar: 'الأطباق' }, { en: 'books', ar: 'الكتب' },
            { en: 'towels', ar: 'المناشف' }, { en: 'toys', ar: 'الألعاب' },
          ],
          P: [
            { en: 'in the bedroom', ar: 'في غرفة النوم' }, { en: 'in the kitchen cabinet', ar: 'في خزانة المطبخ' },
            { en: 'on the bed', ar: 'على السرير' }, { en: 'in the closet', ar: 'في الخزانة' },
          ],
        },
        tags: ['moving', 'past-simple'], d: 2, limit: 16,
      },
    ],
    fills: [
      { en: 'This box is heavy, please help me.', ar: 'هذا الصندوق ثقيل، ساعدني من فضلك.', word: 'heavy', hint: 'صفة' },
      { en: 'The moving boxes are in the hall.', ar: 'صناديق الانتقال في المدخل.', word: 'boxes' },
      { en: 'The truck will come at eight in the morning.', ar: 'ستأتي الشاحنة في الثامنة صباحا.', word: 'truck' },
      { en: 'Did you label all the boxes?', ar: 'هل وسمت كل الصناديق؟', word: 'label', hint: 'فعل' },
      { en: 'I will change the address at the bank tomorrow.', ar: 'سأغير العنوان في المصرف غدا.', word: 'address' },
      { en: 'My new address is number twelve, Garden Street.', ar: 'عنواني الجديد رقم اثنا عشر شارع الحديقة.', word: 'twelve', hint: 'رقم' },
      { en: 'We unpacked the dishes in the kitchen.', ar: 'فرغنا الأطباق في المطبخ.', word: 'unpacked', hint: 'فعل ماض' },
      { en: 'Welcome to our new home!', ar: 'أهلا بكم في منزلنا الجديد!', word: 'Welcome' },
    ],
    orders: [
      { en: 'Can you help me with these boxes?', ar: 'هل تساعدني مع هذه الصناديق؟' },
      { en: 'We are moving to a new home on Saturday.', ar: 'ننتقل إلى منزل جديد يوم السبت.' },
      { en: 'The truck is in front of the house.', ar: 'الشاحنة أمام المنزل.' },
      { en: 'My new address is number twelve, Garden Street.', ar: 'عنواني الجديد رقم اثنا عشر شارع الحديقة.' },
      { en: 'The new neighbors invited us for dinner.', ar: 'دعانا الجيران الجدد إلى العشاء.' },
      { en: 'We unpacked the dishes in the kitchen.', ar: 'فرغنا الأطباق في المطبخ.' },
    ],
    mc: [
      { question: 'What carries the furniture on moving day?', options: ['a truck', 'a bike', 'a boat', 'a kite'], answerIndex: 0, ar: 'ماذا يحمل الأثاث يوم الانتقال؟' },
      { question: 'What do you do with boxes after moving?', options: ['unpack them', 'cook them', 'plant them', 'drink them'], answerIndex: 0, ar: 'ماذا تفعل بالصناديق بعد الانتقال؟' },
      { question: '"I will change the address at the bank" — he will:', options: ['tell the bank his new address', 'buy a new bank', 'move the bank', 'close his house'], answerIndex: 0, ar: 'ماذا سيفعل؟' },
      { question: 'Heavy things are:', options: ['hard to carry', 'easy to carry', 'good to eat', 'fun to play'], answerIndex: 0, ar: 'الأشياء الثقيلة هي:' },
    ],
  },

  /* ================= lesson 68 — Talking to Plumbers and Electricians ================= */
  {
    num: 68,
    tags: ['repairs', 'services'],
    objectives: [
      'Report a home problem: a leak or a power fault',
      'Call a plumber or an electrician and make an appointment',
      'Ask about the cost of a repair politely',
    ],
    grammar: {
      explanation: 'To report a problem happening now, use is/are + verb-ing: "The kitchen tap is leaking". To say something is broken, use does not work: "The bathroom light does not work". On the phone, request help with can: "Can you come today?" or "Can you come today, please?". Ask about money with "How much will it cost?" — the answer uses will too. For finished repairs use the past simple: "The electrician fixed the wires yesterday". To promise a visit say: "I will come at four in the afternoon".',
      explanationAr: 'للإبلاغ عن مشكلة تحدث الآن استخدم is/are + الفعل مضافا إليه ing: The kitchen tap is leaking. ولقول إن شيئا معطل قل does not work: The bathroom light does not work. وعلى الهاتف اطلب المساعدة بـ can: Can you come today؟ أو Can you come today, please؟ واسأل عن المال بـ How much will it cost؟ والجواب يأتي بـ will أيضا. وللإصلاحات المنتهية استخدم الماضي البسيط: The electrician fixed the wires yesterday. ولوعد بزيارة قل: I will come at four in the afternoon.',
      examples: [
        { en: 'The kitchen tap is leaking.', ar: 'حنفية المطبخ تسرّب.' },
        { en: 'Can you come today, please?', ar: 'هل يمكنك المجيء اليوم من فضلك؟' },
        { en: 'How much will the repair cost?', ar: 'كم ستكلف الإصلاح؟' },
      ],
    },
    vocabulary: [
      { word: 'plumber', meaningAr: 'سباك', example: 'The plumber will come today.', ipa: 'ˈplʌmər' },
      { word: 'electrician', meaningAr: 'كهربائي', example: 'The electrician fixed the wires.' },
      { word: 'tap', meaningAr: 'حنفية', example: 'The kitchen tap leaks.' },
      { word: 'leak', meaningAr: 'يسرّب (الماء)', example: 'Water leaks from the pipe.' },
      { word: 'pipe', meaningAr: 'أنبوب', example: 'The pipe under the sink is old.' },
      { word: 'repair', meaningAr: 'يصلح', example: 'He will repair the pipe.' },
      { word: 'fix', meaningAr: 'يضبط / يصلح', example: 'Can you fix the switch?' },
      { word: 'switch', meaningAr: 'مفتاح الضوء', example: 'The switch is broken.' },
      { word: 'bulb', meaningAr: 'لمبة', example: 'I bought a new bulb.' },
      { word: 'wire', meaningAr: 'سلك', example: 'Be careful, this wire is old.' },
      { word: 'power', meaningAr: 'التيار الكهربائي', example: 'The power went off yesterday.' },
      { word: 'tool', meaningAr: 'أداة', example: 'He carries his tools in a red bag.' },
    ],
    scenario: [
      { en: 'Hello, is this the plumber?', ar: 'مرحبا، هل هذا السباك؟', d: 1 },
      { en: 'Yes, how can I help you?', ar: 'نعم، كيف أخدمك؟', d: 1 },
      { en: 'The kitchen tap is leaking.', ar: 'حنفية المطبخ تسرّب.', d: 1 },
      { en: 'Can you come today?', ar: 'هل يمكنك المجيء اليوم؟', d: 1 },
      { en: 'I will come at four in the afternoon.', ar: 'سآتي الرابعة بعد الظهر.', d: 1 },
      { en: 'How much will it cost?', ar: 'كم سيكلف ذلك؟', d: 1 },
      { en: 'It depends on the work, but it is not expensive.', ar: 'يعتمد على العمل لكنه ليس غاليا.', d: 2 },
      { en: 'The bathroom light does not work.', ar: 'ضوء الحمام لا يعمل.', d: 1 },
      { en: 'Did you check the switch?', ar: 'هل فحصت المفتاح؟', d: 2 },
      { en: 'Yes, and I changed the bulb too.', ar: 'نعم، وغيرت اللمبة أيضا.', d: 2 },
      { en: 'The electrician fixed the wires yesterday.', ar: 'أصلح الكهربائي الأسلاك أمس.', d: 2 },
      { en: 'The pipes in this house are very old.', ar: 'الأنابيب في هذا المنزل قديمة جدا.', d: 2 },
      { en: 'Please bring your tools in the morning.', ar: 'أحضر أدواتك في الصباح من فضلك.', d: 2 },
      { en: 'We have no water in the kitchen today.', ar: 'لا ماء لنا في المطبخ اليوم.', d: 2 },
      { en: 'The plumber will repair the pipe tomorrow.', ar: 'سيصلح السباك الأنبوب غدا.', d: 2 },
      { en: "Don't worry, the problem is small.", ar: 'لا تقلق، المشكلة صغيرة.', d: 1 },
      { en: 'Thank you, I am waiting for you.', ar: 'شكرا لك، أنا في انتظارك.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'The {T} is leaking.', arTmpl: '{T_ar} يسرّب.',
        slots: {
          T: [
            { en: 'kitchen tap', ar: 'حنفية المطبخ' }, { en: 'bathroom tap', ar: 'حنفية الحمام' },
            { en: 'garden tap', ar: 'حنفية الحديقة' }, { en: 'pipe outside the house', ar: 'الأنبوب خارج المنزل' },
            { en: 'pipe in the wall', ar: 'الأنبوب في الحائط' }, { en: 'pipe in the bathroom', ar: 'الأنبوب في الحمام' },
          ],
        },
        tags: ['repairs', 'problems'], d: 1, limit: 6,
      },
      {
        tmpl: 'The {N} {W}, please fix it.', arTmpl: '{N_ar} {W_ar}، {F_ar}.',
        slots: {
          N: [
            { en: 'light', ar: 'الضوء', g: 'm' }, { en: 'switch', ar: 'المفتاح', g: 'm' },
            { en: 'socket', ar: 'المقبس', g: 'm' }, { en: 'fan', ar: 'المروحة', g: 'f' },
            { en: 'heater', ar: 'السخان', g: 'm' }, { en: 'washing machine', ar: 'الغسالة', g: 'f' },
            { en: 'doorbell', ar: 'جرس الباب', g: 'm' },
          ],
          W: (x) => [{ en: 'does not work', ar: x.N.g === 'f' ? 'لا تعمل' : 'لا يعمل' }],
          F: (x) => [{ ar: x.N.g === 'f' ? 'أصلحها من فضلك' : 'أصلحه من فضلك' }],
        },
        tags: ['repairs', 'negation'], d: 1, limit: 7,
      },
      {
        tmpl: 'Can you {V} today, please?', arTmpl: 'هل يمكنك {V_ar} اليوم من فضلك؟',
        slots: {
          V: [
            { en: 'come', ar: 'المجيء' }, { en: 'come in the morning', ar: 'المجيء في الصباح' },
            { en: 'send a worker', ar: 'إرسال عامل' }, { en: 'check the leak', ar: 'فحص التسرب' },
            { en: 'bring the parts', ar: 'إحضار القطع' }, { en: 'call me back', ar: 'أن تعاود الاتصال' },
          ],
        },
        tags: ['repairs', 'requests'], d: 1, limit: 6,
      },
      {
        tmpl: 'How much will the {W} cost?', arTmpl: 'كم ستكلف {W_ar}؟',
        slots: {
          W: [
            { en: 'repair', ar: 'الإصلاح' }, { en: 'new bulb', ar: 'اللمبة الجديدة' },
            { en: 'new pipe', ar: 'الأنبوب الجديد' }, { en: 'first visit', ar: 'الزيارة الأولى' },
          ],
        },
        tags: ['repairs', 'questions'], d: 2, limit: 4,
      },
      {
        tmpl: '{W} will {V} {N} {T}.', arTmpl: '{W_ar} {V_ar} {N_ar} {T_ar}.',
        slots: {
          W: [
            { en: 'The plumber', ar: 'السباك', agr: 'he' }, { en: 'The electrician', ar: 'الكهربائي', agr: 'he' },
            { en: 'He', ar: 'هو', agr: 'he' }, { en: 'She', ar: 'هي', agr: 'she' },
          ],
          V: (x) => [
            { en: 'check', ar: B.arFuture('check', x.W.agr) },
            { en: 'change', ar: B.arFuture('change', x.W.agr) },
            { en: 'bring', ar: B.arFuture('bring', x.W.agr) },
          ],
          N: [
            { en: 'the pipes', ar: 'الأنابيب' }, { en: 'the wires', ar: 'الأسلاك' },
            { en: 'the switch', ar: 'المفتاح' }, { en: 'the bulb', ar: 'اللمبة' },
            { en: 'the leak', ar: 'التسرب' },
          ],
          T: [
            { en: 'today', ar: 'اليوم' }, { en: 'tomorrow', ar: 'غدا' },
            { en: 'in the morning', ar: 'في الصباح' }, { en: 'this week', ar: 'هذا الأسبوع' },
          ],
        },
        tags: ['repairs', 'future'], d: 2, limit: 24,
      },
    ],
    fills: [
      { en: 'The kitchen tap is leaking.', ar: 'حنفية المطبخ تسرّب.', word: 'leaking', hint: 'مضارع مستمر' },
      { en: 'Can you come today?', ar: 'هل يمكنك المجيء اليوم؟', word: 'today', hint: 'وقت' },
      { en: 'How much will it cost?', ar: 'كم سيكلف ذلك؟', word: 'cost', hint: 'فعل' },
      { en: 'The bathroom light does not work.', ar: 'ضوء الحمام لا يعمل.', word: 'light' },
      { en: 'The electrician fixed the wires yesterday.', ar: 'أصلح الكهربائي الأسلاك أمس.', word: 'fixed', hint: 'فعل ماض' },
      { en: 'Please bring your tools in the morning.', ar: 'أحضر أدواتك في الصباح من فضلك.', word: 'tools' },
      { en: 'We have no water in the kitchen today.', ar: 'لا ماء لنا في المطبخ اليوم.', word: 'water' },
      { en: 'The plumber will repair the pipe tomorrow.', ar: 'سيصلح السباك الأنبوب غدا.', word: 'repair', hint: 'فعل' },
    ],
    orders: [
      { en: 'Hello, is this the plumber?', ar: 'مرحبا، هل هذا السباك؟' },
      { en: 'The bathroom light does not work.', ar: 'ضوء الحمام لا يعمل.' },
      { en: 'Did you check the switch?', ar: 'هل فحصت المفتاح؟' },
      { en: 'The pipes in this house are very old.', ar: 'الأنابيب في هذا المنزل قديمة جدا.' },
      { en: 'How much will the repair cost?', ar: 'كم ستكلف الإصلاح؟' },
      { en: 'I will come at four in the afternoon.', ar: 'سآتي الرابعة بعد الظهر.' },
    ],
    mc: [
      { question: 'The kitchen tap is leaking. Who do you call?', options: ['a plumber', 'a teacher', 'a farmer', 'a pilot'], answerIndex: 0, ar: 'حنفية المطبخ تسرّب، بمن تتصل؟' },
      { question: 'The light does not work. You call:', options: ['an electrician', 'a barber', 'a waiter', 'a driver'], answerIndex: 0, ar: 'الضوء لا يعمل، تتصل بـ:' },
      { question: '"How much will it cost?" asks about:', options: ['the price', 'the time', 'the weather', 'the address'], answerIndex: 0, ar: 'سؤال How much will it cost؟ يسأل عن:' },
      { question: 'A person who fixes wires is an:', options: ['electrician', 'engine', 'electricity', 'electronic'], answerIndex: 0, ar: 'الشخص الذي يصلح الأسلاك هو:' },
    ],
  },

  /* ================= lesson 69 — Utility Bills ================= */
  {
    num: 69,
    tags: ['bills', 'utilities'],
    objectives: [
      'Name the home bills: electricity, water and gas',
      'Pay a bill online and understand the due date',
      'Ask and complain about a bill politely',
    ],
    grammar: {
      explanation: 'A bill has an amount and a due date. Say which bill with a noun + bill: "the electricity bill", "the water bill", "the gas bill". To complain use be + adjective and "too": "The bill is too high this month". Say how you pay with a preposition phrase: "I pay online", "I pay by card", "I pay at the post office". Use the past simple for payments you made: "I paid the gas bill yesterday", and will for payments you plan: "I will pay it on Sunday". The due date answers "When": "The due date is next Monday".',
      explanationAr: 'لكل فاتورة مبلغ وتاريخ استحقاق. حدد الفاتورة باسم + bill: the electricity bill، وthe water bill، وthe gas bill. وللتذمر استخدم فعل الكينونة مع صفة وtoo: The bill is too high this month. وقل كيف تدفع بعبارة حرف جر: I pay online، وI pay by card، وI pay at the post office. واستخدم الماضي البسيط للمدفوعات المنجزة: I paid the gas bill yesterday، وwill للمدفوعات المخططة: I will pay it on Sunday. وتاريخ الاستحقاق يجيب عن متى: The due date is next Monday.',
      examples: [
        { en: 'The electricity bill is too high this month.', ar: 'فاتورة الكهرباء مرتفعة جدا هذا الشهر.' },
        { en: 'I pay the water bill online.', ar: 'أدفع فاتورة المياه عبر الإنترنت.' },
        { en: 'The due date is next Monday.', ar: 'تاريخ الاستحقاق الاثنين القادم.' },
      ],
    },
    vocabulary: [
      { word: 'bill', meaningAr: 'فاتورة', example: 'The bill is on the table.', ipa: 'bɪl' },
      { word: 'electricity bill', meaningAr: 'فاتورة الكهرباء', example: 'The electricity bill is high.' },
      { word: 'water bill', meaningAr: 'فاتورة المياه', example: 'I pay the water bill online.' },
      { word: 'gas bill', meaningAr: 'فاتورة الغاز', example: 'The gas bill came yesterday.' },
      { word: 'pay', meaningAr: 'يدفع', example: 'I pay the bills on Sunday.' },
      { word: 'online', meaningAr: 'عبر الإنترنت', example: 'It is fast to pay online.' },
      { word: 'due date', meaningAr: 'تاريخ الاستحقاق', example: 'The due date is next Monday.' },
      { word: 'meter', meaningAr: 'عداد', example: 'Read the meter every month.' },
      { word: 'late', meaningAr: 'متأخر', example: 'My payment was late.' },
      { word: 'amount', meaningAr: 'المبلغ', example: 'Check the amount before you pay.' },
      { word: 'fine', meaningAr: 'غرامة', example: 'A late payment has a fine.' },
      { word: 'receipt', meaningAr: 'إيصال', example: 'Please give me a receipt.' },
    ],
    scenario: [
      { en: 'The electricity bill is too high this month.', ar: 'فاتورة الكهرباء مرتفعة جدا هذا الشهر.', d: 1 },
      { en: 'I pay the water bill online every month.', ar: 'أدفع فاتورة المياه عبر الإنترنت كل شهر.', d: 1 },
      { en: 'When is the due date?', ar: 'متى تاريخ الاستحقاق؟', d: 1 },
      { en: 'It is on the fifteenth of the month.', ar: 'إنه في الخامس عشر من الشهر.', d: 2 },
      { en: 'I paid the gas bill yesterday.', ar: 'دفعت فاتورة الغاز أمس.', d: 2 },
      { en: 'Did you pay the electricity bill?', ar: 'هل دفعت فاتورة الكهرباء؟', d: 2 },
      { en: 'No, I will pay it on Sunday.', ar: 'لا، سأدفعها يوم الأحد.', d: 2 },
      { en: 'The bills arrive at the beginning of the month.', ar: 'تصل الفواتير في بداية الشهر.', d: 2 },
      { en: 'I did not receive the water bill this month.', ar: 'لم أتسلم فاتورة المياه هذا الشهر.', d: 2 },
      { en: 'Check the meter and read the number.', ar: 'افحص العداد واقرأ الرقم.', d: 2 },
      { en: 'The amount does not look right.', ar: 'المبلغ لا يبدو صحيحا.', d: 2 },
      { en: 'Please send me a receipt, thank you.', ar: 'أرسل لي إيصالا من فضلك، شكرا.', d: 2 },
      { en: 'My father pays the bills at the post office.', ar: 'أبي يدفع الفواتير في المكتب البريدي.', d: 2 },
      { en: "Don't pay late, there is a small fine.", ar: 'لا تدفع متأخرا، هناك غرامة صغيرة.', d: 2 },
      { en: 'The phone bill was late two months ago.', ar: 'فاتورة الهاتف تأخرت قبل شهرين.', d: 3 },
      { en: 'We will save money and use less water.', ar: 'سنوفر المال ونستعمل ماء أقل.', d: 2 },
      { en: 'Can I pay this bill by card?', ar: 'هل أستطيع دفع هذه الفاتورة بالبطاقة؟', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'The {K} bill is {A} again this month.', arTmpl: 'فاتورة {K_ar} {A_ar} مرة أخرى هذا الشهر.',
        slots: {
          K: [
            { en: 'electricity', ar: 'الكهرباء' }, { en: 'water', ar: 'المياه' },
            { en: 'gas', ar: 'الغاز' }, { en: 'phone', ar: 'الهاتف' },
          ],
          A: [
            { en: 'high', ar: 'مرتفعة' }, { en: 'low', ar: 'منخفضة' },
            { en: 'late', ar: 'متأخرة' }, { en: 'correct', ar: 'صحيحة' },
          ],
        },
        tags: ['bills', 'adjectives'], d: 1, limit: 16,
      },
      {
        tmpl: 'I pay the {K} bill {M}.', arTmpl: 'أدفع فاتورة {K_ar} {M_ar}.',
        slots: {
          K: [
            { en: 'electricity', ar: 'الكهرباء' }, { en: 'water', ar: 'المياه' },
            { en: 'gas', ar: 'الغاز' }, { en: 'phone', ar: 'الهاتف' },
          ],
          M: [
            { en: 'online', ar: 'عبر الإنترنت' }, { en: 'at the post office', ar: 'في المكتب البريدي' },
            { en: 'by card', ar: 'بالبطاقة' }, { en: 'in cash', ar: 'نقدا' },
          ],
        },
        tags: ['bills', 'present-simple'], d: 1, limit: 14,
      },
      {
        tmpl: 'Did you pay the {K} bill?', arTmpl: 'هل دفعت فاتورة {K_ar}؟',
        slots: {
          K: [
            { en: 'electricity', ar: 'الكهرباء' }, { en: 'water', ar: 'المياه' },
            { en: 'gas', ar: 'الغاز' }, { en: 'phone', ar: 'الهاتف' },
          ],
        },
        tags: ['bills', 'questions'], d: 2, limit: 4,
      },
      {
        tmpl: 'The due date is {T}.', arTmpl: 'تاريخ الاستحقاق {T_ar}.',
        slots: {
          T: [
            { en: 'next Monday', ar: 'الاثنين القادم' }, { en: 'on Friday', ar: 'يوم الجمعة' },
            { en: 'tomorrow', ar: 'غدا' }, { en: 'on the first of June', ar: 'الأول من يونيو' },
          ],
        },
        tags: ['bills', 'time'], d: 2, limit: 4,
      },
    ],
    fills: [
      { en: 'The electricity bill is too high this month.', ar: 'فاتورة الكهرباء مرتفعة جدا هذا الشهر.', word: 'bill', hint: 'فاتورة' },
      { en: 'I pay the water bill online every month.', ar: 'أدفع فاتورة المياه عبر الإنترنت كل شهر.', word: 'online', hint: 'عبر الإنترنت' },
      { en: 'When is the due date?', ar: 'متى تاريخ الاستحقاق؟', word: 'due', hint: 'الاستحقاق' },
      { en: 'I paid the gas bill yesterday.', ar: 'دفعت فاتورة الغاز أمس.', word: 'paid', hint: 'فعل ماض' },
      { en: 'The bills arrive at the beginning of the month.', ar: 'تصل الفواتير في بداية الشهر.', word: 'arrive' },
      { en: 'Please send me a receipt, thank you.', ar: 'أرسل لي إيصالا من فضلك، شكرا.', word: 'receipt' },
      { en: 'Check the meter and read the number.', ar: 'افحص العداد واقرأ الرقم.', word: 'meter' },
      { en: "Don't pay late, there is a small fine.", ar: 'لا تدفع متأخرا، هناك غرامة صغيرة.', word: 'late', hint: 'متأخر' },
    ],
    orders: [
      { en: 'The electricity bill is too high this month.', ar: 'فاتورة الكهرباء مرتفعة جدا هذا الشهر.' },
      { en: 'Did you pay the water bill?', ar: 'هل دفعت فاتورة المياه؟' },
      { en: 'No, I will pay it on Sunday.', ar: 'لا، سأدفعها يوم الأحد.' },
      { en: 'The bills arrive at the beginning of the month.', ar: 'تصل الفواتير في بداية الشهر.' },
      { en: 'My father pays the bills at the post office.', ar: 'أبي يدفع الفواتير في المكتب البريدي.' },
      { en: 'The amount does not look right.', ar: 'المبلغ لا يبدو صحيحا.' },
    ],
    mc: [
      { question: 'Which bill comes for the water you use?', options: ['the water bill', 'the school bill', 'the toy bill', 'the shoe bill'], answerIndex: 0, ar: 'أي فاتورة تأتي مقابل الماء الذي تستخدمه؟' },
      { question: 'The due date is:', options: ['the last day to pay', 'the first day of school', 'a holiday', 'a phone number'], answerIndex: 0, ar: 'تاريخ الاستحقاق هو:' },
      { question: '"I pay online" means I pay:', options: ['on the internet', 'by mail only', 'in the garden', 'never'], answerIndex: 0, ar: 'أدفع عبر الإنترنت أي:' },
      { question: 'The electricity bill is too high. You feel:', options: ['worried', 'hungry', 'sleepy', 'bored'], answerIndex: 0, ar: 'فاتورة الكهرباء مرتفعة جدا، تشعر أنك:' },
    ],
  },

  /* ================= lesson 70 — Home and Family Review ================= */
  {
    num: 70,
    tags: ['review', 'home-family'],
    objectives: [
      'Reuse home and family words from lessons 46–69',
      'Talk about chores, repairs and bills in new sentences',
      'Check your grammar: past, future, questions and commands',
    ],
    grammar: {
      explanation: 'This review lesson mixes everything from the home and family section: family people, rooms, rent, chores, pets, guests, safety, moving, repairs and bills. Watch the tense: the past simple for finished actions ("My sister washed the dishes before lunch"), will for plans ("I will pay the electricity bill online tonight"), and the present simple for habits ("We pay the rent on the first day of every month"). Questions begin with question words or Did/Will/Can, and warnings begin with Don\'t. Every sentence here is new, but the words are the ones you know.',
      explanationAr: 'هذا الدرس المراجعي يمزج كل ما في قسم المنزل والأسرة: أفراد الأسرة والغرف والإيجار وأعمال المنزل والحيوانات الأليفة والضيوف والسلامة والانتقال والإصلاحات والفواتير. انتبه للزمن: الماضي البسيط للأفعال المنتهية (My sister washed the dishes before lunch)، وwill للخطط (I will pay the electricity bill online tonight)، والمضارع البسيط للعادات (We pay the rent on the first day of every month). تبدأ الأسئلة بأدوات الاستفهام أو Did/Will/Can، وتبدأ التحذيرات بـ Don\'t. وكل الجمل هنا جديدة لكن كلماتها التي تعرفها.',
      examples: [
        { en: 'My sister washed the dishes before lunch.', ar: 'غسلت أختي الأطباق قبل الغداء.' },
        { en: 'Will you visit your grandparents this weekend?', ar: 'هل ستزور أجدادك في عطلة نهاية الأسبوع؟' },
        { en: 'We bought fresh vegetables at the market.', ar: 'اشترينا خضروات طازجة من السوق.' },
      ],
    },
    vocabulary: [
      { word: 'rent', meaningAr: 'إيجار', example: 'The rent is due every month.' },
      { word: 'chores', meaningAr: 'أعمال المنزل', example: 'We share the chores at home.' },
      { word: 'guests', meaningAr: 'ضيوف', example: 'We have guests tonight.' },
      { word: 'neighbors', meaningAr: 'جيران', example: 'Our neighbors help us a lot.' },
      { word: 'groceries', meaningAr: 'بقالة / مشتريات', example: 'I buy the groceries on Friday.' },
      { word: 'laundry', meaningAr: 'غسيل', example: 'The laundry is dry now.' },
      { word: 'pet', meaningAr: 'حيوان أليف', example: 'Our pet is a small cat.' },
      { word: 'rules', meaningAr: 'قواعد', example: 'Every home has rules.' },
      { word: 'bills', meaningAr: 'فواتير', example: 'The bills are on the desk.' },
      { word: 'safety', meaningAr: 'السلامة', example: 'Safety comes first at home.' },
      { word: 'repairs', meaningAr: 'إصلاحات', example: 'The repairs finished on Friday.' },
      { word: 'family', meaningAr: 'أسرة / عائلة', example: 'I love my family.' },
    ],
    scenario: [
      { en: 'Welcome to our new home, please come in.', ar: 'أهلا بكم في منزلنا الجديد، تفضلوا بالدخول.', d: 1 },
      { en: 'My grandmother lives with us in the big house.', ar: 'تعيش جدتي معنا في المنزل الكبير.', d: 1 },
      { en: 'How many rooms are there in your apartment?', ar: 'كم غرفة في شقتك؟', d: 1 },
      { en: 'We pay the rent on the first day of every month.', ar: 'ندفع الإيجار في أول كل شهر.', d: 2 },
      { en: 'The neighbors are very kind to my children.', ar: 'الجيران لطفون جدا مع أطفالي.', d: 2 },
      { en: 'My little brother feeds the cat every morning.', ar: 'يطعم أخي الصغير القطة كل صباح.', d: 2 },
      { en: "Don't forget to turn off the lights before bed.", ar: 'لا تنس إطفاء الأنوار قبل النوم.', d: 1 },
      { en: 'I washed the clothes and hung them on the balcony.', ar: 'غسلت الملابس ونشرتها على الشرفة.', d: 2 },
      { en: 'My father cooks the best rice in the family.', ar: 'يطبخ أبي أفضل أرز في العائلة.', d: 2 },
      { en: 'Please buy bread and cheese from the store.', ar: 'اشترِ خبزا وجبنا من المتجر من فضلك.', d: 2 },
      { en: 'The plumber repaired the leak in the bathroom.', ar: 'أصلح السباك التسرب في الحمام.', d: 2 },
      { en: 'I will pay the electricity bill online tonight.', ar: 'سأدفع فاتورة الكهرباء عبر الإنترنت الليلة.', d: 2 },
      { en: 'We moved our furniture to the new apartment last week.', ar: 'نقلنا أثاثنا إلى الشقة الجديدة الأسبوع الماضي.', d: 3 },
      { en: 'Where is the key of the front door?', ar: 'أين مفتاح الباب الأمامي؟', d: 1 },
      { en: 'It is on the small table near the door.', ar: 'إنه على الطاولة الصغيرة قرب الباب.', d: 2 },
      { en: 'The children do their homework after school.', ar: 'يعمل الأطفال واجباتهم بعد المدرسة.', d: 2 },
      { en: 'It is very hot today, so we will stay at home.', ar: 'الجو حار جدا اليوم لذا سنبقى في المنزل.', d: 2 },
      { en: 'Did you call the electrician about the broken switch?', ar: 'هل اتصلت بالكهربائي بشأن المفتاح المكسور؟', d: 3 },
      { en: 'My mother asked me to clean my room.', ar: 'طلبت مني أمي أن أنظف غرفتي.', d: 2 },
      { en: 'Good night, see you tomorrow at school.', ar: 'تصبح على خير، أراك غدا في المدرسة.', d: 1 },
      { en: 'There are twenty guests in our living room tonight.', ar: 'هناك عشرون ضيفا في غرفة الجلوس الليلة.', d: 3 },
      { en: "Don't leave the trash in the kitchen.", ar: 'لا تترك القمامة في المطبخ.', d: 1 },
    ],
    patterns: [
      {
        tmpl: '{S} {V} the {C} {T}.', arTmpl: '{S_ar} {V_ar} {C_ar} {T_ar}.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'My brother', ar: 'أخي', agr: 'he' },
            { en: 'My sister', ar: 'أختي', agr: 'she' }, { en: 'We', ar: 'نحن', agr: 'we' },
            { en: 'My children', ar: 'أطفالي', agr: 'they' }, { en: 'My mother', ar: 'أمي', agr: 'she' },
          ],
          V: (x) => [
            { en: B.enPast('clean'), ar: B.arPast('clean', x.S.agr) },
            { en: B.enPast('wash'), ar: B.arPast('wash', x.S.agr) },
          ],
          C: [
            { en: 'kitchen', ar: 'المطبخ' }, { en: 'bathroom', ar: 'الحمام' },
            { en: 'dishes', ar: 'الأطباق' }, { en: 'clothes', ar: 'الملابس' }, { en: 'car', ar: 'السيارة' },
          ],
          T: [
            { en: 'yesterday', ar: 'أمس' }, { en: 'this morning', ar: 'هذا الصباح' },
            { en: 'before lunch', ar: 'قبل الغداء' }, { en: 'on Friday', ar: 'يوم الجمعة' },
          ],
        },
        tags: ['review', 'past-simple'], d: 2, limit: 30,
      },
      {
        tmpl: 'We bought {G} at the market.', arTmpl: 'اشترينا {G_ar} من السوق.',
        slots: {
          G: [
            { en: 'fresh vegetables', ar: 'خضروات طازجة' }, { en: 'fruit', ar: 'فواكه' },
            { en: 'rice and sugar', ar: 'أرزا وسكرا' }, { en: 'fresh bread', ar: 'خبزا طازجا' },
            { en: 'eggs and cheese', ar: 'بيضا وجبنا' }, { en: 'tomatoes and onions', ar: 'طماطم وبصلا' },
          ],
        },
        tags: ['review', 'groceries'], d: 1, limit: 6,
      },
      {
        tmpl: 'Please help me {V}.', arTmpl: 'ساعدني من فضلك في {V_ar}.',
        slots: {
          V: [
            { en: 'wash the dishes', ar: 'غسل الأطباق' }, { en: 'set the table', ar: 'إعداد الطاولة' },
            { en: 'fold the clothes', ar: 'طي الملابس' }, { en: 'take out the trash', ar: 'إخراج القمامة' },
            { en: 'carry these bags', ar: 'حمل هذه الحقائب' },
          ],
        },
        tags: ['review', 'requests'], d: 1, limit: 5,
      },
      {
        tmpl: 'I put the {O} {P}.', arTmpl: 'وضعت {O_ar} {P_ar}.',
        slots: {
          O: [
            { en: 'key', ar: 'المفتاح' }, { en: 'remote control', ar: 'جهاز التحكم' },
            { en: 'medicine', ar: 'الدواء' }, { en: 'glasses', ar: 'النظارة' }, { en: 'charger', ar: 'الشاحن' },
          ],
          P: [
            { en: 'in the drawer', ar: 'في الدرج' }, { en: 'on the shelf', ar: 'على الرف' },
            { en: 'in my bag', ar: 'في حقيبتي' }, { en: 'next to the phone', ar: 'بجانب الهاتف' },
          ],
        },
        tags: ['review', 'past-simple'], d: 2, limit: 20,
      },
      {
        tmpl: 'Will you {V} {T}?', arTmpl: 'هل {V_ar} {T_ar}؟',
        slots: {
          V: [
            { en: 'visit your grandparents', ar: 'ستزور أجدادك' }, { en: 'clean the house', ar: 'ستنظف المنزل' },
            { en: 'cook lunch', ar: 'ستطبخ الغداء' }, { en: 'wash the car', ar: 'ستغسل السيارة' },
          ],
          T: [
            { en: 'this weekend', ar: 'في عطلة نهاية الأسبوع' }, { en: 'tomorrow', ar: 'غدا' },
            { en: 'on Friday', ar: 'يوم الجمعة' }, { en: 'in the evening', ar: 'في المساء' },
          ],
        },
        tags: ['review', 'future'], d: 2, limit: 16,
      },
    ],
    fills: [
      { en: 'We pay the rent on the first day of every month.', ar: 'ندفع الإيجار في أول كل شهر.', word: 'rent', hint: 'إيجار' },
      { en: 'The children do their homework after school.', ar: 'يعمل الأطفال واجباتهم بعد المدرسة.', word: 'homework' },
      { en: 'I will pay the electricity bill online tonight.', ar: 'سأدفع فاتورة الكهرباء عبر الإنترنت الليلة.', word: 'tonight' },
      { en: 'My father cooks the best rice in the family.', ar: 'يطبخ أبي أفضل أرز في العائلة.', word: 'cooks', hint: 'مضارع' },
      { en: 'Please buy bread and cheese from the store.', ar: 'اشترِ خبزا وجبنا من المتجر من فضلك.', word: 'bread' },
      { en: 'Where is the key of the front door?', ar: 'أين مفتاح الباب الأمامي؟', word: 'key' },
      { en: 'It is very hot today, so we will stay at home.', ar: 'الجو حار جدا اليوم لذا سنبقى في المنزل.', word: 'stay' },
      { en: 'There are twenty guests in our living room tonight.', ar: 'هناك عشرون ضيفا في غرفة الجلوس الليلة.', word: 'guests', hint: 'ضيوف' },
      { en: "Don't leave the trash in the kitchen.", ar: 'لا تترك القمامة في المطبخ.', word: 'trash' },
    ],
    orders: [
      { en: 'My grandmother lives with us in the big house.', ar: 'تعيش جدتي معنا في المنزل الكبير.' },
      { en: 'The plumber repaired the leak in the bathroom.', ar: 'أصلح السباك التسرب في الحمام.' },
      { en: 'We moved our furniture to the new apartment last week.', ar: 'نقلنا أثاثنا إلى الشقة الجديدة الأسبوع الماضي.' },
      { en: 'My little brother feeds the cat every morning.', ar: 'يطعم أخي الصغير القطة كل صباح.' },
      { en: 'Did you call the electrician about the broken switch?', ar: 'هل اتصلت بالكهربائي بشأن المفتاح المكسور؟' },
      { en: 'The neighbors are very kind to my children.', ar: 'الجيران لطفون جدا مع أطفالي.' },
    ],
    mc: [
      { question: 'Who fixes leaking pipes at home?', options: ['a plumber', 'a barber', 'a pilot', 'a waiter'], answerIndex: 0, ar: 'من يصلح الأنابيب المسربة في المنزل؟' },
      { question: 'Which room do you cook in?', options: ['the kitchen', 'the bathroom', 'the garage', 'the balcony'], answerIndex: 0, ar: 'في أي غرفة تطبخ؟' },
      { question: 'What does "rent" mean?', options: ['إيجار المنزل', 'فاتورة الكهرباء', 'أعمال التنظيف', 'عنوان جديد'], answerIndex: 0, ar: 'ما معنى rent؟' },
      { question: 'The paper that shows what you pay for water is a:', options: ['water bill', 'shopping list', 'birthday card', 'bus ticket'], answerIndex: 0, ar: 'الورقة التي تبين ما تدفع ثمنه للماء هي:' },
      { question: 'What do you call the boxes you pack when you move?', options: ['moving boxes', 'lunch boxes', 'match boxes', 'music boxes'], answerIndex: 0, ar: 'ماذا تسمى الصناديق التي تحزم أغراضك عند الانتقال؟' },
      { question: 'Where do you keep a first-aid kit?', options: ['at home for emergencies', 'in the classroom', 'at the cafe', 'in the taxi'], answerIndex: 0, ar: 'أين تحتفظ بعلبة الإسعافات الأولية؟' },
    ],
  },
];
