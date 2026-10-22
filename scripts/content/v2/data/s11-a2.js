/* ============================================================
   v2 section data — s11-a2.js
   Specialized English & Leadership · lessons 246–248
   (legal English, HR English, leadership & team management)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 246 — Legal English ================= */
  {
    num: 246,
    tags: ['legal', 'court'],
    objectives: [
      'Use key courtroom and contract vocabulary',
      'Talk about evidence, witnesses and liability',
      'Describe a breach of contract and its consequences',
    ],
    grammar: {
      explanation: 'Legal English often uses the passive voice and formal verbs. We say "The contract was signed by both parties" or "The verdict was announced after long discussions". The phrase "be liable for" means being legally responsible: "The company is liable for the damage". A "breach of contract" happens when one party does not respect the terms of the agreement. In court, a witness testifies and the lawyers present evidence. If the evidence is strong, the judge may rule in your favour.',
      explanationAr: 'تستخدم اللغة القانونية المبني للمجهول وأفعالا رسمية؛ نقول The contract was signed by both parties وThe verdict was announced. وتعبر عبارة be liable for عن المسؤولية القانونية: The company is liable for the damage. ويحدث breach of contract عندما لا يحترم أحد الطرفين بنود الاتفاقية. وفي المحكمة يشهد الشاهد ويقدم المحامون الأدلة، وإذا كانت الأدلة قوية فقد يقضي القاضي لصالحك.',
      examples: [
        { en: 'The contract was signed by both parties.', ar: 'وُقّع العقد من الطرفين.' },
        { en: 'The company is liable for the damage.', ar: 'الشركة مسؤولة قانونا عن الأضرار.' },
        { en: 'If the evidence is strong, the judge may rule in your favour.', ar: 'إذا كانت الأدلة قوية، فقد يقضي القاضي لصالحك.' },
      ],
    },
    vocabulary: [
      { word: 'terms of the agreement', meaningAr: 'بنود الاتفاقية', example: 'Read the terms of the agreement carefully.' },
      { word: 'court hearing', meaningAr: 'جلسة محكمة', example: 'The court hearing starts at nine.', ipa: 'kɔːrt ˈhɪrɪŋ' },
      { word: 'witness', meaningAr: 'شاهد', example: 'The witness saw the whole incident.', ipa: 'ˈwɪtnəs' },
      { word: 'evidence', meaningAr: 'دليل / أدلة', example: 'The lawyer presented new evidence.', ipa: 'ˈevɪdəns' },
      { word: 'liable', meaningAr: 'مسؤول قانونا', example: 'The driver was liable for the accident.', ipa: 'ˈlaɪəbəl' },
      { word: 'breach of contract', meaningAr: 'إخلال بالعقد', example: 'The late delivery was a breach of contract.' },
      { word: 'judge', meaningAr: 'قاضي', example: 'The judge listened to both sides.' },
      { word: 'testify', meaningAr: 'يشهد أمام المحكمة', example: 'She will testify next Monday.', ipa: 'ˈtestɪfaɪ' },
      { word: 'sue', meaningAr: 'يقاضي', example: 'They decided to sue the supplier.' },
      { word: 'verdict', meaningAr: 'حكم قضائي', example: 'The verdict was fair, in my opinion.', ipa: 'ˈvɜrdɪkt' },
      { word: 'settle', meaningAr: 'يسوّي (نزاعا)', example: 'Both companies settled out of court.' },
      { word: 'lawyer', meaningAr: 'محامٍ', example: 'Our lawyer reviewed the contract.' },
    ],
    scenario: [
      { en: 'When is the court hearing scheduled?', ar: 'متى تمت جدولة جلسة المحكمة؟', d: 1 },
      { en: 'The court hearing is scheduled for Tuesday morning.', ar: 'جلسة المحكمة مجدولة صباح الثلاثاء.', d: 1 },
      { en: 'Both parties must respect the terms of the agreement.', ar: 'يجب على الطرفين احترام بنود الاتفاقية.', d: 2 },
      { en: 'He did not read the terms of the agreement before signing.', ar: 'لم يقرأ بنود الاتفاقية قبل التوقيع.', d: 2 },
      { en: 'A key witness will testify at the next hearing.', ar: 'سيشهد شاهد رئيسي في الجلسة القادمة.', d: 2 },
      { en: 'The witness gave a clear statement to our lawyer.', ar: 'قدم الشاهد شهادة واضحة لمحامينا.', d: 1 },
      { en: 'Is this document admissible as evidence?', ar: 'هل هذا المستند مقبول كدليل؟', d: 2 },
      { en: 'The lawyer believes the evidence supports our claim.', ar: 'يرى المحامي أن الأدلة تدعم مطالبتنا.', d: 2 },
      { en: 'The company is liable for the damage caused by the faulty product.', ar: 'الشركة مسؤولة قانونا عن الأضرار الناجمة عن المنتج المعيب.', d: 3 },
      { en: 'If they are liable, they must pay for the repairs.', ar: 'إذا كانت مسؤولة، فيجب أن تدفع تكلفة الإصلاحات.', d: 3 },
      { en: 'This delay is a clear breach of contract.', ar: 'هذا التأخير إخلال واضح بالعقد.', d: 2 },
      { en: 'She warned them that a breach of contract has serious consequences.', ar: 'حذّرتهم من أن الإخلال بالعقد له تبعات جسيمة.', d: 3 },
      { en: 'Could you send me the agreement before the hearing?', ar: 'هل يمكنك أن ترسل لي الاتفاقية قبل الجلسة؟', d: 2 },
      { en: 'We did not settle the dispute out of court.', ar: 'لم نُسوِّ النزاع خارج المحكمة.', d: 2 },
      { en: 'The two companies settled the dispute after months of talks.', ar: 'سوّت الشركةان النزاع بعد شهور من المفاوضات.', d: 2 },
      { en: 'The verdict was announced after two hours of discussion.', ar: 'أُعلن الحكم بعد ساعتين من المداولات.', d: 2 },
      { en: 'Our lawyer has prepared all the documents for the case.', ar: 'جهّز محامينا كل مستندات القضية.', d: 2 },
    ],
    patterns: [
      {
        tmpl: '{S} is liable for {O}.', arTmpl: '{S_ar} مسؤول قانونا عن {O_ar}.',
        slots: {
          S: [
            { en: 'The contractor', ar: 'المقاول' }, { en: 'The tenant', ar: 'المستأجر' },
            { en: 'The supplier', ar: 'المورّد' }, { en: 'The driver', ar: 'السائق' },
          ],
          O: [
            { en: 'the damage', ar: 'الأضرار' }, { en: 'the delay', ar: 'التأخير' },
            { en: 'the injuries', ar: 'الإصابات' }, { en: 'the faulty product', ar: 'المنتج المعيب' },
            { en: 'the unpaid invoices', ar: 'الفواتير غير المدفوعة' },
          ],
        },
        tags: ['legal', 'liability'], d: 2, limit: 12,
      },
      {
        tmpl: '{W} will testify in court on {D}.', arTmpl: 'سيشهد {W_ar} في المحكمة يوم {D_ar}.',
        slots: {
          W: [
            { en: 'The main witness', ar: 'الشاهد الرئيسي' }, { en: 'The expert', ar: 'الخبير' },
            { en: 'The claimant', ar: 'المدّعي' }, { en: 'The defendant', ar: 'المدّعى عليه' },
          ],
          D: B.DAYS,
        },
        tags: ['legal', 'court'], d: 2, limit: 12,
      },
      {
        tmpl: 'A breach of {A} can lead to {R}.', arTmpl: 'يمكن أن يؤدي الإخلال {A_ar} إلى {R_ar}.',
        slots: {
          A: [ { en: 'the contract', ar: 'بالعقد' }, { en: 'the agreement', ar: 'بالاتفاقية' } ],
          R: [
            { en: 'legal action', ar: 'إجراء قانوني' }, { en: 'a heavy fine', ar: 'غرامة باهظة' },
            { en: 'the cancellation of the deal', ar: 'إلغاء الصفقة' },
          ],
        },
        tags: ['legal', 'contracts'], d: 3, limit: 6,
      },
      {
        tmpl: 'Please review {T} before {E}.', arTmpl: 'راجع {T_ar} قبل {E_ar} من فضلك.',
        slots: {
          T: [
            { en: 'the terms of the agreement', ar: 'بنود الاتفاقية' }, { en: 'the witness statement', ar: 'شهادة الشاهد' },
            { en: 'the list of evidence', ar: 'قائمة الأدلة' }, { en: 'the court documents', ar: 'مستندات المحكمة' },
            { en: 'the final draft', ar: 'المسودة النهائية' },
          ],
          E: [ { en: 'the hearing', ar: 'الجلسة' }, { en: 'the meeting', ar: 'الاجتماع' }, { en: 'signing', ar: 'التوقيع' } ],
        },
        tags: ['legal', 'documents'], d: 2, limit: 10,
      },
      {
        tmpl: 'The hearing was {ADJ} because of {R}.', arTmpl: '{ADJ_ar} الجلسة بسبب {R_ar}.',
        slots: {
          ADJ: [
            { en: 'postponed', ar: 'أُجّلت' }, { en: 'delayed', ar: 'تأخرت' }, { en: 'canceled', ar: 'أُلغيت' },
          ],
          R: [
            { en: 'the absence of the judge', ar: 'غياب القاضي' }, { en: 'the missing documents', ar: 'المستندات المفقودة' },
            { en: 'the new evidence', ar: 'الأدلة الجديدة' },
          ],
        },
        tags: ['legal', 'passive'], d: 3, limit: 8,
      },
    ],
    fills: [
      { en: 'Both parties must respect the terms of the agreement.', ar: 'يجب على الطرفين احترام بنود الاتفاقية.', word: 'terms', hint: 'بنود' },
      { en: 'The court hearing is scheduled for Tuesday morning.', ar: 'جلسة المحكمة مجدولة صباح الثلاثاء.', word: 'hearing', hint: 'جلسة' },
      { en: 'A key witness will testify at the next hearing.', ar: 'سيشهد شاهد رئيسي في الجلسة القادمة.', word: 'witness', hint: 'شاهد' },
      { en: 'The lawyer believes the evidence supports our claim.', ar: 'يرى المحامي أن الأدلة تدعم مطالبتنا.', word: 'evidence', hint: 'أدلة' },
      { en: 'This delay is a clear breach of contract.', ar: 'هذا التأخير إخلال واضح بالعقد.', word: 'breach', hint: 'إخلال' },
      { en: 'The driver was liable for the accident.', ar: 'كان السائق مسؤولا قانونا عن الحادث.', word: 'liable', hint: 'مسؤول قانونا' },
      { en: 'The verdict was announced after two hours.', ar: 'أُعلن الحكم بعد ساعتين.', word: 'verdict', hint: 'حكم' },
      { en: 'Could you send me the agreement before the hearing?', ar: 'هل يمكنك أن ترسل لي الاتفاقية قبل الجلسة؟', word: 'send', hint: 'يرسل' },
    ],
    orders: [
      { en: 'When is the court hearing scheduled?', ar: 'متى تمت جدولة جلسة المحكمة؟' },
      { en: 'Both parties must respect the terms of the agreement.', ar: 'يجب على الطرفين احترام بنود الاتفاقية.' },
      { en: 'A key witness will testify at the next hearing.', ar: 'سيشهد شاهد رئيسي في الجلسة القادمة.' },
      { en: 'The company is liable for the faulty product.', ar: 'الشركة مسؤولة قانونا عن المنتج المعيب.' },
      { en: 'The verdict was announced after two hours of discussion.', ar: 'أُعلن الحكم بعد ساعتين من المداولات.' },
      { en: 'Could you send me the agreement before the hearing?', ar: 'هل يمكنك أن ترسل لي الاتفاقية قبل الجلسة؟' },
    ],
    mc: [
      { question: 'Who listens to the case and gives the verdict?', options: ['the judge', 'the witness', 'the receptionist', 'the driver'], answerIndex: 0, ar: 'من يستمع إلى القضية ويصدر الحكم؟' },
      { question: 'A "breach of contract" means:', options: ['one party did not respect the agreement', 'a new contract was signed', 'the court was closed', 'the lawyer was late'], answerIndex: 0, ar: 'ما معنى breach of contract؟' },
      { question: 'If you are "liable" for damage, you must:', options: ['pay for it', 'ignore it', 'hide it', 'celebrate it'], answerIndex: 0, ar: 'إذا كنت liable عن ضرر، فعليك أن:' },
      { question: 'What does a witness do in court?', options: ['testifies about what they saw', 'cooks the lunch', 'signs the rent', 'drives the judge'], answerIndex: 0, ar: 'ماذا يفعل الشاهد في المحكمة؟' },
      { question: '"The verdict was announced" is in the:', options: ['passive voice', 'present simple', 'imperative', 'question form'], answerIndex: 0, ar: 'جملة The verdict was announced في:' },
    ],
  },

  /* ================= lesson 247 — Human Resources English ================= */
  {
    num: 247,
    tags: ['human-resources', 'work'],
    objectives: [
      'Follow the recruitment and onboarding process',
      'Talk about the probation period and the benefits package',
      'Report a complaint to the HR department',
    ],
    grammar: {
      explanation: 'HR language uses the passive for processes: "Candidates are shortlisted by the manager", "Complaints are handled by the HR department". The present perfect talks about finished steps: "She has completed her onboarding", "Have you signed the contract yet?". Use must or has to for company policy: "New employees must finish the training in the first week". After if, the present simple describes policy: "If he passes the probation period, he gets a permanent contract."',
      explanationAr: 'تستخدم لغة الموارد البشرية المبني للمجهول للعمليات: Candidates are shortlisted by the manager وComplaints are handled by the HR department. ويعبّر المضارع التام عن خطوات منتهية: She has completed her onboarding وHave you signed the contract yet؟ وتستخدم must أو has to لسياسات الشركة: New employees must finish the training in the first week. وبعد if يصف المضارع البسيط السياسة: If he passes the probation period, he gets a permanent contract.',
      examples: [
        { en: 'Complaints are handled by the HR department.', ar: 'تتولى إدارة الموارد البشرية معالجة الشكاوى.' },
        { en: 'Have you completed your onboarding yet?', ar: 'هل أنهيت برنامج التعريف بعد؟' },
        { en: 'If she passes the probation period, she will get a permanent contract.', ar: 'إذا نجحت في فترة التجربة فستحصل على عقد دائم.' },
      ],
    },
    vocabulary: [
      { word: 'recruitment', meaningAr: 'توظيف / استقطاب', example: 'Recruitment for the new role starts in May.', ipa: 'rɪˈkruːtmənt' },
      { word: 'candidate', meaningAr: 'مرشح', example: 'We invited six candidates for interviews.' },
      { word: 'onboarding', meaningAr: 'برنامج تعريف بالعمل', example: 'The onboarding takes one week.' },
      { word: 'probation period', meaningAr: 'فترة تجربة', example: 'The probation period lasts three months.' },
      { word: 'benefits package', meaningAr: 'حزمة المزايا', example: 'Our benefits package includes health insurance.' },
      { word: 'HR department', meaningAr: 'إدارة الموارد البشرية', example: 'Send the form to the HR department.' },
      { word: 'complaint', meaningAr: 'شكوى', example: 'She filed a complaint about the schedule.' },
      { word: 'shortlist', meaningAr: 'يفرز قائمة مختصرة', example: 'The manager will shortlist five candidates.' },
      { word: 'notice period', meaningAr: 'فترة الإشعار', example: 'His notice period is two months.' },
      { word: 'annual leave', meaningAr: 'إجازة سنوية', example: 'You have twenty days of annual leave.' },
      { word: 'performance review', meaningAr: 'تقييم الأداء', example: 'My performance review is in June.' },
      { word: 'hire', meaningAr: 'يوظّف', example: 'They plan to hire two engineers.' },
    ],
    scenario: [
      { en: 'The HR department handles all complaints professionally.', ar: 'تتولى إدارة الموارد البشرية معالجة جميع الشكاوى باحترافية.', d: 1 },
      { en: 'Have you completed your onboarding yet?', ar: 'هل أنهيت برنامج التعريف بعد؟', d: 1 },
      { en: 'Yes, I finished it and signed the contract last week.', ar: 'نعم، أنهيته ووقعت العقد الأسبوع الماضي.', d: 1 },
      { en: 'Recruitment for the new position starts next month.', ar: 'يبدأ التوظيف للوظيفة الجديدة الشهر القادم.', d: 1 },
      { en: 'We have received more than fifty applications.', ar: 'استلمنا أكثر من خمسين طلب توظيف.', d: 2 },
      { en: 'The manager will shortlist five candidates for the interviews.', ar: 'سيفروز المدير خمسة مرشحين للمقابلات.', d: 2 },
      { en: 'She was hired after three successful interviews.', ar: 'وُظّفت بعد ثلاث مقابلات ناجحة.', d: 1 },
      { en: 'New employees are on probation for the first three months.', ar: 'الموظفون الجدد في فترة تجربة خلال الأشهر الثلاثة الأولى.', d: 2 },
      { en: 'If he passes the probation period, he will get a permanent contract.', ar: 'إذا نجح في فترة التجربة فسيحصل على عقد دائم.', d: 3 },
      { en: 'Our benefits package includes health insurance and annual leave.', ar: 'تشمل حزمة مزايانا التأمين الصحي والإجازة السنوية.', d: 2 },
      { en: 'Does the benefits package cover family members?', ar: 'هل تغطي حزمة المزايا أفراد الأسرة؟', d: 2 },
      { en: 'I have not received my contract yet.', ar: 'لم أستلم عقدني بعد.', d: 1 },
      { en: 'Please submit your complaint in writing to the HR department.', ar: 'قدّم شكواك كتابة إلى إدارة الموارد البشرية من فضلك.', d: 2 },
      { en: 'All complaints are treated confidentially.', ar: 'تُعامل جميع الشكاوى بسرية تامة.', d: 3 },
      { en: 'Employees must give two months notice before resigning.', ar: 'على الموظفين تقديم إشعار قبل شهرين قبل الاستقالة.', d: 3 },
      { en: 'The probation period can be extended once, if needed.', ar: 'يمكن تمديد فترة التجربة مرة واحدة عند الحاجة.', d: 3 },
      { en: 'When is your performance review this year?', ar: 'متى تقييم أدائك هذا العام؟', d: 2 },
    ],
    patterns: [
      {
        tmpl: '{D} handles {O}.', arTmpl: 'تتولى {D_ar} معالجة {O_ar}.',
        slots: {
          D: [
            { en: 'The HR department', ar: 'إدارة الموارد البشرية' }, { en: 'The payroll team', ar: 'فريق الرواتب' },
            { en: 'The IT helpdesk', ar: 'مكتب الدعم التقني' }, { en: 'The front desk', ar: 'مكتب الاستقبال' },
          ],
          O: [
            { en: 'these complaints', ar: 'هذه الشكاوى' }, { en: 'staff requests', ar: 'طلبات الموظفين' },
            { en: 'the recruitment process', ar: 'عملية التوظيف' }, { en: 'all applications', ar: 'جميع طلبات التوظيف' },
          ],
        },
        tags: ['human-resources', 'work'], d: 1, limit: 14,
      },
      {
        tmpl: 'Have you completed {N} yet?', arTmpl: 'هل أنهيت {N_ar} بعد؟',
        slots: {
          N: [
            { en: 'the onboarding', ar: 'برنامج التعريف' }, { en: 'the training course', ar: 'الدورة التدريبية' },
            { en: 'your paperwork', ar: 'أوراقك الرسمية' }, { en: 'the medical check', ar: 'الفحص الطبي' },
          ],
        },
        tags: ['human-resources', 'present-perfect'], d: 2, limit: 4,
      },
      {
        tmpl: '{E} must give {N} when resigning.', arTmpl: 'على {E_ar} تقديم {N_ar} عند الاستقالة.',
        slots: {
          E: [
            { en: 'Employees', ar: 'الموظفين' }, { en: 'The sales manager', ar: 'مدير المبيعات' },
            { en: 'The new accountant', ar: 'المحاسب الجديد' },
          ],
          N: [
            { en: 'one month notice', ar: 'إشعار قبل شهر' }, { en: 'two months notice', ar: 'إشعار قبل شهرين' },
            { en: 'a written resignation', ar: 'استقالة مكتوبة' },
          ],
        },
        tags: ['human-resources', 'policy'], d: 3, limit: 9,
      },
      {
        tmpl: 'Our benefits package includes {B}.', arTmpl: 'تشمل حزمة مزايانا {B_ar}.',
        slots: {
          B: [
            { en: 'health insurance', ar: 'التأمين الصحي' }, { en: 'paid annual leave', ar: 'إجازة سنوية مدفوعة' },
            { en: 'a transportation allowance', ar: 'بدل مواصلات' }, { en: 'a housing allowance', ar: 'بدل سكن' },
            { en: 'a flexible working schedule', ar: 'جدول عمل مرن' },
          ],
        },
        tags: ['human-resources', 'benefits'], d: 2, limit: 5,
      },
      {
        tmpl: 'The probation period lasts {T}.', arTmpl: 'تمتد فترة التجربة {T_ar}.',
        slots: {
          T: [
            { en: 'three months', ar: 'ثلاثة أشهر' }, { en: 'six months', ar: 'ستة أشهر' },
            { en: 'ninety days', ar: 'تسعين يوما' },
          ],
        },
        tags: ['human-resources', 'policy'], d: 2, limit: 3,
      },
    ],
    fills: [
      { en: 'The HR department handles all complaints professionally.', ar: 'تتولى إدارة الموارد البشرية معالجة جميع الشكاوى باحترافية.', word: 'department', hint: 'إدارة' },
      { en: 'Have you completed your onboarding yet?', ar: 'هل أنهيت برنامج التعريف بعد؟', word: 'onboarding', hint: 'برنامج تعريف بالعمل' },
      { en: 'Recruitment for the new position starts next month.', ar: 'يبدأ التوظيف للوظيفة الجديدة الشهر القادم.', word: 'Recruitment', hint: 'توظيف' },
      { en: 'The manager will shortlist five candidates for the interviews.', ar: 'سيفروز المدير خمسة مرشحين للمقابلات.', word: 'candidates', hint: 'مرشحون' },
      { en: 'New employees are on probation for the first three months.', ar: 'الموظفون الجدد في فترة تجربة خلال الأشهر الثلاثة الأولى.', word: 'probation', hint: 'فترة تجربة' },
      { en: 'Our benefits package includes health insurance and annual leave.', ar: 'تشمل حزمة مزايانا التأمين الصحي والإجازة السنوية.', word: 'benefits', hint: 'مزايا' },
      { en: 'Please submit your complaint in writing to the HR department.', ar: 'قدّم شكواك كتابة إلى إدارة الموارد البشرية من فضلك.', word: 'complaint', hint: 'شكوى' },
      { en: 'Employees must give two months notice before resigning.', ar: 'على الموظفين تقديم إشعار قبل شهرين قبل الاستقالة.', word: 'notice', hint: 'إشعار' },
    ],
    orders: [
      { en: 'Have you completed your onboarding yet?', ar: 'هل أنهيت برنامج التعريف بعد؟' },
      { en: 'Recruitment for the new position starts next month.', ar: 'يبدأ التوظيف للوظيفة الجديدة الشهر القادم.' },
      { en: 'The manager will shortlist five candidates.', ar: 'سيفروز المدير خمسة مرشحين.' },
      { en: 'Our benefits package includes health insurance.', ar: 'تشمل حزمة مزايانا التأمين الصحي.' },
      { en: 'Please submit your complaint in writing.', ar: 'قدّم شكواك كتابة من فضلك.' },
      { en: 'If he passes the probation period, he will get a permanent contract.', ar: 'إذا نجح في فترة التجربة فسيحصل على عقد دائم.' },
    ],
    mc: [
      { question: 'Where do you report a workplace complaint?', options: ['to the HR department', 'to the pilot', 'to the waiter', 'to the bank'], answerIndex: 0, ar: 'إلى أين تقدم شكوى في العمل؟' },
      { question: 'A "probation period" is:', options: ['a trial time at the start of a job', 'a long holiday', 'a salary increase', 'a type of contract'], answerIndex: 0, ar: 'فترة التجربة هي:' },
      { question: 'What is a "benefits package"?', options: ['extra advantages like insurance and leave', 'the office key', 'a work uniform', 'the bus route'], answerIndex: 0, ar: 'ما هي حزمة المزايا؟' },
      { question: 'During recruitment, a manager will usually:', options: ['shortlist candidates for interviews', 'close the company', 'delete all applications', 'change the office color'], answerIndex: 0, ar: 'أثناء التوظيف يقوم المدير عادة بـ:' },
      { question: '"Employees must give notice before resigning" means they should:', options: ['inform the company in advance', 'leave the same day', 'send a gift', 'call the police'], answerIndex: 0, ar: 'جملة Employees must give notice before resigning تعني أنه ينبغي لهم:' },
    ],
  },

  /* ================= lesson 248 — Leadership and Team Management ================= */
  {
    num: 248,
    tags: ['leadership', 'management'],
    objectives: [
      'Delegate tasks and give clear instructions',
      'Motivate the team and hold everyone accountable',
      'Lead by example and give constructive feedback',
    ],
    grammar: {
      explanation: 'Leadership language often uses imperatives and modals: "Delegate the small tasks", "You should give clear instructions". Use "by + gerund" to explain a method: "He motivates the team by celebrating small wins". The phrase "hold someone accountable" takes a person and a responsibility: "The manager holds everyone accountable for the deadlines". To lead by example means to behave the way you want your team to behave.',
      explanationAr: 'كثيرا ما تستخدم لغة القيادة صيغة الأمر والأفعال الناقصة: Delegate the small tasks وYou should give clear instructions. وتشرح صيغة by + المصدر طريقة الأداء: He motivates the team by celebrating small wins. ويأخذ تعبير hold someone accountable مفعولا شخصا ومسؤولية: The manager holds everyone accountable for the deadlines. ويعني lead by example أن تتصرف كما تريد فريقك أن يتصرف.',
      examples: [
        { en: 'Delegate tasks when the team has the right skills.', ar: 'فوّض المهام عندما يملك الفريق المهارات المناسبة.' },
        { en: 'He motivates the team by celebrating small wins.', ar: 'يحفّز الفريق من خلال الاحتفال بالانتصارات الصغيرة.' },
        { en: 'If you lead by example, the team will trust you.', ar: 'إذا كنت قدوة، فسيثق بك الفريق.' },
      ],
    },
    vocabulary: [
      { word: 'delegate', meaningAr: 'يفوّض', example: 'A good manager delegates tasks wisely.', ipa: 'ˈdelɪɡeɪt' },
      { word: 'task', meaningAr: 'مهمة', example: 'This task needs two people.' },
      { word: 'instruction', meaningAr: 'تعليمة', example: 'Please follow the instructions step by step.' },
      { word: 'motivate', meaningAr: 'يحفّز', example: 'Praise can motivate the whole team.' },
      { word: 'accountable', meaningAr: 'مسؤول أمام الفريق', example: 'Everyone is accountable for their part.' },
      { word: 'lead by example', meaningAr: 'يقدو بالقدوة', example: 'Real leaders lead by example.' },
      { word: 'team leader', meaningAr: 'قائد الفريق', example: 'The team leader runs the Monday meeting.' },
      { word: 'blame', meaningAr: 'يلوم', example: 'Do not blame others for your mistakes.' },
      { word: 'target', meaningAr: 'هدف', example: 'The team reached its target early.' },
      { word: 'colleague', meaningAr: 'زميل عمل', example: 'Respect every colleague in the room.' },
      { word: 'feedback', meaningAr: 'تغذية راجعة', example: 'Honest feedback helps people grow.' },
      { word: 'trust', meaningAr: 'يثق / ثقة', example: 'Trust grows when promises are kept.' },
    ],
    scenario: [
      { en: 'A good manager knows how to delegate tasks.', ar: 'المدير الجيد يعرف كيف يفوّض المهام.', d: 1 },
      { en: 'When should a manager delegate tasks?', ar: 'متى ينبغي للمدير تفويض المهام؟', d: 2 },
      { en: 'Delegate tasks when the team has the right skills.', ar: 'فوّض المهام عندما يملك الفريق المهارات المناسبة.', d: 2 },
      { en: 'Please delegate these tasks to the senior engineers.', ar: 'فوّض هذه المهام إلى المهندسين الأكبر خبرة من فضلك.', d: 1 },
      { en: 'The team leader gives clear instructions before every shift.', ar: 'يقدم قائد الفريق تعليمات واضحة قبل كل مناوبة.', d: 1 },
      { en: 'We did not receive clear instructions, so the launch was delayed.', ar: 'لم نستلم تعليمات واضحة، لذا تأخر الإطلاق.', d: 2 },
      { en: 'Could you give clearer instructions next time?', ar: 'هل يمكنك تقديم تعليمات أوضح في المرة القادمة؟', d: 2 },
      { en: 'How do you motivate the team on difficult days?', ar: 'كيف تحفّز الفريق في الأيام الصعبة؟', d: 2 },
      { en: 'Small achievements motivate the team more than long speeches.', ar: 'الإنجازات الصغيرة تحفّز الفريق أكثر من الخطب الطويلة.', d: 2 },
      { en: 'The manager holds everyone accountable for their deadlines.', ar: 'يعتبر المدير الجميع مسؤولين عن مواعيدهم النهائية.', d: 2 },
      { en: 'Good managers hold everyone accountable, including themselves.', ar: 'المدراء الجيدون يعتبرون الجميع مسؤولين، بما فيهم أنفسهم.', d: 3 },
      { en: 'A true leader leads by example.', ar: 'القائد الحقيقي يقود بالقدوة.', d: 1 },
      { en: 'If you lead by example, the team will trust you.', ar: 'إذا كنت قدوة فسيثق بك الفريق.', d: 3 },
      { en: 'He never blames others for his own mistakes.', ar: 'لا يلوم الآخرين أبدا عن أخطائه هو.', d: 2 },
      { en: 'The team meets every Monday to plan the week.', ar: 'يجتمع الفريق كل اثنين للتخطيط للأسبوع.', d: 1 },
      { en: 'Her team has reached every target this year.', ar: 'حقق فريقها كل هدف هذا العام.', d: 2 },
      { en: 'Do not criticize a colleague in public.', ar: 'لا تنتقد زميلا أمام الجميع.', d: 2 },
      { en: 'Great leaders listen more than they speak.', ar: 'القادة العظماء يستمعون أكثر مما يتكلمون.', d: 2 },
    ],
    patterns: [
      {
        tmpl: '{L} delegates tasks to {W}.', arTmpl: 'يفوّض {L_ar} المهام إلى {W_ar}.',
        slots: {
          L: [
            { en: 'The manager', ar: 'المدير' }, { en: 'The director', ar: 'المدير التنفيذي' },
            { en: 'The team leader', ar: 'قائد الفريق' }, { en: 'The supervisor', ar: 'المشرف' },
          ],
          W: [
            { en: 'the junior staff', ar: 'الموظفين الجدد' }, { en: 'two experienced engineers', ar: 'مهندسين ذوي خبرة' },
            { en: 'the night shift', ar: 'فريق المناوبة الليلي' }, { en: 'the new interns', ar: 'المتدربين الجدد' },
          ],
        },
        tags: ['leadership', 'delegation'], d: 1, limit: 12,
      },
      {
        tmpl: 'Please give {ADJ} instructions to {W}.', arTmpl: 'اعطِ {W_ar} تعليمات {ADJ_ar} من فضلك.',
        slots: {
          ADJ: [
            { en: 'clear', ar: 'واضحة' }, { en: 'written', ar: 'مكتوبة' }, { en: 'short', ar: 'مختصرة' },
          ],
          W: [
            { en: 'the team', ar: 'الفريق' }, { en: 'the new employees', ar: 'الموظفين الجدد' },
            { en: 'the support staff', ar: 'موظفي الدعم' },
          ],
        },
        tags: ['leadership', 'instructions'], d: 2, limit: 8,
      },
      {
        tmpl: '{M} motivates the team by {G}.', arTmpl: 'يحفّز {M_ar} الفريق من خلال {G_ar}.',
        slots: {
          M: [
            { en: 'The manager', ar: 'المدير' }, { en: 'Our director', ar: 'مديرنا' }, { en: 'The coach', ar: 'المدرب' },
          ],
          G: [
            { en: 'celebrating small wins', ar: 'الاحتفال بالانتصارات الصغيرة' }, { en: 'listening to everyone', ar: 'الاستماع إلى الجميع' },
            { en: 'praising good work', ar: 'الثناء على العمل الجيد' }, { en: 'sharing the credit', ar: 'تقاسم الفضل' },
          ],
        },
        tags: ['leadership', 'motivation'], d: 2, limit: 10,
      },
      {
        tmpl: '{S} {V} {O} accountable for {R}.', arTmpl: '{V_ar} {S_ar} {O_ar} مسؤولين عن {R_ar}.',
        slots: {
          S: [
            { en: 'The manager', ar: 'المدير', p: 0 }, { en: 'The team leader', ar: 'قائد الفريق', p: 0 },
            { en: 'Our supervisors', ar: 'مشرفونا', p: 1 },
          ],
          V: (x) => [{ en: x.S.p ? 'hold' : 'holds', ar: 'يعتبر' }],
          O: [
            { en: 'everyone', ar: 'الجميع' }, { en: 'the whole team', ar: 'الفريق بأكمله' },
            { en: 'each member', ar: 'كل عضو' },
          ],
          R: [
            { en: 'the deadlines', ar: 'المواعيد النهائية' }, { en: 'the quality of the work', ar: 'جودة العمل' },
            { en: 'the weekly report', ar: 'التقرير الأسبوعي' },
          ],
        },
        tags: ['leadership', 'accountability'], d: 3, limit: 12,
      },
      {
        tmpl: 'Do not {B} in public.', arTmpl: 'لا {B_ar} أمام الجميع.',
        slots: {
          B: [
            { en: 'criticize a colleague', ar: 'تنتقد زميلا' }, { en: 'shout at the team', ar: 'تصرخ في الفريق' },
            { en: 'share private emails', ar: 'تشارك رسائل خاصة' },
          ],
        },
        tags: ['leadership', 'etiquette'], d: 2, limit: 3,
      },
    ],
    fills: [
      { en: 'A good manager knows how to delegate tasks.', ar: 'المدير الجيد يعرف كيف يفوّض المهام.', word: 'delegate', hint: 'يفوّض' },
      { en: 'The team leader gives clear instructions before every shift.', ar: 'يقدم قائد الفريق تعليمات واضحة قبل كل مناوبة.', word: 'instructions', hint: 'تعليمات' },
      { en: 'Small achievements motivate the team more than long speeches.', ar: 'الإنجازات الصغيرة تحفّز الفريق أكثر من الخطب الطويلة.', word: 'motivate', hint: 'يحفّز' },
      { en: 'The manager holds everyone accountable for their deadlines.', ar: 'يعتبر المدير الجميع مسؤولين عن مواعيدهم النهائية.', word: 'accountable', hint: 'مسؤول أمام الفريق' },
      { en: 'A true leader leads by example.', ar: 'القائد الحقيقي يقود بالقدوة.', word: 'leader', hint: 'قائد' },
      { en: 'He never blames others for his own mistakes.', ar: 'لا يلوم الآخرين أبدا عن أخطائه هو.', word: 'blames', hint: 'يلوم' },
      { en: 'Her team has reached every target this year.', ar: 'حقق فريقها كل هدف هذا العام.', word: 'target', hint: 'هدف' },
      { en: 'Do not criticize a colleague in public.', ar: 'لا تنتقد زميلا أمام الجميع.', word: 'colleague', hint: 'زميل' },
    ],
    orders: [
      { en: 'Please delegate these tasks to the senior engineers.', ar: 'فوّض هذه المهام إلى المهندسين الأكبر خبرة من فضلك.' },
      { en: 'The team leader gives clear instructions before every shift.', ar: 'يقدم قائد الفريق تعليمات واضحة قبل كل مناوبة.' },
      { en: 'How do you motivate the team on difficult days?', ar: 'كيف تحفّز الفريق في الأيام الصعبة؟' },
      { en: 'A true leader leads by example.', ar: 'القائد الحقيقي يقود بالقدوة.' },
      { en: 'Do not criticize a colleague in public.', ar: 'لا تنتقد زميلا أمام الجميع.' },
      { en: 'Great leaders listen more than they speak.', ar: 'القادة العظماء يستمعون أكثر مما يتكلمون.' },
    ],
    mc: [
      { question: 'What does "delegate" mean?', options: ['give part of your work to others', 'do everything alone', 'cancel the project', 'work at night'], answerIndex: 0, ar: 'ما معنى delegate؟' },
      { question: 'How can a manager motivate the team?', options: ['by celebrating small wins', 'by removing all breaks', 'by ignoring the results', 'by shouting daily'], answerIndex: 0, ar: 'كيف يحفّز المدير الفريق؟' },
      { question: '"Hold everyone accountable" means:', options: ['everyone answers for their part', 'nobody works', 'only the manager works', 'the team takes a holiday'], answerIndex: 0, ar: 'معنى hold everyone accountable هو:' },
      { question: 'What does "lead by example" mean?', options: ['behave the way you want your team to behave', 'lead from the back of the room', 'give the hardest work to others', 'avoid responsibility'], answerIndex: 0, ar: 'ما معنى lead by example؟' },
      { question: 'Which sentence gives constructive feedback?', options: ['Your report was clear; add more data next time.', 'You always fail.', 'This is terrible.', 'I did not read it.'], answerIndex: 0, ar: 'أي جملة تقدم تغذية راجعة بناءة؟' },
    ],
  },
];
