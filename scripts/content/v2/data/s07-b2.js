/* ============================================================
   v2 section data — s07-b2.js
   Relationships & Social Communication · lessons 157–159
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 157 — Setting Personal Boundaries ================= */
  {
    num: 157,
    tags: ['boundaries', 'communication'],
    objectives: [
      'Say what you would rather not discuss',
      'Ask for privacy and personal space politely',
      'Refuse times and topics that do not work for you',
    ],
    grammar: {
      explanation: 'To set a boundary, name your limit kindly and clearly. Use "I would rather not ..." + base verb: "I would rather not talk about that". Use "Please + base verb" or "Please do not + base verb" for polite requests: "Please respect my privacy", "Please do not interrupt me". To say a plan is impossible for you, use "That does not work for me". "Do you mind if I ...?" asks permission, and the answer "Not at all" means yes, you may. With "if" you can state a consequence: "If you interrupt me again, I will stop the meeting."',
      explanationAr: 'لوضع حد شخصي سمِّ حدك بلطف ووضوح. استخدم I would rather not مع مصدر الفعل: I would rather not talk about that. واستخدم Please مع الفعل أو Please do not للطلبات المهذبة: Please respect my privacy وPlease do not interrupt me. ولقول إن الخطة غير ممكنة لك قل That does not work for me. وتُطلب الإذنة بـ Do you mind if I...? وجواب Not at all يعني نعم تفضل. ويمكنك بـ if ذكر النتيجة: If you interrupt me again, I will stop the meeting.',
      examples: [
        { en: 'I would rather not talk about that.', ar: 'أفضل ألا أتحدث عن ذلك.' },
        { en: 'Please respect my privacy.', ar: 'من فضلك احترم خصوصيتي.' },
        { en: 'If you interrupt me again, I will stop the meeting.', ar: 'إذا قاطعتني مرة أخرى، فسأوقف الاجتماع.' },
      ],
    },
    vocabulary: [
      { word: 'boundary', meaningAr: 'حد شخصي', example: 'Everyone needs healthy boundaries.' },
      { word: 'privacy', meaningAr: 'خصوصية', example: 'Please respect my privacy.' },
      { word: 'personal', meaningAr: 'شخصي', example: 'That is a personal question.' },
      { word: 'space', meaningAr: 'مساحة', example: 'I need some space after work.' },
      { word: 'rather', meaningAr: 'يفضل (would rather)', example: 'I would rather stay home.' },
      { word: 'interrupt', meaningAr: 'يقاطع', example: 'Please do not interrupt me.' },
      { word: 'limit', meaningAr: 'حد', example: 'We all have our limits.' },
      { word: 'uncomfortable', meaningAr: 'غير مرتاح', example: 'I feel uncomfortable with this topic.' },
      { word: 'busy', meaningAr: 'مشغول', example: 'I am busy this evening.' },
      { word: 'mind', meaningAr: 'يمانع', example: 'Do you mind if I close the door?' },
      { word: 'matter', meaningAr: 'أمر / شأن', example: 'It is a private matter.' },
      { word: 'decide', meaningAr: 'يقرر', example: 'I prefer to decide by myself.' },
    ],
    scenario: [
      { en: 'I would rather not talk about that.', ar: 'أفضل ألا أتحدث عن ذلك.', d: 1 },
      { en: 'Please respect my privacy at home.', ar: 'من فضلك احترم خصوصيتي في البيت.', d: 1 },
      { en: 'That does not work for me, sorry.', ar: 'هذا لا يناسبني، آسف.', d: 1 },
      { en: 'I need some quiet time after work.', ar: 'أحتاج بعض الوقت الهادئ بعد العمل.', d: 1 },
      { en: 'Please do not call me after ten at night.', ar: 'من فضلك لا تتصل بي بعد العاشرة ليلا.', d: 2 },
      { en: 'I would rather not share my salary.', ar: 'أفضل ألا أشارك راتبي.', d: 2 },
      { en: 'Do you mind if I open the window?', ar: 'هل تمانع إذا فتحت النافذة؟', d: 2 },
      { en: 'I am not comfortable with this topic.', ar: 'لست مرتاحا لهذا الموضوع.', d: 2 },
      { en: 'She asked them to respect her space.', ar: 'طلبت منهم احترام مساحتها.', d: 2 },
      { en: 'We should respect each other\'s limits.', ar: 'ينبغي أن نحترم حدود بعضنا.', d: 2 },
      { en: 'If you interrupt me again, I will stop the meeting.', ar: 'إذا قاطعتني مرة أخرى، فسأوقف الاجتماع.', d: 3 },
      { en: 'I have already explained my decision twice.', ar: 'لقد شرحت قراري مرتين بالفعل.', d: 3 },
      { en: 'My brother does not like questions about his plans.', ar: 'أخي لا يحب الأسئلة عن خططه.', d: 2 },
      { en: 'Can we change the subject, please?', ar: 'هل يمكننا تغيير الموضوع من فضلك؟', d: 2 },
      { en: 'Why did you leave the party early?', ar: 'لماذا غادرت الحفلة مبكرا؟', d: 2 },
      { en: 'I needed some time alone, thank you for understanding.', ar: 'احتجت بعض الوقت وحدي، شكرا لتفهمك.', d: 2 },
      { en: 'I prefer to decide this by myself.', ar: 'أفضل أن أقرر هذا بنفسي.', d: 3 },
      { en: 'Please knock before you enter my room.', ar: 'من فضلك طرق الباب قبل أن تدخل غرفتي.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I would rather not {A}.', arTmpl: 'أفضل ألا {A_ar}.',
        slots: {
          A: [
            { en: 'talk about my family', ar: 'أتحدث عن عائلتي' }, { en: 'share my salary', ar: 'أشارك راتبي' },
            { en: 'discuss my plans', ar: 'أناقش خططي' }, { en: 'answer this question', ar: 'أجيب عن هذا السؤال' },
            { en: 'go out tonight', ar: 'أخرج الليلة' }, { en: 'lend my car', ar: 'أعير سيارتي' },
          ],
        },
        tags: ['boundaries'], d: 1, limit: 6,
      },
      {
        tmpl: 'Please respect my {N}.', arTmpl: 'من فضلك احترم {N_ar}.',
        slots: {
          N: [
            { en: 'privacy', ar: 'خصوصيتي' }, { en: 'space', ar: 'مساحتي' },
            { en: 'time', ar: 'وقتي' }, { en: 'decision', ar: 'قراري' },
            { en: 'opinion', ar: 'رأيي' }, { en: 'limits', ar: 'حدودي' },
            { en: 'choices', ar: 'اختياراتي' }, { en: 'needs', ar: 'احتياجاتي' },
          ],
        },
        tags: ['boundaries'], d: 1, limit: 8,
      },
      {
        tmpl: 'Do you mind if I {A}?', arTmpl: 'هل تمانع إذا {A_ar}؟',
        slots: {
          A: [
            { en: 'close the door', ar: 'أغلق الباب' }, { en: 'sit here', ar: 'أجلس هنا' },
            { en: 'leave early', ar: 'أغادر مبكرا' }, { en: 'ask a personal question', ar: 'أسأل سؤالا شخصيا' },
            { en: 'turn down the music', ar: 'أخفض الموسيقى' }, { en: 'borrow your notes', ar: 'أستعر دفاترك' },
          ],
        },
        tags: ['boundaries', 'questions'], d: 2, limit: 6,
      },
      {
        tmpl: '{T} does not work for me.', arTmpl: '{T_ar} لا يناسبني.',
        slots: {
          T: [
            { en: 'That time', ar: 'هذا الوقت' }, { en: 'Friday afternoon', ar: 'ظهر الجمعة' },
            { en: 'This plan', ar: 'هذه الخطة' }, { en: 'The new schedule', ar: 'الجدول الجديد' },
            { en: 'That price', ar: 'هذا السعر' }, { en: 'The morning meeting', ar: 'اجتماع الصباح' },
          ],
        },
        tags: ['boundaries', 'refusal'], d: 2, limit: 6,
      },
      {
        tmpl: 'If you {V} again, {R}.', arTmpl: 'إذا {V_ar} مرة أخرى، {R_ar}.',
        slots: {
          V: [
            { en: 'interrupt me', ar: 'قاطعتني' }, { en: 'call me late at night', ar: 'اتصلت بي متأخرا' },
            { en: 'ask about my salary', ar: 'سألتني عن راتبي' }, { en: 'borrow my things without asking', ar: 'استعرت أشيائي بدون إذن' },
          ],
          R: [
            { en: 'I will stop the conversation', ar: 'فسأوقف الحديث' }, { en: 'I will leave the room', ar: 'فسأغادر الغرفة' },
            { en: 'I will end the call', ar: 'فسأنهي المكالمة' }, { en: 'I will say no clearly', ar: 'فسأقول لا بوضوح' },
          ],
        },
        tags: ['boundaries', 'conditionals'], d: 3, limit: 8,
      },
    ],
    fills: [
      { en: 'I would rather not talk about that.', ar: 'أفضل ألا أتحدث عن ذلك.', word: 'rather' },
      { en: 'Please respect my privacy at home.', ar: 'من فضلك احترم خصوصيتي في البيت.', word: 'privacy' },
      { en: 'That does not work for me, sorry.', ar: 'هذا لا يناسبني، آسف.', word: 'work', hint: 'يناسب' },
      { en: 'Do you mind if I open the window?', ar: 'هل تمانع إذا فتحت النافذة؟', word: 'mind' },
      { en: 'I feel uncomfortable with this topic.', ar: 'لست مرتاحا لهذا الموضوع.', word: 'uncomfortable' },
      { en: 'Please do not interrupt me.', ar: 'من فضلك لا تقاطعني.', word: 'interrupt' },
      { en: 'It is a private matter.', ar: 'إنه أمر خاص.', word: 'matter' },
      { en: 'I prefer to decide by myself.', ar: 'أفضل أن أقرر بنفسي.', word: 'decide' },
    ],
    orders: [
      { en: 'I would rather not talk about that.', ar: 'أفضل ألا أتحدث عن ذلك.' },
      { en: 'Please respect my privacy at home.', ar: 'من فضلك احترم خصوصيتي في البيت.' },
      { en: 'That does not work for me today.', ar: 'هذا لا يناسبني اليوم.' },
      { en: 'Do you mind if I close the door?', ar: 'هل تمانع إذا أغلقت الباب؟' },
      { en: 'If you interrupt me again, I will leave.', ar: 'إذا قاطعتني مرة أخرى، فسأغادر.' },
      { en: 'I need some quiet time after work.', ar: 'أحتاج بعض الوقت الهادئ بعد العمل.' },
    ],
    mc: [
      { question: 'Someone asks about your salary. A polite boundary is:', options: ['I would rather not share that.', 'How much do you earn?', 'That is my secret password.', 'Please answer for me.'], answerIndex: 0, ar: 'سألك أحد عن راتبك، فتضع حدا بأدب:' },
      { question: 'Which sentence sets a boundary politely?', options: ['Please respect my privacy.', 'Give me the phone!', 'You are annoying.', 'I hate visitors.'], answerIndex: 0, ar: 'أي جملة تضع حدا شخصيا بأدب؟' },
      { question: '"That does not work for me" means:', options: ['هذا لا يناسبني', 'هذا يعمل جيدا', 'أنا مشغول دائما', 'سأتأخر قليلا'], answerIndex: 0, ar: 'ما معنى That does not work for me؟' },
      { question: 'Which phrase asks permission politely?', options: ['Do you mind if I sit here?', 'Move your chair now.', 'I took your seat.', 'Get up, please.'], answerIndex: 0, ar: 'أي عبارة تطلب الإذن بأدب؟' },
    ],
  },

  /* ================= lesson 158 — Resolving Conflicts ================= */
  {
    num: 158,
    tags: ['conflict', 'communication'],
    objectives: [
      'Start a calm conversation after an argument',
      'Apologize and admit your mistakes',
      'Suggest solutions and find a compromise',
    ],
    grammar: {
      explanation: 'To calm a conflict, ask first: "Can we talk about this calmly?". Take responsibility with the past simple and "mean": "I did not mean to upset you" and "It was my fault". Invite action with "Let us ...": "Let us find a solution together". Use "should" for the fair next step: "You should apologize for the harsh words". A first conditional sentence shows the way forward: "If we listen to each other, we will find a solution". Speak about feelings, not blame: "I understand your feelings".',
      explanationAr: 'لتهدئة خلاف اسأل أولا: Can we talk about this calmly؟ وتحمل مسؤوليتك بالماضي البسيط مع mean: I did not mean to upset you وIt was my fault. وادعُ إلى الفعل بـ Let us: Let us find a solution together. واستخدم should للخطوة العادلة التالية: You should apologize for the harsh words. وجملة الشرطي الأول تبيّن الطريق: If we listen to each other, we will find a solution. وتحدث عن المشاعر لا عن اللوم: I understand your feelings.',
      examples: [
        { en: 'Can we talk about this calmly?', ar: 'هل يمكننا أن نتحدث بهدوء في هذا الأمر؟' },
        { en: 'I did not mean to upset you.', ar: 'لم أقصد أن أزعجك.' },
        { en: 'If we listen to each other, we will find a solution.', ar: 'إذا استمعنا إلى بعضنا، فسنجد حلا.' },
      ],
    },
    vocabulary: [
      { word: 'conflict', meaningAr: 'خلاف / صراع', example: 'They solved the conflict calmly.' },
      { word: 'argue', meaningAr: 'يتجادل', example: 'We argued about money yesterday.' },
      { word: 'calmly', meaningAr: 'بهدوء', example: 'Please speak calmly.' },
      { word: 'upset', meaningAr: 'منزعج / متضايق', example: 'I did not mean to make you upset.' },
      { word: 'misunderstanding', meaningAr: 'سوء فهم', example: 'It was just a misunderstanding.' },
      { word: 'solution', meaningAr: 'حل', example: 'Let us find a solution together.', ipa: 'səˈluːʃən' },
      { word: 'compromise', meaningAr: 'حل وسط', example: 'A compromise works for both sides.' },
      { word: 'fault', meaningAr: 'ذنب / خطأ', example: 'It was my fault, sorry.' },
      { word: 'resolve', meaningAr: 'يحل (مشكلة)', example: 'We resolved the problem quickly.' },
      { word: 'hurt', meaningAr: 'يجرح / يؤلم', example: 'My words hurt her feelings.' },
      { word: 'apologize', meaningAr: 'يعتذر', example: 'He apologized to his friend.' },
      { word: 'feelings', meaningAr: 'مشاعر', example: 'I understand your feelings.' },
    ],
    scenario: [
      { en: 'Can we talk about this calmly?', ar: 'هل يمكننا أن نتحدث بهدوء في هذا الأمر؟', d: 1 },
      { en: 'I did not mean to upset you.', ar: 'لم أقصد أن أزعجك.', d: 1 },
      { en: 'Let us find a solution together.', ar: 'لنجد حلا معا.', d: 1 },
      { en: 'I see it differently, but let us talk.', ar: 'أرى الأمر بشكل مختلف، لكن لنتحدث.', d: 2 },
      { en: 'We argued about money yesterday.', ar: 'تجادلنا حول المال أمس.', d: 2 },
      { en: 'It was just a misunderstanding.', ar: 'كان مجرد سوء فهم.', d: 2 },
      { en: 'I am sorry, it was my fault.', ar: 'أنا آسف، كان ذلك ذنبي.', d: 2 },
      { en: 'Let us take a short break and continue later.', ar: 'لنأخذ استراحة قصيرة ونكمل لاحقا.', d: 2 },
      { en: 'She has apologized to her friend already.', ar: 'لقد اعتذرت إلى صديقتها بالفعل.', d: 2 },
      { en: 'They have argued twice this week.', ar: 'لقد تجادلوا مرتين هذا الأسبوع.', d: 3 },
      { en: 'If we listen to each other, we will fix this.', ar: 'إذا استمعنا إلى بعضنا، فسنحل هذا الأمر.', d: 2 },
      { en: 'Do not shout; please speak calmly.', ar: 'لا تصرخ؛ تحدث بهدوء من فضلك.', d: 2 },
      { en: 'My cousin and I disagreed about the plan.', ar: 'اختلف أنا وابن عمي حول الخطة.', d: 2 },
      { en: 'We should find a compromise that works for both sides.', ar: 'ينبغي أن نجد حلا وسطا يناسب الطرفين.', d: 3 },
      { en: 'You forgot my birthday!', ar: 'لقد نسيت عيد ميلادي!', d: 1 },
      { en: 'I am really sorry, I did not mean to hurt you.', ar: 'أنا آسف حقا، لم أقصد أن أجرحك.', d: 2 },
      { en: 'What do you suggest we do now?', ar: 'ماذا تقترح أن نفعل الآن؟', d: 2 },
      { en: 'Why do we always argue about small things?', ar: 'لماذا نتجادل دائما حول الأمور الصغيرة؟', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Can we talk about {T} calmly?', arTmpl: 'هل يمكننا أن نتحدث عن {T_ar} بهدوء؟',
        slots: {
          T: [
            { en: 'this problem', ar: 'هذه المشكلة' }, { en: 'the schedule', ar: 'الجدول' },
            { en: 'the money issue', ar: 'قضية المال' }, { en: 'the missed call', ar: 'المكالمة الفائتة' },
            { en: 'the shared work', ar: 'العمل المشترك' }, { en: 'the delay', ar: 'التأخير' },
            { en: 'the noise complaint', ar: 'شكوى الضجيج' }, { en: 'the parking issue', ar: 'قضية مواقف السيارات' },
          ],
        },
        tags: ['conflict', 'questions'], d: 1, limit: 8,
      },
      {
        tmpl: 'I did not mean to {V} you.', arTmpl: 'لم أقصد أن {V_ar}.',
        slots: {
          V: [
            { en: 'hurt', ar: 'أجرحك' }, { en: 'embarrass', ar: 'أحرجك' },
            { en: 'worry', ar: 'أقلقك' }, { en: 'scare', ar: 'أخيفك' },
            { en: 'annoy', ar: 'أضايقك' },
          ],
        },
        tags: ['conflict', 'apology'], d: 2, limit: 5,
      },
      {
        tmpl: 'Let us find a solution for {T}.', arTmpl: 'لنجد حلا {T_ar}.',
        slots: {
          T: [
            { en: 'this problem', ar: 'لهذه المشكلة' }, { en: 'the delay', ar: 'للتأخير' },
            { en: 'the argument', ar: 'للجدال' }, { en: 'the mistake', ar: 'للخطأ' },
            { en: 'the misunderstanding', ar: 'لسوء الفهم' }, { en: 'the conflict', ar: 'للخلاف' },
            { en: 'the schedule', ar: 'للجدول' }, { en: 'the rent issue', ar: 'لقضية الإيجار' },
          ],
        },
        tags: ['conflict', 'solutions'], d: 2, limit: 8,
      },
      {
        tmpl: 'You should apologize for {T}.', arTmpl: 'يجب أن تعتذر عن {T_ar}.',
        slots: {
          T: [
            { en: 'the harsh words', ar: 'الكلمات القاسية' }, { en: 'the delay', ar: 'التأخير' },
            { en: 'the mistake', ar: 'الخطأ' }, { en: 'forgetting her birthday', ar: 'نسيان عيد ميلادها' },
            { en: 'the loud argument', ar: 'الجدال الصاخب' }, { en: 'losing his book', ar: 'ضياع كتابه' },
          ],
        },
        tags: ['conflict', 'apology'], d: 2, limit: 6,
      },
      {
        tmpl: 'If we {V}, we will find a solution.', arTmpl: 'إذا {V_ar}، فسنجد حلا.',
        slots: {
          V: [
            { en: 'listen to each other', ar: 'استمعنا إلى بعضنا' }, { en: 'talk calmly', ar: 'تحدثنا بهدوء' },
            { en: 'stay patient', ar: 'تحلينا بالصبر' }, { en: 'respect each other', ar: 'احترمنا بعضنا' },
            { en: 'take a short break', ar: 'أخذنا استراحة قصيرة' },
          ],
        },
        tags: ['conflict', 'conditionals'], d: 3, limit: 5,
      },
    ],
    fills: [
      { en: 'Can we talk about this calmly?', ar: 'هل يمكننا أن نتحدث بهدوء في هذا الأمر؟', word: 'calmly' },
      { en: 'I did not mean to upset you.', ar: 'لم أقصد أن أزعجك.', word: 'upset' },
      { en: 'Let us find a solution together.', ar: 'لنجد حلا معا.', word: 'solution' },
      { en: 'It was just a misunderstanding.', ar: 'كان مجرد سوء فهم.', word: 'misunderstanding' },
      { en: 'I am sorry, it was my fault.', ar: 'أنا آسف، كان ذلك ذنبي.', word: 'fault' },
      { en: 'A compromise works for both sides.', ar: 'الحل الوسط يناسب الطرفين.', word: 'compromise' },
      { en: 'He apologized to his friend.', ar: 'لقد اعتذر إلى صديقه.', word: 'apologized' },
      { en: 'I understand your feelings.', ar: 'أفهم مشاعرك.', word: 'feelings' },
    ],
    orders: [
      { en: 'Can we talk about this calmly?', ar: 'هل يمكننا أن نتحدث بهدوء في هذا الأمر؟' },
      { en: 'I did not mean to upset you.', ar: 'لم أقصد أن أزعجك.' },
      { en: 'Let us find a solution together.', ar: 'لنجد حلا معا.' },
      { en: 'If we listen to each other, we will fix this.', ar: 'إذا استمعنا إلى بعضنا، فسنحل هذا الأمر.' },
      { en: 'I am sorry, it was my fault.', ar: 'أنا آسف، كان ذلك ذنبي.' },
      { en: 'We should find a compromise together.', ar: 'ينبغي أن نجد حلا وسطا معا.' },
    ],
    mc: [
      { question: 'Two friends argued. What is a good first sentence?', options: ['Can we talk about this calmly?', 'I will never talk to you again.', 'You are always wrong.', 'Forget it forever.'], answerIndex: 0, ar: 'تجادل صديقان، فما الجملة الأولى الجيدة؟' },
      { question: 'Which sentence apologizes?', options: ['I did not mean to upset you.', 'You upset me too.', 'It is your fault.', 'I do not care.'], answerIndex: 0, ar: 'أي جملة تعتبر اعتذارا؟' },
      { question: '"Let us find a solution" means:', options: ['لنجد حلا', 'لنجادل مرة أخرى', 'لننسى الأمر', 'لنغادر الآن'], answerIndex: 0, ar: 'ما معنى Let us find a solution؟' },
      { question: 'What helps after a misunderstanding?', options: ['A calm talk and an apology', 'Shouting louder', 'Waiting angrily', 'Another argument'], answerIndex: 0, ar: 'ما الذي يساعد بعد سوء الفهم؟' },
    ],
  },

  /* ================= lesson 159 — Saying No Politely ================= */
  {
    num: 159,
    tags: ['refusal', 'politeness'],
    objectives: [
      'Refuse invitations politely',
      'Decline requests without hurting feelings',
      'Offer another time and thank the person',
    ],
    grammar: {
      explanation: 'A polite refusal has three parts: thanks or regret, a clear no, and often another time. Say "Thank you, but I have plans" or "I\'m afraid I can\'t come tonight" — "I\'m afraid" softens the no. Use "can\'t" or "cannot" + base verb for ability and permission: "I can\'t lend you my car". Soften with "Unfortunately, ..." or "I would love to, but I am busy". Close kindly: "Maybe another time", "Next time, I will definitely join you", "I appreciate the offer" or "Thank you for thinking of me".',
      explanationAr: 'للرفض المهذب ثلاثة أجزاء: شكر أو أسف، ثم لا واضحة، وغالبا وقت آخر. قل Thank you, but I have plans أو I\'m afraid I can\'t come tonight، فعبارة I\'m afraid تلطف الرفض. واستخدم can\'t أو cannot مع مصدر الفعل للقدرة والإذن: I can\'t lend you my car. ولطّف بـ Unfortunately أو I would love to, but I am busy. واختم بلطف: Maybe another time أو Next time, I will definitely join you أو I appreciate the offer أو Thank you for thinking of me.',
      examples: [
        { en: 'Thank you, but I have plans that evening.', ar: 'شكرا لك، لكن لدي خطط في ذلك المساء.' },
        { en: 'I\'m afraid I can\'t come tomorrow.', ar: 'أخشى أنني لا أستطيع المجيء غدا.' },
        { en: 'Maybe another time.', ar: 'ربما في وقت آخر.' },
      ],
    },
    vocabulary: [
      { word: 'refuse', meaningAr: 'يرفض', example: 'She politely refused the invitation.' },
      { word: 'politely', meaningAr: 'بأدب', example: 'Refuse politely, never angrily.' },
      { word: 'offer', meaningAr: 'عرض', example: 'I appreciate the offer.' },
      { word: 'invite', meaningAr: 'يدعو', example: 'Thank you for inviting me.' },
      { word: 'plans', meaningAr: 'خطط', example: 'I have plans with my family.' },
      { word: 'afraid', meaningAr: 'أخشى (للتلطيف)', example: 'I am afraid I cannot come.' },
      { word: 'another time', meaningAr: 'وقت آخر', example: 'Maybe another time.' },
      { word: 'appreciate', meaningAr: 'يقدر / يشكر', example: 'I appreciate your kindness.', ipa: 'əˈpriːʃieɪt' },
      { word: 'unfortunately', meaningAr: 'للأسف', example: 'Unfortunately, I cannot join you.' },
      { word: 'available', meaningAr: 'متاح', example: 'I am not available on Tuesday.' },
      { word: 'next time', meaningAr: 'المرة القادمة', example: 'Next time, I will join you.' },
      { word: 'kindness', meaningAr: 'لطف', example: 'Thank you for your kindness.' },
    ],
    scenario: [
      { en: 'I\'m afraid I can\'t come tonight.', ar: 'أخشى أنني لا أستطيع المجيء الليلة.', d: 1 },
      { en: 'Thank you, but I have plans that evening.', ar: 'شكرا لك، لكن لدي خطط في ذلك المساء.', d: 1 },
      { en: 'Maybe another time.', ar: 'ربما في وقت آخر.', d: 1 },
      { en: 'I appreciate the offer very much.', ar: 'أقدر عرضك كثيرا.', d: 1 },
      { en: 'Unfortunately, I cannot join you this weekend.', ar: 'للأسف، لا أستطيع الانضمام إليكم في نهاية الأسبوع.', d: 2 },
      { en: 'I would love to, but I am busy.', ar: 'أتمنى ذلك، لكنني مشغول.', d: 2 },
      { en: 'Thank you for inviting me to the party.', ar: 'شكرا لدعوتي إلى الحفلة.', d: 2 },
      { en: 'Can we meet next week instead?', ar: 'هل يمكننا اللقاء الأسبوع القادم بدلا من ذلك؟', d: 2 },
      { en: 'I can\'t lend you my car, sorry.', ar: 'لا أستطيع أن أعيرك سيارتي، آسف.', d: 2 },
      { en: 'She politely refused their invitation to dinner.', ar: 'رفضت بأدب دعوتهم إلى العشاء.', d: 2 },
      { en: 'We have already made plans with my family.', ar: 'لقد وضعنا خططا مع عائلتي بالفعل.', d: 2 },
      { en: 'I do not think I can help you this time.', ar: 'لا أظن أنني أستطيع مساعدتك هذه المرة.', d: 3 },
      { en: 'If it is on Friday, I will come.', ar: 'إذا كان يوم الجمعة، فسأحضر.', d: 2 },
      { en: 'Next time, I will definitely join you.', ar: 'في المرة القادمة، سأنضم إليكم بالتأكيد.', d: 2 },
      { en: 'Can you help me move the furniture?', ar: 'هل يمكنك مساعدتي في نقل الأثاث؟', d: 1 },
      { en: 'I\'m afraid I can\'t; my back hurts today.', ar: 'أخشى أنني لا أستطيع؛ ظهري يؤلمني اليوم.', d: 2 },
      { en: 'Could we choose another day this month?', ar: 'هل يمكننا اختيار يوم آخر هذا الشهر؟', d: 3 },
      { en: 'Thank you for thinking of me today.', ar: 'شكرا لتفكرك بي اليوم.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I\'m afraid I can\'t {A}.', arTmpl: 'أخشى أنني لا أستطيع {A_ar}.',
        slots: {
          A: [
            { en: 'come tomorrow', ar: 'المجيء غدا' }, { en: 'join the trip', ar: 'الانضمام إلى الرحلة' },
            { en: 'stay late', ar: 'البقاء حتى وقت متأخر' }, { en: 'lend you money', ar: 'إقراضك مالا' },
            { en: 'help you move', ar: 'مساعدتك في النقل' }, { en: 'attend the meeting', ar: 'حضور الاجتماع' },
          ],
        },
        tags: ['refusal'], d: 1, limit: 6,
      },
      {
        tmpl: 'Thank you, but I have {N}.', arTmpl: 'شكرا لك، لكن لدي {N_ar}.',
        slots: {
          N: [
            { en: 'plans', ar: 'خطط' }, { en: 'an appointment', ar: 'موعد' },
            { en: 'work', ar: 'عمل' }, { en: 'a family dinner', ar: 'عشاء عائلي' },
            { en: 'a doctor visit', ar: 'زيارة للطبيب' },
          ],
        },
        tags: ['refusal'], d: 1, limit: 5,
      },
      {
        tmpl: 'I can\'t {V} on {D}.', arTmpl: 'لا أستطيع {V_ar} يوم {D_ar}.',
        slots: {
          V: [
            { en: 'come', ar: 'المجيء' }, { en: 'meet', ar: 'اللقاء' },
            { en: 'travel', ar: 'السفر' }, { en: 'visit', ar: 'الزيارة' },
          ],
          D: B.DAYS,
        },
        tags: ['refusal', 'days-months'], d: 2, limit: 12,
      },
      {
        tmpl: 'Maybe {T} instead.', arTmpl: 'ربما {T_ar} بدلا من ذلك.',
        slots: {
          T: [
            { en: 'next week', ar: 'الأسبوع القادم' }, { en: 'another time', ar: 'وقت آخر' },
            { en: 'next month', ar: 'الشهر القادم' }, { en: 'after work', ar: 'بعد العمل' },
            { en: 'on Saturday', ar: 'يوم السبت' },
          ],
        },
        tags: ['refusal', 'alternatives'], d: 2, limit: 5,
      },
      {
        tmpl: 'Thank you for {N}.', arTmpl: 'شكرا لك على {N_ar}.',
        slots: {
          N: [
            { en: 'the offer', ar: 'العرض' }, { en: 'the invitation', ar: 'الدعوة' },
            { en: 'thinking of me', ar: 'تفكرك بي' }, { en: 'your kindness', ar: 'لطفك' },
            { en: 'the ride', ar: 'توصيلتي' },
          ],
        },
        tags: ['refusal', 'politeness'], d: 1, limit: 5,
      },
    ],
    fills: [
      { en: 'I\'m afraid I can\'t come tonight.', ar: 'أخشى أنني لا أستطيع المجيء الليلة.', word: 'afraid' },
      { en: 'Thank you, but I have plans today.', ar: 'شكرا لك، لكن لدي خطط اليوم.', word: 'plans' },
      { en: 'Maybe another time.', ar: 'ربما في وقت آخر.', word: 'another' },
      { en: 'I appreciate the offer.', ar: 'أقدر هذا العرض.', word: 'appreciate' },
      { en: 'Unfortunately, I cannot join you.', ar: 'للأسف، لا أستطيع الانضمام إليكم.', word: 'Unfortunately' },
      { en: 'She politely refused the invitation.', ar: 'رفضت بأدب الدعوة.', word: 'politely' },
      { en: 'I am not available on Tuesday.', ar: 'لست متاحا يوم الثلاثاء.', word: 'available' },
      { en: 'Next time, I will join you.', ar: 'في المرة القادمة، سأنضم إليكم.', word: 'Next' },
    ],
    orders: [
      { en: 'I\'m afraid I can\'t come tonight.', ar: 'أخشى أنني لا أستطيع المجيء الليلة.' },
      { en: 'Thank you, but I have plans today.', ar: 'شكرا لك، لكن لدي خطط اليوم.' },
      { en: 'Maybe we can meet another time.', ar: 'ربما يمكننا اللقاء في وقت آخر.' },
      { en: 'I appreciate the offer very much.', ar: 'أقدر عرضك كثيرا.' },
      { en: 'Can we meet next week instead?', ar: 'هل يمكننا اللقاء الأسبوع القادم بدلا من ذلك؟' },
      { en: 'Unfortunately, I cannot join you this weekend.', ar: 'للأسف، لا أستطيع الانضمام إليكم في نهاية الأسبوع.' },
    ],
    mc: [
      { question: 'A colleague invites you but you are busy. You say:', options: ['Thank you, but I have plans.', 'I will eat your food.', 'Do not ask me again.', 'My answer is always no.'], answerIndex: 0, ar: 'دعاك زميلك وأنت مشغول، فأجبت بأدب:' },
      { question: 'Which sentence is a polite refusal?', options: ['I\'m afraid I can\'t come tonight.', 'Never!', 'That is a bad idea!', 'You always bother me.'], answerIndex: 0, ar: 'أي جملة رفض مهذب؟' },
      { question: '"Maybe another time" means:', options: ['ربما في وقت آخر', 'الآن حتما', 'أبدا في حياتي', 'في نفس اللحظة'], answerIndex: 0, ar: 'ما معنى Maybe another time؟' },
      { question: 'Which phrase shows you value the offer?', options: ['I appreciate the offer.', 'Give me more.', 'I forgot it.', 'It was noisy.'], answerIndex: 0, ar: 'أي عبارة تبين أنك تقدر العرض؟' },
    ],
  },
];
