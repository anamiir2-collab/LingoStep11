/* ============================================================
   v2 section data — s05-b2.js
   Mobility & Travel · lessons 107–109 (A2)
   107 Lost Luggage · 108 Hotel Check-In · 109 Hotel Requests
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 107 — Lost Luggage ================= */
  {
    num: 107,
    tags: ['airport', 'lost-luggage'],
    objectives: [
      'Report a missing suitcase at the airport',
      'Describe your luggage with colors and details',
      'Ask the airline to deliver your bag to your hotel',
    ],
    grammar: {
      explanation: 'When your bag is missing, go to the lost luggage desk and say "My suitcase did not arrive". The clerk asks "Can you describe your luggage?" — describe it with size, color and details: "It is a large blue suitcase with a red label". Ask for help politely: "Please file a report at that desk". For the solution, use "will": "The airline will deliver it to my hotel". The past simple reports what happened: "I lost my luggage on the way to Cairo".',
      explanationAr: 'عندما تفقَد حقيبتك توجه إلى مكتب الأمتعة المفقودة وقُل: My suitcase did not arrive. يسألك الموظف: Can you describe your luggage؟ فتصفها بالحجم واللون والتفاصيل: إنها حقيبة كبيرة زرقاء عليها بطاقة حمراء. واطلب المساعدة بأدب: Please file a report at that desk. وللحل استخدم will: The airline will deliver it to my hotel. ويروي الماضي البسيط ما حدث: I lost my luggage on the way to Cairo.',
      examples: [
        { en: 'Excuse me, my suitcase did not arrive.', ar: 'عذرا، حقيبة سفري لم تصل.' },
        { en: 'It is a large blue suitcase with wheels.', ar: 'إنها حقيبة سفر كبيرة زرقاء بعجلات.' },
        { en: 'The airline will deliver it to my hotel.', ar: 'ستوصلها شركة الطيران إلى فندقي.' },
      ],
    },
    vocabulary: [
      { word: 'lost', meaningAr: 'مفقود / ضاع', example: 'I lost my luggage on the way to Cairo.' },
      { word: 'suitcase', meaningAr: 'حقيبة سفر', example: 'My suitcase did not arrive.', ipa: 'suːtkeɪs' },
      { word: 'baggage claim', meaningAr: 'استلام الأمتعة', example: 'We waited at baggage claim for an hour.' },
      { word: 'carousel', meaningAr: 'سير الأمتعة', example: 'I checked the carousel twice.' },
      { word: 'report', meaningAr: 'بلاغ / تقرير', example: 'Please file a report at that desk.' },
      { word: 'form', meaningAr: 'استمارة', example: 'I will fill in this form.' },
      { word: 'deliver', meaningAr: 'يوصل / يسلّم', example: 'The airline will deliver it to my hotel.' },
      { word: 'describe', meaningAr: 'يصف', example: 'Can you describe your luggage?' },
      { word: 'label', meaningAr: 'بطاقة تعريف', example: 'It has a red label with my name.' },
      { word: 'broken', meaningAr: 'مكسور / تالف', example: 'The handle of my box is broken.' },
      { word: 'search', meaningAr: 'يبحث', example: 'They will search for the bag.' },
      { word: 'apologize', meaningAr: 'يعتذر', example: 'The airline apologized for the problem.' },
    ],
    scenario: [
      { en: 'Excuse me, my suitcase did not arrive.', ar: 'عذرا، حقيبة سفري لم تصل.', d: 1 },
      { en: 'What is your flight number?', ar: 'ما رقم رحلتك؟', d: 1 },
      { en: 'It was flight 226 from Istanbul.', ar: 'كانت الرحلة 226 من إسطنبول.', d: 1 },
      { en: 'I cannot find my suitcase.', ar: 'لا أستطيع إيجاد حقيبة سفري.', d: 2 },
      { en: 'Did you look at the carousel?', ar: 'هل نظرت إلى سير الأمتعة؟', d: 2 },
      { en: 'Yes, I checked the carousel twice.', ar: 'نعم، فحصت سير الأمتعة مرتين.', d: 2 },
      { en: 'It is a large blue suitcase with wheels.', ar: 'إنها حقيبة سفر كبيرة زرقاء بعجلات.', d: 2 },
      { en: 'It has a red label with my name.', ar: 'عليها بطاقة حمراء باسمي.', d: 2 },
      { en: 'Please file a report at that desk.', ar: 'قدّم بلاغا عند ذلك المكتب من فضلك.', d: 2 },
      { en: 'I will fill in this form.', ar: 'سأملأ هذه الاستمارة.', d: 2 },
      { en: 'Can you describe your luggage?', ar: 'هل يمكنك وصف أمتعتك؟', d: 2 },
      { en: 'There are some clothes and a laptop inside.', ar: 'توجد بعض الملابس وحاسوب محمول في الداخل.', d: 3 },
      { en: 'The airline will deliver it to my hotel.', ar: 'ستوصلها شركة الطيران إلى فندقي.', d: 3 },
      { en: 'They delivered our bags to the hotel last night.', ar: 'أوصلوا حقائبنا إلى الفندق الليلة الماضية.', d: 3 },
      { en: 'I lost my luggage on the way to Cairo.', ar: 'فقدت أمتعتي في الطريق إلى القاهرة.', d: 3 },
      { en: 'Do not worry; we will search for it.', ar: 'لا تقلق؛ سنبحث عنها.', d: 2 },
      { en: 'The airline apologized for the problem.', ar: 'اعتذرت شركة الطيران عن المشكلة.', d: 3 },
      { en: 'Two other passengers are also waiting.', ar: 'مسافران آخران ينتظران أيضا.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'My {B} did not arrive.', arTmpl: '{B_ar}.',
        slots: {
          B: [
            { en: 'suitcase', ar: 'لم تصل حقيبة سفري' },
            { en: 'bag', ar: 'لم تصل حقيبتي' },
            { en: 'backpack', ar: 'لم يصل حقيبة ظهري' },
            { en: 'boxes', ar: 'لم تصل صناديقي' },
            { en: 'luggage', ar: 'لم تصل أمتعتي' },
          ],
        },
        tags: ['lost-luggage', 'negative'], d: 1, limit: 5,
      },
      {
        tmpl: 'It is a large {C} suitcase.', arTmpl: 'إنها حقيبة سفر كبيرة {C_ar}.',
        slots: {
          C: [
            { en: 'blue', ar: 'زرقاء' }, { en: 'green', ar: 'خضراء' },
            { en: 'black', ar: 'سوداء' }, { en: 'brown', ar: 'بنية' },
            { en: 'red', ar: 'حمراء' }, { en: 'gray', ar: 'رمادية' },
            { en: 'white', ar: 'بيضاء' },
          ],
        },
        tags: ['lost-luggage', 'colors'], d: 1, limit: 7,
      },
      {
        tmpl: 'The airline will deliver my {B} to my hotel.', arTmpl: 'ستوصل شركة الطيران {B_ar} إلى فندقي.',
        slots: {
          B: [
            { en: 'suitcase', ar: 'حقيبة سفري' },
            { en: 'bag', ar: 'حقيبتي' },
            { en: 'backpack', ar: 'حقيبة ظهري' },
            { en: 'boxes', ar: 'صناديقي' },
            { en: 'luggage', ar: 'أمتعتي' },
          ],
        },
        tags: ['lost-luggage', 'future'], d: 2, limit: 5,
      },
      {
        tmpl: 'I {V} my {O} at the airport.', arTmpl: 'فقدت {O_ar} في المطار.',
        slots: {
          V: (x) => [{ en: B.enPast('lose'), ar: B.arPast('lose', 'I') }],
          O: [
            { en: 'suitcase', ar: 'حقيبة سفري' },
            { en: 'phone', ar: 'هاتفي' },
            { en: 'wallet', ar: 'محفظتي' },
            { en: 'keys', ar: 'مفاتيحي' },
          ],
        },
        tags: ['lost-luggage', 'past-simple'], d: 2, limit: 4,
      },
      {
        tmpl: '{S} {V} a report {T}.', arTmpl: '{S_ar} {V_ar} بلاغا {T_ar}.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'The clerk', ar: 'الموظف', agr: 'he' },
            { en: 'We', ar: 'نحن', agr: 'we' }, { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{ en: B.enPast('write'), ar: B.arPast('write', x.S.agr) }],
          T: [
            { en: 'yesterday', ar: 'أمس' },
            { en: 'this morning', ar: 'هذا الصباح' },
            { en: 'ten minutes ago', ar: 'قبل عشر دقائق' },
          ],
        },
        tags: ['lost-luggage', 'past-simple'], d: 3, limit: 12,
      },
    ],
    fills: [
      { en: 'Excuse me, my suitcase did not arrive.', ar: 'عذرا، حقيبة سفري لم تصل.', word: 'suitcase', hint: 'حقيبة كبيرة' },
      { en: 'It is a large blue suitcase with wheels.', ar: 'إنها حقيبة سفر كبيرة زرقاء بعجلات.', word: 'blue', hint: 'لون' },
      { en: 'Please file a report at that desk.', ar: 'قدّم بلاغا عند ذلك المكتب من فضلك.', word: 'report' },
      { en: 'I will fill in this form.', ar: 'سأملأ هذه الاستمارة.', word: 'form' },
      { en: 'Can you describe your luggage?', ar: 'هل يمكنك وصف أمتعتك؟', word: 'describe' },
      { en: 'The airline will deliver it to my hotel.', ar: 'ستوصلها شركة الطيران إلى فندقي.', word: 'deliver' },
      { en: 'Do not worry; we will search for it.', ar: 'لا تقلق؛ سنبحث عنها.', word: 'worry' },
      { en: 'The airline apologized for the problem.', ar: 'اعتذرت شركة الطيران عن المشكلة.', word: 'apologized' },
    ],
    orders: [
      { en: 'I cannot find my suitcase.', ar: 'لا أستطيع إيجاد حقيبة سفري.' },
      { en: 'It has a red label with my name.', ar: 'عليها بطاقة حمراء باسمي.' },
      { en: 'Please file a report at that desk.', ar: 'قدّم بلاغا عند ذلك المكتب من فضلك.' },
      { en: 'The airline will deliver it to my hotel.', ar: 'ستوصلها شركة الطيران إلى فندقي.' },
      { en: 'Did you look at the carousel?', ar: 'هل نظرت إلى سير الأمتعة؟' },
      { en: 'They delivered our bags to the hotel last night.', ar: 'أوصلوا حقائبنا إلى الفندق الليلة الماضية.' },
    ],
    mc: [
      { question: 'Your suitcase is missing. Where do you go?', options: ['to the lost luggage desk', 'to the gate', 'to the cockpit', 'to the train platform'], answerIndex: 0, ar: 'حقيبتك مفقودة. إلى أين تذهب؟' },
      { question: '"File a report" means:', options: ['قدّم بلاغا', 'احمل ملفا', 'اقرأ صحيفة', 'أغلق الباب'], answerIndex: 0, ar: 'ما معنى File a report؟' },
      { question: 'What does the airline do with your found bag?', options: ['delivers it to your hotel', 'keeps it forever', 'throws it away', 'gives it to another passenger'], answerIndex: 0, ar: 'ماذا تفعل شركة الطيران بحقيبتك بعد إيجادها؟' },
      { question: 'Describe your suitcase:', options: ['It is large and blue.', 'It is at nine thirty.', 'It is platform 5.', 'It is gate 12.'], answerIndex: 0, ar: 'صِف حقيبتك:' },
    ],
  },

  /* ================= lesson 108 — Hotel Check-In ================= */
  {
    num: 108,
    tags: ['hotel', 'check-in'],
    objectives: [
      'Check in at a hotel with a reservation',
      'Ask about rooms, prices and breakfast',
      'Understand room numbers, floors and keys',
    ],
    grammar: {
      explanation: 'At the hotel reception, start with "I have a reservation" and give your name. Say how long you will stay: "A double room for two nights". Show your documents: "Here is my passport". Ask about services with "Is breakfast included?" — the answer is "Yes, it is included in the price". The receptionist tells you the room and floor: "Your room is on the third floor. Here is your key". Use the past simple for earlier bookings: "I booked a room last week".',
      explanationAr: 'في استقبال الفندق ابدأ بـ I have a reservation واذكر اسمك. وقل مدة إقامتك: A double room for two nights. وأظهر مستنداتك: Here is my passport. واسأل عن الخدمات بـ Is breakfast included؟ فيكون الجواب: نعم، إنه مشمول في السعر. يخبرك موظف الاستقبال بالغرفة والطابق: غرفتك في الطابق الثالث، ها هو مفتاحك. واستخدم الماضي البسيط للحجوزات السابقة: I booked a room last week.',
      examples: [
        { en: 'I have a reservation for two nights.', ar: 'لدي حجز لليلتين.' },
        { en: 'Is breakfast included in the price?', ar: 'هل الفطور مشمول في السعر؟' },
        { en: 'Your room is on the third floor.', ar: 'غرفتك في الطابق الثالث.' },
      ],
    },
    vocabulary: [
      { word: 'reservation', meaningAr: 'حجز', example: 'I have a reservation for two nights.', ipa: 'ˌrezərˈveɪʃən' },
      { word: 'double room', meaningAr: 'غرفة مزدوجة', example: 'A double room for two nights, please.' },
      { word: 'single room', meaningAr: 'غرفة مفردة', example: 'They do not have a single room tonight.' },
      { word: 'night', meaningAr: 'ليلة / مبيت', example: 'We stayed three nights in Dubai.' },
      { word: 'reception', meaningAr: 'الاستقبال', example: 'The reception is open all night.' },
      { word: 'receptionist', meaningAr: 'موظف الاستقبال', example: 'The receptionist gave me the key.' },
      { word: 'key', meaningAr: 'مفتاح', example: 'Here is your key.' },
      { word: 'floor', meaningAr: 'طابق', example: 'Your room is on the third floor.' },
      { word: 'elevator', meaningAr: 'مصعد', example: 'The elevator is next to the reception.' },
      { word: 'breakfast', meaningAr: 'فطور الصباح', example: 'Breakfast is from seven to ten.' },
      { word: 'included', meaningAr: 'مشمول', example: 'Is breakfast included in the price?' },
      { word: 'guest', meaningAr: 'نزيل / ضيف', example: 'How many guests are staying in the room?' },
    ],
    scenario: [
      { en: 'I have a reservation.', ar: 'لدي حجز.', d: 1 },
      { en: 'What is your name, please?', ar: 'ما اسمك من فضلك؟', d: 1 },
      { en: 'My name is Omar Hassan.', ar: 'اسمي عمر حسن.', d: 1 },
      { en: 'A double room for two nights, please.', ar: 'غرفة مزدوجة لليلتين من فضلك.', d: 1 },
      { en: 'Here is my passport.', ar: 'ها هو جواز سفري.', d: 1 },
      { en: 'Is breakfast included in the price?', ar: 'هل الفطور مشمول في السعر؟', d: 2 },
      { en: 'Yes, it is included.', ar: 'نعم، إنه مشمول.', d: 2 },
      { en: 'Your room is on the third floor.', ar: 'غرفتك في الطابق الثالث.', d: 2 },
      { en: 'Here is your key.', ar: 'ها هو مفتاحك.', d: 2 },
      { en: 'What time is breakfast?', ar: 'ما وقت الفطور؟', d: 2 },
      { en: 'Breakfast is from seven to ten.', ar: 'الفطور من السابعة إلى العاشرة.', d: 2 },
      { en: 'The elevator is next to the reception.', ar: 'المصعد بجانب الاستقبال.', d: 2 },
      { en: 'We do not have a single room tonight.', ar: 'ليس لدينا غرفة مفردة الليلة.', d: 2 },
      { en: 'A double room costs sixty dollars a night.', ar: 'تكلف الغرفة المزدوجة ستين دولارا في الليلة.', d: 3 },
      { en: 'I booked a room for my family last week.', ar: 'حجزت غرفة لعائلتي الأسبوع الماضي.', d: 3 },
      { en: 'Our friends are going to arrive at midnight.', ar: 'سيصل أصدقاؤنا في منتصف الليل.', d: 3 },
      { en: 'How many guests are staying in the room?', ar: 'كم نزيلا يقيمان في الغرفة؟', d: 3 },
      { en: 'Two guests: my wife and I.', ar: 'نزيلان: أنا وزوجتي.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I have a reservation for {N}.', arTmpl: 'لدي حجز {N_ar}.',
        slots: {
          N: [
            { en: 'tonight', ar: 'الليلة' },
            { en: 'two nights', ar: 'ليلتين' },
            { en: 'three nights', ar: 'ثلاث ليال' },
            { en: 'four nights', ar: 'أربع ليال' },
            { en: 'next weekend', ar: 'عطلة نهاية الأسبوع القادمة' },
            { en: 'one week', ar: 'أسبوع كامل' },
          ],
        },
        tags: ['hotel', 'check-in'], d: 1, limit: 6,
      },
      {
        tmpl: 'I would like a {R}, please.', arTmpl: 'أود {R_ar} من فضلك.',
        slots: {
          R: [
            { en: 'double room', ar: 'غرفة مزدوجة' },
            { en: 'single room', ar: 'غرفة مفردة' },
            { en: 'large room', ar: 'غرفة واسعة' },
            { en: 'quiet room', ar: 'غرفة هادئة' },
            { en: 'room with two beds', ar: 'غرفة بسريرين' },
          ],
        },
        tags: ['hotel', 'requests'], d: 1, limit: 5,
      },
      {
        tmpl: 'Is {M} included?', arTmpl: 'هل {M_ar} مشمول؟',
        slots: {
          M: [
            { en: 'breakfast', ar: 'الفطور' },
            { en: 'dinner', ar: 'العشاء' },
            { en: 'internet', ar: 'الإنترنت' },
            { en: 'parking', ar: 'موقف السيارات' },
          ],
        },
        tags: ['hotel', 'questions'], d: 2, limit: 4,
      },
      {
        tmpl: 'My room is on the {N} floor.', arTmpl: 'غرفتي في الطابق {N_ar}.',
        slots: {
          N: [
            { en: 'first', ar: 'الأول' }, { en: 'second', ar: 'الثاني' },
            { en: 'third', ar: 'الثالث' }, { en: 'fourth', ar: 'الرابع' },
            { en: 'fifth', ar: 'الخامس' }, { en: 'sixth', ar: 'السادس' },
          ],
        },
        tags: ['hotel', 'floors'], d: 2, limit: 6,
      },
      {
        tmpl: '{S} {V} a room {T}.', arTmpl: '{S_ar} {V_ar} غرفة {T_ar}.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'My father', ar: 'والدي', agr: 'he' },
            { en: 'We', ar: 'نحن', agr: 'we' }, { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{ en: B.enPast('book'), ar: B.arPast('book', x.S.agr) }],
          T: [
            { en: 'last week', ar: 'الأسبوع الماضي' },
            { en: 'yesterday', ar: 'أمس' },
            { en: 'last month', ar: 'الشهر الماضي' },
            { en: 'on Friday', ar: 'يوم الجمعة' },
          ],
        },
        tags: ['hotel', 'past-simple'], d: 3, limit: 10,
      },
    ],
    fills: [
      { en: 'I have a reservation.', ar: 'لدي حجز.', word: 'reservation', hint: 'حجز' },
      { en: 'A double room for two nights, please.', ar: 'غرفة مزدوجة لليلتين من فضلك.', word: 'double' },
      { en: 'Here is my passport.', ar: 'ها هو جواز سفري.', word: 'Here' },
      { en: 'Your room is on the third floor.', ar: 'غرفتك في الطابق الثالث.', word: 'floor' },
      { en: 'Is breakfast included in the price?', ar: 'هل الفطور مشمول في السعر؟', word: 'included' },
      { en: 'The elevator is next to the reception.', ar: 'المصعد بجانب الاستقبال.', word: 'elevator' },
      { en: 'A double room costs sixty dollars a night.', ar: 'تكلف الغرفة المزدوجة ستين دولارا في الليلة.', word: 'costs' },
      { en: 'I booked a room for my family last week.', ar: 'حجزت غرفة لعائلتي الأسبوع الماضي.', word: 'booked' },
    ],
    orders: [
      { en: 'I have a reservation under the name Ali.', ar: 'لدي حجز باسم علي.' },
      { en: 'Is breakfast included in the price?', ar: 'هل الفطور مشمول في السعر؟' },
      { en: 'Here is my passport and my luggage.', ar: 'ها هو جواز سفري وأمتعتي.' },
      { en: 'My friends are going to arrive at midnight.', ar: 'سيصل أصدقائي في منتصف الليل.' },
      { en: 'How many guests are staying in the room?', ar: 'كم نزيلا يقيمان في الغرفة؟' },
      { en: 'The elevator is small but very fast.', ar: 'المصعد صغير لكنه سريع جدا.' },
    ],
    mc: [
      { question: '"I have a reservation" means:', options: ['لدي حجز', 'ليس لدي حجز', 'ألغيت الحجز', 'أريد حجزا جديدا'], answerIndex: 0, ar: 'ما معنى I have a reservation؟' },
      { question: 'A double room is for:', options: ['two people', 'one person', 'ten people', 'no one'], answerIndex: 0, ar: 'الغرفة المزدوجة تكون لـ:' },
      { question: 'Breakfast is included. So you:', options: ['do not pay for breakfast', 'pay for breakfast twice', 'cook breakfast for the hotel', 'eat in the elevator'], answerIndex: 0, ar: 'الفطور مشمول، إذن أنت:' },
      { question: 'Your room is on the third floor. How do you go up?', options: ['by elevator', 'by plane', 'by train', 'by boat'], answerIndex: 0, ar: 'غرفتك في الطابق الثالث. كيف تصعد؟' },
    ],
  },

  /* ================= lesson 109 — Hotel Requests ================= */
  {
    num: 109,
    tags: ['hotel', 'requests'],
    objectives: [
      'Ask politely for more towels and blankets',
      'Report problems like a broken AC',
      'Order a wake-up call and room service',
    ],
    grammar: {
      explanation: 'Make polite requests at a hotel with "Could I have ...?": "Could I have more towels, please?" and "Could I have a wake-up call at six?". Report problems with the verb work: "The AC does not work" — the staff answer "I will send someone to fix it". Ask for things to be brought with "send up": "Could you send up two bottles of water?". Room service brings food to your room: "Can we order room service?". The past simple reports finished actions: "They fixed the AC in ten minutes".',
      explanationAr: 'اطلب بأدب في الفندق بـ Could I have ...؟ مثل: Could I have more towels, please؟ وCould I have a wake-up call at six؟ وأبلغ عن الأعطال بفعل work: المكيّف لا يعمل — فيجيب الموظفون: سأرسل شخصا لإصلاحه. واطلب إرسال الأشياء إلى الغرفة بـ send up: Could you send up two bottles of water؟ وتوفر خدمة الغرف الطعام في غرفتك: Can we order room service؟ ويروي الماضي البسيط أفعالا منتهية: They fixed the AC in ten minutes.',
      examples: [
        { en: 'Could I have more towels, please?', ar: 'هل يمكنني الحصول على المزيد من المناشف من فضلك؟' },
        { en: 'The AC does not work.', ar: 'المكيّف لا يعمل.' },
        { en: 'Could I have a wake-up call at six?', ar: 'هل يمكنني الحصول على مكالمة إيقاظ في السادسة؟' },
      ],
    },
    vocabulary: [
      { word: 'towel', meaningAr: 'منشفة', example: 'Could I have more towels, please?' },
      { word: 'blanket', meaningAr: 'بطانية', example: 'Do you have an extra blanket?' },
      { word: 'pillow', meaningAr: 'وسادة', example: 'My pillow is not comfortable.', ipa: 'pɪloʊ' },
      { word: 'air conditioning', meaningAr: 'تكييف', example: 'The air conditioning does not work.' },
      { word: 'remote control', meaningAr: 'جهاز التحكم', example: 'The remote control does not work.' },
      { word: 'wake-up call', meaningAr: 'مكالمة إيقاظ', example: 'I asked for a wake-up call at six.' },
      { word: 'room service', meaningAr: 'خدمة الغرف', example: 'Can we order room service?' },
      { word: 'fix', meaningAr: 'يصلح', example: 'They fixed the AC in ten minutes.' },
      { word: 'send', meaningAr: 'يرسل', example: 'I will send someone to fix it.' },
      { word: 'extra', meaningAr: 'إضافي', example: 'Do you have an extra blanket?' },
      { word: 'soap', meaningAr: 'صابون', example: 'Please bring some soap.' },
      { word: 'comfortable', meaningAr: 'مريح', example: 'This bed is very comfortable.' },
    ],
    scenario: [
      { en: 'Could I have more towels, please?', ar: 'هل يمكنني الحصول على المزيد من المناشف من فضلك؟', d: 1 },
      { en: 'Of course. How many towels do you need?', ar: 'بالطبع. كم منشفة تحتاج؟', d: 1 },
      { en: 'Three towels, please.', ar: 'ثلاث مناشف من فضلك.', d: 1 },
      { en: 'The AC does not work in my room.', ar: 'المكيّف لا يعمل في غرفتي.', d: 1 },
      { en: 'I will send someone to fix it.', ar: 'سأرسل شخصا لإصلاحه.', d: 1 },
      { en: 'Could I have a wake-up call at six in the morning?', ar: 'هل يمكنني الحصول على مكالمة إيقاظ في السادسة صباحا؟', d: 2 },
      { en: 'Certainly, a wake-up call at six.', ar: 'بالتأكيد، مكالمة إيقاظ في السادسة.', d: 2 },
      { en: 'Can we order room service?', ar: 'هل يمكننا طلب خدمة الغرف؟', d: 2 },
      { en: 'Yes, here is the menu.', ar: 'نعم، ها هي القائمة.', d: 2 },
      { en: 'The room is too cold at night.', ar: 'الغرفة باردة جدا في الليل.', d: 2 },
      { en: 'Do you have an extra blanket?', ar: 'هل لديك بطانية إضافية؟', d: 2 },
      { en: 'My pillow is not comfortable.', ar: 'وسادتي غير مريحة.', d: 2 },
      { en: 'I asked for clean towels this morning.', ar: 'طلبت مناشف نظيفة هذا الصباح.', d: 3 },
      { en: 'The waiter brought the food to our room.', ar: 'أحضر النادل الطعام إلى غرفتنا.', d: 3 },
      { en: 'Could you send up two bottles of water?', ar: 'هل يمكنك إرسال قارورتين ماء إلى الغرفة؟', d: 3 },
      { en: 'They fixed the AC in ten minutes.', ar: 'أصلحوا المكيّف في عشر دقائق.', d: 3 },
      { en: 'We are going to check out at noon.', ar: 'سنغادر الفندق ظهرا.', d: 3 },
      { en: 'Please do not call after ten.', ar: 'لا تتصل بعد العاشرة من فضلك.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Could we have more {N}, please?', arTmpl: 'هل يمكننا الحصول على المزيد من {N_ar} من فضلك؟',
        slots: {
          N: [
            { en: 'towels', ar: 'المناشف' },
            { en: 'pillows', ar: 'الوسائد' },
            { en: 'blankets', ar: 'البطانيات' },
            { en: 'bottles of water', ar: 'قوارير الماء' },
          ],
        },
        tags: ['hotel', 'polite-requests'], d: 1, limit: 4,
      },
      {
        tmpl: 'The {T} does not work.', arTmpl: '{T_ar} لا يعمل.',
        slots: {
          T: [
            { en: 'AC', ar: 'المكيّف' },
            { en: 'television', ar: 'التلفاز' },
            { en: 'remote control', ar: 'جهاز التحكم' },
            { en: 'door lock', ar: 'قفل الباب' },
            { en: 'lamp', ar: 'المصباح' },
          ],
        },
        tags: ['hotel', 'problems'], d: 1, limit: 5,
      },
      {
        tmpl: 'Could I have a wake-up call at {T}?', arTmpl: 'هل يمكنني الحصول على مكالمة إيقاظ في {T_ar}؟',
        slots: {
          T: [
            { en: 'seven', ar: 'السابعة' },
            { en: 'five thirty', ar: 'الخامسة والنصف' },
            { en: 'six fifteen', ar: 'السادسة وخمس عشرة دقيقة' },
            { en: 'noon', ar: 'ظهرا' },
          ],
        },
        tags: ['hotel', 'wake-up-call'], d: 2, limit: 4,
      },
      {
        tmpl: 'Please send {O} to room {R}.', arTmpl: 'أرسل {O_ar} إلى الغرفة رقم {R_ar} من فضلك.',
        slots: {
          O: [
            { en: 'extra towels', ar: 'مناشف إضافية' },
            { en: 'an extra blanket', ar: 'بطانية إضافية' },
            { en: 'the menu', ar: 'قائمة الطعام' },
            { en: 'two bottles of water', ar: 'قارورتين ماء' },
          ],
          R: [
            { en: '12', ar: '12' }, { en: '15', ar: '15' },
            { en: '20', ar: '20' }, { en: '8', ar: '8' },
          ],
        },
        tags: ['hotel', 'room-service'], d: 2, limit: 8,
      },
      {
        tmpl: '{S} {V} the problem {T}.', arTmpl: '{S_ar} {V_ar} المشكلة {T_ar}.',
        slots: {
          S: [
            { en: 'They', ar: 'هم', agr: 'they' }, { en: 'The worker', ar: 'العامل', agr: 'he' },
            { en: 'She', ar: 'هي', agr: 'she' }, { en: 'We', ar: 'نحن', agr: 'we' },
          ],
          V: (x) => [{
            en: 'fixed',
            ar: { I: 'أصلحت', he: 'أصلح', she: 'أصلحت', we: 'أصلحنا', they: 'أصلحوا' }[x.S.agr],
          }],
          T: [
            { en: 'in ten minutes', ar: 'في عشر دقائق' },
            { en: 'yesterday', ar: 'أمس' },
            { en: 'this morning', ar: 'هذا الصباح' },
            { en: 'quickly', ar: 'بسرعة' },
          ],
        },
        tags: ['hotel', 'past-simple'], d: 3, limit: 10,
      },
    ],
    fills: [
      { en: 'Could I have more towels, please?', ar: 'هل يمكنني الحصول على المزيد من المناشف من فضلك؟', word: 'towels' },
      { en: 'The AC does not work in my room.', ar: 'المكيّف لا يعمل في غرفتي.', word: 'work' },
      { en: 'Could I have a wake-up call at six in the morning?', ar: 'هل يمكنني الحصول على مكالمة إيقاظ في السادسة صباحا؟', word: 'wake-up', hint: 'مكالمة إيقاظ' },
      { en: 'Can we order room service?', ar: 'هل يمكننا طلب خدمة الغرف؟', word: 'service' },
      { en: 'Do you have an extra blanket?', ar: 'هل لديك بطانية إضافية؟', word: 'blanket' },
      { en: 'I asked for clean towels this morning.', ar: 'طلبت مناشف نظيفة هذا الصباح.', word: 'asked' },
      { en: 'The waiter brought the food to our room.', ar: 'أحضر النادل الطعام إلى غرفتنا.', word: 'brought' },
      { en: 'They fixed the AC in ten minutes.', ar: 'أصلحوا المكيّف في عشر دقائق.', word: 'fixed' },
    ],
    orders: [
      { en: 'Could I have more towels, please?', ar: 'هل يمكنني الحصول على المزيد من المناشف من فضلك؟' },
      { en: 'The AC does not work in my room.', ar: 'المكيّف لا يعمل في غرفتي.' },
      { en: 'I will send someone to fix it.', ar: 'سأرسل شخصا لإصلاحه.' },
      { en: 'Could you send up two bottles of water?', ar: 'هل يمكنك إرسال قارورتين ماء إلى الغرفة؟' },
      { en: 'We are going to check out at noon.', ar: 'سنغادر الفندق ظهرا.' },
      { en: 'Please do not call after ten.', ar: 'لا تتصل بعد العاشرة من فضلك.' },
    ],
    mc: [
      { question: 'You want more towels. You say:', options: ['Could I have more towels, please?', 'You give towels now!', 'Towels are me.', 'I am towels.'], answerIndex: 0, ar: 'تريد المزيد من المناشف. تقول:' },
      { question: '"The AC does not work" means:', options: ['المكيّف لا يعمل', 'المكيّف يعمل جيدا', 'المكيّف بارد', 'المكيّف جديد'], answerIndex: 0, ar: 'ما معنى The AC does not work؟' },
      { question: 'A wake-up call is:', options: ['a phone call to wake you', 'a kind of blanket', 'a hotel breakfast', 'a room key'], answerIndex: 0, ar: 'مكالمة الإيقاظ هي:' },
      { question: 'You want food in your room. You call:', options: ['room service', 'the pilot', 'the police', 'the bus driver'], answerIndex: 0, ar: 'تريد طعاما في غرفتك. تتصل بـ:' },
    ],
  },
];
