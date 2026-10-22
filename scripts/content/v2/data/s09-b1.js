/* ============================================================
   v2 section data — s09-b1.js
   Education & Digital Skills · lessons 203–206
   (Writing an Essay · Digital Devices · Internet and Wi-Fi ·
    Passwords and Digital Security)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 203 — Writing an Essay ================= */
  {
    num: 203,
    tags: ['essay', 'writing'],
    objectives: [
      'Plan an essay with a clear structure',
      'Write an introduction, body paragraphs and a conclusion',
      'Proofread and improve your first draft',
    ],
    grammar: {
      explanation: 'An essay usually has three parts: the introduction, the body paragraphs, and the conclusion. The introduction states the main idea and tells the reader what to expect. Each body paragraph develops one idea with examples, and the conclusion summarizes your points and closes the text. Always plan an outline first, then write a first draft, and proofread it before you submit. After the draft, revise: check spelling, grammar and word choice.',
      explanationAr: 'يتكون المقال عادة من ثلاثة أجزاء: المقدمة والفقرات الأساسية والخاتمة. تعرض المقدمة الفكرة الرئيسة وتخبر القارئ بما سيأتي، وتطور كل فقرة أساسية فكرة واحدة مع أمثلة، وتلخص الخاتمة نقاطك وتغلق النص. ارسم مخططا أولا، ثم اكتب المسودة الأولى، ودققها قبل التسليم، وراجع الإملاء والقواعد واختيار الكلمات.',
      examples: [
        { en: 'The introduction tells the reader your main idea.', ar: 'تخبر المقدمة القارئ فكرتك الرئيسة.' },
        { en: 'Write a first draft, then proofread it.', ar: 'اكتب المسودة الأولى ثم دققها.' },
        { en: 'If your argument is clear, the essay is stronger.', ar: 'إذا كانت حجتك واضحة، كان المقال أقوى.' },
      ],
    },
    vocabulary: [
      { word: 'essay', meaningAr: 'مقال', example: 'Write an essay about your city.' },
      { word: 'introduction', meaningAr: 'مقدمة', example: 'The introduction states the main idea.' },
      { word: 'paragraph', meaningAr: 'فقرة', example: 'Each paragraph has one idea.' },
      { word: 'conclusion', meaningAr: 'خاتمة', example: 'The conclusion summarizes your points.' },
      { word: 'draft', meaningAr: 'مسودة', example: 'I finished my first draft.' },
      { word: 'proofread', meaningAr: 'يدقق إملائيا', example: 'Proofread your essay before you submit.' },
      { word: 'submit', meaningAr: 'يسلم / يقدم', example: 'Students must submit their essays by Friday.' },
      { word: 'outline', meaningAr: 'مخطط تفصيلي', example: 'Plan an outline before you write.' },
      { word: 'idea', meaningAr: 'فكرة', example: 'Each paragraph develops one idea.' },
      { word: 'example', meaningAr: 'مثال', example: 'A good example supports your argument.' },
      { word: 'revise', meaningAr: 'يراجع ويحسن', example: 'Revise your draft and fix the errors.' },
      { word: 'deadline', meaningAr: 'موعد التسليم', example: 'The deadline is on Friday.' },
    ],
    scenario: [
      { en: 'An essay has three main parts.', ar: 'يتكون المقال من ثلاثة أجزاء رئيسة.', d: 1 },
      { en: 'The introduction states the main idea.', ar: 'تعرض المقدمة الفكرة الرئيسة.', d: 1 },
      { en: 'Each body paragraph develops one idea.', ar: 'تطور كل فقرة أساسية فكرة واحدة.', d: 1 },
      { en: 'The conclusion summarizes your main points.', ar: 'تلخص الخاتمة نقاطك الرئيسة.', d: 1 },
      { en: 'You should plan an outline before you write.', ar: 'ينبغي أن ترسم مخططا قبل أن تكتب.', d: 2 },
      { en: 'I have finished my first draft today.', ar: 'لقد أنهيت مسودتي الأولى اليوم.', d: 2 },
      { en: 'I always proofread my essay before I submit it.', ar: 'أدقق مقالي دائما قبل أن أسلمه.', d: 2 },
      { en: 'If you forget the conclusion, the essay feels incomplete.', ar: 'إذا نسيت الخاتمة، يبدو المقال ناقصا.', d: 3 },
      { en: 'Have you chosen a topic yet?', ar: 'هل اخترت موضوعا بعد؟', d: 2 },
      { en: 'Yes, I have written the introduction already.', ar: 'نعم، لقد كتبت المقدمة بالفعل.', d: 2 },
      { en: 'The teacher wants at least three paragraphs.', ar: 'يريد المعلم ثلاث فقرات على الأقل.', d: 2 },
      { en: 'Do not write very long sentences.', ar: 'لا تكتب جملا طويلة جدا.', d: 2 },
      { en: 'Could you read my draft, please?', ar: 'هل تقرأ مسودتي من فضلك؟', d: 2 },
      { en: 'Of course, I will mark the mistakes.', ar: 'بالطبع، سأشير إلى الأخطاء.', d: 2 },
      { en: 'My ideas are clear, but my spelling is weak.', ar: 'أفكاري واضحة، لكن إملائي ضعيف.', d: 3 },
      { en: 'Students must submit their essays by Friday.', ar: 'على الطلاب تسلم مقالاتهم يوم الجمعة.', d: 2 },
      { en: 'If you revise the draft, you will find small errors.', ar: 'إذا راجعت المسودة، ستجد أخطاء صغيرة.', d: 3 },
      { en: 'A good example supports every argument.', ar: 'المثال الجيد يدعم كل حجة.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'The {PART} of my essay is {ADJ}.', arTmpl: '{PART_ar} مقالي {ADJ_ar}.',
        slots: {
          PART: [
            { en: 'introduction', ar: 'المقدمة' }, { en: 'conclusion', ar: 'الخاتمة' },
            { en: 'first paragraph', ar: 'الفقرة الأولى' }, { en: 'second paragraph', ar: 'الفقرة الثانية' },
          ],
          ADJ: [
            { en: 'clear', ar: 'واضحة' }, { en: 'short', ar: 'قصيرة' },
            { en: 'strong', ar: 'قوية' }, { en: 'long', ar: 'طويلة' },
          ],
        },
        tags: ['essay'], d: 1, limit: 16,
      },
      {
        tmpl: 'You should {V} your essay {T}.', arTmpl: 'ينبغي أن {V_ar} مقالك {T_ar}.',
        slots: {
          V: [
            { en: 'proofread', ar: 'تدقق' }, { en: 'revise', ar: 'تعيد صياغة' },
            { en: 'read', ar: 'تقرأ' }, { en: 'improve', ar: 'تحسّن' },
          ],
          T: [
            { en: 'before you submit it', ar: 'قبل أن تسلمه' }, { en: 'one more time', ar: 'مرة أخرى' },
            { en: 'after every draft', ar: 'بعد كل مسودة' }, { en: 'carefully', ar: 'بعناية' },
          ],
        },
        tags: ['essay', 'advice'], d: 2, limit: 12,
      },
      {
        tmpl: '{S} {FINISH} the first draft {T}.', arTmpl: '{S_ar} {FINISH_ar} المسودة الأولى {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          FINISH: (x) => [{ en: B.enPresent('finish', x.S.agr), ar: B.arPresent('finish', x.S.agr) }],
          T: [
            { en: 'today', ar: 'اليوم' }, { en: 'this week', ar: 'هذا الأسبوع' },
            { en: 'before the deadline', ar: 'قبل موعد التسليم' }, { en: 'on time', ar: 'في الوقت المحدد' },
          ],
        },
        tags: ['essay', 'present-simple'], d: 2, limit: 16,
      },
      {
        tmpl: 'If you {V} first, the essay will be easier.', arTmpl: 'إذا {V_ar} أولا، سيكون المقال أسهل.',
        slots: {
          V: [
            { en: 'plan an outline', ar: 'رسمت مخططا' }, { en: 'make notes', ar: 'دوّنت ملاحظات' },
            { en: 'choose a topic', ar: 'اخترت موضوعا' }, { en: 'read the question', ar: 'قرأت السؤال' },
          ],
        },
        tags: ['essay', 'conditional'], d: 3, limit: 4,
      },
    ],
    fills: [
      { en: 'The introduction states the main idea.', ar: 'تعرض المقدمة الفكرة الرئيسة.', word: 'introduction' },
      { en: 'You should proofread before you submit.', ar: 'ينبغي أن تدقق قبل أن تسلم.', word: 'proofread', hint: 'تدقيق' },
      { en: 'I have finished my first draft today.', ar: 'لقد أنهيت مسودتي الأولى اليوم.', word: 'draft' },
      { en: 'The conclusion summarizes your main points.', ar: 'تلخص الخاتمة نقاطك الرئيسة.', word: 'conclusion' },
      { en: 'Could you read my draft, please?', ar: 'هل تقرأ مسودتي من فضلك؟', word: 'please' },
      { en: 'Students must submit their essays by Friday.', ar: 'على الطلاب تسلم مقالاتهم يوم الجمعة.', word: 'submit' },
      { en: 'A good example supports every argument.', ar: 'المثال الجيد يدعم كل حجة.', word: 'example' },
      { en: 'Plan an outline before you write.', ar: 'ارسم مخططا قبل أن تكتب.', word: 'outline', hint: 'تنظيم' },
    ],
    orders: [
      { en: 'The introduction states the main idea.', ar: 'تعرض المقدمة الفكرة الرئيسة.' },
      { en: 'I have finished my first draft.', ar: 'لقد أنهيت مسودتي الأولى.' },
      { en: 'Students must submit their essays by Friday.', ar: 'على الطلاب تسلم مقالاتهم يوم الجمعة.' },
      { en: 'You should proofread before you submit.', ar: 'ينبغي أن تدقق قبل أن تسلم.' },
      { en: 'The conclusion summarizes your main points.', ar: 'تلخص الخاتمة نقاطك الرئيسة.' },
      { en: 'Plan an outline before you write.', ar: 'ارسم مخططا قبل أن تكتب.' },
    ],
    mc: [
      { question: 'How many main parts does a classic essay have?', options: ['three', 'one', 'seven', 'none'], answerIndex: 0, ar: 'كم جزءا رئيسا في المقال التقليدي؟' },
      { question: 'Which part comes first?', options: ['The introduction', 'The conclusion', 'The deadline', 'The grade'], answerIndex: 0, ar: 'أي جزء يأتي أولا؟' },
      { question: 'What should you do before you submit your essay?', options: ['Proofread it', 'Delete it', 'Forget it', 'Hide it'], answerIndex: 0, ar: 'ماذا ينبغي أن تفعل قبل تسليم مقالك؟' },
      { question: '"First draft" means:', options: ['المسودة الأولى', 'الخاتمة', 'الموضوع', 'الدرجة النهائية'], answerIndex: 0, ar: 'ما معنى First draft؟' },
      { question: 'If your spelling is weak, you should:', options: ['revise and check your draft', 'submit it faster', 'write longer sentences', 'ignore the mistakes'], answerIndex: 0, ar: 'إذا كان إملاؤك ضعيفا، ينبغي أن:' },
    ],
  },

  /* ================= lesson 204 — Digital Devices ================= */
  {
    num: 204,
    tags: ['devices', 'technology'],
    objectives: [
      'Name common digital devices and their parts',
      'Give polite instructions with turn on and turn off',
      'Describe device problems in the past and with will',
    ],
    grammar: {
      explanation: 'Digital devices need simple instructions and simple tenses. Use the imperative to tell someone what to do: "Turn on the tablet", "Charge the battery", "Turn off the music". Add "please" to be polite: "Please charge the battery tonight". For finished actions use the past simple: "I bought a new tablet yesterday", "Did you charge the laptop?". For future actions use will: "I will charge my phone before bed". Describe problems with be: "The screen is cracked", "The battery is low".',
      explanationAr: 'تحتاج الأجهزة الرقمية إلى تعليمات بسيطة وأزمنة بسيطة. استخدم صيغة الأمر لتقول ما ينبغي فعله: Turn on the tablet، Charge the battery، Turn off the music. وأضف please للتأدب: Please charge the battery tonight. وللأحداث المنتهية استخدم الماضي البسيط: I bought a new tablet yesterday، Did you charge the laptop؟ وللمستقبل استخدم will: I will charge my phone before bed. وصف المشكلات بفعل be: The screen is cracked، The battery is low.',
      examples: [
        { en: 'Charge the battery every night.', ar: 'اشحن البطارية كل ليلة.' },
        { en: 'He charged the phone an hour ago.', ar: 'شحن الهاتف قبل ساعة.' },
        { en: 'The battery is low.', ar: 'البطارية منخفضة.' },
      ],
    },
    vocabulary: [
      { word: 'tablet', meaningAr: 'جهاز لوحي', example: 'I bought a new tablet yesterday.' },
      { word: 'headphones', meaningAr: 'سماعات رأس', example: 'My headphones are very comfortable.' },
      { word: 'battery', meaningAr: 'بطارية', example: 'The battery is low again.' },
      { word: 'charge', meaningAr: 'يشحن', example: 'Please charge the battery tonight.' },
      { word: 'screen', meaningAr: 'شاشة', example: 'The screen is cracked.' },
      { word: 'cracked', meaningAr: 'متصدع / مشروخ', example: 'The screen is cracked.' },
      { word: 'turn on', meaningAr: 'يشغّل', example: 'Turn on the tablet, please.' },
      { word: 'turn off', meaningAr: 'يطفئ / يغلق', example: 'Turn off the music at night.' },
      { word: 'cable', meaningAr: 'كابل / سلك', example: 'The cable is too short.' },
      { word: 'mouse', meaningAr: 'فأرة', example: 'My mouse does not work well.' },
      { word: 'speaker', meaningAr: 'مكبر صوت', example: 'The new speaker sounds great.' },
      { word: 'keyboard', meaningAr: 'لوحة مفاتيح', example: 'We will buy new keyboards tomorrow.' },
    ],
    scenario: [
      { en: 'I bought a new tablet yesterday.', ar: 'اشتريت جهازا لوحيا جديدا أمس.', d: 1 },
      { en: 'The battery is low again.', ar: 'البطارية منخفضة مرة أخرى.', d: 1 },
      { en: 'Please charge the battery tonight.', ar: 'اشحن البطارية الليلة من فضلك.', d: 1 },
      { en: 'I will charge my phone before bed.', ar: 'سأشحن هاتفي قبل النوم.', d: 1 },
      { en: 'The screen is cracked.', ar: 'الشاشة متصدعة.', d: 1 },
      { en: 'My headphones are very comfortable.', ar: 'سماعاتي مريحة جدا.', d: 1 },
      { en: 'Turn on the tablet, please.', ar: 'شغّل الجهاز اللوحي من فضلك.', d: 1 },
      { en: 'Turn off the music at night.', ar: 'أطفئ الموسيقى في الليل.', d: 1 },
      { en: 'Did you charge the laptop?', ar: 'هل شحنت الحاسوب المحمول؟', d: 2 },
      { en: 'No, I did not charge it.', ar: 'لا، لم أشحنه.', d: 2 },
      { en: 'The cable is too short.', ar: 'الكابل قصير جدا.', d: 2 },
      { en: 'Will you update the device today?', ar: 'هل ستحدّث الجهاز اليوم؟', d: 2 },
      { en: 'The new speaker sounds great.', ar: 'صوت المكبر الجديد رائع.', d: 2 },
      { en: 'Do not drop the tablet again.', ar: 'لا ترمِ الجهاز اللوحي مرة أخرى.', d: 2 },
      { en: 'My mouse does not work well.', ar: 'فأرتي لا تعمل جيدا.', d: 2 },
      { en: 'The children will use the tablets in class.', ar: 'سيستخدم الأطفال الأجهزة اللوحية في الصف.', d: 3 },
    ],
    patterns: [
      {
        tmpl: '{IMPER} the {DEV}, please.', arTmpl: '{IMPER_ar} {DEV_ar} من فضلك.',
        slots: {
          IMPER: [
            { en: 'Turn on', ar: 'شغّل' }, { en: 'Turn off', ar: 'أطفئ' },
            { en: 'Charge', ar: 'اشحن' }, { en: 'Restart', ar: 'أعد تشغيل' },
          ],
          DEV: [
            { en: 'tablet', ar: 'الجهاز اللوحي' }, { en: 'laptop', ar: 'الحاسوب المحمول' },
            { en: 'phone', ar: 'الهاتف' }, { en: 'computer', ar: 'الحاسوب' },
          ],
        },
        tags: ['devices', 'imperative'], d: 1, limit: 12,
      },
      {
        tmpl: 'The {PART} is {COND}.', arTmpl: '{PART_ar} {COND_ar}.',
        slots: {
          PART: [
            { en: 'battery', ar: 'البطارية' }, { en: 'screen', ar: 'الشاشة' },
            { en: 'keyboard', ar: 'لوحة المفاتيح' }, { en: 'camera', ar: 'الكاميرا' },
          ],
          COND: [
            { en: 'low', ar: 'منخفضة' }, { en: 'old', ar: 'قديمة' },
            { en: 'new', ar: 'جديدة' }, { en: 'clean', ar: 'نظيفة' },
          ],
        },
        tags: ['devices', 'problems'], d: 1, limit: 12,
      },
      {
        tmpl: 'I will {V} the {DEV} {T}.', arTmpl: 'س{V_ar} {DEV_ar} {T_ar}.',
        slots: {
          V: [
            { en: 'charge', ar: 'أشحن' }, { en: 'turn on', ar: 'أشغّل' },
            { en: 'turn off', ar: 'أطفئ' }, { en: 'update', ar: 'أحدّث' },
          ],
          DEV: [
            { en: 'phone', ar: 'هاتفي' }, { en: 'tablet', ar: 'جهازي اللوحي' },
            { en: 'laptop', ar: 'حاسوبي المحمول' },
          ],
          T: [
            { en: 'tonight', ar: 'الليلة' }, { en: 'tomorrow', ar: 'غدا' },
            { en: 'in the morning', ar: 'في الصباح' }, { en: 'after dinner', ar: 'بعد العشاء' },
          ],
        },
        tags: ['devices', 'future'], d: 2, limit: 12,
      },
      {
        tmpl: 'Did you {V} the {DEV} {T}?', arTmpl: 'هل {V_ar} {DEV_ar} {T_ar}؟',
        slots: {
          V: [
            { en: 'charge', ar: 'شحنت' }, { en: 'update', ar: 'حدّثت' },
            { en: 'restart', ar: 'أعدت تشغيل' }, { en: 'drop', ar: 'أوقعت' },
          ],
          DEV: [
            { en: 'laptop', ar: 'الحاسوب المحمول' }, { en: 'tablet', ar: 'الجهاز اللوحي' },
            { en: 'new phone', ar: 'الهاتف الجديد' },
          ],
          T: [
            { en: 'yesterday', ar: 'أمس' }, { en: 'this morning', ar: 'هذا الصباح' },
            { en: 'last night', ar: 'البارحة' },
          ],
        },
        tags: ['devices', 'past-simple'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'I bought a new tablet yesterday.', ar: 'اشتريت جهازا لوحيا جديدا أمس.', word: 'tablet' },
      { en: 'Please charge the battery tonight.', ar: 'اشحن البطارية الليلة من فضلك.', word: 'charge' },
      { en: 'The screen is cracked.', ar: 'الشاشة متصدعة.', word: 'cracked', hint: 'صفة' },
      { en: 'Turn on the tablet, please.', ar: 'شغّل الجهاز اللوحي من فضلك.', word: 'Turn' },
      { en: 'The battery is low again.', ar: 'البطارية منخفضة مرة أخرى.', word: 'battery' },
      { en: 'My headphones are very comfortable.', ar: 'سماعاتي مريحة جدا.', word: 'headphones' },
      { en: 'Did you charge the laptop?', ar: 'هل شحنت الحاسوب المحمول؟', word: 'Did' },
      { en: 'We will buy new keyboards tomorrow.', ar: 'سنشتري لوحات مفاتيح جديدة غدا.', word: 'keyboards' },
    ],
    orders: [
      { en: 'I bought a new tablet yesterday.', ar: 'اشتريت جهازا لوحيا جديدا أمس.' },
      { en: 'Please charge the battery tonight.', ar: 'اشحن البطارية الليلة من فضلك.' },
      { en: 'The screen is cracked.', ar: 'الشاشة متصدعة.' },
      { en: 'My headphones are very comfortable.', ar: 'سماعاتي مريحة جدا.' },
      { en: 'Turn off the music at night.', ar: 'أطفئ الموسيقى في الليل.' },
      { en: 'Did you charge the laptop?', ar: 'هل شحنت الحاسوب المحمول؟' },
    ],
    mc: [
      { question: 'What do you wear on your head to listen to music?', options: ['Headphones', 'A charger', 'A mouse', 'A cable'], answerIndex: 0, ar: 'ماذا تضع على رأسك لتسمع الموسيقى؟' },
      { question: 'The screen has a big line across it. It is:', options: ['cracked', 'new', 'clean', 'charging'], answerIndex: 0, ar: 'في الشاشة خط كبير، فهي:' },
      { question: 'Your battery is empty. What should you do?', options: ['Charge it', 'Buy a mouse', 'Turn it off forever', 'Wash it'], answerIndex: 0, ar: 'بطاريتك فارغة، ماذا ينبغي أن تفعل؟' },
      { question: '"Turn off" means:', options: ['أطفئ', 'اشحن', 'شغّل', 'أعد تشغيل'], answerIndex: 0, ar: 'ما معنى Turn off؟' },
      { question: 'Which sentence asks about the past?', options: ['Did you charge the laptop?', 'I will charge it tonight.', 'Please charge it now.', 'The battery is low.'], answerIndex: 0, ar: 'أي جملة تسأل عن الماضي؟' },
    ],
  },

  /* ================= lesson 205 — Internet and Wi-Fi ================= */
  {
    num: 205,
    tags: ['internet', 'wifi'],
    objectives: [
      'Ask for and give the Wi-Fi password',
      'Describe slow connections and missing signal',
      'Fix the router with simple polite instructions',
    ],
    grammar: {
      explanation: 'Talk about the internet with the present simple and will. Ask for access with "What is the password for the Wi-Fi?". Say what is missing with "There is no signal" or "There is no connection in my room". Describe speed and quality with adjectives: "The internet is slow", "The signal is weak". For actions you promise to do now, use will: "I will restart the router now", "I will check the cable". A polite instruction starts with please: "Please reconnect the router".',
      explanationAr: 'تحدث عن الإنترنت بالمضارع البسيط وwill. اطلب الدخول بسؤال What is the password for the Wi-Fi؟ وقل ما هو مفقود بـ There is no signal أو There is no connection in my room. وصف السرعة والجودة بالصفات: The internet is slow، The signal is weak. وللأفعال التي تتعهد بها الآن استخدم will: I will restart the router now. وتبدأ التعليمة المهذبة بـ please: Please reconnect the router.',
      examples: [
        { en: 'The signal is weak in my room.', ar: 'الإشارة ضعيفة في غرفتي.' },
        { en: 'There is no connection here.', ar: 'لا يوجد اتصال هنا.' },
        { en: 'I will check the cable.', ar: 'سأفحص الكابل.' },
      ],
    },
    vocabulary: [
      { word: 'internet', meaningAr: 'الإنترنت', example: 'The internet is very slow today.' },
      { word: 'Wi-Fi', meaningAr: 'واي فاي (شبكة لاسلكية)', example: 'What is the password for the Wi-Fi?' },
      { word: 'password', meaningAr: 'كلمة المرور', example: 'I do not remember the password.' },
      { word: 'connection', meaningAr: 'اتصال', example: 'The connection works again.' },
      { word: 'slow', meaningAr: 'بطيء', example: 'The internet is slow at night.' },
      { word: 'signal', meaningAr: 'إشارة', example: 'There is no signal in my room.' },
      { word: 'router', meaningAr: 'الراوتر (الموجّه)', example: 'I will restart the router now.' },
      { word: 'reconnect', meaningAr: 'يعيد التوصيل / الاتصال', example: 'Please reconnect the router.' },
      { word: 'network', meaningAr: 'شبكة', example: 'Can you see the network?' },
      { word: 'download', meaningAr: 'يحمّل', example: 'We download films on the weekend.' },
      { word: 'browse', meaningAr: 'يتصفح', example: 'Do you browse the internet at night?' },
      { word: 'data', meaningAr: 'بيانات', example: 'My phone uses too much data.' },
    ],
    scenario: [
      { en: 'The internet is very slow today.', ar: 'الإنترنت بطيء جدا اليوم.', d: 1 },
      { en: 'What is the password for the Wi-Fi?', ar: 'ما كلمة المرور الخاصة بالواي فاي؟', d: 1 },
      { en: 'I do not remember the password.', ar: 'لا أتذكر كلمة المرور.', d: 1 },
      { en: 'There is no signal in my room.', ar: 'لا توجد إشارة في غرفتي.', d: 1 },
      { en: 'Please reconnect the router.', ar: 'أعد توصيل الراوتر من فضلك.', d: 1 },
      { en: 'I will restart the router now.', ar: 'سأعيد تشغيل الراوتر الآن.', d: 1 },
      { en: 'The connection works again.', ar: 'الاتصال يعمل من جديد.', d: 1 },
      { en: 'Can you see the network?', ar: 'هل ترى الشبكة؟', d: 2 },
      { en: 'Yes, but the signal is weak.', ar: 'نعم، لكن الإشارة ضعيفة.', d: 2 },
      { en: 'We download films on the weekend.', ar: 'نحمّل الأفلام في عطلة نهاية الأسبوع.', d: 2 },
      { en: 'Do you browse the internet at night?', ar: 'هل تتصفح الإنترنت في الليل؟', d: 2 },
      { en: 'My phone uses too much data.', ar: 'هاتفي يستهلك بيانات كثيرة جدا.', d: 2 },
      { en: 'The Wi-Fi did not work yesterday.', ar: 'الواي فاي لم يعمل أمس.', d: 2 },
      { en: 'I called the internet company this morning.', ar: 'اتصلت بشركة الإنترنت هذا الصباح.', d: 3 },
      { en: 'Will the connection be faster tomorrow?', ar: 'هل سيكون الاتصال أسرع غدا؟', d: 3 },
      { en: 'No signal again. I will check the router.', ar: 'لا إشارة مرة أخرى. سأفحص الراوتر.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'What is the password for the {N}?', arTmpl: 'ما كلمة المرور الخاصة ب{N_ar}؟',
        slots: {
          N: [
            { en: 'Wi-Fi', ar: 'الواي فاي' }, { en: 'internet', ar: 'الإنترنت' },
            { en: 'guest network', ar: 'شبكة الزوار' }, { en: 'school network', ar: 'شبكة المدرسة' },
          ],
        },
        tags: ['internet', 'questions'], d: 1, limit: 4,
      },
      {
        tmpl: 'The {TH} is too {ADJ} {T}.', arTmpl: '{TH_ar} {ADJ_ar} جدا {T_ar}.',
        slots: {
          TH: [
            { en: 'connection', ar: 'الاتصال', g: 'm' }, { en: 'internet', ar: 'الإنترنت', g: 'm' },
            { en: 'signal', ar: 'الإشارة', g: 'f' }, { en: 'network', ar: 'الشبكة', g: 'f' },
          ],
          ADJ: (x) => (x.TH.g === 'f'
            ? [ { en: 'slow', ar: 'بطيئة' }, { en: 'weak', ar: 'ضعيفة' } ]
            : [ { en: 'slow', ar: 'بطيء' }, { en: 'weak', ar: 'ضعيف' } ]),
          T: [
            { en: 'today', ar: 'اليوم' }, { en: 'at night', ar: 'في الليل' },
            { en: 'in my room', ar: 'في غرفتي' }, { en: 'right now', ar: 'الآن' },
          ],
        },
        tags: ['internet', 'problems'], d: 2, limit: 16,
      },
      {
        tmpl: 'Please {V} the router {T}.', arTmpl: 'من فضلك {V_ar} الراوتر {T_ar}.',
        slots: {
          V: [
            { en: 'restart', ar: 'أعد تشغيل' }, { en: 'reconnect', ar: 'أعد توصيل' },
            { en: 'move', ar: 'انقل' }, { en: 'check', ar: 'افحص' },
          ],
          T: [
            { en: 'again', ar: 'مرة أخرى' }, { en: 'now', ar: 'الآن' },
            { en: 'from the shelf', ar: 'من الرف' },
          ],
        },
        tags: ['internet', 'imperative'], d: 2, limit: 8,
      },
      {
        tmpl: 'I use the {NET} {T}.', arTmpl: 'أستخدم {NET_ar} {T_ar}.',
        slots: {
          NET: [
            { en: 'internet', ar: 'الإنترنت' }, { en: 'school Wi-Fi', ar: 'واي فاي المدرسة' },
            { en: 'library network', ar: 'شبكة المكتبة' }, { en: 'mobile data', ar: 'بيانات الهاتف' },
          ],
          T: [
            { en: 'every evening', ar: 'كل مساء' }, { en: 'at home', ar: 'في المنزل' },
            { en: 'in the cafe', ar: 'في المقهى' }, { en: 'on the weekend', ar: 'في عطلة نهاية الأسبوع' },
          ],
        },
        tags: ['internet', 'present-simple'], d: 2, limit: 16,
      },
    ],
    fills: [
      { en: 'What is the password for the Wi-Fi?', ar: 'ما كلمة المرور الخاصة بالواي فاي؟', word: 'password' },
      { en: 'The internet is very slow today.', ar: 'الإنترنت بطيء جدا اليوم.', word: 'slow', hint: 'صفة' },
      { en: 'There is no signal in my room.', ar: 'لا توجد إشارة في غرفتي.', word: 'signal' },
      { en: 'Please reconnect the router.', ar: 'أعد توصيل الراوتر من فضلك.', word: 'reconnect' },
      { en: 'I will restart the router now.', ar: 'سأعيد تشغيل الراوتر الآن.', word: 'restart' },
      { en: 'Can you see the network?', ar: 'هل ترى الشبكة؟', word: 'network' },
      { en: 'My phone uses too much data.', ar: 'هاتفي يستهلك بيانات كثيرة جدا.', word: 'data' },
      { en: 'We download films on the weekend.', ar: 'نحمّل الأفلام في عطلة نهاية الأسبوع.', word: 'download' },
    ],
    orders: [
      { en: 'What is the password for the Wi-Fi?', ar: 'ما كلمة المرور الخاصة بالواي فاي؟' },
      { en: 'The internet is very slow today.', ar: 'الإنترنت بطيء جدا اليوم.' },
      { en: 'There is no signal in my room.', ar: 'لا توجد إشارة في غرفتي.' },
      { en: 'I will restart the router now.', ar: 'سأعيد تشغيل الراوتر الآن.' },
      { en: 'My phone uses too much data.', ar: 'هاتفي يستهلك بيانات كثيرة جدا.' },
      { en: 'The connection works again.', ar: 'الاتصال يعمل من جديد.' },
    ],
    mc: [
      { question: 'What do you need to join the Wi-Fi?', options: ['The password', 'A new battery', 'A cable', 'Headphones'], answerIndex: 0, ar: 'ماذا تحتاج للانضمام إلى الواي فاي؟' },
      { question: 'The pages will not load. The problem is the:', options: ['connection', 'keyboard', 'battery', 'headphones'], answerIndex: 0, ar: 'الصفحات لا تفتح، فالمشكلة في:' },
      { question: '"Reconnect the router" means:', options: ['أعد توصيل الراوتر', 'اشحن الهاتف', 'أطفئ الشاشة', 'احذف الملف'], answerIndex: 0, ar: 'ما معنى Reconnect the router؟' },
      { question: 'There is no signal in your room. A good idea is:', options: ['restart the router', 'buy new headphones', 'charge the mouse', 'wash the screen'], answerIndex: 0, ar: 'لا توجد إشارة في غرفتك، فالفكرة الجيدة:' },
      { question: 'Wi-Fi gives you:', options: ['wireless internet', 'a longer cable', 'a new phone', 'a big screen'], answerIndex: 0, ar: 'الواي فاي يمنحك:' },
    ],
  },

  /* ================= lesson 206 — Passwords and Digital Security ================= */
  {
    num: 206,
    tags: ['security', 'passwords'],
    objectives: [
      'Describe what makes a strong password',
      'Give digital security advice with should, must and never',
      'Use the present perfect and if-clauses for online safety',
    ],
    grammar: {
      explanation: 'Digital security advice uses modals and the present perfect. Use should and must for strong advice: "You should use two-factor authentication", "We must protect our private information". Use the present perfect for actions up to now: "I have changed my password this month", "Have you updated your password recently?". Use if for a condition and its result: "If your password is weak, change it immediately". Strong warnings start with never or do not: "Never share your password with anyone".',
      explanationAr: 'نصائح الأمان الرقمي تستخدم أفعالا ناقصة والمضارع التام. استخدم should وmust للنصيحة القوية: You should use two-factor authentication، We must protect our private information. واستخدم المضارع التام لأحداث استمرت إلى الآن: I have changed my password this month، Have you updated your password recently؟ واستخدم if للشرط ونتيجته: If your password is weak, change it immediately. وتبدأ التحذيرات القوية بـ never أو do not: Never share your password with anyone.',
      examples: [
        { en: 'A strong password is hard to guess.', ar: 'كلمة المرور القوية صعبة التخمين.' },
        { en: 'Have you updated your password recently?', ar: 'هل حدّثت كلمة مرورك مؤخرا؟' },
        { en: 'If you use two-factor authentication, your account is safer.', ar: 'إذا استخدمت التحقق بخطوتين، كان حسابك أكثر أمانا.' },
      ],
    },
    vocabulary: [
      { word: 'password', meaningAr: 'كلمة المرور', example: 'Never share your password with anyone.' },
      { word: 'strong', meaningAr: 'قوي', example: 'A strong password has letters and numbers.' },
      { word: 'weak', meaningAr: 'ضعيف', example: 'Weak passwords are easy to guess.' },
      { word: 'share', meaningAr: 'يشارك', example: 'Do not share your password.' },
      { word: 'account', meaningAr: 'حساب', example: 'My account is safe now.' },
      { word: 'safe', meaningAr: 'آمن', example: 'This website is safe.' },
      { word: 'hack', meaningAr: 'يخترق', example: 'Hackers try to hack accounts.' },
      { word: 'protect', meaningAr: 'يحمي', example: 'We must protect our private information.' },
      { word: 'security', meaningAr: 'أمان', example: 'Security starts with a good password.' },
      { word: 'two-factor authentication', meaningAr: 'التحقق بخطوتين', example: 'You should use two-factor authentication.' },
      { word: 'update', meaningAr: 'يحدّث', example: 'Update your password every few months.' },
      { word: 'private', meaningAr: 'خاص / شخصي', example: 'Keep your information private.' },
    ],
    scenario: [
      { en: 'A strong password has letters, numbers and symbols.', ar: 'كلمة المرور القوية فيها حروف وأرقام ورموز.', d: 1 },
      { en: 'Never share your password with anyone.', ar: 'لا تشارك كلمة مرورك مع أحد أبدا.', d: 1 },
      { en: 'I have changed my password this month.', ar: 'لقد غيّرت كلمة مروري هذا الشهر.', d: 1 },
      { en: 'You should use two-factor authentication.', ar: 'ينبغي أن تستخدم التحقق بخطوتين.', d: 1 },
      { en: 'If someone learns your password, they can open your account.', ar: 'إذا عرف أحدهم كلمة مرورك، يمكنه فتح حسابك.', d: 3 },
      { en: 'Have you updated your password recently?', ar: 'هل حدّثت كلمة مرورك مؤخرا؟', d: 2 },
      { en: 'No, I have not changed it since last year.', ar: 'لا، لم أغيّرها منذ العام الماضي.', d: 2 },
      { en: 'Weak passwords are easy to guess.', ar: 'كلمات المرور الضعيفة سهلة التخمين.', d: 1 },
      { en: 'Do not write your password on paper.', ar: 'لا تكتب كلمة مرورك على ورقة.', d: 2 },
      { en: 'My account is safe now.', ar: 'حسابي آمن الآن.', d: 1 },
      { en: 'Could you help me create a new password?', ar: 'هل تساعدني في إنشاء كلمة مرور جديدة؟', d: 2 },
      { en: 'Of course, I will show you a safe way.', ar: 'بالطبع، سأريك طريقة آمنة.', d: 2 },
      { en: 'Hackers try thousands of passwords every day.', ar: 'يجرّب المخترقون آلاف كلمات المرور كل يوم.', d: 3 },
      { en: 'If your password is weak, change it immediately.', ar: 'إذا كانت كلمة مرورك ضعيفة، فغيّرها فورا.', d: 3 },
      { en: 'I have never shared my password with anyone.', ar: 'لم أشارك كلمة مروري مع أحد أبدا.', d: 2 },
      { en: 'We must protect our private information.', ar: 'يجب أن نحمي معلوماتنا الخاصة.', d: 3 },
      { en: 'How often should you change your password?', ar: 'كم مرة ينبغي أن تغيّر كلمة مرورك؟', d: 2 },
      { en: 'You should change your password every few months.', ar: 'ينبغي أن تغيّر كلمة مرورك كل بضعة أشهر.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Never share your password with {W}.', arTmpl: 'لا تشارك كلمة مرورك مع {W_ar} أبدا.',
        slots: {
          W: [
            { en: 'anyone', ar: 'أي أحد' }, { en: 'a stranger', ar: 'غريب' },
            { en: 'your coworkers', ar: 'زملائك' }, { en: 'any website', ar: 'أي موقع' },
          ],
        },
        tags: ['security', 'warnings'], d: 1, limit: 4,
      },
      {
        tmpl: 'If your password is {ADJ}, you should change it.', arTmpl: 'إذا كانت كلمة مرورك {ADJ_ar}، فينبغي أن تغيّرها.',
        slots: {
          ADJ: [
            { en: 'weak', ar: 'ضعيفة' }, { en: 'short', ar: 'قصيرة' },
            { en: 'old', ar: 'قديمة' }, { en: 'simple', ar: 'بسيطة' },
          ],
        },
        tags: ['security', 'conditional'], d: 2, limit: 4,
      },
      {
        tmpl: 'I have {PP} my password {T}.', arTmpl: 'لقد {PP_ar} كلمة مروري {T_ar}.',
        slots: {
          PP: [
            { en: 'changed', ar: 'غيّرت' }, { en: 'updated', ar: 'حدّثت' },
            { en: 'created', ar: 'أنشأت' }, { en: 'saved', ar: 'حفظت' },
          ],
          T: [
            { en: 'this week', ar: 'هذا الأسبوع' }, { en: 'today', ar: 'اليوم' },
            { en: 'twice already', ar: 'مرتين بالفعل' }, { en: 'just now', ar: 'الآن للتو' },
          ],
        },
        tags: ['security', 'present-perfect'], d: 2, limit: 8,
      },
      {
        tmpl: 'You should {V} your account {ADV}.', arTmpl: 'ينبغي أن {V_ar} حسابك {ADV_ar}.',
        slots: {
          V: [
            { en: 'protect', ar: 'تحمي' }, { en: 'check', ar: 'تفحص' },
            { en: 'update', ar: 'تحدّث' }, { en: 'lock', ar: 'تقفل' },
          ],
          ADV: [
            { en: 'regularly', ar: 'بانتظام' }, { en: 'every week', ar: 'كل أسبوع' },
            { en: 'every month', ar: 'كل شهر' }, { en: 'carefully', ar: 'بعناية' },
          ],
        },
        tags: ['security', 'advice'], d: 2, limit: 12,
      },
      {
        tmpl: '{S} {V} strong passwords {T}.', arTmpl: '{S_ar} {V_ar} كلمات مرور قوية {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('use', x.S.agr), ar: B.arPresent('use', x.S.agr) }],
          T: [
            { en: 'at work', ar: 'في العمل' }, { en: 'for every account', ar: 'لكل حساب' },
            { en: 'on every website', ar: 'في كل موقع' },
          ],
        },
        tags: ['security', 'present-simple'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'A strong password has letters, numbers and symbols.', ar: 'كلمة المرور القوية فيها حروف وأرقام ورموز.', word: 'strong' },
      { en: 'Never share your password with anyone.', ar: 'لا تشارك كلمة مرورك مع أحد أبدا.', word: 'share' },
      { en: 'You should use two-factor authentication.', ar: 'ينبغي أن تستخدم التحقق بخطوتين.', word: 'authentication' },
      { en: 'I have changed my password this month.', ar: 'لقد غيّرت كلمة مروري هذا الشهر.', word: 'changed' },
      { en: 'If someone learns your password, they can open your account.', ar: 'إذا عرف أحدهم كلمة مرورك، يمكنه فتح حسابك.', word: 'account' },
      { en: 'Have you updated your password recently?', ar: 'هل حدّثت كلمة مرورك مؤخرا؟', word: 'recently' },
      { en: 'We must protect our private information.', ar: 'يجب أن نحمي معلوماتنا الخاصة.', word: 'protect' },
      { en: 'Weak passwords are easy to guess.', ar: 'كلمات المرور الضعيفة سهلة التخمين.', word: 'guess' },
    ],
    orders: [
      { en: 'A strong password has letters, numbers and symbols.', ar: 'كلمة المرور القوية فيها حروف وأرقام ورموز.' },
      { en: 'Never share your password with anyone.', ar: 'لا تشارك كلمة مرورك مع أحد أبدا.' },
      { en: 'You should use two-factor authentication.', ar: 'ينبغي أن تستخدم التحقق بخطوتين.' },
      { en: 'I have changed my password this month.', ar: 'لقد غيّرت كلمة مروري هذا الشهر.' },
      { en: 'How often should you change your password?', ar: 'كم مرة ينبغي أن تغيّر كلمة مرورك؟' },
      { en: 'We must protect our private information.', ar: 'يجب أن نحمي معلوماتنا الخاصة.' },
    ],
    mc: [
      { question: 'Which password is the strongest?', options: ['Xq7#mT9z', '123456', 'password', 'myname2020'], answerIndex: 0, ar: 'أي كلمة مرور أقوى؟' },
      { question: 'What should you never do with your password?', options: ['Share it with anyone', 'Change it regularly', 'Make it longer', 'Use symbols in it'], answerIndex: 0, ar: 'ما الذي يجب ألا تفعله بكلمة مرورك أبدا؟' },
      { question: 'Two-factor authentication adds:', options: ['a second security step', 'a new email address', 'a bigger screen', 'a faster connection'], answerIndex: 0, ar: 'التحقق بخطوتين يضيف:' },
      { question: 'If your password is weak, you should:', options: ['change it immediately', 'tell your friends', 'write it on paper', 'use it everywhere'], answerIndex: 0, ar: 'إذا كانت كلمة مرورك ضعيفة، فينبغي أن:' },
      { question: 'You have not changed your password since last year. That is:', options: ['risky', 'perfect', 'impossible', 'cheap'], answerIndex: 0, ar: 'لم تغيّر كلمة مرورك منذ العام الماضي، وهذا أمر:' },
    ],
  },
];
