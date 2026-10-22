/* ============================================================
   v2 section data — s09-a1.js
   Education & Digital Skills · lessons 196–199
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 196 — School and University ================= */
  {
    num: 196,
    tags: ['education', 'university'],
    objectives: [
      'Talk about university life and degrees',
      'Describe what students study each semester',
      'Use campus and classroom words',
    ],
    grammar: {
      explanation: 'To talk about studies, use the present simple: "My daughter studies medicine" (note "studies" with he/she). "Major" is the main subject: "My major is history". A "semester" is half of the school year, and students "graduate" when they finish their degree. Use "will" for future plans: "She will graduate next year". On campus you find the library, the cafeteria and the lecture halls.',
      explanationAr: 'للحديث عن الدراسة استخدم المضارع البسيط: My daughter studies medicine (لاحظ studies مع he/she). التخصص الرئيسي يسمى major: My major is history. الفصل الدراسي يسمى semester، والطالب يتخرج graduate عندما ينهي شهادته. استخدم will للمستقبل: She will graduate next year. وفي الحرم الجامعي توجد المكتبة والمقصف وقاعات المحاضرات.',
      examples: [
        { en: 'My daughter studies medicine at the university.', ar: 'ابنتي تدرس الطب في الجامعة.' },
        { en: 'The new semester starts in October.', ar: 'يبدأ الفصل الدراسي الجديد في أكتوبر.' },
        { en: 'He will graduate next summer.', ar: 'سيتخرج في الصيف القادم.' },
      ],
    },
    vocabulary: [
      { word: 'university', meaningAr: 'جامعة', example: 'She teaches at the university.' },
      { word: 'campus', meaningAr: 'حرم جامعي', example: 'My friends live on campus.' },
      { word: 'lecture', meaningAr: 'محاضرة', example: 'The physics lecture starts at nine.' },
      { word: 'semester', meaningAr: 'فصل دراسي', example: 'This semester is difficult.' },
      { word: 'major', meaningAr: 'تخصص رئيسي', example: 'His major is economics.' },
      { word: 'graduate', meaningAr: 'يتخرج', example: 'They will graduate in June.' },
      { word: 'degree', meaningAr: 'شهادة جامعية', example: 'She wants a science degree.' },
      { word: 'professor', meaningAr: 'أستاذ جامعي', example: 'The professor answers our emails.' },
      { word: 'classmate', meaningAr: 'زميل دراسة', example: 'My classmate shares his notes.' },
      { word: 'dormitory', meaningAr: 'سكن طلابي', example: 'The dormitory is near the gym.' },
      { word: 'lecture hall', meaningAr: 'قاعة محاضرات', example: 'The lecture hall is full today.' },
    ],
    scenario: [
      { en: 'My daughter studies medicine at the university.', ar: 'ابنتي تدرس الطب في الجامعة.', d: 1 },
      { en: 'My son studies engineering at the same university.', ar: 'ابني يدرس الهندسة في الجامعة نفسها.', d: 1 },
      { en: 'The campus is big and beautiful.', ar: 'الحرم الجامعي كبير وجميل.', d: 1 },
      { en: 'We have two lectures every morning.', ar: 'لدينا محاضرتان كل صباح.', d: 1 },
      { en: 'The professor explains the lesson very clearly.', ar: 'الأستاذ الجامعي يشرح الدرس بوضوح شديد.', d: 2 },
      { en: 'My major is computer science.', ar: 'تخصصي هو علوم الحاسوب.', d: 1 },
      { en: 'She will graduate next year.', ar: 'ستتخرج في السنة القادمة.', d: 1 },
      { en: 'The new semester starts in October.', ar: 'يبدأ الفصل الدراسي الجديد في أكتوبر.', d: 1 },
      { en: 'I do not live on campus.', ar: 'لا أسكن في الحرم الجامعي.', d: 2 },
      { en: 'My classmates are friendly and helpful.', ar: 'زملائي في الدراسة ودودون ومتعاونون.', d: 2 },
      { en: 'Where is the science building?', ar: 'أين مبنى العلوم؟', d: 1 },
      { en: 'The library opens at eight in the morning.', ar: 'تفتح المكتبة في الثامنة صباحا.', d: 2 },
      { en: 'He graduated from the university in 2020.', ar: 'تخرج من الجامعة عام 2020.', d: 2 },
      { en: 'Do you walk to campus every day?', ar: 'هل تمشي إلى الحرم الجامعي كل يوم؟', d: 2 },
      { en: 'I will call you after my last lecture.', ar: 'سأتصل بك بعد محاضرتي الأخيرة.', d: 2 },
      { en: 'Students do not use phones during the lecture.', ar: 'الطلاب لا يستخدمون الهواتف أثناء المحاضرة.', d: 2 },
      { en: 'What does your daughter study?', ar: 'ماذا تدرس ابنتك؟', d: 2 },
      { en: 'She studies medicine, and she loves it.', ar: 'تدرس الطب، وهي تحب ذلك.', d: 3 },
    ],
    patterns: [
      {
        tmpl: '{S} {V} {SUBJ} at the university.', arTmpl: '{S_ar} {V_ar} {SUBJ_ar} في الجامعة.',
        slots: {
          S: [
            { en: 'My daughter', ar: 'ابنتي', agr: 'she' }, { en: 'My son', ar: 'ابني', agr: 'he' },
            { en: 'My sister', ar: 'أختي', agr: 'she' }, { en: 'My brother', ar: 'أخي', agr: 'he' },
          ],
          V: (x) => [{ en: B.enPresent('study', x.S.agr), ar: B.arPresent('study', x.S.agr) }],
          SUBJ: B.SUBJECTS2,
        },
        tags: ['education', 'present-simple'], d: 1, limit: 16,
      },
      {
        tmpl: 'The new semester starts in {M}.', arTmpl: 'يبدأ الفصل الدراسي الجديد في {M_ar}.',
        slots: { M: B.MONTHS },
        tags: ['education', 'time'], d: 1, limit: 12,
      },
      {
        tmpl: '{S} {V} {T}.', arTmpl: '{S_ar} {V_ar} {T_ar}.',
        slots: {
          S: [
            { en: 'My daughter', ar: 'ابنتي', agr: 'she' }, { en: 'My son', ar: 'ابني', agr: 'he' },
            { en: 'My sister', ar: 'أختي', agr: 'she' }, { en: 'My cousin', ar: 'ابن عمي', agr: 'he' },
          ],
          V: (x) => [{ en: 'will graduate', ar: x.S.agr === 'she' ? 'ستتخرج' : 'سيتخرج' }],
          T: [
            { en: 'next year', ar: 'السنة القادمة' }, { en: 'next summer', ar: 'الصيف القادم' },
            { en: 'next month', ar: 'الشهر القادم' }, { en: 'in two years', ar: 'بعد سنتين' },
          ],
        },
        tags: ['education', 'future'], d: 2, limit: 12,
      },
      {
        tmpl: 'I have a {N} on {D}.', arTmpl: 'لدي {N_ar} يوم {D_ar}.',
        slots: {
          N: [
            { en: 'lecture', ar: 'محاضرة' }, { en: 'lab', ar: 'تجربة عملية' },
            { en: 'seminar', ar: 'حلقة نقاش' }, { en: 'tutorial', ar: 'درس تعليمي' },
          ],
          D: B.DAYS,
        },
        tags: ['education', 'time'], d: 1, limit: 16,
      },
      {
        tmpl: 'The {P} is on campus.', arTmpl: '{P_ar} داخل الحرم الجامعي.',
        slots: {
          P: [
            { en: 'library', ar: 'المكتبة' }, { en: 'cafeteria', ar: 'المقصف' },
            { en: 'gym', ar: 'النادي الرياضي' }, { en: 'bookstore', ar: 'متجر الكتب' },
            { en: 'science building', ar: 'مبنى العلوم' },
          ],
        },
        tags: ['education', 'places'], d: 1, limit: 5,
      },
    ],
    fills: [
      { en: 'My daughter studies medicine at the university.', ar: 'ابنتي تدرس الطب في الجامعة.', word: 'medicine' },
      { en: 'My brother lives on campus.', ar: 'أخي يسكن في الحرم الجامعي.', word: 'campus', hint: 'حرم جامعي' },
      { en: 'We have two lectures every morning.', ar: 'لدينا محاضرتان كل صباح.', word: 'lectures' },
      { en: 'The new semester starts in October.', ar: 'يبدأ الفصل الدراسي الجديد في أكتوبر.', word: 'semester' },
      { en: 'My major is computer science.', ar: 'تخصصي هو علوم الحاسوب.', word: 'major', hint: 'تخصص' },
      { en: 'She will graduate next year.', ar: 'ستتخرج في السنة القادمة.', word: 'graduate' },
      { en: 'Please send me the lecture notes.', ar: 'أرسل لي ملاحظات المحاضرة من فضلك.', word: 'notes' },
      { en: 'The professor explains the lesson very clearly.', ar: 'الأستاذ الجامعي يشرح الدرس بوضوح شديد.', word: 'professor' },
    ],
    orders: [
      { en: 'My daughter studies medicine at the university.', ar: 'ابنتي تدرس الطب في الجامعة.' },
      { en: 'The campus is big and beautiful.', ar: 'الحرم الجامعي كبير وجميل.' },
      { en: 'We have two lectures every morning.', ar: 'لدينا محاضرتان كل صباح.' },
      { en: 'She will graduate next year.', ar: 'ستتخرج في السنة القادمة.' },
      { en: 'Where is the science building?', ar: 'أين مبنى العلوم؟' },
      { en: 'The new semester starts in October.', ar: 'يبدأ الفصل الدراسي الجديد في أكتوبر.' },
    ],
    mc: [
      { question: 'What does "semester" mean?', options: ['فصل دراسي', 'جامعة', 'محاضرة', 'شهادة'], answerIndex: 0, ar: 'ما معنى semester؟' },
      { question: 'A student\'s main subject is called a ___.', options: ['major', 'campus', 'dormitory', 'lecture hall'], answerIndex: 0, ar: 'المادة الرئيسية للطالب تسمى ___.' },
      { question: 'Where do many students live on campus?', options: ['In a dormitory', 'In a library', 'In a cafeteria', 'In a bookstore'], answerIndex: 0, ar: 'أين يسكن كثير من الطلاب داخل الحرم الجامعي؟' },
      { question: '"She will graduate next year" means:', options: ['ستتخرج في السنة القادمة', 'ستبدأ الدراسة العام القادم', 'ستغادر الجامعة اليوم', 'ستدرس الطب'], answerIndex: 0, ar: 'ما معنى She will graduate next year؟' },
    ],
  },

  /* ================= lesson 197 — Enrolling in a Course ================= */
  {
    num: 197,
    tags: ['education', 'courses'],
    objectives: [
      'Register for a course online or at the office',
      'Ask about fees, levels and schedules',
      'Talk about certificates at the end of a course',
    ],
    grammar: {
      explanation: 'To join a course, you "register" or "enroll": "I want to register for the course". Ask about money with "fee": "How much is the fee?" Use "will" for promises and future plans: "I will fill in this form today". Courses have a "level" (beginner, advanced) and a "deadline" — the last day to register. At the end, successful students get a certificate.',
      explanationAr: 'للانضمام إلى دورة تستخدم register أو enroll: I want to register for the course. اسأل عن المال بكلمة fee: How much is the fee؟ استخدم will للوعود والخطط المستقبلية: I will fill in this form today. للدورات مستوى level (مبتدئ، متقدم) وآخر موعد deadline للتسجيل. وفي النهاية يحصل الطلاب الناجحون على شهادة certificate.',
      examples: [
        { en: 'I want to register for the English course.', ar: 'أريد التسجيل في دورة الإنجليزية.' },
        { en: 'How do I pay the fee?', ar: 'كيف أدفع الرسوم؟' },
        { en: 'You will get a certificate at the end.', ar: 'ستحصل على شهادة في النهاية.' },
      ],
    },
    vocabulary: [
      { word: 'register', meaningAr: 'يسجل', example: 'I will register tomorrow morning.' },
      { word: 'enroll', meaningAr: 'يلتحق / يسجل', example: 'She enrolled in a design course.' },
      { word: 'course', meaningAr: 'دورة تعليمية', example: 'The course has twenty lessons.' },
      { word: 'fee', meaningAr: 'رسوم', example: 'The fee includes the book.' },
      { word: 'certificate', meaningAr: 'شهادة', example: 'I received my certificate last week.' },
      { word: 'form', meaningAr: 'استمارة', example: 'Please complete this form.' },
      { word: 'deadline', meaningAr: 'آخر موعد', example: 'The deadline is the thirtieth.' },
      { word: 'level', meaningAr: 'مستوى', example: 'This course is level two.' },
      { word: 'beginner', meaningAr: 'مبتدئ', example: 'It is a course for beginners.' },
      { word: 'schedule', meaningAr: 'جدول', example: 'Check the schedule online.' },
      { word: 'pay', meaningAr: 'يدفع', example: 'You can pay by card.' },
    ],
    scenario: [
      { en: 'I want to register for the course.', ar: 'أريد التسجيل في الدورة.', d: 1 },
      { en: 'The course starts in October.', ar: 'تبدأ الدورة في أكتوبر.', d: 1 },
      { en: 'The fee is two hundred dollars.', ar: 'الرسوم مئتا دولار.', d: 1 },
      { en: 'How do I pay the fee?', ar: 'كيف أدفع الرسوم؟', d: 1 },
      { en: 'You can pay online or at the office.', ar: 'يمكنك الدفع عبر الإنترنت أو في المكتب.', d: 2 },
      { en: 'I will fill in this form today.', ar: 'سأملأ هذه الاستمارة اليوم.', d: 2 },
      { en: 'The deadline is next Friday.', ar: 'آخر موعد هو الجمعة القادمة.', d: 1 },
      { en: 'Is the course for beginners?', ar: 'هل الدورة للمبتدئين؟', d: 1 },
      { en: 'No, it is an advanced level.', ar: 'لا، إنها مستوى متقدم.', d: 2 },
      { en: 'My wife will enroll in the evening class.', ar: 'ستلتحق زوجتي في الصف المسائي.', d: 2 },
      { en: 'Classes are on Tuesday and Thursday.', ar: 'الحصص يومي الثلاثاء والخميس.', d: 1 },
      { en: 'Do we get a certificate at the end?', ar: 'هل نحصل على شهادة في النهاية؟', d: 2 },
      { en: 'Yes, you get a certificate at the end.', ar: 'نعم، تحصل على شهادة في النهاية.', d: 2 },
      { en: 'I do not have the course book yet.', ar: 'ليس لدي كتاب الدورة بعد.', d: 2 },
      { en: 'Please register my son in the course.', ar: 'سجل ابني في الدورة من فضلك.', d: 2 },
      { en: 'We enrolled in an English course last month.', ar: 'التحقنا بدورة إنجليزية الشهر الماضي.', d: 2 },
      { en: 'How many students are in the course?', ar: 'كم عدد الطلاب في الدورة؟', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I want to register for the {C} course.', arTmpl: 'أريد التسجيل في دورة {C_ar}.',
        slots: {
          C: [
            { en: 'English', ar: 'الإنجليزية' }, { en: 'computer', ar: 'الحاسوب' },
            { en: 'cooking', ar: 'الطبخ' }, { en: 'photography', ar: 'التصوير' },
            { en: 'design', ar: 'التصميم' }, { en: 'accounting', ar: 'المحاسبة' },
          ],
        },
        tags: ['education', 'courses'], d: 1, limit: 6,
      },
      {
        tmpl: 'The fee is {A}.', arTmpl: 'الرسوم {A_ar}.',
        slots: {
          A: [
            { en: 'fifty dollars', ar: 'خمسون دولارا' }, { en: 'one hundred dollars', ar: 'مئة دولار' },
            { en: 'two hundred dollars', ar: 'مئتا دولار' }, { en: 'thirty dinars', ar: 'ثلاثون دينارا' },
            { en: 'twenty euros', ar: 'عشرون يورو' },
          ],
        },
        tags: ['education', 'money'], d: 1, limit: 5,
      },
      {
        tmpl: 'The course starts in {M}.', arTmpl: 'تبدأ الدورة في {M_ar}.',
        slots: { M: B.MONTHS },
        tags: ['education', 'time'], d: 1, limit: 12,
      },
      {
        tmpl: 'The course is on {D}.', arTmpl: 'الدورة يوم {D_ar}.',
        slots: { D: B.DAYS },
        tags: ['education', 'time'], d: 1, limit: 7,
      },
      {
        tmpl: '{S} {V}.', arTmpl: '{S_ar} {V_ar}.',
        slots: {
          S: [
            { en: 'He', ar: 'هو', agr: 'he' }, { en: 'She', ar: 'هي', agr: 'she' },
            { en: 'We', ar: 'نحن', agr: 'we' }, { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{
            en: 'will get a certificate',
            ar: { he: 'سيحصل على شهادة', she: 'ستحصل على شهادة', we: 'سنحصل على شهادة', they: 'سيحصلون على شهادة' }[x.S.agr],
          }],
        },
        tags: ['education', 'future'], d: 2, limit: 4,
      },
    ],
    fills: [
      { en: 'I want to register for the course.', ar: 'أريد التسجيل في الدورة.', word: 'register', hint: 'يسجل' },
      { en: 'The fee is two hundred dollars.', ar: 'الرسوم مئتا دولار.', word: 'fee', hint: 'رسوم' },
      { en: 'The course starts in October.', ar: 'تبدأ الدورة في أكتوبر.', word: 'course' },
      { en: 'Will we get a certificate at the end?', ar: 'هل ستحصل على شهادة في النهاية؟', word: 'certificate' },
      { en: 'The deadline is next Friday.', ar: 'آخر موعد هو الجمعة القادمة.', word: 'deadline' },
      { en: 'Please fill in this form.', ar: 'املأ هذه الاستمارة من فضلك.', word: 'form' },
      { en: 'The class is for beginners.', ar: 'الصف مخصص للمبتدئين.', word: 'beginners' },
      { en: 'You can pay by card at the office.', ar: 'يمكنك الدفع بالبطاقة في المكتب.', word: 'pay' },
    ],
    orders: [
      { en: 'I want to register for the course.', ar: 'أريد التسجيل في الدورة.' },
      { en: 'The course starts in October.', ar: 'تبدأ الدورة في أكتوبر.' },
      { en: 'How do I pay the fee?', ar: 'كيف أدفع الرسوم؟' },
      { en: 'We get a certificate at the end.', ar: 'نحصل على شهادة في النهاية.' },
      { en: 'The deadline is next Friday.', ar: 'آخر موعد هو الجمعة القادمة.' },
      { en: 'Classes are on Tuesday and Thursday.', ar: 'الحصص يومي الثلاثاء والخميس.' },
    ],
    mc: [
      { question: 'You want to join a course. What do you do first?', options: ['Register and pay the fee', 'Get the certificate', 'Take the final exam', 'Buy a uniform'], answerIndex: 0, ar: 'تريد الانضمام إلى دورة، ماذا تفعل أولا؟' },
      { question: '"The fee is fifty dollars" means:', options: ['الرسوم خمسون دولارا', 'الدورة خمسون يوما', 'الكتاب خمسون صفحة', 'المستوى خمسون درجة'], answerIndex: 0, ar: 'ما معنى The fee is fifty dollars؟' },
      { question: 'What do you receive at the end of the course?', options: ['A certificate', 'A uniform', 'A passport', 'A ticket'], answerIndex: 0, ar: 'ماذا تستلم في نهاية الدورة؟' },
      { question: '"Deadline" means:', options: ['آخر موعد للتسجيل', 'رسوم الدورة', 'مستوى متقدم', 'جدول الحصص'], answerIndex: 0, ar: 'ما معنى deadline؟' },
      { question: 'Which level is right for new students?', options: ['Beginner', 'Advanced', 'Final', 'Office'], answerIndex: 0, ar: 'أي مستوى يناسب الطلاب الجدد؟' },
    ],
  },

  /* ================= lesson 198 — Asking a Teacher Questions ================= */
  {
    num: 198,
    tags: ['education', 'classroom-questions'],
    objectives: [
      'Ask the teacher to explain something again',
      'Ask about word meanings and pronunciation',
      'Politely request help during class',
    ],
    grammar: {
      explanation: 'Polite questions in class often start with "Could you ...?": "Could you explain that again, please?" Add "please" to sound polite. Ask about meaning with "What does this word mean?" and about pronunciation with "How do I pronounce it?". Say "I do not understand" to explain a problem, and answer politely with "Of course" or "Sure".',
      explanationAr: 'تبدأ الأسئلة المهذبة في الصف بـ Could you: Could you explain that again, please؟ وأضف please لتكون أكثر تهذيبا. اسأل عن المعنى بـ What does this word mean؟ وعن النطق بـ How do I pronounce it؟ قل I do not understand لبيان المشكلة، وأجب بتأدب بـ Of course أو Sure.',
      examples: [
        { en: 'Could you explain that again, please?', ar: 'هل توضح ذلك مرة أخرى من فضلك؟' },
        { en: 'What does this word mean?', ar: 'ماذا تعني هذه الكلمة؟' },
        { en: 'How do I pronounce it?', ar: 'كيف أنطقها؟' },
      ],
    },
    vocabulary: [
      { word: 'question', meaningAr: 'سؤال', example: 'I have one question, please.' },
      { word: 'explain', meaningAr: 'يشرح', example: 'Can you explain the rule again?' },
      { word: 'mean', meaningAr: 'يعني', example: 'What does this sentence mean?' },
      { word: 'pronounce', meaningAr: 'ينطق', example: 'How do you pronounce this name?' },
      { word: 'repeat', meaningAr: 'يكرر', example: 'Could you repeat the answer?' },
      { word: 'understand', meaningAr: 'يفهم', example: 'Now I understand the lesson.' },
      { word: 'rule', meaningAr: 'قاعدة', example: 'This grammar rule is easy.' },
      { word: 'correct', meaningAr: 'صحيح', example: 'Your answer is correct.' },
      { word: 'slowly', meaningAr: 'ببطء', example: 'Please read the sentence slowly.' },
      { word: 'example', meaningAr: 'مثال', example: 'The teacher gave a clear example.' },
      { word: 'spelling', meaningAr: 'تهجئة', example: 'Let me check the spelling.' },
    ],
    scenario: [
      { en: 'Excuse me, may I ask a question?', ar: 'عفوا، هل يمكنني طرح سؤال؟', d: 1 },
      { en: 'Could you explain that again, please?', ar: 'هل توضح ذلك مرة أخرى من فضلك؟', d: 1 },
      { en: 'Sure, I will explain it again.', ar: 'بالتأكيد، سأشرحه مرة أخرى.', d: 1 },
      { en: 'What does this new word mean?', ar: 'ماذا تعني هذه الكلمة الجديدة؟', d: 1 },
      { en: 'It means very big in Arabic.', ar: 'تعني كبير جدا بالعربية.', d: 1 },
      { en: 'How do I pronounce it?', ar: 'كيف أنطقها؟', d: 1 },
      { en: 'You pronounce it like this.', ar: 'تنطقها هكذا.', d: 2 },
      { en: 'Sorry, I do not understand this rule.', ar: 'عذرا، لا أفهم هذه القاعدة.', d: 2 },
      { en: 'The teacher will explain the rule tomorrow.', ar: 'سيشرح المعلم القاعدة غدا.', d: 2 },
      { en: 'Could you speak more slowly, please?', ar: 'هل تتكلم ببطء أكثر من فضلك؟', d: 2 },
      { en: 'Is my answer correct?', ar: 'هل جوابي صحيح؟', d: 1 },
      { en: 'How do you spell this word?', ar: 'كيف تهجئ هذه الكلمة؟', d: 2 },
      { en: 'We do not have any questions today.', ar: 'ليست لدينا أي أسئلة اليوم.', d: 2 },
      { en: 'The students ask many questions in class.', ar: 'الطلاب يطرحون أسئلة كثيرة في الصف.', d: 2 },
      { en: 'Please answer my question after the break.', ar: 'أجب عن سؤالي بعد الاستراحة من فضلك.', d: 2 },
      { en: 'Can I ask you something, teacher?', ar: 'هل يمكنني أن أسألك شيئا يا أستاذ؟', d: 1 },
      { en: 'Of course, what is it?', ar: 'بالتأكيد، ما هو؟', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'Could you {A}, please?', arTmpl: 'هل يمكنك {A_ar} من فضلك؟',
        slots: {
          A: [
            { en: 'explain that again', ar: 'توضيح ذلك مرة أخرى' },
            { en: 'repeat the question', ar: 'تكرار السؤال' },
            { en: 'say it slowly', ar: 'قولها ببطء' },
            { en: 'write it on the board', ar: 'كتابتها على السبورة' },
            { en: 'give us an example', ar: 'إعطائنا مثالا' },
            { en: 'help me with this exercise', ar: 'مساعدتي في هذا التمرين' },
          ],
        },
        tags: ['classroom-questions', 'polite'], d: 1, limit: 6,
      },
      {
        tmpl: '{T} {S}, please.', arTmpl: '{T_ar} {S_ar} من فضلك.',
        slots: {
          T: [
            { en: 'Explain', ar: 'اشرح' }, { en: 'Repeat', ar: 'كرر' },
            { en: 'Read', ar: 'اقرأ' }, { en: 'Translate', ar: 'ترجم' },
            { en: 'Write', ar: 'اكتب' },
          ],
          S: [
            { en: 'the sentence', ar: 'الجملة' }, { en: 'the word', ar: 'الكلمة' },
            { en: 'the answer', ar: 'الجواب' }, { en: 'the new words', ar: 'الكلمات الجديدة' },
          ],
        },
        tags: ['classroom-questions', 'imperative'], d: 1, limit: 20,
      },
      {
        tmpl: 'What does {W} mean?', arTmpl: 'ماذا تعني {W_ar}؟',
        slots: {
          W: [
            { en: 'this new word', ar: 'هذه الكلمة الجديدة' }, { en: 'that sentence', ar: 'تلك الجملة' },
            { en: 'this verb', ar: 'هذا الفعل' }, { en: 'this phrase', ar: 'هذه العبارة' },
            { en: 'that expression', ar: 'ذلك التعبير' },
          ],
        },
        tags: ['classroom-questions', 'vocabulary'], d: 1, limit: 5,
      },
      {
        tmpl: 'How do I pronounce {W}?', arTmpl: 'كيف أنطق {W_ar}؟',
        slots: {
          W: [
            { en: 'this word', ar: 'هذه الكلمة' }, { en: 'this name', ar: 'هذا الاسم' },
            { en: 'this letter', ar: 'هذا الحرف' }, { en: 'this number', ar: 'هذا الرقم' },
          ],
        },
        tags: ['classroom-questions', 'pronunciation'], d: 2, limit: 4,
      },
      {
        tmpl: 'I do not understand {X}.', arTmpl: 'لا أفهم {X_ar}.',
        slots: {
          X: [
            { en: 'this rule', ar: 'هذه القاعدة' }, { en: 'this exercise', ar: 'هذا التمرين' },
            { en: 'the example', ar: 'المثال' }, { en: 'this lesson', ar: 'هذا الدرس' },
          ],
        },
        tags: ['classroom-questions', 'negative'], d: 2, limit: 4,
      },
    ],
    fills: [
      { en: 'Could you explain that again, please?', ar: 'هل توضح ذلك مرة أخرى من فضلك؟', word: 'explain', hint: 'يشرح' },
      { en: 'What does this new word mean?', ar: 'ماذا تعني هذه الكلمة الجديدة؟', word: 'mean', hint: 'يعني' },
      { en: 'How do I pronounce it?', ar: 'كيف أنطقها؟', word: 'pronounce' },
      { en: 'I do not understand this rule.', ar: 'لا أفهم هذه القاعدة.', word: 'rule' },
      { en: 'Is my answer correct?', ar: 'هل جوابي صحيح؟', word: 'correct' },
      { en: 'Could you repeat the question, please?', ar: 'هل تكرر السؤال من فضلك؟', word: 'repeat' },
      { en: 'The students ask many questions in class.', ar: 'الطلاب يطرحون أسئلة كثيرة في الصف.', word: 'questions' },
      { en: 'Please write it on the board.', ar: 'اكتبها على السبورة من فضلك.', word: 'board' },
    ],
    orders: [
      { en: 'Excuse me, may I ask a question?', ar: 'عفوا، هل يمكنني طرح سؤال؟' },
      { en: 'Could you explain that again, please?', ar: 'هل توضح ذلك مرة أخرى من فضلك؟' },
      { en: 'What does this new word mean?', ar: 'ماذا تعني هذه الكلمة الجديدة؟' },
      { en: 'How do I pronounce it?', ar: 'كيف أنطقها؟' },
      { en: 'I do not understand this grammar rule.', ar: 'لا أفهم هذه القاعدة النحوية.' },
      { en: 'The students ask many questions in class.', ar: 'الطلاب يطرحون أسئلة كثيرة في الصف.' },
    ],
    mc: [
      { question: 'You did not hear the teacher. You say:', options: ['Could you repeat that, please?', 'I am leaving now.', 'The lesson is over.', 'Open your books.'], answerIndex: 0, ar: 'لم تسمع المعلم، فتقول:' },
      { question: 'What do you ask about the meaning of a word?', options: ['What does this word mean?', 'How old are you?', 'Where is the bus?', 'What time is it?'], answerIndex: 0, ar: 'ماذا تسأل لمعرفة معنى كلمة؟' },
      { question: '"Pronounce" means:', options: ['ينطق', 'يكتب', 'يترجم', 'يقرأ'], answerIndex: 0, ar: 'ما معنى pronounce؟' },
      { question: 'Which is the most polite request?', options: ['Could you explain that again, please?', 'Explain again!', 'You explain now.', 'Explain, why not?'], answerIndex: 0, ar: 'أي الطلبات أكثر تهذيبا؟' },
      { question: 'The teacher writes new words on the ___.', options: ['board', 'window', 'chair', 'menu'], answerIndex: 0, ar: 'يكتب المعلم الكلمات الجديدة على ___.', explanation: 'The board is the big surface at the front of the classroom.' },
    ],
  },

  /* ================= lesson 199 — Exams ================= */
  {
    num: 199,
    tags: ['education', 'exams'],
    objectives: [
      'Talk about preparing for final exams',
      'Use exam words: pass, fail, marks, results',
      'Discuss exam rules and hopes with modals and if-clauses',
    ],
    grammar: {
      explanation: 'Before an exam you "study for it" or "review the lessons". Use present perfect for preparation until now: "She has already reviewed all the chapters". Use modals for rules and hopes: "You must bring your student card", "I hope I pass". If-clauses talk about results: "If you study hard, you will pass". "Pass" means succeed; "fail" means not succeed. The "results" are the marks you receive later.',
      explanationAr: 'قبل الامتحان تدرس له أو تراجع الدروس. استخدم المضارع التام للتحضير حتى الآن: She has already reviewed all the chapters. واستخدم الأفعال الناقصة للقواعد والآمال: You must bring your student card، I hope I pass. وجمل الشرط تتحدث عن النتائج: If you study hard, you will pass. كلمة pass تعني ينجح وfail تعني يرسب، أما results فهي الدرجات التي تصلك لاحقا.',
      examples: [
        { en: 'I have been studying for the final exam all week.', ar: 'أدرس للامتحان النهائي طوال الأسبوع.' },
        { en: 'If you study hard, you will pass.', ar: 'إذا درست بجد فسوف تنجح.' },
        { en: 'The results come out on Monday.', ar: 'تظهر النتائج يوم الاثنين.' },
      ],
    },
    vocabulary: [
      { word: 'final exam', meaningAr: 'الامتحان النهائي', example: 'The final exam covers five chapters.' },
      { word: 'pass', meaningAr: 'ينجح', example: 'I hope you pass the test.' },
      { word: 'fail', meaningAr: 'يرسب', example: 'Do not be afraid to fail once.' },
      { word: 'mark', meaningAr: 'درجة', example: 'She got the highest mark.' },
      { word: 'results', meaningAr: 'النتائج', example: 'The results arrive by email.' },
      { word: 'multiple-choice', meaningAr: 'اختيار من متعدد', example: 'Half the exam is multiple-choice.' },
      { word: 'review', meaningAr: 'يراجع', example: 'We reviewed the vocabulary together.' },
      { word: 'revise', meaningAr: 'يعيد القراءة للمراجعة', example: 'I will revise the notes tonight.' },
      { word: 'grade', meaningAr: 'صف / درجة', example: 'He is in grade eleven.' },
      { word: 'student card', meaningAr: 'بطاقة الطالب', example: 'Bring your student card to the exam.' },
      { word: 'schedule', meaningAr: 'جدول الامتحانات', example: 'The exam schedule is on the wall.' },
      { word: 'nervous', meaningAr: 'متوتر', example: 'Try to stay calm, not nervous.' },
    ],
    scenario: [
      { en: 'I have been studying for the final exam all week.', ar: 'أدرس للامتحان النهائي طوال الأسبوع.', d: 2 },
      { en: 'The final exam starts on Monday at nine.', ar: 'يبدأ الامتحان النهائي يوم الاثنين في التاسعة.', d: 1 },
      { en: 'If you study hard, you will pass.', ar: 'إذا درست بجد فسوف تنجح.', d: 2 },
      { en: 'I hope I pass the exam.', ar: 'أتمنى أن أنجح في الامتحان.', d: 1 },
      { en: 'She has already reviewed all the chapters.', ar: 'لقد راجعت جميع الفصول بالفعل.', d: 2 },
      { en: 'You can try again if you fail.', ar: 'يمكنك المحاولة مرة أخرى إذا رسبت.', d: 2 },
      { en: 'The exam has fifty multiple-choice questions.', ar: 'في الامتحان خمسون سؤال اختيار من متعدد.', d: 2 },
      { en: 'Did you answer all the questions?', ar: 'هل أجبت عن جميع الأسئلة؟', d: 2 },
      { en: 'No, I left two questions empty.', ar: 'لا، تركت سؤالين فارغين.', d: 2 },
      { en: 'We must bring our student cards.', ar: 'يجب أن نحضر بطاقات الطلاب.', d: 2 },
      { en: 'Have you checked the exam schedule?', ar: 'هل تحققت من جدول الامتحانات؟', d: 2 },
      { en: 'The results come out on Monday.', ar: 'تظهر النتائج يوم الاثنين.', d: 1 },
      { en: 'I am not worried about the history exam.', ar: 'لست قلقا بشأن امتحان التاريخ.', d: 2 },
      { en: 'He failed the math exam last year.', ar: 'رسب في امتحان الرياضيات السنة الماضية.', d: 2 },
      { en: 'This year he will pass, I am sure.', ar: 'سينجح هذه السنة، أنا متأكد.', d: 2 },
      { en: 'Please put your phones away before the exam.', ar: 'ضعوا هواتفكم بعيدا قبل الامتحان من فضلكم.', d: 2 },
      { en: 'What time does the exam finish?', ar: 'متى ينتهي الامتحان؟', d: 1 },
      { en: 'It finishes at eleven.', ar: 'ينتهي في الحادية عشرة.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'I have to study for the {E} exam.', arTmpl: 'عليّ أن أدرس لامتحان {E_ar}.',
        slots: {
          E: [
            { en: 'math', ar: 'الرياضيات' }, { en: 'history', ar: 'التاريخ' },
            { en: 'English', ar: 'الإنجليزية' }, { en: 'science', ar: 'العلوم' },
            { en: 'geography', ar: 'الجغرافيا' },
          ],
        },
        tags: ['exams', 'modal'], d: 1, limit: 5,
      },
      {
        tmpl: 'If you {V}, you will pass.', arTmpl: 'إذا {V_ar} فسوف تنجح.',
        slots: {
          V: [
            { en: 'study hard', ar: 'درست بجد' }, { en: 'review the lessons', ar: 'راجعت الدروس' },
            { en: 'practice every day', ar: 'تدربت كل يوم' }, { en: 'sleep well before it', ar: 'نمت جيدا قبله' },
          ],
        },
        tags: ['exams', 'if-clauses'], d: 2, limit: 4,
      },
      {
        tmpl: 'The results come out on {D}.', arTmpl: 'تظهر النتائج يوم {D_ar}.',
        slots: { D: B.DAYS },
        tags: ['exams', 'time'], d: 1, limit: 7,
      },
      {
        tmpl: '{S} {V} in the {E} exam.', arTmpl: '{S_ar} {V_ar} في امتحان {E_ar}.',
        slots: {
          S: [
            { en: 'He', ar: 'هو', agr: 'he' }, { en: 'She', ar: 'هي', agr: 'she' },
            { en: 'My brother', ar: 'أخي', agr: 'he' }, { en: 'My sister', ar: 'أختي', agr: 'she' },
            { en: 'My cousin', ar: 'ابن عمي', agr: 'he' },
          ],
          V: (x) => [{ en: 'has already passed', ar: x.S.agr === 'she' ? 'لقد نجحت بالفعل' : 'لقد نجح بالفعل' }],
          E: [
            { en: 'English', ar: 'الإنجليزية' }, { en: 'math', ar: 'الرياضيات' },
            { en: 'science', ar: 'العلوم' }, { en: 'history', ar: 'التاريخ' },
          ],
        },
        tags: ['exams', 'present-perfect'], d: 2, limit: 20,
      },
      {
        tmpl: 'We must {V} before the exam.', arTmpl: 'يجب أن {V_ar} قبل الامتحان.',
        slots: {
          V: [
            { en: 'bring our ID cards', ar: 'نحضر بطاقاتنا' },
            { en: 'turn off our phones', ar: 'نطفئ هواتفنا' },
            { en: 'arrive early', ar: 'نصل مبكرين' },
            { en: 'review our notes', ar: 'نراجع ملاحظاتنا' },
          ],
        },
        tags: ['exams', 'modal'], d: 2, limit: 4,
      },
    ],
    fills: [
      { en: 'I have been studying for the final exam all week.', ar: 'أدرس للامتحان النهائي طوال الأسبوع.', word: 'final' },
      { en: 'The exam has fifty multiple-choice questions.', ar: 'في الامتحان خمسون سؤال اختيار من متعدد.', word: 'multiple-choice' },
      { en: 'The results come out on Monday.', ar: 'تظهر النتائج يوم الاثنين.', word: 'results' },
      { en: 'I hope I pass the exam.', ar: 'أتمنى أن أنجح في الامتحان.', word: 'pass' },
      { en: 'We must bring our student cards.', ar: 'يجب أن نحضر بطاقات الطلاب.', word: 'must', hint: 'فعل ناقص' },
      { en: 'She failed the math exam last year.', ar: 'رسبت في امتحان الرياضيات السنة الماضية.', word: 'failed' },
      { en: 'If you study hard, you will pass.', ar: 'إذا درست بجد فسوف تنجح.', word: 'hard' },
      { en: 'Have you checked the exam schedule?', ar: 'هل تحققت من جدول الامتحانات؟', word: 'schedule' },
    ],
    orders: [
      { en: 'I have been studying for the final exam all week.', ar: 'أدرس للامتحان النهائي طوال الأسبوع.' },
      { en: 'I hope I pass the exam.', ar: 'أتمنى أن أنجح في الامتحان.' },
      { en: 'The results come out on Monday.', ar: 'تظهر النتائج يوم الاثنين.' },
      { en: 'You can try again if you fail.', ar: 'يمكنك المحاولة مرة أخرى إذا رسبت.' },
      { en: 'The exam has fifty multiple-choice questions.', ar: 'في الامتحان خمسون سؤال اختيار من متعدد.' },
      { en: 'We must arrive early on exam day.', ar: 'يجب أن نصل مبكرين يوم الامتحان.' },
    ],
    mc: [
      { question: 'If a student passes an exam, he ___.', options: ['succeeds', 'fails', 'sleeps', 'writes'], answerIndex: 0, ar: 'إذا نجح طالب في امتحان فهو ___.' },
      { question: 'How many answer choices does a multiple-choice question have?', options: ['Three or four', 'Only one word', 'Ten pages', 'No choices'], answerIndex: 0, ar: 'كم خيارا في سؤال الاختيار من متعدد؟' },
      { question: '"The results come out on Monday" means:', options: ['تظهر النتائج يوم الاثنين', 'يبدأ الامتحان يوم الاثنين', 'نغيب يوم الاثنين', 'نراجع الدروس يوم الاثنين'], answerIndex: 0, ar: 'ما معنى The results come out on Monday؟' },
      { question: 'What should you do before the final exam?', options: ['Review the lessons and sleep well', 'Watch TV all night', 'Forget the schedule', 'Leave the questions empty'], answerIndex: 0, ar: 'ماذا ينبغي أن تفعل قبل الامتحان النهائي؟' },
      { question: '"Fail" is the opposite of ___.', options: ['pass', 'study', 'write', 'read'], answerIndex: 0, ar: 'ما عكس fail؟' },
    ],
  },
];
