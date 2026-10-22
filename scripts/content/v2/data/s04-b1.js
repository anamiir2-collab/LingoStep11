/* ============================================================
   v2 section data — s04-b1.js
   Food, Shopping & Services · lessons 84–87
   (Requesting a Repair, Customer Service, Simple Complaints,
    Booking a Service Appointment)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 84 — Requesting a Repair ================= */
  {
    num: 84,
    tags: ['repairs', 'technology', 'services'],
    objectives: [
      'Describe what is broken on your phone or laptop',
      'Ask a repair shop to fix it and say how long it will take',
      'Ask and answer questions about a warranty',
    ],
    grammar: {
      explanation: 'To report a gadget problem use the verb be + adjective: "My phone screen is broken", or the negative: "My laptop does not turn on". To request a repair politely use can or could + please: "Can you fix it, please?". Ask about time with "How long will it take?" — the answer uses will: "It will take three days". For finished accidents use the past simple: "I dropped my phone this morning". For your plan right now use going to: "We are going to look at your laptop".',
      explanationAr: 'للإبلاغ عن مشكلة في جهازك استخدم فعل الكينونة مع صفة: My phone screen is broken، أو النفي: My laptop does not turn on. ولطلب الإصلاح بأدب استخدم can أو could مع please: Can you fix it, please؟ واسأل عن المدة بـ How long will it take؟ والجواب يأتي بـ will: It will take three days. وللحوادث المنتهية استخدم الماضي البسيط: I dropped my phone this morning. ولخطتك الآن استخدم going to: We are going to look at your laptop.',
      examples: [
        { en: 'My phone screen is broken.', ar: 'شاشة هاتفي مكسورة.' },
        { en: 'How long will the repair take?', ar: 'كم من الوقت سيستغرق الإصلاح؟' },
        { en: 'I dropped my phone this morning.', ar: 'أسقطت هاتفي هذا الصباح.' },
      ],
    },
    vocabulary: [
      { word: 'repair', meaningAr: 'يصلح / إصلاح', example: 'The shop will repair my tablet.', ipa: 'rɪˈpeər' },
      { word: 'broken', meaningAr: 'مكسور / معطل', example: 'My phone screen is broken.' },
      { word: 'screen', meaningAr: 'شاشة', example: 'There is a crack on the screen.' },
      { word: 'fix', meaningAr: 'يضبط / يصلح', example: 'Can you fix my phone screen, please?' },
      { word: 'warranty', meaningAr: 'ضمان', example: 'Is my phone still under warranty?', ipa: 'ˈwɒrənti' },
      { word: 'technician', meaningAr: 'فني', example: 'The technician will check the battery.' },
      { word: 'battery', meaningAr: 'بطارية', example: 'The battery is weak, not broken.' },
      { word: 'keyboard', meaningAr: 'لوحة مفاتيح', example: 'Two keys on the keyboard do not work.' },
      { word: 'charger', meaningAr: 'شاحن', example: 'I lost my charger at the office.' },
      { word: 'tablet', meaningAr: 'جهاز لوحي', example: 'My tablet fell on the floor.' },
      { word: 'drop', meaningAr: 'يسقط', example: 'Be careful, do not drop the camera.' },
      { word: 'ready', meaningAr: 'جاهز', example: 'Your phone is ready now.' },
    ],
    scenario: [
      { en: 'My phone screen is broken.', ar: 'شاشة هاتفي مكسورة.', d: 1 },
      { en: 'My laptop does not turn on.', ar: 'حاسوبي المحمول لا يعمل.', d: 1 },
      { en: 'I dropped my phone this morning.', ar: 'أسقطت هاتفي هذا الصباح.', d: 1 },
      { en: 'Can you fix my phone screen, please?', ar: 'هل يمكنك إصلاح شاشة هاتفي من فضلك؟', d: 1 },
      { en: 'We can fix it today.', ar: 'يمكننا إصلاحه اليوم.', d: 2 },
      { en: 'How long will it take?', ar: 'كم من الوقت سيستغرق؟', d: 1 },
      { en: 'It will take about three days.', ar: 'سيستغرق نحو ثلاثة أيام.', d: 2 },
      { en: 'Is my phone still under warranty?', ar: 'هل هاتفي لا يزال تحت الضمان؟', d: 2 },
      { en: 'Yes, the warranty is for one year.', ar: 'نعم، الضمان سنة واحدة.', d: 2 },
      { en: 'Then the repair is free.', ar: 'إذن الإصلاح مجاني.', d: 2 },
      { en: 'The battery is weak, not broken.', ar: 'البطارية ضعيفة، وليست مكسورة.', d: 3 },
      { en: 'Could you check the keyboard too?', ar: 'هل يمكنك فحص لوحة المفاتيح أيضا؟', d: 2 },
      { en: 'We are going to look at your laptop now.', ar: 'سنفحص حاسوبك المحمول الآن.', d: 2 },
      { en: 'The technician will call you when it is ready.', ar: 'سيتصل بك الفني عندما يكون جاهزا.', d: 3 },
      { en: 'I lost my charger at the office.', ar: 'فقدت شاحني في المكتب.', d: 2 },
      { en: 'How much is a new screen?', ar: 'كم ثمن شاشة جديدة؟', d: 2 },
      { en: 'Please write your name and phone number here.', ar: 'من فضلك اكتب اسمك ورقم هاتفك هنا.', d: 2 },
      { en: 'The shop repairs phones and laptops.', ar: 'المحل يصلح الهواتف والحاسبات المحمولة.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'The {D} {P}.', arTmpl: '{D_ar} {P_ar}.',
        slots: {
          D: [
            { en: 'screen', ar: 'الشاشة', predEn: 'is broken', pred: 'مكسورة' },
            { en: 'keyboard', ar: 'لوحة المفاتيح', predEn: 'is broken', pred: 'معطلة' },
            { en: 'charger', ar: 'الشاحن', predEn: 'is broken', pred: 'معطل' },
            { en: 'battery', ar: 'البطارية', predEn: 'is weak', pred: 'ضعيفة' },
            { en: 'printer', ar: 'الطابعة', predEn: 'does not work', pred: 'لا تعمل' },
            { en: 'camera', ar: 'الكاميرا', predEn: 'does not work', pred: 'لا تعمل' },
          ],
          P: (x) => [{ en: x.D.predEn, ar: x.D.pred }],
        },
        tags: ['repairs', 'problems'], d: 1, limit: 6,
      },
      {
        tmpl: 'Can you {V} my {G}, please?', arTmpl: 'هل يمكنك {V_ar} {G_ar} من فضلك؟',
        slots: {
          V: [
            { en: 'fix', ar: 'إصلاح' }, { en: 'check', ar: 'فحص' },
            { en: 'look at', ar: 'النظر في' },
          ],
          G: [
            { en: 'phone', ar: 'هاتفي' }, { en: 'laptop', ar: 'حاسوبي المحمول' },
            { en: 'tablet', ar: 'جهازي اللوحي' }, { en: 'camera', ar: 'كاميرتي' },
            { en: 'printer', ar: 'طابعتي' },
          ],
        },
        tags: ['repairs', 'requests'], d: 1, limit: 12,
      },
      {
        tmpl: 'It will take {T}.', arTmpl: 'سيستغرق {T_ar}.',
        slots: {
          T: [
            { en: 'one hour', ar: 'ساعة واحدة' }, { en: 'two hours', ar: 'ساعتين' },
            { en: 'two days', ar: 'يومين' }, { en: 'three days', ar: 'ثلاثة أيام' },
            { en: 'a week', ar: 'أسبوعا' },
          ],
        },
        tags: ['repairs', 'future'], d: 2, limit: 5,
      },
      {
        tmpl: '{S} {V} the {G} yesterday.', arTmpl: '{S_ar} {V_ar} {G_ar} أمس.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPast('lose'), ar: B.arPast('lose', x.S.agr) }],
          G: [
            { en: 'charger', ar: 'الشاحن' }, { en: 'tablet', ar: 'الجهاز اللوحي' },
            { en: 'camera', ar: 'الكاميرا' }, { en: 'keyboard', ar: 'لوحة المفاتيح' },
            { en: 'printer', ar: 'الطابعة' },
          ],
        },
        tags: ['repairs', 'past-simple'], d: 2, limit: 15,
      },
      {
        tmpl: 'The technician will {V} {G} on {Day}.', arTmpl: '{V_ar} الفني {G_ar} يوم {Day_ar}.',
        slots: {
          V: [
            { en: 'fix', ar: 'سيصلح' }, { en: 'check', ar: 'سيفحص' },
            { en: 'replace', ar: 'سيستبدل' },
          ],
          G: [
            { en: 'the screen', ar: 'الشاشة' }, { en: 'the battery', ar: 'البطارية' },
            { en: 'the keyboard', ar: 'لوحة المفاتيح' }, { en: 'the charger', ar: 'الشاحن' },
          ],
          Day: B.DAYS,
        },
        tags: ['repairs', 'future'], d: 2, limit: 16,
      },
    ],
    fills: [
      { en: 'My phone screen is broken.', ar: 'شاشة هاتفي مكسورة.', word: 'broken', hint: 'صفة: مكسور' },
      { en: 'Can you fix it today?', ar: 'هل يمكنك إصلاحه اليوم؟', word: 'fix', hint: 'فعل' },
      { en: 'Is my phone under warranty?', ar: 'هل هاتفي تحت الضمان؟', word: 'warranty', hint: 'ضمان' },
      { en: 'How long will it take?', ar: 'كم من الوقت سيستغرق؟', word: 'long', hint: 'مدة زمنية' },
      { en: 'The technician will call you tomorrow.', ar: 'سيتصل بك الفني غدا.', word: 'technician', hint: 'فني' },
      { en: 'I dropped my phone this morning.', ar: 'أسقطت هاتفي هذا الصباح.', word: 'dropped', hint: 'فعل ماض' },
      { en: 'The battery is weak, not broken.', ar: 'البطارية ضعيفة، وليست مكسورة.', word: 'battery', hint: 'بطارية' },
      { en: 'It will take about three days.', ar: 'سيستغرق نحو ثلاثة أيام.', word: 'days', hint: 'أيام' },
    ],
    orders: [
      { en: 'My new laptop does not turn on.', ar: 'حاسوبي المحمول الجديد لا يعمل.' },
      { en: 'Could you check the battery too, please?', ar: 'هل يمكنك فحص البطارية أيضا من فضلك؟' },
      { en: 'The technician will call you in two days.', ar: 'سيتصل بك الفني بعد يومين.' },
      { en: 'Is the tablet still under warranty?', ar: 'هل الجهاز اللوحي لا يزال تحت الضمان؟' },
      { en: 'We are going to open the phone now.', ar: 'سنفتح الهاتف الآن.' },
      { en: 'How much is a new battery?', ar: 'كم ثمن بطارية جديدة؟' },
    ],
    mc: [
      { question: 'Your phone screen is cracked. Where do you go?', options: ['a repair shop', 'a bakery', 'a hair salon', 'a bookstore'], answerIndex: 0, ar: 'شاشة هاتفك متشققة، فأين تذهب؟' },
      { question: 'What does "under warranty" mean?', options: ['الإصلاح مجاني خلال مدة الضمان', 'الهاتف قديم', 'يجب شراء هاتف جديد', 'الضمان انتهى'], answerIndex: 0, ar: 'ماذا يعني under warranty؟' },
      { question: 'The clerk asks "How long will it take?" He wants to know the:', options: ['time needed', 'price', 'your name', 'the color'], answerIndex: 0, ar: 'يسألك الموظف كم سيستغرق، فهو يريد معرفة:' },
      { question: 'Which sentence is correct?', options: ['My laptop does not turn on.', 'My laptop not turns on.', 'My laptop no turn on.', 'My laptop does not turns on.'], answerIndex: 0, ar: 'أي جملة صحيحة؟' },
    ],
  },

  /* ================= lesson 85 — Customer Service ================= */
  {
    num: 85,
    tags: ['customer-service', 'phone-calls', 'shopping'],
    objectives: [
      'Call a customer service line and explain a problem',
      'Understand "How can I help you?" and "Hold the line, please."',
      'Give your order number and ask about a late delivery',
    ],
    grammar: {
      explanation: 'On a customer service call, the agent starts with "How can I help you?" and you answer with "I have a problem with..." plus the thing: my order, my delivery, my bill. Give facts in the past simple: "I ordered a jacket last week". Ask politely with can: "Can I speak to the manager, please?". The agent may say "Hold the line, please" — it means wait on the phone. The company promises with will: "We will send a new package today".',
      explanationAr: 'في مكالمة خدمة العملاء يبدأ الموظف بـ How can I help you؟ وتجيب بـ I have a problem with... ثم تذكر الشيء: طلبي، توصيلي، فاتورتي. اذكر الوقائع بالماضي البسيط: I ordered a jacket last week. واطلب بأدب بـ can: Can I speak to the manager, please؟ وقد يقول الموظف Hold the line, please أي انتظر على الخط. وتعطي الشركة وعدها بـ will: We will send a new package today.',
      examples: [
        { en: 'Good morning, how can I help you?', ar: 'صباح الخير، كيف يمكنني مساعدتك؟' },
        { en: 'I have a problem with my order.', ar: 'لدي مشكلة مع طلبي.' },
        { en: 'We will send a new package today.', ar: 'سنرسل طردا جديدا اليوم.' },
      ],
    },
    vocabulary: [
      { word: 'customer service', meaningAr: 'خدمة العملاء', example: 'Call customer service in the morning.' },
      { word: 'agent', meaningAr: 'موظف خدمة', example: 'A friendly agent answered my call.' },
      { word: 'hold the line', meaningAr: 'انتظر على الخط', example: 'Please hold the line a moment.' },
      { word: 'order number', meaningAr: 'رقم الطلب', example: 'My order number is 45291.' },
      { word: 'delivery', meaningAr: 'توصيل', example: 'The delivery comes before noon.' },
      { word: 'package', meaningAr: 'طرد / شحنة', example: 'The package is on the table.' },
      { word: 'delay', meaningAr: 'تأخير', example: 'Sorry about the two-day delay.' },
      { word: 'refund', meaningAr: 'استرداد المال', example: 'They gave me a full refund.', ipa: 'ˈriːfʌnd' },
      { word: 'replacement', meaningAr: 'بديل', example: 'They sent a replacement for the broken cup.' },
      { word: 'manager', meaningAr: 'مدير', example: 'Can I speak to the manager, please?' },
      { word: 'helpful', meaningAr: 'متعاون / مفيد', example: 'The agent was very helpful.' },
      { word: 'connect', meaningAr: 'يصل (هاتفيا)', example: 'I am connecting you to an agent.' },
    ],
    scenario: [
      { en: 'Good morning, how can I help you?', ar: 'صباح الخير، كيف يمكنني مساعدتك؟', d: 1 },
      { en: 'I have a problem with my order.', ar: 'لدي مشكلة مع طلبي.', d: 1 },
      { en: 'My order number is 45291.', ar: 'رقم طلبي هو 45291.', d: 1 },
      { en: 'I ordered a jacket last week.', ar: 'طلبت سترة الأسبوع الماضي.', d: 2 },
      { en: 'The package did not arrive yet.', ar: 'الطرد لم يصل بعد.', d: 2 },
      { en: 'Where is my delivery, please?', ar: 'أين توصيلي من فضلك؟', d: 1 },
      { en: 'I am calling about a late delivery.', ar: 'أتصل بخصوص توصيل متأخر.', d: 2 },
      { en: 'Hold the line, please.', ar: 'انتظر على الخط من فضلك.', d: 1 },
      { en: 'I am connecting you to an agent.', ar: 'سأوصلك بأحد الموظفين.', d: 2 },
      { en: 'Can I speak to the manager, please?', ar: 'هل يمكنني التحدث إلى المدير من فضلك؟', d: 2 },
      { en: 'We are sorry for the delay.', ar: 'نأسف للتأخير.', d: 2 },
      { en: 'We will send a new package today.', ar: 'سنرسل طردا جديدا اليوم.', d: 2 },
      { en: 'Do you want a refund or a replacement?', ar: 'هل تريد استرداد المال أم بديلا؟', d: 2 },
      { en: 'The agent was very helpful.', ar: 'كان الموظف متعاونا جدا.', d: 3 },
      { en: 'Did you get my email?', ar: 'هل وصلك بريدي الإلكتروني؟', d: 2 },
      { en: 'Thank you for your help.', ar: 'شكرا على مساعدتك.', d: 1 },
      { en: 'Our agents are not available at night.', ar: 'موظفونا غير متاحين ليلا.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I have a problem with my {O}.', arTmpl: 'لدي مشكلة مع {O_ar}.',
        slots: {
          O: [
            { en: 'order', ar: 'طلبي' }, { en: 'delivery', ar: 'توصيلي' },
            { en: 'package', ar: 'طردي' }, { en: 'internet line', ar: 'خط الإنترنت' },
            { en: 'phone line', ar: 'خط هاتفي' }, { en: 'bill', ar: 'فاتورتي' },
          ],
        },
        tags: ['customer-service', 'problems'], d: 1, limit: 6,
      },
      {
        tmpl: 'My order number is {N}.', arTmpl: 'رقم طلبي هو {N_ar}.',
        slots: { N: ['45291', '73012', '81547', '22908', '56034'] },
        tags: ['customer-service', 'numbers'], d: 1, limit: 5,
      },
      {
        tmpl: 'Could you {A}, please?', arTmpl: 'هل يمكنك {A_ar} من فضلك؟',
        slots: {
          A: [
            { en: 'hold the line', ar: 'الانتظار على الخط' },
            { en: 'repeat that', ar: 'تكرار ذلك' },
            { en: 'spell your name', ar: 'تهجئة اسمك' },
            { en: 'give me your address', ar: 'إعطائي عنوانك' },
          ],
        },
        tags: ['customer-service', 'requests'], d: 2, limit: 4,
      },
      {
        tmpl: '{S} {V} {O} last week.', arTmpl: '{S_ar} {V_ar} {O_ar} الأسبوع الماضي.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPast('order'), ar: B.arPast('order', x.S.agr) }],
          O: [
            { en: 'a new jacket', ar: 'سترة جديدة' }, { en: 'two shirts', ar: 'قميصين' },
            { en: 'a phone case', ar: 'غلافا للهاتف' }, { en: 'a birthday gift', ar: 'هدية عيد ميلاد' },
          ],
        },
        tags: ['customer-service', 'past-simple'], d: 2, limit: 12,
      },
      {
        tmpl: 'We will {V} a new {N} {T}.', arTmpl: '{V_ar} {N_ar} {A_ar} {T_ar}.',
        slots: {
          V: [
            { en: 'send', ar: 'سنرسل' }, { en: 'order', ar: 'سنطلب' },
          ],
          N: [
            { en: 'package', ar: 'طردا', adj: 'جديدا' },
            { en: 'card', ar: 'بطاقة', adj: 'جديدة' },
            { en: 'part', ar: 'قطعة', adj: 'جديدة' },
          ],
          A: (x) => [{ en: 'new', ar: x.N.adj }],
          T: [
            { en: 'today', ar: 'اليوم' }, { en: 'tomorrow', ar: 'غدا' },
            { en: 'this week', ar: 'هذا الأسبوع' },
          ],
        },
        tags: ['customer-service', 'future'], d: 2, limit: 10,
      },
    ],
    fills: [
      { en: 'How can I help you?', ar: 'كيف يمكنني مساعدتك؟', word: 'help', hint: 'فعل' },
      { en: 'I have a problem with my order.', ar: 'لدي مشكلة مع طلبي.', word: 'problem', hint: 'مشكلة' },
      { en: 'My order number is 45291.', ar: 'رقم طلبي هو 45291.', word: 'number', hint: 'رقم' },
      { en: 'Hold the line, please.', ar: 'انتظر على الخط من فضلك.', word: 'line', hint: 'خط الهاتف' },
      { en: 'I am calling about my delivery.', ar: 'أتصل بخصوص توصيلي.', word: 'calling', hint: 'فعل' },
      { en: 'We are sorry for the delay.', ar: 'نأسف للتأخير.', word: 'sorry', hint: 'اعتذار' },
      { en: 'The agent was very helpful.', ar: 'كان الموظف متعاونا جدا.', word: 'agent', hint: 'موظف خدمة' },
      { en: 'Did you get my email?', ar: 'هل وصلك بريدي الإلكتروني؟', word: 'email', hint: 'بريد إلكتروني' },
    ],
    orders: [
      { en: 'I have a problem with my order.', ar: 'لدي مشكلة مع طلبي.' },
      { en: 'Can I speak to a supervisor, please?', ar: 'هل يمكنني التحدث إلى أحد المشرفين من فضلك؟' },
      { en: 'We will send a new one tomorrow.', ar: 'سنرسل واحدا جديدا غدا.' },
      { en: 'My package did not arrive this week.', ar: 'طردي لم يصل هذا الأسبوع.' },
      { en: 'What is my order number?', ar: 'ما رقم طلبي؟' },
      { en: 'I want a refund, not a replacement.', ar: 'أريد استرداد المال، وليس بديلا.' },
    ],
    mc: [
      { question: 'The phone rings. The agent answers and says:', options: ['How can I help you?', 'Where is my order?', 'You are welcome.', 'I am sorry.'], answerIndex: 0, ar: 'يرن الهاتف فيجيب الموظف قائلا:' },
      { question: '"Hold the line, please" means:', options: ['انتظر على الخط', 'أغلق الهاتف', 'اتصل مرة أخرى', 'اتحدث بصوت عال'], answerIndex: 0, ar: 'ماذا يعني Hold the line, please؟' },
      { question: 'Your package is three days late. You call customer service to:', options: ['ask about it', 'order food', 'say hello', 'buy stamps'], answerIndex: 0, ar: 'طردك تأخر ثلاثة أيام، فتتصل بخدمة العملاء لكي:' },
      { question: 'Which number do you give first?', options: ['your order number', 'your shoe size', 'your age', 'your favorite color'], answerIndex: 0, ar: 'أي رقم تعطيه أولا؟' },
    ],
  },

  /* ================= lesson 86 — Making a Simple Complaint ================= */
  {
    num: 86,
    tags: ['complaints', 'shopping', 'polite-language'],
    objectives: [
      'Complain politely about a product or a service',
      'Say "This is not what I ordered" and ask for a refund',
      'Use the past simple to say when something stopped working',
    ],
    grammar: {
      explanation: 'To complain politely, start with "Excuse me" and use "I want to complain about..." plus a noun: the noise, the service, the food. Say the problem in the past simple: "It stopped working after two days", "I ordered a large shirt". Ask for a solution with "Can I return this, please?" or "I would like a refund, please" — "would like" is the polite form of "want". Apologize back with "I am sorry for the trouble" and promise with will: "The manager will call you tomorrow".',
      explanationAr: 'للتشكي بأدب ابدأ بـ Excuse me واستخدم I want to complain about... ثم اذكر الاسم: الضجيج، الخدمة، الطعام. وقل المشكلة بالماضي البسيط: It stopped working after two days، وI ordered a large shirt. واطلب الحل بـ Can I return this, please؟ أو I would like a refund, please — وصيغة would like هي الصيغة المهذبة من want. واعتذر بدورك بـ I am sorry for the trouble، وعد بالحل بـ will: The manager will call you tomorrow.',
      examples: [
        { en: 'I want to complain about the noise.', ar: 'أريد أن أشكو الضجيج.' },
        { en: 'It stopped working after two days.', ar: 'توقف عن العمل بعد يومين.' },
        { en: 'I would like a refund, please.', ar: 'أريد استرداد المال من فضلك.' },
      ],
    },
    vocabulary: [
      { word: 'complain', meaningAr: 'يشتكي', example: 'I want to complain about the noise.', ipa: 'kəmˈpleɪn' },
      { word: 'complaint', meaningAr: 'شكوى', example: 'She wrote a complaint to the shop.' },
      { word: 'wrong', meaningAr: 'خطأ / غير صحيح', example: 'You gave me the wrong bag.' },
      { word: 'return', meaningAr: 'يعيد (سلعة)', example: 'Can I return this shirt, please?' },
      { word: 'exchange', meaningAr: 'يستبدل', example: 'I want to exchange it for a bigger size.' },
      { word: 'stopped working', meaningAr: 'توقف عن العمل', example: 'My new watch stopped working yesterday.' },
      { word: 'apologize', meaningAr: 'يعتذر', example: 'The waiter apologized for the wait.' },
      { word: 'politely', meaningAr: 'بأدب', example: 'Please complain politely, not angrily.' },
      { word: 'trouble', meaningAr: 'إزعاج / متاعب', example: 'I am sorry for the trouble.' },
      { word: 'patience', meaningAr: 'صبر', example: 'Thank you for your patience.' },
      { word: 'product', meaningAr: 'منتج', example: 'This product is very small.' },
      { word: 'receipt', meaningAr: 'إيصال', example: 'Here is my receipt from Monday.' },
    ],
    scenario: [
      { en: 'Excuse me, I want to complain.', ar: 'عفوا، أريد أن أشكو.', d: 1 },
      { en: 'I want to complain about the service.', ar: 'أريد أن أشكو الخدمة.', d: 1 },
      { en: 'This is not what I ordered.', ar: 'هذا ليس ما طلبته.', d: 1 },
      { en: 'I am very sorry about that.', ar: 'أنا آسف جدا بشأن ذلك.', d: 2 },
      { en: 'I ordered a large shirt, not a small one.', ar: 'طلبت قميصا كبيرا، وليس صغيرا.', d: 2 },
      { en: 'My new watch stopped working yesterday.', ar: 'توقفت ساعتي الجديدة عن العمل أمس.', d: 2 },
      { en: 'It stopped working after two days.', ar: 'توقف عن العمل بعد يومين.', d: 1 },
      { en: 'Can I exchange this for a new one?', ar: 'هل يمكنني استبدال هذا بآخر جديد؟', d: 2 },
      { en: 'I would like a refund, please.', ar: 'أريد استرداد المال من فضلك.', d: 1 },
      { en: 'Here is my receipt.', ar: 'هذا إيصالي.', d: 1 },
      { en: 'Please talk to the manager.', ar: 'من فضلك تحدث إلى المدير.', d: 2 },
      { en: 'The manager will call you tomorrow.', ar: 'سيتصل بك المدير غدا.', d: 2 },
      { en: 'We are not happy with the room.', ar: 'لسنا سعداء بالغرفة.', d: 2 },
      { en: 'The delivery is late again.', ar: 'التوصيل متأخر مرة أخرى.', d: 2 },
      { en: 'I am sorry for the trouble.', ar: 'أعتذر عن الإزعاج.', d: 2 },
      { en: 'Why is my bill so high?', ar: 'لماذا فاتورتي مرتفعة إلى هذا الحد؟', d: 3 },
      { en: 'Did you check the box before you left the shop?', ar: 'هل فحصت الصندوق قبل مغادرتك المتجر؟', d: 3 },
      { en: 'Thank you for your patience.', ar: 'شكرا على صبركم.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I want to complain about the {N}.', arTmpl: 'أريد أن أشكو {N_ar}.',
        slots: {
          N: [
            { en: 'noise', ar: 'الضجيج' }, { en: 'service', ar: 'الخدمة' },
            { en: 'food', ar: 'الطعام' }, { en: 'delivery', ar: 'التوصيل' },
            { en: 'price', ar: 'السعر' }, { en: 'quality', ar: 'الجودة' },
            { en: 'waiter', ar: 'النادل' }, { en: 'product', ar: 'المنتج' },
          ],
        },
        tags: ['complaints', 'polite-language'], d: 1, limit: 8,
      },
      {
        tmpl: 'This is not what I {V}.', arTmpl: 'هذا ليس ما {V_ar}.',
        slots: {
          V: [
            { en: 'ordered', ar: 'طلبت' }, { en: 'paid for', ar: 'دفعت ثمنه' },
          ],
        },
        tags: ['complaints', 'past-simple'], d: 1, limit: 2,
      },
      {
        tmpl: 'It stopped working {T}.', arTmpl: 'توقف عن العمل {T_ar}.',
        slots: {
          T: [
            { en: 'yesterday', ar: 'أمس' }, { en: 'this morning', ar: 'هذا الصباح' },
            { en: 'last night', ar: 'الليلة الماضية' }, { en: 'after two days', ar: 'بعد يومين' },
            { en: 'on Friday', ar: 'يوم الجمعة' },
          ],
        },
        tags: ['complaints', 'past-simple'], d: 2, limit: 5,
      },
      {
        tmpl: 'Can I {V} this, please?', arTmpl: 'هل يمكنني {V_ar} هذا من فضلك؟',
        slots: {
          V: [
            { en: 'return', ar: 'أن أعيد' }, { en: 'exchange', ar: 'أن أستبدل' },
          ],
        },
        tags: ['complaints', 'requests'], d: 1, limit: 2,
      },
      {
        tmpl: 'I would like a {R}, please.', arTmpl: 'أريد {R_ar} من فضلك.',
        slots: {
          R: [
            { en: 'refund', ar: 'استرداد المال' }, { en: 'replacement', ar: 'بديلا' },
            { en: 'discount', ar: 'خصما' }, { en: 'receipt', ar: 'إيصالا' },
          ],
        },
        tags: ['complaints', 'requests'], d: 2, limit: 4,
      },
      {
        tmpl: 'The {N} is {Q}.', arTmpl: '{N_ar} {Q_ar}.',
        slots: {
          N: [
            { en: 'food', ar: 'الطعام', a: 'too cold', aa: 'بارد جدا' },
            { en: 'room', ar: 'الغرفة', a: 'too small', aa: 'صغيرة جدا' },
            { en: 'delivery', ar: 'التوصيل', a: 'too late', aa: 'متأخر جدا' },
            { en: 'bag', ar: 'الحقيبة', a: 'damaged', aa: 'متضررة' },
            { en: 'screen', ar: 'الشاشة', a: 'scratched', aa: 'مخدوشة' },
          ],
          Q: (x) => [{ en: x.N.a, ar: x.N.aa }],
        },
        tags: ['complaints', 'adjectives'], d: 2, limit: 5,
      },
      {
        tmpl: '{S} {V} to the manager {T}.', arTmpl: '{S_ar} {V_ar} إلى المدير {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPast('talk'), ar: B.arPast('talk', x.S.agr) }],
          T: [
            { en: 'yesterday', ar: 'أمس' }, { en: 'this morning', ar: 'هذا الصباح' },
            { en: 'after lunch', ar: 'بعد الغداء' },
          ],
        },
        tags: ['complaints', 'past-simple'], d: 2, limit: 9,
      },
    ],
    fills: [
      { en: 'I want to complain about the noise.', ar: 'أريد أن أشكو الضجيج.', word: 'complain', hint: 'يشتكي' },
      { en: 'This is not what I ordered.', ar: 'هذا ليس ما طلبته.', word: 'ordered', hint: 'فعل ماض' },
      { en: 'It stopped working after two days.', ar: 'توقف عن العمل بعد يومين.', word: 'stopped', hint: 'توقف' },
      { en: 'I would like a refund, please.', ar: 'أريد استرداد المال من فضلك.', word: 'refund', hint: 'استرداد المال' },
      { en: 'Here is my receipt.', ar: 'هذا إيصالي.', word: 'receipt', hint: 'إيصال' },
      { en: 'Please talk to the manager.', ar: 'من فضلك تحدث إلى المدير.', word: 'manager', hint: 'مدير' },
      { en: 'The delivery is late again.', ar: 'التوصيل متأخر مرة أخرى.', word: 'late', hint: 'متأخر' },
      { en: 'Did you check the box before you left the shop?', ar: 'هل فحصت الصندوق قبل مغادرتك المتجر؟', word: 'check', hint: 'فحص' },
    ],
    orders: [
      { en: 'Excuse me, this is not what I ordered.', ar: 'عفوا، هذا ليس ما طلبته.' },
      { en: 'I want a refund for this phone.', ar: 'أريد استرداد ثمن هذا الهاتف.' },
      { en: 'Can I exchange this shirt, please?', ar: 'هل يمكنني استبدال هذا القميص من فضلك؟' },
      { en: 'The kettle stopped working last night.', ar: 'توقفت الغلاية عن العمل الليلة الماضية.' },
      { en: 'The manager will call you in the afternoon.', ar: 'سيتصل بك المدير بعد الظهر.' },
      { en: 'We are not happy with this product.', ar: 'لسنا سعداء بهذا المنتج.' },
    ],
    mc: [
      { question: 'You received the wrong size. You say:', options: ['This is not what I ordered.', 'Thank you very much.', 'See you later.', 'How old are you?'], answerIndex: 0, ar: 'وصلتك المقاسات الخاطئة، فتقول:' },
      { question: '"Refund" means:', options: ['استرداد المال', 'سلعة جديدة', 'خصم بسيط', 'فاتورة'], answerIndex: 0, ar: 'ماذا يعني refund؟' },
      { question: 'Which complaint is polite?', options: ['I would like a refund, please.', 'Give me my money now!', 'You are stupid!', 'I hate this shop!'], answerIndex: 0, ar: 'أي شكوى مهذبة؟' },
      { question: 'Your new kettle stopped working. What is true?', options: ['It does not work now.', 'It works very well.', 'It is in the kitchen.', 'It is new again.'], answerIndex: 0, ar: 'توقفت غلايتك الجديدة عن العمل، فأي شيء صحيح؟' },
    ],
  },

  /* ================= lesson 87 — Booking a Service Appointment ================= */
  {
    num: 87,
    tags: ['appointments', 'services', 'phone-calls'],
    objectives: [
      'Book a technician visit on the phone',
      'Ask about availability and confirm the day and time',
      'Reschedule an appointment politely',
    ],
    grammar: {
      explanation: 'To arrange a service, say "I want to book a technician visit" or "I want to make an appointment". Ask about free times with "Are you available on...?" plus a day: "Are you available on Tuesday?". Confirm the plan with will: "The technician will arrive between nine and eleven". Change the plan with "Can we make it on Wednesday instead?" and confirm facts in the past simple: "I called the service center yesterday". Remember: on + day, at + time.',
      explanationAr: 'لترتيب خدمة قل I want to book a technician visit أو I want to make an appointment. واسأل عن الأوقات المتاحة بـ Are you available on...؟ ثم اذكر اليوم: Are you available on Tuesday؟ وأكد الخطة بـ will: The technician will arrive between nine and eleven. وغيّر الموعد بـ Can we make it on Wednesday instead؟ وأكد الوقائع بالماضي البسيط: I called the service center yesterday. وتذكر: on مع الأيام وat مع الساعات.',
      examples: [
        { en: 'I want to book a technician visit.', ar: 'أريد أن أحجز زيارة فني.' },
        { en: 'Are you available on Tuesday?', ar: 'هل أنت متاح يوم الثلاثاء؟' },
        { en: 'The technician will arrive between nine and eleven.', ar: 'سيصل الفني بين التاسعة والحادية عشرة.' },
      ],
    },
    vocabulary: [
      { word: 'appointment', meaningAr: 'موعد', example: 'I have an appointment this morning.' },
      { word: 'book', meaningAr: 'يحجز', example: 'I want to book a technician visit.' },
      { word: 'available', meaningAr: 'متاح', example: 'Are you available on Tuesday?', ipa: 'əˈveɪləbl' },
      { word: 'confirm', meaningAr: 'يؤكد', example: 'I need to confirm the appointment.' },
      { word: 'reschedule', meaningAr: 'يغير الموعد', example: 'Can I reschedule to next Monday?' },
      { word: 'visit', meaningAr: 'زيارة', example: 'The visit takes about one hour.' },
      { word: 'service center', meaningAr: 'مركز الخدمة', example: 'I called the service center yesterday.' },
      { word: 'slot', meaningAr: 'فترة متاحة', example: 'We have a free slot at ten.' },
      { word: 'between', meaningAr: 'بين', example: 'The technician will come between nine and ten.' },
      { word: 'call back', meaningAr: 'يعيد الاتصال', example: 'I will call back after lunch.' },
      { word: 'instead', meaningAr: 'بدلا من ذلك', example: 'Can we meet on Friday instead?' },
      { word: 'fridge', meaningAr: 'ثلاجة', example: 'My fridge is not cooling well.' },
    ],
    scenario: [
      { en: 'Hello, I want to book a technician visit.', ar: 'مرحبا، أريد أن أحجز زيارة فني.', d: 1 },
      { en: 'My washing machine is making a strange noise.', ar: 'غسالتي تصدر صوتا غريبا.', d: 2 },
      { en: 'Are you available on Tuesday morning?', ar: 'هل أنت متاح صباح الثلاثاء؟', d: 1 },
      { en: 'Yes, we have a free slot at ten.', ar: 'نعم، لدينا فترة فارغة في العاشرة.', d: 2 },
      { en: 'Can you come in the morning, please?', ar: 'هل يمكنك المجيء في الصباح من فضلك؟', d: 1 },
      { en: 'The technician will arrive between nine and eleven.', ar: 'سيصل الفني بين التاسعة والحادية عشرة.', d: 2 },
      { en: 'Can we make it on Wednesday instead?', ar: 'هل يمكن أن نجعله يوم الأربعاء بدلا من ذلك؟', d: 2 },
      { en: 'No problem, we will come on Thursday.', ar: 'لا مشكلة، سنأتي يوم الخميس.', d: 2 },
      { en: 'I need to confirm the appointment.', ar: 'أحتاج إلى تأكيد الموعد.', d: 1 },
      { en: 'Please write down my new address.', ar: 'من فضلك سجل عنواني الجديد.', d: 2 },
      { en: 'I am going to stay at home all morning.', ar: 'سأبقى في المنزل كل الصباح.', d: 2 },
      { en: 'We do not work on Fridays.', ar: 'لا نعمل أيام الجمعة.', d: 2 },
      { en: 'I called the service center yesterday.', ar: 'اتصلت بمركز الخدمة أمس.', d: 2 },
      { en: 'Did they confirm the time?', ar: 'هل أكدوا الوقت؟', d: 2 },
      { en: 'Can I reschedule to next Monday?', ar: 'هل يمكنني تغيير الموعد إلى الاثنين القادم؟', d: 2 },
      { en: 'You will get a message before the visit.', ar: 'ستصلك رسالة قبل الزيارة.', d: 3 },
      { en: 'The visits are free for one year.', ar: 'الزيارات مجانية لمدة سنة.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Are you {A} on {Day}?', arTmpl: 'هل أنت {A_ar} يوم {Day_ar}؟',
        slots: {
          A: [
            { en: 'available', ar: 'متاح' }, { en: 'free', ar: 'فارغ' },
            { en: 'in the office', ar: 'في المكتب' },
          ],
          Day: B.DAYS,
        },
        tags: ['appointments', 'questions'], d: 1, limit: 12,
      },
      {
        tmpl: 'I want to {V} an appointment {T}.', arTmpl: 'أريد أن {V_ar} موعدا {T_ar}.',
        slots: {
          V: [
            { en: 'book', ar: 'أن أحجز' }, { en: 'confirm', ar: 'أن أؤكد' },
            { en: 'change', ar: 'أن أغير' },
          ],
          T: [
            { en: 'for Monday', ar: 'يوم الاثنين' }, { en: 'for tomorrow morning', ar: 'لصباح الغد' },
            { en: 'for next week', ar: 'للأسبوع القادم' }, { en: 'for Thursday', ar: 'يوم الخميس' },
          ],
        },
        tags: ['appointments', 'requests'], d: 1, limit: 10,
      },
      {
        tmpl: 'The technician will come {T}.', arTmpl: 'سيأتي الفني {T_ar}.',
        slots: {
          T: [
            { en: 'tomorrow morning', ar: 'صباح الغد' }, { en: 'on Tuesday', ar: 'يوم الثلاثاء' },
            { en: 'between nine and ten', ar: 'بين التاسعة والعاشرة' },
            { en: 'in the afternoon', ar: 'بعد الظهر' },
            { en: 'on Thursday at four', ar: 'يوم الخميس في الرابعة' },
            { en: 'this weekend', ar: 'في نهاية هذا الأسبوع' },
          ],
        },
        tags: ['appointments', 'future'], d: 2, limit: 6,
      },
      {
        tmpl: '{S} {V} a technician visit {T}.', arTmpl: '{S_ar} {V_ar} زيارة فني {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPast('book'), ar: B.arPast('book', x.S.agr) }],
          T: [
            { en: 'yesterday', ar: 'أمس' }, { en: 'last week', ar: 'الأسبوع الماضي' },
            { en: 'this morning', ar: 'هذا الصباح' },
          ],
        },
        tags: ['appointments', 'past-simple'], d: 2, limit: 10,
      },
      {
        tmpl: 'Can we make it {T} instead?', arTmpl: 'هل يمكن أن نجعله {T_ar} بدلا من ذلك؟',
        slots: {
          T: [
            { en: 'on Wednesday', ar: 'يوم الأربعاء' }, { en: 'in the morning', ar: 'في الصباح' },
            { en: 'on Friday', ar: 'يوم الجمعة' }, { en: 'after five', ar: 'بعد الخامسة' },
          ],
        },
        tags: ['appointments', 'requests'], d: 2, limit: 4,
      },
    ],
    fills: [
      { en: 'I want to book a technician visit.', ar: 'أريد أن أحجز زيارة فني.', word: 'book', hint: 'يحجز' },
      { en: 'Are you available on Tuesday?', ar: 'هل أنت متاح يوم الثلاثاء؟', word: 'available', hint: 'متاح' },
      { en: 'I need to confirm the appointment.', ar: 'أحتاج إلى تأكيد الموعد.', word: 'confirm', hint: 'يؤكد' },
      { en: 'The technician will arrive between nine and eleven.', ar: 'سيصل الفني بين التاسعة والحادية عشرة.', word: 'between', hint: 'بين' },
      { en: 'I called the service center yesterday.', ar: 'اتصلت بمركز الخدمة أمس.', word: 'called', hint: 'فعل ماض' },
      { en: 'Can I reschedule to next Monday?', ar: 'هل يمكنني تغيير الموعد إلى الاثنين القادم؟', word: 'reschedule', hint: 'يغير الموعد' },
      { en: 'Please write down my new address.', ar: 'من فضلك سجل عنواني الجديد.', word: 'address', hint: 'عنوان' },
      { en: 'You will get a message before the visit.', ar: 'ستصلك رسالة قبل الزيارة.', word: 'message', hint: 'رسالة' },
    ],
    orders: [
      { en: 'I want to book a visit for my fridge.', ar: 'أريد أن أحجز زيارة لثلاجتي.' },
      { en: 'Are you available on Saturday morning?', ar: 'هل أنت متاح صباح السبت؟' },
      { en: 'The technician will arrive before noon.', ar: 'سيصل الفني قبل الظهر.' },
      { en: 'I am calling to confirm the appointment.', ar: 'أتصل لتأكيد الموعد.' },
      { en: 'The center does not open on Fridays.', ar: 'المركز لا يفتح أيام الجمعة.' },
      { en: 'Can we make it earlier, please?', ar: 'هل يمكن أن نجعله مبكرا من فضلك؟' },
    ],
    mc: [
      { question: 'You want a technician to visit your home. You book a:', options: ['service appointment', 'birthday party', 'bus ticket', 'hotel room'], answerIndex: 0, ar: 'تريد زيارة فني لمنزلك، فتحجز:' },
      { question: '"Are you available on Tuesday?" asks about:', options: ['free time', 'the price', 'the address', 'the weather'], answerIndex: 0, ar: 'سؤال Are you available on Tuesday؟ يستفسر عن:' },
      { question: 'You must move the appointment to another day. You:', options: ['reschedule it', 'forget it', 'pay for it', 'lose it'], answerIndex: 0, ar: 'تريد نقل الموعد إلى يوم آخر، فأنت:' },
      { question: 'Which sentence confirms the visit?', options: ['The appointment is on Tuesday at ten.', 'The appointment is expensive.', 'The technician is tall.', 'The visit is in Morocco.'], answerIndex: 0, ar: 'أي جملة تؤكد الموعد؟' },
    ],
  },
];
