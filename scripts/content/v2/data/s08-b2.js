/* ============================================================
   v2 section data — s08-b2.js
   Work & Money · lessons 182–185
   (Feedback and Performance Reviews · Workplace Complaints ·
    Asking for a Raise · Professional Negotiation)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 182 — Feedback and Performance Reviews ================= */
  {
    num: 182,
    tags: ['performance-review', 'work'],
    objectives: [
      'Give positive feedback about a colleague or employee',
      'Talk about one area to improve politely',
      'Respond calmly to constructive feedback',
    ],
    grammar: {
      explanation: 'In a performance review we often talk about the past year with the present perfect: "You have done well on this project", "She has met all her targets". Give praise with "You did well on..." and describe a growth area with "An area to improve is...". Constructive feedback is polite and specific: it names one strength and one thing to work on. Respond calmly: say "Thank you for the feedback", or ask "Could you give me an example?" so you understand exactly what to change.',
      explanationAr: 'في التقييم السنوي نتحدث كثيرا عن العام الماضي بالمضارع التام: You have done well on this project، She has met all her targets. وامدح بعبارة You did well on... واذكر مجال التحسين بعبارة An area to improve is.... الملاحظات البناءة مهذبة ومحددة: تذكر نقطة قوة واحدة وشيئا واحدا يحتاج عملا. وأجب بهدوء: قل Thank you for the feedback أو اسأل Could you give me an example؟ لتعرف بالضبط ما يجب تغييره.',
      examples: [
        { en: 'You have done well on the monthly report.', ar: 'لقد أحسنت في التقرير الشهري.' },
        { en: 'An area to improve is your time management.', ar: 'مجال تحتاج إلى تحسينه هو إدارة وقتك.' },
        { en: 'Thank you for the constructive feedback.', ar: 'شكرا لك على الملاحظات البناءة.' },
      ],
    },
    vocabulary: [
      { word: 'annual review', meaningAr: 'تقييم سنوي', example: 'My annual review is in January.', ipa: 'ˈænjuəl rɪˈvjuː' },
      { word: 'feedback', meaningAr: 'ملاحظات / تغذية راجعة', example: 'Please give me honest feedback.' },
      { word: 'constructive', meaningAr: 'بنّاء', example: 'Constructive feedback helps workers grow.' },
      { word: 'performance', meaningAr: 'أداء', example: 'Her performance this year was strong.' },
      { word: 'target', meaningAr: 'هدف / مستهدف', example: 'We reached our sales targets.' },
      { word: 'strength', meaningAr: 'نقطة قوة', example: 'Teamwork is one of my strengths.' },
      { word: 'weakness', meaningAr: 'نقطة ضعف', example: 'Everyone has at least one weakness.' },
      { word: 'to improve', meaningAr: 'يحسّن', example: 'I want to improve my typing.' },
      { word: 'promotion', meaningAr: 'ترقية', example: 'He got a promotion after the review.' },
      { word: 'evaluation', meaningAr: 'تقييم', example: 'The evaluation was fair and clear.' },
      { word: 'praise', meaningAr: 'ثناء / يمدح', example: 'The manager praised our work.' },
      { word: 'deadline', meaningAr: 'موعد نهائي', example: 'Finish the report before the deadline.' },
    ],
    scenario: [
      { en: 'When is my annual review, please?', ar: 'متى تقييمي السنوي من فضلك؟', d: 1 },
      { en: 'Your annual review is on Sunday morning.', ar: 'تقييمك السنوي صباح يوم الأحد.', d: 1 },
      { en: 'You did well on the new project.', ar: 'أحسنت في المشروع الجديد.', d: 1 },
      { en: 'Thank you, I worked hard on it.', ar: 'شكرا لك، لقد عملت بجد فيه.', d: 1 },
      { en: 'The team has finished all its targets.', ar: 'أنجز الفريق جميع أهدافه.', d: 2 },
      { en: 'You have sold more than last year.', ar: 'لقد بعت أكثر من العام الماضي.', d: 2 },
      { en: 'Constructive feedback helps us grow.', ar: 'الملاحظات البناءة تساعدنا على النمو.', d: 2 },
      { en: 'An area to improve is your writing.', ar: 'المجال الذي تحتاج تحسينه هو كتابتك.', d: 2 },
      { en: 'I will take a course to improve it.', ar: 'سأأخذ دورة لتحسينه.', d: 2 },
      { en: 'Do you have any questions for me?', ar: 'هل لديك أي أسئلة لي؟', d: 1 },
      { en: 'Yes, could I get more training, please?', ar: 'نعم، هل يمكنني الحصول على مزيد من التدريب من فضلك؟', d: 1 },
      { en: 'We can discuss that after the review.', ar: 'يمكننا مناقشة ذلك بعد التقييم.', d: 2 },
      { en: 'They did not meet their targets this year.', ar: 'لم يحققوا أهدافهم هذا العام.', d: 2 },
      { en: 'We set clear goals for the next quarter.', ar: 'نضع أهدافا واضحة للربع القادم.', d: 2 },
      { en: 'Please send me your feedback in writing.', ar: 'من فضلك أرسل لي ملاحظاتك كتابيا.', d: 2 },
      { en: 'Her evaluation was fair and useful.', ar: 'كان تقييمها عادلا ومفيدا.', d: 3 },
      { en: 'I hope to get a promotion this year.', ar: 'آمل أن أحصل على ترقية هذا العام.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'You have done well on {P} this year.', arTmpl: 'لقد أحسنت في {P_ar} هذا العام.',
        slots: {
          P: [
            { en: 'the new project', ar: 'المشروع الجديد' }, { en: 'the monthly report', ar: 'التقرير الشهري' },
            { en: 'customer support', ar: 'خدمة العملاء' }, { en: 'the sales plan', ar: 'خطة المبيعات' },
            { en: 'the office website', ar: 'موقع المكتب' }, { en: 'the team meetings', ar: 'اجتماعات الفريق' },
            { en: 'the training course', ar: 'دورة التدريب' }, { en: 'the client emails', ar: 'رسائل العملاء' },
          ],
        },
        tags: ['performance-review', 'present-perfect'], d: 2, limit: 8,
      },
      {
        tmpl: 'You need to improve {S} before the next review.', arTmpl: 'تحتاج إلى تحسين {S_ar} قبل التقييم القادم.',
        slots: {
          S: [
            { en: 'your writing', ar: 'كتابتك' }, { en: 'your typing speed', ar: 'سرعة كتابتك' },
            { en: 'your English level', ar: 'مستوى إنجليزيتك' }, { en: 'your time management', ar: 'إدارة وقتك' },
            { en: 'your email style', ar: 'أسلوب رسائلك' }, { en: 'your spoken English', ar: 'إنجليزيتك المنطوقة' },
          ],
        },
        tags: ['performance-review', 'modals'], d: 2, limit: 6,
      },
      {
        tmpl: 'Did you meet your targets this {Q}?', arTmpl: 'هل حققت أهدافك هذا {Q_ar}؟',
        slots: {
          Q: [
            { en: 'week', ar: 'الأسبوع' }, { en: 'month', ar: 'الشهر' },
            { en: 'quarter', ar: 'الربع' }, { en: 'year', ar: 'العام' },
          ],
        },
        tags: ['performance-review', 'questions'], d: 1, limit: 4,
      },
      {
        tmpl: '{S} {V} the report before the deadline.', arTmpl: '{S_ar} {V_ar} التقرير قبل الموعد النهائي.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'He', ar: 'هو', agr: 'he' },
            { en: 'She', ar: 'هي', agr: 'she' }, { en: 'We', ar: 'نحن', agr: 'we' },
            { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{ en: B.enPresent('write', x.S.agr), ar: B.arPresent('write', x.S.agr) }],
        },
        tags: ['performance-review', 'present-simple'], d: 2, limit: 5,
      },
      {
        tmpl: 'Our manager gives us {F} every review.', arTmpl: 'مديرنا يعطينا {F_ar} في كل تقييم.',
        slots: {
          F: [
            { en: 'clear feedback', ar: 'ملاحظات واضحة' }, { en: 'honest praise', ar: 'ثناء صادق' },
            { en: 'useful advice', ar: 'نصائح مفيدة' }, { en: 'a fair evaluation', ar: 'تقييما عادلا' },
            { en: 'new goals', ar: 'أهدافا جديدة' }, { en: 'helpful notes', ar: 'ملاحظات مفيدة' },
          ],
        },
        tags: ['performance-review', 'present-simple'], d: 2, limit: 6,
      },
      {
        tmpl: 'We will discuss your {R} in the annual review.', arTmpl: 'سنناقش {R_ar} في التقييم السنوي.',
        slots: {
          R: [
            { en: 'salary', ar: 'راتبك' }, { en: 'performance', ar: 'أداءك' },
            { en: 'teamwork', ar: 'عملك الجماعي' }, { en: 'promotion', ar: 'ترقيتك' },
            { en: 'training', ar: 'تدريبك' }, { en: 'workload', ar: 'حجم عملك' },
          ],
        },
        tags: ['performance-review', 'future'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'You did well on the new project.', ar: 'أحسنت في المشروع الجديد.', word: 'well', hint: 'بشكل جيد' },
      { en: 'An area to improve is your writing.', ar: 'المجال الذي تحتاج تحسينه هو كتابتك.', word: 'improve', hint: 'يحسن' },
      { en: 'When is my annual review, please?', ar: 'متى تقييمي السنوي من فضلك؟', word: 'annual', hint: 'سنوي' },
      { en: 'Constructive feedback helps us grow.', ar: 'الملاحظات البناءة تساعدنا على النمو.', word: 'feedback', hint: 'ملاحظات' },
      { en: 'Did you meet your targets this month?', ar: 'هل حققت أهدافك هذا الشهر؟', word: 'targets', hint: 'أهداف' },
      { en: 'I hope to get a promotion this year.', ar: 'آمل أن أحصل على ترقية هذا العام.', word: 'promotion', hint: 'ترقية' },
      { en: 'Her evaluation was fair and useful.', ar: 'كان تقييمها عادلا ومفيدا.', word: 'fair', hint: 'عادل' },
      { en: 'We set clear goals for the next quarter.', ar: 'نضع أهدافا واضحة للربع القادم.', word: 'goals', hint: 'أهداف' },
    ],
    orders: [
      { en: 'Your annual review is on Sunday morning.', ar: 'تقييمك السنوي صباح يوم الأحد.' },
      { en: 'You have sold more than last year.', ar: 'لقد بعت أكثر من العام الماضي.' },
      { en: 'An area to improve is your writing.', ar: 'المجال الذي تحتاج تحسينه هو كتابتك.' },
      { en: 'Please send me your feedback in writing.', ar: 'من فضلك أرسل لي ملاحظاتك كتابيا.' },
      { en: 'They did not meet their targets this year.', ar: 'لم يحققوا أهدافهم هذا العام.' },
      { en: 'I hope to get a promotion this year.', ar: 'آمل أن أحصل على ترقية هذا العام.' },
    ],
    mc: [
      { question: 'What do we call the yearly meeting about your work?', options: ['an annual review', 'a day off', 'a sick note', 'a coffee break'], answerIndex: 0, ar: 'ماذا نسمي الاجتماع السنوي حول عملك؟' },
      { question: '"An area to improve" means:', options: ['شيء تحتاج إلى تحسينه', 'شيء تجيده جدا', 'وظيفة جديدة', 'عطلة طويلة'], answerIndex: 0, ar: 'ماذا تعني An area to improve؟' },
      { question: 'Your manager says "You did well on the report". This is:', options: ['positive feedback', 'a complaint', 'a bill', 'a schedule'], answerIndex: 0, ar: 'قال مديرك You did well on the report. هذا:' },
      { question: 'What is the best way to receive constructive feedback?', options: ['Listen and try to improve', 'Get angry quickly', 'Ignore it completely', 'Leave the meeting'], answerIndex: 0, ar: 'ما أفضل طريقة لتلقي الملاحظات البناءة؟' },
    ],
  },

  /* ================= lesson 183 — Workplace Complaints ================= */
  {
    num: 183,
    tags: ['complaints', 'work'],
    objectives: [
      'Report a problem at work clearly',
      'Complain about overtime and unfair schedules',
      'Ask HR for help politely',
    ],
    grammar: {
      explanation: 'To complain politely at work, start with "I want to report a problem" and describe the facts with the present simple: "The overtime is too much", "We do not get enough breaks". Give advice with should: "You should talk to HR about it". A polite complaint says what is wrong, gives one clear example, and asks for a solution: "Could we solve the problem with our manager?" Avoid angry words; calm sentences get faster answers.',
      explanationAr: 'للتذمر بأدب في العمل ابدأ بعبارة I want to report a problem ثم صف الحقائق بالمضارع البسيط: The overtime is too much، We do not get enough breaks. وقدّم النصيحة بـ should: You should talk to HR about it. والشكوى المهذبة تذكر الخطأ وتعطي مثالا واضحا وتطلب حلا: Could we solve the problem with our manager؟ تجنب الكلمات الغاضبة؛ فالجمل الهادئة تجيب أسرع.',
      examples: [
        { en: 'I want to report a problem with the schedule.', ar: 'أريد الإبلاغ عن مشكلة في الجدول.' },
        { en: 'The overtime is too much this month.', ar: 'العمل الإضافي كثير جدا هذا الشهر.' },
        { en: 'You should talk to HR about the unfair schedule.', ar: 'يجب أن تتحدث مع الموارد البشرية عن الجدول غير العادل.' },
      ],
    },
    vocabulary: [
      { word: 'complaint', meaningAr: 'شكوى', example: 'She wrote a complaint about the noise.', ipa: 'kəmˈpleɪnt' },
      { word: 'complain', meaningAr: 'يشتكي', example: 'Several workers complained about overtime.' },
      { word: 'report', meaningAr: 'يبلغ / يُبلّغ عن', example: 'I want to report a problem today.' },
      { word: 'overtime', meaningAr: 'عمل إضافي', example: 'The overtime is too much this week.' },
      { word: 'schedule', meaningAr: 'جدول', example: 'The new schedule does not suit me.' },
      { word: 'unfair', meaningAr: 'غير عادل', example: 'An unfair schedule hurts the team.' },
      { word: 'human resources', meaningAr: 'الموارد البشرية', example: 'Human Resources handles staff complaints.' },
      { word: 'shift', meaningAr: 'مناوبة / وردية', example: 'My night shift ends at two.' },
      { word: 'break', meaningAr: 'استراحة', example: 'We need a longer lunch break.' },
      { word: 'noise', meaningAr: 'ضوضاء', example: 'The noise makes work difficult.' },
      { word: 'resolve', meaningAr: 'يحل (مشكلة)', example: 'HR resolved the problem quickly.' },
      { word: 'staff', meaningAr: 'الموظفون / الطاقم', example: 'The staff meeting is on Monday.' },
    ],
    scenario: [
      { en: 'I want to report a problem in the office.', ar: 'أريد الإبلاغ عن مشكلة في المكتب.', d: 1 },
      { en: 'Can you describe the problem, please?', ar: 'هل يمكنك وصف المشكلة من فضلك؟', d: 1 },
      { en: 'The overtime is too much this month.', ar: 'العمل الإضافي كثير جدا هذا الشهر.', d: 1 },
      { en: 'We work ten extra hours every week.', ar: 'نعمل عشر ساعات إضافية كل أسبوع.', d: 2 },
      { en: 'That is an unfair schedule for the team.', ar: 'هذا جدول غير عادل للفريق.', d: 2 },
      { en: 'You should talk to HR about it.', ar: 'يجب أن تتحدث مع الموارد البشرية حيال ذلك.', d: 2 },
      { en: 'Does HR handle complaints like this?', ar: 'هل تتولى الموارد البشرية مثل هذه الشكاوى؟', d: 2 },
      { en: 'Yes, they solve staff problems every day.', ar: 'نعم، يحلون مشاكل الموظفين كل يوم.', d: 1 },
      { en: 'The new schedule does not suit my family.', ar: 'الجدول الجديد لا يناسب عائلتي.', d: 2 },
      { en: 'My colleague has the same complaint.', ar: 'زميلي لديه نفس الشكوى.', d: 2 },
      { en: 'Several workers complained about the noise.', ar: 'شكا عمال عدة من الضوضاء.', d: 2 },
      { en: 'Please write your complaint in an email.', ar: 'من فضلك اكتب شكواك في رسالة إلكترونية.', d: 2 },
      { en: 'I sent my complaint last Friday.', ar: 'أرسلت شكواي الجمعة الماضية.', d: 2 },
      { en: 'Did you receive an answer from HR?', ar: 'هل تلقيت ردا من الموارد البشرية؟', d: 2 },
      { en: 'Not yet, but they promised a meeting.', ar: 'ليس بعد، لكنهم وعدوا باجتماع.', d: 2 },
      { en: 'A fair break makes the day easier.', ar: 'استراحة عادلة تجعل اليوم أسهل.', d: 3 },
      { en: 'If the problem continues, I will report it again.', ar: 'إذا استمرت المشكلة، سأبلغ عنها مرة أخرى.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I want to report a problem with {N}.', arTmpl: 'أريد الإبلاغ عن مشكلة مع {N_ar}.',
        slots: {
          N: [
            { en: 'my manager', ar: 'مديري' }, { en: 'the new schedule', ar: 'الجدول الجديد' },
            { en: 'the overtime system', ar: 'نظام العمل الإضافي' }, { en: 'the parking area', ar: 'منطقة الوقوف' },
            { en: 'the office heating', ar: 'تدفئة المكتب' }, { en: 'my monthly salary', ar: 'راتبي الشهري' },
            { en: 'the night shifts', ar: 'المناوبات الليلية' }, { en: 'the training plan', ar: 'خطة التدريب' },
            { en: 'the broken printer', ar: 'الطابعة المعطلة' },
          ],
        },
        tags: ['complaints', 'work'], d: 1, limit: 9,
      },
      {
        tmpl: 'The overtime is too much this {T}.', arTmpl: 'العمل الإضافي كثير جدا هذا {T_ar}.',
        slots: {
          T: [
            { en: 'week', ar: 'الأسبوع' }, { en: 'month', ar: 'الشهر' },
            { en: 'season', ar: 'الموسم' }, { en: 'year', ar: 'العام' },
          ],
        },
        tags: ['complaints', 'work'], d: 1, limit: 4,
      },
      {
        tmpl: 'We do not get enough {R} at work.', arTmpl: 'لا نحصل على ما يكفي من {R_ar} في العمل.',
        slots: {
          R: [
            { en: 'breaks', ar: 'استراحات' }, { en: 'support', ar: 'دعم' },
            { en: 'training', ar: 'تدريب' }, { en: 'respect', ar: 'احترام' },
            { en: 'help', ar: 'مساعدة' }, { en: 'information', ar: 'معلومات' },
          ],
        },
        tags: ['complaints', 'negatives'], d: 2, limit: 6,
      },
      {
        tmpl: '{S} {V} to HR about the unfair schedule.', arTmpl: '{S_ar} {V_ar} مع الموارد البشرية عن الجدول غير العادل.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'He', ar: 'هو', agr: 'he' },
            { en: 'She', ar: 'هي', agr: 'she' }, { en: 'We', ar: 'نحن', agr: 'we' },
            { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{ en: B.enPresent('talk', x.S.agr), ar: B.arPresent('talk', x.S.agr) }],
        },
        tags: ['complaints', 'present-simple'], d: 2, limit: 5,
      },
      {
        tmpl: 'Can we {Vb} the problem with our manager?', arTmpl: 'هل يمكننا {Vb_ar} المشكلة مع مديرنا؟',
        slots: {
          Vb: [
            { en: 'discuss', ar: 'أن نناقش' }, { en: 'review', ar: 'أن نراجع' },
            { en: 'solve', ar: 'أن نحل' }, { en: 'study', ar: 'أن ندرس' },
          ],
        },
        tags: ['complaints', 'questions'], d: 2, limit: 4,
      },
      {
        tmpl: 'The manager promised to fix the {P} soon.', arTmpl: 'وعد المدير بأن يصلح {P_ar} قريبا.',
        slots: {
          P: [
            { en: 'air conditioning', ar: 'التكييف' }, { en: 'broken printer', ar: 'الطابعة المعطلة' },
            { en: 'old software', ar: 'البرنامج القديم' }, { en: 'parking problem', ar: 'مشكلة الوقوف' },
            { en: 'evening schedule', ar: 'جدول المساء' }, { en: 'noisy room', ar: 'الغرفة الصاخبة' },
          ],
        },
        tags: ['complaints', 'past-simple'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'I want to report a problem in the office.', ar: 'أريد الإبلاغ عن مشكلة في المكتب.', word: 'report', hint: 'يبلغ عن' },
      { en: 'The overtime is too much this month.', ar: 'العمل الإضافي كثير جدا هذا الشهر.', word: 'overtime', hint: 'عمل إضافي' },
      { en: 'You should talk to HR about it.', ar: 'يجب أن تتحدث مع الموارد البشرية حيال ذلك.', word: 'HR', hint: 'الموارد البشرية' },
      { en: 'That is an unfair schedule for the team.', ar: 'هذا جدول غير عادل للفريق.', word: 'unfair', hint: 'غير عادل' },
      { en: 'Several workers complained about the noise.', ar: 'شكا عمال عدة من الضوضاء.', word: 'complained', hint: 'اشتكوا' },
      { en: 'Please write your complaint in an email.', ar: 'من فضلك اكتب شكواك في رسالة إلكترونية.', word: 'complaint', hint: 'شكوى' },
      { en: 'We work ten extra hours every week.', ar: 'نعمل عشر ساعات إضافية كل أسبوع.', word: 'extra', hint: 'إضافية' },
      { en: 'If the problem continues, I will report it again.', ar: 'إذا استمرت المشكلة، سأبلغ عنها مرة أخرى.', word: 'continues', hint: 'يستمر' },
    ],
    orders: [
      { en: 'You should talk to HR about it.', ar: 'يجب أن تتحدث مع الموارد البشرية حيال ذلك.' },
      { en: 'The new schedule does not suit my family.', ar: 'الجدول الجديد لا يناسب عائلتي.' },
      { en: 'Several workers complained about the noise.', ar: 'شكا عمال عدة من الضوضاء.' },
      { en: 'Please write your complaint in an email.', ar: 'من فضلك اكتب شكواك في رسالة إلكترونية.' },
      { en: 'If the problem continues, I will report it again.', ar: 'إذا استمرت المشكلة، سأبلغ عنها مرة أخرى.' },
      { en: 'A fair break makes the day easier.', ar: 'استراحة عادلة تجعل اليوم أسهل.' },
    ],
    mc: [
      { question: 'Who usually handles workplace complaints?', options: ['Human Resources (HR)', 'The customers', 'The delivery driver', 'A new visitor'], answerIndex: 0, ar: 'من يتولى الشكاوى في العمل عادة؟' },
      { question: '"Overtime" means:', options: ['ساعات عمل إضافية', 'أيام إجازة', 'راتب شهري', 'استراحة قصيرة'], answerIndex: 0, ar: 'ماذا يعني overtime؟' },
      { question: 'The schedule is unfair. What can you do?', options: ['Report the problem to HR', 'Hide the schedule', 'Work more hours silently', 'Ignore your family'], answerIndex: 0, ar: 'الجدول غير عادل، ماذا يمكنك أن تفعل؟' },
      { question: 'Which sentence is a complaint?', options: ['The overtime is too much this month.', 'The meeting starts at nine.', 'My desk is near the window.', 'The report is on your desk.'], answerIndex: 0, ar: 'أي جملة تعتبر شكوى؟' },
    ],
  },

  /* ================= lesson 184 — Asking for a Raise ================= */
  {
    num: 184,
    tags: ['salary', 'work'],
    objectives: [
      'Request a meeting about your salary politely',
      'Describe your added responsibility and results',
      'Ask for a raise based on your performance',
    ],
    grammar: {
      explanation: 'Start a salary conversation politely with "I would like to discuss my salary" or "Could I talk to you about my salary, please?". Support your request with the present perfect for achievements: "I have taken on more responsibility", "I have never missed a deadline". Name your reason: "My raise should be based on my performance". If the answer is no, stay calm and ask "When can we review it again?"',
      explanationAr: 'ابدأ الحديث عن الراتب بأدب بعبارة I would like to discuss my salary أو Could I talk to you about my salary, please؟ ادعم طلبك بالمضارع التام للإنجازات: I have taken on more responsibility، I have never missed a deadline. واذكر سببك: My raise should be based on my performance. وإذا كان الجواب لا فابق هادئا واسأل: When can we review it again؟',
      examples: [
        { en: 'I would like to discuss my salary with you.', ar: 'أود أن أناقش راتبي معك.' },
        { en: 'I have taken on more responsibility this year.', ar: 'لقد تحملت مسؤولية أكبر هذا العام.' },
        { en: 'My raise should be based on my performance.', ar: 'يجب أن تكون زيادتي على أساس أدائي.' },
      ],
    },
    vocabulary: [
      { word: 'raise', meaningAr: 'زيادة في الراتب', example: 'She asked her manager for a raise.', ipa: 'reɪz' },
      { word: 'salary', meaningAr: 'راتب', example: 'My salary arrives on the first.' },
      { word: 'discuss', meaningAr: 'يناقش', example: 'Can we discuss my salary today?' },
      { word: 'responsibility', meaningAr: 'مسؤولية', example: 'This project is a big responsibility.' },
      { word: 'deserve', meaningAr: 'يستحق', example: 'You deserve a bonus this year.' },
      { word: 'increase', meaningAr: 'زيادة / يزيد', example: 'We hope for a salary increase soon.' },
      { word: 'bonus', meaningAr: 'مكافأة', example: 'The company gave us a year-end bonus.' },
      { word: 'hard-working', meaningAr: 'مجتهد', example: 'Our team is honest and hard-working.' },
      { word: 'achievement', meaningAr: 'إنجاز', example: 'Finishing the project was a real achievement.' },
      { word: 'position', meaningAr: 'منصب / وظيفة', example: 'She wants a better position in the company.' },
      { word: 'benefits', meaningAr: 'مزايا وظيفية', example: 'The job has good benefits.' },
      { word: 'percent', meaningAr: 'بالمئة', example: 'I asked for a ten percent raise.' },
    ],
    scenario: [
      { en: 'Could I talk to you about my salary, please?', ar: 'هل يمكنني التحدث معك عن راتبي من فضلك؟', d: 1 },
      { en: 'Of course, come to my office at two.', ar: 'بالطبع، تعال إلى مكتبي في الثانية.', d: 1 },
      { en: "I'd like to discuss my salary with you.", ar: 'أود أن أناقش راتبي معك.', d: 1 },
      { en: 'I have taken on more responsibility this year.', ar: 'لقد تحملت مسؤولية أكبر هذا العام.', d: 1 },
      { en: 'I now manage three new clients.', ar: 'أدير الآن ثلاثة عملاء جدد.', d: 2 },
      { en: 'My colleagues agree that I work hard.', ar: 'يوافق زملائي على أني أعمل بجد.', d: 2 },
      { en: 'I believe my raise should be based on my performance.', ar: 'أعتقد أن زيادتي يجب أن تكون على أساس أدائي.', d: 2 },
      { en: 'You have worked here for five years, right?', ar: 'لقد عملت هنا خمس سنوات، صحيح؟', d: 2 },
      { en: 'Yes, and I have never missed a deadline.', ar: 'نعم، ولم أفوت موعدا نهائيا أبدا.', d: 2 },
      { en: 'Your performance report is excellent.', ar: 'تقرير أدائك ممتاز.', d: 2 },
      { en: 'What increase do you have in mind?', ar: 'ما الزيادة التي في بالك؟', d: 2 },
      { en: 'I am thinking about a ten percent raise.', ar: 'أفكر في زيادة عشرة بالمئة.', d: 2 },
      { en: 'That is not possible this month.', ar: 'هذا غير ممكن هذا الشهر.', d: 2 },
      { en: 'We can review it again in the spring.', ar: 'يمكننا مراجعته مرة أخرى في الربيع.', d: 2 },
      { en: 'Please send me the numbers in writing.', ar: 'من فضلك أرسل لي الأرقام كتابيا.', d: 2 },
      { en: 'He deserves a bonus for his hard work.', ar: 'يستحق مكافأة على عمله الجاد.', d: 3 },
      { en: 'If my salary does not change, I will look for another job.', ar: 'إذا لم يتغير راتبي، سأبحث عن وظيفة أخرى.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I would like to discuss my {N} with you.', arTmpl: 'أود أن أناقش {N_ar} معك.',
        slots: {
          N: [
            { en: 'salary', ar: 'راتبي' }, { en: 'workload', ar: 'حجم عملي' },
            { en: 'contract', ar: 'عقدي' }, { en: 'working hours', ar: 'ساعات عملي' },
            { en: 'responsibilities', ar: 'مسؤولياتي' }, { en: 'career plan', ar: 'خطتي المهنية' },
            { en: 'current position', ar: 'منصبي الحالي' }, { en: 'benefits', ar: 'مزاياي' },
          ],
        },
        tags: ['salary', 'polite-requests'], d: 1, limit: 8,
      },
      {
        tmpl: 'I have taken on more {R} this year.', arTmpl: 'لقد تحملت {R_ar} أكبر هذا العام.',
        slots: {
          R: [
            { en: 'responsibility', ar: 'مسؤولية' }, { en: 'work', ar: 'عملا' },
            { en: 'projects', ar: 'مشروعات' }, { en: 'duties', ar: 'مهاما' },
            { en: 'client accounts', ar: 'حسابات عملاء' }, { en: 'training courses', ar: 'دورات تدريب' },
          ],
        },
        tags: ['salary', 'present-perfect'], d: 2, limit: 6,
      },
      {
        tmpl: 'My raise should be based on my {P}.', arTmpl: 'يجب أن تكون زيادتي على أساس {P_ar}.',
        slots: {
          P: [
            { en: 'performance', ar: 'أدائي' }, { en: 'results', ar: 'نتائجي' },
            { en: 'experience', ar: 'خبرتي' }, { en: 'achievements', ar: 'إنجازاتي' },
            { en: 'skills', ar: 'مهاراتي' },
          ],
        },
        tags: ['salary', 'modals'], d: 2, limit: 5,
      },
      {
        tmpl: 'I have worked here for {D}.', arTmpl: 'أعمل هنا منذ {D_ar}.',
        slots: {
          D: [
            { en: 'two years', ar: 'عامين' }, { en: 'three years', ar: 'ثلاث سنوات' },
            { en: 'four years', ar: 'أربع سنوات' }, { en: 'five years', ar: 'خمس سنوات' },
            { en: 'six years', ar: 'ست سنوات' },
          ],
        },
        tags: ['salary', 'present-perfect'], d: 1, limit: 5,
      },
      {
        tmpl: 'Could I get a {A}, please?', arTmpl: 'هل يمكنني الحصول على {A_ar} من فضلك؟',
        slots: {
          A: [
            { en: 'raise', ar: 'زيادة' }, { en: 'review', ar: 'تقييم' },
            { en: 'written answer', ar: 'جواب مكتوب' }, { en: 'meeting about my salary', ar: 'اجتماع عن راتبي' },
            { en: 'second interview', ar: 'مقابلة ثانية' },
          ],
        },
        tags: ['salary', 'polite-requests'], d: 2, limit: 5,
      },
      {
        tmpl: '{S} {V} more responsibility every month.', arTmpl: '{S_ar} {V_ar} مسؤولية أكبر كل شهر.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'He', ar: 'هو', agr: 'he' },
            { en: 'She', ar: 'هي', agr: 'she' }, { en: 'We', ar: 'نحن', agr: 'we' },
            { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{ en: B.enPresent('take', x.S.agr), ar: B.arPresent('take', x.S.agr) }],
        },
        tags: ['salary', 'present-simple'], d: 2, limit: 5,
      },
    ],
    fills: [
      { en: "I'd like to discuss my salary with you.", ar: 'أود أن أناقش راتبي معك.', word: 'discuss', hint: 'يناقش' },
      { en: 'I have taken on more responsibility this year.', ar: 'لقد تحملت مسؤولية أكبر هذا العام.', word: 'responsibility', hint: 'مسؤولية' },
      { en: 'I believe my raise should be based on my performance.', ar: 'أعتقد أن زيادتي يجب أن تكون على أساس أدائي.', word: 'performance', hint: 'أداء' },
      { en: 'I am thinking about a ten percent raise.', ar: 'أفكر في زيادة عشرة بالمئة.', word: 'percent', hint: 'بالمئة' },
      { en: 'Could I talk to you about my salary, please?', ar: 'هل يمكنني التحدث معك عن راتبي من فضلك؟', word: 'salary', hint: 'راتب' },
      { en: 'He deserves a bonus for his hard work.', ar: 'يستحق مكافأة على عمله الجاد.', word: 'deserves', hint: 'يستحق' },
      { en: 'We can review it again in the spring.', ar: 'يمكننا مراجعته مرة أخرى في الربيع.', word: 'review', hint: 'نراجع' },
      { en: 'If my salary does not change, I will look for another job.', ar: 'إذا لم يتغير راتبي، سأبحث عن وظيفة أخرى.', word: 'another', hint: 'أخرى' },
    ],
    orders: [
      { en: 'I have taken on more responsibility this year.', ar: 'لقد تحملت مسؤولية أكبر هذا العام.' },
      { en: 'My raise should be based on my performance.', ar: 'يجب أن تكون زيادتي على أساس أدائي.' },
      { en: 'Could I talk to you about my salary, please?', ar: 'هل يمكنني التحدث معك عن راتبي من فضلك؟' },
      { en: 'I am thinking about a ten percent raise.', ar: 'أفكر في زيادة عشرة بالمئة.' },
      { en: 'He deserves a bonus for his hard work.', ar: 'يستحق مكافأة على عمله الجاد.' },
      { en: 'Please send me the numbers in writing.', ar: 'من فضلك أرسل لي الأرقام كتابيا.' },
    ],
    mc: [
      { question: 'You want more money for your work. You ask for:', options: ['a raise', 'a day off', 'a new desk', 'a holiday'], answerIndex: 0, ar: 'تريد مالا أكثر لعملك، تطلب:' },
      { question: '"I have taken on more responsibility" means:', options: ['تحملت مسؤولية أكبر', 'فقدت وظيفتي', 'غيرت شركتي', 'قللت ساعاتي'], answerIndex: 0, ar: 'ماذا تعني I have taken on more responsibility؟' },
      { question: 'What supports a good raise request?', options: ['Your results and hard work', 'Your manager\'s mood', 'The weather', 'Your lunch time'], answerIndex: 0, ar: 'ما الذي يدعم طلب زيادة جيد؟' },
      { question: 'A polite way to start the talk is:', options: ['Could I discuss my salary, please?', 'Give me more money now.', 'My salary is an insult.', 'Pay me today or I leave.'], answerIndex: 0, ar: 'ما البداية المهذبة للحديث؟' },
      { question: 'If the answer is no, you can:', options: ['Ask when to review it again', 'Shout at your manager', 'Stop working', 'Delete your emails'], answerIndex: 0, ar: 'إذا كان الجواب لا، يمكنك:' },
    ],
  },

  /* ================= lesson 185 — Professional Negotiation ================= */
  {
    num: 185,
    tags: ['negotiation', 'business'],
    objectives: [
      'Make and respond to offers in a business talk',
      'Suggest a middle ground on deadlines and budgets',
      'Ask for time to think about an offer',
    ],
    grammar: {
      explanation: 'In professional negotiation we make offers with "We can offer..." or "We will...", and ask for ideas with "What would you suggest about...?". To propose agreement say "Let us find a middle ground" — let us (let\'s) is followed by the base verb. Ask politely for conditions with "Could we pay in two steps?". If you need time, say "I need to think about it first" — this is a normal, respected sentence in business.',
      explanationAr: 'في التفاوض المهني نقدم العروض بـ We can offer... أو We will...، ونطلب الأفكار بـ What would you suggest about...؟ ولكي تقترح اتفاقا قل Let us find a middle ground، ويلي let us فعل مجرد. واطلب الشروط بأدب بـ Could we pay in two steps؟ وإذا احتجت وقتا قل I need to think about it first، وهي جملة محترمة وطبيعية في عالم الأعمال.',
      examples: [
        { en: 'We can offer a longer deadline instead.', ar: 'يمكننا تقديم موعد نهائي أطول بدلا من ذلك.' },
        { en: 'Let us find a middle ground on the budget.', ar: 'لنجد حلا وسطا بشأن الميزانية.' },
        { en: 'I need to think about your offer first.', ar: 'أحتاج أن أفكر في عرضك أولا.' },
      ],
    },
    vocabulary: [
      { word: 'negotiate', meaningAr: 'يتفاوض', example: 'The two teams negotiated for two hours.', ipa: 'nɪˈɡəʊʃieɪt' },
      { word: 'offer', meaningAr: 'عرض / يعرض', example: 'They made a good offer yesterday.' },
      { word: 'suggest', meaningAr: 'يقترح', example: 'What would you suggest about the budget?' },
      { word: 'middle ground', meaningAr: 'حل وسط', example: 'Both sides found a middle ground.' },
      { word: 'agreement', meaningAr: 'اتفاق', example: 'We signed the agreement this morning.' },
      { word: 'terms', meaningAr: 'شروط', example: 'The terms of the contract are clear.' },
      { word: 'deal', meaningAr: 'صفقة', example: 'The deal helps both companies.' },
      { word: 'proposal', meaningAr: 'مقترح', example: 'I will read your proposal tonight.' },
      { word: 'supplier', meaningAr: 'مورّد', example: 'Our supplier lowered the price.' },
      { word: 'sign', meaningAr: 'يوقع', example: 'Do not sign before you read it.' },
      { word: 'amount', meaningAr: 'مبلغ', example: 'The amount is too high for us.' },
      { word: 'compromise', meaningAr: 'حل وسط / يتحاور', example: 'A good deal needs compromise from both sides.' },
    ],
    scenario: [
      { en: 'We would like to agree on a fair plan.', ar: 'نود أن نتفق على خطة عادلة.', d: 1 },
      { en: 'What would you suggest about the deadline?', ar: 'ماذا تقترح بشأن الموعد النهائي؟', d: 1 },
      { en: 'Our team needs three more weeks.', ar: 'يحتاج فريقنا ثلاثة أسابيع إضافية.', d: 1 },
      { en: 'We can offer a longer deadline and lower cost.', ar: 'يمكننا تقديم موعد نهائي أطول وتكلفة أقل.', d: 2 },
      { en: 'That sounds like a middle ground.', ar: 'يبدو ذلك حل وسط مقبولا.', d: 2 },
      { en: 'Let us find a middle ground on the budget.', ar: 'لنجد حلا وسطا بشأن الميزانية.', d: 2 },
      { en: 'I hear your point about the small budget.', ar: 'أسمع نقطة بك حول الميزانية الصغيرة.', d: 2 },
      { en: 'Our client cannot pay the full amount now.', ar: 'لا يستطيع عميلنا دفع كامل المبلغ الآن.', d: 2 },
      { en: 'Could we pay in two steps, please?', ar: 'هل يمكننا الدفع على مرحلتين من فضلك؟', d: 1 },
      { en: 'Yes, that works for our company.', ar: 'نعم، هذا يناسب شركتنا.', d: 1 },
      { en: 'I need to think about your offer.', ar: 'أحتاج أن أفكر في عرضك.', d: 2 },
      { en: 'When do you need our final answer?', ar: 'متى تحتاج جوابنا النهائي؟', d: 2 },
      { en: 'Take your time; the offer stays open until Friday.', ar: 'خذ وقتك؛ يبقى العرض مفتوحا حتى الجمعة.', d: 2 },
      { en: 'They signed the contract this morning.', ar: 'وقعوا العقد هذا الصباح.', d: 2 },
      { en: 'We did not accept the first terms.', ar: 'لم نقبل الشروط الأولى.', d: 2 },
      { en: 'Both sides should win something from a deal.', ar: 'ينبغي أن يكسب الطرفان شيئا من الصفقة.', d: 3 },
      { en: 'If you lower the price, we will order more units.', ar: 'إذا خفضت السعر، سنطلب وحدات أكثر.', d: 3 },
      { en: 'She suggested a video call with the supplier.', ar: 'اقترحت مكالمة فيديو مع المورد.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'We can offer {O} instead.', arTmpl: 'يمكننا تقديم {O_ar} بدلا من ذلك.',
        slots: {
          O: [
            { en: 'a longer deadline', ar: 'موعدا نهائيا أطول' }, { en: 'free training for your team', ar: 'تدريبا مجانيا لفريقك' },
            { en: 'a smaller first order', ar: 'طلبيا أول أصغر' }, { en: 'payment in two steps', ar: 'دفعا على مرحلتين' },
            { en: 'a written contract', ar: 'عقدا مكتوبا' }, { en: 'technical support for one year', ar: 'دعما فنيا لسنة واحدة' },
          ],
        },
        tags: ['negotiation', 'offers'], d: 2, limit: 6,
      },
      {
        tmpl: 'What would you suggest about the {N}?', arTmpl: 'ماذا تقترح بشأن {N_ar}؟',
        slots: {
          N: [
            { en: 'deadline', ar: 'الموعد النهائي' }, { en: 'budget', ar: 'الميزانية' },
            { en: 'delivery date', ar: 'موعد التسليم' }, { en: 'payment terms', ar: 'شروط الدفع' },
            { en: 'contract length', ar: 'مدة العقد' }, { en: 'project timeline', ar: 'الجدول الزمني للمشروع' },
          ],
        },
        tags: ['negotiation', 'questions'], d: 1, limit: 6,
      },
      {
        tmpl: 'I need to think about {T} first.', arTmpl: 'أحتاج أن أفكر في {T_ar} أولا.',
        slots: {
          T: [
            { en: 'your offer', ar: 'عرضك' }, { en: 'the terms', ar: 'الشروط' },
            { en: 'this plan', ar: 'هذه الخطة' }, { en: 'the new numbers', ar: 'الأرقام الجديدة' },
            { en: 'your proposal', ar: 'مقترحك' },
          ],
        },
        tags: ['negotiation', 'business'], d: 1, limit: 5,
      },
      {
        tmpl: 'Let us find a middle ground on the {F}.', arTmpl: 'لنجد حلا وسطا بشأن {F_ar}.',
        slots: {
          F: [
            { en: 'deadline', ar: 'الموعد النهائي' }, { en: 'budget', ar: 'الميزانية' },
            { en: 'delivery date', ar: 'موعد التسليم' }, { en: 'working hours', ar: 'ساعات العمل' },
            { en: 'final cost', ar: 'التكلفة النهائية' },
          ],
        },
        tags: ['negotiation', 'business'], d: 2, limit: 5,
      },
      {
        tmpl: '{S} will {W} the offer tomorrow.', arTmpl: '{S_ar} س{W_ar} العرض غدا.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'He', ar: 'هو', agr: 'he' },
            { en: 'She', ar: 'هي', agr: 'she' }, { en: 'We', ar: 'نحن', agr: 'we' },
            { en: 'They', ar: 'هم', agr: 'they' },
          ],
          W: (x) => [
            { en: 'check', ar: B.arPresent('check', x.S.agr) },
            { en: 'read', ar: B.arPresent('read', x.S.agr) },
            { en: 'study', ar: B.arPresent('study', x.S.agr) },
            { en: 'send', ar: B.arPresent('send', x.S.agr) },
          ],
        },
        tags: ['negotiation', 'future'], d: 2, limit: 20,
      },
    ],
    fills: [
      { en: 'What would you suggest about the deadline?', ar: 'ماذا تقترح بشأن الموعد النهائي؟', word: 'suggest', hint: 'يقترح' },
      { en: 'Let us find a middle ground on the budget.', ar: 'لنجد حلا وسطا بشأن الميزانية.', word: 'middle', hint: 'وسط' },
      { en: 'I need to think about your offer.', ar: 'أحتاج أن أفكر في عرضك.', word: 'offer', hint: 'عرض' },
      { en: 'Could we pay in two steps, please?', ar: 'هل يمكننا الدفع على مرحلتين من فضلك؟', word: 'steps', hint: 'مراحل' },
      { en: 'They signed the contract this morning.', ar: 'وقعوا العقد هذا الصباح.', word: 'signed', hint: 'وقعوا' },
      { en: 'We did not accept the first terms.', ar: 'لم نقبل الشروط الأولى.', word: 'accept', hint: 'نقبل' },
      { en: 'Both sides should win something from a deal.', ar: 'ينبغي أن يكسب الطرفان شيئا من الصفقة.', word: 'deal', hint: 'صفقة' },
      { en: 'If you lower the price, we will order more units.', ar: 'إذا خفضت السعر، سنطلب وحدات أكثر.', word: 'lower', hint: 'يخفض' },
    ],
    orders: [
      { en: 'What would you suggest about the deadline?', ar: 'ماذا تقترح بشأن الموعد النهائي؟' },
      { en: 'Let us find a middle ground on the budget.', ar: 'لنجد حلا وسطا بشأن الميزانية.' },
      { en: 'I need to think about your offer.', ar: 'أحتاج أن أفكر في عرضك.' },
      { en: 'They signed the contract this morning.', ar: 'وقعوا العقد هذا الصباح.' },
      { en: 'We did not accept the first terms.', ar: 'لم نقبل الشروط الأولى.' },
      { en: 'If you lower the price, we will order more units.', ar: 'إذا خفضت السعر، سنطلب وحدات أكثر.' },
    ],
    mc: [
      { question: '"Let us find a middle ground" means:', options: ['لنجد حلا يرضي الطرفين', 'لنلغي الاتفاق', 'لنبدأ من جديد', 'لنتوقف عن الكلام'], answerIndex: 0, ar: 'ماذا تعني Let us find a middle ground؟' },
      { question: 'The other side makes an offer. A good reply is:', options: ['I need to think about it.', 'That is a stupid idea.', 'Leave my office now.', 'I never sign anything.'], answerIndex: 0, ar: 'قدم الطرف الآخر عرضا، ما الرد الجيد؟' },
      { question: 'A fair negotiation usually ends with:', options: ['an agreement for both sides', 'one angry winner', 'no more meetings', 'a bigger problem'], answerIndex: 0, ar: 'ينتهي التفاوض العادل عادة بـ:' },
      { question: 'Which phrase makes an offer?', options: ['We can offer free delivery.', 'What time is it?', 'Where is my pen?', 'I like your office.'], answerIndex: 0, ar: 'أي عبارة تقدم عرضا؟' },
      { question: 'The deadline is too short. You say:', options: ['Could we extend the deadline, please?', 'Fire the client today.', 'Send it late without asking.', 'Never mention the deadline.'], answerIndex: 0, ar: 'الموعد النهائي قصير جدا، ماذا تقول؟' },
    ],
  },
];
