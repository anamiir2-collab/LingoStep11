/* ============================================================
   v2 section data — s08-c2.js
   Work & Money · lessons 189–192
   (Opening a Bank Account · Bills and Loans · Contracts · Business Invoices)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

const SIGN_AR = { I: 'وقّعت', you: 'وقّعت', he: 'وقّع', she: 'وقّعت', we: 'وقّعنا', they: 'وقّعوا' };

export const lessons = [

  /* ================= lesson 189 — Opening a Bank Account ================= */
  {
    num: 189,
    tags: ['banking', 'money'],
    objectives: [
      'Request a savings or current account politely',
      'Ask about required documents, deposits and fees',
      'Complete and sign the account opening form',
    ],
    grammar: {
      explanation: 'At the bank, polite requests use "I would like to ..." or "Could I ... ?": "I would like to open a savings account, please". Staff ask about rules with do/does and the present simple: "Does this account have a monthly fee?". "Need" and "require" both ask about obligations: "What documents do you require?". After a number, the noun stays singular: "five working days", "two dollars". Present perfect shows finished steps: "They have not approved my application yet".',
      explanationAr: 'في البنك نستخدم الطلبات المهذبة بصيغة I would like to أو Could I: I would like to open a savings account, please. ويسأل الموظفون عن القواعد بـ do/does مع المضارع البسيط: Does this account have a monthly fee؟ وتعبر need وrequire عن الإلزام: What documents do you require؟ وبعد الأرقام يبقى الاسم مفردا: five working days وtwo dollars. ويعبر المضارع التام عن خطوات منتهية: They have not approved my application yet.',
      examples: [
        { en: 'I would like to open a savings account, please.', ar: 'أود فتح حساب توفير من فضلك.' },
        { en: 'What documents do I need for a current account?', ar: 'ما المستندات التي أحتاجها لحساب جاري؟' },
        { en: 'They have not approved my application yet.', ar: 'لم يوافقوا على طلبي بعد.' },
      ],
    },
    vocabulary: [
      { word: 'savings account', meaningAr: 'حساب توفير', example: 'A savings account keeps your money safe.', ipa: 'ˈseɪvɪŋz əˈkaʊnt' },
      { word: 'current account', meaningAr: 'حساب جاري', example: 'My salary goes into my current account.' },
      { word: 'document', meaningAr: 'مستند / وثيقة', example: 'Bring every document with you.' },
      { word: 'minimum deposit', meaningAr: 'الحد الأدنى للإيداع', example: 'The minimum deposit is one hundred dollars.' },
      { word: 'monthly fee', meaningAr: 'رسوم شهرية', example: 'This account has no monthly fee.' },
      { word: 'identity card', meaningAr: 'بطاقة هوية', example: 'The clerk checked my identity card.' },
      { word: 'proof of address', meaningAr: 'إثبات سكن', example: 'A recent bill works as a proof of address.' },
      { word: 'signature', meaningAr: 'توقيع', example: 'Put your signature at the bottom.' },
      { word: 'form', meaningAr: 'استمارة', example: 'Please fill in this form first.' },
      { word: 'clerk', meaningAr: 'موظف (بنك)', example: 'The clerk explained everything twice.' },
      { word: 'require', meaningAr: 'يشترط / يطلب', example: 'What documents do you require?' },
      { word: 'interest', meaningAr: 'فائدة', example: 'The bank pays interest on savings.', ipa: 'ˈɪntrəst' },
    ],
    scenario: [
      { en: 'I would like to open a savings account, please.', ar: 'أود فتح حساب توفير من فضلك.', d: 1 },
      { en: 'Certainly. Have you brought the required documents?', ar: 'بالتأكيد. هل أحضرت المستندات المطلوبة؟', d: 2 },
      { en: 'Yes, here is my identity card and my contract.', ar: 'نعم، هذه بطاقة هويتي وعقدي.', d: 1 },
      { en: 'What documents do I need for a current account?', ar: 'ما المستندات التي أحتاجها لحساب جاري؟', d: 1 },
      { en: 'You need an identity card and a proof of address.', ar: 'تحتاج إلى بطاقة هوية وإثبات سكن.', d: 1 },
      { en: 'Does this account have a monthly fee?', ar: 'هل لهذا الحساب رسوم شهرية؟', d: 1 },
      { en: 'The fee is two dollars, but savings accounts are free.', ar: 'الرسوم دولاران، لكن حسابات التوفير مجانية.', d: 2 },
      { en: 'What is the minimum deposit?', ar: 'ما الحد الأدنى للإيداع؟', d: 1 },
      { en: 'The minimum deposit is one hundred dollars.', ar: 'الحد الأدنى للإيداع مئة دولار.', d: 1 },
      { en: 'Please fill in this form and sign at the bottom.', ar: 'من فضلك املأ هذه الاستمارة ووقّع في الأسفل.', d: 1 },
      { en: 'My signature is here. When will I get the card?', ar: 'توقيعي هنا. متى سأحصل على البطاقة؟', d: 2 },
      { en: 'The card will arrive within five working days.', ar: 'ستصل البطاقة خلال خمسة أيام عمل.', d: 2 },
      { en: 'The clerk has checked my papers twice.', ar: 'فحص موظف البنك أوراقي مرتين.', d: 2 },
      { en: 'They have not approved my application yet.', ar: 'لم يوافقوا على طلبي بعد.', d: 2 },
      { en: 'If you keep a high balance, the bank pays interest.', ar: 'إذا حافظت على رصيد مرتفع، يدفع البنك فائدة.', d: 3 },
      { en: 'My wife has just opened her first account.', ar: 'فتحت زوجتي حسابها الأول للتو.', d: 2 },
      { en: 'Do you charge for money transfers?', ar: 'هل تتقاضون رسوما على التحويلات؟', d: 2 },
      { en: 'No, transfers inside the bank are free of charge.', ar: 'لا، التحويلات داخل البنك مجانية.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I would like to open a {Ta} account, please.', arTmpl: 'أود فتح {Ta_ar} من فضلك.',
        slots: {
          Ta: [
            { en: 'current', ar: 'حساب جاري' }, { en: 'joint', ar: 'حساب مشترك' },
            { en: 'student', ar: 'حساب طلابي' }, { en: 'business', ar: 'حساب تجاري' },
            { en: 'salary', ar: 'حساب راتب' }, { en: 'second', ar: 'حساب ثان' },
          ],
        },
        tags: ['banking', 'polite-requests'], d: 1, limit: 6,
      },
      {
        tmpl: 'What documents do I need for a {D}?', arTmpl: 'ما المستندات التي أحتاجها لـ{D_ar}؟',
        slots: {
          D: [
            { en: 'credit card', ar: 'بطاقة ائتمان' }, { en: 'car loan', ar: 'قرض سيارة' },
            { en: 'housing loan', ar: 'قرض سكن' }, { en: 'work visa', ar: 'تأشيرة عمل' },
            { en: 'student account', ar: 'حساب طلابي' }, { en: 'joint account', ar: 'حساب مشترك' },
          ],
        },
        tags: ['banking', 'questions'], d: 2, limit: 6,
      },
      {
        tmpl: 'The {F} for this account is {A}.', arTmpl: '{F_ar} لهذا الحساب {A_ar}.',
        slots: {
          F: [
            { en: 'monthly fee', ar: 'الرسوم الشهرية' }, { en: 'yearly fee', ar: 'الرسوم السنوية' },
            { en: 'minimum deposit', ar: 'الحد الأدنى للإيداع' }, { en: 'transfer charge', ar: 'رسوم التحويل' },
            { en: 'card fee', ar: 'رسوم البطاقة' },
          ],
          A: [
            { en: 'two dollars', ar: 'دولاران' }, { en: 'five dollars', ar: 'خمسة دولارات' },
            { en: 'ten dollars', ar: 'عشرة دولارات' }, { en: 'fifty dollars', ar: 'خمسون دولارا' },
            { en: 'one hundred dollars', ar: 'مئة دولار' },
          ],
        },
        tags: ['banking', 'money'], d: 2, limit: 12,
      },
      {
        tmpl: 'Please fill in this form and {S} here.', arTmpl: 'من فضلك املأ هذه الاستمارة و{S_ar} هنا.',
        slots: {
          S: [
            { en: 'sign', ar: 'وقّع' }, { en: 'write your name', ar: 'اكتب اسمك' },
            { en: 'print your name', ar: 'اطبع اسمك' }, { en: 'add today\'s date', ar: 'أضف تاريخ اليوم' },
            { en: 'put your initials', ar: 'ضع أحرف اسمك الأولى' },
          ],
        },
        tags: ['banking', 'imperative'], d: 1, limit: 5,
      },
      {
        tmpl: '{S} has just {V} a new account at the bank.', arTmpl: '{S_ar} {V_ar} للتو حسابا جديدا في البنك.',
        slots: {
          S: B.PEOPLE_SING,
          V: (x) => [{ en: B.enPP('open'), ar: B.arPast('open', x.S.agr) }],
        },
        tags: ['banking', 'present-perfect'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'I would like to open a savings account, please.', ar: 'أود فتح حساب توفير من فضلك.', word: 'savings', hint: 'توفير' },
      { en: 'What documents do I need for a current account?', ar: 'ما المستندات التي أحتاجها لحساب جاري؟', word: 'documents', hint: 'مستندات' },
      { en: 'Does this account have a monthly fee?', ar: 'هل لهذا الحساب رسوم شهرية؟', word: 'fee', hint: 'رسوم' },
      { en: 'The minimum deposit is one hundred dollars.', ar: 'الحد الأدنى للإيداع مئة دولار.', word: 'deposit', hint: 'إيداع' },
      { en: 'You need an identity card and a proof of address.', ar: 'تحتاج إلى بطاقة هوية وإثبات سكن.', word: 'identity', hint: 'هوية' },
      { en: 'Please fill in this form and sign at the bottom.', ar: 'من فضلك املأ هذه الاستمارة ووقّع في الأسفل.', word: 'sign', hint: 'يوقّع' },
      { en: 'If you keep a high balance, the bank pays interest.', ar: 'إذا حافظت على رصيد مرتفع، يدفع البنك فائدة.', word: 'interest', hint: 'فائدة' },
      { en: 'No, transfers inside the bank are free of charge.', ar: 'لا، التحويلات داخل البنك مجانية.', word: 'transfers', hint: 'تحويلات' },
    ],
    orders: [
      { en: 'I would like to open a savings account, please.', ar: 'أود فتح حساب توفير من فضلك.' },
      { en: 'What documents do I need for a current account?', ar: 'ما المستندات التي أحتاجها لحساب جاري؟' },
      { en: 'The minimum deposit is one hundred dollars.', ar: 'الحد الأدنى للإيداع مئة دولار.' },
      { en: 'Please fill in this form and sign at the bottom.', ar: 'من فضلك املأ هذه الاستمارة ووقّع في الأسفل.' },
      { en: 'The card will arrive within five working days.', ar: 'ستصل البطاقة خلال خمسة أيام عمل.' },
      { en: 'If you keep a high balance, the bank pays interest.', ar: 'إذا حافظت على رصيد مرتفع، يدفع البنك فائدة.' },
    ],
    mc: [
      { question: 'What do you ask for at the bank to keep money for the future?', options: ['a savings account', 'a parking ticket', 'a job application', 'a boarding pass'], answerIndex: 0, ar: 'ماذا تطلب في البنك لادخار مالك للمستقبل؟' },
      { question: '"The minimum deposit is one hundred dollars" means:', options: ['أقل مبلغ للإيداع مئة دولار', 'أقصى مبلغ للسحب مئة دولار', 'الرسوم الشهرية مئة دولار', 'الفائدة مئة دولار'], answerIndex: 0, ar: 'ماذا تعني الجملة The minimum deposit is one hundred dollars؟' },
      { question: 'Which document proves where you live?', options: ['a proof of address', 'a menu', 'a ticket', 'an invoice'], answerIndex: 0, ar: 'أي مستند يثبت مكان سكنك؟' },
      { question: 'The bank takes two dollars every month. This is the:', options: ['monthly fee', 'due date', 'interest rate', 'minimum deposit'], answerIndex: 0, ar: 'البنك يأخذ دولارين كل شهر، وهذا هو:' },
    ],
  },

  /* ================= lesson 190 — Bills and Loans ================= */
  {
    num: 190,
    tags: ['loans', 'money'],
    objectives: [
      'Pay bills before the due date and avoid late fees',
      'Describe a loan, its monthly payments and interest rate',
      'Explain what to do when you are behind on payments',
    ],
    grammar: {
      explanation: 'Money talk uses the past simple for finished actions: "We took a car loan last year". Amounts and dates answer "how much" and "when": "My monthly payment is two hundred dollars", "It is due on the fifteenth". Use "borrow" for taking money and "lend" for giving it. If-clauses warn about results: "If you miss a payment, the bank charges a late fee". "Behind on payments" means your payments are late — call the bank and explain.',
      explanationAr: 'يستخدم حديث المال الماضي البسيط للأفعال المنتهية: We took a car loan last year. وتجيب المبالغ والتواريخ عن How much وWhen: My monthly payment is two hundred dollars، It is due on the fifteenth. واستخدم borrow لأخذ المال وlend لإعطائه. وتحذر جمل الشرط من النتائج: If you miss a payment, the bank charges a late fee. وعبارة Behind on payments تعني أن أقساطك متأخرة، فاتصل بالبنك واشرح موقفك.',
      examples: [
        { en: 'We took a car loan from the bank last year.', ar: 'أخذنا قرض سيارة من البنك العام الماضي.' },
        { en: 'If you miss a payment, the bank charges a late fee.', ar: 'إذا فوّت قسطا، يفرض البنك رسوم تأخير.' },
        { en: 'I am behind on payments because I lost my job.', ar: 'أنا متأخر عن الأقساط لأنني فقدت عملي.' },
      ],
    },
    vocabulary: [
      { word: 'due date', meaningAr: 'تاريخ الاستحقاق', example: 'Pay the bill before the due date.' },
      { word: 'loan', meaningAr: 'قرض', example: 'They approved my loan last week.' },
      { word: 'interest rate', meaningAr: 'سعر الفائدة', example: 'The interest rate went down this year.' },
      { word: 'monthly payment', meaningAr: 'قسط شهري', example: 'My monthly payment is two hundred dollars.' },
      { word: 'borrow', meaningAr: 'يستلف / يقترض', example: 'I never borrow money without a plan.' },
      { word: 'lend', meaningAr: 'يُقرض (يعطي سلعة)', example: 'Banks lend money with interest.' },
      { word: 'debt', meaningAr: 'دين', example: 'We paid off all our debt in May.' },
      { word: 'late fee', meaningAr: 'رسوم تأخير', example: 'A late fee appears after the due date.' },
      { word: 'repay', meaningAr: 'يسدد', example: 'Can I repay the loan early?' },
      { word: 'installment', meaningAr: 'قسط', example: 'Pay it in twelve installments.' },
      { word: 'electricity bill', meaningAr: 'فاتورة الكهرباء', example: 'The electricity bill arrived today.' },
      { word: 'behind on payments', meaningAr: 'متأخر عن الأقساط', example: 'He is behind on payments again.' },
    ],
    scenario: [
      { en: 'Did you pay the electricity bill before the due date?', ar: 'هل دفعت فاتورة الكهرباء قبل تاريخ الاستحقاق؟', d: 1 },
      { en: 'Yes, I paid it yesterday to avoid the late fee.', ar: 'نعم، دفعتها أمس لتفادي رسوم التأخير.', d: 1 },
      { en: 'When is the due date for the water bill?', ar: 'متى تاريخ استحقاق فاتورة الماء؟', d: 1 },
      { en: 'It is due on the fifteenth of every month.', ar: 'تستحق في الخامس عشر من كل شهر.', d: 2 },
      { en: 'We took a car loan from the bank last year.', ar: 'أخذنا قرض سيارة من البنك العام الماضي.', d: 1 },
      { en: 'How much is your monthly payment?', ar: 'كم قسطك الشهري؟', d: 1 },
      { en: 'It is two hundred dollars for five years.', ar: 'إنه مئتا دولار لمدة خمس سنوات.', d: 1 },
      { en: 'The interest rate on my loan is six percent.', ar: 'سعر الفائدة على قرضي ستة بالمئة.', d: 1 },
      { en: 'That is high; try to repay it early.', ar: 'هذا مرتفع؛ حاول سداده مبكرا.', d: 2 },
      { en: 'I am behind on payments because I lost my job.', ar: 'أنا متأخر عن الأقساط لأنني فقدت عملي.', d: 2 },
      { en: 'Do not panic; call the bank and explain your situation.', ar: 'لا تقلق؛ اتصل بالبنك واشرح موقفك.', d: 2 },
      { en: 'They allowed me to pay in smaller installments.', ar: 'سمحوا لي بالدفع بأقساط أصغر.', d: 3 },
      { en: 'My sister has never borrowed money from anyone.', ar: 'لم تستلف أختي مالا من أحد قط.', d: 2 },
      { en: 'Bills arrive at the beginning of each month.', ar: 'تصل الفواتير في بداية كل شهر.', d: 1 },
      { en: 'Do not borrow more than you can repay.', ar: 'لا تستلف أكثر مما تستطيع سداده.', d: 2 },
      { en: 'If you miss a payment, the bank charges a late fee.', ar: 'إذا فوّت قسطا، يفرض البنك رسوم تأخير.', d: 3 },
      { en: 'We have already paid all the bills this month.', ar: 'لقد دفعنا كل الفواتير هذا الشهر.', d: 2 },
      { en: 'Could you remind me to pay the phone bill, please?', ar: 'هل يمكنك تذكيري بدفع فاتورة الهاتف من فضلك؟', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'Please pay the bill before the {D}.', arTmpl: 'من فضلك ادفع الفاتورة قبل {D_ar}.',
        slots: {
          D: [
            { en: 'due date', ar: 'تاريخ الاستحقاق' }, { en: 'end of the month', ar: 'نهاية الشهر' },
            { en: 'tenth', ar: 'العاشر' }, { en: 'weekend', ar: 'عطلة نهاية الأسبوع' },
            { en: 'holiday', ar: 'العطلة' }, { en: 'meeting', ar: 'الاجتماع' },
          ],
        },
        tags: ['loans', 'imperative'], d: 1, limit: 6,
      },
      {
        tmpl: '{S} {V} a loan from the bank last year.', arTmpl: '{S_ar} {V_ar} قرضا من البنك العام الماضي.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPast('take'), ar: B.arPast('take', x.S.agr) }],
        },
        tags: ['loans', 'past-simple'], d: 2, limit: 6,
      },
      {
        tmpl: 'The interest rate is {P}.', arTmpl: 'سعر الفائدة {P_ar}.',
        slots: {
          P: [
            { en: 'two percent', ar: 'اثنان بالمئة' }, { en: 'four percent', ar: 'أربعة بالمئة' },
            { en: 'five percent', ar: 'خمسة بالمئة' }, { en: 'seven percent', ar: 'سبعة بالمئة' },
            { en: 'eight percent', ar: 'ثمانية بالمئة' }, { en: 'nine percent', ar: 'تسعة بالمئة' },
          ],
        },
        tags: ['loans', 'money'], d: 1, limit: 6,
      },
      {
        tmpl: 'I pay my {B} on the {N} of every month.', arTmpl: 'أدفع {B_ar} في {N_ar} من كل شهر.',
        slots: {
          B: [
            { en: 'electricity bill', ar: 'فاتورة الكهرباء' }, { en: 'water bill', ar: 'فاتورة الماء' },
            { en: 'phone bill', ar: 'فاتورة الهاتف' }, { en: 'internet bill', ar: 'فاتورة الإنترنت' },
            { en: 'gas bill', ar: 'فاتورة الغاز' },
          ],
          N: [
            { en: 'first', ar: 'الأول' }, { en: 'fifth', ar: 'الخامس' },
            { en: 'tenth', ar: 'العاشر' }, { en: 'fifteenth', ar: 'الخامس عشر' },
            { en: 'twentieth', ar: 'العشرين' },
          ],
        },
        tags: ['loans', 'present-simple'], d: 2, limit: 12,
      },
      {
        tmpl: 'We are behind on payments for the {L}.', arTmpl: 'نحن متأخرون عن أقساط {L_ar}.',
        slots: {
          L: [
            { en: 'car loan', ar: 'قرض السيارة' }, { en: 'house loan', ar: 'قرض المنزل' },
            { en: 'furniture loan', ar: 'قرض الأثاث' }, { en: 'shop loan', ar: 'قرض المحل' },
            { en: 'study loan', ar: 'قرض الدراسة' },
          ],
        },
        tags: ['loans', 'money'], d: 2, limit: 5,
      },
    ],
    fills: [
      { en: 'Did you pay the electricity bill before the due date?', ar: 'هل دفعت فاتورة الكهرباء قبل تاريخ الاستحقاق؟', word: 'due', hint: 'استحقاق' },
      { en: 'We took a car loan from the bank last year.', ar: 'أخذنا قرض سيارة من البنك العام الماضي.', word: 'loan', hint: 'قرض' },
      { en: 'How much is your monthly payment?', ar: 'كم قسطك الشهري؟', word: 'payment', hint: 'قسط' },
      { en: 'The interest rate on my loan is six percent.', ar: 'سعر الفائدة على قرضي ستة بالمئة.', word: 'interest', hint: 'فائدة' },
      { en: 'I am behind on payments because I lost my job.', ar: 'أنا متأخر عن الأقساط لأنني فقدت عملي.', word: 'behind', hint: 'متأخر' },
      { en: 'They allowed me to pay in smaller installments.', ar: 'سمحوا لي بالدفع بأقساط أصغر.', word: 'installments', hint: 'أقساط' },
      { en: 'If you miss a payment, the bank charges a late fee.', ar: 'إذا فوّت قسطا، يفرض البنك رسوم تأخير.', word: 'late', hint: 'تأخير' },
      { en: 'Could you remind me to pay the phone bill, please?', ar: 'هل يمكنك تذكيري بدفع فاتورة الهاتف من فضلك؟', word: 'remind', hint: 'يذكّر' },
    ],
    orders: [
      { en: 'Did you pay the electricity bill before the due date?', ar: 'هل دفعت فاتورة الكهرباء قبل تاريخ الاستحقاق؟' },
      { en: 'We took a car loan from the bank last year.', ar: 'أخذنا قرض سيارة من البنك العام الماضي.' },
      { en: 'The interest rate on my loan is six percent.', ar: 'سعر الفائدة على قرضي ستة بالمئة.' },
      { en: 'I am behind on payments because I lost my job.', ar: 'أنا متأخر عن الأقساط لأنني فقدت عملي.' },
      { en: 'Do not borrow more than you can repay.', ar: 'لا تستلف أكثر مما تستطيع سداده.' },
      { en: 'If you miss a payment, the bank charges a late fee.', ar: 'إذا فوّت قسطا، يفرض البنك رسوم تأخير.' },
    ],
    mc: [
      { question: 'You must pay before this day or you get a late fee:', options: ['the due date', 'the weekend', 'the meeting room', 'the lunch break'], answerIndex: 0, ar: 'يجب الدفع قبل هذا اليوم وإلا دفعت رسوم تأخير:' },
      { question: '"I am behind on payments" means:', options: ['أنا متأخر عن الأقساط', 'أنا أرفض الدفع', 'أنا أدفع نقدا', 'أنا دفعت مرتين'], answerIndex: 0, ar: 'ماذا يعني I am behind on payments؟' },
      { question: 'The bank charges you extra money for borrowing. This is the:', options: ['interest rate', 'invoice number', 'unit price', 'notice period'], answerIndex: 0, ar: 'البنك يأخذ مالا إضافيا مقابل الاستلاف، وهذا هو:' },
      { question: 'You pay a loan in small monthly parts called:', options: ['installments', 'discounts', 'receipts', 'agendas'], answerIndex: 0, ar: 'تسدد القرض بأجزاء شهرية صغيرة تسمى:' },
    ],
  },

  /* ================= lesson 191 — Contracts ================= */
  {
    num: 191,
    tags: ['contracts', 'work'],
    objectives: [
      'Read and check the terms and conditions before signing',
      'Ask about contract length, notice periods and cancellation',
      'Sign, renew or cancel a contract with the right words',
    ],
    grammar: {
      explanation: 'Contract talk uses imperatives for instructions: "Read the contract carefully", "Sign here". Modal verbs show possibility and duty: "You can cancel within thirty days", "You must give two months of notice". Time clauses with "before" need the present simple: "Read it before you sign". Present perfect reports finished checks: "Have you read the terms and conditions?". If-clauses warn: "If you break the rules, you will pay a penalty".',
      explanationAr: 'يستخدم حديث العقود الأمر للتعليمات: Read the contract carefully، Sign here. وتظهر أفعال النفاذ الإمكان والواجب: You can cancel within thirty days، You must give two months of notice. وتأتي جمل الزمن مع before بالمضارع البسيط: Read it before you sign. ويعبر المضارع التام عن تدقيق منته: Have you read the terms and conditions؟ وتحذر جمل الشرط: If you break the rules, you will pay a penalty.',
      examples: [
        { en: 'Read the contract carefully before you sign.', ar: 'اقرأ العقد بعناية قبل أن توقّع.' },
        { en: 'You can cancel the contract within thirty days.', ar: 'يمكنك إلغاء العقد خلال ثلاثين يوما.' },
        { en: 'Have you read the terms and conditions?', ar: 'هل قرأت الشروط والأحكام؟' },
      ],
    },
    vocabulary: [
      { word: 'contract', meaningAr: 'عقد', example: 'Read the contract twice.', ipa: 'ˈkɒntrækt' },
      { word: 'terms and conditions', meaningAr: 'الشروط والأحكام', example: 'The terms and conditions are on page two.' },
      { word: 'clause', meaningAr: 'بند', example: 'This clause limits overtime.' },
      { word: 'sign', meaningAr: 'يوقّع', example: 'Sign here, please.' },
      { word: 'cancel', meaningAr: 'يُلغي', example: 'You can cancel within thirty days.' },
      { word: 'expire', meaningAr: 'ينتهي (أجل)', example: 'My contract expires in March.' },
      { word: 'renew', meaningAr: 'يجدد', example: 'We renew the agreement every year.' },
      { word: 'notice period', meaningAr: 'فترة الإشعار', example: 'The notice period is two months.' },
      { word: 'agreement', meaningAr: 'اتفاقية', example: 'Both sides signed the agreement.' },
      { word: 'penalty', meaningAr: 'غرامة', example: 'A penalty applies for late delivery.' },
      { word: 'copy', meaningAr: 'نسخة', example: 'Keep a copy for your records.' },
      { word: 'carefully', meaningAr: 'بعناية', example: 'Read the numbers carefully.' },
    ],
    scenario: [
      { en: 'Read the contract carefully before you sign.', ar: 'اقرأ العقد بعناية قبل أن توقّع.', d: 1 },
      { en: 'Where do I sign, please?', ar: 'أين أوقّع من فضلك؟', d: 1 },
      { en: 'Sign here at the bottom of the page.', ar: 'وقّع هنا في أسفل الصفحة.', d: 1 },
      { en: 'Have you read the terms and conditions?', ar: 'هل قرأت الشروط والأحكام؟', d: 2 },
      { en: 'Yes, I have read every clause twice.', ar: 'نعم، قرأت كل بند مرتين.', d: 2 },
      { en: 'This is a two-year contract with a three-month notice period.', ar: 'هذا عقد لسنتين بفترة إشعار ثلاثة أشهر.', d: 2 },
      { en: 'Can I cancel the contract after one year?', ar: 'هل أستطيع إلغاء العقد بعد سنة؟', d: 1 },
      { en: 'Yes, but you must give two months of notice.', ar: 'نعم، لكن عليك تقديم إشعار بمدة شهرين.', d: 2 },
      { en: 'The contract expires at the end of June.', ar: 'ينتهي العقد في نهاية يونيو.', d: 1 },
      { en: 'We want to renew it for another year.', ar: 'نريد تجديده لعام آخر.', d: 1 },
      { en: 'My colleague does not understand the third clause.', ar: 'زميلي لا يفهم البند الثالث.', d: 2 },
      { en: 'Please explain the penalty for late delivery.', ar: 'من فضلك اشرح غرامة التسليم المتأخر.', d: 1 },
      { en: 'If you break the rules, you will pay a penalty.', ar: 'إذا خالفت الشروط، ستدفع غرامة.', d: 3 },
      { en: 'The manager has signed both copies already.', ar: 'وقّع المدير النسختين بالفعل.', d: 2 },
      { en: 'Keep one copy of the agreement for your records.', ar: 'احتفظ بنسخة من الاتفاقية لسجلاتك.', d: 2 },
      { en: 'They agreed on the new terms this morning.', ar: 'وافقوا على الشروط الجديدة هذا الصباح.', d: 2 },
      { en: 'Do not sign any paper that you do not understand.', ar: 'لا توقّع أي ورقة لا تفهمها.', d: 2 },
      { en: 'The company sent the contract to my email.', ar: 'أرسلت الشركة العقد إلى بريدي الإلكتروني.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'Read the {D} {A} before you sign.', arTmpl: 'اقرأ {D_ar} {A_ar} قبل أن توقّع.',
        slots: {
          D: [
            { en: 'contract', ar: 'العقد' }, { en: 'agreement', ar: 'الاتفاقية' },
            { en: 'terms', ar: 'الشروط' }, { en: 'small print', ar: 'الطباعة الصغيرة' },
          ],
          A: [
            { en: 'twice', ar: 'مرتين' }, { en: 'line by line', ar: 'سطرا سطرا' },
            { en: 'with a lawyer', ar: 'مع محام' }, { en: 'more than once', ar: 'أكثر من مرة' },
            { en: 'in a quiet place', ar: 'في مكان هادئ' },
          ],
        },
        tags: ['contracts', 'imperative'], d: 2, limit: 12,
      },
      {
        tmpl: 'We signed a {L} contract with the company.', arTmpl: 'وقّعنا عقدا {L_ar} مع الشركة.',
        slots: {
          L: [
            { en: 'two-year', ar: 'لسنتين' }, { en: 'one-year', ar: 'لسنة واحدة' },
            { en: 'five-year', ar: 'لخمس سنوات' }, { en: 'six-month', ar: 'لستة أشهر' },
            { en: 'three-year', ar: 'لثلاث سنوات' }, { en: 'ten-month', ar: 'لعشرة أشهر' },
          ],
        },
        tags: ['contracts', 'work'], d: 1, limit: 6,
      },
      {
        tmpl: 'You can cancel the contract within {T}.', arTmpl: 'يمكنك إلغاء العقد خلال {T_ar}.',
        slots: {
          T: [
            { en: 'two weeks', ar: 'أسبوعين' }, { en: 'thirty days', ar: 'ثلاثين يوما' },
            { en: 'one month', ar: 'شهر واحد' }, { en: 'fourteen days', ar: 'أربعة عشر يوما' },
            { en: 'three months', ar: 'ثلاثة أشهر' },
          ],
        },
        tags: ['contracts', 'modals'], d: 2, limit: 5,
      },
      {
        tmpl: '{S} {V} the contract last week.', arTmpl: '{S_ar} {V_ar} العقد الأسبوع الماضي.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: 'signed', ar: SIGN_AR[x.S.agr] }],
        },
        tags: ['contracts', 'past-simple'], d: 2, limit: 6,
      },
      {
        tmpl: 'This clause talks about {T}.', arTmpl: 'يتحدث هذا البند عن {T_ar}.',
        slots: {
          T: [
            { en: 'payment dates', ar: 'مواعيد الدفع' }, { en: 'holidays', ar: 'الإجازات' },
            { en: 'working hours', ar: 'ساعات العمل' }, { en: 'penalties', ar: 'الغرامات' },
            { en: 'training costs', ar: 'تكاليف التدريب' }, { en: 'sick leave', ar: 'الإجازة المرضية' },
          ],
        },
        tags: ['contracts', 'vocabulary'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'Read the contract carefully before you sign.', ar: 'اقرأ العقد بعناية قبل أن توقّع.', word: 'contract', hint: 'عقد' },
      { en: 'Have you read the terms and conditions?', ar: 'هل قرأت الشروط والأحكام؟', word: 'terms', hint: 'شروط' },
      { en: 'Sign here at the bottom of the page.', ar: 'وقّع هنا في أسفل الصفحة.', word: 'Sign', hint: 'يوقّع' },
      { en: 'Can I cancel the contract after one year?', ar: 'هل أستطيع إلغاء العقد بعد سنة؟', word: 'cancel', hint: 'يُلغي' },
      { en: 'The contract expires at the end of June.', ar: 'ينتهي العقد في نهاية يونيو.', word: 'expires', hint: 'ينتهي' },
      { en: 'Yes, but you must give two months of notice.', ar: 'نعم، لكن عليك تقديم إشعار بمدة شهرين.', word: 'notice', hint: 'إشعار' },
      { en: 'If you break the rules, you will pay a penalty.', ar: 'إذا خالفت الشروط، ستدفع غرامة.', word: 'penalty', hint: 'غرامة' },
      { en: 'Keep one copy of the agreement for your records.', ar: 'احتفظ بنسخة من الاتفاقية لسجلاتك.', word: 'copy', hint: 'نسخة' },
    ],
    orders: [
      { en: 'Read the contract carefully before you sign.', ar: 'اقرأ العقد بعناية قبل أن توقّع.' },
      { en: 'Have you read the terms and conditions?', ar: 'هل قرأت الشروط والأحكام؟' },
      { en: 'This is a two-year contract with a three-month notice period.', ar: 'هذا عقد لسنتين بفترة إشعار ثلاثة أشهر.' },
      { en: 'Can I cancel the contract after one year?', ar: 'هل أستطيع إلغاء العقد بعد سنة؟' },
      { en: 'The contract expires at the end of June.', ar: 'ينتهي العقد في نهاية يونيو.' },
      { en: 'If you break the rules, you will pay a penalty.', ar: 'إذا خالفت الشروط، ستدفع غرامة.' },
    ],
    mc: [
      { question: 'You should do this before you sign any contract:', options: ['Read it carefully', 'Tear it', 'Lose it', 'Hide it'], answerIndex: 0, ar: 'ماذا تفعل قبل توقيع أي عقد؟' },
      { question: '"The contract expires in June" means:', options: ['ينتهي العقد في يونيو', 'يبدأ العقد في يونيو', 'يتجدد العقد تلقائيا', 'يلغى العقد اليوم'], answerIndex: 0, ar: 'ماذا تعني الجملة The contract expires in June؟' },
      { question: 'The part of a contract that talks about one topic is a:', options: ['clause', 'salary', 'screen', 'router'], answerIndex: 0, ar: 'الجزء الذي يتحدث عن موضوع واحد في العقد يسمى:' },
      { question: 'You want to end the contract early. You must:', options: ['give notice', 'lose your copy', 'stop reading it', 'forget the terms'], answerIndex: 0, ar: 'تريد إنهاء العقد مبكرا، فعليك:' },
    ],
  },

  /* ================= lesson 192 — Business Invoices ================= */
  {
    num: 192,
    tags: ['invoices', 'business'],
    objectives: [
      'Prepare an invoice with the number, items and total amount',
      'Explain payment terms and the thirty-day rule',
      'Send the invoice to the client and follow up politely',
    ],
    grammar: {
      explanation: 'Business writing uses the present simple for routines: "We issue the invoice after the client confirms the order". Requests stay polite: "Please send the invoice to the client", "Could you forward it, please?". Present perfect reports status: "The client has not received the invoice yet". If-clauses state consequences: "If the client does not pay, we stop the deliveries". Money phrases: total amount, unit price, tax, and payment terms like "within thirty days".',
      explanationAr: 'تستخدم الكتابة التجارية المضارع البسيط للروتين: We issue the invoice after the client confirms the order. وتبقى الطلبات مهذبة: Please send the invoice to the client، Could you forward it, please؟ ويعبر المضارع التام عن الحالة: The client has not received the invoice yet. وتذكر جمل الشرط بالعواقب: If the client does not pay, we stop the deliveries. ومن عبارات المال: المبلغ الإجمالي وسعر الوحدة والضريبة وشروط الدفع مثل within thirty days.',
      examples: [
        { en: 'Please send the invoice to the client today.', ar: 'من فضلك أرسل الفاتورة إلى العميل اليوم.' },
        { en: 'The client pays within thirty days of the invoice date.', ar: 'يدفع العميل خلال ثلاثين يوما من تاريخ الفاتورة.' },
        { en: 'The client has not received the invoice yet.', ar: 'لم يستلم العميل الفاتورة بعد.' },
      ],
    },
    vocabulary: [
      { word: 'invoice', meaningAr: 'فاتورة (تجارية)', example: 'Please send the invoice today.', ipa: 'ˈɪnvɔɪs' },
      { word: 'invoice number', meaningAr: 'رقم الفاتورة', example: 'Quote the invoice number in your email.' },
      { word: 'client', meaningAr: 'عميل', example: 'The client confirmed the order.' },
      { word: 'total amount', meaningAr: 'المبلغ الإجمالي', example: 'The total amount includes the tax.' },
      { word: 'payment terms', meaningAr: 'شروط الدفع', example: 'Our payment terms are thirty days.' },
      { word: 'purchase order', meaningAr: 'أمر شراء', example: 'Send the purchase order first, please.' },
      { word: 'tax', meaningAr: 'ضريبة', example: 'The tax is fifteen percent here.' },
      { word: 'issue', meaningAr: 'يُصدر (فاتورة)', example: 'We issue invoices on Sunday.' },
      { word: 'quantity', meaningAr: 'كمية', example: 'Check the quantity before printing.' },
      { word: 'unit price', meaningAr: 'سعر الوحدة', example: 'The unit price did not change.' },
      { word: 'overdue', meaningAr: 'متأخر السداد', example: 'This invoice is overdue by two weeks.' },
      { word: 'remind', meaningAr: 'يذكّر', example: 'I remind clients one week before.' },
    ],
    scenario: [
      { en: 'Please send the invoice to the client today.', ar: 'من فضلك أرسل الفاتورة إلى العميل اليوم.', d: 1 },
      { en: 'The invoice number is on the top right.', ar: 'رقم الفاتورة في أعلى اليمين.', d: 1 },
      { en: 'What are the payment terms for this order?', ar: 'ما شروط الدفع لهذا الطلب؟', d: 1 },
      { en: 'The client pays within thirty days of the invoice date.', ar: 'يدفع العميل خلال ثلاثين يوما من تاريخ الفاتورة.', d: 2 },
      { en: 'Did you include the tax in the total amount?', ar: 'هل أدرجت الضريبة في المبلغ الإجمالي؟', d: 1 },
      { en: 'Yes, the total amount is one thousand two hundred dollars, tax included.', ar: 'نعم، المبلغ الإجمالي ألف ومئتا دولار شاملة الضريبة.', d: 3 },
      { en: 'We issue the invoice after the client confirms the purchase order.', ar: 'نصدر الفاتورة بعد أن يؤكد العميل أمر الشراء.', d: 3 },
      { en: 'Please check the quantity and the unit price again.', ar: 'من فضلك تحقق من الكمية وسعر الوحدة مرة أخرى.', d: 1 },
      { en: 'One item is missing from the invoice.', ar: 'بند واحد مفقود من الفاتورة.', d: 2 },
      { en: 'I will correct it and send a new version.', ar: 'سأصححها وأرسل نسخة جديدة.', d: 1 },
      { en: 'The client has not received the invoice yet.', ar: 'لم يستلم العميل الفاتورة بعد.', d: 2 },
      { en: 'Could you forward it to his new email, please?', ar: 'هل يمكنك توجيهها إلى بريده الجديد من فضلك؟', d: 1 },
      { en: 'This invoice is overdue by two weeks.', ar: 'هذه الفاتورة متأخرة بأسبوعين.', d: 2 },
      { en: 'We always remind clients one week before the deadline.', ar: 'نذكّر العملاء دائما قبل أسبوع من الموعد النهائي.', d: 2 },
      { en: 'My colleague prepares the invoices every Sunday.', ar: 'يجهّز زميلي الفواتير كل أحد.', d: 1 },
      { en: 'If the client does not pay, we stop the deliveries.', ar: 'إذا لم يدفع العميل، نوقف التوصيلات.', d: 3 },
      { en: 'The accountant has checked all the invoices this morning.', ar: 'دقق المحاسب كل الفواتير هذا الصباح.', d: 2 },
      { en: 'Do we charge for late payments?', ar: 'هل نتقاضى رسوما على التأخر في الدفع؟', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'Please send the invoice to the {C} today.', arTmpl: 'من فضلك أرسل الفاتورة إلى {C_ar} اليوم.',
        slots: {
          C: [
            { en: 'manager', ar: 'المدير' }, { en: 'accountant', ar: 'المحاسب' },
            { en: 'supplier', ar: 'المورد' }, { en: 'new client', ar: 'العميل الجديد' },
            { en: 'head office', ar: 'المركز الرئيسي' }, { en: 'sales team', ar: 'فريق المبيعات' },
          ],
        },
        tags: ['invoices', 'imperative'], d: 1, limit: 6,
      },
      {
        tmpl: 'The payment terms are {T}.', arTmpl: 'شروط الدفع هي {T_ar}.',
        slots: {
          T: [
            { en: 'thirty days', ar: 'ثلاثون يوما' }, { en: 'fifteen days', ar: 'خمسة عشر يوما' },
            { en: 'sixty days', ar: 'ستون يوما' }, { en: 'half now and half later', ar: 'نصف الآن ونصف لاحقا' },
            { en: 'cash on delivery', ar: 'نقدا عند التسليم' }, { en: 'one month after delivery', ar: 'شهر بعد التسليم' },
          ],
        },
        tags: ['invoices', 'money'], d: 2, limit: 6,
      },
      {
        tmpl: 'The total amount is {A}.', arTmpl: 'المبلغ الإجمالي {A_ar}.',
        slots: {
          A: [
            { en: 'five hundred dollars', ar: 'خمسمئة دولار' }, { en: 'seven hundred and fifty dollars', ar: 'سبعمئة وخمسون دولارا' },
            { en: 'nine hundred dollars', ar: 'تسعمئة دولار' }, { en: 'one thousand dollars', ar: 'ألف دولار' },
            { en: 'two thousand five hundred dollars', ar: 'ألفان وخمسمئة دولار' }, { en: 'three thousand dollars', ar: 'ثلاثة آلاف دولار' },
          ],
        },
        tags: ['invoices', 'money'], d: 2, limit: 6,
      },
      {
        tmpl: '{S} {V} the invoice {W}.', arTmpl: '{S_ar} {V_ar} الفاتورة {W_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPast('send'), ar: B.arPast('send', x.S.agr) }],
          W: [
            { en: 'yesterday', ar: 'أمس' }, { en: 'last night', ar: 'الليلة الماضية' },
            { en: 'on Monday', ar: 'يوم الاثنين' }, { en: 'before noon', ar: 'قبل الظهر' },
            { en: 'two days ago', ar: 'قبل يومين' },
          ],
        },
        tags: ['invoices', 'past-simple'], d: 2, limit: 15,
      },
      {
        tmpl: 'We issue an invoice for every {O}.', arTmpl: 'نصدر فاتورة لكل {O_ar}.',
        slots: {
          O: [
            { en: 'order', ar: 'طلب' }, { en: 'delivery', ar: 'توصيلة' },
            { en: 'service', ar: 'خدمة' }, { en: 'repair', ar: 'إصلاح' },
            { en: 'training course', ar: 'دورة تدريب' }, { en: 'maintenance visit', ar: 'زيارة صيانة' },
          ],
        },
        tags: ['invoices', 'present-simple'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'Please send the invoice to the client today.', ar: 'من فضلك أرسل الفاتورة إلى العميل اليوم.', word: 'invoice', hint: 'فاتورة' },
      { en: 'The invoice number is on the top right.', ar: 'رقم الفاتورة في أعلى اليمين.', word: 'number', hint: 'رقم' },
      { en: 'What are the payment terms for this order?', ar: 'ما شروط الدفع لهذا الطلب؟', word: 'terms', hint: 'شروط' },
      { en: 'The client pays within thirty days of the invoice date.', ar: 'يدفع العميل خلال ثلاثين يوما من تاريخ الفاتورة.', word: 'thirty', hint: 'ثلاثون' },
      { en: 'Did you include the tax in the total amount?', ar: 'هل أدرجت الضريبة في المبلغ الإجمالي؟', word: 'tax', hint: 'ضريبة' },
      { en: 'Please check the quantity and the unit price again.', ar: 'من فضلك تحقق من الكمية وسعر الوحدة مرة أخرى.', word: 'quantity', hint: 'كمية' },
      { en: 'This invoice is overdue by two weeks.', ar: 'هذه الفاتورة متأخرة بأسبوعين.', word: 'overdue', hint: 'متأخر السداد' },
      { en: 'Do we charge for late payments?', ar: 'هل نتقاضى رسوما على التأخر في الدفع؟', word: 'charge', hint: 'يتقاضى' },
    ],
    orders: [
      { en: 'Please send the invoice to the client today.', ar: 'من فضلك أرسل الفاتورة إلى العميل اليوم.' },
      { en: 'What are the payment terms for this order?', ar: 'ما شروط الدفع لهذا الطلب؟' },
      { en: 'The client pays within thirty days of the invoice date.', ar: 'يدفع العميل خلال ثلاثين يوما من تاريخ الفاتورة.' },
      { en: 'One item is missing from the invoice.', ar: 'بند واحد مفقود من الفاتورة.' },
      { en: 'This invoice is overdue by two weeks.', ar: 'هذه الفاتورة متأخرة بأسبوعين.' },
      { en: 'If the client does not pay, we stop the deliveries.', ar: 'إذا لم يدفع العميل، نوقف التوصيلات.' },
    ],
    mc: [
      { question: 'Where do you write the invoice number?', options: ['at the top of the invoice', 'in the kitchen', 'on the bus ticket', 'in the meeting room'], answerIndex: 0, ar: 'أين تكتب رقم الفاتورة؟' },
      { question: '"Payment terms: 30 days" means the client pays:', options: ['within thirty days', 'after thirty months', 'every thirty years', 'thirty times'], answerIndex: 0, ar: 'ماذا تعني Payment terms: 30 days؟' },
      { question: '"The total amount" means:', options: ['المبلغ الإجمالي', 'سعر الوحدة', 'رقم الفاتورة', 'الخصم'], answerIndex: 0, ar: 'ماذا يعني the total amount؟' },
      { question: 'An invoice that the client has not paid on time is:', options: ['overdue', 'signed', 'free', 'optional'], answerIndex: 0, ar: 'الفاتورة التي لم يسددها العميل في وقتها تسمى:' },
      { question: 'Who receives the invoice?', options: ['the client', 'the router', 'the driver only', 'the internet'], answerIndex: 0, ar: 'من يستلم الفاتورة؟' },
    ],
  },
];
