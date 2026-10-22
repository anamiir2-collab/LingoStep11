/* ============================================================
   v2 section data — s03-a2.js
   Home & Family · lessons 50–52 (A2)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

/* ---------- conjugation maps for household/cooking verbs not in banks ---------- */
const CV = {
  sweep: { en1: 'sweep', en3: 'sweeps', arP: { I: 'أكنس', you: 'تكنس', he: 'يكنس', she: 'تكنس', we: 'نكنس', they: 'يكنسون' } },
  mop:   { en1: 'mop',   en3: 'mops',   arP: { I: 'أمسح', you: 'تمسح', he: 'يمسح', she: 'تمسح', we: 'نمسح', they: 'يمسحون' } },
  iron:  { en1: 'iron',  en3: 'irons',  arP: { I: 'اكوي', you: 'تكوي', he: 'يكوي', she: 'تكوي', we: 'نكوي', they: 'يكوون' } },
  fold:  { en1: 'fold',  en3: 'folds',  arP: { I: 'أطوي', you: 'تطوي', he: 'يطوي', she: 'تطوي', we: 'نطوي', they: 'يطوون' } },
  boil:  { en1: 'boil',  en3: 'boils',  arP: { I: 'أسلق', you: 'تسلق', he: 'يسلق', she: 'تسلق', we: 'نسلق', they: 'يسلقون' } },
  fry:   { en1: 'fry',   en3: 'fries',  arP: { I: 'أقلي', you: 'تقلي', he: 'يقلي', she: 'تقلي', we: 'نقلي', they: 'يقليون' } },
  cut:   { en1: 'cut',   en3: 'cuts',   arP: { I: 'أقطع', you: 'تقطع', he: 'يقطع', she: 'تقطع', we: 'نقطع', they: 'يقطعون' } },
  mix:   { en1: 'mix',   en3: 'mixes',  arP: { I: 'أخلط', you: 'تخلط', he: 'يخلط', she: 'تخلط', we: 'نخلط', they: 'يخلطون' } },
};
const E = (v, agr) => ((agr === 'he' || agr === 'she') ? CV[v].en3 : CV[v].en1);
const VAR = (v, agr) => CV[v].arP[agr];

export const lessons = [

  /* ================= lesson 50 — Household Cleaning ================= */
  {
    num: 50,
    tags: ['home', 'cleaning', 'chores'],
    objectives: [
      'Name cleaning tools: broom, mop, detergent, vacuum',
      'Use cleaning verbs: sweep, wipe, mop, vacuum',
      'Ask family members to help with chores',
    ],
    grammar: {
      explanation: 'Cleaning verbs tell what we do to keep the house nice: sweep the floor with a broom, mop the floor with a mop and water, wipe the table with a cloth, and vacuum the carpet with a vacuum cleaner. Use detergent and a bucket for the bathroom. To ask for help politely, say: "Can you take out the trash, please?" or "Please sweep the kitchen floor". For routines use the present simple: "I sweep the floor every morning". For finished work use the past simple: "I cleaned the whole house yesterday".',
      explanationAr: 'أفعال التنظيف تخبر ماذا نفعل لنحافظ على نظافة المنزل: نكنس الأرضية بالمكنسة، ونمسح الأرضية بالممسحة والماء، وننظف الطاولة بقطعة قماش، وننظف السجادة بالمكنسة الكهربائية. نستخدم المنظف والدلو للحمام. ولطلب المساعدة بأدب قل: Can you take out the trash, please؟ أو Please sweep the kitchen floor. وللروتين نستخدم المضارع البسيط: I sweep the floor every morning، وللعمل المنتهي الماضي البسيط: I cleaned the whole house yesterday.',
      examples: [
        { en: 'Please sweep the kitchen floor.', ar: 'من فضلك اكنس أرضية المطبخ.' },
        { en: 'Can you take out the trash, please?', ar: 'هل يمكنك إخراج القمامة من فضلك؟' },
        { en: 'I cleaned the whole house yesterday.', ar: 'نظفت المنزل كله أمس.' },
      ],
    },
    vocabulary: [
      { word: 'broom', meaningAr: 'مكنسة (كنس)', example: 'I sweep the floor with the broom.', ipa: 'bruːm' },
      { word: 'mop', meaningAr: 'ممسحة', example: 'Mop the floor with this mop.' },
      { word: 'bucket', meaningAr: 'دلو', example: 'The bucket is full of water.' },
      { word: 'detergent', meaningAr: 'منظف', example: 'Add detergent to the hot water.' },
      { word: 'sweep', meaningAr: 'يكنس', example: 'Please sweep the kitchen floor.' },
      { word: 'wipe', meaningAr: 'يمسح / ينشف', example: 'Wipe the table with a wet cloth.' },
      { word: 'vacuum', meaningAr: 'مكنسة كهربائية / ينظف بها', example: 'I vacuum the carpet on Fridays.' },
      { word: 'trash', meaningAr: 'القمامة', example: 'Take out the trash every evening.' },
      { word: 'dirty', meaningAr: 'وسخ', example: 'The kitchen floor is dirty.' },
      { word: 'cloth', meaningAr: 'قطعة قماش', example: 'Wipe the table with a wet cloth.' },
      { word: 'garbage', meaningAr: 'النفايات', example: 'The garbage truck comes on Monday.' },
      { word: 'housework', meaningAr: 'الأعمال المنزلية', example: 'My brother does not like housework.' },
    ],
    scenario: [
      { en: 'The kitchen floor is dirty.', ar: 'أرضية المطبخ وسخة.', d: 1 },
      { en: 'Please sweep the kitchen floor.', ar: 'من فضلك اكنس أرضية المطبخ.', d: 1 },
      { en: 'I sweep the floor with the broom every morning.', ar: 'أكنس الأرضية بالمكنسة كل صباح.', d: 2 },
      { en: 'Can you take out the trash, please?', ar: 'هل يمكنك إخراج القمامة من فضلك؟', d: 1 },
      { en: 'Yes, I will take it out now.', ar: 'نعم، سأخرجها الآن.', d: 1 },
      { en: 'Where is the mop?', ar: 'أين الممسحة؟', d: 1 },
      { en: 'It is next to the bucket.', ar: 'إنها بجانب الدلو.', d: 1 },
      { en: 'Please wipe the table with a wet cloth.', ar: 'من فضلك امسح الطاولة بقطعة قماش مبللة.', d: 2 },
      { en: 'Add detergent to the hot water.', ar: 'أضف المنظف إلى الماء الساخن.', d: 2 },
      { en: 'I vacuum the carpet on Fridays.', ar: 'أنظف السجادة بالمكنسة الكهربائية أيام الجمعة.', d: 2 },
      { en: 'The bathroom is small but clean now.', ar: 'الحمام صغير لكنه نظيف الآن.', d: 2 },
      { en: 'We cleaned the whole house yesterday.', ar: 'نظفنا المنزل كله أمس.', d: 2 },
      { en: 'My brother does not like housework.', ar: 'أخي لا يحب الأعمال المنزلية.', d: 2 },
      { en: 'The trash bags are in the kitchen.', ar: 'أكياس القمامة في المطبخ.', d: 2 },
      { en: 'Who will clean the bathroom today?', ar: 'من سينظف الحمام اليوم؟', d: 2 },
      { en: 'I will clean it after lunch.', ar: 'سأنظفه بعد الغداء.', d: 1 },
      { en: 'The windows are not clean yet.', ar: 'النوافذ ليست نظيفة بعد.', d: 2 },
      { en: 'Dust the shelf and open the window, please.', ar: 'نظف الغبار عن الرف وافتح النافذة من فضلك.', d: 2 },
    ],
    patterns: [
      {
        tmpl: '{S} {V} the floor {T}.', arTmpl: '{S_ar} {V_ar} الأرضية {T_ar}.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'My brother', ar: 'أخي', agr: 'he' },
            { en: 'My sister', ar: 'أختي', agr: 'she' }, { en: 'We', ar: 'نحن', agr: 'we' },
            { en: 'My cousins', ar: 'أبناء عمي', agr: 'they' },
          ],
          V: (x) => [
            { en: E('sweep', x.S.agr), ar: VAR('sweep', x.S.agr) },
            { en: E('mop', x.S.agr), ar: VAR('mop', x.S.agr) },
          ],
          T: [
            { en: 'every morning', ar: 'كل صباح' }, { en: 'every Friday', ar: 'كل جمعة' },
            { en: 'after dinner', ar: 'بعد العشاء' }, { en: 'in the evening', ar: 'في المساء' },
          ],
        },
        tags: ['cleaning', 'present-simple'], d: 2, limit: 20,
      },
      {
        tmpl: 'Please {V} the {N}.', arTmpl: 'من فضلك {V_ar} {N_ar}.',
        slots: {
          V: [
            { en: 'sweep', ar: 'اكنس' }, { en: 'mop', ar: 'امسح' },
            { en: 'wipe', ar: 'امسح' }, { en: 'vacuum', ar: 'نظف' },
          ],
          N: [
            { en: 'floor', ar: 'الأرضية' }, { en: 'kitchen floor', ar: 'أرضية المطبخ' },
            { en: 'bathroom floor', ar: 'أرضية الحمام' }, { en: 'table', ar: 'الطاولة بقطعة قماش' },
            { en: 'carpet', ar: 'السجادة بالمكنسة الكهربائية' },
          ],
        },
        filter: (x) => !((x.V.en === 'wipe') && x.N.en !== 'table')
          && !((x.V.en === 'vacuum') && x.N.en !== 'carpet')
          && !((x.V.en === 'sweep' || x.V.en === 'mop') && (x.N.en === 'table' || x.N.en === 'carpet')),
        tags: ['cleaning', 'imperative'], d: 1, limit: 10,
      },
      {
        tmpl: 'Take out the {T}, please.', arTmpl: 'أخرج {T_ar} من فضلك.',
        slots: {
          T: [
            { en: 'trash', ar: 'القمامة' }, { en: 'garbage', ar: 'النفايات' },
            { en: 'recycling', ar: 'المواد القابلة للتدوير' },
          ],
        },
        tags: ['cleaning', 'imperative'], d: 1, limit: 3,
      },
      {
        tmpl: '{S} {V} {N} {T}.', arTmpl: '{S_ar} {V_ar} {N_ar} {T_ar}.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'My mother', ar: 'أمي', agr: 'she' },
            { en: 'We', ar: 'نحن', agr: 'we' }, { en: 'My brother', ar: 'أخي', agr: 'he' },
          ],
          V: (x) => [
            { en: B.enPast('clean'), ar: B.arPast('clean', x.S.agr) },
            { en: B.enPast('wash'), ar: B.arPast('wash', x.S.agr) },
          ],
          N: [
            { en: 'the windows', ar: 'النوافذ' }, { en: 'the bathroom', ar: 'الحمام' },
            { en: 'the kitchen', ar: 'المطبخ' }, { en: 'the whole house', ar: 'المنزل كله' },
          ],
          T: [
            { en: 'yesterday', ar: 'أمس' }, { en: 'last Friday', ar: 'الجمعة الماضية' },
            { en: 'this morning', ar: 'هذا الصباح' },
          ],
        },
        filter: (x) => !(x.V.en === 'washed' && x.N.en !== 'the windows'),
        tags: ['cleaning', 'past-simple'], d: 2, limit: 16,
      },
    ],
    fills: [
      { en: 'Please sweep the kitchen floor.', ar: 'من فضلك اكنس أرضية المطبخ.', word: 'sweep', hint: 'فعل تنظيف' },
      { en: 'Can you take out the trash, please?', ar: 'هل يمكنك إخراج القمامة من فضلك؟', word: 'trash' },
      { en: 'Add detergent to the hot water.', ar: 'أضف المنظف إلى الماء الساخن.', word: 'detergent' },
      { en: 'I vacuum the carpet on Fridays.', ar: 'أنظف السجادة بالمكنسة الكهربائية أيام الجمعة.', word: 'vacuum' },
      { en: 'We cleaned the whole house yesterday.', ar: 'نظفنا المنزل كله أمس.', word: 'whole' },
      { en: 'The bucket is full of water.', ar: 'الدلو مملوء بالماء.', word: 'bucket' },
      { en: 'Please wipe the table with a wet cloth.', ar: 'من فضلك امسح الطاولة بقطعة قماش مبللة.', word: 'wipe' },
      { en: 'My brother does not like housework.', ar: 'أخي لا يحب الأعمال المنزلية.', word: 'housework' },
    ],
    orders: [
      { en: 'Please sweep the kitchen floor.', ar: 'من فضلك اكنس أرضية المطبخ.' },
      { en: 'Can you take out the trash, please?', ar: 'هل يمكنك إخراج القمامة من فضلك؟' },
      { en: 'We cleaned the whole house yesterday.', ar: 'نظفنا المنزل كله أمس.' },
      { en: 'The bucket is full of water.', ar: 'الدلو مملوء بالماء.' },
      { en: 'I vacuum the carpet on Fridays.', ar: 'أنظف السجادة بالمكنسة الكهربائية أيام الجمعة.' },
      { en: 'Add detergent to the hot water.', ar: 'أضف المنظف إلى الماء الساخن.' },
    ],
    mc: [
      { question: 'Which tool do you use to sweep the floor?', options: ['a broom', 'a knife', 'a towel', 'a plate'], answerIndex: 0, ar: 'بأي أداة تكنس الأرضية؟' },
      { question: 'The floor is wet. You use:', options: ['the mop', 'the mirror', 'the shelf', 'the wardrobe'], answerIndex: 0, ar: 'الأرضية مبللة، فتستخدم:' },
      { question: '"Take out the trash" means:', options: ['أخرج القمامة', 'اكنس الأرضية', 'امسح الطاولة', 'اغسل النوافذ'], answerIndex: 0, ar: 'ما معنى Take out the trash؟' },
      { question: 'I cleaned the house yesterday. The verb is in the:', options: ['past simple', 'present simple', 'future', 'question form'], answerIndex: 0, ar: 'في I cleaned the house yesterday الفعل في الزمن:' },
    ],
  },

  /* ================= lesson 51 — Laundry and Ironing ================= */
  {
    num: 51,
    tags: ['home', 'laundry', 'clothes'],
    objectives: [
      'Talk about washing clothes with the washing machine',
      'Describe laundry steps: hang, dry, fold, iron',
      'Ask for help with laundry politely',
    ],
    grammar: {
      explanation: 'Laundry words help you talk about washing clothes: put the dirty laundry in the washing machine, then hang the wet clothes on the line to dry. When they are dry, fold the clean clothes and put them in the wardrobe or the dresser. Iron the shirt with an iron to make it smooth. Useful sentences: "I wash my clothes on Saturday", "Please hang the towels on the balcony", "Can you iron this shirt for me, please?", "I folded all the towels yesterday".',
      explanationAr: 'كلمات الغسيل تساعدك على الحديث عن غسل الملابس: ضع الغسيل المتسخ في الغسالة، ثم علق الملابس المبللة على الحبل لتجف. وعندما تجف اطو الملابس النظيفة وضعها في خزانة الملابس أو دولاب الأدراج. واكو القميص بالمكواة ليصبح ناعما. عبارات مفيدة: I wash my clothes on Saturday، وPlease hang the towels on the balcony، وCan you iron this shirt for me, please؟، وI folded all the towels yesterday.',
      examples: [
        { en: 'Put the dirty laundry in the washing machine.', ar: 'ضع الغسيل المتسخ في الغسالة.' },
        { en: 'Please hang the wet clothes on the balcony.', ar: 'من فضلك علق الملابس المبللة على الشرفة.' },
        { en: 'Can you iron this shirt for me, please?', ar: 'هل تكوي لي هذا القميص من فضلك؟' },
      ],
    },
    vocabulary: [
      { word: 'washing machine', meaningAr: 'غسالة', example: 'The washing machine is full.', ipa: 'ˈwɒʃɪŋ məˈʃiːn' },
      { word: 'laundry', meaningAr: 'غسيل', example: 'The dirty laundry is in the basket.' },
      { word: 'hang', meaningAr: 'يعلق (الغسيل)', example: 'Hang the wet clothes on the line.' },
      { word: 'fold', meaningAr: 'يطوي', example: 'Please fold the clean clothes.' },
      { word: 'iron', meaningAr: 'يكوي / مكواة', example: 'Can you iron this shirt for me, please?' },
      { word: 'wet', meaningAr: 'مبلل', example: 'The clothes are still wet.' },
      { word: 'dry', meaningAr: 'جاف / يجف', example: 'The towels are dry now.' },
      { word: 'basket', meaningAr: 'سلة', example: 'Where is the laundry basket?' },
      { word: 'line', meaningAr: 'حبل الغسيل', example: 'The line is on the balcony.' },
      { word: 'pocket', meaningAr: 'جيب', example: 'There is a coin in the pocket.' },
      { word: 'soap powder', meaningAr: 'مسحوق الغسيل', example: 'Add the soap powder to the machine.' },
      { word: 'stain', meaningAr: 'بقعة', example: 'There is a stain on the shirt.' },
    ],
    scenario: [
      { en: 'The dirty laundry is in the basket.', ar: 'الغسيل المتسخ في السلة.', d: 1 },
      { en: 'Put the dirty laundry in the washing machine.', ar: 'ضع الغسيل المتسخ في الغسالة.', d: 1 },
      { en: 'I wash my clothes on Saturday.', ar: 'أغسل ملابسي يوم السبت.', d: 1 },
      { en: 'The washing machine is full.', ar: 'الغسالة ممتلئة.', d: 1 },
      { en: 'Please hang the wet clothes on the balcony.', ar: 'من فضلك علق الملابس المبللة على الشرفة.', d: 1 },
      { en: 'Can you iron this shirt for me, please?', ar: 'هل تكوي لي هذا القميص من فضلك؟', d: 2 },
      { en: 'Yes, give me the iron, please.', ar: 'نعم، أعطني المكواة من فضلك.', d: 2 },
      { en: 'The towels are dry now.', ar: 'المناشف جافة الآن.', d: 1 },
      { en: 'Please fold the clean clothes.', ar: 'من فضلك اطو الملابس النظيفة.', d: 1 },
      { en: 'Where is the laundry basket?', ar: 'أين سلة الغسيل؟', d: 1 },
      { en: 'It is next to the washing machine.', ar: 'إنها بجانب الغسالة.', d: 1 },
      { en: 'My father irons his shirts on Friday.', ar: 'يكوي أبي قمصانه يوم الجمعة.', d: 2 },
      { en: 'I folded all the towels yesterday.', ar: 'طويت كل المناشف أمس.', d: 2 },
      { en: 'The white clothes are not dry yet.', ar: 'الملابس البيضاء ليست جافة بعد.', d: 2 },
      { en: 'I will wash the red dress tonight.', ar: 'سأغسل الفستان الأحمر الليلة.', d: 2 },
      { en: 'Did you wash my blue jacket?', ar: 'هل غسلت سترتي الزرقاء؟', d: 2 },
      { en: 'Yes, it is on the line now.', ar: 'نعم، إنها على الحبل الآن.', d: 2 },
      { en: 'Check the pockets before you wash, please.', ar: 'من فضلك افحص الجيوب قبل الغسل.', d: 2 },
    ],
    patterns: [
      {
        tmpl: '{S} {V} the {N} {T}.', arTmpl: '{S_ar} {V_ar} {N_ar} {T_ar}.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'My mother', ar: 'أمي', agr: 'she' },
            { en: 'My father', ar: 'أبي', agr: 'he' }, { en: 'We', ar: 'نحن', agr: 'we' },
            { en: 'My sister', ar: 'أختي', agr: 'she' },
          ],
          V: (x) => [
            { en: B.enPresent('wash', x.S.agr), ar: B.arPresent('wash', x.S.agr) },
            { en: E('iron', x.S.agr), ar: VAR('iron', x.S.agr) },
            { en: E('fold', x.S.agr), ar: VAR('fold', x.S.agr) },
          ],
          N: [
            { en: 'clothes', ar: 'الملابس' }, { en: 'towels', ar: 'المناشف' },
            { en: 'shirts', ar: 'القمصان' }, { en: 'school clothes', ar: 'ملابس المدرسة' },
          ],
          T: [
            { en: 'on Saturday', ar: 'يوم السبت' }, { en: 'every Friday', ar: 'كل جمعة' },
            { en: 'in the evening', ar: 'في المساء' }, { en: 'after work', ar: 'بعد العمل' },
          ],
        },
        tags: ['laundry', 'present-simple'], d: 2, limit: 24,
      },
      {
        tmpl: 'The {N} is {A}.', arTmpl: '{N_ar} {A_ar}.',
        slots: {
          N: [
            { en: 'shirt', ar: 'القميص', g: 'm' }, { en: 'towel', ar: 'المنشفة', g: 'f' },
            { en: 'dress', ar: 'الفستان', g: 'm' }, { en: 'jacket', ar: 'السترة', g: 'f' },
          ],
          A: (x) => {
            const f = x.N.g === 'f';
            return [
              { en: 'clean', ar: f ? 'نظيفة' : 'نظيف' }, { en: 'dirty', ar: f ? 'متسخة' : 'متسخ' },
              { en: 'wet', ar: f ? 'مبللة' : 'مبلل' }, { en: 'dry', ar: f ? 'جافة' : 'جاف' },
            ];
          },
        },
        tags: ['laundry', 'adjectives'], d: 1, limit: 16,
      },
      {
        tmpl: 'Please hang the {N} on the {P}.', arTmpl: 'من فضلك علق {N_ar} على {P_ar}.',
        slots: {
          N: [
            { en: 'wet clothes', ar: 'الملابس المبللة' }, { en: 'towels', ar: 'المناشف' },
            { en: 'shirts', ar: 'القمصان' }, { en: 'school uniform', ar: 'زي المدرسة' },
          ],
          P: [
            { en: 'line', ar: 'الحبل' }, { en: 'balcony', ar: 'الشرفة' },
            { en: 'roof', ar: 'السطح' },
          ],
        },
        tags: ['laundry', 'imperative'], d: 1, limit: 12,
      },
      {
        tmpl: 'I will {V} {T}.', arTmpl: 'س{V_ar} {T_ar}.',
        slots: {
          V: [
            { en: 'wash the clothes', ar: 'أغسل الملابس' }, { en: 'iron the shirt', ar: 'أكوي القميص' },
            { en: 'fold the towels', ar: 'أطوي المناشف' }, { en: 'hang the clothes', ar: 'أعلق الملابس' },
          ],
          T: [
            { en: 'tonight', ar: 'الليلة' }, { en: 'tomorrow morning', ar: 'غدا صباحا' },
            { en: 'after lunch', ar: 'بعد الغداء' },
          ],
        },
        tags: ['laundry', 'future'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'Put the dirty laundry in the washing machine.', ar: 'ضع الغسيل المتسخ في الغسالة.', word: 'laundry', hint: 'غسيل' },
      { en: 'Please hang the wet clothes on the balcony.', ar: 'من فضلك علق الملابس المبللة على الشرفة.', word: 'hang' },
      { en: 'Can you iron this shirt for me, please?', ar: 'هل تكوي لي هذا القميص من فضلك؟', word: 'iron' },
      { en: 'The towels are dry now.', ar: 'المناشف جافة الآن.', word: 'dry' },
      { en: 'Please fold the clean clothes.', ar: 'من فضلك اطو الملابس النظيفة.', word: 'fold' },
      { en: 'Where is the laundry basket?', ar: 'أين سلة الغسيل؟', word: 'basket' },
      { en: 'I folded all the towels yesterday.', ar: 'طويت كل المناشف أمس.', word: 'folded' },
      { en: 'Check the pockets before you wash, please.', ar: 'من فضلك افحص الجيوب قبل الغسل.', word: 'pockets' },
    ],
    orders: [
      { en: 'Put the dirty laundry in the washing machine.', ar: 'ضع الغسيل المتسخ في الغسالة.' },
      { en: 'Please hang the wet clothes on the balcony.', ar: 'من فضلك علق الملابس المبللة على الشرفة.' },
      { en: 'Can you iron this shirt for me, please?', ar: 'هل تكوي لي هذا القميص من فضلك؟' },
      { en: 'The towels are dry now.', ar: 'المناشف جافة الآن.' },
      { en: 'I folded all the towels yesterday.', ar: 'طويت كل المناشف أمس.' },
      { en: 'Where is the laundry basket?', ar: 'أين سلة الغسيل؟' },
    ],
    mc: [
      { question: 'Where do you put the dirty clothes first?', options: ['in the washing machine', 'on the shelf', 'in the fridge', 'under the bed'], answerIndex: 0, ar: 'أين تضع الملابس المتسخة أولا؟' },
      { question: 'You use an iron to:', options: ['iron the shirt', 'wash the dishes', 'sweep the floor', 'boil the water'], answerIndex: 0, ar: 'تستخدم المكواة لكي:' },
      { question: '"Fold the clothes" means:', options: ['اطو الملابس', 'اغسل الملابس', 'علق الملابس', 'اكو الملابس'], answerIndex: 0, ar: 'ما معنى Fold the clothes؟' },
      { question: 'The clothes are wet. They are:', options: ['not dry', 'clean', 'folded', 'new'], answerIndex: 0, ar: 'الملابس مبللة، أي أنها:' },
    ],
  },

  /* ================= lesson 52 — Basic Cooking ================= */
  {
    num: 52,
    tags: ['food', 'cooking', 'kitchen'],
    objectives: [
      'Use basic cooking verbs: boil, fry, cut, mix, add',
      'Describe simple meals you cook at home',
      'Give simple instructions in the kitchen',
    ],
    grammar: {
      explanation: 'Cooking verbs tell the action in the kitchen: boil water in a pot, fry onions in a pan, cut tomatoes with a knife, mix eggs in a bowl, and add salt to the soup. For instructions use the imperative: "Boil the water first", "Cut the onions, please". To talk about routines, use the present simple: "I cook rice every Friday". To talk about the future, say "I will cook dinner tonight" or "I am going to cook pasta". When the food tastes good, say "This soup is delicious!".',
      explanationAr: 'أفعال الطبخ تحدد الحركة في المطبخ: اسلق الماء في القدر، واقل البصل في المقلاة، وقطع الطماطم بالسكين، واخلط البيض في السلطانية، وأضف الملح إلى الحساء. وللتعليمات استخدم فعل الأمر: Boil the water first، Cut the onions, please. وللعادات استخدم المضارع البسيط: I cook rice every Friday. وللمستقبل قل I will cook dinner tonight أو I am going to cook pasta. وإذا كان الطعم لذيذا قل This soup is delicious!',
      examples: [
        { en: 'Boil the water before you add the pasta.', ar: 'اسلق الماء قبل أن تضيف المكرونة.' },
        { en: 'I cook rice every Friday.', ar: 'أطبخ الأرز كل جمعة.' },
        { en: 'This soup is delicious!', ar: 'هذا الحساء لذيذ!' },
      ],
    },
    vocabulary: [
      { word: 'boil', meaningAr: 'يسلق', example: 'Boil the water in the big pot.', ipa: 'bɔɪl' },
      { word: 'fry', meaningAr: 'يقلي', example: 'Fry the onions in the pan.' },
      { word: 'cut', meaningAr: 'يقطع', example: 'Cut the tomatoes with this knife.' },
      { word: 'mix', meaningAr: 'يخلط', example: 'Mix the eggs in the bowl.' },
      { word: 'add', meaningAr: 'يضيف', example: 'Do not add too much salt.' },
      { word: 'salt', meaningAr: 'ملح', example: 'Do not add too much salt.' },
      { word: 'cook', meaningAr: 'يطبخ', example: 'I cook rice every Friday.' },
      { word: 'pot', meaningAr: 'قدر', example: 'The soup is in the pot.' },
      { word: 'pan', meaningAr: 'مقلاة', example: 'Fry the fish in the pan.' },
      { word: 'knife', meaningAr: 'سكين', example: 'Cut the bread with this knife.' },
      { word: 'delicious', meaningAr: 'لذيذ', example: 'This soup is delicious!' },
      { word: 'recipe', meaningAr: 'وصفة', example: 'This recipe is easy and fast.' },
    ],
    scenario: [
      { en: 'Boil the water in the big pot.', ar: 'اسلق الماء في القدر الكبير.', d: 1 },
      { en: 'Cut the tomatoes with this knife.', ar: 'قطع الطماطم بهذا السكين.', d: 1 },
      { en: 'Fry the onions in the pan.', ar: 'اقل البصل في المقلاة.', d: 1 },
      { en: 'Mix the eggs in the bowl.', ar: 'اخلط البيض في السلطانية.', d: 1 },
      { en: 'Do not add too much salt.', ar: 'لا تضف الكثير من الملح.', d: 1 },
      { en: 'I cook rice every Friday.', ar: 'أطبخ الأرز كل جمعة.', d: 1 },
      { en: 'What are we cooking today?', ar: 'ماذا سنطبخ اليوم؟', d: 1 },
      { en: 'We are cooking chicken and rice.', ar: 'نطبخ الدجاج والأرز.', d: 1 },
      { en: 'Can you help me in the kitchen, please?', ar: 'هل يمكنك مساعدتي في المطبخ من فضلك؟', d: 2 },
      { en: 'Yes, I will cut the onions.', ar: 'نعم، سأقطع البصل.', d: 2 },
      { en: 'My mother taught me how to cook.', ar: 'علمتني أمي كيف أطبخ.', d: 2 },
      { en: 'Did you add pepper to the salad?', ar: 'هل أضفت الفلفل إلى السلطة؟', d: 2 },
      { en: 'No, I did not add pepper.', ar: 'لا، لم أضف الفلفل.', d: 2 },
      { en: 'I will cook dinner tonight.', ar: 'سأطبخ العشاء الليلة.', d: 1 },
      { en: 'We are going to cook pasta on Sunday.', ar: 'سوف نطبخ المكرونة يوم الأحد.', d: 2 },
      { en: 'This soup is delicious!', ar: 'هذا الحساء لذيذ!', d: 1 },
      { en: 'Thank you, it is an easy recipe.', ar: 'شكرا لك، إنها وصفة سهلة.', d: 2 },
      { en: 'Be careful with the hot pan.', ar: 'كن حذرا مع المقلاة الساخنة.', d: 2 },
    ],
    patterns: [
      {
        tmpl: '{V} the {F} first, please.', arTmpl: '{V_ar} {F_ar} أولا من فضلك.',
        slots: {
          V: [
            { en: 'Boil', ar: 'اسلق' }, { en: 'Fry', ar: 'اقل' },
            { en: 'Cut', ar: 'قطع' }, { en: 'Mix', ar: 'اخلط' },
            { en: 'Wash', ar: 'اغسل' },
          ],
          F: [
            { en: 'water', ar: 'الماء' }, { en: 'onions', ar: 'البصل' },
            { en: 'tomatoes', ar: 'الطماطم' }, { en: 'eggs', ar: 'البيض' },
            { en: 'potatoes', ar: 'البطاطس' }, { en: 'rice', ar: 'الأرز' },
          ],
        },
        filter: (x) => !(x.V.en === 'Boil' && x.F.en !== 'water')
          && !(x.V.en === 'Fry' && x.F.en === 'water')
          && !(x.V.en === 'Cut' && x.F.en === 'water')
          && !(x.V.en === 'Wash' && x.F.en !== 'rice' && x.F.en !== 'potatoes')
          && !(x.V.en === 'Mix' && (x.F.en === 'water' || x.F.en === 'rice' || x.F.en === 'potatoes')),
        tags: ['cooking', 'imperative'], d: 1, limit: 10,
      },
      {
        tmpl: 'Add {S} to the {F}.', arTmpl: 'أضف {S_ar} إلى {F_ar}.',
        slots: {
          S: [
            { en: 'salt', ar: 'الملح' }, { en: 'pepper', ar: 'الفلفل' },
            { en: 'sugar', ar: 'السكر' }, { en: 'olive oil', ar: 'زيت الزيتون' },
            { en: 'butter', ar: 'الزبدة' },
          ],
          F: [
            { en: 'soup', ar: 'الحساء' }, { en: 'salad', ar: 'السلطة' },
            { en: 'rice', ar: 'الأرز' }, { en: 'tea', ar: 'الشاي' },
            { en: 'eggs', ar: 'البيض' },
          ],
        },
        tags: ['cooking', 'imperative'], d: 1, limit: 12,
      },
      {
        tmpl: '{S} {V} {F} {T}.', arTmpl: '{S_ar} {V_ar} {F_ar} {T_ar}.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'My mother', ar: 'أمي', agr: 'she' },
            { en: 'My father', ar: 'أبي', agr: 'he' }, { en: 'We', ar: 'نحن', agr: 'we' },
          ],
          V: (x) => [
            { en: B.enPresent('cook', x.S.agr), ar: B.arPresent('cook', x.S.agr) },
            { en: E('fry', x.S.agr), ar: VAR('fry', x.S.agr) },
          ],
          F: [
            { en: 'rice', ar: 'الأرز' }, { en: 'chicken', ar: 'الدجاج' },
            { en: 'pasta', ar: 'المكرونة' }, { en: 'fish', ar: 'السمك' },
          ],
          T: [
            { en: 'at home', ar: 'في المنزل' }, { en: 'for lunch', ar: 'للغداء' },
            { en: 'for dinner', ar: 'للعشاء' }, { en: 'every Sunday', ar: 'كل أحد' },
          ],
        },
        tags: ['cooking', 'present-simple'], d: 2, limit: 24,
      },
      {
        tmpl: 'The {F} is {A}.', arTmpl: '{F_ar} {A_ar}.',
        slots: {
          F: [
            { en: 'soup', ar: 'الحساء', g: 'm' }, { en: 'rice', ar: 'الأرز', g: 'm' },
            { en: 'tea', ar: 'الشاي', g: 'm' }, { en: 'salad', ar: 'السلطة', g: 'f' },
          ],
          A: (x) => {
            const f = x.F.g === 'f';
            return [
              { en: 'hot', ar: f ? 'ساخنة' : 'ساخن' }, { en: 'delicious', ar: f ? 'لذيذة' : 'لذيذ' },
              { en: 'cold', ar: f ? 'باردة' : 'بارد' }, { en: 'ready', ar: f ? 'جاهزة' : 'جاهز' },
            ];
          },
        },
        tags: ['cooking', 'adjectives'], d: 1, limit: 16,
      },
    ],
    fills: [
      { en: 'Boil the water in the big pot.', ar: 'اسلق الماء في القدر الكبير.', word: 'Boil', hint: 'فعل طهي' },
      { en: 'Cut the tomatoes with this knife.', ar: 'قطع الطماطم بهذا السكين.', word: 'Cut' },
      { en: 'Mix the eggs in the bowl.', ar: 'اخلط البيض في السلطانية.', word: 'Mix' },
      { en: 'Do not add too much salt.', ar: 'لا تضف الكثير من الملح.', word: 'salt' },
      { en: 'I will cook dinner tonight.', ar: 'سأطبخ العشاء الليلة.', word: 'cook' },
      { en: 'Fry the onions in the pan.', ar: 'اقل البصل في المقلاة.', word: 'pan' },
      { en: 'This soup is delicious!', ar: 'هذا الحساء لذيذ!', word: 'delicious', hint: 'طعم جيد' },
      { en: 'My mother taught me how to cook.', ar: 'علمتني أمي كيف أطبخ.', word: 'taught' },
    ],
    orders: [
      { en: 'Boil the water in the big pot.', ar: 'اسلق الماء في القدر الكبير.' },
      { en: 'Cut the tomatoes with this knife.', ar: 'قطع الطماطم بهذا السكين.' },
      { en: 'I will cook dinner tonight.', ar: 'سأطبخ العشاء الليلة.' },
      { en: 'Mix the eggs in the bowl.', ar: 'اخلط البيض في السلطانية.' },
      { en: 'This soup is delicious!', ar: 'هذا الحساء لذيذ!' },
      { en: 'My mother taught me how to cook.', ar: 'علمتني أمي كيف أطبخ.' },
    ],
    mc: [
      { question: 'What do you do first to boil water?', options: ['Put water in a pot on the fire', 'Cut the bread', 'Wash the dishes', 'Open the window'], answerIndex: 0, ar: 'ماذا تفعل أولا لتسلق الماء؟' },
      { question: 'You cut vegetables with:', options: ['a knife', 'a bowl', 'a plate', 'a towel'], answerIndex: 0, ar: 'تقطع الخضار بـ:' },
      { question: '"Add salt to the soup" means:', options: ['أضف الملح إلى الحساء', 'اسلق الحساء', 'اخلط الحساء', 'قطع الحساء'], answerIndex: 0, ar: 'ما معنى Add salt to the soup؟' },
      { question: 'The food tastes very good. It is:', options: ['delicious', 'dirty', 'dry', 'raw'], answerIndex: 0, ar: 'الطعام طعمه جيد جدا، فهو:' },
    ],
  },
];
