/* ============================================================
   v2 section data — s07-c1.js
   Relationships & Social Communication · lessons 160–163
   (Asking a Friend for a Favor · Offering Help · Making
    Friends · Family Relationships)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 160 — Asking a Friend for a Favor ================= */
  {
    num: 160,
    tags: ['favors', 'polite-requests'],
    objectives: [
      'Ask a friend for a small favor politely',
      'Use "Can you...?", "Could you...?" and "Do you mind...?" requests',
      'Thank a friend and promise to return the favor',
    ],
    grammar: {
      explanation: 'For polite requests use can and could: "Can you open the door?" and "Could you open the door, please?" — could is softer and more polite. Another polite form is "Do you mind + -ing": "Do you mind waiting here?". To say yes, answer "Sure", "Of course" or "No problem". To refuse politely, say "Sorry, I cannot help you today". After a favor, thank the person with "Thanks a lot, I owe you one" — it means you will help them later. Friends usually answer with a short, warm reply like "Anytime".',
      explanationAr: 'لطلب خدمة بلطف استخدم Can أو Could: Can you open the door؟ وCould you open the door, please؟ — وCould أرقّ وأكثر تأدبا. وصيغة مؤدبة أخرى هي Do you mind مع الفعل والـ ing مثل: Do you mind waiting here؟. للموافقة قل Sure أو Of course أو No problem، وللرفض بلطف قل Sorry, I cannot help you today. وبعد المعروف اشكر صديقك بـ Thanks a lot, I owe you one أي سأرد لك المعروف لاحقا. وعادة يرد الأصدقاء برد قصير دافئ مثل Anytime.',
      examples: [
        { en: 'Could you watch my bag for a minute?', ar: 'هل يمكنك مراقبة حقيبتي لدقيقة؟' },
        { en: 'Sure, no problem at all.', ar: 'بالتأكيد، لا مشكلة أبدا.' },
        { en: 'Thanks a lot, I owe you one.', ar: 'شكرا جزيلا، سأرد لك المعروف.' },
      ],
    },
    vocabulary: [
      { word: 'favor', meaningAr: 'معروف / خدمة', example: 'Can you do me a favor?', ipa: 'ˈfeɪvər' },
      { word: 'sure', meaningAr: 'بالتأكيد', example: 'Sure, I will help you.' },
      { word: 'borrow', meaningAr: 'يستعير', example: 'Can I borrow your notes?' },
      { word: 'lend', meaningAr: 'يُعير', example: 'Can you lend me your pen?' },
      { word: 'watch', meaningAr: 'يراقب / يعتني بـ', example: 'Could you watch my bag?' },
      { word: 'mind', meaningAr: 'يمانع', example: 'Do you mind waiting here?' },
      { word: 'owe', meaningAr: 'عليه معروف', example: 'Thanks, I owe you one.' },
      { word: 'of course', meaningAr: 'بالطبع', example: 'Of course I will help you.' },
      { word: 'grateful', meaningAr: 'ممتن', example: 'I am very grateful for your help.' },
      { word: 'hold', meaningAr: 'يمسك', example: 'Could you hold this box for me?' },
      { word: 'promise', meaningAr: 'يعد', example: 'I promise to give it back.' },
      { word: 'anytime', meaningAr: 'في أي وقت', example: 'Call me anytime, my friend.' },
    ],
    scenario: [
      { en: 'Omar, can you do me a favor?', ar: 'يا عمر، هل تستطيع أن تفعل لي معروفا؟', d: 1 },
      { en: 'Sure, what is it?', ar: 'بالتأكيد، ما هو؟', d: 1 },
      { en: 'Could you watch my bag for five minutes?', ar: 'هل يمكنك مراقبة حقيبتي لخمس دقائق؟', d: 1 },
      { en: 'Of course, I can watch it.', ar: 'بالطبع، أستطيع مراقبتها.', d: 1 },
      { en: 'Thank you so much, I owe you one.', ar: 'شكرا جزيلا، سأرد لك المعروف.', d: 1 },
      { en: 'Do you mind lending me your pen?', ar: 'هل تمانع من إعارتي قلمك؟', d: 2 },
      { en: 'I did not bring a pen today.', ar: 'لم أحضر قلما اليوم.', d: 2 },
      { en: 'Can I borrow your notes for the class?', ar: 'هل يمكنني استعارة ملاحظاتك للدرس؟', d: 2 },
      { en: 'I will give them back tomorrow.', ar: 'سأعيدها لك غدا.', d: 2 },
      { en: 'Could you help me carry these boxes?', ar: 'هل يمكنك مساعدتي في حمل هذه الصناديق؟', d: 2 },
      { en: 'They are heavy, but we are two people.', ar: 'هي ثقيلة، لكننا شخصان.', d: 2 },
      { en: 'Sorry, I cannot help you this afternoon.', ar: 'آسف، لا أستطيع مساعدتك بعد الظهر.', d: 3 },
      { en: 'I have a doctor appointment at four.', ar: 'لدي موعد عند الطبيب في الرابعة.', d: 3 },
      { en: 'No problem, I will ask Khalid.', ar: 'لا مشكلة، سأسأل خالدا.', d: 3 },
      { en: 'You are a true friend, thank you.', ar: 'أنت صديق حقيقي، شكرا لك.', d: 3 },
      { en: 'Anytime, just call me.', ar: 'في أي وقت، فقط اتصل بي.', d: 3 },
      { en: 'Next time I will help you, I promise.', ar: 'في المرة القادمة سأساعدك، أعدها.', d: 3 },
      { en: 'Friends help each other.', ar: 'الأصدقاء يساعدون بعضهم.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Could you {V} for me, {P}?', arTmpl: 'هل يمكنك أن {V_ar} من أجلي يا {P_ar}؟',
        slots: {
          V: [
            { en: 'watch my bag', ar: 'تراقب حقيبتي' }, { en: 'hold this box', ar: 'تمسك هذا الصندوق' },
            { en: 'open the door', ar: 'تفتح الباب' }, { en: 'close the window', ar: 'تغلق النافذة' },
            { en: 'carry this chair', ar: 'تحمل هذا الكرسي' }, { en: 'move this table', ar: 'تحرك هذه الطاولة' },
          ],
          P: B.NAMED_SING,
        },
        tags: ['favors', 'polite-requests'], d: 1, limit: 24,
      },
      {
        tmpl: 'Do you mind {V}?', arTmpl: 'هل تمانع من {V_ar}؟',
        slots: {
          V: [
            { en: 'opening the window', ar: 'فتح النافذة' }, { en: 'closing the door', ar: 'إغلاق الباب' },
            { en: 'waiting outside', ar: 'الانتظار في الخارج' }, { en: 'coming later', ar: 'الحضور لاحقا' },
            { en: 'speaking slowly', ar: 'التحدث ببطء' }, { en: 'helping my brother', ar: 'مساعدة أخي' },
          ],
        },
        tags: ['favors', 'polite-requests'], d: 2, limit: 6,
      },
      {
        tmpl: 'Can you help me {V}, {P}?', arTmpl: 'هل يمكنك مساعدتي {V_ar} يا {P_ar}؟',
        slots: {
          V: [
            { en: 'carry these bags', ar: 'في حمل هذه الحقائب' }, { en: 'find my keys', ar: 'في إيجاد مفاتيحي' },
            { en: 'move this sofa', ar: 'في تحريك هذه الأريكة' }, { en: 'lift this box', ar: 'في رفع هذا الصندوق' },
            { en: 'choose a gift', ar: 'في اختيار هدية' }, { en: 'fix my bike', ar: 'في إصلاح دراجتي' },
          ],
          P: B.NAMED_SING,
        },
        tags: ['favors', 'help'], d: 2, limit: 20,
      },
      {
        tmpl: '{A}, no problem.', arTmpl: '{A_ar}، لا مشكلة.',
        slots: {
          A: [
            { en: 'Sure', ar: 'بالتأكيد' }, { en: 'Certainly', ar: 'بكل تأكيد' },
            { en: 'No worries', ar: 'لا قلق' }, { en: 'Anytime', ar: 'في أي وقت' },
            { en: 'With pleasure', ar: 'بكل سرور' },
          ],
        },
        tags: ['favors', 'replies'], d: 1, limit: 5,
      },
    ],
    fills: [
      { en: 'Can you do me a favor, Omar?', ar: 'هل تستطيع أن تفعل لي معروفا يا عمر؟', word: 'favor', hint: 'معروف' },
      { en: 'Sure, I can do that.', ar: 'بالتأكيد، أستطيع فعل ذلك.', word: 'Sure', hint: 'موافقة' },
      { en: 'Could you watch my bag for a minute?', ar: 'هل يمكنك مراقبة حقيبتي لدقيقة؟', word: 'watch', hint: 'يراقب' },
      { en: 'Do you mind opening the window?', ar: 'هل تمانع من فتح النافذة؟', word: 'mind', hint: 'يمانع' },
      { en: 'Can I borrow your pen, please?', ar: 'هل يمكنني استعارة قلمك من فضلك؟', word: 'borrow', hint: 'يستعير' },
      { en: 'Thanks a lot, I owe you one.', ar: 'شكرا جزيلا، سأرد لك المعروف.', word: 'owe', hint: 'عليه معروف' },
      { en: 'Of course, I will help you.', ar: 'بالطبع، سأساعدك.', word: 'course', hint: 'بالطبع' },
      { en: 'I am very grateful for your help.', ar: 'أنا ممتن جدا لمساعدتك.', word: 'grateful', hint: 'ممتن' },
    ],
    orders: [
      { en: 'Can you do me a big favor, Khalid?', ar: 'هل تستطيع أن تفعل لي معروفا كبيرا يا خالد؟' },
      { en: 'Could you hold my bag for five minutes?', ar: 'هل يمكنك مسك حقيبتي لخمس دقائق؟' },
      { en: 'Do you mind waiting here for me?', ar: 'هل تمانع من الانتظار هنا من أجلي؟' },
      { en: 'I will give it back tomorrow, I promise.', ar: 'سأعيده غدا، أعدها.' },
      { en: 'Thanks a lot, I really owe you one.', ar: 'شكرا جزيلا، سأرد لك المعروف حقا.' },
      { en: 'You are a true friend, Sara.', ar: 'أنت صديقة حقيقية يا سارة.' },
    ],
    mc: [
      { question: 'Your friend asks "Could you watch my bag?" A good answer is:', options: ['Sure, no problem.', 'I am fine, thank you.', 'Good night.', 'My name is Omar.'], answerIndex: 0, ar: 'سألك صديقك Could you watch my bag؟ فما الجواب المناسب؟' },
      { question: 'What does "I owe you one" mean?', options: ['سأرد لك المعروف لاحقا', 'أنت مدين لي', 'أستعير نقودا منك', 'سأعمل عندك'] , answerIndex: 0, ar: 'ما معنى I owe you one؟' },
      { question: 'Which request is the most polite?', options: ['Could you please help me?', 'Help me now.', 'You must help me.', 'Give me your pen.'], answerIndex: 0, ar: 'أي طلب هو الأكثر تأدبا؟' },
      { question: '"Do you mind opening the window?" means:', options: ['هل تمانع من فتح النافذة؟', 'أغلق النافذة فورا', 'هل النافذة مفتوحة؟', 'النافذة قديمة'], answerIndex: 0, ar: 'ما معنى Do you mind opening the window؟' },
    ],
  },

  /* ================= lesson 161 — Offering Help ================= */
  {
    num: 161,
    tags: ['offering-help', 'polite-offers'],
    objectives: [
      'Offer help with "Let me..." and "I can..."',
      'Ask "Do you need a hand?" in a friendly way',
      'Accept or refuse an offer politely',
    ],
    grammar: {
      explanation: 'To offer help, use "Let me + verb": "Let me help you with that" or "Let me carry the bags". You can also ask "Do you need a hand?" or simply say "I can drive you home". A polite offer with a question is "Shall I open the window?" or "Would you like some tea?". To accept, say "Yes, please" or "That is very kind of you". To refuse politely, say "No, thanks, I can manage" or "Thanks, but I am okay". After help, show thanks: "I really appreciate your help".',
      explanationAr: 'لعرض المساعدة استخدم Let me مع الفعل: Let me help you with that أو Let me carry the bags. ويمكنك أن تسأل Do you need a hand؟ أو تقول ببساطة I can drive you home. ولعرض مؤدب على شكل سؤال قل Shall I open the window؟ أو Would you like some tea؟. للقبول قل Yes, please أو That is very kind of you، وللرفض بلطف قل No, thanks, I can manage أو Thanks, but I am okay. وبعد المساعدة اشكر قائلا I really appreciate your help.',
      examples: [
        { en: 'Let me help you with that box.', ar: 'دعني أساعدك في ذلك الصندوق.' },
        { en: 'Do you need a hand with the bags?', ar: 'هل تحتاج يد مساعدة في الحقائب؟' },
        { en: 'That is very kind of you, thank you.', ar: 'هذا لطف كبير منك، شكرا لك.' },
      ],
    },
    vocabulary: [
      { word: 'offer', meaningAr: 'يعرض (مساعدة)', example: 'Can I offer you some help?' },
      { word: 'a hand', meaningAr: 'يد (مساعدة)', example: 'Do you need a hand?' },
      { word: 'kind', meaningAr: 'طيب / لطيف', example: 'That is very kind of you.' },
      { word: 'manage', meaningAr: 'يتدبر أمره', example: 'No, thanks, I can manage.' },
      { word: 'heavy', meaningAr: 'ثقيل', example: 'This box is too heavy for me.' },
      { word: 'drive', meaningAr: 'يقود / يوصل بسيارته', example: 'I can drive you to the station.' },
      { word: 'lift', meaningAr: 'يرفع', example: 'Can you lift the big box?' },
      { word: 'bring', meaningAr: 'يجلب', example: 'Let me bring you some water.' },
      { word: 'appreciate', meaningAr: 'يقدّر / يشكر', example: 'I really appreciate your help.' },
      { word: 'enough', meaningAr: 'كاف', example: 'I have enough bags, thank you.' },
      { word: 'carry', meaningAr: 'يحمل', example: 'Let me carry the bag for you.' },
      { word: 'help out', meaningAr: 'يساعد (مؤقتا)', example: 'My neighbors help out every week.' },
    ],
    scenario: [
      { en: 'That bag looks heavy.', ar: 'تبدو تلك الحقيبة ثقيلة.', d: 1 },
      { en: 'Do you need a hand?', ar: 'هل تحتاج يد مساعدة؟', d: 1 },
      { en: 'Yes, please, that is very kind of you.', ar: 'نعم من فضلك، هذا لطف كبير منك.', d: 1 },
      { en: 'Let me help you with those bags.', ar: 'دعني أساعدك في حمل تلك الحقائب.', d: 1 },
      { en: 'Thanks, but I can manage.', ar: 'شكرا، لكن أستطيع تدبر أمري.', d: 1 },
      { en: 'Are you sure? They look very heavy.', ar: 'هل أنت متأكد؟ تبدو ثقيلة جدا.', d: 2 },
      { en: 'Okay, can you carry the big one?', ar: 'حسنا، هل يمكنك حمل الكبيرة؟', d: 2 },
      { en: 'Of course, give it to me.', ar: 'بالطبع، أعطها لي.', d: 2 },
      { en: 'My car is outside.', ar: 'سيارتي في الخارج.', d: 2 },
      { en: 'I can drive you home if you want.', ar: 'أستطيع أوصالك إلى المنزل إن أردت.', d: 2 },
      { en: 'Thank you, that is really kind.', ar: 'شكرا لك، هذا لطف حقيقي.', d: 2 },
      { en: 'Let me bring you a glass of water.', ar: 'دعني أجلب لك كوبا من الماء.', d: 2 },
      { en: 'No, thanks, I am not thirsty.', ar: 'لا شكرا، أنا لست عطشانا.', d: 2 },
      { en: 'We can clean the garden together on Friday.', ar: 'يمكننا تنظيف الحديقة معا يوم الجمعة.', d: 3 },
      { en: 'I really appreciate your help.', ar: 'أقدر مساعدتك حقا.', d: 3 },
      { en: 'Anytime, we are friends.', ar: 'في أي وقت، نحن أصدقاء.', d: 3 },
      { en: 'These chairs are light, I can lift them.', ar: 'هذه الكراسي خفيفة، أستطيع رفعها.', d: 3 },
      { en: 'Call me when you need help again.', ar: 'اتصل بي عندما تحتاج مساعدة مرة أخرى.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Let me {V} for you, {P}.', arTmpl: 'دعني {V_ar} من أجلك يا {P_ar}.',
        slots: {
          V: [
            { en: 'carry the bags', ar: 'أحمل الحقائب' }, { en: 'open the door', ar: 'أفتح الباب' },
            { en: 'wash the dishes', ar: 'أغسل الأطباق' }, { en: 'make the tea', ar: 'أصنع الشاي' },
            { en: 'find a taxi', ar: 'أجد سيارة أجرة' }, { en: 'call a doctor', ar: 'أتصل بالطبيب' },
          ],
          P: B.NAMED_SING,
        },
        tags: ['offering-help'], d: 1, limit: 24,
      },
      {
        tmpl: 'Do you need a hand with {O}?', arTmpl: 'هل تحتاج يد مساعدة في {O_ar}؟',
        slots: {
          O: [
            { en: 'the boxes', ar: 'الصناديق' }, { en: 'the dishes', ar: 'الأطباق' },
            { en: 'the cooking', ar: 'الطبخ' }, { en: 'the cleaning', ar: 'التنظيف' },
            { en: 'the shopping', ar: 'التسوق' }, { en: 'the bags', ar: 'الحقائب' },
          ],
        },
        tags: ['offering-help', 'help'], d: 1, limit: 6,
      },
      {
        tmpl: 'I can {V} you {T}.', arTmpl: 'أستطيع أن {V_ar} {T_ar}.',
        slots: {
          V: [
            { en: 'drive', ar: 'أوصلك' }, { en: 'take', ar: 'آخذك' },
            { en: 'meet', ar: 'أقابلك' }, { en: 'visit', ar: 'أزورك' },
            { en: 'call', ar: 'أتصل بك' }, { en: 'help', ar: 'أساعدك' },
          ],
          T: [
            { en: 'home', ar: 'إلى المنزل' }, { en: 'to the station', ar: 'إلى المحطة' },
            { en: 'tomorrow morning', ar: 'غدا صباحا' }, { en: 'after work', ar: 'بعد العمل' },
            { en: 'on Sunday', ar: 'يوم الأحد' },
          ],
        },
        tags: ['offering-help'], d: 2, limit: 20,
      },
      {
        tmpl: 'Can I get you {O}?', arTmpl: 'هل أجلب لك {O_ar}؟',
        slots: {
          O: [
            { en: 'some tea', ar: 'شيئا من الشاي' }, { en: 'some coffee', ar: 'شيئا من القهوة' },
            { en: 'an apple', ar: 'تفاحة' }, { en: 'some water', ar: 'شيئا من الماء' },
            { en: 'a sandwich', ar: 'ساندويتش' }, { en: 'some cake', ar: 'قطعة من الكعكة' },
          ],
        },
        tags: ['offering-help', 'guests'], d: 1, limit: 6,
      },
    ],
    fills: [
      { en: 'Do you need a hand, Maya?', ar: 'هل تحتاج يد مساعدة يا مايا؟', word: 'hand', hint: 'يد مساعدة' },
      { en: 'Let me carry that heavy box.', ar: 'دعني أحمل ذلك الصندوق الثقيل.', word: 'heavy', hint: 'ثقيل' },
      { en: 'That is very kind of you.', ar: 'هذا لطف كبير منك.', word: 'kind', hint: 'لطيف' },
      { en: 'No, thanks, I can manage.', ar: 'لا شكرا، أستطيع تدبر أمري.', word: 'manage', hint: 'يتدبر أمره' },
      { en: 'I can drive you to the station.', ar: 'أستطيع أوصالك إلى المحطة.', word: 'drive', hint: 'يقود' },
      { en: 'Let me bring you some water.', ar: 'دعني أجلب لك بعض الماء.', word: 'bring', hint: 'يجلب' },
      { en: 'I really appreciate your help.', ar: 'أقدر مساعدتك حقا.', word: 'appreciate', hint: 'يقدّر' },
      { en: 'Can I offer you some help?', ar: 'هل أعرض عليك بعض المساعدة؟', word: 'offer', hint: 'يعرض' },
    ],
    orders: [
      { en: 'Do you need a hand with the bags?', ar: 'هل تحتاج يد مساعدة في الحقائب؟' },
      { en: 'Let me help you with that box.', ar: 'دعني أساعدك في ذلك الصندوق.' },
      { en: 'I can drive you to the market.', ar: 'أستطيع أوصالك إلى السوق.' },
      { en: 'That is very kind of you, thank you.', ar: 'هذا لطف كبير منك، شكرا لك.' },
      { en: 'Thanks, but I am okay for now.', ar: 'شكرا، لكنني بخير الآن.' },
      { en: 'Call me again when you need help.', ar: 'اتصل بي مرة أخرى عندما تحتاج مساعدة.' },
    ],
    mc: [
      { question: 'Someone carries your heavy bags. You say:', options: ['That is very kind of you.', 'I am not thirsty.', 'Good night.', 'See you later.'], answerIndex: 0, ar: 'حمل أحدهم حقائبك الثقيلة، فتقول:' },
      { question: 'You want to offer help. You say:', options: ['Do you need a hand?', 'Where is the bank?', 'I did my homework.', 'It is raining today.'], answerIndex: 0, ar: 'تريد عرض المساعدة، فتقول:' },
      { question: '"I can manage" means:', options: ['أستطيع تدبر أمري بنفسي', 'أحتاج مساعدتك', 'أنا متعب جدا', 'سآتي لاحقا'], answerIndex: 0, ar: 'ما معنى I can manage؟' },
      { question: 'Which is a polite refusal of help?', options: ['Thanks, but I am okay.', 'Do it yourself.', 'I hate boxes.', 'Leave me now.'], answerIndex: 0, ar: 'أي جملة رفض مؤدب للمساعدة؟' },
    ],
  },

  /* ================= lesson 162 — Making Friends ================= */
  {
    num: 162,
    tags: ['friendship', 'small-talk'],
    objectives: [
      'Start a friendly conversation with a new person',
      'Invite someone to hang out with "We should..."',
      'Exchange phone numbers and make plans',
    ],
    grammar: {
      explanation: 'To make friends, start with friendly questions: "Are you new here?" and "What do you do for fun?". Suggest plans with "We should + verb" — the verb has no to and no -ing: "We should hang out sometime" (not "we should to hang out"). Invite with "Do you want to come with us?". When you want to meet again, give your contact: "Here is my number, call me anytime" or "Send me a message". The past simple works for yesterday: "I arrived last week", "We chatted for an hour".',
      explanationAr: 'لتكوين الصداقات ابدأ بأسئلة ودية: Are you new here؟ وWhat do you do for fun؟. واقترح خططا بـ We should مع الفعل — بلا to وبلا ing: We should hang out sometime (وليس we should to hang out). وادعُ بـ Do you want to come with us؟. وعندما تريد اللقاء مجددا اترك تواصلك: Here is my number, call me anytime أو Send me a message. واستخدم الماضي البسيط للأمور المنتهية: I arrived last week وWe chatted for an hour.',
      examples: [
        { en: 'Are you new in this city?', ar: 'هل أنت جديد في هذه المدينة؟' },
        { en: 'We should hang out sometime.', ar: 'ينبغي أن نقضي وقتا معا يوما ما.' },
        { en: 'Here is my number, call me.', ar: 'هذا رقمي، اتصل بي.' },
      ],
    },
    vocabulary: [
      { word: 'hang out', meaningAr: 'يقضي وقتا (مع)', example: 'We should hang out sometime.' },
      { word: 'fun', meaningAr: 'متعة', example: 'What do you do for fun?' },
      { word: 'sometime', meaningAr: 'في وقت ما', example: 'Call me sometime this week.' },
      { word: 'number', meaningAr: 'رقم', example: 'Here is my phone number.' },
      { word: 'chat', meaningAr: 'يتحدث وديا', example: 'We chatted for an hour yesterday.' },
      { word: 'invite', meaningAr: 'يدعو', example: 'I invite you to my house on Friday.' },
      { word: 'together', meaningAr: 'معا', example: 'Let us walk together in the park.' },
      { word: 'lonely', meaningAr: 'وحيد', example: 'I felt lonely in the beginning.' },
      { word: 'message', meaningAr: 'رسالة', example: 'Send me a message tonight.' },
      { word: 'neighborhood', meaningAr: 'حي', example: 'Our neighborhood is very quiet.' },
      { word: 'friendly', meaningAr: 'ودود', example: 'The people here are very friendly.' },
      { word: 'plan', meaningAr: 'خطة', example: 'Do you have any plans tomorrow?' },
    ],
    scenario: [
      { en: 'Hi! Are you new in this city?', ar: 'أهلا! هل أنت جديد في هذه المدينة؟', d: 1 },
      { en: 'Yes, I arrived last week.', ar: 'نعم، وصلت الأسبوع الماضي.', d: 1 },
      { en: 'Welcome! I am Sara, I live next door.', ar: 'أهلا بك! أنا سارة، أسكن بجوارك.', d: 1 },
      { en: 'Nice to meet you, I am Youssef.', ar: 'سررت بلقائك، أنا يوسف.', d: 1 },
      { en: 'Do you like our neighborhood?', ar: 'هل تحب حينا؟', d: 1 },
      { en: 'Yes, the people are very friendly.', ar: 'نعم، الناس ودودون جدا.', d: 1 },
      { en: 'What do you do for fun?', ar: 'ماذا تفعل للمتعة؟', d: 2 },
      { en: 'I play football and I watch movies.', ar: 'ألعب الكرة وأشاهد الأفلام.', d: 2 },
      { en: 'We should hang out sometime.', ar: 'ينبغي أن نقضي وقتا معا يوما ما.', d: 2 },
      { en: 'Good idea! I do not know many people here.', ar: 'فكرة جيدة! لا أعرف الكثير من الناس هنا.', d: 2 },
      { en: 'Do you have plans for the weekend?', ar: 'هل لديك خطط لعطلة نهاية الأسبوع؟', d: 2 },
      { en: 'No, I am free on Saturday.', ar: 'لا، أنا متفرغ يوم السبت.', d: 2 },
      { en: 'Let us meet at the park then.', ar: 'لنلتقِ في الحديقة إذن.', d: 3 },
      { en: 'Here is my number.', ar: 'هذا رقمي.', d: 3 },
      { en: 'Great, I will call you tomorrow.', ar: 'رائع، سأتصل بك غدا.', d: 3 },
      { en: 'Send me a message when you arrive.', ar: 'أرسل لي رسالة عندما تصل.', d: 3 },
      { en: 'Do not be lonely, we are friends now.', ar: 'لا تكن وحيدا، نحن أصدقاء الآن.', d: 3 },
      { en: 'See you on Saturday, goodbye!', ar: 'أراك يوم السبت، إلى اللقاء!', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'We should {V} sometime, {P}.', arTmpl: 'ينبغي أن {V_ar} يوما ما يا {P_ar}.',
        slots: {
          V: [
            { en: 'hang out', ar: 'نقضي وقتا معا' }, { en: 'play football', ar: 'نلعب الكرة' },
            { en: 'drink coffee together', ar: 'نشرب القهوة معا' }, { en: 'watch a movie', ar: 'نشاهد فيلما' },
            { en: 'walk in the park', ar: 'نتجول في الحديقة' }, { en: 'study together', ar: 'ندرس معا' },
          ],
          P: B.NAMED_SING,
        },
        tags: ['friendship', 'suggestions'], d: 1, limit: 24,
      },
      {
        tmpl: 'Do you want to {V} with us {T}?', arTmpl: 'هل تريد أن {V_ar} معنا {T_ar}؟',
        slots: {
          V: [
            { en: 'come', ar: 'تأتي' }, { en: 'play', ar: 'تلعب' },
            { en: 'eat', ar: 'تأكل' }, { en: 'study', ar: 'تدرس' },
            { en: 'walk', ar: 'تتمشى' },
          ],
          T: [
            { en: 'on Friday', ar: 'يوم الجمعة' }, { en: 'this weekend', ar: 'في عطلة نهاية الأسبوع' },
            { en: 'after class', ar: 'بعد الدرس' }, { en: 'tomorrow evening', ar: 'غدا مساء' },
            { en: 'next week', ar: 'الأسبوع القادم' },
          ],
        },
        tags: ['friendship', 'invitations'], d: 2, limit: 20,
      },
      {
        tmpl: 'I {V} my friends every {U}.', arTmpl: 'أنا {V_ar} كل {U_ar}.',
        slots: {
          V: [
            { en: 'call', ar: 'أتصل بأصدقائي' }, { en: 'meet', ar: 'أقابل أصدقائي' },
            { en: 'visit', ar: 'أزور أصدقائي' }, { en: 'help', ar: 'أساعد أصدقائي' },
            { en: 'invite', ar: 'أدعو أصدقائي' },
          ],
          U: [
            { en: 'week', ar: 'أسبوع' }, { en: 'weekend', ar: 'عطلة نهاية الأسبوع' },
            { en: 'Friday', ar: 'جمعة' }, { en: 'month', ar: 'شهر' },
          ],
        },
        tags: ['friendship', 'present-simple'], d: 2, limit: 20,
      },
      {
        tmpl: 'Are you new in the {C}?', arTmpl: 'هل أنت جديد في {C_ar}؟',
        slots: {
          C: [
            { en: 'city', ar: 'المدينة' }, { en: 'neighborhood', ar: 'الحي' },
            { en: 'school', ar: 'المدرسة' }, { en: 'company', ar: 'الشركة' },
            { en: 'university', ar: 'الجامعة' },
          ],
        },
        tags: ['friendship', 'questions'], d: 1, limit: 5,
      },
    ],
    fills: [
      { en: 'We should hang out sometime.', ar: 'ينبغي أن نقضي وقتا معا يوما ما.', word: 'hang', hint: 'يقضي وقتا' },
      { en: 'What do you do for fun?', ar: 'ماذا تفعل للمتعة؟', word: 'fun', hint: 'متعة' },
      { en: 'Here is my phone number.', ar: 'هذا رقم هاتفي.', word: 'number', hint: 'رقم' },
      { en: 'Are you new in this city?', ar: 'هل أنت جديد في هذه المدينة؟', word: 'city', hint: 'مدينة' },
      { en: 'I felt lonely in the beginning.', ar: 'شعرت بالوحدة في البداية.', word: 'lonely', hint: 'وحيد' },
      { en: 'The people here are very friendly.', ar: 'الناس هنا ودودون جدا.', word: 'friendly', hint: 'ودود' },
      { en: 'Send me a message tonight.', ar: 'أرسل لي رسالة الليلة.', word: 'message', hint: 'رسالة' },
      { en: 'Let us walk together in the park.', ar: 'لنتجول معا في الحديقة.', word: 'together', hint: 'معا' },
    ],
    orders: [
      { en: 'Are you new in this city, my friend?', ar: 'هل أنت جديد في هذه المدينة يا صديقي؟' },
      { en: 'What do you do for fun on weekends?', ar: 'ماذا تفعل للمتعة في عطلات نهاية الأسبوع؟' },
      { en: 'We should hang out sometime soon.', ar: 'ينبغي أن نقضي وقتا معا قريبا.' },
      { en: 'Here is my number, call me.', ar: 'هذا رقمي، اتصل بي.' },
      { en: 'Do you have any plans tomorrow?', ar: 'هل لديك أي خطط غدا؟' },
      { en: 'Send me a message before you come.', ar: 'أرسل لي رسالة قبل أن تأتي.' },
    ],
    mc: [
      { question: 'You want to see a new person again. You say:', options: ['We should hang out sometime.', 'I owe you one.', 'It is bedtime.', 'Congratulations!'], answerIndex: 0, ar: 'تريد لقاء شخص جديد مرة أخرى، فتقول:' },
      { question: 'What do you say when you give your number?', options: ['Here is my number.', 'Where is my number?', 'Your number is lost.', 'Numbers are boring.'], answerIndex: 0, ar: 'ماذا تقول عندما تعطي رقمك؟' },
      { question: '"I felt lonely" means:', options: ['شعرت بالوحدة', 'شعرت بالسعادة', 'شعرت بالتعب', 'شعرت بالخوف'], answerIndex: 0, ar: 'ما معنى I felt lonely؟' },
      { question: 'Which question starts a friendly talk?', options: ['What do you do for fun?', 'How much is your salary?', 'Why are you late again?', 'Who broke the window?'], answerIndex: 0, ar: 'أي سؤال يفتح حديثا وديا؟' },
    ],
  },

  /* ================= lesson 163 — Family Relationships ================= */
  {
    num: 163,
    tags: ['family', 'relationships'],
    objectives: [
      'Describe how close you are to family members',
      'Talk about weekly family habits in the present simple',
      'Say who someone takes after in the family',
    ],
    grammar: {
      explanation: 'To describe family ties, use "close to": "I am very close to my sister". Talk about habits with the present simple: "We talk every week", "We have a family dinner on Friday". The phrasal verb "take after" means to look or act like an older family member: "He takes after my father". Note the s on the verb with he, she and it: "She takes after my mother". Use "miss" to say you want to see someone: "I miss my grandmother when I travel".',
      explanationAr: 'لوصف صلة القرابة استخدم close to: I am very close to my sister. وتحدث عن العادات بالمضارع البسيط: We talk every week، We have a family dinner on Friday. والفعل المركب take after يعني يشبه أحد كبار العائلة في الشكل أو التصرف: He takes after my father. ولاحظ إضافة s للفعل مع he وshe وit: She takes after my mother. واستخدم miss للتعبير عن الاشتياق: I miss my grandmother when I travel.',
      examples: [
        { en: 'I am very close to my sister.', ar: 'أنا وثيق الصلة بأختي.' },
        { en: 'We talk on the phone every week.', ar: 'نتحدث عبر الهاتف كل أسبوع.' },
        { en: 'Everyone says I take after my father.', ar: 'الجميع يقول إنني أشبه أبي.' },
      ],
    },
    vocabulary: [
      { word: 'close', meaningAr: 'وثيق الصلة', example: 'I am very close to my sister.' },
      { word: 'take after', meaningAr: 'يشبه أحد أفراد عائلته', example: 'He takes after my father.' },
      { word: 'family dinner', meaningAr: 'عشاء عائلي', example: 'We have a family dinner on Friday.' },
      { word: 'grandmother', meaningAr: 'جدة', example: 'My grandmother lives with us.' },
      { word: 'uncle', meaningAr: 'عم / خال', example: 'My uncle visits us every month.' },
      { word: 'cousin', meaningAr: 'ابن العم / الخال', example: 'All my cousins come to our house.' },
      { word: 'support', meaningAr: 'يدعم', example: 'My family always supports me.' },
      { word: 'miss', meaningAr: 'يفتقد / يشتاق', example: 'I miss my mother when I travel.' },
      { word: 'get together', meaningAr: 'يجتمع', example: 'We get together every weekend.' },
      { word: 'laugh', meaningAr: 'يضحك', example: 'We laugh a lot together.' },
      { word: 'argue', meaningAr: 'يتجادل', example: 'Brothers sometimes argue, but they love each other.' },
      { word: 'phone call', meaningAr: 'مكالمة هاتفية', example: 'I make a phone call to my parents every week.' },
    ],
    scenario: [
      { en: 'Tell me about your family.', ar: 'حدثني عن عائلتك.', d: 1 },
      { en: 'I am very close to my sister.', ar: 'أنا وثيق الصلة بأختي.', d: 1 },
      { en: 'We talk on the phone every week.', ar: 'نتحدث عبر الهاتف كل أسبوع.', d: 1 },
      { en: 'She is my best friend too.', ar: 'هي أيضا أفضل صديقة لي.', d: 1 },
      { en: 'And your brothers?', ar: 'وإخوتك؟', d: 1 },
      { en: 'My two brothers live in another city.', ar: 'أخواي يسكان في مدينة أخرى.', d: 1 },
      { en: 'We do not meet often, but we talk every week.', ar: 'لا نلتقي كثيرا، لكننا نتحدث كل أسبوع.', d: 2 },
      { en: 'Who do you take after?', ar: 'بمن تشبه في عائلتك؟', d: 2 },
      { en: 'Everyone says I take after my father.', ar: 'الجميع يقول إنني أشبه أبي.', d: 2 },
      { en: 'We have the same smile.', ar: 'لدينا الابتسامة نفسها.', d: 2 },
      { en: 'Do you have a big family dinner?', ar: 'هل لديكم عشاء عائلي كبير؟', d: 2 },
      { en: 'Yes, every Friday at my grandmother\'s house.', ar: 'نعم، كل جمعة في بيت جدتي.', d: 2 },
      { en: 'All my cousins come, and the house is full.', ar: 'يأتي جميع أبناء عمي، فيصبح البيت مكتظا.', d: 3 },
      { en: 'We ate and laughed for hours last Friday.', ar: 'أكلنا وضحكنا ساعات يوم الجمعة الماضي.', d: 3 },
      { en: 'My mother cooks the best rice.', ar: 'أمي تطبخ أطيب أرز.', d: 3 },
      { en: 'Do you miss your family when you travel?', ar: 'هل تفتقد عائلتك عندما تسافر؟', d: 3 },
      { en: 'Yes, I miss them a lot, but we video call.', ar: 'نعم، أفتقدهم كثيرا، لكننا نتصل بالفيديو.', d: 3 },
      { en: 'Family is a great support in life.', ar: 'العائلة دعامة عظيمة في الحياة.', d: 3 },
    ],
    patterns: [
      {
        tmpl: '{S} {BE} very close to {F}.', arTmpl: '{S_ar} وثيق الصلة {F_ar}.',
        slots: {
          S: B.PRONOUNS,
          BE: (x) => [{ en: B.AGR[x.S.agr].be, ar: '' }],
          F: [
            { en: 'my sister', ar: 'بأختي' }, { en: 'my brother', ar: 'بأخي' },
            { en: 'my mother', ar: 'بأمي' }, { en: 'my father', ar: 'بأبي' },
            { en: 'my grandmother', ar: 'بجدتي' }, { en: 'my cousins', ar: 'بأبناء عمي' },
          ],
        },
        tags: ['family', 'verb-be'], d: 1, limit: 24,
      },
      {
        tmpl: 'We {V} every {U}.', arTmpl: 'نحن {V_ar} كل {U_ar}.',
        slots: {
          V: [
            { en: 'talk on the phone', ar: 'نتحدث عبر الهاتف' }, { en: 'have a family dinner', ar: 'نتناول عشاء عائليا' },
            { en: 'visit my grandmother', ar: 'نزور جدتي' }, { en: 'get together', ar: 'نجتمع' },
            { en: 'eat together', ar: 'نأكل معا' }, { en: 'call my parents', ar: 'نتصل بوالديّ' },
          ],
          U: [
            { en: 'week', ar: 'أسبوع' }, { en: 'Friday', ar: 'جمعة' },
            { en: 'month', ar: 'شهر' }, { en: 'weekend', ar: 'عطلة نهاية الأسبوع' },
          ],
        },
        tags: ['family', 'present-simple'], d: 2, limit: 20,
      },
      {
        tmpl: '{S} {V} {F}.', arTmpl: '{S_ar} {V_ar} {F_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{
            en: (x.S.agr === 'he' || x.S.agr === 'she') ? 'takes after' : 'take after',
            ar: { I: 'أشبه', you: 'تشبه', he: 'يشبه', she: 'تشبه', we: 'نشبه', they: 'يشبهون' }[x.S.agr],
          }],
          F: [
            { en: 'my father', ar: 'أبي' }, { en: 'my mother', ar: 'أمي' },
            { en: 'my grandfather', ar: 'جدي' }, { en: 'my grandmother', ar: 'جدتي' },
            { en: 'my uncle', ar: 'عمي' },
          ],
        },
        tags: ['family', 'phrasal-verb'], d: 2, limit: 24,
      },
      {
        tmpl: 'I {V} my family when I {T}.', arTmpl: 'أنا {V_ar} عائلتي عندما {T_ar}.',
        slots: {
          V: [
            { en: 'miss', ar: 'أفتقد' }, { en: 'think about', ar: 'أفكر في' },
            { en: 'ask about', ar: 'أسأل عن' }, { en: 'send photos to', ar: 'أرسل صورا إلى' },
          ],
          T: [
            { en: 'travel', ar: 'أسافر' }, { en: 'study abroad', ar: 'أدرس في الخارج' },
            { en: 'work late', ar: 'أعمل حتى وقت متأخر' }, { en: 'am busy', ar: 'أكون مشغولا' },
          ],
        },
        tags: ['family', 'feelings'], d: 3, limit: 16,
      },
    ],
    fills: [
      { en: 'I am very close to my sister.', ar: 'أنا وثيق الصلة بأختي.', word: 'close', hint: 'وثيق الصلة' },
      { en: 'We talk on the phone every week.', ar: 'نتحدث عبر الهاتف كل أسبوع.', word: 'week', hint: 'زمن' },
      { en: 'Everyone says I take after my father.', ar: 'الجميع يقول إنني أشبه أبي.', word: 'after', hint: 'يشبه' },
      { en: 'We have a family dinner on Friday.', ar: 'نتناول عشاء عائليا يوم الجمعة.', word: 'dinner', hint: 'عشاء' },
      { en: 'I miss my mother when I travel.', ar: 'أفتقد أمي عندما أسافر.', word: 'miss', hint: 'يفتقد' },
      { en: 'My family always supports me.', ar: 'عائلتي تدعمني دائما.', word: 'supports', hint: 'يدعم' },
      { en: 'All my cousins come to our house.', ar: 'يأتي جميع أبناء عمي إلى بيتنا.', word: 'cousins', hint: 'أبناء العم' },
      { en: 'Do you have a big family?', ar: 'هل لديك عائلة كبيرة؟', word: 'family', hint: 'عائلة' },
    ],
    orders: [
      { en: 'My sister and I are very close.', ar: 'أنا وأختي وثيقا الصلة.' },
      { en: 'We talk on the phone every week.', ar: 'نتحدث عبر الهاتف كل أسبوع.' },
      { en: 'Everyone says I take after my father.', ar: 'الجميع يقول إنني أشبه أبي.' },
      { en: 'We had a big dinner last Friday.', ar: 'تناولنا عشاءا كبيرا الجمعة الماضية.' },
      { en: 'Do you call your parents every week?', ar: 'هل تتصل بوالديك كل أسبوع؟' },
      { en: 'Family is a great support in life.', ar: 'العائلة دعامة عظيمة في الحياة.' },
    ],
    mc: [
      { question: '"take after" means:', options: ['يشبه أحد أفراد عائلته', 'يأخذ شيئا بعده', 'يساعده في العمل', 'يسافر معه'], answerIndex: 0, ar: 'ما معنى take after؟' },
      { question: 'Your sister lives far, but you talk every week. You are:', options: ['close to her', 'angry with her', 'afraid of her', 'tired of her'], answerIndex: 0, ar: 'أختك تسكن بعيدا لكنكما تتحدثان كل أسبوع، فأنتما:' },
      { question: 'Which sentence is correct?', options: ['We get together every Friday.', 'We gets together every Friday.', 'We getting together Friday.', 'We get to gather every Friday.'], answerIndex: 0, ar: 'أي جملة صحيحة؟' },
      { question: 'A "family dinner" is:', options: ['عشاء تجتمع عليه العائلة', 'عشاء في مطعم فخم', 'وجبة تأكلها وحدك', 'عشاء قبل الفطور'], answerIndex: 0, ar: 'ما هو family dinner؟' },
    ],
  },
];
