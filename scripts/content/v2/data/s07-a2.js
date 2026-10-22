/* ============================================================
   v2 section data — s07-a2.js
   Relationships & Social Communication · lessons 150–152
   (accepting and declining invitations, making plans,
   social apologies)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 150 — Accepting and Declining Invitations ================= */
  {
    num: 150,
    tags: ['invitations', 'accepting', 'declining'],
    objectives: [
      'Accept an invitation warmly',
      'Decline politely with a short reason',
      'Suggest another day or time',
    ],
    grammar: {
      explanation: 'To accept an invitation happily, say "I would love to!" or "I would love to come". To decline politely, say "Sorry, I can not make it" and give a short reason: "I have plans that day" or "Something came up". Soften the refusal with "Maybe next time" or "Thanks for asking, anyway". To suggest another day, ask "Can we meet another day?" or "How about Saturday morning?". Be honest and kind — a clear answer is better than maybe.',
      explanationAr: 'لقبل الدعوة بفرح قل I would love to! أو I would love to come. وللرفض بأدب قل Sorry, I can not make it مع سبب قصير: I have plans that day أو Something came up. وخفف الرفض بـ Maybe next time أو Thanks for asking, anyway. ولاقتراح يوم آخر اسأل Can we meet another day؟ أو How about Saturday morning؟. كن صادقا ولطيفا، فالجواب الواضح أفضل من الربما.',
      examples: [
        { en: 'I would love to come to your party!', ar: 'أود أن آتي إلى حفلتك!' },
        { en: 'Sorry, I can not make it tomorrow.', ar: 'آسف، لا أستطيع الحضور غدا.' },
        { en: 'Thanks for asking, maybe next week.', ar: 'شكرا على السؤال، ربما الأسبوع القادم.' },
      ],
    },
    vocabulary: [
      { word: 'accept', meaningAr: 'يقبل', example: 'I accept your invitation.' },
      { word: 'decline', meaningAr: 'يرفض بلطف', example: 'I decline politely.' },
      { word: 'make it', meaningAr: 'يستطيع الحضور', example: 'Sorry, I can not make it.' },
      { word: 'unfortunately', meaningAr: 'للأسف', example: 'Unfortunately, I am busy.' },
      { word: 'next time', meaningAr: 'المرة القادمة', example: 'Maybe next time, my friend.' },
      { word: 'another day', meaningAr: 'يوم آخر', example: 'Can we meet another day?' },
      { word: 'kind', meaningAr: 'لطيف', example: 'That is very kind of you.' },
      { word: 'free', meaningAr: 'متفرغ', example: 'Are you free on Saturday?' },
      { word: 'busy', meaningAr: 'مشغول', example: 'I am busy that day.' },
      { word: 'enjoy', meaningAr: 'يستمتع', example: 'Enjoy the party!' },
      { word: 'away', meaningAr: 'بعيد', example: 'I will be away tomorrow.' },
      { word: 'plans', meaningAr: 'خطط', example: 'I have plans that day.' },
    ],
    scenario: [
      { en: "I'd love to!", ar: 'أود ذلك كثيرا!', d: 1 },
      { en: 'Thank you for the invitation.', ar: 'شكرا على الدعوة.', d: 1 },
      { en: "Sorry, I can't make it that night.", ar: 'آسف، لا أستطيع الحضور تلك الليلة.', d: 2 },
      { en: 'I have plans with my family that day.', ar: 'لدي خطط مع عائلتي في ذلك اليوم.', d: 2 },
      { en: 'Maybe next time.', ar: 'ربما في المرة القادمة.', d: 1 },
      { en: 'Thanks for asking, anyway.', ar: 'شكرا على السؤال على أي حال.', d: 2 },
      { en: 'Can we meet another day?', ar: 'هل يمكن أن نتقابل في يوم آخر؟', d: 1 },
      { en: 'How about Saturday morning?', ar: 'ما رأيك بصباح السبت؟', d: 1 },
      { en: 'Does Saturday work for you?', ar: 'هل يناسبك السبت؟', d: 1 },
      { en: 'I am sorry, but I will be away.', ar: 'آسف، لكنني سأكون بعيدا.', d: 2 },
      { en: 'My cousin got married last month.', ar: 'تزوج ابن عمي الشهر الماضي.', d: 3 },
      { en: 'We are not free this weekend.', ar: 'نحن لسنا أحرارا في عطلة نهاية هذا الأسبوع.', d: 2 },
      { en: 'She would love to join us.', ar: 'تود أن تنضم إلينا.', d: 2 },
      { en: 'They can not come tonight.', ar: 'هم لا يستطيعون المجيء الليلة.', d: 2 },
      { en: 'That is very kind of you.', ar: 'هذا لطف كبير منك.', d: 2 },
      { en: 'Is next week better for you?', ar: 'هل الأسبوع القادم أفضل لك؟', d: 2 },
      { en: 'I will call you when I am free.', ar: 'سأتصل بك عندما أكون حرا.', d: 3 },
      { en: 'Enjoy the party without me.', ar: 'استمتع بالحفلة بدوني.', d: 3 },
    ],
    patterns: [
      {
        tmpl: "I'd love to {V}.", arTmpl: 'أود {V_ar} كثيرا.',
        slots: {
          V: [
            { en: 'come to the party', ar: 'أن آتي إلى الحفلة' }, { en: 'join you', ar: 'أن أنضم إليكم' },
            { en: 'see your new home', ar: 'أن أرى منزلكم الجديد' }, { en: 'come with my wife', ar: 'أن آتي مع زوجتي' },
            { en: 'visit you on Saturday', ar: 'أن أزوركم يوم السبت' }, { en: 'bring a dessert', ar: 'أن أحضر حلوى' },
          ],
        },
        tags: ['invitations', 'accepting'], d: 1, limit: 6,
      },
      {
        tmpl: "Sorry, I can't make it {T}.", arTmpl: 'آسف، لا أستطيع الحضور {T_ar}.',
        slots: {
          T: [
            { en: 'on Friday', ar: 'يوم الجمعة' }, { en: 'tomorrow', ar: 'غدا' },
            { en: 'that evening', ar: 'في ذلك المساء' }, { en: 'on Sunday', ar: 'يوم الأحد' },
            { en: 'next week', ar: 'الأسبوع القادم' }, { en: 'in the morning', ar: 'في الصباح' },
            { en: 'on Thursday', ar: 'يوم الخميس' },
          ],
        },
        tags: ['invitations', 'declining'], d: 2, limit: 7,
      },
      {
        tmpl: 'How about {T}?', arTmpl: 'ما رأيك ب{T_ar}؟',
        slots: {
          T: [
            { en: 'Friday evening', ar: 'مساء الجمعة' }, { en: 'next week', ar: 'الأسبوع القادم' },
            { en: 'another day', ar: 'يوم آخر' }, { en: 'Sunday', ar: 'يوم الأحد' },
            { en: 'this evening', ar: 'هذا المساء' }, { en: 'Saturday', ar: 'السبت' },
          ],
        },
        tags: ['invitations', 'questions'], d: 2, limit: 6,
      },
      {
        tmpl: '{S} can not come.', arTmpl: '{S_ar} لا يستطيعون المجيء.',
        slots: { S: B.PEOPLE_PLURAL },
        tags: ['invitations', 'declining', 'plural'], d: 2, limit: 8,
      },
      {
        tmpl: 'I have plans {T}.', arTmpl: 'لدي خطط {T_ar}.',
        slots: {
          T: [
            { en: 'that day', ar: 'في ذلك اليوم' }, { en: 'on Saturday', ar: 'يوم السبت' },
            { en: 'that evening', ar: 'في ذلك المساء' }, { en: 'this weekend', ar: 'في عطلة نهاية هذا الأسبوع' },
            { en: 'after work', ar: 'بعد العمل' },
          ],
        },
        tags: ['invitations', 'declining'], d: 2, limit: 5,
      },
    ],
    fills: [
      { en: "I'd love to!", ar: 'أود ذلك كثيرا!', word: 'love' },
      { en: 'Thank you for the invitation.', ar: 'شكرا على الدعوة.', word: 'invitation', hint: 'دعوة' },
      { en: "Sorry, I can't make it that night.", ar: 'آسف، لا أستطيع الحضور تلك الليلة.', word: 'make', hint: 'يستطيع الحضور' },
      { en: 'Maybe next time.', ar: 'ربما في المرة القادمة.', word: 'next' },
      { en: 'Thanks for asking, anyway.', ar: 'شكرا على السؤال على أي حال.', word: 'asking' },
      { en: 'How about Saturday morning?', ar: 'ما رأيك بصباح السبت؟', word: 'morning', hint: 'وقت' },
      { en: 'We are not free this weekend.', ar: 'نحن لسنا أحرارا في عطلة نهاية هذا الأسبوع.', word: 'free', hint: 'متفرغ' },
      { en: 'That is very kind of you.', ar: 'هذا لطف كبير منك.', word: 'kind', hint: 'لطيف' },
    ],
    orders: [
      { en: 'I have plans with my family that day.', ar: 'لدي خطط مع عائلتي في ذلك اليوم.' },
      { en: 'Can we meet another day, please?', ar: 'هل يمكن أن نتقابل في يوم آخر من فضلك؟' },
      { en: 'I am sorry, but I will be away.', ar: 'آسف، لكنني سأكون بعيدا.' },
      { en: 'She would love to join us for dinner.', ar: 'تود أن تنضم إلينا على العشاء.' },
      { en: 'Next week is better for us all.', ar: 'الأسبوع القادم أفضل لنا جميعا.' },
      { en: 'Enjoy the party without me.', ar: 'استمتع بالحفلة بدوني.' },
    ],
    mc: [
      { question: 'You accept an invitation happily. You say:', options: ["I'd love to!", "Sorry, I can't make it.", 'Maybe next time.', 'Go without me.'], answerIndex: 0, ar: 'قبلت الدعوة بفرح، فقلت:' },
      { question: 'You decline politely because you are busy:', options: ["Sorry, I can't make it.", 'I hate parties.', 'Your food is bad.', 'Call me never.'], answerIndex: 0, ar: 'اعتذرت بأدب لأنك مشغول:' },
      { question: '"Maybe next time" means:', options: ['ربما في المرة القادمة', 'الآن وبعد', 'أبدا في حياتي', 'كل يوم جمعة'], answerIndex: 0, ar: 'ما معنى Maybe next time؟' },
      { question: 'You want another day. You ask:', options: ['Can we meet another day?', 'Why me again?', 'Where is my money?', 'Who are you?'], answerIndex: 0, ar: 'تريد يوما آخر، فتسأل:' },
    ],
  },

  /* ================= lesson 151 — Making Plans ================= */
  {
    num: 151,
    tags: ['plans', 'social', 'time'],
    objectives: [
      'Ask about a friend\'s free time',
      'Suggest a day, time and place',
      'Confirm a plan politely',
    ],
    grammar: {
      explanation: 'To make plans with a friend, ask about their day first: "What are you doing on Thursday?". If the day is open, suggest a time and place: "Let\'s meet at seven thirty" or "Let\'s meet in front of the cinema". Check the plan with "Does that work for you?" and confirm with "Yes, that is perfect". You can promise action with will: "I will pick you up at six thirty". If the time is bad, say "Sorry, I am busy then" and suggest another time.',
      explanationAr: 'لوضع خطة مع صديق اسأل عن يومه أولا: What are you doing on Thursday؟. وإن كان اليوم فارغا اقترح وقتا ومكانا: Let\'s meet at seven thirty أو Let\'s meet in front of the cinema. وتأكد من الخطة بسؤال Does that work for you؟ وأكد بـ Yes, that is perfect. ويمكنك أن تعد بفعل will: I will pick you up at six thirty. وإن كان الوقت غير مناسب قل Sorry, I am busy then واقترح وقتا آخر.',
      examples: [
        { en: 'What are you doing after work today?', ar: 'ماذا تفعل بعد العمل اليوم؟' },
        { en: 'Let us meet at the cafe at five.', ar: 'لنتقابل في المقهى في الخامسة.' },
        { en: 'Yes, that time works for me well.', ar: 'نعم، ذلك الوقت يناسبني جيدا.' },
      ],
    },
    vocabulary: [
      { word: 'plan', meaningAr: 'خطة', example: 'I have a plan for Friday.' },
      { word: 'arrange', meaningAr: 'يرتب', example: 'Let us arrange a meeting.' },
      { word: 'pick up', meaningAr: 'يمر ليأخذ', example: 'I will pick you up at six.' },
      { word: 'in front of', meaningAr: 'أمام', example: 'Wait in front of the cinema.' },
      { word: 'perfect', meaningAr: 'مثالي', example: 'Seven thirty is perfect.' },
      { word: 'suggest', meaningAr: 'يقترح', example: 'I suggest the cafe.' },
      { word: 'on time', meaningAr: 'في الموعد', example: 'Please be on time.' },
      { word: 'forget', meaningAr: 'ينسى', example: 'I will not forget it.' },
      { word: 'trip', meaningAr: 'رحلة', example: 'We are planning a trip.' },
      { word: 'o\'clock', meaningAr: 'ساعة (توقيت)', example: 'Let us say five o\'clock.' },
      { word: 'meeting', meaningAr: 'اجتماع / لقاء', example: 'The meeting is after lunch.' },
      { word: 'promise', meaningAr: 'يعد', example: 'I promise to come early.' },
    ],
    scenario: [
      { en: 'What are you doing on Thursday evening?', ar: 'ماذا تفعل مساء الخميس؟', d: 1 },
      { en: 'Nothing much.', ar: 'لا شيء كثير.', d: 1 },
      { en: 'Why do you ask?', ar: 'لماذا تسأل؟', d: 1 },
      { en: "Let's meet at seven thirty.", ar: 'لنتقابل في السابعة والنصف.', d: 1 },
      { en: 'Does that work for you?', ar: 'هل يناسبك ذلك؟', d: 1 },
      { en: 'Yes, seven thirty is perfect.', ar: 'نعم، السابعة والنصف مناسبة تماما.', d: 1 },
      { en: "Let's meet in front of the cinema.", ar: 'لنتقابل أمام السينما.', d: 2 },
      { en: 'I will pick you up at six thirty.', ar: 'سأمر بيك في السادسة والنصف.', d: 2 },
      { en: 'What about lunch after the meeting?', ar: 'ما رأيك بالغداء بعد الاجتماع؟', d: 2 },
      { en: 'Sorry, I am busy in the morning.', ar: 'آسف، أنا مشغول في الصباح.', d: 2 },
      { en: 'The afternoon is better for me.', ar: 'بعد الظهر أفضل لي.', d: 2 },
      { en: 'Are you free after work?', ar: 'هل أنت متفرغ بعد العمل؟', d: 1 },
      { en: 'My friends want to play football on Saturday.', ar: 'أصدقائي يريدون لعب كرة القدم يوم السبت.', d: 3 },
      { en: 'Do not be late this time!', ar: 'لا تتأخر هذه المرة!', d: 3 },
      { en: 'I will not forget it again.', ar: 'لن أنساها مجددا.', d: 3 },
      { en: 'Where should we meet?', ar: 'أين ينبغي أن نتقابل؟', d: 1 },
      { en: "Let's say five o'clock at the cafe.", ar: 'لنقل الخامسة في المقهى.', d: 2 },
      { en: 'Sounds good! I booked the table already.', ar: 'جيد! حجزت الطاولة بالفعل.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'What are you doing {T}?', arTmpl: 'ماذا تفعل {T_ar}؟',
        slots: {
          T: [
            { en: 'on Thursday', ar: 'يوم الخميس' }, { en: 'tomorrow', ar: 'غدا' },
            { en: 'on Friday', ar: 'يوم الجمعة' }, { en: 'this weekend', ar: 'في عطلة نهاية هذا الأسبوع' },
            { en: 'after work', ar: 'بعد العمل' }, { en: 'tonight', ar: 'الليلة' },
            { en: 'next week', ar: 'الأسبوع القادم' },
          ],
        },
        tags: ['plans', 'questions'], d: 1, limit: 7,
      },
      {
        tmpl: "Let's meet {P}.", arTmpl: 'لنتقابل {P_ar}.',
        slots: {
          P: [
            { en: 'at seven', ar: 'في السابعة' }, { en: 'at six', ar: 'في السادسة' },
            { en: 'at eight thirty', ar: 'في الثامنة والنصف' }, { en: 'in front of the school', ar: 'أمام المدرسة' },
            { en: 'at the cafe', ar: 'في المقهى' }, { en: 'at the park', ar: 'في الحديقة' },
            { en: 'at the restaurant', ar: 'في المطعم' },
          ],
        },
        tags: ['plans', 'time'], d: 1, limit: 7,
      },
      {
        tmpl: 'I will call you {T}.', arTmpl: 'سأتصل بك {T_ar}.',
        slots: {
          T: [
            { en: 'on Sunday', ar: 'يوم الأحد' }, { en: 'in the evening', ar: 'في المساء' },
            { en: 'after lunch', ar: 'بعد الغداء' }, { en: 'on Wednesday', ar: 'يوم الأربعاء' },
            { en: 'next week', ar: 'الأسبوع القادم' }, { en: 'at night', ar: 'في الليل' },
            { en: 'on Saturday', ar: 'يوم السبت' },
          ],
        },
        tags: ['plans', 'will'], d: 2, limit: 7,
      },
      {
        tmpl: 'Does {T} work for you?', arTmpl: 'هل يناسبك {T_ar}؟',
        slots: {
          T: [
            { en: 'that time', ar: 'ذلك الوقت' }, { en: 'Thursday', ar: 'الخميس' },
            { en: 'seven o\'clock', ar: 'السابعة' }, { en: 'the morning', ar: 'الصباح' },
            { en: 'this plan', ar: 'هذه الخطة' }, { en: 'five o\'clock', ar: 'الخامسة' },
          ],
        },
        tags: ['plans', 'questions'], d: 2, limit: 6,
      },
      {
        tmpl: 'Are we still meeting {T}?', arTmpl: 'هل ما زلنا نتقابل {T_ar}؟',
        slots: {
          T: [
            { en: 'at seven', ar: 'في السابعة' }, { en: 'tomorrow', ar: 'غدا' },
            { en: 'on Saturday', ar: 'يوم السبت' }, { en: 'at the cafe', ar: 'في المقهى' },
          ],
        },
        tags: ['plans', 'questions'], d: 3, limit: 4,
      },
    ],
    fills: [
      { en: 'What are you doing on Thursday evening?', ar: 'ماذا تفعل مساء الخميس؟', word: 'doing' },
      { en: "Let's meet at seven thirty.", ar: 'لنتقابل في السابعة والنصف.', word: 'meet' },
      { en: 'Does that work for you?', ar: 'هل يناسبك ذلك؟', word: 'work', hint: 'يناسب' },
      { en: 'I will pick you up at six thirty.', ar: 'سأمر بيك في السادسة والنصف.', word: 'pick', hint: 'يمر ليأخذ' },
      { en: 'Are you free after work?', ar: 'هل أنت متفرغ بعد العمل؟', word: 'free' },
      { en: 'Do not be late this time!', ar: 'لا تتأخر هذه المرة!', word: 'late', hint: 'متأخر' },
      { en: 'Where should we meet?', ar: 'أين ينبغي أن نتقابل؟', word: 'Where', hint: 'سؤال مكان' },
      { en: 'I booked a table for two.', ar: 'حجزت طاولة لشخصين.', word: 'booked', hint: 'حجز' },
    ],
    orders: [
      { en: 'What are you doing on Thursday evening?', ar: 'ماذا تفعل مساء الخميس؟' },
      { en: "Let's meet in front of the cinema.", ar: 'لنتقابل أمام السينما.' },
      { en: 'I will pick you up at six thirty.', ar: 'سأمر بيك في السادسة والنصف.' },
      { en: 'The afternoon is better for me today.', ar: 'بعد الظهر أفضل لي اليوم.' },
      { en: 'We are planning a trip to the mountains.', ar: 'نخطط لرحلة إلى الجبال.' },
      { en: 'I will not forget it again, I promise.', ar: 'لن أنساها مجددا، أعدها.' },
    ],
    mc: [
      { question: 'You want to know your friend\'s plan for Thursday. You ask:', options: ['What are you doing on Thursday?', 'What is your salary?', 'Where do you live now?', 'Why is the sky blue?'], answerIndex: 0, ar: 'تريد معرفة خطة صديقك يوم الخميس، فتسأل:' },
      { question: 'You suggest a meeting time. You say:', options: ["Let's meet at seven thirty.", 'I am at home now.', 'The cafe is closed.', 'Time is money.'], answerIndex: 0, ar: 'اقترحت وقت اللقاء، فقلت:' },
      { question: '"Does that work for you?" asks about:', options: ['the right time', 'the color', 'the weather', 'the price'], answerIndex: 0, ar: 'سؤال Does that work for you? يخص:' },
      { question: 'Your friend is late again. You say:', options: ['Do not be late this time!', 'Come more late!', 'Late is good.', 'Forget the time.'], answerIndex: 0, ar: 'تأخر صديقك مجددا، فقلت:' },
    ],
  },

  /* ================= lesson 152 — Social Apologies ================= */
  {
    num: 152,
    tags: ['apologies', 'social', 'feelings'],
    objectives: [
      'Apologize for being late or forgetting',
      'Give a short honest reason',
      'Accept an apology kindly',
    ],
    grammar: {
      explanation: 'A social apology has three parts: say sorry, give a short reason, and show kindness. Say "I am so late, sorry!" or "I am sorry I missed your party", then explain: "The traffic was terrible" or "Something came up at work". The other person answers kindly: "It happens", "No problem" or "Don\'t worry about it". Take responsibility with "It was my fault", and promise better: "Next time I will be on time". Forgiveness keeps friendships strong.',
      explanationAr: 'الاعتذار الاجتماعي ثلاثة أجزاء: قل آسف، واذكر سببا قصيرا، وأظهر اللطف. قل I am so late, sorry! أو I am sorry I missed your party، ثم وضح: The traffic was terrible أو Something came up at work. ويجيب الطرف الآخر بلطف: It happens أو No problem أو Don\'t worry about it. وتحمل المسؤولية بـ It was my fault، وعد بالأفضل: Next time I will be on time. فالتسامح يحفظ الصداقات.',
      examples: [
        { en: 'I am sorry I forgot your birthday.', ar: 'آسف لأنني نسيت عيد ميلادك.' },
        { en: 'It happens, no problem at all.', ar: 'يحدث هذا، لا مشكلة إطلاقا.' },
        { en: 'Next time I will arrive on time.', ar: 'في المرة القادمة سأصل في الموعد.' },
      ],
    },
    vocabulary: [
      { word: 'apology', meaningAr: 'اعتذار', example: 'Say an apology when late.' },
      { word: 'apologize', meaningAr: 'يعتذر', example: 'I apologize for the noise.' },
      { word: 'mistake', meaningAr: 'خطأ', example: 'It was a small mistake.' },
      { word: 'fault', meaningAr: 'ذنب / خطأ', example: 'It was my fault.' },
      { word: 'traffic', meaningAr: 'زحمة مرور', example: 'The traffic was terrible.' },
      { word: 'forgive', meaningAr: 'يسامح', example: 'Please forgive me.' },
      { word: 'happen', meaningAr: 'يحدث', example: 'It happens to everyone.' },
      { word: 'message', meaningAr: 'رسالة', example: 'I did not see your message.' },
      { word: 'careful', meaningAr: 'حذر', example: 'I will be more careful.' },
      { word: 'late', meaningAr: 'متأخر', example: 'I am so late, sorry.' },
      { word: 'worry', meaningAr: 'يقلق', example: "Don't worry about it." },
      { word: 'problem', meaningAr: 'مشكلة', example: 'No problem at all.' },
    ],
    scenario: [
      { en: "I'm so late, sorry!", ar: 'لقد تأخرت كثيرا، آسف!', d: 1 },
      { en: 'Something came up at work.', ar: 'طرأ أمر في العمل.', d: 2 },
      { en: 'It happens to everyone.', ar: 'يحدث هذا للجميع.', d: 1 },
      { en: "Don't worry about it.", ar: 'لا تقلق بشأن ذلك.', d: 1 },
      { en: 'I am sorry I missed your party.', ar: 'آسف لأنني فوّت حفلتك.', d: 2 },
      { en: 'Was the traffic bad this morning?', ar: 'هل كانت الزحمة سيئة هذا الصباح؟', d: 1 },
      { en: 'I forgot our meeting completely.', ar: 'نسيت اجتماعنا تماما.', d: 2 },
      { en: 'No problem, it was not important.', ar: 'لا مشكلة، لم يكن مهما.', d: 1 },
      { en: 'Please excuse my delay.', ar: 'سامحني على تأخري من فضلك.', d: 2 },
      { en: 'It was my fault, not yours.', ar: 'كان ذلك خطئي، ليس خطئك.', d: 3 },
      { en: 'Did you see my message?', ar: 'هل رأيت رسالتي؟', d: 1 },
      { en: 'My phone was off all day.', ar: 'كان هاتفي مطفأ طوال اليوم.', d: 2 },
      { en: 'We were worried about you.', ar: 'كنا قلقين عليك.', d: 2 },
      { en: 'I apologize for the noise last night.', ar: 'أعتذر عن الضجيج الليلة الماضية.', d: 3 },
      { en: 'Can I make it up to you?', ar: 'هل يمكنني أن أعوضك؟', d: 1 },
      { en: 'Please give me one more chance.', ar: 'امنحني فرصة أخرى من فضلك.', d: 3 },
      { en: 'Please forgive me, my friend.', ar: 'سامحني يا صديقي.', d: 2 },
      { en: 'I will be more careful next time.', ar: 'سأكون أكثر حذرا في المرة القادمة.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I am sorry, {R}.', arTmpl: 'أنا آسف، {R_ar}.',
        slots: {
          R: [
            { en: 'I am late', ar: 'لقد تأخرت' }, { en: 'I forgot our meeting', ar: 'نسيت اجتماعنا' },
            { en: 'I can not come', ar: 'لا أستطيع المجيء' }, { en: 'we are late', ar: 'لقد تأخرنا' },
            { en: 'I broke your cup', ar: 'كسرت كوبك' }, { en: 'I was wrong', ar: 'كنت مخطئا' },
            { en: 'I did not call you', ar: 'لم أتصل بك' }, { en: 'I lost your number', ar: 'فقدت رقمك' },
          ],
        },
        tags: ['apologies'], d: 1, limit: 8,
      },
      {
        tmpl: '{TH} came up.', arTmpl: '{G_ar} {TH_ar}.',
        slots: {
          TH: [
            { en: 'Something', ar: 'أمر', g: 'm' }, { en: 'A problem', ar: 'مشكلة', g: 'f' },
            { en: 'A family matter', ar: 'أمر عائلي', g: 'm' }, { en: 'An emergency', ar: 'حالة طارئة', g: 'f' },
            { en: 'Some work', ar: 'عمل ما', g: 'm' }, { en: 'A small issue', ar: 'مشكلة صغيرة', g: 'f' },
          ],
          G: (x) => [{ en: 'came', ar: x.TH.g === 'f' ? 'طرأت' : 'طرأ' }],
        },
        tags: ['apologies', 'reasons'], d: 2, limit: 6,
      },
      {
        tmpl: 'I forgot {TH}.', arTmpl: 'نسيت {TH_ar}.',
        slots: {
          TH: [
            { en: 'our meeting', ar: 'اجتماعنا' }, { en: 'your birthday', ar: 'عيد ميلادك' },
            { en: 'the time', ar: 'الوقت' }, { en: 'my keys', ar: 'مفاتيحي' },
            { en: 'your call', ar: 'مكالمتك' }, { en: 'the appointment', ar: 'الموعد' },
            { en: 'the party', ar: 'الحفلة' },
          ],
        },
        tags: ['apologies', 'past'], d: 2, limit: 7,
      },
      {
        tmpl: "Don't worry about {TH}.", arTmpl: 'لا تقلق بشأن {TH_ar}.',
        slots: {
          TH: [
            { en: 'the time', ar: 'الوقت' }, { en: 'the cost', ar: 'التكلفة' },
            { en: 'my delay', ar: 'تأخري' }, { en: 'the mess', ar: 'الفوضى' },
            { en: 'the weather', ar: 'الطقس' }, { en: 'the bill', ar: 'الفاتورة' },
          ],
        },
        tags: ['apologies', 'forgiveness'], d: 1, limit: 6,
      },
      {
        tmpl: 'Next time I will {V}.', arTmpl: 'في المرة القادمة س{V_ar}.',
        slots: {
          V: [
            { en: 'be on time', ar: 'أكون في الموعد' }, { en: 'call you first', ar: 'أتصل بك أولا' },
            { en: 'come early', ar: 'آتي مبكرا' }, { en: 'check my phone', ar: 'أفحص هاتفي' },
            { en: 'send a message', ar: 'أرسل رسالة' },
          ],
        },
        tags: ['apologies', 'will'], d: 3, limit: 5,
      },
    ],
    fills: [
      { en: "I'm so late, sorry!", ar: 'لقد تأخرت كثيرا، آسف!', word: 'late' },
      { en: 'Something came up at work.', ar: 'طرأ أمر في العمل.', word: 'Something', hint: 'أمر ما' },
      { en: 'It happens to everyone.', ar: 'يحدث هذا للجميع.', word: 'everyone' },
      { en: "Don't worry about it.", ar: 'لا تقلق بشأن ذلك.', word: 'worry', hint: 'يقلق' },
      { en: 'The traffic was terrible this morning.', ar: 'كانت الزحمة رهيبة هذا الصباح.', word: 'traffic', hint: 'زحمة' },
      { en: 'I did not see your message.', ar: 'لم أرَ رسالتك.', word: 'message', hint: 'رسالة' },
      { en: 'We were worried about you.', ar: 'كنا قلقين عليك.', word: 'worried', hint: 'قلقان' },
      { en: 'It was my fault, not yours.', ar: 'كان ذلك خطئي، ليس خطئك.', word: 'fault', hint: 'خطأ' },
    ],
    orders: [
      { en: 'I am sorry I missed your party.', ar: 'آسف لأنني فوّت حفلتك.' },
      { en: 'My phone was off all day.', ar: 'كان هاتفي مطفأ طوال اليوم.' },
      { en: 'I apologize for the noise last night.', ar: 'أعتذر عن الضجيج الليلة الماضية.' },
      { en: 'Let me make it up to you, my friend.', ar: 'دعني أعوضك يا صديقي.' },
      { en: 'Please give me one more chance.', ar: 'امنحني فرصة أخرى من فضلك.' },
      { en: 'I will be more careful next time.', ar: 'سأكون أكثر حذرا في المرة القادمة.' },
    ],
    mc: [
      { question: 'You arrive late to lunch. You say:', options: ["I'm so late, sorry!", 'I am right again.', 'Food is ready now.', 'Where is my chair?'], answerIndex: 0, ar: 'وصلت متأخرا إلى الغداء، فقلت:' },
      { question: '"Something came up" means:', options: ['طرأ أمر ما', 'انتهى كل شيء', 'اشتريت شيئا', 'كسرت الطاولة'], answerIndex: 0, ar: 'ما معنى Something came up؟' },
      { question: 'A friend apologizes. You answer kindly:', options: ["Don't worry about it.", 'You are fired!', 'Pay me now.', 'Never talk to me.'], answerIndex: 0, ar: 'اعتذر إليك صديق، فأجبت بلطف:' },
      { question: '"It happens to everyone" means:', options: ['يحدث هذا للجميع', 'لا أحد يخطئ', 'أنا وحدي أخطئ', 'الجميع غاضب مني'], answerIndex: 0, ar: 'ما معنى It happens to everyone؟' },
    ],
  },
];
