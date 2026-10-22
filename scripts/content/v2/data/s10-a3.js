/* ============================================================
   v2 section data — s10-a3.js
   Complex Situations & Rights · lessons 228–233 (hospital bill,
   immigration, consumer rights, unfair treatment, unexpected
   situations, lost passport at the embassy)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 228 — Understanding a Hospital Bill ================= */
  {
    num: 228,
    tags: ['hospital-bill', 'insurance'],
    objectives: [
      'Read an itemized hospital bill line by line',
      'Ask which charges are covered by insurance',
      'Request a payment plan for a large bill',
    ],
    grammar: {
      explanation: 'A hospital bill lists charges, so ask for details: "Could I have an itemized bill, please?". Use covered by for insurance: "Is this test covered by my insurance?". The copay is the part you pay yourself: "How much is my copay for this visit?". The present perfect reports finished payments: "The insurance has already paid its part". If the bill is large, ask for time: "Can I pay in installments?". Note plurals on the bill: "There are two charges for the same medication".',
      explanationAr: 'فاتورة المستشفى تسرد الرسوم، فاطلب التفاصيل: Could I have an itemized bill, please؟ واستخدم covered by للتأمين: Is this test covered by my insurance؟ والمبلغ المشارك copay هو الجزء الذي تدفعه بنفسك: How much is my copay for this visit؟ ويروي المضارع التام مدفوعات منتهية: The insurance has already paid its part. وإذا كانت الفاتورة كبيرة فاطلب مهلة: Can I pay in installments؟ وانتبه للجمع في الفاتورة: There are two charges for the same medication.',
      examples: [
        { en: 'Could I have an itemized bill, please?', ar: 'هل يمكنني الحصول على فاتورة مفصلة من فضلك؟' },
        { en: 'This test is covered by my insurance.', ar: 'هذا التحليل مشمول بتأميني.' },
        { en: 'Can I pay the bill in installments?', ar: 'هل أستطيع دفع الفاتورة على أقساط؟' },
      ],
    },
    vocabulary: [
      { word: 'bill', meaningAr: 'فاتورة', example: 'The hospital sent me the bill by email.', ipa: 'bɪl' },
      { word: 'itemized bill', meaningAr: 'فاتورة مفصلة', example: 'Could I have an itemized bill, please?' },
      { word: 'charge', meaningAr: 'رسم / مبلغ مطلوب', example: 'There is a small charge for the night nurse.' },
      { word: 'covered', meaningAr: 'مشمول بالتأمين', example: 'This test is covered by my insurance.' },
      { word: 'copay', meaningAr: 'مبلغ المشاركة', example: 'Your copay is fifty dollars, madam.' },
      { word: 'medication', meaningAr: 'دواء', example: 'My insurance does not cover this medication.' },
      { word: 'insurance', meaningAr: 'تأمين', example: 'Is this blood test covered by my insurance?' },
      { word: 'payment plan', meaningAr: 'خطة سداد', example: 'You can ask the finance office for a payment plan.' },
      { word: 'installments', meaningAr: 'أقساط', example: 'Can I pay the bill in monthly installments?' },
      { word: 'total', meaningAr: 'المجموع', example: 'The total is two hundred and forty dollars.' },
      { word: 'finance office', meaningAr: 'مكتب المالية', example: 'The finance office opens at nine in the morning.' },
      { word: 'review', meaningAr: 'يراجع', example: 'Please review every line before you sign.' },
    ],
    scenario: [
      { en: 'Excuse me, I have a question about my hospital bill.', ar: 'عفوا، لدي سؤال عن فاتورة المستشفى.', d: 1 },
      { en: 'Of course, which part is not clear, sir?', ar: 'بالتأكيد، أي جزء غير واضح يا سيدي؟', d: 1 },
      { en: 'I do not understand the charge for the room.', ar: 'لا أفهم رسوم الغرفة.', d: 1 },
      { en: 'You stayed in a single room for three nights.', ar: 'أقمت في غرفة مفردة لثلاث ليال.', d: 1 },
      { en: 'Is this blood test covered by my insurance?', ar: 'هل تحليل الدم هذا مشمول بتأميني؟', d: 1 },
      { en: 'Yes, the insurance has already paid its part.', ar: 'نعم، لقد دفع التأمين نصيبه بالفعل.', d: 1 },
      { en: 'How much is my copay for this visit?', ar: 'كم مبلغ المشاركة الخاص بي لهذه الزيارة؟', d: 1 },
      { en: 'Your copay is fifty dollars, madam.', ar: 'مبلغ مشاركتك خمسون دولارا يا سيدتي.', d: 1 },
      { en: 'Could I have an itemized bill, please?', ar: 'هل يمكنني الحصول على فاتورة مفصلة من فضلك؟', d: 2 },
      { en: 'Certainly, every service is listed on these pages.', ar: 'بكل تأكيد، كل خدمة مسردة في هذه الصفحات.', d: 2 },
      { en: 'There are two charges for the same medication here.', ar: 'هناك رسمان عن الدواء نفسه هنا.', d: 2 },
      { en: 'Let me check that line for you.', ar: 'دعني أتحقق من هذا السطر لك.', d: 2 },
      { en: 'The bill is too large for me to pay at once.', ar: 'الفاتورة أكبر من أن أدفعها دفعة واحدة.', d: 3 },
      { en: 'You can ask the finance office for a payment plan.', ar: 'يمكنك أن تطلب خطة سداد من مكتب المالية.', d: 3 },
      { en: 'Can I pay in four installments instead?', ar: 'هل يمكنني الدفع على أربعة أقساط بدلا من ذلك؟', d: 3 },
      { en: 'Yes, you can pay in small monthly parts.', ar: 'نعم، يمكنك الدفع على أجزاء شهرية صغيرة.', d: 3 },
      { en: 'Thank you, this is much clearer now.', ar: 'شكرا لك، الأمر أوضح بكثير الآن.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Does my insurance cover {S}?', arTmpl: 'هل يغطي تأميني {S_ar}؟',
        slots: {
          S: [
            { en: 'the blood test', ar: 'تحليل الدم' }, { en: 'the X-ray', ar: 'الأشعة' },
            { en: 'the operation', ar: 'العملية الجراحية' }, { en: 'the medication', ar: 'الأدوية' },
            { en: 'the ambulance ride', ar: 'نقلا بالإسعاف' },
          ],
        },
        tags: ['insurance', 'questions'], d: 1, limit: 5,
      },
      {
        tmpl: 'I do not understand {C} on the bill.', arTmpl: 'لا أفهم {C_ar} في الفاتورة.',
        slots: {
          C: [
            { en: 'the charge for the room', ar: 'رسوم الغرفة' }, { en: 'this medication charge', ar: 'رسوم الدواء هذه' },
            { en: 'the doctor\'s fee', ar: 'أجر الطبيب' }, { en: 'these extra charges', ar: 'هذه الرسوم الإضافية' },
            { en: 'the lab fee', ar: 'رسوم المختبر' },
          ],
        },
        tags: ['hospital-bill', 'negatives'], d: 1, limit: 5,
      },
      {
        tmpl: 'The charge for {S} is {A} dollars.', arTmpl: 'رسوم {S_ar} هي {A_ar} دولارا.',
        slots: {
          S: [
            { en: 'the room', ar: 'الغرفة' }, { en: 'the surgery', ar: 'العملية الجراحية' },
            { en: 'the night nurse', ar: 'الممرضة الليلية' }, { en: 'the follow-up visit', ar: 'زيارة المتابعة' },
            { en: 'the laboratory tests', ar: 'تحاليل المختبر' },
          ],
          A: [
            { en: 'eighty', ar: 'ثمانين' }, { en: 'one hundred', ar: 'مئة' },
            { en: 'two hundred', ar: 'مئتين' }, { en: 'one hundred fifty', ar: 'مئة وخمسين' },
          ],
        },
        tags: ['hospital-bill', 'numbers'], d: 2, limit: 20,
      },
      {
        tmpl: 'Could I have {D}, please?', arTmpl: 'هل يمكنني الحصول على {D_ar} من فضلك؟',
        slots: {
          D: [
            { en: 'an itemized bill', ar: 'فاتورة مفصلة' }, { en: 'a copy of the bill', ar: 'نسخة من الفاتورة' },
            { en: 'a payment plan', ar: 'خطة سداد' }, { en: 'more time to pay', ar: 'وقتا أطول للدفع' },
            { en: 'a receipt for my records', ar: 'إيصالا لسجلاتي' },
          ],
        },
        tags: ['hospital-bill', 'requests'], d: 2, limit: 5,
      },
      {
        tmpl: 'You can pay the bill {W}.', arTmpl: 'يمكنك دفع الفاتورة {W_ar}.',
        slots: {
          W: [
            { en: 'in monthly installments', ar: 'على أقساط شهرية' }, { en: 'in four installments', ar: 'على أربعة أقساط' },
            { en: 'by credit card', ar: 'ببطاقة الائتمان' }, { en: 'at the finance office', ar: 'في مكتب المالية' },
            { en: 'within thirty days', ar: 'خلال ثلاثين يوما' },
          ],
        },
        tags: ['hospital-bill', 'payment'], d: 3, limit: 5,
      },
    ],
    fills: [
      { en: 'The hospital sent me the bill by email.', ar: 'أرسل لي المستشفى الفاتورة بالبريد الإلكتروني.', word: 'bill', hint: 'فاتورة' },
      { en: 'My insurance does not cover this medication.', ar: 'لا يغطي تأميني هذا الدواء.', word: 'medication', hint: 'دواء' },
      { en: 'I have already paid my part of the bill.', ar: 'لقد دفعت نصيبي من الفاتورة بالفعل.', word: 'already', hint: 'حال التام' },
      { en: 'There is a small charge for the night nurse.', ar: 'هناك رسم بسيط على الممرضة الليلية.', word: 'charge', hint: 'رسم' },
      { en: 'Can I pay the bill in monthly installments?', ar: 'هل أستطيع دفع الفاتورة على أقساط شهرية؟', word: 'installments', hint: 'أقساط' },
      { en: 'The finance office opens at nine in the morning.', ar: 'يفتح مكتب المالية في التاسعة صباحا.', word: 'finance', hint: 'المالية' },
      { en: 'Please review every line before you sign.', ar: 'راجع كل سطر قبل أن توقع من فضلك.', word: 'review', hint: 'يراجع' },
      { en: 'The total is two hundred and forty dollars.', ar: 'المجموع مئتان وأربعون دولارا.', word: 'total', hint: 'المجموع' },
    ],
    orders: [
      { en: 'The hospital sent me a large bill.', ar: 'أرسل لي المستشفى فاتورة كبيرة.' },
      { en: 'Which parts are covered by my insurance?', ar: 'أي الأجزاء مشمولة بتأميني؟' },
      { en: 'I would like an itemized bill, please.', ar: 'أود فاتورة مفصلة من فضلك.' },
      { en: 'You can pay the rest in small installments.', ar: 'يمكنك دفع الباقي على أقساط صغيرة.' },
      { en: 'How much is the copay for each visit?', ar: 'كم مبلغ المشاركة لكل زيارة؟' },
      { en: 'The insurance has paid most of the cost.', ar: 'لقد دفع التأمين معظم التكلفة.' },
    ],
    mc: [
      { question: 'What is a copay?', options: ['the part of the cost you pay yourself', 'a free hospital meal', 'a type of doctor', 'a room upgrade'], answerIndex: 0, ar: 'ما هو مبلغ المشاركة copay؟' },
      { question: 'You cannot pay the whole bill at once. What can you ask for?', options: ['a payment plan', 'a bigger room', 'a second opinion', 'a new doctor'], answerIndex: 0, ar: 'لا تستطيع دفع الفاتورة كاملة دفعة واحدة، فماذا تطلب؟' },
      { question: 'An itemized bill is a bill that:', options: ['lists every service and charge', 'is written in two languages', 'you never have to pay', 'the doctor signs for fun'], answerIndex: 0, ar: 'الفاتورة المفصلة هي فاتورة:' },
      { question: 'Which question asks about insurance cover?', options: ['Does my insurance cover the X-ray?', 'Is my insurance cover the X-ray?', 'Does my insurance covers the X-ray?', 'Do my insurance covered the X-ray?'], answerIndex: 0, ar: 'أي سؤال يستفسر عن تغطية التأمين؟' },
      { question: 'Who can help you set up a payment plan?', options: ['the finance office', 'the taxi driver', 'the cafeteria', 'the parking guard'], answerIndex: 0, ar: 'من يستطيع مساعدتك في إعداد خطة سداد؟' },
    ],
  },

  /* ================= lesson 229 — Immigration and Residency Procedures ================= */
  {
    num: 229,
    tags: ['immigration', 'residency'],
    objectives: [
      'Apply for and renew a residence permit',
      'Explain your situation at the immigration office',
      'Provide the documents that officials require',
    ],
    grammar: {
      explanation: 'At the immigration office, state your purpose formally: "I would like to apply for a residence permit". Procedures use the passive: "Applications are processed within three weeks", "You are required to attach proof of employment". The present perfect asks about finished steps: "Have you submitted the application yet?". Use must for obligations: "The permit must be renewed before it expires", and will for outcomes: "The new permit will be valid for two years".',
      explanationAr: 'في مكتب الهجرة اذكر غرضك بصيغة رسمية: I would like to apply for a residence permit. وتستخدم الإجراءات المبني للمجهول: Applications are processed within three weeks وYou are required to attach proof of employment. ويسأل المضارع التام عن الخطوات المنتهية: Have you submitted the application yet؟ وتستخدم must للإلزام: The permit must be renewed before it expires، وwill للنتيجة: The new permit will be valid for two years.',
      examples: [
        { en: 'I would like to apply for a residence permit.', ar: 'أود التقدم بطلب للحصول على تصريح إقامة.' },
        { en: 'Have you submitted the application yet?', ar: 'هل قدمت الطلب بعد؟' },
        { en: 'Applications are processed within three weeks.', ar: 'تُعالج الطلبات خلال ثلاثة أسابيع.' },
      ],
    },
    vocabulary: [
      { word: 'residence permit', meaningAr: 'تصريح إقامة', example: 'I am applying for a two-year residence permit.', ipa: 'ˈpɜːrmɪt' },
      { word: 'visa', meaningAr: 'تأشيرة', example: 'My visa expires at the end of March.' },
      { word: 'expires', meaningAr: 'تنتهي صلاحيته', example: 'My visa expires in March.' },
      { word: 'renew', meaningAr: 'يجدد', example: 'I am here to renew my residence permit.' },
      { word: 'application', meaningAr: 'طلب رسمي', example: 'They received my application last Monday.' },
      { word: 'immigration office', meaningAr: 'مكتب الهجرة', example: 'The immigration office does not open on Fridays.' },
      { word: 'proof of employment', meaningAr: 'إثبات عمل', example: 'Please attach proof of employment to your file.' },
      { word: 'documents', meaningAr: 'مستندات', example: 'Bring all your documents in one folder.' },
      { word: 'form', meaningAr: 'نموذج / استمارة', example: 'Fill in this form in capital letters, please.' },
      { word: 'legal status', meaningAr: 'الوضع القانوني', example: 'This permit confirms your legal status.' },
      { word: 'fee', meaningAr: 'رسم', example: 'The renewal fee is paid at the counter.' },
      { word: 'appointment', meaningAr: 'موعد', example: 'I have an appointment with the officer at ten.' },
    ],
    scenario: [
      { en: 'Good morning, I would like to apply for a residence permit.', ar: 'صباح الخير، أود التقدم بطلب للحصول على تصريح إقامة.', d: 1 },
      { en: 'Certainly, may I see your current visa first?', ar: 'بكل تأكيد، هل يمكنني رؤية تأشيرتك الحالية أولا؟', d: 1 },
      { en: 'Here it is; my visa expires in March.', ar: 'تفضل؛ تنتهي صلاحية تأشيرتي في مارس.', d: 1 },
      { en: 'Then you must renew your documents before that date.', ar: 'إذن عليك تجديد مستنداتك قبل ذلك التاريخ.', d: 1 },
      { en: 'Have you prepared all the required documents?', ar: 'هل جهزت كل المستندات المطلوبة؟', d: 1 },
      { en: 'I have brought my passport, photos and the application form.', ar: 'لقد أحضرت جواز سفري وصوري ونموذج الطلب.', d: 1 },
      { en: 'You are required to attach proof of employment as well.', ar: 'يلزمك إرفاق إثبات عمل أيضا.', d: 1 },
      { en: 'Does a work contract count as proof of employment?', ar: 'هل يُعد عقد العمل إثباتا للعمل؟', d: 1 },
      { en: 'Yes, a signed contract from your employer is accepted.', ar: 'نعم، يُقبل عقد موقّع من صاحب العمل.', d: 1 },
      { en: 'The immigration office does not accept photocopies.', ar: 'مكتب الهجرة لا يقبل النسخ المصورة.', d: 2 },
      { en: 'You must submit the originals with one photocopy of each.', ar: 'عليك تقديم النسخ الأصلية مع نسخة مصورة من كل واحد.', d: 2 },
      { en: 'How long will the new permit be valid?', ar: 'كم ستكون مدة صلاحية التصريح الجديد؟', d: 2 },
      { en: 'The new permit will be valid for two years.', ar: 'سيكون التصريح الجديد صالحا لسنتين.', d: 2 },
      { en: 'When will my application be processed?', ar: 'متى ستتم معالجة طلبي؟', d: 3 },
      { en: 'Applications are usually processed within three weeks.', ar: 'تُعالج الطلبات عادة خلال ثلاثة أسابيع.', d: 3 },
      { en: 'The renewal fee must be paid at the counter today.', ar: 'يجب دفع رسم التجديد في الشباك اليوم.', d: 3 },
      { en: 'Thank you, I will return with the originals tomorrow.', ar: 'شكرا لك، سأعود بالنسخ الأصلية غدا.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'My {DOC} expires in {M}.', arTmpl: 'تنتهي صلاحية {DOC_ar} في {M_ar}.',
        slots: {
          DOC: [
            { en: 'visa', ar: 'تأشيرتي' }, { en: 'residence permit', ar: 'تصريح إقامتي' },
            { en: 'work permit', ar: 'تصريح عملي' }, { en: 'ID card', ar: 'بطاقة هويتي' },
          ],
          M: B.MONTHS,
        },
        tags: ['immigration', 'documents'], d: 1, limit: 16,
      },
      {
        tmpl: 'Have you {V} yet?', arTmpl: 'هل {V_ar} بعد؟',
        slots: {
          V: [
            { en: 'submitted the application', ar: 'قدمت الطلب' }, { en: 'renewed your documents', ar: 'جددت مستنداتك' },
            { en: 'received the new permit', ar: 'استلمت التصريح الجديد' }, { en: 'paid the renewal fee', ar: 'دفعت رسم التجديد' },
            { en: 'attached proof of employment', ar: 'أرفقت إثبات العمل' },
          ],
        },
        tags: ['immigration', 'present-perfect'], d: 2, limit: 5,
      },
      {
        tmpl: 'You must {A} before {D}.', arTmpl: 'عليك أن {A_ar} قبل {D_ar}.',
        slots: {
          A: [
            { en: 'renew your residence permit', ar: 'تجدد تصريح إقامتك' }, { en: 'submit the originals', ar: 'تقدم النسخ الأصلية' },
            { en: 'update your address', ar: 'تحدث عنوانك' }, { en: 'collect the new permit', ar: 'تستلم التصريح الجديد' },
            { en: 'book an appointment online', ar: 'تحجز موعدا عبر الإنترنت' },
          ],
          D: [
            { en: 'the end of March', ar: 'نهاية مارس' }, { en: 'the expiry date', ar: 'تاريخ انتهاء الصلاحية' },
            { en: 'your appointment', ar: 'موعدك' }, { en: 'the end of the month', ar: 'نهاية الشهر' },
          ],
        },
        tags: ['immigration', 'obligation'], d: 2, limit: 20,
      },
      {
        tmpl: 'The {N} will be processed within {T}.', arTmpl: 'ستتم معالجة {N_ar} خلال {T_ar}.',
        slots: {
          N: [
            { en: 'application', ar: 'الطلب' }, { en: 'renewal request', ar: 'طلب التجديد' },
            { en: 'permit file', ar: 'ملف التصريح' },
          ],
          T: [
            { en: 'three weeks', ar: 'ثلاثة أسابيع' }, { en: 'ten working days', ar: 'عشرة أيام عمل' },
            { en: 'two months', ar: 'شهرين' }, { en: 'a few days', ar: 'أيام قليلة' },
          ],
        },
        tags: ['immigration', 'passive'], d: 3, limit: 12,
      },
      {
        tmpl: '{S} {V} at the immigration office {T}.', arTmpl: '{S_ar} {V_ar} في مكتب الهجرة {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('wait', x.S.agr), ar: B.arPresent('wait', x.S.agr) }],
          T: [
            { en: 'every morning', ar: 'كل صباح' }, { en: 'on Mondays', ar: 'أيام الاثنين' },
            { en: 'before eight', ar: 'قبل الثامنة' },
          ],
        },
        tags: ['immigration', 'present-simple'], d: 2, limit: 18,
      },
    ],
    fills: [
      { en: 'I am applying for a two-year residence permit.', ar: 'أتقدم بطلب للحصول على تصريح إقامة لسنتين.', word: 'applying', hint: 'يتقدم بطلب' },
      { en: 'My visa expires at the end of March.', ar: 'تنتهي صلاحية تأشيرتي في نهاية مارس.', word: 'expires', hint: 'تنتهي الصلاحية' },
      { en: 'Bring all your documents in one folder.', ar: 'أحضر كل مستنداتك في ملف واحد.', word: 'documents', hint: 'مستندات' },
      { en: 'Please attach proof of employment to your file.', ar: 'أرفق إثبات العمل بملفك من فضلك.', word: 'attach', hint: 'يرفق' },
      { en: 'The immigration office does not open on Fridays.', ar: 'لا يفتح مكتب الهجرة أيام الجمعة.', word: 'immigration', hint: 'هجرة' },
      { en: 'I have an appointment with the officer at ten.', ar: 'لدي موعد مع الضابط في العاشرة.', word: 'appointment', hint: 'موعد' },
      { en: 'Fill in this form in capital letters, please.', ar: 'املأ هذا النموذج بحروف كبيرة من فضلك.', word: 'form', hint: 'نموذج' },
      { en: 'How long is the new permit valid?', ar: 'كم تكون مدة صلاحية التصريح الجديد؟', word: 'valid', hint: 'صالح' },
    ],
    orders: [
      { en: 'I am here to renew my residence permit.', ar: 'أنا هنا لتجديد تصريح إقامتي.' },
      { en: 'My family and I must renew our documents.', ar: 'يجب أن نجدد أنا وعائلتي مستنداتنا.' },
      { en: 'Have you attached proof of employment?', ar: 'هل أرفقت إثبات العمل؟' },
      { en: 'The originals must be submitted this week.', ar: 'يجب تقديم النسخ الأصلية هذا الأسبوع.' },
      { en: 'The officer was very helpful and patient.', ar: 'كان الضابط متعاونا وصبورا جدا.' },
      { en: 'You must book an appointment online first.', ar: 'عليك حجز موعد عبر الإنترنت أولا.' },
    ],
    mc: [
      { question: 'Your visa expires in March. What should you do?', options: ['renew it before it expires', 'wait until summer', 'ignore the date', 'travel without it'], answerIndex: 0, ar: 'تنتهي صلاحية تأشيرتك في مارس، فماذا تفعل؟' },
      { question: 'Which document shows that you have a job?', options: ['proof of employment', 'a cinema ticket', 'a shopping list', 'a gym card'], answerIndex: 0, ar: 'أي مستند يثبت أن لديك عملا؟' },
      { question: 'Choose the correct passive sentence:', options: ['Applications are processed within three weeks.', 'Applications are process within three weeks.', 'Applications is processed within three weeks.', 'Applications been processed within three weeks.'], answerIndex: 0, ar: 'اختر الجملة المبنية للمجهول الصحيحة:' },
      { question: 'Where do you apply for a residence permit?', options: ['at the immigration office', 'at the bakery', 'at the swimming pool', 'at the cinema'], answerIndex: 0, ar: 'أين تقدم طلب تصريح الإقامة؟' },
      { question: 'The office does not accept photocopies. What does it want?', options: ['the original documents', 'a handwritten story', 'older photocopies', 'a drawing of the papers'], answerIndex: 0, ar: 'المكتب لا يقبل النسخ المصورة، فماذا يريد؟' },
    ],
  },

  /* ================= lesson 230 — Consumer Rights ================= */
  {
    num: 230,
    tags: ['consumer-rights', 'shopping'],
    objectives: [
      'Explain the rights buyers have under the law',
      'Talk about warranties and faulty products',
      'Ask about return periods and store conditions',
    ],
    grammar: {
      explanation: 'Consumer rights are rules that protect people when they buy things. Use the present simple for laws and shop rules: "The law protects buyers", "You can return it within thirty days". Use faulty for products that do not work: "This is a faulty product". The warranty is a promise to repair or replace: "This laptop has a two-year warranty". Use must for conditions: "The product must be in its original condition", and if-clauses for results: "If the product is faulty, the shop must replace it".',
      explanationAr: 'حقوق المستهلك قواعد تحمي الناس عند الشراء. استخدم المضارع البسيط للقوانين وقواعد المتاجر: The law protects buyers وYou can return it within thirty days. واستخدم faulty للمنتجات التي لا تعمل: This is a faulty product. والضمان وعد بالإصلاح أو الاستبدال: This laptop has a two-year warranty. واستخدم must للشروط: The product must be in its original condition، وجمل الشرط للنتائج: If the product is faulty, the shop must replace it.',
      examples: [
        { en: 'The law protects buyers when a product is faulty.', ar: 'القانون يحمي المشترين عندما يكون المنتج معيبا.' },
        { en: 'You can return it within thirty days.', ar: 'يمكنك إرجاعه خلال ثلاثين يوما.' },
        { en: 'This laptop has a two-year warranty.', ar: 'هذا الحاسوب يأتي بضمان لسنتين.' },
      ],
    },
    vocabulary: [
      { word: 'consumer', meaningAr: 'مستهلك', example: 'The law protects the consumer.', ipa: 'kənˈsjuːmər' },
      { word: 'rights', meaningAr: 'حقوق', example: 'You have rights when you buy something.' },
      { word: 'law', meaningAr: 'قانون', example: 'The law protects buyers in this country.' },
      { word: 'warranty', meaningAr: 'ضمان', example: 'My new phone has a two-year warranty.' },
      { word: 'faulty', meaningAr: 'معيب / به عيب', example: 'I want to exchange this faulty product.' },
      { word: 'return', meaningAr: 'يرجّع / يُرجع', example: 'Customers can return faulty items in this shop.' },
      { word: 'exchange', meaningAr: 'يستبدل', example: 'The shop exchanged the shirt without any problem.' },
      { word: 'repair', meaningAr: 'يصلح / إصلاح', example: 'The company will repair it under the warranty.' },
      { word: 'receipt', meaningAr: 'إيصال', example: 'Always keep the receipt in a safe place.' },
      { word: 'condition', meaningAr: 'حالة', example: 'Please keep the box in its original condition.' },
      { word: 'in stock', meaningAr: 'متوفر في المخزن', example: 'We have the same model in stock.' },
      { word: 'protect', meaningAr: 'يحمي', example: 'These rules protect every buyer.' },
    ],
    scenario: [
      { en: 'Welcome, how can I help you today?', ar: 'أهلا بك، كيف أستطيع مساعدتك اليوم؟', d: 1 },
      { en: 'I bought this kettle here last week.', ar: 'اشتريت هذه الغلاية هنا الأسبوع الماضي.', d: 1 },
      { en: 'What seems to be the problem with it?', ar: 'ما المشكلة التي بها يبدو؟', d: 1 },
      { en: 'It does not heat the water at all.', ar: 'إنها لا تسخن الماء إطلاقا.', d: 1 },
      { en: 'I am sorry, it is clearly a faulty product.', ar: 'أنا آسف، إنها بوضوح منتج معيب.', d: 1 },
      { en: 'The law protects buyers when a product is faulty.', ar: 'القانون يحمي المشترين عندما يكون المنتج معيبا.', d: 1 },
      { en: 'Do you have the receipt with you?', ar: 'هل معك الإيصال؟', d: 1 },
      { en: 'Yes, here is the receipt and the box.', ar: 'نعم، هذا هو الإيصال والصندوق.', d: 1 },
      { en: 'This model has a two-year warranty.', ar: 'هذا الطراز يأتي بضمان لسنتين.', d: 2 },
      { en: 'So the shop must repair it or replace it free.', ar: 'إذن يجب على المتجر أن يصلحه أو يستبدله مجانا.', d: 2 },
      { en: 'I would prefer a new one, please.', ar: 'أفضّل واحدا جديدا من فضلك.', d: 2 },
      { en: 'No problem, we have the same model in stock.', ar: 'لا مشكلة، لدينا الطراز نفسه متوفرا.', d: 2 },
      { en: 'Can customers return products within thirty days?', ar: 'هل يستطيع الزبائن إرجاع المنتجات خلال ثلاثين يوما؟', d: 2 },
      { en: 'Yes, you can return it within thirty days here.', ar: 'نعم، يمكنك إرجاعه خلال ثلاثين يوما هنا.', d: 2 },
      { en: 'The new product must be in its original condition.', ar: 'يجب أن يكون المنتج الجديد في حالته الأصلية.', d: 3 },
      { en: 'Thank you, you have been very helpful today.', ar: 'شكرا لك، لقد كنت متعاونا جدا اليوم.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'The law protects {P}.', arTmpl: 'القانون يحمي {P_ar}.',
        slots: {
          P: [
            { en: 'buyers', ar: 'المشترين' }, { en: 'consumers', ar: 'المستهلكين' },
            { en: 'tenants', ar: 'المستأجرين' }, { en: 'workers', ar: 'العمال' },
            { en: 'customers', ar: 'الزبائن' },
          ],
        },
        tags: ['consumer-rights', 'law'], d: 1, limit: 5,
      },
      {
        tmpl: 'You can return {PR} within {N} days.', arTmpl: 'يمكنك إرجاع {PR_ar} خلال {N_ar} يوما.',
        slots: {
          PR: [
            { en: 'it', ar: 'ه' }, { en: 'the shoes', ar: 'الحذاء' },
            { en: 'the jacket', ar: 'السترة' }, { en: 'the blender', ar: 'الخلاط' },
            { en: 'the headphones', ar: 'السمعات' },
          ],
          N: [
            { en: 'thirty', ar: 'ثلاثين' }, { en: 'fourteen', ar: 'أربعة عشر' },
            { en: 'seven', ar: 'سبعة' },
          ],
        },
        tags: ['consumer-rights', 'returns'], d: 1, limit: 15,
      },
      {
        tmpl: 'This {P} has a {L} warranty.', arTmpl: 'هذا {P_ar} يأتي بضمان مدته {L_ar}.',
        slots: {
          P: [
            { en: 'laptop', ar: 'الحاسوب' }, { en: 'phone', ar: 'الهاتف' },
            { en: 'blender', ar: 'الخلاط' }, { en: 'television', ar: 'التلفاز' },
            { en: 'oven', ar: 'الفرن' },
          ],
          L: [
            { en: 'one-year', ar: 'سنة' }, { en: 'two-year', ar: 'سنتين' },
            { en: 'five-year', ar: 'خمس سنوات' },
          ],
        },
        tags: ['consumer-rights', 'warranty'], d: 2, limit: 15,
      },
      {
        tmpl: 'If the product is faulty, the shop must {R}.', arTmpl: 'إذا كان المنتج معيبا، فيجب على المتجر أن {R_ar}.',
        slots: {
          R: [
            { en: 'repair it', ar: 'يصلحه' }, { en: 'replace it', ar: 'يستبدله' },
            { en: 'refund your money', ar: 'يرد لك المال' }, { en: 'offer you a similar product', ar: 'يعرض عليك منتجا مشابها' },
          ],
        },
        tags: ['consumer-rights', 'conditionals'], d: 2, limit: 4,
      },
      {
        tmpl: 'I would like to {A} this {P}, please.', arTmpl: 'أود أن {A_ar} هذا {P_ar} من فضلك.',
        slots: {
          A: [
            { en: 'return', ar: 'أرجع' }, { en: 'exchange', ar: 'أستبدل' },
          ],
          P: [
            { en: 'product', ar: 'المنتج' }, { en: 'item', ar: 'القطعة' },
            { en: 'device', ar: 'الجهاز' }, { en: 'blender', ar: 'الخلاط' },
          ],
        },
        tags: ['consumer-rights', 'requests'], d: 1, limit: 8,
      },
    ],
    fills: [
      { en: 'The law protects buyers in this country.', ar: 'القانون يحمي المشترين في هذا البلد.', word: 'law', hint: 'قانون' },
      { en: 'My new phone has a two-year warranty.', ar: 'هاتفي الجديد يأتي بضمان لسنتين.', word: 'warranty', hint: 'ضمان' },
      { en: 'I want to exchange this faulty product.', ar: 'أريد استبدال هذا المنتج المعيب.', word: 'faulty', hint: 'معيب' },
      { en: 'Customers can return faulty items in this shop.', ar: 'يستطيع الزبائن إرجاع القطع المعيبة في هذا المتجر.', word: 'return', hint: 'يرجّع' },
      { en: 'Always keep the receipt in a safe place.', ar: 'احتفظ بالإيصال دائما في مكان آمن.', word: 'receipt', hint: 'إيصال' },
      { en: 'The shop exchanged the shirt without any problem.', ar: 'استبدل المتجر القميص دون أي مشكلة.', word: 'exchanged', hint: 'استبدل' },
      { en: 'The company will repair it under the warranty.', ar: 'ستقوم الشركة بإصلاحه بموجب الضمان.', word: 'repair', hint: 'يصلح' },
      { en: 'Please keep the box in its original condition.', ar: 'احتفظ بالصندوق في حالته الأصلية من فضلك.', word: 'condition', hint: 'حالة' },
    ],
    orders: [
      { en: 'The law protects buyers in every shop.', ar: 'القانون يحمي المشترين في كل متجر.' },
      { en: 'I need to exchange this product today.', ar: 'أحتاج إلى استبدال هذا المنتج اليوم.' },
      { en: 'You have thirty days to change your mind.', ar: 'لديك ثلاثون يوما لتغيير رأيك.' },
      { en: 'The warranty covers parts and labor for two years.', ar: 'يغطي الضمان القطعات والعمل لسنتين.' },
      { en: 'If the shop refuses, you can contact the consumer office.', ar: 'إذا رفض المتجر، يمكنك التواصل مع مكتب حقوق المستهلك.' },
      { en: 'Always keep the receipt and the box together.', ar: 'احتفظ بالإيصال والصندوق معا دائما.' },
    ],
    mc: [
      { question: 'How long is a two-year warranty?', options: ['twenty-four months', 'two weeks', 'two days', 'two hours'], answerIndex: 0, ar: 'كم مدة الضمان لسنتين؟' },
      { question: 'A product stops working after two days. It is:', options: ['faulty', 'delicious', 'fashionable', 'invisible'], answerIndex: 0, ar: 'منتج توقف عن العمل بعد يومين، فهو:' },
      { question: 'What should you keep after buying something?', options: ['the receipt', 'a stranger\'s photo', 'nothing at all', 'another price tag'], answerIndex: 0, ar: 'ماذا تحتفظ به بعد شراء شيء؟' },
      { question: 'Choose the correct sentence:', options: ['The law protects buyers.', 'The law protect buyers.', 'The law protecting buyers.', 'The laws protects buyers.'], answerIndex: 0, ar: 'اختر الجملة الصحيحة:' },
      { question: 'Where can you complain if the shop refuses to help?', options: ['the consumer rights office', 'the school canteen', 'a wedding hall', 'the petrol station'], answerIndex: 0, ar: 'أين تشتكو إذا رفض المتجر المساعدة؟' },
    ],
  },

  /* ================= lesson 231 — Dealing with Unfair Treatment ================= */
  {
    num: 231,
    tags: ['fairness', 'complaints'],
    objectives: [
      'Say that a situation is not fair',
      'Describe unfair treatment politely but firmly',
      'Ask for the manager and put the answer in writing',
    ],
    grammar: {
      explanation: 'When something is unfair, stay calm and be firm. Name the problem: "That is not fair". Describe it with the passive: "I was treated differently". Ask politely for the right person: "I would like to speak to the manager, please". Ask for proof: "Please put your answer in writing". Name the issue if needed: "This is discrimination". Use should for what is right: "The staff should treat all guests equally".',
      explanationAr: 'عندما يكون الأمر غير عادل ابق هادئا وحازما. سمّ المشكلة: That is not fair. وصِفها بالمبني للمجهول: I was treated differently. واطلب الشخص المناسب بأدب: I would like to speak to the manager, please. واطلب إثباتا: Please put your answer in writing. وسمّ المسألة عند الحاجة: This is discrimination. واستخدم should لما هو صحيح: The staff should treat all guests equally.',
      examples: [
        { en: 'That is not fair because I waited longer.', ar: 'هذا ليس عادلا لأنني انتظرت مدة أطول.' },
        { en: 'I was treated differently at the bank.', ar: 'عوملت بشكل مختلف في المصرف.' },
        { en: 'Please put your answer in writing.', ar: 'اكتب ردكم كتابة من فضلك.' },
      ],
    },
    vocabulary: [
      { word: 'fair', meaningAr: 'عادل', example: 'That is not fair.', ipa: 'fɛər' },
      { word: 'unfair', meaningAr: 'غير عادل', example: 'The decision was unfair to everyone.' },
      { word: 'treat', meaningAr: 'يعامل', example: 'I was treated differently at the bank last week.' },
      { word: 'manager', meaningAr: 'مدير', example: 'Could I speak to the manager for a moment?' },
      { word: 'in writing', meaningAr: 'كتابة', example: 'Please put the decision in writing for me.' },
      { word: 'discrimination', meaningAr: 'تمييز', example: 'Discrimination is not allowed in this company.' },
      { word: 'politely', meaningAr: 'بأدب', example: 'Speak politely but say what happened.' },
      { word: 'respect', meaningAr: 'احترام', example: 'Every customer deserves respect at the counter.' },
      { word: 'deserve', meaningAr: 'يستحق', example: 'Everyone deserves fair treatment in this city.' },
      { word: 'apologize', meaningAr: 'يعتذر', example: 'The staff apologized for the long delay.' },
      { word: 'complaint', meaningAr: 'شكوى', example: 'My complaint is about the service yesterday.' },
      { word: 'staff', meaningAr: 'الموظفون / الطاقم', example: 'The staff should treat all guests equally.' },
    ],
    scenario: [
      { en: 'Excuse me, I have been waiting for forty minutes.', ar: 'عفوا، أنا أنتظر منذ أربعين دقيقة.', d: 1 },
      { en: 'I am sorry, sir, we are very busy tonight.', ar: 'أنا آسف يا سيدي، نحن مشغولون جدا الليلة.', d: 1 },
      { en: 'Did those customers arrive after me?', ar: 'هل وصل أولئك الزبائن بعدّي؟', d: 1 },
      { en: 'Yes, other customers were seated before you.', ar: 'نعم، جلس زبائن آخرون قبلك.', d: 1 },
      { en: 'Then why were their orders taken first?', ar: 'إذن لماذا أُخذت طلباتهم أولا؟', d: 1 },
      { en: 'I am not sure, but that is not fair to me.', ar: 'لست متأكدا، لكن هذا ليس عادلا تجاهي.', d: 1 },
      { en: 'Then I would like to speak to the manager, please.', ar: 'إذن أود التحدث مع المدير من فضلك.', d: 1 },
      { en: 'Of course, the manager will see you now.', ar: 'بالتأكيد، سيقابلك المدير الآن.', d: 1 },
      { en: 'I was treated differently because of my accent.', ar: 'عوملت بشكل مختلف بسبب لكنتي.', d: 2 },
      { en: 'Can you describe exactly what happened, madam?', ar: 'هل تصفين بدقة ما حدث يا سيدتي؟', d: 2 },
      { en: 'The waiter served every table except mine.', ar: 'خدم النادل كل طاولة ما عدا طاولتي.', d: 2 },
      { en: 'That should not happen in this restaurant.', ar: 'لا ينبغي أن يحدث هذا في هذا المطعم.', d: 2 },
      { en: 'I want to put your answer in writing, please.', ar: 'أريد توثيق ردكم كتابة من فضلك.', d: 2 },
      { en: 'You will receive a written reply by email tomorrow.', ar: 'ستتلقى ردا مكتوبا بالبريد الإلكتروني غدا.', d: 2 },
      { en: 'Discrimination is not acceptable in any place.', ar: 'التمييز غير مقبول في أي مكان.', d: 3 },
      { en: 'We apologize for the poor treatment tonight.', ar: 'نعتذر عن المعاملة السيئة الليلة.', d: 3 },
      { en: 'The staff will receive more training this week.', ar: 'سيتلقى الموظفون تدريبا أكثر هذا الأسبوع.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'That is not fair because {R}.', arTmpl: 'هذا ليس عادلا لأن {R_ar}.',
        slots: {
          R: [
            { en: 'I waited longer', ar: 'انتظرت مدة أطول' }, { en: 'they arrived after me', ar: 'وصلوا بعدّي' },
            { en: 'I paid the same price', ar: 'دفعت السعر نفسه' }, { en: 'the rules are for everyone', ar: 'القواعد للجميع' },
          ],
        },
        tags: ['fairness', 'reasons'], d: 1, limit: 4,
      },
      {
        tmpl: 'I was treated differently at {P}.', arTmpl: 'عوملت بشكل مختلف في {P_ar}.',
        slots: {
          P: [
            { en: 'the bank', ar: 'المصرف' }, { en: 'the clinic', ar: 'العيادة' },
            { en: 'the hotel', ar: 'الفندق' }, { en: 'the airport', ar: 'المطار' },
            { en: 'the office', ar: 'المكتب' },
          ],
        },
        tags: ['fairness', 'passive'], d: 2, limit: 5,
      },
      {
        tmpl: 'I would like to speak to the {M}, please.', arTmpl: 'أود التحدث مع {M_ar} من فضلك.',
        slots: {
          M: [
            { en: 'manager', ar: 'المدير' }, { en: 'supervisor', ar: 'المشرف' },
            { en: 'owner', ar: 'المالك' }, { en: 'person in charge', ar: 'المسؤول' },
          ],
        },
        tags: ['fairness', 'requests'], d: 1, limit: 4,
      },
      {
        tmpl: 'Please put {W} in writing.', arTmpl: 'اكتب {W_ar} كتابة من فضلك.',
        slots: {
          W: [
            { en: 'your answer', ar: 'ردكم' }, { en: 'your decision', ar: 'قراركم' },
            { en: 'the reason', ar: 'السبب' }, { en: 'your apology', ar: 'اعتذاركم' },
            { en: 'the new policy', ar: 'السياسة الجديدة' },
          ],
        },
        tags: ['fairness', 'complaints'], d: 2, limit: 5,
      },
      {
        tmpl: '{S} {V} to the manager {T}.', arTmpl: '{S_ar} {V_ar} مع المدير {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('speak', x.S.agr), ar: B.arPresent('speak', x.S.agr) }],
          T: [
            { en: 'tomorrow morning', ar: 'غدا صباحا' }, { en: 'after work', ar: 'بعد العمل' },
            { en: 'on Thursday', ar: 'يوم الخميس' },
          ],
        },
        tags: ['fairness', 'present-simple'], d: 2, limit: 18,
      },
    ],
    fills: [
      { en: 'That is not fair.', ar: 'هذا ليس عادلا.', word: 'fair', hint: 'عادل' },
      { en: 'I was treated differently at the bank last week.', ar: 'عوملت بشكل مختلف في المصرف الأسبوع الماضي.', word: 'treated', hint: 'عوملت' },
      { en: 'Could I speak to the manager for a moment?', ar: 'هل أتحدث مع المدير للحظة؟', word: 'manager', hint: 'مدير' },
      { en: 'Please put the decision in writing for me.', ar: 'اكتب لي القرار كتابة من فضلك.', word: 'writing', hint: 'كتابة' },
      { en: 'Discrimination is not allowed in this company.', ar: 'التمييز غير مسموح في هذه الشركة.', word: 'Discrimination', hint: 'تمييز' },
      { en: 'Every customer deserves respect at the counter.', ar: 'كل زبون يستحق الاحترام عند الشباك.', word: 'respect', hint: 'احترام' },
      { en: 'The staff apologized for the long delay.', ar: 'اعتذر الموظفون عن التأخير الطويل.', word: 'apologized', hint: 'اعتذر' },
      { en: 'My complaint is about the service yesterday.', ar: 'شكواه عن الخدمة أمس.', word: 'complaint', hint: 'شكوى' },
    ],
    orders: [
      { en: 'That is not fair, and I will not accept it.', ar: 'هذا ليس عادلا، ولن أقبله.' },
      { en: 'I was treated differently at the hotel reception.', ar: 'عوملت بشكل مختلف في استقبال الفندق.' },
      { en: 'May I speak to the person in charge, please?', ar: 'هل أتحدث مع المسؤول من فضلك؟' },
      { en: 'Please put your final decision in writing.', ar: 'اكتب قراركم النهائي كتابة من فضلك.' },
      { en: 'The staff should treat all guests equally.', ar: 'ينبغي على الموظفين معاملة جميع الضيوف بالتساوي.' },
      { en: 'Everyone deserves fair treatment in this city.', ar: 'الجميع يستحق معاملة عادلة في هذه المدينة.' },
    ],
    mc: [
      { question: 'Someone says "That is not fair". How do they feel?', options: ['treated badly', 'very happy', 'quite sleepy', 'very hungry'], answerIndex: 0, ar: 'شخص يقول This is not fair، فكيف يشعر؟' },
      { question: 'What is discrimination?', options: ['treating people differently for unfair reasons', 'a kind of weather', 'a sports competition', 'a type of receipt'], answerIndex: 0, ar: 'ما هو التمييز؟' },
      { question: 'The staff are not helpful. Who do you ask for?', options: ['the manager', 'the taxi driver', 'the neighbor', 'the waiter\'s cousin'], answerIndex: 0, ar: 'الموظفون غير متعاونين، فمن تطلب؟' },
      { question: 'A written reply is a reply:', options: ['in writing', 'on the phone only', 'in a dream', 'by shouting'], answerIndex: 0, ar: 'الرد المكتوب هو رد:' },
      { question: 'Choose the polite request:', options: ['I would like to speak to the supervisor, please.', 'Bring the supervisor right now!', 'You must fix this immediately!', 'Call the owner this second!'], answerIndex: 0, ar: 'اختر الطلب المهذب:' },
    ],
  },

  /* ================= lesson 232 — Handling Unexpected Situations ================= */
  {
    num: 232,
    tags: ['emergencies', 'coping'],
    objectives: [
      'Stay calm when something unexpected happens',
      'Give simple instructions in an emergency',
      'Prepare a plan before problems happen',
    ],
    grammar: {
      explanation: 'In an unexpected situation, use short imperatives: "Stay calm", "Do not panic", "Think clearly". Use if-clauses to prepare: "If the lights go out, use the flashlight". Use should for good advice: "You should ask for help early". Talk about plans with has: "Our family has an emergency plan". Remember the plural for lists: "We keep a first-aid kit and important phone numbers".',
      explanationAr: 'في الموقف غير المتوقع استخدم الأوامر القصيرة: Stay calm وDo not panic وThink clearly. واستخدم جمل الشرط للاستعداد: If the lights go out, use the flashlight. واستخدم should للنصيحة: You should ask for help early. وتحدث عن الخطط بـ has: Our family has an emergency plan. وتذكر الجمع للقوائم: We keep a first-aid kit and important phone numbers.',
      examples: [
        { en: 'Do not panic, the situation is under control.', ar: 'لا تهلع، الموقف تحت السيطرة.' },
        { en: 'If there is a fire, call the fire department.', ar: 'إذا وقع حريق، فاتصل بدائرة الإطفاء.' },
        { en: 'Our family has an emergency plan for these moments.', ar: 'عائلتنا لديها خطة طوارئ لهذه اللحظات.' },
      ],
    },
    vocabulary: [
      { word: 'panic', meaningAr: 'يهلع / يشعر بالذعر', example: 'Do not panic, it is only heavy rain.', ipa: 'ˈpænɪk' },
      { word: 'calm', meaningAr: 'هادئ', example: 'Try to stay calm and breathe slowly.' },
      { word: 'clearly', meaningAr: 'بوضوح', example: 'Think clearly before you answer the question.' },
      { word: 'emergency', meaningAr: 'حالة طارئة', example: 'Break the glass in an emergency.' },
      { word: 'emergency plan', meaningAr: 'خطة طوارئ', example: 'Every family needs an emergency plan at home.' },
      { word: 'happen', meaningAr: 'يحدث', example: 'Unexpected things happen to everyone sometimes.' },
      { word: 'breathe', meaningAr: 'يتنفس', example: 'Breathe slowly and count to ten.' },
      { word: 'call for help', meaningAr: 'يطلب النجدة', example: 'Should I call for help right away?' },
      { word: 'ask for help', meaningAr: 'يطلب العون', example: 'It is smart to ask for help early.' },
      { word: 'instructions', meaningAr: 'تعليمات', example: 'Follow the instructions on the wall poster.' },
      { word: 'emergency exit', meaningAr: 'مخرج طوارئ', example: 'The emergency exit is on the left side.' },
      { word: 'solution', meaningAr: 'حل', example: 'Every problem has a simple solution.' },
    ],
    scenario: [
      { en: 'Do not panic, the situation is under control.', ar: 'لا تهلع، الموقف تحت السيطرة.', d: 1 },
      { en: 'What happened? I heard a loud noise outside.', ar: 'ماذا حدث؟ سمعت صوتا عاليا في الخارج.', d: 1 },
      { en: 'A car stopped suddenly in front of the building.', ar: 'توقفت سيارة فجأة أمام المبنى.', d: 1 },
      { en: 'Is anyone hurt in the street?', ar: 'هل تأذى أحد في الشارع؟', d: 1 },
      { en: 'No, everyone is safe, but the driver is afraid.', ar: 'لا، الجميع بأمان، لكن السائق خائف.', d: 1 },
      { en: 'Stay calm and think clearly before you act.', ar: 'ابق هادئا وفكر بوضوح قبل أن تتحرك.', d: 1 },
      { en: 'Should I call for help right away?', ar: 'هل أطلب النجدة فورا؟', d: 1 },
      { en: 'Yes, please ask for help from the people nearby.', ar: 'نعم، اطلب العون من الناس القريبين من فضلك.', d: 1 },
      { en: 'Our family has an emergency plan for these moments.', ar: 'عائلتنا لديها خطة طوارئ لهذه اللحظات.', d: 2 },
      { en: 'What does your plan say about accidents?', ar: 'ماذا تقول خطتكم عن الحوادث؟', d: 2 },
      { en: 'We keep a first-aid kit and important phone numbers.', ar: 'نحتفظ بحقيبة إسعافات أولية وأرقام هواتف مهمة.', d: 2 },
      { en: 'That is a smart idea for every family.', ar: 'هذه فكرة ذكية لكل عائلة.', d: 2 },
      { en: 'If the situation gets worse, we will leave together.', ar: 'إذا ساء الموقف، سنخرج معا.', d: 3 },
      { en: 'Do not forget to follow the staff instructions.', ar: 'لا تنس اتباع تعليمات الموظفين.', d: 3 },
      { en: 'The emergency exit is on the left side of the hall.', ar: 'مخرج الطوارئ على يسار القاعة.', d: 3 },
      { en: 'Unexpected things happen, but we can handle them together.', ar: 'تحدث أمور غير متوقعة، لكننا نستطيع مواجهتها معا.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Do not panic if {E}.', arTmpl: 'لا تهلع إذا {E_ar}.',
        slots: {
          E: [
            { en: 'the lights go out', ar: 'انقطعت الأضواء' }, { en: 'you lose your way', ar: 'ضللت طريقك' },
            { en: 'the bus is late', ar: 'تأخرت الحافلة' }, { en: 'you forget your phone', ar: 'نسيت هاتفك' },
          ],
        },
        tags: ['emergencies', 'imperatives'], d: 1, limit: 4,
      },
      {
        tmpl: '{F}, and then {S}.', arTmpl: '{F_ar}، ثم {S_ar}.',
        slots: {
          F: [
            { en: 'Stay calm', ar: 'ابق هادئا' }, { en: 'Breathe slowly', ar: 'تنفس ببطء' },
            { en: 'Sit down', ar: 'اجلس' }, { en: 'Count to ten', ar: 'عُد إلى عشرة' },
          ],
          S: [
            { en: 'think clearly', ar: 'فكر بوضوح' }, { en: 'call for help', ar: 'اطلب المساعدة' },
            { en: 'look for an exit', ar: 'ابحث عن مخرج' }, { en: 'ask the staff', ar: 'اسأل الموظفين' },
          ],
        },
        tags: ['emergencies', 'instructions'], d: 1, limit: 16,
      },
      {
        tmpl: 'If {C}, call {N}.', arTmpl: 'إذا {C_ar}، فاتصل {N_ar}.',
        slots: {
          C: [
            { en: 'there is a fire', ar: 'وقع حريق' }, { en: 'someone is hurt', ar: 'تأذى أحدهم' },
            { en: 'you see smoke', ar: 'رأيت دخانا' }, { en: 'a pipe breaks', ar: 'انفجر أنبوب' },
          ],
          N: [
            { en: 'the police', ar: 'بالشرطة' }, { en: 'an ambulance', ar: 'بسيارة الإسعاف' },
            { en: 'the fire department', ar: 'بدائرة الإطفاء' }, { en: 'your emergency contact', ar: 'بجهة الاتصال للطوارئ' },
          ],
        },
        tags: ['emergencies', 'conditionals'], d: 2, limit: 16,
      },
      {
        tmpl: 'Our family has {I} for emergencies.', arTmpl: 'عائلتنا تمتلك {I_ar} للطوارئ.',
        slots: {
          I: [
            { en: 'an emergency plan', ar: 'خطة طوارئ' }, { en: 'a first-aid kit', ar: 'حقيبة إسعافات أولية' },
            { en: 'a flashlight and batteries', ar: 'كشافا وبطاريات' }, { en: 'important phone numbers', ar: 'أرقام هواتف مهمة' },
            { en: 'some saved money', ar: 'بعض المال المدخر' },
          ],
        },
        tags: ['emergencies', 'plans'], d: 3, limit: 5,
      },
    ],
    fills: [
      { en: 'Do not panic, it is only heavy rain.', ar: 'لا تهلع، إنها مجرد مطر غزير.', word: 'panic', hint: 'يهلع' },
      { en: 'Try to stay calm and breathe slowly.', ar: 'حاول أن تبقى هادئا وتتنفس ببطء.', word: 'calm', hint: 'هادئ' },
      { en: 'Think clearly before you answer the question.', ar: 'فكر بوضوح قبل أن تجيب عن السؤال.', word: 'clearly', hint: 'بوضوح' },
      { en: 'Every problem has a simple solution.', ar: 'لكل مشكلة حل بسيط.', word: 'solution', hint: 'حل' },
      { en: 'The emergency exit is on the left side.', ar: 'مخرج الطوارئ على الجانب الأيسر.', word: 'exit', hint: 'مخرج' },
      { en: 'We keep important phone numbers in the kitchen.', ar: 'نحتفظ بأرقام هواتف مهمة في المطبخ.', word: 'numbers', hint: 'أرقام' },
      { en: 'It is smart to ask for help early.', ar: 'من الذكاء طلب العون مبكرا.', word: 'smart', hint: 'ذكي' },
      { en: 'Follow the instructions on the wall poster.', ar: 'اتبع التعليمات على الملصق الحائطي.', word: 'instructions', hint: 'تعليمات' },
    ],
    orders: [
      { en: 'Do not panic, everything will be fine.', ar: 'لا تهلع، كل شيء سيكون بخير.' },
      { en: 'Stay calm and think clearly, please.', ar: 'ابق هادئا وفكر بوضوح من فضلك.' },
      { en: 'If smoke fills the room, leave at once.', ar: 'إذا ملأ الدخان الغرفة، فغادر فورا.' },
      { en: 'Every family needs an emergency plan at home.', ar: 'كل عائلة تحتاج إلى خطة طوارئ في البيت.' },
      { en: 'Should we call for help right now?', ar: 'هل نطلب النجدة الآن مباشرة؟' },
      { en: 'Unexpected things happen to everyone sometimes.', ar: 'تحدث الأمور غير المتوقعة للجميع أحيانا.' },
    ],
    mc: [
      { question: 'What should you do first in an emergency?', options: ['stay calm', 'start crying', 'run anywhere', 'close your eyes'], answerIndex: 0, ar: 'ماذا تفعل أولا في حالة طارئة؟' },
      { question: 'What does "Do not panic" mean?', options: ['لا تهلع', 'نم جيدا', 'اشرب ماء', 'أغلق الباب'], answerIndex: 0, ar: 'ما معنى Do not panic؟' },
      { question: 'There is a fire in the kitchen. You call:', options: ['the fire department', 'a pizza place', 'a hair salon', 'a taxi'], answerIndex: 0, ar: 'حدث حريق في المطبخ، فتتصل بـ:' },
      { question: 'Why keep an emergency plan at home?', options: ['you know what to do before problems happen', 'it makes problems bigger', 'it replaces the police', 'it is only for children'], answerIndex: 0, ar: 'لماذا تحتفظ بخطة طوارئ في البيت؟' },
      { question: 'Choose the correct instruction:', options: ['Do not panic if the lights go out.', 'Does not panic if the lights go out.', 'Do not panics if the lights go out.', 'Not do panic if lights go out.'], answerIndex: 0, ar: 'اختر التعليمة الصحيحة:' },
    ],
  },

  /* ================= lesson 233 — Lost Passport ================= */
  {
    num: 233,
    tags: ['passport', 'embassy'],
    objectives: [
      'Report a lost passport to the police',
      'Contact your embassy for help',
      'Get a temporary travel document',
    ],
    grammar: {
      explanation: 'When you lose a document abroad, act step by step. Report the loss with the past simple: "I lost my passport this morning". Ask about finished checks with the present perfect: "Have you checked your bags?". Use must for the necessary steps: "You must report it to the police". The embassy can help: "The embassy can issue a temporary travel document". Always keep copies of your documents in a separate bag.',
      explanationAr: 'عندما تفقد مستندا في الخارج تحرك خطوة بخطوة. أبلغ عن الفقدان بالماضي البسيط: I lost my passport this morning. واسأل عن التحقق المنتهي بالمضارع التام: Have you checked your bags؟ واستخدم must للخطوات اللازمة: You must report it to the police. ويمكن للسفارة المساعدة: The embassy can issue a temporary travel document. واحتفظ دائما بنسخ من مستنداتك في حقيبة منفصلة.',
      examples: [
        { en: 'Officer, I lost my passport this morning.', ar: 'حضرة الضابط، فقدت جواز سفري هذا الصباح.' },
        { en: 'You must report it to the police.', ar: 'عليك الإبلاغ عنه للشرطة.' },
        { en: 'The embassy can issue a temporary travel document.', ar: 'تستطيع السفارة إصدار وثيقة سفر مؤقتة.' },
      ],
    },
    vocabulary: [
      { word: 'passport', meaningAr: 'جواز سفر', example: 'I cannot find my passport anywhere.', ipa: 'ˈpæspɔːrt' },
      { word: 'lost', meaningAr: 'مفقود / فقدت', example: 'My passport is lost, or maybe stolen.' },
      { word: 'report', meaningAr: 'يبلّغ / بلاغ', example: 'You must report it to the police today.' },
      { word: 'embassy', meaningAr: 'سفارة', example: 'My embassy can issue new papers.' },
      { word: 'temporary travel document', meaningAr: 'وثيقة سفر مؤقتة', example: 'The embassy gave me a temporary travel document.' },
      { word: 'copies', meaningAr: 'نسخ', example: 'I keep copies of my documents at home.' },
      { word: 'stolen', meaningAr: 'مسروق', example: 'Was your passport lost or stolen, sir?' },
      { word: 'flight', meaningAr: 'رحلة جوية', example: 'My flight home leaves very soon.' },
      { word: 'apply', meaningAr: 'يتقدم بطلب', example: 'I will apply for a new passport next week.' },
      { word: 'form', meaningAr: 'استمارة', example: 'Please fill in this form at the embassy.' },
      { word: 'photos', meaningAr: 'صور شخصية', example: 'Passport photos must be recent and clear.' },
      { word: 'birth certificate', meaningAr: 'شهادة ميلاد', example: 'A birth certificate helps prove who I am.' },
    ],
    scenario: [
      { en: 'Officer, I lost my passport this morning.', ar: 'حضرة الضابط، فقدت جواز سفري هذا الصباح.', d: 1 },
      { en: 'I cannot find it anywhere in my hotel room.', ar: 'لا أستطيع إيجاده في أي مكان في غرفة الفندق.', d: 1 },
      { en: 'Where and when did you last see it?', ar: 'أين ومتى رأيته آخر مرة؟', d: 1 },
      { en: 'I saw it last at the hotel desk yesterday evening.', ar: 'رأيته آخر مرة عند مكتب الفندق أمس مساء.', d: 1 },
      { en: 'Have you checked your bags and pockets carefully?', ar: 'هل فحصت حقائبك وجيوبك بعناية؟', d: 1 },
      { en: 'Yes, I have checked everything twice already.', ar: 'نعم، لقد فحصت كل شيء مرتين بالفعل.', d: 1 },
      { en: 'Then you must report it to the police officially.', ar: 'إذن عليك الإبلاغ عنه للشرطة رسميا.', d: 1 },
      { en: 'Here is the report number for your records.', ar: 'هذا رقم البلاغ لسجلاتك.', d: 1 },
      { en: 'Thank you, I will contact my embassy right away.', ar: 'شكرا لك، سأتواصل مع سفارتي فورا.', d: 1 },
      { en: 'Good morning, I lost my passport and I need help.', ar: 'صباح الخير، فقدت جواز سفري وأحتاج إلى مساعدة.', d: 2 },
      { en: 'Do you have copies of your documents at home?', ar: 'هل لديك نسخ من مستنداتك في البيت؟', d: 2 },
      { en: 'Yes, I keep copies of my documents in my suitcase.', ar: 'نعم، أحتفظ بنسخ من مستنداتي في حقيبتي.', d: 2 },
      { en: 'Bring them with two new passport photos, please.', ar: 'أحضرها مع صورتين شخصيتين جديدتين من فضلك.', d: 2 },
      { en: 'How long does the temporary travel document take?', ar: 'كم تستغرق وثيقة السفر المؤقتة؟', d: 3 },
      { en: 'The temporary travel document is ready in two days.', ar: 'تكون وثيقة السفر المؤقتة جاهزة خلال يومين.', d: 3 },
      { en: 'Will it be valid for my flight on Sunday?', ar: 'هل تكون صالحة لرحلتي يوم الأحد؟', d: 3 },
      { en: 'Yes, it is valid for one single journey home.', ar: 'نعم، إنها صالحة لرحلة واحدة فقط إلى الوطن.', d: 3 },
      { en: 'Thank you, the embassy staff have been very kind.', ar: 'شكرا لك، لقد كان موظفو السفارة لطفاء جدا.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I lost my {D} {T}.', arTmpl: 'فقدت {D_ar} {T_ar}.',
        slots: {
          D: [
            { en: 'passport', ar: 'جواز سفري' }, { en: 'ID card', ar: 'بطاقة هويتي' },
            { en: 'travel wallet', ar: 'محفظة سفري' }, { en: 'ticket folder', ar: 'ملف تذاكري' },
          ],
          T: [
            { en: 'this morning', ar: 'هذا الصباح' }, { en: 'last night', ar: 'الليلة الماضية' },
            { en: 'two days ago', ar: 'قبل يومين' }, { en: 'on Friday', ar: 'يوم الجمعة' },
          ],
        },
        tags: ['passport', 'past-simple'], d: 1, limit: 12,
      },
      {
        tmpl: 'I must report it to {P} {T}.', arTmpl: 'يجب أن أبلغ {P_ar} {T_ar}.',
        slots: {
          P: [
            { en: 'the police', ar: 'الشرطة' }, { en: 'the embassy', ar: 'السفارة' },
            { en: 'the consulate', ar: 'القنصلية' }, { en: 'the front desk', ar: 'مكتب الاستقبال' },
          ],
          T: [
            { en: 'today', ar: 'اليوم' }, { en: 'tomorrow morning', ar: 'غدا صباحا' },
            { en: 'before noon', ar: 'قبل الظهر' },
          ],
        },
        tags: ['passport', 'obligation'], d: 1, limit: 12,
      },
      {
        tmpl: 'Do you have {D}?', arTmpl: 'هل لديك {D_ar}؟',
        slots: {
          D: [
            { en: 'copies of your documents', ar: 'نسخ من مستنداتك' }, { en: 'a copy of your passport', ar: 'نسخة من جوازك' },
            { en: 'the police report number', ar: 'رقم بلاغ الشرطة' }, { en: 'two passport photos', ar: 'صورتين شخصيتين' },
            { en: 'your birth certificate', ar: 'شهادة ميلادك' },
          ],
        },
        tags: ['passport', 'documents'], d: 2, limit: 5,
      },
      {
        tmpl: 'The embassy can {A}.', arTmpl: 'تستطيع السفارة أن {A_ar}.',
        slots: {
          A: [
            { en: 'issue a temporary travel document', ar: 'تصدر وثيقة سفر مؤقتة' }, { en: 'contact your family', ar: 'تتواصل مع عائلتك' },
            { en: 'give you emergency money', ar: 'تعطيك مالا للطوارئ' }, { en: 'advise you about the steps', ar: 'تنصحك بالخطوات' },
          ],
        },
        tags: ['passport', 'embassy'], d: 2, limit: 4,
      },
      {
        tmpl: '{S} {V} the police {T}.', arTmpl: '{S_ar} {V_ar} بالشرطة {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPast('call'), ar: B.arPast('call', x.S.agr) }],
          T: [
            { en: 'this morning', ar: 'هذا الصباح' }, { en: 'an hour ago', ar: 'قبل ساعة' },
            { en: 'last night', ar: 'الليلة الماضية' },
          ],
        },
        tags: ['passport', 'past-simple'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'I cannot find my passport anywhere.', ar: 'لا أستطيع إيجاد جواز سفري في أي مكان.', word: 'anywhere', hint: 'في أي مكان' },
      { en: 'The embassy issued a temporary travel document for me.', ar: 'أصدرت السفارة لي وثيقة سفر مؤقتة.', word: 'temporary', hint: 'مؤقتة' },
      { en: 'Do you keep copies of your documents?', ar: 'هل تحتفظ بنسخ من مستنداتك؟', word: 'copies', hint: 'نسخ' },
      { en: 'Someone stole my bag with the passport inside.', ar: 'سرق أحدهم حقيبتي والجواز بداخلها.', word: 'stole', hint: 'سرق' },
      { en: 'Fill in this form and sign at the bottom.', ar: 'املأ هذه الاستمارة ووقّع في الأسفل.', word: 'form', hint: 'استمارة' },
      { en: 'I need two new passport photos for the application.', ar: 'أحتاج صورتين شخصيتين جديدتين للطلب.', word: 'photos', hint: 'صور' },
      { en: 'My birth certificate proves who I am.', ar: 'شهادة ميلادي تثبت من أنا.', word: 'birth', hint: 'ميلاد' },
      { en: 'The police officer was helpful and quick.', ar: 'كان ضابط الشرطة متعاونا وسريعا.', word: 'officer', hint: 'ضابط' },
    ],
    orders: [
      { en: 'I lost my passport at the market yesterday.', ar: 'فقدت جواز سفري في السوق أمس.' },
      { en: 'You must report it to the police first.', ar: 'عليك الإبلاغ عنه للشرطة أولا.' },
      { en: 'Have you contacted your embassy yet?', ar: 'هل تواصلت مع سفارتك بعد؟' },
      { en: 'The temporary travel document is valid for one journey.', ar: 'وثيقة السفر المؤقتة صالحة لرحلة واحدة.' },
      { en: 'Always keep copies of your important documents.', ar: 'احتفظ دائما بنسخ من مستنداتك المهمة.' },
      { en: 'My flight leaves on Sunday morning.', ar: 'رحلتي تنطلق صباح الأحد.' },
    ],
    mc: [
      { question: 'You lose your passport abroad. What do you do first?', options: ['report it to the police', 'buy a new suitcase', 'go swimming', 'cook a big dinner'], answerIndex: 0, ar: 'فقدت جواز سفرك في الخارج، فماذا تفعل أولا؟' },
      { question: 'Who can issue a temporary travel document?', options: ['your embassy', 'the hotel cleaner', 'a taxi driver', 'a restaurant'], answerIndex: 0, ar: 'من يستطيع إصدار وثيقة سفر مؤقتة؟' },
      { question: 'Why keep copies of your documents?', options: ['they help you get replacements faster', 'they make good gifts', 'they weigh nothing', 'hotels collect them for fun'], answerIndex: 0, ar: 'لماذا تحتفظ بنسخ من مستنداتك؟' },
      { question: 'Choose the correct present perfect:', options: ['I have lost my passport.', 'I have lose my passport.', 'I has lost my passport.', 'I have losing my passport.'], answerIndex: 0, ar: 'اختر المضارع التام الصحيح:' },
      { question: 'The police report number is useful for:', options: ['the embassy and the insurance', 'ordering pizza', 'booking a concert', 'renting a bicycle'], answerIndex: 0, ar: 'رقم بلاغ الشرطة مفيد لـ:' },
    ],
  },
];
