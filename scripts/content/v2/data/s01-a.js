/* ============================================================
   v2 section data — s01-a.js
   Foundations & Core Communication · lessons 1–5 (gold reference)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 1 — Greetings and Goodbyes ================= */
  {
    num: 1,
    tags: ['greetings'],
    objectives: [
      'Greet people by time of day',
      'Say goodbye in natural ways',
      'Respond to "How are you?"',
    ],
    grammar: {
      explanation: 'English greetings change with the time of day: "Good morning" before noon, "Good afternoon" in the afternoon, "Good evening" after sunset, and "Good night" only when leaving at night or going to bed. "Hello" and "Hi" work any time; "Hi" is more friendly and informal. When someone asks "How are you?", answer with "I am fine, thank you" and then ask back "And you?". To leave politely, use "Goodbye", "Bye", "See you later", or "See you tomorrow".',
      explanationAr: 'تتغير التحيات الإنجليزية حسب وقت اليوم: Good morning قبل الظهر، وGood afternoon بعد الظهر، وGood evening بعد الغروب، أما Good night فتستخدم فقط عند الوداع ليلا أو قبل النوم. تعمل Hello وHi في أي وقت، وHi أكثر ودية وغير رسمية. عندما يسألك أحدهم How are you؟ أجب بـ I am fine, thank you ثم اسأله And you؟ وللوداع المهذب استخدم Goodbye أو Bye أو See you later أو See you tomorrow.',
      examples: [
        { en: 'Good morning, Mr. Ali.', ar: 'صباح الخير يا أستاذ علي.' },
        { en: 'Hello! How are you?', ar: 'مرحبا! كيف حالك؟' },
        { en: 'Goodbye, see you tomorrow.', ar: 'إلى اللقاء، أراك غدا.' },
      ],
    },
    vocabulary: [
      { word: 'hello', meaningAr: 'مرحبا', example: 'Hello, my friend!', ipa: 'həˈloʊ' },
      { word: 'hi', meaningAr: 'أهلا', example: 'Hi, Sara! How are you?' },
      { word: 'good morning', meaningAr: 'صباح الخير', example: 'Good morning, teacher.' },
      { word: 'good evening', meaningAr: 'مساء الخير', example: 'Good evening, everyone.' },
      { word: 'goodbye', meaningAr: 'إلى اللقاء', example: 'Goodbye, see you soon.' },
      { word: 'bye', meaningAr: 'باي (وداع سريع)', example: 'Bye! Take care.' },
      { word: 'fine', meaningAr: 'بخير', example: 'I am fine, thank you.' },
      { word: 'welcome', meaningAr: 'أهلا وسهلا', example: 'Welcome to our school.' },
      { word: 'see you later', meaningAr: 'أراك لاحقا', example: 'See you later, Omar.' },
      { word: 'take care', meaningAr: 'اعتنِ بنفسك', example: 'Goodbye, take care!' },
      { word: 'everyone', meaningAr: 'الجميع', example: 'Good evening, everyone.' },
      { word: 'friend', meaningAr: 'صديق', example: 'He is my best friend.' },
    ],
    scenario: [
      { en: 'Hello! How are you?', ar: 'مرحبا! كيف حالك؟', d: 1 },
      { en: 'I am fine, thank you.', ar: 'أنا بخير، شكرا لك.', d: 1 },
      { en: 'Good morning, teacher!', ar: 'صباح الخير يا معلم!', d: 1 },
      { en: 'Good evening, everyone.', ar: 'مساء الخير يا جميع.', d: 1 },
      { en: 'Goodbye, see you tomorrow.', ar: 'إلى اللقاء، أراك غدا.', d: 1 },
      { en: 'Nice to meet you, Sara.', ar: 'سررت بلقائك يا سارة.', d: 1 },
      { en: 'Nice to meet you too.', ar: 'سررت بلقائك أيضا.', d: 1 },
      { en: 'Welcome to our school.', ar: 'أهلا بك في مدرستنا.', d: 1 },
      { en: 'Good night, sleep well.', ar: 'تصبح على خير، نم جيدا.', d: 1 },
      { en: 'Hi, my name is Omar.', ar: 'أهلا، اسمي عمر.', d: 1 },
      { en: 'How is your family?', ar: 'كيف حال عائلتك؟', d: 2 },
      { en: 'They are fine, thanks.', ar: 'هم بخير، شكرا.', d: 2 },
      { en: 'See you later, my friend.', ar: 'أراك لاحقا يا صديقي.', d: 1 },
      { en: 'Have a nice day!', ar: 'أتمنى لك يوما سعيدا!', d: 2 },
      { en: 'Take care, goodbye!', ar: 'اعتنِ بنفسك، إلى اللقاء!', d: 2 },
      { en: 'And you? How is your day?', ar: 'وأنت؟ كيف يومك؟', d: 2 },
    ],
    patterns: [
      {
        tmpl: '{G}, {P}.', arTmpl: '{G_ar} يا {P_ar}.',
        slots: {
          G: [
            { en: 'Good morning', ar: 'صباح الخير' }, { en: 'Good afternoon', ar: 'مساء الخير' },
            { en: 'Good evening', ar: 'مساء الخير' }, { en: 'Hello', ar: 'مرحبا' },
            { en: 'Hi', ar: 'أهلا' }, { en: 'Goodbye', ar: 'إلى اللقاء' },
          ],
          P: B.NAMED_SING,
        },
        tags: ['greetings'], d: 1, limit: 30,
      },
      {
        tmpl: 'Hello, {P}. How are you?', arTmpl: 'مرحبا يا {P_ar}. كيف حالك؟',
        slots: { P: B.NAMED_SING },
        tags: ['greetings', 'questions'], d: 1, limit: 8,
      },
      {
        tmpl: 'Good night, {P}. See you {T}.', arTmpl: 'تصبح على خير يا {P_ar}. أراك {T_ar}.',
        slots: {
          P: B.NAMED_SING,
          T: [ { en: 'tomorrow', ar: 'غدا' }, { en: 'later', ar: 'لاحقا' }, { en: 'on Sunday', ar: 'يوم الأحد' }, { en: 'soon', ar: 'قريبا' } ],
        },
        tags: ['greetings', 'goodbyes'], d: 2, limit: 20,
      },
    ],
    fills: [
      { en: 'Hello! How are you?', ar: 'مرحبا! كيف حالك؟', word: 'Hello', hint: 'تحية' },
      { en: 'Good morning, teacher.', ar: 'صباح الخير يا معلم.', word: 'morning', hint: 'وقت اليوم' },
      { en: 'Goodbye, see you tomorrow.', ar: 'إلى اللقاء، أراك غدا.', word: 'tomorrow' },
      { en: 'Nice to meet you, Sara.', ar: 'سررت بلقائك يا سارة.', word: 'meet' },
      { en: 'I am fine, thank you.', ar: 'أنا بخير، شكرا لك.', word: 'fine', hint: 'حالة' },
      { en: 'Welcome to our school.', ar: 'أهلا بك في مدرستنا.', word: 'Welcome' },
      { en: 'Good night, sleep well.', ar: 'تصبح على خير، نم جيدا.', word: 'night', hint: 'وقت اليوم' },
      { en: 'See you later, my friend.', ar: 'أراك لاحقا يا صديقي.', word: 'later' },
    ],
    orders: [
      { en: 'Hello! How are you?', ar: 'مرحبا! كيف حالك؟' },
      { en: 'I am fine, thank you.', ar: 'أنا بخير، شكرا لك.' },
      { en: 'Good morning, my teacher.', ar: 'صباح الخير يا معلمي.' },
      { en: 'See you later, my friend.', ar: 'أراك لاحقا يا صديقي.' },
      { en: 'Nice to meet you, Sara.', ar: 'سررت بلقائك يا سارة.' },
      { en: 'Welcome to our new school.', ar: 'أهلا بك في مدرستنا الجديدة.' },
    ],
    mc: [
      { question: 'Which greeting do you use in the morning?', options: ['Good morning', 'Good night', 'Goodbye', 'See you later'], answerIndex: 0, ar: 'أي تحية تستخدمها في الصباح؟' },
      { question: 'Someone asks "How are you?" What is a good answer?', options: ['I am fine, thank you.', 'My name is Omar.', 'Good night.', 'See you later.'], answerIndex: 0, ar: 'سألك أحدهم How are you؟ ما الجواب المناسب؟' },
      { question: 'What does "Goodbye" mean?', options: ['إلى اللقاء', 'صباح الخير', 'مساء الخير', 'أهلا وسهلا'], answerIndex: 0, ar: 'ما معنى Goodbye؟' },
      { question: 'You leave your friend at night. You say:', options: ['Good night', 'Good morning', 'Hello', 'Hi'], answerIndex: 0, ar: 'تودع صديقك في الليل، فتقول:' },
    ],
  },

  /* ================= lesson 2 — Introducing Yourself ================= */
  {
    num: 2,
    tags: ['introductions', 'present-simple'],
    objectives: [
      'Say your name, country and city',
      'Talk about your job and age',
      'Ask a new person simple questions',
    ],
    grammar: {
      explanation: 'To introduce yourself, start with your name: "My name is Omar" or "I am Omar". Then say where you are from: "I am from Egypt". Talk about where you live with "I live in Cairo". Use "I am a/an ..." for your job: "I am a teacher", "I am an engineer". Use "a" before consonant sounds and "an" before vowel sounds. To say your age, use the verb be: "I am twenty years old" (not "I have twenty years"). Ask others: "What is your name?", "Where are you from?", "How old are you?".',
      explanationAr: 'لتعريف نفسك ابدأ باسمك: My name is Omar أو I am Omar. ثم قل من أين أنت: I am from Egypt. تحدث عن مكان سكنك بـ I live in Cairo. استخدم I am a/an للإشارة إلى مهنتك: I am a teacher، I am an engineer. استخدم a قبل الصوت الساكن وan قبل صوت العلة. ولقول عمرك استخدم فعل الكينونة: I am twenty years old (وليس I have). واسأل الآخرين: What is your name؟ وWhere are you from؟ وHow old are you؟',
      examples: [
        { en: 'My name is Lina. I am from Jordan.', ar: 'اسمي لينا. أنا من الأردن.' },
        { en: 'I am an engineer. I live in Dubai.', ar: 'أنا مهندس. أسكن في دبي.' },
        { en: 'How old are you? I am twenty.', ar: 'كم عمرك؟ عمري عشرون عاما.' },
      ],
    },
    vocabulary: [
      { word: 'name', meaningAr: 'اسم', example: 'My name is Omar.', ipa: 'neɪm' },
      { word: 'from', meaningAr: 'من', example: 'I am from Egypt.' },
      { word: 'live', meaningAr: 'يسكن', example: 'I live in Amman.' },
      { word: 'student', meaningAr: 'طالب', example: 'I am a student.' },
      { word: 'teacher', meaningAr: 'معلم', example: 'She is a teacher.' },
      { word: 'job', meaningAr: 'وظيفة', example: 'What is your job?' },
      { word: 'old', meaningAr: 'عمر (كم عمرك)', example: 'How old are you?' },
      { word: 'years old', meaningAr: 'من العمر', example: 'I am twenty years old.' },
      { word: 'speak', meaningAr: 'يتكلم', example: 'I speak Arabic and English.' },
      { word: 'please', meaningAr: 'من فضلك', example: 'Please repeat your name.' },
      { word: 'meet', meaningAr: 'يقابل / يلتقي', example: 'Nice to meet you.' },
      { word: 'pleased', meaningAr: 'مسرور', example: 'Pleased to meet you.' },
    ],
    scenario: [
      { en: 'My name is Omar.', ar: 'اسمي عمر.', d: 1 },
      { en: 'I am from Egypt.', ar: 'أنا من مصر.', d: 1 },
      { en: 'I live in Cairo.', ar: 'أسكن في القاهرة.', d: 1 },
      { en: 'I am a student.', ar: 'أنا طالب.', d: 1 },
      { en: 'I am twenty years old.', ar: 'عمري عشرون عاما.', d: 1 },
      { en: 'This is my friend Sara.', ar: 'هذه صديقتي سارة.', d: 2 },
      { en: 'She is a teacher.', ar: 'هي معلمة.', d: 1 },
      { en: 'Nice to meet you.', ar: 'سررت بلقائك.', d: 1 },
      { en: 'Where are you from?', ar: 'من أين أنت؟', d: 1 },
      { en: 'I am from Jordan.', ar: 'أنا من الأردن.', d: 1 },
      { en: 'What is your name?', ar: 'ما اسمك؟', d: 1 },
      { en: 'How old are you?', ar: 'كم عمرك؟', d: 1 },
      { en: 'I speak Arabic and English.', ar: 'أتكلم العربية والإنجليزية.', d: 2 },
      { en: 'Pleased to meet you.', ar: 'مسرور بلقائك.', d: 2 },
      { en: 'I work in a big school.', ar: 'أعمل في مدرسة كبيرة.', d: 2 },
      { en: 'My family is from Lebanon.', ar: 'عائلتي من لبنان.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'My name is {N}.', arTmpl: 'اسمي {N_ar}.',
        slots: { N: B.NAMED_SING },
        tags: ['introductions'], d: 1, limit: 8,
      },
      {
        tmpl: 'I am from {C}.', arTmpl: 'أنا من {C_ar}.',
        slots: { C: B.COUNTRIES },
        tags: ['introductions', 'countries'], d: 1, limit: 16,
      },
      {
        tmpl: 'I live in {C}.', arTmpl: 'أسكن في {C_ar}.',
        slots: { C: B.COUNTRIES },
        tags: ['introductions', 'places'], d: 1, limit: 16,
      },
      {
        tmpl: 'I am {J}.', arTmpl: 'أنا {J_ar}.',
        slots: {
          J: [
            { en: 'a student', ar: 'طالب' }, { en: 'a teacher', ar: 'معلم' },
            { en: 'a doctor', ar: 'طبيب' }, { en: 'an engineer', ar: 'مهندس' },
            { en: 'a nurse', ar: 'ممرضة' }, { en: 'a driver', ar: 'سائق' },
            { en: 'a worker', ar: 'عامل' }, { en: 'a manager', ar: 'مدير' },
          ],
        },
        tags: ['introductions', 'jobs'], d: 1, limit: 8,
      },
      {
        tmpl: 'I am {A} years old.', arTmpl: 'عمري {A_ar} عاما.',
        slots: {
          A: [
            { en: 'eighteen', ar: 'ثمانية عشر' }, { en: 'nineteen', ar: 'تسعة عشر' },
            { en: 'twenty', ar: 'عشرين' }, { en: 'twenty-five', ar: 'خمسة وعشرين' },
            { en: 'thirty', ar: 'ثلاثين' }, { en: 'forty', ar: 'أربعين' },
          ],
        },
        tags: ['introductions', 'numbers'], d: 1, limit: 6,
      },
    ],
    fills: [
      { en: 'My name is Omar.', ar: 'اسمي عمر.', word: 'name', hint: 'اسم' },
      { en: 'I am from Egypt.', ar: 'أنا من مصر.', word: 'from', hint: 'حرف جر' },
      { en: 'I live in Cairo.', ar: 'أسكن في القاهرة.', word: 'live', hint: 'فعل' },
      { en: 'I am a student.', ar: 'أنا طالب.', word: 'student' },
      { en: 'How old are you?', ar: 'كم عمرك؟', word: 'old', hint: 'السؤال عن العمر' },
      { en: 'I speak Arabic and English.', ar: 'أتكلم العربية والإنجليزية.', word: 'speak' },
      { en: 'Nice to meet you.', ar: 'سررت بلقائك.', word: 'meet' },
      { en: 'She is a teacher at my school.', ar: 'هي معلمة في مدرستي.', word: 'teacher' },
    ],
    orders: [
      { en: 'My name is Omar.', ar: 'اسمي عمر.' },
      { en: 'I am from Egypt.', ar: 'أنا من مصر.' },
      { en: 'Where are you from?', ar: 'من أين أنت؟' },
      { en: 'I am twenty years old.', ar: 'عمري عشرون عاما.' },
      { en: 'What is your name?', ar: 'ما اسمك؟' },
      { en: 'Nice to meet you, my friend.', ar: 'سررت بلقائك يا صديقي.' },
    ],
    mc: [
      { question: 'How do you say your name?', options: ['My name is Omar.', 'I have Omar.', 'Omar is me name.', 'Me name Omar.'], answerIndex: 0, ar: 'كيف تقول اسمك؟' },
      { question: 'Which sentence uses "an" correctly?', options: ['I am an engineer.', 'I am a engineer.', 'I am an teacher.', 'I am an student.'], answerIndex: 0, ar: 'أي جملة تستخدم an بشكل صحيح؟' },
      { question: 'What do you ask to know a person\'s age?', options: ['How old are you?', 'What is your name?', 'Where are you from?', 'What is your job?'], answerIndex: 0, ar: 'ماذا تسأل لتعرف عمر الشخص؟' },
      { question: '"I live in Cairo" means:', options: ['أسكن في القاهرة', 'أنا من القاهرة', 'أعمل في القاهرة', 'أزور القاهرة'], answerIndex: 0, ar: 'ما معنى I live in Cairo؟' },
    ],
  },

  /* ================= lesson 3 — Personal Pronouns ================= */
  {
    num: 3,
    tags: ['pronouns', 'verb-be'],
    objectives: [
      'Use I, you, he, she, it, we, they',
      'Use object pronouns: me, him, her, us, them',
      'Match pronouns with the verb be',
    ],
    grammar: {
      explanation: 'Subject pronouns replace people or things: I, you, he, she, it, we, they. Use "he" for one male, "she" for one female, "it" for things and animals, "we" for a group with you in it, and "they" for other groups. The verb be changes with the subject: I am, you are, he is, she is, we are, they are. Object pronouns come after verbs or prepositions: me, you, him, her, it, us, them — for example "Please help me" or "Call him tomorrow".',
      explanationAr: 'ضمائر الفاعل تحل محل الأشخاص أو الأشياء: I, you, he, she, it, we, they. استخدم he للمذكر الواحد وshe للمؤنثة الواحدة وit للجماد والحيوان وwe لمجموعة تشملك وthey لغيرها. يتغير فعل be حسب الفاعل: I am، you are، he is، she is، we are، they are. أما ضمائر المفعول فتأتي بعد الأفعال أو حروف الجر: me, you, him, her, it, us, them، مثل Please help me أو Call him tomorrow.',
      examples: [
        { en: 'He is my brother and she is my sister.', ar: 'هو أخي وهي أختي.' },
        { en: 'We are students. They are teachers.', ar: 'نحن طلاب. هم معلمون.' },
        { en: 'Please help me. I will help you later.', ar: 'ساعدني من فضلك. سأساعدك لاحقا.' },
      ],
    },
    vocabulary: [
      { word: 'I', meaningAr: 'أنا', example: 'I am a student.' },
      { word: 'you', meaningAr: 'أنت / أنتم', example: 'You are my friend.' },
      { word: 'he', meaningAr: 'هو', example: 'He is my brother.' },
      { word: 'she', meaningAr: 'هي', example: 'She is my sister.' },
      { word: 'we', meaningAr: 'نحن', example: 'We are students.' },
      { word: 'they', meaningAr: 'هم', example: 'They are teachers.' },
      { word: 'me', meaningAr: 'أنا (مفعول)', example: 'Please help me.' },
      { word: 'him', meaningAr: 'هو (مفعول)', example: 'Call him tomorrow.' },
      { word: 'her', meaningAr: 'هي (مفعول)', example: 'I see her every day.' },
      { word: 'us', meaningAr: 'نحن (مفعول)', example: 'Come with us.' },
      { word: 'them', meaningAr: 'هم (مفعول)', example: 'I know them well.' },
      { word: 'next to', meaningAr: 'بجانب', example: 'She sits next to me.' },
    ],
    scenario: [
      { en: 'I am here today.', ar: 'أنا هنا اليوم.', d: 1 },
      { en: 'You are my friend.', ar: 'أنت صديقي.', d: 1 },
      { en: 'He is my brother.', ar: 'هو أخي.', d: 1 },
      { en: 'She is my sister.', ar: 'هي أختي.', d: 1 },
      { en: 'We are students.', ar: 'نحن طلاب.', d: 1 },
      { en: 'They are teachers.', ar: 'هم معلمون.', d: 1 },
      { en: 'It is a big book.', ar: 'إنه كتاب كبير.', d: 1 },
      { en: 'Please help me.', ar: 'ساعدني من فضلك.', d: 1 },
      { en: 'Call him tomorrow.', ar: 'اتصل به غدا.', d: 2 },
      { en: 'I see her every day.', ar: 'أراها كل يوم.', d: 2 },
      { en: 'Come with us.', ar: 'تعال معنا.', d: 1 },
      { en: 'I know them well.', ar: 'أعرفهم جيدا.', d: 2 },
      { en: 'This gift is for you.', ar: 'هذه الهدية لك.', d: 2 },
      { en: 'She sits next to me.', ar: 'تجلس بجانبي.', d: 2 },
      { en: 'They help us a lot.', ar: 'هم يساعدوننا كثيرا.', d: 2 },
      { en: 'It is on the table.', ar: 'إنه على الطاولة.', d: 1 },
    ],
    patterns: [
      {
        tmpl: '{S} {BE} {O}.', arTmpl: '{S_ar} {O_ar}.',
        slots: {
          S: B.PRONOUNS,
          BE: (x) => [{ en: B.AGR[x.S.agr].be, ar: '' }],
          O: (x) => (x.S.agr === 'we' || x.S.agr === 'they'
            ? [
              { en: 'students', ar: 'طلاب' }, { en: 'teachers', ar: 'معلمون' },
              { en: 'doctors', ar: 'أطباء' }, { en: 'my friends', ar: 'أصدقائي' },
            ]
            : [
              { en: 'a good friend', ar: 'صديق جيد' }, { en: 'a new neighbor', ar: 'جار جديد' },
              { en: 'an old man', ar: 'رجل مسن' }, { en: 'a young girl', ar: 'فتاة صغيرة' },
            ]),
        },
        tags: ['pronouns', 'verb-be'], d: 1, limit: 24,
      },
      {
        tmpl: 'Please help {OP}.', arTmpl: 'ساعد{OP_ar} من فضلك.',
        slots: {
          OP: [
            { en: 'me', ar: 'ني' }, { en: 'him', ar: 'ه' }, { en: 'her', ar: 'ها' },
            { en: 'us', ar: 'نا' }, { en: 'them', ar: 'هم' },
          ],
        },
        tags: ['pronouns', 'imperative'], d: 1, limit: 5,
      },
      {
        tmpl: '{S} {V} {T} every day.', arTmpl: '{S_ar} {V_ar} {T_ar} كل يوم.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('read', x.S.agr), ar: B.arPresent('read', x.S.agr) }],
          T: [ { en: 'a book', ar: 'كتابا' }, { en: 'the newspaper', ar: 'الصحيفة' }, { en: 'a story', ar: 'قصة' }, { en: 'the lesson', ar: 'الدرس' }, { en: 'an email', ar: 'بريدا إلكترونيا' }, { en: 'a letter', ar: 'خطابا' } ],
        },
        tags: ['pronouns', 'present-simple'], d: 2, limit: 24,
      },
    ],
    fills: [
      { en: 'He is my brother.', ar: 'هو أخي.', word: 'He', hint: 'ضمير فاعل' },
      { en: 'She is my sister.', ar: 'هي أختي.', word: 'She', hint: 'ضمير فاعل' },
      { en: 'We are students.', ar: 'نحن طلاب.', word: 'We', hint: 'ضمير فاعل' },
      { en: 'Please help me.', ar: 'ساعدني من فضلك.', word: 'me', hint: 'ضمير مفعول' },
      { en: 'Call him tomorrow.', ar: 'اتصل به غدا.', word: 'him', hint: 'ضمير مفعول' },
      { en: 'I see her every day.', ar: 'أراها كل يوم.', word: 'her', hint: 'ضمير مفعول' },
      { en: 'They are teachers.', ar: 'هم معلمون.', word: 'They', hint: 'ضمير فاعل' },
      { en: 'Come with us, please.', ar: 'تعال معنا من فضلك.', word: 'us', hint: 'ضمير مفعول' },
    ],
    orders: [
      { en: 'He is my brother.', ar: 'هو أخي.' },
      { en: 'She is my sister.', ar: 'هي أختي.' },
      { en: 'We are new students here.', ar: 'نحن طلاب جدد هنا.' },
      { en: 'Please help me now.', ar: 'ساعدني الآن من فضلك.' },
      { en: 'I see her every day.', ar: 'أراها كل يوم.' },
      { en: 'They are my teachers.', ar: 'هم معلمون لي.' },
    ],
    mc: [
      { question: 'My mother and father are kind. ___ are teachers.', options: ['They', 'He', 'She', 'It'], answerIndex: 0, ar: 'أبي وأمي طيبان. ___ معلمان.' },
      { question: 'This is Sara. I see ___ every morning.', options: ['her', 'he', 'she', 'him'], answerIndex: 0, ar: 'هذه سارة. أرى ___ كل صباح.' },
      { question: 'Which is correct?', options: ['I am a student.', 'I is a student.', 'I are a student.', 'I be a student.'], answerIndex: 0, ar: 'أي جملة صحيحة؟' },
      { question: '"Come with us" — "us" is a:', options: ['object pronoun', 'subject pronoun', 'question word', 'article'], answerIndex: 0, ar: 'في Come with us كلمة us هي:' },
    ],
  },

  /* ================= lesson 4 — Colors and Shapes ================= */
  {
    num: 4,
    tags: ['colors', 'adjectives'],
    objectives: [
      'Name common colors',
      'Name basic shapes',
      'Describe objects with colors',
    ],
    grammar: {
      explanation: 'Colors are adjectives, so they come before the noun: "a red car", "a blue bag". You can also describe with the verb be: "The car is red". In English the color never changes, but in Arabic it matches the noun: "السيارة حمراء" (feminine) and "الباب أحمر" (masculine). Basic shapes are circle, square, triangle, rectangle and star. To ask about a color, say "What color is it?" — the answer is "It is green".',
      explanationAr: 'الألوان صفات، فتأتي قبل الاسم: a red car، a blue bag. ويمكنك الوصف بفعل الكينونة: The car is red. في الإنجليزية لا يتغير اللون أبدا، أما في العربية فيطابق الاسم: السيارة حمراء (مؤنث) والباب أحمر (مذكر). الأشكال الأساسية هي دائرة ومربع ومثلث ومستطيل ونجمة. وللسؤال عن اللون قل What color is it؟ والجواب It is green.',
      examples: [
        { en: 'I have a red pen and a blue bag.', ar: 'لدي قلم أحمر وحقيبة زرقاء.' },
        { en: 'What color is the door? It is brown.', ar: 'ما لون الباب؟ إنه بني.' },
        { en: 'Draw a circle and a triangle, please.', ar: 'ارسم دائرة ومثلثا من فضلك.' },
      ],
    },
    vocabulary: [
      { word: 'red', meaningAr: 'أحمر', example: 'The car is red.', ipa: 'rɛd' },
      { word: 'blue', meaningAr: 'أزرق', example: 'My bag is blue.' },
      { word: 'green', meaningAr: 'أخضر', example: 'The apple is green.' },
      { word: 'yellow', meaningAr: 'أصفر', example: 'The star is yellow.' },
      { word: 'black', meaningAr: 'أسود', example: 'My phone is black.' },
      { word: 'white', meaningAr: 'أبيض', example: 'The snow is white.' },
      { word: 'brown', meaningAr: 'بني', example: 'The door is brown.' },
      { word: 'circle', meaningAr: 'دائرة', example: 'This is a circle.' },
      { word: 'square', meaningAr: 'مربع', example: 'Draw a square, please.' },
      { word: 'triangle', meaningAr: 'مثلث', example: 'The sign is a triangle.' },
      { word: 'rectangle', meaningAr: 'مستطيل', example: 'The box is a rectangle.' },
      { word: 'color', meaningAr: 'لون', example: 'What color is it?' },
    ],
    scenario: [
      { en: 'The car is red.', ar: 'السيارة حمراء.', d: 1 },
      { en: 'My bag is blue.', ar: 'حقيبتي زرقاء.', d: 1 },
      { en: 'I like this green shirt.', ar: 'أحب هذا القميص الأخضر.', d: 2 },
      { en: 'The door is brown.', ar: 'الباب بني.', d: 1 },
      { en: 'The sky is gray today.', ar: 'السماء رمادية اليوم.', d: 2 },
      { en: 'This is a circle.', ar: 'هذه دائرة.', d: 1 },
      { en: 'Draw a square, please.', ar: 'ارسم مربعا من فضلك.', d: 1 },
      { en: 'The sign is a triangle.', ar: 'اللافتة مثلث.', d: 2 },
      { en: 'The box is a rectangle.', ar: 'الصندوق مستطيل.', d: 2 },
      { en: 'The star is yellow.', ar: 'النجمة صفراء.', d: 1 },
      { en: 'My phone is black.', ar: 'هاتفي أسود.', d: 1 },
      { en: 'The snow is white.', ar: 'الثلج أبيض.', d: 1 },
      { en: 'Her dress is pink.', ar: 'فستانها وردي.', d: 2 },
      { en: 'The apple is green.', ar: 'التفاحة خضراء.', d: 1 },
      { en: 'I have a red pen.', ar: 'لدي قلم أحمر.', d: 1 },
      { en: 'The flag is black and white.', ar: 'العلامة سوداء وبيضاء.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'The {T} is {C}.', arTmpl: '{T_ar} {C_ar}.',
        slots: {
          T: [
            { en: 'car', ar: 'السيارة', g: 'f' }, { en: 'bag', ar: 'الحقيبة', g: 'f' },
            { en: 'door', ar: 'الباب', g: 'm' }, { en: 'box', ar: 'الصندوق', g: 'm' },
            { en: 'shirt', ar: 'القميص', g: 'm' }, { en: 'book', ar: 'الكتاب', g: 'm' },
            { en: 'phone', ar: 'الهاتف', g: 'm' }, { en: 'wall', ar: 'الحائط', g: 'm' },
          ],
          COLOR: B.COLORS,
          C: (x) => [(x.T.g === 'f'
            ? { en: x.COLOR.en, ar: x.COLOR.f }
            : { en: x.COLOR.en, ar: x.COLOR.ar })],
        },
        tags: ['colors', 'adjectives'], d: 1, limit: 30,
      },
      {
        tmpl: 'Draw {SH} on the board.', arTmpl: 'ارسم {SH_ar} على السبورة.',
        slots: { SH: B.SHAPES },
        tags: ['shapes', 'imperative'], d: 1, limit: 8,
      },
      {
        tmpl: 'My favorite color is {C}.', arTmpl: 'لوني المفضل {C_ar}.',
        slots: { C: B.COLORS.map((c) => ({ en: c.en, ar: c.ar })) },
        tags: ['colors'], d: 1, limit: 11,
      },
      {
        tmpl: 'I see a {C} {T}.', arTmpl: 'أرى {T_ar} {C_ar}.',
        slots: {
          T: [
            { en: 'car', ar: 'سيارة', g: 'f' }, { en: 'bird', ar: 'طائر', g: 'm' },
            { en: 'flower', ar: 'زهرة', g: 'f' }, { en: 'ball', ar: 'كرة', g: 'f' },
            { en: 'cat', ar: 'قطة', g: 'f' }, { en: 'box', ar: 'صندوق', g: 'm' },
          ],
          COLOR: B.COLORS,
          C: (x) => [(x.T.g === 'f'
            ? { en: x.COLOR.en, ar: x.COLOR.f }
            : { en: x.COLOR.en, ar: x.COLOR.ar })],
        },
        tags: ['colors', 'present-simple'], d: 2, limit: 24,
      },
    ],
    fills: [
      { en: 'The car is red.', ar: 'السيارة حمراء.', word: 'red', hint: 'لون' },
      { en: 'My bag is blue.', ar: 'حقيبتي زرقاء.', word: 'blue', hint: 'لون' },
      { en: 'The apple is green.', ar: 'التفاحة خضراء.', word: 'green' },
      { en: 'My phone is black.', ar: 'هاتفي أسود.', word: 'black' },
      { en: 'This is a circle.', ar: 'هذه دائرة.', word: 'circle', hint: 'شكل' },
      { en: 'Draw a square, please.', ar: 'ارسم مربعا من فضلك.', word: 'square', hint: 'شكل' },
      { en: 'The star is yellow.', ar: 'النجمة صفراء.', word: 'star' },
      { en: 'What color is the door?', ar: 'ما لون الباب؟', word: 'color', hint: 'لون' },
    ],
    orders: [
      { en: 'The car is red.', ar: 'السيارة حمراء.' },
      { en: 'My bag is blue.', ar: 'حقيبتي زرقاء.' },
      { en: 'This is a circle.', ar: 'هذه دائرة.' },
      { en: 'The apple is green.', ar: 'التفاحة خضراء.' },
      { en: 'Draw a square on the board.', ar: 'ارسم مربعا على السبورة.' },
      { en: 'I have a red pen.', ar: 'لدي قلم أحمر.' },
    ],
    mc: [
      { question: 'What color is snow?', options: ['white', 'black', 'green', 'pink'], answerIndex: 0, ar: 'ما لون الثلج؟' },
      { question: 'Which shape has three sides?', options: ['a triangle', 'a square', 'a circle', 'a rectangle'], answerIndex: 0, ar: 'أي شكل له ثلاثة أضلاع؟' },
      { question: 'The apple is ___ (لون التفاحة الناضجة):', options: ['green or red', 'blue', 'gray', 'purple'], answerIndex: 0, ar: 'التفاحة الناضجة لونها:' },
      { question: '"Draw a square" means:', options: ['ارسم مربعا', 'ارسم دائرة', 'لوّن النجمة', 'امسح السبورة'], answerIndex: 0, ar: 'ما معنى Draw a square؟' },
    ],
  },

  /* ================= lesson 5 — Days and Months ================= */
  {
    num: 5,
    tags: ['time', 'days-months'],
    objectives: [
      'Name the days of the week',
      'Name the months of the year',
      'Talk about weekly plans',
    ],
    grammar: {
      explanation: 'There are seven days in a week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday. Days and months always start with a capital letter in English. Use "on" with days: "I go to work on Monday". Use "in" with months: "My birthday is in June". A week has seven days, a month has about thirty days, and a year has twelve months. The weekend is usually Saturday and Sunday.',
      explanationAr: 'في الأسبوع سبعة أيام: الاثنين، الثلاثاء، الأربعاء، الخميس، الجمعة، السبت والأحد. تبدأ الأيام والشهور دائما بحرف كبير في الإنجليزية. استخدم on مع الأيام: I go to work on Monday. واستخدم in مع الشهور: My birthday is in June. الأسبوع سبعة أيام، والشهر نحو ثلاثين يوما، والسنة اثنا عشر شهرا. وعطلة نهاية الأسبوع عادة السبت والأحد.',
      examples: [
        { en: 'Today is Sunday. Tomorrow is Monday.', ar: 'اليوم الأحد. غدا الاثنين.' },
        { en: 'We visit grandma on Friday.', ar: 'نزور الجدة يوم الجمعة.' },
        { en: 'My birthday is in June.', ar: 'عيد ميلادي في يونيو.' },
      ],
    },
    vocabulary: [
      { word: 'Monday', meaningAr: 'الاثنين', example: 'I go to work on Monday.' },
      { word: 'Friday', meaningAr: 'الجمعة', example: 'Friday is my favorite day.' },
      { word: 'Sunday', meaningAr: 'الأحد', example: 'Today is Sunday.' },
      { word: 'week', meaningAr: 'أسبوع', example: 'There are seven days in a week.' },
      { word: 'weekend', meaningAr: 'عطلة نهاية الأسبوع', example: 'I rest on the weekend.' },
      { word: 'month', meaningAr: 'شهر', example: 'There are twelve months in a year.' },
      { word: 'year', meaningAr: 'سنة', example: 'A year has twelve months.' },
      { word: 'birthday', meaningAr: 'عيد ميلاد', example: 'My birthday is in June.' },
      { word: 'January', meaningAr: 'يناير', example: 'It is cold in January.' },
      { word: 'July', meaningAr: 'يوليو', example: 'We travel in July.' },
      { word: 'September', meaningAr: 'سبتمبر', example: 'School starts in September.' },
      { word: 'today', meaningAr: 'اليوم', example: 'Today is Wednesday.' },
    ],
    scenario: [
      { en: 'Today is Sunday.', ar: 'اليوم الأحد.', d: 1 },
      { en: 'Tomorrow is Monday.', ar: 'غدا الاثنين.', d: 1 },
      { en: 'I go to work on Monday.', ar: 'أذهب إلى العمل يوم الاثنين.', d: 1 },
      { en: 'We visit grandma on Friday.', ar: 'نزور الجدة يوم الجمعة.', d: 2 },
      { en: 'The weekend is on Saturday and Sunday.', ar: 'عطلة نهاية الأسبوع في السبت والأحد.', d: 2 },
      { en: 'My birthday is in June.', ar: 'عيد ميلادي في يونيو.', d: 1 },
      { en: 'School starts in September.', ar: 'تبدأ المدرسة في سبتمبر.', d: 1 },
      { en: 'There are seven days in a week.', ar: 'في الأسبوع سبعة أيام.', d: 1 },
      { en: 'There are twelve months in a year.', ar: 'في السنة اثنا عشر شهرا.', d: 1 },
      { en: 'I was born in March.', ar: 'وُلدت في مارس.', d: 2 },
      { en: 'We travel in July.', ar: 'نسافر في يوليو.', d: 1 },
      { en: 'Friday is my favorite day.', ar: 'الجمعة يومي المفضل.', d: 2 },
      { en: 'The meeting is on Wednesday.', ar: 'الاجتماع يوم الأربعاء.', d: 2 },
      { en: 'It is very hot in August.', ar: 'الجو حار جدا في أغسطس.', d: 2 },
      { en: 'I study English on Tuesday.', ar: 'أدرس الإنجليزية يوم الثلاثاء.', d: 1 },
      { en: 'The new year starts in January.', ar: 'تبدأ السنة الجديدة في يناير.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Today is {D}.', arTmpl: 'اليوم {D_ar}.',
        slots: { D: B.DAYS },
        tags: ['days-months'], d: 1, limit: 7,
      },
      {
        tmpl: 'I {V} on {D}.', arTmpl: 'أنا {V_ar} يوم {D_ar}.',
        slots: {
          V: [
            { en: 'work', ar: 'أعمل' }, { en: 'study', ar: 'أدرس' },
            { en: 'rest', ar: 'أستريح' }, { en: 'visit my family', ar: 'أزور عائلتي' },
          ],
          D: B.DAYS,
        },
        tags: ['days-months', 'present-simple'], d: 1, limit: 20,
      },
      {
        tmpl: 'My birthday is in {M}.', arTmpl: 'عيد ميلادي في {M_ar}.',
        slots: { M: B.MONTHS },
        tags: ['days-months'], d: 1, limit: 12,
      },
      {
        tmpl: 'We travel in {M}.', arTmpl: 'نسافر في شهر {M_ar}.',
        slots: { M: B.MONTHS },
        tags: ['days-months', 'present-simple'], d: 2, limit: 12,
      },
      {
        tmpl: '{D} is my favorite day.', arTmpl: '{D_ar} يومي المفضل.',
        slots: { D: B.DAYS },
        tags: ['days-months'], d: 1, limit: 7,
      },
    ],
    fills: [
      { en: 'Today is Sunday.', ar: 'اليوم الأحد.', word: 'Today' },
      { en: 'There are seven days in a week.', ar: 'في الأسبوع سبعة أيام.', word: 'week', hint: 'زمن' },
      { en: 'My birthday is in June.', ar: 'عيد ميلادي في يونيو.', word: 'birthday' },
      { en: 'We travel in July.', ar: 'نسافر في يوليو.', word: 'travel' },
      { en: 'School starts in September.', ar: 'تبدأ المدرسة في سبتمبر.', word: 'September' },
      { en: 'I go to work on Monday.', ar: 'أذهب إلى العمل يوم الاثنين.', word: 'Monday' },
      { en: 'Friday is my favorite day.', ar: 'الجمعة يومي المفضل.', word: 'favorite' },
      { en: 'There are twelve months in a year.', ar: 'في السنة اثنا عشر شهرا.', word: 'months' },
    ],
    orders: [
      { en: 'Today is a beautiful Sunday.', ar: 'اليوم أحد جميل.' },
      { en: 'Tomorrow is Monday, my friend.', ar: 'غدا الاثنين يا صديقي.' },
      { en: 'My birthday is in June.', ar: 'عيد ميلادي في يونيو.' },
      { en: 'We visit grandma on Friday.', ar: 'نزور الجدة يوم الجمعة.' },
      { en: 'There are seven days in a week.', ar: 'في الأسبوع سبعة أيام.' },
      { en: 'I go to work on Monday.', ar: 'أذهب إلى العمل يوم الاثنين.' },
    ],
    mc: [
      { question: 'Which day comes after Thursday?', options: ['Friday', 'Monday', 'Sunday', 'Tuesday'], answerIndex: 0, ar: 'أي يوم يأتي بعد الخميس؟' },
      { question: 'Which preposition do you use with days?', options: ['on Monday', 'in Monday', 'at Monday', 'of Monday'], answerIndex: 0, ar: 'أي حرف جر تستخدم مع الأيام؟' },
      { question: 'How many months are in a year?', options: ['twelve', 'seven', 'thirty', 'ten'], answerIndex: 0, ar: 'كم شهرا في السنة؟' },
      { question: '"School starts in September" means:', options: ['تبدأ المدرسة في سبتمبر', 'تنتهي المدرسة في سبتمبر', 'المدرسة يوم الاثنين', 'الاجتماع سبتمبر'], answerIndex: 0, ar: 'ما معنى School starts in September؟' },
    ],
  },
];
