/* ============================================================
   v2 section data — s04-b2.js
   Food, Shopping & Services · lessons 88–90
   (Banks and ATMs, At the Post Office, At a Government Office)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 88 — Banks and ATMs ================= */
  {
    num: 88,
    tags: ['banks', 'money', 'services'],
    objectives: [
      'Withdraw and deposit money at an ATM or a bank',
      'Ask about the exchange rate and open an account',
      'Report a problem like "The machine ate my card"',
    ],
    grammar: {
      explanation: 'At a bank or ATM, say what you want with "I want to" + the verb: "I want to withdraw some money", "I want to deposit this in my account". Give warnings with Do not + verb: "Do not share your PIN code". Talk about the past with the past simple: "I took two hundred dollars from the ATM yesterday", "I paid the fee". Promise with will: "The bank will give you a new card". Ask about money with "What is the exchange rate for the dollar today?"',
      explanationAr: 'في البنك أو الصراف الآلي قل ما تريد بـ I want to + الفعل: I want to withdraw some money، وI want to deposit this in my account. واذكر التحذيرات بـ Do not + الفعل: Do not share your PIN code. وتحدث عن الماضي بالماضي البسيط: I took two hundred dollars from the ATM yesterday، وI paid the fee. وعد بالحل بـ will: The bank will give you a new card. واسأل عن العملة بـ What is the exchange rate for the dollar today؟',
      examples: [
        { en: 'I need to withdraw some money.', ar: 'أحتاج إلى سحب بعض المال.' },
        { en: 'Do not share your PIN code with anyone.', ar: 'لا تشارك رمزك السري مع أحد.' },
        { en: 'The machine ate my card!', ar: 'الآلة ابتلعت بطاقتي!' },
      ],
    },
    vocabulary: [
      { word: 'withdraw', meaningAr: 'يسحب (مالا)', example: 'I want to withdraw some money.', ipa: 'wɪðˈdrɔː' },
      { word: 'deposit', meaningAr: 'يودع (مالا)', example: 'I want to deposit this in my account.' },
      { word: 'PIN code', meaningAr: 'رمز سري', example: 'Enter your PIN code, please.' },
      { word: 'exchange rate', meaningAr: 'سعر الصرف', example: 'What is the exchange rate today?' },
      { word: 'account', meaningAr: 'حساب بنكي', example: 'I want to open a new account.' },
      { word: 'balance', meaningAr: 'الرصيد', example: 'My balance is very low this month.' },
      { word: 'machine', meaningAr: 'آلة', example: 'The machine ate my card!' },
      { word: 'branch', meaningAr: 'فرع (بنك)', example: 'The bank branch opens at eight.' },
      { word: 'insert', meaningAr: 'يُدخل', example: 'Insert your card and enter your PIN code.' },
      { word: 'fee', meaningAr: 'رسوم', example: 'I paid the bank fee yesterday.' },
      { word: 'out of service', meaningAr: 'خارج الخدمة', example: 'This ATM is out of service.' },
      { word: 'dollar', meaningAr: 'دولار', example: 'The exchange rate for the dollar is good.' },
    ],
    scenario: [
      { en: 'I need to withdraw some money.', ar: 'أحتاج إلى سحب بعض المال.', d: 1 },
      { en: 'Where is the nearest ATM?', ar: 'أين أقرب صراف آلي؟', d: 1 },
      { en: 'Insert your card and enter your PIN code.', ar: 'أدخل بطاقتك وأدخل رمزك السري.', d: 2 },
      { en: 'Do not share your PIN code with anyone.', ar: 'لا تشارك رمزك السري مع أحد.', d: 2 },
      { en: 'The machine ate my card!', ar: 'الآلة ابتلعت بطاقتي!', d: 1 },
      { en: 'Do not worry, we will help you.', ar: 'لا تقلق، سنساعدك.', d: 2 },
      { en: 'The ATM is out of service.', ar: 'الصراف الآلي خارج الخدمة.', d: 2 },
      { en: 'I want to deposit this money in my account.', ar: 'أريد أن أودع هذا المال في حسابي.', d: 2 },
      { en: 'What is the exchange rate today?', ar: 'ما سعر الصرف اليوم؟', d: 1 },
      { en: 'The exchange rate for the dollar is very good.', ar: 'سعر صرف الدولار جيد جدا.', d: 3 },
      { en: 'I want to open a new account.', ar: 'أريد أن أفتح حسابا جديدا.', d: 2 },
      { en: 'I paid the bank fee yesterday.', ar: 'دفعت رسوم البنك أمس.', d: 2 },
      { en: 'The bank will give you a new card on Monday.', ar: 'سيعطيك البنك بطاقة جديدة يوم الاثنين.', d: 2 },
      { en: 'My balance is very low this month.', ar: 'رصيدي منخفض جدا هذا الشهر.', d: 3 },
      { en: 'Is there a bank branch near the station?', ar: 'هل يوجد فرع للبنك قرب المحطة؟', d: 2 },
      { en: 'You can check your balance on the screen.', ar: 'يمكنك معرفة رصيدك على الشاشة.', d: 2 },
      { en: 'I did not get any money from the machine.', ar: 'لم أحصل على أي مال من الآلة.', d: 2 },
      { en: 'The bank branches open at eight in the morning.', ar: 'فروع البنك تفتح الثامنة صباحا.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I want to {V} some money.', arTmpl: 'أريد أن {V_ar} بعض المال.',
        slots: {
          V: [
            { en: 'withdraw', ar: 'أن أسحب' }, { en: 'deposit', ar: 'أن أودع' },
            { en: 'change', ar: 'أن أصرف' }, { en: 'save', ar: 'أن أدخر' },
          ],
        },
        tags: ['banks', 'money'], d: 1, limit: 4,
      },
      {
        tmpl: 'I forgot my {N}.', arTmpl: 'نسيت {N_ar}.',
        slots: {
          N: [
            { en: 'PIN code', ar: 'رمزي السري' }, { en: 'card', ar: 'بطاقتي' },
            { en: 'account number', ar: 'رقم حسابي' }, { en: 'wallet', ar: 'محفظتي' },
          ],
        },
        tags: ['banks', 'problems'], d: 2, limit: 4,
      },
      {
        tmpl: '{S} {V} {A} from the ATM yesterday.', arTmpl: '{S_ar} {V_ar} {A_ar} من الصراف الآلي أمس.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPast('take'), ar: B.arPast('take', x.S.agr) }],
          A: [
            { en: 'two hundred dollars', ar: 'مئتي دولار' },
            { en: 'one hundred dollars', ar: 'مئة دولار' },
            { en: 'fifty dollars', ar: 'خمسين دولارا' },
            { en: 'some cash', ar: 'بعض النقد' },
          ],
        },
        tags: ['banks', 'past-simple'], d: 2, limit: 12,
      },
      {
        tmpl: 'Do not {V} your PIN code.', arTmpl: 'لا {V_ar} رمزك السري.',
        slots: {
          V: [
            { en: 'share', ar: 'تشارك' }, { en: 'write down', ar: 'تكتب' },
            { en: 'forget', ar: 'تنسى' },
          ],
        },
        tags: ['banks', 'warnings'], d: 1, limit: 3,
      },
      {
        tmpl: 'What is the exchange rate for the {C} today?', arTmpl: 'ما سعر صرف {C_ar} اليوم؟',
        slots: {
          C: [
            { en: 'dollar', ar: 'الدولار' }, { en: 'euro', ar: 'اليورو' },
            { en: 'pound', ar: 'الجنيه' }, { en: 'riyal', ar: 'الريال' },
          ],
        },
        tags: ['banks', 'money', 'questions'], d: 2, limit: 4,
      },
      {
        tmpl: 'The bank will {V} you a new {N} {T}.', arTmpl: '{V_ar} لك البنك {N_ar} {A_ar} {T_ar}.',
        slots: {
          V: [
            { en: 'send', ar: 'سيرسل' }, { en: 'give', ar: 'سيعطي' },
          ],
          N: [
            { en: 'card', ar: 'بطاقة', adj: 'جديدة' },
            { en: 'PIN code', ar: 'رمز سري', adj: 'جديد' },
          ],
          A: (x) => [{ en: 'new', ar: x.N.adj }],
          T: [
            { en: 'today', ar: 'اليوم' }, { en: 'tomorrow', ar: 'غدا' },
            { en: 'on Monday', ar: 'يوم الاثنين' },
          ],
        },
        tags: ['banks', 'future'], d: 2, limit: 8,
      },
      {
        tmpl: 'Is there an {P} near here?', arTmpl: 'هل يوجد {P_ar} قريب من هنا؟',
        slots: {
          P: [
            { en: 'ATM', ar: 'صراف آلي' }, { en: 'exchange office', ar: 'مكتب صرف' },
          ],
        },
        tags: ['banks', 'places', 'questions'], d: 1, limit: 2,
      },
    ],
    fills: [
      { en: 'I need to withdraw some money.', ar: 'أحتاج إلى سحب بعض المال.', word: 'withdraw', hint: 'يسحب' },
      { en: 'Insert your card and enter your PIN code.', ar: 'أدخل بطاقتك وأدخل رمزك السري.', word: 'card', hint: 'بطاقة' },
      { en: 'The machine ate my card!', ar: 'الآلة ابتلعت بطاقتي!', word: 'machine', hint: 'آلة' },
      { en: 'What is the exchange rate today?', ar: 'ما سعر الصرف اليوم؟', word: 'rate', hint: 'سعر الصرف' },
      { en: 'I want to open a new account.', ar: 'أريد أن أفتح حسابا جديدا.', word: 'account', hint: 'حساب بنكي' },
      { en: 'My balance is very low this month.', ar: 'رصيدي منخفض جدا هذا الشهر.', word: 'balance', hint: 'الرصيد' },
      { en: 'I paid the bank fee yesterday.', ar: 'دفعت رسوم البنك أمس.', word: 'fee', hint: 'رسوم' },
      { en: 'The ATM is out of service.', ar: 'الصراف الآلي خارج الخدمة.', word: 'service', hint: 'خدمة' },
    ],
    orders: [
      { en: 'I need to withdraw some money.', ar: 'أحتاج إلى سحب بعض المال.' },
      { en: 'Do not give your PIN code to anyone.', ar: 'لا تعطِ رمزك السري لأحد.' },
      { en: 'The machine kept my card inside.', ar: 'احتجزت الآلة بطاقتي بالداخل.' },
      { en: 'What is the exchange rate for the euro?', ar: 'ما سعر صرف اليورو؟' },
      { en: 'The bank will give you a new card on Friday.', ar: 'سيعطيك البنك بطاقة جديدة يوم الجمعة.' },
      { en: 'I want to deposit two hundred dollars.', ar: 'أريد أن أودع مئتي دولار.' },
    ],
    mc: [
      { question: 'Where can you get money without a teller?', options: ['an ATM', 'a kitchen', 'a classroom', 'a garden'], answerIndex: 0, ar: 'أين تسحب المال دون موظف؟' },
      { question: 'Your PIN code is like a:', options: ['secret password', 'gift', 'letter', 'ticket'], answerIndex: 0, ar: 'رمزك السري يشبه:' },
      { question: '"The machine ate my card" means:', options: ['البطاقة علقت في الآلة', 'الآلة أكلت نقودي', 'نسيت بطاقتي في البيت', 'بطاقتي جديدة'], answerIndex: 0, ar: 'ماذا تعني The machine ate my card؟' },
      { question: 'You put money into your account. This is a:', options: ['deposit', 'withdraw', 'change', 'refund'], answerIndex: 0, ar: 'تضع المال في حسابك، وهذا يسمى:' },
    ],
  },

  /* ================= lesson 89 — At the Post Office ================= */
  {
    num: 89,
    tags: ['post-office', 'mail', 'services'],
    objectives: [
      'Send a letter or a parcel at the post office',
      'Ask for stamps, airmail and a PO box',
      'Ask about the weight and the delivery time',
    ],
    grammar: {
      explanation: 'At the post office, say what you want to send with "I want to send" + the thing + to + the city: "I want to send a letter to Cairo". Ask about quantity with "How many stamps do I need?". Choose the mail type with "by airmail", "by normal mail". Talk about the future with will: "It will arrive in five days", and about the past with the past simple: "I sent a parcel to Amman last week". Use going to for your plan: "We are going to mail the invitations tomorrow".',
      explanationAr: 'في مكتب البريد قل ما تريد إرساله بـ I want to send + الشيء + to + المدينة: I want to send a letter to Cairo. واسأل عن الكمية بـ How many stamps do I need؟ وحدد نوع البريد بـ by airmail أو by normal mail. وتحدث عن المستقبل بـ will: It will arrive in five days، وعن الماضي بالماضي البسيط: I sent a parcel to Amman last week. واستخدم going to لخطتك: We are going to mail the invitations tomorrow.',
      examples: [
        { en: 'I want to send this letter to Cairo.', ar: 'أريد أن أرسل هذه الرسالة إلى القاهرة.' },
        { en: 'How many stamps do I need?', ar: 'كم طابرا أحتاج؟' },
        { en: 'It will arrive in five days.', ar: 'سيصل بعد خمسة أيام.' },
      ],
    },
    vocabulary: [
      { word: 'post office', meaningAr: 'مكتب البريد', example: 'The post office closes at five.' },
      { word: 'send', meaningAr: 'يرسل', example: 'I want to send a parcel to my son.' },
      { word: 'letter', meaningAr: 'رسالة', example: 'This letter needs one more stamp.' },
      { word: 'parcel', meaningAr: 'طرد', example: 'The parcel weighs two kilos.' },
      { word: 'stamp', meaningAr: 'طابع بريد', example: 'I need three stamps, please.' },
      { word: 'airmail', meaningAr: 'بريد جوي', example: 'Airmail is faster but more expensive.' },
      { word: 'envelope', meaningAr: 'مظلفة', example: 'Please write the address on the envelope.', ipa: 'ˈenvəloʊp' },
      { word: 'PO box', meaningAr: 'صندوق بريد', example: 'Can I have a PO box, please?' },
      { word: 'tracking number', meaningAr: 'رقم تتبع', example: 'Here is your tracking number.' },
      { word: 'weigh', meaningAr: 'يزن', example: 'The clerk will weigh the parcel.' },
      { word: 'deliver', meaningAr: 'يوصل (بريدا)', example: 'The postman delivers our mail at noon.' },
      { word: 'postman', meaningAr: 'ساعي البريد', example: 'The postman comes every morning.' },
    ],
    scenario: [
      { en: 'I want to send this letter to Cairo.', ar: 'أريد أن أرسل هذه الرسالة إلى القاهرة.', d: 1 },
      { en: 'How many stamps do I need?', ar: 'كم طابرا أحتاج؟', d: 1 },
      { en: 'I need three stamps, please.', ar: 'أحتاج ثلاثة طوابع من فضلك.', d: 1 },
      { en: 'Do you want to send it by airmail?', ar: 'هل تريد إرساله بالبريد الجوي؟', d: 1 },
      { en: 'Yes, airmail, please.', ar: 'نعم، بالبريد الجوي من فضلك.', d: 1 },
      { en: 'Airmail is faster but more expensive.', ar: 'البريد الجوي أسرع لكنه أغلى.', d: 2 },
      { en: 'I want to send a parcel to my son.', ar: 'أريد أن أرسل طردا إلى ابني.', d: 1 },
      { en: 'The parcel weighs two kilos.', ar: 'يزن الطرد كيلوغرامين.', d: 2 },
      { en: 'Please write the address on the envelope.', ar: 'من فضلك اكتب العنوان على المظلفة.', d: 2 },
      { en: 'Did you write the postal code?', ar: 'هل كتبت الرمز البريدي؟', d: 2 },
      { en: 'Can I have a PO box, please?', ar: 'هل يمكنني الحصول على صندوق بريد من فضلك؟', d: 2 },
      { en: 'Here is your tracking number.', ar: 'هذا رقم التتبع الخاص بك.', d: 2 },
      { en: 'You can track your parcel online.', ar: 'يمكنك تتبع طردك عبر الإنترنت.', d: 2 },
      { en: 'It will arrive in five days.', ar: 'سيصل بعد خمسة أيام.', d: 1 },
      { en: 'I sent a parcel to Amman last week.', ar: 'أرسلت طردا إلى عمّان الأسبوع الماضي.', d: 2 },
      { en: 'This letter does not have enough stamps.', ar: 'هذه الرسالة لا تحمل طوابع كافية.', d: 2 },
      { en: 'The post office closes at five.', ar: 'يغلق مكتب البريد في الخامسة.', d: 1 },
      { en: 'We are going to mail the invitations tomorrow.', ar: 'سنرسل الدعوات غدا بالبريد.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I want to send a {I} to {C}.', arTmpl: 'أريد أن أرسل {I_ar} إلى {C_ar}.',
        slots: {
          I: [
            { en: 'letter', ar: 'رسالة' }, { en: 'parcel', ar: 'طردا' },
            { en: 'postcard', ar: 'بطاقة بريدية' }, { en: 'package', ar: 'حزمة' },
          ],
          C: B.CITIES,
        },
        tags: ['post-office', 'mail'], d: 1, limit: 16,
      },
      {
        tmpl: 'I need {N}, please.', arTmpl: 'أحتاج {N_ar} من فضلك.',
        slots: {
          N: [
            { en: 'one stamp', ar: 'طابعا بريديا واحدا' },
            { en: 'two stamps', ar: 'طابعين' },
            { en: 'three stamps', ar: 'ثلاثة طوابع' },
            { en: 'five stamps', ar: 'خمسة طوابع' },
            { en: 'a large envelope', ar: 'مظلفة كبيرة' },
          ],
        },
        tags: ['post-office', 'requests'], d: 1, limit: 5,
      },
      {
        tmpl: 'It will arrive {T}.', arTmpl: 'سيصل {T_ar}.',
        slots: {
          T: [
            { en: 'in two days', ar: 'بعد يومين' }, { en: 'in a week', ar: 'بعد أسبوع' },
            { en: 'next Monday', ar: 'الاثنين القادم' }, { en: 'on Friday', ar: 'يوم الجمعة' },
            { en: 'tomorrow', ar: 'غدا' },
          ],
        },
        tags: ['post-office', 'future'], d: 2, limit: 5,
      },
      {
        tmpl: '{S} {V} a parcel {T}.', arTmpl: '{S_ar} {V_ar} طردا {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPast('send'), ar: B.arPast('send', x.S.agr) }],
          T: [
            { en: 'last week', ar: 'الأسبوع الماضي' }, { en: 'two days ago', ar: 'قبل يومين' },
            { en: 'before Eid', ar: 'قبل العيد' },
          ],
        },
        tags: ['post-office', 'past-simple'], d: 2, limit: 10,
      },
      {
        tmpl: 'Do you want to send it by {M}?', arTmpl: 'هل تريد إرساله بالبريد {M_ar}؟',
        slots: {
          M: [
            { en: 'airmail', ar: 'الجوي' }, { en: 'express mail', ar: 'السريع' },
            { en: 'normal mail', ar: 'العادي' },
          ],
        },
        tags: ['post-office', 'questions'], d: 1, limit: 3,
      },
    ],
    fills: [
      { en: 'I want to send this letter to Cairo.', ar: 'أريد أن أرسل هذه الرسالة إلى القاهرة.', word: 'send', hint: 'يرسل' },
      { en: 'How many stamps do I need?', ar: 'كم طابرا أحتاج؟', word: 'stamps', hint: 'طوابع' },
      { en: 'Do you want to send it by airmail?', ar: 'هل تريد إرساله بالبريد الجوي؟', word: 'airmail', hint: 'بريد جوي' },
      { en: 'Please write the address on the envelope.', ar: 'من فضلك اكتب العنوان على المظلفة.', word: 'envelope', hint: 'مظلفة' },
      { en: 'Here is your tracking number.', ar: 'هذا رقم التتبع الخاص بك.', word: 'tracking', hint: 'تتبع' },
      { en: 'The parcel weighs two kilos.', ar: 'يزن الطرد كيلوغرامين.', word: 'weighs', hint: 'يزن' },
      { en: 'This letter does not have enough stamps.', ar: 'هذه الرسالة لا تحمل طوابع كافية.', word: 'enough', hint: 'كافية' },
      { en: 'Can I have a PO box, please?', ar: 'هل يمكنني الحصول على صندوق بريد من فضلك؟', word: 'box', hint: 'صندوق بريد' },
    ],
    orders: [
      { en: 'I want to send a gift to my sister.', ar: 'أريد أن أرسل هدية إلى أختي.' },
      { en: 'I prefer airmail. It is faster.', ar: 'أفضل البريد الجوي، فهو أسرع.' },
      { en: 'Please write the address in clear letters.', ar: 'من فضلك اكتب العنوان بحروف واضحة.' },
      { en: 'It will arrive before the weekend.', ar: 'سيصل قبل نهاية الأسبوع.' },
      { en: 'She sent a letter to Dubai last week.', ar: 'أرسلت رسالة إلى دبي الأسبوع الماضي.' },
      { en: 'This envelope needs one more stamp.', ar: 'هذه المظلفة تحتاج طابعا آخر.' },
    ],
    mc: [
      { question: 'Where do you buy stamps?', options: ['at the post office', 'at the bakery', 'at the hospital', 'at the school'], answerIndex: 0, ar: 'أين تشتري الطوابع؟' },
      { question: '"Airmail" travels by:', options: ['plane', 'bus', 'boat', 'bike'], answerIndex: 0, ar: 'البريد الجوي ينتقل بواسطة:' },
      { question: 'What do you use to follow your parcel online?', options: ['the tracking number', 'the price', 'the stamp', 'the envelope'], answerIndex: 0, ar: 'بماذا تتبع طردك عبر الإنترنت؟' },
      { question: '"PO box" is:', options: ['صندوق بريدي خاص بك', 'طاولة في المكتب', 'نوع من الطوابع', 'شحنة ثقيلة'], answerIndex: 0, ar: 'ماذا يعني PO box؟' },
    ],
  },

  /* ================= lesson 90 — At a Government Office ================= */
  {
    num: 90,
    tags: ['government', 'paperwork', 'services'],
    objectives: [
      'Ask where to go and which window to use',
      'Fill in a form and talk about documents',
      'Wait for your turn and follow simple instructions',
    ],
    grammar: {
      explanation: 'In a government office, workers give short instructions: "Please go to window number three", "Fill in this form", "Sign here". Say what you need with need + to + verb: "I need to renew my passport", or need + noun: "I need a photocopy of my ID card". Talk about obligation with must: "You must sign the form". The clerk promises with will: "The clerk will check your papers first". For finished actions use the past simple: "I filled in the form at home yesterday".',
      explanationAr: 'في المكتب الحكومي يعطي الموظفون تعليمات قصيرة: Please go to window number three، وFill in this form، وSign here. وقل ما تحتاجه بـ need + to + الفعل: I need to renew my passport، أو need + اسم: I need a photocopy of my ID card. وتحدث عن الوجوب بـ must: You must sign the form. ويعد الموظف بـ will: The clerk will check your papers first. وللأفعال المنتهية استخدم الماضي البسيط: I filled in the form at home yesterday.',
      examples: [
        { en: 'Please go to window number three.', ar: 'من فضلك اذهب إلى الشباك رقم ثلاثة.' },
        { en: 'Do you have all the documents?', ar: 'هل معك كل المستندات؟' },
        { en: 'The clerk will check your papers first.', ar: 'سيفحص الموظف أوراقك أولا.' },
      ],
    },
    vocabulary: [
      { word: 'government office', meaningAr: 'مكتب حكومي', example: 'The government office opens at eight.' },
      { word: 'form', meaningAr: 'نموذج / استمارة', example: 'Fill in this form with black ink.' },
      { word: 'fill in', meaningAr: 'يملأ (نموذجا)', example: 'Please fill in your name here.' },
      { word: 'document', meaningAr: 'مستند / وثيقة', example: 'Do you have all the documents?' },
      { word: 'window', meaningAr: 'شباك خدمة', example: 'Please go to window number three.' },
      { word: 'turn', meaningAr: 'الدور', example: 'Take a number and wait for your turn.' },
      { word: 'photocopy', meaningAr: 'نسخة مصورة', example: 'I need a photocopy of my passport.' },
      { word: 'passport', meaningAr: 'جواز سفر', example: 'I need to renew my passport.' },
      { word: 'ID card', meaningAr: 'بطاقة هوية', example: 'I did not bring my ID card.' },
      { word: 'sign', meaningAr: 'يوقع', example: 'Sign here and here, please.', ipa: 'saɪn' },
      { word: 'clerk', meaningAr: 'موظف خدمة', example: 'The clerk will check your papers.' },
      { word: 'submit', meaningAr: 'يقدم (طلبا)', example: 'Submit the form at window three.' },
    ],
    scenario: [
      { en: 'Good morning, welcome to the passport office.', ar: 'صباح الخير، أهلا بك في مكتب الجوازات.', d: 1 },
      { en: 'Please go to window number three.', ar: 'من فضلك اذهب إلى الشباك رقم ثلاثة.', d: 1 },
      { en: 'I need to renew my passport.', ar: 'أحتاج إلى تجديد جواز سفري.', d: 2 },
      { en: 'Fill in this form with black ink.', ar: 'املأ هذا النموذج بحبر أسود.', d: 1 },
      { en: 'Do you have all the documents?', ar: 'هل معك كل المستندات؟', d: 1 },
      { en: 'No, I need two photocopies.', ar: 'لا، أحتاج نسختين مصورتين.', d: 2 },
      { en: 'Where can I make photocopies?', ar: 'أين يمكنني عمل نسخ مصورة؟', d: 2 },
      { en: 'Take a number and wait for your turn.', ar: 'خذ رقما وانتظر دورك.', d: 1 },
      { en: 'You are next, sir.', ar: 'أنت التالي يا سيدي.', d: 2 },
      { en: 'Sign here and here, please.', ar: 'وقع هنا وهنا من فضلك.', d: 2 },
      { en: 'I did not bring my ID card.', ar: 'لم أحضر بطاقة هويتي.', d: 2 },
      { en: 'You cannot submit the form without it.', ar: 'لا يمكنك تقديم النموذج بدونها.', d: 3 },
      { en: 'The clerk will check your papers first.', ar: 'سيفحص الموظف أوراقك أولا.', d: 2 },
      { en: 'Where do I pay the fees?', ar: 'أين أدفع الرسوم؟', d: 2 },
      { en: 'At the cashier window, number six.', ar: 'في شباك الصندوق، رقم ستة.', d: 3 },
      { en: 'I filled in the form at home yesterday.', ar: 'ملأت النموذج في المنزل أمس.', d: 2 },
      { en: 'The office will open at eight tomorrow.', ar: 'سيفتح المكتب في الثامنة غدا.', d: 3 },
      { en: 'The lines are long on Sundays.', ar: 'الطوابير طويلة أيام الأحد.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Please go to window number {N}.', arTmpl: 'من فضلك اذهب إلى الشباك رقم {N_ar}.',
        slots: {
          N: [
            { en: 'one', ar: 'واحد' }, { en: 'two', ar: 'اثنين' },
            { en: 'three', ar: 'ثلاثة' }, { en: 'four', ar: 'أربعة' },
            { en: 'five', ar: 'خمسة' }, { en: 'six', ar: 'ستة' },
            { en: 'seven', ar: 'سبعة' },
          ],
        },
        tags: ['government', 'instructions'], d: 1, limit: 7,
      },
      {
        tmpl: 'You need {D} for the form.', arTmpl: 'تحتاج {D_ar} للنموذج.',
        slots: {
          D: [
            { en: 'two photocopies', ar: 'نسختين مصورتين' },
            { en: 'your passport', ar: 'جواز سفرك' },
            { en: 'your ID card', ar: 'بطاقة هويتك' },
            { en: 'a black pen', ar: 'قلم أسود' },
          ],
        },
        tags: ['government', 'documents'], d: 2, limit: 4,
      },
      {
        tmpl: 'The {W} will {V} your {O}.', arTmpl: '{V_ar} {W_ar} {O_ar}.',
        slots: {
          W: [
            { en: 'clerk', ar: 'الموظف' }, { en: 'officer', ar: 'الموظف المختص' },
          ],
          V: [
            { en: 'check', ar: 'سيفحص' }, { en: 'stamp', ar: 'سيختم' },
          ],
          O: [
            { en: 'papers', ar: 'أوراقك' }, { en: 'form', ar: 'نموذجك' },
            { en: 'passport', ar: 'جواز سفرك' },
          ],
        },
        tags: ['government', 'future'], d: 2, limit: 10,
      },
      {
        tmpl: 'I need a photocopy of {D}.', arTmpl: 'أحتاج نسخة مصورة من {D_ar}.',
        slots: {
          D: [
            { en: 'my passport', ar: 'جواز سفري' }, { en: 'my ID card', ar: 'بطاقة هويتي' },
            { en: 'my contract', ar: 'عقدي' }, { en: 'the certificate', ar: 'الشهادة' },
          ],
        },
        tags: ['government', 'documents'], d: 1, limit: 4,
      },
      {
        tmpl: '{S} {V} the documents {T}.', arTmpl: '{S_ar} {V_ar} المستندات {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPast('bring'), ar: B.arPast('bring', x.S.agr) }],
          T: [
            { en: 'yesterday', ar: 'أمس' }, { en: 'this morning', ar: 'هذا الصباح' },
            { en: 'last week', ar: 'الأسبوع الماضي' },
          ],
        },
        tags: ['government', 'past-simple'], d: 2, limit: 10,
      },
      {
        tmpl: 'You must {V} the form {T}.', arTmpl: 'يجب أن {V_ar} النموذج {T_ar}.',
        slots: {
          V: [
            { en: 'sign', ar: 'أن توقع على' }, { en: 'check', ar: 'أن تتحقق من' },
            { en: 'submit', ar: 'أن تقدم' },
          ],
          T: [
            { en: 'today', ar: 'اليوم' }, { en: 'before Friday', ar: 'قبل الجمعة' },
            { en: 'at window three', ar: 'عند الشباك رقم ثلاثة' },
          ],
        },
        tags: ['government', 'obligation'], d: 2, limit: 9,
      },
    ],
    fills: [
      { en: 'Please go to window number three.', ar: 'من فضلك اذهب إلى الشباك رقم ثلاثة.', word: 'window', hint: 'شباك الخدمة' },
      { en: 'Fill in this form with black ink.', ar: 'املأ هذا النموذج بحبر أسود.', word: 'form', hint: 'نموذج' },
      { en: 'Do you have all the documents?', ar: 'هل معك كل المستندات؟', word: 'documents', hint: 'مستندات' },
      { en: 'I need a photocopy of my passport.', ar: 'أحتاج نسخة مصورة من جواز سفري.', word: 'photocopy', hint: 'نسخة مصورة' },
      { en: 'Take a number and wait for your turn.', ar: 'خذ رقما وانتظر دورك.', word: 'turn', hint: 'الدور' },
      { en: 'Sign here and here, please.', ar: 'وقع هنا وهنا من فضلك.', word: 'Sign', hint: 'يوقع' },
      { en: 'The clerk will check your papers first.', ar: 'سيفحص الموظف أوراقك أولا.', word: 'clerk', hint: 'موظف الخدمة' },
      { en: 'I need to renew my passport.', ar: 'أحتاج إلى تجديد جواز سفري.', word: 'renew', hint: 'يجدد' },
    ],
    orders: [
      { en: 'Please go to the information desk first.', ar: 'من فضلك اذهب إلى مكتب الاستعلامات أولا.' },
      { en: 'You must fill in the form in capital letters.', ar: 'يجب أن تملأ النموذج بحروف كبيرة.' },
      { en: 'You cannot submit the form online.', ar: 'لا يمكنك تقديم النموذج عبر الإنترنت.' },
      { en: 'The clerk will check your papers first.', ar: 'سيفحص الموظف أوراقك أولا.' },
      { en: 'I did not bring my passport today.', ar: 'لم أحضر جواز سفري اليوم.' },
      { en: 'Take a number and wait for your name.', ar: 'خذ رقما وانتظر اسمك.' },
    ],
    mc: [
      { question: 'Which window do you go to? Look at the:', options: ['window number', 'window glass', 'wall clock', 'floor'], answerIndex: 0, ar: 'إلى أي شباك تذهب؟ انظر إلى:' },
      { question: '"Fill in the form" means:', options: ['اكتب بياناتك في النموذج', 'اشترِ النموذج', 'ارمِ النموذج', 'انسخ النموذج مرتين'], answerIndex: 0, ar: 'ماذا يعني Fill in the form؟' },
      { question: 'Many people are waiting. You must:', options: ['wait for your turn', 'push everyone', 'shout loudly', 'go home'], answerIndex: 0, ar: 'أنتظر كثيرون، فعليك أن:' },
      { question: 'A photocopy is:', options: ['a paper copy', 'a new passport', 'a long line', 'a black pen'], answerIndex: 0, ar: 'النسخة المصورة هي:' },
    ],
  },
];
