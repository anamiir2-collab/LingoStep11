/* ============================================================
   v2 section data — s10-a2.js
   Complex Situations & Rights · lessons 225–227 (police report,
   legal documents, insurance claim)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 225 — Filing a Police Report ================= */
  {
    num: 225,
    tags: ['police', 'reports'],
    objectives: [
      'Open a report at the police station',
      'Describe what happened and give details',
      'Get the report number and copies',
    ],
    grammar: {
      explanation: 'At the police station, describe finished events with the past simple: "The theft happened near the market yesterday evening". Ask for what you need with "Could I have ..., please?". The present perfect asks about progress: "Have the witnesses given their statements?", "The officer has not finished the report yet". Procedures often use need to: "Do I need to sign the statement?". Always ask for the report number and a stamped copy for the insurance company.',
      explanationAr: 'في مركز الشرطة صِف الأحداث المنتهية بالماضي البسيط: The theft happened near the market yesterday evening. واطلب ما تحتاجه بـ Could I have ..., please؟ ويسأل المضارع التام عن التقدم: Have the witnesses given their statements؟ وThe officer has not finished the report yet. وكثيرا ما تستخدم الإجراءات need to: Do I need to sign the statement؟ واحصل دائما على رقم البلاغ ونسخة مختومة لشركة التأمين.',
      examples: [
        { en: 'I would like to file a report, please.', ar: 'أود تقديم بلاغ، من فضلك.' },
        { en: 'Do I need to sign the statement?', ar: 'هل يلزمني التوقيع على البيان؟' },
        { en: 'Could I have the report number, please?', ar: 'هل يمكنني الحصول على رقم البلاغ من فضلك؟' },
      ],
    },
    vocabulary: [
      { word: 'report', meaningAr: 'بلاغ / محضر', example: 'I would like to file a report.', ipa: 'rɪˈpɔːrt' },
      { word: 'file a report', meaningAr: 'يقدم بلاغا', example: 'She filed a report at the station.' },
      { word: 'statement', meaningAr: 'أقوال / بيان', example: 'Do I need to sign the statement?' },
      { word: 'report number', meaningAr: 'رقم البلاغ', example: 'Your report number is on this slip.' },
      { word: 'theft', meaningAr: 'سرقة', example: 'The theft happened yesterday evening.' },
      { word: 'witness', meaningAr: 'شاهد', example: 'A witness saw the whole incident.' },
      { word: 'incident', meaningAr: 'حادثة', example: 'The incident lasted only a minute.' },
      { word: 'details', meaningAr: 'التفاصيل', example: 'Please write down every detail.' },
      { word: 'station', meaningAr: 'مركز الشرطة', example: 'The station is open twenty-four hours.' },
      { word: 'officer', meaningAr: 'ضابط / شرطي', example: 'The officer was very helpful.' },
      { word: 'stamped copy', meaningAr: 'نسخة مختومة', example: 'Here is a stamped copy for your records.' },
      { word: 'insurance company', meaningAr: 'شركة التأمين', example: 'The insurance company needs a copy.' },
    ],
    scenario: [
      { en: 'I would like to file a report, please.', ar: 'أود تقديم بلاغ، من فضلك.', d: 1 },
      { en: 'Can you describe what happened, please?', ar: 'هل تصف ما حدث من فضلك؟', d: 1 },
      { en: 'The theft happened near the market yesterday evening.', ar: 'وقعت السرقة قرب السوق أمس مساء.', d: 1 },
      { en: 'Did anyone see the incident?', ar: 'هل رأى أحد الحادثة؟', d: 1 },
      { en: 'Yes, a witness stopped and helped me.', ar: 'نعم، توقف شاهد وساعدني.', d: 1 },
      { en: 'Please write down every detail in this form.', ar: 'اكتب كل التفاصيل في هذا النموذج من فضلك.', d: 1 },
      { en: 'Do I need to sign the statement?', ar: 'هل يلزمني التوقيع على البيان؟', d: 2 },
      { en: 'Yes, sign here after you read it carefully.', ar: 'نعم، وقّع هنا بعد أن تقرأه بعناية.', d: 2 },
      { en: 'Could I have the report number, please?', ar: 'هل يمكنني الحصول على رقم البلاغ من فضلك؟', d: 1 },
      { en: 'Your report number is on this slip.', ar: 'رقم بلاغك على هذه الورقة.', d: 1 },
      { en: 'I need a copy for the insurance company.', ar: 'أحتاج نسخة لشركة التأمين.', d: 2 },
      { en: 'Of course, here is a stamped copy.', ar: 'بالتأكيد، هذه نسخة مختومة.', d: 1 },
      { en: 'The officer has not finished the report yet.', ar: 'لم ينه الضابط البلاغ بعد.', d: 2 },
      { en: 'Please wait in the hall for ten minutes.', ar: 'انتظر في القاعة عشر دقائق من فضلك.', d: 1 },
      { en: 'Have the witnesses given their statements?', ar: 'هل أدلى الشهود بأقوالهم؟', d: 2 },
      { en: 'The police will call you if they need more information.', ar: 'ستتصل بك الشرطة إذا احتاجت مزيدا من المعلومات.', d: 3 },
      { en: 'Thank you for your patience today, officer.', ar: 'شكرا على صبرك اليوم يا ضابط.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'I would like to report {C}.', arTmpl: 'أود الإبلاغ عن {C_ar}.',
        slots: {
          C: [
            { en: 'a theft near the market', ar: 'سرقة قرب السوق' }, { en: 'damage to my car door', ar: 'أضرار بباب سيارتي' },
            { en: 'a stolen bicycle', ar: 'دراجة مسروقة' }, { en: 'a scam phone call', ar: 'مكالمة هاتفية احتيالية' },
            { en: 'harassment in the street', ar: 'مضايقة في الشارع' },
          ],
        },
        tags: ['police', 'reports'], d: 1, limit: 5,
      },
      {
        tmpl: 'The {C2} happened {T}.', arTmpl: 'وقع {C2_ar} {T_ar}.',
        slots: {
          C2: [
            { en: 'theft', ar: 'السرقة' }, { en: 'break-in', ar: 'الاقتحام' },
            { en: 'accident', ar: 'الحادث' }, { en: 'incident', ar: 'الحادثة' },
            { en: 'fire', ar: 'الحريق' },
          ],
          T: [
            { en: 'yesterday evening', ar: 'أمس مساء' }, { en: 'last night', ar: 'الليلة الماضية' },
            { en: 'this morning', ar: 'هذا الصباح' }, { en: 'on Saturday', ar: 'يوم السبت' },
            { en: 'two days ago', ar: 'قبل يومين' },
          ],
        },
        tags: ['police', 'past-simple'], d: 1, limit: 12,
      },
      {
        tmpl: 'Could I have {D}, please?', arTmpl: 'هل يمكنني الحصول على {D_ar} من فضلك؟',
        slots: {
          D: [
            { en: 'the case number', ar: 'رقم القضية' }, { en: 'a stamped copy', ar: 'نسخة مختومة' },
            { en: 'the officer\'s name', ar: 'اسم الضابط' }, { en: 'the station address', ar: 'عنوان مركز الشرطة' },
            { en: 'a signed statement', ar: 'بيانا موقّعا' },
          ],
        },
        tags: ['police', 'requests'], d: 2, limit: 5,
      },
      {
        tmpl: 'Do I need to {A}?', arTmpl: 'هل يلزمني أن {A_ar}؟',
        slots: {
          A: [
            { en: 'bring my passport', ar: 'أحضر جواز سفري' }, { en: 'come back tomorrow', ar: 'أعود غدا' },
            { en: 'list the lost items', ar: 'أعدد الأشياء المفقودة' }, { en: 'show any identification', ar: 'أعرض أي هوية' },
            { en: 'pay any fee', ar: 'أدفع أي رسوم' },
          ],
        },
        tags: ['police', 'procedures'], d: 2, limit: 5,
      },
      {
        tmpl: 'The report must include {I}.', arTmpl: 'يجب أن يتضمن البلاغ {I_ar}.',
        slots: {
          I: [
            { en: 'the date and the time', ar: 'التاريخ والوقت' }, { en: 'the location', ar: 'المكان' },
            { en: 'the names of witnesses', ar: 'أسماء الشهود' }, { en: 'a description of the incident', ar: 'وصفا للحادثة' },
            { en: 'your contact details', ar: 'بيانات التواصل الخاصة بك' }, { en: 'the estimated loss', ar: 'الخسارة التقديرية' },
          ],
        },
        tags: ['police', 'reports'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'I would like to file a report, please.', ar: 'أود تقديم بلاغ، من فضلك.', word: 'report', hint: 'بلاغ' },
      { en: 'The theft happened near the market yesterday evening.', ar: 'وقعت السرقة قرب السوق أمس مساء.', word: 'theft', hint: 'سرقة' },
      { en: 'Could I have the report number, please?', ar: 'هل يمكنني الحصول على رقم البلاغ من فضلك؟', word: 'number', hint: 'رقم' },
      { en: 'Do I need to sign the statement?', ar: 'هل يلزمني التوقيع على البيان؟', word: 'sign', hint: 'يوقّع' },
      { en: 'I need a copy for the insurance company.', ar: 'أحتاج نسخة لشركة التأمين.', word: 'insurance', hint: 'تأمين' },
      { en: 'The officer has not finished the report yet.', ar: 'لم ينه الضابط البلاغ بعد.', word: 'officer', hint: 'ضابط' },
      { en: 'Yes, a witness stopped and helped me.', ar: 'نعم، توقف شاهد وساعدني.', word: 'witness', hint: 'شاهد' },
      { en: 'The police will call you if they need more information.', ar: 'ستتصل بك الشرطة إذا احتاجت مزيدا من المعلومات.', word: 'police', hint: 'شرطة' },
    ],
    orders: [
      { en: 'I would like to file a report, please.', ar: 'أود تقديم بلاغ، من فضلك.' },
      { en: 'The theft happened near the market yesterday evening.', ar: 'وقعت السرقة قرب السوق أمس مساء.' },
      { en: 'Could I have the report number, please?', ar: 'هل يمكنني الحصول على رقم البلاغ من فضلك؟' },
      { en: 'Do I need to sign the statement?', ar: 'هل يلزمني التوقيع على البيان؟' },
      { en: 'I need a copy for the insurance company.', ar: 'أحتاج نسخة لشركة التأمين.' },
      { en: 'Please write down every detail in this form.', ar: 'اكتب كل التفاصيل في هذا النموذج من فضلك.' },
    ],
    mc: [
      { question: 'Where do you file a police report?', options: ['at the police station', 'at the bakery', 'in the park', 'at school'], answerIndex: 0, ar: 'أين تقدم بلاغا للشرطة؟' },
      { question: 'Why is the report number important?', options: ['to track the case and give it to the insurance', 'to order food', 'to book a hotel', 'to vote'], answerIndex: 0, ar: 'لماذا رقم البلاغ مهم؟' },
      { question: 'What do you do after reading the statement?', options: ['sign it', 'tear it', 'email it to friends', 'lose it'], answerIndex: 0, ar: 'ماذا تفعل بعد قراءة البيان؟' },
      { question: 'Who saw the incident?', options: ['a witness', 'a waiter', 'a dentist', 'a pilot'], answerIndex: 0, ar: 'من شاهد الحادثة؟' },
    ],
  },

  /* ================= lesson 226 — Legal Documents ================= */
  {
    num: 226,
    tags: ['legal', 'documents'],
    objectives: [
      'Ask for certified copies and sworn translations',
      'Explain what a contract clause says',
      'Decide when to seek legal advice',
    ],
    grammar: {
      explanation: 'Legal English relies on the passive voice: "The draft was sent to the lawyer", "The contract must be signed in front of the notary". "Must be + past participle" expresses official requirements: "All foreign documents must be translated by a sworn translator". Use "states that" to quote a clause: "The clause states that the rent rises every year". Conditionals give careful advice: "If a clause is unclear, you should get legal advice".',
      explanationAr: 'تعتمد اللغة القانونية على المبني للمجهول: The draft was sent to the lawyer وThe contract must be signed in front of the notary. وتعبر صيغة must be + التصريف الثالث عن المتطلبات الرسمية: All foreign documents must be translated by a sworn translator. واستخدم states that لاقتباس بند: The clause states that the rent rises every year. وتعطي الجمل الشرطية نصيحة حذرة: If a clause is unclear, you should get legal advice.',
      examples: [
        { en: 'The contract must be signed in front of the notary.', ar: 'يجب توقيع العقد أمام الموثق.' },
        { en: 'The clause states that the rent rises every year.', ar: 'ينص البند على أن الإيجار يرتفع كل سنة.' },
        { en: 'If a clause is unclear, you should get legal advice.', ar: 'إذا كان بند غير واضح، فينبغي أن تطلب استشارة قانونية.' },
      ],
    },
    vocabulary: [
      { word: 'sworn translation', meaningAr: 'ترجمة محلفة', example: 'The office requires a sworn translation.' },
      { word: 'notary', meaningAr: 'كاتب العدل / الموثق', example: 'The notary will verify our signatures.', ipa: 'ˈnoʊtəri' },
      { word: 'certified copy', meaningAr: 'نسخة مصدقة', example: 'Please bring a certified copy of the deed.' },
      { word: 'clause', meaningAr: 'بند (في عقد)', example: 'The clause states the payment terms.' },
      { word: 'legal advice', meaningAr: 'استشارة قانونية', example: 'You should get legal advice before signing.' },
      { word: 'valid', meaningAr: 'صالح', example: 'This permit is valid for one year.' },
      { word: 'signature', meaningAr: 'توقيع', example: 'Check every signature on the pages.' },
      { word: 'deed', meaningAr: 'سند ملكية', example: 'The deed lists both owners.' },
      { word: 'draft', meaningAr: 'مسودة', example: 'The lawyer sent us the first draft.' },
      { word: 'terms', meaningAr: 'الشروط / البنود', example: 'Read all the terms before you agree.' },
      { word: 'power of attorney', meaningAr: 'توكيل رسمي', example: 'She signed the papers with a power of attorney.' },
      { word: 'issue', meaningAr: 'يصدر (وثيقة)', example: 'They issued the certificate last week.' },
    ],
    scenario: [
      { en: 'Which documents do you need for the application?', ar: 'ما المستندات التي تحتاجونها للطلب؟', d: 1 },
      { en: 'We need the original deed and two certified copies.', ar: 'نحتاج السند الأصلي ونسختين مصدقتين.', d: 1 },
      { en: 'Does the certificate need a sworn translation?', ar: 'هل تحتاج الشهادة إلى ترجمة محلفة؟', d: 2 },
      { en: 'Yes, all foreign documents must be translated by a sworn translator.', ar: 'نعم، يجب ترجمة كل المستندات الأجنبية عبر مترجم محلف.', d: 3 },
      { en: 'The notary will verify the signatures this afternoon.', ar: 'سيتحقق الموثق من التواقيع بعد الظهر.', d: 2 },
      { en: 'Please bring your passport and a certified copy of it.', ar: 'أحضر جواز سفرك ونسخة مصدقة منه من فضلك.', d: 2 },
      { en: 'The clause states that the rent rises every year.', ar: 'ينص البند على أن الإيجار يرتفع كل سنة.', d: 2 },
      { en: 'If a clause is unclear, you should get legal advice.', ar: 'إذا كان بند غير واضح، فينبغي أن تطلب استشارة قانونية.', d: 3 },
      { en: 'What does the final clause actually mean?', ar: 'ماذا يعني البند الأخير في الحقيقة؟', d: 2 },
      { en: 'It means the buyer pays all the transfer fees.', ar: 'يعني أن المشتري يدفع كل رسوم النقل.', d: 2 },
      { en: 'The draft was sent to the lawyer yesterday.', ar: 'أُرسلت المسودة إلى المحامي أمس.', d: 2 },
      { en: 'She returned it with three small corrections.', ar: 'أعادته مع ثلاثة تعديلات صغيرة.', d: 1 },
      { en: 'Is this permit still valid?', ar: 'هل هذا التصريح ما زال صالحا؟', d: 1 },
      { en: 'No, it expired last month, so we must renew it.', ar: 'لا، انتهت صلاحيته الشهر الماضي، لذا يجب أن نجدده.', d: 2 },
      { en: 'Her father cannot attend, so she will use a power of attorney.', ar: 'لا يستطيع والدها الحضور، لذا ستستخدم توكيلا رسميا.', d: 3 },
      { en: 'The terms look fair, but I will read them again tonight.', ar: 'تبدو الشروط عادلة، لكنني سأقرأها مرة أخرى الليلة.', d: 2 },
      { en: 'Where is the nearest notary office?', ar: 'أين أقرب مكتب موثق؟', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'You will need {D} for the {P}.', arTmpl: 'ستحتاج إلى {D_ar} من أجل {P_ar}.',
        slots: {
          D: [
            { en: 'a sworn translation', ar: 'ترجمة محلفة' }, { en: 'a certified copy', ar: 'نسخة مصدقة' },
            { en: 'the original deed', ar: 'السند الأصلي' }, { en: 'a valid passport', ar: 'جواز سفر ساري المفعول' },
            { en: 'a power of attorney', ar: 'توكيل رسمي' },
          ],
          P: [
            { en: 'application', ar: 'الطلب' }, { en: 'appointment', ar: 'الموعد' },
            { en: 'registration', ar: 'التسجيل' }, { en: 'interview', ar: 'المقابلة' },
          ],
        },
        tags: ['legal', 'documents'], d: 1, limit: 12,
      },
      {
        tmpl: 'The clause states that {C}.', arTmpl: 'ينص البند على أن {C_ar}.',
        slots: {
          C: [
            { en: 'the rent is reviewed every year', ar: 'الإيجار يُراجع كل سنة' }, { en: 'notice must be given in writing', ar: 'يجب تقديم الإشعار كتابة' },
            { en: 'the deposit is refundable', ar: 'العربون قابل للاسترداد' }, { en: 'both owners sign the deed', ar: 'يوقّع الطرفان السند' },
            { en: 'disputes go to a local court', ar: 'تُحال النزاعات إلى محكمة محلية' }, { en: 'the contract ends in December', ar: 'ينتهي العقد في ديسمبر' },
            { en: 'the seller pays the agent fee', ar: 'البائع يدفع أجرة الوسيط' },
          ],
        },
        tags: ['legal', 'clauses'], d: 3, limit: 7,
      },
      {
        tmpl: 'Please bring {Do} to the notary.', arTmpl: 'أحضر {Do_ar} إلى الموثق من فضلك.',
        slots: {
          Do: [
            { en: 'the original document', ar: 'المستند الأصلي' }, { en: 'two passport photos', ar: 'صورتين شخصيتين' },
            { en: 'your national ID', ar: 'هويتك الوطنية' }, { en: 'the signed draft', ar: 'المسودة الموقعة' },
            { en: 'the translation and the original', ar: 'الترجمة والأصل' }, { en: 'your bank statement', ar: 'كشف حسابك البنكي' },
          ],
        },
        tags: ['legal', 'documents'], d: 2, limit: 6,
      },
      {
        tmpl: 'If the {N} is unclear, get legal advice.', arTmpl: 'إذا كان {N_ar} غير واضح، فاطلب استشارة قانونية.',
        slots: {
          N: [
            { en: 'clause', ar: 'البند' }, { en: 'wording', ar: 'الصياغة' },
            { en: 'translation', ar: 'الترجمة' }, { en: 'stamp', ar: 'الختم' },
            { en: 'meaning', ar: 'المعنى' },
          ],
        },
        tags: ['legal', 'advice'], d: 2, limit: 5,
      },
      {
        tmpl: '{S} must be signed in front of the notary.', arTmpl: 'يجب توقيع {S_ar} أمام الموثق.',
        slots: {
          S: [
            { en: 'The contract', ar: 'العقد' }, { en: 'The deed', ar: 'السند' },
            { en: 'The power of attorney', ar: 'التوكيل الرسمي' }, { en: 'The sales agreement', ar: 'اتفاقية البيع' },
          ],
        },
        tags: ['legal', 'passive'], d: 3, limit: 4,
      },
    ],
    fills: [
      { en: 'Does the certificate need a sworn translation?', ar: 'هل تحتاج الشهادة إلى ترجمة محلفة؟', word: 'sworn', hint: 'محلفة' },
      { en: 'The notary will verify the signatures this afternoon.', ar: 'سيتحقق الموثق من التواقيع بعد الظهر.', word: 'notary', hint: 'الموثق' },
      { en: 'Please bring your passport and a certified copy of it.', ar: 'أحضر جواز سفرك ونسخة مصدقة منه من فضلك.', word: 'certified', hint: 'مصدقة' },
      { en: 'The clause states that the rent rises every year.', ar: 'ينص البند على أن الإيجار يرتفع كل سنة.', word: 'clause', hint: 'بند' },
      { en: 'If a clause is unclear, you should get legal advice.', ar: 'إذا كان بند غير واضح، فينبغي أن تطلب استشارة قانونية.', word: 'advice', hint: 'استشارة' },
      { en: 'The draft was sent to the lawyer yesterday.', ar: 'أُرسلت المسودة إلى المحامي أمس.', word: 'draft', hint: 'مسودة' },
      { en: 'No, it expired last month, so we must renew it.', ar: 'لا، انتهت صلاحيته الشهر الماضي، لذا يجب أن نجدده.', word: 'renew', hint: 'يجدد' },
      { en: 'She will use a power of attorney.', ar: 'ستستخدم توكيلا رسميا.', word: 'attorney', hint: 'توكيل رسمي' },
    ],
    orders: [
      { en: 'We need the original deed and two certified copies.', ar: 'نحتاج السند الأصلي ونسختين مصدقتين.' },
      { en: 'The notary will verify the signatures this afternoon.', ar: 'سيتحقق الموثق من التواقيع بعد الظهر.' },
      { en: 'If a clause is unclear, you should get legal advice.', ar: 'إذا كان بند غير واضح، فينبغي أن تطلب استشارة قانونية.' },
      { en: 'The draft was sent to the lawyer yesterday.', ar: 'أُرسلت المسودة إلى المحامي أمس.' },
      { en: 'The contract must be signed in front of the notary.', ar: 'يجب توقيع العقد أمام الموثق.' },
      { en: 'Where is the nearest notary office?', ar: 'أين أقرب مكتب موثق؟' },
    ],
    mc: [
      { question: 'A sworn translation is:', options: ['an official translation by a certified translator', 'a quick phone translation', 'a song', 'a handwriting sample'], answerIndex: 0, ar: 'الترجمة المحلفة هي:' },
      { question: 'Where do people sign important documents?', options: ['in front of the notary', 'in the supermarket', 'on the bus', 'in the garden'], answerIndex: 0, ar: 'أين يوقّع الناس المستندات المهمة؟' },
      { question: 'A certified copy is:', options: ['an official copy that is as valid as the original', 'a drawing', 'a photo on your phone', 'an empty page'], answerIndex: 0, ar: 'النسخة المصدقة هي:' },
      { question: '"The clause states that the deposit is refundable" tells us:', options: ['you can get the deposit back', 'the deposit is lost', 'the deposit doubles every year', 'there is no deposit'], answerIndex: 0, ar: 'جملة The clause states that the deposit is refundable تخبرنا أن:' },
      { question: 'If a clause is unclear, you should:', options: ['get legal advice', 'sign quickly', 'delete the page', 'guess the meaning'], answerIndex: 0, ar: 'إذا كان بند غير واضح، فينبغي أن:' },
    ],
  },

  /* ================= lesson 227 — Filing an Insurance Claim ================= */
  {
    num: 227,
    tags: ['insurance', 'claims'],
    objectives: [
      'Open a claim and describe the damage',
      'Ask why a claim was rejected or approved',
      'Provide supporting documents for an assessment',
    ],
    grammar: {
      explanation: 'Insurance language uses the passive for decisions: "The claim was approved", "The claim was rejected because a document was missing". Present perfect passive asks about status: "Has the claim been approved yet?". Talk about requirements with must: "The policyholder must report every incident within seven days". The future passive announces payments: "The settlement will be paid to your bank account". If a claim is refused, you can appeal within thirty days.',
      explanationAr: 'تستخدم لغة التأمين المبني للمجهول للقرارات: The claim was approved وThe claim was rejected because a document was missing. ويسأل المضارع التام المبني للمجهول عن الحالة: Has the claim been approved yet؟ وتُذكر المتطلبات بـ must: The policyholder must report every incident within seven days. ويعلن المبني للمجهول المستقبلي عن الدفع: The settlement will be paid to your bank account. وإذا رُفضت المطالبة يمكنك الاستئناف خلال ثلاثين يوما.',
      examples: [
        { en: 'The claim was rejected because a document was missing.', ar: 'رُفضت المطالبة لأن مستندا كان مفقودا.' },
        { en: 'Has the claim been approved yet?', ar: 'هل وُافقت على المطالبة بعد؟' },
        { en: 'The settlement will be paid to your bank account.', ar: 'ستُدفع التسوية إلى حسابك البنكي.' },
      ],
    },
    vocabulary: [
      { word: 'file a claim', meaningAr: 'يقدم مطالبة', example: 'I need to file a claim today.' },
      { word: 'claim', meaningAr: 'مطالبة', example: 'The claim was rejected last week.', ipa: 'kleɪm' },
      { word: 'rejected', meaningAr: 'مرفوض', example: 'A rejected claim can be appealed.' },
      { word: 'approved', meaningAr: 'مقبول / معتمد', example: 'Our claim was approved within two weeks.' },
      { word: 'supporting documents', meaningAr: 'المستندات الداعمة', example: 'Please attach the supporting documents.' },
      { word: 'assess', meaningAr: 'يقيّم / يعاين', example: 'An expert will assess the damage.' },
      { word: 'damage', meaningAr: 'ضرر / أضرار', example: 'The water damage ruined the floor.' },
      { word: 'policyholder', meaningAr: 'حامل الوثيقة', example: 'The policyholder must report the incident quickly.' },
      { word: 'premium', meaningAr: 'قسط التأمين', example: 'The premium rises after a big claim.' },
      { word: 'coverage', meaningAr: 'التغطية', example: 'Water damage is not in our coverage.' },
      { word: 'appeal', meaningAr: 'يستأنف / استئناف', example: 'You can appeal within thirty days.' },
      { word: 'settlement', meaningAr: 'تسوية (مبلغ)', example: 'The settlement arrived on Sunday.' },
    ],
    scenario: [
      { en: 'I need to file a claim for the storm damage.', ar: 'أحتاج إلى تقديم مطالبة عن أضرار العاصفة.', d: 1 },
      { en: 'When did the damage happen?', ar: 'متى وقع الضرر؟', d: 1 },
      { en: 'It happened during the storm last Thursday.', ar: 'حدث أثناء العاصفة الخميس الماضي.', d: 1 },
      { en: 'Please attach the supporting documents before Friday.', ar: 'أرفق المستندات الداعمة قبل الجمعة من فضلك.', d: 2 },
      { en: 'Which documents count as supporting documents?', ar: 'ما المستندات التي تُعد مستندات داعمة؟', d: 2 },
      { en: 'Photos, the receipt and the repair estimate, for example.', ar: 'مثلا الصور والإيصال وتقدير تكلفة الإصلاح.', d: 2 },
      { en: 'Has the claim been approved yet?', ar: 'هل وُافقت على المطالبة بعد؟', d: 3 },
      { en: 'No, it has not; an assessor will assess the damage first.', ar: 'لا، لم توافق بعد؛ سيعاين الخبير الأضرار أولا.', d: 3 },
      { en: 'Our first claim was rejected because a photo was missing.', ar: 'رُفضت مطالبتنا الأولى لأن صورة كانت مفقودة.', d: 2 },
      { en: 'Why was the second claim rejected?', ar: 'لماذا رُفضت المطالبة الثانية؟', d: 2 },
      { en: 'The policy does not cover flood damage, unfortunately.', ar: 'لا تغطي الوثيقة أضرار الفيضان للأسف.', d: 2 },
      { en: 'Can I appeal against that decision?', ar: 'هل يمكنني الاستئناف ضد ذلك القرار؟', d: 2 },
      { en: 'Yes, you can appeal within thirty days.', ar: 'نعم، يمكنك الاستئناف خلال ثلاثين يوما.', d: 2 },
      { en: 'The claim was approved this morning.', ar: 'وُافقت على المطالبة هذا الصباح.', d: 1 },
      { en: 'The settlement will be paid to your bank account.', ar: 'ستُدفع التسوية إلى حسابك البنكي.', d: 2 },
      { en: 'The policyholder must report every incident within seven days.', ar: 'يجب على حامل الوثيقة الإبلاغ عن كل حادث خلال سبعة أيام.', d: 3 },
      { en: 'Thank you; the service was faster than I expected.', ar: 'شكرا؛ كانت الخدمة أسرع مما توقعت.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'I need to file a claim for the {Dm}.', arTmpl: 'أحتاج إلى تقديم مطالبة عن {Dm_ar}.',
        slots: {
          Dm: [
            { en: 'water damage', ar: 'أضرار المياه' }, { en: 'car accident', ar: 'حادث السيارة' },
            { en: 'broken window', ar: 'النافذة المكسورة' }, { en: 'stolen laptop', ar: 'الحاسوب المحمول المسروق' },
            { en: 'fire damage', ar: 'أضرار الحريق' }, { en: 'flight delay', ar: 'تأخير الرحلة' },
          ],
        },
        tags: ['insurance', 'claims'], d: 1, limit: 6,
      },
      {
        tmpl: 'The claim was {ST} {T}.', arTmpl: 'كانت المطالبة {ST_ar} {T_ar}.',
        slots: {
          ST: [
            { en: 'approved', ar: 'مقبولة' }, { en: 'rejected', ar: 'مرفوضة' },
            { en: 'delayed', ar: 'متأخرة' }, { en: 'assessed', ar: 'مُقيّمة' },
          ],
          T: [
            { en: 'on Sunday', ar: 'يوم الأحد' }, { en: 'last week', ar: 'الأسبوع الماضي' },
            { en: 'yesterday', ar: 'أمس' }, { en: 'within two weeks', ar: 'خلال أسبوعين' },
            { en: 'on Friday', ar: 'يوم الجمعة' },
          ],
        },
        tags: ['insurance', 'passive'], d: 2, limit: 9,
      },
      {
        tmpl: 'Please attach {A} to the form.', arTmpl: 'أرفق {A_ar} بالنموذج من فضلك.',
        slots: {
          A: [
            { en: 'the supporting documents', ar: 'المستندات الداعمة' }, { en: 'two photos of the damage', ar: 'صورتين للأضرار' },
            { en: 'the original receipt', ar: 'الإيصال الأصلي' }, { en: 'the repair estimate', ar: 'تقدير تكلفة الإصلاح' },
            { en: 'the police report', ar: 'بلاغ الشرطة' },
          ],
        },
        tags: ['insurance', 'documents'], d: 2, limit: 5,
      },
      {
        tmpl: '{S} must report the incident within {D}.', arTmpl: 'يجب على {S_ar} الإبلاغ عن الحادث خلال {D_ar}.',
        slots: {
          S: [
            { en: 'The policyholder', ar: 'حامل الوثيقة' }, { en: 'The driver', ar: 'السائق' },
            { en: 'The tenant', ar: 'المستأجر' }, { en: 'The shop owner', ar: 'صاحب المحل' },
          ],
          D: [
            { en: 'seven days', ar: 'سبعة أيام' }, { en: 'twenty-four hours', ar: 'أربع وعشرين ساعة' },
            { en: 'one week', ar: 'أسبوع واحد' }, { en: 'three working days', ar: 'ثلاثة أيام عمل' },
          ],
        },
        tags: ['insurance', 'requirements'], d: 2, limit: 8,
      },
      {
        tmpl: 'Does the policy cover {Cv}?', arTmpl: 'هل تغطي الوثيقة {Cv_ar}؟',
        slots: {
          Cv: [
            { en: 'flood damage', ar: 'أضرار الفيضان' }, { en: 'theft at home', ar: 'السرقة في المنزل' },
            { en: 'glass breakage', ar: 'كسر الزجاج' }, { en: 'natural disasters', ar: 'الكوارث الطبيعية' },
            { en: 'car rental after an accident', ar: 'تأجير سيارة بعد حادث' },
          ],
        },
        tags: ['insurance', 'coverage'], d: 2, limit: 5,
      },
    ],
    fills: [
      { en: 'I need to file a claim for the storm damage.', ar: 'أحتاج إلى تقديم مطالبة عن أضرار العاصفة.', word: 'claim', hint: 'مطالبة' },
      { en: 'Please attach the supporting documents before Friday.', ar: 'أرفق المستندات الداعمة قبل الجمعة من فضلك.', word: 'supporting', hint: 'داعمة' },
      { en: 'Our first claim was rejected because a photo was missing.', ar: 'رُفضت مطالبتنا الأولى لأن صورة كانت مفقودة.', word: 'rejected', hint: 'مرفوضة' },
      { en: 'Yes, you can appeal within thirty days.', ar: 'نعم، يمكنك الاستئناف خلال ثلاثين يوما.', word: 'appeal', hint: 'استئناف' },
      { en: 'The settlement will be paid to your bank account.', ar: 'ستُدفع التسوية إلى حسابك البنكي.', word: 'settlement', hint: 'تسوية' },
      { en: 'An assessor will assess the damage on Monday.', ar: 'سيعاين الخبير الأضرار يوم الاثنين.', word: 'assess', hint: 'يعاين' },
      { en: 'The policy does not cover flood damage, unfortunately.', ar: 'لا تغطي الوثيقة أضرار الفيضان للأسف.', word: 'cover', hint: 'تغطي' },
      { en: 'Photos, the receipt and the repair estimate, for example.', ar: 'مثلا الصور والإيصال وتقدير تكلفة الإصلاح.', word: 'receipt', hint: 'إيصال' },
    ],
    orders: [
      { en: 'I need to file a claim for the storm damage.', ar: 'أحتاج إلى تقديم مطالبة عن أضرار العاصفة.' },
      { en: 'Has the claim been approved yet?', ar: 'هل وُافقت على المطالبة بعد؟' },
      { en: 'Our first claim was rejected because a photo was missing.', ar: 'رُفضت مطالبتنا الأولى لأن صورة كانت مفقودة.' },
      { en: 'The settlement will be paid to your bank account.', ar: 'ستُدفع التسوية إلى حسابك البنكي.' },
      { en: 'The policyholder must report every incident within seven days.', ar: 'يجب على حامل الوثيقة الإبلاغ عن كل حادث خلال سبعة أيام.' },
      { en: 'Why was the second claim rejected?', ar: 'لماذا رُفضت المطالبة الثانية؟' },
    ],
    mc: [
      { question: 'What do you do first after an incident covered by insurance?', options: ['file a claim', 'buy a new car', 'change your phone number', 'move house'], answerIndex: 0, ar: 'ماذا تفعل أولا بعد حادثة تغطيها وثيقة التأمين؟' },
      { question: 'The claim was rejected because a document was missing. What should you do?', options: ['send the missing document and appeal', 'forget the claim', 'pay cash', 'call a taxi'], answerIndex: 0, ar: 'رُفضت المطالبة لأن مستندا كان مفقودا، فماذا تفعل؟' },
      { question: 'What are supporting documents?', options: ['photos, receipts and estimates that prove the damage', 'letters from friends', 'old birthday cards', 'train tickets'], answerIndex: 0, ar: 'ما هي المستندات الداعمة؟' },
      { question: 'Who will assess the damage?', options: ['an assessor from the insurance company', 'the neighbor', 'the postman', 'the barber'], answerIndex: 0, ar: 'من سيعاين الأضرار؟' },
      { question: 'The settlement will be paid to your bank account. "Settlement" means:', options: ['the money the insurance pays you', 'the monthly bill', 'the police report', 'the rent'], answerIndex: 0, ar: 'في جملة The settlement will be paid to your bank account ما معنى settlement؟' },
    ],
  },
];
