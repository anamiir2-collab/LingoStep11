/* ============================================================
   v2 section data — s05-a1.js
   Mobility & Travel · lessons 96–99 (A2)
   96 Walking and Directions · 97 Buses and Metro ·
   98 Taxis and Ride-Hailing Apps · 99 Driving a Car
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 96 — Walking and Directions ================= */
  {
    num: 96,
    tags: ['walking', 'directions'],
    objectives: [
      'Ask how far a place is on foot',
      'Give simple walking directions',
      'Describe a walking route in your city',
    ],
    grammar: {
      explanation: 'When you walk in a city, use the imperative to give directions: "Walk two blocks", "Turn right", "Cross the street". To talk about distance, say "It is ten minutes away" or "It is a short walk". Ask about distance with "How far is the museum?" or "How long does it take on foot?". For finished actions use the past simple: "I walked to the market yesterday". For plans, say "We are going to walk along the river".',
      explanationAr: 'عندما تمشي في المدينة استخدم صيغة الأمر لإعطاء الاتجاهات: Walk two blocks وTurn right وCross the street. وللتعبير عن المسافة قل It is ten minutes away أو It is a short walk. واسأل عن المسافة بـ How far is the museum؟ أو How long does it take on foot؟ وللأعمال المنتهية استخدم الماضي البسيط: I walked to the market yesterday، وللخطط قل We are going to walk along the river.',
      examples: [
        { en: 'How far is the museum from here?', ar: 'كم يبعد المتحف من هنا؟' },
        { en: 'Walk two blocks and then turn left.', ar: 'امشِ ناويتين ثم انعطف يسارا.' },
        { en: 'I walked to the old market yesterday.', ar: 'مشيت إلى السوق القديم أمس.' },
      ],
    },
    vocabulary: [
      { word: 'on foot', meaningAr: 'على الأقدام', example: 'I go to school on foot.' },
      { word: 'block', meaningAr: 'ناية (مسافة بين شارعين)', example: 'Walk two blocks, please.' },
      { word: 'cross', meaningAr: 'يعبر', example: 'Look both ways, then cross.' },
      { word: 'sidewalk', meaningAr: 'رصيف', example: 'Wait for me on the sidewalk.' },
      { word: 'zebra crossing', meaningAr: 'معبر المشاة', example: 'The zebra crossing is near the school.' },
      { word: 'corner', meaningAr: 'زاوية', example: 'The shop is at the next corner.' },
      { word: 'bridge', meaningAr: 'جسر', example: 'We walked across the bridge.' },
      { word: 'far', meaningAr: 'بعيد', example: 'Is the beach far from here?' },
      { word: 'tourist', meaningAr: 'سائح', example: 'The tourists are walking to the castle.' },
      { word: 'route', meaningAr: 'مسار', example: 'This route is short and safe.' },
      { word: 'shortcut', meaningAr: 'طريق مختصر', example: 'There is a shortcut to the station.' },
      { word: 'minutes away', meaningAr: 'على بُعد دقائق', example: 'The park is ten minutes away.' },
    ],
    scenario: [
      { en: 'Is the museum far from here?', ar: 'هل المتحف بعيد من هنا؟', d: 1 },
      { en: 'No, it is ten minutes away.', ar: 'لا، إنه على بُعد عشر دقائق.', d: 1 },
      { en: 'You can go there on foot.', ar: 'يمكنك الذهاب إلى هناك سيرا على الأقدام.', d: 1 },
      { en: 'Walk two blocks, then turn right.', ar: 'امشِ ناويتين ثم انعطف يمينا.', d: 1 },
      { en: 'Use the zebra crossing to cross the road.', ar: 'استخدم معبر المشاة لعبور الطريق.', d: 1 },
      { en: 'The bridge is twenty minutes away on foot.', ar: 'الجسر يبعد عشرين دقيقة سيرا.', d: 2 },
      { en: 'How long does it take on foot?', ar: 'كم يستغرق ذلك سيرا على الأقدام؟', d: 2 },
      { en: 'It takes about fifteen minutes.', ar: 'يستغرق حوالي خمس عشرة دقيقة.', d: 2 },
      { en: 'Do not walk on the road; use the sidewalk.', ar: 'لا تمشِ على الطريق؛ استخدم الرصيف.', d: 2 },
      { en: 'Is there a shortcut to the station?', ar: 'هل هناك طريق مختصر إلى المحطة؟', d: 2 },
      { en: 'I walked to the old market yesterday.', ar: 'مشيت إلى السوق القديم أمس.', d: 2 },
      { en: 'We are going to walk along the river.', ar: 'سنمشي على ضفاف النهر.', d: 2 },
      { en: 'The tourists are walking to the castle.', ar: 'السائحون يمشون نحو القلعة.', d: 3 },
      { en: 'Can you show me the walking route on the map?', ar: 'هل يمكنك أن تري مسار المشي على الخريطة؟', d: 3 },
      { en: 'Please walk slowly; my legs are tired.', ar: 'امشِ ببطء من فضلك؛ ساقاي متعبتان.', d: 3 },
      { en: 'We will meet at the fountain in the park.', ar: 'سنلتقي عند النافورة في الحديقة.', d: 3 },
      { en: 'Follow this street to the main square.', ar: 'اتبع هذا الشارع حتى الساحة الرئيسية.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'It is {T} away on foot.', arTmpl: 'إنه على بُعد {T_ar} سيرا على الأقدام.',
        slots: {
          T: [
            { en: 'five minutes', ar: 'خمس دقائق' }, { en: 'ten minutes', ar: 'عشر دقائق' },
            { en: 'fifteen minutes', ar: 'خمس عشرة دقيقة' }, { en: 'twenty minutes', ar: 'عشرين دقيقة' },
            { en: 'half an hour', ar: 'نصف ساعة' }, { en: 'one hour', ar: 'ساعة واحدة' },
          ],
        },
        tags: ['directions', 'walking'], d: 1, limit: 6,
      },
      {
        tmpl: 'Walk {N} and then turn {D}.', arTmpl: 'امشِ {N_ar} ثم انعطف {D_ar}.',
        slots: {
          N: [
            { en: 'one block', ar: 'ناية واحدة' }, { en: 'two blocks', ar: 'نايتين' },
            { en: 'three blocks', ar: 'ثلاث نايات' }, { en: 'four blocks', ar: 'أربع نايات' },
          ],
          D: [ { en: 'right', ar: 'يمينا' }, { en: 'left', ar: 'يسارا' } ],
        },
        tags: ['directions', 'walking'], d: 1, limit: 8,
      },
      {
        tmpl: 'Cross the street at the {X}.', arTmpl: 'اعبر الشارع عند {X_ar}.',
        slots: {
          X: [
            { en: 'bridge', ar: 'الجسر' }, { en: 'crossroads', ar: 'التقاطع' },
            { en: 'roundabout', ar: 'الدوار' },
          ],
        },
        tags: ['directions', 'walking'], d: 2, limit: 3,
      },
      {
        tmpl: '{S} {V} to the {PL} {T}.', arTmpl: '{S_ar} {V_ar} إلى {PL_ar} {T_ar}.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'We', ar: 'نحن', agr: 'we' },
            { en: 'They', ar: 'هم', agr: 'they' }, { en: 'My father', ar: 'أبي', agr: 'he' },
          ],
          V: (x) => [{ en: B.enPresent('walk', x.S.agr), ar: B.arPresent('walk', x.S.agr) }],
          PL: [
            { en: 'mosque', ar: 'المسجد' }, { en: 'museum', ar: 'المتحف' },
            { en: 'beach', ar: 'الشاطئ' }, { en: 'old market', ar: 'السوق القديم' },
          ],
          T: [
            { en: 'every day', ar: 'كل يوم' }, { en: 'on Fridays', ar: 'أيام الجمعة' },
            { en: 'in the morning', ar: 'في الصباح' },
          ],
        },
        tags: ['walking', 'present-simple'], d: 2, limit: 24,
      },
    ],
    fills: [
      { en: 'Is the museum far from here?', ar: 'هل المتحف بعيد من هنا؟', word: 'far', hint: 'بعيد' },
      { en: 'It is ten minutes away on foot.', ar: 'إنه على بُعد عشر دقائق سيرا.', word: 'away', hint: 'بُعد' },
      { en: 'Walk two blocks, then turn right.', ar: 'امشِ ناويتين ثم انعطف يمينا.', word: 'blocks' },
      { en: 'Use the zebra crossing to cross the road.', ar: 'استخدم معبر المشاة لعبور الطريق.', word: 'zebra' },
      { en: 'Do not walk on the road; use the sidewalk.', ar: 'لا تمشِ على الطريق؛ استخدم الرصيف.', word: 'sidewalk' },
      { en: 'How long does it take on foot?', ar: 'كم يستغرق ذلك سيرا على الأقدام؟', word: 'foot' },
      { en: 'We are going to walk along the river.', ar: 'سنمشي على ضفاف النهر.', word: 'river' },
      { en: 'We will meet at the fountain in the park.', ar: 'سنلتقي عند النافورة في الحديقة.', word: 'fountain' },
    ],
    orders: [
      { en: 'Is the museum far from here?', ar: 'هل المتحف بعيد من هنا؟' },
      { en: 'Walk two blocks, then turn right.', ar: 'امشِ ناويتين ثم انعطف يمينا.' },
      { en: 'Use the zebra crossing to cross the road.', ar: 'استخدم معبر المشاة لعبور الطريق.' },
      { en: 'I walked to the old market yesterday.', ar: 'مشيت إلى السوق القديم أمس.' },
      { en: 'It takes about fifteen minutes.', ar: 'يستغرق حوالي خمس عشرة دقيقة.' },
      { en: 'We will meet at the fountain in the park.', ar: 'سنلتقي عند النافورة في الحديقة.' },
    ],
    mc: [
      { question: 'How do you ask about distance?', options: ['How far is the museum?', 'How much is the museum?', 'How old is the museum?', 'What time is the museum?'], answerIndex: 0, ar: 'كيف تسأل عن المسافة؟' },
      { question: '"It is ten minutes away" means:', options: ['يبعد عشر دقائق', 'يغلق بعد عشر دقائق', 'يستحق عشرة دولارات', 'رقمه عشرة'], answerIndex: 0, ar: 'ما معنى It is ten minutes away؟' },
      { question: 'Where do pedestrians cross safely?', options: ['At the zebra crossing', 'In the middle of the road', 'On the bridge only', 'Behind the bus'], answerIndex: 0, ar: 'أين يعبر المشاة بأمان؟' },
      { question: 'Choose the correct sentence:', options: ['Walk two blocks and turn left.', 'Walk two block and turn lefts.', 'Walking two block and turning left.', 'Walks two blocks and left turn.'], answerIndex: 0, ar: 'اختر الجملة الصحيحة.' },
    ],
  },

  /* ================= lesson 97 — Buses and Metro ================= */
  {
    num: 97,
    tags: ['transport', 'buses', 'metro'],
    objectives: [
      'Ask which bus or metro line to take',
      'Buy tickets and ask about times',
      'Talk about transfers and short trips',
    ],
    grammar: {
      explanation: 'Use "Which line goes to ...?" to ask about bus and metro lines. Say "A single ticket, please" for one trip and "a day pass" for many trips in one day. Use "can" for possibility and permission: "You can transfer at Central Station". The present simple talks about schedules: "The next metro leaves in four minutes". For finished trips use the past simple: "I bought a day pass yesterday". For plans, say "We are going to take the metro".',
      explanationAr: 'استخدم Which line goes to...؟ للسؤال عن خطوط الحافلات والمترو. قل A single ticket, please لتذكرة ذهاب واحدة وa day pass لعدة رحلات في يوم واحد. واستخدم can للإمكانية والإذن: You can transfer at Central Station. ويستخدم المضارع البسيط للجداول: The next metro leaves in four minutes. وللرحلات المنتهية استخدم الماضي البسيط: I bought a day pass yesterday، وللخطط قل We are going to take the metro.',
      examples: [
        { en: 'Which line goes downtown?', ar: 'أي خط يذهب إلى وسط المدينة؟' },
        { en: 'A single ticket, please.', ar: 'تذكرة ذهاب واحدة، من فضلك.' },
        { en: 'You can transfer at Central Station.', ar: 'يمكنك تبديل الخط في المحطة المركزية.' },
      ],
    },
    vocabulary: [
      { word: 'line', meaningAr: 'خط (نقل)', example: 'Which line goes downtown?' },
      { word: 'single ticket', meaningAr: 'تذكرة ذهاب واحدة', example: 'A single ticket, please.' },
      { word: 'day pass', meaningAr: 'تذكرة يومية', example: 'I bought a day pass yesterday.' },
      { word: 'transfer', meaningAr: 'يبدل الخط', example: 'You can transfer at Central Station.' },
      { word: 'metro station', meaningAr: 'محطة مترو', example: 'The metro station is next to the mall.' },
      { word: 'platform', meaningAr: 'رصيف القطار', example: 'The train leaves from platform three.' },
      { word: 'next', meaningAr: 'القادم', example: 'The next metro leaves in four minutes.' },
      { word: 'crowded', meaningAr: 'مزدحم', example: 'The trains are crowded in the morning.' },
      { word: 'get on', meaningAr: 'يركب', example: 'Get on quickly; the doors are closing.' },
      { word: 'get off', meaningAr: 'ينزل', example: 'Get off at the museum stop.' },
      { word: 'fare', meaningAr: 'أجرة', example: 'The fare is two dollars.' },
      { word: 'stop', meaningAr: 'موقف', example: 'The bus stops at every corner.' },
    ],
    scenario: [
      { en: 'Which line goes downtown?', ar: 'أي خط يذهب إلى وسط المدينة؟', d: 1 },
      { en: 'The blue line goes downtown.', ar: 'الخط الأزرق يذهب إلى وسط المدينة.', d: 1 },
      { en: 'A single ticket, please.', ar: 'تذكرة ذهاب واحدة، من فضلك.', d: 1 },
      { en: 'Does this bus stop at the museum?', ar: 'هل تتوقف هذه الحافلة عند المتحف؟', d: 1 },
      { en: 'No, take line two and change at the park.', ar: 'لا، خذ الخط الثاني وبدّل عند الحديقة.', d: 1 },
      { en: 'The next metro leaves in four minutes.', ar: 'المترو القادم يغادر بعد أربع دقائق.', d: 1 },
      { en: 'Is this seat free, please?', ar: 'هل هذا المقعد فارغ من فضلك؟', d: 2 },
      { en: 'Yes, sit down, please.', ar: 'نعم، اجلس من فضلك.', d: 2 },
      { en: 'The metro station is next to the mall.', ar: 'محطة المترو بجوار المركز التجاري.', d: 2 },
      { en: 'How often do the buses run?', ar: 'كم مرة تمر الحافلات؟', d: 2 },
      { en: 'They run every ten minutes on weekdays.', ar: 'تمر كل عشر دقائق في أيام الأسبوع.', d: 2 },
      { en: 'I bought a day pass yesterday.', ar: 'اشتريت تذكرة يومية أمس.', d: 2 },
      { en: 'We are going to take the metro to the stadium.', ar: 'سنأخذ المترو إلى الملعب.', d: 2 },
      { en: 'Do not stand near the doors.', ar: 'لا تقف قرب الأبواب.', d: 3 },
      { en: 'The trains are crowded in the morning.', ar: 'القطارات مزدحمة في الصباح.', d: 3 },
      { en: 'Will this bus take me to the airport?', ar: 'هل ستأخذني هذه الحافلة إلى المطار؟', d: 3 },
      { en: 'I missed the last metro last night.', ar: 'فاتني آخر مترو الليلة الماضية.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'The {C} line goes to {PL}.', arTmpl: 'الخط {C_ar} يذهب إلى {PL_ar}.',
        slots: {
          C: [
            { en: 'blue', ar: 'الأزرق' }, { en: 'red', ar: 'الأحمر' },
            { en: 'green', ar: 'الأخضر' }, { en: 'yellow', ar: 'الأصفر' },
          ],
          PL: [
            { en: 'the airport', ar: 'المطار' }, { en: 'the stadium', ar: 'الملعب' },
            { en: 'the harbor', ar: 'الميناء' }, { en: 'the university', ar: 'الجامعة' },
          ],
        },
        tags: ['transport', 'metro'], d: 1, limit: 12,
      },
      {
        tmpl: 'You can transfer at {ST}.', arTmpl: 'يمكنك تبديل الخط في {ST_ar}.',
        slots: {
          ST: [
            { en: 'Central Station', ar: 'المحطة المركزية' }, { en: 'City Square', ar: 'ساحة المدينة' },
            { en: 'North Gate', ar: 'البوابة الشمالية' }, { en: 'River Stop', ar: 'موقف النهر' },
          ],
        },
        tags: ['transport', 'buses'], d: 2, limit: 4,
      },
      {
        tmpl: 'The next {M} leaves in {T}.', arTmpl: '{M_ar} القادم يغادر بعد {T_ar}.',
        slots: {
          M: [
            { en: 'metro', ar: 'المترو' }, { en: 'bus', ar: 'الحافلة' },
            { en: 'train', ar: 'القطار' },
          ],
          T: [
            { en: 'three minutes', ar: 'ثلاث دقائق' }, { en: 'five minutes', ar: 'خمس دقائق' },
            { en: 'ten minutes', ar: 'عشر دقائق' },
          ],
        },
        tags: ['transport', 'time'], d: 2, limit: 9,
      },
      {
        tmpl: '{S} {V} the {M} to {PL} {T}.', arTmpl: '{S_ar} {V_ar} {M_ar} إلى {PL_ar} {T_ar}.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'We', ar: 'نحن', agr: 'we' },
            { en: 'My sister', ar: 'أختي', agr: 'she' }, { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{ en: B.enPresent('take', x.S.agr), ar: B.arPresent('take', x.S.agr) }],
          M: [
            { en: 'metro', ar: 'المترو' }, { en: 'bus', ar: 'الحافلة' },
          ],
          PL: [
            { en: 'the mall', ar: 'المركز التجاري' }, { en: 'the office', ar: 'المكتب' },
          ],
          T: [
            { en: 'on Mondays', ar: 'أيام الاثنين' }, { en: 'every morning', ar: 'كل صباح' },
          ],
        },
        tags: ['transport', 'present-simple'], d: 2, limit: 20,
      },
    ],
    fills: [
      { en: 'Which line goes downtown?', ar: 'أي خط يذهب إلى وسط المدينة؟', word: 'line', hint: 'خط نقل' },
      { en: 'A single ticket, please.', ar: 'تذكرة ذهاب واحدة، من فضلك.', word: 'single' },
      { en: 'The next metro leaves in four minutes.', ar: 'المترو القادم يغادر بعد أربع دقائق.', word: 'leaves' },
      { en: 'You can transfer at Central Station.', ar: 'يمكنك تبديل الخط في المحطة المركزية.', word: 'transfer' },
      { en: 'I bought a day pass yesterday.', ar: 'اشتريت تذكرة يومية أمس.', word: 'pass' },
      { en: 'Do not stand near the doors.', ar: 'لا تقف قرب الأبواب.', word: 'doors' },
      { en: 'How often do the buses run?', ar: 'كم مرة تمر الحافلات؟', word: 'often' },
      { en: 'Will this bus take me to the airport?', ar: 'هل ستأخذني هذه الحافلة إلى المطار؟', word: 'airport' },
    ],
    orders: [
      { en: 'Which line goes downtown?', ar: 'أي خط يذهب إلى وسط المدينة؟' },
      { en: 'A single ticket, please.', ar: 'تذكرة ذهاب واحدة، من فضلك.' },
      { en: 'The next metro leaves in four minutes.', ar: 'المترو القادم يغادر بعد أربع دقائق.' },
      { en: 'You can transfer at Central Station.', ar: 'يمكنك تبديل الخط في المحطة المركزية.' },
      { en: 'The trains are crowded in the morning.', ar: 'القطارات مزدحمة في الصباح.' },
      { en: 'I missed the last metro last night.', ar: 'فاتني آخر مترو الليلة الماضية.' },
    ],
    mc: [
      { question: 'Which ticket is good for many trips in one day?', options: ['A day pass', 'A single ticket', 'A parking ticket', 'A boarding pass'], answerIndex: 0, ar: 'أي تذكرة تصلح لعدة رحلات في يوم واحد؟' },
      { question: '"You can transfer at Central Station" means:', options: ['يمكنك تبديل الخط في المحطة المركزية', 'يمكنك شراء تذكرة هناك', 'المحطة مغلقة اليوم', 'المحطة بعيدة جدا'], answerIndex: 0, ar: 'ما معنى You can transfer at Central Station؟' },
      { question: 'In "The next metro leaves in four minutes", "leaves" means:', options: ['يغادر', 'ينام', 'يشتري', 'ينسى'], answerIndex: 0, ar: 'ما معنى leaves في الجملة؟' },
      { question: 'Where do you get on the metro?', options: ['At the metro station', 'At the gas station', 'In a taxi', 'At the airport gate'], answerIndex: 0, ar: 'أين تركب المترو؟' },
      { question: 'Choose the correct question:', options: ['Which line goes downtown?', 'Which line go downtown?', 'Which lines goes to downtown?', 'Which go line downtown?'], answerIndex: 0, ar: 'اختر السؤال الصحيح.' },
    ],
  },

  /* ================= lesson 98 — Taxis and Ride-Hailing Apps ================= */
  {
    num: 98,
    tags: ['taxi', 'ride-hailing', 'apps'],
    objectives: [
      'Book and cancel a ride in an app',
      'Talk to the driver about the trip',
      'Ask about fares and payment',
    ],
    grammar: {
      explanation: 'Use "will" for decisions and promises: "I will book a ride to the station". Use "going to" for plans: "We are going to book a ride to the museum". The present continuous describes what is happening now: "The driver is arriving in three minutes". Use the past simple for finished actions: "I booked a ride this morning". Polite requests start with "Can you ... please?": "Can you share the trip with me, please?".',
      explanationAr: 'استخدم will للقرارات والوعود: I will book a ride to the station. واستخدم going to للخطط: We are going to book a ride to the museum. ويصف المضارع المستمر ما يحدث الآن: The driver is arriving in three minutes. واستخدم الماضي البسيط للأعمال المنتهية: I booked a ride this morning. وتبدأ الطلبات المهذبة بـ Can you ... please؟ مثل Can you share the trip with me, please؟',
      examples: [
        { en: 'I will book a ride to the station.', ar: 'سأحجز رحلة إلى المحطة.' },
        { en: 'The driver is arriving in three minutes.', ar: 'السائق سيصل بعد ثلاث دقائق.' },
        { en: 'Can you share the trip with me, please?', ar: 'هل يمكنك مشاركة الرحلة معي من فضلك؟' },
      ],
    },
    vocabulary: [
      { word: 'ride', meaningAr: 'رحلة نقل', example: 'I will book a ride to the station.' },
      { word: 'book a ride', meaningAr: 'يحجز رحلة', example: 'Book a ride from the app, please.' },
      { word: 'driver', meaningAr: 'سائق', example: 'The driver is arriving in three minutes.' },
      { word: 'share the trip', meaningAr: 'يشارك الرحلة', example: 'You can share the trip with your family.' },
      { word: 'cancel', meaningAr: 'يلغي', example: 'Cancel the ride; the driver is late.' },
      { word: 'fare estimate', meaningAr: 'تقدير الأجرة', example: 'The fare estimate is twelve dollars.' },
      { word: 'pickup point', meaningAr: 'نقطة الالتقاء', example: 'Wait for me at the pickup point.' },
      { word: 'cash', meaningAr: 'نقدا', example: 'Do not pay cash; pay with the app.' },
      { word: 'rate', meaningAr: 'يقيّم / تقييم', example: 'Please rate your driver after the trip.' },
      { word: 'app', meaningAr: 'تطبيق', example: 'Open the app and book a ride.' },
      { word: 'arriving', meaningAr: 'قادم / يصل', example: 'Your taxi is arriving now.' },
      { word: 'late', meaningAr: 'متأخر', example: 'The driver is ten minutes late.' },
    ],
    scenario: [
      { en: 'I will book a ride to the station.', ar: 'سأحجز رحلة إلى المحطة.', d: 1 },
      { en: 'Good idea; the bus is slow today.', ar: 'فكرة جيدة؛ الحافلة بطيئة اليوم.', d: 1 },
      { en: 'The driver is arriving in three minutes.', ar: 'السائق سيصل بعد ثلاث دقائق.', d: 1 },
      { en: 'Where is the pickup point?', ar: 'أين نقطة الالتقاء؟', d: 1 },
      { en: 'It is at the north gate of the mall.', ar: 'إنها عند البوابة الشمالية للمركز التجاري.', d: 1 },
      { en: 'The fare estimate is twelve dollars.', ar: 'تقدير الأجرة اثنا عشر دولارا.', d: 1 },
      { en: 'Can you share the trip with me, please?', ar: 'هل يمكنك مشاركة الرحلة معي من فضلك؟', d: 2 },
      { en: 'Yes, I will share it with you now.', ar: 'نعم، سأشاركها معك الآن.', d: 2 },
      { en: 'We need to cancel the ride; the driver is late.', ar: 'يجب أن نلغي الرحلة؛ السائق متأخر.', d: 2 },
      { en: 'I booked a ride with the app this morning.', ar: 'حجزت رحلة بالتطبيق هذا الصباح.', d: 2 },
      { en: 'Do not pay cash; pay with the app.', ar: 'لا تدفع نقدا؛ ادفع بالتطبيق.', d: 2 },
      { en: 'The driver called me when he arrived.', ar: 'اتصل بي السائق عندما وصل.', d: 3 },
      { en: 'Are ride apps cheap in this city?', ar: 'هل تطبيقات النقل رخيصة في هذه المدينة؟', d: 3 },
      { en: 'The driver rated me five stars.', ar: 'قيّمني السائق بخمس نجوم.', d: 3 },
      { en: 'We are going to book a ride to the museum.', ar: 'سنحجز رحلة إلى المتحف.', d: 3 },
      { en: 'My phone died, so I took a taxi.', ar: 'انطفأ هاتفي فأخذت سيارة أجرة.', d: 3 },
      { en: 'Please wait at the pickup point.', ar: 'انتظر عند نقطة الالتقاء من فضلك.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I will book a ride to the {PL} {T}.', arTmpl: 'سأحجز رحلة إلى {PL_ar} {T_ar}.',
        slots: {
          PL: [
            { en: 'station', ar: 'المحطة' }, { en: 'airport', ar: 'المطار' },
            { en: 'market', ar: 'السوق' }, { en: 'stadium', ar: 'الملعب' },
          ],
          T: [
            { en: 'tomorrow', ar: 'غدا' }, { en: 'tonight', ar: 'هذه الليلة' },
            { en: 'on Sunday', ar: 'يوم الأحد' },
          ],
        },
        tags: ['taxi', 'ride-hailing'], d: 1, limit: 12,
      },
      {
        tmpl: 'The driver is {MIN} away.', arTmpl: 'السائق يبعد {MIN_ar}.',
        slots: {
          MIN: [
            { en: 'one minute', ar: 'دقيقة واحدة' }, { en: 'two minutes', ar: 'دقيقتين' },
            { en: 'five minutes', ar: 'خمس دقائق' }, { en: 'ten minutes', ar: 'عشر دقائق' },
          ],
        },
        tags: ['taxi', 'ride-hailing'], d: 2, limit: 4,
      },
      {
        tmpl: '{S} {V} a ride to {PL} {T}.', arTmpl: '{S_ar} {V_ar} رحلة إلى {PL_ar} {T_ar}.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'We', ar: 'نحن', agr: 'we' },
            { en: 'My mother', ar: 'أمي', agr: 'she' }, { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{ en: B.enPast('book'), ar: B.arPast('book', x.S.agr) }],
          PL: [
            { en: 'the hotel', ar: 'الفندق' }, { en: 'the airport', ar: 'المطار' },
            { en: 'the clinic', ar: 'العيادة' },
          ],
          T: [
            { en: 'yesterday', ar: 'أمس' }, { en: 'last night', ar: 'الليلة الماضية' },
            { en: 'this morning', ar: 'هذا الصباح' },
          ],
        },
        tags: ['taxi', 'past-simple'], d: 2, limit: 20,
      },
      {
        tmpl: 'Can you share the trip with {P}?', arTmpl: 'يمكنك مشاركة الرحلة مع {P_ar}؟',
        slots: {
          P: [
            { en: 'your family', ar: 'عائلتك' }, { en: 'your friends', ar: 'أصدقائك' },
            { en: 'your teacher', ar: 'معلمك' },
          ],
        },
        tags: ['taxi', 'requests'], d: 2, limit: 3,
      },
    ],
    fills: [
      { en: 'I will book a ride to the station.', ar: 'سأحجز رحلة إلى المحطة.', word: 'book' },
      { en: 'The driver is arriving in three minutes.', ar: 'السائق سيصل بعد ثلاث دقائق.', word: 'arriving' },
      { en: 'Where is the pickup point?', ar: 'أين نقطة الالتقاء؟', word: 'pickup' },
      { en: 'The fare estimate is twelve dollars.', ar: 'تقدير الأجرة اثنا عشر دولارا.', word: 'fare' },
      { en: 'Do not pay cash; pay with the app.', ar: 'لا تدفع نقدا؛ ادفع بالتطبيق.', word: 'cash' },
      { en: 'Can you share the trip with me, please?', ar: 'هل يمكنك مشاركة الرحلة معي من فضلك؟', word: 'share' },
      { en: 'We need to cancel the ride; the driver is late.', ar: 'يجب أن نلغي الرحلة؛ السائق متأخر.', word: 'cancel' },
      { en: 'The driver rated me five stars.', ar: 'قيّمني السائق بخمس نجوم.', word: 'stars' },
    ],
    orders: [
      { en: 'I will book a ride to the station.', ar: 'سأحجز رحلة إلى المحطة.' },
      { en: 'The driver is arriving in three minutes.', ar: 'السائق سيصل بعد ثلاث دقائق.' },
      { en: 'Where is the pickup point?', ar: 'أين نقطة الالتقاء؟' },
      { en: 'The fare estimate is twelve dollars.', ar: 'تقدير الأجرة اثنا عشر دولارا.' },
      { en: 'Do not pay cash; pay with the app.', ar: 'لا تدفع نقدا؛ ادفع بالتطبيق.' },
      { en: 'Can you share the trip with me, please?', ar: 'هل يمكنك مشاركة الرحلة معي من فضلك؟' },
    ],
    mc: [
      { question: 'You want to stop a booked ride. You tap:', options: ['Cancel the ride', 'Share the trip', 'Book a ride', 'Rate the driver'], answerIndex: 0, ar: 'تريد إلغاء رحلة محجوزة، فتضغط:' },
      { question: '"fare estimate" means:', options: ['تقدير تكلفة الرحلة', 'وقت وصول الحافلة', 'عدد النجوم', 'عنوان السائق'], answerIndex: 0, ar: 'ما معنى fare estimate؟' },
      { question: '"The driver is arriving in three minutes" means:', options: ['سيصل بعد ثلاث دقائق', 'وصل قبل ثلاث دقائق', 'غادر قبل ثلاث دقائق', 'يبعد ثلاثة كيلومترات'], answerIndex: 0, ar: 'ما معنى الجملة؟' },
      { question: 'Where do you wait for your ride?', options: ['At the pickup point', 'Inside the trunk', 'On the highway', 'Under the bridge'], answerIndex: 0, ar: 'أين تنتظر رحلتك؟' },
      { question: 'Choose the correct sentence:', options: ['I will book a ride tonight.', 'I will booked a ride tonight.', 'I booking a ride will tonight.', 'I wills book a ride tonight.'], answerIndex: 0, ar: 'اختر الجملة الصحيحة.' },
    ],
  },

  /* ================= lesson 99 — Driving a Car ================= */
  {
    num: 99,
    tags: ['driving', 'car', 'safety'],
    objectives: [
      'Use car and road safety words',
      'Follow and give driving rules',
      'Talk about driving in the past and future',
    ],
    grammar: {
      explanation: 'Use the imperative for driving instructions: "Fasten your seatbelt", "Slow down", "Give way". Use "must" for strong rules: "You must stop at the red light". The past simple describes finished actions: "I got my driver\'s license last month"; "He drove carefully on the highway". For future plans use "going to" or "will": "We are going to drive to the mountains tomorrow"; "Will you drive me home?"',
      explanationAr: 'استخدم صيغة الأمر لتعليمات القيادة: Fasten your seatbelt وSlow down وGive way. واستخدم must للقواعد القوية: You must stop at the red light. ويصف الماضي البسيط الأعمال المنتهية: I got my driver\'s license last month وHe drove carefully on the highway. وللخطط المستقبلية استخدم going to أو will: We are going to drive to the mountains tomorrow وWill you drive me home؟',
      examples: [
        { en: 'Fasten your seatbelt, please.', ar: 'اربط حزام الأمان من فضلك.' },
        { en: 'You must stop at the red light.', ar: 'يجب أن تتوقف عند الإشارة الحمراء.' },
        { en: 'I got my driver\'s license last month.', ar: 'حصلت على رخصة القيادة الشهر الماضي.' },
      ],
    },
    vocabulary: [
      { word: 'seatbelt', meaningAr: 'حزام الأمان', example: 'Fasten your seatbelt, please.' },
      { word: 'speed limit', meaningAr: 'السرعة المسموحة', example: 'The speed limit here is fifty kilometers.' },
      { word: 'red light', meaningAr: 'إشارة حمراء', example: 'Stop at the red light.' },
      { word: 'green light', meaningAr: 'إشارة خضراء', example: 'Go when the light is green.' },
      { word: 'give way', meaningAr: 'تنازل لغيرك', example: 'Give way to the pedestrians.' },
      { word: "driver's license", meaningAr: 'رخصة قيادة', example: "I got my driver's license last month." },
      { word: 'highway', meaningAr: 'طريق سريع', example: 'He drove carefully on the highway.' },
      { word: 'mirrors', meaningAr: 'المرايا', example: 'Always check your mirrors before you move.' },
      { word: 'slow down', meaningAr: 'تمهّل / خفف السرعة', example: 'Slow down before the school.' },
      { word: 'carefully', meaningAr: 'بحذر', example: 'Drive carefully when it rains.' },
      { word: 'junction', meaningAr: 'تقاطع', example: 'Give way at the junction.' },
      { word: 'traffic rules', meaningAr: 'قواعد المرور', example: 'Follow the traffic rules, please.' },
    ],
    scenario: [
      { en: 'Fasten your seatbelt, please.', ar: 'اربط حزام الأمان من فضلك.', d: 1 },
      { en: 'The speed limit here is fifty kilometers.', ar: 'السرعة المسموحة هنا خمسون كيلومترا.', d: 1 },
      { en: 'Stop at the red light.', ar: 'توقف عند الإشارة الحمراء.', d: 1 },
      { en: 'Give way to the pedestrians.', ar: 'تنازل للمشاة.', d: 1 },
      { en: 'Do not use your phone while you drive.', ar: 'لا تستخدم هاتفك أثناء القيادة.', d: 1 },
      { en: "I got my driver's license last month.", ar: 'حصلت على رخصة القيادة الشهر الماضي.', d: 1 },
      { en: 'Does this road have a speed limit?', ar: 'هل لهذا الطريق سرعة مسموحة؟', d: 2 },
      { en: 'Yes, it is eighty kilometers per hour.', ar: 'نعم، إنها ثمانون كيلومترا في الساعة.', d: 2 },
      { en: 'Slow down before the school.', ar: 'خفف السرعة قبل المدرسة.', d: 2 },
      { en: 'The light turned green, so we went.', ar: 'تحولت الإشارة إلى الأخضر فانطلقنا.', d: 2 },
      { en: 'My father drives to the office every day.', ar: 'أبي يقود إلى المكتب كل يوم.', d: 2 },
      { en: 'Will you drive me home tonight?', ar: 'هل ستقلني إلى المنزل الليلة؟', d: 3 },
      { en: 'Yes, I will pick you up at seven.', ar: 'نعم، سأمر عليك في السابعة.', d: 3 },
      { en: 'We are going to drive to the mountains tomorrow.', ar: 'سنقود إلى الجبال غدا.', d: 3 },
      { en: 'The children are wearing their seatbelts.', ar: 'الأطفال يلبسون أحزمة الأمان.', d: 3 },
      { en: 'Always check your mirrors before you move.', ar: 'افحص مراياك دائما قبل أن تتحرك.', d: 3 },
      { en: 'He drove carefully on the highway.', ar: 'قاد بحذر على الطريق السريع.', d: 3 },
    ],
    patterns: [
      {
        tmpl: '{A} at the traffic lights.', arTmpl: '{A_ar} عند إشارة المرور.',
        slots: {
          A: [
            { en: 'Stop', ar: 'توقف' }, { en: 'Slow down', ar: 'تمهّل' },
            { en: 'Be careful', ar: 'كن حذرا' },
          ],
        },
        tags: ['driving', 'imperatives'], d: 1, limit: 3,
      },
      {
        tmpl: 'The speed limit on this road is {N}.', arTmpl: 'السرعة المسموحة في هذا الطريق {N_ar}.',
        slots: {
          N: [
            { en: 'thirty kilometers per hour', ar: 'ثلاثون كيلومترا في الساعة' },
            { en: 'fifty kilometers per hour', ar: 'خمسون كيلومترا في الساعة' },
            { en: 'eighty kilometers per hour', ar: 'ثمانون كيلومترا في الساعة' },
            { en: 'one hundred kilometers per hour', ar: 'مئة كيلومتر في الساعة' },
          ],
        },
        tags: ['driving', 'safety'], d: 2, limit: 4,
      },
      {
        tmpl: '{S} {V} to {PL} every {T}.', arTmpl: '{S_ar} {V_ar} إلى {PL_ar} كل {T_ar}.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'My father', ar: 'أبي', agr: 'he' },
            { en: 'We', ar: 'نحن', agr: 'we' }, { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{ en: B.enPresent('drive', x.S.agr), ar: B.arPresent('drive', x.S.agr) }],
          PL: [
            { en: 'work', ar: 'العمل' }, { en: 'school', ar: 'المدرسة' },
            { en: 'the club', ar: 'النادي' },
          ],
          T: [
            { en: 'day', ar: 'يوم' }, { en: 'week', ar: 'أسبوع' },
          ],
        },
        tags: ['driving', 'present-simple'], d: 2, limit: 16,
      },
      {
        tmpl: 'We are going to drive to {PL} {T}.', arTmpl: 'سنقود إلى {PL_ar} {T_ar}.',
        slots: {
          PL: [
            { en: 'the beach', ar: 'الشاطئ' }, { en: 'the lake', ar: 'البحيرة' },
            { en: 'the desert', ar: 'الصحراء' }, { en: 'the farm', ar: 'المزرعة' },
          ],
          T: [
            { en: 'tomorrow', ar: 'غدا' }, { en: 'on Friday', ar: 'يوم الجمعة' },
            { en: 'next week', ar: 'الأسبوع القادم' },
          ],
        },
        tags: ['driving', 'future'], d: 2, limit: 12,
      },
      {
        tmpl: 'You must {V} at the junction.', arTmpl: 'يجب أن {V_ar} عند التقاطع.',
        slots: {
          V: [
            { en: 'stop', ar: 'تتوقف' }, { en: 'give way', ar: 'تنازل' },
            { en: 'slow down', ar: 'تمهّل' },
          ],
        },
        tags: ['driving', 'rules'], d: 2, limit: 3,
      },
    ],
    fills: [
      { en: 'Fasten your seatbelt, please.', ar: 'اربط حزام الأمان من فضلك.', word: 'seatbelt' },
      { en: 'The speed limit here is fifty kilometers.', ar: 'السرعة المسموحة هنا خمسون كيلومترا.', word: 'speed' },
      { en: 'Stop at the red light.', ar: 'توقف عند الإشارة الحمراء.', word: 'red', hint: 'لون' },
      { en: 'Give way to the pedestrians.', ar: 'تنازل للمشاة.', word: 'way' },
      { en: "I got my driver's license last month.", ar: 'حصلت على رخصة القيادة الشهر الماضي.', word: 'license' },
      { en: 'Do not use your phone while you drive.', ar: 'لا تستخدم هاتفك أثناء القيادة.', word: 'phone' },
      { en: 'Always check your mirrors before you move.', ar: 'افحص مراياك دائما قبل أن تتحرك.', word: 'mirrors' },
      { en: 'We are going to drive to the mountains tomorrow.', ar: 'سنقود إلى الجبال غدا.', word: 'mountains' },
    ],
    orders: [
      { en: 'Fasten your seatbelt, please.', ar: 'اربط حزام الأمان من فضلك.' },
      { en: 'The speed limit here is fifty kilometers.', ar: 'السرعة المسموحة هنا خمسون كيلومترا.' },
      { en: 'Stop at the red light.', ar: 'توقف عند الإشارة الحمراء.' },
      { en: "I got my driver's license last month.", ar: 'حصلت على رخصة القيادة الشهر الماضي.' },
      { en: 'Always check your mirrors before you move.', ar: 'افحص مراياك دائما قبل أن تتحرك.' },
      { en: 'We are going to drive to the mountains tomorrow.', ar: 'سنقود إلى الجبال غدا.' },
    ],
    mc: [
      { question: 'What do you do at a red light?', options: ['Stop', 'Drive fast', 'Turn around', 'Sleep'], answerIndex: 0, ar: 'ماذا تفعل عند الإشارة الحمراء؟' },
      { question: '"Give way" means:', options: ['تنازل لغيرك في الطريق', 'أعطِ هدية', 'اذهب بسرعة', 'أوقف المحرك'], answerIndex: 0, ar: 'ما معنى Give way؟' },
      { question: 'You need this to drive legally:', options: ["A driver's license", 'A library card', 'A boarding pass', 'A shopping list'], answerIndex: 0, ar: 'تحتاج هذا لقيادة السيارة بشكل قانوني.' },
      { question: 'Choose the correct sentence:', options: ['Fasten your seatbelt, please.', 'Fast your seatbelt, please.', 'Fasten you seatbelt, fast.', 'Fasten your seat belts, please fast.'], answerIndex: 0, ar: 'اختر الجملة الصحيحة.' },
      { question: 'The speed limit tells you:', options: ['the fastest speed you can drive', 'how much fuel you need', 'where to park', 'when to eat'], answerIndex: 0, ar: 'السرعة المسموحة تخبرك بـ:' },
    ],
  },
];
