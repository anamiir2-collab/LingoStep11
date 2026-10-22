/* ============================================================
   v2 section data — s08-a1.js
   Work & Money (start of Section 8) · lessons 171–174
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 171 — Work and Job Vocabulary ================= */
  {
    num: 171,
    tags: ['work', 'jobs'],
    objectives: [
      'Name common workplace words',
      'Describe your job and duties',
      'Talk about salary, shifts and contracts',
    ],
    grammar: {
      explanation: 'Work words come in pairs: the employee works and the employer pays. Use the present simple for routines: "I work the night shift this week", "We have a meeting every Monday". The present perfect links the past to now: "He has worked in the sales department since May". For future results, use the first conditional: "If you work hard, you will get a promotion".',
      explanationAr: 'كلمات العمل تأتي في أزواج: الموظف employee يعمل وصاحب العمل employer يدفع. استخدم المضارع البسيط للروتين: I work the night shift this week، وWe have a meeting every Monday. ويربط المضارع التام الماضي بالحاضر: He has worked in the sales department since May. وللنتيجة المستقبلية استخدم الشرط الأول: If you work hard, you will get a promotion.',
      examples: [
        { en: 'Her employer gives her a good salary.', ar: 'صاحب العمل يمنحها راتبا جيدا.' },
        { en: 'He has worked in the sales department since May.', ar: 'عمل في قسم المبيعات منذ مايو.' },
        { en: 'If you work hard, you will get a promotion.', ar: 'إذا عملت بجد، ستحصل على ترقية.' },
      ],
    },
    vocabulary: [
      { word: 'employee', meaningAr: 'موظف', example: 'The employee arrived early.', ipa: 'ɪmˈplɔɪiː' },
      { word: 'employer', meaningAr: 'صاحب العمل', example: 'Her employer is a kind man.' },
      { word: 'salary', meaningAr: 'راتب', example: 'The salary comes at the end of the month.' },
      { word: 'shift', meaningAr: 'وردية / دوام', example: 'I work the night shift.' },
      { word: 'colleague', meaningAr: 'زميل عمل', example: 'My colleague speaks three languages.' },
      { word: 'department', meaningAr: 'قسم', example: 'She leads the sales department.' },
      { word: 'contract', meaningAr: 'عقد', example: 'Read the contract before you sign.' },
      { word: 'promotion', meaningAr: 'ترقية', example: 'He got a promotion in June.' },
      { word: 'manager', meaningAr: 'مدير', example: 'The manager signed the papers.' },
      { word: 'meeting', meaningAr: 'اجتماع', example: 'The meeting starts at nine.' },
      { word: 'office', meaningAr: 'مكتب', example: 'My office is on the third floor.' },
      { word: 'duty', meaningAr: 'مهمة / واجب', example: 'Answering calls is part of my duty.' },
    ],
    scenario: [
      { en: 'My sister is an employee at a big company.', ar: 'أختي موظفة في شركة كبيرة.', d: 1 },
      { en: 'Her employer gives her a good salary.', ar: 'صاحب العمل يمنحها راتبا جيدا.', d: 1 },
      { en: 'I work the night shift this week.', ar: 'أعمل الوردية الليلية هذا الأسبوع.', d: 1 },
      { en: 'Do you like your new colleagues?', ar: 'هل تحب زملاءك الجدد؟', d: 1 },
      { en: 'Yes, they are friendly and helpful.', ar: 'نعم، هم ودودون ومتعاونون.', d: 2 },
      { en: 'He has worked in the sales department since May.', ar: 'عمل في قسم المبيعات منذ مايو.', d: 2 },
      { en: 'Our manager signs the contracts on Sunday.', ar: 'مديرنا يوقع العقود يوم الأحد.', d: 2 },
      { en: 'She has not received a promotion yet.', ar: 'لم تحصل على ترقية بعد.', d: 2 },
      { en: 'What time does your shift start?', ar: 'متى تبدأ وردية عملك؟', d: 1 },
      { en: 'It starts at eight in the morning.', ar: 'تبدأ في الثامنة صباحا.', d: 2 },
      { en: 'We have a meeting every Monday.', ar: 'لدينا اجتماع كل اثنين.', d: 1 },
      { en: 'Please send the report to the manager.', ar: 'من فضلك أرسل التقرير إلى المدير.', d: 2 },
      { en: 'Are you looking for a job with a better salary?', ar: 'هل تبحث عن وظيفة براتب أفضل؟', d: 2 },
      { en: 'My colleague does not like late meetings.', ar: 'زميلي لا يحب الاجتماعات المتأخرة.', d: 2 },
      { en: 'If you work hard, you will get a promotion.', ar: 'إذا عملت بجد، ستحصل على ترقية.', d: 3 },
      { en: 'The office is closed on Friday.', ar: 'المكتب مغلق يوم الجمعة.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'I work in the {D} department.', arTmpl: 'أعمل في قسم {D_ar}.',
        slots: {
          D: [
            { en: 'sales', ar: 'المبيعات' }, { en: 'marketing', ar: 'التسويق' },
            { en: 'accounting', ar: 'الحسابات' }, { en: 'customer service', ar: 'خدمة العملاء' },
            { en: 'human resources', ar: 'الموارد البشرية' }, { en: 'IT', ar: 'تقنية المعلومات' },
            { en: 'finance', ar: 'المالية' }, { en: 'logistics', ar: 'الخدمات اللوجستية' },
          ],
        },
        tags: ['work', 'present-simple'], d: 1, limit: 8,
      },
      {
        tmpl: '{S} {V} in a bank.', arTmpl: '{S_ar} {V_ar} في مصرف.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('work', x.S.agr), ar: B.arPresent('work', x.S.agr) }],
        },
        tags: ['work', 'present-simple'], d: 1, limit: 6,
      },
      {
        tmpl: 'The {J} earns a good salary.', arTmpl: '{J_ar} يتقاضى راتبا جيدا.',
        slots: {
          J: [
            { en: 'engineer', ar: 'المهندس' }, { en: 'accountant', ar: 'المحاسب' },
            { en: 'pharmacist', ar: 'الصيدلي' }, { en: 'manager', ar: 'المدير' },
            { en: 'teacher', ar: 'المعلم' }, { en: 'driver', ar: 'السائق' },
            { en: 'lawyer', ar: 'المحامي' }, { en: 'cashier', ar: 'أمين الصندوق' },
          ],
        },
        tags: ['work', 'jobs'], d: 2, limit: 8,
      },
      {
        tmpl: 'We have a meeting {T}.', arTmpl: 'لدينا اجتماع {T_ar}.',
        slots: {
          T: [
            { en: 'on Monday morning', ar: 'صباح الاثنين' }, { en: 'after lunch', ar: 'بعد الغداء' },
            { en: 'at three', ar: 'في الثالثة' }, { en: 'tomorrow', ar: 'غدا' },
            { en: 'in the morning', ar: 'في الصباح' }, { en: 'at the end of the month', ar: 'في نهاية الشهر' },
          ],
        },
        tags: ['work', 'meetings'], d: 1, limit: 6,
      },
      {
        tmpl: 'If you work {A}, you will succeed.', arTmpl: 'إذا عملت {A_ar}، ستنجح.',
        slots: {
          A: [
            { en: 'hard', ar: 'بجد' }, { en: 'carefully', ar: 'بعناية' },
            { en: 'with the team', ar: 'مع الفريق' }, { en: 'quietly', ar: 'بهدوء' },
            { en: 'every weekend', ar: 'كل عطلة' },
          ],
        },
        tags: ['work', 'conditional'], d: 3, limit: 5,
      },
      {
        tmpl: 'She is my {R} at work.', arTmpl: 'هي {R_ar} لي في العمل.',
        slots: {
          R: [
            { en: 'colleague', ar: 'زميلة' }, { en: 'manager', ar: 'مديرتي' },
            { en: 'assistant', ar: 'مساعدة' }, { en: 'boss', ar: 'رئيسة' },
          ],
        },
        tags: ['work', 'jobs'], d: 1, limit: 4,
      },
    ],
    fills: [
      { en: 'My sister is an employee at a big company.', ar: 'أختي موظفة في شركة كبيرة.', word: 'employee' },
      { en: 'Her employer gives her a good salary.', ar: 'صاحب العمل يمنحها راتبا جيدا.', word: 'salary' },
      { en: 'I work the night shift this week.', ar: 'أعمل الوردية الليلية هذا الأسبوع.', word: 'shift' },
      { en: 'Do you like your new colleagues?', ar: 'هل تحب زملاءك الجدد؟', word: 'colleagues', hint: 'جمع' },
      { en: 'He has worked in the sales department since May.', ar: 'عمل في قسم المبيعات منذ مايو.', word: 'department' },
      { en: 'Our manager signs the contracts on Sunday.', ar: 'مديرنا يوقع العقود يوم الأحد.', word: 'contracts', hint: 'جمع' },
      { en: 'If you work hard, you will get a promotion.', ar: 'إذا عملت بجد، ستحصل على ترقية.', word: 'promotion' },
      { en: 'We have a meeting every Monday.', ar: 'لدينا اجتماع كل اثنين.', word: 'meeting' },
    ],
    orders: [
      { en: 'My colleague does not like late meetings.', ar: 'زميلي لا يحب الاجتماعات المتأخرة.' },
      { en: 'Do you like your new colleagues?', ar: 'هل تحب زملاءك الجدد؟' },
      { en: 'He has worked here since May.', ar: 'عمل هنا منذ مايو.' },
      { en: 'If you work hard, you will succeed.', ar: 'إذا عملت بجد، ستنجح.' },
      { en: 'Please send the report to the manager.', ar: 'من فضلك أرسل التقرير إلى المدير.' },
      { en: 'We have a meeting every Monday.', ar: 'لدينا اجتماع كل اثنين.' },
    ],
    mc: [
      { question: 'Who receives a salary every month?', options: ['An employee', 'A tourist', 'A guest', 'A student'], answerIndex: 0, ar: 'من يتقاضى راتبا كل شهر؟' },
      { question: 'The people who work in one department are your:', options: ['colleagues', 'neighbors', 'relatives', 'customers'], answerIndex: 0, ar: 'الذين يعملون في قسم واحد هم:' },
      { question: 'A shift is:', options: ['a period of work', 'a kind of car', 'a bank account', 'a school subject'], answerIndex: 0, ar: 'الوردية shift هي:' },
      { question: 'When the company gives you a better position, it is a:', options: ['promotion', 'contract', 'meeting', 'department'], answerIndex: 0, ar: 'حين تمنحك الشركة منصبا أفضل، فهي:' },
    ],
  },

  /* ================= lesson 172 — Writing a CV or Resume ================= */
  {
    num: 172,
    tags: ['work', 'cv'],
    objectives: [
      'Structure a simple CV',
      'Describe your work experience and skills',
      'Keep the CV short and clear',
    ],
    grammar: {
      explanation: 'A CV uses short, clear sentences. Imperatives are common in advice: "Keep it short and clear", "List your skills at the end". Use the present perfect for achievements: "Have you updated your CV this year?". Attach documents with "Please attach the CV as one file". For rules, use the first conditional: "If the CV is long, the manager will not read it".',
      explanationAr: 'تستخدم السيرة الذاتية جملاقصيرة وواضحة. وأمر شائع في النصائح: Keep it short and clear، وList your skills at the end. واستخدم المضارع التام للإنجازات: Have you updated your CV this year؟ وأرفق المستندات بـ Please attach the CV as one file. وللقواعد استخدم الشرط الأول: If the CV is long, the manager will not read it.',
      examples: [
        { en: 'My CV is two pages long.', ar: 'سيرتي الذاتية من صفحتين.' },
        { en: 'Have you updated your CV this year?', ar: 'هل حدّثت سيرتك الذاتية هذا العام؟' },
        { en: 'Please attach the CV as one file.', ar: 'من فضلك أرفق السيرة الذاتية كملف واحد.' },
      ],
    },
    vocabulary: [
      { word: 'CV', meaningAr: 'سيرة ذاتية', example: 'Send your CV by email.', ipa: 'ˌsiːˈviː' },
      { word: 'work experience', meaningAr: 'خبرة العمل', example: 'My work experience is short.' },
      { word: 'education', meaningAr: 'التعليم', example: 'The education section lists your degrees.' },
      { word: 'skills', meaningAr: 'مهارات', example: 'Computer skills are important.' },
      { word: 'references', meaningAr: 'جهات اتصال / مراجع', example: 'Add two references at the end.' },
      { word: 'application', meaningAr: 'طلب تقديم', example: 'My application was successful.' },
      { word: 'degree', meaningAr: 'شهادة جامعية', example: 'She has a degree in nursing.' },
      { word: 'fluent', meaningAr: 'طليق / متمكن', example: 'He is fluent in English.' },
      { word: 'attach', meaningAr: 'يرفق', example: 'Please attach your certificate.' },
      { word: 'page', meaningAr: 'صفحة', example: 'Keep the CV on one page.' },
      { word: 'update', meaningAr: 'يحدّث', example: 'Update your CV every year.' },
      { word: 'mistake', meaningAr: 'خطأ', example: 'Check the CV for mistakes.' },
    ],
    scenario: [
      { en: 'My CV is two pages long.', ar: 'سيرتي الذاتية من صفحتين.', d: 1 },
      { en: 'Can you keep it short and clear?', ar: 'هل يمكنك إبقائها قصيرة وواضحة؟', d: 1 },
      { en: 'The CV starts with your personal details.', ar: 'تبدأ السيرة الذاتية ببياناتك الشخصية.', d: 1 },
      { en: 'Write your work experience after the education section.', ar: 'اكتب خبرة عملك بعد قسم التعليم.', d: 2 },
      { en: 'List your skills at the end.', ar: 'اسرد مهاراتك في النهاية.', d: 1 },
      { en: 'Do not write your full life story.', ar: 'لا تكتب قصة حياتك كاملة.', d: 2 },
      { en: 'Have you updated your CV this year?', ar: 'هل حدّثت سيرتك الذاتية هذا العام؟', d: 2 },
      { en: 'Yes, I have added my new course.', ar: 'نعم، أضفت دورتي الجديدة.', d: 2 },
      { en: 'My brother is fluent in two languages.', ar: 'أخي طليق في لغتين.', d: 2 },
      { en: 'Please attach the CV as one file.', ar: 'من فضلك أرفق السيرة الذاتية كملف واحد.', d: 1 },
      { en: 'She sent fifty applications last month.', ar: 'أرسلت خمسين طلب تقديم الشهر الماضي.', d: 2 },
      { en: 'Did you include your references?', ar: 'هل أدرجت جهات اتصالك؟', d: 2 },
      { en: 'Not yet, I will add them today.', ar: 'ليس بعد، سأضيفها اليوم.', d: 2 },
      { en: 'A good CV does not have spelling mistakes.', ar: 'السيرة الذاتية الجيدة لا تحتوي أخطاء إملائية.', d: 3 },
      { en: 'If the CV is long, the manager will not read it.', ar: 'إذا كانت السيرة الذاتية طويلة، فلن يقرأها المدير.', d: 3 },
      { en: 'My degree is in computer science.', ar: 'شهادتي الجامعية في علوم الحاسوب.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'Write your {S} at the {P} of the CV.', arTmpl: 'اكتب {S_ar} في {P_ar} السيرة الذاتية.',
        slots: {
          S: [
            { en: 'personal details', ar: 'بياناتك الشخصية' }, { en: 'work experience', ar: 'خبرة عملك' },
            { en: 'education', ar: 'تعليمك' }, { en: 'skills', ar: 'مهاراتك' },
            { en: 'references', ar: 'مراجعك' },
          ],
          P: [
            { en: 'top', ar: 'أعلى' }, { en: 'end', ar: 'نهاية' }, { en: 'middle', ar: 'وسط' },
          ],
        },
        tags: ['cv', 'imperative'], d: 1, limit: 15,
      },
      {
        tmpl: 'My {N} is in {F}.', arTmpl: '{N_ar} لي في {F_ar}.',
        slots: {
          N: [
            { en: 'degree', ar: 'شهادتي الجامعية' }, { en: 'diploma', ar: 'دبلومتي' },
            { en: 'certificate', ar: 'شهادتي' },
          ],
          F: [
            { en: 'software engineering', ar: 'هندسة البرمجيات' }, { en: 'accounting', ar: 'المحاسبة' },
            { en: 'English literature', ar: 'الأدب الإنجليزي' }, { en: 'nursing', ar: 'التمريض' },
            { en: 'mechanical engineering', ar: 'الهندسة الميكانيكية' },
          ],
        },
        tags: ['cv', 'education'], d: 2, limit: 12,
      },
      {
        tmpl: 'I am fluent in {L}.', arTmpl: 'أنا طليق في {L_ar}.',
        slots: {
          L: [
            { en: 'Arabic and English', ar: 'العربية والإنجليزية' }, { en: 'French', ar: 'الفرنسية' },
            { en: 'German', ar: 'الألمانية' }, { en: 'Turkish', ar: 'التركية' },
            { en: 'Spanish', ar: 'الإسبانية' },
          ],
        },
        tags: ['cv', 'languages'], d: 1, limit: 5,
      },
      {
        tmpl: '{S} has just {V} the application.', arTmpl: '{S_ar} {V_ar} الطلب للتو.',
        slots: {
          S: B.NAMED_SING,
          V: (x) => [{ en: B.enPP('send'), ar: B.arPast('send', x.S.agr) }],
        },
        tags: ['cv', 'present-perfect'], d: 2, limit: 8,
      },
      {
        tmpl: 'Do not forget to {A} your skills.', arTmpl: 'لا تنس أن {A_ar} مهاراتك.',
        slots: {
          A: [
            { en: 'list', ar: 'تسرد' }, { en: 'update', ar: 'تحدّث' },
            { en: 'explain', ar: 'تشرح' }, { en: 'improve', ar: 'تطوّر' },
          ],
        },
        tags: ['cv', 'imperative'], d: 2, limit: 4,
      },
    ],
    fills: [
      { en: 'My CV is two pages long.', ar: 'سيرتي الذاتية من صفحتين.', word: 'pages', hint: 'جمع' },
      { en: 'The CV starts with your personal details.', ar: 'تبدأ السيرة الذاتية ببياناتك الشخصية.', word: 'details' },
      { en: 'Write your work experience after the education section.', ar: 'اكتب خبرة عملك بعد قسم التعليم.', word: 'experience' },
      { en: 'Do not write your full life story.', ar: 'لا تكتب قصة حياتك كاملة.', word: 'story' },
      { en: 'Have you updated your CV this year?', ar: 'هل حدّثت سيرتك الذاتية هذا العام؟', word: 'updated' },
      { en: 'My brother is fluent in two languages.', ar: 'أخي طليق في لغتين.', word: 'fluent' },
      { en: 'Please attach the CV as one file.', ar: 'من فضلك أرفق السيرة الذاتية كملف واحد.', word: 'attach' },
      { en: 'Did you include your references?', ar: 'هل أدرجت جهات اتصالك؟', word: 'references' },
    ],
    orders: [
      { en: 'Keep the CV short and clear.', ar: 'أبقِ السيرة الذاتية قصيرة وواضحة.' },
      { en: 'Have you updated your CV this year?', ar: 'هل حدّثت سيرتك الذاتية هذا العام؟' },
      { en: 'My brother is fluent in two languages.', ar: 'أخي طليق في لغتين.' },
      { en: 'A good CV has no spelling mistakes.', ar: 'السيرة الذاتية الجيدة بلا أخطاء إملائية.' },
      { en: 'List your skills at the end.', ar: 'اسرد مهاراتك في النهاية.' },
      { en: 'She sent fifty applications last month.', ar: 'أرسلت خمسين طلب تقديم الشهر الماضي.' },
    ],
    mc: [
      { question: 'What goes first in a CV?', options: ['Personal details', 'Your holiday photos', 'Your salary secret', 'A funny story'], answerIndex: 0, ar: 'ماذا يأتي أولا في السيرة الذاتية؟' },
      { question: 'How long should a CV be?', options: ['Two pages maximum', 'Twenty pages', 'One hundred pages', 'Half a book'], answerIndex: 0, ar: 'كم يجب أن تكون طول السيرة الذاتية؟' },
      { question: 'Who can be a reference?', options: ['A former manager', 'A stranger online', 'A famous actor', 'Your cat'], answerIndex: 0, ar: 'من يمكن أن يكون جهة اتصال؟' },
      { question: '"Fluent in English" means:', options: ['يتحدث الإنجليزية بطلاقة', 'يكره الإنجليزية', 'يعلم الرياضيات', 'يترجم الكتب'], answerIndex: 0, ar: 'ما معنى Fluent in English؟' },
    ],
  },

  /* ================= lesson 173 — Writing a Cover Letter ================= */
  {
    num: 173,
    tags: ['work', 'writing'],
    objectives: [
      'Start and end a formal letter',
      'State which job you are applying for',
      'Mention your CV politely',
    ],
    grammar: {
      explanation: 'A cover letter is formal. Start with "Dear Hiring Manager," and state your goal: "I am writing to apply for the accountant position". Present perfect shows your experience: "I have worked as a waiter for four years". Mention documents politely: "Attached is my CV" or "I have attached my CV and certificates". End with "I look forward to your reply" and "Yours sincerely".',
      explanationAr: 'خطاب التقديم رسمي. ابدأ بـ Dear Hiring Manager ثم اذكر هدفك: I am writing to apply for the accountant position. ويُظهر المضارع التام خبرتك: I have worked as a waiter for four years. واذكر المستندات بأدب: Attached is my CV أو I have attached my CV and certificates. واختم بـ I look forward to your reply وYours sincerely.',
      examples: [
        { en: 'I am writing to apply for the accountant position.', ar: 'أكتب للتقدم إلى وظيفة المحاسب.' },
        { en: 'Attached is my CV and two references.', ar: 'مرفقة سيرتي الذاتية وجهتا اتصال.' },
        { en: 'I look forward to your reply.', ar: 'أتطلع إلى ردكم.' },
      ],
    },
    vocabulary: [
      { word: 'cover letter', meaningAr: 'خطاب تقديم', example: 'Send a cover letter with your CV.' },
      { word: 'apply for', meaningAr: 'يتقدم لـ', example: 'I want to apply for this job.' },
      { word: 'position', meaningAr: 'منصب / وظيفة', example: 'The position is still open.' },
      { word: 'hiring manager', meaningAr: 'مسؤول التوظيف', example: 'Dear Hiring Manager, hello.' },
      { word: 'dear', meaningAr: 'حضرات / عزيزي', example: 'Dear Sir, thank you.' },
      { word: 'sincerely', meaningAr: 'بإخلاص', example: 'Yours sincerely, Omar.' },
      { word: 'attached', meaningAr: 'مرفق', example: 'Attached is my certificate.' },
      { word: 'experience', meaningAr: 'خبرة', example: 'My experience matches the job.' },
      { word: 'qualifications', meaningAr: 'مؤهلات', example: 'Her qualifications are strong.' },
      { word: 'opportunity', meaningAr: 'فرصة', example: 'Thank you for this opportunity.' },
      { word: 'look forward to', meaningAr: 'يتطلع إلى', example: 'I look forward to meeting you.' },
      { word: 'reply', meaningAr: 'رد / يرد', example: 'I am waiting for your reply.' },
    ],
    scenario: [
      { en: 'I am writing to apply for the accountant position.', ar: 'أكتب للتقدم إلى وظيفة المحاسب.', d: 1 },
      { en: 'I saw your advertisement on the company website.', ar: 'رأيت إعلانكم على موقع الشركة.', d: 1 },
      { en: 'I have worked as a waiter for four years.', ar: 'عملت نادلا لمدة أربع سنوات.', d: 2 },
      { en: 'Please find my CV attached.', ar: 'تجدون سيرتي الذاتية مرفقة.', d: 1 },
      { en: 'I have attached my CV and certificates.', ar: 'أرفقت سيرتي الذاتية وشهاداتي.', d: 2 },
      { en: 'Do you need more information about my qualifications?', ar: 'هل تحتاجون مزيدا من المعلومات عن مؤهلاتي؟', d: 2 },
      { en: 'Can you type fast and use the computer?', ar: 'هل تكتب بسرعة وتستخدم الحاسوب؟', d: 2 },
      { en: 'I would like an opportunity to join your team.', ar: 'أود الحصول على فرصة للانضمام إلى فريقكم.', d: 2 },
      { en: 'Why do you want this position?', ar: 'لماذا تريد هذا المنصب؟', d: 1 },
      { en: 'Because it matches my experience and skills.', ar: 'لأنه يناسب خبرتي ومهاراتي.', d: 2 },
      { en: 'I look forward to your reply.', ar: 'أتطلع إلى ردكم.', d: 1 },
      { en: 'Yours sincerely, Ahmed Hassan.', ar: 'بإخلاص، أحمد حسن.', d: 3 },
      { en: 'Do not forget to sign the letter.', ar: 'لا تنس أن توقع على الخطاب.', d: 2 },
      { en: 'She has applied for two jobs this month.', ar: 'تقدمت لوظيفتين هذا الشهر.', d: 2 },
      { en: 'If they call me, I will start next week.', ar: 'إذا اتصلوا بي، سأبدأ الأسبوع القادم.', d: 3 },
      { en: 'Please write the date at the top.', ar: 'من فضلك اكتب التاريخ في الأعلى.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'I am writing to apply for the {J} position.', arTmpl: 'أكتب للتقدم إلى وظيفة {J_ar}.',
        slots: {
          J: [
            { en: 'accountant', ar: 'المحاسب' }, { en: 'salesperson', ar: 'البائع' },
            { en: 'receptionist', ar: 'موظف الاستقبال' }, { en: 'driver', ar: 'السائق' },
            { en: 'nurse', ar: 'الممرضة' }, { en: 'teacher', ar: 'المعلم' },
          ],
        },
        tags: ['cover-letter', 'writing'], d: 1, limit: 6,
      },
      {
        tmpl: 'I have worked as a {J2} for {N} years.', arTmpl: 'عملت {J2_ar} لمدة {N_ar} سنوات.',
        slots: {
          J2: [
            { en: 'cashier', ar: 'كأمين صندوق' }, { en: 'mechanic', ar: 'كميكانيكي' },
            { en: 'waiter', ar: 'كنادل' }, { en: 'tailor', ar: 'كخياط' },
            { en: 'delivery driver', ar: 'كسائق توصيل' },
          ],
          N: [
            { en: 'three', ar: 'ثلاث' }, { en: 'five', ar: 'خمس' },
            { en: 'six', ar: 'ست' }, { en: 'ten', ar: 'عشر' },
          ],
        },
        tags: ['cover-letter', 'present-perfect'], d: 2, limit: 16,
      },
      {
        tmpl: 'I look forward to {G} from you.', arTmpl: 'أتطلع إلى {G_ar} منكم.',
        slots: {
          G: [
            { en: 'hearing', ar: 'سماع الأخبار' }, { en: 'receiving an answer', ar: 'تلقائي جوابا' },
            { en: 'meeting you', ar: 'مقابلتكم' }, { en: 'reading your feedback', ar: 'قراءة ملاحظاتكم' },
          ],
        },
        tags: ['cover-letter', 'writing'], d: 3, limit: 4,
      },
      {
        tmpl: 'Attached is my {D}.', arTmpl: 'مرفق {D_ar}.',
        slots: {
          D: [
            { en: 'CV', ar: 'سيرتي الذاتية' }, { en: 'certificate', ar: 'شهادتي' },
            { en: 'portfolio', ar: 'ملف أعمالي' }, { en: 'transcript', ar: 'كشف درجاتي' },
            { en: 'reference letter', ar: 'خطاب توصية' },
          ],
        },
        tags: ['cover-letter', 'writing'], d: 2, limit: 5,
      },
      {
        tmpl: '{S} has {A} for {N} this month.', arTmpl: '{S_ar} {A_ar} بطلب لـ{N_ar} هذا الشهر.',
        slots: {
          S: B.NAMED_SING,
          A: (x) => [{ en: 'applied', ar: x.S.agr === 'she' ? 'تقدمت' : 'تقدم' }],
          N: [
            { en: 'two jobs', ar: 'وظيفتين' }, { en: 'three jobs', ar: 'ثلاث وظائف' },
            { en: 'five jobs', ar: 'خمس وظائف' },
          ],
        },
        tags: ['cover-letter', 'present-perfect'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'I am writing to apply for the accountant position.', ar: 'أكتب للتقدم إلى وظيفة المحاسب.', word: 'apply' },
      { en: 'I saw your advertisement on the company website.', ar: 'رأيت إعلانكم على موقع الشركة.', word: 'advertisement' },
      { en: 'I have attached my CV and certificates.', ar: 'أرفقت سيرتي الذاتية وشهاداتي.', word: 'attached' },
      { en: 'Do you need more information about my qualifications?', ar: 'هل تحتاجون مزيدا من المعلومات عن مؤهلاتي؟', word: 'qualifications' },
      { en: 'I would like an opportunity to join your team.', ar: 'أود الحصول على فرصة للانضمام إلى فريقكم.', word: 'opportunity' },
      { en: 'I look forward to your reply.', ar: 'أتطلع إلى ردكم.', word: 'forward' },
      { en: 'Yours sincerely, Ahmed Hassan.', ar: 'بإخلاص، أحمد حسن.', word: 'sincerely' },
      { en: 'Do not forget to sign the letter.', ar: 'لا تنس أن توقع على الخطاب.', word: 'sign' },
    ],
    orders: [
      { en: 'I am writing to apply for this job.', ar: 'أكتب للتقدم إلى هذه الوظيفة.' },
      { en: 'I have attached my CV and certificates.', ar: 'أرفقت سيرتي الذاتية وشهاداتي.' },
      { en: 'Do you need more information about me?', ar: 'هل تحتاجون مزيدا من المعلومات عني؟' },
      { en: 'I look forward to your reply.', ar: 'أتطلع إلى ردكم.' },
      { en: 'She has applied for two jobs this month.', ar: 'تقدمت لوظيفتين هذا الشهر.' },
      { en: 'Please write the date at the top.', ar: 'من فضلك اكتب التاريخ في الأعلى.' },
    ],
    mc: [
      { question: 'How do you start a formal cover letter?', options: ['Dear Hiring Manager', 'Hi bro', 'Hey you there', 'Yo manager'], answerIndex: 0, ar: 'كيف تبدأ خطاب تقديم رسميا؟' },
      { question: 'What do you mention after your experience?', options: ['Your skills and qualifications', 'Your neighbor name', 'Your lunch plans', 'Your password'], answerIndex: 0, ar: 'ماذا تذكر بعد خبرتك؟' },
      { question: '"I look forward to your reply" means:', options: ['أتطلع إلى ردكم', 'أرفض وظيفتكم', 'أرسلت رسالة خاطئة', 'سأعمل غدا'], answerIndex: 0, ar: 'ما معنى I look forward to your reply؟' },
      { question: 'How do you end a formal letter?', options: ['Yours sincerely', 'See ya', 'Bye bye now', 'Later friend'], answerIndex: 0, ar: 'كيف تختم الخطاب الرسمي؟' },
    ],
  },

  /* ================= lesson 174 — Job Interviews ================= */
  {
    num: 174,
    tags: ['work', 'interviews'],
    objectives: [
      'Answer common interview questions',
      'Talk about strengths and weaknesses',
      'Ask about start dates and duties',
    ],
    grammar: {
      explanation: 'Interviews mix questions and confident answers. Use "I am ..." for qualities: "My strength is patience". Present perfect proves experience: "Have you worked in a team before?", "Yes, I have led a team of five people". Modals show availability: "I can start next week". A promise uses the first conditional: "If they hire me, I will do my best".',
      explanationAr: 'تمزج المقابلات بين الأسئلة والأجوبة الواثقة. استخدم I am للصفات: My strength is patience. ويثبت المضارع التام الخبرة: Have you worked in a team before؟ وYes, I have led a team of five people. وتُظهر الأفعال الناقصة الجاهزية: I can start next week. ويعبّر الشرط الأول عن وعد: If they hire me, I will do my best.',
      examples: [
        { en: 'What are your strengths and weaknesses?', ar: 'ما نقاط قوتك وضعفك؟' },
        { en: 'Why do you want this job?', ar: 'لماذا تريد هذه الوظيفة؟' },
        { en: 'If they hire me, I will do my best.', ar: 'إذا وظفوني، سأبذل قصارى جهدي.' },
      ],
    },
    vocabulary: [
      { word: 'interview', meaningAr: 'مقابلة عمل', example: 'My interview is on Tuesday.', ipa: 'ˈɪntəvjuː' },
      { word: 'candidate', meaningAr: 'مترشح', example: 'The candidate answered calmly.' },
      { word: 'strength', meaningAr: 'نقطة قوة', example: 'Patience is my strength.' },
      { word: 'weakness', meaningAr: 'نقطة ضعف', example: 'Talk about one weakness honestly.' },
      { word: 'confident', meaningAr: 'واثق', example: 'She felt confident after practicing.' },
      { word: 'nervous', meaningAr: 'متوتر', example: 'I was nervous before the interview.' },
      { word: 'punctual', meaningAr: 'ملتزم بالوقت', example: 'A punctual person never arrives late.' },
      { word: 'hire', meaningAr: 'يوظف', example: 'They want to hire two engineers.' },
      { word: 'available', meaningAr: 'متاح / جاهز', example: 'I am available from Monday.' },
      { word: 'team', meaningAr: 'فريق', example: 'Our team finished the project.' },
      { word: 'goal', meaningAr: 'هدف', example: 'My goal is to grow here.' },
    ],
    scenario: [
      { en: 'I have a job interview on Tuesday.', ar: 'لدي مقابلة عمل يوم الثلاثاء.', d: 1 },
      { en: 'Tell me about yourself, please.', ar: 'حدّثني عن نفسك من فضلك.', d: 1 },
      { en: 'I am a hard worker and I learn fast.', ar: 'أنا مجتهد وأتعلم بسرعة.', d: 2 },
      { en: 'What are your strengths and weaknesses?', ar: 'ما نقاط قوتك وضعفك؟', d: 1 },
      { en: 'My strength is patience, but I am sometimes shy.', ar: 'نقطة قوتي الصبر، لكنني خجول أحيانا.', d: 2 },
      { en: 'Why do you want this job?', ar: 'لماذا تريد هذه الوظيفة؟', d: 1 },
      { en: 'Because I love this field and your company.', ar: 'لأنني أحب هذا المجال وشركتكم.', d: 2 },
      { en: 'She was nervous before, but confident after.', ar: 'كانت متوترة قبل المقابلة، واثقة بعدها.', d: 3 },
      { en: 'Have you worked in a team before?', ar: 'هل عملت في فريق من قبل؟', d: 2 },
      { en: 'Yes, I have led a team of five people.', ar: 'نعم، قت فريقا من خمسة أشخاص.', d: 2 },
      { en: 'We interviewed three candidates yesterday.', ar: 'قابلنا ثلاثة مترشحين أمس.', d: 2 },
      { en: 'When can you start?', ar: 'متى يمكنك البدء؟', d: 1 },
      { en: 'I can start next week.', ar: 'يمكنني البدء الأسبوع القادم.', d: 2 },
      { en: 'He does not arrive late to interviews.', ar: 'لا يتأخر في الحضور إلى المقابلات.', d: 2 },
      { en: 'If they hire me, I will do my best.', ar: 'إذا وظفوني، سأبذل قصارى جهدي.', d: 3 },
      { en: 'Please arrive ten minutes early.', ar: 'من فضلك احضر قبل عشر دقائق.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'What is your biggest {SW}?', arTmpl: 'ما أكبر {SW_ar} لديك؟',
        slots: {
          SW: [
            { en: 'strength', ar: 'نقطة قوة' }, { en: 'weakness', ar: 'نقطة ضعف' },
            { en: 'skill', ar: 'مهارة' }, { en: 'goal', ar: 'هدف' },
            { en: 'plan', ar: 'خطة' },
          ],
        },
        tags: ['interview', 'questions'], d: 1, limit: 5,
      },
      {
        tmpl: 'I am {ADJ} about the interview.', arTmpl: 'أنا {ADJ_ar} حيال المقابلة.',
        slots: {
          ADJ: [
            { en: 'confident', ar: 'واثق' }, { en: 'nervous', ar: 'متوتر' },
            { en: 'excited', ar: 'متحمس' }, { en: 'calm', ar: 'هادئ' },
            { en: 'positive', ar: 'متفائل' }, { en: 'relaxed', ar: 'مرتاح' },
          ],
        },
        tags: ['interview', 'feelings'], d: 1, limit: 6,
      },
      {
        tmpl: '{S} {V} in a team of {N} people.', arTmpl: '{S_ar} {V_ar} في فريق من {N_ar} أشخاص.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('work', x.S.agr), ar: B.arPresent('work', x.S.agr) }],
          N: [
            { en: 'three', ar: 'ثلاثة' }, { en: 'four', ar: 'أربعة' },
            { en: 'five', ar: 'خمسة' }, { en: 'ten', ar: 'عشرة' },
          ],
        },
        tags: ['interview', 'present-simple'], d: 2, limit: 12,
      },
      {
        tmpl: 'I can start {T}.', arTmpl: 'يمكنني البدء {T_ar}.',
        slots: {
          T: [
            { en: 'next week', ar: 'الأسبوع القادم' }, { en: 'tomorrow', ar: 'غدا' },
            { en: 'on Sunday', ar: 'يوم الأحد' }, { en: 'immediately', ar: 'فورا' },
            { en: 'next month', ar: 'الشهر القادم' },
          ],
        },
        tags: ['interview', 'modals'], d: 1, limit: 5,
      },
      {
        tmpl: 'Have you ever worked {P}?', arTmpl: 'هل سبق أن عملت {P_ar}؟',
        slots: {
          P: [
            { en: 'in a big office', ar: 'في مكتب كبير' }, { en: 'in a hotel', ar: 'في فندق' },
            { en: 'abroad', ar: 'في الخارج' }, { en: 'at night', ar: 'في الليل' },
            { en: 'in a bank', ar: 'في مصرف' }, { en: 'from home', ar: 'من المنزل' },
          ],
        },
        tags: ['interview', 'present-perfect'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'I have a job interview on Tuesday.', ar: 'لدي مقابلة عمل يوم الثلاثاء.', word: 'interview' },
      { en: 'What are your strengths and weaknesses?', ar: 'ما نقاط قوتك وضعفك؟', word: 'weaknesses', hint: 'جمع' },
      { en: 'Why do you want this job?', ar: 'لماذا تريد هذه الوظيفة؟', word: 'want' },
      { en: 'Have you worked in a team before?', ar: 'هل عملت في فريق من قبل؟', word: 'team' },
      { en: 'When can you start?', ar: 'متى يمكنك البدء؟', word: 'start' },
      { en: 'I can start next week.', ar: 'يمكنني البدء الأسبوع القادم.', word: 'next' },
      { en: 'She was nervous before, but confident after.', ar: 'كانت متوترة قبل المقابلة، واثقة بعدها.', word: 'confident' },
      { en: 'If they hire me, I will do my best.', ar: 'إذا وظفوني، سأبذل قصارى جهدي.', word: 'hire' },
    ],
    orders: [
      { en: 'Tell me about yourself, please.', ar: 'حدّثني عن نفسك من فضلك.' },
      { en: 'What are your strengths and weaknesses?', ar: 'ما نقاط قوتك وضعفك؟' },
      { en: 'Why do you want this job?', ar: 'لماذا تريد هذه الوظيفة؟' },
      { en: 'I have led a team of five people.', ar: 'قت فريقا من خمسة أشخاص.' },
      { en: 'If they hire me, I will work hard.', ar: 'إذا وظفوني، سأعمل بجد.' },
      { en: 'Please arrive ten minutes early.', ar: 'من فضلك احضر قبل عشر دقائق.' },
    ],
    mc: [
      { question: 'What should you do before an interview?', options: ['Practice your answers', 'Sleep in the office', 'Forget the company name', 'Argue with the manager'], answerIndex: 0, ar: 'ماذا يجب أن تفعل قبل المقابلة؟' },
      { question: '"I am punctual" means:', options: ['أحضر في الوقت المحدد', 'أعمل بلا راتب', 'أكرر الاجتماعات', 'أقبل كل شيء'], answerIndex: 0, ar: 'ما معنى I am punctual؟' },
      { question: 'A good answer about a weakness is:', options: ['honest and small', 'a big secret', 'an insult to the manager', 'a funny story'], answerIndex: 0, ar: 'الجواب الجيد عن نقطة الضعف يكون:' },
      { question: 'When they ask "When can you start?", answer with:', options: ['a date', 'a poem', 'a recipe', 'a phone number'], answerIndex: 0, ar: 'عندما يسألون متى يمكنك البدء؟ أجب بـ:' },
    ],
  },
];
