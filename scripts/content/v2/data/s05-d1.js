/* ============================================================
   v2 section data — s05-d1.js
   Travel & Getting Around · lessons 117–120 (tours, delays,
   children, travel review)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 117 — Guided Tours ================= */
  {
    num: 117,
    tags: ['travel', 'tours'],
    objectives: [
      'Book and join a city tour',
      "Understand the guide's instructions",
      'Ask about meeting points, times and prices',
    ],
    grammar: {
      explanation: 'For tours we use the present simple for fixed plans: "The tour starts at nine" and "The tour lasts two hours". "Last" is a verb for duration: "The meeting lasts one hour". To ask about the meeting point say "Where do we meet?" and answer "We meet at the main square". The guide often gives instructions with the imperative: "Stay with the group" or "Do not use the flash". For permission ask "Can I take photos here?". Prices use "How much does the tour cost?".',
      explanationAr: 'في الجولات نستخدم المضارع البسيط للخطط الثابتة: The tour starts at nine وThe tour lasts two hours. وlast فعل يدل على المدة: The meeting lasts one hour. وللسؤال عن مكان الالتقاء قل Where do we meet؟ والجواب We meet at the main square. ويعطي المرشد التعليمات بصيغة الأمر: Stay with the group أو Do not use the flash. وللإذن اسأل Can I take photos here؟ وللسؤال عن السعر: How much does the tour cost؟',
      examples: [
        { en: 'The tour starts at nine.', ar: 'تبدأ الجولة في التاسعة.' },
        { en: 'Where do we meet? At the main square.', ar: 'أين نلتقي؟ في الساحة الرئيسية.' },
        { en: 'Can I take photos here?', ar: 'هل يمكنني أخذ صور هنا؟' },
      ],
    },
    vocabulary: [
      { word: 'tour', meaningAr: 'جولة سياحية', example: 'The city tour starts at nine.' },
      { word: 'guide', meaningAr: 'مرشد سياحي', example: 'The guide speaks slowly.', ipa: 'ɡaɪd' },
      { word: 'main square', meaningAr: 'الساحة الرئيسية', example: 'We meet at the main square.' },
      { word: 'last', meaningAr: 'يستمر (للمدة)', example: 'The tour lasts two hours.' },
      { word: 'group', meaningAr: 'مجموعة', example: 'Please stay with the group.' },
      { word: 'photo', meaningAr: 'صورة', example: 'Can I take photos here?' },
      { word: 'building', meaningAr: 'مبنى', example: 'This building is very old.' },
      { word: 'old town', meaningAr: 'المدينة القديمة', example: 'We walk through the old town.' },
      { word: 'free', meaningAr: 'مجاني', example: 'The tour is free for children.' },
      { word: 'meeting point', meaningAr: 'نقطة الالتقاء', example: 'The meeting point is the museum gate.' },
      { word: 'history', meaningAr: 'تاريخ', example: 'The guide knows the history of every street.' },
      { word: 'crowded', meaningAr: 'مزدحم', example: 'The square is crowded on Fridays.' },
    ],
    scenario: [
      { en: 'Welcome to the old town tour!', ar: 'أهلا بكم في جولة المدينة القديمة!', d: 1 },
      { en: 'My name is Karim and I am your guide.', ar: 'اسمي كريم وأنا مرشدكم السياحي.', d: 1 },
      { en: 'Where do we meet tomorrow?', ar: 'أين نلتقي غدا؟', d: 1 },
      { en: 'We meet at the main square at nine.', ar: 'نلتقي في الساحة الرئيسية في التاسعة.', d: 1 },
      { en: 'How long does the tour last?', ar: 'كم تستمر الجولة؟', d: 1 },
      { en: 'The tour lasts two hours.', ar: 'تستمر الجولة ساعتين.', d: 1 },
      { en: 'How much does the tour cost?', ar: 'بكم الجولة؟', d: 1 },
      { en: 'Adults pay ten dollars each.', ar: 'يدفع البالغون عشرة دولارات لكل شخص.', d: 1 },
      { en: 'Children do not pay anything.', ar: 'الأطفال لا يدفعون شيئا.', d: 1 },
      { en: 'Please stay with the group.', ar: 'ابقوا مع المجموعة من فضلكم.', d: 1 },
      { en: 'Can I take photos in the museum?', ar: 'هل يمكنني أخذ صور في المتحف؟', d: 2 },
      { en: 'Yes, but do not use the flash.', ar: 'نعم، لكن لا تستخدم الفلاش.', d: 2 },
      { en: 'The guide speaks English and Arabic.', ar: 'المرشد يتكلم الإنجليزية والعربية.', d: 2 },
      { en: 'Does the tour include lunch?', ar: 'هل تشمل الجولة الغداء؟', d: 2 },
      { en: 'No, we eat after the tour.', ar: 'لا، نأكل بعد الجولة.', d: 2 },
      { en: 'We walk through the narrow streets.', ar: 'نتمشى في الأزقة الضيقة.', d: 2 },
      { en: 'This building is two hundred years old.', ar: 'هذا المبنى عمره مئتا عام.', d: 3 },
      { en: 'The square is crowded on Fridays.', ar: 'الساحة مزدحمة أيام الجمعة.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'The tour starts at {T}.', arTmpl: 'تبدأ الجولة في {T_ar}.',
        slots: {
          T: [
            { en: 'nine', ar: 'التاسعة' }, { en: 'ten', ar: 'العاشرة' },
            { en: 'eleven', ar: 'الحادية عشرة' }, { en: 'half past two', ar: 'الثانية والنصف' },
            { en: 'four', ar: 'الرابعة' },
          ],
        },
        tags: ['tours', 'time'], d: 1, limit: 5,
      },
      {
        tmpl: 'The tour lasts {D}.', arTmpl: 'تستمر الجولة {D_ar}.',
        slots: {
          D: [
            { en: 'one hour', ar: 'ساعة واحدة' }, { en: 'three hours', ar: 'ثلاث ساعات' },
            { en: 'four hours', ar: 'أربع ساعات' }, { en: 'ninety minutes', ar: 'تسعين دقيقة' },
            { en: 'the whole morning', ar: 'الصباح كله' },
          ],
        },
        tags: ['tours', 'time'], d: 1, limit: 5,
      },
      {
        tmpl: 'We meet at the {PL} {T}.', arTmpl: 'نلتقي في {PL_ar} {T_ar}.',
        slots: {
          PL: [
            { en: 'main square', ar: 'الساحة الرئيسية' }, { en: 'hotel lobby', ar: 'بهو الفندق' },
            { en: 'museum gate', ar: 'مدخل المتحف' }, { en: 'old gate', ar: 'البوابة القديمة' },
          ],
          T: [
            { en: 'at eight', ar: 'في الثامنة' }, { en: 'at ten', ar: 'في العاشرة' },
            { en: 'in the morning', ar: 'في الصباح' },
          ],
        },
        tags: ['tours', 'meeting-points'], d: 2, limit: 12,
      },
      {
        tmpl: 'The guide speaks {L}.', arTmpl: 'المرشد يتكلم {L_ar}.',
        slots: {
          L: [
            { en: 'English', ar: 'الإنجليزية' }, { en: 'Arabic', ar: 'العربية' },
            { en: 'French', ar: 'الفرنسية' }, { en: 'Spanish', ar: 'الإسبانية' },
            { en: 'German', ar: 'الألمانية' },
          ],
        },
        tags: ['tours', 'languages'], d: 1, limit: 5,
      },
      {
        tmpl: 'Does the tour include {X}?', arTmpl: 'هل تشمل الجولة {X_ar}؟',
        slots: {
          X: [
            { en: 'dinner', ar: 'العشاء' }, { en: 'tickets', ar: 'التذاكر' },
            { en: 'a boat ride', ar: 'جولة بالقارب' }, { en: 'hotel pickup', ar: 'الاستلام من الفندق' },
            { en: 'a short break', ar: 'استراحة قصيرة' },
          ],
        },
        tags: ['tours', 'questions'], d: 2, limit: 5,
      },
      {
        tmpl: 'We walk through the {PL}.', arTmpl: 'نتمشى في {PL_ar}.',
        slots: {
          PL: [
            { en: 'old town', ar: 'المدينة القديمة' }, { en: 'big market', ar: 'السوق الكبير' },
            { en: 'quiet gardens', ar: 'الحدائق الهادئة' }, { en: 'old streets', ar: 'الشوارع القديمة' },
          ],
        },
        tags: ['tours', 'walking'], d: 2, limit: 4,
      },
    ],
    fills: [
      { en: 'The tour lasts two hours.', ar: 'تستمر الجولة ساعتين.', word: 'lasts', hint: 'يستمر' },
      { en: 'We meet at the main square at nine.', ar: 'نلتقي في الساحة الرئيسية في التاسعة.', word: 'square', hint: 'ساحة' },
      { en: 'Please stay with the group.', ar: 'ابقوا مع المجموعة من فضلكم.', word: 'group', hint: 'مجموعة' },
      { en: 'Can I take photos in the museum?', ar: 'هل يمكنني أخذ صور في المتحف؟', word: 'photos' },
      { en: 'The guide speaks English and Arabic.', ar: 'المرشد يتكلم الإنجليزية والعربية.', word: 'guide', hint: 'مرشد' },
      { en: 'Children do not pay anything.', ar: 'الأطفال لا يدفعون شيئا.', word: 'Children' },
      { en: 'This building is two hundred years old.', ar: 'هذا المبنى عمره مئتا عام.', word: 'building', hint: 'مبنى' },
      { en: 'The tour is free for children.', ar: 'الجولة مجانية للأطفال.', word: 'free', hint: 'مجاني' },
    ],
    orders: [
      { en: 'Where do we meet tomorrow?', ar: 'أين نلتقي غدا؟' },
      { en: 'The tour lasts two hours.', ar: 'تستمر الجولة ساعتين.' },
      { en: 'How much does the tour cost?', ar: 'بكم الجولة؟' },
      { en: 'Please stay with the group.', ar: 'ابقوا مع المجموعة من فضلكم.' },
      { en: 'This building is two hundred years old.', ar: 'هذا المبنى عمره مئتا عام.' },
      { en: 'The square is crowded on Fridays.', ar: 'الساحة مزدحمة أيام الجمعة.' },
    ],
    mc: [
      { question: 'Where does the tour start?', options: ['At the main square', 'At the airport', 'In the hotel room', 'At the gas station'], answerIndex: 0, ar: 'أين تبدأ الجولة؟' },
      { question: '"The tour lasts two hours" means:', options: ['تستمر الجولة ساعتين', 'تبدأ الجولة في الثانية', 'الجولة بالساعة', 'الجولة في اليوم الثاني'], answerIndex: 0, ar: 'ما معنى The tour lasts two hours؟' },
      { question: 'Who explains the history of the places?', options: ['The guide', 'The driver', 'The waiter', 'The pharmacist'], answerIndex: 0, ar: 'من يشرح تاريخ الأماكن؟' },
      { question: 'You want a picture of the building. You ask:', options: ['Can I take photos here?', 'Can I pay here?', 'Can I park here?', 'Can I sit here?'], answerIndex: 0, ar: 'تريد صورة للمبنى، فتسأل:' },
    ],
  },

  /* ================= lesson 118 — Flight Delays and Cancellations ================= */
  {
    num: 118,
    tags: ['travel', 'air-travel', 'delays'],
    objectives: [
      'Understand delay and cancellation announcements',
      'Ask the airline to rebook a flight',
      'Talk about vouchers, refunds and compensation',
    ],
    grammar: {
      explanation: 'Use the present perfect for flight news: "Flight 224 has been delayed" and "They have not made any announcement yet". The past simple reports what happened: "The airline canceled my flight last night". Use modals for solutions: "Could you rebook me on another flight, please?", "You should ask for a refund". If-clauses describe results: "If our flight is canceled, we will get a hotel voucher". Rebook means to get a new seat on another flight.',
      explanationAr: 'نستخدم المضارع التام لأخبار الرحلات: Flight 224 has been delayed وThey have not made any announcement yet. ويُستخدم الماضي البسيط للحدث: The airline canceled my flight last night. ونستخدم الأفعال الناقصة للحلول: Could you rebook me on another flight, please؟ وYou should ask for a refund. وجمل الشرط تبني النتائج: If our flight is canceled, we will get a hotel voucher. ومعنى rebook إعادة الحجز على رحلة أخرى.',
      examples: [
        { en: 'Flight 224 has been delayed for two hours.', ar: 'الرحلة 224 تأخرت ساعتين.' },
        { en: 'Could you rebook me on another flight, please?', ar: 'هل تعيد حجزي على رحلة أخرى من فضلك؟' },
        { en: 'If our flight is canceled, we will get a hotel voucher.', ar: 'إذا ألغيت رحلتنا، سنحصل على قسيمة فندق.' },
      ],
    },
    vocabulary: [
      { word: 'delayed', meaningAr: 'متأخر (عن الرحلات)', example: 'Flight 224 is delayed.' },
      { word: 'canceled', meaningAr: 'ملغاة', example: 'The evening flight was canceled.' },
      { word: 'airline', meaningAr: 'شركة طيران', example: 'Which airline are you flying with?' },
      { word: 'voucher', meaningAr: 'قسيمة تعويض', example: 'They gave us a hotel voucher.', ipa: 'ˈvaʊtʃər' },
      { word: 'rebook', meaningAr: 'يعيد الحجز', example: 'They rebooked us on the evening flight.' },
      { word: 'refund', meaningAr: 'استرداد المبلغ', example: 'I asked for a full refund.' },
      { word: 'announcement', meaningAr: 'إعلان (تنبيه)', example: 'Listen to the announcement.' },
      { word: 'departure board', meaningAr: 'لوحة المغادرة', example: 'Check the departure board.' },
      { word: 'gate', meaningAr: 'بوابة (المطار)', example: 'Our new gate is B12.' },
      { word: 'connection', meaningAr: 'رحلة ترابطية', example: 'We have a short connection in Cairo.' },
      { word: 'compensation', meaningAr: 'تعويض', example: 'The airline offered small compensation.' },
      { word: 'apologize', meaningAr: 'يعتذر', example: 'The airline apologized for the delay.' },
    ],
    scenario: [
      { en: 'Flight 224 has been delayed for two hours.', ar: 'الرحلة 224 تأخرت ساعتين.', d: 1 },
      { en: 'Why has it been delayed?', ar: 'لماذا تأخرت؟', d: 1 },
      { en: 'There is a storm over the mountains.', ar: 'هناك عاصفة فوق الجبال.', d: 1 },
      { en: 'They have not made any announcement yet.', ar: 'لم يعلنوا أي إعلان بعد.', d: 2 },
      { en: 'Has our flight been canceled?', ar: 'هل ألغيت رحلتنا؟', d: 1 },
      { en: 'No, it is only delayed, madam.', ar: 'لا، إنها متأخرة فقط يا سيدتي.', d: 1 },
      { en: 'If the flight is canceled, will we get a hotel voucher?', ar: 'إذا ألغيت الرحلة، هل سنحصل على قسيمة فندق؟', d: 2 },
      { en: 'The airline canceled my flight to Rome.', ar: 'ألغت شركة الطيران رحلتي إلى روما.', d: 2 },
      { en: 'Could you rebook me on another flight, please?', ar: 'هل تعيد حجزي على رحلة أخرى من فضلك؟', d: 2 },
      { en: 'Certainly, the next flight leaves at six tomorrow morning.', ar: 'بالتأكيد، الرحلة القادمة تغادر في السادسة صباح الغد.', d: 2 },
      { en: 'I cannot find gate B12 on this board.', ar: 'لا أجد البوابة B12 على هذه اللوحة.', d: 2 },
      { en: 'The gate has changed; listen to the announcement.', ar: 'البوابة تغيرت؛ استمع إلى الإعلان.', d: 2 },
      { en: 'I have not received any compensation yet.', ar: 'لم أستلم أي تعويض بعد.', d: 3 },
      { en: 'The airline should offer you a refund or a voucher.', ar: 'ينبغي لشركة الطيران أن تمنحك استردادا أو قسيمة.', d: 3 },
      { en: 'We will miss our connection in Cairo.', ar: 'سيفوتنا رحلة الترابط في القاهرة.', d: 3 },
      { en: 'Do not worry; they will rebook us for free.', ar: 'لا تقلق؛ سيعيدون حجزنا مجانا.', d: 3 },
      { en: 'This airline has delayed my flights three times this month.', ar: 'أجلت هذه الشركة رحلاتي ثلاث مرات هذا الشهر.', d: 3 },
      { en: 'Have you checked the departure board?', ar: 'هل فحصت لوحة المغادرة؟', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'The flight to {C} has been delayed.', arTmpl: 'الرحلة إلى {C_ar} متأخرة.',
        slots: { C: B.pick(B.CITIES, 0, 6) },
        tags: ['air-travel', 'delays', 'present-perfect'], d: 2, limit: 6,
      },
      {
        tmpl: '{S} {V} {O} {T}.', arTmpl: '{S_ar} {V_ar} {O_ar} {T_ar}.',
        slots: {
          S: [
            { en: 'The airline', ar: 'شركة الطيران', agr: 'she' },
            { en: 'The agent', ar: 'الموظفة', agr: 'she' },
            { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => (x.S.agr === 'they'
            ? [ { en: 'canceled', ar: 'ألغوا' }, { en: 'delayed', ar: 'أجّلوا' } ]
            : [ { en: 'canceled', ar: 'ألغت' }, { en: 'delayed', ar: 'أجّلت' } ]),
          O: [
            { en: 'my flight', ar: 'رحلتي' }, { en: 'our flight', ar: 'رحلتنا' },
            { en: 'the evening flight', ar: 'رحلة المساء' }, { en: 'two flights', ar: 'رحلتين' },
          ],
          T: [
            { en: 'this morning', ar: 'هذا الصباح' }, { en: 'last night', ar: 'الليلة الماضية' },
            { en: 'yesterday', ar: 'أمس' },
          ],
        },
        tags: ['air-travel', 'past-simple'], d: 2, limit: 12,
      },
      {
        tmpl: 'If our flight is canceled, {R}.', arTmpl: 'إذا ألغيت رحلتنا، {R_ar}.',
        slots: {
          R: [
            { en: 'we will get a hotel voucher', ar: 'سنحصل على قسيمة فندق' },
            { en: 'they will rebook us for free', ar: 'سيعيدون حجزنا مجانا' },
            { en: 'we will fly tomorrow morning', ar: 'سنطير صباح الغد' },
            { en: 'the airline will pay for our meals', ar: 'ستدفع شركة الطيران ثمن وجباتنا' },
          ],
        },
        tags: ['air-travel', 'if-clauses'], d: 3, limit: 4,
      },
      {
        tmpl: 'Have you {V} the {N}?', arTmpl: 'هل {V_ar} {N_ar}؟',
        slots: {
          V: [
            { en: 'checked', ar: 'فحصت' }, { en: 'received', ar: 'استلمت' },
            { en: 'heard', ar: 'سمعت' },
          ],
          N: [
            { en: 'announcement', ar: 'الإعلان' }, { en: 'new gate number', ar: 'رقم البوابة الجديد' },
            { en: 'text message', ar: 'الرسالة النصية' }, { en: 'refund', ar: 'المبلغ المسترد' },
            { en: 'voucher', ar: 'القسيمة' },
          ],
        },
        tags: ['air-travel', 'present-perfect', 'questions'], d: 2, limit: 10,
      },
      {
        tmpl: 'Could you rebook me on the {FL}?', arTmpl: 'هل تعيد حجزي على {FL_ar}؟',
        slots: {
          FL: [
            { en: 'next flight', ar: 'الرحلة القادمة' }, { en: 'morning flight', ar: 'رحلة الصباح' },
            { en: 'evening flight', ar: 'رحلة المساء' }, { en: 'first flight', ar: 'أول رحلة' },
            { en: 'last flight', ar: 'آخر رحلة' },
          ],
        },
        tags: ['air-travel', 'polite-requests'], d: 2, limit: 5,
      },
    ],
    fills: [
      { en: 'Flight 224 has been delayed for two hours.', ar: 'الرحلة 224 تأخرت ساعتين.', word: 'delayed', hint: 'متأخرة' },
      { en: 'The airline canceled my flight to Rome.', ar: 'ألغت شركة الطيران رحلتي إلى روما.', word: 'canceled', hint: 'ألغت' },
      { en: 'If the flight is canceled, will we get a hotel voucher?', ar: 'إذا ألغيت الرحلة، هل سنحصل على قسيمة فندق؟', word: 'voucher', hint: 'قسيمة' },
      { en: 'Could you rebook me on another flight, please?', ar: 'هل تعيد حجزي على رحلة أخرى من فضلك؟', word: 'rebook', hint: 'إعادة الحجز' },
      { en: 'The airline should offer you a refund or a voucher.', ar: 'ينبغي لشركة الطيران أن تمنحك استردادا أو قسيمة.', word: 'refund', hint: 'استرداد' },
      { en: 'The gate has changed; listen to the announcement.', ar: 'البوابة تغيرت؛ استمع إلى الإعلان.', word: 'announcement', hint: 'إعلان' },
      { en: 'We will miss our connection in Cairo.', ar: 'سيفوتنا رحلة الترابط في القاهرة.', word: 'connection', hint: 'رحلة ترابطية' },
      { en: 'This airline has delayed my flights three times this month.', ar: 'أجلت هذه الشركة رحلاتي ثلاث مرات هذا الشهر.', word: 'flights', hint: 'رحلات' },
    ],
    orders: [
      { en: 'Flight 224 has been delayed for two hours.', ar: 'الرحلة 224 تأخرت ساعتين.' },
      { en: 'Has our flight been canceled?', ar: 'هل ألغيت رحلتنا؟' },
      { en: 'Could you rebook me on another flight, please?', ar: 'هل تعيد حجزي على رحلة أخرى من فضلك؟' },
      { en: 'The airline should offer you a refund or a voucher.', ar: 'ينبغي لشركة الطيران أن تمنحك استردادا أو قسيمة.' },
      { en: 'We will miss our connection in Cairo.', ar: 'سيفوتنا رحلة الترابط في القاهرة.' },
      { en: 'I have not received any compensation yet.', ar: 'لم أستلم أي تعويض بعد.' },
    ],
    mc: [
      { question: 'Your flight is late. On the departure board you read:', options: ['Delayed', 'Boarding', 'Arrived', 'Rebooked'], answerIndex: 0, ar: 'رحلتك متأخرة، فماذا تقرأ على لوحة المغادرة؟' },
      { question: 'The airline canceled your flight. What can you ask for?', options: ['A voucher or a refund', 'A new passport', 'A parking ticket', 'A kids meal'], answerIndex: 0, ar: 'ألغت الشركة رحلتك، بماذا يمكن أن تطلب؟' },
      { question: '"They rebooked us on the next flight" means:', options: ['حجزوا لنا على الرحلة القادمة', 'ألغوا رحلتنا نهائيا', 'أعطونا تذكرة حافلة', 'أرجعوا لنا أموالنا'], answerIndex: 0, ar: 'ما معنى They rebooked us on the next flight؟' },
      { question: 'Where do you look for your gate number?', options: ['On the departure board', 'On the menu', 'In the hotel lobby', 'On the price tag'], answerIndex: 0, ar: 'أين تبحث عن رقم بوابتك؟' },
      { question: 'Choose the correct sentence:', options: ['Flight 224 has been delayed.', 'Flight 224 have been delayed.', 'Flight 224 has been delay.', 'Flight 224 is delay.'], answerIndex: 0, ar: 'اختر الجملة الصحيحة.' },
    ],
  },

  /* ================= lesson 119 — Traveling with Children ================= */
  {
    num: 119,
    tags: ['travel', 'family', 'children'],
    objectives: [
      'Keep children comfortable on a trip',
      'Order food and ask about family rooms',
      'Answer the question "Are we there yet?"',
    ],
    grammar: {
      explanation: 'When you travel with children, use "can" to ask for things for them: "Can we order a kids\' meal?". Keep someone busy with "keep + object + adjective": "Give them a snack to keep them busy". Use the present simple for routines and states: "The baby sleeps in the back seat". Negative commands warn: "Do not wake him up". "Yet" in "Are we there yet?" asks if something has happened up to now; answer "Not yet".',
      explanationAr: 'عند السفر مع الأطفال استخدم can لطلب الأشياء لهم: Can we order a kids\' meal؟ ولإبقاء شخص منشغلا استخدم keep مع المفعول والصفة: Give them a snack to keep them busy. ويُستخدم المضارع البسيط للعادات والحالات: The baby sleeps in the back seat. وينذر النهي السلبي: Do not wake him up. وكلمة yet في Are we there yet؟ تسأل هل حدث الأمر حتى الآن، والجواب Not yet.',
      examples: [
        { en: 'Are we there yet? Not yet.', ar: 'هل وصلنا بعد؟ ليس بعد.' },
        { en: 'Give them a snack to keep them busy.', ar: 'أعطهم وجبة خفيفة لتبقيهم منشغلين.' },
        { en: 'The baby sleeps in the back seat.', ar: 'الطفل ينام في المقعد الخلفي.' },
      ],
    },
    vocabulary: [
      { word: 'stroller', meaningAr: 'عربة أطفال', example: 'The baby sits in the stroller.', ipa: 'ˈstroʊlər' },
      { word: "kids' meal", meaningAr: 'وجبة أطفال', example: "Can we order a kids' meal?" },
      { word: 'family room', meaningAr: 'غرفة عائلية', example: 'Is there a family room in the hotel?' },
      { word: 'snack', meaningAr: 'وجبة خفيفة', example: 'The children want a small snack.' },
      { word: 'toy', meaningAr: 'لعبة', example: 'The meal comes with a small toy.' },
      { word: 'nap', meaningAr: 'قيلولة', example: 'The baby needs a nap.' },
      { word: 'bored', meaningAr: 'يشعر بالملل', example: 'The kids are bored on the plane.' },
      { word: 'excited', meaningAr: 'متحمس', example: 'The children are excited about the trip.' },
      { word: 'busy', meaningAr: 'منشغل', example: 'Give them a snack to keep them busy.' },
      { word: 'seat belt', meaningAr: 'حزام الأمان', example: 'Keep your seat belt on, please.' },
      { word: 'back seat', meaningAr: 'المقعد الخلفي', example: 'The baby sleeps in the back seat.' },
      { word: 'thirsty', meaningAr: 'عطشان', example: 'The children are thirsty after the walk.' },
    ],
    scenario: [
      { en: 'We are traveling with two children.', ar: 'نسافر مع طفلين.', d: 1 },
      { en: 'My son is five and my daughter is three.', ar: 'ابني عمره خمس سنوات وابنتي ثلاث.', d: 1 },
      { en: 'Are we there yet?', ar: 'هل وصلنا بعد؟', d: 1 },
      { en: 'Not yet; we arrive in one hour.', ar: 'ليس بعد؛ سنصل بعد ساعة.', d: 1 },
      { en: 'Please push the stroller slowly.', ar: 'ادفع عربة الأطفال ببطء من فضلك.', d: 1 },
      { en: 'The stroller is in the trunk.', ar: 'عربة الأطفال في صندوق السيارة.', d: 1 },
      { en: "Can we order a kids' meal, please?", ar: 'هل يمكننا طلب وجبة أطفال من فضلك؟', d: 1 },
      { en: 'Yes, it comes with a small toy.', ar: 'نعم، تأتي مع لعبة صغيرة.', d: 1 },
      { en: 'The children are bored in the car.', ar: 'الأطفال يشعرون بالملل في السيارة.', d: 2 },
      { en: 'Give them a snack to keep them busy.', ar: 'أعطهم وجبة خفيفة لتبقيهم منشغلين.', d: 2 },
      { en: 'The baby sleeps in the back seat.', ar: 'الطفل ينام في المقعد الخلفي.', d: 2 },
      { en: 'Do not wake him up.', ar: 'لا توقظه.', d: 2 },
      { en: 'Is there a family room in the hotel?', ar: 'هل توجد غرفة عائلية في الفندق؟', d: 2 },
      { en: 'Yes, our family room has two big beds.', ar: 'نعم، غرفتنا العائلية بها سريران كبيران.', d: 2 },
      { en: 'My daughter does not eat her food.', ar: 'ابنتي لا تأكل طعامها.', d: 3 },
      { en: 'She is tired; she needs a nap.', ar: 'هي متعبة؛ تحتاج إلى قيلولة.', d: 3 },
      { en: 'Keep your seat belt on, please.', ar: 'ابقِ حزام الأمان مثبتا من فضلك.', d: 3 },
      { en: 'The children are very excited today.', ar: 'الأطفال متحمسون جدا اليوم.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'The children are {ADJ} today.', arTmpl: 'الأطفال {ADJ_ar} اليوم.',
        slots: {
          ADJ: [
            { en: 'bored', ar: 'يشعرون بالملل' }, { en: 'excited', ar: 'متحمسون' },
            { en: 'tired', ar: 'متعبون' }, { en: 'hungry', ar: 'جائعون' },
            { en: 'sleepy', ar: 'نعسانون' }, { en: 'thirsty', ar: 'عطاش' },
          ],
        },
        tags: ['children', 'feelings'], d: 1, limit: 6,
      },
      {
        tmpl: 'Can we order {F} for the children?', arTmpl: 'هل يمكننا طلب {F_ar} للأطفال؟',
        slots: {
          F: [
            { en: 'two glasses of juice', ar: 'كوبين من العصير' }, { en: 'a small pizza', ar: 'بيتزا صغيرة' },
            { en: 'some fruit', ar: 'فاكهة' }, { en: 'a cheese sandwich', ar: 'شطيرة جبن' },
            { en: 'warm milk', ar: 'حليبا دافئا' },
          ],
        },
        tags: ['children', 'food', 'polite-requests'], d: 2, limit: 5,
      },
      {
        tmpl: 'My {K} {V} {T}.', arTmpl: '{K_ar} {V_ar} {T_ar}.',
        slots: {
          K: [
            { en: 'son', ar: 'ابني', agr: 'he' }, { en: 'daughter', ar: 'ابنتي', agr: 'she' },
            { en: 'baby', ar: 'طفلي', agr: 'he' },
          ],
          V: (x) => [
            { en: B.enPresent('sleep', x.K.agr), ar: B.arPresent('sleep', x.K.agr) },
            { en: B.enPresent('sit', x.K.agr), ar: B.arPresent('sit', x.K.agr) },
          ],
          T: [
            { en: 'in the back seat', ar: 'في المقعد الخلفي' }, { en: 'in the stroller', ar: 'في عربة الأطفال' },
            { en: 'in the family room', ar: 'في الغرفة العائلية' }, { en: 'on the plane', ar: 'في الطائرة' },
          ],
        },
        tags: ['children', 'present-simple'], d: 2, limit: 12,
      },
      {
        tmpl: 'We need {N} for the children.', arTmpl: 'نحتاج {N_ar} للأطفال.',
        slots: {
          N: [
            { en: 'a warm blanket', ar: 'بطانية دافئة' }, { en: 'a small pillow', ar: 'وسادة صغيرة' },
            { en: 'a baby cot', ar: 'سرير أطفال' }, { en: 'a bigger stroller', ar: 'عربة أطفال أكبر' },
            { en: 'a quiet room', ar: 'غرفة هادئة' },
          ],
        },
        tags: ['children', 'hotels'], d: 2, limit: 5,
      },
      {
        tmpl: 'Is there a {N} in the hotel?', arTmpl: 'هل يوجد {N_ar} في الفندق؟',
        slots: {
          N: [
            { en: 'playground', ar: 'ملعب أطفال' }, { en: 'kids club', ar: 'نادي أطفال' },
            { en: 'swimming pool', ar: 'مسبح' }, { en: 'family restaurant', ar: 'مطعم عائلي' },
          ],
        },
        tags: ['children', 'hotels', 'questions'], d: 2, limit: 4,
      },
      {
        tmpl: 'The kids love the {N}.', arTmpl: 'الأطفال يحبون {N_ar}.',
        slots: {
          N: [
            { en: 'swimming pool', ar: 'المسبح' }, { en: 'toy shop', ar: 'متجر الألعاب' },
            { en: 'ice cream shop', ar: 'محل الآيس كريم' }, { en: 'big playground', ar: 'الملعب الكبير' },
          ],
        },
        tags: ['children'], d: 1, limit: 4,
      },
    ],
    fills: [
      { en: 'Are we there yet?', ar: 'هل وصلنا بعد؟', word: 'yet', hint: 'بعد' },
      { en: 'Please push the stroller slowly.', ar: 'ادفع عربة الأطفال ببطء من فضلك.', word: 'stroller', hint: 'عربة أطفال' },
      { en: 'Yes, it comes with a small toy.', ar: 'نعم، تأتي مع لعبة صغيرة.', word: 'toy' },
      { en: 'Give them a snack to keep them busy.', ar: 'أعطهم وجبة خفيفة لتبقيهم منشغلين.', word: 'busy', hint: 'منشغل' },
      { en: 'The baby sleeps in the back seat.', ar: 'الطفل ينام في المقعد الخلفي.', word: 'seat', hint: 'مقعد' },
      { en: 'She is tired; she needs a nap.', ar: 'هي متعبة؛ تحتاج إلى قيلولة.', word: 'nap', hint: 'قيلولة' },
      { en: 'Keep your seat belt on, please.', ar: 'ابقِ حزام الأمان مثبتا من فضلك.', word: 'belt' },
      { en: 'The children are very excited today.', ar: 'الأطفال متحمسون جدا اليوم.', word: 'excited' },
    ],
    orders: [
      { en: 'Are we there yet?', ar: 'هل وصلنا بعد؟' },
      { en: 'Please push the stroller slowly.', ar: 'ادفع عربة الأطفال ببطء من فضلك.' },
      { en: 'The baby sleeps in the back seat.', ar: 'الطفل ينام في المقعد الخلفي.' },
      { en: 'Give them a snack to keep them busy.', ar: 'أعطهم وجبة خفيفة لتبقيهم منشغلين.' },
      { en: 'Is there a family room in the hotel?', ar: 'هل توجد غرفة عائلية في الفندق؟' },
      { en: 'The children are very excited today.', ar: 'الأطفال متحمسون جدا اليوم.' },
    ],
    mc: [
      { question: 'Where does the baby sit in the car?', options: ['In the back seat', 'On the roof', 'In the trunk', 'On the floor'], answerIndex: 0, ar: 'أين يجلس الطفل في السيارة؟' },
      { question: 'The kids are bored. What do you give them?', options: ['A snack or a toy', 'A parking ticket', 'A hotel voucher', 'A boarding pass'], answerIndex: 0, ar: 'الأطفال يشعرون بالملل، بماذا تمنحهم؟' },
      { question: '"Are we there yet?" means:', options: ['هل وصلنا بعد؟', 'أين نلتقي؟', 'كم تبقى الجولة؟', 'هل نتأخر؟'], answerIndex: 0, ar: 'ما معنى Are we there yet؟' },
      { question: 'Which room is good for a family of four?', options: ['A family room', 'A single room', 'A meeting room', 'A storage room'], answerIndex: 0, ar: 'أي غرفة تناسب عائلة من أربعة أفراد؟' },
    ],
  },

  /* ================= lesson 120 — Travel Review (review) ================= */
  {
    num: 120,
    tags: ['review', 'travel'],
    objectives: [
      'Review transport, airport and hotel language',
      'Use the past simple and the present perfect about trips',
      'Get help abroad: currency, customs and the embassy',
    ],
    grammar: {
      explanation: 'This lesson reviews Section 5. Use the past simple for finished actions on a trip: "We took a taxi to the hotel". Use the present perfect for experiences without a fixed time: "I have visited six countries". Use "can" for requests and possibilities, "should" for advice, and "must not" for strong prohibition: "You must not park here". If-clauses talk about problems and plans: "If your passport is lost abroad, go to the embassy first".',
      explanationAr: 'يراجع هذا الدرس قسم التنقل والسفر. استخدم الماضي البسيط لأفعال انتهت في الرحلة: We took a taxi to the hotel. واستخدم المضارع التام للتجارب دون زمن محدد: I have visited six countries. واستخدم can للطلبات والإمكانات وshould للنصيحة وmust not للمنع القوي: You must not park here. وجمل الشرط تتحدث عن المشكلات والخطط: If your passport is lost abroad, go to the embassy first.',
      examples: [
        { en: 'I have visited six countries since I started working.', ar: 'زرت ستة دول منذ أن بدأت العمل.' },
        { en: 'If you take the metro, you will avoid the traffic.', ar: 'إذا أخذت المترو، ستتجنب الازدحام.' },
        { en: 'Where can I exchange money?', ar: 'أين يمكنني صرف النقود؟' },
      ],
    },
    vocabulary: [
      { word: 'journey', meaningAr: 'رحلة (طويلة)', example: 'The journey took five hours.' },
      { word: 'abroad', meaningAr: 'في الخارج', example: 'Have you ever traveled abroad?' },
      { word: 'currency', meaningAr: 'عملة', example: 'Can you change dollars into the local currency?' },
      { word: 'customs', meaningAr: 'الجمارك', example: 'At customs, the officer asked about my camera.' },
      { word: 'insurance', meaningAr: 'تأمين سفر', example: 'You should buy travel insurance.' },
      { word: 'attraction', meaningAr: 'معلم سياحي', example: 'The museum is the most famous attraction here.' },
      { word: 'souvenir', meaningAr: 'هدية تذكارية', example: 'I bought a small souvenir for my sister.' },
      { word: 'round trip', meaningAr: 'ذهاب وعودة', example: 'A round trip ticket is cheaper.' },
      { word: 'timetable', meaningAr: 'جدول المواعيد', example: 'Check the timetable before you go.' },
      { word: 'directions', meaningAr: 'اتجاهات', example: 'The police gave us clear directions.' },
      { word: 'embassy', meaningAr: 'سفارة', example: 'Go to the embassy if you lose your passport.' },
      { word: 'sightseeing', meaningAr: 'مشاهدة المعالم', example: 'We spent the day sightseeing.' },
    ],
    scenario: [
      { en: 'I have visited six countries since I started working.', ar: 'زرت ستة دول منذ أن بدأت العمل.', d: 1 },
      { en: 'If you take the metro, you will avoid the traffic.', ar: 'إذا أخذت المترو، ستتجنب الازدحام.', d: 2 },
      { en: 'We walked through the old market and took many photos.', ar: 'تمشينا في السوق القديم وأخذنا صورا كثيرة.', d: 1 },
      { en: 'You should buy travel insurance before every long trip.', ar: 'ينبغي أن تشتري تأمين سفر قبل كل رحلة طويلة.', d: 2 },
      { en: 'The train leaves from platform seven at noon.', ar: 'يغادر القطار من الرصيف السابع في الظهر.', d: 1 },
      { en: 'I could not sleep on the night train.', ar: 'لم أستطع النوم في قطار الليل.', d: 2 },
      { en: 'Have you ever traveled abroad alone?', ar: 'هل سافرت إلى الخارج وحدك من قبل؟', d: 2 },
      { en: 'Yes, I spent two weeks in Malaysia last summer.', ar: 'نعم، قضيت أسبوعين في ماليزيا الصيف الماضي.', d: 2 },
      { en: 'The taxi driver did not know the hotel, so we used a map.', ar: 'لم يعرف سائق سيارة الأجرة الفندق، فاستخدمنا خريطة.', d: 2 },
      { en: 'Please stop at the next gas station; the tank is almost empty.', ar: 'توقف في محطة الوقود القادمة من فضلك؛ الخزان شبه فارغ.', d: 2 },
      { en: 'You must not park in front of the gate.', ar: 'يجب ألا توقف السيارة أمام البوابة.', d: 2 },
      { en: 'Did security check your bags?', ar: 'هل فحص الأمن حقائبك؟', d: 2 },
      { en: 'Yes, they checked our bags twice at the airport.', ar: 'نعم، فحصوا حقائبنا مرتين في المطار.', d: 2 },
      { en: 'I have already booked a room with a sea view.', ar: 'لقد حجزت غرفة بإطلالة على البحر بالفعل.', d: 2 },
      { en: 'At customs, the officer asked about my camera.', ar: 'في الجمارك سأل الموظف عن كاميرتي.', d: 3 },
      { en: 'If your passport is lost abroad, go to the embassy first.', ar: 'إذا فُقد جواز سفرك في الخارج، اذهب إلى السفارة أولا.', d: 3 },
      { en: 'Where can I exchange money?', ar: 'أين يمكنني صرف النقود؟', d: 2 },
      { en: 'There is an exchange office near the main square.', ar: 'يوجد مكتب صرف قرب الساحة الرئيسية.', d: 2 },
      { en: 'The museum is the most famous attraction in the city.', ar: 'المتحف أشهر معلم سياحي في المدينة.', d: 3 },
      { en: 'Our flight was delayed, so we arrived after midnight.', ar: 'تأخرت رحلتنا، فوصلنا بعد منتصف الليل.', d: 3 },
      { en: 'The children kept busy with their tablets on the long drive.', ar: 'أبقى الأطفال أنفسهم منشغلين بأجهزتهم في الرحلة الطويلة بالسيارة.', d: 3 },
      { en: 'Boarding starts forty minutes before departure.', ar: 'يبدأ الصعود إلى الطائرة قبل المغادرة بأربعين دقيقة.', d: 3 },
    ],
    patterns: [
      {
        tmpl: '{S} {V} to {C} {T}.', arTmpl: '{S_ar} {V_ar} إلى {C_ar} {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: (x.S.agr === 'he' || x.S.agr === 'she' ? 'has' : 'have') + ' travelled', ar: B.arPast('travel', x.S.agr) }],
          C: B.pick(B.COUNTRIES, 0, 8),
          T: [
            { en: 'this year', ar: 'هذا العام' }, { en: 'last summer', ar: 'الصيف الماضي' },
            { en: 'in 2019', ar: 'في عام 2019' }, { en: 'many times', ar: 'مرات كثيرة' },
          ],
        },
        tags: ['review', 'travel', 'present-perfect'], d: 2, limit: 24,
      },
      {
        tmpl: 'The taxi took us to the {PL}.', arTmpl: 'أخذتنا سيارة الأجرة إلى {PL_ar}.',
        slots: {
          PL: [
            { en: 'airport', ar: 'المطار' }, { en: 'station', ar: 'المحطة' },
            { en: 'hotel', ar: 'الفندق' }, { en: 'harbor', ar: 'الميناء' },
            { en: 'museum', ar: 'المتحف' },
          ],
        },
        tags: ['review', 'travel', 'taxis'], d: 1, limit: 5,
      },
      {
        tmpl: 'The car needs {N} before the long trip.', arTmpl: 'تحتاج السيارة {N_ar} قبل الرحلة الطويلة.',
        slots: {
          N: [
            { en: 'gas', ar: 'بنزين' }, { en: 'a new tire', ar: 'إطارا جديدا' },
            { en: 'an oil change', ar: 'تغيير الزيت' }, { en: 'a good wash', ar: 'غسيلا جيدا' },
          ],
        },
        tags: ['review', 'travel', 'driving'], d: 2, limit: 4,
      },
      {
        tmpl: 'We arrived at the airport {T}.', arTmpl: 'وصلنا إلى المطار {T_ar}.',
        slots: {
          T: [
            { en: 'two hours early', ar: 'قبل الموعد بساعتين' }, { en: 'three hours before the flight', ar: 'قبل الرحلة بثلاث ساعات' },
            { en: 'just in time', ar: 'في الوقت تماما' }, { en: 'at six in the morning', ar: 'في السادسة صباحا' },
          ],
        },
        tags: ['review', 'travel', 'airport'], d: 2, limit: 4,
      },
      {
        tmpl: '{S} {V} a room with {N}.', arTmpl: '{S_ar} {V_ar} غرفة {N_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPast('book'), ar: B.arPast('book', x.S.agr) }],
          N: [
            { en: 'a sea view', ar: 'بإطلالة على البحر' }, { en: 'two big beds', ar: 'بسريرين كبيرين' },
            { en: 'free parking', ar: 'بموقف سيارات مجاني' }, { en: 'breakfast', ar: 'بفطور' },
          ],
        },
        tags: ['review', 'travel', 'hotels'], d: 2, limit: 16,
      },
      {
        tmpl: 'Can I {V} here?', arTmpl: 'هل يمكنني {V_ar} هنا؟',
        slots: {
          V: [
            { en: 'exchange money', ar: 'صرف النقود' }, { en: 'pay by card', ar: 'الدفع بالبطاقة' },
            { en: 'buy a phone card', ar: 'شراء بطاقة هاتف' }, { en: 'book a city tour', ar: 'حجز جولة في المدينة' },
          ],
        },
        tags: ['review', 'travel', 'polite-requests'], d: 2, limit: 4,
      },
      {
        tmpl: 'The guide showed us the {PL}.', arTmpl: 'أرانا المرشد {PL_ar}.',
        slots: {
          PL: [
            { en: 'old mosque', ar: 'الجامع القديم' }, { en: 'city walls', ar: 'أسوار المدينة' },
            { en: 'main square', ar: 'الساحة الرئيسية' }, { en: 'traditional market', ar: 'السوق التقليدي' },
            { en: 'old harbor', ar: 'الميناء القديم' },
          ],
        },
        tags: ['review', 'travel', 'tours'], d: 2, limit: 5,
      },
      {
        tmpl: 'Our {K} {V} during the long journey.', arTmpl: '{K_ar} {V_ar} خلال الرحلة الطويلة.',
        slots: {
          K: [
            { en: 'children', ar: 'أطفالنا', agr: 'they' }, { en: 'son', ar: 'ابننا', agr: 'he' },
            { en: 'daughter', ar: 'ابنتنا', agr: 'she' },
          ],
          V: (x) => (x.K.agr === 'they'
            ? [ { en: 'slept', ar: 'ناموا' }, { en: 'stayed calm', ar: 'بقوا هادئين' } ]
            : x.K.agr === 'he'
              ? [ { en: 'slept', ar: 'نام' }, { en: 'stayed calm', ar: 'بقي هادئا' } ]
              : [ { en: 'slept', ar: 'نامت' }, { en: 'stayed calm', ar: 'بقيت هادئة' } ]),
        },
        tags: ['review', 'travel', 'children'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'I have visited six countries since I started working.', ar: 'زرت ستة دول منذ أن بدأت العمل.', word: 'visited', hint: 'زار' },
      { en: 'You should buy travel insurance before every long trip.', ar: 'ينبغي أن تشتري تأمين سفر قبل كل رحلة طويلة.', word: 'insurance', hint: 'تأمين' },
      { en: 'At customs, the officer asked about my camera.', ar: 'في الجمارك سأل الموظف عن كاميرتي.', word: 'customs', hint: 'الجمارك' },
      { en: 'Go to the embassy if you lose your passport.', ar: 'اذهب إلى السفارة إذا فقدت جواز سفرك.', word: 'embassy', hint: 'سفارة' },
      { en: 'Check the timetable before you go to the station.', ar: 'انظر إلى جدول المواعيد قبل ذهابك إلى المحطة.', word: 'timetable', hint: 'جدول المواعيد' },
      { en: 'I bought a small souvenir for my sister.', ar: 'اشتريت هدية تذكارية صغيرة لأختي.', word: 'souvenir' },
      { en: 'A round trip ticket is cheaper than two singles.', ar: 'تذكرة الذهاب والعودة أرخص من تذكرتين للذهاب.', word: 'round', hint: 'ذهاب وعودة' },
      { en: 'Can you change dollars into the local currency?', ar: 'هل يمكنك تحويل الدولارات إلى العملة المحلية؟', word: 'currency', hint: 'عملة' },
      { en: 'The police gave us clear directions.', ar: 'أعطتنا الشرطة اتجاهات واضحة.', word: 'directions', hint: 'اتجاهات' },
    ],
    orders: [
      { en: 'Have you ever traveled abroad alone?', ar: 'هل سافرت إلى الخارج وحدك من قبل؟' },
      { en: 'Our flight was delayed, so we arrived after midnight.', ar: 'تأخرت رحلتنا، فوصلنا بعد منتصف الليل.' },
      { en: 'Where can I exchange money?', ar: 'أين يمكنني صرف النقود؟' },
      { en: 'You must not park in front of the gate.', ar: 'يجب ألا توقف السيارة أمام البوابة.' },
      { en: 'The museum is the most famous attraction in the city.', ar: 'المتحف أشهر معلم سياحي في المدينة.' },
      { en: 'Boarding starts forty minutes before departure.', ar: 'يبدأ الصعود إلى الطائرة قبل المغادرة بأربعين دقيقة.' },
    ],
    mc: [
      { question: 'Which document do you show at passport control?', options: ['A passport', 'A menu', 'A library card', 'A shopping list'], answerIndex: 0, ar: 'أي وثيقة تُبرز في جوازات المرور؟' },
      { question: '"The flight has been delayed" means:', options: ['الرحلة تأخرت', 'الرحلة ألغيت', 'الرحلة وصلت', 'الرحلة غادرت'], answerIndex: 0, ar: 'ما معنى The flight has been delayed؟' },
      { question: 'Where do you board the plane?', options: ['At the gate', 'At the gas station', 'In the hotel lobby', 'At the pharmacy'], answerIndex: 0, ar: 'أين تصعد إلى الطائرة؟' },
      { question: 'You want to change money. You look for:', options: ['An exchange office', 'A parking lot', 'A playground', 'A luggage cart'], answerIndex: 0, ar: 'تريد صرف النقود، فتبحث عن:' },
      { question: 'What is travel insurance for?', options: ['Help and money back if something goes wrong on a trip', 'A cheaper hotel breakfast', 'Faster boarding at the gate', 'A bigger suitcase'], answerIndex: 0, ar: 'ما الغرض من تأمين السفر؟' },
    ],
  },
];
