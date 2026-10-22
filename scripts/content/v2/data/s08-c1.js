/* ============================================================
   v2 section data — s08-c1.js
   Work & Money · lessons 186–188
   (Customer Service at Work · Sales · Personal Budgeting)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 186 — Customer Service at Work ================= */
  {
    num: 186,
    tags: ['customer-service', 'work'],
    objectives: [
      'Answer customer problems politely on the phone',
      'Promise quick action and apologize for delays',
      'Offer a replacement or a refund when needed',
    ],
    grammar: {
      explanation: 'In customer service we promise action with will: "I will check that for you right away". "Right away" and "in a few minutes" show speed. Apologize simply: "We are sorry for the delay" — name the problem, then give the solution: "You will receive a replacement within three days". Keep polite set phrases ready: "Thank you for calling", "Could you hold on a moment?", "Thank you for your patience". Calm, clear sentences solve most complaints.',
      explanationAr: 'في خدمة العملاء نعد بالفعل بـ will: I will check that for you right away. وتعبر Right away وin a few minutes عن السرعة. واعتذر ببساطة: We are sorry for the delay، فتذكر المشكلة ثم تعطي الحل: You will receive a replacement within three days. واحتفظ بعبارات مهذبة جاهزة: Thank you for calling، Could you hold on a moment؟، Thank you for your patience. الجمل الهادئة الواضحة تحل معظم الشكاوى.',
      examples: [
        { en: "I'll check that for you right away.", ar: 'سأتحقق من ذلك لك حالا.' },
        { en: 'We are sorry for the delay, sir.', ar: 'نحن آسفون على التأخير يا سيدي.' },
        { en: 'You will receive a replacement within three days.', ar: 'ستستلم بديلا خلال ثلاثة أيام.' },
      ],
    },
    vocabulary: [
      { word: 'customer service', meaningAr: 'خدمة العملاء', example: 'Customer service answered my call fast.' },
      { word: 'patience', meaningAr: 'صبر', example: 'Thank you for your patience, madam.', ipa: 'ˈpeɪʃns' },
      { word: 'right away', meaningAr: 'حالا / فورا', example: 'I will fix it right away.' },
      { word: 'replacement', meaningAr: 'بديل', example: 'We sent a replacement for the broken part.' },
      { word: 'apology', meaningAr: 'اعتذار', example: 'Please accept our apology for the delay.' },
      { word: 'delay', meaningAr: 'تأخير', example: 'Sorry for the delay in delivery.' },
      { word: 'handle', meaningAr: 'يتعامل مع / يتولى', example: 'Our manager will handle your complaint.' },
      { word: 'solve', meaningAr: 'يحل', example: 'The agent solved the problem in minutes.' },
      { word: 'representative', meaningAr: 'ممثل / وكيل', example: 'A representative will call you back.' },
      { word: 'refund', meaningAr: 'استرداد المال', example: 'You can ask for a full refund.' },
      { word: 'receipt', meaningAr: 'إيصال', example: 'Keep the receipt for your records.' },
      { word: 'hold on', meaningAr: 'ينتظر قليلا', example: 'Hold on a moment, please.' },
    ],
    scenario: [
      { en: 'Thank you for calling our support line.', ar: 'شكرا لاتصالكم بخط الدعم لدينا.', d: 1 },
      { en: 'How can I help you today?', ar: 'كيف أستطيع مساعدتكم اليوم؟', d: 1 },
      { en: 'I have a problem with my recent order.', ar: 'لدي مشكلة في طلبي الأخير.', d: 1 },
      { en: 'I am sorry to hear that, madam.', ar: 'آسف لسماع ذلك يا سيدتي.', d: 1 },
      { en: 'The part is missing from the box.', ar: 'القطعة مفقودة من الصندوق.', d: 2 },
      { en: "I'll check that for you right away.", ar: 'سأتحقق من ذلك لك حالا.', d: 1 },
      { en: 'Could you send me a replacement, please?', ar: 'هل يمكنكم إرسال بديل لي من فضلك؟', d: 1 },
      { en: 'Yes, you will receive it within three days.', ar: 'نعم، ستستلمونه خلال ثلاثة أيام.', d: 1 },
      { en: 'Thank you for your patience this morning.', ar: 'شكرا على صبركم هذا الصباح.', d: 2 },
      { en: 'We are sorry for the long delay.', ar: 'نحن آسفون على التأخير الطويل.', d: 2 },
      { en: 'The customer is waiting for a written answer.', ar: 'العميل ينتظر جوابا مكتوبا.', d: 2 },
      { en: 'Does the guarantee cover the repair costs?', ar: 'هل يغطي الضمان تكاليف الإصلاح؟', d: 2 },
      { en: 'No, the guarantee ended last month.', ar: 'لا، انتهى الضمان الشهر الماضي.', d: 2 },
      { en: 'Please hold on a moment.', ar: 'من فضلك انتظر لحظة.', d: 1 },
      { en: 'Our agents solve most problems on the first call.', ar: 'يحل وكلاؤنا معظم المشاكل في المكالمة الأولى.', d: 3 },
      { en: 'She apologized for the mistake in the invoice.', ar: 'اعتذرت عن الخطأ في الفاتورة.', d: 3 },
      { en: 'If the problem returns, call this number again.', ar: 'إذا عادت المشكلة، اتصل بهذا الرقم مرة أخرى.', d: 3 },
      { en: 'The manager will handle your complaint personally.', ar: 'سيتولى المدير شكواك بنفسه.', d: 3 },
    ],
    patterns: [
      {
        tmpl: "I'll check that for you {T}.", arTmpl: 'سأتحقق من ذلك لك {T_ar}.',
        slots: {
          T: [
            { en: 'right away', ar: 'حالا' }, { en: 'in a few minutes', ar: 'خلال دقائق' },
            { en: 'this afternoon', ar: 'بعد الظهر' }, { en: 'after the meeting', ar: 'بعد الاجتماع' },
            { en: 'before five o\'clock', ar: 'قبل الخامسة' },
          ],
        },
        tags: ['customer-service', 'promises'], d: 1, limit: 5,
      },
      {
        tmpl: 'We are sorry for the {D}.', arTmpl: 'نحن آسفون على {D_ar}.',
        slots: {
          D: [
            { en: 'the system error', ar: 'خطأ النظام' }, { en: 'mistake', ar: 'الخطأ' },
            { en: 'waiting time', ar: 'وقت الانتظار' }, { en: 'confusion', ar: 'الالتباس' },
            { en: 'delivery delay', ar: 'تأخير التسليم' }, { en: 'missing part', ar: 'القطعة المفقودة' },
            { en: 'long wait', ar: 'الانتظار الطويل' }, { en: 'wrong item', ar: 'القطعة الخاطئة' },
          ],
        },
        tags: ['customer-service', 'apologies'], d: 1, limit: 8,
      },
      {
        tmpl: 'Could you send me a {R}, please?', arTmpl: 'هل يمكنك إرسال {R_ar} لي من فضلك؟',
        slots: {
          R: [
            { en: 'replacement', ar: 'بديلا' }, { en: 'new invoice', ar: 'فاتورة جديدة' },
            { en: 'written answer', ar: 'جوابا مكتوبا' }, { en: 'copy of the receipt', ar: 'نسخة من الإيصال' },
            { en: 'full refund', ar: 'استردادا كاملا' }, { en: 'corrected bill', ar: 'فاتورة مصححة' },
            { en: 'replacement part', ar: 'قطعة بديلة' },
          ],
        },
        tags: ['customer-service', 'polite-requests'], d: 2, limit: 7,
      },
      {
        tmpl: 'Thank you for your patience {Tb}.', arTmpl: 'شكرا على صبركم {Tb_ar}.',
        slots: {
          Tb: [
            { en: 'today', ar: 'اليوم' }, { en: 'this morning', ar: 'هذا الصباح' },
            { en: 'on the phone', ar: 'على الهاتف' }, { en: 'during the busy week', ar: 'خلال الأسبوع المزدحم' },
            { en: 'during the busy day', ar: 'خلال اليوم المزدحم' },
          ],
        },
        tags: ['customer-service', 'politeness'], d: 1, limit: 4,
      },
      {
        tmpl: 'We will {W} the problem right away.', arTmpl: 'س{W_ar} المشكلة حالا.',
        slots: {
          W: [
            { en: 'fix', ar: 'نصلح' }, { en: 'check', ar: 'نفحص' },
            { en: 'solve', ar: 'نحل' }, { en: 'review', ar: 'نراجع' },
            { en: 'report', ar: 'نبلغ عن' },
          ],
        },
        tags: ['customer-service', 'promises'], d: 2, limit: 5,
      },
      {
        tmpl: '{S} {V} customer questions all day.', arTmpl: '{S_ar} {V_ar} أسئلة العملاء طوال اليوم.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'He', ar: 'هو', agr: 'he' },
            { en: 'She', ar: 'هي', agr: 'she' }, { en: 'We', ar: 'نحن', agr: 'we' },
            { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{ en: B.enPresent('answer', x.S.agr), ar: B.arPresent('answer', x.S.agr) }],
        },
        tags: ['customer-service', 'present-simple'], d: 2, limit: 5,
      },
    ],
    fills: [
      { en: "I'll check that for you right away.", ar: 'سأتحقق من ذلك لك حالا.', word: 'check', hint: 'يتحقق' },
      { en: 'We are sorry for the long delay.', ar: 'نحن آسفون على التأخير الطويل.', word: 'delay', hint: 'تأخير' },
      { en: 'Could you send me a replacement, please?', ar: 'هل يمكنكم إرسال بديل لي من فضلك؟', word: 'replacement', hint: 'بديل' },
      { en: 'Thank you for your patience this morning.', ar: 'شكرا على صبركم هذا الصباح.', word: 'patience', hint: 'صبر' },
      { en: 'She apologized for the mistake in the invoice.', ar: 'اعتذرت عن الخطأ في الفاتورة.', word: 'apologized', hint: 'اعتذرت' },
      { en: 'Does the guarantee cover the repair costs?', ar: 'هل يغطي الضمان تكاليف الإصلاح؟', word: 'guarantee', hint: 'ضمان' },
      { en: 'Please hold on a moment.', ar: 'من فضلك انتظر لحظة.', word: 'hold', hint: 'ينتظر' },
      { en: 'You will receive it within three days.', ar: 'ستستلمونه خلال ثلاثة أيام.', word: 'within', hint: 'خلال' },
    ],
    orders: [
      { en: "I'll check that for you right away.", ar: 'سأتحقق من ذلك لك حالا.' },
      { en: 'We are sorry for the late reply.', ar: 'نحن آسفون على الرد المتأخر.' },
      { en: 'Could you send me a replacement, please?', ar: 'هل يمكنكم إرسال بديل لي من فضلك؟' },
      { en: 'The part is missing from the box.', ar: 'القطعة مفقودة من الصندوق.' },
      { en: 'Our agents solve most problems on the first call.', ar: 'يحل وكلاؤنا معظم المشاكل في المكالمة الأولى.' },
      { en: 'If the problem returns, call this number again.', ar: 'إذا عادت المشكلة، اتصل بهذا الرقم مرة أخرى.' },
    ],
    mc: [
      { question: 'A customer waits a long time. You say:', options: ['Thank you for your patience', 'Go away please', 'Call again never', 'Why are you slow?'], answerIndex: 0, ar: 'انتظر العميل طويلا، ماذا تقول؟' },
      { question: 'The product arrived broken. You promise:', options: ['We will send you a replacement', 'We will close the shop', 'Keep the broken one', 'Read the manual again'], answerIndex: 0, ar: 'وصل المنتج مكسورا، ماذا تعد؟' },
      { question: '"I will check that right away" means:', options: ['سأتحقق من ذلك حالا', 'سأتحقق بعد شهر', 'لا أستطيع التحقق', 'اسأل شخصا آخر'], answerIndex: 0, ar: 'ماذا تعني I will check that right away؟' },
      { question: 'Who talks to customers at a company?', options: ['A customer service representative', 'The night guard', 'The accountant only', 'The delivery box'], answerIndex: 0, ar: 'من يتحدث إلى العملاء في الشركة؟' },
      { question: 'Money returned for a faulty product is:', options: ['a refund', 'a receipt', 'a warranty', 'a delivery'], answerIndex: 0, ar: 'المال المعاد لمنتج معيب يسمى:' },
    ],
  },

  /* ================= lesson 187 — Sales ================= */
  {
    num: 187,
    tags: ['sales', 'business'],
    objectives: [
      'Present a product and its best features',
      'Talk about prices, offers and stock',
      'Close a sale politely with an order',
    ],
    grammar: {
      explanation: 'In sales, present products with the present simple: "This is our best seller", "It comes with a two-year warranty". Invite the customer with "Would you like to try it?" — would you like is polite and common in shops. Talk about offers with have: "We have a special offer on laptops this week". Use if + will for a gentle push: "If you order today, you will get it on Thursday". Ask about money simply: "How much does it cost?", "Can I pay by card?"',
      explanationAr: 'في المبيعات نعرض المنتجات بالمضارع البسيط: This is our best seller، It comes with a two-year warranty. وادعُ العميل بـ Would you like to try it؟ فهي صيغة مهذبة شائعة في المتاجر. وتحدث عن العروض بـ have: We have a special offer on laptops this week. واستخدم if مع will للتحفيز اللطيف: If you order today, you will get it on Thursday. واسأل عن المال ببساطة: How much does it cost؟ وCan I pay by card؟',
      examples: [
        { en: 'This is our best seller this month.', ar: 'هذا هو الأكثر مبيعا لدينا هذا الشهر.' },
        { en: 'We have a special offer on printers this week.', ar: 'لدينا عرض خاص على الطابعات هذا الأسبوع.' },
        { en: 'If you order today, you will get it on Thursday.', ar: 'إذا طلبت اليوم، ستحصل عليه يوم الخميس.' },
      ],
    },
    vocabulary: [
      { word: 'best seller', meaningAr: 'الأكثر مبيعا', example: 'This phone is our best seller.' },
      { word: 'special offer', meaningAr: 'عرض خاص', example: 'The special offer ends on Sunday.' },
      { word: 'warranty', meaningAr: 'ضمان', example: 'It comes with a two-year warranty.' },
      { word: 'guarantee', meaningAr: 'ضمان / يضمن', example: 'We guarantee the quality of our products.' },
      { word: 'feature', meaningAr: 'ميزة', example: 'My favourite feature is the camera.' },
      { word: 'in stock', meaningAr: 'متوفر في المخزن', example: 'Yes, this model is in stock.' },
      { word: 'sold out', meaningAr: 'نفدت الكمية', example: 'The blue ones sold out last week.' },
      { word: 'order', meaningAr: 'طلب / يطلب', example: 'I want to order two units.' },
      { word: 'delivery', meaningAr: 'توصيل', example: 'Delivery is free inside the city.' },
      { word: 'model', meaningAr: 'طراز / موديل', example: 'This model is smaller and lighter.' },
      { word: 'price', meaningAr: 'السعر', example: 'The price includes free training.' },
      { word: 'customer', meaningAr: 'عميل / زبون', example: 'Customers love this coffee machine.' },
    ],
    scenario: [
      { en: 'Welcome to our new shop section.', ar: 'أهلا بك في قسم متجرنا الجديد.', d: 1 },
      { en: 'This is our best seller this month.', ar: 'هذا هو الأكثر مبيعا لدينا هذا الشهر.', d: 1 },
      { en: 'Wow, it looks really popular.', ar: 'واو، يبدو شعبيا جدا.', d: 1 },
      { en: 'Would you like to try it?', ar: 'هل تود أن تجربه؟', d: 1 },
      { en: 'Yes, can you explain how it works?', ar: 'نعم، هل يمكنك شرح كيف يعمل؟', d: 1 },
      { en: 'It comes with a two-year warranty.', ar: 'يأتي مع ضمان لسنتين.', d: 2 },
      { en: 'How much does it cost?', ar: 'كم يكلف؟', d: 1 },
      { en: 'It costs two hundred dollars, but we have a special offer.', ar: 'يكلف مئتي دولار، لكن لدينا عرض خاص.', d: 2 },
      { en: 'The offer gives you twenty percent off.', ar: 'العرض يمنحك خصما بعشرين بالمئة.', d: 2 },
      { en: 'Do you have this model in stock?', ar: 'هل لديك هذا الطراز في المخزن؟', d: 2 },
      { en: 'Yes, but only a few boxes are left.', ar: 'نعم، لكن بقيت علب قليلة فقط.', d: 2 },
      { en: 'We sold out the blue ones last week.', ar: 'نفدت لدينا القطع الزرقاء الأسبوع الماضي.', d: 2 },
      { en: 'We do not charge for delivery in the city.', ar: 'لا نتقاضى أجرا للتوصيل داخل المدينة.', d: 2 },
      { en: 'Our team sells office machines to many companies.', ar: 'يبيع فريقنا آلات مكتبية لشركات كثيرة.', d: 3 },
      { en: 'Please put two units in my order.', ar: 'من فضلك ضع وحدتين في طلبي.', d: 1 },
      { en: 'If you order today, you will get it on Thursday.', ar: 'إذا طلبت اليوم، ستحصل عليه يوم الخميس.', d: 3 },
      { en: 'Customers love this coffee machine.', ar: 'يحب العملاء آلة القهوة هذه.', d: 2 },
      { en: 'Can I pay by card?', ar: 'هل أستطيع الدفع بالبطاقة؟', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'This is our best seller this {S}.', arTmpl: 'هذا هو الأكثر مبيعا لدينا هذا {S_ar}.',
        slots: {
          S: [
            { en: 'week', ar: 'الأسبوع' }, { en: 'month', ar: 'الشهر' },
            { en: 'season', ar: 'الموسم' }, { en: 'year', ar: 'العام' },
            { en: 'summer', ar: 'الصيف' },
          ],
        },
        tags: ['sales', 'present-simple'], d: 1, limit: 5,
      },
      {
        tmpl: 'Would you like to {T} it?', arTmpl: 'هل تود أن {T_ar}؟',
        slots: {
          T: [
            { en: 'try', ar: 'تجربه' }, { en: 'test', ar: 'تختبره' },
            { en: 'see', ar: 'تراه' }, { en: 'order', ar: 'تطلبه' },
            { en: 'reserve', ar: 'تحجزه' },
          ],
        },
        tags: ['sales', 'polite-requests'], d: 1, limit: 5,
      },
      {
        tmpl: 'It comes with a {W}.', arTmpl: 'يأتي مع {W_ar}.',
        slots: {
          W: [
            { en: 'two-year warranty', ar: 'ضمان لسنتين' }, { en: 'full guarantee', ar: 'ضمان كامل' },
            { en: 'free service plan', ar: 'خطة صيانة مجانية' }, { en: 'small gift', ar: 'هدية صغيرة' },
            { en: 'cleaning kit', ar: 'طقم تنظيف' },
          ],
        },
        tags: ['sales', 'present-simple'], d: 1, limit: 5,
      },
      {
        tmpl: 'We have a special offer on {P} this week.', arTmpl: 'لدينا عرض خاص على {P_ar} هذا الأسبوع.',
        slots: {
          P: [
            { en: 'laptops', ar: 'الحواسيب المحمولة' }, { en: 'phones', ar: 'الهواتف' },
            { en: 'printers', ar: 'الطابعات' }, { en: 'office chairs', ar: 'الكراسي المكتبية' },
            { en: 'coffee machines', ar: 'آلات القهوة' }, { en: 'desk lamps', ar: 'مصابيح المكتب' },
          ],
        },
        tags: ['sales', 'offers'], d: 2, limit: 6,
      },
      {
        tmpl: '{S} {V} this model every day.', arTmpl: '{S_ar} {V_ar} هذا الطراز كل يوم.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'He', ar: 'هو', agr: 'he' },
            { en: 'She', ar: 'هي', agr: 'she' }, { en: 'We', ar: 'نحن', agr: 'we' },
            { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{ en: B.enPresent('sell', x.S.agr), ar: B.arPresent('sell', x.S.agr) }],
        },
        tags: ['sales', 'present-simple'], d: 2, limit: 5,
      },
      {
        tmpl: 'How many {U} would you like to {Oa}?', arTmpl: 'كم {U_ar} تود أن {Oa_ar}؟',
        slots: {
          U: [
            { en: 'box', ar: 'علبة' }, { en: 'unit', ar: 'وحدة' },
            { en: 'set', ar: 'طقم' }, { en: 'case', ar: 'صندوق' },
          ],
          Oa: [
            { en: 'order', ar: 'تطلب' }, { en: 'buy', ar: 'تشتري' },
            { en: 'reserve', ar: 'تحجز' },
          ],
        },
        tags: ['sales', 'questions'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'This is our best seller this month.', ar: 'هذا هو الأكثر مبيعا لدينا هذا الشهر.', word: 'seller', hint: 'الأكثر مبيعا' },
      { en: 'Would you like to try it?', ar: 'هل تود أن تجربه؟', word: 'try', hint: 'يجرب' },
      { en: 'It comes with a two-year warranty.', ar: 'يأتي مع ضمان لسنتين.', word: 'warranty', hint: 'ضمان' },
      { en: 'We have a special offer on laptops this week.', ar: 'لدينا عرض خاص على الحواسيب المحمولة هذا الأسبوع.', word: 'special', hint: 'خاص' },
      { en: 'Do you have this model in stock?', ar: 'هل لديك هذا الطراز في المخزن؟', word: 'stock', hint: 'المخزن' },
      { en: 'The offer gives you twenty percent off.', ar: 'العرض يمنحك خصما بعشرين بالمئة.', word: 'off', hint: 'خصم' },
      { en: 'If you order today, you will get it on Thursday.', ar: 'إذا طلبت اليوم، ستحصل عليه يوم الخميس.', word: 'order', hint: 'يطلب' },
      { en: 'Can I pay by card?', ar: 'هل أستطيع الدفع بالبطاقة؟', word: 'card', hint: 'بطاقة' },
    ],
    orders: [
      { en: 'This is our best seller this month.', ar: 'هذا هو الأكثر مبيعا لدينا هذا الشهر.' },
      { en: 'It comes with a two-year warranty.', ar: 'يأتي مع ضمان لسنتين.' },
      { en: 'Would you like to try it?', ar: 'هل تود أن تجربه؟' },
      { en: 'Do you have this model in stock?', ar: 'هل لديك هذا الطراز في المخزن؟' },
      { en: 'We do not charge for delivery in the city.', ar: 'لا نتقاضى أجرا للتوصيل داخل المدينة.' },
      { en: 'If you order today, you will get it on Thursday.', ar: 'إذا طلبت اليوم، ستحصل عليه يوم الخميس.' },
    ],
    mc: [
      { question: '"Best seller" means:', options: ['المنتج الأكثر مبيعا', 'المنتج الأغلى', 'أقدم منتج', 'منتج معيب'], answerIndex: 0, ar: 'ماذا يعني best seller؟' },
      { question: 'A customer asks about a product. You say:', options: ['Would you like to try it?', 'Go home now.', 'We are closed forever.', 'I do not work here.'], answerIndex: 0, ar: 'سأل عميل عن منتج، ماذا تقول؟' },
      { question: 'Where do you check if the shop has a product?', options: ['in stock', 'on holiday', 'under warranty', 'on sale only'], answerIndex: 0, ar: 'أين تتحقق من توفر المنتج؟' },
      { question: '"Sold out" means:', options: ['نفدت الكمية', 'سعر مرتفع', 'ضمان سنة', 'توصيل مجاني'], answerIndex: 0, ar: 'ماذا يعني sold out؟' },
      { question: 'The shop gives twenty percent off. This is:', options: ['a special offer', 'a fine', 'a bill', 'a salary'], answerIndex: 0, ar: 'المتجر يمنح خصما بعشرين بالمئة، هذا:' },
    ],
  },

  /* ================= lesson 188 — Personal Budgeting ================= */
  {
    num: 188,
    tags: ['budgeting', 'money'],
    objectives: [
      'Describe your income, rent and monthly bills',
      'Talk about saving a percent of your salary',
      'Explain why you keep an emergency fund',
    ],
    grammar: {
      explanation: 'Budgeting talk uses the present simple for habits: "I track my expenses in a notebook", "Rent takes half my salary". Say amounts and parts with percent: "I save ten percent of my income every month". Use if + will for plans: "If I buy less take-away, I will save more money". An emergency fund is money you keep for bad days — car repairs, medical costs or sudden bills. Track, plan, save: that is the whole budget.',
      explanationAr: 'حديث الميزانية يستخدم المضارع البسيط للعادات: I track my expenses in a notebook، Rent takes half my salary. ونذكر النسب بكلمة percent: I save ten percent of my income every month. ونستخدم if مع will للخطط: If I buy less take-away, I will save more money. وصندوق الطوارئ مال تحتفظ به للأيام الصعبة: إصلاحات السيارة أو التكاليف الطبية أو الفواتير المفاجئة. تتبع، خطط، ادخر: هذه هي الميزانية كلها.',
      examples: [
        { en: 'I track my expenses in a phone app.', ar: 'أتتبع مصروفي في تطبيق هاتف.' },
        { en: 'I save ten percent of my salary every month.', ar: 'أدخر عشرة بالمئة من راتبي كل شهر.' },
        { en: 'We keep an emergency fund for sudden bills.', ar: 'نحتفظ بصندوق طوارئ للفواتير المفاجئة.' },
      ],
    },
    vocabulary: [
      { word: 'budget', meaningAr: 'ميزانية', example: 'My monthly budget has three parts.', ipa: 'ˈbʌdʒɪt' },
      { word: 'expense', meaningAr: 'مصروف', example: 'Food is my biggest expense.' },
      { word: 'track', meaningAr: 'يتتبع / يسجل', example: 'Track your expenses for one week.' },
      { word: 'save', meaningAr: 'يدخر / يوفر', example: 'I save ten percent of my income.' },
      { word: 'income', meaningAr: 'دخل', example: 'Her income grew this year.' },
      { word: 'salary', meaningAr: 'راتب', example: 'My salary arrives at the month start.' },
      { word: 'rent', meaningAr: 'إيجار', example: 'Rent takes half my salary.' },
      { word: 'emergency fund', meaningAr: 'صندوق طوارئ', example: 'An emergency fund protects your family.' },
      { word: 'percent', meaningAr: 'بالمئة', example: 'Try to save twenty percent.' },
      { word: 'bill', meaningAr: 'فاتورة', example: 'I pay the electricity bill online.' },
      { word: 'afford', meaningAr: 'يستطيع تحمل تكلفة', example: 'We cannot afford a new car now.' },
      { word: 'spend', meaningAr: 'ينفق', example: 'Do not spend all your cash at once.' },
    ],
    scenario: [
      { en: 'I track my expenses in a small notebook.', ar: 'أتتبع مصروفي في دفتر صغير.', d: 1 },
      { en: 'How much do you spend on food each month?', ar: 'كم تصرف على الطعام كل شهر؟', d: 1 },
      { en: 'About three hundred dollars, more or less.', ar: 'نحو ثلاثمئة دولار، أكثر أو أقل.', d: 1 },
      { en: 'Rent takes half my salary.', ar: 'الإيجار يأخذ نصف راتبي.', d: 1 },
      { en: 'That is a lot for one bill.', ar: 'هذا كثير لفاتورة واحدة.', d: 2 },
      { en: 'I save ten percent of my income every month.', ar: 'أدخر عشرة بالمئة من دخلي كل شهر.', d: 1 },
      { en: 'We keep an emergency fund for bad days.', ar: 'نحتفظ بصندوق طوارئ للأيام الصعبة.', d: 2 },
      { en: 'Do you write down every small expense?', ar: 'هل تدون كل مصروف صغير؟', d: 2 },
      { en: 'Yes, even my morning coffee.', ar: 'نعم، حتى قهوتي الصباحية.', d: 1 },
      { en: 'My brother does not plan his budget at all.', ar: 'أخي لا يخطط لميزانيته إطلاقا.', d: 2 },
      { en: 'He spends all his cash in the first week.', ar: 'ينفق كل نقوده في الأسبوع الأول.', d: 2 },
      { en: 'Could you help me make a simple plan, please?', ar: 'هل يمكنك مساعدتي في وضع خطة بسيطة من فضلك؟', d: 1 },
      { en: 'First, write your income at the top.', ar: 'أولا، اكتب دخلك في الأعلى.', d: 1 },
      { en: 'Then list your bills: rent, electricity and internet.', ar: 'ثم اذكر فواتيرك: الإيجار والكهرباء والإنترنت.', d: 2 },
      { en: 'They cut their food costs by cooking at home.', ar: 'خفضوا تكاليف طعامهم بالطبخ في المنزل.', d: 3 },
      { en: 'If I buy less take-away, I will save more money.', ar: 'إذا اشتريت طعاما جاهزا أقل، سأدخر مالا أكثر.', d: 3 },
      { en: 'Our family reached its savings goal this year.', ar: 'حققت عائلتنا هدف التوفير هذا العام.', d: 3 },
      { en: 'A discount card saves us money at the supermarket.', ar: 'بطاقة الخصم توفر لنا مالا في السوبر ماركت.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I track my expenses in a {N}.', arTmpl: 'أتتبع مصروفي في {N_ar}.',
        slots: {
          N: [
            { en: 'notebook', ar: 'دفتر' }, { en: 'phone app', ar: 'تطبيق هاتف' },
            { en: 'simple table', ar: 'جدول بسيط' }, { en: 'budget book', ar: 'كتاب ميزانية' },
            { en: 'notes file', ar: 'ملف ملاحظات' }, { en: 'free app', ar: 'تطبيق مجاني' },
            { en: 'small spreadsheet', ar: 'جدول بيانات صغير' }, { en: 'a notes page', ar: 'صفحة ملاحظات' },
          ],
        },
        tags: ['budgeting', 'present-simple'], d: 1, limit: 7,
      },
      {
        tmpl: 'I save ten percent of my {I} every month.', arTmpl: 'أدخر عشرة بالمئة من {I_ar} كل شهر.',
        slots: {
          I: [
            { en: 'salary', ar: 'راتبي' }, { en: 'income', ar: 'دخلي' },
            { en: 'pay', ar: 'أجري' }, { en: 'bonus', ar: 'مكافأتي' },
            { en: 'extra income', ar: 'دخلي الإضافي' },
          ],
        },
        tags: ['budgeting', 'money'], d: 1, limit: 5,
      },
      {
        tmpl: '{E} takes half my salary.', arTmpl: '{E_ar} يأخذ نصف راتبي.',
        slots: {
          E: [
            { en: 'Rent', ar: 'الإيجار' }, { en: 'The car loan', ar: 'قرض السيارة' },
            { en: 'The shop rent', ar: 'إيجار المحل' }, { en: 'The flat loan', ar: 'قرض الشقة' },
            { en: 'The studio rent', ar: 'إيجار الاستوديو' },
          ],
        },
        tags: ['budgeting', 'money'], d: 1, limit: 5,
      },
      {
        tmpl: 'We keep an emergency fund for {Eb}.', arTmpl: 'نحتفظ بصندوق طوارئ لأجل {Eb_ar}.',
        slots: {
          Eb: [
            { en: 'bad days', ar: 'الأيام الصعبة' }, { en: 'medical costs', ar: 'التكاليف الطبية' },
            { en: 'car repairs', ar: 'إصلاحات السيارة' }, { en: 'sudden bills', ar: 'الفواتير المفاجئة' },
            { en: 'job loss', ar: 'فقدان العمل' }, { en: 'school costs', ar: 'تكاليف المدرسة' },
            { en: 'home repairs', ar: 'إصلاحات المنزل' }, { en: 'hospital visits', ar: 'زيارات المستشفى' },
          ],
        },
        tags: ['budgeting', 'money'], d: 2, limit: 8,
      },
      {
        tmpl: '{S} {V} money every month for the future.', arTmpl: '{S_ar} {V_ar} مالا كل شهر للمستقبل.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'He', ar: 'هو', agr: 'he' },
            { en: 'She', ar: 'هي', agr: 'she' }, { en: 'We', ar: 'نحن', agr: 'we' },
            { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{ en: B.enPresent('save', x.S.agr), ar: B.arPresent('save', x.S.agr) }],
        },
        tags: ['budgeting', 'present-simple'], d: 2, limit: 5,
      },
      {
        tmpl: 'If I {Sc} less coffee, I will save more money.', arTmpl: 'إذا {Sc_ar} قهوة أقل، سأدخر مالا أكثر.',
        slots: {
          Sc: [
            { en: 'drink', ar: 'شربت' }, { en: 'buy', ar: 'اشتريت' },
            { en: 'make', ar: 'صنعت' }, { en: 'order', ar: 'طلبت' },
          ],
        },
        tags: ['budgeting', 'conditionals'], d: 3, limit: 4,
      },
    ],
    fills: [
      { en: 'I track my expenses in a small notebook.', ar: 'أتتبع مصروفي في دفتر صغير.', word: 'track', hint: 'يتتبع' },
      { en: 'I save ten percent of my income every month.', ar: 'أدخر عشرة بالمئة من دخلي كل شهر.', word: 'income', hint: 'دخل' },
      { en: 'Rent takes half my salary.', ar: 'الإيجار يأخذ نصف راتبي.', word: 'half', hint: 'نصف' },
      { en: 'We keep an emergency fund for bad days.', ar: 'نحتفظ بصندوق طوارئ للأيام الصعبة.', word: 'emergency', hint: 'طوارئ' },
      { en: 'He spends all his cash in the first week.', ar: 'ينفق كل نقوده في الأسبوع الأول.', word: 'cash', hint: 'نقدا' },
      { en: 'Do you write down every small expense?', ar: 'هل تدون كل مصروف صغير؟', word: 'expense', hint: 'مصروف' },
      { en: 'Then list your bills: rent, electricity and internet.', ar: 'ثم اذكر فواتيرك: الإيجار والكهرباء والإنترنت.', word: 'bills', hint: 'فواتير' },
      { en: 'A discount card saves us money at the supermarket.', ar: 'بطاقة الخصم توفر لنا مالا في السوبر ماركت.', word: 'discount', hint: 'خصم' },
    ],
    orders: [
      { en: 'I track my expenses in a small notebook.', ar: 'أتتبع مصروفي في دفتر صغير.' },
      { en: 'Rent takes half my salary.', ar: 'الإيجار يأخذ نصف راتبي.' },
      { en: 'I save ten percent of my income every month.', ar: 'أدخر عشرة بالمئة من دخلي كل شهر.' },
      { en: 'We keep an emergency fund for bad days.', ar: 'نحتفظ بصندوق طوارئ للأيام الصعبة.' },
      { en: 'He spends all his cash in the first week.', ar: 'ينفق كل نقوده في الأسبوع الأول.' },
      { en: 'If I buy less take-away, I will save more money.', ar: 'إذا اشتريت طعاما جاهزا أقل، سأدخر مالا أكثر.' },
    ],
    mc: [
      { question: 'What is a budget?', options: ['خطة للدخل والمصروف', 'نوع من الفواتير', 'وظيفة حكومية', 'حساب بنكي مغلق'], answerIndex: 0, ar: 'ما هي الميزانية؟' },
      { question: 'You want money for emergencies. You keep:', options: ['an emergency fund', 'a shopping list', 'a gift card', 'a bus pass'], answerIndex: 0, ar: 'تريد مالا للطوارئ، فتحتفظ بـ:' },
      { question: '"Track your expenses" means:', options: ['سجل مصروفاتك', 'زد مصروفاتك', 'اخف مصروفاتك', 'انس مصروفاتك'], answerIndex: 0, ar: 'ماذا يعني Track your expenses؟' },
      { question: 'Rent takes half your salary. A good first step is:', options: ['Cut other small costs', 'Stop paying rent', 'Borrow more money', 'Ignore your bills'], answerIndex: 0, ar: 'الإيجار يأخذ نصف راتك، ما الخطوة الأولى الجيدة؟' },
    ],
  },
];
