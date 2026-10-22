/* ============================================================
   v2 section data — s01-b.js
   Foundations & Core Communication · lessons 6–10
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 6 — Numbers, Age and Basic Information ================= */
  {
    num: 6,
    tags: ['numbers', 'personal-info'],
    objectives: [
      'Count from one to twenty in words',
      'Say and ask about age',
      'Give your phone number and basic personal data',
    ],
    grammar: {
      explanation: 'Numbers are everywhere in daily life. Count from one to twenty: one, two, three ... twenty. Use number words with nouns: "two brothers", "ten students". For age, use the verb be: "I am twenty-one years old", "My sister is six years old", and ask "How old is he?". Say phone numbers with digits, group by group: "My phone number is 0100 123 4567". For basic personal data you can give your name, age, phone number and address: "I live at number five, Palm Street".',
      explanationAr: 'الأرقام في كل مكان في حياتنا. عدّ من واحد إلى عشرين: one, two, three ... twenty. استخدم كلمات الأرقام مع الأسماء: two brothers، ten students. وللعمر استخدم فعل الكينونة: I am twenty-one years old، My sister is six years old، واسأل How old is he؟ قل رقم الهاتف بالأرقام مجموعة مجموعة: My phone number is 0100 123 4567. ولمعطياتك الأساسية اذكر اسمك وعمرك ورقم هاتفك وعنوانك: I live at number five, Palm Street.',
      examples: [
        { en: 'I am twenty-one years old.', ar: 'عمري واحد وعشرون عاما.' },
        { en: 'My sister is six years old.', ar: 'عمر أختي ست سنوات.' },
        { en: 'What is your phone number?', ar: 'ما رقم هاتفك؟' },
      ],
    },
    vocabulary: [
      { word: 'one', meaningAr: 'واحد', example: 'I have one sister.', ipa: 'wʌn' },
      { word: 'two', meaningAr: 'اثنان', example: 'I have two brothers.' },
      { word: 'three', meaningAr: 'ثلاثة', example: 'My cousin is three years old.' },
      { word: 'seven', meaningAr: 'سبعة', example: 'A week has seven days.' },
      { word: 'ten', meaningAr: 'عشرة', example: 'Please count to ten.' },
      { word: 'twelve', meaningAr: 'اثنا عشر', example: 'My room number is twelve.' },
      { word: 'fifteen', meaningAr: 'خمسة عشر', example: 'There are fifteen students in my class.' },
      { word: 'twenty', meaningAr: 'عشرون', example: 'I count to twenty in English.' },
      { word: 'number', meaningAr: 'رقم', example: 'What is your phone number?' },
      { word: 'phone number', meaningAr: 'رقم الهاتف', example: 'My phone number is 0100 123 4567.' },
      { word: 'count', meaningAr: 'يعد', example: 'Count the books, please.' },
      { word: 'address', meaningAr: 'عنوان', example: 'I live at number five, Palm Street.' },
    ],
    scenario: [
      { en: 'I have two brothers and one sister.', ar: 'لدي أخوان وأخت واحدة.', d: 1 },
      { en: 'My sister is six years old.', ar: 'عمر أختي ست سنوات.', d: 1 },
      { en: 'How old is your brother?', ar: 'كم عمر أخيك؟', d: 1 },
      { en: 'He is nine years old.', ar: 'عمره تسع سنوات.', d: 1 },
      { en: 'I am twenty-one years old.', ar: 'عمري واحد وعشرون عاما.', d: 1 },
      { en: 'What is your phone number?', ar: 'ما رقم هاتفك؟', d: 1 },
      { en: 'My phone number is 0100 123 4567.', ar: 'رقم هاتفي هو 0100 123 4567.', d: 2 },
      { en: 'I am not good at numbers.', ar: 'لست جيدا في الأرقام.', d: 2 },
      { en: 'Please count from one to ten.', ar: 'عُدّ من واحد إلى عشرة من فضلك.', d: 1 },
      { en: 'There are fifteen students in my class.', ar: 'في صفّي خمسة عشر طالبا.', d: 1 },
      { en: 'There is one big window in my room.', ar: 'في غرفتي نافذة واحدة كبيرة.', d: 2 },
      { en: 'How many brothers do you have?', ar: 'كم أخا لديك؟', d: 1 },
      { en: 'My grandmother is seventy years old.', ar: 'عمر جدتي سبعون عاما.', d: 2 },
      { en: 'A week has seven days.', ar: 'الأسبوع فيه سبعة أيام.', d: 1 },
      { en: 'I live at number five, Palm Street.', ar: 'أسكن في رقم خمسة شارع النخيل.', d: 2 },
      { en: 'My cousin Maya is fifteen years old.', ar: 'ابنة عمي مايا عمرها خمس عشرة سنة.', d: 2 },
      { en: 'How old are your sisters?', ar: 'كم عمر أخواتك؟', d: 2 },
      { en: 'They are ten and thirteen.', ar: 'أعمارهما عشر وثلاث عشرة سنة.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'My {F} is {A} years old.', arTmpl: 'عمر {F_ar} {A_ar} سنوات.',
        slots: {
          F: [
            { en: 'brother', ar: 'أخي', g: 'm' }, { en: 'sister', ar: 'أختي', g: 'f' },
            { en: 'son', ar: 'ابني', g: 'm' }, { en: 'daughter', ar: 'ابنتي', g: 'f' },
            { en: 'cousin', ar: 'ابن عمي', g: 'm' },
          ],
          A: [
            { en: 'three', ar: 'ثلاث' }, { en: 'four', ar: 'أربع' },
            { en: 'five', ar: 'خمس' }, { en: 'seven', ar: 'سبع' },
            { en: 'eight', ar: 'ثماني' }, { en: 'ten', ar: 'عشر' },
          ],
        },
        tags: ['numbers', 'personal-info'], d: 1, limit: 24,
      },
      {
        tmpl: '{P} is {A} years old.', arTmpl: '{P_ar} {A_ar}.',
        slots: {
          P: [
            { en: 'He', ar: 'عمره' }, { en: 'She', ar: 'عمرها' },
          ],
          A: [
            { en: 'two', ar: 'سنتان' }, { en: 'three', ar: 'ثلاث سنوات' },
            { en: 'four', ar: 'أربع سنوات' }, { en: 'five', ar: 'خمس سنوات' },
            { en: 'six', ar: 'ست سنوات' }, { en: 'seven', ar: 'سبع سنوات' },
            { en: 'eight', ar: 'ثماني سنوات' },
          ],
        },
        tags: ['numbers', 'personal-info'], d: 1, limit: 14,
      },
      {
        tmpl: 'My phone number is {N}.', arTmpl: 'رقم هاتفي هو {N_ar}.',
        slots: {
          N: [
            { en: '0111 234 5678', ar: '0111 234 5678' },
            { en: '0122 345 6789', ar: '0122 345 6789' },
            { en: '0500 111 2233', ar: '0500 111 2233' },
          ],
        },
        tags: ['numbers', 'personal-info'], d: 2, limit: 3,
      },
      {
        tmpl: 'I see {N} {O} on the table.', arTmpl: 'أرى {N_ar} {O_ar} على الطاولة.',
        slots: {
          N: [
            { en: 'three', ar: 'ثلاثة' }, { en: 'four', ar: 'أربعة' },
            { en: 'five', ar: 'خمسة' }, { en: 'six', ar: 'ستة' },
            { en: 'seven', ar: 'سبعة' }, { en: 'eight', ar: 'ثمانية' },
          ],
          O: [
            { en: 'books', ar: 'كتب' }, { en: 'pens', ar: 'أقلام' },
            { en: 'keys', ar: 'مفاتيح' }, { en: 'cups', ar: 'أكواب' },
            { en: 'phones', ar: 'هواتف' },
          ],
        },
        tags: ['numbers', 'present-simple'], d: 2, limit: 20,
      },
      {
        tmpl: 'How many {O} do you have?', arTmpl: 'كم {O_ar} لديك؟',
        slots: {
          O: [
            { en: 'books', ar: 'كتابا' }, { en: 'pens', ar: 'قلما' },
            { en: 'keys', ar: 'مفتاحا' }, { en: 'rooms', ar: 'غرفة' },
            { en: 'chairs', ar: 'كرسيا' },
          ],
        },
        tags: ['numbers', 'questions'], d: 1, limit: 5,
      },
    ],
    fills: [
      { en: 'I have two brothers and one sister.', ar: 'لدي أخوان وأخت واحدة.', word: 'two', hint: 'رقم' },
      { en: 'How old is your brother?', ar: 'كم عمر أخيك؟', word: 'old', hint: 'السؤال عن العمر' },
      { en: 'What is your phone number?', ar: 'ما رقم هاتفك؟', word: 'number' },
      { en: 'I am not good at numbers.', ar: 'لست جيدا في الأرقام.', word: 'good', hint: 'صفة' },
      { en: 'Please count from one to ten.', ar: 'عُدّ من واحد إلى عشرة من فضلك.', word: 'count' },
      { en: 'There are fifteen students in my class.', ar: 'في صفّي خمسة عشر طالبا.', word: 'fifteen', hint: 'رقم' },
      { en: 'I live at number five, Palm Street.', ar: 'أسكن في رقم خمسة شارع النخيل.', word: 'five' },
      { en: 'My grandmother is seventy years old.', ar: 'عمر جدتي سبعون عاما.', word: 'seventy', hint: 'رقم' },
    ],
    orders: [
      { en: 'My sister is six years old.', ar: 'عمر أختي ست سنوات.' },
      { en: 'What is your phone number?', ar: 'ما رقم هاتفك؟' },
      { en: 'There are fifteen students in my class.', ar: 'في صفّي خمسة عشر طالبا.' },
      { en: 'I have two brothers and one sister.', ar: 'لدي أخوان وأخت واحدة.' },
      { en: 'Please count from one to ten.', ar: 'عُدّ من واحد إلى عشرة من فضلك.' },
      { en: 'I am twenty-one years old.', ar: 'عمري واحد وعشرون عاما.' },
    ],
    mc: [
      { question: 'Which number word means 12?', options: ['twelve', 'twenty', 'two', 'ten'], answerIndex: 0, ar: 'أي كلمة رقمية تعني 12؟' },
      { question: 'How do you ask about age?', options: ['How old are you?', 'How many are you?', 'What is your name?', 'Where are you old?'], answerIndex: 1, ar: 'كيف تسأل عن العمر؟' },
      { question: 'Choose the correct sentence:', options: ['I have two brothers.', 'I have two brother.', 'I has two brothers.', 'I have second brothers.'], answerIndex: 0, ar: 'اختر الجملة الصحيحة:' },
      { question: '"My phone number is 0100 123 4567." — this sentence gives your:', options: ['phone number', 'age', 'address', 'job'], answerIndex: 2, ar: 'الجملة تعطي:' },
    ],
  },

  /* ================= lesson 7 — Family Members ================= */
  {
    num: 7,
    tags: ['family', 'verb-have'],
    objectives: [
      'Name the members of a family',
      'Introduce your family with be and have',
      'Ask simple questions about family',
    ],
    grammar: {
      explanation: 'Family words name the people in your home: mother, father, brother, sister, grandmother, grandfather, uncle, aunt, cousin, son and daughter. Use "my" before family words: "my mother", "my cousins". Introduce one person with "This is my brother" and a group with "These are my parents". Use have/has to talk about your family: "I have two sisters", "She has one brother". Ask simple questions: "How many people are in your family?", "Do you have any brothers?".',
      explanationAr: 'كلمات العائلة تسمي أفراد بيتك: الأم والأب والأخ والأخت والجدة والجد والعم والعمة وابن العم والابن والابنة. استخدم my قبل كلمات العائلة: my mother، my cousins. قدّم شخصا واحدا بـ This is my brother ومجموعة بـ These are my parents. واستخدم have/has للحديث عن عائلتك: I have two sisters، She has one brother. واسأل أسئلة بسيطة: How many people are in your family؟ وDo you have any brothers؟',
      examples: [
        { en: 'This is my mother. She is a teacher.', ar: 'هذه أمي. هي معلمة.' },
        { en: 'I have one brother and two sisters.', ar: 'لدي أخ واحد وأختان.' },
        { en: 'How many people are in your family?', ar: 'كم عدد أفراد عائلتك؟' },
      ],
    },
    vocabulary: [
      { word: 'mother', meaningAr: 'الأم', example: 'My mother is a teacher.' },
      { word: 'father', meaningAr: 'الأب', example: 'My father is a doctor.' },
      { word: 'brother', meaningAr: 'الأخ', example: 'My brother is very tall.' },
      { word: 'sister', meaningAr: 'الأخت', example: 'My sister is six years old.' },
      { word: 'grandmother', meaningAr: 'الجدة', example: 'My grandmother lives with us.' },
      { word: 'grandfather', meaningAr: 'الجد', example: 'My grandfather is old and kind.' },
      { word: 'uncle', meaningAr: 'العم / الخال', example: 'My uncle is a taxi driver.' },
      { word: 'aunt', meaningAr: 'العمة / الخالة', example: 'My aunt lives in Morocco.' },
      { word: 'cousin', meaningAr: 'ابن العم / ابنة العم', example: 'My cousin Ahmed is a student.' },
      { word: 'son', meaningAr: 'الابن', example: 'My son is one year old.' },
      { word: 'daughter', meaningAr: 'الابنة', example: 'My daughter is three years old.' },
      { word: 'parents', meaningAr: 'الوالدان', example: 'My parents are not old.' },
    ],
    scenario: [
      { en: 'This is my father.', ar: 'هذا أبي.', d: 1 },
      { en: 'My father is a good doctor.', ar: 'أبي طبيب جيد.', d: 1 },
      { en: 'My mother is an English teacher.', ar: 'أمي معلمة إنجليزية.', d: 1 },
      { en: 'I have one brother and two sisters.', ar: 'لدي أخ واحد وأختان.', d: 1 },
      { en: 'These are my grandparents.', ar: 'هؤلاء جداي.', d: 2 },
      { en: 'My grandparents live with us.', ar: 'جدا يسكان معنا.', d: 2 },
      { en: 'He is my uncle.', ar: 'هو عمي.', d: 1 },
      { en: 'My uncle is a taxi driver.', ar: 'عمي سائق سيارة أجرة.', d: 1 },
      { en: 'My aunt lives in Morocco.', ar: 'عمتي تسكن في المغرب.', d: 2 },
      { en: 'Who is this man?', ar: 'من هذا الرجل؟', d: 1 },
      { en: 'He is my grandfather.', ar: 'هو جدي.', d: 1 },
      { en: 'How many people are in your family?', ar: 'كم عدد أفراد عائلتك؟', d: 1 },
      { en: 'There are six people in my family.', ar: 'في عائلتي ستة أفراد.', d: 1 },
      { en: 'Do you have any brothers or sisters?', ar: 'هل لديك إخوة أو أخوات؟', d: 2 },
      { en: 'Yes, I have two brothers.', ar: 'نعم، لدي أخوان.', d: 2 },
      { en: 'My cousin Ahmed is a student.', ar: 'ابن عمي أحمد طالب.', d: 2 },
      { en: 'My parents are not old.', ar: 'والداي ليسا كبيرين في السن.', d: 2 },
      { en: 'Please say hello to your family.', ar: 'قل مرحبا لعائلتك من فضلك.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'My {F} is {J}.', arTmpl: '{F_ar} {J_ar}.',
        slots: {
          F: [
            { en: 'father', ar: 'أبي', g: 'm' }, { en: 'mother', ar: 'أمي', g: 'f' },
            { en: 'brother', ar: 'أخي', g: 'm' }, { en: 'sister', ar: 'أختي', g: 'f' },
            { en: 'uncle', ar: 'عمي', g: 'm' }, { en: 'aunt', ar: 'عمتي', g: 'f' },
            { en: 'cousin', ar: 'ابن عمي', g: 'm' }, { en: 'grandfather', ar: 'جدي', g: 'm' },
          ],
          J: (x) => [
            { en: 'a doctor', ar: x.F.g === 'f' ? 'طبيبة' : 'طبيب' },
            { en: 'a teacher', ar: x.F.g === 'f' ? 'معلمة' : 'معلم' },
            { en: 'an engineer', ar: x.F.g === 'f' ? 'مهندسة' : 'مهندس' },
            { en: 'a nurse', ar: x.F.g === 'f' ? 'ممرضة' : 'ممرض' },
            { en: 'a student', ar: x.F.g === 'f' ? 'طالبة' : 'طالب' },
            { en: 'a worker', ar: x.F.g === 'f' ? 'عاملة' : 'عامل' },
          ],
        },
        tags: ['family', 'jobs'], d: 1, limit: 24,
      },
      {
        tmpl: 'I have {S}.', arTmpl: 'لدي {S_ar}.',
        slots: {
          S: [
            { en: 'one brother', ar: 'أخ واحد' }, { en: 'two brothers', ar: 'أخوان' },
            { en: 'one sister', ar: 'أخت واحدة' }, { en: 'two sisters', ar: 'أختان' },
            { en: 'three sisters', ar: 'ثلاث أخوات' }, { en: 'three cousins', ar: 'ثلاثة أبناء عمومة' },
            { en: 'two children', ar: 'طفلان' }, { en: 'one son', ar: 'ابن واحد' },
            { en: 'one daughter', ar: 'ابنة واحدة' },
          ],
        },
        tags: ['family', 'verb-have'], d: 1, limit: 9,
      },
      {
        tmpl: '{D} is my {F}.', arTmpl: '{D_ar} {F_ar}.',
        slots: {
          F: [
            { en: 'mother', ar: 'أمي', g: 'f' }, { en: 'sister', ar: 'أختي', g: 'f' },
            { en: 'brother', ar: 'أخي', g: 'm' }, { en: 'grandmother', ar: 'جدتي', g: 'f' },
            { en: 'grandfather', ar: 'جدي', g: 'm' }, { en: 'aunt', ar: 'عمتي', g: 'f' },
            { en: 'uncle', ar: 'عمي', g: 'm' },
          ],
          D: (x) => [{ en: 'This', ar: x.F.g === 'f' ? 'هذه' : 'هذا' }],
        },
        tags: ['family', 'demonstratives'], d: 1, limit: 7,
      },
      {
        tmpl: 'These are my {P}.', arTmpl: 'هؤلاء {P_ar}.',
        slots: {
          P: [
            { en: 'parents', ar: 'والداي' }, { en: 'brothers', ar: 'إخوتي' },
            { en: 'sisters', ar: 'أخواتي' }, { en: 'children', ar: 'أبنائي' },
            { en: 'cousins', ar: 'أبناء عمي' },
          ],
        },
        tags: ['family', 'plural'], d: 2, limit: 5,
      },
      {
        tmpl: 'My {F} is my best friend.', arTmpl: 'أفضل صديق لي هو {F_ar}.',
        slots: {
          F: [
            { en: 'brother', ar: 'أخي' }, { en: 'father', ar: 'أبي' },
            { en: 'cousin', ar: 'ابن عمي' }, { en: 'uncle', ar: 'عمي' },
            { en: 'grandfather', ar: 'جدي' },
          ],
        },
        tags: ['family'], d: 2, limit: 5,
      },
    ],
    fills: [
      { en: 'This is my father.', ar: 'هذا أبي.', word: 'father', hint: 'فرد العائلة' },
      { en: 'I have one brother and two sisters.', ar: 'لدي أخ واحد وأختان.', word: 'have', hint: 'فعل الملكية' },
      { en: 'How many people are in your family?', ar: 'كم عدد أفراد عائلتك؟', word: 'family' },
      { en: 'My mother is an English teacher.', ar: 'أمي معلمة إنجليزية.', word: 'mother', hint: 'فرد العائلة' },
      { en: 'My grandparents live with us.', ar: 'جدا يسكان معنا.', word: 'live' },
      { en: 'Do you have any brothers or sisters?', ar: 'هل لديك إخوة أو أخوات؟', word: 'any' },
      { en: 'My cousin Ahmed is a student.', ar: 'ابن عمي أحمد طالب.', word: 'cousin', hint: 'فرد العائلة' },
      { en: 'My parents are not old.', ar: 'والداي ليسا كبيرين في السن.', word: 'parents', hint: 'فرد العائلة' },
    ],
    orders: [
      { en: 'This is my father.', ar: 'هذا أبي.' },
      { en: 'How many people are in your family?', ar: 'كم عدد أفراد عائلتك؟' },
      { en: 'My uncle is a taxi driver.', ar: 'عمي سائق سيارة أجرة.' },
      { en: 'I have one brother and two sisters.', ar: 'لدي أخ واحد وأختان.' },
      { en: 'My parents are not old.', ar: 'والداي ليسا كبيرين في السن.' },
      { en: 'These are my two little sisters.', ar: 'هذه أختاي الصغيرتان.' },
    ],
    mc: [
      { question: 'My mother\'s mother is my ___:', options: ['grandmother', 'aunt', 'sister', 'cousin'], answerIndex: 0, ar: 'أم أمي هي:' },
      { question: 'Which sentence is correct?', options: ['I have two sisters.', 'I has two sisters.', 'I am two sisters.', 'I have two sister.'], answerIndex: 1, ar: 'أي جملة صحيحة؟' },
      { question: '"My uncle is a taxi driver" means:', options: ['عمي سائق سيارة أجرة', 'عمي طبيب', 'عمتي معلمة', 'جدي مزارع'], answerIndex: 0, ar: 'ما معنى الجملة؟' },
      { question: 'You introduce one person. You say:', options: ['This is my brother.', 'These are my brother.', 'Those is my brothers.', 'This are my brother.'], answerIndex: 0, ar: 'تقدم شخصا واحدا فتقول:' },
    ],
  },

  /* ================= lesson 8 — Describing Appearance ================= */
  {
    num: 8,
    tags: ['appearance', 'adjectives'],
    objectives: [
      'Describe height, age and build with adjectives',
      'Use have/has for hair, eyes and features',
      'Ask what someone looks like',
    ],
    grammar: {
      explanation: 'To describe people, use adjectives after the verb be: "He is tall", "She is short", "They are young". Adjectives never change in English: "He is tall" and "They are tall". For features, use have/has: "She has long hair", "He has a beard", "My cousin wears glasses". Put size before color: "long black hair". To ask about looks, say "What does he look like?" — the answer is "He is tall with short hair".',
      explanationAr: 'لوصف الأشخاص استخدم الصفات بعد فعل الكينونة: He is tall، She is short، They are young. الصفات لا تتغير في الإنجليزية: He is tall وThey are tall. وللملامح استخدم have/has: She has long hair، He has a beard، وMy cousin wears glasses. ضع الحجم قبل اللون: long black hair. وللسؤال عن المظهر قل What does he look like؟ والجواب He is tall with short hair.',
      examples: [
        { en: 'My brother is tall and strong.', ar: 'أخي طويل وقوي.' },
        { en: 'She has long black hair.', ar: 'لديها شعر طويل أسود.' },
        { en: 'What does your sister look like?', ar: 'كيف يبدو مظهر أختك؟' },
      ],
    },
    vocabulary: [
      { word: 'tall', meaningAr: 'طويل', example: 'My brother is tall.' },
      { word: 'short', meaningAr: 'قصير', example: 'My sister is short.' },
      { word: 'thin', meaningAr: 'نحيف', example: 'The young man is thin.' },
      { word: 'strong', meaningAr: 'قوي', example: 'My father is strong.' },
      { word: 'young', meaningAr: 'شاب', example: 'The teacher is young.' },
      { word: 'old', meaningAr: 'كبير في السن', example: 'My grandmother is old.' },
      { word: 'hair', meaningAr: 'شعر', example: 'She has long hair.' },
      { word: 'eyes', meaningAr: 'عينان', example: 'I have brown eyes.' },
      { word: 'beard', meaningAr: 'لحية', example: 'My father has a beard.' },
      { word: 'glasses', meaningAr: 'نظارة', example: 'My cousin wears glasses.' },
      { word: 'beautiful', meaningAr: 'جميلة', example: 'Your daughter is beautiful.' },
      { word: 'handsome', meaningAr: 'وسيم', example: 'The new student is handsome.' },
    ],
    scenario: [
      { en: 'My brother is tall and strong.', ar: 'أخي طويل وقوي.', d: 1 },
      { en: 'My sister is short and thin.', ar: 'أختي قصيرة ونحيفة.', d: 1 },
      { en: 'He is not very tall.', ar: 'هو ليس طويلا جدا.', d: 1 },
      { en: 'She has long black hair.', ar: 'لديها شعر طويل أسود.', d: 1 },
      { en: 'My father has a beard.', ar: 'لدي أبي لحية.', d: 1 },
      { en: 'My grandfather is old and kind.', ar: 'جدي كبير في السن وطيب.', d: 2 },
      { en: 'What does your sister look like?', ar: 'كيف يبدو مظهر أختك؟', d: 1 },
      { en: 'She is tall with curly hair.', ar: 'هي طويلة وشعرها مجعد.', d: 1 },
      { en: 'My cousin wears glasses.', ar: 'ابن عمي يرتدي نظارة.', d: 1 },
      { en: 'I have brown eyes.', ar: 'لدي عينان بنيتان.', d: 1 },
      { en: 'Her eyes are big and beautiful.', ar: 'عيناها كبيرتان وجميلتان.', d: 2 },
      { en: 'Is your teacher young or old?', ar: 'هل معلمك شاب أم كبير في السن؟', d: 2 },
      { en: 'She is young and very kind.', ar: 'هي شابة وطيبة جدا.', d: 2 },
      { en: 'Does he have a beard?', ar: 'هل لديه لحية؟', d: 2 },
      { en: 'Yes, he has a long beard.', ar: 'نعم، لديه لحية طويلة.', d: 2 },
      { en: 'Please describe your friend for me.', ar: 'صِف لي صديقك من فضلك.', d: 2 },
      { en: 'I am not tall, but I am strong.', ar: 'لست طويلا لكني قوي.', d: 2 },
      { en: 'My two brothers are very tall.', ar: 'أخواي طويلان جدا.', d: 2 },
    ],
    patterns: [
      {
        tmpl: '{P} is {ADJ}.', arTmpl: '{P_ar} {ADJ_ar}.',
        slots: {
          P: [
            { en: 'My brother', ar: 'أخي', g: 'm' }, { en: 'My sister', ar: 'أختي', g: 'f' },
            { en: 'My father', ar: 'أبي', g: 'm' }, { en: 'My mother', ar: 'أمي', g: 'f' },
            { en: 'My cousin', ar: 'ابن عمي', g: 'm' }, { en: 'My grandmother', ar: 'جدتي', g: 'f' },
            { en: 'The teacher', ar: 'المعلم', g: 'm' },
          ],
          ADJ: (x) => Object.entries(B.APPEARANCE)
            .filter(([k]) => !(x.P.g === 'f' && k === 'handsome') && !(x.P.g === 'm' && k === 'beautiful'))
            .map(([k, v]) => ({ en: k, ar: x.P.g === 'f' ? v.f : v.m })),
        },
        tags: ['appearance', 'adjectives'], d: 1, limit: 24,
      },
      {
        tmpl: '{P} has {F}.', arTmpl: '{P_ar} {F_ar}.',
        slots: {
          P: [
            { en: 'He', ar: 'لديه' }, { en: 'She', ar: 'لديها' },
            { en: 'My father', ar: 'لدي أبي' }, { en: 'My mother', ar: 'لدي أمي' },
            { en: 'My cousin', ar: 'لدي ابن عمي' },
          ],
          F: [
            { en: 'long hair', ar: 'شعر طويل' }, { en: 'short hair', ar: 'شعر قصير' },
            { en: 'black hair', ar: 'شعر أسود' }, { en: 'curly hair', ar: 'شعر مجعد' },
            { en: 'glasses', ar: 'نظارة' }, { en: 'brown eyes', ar: 'عينان بنيتان' },
            { en: 'a big smile', ar: 'ابتسامة كبيرة' },
          ],
        },
        tags: ['appearance', 'verb-have'], d: 1, limit: 24,
      },
      {
        tmpl: 'Is your {P} {ADJ}?', arTmpl: 'هل {P_ar} {ADJ_ar}؟',
        slots: {
          P: [
            { en: 'brother', ar: 'أخوك', g: 'm' }, { en: 'sister', ar: 'أختك', g: 'f' },
            { en: 'father', ar: 'أبوك', g: 'm' }, { en: 'mother', ar: 'أمك', g: 'f' },
            { en: 'cousin', ar: 'ابن عمك', g: 'm' }, { en: 'grandmother', ar: 'جدتك', g: 'f' },
            { en: 'friend', ar: 'صديقك', g: 'm' },
          ],
          ADJ: (x) => ['tall', 'short', 'young', 'old', 'strong', 'thin']
            .map((k) => ({ en: k, ar: x.P.g === 'f' ? B.APPEARANCE[k].f : B.APPEARANCE[k].m })),
        },
        tags: ['appearance', 'questions'], d: 2, limit: 20,
      },
    ],
    fills: [
      { en: 'My brother is tall and strong.', ar: 'أخي طويل وقوي.', word: 'tall', hint: 'صفة مظهر' },
      { en: 'She has long black hair.', ar: 'لديها شعر طويل أسود.', word: 'hair' },
      { en: 'My father has a beard.', ar: 'لدي أبي لحية.', word: 'beard' },
      { en: 'My cousin wears glasses.', ar: 'ابن عمي يرتدي نظارة.', word: 'glasses' },
      { en: 'I have brown eyes.', ar: 'لدي عينان بنيتان.', word: 'eyes' },
      { en: 'He is not very tall.', ar: 'هو ليس طويلا جدا.', word: 'very', hint: 'ظرف تدريج' },
      { en: 'What does your sister look like?', ar: 'كيف يبدو مظهر أختك؟', word: 'look', hint: 'فعل المظهر' },
      { en: 'My two brothers are very tall.', ar: 'أخواي طويلان جدا.', word: 'brothers' },
    ],
    orders: [
      { en: 'My brother is tall and strong.', ar: 'أخي طويل وقوي.' },
      { en: 'She has long black hair.', ar: 'لديها شعر طويل أسود.' },
      { en: 'My cousin wears glasses.', ar: 'ابن عمي يرتدي نظارة.' },
      { en: 'What does your sister look like?', ar: 'كيف يبدو مظهر أختك؟' },
      { en: 'My grandmother is old but happy.', ar: 'جدتي كبيرة في السن لكنها سعيدة.' },
      { en: 'I am not tall, but I am strong.', ar: 'لست طويلا لكني قوي.' },
    ],
    mc: [
      { question: 'Which sentence describes hair correctly?', options: ['She has long black hair.', 'She have long black hair.', 'She is long black hair.', 'She has hairs long black.'], answerIndex: 0, ar: 'أي جملة تصف الشعر بشكل صحيح؟' },
      { question: 'What does "thin" mean?', options: ['نحيف', 'طويل', 'قوي', 'شاب'], answerIndex: 0, ar: 'ما معنى thin؟' },
      { question: 'The opposite of "tall" is:', options: ['short', 'young', 'strong', 'big'], answerIndex: 1, ar: 'مضاد tall هو:' },
      { question: 'Ask about a person\'s looks:', options: ['What does he look like?', 'Where is he look?', 'How he looks like?', 'What he looks?'], answerIndex: 0, ar: 'اسأل عن مظهر شخص:' },
    ],
  },

  /* ================= lesson 9 — Question Words ================= */
  {
    num: 9,
    tags: ['questions', 'wh-words'],
    objectives: [
      'Use what, where, when, who, why and how',
      'Ask with whose, how many, how much and how old',
      'Give short full answers to questions',
    ],
    grammar: {
      explanation: 'Question words ask for different information: "What?" asks about a thing, "Where?" about a place, "When?" about a time, "Who?" about a person, "Why?" about a reason, and "How?" about manner or state. Use "Whose" for possession ("Whose bag is this?"), "How many" for countable things ("How many brothers do you have?"), "How much" for price or uncountable things ("How much is this shirt?"), and "How old" for age. The question word comes first, then the verb be or a helping verb: "Where is your car?", "What does this word mean?". Answer with a short full sentence.',
      explanationAr: 'أدوات الاستفهام تسأل عن معلومات مختلفة: What تسأل عن الشيء، وWhere عن المكان، وWhen عن الزمان، وWho عن الشخص، وWhy عن السبب، وHow عن الحالة أو الكيفية. استخدم Whose للملكية: Whose bag is this؟ وHow many للأشياء المعدودة: How many brothers do you have؟ وHow much للسعر أو غير المعدود: How much is this shirt؟ وHow old للعمر. تأتي أداة الاستفهام أولا ثم فعل الكينونة أو الفعل المساعد: Where is your car؟ وWhat does this word mean؟ وأجب بجملة قصيرة كاملة.',
      examples: [
        { en: 'Where is your car? It is here.', ar: 'أين سيارتك؟ إنها هنا.' },
        { en: 'Whose bag is this? It is Sara\'s bag.', ar: 'لمن هذه الحقيبة؟ إنها حقيبة سارة.' },
        { en: 'How many seasons are in the year?', ar: 'كم فصلا في السنة؟' },
      ],
    },
    vocabulary: [
      { word: 'what', meaningAr: 'ماذا', example: 'What is this?' },
      { word: 'where', meaningAr: 'أين', example: 'Where do you live now?' },
      { word: 'when', meaningAr: 'متى', example: 'When is your birthday?' },
      { word: 'who', meaningAr: 'من', example: 'Who is that woman?' },
      { word: 'why', meaningAr: 'لماذا', example: 'Why are you not at work?' },
      { word: 'how', meaningAr: 'كيف', example: 'How do you say this word?' },
      { word: 'whose', meaningAr: 'لمن', example: 'Whose bag is this?' },
      { word: 'how many', meaningAr: 'كم عدد (للمعدود)', example: 'How many students are in your class?' },
      { word: 'how much', meaningAr: 'بكم (للسعر وغير المعدود)', example: 'How much is this shirt?' },
      { word: 'how old', meaningAr: 'كم العمر', example: 'How old is your daughter?' },
      { word: 'question', meaningAr: 'سؤال', example: 'Please answer my question.' },
      { word: 'answer', meaningAr: 'جواب', example: 'I do not know the answer.' },
    ],
    scenario: [
      { en: 'What is this?', ar: 'ما هذا؟', d: 1 },
      { en: 'It is my new phone.', ar: 'إنه هاتفي الجديد.', d: 1 },
      { en: 'Where do you live now?', ar: 'أين تسكن الآن؟', d: 1 },
      { en: 'We live in Dubai.', ar: 'نسكن في دبي.', d: 1 },
      { en: 'When is your birthday?', ar: 'متى عيد ميلادك؟', d: 1 },
      { en: 'It is in April.', ar: 'إنه في أبريل.', d: 1 },
      { en: 'Who is that woman?', ar: 'من تلك المرأة؟', d: 1 },
      { en: 'She is my aunt.', ar: 'هي عمتي.', d: 1 },
      { en: 'Why are you not at work?', ar: 'لماذا لست في العمل؟', d: 2 },
      { en: 'Because today is Sunday.', ar: 'لأن اليوم أحد.', d: 2 },
      { en: 'Whose bag is this?', ar: 'لمن هذه الحقيبة؟', d: 2 },
      { en: 'It is Sara\'s bag.', ar: 'إنها حقيبة سارة.', d: 2 },
      { en: 'How many students are in your class?', ar: 'كم عدد الطلاب في صفك؟', d: 2 },
      { en: 'There are twenty students in my class.', ar: 'في صفّي عشرون طالبا.', d: 2 },
      { en: 'How much is this jacket?', ar: 'بكم هذه السترة؟', d: 2 },
      { en: 'It is ten dollars.', ar: 'إنها بعشرة دولارات.', d: 2 },
      { en: 'Please answer my question.', ar: 'أجب عن سؤالي من فضلك.', d: 2 },
      { en: 'Yes, of course.', ar: 'نعم بالتأكيد.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Where is your {T}?', arTmpl: 'أين {T_ar}؟',
        slots: {
          T: [
            { en: 'brother', ar: 'أخوك' }, { en: 'car', ar: 'سيارتك' },
            { en: 'phone', ar: 'هاتفك' }, { en: 'book', ar: 'كتابك' },
            { en: 'key', ar: 'مفتاحك' }, { en: 'friend', ar: 'صديقك' },
            { en: 'bag', ar: 'حقيبتك' }, { en: 'homework', ar: 'واجبك' },
            { en: 'money', ar: 'نقودك' },
          ],
        },
        tags: ['questions', 'wh-words'], d: 1, limit: 9,
      },
      {
        tmpl: 'What is your {T}?', arTmpl: 'ما {T_ar}؟',
        slots: {
          T: [
            { en: 'job', ar: 'وظيفتك' }, { en: 'favorite color', ar: 'لونك المفضل' },
            { en: 'address', ar: 'عنوانك' }, { en: 'favorite day', ar: 'يومك المفضل' },
            { en: 'favorite month', ar: 'شهرك المفضل' },
          ],
        },
        tags: ['questions', 'wh-words'], d: 1, limit: 5,
      },
      {
        tmpl: 'When is {E}?', arTmpl: 'متى {E_ar}؟',
        slots: {
          E: [
            { en: 'the meeting', ar: 'الاجتماع' }, { en: 'the party', ar: 'الحفلة' },
            { en: 'the exam', ar: 'الامتحان' }, { en: 'the school trip', ar: 'الرحلة المدرسية' },
            { en: 'your English class', ar: 'حصة الإنجليزية' }, { en: 'the football match', ar: 'مباراة كرة القدم' },
          ],
        },
        tags: ['questions', 'wh-words'], d: 2, limit: 6,
      },
      {
        tmpl: 'How many days are in {M}?', arTmpl: 'كم يوما في شهر {M_ar}؟',
        slots: { M: B.MONTHS },
        tags: ['questions', 'numbers'], d: 2, limit: 12,
      },
      {
        tmpl: 'Why are you {ADJ} today?', arTmpl: 'لماذا أنت {ADJ_ar} اليوم؟',
        slots: {
          ADJ: [
            { en: 'happy', ar: 'سعيد' }, { en: 'sad', ar: 'حزين' },
            { en: 'tired', ar: 'متعب' }, { en: 'angry', ar: 'غاضب' },
            { en: 'worried', ar: 'قلق' }, { en: 'excited', ar: 'متحمس' },
          ],
        },
        tags: ['questions', 'feelings'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'What is this?', ar: 'ما هذا؟', word: 'What', hint: 'أداة استفهام' },
      { en: 'Where do you live now?', ar: 'أين تسكن الآن؟', word: 'Where', hint: 'أداة استفهام' },
      { en: 'When is your birthday?', ar: 'متى عيد ميلادك؟', word: 'birthday' },
      { en: 'Who is that woman?', ar: 'من تلك المرأة؟', word: 'Who', hint: 'أداة استفهام' },
      { en: 'Why are you not at work?', ar: 'لماذا لست في العمل؟', word: 'Why', hint: 'أداة استفهام' },
      { en: 'Whose bag is this?', ar: 'لمن هذه الحقيبة؟', word: 'Whose', hint: 'أداة استفهام' },
      { en: 'How much is this jacket?', ar: 'بكم هذه السترة؟', word: 'much' },
      { en: 'Please answer my question.', ar: 'أجب عن سؤالي من فضلك.', word: 'question' },
    ],
    orders: [
      { en: 'Where do you live now?', ar: 'أين تسكن الآن؟' },
      { en: 'When is your birthday?', ar: 'متى عيد ميلادك؟' },
      { en: 'Why are you not at work?', ar: 'لماذا لست في العمل؟' },
      { en: 'How many students are in your class?', ar: 'كم عدد الطلاب في صفك؟' },
      { en: 'Whose bag is this?', ar: 'لمن هذه الحقيبة؟' },
      { en: 'How much is this jacket?', ar: 'بكم هذه السترة؟' },
    ],
    mc: [
      { question: 'Which word asks about a place?', options: ['Where', 'What', 'When', 'Who'], answerIndex: 0, ar: 'أي كلمة تسأل عن المكان؟' },
      { question: '___ bag is this? It is Omar\'s.', options: ['Whose', 'Who', 'Who\'s', 'How'], answerIndex: 1, ar: 'أكمل السؤال:' },
      { question: 'Choose the correct question:', options: ['How many sisters do you have?', 'How much sisters do you have?', 'How old sisters do you have?', 'What many sisters do you have?'], answerIndex: 0, ar: 'اختر السؤال الصحيح:' },
      { question: '"How much is this shirt?" asks about:', options: ['the price', 'the age', 'the place', 'the time'], answerIndex: 2, ar: 'السؤال يطلب:' },
    ],
  },

  /* ================= lesson 10 — Basic English Sentences ================= */
  {
    num: 10,
    tags: ['sentence-structure', 'present-simple'],
    objectives: [
      'Build sentences with subject, verb and complement',
      'Put words in the natural English order',
      'Make short affirmative and negative sentences',
    ],
    grammar: {
      explanation: 'A simple English sentence has a subject, a verb and a complement or object, in that order: "I read books", "She is a teacher", "We drink tea". The subject comes first, then the verb, then the rest. Use am/is/are before adjectives and nouns: "My sentence is short". Add "not" to make a negative: "This word is not easy", "I do not know". Start every sentence with a capital letter and finish it with a period (.), a question mark (?) or an exclamation mark (!).',
      explanationAr: 'الجملة الإنجليزية البسيطة تحتوي فاعلا وفعلًا ومفعولا أو تكملة بهذا الترتيب: I read books، She is a teacher، We drink tea. يأتي الفاعل أولا ثم الفعل ثم بقية الجملة. استخدم am/is/are قبل الصفات والأسماء: My sentence is short. ولتكوين النفي أضف not: This word is not easy، I do not know. ابدأ كل جملة بحرف كبير وأنهها بنقطة أو علامة استفهام أو تعجب.',
      examples: [
        { en: 'I read a book at night.', ar: 'أقرأ كتابا في الليل.' },
        { en: 'They eat rice at home.', ar: 'هم يأكلون الأرز في المنزل.' },
        { en: 'This word is not easy.', ar: 'هذه الكلمة ليست سهلة.' },
      ],
    },
    vocabulary: [
      { word: 'sentence', meaningAr: 'جملة', example: 'My sentence is short and easy.' },
      { word: 'word', meaningAr: 'كلمة', example: 'What does this word mean?' },
      { word: 'order', meaningAr: 'ترتيب', example: 'The order of words is important.' },
      { word: 'correct', meaningAr: 'صحيح', example: 'These sentences are correct.' },
      { word: 'wrong', meaningAr: 'خطأ', example: 'Those sentences are wrong.' },
      { word: 'easy', meaningAr: 'سهل', example: 'This word is easy.' },
      { word: 'hard', meaningAr: 'صعب', example: 'The question is hard.' },
      { word: 'read', meaningAr: 'يقرأ', example: 'I read a book at night.' },
      { word: 'write', meaningAr: 'يكتب', example: 'Please write your name here.' },
      { word: 'mean', meaningAr: 'يعني', example: 'It means water.' },
      { word: 'practice', meaningAr: 'يتمرن', example: 'We practice English at home.' },
      { word: 'understand', meaningAr: 'يفهم', example: 'Do you understand this sentence?' },
    ],
    scenario: [
      { en: 'I read a book at night.', ar: 'أقرأ كتابا في الليل.', d: 1 },
      { en: 'My sentence is short and easy.', ar: 'جملتي قصيرة وسهلة.', d: 1 },
      { en: 'This word is not easy.', ar: 'هذه الكلمة ليست سهلة.', d: 1 },
      { en: 'Please write your name here.', ar: 'اكتب اسمك هنا من فضلك.', d: 1 },
      { en: 'I write my homework every evening.', ar: 'أكتب واجبي كل مساء.', d: 2 },
      { en: 'We practice English at home.', ar: 'نتتمرن على الإنجليزية في المنزل.', d: 1 },
      { en: 'What does this word mean?', ar: 'ماذا تعني هذه الكلمة؟', d: 1 },
      { en: 'It means water.', ar: 'إنها تعني الماء.', d: 1 },
      { en: 'How do you say this word?', ar: 'كيف تقول هذه الكلمة؟', d: 2 },
      { en: 'Sorry, I do not know.', ar: 'عفوا لا أعرف.', d: 2 },
      { en: 'She speaks English very well.', ar: 'هي تتكلم الإنجليزية جيدا جدا.', d: 2 },
      { en: 'These sentences are correct.', ar: 'هذه الجمل صحيحة.', d: 2 },
      { en: 'Those sentences are wrong.', ar: 'تلك الجمل خاطئة.', d: 2 },
      { en: 'I speak Arabic at home.', ar: 'أتكلم العربية في المنزل.', d: 2 },
      { en: 'Do you understand this sentence?', ar: 'هل تفهم هذه الجملة؟', d: 2 },
      { en: 'Yes, it is very easy.', ar: 'نعم إنها سهلة جدا.', d: 2 },
      { en: 'The order of words is important.', ar: 'ترتيب الكلمات مهم.', d: 2 },
      { en: 'I practice with my friend Khalid.', ar: 'أتتمرن مع صديقي خالد.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I {V} English {T}.', arTmpl: 'أنا {V_ar} الإنجليزية {T_ar}.',
        slots: {
          V: [
            { en: 'study', ar: 'أدرس' }, { en: 'practice', ar: 'أتتمرن على' },
            { en: 'speak', ar: 'أتحدث' },
          ],
          T: [
            { en: 'every day', ar: 'كل يوم' }, { en: 'every evening', ar: 'كل مساء' },
            { en: 'at home', ar: 'في المنزل' }, { en: 'with my friend', ar: 'مع صديقي' },
            { en: 'in class', ar: 'في الصف' },
          ],
        },
        tags: ['sentence-structure', 'present-simple'], d: 1, limit: 15,
      },
      {
        tmpl: '{S} is {ADJ}.', arTmpl: '{S_ar} {ADJ_ar}.',
        slots: {
          S: [
            { en: 'This word', ar: 'هذه الكلمة', g: 'f' }, { en: 'This sentence', ar: 'هذه الجملة', g: 'f' },
            { en: 'That sentence', ar: 'تلك الجملة', g: 'f' }, { en: 'The question', ar: 'السؤال', g: 'm' },
            { en: 'The answer', ar: 'الجواب', g: 'm' }, { en: 'The lesson', ar: 'الدرس', g: 'm' },
          ],
          ADJ: (x) => [
            { en: 'easy', ar: x.S.g === 'f' ? 'سهلة' : 'سهل' },
            { en: 'hard', ar: x.S.g === 'f' ? 'صعبة' : 'صعب' },
            { en: 'short', ar: x.S.g === 'f' ? 'قصيرة' : 'قصير' },
            { en: 'long', ar: x.S.g === 'f' ? 'طويلة' : 'طويل' },
            { en: 'correct', ar: x.S.g === 'f' ? 'صحيحة' : 'صحيح' },
            { en: 'wrong', ar: x.S.g === 'f' ? 'خاطئة' : 'خطأ' },
            { en: 'new', ar: x.S.g === 'f' ? 'جديدة' : 'جديد' },
            { en: 'good', ar: x.S.g === 'f' ? 'جيدة' : 'جيد' },
          ],
        },
        tags: ['sentence-structure', 'adjectives'], d: 1, limit: 24,
      },
      {
        tmpl: '{S} {V} {O}.', arTmpl: '{S_ar} {V_ar} {O_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('eat', x.S.agr), ar: B.arPresent('eat', x.S.agr) }],
          O: [
            { en: 'an apple', ar: 'تفاحة' }, { en: 'bread', ar: 'الخبز' },
            { en: 'rice', ar: 'الأرز' }, { en: 'eggs', ar: 'البيض' },
            { en: 'fish', ar: 'السمك' },
          ],
        },
        tags: ['sentence-structure', 'present-simple'], d: 1, limit: 24,
      },
      {
        tmpl: '{S} {V} {O}.', arTmpl: '{S_ar} {V_ar} {O_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('drink', x.S.agr), ar: B.arPresent('drink', x.S.agr) }],
          O: [
            { en: 'water', ar: 'الماء' }, { en: 'tea', ar: 'الشاي' },
            { en: 'milk', ar: 'الحليب' }, { en: 'coffee', ar: 'القهوة' },
          ],
        },
        tags: ['sentence-structure', 'present-simple'], d: 1, limit: 16,
      },
    ],
    fills: [
      { en: 'I read a book at night.', ar: 'أقرأ كتابا في الليل.', word: 'read' },
      { en: 'Please write your name here.', ar: 'اكتب اسمك هنا من فضلك.', word: 'write' },
      { en: 'What does this word mean?', ar: 'ماذا تعني هذه الكلمة؟', word: 'mean' },
      { en: 'These sentences are correct.', ar: 'هذه الجمل صحيحة.', word: 'correct', hint: 'صفة' },
      { en: 'Do you understand this sentence?', ar: 'هل تفهم هذه الجملة؟', word: 'understand' },
      { en: 'This word is not easy.', ar: 'هذه الكلمة ليست سهلة.', word: 'easy', hint: 'صفة' },
      { en: 'We practice English at home.', ar: 'نتتمرن على الإنجليزية في المنزل.', word: 'practice' },
      { en: 'The order of words is important.', ar: 'ترتيب الكلمات مهم.', word: 'order' },
    ],
    orders: [
      { en: 'I read a book at night.', ar: 'أقرأ كتابا في الليل.' },
      { en: 'What does this word mean?', ar: 'ماذا تعني هذه الكلمة؟' },
      { en: 'My sentence is short and easy.', ar: 'جملتي قصيرة وسهلة.' },
      { en: 'She speaks English very well.', ar: 'هي تتكلم الإنجليزية جيدا جدا.' },
      { en: 'Do you understand this sentence?', ar: 'هل تفهم هذه الجملة؟' },
      { en: 'Those sentences are wrong.', ar: 'تلك الجمل خاطئة.' },
    ],
    mc: [
      { question: 'Which sentence has the correct English order?', options: ['I drink tea.', 'Tea drink I.', 'Drink I tea.', 'Tea I drink.'], answerIndex: 0, ar: 'أي جملة ترتيبها صحيح؟' },
      { question: 'Make it negative: "This word is easy."', options: ['This word is not easy.', 'This word not is easy.', 'This word is no easy.', 'Not this word is easy.'], answerIndex: 1, ar: 'كون الجملة منفية:' },
      { question: 'Which sentence is a question?', options: ['Do you understand?', 'You do understand.', 'Understand you do.', 'You understand do.'], answerIndex: 0, ar: 'أي جملة سؤال؟' },
      { question: 'Every English sentence starts with:', options: ['a capital letter', 'a small letter', 'a number', 'a comma'], answerIndex: 2, ar: 'تبدأ كل جملة إنجليزية بـ:' },
    ],
  },
];
