/* ============================================================
   v2 section data — s05-c1.js
   Mobility & Travel · lessons 110–113
   110 Hotel Check-Out · 111 Online Bookings ·
   112 Travel Insurance · 113 Customs
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 110 — Hotel Check-Out ================= */
  {
    num: 110,
    tags: ['hotel', 'checkout'],
    objectives: [
      'Check out of a hotel politely',
      'Ask about extra charges on your bill',
      'Arrange a taxi to your next stop',
    ],
    grammar: {
      explanation: 'At check-out you usually use the present continuous for now ("I am checking out") and the past simple for finished actions ("Did you use the minibar?", "We did not touch the minibar"). Ask about extra costs with "Is there a charge for ...?". Polite requests use "Can you ... please?": "Can you call me a taxi, please?". Room numbers come after the word room: "room 204". Pay attention to the bill, the receipt and the key card before you leave the lobby.',
      explanationAr: 'عند تسجيل الخروج نستخدم عادة المضارع المستمر للحدث الحاضر: I am checking out، والماضي البسيط للأحداث المنتهية: Did you use the minibar؟ وWe did not touch the minibar. وللسؤال عن التكاليف الإضافية قل Is there a charge for ...؟ والطلبات المهذبة بصيغة Can you ... please؟ مثل Can you call me a taxi, please؟ ويأتي رقم الغرفة بعد كلمة room مثل room 204. وتأكد من الحساب والإيصال وبطاقة المفتاح قبل مغادرة البهو.',
      examples: [
        { en: 'I am checking out of room 204.', ar: 'أسجل الخروج من الغرفة ٢٠٤.' },
        { en: 'Is there a charge for the minibar?', ar: 'هل هناك رسم على الثلاجة الصغيرة؟' },
        { en: 'Can you call me a taxi, please?', ar: 'هل تتصل لي بسيارة أجرة من فضلك؟' },
      ],
    },
    vocabulary: [
      { word: 'check out', meaningAr: 'يسجل الخروج', example: 'We check out at eleven.', ipa: 'tʃɛk aʊt' },
      { word: 'key card', meaningAr: 'بطاقة المفتاح', example: 'Here is the key card, thank you.' },
      { word: 'minibar', meaningAr: 'ثلاجة صغيرة في الغرفة', example: 'The minibar prices are high.' },
      { word: 'bill', meaningAr: 'حساب / فاتورة', example: 'The bill looks correct now.' },
      { word: 'charge', meaningAr: 'رسم / مبلغ مطلوب', example: 'Is there a charge for breakfast?' },
      { word: 'receipt', meaningAr: 'إيصال', example: 'Here is your receipt, sir.' },
      { word: 'lobby', meaningAr: 'بهو الفندق', example: 'Wait for me in the lobby.' },
      { word: 'checkout time', meaningAr: 'موعد تسجيل الخروج', example: 'The checkout time is before twelve.' },
      { word: 'shuttle', meaningAr: 'حافلة نقل', example: 'The shuttle goes to the airport.' },
      { word: 'stay', meaningAr: 'إقامة', example: 'My stay was very pleasant.' },
      { word: 'pleasant', meaningAr: 'ممتع / طيب', example: 'We had a pleasant weekend.' },
      { word: 'taxi', meaningAr: 'سيارة أجرة', example: 'Can you call me a taxi, please?' },
    ],
    scenario: [
      { en: 'Good morning. I am checking out of room 204.', ar: 'صباح الخير. أسجل الخروج من الغرفة ٢٠٤.', d: 1 },
      { en: 'Here is the key card, thank you.', ar: 'هذه بطاقة المفتاح، شكرا لك.', d: 1 },
      { en: 'Did you use the minibar last night?', ar: 'هل استخدمت الثلاجة الصغيرة الليلة الماضية؟', d: 2 },
      { en: 'No, we did not touch the minibar.', ar: 'لا، لم نلمس الثلاجة الصغيرة.', d: 2 },
      { en: 'Is there a charge for the airport shuttle?', ar: 'هل هناك رسم على حافلة المطار؟', d: 2 },
      { en: 'Yes, it is twelve dollars per car.', ar: 'نعم، إنها اثنا عشر دولارا للسيارة.', d: 2 },
      { en: 'Can I pay with my credit card?', ar: 'هل أستطيع الدفع ببطاقتي الائتمانية؟', d: 2 },
      { en: 'Of course. Here is your receipt.', ar: 'بالتأكيد. هذا إيصالك.', d: 1 },
      { en: 'The bill looks correct now.', ar: 'يبدو الحساب صحيحا الآن.', d: 1 },
      { en: 'Can you call me a taxi, please?', ar: 'هل تتصل لي بسيارة أجرة من فضلك؟', d: 2 },
      { en: 'The taxi will be here in ten minutes.', ar: 'ستصل سيارة الأجرة بعد عشر دقائق.', d: 2 },
      { en: 'We enjoyed our stay very much.', ar: 'استمتعنا بإقامتنا كثيرا.', d: 2 },
      { en: 'Please leave your luggage here until noon.', ar: 'من فضلك اترك أمتعتك هنا حتى الظهر.', d: 3 },
      { en: 'The checkout time is before twelve.', ar: 'موعد تسجيل الخروج قبل الثانية عشرة.', d: 1 },
      { en: 'My stay was short but very pleasant.', ar: 'كانت إقامتي قصيرة لكنها ممتعة جدا.', d: 2 },
      { en: 'The minibar prices are on the door.', ar: 'أسعار الثلاجة الصغيرة على الباب.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I am checking out of room {N}.', arTmpl: 'أسجل الخروج من الغرفة {N_ar}.',
        slots: {
          N: [
            { en: '101', ar: '١٠١' }, { en: '105', ar: '١٠٥' }, { en: '112', ar: '١١٢' },
            { en: '204', ar: '٢٠٤' }, { en: '310', ar: '٣١٠' }, { en: '415', ar: '٤١٥' },
            { en: '512', ar: '٥١٢' }, { en: '606', ar: '٦٠٦' }, { en: '708', ar: '٧٠٨' },
            { en: '811', ar: '٨١١' }, { en: '902', ar: '٩٠٢' }, { en: '1204', ar: '١٢٠٤' },
          ],
        },
        tags: ['hotel', 'checkout'], d: 1, limit: 12,
      },
      {
        tmpl: 'Is there a charge for the {S}?', arTmpl: 'هل هناك رسم على {S_ar}؟',
        slots: {
          S: [
            { en: 'minibar', ar: 'الثلاجة الصغيرة' }, { en: 'parking', ar: 'مواقف السيارات' },
            { en: 'breakfast', ar: 'الإفطار' }, { en: 'luggage storage', ar: 'حفظ الأمتعة' },
            { en: 'internet', ar: 'الإنترنت' }, { en: 'gym', ar: 'الصالة الرياضية' },
          ],
        },
        tags: ['hotel', 'money'], d: 2, limit: 6,
      },
      {
        tmpl: 'Can you call me a taxi to the {P}?', arTmpl: 'هل يمكنك طلب سيارة أجرة إلى {P_ar}؟',
        slots: {
          P: [
            { en: 'airport', ar: 'المطار' }, { en: 'train station', ar: 'محطة القطار' },
            { en: 'city center', ar: 'وسط المدينة' }, { en: 'bus terminal', ar: 'محطة الباصات' },
            { en: 'port', ar: 'الميناء' },
          ],
        },
        tags: ['hotel', 'taxi'], d: 2, limit: 5,
      },
      {
        tmpl: 'Can I pay {M}?', arTmpl: 'هل أستطيع الدفع {M_ar}؟',
        slots: {
          M: [
            { en: 'by credit card', ar: 'بالبطاقة الائتمانية' }, { en: 'in cash', ar: 'نقدا' },
            { en: 'with a debit card', ar: 'ببطاقة الخصم' }, { en: 'in euros', ar: 'باليورو' },
          ],
        },
        tags: ['hotel', 'money'], d: 2, limit: 4,
      },
      {
        tmpl: 'The bill is {A} dollars.', arTmpl: 'الحساب {A_ar} دولارا.',
        slots: {
          A: [
            { en: 'sixty', ar: 'ستين' }, { en: 'eighty-five', ar: 'خمسة وثمانين' },
            { en: 'ninety', ar: 'تسعين' }, { en: 'one hundred', ar: 'مئة' },
            { en: 'one hundred twenty', ar: 'مئة وعشرين' }, { en: 'two hundred', ar: 'مئتين' },
          ],
        },
        tags: ['hotel', 'money'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'I am checking out of room 204.', ar: 'أسجل الخروج من الغرفة ٢٠٤.', word: 'checking', hint: 'مضارع مستمر' },
      { en: 'Did you use the minibar last night?', ar: 'هل استخدمت الثلاجة الصغيرة الليلة الماضية؟', word: 'minibar' },
      { en: 'Can you call me a taxi, please?', ar: 'هل تتصل لي بسيارة أجرة من فضلك؟', word: 'taxi' },
      { en: 'Is there a charge for the airport shuttle?', ar: 'هل هناك رسم على حافلة المطار؟', word: 'charge', hint: 'رسم' },
      { en: 'Of course. Here is your receipt.', ar: 'بالتأكيد. هذا إيصالك.', word: 'receipt' },
      { en: 'Please leave your luggage here until noon.', ar: 'من فضلك اترك أمتعتك هنا حتى الظهر.', word: 'luggage' },
      { en: 'The bill includes the city tax.', ar: 'الحساب يشمل ضريبة المدينة.', word: 'includes' },
      { en: 'Here is the key card of room 310.', ar: 'هذه بطاقة مفتاح الغرفة ٣١٠.', word: 'key' },
    ],
    orders: [
      { en: 'I am checking out this morning.', ar: 'أسجل الخروج هذا الصباح.' },
      { en: 'Here is the key card, thank you.', ar: 'هذه بطاقة المفتاح، شكرا لك.' },
      { en: 'Can you call me a taxi, please?', ar: 'هل تتصل لي بسيارة أجرة من فضلك؟' },
      { en: 'We enjoyed our stay very much.', ar: 'استمتعنا بإقامتنا كثيرا.' },
      { en: 'The bill looks correct now.', ar: 'يبدو الحساب صحيحا الآن.' },
      { en: 'Is there a charge for the parking?', ar: 'هل هناك رسم على مواقف السيارات؟' },
    ],
    mc: [
      { question: 'You leave the hotel today. You say:', options: ['I am checking out.', 'I am checking in.', 'I am booking a room.', 'I am staying tonight.'], answerIndex: 0, ar: 'تغادر الفندق اليوم، فتقول:' },
      { question: 'What is a minibar?', options: ['a small fridge with drinks in the room', 'a big bed', 'a hotel bus', 'a kind of receipt'], answerIndex: 0, ar: 'ما هي الثلاجة الصغيرة (minibar)؟' },
      { question: 'Where do you return the key card?', options: ['at the reception desk', 'in the minibar', 'in the taxi', 'at the airport'], answerIndex: 0, ar: 'أين تعيد بطاقة المفتاح؟' },
      { question: 'Which sentence is a polite request?', options: ['Can you call me a taxi, please?', 'Taxi now!', 'You call taxi.', 'Call!'], answerIndex: 0, ar: 'أي جملة تعبر عن طلب مهذب؟' },
      { question: '"The bill is ninety dollars" means:', options: ['الحساب تسعون دولارا', 'الإيصال تسعون دولارا', 'الغرفة تسعون دولارا', 'الإقامة مجانية'], answerIndex: 0, ar: 'ما معنى The bill is ninety dollars؟' },
    ],
  },

  /* ================= lesson 111 — Online Bookings ================= */
  {
    num: 111,
    tags: ['booking', 'online'],
    objectives: [
      'Book a room or ticket on a website',
      'Talk about confirmation emails and cancellation',
      'Choose to pay now or at the hotel',
    ],
    grammar: {
      explanation: 'To talk about bookings, use the past simple for the action ("I booked a room online last night") and the present for rules ("You can pay now or at the hotel"). A confirmation email proves the booking; if it does not arrive, check the spam folder. "Free cancellation" means you can cancel without money. Use "for" with durations: "The booking is for two nights". Do not forget to save the booking number before you close the website.',
      explanationAr: 'للحديث عن الحجوزات استخدم الماضي البسيط للفعل: I booked a room online last night، والمضارع للقواعد: You can pay now or at the hotel. وبريد التأكيد يثبت الحجز، وإذا لم يصلك فتحقق من مجلد الرسائل غير المرغوبة. وfree cancellation تعني أنه يمكنك الإلغاء دون مال. واستخدم for مع المدد: The booking is for two nights. ولا تنس حفظ رقم الحجز قبل إغلاق الموقع.',
      examples: [
        { en: 'I booked a room online last night.', ar: 'حجزت غرفة عبر الإنترنت الليلة الماضية.' },
        { en: 'I did not receive a confirmation email.', ar: 'لم أستلم بريدا بالتأكيد.' },
        { en: 'You can pay now or at the hotel.', ar: 'يمكنك الدفع الآن أو في الفندق.' },
      ],
    },
    vocabulary: [
      { word: 'online', meaningAr: 'عبر الإنترنت', example: 'I book all my trips online.' },
      { word: 'book', meaningAr: 'يحجز', example: 'Did you book the apartment?', ipa: 'bʊk' },
      { word: 'website', meaningAr: 'موقع إلكتروني', example: 'The website was easy to use.' },
      { word: 'confirmation email', meaningAr: 'بريد بالتأكيد', example: 'The confirmation email arrived late.' },
      { word: 'spam folder', meaningAr: 'مجلد الرسائل غير المرغوبة', example: 'Check your spam folder, please.' },
      { word: 'cancellation', meaningAr: 'إلغاء', example: 'Is there free cancellation?' },
      { word: 'guest', meaningAr: 'ضيف / نزيل', example: 'How many guests are staying?' },
      { word: 'booking number', meaningAr: 'رقم الحجز', example: 'Please save the booking number.' },
      { word: 'compare', meaningAr: 'يقارن', example: 'Did you compare the prices online?' },
      { word: 'cheaper', meaningAr: 'أرخص', example: 'This hotel is ten dollars cheaper.' },
      { word: 'dates', meaningAr: 'تواريخ', example: 'My dates are from the fifth to the eighth.' },
      { word: 'payment', meaningAr: 'دفع', example: 'The payment is at the front desk.' },
    ],
    scenario: [
      { en: 'I booked a room online last night.', ar: 'حجزت غرفة عبر الإنترنت الليلة الماضية.', d: 1 },
      { en: 'The website was easy to use.', ar: 'كان الموقع سهل الاستخدام.', d: 1 },
      { en: 'I chose a hotel near the old city.', ar: 'اخترت فندقا قريبا من المدينة القديمة.', d: 2 },
      { en: 'Did you compare the prices online?', ar: 'هل قارنت الأسعار عبر الإنترنت؟', d: 2 },
      { en: 'Yes, this hotel is ten dollars cheaper.', ar: 'نعم، هذا الفندق أرخص بعشرة دولارات.', d: 2 },
      { en: 'I did not receive a confirmation email.', ar: 'لم أستلم بريدا بالتأكيد.', d: 2 },
      { en: 'Check your spam folder, please.', ar: 'تحقق من مجلد الرسائل غير المرغوبة من فضلك.', d: 2 },
      { en: 'Here it is. The email arrived late.', ar: 'ها هو. وصل البريد متأخرا.', d: 2 },
      { en: 'Is there free cancellation?', ar: 'هل الإلغاء مجاني؟', d: 1 },
      { en: 'Yes, you can cancel until tomorrow.', ar: 'نعم، يمكنك الإلغاء حتى الغد.', d: 2 },
      { en: 'You can pay now or at the hotel.', ar: 'يمكنك الدفع الآن أو في الفندق.', d: 1 },
      { en: 'I prefer to pay at the hotel.', ar: 'أفضل الدفع في الفندق.', d: 1 },
      { en: 'The booking is for two nights.', ar: 'الحجز لمدة ليلتين.', d: 1 },
      { en: 'How many guests are staying?', ar: 'كم ضيفا سيقيمون؟', d: 1 },
      { en: 'Two adults and one child.', ar: 'شخصان بالغان وطفل واحد.', d: 2 },
      { en: 'My dates are from the fifth to the eighth.', ar: 'تواريخي من الخامس إلى الثامن.', d: 3 },
      { en: 'Do not forget to save the booking number.', ar: 'لا تنس حفظ رقم الحجز.', d: 2 },
      { en: 'I book all my trips online now.', ar: 'أحجز كل رحلاتي عبر الإنترنت الآن.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I booked a {R} online.', arTmpl: 'حجزت {R_ar} عبر الإنترنت.',
        slots: {
          R: [
            { en: 'hotel room', ar: 'غرفة فندقية' }, { en: 'double room', ar: 'غرفة مزدوجة' },
            { en: 'single room', ar: 'غرفة مفردة' }, { en: 'family apartment', ar: 'شقة عائلية' },
            { en: 'train ticket', ar: 'تذكرة قطار' }, { en: 'city tour', ar: 'جولة في المدينة' },
          ],
        },
        tags: ['booking', 'online'], d: 1, limit: 6,
      },
      {
        tmpl: 'Is there free {C}?', arTmpl: 'هل يوجد {C_ar} مجانا؟',
        slots: {
          C: [
            { en: 'breakfast', ar: 'إفطار' }, { en: 'parking', ar: 'مواقف للسيارات' },
            { en: 'wifi', ar: 'واي فاي' }, { en: 'water bottles', ar: 'زجاجات ماء' },
            { en: 'airport pickup', ar: 'استقبال من المطار' },
          ],
        },
        tags: ['booking', 'questions'], d: 2, limit: 5,
      },
      {
        tmpl: 'My booking is for {N} nights.', arTmpl: 'حجزي لمدة {N_ar}.',
        slots: {
          N: [
            { en: 'two', ar: 'ليلتين' }, { en: 'three', ar: 'ثلاث ليال' },
            { en: 'four', ar: 'أربع ليال' }, { en: 'five', ar: 'خمس ليال' },
            { en: 'six', ar: 'ست ليال' }, { en: 'seven', ar: 'سبع ليال' },
          ],
        },
        tags: ['booking', 'numbers'], d: 1, limit: 6,
      },
      {
        tmpl: 'I will pay {W}.', arTmpl: 'سأدفع {W_ar}.',
        slots: {
          W: [
            { en: 'now, online', ar: 'الآن عبر الإنترنت' }, { en: 'at the hotel', ar: 'في الفندق' },
            { en: 'later, at the front desk', ar: 'لاحقا في مكتب الاستقبال' },
            { en: 'half now and half later', ar: 'نصفه الآن ونصفه لاحقا' },
          ],
        },
        tags: ['booking', 'money'], d: 2, limit: 4,
      },
      {
        tmpl: 'The {R} is {A} dollars cheaper.', arTmpl: '{R_ar} أرخص بـ{A_ar} دولارا.',
        slots: {
          R: [
            { en: 'single room', ar: 'الغرفة المفردة' }, { en: 'double room', ar: 'الغرفة المزدوجة' },
            { en: 'family apartment', ar: 'الشقة العائلية' },
          ],
          A: [
            { en: 'five', ar: 'خمسة' }, { en: 'ten', ar: 'عشرة' },
            { en: 'fifteen', ar: 'خمسة عشر' }, { en: 'twenty', ar: 'عشرين' },
          ],
        },
        tags: ['booking', 'money'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'I booked a room online last night.', ar: 'حجزت غرفة عبر الإنترنت الليلة الماضية.', word: 'booked', hint: 'فعل ماض' },
      { en: 'I did not receive a confirmation email.', ar: 'لم أستلم بريدا بالتأكيد.', word: 'receive' },
      { en: 'You can pay now or at the hotel.', ar: 'يمكنك الدفع الآن أو في الفندق.', word: 'pay' },
      { en: 'Is there free cancellation?', ar: 'هل الإلغاء مجاني؟', word: 'free' },
      { en: 'Do not forget to save the booking number.', ar: 'لا تنس حفظ رقم الحجز.', word: 'save' },
      { en: 'Check your spam folder, please.', ar: 'تحقق من مجلد الرسائل غير المرغوبة من فضلك.', word: 'spam' },
      { en: 'My dates are from the fifth to the eighth.', ar: 'تواريخي من الخامس إلى الثامن.', word: 'dates' },
      { en: 'Yes, this hotel is ten dollars cheaper.', ar: 'نعم، هذا الفندق أرخص بعشرة دولارات.', word: 'cheaper' },
    ],
    orders: [
      { en: 'I did not receive a confirmation email.', ar: 'لم أستلم بريدا بالتأكيد.' },
      { en: 'You can pay now or at the hotel.', ar: 'يمكنك الدفع الآن أو في الفندق.' },
      { en: 'The booking is for two nights.', ar: 'الحجز لمدة ليلتين.' },
      { en: 'Did you compare the prices online?', ar: 'هل قارنت الأسعار عبر الإنترنت؟' },
      { en: 'How many guests are staying?', ar: 'كم ضيفا سيقيمون؟' },
      { en: 'The website was easy to use.', ar: 'كان الموقع سهل الاستخدام.' },
    ],
    mc: [
      { question: 'A confirmation email tells you:', options: ['that the booking is done', 'the weather', 'the taxi price', 'your seat number on the plane'], answerIndex: 0, ar: 'بريد التأكيد يخبرك بأن:' },
      { question: '"Free cancellation" means you can:', options: ['cancel without paying money', 'pay twice', 'change hotels only', 'book for free'], answerIndex: 0, ar: 'الإلغاء المجاني يعني أنه يمكنك:' },
      { question: 'Where can a missing confirmation email hide?', options: ['in the spam folder', 'in the minibar', 'at the airport', 'in your suitcase'], answerIndex: 0, ar: 'أين قد يختفي بريد التأكيد؟' },
      { question: '"The booking is for two nights" means:', options: ['الحجز لمدة ليلتين', 'الحجز للغرفة الثانية', 'الحجز مجاني', 'الحجز ملغى'], answerIndex: 0, ar: 'ما معنى The booking is for two nights؟' },
    ],
  },

  /* ================= lesson 112 — Travel Insurance ================= */
  {
    num: 112,
    tags: ['insurance', 'travel'],
    objectives: [
      'Ask what a travel insurance policy covers',
      'Report a problem and start a claim',
      'Use present perfect and if-clauses to talk about travel problems',
    ],
    grammar: {
      explanation: 'Travel insurance language uses "cover" for protection: "Does my policy cover medical costs?". The present perfect connects the past to now: "I have never made a claim before", "She has already sent the claim online". If-clauses describe possible problems: "If your flight is delayed, you can claim extra costs". Modals give advice: "You should keep all your receipts", "Should I buy insurance for a short trip?". A claim needs a policy number and documents.',
      explanationAr: 'لغة تأمين السفر تستخدم فعل cover للحماية: Does my policy cover medical costs؟ ويصل المضارع التام بين الماضي والحاضر: I have never made a claim before، وShe has already sent the claim online. وجمل الشرط تصف مشاكل محتملة: If your flight is delayed, you can claim extra costs. وأفعال القدرة تعطي النصيحة: You should keep all your receipts، وShould I buy insurance for a short trip؟ وتتطلب المطالبة رقم الوثيقة ووثائق رسمية.',
      examples: [
        { en: 'Does my policy cover lost baggage compensation?', ar: 'هل تغطي وثيقتي تعويض فقدان الأمتعة؟' },
        { en: 'I have never made a claim before.', ar: 'لم أقدم مطالبة من قبل.' },
        { en: 'If your flight is delayed, you can claim extra costs.', ar: 'إذا تأخرت رحلتك، يمكنك المطالبة بالتكاليف الإضافية.' },
      ],
    },
    vocabulary: [
      { word: 'insurance', meaningAr: 'تأمين', example: 'Travel insurance is important.', ipa: 'ɪnˈʃʊərəns' },
      { word: 'policy', meaningAr: 'وثيقة تأمين', example: 'What is your policy number?' },
      { word: 'cover', meaningAr: 'يغطي', example: 'Does my policy cover medical costs?' },
      { word: 'medical costs', meaningAr: 'التكاليف الطبية', example: 'Medical costs abroad can be high.' },
      { word: 'compensation', meaningAr: 'تعويض', example: 'The compensation arrived a month later.' },
      { word: 'claim', meaningAr: 'مطالبة', example: 'I have never made a claim before.' },
      { word: 'claim form', meaningAr: 'استمارة المطالبة', example: 'Could you send me the claim form, please?' },
      { word: 'delayed', meaningAr: 'متأخر', example: 'Our flight was delayed for hours.' },
      { word: 'stolen', meaningAr: 'مسروق', example: 'My camera was stolen in the market.' },
      { word: 'receipts', meaningAr: 'إيصالات', example: 'You should keep all your receipts.' },
      { word: 'documents', meaningAr: 'وثائق', example: 'The agent asked for my documents.' },
      { word: 'abroad', meaningAr: 'في الخارج', example: 'She studies abroad every summer.' },
    ],
    scenario: [
      { en: 'Travel insurance is important when you travel far.', ar: 'تأمين السفر مهم عندما تسافر بعيدا.', d: 1 },
      { en: 'It can cover medical costs if you get sick.', ar: 'يمكنه تغطية التكاليف الطبية إذا مرضت.', d: 2 },
      { en: 'Does your policy cover lost baggage compensation?', ar: 'هل تغطي وثيقتك تعويض فقدان الأمتعة؟', d: 2 },
      { en: 'Yes, it pays two thousand dollars for lost bags.', ar: 'نعم، تدفع ألفين من الدولارات عن الحقائب المفقودة.', d: 2 },
      { en: 'What is your policy number?', ar: 'ما رقم وثيقتك؟', d: 1 },
      { en: 'The policy number is on my insurance card.', ar: 'رقم الوثيقة على بطاقة التأمين.', d: 1 },
      { en: 'I have never made a claim before.', ar: 'لم أقدم مطالبة من قبل.', d: 2 },
      { en: 'If your flight is delayed, you can claim extra costs.', ar: 'إذا تأخرت رحلتك، يمكنك المطالبة بالتكاليف الإضافية.', d: 3 },
      { en: 'My bag did not arrive, so I need a claim form.', ar: 'حقيتي لم تصل، لذا أحتاج استمارة مطالبة.', d: 2 },
      { en: 'Could you send me the claim form, please?', ar: 'هل ترسل لي استمارة المطالبة من فضلك؟', d: 2 },
      { en: 'The agent asked for my documents.', ar: 'طلب الموظف وثائقي.', d: 1 },
      { en: 'You should keep all your receipts.', ar: 'يجب أن تحفظ كل إيصالاتك.', d: 2 },
      { en: 'She has already sent the claim online.', ar: 'لقد أرسلت المطالبة عبر الإنترنت بالفعل.', d: 3 },
      { en: 'The insurance did not cover the phone.', ar: 'التأمين لم يغط الهاتف.', d: 2 },
      { en: 'A month later, they paid the compensation.', ar: 'بعد شهر، دفعوا التعويض.', d: 2 },
      { en: 'Should I buy insurance for a short trip?', ar: 'هل أشتري تأمينا لرحلة قصيرة؟', d: 2 },
      { en: 'Yes, medical bills abroad can be very high.', ar: 'نعم، الفواتير الطبية في الخارج قد تكون مرتفعة جدا.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Does my policy cover {C}?', arTmpl: 'هل تغطي وثيقتي {C_ar}؟',
        slots: {
          C: [
            { en: 'medical costs', ar: 'التكاليف الطبية' }, { en: 'lost baggage', ar: 'فقدان الأمتعة' },
            { en: 'stolen phones', ar: 'الهواتف المسروقة' }, { en: 'delayed flights', ar: 'تأخر الرحلات' },
            { en: 'cancellation fees', ar: 'رسوم الإلغاء' }, { en: 'ski accidents', ar: 'حوادث التزلج' },
            { en: 'dental problems', ar: 'مشاكل الأسنان' }, { en: 'hiking injuries', ar: 'إصابات المشي' },
          ],
        },
        tags: ['insurance', 'questions'], d: 2, limit: 8,
      },
      {
        tmpl: 'I have never made a claim for {L}.', arTmpl: 'لم أقدم مطالبة من قبل عن {L_ar}.',
        slots: {
          L: [
            { en: 'lost baggage', ar: 'فقدان الأمتعة' }, { en: 'a stolen camera', ar: 'كاميرا مسروقة' },
            { en: 'delayed flights', ar: 'تأخر الرحلات' }, { en: 'medical costs', ar: 'تكاليف طبية' },
            { en: 'a stolen phone', ar: 'هاتف مسروق' }, { en: 'a cancelled trip', ar: 'رحلة ملغاة' },
          ],
        },
        tags: ['insurance', 'present-perfect'], d: 2, limit: 6,
      },
      {
        tmpl: 'You should keep {D} safe.', arTmpl: 'يجب أن تحفظ {D_ar} في مكان آمن.',
        slots: {
          D: [
            { en: 'your policy number', ar: 'رقم وثيقتك' }, { en: 'all the receipts', ar: 'كل الإيصالات' },
            { en: 'your insurance card', ar: 'بطاقة التأمين' }, { en: 'the claim form', ar: 'استمارة المطالبة' },
            { en: 'the flight tickets', ar: 'تذاكر الطيران' },
          ],
        },
        tags: ['insurance', 'modals'], d: 2, limit: 5,
      },
      {
        tmpl: 'The insurance did not cover {C}.', arTmpl: 'التأمين لم يغط {C_ar}.',
        slots: {
          C: [
            { en: 'my phone', ar: 'هاتفي' }, { en: 'the car damage', ar: 'أضرار السيارة' },
            { en: 'the first day', ar: 'اليوم الأول' }, { en: 'lost jewelry', ar: 'المجوهرات المفقودة' },
            { en: 'my laptop', ar: 'حاسوبي المحمول' }, { en: 'driving fines', ar: 'غرامات القيادة' },
          ],
        },
        tags: ['insurance', 'negatives'], d: 2, limit: 6,
      },
      {
        tmpl: 'The medical costs were {A} dollars.', arTmpl: 'كانت التكاليف الطبية {A_ar} دولارا.',
        slots: {
          A: [
            { en: 'three hundred', ar: 'ثلاث مئة' }, { en: 'five hundred', ar: 'خمس مئة' },
            { en: 'eight hundred', ar: 'ثمان مئة' }, { en: 'one thousand', ar: 'ألف' },
            { en: 'two thousand', ar: 'ألفين' }, { en: 'four thousand', ar: 'أربعة آلاف' }, { en: 'six thousand', ar: 'ستة آلاف' },
          ],
        },
        tags: ['insurance', 'money'], d: 3, limit: 7,
      },
    ],
    fills: [
      { en: 'Does your policy cover lost baggage compensation?', ar: 'هل تغطي وثيقتك تعويض فقدان الأمتعة؟', word: 'policy', hint: 'وثيقة تأمين' },
      { en: 'I have never made a claim before.', ar: 'لم أقدم مطالبة من قبل.', word: 'claim' },
      { en: 'You should keep all your receipts.', ar: 'يجب أن تحفظ كل إيصالاتك.', word: 'receipts' },
      { en: 'Could you send me the claim form, please?', ar: 'هل ترسل لي استمارة المطالبة من فضلك؟', word: 'form' },
      { en: 'If your flight is delayed, you can claim extra costs.', ar: 'إذا تأخرت رحلتك، يمكنك المطالبة بالتكاليف الإضافية.', word: 'delayed' },
      { en: 'The insurance did not cover the phone.', ar: 'التأمين لم يغط الهاتف.', word: 'cover' },
      { en: 'What is your policy number?', ar: 'ما رقم وثيقتك؟', word: 'number' },
      { en: 'Yes, medical bills abroad can be very high.', ar: 'نعم، الفواتير الطبية في الخارج قد تكون مرتفعة جدا.', word: 'bills' },
    ],
    orders: [
      { en: 'Travel insurance is important when you travel far.', ar: 'تأمين السفر مهم عندما تسافر بعيدا.' },
      { en: 'You should keep all your receipts.', ar: 'يجب أن تحفظ كل إيصالاتك.' },
      { en: 'What is your policy number?', ar: 'ما رقم وثيقتك؟' },
      { en: 'I have never made a claim before.', ar: 'لم أقدم مطالبة من قبل.' },
      { en: 'Could you send me the claim form, please?', ar: 'هل ترسل لي استمارة المطالبة من فضلك؟' },
      { en: 'The agent asked for my documents.', ar: 'طلب الموظف وثائقي.' },
    ],
    mc: [
      { question: 'What does an insurance policy cover?', options: ['the risks written in the document', 'only hotel bills', 'taxi rides', 'gifts'], answerIndex: 0, ar: 'ما الذي تغطيه وثيقة التأمين؟' },
      { question: 'You want money back for a lost bag. You make a:', options: ['claim', 'receipt', 'booking', 'reservation'], answerIndex: 0, ar: 'تريد تعويضا عن حقيبة مفقودة، فتقدم:' },
      { question: 'Which sentence uses the present perfect?', options: ['I have never made a claim before.', 'I made a claim yesterday.', 'I make claims often.', 'I am making a claim.'], answerIndex: 0, ar: 'أي جملة تستخدم المضارع التام؟' },
      { question: 'A policy number is:', options: ['the number of your insurance document', 'your room number', 'your flight number', 'a phone brand'], answerIndex: 0, ar: 'رقم الوثيقة هو:' },
      { question: 'Why should you keep receipts?', options: ['to prove costs for your claim', 'to pay the taxi', 'to book a room', 'to open the door'], answerIndex: 0, ar: 'لماذا تحفظ الإيصالات؟' },
    ],
  },

  /* ================= lesson 113 — Customs ================= */
  {
    num: 113,
    tags: ['customs', 'travel'],
    objectives: [
      'Answer the customs officer at the border',
      'Talk about gifts, limits and duty-free items',
      'Use "anything / nothing to declare" correctly',
    ],
    grammar: {
      explanation: 'At customs, the officer asks short questions: "Anything to declare?" — the answer is "I have nothing to declare" or "Yes, I have these gifts". Use "These are ... " to present plural items: "These are gifts for my family". Ask about quantity with "How many ... can I bring?". Duty-free items are bought after security and carry no tax. Negative rules use "not allowed": "Fresh fruit is not allowed". "The limit" is the maximum amount the country permits.',
      explanationAr: 'في الجمارك يسأل الموظف بأسئلة قصيرة: Anything to declare؟ والجواب: I have nothing to declare أو Yes, I have these gifts. واستخدم These are لعرض أشياء جمع: These are gifts for my family. واسأل عن الكمية بـ How many ... can I bring؟ والأشياء المعفاة من الرسوم تشترى بعد التفتيش ولا عليها ضريبة. أما القواعد المنفية فتستخدم not allowed مثل: Fresh fruit is not allowed. وthe limit تعني الحد الأقصى المسموح به.',
      examples: [
        { en: 'I have nothing to declare.', ar: 'ليس لدي أي شيء أصرح به.' },
        { en: 'These are gifts for my family.', ar: 'هذه هدايا لعائلتي.' },
        { en: 'How many bottles can I bring?', ar: 'ما عدد الزجاجات المسموح بإحضارها؟' },
      ],
    },
    vocabulary: [
      { word: 'customs', meaningAr: 'الجمارك', example: 'The customs officer checked my bag.', ipa: 'ˈkʌstəmz' },
      { word: 'declare', meaningAr: 'يصرح / يعلن', example: 'I have nothing to declare.' },
      { word: 'duty-free', meaningAr: 'معفى من الرسوم', example: 'This perfume is from the duty-free shop.' },
      { word: 'suitcase', meaningAr: 'حقيبة سفر', example: 'Could you open this suitcase, please?' },
      { word: 'gift', meaningAr: 'هدية', example: 'These are gifts for my family.' },
      { word: 'officer', meaningAr: 'موظف / ضابط', example: 'The officer was very polite.' },
      { word: 'limit', meaningAr: 'حد أقصى', example: 'The limit is two bottles per person.' },
      { word: 'bottle', meaningAr: 'زجاجة', example: 'How many bottles can I bring?' },
      { word: 'souvenirs', meaningAr: 'هدايا تذكارية', example: 'We bought these souvenirs in Morocco.' },
      { word: 'allowed', meaningAr: 'مسموح به', example: 'Fresh fruit is not allowed.' },
      { word: 'channel', meaningAr: 'ممر / ممر أخضر', example: 'Where is the green channel?' },
      { word: 'per person', meaningAr: 'لكل شخص', example: 'One liter of water per person, please.' },
    ],
    scenario: [
      { en: 'Good morning. Anything to declare?', ar: 'صباح الخير. هل لديك شيء تصرح به؟', d: 1 },
      { en: 'I have nothing to declare.', ar: 'ليس لدي أي شيء أصرح به.', d: 1 },
      { en: 'Could you open this suitcase, please?', ar: 'هل تفتح هذه الحقيبة من فضلك؟', d: 2 },
      { en: 'Of course, here you are.', ar: 'بالتأكيد، تفضل.', d: 1 },
      { en: 'These are gifts for my family.', ar: 'هذه هدايا لعائلتي.', d: 1 },
      { en: 'They are not for sale.', ar: 'إنها ليست للبيع.', d: 2 },
      { en: 'How many bottles can I bring?', ar: 'ما عدد الزجاجات المسموح بإحضارها؟', d: 2 },
      { en: 'The limit is two bottles per person.', ar: 'الحد المسموح زجاجتان لكل شخص.', d: 2 },
      { en: 'This perfume is from the duty-free shop.', ar: 'هذا العطر من متجر المعفى من الرسوم.', d: 2 },
      { en: 'Is the perfume above the limit?', ar: 'هل العطر يتجاوز الحد المسموح؟', d: 2 },
      { en: 'No, it is fine. Enjoy your trip.', ar: 'لا، لا مشكلة. استمتع برحلتك.', d: 2 },
      { en: 'We bought these souvenirs in Morocco.', ar: 'اشترينا هذه الهدايا التذكارية في المغرب.', d: 3 },
      { en: 'Do not carry fresh fruit in your bag.', ar: 'لا تحمل الفاكهة الطازجة في حقيبتك.', d: 2 },
      { en: 'Fresh fruit is not allowed.', ar: 'الفاكهة الطازجة غير مسموح بها.', d: 1 },
      { en: 'Where is the green channel?', ar: 'أين الممر الأخضر؟', d: 1 },
      { en: 'The officer stamped my form quickly.', ar: 'ختم الموظف استمارتي بسرعة.', d: 3 },
      { en: 'Customs here is fast in the morning.', ar: 'الجمارك هنا سريعة في الصباح.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'These {G} are gifts for my {F}.', arTmpl: 'هذه {G_ar} هدايا لـ{F_ar}.',
        slots: {
          G: [
            { en: 'souvenirs', ar: 'الهدايا التذكارية' }, { en: 'perfumes', ar: 'العطور' },
            { en: 'shirts', ar: 'القمصان' }, { en: 'boxes of chocolate', ar: 'علب الشوكولاتة' },
            { en: 'watches', ar: 'الساعات' },
          ],
          F: [
            { en: 'family', ar: 'عائلتي' }, { en: 'friends', ar: 'أصدقائي' },
            { en: 'children', ar: 'أطفالي' }, { en: 'colleagues', ar: 'زملائي' },
          ],
        },
        tags: ['customs', 'gifts'], d: 1, limit: 20,
      },
      {
        tmpl: 'How many {N} can I bring?', arTmpl: 'ما عدد {N_ar} المسموح بإحضاره؟',
        slots: {
          N: [
            { en: 'bottles of water', ar: 'زجاجات الماء' }, { en: 'cartons of cigarettes', ar: 'علب السجائر' },
            { en: 'kilos of coffee', ar: 'كيلوهات القهوة' }, { en: 'cameras', ar: 'الكاميرات' },
            { en: 'gifts', ar: 'الهدايا' },
          ],
        },
        tags: ['customs', 'questions'], d: 2, limit: 5,
      },
      {
        tmpl: 'Is {I} allowed?', arTmpl: 'هل {I_ar} مسموح؟',
        slots: {
          I: [
            { en: 'fresh fruit', ar: 'الفاكهة الطازجة' }, { en: 'this medicine', ar: 'هذا الدواء' },
            { en: 'a small knife', ar: 'سكين صغير' }, { en: 'cheese', ar: 'الجبن' },
            { en: 'honey', ar: 'العسل' },
          ],
        },
        tags: ['customs', 'questions'], d: 2, limit: 5,
      },
      {
        tmpl: 'I bought it at the duty-free shop in {C}.', arTmpl: 'اشتريته في متجر المعفى من الرسوم في {C_ar}.',
        slots: {
          C: [
            { en: 'France', ar: 'فرنسا' }, { en: 'Turkey', ar: 'تركيا' },
            { en: 'Morocco', ar: 'المغرب' }, { en: 'the UAE', ar: 'الإمارات' },
          ],
        },
        tags: ['customs', 'duty-free'], d: 2, limit: 4,
      },
      {
        tmpl: 'Do you have anything to declare, {P}?', arTmpl: 'هل لديك شيء للتصريح عنه يا {P_ar}؟',
        slots: { P: B.NAMED_SING },
        tags: ['customs', 'questions'], d: 1, limit: 8,
      },
    ],
    fills: [
      { en: 'I have nothing to declare.', ar: 'ليس لدي أي شيء أصرح به.', word: 'declare', hint: 'يصرح' },
      { en: 'These are gifts for my family.', ar: 'هذه هدايا لعائلتي.', word: 'gifts' },
      { en: 'How many bottles can I bring?', ar: 'ما عدد الزجاجات المسموح بإحضارها؟', word: 'bottles' },
      { en: 'The limit is two bottles per person.', ar: 'الحد المسموح زجاجتان لكل شخص.', word: 'limit' },
      { en: 'This perfume is from the duty-free shop.', ar: 'هذا العطر من متجر المعفى من الرسوم.', word: 'duty-free' },
      { en: 'Could you open this suitcase, please?', ar: 'هل تفتح هذه الحقيبة من فضلك؟', word: 'suitcase' },
      { en: 'Fresh fruit is not allowed.', ar: 'الفاكهة الطازجة غير مسموح بها.', word: 'allowed' },
      { en: 'Where is the green channel?', ar: 'أين الممر الأخضر؟', word: 'channel' },
    ],
    orders: [
      { en: 'I have nothing to declare.', ar: 'ليس لدي أي شيء أصرح به.' },
      { en: 'These are gifts for my family.', ar: 'هذه هدايا لعائلتي.' },
      { en: 'How many bottles can I bring?', ar: 'ما عدد الزجاجات المسموح بإحضارها؟' },
      { en: 'The limit is two bottles per person.', ar: 'الحد المسموح زجاجتان لكل شخص.' },
      { en: 'Do not carry fresh fruit in your bag.', ar: 'لا تحمل الفاكهة الطازجة في حقيبتك.' },
      { en: 'Could you open this suitcase, please?', ar: 'هل تفتح هذه الحقيبة من فضلك؟' },
    ],
    mc: [
      { question: 'The officer asks "Anything to declare?" You have no taxable items. You say:', options: ['I have nothing to declare.', 'These are gifts for sale.', 'Open the door.', 'I am lost.'], answerIndex: 0, ar: 'سألك الموظف عن التصريح، وليس لديك شيء خاضع للرسوم، فتقول:' },
      { question: 'Duty-free items are items you buy:', options: ['without paying tax', 'only in your country', 'from the taxi driver', 'twice'], answerIndex: 0, ar: 'الأشياء المعفاة من الرسوم تشترى:' },
      { question: '"The limit is two bottles" means:', options: ['زجاجتان هي الحد الأقصى', 'الزجاجات ممنوعة', 'زجاجة واحدة فقط', 'السعر زجاجتان'], answerIndex: 0, ar: 'ما معنى The limit is two bottles؟' },
      { question: 'Which item is usually NOT allowed?', options: ['fresh fruit', 'a book', 'a gift shirt', 'souvenirs'], answerIndex: 0, ar: 'أي عنصر يكون عادة غير مسموح به؟' },
    ],
  },
];
