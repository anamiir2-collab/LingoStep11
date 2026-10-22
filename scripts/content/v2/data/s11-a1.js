/* ============================================================
   v2 section data — s11-a1.js
   Specialized English & Leadership · lessons 241–245
   (business, finance & banking, healthcare, technology, tourism)
   B2 professional jargon — export contract: `lessons` array.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 241 — Business English ================= */
  {
    num: 241,
    tags: ['business-english', 'present-perfect', 'passive-voice'],
    objectives: [
      'Report company results with the present perfect',
      'Discuss mergers, expansion and stakeholders formally',
      'Use conditionals to talk about business risk',
    ],
    grammar: {
      explanation: 'In business English, results are often reported with the present perfect: "Our revenue has increased", "We have signed the agreement". The passive keeps the tone formal and neutral: "The merger was announced", "The proposal is being reviewed". Conditionals are used for planning and risk: "If the deal fails, we will keep the current strategy". Keep sentences short and factual, and always state deadlines, numbers and responsibilities clearly.',
      explanationAr: 'في إنجليزية الأعمال تُذكر النتائج غالبا بالمضارع التام: Our revenue has increased وWe have signed the agreement. ويحافظ المبني للمجهول على نبرة رسمية محايدة: The merger was announced وThe proposal is being reviewed. وتُستخدم الجمل الشرطية للتخطيط وتقييم المخاطر: If the deal fails, we will keep the current strategy. اجعل جملا قصيرة ومباشرة، واذكر دائما المواعيد والأرقام والمسؤوليات بوضوح.',
      examples: [
        { en: 'The merger was announced yesterday.', ar: 'أُعلن عن الاندماج أمس.' },
        { en: 'We have signed the agreement with our new partners.', ar: 'لقد وقعنا الاتفاقية مع شركائنا الجدد.' },
        { en: 'If costs rise, we will delay the expansion.', ar: 'إذا ارتفعت التكاليف، فسنؤجل التوسع.' },
      ],
    },
    vocabulary: [
      { word: 'stakeholder', meaningAr: 'صاحب مصلحة', example: 'Every stakeholder has signed the agreement.', ipa: 'ˈsteɪkˌhəʊldə' },
      { word: 'revenue', meaningAr: 'إيرادات', example: 'Our revenue has increased this quarter.' },
      { word: 'quarterly report', meaningAr: 'تقرير فصلي', example: 'The quarterly report will be presented tomorrow.' },
      { word: 'merger', meaningAr: 'اندماج', example: 'The merger was announced at the press conference.' },
      { word: 'expansion', meaningAr: 'توسع', example: 'The expansion plan was approved last month.' },
      { word: 'market share', meaningAr: 'حصة سوقية', example: 'Our market share has grown in Asia.' },
      { word: 'profit margin', meaningAr: 'هامش الربح', example: 'Our profit margin is smaller than last year.' },
      { word: 'board meeting', meaningAr: 'اجتماع مجلس الإدارة', example: 'The board meeting starts at nine sharp.' },
      { word: 'proposal', meaningAr: 'مقترح / عرض', example: 'The shareholders will vote on the proposal.' },
      { word: 'negotiate', meaningAr: 'يتفاوض', example: 'We will negotiate better terms with the supplier.' },
      { word: 'subsidiary', meaningAr: 'شركة تابعة', example: 'Our subsidiary in Dubai opened in May.' },
      { word: 'minutes', meaningAr: 'محضر الاجتماع', example: 'I will email you the minutes after the meeting.' },
    ],
    scenario: [
      { en: 'Good morning, everyone. Let us begin the quarterly report.', ar: 'صباح الخير جميعا. لنبدأ التقرير الفصلي.', d: 1 },
      { en: 'Thank you for joining the board meeting on time.', ar: 'شكرا لحضورك اجتماع مجلس الإدارة في الوقت المحدد.', d: 1 },
      { en: 'Have you finished the revenue forecast for next year?', ar: 'هل أنهيت توقعات الإيرادات للعام القادم؟', d: 2 },
      { en: 'Yes, the figures show steady growth in every market.', ar: 'نعم، تُظهر الأرقام نموا ثابتا في كل سوق.', d: 2 },
      { en: 'Our revenue has increased by twelve percent this quarter.', ar: 'ارتفعت إيراداتنا بنسبة اثني عشر بالمئة هذا الربع.', d: 2 },
      { en: 'We are expanding into new markets in East Asia.', ar: 'نتوسع في أسواق جديدة في شرق آسيا.', d: 1 },
      { en: 'The merger has not been approved by the regulators yet.', ar: 'لم تتم الموافقة على الاندماج من الجهات الرقابية بعد.', d: 3 },
      { en: 'Could you send the stakeholders the latest figures, please?', ar: 'هل ترسل أصحاب المصلحة أحدث الأرقام من فضلك؟', d: 2 },
      { en: 'The shareholders will vote on the proposal next week.', ar: 'سيدلي المساهمون بأصواتهم على المقترح الأسبوع القادم.', d: 2 },
      { en: 'If the deal fails, we will keep the current strategy.', ar: 'إذا فشلت الصفقة، فسنبقي الاستراتيجية الحالية.', d: 3 },
      { en: 'How many stakeholders are involved in the project?', ar: 'كم صاحب مصلحة معني بالمشروع؟', d: 2 },
      { en: 'Why have several investors withdrawn their support?', ar: 'لماذا سحب عدة مستثمرين دعمهم؟', d: 3 },
      { en: 'The annual report was published two days ago.', ar: 'نُشر التقرير السنوي قبل يومين.', d: 2 },
      { en: 'Our profit margin is smaller than last year.', ar: 'هامش ربحنا أصغر من العام الماضي.', d: 2 },
      { en: 'We must cut costs without reducing quality.', ar: 'يجب أن نخفض التكاليف دون تقليص الجودة.', d: 2 },
      { en: 'The marketing team has launched a new campaign.', ar: 'أطلق فريق التسويق حملة جديدة.', d: 2 },
      { en: 'I will email you the minutes after the meeting.', ar: 'سأرسل لك محضر الاجتماع بالبريد الإلكتروني بعد الاجتماع.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'The company plans to expand into {C} next year.', arTmpl: 'تخطط الشركة للتوسع في {C_ar} العام القادم.',
        slots: { C: B.COUNTRIES },
        tags: ['business-english', 'expansion'], d: 2, limit: 16,
      },
      {
        tmpl: 'We have reviewed the {D} carefully.', arTmpl: 'لقد راجعنا {D_ar} بعناية.',
        slots: {
          D: [
            { en: 'quarterly report', ar: 'التقرير الفصلي' }, { en: 'annual budget', ar: 'الميزانية السنوية' },
            { en: 'merger agreement', ar: 'اتفاقية الاندماج' }, { en: 'market analysis', ar: 'تحليل السوق' },
            { en: 'sales figures', ar: 'أرقام المبيعات' }, { en: 'financial forecast', ar: 'التوقعات المالية' },
            { en: 'business plan', ar: 'خطة العمل' }, { en: 'partnership contract', ar: 'عقد الشراكة' },
          ],
        },
        tags: ['business-english', 'present-perfect'], d: 2, limit: 8,
      },
      {
        tmpl: 'The board will discuss the {N} on {D}.', arTmpl: 'سيناقش مجلس الإدارة {N_ar} يوم {D_ar}.',
        slots: {
          N: [
            { en: 'merger proposal', ar: 'اقتراح الاندماج' }, { en: 'new budget', ar: 'الميزانية الجديدة' },
            { en: 'quarterly results', ar: 'النتائج الفصلية' }, { en: 'expansion plan', ar: 'خطة التوسع' },
            { en: 'stakeholder requests', ar: 'طلبات أصحاب المصلحة' }, { en: 'annual report', ar: 'التقرير السنوي' },
            { en: 'marketing strategy', ar: 'استراتيجية التسويق' }, { en: 'revenue targets', ar: 'مستهدفات الإيرادات' },
            { en: 'partnership agreement', ar: 'اتفاقية الشراكة' },
          ],
          D: B.DAYS,
        },
        tags: ['business-english', 'future'], d: 2, limit: 21,
      },
      {
        tmpl: '{S} {V} the quarterly figures every month.', arTmpl: '{S_ar} {V_ar} الأرقام الفصلية كل شهر.',
        slots: {
          S: [
            { en: 'Our manager', ar: 'مديرنا', agr: 'he' }, { en: 'The finance director', ar: 'المدير المالي', agr: 'he' },
            { en: 'Our accounting team', ar: 'فريق المحاسبة لدينا', agr: 'he' }, { en: 'The project manager', ar: 'مدير المشروع', agr: 'he' },
            { en: 'The auditors', ar: 'المدققون', agr: 'they' }, { en: 'My colleague', ar: 'زميلي', agr: 'he' },
            { en: 'The board members', ar: 'أعضاء مجلس الإدارة', agr: 'they' },
          ],
          V: (x) => [{ en: B.enPresent('read', x.S.agr), ar: B.arPresent('read', x.S.agr) }],
        },
        tags: ['business-english', 'present-simple'], d: 2, limit: 7,
      },
    ],
    fills: [
      { en: 'The quarterly report will be presented tomorrow.', ar: 'سيُقدم التقرير الفصلي غدا.', word: 'quarterly', hint: 'كل ثلاثة أشهر' },
      { en: 'Our revenue has doubled since January.', ar: 'تضاعفت إيراداتنا منذ يناير.', word: 'revenue' },
      { en: 'The merger was announced at the press conference.', ar: 'أُعلن عن الاندماج في المؤتمر الصحفي.', word: 'merger' },
      { en: 'Every stakeholder has signed the agreement.', ar: 'وقع كل صاحب مصلحة على الاتفاقية.', word: 'stakeholder' },
      { en: 'We are expanding into new markets this year.', ar: 'نتوسع في أسواق جديدة هذا العام.', word: 'expanding' },
      { en: 'Please review the proposal before Friday.', ar: 'راجع المقترح قبل الجمعة من فضلك.', word: 'review' },
      { en: 'The board has approved the annual budget.', ar: 'وافق مجلس الإدارة على الميزانية السنوية.', word: 'budget' },
      { en: 'If profits fall, we will revise the plan.', ar: 'إذا انخفضت الأرباح، فسنراجع الخطة.', word: 'profits' },
    ],
    orders: [
      { en: 'The board meeting starts at nine sharp.', ar: 'يبدأ اجتماع مجلس الإدارة تمام الساعة التاسعة.' },
      { en: 'We have reviewed the quarterly report.', ar: 'لقد راجعنا التقرير الفصلي.' },
      { en: 'The merger was completed in March.', ar: 'اكتمل الاندماج في مارس.' },
      { en: 'Could you email the stakeholders today, please?', ar: 'هل يمكنك مراسلة أصحاب المصلحة اليوم من فضلك؟' },
      { en: 'Our revenue is growing steadily this year.', ar: 'إيراداتنا تنمو بثبات هذا العام.' },
      { en: 'If the market changes, we will adapt quickly.', ar: 'إذا تغير السوق، فسنتكيف بسرعة.' },
    ],
    mc: [
      { question: 'Who has an interest in the success of a company?', options: ['The stakeholders', 'The passport office', 'The weather forecast', 'The bus driver'], answerIndex: 0, ar: 'من له مصلحة في نجاح الشركة؟' },
      { question: '"We are expanding into new markets" means:', options: ['نتوسع في أسواق جديدة', 'نغلق أسواقنا القديمة', 'نبيع أسهم الشركة', 'نخفض أسعار المنتجات'], answerIndex: 0, ar: 'ما معنى We are expanding into new markets؟' },
      { question: 'A "quarterly report" is prepared:', options: ['every three months', 'every ten years', 'only once ever', 'never'], answerIndex: 0, ar: 'يُعد التقرير الفصلي:' },
      { question: 'A "merger" is when two companies:', options: ['join into one company', 'close completely', 'move abroad only', 'change their names only'], answerIndex: 0, ar: 'الاندماج هو عندما:' },
    ],
  },

  /* ================= lesson 242 — Finance and Banking English ================= */
  {
    num: 242,
    tags: ['finance-english', 'banking', 'formal-requests'],
    objectives: [
      'Open accounts and request banking services politely',
      'Discuss interest rates, mortgages and dividends',
      'Explain financial documents and procedures passively',
    ],
    grammar: {
      explanation: 'Banking English relies on precise nouns and formal verbs. Use the present perfect for recent changes: "The interest rate has gone up", "The bank has approved my mortgage". The passive is common for procedures: "Your application is being processed". Conditionals discuss possible costs: "If the rate rises again, refinancing might be cheaper". Polite requests at the counter use "Could you ..., please?" or "I would like to ...".',
      explanationAr: 'تعتمد لغة البنوك على أسماء دقيقة وأفعال رسمية. استخدم المضارع التام للتغيرات الحديثة: The interest rate has gone up وThe bank has approved my mortgage. والمبني للمجهول شائع في الإجراءات: Your application is being processed. وتناقش الجمل الشرطية التكاليف المحتملة: If the rate rises again, refinancing might be cheaper. وللطلبات المهذبة عند الشباك قل Could you ..., please؟ أو I would like to ...',
      examples: [
        { en: 'Your application is being processed at the moment.', ar: 'طلبك قيد المعالجة حاليا.' },
        { en: 'The interest rate has gone up again.', ar: 'ارتفع سعر الفائدة مرة أخرى.' },
        { en: 'I would like to transfer money abroad, please.', ar: 'أود تحويل مال إلى الخارج من فضلك.' },
      ],
    },
    vocabulary: [
      { word: 'investment portfolio', meaningAr: 'محفظة استثمار', example: 'My investment portfolio performed well last quarter.', ipa: 'pɔːtˈfəʊliəʊ' },
      { word: 'mortgage', meaningAr: 'رهن عقاري', example: 'The mortgage has been approved by the bank.', ipa: 'ˈmɔːɡɪdʒ' },
      { word: 'dividends', meaningAr: 'توزيعات أرباح', example: 'Shareholders receive dividends once a year.' },
      { word: 'interest rate', meaningAr: 'سعر الفائدة', example: 'The interest rate went up again this month.' },
      { word: 'financial statement', meaningAr: 'قائمة مالية', example: 'The financial statement shows all our transactions.' },
      { word: 'balance', meaningAr: 'رصيد', example: 'I would like to check my balance, please.' },
      { word: 'withdraw', meaningAr: 'يسحب (نقودا)', example: 'I need to withdraw four hundred dollars.' },
      { word: 'deposit', meaningAr: 'يودع / إيداع', example: 'She deposited the cheque this morning.' },
      { word: 'exchange rate', meaningAr: 'سعر الصرف', example: 'The exchange rate for the euro changed today.' },
      { word: 'loan', meaningAr: 'قرض', example: 'The loan was rejected because the documents were incomplete.' },
      { word: 'credit score', meaningAr: 'تقييم ائتماني', example: 'My credit score has improved since last year.' },
      { word: 'transfer', meaningAr: 'يحوّل (مالا)', example: 'She has transferred the salary to my account.' },
    ],
    scenario: [
      { en: 'Good afternoon. How may I help you with your account today?', ar: 'مساء الخير. كيف أخدمك بخصوص حسابك اليوم؟', d: 1 },
      { en: 'I would like to open a savings account, please.', ar: 'أود فتح حساب توفير من فضلك.', d: 1 },
      { en: 'Have you brought your passport and a recent utility bill?', ar: 'هل أحضرت جواز سفرك وفاتورة خدمات حديثة؟', d: 2 },
      { en: 'Yes, here they are. I have also filled in the application form.', ar: 'نعم، ها هما. لقد ملأت استمارة الطلب أيضا.', d: 2 },
      { en: 'The bank has not approved my mortgage yet.', ar: 'لم يوافق البنك على رهني العقاري بعد.', d: 2 },
      { en: 'Your application is being processed by our loans department.', ar: 'طلبك قيد المعالجة من قبل قسم القروض لدينا.', d: 2 },
      { en: 'The interest rate went up by half a percent this month.', ar: 'ارتفع سعر الفائدة بنصف بالمئة هذا الشهر.', d: 2 },
      { en: 'Will my monthly payments increase because of that?', ar: 'هل ستزيد أقساطي الشهرية بسبب ذلك؟', d: 2 },
      { en: 'If the rate rises again, refinancing might be cheaper.', ar: 'إذا ارتفع السعر مرة أخرى، فقد يكون إعادة التمويل أرخص.', d: 3 },
      { en: 'I have invested part of my savings in an investment portfolio.', ar: 'لقد استثمرت جزءا من مدخراتي في محفظة استثمار.', d: 2 },
      { en: 'The dividends are paid into your current account every April.', ar: 'تُدفع توزيعات الأرباح إلى حسابك الجاري كل أبريل.', d: 3 },
      { en: 'Could you print my financial statement, please?', ar: 'هل تطبع قائمتي المالية من فضلك؟', d: 1 },
      { en: 'The exchange rate for the euro is displayed on that screen.', ar: 'يُعرض سعر صرف اليورو على تلك الشاشة.', d: 2 },
      { en: 'I need to withdraw four hundred dollars before the weekend.', ar: 'أحتاج إلى سحب أربعمئة دولار قبل عطلة نهاية الأسبوع.', d: 2 },
      { en: 'My credit score has improved since last year.', ar: 'تحسن تقييمي الائتماني منذ العام الماضي.', d: 2 },
      { en: 'The loan was rejected because the documents were incomplete.', ar: 'رُفض القرض لأن المستندات كانت ناقصة.', d: 3 },
      { en: 'Please keep the receipt for your records.', ar: 'احتفظ بالإيصال لسجلاتك من فضلك.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'I would like to open a {A}, please.', arTmpl: 'أود فتح {A_ar} من فضلك.',
        slots: {
          A: [
            { en: 'savings account', ar: 'حساب توفير' }, { en: 'current account', ar: 'حساب جاري' },
            { en: 'joint account', ar: 'حساب مشترك' }, { en: 'fixed-deposit account', ar: 'حساب إيداع ثابت' },
            { en: 'business account', ar: 'حساب أعمال' }, { en: 'student account', ar: 'حساب طلابي' },
            { en: 'foreign-currency account', ar: 'حساب بعملة أجنبية' }, { en: 'salary account', ar: 'حساب راتب' },
          ],
        },
        tags: ['banking', 'polite-requests'], d: 1, limit: 8,
      },
      {
        tmpl: 'The bank approved our {L} last week.', arTmpl: 'وافق البنك على {L_ar} الأسبوع الماضي.',
        slots: {
          L: [
            { en: 'mortgage application', ar: 'طلب الرهن العقاري' }, { en: 'personal loan', ar: 'قرض شخصي' },
            { en: 'car loan', ar: 'قرض سيارة' }, { en: 'housing loan', ar: 'قرض سكني' },
            { en: 'credit request', ar: 'طلب ائتمان' }, { en: 'overdraft facility', ar: 'تسهيلات سحب على المكشوف' },
            { en: 'small-business loan', ar: 'قرض مشروع صغير' }, { en: 'emergency loan', ar: 'قرض طارئ' },
          ],
        },
        tags: ['banking', 'past-simple'], d: 2, limit: 8,
      },
      {
        tmpl: 'The interest rate on the {Lo} went up this month.', arTmpl: 'ارتفع سعر الفائدة على {Lo_ar} هذا الشهر.',
        slots: {
          Lo: [
            { en: 'mortgage', ar: 'الرهن العقاري' }, { en: 'personal loan', ar: 'القرض الشخصي' },
            { en: 'savings account', ar: 'حساب التوفير' }, { en: 'credit card', ar: 'بطاقة الائتمان' },
            { en: 'fixed deposit', ar: 'الوديعة الثابتة' }, { en: 'housing loan', ar: 'القرض السكني' },
            { en: 'car loan', ar: 'قرض السيارة' },
          ],
        },
        tags: ['banking', 'interest-rates'], d: 2, limit: 7,
      },
      {
        tmpl: '{S} {V} a fixed amount into the savings account every month.', arTmpl: '{S_ar} {V_ar} مبلغا ثابتا في حساب التوفير كل شهر.',
        slots: {
          S: [
            { en: 'The client', ar: 'العميل', agr: 'he' }, { en: 'Our customers', ar: 'عملاؤنا', agr: 'they' },
            { en: 'The company', ar: 'الشركة', agr: 'she' }, { en: 'The investor', ar: 'المستثمر', agr: 'he' },
            { en: 'The investors', ar: 'المستثمرون', agr: 'they' }, { en: 'My father', ar: 'أبي', agr: 'he' },
          ],
          V: (x) => [{ en: B.enPresent('pay', x.S.agr), ar: B.arPresent('pay', x.S.agr) }],
        },
        tags: ['banking', 'present-simple'], d: 2, limit: 6,
      },
      {
        tmpl: '{S} {V}.', arTmpl: '{S_ar} {V_ar}.',
        slots: {
          S: [
            { en: 'The invoice', ar: 'الفاتورة', g: 'f' }, { en: 'The salary', ar: 'الراتب', g: 'm' },
            { en: 'The refund', ar: 'المبلغ المسترد', g: 'm' }, { en: 'The transfer', ar: 'الحوالة', g: 'f' },
            { en: 'The commission', ar: 'العمولة', g: 'f' }, { en: 'The rent', ar: 'الإيجار', g: 'm' },
          ],
          V: (x) => [{ en: 'has not been paid yet', ar: x.S.g === 'f' ? 'لم تُدفع بعد' : 'لم يُدفع بعد' }],
        },
        tags: ['finance-english', 'passive-voice', 'negatives'], d: 3, limit: 6,
      },
    ],
    fills: [
      { en: 'The mortgage has been approved by the bank.', ar: 'وافق البنك على الرهن العقاري.', word: 'mortgage' },
      { en: 'Shareholders receive dividends once a year.', ar: 'يتلقى المساهمون توزيعات أرباح مرة واحدة في السنة.', word: 'dividends' },
      { en: 'The interest rate went up again this month.', ar: 'ارتفع سعر الفائدة مرة أخرى هذا الشهر.', word: 'interest' },
      { en: 'I would like to check my balance, please.', ar: 'أود التحقق من رصيدي من فضلك.', word: 'balance' },
      { en: 'The financial statement shows all our transactions.', ar: 'تُظهر القائمة المالية جميع معاملاتنا.', word: 'financial' },
      { en: 'She has transferred the salary to my account.', ar: 'لقد حوّلت الراتب إلى حسابي.', word: 'transferred' },
      { en: 'If the exchange rate improves, we will transfer the money.', ar: 'إذا تحسن سعر الصرف، فسنحوّل المال.', word: 'exchange' },
      { en: 'The investment portfolio performed well last quarter.', ar: 'أدت محفظة الاستثمار بشكل جيد الربع الماضي.', word: 'portfolio' },
    ],
    orders: [
      { en: 'The interest rate has risen by one percent.', ar: 'ارتفع سعر الفائدة بمقدار واحد بالمئة.' },
      { en: 'I need to check my account balance today.', ar: 'أحتاج إلى التحقق من رصيد حسابي اليوم.' },
      { en: 'Your mortgage application is being processed now.', ar: 'طلب الرهن العقاري الخاص بك قيد المعالجة الآن.' },
      { en: 'The dividends were paid into her account in April.', ar: 'دُفعت توزيعات الأرباح إلى حسابها في أبريل.' },
      { en: 'Could you send me the financial statement, please?', ar: 'هل يمكنك إرسال القائمة المالية لي من فضلك؟' },
      { en: 'If the interest rate falls, we will refinance the loan.', ar: 'إذا انخفض سعر الفائدة، فسنعيد تمويل القرض.' },
      { en: 'The bank has raised its fees this year.', ar: 'رفع البنك رسومه هذا العام.' },
    ],
    mc: [
      { question: 'A "mortgage" is a loan used to buy:', options: ['property', 'food', 'clothes', 'toys'], answerIndex: 0, ar: 'الرهن العقاري قرض يُستخدم لشراء:' },
      { question: 'Dividends are paid to:', options: ['shareholders', 'students', 'tourists', 'neighbors'], answerIndex: 0, ar: 'تُدفع توزيعات الأرباح إلى:' },
      { question: 'If the interest rate goes up, your loan repayments will usually:', options: ['increase', 'disappear', 'become free', 'be cancelled forever'], answerIndex: 0, ar: 'إذا ارتفع سعر الفائدة، فستكون أقساط قرضك عادة:' },
      { question: 'A "financial statement" shows:', options: ["a company's money position", 'the weather report', 'a hotel menu', 'a school timetable'], answerIndex: 0, ar: 'القائمة المالية تُظهر:' },
    ],
  },

  /* ================= lesson 243 — Healthcare English ================= */
  {
    num: 243,
    tags: ['healthcare-english', 'medical-jargon', 'imperatives'],
    objectives: [
      'Understand a diagnosis and a treatment plan',
      'Talk about prescriptions, dosage and referrals',
      'Report symptoms with the present perfect',
    ],
    grammar: {
      explanation: 'At the clinic, instructions use the imperative and "will": "Take the medication twice a day", "The doctor will prescribe antibiotics". The passive appears in formal results: "The diagnosis was confirmed by two specialists", "A follow-up appointment has been scheduled". Present perfect connects past symptoms to now: "I have had headaches for three weeks". First conditional gives warnings: "If the symptoms return, contact the clinic immediately".',
      explanationAr: 'في العيادة تستخدم التعليمات صيغة الأمر وwill: Take the medication twice a day وThe doctor will prescribe antibiotics. ويأتي المبني للمجهول في النتائج الرسمية: The diagnosis was confirmed by two specialists وA follow-up appointment has been scheduled. ويربط المضارع التام الأعراض الماضية بالحاضر: I have had headaches for three weeks. ويستخدم الشرطي الأول للتحذير: If the symptoms return, contact the clinic immediately.',
      examples: [
        { en: 'The treatment plan will be reviewed next month.', ar: 'ستُراجع خطة العلاج الشهر القادم.' },
        { en: 'I have had this pain for two weeks.', ar: 'أعاني من هذا الألم منذ أسبوعين.' },
        { en: 'If the fever continues, come back immediately.', ar: 'إذا استمرت الحمى، فعُد فورا.' },
      ],
    },
    vocabulary: [
      { word: 'diagnosis', meaningAr: 'تشخيص', example: 'The diagnosis was explained to the patient carefully.', ipa: 'ˌdaɪəɡˈnəʊsɪs' },
      { word: 'treatment plan', meaningAr: 'خطة علاج', example: 'Follow the treatment plan and rest well.' },
      { word: 'prescribe', meaningAr: 'يصف (دواء)', example: 'The doctor will prescribe antibiotics if needed.' },
      { word: 'chronic condition', meaningAr: 'حالة مزمنة', example: 'She has managed her chronic condition for years.' },
      { word: 'follow-up appointment', meaningAr: 'موعد متابعة', example: 'I have booked a follow-up appointment for Monday.' },
      { word: 'referral', meaningAr: 'إحالة', example: 'Could I get a referral to a specialist, please?' },
      { word: 'dosage', meaningAr: 'الجرعة', example: 'Never change the dosage without medical advice.' },
      { word: 'symptoms', meaningAr: 'أعراض', example: 'The nurse checked my temperature and symptoms.' },
      { word: 'recovery', meaningAr: 'تعاف', example: 'Her recovery after the surgery was quick.' },
      { word: 'surgeon', meaningAr: 'جراح', example: 'The surgeon explained the operation clearly.' },
      { word: 'blood pressure', meaningAr: 'ضغط الدم', example: 'His blood pressure has improved since the last visit.' },
      { word: 'surgery', meaningAr: 'جراحة', example: 'The surgery went better than expected.' },
    ],
    scenario: [
      { en: 'Good morning. What brings you in today?', ar: 'صباح الخير. ما الذي أتى بك اليوم؟', d: 1 },
      { en: 'I have had persistent headaches for three weeks.', ar: 'أعاني من صداع مستمر منذ ثلاثة أسابيع.', d: 2 },
      { en: 'The doctor will examine you and give you a diagnosis.', ar: 'سيفحصك الطبيب ويعطيك تشخيصا.', d: 1 },
      { en: 'Is my condition serious, doctor?', ar: 'هل حالتي خطيرة يا دكتور؟', d: 1 },
      { en: 'Your tests show a mild chronic condition, nothing more.', ar: 'تُظهر فحوصك حالة مزمنة خفيفة، لا أكثر.', d: 2 },
      { en: 'The doctor will prescribe antibiotics for the chest infection.', ar: 'سيصف الطبيب مضادات حيوية لالتهاب الصدر.', d: 2 },
      { en: 'Take the medication twice a day after meals.', ar: 'خذ الدواء مرتين يوميا بعد الوجبات.', d: 1 },
      { en: 'I have not recovered completely, but the pain has decreased.', ar: 'لم أتعافَ تماما، لكن الألم قل.', d: 2 },
      { en: 'A follow-up appointment has been scheduled for Sunday.', ar: 'تم تحديد موعد متابعة يوم الأحد.', d: 2 },
      { en: 'If the symptoms return, contact the clinic immediately.', ar: 'إذا عادت الأعراض، فاتصل بالعيادة فورا.', d: 2 },
      { en: 'Could I get a referral to a dermatologist, please?', ar: 'هل يمكنني الحصول على إحالة إلى أخصائي جلدية من فضلك؟', d: 2 },
      { en: 'The surgeon explained the operation clearly and calmly.', ar: 'شرح الجراح العملية بوضوح وهدوء.', d: 2 },
      { en: 'How long will the treatment plan last?', ar: 'كم ستستمر خطة العلاج؟', d: 2 },
      { en: 'Diabetes is a chronic condition that needs regular monitoring.', ar: 'السكري حالة مزمنة تحتاج إلى مراقبة منتظمة.', d: 3 },
      { en: 'The dosage must not be changed without medical advice.', ar: 'يجب عدم تغيير الجرعة دون استشارة طبية.', d: 3 },
      { en: 'The diagnosis was confirmed by two specialists.', ar: 'أكد التشخيص طبيبان مختصان.', d: 3 },
      { en: 'Her recovery after the surgery has been remarkably quick.', ar: 'كان تعافها بعد الجراحة سريعا بشكل ملحوظ.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'The doctor will prescribe {M} for the infection.', arTmpl: 'سيصف الطبيب {M_ar} للعدوى.',
        slots: {
          M: [
            { en: 'antibiotics', ar: 'مضادات حيوية' }, { en: 'painkillers', ar: 'مسكنات' },
            { en: 'cough syrup', ar: 'شراب للكحة' }, { en: 'vitamins', ar: 'فيتامينات' },
            { en: 'an injection', ar: 'حقنة' }, { en: 'cream', ar: 'كريما' },
            { en: 'insulin', ar: 'الإنسولين' }, { en: 'eye drops', ar: 'قطرات للعين' },
          ],
        },
        tags: ['healthcare-english', 'future'], d: 2, limit: 8,
      },
      {
        tmpl: 'I have booked a follow-up appointment for {D} morning.', arTmpl: 'لقد حجزت موعد متابعة صباح {D_ar}.',
        slots: { D: B.DAYS },
        tags: ['healthcare-english', 'present-perfect'], d: 2, limit: 7,
      },
      {
        tmpl: '{T} {V} the diagnosis this morning.', arTmpl: '{V_ar} {T_ar} التشخيص هذا الصباح.',
        slots: {
          T: [
            { en: 'The blood test', ar: 'تحليل الدم', g: 'm' }, { en: 'The chest x-ray', ar: 'أشعة الصدر', g: 'f' },
            { en: 'The ultrasound scan', ar: 'تصوير الموجات فوق الصوتية', g: 'm' }, { en: 'The MRI scan', ar: 'صورة الرنين المغناطيسي', g: 'f' },
            { en: 'The lab report', ar: 'تقرير المختبر', g: 'm' }, { en: 'The ECG', ar: 'تخطيط القلب', g: 'm' },
            { en: 'The stress test', ar: 'اختبار الجهد', g: 'm' },
          ],
          V: (x) => [{ en: 'confirmed', ar: x.T.g === 'f' ? 'أكدت' : 'أكد' }],
        },
        tags: ['healthcare-english', 'past-simple'], d: 3, limit: 7,
      },
      {
        tmpl: 'If the symptoms continue, {S} {W}.', arTmpl: 'إذا استمرت الأعراض، {S_ar} المزيد من الفحوصات.',
        slots: {
          S: [
            { en: 'the doctor', ar: 'فسيطلب الطبيب', g: 'm' }, { en: 'the specialist', ar: 'فسيطلب الطبيب المختص', g: 'm' },
            { en: 'the consultant', ar: 'فسيطلب الاستشاري', g: 'm' }, { en: 'the surgeon', ar: 'فسيطلب الجراح', g: 'm' },
            { en: 'the clinic', ar: 'فستطلب العيادة', g: 'f' }, { en: 'the hospital', ar: 'فسيطلب المستشفى', g: 'm' },
          ],
          W: () => [{ en: 'will order more tests', ar: '' }],
        },
        tags: ['healthcare-english', 'conditionals'], d: 3, limit: 6,
      },
      {
        tmpl: 'Could I get a referral to {SP}, please?', arTmpl: 'هل يمكنني الحصول على إحالة إلى {SP_ar} من فضلك؟',
        slots: {
          SP: [
            { en: 'a cardiologist', ar: 'أخصائي قلب' }, { en: 'a dermatologist', ar: 'أخصائي جلدية' },
            { en: 'an orthopedic surgeon', ar: 'جراح عظام' }, { en: 'an eye specialist', ar: 'أخصائي عيون' },
            { en: 'a neurologist', ar: 'أخصائي أعصاب' }, { en: 'a physiotherapist', ar: 'أخصائي علاج طبيعي' },
          ],
        },
        tags: ['healthcare-english', 'polite-requests'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'The doctor prescribed antibiotics for my brother.', ar: 'صف الطبيب مضادات حيوية لأخي.', word: 'antibiotics' },
      { en: 'She has managed her chronic condition for years.', ar: 'أدارت حالتها المزمنة لسنوات.', word: 'chronic' },
      { en: 'Please arrive fifteen minutes before your appointment.', ar: 'احضر قبل موعدك بخمس عشرة دقيقة من فضلك.', word: 'appointment' },
      { en: 'The diagnosis was explained to the patient carefully.', ar: 'شرح التشخيص للمريض بعناية.', word: 'diagnosis' },
      { en: 'Follow the treatment plan and rest well.', ar: 'اتبع خطة العلاج واسترح جيدا.', word: 'treatment' },
      { en: 'His blood pressure has improved since the last visit.', ar: 'تحسن ضغط دمه منذ الزيارة الأخيرة.', word: 'pressure' },
      { en: 'If the pain returns, take one painkiller only.', ar: 'إذا عاد الألم، فخذ مسكنا واحدا فقط.', word: 'painkiller' },
      { en: 'The nurse checked my temperature and symptoms.', ar: 'فحصت الممرضة حرارتي وأعراضي.', word: 'symptoms' },
    ],
    orders: [
      { en: 'The doctor will prescribe antibiotics if needed.', ar: 'سيصف الطبيب مضادات حيوية عند الحاجة.' },
      { en: 'I have booked a follow-up appointment for Monday.', ar: 'لقد حجزت موعد متابعة يوم الاثنين.' },
      { en: 'Chronic conditions require regular check-ups every six months.', ar: 'الحالات المزمنة تتطلب فحوصات دورية كل ستة أشهر.' },
      { en: 'Could you repeat the dosage slowly, please?', ar: 'هل يمكنك تكرار الجرعة ببطء من فضلك؟' },
      { en: 'The test results were sent to my doctor yesterday.', ar: 'أُرسلت نتائج الفحص إلى طبيبي أمس.' },
      { en: 'If the fever continues, we will run more tests.', ar: 'إذا استمرت الحمى، فسنُجري المزيد من الفحوصات.' },
    ],
    mc: [
      { question: 'A "diagnosis" is:', options: ['the identification of an illness', 'a hotel reservation', 'a bank loan', 'a travel ticket'], answerIndex: 0, ar: 'التشخيص هو:' },
      { question: 'Who writes a prescription?', options: ['a doctor', 'a pilot', 'an accountant', 'a tour guide'], answerIndex: 0, ar: 'من يكتب الوصفة الطبية؟' },
      { question: 'A "chronic condition" lasts:', options: ['a long time', 'two minutes', 'one morning', 'never'], answerIndex: 0, ar: 'الحالة المزمنة تستمر:' },
      { question: 'A "follow-up appointment" is booked:', options: ['after the first visit', 'before you are born', 'only at midnight', 'never'], answerIndex: 0, ar: 'موعد المتابعة يُحجز:' },
    ],
  },

  /* ================= lesson 244 — Technology English ================= */
  {
    num: 244,
    tags: ['technology-english', 'passive-voice', 'tech-jargon'],
    objectives: [
      'Report technical problems like server outages',
      'Discuss software updates, AI and data privacy',
      'Use the passive to describe technical processes',
    ],
    grammar: {
      explanation: 'Technology English mixes present simple for systems with passive for processes: "The app collects data", "The data is encrypted". Present perfect reports recent changes: "Download speeds have improved". "Will" describes plans and predictions: "We will launch the product". Conditionals handle risk: "If the server is down, the team will restore the backup". Keep commands short: "Please install the update", "Never share your verification code".',
      explanationAr: 'تمزج لغة التكنولوجيا بين المضارع البسيط للأنظمة والمبني للمجهول للعمليات: The app collects data وThe data is encrypted. ويذكر المضارع التام التغيرات الحديثة: Download speeds have improved. ويصف will الخطط والتوقعات: We will launch the product. وتتولى الجمل الشرطية المخاطر: If the server is down, the team will restore the backup. واجعل الأوامر قصيرة: Please install the update وNever share your verification code.',
      examples: [
        { en: 'The data is stored on secure servers.', ar: 'تُخزن البيانات على خوادم آمنة.' },
        { en: 'We have fixed the login problem.', ar: 'لقد أصلحنا مشكلة تسجيل الدخول.' },
        { en: 'If the update fails, contact the support team.', ar: 'إذا فشل التحديث، فاتصل بفريق الدعم.' },
      ],
    },
    vocabulary: [
      { word: 'software update', meaningAr: 'تحديث برمجي', example: 'The software update fixed the login problem.' },
      { word: 'artificial intelligence', meaningAr: 'ذكاء اصطناعي', example: 'Artificial intelligence will change many jobs.', ipa: 'ɑːˈtɪfɪʃəl ɪnˈtelɪdʒəns' },
      { word: 'server', meaningAr: 'خادم', example: 'The server is down again this morning.' },
      { word: 'data privacy', meaningAr: 'خصوصية البيانات', example: 'Data privacy matters to every online user.' },
      { word: 'launch', meaningAr: 'يطلق (منتجا)', example: 'The company will launch the product in May.' },
      { word: 'encrypt', meaningAr: 'يشفر', example: 'All messages are encrypted end to end.' },
      { word: 'outage', meaningAr: 'انقطاع (خدمة)', example: 'The outage lasted for two hours.' },
      { word: 'download', meaningAr: 'ينزل (ملفا)', example: 'Download speeds have improved since the upgrade.' },
      { word: 'user agreement', meaningAr: 'اتفاقية المستخدم', example: 'Could you send me the user agreement, please?' },
      { word: 'network', meaningAr: 'شبكة', example: 'If the network is slow, reset the router.' },
      { word: 'feature', meaningAr: 'ميزة', example: 'The new feature saves time for users.' },
      { word: 'verification code', meaningAr: 'رمز تحقق', example: 'Never share your verification code with anyone.' },
    ],
    scenario: [
      { en: 'The server is down, so nobody can access the files.', ar: 'الخادم معطل، لذا لا يستطيع أحد الوصول إلى الملفات.', d: 1 },
      { en: 'Has the IT team been informed about the outage?', ar: 'هل أُبلغ فريق التقنية عن الانقطاع؟', d: 2 },
      { en: 'Yes, they are restarting the system right now.', ar: 'نعم، يعيدون تشغيل النظام الآن.', d: 1 },
      { en: 'Please install the software update before Friday.', ar: 'من فضلك ثبّت التحديث البرمجي قبل الجمعة.', d: 1 },
      { en: 'The new version has not been tested on older devices.', ar: 'لم يُختبر الإصدار الجديد على الأجهزة القديمة.', d: 3 },
      { en: 'Artificial intelligence is transforming how companies analyze data.', ar: 'يغير الذكاء الاصطناعي طريقة تحليل الشركات للبيانات.', d: 3 },
      { en: 'How does the app protect our data privacy?', ar: 'كيف يحمي التطبيق خصوصية بياناتنا؟', d: 2 },
      { en: 'All personal data is encrypted during transmission.', ar: 'تُشفر جميع البيانات الشخصية أثناء النقل.', d: 3 },
      { en: 'When will we launch the new product?', ar: 'متى سنطلق المنتج الجديد؟', d: 2 },
      { en: 'If the launch goes well, we will hire more engineers.', ar: 'إذا نجح الإطلاق، فسنوظف مزيدا من المهندسين.', d: 2 },
      { en: 'The app collects personal data only with your permission.', ar: 'يجمع التطبيق البيانات الشخصية فقط بإذنك.', d: 2 },
      { en: 'My password has expired, so I cannot log in.', ar: 'انتهت صلاحية كلمة مروري، لذا لا أستطيع تسجيل الدخول.', d: 2 },
      { en: 'Could you send me the user agreement, please?', ar: 'هل ترسل لي اتفاقية المستخدم من فضلك؟', d: 2 },
      { en: 'Machine learning models require large amounts of clean data.', ar: 'تتطلب نماذج تعلم الآلة كميات كبيرة من البيانات النظيفة.', d: 3 },
      { en: 'The website was redesigned to improve accessibility.', ar: 'أعيد تصميم الموقع الإلكتروني لتحسين سهولة الاستخدام.', d: 2 },
      { en: 'Download speeds have improved significantly since the upgrade.', ar: 'تحسنت سرعات التنزيل بشكل كبير منذ الترقية.', d: 2 },
      { en: 'Never share your verification code with anyone.', ar: 'لا تشارك رمز التحقق مع أي أحد أبدا.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'The {N} {D}.', arTmpl: '{N_ar} {D_ar}.',
        slots: {
          N: [
            { en: 'server', ar: 'الخادم', g: 'm' }, { en: 'website', ar: 'الموقع الإلكتروني', g: 'm' },
            { en: 'network', ar: 'الشبكة', g: 'f' }, { en: 'app', ar: 'التطبيق', g: 'm' },
            { en: 'email service', ar: 'خدمة البريد الإلكتروني', g: 'f' }, { en: 'payment system', ar: 'نظام الدفع', g: 'm' },
            { en: 'booking platform', ar: 'منصة الحجز', g: 'f' },
          ],
          D: (x) => [{ en: 'is down at the moment', ar: x.N.g === 'f' ? 'معطلة حاليا' : 'معطل حاليا' }],
        },
        tags: ['technology-english', 'present-simple'], d: 1, limit: 7,
      },
      {
        tmpl: 'Please install the {U} before {D}.', arTmpl: 'من فضلك ثبّت {U_ar} قبل {D_ar}.',
        slots: {
          U: [
            { en: 'software update', ar: 'تحديث البرنامج' }, { en: 'security patch', ar: 'تحديث أمني' },
            { en: 'new version', ar: 'الإصدار الجديد' }, { en: 'system upgrade', ar: 'ترقية النظام' },
            { en: 'antivirus program', ar: 'برنامج مكافحة الفيروسات' }, { en: 'firewall program', ar: 'برنامج الجدار الناري' },
          ],
          D: B.DAYS,
        },
        tags: ['technology-english', 'imperatives'], d: 2, limit: 21,
      },
      {
        tmpl: '{S} {V} many industries.', arTmpl: '{V_ar} {S_ar} صناعات كثيرة.',
        slots: {
          S: [
            { en: 'Artificial intelligence', ar: 'الذكاء الاصطناعي', g: 'm' }, { en: 'Machine learning', ar: 'تعلم الآلة', g: 'm' },
            { en: 'Modern technology', ar: 'التقنية الحديثة', g: 'f' }, { en: 'Automation', ar: 'الأتمتة', g: 'f' },
            { en: 'Cloud computing', ar: 'الحوسبة السحابية', g: 'f' },
          ],
          V: (x) => [{ en: 'is changing', ar: x.S.g === 'f' ? 'تغيّر' : 'يغيّر' }],
        },
        tags: ['technology-english', 'ai'], d: 3, limit: 5,
      },
      {
        tmpl: 'We will {Vw} the new product next month.', arTmpl: 'س{Vw_ar} المنتج الجديد الشهر القادم.',
        slots: {
          Vw: [
            { en: 'launch', ar: 'نطلق' }, { en: 'release', ar: 'نصدر' },
            { en: 'test', ar: 'نختبر' }, { en: 'advertise', ar: 'نعلن عن' },
            { en: 'demonstrate', ar: 'نستعرض' },
          ],
        },
        tags: ['technology-english', 'future'], d: 2, limit: 5,
      },
      {
        tmpl: 'The app collects {P} with your permission.', arTmpl: 'يجمع التطبيق {P_ar} بإذنك.',
        slots: {
          P: [
            { en: 'personal data', ar: 'البيانات الشخصية' }, { en: 'location data', ar: 'بيانات الموقع' },
            { en: 'payment details', ar: 'تفاصيل الدفع' }, { en: 'usage statistics', ar: 'إحصاءات الاستخدام' },
            { en: 'contact details', ar: 'بيانات الاتصال' },
          ],
        },
        tags: ['technology-english', 'data-privacy'], d: 3, limit: 5,
      },
    ],
    fills: [
      { en: 'The software update fixed the login problem.', ar: 'أصلح التحديث البرمجي مشكلة تسجيل الدخول.', word: 'update' },
      { en: 'Artificial intelligence will change many jobs.', ar: 'سيغير الذكاء الاصطناعي وظائف كثيرة.', word: 'intelligence' },
      { en: 'The server is down again this morning.', ar: 'الخادم معطل مرة أخرى هذا الصباح.', word: 'server' },
      { en: 'Data privacy matters to every online user.', ar: 'خصوصية البيانات تهم كل مستخدم على الإنترنت.', word: 'privacy' },
      { en: 'Please restart the laptop and try again.', ar: 'أعد تشغيل الحاسوب المحمول وحاول مرة أخرى من فضلك.', word: 'restart' },
      { en: 'The company will launch the product in May.', ar: 'ستطلق الشركة المنتج في مايو.', word: 'launch' },
      { en: 'Her data was lost because the backup failed.', ar: 'فُقدت بياناتها لأن النسخة الاحتياطية فشلت.', word: 'backup' },
      { en: 'If the network is slow, reset the router.', ar: 'إذا كانت الشبكة بطيئة، فأعد ضبط الموجّه.', word: 'network' },
    ],
    orders: [
      { en: 'The server is down for scheduled maintenance.', ar: 'الخادم معطل للصيانة المجدولة.' },
      { en: 'Please install the security update tonight.', ar: 'من فضلك ثبّت التحديث الأمني الليلة.' },
      { en: 'Artificial intelligence will not replace human judgment.', ar: 'لن يستبدل الذكاء الاصطناعي الحكم البشري.' },
      { en: 'We will launch the product after the testing phase.', ar: 'سنطلق المنتج بعد مرحلة الاختبار.' },
      { en: 'Could you reset my password, please?', ar: 'هل يمكنك إعادة تعيين كلمة المرور من فضلك؟' },
      { en: 'If the data is lost, the project will be delayed.', ar: 'إذا فُقدت البيانات، فسيتأخر المشروع.' },
    ],
    mc: [
      { question: '"The server is down" means the server is:', options: ['not working', 'moving downstairs', 'for sale', 'very fast'], answerIndex: 0, ar: 'الخادم معطل أي أنه:' },
      { question: 'A "software update" usually:', options: ['fixes problems and adds features', 'breaks the screen', 'eats electricity', 'prints documents'], answerIndex: 0, ar: 'تحديث البرنامج عادة:' },
      { question: '"Data privacy" is about protecting:', options: ['personal information', 'office furniture', 'bus tickets', 'sports results'], answerIndex: 0, ar: 'خصوصية البيانات تتعلق بحماية:' },
      { question: 'To "launch the product" means to:', options: ['release it to the market', 'throw it away', 'hide it forever', 'paint it'], answerIndex: 0, ar: 'إطلاق المنتج يعني:' },
    ],
  },

  /* ================= lesson 245 — Tourism English ================= */
  {
    num: 245,
    tags: ['tourism-english', 'travel-jargon', 'polite-requests'],
    objectives: [
      'Talk about packages, peak season and itineraries',
      'Ask for and give recommendations politely',
      'Describe travel experiences with the present perfect',
    ],
    grammar: {
      explanation: 'Travel English uses the past simple for finished trips: "We visited a cultural heritage site". The present perfect reports experiences up to now: "We have not tried the local cuisine yet". "Will" and the first conditional discuss plans and prices: "If you book early, you will get a better rate". Polite requests are everywhere in tourism: "May I see your ticket, please?", "Could you keep my luggage, please?".',
      explanationAr: 'تستخدم لغة السفر الماضي البسيط للرحلات المنتهية: We visited a cultural heritage site. ويذكر المضارع التام التجارب حتى الآن: We have not tried the local cuisine yet. ويستخدم will والشرطي الأول للخطط والأسعار: If you book early, you will get a better rate. والطلبات المهذبة في كل مكان في السياحة: May I see your ticket, please؟ وCould you keep my luggage, please؟',
      examples: [
        { en: 'The hotel was fully booked last week.', ar: 'كان الفندق محجوزا بالكامل الأسبوع الماضي.' },
        { en: 'We have confirmed our reservation by email.', ar: 'لقد أكدنا حجزنا بالبريد الإلكتروني.' },
        { en: 'If the weather changes, we will stay indoors.', ar: 'إذا تغير الطقس، فسنبقى في الداخل.' },
      ],
    },
    vocabulary: [
      { word: 'all-inclusive package', meaningAr: 'باقة شاملة', example: 'The all-inclusive package covers meals and drinks.' },
      { word: 'guided excursion', meaningAr: 'جولة منظمة بمرشد', example: 'We joined a guided excursion to the desert.' },
      { word: 'peak season', meaningAr: 'موسم الذروة', example: 'The peak season is very crowded here.' },
      { word: 'local cuisine', meaningAr: 'مأكولات محلية', example: 'I love the local cuisine in this region.' },
      { word: 'cultural heritage site', meaningAr: 'موقع تراثي ثقافي', example: 'This cultural heritage site attracts many visitors.' },
      { word: 'itinerary', meaningAr: 'خطة رحلة', example: 'Please email me the final itinerary today.' },
      { word: 'round-trip ticket', meaningAr: 'تذكرة ذهاب وعودة', example: 'May I see your round-trip ticket, please?' },
      { word: 'tour guide', meaningAr: 'مرشد سياحي', example: 'The tour guide was knowledgeable and friendly.' },
      { word: 'souvenir', meaningAr: 'هدية تذكارية', example: 'I bought several handmade souvenirs at the bazaar.' },
      { word: 'reservation', meaningAr: 'حجز', example: 'The reservation includes breakfast and airport pickup.' },
      { word: 'landmark', meaningAr: 'معلم بارز', example: 'The tower is the most famous landmark in the city.' },
      { word: 'hospitality', meaningAr: 'حسن الضيافة', example: 'The hospitality of the locals impressed us.', ipa: 'ˌhɒspɪˈtæləti' },
    ],
    scenario: [
      { en: 'Welcome aboard. May I see your round-trip ticket, please?', ar: 'أهلا بك على متن الرحلة. هل تظهر لي تذكرة الذهاب والعودة من فضلك؟', d: 1 },
      { en: 'We have booked the all-inclusive package for seven nights.', ar: 'لقد حجزنا الباقة الشاملة لسبع ليال.', d: 2 },
      { en: 'Does the package include airport transfers?', ar: 'هل تشمل الباقة التنقلات من وإلى المطار؟', d: 2 },
      { en: 'Yes, it covers transfers, buffet meals and guided excursions.', ar: 'نعم، تشمل التنقلات ووجبات البوفيه والجولات المنظمة.', d: 1 },
      { en: 'The peak season starts in July, so prices rise sharply.', ar: 'يبدأ موسم الذروة في يوليو، فترتفع الأسعار بشكل حاد.', d: 2 },
      { en: 'If you book early, you will get a better rate.', ar: 'إذا حجزت مبكرا، فستحصل على سعر أفضل.', d: 2 },
      { en: 'The tour guide was knowledgeable about the cultural heritage site.', ar: 'كان المرشد السياحي واسع المعرفة بالموقع التراثي الثقافي.', d: 3 },
      { en: 'We have not tried the local cuisine yet.', ar: 'لم نجرب المأكولات المحلية بعد.', d: 2 },
      { en: 'Where can I find authentic local cuisine near the hotel?', ar: 'أين أجد مأكولات محلية أصيلة قرب الفندق؟', d: 2 },
      { en: 'A guided excursion to the old city leaves at eight.', ar: 'تنطلق جولة منظمة إلى المدينة القديمة تمام الثامنة.', d: 2 },
      { en: 'Could you keep my luggage until noon, please?', ar: 'هل تحفظ أمتعتي حتى الظهر من فضلك؟', d: 2 },
      { en: 'The itinerary includes two museums and a traditional market.', ar: 'تشمل خطة الرحلة متحفين وسوقا تقليديا.', d: 2 },
      { en: 'Our reservation was confirmed by email this morning.', ar: 'تم تأكيد حجزنا بالبريد الإلكتروني هذا الصباح.', d: 2 },
      { en: 'Tourism has created many jobs in this region.', ar: 'وفرت السياحة وظائف كثيرة في هذه المنطقة.', d: 3 },
      { en: 'The hotel was fully booked during the festival.', ar: 'كان الفندق محجوزا بالكامل خلال المهرجان.', d: 2 },
      { en: 'I bought several handmade souvenirs at the bazaar.', ar: 'اشتريت عدة هدايا تذكارية يدوية في السوق.', d: 1 },
      { en: 'How long does the guided tour of the citadel last?', ar: 'كم تستغرق الجولة المرشدية في القلعة؟', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'The all-inclusive package covers {F}.', arTmpl: 'تشمل الباقة الشاملة {F_ar}.',
        slots: {
          F: [
            { en: 'airport transfers', ar: 'التنقلات من وإلى المطار' }, { en: 'buffet meals', ar: 'وجبات البوفيه' },
            { en: 'guided excursions', ar: 'الجولات المنظمة' }, { en: 'hotel accommodation', ar: 'الإقامة في الفندق' },
            { en: 'evening entertainment', ar: 'الترفيه المسائي' }, { en: 'soft drinks', ar: 'المشروبات الغازية' },
            { en: 'sports activities', ar: 'الأنشطة الرياضية' },
          ],
        },
        tags: ['tourism-english', 'packages'], d: 2, limit: 7,
      },
      {
        tmpl: 'We booked a guided excursion for {D}.', arTmpl: 'حجزنا جولة منظمة بمرشد يوم {D_ar}.',
        slots: { D: B.DAYS },
        tags: ['tourism-english', 'past-simple'], d: 2, limit: 7,
      },
      {
        tmpl: 'The peak season in {C} starts in {M}.', arTmpl: 'يبدأ موسم الذروة في {C_ar} في {M_ar}.',
        slots: {
          C: B.COUNTRIES,
          M: [
            { en: 'June', ar: 'يونيو' }, { en: 'July', ar: 'يوليو' },
            { en: 'August', ar: 'أغسطس' }, { en: 'December', ar: 'ديسمبر' },
          ],
        },
        tags: ['tourism-english', 'peak-season'], d: 2, limit: 24,
      },
      {
        tmpl: 'Could you recommend {Dw}, please?', arTmpl: 'هل يمكنك أن توصي بـ{Dw_ar} من فضلك؟',
        slots: {
          Dw: [
            { en: 'a traditional restaurant', ar: 'مطعما تقليديا' }, { en: 'a local dish', ar: 'طبقا محليا' },
            { en: 'a guided city tour', ar: 'جولة في المدينة بمرشد' }, { en: 'a good hotel near the sea', ar: 'فندقا جيدا قرب البحر' },
            { en: 'a reliable taxi driver', ar: 'سائقا موثوقا' }, { en: 'a local market', ar: 'سوقا محليا' },
          ],
        },
        tags: ['tourism-english', 'polite-requests'], d: 1, limit: 6,
      },
      {
        tmpl: 'We visited a cultural heritage site in {Cy}.', arTmpl: 'زرنا موقعا تراثيا ثقافيا في {Cy_ar}.',
        slots: { Cy: B.CITIES },
        tags: ['tourism-english', 'past-simple'], d: 2, limit: 9,
      },
    ],
    fills: [
      { en: 'The all-inclusive package covers meals and drinks.', ar: 'تشمل الباقة الشاملة الوجبات والمشروبات.', word: 'package' },
      { en: 'We joined a guided excursion to the desert.', ar: 'انضممنا إلى جولة منظمة إلى الصحراء.', word: 'excursion' },
      { en: 'The peak season is very crowded here.', ar: 'موسم الذروة مزدحم جدا هنا.', word: 'peak' },
      { en: 'I love the local cuisine in this region.', ar: 'أحب المأكولات المحلية في هذه المنطقة.', word: 'cuisine' },
      { en: 'This cultural heritage site attracts many visitors.', ar: 'يجذب هذا الموقع التراثي الثقافي زوارا كثيرين.', word: 'heritage' },
      { en: 'Our flight has been delayed by two hours.', ar: 'تأخرت رحلتنا ساعتين.', word: 'delayed' },
      { en: 'Please email me the final itinerary today.', ar: 'أرسل لي خطة الرحلة النهائية بالبريد اليوم من فضلك.', word: 'itinerary' },
      { en: 'The reservation includes breakfast and airport pickup.', ar: 'يشمل الحجز الإفطار والاستقبال من المطار.', word: 'reservation' },
    ],
    orders: [
      { en: 'We have booked an all-inclusive package this summer.', ar: 'لقد حجزنا باقة شاملة هذا الصيف.' },
      { en: 'The guided excursion starts at eight sharp.', ar: 'تبدأ الجولة المنظمة تمام الساعة الثامنة.' },
      { en: 'The peak season brings higher prices everywhere.', ar: 'موسم الذروة يجلب أسعارا أعلى في كل مكان.' },
      { en: 'Could you recommend a quiet cafe nearby, please?', ar: 'هل يمكنك أن توصي بمقهى هادئ قريب من فضلك؟' },
      { en: 'We visited a cultural heritage site yesterday.', ar: 'زرنا موقعا تراثيا ثقافيا أمس.' },
      { en: 'If the flight is cancelled, we will book another one.', ar: 'إذا أُلغيت الرحلة، فسنحجز أخرى.' },
    ],
    mc: [
      { question: 'An "all-inclusive package" usually includes:', options: ['meals, drinks and activities', 'only a plane seat', 'nothing at all', 'a free car'], answerIndex: 0, ar: 'الباقة الشاملة تشمل عادة:' },
      { question: 'The "peak season" is when:', options: ['most tourists travel', 'all shops close', 'it never rains', 'hotels are empty'], answerIndex: 0, ar: 'موسم الذروة هو الوقت الذي:' },
      { question: '"Local cuisine" refers to:', options: ['traditional local food', 'airport security', 'hotel furniture', 'a sports club'], answerIndex: 0, ar: 'المأكولات المحلية تعني:' },
      { question: 'A "cultural heritage site" is a place with:', options: ['historic importance', 'cheap parking', 'fast internet only', 'a swimming pool'], answerIndex: 0, ar: 'الموقع التراثي الثقافي هو مكان له:' },
    ],
  },
];
