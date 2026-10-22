/* ============================================================
   v2 section data — s09-a2.js
   Education & Digital Skills · lessons 200–202
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 200 — Online Learning ================= */
  {
    num: 200,
    tags: ['online-learning', 'education'],
    objectives: [
      'Talk about watching video lessons and downloading materials',
      'Submit assignments online before a deadline',
      'Describe learning online at your own pace',
    ],
    grammar: {
      explanation: 'Online learning words are verb + object pairs: "watch the video lesson", "download the worksheet", "submit the assignment online". Use present perfect for experience until now: "I have watched three lessons". Use modals for possibility: "You can download it from the website". If-clauses handle technical problems: "If the internet is slow, the video stops". "At my own pace" means you choose your speed.',
      explanationAr: 'كلمات التعلم عبر الإنترنت أزواج فعل ومفعول: watch the video lesson، download the worksheet، submit the assignment online. استخدم المضارع التام للخبرة حتى الآن: I have watched three lessons. واستخدم الأفعال الناقصة للإمكان: You can download it from the website. وجمل الشرط لمشكلات التقنية: If the internet is slow, the video stops. وعبارة at my own pace تعني أنك تختار سرعتك بنفسك.',
      examples: [
        { en: 'I have watched three video lessons this week.', ar: 'شاهدت ثلاثة دروس مرئية هذا الأسبوع.' },
        { en: 'Please submit the assignment online before Friday.', ar: 'قدم الواجب عبر الإنترنت قبل الجمعة من فضلك.' },
        { en: 'I study at my own pace at home.', ar: 'أدرس بوتيرتي الخاصة في البيت.' },
      ],
    },
    vocabulary: [
      { word: 'online', meaningAr: 'عبر الإنترنت', example: 'The class is online today.' },
      { word: 'video lesson', meaningAr: 'درس مرئي', example: 'Each video lesson is ten minutes.' },
      { word: 'download', meaningAr: 'ينزّل', example: 'Download the file before class.' },
      { word: 'worksheet', meaningAr: 'ورقة عمل', example: 'The worksheet has five exercises.' },
      { word: 'submit', meaningAr: 'يقدم (عملا)', example: 'Submit your work before midnight.' },
      { word: 'assignment', meaningAr: 'واجب / تكليف', example: 'The assignment is due on Sunday.' },
      { word: 'upload', meaningAr: 'يرفع ملفا', example: 'Upload the file and press send.' },
      { word: 'connection', meaningAr: 'اتصال', example: 'My connection is slow tonight.' },
      { word: 'link', meaningAr: 'رابط', example: 'The teacher sent us the link.' },
      { word: 'quiz', meaningAr: 'اختبار قصير', example: 'There is a short quiz after each unit.' },
      { word: 'group chat', meaningAr: 'مجموعة محادثة', example: 'We discuss the lesson in the group chat.' },
      { word: 'pace', meaningAr: 'وتيرة / سرعة', example: 'Online study lets you set the pace.' },
    ],
    scenario: [
      { en: 'I have watched three video lessons this week.', ar: 'شاهدت ثلاثة دروس مرئية هذا الأسبوع.', d: 2 },
      { en: 'You can download the worksheet from the website.', ar: 'يمكنك تنزيل ورقة العمل من الموقع الإلكتروني.', d: 1 },
      { en: 'Please submit the assignment online before Friday.', ar: 'قدم الواجب عبر الإنترنت قبل الجمعة من فضلك.', d: 1 },
      { en: 'I submitted my assignment last night.', ar: 'قدمت واجبي الليلة الماضية.', d: 1 },
      { en: 'If the internet is slow, the video stops.', ar: 'إذا كان الإنترنت بطيئا يتوقف الفيديو.', d: 2 },
      { en: 'We have an online class on Thursday.', ar: 'لدينا صف إلكتروني يوم الخميس.', d: 1 },
      { en: 'I like online learning because I study at my own pace.', ar: 'أحب التعلم عبر الإنترنت لأنني أدرس بوتيرتي الخاصة.', d: 3 },
      { en: 'Do you need headphones for the lesson?', ar: 'هل تحتاج سماعات للدرس؟', d: 1 },
      { en: 'Yes, and I need a stable connection too.', ar: 'نعم، وأحتاج اتصالا مستقرا أيضا.', d: 2 },
      { en: 'She has not finished the course yet.', ar: 'لم تنه الدورة بعد.', d: 2 },
      { en: 'My classmates share their notes in the group chat.', ar: 'زملائي يشاركون ملاحظاتهم في مجموعة المحادثة.', d: 2 },
      { en: 'How do you submit the assignment?', ar: 'كيف تقدم الواجب؟', d: 1 },
      { en: 'You upload the file and press send.', ar: 'ترفع الملف وتضغط إرسال.', d: 2 },
      { en: 'I could not open the video yesterday.', ar: 'لم أتمكن من فتح الفيديو أمس.', d: 2 },
      { en: 'The teacher will post the answer key tomorrow.', ar: 'سينشر المعلم مفتاح الإجابات غدا.', d: 2 },
      { en: 'Have you downloaded the worksheet yet?', ar: 'هل نزلت ورقة العمل بعد؟', d: 2 },
      { en: 'Not yet, I will download it tonight.', ar: 'ليس بعد، سأنزّلها الليلة.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I have already {V}.', arTmpl: 'لقد {V_ar} بالفعل.',
        slots: {
          V: [
            { en: 'watched the video lesson', ar: 'شاهدت الدرس المرئي' },
            { en: 'downloaded the worksheet', ar: 'نزلت ورقة العمل' },
            { en: 'submitted the assignment', ar: 'قدمت الواجب' },
            { en: 'read the article', ar: 'قرأت المقال' },
            { en: 'finished the quiz', ar: 'أنهيت الاختبار القصير' },
          ],
        },
        tags: ['online-learning', 'present-perfect'], d: 2, limit: 5,
      },
      {
        tmpl: 'You can {V} from the website.', arTmpl: 'يمكنك {V_ar} من الموقع الإلكتروني.',
        slots: {
          V: [
            { en: 'download the worksheet', ar: 'تنزيل ورقة العمل' },
            { en: 'watch the recorded lesson', ar: 'مشاهدة الدرس المسجل' },
            { en: 'submit the assignment', ar: 'تقديم الواجب' },
            { en: 'find the course materials', ar: 'إيجاد مواد الدورة' },
            { en: 'check your grades', ar: 'التحقق من درجاتك' },
          ],
        },
        tags: ['online-learning', 'modal'], d: 1, limit: 5,
      },
      {
        tmpl: 'If {X} does not work, {Y}.', arTmpl: 'إذا لم يعمل {X_ar} ف{Y_ar}.',
        slots: {
          X: [
            { en: 'the link', ar: 'الرابط' }, { en: 'the video', ar: 'الفيديو' },
            { en: 'the app', ar: 'التطبيق' }, { en: 'the website', ar: 'الموقع' },
          ],
          Y: [
            { en: 'reload the page', ar: 'أعد تحميل الصفحة' },
            { en: 'check the connection', ar: 'تحقق من الاتصال' },
            { en: 'try again later', ar: 'حاول مرة أخرى لاحقا' },
          ],
        },
        tags: ['online-learning', 'if-clauses'], d: 3, limit: 12,
      },
      {
        tmpl: '{S} {V}.', arTmpl: '{S_ar} {V_ar}.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'My brother', ar: 'أخي', agr: 'he' },
            { en: 'My sister', ar: 'أختي', agr: 'she' }, { en: 'We', ar: 'نحن', agr: 'we' },
            { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{
            en: `${B.enPresent('study', x.S.agr)} at ${
              { I: 'my', he: 'his', she: 'her', we: 'our', they: 'their' }[x.S.agr]
            } own pace`,
            ar: {
              I: 'أدرس بوتيرتي الخاصة', he: 'يدرس بوتيرته الخاصة', she: 'تدرس بوتيرتها الخاصة',
              we: 'ندرس بوتيرتنا الخاصة', they: 'يدرسون بوتيرتهم الخاصة',
            }[x.S.agr],
          }],
        },
        tags: ['online-learning', 'present-simple'], d: 2, limit: 5,
      },
      {
        tmpl: 'Please {V} before {D}.', arTmpl: 'من فضلك {V_ar} قبل {D_ar}.',
        slots: {
          V: [
            { en: 'submit the assignment', ar: 'تقديم الواجب' },
            { en: 'download the worksheet', ar: 'تنزيل ورقة العمل' },
            { en: 'watch the video lesson', ar: 'مشاهدة الدرس المرئي' },
            { en: 'send your project', ar: 'إرسال مشروعك' },
          ],
          D: [
            { en: 'Friday', ar: 'الجمعة' }, { en: 'Sunday', ar: 'الأحد' },
            { en: 'midnight', ar: 'منتصف الليل' }, { en: 'the weekend', ar: 'نهاية الأسبوع' },
          ],
        },
        tags: ['online-learning', 'polite'], d: 2, limit: 16,
      },
    ],
    fills: [
      { en: 'I have watched three video lessons this week.', ar: 'شاهدت ثلاثة دروس مرئية هذا الأسبوع.', word: 'video' },
      { en: 'You can download the worksheet from the website.', ar: 'يمكنك تنزيل ورقة العمل من الموقع الإلكتروني.', word: 'download' },
      { en: 'Please submit the assignment online before Friday.', ar: 'قدم الواجب عبر الإنترنت قبل الجمعة من فضلك.', word: 'submit' },
      { en: 'I like online learning because I study at my own pace.', ar: 'أحب التعلم عبر الإنترنت لأنني أدرس بوتيرتي الخاصة.', word: 'pace' },
      { en: 'She has not finished the course yet.', ar: 'لم تنه الدورة بعد.', word: 'yet' },
      { en: 'If the internet is slow, the video stops.', ar: 'إذا كان الإنترنت بطيئا يتوقف الفيديو.', word: 'internet' },
      { en: 'You upload the file and press send.', ar: 'ترفع الملف وتضغط إرسال.', word: 'upload' },
      { en: 'Have you downloaded the worksheet yet?', ar: 'هل نزلت ورقة العمل بعد؟', word: 'worksheet' },
    ],
    orders: [
      { en: 'I have watched three video lessons this week.', ar: 'شاهدت ثلاثة دروس مرئية هذا الأسبوع.' },
      { en: 'Please submit the assignment online before Friday.', ar: 'قدم الواجب عبر الإنترنت قبل الجمعة من فضلك.' },
      { en: 'I study at my own pace at home.', ar: 'أدرس بوتيرتي الخاصة في البيت.' },
      { en: 'How do you submit the assignment?', ar: 'كيف تقدم الواجب؟' },
      { en: 'The teacher will post the answer key tomorrow.', ar: 'سينشر المعلم مفتاح الإجابات غدا.' },
      { en: 'We have an online class on Thursday.', ar: 'لدينا صف إلكتروني يوم الخميس.' },
    ],
    mc: [
      { question: 'Where can you download the worksheet?', options: ['From the course website', 'From the library card', 'From the exam hall', 'From the bus stop'], answerIndex: 0, ar: 'من أين تنزّل ورقة العمل؟' },
      { question: '"At my own pace" means:', options: ['بوتيرتي الخاصة', 'مع معلم خاص', 'في وقت الدورة', 'بسرعة الزملاء'], answerIndex: 0, ar: 'ما معنى at my own pace؟' },
      { question: 'What do you do with a finished assignment?', options: ['Submit it online', 'Delete the app', 'Charge the phone', 'Renew the book'], answerIndex: 0, ar: 'ماذا تفعل بالواجب بعد إنهائه؟' },
      { question: 'Which sentence is correct?', options: ['I have finished the video lesson.', 'I have finish the video lesson.', 'I has finished the video lesson.', 'I have finishing the video lesson.'], answerIndex: 0, ar: 'أي جملة صحيحة؟' },
      { question: 'The video does not play. What should you try first?', options: ['Check the internet connection', 'Buy a new laptop', 'Close the school', 'Submit the assignment'], answerIndex: 0, ar: 'الفيديو لا يعمل، ماذا تحاول أولا؟' },
    ],
  },

  /* ================= lesson 201 — At the Library ================= */
  {
    num: 201,
    tags: ['library', 'education'],
    objectives: [
      'Borrow and return books with a library card',
      'Ask about due dates and renewals',
      'Follow library rules in the quiet zone',
    ],
    grammar: {
      explanation: 'At the library you "borrow" a book (take it home) and "return" it later. Books have a "due date" — the day you must give them back. If you need more time, you "renew" the book. Use "Can I ...?" or "Could I ...?" for polite requests: "Can I renew this book online?". A "library card" is your ID at the library, and the "quiet zone" is where nobody talks.',
      explanationAr: 'في المكتبة تستعير كتابا borrow وتعيده return لاحقا. لكل كتاب تاريخ استحقاق due date وهو اليوم الذي يجب أن تعيد فيه الكتاب. وإذا احتجت وقتا أطول فجدد الاستعارة renew. استخدم Can I أو Could I للطلبات المهذبة: Can I renew this book online؟ وبطاقة المكتبة library card هي هويتك في المكتبة، ومنطقة الهدوء quiet zone هي المكان الذي لا يتحدث فيه أحد.',
      examples: [
        { en: 'I want to borrow this novel.', ar: 'أريد استعارة هذه الرواية.' },
        { en: 'Please return the book in two weeks.', ar: 'أعد الكتاب بعد أسبوعين من فضلك.' },
        { en: 'Can I renew this book online?', ar: 'هل يمكنني تجديد استعارة هذا الكتاب عبر الإنترنت؟' },
      ],
    },
    vocabulary: [
      { word: 'library', meaningAr: 'مكتبة', example: 'The library closes at nine.' },
      { word: 'borrow', meaningAr: 'يستعير', example: 'You can borrow up to four books.' },
      { word: 'return', meaningAr: 'يعيد', example: 'Return the magazines on time.' },
      { word: 'library card', meaningAr: 'بطاقة مكتبة', example: 'Show your library card at the desk.' },
      { word: 'renew', meaningAr: 'يجدد الاستعارة', example: 'I renewed the book once already.' },
      { word: 'due date', meaningAr: 'تاريخ الاستحقاق', example: 'The due date is written inside.' },
      { word: 'librarian', meaningAr: 'أمين المكتبة', example: 'Ask the librarian for help.' },
      { word: 'shelf', meaningAr: 'رف', example: 'History books are on that shelf.' },
      { word: 'quiet zone', meaningAr: 'منطقة هادئة', example: 'Keep your voice down in the quiet zone.' },
      { word: 'novel', meaningAr: 'رواية', example: 'This novel is very famous.' },
      { word: 'dictionary', meaningAr: 'قاموس', example: 'Use the dictionary for new words.' },
      { word: 'magazine', meaningAr: 'مجلة', example: 'The new magazine is at the entrance.' },
    ],
    scenario: [
      { en: 'I want to borrow this novel.', ar: 'أريد استعارة هذه الرواية.', d: 1 },
      { en: 'Do you have a library card?', ar: 'هل لديك بطاقة مكتبة؟', d: 1 },
      { en: 'No, I will apply for one today.', ar: 'لا، سأقدم طلبا للحصول عليها اليوم.', d: 2 },
      { en: 'You can borrow four books at a time.', ar: 'يمكنك استعارة أربعة كتب في المرة.', d: 1 },
      { en: 'Please return the book in two weeks.', ar: 'أعد الكتاب بعد أسبوعين من فضلك.', d: 1 },
      { en: 'When is the due date for this book?', ar: 'متى تاريخ استحقاق هذا الكتاب؟', d: 1 },
      { en: 'The due date is on the last page.', ar: 'تاريخ الاستحقاق مكتوب في الصفحة الأخيرة.', d: 2 },
      { en: 'This is the quiet zone.', ar: 'هذه المنطقة هادئة.', d: 1 },
      { en: 'Please do not talk in the quiet zone.', ar: 'لا تتحدث في المنطقة الهادئة من فضلك.', d: 2 },
      { en: 'The librarian is very helpful.', ar: 'أمين المكتبة متعاون جدا.', d: 1 },
      { en: 'I left my bag near the shelves.', ar: 'تركت حقيبتي قرب الرفوف.', d: 2 },
      { en: 'Can I renew this book online?', ar: 'هل يمكنني تجديد استعارة هذا الكتاب عبر الإنترنت؟', d: 2 },
      { en: 'Yes, you can renew it twice.', ar: 'نعم، يمكنك تجديدها مرتين.', d: 2 },
      { en: 'My brother does not have a library card.', ar: 'أخي ليس لديه بطاقة مكتبة.', d: 2 },
      { en: 'We borrowed three magazines last week.', ar: 'استعرنا ثلاث مجلات الأسبوع الماضي.', d: 2 },
      { en: 'The dictionary must stay in the library.', ar: 'يجب أن يبقى القاموس في المكتبة.', d: 2 },
      { en: 'I will return the book on Saturday.', ar: 'سأعيد الكتاب يوم السبت.', d: 1 },
      { en: 'She reads novels every evening after work.', ar: 'تقرأ الروايات كل مساء بعد العمل.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I want to borrow {B}.', arTmpl: 'أريد استعارة {B_ar}.',
        slots: {
          B: [
            { en: 'this novel', ar: 'هذه الرواية' }, { en: 'this dictionary', ar: 'هذا القاموس' },
            { en: 'two magazines', ar: 'مجلتين' }, { en: 'a story book', ar: 'كتاب قصص' },
            { en: 'an English book', ar: 'كتاب إنجليزي' }, { en: 'a children book', ar: 'كتاب أطفال' },
            { en: 'two history books', ar: 'كتابي تاريخ' }, { en: 'this map', ar: 'هذه الخريطة' },
          ],
        },
        tags: ['library', 'polite'], d: 1, limit: 8,
      },
      {
        tmpl: 'Please return the book {T}.', arTmpl: 'أعد الكتاب {T_ar} من فضلك.',
        slots: {
          T: [
            { en: 'in two weeks', ar: 'بعد أسبوعين' }, { en: 'next Monday', ar: 'يوم الاثنين القادم' },
            { en: 'before Friday', ar: 'قبل الجمعة' }, { en: 'at the end of the month', ar: 'نهاية الشهر' },
            { en: 'on time', ar: 'في الموعد' },
            { en: 'before the weekend', ar: 'قبل نهاية الأسبوع' },
          ],
        },
        tags: ['library', 'polite'], d: 1, limit: 6,
      },
      {
        tmpl: 'Can I renew {B}?', arTmpl: 'هل يمكنني تجديد استعارة {B_ar}؟',
        slots: {
          B: [
            { en: 'this book', ar: 'هذا الكتاب' }, { en: 'the novel', ar: 'الرواية' },
            { en: 'these magazines', ar: 'هذه المجلات' }, { en: 'the story book', ar: 'كتاب القصص' },
            { en: 'the map', ar: 'الخريطة' }, { en: 'that novel', ar: 'تلك الرواية' },
          ],
        },
        tags: ['library', 'questions'], d: 2, limit: 6,
      },
      {
        tmpl: 'The librarian put the book on the {S}.', arTmpl: 'وضع أمين المكتبة الكتاب على {S_ar}.',
        slots: {
          S: [
            { en: 'first shelf', ar: 'الرف الأول' }, { en: 'second shelf', ar: 'الرف الثاني' },
            { en: 'top shelf', ar: 'الرف العلوي' }, { en: 'last shelf', ar: 'الرف الأخير' },
            { en: 'history shelf', ar: 'رف التاريخ' }, { en: 'bottom shelf', ar: 'الرف السفلي' },
          ],
        },
        tags: ['library', 'places'], d: 2, limit: 6,
      },
      {
        tmpl: 'We {V} {B} from the library.', arTmpl: '{V_ar} {B_ar} من المكتبة.',
        slots: {
          V: [
            { en: 'borrow', ar: 'نستعير' }, { en: 'return', ar: 'نعيد' },
          ],
          B: [
            { en: 'books', ar: 'الكتب' }, { en: 'magazines', ar: 'المجلات' },
            { en: 'stories', ar: 'القصص' },
          ],
        },
        tags: ['library', 'present-simple'], d: 1, limit: 6,
      },
      {
        tmpl: 'The {N} is due {T}.', arTmpl: '{N_ar} مستحق {T_ar}.',
        slots: {
          N: [
            { en: 'book', ar: 'الكتاب' }, { en: 'magazine', ar: 'المجلة' },
            { en: 'novel', ar: 'الرواية' }, { en: 'dictionary', ar: 'القاموس' },
          ],
          T: [
            { en: 'next Monday', ar: 'يوم الاثنين القادم' }, { en: 'on Friday', ar: 'يوم الجمعة' },
            { en: 'next week', ar: 'الأسبوع القادم' }, { en: 'tomorrow', ar: 'غدا' },
          ],
        },
        tags: ['library', 'time'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'I want to borrow this novel.', ar: 'أريد استعارة هذه الرواية.', word: 'borrow', hint: 'يستعير' },
      { en: 'Please return the book in two weeks.', ar: 'أعد الكتاب بعد أسبوعين من فضلك.', word: 'return' },
      { en: 'Do you have a library card?', ar: 'هل لديك بطاقة مكتبة؟', word: 'card' },
      { en: 'When is the due date for this book?', ar: 'متى تاريخ استحقاق هذا الكتاب؟', word: 'due' },
      { en: 'This is the quiet zone.', ar: 'هذه المنطقة هادئة.', word: 'quiet' },
      { en: 'Can I renew this book online?', ar: 'هل يمكنني تجديد استعارة هذا الكتاب عبر الإنترنت؟', word: 'renew' },
      { en: 'The librarian is very helpful.', ar: 'أمين المكتبة متعاون جدا.', word: 'librarian' },
      { en: 'My brother does not have a library card.', ar: 'أخي ليس لديه بطاقة مكتبة.', word: 'library' },
    ],
    orders: [
      { en: 'I want to borrow this novel.', ar: 'أريد استعارة هذه الرواية.' },
      { en: 'Please return the book in two weeks.', ar: 'أعد الكتاب بعد أسبوعين من فضلك.' },
      { en: 'When is the due date for this book?', ar: 'متى تاريخ استحقاق هذا الكتاب؟' },
      { en: 'Can I renew this book online?', ar: 'هل يمكنني تجديد استعارة هذا الكتاب عبر الإنترنت؟' },
      { en: 'Please do not talk in the quiet zone.', ar: 'لا تتحدث في المنطقة الهادئة من فضلك.' },
      { en: 'We borrowed three magazines last week.', ar: 'استعرنا ثلاث مجلات الأسبوع الماضي.' },
    ],
    mc: [
      { question: 'You want to take books home. What do you need?', options: ['A library card', 'A bus ticket', 'A passport', 'A credit card'], answerIndex: 0, ar: 'تريد أخذ الكتب إلى البيت، ماذا تحتاج؟' },
      { question: '"Renew the book" means:', options: ['تجديد استعارة الكتاب', 'شراء الكتاب', 'إعادة الكتاب للمكتبة', 'قراءة الكتاب'], answerIndex: 0, ar: 'ما معنى renew the book؟' },
      { question: 'Where must you not talk?', options: ['In the quiet zone', 'In the cafeteria', 'At the entrance', 'In the parking lot'], answerIndex: 0, ar: 'أين يجب ألا تتحدث؟' },
      { question: 'How long can you keep the book?', options: ['For two weeks', 'For two years', 'For one minute', 'For ten hours'], answerIndex: 0, ar: 'كم مدة الاحتفاظ بالكتاب؟' },
      { question: 'The book is late. You may pay a small ___.', options: ['fine', 'ticket', 'letter', 'license'], answerIndex: 0, ar: 'تأخر الكتاب، فقد تدفع غرامة بسيطة تسمى ___.', explanation: 'A fine is money you pay when you return a book late.' },
    ],
  },

  /* ================= lesson 202 — Research and Sources ================= */
  {
    num: 202,
    tags: ['research', 'education'],
    objectives: [
      'Evaluate reliable sources for a project',
      'Take notes and cite articles correctly',
      'Use research vocabulary: source, author, article',
    ],
    grammar: {
      explanation: 'A "source" is where information comes from: a book, an article or a website. A "reliable" source is one you can trust — check the author and the date. Use present perfect for research until now: "Have you taken notes yet?". Use "should" and "must" for good research habits: "You must cite the article in your report". "Cite" means show where you found the idea. Wikipedia is a good start, but it is not enough for academic work.',
      explanationAr: 'المصدر source هو مكان أتى منه بيت المعلومة: كتاب أو مقال أو موقع. والمصدر الموثوق reliable هو الذي تثق به، فتحقق من المؤلف ومن التاريخ. استخدم المضارع التام لبحثك حتى الآن: Have you taken notes yet؟ واستخدم should وmust لعادات البحث الجيدة: You must cite the article in your report. وcite تعني توثيق المصدر الذي أتيت منه بالفكرة. ويكيبيديا بداية جيدة لكنها لا تكفي للعمل الأكاديمي.',
      examples: [
        { en: 'You should use a reliable source for your project.', ar: 'يجب أن تستخدم مصدرا موثوقا لمشروعك.' },
        { en: 'Have you taken notes during the lecture?', ar: 'هل أخذت ملاحظات أثناء المحاضرة؟' },
        { en: 'You must cite the article in your report.', ar: 'يجب أن تستشهد بالمقال في تقريرك.' },
      ],
    },
    vocabulary: [
      { word: 'research', meaningAr: 'بحث', example: 'The research took three months.' },
      { word: 'source', meaningAr: 'مصدر', example: 'Write the source under each picture.' },
      { word: 'reliable', meaningAr: 'موثوق', example: 'Is this website reliable?' },
      { word: 'cite', meaningAr: 'يستشهد بـ / يوثق', example: 'Cite every quote you use.' },
      { word: 'article', meaningAr: 'مقال', example: 'The article was published in May.' },
      { word: 'author', meaningAr: 'مؤلف', example: 'The author teaches at a university.' },
      { word: 'notes', meaningAr: 'ملاحظات', example: 'My notes are short and clear.' },
      { word: 'encyclopedia', meaningAr: 'موسوعة', example: 'The encyclopedia has good summaries.' },
      { word: 'information', meaningAr: 'معلومات', example: 'This page gives useful information.' },
      { word: 'project', meaningAr: 'مشروع', example: 'Our project is about water.' },
      { word: 'report', meaningAr: 'تقرير', example: 'I finished my report yesterday.' },
      { word: 'quote', meaningAr: 'يقتبس', example: 'Do not quote without the name.' },
    ],
    scenario: [
      { en: 'I am writing a research paper about the environment.', ar: 'أكتب ورقة بحثية عن البيئة.', d: 2 },
      { en: 'You should use a reliable source for your project.', ar: 'ينبغي أن تستخدم مصدرا موثوقا لمشروعك.', d: 1 },
      { en: 'Wikipedia is not enough for a university paper.', ar: 'ويكيبيديا لا تكفي لورقة بحثية جامعية.', d: 2 },
      { en: 'Always check the date of the article.', ar: 'تحقق دائما من تاريخ المقال.', d: 1 },
      { en: 'Who wrote this article?', ar: 'من كتب هذا المقال؟', d: 1 },
      { en: 'A professor from Cairo wrote it in 2021.', ar: 'كتبه أستاذ جامعي من القاهرة عام 2021.', d: 2 },
      { en: 'Have you taken notes during the lecture?', ar: 'هل أخذت ملاحظات أثناء المحاضرة؟', d: 2 },
      { en: 'Yes, I have taken ten pages of notes.', ar: 'نعم، أخذت عشر صفحات من الملاحظات.', d: 2 },
      { en: 'You must cite the article in your report.', ar: 'يجب أن تستشهد بالمقال في تقريرك.', d: 2 },
      { en: 'This website does not show any author.', ar: 'هذا الموقع لا يعرض أي مؤلف.', d: 2 },
      { en: 'We compared three different sources yesterday.', ar: 'قارننا ثلاثة مصادر مختلفة أمس.', d: 2 },
      { en: 'If the source is old, find a newer one.', ar: 'إذا كان المصدر قديما فابحث عن أحدث منه.', d: 3 },
      { en: 'Where did you find this information?', ar: 'أين وجدت هذه المعلومات؟', d: 1 },
      { en: 'I found it in an online encyclopedia.', ar: 'وجدتها في موسوعة إلكترونية.', d: 2 },
      { en: 'My notes have helped me a lot.', ar: 'ساعدتني ملاحظاتي كثيرا.', d: 2 },
      { en: 'Please write the sources at the end of the report.', ar: 'اكتب المصادر في نهاية التقرير من فضلك.', d: 2 },
      { en: 'Students should not copy without citing the author.', ar: 'لا ينبغي للطلاب أن ينسخوا دون توثيق المؤلف.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'You should {V} before you use it.', arTmpl: 'ينبغي أن {V_ar} قبل استخدامه.',
        slots: {
          V: [
            { en: 'check the date', ar: 'تتحقق من التاريخ' },
            { en: 'read the whole article', ar: 'تقرأ المقال كاملا' },
            { en: 'check the author name', ar: 'تتحقق من اسم المؤلف' },
            { en: 'compare two sources', ar: 'تقارن بين مصدرين' },
          ],
        },
        tags: ['research', 'modal'], d: 2, limit: 4,
      },
      {
        tmpl: 'Have you {V} yet?', arTmpl: 'هل {V_ar} بعد؟',
        slots: {
          V: [
            { en: 'taken notes', ar: 'أخذت ملاحظات' },
            { en: 'cited the article', ar: 'استشهدت بالمقال' },
            { en: 'found a reliable source', ar: 'وجدت مصدرا موثوقا' },
            { en: 'finished the outline', ar: 'أنهيت المخطط' },
            { en: 'read the report', ar: 'قرأت التقرير' },
          ],
        },
        tags: ['research', 'present-perfect'], d: 2, limit: 5,
      },
      {
        tmpl: '{S} {V}.', arTmpl: '{S_ar} {V_ar}.',
        slots: {
          S: [
            { en: 'Wikipedia', ar: 'ويكيبيديا', g: 'f' }, { en: 'One website', ar: 'موقع واحد', g: 'm' },
            { en: 'One article', ar: 'مقال واحد', g: 'm' }, { en: 'A single source', ar: 'مصدر واحد', g: 'm' },
          ],
          W: [
            { en: 'project', ar: 'المشروع' }, { en: 'report', ar: 'التقرير' },
            { en: 'research paper', ar: 'ورقة البحث' },
          ],
          V: (x) => [{
            en: `is not enough for the ${x.W.en}`,
            ar: `${x.S.g === 'f' ? 'لا تكفي في' : 'لا يكفي في'} ${x.W.ar}`,
          }],
        },
        tags: ['research', 'negative'], d: 2, limit: 12,
      },
      {
        tmpl: 'We {V} information from {S}.', arTmpl: '{V_ar} المعلومات من {S_ar}.',
        slots: {
          V: [
            { en: 'collect', ar: 'نجمع' }, { en: 'compare', ar: 'نقارن' },
            { en: 'organize', ar: 'ننظم' },
          ],
          S: [
            { en: 'reliable sources', ar: 'مصادر موثوقة' },
            { en: 'online articles', ar: 'مقالات إلكترونية' },
            { en: 'books and journals', ar: 'الكتب والمجلات العلمية' },
          ],
        },
        tags: ['research', 'present-simple'], d: 1, limit: 9,
      },
      {
        tmpl: 'If the source is {ADJ}, do not use it.', arTmpl: 'إذا كان المصدر {ADJ_ar} فلا تستخدمه.',
        slots: {
          ADJ: [
            { en: 'old', ar: 'قديما' }, { en: 'unknown', ar: 'مجهولا' },
            { en: 'biased', ar: 'متحيزا' }, { en: 'unclear', ar: 'غير واضحا' },
          ],
        },
        tags: ['research', 'if-clauses'], d: 3, limit: 4,
      },
    ],
    fills: [
      { en: 'You should use a reliable source for your project.', ar: 'ينبغي أن تستخدم مصدرا موثوقا لمشروعك.', word: 'reliable' },
      { en: 'Always check the date of the article.', ar: 'تحقق دائما من تاريخ المقال.', word: 'date' },
      { en: 'You must cite the article in your report.', ar: 'يجب أن تستشهد بالمقال في تقريرك.', word: 'cite' },
      { en: 'Have you taken notes yet?', ar: 'هل أخذت ملاحظات بعد؟', word: 'notes' },
      { en: 'Wikipedia is not enough for a university paper.', ar: 'ويكيبيديا لا تكفي لورقة بحثية جامعية.', word: 'enough' },
      { en: 'I am writing a research paper about the environment.', ar: 'أكتب ورقة بحثية عن البيئة.', word: 'research' },
      { en: 'This website does not show any author.', ar: 'هذا الموقع لا يعرض أي مؤلف.', word: 'author' },
      { en: 'Where did you find this information?', ar: 'أين وجدت هذه المعلومات؟', word: 'information' },
    ],
    orders: [
      { en: 'I am writing a research paper about the environment.', ar: 'أكتب ورقة بحثية عن البيئة.' },
      { en: 'You should use a reliable source for your project.', ar: 'ينبغي أن تستخدم مصدرا موثوقا لمشروعك.' },
      { en: 'Have you taken notes during the lecture?', ar: 'هل أخذت ملاحظات أثناء المحاضرة؟' },
      { en: 'You must cite the article in your report.', ar: 'يجب أن تستشهد بالمقال في تقريرك.' },
      { en: 'Always check the date of the article.', ar: 'تحقق دائما من تاريخ المقال.' },
      { en: 'If the source is old, find a newer one.', ar: 'إذا كان المصدر قديما فابحث عن أحدث منه.' },
    ],
    mc: [
      { question: 'Which is the most reliable source for a paper?', options: ['A university journal', 'A random comment', 'An unknown blog', 'A chat message'], answerIndex: 0, ar: 'أي المصادر أكثر موثوقية لورقة بحثية؟' },
      { question: '"Cite the article" means:', options: ['استشهد بالمقال', 'اشترِ المقال', 'احذف المقال', 'ترجم المقال'], answerIndex: 0, ar: 'ما معنى cite the article؟' },
      { question: 'Why is Wikipedia not enough for academic work?', options: ['Anyone can edit it', 'It costs a lot of money', 'It is a printed book', 'It has no words'], answerIndex: 0, ar: 'لماذا لا تكفي ويكيبيديا للعمل الأكاديمي؟' },
      { question: 'What should you write at the end of your report?', options: ['The sources', 'The password', 'The price', 'The address'], answerIndex: 0, ar: 'ماذا ينبغي أن تكتب في نهاية تقريرك؟' },
      { question: 'The article has no author and no date. It is probably ___.', options: ['unreliable', 'perfect', 'expensive', 'famous'], answerIndex: 0, ar: 'المقال بلا مؤلف وبلا تاريخ، فهو على الأرجح ___.', explanation: 'Check the author and the date: without them, a source is not reliable.' },
    ],
  },
];
