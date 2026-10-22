/* ============================================================
   v2 section data — s10-a1.js
   Complex Situations & Rights · lessons 221–224 (formal
   complaint, refund disputes, landlord & tenant, workers' rights)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 221 — Filing a Formal Complaint ================= */
  {
    num: 221,
    tags: ['complaints', 'formal-language'],
    objectives: [
      'Open a formal complaint politely',
      'Ask for a reference number and a deadline',
      'Follow up on a written complaint',
    ],
    grammar: {
      explanation: 'Formal complaints use polite, complete sentences. Open with "I would like to file a formal complaint about ...". Present perfect connects the past to now: "I have already sent an email", "The complaint has not been acknowledged yet". Institutions often use the passive in writing: "Your complaint is being reviewed". Ask for the reference number and note the deadline: "They must reply within fourteen days". If the answer is late, you can escalate the complaint.',
      explanationAr: 'تستخدم الشكاوى الرسمية جملا مهذبة وكاملة. ابدأ بـ I would like to file a formal complaint about ... ويربط المضارع التام الماضي بالحاضر: I have already sent an email وThe complaint has not been acknowledged yet. وكثيرا ما تستخدم المؤسسات المبني للمجهول في الكتابة: Your complaint is being reviewed. اطلب الرقم المرجعي وسجل الموعد النهائي: They must reply within fourteen days. وإذا تأخر الرد يمكنك تصعيد الشكوى.',
      examples: [
        { en: 'I would like to file a formal complaint about the service.', ar: 'أود تقديم شكوى رسمية بشأن الخدمة.' },
        { en: 'Your complaint is being reviewed by our team.', ar: 'شكواك قيد المراجعة من قبل فريقنا.' },
        { en: 'They must reply within fourteen days.', ar: 'يجب أن يردوا خلال أربعة عشر يوما.' },
      ],
    },
    vocabulary: [
      { word: 'complaint', meaningAr: 'شكوى', example: 'I would like to file a formal complaint.', ipa: 'kəmˈpleɪnt' },
      { word: 'formal', meaningAr: 'رسمي', example: 'This is a formal complaint, not a request.' },
      { word: 'in writing', meaningAr: 'كتابة / خطيا', example: 'Please put your complaint in writing.' },
      { word: 'reference number', meaningAr: 'رقم مرجعي', example: 'Could I have the complaint reference number, please?' },
      { word: 'acknowledge', meaningAr: 'يقر باستلام', example: 'They must acknowledge the complaint within five days.' },
      { word: 'within', meaningAr: 'خلال / في غضون', example: 'You will receive a response within fourteen days.' },
      { word: 'deadline', meaningAr: 'الموعد النهائي', example: 'The deadline for a reply is Friday.' },
      { word: 'investigate', meaningAr: 'يحقق / يفحص', example: 'A supervisor will investigate the problem.', ipa: 'ɪnˈvɛstɪɡeɪt' },
      { word: 'resolve', meaningAr: 'يحل (المشكلة)', example: 'We hope to resolve this matter quickly.' },
      { word: 'customer care', meaningAr: 'خدمة العملاء', example: 'Customer care received my email yesterday.' },
      { word: 'response', meaningAr: 'رد رسمي', example: 'I am waiting for an official response.' },
      { word: 'escalate', meaningAr: 'يصعّد / يرفع (الشكوى)', example: 'If the reply is late, I will escalate the complaint.' },
    ],
    scenario: [
      { en: 'Good morning. I would like to file a formal complaint.', ar: 'صباح الخير. أود تقديم شكوى رسمية.', d: 1 },
      { en: 'Of course. Could you tell me what happened, please?', ar: 'بالتأكيد. هل تخبرني ما الذي حدث من فضلك؟', d: 1 },
      { en: 'The deliveries have arrived late three times this month.', ar: 'وصلت الشحنات متأخرة ثلاث مرات هذا الشهر.', d: 2 },
      { en: 'That should not have happened. I will register your complaint today.', ar: 'ما كان ينبغي أن يحدث ذلك. سأسجل شكواك اليوم.', d: 2 },
      { en: 'Could I have the complaint reference number, please?', ar: 'هل يمكنني الحصول على الرقم المرجعي للشكوى من فضلك؟', d: 1 },
      { en: 'Your reference number is on this slip.', ar: 'رقمك المرجعي على هذه الورقة.', d: 1 },
      { en: 'Please put your complaint in writing as well.', ar: 'قدم شكواك كتابة أيضا من فضلك.', d: 1 },
      { en: 'I have already sent an email to customer care.', ar: 'أرسلت بالفعل بريدا إلكترونيا إلى خدمة العملاء.', d: 2 },
      { en: 'They must acknowledge the complaint within five days.', ar: 'يجب أن يقرّوا باستلام الشكوى خلال خمسة أيام.', d: 2 },
      { en: 'The complaint has not been acknowledged yet.', ar: 'لم يتم الإقرار باستلام الشكوى بعد.', d: 3 },
      { en: 'When will I receive a written response?', ar: 'متى سأستلم ردا مكتوبا؟', d: 1 },
      { en: 'You will receive a response within fourteen days.', ar: 'ستستلم ردا خلال أربعة عشر يوما.', d: 1 },
      { en: 'Has the branch contacted you since last week?', ar: 'هل تواصل معك الفرع منذ الأسبوع الماضي؟', d: 2 },
      { en: 'No, nobody has called me about my complaint.', ar: 'لا، لم يتصل بي أحد بخصوص شكاوتي.', d: 2 },
      { en: 'The manager is investigating the matter at the moment.', ar: 'المدير يحقق في المسألة حاليا.', d: 2 },
      { en: 'We take every complaint seriously.', ar: 'نأخذ كل شكوى على محمل الجد.', d: 1 },
      { en: 'If the reply is late, I will escalate the complaint.', ar: 'إذا تأخر الرد، فسأصعّد الشكوى.', d: 3 },
      { en: 'Please keep a copy of every letter for your records.', ar: 'احتفظ بنسخة من كل خطاب لسجلاتك من فضلك.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I would like to file a formal complaint about the {N}.', arTmpl: 'أود تقديم شكوى رسمية بشأن {N_ar}.',
        slots: {
          N: [
            { en: 'service', ar: 'الخدمة' }, { en: 'delivery', ar: 'التوصيل' },
            { en: 'billing', ar: 'الفوترة' }, { en: 'internet connection', ar: 'اتصال الإنترنت' },
            { en: 'customer support', ar: 'دعم العملاء' }, { en: 'repair work', ar: 'أعمال الإصلاح' },
            { en: 'staff behavior', ar: 'سلوك الموظفين' }, { en: 'mobile network', ar: 'شبكة الهاتف المحمول' },
            { en: 'hotel booking', ar: 'حجز الفندق' },
          ],
        },
        tags: ['complaints', 'formal-language'], d: 1, limit: 9,
      },
      {
        tmpl: 'Please send me the {D} by email.', arTmpl: 'أرسل لي {D_ar} بالبريد الإلكتروني من فضلك.',
        slots: {
          D: [
            { en: 'complaint reference number', ar: 'الرقم المرجعي للشكوى' }, { en: 'written reply', ar: 'الرد الكتابي' },
            { en: 'name of the manager', ar: 'اسم المدير' }, { en: 'copy of my letter', ar: 'نسخة من خطابي' },
            { en: 'update about the case', ar: 'تحديثا عن القضية' }, { en: 'contact details of the department', ar: 'بيانات التواصل الخاصة بالإدارة' },
            { en: 'decision in writing', ar: 'القرار كتابة' },
          ],
        },
        tags: ['complaints', 'formal-language'], d: 2, limit: 7,
      },
      {
        tmpl: 'They must reply within {T}.', arTmpl: 'يجب أن يردوا خلال {T_ar}.',
        slots: {
          T: [
            { en: 'five working days', ar: 'خمسة أيام عمل' }, { en: 'seven days', ar: 'سبعة أيام' },
            { en: 'fourteen days', ar: 'أربعة عشر يوما' }, { en: 'two weeks', ar: 'أسبوعين' },
            { en: 'one month', ar: 'شهر واحد' },
          ],
        },
        tags: ['complaints', 'deadlines'], d: 2, limit: 5,
      },
      {
        tmpl: '{S} {V} a written complaint to the head office.', arTmpl: '{S_ar} {V_ar} شكوى مكتوبة إلى الإدارة العامة.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('send', x.S.agr), ar: B.arPresent('send', x.S.agr) }],
        },
        tags: ['complaints', 'present-simple'], d: 2, limit: 6,
      },
      {
        tmpl: 'Has my complaint been {PP} yet?', arTmpl: 'هل تم {PP_ar} شكواي بعد؟',
        slots: {
          PP: [
            { en: 'acknowledged', ar: 'الإقرار باستلام' }, { en: 'received', ar: 'استلام' },
            { en: 'reviewed', ar: 'مراجعة' }, { en: 'processed', ar: 'معالجة' },
            { en: 'answered', ar: 'الرد على' },
          ],
        },
        tags: ['complaints', 'passive'], d: 3, limit: 5,
      },
    ],
    fills: [
      { en: 'I would like to file a formal complaint, please.', ar: 'أود تقديم شكوى رسمية، من فضلك.', word: 'formal', hint: 'رسمي' },
      { en: 'Could I have the complaint reference number, please?', ar: 'هل يمكنني الحصول على الرقم المرجعي للشكوى من فضلك؟', word: 'reference', hint: 'رقم مرجعي' },
      { en: 'They must acknowledge the complaint within five days.', ar: 'يجب أن يقرّوا باستلام الشكوى خلال خمسة أيام.', word: 'acknowledge', hint: 'يقر باستلام' },
      { en: 'You will receive a response within fourteen days.', ar: 'ستستلم ردا خلال أربعة عشر يوما.', word: 'within', hint: 'خلال' },
      { en: 'The manager is investigating the matter at the moment.', ar: 'المدير يحقق في المسألة حاليا.', word: 'investigating', hint: 'يحقق' },
      { en: 'The complaint has not been acknowledged yet.', ar: 'لم يتم الإقرار باستلام الشكوى بعد.', word: 'yet', hint: 'بعد (في النفي)' },
      { en: 'Please keep a copy of every letter for your records.', ar: 'احتفظ بنسخة من كل خطاب لسجلاتك من فضلك.', word: 'records', hint: 'سجلات' },
      { en: 'We take every complaint seriously.', ar: 'نأخذ كل شكوى على محمل الجد.', word: 'seriously', hint: 'بجدية' },
    ],
    orders: [
      { en: 'I would like to file a formal complaint.', ar: 'أود تقديم شكوى رسمية.' },
      { en: 'Could I have the complaint reference number, please?', ar: 'هل يمكنني الحصول على الرقم المرجعي للشكوى من فضلك؟' },
      { en: 'They must acknowledge the complaint within five days.', ar: 'يجب أن يقرّوا باستلام الشكوى خلال خمسة أيام.' },
      { en: 'You will receive a written response within fourteen days.', ar: 'ستستلم ردا مكتوبا خلال أربعة عشر يوما.' },
      { en: 'Please keep a copy of every letter.', ar: 'احتفظ بنسخة من كل خطاب.' },
      { en: 'Has the branch contacted you since last week?', ar: 'هل تواصل معك الفرع منذ الأسبوع الماضي؟' },
    ],
    mc: [
      { question: 'Where do you file a formal complaint about a service?', options: ['at the company\'s customer care', 'at the bus stop', 'in a restaurant menu', 'at the gym'], answerIndex: 0, ar: 'أين تقدم شكوى رسمية عن خدمة؟' },
      { question: 'What do you ask for to track your complaint?', options: ['a complaint reference number', 'a discount code', 'a gift card', 'a parking ticket'], answerIndex: 0, ar: 'ماذا تطلب لتتبع شكواك؟' },
      { question: '"Please put your complaint in writing" means:', options: ['send it as a letter or an email', 'say it loudly', 'draw a picture', 'tell a friend'], answerIndex: 0, ar: 'ما معنى Please put your complaint in writing؟' },
      { question: 'They must reply within fourteen days. "Within" means:', options: ['before fourteen days pass', 'after fourteen days', 'fourteen kilometers', 'fourteen times'], answerIndex: 0, ar: 'في جملة They must reply within fourteen days ما معنى within؟' },
      { question: 'The reply is late. What can you do?', options: ['escalate the complaint', 'forget it', 'pay again', 'close your email'], answerIndex: 0, ar: 'تأخر الرد، فماذا تفعل؟' },
    ],
  },

  /* ================= lesson 222 — Refund Disputes ================= */
  {
    num: 222,
    tags: ['refunds', 'consumer-rights'],
    objectives: [
      'Ask for a refund and state your entitlement',
      'Quote the policy and the payment method',
      'Escalate a refund dispute politely',
    ],
    grammar: {
      explanation: 'When you dispute a refund, state your entitlement clearly: "I am entitled to a full refund". Quote the policy in the present simple: "The policy says faulty items are fully refunded". Use the passive for outcomes: "My request was rejected", "The refund was approved". Money returns "to the original payment method" — the card or account you paid with. Ask politely for action: "Could you escalate the issue, please?", and warn calmly with an if-clause: "If they refuse again, I will contact consumer rights".',
      explanationAr: 'عند نزاعك على استرداد أموالك اذكر حقك بوضوح: I am entitled to a full refund واقتبس من السياسة بالمضارع البسيط: The policy says faulty items are fully refunded. واستخدم المبني للمجهول للنتائج: My request was rejected وThe refund was approved. ويعود المال إلى وسيلة الدفع الأصلية أي البطاقة أو الحساب الذي دفعت منه. واطلب الإجراء مهذبا: Could you escalate the issue, please؟ وحذّر بهدوء بجملة شرطية: If they refuse again, I will contact consumer rights.',
      examples: [
        { en: 'I am entitled to a full refund under the policy.', ar: 'من حقي استرداد المبلغ كاملا بموجب السياسة.' },
        { en: 'My request was rejected, so I will try again.', ar: 'رُفض طلبي، لذا سأحاول مرة أخرى.' },
        { en: 'If they refuse again, I will contact consumer rights.', ar: 'إذا رفضوا مرة أخرى، سأتواصل مع حقوق المستهلك.' },
      ],
    },
    vocabulary: [
      { word: 'refund', meaningAr: 'استرداد الأموال', example: 'I am entitled to a full refund.', ipa: 'ˈriːfʌnd' },
      { word: 'entitled', meaningAr: 'من حقّه / مستحق', example: 'You are entitled to your money back.' },
      { word: 'policy', meaningAr: 'سياسة', example: 'The policy says refunds take five working days.' },
      { word: 'dispute', meaningAr: 'نزاع', example: 'This is a refund dispute, not a simple return.' },
      { word: 'escalate', meaningAr: 'يصعّد / يرفع (المشكلة)', example: 'Could you escalate the issue to your supervisor, please?' },
      { word: 'original payment method', meaningAr: 'وسيلة الدفع الأصلية', example: 'The refund must go to the original payment method.' },
      { word: 'proof of purchase', meaningAr: 'إثبات الشراء', example: 'Here is the receipt as proof of purchase.' },
      { word: 'store credit', meaningAr: 'رصيد متجر', example: 'They offered me store credit instead of a refund.' },
      { word: 'faulty', meaningAr: 'معيب', example: 'The device is faulty and stopped working.' },
      { word: 'consumer rights', meaningAr: 'حقوق المستهلك', example: 'Consumer rights protect every buyer.' },
      { word: 'exchange', meaningAr: 'استبدال', example: 'I do not want an exchange; I want a refund.' },
      { word: 'case', meaningAr: 'قضية / حالة', example: 'My case has been open for two weeks.' },
    ],
    scenario: [
      { en: 'I am entitled to a full refund for this faulty device.', ar: 'من حقي الحصول على استرداد كامل لهذا الجهاز المعيب.', d: 2 },
      { en: 'The screen stopped working after two days.', ar: 'توقفت الشاشة عن العمل بعد يومين.', d: 1 },
      { en: 'What does the policy say about refunds?', ar: 'ماذا تقول السياسة عن الاسترداد؟', d: 1 },
      { en: 'The policy says faulty items are fully refunded.', ar: 'تنص السياسة على أن القطع المعيبة تُسترد ثمنها كاملا.', d: 2 },
      { en: 'The refund must go to the original payment method.', ar: 'يجب أن يعود المبلغ إلى وسيلة الدفع الأصلية.', d: 2 },
      { en: 'I paid by card, so the money will return to my card.', ar: 'دفعت ببطاقة، لذا سيعود المال إلى بطاقتي.', d: 2 },
      { en: 'Here is the receipt as proof of purchase.', ar: 'هذا هو الإيصال كإثبات للشراء.', d: 1 },
      { en: 'They offered me store credit instead of a refund.', ar: 'عرضوا عليّ رصيد متجر بدلا من الاسترداد.', d: 2 },
      { en: 'I do not want store credit; I want my money back.', ar: 'لا أريد رصيد متجر؛ أريد استعادة أموالي.', d: 2 },
      { en: 'Have you disputed the charge with your bank?', ar: 'هل ناقشت المصروف مع بنكك؟', d: 3 },
      { en: 'No, I have not contacted the bank yet.', ar: 'لا، لم أتواصل مع البنك بعد.', d: 2 },
      { en: 'Could you escalate the issue to your supervisor, please?', ar: 'هل تصعّد المسألة إلى مشرفك من فضلك؟', d: 2 },
      { en: 'The first request was rejected by the system.', ar: 'رُفض الطلب الأول من قبل النظام.', d: 3 },
      { en: 'My second request was rejected because the receipt was missing.', ar: 'رُفض طلبي الثاني لأن الإيصال كان مفقودا.', d: 3 },
      { en: 'How long does a refund usually take?', ar: 'كم يستغرق الاسترداد عادة؟', d: 1 },
      { en: 'Refunds usually take five to seven working days.', ar: 'يستغرق الاسترداد عادة من خمسة إلى سبعة أيام عمل.', d: 2 },
      { en: 'If they refuse again, I will contact consumer rights.', ar: 'إذا رفضوا مرة أخرى، فسأتواصل مع حقوق المستهلك.', d: 3 },
      { en: 'Thank you for your help with this dispute.', ar: 'شكرا لمساعدتك في هذا النزاع.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'I am entitled to a {R}.', arTmpl: 'من حقي الحصول على {R_ar}.',
        slots: {
          R: [
            { en: 'full refund', ar: 'استرداد كامل' }, { en: 'partial refund', ar: 'استرداد جزئي' },
            { en: 'free repair', ar: 'إصلاح مجاني' }, { en: 'replacement device', ar: 'جهاز بديل' },
            { en: 'refund of the delivery fee', ar: 'استرداد رسوم التوصيل' }, { en: 'refund of the difference', ar: 'استرداد فرق السعر' },
          ],
        },
        tags: ['refunds', 'consumer-rights'], d: 1, limit: 6,
      },
      {
        tmpl: 'The policy says {C}.', arTmpl: 'تنص السياسة على أن {C_ar}.',
        slots: {
          C: [
            { en: 'refunds take five working days', ar: 'الاسترداد يستغرق خمسة أيام عمل' }, { en: 'faulty items are fully refunded', ar: 'يُسترد ثمن القطع المعيبة كاملا' },
            { en: 'receipts are required for refunds', ar: 'يُشترط الإيصال للاسترداد' }, { en: 'digital items cannot be returned', ar: 'لا يمكن إرجاع المنتجات الرقمية' },
            { en: 'sale items get store credit only', ar: 'مواد التخفيض لها رصيد متجر فقط' }, { en: 'the refund covers the delivery fee', ar: 'يشمل الاسترداد رسوم التوصيل' },
            { en: 'refunds go to the original card', ar: 'يذهب الاسترداد إلى البطاقة الأصلية' },
          ],
        },
        tags: ['refunds', 'policies'], d: 2, limit: 7,
      },
      {
        tmpl: 'Could you {A} the issue, please?', arTmpl: 'هل يمكنك {A_ar} المسألة من فضلك؟',
        slots: {
          A: [
            { en: 'escalate', ar: 'تصعيد' }, { en: 'review', ar: 'مراجعة' },
            { en: 'investigate', ar: 'فحص' }, { en: 'reopen', ar: 'إعادة فتح' },
          ],
        },
        tags: ['refunds', 'requests'], d: 2, limit: 4,
      },
      {
        tmpl: '{S} {V} the money back within {D}.', arTmpl: '{S_ar} {V_ar} المال خلال {D_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPast('pay'), ar: B.arPast('pay', x.S.agr) }],
          D: [
            { en: 'seven days', ar: 'سبعة أيام' }, { en: 'five working days', ar: 'خمسة أيام عمل' },
            { en: 'two weeks', ar: 'أسبوعين' }, { en: 'one month', ar: 'شهر واحد' },
          ],
        },
        tags: ['refunds', 'past-simple'], d: 2, limit: 12,
      },
      {
        tmpl: 'I do not want {O}; I want a refund.', arTmpl: 'لا أريد {O_ar}؛ أريد استرداد المال.',
        slots: {
          O: [
            { en: 'store credit', ar: 'رصيد متجر' }, { en: 'an exchange', ar: 'استبدالا' },
            { en: 'a voucher', ar: 'قسيمة شراء' }, { en: 'a discount', ar: 'خصما' },
            { en: 'an apology only', ar: 'اعتذارا فقط' },
          ],
        },
        tags: ['refunds', 'negation'], d: 2, limit: 5,
      },
    ],
    fills: [
      { en: 'I am entitled to a full refund for this faulty device.', ar: 'من حقي الحصول على استرداد كامل لهذا الجهاز المعيب.', word: 'entitled', hint: 'من حقّه' },
      { en: 'Here is the receipt as proof of purchase.', ar: 'هذا هو الإيصال كإثبات للشراء.', word: 'proof', hint: 'إثبات' },
      { en: 'They offered me store credit instead of a refund.', ar: 'عرضوا عليّ رصيد متجر بدلا من الاسترداد.', word: 'store', hint: 'رصيد متجر' },
      { en: 'The refund must go to the original payment method.', ar: 'يجب أن يعود المبلغ إلى وسيلة الدفع الأصلية.', word: 'original', hint: 'أصلي' },
      { en: 'Could you escalate the issue to your supervisor, please?', ar: 'هل تصعّد المسألة إلى مشرفك من فضلك؟', word: 'escalate', hint: 'يصعّد' },
      { en: 'The first request was rejected by the system.', ar: 'رُفض الطلب الأول من قبل النظام.', word: 'rejected', hint: 'مرفوض' },
      { en: 'How long does a refund usually take?', ar: 'كم يستغرق الاسترداد عادة؟', word: 'usually', hint: 'عادة' },
      { en: 'I do not want store credit; I want my money back.', ar: 'لا أريد رصيد متجر؛ أريد استعادة أموالي.', word: 'money', hint: 'مال' },
    ],
    orders: [
      { en: 'I am entitled to a full refund.', ar: 'من حقي الحصول على استرداد كامل.' },
      { en: 'What does the policy say about refunds?', ar: 'ماذا تقول السياسة عن الاسترداد؟' },
      { en: 'The refund must go to the original payment method.', ar: 'يجب أن يعود المبلغ إلى وسيلة الدفع الأصلية.' },
      { en: 'They offered me store credit instead of a refund.', ar: 'عرضوا عليّ رصيد متجر بدلا من الاسترداد.' },
      { en: 'Could you escalate the issue to your supervisor?', ar: 'هل تصعّد المسألة إلى مشرفك؟' },
      { en: 'If they refuse again, I will contact consumer rights.', ar: 'إذا رفضوا مرة أخرى، فسأتواصل مع حقوق المستهلك.' },
    ],
    mc: [
      { question: 'You are entitled to a full refund. What does "entitled" mean?', options: ['you have the right to it', 'you must pay for it', 'you borrowed it', 'you lost it'], answerIndex: 0, ar: 'في جملة You are entitled to a full refund ما معنى entitled؟' },
      { question: 'You paid by card. Where does the refund go?', options: ['back to your card', 'to a gift voucher', 'to another person', 'to the delivery driver'], answerIndex: 0, ar: 'دفعت ببطاقة، فإلى أين يذهب المبلغ المسترد؟' },
      { question: 'What is proof of purchase?', options: ['a receipt', 'a photograph of the shop', 'a birthday card', 'a bus ticket'], answerIndex: 0, ar: 'ما هو إثبات الشراء؟' },
      { question: 'They refuse your refund twice. What is a polite next step?', options: ['escalate the issue to a supervisor', 'shout at the cashier', 'leave without paying', 'hide the item'], answerIndex: 0, ar: 'رفضوا الاسترداد مرتين، فما الخطوة المهذبة التالية؟' },
      { question: 'The policy says faulty items are fully refunded. Your device is faulty. You get:', options: ['a full refund', 'nothing', 'a smaller bill', 'an extra charge'], answerIndex: 0, ar: 'تنص السياسة على استرداد ثمن المعيب كاملا، وجهازك معيب، فتحصل على:' },
    ],
  },

  /* ================= lesson 223 — Landlord and Tenant Issues ================= */
  {
    num: 223,
    tags: ['landlord-tenant', 'housing'],
    objectives: [
      'Report repair problems to the landlord',
      'Talk about written notice and the lease',
      'Know what a tenant may deduct or request',
    ],
    grammar: {
      explanation: 'Tenant language mixes rules and requests. Obligations use must and have to: "Tenants must give written notice". Promises and refusals use will and will not: "The landlord will not fix the heating". Real conditionals describe consequences: "If he does not repair it, I can deduct the cost from the rent". Scheduled events use the present simple: "The lease ends in June". Ask about money with when-questions: "When will I get my deposit back?"',
      explanationAr: 'تمزج لغة المستأجر بين القواعد والطلبات. تُعبَّر الالتزامات بـ must وhave to: Tenants must give written notice. وتُعبَّر الوعود والرفض بـ will وwill not: The landlord will not fix the heating. وتصف الجمل الشرطية الحقيقية النتائج: If he does not repair it, I can deduct the cost from the rent. وتُستخدم المضارع البسيط للأحداث المحددة: The lease ends in June. واسأل عن المال بأسئلة When: When will I get my deposit back؟',
      examples: [
        { en: 'Tenants must give written notice before they leave.', ar: 'يجب على المستأجرين تقديم إشعار كتابي قبل المغادرة.' },
        { en: 'If he does not repair it, I can deduct the cost from the rent.', ar: 'إذا لم يصلحها، يمكنني خصم التكلفة من الإيجار.' },
        { en: 'The lease ends in June.', ar: 'ينتهي عقد الإيجار في يونيو.' },
      ],
    },
    vocabulary: [
      { word: 'landlord', meaningAr: 'المالك (المؤجر)', example: 'The landlord will not fix the heating.', ipa: 'ˈlændlɔːrd' },
      { word: 'tenant', meaningAr: 'المستأجر', example: 'The tenant has rights under the lease.' },
      { word: 'lease', meaningAr: 'عقد الإيجار', example: 'Our lease ends in June.' },
      { word: 'written notice', meaningAr: 'إشعار كتابي', example: 'I gave the landlord written notice last month.' },
      { word: 'deduct', meaningAr: 'يخصم', example: 'Can I deduct the repair cost from the rent?' },
      { word: 'deposit', meaningAr: 'عربون / مبلغ التأمين', example: 'When will I get my deposit back?' },
      { word: 'repair', meaningAr: 'إصلاح', example: 'The repair took two weeks.' },
      { word: 'heating', meaningAr: 'التدفئة', example: 'The heating stopped working two weeks ago.' },
      { word: 'maintenance', meaningAr: 'صيانة', example: 'Maintenance will visit on Tuesday.' },
      { word: 'inspect', meaningAr: 'يعاين / يفحص', example: 'The agent will inspect the flat before we renew.' },
      { word: 'notice period', meaningAr: 'فترة الإشعار', example: 'My notice period is two months.' },
      { word: 'renew', meaningAr: 'يجدد', example: 'We want to renew the lease for one more year.' },
    ],
    scenario: [
      { en: 'The heating stopped working two weeks ago.', ar: 'توقفت التدفئة عن العمل قبل أسبوعين.', d: 1 },
      { en: 'I reported the problem twice, but nothing has changed.', ar: 'أبلغت عن المشكلة مرتين، لكن لا شيء تغير.', d: 2 },
      { en: 'The landlord will not fix the heating.', ar: 'المالك لن يصلح التدفئة.', d: 1 },
      { en: 'Did you contact the landlord about the heating?', ar: 'هل تواصلت مع المالك بخصوص التدفئة؟', d: 1 },
      { en: 'Yes, I called him twice and sent an email.', ar: 'نعم، اتصلت به مرتين وأرسلت بريدا إلكترونيا.', d: 1 },
      { en: 'You should send him a formal written notice.', ar: 'ينبغي أن ترسل له إشعارا كتابيا رسميا.', d: 2 },
      { en: 'What should the written notice include?', ar: 'ماذا ينبغي أن يتضمن الإشعار الكتابي؟', d: 2 },
      { en: 'It should include the problem, the date and a deadline.', ar: 'ينبغي أن يتضمن المشكلة والتاريخ وموعدا نهائيا.', d: 2 },
      { en: 'If he does not repair it, I can deduct the cost from the rent.', ar: 'إذا لم يصلحها، يمكنني خصم التكلفة من الإيجار.', d: 3 },
      { en: 'Is that legal in this city?', ar: 'هل هذا قانوني في هذه المدينة؟', d: 2 },
      { en: 'Yes, tenants have this right after thirty days.', ar: 'نعم، للمستأجرين هذا الحق بعد ثلاثين يوما.', d: 2 },
      { en: 'Our lease ends in June.', ar: 'ينتهي عقد إيجارنا في يونيو.', d: 1 },
      { en: 'We want to renew it for one more year.', ar: 'نريد تجديده لسنة إضافية.', d: 1 },
      { en: 'The agent will inspect the flat before we renew.', ar: 'سيعاين الوكيل الشقة قبل التجديد.', d: 2 },
      { en: 'They must give us at least twenty-four hours notice.', ar: 'يجب أن يعطونا إشعارا مدته أربعة وعشرون ساعة على الأقل.', d: 3 },
      { en: 'When will I get my deposit back?', ar: 'متى سأستعيد العربون؟', d: 1 },
      { en: 'You will get it back after the final inspection.', ar: 'ستستعيده بعد المعاينة النهائية.', d: 1 },
      { en: 'Please keep every rent receipt for your records.', ar: 'احتفظ بكل إيصال إيجار لسجلاتك من فضلك.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'The landlord will not {A}.', arTmpl: 'المالك لن {A_ar}.',
        slots: {
          A: [
            { en: 'fix the heating', ar: 'يصلح التدفئة' }, { en: 'repair the water leak', ar: 'يصلح تسرب الماء' },
            { en: 'answer my calls', ar: 'يرد على مكالماتي' }, { en: 'return my deposit', ar: 'يعيد لي العربون' },
            { en: 'renew the lease', ar: 'يجدد عقد الإيجار' }, { en: 'lower the rent', ar: 'يخفض الإيجار' },
          ],
        },
        tags: ['landlord-tenant', 'negation'], d: 1, limit: 6,
      },
      {
        tmpl: '{S} {V} the landlord about the problem.', arTmpl: '{S_ar} {V_ar} المالك عن المشكلة.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('tell', x.S.agr), ar: B.arPresent('tell', x.S.agr) }],
        },
        tags: ['landlord-tenant', 'present-simple'], d: 2, limit: 6,
      },
      {
        tmpl: 'The lease ends in {M}.', arTmpl: 'ينتهي عقد الإيجار في {M_ar}.',
        slots: { M: B.MONTHS },
        tags: ['landlord-tenant', 'lease'], d: 1, limit: 8,
      },
      {
        tmpl: 'Our notice period is {N}.', arTmpl: 'فترة الإشعار لدينا {N_ar}.',
        slots: {
          N: [
            { en: 'one month', ar: 'شهر واحد' }, { en: 'two months', ar: 'شهران' },
            { en: 'sixty days', ar: 'ستون يوما' }, { en: 'eight weeks', ar: 'ثمانية أسابيع' },
            { en: 'thirty days', ar: 'ثلاثون يوما' },
          ],
        },
        tags: ['landlord-tenant', 'notice'], d: 2, limit: 5,
      },
      {
        tmpl: 'Can I deduct the {C} from the rent?', arTmpl: 'هل يمكنني خصم {C_ar} من الإيجار؟',
        slots: {
          C: [
            { en: 'repair cost', ar: 'تكلفة الإصلاح' }, { en: 'plumbing bill', ar: 'فاتورة السباكة' },
            { en: 'lock change', ar: 'تكلفة تغيير القفل' }, { en: 'electrician fee', ar: 'أجرة الكهربائي' },
            { en: 'window repair', ar: 'تكلفة إصلاح النافذة' },
          ],
        },
        tags: ['landlord-tenant', 'rent'], d: 2, limit: 5,
      },
      {
        tmpl: 'Maintenance will visit on {D}.', arTmpl: 'ستقوم الصيانة بزيارة يوم {D_ar}.',
        slots: { D: B.DAYS },
        tags: ['landlord-tenant', 'maintenance'], d: 1, limit: 5,
      },
    ],
    fills: [
      { en: 'The heating stopped working two weeks ago.', ar: 'توقفت التدفئة عن العمل قبل أسبوعين.', word: 'heating', hint: 'التدفئة' },
      { en: 'The landlord will not fix the heating.', ar: 'المالك لن يصلح التدفئة.', word: 'landlord', hint: 'المالك' },
      { en: 'You should send him a formal written notice.', ar: 'ينبغي أن ترسل له إشعارا كتابيا رسميا.', word: 'notice', hint: 'إشعار' },
      { en: 'If he does not repair it, I can deduct the cost from the rent.', ar: 'إذا لم يصلحها، يمكنني خصم التكلفة من الإيجار.', word: 'deduct', hint: 'يخصم' },
      { en: 'Our lease ends in June.', ar: 'ينتهي عقد إيجارنا في يونيو.', word: 'lease', hint: 'عقد الإيجار' },
      { en: 'When will I get my deposit back?', ar: 'متى سأستعيد العربون؟', word: 'deposit', hint: 'عربون' },
      { en: 'The agent will inspect the flat before we renew.', ar: 'سيعاين الوكيل الشقة قبل التجديد.', word: 'inspect', hint: 'يعاين' },
      { en: 'Please keep every rent receipt for your records.', ar: 'احتفظ بكل إيصال إيجار لسجلاتك من فضلك.', word: 'receipt', hint: 'إيصال' },
    ],
    orders: [
      { en: 'The heating stopped working two weeks ago.', ar: 'توقفت التدفئة عن العمل قبل أسبوعين.' },
      { en: 'The landlord will not fix the heating.', ar: 'المالك لن يصلح التدفئة.' },
      { en: 'You should send him a formal written notice.', ar: 'ينبغي أن ترسل له إشعارا كتابيا رسميا.' },
      { en: 'Our lease ends in June, so we have time.', ar: 'ينتهي عقد إيجارنا في يونيو، لذا لدينا وقت.' },
      { en: 'When will I get my deposit back?', ar: 'متى سأستعيد العربون؟' },
      { en: 'The new tenants are moving in next month.', ar: 'المستأجرون الجدد سينتقلون الشهر القادم.' },
    ],
    mc: [
      { question: 'Who is the tenant?', options: ['the person who rents the flat', 'the person who owns the building', 'the repair worker', 'the city inspector'], answerIndex: 0, ar: 'من هو المستأجر؟' },
      { question: 'The heating is broken. What should you send the landlord?', options: ['a written notice', 'a birthday card', 'a recipe', 'a photo album'], answerIndex: 0, ar: 'التدفئة معطلة، فماذا ترسل للمالك؟' },
      { question: 'The lease ends in June. What is the lease?', options: ['the rental contract', 'the electricity bill', 'the building name', 'the front door key'], answerIndex: 0, ar: 'ينتهي عقد الإيجار في يونيو، فما هو عقد الإيجار؟' },
      { question: 'After thirty days without repair, a tenant may:', options: ['deduct the cost from the rent', 'change the locks forever', 'stop paying rent completely', 'sell the flat'], answerIndex: 0, ar: 'بعد ثلاثين يوما بدون إصلاح، يمكن للمستأجر أن:' },
      { question: 'When do you usually get the deposit back?', options: ['after the final inspection', 'before you move in', 'never', 'every Friday'], answerIndex: 0, ar: 'متى تستعيد العربون عادة؟' },
    ],
  },

  /* ================= lesson 224 — Workers' Rights ================= */
  {
    num: 224,
    tags: ['workers-rights', 'employment'],
    objectives: [
      'Name basic employment rights',
      'Ask about overtime, leave and pay',
      'Respond to unfair treatment at work',
    ],
    grammar: {
      explanation: 'Rights are often expressed with modals: "Workers must receive overtime pay", "The salary must not fall below the minimum wage", "You can appeal". Entitlement uses "be entitled to": "Every employee is entitled to paid leave". Present perfect links past work to now: "She has not taken a holiday for two years". Real conditionals give next steps: "If the employer refuses, you can file a legal case".',
      explanationAr: 'تُعبَّر الحقوق غالبا بأفعال النحوة: Workers must receive overtime pay وThe salary must not fall below the minimum wage وYou can appeal. ويُستخدم be entitled to للاستحقاق: Every employee is entitled to paid leave. ويربط المضارع التام العمل السابق بالحاضر: She has not taken a holiday for two years. وتعطي الجمل الشرطية الحقيقية الخطوة التالية: If the employer refuses, you can file a legal case.',
      examples: [
        { en: 'Workers must receive overtime pay for extra hours.', ar: 'يجب أن يحصل العاملون على أجر العمل الإضافي عن الساعات الإضافية.' },
        { en: 'Every employee is entitled to paid leave.', ar: 'كل موظف من حقّه إجازة مدفوعة الأجر.' },
        { en: 'If the employer refuses, you can file a legal case.', ar: 'إذا رفض صاحب العمل، يمكنك رفع دعوى قانونية.' },
      ],
    },
    vocabulary: [
      { word: 'overtime pay', meaningAr: 'أجر العمل الإضافي', example: 'Workers must receive overtime pay for extra hours.' },
      { word: 'paid leave', meaningAr: 'إجازة مدفوعة الأجر', example: 'Every worker deserves paid leave.' },
      { word: 'minimum wage', meaningAr: 'الحد الأدنى للأجور', example: 'The minimum wage rose this year.' },
      { word: 'unfair dismissal', meaningAr: 'الفصل التعسفي', example: 'He filed a case for unfair dismissal.' },
      { word: 'rights', meaningAr: 'حقوق', example: 'You should know your rights.' },
      { word: 'employer', meaningAr: 'صاحب العمل', example: 'The employer must provide a contract.' },
      { word: 'employee', meaningAr: 'موظف / عامل', example: 'Each employee has a written contract.' },
      { word: 'trade union', meaningAr: 'نقابة عمالية', example: 'The trade union will support us.' },
      { word: 'entitlement', meaningAr: 'استحقاق', example: 'Paid leave is a legal entitlement.' },
      { word: 'working hours', meaningAr: 'ساعات العمل', example: 'My working hours are nine to five.' },
      { word: 'discrimination', meaningAr: 'تمييز', example: 'Discrimination at work is against the law.' },
      { word: 'salary', meaningAr: 'راتب', example: 'The salary must not fall below the minimum wage.', ipa: 'ˈsæləri' },
    ],
    scenario: [
      { en: 'Do you know your rights at work?', ar: 'هل تعرف حقوقك في العمل؟', d: 1 },
      { en: 'Yes, I read the labor law last year.', ar: 'نعم، قرأت قانون العمل العام الماضي.', d: 1 },
      { en: 'Workers must receive overtime pay for extra hours.', ar: 'يجب أن يحصل العاملون على أجر العمل الإضافي عن الساعات الإضافية.', d: 2 },
      { en: 'I worked ten extra hours last week.', ar: 'عملت عشر ساعات إضافية الأسبوع الماضي.', d: 1 },
      { en: 'Have you received the overtime pay yet?', ar: 'هل استلمت أجر العمل الإضافي بعد؟', d: 2 },
      { en: 'No, I have not received anything extra.', ar: 'لا، لم أستلم شيئا إضافيا.', d: 2 },
      { en: 'Every employee is entitled to paid leave.', ar: 'كل موظف من حقّه إجازة مدفوعة الأجر.', d: 2 },
      { en: 'She has not taken a holiday for two years.', ar: 'لم تأخذ إجازة منذ سنتين.', d: 2 },
      { en: 'Is that legal?', ar: 'هل هذا قانوني؟', d: 1 },
      { en: 'No, it is not; the law guarantees paid leave.', ar: 'لا، ليس كذلك؛ القانون يضمن الإجازة المدفوعة.', d: 2 },
      { en: 'The salary must not fall below the minimum wage.', ar: 'يجب ألا يقل الراتب عن الحد الأدنى للأجور.', d: 2 },
      { en: 'What can I do about unfair dismissal?', ar: 'ماذا يمكنني أن أفعل حيال الفصل التعسفي؟', d: 2 },
      { en: 'You can contact the trade union for support.', ar: 'يمكنك التواصل مع النقابة العمالية للدعم.', d: 1 },
      { en: 'They will review your case for free.', ar: 'سيراجعون قضيتك مجانا.', d: 1 },
      { en: 'If the employer refuses, you can file a legal case.', ar: 'إذا رفض صاحب العمل، يمكنك رفع دعوى قانونية.', d: 3 },
      { en: 'Discrimination at work is against the law.', ar: 'التمييز في العمل مخالف للقانون.', d: 2 },
      { en: 'The company must give every employee a written contract.', ar: 'يجب على الشركة أن تعطي كل موظف عقد عمل مكتوبا.', d: 2 },
      { en: 'Please tell the new workers about their rights.', ar: 'أخبر العمال الجدد بحقوقهم من فضلك.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'Workers must receive {R}.', arTmpl: 'يجب أن يحصل العاملون على {R_ar}.',
        slots: {
          R: [
            { en: 'overtime pay', ar: 'أجر العمل الإضافي' }, { en: 'paid leave', ar: 'إجازة مدفوعة الأجر' },
            { en: 'a written contract', ar: 'عقد عمل مكتوب' }, { en: 'a safe workplace', ar: 'مكان عمل آمن' },
            { en: 'an employment contract', ar: 'عقد عمل' }, { en: 'their full salary', ar: 'رواتبهم كاملة' },
            { en: 'training for new skills', ar: 'تدريبا لمهارات جديدة' },
          ],
        },
        tags: ['workers-rights', 'modals'], d: 1, limit: 7,
      },
      {
        tmpl: '{S} {HAVE} {PP} overtime for {D}.', arTmpl: '{S_ar} {PP_ar} عملا إضافيا منذ {D_ar}.',
        slots: {
          S: B.PRONOUNS,
          HAVE: (x) => [{ en: B.AGR[x.S.agr].have, ar: '' }],
          PP: (x) => [{ en: 'worked', ar: B.arPresent('work', x.S.agr) }],
          D: [
            { en: 'three years', ar: 'ثلاث سنوات' }, { en: 'five months', ar: 'خمسة أشهر' },
            { en: 'two years', ar: 'سنتين' }, { en: 'ten years', ar: 'عشر سنوات' },
            { en: 'a long time', ar: 'وقتا طويلا' },
          ],
        },
        tags: ['workers-rights', 'present-perfect'], d: 2, limit: 14,
      },
      {
        tmpl: 'Is {O} included in the contract?', arTmpl: 'هل {O_ar} مشمول في العقد؟',
        slots: {
          O: [
            { en: 'overtime pay', ar: 'أجر العمل الإضافي' }, { en: 'paid leave', ar: 'الإجازة المدفوعة' },
            { en: 'health insurance', ar: 'التأمين الصحي' }, { en: 'the annual bonus', ar: 'المكافأة السنوية' },
            { en: 'transport allowance', ar: 'بدل المواصلات' }, { en: 'the end-of-service pay', ar: 'مكافأة نهاية الخدمة' },
          ],
        },
        tags: ['workers-rights', 'contracts'], d: 2, limit: 6,
      },
      {
        tmpl: 'Before you sign, you should {A}.', arTmpl: 'قبل التوقيع، ينبغي أن {A_ar}.',
        slots: {
          A: [
            { en: 'read the contract carefully', ar: 'تقرأ العقد بعناية' }, { en: 'ask about the working hours', ar: 'تسأل عن ساعات العمل' },
            { en: 'check the notice period', ar: 'تتحقق من فترة الإشعار' }, { en: 'keep a copy for yourself', ar: 'تحتفظ بنسخة لنفسك' },
            { en: 'ask the trade union', ar: 'تسأل النقابة العمالية' }, { en: 'ask about the salary reviews', ar: 'تسأل عن مراجعات الراتب' },
          ],
        },
        tags: ['workers-rights', 'advice'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'Workers must receive overtime pay for extra hours.', ar: 'يجب أن يحصل العاملون على أجر العمل الإضافي عن الساعات الإضافية.', word: 'overtime', hint: 'عمل إضافي' },
      { en: 'Have you received the overtime pay yet?', ar: 'هل استلمت أجر العمل الإضافي بعد؟', word: 'received', hint: 'استلم' },
      { en: 'Every employee is entitled to paid leave.', ar: 'كل موظف من حقّه إجازة مدفوعة الأجر.', word: 'leave', hint: 'إجازة' },
      { en: 'She has not taken a holiday for two years.', ar: 'لم تأخذ إجازة منذ سنتين.', word: 'holiday', hint: 'عطلة' },
      { en: 'The salary must not fall below the minimum wage.', ar: 'يجب ألا يقل الراتب عن الحد الأدنى للأجور.', word: 'minimum', hint: 'الحد الأدنى' },
      { en: 'What can I do about unfair dismissal?', ar: 'ماذا يمكنني أن أفعل حيال الفصل التعسفي؟', word: 'unfair', hint: 'تعسفي' },
      { en: 'You can contact the trade union for support.', ar: 'يمكنك التواصل مع النقابة العمالية للدعم.', word: 'union', hint: 'نقابة' },
      { en: 'Please tell the new workers about their rights.', ar: 'أخبر العمال الجدد بحقوقهم من فضلك.', word: 'rights', hint: 'حقوق' },
    ],
    orders: [
      { en: 'Do you know your rights at work?', ar: 'هل تعرف حقوقك في العمل؟' },
      { en: 'Workers must receive overtime pay for extra hours.', ar: 'يجب أن يحصل العاملون على أجر العمل الإضافي عن الساعات الإضافية.' },
      { en: 'The salary must not fall below the minimum wage.', ar: 'يجب ألا يقل الراتب عن الحد الأدنى للأجور.' },
      { en: 'What can I do about unfair dismissal?', ar: 'ماذا يمكنني أن أفعل حيال الفصل التعسفي؟' },
      { en: 'Discrimination at work is against the law.', ar: 'التمييز في العمل مخالف للقانون.' },
      { en: 'The company must give every employee a written contract.', ar: 'يجب على الشركة أن تعطي كل موظف عقد عمل مكتوبا.' },
    ],
    mc: [
      { question: 'What must workers receive for extra hours?', options: ['overtime pay', 'a company car', 'a new desk', 'free lunch'], answerIndex: 0, ar: 'ماذا يجب أن يحصل عليه العمال عن الساعات الإضافية؟' },
      { question: 'Paid leave is:', options: ['a holiday where you still get your salary', 'a day you pay for', 'unpaid training', 'a bus ticket'], answerIndex: 0, ar: 'الإجازة المدفوعة الأجر هي:' },
      { question: 'The salary must not fall below the:', options: ['minimum wage', 'electricity bill', 'rent of the office', 'price of gold'], answerIndex: 0, ar: 'يجب ألا يقل الراتب عن:' },
      { question: 'Unfair dismissal means:', options: ['losing your job without a fair reason', 'getting a promotion', 'a paid holiday', 'a salary raise'], answerIndex: 0, ar: 'الفصل التعسفي يعني:' },
      { question: 'Who can support workers with a legal case?', options: ['the trade union', 'the coffee machine', 'the parking guard', 'the weather'], answerIndex: 0, ar: 'من يدعم العمال في الدعوى القانونية؟' },
    ],
  },
];
