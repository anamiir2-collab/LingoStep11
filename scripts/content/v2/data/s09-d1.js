/* ============================================================
   v2 section data — s09-d1.js
   Education & Digital Skills (end of Section 9) · lessons 217–220
   (220 = section review)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 217 — Troubleshooting Devices ================= */
  {
    num: 217,
    tags: ['troubleshooting', 'devices'],
    objectives: [
      'Describe simple problems with your devices',
      'Follow basic steps to fix a problem',
      'Ask for and offer technical help politely',
    ],
    grammar: {
      explanation: 'When a device stops working, start with simple steps: turn it off and on again, check that the cable is plugged in, and restart the router if the internet is slow. Keep the system updated, because updates fix many problems. If it still does not work, restart it again or ask for help. Use "Have you tried ...?" to suggest a step, and "It still does not work" to say that the problem continues.',
      explanationAr: 'عندما يتوقف جهاز عن العمل ابدأ بخطوات بسيطة: أطفئه ثم شغله من جديد، وتأكد أن الكابل موصول، وأعد تشغيل الراوتر إذا كان الإنترنت بطيئا. حافظ على تحديث النظام لأن التحديثات تصلح كثيرا من المشكلات. إذا لم يعمل بعد فأعد التشغيل مرة أخرى أو اطلب المساعدة. استخدم Have you tried ...؟ لاقتراح خطوة، وIt still does not work لقول إن المشكلة مستمرة.',
      examples: [
        { en: 'Turn the device off and on again.', ar: 'أطفئ الجهاز ثم شغله من جديد.' },
        { en: 'Check the cable, please.', ar: 'تحقق من الكابل من فضلك.' },
        { en: 'It still does not work.', ar: 'لا يزال لا يعمل.' },
      ],
    },
    vocabulary: [
      { word: 'troubleshooting', meaningAr: 'حل المشكلات', example: 'Troubleshooting starts with simple steps.', ipa: 'trʌbəlʃuːtɪŋ' },
      { word: 'device', meaningAr: 'جهاز', example: 'This device needs an update.' },
      { word: 'restart', meaningAr: 'يعيد التشغيل', example: 'Restart the laptop before class.' },
      { word: 'cable', meaningAr: 'كابل / سلك', example: 'The cable is behind the desk.' },
      { word: 'update', meaningAr: 'تحديث / يحدّث', example: 'The update takes ten minutes.' },
      { word: 'system', meaningAr: 'نظام', example: 'The new system is faster.' },
      { word: 'router', meaningAr: 'راوتر (موجّه الشبكة)', example: 'The router light is orange.' },
      { word: 'connection', meaningAr: 'اتصال', example: 'My connection is slow at night.' },
      { word: 'frozen', meaningAr: 'متجمد (لا يستجيب)', example: 'The screen is frozen again.' },
      { word: 'battery', meaningAr: 'بطارية', example: 'The battery dies quickly.' },
      { word: 'settings', meaningAr: 'إعدادات', example: 'Check the settings for sound.' },
      { word: 'plug in', meaningAr: 'يوصل بالكهرباء', example: 'Plug in the charger, please.' },
    ],
    scenario: [
      { en: 'My laptop is very slow today.', ar: 'حاسوبي بطيء جدا اليوم.', d: 1 },
      { en: 'Turn it off and on again.', ar: 'أطفئه ثم شغله من جديد.', d: 1 },
      { en: 'Did that fix the problem?', ar: 'هل حلت هذه المشكلة؟', d: 2 },
      { en: 'No, it still does not work.', ar: 'لا، لا يزال لا يعمل.', d: 1 },
      { en: 'Please check that the cable is plugged in.', ar: 'من فضلك تحقق من أن الكابل موصول.', d: 2 },
      { en: 'The screen is frozen, so I cannot click anything.', ar: 'الشاشة متجمدة، لذلك لا أستطيع النقر على شيء.', d: 2 },
      { en: 'Have you updated the system this month?', ar: 'هل حدّثت النظام هذا الشهر؟', d: 2 },
      { en: 'I will update it tonight.', ar: 'سأحدّثه الليلة.', d: 1 },
      { en: 'The internet is slow, so restart the router.', ar: 'الإنترنت بطيء، لذا أعد تشغيل الراوتر.', d: 2 },
      { en: 'Wait one minute, then try again.', ar: 'انتظر دقيقة ثم حاول مرة أخرى.', d: 1 },
      { en: 'Our printers never work on Monday mornings.', ar: 'طابعاتنا لا تعمل أبدا صباح الاثنين.', d: 3 },
      { en: 'The battery dies after two hours.', ar: 'تنفد البطارية بعد ساعتين.', d: 2 },
      { en: 'Does the keyboard work now?', ar: 'هل تعمل لوحة المفاتيح الآن؟', d: 1 },
      { en: 'Yes, thank you for your help.', ar: 'نعم، شكرا على مساعدتك.', d: 1 },
      { en: 'If the sound stops, check the settings first.', ar: 'إذا توقف الصوت، فتحقق من الإعدادات أولا.', d: 3 },
      { en: 'I cannot connect to the wifi at all.', ar: 'لا أستطيع الاتصال بشبكة الواي فاي إطلاقا.', d: 2 },
    ],
    patterns: [
      {
        tmpl: '{D} {W}.', arTmpl: '{D_ar} {W_ar}.',
        slots: {
          D: [
            { en: 'My laptop', ar: 'حاسوبي', g: 'm' }, { en: 'My phone', ar: 'هاتفي', g: 'm' },
            { en: 'The printer', ar: 'الطابعة', g: 'f' }, { en: 'The screen', ar: 'الشاشة', g: 'f' },
            { en: 'The keyboard', ar: 'لوحة المفاتيح', g: 'f' }, { en: 'The scanner', ar: 'الماسح الضوئي', g: 'm' },
            { en: 'My tablet', ar: 'جهازي اللوحي', g: 'm' }, { en: 'The mouse', ar: 'الفأرة', g: 'f' },
          ],
          W: (x) => [{ en: 'is not working', ar: x.D.g === 'f' ? 'لا تعمل' : 'لا يعمل' }],
        },
        tags: ['troubleshooting', 'devices'], d: 1, limit: 8,
      },
      {
        tmpl: 'Have you tried {A}?', arTmpl: 'هل جربت {A_ar}؟',
        slots: {
          A: [
            { en: 'restarting the router', ar: 'إعادة تشغيل الراوتر' },
            { en: 'turning it off and on', ar: 'إطفاءه وتشغيله من جديد' },
            { en: 'charging the battery', ar: 'شحن البطارية' },
            { en: 'updating the system', ar: 'تحديث النظام' },
            { en: 'checking the cable', ar: 'فحص الكابل' },
            { en: 'closing the app', ar: 'إغلاق التطبيق' },
          ],
        },
        tags: ['troubleshooting', 'questions'], d: 2, limit: 6,
      },
      {
        tmpl: 'Please check the {C}.', arTmpl: 'من فضلك تحقق من {C_ar}.',
        slots: {
          C: [
            { en: 'cable', ar: 'الكابل' }, { en: 'charger', ar: 'الشاحن' },
            { en: 'battery', ar: 'البطارية' }, { en: 'settings', ar: 'الإعدادات' },
            { en: 'connection', ar: 'الاتصال' }, { en: 'wifi signal', ar: 'إشارة الشبكة' },
          ],
        },
        tags: ['troubleshooting', 'imperative'], d: 1, limit: 6,
      },
      {
        tmpl: 'If {C}, {F}.', arTmpl: 'إذا {C_ar}، ف{F_ar}.',
        slots: {
          C: [
            { en: 'the screen is frozen', ar: 'كانت الشاشة متجمدة' },
            { en: 'the internet is slow', ar: 'كان الإنترنت بطيئا' },
            { en: 'the app crashes', ar: 'انهار التطبيق' },
            { en: 'the sound stops', ar: 'توقف الصوت' },
          ],
          F: [
            { en: 'restart the device', ar: 'أعد تشغيل الجهاز' },
            { en: 'update the system', ar: 'حدّث النظام' },
            { en: 'check the cable', ar: 'تحقق من الكابل' },
            { en: 'wait a minute and try again', ar: 'انتظر دقيقة وحاول مرة أخرى' },
          ],
        },
        tags: ['troubleshooting', 'conditional'], d: 3, limit: 16,
      },
    ],
    fills: [
      { en: 'The cable is behind the desk.', ar: 'الكابل خلف المكتب.', word: 'cable' },
      { en: 'I will update the system tonight.', ar: 'سأحدّث النظام الليلة.', word: 'update' },
      { en: 'Restart the router and wait a minute.', ar: 'أعد تشغيل الراوتر وانتظر دقيقة.', word: 'router', hint: 'جهاز الشبكة' },
      { en: 'It still does not work.', ar: 'لا يزال لا يعمل.', word: 'still', hint: 'لا يزال' },
      { en: 'The screen is frozen again.', ar: 'الشاشة متجمدة من جديد.', word: 'frozen', hint: 'لا يستجيب' },
      { en: 'The battery needs charging again.', ar: 'تحتاج البطارية إلى شحن مرة أخرى.', word: 'battery' },
      { en: 'Does the mouse work on your computer?', ar: 'هل تعمل الفأرة على حاسوبك؟', word: 'mouse' },
      { en: 'The connection drops every evening.', ar: 'ينقطع الاتصال كل مساء.', word: 'connection' },
    ],
    orders: [
      { en: 'Please check the cable first.', ar: 'من فضلك تحقق من الكابل أولا.' },
      { en: 'My computer is very slow this morning.', ar: 'حاسوبي بطيء جدا هذا الصباح.' },
      { en: 'Restart the router and count to ten.', ar: 'أعد تشغيل الراوتر وعد إلى عشرة.' },
      { en: 'Did you update the system last week?', ar: 'هل حدّثت النظام الأسبوع الماضي؟' },
      { en: 'The problem continues after two restarts.', ar: 'تستمر المشكلة بعد إعادتي تشغيل.' },
      { en: 'If the sound stops, check the settings.', ar: 'إذا توقف الصوت فتحقق من الإعدادات.' },
    ],
    mc: [
      { question: 'The internet is slow at home. What should you restart?', options: ['The router', 'The fridge', 'The car', 'The television'], answerIndex: 0, ar: 'الإنترنت بطيء في البيت. ماذا تعيد تشغيله؟' },
      { question: 'Your screen is frozen. First you should:', options: ['Turn it off and on again', 'Buy a new house', 'Delete all your files', 'Call the police'], answerIndex: 0, ar: 'شاشتك متجمدة. ماذا تفعل أولا؟' },
      { question: '"It still does not work" means:', options: ['المشكلة مستمرة', 'المشكلة انتهت', 'الجهاز جديد', 'الجهاز سريع'], answerIndex: 0, ar: 'ما معنى It still does not work؟' },
      { question: 'What fixes many device problems?', options: ['A system update', 'A longer cable', 'A new mouse', 'A bigger screen'], answerIndex: 0, ar: 'ما الذي يصلح كثيرا من مشكلات الأجهزة؟' },
      { question: 'You cannot connect to the wifi. Ask a colleague politely:', options: ['Could you check the router, please?', 'Fix it now or else.', 'I never need help.', 'The wifi is your problem.'], answerIndex: 0, ar: 'لا تستطيع الاتصال بالشبكة. كيف تسأل زميلك بأدب؟' },
    ],
  },

  /* ================= lesson 218 — Using AI Tools ================= */
  {
    num: 218,
    tags: ['ai-tools', 'digital-skills'],
    objectives: [
      'Talk about AI tools and what they can do',
      'Write clear prompts and check the answers',
      'Use AI to draft and improve your writing safely',
    ],
    grammar: {
      explanation: 'AI tools like chatbots can write, translate and explain, but they are not perfect. Write a clear prompt: say what you want, for whom, and in how many words. Then always check the answer, because AI makes mistakes and can sound wrong or invented. Use it to draft an email or to get ideas, then edit the text with your own words. Never share private information, like your password, with a chatbot.',
      explanationAr: 'أدوات الذكاء الاصطناعي مثل روبوتات المحادثة تكتب وتترجم وتشرح، لكنها ليست مثالية. اكتب توجيها واضحا: قل ماذا تريد ولمن وبكم كلمة. ثم تحقق دائما من الجواب، لأن الذكاء الاصطناعي يخطئ وقد يكون رده خاطئا أو مختلقا. استخدمه لصياغة بريد إلكتروني أو لأخذ أفكار، ثم حرر النص بكلماتك أنت. ولا تشارك أبدا معلومات خاصة مثل كلمة المرور مع روبوت المحادثة.',
      examples: [
        { en: 'Write a clear prompt with details.', ar: 'اكتب توجيها واضحا مع التفاصيل.' },
        { en: 'The answer looks wrong, so check it.', ar: 'يبدو الجواب خاطئا، لذا تحقق منه.' },
        { en: 'Can you help me draft an email?', ar: 'هل يمكنك مساعدتي في صياغة بريد إلكتروني؟' },
      ],
    },
    vocabulary: [
      { word: 'artificial intelligence', meaningAr: 'الذكاء الاصطناعي', example: 'Artificial intelligence learns from data.' },
      { word: 'chatbot', meaningAr: 'روبوت محادثة', example: 'I ask the chatbot quick questions.' },
      { word: 'prompt', meaningAr: 'توجيه مكتوب', example: 'A good prompt gives clear details.' },
      { word: 'answer', meaningAr: 'جواب', example: 'Check the answer before you use it.' },
      { word: 'mistake', meaningAr: 'خطأ', example: 'It makes mistakes sometimes.' },
      { word: 'draft', meaningAr: 'مسودة / يصوغ', example: 'Help me draft a reply.' },
      { word: 'translate', meaningAr: 'يترجم', example: 'It can translate this page.' },
      { word: 'summarize', meaningAr: 'يلخص', example: 'Summarize the article in five lines.' },
      { word: 'tool', meaningAr: 'أداة', example: 'This tool saves me time.' },
      { word: 'generate', meaningAr: 'يولّد / ينشئ', example: 'It can generate new ideas.' },
      { word: 'idea', meaningAr: 'فكرة', example: 'The chatbot gave me a good idea.' },
      { word: 'check', meaningAr: 'يتحقق / يراجع', example: 'Always check the facts yourself.' },
    ],
    scenario: [
      { en: 'I use AI tools to study English.', ar: 'أستخدم أدوات الذكاء الاصطناعي لدراسة الإنجليزية.', d: 1 },
      { en: 'What can this chatbot do?', ar: 'ماذا يستطيع روبوت المحادثة هذا أن يفعل؟', d: 1 },
      { en: 'It can translate, summarize and explain.', ar: 'يستطيع الترجمة والتلخيص والشرح.', d: 1 },
      { en: 'Write a prompt with clear details.', ar: 'اكتب توجيها واضحا مع تفاصيل دقيقة.', d: 1 },
      { en: 'For example: write a short email to my teacher.', ar: 'مثلا: اكتب بريدا قصيرا إلى معلمي.', d: 2 },
      { en: 'The first answer made mistakes.', ar: 'كان في الجواب الأول أخطاء.', d: 2 },
      { en: 'So I asked the same question again.', ar: 'لذلك سألت السؤال نفسه مرة أخرى.', d: 2 },
      { en: 'Always check the answer before you send it.', ar: 'تحقق دائما من الجواب قبل أن ترسله.', d: 1 },
      { en: 'Can you help me draft an email?', ar: 'هل يمكنك مساعدتي في صياغة بريد إلكتروني؟', d: 1 },
      { en: 'Sure, the chatbot can give us a first draft.', ar: 'بالتأكيد، يستطيع روبوت المحادثة أن يعطينا مسودة أولى.', d: 2 },
      { en: 'AI does not replace your own thinking.', ar: 'الذكاء الاصطناعي لا يحل محل تفكيرك الخاص.', d: 2 },
      { en: 'Students should not copy the answers.', ar: 'يجب ألا ينسخ الطلاب الأجوبة.', d: 2 },
      { en: 'This tool generated three ideas for my project.', ar: 'ولّدت هذه الأداة ثلاث أفكار لمشروعي.', d: 2 },
      { en: 'The summary was too long, so I shortened it.', ar: 'كان الملخص طويلا جدا، لذلك اختصرته.', d: 3 },
      { en: 'Does the chatbot understand Arabic well?', ar: 'هل يفهم روبوت المحادثة العربية جيدا؟', d: 2 },
      { en: 'Sometimes, but I write my prompts in English.', ar: 'أحيانا، لكنني أكتب توجيهاتي بالإنجليزية.', d: 2 },
      { en: 'Never share your password with a chatbot.', ar: 'لا تشارك كلمة المرور أبدا مع روبوت المحادثة.', d: 2 },
      { en: 'We use AI to practice conversations at home.', ar: 'نستخدم الذكاء الاصطناعي للتدرب على المحادثات في البيت.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I asked the chatbot to {V}.', arTmpl: 'طلبت من روبوت المحادثة أن {V_ar}.',
        slots: {
          V: [
            { en: 'write an email', ar: 'يكتب بريدا إلكترونيا' },
            { en: 'translate this paragraph', ar: 'يترجم هذه الفقرة' },
            { en: 'summarize the article', ar: 'يلخص المقال' },
            { en: 'explain the grammar rule', ar: 'يشرح القاعدة النحوية' },
            { en: 'fix my grammar', ar: 'يصحح أخطائي النحوية' },
            { en: 'give me study ideas', ar: 'يعطيني أفكارا للدراسة' },
          ],
        },
        tags: ['ai-tools', 'past-simple'], d: 2, limit: 6,
      },
      {
        tmpl: 'It makes mistakes, so {A}.', arTmpl: 'إنه يخطئ، لذلك {A_ar}.',
        slots: {
          A: [
            { en: 'check the answer', ar: 'تحقق من الجواب' },
            { en: 'read it again', ar: 'اقرأه مرة أخرى' },
            { en: 'compare two answers', ar: 'قارن بين جوابين' },
            { en: 'do not trust it fully', ar: 'لا تثق به تماما' },
            { en: 'ask your teacher too', ar: 'اسأل معلمك أيضا' },
          ],
        },
        tags: ['ai-tools', 'advice'], d: 2, limit: 5,
      },
      {
        tmpl: 'Can you help me draft {N}?', arTmpl: 'هل يمكنك مساعدتي في صياغة {N_ar}؟',
        slots: {
          N: [
            { en: 'an email to my teacher', ar: 'بريد إلكتروني إلى معلمي' },
            { en: 'a short report', ar: 'تقرير قصير' },
            { en: 'a message to the team', ar: 'رسالة إلى الفريق' },
            { en: 'a reply to the customer', ar: 'رد على الزبون' },
          ],
        },
        tags: ['ai-tools', 'requests'], d: 1, limit: 4,
      },
      {
        tmpl: '{S} {U} to {V}.', arTmpl: '{S_ar} {U_ar} لكي {V_ar}.',
        slots: {
          S: [
            { en: 'My brother', ar: 'أخي', g: 'm' }, { en: 'My sister', ar: 'أختي', g: 'f' },
            { en: 'The teacher', ar: 'المعلم', g: 'm' }, { en: 'The engineer', ar: 'المهندسة', g: 'f' },
            { en: 'My cousin', ar: 'ابن عمي', g: 'm' }, { en: 'My aunt', ar: 'عمتي', g: 'f' },
          ],
          U: (x) => [{ en: 'uses AI', ar: x.S.g === 'f' ? 'تستخدم الذكاء الاصطناعي' : 'يستخدم الذكاء الاصطناعي' }],
          V: (x) => [
            { en: 'study new words', ar: x.S.g === 'f' ? 'تدرس كلمات جديدة' : 'يدرس كلمات جديدة' },
            { en: 'write reports', ar: x.S.g === 'f' ? 'تكتب تقارير' : 'يكتب تقارير' },
            { en: 'plan lessons', ar: x.S.g === 'f' ? 'تخطط الدروس' : 'يخطط الدروس' },
            { en: 'translate documents', ar: x.S.g === 'f' ? 'تترجم المستندات' : 'يترجم المستندات' },
          ],
        },
        tags: ['ai-tools', 'present-simple'], d: 2, limit: 14,
      },
      {
        tmpl: 'Do not share {I} with a chatbot.', arTmpl: 'لا تشارك {I_ar} مع روبوت المحادثة.',
        slots: {
          I: [
            { en: 'your password', ar: 'كلمة المرور' },
            { en: 'personal photos', ar: 'الصور الشخصية' },
            { en: 'your home address', ar: 'عنوان منزلك' },
            { en: 'bank details', ar: 'بيانات البنك' },
          ],
        },
        tags: ['ai-tools', 'privacy'], d: 2, limit: 4,
      },
    ],
    fills: [
      { en: 'A good prompt gives clear details.', ar: 'التوجيه الجيد يعطي تفاصيل واضحة.', word: 'prompt', hint: 'توجيه للأداة' },
      { en: 'AI tools learn from data.', ar: 'تتعلم أدوات الذكاء الاصطناعي من البيانات.', word: 'data' },
      { en: 'It can summarize long reports quickly.', ar: 'يستطيع تلخيص التقارير الطويلة بسرعة.', word: 'summarize' },
      { en: 'Check the answer twice, please.', ar: 'تحقق من الجواب مرتين من فضلك.', word: 'Check' },
      { en: 'Help me draft a reply to the school.', ar: 'ساعدني في صياغة رد إلى المدرسة.', word: 'draft' },
      { en: 'It gave me a good idea for my project.', ar: 'أعطاني فكرة جيدة لمشروعي.', word: 'idea' },
      { en: 'Your password must stay private.', ar: 'يجب أن تبقى كلمة المرور سرية.', word: 'password' },
      { en: 'It can translate this page quickly.', ar: 'يستطيع ترجمة هذه الصفحة بسرعة.', word: 'translate' },
    ],
    orders: [
      { en: 'Write a clear prompt before you start.', ar: 'اكتب توجيها واضحا قبل أن تبدأ.' },
      { en: 'The chatbot can translate this paragraph.', ar: 'يستطيع روبوت المحادثة ترجمة هذه الفقرة.' },
      { en: 'Always check the facts yourself.', ar: 'تحقق دائما من الحقائق بنفسك.' },
      { en: 'It makes mistakes sometimes.', ar: 'إنه يخطئ أحيانا.' },
      { en: 'Do not copy the answer without thinking.', ar: 'لا تنسخ الجواب دون تفكير.' },
      { en: 'Our teacher uses AI tools in class.', ar: 'يستخدم معلمنا أدوات الذكاء الاصطناعي في الصف.' },
    ],
    mc: [
      { question: 'What should a good prompt include?', options: ['Clear details', 'A long password', 'Your home address', 'Ten emojis'], answerIndex: 0, ar: 'ماذا يجب أن يتضمن التوجيه الجيد؟' },
      { question: 'The chatbot answer looks wrong. You should:', options: ['Check it and ask again', 'Send it immediately', 'Delete your account', 'Turn off the wifi'], answerIndex: 0, ar: 'يبدو جواب روبوت المحادثة خاطئا. ماذا تفعل؟' },
      { question: '"Draft" means:', options: ['مسودة أولى', 'جواب نهائي', 'كلمة مرور', 'رسالة خطأ'], answerIndex: 0, ar: 'ما معنى Draft؟' },
      { question: 'Which information should never go in a chatbot?', options: ['Your password', 'A homework question', 'A recipe', 'A study plan'], answerIndex: 0, ar: 'أي معلومات لا يجب أن تشاركها مع روبوت المحادثة؟' },
      { question: 'AI tools are best used as:', options: ['A helper you check', 'A replacement for teachers', 'A source of passwords', 'A place to shop'], answerIndex: 0, ar: 'أفضل استخدام لأدوات الذكاء الاصطناعي هو:' },
    ],
  },

  /* ================= lesson 219 — Study Skills and Time Management ================= */
  {
    num: 219,
    tags: ['study-skills', 'time-management'],
    objectives: [
      'Make a simple study plan and follow it',
      'Use breaks and priorities to study better',
      'Talk about your study habits and deadlines',
    ],
    grammar: {
      explanation: 'To study well, make a plan first: write your subjects, your deadlines and the time you have. Do the hardest task first, when your mind is fresh. Take short breaks every thirty minutes, and review your notes every week so you remember more. Avoid last-minute studying the night before an exam. Use "I am going to" or "I will" for your plans, and if-clauses for study advice: "If you review every week, you will remember more."',
      explanationAr: 'للمذاكرة الجيدة اصنع خطة أولا: اكتب موادك ومواعيد التسليم والوقت المتاح لك. أنجز المهمة الأصعب أولا والعقل متيقظ. خذ استراحات قصيرة كل ثلاثين دقيقة، وراجع ملاحظاتك كل أسبوع لتتذكر أكثر. وتجنب المذاكرة في اللحظة الأخيرة ليلة الامتحان. استخدم I am going to أو I will للخطط، وجمل الشرط للنصيحة الدراسية: If you review every week, you will remember more.',
      examples: [
        { en: 'I made a study plan for the week.', ar: 'وضعت خطة دراسة للأسبوع.' },
        { en: 'Start with the hardest task.', ar: 'ابدأ بالمهمة الأصعب.' },
        { en: 'Take short breaks between lessons.', ar: 'خذ استراحات قصيرة بين الدروس.' },
      ],
    },
    vocabulary: [
      { word: 'plan', meaningAr: 'خطة / يخطط', example: 'My study plan is on the wall.' },
      { word: 'schedule', meaningAr: 'جدول', example: 'Check the schedule every Sunday.' },
      { word: 'deadline', meaningAr: 'موعد نهائي', example: 'The deadline is on Thursday.' },
      { word: 'break', meaningAr: 'استراحة', example: 'A short break refreshes the mind.' },
      { word: 'review', meaningAr: 'يراجع / مراجعة', example: 'Review your notes every week.' },
      { word: 'notes', meaningAr: 'ملاحظات', example: 'My notes help me before exams.' },
      { word: 'focus', meaningAr: 'تركيز / يركز', example: 'Silence helps me focus.' },
      { word: 'distraction', meaningAr: 'مشتت', example: 'The phone is my biggest distraction.' },
      { word: 'prioritize', meaningAr: 'يرتب الأولويات', example: 'Prioritize the important tasks.' },
      { word: 'avoid', meaningAr: 'يتجنب', example: 'Avoid studying late at night.' },
      { word: 'habit', meaningAr: 'عادة', example: 'Studying daily is a good habit.' },
      { word: 'goal', meaningAr: 'هدف', example: 'My goal is to pass the course.' },
    ],
    scenario: [
      { en: 'I made a study plan for this week.', ar: 'وضعت خطة دراسة لهذا الأسبوع.', d: 1 },
      { en: 'When do you study best?', ar: 'متى تكون مذاكرتك أفضل؟', d: 1 },
      { en: 'In the morning, before work.', ar: 'في الصباح قبل العمل.', d: 1 },
      { en: 'Do the hardest task first.', ar: 'أنجز المهمة الأصعب أولا.', d: 1 },
      { en: 'Short breaks keep your mind fresh.', ar: 'الاستراحات القصيرة تجدد نشاط عقلك.', d: 1 },
      { en: 'My phone is a big distraction.', ar: 'هاتفي من أكبر المشتتات.', d: 2 },
      { en: 'Put it in another room while you study.', ar: 'ضعه في غرفة أخرى أثناء المذاكرة.', d: 2 },
      { en: 'We review our notes every Friday.', ar: 'نراجع ملاحظاتنا كل جمعة.', d: 2 },
      { en: 'The deadline for the essay is Sunday.', ar: 'الموعد النهائي للمقال هو الأحد.', d: 2 },
      { en: 'I will not study at the last minute again.', ar: 'لن أذاكر في اللحظة الأخيرة مرة أخرى.', d: 2 },
      { en: 'Last night I stayed up until two.', ar: 'الليلة الماضية سهرت حتى الثانية.', d: 2 },
      { en: 'If you plan your week, you will feel calmer.', ar: 'إذا خططت أسبوعك فستشعر بهدوء أكبر.', d: 3 },
      { en: 'Does the library open at eight?', ar: 'هل تفتح المكتبة في الثامنة؟', d: 1 },
      { en: 'Yes, and it is quiet there.', ar: 'نعم، والمكان هادئ هناك.', d: 1 },
      { en: 'Avoid last-minute studying before exams.', ar: 'تجنب المذاكرة في اللحظة الأخيرة قبل الامتحانات.', d: 2 },
      { en: 'How many hours do you study every day?', ar: 'كم ساعة تذاكر كل يوم؟', d: 1 },
      { en: 'About two, with short breaks.', ar: 'حوالي ساعتين مع استراحات قصيرة.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I study {S} for {N} minutes every evening.', arTmpl: 'أدرس {S_ar} لمدة {N_ar} دقيقة كل مساء.',
        slots: {
          S: [
            { en: 'English', ar: 'الإنجليزية' }, { en: 'the new words', ar: 'الكلمات الجديدة' },
            { en: 'grammar', ar: 'القواعد' }, { en: 'the history lesson', ar: 'درس التاريخ' },
          ],
          N: [
            { en: 'twenty', ar: 'عشرين' }, { en: 'thirty', ar: 'ثلاثين' },
            { en: 'forty-five', ar: 'خمس وأربعين' }, { en: 'sixty', ar: 'ستين' },
          ],
        },
        tags: ['study-skills', 'time'], d: 1, limit: 16,
      },
      {
        tmpl: 'Take a short break every {N} minutes.', arTmpl: 'خذ استراحة قصيرة كل {N_ar} دقيقة.',
        slots: {
          N: [
            { en: 'twenty', ar: 'عشرين' }, { en: 'thirty', ar: 'ثلاثين' },
            { en: 'forty', ar: 'أربعين' }, { en: 'fifty', ar: 'خمسين' },
          ],
        },
        tags: ['study-skills', 'imperative'], d: 1, limit: 4,
      },
      {
        tmpl: 'If you {C}, you will remember more.', arTmpl: 'إذا {C_ar}، فستتذكر أكثر.',
        slots: {
          C: [
            { en: 'review your notes weekly', ar: 'راجعت ملاحظاتك أسبوعيا' },
            { en: 'teach the lesson to a friend', ar: 'علّمت الدرس لصديق' },
            { en: 'sleep well before the exam', ar: 'نمت جيدا قبل الامتحان' },
            { en: 'write the new words down', ar: 'كتبت الكلمات الجديدة' },
          ],
        },
        tags: ['study-skills', 'conditional'], d: 3, limit: 4,
      },
      {
        tmpl: 'Do the {ADJ} task first.', arTmpl: 'أنجز المهمة {ADJ_ar} أولا.',
        slots: {
          ADJ: [
            { en: 'hardest', ar: 'الأصعب' }, { en: 'longest', ar: 'الأطول' },
            { en: 'most boring', ar: 'الأممل' }, { en: 'most important', ar: 'الأهم' },
          ],
        },
        tags: ['study-skills', 'priorities'], d: 1, limit: 4,
      },
      {
        tmpl: 'Avoid {D} when you study.', arTmpl: 'تجنب {D_ar} أثناء المذاكرة.',
        slots: {
          D: [
            { en: 'last-minute studying', ar: 'المذاكرة في اللحظة الأخيرة' },
            { en: 'phone notifications', ar: 'إشعارات الهاتف' },
            { en: 'loud music', ar: 'الموسيقى المرتفعة' },
            { en: 'studying in bed', ar: 'المذاكرة في السرير' },
          ],
        },
        tags: ['study-skills', 'advice'], d: 2, limit: 4,
      },
      {
        tmpl: '{D} {H}.', arTmpl: '{D_ar} {H_ar}.',
        slots: {
          D: [
            { en: 'A quiet room', ar: 'غرفة هادئة', g: 'f' },
            { en: 'Good sleep', ar: 'النوم الجيد', g: 'm' },
            { en: 'Clear goals', ar: 'أهداف واضحة', g: 'f' },
            { en: 'A clean desk', ar: 'مكتب مرتب', g: 'm' },
          ],
          H: (x) => [{ en: 'helps me focus', ar: x.D.g === 'f' ? 'تساعدني على التركيز' : 'يساعدني على التركيز' }],
        },
        tags: ['study-skills', 'focus'], d: 2, limit: 4,
      },
    ],
    fills: [
      { en: 'Write the plan where you can see it.', ar: 'اكتب الخطة حيث تراها.', word: 'plan' },
      { en: 'The hardest task took one hour.', ar: 'استغرقت المهمة الأصعب ساعة واحدة.', word: 'hardest' },
      { en: 'The deadline is getting closer.', ar: 'الموعد النهائي يقترب.', word: 'deadline' },
      { en: 'The television is my main distraction.', ar: 'التلفاز هو أكبر مشتتاتي.', word: 'distraction' },
      { en: 'I review the vocabulary every morning.', ar: 'أراجع المفردات كل صباح.', word: 'review' },
      { en: 'A weekly plan keeps me calm.', ar: 'الخطة الأسبوعية تجعلني هادئا.', word: 'weekly' },
      { en: 'Studying daily is a good habit.', ar: 'المذاكرة اليومية عادة جيدة.', word: 'habit' },
      { en: 'Silence helps me focus.', ar: 'الهدوء يساعدني على التركيز.', word: 'focus' },
    ],
    orders: [
      { en: 'My study plan is on the wall.', ar: 'خطة دراسي معلقة على الحائط.' },
      { en: 'Plan your week on Sunday evening.', ar: 'خطط أسبوعك مساء الأحد.' },
      { en: 'I take short breaks between lessons.', ar: 'أخذ استراحات قصيرة بين الدروس.' },
      { en: 'The deadline is on Thursday morning.', ar: 'الموعد النهائي صباح الخميس.' },
      { en: 'Never study at the last minute.', ar: 'لا تذاكر أبدا في اللحظة الأخيرة.' },
      { en: 'Review your notes every week.', ar: 'راجع ملاحظاتك كل أسبوع.' },
    ],
    mc: [
      { question: 'What should you do first when you study?', options: ['The hardest task', 'The easiest task', 'Nothing at all', 'Watch a film'], answerIndex: 0, ar: 'ماذا تنجز أولا عند المذاكرة؟' },
      { question: 'How often should you review your notes?', options: ['Every week', 'Once a year', 'Never', 'Only during the exam'], answerIndex: 0, ar: 'كم مرة تراجع ملاحظاتك؟' },
      { question: 'A good study break is:', options: ['Short and regular', 'Ten hours long', 'Full of social media', 'During the exam'], answerIndex: 0, ar: 'الاستراحة الدراسية الجيدة تكون:' },
      { question: '"Last-minute studying" means:', options: ['الدراسة قبل الموعد بوقت قصير', 'الدراسة كل يوم', 'وضع خطة أسبوعية', 'المراجعة المبكرة'], answerIndex: 0, ar: 'ما معنى Last-minute studying؟' },
      { question: 'Which sentence gives study advice?', options: ['If you plan your week, you will feel calmer.', 'The library is old.', 'I lost my pen.', 'The exam was hard.'], answerIndex: 0, ar: 'أي جملة تقدم نصيحة دراسية؟' },
    ],
  },

  /* ================= lesson 220 — Education and Digital Skills Review ================= */
  {
    num: 220,
    tags: ['review', 'education-digital'],
    objectives: [
      'Recycle school and digital vocabulary from lessons 196 to 219',
      'Combine learning goals with technology talk',
      'Use advice, plans and present perfect in review',
    ],
    grammar: {
      explanation: 'This review brings Section 9 together. You talk about school and online learning ("I have already submitted my essay"), devices and fixes ("Restart the device and try again"), safety online ("Never share your password with anyone"), and study habits ("Start with the hardest task"). Use present perfect for finished actions with a present result, will or going to for plans, and if-clauses for advice. Keep your sentences short and clear.',
      explanationAr: 'يجمع هذا الدرس القسم التاسع كاملا: الحديث عن المدرسة والتعلم عبر الإنترنت (I have already submitted my essay)، والأجهزة وإصلاحها (Restart the device and try again)، والسلامة على الإنترنت (Never share your password with anyone)، وعادات المذاكرة (Start with the hardest task). استخدم المضارع التام لأفعال تمت ولها نتيجة الآن، وwill أو going to للخطط، وجمل الشرط للنصيحة، وحافظ على جمل قصيرة واضحة.',
      examples: [
        { en: 'I have already submitted my essay.', ar: 'لقد سلمت مقالي بالفعل.' },
        { en: 'Restart the device and try again.', ar: 'أعد تشغيل الجهاز وحاول مرة أخرى.' },
        { en: 'Never share your password with anyone.', ar: 'لا تشارك كلمة المرور مع أحد أبدا.' },
      ],
    },
    vocabulary: [
      { word: 'degree', meaningAr: 'شهادة جامعية', example: 'She finished her degree last year.' },
      { word: 'semester', meaningAr: 'فصل دراسي', example: 'This semester ends in May.' },
      { word: 'essay', meaningAr: 'مقال', example: 'My essay is about the environment.' },
      { word: 'research', meaningAr: 'بحث', example: 'The research took two weeks.' },
      { word: 'quiz', meaningAr: 'اختبار قصير', example: 'The quiz has ten questions.' },
      { word: 'device', meaningAr: 'جهاز', example: 'The device works well now.' },
      { word: 'connection', meaningAr: 'اتصال', example: 'The connection is stable today.' },
      { word: 'privacy', meaningAr: 'خصوصية', example: 'Privacy settings protect your photos.' },
      { word: 'scam', meaningAr: 'احتيال', example: 'That email looks like a scam.' },
      { word: 'app', meaningAr: 'تطبيق', example: 'This app teaches new words daily.' },
      { word: 'knowledge', meaningAr: 'معرفة', example: 'Online courses spread knowledge.' },
      { word: 'progress', meaningAr: 'تقدم', example: 'I check my progress every month.' },
    ],
    scenario: [
      { en: 'The new semester starts next week.', ar: 'يبدأ الفصل الدراسي الجديد الأسبوع القادم.', d: 1 },
      { en: 'I have already bought the books.', ar: 'لقد اشتريت الكتب بالفعل.', d: 2 },
      { en: 'Which course are you taking this semester?', ar: 'أي دورة تدرس هذا الفصل؟', d: 2 },
      { en: 'An online course about digital skills.', ar: 'دورة عبر الإنترنت عن المهارات الرقمية.', d: 1 },
      { en: 'The teacher asked us to write an essay.', ar: 'طلب منا المعلم كتابة مقال.', d: 2 },
      { en: 'Have you finished your research yet?', ar: 'هل أنهيت بحثك بعد؟', d: 2 },
      { en: 'Not yet, I need two more days.', ar: 'ليس بعد، أحتاج يومين إضافيين.', d: 2 },
      { en: 'The library closes at nine tonight.', ar: 'تغلق المكتبة في التاسعة الليلة.', d: 1 },
      { en: 'This device needs a system update.', ar: 'يحتاج هذا الجهاز إلى تحديث للنظام.', d: 2 },
      { en: 'If the connection is slow, restart the router.', ar: 'إذا كان الاتصال بطيئا فأعد تشغيل الراوتر.', d: 3 },
      { en: 'My password is strong and private.', ar: 'كلمة المرور الخاصة بي قوية وسرية.', d: 1 },
      { en: 'That email promising money is a scam.', ar: 'تلك الرسالة التي تعدك بالمال احتيال.', d: 2 },
      { en: 'Do not open links from unknown senders.', ar: 'لا تفتح روابط من مرسلين مجهولين.', d: 2 },
      { en: 'Could you share the file during the video call?', ar: 'هل يمكنك مشاركة الملف أثناء مكالمة الفيديو؟', d: 2 },
      { en: 'Of course, I will send it now.', ar: 'بالتأكيد، سأرسله الآن.', d: 1 },
      { en: 'We pay the university fees online.', ar: 'ندفع رسوم الجامعة عبر الإنترنت.', d: 2 },
      { en: 'Check the reviews before you buy online.', ar: 'تحقق من التقييمات قبل أن تشتري عبر الإنترنت.', d: 2 },
      { en: 'I limited my screen time this month.', ar: 'قللت وقت الشاشة هذا الشهر.', d: 2 },
      { en: 'Start with the hardest task, then rest.', ar: 'ابدأ بالمهمة الأصعب ثم ارتح.', d: 2 },
      { en: 'How do you remember new words?', ar: 'كيف تتذكر الكلمات الجديدة؟', d: 1 },
      { en: 'I write them on cards and review weekly.', ar: 'أكتبها على بطاقات وأراجعها أسبوعيا.', d: 2 },
      { en: 'Good manners matter in online classes too.', ar: 'الأدب مهم أيضا في الصفوف عبر الإنترنت.', d: 2 },
    ],
    patterns: [
      {
        tmpl: '{S} has just {V} {O}.', arTmpl: '{S_ar} {V_ar} {O_ar} للتو.',
        slots: {
          S: B.PEOPLE_SING,
          V: (x) => [{ en: B.enPP('finish'), ar: B.arPast('finish', x.S.agr) }],
          O: [
            { en: 'the exam', ar: 'الامتحان' }, { en: 'the online course', ar: 'الدورة عبر الإنترنت' },
            { en: 'the essay', ar: 'المقال' }, { en: 'the research', ar: 'البحث' },
          ],
        },
        tags: ['review', 'present-perfect'], d: 2, limit: 12,
      },
      {
        tmpl: 'If you forget your {A}, {R}.', arTmpl: 'إذا نسيت {A_ar}، {R_ar}.',
        slots: {
          A: [
            { en: 'password', ar: 'كلمة المرور', pr: 'ها' },
            { en: 'PIN code', ar: 'رمز الحماية', pr: 'ه' },
            { en: 'username', ar: 'اسم المستخدم', pr: 'ه' },
            { en: 'recovery email', ar: 'بريد الاستعادة', pr: 'ه' },
          ],
          R: (x) => [{ en: 'you can reset it', ar: `يمكنك إعادة تعيين${x.A.pr}` }],
        },
        tags: ['review', 'conditional'], d: 3, limit: 4,
      },
      {
        tmpl: 'Could you {F} during the video call, please?', arTmpl: 'هل يمكنك {F_ar} أثناء مكالمة الفيديو من فضلك؟',
        slots: {
          F: [
            { en: 'share your screen', ar: 'مشاركة شاشتك' },
            { en: 'turn on your camera', ar: 'تشغيل الكاميرا' },
            { en: 'mute your microphone', ar: 'كتم الميكروفون' },
            { en: 'send the link again', ar: 'إرسال الرابط مرة أخرى' },
          ],
        },
        tags: ['review', 'requests'], d: 2, limit: 4,
      },
      {
        tmpl: 'I use {A} to {V}.', arTmpl: 'أستخدم {A_ar} لكي {V_ar}.',
        slots: {
          A: [
            { en: 'this app', ar: 'هذا التطبيق' },
            { en: 'the library website', ar: 'موقع المكتبة' },
            { en: 'online banking', ar: 'الخدمات المصرفية عبر الإنترنت' },
            { en: 'a study planner', ar: 'منظم الدراسة' },
          ],
          V: [
            { en: 'learn new words', ar: 'أتعلم كلمات جديدة' },
            { en: 'pay the fees', ar: 'أدفع الرسوم' },
            { en: 'borrow books', ar: 'أستعير الكتب' },
            { en: 'plan my week', ar: 'أنظم أسبوعي' },
          ],
        },
        tags: ['review', 'digital-tools'], d: 1, limit: 12,
      },
      {
        tmpl: '{D} makes online learning easier.', arTmpl: '{D_ar} {W_ar} التعلم عبر الإنترنت أسهل.',
        slots: {
          D: [
            { en: 'A fast connection', ar: 'الاتصال السريع', g: 'm' },
            { en: 'A quiet room', ar: 'غرفة هادئة', g: 'f' },
            { en: 'Good notes', ar: 'ملاحظات جيدة', g: 'f' },
            { en: 'Short videos', ar: 'مقاطع فيديو قصيرة', g: 'f' },
          ],
          W: (x) => [{ en: '', ar: x.D.g === 'f' ? 'تجعل' : 'يجعل' }],
        },
        tags: ['review', 'online-learning'], d: 2, limit: 4,
      },
      {
        tmpl: 'Before you pay online, {C}.', arTmpl: 'قبل أن تدفع عبر الإنترنت، {C_ar}.',
        slots: {
          C: [
            { en: 'check the padlock icon', ar: 'تحقق من أيقونة القفل' },
            { en: 'compare the prices', ar: 'قارن الأسعار' },
            { en: 'use a strong password', ar: 'استخدم كلمة مرور قوية' },
            { en: 'read the refund policy', ar: 'اقرأ سياسة الاسترجاع' },
          ],
        },
        tags: ['review', 'safe-shopping'], d: 3, limit: 4,
      },
    ],
    fills: [
      { en: 'This semester ends in May.', ar: 'ينتهي هذا الفصل الدراسي في مايو.', word: 'semester' },
      { en: 'My essay is about the environment.', ar: 'مقالي عن البيئة.', word: 'essay' },
      { en: 'Privacy settings protect your photos.', ar: 'إعدادات الخصوصية تحمي صورك.', word: 'Privacy' },
      { en: 'This app teaches new words daily.', ar: 'يعلمك هذا التطبيق كلمات جديدة يوميا.', word: 'app' },
      { en: 'She finished her degree last year.', ar: 'أنهت دراستها الجامعية العام الماضي.', word: 'degree' },
      { en: 'The quiz has ten questions.', ar: 'يتضمن الاختبار القصير عشرة أسئلة.', word: 'quiz' },
      { en: 'Online courses spread knowledge.', ar: 'الدورات عبر الإنترنت تنشر المعرفة.', word: 'knowledge' },
      { en: 'I check my progress every month.', ar: 'أتحقق من تقدمي كل شهر.', word: 'progress' },
      { en: 'Download the worksheet before tomorrow morning.', ar: 'نزّل ورقة العمل قبل صباح الغد.', word: 'Download', hint: 'نزل' },
      { en: 'I finished my assignment two days early.', ar: 'أنجزت واجبي قبل موعدي بيومين.', word: 'assignment', hint: 'واجب' },
    ],
    orders: [
      { en: 'I need two more days for the research.', ar: 'أحتاج يومين إضافيين للبحث.' },
      { en: 'Restart the device and check the settings.', ar: 'أعد تشغيل الجهاز وتحقق من الإعدادات.' },
      { en: 'Read the reviews before you pay online.', ar: 'اقرأ التقييمات قبل أن تدفع عبر الإنترنت.' },
      { en: 'First plan your week, then study calmly.', ar: 'خطط أسبوعك أولا ثم اذاكر بهدوء.' },
      { en: 'Please mute your microphone in class.', ar: 'من فضلك اكتم الميكروفون في الصف.' },
      { en: 'I write the new words on cards.', ar: 'أكتب الكلمات الجديدة على بطاقات.' },
    ],
    mc: [
      { question: 'You cannot connect to the internet at home. First you:', options: ['Restart the router', 'Water the plants', 'Cook dinner', 'Paint the wall'], answerIndex: 0, ar: 'لا تستطيع الاتصال بالإنترنت في البيت. ماذا تفعل أولا؟' },
      { question: 'Which password is strongest?', options: ['T7x!qLm9', '1234', 'your name', 'password'], answerIndex: 0, ar: 'أي كلمة مرور أقوى؟' },
      { question: 'A stranger asks for your bank code by email. This is:', options: ['A scam', 'A gift', 'A homework task', 'A safe offer'], answerIndex: 0, ar: 'غريب يطلب رمزك المصرفي عبر البريد. هذا:' },
      { question: 'Which sentence talks about privacy?', options: ['Check your privacy settings today.', 'I like green apples.', 'The bus arrived late.', 'We ate lunch at one.'], answerIndex: 0, ar: 'أي جملة تتحدث عن الخصوصية؟' },
      { question: 'In a video call you cannot hear. Politely say:', options: ['Could you turn on your microphone, please?', 'Speak forever, I am fine.', 'I am leaving silently.', 'Type nothing and wait.'], answerIndex: 0, ar: 'في مكالمة الفيديو لا تسمع. ماذا تقول بأدب؟' },
    ],
  },
];
