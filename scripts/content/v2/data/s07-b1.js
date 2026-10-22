/* ============================================================
   v2 section data — s07-b1.js
   Relationships & Social Communication · lessons 153–156
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 153 — Compliments ================= */
  {
    num: 153,
    tags: ['compliments', 'politeness'],
    objectives: [
      'Compliment clothes, looks and possessions',
      'Praise someone\'s work, skills and effort',
      'Respond politely when someone compliments you',
    ],
    grammar: {
      explanation: 'To compliment someone, start with "I love your ..." or "I like your ...": "I love your jacket!". Use "What a ...!" before a noun: "What a beautiful dress!". Use "looks + adjective" for appearance: "Your haircut looks great". To praise work or results, say "You did a great job" or "Well done!". The simple past works here because the action is finished: "You passed the exam!". When someone compliments you, do not argue; smile and answer "Thank you, that\'s kind of you." or "Thank you very much!".',
      explanationAr: 'لمجاملة أحد ابدأ بـ I love your أو I like your مثل: I love your jacket! واستخدم What a قبل الاسم: What a beautiful dress! واستخدم looks + صفة للوصف: Your haircut looks great. ولثناء العمل أو النتيجة قل You did a great job أو Well done!، والماضي البسيط مناسب هنا لأن الحدث انتهى: You passed the exam! وعندما يمجّلك أحد فلا تجادل، بل ابتسم وأجب: Thank you, that\'s kind of you. أو Thank you very much!.',
      examples: [
        { en: 'I love your jacket!', ar: 'أحب سترتك!' },
        { en: 'You did a great job on the project.', ar: 'أديت عملا رائعا في المشروع.' },
        { en: 'Thank you, that\'s kind of you.', ar: 'شكرا لك، هذا لطف منك.' },
      ],
    },
    vocabulary: [
      { word: 'compliment', meaningAr: 'مجامل / كلمة تقدير', example: 'She gave me a nice compliment.' },
      { word: 'jacket', meaningAr: 'سترة', example: 'I love your new jacket!', ipa: 'ˈdʒækɪt' },
      { word: 'haircut', meaningAr: 'قصّة شعر', example: 'Your haircut looks great.' },
      { word: 'delicious', meaningAr: 'لذيذ', example: 'This cake is delicious!', ipa: 'dɪˈlɪʃəs' },
      { word: 'talented', meaningAr: 'موهوب', example: 'Your son is a talented player.' },
      { word: 'amazing', meaningAr: 'مذهل', example: 'Your presentation was amazing.' },
      { word: 'well done', meaningAr: 'أحسنت', example: 'Well done on your exam!' },
      { word: 'effort', meaningAr: 'جهد', example: 'I like your effort this week.' },
      { word: 'deserve', meaningAr: 'يستحق', example: 'You deserve this prize.' },
      { word: 'stylish', meaningAr: 'أنيق', example: 'Your shoes are very stylish.' },
      { word: 'kind', meaningAr: 'لطيف', example: 'That is very kind of you.' },
      { word: 'polite', meaningAr: 'مؤدب', example: 'Your children are very polite.' },
    ],
    scenario: [
      { en: 'I love your jacket!', ar: 'أحب سترتك!', d: 1 },
      { en: 'Thank you, that\'s kind of you.', ar: 'شكرا لك، هذا لطف منك.', d: 1 },
      { en: 'Your haircut looks great.', ar: 'قصّة شعرك تبدو رائعة.', d: 1 },
      { en: 'What a beautiful dress!', ar: 'يا له من فستان جميل!', d: 1 },
      { en: 'This cake is delicious!', ar: 'هذه الكعكة لذيذة!', d: 1 },
      { en: 'You cook very well.', ar: 'أنت تطبخ جيدا جدا.', d: 2 },
      { en: 'You did a great job on the project.', ar: 'أديت عملا رائعا في المشروع.', d: 2 },
      { en: 'Well done, you passed the exam!', ar: 'أحسنت، لقد نجحت في الامتحان!', d: 2 },
      { en: 'Your children are very polite.', ar: 'أطفالك مؤدبون جدا.', d: 2 },
      { en: 'Your English is improving every week.', ar: 'إنجليزيتك تتحسن كل أسبوع.', d: 2 },
      { en: 'Really? Thank you very much!', ar: 'حقا؟ شكرا جزيلا!', d: 2 },
      { en: 'Do you like my new shoes?', ar: 'هل تعجبك حذائي الجديد؟', d: 2 },
      { en: 'I am not good at giving compliments.', ar: 'لست بارعا في إبداء المجاملات.', d: 3 },
      { en: 'Is this your new car? It looks amazing!', ar: 'هل هذه سيارتك الجديدة؟ تبدو مذهلة!', d: 3 },
      { en: 'Who made this delicious cake?', ar: 'من الذي أعد هذه الكعكة اللذيذة؟', d: 2 },
      { en: 'Do not be shy, say thank you!', ar: 'لا تكن خجولا، قل شكرا!', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I love your {O}!', arTmpl: 'أحب {O_ar}!',
        slots: {
          O: [
            { en: 'your shoes', ar: 'حذاءك' }, { en: 'your bag', ar: 'حقيبتك' },
            { en: 'your car', ar: 'سيارتك' }, { en: 'your hat', ar: 'قبعتك' },
            { en: 'your scarf', ar: 'وشاحك' }, { en: 'your new phone', ar: 'هاتفك الجديد' },
            { en: 'your haircut', ar: 'قصّة شعرك' }, { en: 'your new coat', ar: 'معطفك الجديد' },
          ],
        },
        tags: ['compliments'], d: 1, limit: 8,
      },
      {
        tmpl: 'Your {N} is {C}!', arTmpl: '{N_ar} {C_ar}!',
        slots: {
          N: [
            { en: 'car', ar: 'سيارتك', g: 'f' }, { en: 'bag', ar: 'حقيبتك', g: 'f' },
            { en: 'house', ar: 'بيتك', g: 'm' }, { en: 'room', ar: 'غرفتك', g: 'f' },
            { en: 'garden', ar: 'حديقتك', g: 'f' }, { en: 'handwriting', ar: 'خطك', g: 'm' },
            { en: 'cooking', ar: 'طبخك', g: 'm' }, { en: 'website', ar: 'موقعك', g: 'm' },
          ],
          ADJ: [
            { en: 'beautiful', ar: 'جميل', f: 'جميلة' }, { en: 'amazing', ar: 'مذهل', f: 'مذهلة' },
            { en: 'wonderful', ar: 'رائع', f: 'رائعة' }, { en: 'tidy', ar: 'مرتب', f: 'مرتبة' },
            { en: 'delicious', ar: 'لذيذ', f: 'لذيذة' }, { en: 'stylish', ar: 'أنيق', f: 'أنيقة' },
          ],
          C: (x) => [(x.N.g === 'f'
            ? { en: x.ADJ.en, ar: x.ADJ.f }
            : { en: x.ADJ.en, ar: x.ADJ.ar })],
        },
        tags: ['compliments', 'adjectives'], d: 2, limit: 20,
      },
      {
        tmpl: 'You {V} very well.', arTmpl: 'أنت {V_ar} جيدا جدا.',
        slots: {
          V: [
            { en: 'cook', ar: 'تطبخ' }, { en: 'write', ar: 'تكتب' },
            { en: 'draw', ar: 'ترسم' }, { en: 'drive', ar: 'تقود' },
            { en: 'sing', ar: 'تغني' }, { en: 'dance', ar: 'ترقص' },
            { en: 'teach', ar: 'تعلم' },
          ],
        },
        tags: ['compliments', 'present-simple'], d: 2, limit: 7,
      },
      {
        tmpl: 'Well done, {P}!', arTmpl: 'أحسنت يا {P_ar}!',
        slots: { P: B.NAMED_SING },
        tags: ['compliments', 'praise'], d: 1, limit: 8,
      },
    ],
    fills: [
      { en: 'I love your new jacket.', ar: 'أحب سترتك الجديدة.', word: 'love', hint: 'فعل إعجاب' },
      { en: 'This cake is delicious!', ar: 'هذه الكعكة لذيذة!', word: 'delicious', hint: 'صفة طعم' },
      { en: 'You did a great job.', ar: 'أديت عملا رائعا.', word: 'great' },
      { en: 'Well done on your exam!', ar: 'أحسنت في امتحانك!', word: 'done' },
      { en: 'Your English is improving.', ar: 'إنجليزيتك تتحسن.', word: 'improving', hint: 'تتقدم' },
      { en: 'Thank you, that is kind of you.', ar: 'شكرا لك، هذا لطف منك.', word: 'kind' },
      { en: 'Your children are very polite.', ar: 'أطفالك مؤدبون جدا.', word: 'polite' },
      { en: 'What a wonderful surprise!', ar: 'يا له من مفاجأة رائعة!', word: 'wonderful' },
    ],
    orders: [
      { en: 'I love your new jacket.', ar: 'أحب سترتك الجديدة.' },
      { en: 'You did a great job today.', ar: 'أديت عملا رائعا اليوم.' },
      { en: 'Thank you, that is kind of you.', ar: 'شكرا لك، هذا لطف منك.' },
      { en: 'Your haircut looks really great.', ar: 'قصّة شعرك تبدو رائعة حقا.' },
      { en: 'Well done, you passed the exam!', ar: 'أحسنت، لقد نجحت في الامتحان!' },
      { en: 'Do you like my new shoes?', ar: 'هل تعجبك حذائي الجديد؟' },
    ],
    mc: [
      { question: 'A friend shows you her new dress. You say:', options: ['What a beautiful dress!', 'My name is Sara.', 'The bus is late.', 'Close the door, please.'], answerIndex: 0, ar: 'أريتك صديقتك فستانها الجديد، فتقول:' },
      { question: 'What is a polite answer to a compliment?', options: ['Thank you, that\'s kind of you.', 'No, it is not mine.', 'I am hungry now.', 'Go away, please.'], answerIndex: 0, ar: 'ما الرد المهذب على مجاملة؟' },
      { question: '"You did a great job" means:', options: ['أديت عملا رائعا', 'أنجزت القليل', 'أنت متعب جدا', 'سيارتك جميلة'], answerIndex: 0, ar: 'ما معنى You did a great job؟' },
      { question: 'Which word completes: "This cake is ___!"', options: ['delicious', 'angry', 'sleepy', 'missing'], answerIndex: 0, ar: 'أي كلمة تتمم الجملة: This cake is ___!' },
    ],
  },

  /* ================= lesson 154 — Expressing Opinions ================= */
  {
    num: 154,
    tags: ['opinions', 'communication'],
    objectives: [
      'State opinions with "In my opinion" and "I think"',
      'Soften opinions with "I believe" and "If you ask me"',
      'Ask other people for their opinions politely',
    ],
    grammar: {
      explanation: 'Use opinion frames before your sentence: "In my opinion, ...", "I think ...", "I believe ...", "If you ask me, ..." and "Personally, ...". With "I think that ..." the clause can use the present simple ("I think the plan is good"), a modal ("I do not think it will work") or the present perfect for long-held views ("I have always thought that honesty matters most"). To ask for an opinion, say "What do you think about ...?" or "What is your opinion about ...?". You can soften a view with "I guess" or "perhaps".',
      explanationAr: 'استخدم أطر الرأي قبل جملتك: In my opinion وI think وI believe وIf you ask me وPersonally. وبعد I think that يمكن أن تأتي الجملة بالمضارع البسيط (I think the plan is good) أو بفعل ناقص (I do not think it will work) أو بالمضارع التام للآراء المستقرة (I have always thought that honesty matters most). وللسؤال عن الرأي قل What do you think about...؟ أو What is your opinion about...؟ ويمكنك تلطيف رأيك بـ I guess أو perhaps.',
      examples: [
        { en: 'In my opinion, this plan is useful.', ar: 'في رأيي، هذه الخطة مفيدة.' },
        { en: 'What do you think about the new plan?', ar: 'ما رأيك في الخطة الجديدة؟' },
        { en: 'I have always thought that honesty matters most.', ar: 'لقد رأيت دائما أن الصدق هو الأهم.' },
      ],
    },
    vocabulary: [
      { word: 'opinion', meaningAr: 'رأي', example: 'In my opinion, the plan is good.' },
      { word: 'believe', meaningAr: 'يعتقد', example: 'I believe she is right.', ipa: 'bɪˈliːv' },
      { word: 'honestly', meaningAr: 'بصراحة', example: 'Honestly, I did not like the movie.' },
      { word: 'personally', meaningAr: 'شخصيا', example: 'Personally, I prefer tea.' },
      { word: 'seem', meaningAr: 'يبدو', example: 'The idea seems good to me.' },
      { word: 'doubt', meaningAr: 'يشك', example: 'I doubt he will come today.' },
      { word: 'probably', meaningAr: 'على الأرجح', example: 'She will probably agree.' },
      { word: 'guess', meaningAr: 'يظن / يخمن', example: 'I guess you are right.' },
      { word: 'fair', meaningAr: 'عادل', example: 'The manager is fair with everyone.' },
      { word: 'point', meaningAr: 'وجهة نظر', example: 'You have a good point.' },
      { word: 'view', meaningAr: 'منظور / رأي', example: 'In my view, the price is high.' },
      { word: 'wrong', meaningAr: 'مخطئ', example: 'I think you are wrong here.' },
    ],
    scenario: [
      { en: 'In my opinion, this movie is the best one this year.', ar: 'في رأيي، هذا الفيلم هو الأفضل هذا العام.', d: 2 },
      { en: 'I think our new manager is very fair.', ar: 'أظن أن مديرنا الجديد عادل جدا.', d: 2 },
      { en: 'I believe she has already finished the report.', ar: 'أعتقد أنها أنهت التقرير بالفعل.', d: 2 },
      { en: 'If you ask me, the price is too high.', ar: 'لو سألتني، فالسعر مرتفع جدا.', d: 2 },
      { en: 'Honestly, I have never liked this restaurant.', ar: 'بصراحة، لم يعجبني هذا المطعم أبدا.', d: 2 },
      { en: 'Personally, I would choose the blue one.', ar: 'شخصيا، سأختار اللون الأزرق.', d: 2 },
      { en: 'What do you think about the new plan?', ar: 'ما رأيك في الخطة الجديدة؟', d: 1 },
      { en: 'What is your opinion about remote work?', ar: 'ما رأيك في العمل عن بعد؟', d: 2 },
      { en: 'Do you think we should leave early?', ar: 'هل تظن أنه ينبغي أن نغادر مبكرا؟', d: 2 },
      { en: 'I do not think this idea will work.', ar: 'لا أظن أن هذه الفكرة ستنجح.', d: 2 },
      { en: 'I have always thought that honesty matters most.', ar: 'لقد رأيت دائما أن الصدق هو الأهم.', d: 3 },
      { en: 'In my view, the first option seems better.', ar: 'في نظري، يبدو الخيار الأول أفضل.', d: 2 },
      { en: 'My sister thinks the movie was too long.', ar: 'تظن أختي أن الفيلم كان طويلا جدا.', d: 2 },
      { en: 'Perhaps we can ask Ahmed for his opinion.', ar: 'ربما يمكننا أن نسأل أحمد عن رأيه.', d: 2 },
      { en: 'I think it will save us time.', ar: 'أظن أنه سيوفر لنا الوقت.', d: 2 },
      { en: 'I guess you have a point there.', ar: 'أظن أن لديك وجهة نظر هنا.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'In my opinion, {T} is {C}.', arTmpl: 'في رأيي، {T_ar} {C_ar}.',
        slots: {
          T: [
            { en: 'this movie', ar: 'هذا الفيلم', g: 'm' }, { en: 'this plan', ar: 'هذه الخطة', g: 'f' },
            { en: 'this restaurant', ar: 'هذا المطعم', g: 'm' }, { en: 'this city', ar: 'هذه المدينة', g: 'f' },
            { en: 'this idea', ar: 'هذه الفكرة', g: 'f' }, { en: 'this book', ar: 'هذا الكتاب', g: 'm' },
          ],
          ADJ: [
            { en: 'excellent', ar: 'ممتاز', f: 'ممتازة' }, { en: 'useful', ar: 'مفيد', f: 'مفيدة' },
            { en: 'boring', ar: 'ممل', f: 'مملة' }, { en: 'expensive', ar: 'غالي', f: 'غالية' },
            { en: 'wonderful', ar: 'رائع', f: 'رائعة' }, { en: 'confusing', ar: 'مربك', f: 'مربكة' },
          ],
          C: (x) => [(x.T.g === 'f'
            ? { en: x.ADJ.en, ar: x.ADJ.f }
            : { en: x.ADJ.en, ar: x.ADJ.ar })],
        },
        tags: ['opinions'], d: 2, limit: 20,
      },
      {
        tmpl: 'What do you think about {T}?', arTmpl: 'ما رأيك في {T_ar}؟',
        slots: {
          T: [
            { en: 'the new plan', ar: 'الخطة الجديدة' }, { en: 'remote work', ar: 'العمل عن بعد' },
            { en: 'this movie', ar: 'هذا الفيلم' }, { en: 'our city', ar: 'مدينتنا' },
            { en: 'the price', ar: 'السعر' }, { en: 'social media', ar: 'وسائل التواصل الاجتماعي' },
          ],
        },
        tags: ['opinions', 'questions'], d: 1, limit: 6,
      },
      {
        tmpl: 'Personally, I prefer {N}.', arTmpl: 'شخصيا، أفضل {N_ar}.',
        slots: {
          N: [
            { en: 'tea to coffee', ar: 'الشاي على القهوة' }, { en: 'walking to driving', ar: 'المشي على القيادة' },
            { en: 'working at home', ar: 'العمل من البيت' }, { en: 'small groups', ar: 'المجموعات الصغيرة' },
            { en: 'morning meetings', ar: 'اجتماعات الصباح' },
          ],
        },
        tags: ['opinions', 'preferences'], d: 2, limit: 5,
      },
      {
        tmpl: 'If you ask me, {T} is {C}.', arTmpl: 'لو سألتني، {T_ar} {C_ar}.',
        slots: {
          T: [
            { en: 'this movie', ar: 'هذا الفيلم', g: 'm' }, { en: 'this plan', ar: 'هذه الخطة', g: 'f' },
            { en: 'this restaurant', ar: 'هذا المطعم', g: 'm' }, { en: 'this city', ar: 'هذه المدينة', g: 'f' },
            { en: 'this idea', ar: 'هذه الفكرة', g: 'f' }, { en: 'this book', ar: 'هذا الكتاب', g: 'm' },
          ],
          ADJ: [
            { en: 'excellent', ar: 'ممتاز', f: 'ممتازة' }, { en: 'useful', ar: 'مفيد', f: 'مفيدة' },
            { en: 'boring', ar: 'ممل', f: 'مملة' }, { en: 'expensive', ar: 'غالي', f: 'غالية' },
            { en: 'wonderful', ar: 'رائع', f: 'رائعة' }, { en: 'confusing', ar: 'مربك', f: 'مربكة' },
          ],
          C: (x) => [(x.T.g === 'f'
            ? { en: x.ADJ.en, ar: x.ADJ.f }
            : { en: x.ADJ.en, ar: x.ADJ.ar })],
        },
        tags: ['opinions', 'conditionals'], d: 2, limit: 12,
      },
      {
        tmpl: 'I have always thought that {T} is {C}.', arTmpl: 'لقد رأيت دائما أن {T_ar} {C_ar}.',
        slots: {
          T: [
            { en: 'this movie', ar: 'هذا الفيلم', g: 'm' }, { en: 'this plan', ar: 'هذه الخطة', g: 'f' },
            { en: 'this restaurant', ar: 'هذا المطعم', g: 'm' }, { en: 'this city', ar: 'هذه المدينة', g: 'f' },
            { en: 'this idea', ar: 'هذه الفكرة', g: 'f' }, { en: 'this book', ar: 'هذا الكتاب', g: 'm' },
          ],
          ADJ: [
            { en: 'excellent', ar: 'ممتاز', f: 'ممتازة' }, { en: 'useful', ar: 'مفيد', f: 'مفيدة' },
            { en: 'boring', ar: 'ممل', f: 'مملة' }, { en: 'expensive', ar: 'غالي', f: 'غالية' },
            { en: 'wonderful', ar: 'رائع', f: 'رائعة' }, { en: 'confusing', ar: 'مربك', f: 'مربكة' },
          ],
          C: (x) => [(x.T.g === 'f'
            ? { en: x.ADJ.en, ar: x.ADJ.f }
            : { en: x.ADJ.en, ar: x.ADJ.ar })],
        },
        tags: ['opinions', 'present-perfect'], d: 3, limit: 12,
      },
    ],
    fills: [
      { en: 'In my opinion, the plan is good.', ar: 'في رأيي، الخطة جيدة.', word: 'opinion' },
      { en: 'I believe she has already finished the report.', ar: 'أعتقد أنها أنهت التقرير بالفعل.', word: 'believe' },
      { en: 'Honestly, I did not like the movie.', ar: 'بصراحة، لم يعجبني الفيلم.', word: 'Honestly' },
      { en: 'Personally, I prefer tea.', ar: 'شخصيا، أفضل الشاي.', word: 'Personally' },
      { en: 'The idea seems good to me.', ar: 'تبدو الفكرة جيدة بالنسبة لي.', word: 'seems' },
      { en: 'I doubt he will come today.', ar: 'أشك أنه سيأتي اليوم.', word: 'doubt' },
      { en: 'You have a good point.', ar: 'كلامك فيه وجاهة.', word: 'point' },
      { en: 'In my view, the price is high.', ar: 'في نظري، السعر مرتفع.', word: 'view' },
    ],
    orders: [
      { en: 'In my opinion, this plan is useful.', ar: 'في رأيي، هذه الخطة مفيدة.' },
      { en: 'I think our new manager is very fair.', ar: 'أظن أن مديرنا الجديد عادل جدا.' },
      { en: 'What do you think about the new plan?', ar: 'ما رأيك في الخطة الجديدة؟' },
      { en: 'Honestly, I have never liked this place.', ar: 'بصراحة، لم يعجبني هذا المكان أبدا.' },
      { en: 'I believe she has already finished the report.', ar: 'أعتقد أنها أنهت التقرير بالفعل.' },
      { en: 'You have a very good point.', ar: 'كلامك فيه وجاهة كبيرة.' },
    ],
    mc: [
      { question: 'Which phrase introduces a personal opinion?', options: ['In my opinion', 'See you later', 'Well done', 'Never mind'], answerIndex: 0, ar: 'أي عبارة تقدم رأيا شخصيا؟' },
      { question: 'Someone asks "What do you think about the plan?" A good answer is:', options: ['I think it will work.', 'I am from Egypt.', 'The bill, please.', 'Good night.'], answerIndex: 0, ar: 'سألك أحدهم عن رأيك في الخطة، فأجاب:' },
      { question: '"I believe she is right" means:', options: ['أعتقد أنها محقة', 'أعرف أنها متعبة', 'أتمنى أن تأتي', 'أخشى أن أتأخر'], answerIndex: 0, ar: 'ما معنى I believe she is right؟' },
      { question: 'Which sentence uses the present perfect?', options: ['I have always thought that honesty matters.', 'I think it is good.', 'I thought about it yesterday.', 'I will think about it.'], answerIndex: 0, ar: 'أي جملة تستخدم المضارع التام؟' },
    ],
  },

  /* ================= lesson 155 — Agreeing and Disagreeing ================= */
  {
    num: 155,
    tags: ['agreement', 'disagreement', 'communication'],
    objectives: [
      'Agree strongly and politely in a conversation',
      'Disagree softly with "I see your point, but..."',
      'Ask others whether they agree or not',
    ],
    grammar: {
      explanation: 'To agree, say "I agree with you", "Exactly!", "That is true" or "You are absolutely right". To disagree politely, use a soft opener before your reason: "I see your point, but ...", "I am not so sure about that", "That is partly true, but ..." or "Actually, I think differently". You can also say "On the other hand, ..." to give the other side. For finished decisions, use the present perfect: "We have agreed on the meeting time". To ask, say "Do you agree with ...?" or "Don\'t you think ...?".',
      explanationAr: 'للموافقة قل I agree with you أو Exactly! أو That is true أو You are absolutely right. وللاختلاف بأدب استخدم مفتاحا لطفا قبل سببك: I see your point, but أو I am not so sure about that أو That is partly true, but أو Actually, I think differently. ويمكنك قول On the other hand لعرض الوجه الآخر. وللقرارات المنتهية استخدم المضارع التام: We have agreed on the meeting time. وللسؤال قل Do you agree with...؟ أو Do not you think...؟',
      examples: [
        { en: 'I agree with you completely.', ar: 'أتافق معك تماما.' },
        { en: 'I see your point, but the cost is too high.', ar: 'أفهم وجهة نظرك، لكن التكلفة عالية جدا.' },
        { en: 'We have agreed on the meeting time.', ar: 'لقد اتفقنا على موعد الاجتماع.' },
      ],
    },
    vocabulary: [
      { word: 'agree', meaningAr: 'يوافق / يتفق', example: 'I agree with your idea.' },
      { word: 'disagree', meaningAr: 'يخالف في الرأي', example: 'I disagree with that decision.' },
      { word: 'exactly', meaningAr: 'بالضبط', example: 'Exactly! That is my point.', ipa: 'ɪɡˈzæktli' },
      { word: 'absolutely', meaningAr: 'بالتأكيد / تماما', example: 'You are absolutely right.' },
      { word: 'true', meaningAr: 'صحيح', example: 'That is true, but it costs much.' },
      { word: 'however', meaningAr: 'غير أن / بيد أن', example: 'However, the cost is high.' },
      { word: 'partly', meaningAr: 'جزئيا', example: 'You are partly right.' },
      { word: 'actually', meaningAr: 'في الحقيقة', example: 'Actually, I think differently.' },
      { word: 'depends', meaningAr: 'يعتمد على', example: 'It depends on the price.' },
      { word: 'definitely', meaningAr: 'حتما', example: 'That is definitely better.' },
      { word: 'respect', meaningAr: 'يحترم', example: 'We respect each other.' },
      { word: 'decision', meaningAr: 'قرار', example: 'I disagree with this decision.' },
    ],
    scenario: [
      { en: 'I agree with you completely.', ar: 'أتافق معك تماما.', d: 1 },
      { en: 'Exactly! That is what I mean.', ar: 'بالضبط! هذا ما أقصده.', d: 1 },
      { en: 'You are absolutely right about the schedule.', ar: 'أنت محق تماما في الجدول.', d: 2 },
      { en: 'I see your point, but the cost is too high.', ar: 'أفهم وجهة نظرك، لكن التكلفة عالية جدا.', d: 2 },
      { en: 'I am not so sure about that idea.', ar: 'لست متأكدا من تلك الفكرة.', d: 2 },
      { en: 'I do not agree with this decision.', ar: 'لا أوافق على هذا القرار.', d: 2 },
      { en: 'That is partly true, but not always.', ar: 'هذا صحيح جزئيا، وليس دائما.', d: 2 },
      { en: 'I disagree; the old system was better.', ar: 'أخالفك الرأي؛ كان النظام القديم أفضل.', d: 3 },
      { en: 'Do you agree with the new rules?', ar: 'هل توافق على القواعد الجديدة؟', d: 1 },
      { en: 'Do not you think the first option is better?', ar: 'ألا تعتقد أن الخيار الأول أفضل؟', d: 2 },
      { en: 'My parents think differently, but we respect each other.', ar: 'يرى والداي الأمر بشكل مختلف، لكننا نحترم بعضنا.', d: 2 },
      { en: 'We have agreed to meet on Friday.', ar: 'لقد اتفقنا على اللقاء يوم الجمعة.', d: 2 },
      { en: 'I have never agreed with that opinion.', ar: 'لم أوافق يوما على ذلك الرأي.', d: 3 },
      { en: 'On the other hand, her plan saves money.', ar: 'من ناحية أخرى، توفر خطتها المال.', d: 2 },
      { en: 'I see your point, but it was fair.', ar: 'أفهم وجهة نظرك، لكنه كان عادلا.', d: 2 },
      { en: 'Do you really think the second idea is better?', ar: 'هل تظن حقا أن الفكرة الثانية أفضل؟', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I agree with {P}.', arTmpl: 'أتافق مع {P_ar}.',
        slots: {
          P: [
            ...B.NAMED_SING,
            { en: 'my mother', ar: 'أمي' }, { en: 'my father', ar: 'أبي' },
            { en: 'my friend', ar: 'صديقي' }, { en: 'the teacher', ar: 'المعلم' },
          ],
        },
        tags: ['agreement'], d: 1, limit: 8,
      },
      {
        tmpl: 'I see your point, but the {T} is {C}.', arTmpl: 'أفهم وجهة نظرك، لكن {T_ar} {C_ar}.',
        slots: {
          T: [
            { en: 'plan', ar: 'الخطة', g: 'f' }, { en: 'price', ar: 'السعر', g: 'm' },
            { en: 'schedule', ar: 'الجدول', g: 'm' }, { en: 'idea', ar: 'الفكرة', g: 'f' },
            { en: 'system', ar: 'النظام', g: 'm' }, { en: 'design', ar: 'التصميم', g: 'm' },
          ],
          ADJC: [
            { en: 'too expensive', m: 'غالي جدا', f: 'غالية جدا' }, { en: 'too long', m: 'طويل جدا', f: 'طويلة جدا' },
            { en: 'too difficult', m: 'صعب جدا', f: 'صعبة جدا' }, { en: 'too risky', m: 'محفوف بالمخاطر', f: 'محفوفة بالمخاطر' },
            { en: 'too slow', m: 'بطيء جدا', f: 'بطيئة جدا' }, { en: 'too strict', m: 'صارم جدا', f: 'صارمة جدا' },
          ],
          C: (x) => [{ en: x.ADJC.en, ar: x.ADJC[x.T.g] }],
        },
        tags: ['disagreement'], d: 2, limit: 12,
      },
      {
        tmpl: 'You are absolutely right about {T}.', arTmpl: 'أنت محق تماما في {T_ar}.',
        slots: {
          T: [
            { en: 'the schedule', ar: 'الجدول' }, { en: 'the price', ar: 'السعر' },
            { en: 'the traffic', ar: 'الزحام' }, { en: 'the weather', ar: 'الطقس' },
            { en: 'the plan', ar: 'الخطة' }, { en: 'the result', ar: 'النتيجة' },
          ],
        },
        tags: ['agreement'], d: 1, limit: 5,
      },
      {
        tmpl: 'I am not so sure about {T}.', arTmpl: 'لست متأكدا بشأن {T_ar}.',
        slots: {
          T: [
            { en: 'the schedule', ar: 'الجدول' }, { en: 'the price', ar: 'السعر' },
            { en: 'the traffic', ar: 'الزحام' }, { en: 'the weather', ar: 'الطقس' },
            { en: 'the plan', ar: 'الخطة' }, { en: 'the result', ar: 'النتيجة' },
          ],
        },
        tags: ['disagreement'], d: 2, limit: 5,
      },
      {
        tmpl: '{S} have agreed on {T}.', arTmpl: '{S_ar} {V_ar} بالفعل على {T_ar}.',
        slots: {
          S: [
            { en: 'We', ar: 'نحن', v: 'اتفقنا' }, { en: 'They', ar: 'هم', v: 'اتفقوا' },
          ],
          V: (x) => [{ en: 'have', ar: x.S.v }],
          T: [
            { en: 'the meeting time', ar: 'موعد الاجتماع' }, { en: 'the new plan', ar: 'الخطة الجديدة' },
            { en: 'the shared budget', ar: 'الميزانية المشتركة' }, { en: 'the trip date', ar: 'تاريخ الرحلة' },
            { en: 'the final design', ar: 'التصميم النهائي' },
          ],
        },
        tags: ['agreement', 'present-perfect'], d: 2, limit: 8,
      },
    ],
    fills: [
      { en: 'I agree with your idea.', ar: 'أوافق على فكرتك.', word: 'agree' },
      { en: 'Exactly! That is my point.', ar: 'بالضبط! هذا ما أقوله.', word: 'Exactly' },
      { en: 'You are absolutely right.', ar: 'أنت محق تماما.', word: 'absolutely' },
      { en: 'Actually, I think differently.', ar: 'في الحقيقة، أرى الأمر بشكل مختلف.', word: 'Actually' },
      { en: 'I disagree with that decision.', ar: 'أخالفك الرأي في ذلك القرار.', word: 'disagree' },
      { en: 'That is partly true.', ar: 'هذا صحيح جزئيا.', word: 'partly' },
      { en: 'However, the cost is high.', ar: 'غير أن التكلفة مرتفعة.', word: 'However' },
      { en: 'We respect each other.', ar: 'نحترم بعضنا.', word: 'respect' },
    ],
    orders: [
      { en: 'I agree with you completely.', ar: 'أتافق معك تماما.' },
      { en: 'I see your point, but it is expensive.', ar: 'أفهم وجهة نظرك، لكنه غالي.' },
      { en: 'Do you agree with the new rules?', ar: 'هل توافق على القواعد الجديدة؟' },
      { en: 'Exactly! That is what I mean.', ar: 'بالضبط! هذا ما أقصده.' },
      { en: 'I am not so sure about that.', ar: 'لست متأكدا من ذلك.' },
      { en: 'On the other hand, her plan saves money.', ar: 'من ناحية أخرى، توفر خطتها المال.' },
    ],
    mc: [
      { question: 'Your friend says a good idea. You agree strongly. You say:', options: ['Exactly!', 'I disagree.', 'Good night.', 'I am tired.'], answerIndex: 0, ar: 'قال صديقك فكرة جيدة، فأوافق بقوة، فتقول:' },
      { question: 'Which phrase shows polite disagreement?', options: ['I see your point, but...', 'You are completely wrong.', 'Nobody agrees with you.', 'That is a bad question.'], answerIndex: 0, ar: 'أي عبارة تعبر عن اختلاف مهذب؟' },
      { question: '"I am not so sure about that" means:', options: ['لست متأكدا من ذلك', 'أوافق تماما', 'بالضبط', 'أراك غدا'], answerIndex: 0, ar: 'ما معنى I am not so sure about that؟' },
      { question: 'Which sentence is present perfect?', options: ['We have agreed to meet on Friday.', 'We agree with you.', 'We agreed yesterday.', 'We will agree soon.'], answerIndex: 0, ar: 'أي جملة في المضارع التام؟' },
    ],
  },

  /* ================= lesson 156 — Giving Advice ================= */
  {
    num: 156,
    tags: ['advice', 'modals'],
    objectives: [
      'Give advice with "should" and "should not"',
      'Advise with "If I were you" and "Why don\'t you...?"',
      'Suggest and recommend ideas politely',
    ],
    grammar: {
      explanation: 'The clearest advice verb is "should": "You should talk to your manager", and the negative "You should not work so late". For a stronger warning, use "had better": "You had better leave before the traffic starts" (and "You had better not forget her birthday"). To put yourself in the friend\'s place, use the second conditional: "If I were you, I would rest this weekend" — note "were" for all persons. A friendly question form is "Why don\'t you join us for dinner?". You can also suggest ("I suggest a short break") and recommend ("I recommend this book").',
      explanationAr: 'أوضح أداة للنصيحة هي should: You should talk to your manager، والنفي You should not work so late. وللتحذير الأقوى استخدم had better: You had better leave before the traffic starts (والنفي You had better not forget her birthday). وللتفوه بمكان صديقك استخدم الشرطي الثاني: If I were you, I would rest this weekend، ولاحظ were مع جميع الضمائر. وصيغة السؤال الودية: Why do not you join us for dinner? كما يمكنك الاقتراح (I suggest a short break) والتوصية (I recommend this book).',
      examples: [
        { en: 'You should talk to your manager about it.', ar: 'ينبغي أن تتحدث إلى مديرك بشأن ذلك.' },
        { en: 'If I were you, I would rest this weekend.', ar: 'لو كنت مكانك، لارتحت في نهاية الأسبوع.' },
        { en: 'Why don\'t you join us for dinner?', ar: 'لماذا لا تنضم إلينا على العشاء؟' },
      ],
    },
    vocabulary: [
      { word: 'advice', meaningAr: 'نصيحة', example: 'Thank you for your advice.' },
      { word: 'should', meaningAr: 'ينبغي أن', example: 'You should rest today.' },
      { word: 'suggest', meaningAr: 'يقترح', example: 'I suggest a short walk.', ipa: 'səˈdʒɛst' },
      { word: 'recommend', meaningAr: 'يوصي بـ', example: 'I recommend this book.' },
      { word: 'problem', meaningAr: 'مشكلة', example: 'What should I do about this problem?' },
      { word: 'instead', meaningAr: 'بدلا من ذلك', example: 'Read a book instead.' },
      { word: 'rest', meaningAr: 'يستريح', example: 'You should rest this weekend.' },
      { word: 'hurry', meaningAr: 'يستعجل', example: 'Do not hurry your decision.' },
      { word: 'mistake', meaningAr: 'خطأ', example: 'Everyone makes mistakes.' },
      { word: 'perhaps', meaningAr: 'ربما', example: 'Perhaps you should ask for help.' },
      { word: 'healthy', meaningAr: 'صحي', example: 'Stay healthy and sleep well.' },
      { word: 'listen', meaningAr: 'يستمع', example: 'You should listen to your parents.' },
    ],
    scenario: [
      { en: 'You should talk to your manager about it.', ar: 'ينبغي أن تتحدث إلى مديرك بشأن ذلك.', d: 1 },
      { en: 'You should not work so late every night.', ar: 'يجب ألا تعمل حتى وقت متأخر كل ليلة.', d: 2 },
      { en: 'If I were you, I would rest this weekend.', ar: 'لو كنت مكانك، لارتحت في نهاية الأسبوع.', d: 2 },
      { en: 'If I were you, I would apologize today.', ar: 'لو كنت مكانك، لاعتذرت اليوم.', d: 2 },
      { en: 'Why don\'t you join us for dinner?', ar: 'لماذا لا تنضم إلينا على العشاء؟', d: 1 },
      { en: 'Why doesn\'t she call the doctor?', ar: 'لماذا لا تتصل بالطبيب؟', d: 2 },
      { en: 'You had better leave before the traffic starts.', ar: 'من الأفضل أن تغادر قبل بدء الزحام.', d: 2 },
      { en: 'You had better not forget her birthday.', ar: 'من الأفضل ألا تنسى عيد ميلادها.', d: 2 },
      { en: 'I suggest writing your goals every morning.', ar: 'أقترح أن تكتب أهدافك كل صباح.', d: 2 },
      { en: 'I recommend this book; it is very useful.', ar: 'أوصي بهذا الكتاب؛ إنه مفيد جدا.', d: 2 },
      { en: 'You should be proud of your progress.', ar: 'ينبغي أن تكون فخورا بتقدمك.', d: 2 },
      { en: 'He should spend more time with his family.', ar: 'ينبغي أن يقضي وقتا أكثر مع عائلته.', d: 2 },
      { en: 'Should we invite the neighbors too?', ar: 'هل ندعو الجيران أيضا؟', d: 1 },
      { en: 'What should I do about this problem?', ar: 'ماذا ينبغي أن أفعل بشأن هذه المشكلة؟', d: 2 },
      { en: 'I feel very tired these days.', ar: 'أشعر بتعب شديد هذه الأيام.', d: 1 },
      { en: 'You should sleep earlier and drink more water.', ar: 'ينبغي أن تنام مبكرا وتشرب ماء أكثر.', d: 2 },
      { en: 'Do not make the same mistake twice.', ar: 'لا ترتكب الخطأ نفسه مرتين.', d: 3 },
      { en: 'If she is worried, she should talk to someone.', ar: 'إذا كانت قلقة، فعليها أن تتحدث إلى أحد.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'You should {A}.', arTmpl: 'يجب أن {A_ar}.',
        slots: {
          A: [
            { en: 'talk to your manager', ar: 'تتحدث إلى مديرك' }, { en: 'rest this weekend', ar: 'ترتاح في نهاية الأسبوع' },
            { en: 'apologize today', ar: 'تعتذر اليوم' }, { en: 'sleep earlier', ar: 'تنام مبكرا' },
            { en: 'drink more water', ar: 'تشرب ماء أكثر' }, { en: 'ask for help', ar: 'تطلب المساعدة' },
            { en: 'call the doctor', ar: 'تتصل بالطبيب' }, { en: 'take a break every hour', ar: 'تأخذ استراحة كل ساعة' },
            { en: 'listen to your parents', ar: 'تستمع إلى والديك' }, { en: 'spend time with your family', ar: 'تقضي وقتا مع عائلتك' },
          ],
        },
        tags: ['advice', 'modals'], d: 1, limit: 10,
      },
      {
        tmpl: 'You should not {A}.', arTmpl: 'يجب ألا {A_ar}.',
        slots: {
          A: [
            { en: 'work so late', ar: 'تعمل حتى وقت متأخر' }, { en: 'forget her birthday', ar: 'تنسى عيد ميلادها' },
            { en: 'eat so fast', ar: 'تأكل بهذه السرعة' }, { en: 'spend all your money', ar: 'تصرف كل أموالك' },
            { en: 'skip breakfast', ar: 'تتخطى وجبة الفطور' }, { en: 'make the same mistake', ar: 'ترتكب الخطأ نفسه' },
          ],
        },
        tags: ['advice', 'modals'], d: 2, limit: 6,
      },
      {
        tmpl: 'If I were you, I would {A}.', arTmpl: 'لو كنت مكانك، {A_ar}.',
        slots: {
          A: [
            { en: 'take a day off', ar: 'لأخذت يوم راحة' }, { en: 'sleep earlier', ar: 'لنمت مبكرا' },
            { en: 'call the doctor', ar: 'لاتصلت بالطبيب' }, { en: 'take a short break', ar: 'لأخذت استراحة قصيرة' },
            { en: 'ask for help', ar: 'لطلبت المساعدة' }, { en: 'talk to her first', ar: 'لتحدثت معها أولا' },
          ],
        },
        tags: ['advice', 'conditionals'], d: 3, limit: 6,
      },
      {
        tmpl: 'Why don\'t you {A}?', arTmpl: 'لماذا {A_ar}؟',
        slots: {
          A: [
            { en: 'join us for dinner', ar: 'لا تنضم إلينا على العشاء' }, { en: 'visit your grandmother', ar: 'لا تزور جدتك' },
            { en: 'try the new recipe', ar: 'لا تجرب الوصفة الجديدة' }, { en: 'walk to work', ar: 'لا تمشي إلى عملك' },
            { en: 'call your brother', ar: 'لا تتصل بأخيك' }, { en: 'invite the neighbors', ar: 'لا تدعو الجيران' },
            { en: 'take the bus', ar: 'لا تركب الحافلة' },
          ],
        },
        tags: ['advice', 'questions'], d: 2, limit: 7,
      },
      {
        tmpl: 'You had better {A}.', arTmpl: 'من الأفضل أن {A_ar}.',
        slots: {
          A: [
            { en: 'leave early', ar: 'تغادر مبكرا' }, { en: 'hurry up', ar: 'تستعجل' },
            { en: 'start now', ar: 'تبدأ الآن' }, { en: 'rest tonight', ar: 'ترتاح الليلة' },
            { en: 'save some money', ar: 'تدخر بعض المال' },
          ],
        },
        tags: ['advice', 'modals'], d: 2, limit: 5,
      },
    ],
    fills: [
      { en: 'You should talk to your manager.', ar: 'ينبغي أن تتحدث إلى مديرك.', word: 'should', hint: 'فعل نصيحة' },
      { en: 'If I were you, I would rest.', ar: 'لو كنت مكانك، لارتحت.', word: 'were' },
      { en: 'Why don\'t you join us for dinner?', ar: 'لماذا لا تنضم إلينا على العشاء؟', word: 'join' },
      { en: 'I suggest a short walk after lunch.', ar: 'أقترح مشيا قصيرا بعد الغداء.', word: 'suggest' },
      { en: 'I recommend this book.', ar: 'أوصي بهذا الكتاب.', word: 'recommend' },
      { en: 'What should I do about this problem?', ar: 'ماذا ينبغي أن أفعل بشأن هذه المشكلة؟', word: 'problem' },
      { en: 'Perhaps you should ask for help.', ar: 'ربما ينبغي أن تطلب المساعدة.', word: 'Perhaps' },
      { en: 'You had better leave early.', ar: 'من الأفضل أن تغادر مبكرا.', word: 'better', hint: 'had better = من الأفضل' },
    ],
    orders: [
      { en: 'You should talk to your manager today.', ar: 'ينبغي أن تتحدث إلى مديرك اليوم.' },
      { en: 'If I were you, I would rest this weekend.', ar: 'لو كنت مكانك، لارتحت في نهاية الأسبوع.' },
      { en: 'Why don\'t you join us for dinner?', ar: 'لماذا لا تنضم إلينا على العشاء؟' },
      { en: 'You had better leave before the traffic starts.', ar: 'من الأفضل أن تغادر قبل بدء الزحام.' },
      { en: 'He should spend more time with his family.', ar: 'ينبغي أن يقضي وقتا أكثر مع عائلته.' },
      { en: 'What should I do about this problem?', ar: 'ماذا ينبغي أن أفعل بشأن هذه المشكلة؟' },
    ],
    mc: [
      { question: 'Your friend feels very tired. You advise:', options: ['You should sleep earlier.', 'I am busy now.', 'The bus is late.', 'My name is Omar.'], answerIndex: 0, ar: 'يشعر صديقك بتعب شديد، فتنصحه:' },
      { question: 'Which phrase gives strong advice (= من الأفضل أن)?', options: ['You had better...', 'I like coffee.', 'See you later.', 'What a nice car!'], answerIndex: 0, ar: 'أي عبارة تعطي نصيحة قوية؟' },
      { question: '"If I were you, I would apologize" means:', options: ['لو كنت مكانك لاعتذرت', 'اعتذر عن نفسي', 'أنت تعتذر دائما', 'لن أعتذر أبدا'], answerIndex: 0, ar: 'ما معنى If I were you, I would apologize؟' },
      { question: 'Which is a polite way to advise a friend?', options: ['Why don\'t you join us?', 'You must do it now!', 'That is wrong!', 'Do whatever you want.'], answerIndex: 0, ar: 'أي طريقة مهذبة لنصيحة صديق؟' },
    ],
  },
];
