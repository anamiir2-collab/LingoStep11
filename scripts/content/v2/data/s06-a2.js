/* ============================================================
   v2 section data — s06-a2.js
   Health & Emergencies · lessons 128–130
   128 Describing an Accident · 129 Lost or Stolen Property ·
   130 Fire and Safety
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 128 — Describing an Accident ================= */
  {
    num: 128,
    tags: ['accidents', 'description', 'emergency'],
    objectives: [
      'Describe how an accident happened step by step',
      'Report injuries and call for help',
      'Give clear details to rescuers and witnesses',
    ],
    grammar: {
      explanation: 'To describe an accident, use the past continuous for the background action and the past simple for the sudden event: "He was riding his bike when he fell". Use the passive to report damage: "The window was broken". Urgent requests use "We need help here!" and "Please call an ambulance". Give clear details: who, where and when — "A car hit the wall on the corner".',
      explanationAr: 'لوصف حادث استخدم الماضي المستمر للحدث الخلفي والماضي البسيط للحدث المفاجئ: He was riding his bike when he fell. واستخدم المبني للمجهول للإبلاغ عن الضرر: The window was broken. والطلبات العاجلة تكون بـ We need help here! وPlease call an ambulance. واذكر التفاصيل بوضوح: من وأين ومتى، مثل A car hit the wall on the corner.',
      examples: [
        { en: 'He fell off his bike near the park.', ar: 'سقط من دراجته قرب الحديقة.' },
        { en: 'She was crossing the street when she fell.', ar: 'كانت تعبر الشارع عندما سقطت.' },
        { en: 'Someone is hurt; we need help here!', ar: 'هناك شخص مصاب؛ نحتاج إلى مساعدة هنا!' },
      ],
    },
    vocabulary: [
      { word: 'accident', meaningAr: 'حادث', example: 'There was an accident here.', ipa: 'ˈæksɪdənt' },
      { word: 'fall off', meaningAr: 'يسقط من', example: 'He fell off his bike.', ipa: 'fɔːl ɒf' },
      { word: 'hit', meaningAr: 'يصدم', example: 'A car hit the wall.', ipa: 'hɪt' },
      { word: 'hurt', meaningAr: 'يؤذي / مصاب', example: 'Someone is hurt.' },
      { word: 'injured', meaningAr: 'مصاب', example: 'Two people were injured.' },
      { word: 'bleeding', meaningAr: 'ينزف', example: 'Her arm was bleeding.' },
      { word: 'conscious', meaningAr: 'واع', example: 'Is he conscious?' },
      { word: 'bike', meaningAr: 'دراجة', example: 'He rides his bike to school.' },
      { word: 'ladder', meaningAr: 'سلم', example: 'The ladder fell down.', ipa: 'ˈlædər' },
      { word: 'witness', meaningAr: 'شاهد عيان', example: 'A witness called the police.' },
      { word: 'slip', meaningAr: 'ينزلق', example: 'The bus slipped on the wet road.' },
      { word: 'luckily', meaningAr: 'لحسن الحظ', example: 'Luckily, nobody was hurt.' },
    ],
    scenario: [
      { en: 'What happened here?', ar: 'ماذا حدث هنا؟', d: 1 },
      { en: 'He fell off his bike near the park.', ar: 'سقط من دراجته قرب الحديقة.', d: 1 },
      { en: 'He was riding too fast when he fell.', ar: 'كان يركب بسرعة كبيرة عندما سقط.', d: 2 },
      { en: 'A car hit the wall on the corner.', ar: 'صدمت سيارة الحائط عند المنعطف.', d: 1 },
      { en: 'Is he conscious?', ar: 'هل هو واع؟', d: 1 },
      { en: 'He is conscious, but his leg hurts a lot.', ar: 'هو واع، لكن ساقه تؤلمه كثيرا.', d: 2 },
      { en: 'Someone is hurt; we need help here!', ar: 'هناك شخص مصاب؛ نحتاج إلى مساعدة هنا!', d: 1 },
      { en: 'Please call an ambulance and stay with him.', ar: 'اتصل بسيارة إسعاف وابق معه من فضلك.', d: 1 },
      { en: 'The driver was not hurt, luckily.', ar: 'لحسن الحظ لم يُصب السائق.', d: 2 },
      { en: 'Two people saw the whole accident.', ar: 'شخصان رأيا الحادث كاملا.', d: 2 },
      { en: 'Her arm was bleeding, so we called for help.', ar: 'كانت ذراعها تنزف، فطلبنا المساعدة.', d: 2 },
      { en: 'Do not move him; his neck may be hurt.', ar: 'لا تحركه؛ فقد تكون رقبته مصابة.', d: 2 },
      { en: 'The road was wet, and the bus slipped.', ar: 'كان الطريق مبلولا، فانزلقت الحافلة.', d: 3 },
      { en: 'Who saw the accident happen?', ar: 'من رأى وقوع الحادث؟', d: 2 },
      { en: 'The children were playing outside when it happened.', ar: 'كان الأطفال يلعبون في الخارج عندما حدث ذلك.', d: 3 },
      { en: 'The ladder fell and my neighbor was hurt.', ar: 'سقط السلّم وأُصيب جاري.', d: 3 },
    ],
    patterns: [
      {
        tmpl: '{S} fell off {P} {T}.', arTmpl: '{S_ar} عن {P_ar} {T_ar}.',
        slots: {
          S: [
            { en: 'He', ar: 'سقط', agr: 'he' }, { en: 'She', ar: 'سقطت', agr: 'she' },
            { en: 'My brother', ar: 'سقط أخي', agr: 'he' }, { en: 'My sister', ar: 'سقطت أختي', agr: 'she' },
          ],
          P: (x) => [x.S.agr === 'she' ? { en: 'her bike', ar: 'دراجتها' } : { en: 'his bike', ar: 'دراجته' }],
          T: [
            { en: 'yesterday', ar: 'أمس' }, { en: 'this morning', ar: 'هذا الصباح' },
            { en: 'on the main road', ar: 'على الطريق الرئيسي' }, { en: 'near the school', ar: 'قرب المدرسة' },
          ],
        },
        tags: ['accidents', 'past-simple'], d: 2, limit: 12,
      },
      {
        tmpl: 'A car hit the {N} {T}.', arTmpl: 'صدمت سيارة {N_ar} {T_ar}.',
        slots: {
          N: [
            { en: 'wall', ar: 'الحائط' }, { en: 'lamp post', ar: 'عمود الإنارة' },
          ],
          T: [
            { en: 'near the school', ar: 'قرب المدرسة' }, { en: 'last night', ar: 'الليلة الماضية' },
            { en: 'at the crossroads', ar: 'عند التقاطع' },
          ],
        },
        tags: ['accidents', 'past-simple'], d: 2, limit: 6,
      },
      {
        tmpl: 'We need {H} here!', arTmpl: 'نحتاج إلى {H_ar} هنا!',
        slots: {
          H: [
            { en: 'an ambulance', ar: 'سيارة إسعاف' }, { en: 'a doctor', ar: 'طبيب' },
            { en: 'the police', ar: 'الشرطة' }, { en: 'more help', ar: 'مساعدة إضافية' },
          ],
        },
        tags: ['accidents', 'imperative'], d: 1, limit: 4,
      },
      {
        tmpl: '{S} was {V} when the accident happened.', arTmpl: '{S_ar} {V_ar} عندما وقع الحادث.',
        slots: {
          S: [
            { en: 'He', ar: 'كان', agr: 'he' }, { en: 'She', ar: 'كانت', agr: 'she' },
            { en: 'My uncle', ar: 'كان عمي', agr: 'he' },
          ],
          V: [
            { en: 'driving home', ar: 'يقود سيارته إلى المنزل' }, { en: 'crossing the street', ar: 'يعبر الشارع' },
            { en: 'cleaning the window', ar: 'ينظف النافذة' },
          ],
        },
        tags: ['accidents', 'past-continuous'], d: 3, limit: 8,
      },
      {
        tmpl: 'Is {P} breathing normally?', arTmpl: 'هل {P_ar}؟',
        slots: {
          P: [
            { en: 'he', ar: 'يتنفس بشكل طبيعي' }, { en: 'she', ar: 'تتنفس بشكل طبيعي' },
            { en: 'the old man', ar: 'يتنفس العجوز بشكل طبيعي' },
          ],
        },
        tags: ['accidents', 'questions'], d: 2, limit: 3,
      },
      {
        tmpl: 'He hurt his {BP} when he fell.', arTmpl: 'تألم {BP_ar}ه عندما سقط.',
        slots: {
          BP: (x) => B.BODY_PARTS.filter((p) => p.en !== 'tooth'),
        },
        tags: ['accidents', 'body-parts'], d: 2, limit: 8,
      },
    ],
    fills: [
      { en: 'He fell off his bike near the park.', ar: 'سقط من دراجته قرب الحديقة.', word: 'fell', hint: 'سقط (ماضي)' },
      { en: 'A car hit the wall on the corner.', ar: 'صدمت سيارة الحائط عند المنعطف.', word: 'hit', hint: 'صدم' },
      { en: 'Someone is hurt; we need help here!', ar: 'هناك شخص مصاب؛ نحتاج إلى مساعدة هنا!', word: 'hurt', hint: 'مصاب' },
      { en: 'Do not move him; his neck may be hurt.', ar: 'لا تحركه؛ فقد تكون رقبته مصابة.', word: 'neck', hint: 'رقبة' },
      { en: 'The driver was not hurt, luckily.', ar: 'لحسن الحظ لم يُصب السائق.', word: 'driver', hint: 'السائق' },
      { en: 'Her arm was bleeding, so we called for help.', ar: 'كانت ذراعها تنزف، فطلبنا المساعدة.', word: 'bleeding', hint: 'تنزف' },
      { en: 'Who saw the accident happen?', ar: 'من رأى وقوع الحادث؟', word: 'accident', hint: 'حادث' },
      { en: 'The ladder fell and my neighbor was hurt.', ar: 'سقط السلّم وأُصيب جاري.', word: 'ladder', hint: 'سلم' },
    ],
    orders: [
      { en: 'He fell off his bike near the park.', ar: 'سقط من دراجته قرب الحديقة.' },
      { en: 'A car hit the wall on the corner.', ar: 'صدمت سيارة الحائط عند المنعطف.' },
      { en: 'We need an ambulance here!', ar: 'نحتاج إلى سيارة إسعاف هنا!' },
      { en: 'Do not move him; his neck may be hurt.', ar: 'لا تحركه؛ فقد تكون رقبته مصابة.' },
      { en: 'Who saw the accident happen?', ar: 'من رأى وقوع الحادث؟' },
      { en: 'The children were playing outside when it happened.', ar: 'كان الأطفال يلعبون في الخارج عندما حدث ذلك.' },
    ],
    mc: [
      { question: '"He fell off his bike" means:', options: ['سقط من دراجته', 'شحن دراجته', 'باع دراجته', 'غسل دراجته'], answerIndex: 0, ar: 'ما معنى He fell off his bike؟' },
      { question: 'A person who saw the accident is:', options: ['a witness', 'a chef', 'a mechanic', 'a barber'], answerIndex: 0, ar: 'الشخص الذي رأى الحادث هو:' },
      { question: 'What should you NOT do with an injured neck?', options: ['Move the person', 'Call an ambulance', 'Stay with him', 'Ask for help'], answerIndex: 0, ar: 'ما الذي يجب ألا تفعله مع رقبة مصابة؟' },
      { question: 'Which sentence describes the background of an accident?', options: ['She was crossing the street when she fell.', 'She crosses the street every day.', 'She will cross the street.', 'She hates crossing streets.'], answerIndex: 0, ar: 'أي جملة تصف خلفية الحادث؟' },
    ],
  },

  /* ================= lesson 129 — Lost or Stolen Property ================= */
  {
    num: 129,
    tags: ['lost-property', 'police', 'reports'],
    objectives: [
      'Report a lost or stolen item to the police',
      'Answer questions about when and where you saw it last',
      'Describe the item and ask about the report',
    ],
    grammar: {
      explanation: 'Use the passive for theft: "My wallet was stolen on the bus" — we do not know who did it. Use the past simple for losing something yourself: "I lost my bag at the station yesterday". The officer asks: "When and where did you see it last?" Answer with a time and place. Use "please" for polite requests: "I want to report a theft, please".',
      explanationAr: 'استخدم المبني للمجهول عند السرقة: My wallet was stolen on the bus، لأننا لا نعرف من فعلها. واستخدم الماضي البسيط عند فقدان شيء بنفسك: I lost my bag at the station yesterday. ويقول الضابط: When and where did you see it last؟ فأجب بالزمان والمكان. واستخدم please للطلب المهذب: I want to report a theft, please.',
      examples: [
        { en: 'My wallet was stolen on the bus.', ar: 'سُرقت محفظتي في الحافلة.' },
        { en: 'I lost my bag at the station yesterday.', ar: 'فقدت حقيبتي في المحطة أمس.' },
        { en: 'When and where did you see it last?', ar: 'متى وأين رأيتها آخر مرة؟' },
      ],
    },
    vocabulary: [
      { word: 'wallet', meaningAr: 'محفظة', example: 'My wallet has my ID card.', ipa: 'ˈwɒlɪt' },
      { word: 'stolen', meaningAr: 'مسروق', example: 'My phone was stolen.', ipa: 'ˈstoʊlən' },
      { word: 'lost', meaningAr: 'مفقود / فقدت', example: 'I lost my keys yesterday.' },
      { word: 'theft', meaningAr: 'سرقة', example: 'I want to report a theft.' },
      { word: 'thief', meaningAr: 'لص', example: 'The thief ran away.', ipa: 'θiːf' },
      { word: 'report', meaningAr: 'يبلغ / محضر', example: 'I want to report a theft, please.' },
      { word: 'police station', meaningAr: 'مركز الشرطة', example: 'We went to the police station.' },
      { word: 'belongings', meaningAr: 'مقتنيات شخصية', example: 'Check all your belongings.' },
      { word: 'describe', meaningAr: 'يصف', example: 'Please describe the bag.' },
      { word: 'search', meaningAr: 'يفتش / يبحث', example: 'The police will search the area.' },
      { word: 'found', meaningAr: 'وجد (ماضي)', example: 'They found my umbrella.' },
      { word: 'contact number', meaningAr: 'رقم للتواصل', example: 'Leave your contact number, please.' },
    ],
    scenario: [
      { en: 'I want to report a theft, please.', ar: 'أريد الإبلاغ عن سرقة من فضلك.', d: 1 },
      { en: 'My wallet was stolen on the bus.', ar: 'سُرقت محفظتي في الحافلة.', d: 1 },
      { en: 'When and where did you see it last?', ar: 'متى وأين رأيتها آخر مرة؟', d: 1 },
      { en: 'I saw it last at the market entrance.', ar: 'رأيتها آخر مرة عند مدخل السوق.', d: 2 },
      { en: 'I lost my bag at the station yesterday.', ar: 'فقدت حقيبتي في المحطة أمس.', d: 1 },
      { en: 'What was inside the bag?', ar: 'ماذا كان داخل الحقيبة؟', d: 1 },
      { en: 'My passport, my phone and some money.', ar: 'جواز سفري وهاتفي وبعض المال.', d: 2 },
      { en: 'Was the bag locked?', ar: 'هل كانت الحقيبة مقفلة؟', d: 2 },
      { en: 'Yes, but the thief cut the strap.', ar: 'نعم، لكن اللص قطع الحزام.', d: 2 },
      { en: 'Did anyone see the thief?', ar: 'هل رأى أحد اللص؟', d: 2 },
      { en: 'No, nobody saw anything.', ar: 'لا، لم يرَ أحد شيئا.', d: 2 },
      { en: 'The police will search the area today.', ar: 'ستفتش الشرطة المنطقة اليوم.', d: 3 },
      { en: 'Please describe the bag; its color and size.', ar: 'صِف الحقيبة من فضلك؛ لونها وحجمها.', d: 2 },
      { en: 'It is a small black bag with a blue zip.', ar: 'إنها حقيبة صغيرة سوداء بسحّاب أزرق.', d: 3 },
      { en: 'Do not worry; we find many lost things.', ar: 'لا تقلق؛ نجد أشياء مفقودة كثيرة.', d: 3 },
      { en: 'You can call this contact number tomorrow.', ar: 'أستطيع الاتصال برقم التواصل هذا غدا.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'My {I} was {V} {P}.', arTmpl: 'لقد {V_ar} {I_ar} {P_ar}.',
        slots: {
          I: [
            { en: 'wallet', ar: 'محفظتي' }, { en: 'bag', ar: 'حقيبتي' },
            { en: 'phone', ar: 'هاتفي' },
          ],
          V: [
            { en: 'stolen', ar: 'سُرقت' }, { en: 'taken', ar: 'أُخذت' },
          ],
          P: [
            { en: 'at the market', ar: 'في السوق' }, { en: 'near the bank', ar: 'قرب البنك' },
            { en: 'at the train station', ar: 'في محطة القطار' }, { en: 'in the taxi', ar: 'في سيارة الأجرة' },
          ],
        },
        tags: ['lost-property', 'passive'], d: 2, limit: 12,
      },
      {
        tmpl: 'I lost my {I} at the {P}.', arTmpl: 'فقدت {I_ar} في {P_ar}.',
        slots: {
          I: [
            { en: 'bag', ar: 'حقيبتي' }, { en: 'keys', ar: 'مفاتيحي' },
            { en: 'glasses', ar: 'نظارتي' }, { en: 'umbrella', ar: 'شمسيتي' },
          ],
          P: [
            { en: 'airport', ar: 'المطار' }, { en: 'shopping mall', ar: 'المركز التجاري' },
            { en: 'mosque', ar: 'المسجد' },
          ],
        },
        tags: ['lost-property', 'past-simple'], d: 1, limit: 8,
      },
      {
        tmpl: 'When and where did you see your {I} last?', arTmpl: 'متى وأين رأيت {I_ar} آخر مرة؟',
        slots: {
          I: [
            { en: 'wallet', ar: 'محفظتك' }, { en: 'phone', ar: 'هاتفك' },
            { en: 'bag', ar: 'حقيبتك' },
          ],
        },
        tags: ['lost-property', 'questions'], d: 2, limit: 3,
      },
      {
        tmpl: 'The police will {V} the {A}.', arTmpl: '{V_ar} الشرطة {A_ar}.',
        slots: {
          V: [
            { en: 'search', ar: 'سوف تفتش' }, { en: 'check', ar: 'سوف تفحص' },
          ],
          A: [
            { en: 'area', ar: 'المنطقة' }, { en: 'security cameras', ar: 'كاميرات المراقبة' },
            { en: 'market', ar: 'السوق' },
          ],
        },
        tags: ['lost-property', 'police'], d: 2, limit: 6,
      },
      {
        tmpl: 'It is a {S} {C} {I}.', arTmpl: 'إنها {I_ar} {C_ar} {S_ar}.',
        slots: {
          S: [
            { en: 'small', ar: 'صغيرة' }, { en: 'big', ar: 'كبيرة' },
          ],
          C: [
            { en: 'black', ar: 'سوداء' }, { en: 'blue', ar: 'زرقاء' }, { en: 'brown', ar: 'بنية' },
          ],
          I: [
            { en: 'bag', ar: 'حقيبة' }, { en: 'wallet', ar: 'محفظة' },
          ],
        },
        tags: ['lost-property', 'description'], d: 2, limit: 8,
      },
    ],
    fills: [
      { en: 'I want to report a theft, please.', ar: 'أريد الإبلاغ عن سرقة من فضلك.', word: 'theft', hint: 'سرقة' },
      { en: 'My wallet was stolen on the bus.', ar: 'سُرقت محفظتي في الحافلة.', word: 'stolen', hint: 'مسروق' },
      { en: 'When and where did you see it last?', ar: 'متى وأين رأيتها آخر مرة؟', word: 'last', hint: 'آخر مرة' },
      { en: 'I lost my bag at the station yesterday.', ar: 'فقدت حقيبتي في المحطة أمس.', word: 'lost', hint: 'فقدت' },
      { en: 'Did anyone see the thief?', ar: 'هل رأى أحد اللص؟', word: 'thief', hint: 'اللص' },
      { en: 'The police will search the area today.', ar: 'ستفتش الشرطة المنطقة اليوم.', word: 'search', hint: 'تفتش' },
      { en: 'Please describe the bag; its color and size.', ar: 'صِف الحقيبة من فضلك؛ لونها وحجمها.', word: 'describe', hint: 'يصف' },
      { en: 'You can call this contact number tomorrow.', ar: 'أستطيع الاتصال برقم التواصل هذا غدا.', word: 'number', hint: 'رقم' },
    ],
    orders: [
      { en: 'My wallet was stolen on the bus.', ar: 'سُرقت محفظتي في الحافلة.' },
      { en: 'When and where did you see it last?', ar: 'متى وأين رأيتها آخر مرة؟' },
      { en: 'I lost my bag at the station yesterday.', ar: 'فقدت حقيبتي في المحطة أمس.' },
      { en: 'The police will search the area today.', ar: 'ستفتش الشرطة المنطقة اليوم.' },
      { en: 'Please describe the bag; its color and size.', ar: 'صِف الحقيبة من فضلك؛ لونها وحجمها.' },
      { en: 'Did anyone see the thief?', ar: 'هل رأى أحد اللص؟' },
    ],
    mc: [
      { question: 'Someone took your bag by force. Your bag was:', options: ['stolen', 'broken', 'cleaned', 'sold'], answerIndex: 0, ar: 'أخذ أحدهم حقيبتك عنوة، فقد كانت:' },
      { question: 'Where do you report a theft?', options: ['At the police station', 'At the bakery', 'At the library', 'At the park'], answerIndex: 0, ar: 'أين تبلغ عن سرقة؟' },
      { question: '"My wallet was stolen" means:', options: ['سُرقت محفظتي', 'أنا سرقت محفظة', 'اشتريت محفظة', 'وجدت محفظة'], answerIndex: 0, ar: 'ما معنى الجملة؟' },
      { question: 'The officer asks: "When and where did you see it last?" You answer:', options: ['At the market entrance, an hour ago.', 'I like this city.', 'The bag is black.', 'Yes, thank you.'], answerIndex: 0, ar: 'سأل الضابط: متى وأين رأيتها آخر مرة؟ فما جوابك؟' },
    ],
  },

  /* ================= lesson 130 — Fire and Safety ================= */
  {
    num: 130,
    tags: ['fire', 'safety', 'evacuation'],
    objectives: [
      'Report a fire and call the fire department',
      'Follow safety instructions during a fire',
      'Talk about alarms, fire exits and safe habits at home',
    ],
    grammar: {
      explanation: 'Fire instructions are usually imperative: "Get out quickly!", "Do not use the elevator; use the stairs!", "Turn off the gas". Use "must" and "must not" for strong rules: "You must not hide during a fire". Use "there is/are" to report danger: "There is smoke in the kitchen". Conditional sentences help too: "If there is a fire, call the fire department".',
      explanationAr: 'تعليمات الحريق تأتي غالبا بصيغة الأمر: Get out quickly! وDo not use the elevator; use the stairs! وTurn off the gas. واستخدم must وmust not للقواعد الصارمة: You must not hide during a fire. واستخدم there is/there are للإبلاغ عن خطر: There is smoke in the kitchen. وجمل الشرط مفيدة أيضا: إذا وقع حريق فاتصل بالإطفاء.',
      examples: [
        { en: 'Call the fire department now!', ar: 'اتصل بالإطفاء الآن!' },
        { en: 'Do not use the elevator; use the stairs!', ar: 'لا تستخدم المصعد؛ استخدم السلالم!' },
        { en: 'There is smoke in the kitchen!', ar: 'هناك دخان في المطبخ!' },
      ],
    },
    vocabulary: [
      { word: 'fire', meaningAr: 'حريق', example: 'The fire started in the kitchen.', ipa: 'ˈfaɪər' },
      { word: 'smoke', meaningAr: 'دخان', example: 'I smell smoke.', ipa: 'smoʊk' },
      { word: 'alarm', meaningAr: 'جرس إنذار', example: 'The alarm is ringing.', ipa: 'əˈlɑːrm' },
      { word: 'fire exit', meaningAr: 'مخرج الطوارئ', example: 'Where is the fire exit?' },
      { word: 'fire department', meaningAr: 'قسم الإطفاء', example: 'Call the fire department now!' },
      { word: 'firefighter', meaningAr: 'رجل إطفاء', example: 'The firefighters came fast.' },
      { word: 'extinguisher', meaningAr: 'طفاية حريق', example: 'Use the fire extinguisher.', ipa: 'ɪkˈstɪŋɡwɪʃər' },
      { word: 'burn', meaningAr: 'يحترق / يحرق', example: 'Do not touch the burn.' },
      { word: 'evacuate', meaningAr: 'يخلي المكان', example: 'We evacuated the building.' },
      { word: 'elevator', meaningAr: 'مصعد', example: 'Do not use the elevator.' },
      { word: 'stairs', meaningAr: 'سلالم', example: 'Use the stairs, please.' },
      { word: 'spread', meaningAr: 'ينتشر', example: 'The fire spread fast.' },
    ],
    scenario: [
      { en: 'Call the fire department now!', ar: 'اتصل بالإطفاء الآن!', d: 1 },
      { en: 'I can smell smoke in the kitchen!', ar: 'أشم رائحة دخان في المطبخ!', d: 1 },
      { en: 'The alarm is ringing; get out quickly!', ar: 'جرس الإنذار يرن؛ اخرج بسرعة!', d: 1 },
      { en: 'Do not use the elevator; use the stairs!', ar: 'لا تستخدم المصعد؛ استخدم السلالم!', d: 1 },
      { en: 'Where is the fire exit?', ar: 'أين مخرج الطوارئ؟', d: 1 },
      { en: 'It is next to the elevator, follow me.', ar: 'إنه بجانب المصعد، اتبعني.', d: 2 },
      { en: 'Is everyone out of the building?', ar: 'هل خرج الجميع من المبنى؟', d: 2 },
      { en: 'Yes, all the children are outside.', ar: 'نعم، كل الأطفال في الخارج.', d: 2 },
      { en: 'The fire spread to the second floor.', ar: 'انتشر الحريق إلى الطابق الثاني.', d: 3 },
      { en: 'Do not open the hot door!', ar: 'لا تفتح الباب الساخن!', d: 2 },
      { en: 'A small fire started on the stove.', ar: 'بدأ حريق صغير على الموقد.', d: 2 },
      { en: 'I put it out with the fire extinguisher.', ar: 'أطفأته بطفاية الحريق.', d: 3 },
      { en: 'The firefighters arrived within a few minutes.', ar: 'وصل رجال الإطفاء خلال دقائق.', d: 3 },
      { en: 'Nobody was hurt in the fire.', ar: 'لم يُصب أحد في الحريق.', d: 3 },
      { en: 'Turn off the gas before you leave the house.', ar: 'أغلق الغاز قبل أن تغادر المنزل.', d: 2 },
      { en: 'Never leave the kitchen while you are cooking.', ar: 'لا تترك المطبخ أبدا وأنت تطبخ.', d: 3 },
      { en: 'Did you hear the fire alarm last night?', ar: 'هل سمعت جرس إنذار الحريق الليلة الماضية؟', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'There is {D} in the {R}!', arTmpl: 'هناك {D_ar} في {R_ar}!',
        slots: {
          D: [
            { en: 'smoke', ar: 'دخان' }, { en: 'a fire', ar: 'حريق' },
            { en: 'a gas smell', ar: 'رائحة غاز' },
          ],
          R: [
            { en: 'kitchen', ar: 'المطبخ' }, { en: 'hallway', ar: 'الممر' },
            { en: 'living room', ar: 'غرفة الجلوس' }, { en: 'basement', ar: 'القبو' },
          ],
        },
        tags: ['fire', 'there-is'], d: 1, limit: 12,
      },
      {
        tmpl: 'Do not {V} during a fire.', arTmpl: 'لا {V_ar} أثناء الحريق!',
        slots: {
          V: [
            { en: 'use the elevator', ar: 'تستخدم المصعد' }, { en: 'run back inside', ar: 'تعود إلى الداخل' },
            { en: 'hide in the bathroom', ar: 'تختبئ في الحمام' }, { en: 'waste time', ar: 'تضيع الوقت' },
            { en: 'take the elevator', ar: 'تركب المصعد' },
          ],
        },
        tags: ['fire', 'negative-imperative'], d: 1, limit: 5,
      },
      {
        tmpl: 'Get out of the {B} quickly.', arTmpl: 'اخرج من {B_ar} بسرعة!',
        slots: {
          B: [
            { en: 'building', ar: 'المبنى' }, { en: 'house', ar: 'المنزل' },
            { en: 'apartment', ar: 'الشقة' }, { en: 'school', ar: 'المدرسة' },
            { en: 'hotel', ar: 'الفندق' },
          ],
        },
        tags: ['fire', 'imperative'], d: 1, limit: 5,
      },
      {
        tmpl: 'The firefighters {V} in {N} minutes.', arTmpl: '{V_ar} رجال الإطفاء خلال {N_ar}.',
        slots: {
          V: [
            { en: 'arrived', ar: 'وصل' }, { en: 'came', ar: 'جاء' },
          ],
          N: [
            { en: 'ten', ar: 'عشر دقائق' }, { en: 'fifteen', ar: 'خمس عشرة دقيقة' },
            { en: 'twenty', ar: 'عشرين دقيقة' }, { en: 'thirty', ar: 'ثلاثين دقيقة' },
          ],
        },
        tags: ['fire', 'past-simple'], d: 2, limit: 7,
      },
      {
        tmpl: 'If there is a fire, {I}.', arTmpl: 'إذا وقع حريق، {I_ar}.',
        slots: {
          I: [
            { en: 'call the fire department', ar: 'اتصل بالإطفاء' }, { en: 'get out quickly', ar: 'اخرج بسرعة' },
            { en: 'do not hide', ar: 'لا تختبئ' }, { en: 'use the stairs', ar: 'استخدم السلالم' },
          ],
        },
        tags: ['fire', 'conditionals'], d: 3, limit: 4,
      },
    ],
    fills: [
      { en: 'Call the fire department now!', ar: 'اتصل بالإطفاء الآن!', word: 'fire', hint: 'حريق' },
      { en: 'There is smoke in the kitchen!', ar: 'هناك دخان في المطبخ!', word: 'smoke', hint: 'دخان' },
      { en: 'Do not use the elevator; use the stairs!', ar: 'لا تستخدم المصعد؛ استخدم السلالم!', word: 'elevator', hint: 'المصعد' },
      { en: 'Where is the fire exit?', ar: 'أين مخرج الطوارئ؟', word: 'exit', hint: 'مخرج' },
      { en: 'The alarm is ringing; get out quickly!', ar: 'جرس الإنذار يرن؛ اخرج بسرعة!', word: 'alarm', hint: 'جرس إنذار' },
      { en: 'I put it out with the fire extinguisher.', ar: 'أطفأته بطفاية الحريق.', word: 'extinguisher', hint: 'طفاية حريق' },
      { en: 'Nobody was hurt in the fire.', ar: 'لم يُصب أحد في الحريق.', word: 'Nobody', hint: 'لا أحد' },
      { en: 'Turn off the gas before you leave the house.', ar: 'أغلق الغاز قبل أن تغادر المنزل.', word: 'gas', hint: 'الغاز' },
    ],
    orders: [
      { en: 'Call the fire department now!', ar: 'اتصل بالإطفاء الآن!' },
      { en: 'Do not use the elevator; use the stairs!', ar: 'لا تستخدم المصعد؛ استخدم السلالم!' },
      { en: 'The alarm is ringing; get out quickly!', ar: 'جرس الإنذار يرن؛ اخرج بسرعة!' },
      { en: 'There is smoke in the kitchen!', ar: 'هناك دخان في المطبخ!' },
      { en: 'Nobody was hurt in the fire.', ar: 'لم يُصب أحد في الحريق.' },
      { en: 'Where is the fire exit?', ar: 'أين مخرج الطوارئ؟' },
    ],
    mc: [
      { question: 'You smell smoke in a tall building. What do you do?', options: ['Use the stairs and get out', 'Use the elevator', 'Hide under a table', 'Open all windows and wait'], answerIndex: 0, ar: 'أشمكت دخانا في مبنى عال، فماذا تفعل؟' },
      { question: 'Who fights fires?', options: ['Firefighters', 'Bakers', 'Pilots', 'Farmers'], answerIndex: 0, ar: 'من يكافح الحرائق؟' },
      { question: '"Do not use the elevator" means:', options: ['لا تستخدم المصعد', 'لا تغلق الباب', 'لا تستخدم السلالم', 'لا تصعد الأرض'], answerIndex: 0, ar: 'ما معنى Do not use the elevator؟' },
      { question: 'What rings loudly to warn you about a fire?', options: ['The fire alarm', 'The doorbell', 'The washing machine', 'The television'], answerIndex: 0, ar: 'ما الذي يرن بصوت عال لتحذيرك من حريق؟' },
    ],
  },
];
