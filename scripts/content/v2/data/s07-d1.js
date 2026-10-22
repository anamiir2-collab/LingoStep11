/* ============================================================
   v2 section data — s07-d1.js
   Relationships & Social Communication (end of Section 7)
   lessons 167–170 (170 = review)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 167 — Cultural Differences ================= */
  {
    num: 167,
    tags: ['culture', 'customs'],
    objectives: [
      'Talk about customs in your country',
      'Ask politely about other cultures',
      'Show respect for different traditions',
    ],
    grammar: {
      explanation: 'To describe customs, use the present simple: "In my country, we greet guests with tea". Add "when" for the moment: "People shake hands when they meet". For polite interest, say "That is interesting!" and ask "How do people greet each other in your country?". A first conditional works for advice: "If you are not sure, just ask politely". Remember: different does not mean strange or wrong.',
      explanationAr: 'لوصف العادات استخدم المضارع البسيط: In my country, we greet guests with tea. وأضف when للحظة: People shake hands when they meet. ولإبداء الاهتمام المهذب قل That is interesting واسأل How do people greet each other in your country؟ وينفع الشرط الأول للنصيحة: If you are not sure, just ask politely. وتذكر أن الاختلاف لا يعني الغرابة أو الخطأ.',
      examples: [
        { en: 'In my country, we greet guests with tea.', ar: 'في بلدي نحيي الضيوف بالشاي.' },
        { en: 'People shake hands when they meet.', ar: 'يتصافح الناس عندما يلتقون.' },
        { en: 'If you are not sure, just ask politely.', ar: 'إذا لم تكن متأكدا، اسأل بأدب فقط.' },
      ],
    },
    vocabulary: [
      { word: 'custom', meaningAr: 'عادة اجتماعية', example: 'Every country has a special custom.', ipa: 'ˈkʌstəm' },
      { word: 'tradition', meaningAr: 'تقليد', example: 'This tradition is very old.' },
      { word: 'culture', meaningAr: 'ثقافة', example: 'I respect your culture.' },
      { word: 'greet', meaningAr: 'يحيي', example: 'We greet our guests warmly.' },
      { word: 'handshake', meaningAr: 'مصافحة', example: 'A firm handshake shows confidence.' },
      { word: 'bow', meaningAr: 'ينحني', example: 'Some people bow to say hello.' },
      { word: 'polite', meaningAr: 'مؤدب', example: 'It is polite to greet the host.' },
      { word: 'rude', meaningAr: 'فظ / غير مؤدب', example: 'Pointing at people is rude.' },
      { word: 'respect', meaningAr: 'يحترم', example: 'We respect our elders.' },
      { word: 'guest', meaningAr: 'ضيف', example: 'The guest arrived in the morning.' },
      { word: 'abroad', meaningAr: 'في الخارج', example: 'She lives abroad now.' },
      { word: 'elders', meaningAr: 'كبار السن', example: 'Listen to your elders.' },
    ],
    scenario: [
      { en: 'In my country, we greet guests with tea.', ar: 'في بلدي نحيي الضيوف بالشاي.', d: 1 },
      { en: 'People shake hands when they meet.', ar: 'يتصافح الناس عندما يلتقون.', d: 1 },
      { en: 'Some cultures bow instead of shaking hands.', ar: 'بعض الثقافات تنحني بدلا من المصافحة.', d: 2 },
      { en: 'In some countries, people do not eat with their left hand.', ar: 'في بعض البلدان لا يأكل الناس بأيديهم اليسرى.', d: 2 },
      { en: 'It is polite to bring a small gift when you visit.', ar: 'من المؤدب أن تحضر هدية صغيرة عند الزيارة.', d: 1 },
      { en: 'In our culture, we take off our shoes at the door.', ar: 'في ثقافتنا نخلع أحذيتنا عند الباب.', d: 2 },
      { en: 'That is interesting! Tell me more, please.', ar: 'هذا مثير للاهتمام! أخبرني المزيد من فضلك.', d: 2 },
      { en: 'Is it rude to refuse the coffee?', ar: 'هل رفض القهوة أمر فظ؟', d: 1 },
      { en: 'No, it is not rude here.', ar: 'لا، ليس أمرا فظا هنا.', d: 2 },
      { en: 'Have you ever visited a foreign country?', ar: 'هل سبق أن زرت بلدا أجنبيا؟', d: 2 },
      { en: 'Yes, I have visited Turkey twice.', ar: 'نعم، زرت تركيا مرتين.', d: 2 },
      { en: 'Older people sit first at our table.', ar: 'كبار السن يجلسون أولا على مائتنا.', d: 3 },
      { en: 'We respect our elders in every culture.', ar: 'نحترم كبار السن في كل ثقافة.', d: 2 },
      { en: 'How do people greet each other in your country?', ar: 'كيف يحيي الناس بعضهم بعضا في بلدك؟', d: 1 },
      { en: 'Different customs are not strange, only different.', ar: 'العادات المختلفة ليست غريبة، بل مختلفة فقط.', d: 3 },
      { en: 'If you are not sure, just ask politely.', ar: 'إذا لم تكن متأكدا، اسأل بأدب فقط.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'In my country, we {V} {O}.', arTmpl: 'في بلدي {V_ar} {O_ar}.',
        slots: {
          V: [
            { en: 'offer', ar: 'نقدم' }, { en: 'prepare', ar: 'نحضر' },
            { en: 'bring', ar: 'نجلب' }, { en: 'send', ar: 'نرسل' },
          ],
          O: [
            { en: 'tea to our guests', ar: 'الشاي لضيوفنا' }, { en: 'dates to visitors', ar: 'التمر للزوار' },
            { en: 'juice at weddings', ar: 'العصير في الأعراس' }, { en: 'sweets to neighbors', ar: 'الحلويات للجيران' },
          ],
        },
        tags: ['culture', 'present-simple'], d: 1, limit: 16,
      },
      {
        tmpl: 'People in {C} {V}.', arTmpl: 'الناس في {C_ar} {V_ar}.',
        slots: {
          C: B.COUNTRIES,
          V: [
            { en: 'love big weddings', ar: 'يحبون الأعراس الكبيرة' },
            { en: 'eat late at night', ar: 'يأكلون في وقت متأخر' },
            { en: 'respect their elders', ar: 'يحترمون كبار السن' },
            { en: 'drink mint tea', ar: 'يشربون الشاي بالنعناع' },
            { en: 'host guests proudly', ar: 'يستضيفون ضيوفهم بفخر' },
          ],
        },
        tags: ['culture', 'present-simple'], d: 2, limit: 40,
      },
      {
        tmpl: '{S} {V} about the local customs.', arTmpl: '{S_ar} {V_ar} عن العادات المحلية.',
        slots: {
          S: B.PEOPLE_SING,
          V: (x) => [{ en: B.enPresent('learn', x.S.agr), ar: B.arPresent('learn', x.S.agr) }],
        },
        tags: ['culture', 'present-simple'], d: 2, limit: 10,
      },
      {
        tmpl: 'It is {ADJ} to {A} in some cultures.', arTmpl: 'من {ADJ_ar} أن {A_ar} في بعض الثقافات.',
        slots: {
          ADJ: [
            { en: 'polite', ar: 'المهذب' }, { en: 'normal', ar: 'الطبيعي' },
            { en: 'common', ar: 'الشائع' },
          ],
          A: [
            { en: 'take off your shoes', ar: 'تخلع حذاءك' },
            { en: 'bring a small gift', ar: 'تحضر هدية صغيرة' },
            { en: 'arrive on time', ar: 'تصل في الوقت المحدد' },
            { en: 'greet the elders first', ar: 'تحيي كبار السن أولا' },
          ],
        },
        tags: ['culture', 'etiquette'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'In my country, we greet guests with tea.', ar: 'في بلدي نحيي الضيوف بالشاي.', word: 'greet', hint: 'فعل' },
      { en: 'People shake hands when they meet.', ar: 'يتصافح الناس عندما يلتقون.', word: 'hands', hint: 'أعضاء الجسم' },
      { en: 'It is polite to bring a small gift.', ar: 'من المؤدب أن تحضر هدية صغيرة.', word: 'polite', hint: 'صفة' },
      { en: 'That is interesting! Tell me more, please.', ar: 'هذا مثير للاهتمام! أخبرني المزيد من فضلك.', word: 'interesting' },
      { en: 'Is it rude to refuse the coffee?', ar: 'هل رفض القهوة أمر فظ؟', word: 'rude', hint: 'صفة' },
      { en: 'We respect our elders in every culture.', ar: 'نحترم كبار السن في كل ثقافة.', word: 'respect' },
      { en: 'Different customs are not strange, only different.', ar: 'العادات المختلفة ليست غريبة، بل مختلفة فقط.', word: 'customs', hint: 'جمع' },
      { en: 'If you are not sure, just ask politely.', ar: 'إذا لم تكن متأكدا، اسأل بأدب فقط.', word: 'politely' },
    ],
    orders: [
      { en: 'People shake hands when they meet.', ar: 'يتصافح الناس عندما يلتقون.' },
      { en: 'In our culture, we take off our shoes.', ar: 'في ثقافتنا نخلع أحذيتنا.' },
      { en: 'Different customs are not strange here.', ar: 'العادات المختلفة ليست غريبة هنا.' },
      { en: 'How do people greet each other?', ar: 'كيف يحيي الناس بعضهم بعضا؟' },
      { en: 'Have you ever visited a foreign country?', ar: 'هل سبق أن زرت بلدا أجنبيا؟' },
      { en: 'It is polite to bring a gift.', ar: 'من المؤدب أن تحضر هدية.' },
    ],
    mc: [
      { question: 'What do many people do when they meet for the first time?', options: ['They shake hands', 'They go to bed', 'They pay the bill', 'They close the door'], answerIndex: 0, ar: 'ماذا يفعل كثير من الناس عند اللقاء الأول؟' },
      { question: 'An old habit of a country is called a:', options: ['tradition', 'ticket', 'keyboard', 'recipe'], answerIndex: 0, ar: 'العادة القديمة في البلد تسمى:' },
      { question: '"That is interesting!" is a polite way to:', options: ['show interest', 'say goodbye', 'refuse food', 'ask for money'], answerIndex: 0, ar: 'عبارة That is interesting وسيلة مهذبة لـ:' },
      { question: 'If you are not sure about a custom, you should:', options: ['ask politely', 'laugh loudly', 'leave the house', 'post it online'], answerIndex: 0, ar: 'إذا لم تكن متأكدا من عادة، فعليك أن:' },
    ],
  },

  /* ================= lesson 168 — Social Media Etiquette ================= */
  {
    num: 168,
    tags: ['social-media', 'etiquette'],
    objectives: [
      'Think before you post or comment',
      'Protect your personal information online',
      'Write polite comments and messages',
    ],
    grammar: {
      explanation: 'Online advice often uses imperatives and "should": "Think before you post", "You should not write angry messages". Use the present perfect for news: "Have you seen the new post?", "My cousin has uploaded fifty photos today". For real conditions, use the first conditional: "If a post hurts someone, delete it". Keep commands polite with "please": "Keep your account private, please".',
      explanationAr: 'تستخدم النصائح على الإنترنت الأمر وshould: Think before you post، وYou should not write angry messages. واستخدم المضارع التام للأخبار: Have you seen the new post؟ وMy cousin has uploaded fifty photos today. وللشرط الحقيقي استخدم الشرط الأول: If a post hurts someone, delete it. وأضف please لتأدب الأمر: Keep your account private, please.',
      examples: [
        { en: 'Think before you post anything online.', ar: 'فكر قبل أن تنشر أي شيء على الإنترنت.' },
        { en: 'Have you blocked the fake account?', ar: 'هل حظرت الحساب المزيف؟' },
        { en: 'If a post hurts someone, delete it.', ar: 'إذا جرح منشور أحدهم، فاحذفه.' },
      ],
    },
    vocabulary: [
      { word: 'post', meaningAr: 'منشور / ينشر', example: 'Her post got many likes.' },
      { word: 'share', meaningAr: 'يشارك', example: 'Do not share that link.' },
      { word: 'comment', meaningAr: 'تعليق', example: 'I wrote a kind comment.' },
      { word: 'follower', meaningAr: 'متابع', example: 'She has a thousand followers.' },
      { word: 'unfollow', meaningAr: 'يلغي المتابعة', example: 'Why did you unfollow him?' },
      { word: 'private', meaningAr: 'خاص', example: 'Keep your account private.' },
      { word: 'personal information', meaningAr: 'معلومات شخصية', example: 'Never share personal information.' },
      { word: 'block', meaningAr: 'يحظر', example: 'I blocked the rude account.' },
      { word: 'upload', meaningAr: 'يرفع', example: 'He uploaded a new video.' },
      { word: 'tag', meaningAr: 'يوسم / يذكر', example: 'Please do not tag me.' },
      { word: 'account', meaningAr: 'حساب', example: 'My account is protected.' },
      { word: 'delete', meaningAr: 'يحذف', example: 'Delete that old photo.' },
    ],
    scenario: [
      { en: 'Think before you post anything online.', ar: 'فكر قبل أن تنشر أي شيء على الإنترنت.', d: 1 },
      { en: 'Do not share your password with friends.', ar: 'لا تشارك كلمة المرور مع الأصدقاء.', d: 1 },
      { en: 'Did you see her comment on my photo?', ar: 'هل رأيت تعليقها على صورتي؟', d: 1 },
      { en: 'Yes, it was kind and respectful.', ar: 'نعم، كان لطيفا ومحترما.', d: 2 },
      { en: 'I never share personal information online.', ar: 'لا أشارك المعلومات الشخصية على الإنترنت أبدا.', d: 2 },
      { en: 'My cousin has uploaded fifty photos today.', ar: 'رفع ابن عمي خمسين صورة اليوم.', d: 2 },
      { en: 'Please do not tag me in that picture.', ar: 'من فضلك لا توسمني في تلك الصورة.', d: 2 },
      { en: 'Why did she unfollow the group?', ar: 'لماذا ألغت متابعة المجموعة؟', d: 2 },
      { en: 'Maybe she did not like the posts.', ar: 'ربما لم تعجبها المنشورات.', d: 2 },
      { en: 'A polite comment can make someone happy.', ar: 'التعليق المهذب يمكن أن يسعد أحدهم.', d: 3 },
      { en: 'We should not write angry messages.', ar: 'ينبغي ألا نكتب رسائل غاضبة.', d: 2 },
      { en: 'Have you blocked the fake account?', ar: 'هل حظرت الحساب المزيف؟', d: 2 },
      { en: 'Not yet, I have reported it twice.', ar: 'ليس بعد، بلغت عنه مرتين.', d: 2 },
      { en: 'Keep your account private, please.', ar: 'اجعل حسابك خاصا من فضلك.', d: 1 },
      { en: 'The internet does not forget anything.', ar: 'الإنترنت لا ينسى شيئا.', d: 3 },
      { en: 'If a post hurts someone, delete it.', ar: 'إذا جرح منشور أحدهم، فاحذفه.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Do not share {PI} online.', arTmpl: 'لا تشارك {PI_ar} على الإنترنت.',
        slots: {
          PI: [
            { en: 'your password', ar: 'كلمة المرور' }, { en: 'your address', ar: 'عنوانك' },
            { en: 'private photos', ar: 'الصور الخاصة' }, { en: 'bank details', ar: 'بيانات البنك' },
            { en: 'your travel plans', ar: 'خطط سفرك' }, { en: 'your phone number', ar: 'رقم هاتفك' },
          ],
        },
        tags: ['social-media', 'imperative'], d: 1, limit: 6,
      },
      {
        tmpl: 'Have you seen {PT}?', arTmpl: 'هل رأيت {PT_ar}؟',
        slots: {
          PT: [
            { en: 'the new post', ar: 'المنشور الجديد' }, { en: 'the new photo', ar: 'الصورة الجديدة' },
            { en: 'the new video', ar: 'الفيديو الجديد' }, { en: 'the new story', ar: 'القصة الجديدة' },
            { en: 'the new page', ar: 'الصفحة الجديدة' }, { en: 'the new group', ar: 'المجموعة الجديدة' },
          ],
        },
        tags: ['social-media', 'present-perfect'], d: 1, limit: 6,
      },
      {
        tmpl: '{S} {V} kind comments every day.', arTmpl: '{S_ar} {V_ar} تعليقات لطيفة كل يوم.',
        slots: {
          S: B.PEOPLE_SING,
          V: (x) => [{ en: B.enPresent('write', x.S.agr), ar: B.arPresent('write', x.S.agr) }],
        },
        tags: ['social-media', 'present-simple'], d: 2, limit: 12,
      },
      {
        tmpl: 'If someone is rude online, {A}.', arTmpl: 'إذا كان شخص ما فظا على الإنترنت، {A_ar}.',
        slots: {
          A: [
            { en: 'do not reply', ar: 'لا ترد' }, { en: 'block the account', ar: 'احظر الحساب' },
            { en: 'report the comment', ar: 'أبلغ عن التعليق' }, { en: 'tell an adult', ar: 'أخبر شخصا بالغا' },
          ],
        },
        tags: ['social-media', 'conditional'], d: 3, limit: 4,
      },
      {
        tmpl: 'Think before you {A} online.', arTmpl: 'فكر قبل أن {A_ar} على الإنترنت.',
        slots: {
          A: [
            { en: 'post a photo', ar: 'تنشر صورة' }, { en: 'share a video', ar: 'تشارك مقطع فيديو' },
            { en: 'write a comment', ar: 'تكتب تعليقا' }, { en: 'tag a friend', ar: 'توسم صديقا' },
            { en: 'reply to a stranger', ar: 'ترد على غريب' }, { en: 'upload a story', ar: 'ترفع قصة' },
          ],
        },
        tags: ['social-media', 'imperative'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'Think before you post anything online.', ar: 'فكر قبل أن تنشر أي شيء على الإنترنت.', word: 'post', hint: 'فعل' },
      { en: 'Do not share your password with friends.', ar: 'لا تشارك كلمة المرور مع الأصدقاء.', word: 'password' },
      { en: 'Please do not tag me in that picture.', ar: 'من فضلك لا توسمني في تلك الصورة.', word: 'tag' },
      { en: 'Why did she unfollow the group?', ar: 'لماذا ألغت متابعة المجموعة؟', word: 'unfollow' },
      { en: 'Keep your account private, please.', ar: 'اجعل حسابك خاصا من فضلك.', word: 'private', hint: 'صفة' },
      { en: 'Have you blocked the fake account?', ar: 'هل حظرت الحساب المزيف؟', word: 'blocked' },
      { en: 'We should not write angry messages.', ar: 'ينبغي ألا نكتب رسائل غاضبة.', word: 'messages', hint: 'جمع' },
      { en: 'If a post hurts someone, delete it.', ar: 'إذا جرح منشور أحدهم، فاحذفه.', word: 'delete' },
    ],
    orders: [
      { en: 'Think before you post a photo.', ar: 'فكر قبل أن تنشر صورة.' },
      { en: 'Do not share personal information online.', ar: 'لا تشارك المعلومات الشخصية على الإنترنت.' },
      { en: 'Have you seen the new post?', ar: 'هل رأيت المنشور الجديد؟' },
      { en: 'A polite comment can make someone happy.', ar: 'التعليق المهذب يمكن أن يسعد أحدهم.' },
      { en: 'Keep your account private, my friend.', ar: 'اجعل حسابك خاصا يا صديقي.' },
      { en: 'If a post hurts someone, delete it.', ar: 'إذا جرح منشور أحدهم، فاحذفه.' },
    ],
    mc: [
      { question: 'What should you do before you post?', options: ['Think about it', 'Post very fast', 'Ask a stranger', 'Buy a new phone'], answerIndex: 0, ar: 'ماذا يجب أن تفعل قبل النشر؟' },
      { question: 'Which information is safe to share online?', options: ['Your favorite color', 'Your password', 'Your home address', 'Your bank card'], answerIndex: 0, ar: 'أي معلومات من الآمن مشاركتها على الإنترنت؟' },
      { question: 'Someone writes a rude comment. What is the polite reaction?', options: ['Stay calm and block him', 'Write worse words', 'Share his photo', 'Call him at night'], answerIndex: 0, ar: 'كتب أحدهم تعليقا فظا. ما رد الفعل المهذب؟' },
      { question: '"unfollow" means:', options: ['إلغاء متابعة حساب', 'إضافة صديق جديد', 'حذف التطبيق', 'تعليق لطيف'], answerIndex: 0, ar: 'ما معنى unfollow؟' },
    ],
  },

  /* ================= lesson 169 — Phone Etiquette (A2) ================= */
  {
    num: 169,
    tags: ['phone', 'etiquette'],
    objectives: [
      'Answer calls with polite phrases',
      'Explain problems on the line politely',
      'Take and leave clear messages',
    ],
    grammar: {
      explanation: 'On the phone, polite questions start with "May I" or "Could you": "May I ask who is calling?", "Could you hold on a moment, please?". Use "I will call you back" for a later call, and "Sorry" before bad news: "Sorry, the connection is very bad". "Would you mind + verb-ing" is a very polite request: "Would you mind calling again after lunch?".',
      explanationAr: 'في الهاتف تبدأ الأسئلة المهذبة بـ May I أو Could you: May I ask who is calling؟ وCould you hold on a moment, please؟ واستخدم I will call you back للاتصال لاحقا، وقل Sorry قبل الخبر السيئ: Sorry, the connection is very bad. وصيغة Would you mind مع الفعل + ing طلب مهذب جدا: Would you mind calling again after lunch؟',
      examples: [
        { en: 'May I ask who is calling?', ar: 'هل لي أن أسأل من المتصل؟' },
        { en: 'Sorry, the connection is very bad.', ar: 'عذرا، الاتصال سيئ جدا.' },
        { en: 'Would you mind calling again after lunch?', ar: 'هل تمانع الاتصال مرة أخرى بعد الغداء؟' },
      ],
    },
    vocabulary: [
      { word: 'connection', meaningAr: 'اتصال / خط', example: 'The connection is bad today.' },
      { word: 'hold on', meaningAr: 'انتظر لحظة', example: 'Hold on, please.' },
      { word: 'speak up', meaningAr: 'يرفع صوته', example: 'Could you speak up, please?' },
      { word: 'wrong number', meaningAr: 'رقم خطأ', example: 'Sorry, wrong number.' },
      { word: 'busy', meaningAr: 'مشغول / مشغول الخط', example: 'The line is busy now.' },
      { word: 'message', meaningAr: 'رسالة', example: 'Please leave a message.' },
      { word: 'silent mode', meaningAr: 'الوضع الصامت', example: 'My phone is on silent mode.' },
      { word: 'battery', meaningAr: 'بطارية', example: 'The battery is empty.' },
      { word: 'call back', meaningAr: 'يعاود الاتصال', example: 'I will call you back soon.' },
      { word: 'available', meaningAr: 'متاح', example: 'Is the manager available now?' },
      { word: 'answer', meaningAr: 'يرد', example: 'He answers the phone quickly.' },
      { word: 'polite', meaningAr: 'مؤدب', example: 'Be polite on the phone.' },
    ],
    scenario: [
      { en: 'Thank you for calling the clinic.', ar: 'شكرا لاتصالك بالعيادة.', d: 1 },
      { en: 'May I ask who is calling?', ar: 'هل لي أن أسأل من المتصل؟', d: 1 },
      { en: 'This is Ahmed speaking.', ar: 'أنا أحمد على الخط.', d: 2 },
      { en: 'Could you hold on a moment, please?', ar: 'هل يمكنك الانتظار لحظة من فضلك؟', d: 2 },
      { en: 'Sure, take your time.', ar: 'حسنا، خذ وقتك.', d: 2 },
      { en: 'Sorry, the connection is very bad.', ar: 'عذرا، الاتصال سيئ جدا.', d: 1 },
      { en: 'Could you speak up, please?', ar: 'هل يمكنك رفع صوتك من فضلك؟', d: 2 },
      { en: 'I am sorry, you have the wrong number.', ar: 'آسف، لقد اتصلت بالرقم الخطأ.', d: 2 },
      { en: 'Oh, excuse me for the mistake.', ar: 'أوه، عذرا على هذا الخطأ.', d: 2 },
      { en: 'She is busy right now.', ar: 'هي مشغولة الآن.', d: 1 },
      { en: 'I will call you back in ten minutes.', ar: 'سأتصل بك بعد عشر دقائق.', d: 2 },
      { en: 'Please leave your name and number.', ar: 'من فضلك اترك اسمك ورقمك.', d: 1 },
      { en: 'My grandparents do not answer unknown numbers.', ar: 'جداي لا يردان على الأرقام المجهولة.', d: 3 },
      { en: 'Is your phone on silent mode?', ar: 'هل هاتفك على الوضع الصامت؟', d: 2 },
      { en: 'No, the battery is empty again.', ar: 'لا، البطارية فارغة مرة أخرى.', d: 2 },
      { en: 'Would you mind calling again after lunch?', ar: 'هل تمانع الاتصال مرة أخرى بعد الغداء؟', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Could you {A}, please?', arTmpl: 'هل يمكنك {A_ar} من فضلك؟',
        slots: {
          A: [
            { en: 'hold on a moment', ar: 'الانتظار لحظة' },
            { en: 'speak up a little', ar: 'رفع صوتك قليلا' },
            { en: 'call me back later', ar: 'معاودة الاتصال بي لاحقا' },
            { en: 'repeat the number', ar: 'تكرار الرقم' },
            { en: 'turn on the speaker', ar: 'تشغيل مكبر الصوت' },
            { en: 'try again', ar: 'المحاولة مرة أخرى' },
            { en: 'leave your name', ar: 'ترك اسمك' },
            { en: 'call again at six', ar: 'الاتصال مرة أخرى في السادسة' },
          ],
        },
        tags: ['phone', 'requests'], d: 1, limit: 8,
      },
      {
        tmpl: 'I will call you back {T}.', arTmpl: 'سأتصل بك {T_ar}.',
        slots: {
          T: [
            { en: 'in fifteen minutes', ar: 'بعد خمس عشرة دقيقة' }, { en: 'after lunch', ar: 'بعد الغداء' },
            { en: 'tomorrow morning', ar: 'غدا صباحا' }, { en: 'this evening', ar: 'هذا المساء' },
            { en: 'at six', ar: 'في السادسة' }, { en: 'on Sunday', ar: 'يوم الأحد' },
          ],
        },
        tags: ['phone', 'future'], d: 1, limit: 6,
      },
      {
        tmpl: 'Sorry, {R}.', arTmpl: 'عذرا، {R_ar}.',
        slots: {
          R: [
            { en: 'the connection is bad', ar: 'الاتصال سيئ' }, { en: 'the line is busy', ar: 'الخط مشغول' },
            { en: 'you have the wrong number', ar: 'لقد اتصلت بالرقم الخطأ' },
            { en: 'I can not hear you well', ar: 'لا أستطيع سماعك جيدا' },
            { en: 'her phone is off', ar: 'هاتفها مطفأ' },
            { en: 'the battery is empty', ar: 'البطارية فارغة' },
            { en: 'he is in a meeting', ar: 'هو في اجتماع' },
            { en: 'she is not available', ar: 'هي غير متاحة' },
          ],
        },
        tags: ['phone', 'apologies'], d: 2, limit: 8,
      },
      {
        tmpl: 'Is {N} available now, please?', arTmpl: 'هل {N_ar} متاح الآن من فضلك؟',
        slots: {
          N: [
            { en: 'Omar', ar: 'عمر' }, { en: 'Ahmed', ar: 'أحمد' },
            { en: 'Khalid', ar: 'خالد' }, { en: 'Youssef', ar: 'يوسف' },
            { en: 'your manager', ar: 'مديرك' }, { en: 'Mr. Ali', ar: 'السيد علي' },
          ],
        },
        tags: ['phone', 'questions'], d: 1, limit: 6,
      },
      {
        tmpl: '{S} {V} the phone politely.', arTmpl: '{S_ar} {V_ar} على الهاتف بأدب.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('answer', x.S.agr), ar: B.arPresent('answer', x.S.agr) }],
        },
        tags: ['phone', 'present-simple'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'May I ask who is calling?', ar: 'هل لي أن أسأل من المتصل؟', word: 'calling', hint: 'فعل + ing' },
      { en: 'Could you hold on a moment, please?', ar: 'هل يمكنك الانتظار لحظة من فضلك؟', word: 'moment' },
      { en: 'Sorry, the connection is very bad.', ar: 'عذرا، الاتصال سيئ جدا.', word: 'connection' },
      { en: 'Could you speak up, please?', ar: 'هل يمكنك رفع صوتك من فضلك؟', word: 'speak' },
      { en: 'I am sorry, you have the wrong number.', ar: 'آسف، لقد اتصلت بالرقم الخطأ.', word: 'wrong', hint: 'صفة' },
      { en: 'I will call you back after lunch.', ar: 'سأتصل بك بعد الغداء.', word: 'back' },
      { en: 'Please leave your name and number.', ar: 'من فضلك اترك اسمك ورقمك.', word: 'leave' },
      { en: 'Would you mind calling again after lunch?', ar: 'هل تمانع الاتصال مرة أخرى بعد الغداء؟', word: 'mind' },
    ],
    orders: [
      { en: 'May I ask who is calling, please?', ar: 'هل لي أن أسأل من المتصل من فضلك؟' },
      { en: 'Could you hold on a moment, please?', ar: 'هل يمكنك الانتظار لحظة من فضلك؟' },
      { en: 'Sorry, the connection is very bad.', ar: 'عذرا، الاتصال سيئ جدا.' },
      { en: 'I will call you back tomorrow morning.', ar: 'سأتصل بك غدا صباحا.' },
      { en: 'Please leave your name and number.', ar: 'من فضلك اترك اسمك ورقمك.' },
      { en: 'Thank you for calling our clinic.', ar: 'شكرا لاتصالك بعيادتنا.' },
    ],
    mc: [
      { question: 'Someone calls you, but the line is bad. You say:', options: ['Could you speak up, please?', 'I am eating now.', 'Send me a letter.', 'Turn off the phone.'], answerIndex: 0, ar: 'اتصل بك أحدهم لكن الخط سيئ. تقول:' },
      { question: 'You answer the phone at work. You ask:', options: ['May I ask who is calling?', 'Go away, please.', 'I do not know you.', 'My name is on the door.'], answerIndex: 0, ar: 'ترد على الهاتف في العمل. تسأل:' },
      { question: 'You dialed the wrong number. You say:', options: ['I am sorry, it was a mistake.', 'Talk louder next time.', 'Call me back tomorrow.', 'Leave a long message.'], answerIndex: 0, ar: 'طلبت رقما خطأ. تقول:' },
      { question: '"Hold on a moment" means:', options: ['انتظر لحظة', 'اتصل مرة أخرى', 'الرقم خطأ', 'أغلق الهاتف'], answerIndex: 0, ar: 'ما معنى Hold on a moment؟' },
    ],
  },

  /* ================= lesson 170 — Social Communication Review ================= */
  {
    num: 170,
    tags: ['review', 'social'],
    objectives: [
      'Recycle social phrases from lessons 146 to 169',
      'Use opinions, advice and refusals in real talk',
      'Handle favors, apologies and phone calls politely',
    ],
    grammar: {
      explanation: 'This review combines the social tools of Section 7: present perfect for news ("Has your new neighbor introduced himself yet?"), "would rather" for refusals ("I would rather not go out tonight"), "in my opinion" for views, "Could you ... please?" for favors, and if-clauses for gentle advice ("If your child cries, speak to him softly"). Choose the tool that fits the situation, and keep every reply polite.',
      explanationAr: 'تراجع هذه الدرس أدوات القسم الاجتماعي كاملة: المضارع التام للأخبار (Has your new neighbor introduced himself yet؟)، وwould rather للرفض (I would rather not go out tonight)، وin my opinion للرأي، وCould you ... please لطلب الخدمات، وجمل الشرط للنصيحة اللطيفة (If your child cries, speak to him softly). اختر الأداة المناسبة للموقف وحافظ على التأدب في كل رد.',
      examples: [
        { en: 'In my opinion, the movie was too long.', ar: 'في رأيي، كان الفيلم طويلا جدا.' },
        { en: 'Could you water my plants this weekend, please?', ar: 'هل يمكنك سقي نباتاتي في عطلة نهاية الأسبوع من فضلك؟' },
        { en: 'If your child cries, speak to him softly.', ar: 'إذا بكى طفلك، فتحدث إليه بنعومة.' },
      ],
    },
    vocabulary: [
      { word: 'conversation', meaningAr: 'محادثة', example: 'We had a long conversation.' },
      { word: 'opinion', meaningAr: 'رأي', example: 'In my opinion, the plan works.' },
      { word: 'favor', meaningAr: 'خدمة', example: 'Can I ask you a favor?' },
      { word: 'apology', meaningAr: 'اعتذار', example: 'Her apology was honest.' },
      { word: 'compliment', meaningAr: 'مجاملة', example: 'Thank you for the compliment.' },
      { word: 'invitation', meaningAr: 'دعوة', example: 'Thanks for the invitation.' },
      { word: 'neighbor', meaningAr: 'جار', example: 'My neighbor waters our garden.' },
      { word: 'celebration', meaningAr: 'احتفال', example: 'The celebration starts at seven.' },
      { word: 'boundaries', meaningAr: 'حدود شخصية', example: 'Everyone needs clear boundaries.' },
      { word: 'get along', meaningAr: 'يتعامل بسلام', example: 'We get along very well.' },
      { word: 'reply', meaningAr: 'يرد / رد', example: 'I look forward to your reply.' },
      { word: 'polite', meaningAr: 'مؤدب', example: 'A polite refusal saves the day.' },
    ],
    scenario: [
      { en: 'Has your new neighbor introduced himself yet?', ar: 'هل قدم جارك الجديد نفسه بعد؟', d: 2 },
      { en: 'Yes, we have talked twice about the weather.', ar: 'نعم، تحدثنا مرتين عن الطقس.', d: 2 },
      { en: 'I would rather not go out tonight, sorry.', ar: 'أفضل ألا أخرج الليلة، عذرا.', d: 2 },
      { en: 'Thanks for the invitation, but I am busy.', ar: 'شكرا على الدعوة، لكنني مشغول.', d: 1 },
      { en: 'In my opinion, the movie was too long.', ar: 'في رأيي، كان الفيلم طويلا جدا.', d: 1 },
      { en: 'My cousin has just had a baby girl.', ar: 'أنجبت ابنة عمي طفلة للتو.', d: 2 },
      { en: 'Congratulations! I am very happy for you.', ar: 'مبروك! أنا سعيد جدا لأجلك.', d: 1 },
      { en: 'Could you water my plants this weekend, please?', ar: 'هل يمكنك سقي نباتاتي في عطلة نهاية الأسبوع من فضلك؟', d: 2 },
      { en: 'Of course, I will look after them.', ar: 'بالتأكيد، سأعتني بها.', d: 2 },
      { en: 'Please keep your voice down after ten.', ar: 'من فضلك خفض صوتك بعد العاشرة.', d: 3 },
      { en: 'You were right to apologize to her.', ar: 'كنت محقا في اعتذارك لها.', d: 2 },
      { en: 'If your child cries, speak to him softly.', ar: 'إذا بكى طفلك، فتحدث إليه بنعومة.', d: 3 },
      { en: 'My mother taught me to respect guests.', ar: 'علّمتني أمي احترام الضيوف.', d: 2 },
      { en: 'Do you get along with your neighbors?', ar: 'هل تتعامل بشكل جيد مع جيرانك؟', d: 1 },
      { en: 'Most of them are friendly and helpful.', ar: 'معظمهم ودودون ومتعاونون.', d: 2 },
      { en: 'Think before you post a comment online.', ar: 'فكر قبل أن تكتب تعليقا على الإنترنت.', d: 2 },
      { en: 'Could I take a message for her?', ar: 'هل أدوّن رسالة لها؟', d: 1 },
      { en: 'She has not answered my messages since Monday.', ar: 'لم ترد على رسائلي منذ الاثنين.', d: 2 },
      { en: 'I agree with you about the new cafe.', ar: 'أوافقك الرأي حول المقهى الجديد.', d: 2 },
      { en: 'Why do you look upset today, Omar?', ar: 'لماذا تبدو منزعجا اليوم يا عمر؟', d: 1 },
      { en: 'We had a small argument about the car.', ar: 'كان لدينا خلاف صغير حول السيارة.', d: 2 },
      { en: 'Let us meet at eight and talk calmly.', ar: 'دعنا نلتقي في الثامنة ونتحدث بهدوء.', d: 3 },
    ],
    patterns: [
      {
        tmpl: '{S} has just {V} {O}.', arTmpl: '{S_ar} {V_ar} {O_ar} للتو.',
        slots: {
          S: B.PEOPLE_SING,
          V: (x) => [{ en: B.enPP('visit'), ar: B.arPast('visit', x.S.agr) }],
          O: [
            { en: 'my grandmother', ar: 'جدتي' }, { en: 'our new baby', ar: 'مولودنا الجديد' },
            { en: 'the sick neighbor', ar: 'الجار المريض' }, { en: 'my old teacher', ar: 'معلمي القديم' },
          ],
        },
        tags: ['review', 'present-perfect'], d: 2, limit: 8,
      },
      {
        tmpl: 'I would {A}, thank you.', arTmpl: 'أفضل {A_ar}، شكرا لك.',
        slots: {
          A: [
            { en: 'rather stay at home', ar: 'البقاء في البيت' }, { en: 'rather walk', ar: 'المشي' },
            { en: 'prefer juice', ar: 'العصير' }, { en: 'rather not talk now', ar: 'ألا أتحدث الآن' },
            { en: 'prefer the window seat', ar: 'مقعد النافذة' },
          ],
        },
        tags: ['review', 'refusals'], d: 2, limit: 5,
      },
      {
        tmpl: 'Could you {F}, please?', arTmpl: 'هل يمكنك {F_ar} من فضلك؟',
        slots: {
          F: [
            { en: 'water my plants', ar: 'سقي نباتاتي' }, { en: 'feed my cat', ar: 'إطعام قطتي' },
            { en: 'help me move the table', ar: 'مساعدتي في نقل الطاولة' },
            { en: 'check my email', ar: 'الاطلاع على بريدي الإلكتروني' },
            { en: 'call me at seven', ar: 'الاتصال بي في السابعة' },
            { en: 'confirm the appointment', ar: 'تأكيد الموعد' },
          ],
        },
        tags: ['review', 'favors'], d: 1, limit: 6,
      },
      {
        tmpl: 'If {C}, I will {R}.', arTmpl: 'إذا {C_ar}، فسأ{R_ar}.',
        slots: {
          C: [
            { en: 'it is sunny tomorrow', ar: 'كان الجو جميلا غدا' }, { en: 'you finish early', ar: 'انتهيت مبكرا' },
            { en: 'the baby sleeps', ar: 'نام الطفل' }, { en: 'we have time', ar: 'كان لدينا وقت' },
          ],
          R: [
            { en: 'visit you', ar: 'زورك' }, { en: 'call you', ar: 'أتصل بك' },
            { en: 'come over', ar: 'أمر عليك' }, { en: 'join you', ar: 'أنضم إليكم' },
          ],
        },
        tags: ['review', 'conditional'], d: 3, limit: 16,
      },
      {
        tmpl: 'In my opinion, {OP}.', arTmpl: 'في رأيي، {OP_ar}.',
        slots: {
          OP: [
            { en: 'this cafe is the best', ar: 'هذا المقهى هو الأفضل' },
            { en: 'the plan is too expensive', ar: 'الخطة مكلفة جدا' },
            { en: 'our team played well', ar: 'فريقنا لعب جيدا' },
            { en: 'winter is better than summer', ar: 'الشتاء أفضل من الصيف' },
            { en: 'the show was funny', ar: 'العرض كان مضحكا' },
          ],
        },
        tags: ['review', 'opinions'], d: 2, limit: 5,
      },
      {
        tmpl: 'We {V} together every weekend.', arTmpl: '{V_ar} معا كل عطلة.',
        slots: {
          V: [
            { en: 'visit our relatives', ar: 'نزور أقاربنا' }, { en: 'have dinner', ar: 'نتناول العشاء' },
            { en: 'play cards', ar: 'نلعب الورق' }, { en: 'drink coffee', ar: 'نشرب القهوة' },
            { en: 'watch a film', ar: 'نشاهد فيلما' },
          ],
        },
        tags: ['review', 'family'], d: 1, limit: 5,
      },
    ],
    fills: [
      { en: 'Has your new neighbor introduced himself yet?', ar: 'هل قدم جارك الجديد نفسه بعد؟', word: 'neighbor', hint: 'شخص' },
      { en: 'I would rather not go out tonight, sorry.', ar: 'أفضل ألا أخرج الليلة، عذرا.', word: 'rather', hint: 'رفض مهذب' },
      { en: 'In my opinion, the movie was too long.', ar: 'في رأيي، كان الفيلم طويلا جدا.', word: 'opinion' },
      { en: 'Could you water my plants this weekend, please?', ar: 'هل يمكنك سقي نباتاتي في عطلة نهاية الأسبوع من فضلك؟', word: 'water' },
      { en: 'You were right to apologize to her.', ar: 'كنت محقا في اعتذارك لها.', word: 'apologize' },
      { en: 'Do you get along with your neighbors?', ar: 'هل تتعامل بشكل جيد مع جيرانك؟', word: 'along' },
      { en: 'She has not answered my messages since Monday.', ar: 'لم ترد على رسائلي منذ الاثنين.', word: 'answered' },
      { en: 'Let us meet at eight and talk calmly.', ar: 'دعنا نلتقي في الثامنة ونتحدث بهدوء.', word: 'calmly' },
      { en: 'She always replies to my messages quickly.', ar: 'ترد دائما على رسائلي بسرعة.', word: 'replies', hint: 'ترد' },
      { en: 'He introduced me to his coworkers at the party.', ar: 'عرّفني على زملائه في الحفلة.', word: 'coworkers', hint: 'زملاء العمل' },
    ],
    orders: [
      { en: 'Thanks for the invitation, my friend.', ar: 'شكرا على الدعوة يا صديقي.' },
      { en: 'In my opinion, the movie was great.', ar: 'في رأيي، كان الفيلم رائعا.' },
      { en: 'Could you help me this weekend?', ar: 'هل يمكنك مساعدتي في عطلة نهاية الأسبوع؟' },
      { en: 'Most of them are friendly and helpful.', ar: 'معظمهم ودودون ومتعاونون.' },
      { en: 'She has not answered my messages since Monday.', ar: 'لم ترد على رسائلي منذ الاثنين.' },
      { en: 'Let us meet at eight and talk calmly.', ar: 'دعنا نلتقي في الثامنة ونتحدث بهدوء.' },
    ],
    mc: [
      { question: 'Someone says "Thank you for the invitation." You answer:', options: ['You are welcome', 'I am thirsty', 'The door is closed', 'My phone died'], answerIndex: 0, ar: 'قال أحدهم شكرا على الدعوة. تجيب:' },
      { question: 'Which sentence gives an opinion?', options: ['In my opinion, the film is great.', 'Open the gate.', 'I lost my keys.', 'The bus left early.'], answerIndex: 0, ar: 'أي جملة تعبر عن رأي؟' },
      { question: 'A friend asks for a favor. Politely you say:', options: ['Sure, how can I help?', 'Not my problem.', 'I never help anyone.', 'Ask the neighbor, not me.'], answerIndex: 0, ar: 'طلب صديقك خدمة. تقول بأدب:' },
      { question: 'What do you say when you meet the manager in the morning?', options: ['Good morning, sir.', 'See you never.', 'Give me money.', 'Hurry up, man.'], answerIndex: 0, ar: 'ماذا تقول عندما تقابل المدير في الصباح؟' },
      { question: '"I am sorry, I missed your call" is used for:', options: ['apologizing', 'ordering food', 'giving directions', 'buying tickets'], answerIndex: 0, ar: 'عبارة I am sorry, I missed your call تستخدم لـ:' },
    ],
  },
];
