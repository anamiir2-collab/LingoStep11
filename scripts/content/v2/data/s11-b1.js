/* ============================================================
   v2 section data — s11-b1.js
   Specialized English & Leadership · lessons 249–250
   (public speaking + final real-life communication project)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 249 — Public Speaking ================= */
  {
    num: 249,
    tags: ['public-speaking', 'communication'],
    objectives: [
      'Manage nerves before and during a speech',
      'Open a talk with a story and keep eye contact',
      'End with a strong, memorable conclusion',
    ],
    grammar: {
      explanation: 'Public speaking advice often uses imperatives and the first conditional: "Speak clearly and make eye contact; if you practice, you will feel calmer". Gerunds work as subjects: "Opening with a story catches attention". Use do not for warning advice: "Do not read from your notes all the time". Adverbs of manner (clearly, slowly, confidently) describe how a speaker delivers the message: "She ended with a strong conclusion".',
      explanationAr: 'كثيرا ما تأتي نصائح التحدث أمام الجمهور بصيغة الأمر والشرط الأول: Speak clearly and make eye contact، وإذا تمرنت فستشعر بهدوء أكبر. ويعمل المصدر المؤول فاعلا: Opening with a story catches attention. واستخدم do not للتحذير: Do not read from your notes all the time. وتصف ظروف الكيفية كـ clearly وslowly وconfidently طريقة أداء المتحدث: She ended with a strong conclusion.',
      examples: [
        { en: 'If you practice your speech, you will feel calmer.', ar: 'إذا تمرنت على خطبتك فستشعر بهدوء أكبر.' },
        { en: 'Open with a story to catch the attention.', ar: 'افتح بقصة لجذب الانتباه.' },
        { en: 'End with a strong conclusion and thank the audience.', ar: 'اختم بخاتمة قوية واشكر الحضور.' },
      ],
    },
    vocabulary: [
      { word: 'speech', meaningAr: 'خطبة / كلمة', example: 'His speech lasted ten minutes.', ipa: 'spiːtʃ' },
      { word: 'nervous', meaningAr: 'متوتر', example: 'I feel nervous before a speech.' },
      { word: 'audience', meaningAr: 'جمهور / الحضور', example: 'The audience listened carefully.', ipa: 'ˈɔːdiəns' },
      { word: 'eye contact', meaningAr: 'تواصل بصري', example: 'Make eye contact with the audience.' },
      { word: 'clearly', meaningAr: 'بوضوح', example: 'Speak clearly and slowly.' },
      { word: 'conclusion', meaningAr: 'خاتمة', example: 'End with a strong conclusion.' },
      { word: 'rehearsal', meaningAr: 'تمرين / بروفة', example: 'We have one more rehearsal tomorrow.' },
      { word: 'confident', meaningAr: 'واثق', example: 'Practice makes you confident.' },
      { word: 'body language', meaningAr: 'لغة الجسد', example: 'Calm body language builds trust.' },
      { word: 'attention', meaningAr: 'انتباه', example: 'A good opening catches attention.' },
      { word: 'message', meaningAr: 'رسالة', example: 'Repeat your main message twice.' },
      { word: 'applaud', meaningAr: 'يصفّق', example: 'The audience applauded loudly at the end.' },
    ],
    scenario: [
      { en: 'I always feel nervous before a speech.', ar: 'أشعر دائما بالتوتر قبل خطبة.', d: 1 },
      { en: 'Were you nervous before your first presentation?', ar: 'هل كنت متوترا قبل عرضك الأول؟', d: 2 },
      { en: 'Yes, but practice made everything easier.', ar: 'نعم، لكن التمرين جعل كل شيء أسهل.', d: 2 },
      { en: 'A good speaker opens with a story.', ar: 'المتحدث الجيد يفتح بقصة.', d: 1 },
      { en: 'He opened with a story about his first job.', ar: 'فتح بقصة عن وظيفته الأولى.', d: 2 },
      { en: 'Make eye contact with different parts of the room.', ar: 'تواصل بصريا مع أجزاء مختلفة من القاعة.', d: 2 },
      { en: 'She made eye contact with everyone in the audience.', ar: 'تواصلت بصريا مع كل فرد في الحضور.', d: 2 },
      { en: 'Speak clearly and do not rush.', ar: 'تكلم بوضوح ولا تستعجل.', d: 1 },
      { en: 'If you speak clearly, the audience will follow you easily.', ar: 'إذا تكلمت بوضوح فسيفهمك الحضور بسهولة.', d: 3 },
      { en: 'End with a strong conclusion that repeats your main message.', ar: 'اختم بخاتمة قوية تعيد رسالتك الرئيسية.', d: 3 },
      { en: 'Her strong conclusion impressed the whole audience.', ar: 'أبهرت خاتمتها القوية الحضور بأكمله.', d: 2 },
      { en: 'What will you talk about in your presentation?', ar: 'عم ستتحدث في عرضك التقديمي؟', d: 1 },
      { en: 'I will talk about our experience with remote work.', ar: 'ستتحدث عن تجربتنا مع العمل عن بعد.', d: 1 },
      { en: 'Do not read from your notes all the time.', ar: 'لا تقرأ من ملاحظاتك طوال الوقت.', d: 2 },
      { en: 'The audience asked thoughtful questions at the end.', ar: 'طرح الحضور أسئلة مدروسة في النهاية.', d: 2 },
      { en: 'Practice your speech in front of a friend first.', ar: 'تمرن على خطبتك أمام صديق أولا.', d: 2 },
      { en: 'You will sound more confident after a few rehearsals.', ar: 'ستبدو أكثر ثقة بعد بضع تدريبات.', d: 2 },
      { en: 'Could you review my speech this evening?', ar: 'هل يمكنك مراجعة خطبتي هذا المساء؟', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Do not forget to {A} during your speech.', arTmpl: 'لا تنسَ أن {A_ar} أثناء خطبتك.',
        slots: {
          A: [
            { en: 'make eye contact', ar: 'تتواصل بصريا مع الحضور' }, { en: 'breathe slowly', ar: 'تتنفس ببطء' },
            { en: 'smile at the audience', ar: 'تبتسم للحضور' }, { en: 'watch the time', ar: 'تراقب الوقت' },
            { en: 'thank the organizers', ar: 'تشكر المنظمين' },
          ],
        },
        tags: ['public-speaking', 'advice'], d: 2, limit: 5,
      },
      {
        tmpl: 'If you {C}, {R}.', arTmpl: 'إذا {C_ar}، {R_ar}.',
        slots: {
          C: [
            { en: 'speak clearly', ar: 'تكلمت بوضوح' }, { en: 'open with a story', ar: 'بدأت بقصة' },
            { en: 'make eye contact', ar: 'تواصلت بصريا مع الحضور' }, { en: 'practice your speech', ar: 'تمرنت على خطبتك' },
          ],
          R: [
            { en: 'the audience will follow you easily', ar: 'فسيفهمك الحضور بسهولة' },
            { en: 'the audience will stay engaged', ar: 'فسيبقى الحضور منتبها' },
            { en: 'you will sound more confident', ar: 'فستبدو أكثر ثقة' },
          ],
        },
        tags: ['public-speaking', 'conditionals'], d: 3, limit: 10,
      },
      {
        tmpl: 'She will open her presentation with {O}.', arTmpl: 'ستفتح عرضها التقديمي {O_ar}.',
        slots: {
          O: [
            { en: 'a short story', ar: 'بقصة قصيرة' }, { en: 'a surprising fact', ar: 'بحقيقة مدهشة' },
            { en: 'a simple question', ar: 'بسؤال بسيط' }, { en: 'a famous quote', ar: 'باقتباس مشهور' },
          ],
        },
        tags: ['public-speaking', 'openings'], d: 2, limit: 4,
      },
      {
        tmpl: 'End with {C}.', arTmpl: 'اختم {C_ar}.',
        slots: {
          C: [
            { en: 'a strong conclusion', ar: 'بخاتمة قوية' }, { en: 'a call to action', ar: 'بدعوة واضحة للعمل' },
            { en: 'a memorable summary', ar: 'بملخص لا يُنسى' }, { en: 'a sincere thank you', ar: 'بشكر صادق' },
          ],
        },
        tags: ['public-speaking', 'conclusions'], d: 2, limit: 4,
      },
      {
        tmpl: 'The audience {V} during the {N}.', arTmpl: '{V_ar} الحضور أثناء {N_ar}.',
        slots: {
          V: [
            { en: 'stayed quiet', ar: 'بقي' }, { en: 'took notes', ar: 'دوّن' },
            { en: 'asked questions', ar: 'طرح' }, { en: 'laughed warmly', ar: 'ضحك' },
          ],
          N: [
            { en: 'workshop', ar: 'ورشة العمل' }, { en: 'lecture', ar: 'المحاضرة' },
            { en: 'training session', ar: 'جلسة التدريب' },
          ],
        },
        tags: ['public-speaking', 'audience'], d: 2, limit: 10,
      },
    ],
    fills: [
      { en: 'I always feel nervous before a speech.', ar: 'أشعر دائما بالتوتر قبل خطبة.', word: 'nervous', hint: 'متوتر' },
      { en: 'A good speaker opens with a story.', ar: 'المتحدث الجيد يفتح بقصة.', word: 'speaker', hint: 'متحدث' },
      { en: 'Make eye contact with different parts of the room.', ar: 'تواصل بصريا مع أجزاء مختلفة من القاعة.', word: 'contact', hint: 'تواصل' },
      { en: 'Speak clearly and do not rush.', ar: 'تكلم بوضوح ولا تستعجل.', word: 'clearly', hint: 'بوضوح' },
      { en: 'End with a strong conclusion that repeats your main message.', ar: 'اختم بخاتمة قوية تعيد رسالتك الرئيسية.', word: 'conclusion', hint: 'خاتمة' },
      { en: 'Practice your speech in front of a friend first.', ar: 'تمرن على خطبتك أمام صديق أولا.', word: 'Practice', hint: 'تمرّن' },
      { en: 'You will sound more confident after a few rehearsals.', ar: 'ستبدو أكثر ثقة بعد بضع تدريبات.', word: 'confident', hint: 'واثق' },
      { en: 'The audience asked thoughtful questions at the end.', ar: 'طرح الحضور أسئلة مدروسة في النهاية.', word: 'audience', hint: 'جمهور' },
    ],
    orders: [
      { en: 'I always feel nervous before a speech.', ar: 'أشعر دائما بالتوتر قبل خطبة.' },
      { en: 'A good speaker opens with a story.', ar: 'المتحدث الجيد يفتح بقصة.' },
      { en: 'Make eye contact with the whole audience.', ar: 'تواصل بصريا مع الحضور بأكمله.' },
      { en: 'She ended with a strong conclusion.', ar: 'اختمت بخاتمة قوية.' },
      { en: 'Practice your speech in front of a friend first.', ar: 'تمرن على خطبتك أمام صديق أولا.' },
      { en: 'If you speak clearly, the audience will follow you easily.', ar: 'إذا تكلمت بوضوح فسيفهمك الحضور بسهولة.' },
    ],
    mc: [
      { question: 'What is a good way to open a talk?', options: ['with a short story', 'with a long silence', 'with your phone', 'with a closed door'], answerIndex: 0, ar: 'ما الطريقة الجيدة لفتح حديث؟' },
      { question: 'Why is eye contact important?', options: ['it connects you with the audience', 'it fills the silence', 'it replaces the slides', 'it shortens the speech'], answerIndex: 0, ar: 'لماذا التواصل البصري مهم؟' },
      { question: '"End with a strong conclusion" means you should:', options: ['finish with a clear main message', 'stop in the middle', 'whisper the last words', 'leave without talking'], answerIndex: 0, ar: 'جملة End with a strong conclusion تعني أنه ينبغي لك أن:' },
      { question: 'What helps before a speech?', options: ['rehearsals in front of a friend', 'drinking only coffee', 'memorizing the wall', 'ignoring the audience'], answerIndex: 0, ar: 'ما الذي يساعد قبل خطبة؟' },
      { question: '"Speak clearly" is advice about your:', options: ['voice and pace', 'shoes', 'slide colors', 'email address'], answerIndex: 0, ar: 'جملة Speak clearly نصيحة بخصوص:' },
    ],
  },

  /* ================= lesson 250 — Final Real-Life Communication Project ================= */
  {
    num: 250,
    tags: ['capstone', 'review'],
    objectives: [
      'Handle a full travel situation from arrival to check-in',
      'Solve a room problem and contact customer service politely',
      'Write a follow-up email and present the experience at work',
    ],
    grammar: {
      explanation: 'This final project mixes everything you have learned: past simple for the story ("The taxi dropped us at the hotel"), past perfect for earlier results ("By the next morning, we had moved to a quiet room"), polite requests ("Could you confirm the change in writing, please?"), and the passive voice ("The air conditioning was repaired quickly"). In the presentation part, use sequence words: first, then, after that, finally. A good closing sentence gives your main message: "Calm communication solves real problems."',
      explanationAr: 'يمزج هذا المشروع النهائي كل ما تعلمته: الماضي البسيط للحكاية The taxi dropped us at the hotel، والماضي التام لنتيجة سابقة By the next morning, we had moved to a quiet room، والطلبات المهذبة Could you confirm the change in writing, please?، والمبني للمجهول The air conditioning was repaired quickly. وفي جزء العرض استخدم كلمات الترتيب: أولا ثم بعد ذلك أخيرا. وتقدم الجملة الختامية رسالتك الرئيسية: Calm communication solves real problems.',
      examples: [
        { en: 'Good evening, we are checking in under the name Karim.', ar: 'مساء الخير، نسجل الدخول باسم كريم.' },
        { en: 'Could you confirm the change in writing, please?', ar: 'هل يمكنك تأكيد التغيير كتابة من فضلك؟' },
        { en: 'Finally, I told my team that calm communication solves real problems.', ar: 'أخيرا أخبرت فريدي أن التواصل الهادئ يحل مشكلات حقيقية.' },
      ],
    },
    vocabulary: [
      { word: 'arrival', meaningAr: 'وصول', example: 'We texted her after our arrival.' },
      { word: 'check in', meaningAr: 'يسجل الدخول (في فندق)', example: 'You can check in after three.' },
      { word: 'air conditioning', meaningAr: 'مكيف الهواء', example: 'The air conditioning was too noisy.' },
      { word: 'technician', meaningAr: 'فني', example: 'The technician arrived within an hour.' },
      { word: 'upgrade', meaningAr: 'ترقية', example: 'They gave us a free room upgrade.' },
      { word: 'customer service', meaningAr: 'خدمة العملاء', example: 'Customer service answered after two minutes.' },
      { word: 'follow-up email', meaningAr: 'بريد متابعة', example: 'I sent a follow-up email that evening.' },
      { word: 'complimentary', meaningAr: 'مجاني (هدية)', example: 'The breakfast was complimentary.' },
      { word: 'compensation', meaningAr: 'تعويض', example: 'We asked for fair compensation.' },
      { word: 'colleague', meaningAr: 'زميل عمل', example: 'My colleague took photos of the city.' },
      { word: 'presentation', meaningAr: 'عرض تقديمي', example: 'My presentation lasted ten minutes.' },
      { word: 'calmly', meaningAr: 'بهدوء', example: 'Explain the problem calmly.' },
    ],
    scenario: [
      { en: 'My colleague and I arrived in a new city on Sunday evening.', ar: 'وصلت أنا وزميلي إلى مدينة جديدة مساء الأحد.', d: 1 },
      { en: 'The taxi dropped us at the hotel just before dark.', ar: 'أوصلتنا سيارة الأجرة إلى الفندق قبيل الغروب.', d: 1 },
      { en: 'Good evening, we are checking in under the name Karim.', ar: 'مساء الخير، نسجل الدخول باسم كريم.', d: 1 },
      { en: 'Welcome. Your double room is ready on the sixth floor.', ar: 'أهلا وسهلا. غرفتك المزدوجة جاهزة في الطابق السادس.', d: 1 },
      { en: 'Could you tell me where the elevator is, please?', ar: 'هل يمكنك إخباري أين المصعد من فضلك؟', d: 1 },
      { en: 'Unfortunately, the air conditioning in our room was not working.', ar: 'للأسف، كان مكيف الهواء في غرفتنا معطلا.', d: 2 },
      { en: 'I called the front desk twice, but nobody answered.', ar: 'اتصلت بمكتب الاستقبال مرتين، لكن لا أحد أجاب.', d: 2 },
      { en: 'Please accept our apologies. We will send a technician immediately.', ar: 'تقبلوا اعتذارنا من فضلكم. سنرسل فنيا فورا.', d: 2 },
      { en: 'An hour later, the problem was still not fixed.', ar: 'بعد ساعة، لم يكن قد أُصلحت المشكلة بعد.', d: 2 },
      { en: 'What did you do next?', ar: 'ماذا فعلت بعد ذلك؟', d: 2 },
      { en: 'I stayed calm and called the customer service line directly.', ar: 'حافظت على هدوئي واتصلت بخط خدمة العملاء مباشرة.', d: 2 },
      { en: 'The agent apologized and promised us a room upgrade that night.', ar: 'اعتذر الموظف ووعدنا بترقية الغرفة تلك الليلة.', d: 2 },
      { en: 'Could you confirm the change in writing, please?', ar: 'هل يمكنك تأكيد التغيير كتابة من فضلك؟', d: 2 },
      { en: 'That evening, I wrote a short follow-up email to the hotel manager.', ar: 'ذلك المساء كتبت بريد متابعة قصيرا إلى مدير الفندق.', d: 2 },
      { en: 'In the email, I described the issue politely and requested a fair solution.', ar: 'في البريد وصفته المسألة بلطف وطلبت حلا عادلا.', d: 3 },
      { en: 'By the next morning, we had moved to a quiet room with a sea view.', ar: 'بحلول الصباح التالي كنا قد انتقلنا إلى غرفة هادئة بإطلالة على البحر.', d: 3 },
      { en: 'The manager also offered us a complimentary breakfast as compensation.', ar: 'قدم لنا المدير أيضا وجبة إفطار مجانية كتعويض.', d: 2 },
      { en: 'Back at the office, my colleagues asked about the trip.', ar: 'وفي المكتب، سألني زملائي عن الرحلة.', d: 1 },
      { en: 'How did you handle the problem with the room?', ar: 'كيف تعاملت مع مشكلة الغرفة؟', d: 2 },
      { en: 'I explained that calm communication solves real problems.', ar: 'شرحت أن التواصل الهادئ يحل مشكلات حقيقية.', d: 3 },
      { en: 'My presentation lasted ten minutes and included photos of the city.', ar: 'استغرق عرضي التقديمي عشر دقائق وتضمن صورا من المدينة.', d: 2 },
      { en: 'Honestly, this project taught me that confidence comes from practice.', ar: 'بصراحة، علمني هذا المشروع أن الثقة تأتي من التمرين.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Could you {R}, please?', arTmpl: 'هل يمكنك أن {R_ar} من فضلك؟',
        slots: {
          R: [
            { en: 'tell me where the elevator is', ar: 'تخبرني أين المصعد' }, { en: 'send me the confirmation', ar: 'ترسل لي رسالة التأكيد' },
            { en: 'call a taxi for me', ar: 'تتصل بسيارة أجرة لي' }, { en: 'move us to a quieter room', ar: 'تنقلنا إلى غرفة أهدأ' },
            { en: 'recommend a local restaurant', ar: 'توصي بمطعم محلي' }, { en: 'extend our checkout time', ar: 'تمنحنا تمديدا لوقت الخروج' },
          ],
        },
        tags: ['capstone', 'requests'], d: 1, limit: 6,
      },
      {
        tmpl: 'The {N} in our room is not working.', arTmpl: '{N_ar} في غرفتنا لا يعمل.',
        slots: {
          N: [
            { en: 'air conditioning', ar: 'مكيف الهواء' }, { en: 'hot water', ar: 'الماء الساخن' },
            { en: 'television', ar: 'التلفاز' }, { en: 'room light', ar: 'إضاءة الغرفة' },
            { en: 'internet connection', ar: 'الاتصال بالإنترنت' },
          ],
        },
        tags: ['capstone', 'problems'], d: 2, limit: 5,
      },
      {
        tmpl: 'We are checking in under the name {P}.', arTmpl: 'نسجل الدخول باسم {P_ar}.',
        slots: { P: B.NAMED_SING },
        tags: ['capstone', 'checkin'], d: 1, limit: 8,
      },
      {
        tmpl: 'I will open my presentation with {O}.', arTmpl: 'سأفتح عرضي التقديمي {O_ar}.',
        slots: {
          O: [
            { en: 'a short video', ar: 'بفيديو قصير' }, { en: 'a surprising statistic', ar: 'بإحصائية مدهشة' },
            { en: 'a personal story', ar: 'بقصة شخصية' }, { en: 'a photo of the city', ar: 'بصورة للمدينة' },
          ],
        },
        tags: ['capstone', 'presentation'], d: 2, limit: 4,
      },
      {
        tmpl: 'The manager promised {Pm} within {T}.', arTmpl: 'وعد المدير {Pm_ar} خلال {T_ar}.',
        slots: {
          Pm: [
            { en: 'a room upgrade', ar: 'بترقية الغرفة' }, { en: 'a full refund', ar: 'باسترداد كامل للمبلغ' },
            { en: 'a complimentary breakfast', ar: 'بوجبة إفطار مجانية' }, { en: 'a written apology', ar: 'باعتذار مكتوب' },
          ],
          T: [
            { en: 'twenty-four hours', ar: 'أربع وعشرين ساعة' }, { en: 'one hour', ar: 'ساعة واحدة' },
            { en: 'two days', ar: 'يومين' }, { en: 'a few minutes', ar: 'بضع دقائق' },
          ],
        },
        tags: ['capstone', 'solutions'], d: 2, limit: 16,
      },
      {
        tmpl: 'At work, I presented our experience with {T}.', arTmpl: 'في العمل، قدمت تجربتنا مع {T_ar}.',
        slots: {
          T: [
            { en: 'calm complaints', ar: 'الشكاوى الهادئة' }, { en: 'travel problems', ar: 'مشاكل السفر' },
            { en: 'customer service', ar: 'خدمة العملاء' }, { en: 'hotel bookings', ar: 'حجوزات الفنادق' },
            { en: 'solving problems politely', ar: 'حل المشكلات بلطف' },
          ],
        },
        tags: ['capstone', 'review'], d: 2, limit: 5,
      },
      {
        tmpl: 'Please {A} at the front desk.', arTmpl: '{A_ar} عند مكتب الاستقبال من فضلك.',
        slots: {
          A: [
            { en: 'leave your passport copy', ar: 'اترك نسخة من جواز سفرك' }, { en: 'collect the room keys', ar: 'استلم مفاتيح الغرفة' },
            { en: 'fill in this short form', ar: 'املأ هذا النموذج القصير' }, { en: 'confirm your phone number', ar: 'أكد رقم هاتفك' },
          ],
        },
        tags: ['capstone', 'checkin'], d: 1, limit: 4,
      },
    ],
    fills: [
      { en: 'My colleague and I arrived in a new city on Sunday evening.', ar: 'وصلت أنا وزميلي إلى مدينة جديدة مساء الأحد.', word: 'arrived', hint: 'وصل' },
      { en: 'Good evening, we are checking in under the name Karim.', ar: 'مساء الخير، نسجل الدخول باسم كريم.', word: 'checking', hint: 'تسجيل الدخول' },
      { en: 'Unfortunately, the air conditioning in our room was not working.', ar: 'للأسف، كان مكيف الهواء في غرفتنا معطلا.', word: 'conditioning', hint: 'مكيف الهواء' },
      { en: 'I called the front desk twice, but nobody answered.', ar: 'اتصلت بمكتب الاستقبال مرتين، لكن لا أحد أجاب.', word: 'twice', hint: 'مرتين' },
      { en: 'The agent apologized and promised us a room upgrade that night.', ar: 'اعتذر الموظف ووعدنا بترقية الغرفة تلك الليلة.', word: 'upgrade', hint: 'ترقية' },
      { en: 'Could you confirm the change in writing, please?', ar: 'هل يمكنك تأكيد التغيير كتابة من فضلك؟', word: 'confirm', hint: 'يؤكد' },
      { en: 'I wrote a short follow-up email to the hotel manager.', ar: 'كتبت بريد متابعة قصيرا إلى مدير الفندق.', word: 'follow-up', hint: 'متابعة' },
      { en: 'The manager also offered us a complimentary breakfast as compensation.', ar: 'قدم لنا المدير أيضا وجبة إفطار مجانية كتعويض.', word: 'complimentary', hint: 'مجاني' },
      { en: 'My presentation lasted ten minutes and included photos of the city.', ar: 'استغرق عرضي التقديمي عشر دقائق وتضمن صورا من المدينة.', word: 'presentation', hint: 'عرض تقديمي' },
      { en: 'The manager promised a free breakfast for the trouble.', ar: 'وعد المدير بإفطار مجاني عن هذا الإزعاج.', word: 'promised', hint: 'وعد' },
      { en: 'I wrote down the reference number carefully.', ar: 'دونت رقم المرجع بعناية.', word: 'wrote', hint: 'كتب' },
    ],
    orders: [
      { en: 'Good evening, we are checking in under the name Karim.', ar: 'مساء الخير، نسجل الدخول باسم كريم.' },
      { en: 'Could you tell me where the elevator is, please?', ar: 'هل يمكنك إخباري أين المصعد من فضلك؟' },
      { en: 'Unfortunately, the air conditioning in our room was not working.', ar: 'للأسف، كان مكيف الهواء في غرفتنا معطلا.' },
      { en: 'I stayed calm and called the customer service line directly.', ar: 'حافظت على هدوئي واتصلت بخط خدمة العملاء مباشرة.' },
      { en: 'In the email, I described the issue politely and requested a fair solution.', ar: 'في البريد وصفته المسألة بلطف وطلبت حلا عادلا.' },
      { en: 'By the next morning, we had moved to a quiet room with a sea view.', ar: 'بحلول الصباح التالي كنا قد انتقلنا إلى غرفة هادئة بإطلالة على البحر.' },
      { en: 'Finally, I told my team that calm communication solves real problems.', ar: 'أخيرا أخبرت فريدي أن التواصل الهادئ يحل مشكلات حقيقية.' },
    ],
    mc: [
      { question: 'You arrive at the hotel and want your room. You say:', options: ['Good evening, we are checking in under the name Karim.', 'Good night, I am sleeping here.', 'Where is the nearest bank?', 'My car is outside.'], answerIndex: 0, ar: 'وصلت إلى الفندق وتريد غرفتك، ماذا تقول؟' },
      { question: 'The air conditioning is broken and nobody answers. Next step?', options: ['call customer service and explain calmly', 'break the window', 'shout at other guests', 'leave without paying'], answerIndex: 0, ar: 'المكيف معطل ولا أحد يجيب، ما خطوتك التالية؟' },
      { question: '"Could you confirm the change in writing?" tests your skill in:', options: ['polite professional requests', 'ordering food', 'giving directions', 'small talk only'], answerIndex: 0, ar: 'جملة Could you confirm the change in writing تختبر مهارتك في:' },
      { question: 'In a follow-up email you should:', options: ['describe the issue politely and request a solution', 'write in capital letters only', 'send ten attachments', 'forget the booking number'], answerIndex: 0, ar: 'في بريد المتابعة ينبغي أن:' },
      { question: 'You want the problem fixed and a record kept. You say:', options: ['Please document this change and fix the room today.', 'Give me a new room now!', 'I will call the police.', 'The breakfast is cold.'], answerIndex: 0, ar: 'تريد حلا مشكلة وتوثيقه كتابة، ماذا تقول؟' },
      { question: 'Which closing sentence fits a work presentation?', options: ['Calm communication solves real problems.', 'See you at the bakery.', 'My password is expired.', 'The elevator is slow.'], answerIndex: 0, ar: 'أي جملة ختامية تناسب عرضا تقديميا في العمل؟' },
    ],
  },
];
