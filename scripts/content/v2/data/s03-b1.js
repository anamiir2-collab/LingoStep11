/* ============================================================
   v2 section data — s03-b1.js
   Home & Family · lessons 59–62
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

/* ---------- shared module banks ---------- */

/* children for routine patterns (agr drives conjugation) */
const KIDS = [
  { en: 'my son', ar: 'ابني', agr: 'he' }, { en: 'my daughter', ar: 'ابنتي', agr: 'she' },
  { en: 'the baby', ar: 'الطفل', agr: 'he' }, { en: 'my little sister', ar: 'أختي الصغيرة', agr: 'she' },
  { en: 'my kids', ar: 'أطفالي', agr: 'they' }, { en: 'my children', ar: 'أبنائي', agr: 'they' },
];

/* ready-for-school subjects (drop the baby) */
const SCHOOL_KIDS = KIDS.filter((k) => k.en !== 'the baby');

/* homework doers (singular + plural) */
const HW_KIDS = [KIDS[0], KIDS[1], KIDS[4], KIDS[5]];

/* second-person kids for does-questions (singular only) */
const YOUR_KIDS = [
  { en: 'your son', ar: 'ابنك', agr: 'he' }, { en: 'your daughter', ar: 'ابنتك', agr: 'she' },
  { en: 'your baby', ar: 'طفلك', agr: 'he' }, { en: 'your little brother', ar: 'أخوك الصغير', agr: 'he' },
];

export const lessons = [

  /* ================= lesson 59 — Children's Daily Routines ================= */
  {
    num: 59,
    tags: ['routines', 'family', 'present-simple'],
    objectives: [
      'Describe what children do every morning and evening',
      'Ask questions about a child\'s routine',
      'Use past simple and will for bedtime moments',
    ],
    grammar: {
      explanation: 'To talk about what children do every day, use the present simple: "He wakes up early", "They brush their teeth". Add -s or -es for he, she and it. Ask questions with do or does: "Does your son go to bed at nine?". For one finished action use the past simple: "The baby went to bed at eight". For tonight or soon use will or going to: "I will read a story tonight". Keep routine sentences short, clear and positive.',
      explanationAr: 'للحديث عما يفعله الأطفال كل يوم استخدم المضارع البسيط: He wakes up early، They brush their teeth. أضف s أو es مع he وshe وit. وللسؤال استخدم do أو does: Does your son go to bed at nine؟ ولحدث واحد منتهٍ استخدم الماضي البسيط: The baby went to bed at eight. وللحديث عن الليلة أو المستقبل القريب استخدم will أو going to: I will read a story tonight.',
      examples: [
        { en: 'My son wakes up early.', ar: 'يفيق ابني مبكرا.' },
        { en: 'Does your daughter do her homework?', ar: 'هل تعمل ابنتك واجبها؟' },
        { en: 'The baby went to bed at eight.', ar: 'نام الطفل في الثامنة.' },
      ],
    },
    vocabulary: [
      { word: 'wake up', meaningAr: 'يستيقظ', example: 'The kids wake up at six.', ipa: 'weɪk ʌp' },
      { word: 'early', meaningAr: 'مبكرا', example: 'She wakes up early every day.' },
      { word: 'get ready', meaningAr: 'يستعد', example: 'He gets ready for school.' },
      { word: 'get dressed', meaningAr: 'يلبس ملابسه', example: 'Get dressed quickly, please.' },
      { word: 'brush', meaningAr: 'ينظف بفرشاة الأسنان', example: 'Brush your teeth after breakfast.' },
      { word: 'do homework', meaningAr: 'يعمل الواجب المنزلي', example: 'I do homework after school.' },
      { word: 'bedtime story', meaningAr: 'قصة قبل النوم', example: 'Grandma reads a bedtime story.' },
      { word: 'take a bath', meaningAr: 'يستحم', example: 'The baby takes a bath before bed.' },
      { word: 'go to bed', meaningAr: 'يذهب إلى الفراش', example: 'Children go to bed at nine.' },
      { word: 'nap', meaningAr: 'قيلولة', example: 'The baby takes a nap at noon.' },
      { word: 'cartoon', meaningAr: 'كرتون', example: 'The kids watch cartoons on Friday.' },
      { word: 'tired', meaningAr: 'متعب', example: 'The children are tired at night.' },
    ],
    scenario: [
      { en: 'My son wakes up early.', ar: 'يفيق ابني مبكرا.', d: 1 },
      { en: 'He gets ready for school quickly.', ar: 'يستعد للمدرسة بسرعة.', d: 1 },
      { en: 'The children brush their teeth every morning.', ar: 'ينظف الأطفال أسنانهم كل صباح.', d: 1 },
      { en: 'My daughter gets dressed by herself.', ar: 'تلبس ابنتي ملابسها بنفسها.', d: 2 },
      { en: 'Do the kids wake up early?', ar: 'هل يفيق الأطفال مبكرا؟', d: 1 },
      { en: 'Yes, they wake up at six.', ar: 'نعم، يفيقون في السادسة.', d: 1 },
      { en: 'The baby takes a nap after lunch.', ar: 'ينام الطفل قيلولة بعد الغداء.', d: 1 },
      { en: 'My daughter does her homework after dinner.', ar: 'تعمل ابنتي واجبها بعد العشاء.', d: 1 },
      { en: 'He does not like homework.', ar: 'لا يحب الواجب.', d: 1 },
      { en: 'Grandma tells a bedtime story every night.', ar: 'تحكي الجدة قصة قبل النوم كل ليلة.', d: 2 },
      { en: 'The kids watch cartoons on Friday.', ar: 'يشاهد الأطفال الكرتون يوم الجمعة.', d: 2 },
      { en: 'Will you read a story tonight?', ar: 'هل ستقرأ قصة الليلة؟', d: 2 },
      { en: 'I am going to read two stories tonight.', ar: 'سأقرأ قصتين الليلة.', d: 2 },
      { en: 'The baby went to bed at eight.', ar: 'نام الطفل في الثامنة.', d: 1 },
      { en: 'Please wake your brother up.', ar: 'أيقظ أخاك من فضلك.', d: 2 },
      { en: 'They are not ready for school yet.', ar: 'هم ليسوا مستعدين للمدرسة بعد.', d: 2 },
      { en: 'What time does your son go to bed?', ar: 'متى يذهب ابنك إلى الفراش؟', d: 2 },
      { en: 'He goes to bed at nine on school days.', ar: 'يذهب إلى الفراش في التاسعة في أيام المدرسة.', d: 2 },
    ],
    patterns: [
      {
        tmpl: '{K} {V} at {T}.', arTmpl: '{K_ar} {V_ar} في {T_ar}.',
        slots: {
          K: KIDS,
          V: (x) => ['wake', 'sleep'].map((v) => ({ en: B.enPresent(v, x.K.agr), ar: B.arPresent(v, x.K.agr) })),
          T: [
            { en: 'six', ar: 'السادسة' }, { en: 'seven', ar: 'السابعة' },
            { en: 'eight', ar: 'الثامنة' },
          ],
        },
        tags: ['routines', 'present-simple'], d: 1, limit: 20,
      },
      {
        tmpl: '{K} {R} for school before {T}.', arTmpl: '{K_ar} {R_ar} للمدرسة قبل {T_ar}.',
        slots: {
          K: SCHOOL_KIDS,
          R: (x) => [{
            en: (x.K.agr === 'he' || x.K.agr === 'she') ? 'gets ready' : 'get ready',
            ar: { he: 'يستعد', she: 'تستعد', they: 'يستعدون' }[x.K.agr],
          }],
          T: [
            { en: 'seven', ar: 'السابعة' }, { en: 'seven thirty', ar: 'السابعة والنصف' },
            { en: 'eight', ar: 'الثامنة' },
          ],
        },
        tags: ['routines', 'present-simple'], d: 1, limit: 12,
      },
      {
        tmpl: '{K} {DO} {HW} after school.', arTmpl: '{K_ar} {DO_ar} {HW_ar} بعد المدرسة.',
        slots: {
          K: HW_KIDS,
          DO: (x) => [{
            en: (x.K.agr === 'he' || x.K.agr === 'she') ? 'does' : 'do',
            ar: { he: 'يعمل', she: 'تعمل', they: 'يعملون' }[x.K.agr],
          }],
          HW: (x) => [{
            en: { he: 'his homework', she: 'her homework', they: 'their homework' }[x.K.agr],
            ar: { he: 'واجبه', she: 'واجبها', they: 'واجبهم' }[x.K.agr],
          }],
        },
        tags: ['routines', 'homework'], d: 1, limit: 4,
      },
      {
        tmpl: 'Does {K} {V} at {T}?', arTmpl: 'هل {V_ar} {K_ar} في {T_ar}؟',
        slots: {
          K: YOUR_KIDS,
          V: (x) => [
            { en: 'wake up', ar: x.K.agr === 'she' ? 'تستيقظ' : 'يستيقظ' },
            { en: 'go to bed', ar: x.K.agr === 'she' ? 'تذهب إلى الفراش' : 'يذهب إلى الفراش' },
            { en: 'sleep', ar: x.K.agr === 'she' ? 'تنام' : 'ينام' },
          ],
          T: [
            { en: 'six', ar: 'السادسة' }, { en: 'seven', ar: 'السابعة' },
            { en: 'eight', ar: 'الثامنة' }, { en: 'nine', ar: 'التاسعة' },
          ],
        },
        tags: ['routines', 'questions'], d: 2, limit: 16,
      },
      {
        tmpl: '{K} love stories about {A}.', arTmpl: 'يحب {K_ar} قصصا عن {A_ar}.',
        slots: {
          K: [
            { en: 'the kids', ar: 'الأطفال' }, { en: 'the children', ar: 'الأطفال' },
            { en: 'her grandchildren', ar: 'أحفادها' }, { en: 'the boys', ar: 'الأولاد' },
          ],
          A: [
            { en: 'a clever rabbit', ar: 'أرنب ماكر' }, { en: 'a brave lion', ar: 'أسد شجاع' },
            { en: 'a little bird', ar: 'عصفور صغير' }, { en: 'a kind woodcutter', ar: 'حطاب طيب' },
            { en: 'two sisters', ar: 'أختين' },
          ],
        },
        tags: ['routines', 'bedtime'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'My son wakes up early.', ar: 'يفيق ابني مبكرا.', word: 'wakes up', hint: 'روتين' },
      { en: 'The children brush their teeth every morning.', ar: 'ينظف الأطفال أسنانهم كل صباح.', word: 'teeth' },
      { en: 'He does not like homework.', ar: 'لا يحب الواجب.', word: 'homework' },
      { en: 'Grandma tells a bedtime story every night.', ar: 'تحكي الجدة قصة قبل النوم كل ليلة.', word: 'bedtime' },
      { en: 'The baby went to bed at eight.', ar: 'نام الطفل في الثامنة.', word: 'went', hint: 'ماضي' },
      { en: 'Will you read a story tonight?', ar: 'هل ستقرأ قصة الليلة؟', word: 'tonight' },
      { en: 'They are not ready for school yet.', ar: 'هم ليسوا مستعدين للمدرسة بعد.', word: 'ready' },
      { en: 'What time does your son go to bed?', ar: 'متى يذهب ابنك إلى الفراش؟', word: 'time' },
    ],
    orders: [
      { en: 'My daughter gets dressed by herself.', ar: 'تلبس ابنتي ملابسها بنفسها.' },
      { en: 'The baby takes a nap after lunch.', ar: 'ينام الطفل قيلولة بعد الغداء.' },
      { en: 'Please wake your brother up.', ar: 'أيقظ أخاك من فضلك.' },
      { en: 'Do the kids wake up early?', ar: 'هل يفيق الأطفال مبكرا؟' },
      { en: 'He goes to bed at nine on school days.', ar: 'يذهب إلى الفراش في التاسعة في أيام المدرسة.' },
      { en: 'We read to the children every evening.', ar: 'نقرأ للأطفال كل مساء.' },
    ],
    mc: [
      { question: 'What does "bedtime story" mean?', options: ['قصة قبل النوم', 'كرتون', 'واجب منزلي', 'قيلولة'], answerIndex: 0, ar: 'ما معنى bedtime story؟' },
      { question: 'The children brush their ___.', options: ['teeth', 'hair', 'hands', 'bags'], answerIndex: 0, ar: 'يكمل الفراغ: ينظف الأطفال أسنانهم.' },
      { question: 'Your son is sleepy at nine. He should:', options: ['go to bed', 'do homework', 'wake up', 'watch a cartoon'], answerIndex: 0, ar: 'ابنك نعسان في التاسعة، فعليه أن:' },
      { question: 'Which sentence is correct?', options: ['He wakes up early.', 'He wake up early.', 'He waking up early.', 'He wakes early up.'], answerIndex: 0, ar: 'أي جملة صحيحة؟' },
      { question: '"Nap" means:', options: ['قيلولة', 'فطور', 'لعبة', 'امتحان'], answerIndex: 0, ar: 'ما معنى nap؟' },
    ],
  },

  /* ================= lesson 60 — School and Homework ================= */
  {
    num: 60,
    tags: ['school', 'homework', 'past-simple'],
    objectives: [
      'Talk about school subjects and your backpack',
      'Ask and answer questions about homework and exams',
      'Use past simple and will for study plans',
    ],
    grammar: {
      explanation: 'School talk uses the present simple for facts and habits: "We study math on Monday", "She walks to school". Ask with do or does: "How many subjects do you have?". Use the past simple for finished actions: "We studied for the test yesterday", "She got a good mark". Use will for plans and promises: "I will study tonight". Remember: after does, did and will use the base form of the verb.',
      explanationAr: 'يستخدم المضارع البسيط للحديث عن المدرسة وعاداتها: We study math on Monday، She walks to school. اسأل بـ do أو does: How many subjects do you have؟ واستخدم الماضي البسيط للأفعال المنتهية: We studied for the test yesterday، She got a good mark. واستخدم will للخطط والوعود: I will study tonight. وتذكر: بعد does وdid وwill استخدم صيغة الفعل الأصلية.',
      examples: [
        { en: 'My backpack is heavy today.', ar: 'حقيبة الظهر ثقيلة اليوم.' },
        { en: 'We studied for the test yesterday.', ar: 'راجعنا للاختبار أمس.' },
        { en: 'I will study with my cousin tonight.', ar: 'سأراجع مع ابن عمي الليلة.' },
      ],
    },
    vocabulary: [
      { word: 'backpack', meaningAr: 'حقيبة ظهر', example: 'My backpack is heavy today.', ipa: 'bækpæk' },
      { word: 'subject', meaningAr: 'مادة دراسية', example: 'Math is my favorite subject.' },
      { word: 'teacher', meaningAr: 'معلم', example: 'The teacher explains the lesson.' },
      { word: 'exam', meaningAr: 'امتحان', example: 'The English exam is on Tuesday.' },
      { word: 'test', meaningAr: 'اختبار', example: 'We have a test on Thursday.' },
      { word: 'study', meaningAr: 'يدرس / يراجع', example: 'Study for the test tonight.' },
      { word: 'homework', meaningAr: 'واجب منزلي', example: 'Do your homework every day.' },
      { word: 'question', meaningAr: 'سؤال', example: 'Ask your teacher a question.' },
      { word: 'answer', meaningAr: 'جواب', example: 'I know the answer.' },
      { word: 'mark', meaningAr: 'علامة', example: 'She got a good mark.' },
      { word: 'learn', meaningAr: 'يتعلم', example: 'I learn new words every day.' },
      { word: 'forget', meaningAr: 'ينسى', example: 'Do not forget your books.' },
    ],
    scenario: [
      { en: 'I put my books in my backpack.', ar: 'أضع كتبي في حقيبة الظهر.', d: 1 },
      { en: 'My backpack is new and blue.', ar: 'حقيبة الظهر جديدة وزرقاء.', d: 1 },
      { en: 'How many subjects do you have?', ar: 'كم مادة لديك؟', d: 1 },
      { en: 'I have six subjects this year.', ar: 'لدي ست مواد هذا العام.', d: 1 },
      { en: 'Which subject is the most difficult?', ar: 'أي مادة هي الأصعب؟', d: 2 },
      { en: 'Math is difficult, but I like it.', ar: 'الرياضيات صعبة لكنني أحبها.', d: 1 },
      { en: 'The teacher explains the lesson slowly.', ar: 'يشرح المعلم الدرس ببطء.', d: 1 },
      { en: 'Do you do your homework every day?', ar: 'هل تعمل واجبك كل يوم؟', d: 1 },
      { en: 'Yes, I do it after dinner.', ar: 'نعم، أعمله بعد العشاء.', d: 1 },
      { en: 'I do not do homework on Friday.', ar: 'لا أعمل الواجب يوم الجمعة.', d: 1 },
      { en: 'We studied for the test yesterday.', ar: 'راجعنا للاختبار أمس.', d: 1 },
      { en: 'Did you study for the test?', ar: 'هل راجعت للاختبار؟', d: 1 },
      { en: 'I will study with my cousin tonight.', ar: 'سأراجع مع ابن عمي الليلة.', d: 2 },
      { en: 'The science exam is on Tuesday.', ar: 'امتحان العلوم يوم الثلاثاء.', d: 1 },
      { en: 'She got a good mark in English.', ar: 'حصلت على علامة جيدة في الإنجليزية.', d: 2 },
      { en: 'Please open your books to page ten.', ar: 'افتحوا كتبكم في صفحة عشرة من فضلك.', d: 1 },
      { en: 'Do not forget your backpack tomorrow.', ar: 'لا تنس حقيبة الظهر غدا.', d: 2 },
      { en: 'My little brother asks many questions.', ar: 'يسأل أخي الصغير أسئلة كثيرة.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'We study {S} on {D}.', arTmpl: 'ندرس {S_ar} يوم {D_ar}.',
        slots: { S: B.SUBJECTS2, D: B.DAYS },
        tags: ['school', 'present-simple'], d: 1, limit: 24,
      },
      {
        tmpl: 'My homework in {S} is {ADJ}.', arTmpl: 'واجبي في {S_ar} {ADJ_ar}.',
        slots: {
          S: B.SUBJECTS2,
          ADJ: [
            { en: 'easy', ar: 'سهل' }, { en: 'difficult', ar: 'صعب' },
            { en: 'long', ar: 'طويل' }, { en: 'fun', ar: 'ممتع' },
          ],
        },
        tags: ['homework', 'adjectives'], d: 2, limit: 16,
      },
      {
        tmpl: 'The {S} exam is on {D}.', arTmpl: 'امتحان {S_ar} يوم {D_ar}.',
        slots: { S: B.SUBJECTS2, D: B.DAYS },
        tags: ['school', 'exams'], d: 1, limit: 24,
      },
      {
        tmpl: '{P} {ST} for the exam last night.', arTmpl: '{P_ar} {ST_ar} للاختبار الليلة الماضية.',
        slots: {
          P: [
            { en: 'My brother', ar: 'أخي', agr: 'he' }, { en: 'My sister', ar: 'أختي', agr: 'she' },
            { en: 'My cousin', ar: 'ابن عمي', agr: 'he' }, { en: 'My parents', ar: 'والداي', agr: 'they' },
          ],
          ST: (x) => [{ en: 'studied', ar: B.arPast('study', x.P.agr) }],
        },
        tags: ['school', 'past-simple'], d: 2, limit: 4,
      },
      {
        tmpl: 'I will study {S} with {W}.', arTmpl: 'سأدرس {S_ar} مع {W_ar}.',
        slots: {
          S: B.SUBJECTS2,
          W: [
            { en: 'my cousin', ar: 'ابن عمي' }, { en: 'my friend', ar: 'صديقي' },
            { en: 'my brother', ar: 'أخي' }, { en: 'my sister', ar: 'أختي' },
          ],
        },
        tags: ['school', 'future'], d: 2, limit: 16,
      },
    ],
    fills: [
      { en: 'I put my books in my backpack.', ar: 'أضع كتبي في حقيبة الظهر.', word: 'backpack' },
      { en: 'How many subjects do you have?', ar: 'كم مادة لديك؟', word: 'subjects', hint: 'مدرسة' },
      { en: 'Math is difficult, but I like it.', ar: 'الرياضيات صعبة لكنني أحبها.', word: 'difficult' },
      { en: 'The teacher explains the lesson slowly.', ar: 'يشرح المعلم الدرس ببطء.', word: 'explains' },
      { en: 'I will study with my cousin tonight.', ar: 'سأراجع مع ابن عمي الليلة.', word: 'study' },
      { en: 'The science exam is on Tuesday.', ar: 'امتحان العلوم يوم الثلاثاء.', word: 'exam' },
      { en: 'Please open your books to page ten.', ar: 'افتحوا كتبكم في صفحة عشرة من فضلك.', word: 'open' },
      { en: 'Do not forget your backpack tomorrow.', ar: 'لا تنس حقيبة الظهر غدا.', word: 'forget' },
    ],
    orders: [
      { en: 'My backpack is new and blue.', ar: 'حقيبة الظهر جديدة وزرقاء.' },
      { en: 'I have six subjects this year.', ar: 'لدي ست مواد هذا العام.' },
      { en: 'Which subject is the most difficult?', ar: 'أي مادة هي الأصعب؟' },
      { en: 'She got a good mark in English.', ar: 'حصلت على علامة جيدة في الإنجليزية.' },
      { en: 'My little brother asks many questions.', ar: 'يسأل أخي الصغير أسئلة كثيرة.' },
      { en: 'I will ask my teacher after class.', ar: 'سأسأل معلمي بعد الحصة.' },
    ],
    mc: [
      { question: 'You carry your books in a ___.', options: ['backpack', 'kettle', 'bucket', 'mirror'], answerIndex: 0, ar: 'تحمل كتبك في ___.' },
      { question: 'What do you do before an exam?', options: ['study for it', 'forget it', 'close it', 'drink it'], answerIndex: 0, ar: 'ماذا تفعل قبل الامتحان؟' },
      { question: '"I will study tonight" means:', options: ['سأراجع الليلة', 'راجعت البارحة', 'أدرس كل يوم', 'لا أدرس أبدا'], answerIndex: 0, ar: 'ما معنى I will study tonight؟' },
      { question: 'Which subject is "الرياضيات"?', options: ['math', 'art', 'music', 'history'], answerIndex: 0, ar: 'أي مادة تعني الرياضيات؟' },
      { question: 'The teacher writes on the ___.', options: ['board', 'plate', 'carpet', 'towel'], answerIndex: 0, ar: 'يكتب المعلم على ___.', },
    ],
  },

  /* ================= lesson 61 — House Rules ================= */
  {
    num: 61,
    tags: ['rules', 'modals', 'imperative'],
    objectives: [
      'State family rules with must and must not',
      'Give polite instructions with imperatives',
      'Ask why a rule exists',
    ],
    grammar: {
      explanation: 'Rules use must for strong obligation: "You must wash your hands". The negative is must not or mustn\'t: "You mustn\'t be loud at night". Questions ask Why must I ...?. Polite rules often use imperatives with please: "Be quiet after ten, please". Must never changes with the subject: "I must", "she must", "they must". Words like always and never show how often a rule applies.',
      explanationAr: 'تُصاغ القواعد بـ must للإلزام القوي: You must wash your hands. والنفي بـ must not أو mustn\'t: You mustn\'t be loud at night. وللسؤال نقول Why must I ...؟ وكثيرا ما تأتي القواعد المهذبة بصيغة الأمر مع please: Be quiet after ten, please. ولا يتغير must مع الفاعل أبدا: I must، she must، they must. وكلمات مثل always وnever تبين مدى تطبيق القاعدة.',
      examples: [
        { en: 'You must clean your room on Friday.', ar: 'يجب أن تنظف غرفتك يوم الجمعة.' },
        { en: 'You must not open the door to strangers.', ar: 'يجب ألا تفتح الباب للغرباء.' },
        { en: 'Why must I go to bed early?', ar: 'لماذا يجب أن أنام مبكرا؟' },
      ],
    },
    vocabulary: [
      { word: 'rule', meaningAr: 'قاعدة', example: 'Every house has rules.' },
      { word: 'must', meaningAr: 'يجب أن', example: 'You must wash your hands.' },
      { word: "mustn't", meaningAr: 'يجب ألا', example: "You mustn't be loud at night." },
      { word: 'tidy', meaningAr: 'مرتب', example: 'Keep your room tidy.' },
      { word: 'mess', meaningAr: 'فوضى', example: 'Do not make a mess.' },
      { word: 'quiet', meaningAr: 'هادئ', example: 'Be quiet after ten.' },
      { word: 'loud', meaningAr: 'عالي الصوت', example: 'The TV is too loud.' },
      { word: 'take off', meaningAr: 'يخلع (الحذاء)', example: 'Take off your shoes, please.' },
      { word: 'turn off', meaningAr: 'يطفئ', example: 'Turn off the lights.' },
      { word: 'always', meaningAr: 'دائما', example: 'Always close the gate.' },
      { word: 'never', meaningAr: 'أبدا', example: 'He never leaves his toys.' },
      { word: 'follow', meaningAr: 'يتبع', example: 'Follow the house rules.' },
    ],
    scenario: [
      { en: 'This is the rule in our house.', ar: 'هذه هي القاعدة في منزلنا.', d: 1 },
      { en: 'You must take off your shoes.', ar: 'يجب أن تخلع حذاءك.', d: 1 },
      { en: 'Please put your shoes near the door.', ar: 'من فضلك ضع حذاءك قرب الباب.', d: 1 },
      { en: 'You must clean your room on Friday.', ar: 'يجب أن تنظف غرفتك يوم الجمعة.', d: 1 },
      { en: 'You must not make a mess in the kitchen.', ar: 'يجب ألا تسبب فوضى في المطبخ.', d: 2 },
      { en: 'Be quiet after ten, please.', ar: 'اهدأ بعد العاشرة من فضلك.', d: 1 },
      { en: 'Why must I go to bed early?', ar: 'لماذا يجب أن أنام مبكرا؟', d: 2 },
      { en: 'Because school starts at seven.', ar: 'لأن المدرسة تبدأ في السابعة.', d: 2 },
      { en: 'You must wash your hands before dinner.', ar: 'يجب أن تغسل يديك قبل العشاء.', d: 1 },
      { en: 'We must not be loud at night.', ar: 'يجب ألا نرفع أصواتنا في الليل.', d: 2 },
      { en: 'You must not watch TV after eleven.', ar: 'يجب ألا تشاهد التلفاز بعد الحادية عشرة.', d: 2 },
      { en: 'Can I watch a cartoon?', ar: 'هل يمكنني مشاهدة كرتون؟', d: 1 },
      { en: 'Yes, but first do your homework.', ar: 'نعم، لكن اعمل واجبك أولا.', d: 2 },
      { en: 'I must call my mother at eight.', ar: 'يجب أن أتصل بأمي في الثامنة.', d: 2 },
      { en: 'You must not open the door to strangers.', ar: 'يجب ألا تفتح الباب للغرباء.', d: 2 },
      { en: 'Did you turn off the lights?', ar: 'هل أطفأت الأنوار؟', d: 2 },
      { en: 'My sister never leaves her toys on the floor.', ar: 'أختي لا تترك ألعابها على الأرض أبدا.', d: 2 },
      { en: 'Always close the gate behind you.', ar: 'أغلق البوابة خلفك دائما.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'You must {V} in this house.', arTmpl: 'يجب أن {V_ar} في هذا المنزل.',
        slots: {
          V: [
            { en: 'take off your shoes', ar: 'تخلع حذاءك' }, { en: 'wash your hands', ar: 'تغسل يديك' },
            { en: 'keep your room tidy', ar: 'تبقي غرفتك مرتبة' }, { en: 'be quiet at night', ar: 'تهدأ في الليل' },
            { en: 'help your mother', ar: 'تساعد أمك' },
          ],
        },
        tags: ['rules', 'modals'], d: 1, limit: 5,
      },
      {
        tmpl: 'You must not {V}.', arTmpl: 'يجب ألا {V_ar}.',
        slots: {
          V: [
            { en: 'make a mess', ar: 'تسبب فوضى' }, { en: 'be loud at night', ar: 'ترفع صوتك في الليل' },
            { en: 'open the door at night', ar: 'تفتح الباب في الليل' },
            { en: 'leave your toys on the floor', ar: 'تترك ألعابك على الأرض' },
            { en: 'watch TV before school', ar: 'تشاهد التلفاز قبل المدرسة' },
          ],
        },
        tags: ['rules', 'negation'], d: 2, limit: 5,
      },
      {
        tmpl: '{A}, please.', arTmpl: '{A_ar} من فضلك.',
        slots: {
          A: [
            { en: 'Put your shoes at the door', ar: 'ضع حذاءك عند الباب' },
            { en: 'Clean your room today', ar: 'نظف غرفتك اليوم' },
            { en: 'Make your bed in the morning', ar: 'رتب سريرك في الصباح' },
            { en: 'Close the gate behind you', ar: 'أغلق البوابة خلفك' },
          ],
        },
        tags: ['rules', 'imperative'], d: 1, limit: 4,
      },
      {
        tmpl: 'Why must I {V}?', arTmpl: 'لماذا يجب أن {V_ar}؟',
        slots: {
          V: [
            { en: 'go to bed early', ar: 'أنام مبكرا' }, { en: 'clean my room', ar: 'أنظف غرفتي' },
            { en: 'be quiet', ar: 'أهدأ' }, { en: 'help in the kitchen', ar: 'أساعد في المطبخ' },
          ],
        },
        tags: ['rules', 'questions'], d: 2, limit: 4,
      },
      {
        tmpl: 'We must {V} before {T}.', arTmpl: 'يجب أن {V_ar} قبل {T_ar}.',
        slots: {
          V: [
            { en: 'wash our hands', ar: 'نغسل أيدينا' }, { en: 'tidy the living room', ar: 'نرتب غرفة الجلوس' },
            { en: 'take out the trash', ar: 'نخرج القمامة' }, { en: 'water the plants', ar: 'نسقي النباتات' },
            { en: 'turn off the lights', ar: 'نطفئ الأنوار' },
          ],
          T: [
            { en: 'dinner', ar: 'العشاء' }, { en: 'the guests come', ar: 'وصول الضيوف' },
            { en: 'we go to bed', ar: 'نومنا' },
          ],
        },
        tags: ['rules', 'modals'], d: 2, limit: 15,
      },
    ],
    fills: [
      { en: 'This is the rule in our house.', ar: 'هذه هي القاعدة في منزلنا.', word: 'rule' },
      { en: 'You must clean your room on Friday.', ar: 'يجب أن تنظف غرفتك يوم الجمعة.', word: 'must', hint: 'قاعدة' },
      { en: 'You must not make a mess in the kitchen.', ar: 'يجب ألا تسبب فوضى في المطبخ.', word: 'mess' },
      { en: 'Be quiet after ten, please.', ar: 'اهدأ بعد العاشرة من فضلك.', word: 'quiet' },
      { en: 'Can I watch a cartoon?', ar: 'هل يمكنني مشاهدة كرتون؟', word: 'watch' },
      { en: 'You must not open the door to strangers.', ar: 'يجب ألا تفتح الباب للغرباء.', word: 'strangers' },
      { en: 'I must call my mother at eight.', ar: 'يجب أن أتصل بأمي في الثامنة.', word: 'call' },
      { en: 'Always close the gate behind you.', ar: 'أغلق البوابة خلفك دائما.', word: 'Always' },
    ],
    orders: [
      { en: 'You must take off your shoes.', ar: 'يجب أن تخلع حذاءك.' },
      { en: 'Do not leave your toys on the floor.', ar: 'لا تترك ألعابك على الأرض.' },
      { en: 'Why must I go to bed early?', ar: 'لماذا يجب أن أنام مبكرا؟' },
      { en: 'Turn off the lights before you sleep.', ar: 'أطفئ الأنوار قبل النوم.' },
      { en: 'We must wash our hands before dinner.', ar: 'يجب أن نغسل أيدينا قبل العشاء.' },
      { en: 'You must not be loud at night.', ar: 'يجب ألا ترفع صوتك في الليل.' },
    ],
    mc: [
      { question: 'Your shoes are at the door. The house rule is:', options: ['take them off', 'throw them away', 'sell them', 'paint them'], answerIndex: 0, ar: 'حذاؤك عند الباب، والقاعدة تقول:' },
      { question: 'What does "You must not run inside" mean?', options: ['يجب ألا تركض بالداخل', 'يجب أن تركض بالداخل', 'يمكنك أن تركض', 'تركض أحيانا'], answerIndex: 0, ar: 'ما معنى You must not run inside؟' },
      { question: 'It is eleven at night. You must:', options: ['be quiet', 'play football', 'sing loudly', 'open the windows'], answerIndex: 0, ar: 'الساعة الحادية عشرة ليلا، فيجب أن:' },
      { question: 'Which sentence is correct?', options: ["You mustn't make a mess.", 'You mustnt make a mess.', "You don't must make a mess.", 'You must not to make a mess.'], answerIndex: 0, ar: 'أي جملة صحيحة؟' },
      { question: '"Rule" means:', options: ['قاعدة', 'فوضى', 'ضيف', 'بوابة'], answerIndex: 0, ar: 'ما معنى rule؟' },
    ],
  },

  /* ================= lesson 62 — Visiting Someone ================= */
  {
    num: 62,
    tags: ['visiting', 'guests', 'polite'],
    objectives: [
      'Knock, ask to enter and greet a host',
      'Make small talk about family and gifts',
      'Thank the host and say goodbye politely',
    ],
    grammar: {
      explanation: 'When you visit someone, knock first and ask politely: "Can I come in?". The host answers "Come in, please". Small talk starts with "How are the kids?" or "How is your family?". Guests often bring a small gift and say "I brought you a small gift". Use the past simple for what you did: "We stayed for two hours". When leaving, say "Thanks for having me" and "See you next Friday".',
      explanationAr: 'عند زيارة أحدهم اطرق الباب أولا واسأل بأدب: Can I come in؟ فيجيب المضيف Come in, please. ويبدأ الحديث الودي بـ How are the kids؟ أو How is your family؟ وغالبا ما يحضر الضيف هدية صغيرة ويقول I brought you a small gift. واستخدم الماضي البسيط لما فعلته: We stayed for two hours. وعند المغادرة قل Thanks for having me وSee you next Friday.',
      examples: [
        { en: 'Can I come in? Come in, please.', ar: 'هل يمكنني الدخول؟ تفضل من فضلك.' },
        { en: 'How are the kids? They are fine.', ar: 'كيف حال الأطفال؟ هم بخير.' },
        { en: 'Thanks for having me.', ar: 'شكرا على استقبالي.' },
      ],
    },
    vocabulary: [
      { word: 'visit', meaningAr: 'يزور', example: 'I visit my uncle on Friday.', ipa: 'vɪzɪt' },
      { word: 'guest', meaningAr: 'ضيف', example: 'We have a guest today.' },
      { word: 'knock', meaningAr: 'يطرق', example: 'Knock on the door, please.' },
      { word: 'invite', meaningAr: 'يدعو', example: 'They invite us to lunch.' },
      { word: 'come in', meaningAr: 'يدخل / تفضل', example: 'Can I come in?' },
      { word: 'sit down', meaningAr: 'يجلس', example: 'Please sit down.' },
      { word: 'host', meaningAr: 'مضيف', example: 'Our host is very kind.' },
      { word: 'comfortable', meaningAr: 'مرتاح', example: 'Make yourself comfortable.' },
      { word: 'offer', meaningAr: 'يعرض (ضيافة)', example: 'She offered us some tea.' },
      { word: 'gift', meaningAr: 'هدية', example: 'I brought you a gift.' },
      { word: 'bring', meaningAr: 'يحضر', example: 'Bring the sweets, please.' },
      { word: 'stay', meaningAr: 'يبقى', example: 'Stay a little longer.' },
    ],
    scenario: [
      { en: 'I visit my uncle every Friday.', ar: 'أزور عمي كل جمعة.', d: 1 },
      { en: 'Knock on the door before you come in.', ar: 'اطرق الباب قبل أن تدخل.', d: 2 },
      { en: 'Can I come in?', ar: 'هل يمكنني الدخول؟', d: 1 },
      { en: 'Come in, please. You are welcome.', ar: 'تفضل من فضلك. أهلا بك.', d: 1 },
      { en: 'I brought you a small gift.', ar: 'أحضرت لك هدية صغيرة.', d: 2 },
      { en: 'Oh, thank you! You are so kind.', ar: 'أوه، شكرا لك! يا لك من لطيف.', d: 2 },
      { en: 'How are the kids?', ar: 'كيف حال الأطفال؟', d: 2 },
      { en: 'They are fine. They are at school.', ar: 'هم بخير. هم في المدرسة.', d: 2 },
      { en: 'Please sit down and make yourself comfortable.', ar: 'اجلس من فضلك وارتاح.', d: 2 },
      { en: 'We stayed for two hours.', ar: 'بقينا ساعتين.', d: 2 },
      { en: 'I cannot stay long today.', ar: 'لا أستطيع البقاء طويلا اليوم.', d: 2 },
      { en: 'Would you like something to drink?', ar: 'هل تريد شيئا لتشربه؟', d: 2 },
      { en: 'No, thank you. I am fine.', ar: 'لا شكرا. أنا بخير.', d: 2 },
      { en: 'It is getting late. I must go.', ar: 'الوقت متأخر. يجب أن أذهب.', d: 2 },
      { en: 'Thanks for having me.', ar: 'شكرا على استقبالي.', d: 2 },
      { en: 'You are always welcome here.', ar: 'أنت مرح بك هنا دائما.', d: 2 },
      { en: 'I will see you next Friday.', ar: 'سأراك الجمعة القادمة.', d: 2 },
      { en: 'Give my regards to your family.', ar: 'بلغ تحياتي لعائلتك.', d: 2 },
    ],
    patterns: [
      {
        tmpl: '{P} {V} us on {D}.', arTmpl: '{P_ar} {V_ar} يوم {D_ar}.',
        slots: {
          P: B.FAMILY,
          V: (x) => [{ en: 'visits', ar: x.P.agr === 'she' ? 'تزورنا' : 'يزورنا' }],
          D: B.DAYS,
        },
        tags: ['visiting', 'family'], d: 1, limit: 20,
        filter: (x) => x.P.en !== 'my baby',
      },
      {
        tmpl: 'How {BE} {P}?', arTmpl: 'كيف حال {P_ar}؟',
        slots: {
          P: [
            { en: 'your baby', be: 'is', ar: 'طفلك' }, { en: 'the kids', be: 'are', ar: 'الأطفال' },
            { en: 'your mother', be: 'is', ar: 'أمك' }, { en: 'the children', be: 'are', ar: 'الأطفال' },
          ],
          BE: (x) => [{ en: x.P.be, ar: '' }],
        },
        tags: ['visiting', 'questions'], d: 1, limit: 4,
      },
      {
        tmpl: 'Thanks for {G}.', arTmpl: 'شكرا على {G_ar}.',
        slots: {
          G: [
            { en: 'having me', ar: 'استقبالي' }, { en: 'the lovely dinner', ar: 'العشاء اللذيذ' },
            { en: 'the tea', ar: 'الشاي' }, { en: 'your kind words', ar: 'كلماتك الطيبة' },
            { en: 'everything', ar: 'كل شيء' },
          ],
        },
        tags: ['visiting', 'thanks'], d: 2, limit: 5,
      },
      {
        tmpl: '{G} {BV} us {GF}.', arTmpl: '{BV_ar} لنا {G_ar} {GF_ar}.',
        slots: {
          G: [
            { en: 'My aunt', ar: 'عمتي', agr: 'she' }, { en: 'My uncle', ar: 'عمي', agr: 'he' },
            { en: 'My grandmother', ar: 'جدتي', agr: 'she' }, { en: 'My grandfather', ar: 'جدي', agr: 'he' },
          ],
          BV: (x) => [{ en: 'brought', ar: x.G.agr === 'she' ? 'أحضرت' : 'أحضر' }],
          GF: [
            { en: 'a plate of cookies', ar: 'طبق بسكويت' }, { en: 'a box of dates', ar: 'علبة تمر' },
            { en: 'some fruit', ar: 'فاكهة' }, { en: 'flowers', ar: 'زهورا' },
          ],
        },
        tags: ['visiting', 'gifts', 'past-simple'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'I visit my uncle every Friday.', ar: 'أزور عمي كل جمعة.', word: 'visit' },
      { en: 'Can I come in?', ar: 'هل يمكنني الدخول؟', word: 'come', hint: 'أدب الدخول' },
      { en: 'I brought you a small gift.', ar: 'أحضرت لك هدية صغيرة.', word: 'gift' },
      { en: 'How are the kids?', ar: 'كيف حال الأطفال؟', word: 'kids' },
      { en: 'Please sit down and make yourself comfortable.', ar: 'اجلس من فضلك وارتاح.', word: 'sit' },
      { en: 'I cannot stay long today.', ar: 'لا أستطيع البقاء طويلا اليوم.', word: 'stay' },
      { en: 'Thanks for having me.', ar: 'شكرا على استقبالي.', word: 'Thanks' },
      { en: 'It is getting late. I must go.', ar: 'الوقت متأخر. يجب أن أذهب.', word: 'late' },
    ],
    orders: [
      { en: 'Knock on the door before you come in.', ar: 'اطرق الباب قبل أن تدخل.' },
      { en: 'You are always welcome here.', ar: 'أنت مرح بك هنا دائما.' },
      { en: 'How are the kids?', ar: 'كيف حال الأطفال؟' },
      { en: 'Would you like something to drink?', ar: 'هل تريد شيئا لتشربه؟' },
      { en: 'I brought you a small gift.', ar: 'أحضرت لك هدية صغيرة.' },
      { en: 'We stayed for two hours.', ar: 'بقينا ساعتين.' },
    ],
    mc: [
      { question: 'Someone knocks. You open the door. You say:', options: ['Come in, please!', 'Go away!', 'Close the door!', 'Sit outside!'], answerIndex: 0, ar: 'طرق أحدهم الباب وفتحته، فتقول:' },
      { question: 'What do you say when you leave a visit?', options: ['Thanks for having me.', 'Open the door.', 'Bring a gift.', 'Sit down.'], answerIndex: 0, ar: 'ماذا تقول عند مغادرة الزيارة؟' },
      { question: '"How are the kids?" asks about:', options: ['the children', 'the food', 'the weather', 'the house'], answerIndex: 0, ar: 'سؤال How are the kids؟ يخص:' },
      { question: 'A guest brings you a gift. You say:', options: ['Thank you, you are kind.', 'No, take it back.', 'It is late.', 'I must go.'], answerIndex: 0, ar: 'أحضر الضيف لك هدية، فتقول:' },
      { question: '"Invite" means:', options: ['يدعو', 'يطرق', 'يغادر', 'يشتري'], answerIndex: 0, ar: 'ما معنى invite؟' },
    ],
  },
];
