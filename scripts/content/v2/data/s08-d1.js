/* ============================================================
   v2 section data — s08-d1.js
   Work & Money · lessons 193–195
   (Remote Work · Job Hunting · Work and Money Review)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 193 — Remote Work ================= */
  {
    num: 193,
    tags: ['remote-work', 'work'],
    objectives: [
      'Join and manage an online meeting politely',
      'Describe working from home and flexible hours',
      'Solve small technical problems during a call',
    ],
    grammar: {
      explanation: 'Remote work talk mixes polite requests and ability: "Could I join the call from my phone, please?", "Can everyone see my screen?". The present simple describes routines: "I work from home three days a week". Will makes quick promises: "If my connection drops, I will call you back". Present perfect checks status: "Have you joined the online meeting yet?". Keep answers short and clear: "Yes, we can see it clearly now".',
      explanationAr: 'يمزج حديث العمل عن بعد بين الطلبات المهذبة والقدرة: Could I join the call from my phone, please؟، Can everyone see my screen؟ ويصف المضارع البسيط الروتين: I work from home three days a week. ويصنع will وعودا سريعة: If my connection drops, I will call you back. ويتحقق المضارع التام من الحالة: Have you joined the online meeting yet؟ وحافظ على أجوبة قصيرة واضحة: Yes, we can see it clearly now.',
      examples: [
        { en: 'Could I join the call from my phone, please?', ar: 'هل أستطيع الانضمام إلى المكالمة من هاتفي من فضلك؟' },
        { en: 'I work from home three days a week.', ar: 'أعمل من المنزل ثلاثة أيام في الأسبوع.' },
        { en: 'If my connection drops, I will call you back.', ar: 'إذا انقطع اتصالي، سأعاود الاتصال بك.' },
      ],
    },
    vocabulary: [
      { word: 'remote work', meaningAr: 'العمل عن بُعد', example: 'Remote work became common recently.' },
      { word: 'work from home', meaningAr: 'يعمل من المنزل', example: 'I work from home on Fridays.' },
      { word: 'video call', meaningAr: 'مكالمة فيديو', example: 'The video call starts at nine.' },
      { word: 'internet connection', meaningAr: 'اتصال الإنترنت', example: 'My internet connection is weak upstairs.' },
      { word: 'share my screen', meaningAr: 'أشارك شاشتي', example: 'May I share my screen now?' },
      { word: 'flexible hours', meaningAr: 'ساعات عمل مرنة', example: 'Flexible hours help parents a lot.' },
      { word: 'mute', meaningAr: 'يُسكّت الصوت', example: 'Please mute your microphone.' },
      { word: 'headphones', meaningAr: 'سماعات رأس', example: 'My new headphones are comfortable.' },
      { word: 'Wi-Fi', meaningAr: 'الواي فاي', example: 'The Wi-Fi works better near the router.' },
      { word: 'router', meaningAr: 'موجّه (راوتر)', example: 'Restart the router, please.' },
      { word: 'commute', meaningAr: 'التنقل إلى العمل', example: 'I do not commute anymore.' },
      { word: 'online meeting', meaningAr: 'اجتماع عبر الإنترنت', example: 'The online meeting has a new link.' },
    ],
    scenario: [
      { en: 'I work from home three days a week.', ar: 'أعمل من المنزل ثلاثة أيام في الأسبوع.', d: 1 },
      { en: 'Could I join the call from my phone, please?', ar: 'هل أستطيع الانضمام إلى المكالمة من هاتفي من فضلك؟', d: 1 },
      { en: 'Of course, but please mute your microphone.', ar: 'بالتأكيد، لكن من فضلك أسكت الميكروفون.', d: 1 },
      { en: 'My internet is slow today.', ar: 'إنترنتي بطيء اليوم.', d: 1 },
      { en: 'Try to sit closer to the router.', ar: 'حاول الجلوس أقرب إلى الموجه.', d: 2 },
      { en: 'Can everyone see my screen?', ar: 'هل يمكن للجميع رؤية شاشتي؟', d: 1 },
      { en: 'Yes, we can see it clearly now.', ar: 'نعم، نراها بوضوح الآن.', d: 1 },
      { en: 'I will share my screen for the presentation.', ar: 'سأشارك شاشتي للعرض التقديمي.', d: 1 },
      { en: 'Our company gives us flexible hours.', ar: 'شركتنا تمنحنا ساعات مرنة.', d: 1 },
      { en: 'I start early and finish before the traffic.', ar: 'أبدأ مبكرا وأنتهي قبل الازدحام.', d: 2 },
      { en: 'She does not like working from home every day.', ar: 'لا تحب العمل من المنزل كل يوم.', d: 2 },
      { en: 'The children make a lot of noise in the afternoon.', ar: 'يُحدث الأطفال ضجيجا كثيرا بعد الظهر.', d: 2 },
      { en: 'Have you joined the online meeting yet?', ar: 'هل انضممت إلى الاجتماع عبر الإنترنت بعد؟', d: 2 },
      { en: 'Sorry, my headphones were broken this morning.', ar: 'عذرا، كانت سماعاتي معطلة هذا الصباح.', d: 2 },
      { en: 'Remote work saves me two hours of commuting.', ar: 'يوفر لي العمل عن بعد ساعتين من التنقل.', d: 2 },
      { en: 'If my connection drops, I will call you back.', ar: 'إذا انقطع اتصالي، سأعاود الاتصال بك.', d: 3 },
      { en: 'They have moved to a smaller office because everyone works remotely.', ar: 'نقلوا إلى مكتب أصغر لأن الجميع يعمل عن بعد.', d: 3 },
      { en: 'Please turn your camera on for the team meeting.', ar: 'من فضلك شغّل الكاميرا للاجتماع الجماعي.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'I work from home {N}.', arTmpl: 'أعمل من المنزل {N_ar}.',
        slots: {
          N: [
            { en: 'one day a week', ar: 'يوما واحدا في الأسبوع' }, { en: 'two days a week', ar: 'يومين في الأسبوع' },
            { en: 'four days a week', ar: 'أربعة أيام في الأسبوع' }, { en: 'in the summer', ar: 'في الصيف' },
            { en: 'full time', ar: 'بدوام كامل' },
          ],
        },
        tags: ['remote-work', 'present-simple'], d: 1, limit: 5,
      },
      {
        tmpl: 'Please join the call at {T}.', arTmpl: 'من فضلك انضم إلى المكالمة {T_ar}.',
        slots: {
          T: [
            { en: 'nine o\'clock', ar: 'في التاسعة' }, { en: 'half past nine', ar: 'في التاسعة والنصف' },
            { en: 'ten thirty', ar: 'في العاشرة والنصف' }, { en: 'noon', ar: 'في الظهر' },
            { en: 'two in the afternoon', ar: 'في الثانية بعد الظهر' },
          ],
        },
        tags: ['remote-work', 'time'], d: 1, limit: 5,
      },
      {
        tmpl: 'My internet is {A} today.', arTmpl: 'إنترنتي {A_ar} اليوم.',
        slots: {
          A: [
            { en: 'very slow', ar: 'بطيئا جدا' }, { en: 'not working', ar: 'معطلا' },
            { en: 'weak', ar: 'ضعيفا' }, { en: 'cutting out', ar: 'ينقطع باستمرار' },
            { en: 'faster now', ar: 'أسرع الآن' },
          ],
        },
        tags: ['remote-work', 'problems'], d: 2, limit: 5,
      },
      {
        tmpl: 'I will share my screen during the {M}.', arTmpl: 'سأشارك شاشتي خلال {M_ar}.',
        slots: {
          M: [
            { en: 'meeting', ar: 'الاجتماع' }, { en: 'training', ar: 'التدريب' },
            { en: 'interview', ar: 'المقابلة' }, { en: 'workshop', ar: 'ورشة العمل' },
            { en: 'performance review', ar: 'تقييم الأداء' }, { en: 'client call', ar: 'مكالمة العميل' },
          ],
        },
        tags: ['remote-work', 'future'], d: 2, limit: 6,
      },
      {
        tmpl: 'We have flexible hours, so I {V} at seven.', arTmpl: 'لدينا ساعات مرنة، لذا {V_ar} في السابعة.',
        slots: {
          V: [
            { en: 'start', ar: 'أبدأ' }, { en: 'log in', ar: 'أسجل الدخول' },
            { en: 'answer emails', ar: 'أرد على البريد' }, { en: 'plan my day', ar: 'أخطط ليومي' },
            { en: 'check messages', ar: 'أتفقد الرسائل' },
          ],
        },
        tags: ['remote-work', 'present-simple'], d: 2, limit: 5,
      },
      {
        tmpl: '{S} {V} from home {D}.', arTmpl: '{S_ar} {V_ar} من المنزل {D_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('work', x.S.agr), ar: B.arPresent('work', x.S.agr) }],
          D: B.TIME_HABIT,
        },
        tags: ['remote-work', 'present-simple'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'I work from home three days a week.', ar: 'أعمل من المنزل ثلاثة أيام في الأسبوع.', word: 'home', hint: 'المنزل' },
      { en: 'Could I join the call from my phone, please?', ar: 'هل أستطيع الانضمام إلى المكالمة من هاتفي من فضلك؟', word: 'join', hint: 'ينضم' },
      { en: 'My internet is slow today.', ar: 'إنترنتي بطيء اليوم.', word: 'slow', hint: 'بطيء' },
      { en: 'I will share my screen for the presentation.', ar: 'سأشارك شاشتي للعرض التقديمي.', word: 'share', hint: 'يشارك' },
      { en: 'Our company gives us flexible hours.', ar: 'شركتنا تمنحنا ساعات مرنة.', word: 'flexible', hint: 'مرنة' },
      { en: 'Of course, but please mute your microphone.', ar: 'بالتأكيد، لكن من فضلك أسكت الميكروفون.', word: 'mute', hint: 'يسكّت' },
      { en: 'Have you joined the online meeting yet?', ar: 'هل انضممت إلى الاجتماع عبر الإنترنت بعد؟', word: 'online', hint: 'عبر الإنترنت' },
      { en: 'Remote work saves me two hours of commuting.', ar: 'يوفر لي العمل عن بعد ساعتين من التنقل.', word: 'commuting', hint: 'التنقل' },
    ],
    orders: [
      { en: 'I work from home three days a week.', ar: 'أعمل من المنزل ثلاثة أيام في الأسبوع.' },
      { en: 'Could I join the call from my phone, please?', ar: 'هل أستطيع الانضمام إلى المكالمة من هاتفي من فضلك؟' },
      { en: 'My internet is slow today.', ar: 'إنترنتي بطيء اليوم.' },
      { en: 'I will share my screen for the presentation.', ar: 'سأشارك شاشتي للعرض التقديمي.' },
      { en: 'Our company gives us flexible hours.', ar: 'شركتنا تمنحنا ساعات مرنة.' },
      { en: 'If my connection drops, I will call you back.', ar: 'إذا انقطع اتصالي، سأعاود الاتصال بك.' },
    ],
    mc: [
      { question: 'You cannot hear the meeting well. What do you say?', options: ['My internet is slow today.', 'The office is beautiful.', 'I like your desk.', 'The bill is ready.'], answerIndex: 0, ar: 'لا تسمع الاجتماع جيدا، ماذا تقول؟' },
      { question: '"Flexible hours" means:', options: ['ساعات عمل مرنة', 'ساعات طويلة إجبارية', 'عمل بدون أجر', 'عطلة أسبوعية'], answerIndex: 0, ar: 'ماذا يعني flexible hours؟' },
      { question: 'To avoid noise in an online meeting, you should:', options: ['mute your microphone', 'close your eyes', 'turn off the screen', 'send an email'], answerIndex: 0, ar: 'لتفادي الضجيج في اجتماع عبر الإنترنت يجب أن:' },
      { question: 'To show your slides to the team, you:', options: ['share your screen', 'hide your screen', 'sell your screen', 'clean your screen'], answerIndex: 0, ar: 'لعرض شرائحك على الفريق، أنت:' },
    ],
  },

  /* ================= lesson 194 — Job Hunting ================= */
  {
    num: 194,
    tags: ['job-hunting', 'work'],
    objectives: [
      'Search openings and apply online step by step',
      'Prepare a cover letter and fill out the application',
      'Follow up politely and talk about the answer',
    ],
    grammar: {
      explanation: 'Job hunting uses the present simple for habits: "I apply online for most jobs", "I check three job boards every morning". The past simple reports steps: "They invited eight applicants for interviews". Will expresses expectations: "The recruiter will call me back next week". Present perfect connects past actions to now: "She has applied for it twice already", "I have not heard from the company yet". If-clauses give strategy: "If you follow up politely, they remember you".',
      explanationAr: 'يستخدم البحث عن وظيفة المضارع البسيط للعادات: I apply online for most jobs، I check three job boards every morning. ويعبر الماضي البسيط عن خطوات منتهية: They invited eight applicants for interviews. ويقول will عن التوقع: The recruiter will call me back next week. ويربط المضارع التام الماضي بالحاضر: She has applied for it twice already، I have not heard from the company yet. وتعطي جمل الشرط استراتيجية: If you follow up politely, they remember you.',
      examples: [
        { en: 'I apply online for most jobs these days.', ar: 'أتقدم بطلبات عبر الإنترنت لمعظم الوظائف هذه الأيام.' },
        { en: 'The recruiter will call me back next week.', ar: 'سيعاود مسؤول التوظيف الاتصال بي الأسبوع القادم.' },
        { en: 'I have not heard from the company yet.', ar: 'لم أسمع من الشركة بعد.' },
      ],
    },
    vocabulary: [
      { word: 'job hunting', meaningAr: 'البحث عن وظيفة', example: 'Job hunting needs patience.' },
      { word: 'apply', meaningAr: 'يتقدم بطلب', example: 'I apply online for most jobs.' },
      { word: 'job board', meaningAr: 'لوحة وظائف (موقع إعلانات)', example: 'This job board lists remote work.' },
      { word: 'cover letter', meaningAr: 'خطاب تعريفي', example: 'Write a new cover letter for each job.' },
      { word: 'application', meaningAr: 'طلب تقديم', example: 'My application is one page long.' },
      { word: 'recruiter', meaningAr: 'مسؤول توظيف', example: 'The recruiter answered in two days.' },
      { word: 'opening', meaningAr: 'وظيفة شاغرة', example: 'There is an opening in design.' },
      { word: 'applicant', meaningAr: 'متنافس', example: 'We invited eight applicants.' },
      { word: 'follow up', meaningAr: 'يتابع', example: 'Follow up after one week.' },
      { word: 'search', meaningAr: 'يبحث', example: 'Search with the right keywords.' },
      { word: 'hire', meaningAr: 'يوظّف', example: 'They hired two designers in June.' },
      { word: 'offer', meaningAr: 'عرض عمل', example: 'I accepted their offer yesterday.' },
    ],
    scenario: [
      { en: 'I apply online for most jobs these days.', ar: 'أتقدم بطلبات عبر الإنترنت لمعظم الوظائف هذه الأيام.', d: 1 },
      { en: 'Which job board do you use?', ar: 'أي لوحة وظائف تستخدم؟', d: 1 },
      { en: 'I check three job boards every morning.', ar: 'أتفقد ثلاث لوحات وظائف كل صباح.', d: 1 },
      { en: 'Did you fill out the application form?', ar: 'هل ملأت استمارة الطلب؟', d: 1 },
      { en: 'Yes, and I attached my cover letter.', ar: 'نعم، وأرفقت خطابي التعريفي.', d: 1 },
      { en: 'The recruiter will call me back next week.', ar: 'سيعاود مسؤول التوظيف الاتصال بي الأسبوع القادم.', d: 1 },
      { en: 'I hope they offer you the job.', ar: 'آمل أن يمنحوك الوظيفة.', d: 2 },
      { en: 'There is a new opening in the sales team.', ar: 'هناك شاغر جديد في فريق المبيعات.', d: 2 },
      { en: 'She has applied for it twice already.', ar: 'تقدمت بطلب له مرتين بالفعل.', d: 2 },
      { en: 'Do not send the same cover letter to every company.', ar: 'لا ترسل الخطاب التعريفي نفسه لكل شركة.', d: 2 },
      { en: 'Each application needs the right keywords.', ar: 'كل طلب يحتاج الكلمات المفتاحية المناسبة.', d: 3 },
      { en: 'My brother is looking for a part-time job.', ar: 'يبحث أخي عن وظيفة بدوام جزئي.', d: 1 },
      { en: 'How many applicants did they invite?', ar: 'كم متنافسا دعوا؟', d: 1 },
      { en: 'They invited eight applicants for interviews.', ar: 'دعوا ثمانية متنافسين للمقابلات.', d: 1 },
      { en: 'If you follow up politely, they remember you.', ar: 'إذا تابعت بأدب، يتذكرونك.', d: 3 },
      { en: 'I have not heard from the company yet.', ar: 'لم أسمع من الشركة بعد.', d: 2 },
      { en: 'Please follow up on my application tomorrow.', ar: 'من فضلك تابع طلبي غدا.', d: 1 },
      { en: 'They hired two new designers in June.', ar: 'وظفوا مصممين جديدين في يونيو.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I apply online for {J} jobs.', arTmpl: 'أتقدم عبر الإنترنت لوظائف {J_ar}.',
        slots: {
          J: [
            { en: 'teaching', ar: 'التدريس' }, { en: 'sales', ar: 'المبيعات' },
            { en: 'accounting', ar: 'المحاسبة' }, { en: 'design', ar: 'التصميم' },
            { en: 'nursing', ar: 'التمريض' }, { en: 'translation', ar: 'الترجمة' },
          ],
        },
        tags: ['job-hunting', 'present-simple'], d: 1, limit: 6,
      },
      {
        tmpl: 'Did you fill out the application for the {P}?', arTmpl: 'هل ملأت استمارة الطلب لوظيفة {P_ar}؟',
        slots: {
          P: [
            { en: 'receptionist', ar: 'موظف الاستقبال' }, { en: 'accountant', ar: 'المحاسب' },
            { en: 'driver', ar: 'السائق' }, { en: 'salesperson', ar: 'البائع' },
            { en: 'pharmacist', ar: 'الصيدلي' }, { en: 'waiter', ar: 'النادل' },
          ],
        },
        tags: ['job-hunting', 'questions'], d: 2, limit: 6,
      },
      {
        tmpl: 'I sent my cover letter to {C}.', arTmpl: 'أرسلت خطابي التعريفي إلى {C_ar}.',
        slots: {
          C: [
            { en: 'three companies', ar: 'ثلاث شركات' }, { en: 'the manager', ar: 'المدير' },
            { en: 'a big hospital', ar: 'مستشفى كبير' }, { en: 'a tech company', ar: 'شركة تقنية' },
            { en: 'the hotel group', ar: 'مجموعة الفنادق' }, { en: 'two schools', ar: 'مدرستين' },
          ],
        },
        tags: ['job-hunting', 'past-simple'], d: 2, limit: 6,
      },
      {
        tmpl: 'They will call me back {T}.', arTmpl: 'سيعاودون الاتصال بي {T_ar}.',
        slots: {
          T: [
            { en: 'next week', ar: 'الأسبوع القادم' }, { en: 'after the weekend', ar: 'بعد عطلة نهاية الأسبوع' },
            { en: 'on Sunday', ar: 'يوم الأحد' }, { en: 'in two days', ar: 'بعد يومين' },
            { en: 'tomorrow morning', ar: 'غدا صباحا' }, { en: 'before Friday', ar: 'قبل الجمعة' },
          ],
        },
        tags: ['job-hunting', 'future'], d: 1, limit: 6,
      },
      {
        tmpl: '{S} is looking for a {T} job.', arTmpl: '{S_ar} {V_ar} وظيفة {T_ar}.',
        slots: {
          S: B.PEOPLE_SING,
          V: (x) => [{ en: 'is looking for', ar: x.S.agr === 'she' ? 'تبحث عن' : 'يبحث عن' }],
          T: [
            { en: 'full-time', ar: 'بدوام كامل' }, { en: 'remote', ar: 'عن بعد' },
            { en: 'better-paid', ar: 'براتب أعلى' }, { en: 'evening', ar: 'مسائية' },
            { en: 'summer', ar: 'صيفية' }, { en: 'weekend', ar: 'في عطلة نهاية الأسبوع' },
          ],
        },
        tags: ['job-hunting', 'present-continuous'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'I apply online for most jobs these days.', ar: 'أتقدم بطلبات عبر الإنترنت لمعظم الوظائف هذه الأيام.', word: 'apply', hint: 'يتقدم بطلب' },
      { en: 'Which job board do you use?', ar: 'أي لوحة وظائف تستخدم؟', word: 'board', hint: 'لوحة' },
      { en: 'Did you fill out the application form?', ar: 'هل ملأت استمارة الطلب؟', word: 'application', hint: 'طلب تقديم' },
      { en: 'Yes, and I attached my cover letter.', ar: 'نعم، وأرفقت خطابي التعريفي.', word: 'cover', hint: 'تعريفي' },
      { en: 'The recruiter will call me back next week.', ar: 'سيعاود مسؤول التوظيف الاتصال بي الأسبوع القادم.', word: 'recruiter', hint: 'مسؤول توظيف' },
      { en: 'There is a new opening in the sales team.', ar: 'هناك شاغر جديد في فريق المبيعات.', word: 'opening', hint: 'وظيفة شاغرة' },
      { en: 'If you follow up politely, they remember you.', ar: 'إذا تابعت بأدب، يتذكرونك.', word: 'follow', hint: 'يتابع' },
      { en: 'I have not heard from the company yet.', ar: 'لم أسمع من الشركة بعد.', word: 'heard', hint: 'سمع' },
    ],
    orders: [
      { en: 'I apply online for most jobs these days.', ar: 'أتقدم بطلبات عبر الإنترنت لمعظم الوظائف هذه الأيام.' },
      { en: 'Did you fill out the application form?', ar: 'هل ملأت استمارة الطلب؟' },
      { en: 'The recruiter will call me back next week.', ar: 'سيعاود مسؤول التوظيف الاتصال بي الأسبوع القادم.' },
      { en: 'Do not send the same cover letter to every company.', ar: 'لا ترسل الخطاب التعريفي نفسه لكل شركة.' },
      { en: 'They invited eight applicants for interviews.', ar: 'دعوا ثمانية متنافسين للمقابلات.' },
      { en: 'If you follow up politely, they remember you.', ar: 'إذا تابعت بأدب، يتذكرونك.' },
    ],
    mc: [
      { question: 'Where do you apply for most jobs today?', options: ['online', 'at the bakery', 'in the fridge', 'on the bus'], answerIndex: 0, ar: 'أين تتقدم لمعظم الوظائف اليوم؟' },
      { question: 'A short letter that introduces you with your CV is:', options: ['a cover letter', 'a bill', 'a menu', 'a ticket'], answerIndex: 0, ar: 'خطاب قصير يعرفك مع سيرتك الذاتية يسمى:' },
      { question: '"They will call me back" means:', options: ['سيعاودون الاتصال بي', 'سأعود إليهم', 'سأرفض المكالمة', 'سأبيع هاتفي'], answerIndex: 0, ar: 'ماذا يعني They will call me back؟' },
      { question: 'A person who searches for candidates for a company is:', options: ['a recruiter', 'a landlord', 'a passenger', 'a neighbor'], answerIndex: 0, ar: 'الشخص الذي يبحث عن مرشحين لشركة يسمى:' },
    ],
  },

  /* ================= lesson 195 — Work and Money Review ================= */
  {
    num: 195,
    tags: ['review', 'work-money'],
    objectives: [
      'Recycle work and money language from lessons 171 to 194',
      'Use polite requests, if-clauses and the present perfect in office talk',
      'Talk about salaries, bills, contracts and job search in one conversation',
    ],
    grammar: {
      explanation: 'This review combines the tools of Section 8: the present simple for routines ("I check three job boards every morning"), the past simple for events ("They offered me the job on Monday"), the present perfect for news ("Have you checked the interest rate on your loan?"), will for promises ("They will sign the agreement on Sunday"), polite requests ("Could we move the meeting to eleven, please?") and if-clauses for results ("If the invoice is late, the client pays a penalty"). Choose the tool that fits the moment, and keep every sentence clear.',
      explanationAr: 'يراجع هذا الدرس أدوات القسم الثامن كلها: المضارع البسيط للروتين (I check three job boards every morning)، والماضي البسيط للأحداث (They offered me the job on Monday)، والمضارع التام للأخبار (Have you checked the interest rate on your loan؟)، وwill للوعود (They will sign the agreement on Sunday)، والطلبات المهذبة (Could we move the meeting to eleven, please؟)، وجمل الشرط للنتائج (If the invoice is late, the client pays a penalty). اختر الأداة المناسبة للحظة وحافظ على وضوح كل جملة.',
      examples: [
        { en: 'Have you checked the interest rate on your loan?', ar: 'هل تحققت من سعر الفائدة على قرضك؟' },
        { en: 'Could we move the meeting to eleven, please?', ar: 'هل يمكن نقل الاجتماع إلى الحادية عشرة من فضلك؟' },
        { en: 'If the invoice is late, the client pays a penalty.', ar: 'إذا تأخرت الفاتورة، يدفع العميل غرامة.' },
      ],
    },
    vocabulary: [
      { word: 'promotion', meaningAr: 'ترقية', example: 'She finally got her promotion.' },
      { word: 'experience', meaningAr: 'خبرة', example: 'The job needs three years of experience.' },
      { word: 'commission', meaningAr: 'عمولة', example: 'Salespeople earn commission on each sale.' },
      { word: 'deposit', meaningAr: 'إيداع', example: 'I made the deposit this morning.' },
      { word: 'installment', meaningAr: 'قسط', example: 'The second installment is due in May.' },
      { word: 'negotiation', meaningAr: 'تفاوض', example: 'The negotiation took two weeks.' },
      { word: 'achievement', meaningAr: 'إنجاز', example: 'Finishing early was a real achievement.' },
      { word: 'payment', meaningAr: 'دفعة', example: 'The last payment left my account.' },
      { word: 'appointment', meaningAr: 'موعد', example: 'I moved my appointment to Thursday.' },
      { word: 'colleague', meaningAr: 'زميل', example: 'My colleague covered my shift.' },
      { word: 'goal', meaningAr: 'هدف', example: 'We set three goals this quarter.' },
      { word: 'review', meaningAr: 'مراجعة / يراجع', example: 'The yearly review is in October.' },
    ],
    scenario: [
      { en: 'After the interview, they offered me the job on Monday.', ar: 'بعد المقابلة، عرضوا علي الوظيفة يوم الاثنين.', d: 2 },
      { en: 'I have worked in this department for three years.', ar: 'عملت في هذا القسم لثلاث سنوات.', d: 2 },
      { en: 'Could we move the meeting to eleven, please?', ar: 'هل يمكن نقل الاجتماع إلى الحادية عشرة من فضلك؟', d: 1 },
      { en: 'Sorry, I am behind on my invoices this week.', ar: 'عذرا، أنا متأخر عن فواتيري هذا الأسبوع.', d: 2 },
      { en: 'The client agreed to the new payment terms.', ar: 'وافق العميل على شروط الدفع الجديدة.', d: 2 },
      { en: 'My colleague answered the customer complaints very calmly.', ar: 'رد زميلي على شكاوى العملاء بهدوء شديد.', d: 2 },
      { en: 'We cut the budget by ten percent this year.', ar: 'خفضنا الميزانية بعشرة بالمئة هذا العام.', d: 3 },
      { en: 'Please send the signed contract back by email.', ar: 'من فضلك أرسل العقد الموقع بالبريد الإلكتروني.', d: 1 },
      { en: 'Have you checked the interest rate on your loan?', ar: 'هل تحققت من سعر الفائدة على قرضك؟', d: 2 },
      { en: 'No, I will ask the bank tomorrow.', ar: 'لا، سأسأل البنك غدا.', d: 1 },
      { en: 'She deserves a raise for her excellent work.', ar: 'تستحق زيادة في الراتب لعملها الممتاز.', d: 2 },
      { en: 'The team met every deadline last month.', ar: 'حقق الفريق كل المواعيد النهائية الشهر الماضي.', d: 2 },
      { en: 'I applied online, but nobody called me back.', ar: 'تقدمت عبر الإنترنت، لكن لا أحد عاود الاتصال بي.', d: 2 },
      { en: 'Do you prefer working from home or the office?', ar: 'هل تفضل العمل من المنزل أم المكتب؟', d: 1 },
      { en: 'Working from home saves me money on transport.', ar: 'يوفر لي العمل من المنزل مالا على المواصلات.', d: 2 },
      { en: 'They will sign the two-year agreement on Sunday.', ar: 'سيوقّعون الاتفاقية لسنتين يوم الأحد.', d: 2 },
      { en: 'Our sales grew by twenty percent after the offer.', ar: 'زادت مبيعاتنا بعشرين بالمئة بعد العرض.', d: 3 },
      { en: 'If the invoice is late, the client pays a penalty.', ar: 'إذا تأخرت الفاتورة، يدفع العميل غرامة.', d: 3 },
      { en: 'Did you open a savings account at the new bank?', ar: 'هل فتحت حساب توفير في البنك الجديد؟', d: 1 },
      { en: 'Yes, and the monthly fee is only one dollar.', ar: 'نعم، والرسوم الشهرية دولار واحد فقط.', d: 1 },
      { en: 'The minimum deposit was higher last year.', ar: 'كان الحد الأدنى للإيداع أعلى العام الماضي.', d: 2 },
      { en: 'Let us review our goals before the annual evaluation.', ar: 'دعنا نراجع أهدافنا قبل التقييم السنوي.', d: 3 },
    ],
    patterns: [
      {
        tmpl: '{S} {V} in the design department since {T}.', arTmpl: '{S_ar} {V_ar} في قسم التصميم منذ {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: `${B.AGR[x.S.agr].have} worked`, ar: B.arPresent('work', x.S.agr) }],
          T: [
            { en: 'June', ar: 'يونيو' }, { en: 'April', ar: 'أبريل' },
            { en: 'February', ar: 'فبراير' }, { en: 'November', ar: 'نوفمبر' },
            { en: 'last spring', ar: 'الربيع الماضي' },
          ],
        },
        tags: ['review', 'present-perfect'], d: 2, limit: 12,
      },
      {
        tmpl: 'Could you {F}, please?', arTmpl: 'هل يمكنك {F_ar} من فضلك؟',
        slots: {
          F: [
            { en: 'check the invoice', ar: 'التحقق من الفاتورة' }, { en: 'sign the contract here', ar: 'توقيع العقد هنا' },
            { en: 'update my CV', ar: 'تحديث سيرتي الذاتية' }, { en: 'call the client back', ar: 'معاودة الاتصال بالعميل' },
            { en: 'explain the payment terms', ar: 'شرح شروط الدفع' }, { en: 'review my cover letter', ar: 'مراجعة خطابي التعريفي' },
          ],
        },
        tags: ['review', 'polite-requests'], d: 1, limit: 6,
      },
      {
        tmpl: 'If you {C}, you will {R}.', arTmpl: 'إذا {C_ar}، {R_ar}.',
        slots: {
          C: [
            { en: 'save ten percent monthly', ar: 'ودّرت عشرة بالمئة شهريا' },
            { en: 'pay the bills on time', ar: 'دفعت الفواتير في وقتها' },
            { en: 'update your CV', ar: 'حدّثت سيرتك الذاتية' },
            { en: 'arrive early', ar: 'وصلت مبكرا' },
            { en: 'read the contract twice', ar: 'قرأت العقد مرتين' },
          ],
          R: [
            { en: 'reach your goal', ar: 'ستحقق هدفك' }, { en: 'avoid the late fee', ar: 'ستتفادى رسوم التأخير' },
            { en: 'get the job', ar: 'ستحصل على الوظيفة' }, { en: 'pass the review', ar: 'ستنجح في التقييم' },
            { en: 'finish on time', ar: 'ستنهي عملك في الوقت' },
          ],
        },
        tags: ['review', 'conditional'], d: 3, limit: 15,
      },
      {
        tmpl: 'We need to {P} the payment terms with the client.', arTmpl: 'نحتاج إلى {P_ar} شروط الدفع مع العميل.',
        slots: {
          P: [
            { en: 'discuss', ar: 'مناقشة' }, { en: 'agree on', ar: 'الاتفاق على' },
            { en: 'review', ar: 'مراجعة' }, { en: 'explain', ar: 'شرح' },
            { en: 'negotiate', ar: 'التفاوض على' },
          ],
        },
        tags: ['review', 'business'], d: 2, limit: 5,
      },
      {
        tmpl: '{S} has just been promoted.', arTmpl: 'تمت ترقية {S_ar} للتو.',
        slots: { S: B.PEOPLE_SING },
        tags: ['review', 'present-perfect'], d: 2, limit: 6,
      },
      {
        tmpl: 'Please pay the {B} before the due date.', arTmpl: 'من فضلك ادفع {B_ar} قبل تاريخ الاستحقاق.',
        slots: {
          B: [
            { en: 'electricity bill', ar: 'فاتورة الكهرباء' }, { en: 'water bill', ar: 'فاتورة الماء' },
            { en: 'phone bill', ar: 'فاتورة الهاتف' }, { en: 'internet bill', ar: 'فاتورة الإنترنت' },
          ],
        },
        tags: ['review', 'bills'], d: 1, limit: 4,
      },
    ],
    fills: [
      { en: 'After the interview, they offered me the job on Monday.', ar: 'بعد المقابلة، عرضوا علي الوظيفة يوم الاثنين.', word: 'interview', hint: 'مقابلة' },
      { en: 'I have worked in this department for three years.', ar: 'عملت في هذا القسم لثلاث سنوات.', word: 'department', hint: 'قسم' },
      { en: 'Could we move the meeting to eleven, please?', ar: 'هل يمكن نقل الاجتماع إلى الحادية عشرة من فضلك؟', word: 'meeting', hint: 'اجتماع' },
      { en: 'The client agreed to the new payment terms.', ar: 'وافق العميل على شروط الدفع الجديدة.', word: 'client', hint: 'عميل' },
      { en: 'Have you checked the interest rate on your loan?', ar: 'هل تحققت من سعر الفائدة على قرضك؟', word: 'interest', hint: 'فائدة' },
      { en: 'She deserves a raise for her excellent work.', ar: 'تستحق زيادة في الراتب لعملها الممتاز.', word: 'raise', hint: 'زيادة راتب' },
      { en: 'Did you open a savings account at the new bank?', ar: 'هل فتحت حساب توفير في البنك الجديد؟', word: 'savings', hint: 'توفير' },
      { en: 'Working from home saves me money on transport.', ar: 'يوفر لي العمل من المنزل مالا على المواصلات.', word: 'transport', hint: 'مواصلات' },
      { en: 'If the invoice is late, the client pays a penalty.', ar: 'إذا تأخرت الفاتورة، يدفع العميل غرامة.', word: 'penalty', hint: 'غرامة' },
    ],
    orders: [
      { en: 'Could we move the meeting to eleven, please?', ar: 'هل يمكن نقل الاجتماع إلى الحادية عشرة من فضلك؟' },
      { en: 'She deserves a raise for her excellent work.', ar: 'تستحق زيادة في الراتب لعملها الممتاز.' },
      { en: 'We cut the budget by ten percent this year.', ar: 'خفضنا الميزانية بعشرة بالمئة هذا العام.' },
      { en: 'Please send the signed contract back by email.', ar: 'من فضلك أرسل العقد الموقع بالبريد الإلكتروني.' },
      { en: 'Did you open a savings account at the new bank?', ar: 'هل فتحت حساب توفير في البنك الجديد؟' },
      { en: 'They will sign the two-year agreement on Sunday.', ar: 'سيوقّعون الاتفاقية لسنتين يوم الأحد.' },
    ],
    mc: [
      { question: 'You want to know what the job pays every month. You ask about:', options: ['the salary', 'the invoice number', 'the late fee', 'the screen'], answerIndex: 0, ar: 'تريد معرفة ما تمنحه الوظيفة شهريا، تسأل عن:' },
      { question: '"I am behind on payments" means:', options: ['أنا متأخر عن الأقساط', 'أنا أمام المدفوعات', 'أنا أرفض الدفع', 'أنا أدفع مرتين'], answerIndex: 0, ar: 'ماذا يعني I am behind on payments؟' },
      { question: 'A document you read and sign before starting a job is:', options: ['a contract', 'a recipe', 'a ticket', 'a menu'], answerIndex: 0, ar: 'المستند الذي تقرؤه وتوقعه قبل بدء العمل هو:' },
      { question: 'Where do you find many job advertisements online?', options: ['on a job board', 'in a fridge', 'on a menu', 'in a suitcase'], answerIndex: 0, ar: 'أين تجد إعلانات وظائف كثيرة على الإنترنت؟' },
      { question: 'To join the online meeting, you click:', options: ['Join the call', 'Close the door', 'Delete the file', 'Cancel the order'], answerIndex: 0, ar: 'للانضمام إلى الاجتماع عبر الإنترنت، تنقر:' },
    ],
  },
];
