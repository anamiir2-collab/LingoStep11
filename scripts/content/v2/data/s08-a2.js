/* ============================================================
   v2 section data — s08-a2.js
   Work & Money · lessons 175–178 (first day, meetings, emails,
   business phone calls)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 175 — The First Day at Work ================= */
  {
    num: 175,
    tags: ['work', 'office', 'first-day'],
    objectives: [
      'Talk about your first day at a new job',
      'Ask where things are in the office',
      'Introduce yourself to new colleagues',
    ],
    grammar: {
      explanation: 'On the first day at work you use short, simple sentences. Point to things with "This is my desk" and "These are my colleagues" (singular "this", plural "these"). Ask where places are with "Where is ...?" — "Where is the meeting room?". Ask for help politely with "Can you help me, please?". Use the verb be to describe feelings: "I am excited", "I am a little nervous". Reassure yourself with the negative: "I am not late".',
      explanationAr: 'في أول يوم عمل تستخدم جملا قصيرة وبسيطة. أشِر إلى الأشياء بـ This is my desk وThese are my colleagues (المفرد this والجمع these). واسأل عن الأماكن بـ Where is ...؟ مثل Where is the meeting room؟ واطلب المساعدة بأدب بـ Can you help me, please؟ وصف مشاعرك بفعل الكينونة: I am excited، I am a little nervous. وطمّن نفسك بالنفي: I am not late.',
      examples: [
        { en: 'Today is my first day at work.', ar: 'اليوم أول يوم عمل لي.' },
        { en: 'Where is the meeting room?', ar: 'أين قاعة الاجتماعات؟' },
        { en: 'These are my colleagues, Omar and Khalid.', ar: 'هؤلاء زملائي عمر وخالد.' },
      ],
    },
    vocabulary: [
      { word: 'first day', meaningAr: 'اليوم الأول', example: 'Today is my first day at work.', ipa: 'fɜːrst deɪ' },
      { word: 'desk', meaningAr: 'مكتب', example: 'This is my desk.' },
      { word: 'office', meaningAr: 'مكتب / مكان العمل', example: 'My office is on the second floor.' },
      { word: 'team', meaningAr: 'فريق', example: 'Welcome to the team, Sara!' },
      { word: 'colleague', meaningAr: 'زميل عمل', example: 'This is Sara, our new colleague.' },
      { word: 'meeting room', meaningAr: 'قاعة الاجتماعات', example: 'Where is the meeting room?' },
      { word: 'elevator', meaningAr: 'مصعد', example: 'It is next to the elevator.' },
      { word: 'badge', meaningAr: 'بطاقة تعريف', example: 'This is my badge.' },
      { word: 'floor', meaningAr: 'طابق', example: 'His office is on the second floor.' },
      { word: 'introduce', meaningAr: 'يعرّف', example: 'Let me introduce you to the team.' },
      { word: 'excited', meaningAr: 'متحمس', example: 'I am excited about my new job.' },
      { word: 'nervous', meaningAr: 'متوتر', example: 'I am a little nervous, but I am excited.' },
    ],
    scenario: [
      { en: 'Today is my first day at work.', ar: 'اليوم أول يوم عمل لي.', d: 1 },
      { en: 'I am a little nervous, but I am excited.', ar: 'أنا متوتر قليلا، لكنني متحمس.', d: 1 },
      { en: 'This is my desk.', ar: 'هذا مكتبي.', d: 1 },
      { en: 'My computer and my phone are on the desk.', ar: 'حاسوبي وهاتفي على المكتب.', d: 1 },
      { en: 'Where is the meeting room?', ar: 'أين قاعة الاجتماعات؟', d: 1 },
      { en: 'It is next to the elevator.', ar: 'إنها بجانب المصعد.', d: 1 },
      { en: 'Excuse me, where is the boss\'s office?', ar: 'عفوا، أين مكتب المدير؟', d: 2 },
      { en: 'His office is on the second floor.', ar: 'مكتبه في الطابق الثاني.', d: 1 },
      { en: 'This is Sara, our new colleague.', ar: 'هذه سارة، زميلتنا الجديدة.', d: 2 },
      { en: 'Welcome to the team, Sara!', ar: 'أهلا بك في الفريق يا سارة!', d: 1 },
      { en: 'Let me introduce you to the team.', ar: 'دعني أعرّفك بالفريق.', d: 1 },
      { en: 'These are my colleagues, Omar and Khalid.', ar: 'هؤلاء زملائي عمر وخالد.', d: 2 },
      { en: 'We have a team meeting at ten o\'clock.', ar: 'لدينا اجتماع للفريق في الساعة العاشرة.', d: 2 },
      { en: 'Please do not be late.', ar: 'لا تتأخر من فضلك.', d: 2 },
      { en: 'I am not late. The meeting starts at ten.', ar: 'أنا لست متأخرا. يبدأ الاجتماع في العاشرة.', d: 2 },
      { en: 'Can you help me with this report, please?', ar: 'هل يمكنك مساعدتي في هذا التقرير من فضلك؟', d: 2 },
      { en: 'Thank you! My first day is great.', ar: 'شكرا! يومي الأول رائع.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'This is my {O}.', arTmpl: '{O_ar}.',
        slots: {
          O: [
            { en: 'desk', ar: 'هذا مكتبي' }, { en: 'computer', ar: 'هذا حاسوبي' },
            { en: 'phone', ar: 'هذا هاتفي' }, { en: 'badge', ar: 'هذه بطاقتي' },
            { en: 'calendar', ar: 'هذا تقويمي' }, { en: 'drawer', ar: 'هذا درجي' },
            { en: 'screen', ar: 'هذه شاشتي' },
          ],
        },
        tags: ['office', 'first-day'], d: 1, limit: 7,
      },
      {
        tmpl: 'Where is the {R}?', arTmpl: 'أين {R_ar}؟',
        slots: {
          R: [
            { en: 'meeting room', ar: 'قاعة الاجتماعات' }, { en: 'manager\'s office', ar: 'مكتب المدير' },
            { en: 'printer', ar: 'الطابعة' }, { en: 'kitchen', ar: 'المطبخ' },
            { en: 'elevator', ar: 'المصعد' }, { en: 'exit', ar: 'المخرج' },
            { en: 'parking', ar: 'موقف السيارات' }, { en: 'reception', ar: 'الاستقبال' },
          ],
        },
        tags: ['office', 'questions'], d: 1, limit: 8,
      },
      {
        tmpl: 'Let me introduce you to {P}.', arTmpl: 'دعني أعرّفك {P_ar}.',
        slots: {
          P: [
            { en: 'my team', ar: 'بفريقي' }, { en: 'my manager', ar: 'بمديري' },
            { en: 'our guests', ar: 'بضيوفنا' }, { en: 'the new intern', ar: 'بالمتدرب الجديد' },
            { en: 'my colleagues', ar: 'بزملائي' }, { en: 'everyone', ar: 'بالجميع' },
            { en: 'the visitors', ar: 'بالزوار' }, { en: 'our neighbors', ar: 'بجيراننا' },
          ],
        },
        tags: ['introductions', 'work'], d: 2, limit: 8,
      },
      {
        tmpl: 'I am {F} about my new job.', arTmpl: 'أنا {F_ar} بعملي الجديد.',
        slots: {
          F: [
            { en: 'excited', ar: 'متحمس' }, { en: 'happy', ar: 'سعيد جدا' },
            { en: 'ready', ar: 'جاهز' }, { en: 'a little nervous', ar: 'متوتر قليلا' },
            { en: 'proud', ar: 'فخور' }, { en: 'lucky', ar: 'محظوظ' },
          ],
        },
        tags: ['feelings', 'work'], d: 2, limit: 6,
      },
      {
        tmpl: 'My office is on the {F} floor.', arTmpl: 'مكتبي في الطابق {F_ar}.',
        slots: {
          F: [
            { en: 'first', ar: 'الأول' }, { en: 'second', ar: 'الثاني' },
            { en: 'third', ar: 'الثالث' }, { en: 'fourth', ar: 'الرابع' },
            { en: 'fifth', ar: 'الخامس' }, { en: 'sixth', ar: 'السادس' },
          ],
        },
        tags: ['office', 'numbers'], d: 1, limit: 6,
      },
    ],
    fills: [
      { en: 'Today is my first day at work.', ar: 'اليوم أول يوم عمل لي.', word: 'first', hint: 'الأول' },
      { en: 'This is my desk.', ar: 'هذا مكتبي.', word: 'desk', hint: 'أثاث المكتب' },
      { en: 'Where is the meeting room?', ar: 'أين قاعة الاجتماعات؟', word: 'meeting' },
      { en: 'It is next to the elevator.', ar: 'إنها بجانب المصعد.', word: 'elevator', hint: 'مصعد' },
      { en: 'Let me introduce you to the team.', ar: 'دعني أعرّفك بالفريق.', word: 'team', hint: 'فريق' },
      { en: 'Please do not be late.', ar: 'لا تتأخر من فضلك.', word: 'late', hint: 'متأخر' },
      { en: 'Can you help me with this report, please?', ar: 'هل يمكنك مساعدتي في هذا التقرير من فضلك؟', word: 'help' },
      { en: 'Welcome to the team, Sara!', ar: 'أهلا بك في الفريق يا سارة!', word: 'Welcome' },
    ],
    orders: [
      { en: 'Today is my first day at work.', ar: 'اليوم أول يوم عمل لي.' },
      { en: 'This is my desk and my computer.', ar: 'هذا مكتبي وحاسوبي.' },
      { en: 'Where is the meeting room, please?', ar: 'أين قاعة الاجتماعات من فضلك؟' },
      { en: 'His office is on the second floor.', ar: 'مكتبه في الطابق الثاني.' },
      { en: 'Let me introduce you to the team.', ar: 'دعني أعرّفك بالفريق.' },
      { en: 'Can you help me with this report, please?', ar: 'هل يمكنك مساعدتي في هذا التقرير من فضلك؟' },
    ],
    mc: [
      { question: 'You meet your team for the first time. You say:', options: ['Nice to meet you all', 'Good night', 'I am late again', 'See you never'], answerIndex: 0, ar: 'تقابل فريقك لأول مرة، فتقول:' },
      { question: '"Where is the meeting room?" is:', options: ['a question', 'a goodbye', 'a thank-you', 'a phone number'], answerIndex: 0, ar: 'جملة Where is the meeting room? هي:' },
      { question: 'Your boss says "Welcome to the team!" This means:', options: ['أهلا بك في الفريق', 'أنت متأخر', 'الاجتماع ملغى', 'أغلق الباب'], answerIndex: 0, ar: 'قال لك مديرك Welcome to the team! أي يعني:' },
      { question: 'The elevator takes you to:', options: ['another floor', 'another country', 'the kitchen only', 'your home'], answerIndex: 0, ar: 'المصعد يأخذك إلى:' },
      { question: 'Which sentence is a polite request?', options: ['Can you help me, please?', 'This is my desk.', 'I am excited.', 'It is Monday.'], answerIndex: 0, ar: 'أي جملة هي طلب مهذب؟' },
    ],
  },

  /* ================= lesson 176 — Business Meetings ================= */
  {
    num: 176,
    tags: ['work', 'meetings'],
    objectives: [
      'Start and manage a business meeting',
      'Talk about the agenda and minutes',
      'Assign and confirm action items',
    ],
    grammar: {
      explanation: 'Meetings have their own fixed phrases. Start with "Good morning, everyone. Let\'s get started." The "let\'s" structure means "let us" plus the base verb: "Let\'s postpone this item". Use "Can we move to the next point?" to change topics, and "Could you ...?" for polite requests. For finished actions with a present result, use the present perfect: "Have you read the minutes?", "We have not discussed the budget yet", "Ten people have confirmed so far". Real conditions use if + present: "If we finish early, we can discuss the new project".',
      explanationAr: 'لاجتماعات العمل عبارات ثابتة. ابدأ بـ Good morning, everyone. Let\'s get started. وبنية let\'s تعني let us مع المصدر: Let\'s postpone this item. ولتغيير الموضوع قل Can we move to the next point؟ وللطلب المهذب Could you ...؟ وللأفعال المنتهية بأثر حاضر استخدم المضارع التام: Have you read the minutes؟ وWe have not discussed the budget yet وTen people have confirmed so far. والشرط الحقيقي بـ if مع المضارع: If we finish early, we can discuss the new project.',
      examples: [
        { en: 'Good morning, everyone. Let\'s get started.', ar: 'صباح الخير جميعا. لنبدأ.' },
        { en: 'Have you read the minutes from last week?', ar: 'هل قرأت محضر الاجتماع الأسبوع الماضي؟' },
        { en: 'If we finish early, we can discuss the new project.', ar: 'إذا انتهينا مبكرا، يمكننا مناقشة المشروع الجديد.' },
      ],
    },
    vocabulary: [
      { word: 'agenda', meaningAr: 'جدول الأعمال', example: 'We have a lot on the agenda today.', ipa: 'əˈdʒɛndə' },
      { word: 'minutes', meaningAr: 'محضر الاجتماع', example: 'I will write the minutes today.' },
      { word: 'action items', meaningAr: 'بنود العمل / المهام', example: 'Could you send me the action items, please?' },
      { word: 'attend', meaningAr: 'يحضر', example: 'How many people are attending the meeting?' },
      { word: 'confirm', meaningAr: 'يؤكد', example: 'Ten people have confirmed so far.' },
      { word: 'postpone', meaningAr: 'يؤجل', example: 'Let\'s postpone this item until next week.' },
      { word: 'decision', meaningAr: 'قرار', example: 'Sorry, I do not agree with this decision.' },
      { word: 'discuss', meaningAr: 'يناقش', example: 'We have not discussed the budget yet.' },
      { word: 'point', meaningAr: 'بند / نقطة', example: 'Can we move to the next point?' },
      { word: 'notes', meaningAr: 'ملاحظات', example: 'Who is taking notes today?' },
      { word: 'weekly', meaningAr: 'أسبوعي', example: 'This is our weekly meeting.' },
      { word: 'clear', meaningAr: 'واضح', example: 'Yes, I have. They are very clear.' },
    ],
    scenario: [
      { en: 'Good morning, everyone. Let\'s get started.', ar: 'صباح الخير جميعا. لنبدأ.', d: 1 },
      { en: 'We have a lot on the agenda today.', ar: 'لدينا الكثير في جدول الأعمال اليوم.', d: 1 },
      { en: 'First, let\'s look at the sales numbers for March.', ar: 'أولا، لننظر إلى أرقام المبيعات لشهر مارس.', d: 1 },
      { en: 'Have you read the minutes from last week?', ar: 'هل قرأت محضر الاجتماع الأسبوع الماضي؟', d: 2 },
      { en: 'Yes, I have. They are very clear.', ar: 'نعم، قرأتها. إنها واضحة جدا.', d: 1 },
      { en: 'Can we move to the next point?', ar: 'هل يمكننا الانتقال إلى البند التالي؟', d: 1 },
      { en: 'Sorry, I do not agree with this decision.', ar: 'عذرا، لا أوافق على هذا القرار.', d: 2 },
      { en: 'Could you send me the action items, please?', ar: 'هل ترسل لي بنود العمل من فضلك؟', d: 2 },
      { en: 'Who is taking notes today?', ar: 'من يدون الملاحظات اليوم؟', d: 1 },
      { en: 'I am. I will write the minutes.', ar: 'أنا. سأكتب محضر الاجتماع.', d: 1 },
      { en: 'If we finish early, we can discuss the new project.', ar: 'إذا انتهينا مبكرا، يمكننا مناقشة المشروع الجديد.', d: 2 },
      { en: 'The meeting has already started, so please sit down.', ar: 'بدأ الاجتماع بالفعل، فاجلس من فضلك.', d: 2 },
      { en: 'We have not discussed the budget yet.', ar: 'لم نناقش الموازنة بعد.', d: 2 },
      { en: 'Let\'s postpone this item until next week.', ar: 'لنؤجل هذا البند إلى الأسبوع القادم.', d: 2 },
      { en: 'How many people are attending the meeting?', ar: 'كم شخصا يحضر الاجتماع؟', d: 2 },
      { en: 'Ten people have confirmed so far.', ar: 'عشرة أشخاص أكدوا الحضور حتى الآن.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Let\'s get started with {T}.', arTmpl: 'لنبدأ {T_ar}.',
        slots: {
          T: [
            { en: 'the sales report', ar: 'بتقرير المبيعات' }, { en: 'the first item', ar: 'بالبند الأول' },
            { en: 'the budget', ar: 'بالموازنة' }, { en: 'the new project', ar: 'بالمشروع الجديد' },
            { en: 'today\'s agenda', ar: 'بجدول أعمال اليوم' }, { en: 'the weekly numbers', ar: 'بالأرقام الأسبوعية' },
          ],
        },
        tags: ['meetings'], d: 1, limit: 6,
      },
      {
        tmpl: 'Can we move to {N}?', arTmpl: 'هل يمكننا الانتقال إلى {N_ar}؟',
        slots: {
          N: [
            { en: 'the next point', ar: 'البند التالي' }, { en: 'the last item', ar: 'البند الأخير' },
            { en: 'item number four', ar: 'البند رقم أربعة' }, { en: 'the main topic', ar: 'الموضوع الرئيسي' },
            { en: 'the action items', ar: 'بنود العمل' }, { en: 'the final decision', ar: 'القرار النهائي' },
          ],
        },
        tags: ['meetings', 'questions'], d: 2, limit: 6,
      },
      {
        tmpl: '{S} will {V} the action items.', arTmpl: '{S_ar} {V_ar} بنود العمل.',
        slots: {
          S: B.NAMED_SING,
          V: (x) => [
            { en: 'send', ar: 'س' + B.arPresent('send', x.S.agr) },
            { en: 'write', ar: 'س' + B.arPresent('write', x.S.agr) },
            { en: 'check', ar: 'س' + B.arPresent('check', x.S.agr) },
            { en: 'finish', ar: 'س' + B.arPresent('finish', x.S.agr) },
          ],
        },
        tags: ['meetings', 'future'], d: 2, limit: 16,
      },
      {
        tmpl: 'If we finish early, we can {A}.', arTmpl: 'إذا انتهينا مبكرا، يمكننا {A_ar}.',
        slots: {
          A: [
            { en: 'go home', ar: 'العودة إلى البيت' }, { en: 'take a short break', ar: 'أخذ استراحة قصيرة' },
            { en: 'discuss the new project', ar: 'مناقشة المشروع الجديد' },
            { en: 'review the last items', ar: 'مراجعة البنود الأخيرة' },
            { en: 'order some coffee', ar: 'طلب بعض القهوة' },
          ],
        },
        tags: ['meetings', 'conditionals'], d: 2, limit: 5,
      },
      {
        tmpl: 'Item {N} on the agenda is {ADJ}.', arTmpl: 'البند {N_ar} في جدول الأعمال {ADJ_ar}.',
        slots: {
          N: [
            { en: 'one', ar: 'الأول' }, { en: 'two', ar: 'الثاني' }, { en: 'three', ar: 'الثالث' },
            { en: 'four', ar: 'الرابع' }, { en: 'five', ar: 'الخامس' },
          ],
          ADJ: [
            { en: 'important', ar: 'مهم' }, { en: 'urgent', ar: 'عاجل' },
            { en: 'easy', ar: 'سهل' }, { en: 'difficult', ar: 'صعب' },
            { en: 'clear', ar: 'واضح' },
          ],
        },
        tags: ['meetings', 'adjectives'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'Let\'s get started with the first item.', ar: 'لنبدأ بالبند الأول.', word: 'started', hint: 'ابدأ' },
      { en: 'We have a lot on the agenda today.', ar: 'لدينا الكثير في جدول الأعمال اليوم.', word: 'agenda', hint: 'جدول الأعمال' },
      { en: 'Have you read the minutes from last week?', ar: 'هل قرأت محضر الاجتماع الأسبوع الماضي؟', word: 'minutes', hint: 'محضر الاجتماع' },
      { en: 'Can we move to the next point?', ar: 'هل يمكننا الانتقال إلى البند التالي؟', word: 'point', hint: 'بند' },
      { en: 'Could you send me the action items, please?', ar: 'هل ترسل لي بنود العمل من فضلك؟', word: 'action', hint: 'بنود العمل' },
      { en: 'We have not discussed the budget yet.', ar: 'لم نناقش الموازنة بعد.', word: 'discussed', hint: 'يناقش' },
      { en: 'Let\'s postpone this item until next week.', ar: 'لنؤجل هذا البند إلى الأسبوع القادم.', word: 'postpone', hint: 'يؤجل' },
      { en: 'I will write the minutes today.', ar: 'سأكتب محضر الاجتماع اليوم.', word: 'write', hint: 'يكتب' },
    ],
    orders: [
      { en: 'Let\'s get started with the first item.', ar: 'لنبدأ بالبند الأول.' },
      { en: 'We have a lot on the agenda today.', ar: 'لدينا الكثير في جدول الأعمال اليوم.' },
      { en: 'Can we move to the next point, please?', ar: 'هل يمكننا الانتقال إلى البند التالي من فضلك؟' },
      { en: 'Have you read the minutes from last week?', ar: 'هل قرأت محضر الاجتماع الأسبوع الماضي؟' },
      { en: 'Could you send me the action items, please?', ar: 'هل ترسل لي بنود العمل من فضلك؟' },
      { en: 'We have not discussed the budget yet.', ar: 'لم نناقش الموازنة بعد.' },
    ],
    mc: [
      { question: 'Where do you find the list of topics for a meeting?', options: ['On the agenda', 'In the elevator', 'On a receipt', 'In a menu'], answerIndex: 0, ar: 'أين تجد قائمة مواضيع الاجتماع؟' },
      { question: 'What are "minutes" in a meeting?', options: ['محضر الاجتماع', 'الفاتورة', 'الراتب', 'استراحة القهوة'], answerIndex: 0, ar: 'ما المقصود بـ minutes في الاجتماع؟' },
      { question: 'Which sentence asks to continue the meeting?', options: ['Can we move to the next point?', 'The meeting is cancelled.', 'I lost my badge.', 'See you tomorrow.'], answerIndex: 0, ar: 'أي جملة تطلب متابعة الاجتماع؟' },
      { question: 'You want the tasks in writing. You ask for:', options: ['the action items', 'the coffee order', 'a day off', 'the Wi-Fi password'], answerIndex: 0, ar: 'تريد المهام مكتوبة، فتطلب:' },
      { question: '"We have not discussed the budget yet" is:', options: ['negative present perfect', 'past simple', 'a question', 'an imperative'], answerIndex: 0, ar: 'جملة We have not discussed the budget yet هي:' },
    ],
  },

  /* ================= lesson 177 — Professional Emails ================= */
  {
    num: 177,
    tags: ['work', 'emails'],
    objectives: [
      'Write the opening and closing of a professional email',
      'Mention attachments and follow up politely',
      'Reply to a client with fixed email phrases',
    ],
    grammar: {
      explanation: 'Professional emails start with "Dear Mr. Ali," or "Dear Ms. Sara," and say why you write: "I am writing regarding the invoice". Mention files with "I have attached the report" or "Attached you will find the signed contract". The present perfect is common in emails for recent actions: "I have sent two reminders", "I have not received a reply yet". Ask politely with "Could you please forward this message?". Close with "Best regards," plus your name, and offer help: "If you need more information, please contact me".',
      explanationAr: 'تبدأ الرسائل المهنية بـ Dear Mr. Ali أو Dear Ms. Sara ثم تذكر سبب الكتابة: I am writing regarding the invoice. وتذكر الملفات بـ I have attached the report أو Attached you will find the signed contract. والمضارع التام شائع في البريد للأفعال الحديثة: I have sent two reminders، I have not received a reply yet. واطلب بأدب بـ Could you please forward this message؟ واختم بـ Best regards مع اسمك، واعرض المساعدة: If you need more information, please contact me.',
      examples: [
        { en: 'Dear Mr. Ali, I am writing regarding the invoice.', ar: 'عزيزي السيد علي، أكتب بخصوص الفاتورة.' },
        { en: 'I have attached the report you asked for.', ar: 'أرفقت التقرير الذي طلبته.' },
        { en: 'Best regards, Sara.', ar: 'مع أطيب التحيات، سارة.' },
      ],
    },
    vocabulary: [
      { word: 'subject line', meaningAr: 'سطر الموضوع', example: 'Please write a clear subject line for every email.' },
      { word: 'attachment', meaningAr: 'مرفق', example: 'The attachment is too large to send.' },
      { word: 'attached', meaningAr: 'مرفق', example: 'I have attached the report you asked for.' },
      { word: 'reply', meaningAr: 'يرد / رد', example: 'Thank you for your quick reply.' },
      { word: 'forward', meaningAr: 'يعيد الإرسال', example: 'Could you please forward this message to the manager?' },
      { word: 'formal', meaningAr: 'رسمي', example: 'This email is formal, so no jokes.' },
      { word: 'Best regards', meaningAr: 'مع أطيب التحيات', example: 'Best regards, Sara.' },
      { word: 'inbox', meaningAr: 'صندوق الوارد', example: 'Check your inbox twice a day.' },
      { word: 'draft', meaningAr: 'مسودة', example: 'I will send the draft to my manager first.' },
      { word: 'compose', meaningAr: 'يؤلف / يكتب', example: 'Compose the email in a formal style.' },
      { word: 'recipient', meaningAr: 'المستلم', example: 'Who is the recipient of this email?' },
      { word: 'follow up', meaningAr: 'يتابع', example: 'I am following up on my email from Monday.' },
    ],
    scenario: [
      { en: 'Dear Mr. Ali, I am writing regarding the invoice.', ar: 'عزيزي السيد علي، أكتب بخصوص الفاتورة.', d: 1 },
      { en: 'What should I write in the subject line?', ar: 'ماذا ينبغي أن أكتب في سطر الموضوع؟', d: 2 },
      { en: 'Please write a clear subject line for every email.', ar: 'اكتب سطر موضوع واضحا لكل رسالة من فضلك.', d: 1 },
      { en: 'I have attached the report you asked for.', ar: 'أرفقت التقرير الذي طلبته.', d: 2 },
      { en: 'Attached you will find the signed contract.', ar: 'ستجد في المرفقات العقد الموقّع.', d: 2 },
      { en: 'Thank you for your quick reply.', ar: 'شكرا لردك السريع.', d: 1 },
      { en: 'I am following up on my email from Monday.', ar: 'أتابع بشأن بريدي الإلكتروني يوم الاثنين.', d: 2 },
      { en: 'Could you please forward this message to the manager?', ar: 'هل تعيد إرسال هذه الرسالة إلى المدير من فضلك؟', d: 2 },
      { en: 'I have not received a reply yet.', ar: 'لم أستلم ردا بعد.', d: 2 },
      { en: 'If you need more information, please contact me.', ar: 'إذا احتجت مزيدا من المعلومات، تواصل معي من فضلك.', d: 2 },
      { en: 'Do not forget to reply to the customer today.', ar: 'لا تنس الرد على العميل اليوم.', d: 2 },
      { en: 'Who is the recipient of this email?', ar: 'من مستلم هذه الرسالة؟', d: 2 },
      { en: 'The attachment is too large to send.', ar: 'المرفق كبير جدا ولا يمكن إرساله.', d: 2 },
      { en: 'I will send the draft to my manager first.', ar: 'سأرسل المسودة إلى مديري أولا.', d: 2 },
      { en: 'Has the client replied to your email?', ar: 'هل رد العميل على بريدك؟', d: 2 },
      { en: 'No, but I have sent two reminders.', ar: 'لا، لكنني أرسلت تذكيرين.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Dear {T}, I am writing regarding {R}.', arTmpl: 'عزيزي {T_ar}، أكتب بخصوص {R_ar}.',
        slots: {
          T: [
            { en: 'Mr. Ali', ar: 'السيد علي' }, { en: 'Ms. Sara', ar: 'الآنسة سارة' },
            { en: 'Mr. Khalid', ar: 'السيد خالد' }, { en: 'the manager', ar: 'المدير' },
            { en: 'the support team', ar: 'فريق الدعم' },
          ],
          R: [
            { en: 'the invoice', ar: 'الفاتورة' }, { en: 'the delayed order', ar: 'الطلب المتأخر' },
            { en: 'the monthly report', ar: 'التقرير الشهري' }, { en: 'your last email', ar: 'بريدك الأخير' },
          ],
        },
        tags: ['emails', 'openings'], d: 2, limit: 12,
      },
      {
        tmpl: 'Attached you will find {D}.', arTmpl: 'ستجد في المرفقات {D_ar}.',
        slots: {
          D: [
            { en: 'the signed contract', ar: 'العقد الموقّع' }, { en: 'the price list', ar: 'قائمة الأسعار' },
            { en: 'the meeting minutes', ar: 'محضر الاجتماع' }, { en: 'the updated schedule', ar: 'الجدول المحدث' },
            { en: 'the invoice copy', ar: 'نسخة من الفاتورة' }, { en: 'the presentation slides', ar: 'شرائح العرض' },
          ],
        },
        tags: ['emails', 'attachments'], d: 2, limit: 6,
      },
      {
        tmpl: 'I am following up on {R}.', arTmpl: 'أتابع بشأن {R_ar}.',
        slots: {
          R: [
            { en: 'my email from Monday', ar: 'بريدي يوم الاثنين' }, { en: 'yesterday\'s phone call', ar: 'مكالمة الأمس' },
            { en: 'the payment request', ar: 'طلب الدفع' }, { en: 'the open ticket', ar: 'التذكرة المفتوحة' },
            { en: 'our last meeting', ar: 'اجتماعنا الأخير' }, { en: 'the job application', ar: 'طلب التوظيف' },
          ],
        },
        tags: ['emails', 'follow-up'], d: 2, limit: 6,
      },
      {
        tmpl: 'Could you please {V} the {D}?', arTmpl: 'هل يمكنك من فضلك {V_ar} {D_ar}؟',
        slots: {
          V: [
            { en: 'forward', ar: 'إعادة إرسال' }, { en: 'reply to', ar: 'الرد على' },
            { en: 'check', ar: 'التحقق من' }, { en: 'attach', ar: 'إرفاق' },
          ],
          D: [
            { en: 'file', ar: 'الملف' }, { en: 'message', ar: 'الرسالة' },
            { en: 'details', ar: 'التفاصيل' }, { en: 'report', ar: 'التقرير' },
          ],
        },
        tags: ['emails', 'polite-requests'], d: 2, limit: 10,
      },
      {
        tmpl: 'Best regards, {P}.', arTmpl: 'مع أطيب التحيات، {P_ar}.',
        slots: { P: B.NAMED_SING },
        tags: ['emails', 'closings'], d: 1, limit: 8,
      },
    ],
    fills: [
      { en: 'Please write a clear subject line for every email.', ar: 'اكتب سطر موضوع واضحا لكل رسالة من فضلك.', word: 'subject', hint: 'سطر الموضوع' },
      { en: 'I have attached the report you asked for.', ar: 'أرفقت التقرير الذي طلبته.', word: 'attached', hint: 'مرفق' },
      { en: 'Thank you for your quick reply.', ar: 'شكرا لردك السريع.', word: 'reply', hint: 'يرد' },
      { en: 'I am following up on my email from Monday.', ar: 'أتابع بشأن بريدي الإلكتروني يوم الاثنين.', word: 'following', hint: 'يتابع' },
      { en: 'Could you please forward this message to the manager?', ar: 'هل تعيد إرسال هذه الرسالة إلى المدير من فضلك؟', word: 'forward', hint: 'يعيد الإرسال' },
      { en: 'I have not received a reply yet.', ar: 'لم أستلم ردا بعد.', word: 'received', hint: 'استلم' },
      { en: 'If you need more information, please contact me.', ar: 'إذا احتجت مزيدا من المعلومات، تواصل معي من فضلك.', word: 'information' },
      { en: 'Best regards, Sara.', ar: 'مع أطيب التحيات، سارة.', word: 'regards', hint: 'التحيات' },
    ],
    orders: [
      { en: 'Please write a clear subject line for every email.', ar: 'اكتب سطر موضوع واضحا لكل رسالة من فضلك.' },
      { en: 'I have attached the report you asked for.', ar: 'أرفقت التقرير الذي طلبته.' },
      { en: 'Could you please forward this message to the manager?', ar: 'هل تعيد إرسال هذه الرسالة إلى المدير من فضلك؟' },
      { en: 'Thank you for your quick reply, Mr. Ali.', ar: 'شكرا لردك السريع يا سيد علي.' },
      { en: 'I have not received a reply yet.', ar: 'لم أستلم ردا بعد.' },
      { en: 'Dear Mr. Ali, I am writing regarding the invoice.', ar: 'عزيزي السيد علي، أكتب بخصوص الفاتورة.' },
    ],
    mc: [
      { question: 'Where do you write the main topic of an email?', options: ['In the subject line', 'In the attachment', 'In the signature only', 'In the inbox'], answerIndex: 0, ar: 'أين تكتب الموضوع الرئيسي للرسالة؟' },
      { question: '"Best regards" is used to:', options: ['end a formal email', 'start a meeting', 'answer the phone', 'close a shop'], answerIndex: 0, ar: 'تستخدم Best regards من أجل:' },
      { question: '"I am following up on my email" means:', options: ['أتابع بشأن بريدي الإلكتروني', 'أحذف بريدي الإلكتروني', 'أنسى بريدي الإلكتروني', 'أطبع بريدي الإلكتروني'], answerIndex: 0, ar: 'ما معنى I am following up on my email؟' },
      { question: 'The file you add to an email is called:', options: ['an attachment', 'an envelope', 'a stamp', 'a folder'], answerIndex: 0, ar: 'الملف الذي تضيفه إلى الرسالة يسمى:' },
      { question: 'Which opening is correct for a professional email?', options: ['Dear Ms. Sara,', 'Hi buddy!', 'Hey you,', 'Hello everyone!!'], answerIndex: 0, ar: 'أي بداية صحيحة لرسالة مهنية؟' },
    ],
  },

  /* ================= lesson 178 — Business Phone Calls ================= */
  {
    num: 178,
    tags: ['work', 'phone', 'business-calls'],
    objectives: [
      'Open a business call and state your purpose',
      'Ask to speak to a department or person',
      'Leave and take messages on the phone',
    ],
    grammar: {
      explanation: 'Business calls follow a routine. Answer with "Good morning, this is Sara from Star Company. How can I help you today?" — use "this is", not "I am", to say your name on the phone. State your purpose with "I am calling about ...". Ask for a person politely: "Could you put me through to the accounts department, please?". The receptionist says "Please hold the line" or "One moment, please. I am transferring you now." If the person is out: "He is not available at the moment. Would you like to leave a message?" Promise a call back with will: "I will call again after lunch".',
      explanationAr: 'للمكالمات المهنية روتين ثابت. أجب بـ Good morning, this is Sara from Star Company. How can I help you today؟ واستخدم this is وليس I am لتذكر اسمك على الهاتف. واذكر هدفك بـ I am calling about ... واطلب شخصا بأدب: Could you put me through to the accounts department, please؟ ويقول موظف الاستقبال Please hold the line أو One moment, please. I am transferring you now. وإذا كان الشخص غير موجود: He is not available at the moment. Would you like to leave a message؟ وعد بالاتصال مجددا بـ will: I will call again after lunch.',
      examples: [
        { en: 'Good morning, this is Sara from Star Company.', ar: 'صباح الخير، أنا سارة من شركة ستار.' },
        { en: 'Could you put me through to the accounts department, please?', ar: 'هل توصلني بقسم الحسابات من فضلك؟' },
        { en: 'Would you like to leave a message?', ar: 'هل تود ترك رسالة؟' },
      ],
    },
    vocabulary: [
      { word: 'hold', meaningAr: 'ينتظر على الخط', example: 'Please hold the line for a second.', ipa: 'hoʊld' },
      { word: 'put through', meaningAr: 'يوصل المكالمة', example: 'Could you put me through to the manager?' },
      { word: 'transfer', meaningAr: 'يحوّل المكالمة', example: 'One moment, please. I am transferring you now.' },
      { word: 'available', meaningAr: 'متاح', example: 'He is not available at the moment.' },
      { word: 'extension', meaningAr: 'تحويلة', example: 'What is your extension number, please?' },
      { word: 'voicemail', meaningAr: 'البريد الصوتي', example: 'Please leave a message on my voicemail.' },
      { word: 'hang up', meaningAr: 'يغلق الخط', example: 'Do not hang up; I am still here.' },
      { word: 'return the call', meaningAr: 'يعيد الاتصال', example: 'I will return the call after lunch.' },
      { word: 'reach', meaningAr: 'يتواصل مع', example: 'You can reach me on extension 204.' },
      { word: 'dial', meaningAr: 'يطلب رقم', example: 'Dial zero for the reception.' },
      { word: 'busy', meaningAr: 'مشغول (الخط)', example: 'I am sorry, but the line is busy.' },
      { word: 'take a message', meaningAr: 'يسجل رسالة', example: 'Can I take a message for her?' },
    ],
    scenario: [
      { en: 'Good morning, this is Sara from Star Company.', ar: 'صباح الخير، أنا سارة من شركة ستار.', d: 1 },
      { en: 'How can I help you today?', ar: 'كيف أستطيع مساعدتك اليوم؟', d: 1 },
      { en: 'I am calling about the invoice for March.', ar: 'أتصل بخصوص فاتورة شهر مارس.', d: 2 },
      { en: 'Could you put me through to the accounts department, please?', ar: 'هل توصلني بقسم الحسابات من فضلك؟', d: 2 },
      { en: 'One moment, please. I am transferring you now.', ar: 'لحظة من فضلك. أحوّل المكالمة الآن.', d: 1 },
      { en: 'I am sorry, but the line is busy.', ar: 'آسف، لكن الخط مشغول.', d: 1 },
      { en: 'Would you like to leave a message?', ar: 'هل تود ترك رسالة؟', d: 1 },
      { en: 'Yes, please ask him to call me back.', ar: 'نعم، اطلب منه من فضلك أن يعيد الاتصال بي.', d: 1 },
      { en: 'He is not available at the moment.', ar: 'هو غير متاح في الوقت الحالي.', d: 1 },
      { en: 'Can I take a message for her?', ar: 'هل أسجل لها رسالة؟', d: 2 },
      { en: 'Please hold the line for a second.', ar: 'انتظر على الخط لحظة من فضلك.', d: 1 },
      { en: 'Of course, no problem.', ar: 'بالتأكيد، لا مشكلة.', d: 1 },
      { en: 'If she does not answer, I will call again after lunch.', ar: 'إذا لم تجب، سأتصل مرة أخرى بعد الغداء.', d: 2 },
      { en: 'I have called three times this morning.', ar: 'اتصلت ثلاث مرات هذا الصباح.', d: 2 },
      { en: 'What is your extension number, please?', ar: 'ما رقم تحويلتك من فضلك؟', d: 2 },
      { en: 'My extension is two zero four.', ar: 'تحويلتي اثنان صفر أربعة.', d: 1 },
      { en: 'The managers are in a meeting until noon.', ar: 'المديرون في اجتماع حتى الظهر.', d: 2 },
      { en: 'Thank you for calling. Have a nice day!', ar: 'شكرا لاتصالك. أتمنى لك يوما سعيدا!', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'Good morning, this is {P} from {C}.', arTmpl: 'صباح الخير، أنا {P_ar} من {C_ar}.',
        slots: {
          P: B.NAMED_SING,
          C: [
            { en: 'Star Company', ar: 'شركة ستار' }, { en: 'Al-Noor Company', ar: 'شركة النور' },
            { en: 'the sales team', ar: 'فريق المبيعات' }, { en: 'the front desk', ar: 'مكتب الاستقبال' },
            { en: 'Horizon Bank', ar: 'بنك الأفق' },
          ],
        },
        tags: ['phone', 'openings'], d: 1, limit: 20,
      },
      {
        tmpl: 'I am calling about {R}.', arTmpl: 'أتصل بخصوص {R_ar}.',
        slots: {
          R: [
            { en: 'the invoice', ar: 'الفاتورة' }, { en: 'tomorrow\'s appointment', ar: 'موعد الغد' },
            { en: 'the delivery delay', ar: 'تأخير التوصيل' }, { en: 'the job advertisement', ar: 'إعلان الوظيفة' },
            { en: 'the meeting time', ar: 'موعد الاجتماع' }, { en: 'the broken printer', ar: 'الطابعة المعطلة' },
          ],
        },
        tags: ['phone', 'purposes'], d: 2, limit: 6,
      },
      {
        tmpl: 'Could you put me through to {D}?', arTmpl: 'هل توصلني بـ{D_ar}؟',
        slots: {
          D: [
            { en: 'the manager', ar: 'المدير' }, { en: 'the accounts department', ar: 'قسم الحسابات' },
            { en: 'customer service', ar: 'خدمة العملاء' }, { en: 'the sales manager', ar: 'مدير المبيعات' },
            { en: 'the IT department', ar: 'قسم التقنية' }, { en: 'human resources', ar: 'الموارد البشرية' },
          ],
        },
        tags: ['phone', 'polite-requests'], d: 2, limit: 6,
      },
      {
        tmpl: 'I am sorry, {P} is not available {T}.', arTmpl: 'آسف، {P_ar} {T_ar}.',
        slots: {
          P: [
            { en: 'the manager', ar: 'المدير غير متاح' }, { en: 'Ms. Sara', ar: 'الآنسة سارة غير متاحة' },
            { en: 'Mr. Ali', ar: 'السيد علي غير متاح' }, { en: 'the supervisor', ar: 'المشرف غير متاح' },
          ],
          T: [
            { en: 'at the moment', ar: 'في الوقت الحالي' }, { en: 'today', ar: 'اليوم' },
            { en: 'until tomorrow', ar: 'حتى الغد' }, { en: 'this week', ar: 'هذا الأسبوع' },
          ],
        },
        tags: ['phone', 'messages'], d: 2, limit: 10,
      },
    ],
    fills: [
      { en: 'Good morning, this is Sara from Star Company.', ar: 'صباح الخير، أنا سارة من شركة ستار.', word: 'morning', hint: 'تحية الصباح' },
      { en: 'I am calling about the invoice for March.', ar: 'أتصل بخصوص فاتورة شهر مارس.', word: 'calling', hint: 'أتصل' },
      { en: 'Could you put me through to the accounts department, please?', ar: 'هل توصلني بقسم الحسابات من فضلك؟', word: 'through', hint: 'يوصل المكالمة' },
      { en: 'Would you like to leave a message?', ar: 'هل تود ترك رسالة؟', word: 'message', hint: 'رسالة' },
      { en: 'I am sorry, but the line is busy.', ar: 'آسف، لكن الخط مشغول.', word: 'busy', hint: 'مشغول' },
      { en: 'Please hold the line for a second.', ar: 'انتظر على الخط لحظة من فضلك.', word: 'hold', hint: 'ينتظر على الخط' },
      { en: 'What is your extension number, please?', ar: 'ما رقم تحويلتك من فضلك؟', word: 'extension', hint: 'تحويلة' },
      { en: 'He is not available at the moment.', ar: 'هو غير متاح في الوقت الحالي.', word: 'available', hint: 'متاح' },
    ],
    orders: [
      { en: 'Good morning, this is Sara from Star Company.', ar: 'صباح الخير، أنا سارة من شركة ستار.' },
      { en: 'I am calling about the invoice for March.', ar: 'أتصل بخصوص فاتورة شهر مارس.' },
      { en: 'Could you put me through to the manager, please?', ar: 'هل توصلني بالمدير من فضلك؟' },
      { en: 'Would you like to leave a message?', ar: 'هل تود ترك رسالة؟' },
      { en: 'Please hold the line for a second.', ar: 'انتظر على الخط لحظة من فضلك.' },
      { en: 'He is not available at the moment.', ar: 'هو غير متاح في الوقت الحالي.' },
    ],
    mc: [
      { question: 'Someone says "Please hold." You should:', options: ['wait on the line', 'hang up quickly', 'dial a new number', 'send an email'], answerIndex: 0, ar: 'قال لك أحدهم Please hold، فعليك أن:' },
      { question: '"Could you put me through to sales?" means:', options: ['هل توصلني بقسم المبيعات؟', 'هل تغلق المكالمة؟', 'هل تعيد الاتصال غدا؟', 'هل تسجل رسالة؟'], answerIndex: 0, ar: 'ما معنى Could you put me through to sales؟' },
      { question: 'The person you want is not available. You can:', options: ['leave a message', 'buy a ticket', 'order food', 'close the office'], answerIndex: 0, ar: 'الشخص المطلوب غير متاح، فيمكنك:' },
      { question: 'Which number connects you inside the company?', options: ['an extension', 'a receipt', 'an agenda', 'a signature'], answerIndex: 0, ar: 'أي رقم يوصلك داخل الشركة؟' },
      { question: 'How do you say your name when you answer at work?', options: ['This is Sara from Star Company.', 'I am Sara person.', 'Sara speaking you.', 'Me Sara company.'], answerIndex: 0, ar: 'كيف تذكر اسمك عند الرد في العمل؟' },
    ],
  },
];
