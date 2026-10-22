/* ============================================================
   v2 section data — s04-a2.js
   Food, Shopping & Services · lessons 75–77
   (buying clothes, sizes & colors, returns & exchanges)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

/* definite clothing nouns with Arabic gender — lesson 76 patterns */
const CLOTHES_DEF = [
  { en: 'shirt', ar: 'القميص', g: 'm' }, { en: 'dress', ar: 'الفستان', g: 'm' },
  { en: 'jacket', ar: 'السترة', g: 'f' }, { en: 'coat', ar: 'المعطف', g: 'm' },
  { en: 'skirt', ar: 'التنورة', g: 'f' }, { en: 'sweater', ar: 'الكنزة', g: 'f' },
  { en: 'hat', ar: 'القبعة', g: 'f' }, { en: 'scarf', ar: 'الوشاح', g: 'm' },
];

/* indefinite clothing nouns (accusative Arabic) — lesson 76 pattern */
const CLOTHES_ACC = [
  { en: 'shirt', ar: 'قميصا', g: 'm' }, { en: 'hat', ar: 'قبعة', g: 'f' },
  { en: 'sweater', ar: 'كنزة', g: 'f' }, { en: 'jacket', ar: 'سترة', g: 'f' },
  { en: 'scarf', ar: 'وشاحا', g: 'm' }, { en: 'belt', ar: 'حزاما', g: 'm' },
  { en: 'skirt', ar: 'تنورة', g: 'f' }, { en: 'coat', ar: 'معطفا', g: 'm' },
];

/* items people return — lesson 77 patterns */
const RETURN_ITEMS = [
  { en: 'this jacket', ar: 'هذه السترة' }, { en: 'this shirt', ar: 'هذا القميص' },
  { en: 'these shoes', ar: 'هذا الحذاء' }, { en: 'this kettle', ar: 'هذه الغلاية' },
  { en: 'this radio', ar: 'هذا الراديو' }, { en: 'this watch', ar: 'هذه الساعة' },
  { en: 'this bag', ar: 'هذه الحقيبة' }, { en: 'this lamp', ar: 'هذا المصباح' },
];

export const lessons = [

  /* ================= lesson 75 — Buying Clothes ================= */
  {
    num: 75,
    tags: ['clothes', 'shopping'],
    objectives: [
      'Say what clothes you are looking for',
      'Ask to try items on in the fitting room',
      'Say if something fits and decide to buy',
    ],
    grammar: {
      explanation: 'In a clothes shop, say what you want with "I am looking for a jacket". To measure the item, ask "Can I try this jacket on, please?" — you wear it in the fitting room. Then describe the fit: "It fits well", "It is too tight", "It is too loose" or "It is too long". If you like it, say "I will take it". Use "too" + adjective to say there is a problem: too small, too big. Talk about the past with bought and wore: "My sister bought a sweater yesterday".',
      explanationAr: 'في محل الملابس قل ما تريد بـ I am looking for a jacket. ولقياس القطعة اسأل Can I try this jacket on, please؟ فتلبسها في غرفة القياس. ثم صف المقاس: It fits well أو It is too tight أو It is too loose أو It is too long. وإذا أعجبتك قل I will take it. واستخدم too مع الصفة للدلالة على مشكلة: too small، too big. وللماضي استخدم bought و wore: My sister bought a sweater yesterday.',
      examples: [
        { en: 'I am looking for a warm winter jacket.', ar: 'أبحث عن سترة شتوية دافئة.' },
        { en: 'Can I try this shirt on, please?', ar: 'هل يمكنني قياس هذا القميص من فضلك؟' },
        { en: 'My sister bought a gray sweater yesterday.', ar: 'اشترت أختي كنزة رمادية أمس.' },
      ],
    },
    vocabulary: [
      { word: 'clothes', meaningAr: 'ملابس', example: 'We do not need more clothes today.' },
      { word: 'jacket', meaningAr: 'سترة', example: 'I am looking for a blue jacket.', ipa: 'ˈdʒækɪt' },
      { word: 'fitting room', meaningAr: 'غرفة القياس', example: 'The fitting room is over there.' },
      { word: 'try on', meaningAr: 'يقيس (لملابس)', example: 'Can I try this dress on?' },
      { word: 'fit', meaningAr: 'يناسب / يكون بمقاس', example: 'This jacket fits me well.' },
      { word: 'wear', meaningAr: 'يلبس', example: 'He is going to wear his new coat.' },
      { word: 'take', meaningAr: 'يأخذ (يشتري)', example: 'I will take the jacket and the belt.' },
      { word: 'cotton', meaningAr: 'قطن', example: 'Do you prefer cotton or leather?' },
      { word: 'leather', meaningAr: 'جلد', example: 'These leather shoes are strong.' },
      { word: 'pocket', meaningAr: 'جيب', example: 'The pockets are deep and useful.' },
      { word: 'sleeve', meaningAr: 'كم (القميص)', example: 'The sleeves are too long for me.' },
      { word: 'store', meaningAr: 'متجر', example: 'This store opens at nine.' },
    ],
    scenario: [
      { en: 'I am looking for a warm winter jacket.', ar: 'أبحث عن سترة شتوية دافئة.', d: 1 },
      { en: 'What color do you want?', ar: 'ما اللون الذي تريده؟', d: 1 },
      { en: 'Dark blue, like my old one.', ar: 'أزرق داكن، مثل قميصي القديم.', d: 2 },
      { en: 'Do you prefer cotton or leather?', ar: 'هل تفضل القطن أم الجلد؟', d: 2 },
      { en: 'Cotton is fine for me.', ar: 'القطن مناسب لي.', d: 2 },
      { en: 'Can I try this jacket on, please?', ar: 'هل يمكنني قياس هذه السترة من فضلك؟', d: 1 },
      { en: 'Sure, the fitting room is over there.', ar: 'بالتأكيد، غرفة القياس هناك.', d: 2 },
      { en: 'These shoes are too small for my son.', ar: 'هذا الحذاء صغير جدا لابني.', d: 2 },
      { en: 'Do you have them in a bigger size?', ar: 'هل لديكم مقاس أكبر له؟', d: 2 },
      { en: 'It fits well, and the pockets are deep.', ar: 'مقاسه مناسب، والجيوب عميقة.', d: 2 },
      { en: 'My sister bought a gray sweater yesterday.', ar: 'اشترت أختي كنزة رمادية أمس.', d: 3 },
      { en: 'She wore it to school this morning.', ar: 'لبستها إلى المدرسة هذا الصباح.', d: 3 },
      { en: 'I will take the jacket and the belt.', ar: 'سآخذ السترة والحزام.', d: 2 },
      { en: 'We do not need more clothes today.', ar: 'لا نحتاج ملابس أكثر اليوم.', d: 2 },
      { en: 'He is going to wear his new coat tonight.', ar: 'سيلبس معطفه الجديد الليلة.', d: 3 },
      { en: 'How much is this jacket?', ar: 'كم سعر هذه السترة؟', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I am looking for {CL}.', arTmpl: 'أبحث عن {CL_ar}.',
        slots: { CL: B.CLOTHES },
        tags: ['clothes', 'shopping'], d: 1, limit: 12,
      },
      {
        tmpl: 'Can I try {CL}, please?', arTmpl: 'هل يمكنني قياس {CL_ar} من فضلك؟',
        slots: {
          CL: [
            { en: 'this blue shirt', ar: 'هذا القميص الأزرق' }, { en: 'this black dress', ar: 'هذا الفستان الأسود' },
            { en: 'this gray jacket', ar: 'هذه السترة الرمادية' }, { en: 'these brown shoes', ar: 'هذا الحذاء البني' },
            { en: 'this white skirt', ar: 'هذه التنورة البيضاء' }, { en: 'this green sweater', ar: 'هذه الكنزة الخضراء' },
            { en: 'this red hat', ar: 'هذه القبعة الحمراء' }, { en: 'this long coat', ar: 'هذا المعطف الطويل' },
          ],
        },
        tags: ['clothes', 'requests'], d: 2, limit: 8,
      },
      {
        tmpl: '{CL} {FIT} me well.', arTmpl: '{CL_ar} {FIT_ar}.',
        slots: {
          CL: [
            { en: 'This jacket', ar: 'هذه السترة', fitAr: 'مناسبة لي' },
            { en: 'This dress', ar: 'هذا الفستان', fitAr: 'مناسب لي' },
            { en: 'These shoes', ar: 'هذا الحذاء', fitAr: 'مناسب لي', fitEn: 'fit' },
            { en: 'This shirt', ar: 'هذا القميص', fitAr: 'مناسب لي' },
            { en: 'This coat', ar: 'هذا المعطف', fitAr: 'مناسب لي' },
            { en: 'This skirt', ar: 'هذه التنورة', fitAr: 'مناسبة لي' },
            { en: 'This sweater', ar: 'هذه الكنزة', fitAr: 'مناسبة لي' },
            { en: 'This hat', ar: 'هذه القبعة', fitAr: 'مناسبة لي' },
          ],
          FIT: (x) => [{ en: x.CL.fitEn || 'fits', ar: x.CL.fitAr }],
        },
        tags: ['clothes', 'fit'], d: 2, limit: 8,
      },
      {
        tmpl: 'Do you have {CL} in {SZ}?', arTmpl: 'هل لديكم {CL_ar} {SZ_ar}؟',
        slots: {
          CL: B.CLOTHES,
          SZ: [
            { en: 'a small size', ar: 'بمقاس صغير' }, { en: 'a medium size', ar: 'بمقاس متوسط' },
            { en: 'a large size', ar: 'بمقاس كبير' }, { en: 'a darker color', ar: 'بلون أغمق' },
            { en: 'another color', ar: 'بلون آخر' },
          ],
        },
        tags: ['clothes', 'sizes'], d: 2, limit: 16,
      },
      {
        tmpl: 'I will take {CL}.', arTmpl: 'سآخذ {CL_ar}.',
        slots: { CL: B.CLOTHES },
        tags: ['clothes', 'buying'], d: 1, limit: 8,
      },
    ],
    fills: [
      { en: 'I am looking for a warm jacket.', ar: 'أبحث عن سترة دافئة.', word: 'jacket' },
      { en: 'Can I try this shirt on, please?', ar: 'هل يمكنني قياس هذا القميص من فضلك؟', word: 'try' },
      { en: 'The fitting room is over there.', ar: 'غرفة القياس هناك.', word: 'fitting' },
      { en: 'This dress fits me well.', ar: 'هذا الفستان مناسب لي.', word: 'fits' },
      { en: 'These shoes are too small for my son.', ar: 'هذا الحذاء صغير جدا لابني.', word: 'small' },
      { en: 'My sister bought a gray sweater yesterday.', ar: 'اشترت أختي كنزة رمادية أمس.', word: 'sweater' },
      { en: 'I will take the jacket and the belt.', ar: 'سآخذ السترة والحزام.', word: 'belt' },
      { en: 'He is going to wear his new coat tonight.', ar: 'سيلبس معطفه الجديد الليلة.', word: 'wear' },
    ],
    orders: [
      { en: 'I am looking for a blue shirt.', ar: 'أبحث عن قميص أزرق.' },
      { en: 'Can I try this jacket on, please?', ar: 'هل يمكنني قياس هذه السترة من فضلك؟' },
      { en: 'The fitting room is over there.', ar: 'غرفة القياس هناك.' },
      { en: 'This dress fits me very well.', ar: 'هذا الفستان مناسب لي جدا.' },
      { en: 'These shoes are too small for me.', ar: 'هذا الحذاء صغير جدا لي.' },
      { en: 'I will take the jacket and the belt.', ar: 'سآخذ السترة والحزام.' },
    ],
    mc: [
      { question: 'Where do you try on clothes?', options: ['in the fitting room', 'in the kitchen', 'on the bus', 'in the fridge'], answerIndex: 0, ar: 'أين تقيس الملابس؟' },
      { question: 'You like it after trying. You say:', options: ['It fits well. I will take it.', 'It is raining today.', 'My name is Omar.', 'Good night.'], answerIndex: 0, ar: 'أعجبك المقاس بعد القياس، فتقول:' },
      { question: '"These shoes are too small" means:', options: ['هذا الحذاء ضيق جدا', 'هذا الحذاء جديد', 'هذا الحذاء غال', 'هذا الحذاء نظيف'], answerIndex: 0, ar: 'ما معنى These shoes are too small؟' },
      { question: 'Which material comes from animals?', options: ['leather', 'cotton', 'paper', 'glass'], answerIndex: 0, ar: 'أي مادة تأتي من الحيوانات؟' },
    ],
  },

  /* ================= lesson 76 — Sizes and Colors ================= */
  {
    num: 76,
    tags: ['sizes', 'colors', 'clothes'],
    objectives: [
      'Ask and give clothing sizes',
      'Describe fit: too tight, too loose, too long',
      'Talk about dark and light colors',
    ],
    grammar: {
      explanation: 'Clothes come in sizes: small, medium, large and extra large, or by number like size 42. Ask "What size do you wear?" and answer "I wear size forty-two". To describe a problem, use "too" + adjective: "The shirt is too tight", "These pants are too loose", "The dress is too long". Colors also describe clothes: dark colors like dark blue and black, and light colors like light green and pink. The adjective never changes in English: a dark blue jacket, two dark blue jackets.',
      explanationAr: 'تأتي الملابس بمقاسات: small وmedium وlarge وextra large، أو برقم مثل مقاس ٤٢. اسأل What size do you wear؟ وأجب I wear size forty-two. ولوصف المشكلة استخدم too مع الصفة: The shirt is too tight، These pants are too loose، The dress is too long. وتصف الألوان الملابس أيضا: الألوان الداكنة مثل dark blue والأسود، والفاتحة مثل light green والوردي. والصفة لا تتغير في الإنجليزية: a dark blue jacket، two dark blue jackets.',
      examples: [
        { en: 'What size do you wear? I wear size forty-two.', ar: 'ما مقاسك؟ ألبس مقاس ٤٢.' },
        { en: 'This shirt is too tight for me.', ar: 'هذا القميص ضيق جدا لي.' },
        { en: 'He is going to buy a brown jacket.', ar: 'سيشتري سترة بنية.' },
      ],
    },
    vocabulary: [
      { word: 'size', meaningAr: 'مقاس', example: 'What size do you wear?', ipa: 'saɪz' },
      { word: 'small', meaningAr: 'صغير', example: 'The small size fits my son.' },
      { word: 'medium', meaningAr: 'متوسط', example: 'My son wears a medium.' },
      { word: 'large', meaningAr: 'كبير', example: 'Try the large one instead.' },
      { word: 'tight', meaningAr: 'ضيق', example: 'This shirt is too tight.' },
      { word: 'loose', meaningAr: 'واسع', example: 'These pants are too loose.' },
      { word: 'dark', meaningAr: 'داكن', example: 'I like dark colors like dark blue.' },
      { word: 'light', meaningAr: 'فاتح', example: 'She prefers light colors like light green.' },
      { word: 'pair', meaningAr: 'زوج', example: 'I need a pair of black shoes.' },
      { word: 'wide', meaningAr: 'واسع (عرض)', example: 'This belt is too wide.' },
      { word: 'measure', meaningAr: 'يقيس', example: 'Could you measure my waist, please?' },
      { word: 'color', meaningAr: 'لون', example: 'What color is your new coat?' },
    ],
    scenario: [
      { en: 'What size do you wear?', ar: 'ما مقاسك؟', d: 1 },
      { en: 'I wear size forty-two in shirts.', ar: 'ألبس مقاس ٤٢ في القمصان.', d: 1 },
      { en: 'My son wears a medium.', ar: 'ابني يلبس مقاس متوسط.', d: 1 },
      { en: 'This shirt is too tight for me.', ar: 'هذا القميص ضيق جدا لي.', d: 1 },
      { en: 'Try the large one instead.', ar: 'جرب الكبير بدلا منه.', d: 2 },
      { en: 'These pants are too loose at the waist.', ar: 'هذا البنطال واسع جدا عند الخصر.', d: 2 },
      { en: 'Do you have a smaller size?', ar: 'هل لديك مقاس أصغر؟', d: 2 },
      { en: 'Sorry, small is the smallest we have.', ar: 'عذرا، الصغير هو أصغر مقاس لدينا.', d: 2 },
      { en: 'I like dark colors like dark blue.', ar: 'أحب الألوان الداكنة مثل الأزرق الداكن.', d: 2 },
      { en: 'Does she prefer light colors?', ar: 'هل تفضل هي الألوان الفاتحة؟', d: 2 },
      { en: 'Yes, light green and light pink.', ar: 'نعم، أخضر فاتح ووردي فاتح.', d: 2 },
      { en: 'The black dress was too long yesterday.', ar: 'كان الفستان الأسود طويلا جدا أمس.', d: 3 },
      { en: 'My mother shortened it for me.', ar: 'قصّرت لي أمي.', d: 3 },
      { en: 'We will buy two white shirts for school.', ar: 'سنشتري قميصين أبيضين للمدرسة.', d: 2 },
      { en: 'He is going to choose a brown jacket.', ar: 'سيختار سترة بنية.', d: 3 },
      { en: 'Could you measure my waist, please?', ar: 'هل يمكنك قياس وسطي من فضلك؟', d: 3 },
      { en: 'Of course. The medium fits you well.', ar: 'بالطبع. المقاس المتوسط مناسب لك.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'What size is the {CL}?', arTmpl: 'ما مقاس {CL_ar}؟',
        slots: { CL: CLOTHES_DEF },
        tags: ['sizes', 'questions'], d: 1, limit: 8,
      },
      {
        tmpl: 'I wear size {N}.', arTmpl: 'ألبس مقاس {N_ar}.',
        slots: {
          N: [
            { en: 'small', ar: 'صغير' }, { en: 'medium', ar: 'متوسط' },
            { en: 'large', ar: 'كبير' }, { en: 'thirty-eight', ar: '٣٨' },
            { en: 'forty', ar: '٤٠' }, { en: 'forty-two', ar: '٤٢' },
          ],
        },
        tags: ['sizes', 'numbers'], d: 1, limit: 6,
      },
      {
        tmpl: 'The {CL} is too {AD}.', arTmpl: '{CL_ar} {AD_ar}.',
        slots: {
          CL: CLOTHES_DEF,
          ADJ: [
            { en: 'tight', m: 'ضيق جدا', f: 'ضيقة جدا' }, { en: 'loose', m: 'واسع جدا', f: 'واسعة جدا' },
            { en: 'long', m: 'طويل جدا', f: 'طويلة جدا' }, { en: 'short', m: 'قصير جدا', f: 'قصيرة جدا' },
            { en: 'small', m: 'صغير جدا', f: 'صغيرة جدا' },
          ],
          AD: (x) => [{ en: 'too ' + x.ADJ.en, ar: x.CL.g === 'f' ? x.ADJ.f : x.ADJ.m }],
        },
        tags: ['sizes', 'adjectives'], d: 2, limit: 20,
      },
      {
        tmpl: 'Do you have it in {C}?', arTmpl: 'هل لديك بلون {C_ar}؟',
        slots: { C: B.COLORS.map((c) => ({ en: c.en, ar: c.ar })) },
        tags: ['colors', 'questions'], d: 1, limit: 11,
      },
      {
        tmpl: 'He is going to buy a {C} {CL}.', arTmpl: 'س{V_ar} {CL_ar} {C_ar}.',
        slots: {
          CL: CLOTHES_ACC,
          CC: B.COLORS,
          C: (x) => [(x.CL.g === 'f' ? { en: x.CC.en, ar: x.CC.f } : { en: x.CC.en, ar: x.CC.ar })],
          V: [{ en: 'is going to buy', ar: 'يشتري' }],
        },
        tags: ['colors', 'clothes'], d: 3, limit: 14,
      },
    ],
    fills: [
      { en: 'What size do you wear?', ar: 'ما مقاسك؟', word: 'size' },
      { en: 'I wear size forty-two in shirts.', ar: 'ألبس مقاس ٤٢ في القمصان.', word: 'forty-two' },
      { en: 'This shirt is too tight for me.', ar: 'هذا القميص ضيق جدا لي.', word: 'tight' },
      { en: 'These pants are too loose at the waist.', ar: 'هذا البنطال واسع جدا عند الخصر.', word: 'loose' },
      { en: 'I like dark colors like dark blue.', ar: 'أحب الألوان الداكنة مثل الأزرق الداكن.', word: 'dark' },
      { en: 'She likes light green very much.', ar: 'تحب الأخضر الفاتح كثيرا.', word: 'light' },
      { en: 'Could you measure my waist, please?', ar: 'هل يمكنك قياس وسطي من فضلك؟', word: 'measure' },
      { en: 'The medium fits you well.', ar: 'المقاس المتوسط مناسب لك.', word: 'medium' },
    ],
    orders: [
      { en: 'What size do you wear, sir?', ar: 'ما مقاسك يا سيدي؟' },
      { en: 'This shirt is too tight for me.', ar: 'هذا القميص ضيق جدا لي.' },
      { en: 'These pants are too loose today.', ar: 'هذا البنطال واسع جدا اليوم.' },
      { en: 'I like dark blue and light green.', ar: 'أحب الأزرق الداكن والأخضر الفاتح.' },
      { en: 'He is going to buy a brown jacket.', ar: 'سيشتري سترة بنية.' },
      { en: 'Could you measure my waist, please?', ar: 'هل يمكنك قياس وسطي من فضلك؟' },
    ],
    mc: [
      { question: 'Which size is bigger than large?', options: ['extra large', 'small', 'medium', 'tiny'], answerIndex: 0, ar: 'أي مقاس أكبر من large؟' },
      { question: 'The shirt is too tight. You need a ___ one.', options: ['larger', 'smaller', 'darker', 'cheaper'], answerIndex: 0, ar: 'القميص ضيق جدا، فأنت تحتاج مقاسا:' },
      { question: 'Dark blue is a ___ color.', options: ['dark', 'light', 'sweet', 'spicy'], answerIndex: 0, ar: 'الأزرق الداكن لون:' },
      { question: '"Too loose" means the clothes are:', options: ['واسعة جدا', 'ضيقة جدا', 'قصيرة جدا', 'قذرة جدا'], answerIndex: 0, ar: 'ما معنى Too loose؟' },
    ],
  },

  /* ================= lesson 77 — Returns and Exchanges ================= */
  {
    num: 77,
    tags: ['returns', 'shopping'],
    objectives: [
      'Return an item and ask for a refund',
      'Exchange an item for another size or color',
      'Ask about the receipt and the store policy',
    ],
    grammar: {
      explanation: 'When a thing has a problem, return it to the store: "I want to return this jacket". For machines say "It does not work" or "It is broken". The shop may give you a refund (your money back) or an exchange (another item). Always ask "Do you have the receipt?" — you need it to return things. The store policy tells you the rules, for example "The store allows returns for fourteen days". Past simple is useful here: "I bought it here last Monday", "She did not keep the label".',
      explanationAr: 'عند وجود مشكلة في شيء أرجعه إلى المتجر: I want to return this jacket. وللأجهزة قل It does not work أو It is broken. وقد يعطيك المتجر استردادا للمال refund أو استبدالا exchange. اسأل دائما Do you have the receipt؟ فأنت بحاجة إلى الإيصال للإرجاع. وسياسة المتجر تبيّن القواعد، مثل: The store allows returns for fourteen days. والماضي البسيط مفيد هنا: I bought it here last Monday، She did not keep the label.',
      examples: [
        { en: 'I want to return this jacket. It is too small.', ar: 'أريد إرجاع هذه السترة. إنها صغيرة جدا.' },
        { en: 'This kettle does not work. Can I get a refund?', ar: 'هذه الغلاية لا تعمل. هل يمكنني استرداد المال؟' },
        { en: 'The store allows returns for fourteen days.', ar: 'المتجر يسمح بالإرجاع خلال أربعة عشر يوما.' },
      ],
    },
    vocabulary: [
      { word: 'return', meaningAr: 'يسترجع / يرجّع', example: 'I want to return this jacket.', ipa: 'rɪˈtɜːrn' },
      { word: 'exchange', meaningAr: 'يستبدل', example: 'Can I exchange it for a larger size?' },
      { word: 'refund', meaningAr: 'استرداد المال', example: 'I would like a refund, please.' },
      { word: 'receipt', meaningAr: 'إيصال', example: 'Do you have the receipt?' },
      { word: 'policy', meaningAr: 'سياسة', example: 'The store policy allows returns.' },
      { word: 'broken', meaningAr: 'معطل / مكسور', example: 'The radio is broken.' },
      { word: 'item', meaningAr: 'قطعة / عنصر', example: 'This item is on the top shelf.' },
      { word: 'label', meaningAr: 'ملصق / بطاقة السعر', example: 'She did not keep the label.' },
      { word: 'manager', meaningAr: 'مدير', example: 'The manager gave me a new box.' },
      { word: 'box', meaningAr: 'صندوق / علبة', example: 'The receipt is in the box.' },
      { word: 'problem', meaningAr: 'مشكلة', example: 'What is the problem with it?' },
      { word: 'store', meaningAr: 'متجر', example: 'The store opens at nine.' },
    ],
    scenario: [
      { en: 'Hello, I want to return this jacket.', ar: 'مرحبا، أريد إرجاع هذه السترة.', d: 1 },
      { en: 'What is the problem with it?', ar: 'ما المشكلة فيها؟', d: 1 },
      { en: 'It is too small for my brother.', ar: 'إنها صغيرة جدا لأخي.', d: 2 },
      { en: 'Do you have the receipt?', ar: 'هل لديك الإيصال؟', d: 1 },
      { en: 'Yes, here is the receipt in the box.', ar: 'نعم، هذا الإيصال في الصندوق.', d: 2 },
      { en: 'This kettle does not work at all.', ar: 'هذه الغلاية لا تعمل إطلاقا.', d: 2 },
      { en: 'I am sorry to hear that, sir.', ar: 'آسف لسماع ذلك يا سيدي.', d: 2 },
      { en: 'Can I get a refund or an exchange?', ar: 'هل يمكنني استرداد المال أو الاستبدال؟', d: 2 },
      { en: 'We will give you a new one today.', ar: 'سنعطيك قطعة جديدة اليوم.', d: 2 },
      { en: 'The radio stopped working two days ago.', ar: 'توقف الراديو عن العمل قبل يومين.', d: 3 },
      { en: 'I bought it here last Monday.', ar: 'اشتريته هنا الاثنين الماضي.', d: 3 },
      { en: 'She did not keep the label on the dress.', ar: 'لم تحتفظ بالملصق على الفستان.', d: 3 },
      { en: 'The store policy allows returns for fourteen days.', ar: 'سياسة المتجر تسمح بالإرجاع خلال أربعة عشر يوما.', d: 3 },
      { en: 'We do not accept returns without a receipt.', ar: 'لا نقبل الإرجاع بدون إيصال.', d: 2 },
      { en: 'I am going to exchange it for a larger size.', ar: 'سأستبدله بمقاس أكبر.', d: 3 },
      { en: 'Could you check the system for my refund, please?', ar: 'هل يمكنك التحقق من استردادي في النظام من فضلك؟', d: 3 },
      { en: 'Thank you. You were very kind today.', ar: 'شكرا لك. كنت لطيفا جدا اليوم.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I want to return {IT}.', arTmpl: 'أريد إرجاع {IT_ar}.',
        slots: { IT: RETURN_ITEMS },
        tags: ['returns'], d: 1, limit: 8,
      },
      {
        tmpl: 'It does not work, so I need {R}.', arTmpl: 'إنه لا يعمل، لذلك أحتاج {R_ar}.',
        slots: {
          R: [
            { en: 'a refund', ar: 'استرداد المال' }, { en: 'an exchange', ar: 'استبدالا' },
            { en: 'a repair', ar: 'إصلاحا' }, { en: 'a new one', ar: 'قطعة جديدة' },
          ],
        },
        tags: ['returns', 'problems'], d: 2, limit: 4,
      },
      {
        tmpl: 'Can I exchange this for the {C} one?', arTmpl: 'هل يمكنني استبدال هذا باللون {C_ar}؟',
        slots: { C: B.COLORS.map((c) => ({ en: c.en, ar: c.ar })) },
        tags: ['returns', 'colors'], d: 2, limit: 11,
      },
      {
        tmpl: 'Do you have the {D}?', arTmpl: 'هل لديك {D_ar}؟',
        slots: {
          D: [
            { en: 'receipt', ar: 'الإيصال' }, { en: 'box', ar: 'الصندوق' },
            { en: 'label', ar: 'الملصق' }, { en: 'bag', ar: 'الحقيبة' },
            { en: 'credit card', ar: 'بطاقة الدفع' },
          ],
        },
        tags: ['returns', 'questions'], d: 1, limit: 5,
      },
      {
        tmpl: '{S} bought {IT} yesterday.', arTmpl: '{S_ar} {V_ar} {IT_ar} أمس.',
        slots: {
          S: B.NAMED_SING,
          IT: RETURN_ITEMS,
          V: (x) => [{ en: B.enPast('buy'), ar: x.S.agr === 'she' ? 'اشترت' : 'اشترى' }],
        },
        tags: ['returns', 'past-simple'], d: 3, limit: 16,
      },
      {
        tmpl: 'The store allows returns for {T}.', arTmpl: 'المتجر يسمح بالإرجاع خلال {T_ar}.',
        slots: {
          T: [
            { en: 'seven days', ar: 'سبعة أيام' }, { en: 'fourteen days', ar: 'أربعة عشر يوما' },
            { en: 'thirty days', ar: 'ثلاثين يوما' }, { en: 'one week', ar: 'أسبوع واحد' },
          ],
        },
        tags: ['returns', 'policy'], d: 3, limit: 4,
      },
    ],
    fills: [
      { en: 'Hello, I want to return this jacket.', ar: 'مرحبا، أريد إرجاع هذه السترة.', word: 'return' },
      { en: 'Do you have the receipt?', ar: 'هل لديك الإيصال؟', word: 'receipt' },
      { en: 'This kettle does not work at all.', ar: 'هذه الغلاية لا تعمل إطلاقا.', word: 'kettle' },
      { en: 'Can I get a refund or an exchange?', ar: 'هل يمكنني استرداد المال أو الاستبدال؟', word: 'refund' },
      { en: 'The store policy allows returns for fourteen days.', ar: 'سياسة المتجر تسمح بالإرجاع خلال أربعة عشر يوما.', word: 'policy' },
      { en: 'We do not accept returns without a receipt.', ar: 'لا نقبل الإرجاع بدون إيصال.', word: 'accept' },
      { en: 'I bought this radio here last Monday.', ar: 'اشتريت هذا الراديو هنا الاثنين الماضي.', word: 'radio' },
      { en: 'The manager gave me a new box.', ar: 'أعطاني المدير صندوقا جديدا.', word: 'manager' },
    ],
    orders: [
      { en: 'I want to return this jacket today.', ar: 'أريد إرجاع هذه السترة اليوم.' },
      { en: 'Do you have the receipt, sir?', ar: 'هل لديك الإيصال يا سيدي؟' },
      { en: 'This kettle does not work at all.', ar: 'هذه الغلاية لا تعمل إطلاقا.' },
      { en: 'Can I get a refund or an exchange?', ar: 'هل يمكنني استرداد المال أو الاستبدال؟' },
      { en: 'She did not keep the label on the dress.', ar: 'لم تحتفظ بالملصق على الفستان.' },
      { en: 'I am going to exchange it for a larger size.', ar: 'سأستبدله بمقاس أكبر.' },
    ],
    mc: [
      { question: 'You want your money back. You ask for:', options: ['a refund', 'a menu', 'a cart', 'a fitting room'], answerIndex: 0, ar: 'تريد استرجاع مالك، فتطلب:' },
      { question: 'To swap a small shirt for a large one is to:', options: ['exchange it', 'eat it', 'lose it', 'hide it'], answerIndex: 0, ar: 'تبديل قميص صغير بآخر كبير يسمى:' },
      { question: 'What proves that you bought the item?', options: ['the receipt', 'the weather', 'the waiter', 'the weekend'], answerIndex: 0, ar: 'ما الذي يثبت أنك اشتريت القطعة؟' },
      { question: '"This kettle does not work" means the kettle is:', options: ['broken', 'delicious', 'fresh', 'colorful'], answerIndex: 0, ar: 'عبارة This kettle does not work تعني أن الغلاية:' },
    ],
  },
];
