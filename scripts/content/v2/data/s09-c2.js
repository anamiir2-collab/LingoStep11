/* ============================================================
   v2 section data — s09-c2.js
   Education & Digital Skills · lessons 214–216
   (Screen Time Management · Digital Etiquette · Safe Online Shopping)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 214 — Screen Time Management ================= */
  {
    num: 214,
    tags: ['screen-time', 'digital-wellbeing'],
    objectives: [
      'Talk about how much time you spend on screens',
      'Set limits and build better phone habits',
      'Explain the benefits of digital well-being',
    ],
    grammar: {
      explanation: 'Talk about habits with the present simple: "I spend too much time on my phone". Give advice with imperatives and should: "Put the phone away at dinner", "You should set a limit". Use "too much / too many" for more than is healthy: too much time, too many notifications. Digital well-being means using technology on purpose — for study, work or fun — and then stopping. Small rules help: no phone at dinner, no screens one hour before bedtime, and notifications off at night.',
      explanationAr: 'تحدث عن العادات بالمضارع البسيط: I spend too much time on my phone. وتقدم النصيحة بصيغة الأمر وshould: Put the phone away at dinner، You should set a limit. ونستخدم too much / too many للزيارة غير الصحية: too much time، too many notifications. والرفاه الرقمي يعني استخدام التقنية بقصد — للدراسة أو العمل أو المتعة — ثم التوقف. والقواعد الصغيرة تفيد: لا هاتف وقت العشاء، لا شاشات قبل النوم بساعة، وإشعارات مكتومة ليلا.',
      examples: [
        { en: 'Two hours of screen time is enough for me.', ar: 'ساعتان من وقت الشاشة تكفيني.' },
        { en: 'Set a limit and let the app remind you.', ar: 'ضع حدا ودع التطبيق يذكرك.' },
        { en: 'No screens one hour before bedtime.', ar: 'لا شاشات قبل النوم بساعة.' },
      ],
    },
    vocabulary: [
      { word: 'screen time', meaningAr: 'وقت الشاشة', example: 'My screen time is three hours a day.' },
      { word: 'limit', meaningAr: 'حد / حدود', example: 'I set a limit of two hours.' },
      { word: 'digital well-being', meaningAr: 'الرفاه الرقمي', example: 'Digital well-being starts with small rules.' },
      { word: 'notification', meaningAr: 'إشعار', example: 'Too many notifications steal my focus.' },
      { word: 'distract', meaningAr: 'يشّتت', example: 'The phone distracts me at work.' },
      { word: 'bedtime', meaningAr: 'وقت النوم', example: 'No screens before bedtime, please.' },
      { word: 'focus', meaningAr: 'تركيز', example: 'Silence helps my focus.' },
      { word: 'habit', meaningAr: 'عادة', example: 'Checking the phone is a bad habit.' },
      { word: 'mute', meaningAr: 'يكتم / يصمت', example: 'I mute my notifications at night.' },
      { word: 'unplug', meaningAr: 'ينقطع عن الأجهزة', example: 'We unplug every Friday evening.' },
      { word: 'offline', meaningAr: 'دون اتصال', example: 'We went offline for the weekend.' },
      { word: 'purpose', meaningAr: 'هدف / قصد', example: 'Use your phone with a purpose.' },
    ],
    scenario: [
      { en: 'I spend too much time on my phone.', ar: 'أقضي وقتا كثيرا جدا على هاتفي.', d: 1 },
      { en: 'How many hours do you use it every day?', ar: 'كم ساعة تستخدمه كل يوم؟', d: 1 },
      { en: 'About five hours, that is too much.', ar: 'نحو خمس ساعات، هذا كثير جدا.', d: 1 },
      { en: 'I set a limit of two hours for social media.', ar: 'وضعت حدا قدره ساعتين لوسائل التواصل.', d: 1 },
      { en: 'The app reminds me when my time is up.', ar: 'يذكرني التطبيق عندما ينتهي وقتي.', d: 2 },
      { en: 'Put the phone away at dinner, please.', ar: 'ضع الهاتف بعيدا وقت العشاء، من فضلك.', d: 1 },
      { en: 'You are right, dinner is family time.', ar: 'أنت محق، العشاء وقت للعائلة.', d: 1 },
      { en: 'Does your son sleep with his phone?', ar: 'هل ينام ابنك مع هاتفه؟', d: 2 },
      { en: 'No, he sleeps better without it now.', ar: 'لا، ينام بشكل أفضل بدونه الآن.', d: 2 },
      { en: 'I mute all my notifications after nine o\u0027clock.', ar: 'أكتم جميع إشعاراتي بعد التاسعة تماما.', d: 1 },
      { en: 'Do you check your phone first thing in the morning?', ar: 'هل تفحص هاتفك أول ما تصحو في الصباح؟', d: 2 },
      { en: 'Yes, and I want to change that habit.', ar: 'نعم، وأريد تغيير تلك العادة.', d: 2 },
      { en: 'We went offline for the whole weekend.', ar: 'انقطعنا عن الإنترنت طوال عطلة نهاية الأسبوع.', d: 2 },
      { en: 'It was strange at first, but very peaceful.', ar: 'كان غريبا في البداية، لكنه هادئ جدا.', d: 2 },
      { en: 'My screen time is down to two hours a day.', ar: 'وقت شاشتي انخفض إلى ساعتين يوميا.', d: 3 },
      { en: 'Notifications should not control our attention.', ar: 'لا ينبغي للإشعارات أن تتحكم في انتباهنا.', d: 3 },
      { en: 'Reading a book helps me relax before bedtime.', ar: 'قراءة كتاب تساعدني على الاسترخاء قبل النوم.', d: 3 },
      { en: 'Digital well-being means using technology with purpose.', ar: 'الرفاه الرقمي يعني استخدام التقنية بهدف.', d: 3 },
    ],
    patterns: [
      {
        tmpl: '{S} {V} too much time on the phone.', arTmpl: '{S_ar} {V_ar} وقتا كثيرا جدا على الهاتف.',
        slots: {
          S: [
            { en: 'My son', ar: 'ابني', agr: 'he' }, { en: 'My daughter', ar: 'ابنتي', agr: 'she' },
            { en: 'My little brother', ar: 'أخي الصغير', agr: 'he' }, { en: 'My cousin', ar: 'ابن عمي', agr: 'he' },
            { en: 'The children', ar: 'الأطفال', agr: 'they' }, { en: 'My niece', ar: 'ابنة عمي', agr: 'she' },
          ],
          V: (x) => [x.S.agr === 'they'
            ? { en: 'spend', ar: 'يقضون' }
            : x.S.agr === 'she'
              ? { en: 'spends', ar: 'تقضي' }
              : { en: 'spends', ar: 'يقضي' }],
        },
        tags: ['screen-time', 'present-simple'], d: 2, limit: 6,
      },
      {
        tmpl: 'Try to set a limit of {H} a day.', arTmpl: 'حاول أن تضع حدا قدره {H_ar} يوميا.',
        slots: {
          H: [
            { en: 'one hour', ar: 'ساعة واحدة' }, { en: 'two hours', ar: 'ساعتين' },
            { en: 'three hours', ar: 'ثلاث ساعات' }, { en: 'thirty minutes', ar: 'ثلاثين دقيقة' },
            { en: 'twenty minutes', ar: 'عشرين دقيقة' }, { en: 'forty minutes', ar: 'أربعين دقيقة' },
            { en: 'one and a half hours', ar: 'ساعة ونصف' },
          ],
        },
        tags: ['screen-time', 'advice'], d: 1, limit: 7,
      },
      {
        tmpl: 'Put the phone away {T}.', arTmpl: 'ضع الهاتف بعيدا {T_ar}.',
        slots: {
          T: [
            { en: 'at dinner', ar: 'وقت العشاء' }, { en: 'before bedtime', ar: 'قبل النوم' },
            { en: 'at school', ar: 'في المدرسة' }, { en: 'during study time', ar: 'أثناء المذاكرة' },
            { en: 'at family visits', ar: 'في زيارات العائلة' }, { en: 'in the bedroom', ar: 'في غرفة النوم' },
          ],
        },
        tags: ['screen-time', 'imperatives'], d: 1, limit: 6,
      },
      {
        tmpl: 'My screen time is {A} a day.', arTmpl: 'وقت شاشتي {A_ar} يوميا.',
        slots: {
          A: [
            { en: 'about one hour', ar: 'نحو ساعة واحدة' }, { en: 'two hours', ar: 'ساعتين' },
            { en: 'three hours', ar: 'ثلاث ساعات' }, { en: 'four hours', ar: 'أربع ساعات' },
            { en: 'five hours', ar: 'خمس ساعات' }, { en: 'half an hour', ar: 'نصف ساعة' },
          ],
        },
        tags: ['screen-time'], d: 1, limit: 6,
      },
      {
        tmpl: 'I mute my notifications after {Tm}.', arTmpl: 'أكتم إشعاراتي بعد {Tm_ar}.',
        slots: {
          Tm: [
            { en: 'nine', ar: 'التاسعة' }, { en: 'ten', ar: 'العاشرة' },
            { en: 'eight', ar: 'الثامنة' }, { en: 'eleven', ar: 'الحادية عشرة' },
            { en: 'midnight', ar: 'منتصف الليل' }, { en: 'sunset', ar: 'المغرب' },
          ],
        },
        tags: ['screen-time', 'digital-wellbeing'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'I spend too much time on my phone.', ar: 'أقضي وقتا كثيرا جدا على هاتفي.', word: 'spend', hint: 'يقضي' },
      { en: 'I set a limit of two hours for social media.', ar: 'وضعت حدا قدره ساعتين لوسائل التواصل.', word: 'limit', hint: 'حد' },
      { en: 'Put the phone away at dinner, please.', ar: 'ضع الهاتف بعيدا وقت العشاء، من فضلك.', word: 'away', hint: 'بعيدا' },
      { en: 'The app reminds me when my time is up.', ar: 'يذكرني التطبيق عندما ينتهي وقتي.', word: 'reminds', hint: 'يذكر' },
      { en: 'I mute all my notifications after nine o\u0027clock.', ar: 'أكتم جميع إشعاراتي بعد التاسعة تماما.', word: 'mute', hint: 'يكتم' },
      { en: 'We went offline for the whole weekend.', ar: 'انقطعنا عن الإنترنت طوال عطلة نهاية الأسبوع.', word: 'offline', hint: 'دون اتصال' },
      { en: 'Digital well-being means using technology with purpose.', ar: 'الرفاه الرقمي يعني استخدام التقنية بهدف.', word: 'purpose', hint: 'هدف' },
      { en: 'Reading a book helps me relax before bedtime.', ar: 'قراءة كتاب تساعدني على الاسترخاء قبل النوم.', word: 'bedtime', hint: 'وقت النوم' },
    ],
    orders: [
      { en: 'I spend too much time on my phone.', ar: 'أقضي وقتا كثيرا جدا على هاتفي.' },
      { en: 'I set a limit of two hours for social media.', ar: 'وضعت حدا قدره ساعتين لوسائل التواصل.' },
      { en: 'Put the phone away at dinner, please.', ar: 'ضع الهاتف بعيدا وقت العشاء، من فضلك.' },
      { en: 'Do you check your phone first thing in the morning?', ar: 'هل تفحص هاتفك أول ما تصحو في الصباح؟' },
      { en: 'My screen time is down to two hours a day.', ar: 'وقت شاشتي انخفض إلى ساعتين يوميا.' },
      { en: 'We went offline for the whole weekend.', ar: 'انقطعنا عن الإنترنت طوال عطلة نهاية الأسبوع.' },
    ],
    mc: [
      { question: 'You spend six hours a day on your phone. A good first step:', options: ['Set a daily limit', 'Buy a second phone', 'Follow more people', 'Turn on all notifications'], answerIndex: 0, ar: 'تقضي ست ساعات يوميا على هاتفك، فالخطوة الأولى الجيدة:' },
      { question: 'What is digital well-being?', options: ['Using technology with purpose and rest', 'Buying the newest phone', 'Never using the internet', 'Typing in ALL CAPS'], answerIndex: 0, ar: 'ما هو الرفاه الرقمي؟' },
      { question: 'Where should phones stay during family dinner?', options: ['Away from the table', 'In one hand', 'On the food', 'In the fridge'], answerIndex: 0, ar: 'أين ينبغي أن تبقى الهواتف وقت عشاء العائلة؟' },
      { question: 'Too many notifications steal your:', options: ['focus', 'battery only', 'storage', 'homework'], answerIndex: 0, ar: 'الإشعارات الكثيرة جدا تسرق:' },
    ],
  },

  /* ================= lesson 215 — Digital Etiquette ================= */
  {
    num: 215,
    tags: ['digital-etiquette', 'netiquette'],
    objectives: [
      'Use polite language in messages and comments',
      'Explain why ALL CAPS and spam are bad manners',
      'Reply to people in a respectful, timely way',
    ],
    grammar: {
      explanation: 'Netiquette means good manners online. Use imperatives for rules: "Do not type in ALL CAPS", "Be kind". ALL CAPS looks like shouting, so people may feel angry. Reply on time, even with a short word like "Thanks". Respect others online even when you disagree, and never spam a group with repeated messages or ads. A polite message has a greeting, a clear sentence and a thank-you at the end.',
      explanationAr: 'تعني آداب التعامل الرقمي حسن السلوك على الإنترنت. نستخدم صيغة الأمر للقواعد: Do not type in ALL CAPS، Be kind. فالكتابة بحروف كبيرة تبدو كصراخ، فقد يشعر الناس بالغضب. جب في الوقت المناسب حتى بكلمة قصيرة مثل Thanks. واحترم الآخرين على الإنترنت حتى عند الاختلاف، ولا تزعج مجموعة برسائل أو إعلانات مكررة أبدا. والرسالة المهذبة فيها تحية وجملة واضحة وشكر في النهاية.',
      examples: [
        { en: 'Do not type in ALL CAPS; it looks like shouting.', ar: 'لا تكتب بحروف كبيرة؛ فهي تبدو كصراخ.' },
        { en: 'Reply on time, even with a short thanks.', ar: 'رد في الوقت المناسب، حتى بشكر قصير.' },
        { en: 'Be kind online; words reach real people.', ar: 'كن لطيفا على الإنترنت؛ فالكلمات تصل إلى أشخاص حقيقيين.' },
      ],
    },
    vocabulary: [
      { word: 'etiquette', meaningAr: 'آداب', example: 'Good etiquette keeps chats friendly.', ipa: 'ˈetɪket' },
      { word: 'ALL CAPS', meaningAr: 'حروف كبيرة (كالصراخ)', example: 'Do not type in ALL CAPS.' },
      { word: 'rude', meaningAr: 'وقح', example: 'Her comment was rude.' },
      { word: 'reply', meaningAr: 'يرد', example: 'Try to reply on time.' },
      { word: 'on time', meaningAr: 'في الوقت المناسب', example: 'Answer messages on time.' },
      { word: 'spam', meaningAr: 'رسائل مزعجة / يزعج بالإرسال', example: 'He spammed the group with ads.' },
      { word: 'forward', meaningAr: 'يحوّل (رسالة)', example: 'Do not forward private chats.' },
      { word: 'respectful', meaningAr: 'محترم', example: 'Stay respectful when you disagree.' },
      { word: 'tone', meaningAr: 'نبرة', example: 'Emojis change the tone of a message.' },
      { word: 'misunderstanding', meaningAr: 'سوء فهم', example: 'Short texts can cause misunderstandings.' },
      { word: 'group chat', meaningAr: 'مجموعة دردشة', example: 'The teacher removed him from the group chat.' },
      { word: 'emoji', meaningAr: 'رمز تعبيري', example: 'A smiling emoji softens the words.' },
    ],
    scenario: [
      { en: 'Please do not type in ALL CAPS.', ar: 'من فضلك لا تكتب بحروف كبيرة.', d: 1 },
      { en: 'It looks like shouting online.', ar: 'يبدو الأمر كصراخ على الإنترنت.', d: 1 },
      { en: 'Sorry, I did not know that rule.', ar: 'آسف، لم أكن أعرف تلك القاعدة.', d: 1 },
      { en: 'Try to reply on time, even with one word.', ar: 'حاول أن ترد في الوقت المناسب، حتى بكلمة واحدة.', d: 1 },
      { en: 'I answer my messages within a day.', ar: 'أجيب على رسائلي خلال يوم.', d: 2 },
      { en: 'He spammed the group with twenty photos.', ar: 'أزعج المجموعة بعشرين صورة.', d: 2 },
      { en: 'The teacher removed him from the group chat.', ar: 'أخرجه المعلم من مجموعة الدردشة.', d: 2 },
      { en: 'Respect others online, even when you disagree.', ar: 'احترم الآخرين على الإنترنت، حتى حين تخالفهم.', d: 2 },
      { en: 'Be kind; real people read your words.', ar: 'كن لطيفا؛ فأشخاصا حقيقيين يقرؤون كلماتك.', d: 2 },
      { en: 'Should I forward this message to everyone?', ar: 'هل أحول هذه الرسالة للجميع؟', d: 2 },
      { en: 'No, check with the sender first.', ar: 'لا، تأكد من المرسل أولا.', d: 2 },
      { en: 'Her comment was rude, so I ignored it.', ar: 'كان تعليقها وقحا، فتجاهلته.', d: 2 },
      { en: 'A short greeting makes a message friendly.', ar: 'التحية القصيرة تجعل الرسالة ودودة.', d: 2 },
      { en: 'Do not share private chats without permission.', ar: 'لا تشارك المحادثات الخاصة بدون إذن.', d: 2 },
      { en: 'Have you ever misunderstood a text message?', ar: 'هل أسأت يوما فهم رسالة نصية؟', d: 3 },
      { en: 'Yes, emojis changed the tone completely.', ar: 'نعم، غيّرت الرموز التعبيرية النبرة تماما.', d: 3 },
      { en: 'Could you message me after work, please?', ar: 'هل يمكنك مراسلتي بعد العمل، من فضلك؟', d: 3 },
      { en: 'We follow good etiquette in our class group.', ar: 'نتبع آدابا حسنة في مجموعة صفنا.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Please do not {V} in the group chat.', arTmpl: 'من فضلك لا {V_ar} في مجموعة الدردشة.',
        slots: {
          V: [
            { en: 'type in ALL CAPS', ar: 'تكتب بحروف كبيرة' },
            { en: 'spam', ar: 'ترسل رسائل مزعجة' },
            { en: 'forward private chats', ar: 'تحول محادثات خاصة' },
            { en: 'argue rudely', ar: 'تشاجر بوقاحة' },
            { en: 'share strangers\' photos', ar: 'تنشر صور الغرباء' },
          ],
        },
        tags: ['digital-etiquette', 'imperatives'], d: 1, limit: 5,
      },
      {
        tmpl: 'Try to reply {T}.', arTmpl: 'حاول أن ترد {T_ar}.',
        slots: {
          T: [
            { en: 'on time', ar: 'في الوقت المناسب' }, { en: 'within a day', ar: 'خلال يوم' },
            { en: 'politely', ar: 'بلطف' }, { en: 'with a short answer', ar: 'بجواب قصير' },
          ],
        },
        tags: ['digital-etiquette'], d: 1, limit: 4,
      },
      {
        tmpl: 'Be {A} online, even with strangers.', arTmpl: 'كن {A_ar} على الإنترنت، حتى مع الغرباء.',
        slots: {
          A: [
            { en: 'kind', ar: 'لطيفا' }, { en: 'polite', ar: 'مهذبا' },
            { en: 'patient', ar: 'صبورا' }, { en: 'respectful', ar: 'محترما' },
            { en: 'careful', ar: 'حذرا' },
          ],
        },
        tags: ['digital-etiquette', 'imperatives'], d: 2, limit: 5,
      },
      {
        tmpl: '{S} {V} my message {T}.', arTmpl: '{S_ar} {V_ar} على رسالتي {T_ar}.',
        slots: {
          S: [
            { en: 'He', ar: 'هو', agr: 'he' }, { en: 'She', ar: 'هي', agr: 'she' },
            { en: 'My friend', ar: 'صديقي', agr: 'he' }, { en: 'The teacher', ar: 'المعلم', agr: 'he' },
            { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{ en: B.enPresent('answer', x.S.agr), ar: B.arPresent('answer', x.S.agr) }],
          T: [
            { en: 'quickly', ar: 'بسرعة' }, { en: 'kindly', ar: 'بلطف' },
            { en: 'the same day', ar: 'في اليوم نفسه' }, { en: 'after work', ar: 'بعد العمل' },
          ],
        },
        tags: ['digital-etiquette', 'present-simple'], d: 2, limit: 20,
      },
      {
        tmpl: 'Never {V} a private message.', arTmpl: 'لا {V_ar} رسالة خاصة أبدا.',
        slots: {
          V: [
            { en: 'forward', ar: 'تحول' }, { en: 'share', ar: 'تشارك' },
            { en: 'post', ar: 'تنشر' },
          ],
        },
        tags: ['digital-etiquette', 'imperatives'], d: 2, limit: 3,
      },
    ],
    fills: [
      { en: 'Please do not type in ALL CAPS.', ar: 'من فضلك لا تكتب بحروف كبيرة.', word: 'type', hint: 'يكتب' },
      { en: 'It looks like shouting online.', ar: 'يبدو الأمر كصراخ على الإنترنت.', word: 'shouting', hint: 'صراخ' },
      { en: 'Try to reply on time, even with one word.', ar: 'حاول أن ترد في الوقت المناسب، حتى بكلمة واحدة.', word: 'reply', hint: 'يرد' },
      { en: 'He spammed the group with twenty photos.', ar: 'أزعج المجموعة بعشرين صورة.', word: 'spammed', hint: 'أزعج بالإرسال' },
      { en: 'Respect others online, even when you disagree.', ar: 'احترم الآخرين على الإنترنت، حتى حين تخالفهم.', word: 'others', hint: 'الآخرين' },
      { en: 'Her comment was rude, so I ignored it.', ar: 'كان تعليقها وقحا، فتجاهلته.', word: 'rude', hint: 'وقح' },
      { en: 'Do not share private chats without permission.', ar: 'لا تشارك المحادثات الخاصة بدون إذن.', word: 'permission', hint: 'إذن' },
      { en: 'A short greeting makes a message friendly.', ar: 'التحية القصيرة تجعل الرسالة ودودة.', word: 'greeting', hint: 'تحية' },
    ],
    orders: [
      { en: 'Please do not type in ALL CAPS.', ar: 'من فضلك لا تكتب بحروف كبيرة.' },
      { en: 'Try to reply on time, even with one word.', ar: 'حاول أن ترد في الوقت المناسب، حتى بكلمة واحدة.' },
      { en: 'Respect others online, even when you disagree.', ar: 'احترم الآخرين على الإنترنت، حتى حين تخالفهم.' },
      { en: 'Should I forward this message to everyone?', ar: 'هل أحول هذه الرسالة للجميع؟' },
      { en: 'A short greeting makes a message friendly.', ar: 'التحية القصيرة تجعل الرسالة ودودة.' },
      { en: 'Her comment was rude, so I ignored it.', ar: 'كان تعليقها وقحا، فتجاهلته.' },
    ],
    mc: [
      { question: 'Why is typing in ALL CAPS rude?', options: ['It looks like shouting', 'It saves time', 'It shows good manners', 'It hides your words'], answerIndex: 0, ar: 'لماذا الكتابة بحروف كبيرة وقحة؟' },
      { question: 'Someone repeats the same ad in your group. This is:', options: ['spam', 'a greeting', 'a compliment', 'a reply'], answerIndex: 0, ar: 'أحد يكرر الإعلان نفسه في مجموعتك، هذا:' },
      { question: 'A good message usually has:', options: ['a greeting and a clear sentence', 'no words at all', 'only links', 'your bank details'], answerIndex: 0, ar: 'الرسالة الجيدة عادة فيها:' },
      { question: 'You disagree with a comment online. You should:', options: ['Reply politely or stay silent', 'Type in ALL CAPS', 'Send it to everyone', 'Share private chats'], answerIndex: 0, ar: 'خالفت تعليقا على الإنترنت، فيجب أن:' },
    ],
  },

  /* ================= lesson 216 — Safe Online Shopping ================= */
  {
    num: 216,
    tags: ['safe-shopping', 'online-shopping'],
    objectives: [
      'Check a seller and a website before you pay',
      'Use safe payment steps like pay after delivery',
      'Spot fake products and unreal prices',
    ],
    grammar: {
      explanation: "Before you pay online, check three things: the seller, the website and the price. Look at the seller's rating and read reviews from real buyers. A secure website starts with https and shows a small padlock in the browser. If a price is too low for a real product, it is probably fake. Safe habits: pay after delivery, save the receipt, and never send your card details by email.",
      explanationAr: 'قبل أن تدفع عبر الإنترنت تحقق من ثلاثة أشياء: البائع والموقع والسعر. انظر إلى تقييم البائع واقرأ مراجعات المشترين الحقيقيين. والموقع الآمن يبدأ بـ https ويظهر فيه قفل صغير في المتصفح. وإذا كان السعر منخفضا جدا لمنتج حقيقي فمن المرجح أنه مزيّف. والعادات الآمنة: ادفع بعد الاستلام، واحفظ الإيصال، ولا ترسل بيانات بطاقتك بالبريد أبدا.',
      examples: [
        { en: 'Check the seller and the website first.', ar: 'تحقق من البائع والموقع أولا.' },
        { en: 'Pay after delivery when you can.', ar: 'ادفع بعد الاستلام إن أمكن.' },
        { en: 'Save the receipt until the parcel is safe in your hands.', ar: 'احفظ الإيصال حتى تصل الشحنة إلى يديك بسلام.' },
      ],
    },
    vocabulary: [
      { word: 'seller', meaningAr: 'بائع', example: 'Check the seller\'s rating first.' },
      { word: 'rating', meaningAr: 'تقييم', example: 'His rating is 4.8 of 5.' },
      { word: 'secure', meaningAr: 'آمن', example: 'Is this website secure?' },
      { word: 'padlock', meaningAr: 'قفل (في المتصفح)', example: 'Look for the padlock in the browser.' },
      { word: 'receipt', meaningAr: 'إيصال', example: 'Did you save the receipt?' },
      { word: 'delivery', meaningAr: 'توصيل / استلام', example: 'I prefer to pay after delivery.' },
      { word: 'cash on delivery', meaningAr: 'الدفع عند الاستلام', example: 'Cash on delivery is the safest way here.' },
      { word: 'fake', meaningAr: 'مزيّف', example: 'It is probably a fake product.' },
      { word: 'refund', meaningAr: 'استرداد المال', example: 'The store promised a refund.' },
      { word: 'deal', meaningAr: 'صفقة / عرض', example: 'This deal sounds too cheap.' },
      { word: 'compare', meaningAr: 'يقارن', example: 'Compare prices on three websites.' },
      { word: 'return policy', meaningAr: 'سياسة الإرجاع', example: 'Read the return policy before you pay.' },
    ],
    scenario: [
      { en: 'Check the seller\'s rating before you order.', ar: 'تحقق من تقييم البائع قبل أن تطلب.', d: 1 },
      { en: 'His rating is 4.8 of 5 stars.', ar: 'تقييمه 4.8 من 5 نجوم.', d: 1 },
      { en: 'Read the reviews from real buyers.', ar: 'اقرأ مراجعات المشترين الحقيقيين.', d: 1 },
      { en: 'Is this website secure?', ar: 'هل هذا الموقع آمن؟', d: 1 },
      { en: 'Yes, it starts with https and shows a padlock.', ar: 'نعم، يبدأ بـ https ويظهر فيه قفل.', d: 1 },
      { en: 'That price is too low for a real phone.', ar: 'هذا السعر منخفض جدا لهاتف حقيقي.', d: 1 },
      { en: 'It is probably a fake product.', ar: 'من المرجح أنه منتج مزيّف.', d: 1 },
      { en: 'I prefer to pay after delivery.', ar: 'أفضل الدفع بعد الاستلام.', d: 1 },
      { en: 'The package arrived, and I paid in cash.', ar: 'وصلت الشحنة، ودفعت نقدا.', d: 2 },
      { en: 'Did you save the receipt?', ar: 'هل حفظت الإيصال؟', d: 2 },
      { en: 'Yes, I saved it in my email.', ar: 'نعم، حفظته في بريدي الإلكتروني.', d: 2 },
      { en: 'Compare prices on two or three websites first.', ar: 'قارن الأسعار على موقعين أو ثلاثة أولا.', d: 2 },
      { en: 'She never shops from new sellers.', ar: 'لا تشتري أبدا من بائعين جدد.', d: 2 },
      { en: 'The store promised a refund in seven days.', ar: 'وعد المتجر باسترداد المال خلال سبعة أيام.', d: 2 },
      { en: 'Where is my order? It is late.', ar: 'أين طلبي؟ لقد تأخر.', d: 2 },
      { en: 'I tracked the package on the delivery app.', ar: 'تتبعت الشحنة في تطبيق التوصيل.', d: 2 },
      { en: 'Never send your card details by email.', ar: 'لا ترسل بيانات بطاقتك بالبريد أبدا.', d: 3 },
      { en: 'We keep our online shopping on one trusted website.', ar: 'نجعل تسوقنا الإلكتروني على موقع موثوق واحد.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Check the seller\'s {N} first.', arTmpl: 'تحقق أولا من {N_ar}.',
        slots: {
          N: [
            { en: 'rating', ar: 'تقييم البائع' }, { en: 'reviews', ar: 'مراجعات البائع' },
            { en: 'address', ar: 'عنوان البائع' }, { en: 'contact number', ar: 'رقم تواصل البائع' },
            { en: 'return policy', ar: 'سياسة إرجاع البائع' }, { en: 'real photos', ar: 'صور البائع الحقيقية' },
          ],
        },
        tags: ['safe-shopping', 'imperatives'], d: 1, limit: 6,
      },
      {
        tmpl: 'That price is too low for {P}.', arTmpl: 'هذا السعر منخفض جدا مقابل {P_ar}.',
        slots: {
          P: [
            { en: 'a new laptop', ar: 'حاسوب محمول جديد' }, { en: 'an original watch', ar: 'ساعة أصلية' },
            { en: 'a genuine camera', ar: 'كاميرا أصلية' }, { en: 'a new game console', ar: 'جهاز ألعاب جديد' },
            { en: 'real gold', ar: 'ذهب حقيقي' }, { en: 'a brand-new tablet', ar: 'جهاز لوحي جديد كليا' },
            { en: 'a new TV', ar: 'تلفاز جديد' },
          ],
        },
        tags: ['safe-shopping'], d: 2, limit: 7,
      },
      {
        tmpl: 'I prefer to pay {W}.', arTmpl: 'أفضل الدفع {W_ar}.',
        slots: {
          W: [
            { en: 'in cash', ar: 'نقدا' }, { en: 'by card', ar: 'بالبطاقة' },
            { en: 'on secure websites', ar: 'على مواقع آمنة' }, { en: 'through the app', ar: 'عبر التطبيق' },
            { en: 'with my debit card', ar: 'ببطاقتي البنكية' },
            { en: 'only after I see the product', ar: 'فقط بعد أن أرى المنتج' },
            { en: 'only on trusted websites', ar: 'فقط على مواقع موثوقة' },
          ],
        },
        tags: ['safe-shopping', 'money'], d: 1, limit: 7,
      },
      {
        tmpl: 'Did you {V} the receipt?', arTmpl: 'هل {V_ar} الإيصال؟',
        slots: {
          V: [
            { en: 'print', ar: 'طبعت' }, { en: 'find', ar: 'وجدت' },
            { en: 'check', ar: 'فحصت' }, { en: 'lose', ar: 'فقدت' },
            { en: 'download', ar: 'حملت' },
          ],
        },
        tags: ['safe-shopping', 'past-simple'], d: 2, limit: 5,
      },
      {
        tmpl: '{S} {V} from trusted websites.', arTmpl: '{S_ar} {V_ar} من مواقع موثوقة.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'He', ar: 'هو', agr: 'he' },
            { en: 'She', ar: 'هي', agr: 'she' }, { en: 'We', ar: 'نحن', agr: 'we' },
            { en: 'They', ar: 'هم', agr: 'they' }, { en: 'My family', ar: 'عائلتي', agr: 'they' },
            { en: 'My parents', ar: 'والداي', agr: 'they' },
          ],
          V: (x) => [{ en: B.enPresent('buy', x.S.agr), ar: B.arPresent('buy', x.S.agr) }],
        },
        tags: ['safe-shopping', 'present-simple'], d: 2, limit: 7,
      },
    ],
    fills: [
      { en: 'Check the seller\'s rating before you order.', ar: 'تحقق من تقييم البائع قبل أن تطلب.', word: 'rating', hint: 'تقييم' },
      { en: 'Is this website secure?', ar: 'هل هذا الموقع آمن؟', word: 'secure', hint: 'آمن' },
      { en: 'It is probably a fake product.', ar: 'من المرجح أنه منتج مزيّف.', word: 'fake', hint: 'مزيّف' },
      { en: 'I prefer to pay after delivery.', ar: 'أفضل الدفع بعد الاستلام.', word: 'delivery', hint: 'استلام' },
      { en: 'The package arrived, and I paid in cash.', ar: 'وصلت الشحنة، ودفعت نقدا.', word: 'cash', hint: 'نقدا' },
      { en: 'Did you save the receipt?', ar: 'هل حفظت الإيصال؟', word: 'receipt', hint: 'إيصال' },
      { en: 'Compare prices on two or three websites first.', ar: 'قارن الأسعار على موقعين أو ثلاثة أولا.', word: 'Compare', hint: 'قارن' },
      { en: 'Never send your card details by email.', ar: 'لا ترسل بيانات بطاقتك بالبريد أبدا.', word: 'card', hint: 'بطاقة' },
    ],
    orders: [
      { en: 'Check the seller\'s rating before you order.', ar: 'تحقق من تقييم البائع قبل أن تطلب.' },
      { en: 'Is this website secure?', ar: 'هل هذا الموقع آمن؟' },
      { en: 'That price is too low for a real phone.', ar: 'هذا السعر منخفض جدا لهاتف حقيقي.' },
      { en: 'I prefer to pay after delivery.', ar: 'أفضل الدفع بعد الاستلام.' },
      { en: 'Compare prices on two or three websites first.', ar: 'قارن الأسعار على موقعين أو ثلاثة أولا.' },
      { en: 'The store promised a refund in seven days.', ar: 'وعد المتجر باسترداد المال خلال سبعة أيام.' },
    ],
    mc: [
      { question: 'What shows that a website is secure?', options: ['https and a padlock', 'many pop-up ads', 'a very low price', 'no contact address'], answerIndex: 0, ar: 'ما الذي يدل على أن موقعا آمن؟' },
      { question: 'The price is too low for a real phone. It is probably:', options: ['a fake product', 'a yearly sale', 'a gift from the seller', 'a bank error'], answerIndex: 0, ar: 'السعر منخفض جدا لهاتف حقيقي، فهو على الأرجح:' },
      { question: 'Why should you save the receipt?', options: ['For a refund or a return', 'To post it online', 'To pay again later', 'For the delivery driver'], answerIndex: 0, ar: 'لماذا تحفظ الإيصال؟' },
      { question: 'What is cash on delivery?', options: ['You pay when the package arrives', 'You pay a year later', 'The seller pays you', 'You pay with a password'], answerIndex: 0, ar: 'ما هو الدفع عند الاستلام؟' },
      { question: 'A new seller has no rating and no reviews. You should:', options: ['Be careful and compare first', 'Order ten items now', 'Send your bank details', 'Pay extra for speed'], answerIndex: 0, ar: 'بائع جديد بلا تقييم ومراجعات، فيجب أن:' },
    ],
  },
];
