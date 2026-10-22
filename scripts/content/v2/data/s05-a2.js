/* ============================================================
   v2 section data — s05-a2.js
   Mobility & Travel · lessons 100–102 (A2)
   100 At the Gas Station · 101 Parking a Car · 102 Traffic Police
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 100 — At the Gas Station ================= */
  {
    num: 100,
    tags: ['gas-station', 'fuel', 'car'],
    objectives: [
      'Ask for fuel and a full tank',
      'Ask about prices and pay for fuel',
      'Use gas station services like air and cleaning',
    ],
    grammar: {
      explanation: 'At the gas station, use the imperative with "please" to ask for services: "Fill the tank, please", "Add air to the tires". Ask about prices with "How much is a liter of petrol?". Use the past simple for finished actions: "I paid for the fuel inside yesterday". Use "will" for future actions: "I will fill the tank after work". Say "empty" when the tank has no fuel and "full" when it is complete.',
      explanationAr: 'في محطة الوقود استخدم صيغة الأمر مع please لطلب الخدمات: Fill the tank, please وAdd air to the tires. واسأل عن الأسعار بـ How much is a liter of petrol؟ واستخدم الماضي البسيط للأعمال المنتهية: I paid for the fuel inside yesterday. واستخدم will للمستقبل: I will fill the tank after work. وقل empty إذا كان الخزان فارغا وfull إذا كان ممتلئا.',
      examples: [
        { en: 'Fill the tank, please.', ar: 'املأ الخزان من فضلك.' },
        { en: 'How much is a liter of petrol?', ar: 'كم يساوي لتر البنزين؟' },
        { en: 'I paid for the fuel inside yesterday.', ar: 'دفعت ثمن الوقود في الداخل أمس.' },
      ],
    },
    vocabulary: [
      { word: 'gas station', meaningAr: 'محطة وقود', example: 'The gas station is near the bridge.' },
      { word: 'fuel', meaningAr: 'وقود', example: 'We need fuel for the trip.' },
      { word: 'tank', meaningAr: 'خزان', example: 'The tank is almost empty.' },
      { word: 'fill', meaningAr: 'يملأ', example: 'Fill the tank, please.' },
      { word: 'petrol', meaningAr: 'بنزين', example: 'Ten liters of petrol, please.' },
      { word: 'diesel', meaningAr: 'ديزل', example: 'Does this station have diesel?' },
      { word: 'pump', meaningAr: 'مضخة', example: 'The pump number is seven.' },
      { word: 'liter', meaningAr: 'لتر', example: 'A liter costs one dollar.' },
      { word: 'tires', meaningAr: 'إطارات', example: 'Please add air to the tires.' },
      { word: 'air', meaningAr: 'هواء', example: 'The front tire needs air.' },
      { word: 'empty', meaningAr: 'فارغ', example: 'My tank was empty this morning.' },
      { word: 'full', meaningAr: 'ممتلئ', example: 'The tank is full now, thank you.' },
    ],
    scenario: [
      { en: 'Fill the tank, please.', ar: 'املأ الخزان من فضلك.', d: 1 },
      { en: 'Full tank or twenty dollars?', ar: 'خزان ممتلئ أم عشرين دولارا؟', d: 1 },
      { en: 'Full tank, please.', ar: 'ممتلئ من فضلك.', d: 1 },
      { en: 'Does this station have diesel?', ar: 'هل في هذه المحطة ديزل؟', d: 1 },
      { en: 'How much is a liter of petrol?', ar: 'كم يساوي لتر البنزين؟', d: 1 },
      { en: 'One dollar and forty cents.', ar: 'دولار واحد وأربعون سنتا.', d: 1 },
      { en: 'The pump number is seven.', ar: 'رقم المضخة سبعة.', d: 1 },
      { en: 'Please add air to the tires.', ar: 'أضف هواء للإطارات من فضلك.', d: 2 },
      { en: 'Do you pay inside or at the pump?', ar: 'هل تدفع في الداخل أم عند المضخة؟', d: 2 },
      { en: 'I paid for the fuel inside yesterday.', ar: 'دفعت ثمن الوقود في الداخل أمس.', d: 2 },
      { en: 'The tank is almost empty.', ar: 'الخزان شبه فارغ.', d: 2 },
      { en: 'Do not forget to close the fuel cap.', ar: 'لا تنس إغلاق غطاء الوقود.', d: 2 },
      { en: 'I will fill the tank after work.', ar: 'سأملأ الخزان بعد العمل.', d: 3 },
      { en: 'We are going to fill up before the trip.', ar: 'سنتزود بالوقود قبل الرحلة.', d: 3 },
      { en: 'The worker cleaned the windshield.', ar: 'نظف العامل الزجاج الأمامي.', d: 3 },
      { en: 'Ten liters of petrol, please.', ar: 'عشرة لترات من البنزين من فضلك.', d: 3 },
      { en: 'The tank is full now; thank you.', ar: 'الخزان ممتلئ الآن؛ شكرا لك.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Fill the tank with {F}, please.', arTmpl: 'املأ الخزان بـ{F_ar} من فضلك.',
        slots: {
          F: [
            { en: 'petrol', ar: 'البنزين' }, { en: 'diesel', ar: 'الديزل' },
          ],
        },
        tags: ['gas-station', 'fuel'], d: 1, limit: 2,
      },
      {
        tmpl: 'Add air to the {T}, please.', arTmpl: 'أضف هواء إلى {T_ar} من فضلك.',
        slots: {
          T: [
            { en: 'front tires', ar: 'الإطارات الأمامية' },
            { en: 'back tire', ar: 'الإطار الخلفي' },
            { en: 'spare tire', ar: 'الإطار الاحتياطي' },
          ],
        },
        tags: ['gas-station', 'tires'], d: 2, limit: 3,
      },
      {
        tmpl: 'I will fill the tank on {D}.', arTmpl: 'سأملأ الخزان يوم {D_ar}.',
        slots: { D: B.DAYS },
        tags: ['gas-station', 'future'], d: 2, limit: 7,
      },
      {
        tmpl: '{S} {V} {AMT} for the fuel {T}.', arTmpl: '{S_ar} {V_ar} {AMT_ar} مقابل الوقود {T_ar}.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'My brother', ar: 'أخي', agr: 'he' },
            { en: 'We', ar: 'نحن', agr: 'we' }, { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{ en: B.enPast('pay'), ar: B.arPast('pay', x.S.agr) }],
          AMT: [
            { en: 'ten dollars', ar: 'عشرة دولارات' },
            { en: 'twenty dollars', ar: 'عشرين دولارا' },
            { en: 'fifty dollars', ar: 'خمسين دولارا' },
          ],
          T: [
            { en: 'yesterday', ar: 'أمس' }, { en: 'this morning', ar: 'هذا الصباح' },
            { en: 'last week', ar: 'الأسبوع الماضي' },
          ],
        },
        tags: ['gas-station', 'past-simple'], d: 2, limit: 24,
      },
      {
        tmpl: 'How much is a liter of {F}?', arTmpl: 'كم يساوي لتر {F_ar}؟',
        slots: {
          F: [
            { en: 'diesel', ar: 'الديزل' }, { en: 'engine oil', ar: 'زيت المحرك' },
          ],
        },
        tags: ['gas-station', 'questions'], d: 2, limit: 2,
      },
    ],
    fills: [
      { en: 'Fill the tank, please.', ar: 'املأ الخزان من فضلك.', word: 'tank' },
      { en: 'Please add air to the tires.', ar: 'أضف هواء للإطارات من فضلك.', word: 'air' },
      { en: 'Does this station have diesel?', ar: 'هل في هذه المحطة ديزل؟', word: 'diesel' },
      { en: 'How much is a liter of petrol?', ar: 'كم يساوي لتر البنزين؟', word: 'liter' },
      { en: 'The tank is almost empty.', ar: 'الخزان شبه فارغ.', word: 'empty' },
      { en: 'Do you pay inside or at the pump?', ar: 'هل تدفع في الداخل أم عند المضخة؟', word: 'inside' },
      { en: 'Do not forget to close the fuel cap.', ar: 'لا تنس إغلاق غطاء الوقود.', word: 'cap' },
      { en: 'The tank is full now; thank you.', ar: 'الخزان ممتلئ الآن؛ شكرا لك.', word: 'full' },
    ],
    orders: [
      { en: 'Fill the tank, please.', ar: 'املأ الخزان من فضلك.' },
      { en: 'Please add air to the tires.', ar: 'أضف هواء للإطارات من فضلك.' },
      { en: 'Do you pay inside or at the pump?', ar: 'هل تدفع في الداخل أم عند المضخة؟' },
      { en: 'The tank is almost empty.', ar: 'الخزان شبه فارغ.' },
      { en: 'I paid for the fuel inside yesterday.', ar: 'دفعت ثمن الوقود في الداخل أمس.' },
      { en: 'How much is a liter of petrol?', ar: 'كم يساوي لتر البنزين؟' },
    ],
    mc: [
      { question: '"Fill the tank" means:', options: ['املأ خزان الوقود', 'اغسل السيارة', 'افحص الإطارات', 'أغلق الغطاء'], answerIndex: 0, ar: 'ما معنى Fill the tank؟' },
      { question: 'You need air for the tires. You ask for:', options: ['air', 'a new battery', 'a map', 'a ticket'], answerIndex: 0, ar: 'تحتاج هواء للإطارات، فتطلب:' },
      { question: '"The tank is almost empty" means:', options: ['الخزان شبه فارغ', 'الخزان ممتلئ', 'الوقود غالي', 'المضخة معطلة'], answerIndex: 0, ar: 'ما معنى الجملة؟' },
      { question: 'Where can you pay for fuel?', options: ['Inside or at the pump', 'Only in the car', 'Only at home', 'In the trunk'], answerIndex: 0, ar: 'أين يمكنك الدفع مقابل الوقود؟' },
    ],
  },

  /* ================= lesson 101 — Parking a Car ================= */
  {
    num: 101,
    tags: ['parking', 'car', 'signs'],
    objectives: [
      'Find and ask for a parking spot',
      'Understand parking signs and meters',
      'Talk about parking problems and fines',
    ],
    grammar: {
      explanation: 'Use "can" and "cannot" to talk about parking: "You can park for two hours here"; "You cannot park here". Parking signs use the imperative and "no": "No parking", "No stopping". Use the past simple for finished actions: "I parked illegally and got a ticket"; "We found a free spot near the entrance". For future plans say "We are going to park in the garage".',
      explanationAr: 'استخدم can وcannot للتحدث عن الركن: You can park for two hours here وYou cannot park here. وتستخدم لوحات الركن صيغة الأمر وكلمة no: No parking وNo stopping. واستخدم الماضي البسيط للأعمال المنتهية: I parked illegally and got a ticket وWe found a free spot near the entrance. وللخطط المستقبلية قل We are going to park in the garage.',
      examples: [
        { en: 'Is there a free spot near the mall?', ar: 'هل هناك مكان فارغ قرب المركز التجاري؟' },
        { en: 'The sign says no parking.', ar: 'اللوحة تقول ممنوع الوقوف.' },
        { en: 'I parked illegally and got a ticket.', ar: 'ركنت في مكان ممنوع فأخذت غرامة.' },
      ],
    },
    vocabulary: [
      { word: 'parking lot', meaningAr: 'ساحة ركن السيارات', example: 'The parking lot is full on weekends.' },
      { word: 'parking spot', meaningAr: 'مكان ركن', example: 'This parking spot is small.' },
      { word: 'free spot', meaningAr: 'مكان فارغ', example: 'A free spot is hard to find downtown.' },
      { word: 'no parking', meaningAr: 'ممنوع الوقوف', example: 'The sign says no parking.' },
      { word: 'pay-and-display', meaningAr: 'تدفع ثم تعرض التذكرة', example: 'Buy a ticket from the pay-and-display machine.' },
      { word: 'garage', meaningAr: 'مرآب', example: 'The garage is under the building.' },
      { word: 'tow', meaningAr: 'يجر سيارة', example: 'They tow cars after midnight.' },
      { word: 'fine', meaningAr: 'غرامة', example: 'I got a fine for illegal parking.' },
      { word: 'ticket', meaningAr: 'مخالفة / تذكرة', example: 'I found a ticket on the windshield.' },
      { word: 'illegally', meaningAr: 'بشكل غير قانوني', example: 'Do not park illegally.' },
      { word: 'entrance', meaningAr: 'مدخل', example: 'The entrance is on the side street.' },
      { word: 'level', meaningAr: 'طابق / مستوى', example: 'Our car is on level two.' },
    ],
    scenario: [
      { en: 'Is there a free spot near the mall?', ar: 'هل هناك مكان فارغ قرب المركز التجاري؟', d: 1 },
      { en: 'Yes, but you must pay at the meter.', ar: 'نعم، لكن يجب أن تدفع عند العداد.', d: 1 },
      { en: 'Where can I park my car?', ar: 'أين أستطيع ركن سيارتي؟', d: 1 },
      { en: 'You can park for two hours here.', ar: 'تستطيع الركن ساعتين هنا.', d: 1 },
      { en: 'The parking lot is full on weekends.', ar: 'ساحة الركن ممتلئة في نهايات الأسبوع.', d: 1 },
      { en: 'We are going to park in the garage tonight.', ar: 'سنركن في المرآب الليلة.', d: 1 },
      { en: 'Look, the sign says no parking.', ar: 'انظر، اللوحة تقول ممنوع الوقوف.', d: 2 },
      { en: 'Do not park across the driveway.', ar: 'لا تركن أمام ممر السيارات.', d: 2 },
      { en: 'I parked illegally and got a ticket.', ar: 'ركنت في مكان ممنوع فأخذت غرامة.', d: 2 },
      { en: 'Buy a ticket from the pay-and-display machine.', ar: 'اشترِ تذكرة من آلة الدفع والعرض.', d: 2 },
      { en: 'Please park between the white lines.', ar: 'اركن بين الخطوط البيضاء من فضلك.', d: 2 },
      { en: 'They will tow your car away.', ar: 'سيجرون سيارتك بعيدا.', d: 3 },
      { en: 'We found a free spot near the entrance.', ar: 'وجدنا مكانا فارغا قرب المدخل.', d: 3 },
      { en: 'Parking is free on Sundays.', ar: 'الركن مجاني أيام الأحد.', d: 3 },
      { en: 'He always parks in the same spot.', ar: 'يركن دائما في المكان نفسه.', d: 3 },
      { en: 'Move your car, please; it is blocking the way.', ar: 'حرك سيارتك من فضلك؛ إنها تسد الطريق.', d: 3 },
      { en: 'Our car is on level two.', ar: 'سيارتنا في الطابق الثاني.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'The sign says {S}.', arTmpl: 'اللوحة تقول: {S_ar}.',
        slots: {
          S: [
            { en: 'no parking', ar: 'ممنوع الوقوف' }, { en: 'no stopping', ar: 'ممنوع التوقف' },
            { en: 'one way', ar: 'اتجاه واحد' }, { en: 'slow', ar: 'أبطئ' },
          ],
        },
        tags: ['parking', 'signs'], d: 1, limit: 4,
      },
      {
        tmpl: 'Parking is {C} on {D}.', arTmpl: 'الركن {C_ar} يوم {D_ar}.',
        slots: {
          C: [
            { en: 'free', ar: 'مجانا' }, { en: 'allowed', ar: 'مسموحا' },
            { en: 'expensive', ar: 'مكلفا' }, { en: 'closed', ar: 'مغلقا' },
          ],
          D: B.DAYS,
        },
        tags: ['parking', 'days'], d: 2, limit: 12,
      },
      {
        tmpl: '{S} {V} a free spot {PL} {T}.', arTmpl: '{S_ar} {V_ar} مكانا فارغا {PL_ar} {T_ar}.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'We', ar: 'نحن', agr: 'we' },
            { en: 'My sister', ar: 'أختي', agr: 'she' }, { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{ en: B.enPast('find'), ar: B.arPast('find', x.S.agr) }],
          PL: [
            { en: 'near the entrance', ar: 'قرب المدخل' },
            { en: 'behind the mosque', ar: 'خلف المسجد' },
            { en: 'next to the bank', ar: 'بجانب المصرف' },
            { en: 'in the garage', ar: 'في المرآب' },
          ],
          T: [
            { en: 'yesterday', ar: 'أمس' }, { en: 'this morning', ar: 'هذا الصباح' },
            { en: 'last night', ar: 'الليلة الماضية' },
          ],
        },
        tags: ['parking', 'past-simple'], d: 2, limit: 24,
      },
      {
        tmpl: 'Do not park in front of {PL}.', arTmpl: 'لا تركن أمام {PL_ar}.',
        slots: {
          PL: [
            { en: 'the gate', ar: 'البوابة' }, { en: 'the bank', ar: 'المصرف' },
            { en: 'the clinic', ar: 'العيادة' },
          ],
        },
        tags: ['parking', 'rules'], d: 2, limit: 3,
      },
    ],
    fills: [
      { en: 'Is there a free spot near the mall?', ar: 'هل هناك مكان فارغ قرب المركز التجاري؟', word: 'spot' },
      { en: 'Look, the sign says no parking.', ar: 'انظر، اللوحة تقول ممنوع الوقوف.', word: 'sign' },
      { en: 'I parked illegally and got a ticket.', ar: 'ركنت في مكان ممنوع فأخذت غرامة.', word: 'illegally' },
      { en: 'Buy a ticket from the pay-and-display machine.', ar: 'اشترِ تذكرة من آلة الدفع والعرض.', word: 'machine' },
      { en: 'Do not park across the driveway.', ar: 'لا تركن أمام ممر السيارات.', word: 'driveway' },
      { en: 'They will tow your car away.', ar: 'سيجرون سيارتك بعيدا.', word: 'tow' },
      { en: 'Parking is free on Sundays.', ar: 'الركن مجاني أيام الأحد.', word: 'free' },
      { en: 'Please park between the white lines.', ar: 'اركن بين الخطوط البيضاء من فضلك.', word: 'between' },
    ],
    orders: [
      { en: 'Is there a free spot near the mall?', ar: 'هل هناك مكان فارغ قرب المركز التجاري؟' },
      { en: 'I parked illegally and got a ticket.', ar: 'ركنت في مكان ممنوع فأخذت غرامة.' },
      { en: 'Do not park across the driveway.', ar: 'لا تركن أمام ممر السيارات.' },
      { en: 'Parking is free on Sundays.', ar: 'الركن مجاني أيام الأحد.' },
      { en: 'They will tow your car away.', ar: 'سيجرون سيارتك بعيدا.' },
      { en: 'Please park between the white lines.', ar: 'اركن بين الخطوط البيضاء من فضلك.' },
    ],
    mc: [
      { question: 'The sign says "no parking". You should:', options: ['Look for another spot', 'Park there quickly', 'Leave the engine on', 'Wash the car'], answerIndex: 0, ar: 'اللوحة تقول ممنوع الوقوف، ماذا تفعل؟' },
      { question: '"pay-and-display" is:', options: ['آلة تدفع فيها ثم تعرض التذكرة', 'مضخة وقود', 'مغسلة سيارات', 'ورشة إطارات'], answerIndex: 0, ar: 'ما هو pay-and-display؟' },
      { question: '"parked illegally" means:', options: ['ركن في مكان ممنوع', 'ركن في المرآب', 'ركن مجاني', 'ركن بين الخطوط'], answerIndex: 0, ar: 'ما معنى parked illegally؟' },
      { question: 'A "free spot" is:', options: ['مكان ركن فارغ', 'وقود مجاني', 'غرامة مالية', 'خط أبيض'], answerIndex: 0, ar: 'ما معنى free spot؟' },
      { question: '"They will tow your car away" means:', options: ['سيأخذون سيارتك بالجر', 'سيغسلون سيارتك', 'سيشترون سيارتك', 'سيصلحون سيارتك'], answerIndex: 0, ar: 'ما معنى الجملة؟' },
    ],
  },

  /* ================= lesson 102 — Traffic Police ================= */
  {
    num: 102,
    tags: ['traffic-police', 'driving', 'rules'],
    objectives: [
      "Understand a traffic officer's questions",
      'Explain a driving problem politely',
      'Talk about fines and traffic rules',
    ],
    grammar: {
      explanation: 'A traffic officer uses polite orders and questions: "Please stop the car here", "Can I see your license and registration?". The past continuous describes an action in progress: "You were speeding in a school zone". Use "must" for strong rules and "a fine" for the money you pay when you break them: "You must pay a fine of fifty dollars". Answer politely with "I am sorry, officer".',
      explanationAr: 'يستخدم شرطي المرور أوامر مهذبة وأسئلة: Please stop the car here وCan I see your license and registration؟ ويصف الماضي المستمر عملا كان مستمرا: You were speeding in a school zone. واستخدم must للقواعد القوية وa fine للمبلغ الذي تدفعه عند مخالفتها: You must pay a fine of fifty dollars. وأجب بأدب: I am sorry, officer.',
      examples: [
        { en: 'Can I see your license and registration, please?', ar: 'هل يمكنني رؤية الرخصة واستمارة السيارة من فضلك؟' },
        { en: 'You were speeding in a school zone.', ar: 'كنت تتجاوز السرعة في منطقة مدرسة.' },
        { en: 'You must pay a fine of fifty dollars.', ar: 'يجب أن تدفع غرامة خمسين دولارا.' },
      ],
    },
    vocabulary: [
      { word: 'traffic police', meaningAr: 'شرطة المرور', example: 'The traffic police are at the junction.' },
      { word: 'officer', meaningAr: 'ضابط / شرطي', example: 'Is something wrong, officer?' },
      { word: 'stop', meaningAr: 'يتوقف / يوقف', example: 'Please stop the car here.' },
      { word: 'license', meaningAr: 'رخصة', example: 'This is my license, officer.' },
      { word: 'registration', meaningAr: 'استمارة السيارة', example: 'Can I see your registration, please?' },
      { word: 'speeding', meaningAr: 'تجاوز السرعة', example: 'Speeding is dangerous.' },
      { word: 'fine', meaningAr: 'غرامة', example: 'Where do I pay the fine?' },
      { word: 'polite', meaningAr: 'مهذب', example: 'Be polite with the officer.' },
      { word: 'explain', meaningAr: 'يشرح', example: 'I explained the situation calmly.' },
      { word: 'follow', meaningAr: 'يتبع', example: 'Follow the rules and drive slowly.' },
      { word: 'warn', meaningAr: 'يحذر', example: 'The officer warned me kindly.' },
      { word: 'checkpoint', meaningAr: 'نقطة تفتيش', example: 'We waited at the checkpoint for two minutes.' },
    ],
    scenario: [
      { en: 'Good afternoon, officer.', ar: 'مساء الخير يا ضابط.', d: 1 },
      { en: 'Please stop the car here.', ar: 'أوقف السيارة هنا من فضلك.', d: 1 },
      { en: 'Is something wrong, officer?', ar: 'هل هناك خطأ ما يا ضابط؟', d: 1 },
      { en: 'You were speeding in a school zone.', ar: 'كنت تتجاوز السرعة في منطقة مدرسة.', d: 1 },
      { en: 'I am sorry; I did not see the sign.', ar: 'أنا آسف؛ لم أر اللوحة.', d: 1 },
      { en: 'Can I see your license and registration, please?', ar: 'هل يمكنني رؤية الرخصة واستمارة السيارة من فضلك؟', d: 2 },
      { en: 'Yes, here they are, officer.', ar: 'نعم، هنا هم يا ضابط.', d: 2 },
      { en: 'You must pay a fine of fifty dollars.', ar: 'يجب أن تدفع غرامة خمسين دولارا.', d: 2 },
      { en: 'Where do I pay the fine?', ar: 'أين أدفع الغرامة؟', d: 2 },
      { en: 'You can pay it online or at the station.', ar: 'يمكنك دفعها عبر الإنترنت أو في المحطة.', d: 2 },
      { en: 'The officer checked my papers and smiled.', ar: 'فحص الضابط أوراقي وابتسم.', d: 3 },
      { en: 'Do not drive too close to other cars.', ar: 'لا تقُد قريبا جدا من السيارات الأخرى.', d: 3 },
      { en: 'They are going to check the trucks at the bridge.', ar: 'سيفحصون الشاحنات عند الجسر.', d: 3 },
      { en: 'He will pay the fine at the police station.', ar: 'سيدفع الغرامة في مركز الشرطة.', d: 3 },
      { en: 'The officers are directing the traffic.', ar: 'الضباط ينظمون حركة المرور.', d: 3 },
      { en: 'Slow down and follow the rules.', ar: 'خفف السرعة واتبع القواعد.', d: 3 },
      { en: 'I promise to drive slowly from now on.', ar: 'أعدك أن أقود ببطء من الآن.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Can I see your {DOC}, please?', arTmpl: 'هل يمكنني رؤية {DOC_ar} من فضلك؟',
        slots: {
          DOC: [
            { en: 'license', ar: 'الرخصة' }, { en: 'registration', ar: 'استمارة السيارة' },
            { en: 'ID card', ar: 'بطاقة الهوية' }, { en: 'insurance paper', ar: 'وثيقة التأمين' },
          ],
        },
        tags: ['traffic-police', 'requests'], d: 1, limit: 4,
      },
      {
        tmpl: 'You were speeding near the {PL}.', arTmpl: 'كنت تتجاوز السرعة قرب {PL_ar}.',
        slots: {
          PL: [
            { en: 'school', ar: 'المدرسة' }, { en: 'hospital', ar: 'المستشفى' },
            { en: 'market', ar: 'السوق' }, { en: 'bridge', ar: 'الجسر' },
          ],
        },
        tags: ['traffic-police', 'rules'], d: 1, limit: 4,
      },
      {
        tmpl: '{S} {V} the fine {T}.', arTmpl: '{S_ar} {V_ar} الغرامة {T_ar}.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'My uncle', ar: 'عمي', agr: 'he' },
            { en: 'We', ar: 'نحن', agr: 'we' }, { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{ en: B.enPast('pay'), ar: B.arPast('pay', x.S.agr) }],
          T: [
            { en: 'yesterday', ar: 'أمس' }, { en: 'last week', ar: 'الأسبوع الماضي' },
            { en: 'this morning', ar: 'هذا الصباح' },
          ],
        },
        tags: ['traffic-police', 'past-simple'], d: 2, limit: 12,
      },
      {
        tmpl: 'Please {V} your car to the side of the road.', arTmpl: 'من فضلك {V_ar} سيارتك إلى جانب الطريق.',
        slots: {
          V: [
            { en: 'move', ar: 'حرّك' }, { en: 'take', ar: 'خُذ' },
          ],
        },
        tags: ['traffic-police', 'requests'], d: 2, limit: 2,
      },
      {
        tmpl: 'Can I {V} here, officer?', arTmpl: 'هل يمكنني {V_ar} هنا يا ضابط؟',
        slots: {
          V: [
            { en: 'stop', ar: 'أن أتوقف' }, { en: 'park', ar: 'أن أركن' },
            { en: 'turn', ar: 'أن أنعطف' },
          ],
        },
        tags: ['traffic-police', 'questions'], d: 2, limit: 3,
      },
      {
        tmpl: 'The officer gave me a {N}.', arTmpl: 'أعطاني الضابط {N_ar}.',
        slots: {
          N: [
            { en: 'warning', ar: 'تحذيرا' }, { en: 'fine', ar: 'غرامة' },
            { en: 'notice', ar: 'إشعارا' },
          ],
        },
        tags: ['traffic-police', 'fines'], d: 2, limit: 3,
      },
      {
        tmpl: 'You must follow the {N}.', arTmpl: 'يجب أن تتبع {N_ar}.',
        slots: {
          N: [
            { en: 'rules', ar: 'القواعد' }, { en: 'traffic rules', ar: 'قواعد المرور' },
            { en: 'road signs', ar: 'إشارات الطريق' },
          ],
        },
        tags: ['traffic-police', 'rules'], d: 2, limit: 3,
      },
      {
        tmpl: 'Slow down near the {PL}.', arTmpl: 'خفف السرعة قرب {PL_ar}.',
        slots: {
          PL: [
            { en: 'crossing', ar: 'المعبر' }, { en: 'junction', ar: 'التقاطع' },
            { en: 'tunnel', ar: 'النفق' },
          ],
        },
        tags: ['traffic-police', 'safety'], d: 2, limit: 3,
      },
    ],
    fills: [
      { en: 'Please stop the car here.', ar: 'أوقف السيارة هنا من فضلك.', word: 'stop' },
      { en: 'Is something wrong, officer?', ar: 'هل هناك خطأ ما يا ضابط؟', word: 'officer' },
      { en: 'You were speeding in a school zone.', ar: 'كنت تتجاوز السرعة في منطقة مدرسة.', word: 'speeding' },
      { en: 'You must pay a fine of fifty dollars.', ar: 'يجب أن تدفع غرامة خمسين دولارا.', word: 'fine' },
      { en: 'Where do I pay the fine?', ar: 'أين أدفع الغرامة؟', word: 'pay' },
      { en: 'The officer checked my papers and smiled.', ar: 'فحص الضابط أوراقي وابتسم.', word: 'papers' },
      { en: 'Slow down and follow the rules.', ar: 'خفف السرعة واتبع القواعد.', word: 'rules' },
      { en: 'I promise to drive slowly from now on.', ar: 'أعدك أن أقود ببطء من الآن.', word: 'promise' },
    ],
    orders: [
      { en: 'Please stop the car here.', ar: 'أوقف السيارة هنا من فضلك.' },
      { en: 'Is something wrong, officer?', ar: 'هل هناك خطأ ما يا ضابط؟' },
      { en: 'You were speeding in a school zone.', ar: 'كنت تتجاوز السرعة في منطقة مدرسة.' },
      { en: 'You must pay a fine of fifty dollars.', ar: 'يجب أن تدفع غرامة خمسين دولارا.' },
      { en: 'The officer checked my papers and smiled.', ar: 'فحص الضابط أوراقي وابتسم.' },
      { en: 'I promise to drive slowly from now on.', ar: 'أعدك أن أقود ببطء من الآن.' },
    ],
    mc: [
      { question: 'A traffic officer stops you. What does he ask for first?', options: ['Your license and registration', 'Your lunch', 'Your phone password', 'Your house keys'], answerIndex: 0, ar: 'أوقفك شرطي المرور، ماذا يطلب أولا؟' },
      { question: '"You were speeding" means:', options: ['كنت تتجاوز السرعة', 'كنت تنام في السيارة', 'كنت تغسل السيارة', 'كنت تركن السيارة'], answerIndex: 0, ar: 'ما معنى You were speeding؟' },
      { question: 'A "fine" is:', options: ['money you pay when you break a rule', 'a kind of car', 'a road sign', 'a fuel type'], answerIndex: 0, ar: 'الغرامة هي:' },
      { question: 'The officer says "Slow down". You should:', options: ['Drive more slowly', 'Drive more quickly', 'Park the car', 'Close your eyes'], answerIndex: 0, ar: 'قال الضابط Slow down، ماذا تفعل؟' },
      { question: 'Choose the polite answer:', options: ['I am sorry; I did not see the sign.', 'Go away, officer!', 'I do not care.', 'This is my road.'], answerIndex: 0, ar: 'اختر الجواب المهذب.' },
    ],
  },
];
