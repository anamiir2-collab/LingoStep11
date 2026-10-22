/* ============================================================
   v2 section data — s06-b2.js
   Health & Emergencies · lessons 135–137 (A2)
   135 Sleep and Rest · 136 Exercise and Physical Activity ·
   137 Nutrition and Healthy Food
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 135 — Sleep and Rest ================= */
  {
    num: 135,
    tags: ['sleep', 'health'],
    objectives: [
      'Talk about your sleep times and habits',
      'Describe feeling tired and taking rest',
      'Give advice for better sleep',
    ],
    grammar: {
      explanation: 'Use the past simple for last night\'s sleep: "I slept eight hours last night", "He didn\'t sleep well yesterday". For habits, use the present simple: "She goes to bed at nine every night", "I wake up at six". Give advice with the imperative: "Go to bed early", "Take a short nap", "Turn off the phone before bed". Say what helps with "helps me": "A dark and quiet room helps me sleep". Ask about routines with "What time do you usually wake up?".',
      explanationAr: 'استخدم الماضي البسيط لنوم الليلة الماضية: I slept eight hours last night، He didn\'t sleep well yesterday. وللعادات استخدم المضارع البسيط: She goes to bed at nine every night، I wake up at six. وانصح بفعل الأمر: Go to bed early، Take a short nap، Turn off the phone before bed. وللدلالة على ما يساعدك استخدم helps me: A dark and quiet room helps me sleep. واسأل عن العادات بـ What time do you usually wake up؟',
      examples: [
        { en: 'I slept eight hours last night.', ar: 'نمت ثماني ساعات الليلة الماضية.' },
        { en: 'Take a short nap after lunch.', ar: 'خذ قيلولة قصيرة بعد الغداء.' },
        { en: 'What time do you usually wake up?', ar: 'متى تستيقظ عادة؟' },
      ],
    },
    vocabulary: [
      { word: 'sleep', meaningAr: 'ينام / نوم', example: 'I sleep seven hours every night.' },
      { word: 'go to bed', meaningAr: 'يذهب إلى الفراش', example: 'Go to bed early tonight.' },
      { word: 'nap', meaningAr: 'قيلولة', example: 'Take a short nap after lunch.', ipa: 'næp' },
      { word: 'tired', meaningAr: 'متعب', example: 'I feel tired in the morning.' },
      { word: 'rest', meaningAr: 'راحة / يستريح', example: 'Rest is important for your body.' },
      { word: 'wake up', meaningAr: 'يستيقظ', example: 'I wake up at six every day.' },
      { word: 'early', meaningAr: 'مبكرا', example: 'She goes to bed early.' },
      { word: 'quiet', meaningAr: 'هادئ', example: 'A quiet room helps me sleep.', ipa: 'ˈkwaɪət' },
      { word: 'dark', meaningAr: 'مظلم', example: 'The bedroom is dark at night.' },
      { word: 'hour', meaningAr: 'ساعة', example: 'We need eight hours of sleep.' },
      { word: 'relax', meaningAr: 'يسترخي', example: 'Reading a book helps me relax.' },
      { word: 'dream', meaningAr: 'حلم / يحلم', example: 'I had a sweet dream last night.' },
    ],
    scenario: [
      { en: 'Go to bed early tonight.', ar: 'اذهب إلى الفراش مبكرا الليلة.', d: 1 },
      { en: 'I slept eight hours last night.', ar: 'نمت ثماني ساعات الليلة الماضية.', d: 1 },
      { en: 'I feel tired in the morning.', ar: 'أشعر بالتعب في الصباح.', d: 1 },
      { en: 'Take a short nap after lunch.', ar: 'خذ قيلولة قصيرة بعد الغداء.', d: 1 },
      { en: 'Turn off the phone before bed.', ar: 'أطفئ الهاتف قبل النوم.', d: 1 },
      { en: 'She goes to bed at nine every night.', ar: 'هي تذهب إلى الفراش في التاسعة كل ليلة.', d: 2 },
      { en: 'Do you sleep well at night?', ar: 'هل تنام جيدا في الليل؟', d: 1 },
      { en: 'No, I wake up many times.', ar: 'لا، أستيقظ مرات عديدة.', d: 1 },
      { en: 'We need eight hours of sleep.', ar: 'نحتاج ثماني ساعات من النوم.', d: 1 },
      { en: 'My baby sleeps in the afternoon.', ar: 'طفلي ينام بعد الظهر.', d: 2 },
      { en: 'Don\'t drink coffee at night.', ar: 'لا تشرب القهوة في الليل.', d: 1 },
      { en: 'A dark and quiet room helps me sleep.', ar: 'الغرفة المظلمة الهادئة تساعدني على النوم.', d: 2 },
      { en: 'He didn\'t sleep well yesterday.', ar: 'هو لم ينم جيدا أمس.', d: 2 },
      { en: 'Reading a book helps me relax.', ar: 'قراءة كتاب تساعدني على الاسترخاء.', d: 2 },
      { en: 'What time do you usually wake up?', ar: 'متى تستيقظ عادة؟', d: 1 },
      { en: 'Rest is important for your body.', ar: 'الراحة مهمة لجسمك.', d: 2 },
      { en: 'I sleep well on rainy nights.', ar: 'أنام جيدا في الليالي الممطرة.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I go to bed at {T}.', arTmpl: 'أذهب إلى الفراش في {T_ar}.',
        slots: {
          T: [
            { en: 'nine o\'clock', ar: 'الساعة التاسعة' }, { en: 'ten o\'clock', ar: 'الساعة العاشرة' },
            { en: 'eleven o\'clock', ar: 'الساعة الحادية عشرة' }, { en: 'midnight', ar: 'منتصف الليل' },
          ],
        },
        tags: ['sleep', 'time'], d: 1, limit: 4,
      },
      {
        tmpl: '{S} {V} {H} every night.', arTmpl: '{S_ar} {V_ar} {H_ar} كل ليلة.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('sleep', x.S.agr), ar: B.arPresent('sleep', x.S.agr) }],
          H: [
            { en: 'well', ar: 'جيدا' }, { en: 'deeply', ar: 'بعمق' },
            { en: 'eight hours', ar: 'ثماني ساعات' }, { en: 'early', ar: 'مبكرا' },
          ],
        },
        tags: ['sleep', 'present-simple'], d: 2, limit: 16,
      },
      {
        tmpl: 'Take {N} in the afternoon.', arTmpl: 'خذ {N_ar} بعد الظهر.',
        slots: {
          N: [
            { en: 'a short nap', ar: 'قيلولة قصيرة' }, { en: 'a deep breath', ar: 'نفسا عميقا' },
            { en: 'a warm shower', ar: 'دشا دافئا' }, { en: 'a quiet break', ar: 'استراحة هادئة' },
          ],
        },
        tags: ['sleep', 'rest'], d: 1, limit: 4,
      },
      {
        tmpl: 'Turn off {D} before bed.', arTmpl: 'أطفئ {D_ar} قبل النوم.',
        slots: {
          D: [
            { en: 'your phone', ar: 'هاتفك' }, { en: 'the TV', ar: 'التلفاز' },
            { en: 'the lights', ar: 'الأنوار' }, { en: 'the computer', ar: 'الحاسوب' },
          ],
        },
        tags: ['sleep', 'advice'], d: 1, limit: 4,
      },
      {
        tmpl: '{S} {BE} tired {T}.', arTmpl: '{S_ar} {ADJ_ar} {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          BE: (x) => [{ en: B.AGR[x.S.agr].be, ar: '' }],
          ADJ: (x) => [{
            en: 'tired',
            ar: x.S.agr === 'she' ? 'متعبة' : (x.S.agr === 'we' || x.S.agr === 'they') ? 'متعبون' : 'متعب',
          }],
          T: [
            { en: 'this morning', ar: 'هذا الصباح' }, { en: 'after work', ar: 'بعد العمل' },
            { en: 'in the evening', ar: 'في المساء' }, { en: 'after the game', ar: 'بعد المباراة' },
          ],
        },
        tags: ['sleep', 'feelings'], d: 1, limit: 16,
      },
    ],
    fills: [
      { en: 'Go to bed early tonight.', ar: 'اذهب إلى الفراش مبكرا الليلة.', word: 'bed' },
      { en: 'I slept eight hours last night.', ar: 'نمت ثماني ساعات الليلة الماضية.', word: 'slept' },
      { en: 'Take a short nap after lunch.', ar: 'خذ قيلولة قصيرة بعد الغداء.', word: 'nap' },
      { en: 'Turn off the phone before bed.', ar: 'أطفئ الهاتف قبل النوم.', word: 'Turn' },
      { en: 'Do you sleep well at night?', ar: 'هل تنام جيدا في الليل؟', word: 'sleep' },
      { en: 'We need eight hours of sleep.', ar: 'نحتاج ثماني ساعات من النوم.', word: 'hours' },
      { en: 'He didn\'t sleep well yesterday.', ar: 'هو لم ينم جيدا أمس.', word: 'yesterday' },
      { en: 'What time do you usually wake up?', ar: 'متى تستيقظ عادة؟', word: 'wake' },
    ],
    orders: [
      { en: 'I slept eight hours last night.', ar: 'نمت ثماني ساعات الليلة الماضية.' },
      { en: 'Go to bed early tonight.', ar: 'اذهب إلى الفراش مبكرا الليلة.' },
      { en: 'Take a short nap after lunch.', ar: 'خذ قيلولة قصيرة بعد الغداء.' },
      { en: 'Turn off the phone before bed.', ar: 'أطفئ الهاتف قبل النوم.' },
      { en: 'What time do you usually wake up?', ar: 'متى تستيقظ عادة؟' },
      { en: 'Rest is important for your body.', ar: 'الراحة مهمة لجسمك.' },
    ],
    mc: [
      { question: 'How many hours of sleep do we need?', options: ['about eight hours', 'about two hours', 'we never need sleep', 'twenty hours'], answerIndex: 0, ar: 'كم ساعة نوم نحتاج؟' },
      { question: 'You feel tired in the afternoon. Good advice is:', options: ['Take a short nap after lunch.', 'Drink five coffees.', 'Run ten kilometers.', 'Turn on all the lights.'], answerIndex: 0, ar: 'تشعر بالتعب بعد الظهر. ما النصح الجيد؟' },
      { question: '"I slept eight hours last night." The action is:', options: ['finished in the past', 'happening now', 'next week', 'a question'], answerIndex: 0, ar: 'فعل النوم في الجملة:' },
      { question: 'What should you do before bed?', options: ['Turn off the phone', 'Call all your friends', 'Drink coffee', 'Play loud music'], answerIndex: 0, ar: 'ماذا تفعل قبل النوم؟' },
    ],
  },

  /* ================= lesson 136 — Exercise and Physical Activity ================= */
  {
    num: 136,
    tags: ['exercise', 'sports'],
    objectives: [
      'Talk about sports and exercise routines',
      'Use frequency phrases like twice a week',
      'Give simple advice about safe exercise',
    ],
    grammar: {
      explanation: 'Use go + -ing for many activities: "I go jogging", "She goes swimming". Use the present simple for routines and add frequency phrases: "I lift weights twice a week", "We cycle on Saturdays". Ask about frequency with "How often do you exercise?". Give instructions with the imperative: "Stretch before you start running". Talk about past actions with the past simple: "I joined the gym last month". The verb play is for games and sports: "They play sports after school".',
      explanationAr: 'استخدم go مع الفعل المنتهي بـ ing للعديد من الأنشطة: I go jogging، She goes swimming. واستخدم المضارع البسيط للروتين مع عبارات التكرار: I lift weights twice a week، We cycle on Saturdays. واسأل عن التكرار بـ How often do you exercise؟ وامنح التعليمات بفعل الأمر: Stretch before you start running. وللأحداث الماضية استخدم الماضي البسيط: I joined the gym last month. وفعل play يخص الألعاب والرياضات: They play sports after school.',
      examples: [
        { en: 'I go jogging in the park every morning.', ar: 'أذهب للجري في الحديقة كل صباح.' },
        { en: 'How often do you exercise?', ar: 'كم مرة تتمرن؟' },
        { en: 'Stretch your arms before you run.', ar: 'تمدد ذراعيك قبل أن تجري.' },
      ],
    },
    vocabulary: [
      { word: 'exercise', meaningAr: 'تمارين / يتمرن', example: 'Exercise is good for your heart.' },
      { word: 'jogging', meaningAr: 'جري خفيف', example: 'I go jogging every morning.', ipa: 'ˈdʒɒɡɪŋ' },
      { word: 'weights', meaningAr: 'أثقال', example: 'I lift weights twice a week.' },
      { word: 'gym', meaningAr: 'صالة رياضية', example: 'I joined the gym near my house.' },
      { word: 'stretch', meaningAr: 'يتمدد', example: 'Stretch before you start running.', ipa: 'strɛtʃ' },
      { word: 'sport', meaningAr: 'رياضة', example: 'Do you play any sports?' },
      { word: 'heart', meaningAr: 'قلب', example: 'Running is good for your heart.' },
      { word: 'strong', meaningAr: 'قوي', example: 'He wants to be strong and healthy.' },
      { word: 'club', meaningAr: 'ناد', example: 'My brother goes to the club.' },
      { word: 'swim', meaningAr: 'يسبح', example: 'She swims on Tuesday and Friday.' },
      { word: 'twice', meaningAr: 'مرتين', example: 'We cycle twice a week.' },
      { word: 'fit', meaningAr: 'لائق بدنيا', example: 'Walking keeps you fit.' },
    ],
    scenario: [
      { en: 'I go jogging in the park every morning.', ar: 'أذهب للجري في الحديقة كل صباح.', d: 1 },
      { en: 'I lift weights twice a week.', ar: 'أرفع الأثقال مرتين في الأسبوع.', d: 1 },
      { en: 'Stretch before you start running.', ar: 'تمدد قبل أن تبدأ الجري.', d: 1 },
      { en: 'I joined the gym near my house.', ar: 'انضممت إلى الصالة الرياضية القريبة من بيتي.', d: 2 },
      { en: 'She swims on Tuesday and Friday.', ar: 'هي تسبح يوم الثلاثاء والجمعة.', d: 2 },
      { en: 'Do you play any sports?', ar: 'هل تمارس أي رياضة؟', d: 1 },
      { en: 'Yes, I play basketball with my friends.', ar: 'نعم، ألعب كرة السلة مع أصدقائي.', d: 1 },
      { en: 'They stretch for ten minutes before the game.', ar: 'هم يتمددون عشر دقائق قبل المباراة.', d: 2 },
      { en: 'Exercise is good for your heart.', ar: 'التمارين جيدة لقلبك.', d: 1 },
      { en: 'My brother goes to the club three times a week.', ar: 'أخي يذهب إلى النادي ثلاث مرات في الأسبوع.', d: 2 },
      { en: 'Don\'t forget to drink water after exercise.', ar: 'لا تنس أن تشرب الماء بعد التمرين.', d: 1 },
      { en: 'I don\'t like running, but I love walking.', ar: 'لا أحب الجري، لكني أعشق المشي.', d: 2 },
      { en: 'How often do you exercise?', ar: 'كم مرة تتمرن؟', d: 1 },
      { en: 'Start slow and be careful.', ar: 'ابدأ ببطء وكن حذرا.', d: 1 },
      { en: 'He wants to be strong and healthy.', ar: 'هو يريد أن يكون قويا بصحة جيدة.', d: 2 },
      { en: 'We walk together after dinner.', ar: 'نتمشى معا بعد العشاء.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I go {A} {T}.', arTmpl: 'أذهب {A_ar} {T_ar}.',
        slots: {
          A: [
            { en: 'jogging', ar: 'للجري' }, { en: 'swimming', ar: 'للسباحة' },
            { en: 'cycling', ar: 'للدراجة الهوائية' },
          ],
          T: [
            { en: 'every morning', ar: 'كل صباح' }, { en: 'on Fridays', ar: 'أيام الجمعة' },
            { en: 'in the summer', ar: 'في الصيف' }, { en: 'after work', ar: 'بعد العمل' },
          ],
        },
        tags: ['exercise', 'activities'], d: 1, limit: 8,
      },
      {
        tmpl: '{S} {V} sports {T}.', arTmpl: '{S_ar} {V_ar} الرياضة {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('play', x.S.agr), ar: B.arPresent('play', x.S.agr) }],
          T: [
            { en: 'every weekend', ar: 'كل نهاية أسبوع' }, { en: 'twice a week', ar: 'مرتين في الأسبوع' },
            { en: 'at the club', ar: 'في النادي' }, { en: 'after school', ar: 'بعد المدرسة' },
          ],
        },
        tags: ['exercise', 'present-simple'], d: 2, limit: 16,
      },
      {
        tmpl: 'Stretch your {B} before you {V}.', arTmpl: 'تمدد {B_ar} قبل أن {V_ar}.',
        slots: {
          B: [
            { en: 'arms', ar: 'ذراعيك' }, { en: 'legs', ar: 'ساقيك' },
            { en: 'back', ar: 'ظهرك' },
          ],
          V: [
            { en: 'run', ar: 'تجري' }, { en: 'swim', ar: 'تسبح' },
            { en: 'play a match', ar: 'تلعب مباراة' },
          ],
        },
        tags: ['exercise', 'imperative'], d: 2, limit: 8,
      },
      {
        tmpl: 'I joined the {P} last month.', arTmpl: 'انضممت إلى {P_ar} الشهر الماضي.',
        slots: {
          P: [
            { en: 'gym', ar: 'الصالة الرياضية' }, { en: 'sports club', ar: 'النادي الرياضي' },
            { en: 'walking group', ar: 'مجموعة المشي' }, { en: 'fitness class', ar: 'حصة اللياقة' },
          ],
        },
        tags: ['exercise', 'past-simple'], d: 2, limit: 4,
      },
    ],
    fills: [
      { en: 'I go jogging in the park every morning.', ar: 'أذهب للجري في الحديقة كل صباح.', word: 'jogging' },
      { en: 'I lift weights twice a week.', ar: 'أرفع الأثقال مرتين في الأسبوع.', word: 'weights' },
      { en: 'Stretch before you start running.', ar: 'تمدد قبل أن تبدأ الجري.', word: 'Stretch' },
      { en: 'I joined the gym near my house.', ar: 'انضممت إلى الصالة الرياضية القريبة من بيتي.', word: 'joined' },
      { en: 'Exercise is good for your heart.', ar: 'التمارين جيدة لقلبك.', word: 'heart' },
      { en: 'Do you play any sports?', ar: 'هل تمارس أي رياضة؟', word: 'sports' },
      { en: 'Don\'t forget to drink water after exercise.', ar: 'لا تنس أن تشرب الماء بعد التمرين.', word: 'forget' },
      { en: 'How often do you exercise?', ar: 'كم مرة تتمرن؟', word: 'often' },
    ],
    orders: [
      { en: 'I go jogging in the park every morning.', ar: 'أذهب للجري في الحديقة كل صباح.' },
      { en: 'I lift weights twice a week.', ar: 'أرفع الأثقال مرتين في الأسبوع.' },
      { en: 'Stretch your arms before you run.', ar: 'تمدد ذراعيك قبل أن تجري.' },
      { en: 'I joined the gym near my house.', ar: 'انضممت إلى الصالة الرياضية القريبة من بيتي.' },
      { en: 'How often do you exercise?', ar: 'كم مرة تتمرن؟' },
      { en: 'Exercise is good for your heart.', ar: 'التمارين جيدة لقلبك.' },
    ],
    mc: [
      { question: '"I lift weights twice a week." How often?', options: ['two times every week', 'two times a year', 'never', 'every hour'], answerIndex: 0, ar: 'كم مرة يرفع الأثقال؟' },
      { question: 'What do you do before you run?', options: ['Stretch your legs', 'Sleep on the grass', 'Eat a big cake', 'Watch television'], answerIndex: 0, ar: 'ماذا تفعل قبل أن تجري؟' },
      { question: '"I joined the gym near my house." means:', options: ['انضممت إلى الصالة الرياضية القريبة من بيتي', 'بنيت صالة رياضية جديدة', 'أغلقت النادي أمس', 'أدرس في المدرسة'], answerIndex: 0, ar: 'ما معنى الجملة؟' },
      { question: 'Which one is exercise?', options: ['Swimming', 'Sleeping', 'Reading', 'Cooking'], answerIndex: 0, ar: 'أيها يعتبر تمرينا رياضيا؟' },
    ],
  },

  /* ================= lesson 137 — Nutrition and Healthy Food ================= */
  {
    num: 137,
    tags: ['nutrition', 'food'],
    objectives: [
      'Talk about healthy food choices',
      'Use less, too much and instead of',
      'Describe a balanced diet simply',
    ],
    grammar: {
      explanation: 'Use too much with uncountable food for "more than is good": "Too much sugar is bad for your teeth". Use less to compare or reduce: "I eat less sugar now". Use instead of to replace one thing with another: "Drink water instead of soft drinks", "I would like grilled chicken instead of fried chicken". Use comparatives for choices: "Grilled chicken is better than fried chicken". Talk about habits with the present simple: "We eat salad with lunch every day", "Try to eat fish twice a week".',
      explanationAr: 'استخدم too much مع الطعام غير المعدود للدلالة على الزيادة: Too much sugar is bad for your teeth. واستخدم less للمقارنة أو التقليل: I eat less sugar now. واستخدم instead of لاستبدال شيء بآخر: Drink water instead of soft drinks، I would like grilled chicken instead of fried chicken. واستخدم صيغة المقارنة للخيارات: Grilled chicken is better than fried chicken. وتحدث عن العادات بالمضارع البسيط: We eat salad with lunch every day، Try to eat fish twice a week.',
      examples: [
        { en: 'Eat fresh fruit every day.', ar: 'كُل الفاكهة الطازجة كل يوم.' },
        { en: 'Drink water instead of soft drinks.', ar: 'اشرب الماء بدلا من المشروبات الغازية.' },
        { en: 'A balanced diet keeps you healthy.', ar: 'الوجبة المتوازنة تبقيك بصحة جيدة.' },
      ],
    },
    vocabulary: [
      { word: 'nutrition', meaningAr: 'تغذية', example: 'Good nutrition starts in the kitchen.', ipa: 'nuːˈtrɪʃən' },
      { word: 'diet', meaningAr: 'نظام غذائي', example: 'A balanced diet keeps you healthy.' },
      { word: 'sugar', meaningAr: 'سكر', example: 'I eat less sugar now.' },
      { word: 'fresh', meaningAr: 'طازج', example: 'Eat fresh fruit every day.' },
      { word: 'grilled', meaningAr: 'مشوي', example: 'Grilled chicken is delicious.', ipa: 'ɡrɪld' },
      { word: 'fried', meaningAr: 'مقلي', example: 'Fried food has a lot of oil.' },
      { word: 'vegetables', meaningAr: 'خضار', example: 'We eat vegetables with lunch.' },
      { word: 'fish', meaningAr: 'سمك', example: 'Try to eat fish twice a week.' },
      { word: 'snack', meaningAr: 'وجبة خفيفة', example: 'Nuts and yogurt are healthy snacks.' },
      { word: 'yogurt', meaningAr: 'زبادي', example: 'I eat yogurt for breakfast.' },
      { word: 'nuts', meaningAr: 'مكسرات', example: 'Nuts are a good snack.' },
      { word: 'healthy', meaningAr: 'صحي', example: 'My mother cooks healthy food.' },
    ],
    scenario: [
      { en: 'Eat fresh fruit every day.', ar: 'كُل الفاكهة الطازجة كل يوم.', d: 1 },
      { en: 'I eat less sugar now.', ar: 'آكل سكرا أقل الآن.', d: 1 },
      { en: 'Grilled chicken is better than fried chicken.', ar: 'الدجاج المشوي أفضل من الدجاج المقلي.', d: 2 },
      { en: 'A balanced diet keeps you healthy.', ar: 'الوجبة المتوازنة تبقيك بصحة جيدة.', d: 1 },
      { en: 'I love home-cooked food.', ar: 'أعشق الطعام المنزلي.', d: 1 },
      { en: 'We eat salad with lunch every day.', ar: 'نأكل السلطة مع الغداء كل يوم.', d: 1 },
      { en: 'Drink water instead of soft drinks.', ar: 'اشرب الماء بدلا من المشروبات الغازية.', d: 1 },
      { en: 'Do you eat breakfast every morning?', ar: 'هل تتناول الفطور كل صباح؟', d: 1 },
      { en: 'Yes, and I never skip lunch.', ar: 'نعم، وأنا لا أتخطى الغداء أبدا.', d: 1 },
      { en: 'Too much sugar is bad for your teeth.', ar: 'الإفراط في السكر سيئ لأسنانك.', d: 2 },
      { en: 'My mother cooks healthy food at home.', ar: 'أمي تطبخ طعاما صحيا في البيت.', d: 1 },
      { en: 'I don\'t eat fast food anymore.', ar: 'لم أعد آكل الوجبات السريعة.', d: 2 },
      { en: 'Try to eat fish twice a week.', ar: 'حاول أن تأكل السمك مرتين في الأسبوع.', d: 2 },
      { en: 'Nuts and yogurt are healthy snacks.', ar: 'المكسرات والزبادي وجبات خفيفة صحية.', d: 2 },
      { en: 'How much water do you drink?', ar: 'كم تشرب من الماء؟', d: 1 },
      { en: 'Good nutrition starts in the kitchen.', ar: 'التغذية الجيدة تبدأ من المطبخ.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I eat {F} {T}.', arTmpl: 'آكل {F_ar} {T_ar}.',
        slots: {
          F: [
            { en: 'tomatoes', ar: 'الطماطم' }, { en: 'grapes', ar: 'العنب' },
            { en: 'lentils', ar: 'العدس' }, { en: 'beans', ar: 'الفاصولياء' },
            { en: 'nuts', ar: 'المكسرات' },
          ],
          T: [
            { en: 'every day', ar: 'كل يوم' }, { en: 'every morning', ar: 'كل صباح' },
            { en: 'at lunch', ar: 'في الغداء' }, { en: 'at dinner', ar: 'في العشاء' },
          ],
        },
        tags: ['nutrition', 'food'], d: 1, limit: 12,
      },
      {
        tmpl: 'Too much {S} is not healthy.', arTmpl: 'الإفراط في {S_ar} غير صحي.',
        slots: {
          S: [
            { en: 'sugar', ar: 'السكر' }, { en: 'salt', ar: 'الملح' },
            { en: 'butter', ar: 'الزبدة' }, { en: 'olive oil', ar: 'زيت الزيتون' },
          ],
        },
        tags: ['nutrition', 'quantifiers'], d: 2, limit: 4,
      },
      {
        tmpl: 'I would like {D} instead of {E}.', arTmpl: 'أريد {D_ar} بدلا من {E_ar}.',
        slots: {
          D: [
            { en: 'grilled chicken', ar: 'الدجاج المشوي' }, { en: 'brown bread', ar: 'الخبز الأسمر' },
            { en: 'fresh fruit', ar: 'الفاكهة الطازجة' }, { en: 'home-cooked food', ar: 'الطعام المنزلي' },
          ],
          E: [
            { en: 'fried chicken', ar: 'الدجاج المقلي' }, { en: 'white bread', ar: 'الخبز الأبيض' },
            { en: 'sweets', ar: 'الحلويات' }, { en: 'fast food', ar: 'الوجبات السريعة' },
          ],
        },
        tags: ['nutrition', 'choices'], d: 2, limit: 10,
      },
      {
        tmpl: '{M} {V} {F} at home.', arTmpl: '{M_ar} {V_ar} {F_ar} في البيت.',
        slots: {
          M: [
            { en: 'My father', ar: 'أبي', agr: 'he' }, { en: 'My grandmother', ar: 'جدتي', agr: 'she' },
            { en: 'My aunt', ar: 'عمتي', agr: 'she' }, { en: 'My sister', ar: 'أختي', agr: 'she' },
          ],
          V: (x) => [{ en: B.enPresent('cook', x.M.agr), ar: B.arPresent('cook', x.M.agr) }],
          F: [
            { en: 'healthy meals', ar: 'وجبات صحية' }, { en: 'delicious soup', ar: 'شوربة لذيذة' },
            { en: 'fresh salad', ar: 'سلطة طازجة' }, { en: 'grilled fish', ar: 'سمكا مشويا' },
          ],
        },
        tags: ['nutrition', 'family'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'Eat fresh fruit every day.', ar: 'كُل الفاكهة الطازجة كل يوم.', word: 'fresh' },
      { en: 'I eat less sugar now.', ar: 'آكل سكرا أقل الآن.', word: 'sugar' },
      { en: 'A balanced diet keeps you healthy.', ar: 'الوجبة المتوازنة تبقيك بصحة جيدة.', word: 'diet' },
      { en: 'I love home-cooked food.', ar: 'أعشق الطعام المنزلي.', word: 'home-cooked' },
      { en: 'Too much sugar is bad for your teeth.', ar: 'الإفراط في السكر سيئ لأسنانك.', word: 'teeth' },
      { en: 'Try to eat fish twice a week.', ar: 'حاول أن تأكل السمك مرتين في الأسبوع.', word: 'fish' },
      { en: 'My mother cooks healthy food at home.', ar: 'أمي تطبخ طعاما صحيا في البيت.', word: 'cooks' },
      { en: 'Drink water instead of soft drinks.', ar: 'اشرب الماء بدلا من المشروبات الغازية.', word: 'instead' },
    ],
    orders: [
      { en: 'Eat fresh fruit every day.', ar: 'كُل الفاكهة الطازجة كل يوم.' },
      { en: 'A balanced diet keeps you healthy.', ar: 'الوجبة المتوازنة تبقيك بصحة جيدة.' },
      { en: 'I would like grilled chicken instead of fried chicken.', ar: 'أريد الدجاج المشوي بدلا من الدجاج المقلي.' },
      { en: 'My mother cooks healthy food at home.', ar: 'أمي تطبخ طعاما صحيا في البيت.' },
      { en: 'How much water do you drink?', ar: 'كم تشرب من الماء؟' },
      { en: 'Good nutrition starts in the kitchen.', ar: 'التغذية الجيدة تبدأ من المطبخ.' },
    ],
    mc: [
      { question: 'Which snack is healthy?', options: ['Nuts and yogurt', 'Candy and cake', 'Chips and soda', 'Ice cream only'], answerIndex: 0, ar: 'أي وجبة خفيفة صحية؟' },
      { question: '"A balanced diet" means:', options: ['وجبة متوازنة فيها أنواع طعام مختلفة', 'أكل المطاعم فقط', 'عدم تناول الطعام', 'أكل السكر فقط'], answerIndex: 0, ar: 'ما معنى A balanced diet؟' },
      { question: 'What should you drink instead of soft drinks?', options: ['Water', 'Cola', 'Energy drinks', 'Syrup'], answerIndex: 0, ar: 'ماذا تشرب بدلا من المشروبات الغازية؟' },
      { question: '"Grilled chicken is better than fried chicken." because it has:', options: ['less oil', 'more sugar', 'more salt', 'no taste'], answerIndex: 0, ar: 'الدجاج المشوي أفضل لأن فيه:' },
    ],
  },
];
