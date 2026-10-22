/* ============================================================
   v2 section data — s10-b2.js
   Complex Situations & Rights · lessons 238–240 (formal letters,
   standing up for your rights, section review)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

/* small agreement map for the review pattern (pay) */
const AR_PAY = { I: 'دفعت', you: 'دفعت', he: 'دفع', she: 'دفعت', we: 'دفعنا', they: 'دفعوا' };

export const lessons = [

  /* ================= lesson 238 — Writing Formal Letters ================= */
  {
    num: 238,
    tags: ['formal-letters', 'writing'],
    objectives: [
      'Structure a formal letter from address to signature',
      'Choose the right salutation and formal closing',
      'State your purpose in clear, polite paragraphs',
    ],
    grammar: {
      explanation: 'A formal letter has a clear structure: your address and the date at the top, then the salutation, then clear paragraphs, then a formal closing and your signature. Open with "Dear Sir or Madam" when you do not know the name, and close with "Yours faithfully". If you know the name, use "Dear Mr. Ali" and "Yours sincerely". State your purpose in the first paragraph: "I am writing to inquire about ...". Formal letters avoid slang, short forms like "I\u2019m", and emotional language. "Please find enclosed ..." introduces attached documents.',
      explanationAr: 'للخطاب الرسمي بنية واضحة: عنوانك والتاريخ في الأعلى، ثم التحية الافتتاحية، ثم فقرات واضحة، ثم ختام رسمي وتوقيعك. ابدأ بـ Dear Sir or Madam عندما لا تعرف الاسم واختم بـ Yours faithfully. وإذا عرفت الاسم فاستخدم Dear Mr. Ali وYours sincerely. واذكر هدفك في الفقرة الأولى: I am writing to inquire about ... ويتجنب الخطاب الرسمي العامية والاختصارات مثل I\u2019m واللغة الانفعالية. وتقدم عبارة Please find enclosed المستندات المرفقة.',
      examples: [
        { en: 'Dear Sir or Madam, I am writing to inquire about the course.', ar: 'سيدي أو سيدتي، أكتب للاستعلام عن الدورة.' },
        { en: 'Clear paragraphs make a formal letter easy to read.', ar: 'الفقرات الواضحة تجعل الخطاب الرسمي سهل القراءة.' },
        { en: 'Yours faithfully, Sara Khaled.', ar: 'مع خالص الإخلاص، سارة خالد.' },
      ],
    },
    vocabulary: [
      { word: 'formal', meaningAr: 'رسمي', example: 'This is a formal letter.' },
      { word: 'salutation', meaningAr: 'تحية الافتتاح', example: 'Dear Sir or Madam is a safe salutation.' },
      { word: 'paragraph', meaningAr: 'فقرة', example: 'Each paragraph has one idea.' },
      { word: 'closing', meaningAr: 'الختام', example: 'The closing comes before the signature.' },
      { word: 'faithfully', meaningAr: 'بإخلاص', example: 'Yours faithfully fits unknown names.' },
      { word: 'sincerely', meaningAr: 'بصدق / باخلاص معروف الاسم', example: 'Yours sincerely fits known names.' },
      { word: 'inquire', meaningAr: 'يستعلم', example: 'I am writing to inquire about the fees.' },
      { word: 'regarding', meaningAr: 'بخصوص', example: 'I am writing regarding my order.' },
      { word: 'enclose', meaningAr: 'يرفق', example: 'I enclose a copy of the receipt.' },
      { word: 'recipient', meaningAr: 'المتلقي', example: 'Write the recipient address clearly.' },
      { word: 'signature', meaningAr: 'توقيع', example: 'Do not forget your signature.' },
      { word: 'concise', meaningAr: 'موجز', example: 'Keep the letter concise and polite.' },
    ],
    scenario: [
      { en: 'A formal letter starts with your address and the date.', ar: 'يبدأ الخطاب الرسمي بعنوانك والتاريخ.', d: 1 },
      { en: 'Dear Sir or Madam is a safe opening.', ar: 'سيدي أو سيدتي افتتاح آمن.', d: 1 },
      { en: 'Use it when you do not know the name.', ar: 'استخدمها عندما لا تعرف الاسم.', d: 2 },
      { en: 'I am writing to inquire about the course fees.', ar: 'أكتب للاستعلام عن رسوم الدورة.', d: 2 },
      { en: 'I am writing regarding my recent order.', ar: 'أكتب بخصوص طلبي الأخير.', d: 2 },
      { en: 'Clear paragraphs make the letter easy to read.', ar: 'الفقرات الواضحة تجعل الخطاب سهل القراءة.', d: 2 },
      { en: 'One paragraph should explain the reason for writing.', ar: 'ينبغي أن تشرح فقرة واحدة سبب الكتابة.', d: 3 },
      { en: 'Formal letters avoid slang and short forms.', ar: 'يتجنب الخطاب الرسمي العامية والاختصارات.', d: 3 },
      { en: 'Where should the date go?', ar: 'أين يوضع التاريخ؟', d: 1 },
      { en: 'The date goes under your address, on the right.', ar: 'يوضع التاريخ تحت عنوانك إلى اليمين.', d: 2 },
      { en: 'Did you enclose the copy of the receipt?', ar: 'هل أرفقت نسخة الإيصال؟', d: 2 },
      { en: 'Yes, I enclosed it with the application.', ar: 'نعم، أرفقته مع الطلب.', d: 2 },
      { en: 'End with Yours faithfully when the name is unknown.', ar: 'اختم بمع خالص الإخلاص عندما يكون الاسم مجهولا.', d: 2 },
      { en: 'Yours sincerely fits a named recipient.', ar: 'يناسب مع خالص الاحترام متلقيا معروفا الاسم.', d: 3 },
      { en: 'Do not forget your signature at the bottom.', ar: 'لا تنس توقيعك في الأسفل.', d: 2 },
      { en: 'Keep the letter concise, polite and formal.', ar: 'أبقِ الخطاب موجزا مهذبا ورسميا.', d: 2 },
      { en: 'Could you check my letter before I post it?', ar: 'هل يمكنك مراجعة خطابي قبل إرساله؟', d: 2 },
      { en: 'Of course; I will read it this evening.', ar: 'بالتأكيد؛ سأقرأه هذا المساء.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I am writing to {V} about {O}.', arTmpl: 'أكتب إليكم لأني {V_ar} بشأن {O_ar}.',
        slots: {
          V: [
            { en: 'inquire', ar: 'أستعلم' }, { en: 'complain', ar: 'أشتكي' }, { en: 'ask', ar: 'أسأل' },
          ],
          O: [
            { en: 'the course fees', ar: 'رسوم الدورة' }, { en: 'the delivery delay', ar: 'تأخر التوصيل' },
            { en: 'the apartment advertisement', ar: 'إعلان الشقة' }, { en: 'the training program', ar: 'البرنامج التدريبي' },
          ],
        },
        tags: ['formal-letters'], d: 2, limit: 8,
      },
      {
        tmpl: 'Dear {SAL}, I am writing about {O}.', arTmpl: '{SAL_ar}، أكتب إليكم بشأن {O_ar}.',
        slots: {
          SAL: [
            { en: 'Sir or Madam', ar: 'سيدي أو سيدتي' }, { en: 'Mr. Brown', ar: 'السيد براون' },
            { en: 'Mrs. Taylor', ar: 'السيدة تايلور' }, { en: 'Ms. Parker', ar: 'الآنسة باركر' },
          ],
          O: [
            { en: 'the course fees', ar: 'رسوم الدورة' }, { en: 'the delivery delay', ar: 'تأخر التوصيل' },
            { en: 'the apartment advertisement', ar: 'إعلان الشقة' }, { en: 'the training program', ar: 'البرنامج التدريبي' },
          ],
        },
        tags: ['formal-letters', 'salutations'], d: 2, limit: 8,
      },
      {
        tmpl: 'Please find enclosed {D}.', arTmpl: 'تجدون مرفقا {D_ar}.',
        slots: {
          D: [
            { en: 'the signed form', ar: 'الاستمارة الموقعة' }, { en: 'a copy of the receipt', ar: 'نسخة من الإيصال' },
            { en: 'the requested documents', ar: 'المستندات المطلوبة' }, { en: 'the invoice copy', ar: 'نسخة الفاتورة' },
          ],
        },
        tags: ['formal-letters'], d: 2, limit: 4,
      },
      {
        tmpl: 'End the letter with {C}.', arTmpl: 'اختم الخطاب بـ {C_ar}.',
        slots: {
          C: [
            { en: 'Yours faithfully', ar: 'مع خالص الإخلاص' }, { en: 'Yours sincerely', ar: 'مع خالص الاحترام' },
            { en: 'Best regards', ar: 'مع أطيب الأمنيات' }, { en: 'Kind regards', ar: 'مع التقدير' },
          ],
        },
        tags: ['formal-letters', 'closings'], d: 1, limit: 4,
      },
      {
        tmpl: 'The {P} should be {ADJ} in a formal letter.', arTmpl: 'يجب أن تكون {P_ar} {ADJ_ar} في الخطاب الرسمي.',
        slots: {
          P: [
            { en: 'language', ar: 'اللغة' }, { en: 'tone', ar: 'النبرة' },
            { en: 'structure', ar: 'البنية' }, { en: 'paragraphs', ar: 'الفقرات' },
          ],
          ADJ: [
            { en: 'clear', ar: 'واضحة' }, { en: 'polite', ar: 'مهذبة' },
            { en: 'concise', ar: 'موجزة' }, { en: 'respectful', ar: 'محترمة' },
          ],
        },
        tags: ['formal-letters', 'should'], d: 3, limit: 10,
      },
    ],
    fills: [
      { en: 'Write Dear Sir or Madam at the top.', ar: 'اكتب سيدي أو سيدتي في الأعلى.', word: 'Madam', hint: 'سيدة (تحية رسمية)' },
      { en: 'I am writing to inquire about the fees.', ar: 'أكتب للاستعلام عن الرسوم.', word: 'inquire', hint: 'يستعلم' },
      { en: 'Short paragraphs keep the reader interested.', ar: 'الفقرات القصيرة تُبقي القارئ مهتما.', word: 'paragraphs' },
      { en: 'Yours faithfully fits an unknown recipient.', ar: 'يناسب مع خالص الإخلاص متلقيا مجهولا.', word: 'faithfully', hint: 'بإخلاص' },
      { en: 'Sign the letter above your printed name.', ar: 'وقع الخطاب فوق اسمك المطبوع.', word: 'Sign', hint: 'يوقع' },
      { en: 'I enclose a copy of the receipt.', ar: 'أرفق نسخة من الإيصال.', word: 'enclose', hint: 'يرفق' },
      { en: 'I am writing regarding the delayed delivery.', ar: 'أكتب بخصوص التوصيل المتأخر.', word: 'regarding', hint: 'بخصوص' },
      { en: 'Keep the letter concise and polite.', ar: 'أبقِ الخطاب موجزا ومهذبا.', word: 'concise', hint: 'موجز' },
    ],
    orders: [
      { en: 'A formal letter needs a clear structure.', ar: 'يحتاج الخطاب الرسمي إلى بنية واضحة.' },
      { en: 'I am writing to inquire about the course.', ar: 'أكتب للاستعلام عن الدورة.' },
      { en: 'Each paragraph explains one main idea.', ar: 'تشرح كل فقرة فكرة رئيسية واحدة.' },
      { en: 'End the letter with Yours faithfully.', ar: 'اختم الخطاب بمع خالص الإخلاص.' },
      { en: 'Please find enclosed the signed form.', ar: 'تجدون مرفقا الاستمارة الموقعة.' },
      { en: 'Write the date under your address.', ar: 'اكتب التاريخ تحت عنوانك.' },
    ],
    mc: [
      { question: 'When do you write "Dear Sir or Madam"?', options: ['When you write to a friend', 'When the letter is short', 'When you do not know the name', 'When you are angry'], answerIndex: 2, ar: 'متى تكتب Dear Sir or Madam؟' },
      { question: 'Which closing fits an unknown recipient?', options: ['Yours faithfully', 'Cheers', 'See you', 'Love'], answerIndex: 0, ar: 'أي ختام يناسب متلقيا مجهولا؟' },
      { question: '"Please find enclosed my CV" means:', options: ['نسيان التوقيع', 'أرفق سيرتي الذاتية', 'أرسلت بريدا إلكترونيا', 'أؤجل الرد'], answerIndex: 1, ar: 'ما معنى Please find enclosed my CV؟' },
      { question: 'What makes a formal letter easy to read?', options: ['Long sentences without stops', 'Slang words', 'Colored ink', 'Clear paragraphs'], answerIndex: 3, ar: 'ما الذي يجعل الخطاب الرسمي سهل القراءة؟' },
      { question: 'Which sentence states the purpose politely?', options: ['I am writing to inquire about the fees.', 'Send me the answer now!', 'Why is your service so bad?', 'Give me a refund today.'], answerIndex: 0, ar: 'أي جملة تذكر الهدف بمهذب؟' },
    ],
  },

  /* ================= lesson 239 — Standing Up for Your Rights ================= */
  {
    num: 239,
    tags: ['rights', 'assertiveness'],
    objectives: [
      'State your rights politely but firmly',
      'Ask for answers and promises in writing',
      'Escalate step by step without anger',
    ],
    grammar: {
      explanation: '"I know my rights" uses the simple present for facts. "I would like this in writing, please" is a polite but firm request; "would like" is softer than "want". Will shows determination: "I will take this further if needed". Keep the tone polite: "Could you show me the policy, please?" — but stay firm: "A verbal promise is not enough". Firm means clear and confident, not angry. Always ask for proof and keep copies of everything.',
      explanationAr: 'I know my rights تستخدم المضارع البسيط للحقائق. وI would like this in writing, please طلب مهذب لكنه حازم؛ وwould like ألطف من want. ويظهر will العزيمة: I will take this further if needed. وحافظ على نبرة مهذبة: Could you show me the policy, please؟ لكن ابق حازما: A verbal promise is not enough. ومعنى firm أن تكون واضحا وواثقا لا غاضبا. اطلب الإثبات دائما واحتفظ بنسخ من كل شيء.',
      examples: [
        { en: 'I know my rights as a consumer.', ar: 'أعرف حقوقي بصفتي مستهلكا.' },
        { en: 'I would like this in writing, please.', ar: 'أود هذا كتابيا من فضلك.' },
        { en: 'Stay polite but firm.', ar: 'ابق مهذبا لكن حازما.' },
      ],
    },
    vocabulary: [
      { word: 'rights', meaningAr: 'حقوق', example: 'Customers have clear rights.' },
      { word: 'firmly', meaningAr: 'بحزم', example: 'She spoke firmly but politely.' },
      { word: 'politely', meaningAr: 'بمهذب', example: 'Ask politely for the policy.' },
      { word: 'in writing', meaningAr: 'كتابيا', example: 'I would like the answer in writing.' },
      { word: 'proof', meaningAr: 'إثبات', example: 'Screenshots are useful proof.' },
      { word: 'policy', meaningAr: 'سياسة / وثيقة', example: 'The policy supports my request.' },
      { word: 'supervisor', meaningAr: 'مشرف', example: 'The supervisor refused to meet me.' },
      { word: 'authority', meaningAr: 'جهة رسمية', example: 'You can contact the authority next.' },
      { word: 'stand up for', meaningAr: 'يدافع عن', example: 'Stand up for your rights calmly.' },
      { word: 'request', meaningAr: 'طلب', example: 'My request was reasonable.' },
      { word: 'unreasonable', meaningAr: 'غير معقول', example: 'Do not accept an unreasonable answer.' },
      { word: 'verbal promise', meaningAr: 'وعد شفوي', example: 'A verbal promise is not enough.' },
    ],
    scenario: [
      { en: 'I know my rights, and I will use them.', ar: 'أعرف حقوقي وسأستخدمها.', d: 1 },
      { en: 'Stay polite but firm; it works better.', ar: 'ابق مهذبا لكن حازما؛ هذا أنجع.', d: 2 },
      { en: 'I would like this in writing, please.', ar: 'أود هذا كتابيا من فضلك.', d: 1 },
      { en: 'A verbal promise is not enough.', ar: 'الوعد الشفوي لا يكفي.', d: 3 },
      { en: 'Could you show me the policy, please?', ar: 'هل يمكنك أن تريني السياسة من فضلك؟', d: 2 },
      { en: 'The policy clearly supports my request.', ar: 'تدعم السياسة طلبي بوضوح.', d: 2 },
      { en: 'I will take this further if needed.', ar: 'سأنقل الأمر إلى مستوى أعلى إذا لزم.', d: 2 },
      { en: 'Where will you take the complaint?', ar: 'إلى أين ستنقل الشكوى؟', d: 1 },
      { en: 'To the head office, and then to the authority.', ar: 'إلى المركز الرئيسي ثم إلى الجهة الرسمية.', d: 2 },
      { en: 'The supervisor refused to meet me yesterday.', ar: 'رفض المشرف لقائي أمس.', d: 2 },
      { en: 'Then I will send my complaint to his manager.', ar: 'إذن سأرسل شكواي إلى مديره.', d: 2 },
      { en: 'Do you keep proof of every conversation?', ar: 'هل تحتفظ بإثبات لكل محادثة؟', d: 1 },
      { en: 'Yes, screenshots and emails are useful proof.', ar: 'نعم، لقطات الشاشة والرسائل إثبات مفيد.', d: 2 },
      { en: 'Do not accept an unreasonable answer.', ar: 'لا تقبل جوابا غير معقول.', d: 2 },
      { en: 'You can stand up for your rights calmly.', ar: 'يمكنك الدفاع عن حقوقك بهدوء.', d: 2 },
      { en: 'Shouting never helps your case.', ar: 'الصراخ لا يخدم قضيتك أبدا.', d: 3 },
      { en: 'A written request gets a written answer.', ar: 'الطلب المكتوب يحصل على جواب مكتوب.', d: 3 },
      { en: 'Thank you; I will wait for your letter.', ar: 'شكرا؛ سأنتظر خطابكم.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I know my rights as {R}.', arTmpl: 'أعرف حقوقي بصفتي {R_ar}.',
        slots: {
          R: [
            { en: 'a consumer', ar: 'مستهلك' }, { en: 'a tenant', ar: 'مستأجر' },
            { en: 'an employee', ar: 'موظف' }, { en: 'a patient', ar: 'مريض' },
            { en: 'a customer', ar: 'زبون' }, { en: 'a student', ar: 'طالب' },
          ],
        },
        tags: ['rights'], d: 1, limit: 6,
      },
      {
        tmpl: 'I would like {O} in writing, please.', arTmpl: 'أود {O_ar} كتابيا من فضلك.',
        slots: {
          O: [
            { en: 'this promise', ar: 'هذا الوعد' }, { en: 'your answer', ar: 'إجابتك' },
            { en: 'the new offer', ar: 'العرض الجديد' }, { en: 'that decision', ar: 'هذا القرار' },
            { en: 'the agreement', ar: 'الاتفاق' },
          ],
        },
        tags: ['rights', 'requests'], d: 2, limit: 5,
      },
      {
        tmpl: 'I will take this further {T}.', arTmpl: 'سأنقل الأمر إلى مستوى أعلى {T_ar}.',
        slots: {
          T: [
            { en: 'if they refuse', ar: 'إذا رفضوا' }, { en: 'tomorrow morning', ar: 'غدا صباحا' },
            { en: 'to the head office', ar: 'إلى المركز الرئيسي' }, { en: 'after the deadline', ar: 'بعد الموعد النهائي' },
            { en: 'without anger', ar: 'بدون غضب' },
          ],
        },
        tags: ['rights', 'will'], d: 2, limit: 5,
      },
      {
        tmpl: 'Could you {A}, please?', arTmpl: 'هل يمكنك {A_ar} من فضلك؟',
        slots: {
          A: [
            { en: 'put it in writing', ar: 'كتابته' }, { en: 'send me the policy', ar: 'إرسال السياسة إليّ' },
            { en: 'explain the decision', ar: 'شرح القرار' }, { en: 'confirm the details', ar: 'تأكيد التفاصيل' },
          ],
        },
        tags: ['rights', 'requests'], d: 2, limit: 4,
      },
      {
        tmpl: 'Stay {A}, but do not {B}.', arTmpl: 'ابقَ {A_ar} لكن لا {B_ar}.',
        slots: {
          A: [
            { en: 'polite', ar: 'مهذبا' }, { en: 'calm', ar: 'هادئا' },
            { en: 'firm', ar: 'حازما' }, { en: 'patient', ar: 'صبورا' },
          ],
          B: [
            { en: 'shout', ar: 'تصرخ' }, { en: 'get angry', ar: 'تغضب' },
            { en: 'accept everything', ar: 'تقبل كل شيء' }, { en: 'lose hope', ar: 'تفقد الأمل' },
          ],
        },
        tags: ['rights', 'imperative'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'I know my rights under this law.', ar: 'أعرف حقوقي بموجب هذا القانون.', word: 'rights', hint: 'حقوق' },
      { en: 'I would like the agreement in writing.', ar: 'أود الاتفاق كتابيا.', word: 'writing', hint: 'كتابيا' },
      { en: 'Could you email me the policy today?', ar: 'هل يمكنك إرسال السياسة إلي بالبريد الإلكتروني اليوم؟', word: 'policy', hint: 'السياسة' },
      { en: 'I will take this further next week.', ar: 'سأنقل الأمر إلى مستوى أعلى الأسبوع القادم.', word: 'further', hint: 'إلى مستوى أعلى' },
      { en: 'Screenshots are useful proof.', ar: 'لقطات الشاشة إثبات مفيد.', word: 'proof', hint: 'إثبات' },
      { en: 'Stay polite but firm.', ar: 'ابق مهذبا لكن حازما.', word: 'firm', hint: 'حازم' },
      { en: 'That answer is unreasonable and unclear.', ar: 'هذا الجواب غير معقول وغير واضح.', word: 'unreasonable', hint: 'غير معقول' },
      { en: 'The supervisor refused to meet me.', ar: 'رفض المشرف لقائي.', word: 'supervisor', hint: 'المشرف' },
    ],
    orders: [
      { en: 'I know my rights very well.', ar: 'أعرف حقوقي جيدا جدا.' },
      { en: 'Please send me the answer in writing.', ar: 'أرسل لي الجواب كتابيا من فضلك.' },
      { en: 'A verbal promise is not enough for me.', ar: 'الوعد الشفوي لا يكفيني.' },
      { en: 'Stay calm and keep every document.', ar: 'ابق هادئا واحتفظ بكل مستند.' },
      { en: 'I will take this further tomorrow.', ar: 'سأنقل الأمر إلى مستوى أعلى غدا.' },
      { en: 'You can stand up for your rights.', ar: 'يمكنك الدفاع عن حقوقك.' },
    ],
    mc: [
      { question: 'What does "firm" mean here?', options: ['Loud and rude', 'Clear and confident, not angry', 'Shy and quiet', 'Fast and careless'], answerIndex: 1, ar: 'ماذا يعني firm هنا؟' },
      { question: 'Why do you want the answer in writing?', options: ['It looks beautiful', 'It is cheaper', 'It is proof you can keep later', 'It is faster to shout'], answerIndex: 2, ar: 'لماذا تريد الجواب كتابيا؟' },
      { question: 'The supervisor refuses to meet you. A firm next step:', options: ['Send the complaint to his manager', 'Forget the problem', 'Shout at the staff', 'Close the company'], answerIndex: 0, ar: 'يرفض المشرف لقاؤك. ما الخطوة الحازمة التالية؟' },
      { question: '"Stand up for your rights" means:', options: ['يدافع عن حقوقك', 'تنام في العمل', 'تدفع مالا إضافيا', 'تترك المشكلة'], answerIndex: 0, ar: 'ما معنى Stand up for your rights؟' },
      { question: 'Which sentence is polite but firm?', options: ['Give me the paper now!', 'Maybe it is fine, whatever.', 'I am too shy to ask.', 'I would like this in writing, please.'], answerIndex: 3, ar: 'أي جملة مهذبة لكنها حازمة؟' },
    ],
  },

  /* ================= lesson 240 — Complex Situations and Rights Review ================= */
  {
    num: 240,
    tags: ['review', 'rights'],
    objectives: [
      'Recycle rights and complex-situation language from lessons 221 to 239',
      'Combine complaints, insurance, mediation and formal letters in new sentences',
      'Use passives, conditionals and polite firm requests in review',
    ],
    grammar: {
      explanation: 'This review brings together the language of complex situations: complaints, refunds, landlords, workers\u2019 rights, police reports, legal documents, insurance claims, disputes, mediation and formal letters. The passive is common in formal writing: "The claim was approved", "The clause was explained". Conditionals link actions to results: "If the company refuses, I will ask for compensation". Modal verbs keep requests polite and firm: "Could you tell me ...?", "You must sign the settlement". In every formal situation: stay calm, keep proof, and ask for everything in writing.',
      explanationAr: 'يجمع هذا الدرس مراجعة لغة المواقف المعقدة: الشكاوى واسترداد المبالغ والملاك وحقوق العامل وبلاغات الشرطة والمستندات القانونية وطلبات التأمين والنزاعات والوساطة والخطابات الرسمية. والمبني للمجهول شائع في الكتابة الرسمية: The claim was approved وThe clause was explained. وتربط الشرطيات الفعل بالنتائج: If the company refuses, I will ask for compensation. وتُبقي الأفعال الناصبة الطلب مهذبا وحازما: Could you tell me ...? وYou must sign the settlement. وفي كل موقف رسمي: ابق هادئا واحتفظ بالإثبات واطلب كل شيء كتابيا.',
      examples: [
        { en: 'The claim was approved on Sunday evening.', ar: 'تمت الموافقة على المطالبة مساء الأحد.' },
        { en: 'If the company refuses, I will ask for compensation.', ar: 'إذا رفضت الشركة فسأطالب بالتعويض.' },
        { en: 'Could you tell me when the next session is?', ar: 'هل يمكنك أن تخبرني متى الجلسة القادمة؟' },
      ],
    },
    vocabulary: [
      { word: 'complaint', meaningAr: 'شكوى', example: 'The complaint has a reference number.' },
      { word: 'refund', meaningAr: 'استرداد المال', example: 'The refund arrived in three days.' },
      { word: 'claim', meaningAr: 'مطالبة', example: 'The claim needs supporting documents.' },
      { word: 'settlement', meaningAr: 'تسوية', example: 'The settlement ended the dispute.' },
      { word: 'mediator', meaningAr: 'وسيط', example: 'The mediator suggested a compromise.' },
      { word: 'notary', meaningAr: 'كاتب العدل', example: 'The notary verified the documents.' },
      { word: 'evidence', meaningAr: 'دليل', example: 'Photos are strong evidence.' },
      { word: 'compensation', meaningAr: 'تعويض', example: 'They offered compensation for the delay.' },
      { word: 'rights', meaningAr: 'حقوق', example: 'Know your rights before you argue.' },
      { word: 'policy', meaningAr: 'سياسة / وثيقة', example: 'The policy covers water damage.' },
      { word: 'report', meaningAr: 'بلاغ / تقرير', example: 'The police report took an hour.' },
      { word: 'signature', meaningAr: 'توقيع', example: 'The form needs your signature.' },
    ],
    scenario: [
      { en: 'A fair process protects the customer and the company.', ar: 'الإجراء العادل يحمي الزبون والشركة.', d: 3 },
      { en: 'When will the manager send his written answer?', ar: 'متى سيرسل المدير جوابه المكتوب؟', d: 2 },
      { en: 'He promised it within a week, but nothing has arrived.', ar: 'وعد بها خلال أسبوع لكن لم يصل شيء.', d: 2 },
      { en: 'Did the mediator propose a compromise?', ar: 'هل اقترح الوسيط حلا وسطا؟', d: 1 },
      { en: 'Yes, and both sides accepted it yesterday.', ar: 'نعم، وقبله الطرفان أمس.', d: 2 },
      { en: 'The landlord raised the rent without any notice.', ar: 'رفع المالك الإيجار دون أي إشعار.', d: 2 },
      { en: 'That may be against the rental law here.', ar: 'قد يكون هذا مخالفا لقانون الإيجار هنا.', d: 3 },
      { en: 'What did you do after the theft?', ar: 'ماذا فعلت بعد السرقة؟', d: 1 },
      { en: 'I blocked the SIM card and changed the passwords.', ar: 'حجبت شريحة الهاتف وغيرت كلمات المرور.', d: 2 },
      { en: 'The police report helped with the insurance claim.', ar: 'ساعد بلاغ الشرطة في مطالبة التأمين.', d: 2 },
      { en: 'Did you take photos of the scene?', ar: 'هل صورت مكان الحادث؟', d: 1 },
      { en: 'Yes, and the garage sent the repair estimate on Monday.', ar: 'نعم، وأرسل الورشة تقدير التصليح الاثنين.', d: 2 },
      { en: 'The company delivered the wrong order twice.', ar: 'سلمت الشركة الطلب الخطأ مرتين.', d: 2 },
      { en: 'I asked for a replacement, not an apology.', ar: 'طلبت بديلا لا اعتذارا.', d: 2 },
      { en: 'Keep the boxes until the dispute ends.', ar: 'احتفظ بالصناديق حتى ينتهي النزاع.', d: 2 },
      { en: 'The embassy issued a temporary travel document.', ar: 'أصدرت السفارة وثيقة سفر مؤقتة.', d: 3 },
      { en: 'I reported the lost passport at the police office.', ar: 'بلغت عن جواز السفر المفقود في مكتب الشرطة.', d: 3 },
      { en: 'The notary checked the power of attorney carefully.', ar: 'فحص كاتب العدل توكيل الوكالة بعناية.', d: 3 },
      { en: 'Every clause was explained in plain language.', ar: 'شُرحت كل بند بلغة واضحة.', d: 3 },
      { en: 'Do not sign anything under pressure.', ar: 'لا توقع أي شيء تحت الضغط.', d: 1 },
      { en: 'A short, polite letter often works better than anger.', ar: 'الخطاب القصير المهذب أنجع كثيرا من الغضب.', d: 3 },
      { en: 'Knowing your rights saves time and money.', ar: 'معرفة حقوقك توفر الوقت والمال.', d: 3 },
    ],
    patterns: [
      {
        tmpl: '{S} {HAVE} already paid the {F}.', arTmpl: '{S_ar} {PAY_ar} {F_ar} بالفعل.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'We', ar: 'نحن', agr: 'we' },
            { en: 'They', ar: 'هم', agr: 'they' }, { en: 'He', ar: 'هو', agr: 'he' },
            { en: 'She', ar: 'هي', agr: 'she' }, { en: 'The client', ar: 'الزبون', agr: 'he' },
            { en: 'The company', ar: 'الشركة', agr: 'she' },
          ],
          HAVE: (x) => [{ en: B.AGR[x.S.agr].have, ar: '' }],
          PAY: (x) => [{ en: 'paid', ar: AR_PAY[x.S.agr] }],
          F: [
            { en: 'invoice', ar: 'الفاتورة' }, { en: 'deposit', ar: 'العربون' },
            { en: 'fine', ar: 'الغرامة' }, { en: 'hospital bill', ar: 'فاتورة المستشفى' },
            { en: 'first installment', ar: 'القسط الأول' },
          ],
        },
        tags: ['review', 'present-perfect'], d: 2, limit: 12,
      },
      {
        tmpl: 'If the company {R}, I will {A}.', arTmpl: 'إذا {R_ar} الشركة، {A_ar}.',
        slots: {
          R: [
            { en: 'refuses to cooperate', ar: 'ترفض التعاون' },
            { en: 'delays the answer', ar: 'تؤخر الجواب' },
            { en: 'ignores my emails', ar: 'تتجاهل رسائلي' },
          ],
          A: [
            { en: 'ask for compensation', ar: 'سأطالب بالتعويض' },
            { en: 'contact the consumer agency', ar: 'سأتواصل مع هيئة حماية المستهلك' },
            { en: 'send a formal warning', ar: 'سأرسل إنذارا رسميا' },
            { en: 'cancel the order', ar: 'سألغي الطلب' },
            { en: 'take the case to court', ar: 'سأقاضي الشركة' },
          ],
        },
        tags: ['review', 'conditionals'], d: 2, limit: 12,
      },
      {
        tmpl: 'The {D} must be signed {T}.', arTmpl: 'يجب توقيع {D_ar} {T_ar}.',
        slots: {
          D: [
            { en: 'settlement agreement', ar: 'اتفاقية التسوية' }, { en: 'tenancy contract', ar: 'عقد الإيجار' },
            { en: 'appeal form', ar: 'استمارة الاستئناف' }, { en: 'mediation record', ar: 'محضر الوساطة' },
          ],
          T: [
            { en: 'by both sides', ar: 'من الطرفين' }, { en: 'before the deadline', ar: 'قبل الموعد النهائي' },
            { en: 'this week', ar: 'هذا الأسبوع' }, { en: 'at the next session', ar: 'في الجلسة القادمة' },
          ],
        },
        tags: ['review', 'passive'], d: 3, limit: 8,
      },
      {
        tmpl: 'Could you tell me {Q}?', arTmpl: 'هل يمكنك أن تخبرني {Q_ar}؟',
        slots: {
          Q: [
            { en: 'where the notary office is', ar: 'أين يقع مكتب كاتب العدل' },
            { en: 'how long the refund takes', ar: 'كم يستغرق رد المبلغ' },
            { en: 'what documents I need', ar: 'ما المستندات التي أحتاجها' },
            { en: 'who handles such cases', ar: 'من يتابع مثل هذه القضايا' },
            { en: 'when the next session is', ar: 'متى الجلسة القادمة' },
          ],
        },
        tags: ['review', 'requests'], d: 2, limit: 5,
      },
      {
        tmpl: 'A neutral mediator helps people {V}.', arTmpl: 'الوسيط المحايد يساعد الناس على {V_ar}.',
        slots: {
          V: [
            { en: 'reach a fair settlement', ar: 'الوصول إلى تسوية عادلة' },
            { en: 'avoid going to court', ar: 'تجنب اللجوء إلى المحكمة' },
            { en: 'save time and money', ar: 'توفير الوقت والمال' },
            { en: 'understand each other', ar: 'فهم بعضهم بعضا' },
          ],
        },
        tags: ['review', 'mediation'], d: 3, limit: 4,
      },
      {
        tmpl: 'We need {D} for the {P}.', arTmpl: 'نحتاج {D_ar} من أجل {P_ar}.',
        slots: {
          D: [
            { en: 'two certified copies', ar: 'نسختين مصدقتين' }, { en: 'the original report', ar: 'البلاغ الأصلي' },
            { en: 'a sworn translation', ar: 'ترجمة محلفة' }, { en: 'the payment receipt', ar: 'إيصال الدفع' },
          ],
          P: [
            { en: 'insurance claim', ar: 'طلب التعويض' }, { en: 'visa application', ar: 'طلب التأشيرة' },
            { en: 'court case', ar: 'القضية' }, { en: 'refund request', ar: 'طلب استرداد المبلغ' },
          ],
        },
        tags: ['review', 'documents'], d: 2, limit: 10,
      },
    ],
    fills: [
      { en: 'I would like the answer in writing, please.', ar: 'أود الجواب كتابيا من فضلك.', word: 'writing', hint: 'كتابيا' },
      { en: 'The claim was approved after two days.', ar: 'وافقوا على المطالبة بعد يومين.', word: 'claim', hint: 'مطالبة' },
      { en: 'Keep every receipt as proof.', ar: 'احتفظ بكل إيصال كإثبات.', word: 'proof', hint: 'إثبات' },
      { en: 'The mediator suggested a fair compromise.', ar: 'اقترح الوسيط حلا وسطا عادلا.', word: 'mediator', hint: 'وسيط' },
      { en: 'Sign the settlement in front of the witness.', ar: 'وقع التسوية أمام الشاهد.', word: 'settlement', hint: 'تسوية' },
      { en: 'The notary verified the documents.', ar: 'وثّق كاتب العدل المستندات.', word: 'notary', hint: 'كاتب العدل' },
      { en: 'They offered compensation for the delay.', ar: 'عرضوا تعويضا عن التأخير.', word: 'compensation', hint: 'تعويض' },
      { en: 'The tenant sent a written notice to the landlord.', ar: 'أرسل المستأجر إشعارا كتابيا إلى المالك.', word: 'tenant', hint: 'المستأجر' },
      { en: 'Never sign papers you do not understand.', ar: 'لا توقع أبدا أوراقا لا تفهمها.', word: 'sign', hint: 'يوقع' },
    ],
    orders: [
      { en: 'I have already paid the hospital bill.', ar: 'دفعت فاتورة المستشفى بالفعل.' },
      { en: 'If the company delays, I will cancel the order.', ar: 'إذا تأخرت الشركة فسألغي الطلب.' },
      { en: 'The settlement must be signed by both sides.', ar: 'يجب توقيع التسوية من الطرفين.' },
      { en: 'Could you tell me how the appeal works?', ar: 'هل يمكنك أن تخبرني كيف تجري عملية الاستئناف؟' },
      { en: 'A neutral mediator helps both sides talk.', ar: 'الوسيط المحايد يساعد الطرفين على الحوار.' },
      { en: 'We need a sworn translation of the contract.', ar: 'نحتاج ترجمة محلفة للعقد.' },
      { en: 'Stay calm and ask for everything in writing.', ar: 'ابق هادئا واطلب كل شيء كتابيا.' },
    ],
    mc: [
      { question: 'Which number do you ask for after filing a complaint?', options: ['The room number', 'The reference number', 'The flight number', 'The shoe size'], answerIndex: 1, ar: 'أي رقم تطلبه بعد تقديم شكوى؟' },
      { question: 'The company kept my deposit unfairly. Which topic is this?', options: ['Landlord and tenant issues', 'Weather reports', 'Cooking recipes', 'Football scores'], answerIndex: 0, ar: 'احتفظت الشركة بالعربون ظلما. أي موضوع هذا؟' },
      { question: 'Your car is damaged and cannot move. First call:', options: ['The barber', 'The bank manager', 'The towing service', 'The museum'], answerIndex: 2, ar: 'تضررت سيارتك ولا تتحرك. بمن تتصل أولا؟' },
      { question: 'Which closing belongs to a formal letter with an unknown name?', options: ['Yours faithfully', 'See ya', 'Call me', 'Cheers'], answerIndex: 3, ar: 'أي ختام يليق بخطاب رسمي لاسم مجهول؟' },
      { question: 'What does a mediator try to reach?', options: ['A settlement both sides accept', 'A longer dispute', 'A higher rent', 'A police arrest'], answerIndex: 0, ar: 'ماذا يحاول الوسيط الوصول إليه؟' },
    ],
  },
];
