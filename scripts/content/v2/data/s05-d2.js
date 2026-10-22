/* ============================================================
   v2 section data — s05-d2.js
   Health (start of Section 6) · lessons 121–123
   (doctor's appointments, symptoms, buying medicine)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 121 — Making a Doctor's Appointment ================= */
  {
    num: 121,
    tags: ['health', 'appointments', 'doctor'],
    objectives: [
      'Call a clinic and ask for an appointment',
      'Say who you want to see and why',
      'Ask about free days and times',
    ],
    grammar: {
      explanation: 'To book an appointment, start politely: "Hello, I would like to see Dr. Sami". Ask about free times with "Is there a slot this week?" or "Is the doctor available tomorrow?". Say the problem briefly with have: "I have a fever and a sore throat". Talk about the past with ago: "It started two days ago". The receptionist may say "Sorry, the afternoon is fully booked" and offer another time. Use "Can I come ...?" to ask about the time that suits you.',
      explanationAr: 'لحجز موعد ابدأ بلطف: Hello, I would like to see Dr. Sami. واسأل عن الأوقات المتاحة بـ Is there a slot this week؟ أو Is the doctor available tomorrow؟ وقل المشكلة بإيجاز مع have: I have a fever and a sore throat. وتحدث عن الماضي مع ago: It started two days ago. وقد تقول موظفة الاستقبال: Sorry, the afternoon is fully booked، وتعرض وقتا آخر. واستخدم Can I come...؟ للسؤال عن الوقت المناسب لك.',
      examples: [
        { en: 'Hello, I would like to see Dr. Sami.', ar: 'مرحبا، أود أن أرى الدكتور سامي.' },
        { en: 'Is there a slot this week?', ar: 'هل يوجد موعد متاح هذا الأسبوع؟' },
        { en: 'I have a fever and a sore throat.', ar: 'عندي حمى والتهاب في الحلق.' },
      ],
    },
    vocabulary: [
      { word: 'appointment', meaningAr: 'موعد', example: 'I have an appointment at ten.', ipa: 'əˈpɔɪntmənt' },
      { word: 'clinic', meaningAr: 'عيادة', example: 'The clinic opens at eight.' },
      { word: 'slot', meaningAr: 'موعد متاح', example: 'Is there a slot this week?' },
      { word: 'available', meaningAr: 'متاح', example: 'Is the doctor available today?' },
      { word: 'fever', meaningAr: 'حمى', example: 'I have a fever.' },
      { word: 'sore throat', meaningAr: 'التهاب في الحلق', example: 'I have a sore throat.' },
      { word: 'checkup', meaningAr: 'فحص دوري', example: 'I need a checkup every year.' },
      { word: 'urgent', meaningAr: 'عاجل', example: 'It is not urgent.' },
      { word: 'waiting room', meaningAr: 'غرفة الانتظار', example: 'Please wait in the waiting room.' },
      { word: 'receptionist', meaningAr: 'موظفة استقبال', example: 'The receptionist answered the phone.' },
      { word: 'patient', meaningAr: 'مريض', example: 'The doctor sees many patients.' },
      { word: 'wait', meaningAr: 'ينتظر', example: 'Please wait here.' },
    ],
    scenario: [
      { en: 'Good morning, Riverside Clinic.', ar: 'صباح الخير، عيادة ريفرسايد.', d: 1 },
      { en: 'Hello, I would like to see Dr. Sami.', ar: 'مرحبا، أود أن أرى الدكتور سامي.', d: 1 },
      { en: 'Is there a slot this week?', ar: 'هل يوجد موعد متاح هذا الأسبوع؟', d: 1 },
      { en: 'Yes, tomorrow morning at half past nine.', ar: 'نعم، غدا في الصباح في التاسعة والنصف.', d: 1 },
      { en: 'I have a fever and a sore throat.', ar: 'عندي حمى والتهاب في الحلق.', d: 1 },
      { en: 'When did it start?', ar: 'متى بدأ ذلك؟', d: 1 },
      { en: 'It started two days ago.', ar: 'بدأ منذ يومين.', d: 1 },
      { en: 'Can I come in the afternoon?', ar: 'هل يمكنني القدوم بعد الظهر؟', d: 2 },
      { en: 'Sorry, the afternoon is not free.', ar: 'آسفة، فترة الظهر غير متاحة.', d: 2 },
      { en: 'What about Thursday at ten?', ar: 'ماذا عن الخميس في العاشرة؟', d: 2 },
      { en: 'Thursday at ten is free.', ar: 'الخميس في العاشرة متاح.', d: 2 },
      { en: 'Please bring your insurance card.', ar: 'أحضر بطاقة التأمين من فضلك.', d: 2 },
      { en: 'My name is Ahmed and my phone number is 555-0142.', ar: 'اسمي أحمد ورقم هاتفي 555-0142.', d: 2 },
      { en: 'Is it urgent, sir?', ar: 'هل الأمر عاجل يا سيدي؟', d: 3 },
      { en: 'No, but I feel very tired.', ar: 'لا، لكنني أشعر بتعب شديد.', d: 3 },
      { en: 'The doctor does not work on Fridays.', ar: 'الطبيب لا يعمل أيام الجمعة.', d: 3 },
      { en: 'Please wait in the waiting room.', ar: 'انتظر في غرفة الانتظار من فضلك.', d: 3 },
      { en: 'The doctor sees many patients in the morning.', ar: 'يرى الطبيب مرضى كثيرين في الصباح.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I would like to see {DR}.', arTmpl: 'أود أن أرى {DR_ar}.',
        slots: {
          DR: [
            { en: 'Dr. Sami', ar: 'الدكتور سامي' }, { en: 'Dr. Huda', ar: 'الدكتورة هدى' },
            { en: 'Dr. Adel', ar: 'الدكتور عادل' }, { en: 'Dr. Mona', ar: 'الدكتورة منى' },
          ],
        },
        tags: ['health', 'appointments', 'polite-requests'], d: 1, limit: 4,
      },
      {
        tmpl: 'Is there a slot on {D}?', arTmpl: 'هل يوجد موعد يوم {D_ar}؟',
        slots: { D: B.DAYS },
        tags: ['health', 'appointments', 'time', 'questions'], d: 1, limit: 7,
      },
      {
        tmpl: 'I have {SYM}.', arTmpl: 'عندي {SYM_ar}.',
        slots: {
          SYM: [
            { en: 'a bad headache', ar: 'صداع شديد' }, { en: 'a cough and a cold', ar: 'كحة وزكام' },
            { en: 'a stomachache', ar: 'ألم في المعدة' }, { en: 'a toothache', ar: 'ألم في الأسنان' },
            { en: 'back pain', ar: 'ألم في الظهر' }, { en: 'an eye infection', ar: 'التهاب في العين' },
          ],
        },
        tags: ['health', 'symptoms'], d: 1, limit: 6,
      },
      {
        tmpl: 'Can I come {T}?', arTmpl: 'هل يمكنني القدوم {T_ar}؟',
        slots: {
          T: [
            { en: 'in the morning', ar: 'في الصباح' }, { en: 'after work', ar: 'بعد العمل' },
            { en: 'on Saturday', ar: 'يوم السبت' }, { en: 'in the evening', ar: 'في المساء' },
            { en: 'at noon', ar: 'في الظهر' },
          ],
        },
        tags: ['health', 'appointments', 'time', 'questions'], d: 2, limit: 5,
      },
      {
        tmpl: 'The clinic opens at {T}.', arTmpl: 'تفتح العيادة في {T_ar}.',
        slots: {
          T: [
            { en: 'eight', ar: 'الثامنة' }, { en: 'half past eight', ar: 'الثامنة والنصف' },
            { en: 'nine', ar: 'التاسعة' }, { en: 'half past nine', ar: 'التاسعة والنصف' },
            { en: 'ten', ar: 'العاشرة' },
          ],
        },
        tags: ['health', 'time'], d: 1, limit: 5,
      },
      {
        tmpl: 'Is the doctor available {T}?', arTmpl: 'هل الطبيب متاح {T_ar}؟',
        slots: {
          T: [
            { en: 'today', ar: 'اليوم' }, { en: 'tomorrow', ar: 'غدا' },
            { en: 'this week', ar: 'هذا الأسبوع' }, { en: 'on Monday', ar: 'يوم الاثنين' },
            { en: 'right now', ar: 'الآن' },
          ],
        },
        tags: ['health', 'appointments', 'questions'], d: 2, limit: 5,
      },
    ],
    fills: [
      { en: 'I would like to see Dr. Sami.', ar: 'أود أن أرى الدكتور سامي.', word: 'see', hint: 'أرى' },
      { en: 'Is there a slot this week?', ar: 'هل يوجد موعد متاح هذا الأسبوع؟', word: 'slot', hint: 'موعد متاح' },
      { en: 'I have a fever and a sore throat.', ar: 'عندي حمى والتهاب في الحلق.', word: 'fever', hint: 'حمى' },
      { en: 'It started two days ago.', ar: 'بدأ منذ يومين.', word: 'ago', hint: 'منذ' },
      { en: 'Sorry, the afternoon is not free.', ar: 'آسفة، فترة الظهر غير متاحة.', word: 'free', hint: 'متاح' },
      { en: 'Please bring your insurance card.', ar: 'أحضر بطاقة التأمين من فضلك.', word: 'insurance', hint: 'تأمين' },
      { en: 'The doctor does not work on Fridays.', ar: 'الطبيب لا يعمل أيام الجمعة.', word: 'work' },
      { en: 'Please wait in the waiting room.', ar: 'انتظر في غرفة الانتظار من فضلك.', word: 'wait', hint: 'ينتظر' },
    ],
    orders: [
      { en: 'Hello, I would like to see Dr. Sami.', ar: 'مرحبا، أود أن أرى الدكتور سامي.' },
      { en: 'Is there a slot this week?', ar: 'هل يوجد موعد متاح هذا الأسبوع؟' },
      { en: 'I have a fever and a sore throat.', ar: 'عندي حمى والتهاب في الحلق.' },
      { en: 'Can I come in the afternoon?', ar: 'هل يمكنني القدوم بعد الظهر؟' },
      { en: 'The doctor does not work on Fridays.', ar: 'الطبيب لا يعمل أيام الجمعة.' },
      { en: 'Please wait in the waiting room.', ar: 'انتظر في غرفة الانتظار من فضلك.' },
    ],
    mc: [
      { question: 'You are sick and want to see a doctor. You call the:', options: ['clinic', 'bakery', 'garage', 'barber shop'], answerIndex: 0, ar: 'أنت مريض وتريد طبيبا، فتتصل بـ:' },
      { question: '"Is there a slot this week?" asks about:', options: ['a free appointment time', 'a parking place', 'a bus ticket', 'a job'], answerIndex: 0, ar: 'سؤال Is there a slot this week؟ يستعلم عن:' },
      { question: 'Which of these is a symptom?', options: ['a sore throat', 'a waiting room', 'a receptionist', 'an insurance card'], answerIndex: 0, ar: 'أي مما يلي عرَض مرضي؟' },
      { question: 'The receptionist says the afternoon is fully booked. So:', options: ['you take a morning slot', 'you go to the kitchen', 'you buy a ticket', 'you drive home'], answerIndex: 0, ar: 'قالت موظفة الاستقبال إن فترة الظهر محجوزة، إذن:' },
    ],
  },

  /* ================= lesson 122 — Describing Symptoms ================= */
  {
    num: 122,
    tags: ['health', 'symptoms', 'body'],
    objectives: [
      'Say which part of the body hurts',
      'Describe how you feel and since when',
      'Understand simple questions from the doctor',
    ],
    grammar: {
      explanation: 'To talk about pain, use "hurt" with a body part: "My head hurts", "My throat hurts when I talk". Say how you feel with "I feel dizzy" or "I feel weak". Say when the problem started with "since": "Since yesterday morning" — the answer is often short. Ask questions with "Do you have a cough?" or "Which foot hurts?". The doctor uses short commands: "Open your mouth". Give advice with "Rest at home and drink warm drinks".',
      explanationAr: 'للحديث عن الألم استخدم hurt مع جزء من الجسم: My head hurts وMy throat hurts when I talk. وقل شعورك بـ I feel dizzy أو I feel weak. وقل متى بدأت المشكلة مع since: Since yesterday morning، والجواب غالبا قصير. واسأل بـ Do you have a cough؟ أو Which foot hurts؟ ويستخدم الطبيب أوامرا قصيرة: Open your mouth. وقدم النصيحة بـ Rest at home and drink warm drinks.',
      examples: [
        { en: 'My head hurts and I feel dizzy.', ar: 'رأسي يؤلمني وأشعر بدوار.' },
        { en: 'It hurts when I walk.', ar: 'يؤلمني عندما أمشي.' },
        { en: 'Since yesterday morning.', ar: 'منذ صباح الأمس.' },
      ],
    },
    vocabulary: [
      { word: 'hurt', meaningAr: 'يؤلم', example: 'My back hurts.' },
      { word: 'dizzy', meaningAr: 'يشعر بدوار', example: 'I feel dizzy.', ipa: 'ˈdɪzi' },
      { word: 'cough', meaningAr: 'كحة', example: 'I have a bad cough.' },
      { word: 'since', meaningAr: 'منذ', example: 'Since yesterday morning.' },
      { word: 'weak', meaningAr: 'ضعيف', example: 'I feel weak today.' },
      { word: 'runny nose', meaningAr: 'سيلان في الأنف', example: 'The baby has a runny nose.' },
      { word: 'earache', meaningAr: 'ألم في الأذن', example: 'The child has an earache.' },
      { word: 'temperature', meaningAr: 'درجة الحرارة', example: 'You have a high temperature.' },
      { word: 'stomach', meaningAr: 'معدة', example: 'My stomach hurts.' },
      { word: 'rest', meaningAr: 'يستريح', example: 'Rest at home for two days.' },
      { word: 'get better', meaningAr: 'يتحسن', example: 'You will get better soon.' },
      { word: 'medicine', meaningAr: 'دواء', example: 'Take this medicine after lunch.' },
    ],
    scenario: [
      { en: 'I do not feel well today.', ar: 'لا أشعر أنني بخير اليوم.', d: 1 },
      { en: 'What seems to be the problem?', ar: 'ما الذي يبدو أنه المشكلة؟', d: 1 },
      { en: 'My head hurts and I feel dizzy.', ar: 'رأسي يؤلمني وأشعر بدوار.', d: 1 },
      { en: 'When did the pain start?', ar: 'متى بدأ الألم؟', d: 1 },
      { en: 'Since yesterday morning.', ar: 'منذ صباح الأمس.', d: 1 },
      { en: 'Do you have a cough?', ar: 'هل عندك كحة؟', d: 1 },
      { en: 'Yes, a bad cough all night.', ar: 'نعم، كحة شديدة طوال الليل.', d: 1 },
      { en: 'My throat hurts when I talk.', ar: 'حلقي يؤلمني عندما أتكلم.', d: 2 },
      { en: 'It hurts when I walk.', ar: 'يؤلمني عندما أمشي.', d: 2 },
      { en: 'Which foot hurts?', ar: 'أي قدم تؤلمك؟', d: 2 },
      { en: 'My left foot.', ar: 'قدمي اليسرى.', d: 2 },
      { en: 'I feel weak and I cannot stand up.', ar: 'أشعر بضعف ولا أستطيع الوقوف.', d: 2 },
      { en: 'The children have runny noses.', ar: 'الأطفال عندهم سيلان في الأنف.', d: 3 },
      { en: 'My ear hurts, doctor.', ar: 'أذني تؤلمني يا طبيب.', d: 3 },
      { en: 'Open your mouth and say ahh, please.', ar: 'افتح فمك وقل آه من فضلك.', d: 3 },
      { en: 'You have a high temperature.', ar: 'حرارتك مرتفعة.', d: 3 },
      { en: 'Do not take cold showers.', ar: 'لا تستحم بماء بارد.', d: 3 },
      { en: 'Rest at home and drink warm drinks.', ar: 'استرح في البيت واشرب مشروبات دافئة.', d: 3 },
    ],
    patterns: [
      {
        tmpl: '{B} hurts.', arTmpl: '{B_ar}.',
        slots: {
          B: [
            { en: 'My head', ar: 'رأسي يؤلمني' }, { en: 'My throat', ar: 'حلقي يؤلمني' },
            { en: 'My back', ar: 'ظهري يؤلمني' }, { en: 'My stomach', ar: 'معدتي تؤلمني' },
            { en: 'My ear', ar: 'أذني تؤلمني' }, { en: 'My foot', ar: 'قدمي تؤلمني' },
            { en: 'My tooth', ar: 'سني يؤلمني' }, { en: 'My leg', ar: 'ساقي تؤلمني' },
          ],
        },
        tags: ['health', 'body', 'symptoms'], d: 1, limit: 8,
      },
      {
        tmpl: 'It hurts when I {V}.', arTmpl: 'يؤلمني عندما {V_ar}.',
        slots: {
          V: [
            { en: 'talk', ar: 'أتكلم' }, { en: 'eat', ar: 'آكل' },
            { en: 'breathe', ar: 'أتنفس' }, { en: 'sit down', ar: 'أجلس' },
            { en: 'move', ar: 'أتحرك' },
          ],
        },
        tags: ['health', 'symptoms'], d: 2, limit: 5,
      },
      {
        tmpl: 'I feel {ADJ}.', arTmpl: 'أشعر {ADJ_ar}.',
        slots: {
          ADJ: [
            { en: 'dizzy', ar: 'بدوار' }, { en: 'weak', ar: 'بالضعف' },
            { en: 'sick', ar: 'بالمرض' }, { en: 'tired', ar: 'بالتعب' },
            { en: 'better', ar: 'بالتحسن' },
          ],
        },
        tags: ['health', 'feelings'], d: 1, limit: 5,
      },
      {
        tmpl: 'I have {N}.', arTmpl: 'عندي {N_ar}.',
        slots: {
          N: [
            { en: 'a bad cough', ar: 'كحة شديدة' }, { en: 'a bad cold', ar: 'زكام شديد' },
            { en: 'a bad earache', ar: 'ألم شديد في الأذن' }, { en: 'a bad stomachache', ar: 'مغص شديد' },
          ],
        },
        tags: ['health', 'symptoms'], d: 1, limit: 4,
      },
      {
        tmpl: 'Since {T}.', arTmpl: 'منذ {T_ar}.',
        slots: {
          T: [
            { en: 'yesterday', ar: 'الأمس' }, { en: 'last night', ar: 'الليلة الماضية' },
            { en: 'two days ago', ar: 'يومين' }, { en: 'last week', ar: 'الأسبوع الماضي' },
            { en: 'Monday', ar: 'الاثنين' },
          ],
        },
        tags: ['health', 'time'], d: 2, limit: 5,
      },
      {
        tmpl: 'The children have {N}.', arTmpl: 'الأطفال عندهم {N_ar}.',
        slots: {
          N: [
            { en: 'a fever', ar: 'حمى' }, { en: 'a cough', ar: 'كحة' },
            { en: 'sore throats', ar: 'التهاب في الحلق' }, { en: 'a cold', ar: 'زكام' },
          ],
        },
        tags: ['health', 'children', 'symptoms'], d: 2, limit: 4,
      },
      {
        tmpl: '{S} {V} at home {T}.', arTmpl: '{S_ar} {V_ar} في البيت {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('rest', x.S.agr), ar: B.arPresent('rest', x.S.agr) }],
          T: [
            { en: 'today', ar: 'اليوم' }, { en: 'for two days', ar: 'ليومين' },
            { en: 'this week', ar: 'هذا الأسبوع' },
          ],
        },
        tags: ['health', 'present-simple', 'advice'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'I do not feel well today.', ar: 'لا أشعر أنني بخير اليوم.', word: 'feel', hint: 'أشعر' },
      { en: 'My head hurts and I feel dizzy.', ar: 'رأسي يؤلمني وأشعر بدوار.', word: 'hurts', hint: 'يؤلم' },
      { en: 'Since yesterday morning.', ar: 'منذ صباح الأمس.', word: 'Since', hint: 'منذ' },
      { en: 'Yes, a bad cough all night.', ar: 'نعم، كحة شديدة طوال الليل.', word: 'cough', hint: 'كحة' },
      { en: 'I feel weak and I cannot stand up.', ar: 'أشعر بضعف ولا أستطيع الوقوف.', word: 'weak', hint: 'ضعيف' },
      { en: 'My ear hurts, doctor.', ar: 'أذني تؤلمني يا طبيب.', word: 'ear', hint: 'أذن' },
      { en: 'You have a high temperature.', ar: 'حرارتك مرتفعة.', word: 'temperature', hint: 'درجة الحرارة' },
      { en: 'Rest at home and drink warm drinks.', ar: 'استرح في البيت واشرب مشروبات دافئة.', word: 'Rest', hint: 'استرح' },
    ],
    orders: [
      { en: 'My head hurts and I feel dizzy.', ar: 'رأسي يؤلمني وأشعر بدوار.' },
      { en: 'It hurts when I walk.', ar: 'يؤلمني عندما أمشي.' },
      { en: 'Do you have a cough?', ar: 'هل عندك كحة؟' },
      { en: 'I feel weak and I cannot stand up.', ar: 'أشعر بضعف ولا أستطيع الوقوف.' },
      { en: 'You have a high temperature.', ar: 'حرارتك مرتفعة.' },
      { en: 'Rest at home and drink warm drinks.', ar: 'استرح في البيت واشرب مشروبات دافئة.' },
    ],
    mc: [
      { question: 'Your head hurts. You have:', options: ['a headache', 'an earache', 'a toothache', 'a stomachache'], answerIndex: 0, ar: 'رأسك يؤلمك، فلديك:' },
      { question: '"I feel dizzy" means:', options: ['أشعر بدوار', 'أشعر بالجوع', 'أشعر بالنوم', 'أشعر بالعطش'], answerIndex: 0, ar: 'ما معنى I feel dizzy؟' },
      { question: 'The pain started yesterday. You say:', options: ['Since yesterday.', 'Until yesterday.', 'After tomorrow.', 'By yesterday.'], answerIndex: 0, ar: 'بدأ الألم أمس، فتقول:' },
      { question: 'Which sentence has correct grammar?', options: ['My throat hurts when I talk.', 'My throat hurt when I talks.', 'My throat is hurt when talk.', 'My throat hurting when I talk.'], answerIndex: 0, ar: 'أي جملة صحيحة؟' },
    ],
  },

  /* ================= lesson 123 — Buying Medicine ================= */
  {
    num: 123,
    tags: ['health', 'pharmacy', 'medicine'],
    objectives: [
      'Ask for medicine at the counter',
      'Understand the dose and the warnings',
      'Pay and check the expiry date',
    ],
    grammar: {
      explanation: 'At the counter, ask with "Do you have something for a cold?". Medicine you buy without a prescription is "over the counter". The pharmacist explains the dose with the imperative: "Take one pill twice a day". Use "with food" or "before bed" for the right moment. Warnings use "Do not ...": "Do not drive after taking it". Ask about effects: "Does it make you drowsy?". Always check the expiry date on the box before you pay.',
      explanationAr: 'عند المنضدة اسأل بـ Do you have something for a cold؟ والدواء الذي تشتريه بدون وصفة يسمى over the counter. ويشرح الصيدلي الجرعة بصيغة الأمر: Take one pill twice a day. واستخدم with food أو before bed للوقت المناسب. وتأتي التحذيرات بصيغة النهي: Do not drive after taking it. واسأل عن الآثار: Does it make you drowsy؟ وتحقق دائما من تاريخ الانتهاء على العلبة قبل الدفع.',
      examples: [
        { en: 'Do you have something for a cold?', ar: 'هل لديكم شيء للزكام؟' },
        { en: 'Take one pill twice a day.', ar: 'خذ حبة واحدة مرتين يوميا.' },
        { en: 'It is over the counter.', ar: 'إنه بدون وصفة طبية.' },
      ],
    },
    vocabulary: [
      { word: 'over the counter', meaningAr: 'بدون وصفة طبية', example: 'This medicine is over the counter.' },
      { word: 'pain reliever', meaningAr: 'مسكن للألم', example: 'A pain reliever helps a headache.' },
      { word: 'tablet', meaningAr: 'قرص', example: 'Take two tablets a day.' },
      { word: 'dose', meaningAr: 'جرعة', example: 'The dose is one pill at night.', ipa: 'doʊs' },
      { word: 'twice a day', meaningAr: 'مرتين يوميا', example: 'Take it twice a day.' },
      { word: 'with food', meaningAr: 'مع الطعام', example: 'Take it with food.' },
      { word: 'drowsy', meaningAr: 'يسبب النعاس', example: 'This pill makes you drowsy.' },
      { word: 'expiry date', meaningAr: 'تاريخ الانتهاء', example: 'Check the expiry date.' },
      { word: 'swallow', meaningAr: 'يبتلع', example: 'Swallow the tablet with water.' },
      { word: 'pharmacist', meaningAr: 'صيدلي', example: 'The pharmacist explained the dose.' },
      { word: 'box', meaningAr: 'علبة', example: 'The box is on the shelf.' },
      { word: 'bag', meaningAr: 'كيس', example: 'Put the box in a paper bag.' },
    ],
    scenario: [
      { en: 'Good afternoon. Do you have something for a cold?', ar: 'مساء الخير. هل لديكم شيء للزكام؟', d: 1 },
      { en: 'Yes, this tablet is very good.', ar: 'نعم، هذا القرص جيد جدا.', d: 1 },
      { en: 'Is it over the counter?', ar: 'هل هو بدون وصفة؟', d: 1 },
      { en: 'Yes, you do not need a prescription.', ar: 'نعم، لا تحتاج إلى وصفة طبية.', d: 1 },
      { en: 'How do I take it?', ar: 'كيف آخذه؟', d: 1 },
      { en: 'Take one pill twice a day.', ar: 'خذ حبة واحدة مرتين يوميا.', d: 1 },
      { en: 'Should I take it with food?', ar: 'هل آخذه مع الطعام؟', d: 1 },
      { en: 'Yes, take it with food after lunch.', ar: 'نعم، خذه مع الطعام بعد الغداء.', d: 1 },
      { en: 'Does it make you drowsy?', ar: 'هل يسبب النعاس؟', d: 2 },
      { en: 'A little, so do not drive after it.', ar: 'قليلا، لذلك لا تقد السيارة بعد تناوله.', d: 2 },
      { en: 'It is three dollars for this box.', ar: 'ثلاثة دولارات لهذه العلبة.', d: 2 },
      { en: 'Can I pay by card here?', ar: 'هل يمكنني الدفع بالبطاقة هنا؟', d: 2 },
      { en: 'Of course; the machine is at the counter.', ar: 'بالطبع؛ الجهاز عند المنضدة.', d: 2 },
      { en: 'Do not take more than two tablets a day.', ar: 'لا تأخذ أكثر من قرصين في اليوم.', d: 3 },
      { en: 'Check the expiry date on the box, please.', ar: 'تحقق من تاريخ الانتهاء على العلبة من فضلك.', d: 3 },
      { en: 'The pills are for my son; he is six years old.', ar: 'الحبوب لابني؛ عمره ست سنوات.', d: 3 },
      { en: 'Give him half a tablet in the morning.', ar: 'أعطه نصف قرص في الصباح.', d: 3 },
      { en: 'Thank you, and put it in a paper bag, please.', ar: 'شكرا، وضعه في كيس ورقي من فضلك.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Do you have something for {SYM}?', arTmpl: 'هل لديكم شيء {SYM_ar}؟',
        slots: {
          SYM: [
            { en: 'a cold', ar: 'للزكام' }, { en: 'a headache', ar: 'للصداع' },
            { en: 'a stomachache', ar: 'لألم في المعدة' }, { en: 'a sore throat', ar: 'للالتهاب في الحلق' },
            { en: 'an allergy', ar: 'للحساسية' },
          ],
        },
        tags: ['pharmacy', 'questions', 'health'], d: 1, limit: 5,
      },
      {
        tmpl: 'Take {D} {F}.', arTmpl: 'خذ {D_ar} {F_ar}.',
        slots: {
          D: [
            { en: 'one tablet', ar: 'قرصا واحدا' }, { en: 'two tablets', ar: 'قرصين' },
            { en: 'half a tablet', ar: 'نصف قرص' },
          ],
          F: [
            { en: 'twice a day', ar: 'مرتين يوميا' }, { en: 'three times a day', ar: 'ثلاث مرات يوميا' },
            { en: 'before bed', ar: 'قبل النوم' }, { en: 'with food', ar: 'مع الطعام' },
            { en: 'after every meal', ar: 'بعد كل وجبة' },
          ],
        },
        tags: ['pharmacy', 'imperative', 'doses'], d: 1, limit: 12,
      },
      {
        tmpl: 'It is {P} for this box.', arTmpl: '{P_ar} لهذه العلبة.',
        slots: {
          P: [
            { en: 'four dollars', ar: 'أربعة دولارات' }, { en: 'five dollars', ar: 'خمسة دولارات' },
            { en: 'eight dollars', ar: 'ثمانية دولارات' }, { en: 'ten dollars', ar: 'عشرة دولارات' },
          ],
        },
        tags: ['pharmacy', 'prices'], d: 2, limit: 4,
      },
      {
        tmpl: 'Do not {V} after taking it.', arTmpl: 'لا {V_ar} بعد تناوله.',
        slots: {
          V: [
            { en: 'drive', ar: 'تقود' }, { en: 'drink coffee', ar: 'تشرب القهوة' },
            { en: 'eat heavy meals', ar: 'تأكل وجبات ثقيلة' }, { en: 'take other pills', ar: 'تأخذ حبوبا أخرى' },
          ],
        },
        tags: ['pharmacy', 'imperative', 'warnings'], d: 2, limit: 4,
      },
      {
        tmpl: 'The pharmacist gave me {M}.', arTmpl: 'أعطاني الصيدلي {M_ar}.',
        slots: {
          M: [
            { en: 'a pain reliever', ar: 'مسكنا للألم' }, { en: 'some cough syrup', ar: 'شراب كحة' },
            { en: 'some vitamins', ar: 'فيتامينات' }, { en: 'a bandage', ar: 'ضمادة' },
            { en: 'some eye drops', ar: 'قطرات للعين' },
          ],
        },
        tags: ['pharmacy', 'past-simple'], d: 2, limit: 5,
      },
      {
        tmpl: 'Is this {M} safe for children?', arTmpl: 'هل {M_ar} آمن للأطفال؟',
        slots: {
          M: [
            { en: 'syrup', ar: 'الشراب' }, { en: 'cream', ar: 'الكريم' },
            { en: 'this tablet', ar: 'هذا القرص' }, { en: 'these vitamins', ar: 'هذه الفيتامينات' },
          ],
        },
        tags: ['pharmacy', 'children', 'questions'], d: 2, limit: 4,
      },
    ],
    fills: [
      { en: 'Do you have something for a cold?', ar: 'هل لديكم شيء للزكام؟', word: 'cold', hint: 'زكام' },
      { en: 'Is it over the counter?', ar: 'هل هو بدون وصفة؟', word: 'counter', hint: 'منضدة' },
      { en: 'Take one pill twice a day.', ar: 'خذ حبة واحدة مرتين يوميا.', word: 'twice', hint: 'مرتين' },
      { en: 'Yes, take it with food after lunch.', ar: 'نعم، خذه مع الطعام بعد الغداء.', word: 'food', hint: 'طعام' },
      { en: 'Does it make you drowsy?', ar: 'هل يسبب النعاس؟', word: 'drowsy', hint: 'نعاس' },
      { en: 'Do not take more than two tablets a day.', ar: 'لا تأخذ أكثر من قرصين في اليوم.', word: 'tablets', hint: 'أقراص' },
      { en: 'Check the expiry date on the box, please.', ar: 'تحقق من تاريخ الانتهاء على العلبة من فضلك.', word: 'expiry', hint: 'انتهاء' },
      { en: 'The pharmacist gave me a pain reliever.', ar: 'أعطاني الصيدلي مسكنا للألم.', word: 'pharmacist', hint: 'صيدلي' },
    ],
    orders: [
      { en: 'Do you have something for a cold?', ar: 'هل لديكم شيء للزكام؟' },
      { en: 'Is it over the counter?', ar: 'هل هو بدون وصفة؟' },
      { en: 'Take one pill twice a day.', ar: 'خذ حبة واحدة مرتين يوميا.' },
      { en: 'Does it make you drowsy?', ar: 'هل يسبب النعاس؟' },
      { en: 'Do not take more than two tablets a day.', ar: 'لا تأخذ أكثر من قرصين في اليوم.' },
      { en: 'Check the expiry date on the box, please.', ar: 'تحقق من تاريخ الانتهاء على العلبة من فضلك.' },
    ],
    mc: [
      { question: 'You can buy "over the counter" medicine:', options: ['without a prescription', 'only in the hospital', 'only for children', 'with a passport'], answerIndex: 0, ar: 'يمكن شراء الدواء بدون وصفة:' },
      { question: '"Take one pill twice a day" means:', options: ['حبتان في اليوم', 'حبة واحدة في الأسبوع', 'حبة واحدة كل يوم', 'حبتان كل ساعة'], answerIndex: 0, ar: 'ما معنى Take one pill twice a day؟' },
      { question: 'The medicine makes you drowsy, so:', options: ['do not drive after it', 'run every morning', 'take two boxes', 'drink it with soda'], answerIndex: 0, ar: 'الدواء يسبب النعاس، إذن:' },
      { question: 'You have a fever and need tablets. You go to:', options: ['the pharmacy', 'the barbershop', 'the playground', 'the parking lot'], answerIndex: 0, ar: 'عندك حمى وتحتاج أقراصا، فتذهب إلى:' },
    ],
  },
];
