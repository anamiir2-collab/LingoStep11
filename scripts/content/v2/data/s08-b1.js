/* ============================================================
   v2 section data — s08-b1.js
   Work & Money · lessons 179–181 (presentations, deadlines,
   teamwork)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 179 — Presentations ================= */
  {
    num: 179,
    tags: ['work', 'presentations'],
    objectives: [
      'Open a presentation and present the topic',
      'Describe slides and charts to an audience',
      'Sum up and invite questions',
    ],
    grammar: {
      explanation: 'Open a presentation with "Today I will talk about ...". Signpost to your slides: "As you can see on this slide, sales are growing" — the present continuous shows change happening now, while "This chart shows the numbers for last year" uses the present simple for facts. Move between parts with "Shall we move to the second part?". Offer help with "If you cannot see the screen, please sit closer". Finish with "To sum up, we need more time and support", thank the audience with "Thank you for your attention" and invite questions: "Any questions?"',
      explanationAr: 'افتح العرض بـ Today I will talk about ... ووجّه الجمهور إلى الشرائح: As you can see on this slide, sales are growing، فالمضارع المستمر يبين تغيرا يحدث الآن، أما This chart shows the numbers for last year فمضارع بسيط للحقائق. وانتقل بين الأجزاء بـ Shall we move to the second part؟ واعرض المساعدة بـ If you cannot see the screen, please sit closer. واختم بـ To sum up, we need more time and support، واشكر الجمهور بـ Thank you for your attention، وافتح باب الأسئلة: Any questions؟',
      examples: [
        { en: 'Today I will talk about our new marketing plan.', ar: 'اليوم سأتحدث عن خطة التسويق الجديدة.' },
        { en: 'As you can see on this slide, sales are growing.', ar: 'كما ترون في هذه الشريحة، المبيعات في ازدياد.' },
        { en: 'To sum up, we need more time and support.', ar: 'وفي الختام، نحتاج المزيد من الوقت والدعم.' },
      ],
    },
    vocabulary: [
      { word: 'presentation', meaningAr: 'عرض تقديمي', example: 'My presentation has three main parts.', ipa: 'ˌprɛzənˈteɪʃən' },
      { word: 'slide', meaningAr: 'شريحة', example: 'As you can see on this slide, sales are growing.' },
      { word: 'audience', meaningAr: 'الجمهور', example: 'The audience is listening carefully.' },
      { word: 'chart', meaningAr: 'رسم بياني', example: 'This chart shows the numbers for last year.' },
      { word: 'projector', meaningAr: 'جهاز العرض', example: 'The projector is not working.' },
      { word: 'topic', meaningAr: 'موضوع', example: 'I have presented this topic twice before.' },
      { word: 'to sum up', meaningAr: 'في الختام / للتلخيص', example: 'To sum up, we need more time and support.' },
      { word: 'attention', meaningAr: 'انتباه', example: 'Thank you for your attention.' },
      { word: 'outline', meaningAr: 'مخطط عام', example: 'My outline shows the three main parts.' },
      { word: 'loudly', meaningAr: 'بصوت عال', example: 'Please speak loudly at the back.' },
      { word: 'briefly', meaningAr: 'باختصار', example: 'Let me explain the plan briefly.' },
      { word: 'practice', meaningAr: 'يتدرب', example: 'I practice my presentation twice.' },
    ],
    scenario: [
      { en: 'Today I will talk about our new marketing plan.', ar: 'اليوم سأتحدث عن خطة التسويق الجديدة.', d: 1 },
      { en: 'My presentation has three main parts.', ar: 'عرضي التقديمي فيه ثلاثة أجزاء رئيسية.', d: 1 },
      { en: 'As you can see on this slide, sales are growing.', ar: 'كما ترون في هذه الشريحة، المبيعات في ازدياد.', d: 2 },
      { en: 'This chart shows the numbers for last year.', ar: 'يبين هذا الرسم البياني أرقام العام الماضي.', d: 1 },
      { en: 'Could everyone please turn their phones to silent?', ar: 'هل يضع الجميع هواتفهم على الصامت من فضلكم؟', d: 2 },
      { en: 'Shall we move to the second part?', ar: 'هل ننتقل إلى الجزء الثاني؟', d: 1 },
      { en: 'The projector is not working.', ar: 'جهاز العرض لا يعمل.', d: 1 },
      { en: 'Do not worry; we will share the slides by email.', ar: 'لا تقلق؛ سنشارك الشرائح عبر البريد الإلكتروني.', d: 2 },
      { en: 'If you cannot see the screen, please sit closer.', ar: 'إذا لم تستطع رؤية الشاشة، اجلس أقرب من فضلك.', d: 2 },
      { en: 'I have presented this topic twice before.', ar: 'قدمت هذا الموضوع مرتين من قبل.', d: 2 },
      { en: 'The audience is listening carefully.', ar: 'الجمهور يستمع باهتمام.', d: 1 },
      { en: 'Are there any questions so far?', ar: 'هل هناك أي أسئلة حتى الآن؟', d: 1 },
      { en: 'Yes, could you explain the chart again, please?', ar: 'نعم، هل توضح الرسم البياني مرة أخرى من فضلك؟', d: 2 },
      { en: 'How long will the presentation take?', ar: 'كم سيستغرق العرض التقديمي؟', d: 2 },
      { en: 'To sum up, we need more time and support.', ar: 'وفي الختام، نحتاج المزيد من الوقت والدعم.', d: 2 },
      { en: 'Thank you for your attention.', ar: 'شكرا لانتباهكم.', d: 1 },
      { en: 'Do not speak too fast; speak clearly.', ar: 'لا تتحدث بسرعة كبيرة؛ تحدث بوضوح.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Today I will talk about {T}.', arTmpl: 'اليوم سأتحدث عن {T_ar}.',
        slots: {
          T: [
            { en: 'our new marketing plan', ar: 'خطة التسويق الجديدة' }, { en: 'our sales results', ar: 'نتائج المبيعات' },
            { en: 'the new product', ar: 'المنتج الجديد' }, { en: 'customer feedback', ar: 'آراء العملاء' },
            { en: 'next year\'s budget', ar: 'موازنة العام القادم' }, { en: 'our monthly progress', ar: 'تقدمنا الشهري' },
            { en: 'the training program', ar: 'برنامج التدريب' }, { en: 'the market situation', ar: 'وضع السوق' },
            { en: 'the new website', ar: 'الموقع الجديد' },
          ],
        },
        tags: ['presentations', 'openings'], d: 1, limit: 9,
      },
      {
        tmpl: 'As you can see on this slide, {C}.', arTmpl: 'كما ترون في هذه الشريحة، {C_ar}.',
        slots: {
          C: [
            { en: 'sales are growing', ar: 'المبيعات في ازدياد' }, { en: 'costs are falling', ar: 'التكاليف في انخفاض' },
            { en: 'the numbers are clear', ar: 'الأرقام واضحة' }, { en: 'demand is changing', ar: 'الطلب يتغير' },
            { en: 'the trend is positive', ar: 'الاتجاه إيجابي' }, { en: 'the results are mixed', ar: 'النتائج متباينة' },
          ],
        },
        tags: ['presentations', 'slides'], d: 2, limit: 6,
      },
      {
        tmpl: 'This chart shows {N}.', arTmpl: 'يبين هذا الرسم البياني {N_ar}.',
        slots: {
          N: [
            { en: 'the numbers for last year', ar: 'أرقام العام الماضي' }, { en: 'our monthly sales', ar: 'مبيعاتنا الشهرية' },
            { en: 'the growth of the market', ar: 'نمو السوق' }, { en: 'the cost of production', ar: 'تكلفة الإنتاج' },
            { en: 'the results of the survey', ar: 'نتائج الاستطلاع' }, { en: 'the progress of the team', ar: 'تقدم الفريق' },
          ],
        },
        tags: ['presentations', 'charts'], d: 2, limit: 6,
      },
      {
        tmpl: 'To sum up, we {A}.', arTmpl: 'وفي الختام، نحن {A_ar}.',
        slots: {
          A: [
            { en: 'need more time and support', ar: 'نحتاج المزيد من الوقت والدعم' },
            { en: 'will start the plan next month', ar: 'سنبدأ الخطة الشهر المقبل' },
            { en: 'are ready for the next step', ar: 'مستعدون للخطوة التالية' },
            { en: 'must reduce the costs', ar: 'يجب أن نخفض التكاليف' },
            { en: 'should ask the customers first', ar: 'ينبغي أن نسأل العملاء أولا' },
            { en: 'will launch the product in May', ar: 'سنطلق المنتج في مايو' },
            { en: 'must train the new staff', ar: 'يجب أن ندرّب الموظفين الجدد' },
          ],
        },
        tags: ['presentations', 'conclusions'], d: 2, limit: 7,
      },
      {
        tmpl: 'Any questions about {T}?', arTmpl: 'أي أسئلة حول {T_ar}؟',
        slots: {
          T: [
            { en: 'the plan', ar: 'الخطة' }, { en: 'the numbers', ar: 'الأرقام' },
            { en: 'the timeline', ar: 'الجدول الزمني' }, { en: 'the budget', ar: 'الموازنة' },
            { en: 'the new product', ar: 'المنتج الجديد' }, { en: 'the survey', ar: 'الاستطلاع' },
            { en: 'the new schedule', ar: 'الجدول الجديد' }, { en: 'the pricing', ar: 'التسعير' },
            { en: 'the campaign', ar: 'الحملة' },
          ],
        },
        tags: ['presentations', 'questions'], d: 1, limit: 9,
      },
    ],
    fills: [
      { en: 'Today I will talk about our new marketing plan.', ar: 'اليوم سأتحدث عن خطة التسويق الجديدة.', word: 'talk', hint: 'يتحدث' },
      { en: 'As you can see on this slide, sales are growing.', ar: 'كما ترون في هذه الشريحة، المبيعات في ازدياد.', word: 'slide', hint: 'شريحة العرض' },
      { en: 'This chart shows the numbers for last year.', ar: 'يبين هذا الرسم البياني أرقام العام الماضي.', word: 'chart', hint: 'رسم بياني' },
      { en: 'The projector is not working.', ar: 'جهاز العرض لا يعمل.', word: 'projector', hint: 'جهاز العرض' },
      { en: 'To sum up, we need more time and support.', ar: 'وفي الختام، نحتاج المزيد من الوقت والدعم.', word: 'sum', hint: 'تلخيص' },
      { en: 'Thank you for your attention.', ar: 'شكرا لانتباهكم.', word: 'attention', hint: 'انتباه' },
      { en: 'Are there any questions so far?', ar: 'هل هناك أي أسئلة حتى الآن؟', word: 'questions', hint: 'أسئلة' },
      { en: 'If you cannot see the screen, please sit closer.', ar: 'إذا لم تستطع رؤية الشاشة، اجلس أقرب من فضلك.', word: 'closer', hint: 'أقرب' },
    ],
    orders: [
      { en: 'Today I will talk about our new marketing plan.', ar: 'اليوم سأتحدث عن خطة التسويق الجديدة.' },
      { en: 'As you can see on this slide, sales are growing.', ar: 'كما ترون في هذه الشريحة، المبيعات في ازدياد.' },
      { en: 'To sum up, we need more time and support.', ar: 'وفي الختام، نحتاج المزيد من الوقت والدعم.' },
      { en: 'Thank you for your attention, everyone.', ar: 'شكرا لانتباهكم جميعا.' },
      { en: 'Are there any questions so far?', ar: 'هل هناك أي أسئلة حتى الآن؟' },
      { en: 'The projector is not working today.', ar: 'جهاز العرض لا يعمل اليوم.' },
    ],
    mc: [
      { question: '"To sum up" is used:', options: ['at the end of a presentation', 'at the start of an email', 'to answer the phone', 'to close a shop'], answerIndex: 0, ar: 'تستخدم عبارة To sum up:' },
      { question: 'What do you look at to see the numbers as a picture?', options: ['a chart', 'a receipt', 'a menu', 'a ticket'], answerIndex: 0, ar: 'ماذا تنظر إليه لترى الأرقام بشكل صورة؟' },
      { question: 'You want questions from the audience. You say:', options: ['Any questions?', 'Any coffee?', 'Any money?', 'Any minutes?'], answerIndex: 0, ar: 'تريد أسئلة من الجمهور، فتقول:' },
      { question: '"Thank you for your attention" means:', options: ['شكرا لانتباهكم', 'شكرا لهدايكم', 'شكرا لانتظاركم فقط', 'شكرا لأموالكم'], answerIndex: 0, ar: 'ما معنى Thank you for your attention؟' },
      { question: 'The screen is far away. You tell the audience:', options: ['If you cannot see, please sit closer.', 'Please go home now.', 'Do not look at the screen.', 'Turn off the lights.'], answerIndex: 0, ar: 'الشاشة بعيدة، فتقول للجمهور:' },
    ],
  },

  /* ================= lesson 180 — Deadlines ================= */
  {
    num: 180,
    tags: ['work', 'deadlines'],
    objectives: [
      'Say when work is due and talk about deadlines',
      'Report progress and ask for an extension',
      'Promise on-time delivery with if-clauses',
    ],
    grammar: {
      explanation: 'Deadlines use "due": "The report is due on Friday" — the answer must be ready by that day. Describe problems with "I am running behind schedule" and ask for more time with "Can we extend the deadline by two days?". Present perfect reports progress: "Have you finished the sales report yet?", "We have not made much progress today". Promise results with if + present and will: "If we start now, we can finish the report by Friday". Work that must be delivered at the agreed time is "on time"; late work is "behind schedule".',
      explanationAr: 'تستخدم كلمة due للمواعيد النهائية: The report is due on Friday، أي يجب أن يكون التقرير جاهزا قبل ذلك اليوم. وصف مشكلتك بـ I am running behind schedule واطلب وقتا إضافيا بـ Can we extend the deadline by two days؟ وتبلغ عن التقدم بالمضارع التام: Have you finished the sales report yet؟ وWe have not made much progress today. وعد بالنتائج بـ if مع المضارع وwill: If we start now, we can finish the report by Friday. والعمل المسلَّم في وقته المحدد هو on time، والمتأخر عن الجدول هو behind schedule.',
      examples: [
        { en: 'The report is due on Friday.', ar: 'التقرير مطلوب يوم الجمعة.' },
        { en: 'I am running behind schedule this week.', ar: 'أنا متأخر عن الجدول هذا الأسبوع.' },
        { en: 'Can we extend the deadline by two days?', ar: 'هل يمكننا تمديد الموعد النهائي يومين؟' },
      ],
    },
    vocabulary: [
      { word: 'deadline', meaningAr: 'الموعد النهائي', example: 'The team worked late to meet the deadline.', ipa: 'ˈdɛdlaɪn' },
      { word: 'due', meaningAr: 'مستحق / مطلوب', example: 'The report is due on Friday.' },
      { word: 'on time', meaningAr: 'في الوقت المحدد', example: 'The clients want the project on time.' },
      { word: 'behind schedule', meaningAr: 'متأخر عن الجدول', example: 'I am running behind schedule this week.' },
      { word: 'extend', meaningAr: 'يمدد', example: 'Can we extend the deadline by two days?' },
      { word: 'urgent', meaningAr: 'عاجل', example: 'Is the task urgent?' },
      { word: 'schedule', meaningAr: 'جدول زمني', example: 'Please send me the updated schedule tonight.' },
      { word: 'progress', meaningAr: 'تقدم', example: 'We have not made much progress today.' },
      { word: 'complete', meaningAr: 'يكمل', example: 'I will complete the report tomorrow.' },
      { word: 'delay', meaningAr: 'يؤخر / تأخير', example: 'I do not want to delay this project.' },
      { word: 'stress', meaningAr: 'توتر / ضغط', example: 'Deadlines cause stress for many people.' },
      { word: 'manage', meaningAr: 'يدير', example: 'I manage my time with a weekly plan.' },
    ],
    scenario: [
      { en: 'The report is due on Friday.', ar: 'التقرير مطلوب يوم الجمعة.', d: 1 },
      { en: 'We have to hand it in before noon.', ar: 'يجب أن نقدمه قبل الظهر.', d: 2 },
      { en: 'I am running behind schedule this week.', ar: 'أنا متأخر عن الجدول هذا الأسبوع.', d: 1 },
      { en: 'Do not worry; I will help you finish it.', ar: 'لا تقلق؛ سأساعدك على إنهائه.', d: 2 },
      { en: 'Can we extend the deadline by two days?', ar: 'هل يمكننا تمديد الموعد النهائي يومين؟', d: 2 },
      { en: 'I will ask the manager, but he is very strict.', ar: 'سأسأل المدير، لكنه صارم جدا.', d: 2 },
      { en: 'If we finish early, we can review it together.', ar: 'إذا انتهينا مبكرا، يمكننا مراجعته معا.', d: 2 },
      { en: 'Have you finished the sales report yet?', ar: 'هل أنهيت تقرير المبيعات بعد؟', d: 2 },
      { en: 'No, not yet. I need one more day.', ar: 'لا، ليس بعد. أحتاج يوما إضافيا.', d: 1 },
      { en: 'The clients want the project on time.', ar: 'العملاء يريدون المشروع في وقته المحدد.', d: 1 },
      { en: 'We have not made much progress today.', ar: 'لم نحرز تقدما كبيرا اليوم.', d: 2 },
      { en: 'That is true; the schedule is too tight.', ar: 'هذا صحيح؛ الجدول ضيق جدا.', d: 2 },
      { en: 'Please send me the updated schedule tonight.', ar: 'أرسل لي الجدول المحدث الليلة من فضلك.', d: 2 },
      { en: 'The team worked late to meet the deadline.', ar: 'عمل الفريق حتى وقت متأخر ليلبي الموعد النهائي.', d: 2 },
      { en: 'Is the task urgent?', ar: 'هل المهمة عاجلة؟', d: 1 },
      { en: 'Yes, it is very urgent; the client is waiting.', ar: 'نعم، إنها عاجلة جدا؛ العميل ينتظر.', d: 1 },
      { en: 'I do not want to delay this project.', ar: 'لا أريد تأخير هذا المشروع.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'The {D} is due on {T}.', arTmpl: '{D_ar} يوم {T_ar}.',
        slots: {
          D: [
            { en: 'sales report', ar: 'تقرير المبيعات مطلوب' }, { en: 'monthly budget', ar: 'الموازنة الشهرية مطلوبة' },
            { en: 'project plan', ar: 'خطة المشروع مطلوبة' }, { en: 'invoice', ar: 'الفاتورة مطلوبة' },
            { en: 'contract', ar: 'العقد مطلوب' }, { en: 'presentation', ar: 'العرض التقديمي مطلوب' },
          ],
          T: B.DAYS,
        },
        tags: ['deadlines', 'days'], d: 1, limit: 24,
      },
      {
        tmpl: 'Can we extend the deadline by {N}?', arTmpl: 'هل يمكننا تمديد الموعد النهائي {N_ar}؟',
        slots: {
          N: [
            { en: 'two days', ar: 'يومين' }, { en: 'one week', ar: 'أسبوعا' },
            { en: 'three days', ar: 'ثلاثة أيام' }, { en: 'one more day', ar: 'يوما إضافيا' },
            { en: 'a few hours', ar: 'بضع ساعات' },
          ],
        },
        tags: ['deadlines', 'polite-requests'], d: 2, limit: 5,
      },
      {
        tmpl: 'I am running behind schedule with {W}.', arTmpl: 'أنا متأخر عن الجدول في {W_ar}.',
        slots: {
          W: [
            { en: 'the sales report', ar: 'تقرير المبيعات' }, { en: 'the website project', ar: 'مشروع الموقع الإلكتروني' },
            { en: 'the translations', ar: 'الترجمات' }, { en: 'the budget review', ar: 'مراجعة الموازنة' },
            { en: 'the client emails', ar: 'رسائل العملاء' },
          ],
        },
        tags: ['deadlines', 'problems'], d: 2, limit: 5,
      },
      {
        tmpl: 'If we start now, we can {A} by {T}.', arTmpl: 'إذا بدأنا الآن، يمكننا {A_ar} {T_ar}.',
        slots: {
          A: [
            { en: 'finish the report', ar: 'إنهاء التقرير' }, { en: 'send the first draft', ar: 'إرسال المسودة الأولى' },
            { en: 'review everything', ar: 'مراجعة كل شيء' }, { en: 'submit the documents', ar: 'تقديم المستندات' },
          ],
          T: [
            { en: 'Friday', ar: 'يوم الجمعة' }, { en: 'Thursday', ar: 'يوم الخميس' },
            { en: 'noon', ar: 'الظهر' }, { en: 'the weekend', ar: 'نهاية الأسبوع' },
          ],
        },
        tags: ['deadlines', 'conditionals'], d: 2, limit: 10,
      },
      {
        tmpl: '{S} has already finished {O}.', arTmpl: '{S_ar} أنهى {O_ar} بالفعل.',
        slots: {
          S: B.NAMED_SING,
          O: [
            { en: 'the report', ar: 'التقرير' }, { en: 'the training course', ar: 'الدورة التدريبية' },
            { en: 'the first draft', ar: 'المسودة الأولى' }, { en: 'the client call', ar: 'مكالمة العميل' },
            { en: 'the monthly budget', ar: 'الموازنة الشهرية' },
          ],
        },
        tags: ['deadlines', 'present-perfect'], d: 2, limit: 15,
      },
    ],
    fills: [
      { en: 'The report is due on Friday.', ar: 'التقرير مطلوب يوم الجمعة.', word: 'due', hint: 'مستحق' },
      { en: 'I am running behind schedule this week.', ar: 'أنا متأخر عن الجدول هذا الأسبوع.', word: 'behind', hint: 'خلف/متأخر' },
      { en: 'Can we extend the deadline by two days?', ar: 'هل يمكننا تمديد الموعد النهائي يومين؟', word: 'extend', hint: 'يمدد' },
      { en: 'Have you finished the sales report yet?', ar: 'هل أنهيت تقرير المبيعات بعد؟', word: 'yet', hint: 'بعد' },
      { en: 'We have not made much progress today.', ar: 'لم نحرز تقدما كبيرا اليوم.', word: 'progress', hint: 'تقدم' },
      { en: 'The team worked late to meet the deadline.', ar: 'عمل الفريق حتى وقت متأخر ليلبي الموعد النهائي.', word: 'deadline', hint: 'الموعد النهائي' },
      { en: 'Is the task urgent?', ar: 'هل المهمة عاجلة؟', word: 'urgent', hint: 'عاجل' },
      { en: 'I do not want to delay this project.', ar: 'لا أريد تأخير هذا المشروع.', word: 'delay', hint: 'يؤخر' },
    ],
    orders: [
      { en: 'The report is due on Friday.', ar: 'التقرير مطلوب يوم الجمعة.' },
      { en: 'I am running behind schedule this week.', ar: 'أنا متأخر عن الجدول هذا الأسبوع.' },
      { en: 'Can we extend the deadline by two days?', ar: 'هل يمكننا تمديد الموعد النهائي يومين؟' },
      { en: 'Have you finished the sales report yet?', ar: 'هل أنهيت تقرير المبيعات بعد؟' },
      { en: 'The team worked late to meet the deadline.', ar: 'عمل الفريق حتى وقت متأخر ليلبي الموعد النهائي.' },
      { en: 'We have not made much progress today.', ar: 'لم نحرز تقدما كبيرا اليوم.' },
    ],
    mc: [
      { question: '"Due on Friday" means the report must be finished:', options: ['by Friday', 'on Monday', 'next year', 'never'], answerIndex: 0, ar: 'عبارة Due on Friday تعني أن التقرير يجب أن يُنجز:' },
      { question: 'You are "behind schedule". This means:', options: ['أنت متأخر عن الجدول', 'أنت قبل الموعد', 'أنهيت العمل', 'لديك وقت فراغ'], answerIndex: 0, ar: 'إذا كنت behind schedule فأنت:' },
      { question: 'The work is late. You should ask the manager to:', options: ['extend the deadline', 'delete the project', 'close the office', 'cancel your holiday'], answerIndex: 0, ar: 'العمل متأخر، فينبغي أن تطلب من المدير:' },
      { question: 'Which sentence shows the work is urgent?', options: ['The client is waiting now.', 'We can start next year.', 'Take your time, please.', 'The deadline is in June.'], answerIndex: 0, ar: 'أي جملة تبين أن العمل عاجل؟' },
      { question: 'Work delivered at the agreed time is:', options: ['on time', 'behind schedule', 'urgent', 'stressful'], answerIndex: 0, ar: 'العمل المسلَّم في الوقت المتفق عليه يسمى:' },
    ],
  },

  /* ================= lesson 181 — Teamwork ================= */
  {
    num: 181,
    tags: ['work', 'teamwork'],
    objectives: [
      'Divide tasks and take responsibility in a team',
      'Praise and support your teammates',
      'Agree and disagree politely about plans',
    ],
    grammar: {
      explanation: 'Team language starts with "let\'s": "Let\'s divide the tasks before we start". Accept a duty with "I will handle this part" — will shows a decision made now. Praise the team with "Good job, team!" and encourage support: "We should support each other". Disagree politely with "I do not agree with this plan; it costs too much". Use present perfect for team news: "Have you talked to the other members yet?", "We have agreed on a new idea". Real teamwork follows if-clauses: "If everyone helps, we will finish before six".',
      explanationAr: 'لغة الفريق تبدأ بـ let\'s: Let\'s divide the tasks before we start. وتقبل المسؤولية بـ I will handle this part، فـ will تفيد قرارا اتُّخذ الآن. وامدح الفريق بـ Good job, team! وشجع الدعم: We should support each other. واعترض بأدب بـ I do not agree with this plan; it costs too much. واستخدم المضارع التام لأخبار الفريق: Have you talked to the other members yet؟ وWe have agreed on a new idea. ويقوم العمل الجماعي على الشرط: If everyone helps, we will finish before six.',
      examples: [
        { en: 'Let\'s divide the tasks before we start.', ar: 'لنقسم المهام قبل أن نبدأ.' },
        { en: 'I will handle this part; it is easy for me.', ar: 'سأتولى هذا الجزء؛ إنه سهل بالنسبة لي.' },
        { en: 'If everyone helps, we will finish before six.', ar: 'إذا ساعد الجميع، سننتهي قبل السادسة.' },
      ],
    },
    vocabulary: [
      { word: 'teamwork', meaningAr: 'العمل الجماعي', example: 'Teamwork makes every project easier.', ipa: 'ˈtiːmwɜːrk' },
      { word: 'divide', meaningAr: 'يقسم', example: 'Let\'s divide the tasks before we start.' },
      { word: 'task', meaningAr: 'مهمة', example: 'This task is easy for two people.' },
      { word: 'handle', meaningAr: 'يتولى / يتعامل مع', example: 'I will handle this part.' },
      { word: 'support', meaningAr: 'يدعم', example: 'We should support each other during busy weeks.' },
      { word: 'share', meaningAr: 'يشارك', example: 'Can you share your notes with Omar, please?' },
      { word: 'responsibility', meaningAr: 'مسؤولية', example: 'What is my responsibility in this project?' },
      { word: 'agree', meaningAr: 'يوافق / يتفق', example: 'Yes, we have agreed on a new idea.' },
      { word: 'member', meaningAr: 'عضو', example: 'Have you talked to the other members yet?' },
      { word: 'idea', meaningAr: 'فكرة', example: 'That is a good idea for the project.' },
      { word: 'together', meaningAr: 'معا', example: 'The designers and the writers are working together.' },
      { word: 'success', meaningAr: 'نجاح', example: 'Teamwork is the secret of our success.' },
    ],
    scenario: [
      { en: 'Let\'s divide the tasks before we start.', ar: 'لنقسم المهام قبل أن نبدأ.', d: 1 },
      { en: 'I will handle this part; it is easy for me.', ar: 'سأتولى هذا الجزء؛ إنه سهل بالنسبة لي.', d: 2 },
      { en: 'Good job, team! We finished the report on time.', ar: 'عمل رائع يا فريق! أنهينا التقرير في وقته.', d: 2 },
      { en: 'We should support each other during busy weeks.', ar: 'ينبغي أن ندعم بعضنا بعضا في الأسابيع المزدحمة.', d: 2 },
      { en: 'Can you share your notes with Omar, please?', ar: 'هل تشارك ملاحظاتك مع عمر من فضلك؟', d: 2 },
      { en: 'He was absent yesterday.', ar: 'كان غائبا أمس.', d: 1 },
      { en: 'What is my responsibility in this project?', ar: 'ما مسؤوليتي في هذا المشروع؟', d: 2 },
      { en: 'You are responsible for the design.', ar: 'أنت مسؤول عن التصميم.', d: 1 },
      { en: 'If everyone helps, we will finish before six.', ar: 'إذا ساعد الجميع، سننتهي قبل السادسة.', d: 2 },
      { en: 'I do not agree with this plan; it costs too much.', ar: 'لا أوافق على هذه الخطة؛ كلفتها كبيرة جدا.', d: 2 },
      { en: 'Have you talked to the other members yet?', ar: 'هل تحدثت إلى الأعضاء الآخرين بعد؟', d: 2 },
      { en: 'Yes, we have agreed on a new idea.', ar: 'نعم، اتفقنا على فكرة جديدة.', d: 2 },
      { en: 'The designers and the writers are working together.', ar: 'المصممون والكتّاب يعملون معا.', d: 2 },
      { en: 'Do not do everything alone; ask for help.', ar: 'لا تفعل كل شيء وحيدا؛ اطلب المساعدة.', d: 2 },
      { en: 'Teamwork makes every project easier.', ar: 'العمل الجماعي يجعل كل مشروع أسهل.', d: 2 },
      { en: 'Thank you all for your great work.', ar: 'شكرا لكم جميعا على عملكم الرائع.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'Let\'s divide the {N} now.', arTmpl: 'لنقسم {N_ar} الآن.',
        slots: {
          N: [
            { en: 'tasks', ar: 'المهام' }, { en: 'work', ar: 'العمل' },
            { en: 'files', ar: 'الملفات' }, { en: 'reports', ar: 'التقارير' },
            { en: 'duties', ar: 'المسؤوليات' }, { en: 'calls', ar: 'المكالمات' },
          ],
        },
        tags: ['teamwork'], d: 1, limit: 6,
      },
      {
        tmpl: '{A} will handle the {T}.', arTmpl: '{A_ar} سيتولون {T_ar}.',
        slots: {
          A: [
            { en: 'Omar and Sara', ar: 'عمر وسارة' }, { en: 'Khalid and Lina', ar: 'خالد ولينا' },
            { en: 'Youssef and Maya', ar: 'يوسف ومايا' }, { en: 'the designers', ar: 'المصممون' },
            { en: 'the two interns', ar: 'المتدربان' },
          ],
          T: [
            { en: 'design', ar: 'التصميم' }, { en: 'research', ar: 'البحث' },
            { en: 'writing', ar: 'الكتابة' }, { en: 'budget', ar: 'الموازنة' },
            { en: 'presentation', ar: 'العرض التقديمي' },
          ],
        },
        tags: ['teamwork', 'future'], d: 2, limit: 12,
      },
      {
        tmpl: '{E}, team!', arTmpl: '{E_ar} يا فريق!',
        slots: {
          E: [
            { en: 'Good job', ar: 'عمل رائع' }, { en: 'Well done', ar: 'أحسنتم' },
            { en: 'Nice work', ar: 'عمل جميل' }, { en: 'Keep going', ar: 'واصلوا' },
            { en: 'Great effort', ar: 'جهد رائع' },
          ],
        },
        tags: ['teamwork', 'praise'], d: 1, limit: 5,
      },
      {
        tmpl: 'We should {V} each other.', arTmpl: 'ينبغي أن {V_ar} بعضنا بعضا.',
        slots: {
          V: [
            { en: 'support', ar: 'ندعم' }, { en: 'help', ar: 'نساعد' },
            { en: 'respect', ar: 'نحترم' }, { en: 'encourage', ar: 'نشجع' },
          ],
        },
        tags: ['teamwork', 'modals'], d: 2, limit: 4,
      },
      {
        tmpl: 'If everyone {V}, we will {A}.', arTmpl: 'إذا {V_ar} الجميع، فإننا {A_ar}.',
        slots: {
          V: [
            { en: 'helps', ar: 'ساعد' }, { en: 'cooperates', ar: 'تعاون' },
            { en: 'shares his ideas', ar: 'شارك بأفكاره' }, { en: 'does his part', ar: 'قام بجزئه' },
          ],
          A: [
            { en: 'finish before six', ar: 'ننجز العمل قبل السادسة' }, { en: 'succeed together', ar: 'ننجح معا' },
            { en: 'save a lot of time', ar: 'نوفر الكثير من الوقت' }, { en: 'learn something new', ar: 'نتعلم شيئا جديدا' },
          ],
        },
        tags: ['teamwork', 'conditionals'], d: 2, limit: 10,
      },
    ],
    fills: [
      { en: 'Let\'s divide the tasks before we start.', ar: 'لنقسم المهام قبل أن نبدأ.', word: 'divide', hint: 'يقسم' },
      { en: 'I will handle this part; it is easy for me.', ar: 'سأتولى هذا الجزء؛ إنه سهل بالنسبة لي.', word: 'handle', hint: 'يتولى' },
      { en: 'Good job, team! We finished the report on time.', ar: 'عمل رائع يا فريق! أنهينا التقرير في وقته.', word: 'report', hint: 'تقرير' },
      { en: 'We should support each other during busy weeks.', ar: 'ينبغي أن ندعم بعضنا بعضا في الأسابيع المزدحمة.', word: 'support', hint: 'يدعم' },
      { en: 'Can you share your notes with Omar, please?', ar: 'هل تشارك ملاحظاتك مع عمر من فضلك؟', word: 'share', hint: 'يشارك' },
      { en: 'What is my responsibility in this project?', ar: 'ما مسؤوليتي في هذا المشروع؟', word: 'responsibility', hint: 'مسؤولية' },
      { en: 'I do not agree with this plan.', ar: 'لا أوافق على هذه الخطة.', word: 'agree', hint: 'يوافق' },
      { en: 'Teamwork makes every project easier.', ar: 'العمل الجماعي يجعل كل مشروع أسهل.', word: 'Teamwork', hint: 'العمل الجماعي' },
    ],
    orders: [
      { en: 'Let\'s divide the tasks before we start.', ar: 'لنقسم المهام قبل أن نبدأ.' },
      { en: 'I will handle this part of the project.', ar: 'سأتولى هذا الجزء من المشروع.' },
      { en: 'Good job, team! We finished on time.', ar: 'عمل رائع يا فريق! أنهينا العمل في وقته.' },
      { en: 'We should support each other during busy weeks.', ar: 'ينبغي أن ندعم بعضنا بعضا في الأسابيع المزدحمة.' },
      { en: 'If everyone helps, we will finish before six.', ar: 'إذا ساعد الجميع، سننتهي قبل السادسة.' },
      { en: 'Do not do everything alone; ask for help.', ar: 'لا تفعل كل شيء وحيدا؛ اطلب المساعدة.' },
    ],
    mc: [
      { question: '"Let\'s divide the tasks" means:', options: ['لنقسم المهام', 'لنحذف المهام', 'لنؤجل المهام', 'لننتهي من المهام'], answerIndex: 0, ar: 'ما معنى Let\'s divide the tasks؟' },
      { question: 'A colleague finished her part well. You say:', options: ['Good job!', 'Bad luck!', 'Hurry up!', 'Never mind!'], answerIndex: 0, ar: 'أنجزت زميلتك جزءها جيدا، فتقول لها:' },
      { question: 'You want to work together with your team. You say:', options: ['We should support each other.', 'I will do it alone.', 'Do not call me.', 'This is my desk.'], answerIndex: 0, ar: 'تريد العمل مع فريقك، فتقول:' },
      { question: 'Everyone shares ideas and helps. This is:', options: ['teamwork', 'a deadline', 'an invoice', 'a subject line'], answerIndex: 0, ar: 'عندما يشارك الجميع الأفكار ويساعد بعضه، فهذا هو:' },
      { question: 'Which sentence politely disagrees?', options: ['I do not agree with this plan.', 'Your idea is stupid.', 'I am not listening.', 'Do it yourself!'], answerIndex: 0, ar: 'أي جملة تعترض بأدب؟' },
    ],
  },
];
