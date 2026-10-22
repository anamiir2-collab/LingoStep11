/* ============================================================
   v2 section data — s02-a2.js
   Simple Daily Life · lessons 25–27 (understanding, repetition, spelling)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 25 — Confirming Understanding ================= */
  {
    num: 25,
    tags: ['understanding', 'communication'],
    objectives: [
      'Say that you understand or do not understand',
      'Check meaning with What does ... mean?',
      'Confirm or correct with right, correct and wrong',
    ],
    grammar: {
      explanation: 'To say you understand, use "I understand" or the friendly phrase "I see". To say the opposite: "I do not understand". To check meaning, ask "What does this word mean?" — the answer is "It means...". To confirm, ask "Is my sentence correct?" or "Am I right?"; the answers are "Yes, that is right / correct" or "No, that is wrong". "Know" is for facts you remember: "I know the answer"; "understand" is for meaning.',
      explanationAr: 'لنقول إنك فهمت استخدم I understand أو العبارة الودية I see، وللعكس قل I do not understand. وللسؤال عن المعنى نقول What does this word mean؟ ويكون الجواب It means... وللتأكيد اسأل Is my sentence correct؟ أو Am I right؟ والجواب Yes, that is right أو No, that is wrong. أما know فللحقائق المحفوظة مثل I know the answer، أما understand فللمعنى.',
      examples: [
        { en: 'I understand you very well.', ar: 'أفهمك جيدا جدا.' },
        { en: 'What does this sentence mean?', ar: 'ماذا تعني هذه الجملة؟' },
        { en: 'Sorry, I do not understand.', ar: 'آسف، لا أفهم.' },
      ],
    },
    vocabulary: [
      { word: 'understand', meaningAr: 'يفهم', example: 'I understand the lesson now.' },
      { word: 'mean', meaningAr: 'يعني', example: 'What does this word mean?' },
      { word: 'meaning', meaningAr: 'المعنى', example: 'The meaning is clear.' },
      { word: 'correct', meaningAr: 'صحيح', example: 'Yes, your sentence is correct.' },
      { word: 'wrong', meaningAr: 'خطأ', example: 'No, that is wrong.' },
      { word: 'clear', meaningAr: 'واضح', example: 'Her voice is very clear.' },
      { word: 'I see', meaningAr: 'فهمت / أرى', example: 'I see, it is easy.' },
      { word: 'right', meaningAr: 'صحيح / محق', example: 'Right, the answer is five.' },
      { word: 'example', meaningAr: 'مثال', example: 'Give me an example, please.' },
      { word: 'know', meaningAr: 'يعرف', example: 'Sure, we know the answer.' },
      { word: 'sure', meaningAr: 'متأكد / بالتأكيد', example: 'Are you sure, Ali?' },
      { word: 'maybe', meaningAr: 'ربما', example: 'Maybe it means hello.' },
    ],
    scenario: [
      { en: 'I understand the lesson now.', ar: 'أفهم الدرس الآن.', d: 1 },
      { en: 'I do not understand this sentence.', ar: 'لا أفهم هذه الجملة.', d: 1 },
      { en: 'I see, it is easy.', ar: 'فهمت، إنه سهل.', d: 1 },
      { en: 'Right, the answer is five.', ar: 'صحيح، الجواب خمسة.', d: 2 },
      { en: 'What does that word mean?', ar: 'ماذا تعني تلك الكلمة؟', d: 1 },
      { en: 'It means water in Arabic.', ar: 'تعني الماء بالعربية.', d: 1 },
      { en: 'Is my sentence correct?', ar: 'هل جملتي صحيحة؟', d: 1 },
      { en: 'Yes, your sentence is correct.', ar: 'نعم، جملتك صحيحة.', d: 1 },
      { en: 'No, that is wrong.', ar: 'لا، هذا خطأ.', d: 1 },
      { en: 'Do you understand me?', ar: 'هل تفهمني؟', d: 1 },
      { en: 'Yes, I understand you well.', ar: 'نعم، أفهمك جيدا.', d: 1 },
      { en: 'Her voice is very clear.', ar: 'صوتها واضح جدا.', d: 2 },
      { en: 'Give me an example, please.', ar: 'أعطني مثالا من فضلك.', d: 2 },
      { en: 'OK, here is an example.', ar: 'حسنا، هذا مثال.', d: 2 },
      { en: 'My brother does not understand English.', ar: 'أخي لا يفهم الإنجليزية.', d: 2 },
      { en: 'Sure, we know the answer.', ar: 'بالتأكيد، نعرف الجواب.', d: 2 },
      { en: 'Maybe it means hello.', ar: 'ربما تعني مرحبا.', d: 2 },
      { en: 'Am I right, teacher?', ar: 'هل أنا محق يا معلم؟', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Do you understand {O}?', arTmpl: 'هل تفهم {O_ar}؟',
        slots: {
          O: [
            { en: 'the lesson', ar: 'الدرس' }, { en: 'the question', ar: 'السؤال' },
            { en: 'the sentence', ar: 'الجملة' }, { en: 'the story', ar: 'القصة' },
            { en: 'English', ar: 'الإنجليزية' }, { en: 'my problem', ar: 'مشكلتي' },
            { en: 'the answer', ar: 'الجواب' },
          ],
        },
        tags: ['understanding', 'questions'], d: 1, limit: 7,
      },
      {
        tmpl: 'What does {W} mean?', arTmpl: 'ماذا تعني {W_ar}؟',
        slots: {
          W: [
            { en: 'the new word', ar: 'الكلمة الجديدة' }, { en: 'that word', ar: 'تلك الكلمة' },
            { en: 'this sentence', ar: 'هذه الجملة' }, { en: 'that English word', ar: 'تلك الكلمة الإنجليزية' }, { en: 'home', ar: 'كلمة home' },
            { en: 'happy', ar: 'كلمة happy' }, { en: 'neighbor', ar: 'كلمة neighbor' },
            { en: 'morning', ar: 'كلمة morning' }, { en: 'family', ar: 'كلمة family' },
          ],
        },
        tags: ['understanding', 'questions'], d: 1, limit: 8,
      },
      {
        tmpl: 'That is {C}.', arTmpl: 'هذا {C_ar}.',
        slots: {
          C: [
            { en: 'correct', ar: 'صحيح' }, { en: 'wrong', ar: 'خطأ' }, { en: 'right', ar: 'صحيح' },
            { en: 'easy', ar: 'سهل' }, { en: 'difficult', ar: 'صعب' }, { en: 'clear', ar: 'واضح' },
          ],
        },
        tags: ['understanding'], d: 1, limit: 6,
      },
      {
        tmpl: 'I do not {V} {O2}.', arTmpl: 'لا {V_ar} {O2_ar}.',
        slots: {
          V: [
            { en: 'understand', ar: 'أفهم' }, { en: 'know', ar: 'أعرف' }, { en: 'remember', ar: 'أتذكر' },
          ],
          O2: [
            { en: 'the question', ar: 'السؤال' }, { en: 'the lesson', ar: 'الدرس' },
            { en: 'the story', ar: 'القصة' }, { en: 'English', ar: 'الإنجليزية' },
            { en: 'the answer', ar: 'الجواب' }, { en: 'the meaning', ar: 'المعنى' },
          ],
        },
        tags: ['understanding', 'negation'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'I understand the lesson now.', ar: 'أفهم الدرس الآن.', word: 'understand', hint: 'يفهم' },
      { en: 'What does that word mean?', ar: 'ماذا تعني تلك الكلمة؟', word: 'mean', hint: 'يعني' },
      { en: 'Is my sentence correct?', ar: 'هل جملتي صحيحة؟', word: 'correct' },
      { en: 'Give me an example, please.', ar: 'أعطني مثالا من فضلك.', word: 'example' },
      { en: 'I do not understand this sentence.', ar: 'لا أفهم هذه الجملة.', word: 'sentence' },
      { en: 'Sure, we know the answer.', ar: 'بالتأكيد، نعرف الجواب.', word: 'Sure' },
      { en: 'Maybe it means hello.', ar: 'ربما تعني مرحبا.', word: 'Maybe' },
      { en: 'We understand the teacher well.', ar: 'نفهم المعلم جيدا.', word: 'well' },
    ],
    orders: [
      { en: 'I do not understand this sentence.', ar: 'لا أفهم هذه الجملة.' },
      { en: 'What does that word mean?', ar: 'ماذا تعني تلك الكلمة؟' },
      { en: 'Is my sentence correct?', ar: 'هل جملتي صحيحة؟' },
      { en: 'Give me an example, please.', ar: 'أعطني مثالا من فضلك.' },
      { en: 'Sure, we know the answer.', ar: 'بالتأكيد، نعرف الجواب.' },
      { en: 'My brother does not understand English.', ar: 'أخي لا يفهم الإنجليزية.' },
    ],
    mc: [
      { question: 'You understand. You say:', options: ['I understand.', 'I am late.', 'I am sorry.', 'Give me.'], answerIndex: 0, ar: 'فهمت الأمر، فتقول:' },
      { question: 'The question "What does "bank" mean?" asks about:', options: ['المعنى', 'السعر', 'المكان', 'الوقت'], answerIndex: 0, ar: 'سؤال What does bank mean؟ يسأل عن:' },
      { question: 'Your sentence is right. The teacher says:', options: ['Correct!', 'Wrong!', 'Bad!', 'Slow!'], answerIndex: 0, ar: 'جملتك صحيحة، فيقول المعلم:' },
      { question: 'You did not hear the word. You ask:', options: ['What does it mean?', 'Where is it?', 'Who are you?', 'When is it?'], answerIndex: 0, ar: 'لم تفهم الكلمة، فتسأل:' },
    ],
  },

  /* ================= lesson 26 — Asking Someone to Repeat ================= */
  {
    num: 26,
    tags: ['repetition', 'listening'],
    objectives: [
      'Ask someone to repeat with Can you repeat...?',
      'Ask a speaker to talk slowly or loudly',
      'Say that you can not hear well',
    ],
    grammar: {
      explanation: 'When you do not hear or understand, ask for repetition: "Can you repeat that, please?" or "Could you repeat the word, please?". A short way is "Pardon?" or "Again, please". To ask for slow speech, say "Speak slowly, please" or "More slowly, please"; for volume, say "Speak louder, please". To explain the problem, use "I can not hear you" or "I do not hear well". After the person repeats, thank them: "Thank you, I hear you now".',
      explanationAr: 'عندما لا تسمع أو لا تفهم اطلب التكرار: Can you repeat that, please؟ أو Could you repeat the word, please؟ والطريقة المختصرة Pardon؟ أو Again, please. ولطلب كلام بطيء قل Speak slowly, please أو More slowly, please، ولطلب صوت أعلى قل Speak louder, please. ولتوضيح المشكلة قل I can not hear you أو I do not hear well. وبعد أن يكرر الشخص اشكره: Thank you, I hear you now.',
      examples: [
        { en: 'Can you repeat the number, please?', ar: 'هل تكرر الرقم من فضلك؟' },
        { en: 'More slowly, please.', ar: 'أبطأ من فضلك.' },
        { en: 'I am sorry, I can not hear you.', ar: 'آسف، لا أستطيع سماعك.' },
      ],
    },
    vocabulary: [
      { word: 'repeat', meaningAr: 'يكرر', example: 'Can you repeat the word?', ipa: 'rɪˈpiːt' },
      { word: 'again', meaningAr: 'مرة أخرى', example: 'Say it again, please.' },
      { word: 'slowly', meaningAr: 'ببطء', example: 'Could you speak slowly, please?' },
      { word: 'louder', meaningAr: 'أعلى صوتا', example: 'Speak louder, please.' },
      { word: 'hear', meaningAr: 'يسمع', example: 'I can not hear you.' },
      { word: 'speak', meaningAr: 'يتكلم', example: 'Please speak slowly.' },
      { word: 'quickly', meaningAr: 'بسرعة', example: 'He speaks very quickly.' },
      { word: 'voice', meaningAr: 'صوت', example: 'Your voice is clear.' },
      { word: 'pardon', meaningAr: 'عفوا (لطلب التكرار)', example: 'Pardon? Can you repeat?' },
      { word: 'one more time', meaningAr: 'مرة أخرى', example: 'One more time, please.' },
      { word: 'clearly', meaningAr: 'بوضوح', example: 'Speak clearly, please.' },
      { word: 'every word', meaningAr: 'كل كلمة', example: 'I hear every word now.' },
    ],
    scenario: [
      { en: 'Sorry, I can not hear you.', ar: 'آسف، لا أستطيع سماعك.', d: 1 },
      { en: 'Can you repeat that, please?', ar: 'هل تكرر ذلك من فضلك؟', d: 1 },
      { en: 'Yes, the bus is here.', ar: 'نعم، الحافلة هنا.', d: 1 },
      { en: 'Say it again, please.', ar: 'قلها مرة أخرى من فضلك.', d: 1 },
      { en: 'The bus leaves at five.', ar: 'تغادر الحافلة في الخامسة.', d: 1 },
      { en: 'Could you speak slowly, please?', ar: 'هل تتكلم ببطء من فضلك؟', d: 1 },
      { en: 'Of course, I speak slowly now.', ar: 'بالتأكيد، أتكلم ببطء الآن.', d: 1 },
      { en: 'Pardon? I do not understand you.', ar: 'عفوا؟ لا أفهمك.', d: 2 },
      { en: 'My grandfather does not hear well.', ar: 'جدي لا يسمع جيدا.', d: 2 },
      { en: 'Speak louder, please.', ar: 'تكلم بصوت أعلى من فضلك.', d: 2 },
      { en: 'OK, I speak louder now.', ar: 'حسنا، أتكلم بصوت أعلى الآن.', d: 2 },
      { en: 'Repeat after me, children.', ar: 'كرروا بعدي يا أطفال.', d: 2 },
      { en: 'The students repeat the lesson.', ar: 'يكرر الطلاب الدرس.', d: 2 },
      { en: 'One more time, please.', ar: 'مرة أخرى من فضلك.', d: 2 },
      { en: 'Can you say your name again?', ar: 'هل تقول اسمك مرة أخرى؟', d: 2 },
      { en: 'Sure, my name is Salma.', ar: 'بالتأكيد، اسمي سلمى.', d: 2 },
      { en: 'Do you hear the phone?', ar: 'هل تسمع الهاتف؟', d: 2 },
      { en: 'No, I do not hear it.', ar: 'لا، لا أسمعه.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Can you repeat {O}, please?', arTmpl: 'هل تكرر {O_ar} من فضلك؟',
        slots: {
          O: [
            { en: 'that', ar: 'ذلك' }, { en: 'the sentence', ar: 'الجملة' }, { en: 'the name', ar: 'الاسم' },
            { en: 'the address', ar: 'العنوان' }, { en: 'the number', ar: 'الرقم' },
            { en: 'the time', ar: 'الوقت' }, { en: 'the price', ar: 'السعر' },
          ],
        },
        tags: ['repetition', 'questions'], d: 1, limit: 7,
      },
      {
        tmpl: 'Speak {A}, please.', arTmpl: '{A_ar} من فضلك.',
        slots: {
          A: [
            { en: 'slowly', ar: 'تكلم ببطء' }, { en: 'louder', ar: 'تكلم بصوت أعلى' },
            { en: 'clearly', ar: 'تكلم بوضوح' }, { en: 'quickly', ar: 'تكلم بسرعة' },
          ],
        },
        tags: ['repetition', 'imperative'], d: 1, limit: 4,
      },
      {
        tmpl: 'I do not {V} {A}.', arTmpl: 'لا {V_ar} {A_ar}.',
        slots: {
          V: [
            { en: 'hear', ar: 'أسمع' }, { en: 'see', ar: 'أرى' }, { en: 'understand', ar: 'أفهم' },
          ],
          A: [
            { en: 'well', ar: 'جيدا' }, { en: 'clearly', ar: 'بوضوح' },
          ],
        },
        tags: ['repetition', 'negation'], d: 2, limit: 6,
      },
      {
        tmpl: '{S} repeat {O2}.', arTmpl: '{S_ar} {V_ar} {O2_ar}.',
        slots: {
          S: [
            { en: 'The students', ar: 'الطلاب', agr: 'they' }, { en: 'The children', ar: 'الأطفال', agr: 'they' },
            { en: 'We', ar: 'نحن', agr: 'we' }, { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{ en: 'repeat', ar: x.S.agr === 'we' ? 'نكرر' : 'يكررون' }],
          O2: [
            { en: 'the new word', ar: 'الكلمة الجديدة' }, { en: 'the sentence', ar: 'الجملة' },
            { en: 'after the teacher', ar: 'بعد المعلم' }, { en: 'the numbers', ar: 'الأرقام' },
          ],
        },
        tags: ['repetition', 'present-simple'], d: 2, limit: 16,
      },
    ],
    fills: [
      { en: 'Sorry, I can not hear you.', ar: 'آسف، لا أستطيع سماعك.', word: 'hear', hint: 'يسمع' },
      { en: 'Can you repeat that, please?', ar: 'هل تكرر ذلك من فضلك؟', word: 'repeat' },
      { en: 'Could you speak slowly, please?', ar: 'هل تتكلم ببطء من فضلك؟', word: 'slowly' },
      { en: 'Speak louder, please.', ar: 'تكلم بصوت أعلى من فضلك.', word: 'louder' },
      { en: 'One more time, please.', ar: 'مرة أخرى من فضلك.', word: 'more' },
      { en: 'My grandfather does not hear well.', ar: 'جدي لا يسمع جيدا.', word: 'grandfather' },
      { en: 'Pardon? I do not understand you.', ar: 'عفوا؟ لا أفهمك.', word: 'Pardon' },
      { en: 'The students repeat the lesson.', ar: 'يكرر الطلاب الدرس.', word: 'students' },
    ],
    orders: [
      { en: 'Sorry, I can not hear you.', ar: 'آسف، لا أستطيع سماعك.' },
      { en: 'Can you repeat that, please?', ar: 'هل تكرر ذلك من فضلك؟' },
      { en: 'Could you speak slowly, please?', ar: 'هل تتكلم ببطء من فضلك؟' },
      { en: 'The students repeat the lesson.', ar: 'يكرر الطلاب الدرس.' },
      { en: 'One more time, please.', ar: 'مرة أخرى من فضلك.' },
      { en: 'My grandfather does not hear well.', ar: 'جدي لا يسمع جيدا.' },
    ],
    mc: [
      { question: 'You did not hear. You say:', options: ['Can you repeat that, please?', 'Thank you very much.', 'Goodbye, my friend.', 'I am fine, thanks.'], answerIndex: 0, ar: 'لم تسمع، فتقول:' },
      { question: 'You want slow speech. You say:', options: ['Speak slowly, please.', 'Speak quickly, please.', 'Spell your name.', 'Sit down, please.'], answerIndex: 0, ar: 'تريد كلاما بطيئا، فتقول:' },
      { question: '"One more time" means:', options: ['مرة أخرى', 'مرتين', 'آخر أسبوع', 'كل يوم'], answerIndex: 0, ar: 'ما معنى One more time؟' },
      { question: '"Pardon?" is used to:', options: ['ask for repetition', 'say goodbye', 'thank someone', 'say sorry'], answerIndex: 0, ar: 'كلمة Pardon؟ تستخدم لـ:' },
    ],
  },

  /* ================= lesson 27 — Spelling and Asking How to Spell ================= */
  {
    num: 27,
    tags: ['spelling', 'alphabet'],
    objectives: [
      'Ask How do you spell ...?',
      'Spell names and words letter by letter',
      'Use capital letters and double letters when spelling',
    ],
    grammar: {
      explanation: 'To ask about spelling, say "How do you spell...?" — "How do you spell the word?" or "Can you spell that, please?". Answer letter by letter with hyphens: "A-H-M-E-D". Names always start with a capital letter, so say "a capital A". Two of the same letter together are "double": "The word has a double L". In email addresses we say "at" for @ and "dot" for a point. If you miss a letter, ask: "Sorry, what is the first letter?"',
      explanationAr: 'للسؤال عن التهجئة نقول How do you spell...؟ مثل How do you spell the word؟ أو Can you spell that, please؟ ونجيب حرفا حرفا مع شرطات: A-H-M-E-D. والأسماء تبدأ دائما بحرف كبير فنقول a capital A. وحرفان متشابهان معا نقول عنهما double مثل The word has a double L. وفي عناوين البريد الإلكتروني ننطق @ بـ at والنقطة بـ dot. وإذا فاتك حرف فاسأل: Sorry, what is the first letter؟',
      examples: [
        { en: 'How do you spell your first name?', ar: 'كيف تتهجى اسمك الأول؟' },
        { en: 'My name is spelled M-A-J-E-D.', ar: 'اسمي يُكتب M-A-J-E-D.' },
        { en: 'A is for apple.', ar: 'حرف A من apple.' },
      ],
    },
    vocabulary: [
      { word: 'spell', meaningAr: 'يتهجى', example: 'How do you spell the word?', ipa: 'spɛl' },
      { word: 'spelling', meaningAr: 'التهجئة', example: 'Your spelling is good.' },
      { word: 'letter', meaningAr: 'حرف', example: 'The word has nine letters.' },
      { word: 'capital letter', meaningAr: 'حرف كبير', example: 'Names start with a capital letter.' },
      { word: 'small letter', meaningAr: 'حرف صغير', example: 'Emails use small letters.' },
      { word: 'alphabet', meaningAr: 'الأبجدية', example: 'The alphabet has twenty-six letters.' },
      { word: 'double', meaningAr: 'مزدوج', example: 'The word has a double S.' },
      { word: 'write', meaningAr: 'يكتب', example: 'Please write it in capital letters.' },
      { word: 'check', meaningAr: 'يتحقق / يراجع', example: 'Please check your spelling.' },
      { word: 'email', meaningAr: 'البريد الإلكتروني', example: 'How do you spell your email?' },
      { word: 'word', meaningAr: 'كلمة', example: 'Spell the new word, please.' },
      { word: 'name', meaningAr: 'اسم', example: 'How do you spell your family name?' },
    ],
    scenario: [
      { en: 'How do you spell your family name?', ar: 'كيف تتهجى اسم عائلتك؟', d: 1 },
      { en: 'It is spelled A-H-M-E-D.', ar: 'تُكتب هكذا: A-H-M-E-D.', d: 2 },
      { en: 'Can you spell that, please?', ar: 'هل تهجي ذلك من فضلك؟', d: 1 },
      { en: 'Please write it in capital letters.', ar: 'اكتبها بحروف كبيرة من فضلك.', d: 2 },
      { en: 'The name starts with a capital letter.', ar: 'يبدأ الاسم بحرف كبير.', d: 2 },
      { en: 'Spell it letter by letter.', ar: 'هجها حرفا بحرف.', d: 2 },
      { en: 'The word has a double L.', ar: 'الكلمة فيها لام مزدوجة.', d: 2 },
      { en: 'How do you spell your email?', ar: 'كيف تتهجى بريدك الإلكتروني؟', d: 2 },
      { en: 'It is ali at mail dot com.', ar: 'إنه ali at mail dot com.', d: 3 },
      { en: 'Is that spelled with one R or two?', ar: 'هل تكتب براء واحد أم اثنين؟', d: 3 },
      { en: 'It has two R letters.', ar: 'فيها حرفا راء اثنان.', d: 2 },
      { en: 'The children spell their names.', ar: 'يتهجى الأطفال أسماءهم.', d: 2 },
      { en: 'We learn a new letter every day.', ar: 'نتعلم حرفا جديدا كل يوم.', d: 2 },
      { en: 'My brother does not spell well.', ar: 'أخي لا يجيد التهجئة.', d: 2 },
      { en: 'Do you spell it with capital letters?', ar: 'هل تهجئها بحروف كبيرة؟', d: 2 },
      { en: 'No, with small letters, please.', ar: 'لا، بحروف صغيرة من فضلك.', d: 2 },
      { en: 'Sorry, what is the first letter?', ar: 'عفوا، ما هو الحرف الأول؟', d: 2 },
      { en: 'The first letter is a capital A.', ar: 'الحرف الأول هو حرف A كبير.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'How do you spell {W}?', arTmpl: 'كيف تتهجى {W_ar}؟',
        slots: {
          W: [
            { en: 'the word', ar: 'الكلمة' }, { en: 'that name', ar: 'ذلك الاسم' },
            { en: 'her name', ar: 'اسمها' }, { en: 'the long word', ar: 'الكلمة الطويلة' },
            { en: 'the English word', ar: 'الكلمة الإنجليزية' },
            { en: 'the name of your school', ar: 'اسم مدرستك' },
            { en: 'the name of your street', ar: 'اسم شارعك' },
          ],
        },
        tags: ['spelling', 'questions'], d: 1, limit: 7,
      },
      {
        tmpl: 'Spell {Wd}, please.', arTmpl: 'هج {Wd_ar} من فضلك.',
        slots: {
          Wd: [
            { en: 'Ahmed', ar: 'أحمد' }, { en: 'Sara', ar: 'سارة' },
            { en: 'the new word', ar: 'الكلمة الجديدة' }, { en: 'your family name', ar: 'اسم عائلتك' },
            { en: 'the street name', ar: 'اسم الشارع' }, { en: 'the long word', ar: 'الكلمة الطويلة' },
          ],
        },
        tags: ['spelling', 'imperative'], d: 1, limit: 6,
      },
      {
        tmpl: '{S} has {D}.', arTmpl: '{S_ar} {D_ar}.',
        slots: {
          S: [
            { en: 'The word', ar: 'الكلمة', s: 'فيها' }, { en: 'The name', ar: 'الاسم', s: 'فيه' },
            { en: 'My name', ar: 'اسمي', s: 'فيه' }, { en: 'The sentence', ar: 'الجملة', s: 'فيها' },
          ],
          D: (x) => [
            { en: 'a double S', ar: `${x.S.s} سين مزدوجة` },
            { en: 'a double M', ar: `${x.S.s} ميم مزدوجة` },
            { en: 'a double N', ar: `${x.S.s} نون مزدوجة` },
            { en: 'a double R', ar: `${x.S.s} راء مزدوجة` },
            { en: 'a capital B', ar: `${x.S.s} حرف B كبير` },
            { en: 'nine letters', ar: `${x.S.s} تسعة أحرف` },
          ],
        },
        tags: ['spelling'], d: 2, limit: 14,
      },
      {
        tmpl: 'Can you spell {Wt} for me?', arTmpl: 'هل تتهجى {Wt_ar} لي؟',
        slots: {
          Wt: [
            { en: 'your first name', ar: 'اسمك الأول' }, { en: 'the family name', ar: 'اسم العائلة' },
            { en: 'the new word', ar: 'الكلمة الجديدة' }, { en: 'your email', ar: 'بريدك الإلكتروني' },
            { en: 'the name of your street', ar: 'اسم شارعك' }, { en: 'this long word', ar: 'هذه الكلمة الطويلة' },
          ],
        },
        tags: ['spelling', 'questions'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'How do you spell your family name?', ar: 'كيف تتهجى اسم عائلتك؟', word: 'spell', hint: 'يتهجى' },
      { en: 'The name starts with a capital letter.', ar: 'يبدأ الاسم بحرف كبير.', word: 'capital' },
      { en: 'Please write it in capital letters.', ar: 'اكتبها بحروف كبيرة من فضلك.', word: 'letters' },
      { en: 'The word has a double L.', ar: 'الكلمة فيها لام مزدوجة.', word: 'double' },
      { en: 'It is spelled A-H-M-E-D.', ar: 'تُكتب هكذا: A-H-M-E-D.', word: 'spelled' },
      { en: 'Sorry, what is the first letter?', ar: 'عفوا، ما هو الحرف الأول؟', word: 'first' },
      { en: 'We learn a new letter every day.', ar: 'نتعلم حرفا جديدا كل يوم.', word: 'letter' },
      { en: 'Do you spell it with capital letters?', ar: 'هل تهجئها بحروف كبيرة؟', word: 'capital' },
    ],
    orders: [
      { en: 'How do you spell your family name?', ar: 'كيف تتهجى اسم عائلتك؟' },
      { en: 'The name starts with a capital letter.', ar: 'يبدأ الاسم بحرف كبير.' },
      { en: 'Please write it in capital letters.', ar: 'اكتبها بحروف كبيرة من فضلك.' },
      { en: 'The word has a double L.', ar: 'الكلمة فيها لام مزدوجة.' },
      { en: 'Can you spell that, please?', ar: 'هل تهجي ذلك من فضلك؟' },
      { en: 'My brother does not spell well.', ar: 'أخي لا يجيد التهجئة.' },
    ],
    mc: [
      { question: 'You want the spelling of a word. You ask:', options: ['How do you spell it?', 'What does it mean?', 'Where is it?', 'How much is it?'], answerIndex: 0, ar: 'تريد تهجئة كلمة، فتسأل:' },
      { question: '"A-H-M-E-D" is:', options: ['spelling a name', 'a phone number', 'the time', 'a date'], answerIndex: 0, ar: 'A-H-M-E-D هي:' },
      { question: '"Ahmed" starts with:', options: ['a capital letter', 'a small letter', 'a number', 'a comma'], answerIndex: 0, ar: 'كلمة Ahmed تبدأ بـ:' },
      { question: 'Two same letters together are:', options: ['a double letter', 'a capital letter', 'a small letter', 'a long word'], answerIndex: 0, ar: 'حرفان متشابهان معا هما:' },
    ],
  },
];
