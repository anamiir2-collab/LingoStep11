/* ============================================================
   v2 section data — s06-b1.js
   Health & Emergencies · lessons 131–134 (B1/A2)
   131 Dealing with the Police · 132 Saying You Feel Unwell ·
   133 Mental Health and Feelings · 134 Healthy Habits
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 131 — Dealing with the Police ================= */
  {
    num: 131,
    tags: ['police', 'emergencies'],
    objectives: [
      'Report a crime at a police station',
      'Answer an officer\'s questions politely',
      'Describe people and make polite requests',
    ],
    grammar: {
      explanation: 'At a police station, start a report with "I want to report ..." and use the past simple for finished events: "Someone broke the window last night". Officers ask questions about the past: "Where were you at nine o\'clock?", "What happened exactly?". Make polite requests with can or could plus please: "Can I see your ID, please?". Use the imperative for calm instructions: "Stay calm and answer slowly". For a promise about the future, use will with an if-clause: "We will call you if we find anything". The if-clause uses the present simple, not will.',
      explanationAr: 'في مركز الشرطة ابدأ البلاغ بـ I want to report ثم استخدم الماضي البسيط للأحداث المنتهية: Someone broke the window last night. يسألك الشرطي عن الماضي: Where were you at nine o\'clock؟ وWhat happened exactly؟ واطلب بأدب بـ can أو could مع please: Can I see your ID, please؟ واستخدم فعل الأمر للتعليمات الهادئة: Stay calm. وللوعد عن المستقبل استخدم will مع جملة if: We will call you if we find anything، وجملة if تأتي بالمضارع البسيط لا بـ will.',
      examples: [
        { en: 'She reported the crime at the police station.', ar: 'أبلغت عن الجريمة في مركز الشرطة.' },
        { en: 'Can I see your ID, please?', ar: 'هل يمكنني رؤية هويتك من فضلك؟' },
        { en: 'If you see anything strange, call the police.', ar: 'إذا رأيت أي شيء غريب، اتصل بالشرطة.' },
      ],
    },
    vocabulary: [
      { word: 'police officer', meaningAr: 'شرطي / ضابط شرطة', example: 'The police officer asked me questions.', ipa: 'pəˈliːs ˈɒfɪsər' },
      { word: 'crime', meaningAr: 'جريمة', example: 'Stealing is a crime.' },
      { word: 'report', meaningAr: 'يبلّغ عن', example: 'I want to report a crime.' },
      { word: 'ID', meaningAr: 'بطاقة هوية', example: 'Here is my ID, officer.' },
      { word: 'calm', meaningAr: 'هادئ', example: 'Stay calm, please.', ipa: 'kɑːm' },
      { word: 'witness', meaningAr: 'شاهد', example: 'The witness saw everything.' },
      { word: 'describe', meaningAr: 'يصف', example: 'Please describe the person.' },
      { word: 'immediately', meaningAr: 'فورا', example: 'Call us immediately.', ipa: 'ɪˈmiːdiətli' },
      { word: 'happen', meaningAr: 'يحدث', example: 'What happened exactly?' },
      { word: 'guilty', meaningAr: 'مذنب', example: 'He did not look guilty.' },
      { word: 'statement', meaningAr: 'أقوال / شهادة', example: 'The officer wrote my statement.' },
      { word: 'arrest', meaningAr: 'يقبض على / يعتقل', example: 'The police arrested him last night.' },
    ],
    scenario: [
      { en: 'Can I see your ID, please?', ar: 'هل يمكنني رؤية هويتك من فضلك؟', d: 1 },
      { en: 'Is there a problem, officer?', ar: 'هل توجد مشكلة يا شرطي؟', d: 1 },
      { en: 'I want to report a crime.', ar: 'أريد الإبلاغ عن جريمة.', d: 1 },
      { en: 'I didn\'t do anything wrong.', ar: 'أنا لم أفعل شيئا خاطئا.', d: 2 },
      { en: 'What happened exactly?', ar: 'ماذا حدث بالضبط؟', d: 1 },
      { en: 'Someone broke the window of my shop last night.', ar: 'شخص كسر نافذة متجري الليلة الماضية.', d: 2 },
      { en: 'Please describe the person.', ar: 'صف الشخص من فضلك.', d: 1 },
      { en: 'He was tall and he wore a black jacket.', ar: 'كان طويلا وكان يلبس سترة سوداء.', d: 2 },
      { en: 'Where were you at nine o\'clock?', ar: 'أين كنت في الساعة التاسعة؟', d: 2 },
      { en: 'I was at home with my family.', ar: 'كنت في البيت مع عائلتي.', d: 1 },
      { en: 'Could you write down your name and number, please?', ar: 'هل يمكنك تدوين اسمك ورقمك من فضلك؟', d: 2 },
      { en: 'We will call you if we find anything.', ar: 'سنتصل بك إن وجدنا شيئا.', d: 2 },
      { en: 'If you see him again, call us immediately.', ar: 'إذا رأيته مرة أخرى، اتصل بنا فورا.', d: 3 },
      { en: 'Stay calm and answer the questions slowly.', ar: 'ابق هادئا وأجب عن الأسئلة ببطء.', d: 1 },
      { en: 'Do you need any help, sir?', ar: 'هل تحتاج أي مساعدة يا سيدي؟', d: 1 },
      { en: 'Thank you for your help, officer.', ar: 'شكرا على مساعدتك يا شرطي.', d: 1 },
      { en: 'The police station is open twenty-four hours.', ar: 'مركز الشرطة مفتوح أربع وعشرين ساعة.', d: 2 },
      { en: 'The officers took my statement at the station.', ar: 'دوّن الضباط أقوالي في المركز.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I showed my {D} to the officer.', arTmpl: 'أريت {D_ar} للشرطي.',
        slots: {
          D: [
            { en: 'ID', ar: 'هويتي' }, { en: 'driving license', ar: 'رخصة قيادي' },
            { en: 'residence card', ar: 'بطاقة إقامتي' }, { en: 'work permit', ar: 'تصريح عملي' },
          ],
        },
        tags: ['police', 'documents'], d: 2, limit: 4,
      },
      {
        tmpl: 'I want to report {N}.', arTmpl: 'أريد الإبلاغ عن {N_ar}.',
        slots: {
          N: [
            { en: 'a problem', ar: 'مشكلة' }, { en: 'a fire', ar: 'حريق' },
            { en: 'an emergency', ar: 'حالة طارئة' }, { en: 'a suspicious car', ar: 'سيارة مشبوهة' },
          ],
        },
        tags: ['police', 'reports'], d: 1, limit: 4,
      },
      {
        tmpl: 'Where were you at {T}?', arTmpl: 'أين كنت في {T_ar}؟',
        slots: {
          T: [
            { en: 'midnight', ar: 'منتصف الليل' }, { en: 'noon', ar: 'ظهيرة اليوم' },
            { en: 'six in the morning', ar: 'السادسة صباحا' }, { en: 'eleven at night', ar: 'الحادية عشرة ليلا' },
            { en: 'three in the afternoon', ar: 'الثالثة عصرا' }, { en: 'sunrise', ar: 'الشروق' },
          ],
        },
        tags: ['police', 'questions'], d: 2, limit: 6,
      },
      {
        tmpl: 'We will call you if we {V} anything.', arTmpl: 'سنتصل بك إن {V_ar} شيئا.',
        slots: {
          V: [
            { en: 'hear', ar: 'سمعنا' }, { en: 'learn', ar: 'عرفنا' },
            { en: 'need', ar: 'احتجنا' },
          ],
        },
        tags: ['police', 'future'], d: 2, limit: 3,
      },
      {
        tmpl: 'Did {P} {V} last night?', arTmpl: 'هل {V_ar} {P_ar} الليلة الماضية؟',
        slots: {
          P: [
            { en: 'your neighbor', ar: 'جارك' }, { en: 'your brother', ar: 'أخوك' },
            { en: 'the watchman', ar: 'الحارس' }, { en: 'your cousin', ar: 'ابن عمك' },
            { en: 'your friend', ar: 'صديقك' },
          ],
          V: [
            { en: 'see anything', ar: 'رأى شيئا' }, { en: 'hear anything', ar: 'سمع شيئا' },
            { en: 'notice anything', ar: 'لاحظ شيئا' }, { en: 'talk to anyone', ar: 'تحدث مع أحد' },
          ],
        },
        tags: ['police', 'questions'], d: 2, limit: 15,
      },
    ],
    fills: [
      { en: 'I want to report a crime.', ar: 'أريد الإبلاغ عن جريمة.', word: 'report', hint: 'يبلغ' },
      { en: 'Can I see your ID, please?', ar: 'هل يمكنني رؤية هويتك من فضلك؟', word: 'ID' },
      { en: 'I didn\'t do anything wrong.', ar: 'أنا لم أفعل شيئا خاطئا.', word: 'wrong', hint: 'خطأ' },
      { en: 'Please describe the person.', ar: 'صف الشخص من فضلك.', word: 'describe' },
      { en: 'Stay calm and answer the questions slowly.', ar: 'ابق هادئا وأجب عن الأسئلة ببطء.', word: 'calm', hint: 'هادئ' },
      { en: 'Someone broke the window of my shop last night.', ar: 'شخص كسر نافذة متجري الليلة الماضية.', word: 'broke' },
      { en: 'If you see him again, call us immediately.', ar: 'إذا رأيته مرة أخرى، اتصل بنا فورا.', word: 'immediately' },
      { en: 'The officers took my statement at the station.', ar: 'دوّن الضباط أقوالي في المركز.', word: 'statement' },
    ],
    orders: [
      { en: 'Is there a problem, officer?', ar: 'هل توجد مشكلة يا شرطي؟' },
      { en: 'I want to report a crime.', ar: 'أريد الإبلاغ عن جريمة.' },
      { en: 'Where were you at nine o\'clock?', ar: 'أين كنت في الساعة التاسعة؟' },
      { en: 'Please describe the person for me.', ar: 'صف الشخص لي من فضلك.' },
      { en: 'We will call you if we find anything.', ar: 'سنتصل بك إن وجدنا شيئا.' },
      { en: 'The officers were very helpful yesterday.', ar: 'كان الضباط متعاونين جدا أمس.' },
    ],
    mc: [
      { question: 'You see someone break a car window. At the police station you say:', options: ['I want to report a crime.', 'I want to buy a new car.', 'I want to close my shop.', 'I want to go home now.'], answerIndex: 0, ar: 'رأيت شخصا يكسر زجاج سيارة. في مركز الشرطة تقول:' },
      { question: 'A police officer stops you. What does he ask first?', options: ['Can I see your ID, please?', 'Can I see your menu, please?', 'Can I see your homework, please?', 'Can I see your keys, please?'], answerIndex: 0, ar: 'أوقفك شرطي. ماذا يسألك أولا؟' },
      { question: '"Stay calm" means:', options: ['ابق هادئا', 'اركض بسرعة', 'اتصل بأمك', 'اغلق الباب'], answerIndex: 0, ar: 'ما معنى Stay calm؟' },
      { question: '"We will call you if we find anything." When will they call?', options: ['when they find something', 'tomorrow morning always', 'never', 'when you pay money'], answerIndex: 0, ar: 'متى سيتصلون بك؟' },
    ],
  },

  /* ================= lesson 132 — Saying You Feel Unwell ================= */
  {
    num: 132,
    tags: ['health', 'illness'],
    objectives: [
      'Say that you feel sick or tired',
      'Describe simple symptoms and pains',
      'Give and follow simple health advice',
    ],
    grammar: {
      explanation: 'To say you are ill, use feel plus an adjective: "I don\'t feel well", "I feel sick". Talk about symptoms with have: "I have a cold", "She has a sore throat". For body pain, say "My head hurts" or "My back hurts". Give advice with should: "You should see a doctor", and with the imperative: "Get some rest". The negative is should not / shouldn\'t and don\'t: "You shouldn\'t work today", "Don\'t drink cold water". With he and she, add -s: "He feels ill", "She has a fever".',
      explanationAr: 'لتقول إنك مريض استخدم feel مع صفة: I don\'t feel well، I feel sick. وتحدث عن الأعراض بـ have: I have a cold، She has a sore throat. وللألم قل My head hurts أو My back hurts. وانصح بـ should: You should see a doctor، وبفعل الأمر: Get some rest. والنفي بـ shouldn\'t وdon\'t: You shouldn\'t work today، Don\'t drink cold water. ومع he وshe أضف s: He feels ill، She has a fever.',
      examples: [
        { en: 'I don\'t feel well today.', ar: 'لا أشعر أني بخير اليوم.' },
        { en: 'She has a sore throat.', ar: 'هي عندها التهاب في الحلق.' },
        { en: 'You should get some rest.', ar: 'يجب أن تأخذ قسطا من الراحة.' },
      ],
    },
    vocabulary: [
      { word: 'well', meaningAr: 'بخير', example: 'I don\'t feel well today.' },
      { word: 'sick', meaningAr: 'مريض / يشعر بالمرض', example: 'I feel sick, so I stay home.' },
      { word: 'cold', meaningAr: 'زكام', example: 'I think I have a cold.' },
      { word: 'fever', meaningAr: 'حمى', example: 'The baby has a fever.', ipa: 'ˈfiːvər' },
      { word: 'headache', meaningAr: 'صداع', example: 'I have a headache after work.' },
      { word: 'cough', meaningAr: 'كحة', example: 'His cough is very bad at night.' },
      { word: 'sore throat', meaningAr: 'التهاب في الحلق', example: 'Hot tea helps a sore throat.' },
      { word: 'rest', meaningAr: 'راحة', example: 'Get some rest, my friend.' },
      { word: 'medicine', meaningAr: 'دواء', example: 'Take this medicine twice a day.', ipa: 'ˈmedsən' },
      { word: 'pale', meaningAr: 'شاحب', example: 'You look pale today.', ipa: 'peɪl' },
      { word: 'better', meaningAr: 'أفضل / بحال أفضل', example: 'I feel a little better now.' },
      { word: 'hurt', meaningAr: 'يؤلم', example: 'My head hurts a lot.' },
    ],
    scenario: [
      { en: 'I don\'t feel well today.', ar: 'لا أشعر أني بخير اليوم.', d: 1 },
      { en: 'I think I have a cold.', ar: 'أظن أن عندي زكام.', d: 1 },
      { en: 'I need to go home now.', ar: 'أحتاج أن أذهب إلى البيت الآن.', d: 1 },
      { en: 'Get some rest and drink warm tea.', ar: 'خذ قسطا من الراحة واشرب شايا دافئا.', d: 1 },
      { en: 'My head hurts a lot.', ar: 'رأسي يؤلمني كثيرا.', d: 1 },
      { en: 'She has a sore throat and a cough.', ar: 'هي عندها التهاب في الحلق وكحة.', d: 2 },
      { en: 'Are you okay? You look pale.', ar: 'هل أنت بخير؟ تبدو شاحبا.', d: 1 },
      { en: 'No, I am not okay. I feel sick.', ar: 'لا، لست بخير. أشعر بالمرض.', d: 1 },
      { en: 'You should see a doctor tomorrow.', ar: 'يجب أن تراجع طبيبا غدا.', d: 2 },
      { en: 'Do you have a fever?', ar: 'هل عندك حمى؟', d: 1 },
      { en: 'We are tired and we want to go home.', ar: 'نحن متعبون ونريد الذهاب إلى البيت.', d: 2 },
      { en: 'He doesn\'t feel well, so he stays in bed.', ar: 'هو لا يشعر أنه بخير، لذلك يبقى في السرير.', d: 2 },
      { en: 'Take this medicine twice a day.', ar: 'خذ هذا الدواء مرتين في اليوم.', d: 2 },
      { en: 'How do you feel now?', ar: 'كيف تشعر الآن؟', d: 1 },
      { en: 'I feel a little better, thank you.', ar: 'أشعر بتحسن بسيط، شكرا لك.', d: 1 },
      { en: 'Go home and sleep early tonight.', ar: 'اذهب إلى البيت ونم مبكرا الليلة.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I don\'t feel well. I think I have {SY}.', arTmpl: 'لا أشعر أني بخير. أظن أن عندي {SY_ar}.',
        slots: {
          SY: [
            B.SYMPTOMS[0], B.SYMPTOMS[1], B.SYMPTOMS[2], B.SYMPTOMS[3],
            B.SYMPTOMS[4], B.SYMPTOMS[7], B.SYMPTOMS[6], B.SYMPTOMS[5],
          ],
        },
        tags: ['health', 'symptoms'], d: 1, limit: 8,
      },
      {
        tmpl: 'You should {V} today.', arTmpl: 'يجب أن {V_ar} اليوم.',
        slots: {
          V: [
            { en: 'rest', ar: 'ترتاح' }, { en: 'sleep early', ar: 'تنام مبكرا' },
            { en: 'drink warm tea', ar: 'تشرب شايا دافئا' }, { en: 'see a doctor', ar: 'تراجع طبيبا' },
            { en: 'stay in bed', ar: 'تبقى في السرير' }, { en: 'drink more water', ar: 'تشرب ماء أكثر' },
            { en: 'eat something light', ar: 'تأكل شيئا خفيفا' },
          ],
        },
        tags: ['health', 'advice'], d: 1, limit: 7,
      },
      {
        tmpl: 'Does {P} have {SY}?', arTmpl: 'هل لدى {P_ar} {SY_ar}؟',
        slots: {
          P: [
            { en: 'your son', ar: 'ابنك' }, { en: 'your daughter', ar: 'ابنتك' },
            { en: 'your brother', ar: 'أخوك' }, { en: 'your sister', ar: 'أختك' },
            { en: 'your father', ar: 'أبوك' }, { en: 'your mother', ar: 'أمك' },
          ],
          SY: [B.SYMPTOMS[0], B.SYMPTOMS[1], B.SYMPTOMS[2], B.SYMPTOMS[5]],
        },
        tags: ['health', 'family'], d: 2, limit: 16,
      },
      {
        tmpl: '{S} {FEEL} today.', arTmpl: '{S_ar} {FEEL_ar} اليوم.',
        slots: {
          S: [
            { en: 'He', ar: 'هو', agr: 'he' }, { en: 'She', ar: 'هي', agr: 'she' },
          ],
          E: [B.EMOTIONS.tired, B.EMOTIONS.sad, B.EMOTIONS.worried, B.EMOTIONS.nervous, B.EMOTIONS.scared, B.EMOTIONS.calm],
          FEEL: (x) => [{ en: x.E.en, ar: x.S.agr === 'she' ? x.E.f : x.E.m }],
        },
        tags: ['health', 'feelings'], d: 1, limit: 12,
      },
    ],
    fills: [
      { en: 'I don\'t feel well today.', ar: 'لا أشعر أني بخير اليوم.', word: 'well', hint: 'بخير' },
      { en: 'I think I have a cold.', ar: 'أظن أن عندي زكام.', word: 'cold' },
      { en: 'I need to go home now.', ar: 'أحتاج أن أذهب إلى البيت الآن.', word: 'need' },
      { en: 'My head hurts a lot.', ar: 'رأسي يؤلمني كثيرا.', word: 'hurts' },
      { en: 'Are you okay? You look pale.', ar: 'هل أنت بخير؟ تبدو شاحبا.', word: 'pale' },
      { en: 'You should see a doctor tomorrow.', ar: 'يجب أن تراجع طبيبا غدا.', word: 'doctor' },
      { en: 'Take this medicine twice a day.', ar: 'خذ هذا الدواء مرتين في اليوم.', word: 'medicine' },
      { en: 'She has a sore throat and a cough.', ar: 'هي عندها التهاب في الحلق وكحة.', word: 'throat' },
    ],
    orders: [
      { en: 'I don\'t feel well today.', ar: 'لا أشعر أني بخير اليوم.' },
      { en: 'I think I have a cold.', ar: 'أظن أن عندي زكام.' },
      { en: 'I need to go home now.', ar: 'أحتاج أن أذهب إلى البيت الآن.' },
      { en: 'Get some rest, my friend.', ar: 'خذ قسطا من الراحة يا صديقي.' },
      { en: 'My head hurts a lot.', ar: 'رأسي يؤلمني كثيرا.' },
      { en: 'Does your son have a fever?', ar: 'هل لدى ابنك حمى؟' },
    ],
    mc: [
      { question: 'You feel sick at work. What do you say to your manager?', options: ['I don\'t feel well. I need to go home.', 'I want to work more hours.', 'Let us start the meeting.', 'Can you bring my laptop?'], answerIndex: 0, ar: 'تشعر بالمرض في العمل. ماذا تقول لمديرك؟' },
      { question: '"Get some rest" means:', options: ['خذ قسطا من الراحة', 'اشرب قهوة', 'اذهب إلى العمل', 'اتصل بالشرطة'], answerIndex: 0, ar: 'ما معنى Get some rest؟' },
      { question: 'Which one is a symptom?', options: ['a sore throat', 'a new phone', 'a bus ticket', 'a blue shirt'], answerIndex: 0, ar: 'أي مما يلي عرض مرضي؟' },
      { question: 'Your friend has a cold. What do you say?', options: ['Get some rest and drink warm tea.', 'Run five kilometers now.', 'Eat ice cream at night.', 'Don\'t sleep this week.'], answerIndex: 0, ar: 'صديقك عنده زكام. ماذا تقول له؟' },
    ],
  },

  /* ================= lesson 133 — Mental Health and Feelings ================= */
  {
    num: 133,
    tags: ['mental-health', 'feelings'],
    objectives: [
      'Talk about stress, anxiety and low moods',
      'Use the present perfect with for and since',
      'Give supportive advice with if and should',
    ],
    grammar: {
      explanation: 'Use the present perfect (have been) for feelings that started in the past and continue now: "I have been stressed for two weeks", "He has been worried since Monday". Use for with a time period (for two weeks) and since with a starting point (since Monday). Give advice with should: "You should take a break". Use an if-clause for gentle suggestions: "If you feel sad, talk to someone". Reassure people with "You are not alone" and encourage them: "Talking helps", "Take a deep breath".',
      explanationAr: 'استخدم المضارع التام (have been) لمشاعر بدأت في الماضي وما زالت مستمرة: I have been stressed for two weeks، He has been worried since Monday. وتأتي for مع مدة زمنية (for two weeks) وsince مع نقطة بداية (since Monday). وانصح بـ should: You should take a break. واستخدم جملة if للنصح اللطيف: If you feel sad, talk to someone. وطمئن من حولك بـ You are not alone وشجعهم: Talking helps، Take a deep breath.',
      examples: [
        { en: 'I have been stressed since Monday.', ar: 'أنا متوتر منذ الاثنين.' },
        { en: 'If you feel anxious, take a deep breath.', ar: 'إذا شعرت بالقلق، خذ نفسا عميقا.' },
        { en: 'Talking about your feelings helps.', ar: 'الحديث عن مشاعرك يساعد.' },
      ],
    },
    vocabulary: [
      { word: 'stressed', meaningAr: 'متوتر / تحت الضغط', example: 'I have been stressed for two weeks.' },
      { word: 'anxious', meaningAr: 'قلق', example: 'She feels anxious before every exam.', ipa: 'ˈæŋkʃəs' },
      { word: 'lonely', meaningAr: 'وحيد / يشعر بالوحدة', example: 'Old people often feel lonely.' },
      { word: 'alone', meaningAr: 'وحده / بمفرده', example: 'You are not alone in this.', ipa: 'əˈloʊn' },
      { word: 'break', meaningAr: 'استراحة', example: 'You should take a break.', ipa: 'breɪk' },
      { word: 'breathe', meaningAr: 'يتنفس', example: 'Breathe slowly and relax.' },
      { word: 'mood', meaningAr: 'مزاج', example: 'Walking improves my mood.' },
      { word: 'mind', meaningAr: 'عقل / ذهن', example: 'Rest is good for the mind.' },
      { word: 'support', meaningAr: 'يدعم / دعم', example: 'My family supports me.' },
      { word: 'relax', meaningAr: 'يسترخي / يستريح', example: 'Music helps me relax.' },
      { word: 'worried', meaningAr: 'قلقان', example: 'He has been worried about his family.' },
      { word: 'mental health', meaningAr: 'الصحة النفسية', example: 'Sleep is important for mental health.' },
    ],
    scenario: [
      { en: 'I can\'t sleep because of work.', ar: 'لا أستطيع النوم بسبب العمل.', d: 1 },
      { en: 'I have been stressed for two weeks.', ar: 'أنا متوتر منذ أسبوعين.', d: 2 },
      { en: 'You should take a break and relax.', ar: 'يجب أن تأخذ استراحة تسترخي فيها.', d: 1 },
      { en: 'Talking to a friend helps a lot.', ar: 'الحديث مع صديق يساعد كثيرا.', d: 1 },
      { en: 'You are not alone in this.', ar: 'أنت لست وحدك في هذا.', d: 1 },
      { en: 'She feels anxious before every exam.', ar: 'هي تشعر بالقلق قبل كل امتحان.', d: 2 },
      { en: 'Why don\'t you talk to someone?', ar: 'لمذا لا تتحدث مع أحد؟', d: 1 },
      { en: 'If you feel sad for many days, talk to a doctor.', ar: 'إذا شعرت بالحزن أياما عديدة، تحدث إلى طبيب.', d: 3 },
      { en: 'I feel better when I go for a walk.', ar: 'أشعر بتحسن عندما أخرج في نزهة.', d: 2 },
      { en: 'Deep breathing helps me stay calm.', ar: 'التنفس العميق يساعدني على البقاء هادئا.', d: 2 },
      { en: 'He has been worried about his family lately.', ar: 'هو قلقان على عائلته مؤخرا.', d: 3 },
      { en: 'Don\'t keep your feelings inside.', ar: 'لا تحبس مشاعرك في داخلك.', d: 1 },
      { en: 'We all have difficult days sometimes.', ar: 'كلنا نمر بأيام صعبة أحيانا.', d: 2 },
      { en: 'Is something wrong? You seem quiet today.', ar: 'هل هناك شيء خاطئ؟ تبدو هادئا اليوم.', d: 1 },
      { en: 'Yes, I can\'t sleep well these days.', ar: 'نعم، لا أنام جيدا هذه الأيام.', d: 1 },
      { en: 'You can call me any time you need to talk.', ar: 'يمكنك الاتصال بي في أي وقت تحتاج فيه إلى الحديث.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I can\'t sleep because of {N}.', arTmpl: 'لا أستطيع النوم بسبب {N_ar}.',
        slots: {
          N: [
            { en: 'my exams', ar: 'اختباراتي' }, { en: 'the noise', ar: 'الضوضاء' },
            { en: 'my problems', ar: 'مشاكلي' }, { en: 'the news', ar: 'الأخبار' },
            { en: 'my phone', ar: 'هاتفي' },
          ],
        },
        tags: ['mental-health', 'sleep'], d: 1, limit: 5,
      },
      {
        tmpl: 'I have been {E} {T}.', arTmpl: 'أنا {E_ar} {T_ar}.',
        slots: {
          E: [
            { en: 'stressed', ar: 'متوتر' }, { en: 'anxious', ar: 'قلق' },
            { en: 'worried', ar: 'قلقان' }, { en: 'tired', ar: 'متعب' },
          ],
          T: [
            { en: 'since Monday', ar: 'منذ الاثنين' }, { en: 'all week', ar: 'طوال الأسبوع' },
            { en: 'lately', ar: 'مؤخرا' }, { en: 'for many days', ar: 'أياما عديدة' },
          ],
        },
        tags: ['mental-health', 'present-perfect'], d: 2, limit: 12,
      },
      {
        tmpl: 'If you feel {E}, {A}.', arTmpl: 'إذا شعرت {E_ar}، {A_ar}.',
        slots: {
          E: [
            { en: 'sad', ar: 'بالحزن' }, { en: 'anxious', ar: 'بالقلق' },
            { en: 'stressed', ar: 'بالتوتر' }, { en: 'lonely', ar: 'بالوحدة' },
          ],
          A: [
            { en: 'talk to a friend', ar: 'فتحدث إلى صديق' }, { en: 'take a break', ar: 'فخذ قسطا من الراحة' },
            { en: 'go for a walk', ar: 'فاخرج في نزهة' }, { en: 'call me', ar: 'فاتصل بي' },
          ],
        },
        tags: ['mental-health', 'if-clauses'], d: 2, limit: 12,
      },
      {
        tmpl: 'Talking to {P} helps.', arTmpl: 'الحديث مع {P_ar} يساعد.',
        slots: {
          P: [
            { en: 'a friend', ar: 'صديق' }, { en: 'my family', ar: 'عائلتي' },
            { en: 'a doctor', ar: 'طبيب' }, { en: 'a teacher', ar: 'معلم' },
            { en: 'a colleague', ar: 'زميل' },
          ],
        },
        tags: ['mental-health', 'support'], d: 1, limit: 5,
      },
    ],
    fills: [
      { en: 'I can\'t sleep because of work.', ar: 'لا أستطيع النوم بسبب العمل.', word: 'sleep' },
      { en: 'You should take a break and relax.', ar: 'يجب أن تأخذ استراحة تسترخي فيها.', word: 'break' },
      { en: 'Talking to a friend helps a lot.', ar: 'الحديث مع صديق يساعد كثيرا.', word: 'helps' },
      { en: 'You are not alone in this.', ar: 'أنت لست وحدك في هذا.', word: 'alone' },
      { en: 'She feels anxious before every exam.', ar: 'هي تشعر بالقلق قبل كل امتحان.', word: 'anxious' },
      { en: 'Don\'t keep your feelings inside.', ar: 'لا تحبس مشاعرك في داخلك.', word: 'inside' },
      { en: 'I have been stressed for two weeks.', ar: 'أنا متوتر منذ أسبوعين.', word: 'stressed' },
      { en: 'Deep breathing helps me stay calm.', ar: 'التنفس العميق يساعدني على البقاء هادئا.', word: 'breathing' },
    ],
    orders: [
      { en: 'I can\'t sleep because of my work.', ar: 'لا أستطيع النوم بسبب عملي.' },
      { en: 'You should take a short break.', ar: 'يجب أن تأخذ استراحة قصيرة.' },
      { en: 'Talking to a friend really helps.', ar: 'الحديث مع صديق يساعد حقا.' },
      { en: 'You are not alone in this.', ar: 'أنت لست وحدك في هذا.' },
      { en: 'If you feel sad, talk to someone.', ar: 'إذا شعرت بالحزن، تحدث إلى أحد.' },
      { en: 'She has been worried about her family lately.', ar: 'هي قلقة على عائلتها مؤخرا.' },
    ],
    mc: [
      { question: '"I have been stressed for two weeks." When did the stress start?', options: ['two weeks ago and it continues', 'it finished two weeks ago', 'next week', 'yesterday only'], answerIndex: 0, ar: 'متى بدأ التوتر؟' },
      { question: 'Which sentence gives support?', options: ['You are not alone in this.', 'Your problems are funny.', 'Stop talking to me.', 'I don\'t care about you.'], answerIndex: 0, ar: 'أي جملة تقدم دعما؟' },
      { question: '"Talking to a friend helps a lot." means:', options: ['الحديث مع صديق يساعد كثيرا', 'الصراخ مع صديق ممنوع', 'صديقي لا يساعدني', 'أحتاج صديقا جديدا'], answerIndex: 0, ar: 'ما معنى الجملة؟' },
      { question: 'You can\'t sleep because of exams. Good advice is:', options: ['Take a break and study with short rests.', 'Drink three coffees at midnight.', 'Study for twenty-four hours.', 'Never sleep again.'], answerIndex: 0, ar: 'لا تستطيع النوم بسبب الاختبارات. ما النصح الجيد؟' },
    ],
  },

  /* ================= lesson 134 — Healthy Habits ================= */
  {
    num: 134,
    tags: ['health', 'habits'],
    objectives: [
      'Give advice about healthy habits',
      'Use imperatives and don\'t for do\'s and don\'ts',
      'Talk about how often you do healthy things',
    ],
    grammar: {
      explanation: 'We give advice about habits with the imperative: "Drink more water", "Eat vegetables with every meal". The negative imperative uses don\'t: "Don\'t smoke", "Don\'t eat too much sugar". To say how often, use every day, every morning, twice a day or three times a week: "I walk every morning", "She drinks eight glasses of water a day". For questions about frequency, use "How often ...?" or "Do you ... every week?". Remember: with he and she the habit verb takes -s: "He walks to work".',
      explanationAr: 'نقدم النصح عن العادات بفعل الأمر: Drink more water، Eat vegetables with every meal. والنفي بـ don\'t: Don\'t smoke، Don\'t eat too much sugar. وللدلالة على التكرار استخدم every day وevery morning وtwice a day أو three times a week: I walk every morning، She drinks eight glasses of water a day. وللسؤال عن التكرار قل How often أو Do you ... every week؟ وتذكر: مع he وshe يأخذ فعل العادة s: He walks to work.',
      examples: [
        { en: 'Eat vegetables with every meal.', ar: 'كُل الخضار مع كل وجبة.' },
        { en: 'Don\'t smoke, it is bad for you.', ar: 'لا تدخن، فهذا سيئ لك.' },
        { en: 'How often do you walk in the park?', ar: 'كم مرة تتمشى في الحديقة؟' },
      ],
    },
    vocabulary: [
      { word: 'habit', meaningAr: 'عادة', example: 'Healthy habits take time.', ipa: 'ˈhæbɪt' },
      { word: 'healthy', meaningAr: 'صحي', example: 'Fruits and vegetables are healthy.' },
      { word: 'water', meaningAr: 'ماء', example: 'Drink more water every day.' },
      { word: 'vegetables', meaningAr: 'خضار', example: 'Eat vegetables with every meal.', ipa: 'ˈvedʒtəbəlz' },
      { word: 'smoke', meaningAr: 'يدخن', example: 'My father doesn\'t smoke anymore.' },
      { word: 'exercise', meaningAr: 'يتمرن / تمارين', example: 'Do you exercise every week?', ipa: 'ˈeksərsaɪz' },
      { word: 'walk', meaningAr: 'يمشي / يتمشى', example: 'I walk every morning before work.' },
      { word: 'wash', meaningAr: 'يغسل', example: 'Wash your hands before you eat.' },
      { word: 'sugar', meaningAr: 'سكر', example: 'I eat less sugar now.' },
      { word: 'body', meaningAr: 'جسم', example: 'Good food is good for your body.' },
      { word: 'stairs', meaningAr: 'السلالم', example: 'Take the stairs, not the elevator.' },
      { word: 'twice', meaningAr: 'مرتين', example: 'Brush your teeth twice a day.' },
    ],
    scenario: [
      { en: 'Drink more water every day.', ar: 'اشرب ماء أكثر كل يوم.', d: 1 },
      { en: 'Eat vegetables with every meal.', ar: 'كُل الخضار مع كل وجبة.', d: 1 },
      { en: 'Don\'t smoke, it is bad for you.', ar: 'لا تدخن، فهذا سيئ لك.', d: 1 },
      { en: 'I walk every morning before work.', ar: 'أتمشى كل صباح قبل العمل.', d: 1 },
      { en: 'Wash your hands before you eat.', ar: 'اغسل يديك قبل أن تأكل.', d: 1 },
      { en: 'We go to bed early on weekdays.', ar: 'نذهب إلى الفراش مبكرا في أيام الأسبوع.', d: 2 },
      { en: 'She drinks eight glasses of water a day.', ar: 'هي تشرب ثماني أكواب من الماء يوميا.', d: 2 },
      { en: 'Do you walk every day?', ar: 'هل تتمشى كل يوم؟', d: 1 },
      { en: 'I don\'t drink soft drinks.', ar: 'أنا لا أشرب المشروبات الغازية.', d: 1 },
      { en: 'Try to sleep eight hours every night.', ar: 'حاول أن تنام ثماني ساعات كل ليلة.', d: 2 },
      { en: 'My father doesn\'t smoke anymore.', ar: 'أبي لم يعد يدخن.', d: 2 },
      { en: 'Healthy habits take time.', ar: 'العادات الصحية تحتاج وقتا.', d: 2 },
      { en: 'Fruits and vegetables are good for your body.', ar: 'الفواكه والخضار جيدة لجسمك.', d: 1 },
      { en: 'How often do you walk in the park?', ar: 'كم مرة تتمشى في الحديقة؟', d: 2 },
      { en: 'Yes, I walk for thirty minutes.', ar: 'نعم، أتمشى ثلاثين دقيقة.', d: 1 },
      { en: 'Start with one small habit today.', ar: 'ابدأ بعادة صغيرة واحدة اليوم.', d: 2 },
      { en: 'On hot days, carry a bottle of water.', ar: 'في الأيام الحارة، احمل قارورة ماء.', d: 2 },
    ],
    patterns: [
      {
        tmpl: '{V} every day.', arTmpl: '{V_ar} كل يوم.',
        slots: {
          V: [
            { en: 'Drink more water', ar: 'اشرب ماء أكثر' }, { en: 'Eat more vegetables', ar: 'كُل مزيدا من الخضار' },
            { en: 'Walk to work', ar: 'امشِ إلى العمل' }, { en: 'Take the stairs', ar: 'استخدم السلالم' },
            { en: 'Eat breakfast', ar: 'تناول الفطور' },
          ],
        },
        tags: ['habits', 'imperative'], d: 1, limit: 5,
      },
      {
        tmpl: 'Do you {V} every week?', arTmpl: 'هل {V_ar} كل أسبوع؟',
        slots: {
          V: [
            { en: 'exercise', ar: 'تتمرن' }, { en: 'swim', ar: 'تسبح' },
            { en: 'cook at home', ar: 'تطبخ في البيت' }, { en: 'eat fruit', ar: 'تأكل الفاكهة' },
            { en: 'stretch', ar: 'تتمدد' }, { en: 'walk in the park', ar: 'تتمشى في الحديقة' },
          ],
        },
        tags: ['habits', 'questions'], d: 2, limit: 6,
      },
      {
        tmpl: '{F} {G} good for your health.', arTmpl: '{F_ar} {G_ar}.',
        slots: {
          F: [
            { en: 'Fruits and vegetables', ar: 'الفواكه والخضار', be: 'are', g: 'f' },
            { en: 'Water', ar: 'الماء', be: 'is', g: 'm' },
            { en: 'Walking', ar: 'المشي', be: 'is', g: 'm' },
            { en: 'Sleep', ar: 'النوم', be: 'is', g: 'm' },
            { en: 'Smoking', ar: 'التدخين', be: 'is', g: 'm' },
          ],
          G: (x) => [{ en: x.F.be, ar: x.F.g === 'f' ? 'مفيدة لصحتك' : 'مفيد لصحتك' }],
        },
        tags: ['habits', 'present-simple'], d: 2, limit: 5,
      },
      {
        tmpl: 'Don\'t {V}.', arTmpl: 'لا {V_ar}.',
        slots: {
          V: [
            { en: 'smoke', ar: 'تدخن' }, { en: 'eat too much sugar', ar: 'تأكل الكثير من السكر' },
            { en: 'stay up late', ar: 'تسهر حتى وقت متأخر' }, { en: 'skip breakfast', ar: 'تتخطى وجبة الفطور' },
            { en: 'use your phone in bed', ar: 'تستخدم هاتفك في السرير' },
          ],
        },
        tags: ['habits', 'negative'], d: 1, limit: 5,
      },
      {
        tmpl: '{S} {V} every morning.', arTmpl: '{S_ar} {V_ar} كل صباح.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [
            { en: B.enPresent('walk', x.S.agr), ar: B.arPresent('walk', x.S.agr) },
            { en: B.enPresent('run', x.S.agr), ar: B.arPresent('run', x.S.agr) },
            { en: B.enPresent('drink', x.S.agr), ar: B.arPresent('drink', x.S.agr) },
            { en: B.enPresent('cook', x.S.agr), ar: B.arPresent('cook', x.S.agr) },
          ],
        },
        tags: ['habits', 'present-simple'], d: 2, limit: 16,
      },
    ],
    fills: [
      { en: 'Drink more water every day.', ar: 'اشرب ماء أكثر كل يوم.', word: 'water' },
      { en: 'Eat vegetables with every meal.', ar: 'كُل الخضار مع كل وجبة.', word: 'vegetables' },
      { en: 'Don\'t smoke, it is bad for you.', ar: 'لا تدخن، فهذا سيئ لك.', word: 'smoke' },
      { en: 'Wash your hands before you eat.', ar: 'اغسل يديك قبل أن تأكل.', word: 'Wash' },
      { en: 'I walk every morning before work.', ar: 'أتمشى كل صباح قبل العمل.', word: 'walk' },
      { en: 'She drinks eight glasses of water a day.', ar: 'هي تشرب ثماني أكواب من الماء يوميا.', word: 'glasses' },
      { en: 'Try to sleep eight hours every night.', ar: 'حاول أن تنام ثماني ساعات كل ليلة.', word: 'Try' },
      { en: 'Healthy habits take time.', ar: 'العادات الصحية تحتاج وقتا.', word: 'habits' },
    ],
    orders: [
      { en: 'Drink more water every day.', ar: 'اشرب ماء أكثر كل يوم.' },
      { en: 'Eat vegetables with every meal.', ar: 'كُل الخضار مع كل وجبة.' },
      { en: 'I walk every morning before work.', ar: 'أتمشى كل صباح قبل العمل.' },
      { en: 'Don\'t smoke, it is bad for you.', ar: 'لا تدخن، فهذا سيئ لك.' },
      { en: 'Try to sleep eight hours every night.', ar: 'حاول أن تنام ثماني ساعات كل ليلة.' },
      { en: 'Wash your hands before dinner, please.', ar: 'اغسل يديك قبل العشاء من فضلك.' },
    ],
    mc: [
      { question: 'Which one is a healthy habit?', options: ['Drinking more water', 'Smoking every day', 'Staying up late', 'Eating candy for dinner'], answerIndex: 0, ar: 'أيها عادة صحية؟' },
      { question: '"Wash your hands before you eat." When do you wash?', options: ['before eating', 'after sleeping', 'never', 'only on Friday'], answerIndex: 0, ar: 'متى تغسل يديك؟' },
      { question: '"Don\'t smoke." is:', options: ['advice with a negative imperative', 'a question', 'a past action', 'a polite invitation'], answerIndex: 0, ar: 'جملة Don\'t smoke هي:' },
      { question: '"She drinks eight glasses of water a day." How much water?', options: ['eight glasses a day', 'eight bottles a week', 'no water', 'eight cups of coffee'], answerIndex: 0, ar: 'كم تشرب من الماء؟' },
    ],
  },
];
