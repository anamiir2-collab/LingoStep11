/* ============================================================
   v2 section data — s04-b3.js
   Food, Shopping & Services · lessons 91–95 (incl. review 95)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 91 — Gym Membership ================= */
  {
    num: 91,
    tags: ['gym', 'membership'],
    objectives: [
      'Ask about gym prices and memberships',
      'Use the locker room and trainer services',
      'Cancel or change a subscription politely',
    ],
    grammar: {
      explanation: 'Use "want to + verb" to say what you would like to do: "I want to join this gym". For future plans use "will" or "going to": "I will come every morning", "She is going to try a class". Frequency phrases like "every morning", "twice a week" and "three times a week" tell how often you do something, and they go with the present simple: "She goes to the gym three times a week". With "he" or "she" most verbs add -s: "My brother does not go to the gym".',
      explanationAr: 'استخدم want to + الفعل للتعبير عما تريد فعله: I want to join this gym. وللخطط المستقبلية استخدم will أو going to: I will come every morning. أما عبارات التكرار مثل every morning وtwice a week وthree times a week فتوضح عدد المرات وتستخدم مع المضارع البسيط: She goes to the gym three times a week. ومع he أو she يأخذ معظم الأفعال s: My brother does not go to the gym.',
      examples: [
        { en: 'I want to join this gym.', ar: 'أريد الاشتراك في هذه الصالة الرياضية.' },
        { en: 'I will come every morning before work.', ar: 'سآتي كل صباح قبل العمل.' },
        { en: 'She goes to the gym three times a week.', ar: 'تذهب إلى الصالة الرياضية ثلاث مرات في الأسبوع.' },
      ],
    },
    vocabulary: [
      { word: 'gym', meaningAr: 'صالة رياضية', example: 'I go to the gym after work.', ipa: 'dʒɪm' },
      { word: 'membership', meaningAr: 'عضوية / اشتراك', example: 'My membership is monthly.' },
      { word: 'monthly', meaningAr: 'شهري', example: 'I pay a monthly fee.' },
      { word: 'sign up', meaningAr: 'يسجل', example: 'You can sign up online.' },
      { word: 'trainer', meaningAr: 'مدرب', example: 'The trainer is very kind.' },
      { word: 'locker room', meaningAr: 'غرفة تبديل الملابس', example: 'The locker room is on the left.' },
      { word: 'locker', meaningAr: 'خزانة', example: 'Put your bag in a locker.' },
      { word: 'cancel', meaningAr: 'يلغي', example: 'I want to cancel my membership.' },
      { word: 'subscription', meaningAr: 'اشتراك', example: 'The subscription is thirty dollars.' },
      { word: 'equipment', meaningAr: 'معدات', example: 'The gym has new equipment.' },
      { word: 'exercise', meaningAr: 'يمارس الرياضة', example: 'Exercise is good for your health.' },
      { word: 'towel', meaningAr: 'منشفة', example: 'Bring a towel to the gym.' },
    ],
    scenario: [
      { en: 'I want to join this gym.', ar: 'أريد الاشتراك في هذه الصالة الرياضية.', d: 1 },
      { en: 'How much is the monthly membership?', ar: 'كم سعر الاشتراك الشهري؟', d: 1 },
      { en: 'The monthly membership is thirty dollars.', ar: 'الاشتراك الشهري بثلاثين دولارا.', d: 1 },
      { en: 'You can sign up at the front desk.', ar: 'يمكنك التسجيل عند مكتب الاستقبال.', d: 1 },
      { en: 'Can I try the gym for one day?', ar: 'هل يمكنني تجربة الصالة ليوم واحد؟', d: 2 },
      { en: 'Yes, the first visit is free.', ar: 'نعم، الزيارة الأولى مجانية.', d: 2 },
      { en: 'The gym opens at six in the morning.', ar: 'تفتح الصالة الرياضية في السادسة صباحا.', d: 2 },
      { en: 'I will come every morning before work.', ar: 'سآتي كل صباح قبل العمل.', d: 2 },
      { en: 'Where is the locker room?', ar: 'أين غرفة تبديل الملابس؟', d: 1 },
      { en: 'The locker room is next to the showers.', ar: 'غرفة تبديل الملابس بجانب غرف الاستحمام.', d: 1 },
      { en: 'You can put your bag in a locker.', ar: 'يمكنك وضع حقيبتك في خزانة.', d: 1 },
      { en: 'A personal trainer can help you make a plan.', ar: 'يمكن للمدرب الشخصي مساعدتك في وضع خطة.', d: 2 },
      { en: 'I need to exercise more this year.', ar: 'أحتاج إلى ممارسة الرياضة أكثر هذا العام.', d: 2 },
      { en: 'There is a new fitness class on Tuesday.', ar: 'هناك حصة لياقة جديدة يوم الثلاثاء.', d: 2 },
      { en: 'My brother does not go to the gym.', ar: 'أخي لا يذهب إلى الصالة الرياضية.', d: 2 },
      { en: 'She goes to the gym three times a week.', ar: 'تذهب إلى الصالة الرياضية ثلاث مرات في الأسبوع.', d: 2 },
      { en: 'I want to cancel my subscription, please.', ar: 'أريد إلغاء اشتراكي من فضلك.', d: 3 },
      { en: 'We signed up for a year last month.', ar: 'سجلنا في اشتراك سنوي الشهر الماضي.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I want to {V} at the new gym.', arTmpl: 'أريد أن {V_ar} في الصالة الرياضية الجديدة.',
        slots: {
          V: [
            { en: 'lift weights', ar: 'أرفع الأثقال' }, { en: 'run on the treadmill', ar: 'أجري على جهاز الجري' },
            { en: 'join a fitness class', ar: 'أنضم إلى حصة لياقة' }, { en: 'meet a personal trainer', ar: 'أقابل مدربا شخصيا' },
            { en: 'swim in the pool', ar: 'أسبح في المسبح' }, { en: 'stretch before running', ar: 'أتمدد قبل الجري' },
          ],
        },
        tags: ['gym', 'want-to'], d: 2, limit: 6,
      },
      {
        tmpl: '{S} {V} at the gym {T}.', arTmpl: '{S_ar} {V_ar} في الصالة الرياضية {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('run', x.S.agr), ar: B.arPresent('run', x.S.agr) }],
          T: [
            { en: 'every morning', ar: 'كل صباح' }, { en: 'every evening', ar: 'كل مساء' },
            { en: 'after work', ar: 'بعد العمل' }, { en: 'on weekends', ar: 'في عطلات نهاية الأسبوع' },
          ],
        },
        tags: ['gym', 'present-simple'], d: 2, limit: 18,
      },
      {
        tmpl: 'The {M} membership costs {N} dollars.', arTmpl: '{M_ar} يكلف {N_ar} دولارا.',
        slots: {
          M: [
            { en: 'monthly', ar: 'الاشتراك الشهري' }, { en: 'yearly', ar: 'الاشتراك السنوي' },
            { en: 'family', ar: 'الاشتراك العائلي' },
          ],
          N: [
            { en: 'twenty', ar: 'عشرين' }, { en: 'thirty', ar: 'ثلاثين' }, { en: 'forty', ar: 'أربعين' },
            { en: 'fifty', ar: 'خمسين' }, { en: 'sixty', ar: 'ستين' },
          ],
        },
        tags: ['gym', 'prices'], d: 2, limit: 12,
      },
      {
        tmpl: '{S} {V} a membership {T}.', arTmpl: '{S_ar} {V_ar} اشتراكا {T_ar}.',
        slots: {
          S: [
            { en: 'My sister', ar: 'أختي', agr: 'she' }, { en: 'My mother', ar: 'أمي', agr: 'she' },
            { en: 'My parents', ar: 'والداي', agr: 'they' }, { en: 'My cousins', ar: 'أبناء عمي', agr: 'they' },
            { en: 'My aunt', ar: 'عمتي', agr: 'she' }, { en: 'My grandmother', ar: 'جدتي', agr: 'she' },
          ],
          V: (x) => [{ en: B.enPast('buy'), ar: x.S.agr === 'he' ? 'اشترى' : (x.S.agr === 'she' ? 'اشترت' : B.arPast('buy', x.S.agr)) }],
          T: [
            { en: 'last week', ar: 'الأسبوع الماضي' }, { en: 'last month', ar: 'الشهر الماضي' },
            { en: 'yesterday', ar: 'أمس' }, { en: 'on Saturday', ar: 'يوم السبت' },
          ],
        },
        tags: ['gym', 'past-simple'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'How much is the yearly subscription?', ar: 'كم سعر الاشتراك السنوي؟', word: 'subscription', hint: 'اشتراك' },
      { en: 'You can also sign up at the front desk.', ar: 'يمكنك أيضا التسجيل عند مكتب الاستقبال.', word: 'sign', hint: 'فعل التسجيل' },
      { en: 'A trainer can help you with your plan.', ar: 'يمكن للمدرب مساعدتك في خطتك.', word: 'trainer', hint: 'مدرب' },
      { en: 'Please bring a towel and clean shoes.', ar: 'من فضلك أحضر منشفة وأحذية نظيفة.', word: 'towel', hint: 'منشفة' },
      { en: 'The locker room is down this hall.', ar: 'غرفة تبديل الملابس في نهاية هذا الممر.', word: 'locker', hint: 'خزانة الملابس' },
      { en: 'I canceled my old subscription yesterday.', ar: 'ألغيت اشتراكي القديم أمس.', word: 'canceled', hint: 'الماضي من cancel' },
      { en: 'Do you have a swimming pool here?', ar: 'هل لديكم مسبح هنا؟', word: 'pool', hint: 'مسبح' },
      { en: 'She works out at the gym after school.', ar: 'تمارس الرياضة في الصالة بعد المدرسة.', word: 'gym', hint: 'صالة رياضية' },
    ],
    orders: [
      { en: 'Can I cancel my membership here, please?', ar: 'هل يمكنني إلغاء عضويتي هنا من فضلك؟' },
      { en: 'The gym is very clean and modern.', ar: 'الصالة الرياضية نظيفة وحديثة جدا.' },
      { en: 'My sister goes to the gym twice a week.', ar: 'تذهب أختي إلى الصالة الرياضية مرتين في الأسبوع.' },
      { en: 'He signed up for a fitness class today.', ar: 'سجل في حصة لياقة اليوم.' },
      { en: 'Please put your bag in a locker.', ar: 'من فضلك ضع حقيبتك في خزانة.' },
      { en: 'I will call the gym tomorrow morning.', ar: 'سأتصل بالصالة الرياضية غدا صباحا.' },
    ],
    mc: [
      { question: 'Where do you change your clothes at the gym?', options: ['in the locker room', 'at the front desk', 'in the parking lot', 'on the treadmill'], answerIndex: 0, ar: 'أين تبدل ملابسك في الصالة الرياضية؟' },
      { question: 'What does "monthly membership" mean?', options: ['اشتراك شهري', 'اشتراك سنوي', 'حصة واحدة', 'زيارة مجانية'], answerIndex: 0, ar: 'ما معنى monthly membership؟' },
      { question: 'You want to stop your subscription. You say:', options: ['I want to cancel my subscription', 'I want to sign up', 'I want a locker', 'I want a trainer'], answerIndex: 0, ar: 'تريد إيقاف اشتراكك، فتقول:' },
      { question: 'Who helps you make an exercise plan?', options: ['a personal trainer', 'a librarian', 'a waiter', 'a barber'], answerIndex: 0, ar: 'من يساعدك في وضع خطة تمرين؟' },
    ],
  },

  /* ================= lesson 92 — Buying Cinema Tickets ================= */
  {
    num: 92,
    tags: ['cinema', 'tickets'],
    objectives: [
      'Buy cinema tickets for a specific show',
      'Choose seats and ask about subtitles',
      'Handle a sold-out show politely',
    ],
    grammar: {
      explanation: 'To ask about price use "How much is one ticket?" with a singular noun and "How much are two tickets?" with a plural noun. Use "at" with clock times: "the eight o\'clock show", "at nine tonight". In questions with "does" the main verb does not take -s: "Does the film have subtitles?" (not "has"). Use "will" for on-the-spot decisions: "I will buy the popcorn", and "going to" for plans: "They are going to watch a comedy tonight".',
      explanationAr: 'للسؤال عن السعر استخدم How much is مع الاسم المفرد: How much is one ticket؟ وHow much are مع الجمع: How much are two tickets؟ استخدم at مع وقت الساعة: the eight o\'clock show، at nine tonight. في السؤال بـ does لا يأخذ الفعل الرئيسي s: Does the film have subtitles؟ استخدم will للقرارات اللحظية: I will buy the popcorn، وgoing to للخطط: They are going to watch a comedy tonight.',
      examples: [
        { en: 'How much are the tickets?', ar: 'كم سعر التذاكر؟' },
        { en: 'Does the film have subtitles?', ar: 'هل الفيلم فيه ترجمة؟' },
        { en: 'I will buy the popcorn and the drinks.', ar: 'سأشتري الفشار والمشروبات.' },
      ],
    },
    vocabulary: [
      { word: 'cinema', meaningAr: 'سينما', example: 'The cinema is near the mall.', ipa: 'ˈsɪnəmə' },
      { word: 'ticket', meaningAr: 'تذكرة', example: 'One ticket, please.' },
      { word: 'show', meaningAr: 'عرض', example: 'The show starts at eight.' },
      { word: 'row', meaningAr: 'صف (مقاعد)', example: 'We sat in the back row.' },
      { word: 'seat', meaningAr: 'مقعد', example: 'This is my seat, number twelve.' },
      { word: 'screen', meaningAr: 'شاشة', example: 'The screen is very big.' },
      { word: 'subtitles', meaningAr: 'ترجمة نصية', example: 'The film has Arabic subtitles.' },
      { word: 'sold out', meaningAr: 'نفدت تذاكره', example: 'The show is sold out.' },
      { word: 'popcorn', meaningAr: 'فشار', example: 'I want salted popcorn.' },
      { word: 'adult', meaningAr: 'بالغ', example: 'An adult ticket is ten dollars.' },
      { word: 'child', meaningAr: 'طفل', example: 'Children pay half price.' },
      { word: 'full', meaningAr: 'ممتلئ', example: 'The hall is full tonight.' },
    ],
    scenario: [
      { en: 'Two tickets for the eight o\'clock show, please.', ar: 'تذكرتين لعرض الساعة الثامنة من فضلك.', d: 1 },
      { en: 'The eight o\'clock show is sold out.', ar: 'نفدت تذاكر عرض الساعة الثامنة.', d: 2 },
      { en: 'How much are the tickets?', ar: 'كم سعر التذاكر؟', d: 1 },
      { en: 'Ten dollars for adults and six for children.', ar: 'عشرة دولارات للبالغين وستة للأطفال.', d: 2 },
      { en: 'Where would you like to sit?', ar: 'أين تحب أن تجلس؟', d: 1 },
      { en: 'Two seats in the back row, please.', ar: 'مقعدين في الصف الخلفي من فضلك.', d: 1 },
      { en: 'Does the film have subtitles?', ar: 'هل الفيلم فيه ترجمة؟', d: 1 },
      { en: 'Yes, it has Arabic subtitles.', ar: 'نعم، فيه ترجمة عربية.', d: 1 },
      { en: 'I prefer films with subtitles.', ar: 'أفضل الأفلام ذات الترجمة.', d: 2 },
      { en: 'The screen here is very big.', ar: 'الشاشة هنا كبيرة جدا.', d: 1 },
      { en: 'We arrived late and missed the beginning.', ar: 'وصلنا متأخرين وفاتنا بداية الفيلم.', d: 2 },
      { en: 'Do not use your phone during the film.', ar: 'لا تستخدم هاتفك أثناء الفيلم.', d: 2 },
      { en: 'My daughter loves this cinema.', ar: 'ابنتي تحب هذه السينما.', d: 2 },
      { en: 'I will buy the popcorn and the drinks.', ar: 'سأشتري الفشار والمشروبات.', d: 2 },
      { en: 'The film was boring, so we left early.', ar: 'كان الفيلم مملا فغادرنا مبكرين.', d: 3 },
      { en: 'They are going to watch a comedy tonight.', ar: 'سيشاهدون فيلا كوميدية الليلة.', d: 2 },
      { en: 'Can I pay with my card?', ar: 'هل يمكنني الدفع ببطاقتي؟', d: 2 },
      { en: 'The cinema is full on weekends.', ar: 'السينما مزدحمة في عطلات نهاية الأسبوع.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Two tickets for the {N} o\'clock show, please.', arTmpl: 'تذكرتين لعرض الساعة {N_ar} من فضلك.',
        slots: {
          N: [
            { en: 'six', ar: 'السادسة' }, { en: 'seven', ar: 'السابعة' },
            { en: 'nine', ar: 'التاسعة' }, { en: 'ten', ar: 'العاشرة' },
          ],
        },
        tags: ['cinema', 'tickets'], d: 1, limit: 4,
      },
      {
        tmpl: '{S} {V} the tickets {T}.', arTmpl: '{S_ar} {V_ar} التذاكر {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPast('buy'), ar: x.S.agr === 'he' ? 'اشترى' : (x.S.agr === 'she' ? 'اشترت' : B.arPast('buy', x.S.agr)) }],
          T: [
            { en: 'yesterday', ar: 'أمس' }, { en: 'last night', ar: 'الليلة الماضية' },
            { en: 'on Friday', ar: 'يوم الجمعة' }, { en: 'two days ago', ar: 'قبل يومين' },
          ],
        },
        tags: ['cinema', 'past-simple'], d: 2, limit: 12,
      },
      {
        tmpl: 'The {N} o\'clock show is sold out.', arTmpl: 'نفدت تذاكر عرض الساعة {N_ar}.',
        slots: {
          N: [
            { en: 'six', ar: 'السادسة' }, { en: 'seven', ar: 'السابعة' },
            { en: 'nine', ar: 'التاسعة' }, { en: 'ten', ar: 'العاشرة' },
          ],
        },
        tags: ['cinema', 'sold-out'], d: 2, limit: 4,
      },
      {
        tmpl: 'I will buy {P} and {D}.', arTmpl: 'سأشتري {P_ar} و{D_ar}.',
        slots: {
          P: [
            { en: 'a large popcorn', ar: 'فشارا كبيرا' }, { en: 'a small popcorn', ar: 'فشارا صغيرا' },
            { en: 'two colas', ar: 'مشروبين غازيين' },
          ],
          D: [
            { en: 'a bottle of water', ar: 'قارورة ماء' }, { en: 'an ice cream', ar: 'آيس كريم' },
            { en: 'a chocolate bar', ar: 'لوح شوكولاتة' },
          ],
        },
        tags: ['cinema', 'will-future'], d: 2, limit: 9,
      },
      {
        tmpl: '{S} {V} {O}.', arTmpl: '{S_ar} {V_ar} {O_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('like', x.S.agr), ar: B.arPresent('like', x.S.agr) }],
          O: [
            { en: 'action films', ar: 'أفلام الأكشن' }, { en: 'comedy films', ar: 'الأفلام الكوميدية' },
            { en: 'old classic films', ar: 'الأفلام الكلاسيكية القديمة' }, { en: 'animated films', ar: 'الأفلام المتحركة' },
          ],
        },
        tags: ['cinema', 'present-simple'], d: 1, limit: 12,
      },
    ],
    fills: [
      { en: 'How much are two adult tickets?', ar: 'كم سعر تذكرتين للبالغين؟', word: 'adult', hint: 'بالغ' },
      { en: 'We sat in the back row last time.', ar: 'جلسنا في الصف الخلفي المرة الماضية.', word: 'row', hint: 'صف المقاعد' },
      { en: 'The film starts in five minutes.', ar: 'يبدأ الفيلم بعد خمس دقائق.', word: 'starts', hint: 'يبدأ' },
      { en: 'I do not like horror films.', ar: 'لا أحب الأفلام الرهيبة.', word: 'horror', hint: 'نوع أفلام' },
      { en: 'The screen is huge in this theater.', ar: 'الشاشة ضخمة في هذا المسرح.', word: 'screen', hint: 'شاشة' },
      { en: 'Can we change our seats, please?', ar: 'هل يمكننا تغيير مقاعدنا من فضلك؟', word: 'seats', hint: 'مقاعد' },
      { en: 'The tickets were sold out by noon.', ar: 'نفدت التذاكر قبل الظهر.', word: 'sold', hint: 'نفدت' },
      { en: 'My son wants popcorn and juice.', ar: 'ابني يريد فشارا وعصيرا.', word: 'popcorn', hint: 'فشار' },
    ],
    orders: [
      { en: 'How much is one ticket for the late show?', ar: 'كم سعر تذكرة واحدة للعرض المتأخر؟' },
      { en: 'Does the film have Arabic subtitles?', ar: 'هل الفيلم فيه ترجمة عربية؟' },
      { en: 'We are going to watch a comedy tonight.', ar: 'سنشاهد فيلا كوميدية الليلة.' },
      { en: 'I will meet you at the cinema door.', ar: 'سأقابلك عند باب السينما.' },
      { en: 'The children loved the funny cartoon film.', ar: 'أحب الأطفال فيلم الرسوم الكرتوني المضحك.' },
      { en: 'Please turn off your phone in the hall.', ar: 'من فضلك أطفئ هاتفك في القاعة.' },
    ],
    mc: [
      { question: 'The film has English audio and Arabic text at the bottom. This is called:', options: ['subtitles', 'a trailer', 'a ticket', 'a row'], answerIndex: 0, ar: 'الفيلم بصوت إنجليزي ونص عربي أسفل الشاشة، وهذا يسمى:' },
      { question: 'There are no more tickets for the show. It is:', options: ['sold out', 'on sale', 'free', 'dubbed'], answerIndex: 0, ar: 'لا مزيد من التذاكر للعرض، فهو:' },
      { question: 'The back row is the row that is:', options: ['far from the screen', 'next to the screen', 'outside the cinema', 'behind the ticket window'], answerIndex: 0, ar: 'الصف الخلفي هو الصف الذي يكون:' },
      { question: '"Two tickets for the eight o\'clock show, please" is:', options: ['buying tickets', 'canceling a booking', 'ordering food', 'asking directions'], answerIndex: 0, ar: 'الجملة "تذكرتين لعرض الساعة الثامنة من فضلك" هي:' },
    ],
  },

  /* ================= lesson 93 — Restaurant Reservations ================= */
  {
    num: 93,
    tags: ['restaurant', 'reservations'],
    objectives: [
      'Book a restaurant table by phone or in person',
      'Choose the time, table and booking name',
      'Change, confirm or cancel a reservation',
    ],
    grammar: {
      explanation: '"Would like" is the polite form of "want": "I would like to book a table for four". Use "for" with the time and the number of people: "for nine tonight", "a table for four". Reservations are made "under the name ...": "Please book it under the name Khaled". Ask politely with "Can we ... ?": "Can we sit by the window?". To change a booking use "change" or "move": "I moved it to Friday at eight".',
      explanationAr: 'Would like هي الصيغة المهذبة من want: I would like to book a table for four. استخدم for مع الوقت وعدد الأشخاص: for nine tonight، a table for four. ويكون الحجز باسم شخص: Please book it under the name Khaled. اطلب بمهذب بـ Can we: Can we sit by the window؟ ولتغيير الحجز استخدم change أو move: I moved it to Friday at eight.',
      examples: [
        { en: 'I would like to book a table for four.', ar: 'أود حجز طاولة لأربعة أشخاص.' },
        { en: 'Can we sit by the window?', ar: 'هل يمكننا الجلوس بجانب النافذة؟' },
        { en: 'We will arrive at half past eight.', ar: 'سنصل في الثامنة والنصف.' },
      ],
    },
    vocabulary: [
      { word: 'reserve', meaningAr: 'يحجز', example: 'I want to reserve a table.' },
      { word: 'reservation', meaningAr: 'حجز', example: 'The reservation is at nine.' },
      { word: 'table', meaningAr: 'طاولة', example: 'A table for two, please.' },
      { word: 'guest', meaningAr: 'ضيف', example: 'We are waiting for our guests.' },
      { word: 'group', meaningAr: 'مجموعة', example: 'Our group has six people.' },
      { word: 'available', meaningAr: 'متاح', example: 'Is the terrace available tonight?' },
      { word: 'fully booked', meaningAr: 'محجوز بالكامل', example: 'The restaurant is fully booked tonight.' },
      { word: 'confirm', meaningAr: 'يؤكد', example: 'Please confirm your reservation.' },
      { word: 'under the name', meaningAr: 'باسم', example: 'It is under the name Salem.' },
      { word: 'celebrate', meaningAr: 'يحتفل', example: 'We want to celebrate a birthday.' },
      { word: 'arrive', meaningAr: 'يصل', example: 'We will arrive at nine.' },
      { word: 'tonight', meaningAr: 'الليلة', example: 'See you tonight at the restaurant.' },
    ],
    scenario: [
      { en: 'I would like to book a table for four.', ar: 'أود حجز طاولة لأربعة أشخاص.', d: 1 },
      { en: 'For what time, sir?', ar: 'لأي وقت يا سيدي؟', d: 1 },
      { en: 'For nine tonight, please.', ar: 'للتاسعة الليلة من فضلك.', d: 1 },
      { en: 'Can we sit by the window?', ar: 'هل يمكننا الجلوس بجانب النافذة؟', d: 2 },
      { en: 'Yes, I will keep a table by the window.', ar: 'نعم، سأحفظ لكم طاولة بجانب النافذة.', d: 2 },
      { en: 'Please book it under the name Khaled.', ar: 'احجزها من فضلك باسم خالد.', d: 2 },
      { en: 'Is the restaurant open on Monday?', ar: 'هل المطعم مفتوح يوم الاثنين؟', d: 1 },
      { en: 'Yes, we are open every day from noon to midnight.', ar: 'نعم، نفتح كل يوم من الظهر إلى منتصف الليل.', d: 2 },
      { en: 'The restaurant is fully booked tonight.', ar: 'المطعم محجوز بالكامل الليلة.', d: 2 },
      { en: 'We booked a table two days ago.', ar: 'حجزنا طاولة قبل يومين.', d: 2 },
      { en: 'I need to change my reservation to Friday.', ar: 'أحتاج إلى تغيير حجزي إلى الجمعة.', d: 2 },
      { en: 'No problem, I moved it to Friday at eight.', ar: 'لا مشكلة، نقلته إلى الجمعة في الثامنة.', d: 3 },
      { en: 'There are six people in our group.', ar: 'هناك ستة أشخاص في مجموعتنا.', d: 2 },
      { en: 'They did not confirm the reservation.', ar: 'لم يؤكدوا الحجز.', d: 3 },
      { en: 'My wife and I are going to celebrate her birthday there.', ar: 'سأحتفل أنا وزوجي بعيد ميلادها هناك.', d: 3 },
      { en: 'We will arrive at half past eight.', ar: 'سنصل في الثامنة والنصف.', d: 2 },
      { en: 'Thank you, see you tonight.', ar: 'شكرا لك، أراك الليلة.', d: 1 },
      { en: 'The waiter wrote our names in his book.', ar: 'كتب النادل أسماءنا في دفتره.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'A table for {N}, please.', arTmpl: 'طاولة ل{N_ar} من فضلك.',
        slots: {
          N: [
            { en: 'two', ar: 'شخصين' }, { en: 'three', ar: 'ثلاثة أشخاص' },
            { en: 'four', ar: 'أربعة أشخاص' }, { en: 'five', ar: 'خمسة أشخاص' }, { en: 'six', ar: 'ستة أشخاص' },
          ],
        },
        tags: ['restaurant', 'reservations'], d: 1, limit: 5,
      },
      {
        tmpl: '{S} {V} a table {T}.', arTmpl: '{S_ar} {V_ar} طاولة {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPast('book'), ar: B.arPast('book', x.S.agr) }],
          T: [
            { en: 'for tonight', ar: 'من أجل الليلة' }, { en: 'for Friday', ar: 'من أجل الجمعة' },
            { en: 'for my birthday', ar: 'من أجل عيد ميلادي' }, { en: 'for six people', ar: 'لستة أشخاص' },
          ],
        },
        tags: ['restaurant', 'past-simple'], d: 2, limit: 16,
      },
      {
        tmpl: 'Is the {N} available {T}?', arTmpl: 'هل {N_ar} متاحة {T_ar}؟',
        slots: {
          N: [
            { en: 'table by the window', ar: 'الطاولة بجانب النافذة' }, { en: 'table for ten', ar: 'الطاولة لعشرة أشخاص' },
            { en: 'private room', ar: 'الغرفة الخاصة' }, { en: 'terrace', ar: 'الشرفة' },
          ],
          T: [
            { en: 'tonight', ar: 'الليلة' }, { en: 'tomorrow evening', ar: 'غدا مساء' }, { en: 'on Saturday', ar: 'يوم السبت' },
          ],
        },
        tags: ['restaurant', 'questions'], d: 2, limit: 8,
      },
      {
        tmpl: 'We will {V} the reservation {T}.', arTmpl: 'سن{V_ar} الحجز {T_ar}.',
        slots: {
          V: [
            { en: 'confirm', ar: 'ؤكد' }, { en: 'change', ar: 'غير' },
            { en: 'cancel', ar: 'لغي' }, { en: 'move', ar: 'نقل' },
          ],
          T: [
            { en: 'tomorrow', ar: 'غدا' }, { en: 'later today', ar: 'لاحقا اليوم' },
            { en: 'on Monday', ar: 'يوم الاثنين' }, { en: 'after work', ar: 'بعد العمل' },
          ],
        },
        tags: ['restaurant', 'will-future'], d: 2, limit: 10,
      },
    ],
    fills: [
      { en: 'I would like to change my booking.', ar: 'أود تغيير حجزي.', word: 'booking', hint: 'حجز' },
      { en: 'Is the restaurant open on Sunday?', ar: 'هل المطعم مفتوح يوم الأحد؟', word: 'open', hint: 'مفتوح' },
      { en: 'Please confirm your reservation by phone.', ar: 'من فضلك أكد حجزك عبر الهاتف.', word: 'confirm', hint: 'يؤكد' },
      { en: 'We are waiting for two more guests.', ar: 'ننتظر ضيفين آخرين.', word: 'guests', hint: 'ضيوف' },
      { en: 'The table by the door is free.', ar: 'الطاولة بجانب الباب فارغة.', word: 'free', hint: 'فارغة' },
      { en: 'She booked a table for Friday night.', ar: 'حجزت طاولة لجمعة الليل.', word: 'booked', hint: 'الماضي من book' },
      { en: 'How many people are coming tonight?', ar: 'كم شخصا سيأتي الليلة؟', word: 'people', hint: 'أشخاص' },
      { en: 'The waiter will bring water right away.', ar: 'سيحضر النادل الماء فورا.', word: 'waiter', hint: 'نادل' },
    ],
    orders: [
      { en: 'I would like to book a table for five.', ar: 'أود حجز طاولة لخمسة أشخاص.' },
      { en: 'Please book it under the name Salem.', ar: 'احجزها من فضلك باسم سالم.' },
      { en: 'Can we sit near the window, please?', ar: 'هل يمكننا الجلوس قرب النافذة من فضلك؟' },
      { en: 'We will arrive at nine tonight.', ar: 'سنصل في التاسعة الليلة.' },
      { en: 'I need to move my reservation to Thursday.', ar: 'أحتاج إلى نقل حجزي إلى الخميس.' },
      { en: 'The reservation is for two people at seven.', ar: 'الحجز لشخصين في السابعة.' },
    ],
    mc: [
      { question: '"Book a table under the name Salem" means:', options: ['الحجز باسم سالم', 'الحجز لخالد', 'إلغاء الحجز', 'دفع الحساب'], answerIndex: 0, ar: 'ما معنى Book a table under the name Salem؟' },
      { question: 'You want to sit next to the window. You ask for a table:', options: ['by the window', 'in the kitchen', 'in the parking lot', 'under the name'], answerIndex: 0, ar: 'تريد الجلوس بجانب النافذة، فتطلب طاولة:' },
      { question: 'The restaurant is "fully booked" tonight. This means:', options: ['all tables are reserved', 'the food is finished', 'it is closed forever', 'only one table is free'], answerIndex: 0, ar: 'المطعم محجوز بالكامل الليلة، وهذا يعني:' },
      { question: '"A table for four" is a request for:', options: ['a restaurant table for 4 people', '4 cinema tickets', '4 sandwiches', 'room number 4'], answerIndex: 0, ar: 'عبارة "طاولة لأربعة" طلب لـ:' },
    ],
  },

  /* ================= lesson 94 — Street Food ================= */
  {
    num: 94,
    tags: ['street-food', 'food'],
    objectives: [
      'Order food from a street cart or stand',
      'Ask for napkins, sauces and prices',
      'Describe street food and fresh juice',
    ],
    grammar: {
      explanation: 'Food words can be countable ("one sandwich", "two napkins") or uncountable ("rice", "juice"). Count uncountable food with measure words: "a bottle of water", "a glass of juice", "a bag of chips". Use "Let us / Let\'s ..." to suggest an action: "Let us buy dinner from the food cart". Make polite requests with "Can I have ..., please?". To describe taste and temperature use adjectives: "spicy", "hot", "fresh", "cheap".',
      explanationAr: 'كلمات الطعام تعدّ أحيانا (one sandwich، two napkins) وتكون غير معدودة أحيانا (rice، juice). وتعدّ غير المعدودة بكلمات قياس: a bottle of water، a glass of juice، a bag of chips. استخدم Let us أو Let\'s لاقتراح فعل: Let us buy dinner from the food cart. واطلب بأدب بـ Can I have ... please؟ وللوصف استخدم صفات مثل spicy وhot وfresh وcheap.',
      examples: [
        { en: 'One sandwich with everything, please.', ar: 'شطيرة واحدة بكل شيء من فضلك.' },
        { en: 'Can I have three napkins, please?', ar: 'هل يمكنني الحصول على ثلاث مناديل من فضلك؟' },
        { en: 'Fresh juice here is cheap and delicious.', ar: 'العصير الطازج هنا رخيص ولذيذ.' },
      ],
    },
    vocabulary: [
      { word: 'food cart', meaningAr: 'عربة طعام', example: 'The food cart is near the park.' },
      { word: 'street food', meaningAr: 'طعام الشارع', example: 'I love street food.' },
      { word: 'vendor', meaningAr: 'بائع', example: 'The vendor is friendly.' },
      { word: 'sandwich', meaningAr: 'شطيرة', example: 'One sandwich with everything, please.' },
      { word: 'napkin', meaningAr: 'منديلة', example: 'Can I have a napkin, please?' },
      { word: 'spicy', meaningAr: 'حار', example: 'Is the sauce spicy?', ipa: 'ˈspaɪsi' },
      { word: 'sauce', meaningAr: 'صلصة', example: 'Add a little spicy sauce.' },
      { word: 'fresh juice', meaningAr: 'عصير طازج', example: 'Fresh juice is healthy.' },
      { word: 'juice stand', meaningAr: 'كشك عصير', example: 'The juice stand opens early.' },
      { word: 'corn on the cob', meaningAr: 'ذرة مشوية', example: 'Grilled corn is delicious.' },
      { word: 'delicious', meaningAr: 'لذيذ', example: 'This falafel is delicious.' },
      { word: 'take away', meaningAr: 'طلب خارجي', example: 'Is it take away or delivery?' },
    ],
    scenario: [
      { en: 'Let us buy dinner from the food cart.', ar: 'لنشتر العشاء من عربة الطعام.', d: 1 },
      { en: 'One sandwich with everything, please.', ar: 'شطيرة واحدة بكل شيء من فضلك.', d: 1 },
      { en: 'Do you want it spicy?', ar: 'أتريدها حارة؟', d: 1 },
      { en: 'Yes, but not too hot, please.', ar: 'نعم، ولكن ليست حارة جدا من فضلك.', d: 1 },
      { en: 'The vendor makes the best falafel in town.', ar: 'يصنع البائع أفضل فلافل في المدينة.', d: 2 },
      { en: 'Can I have three napkins, please?', ar: 'هل يمكنني الحصول على ثلاث مناديل من فضلك؟', d: 1 },
      { en: 'This spicy sauce is too hot for me.', ar: 'هذه الصلصة الحارة حارة جدا بالنسبة لي.', d: 2 },
      { en: 'Fresh juice here is cheap and delicious.', ar: 'العصير الطازج هنا رخيص ولذيذ.', d: 1 },
      { en: 'I will take two bottles of water.', ar: 'سآخذ قارورتين من الماء.', d: 2 },
      { en: 'We ate corn on the cob at the market.', ar: 'أكلنا الذرة المشوية في السوق.', d: 2 },
      { en: 'She does not eat from street carts.', ar: 'هي لا تأكل من عربات الشارع.', d: 2 },
      { en: 'How much is one sandwich?', ar: 'كم سعر شطيرة واحدة؟', d: 1 },
      { en: 'Three dollars, and the juice is one dollar.', ar: 'ثلاثة دولارات، والعصير دولار واحد.', d: 2 },
      { en: 'The corn stand opens at five in the afternoon.', ar: 'يفتح كشك الذرة في الخامسة عصرا.', d: 2 },
      { en: 'My father is going to try the grilled meat.', ar: 'أبي سيجرب اللحم المشوي.', d: 3 },
      { en: 'Be careful, the plate is very hot!', ar: 'احترس، الطبق ساخن جدا!', d: 1 },
      { en: 'I bought a shawarma and ate it on the bench.', ar: 'اشتريت شاورما وأكلتها على المقعد.', d: 3 },
      { en: 'The street food here is clean and tasty.', ar: 'طعام الشارع هنا نظيف ولذيذ.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'One {S} with everything, please.', arTmpl: '{S_ar} واحدة بكل شيء من فضلك.',
        slots: {
          S: [
            { en: 'falafel sandwich', ar: 'شطيرة فلافل' }, { en: 'chicken sandwich', ar: 'شطيرة دجاج' },
            { en: 'cheese sandwich', ar: 'شطيرة جبن' }, { en: 'shawarma', ar: 'شاورما' },
          ],
        },
        tags: ['street-food', 'ordering'], d: 1, limit: 4,
      },
      {
        tmpl: '{S} {V} from the food cart {T}.', arTmpl: '{S_ar} {V_ar} من عربة الطعام {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('eat', x.S.agr), ar: B.arPresent('eat', x.S.agr) }],
          T: [
            { en: 'sometimes', ar: 'أحيانا' }, { en: 'every Friday', ar: 'كل جمعة' },
            { en: 'after work', ar: 'بعد العمل' }, { en: 'on weekends', ar: 'في عطلات نهاية الأسبوع' },
          ],
        },
        tags: ['street-food', 'present-simple'], d: 2, limit: 12,
      },
      {
        tmpl: 'The {N} here is {C}.', arTmpl: '{N_ar} هنا {C_ar}.',
        slots: {
          N: [
            { en: 'street food', ar: 'طعام الشارع', g: 'm' }, { en: 'fresh juice', ar: 'العصير الطازج', g: 'm' },
            { en: 'grilled corn', ar: 'الذرة المشوية', g: 'f' }, { en: 'falafel', ar: 'الفلافل', g: 'f' },
          ],
          A: [
            { en: 'cheap', ar: 'رخيص', f: 'رخيصة' }, { en: 'delicious', ar: 'لذيذ', f: 'لذيذة' },
            { en: 'fresh', ar: 'طازج', f: 'طازجة' }, { en: 'popular', ar: 'مشهور', f: 'مشهورة' },
          ],
          C: (x) => [(x.N.g === 'f' ? { en: x.A.en, ar: x.A.f } : { en: x.A.en, ar: x.A.ar })],
        },
        tags: ['street-food', 'adjectives'], d: 2, limit: 10,
      },
      {
        tmpl: 'Can I have {N}, please?', arTmpl: 'هل يمكنني الحصول على {N_ar} من فضلك؟',
        slots: {
          N: [
            { en: 'a glass of juice', ar: 'كوبا من العصير' }, { en: 'two napkins', ar: 'منديلتين' },
            { en: 'some extra bread', ar: 'خبزا إضافيا' }, { en: 'a bag of chips', ar: 'كيسا من الشيبس' },
          ],
        },
        tags: ['street-food', 'polite-requests'], d: 1, limit: 4,
      },
      {
        tmpl: '{S} {BE} going to try {F}.', arTmpl: '{FUT_ar} {S_ar} {F_ar}.',
        slots: {
          S: [
            { en: 'My brother', ar: 'أخي', agr: 'he' }, { en: 'My sister', ar: 'أختي', agr: 'she' },
            { en: 'My father', ar: 'أبي', agr: 'he' }, { en: 'My mother', ar: 'أمي', agr: 'she' },
            { en: 'My friend', ar: 'صديقي', agr: 'he' }, { en: 'My cousin', ar: 'ابن عمي', agr: 'he' },
            { en: 'My uncle', ar: 'عمي', agr: 'he' }, { en: 'My aunt', ar: 'عمتي', agr: 'she' },
          ],
          BE: (x) => [{ en: B.AGR[x.S.agr].be, ar: '' }],
          FUT: (x) => [(x.S.agr === 'she' ? { en: '', ar: 'ستجرب' } : { en: '', ar: 'سيجرب' })],
          F: [
            { en: 'the grilled corn', ar: 'الذرة المشوية' }, { en: 'the spicy sauce', ar: 'الصلصة الحارة' },
            { en: 'the fresh juice', ar: 'العصير الطازج' }, { en: 'the falafel', ar: 'الفلافل' },
          ],
        },
        tags: ['street-food', 'going-to'], d: 3, limit: 12,
      },
    ],
    fills: [
      { en: 'The food cart is near the park.', ar: 'عربة الطعام قرب الحديقة.', word: 'cart', hint: 'عربة' },
      { en: 'I am hungry, let us eat something.', ar: 'أنا جائع، لنأكل شيئا.', word: 'hungry', hint: 'جائع' },
      { en: 'Add a little spicy sauce, please.', ar: 'من فضلك أضف قليلا من الصلصة الحارة.', word: 'spicy', hint: 'حار' },
      { en: 'May I have some extra napkins?', ar: 'هل يمكنني الحصول على مناديل إضافية؟', word: 'napkins', hint: 'مناديل' },
      { en: 'The juice stand also sells cold water.', ar: 'كشك العصير يبيع الماء البارد أيضا.', word: 'stand', hint: 'كشك' },
      { en: 'Grilled corn is my favorite street snack.', ar: 'الذرة المشوية وجبتي الشارع المفضلة.', word: 'corn', hint: 'ذرة' },
      { en: 'He sells sandwiches from a small van.', ar: 'يبيع الشطائر من عربة صغيرة.', word: 'sells', hint: 'يبيع' },
      { en: 'We paid four dollars for everything.', ar: 'دفعنا أربعة دولارات لكل شيء.', word: 'paid', hint: 'دفعنا' },
    ],
    orders: [
      { en: 'One chicken sandwich with extra cheese, please.', ar: 'شطيرة دجاج بجبن إضافي من فضلك.' },
      { en: 'How much is a bottle of water here?', ar: 'كم سعر قارورة ماء هنا؟' },
      { en: 'The fresh juice here is sweet and cold.', ar: 'العصير الطازج هنا سكري وبارد.' },
      { en: 'Let us eat at the food cart today.', ar: 'لنأكل من عربة الطعام اليوم.' },
      { en: 'He is going to try the fried fish tonight.', ar: 'سيجرب السمك المقلي الليلة.' },
      { en: 'Please wait here, your order is ready.', ar: 'انتظر هنا من فضلك، طلبك جاهز.' },
    ],
    mc: [
      { question: 'What is a "food cart"?', options: ['عربة طعام في الشارع', 'مطعم فخم', 'سوبر ماركت', 'مصنع حلويات'], answerIndex: 0, ar: 'ما هو food cart؟' },
      { question: '"Spicy sauce" is sauce that is:', options: ['hot', 'sweet', 'cold', 'free'], answerIndex: 0, ar: 'الصلصة الحارة هي صلصة:' },
      { question: 'You wipe your mouth with a:', options: ['napkin', 'ticket', 'locker', 'receipt'], answerIndex: 0, ar: 'تمسح فمك بـ:' },
      { question: 'Where do you buy fresh juice on the street?', options: ['at a juice stand', 'at the pharmacy', 'in the locker room', 'at the bank'], answerIndex: 0, ar: 'أين تشتري عصيرا طازجا في الشارع؟' },
    ],
  },

  /* ================= lesson 95 — Shopping and Services Review ================= */
  {
    num: 95,
    tags: ['review', 'shopping-services'],
    objectives: [
      'Recycle food, shopping and service vocabulary in new sentences',
      'Use past, present and future across service situations',
      'Make requests and complaints about orders and bills',
    ],
    grammar: {
      explanation: 'This review lesson mixes the past, present and future of the whole section. Past: "I paid the bill yesterday", "They did not accept my return" (after did not, use the base verb). Present routines: "The pharmacy opens at nine", "I always compare prices". Future: "I will transfer the money tomorrow", "The manager is going to review my complaint". Polite requests use "Can you ..., please?", and reservations use "under the name ...".',
      explanationAr: 'هذا الدرس المراجعي يمزج الماضي والحاضر والمستقبل لكامل القسم. الماضي: I paid the bill yesterday، They did not accept my return (بعد did not نستخدم الفعل المجرد). الحاضر للعادات: The pharmacy opens at nine، I always compare prices. المستقبل: I will transfer the money tomorrow، The manager is going to review my complaint. والطلبات المهذبة بـ Can you ... please؟ والحجز بـ under the name.',
      examples: [
        { en: 'I paid the bill with my credit card.', ar: 'دفعت الحساب ببطاقتي الائتمانية.' },
        { en: 'They did not accept my return without a receipt.', ar: 'لم يقبلوا إرجاعي بدون إيصال.' },
        { en: 'The manager is going to review my complaint.', ar: 'سيراجع المدير شكاوتي.' },
      ],
    },
    vocabulary: [
      { word: 'bill', meaningAr: 'فاتورة / حساب', example: 'Can we have the bill, please?' },
      { word: 'refund', meaningAr: 'استرداد المال', example: 'The store gave me a refund.' },
      { word: 'receipt', meaningAr: 'إيصال', example: 'Keep your receipt for returns.' },
      { word: 'discount', meaningAr: 'خصم', example: 'Students get a discount.' },
      { word: 'customer service', meaningAr: 'خدمة العملاء', example: 'I called customer service twice.' },
      { word: 'delivery', meaningAr: 'توصيل', example: 'The delivery arrived late.' },
      { word: 'complaint', meaningAr: 'شكوى', example: 'I want to make a complaint.' },
      { word: 'account', meaningAr: 'حساب بنكي', example: 'I opened a savings account.' },
      { word: 'size', meaningAr: 'مقاس', example: 'Do you have a bigger size?' },
      { word: 'clerk', meaningAr: 'موظف', example: 'The clerk checked my papers.' },
      { word: 'queue', meaningAr: 'طابور', example: 'The queue at the bank was long.' },
      { word: 'membership', meaningAr: 'عضوية / اشتراك', example: 'My gym membership ends in June.' },
    ],
    scenario: [
      { en: 'We ordered grilled fish and a green salad.', ar: 'طلبنا سمكا مشويا وسلطة خضراء.', d: 1 },
      { en: 'My mother is allergic to shellfish.', ar: 'أمي لديها حساسية من الروبيان.', d: 2 },
      { en: 'The waiter brought the bill quickly.', ar: 'أحضر النادل الحساب بسرعة.', d: 1 },
      { en: 'I always compare prices before I buy.', ar: 'أقارن الأسعار دائما قبل الشراء.', d: 2 },
      { en: 'This jacket is the wrong size for me.', ar: 'هذه السترة ليست بمقاسي.', d: 1 },
      { en: 'They did not accept my return without a receipt.', ar: 'لم يقبلوا إرجاعي بدون إيصال.', d: 3 },
      { en: 'Has my online order arrived yet?', ar: 'هل وصل طلبي عبر الإنترنت بعد؟', d: 2 },
      { en: 'What time does the pharmacy open?', ar: 'متى تفتح الصيدلية؟', d: 1 },
      { en: 'I got a haircut at the new salon.', ar: 'قصصت شعري في صالون الحلاقة الجديد.', d: 2 },
      { en: 'The laundry returned my white shirt clean.', ar: 'أعادت المغسلة قميصي الأبيض نظيفا.', d: 2 },
      { en: 'The mechanic repaired our car on Sunday.', ar: 'أصلح الميكانيكي سيارتنا يوم الأحد.', d: 2 },
      { en: 'The manager is going to review my complaint.', ar: 'سيراجع المدير شكاوتي.', d: 3 },
      { en: 'I opened a savings account at the bank.', ar: 'فتحت حساب توفير في البنك.', d: 1 },
      { en: 'I will transfer the money tomorrow morning.', ar: 'سأحول المال غدا صباحا.', d: 2 },
      { en: 'Can you weigh these apples, please?', ar: 'هل يمكنكم وزن هذه التفاحات من فضلك؟', d: 1 },
      { en: 'Did the clerk check your documents?', ar: 'هل فحص الموظف أوراقك؟', d: 2 },
      { en: 'I signed up for a monthly gym membership.', ar: 'سجلت في اشتراك شهري للصالة الرياضية.', d: 1 },
      { en: 'The late show was sold out last night.', ar: 'نفدت تذاكر العرض المتأخر الليلة الماضية.', d: 2 },
      { en: 'I reserved a table for six by the window.', ar: 'حجزت طاولة لستة أشخاص بجانب النافذة.', d: 1 },
      { en: 'We bought fresh juice from the street cart.', ar: 'اشترينا عصيرا طازجا من عربة الشارع.', d: 1 },
      { en: 'Do you have a smaller size in blue?', ar: 'هل لديكم مقاس أصغر باللون الأزرق؟', d: 2 },
      { en: 'It opens at nine in the morning, sir.', ar: 'يفتح في التاسعة صباحا يا سيدي.', d: 1 },
    ],
    patterns: [
      {
        tmpl: '{S} {V} the bill and {VB} a tip.', arTmpl: '{S_ar} {V_ar} الحساب و{VB_ar} إكرامية.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPast('pay'), ar: B.arPast('pay', x.S.agr) }],
          VB: (x) => [{ en: 'left', ar: x.S.agr === 'they' ? 'تركوا' : (x.S.agr === 'we' ? 'تركنا' : (x.S.agr === 'he' ? 'ترك' : 'تركت')) }],
        },
        tags: ['review', 'restaurant'], d: 2, limit: 6,
      },
      {
        tmpl: 'My {F} is allergic to {A}, so {PR} {ASK}.', arTmpl: '{F_ar} {HV_ar} حساسية من {A_ar}، {ASK_ar}.',
        slots: {
          F: [
            { en: 'sister', ar: 'أختي', agr: 'she' }, { en: 'brother', ar: 'أخي', agr: 'he' },
            { en: 'mother', ar: 'أمي', agr: 'she' }, { en: 'son', ar: 'ابني', agr: 'he' },
          ],
          A: [
            { en: 'nuts', ar: 'المكسرات' }, { en: 'eggs', ar: 'البيض' },
            { en: 'milk', ar: 'الحليب' }, { en: 'strawberries', ar: 'الفراولة' },
          ],
          PR: (x) => [{ en: x.F.agr === 'she' ? 'she' : 'he', ar: '' }],
          HV: (x) => [{ en: '', ar: x.F.agr === 'she' ? 'لديها' : 'لديه' }],
          ASK: (x) => [{ en: 'asks the waiter', ar: x.F.agr === 'she' ? 'فهي تسأل النادل' : 'فهو يسأل النادل' }],
        },
        tags: ['review', 'allergies'], d: 3, limit: 12,
      },
      {
        tmpl: 'The pharmacist gave me {M} for {SY}.', arTmpl: 'أعطاني الصيدلي {M_ar} {SY_ar}.',
        slots: {
          M: [
            { en: 'pills', ar: 'حبوبا' }, { en: 'an ointment', ar: 'مرهما' }, { en: 'vitamins', ar: 'فيتامينات' },
          ],
          SY: [
            { en: 'my cough', ar: 'للكحة' }, { en: 'my headache', ar: 'للصداع' },
            { en: 'my sore throat', ar: 'للتهاب الحلق' }, { en: 'my allergy', ar: 'للحساسية' },
          ],
        },
        tags: ['review', 'pharmacy'], d: 2, limit: 10,
      },
      {
        tmpl: 'I want to {V} {N} to {C}.', arTmpl: 'أريد {V_ar} {N_ar} إلى {C_ar}.',
        slots: {
          V: [
            { en: 'send', ar: 'إرسال' }, { en: 'mail', ar: 'إرسال بالبريد' }, { en: 'take', ar: 'أخذ' },
          ],
          N: [
            { en: 'this letter', ar: 'هذه الرسالة' }, { en: 'this package', ar: 'هذا الطرد' },
            { en: 'this postcard', ar: 'هذه البطاقة البريدية' },
          ],
          C: B.COUNTRIES,
        },
        tags: ['review', 'post-office'], d: 2, limit: 8,
      },
      {
        tmpl: 'I called customer service {T} about {N}.', arTmpl: 'اتصلت بخدمة العملاء {T_ar} {N_ar}.',
        slots: {
          T: [
            { en: 'twice this week', ar: 'مرتين هذا الأسبوع' }, { en: 'three times', ar: 'ثلاث مرات' },
            { en: 'yesterday morning', ar: 'أمس صباحا' }, { en: 'again today', ar: 'مرة أخرى اليوم' },
          ],
          N: [
            { en: 'my order', ar: 'بخصوص طلبي' }, { en: 'my broken phone', ar: 'بخصوص هاتفي المعطل' },
            { en: 'my late delivery', ar: 'بخصوص توصيلي المتأخر' },
          ],
        },
        tags: ['review', 'customer-service'], d: 3, limit: 10,
      },
    ],
    fills: [
      { en: 'The service at that restaurant is slow.', ar: 'الخدمة في ذلك المطعم بطيئة.', word: 'service', hint: 'خدمة' },
      { en: 'I paid the bill with my credit card.', ar: 'دفعت الحساب ببطاقتي الائتمانية.', word: 'bill', hint: 'حساب' },
      { en: 'This shirt is the wrong size.', ar: 'هذا القميص بمقاس خاطئ.', word: 'size', hint: 'مقاس' },
      { en: 'Do you have this dress in green?', ar: 'هل لديكم هذا الفستان بالأخضر؟', word: 'dress', hint: 'فستان' },
      { en: 'The pharmacy opens at nine sharp.', ar: 'تفتح الصيدلية في التاسعة تماما.', word: 'pharmacy', hint: 'صيدلية' },
      { en: 'The barber washed my hair before cutting.', ar: 'غسل الحلاق شعري قبل القص.', word: 'barber', hint: 'حلاق' },
      { en: 'My order did not arrive on time.', ar: 'لم يصل طلبي في الوقت المحدد.', word: 'order', hint: 'طلب' },
      { en: 'Please fill out this form first.', ar: 'من فضلك املأ هذه الاستمارة أولا.', word: 'form', hint: 'استمارة' },
      { en: 'I need a receipt for my expense report.', ar: 'أحتاج إلى إيصال لتقرير مصاريفي.', word: 'receipt', hint: 'إيصال' },
      { en: 'The locker room was full after work.', ar: 'كانت غرفة تبديل الملابس ممتلئة بعد العمل.', word: 'locker', hint: 'خزانة' },
    ],
    orders: [
      { en: 'We ordered two large pizzas last night.', ar: 'طلبنا بيتزتين كبيرتين ليلة أمس.' },
      { en: 'Can I exchange this sweater for a bigger one?', ar: 'هل يمكنني استبدال هذه الكنزة بأكبر منها؟' },
      { en: 'The supermarket near my house is open late.', ar: 'السوبر ماركت قرب بيتي يفتح حتى وقت متأخر.' },
      { en: 'I opened a bank account for my salary.', ar: 'فتحت حسابا بنكيا لراتبي.' },
      { en: 'My complaint about the delivery was answered.', ar: 'تم الرد على شكاوتي بخصوص التوصيل.' },
      { en: 'She reserved a table by the window at eight.', ar: 'حجزت طاولة بجانب النافذة في الثامنة.' },
      { en: 'We bought corn on the cob from the cart.', ar: 'اشترينا الذرة المشوية من العربة.' },
    ],
    mc: [
      { question: 'Where can you buy cough syrup?', options: ['at the pharmacy', 'at the butcher', 'at the cinema', 'at the barber'], answerIndex: 0, ar: 'أين تشتري شراب الكحة؟' },
      { question: 'What do you call money returned for a product you take back?', options: ['a refund', 'a receipt', 'a delivery', 'a discount'], answerIndex: 0, ar: 'ماذا نسمي المال المعاد عند إرجاع منتج؟' },
      { question: 'Who cuts your hair?', options: ['the barber', 'the waiter', 'the librarian', 'the plumber'], answerIndex: 0, ar: 'من يقص شعرك؟' },
      { question: 'If a show has no more tickets, it is:', options: ['sold out', 'on sale', 'half price', 'subtitled'], answerIndex: 0, ar: 'إذا نفدت تذاكر العرض، فهو:' },
      { question: 'You ask for "a table for four" when you want to:', options: ['eat at a restaurant', 'join a gym', 'mail a package', 'order medicine'], answerIndex: 0, ar: 'تطلب "طاولة لأربعة" عندما تريد:' },
    ],
  },
];
