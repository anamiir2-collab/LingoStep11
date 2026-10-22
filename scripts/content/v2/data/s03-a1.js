/* ============================================================
   v2 section data — s03-a1.js
   Home & Family · lessons 46–49 (A2)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 46 — Family and Relationships ================= */
  {
    num: 46,
    tags: ['family', 'relationships'],
    objectives: [
      'Name extended family: uncle, aunt, cousin, nephew, niece',
      'Describe family ties with "married to"',
      'Say who people look like in your family',
    ],
    grammar: {
      explanation: 'Extended family words go beyond mother, father, brother and sister. Your grandfather and grandmother are the parents of your mother or father. Your uncle is the brother of your mother or father, and your aunt is his wife or her sister; their children are your cousins. A nephew is the son of your brother or sister, and a niece is their daughter. Use "is married to" to connect a husband and wife: "My uncle is married to my aunt". Use "looks like" to say a person resembles another person: "My son looks like my father".',
      explanationAr: 'كلمات العائلة الممتدة تتجاوز الأم والأب والأخ والأخت. الجد والجدة هما والد وأم أبيك أو أمك. والعم هو أخ أبيك أو أمك، والعمة زوجته أو أخت أبيك أو أمك، وأبناؤهم هم أبناء عمومتك. وابن أخيك أو أختك يسمى nephew، وابنتهما niece. استخدم is married to لربط الزوج بزوجته: My uncle is married to my aunt. واستخدم looks like للتشابه بين شخصين: My son looks like my father.',
      examples: [
        { en: 'My uncle is married to my aunt.', ar: 'عمي متزوج من عمتي.' },
        { en: 'My nephew looks like my brother.', ar: 'ابن أخي يشبه أخي.' },
        { en: 'How many cousins do you have?', ar: 'كم ابنا عم لديك؟' },
      ],
    },
    vocabulary: [
      { word: 'grandfather', meaningAr: 'الجد', example: 'My grandfather tells us old stories.', ipa: 'ˈɡrænfɑːðər' },
      { word: 'grandmother', meaningAr: 'الجدة', example: 'My grandmother cooks the best rice.' },
      { word: 'uncle', meaningAr: 'العم / الخال', example: 'My uncle lives in a small village.' },
      { word: 'aunt', meaningAr: 'العمة / الخالة', example: 'My aunt is a doctor in Amman.' },
      { word: 'cousin', meaningAr: 'ابن أو ابنة العم / الخال', example: 'I play football with my cousins.' },
      { word: 'nephew', meaningAr: 'ابن الأخ أو الأخت', example: 'This is my nephew Omar.' },
      { word: 'niece', meaningAr: 'ابنة الأخ أو الأخت', example: 'My niece is only two years old.' },
      { word: 'married', meaningAr: 'متزوج', example: 'My brother is not married yet.' },
      { word: 'looks like', meaningAr: 'يشبه', example: 'She looks like my grandmother.' },
      { word: 'relatives', meaningAr: 'الأقارب', example: 'We visit our relatives every year.' },
      { word: 'family tree', meaningAr: 'شجرة العائلة', example: 'I drew our family tree at school.' },
      { word: 'grandparents', meaningAr: 'الجد والجدة', example: 'My grandparents live in the old house.' },
    ],
    scenario: [
      { en: 'This is my nephew Omar.', ar: 'هذا ابن أخي عمر.', d: 1 },
      { en: 'My niece is only two years old.', ar: 'ابنة أختي عمرها سنتان فقط.', d: 1 },
      { en: 'My uncle is married to my aunt.', ar: 'عمي متزوج من عمتي.', d: 1 },
      { en: 'My grandfather tells us old stories.', ar: 'جدي يحكي لنا قصصا قديمة.', d: 1 },
      { en: 'My grandmother cooks the best rice.', ar: 'جدتي تطبخ أفضل أرز.', d: 1 },
      { en: 'Please tell me about your family.', ar: 'من فضلك حدثني عن عائلتك.', d: 1 },
      { en: 'She looks like my grandmother.', ar: 'هي تشبه جدتي.', d: 2 },
      { en: 'My nephew looks like my brother.', ar: 'ابن أخي يشبه أخي.', d: 2 },
      { en: 'How many cousins do you have?', ar: 'كم ابنا عم لديك؟', d: 2 },
      { en: 'I have two nephews and one niece.', ar: 'لدي ابنان لأخي وبنت لأختي.', d: 2 },
      { en: 'Are you married?', ar: 'هل أنت متزوج؟', d: 2 },
      { en: 'Yes, I am married with two children.', ar: 'نعم، أنا متزوج ولدي طفلان.', d: 2 },
      { en: 'My brother is not married yet.', ar: 'أخي غير متزوج بعد.', d: 2 },
      { en: 'We visit our relatives every year.', ar: 'نزور أقاربنا كل سنة.', d: 2 },
      { en: 'My uncle lives in a small village.', ar: 'عمي يسكن في قرية صغيرة.', d: 2 },
      { en: 'Where does your aunt live?', ar: 'أين تسكن عمتك؟', d: 2 },
      { en: 'My cousin looks like my uncle.', ar: 'ابن عمي يشبه عمي.', d: 2 },
      { en: 'My daughter looks like my wife.', ar: 'ابنتي تشبه زوجتي.', d: 3 },
    ],
    patterns: [
      {
        tmpl: '{S} {V} {R}.', arTmpl: '{S_ar} {V_ar} {R_ar}.',
        slots: {
          S: [
            { en: 'My son', ar: 'ابني', agr: 'he' }, { en: 'My daughter', ar: 'ابنتي', agr: 'she' },
            { en: 'My brother', ar: 'أخي', agr: 'he' }, { en: 'My sister', ar: 'أختي', agr: 'she' },
            { en: 'My nephew', ar: 'ابن أخي', agr: 'he' }, { en: 'My niece', ar: 'ابنة أختي', agr: 'she' },
          ],
          V: (x) => [{ en: 'looks like', ar: x.S.agr === 'she' ? 'تشبه' : 'يشبه' }],
          R: (x) => (x.S.agr === 'she'
            ? [
              { en: 'my grandmother', ar: 'جدتي' }, { en: 'my mother', ar: 'أمي' },
              { en: 'my aunt', ar: 'عمتي' },
            ]
            : [
              { en: 'my grandfather', ar: 'جدي' }, { en: 'my father', ar: 'أبي' },
              { en: 'my uncle', ar: 'عمي' },
            ]),
        },
        tags: ['family', 'descriptions'], d: 2, limit: 18,
      },
      {
        tmpl: '{R} is {M}.', arTmpl: '{R_ar} {M_ar}.',
        slots: {
          R: [
            { en: 'My uncle', ar: 'عمي', agr: 'he' }, { en: 'My aunt', ar: 'عمتي', agr: 'she' },
            { en: 'My sister', ar: 'أختي', agr: 'she' }, { en: 'My brother', ar: 'أخي', agr: 'he' },
            { en: 'My cousin', ar: 'ابن عمي', agr: 'he' }, { en: 'My daughter', ar: 'ابنتي', agr: 'she' },
          ],
          M: (x) => [{ en: 'married', ar: x.R.agr === 'she' ? 'متزوجة' : 'متزوج' }],
        },
        tags: ['family', 'relationships'], d: 1, limit: 6,
      },
      {
        tmpl: 'Is your {R} {M}?', arTmpl: 'هل {R_ar} {M_ar}؟',
        slots: {
          R: [
            { en: 'uncle', ar: 'عمك', agr: 'he' }, { en: 'aunt', ar: 'عمتك', agr: 'she' },
            { en: 'cousin', ar: 'ابن عمك', agr: 'he' }, { en: 'sister', ar: 'أختك', agr: 'she' },
            { en: 'brother', ar: 'أخوك', agr: 'he' }, { en: 'niece', ar: 'ابنة أختك', agr: 'she' },
          ],
          M: (x) => [{ en: 'married', ar: x.R.agr === 'she' ? 'متزوجة' : 'متزوج' }],
        },
        tags: ['family', 'questions'], d: 2, limit: 6,
      },
      {
        tmpl: 'I have {N}.', arTmpl: 'لدي {N_ar}.',
        slots: {
          N: [
            { en: 'two nephews', ar: 'ابنان لأخي' }, { en: 'three nieces', ar: 'ثلاث بنات لأختي' },
            { en: 'four cousins', ar: 'أربعة أبناء عمومة' }, { en: 'many relatives here', ar: 'أقارب كثيرون هنا' },
          ],
        },
        tags: ['family', 'have'], d: 1, limit: 4,
      },
      {
        tmpl: 'We visit {R} {T}.', arTmpl: 'نزور {R_ar} {T_ar}.',
        slots: {
          R: [
            { en: 'our relatives', ar: 'أقاربنا' }, { en: 'our cousins', ar: 'أبناء عمومتنا' },
            { en: 'our grandparents', ar: 'أجدادنا' },
          ],
          T: [
            { en: 'on Eid', ar: 'في العيد' }, { en: 'every summer', ar: 'كل صيف' },
            { en: 'every weekend', ar: 'كل نهاية أسبوع' },
          ],
        },
        tags: ['family', 'present-simple'], d: 2, limit: 9,
      },
    ],
    fills: [
      { en: 'My uncle is married to my aunt.', ar: 'عمي متزوج من عمتي.', word: 'married', hint: 'زواج' },
      { en: 'This is my nephew Omar.', ar: 'هذا ابن أخي عمر.', word: 'nephew', hint: 'ابن الأخ أو الأخت' },
      { en: 'My niece is only two years old.', ar: 'ابنة أختي عمرها سنتان فقط.', word: 'niece' },
      { en: 'My cousin looks like my uncle.', ar: 'ابن عمي يشبه عمي.', word: 'looks like', hint: 'تشابه' },
      { en: 'My grandfather tells us old stories.', ar: 'جدي يحكي لنا قصصا قديمة.', word: 'grandfather' },
      { en: 'We visit our relatives every year.', ar: 'نزور أقاربنا كل سنة.', word: 'relatives' },
      { en: 'Where does your aunt live?', ar: 'أين تسكن عمتك؟', word: 'aunt' },
      { en: 'My brother is not married yet.', ar: 'أخي غير متزوج بعد.', word: 'yet' },
    ],
    orders: [
      { en: 'My uncle is married to my aunt.', ar: 'عمي متزوج من عمتي.' },
      { en: 'My nephew looks like my brother.', ar: 'ابن أخي يشبه أخي.' },
      { en: 'How many cousins do you have?', ar: 'كم ابنا عم لديك؟' },
      { en: 'My grandfather tells us old stories.', ar: 'جدي يحكي لنا قصصا قديمة.' },
      { en: 'This is my little nephew Omar.', ar: 'هذا ابن أخي الصغير عمر.' },
      { en: 'My niece is only two years old.', ar: 'ابنة أختي عمرها سنتان فقط.' },
    ],
    mc: [
      { question: 'The son of your uncle is your:', options: ['cousin', 'nephew', 'brother', 'grandfather'], answerIndex: 0, ar: 'ابن عمك هو:' },
      { question: 'What does "She looks like my aunt" mean?', options: ['هي تشبه عمتي', 'هي متزوجة من عمتي', 'هي ابنة عمتي', 'هي تسكن مع عمتي'], answerIndex: 0, ar: 'ما معنى She looks like my aunt؟' },
      { question: 'The daughter of your brother is your:', options: ['niece', 'nephew', 'aunt', 'sister'], answerIndex: 0, ar: 'ابنة أخيك هي:' },
      { question: 'My aunt is married to my:', options: ['uncle', 'nephew', 'cousin', 'brother'], answerIndex: 0, ar: 'عمتي متزوجة من:' },
    ],
  },

  /* ================= lesson 47 — Describing a Home ================= */
  {
    num: 47,
    tags: ['home', 'descriptions'],
    objectives: [
      'Describe your apartment or house',
      'Talk about floors, buildings and rent',
      'Ask simple questions about a home',
    ],
    grammar: {
      explanation: 'To describe a home, use the verb be with adjectives: "The apartment is small", "Our building is old but clean". Use "has" for what the home contains: "Our apartment has two bedrooms and a small balcony". Say which floor you live on with "on the ... floor": "We live on the third floor". The money you pay every month for your home is the rent: "The rent is three hundred dollars a month". To ask someone: "Do you live in a house or an apartment?" and "How many bedrooms does your apartment have?".',
      explanationAr: 'لوصف المنزل استخدم فعل الكينونة مع الصفات: The apartment is small، Our building is old but clean. واستخدم has لما يحويه المنزل: Our apartment has two bedrooms and a small balcony. ولتحديد الطابق الذي تسكن فيه قل on the ... floor: We live on the third floor. أما المبلغ الذي تدفعه كل شهر لسكنك فيسمى rent: The rent is three hundred dollars a month. وللسؤال: Do you live in a house or an apartment؟ وHow many bedrooms does your apartment have؟',
      examples: [
        { en: 'Our apartment has two bedrooms.', ar: 'شقتنا فيها غرفتا نوم.' },
        { en: 'We live on the third floor.', ar: 'نسكن في الطابق الثالث.' },
        { en: 'The rent is three hundred dollars a month.', ar: 'الإيجار ثلاثمئة دولار في الشهر.' },
      ],
    },
    vocabulary: [
      { word: 'apartment', meaningAr: 'شقة', example: 'We live in a small apartment.', ipa: 'əˈpɑːrtmənt' },
      { word: 'building', meaningAr: 'مبنى', example: 'Our building is old but very clean.' },
      { word: 'floor', meaningAr: 'طابق', example: 'We live on the third floor.' },
      { word: 'balcony', meaningAr: 'شرفة', example: 'The balcony is small but sunny.' },
      { word: 'bedroom', meaningAr: 'غرفة نوم', example: 'Our apartment has two bedrooms.' },
      { word: 'rent', meaningAr: 'إيجار', example: 'I pay the rent at the start of the month.' },
      { word: 'modern', meaningAr: 'حديث', example: 'Their kitchen is modern and clean.' },
      { word: 'quiet', meaningAr: 'هادئ', example: 'The new neighborhood is quiet and green.' },
      { word: 'sunny', meaningAr: 'مشمس', example: 'The balcony is small but sunny.' },
      { word: 'view', meaningAr: 'منظر', example: 'My bedroom window has a beautiful view.' },
      { word: 'neighborhood', meaningAr: 'الحي', example: 'I like our new neighborhood.' },
      { word: 'move', meaningAr: 'ينتقل إلى سكن جديد', example: 'We are going to move to a bigger apartment.' },
    ],
    scenario: [
      { en: 'We live in a small apartment.', ar: 'نسكن في شقة صغيرة.', d: 1 },
      { en: 'Our apartment has two bedrooms.', ar: 'شقتنا فيها غرفتا نوم.', d: 1 },
      { en: 'The balcony is small but sunny.', ar: 'الشرفة صغيرة لكنها مشمسة.', d: 2 },
      { en: 'We drink tea on the balcony every evening.', ar: 'نشرب الشاي على الشرفة كل مساء.', d: 2 },
      { en: 'We live on the third floor.', ar: 'نسكن في الطابق الثالث.', d: 1 },
      { en: 'Our building is old but very clean.', ar: 'مبنانا قديم لكنه نظيف جدا.', d: 2 },
      { en: 'Is the rent expensive?', ar: 'هل الإيجار مرتفع؟', d: 2 },
      { en: 'No, the rent is three hundred dollars a month.', ar: 'لا، الإيجار ثلاثمئة دولار في الشهر.', d: 2 },
      { en: 'I pay the rent at the start of the month.', ar: 'أدفع الإيجار في بداية الشهر.', d: 2 },
      { en: 'Do you live in a house or an apartment?', ar: 'هل تسكن في منزل أم شقة؟', d: 1 },
      { en: 'I live in an old house near the market.', ar: 'أسكن في منزل قديم قرب السوق.', d: 1 },
      { en: 'How many bedrooms does your apartment have?', ar: 'كم غرفة نوم في شقتك؟', d: 2 },
      { en: 'It has two bedrooms and a small kitchen.', ar: 'فيها غرفتا نوم ومطبخ صغير.', d: 2 },
      { en: 'We are going to move to a bigger apartment.', ar: 'سوف ننتقل إلى شقة أكبر.', d: 3 },
      { en: 'My brother will rent an apartment in Dubai.', ar: 'سيستأجر أخي شقة في دبي.', d: 3 },
      { en: 'We will paint the apartment next month.', ar: 'سنصبغ الشقة الشهر القادم.', d: 3 },
      { en: 'The new neighborhood is quiet and green.', ar: 'الحي الجديد هادئ وأخضر.', d: 2 },
      { en: 'The apartment is not far from the school.', ar: 'الشقة ليست بعيدة عن المدرسة.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'We live in {P}.', arTmpl: 'نسكن في {P_ar}.',
        slots: {
          P: [
            { en: 'a small apartment', ar: 'شقة صغيرة' }, { en: 'a big house', ar: 'منزل كبير' },
            { en: 'an old building', ar: 'مبنى قديم' }, { en: 'a new apartment', ar: 'شقة جديدة' },
            { en: 'a small house', ar: 'منزل صغير' },
          ],
        },
        tags: ['home', 'places'], d: 1, limit: 5,
      },
      {
        tmpl: '{H} {HAS} {N}.', arTmpl: '{H_ar} {HAS_ar} {N_ar}.',
        slots: {
          H: [
            { en: 'Our apartment', ar: 'شقتنا', g: 'f' }, { en: 'Our house', ar: 'منزلنا', g: 'm' },
            { en: 'My apartment', ar: 'شقتي', g: 'f' }, { en: 'Their house', ar: 'منزلهم', g: 'm' },
          ],
          HAS: (x) => [{ en: 'has', ar: x.H.g === 'f' ? 'فيها' : 'فيه' }],
          N: [
            { en: 'two big bedrooms', ar: 'غرفتا نوم كبيرتان' }, { en: 'a small balcony', ar: 'شرفة صغيرة' },
            { en: 'a big kitchen', ar: 'مطبخ كبير' }, { en: 'a beautiful garden', ar: 'حديقة جميلة' },
            { en: 'three rooms', ar: 'ثلاث غرف' },
          ],
        },
        tags: ['home', 'have'], d: 1, limit: 12,
      },
      {
        tmpl: 'We live on the {O} floor.', arTmpl: 'نسكن في الطابق {O_ar}.',
        slots: {
          O: [
            { en: 'second', ar: 'الثاني' }, { en: 'third', ar: 'الثالث' },
            { en: 'fourth', ar: 'الرابع' }, { en: 'fifth', ar: 'الخامس' },
            { en: 'sixth', ar: 'السادس' },
          ],
        },
        tags: ['home', 'numbers'], d: 1, limit: 5,
      },
      {
        tmpl: 'The rent is {A} dollars a month.', arTmpl: 'الإيجار {A_ar} دولارا في الشهر.',
        slots: {
          A: [
            { en: 'two hundred', ar: 'مئتا' }, { en: 'three hundred', ar: 'ثلاثمئة' },
            { en: 'four hundred', ar: 'أربعمئة' }, { en: 'five hundred', ar: 'خمسمئة' },
          ],
        },
        tags: ['home', 'money'], d: 2, limit: 4,
      },
      {
        tmpl: 'The {N} is {A}.', arTmpl: '{N_ar} {A_ar}.',
        slots: {
          N: [
            { en: 'building', ar: 'المبنى', g: 'm' }, { en: 'apartment', ar: 'الشقة', g: 'f' },
            { en: 'house', ar: 'المنزل', g: 'm' }, { en: 'neighborhood', ar: 'الحي', g: 'm' },
          ],
          A: (x) => {
            const f = x.N.g === 'f';
            return [
              { en: 'old', ar: f ? 'قديمة' : 'قديم' }, { en: 'quiet', ar: f ? 'هادئة' : 'هادئ' },
              { en: 'modern', ar: f ? 'حديثة' : 'حديث' }, { en: 'tall', ar: f ? 'طويلة' : 'طويل' },
            ];
          },
        },
        tags: ['home', 'adjectives'], d: 1, limit: 12,
      },
    ],
    fills: [
      { en: 'We live on the third floor.', ar: 'نسكن في الطابق الثالث.', word: 'floor', hint: 'طابق' },
      { en: 'Our apartment has two bedrooms.', ar: 'شقتنا فيها غرفتا نوم.', word: 'bedrooms' },
      { en: 'The rent is three hundred dollars a month.', ar: 'الإيجار ثلاثمئة دولار في الشهر.', word: 'rent', hint: 'إيجار' },
      { en: 'The balcony is small but sunny.', ar: 'الشرفة صغيرة لكنها مشمسة.', word: 'balcony' },
      { en: 'Do you live in a house or an apartment?', ar: 'هل تسكن في منزل أم شقة؟', word: 'apartment' },
      { en: 'We will paint the apartment next month.', ar: 'سنصبغ الشقة الشهر القادم.', word: 'paint' },
      { en: 'Our building is old but very clean.', ar: 'مبنانا قديم لكنه نظيف جدا.', word: 'building' },
      { en: 'The new neighborhood is quiet and green.', ar: 'الحي الجديد هادئ وأخضر.', word: 'quiet', hint: 'هادئ' },
    ],
    orders: [
      { en: 'We live on the third floor.', ar: 'نسكن في الطابق الثالث.' },
      { en: 'Our apartment has two bedrooms.', ar: 'شقتنا فيها غرفتا نوم.' },
      { en: 'The rent is three hundred dollars a month.', ar: 'الإيجار ثلاثمئة دولار في الشهر.' },
      { en: 'Do you live in a house or an apartment?', ar: 'هل تسكن في منزل أم شقة؟' },
      { en: 'We are going to move to a bigger apartment.', ar: 'سوف ننتقل إلى شقة أكبر.' },
      { en: 'The balcony is small but sunny.', ar: 'الشرفة صغيرة لكنها مشمسة.' },
    ],
    mc: [
      { question: 'Which sentence talks about a floor?', options: ['We live on the third floor.', 'We live in Cairo.', 'The rent is high.', 'The door is brown.'], answerIndex: 0, ar: 'أي جملة تتحدث عن الطابق؟' },
      { question: 'The money you pay every month for your home is:', options: ['the rent', 'the change', 'the fare', 'the price'], answerIndex: 0, ar: 'المال الذي تدفعه شهريا لسكنك هو:' },
      { question: '"Balcony" means:', options: ['شرفة', 'غرفة نوم', 'مطبخ', 'مدخل'], answerIndex: 0, ar: 'ما معنى balcony؟' },
      { question: 'Your home is on the fifth floor and the elevator is broken. You:', options: ['take the stairs', 'sleep in the kitchen', 'move the building', 'open the window'], answerIndex: 0, ar: 'سكنك في الطابق الخامس والمصعد معطل، فعليك أن:' },
    ],
  },

  /* ================= lesson 48 — Rooms and Furniture ================= */
  {
    num: 48,
    tags: ['home', 'furniture'],
    objectives: [
      'Name furniture: sofa, wardrobe, mirror, carpet, shelf, dresser',
      'Say where furniture is with prepositions',
      'Ask where things are and put them in place',
    ],
    grammar: {
      explanation: 'Furniture words name the big things in a room: sofa, wardrobe, mirror, carpet, shelf and dresser. To say where a thing is, use the verb be plus a preposition: "The sofa is next to the window", "The carpet is under the table", "The mirror is on the wall". To give instructions, use the verb put: "Put your clothes in the wardrobe, please". To ask about a place, say "Where is the wardrobe?" and answer "It is next to the door".',
      explanationAr: 'كلمات الأثاث تسمي الأشياء الكبيرة في الغرفة: الأريكة وخزانة الملابس والمرآة والسجادة والرف ودولاب الأدراج. ولقول مكان شيء استخدم فعل الكينونة مع حرف جر: The sofa is next to the window، The carpet is under the table، The mirror is on the wall. ولإعطاء تعليمات استخدم فعل put: Put your clothes in the wardrobe, please. وللسؤال عن المكان قل Where is the wardrobe؟ وأجب It is next to the door.',
      examples: [
        { en: 'The sofa is next to the window.', ar: 'الأريكة بجانب النافذة.' },
        { en: 'Put your clothes in the wardrobe, please.', ar: 'ضع ملابسك في خزانة الملابس من فضلك.' },
        { en: 'Where is the mirror? It is on the wall.', ar: 'أين المرآة؟ إنها على الحائط.' },
      ],
    },
    vocabulary: [
      { word: 'sofa', meaningAr: 'أريكة', example: 'The sofa is next to the window.', ipa: 'ˈsoʊfə' },
      { word: 'wardrobe', meaningAr: 'خزانة ملابس', example: 'Put your clothes in the wardrobe.' },
      { word: 'mirror', meaningAr: 'مرآة', example: 'The mirror is on the wall.' },
      { word: 'carpet', meaningAr: 'سجادة', example: 'The carpet is under the small table.' },
      { word: 'shelf', meaningAr: 'رف', example: 'My books are on the shelf.' },
      { word: 'dresser', meaningAr: 'دولاب أدراج', example: 'The socks are in the dresser.' },
      { word: 'between', meaningAr: 'بين', example: 'The desk is between the bed and the window.' },
      { word: 'under', meaningAr: 'تحت', example: 'The carpet is under the small table.' },
      { word: 'picture', meaningAr: 'لوحة', example: 'The picture is above the sofa.' },
      { word: 'corner', meaningAr: 'زاوية', example: 'The lamp is in the corner of the bedroom.' },
      { word: 'tidy', meaningAr: 'مرتب', example: 'My room is small but very tidy.' },
      { word: 'comfortable', meaningAr: 'مريح', example: 'The old sofa is not comfortable.' },
    ],
    scenario: [
      { en: 'The sofa is next to the window.', ar: 'الأريكة بجانب النافذة.', d: 1 },
      { en: 'The carpet is under the small table.', ar: 'السجادة تحت الطاولة الصغيرة.', d: 1 },
      { en: 'The mirror in the hall is new.', ar: 'المرآة في المدخل جديدة.', d: 1 },
      { en: 'My books are on the shelf.', ar: 'كتيبي على الرف.', d: 1 },
      { en: 'The socks are in the dresser.', ar: 'الجوارب في دولاب الأدراج.', d: 2 },
      { en: 'Please put your clothes in the wardrobe.', ar: 'من فضلك ضع ملابسك في خزانة الملابس.', d: 1 },
      { en: 'The lamp is in the corner of the bedroom.', ar: 'المصباح في زاوية غرفة النوم.', d: 2 },
      { en: 'Where is the wardrobe?', ar: 'أين خزانة الملابس؟', d: 1 },
      { en: 'It is next to the door.', ar: 'إنها بجانب الباب.', d: 1 },
      { en: 'Is the big mirror in the bedroom?', ar: 'هل المرآة الكبيرة في غرفة النوم؟', d: 2 },
      { en: 'No, it is in the living room.', ar: 'لا، إنها في غرفة الجلوس.', d: 2 },
      { en: 'The desk is between the bed and the window.', ar: 'المكتب بين السرير والنافذة.', d: 2 },
      { en: 'My room is small but very tidy.', ar: 'غرفتي صغيرة لكنها مرتبة جدا.', d: 2 },
      { en: 'We bought a new carpet for the living room.', ar: 'اشترينا سجادة جديدة لغرفة الجلوس.', d: 2 },
      { en: 'The old sofa is not comfortable.', ar: 'الأريكة القديمة غير مريحة.', d: 2 },
      { en: 'She cleans the shelves every Friday.', ar: 'تنظف الرفوف كل جمعة.', d: 2 },
      { en: 'I will put the mirror next to the dresser.', ar: 'سأضع المرآة بجانب دولاب الأدراج.', d: 3 },
      { en: 'What is under the small table?', ar: 'ماذا يوجد تحت الطاولة الصغيرة؟', d: 2 },
    ],
    patterns: [
      {
        tmpl: '{F} is {L} the {N}.', arTmpl: '{F_ar} {L_ar} {N_ar}.',
        slots: {
          F: [
            { en: 'The sofa', ar: 'الأريكة' }, { en: 'The wardrobe', ar: 'خزانة الملابس' },
            { en: 'The mirror', ar: 'المرآة' }, { en: 'The carpet', ar: 'السجادة' },
            { en: 'The shelf', ar: 'الرف' }, { en: 'The dresser', ar: 'دولاب الأدراج' },
            { en: 'The lamp', ar: 'المصباح' },
          ],
          L: [
            { en: 'next to', ar: 'بجانب' }, { en: 'under', ar: 'تحت' },
            { en: 'near', ar: 'بالقرب من' }, { en: 'behind', ar: 'خلف' },
          ],
          N: [
            { en: 'window', ar: 'النافذة' }, { en: 'door', ar: 'الباب' },
            { en: 'bed', ar: 'السرير' }, { en: 'table', ar: 'الطاولة' },
            { en: 'wall', ar: 'الحائط' },
          ],
        },
        filter: (x) => {
          const shared = (x.F.en === 'The sofa' || x.F.en === 'The lamp')
            && x.L.en !== 'under' && x.N.en !== 'bed' && x.N.en !== 'table';
          const bad = {
            'The carpet': ['next to'], 'The mirror': ['under'], 'The lamp': ['under'],
            'The shelf': ['under'], 'The sofa': ['behind'], 'The wardrobe': ['behind'],
          };
          return !shared && !((bad[x.F.en] || []).includes(x.L.en));
        },
        tags: ['home', 'prepositions'], d: 2, limit: 24,
      },
      {
        tmpl: 'Where is the {F}?', arTmpl: 'أين {F_ar}؟',
        slots: {
          F: [
            { en: 'wardrobe', ar: 'خزانة الملابس' }, { en: 'mirror', ar: 'المرآة' },
            { en: 'carpet', ar: 'السجادة' }, { en: 'shelf', ar: 'الرف' },
            { en: 'dresser', ar: 'دولاب الأدراج' }, { en: 'sofa', ar: 'الأريكة' },
          ],
        },
        tags: ['home', 'questions'], d: 1, limit: 6,
      },
      {
        tmpl: 'Please put the {O} {L} the {N}.', arTmpl: 'من فضلك ضع {O_ar} {L_ar} {N_ar}.',
        slots: {
          O: [
            { en: 'clothes', ar: 'الملابس' }, { en: 'books', ar: 'الكتب' },
            { en: 'shoes', ar: 'الحذاء' }, { en: 'towels', ar: 'المناشف' },
            { en: 'keys', ar: 'المفاتيح' },
          ],
          L: [
            { en: 'in', ar: 'في' }, { en: 'on', ar: 'على' },
            { en: 'under', ar: 'تحت' }, { en: 'next to', ar: 'بجانب' },
          ],
          N: [
            { en: 'wardrobe', ar: 'خزانة الملابس' }, { en: 'dresser', ar: 'دولاب الأدراج' },
            { en: 'shelf', ar: 'الرف' }, { en: 'bed', ar: 'السرير' },
            { en: 'table', ar: 'الطاولة' }, { en: 'corner', ar: 'الزاوية' },
            { en: 'door', ar: 'الباب' },
          ],
        },
        filter: (x) => !(x.O.en === 'clothes' && x.L.en !== 'in')
          && !(x.O.en === 'shoes' && x.L.en !== 'under' && x.L.en !== 'next to')
          && !(x.L.en === 'in' && x.N.en === 'door'),
        tags: ['home', 'imperative'], d: 2, limit: 16,
      },
      {
        tmpl: 'The {R} has {F}.', arTmpl: 'يوجد في {R_ar} {F_ar}.',
        slots: {
          R: [
            { en: 'living room', ar: 'غرفة الجلوس' }, { en: 'bedroom', ar: 'غرفة النوم' },
            { en: 'hall', ar: 'المدخل' },
          ],
          F: [
            { en: 'a new sofa', ar: 'أريكة جديدة' }, { en: 'a big carpet', ar: 'سجادة كبيرة' },
            { en: 'a tall shelf', ar: 'رف طويل' }, { en: 'an old dresser', ar: 'دولاب أدراج قديم' },
            { en: 'a wide wardrobe', ar: 'خزانة ملابس واسعة' }, { en: 'a small mirror', ar: 'مرآة صغيرة' },
          ],
        },
        tags: ['home', 'furniture'], d: 2, limit: 18,
      },
    ],
    fills: [
      { en: 'The sofa is next to the window.', ar: 'الأريكة بجانب النافذة.', word: 'sofa', hint: 'أثاث' },
      { en: 'The carpet is under the small table.', ar: 'السجادة تحت الطاولة الصغيرة.', word: 'carpet' },
      { en: 'Please put your clothes in the wardrobe.', ar: 'من فضلك ضع ملابسك في خزانة الملابس.', word: 'wardrobe' },
      { en: 'My books are on the shelf.', ar: 'كتيبي على الرف.', word: 'shelf' },
      { en: 'The socks are in the dresser.', ar: 'الجوارب في دولاب الأدراج.', word: 'dresser' },
      { en: 'Where is the mirror?', ar: 'أين المرآة؟', word: 'mirror' },
      { en: 'My room is small but very tidy.', ar: 'غرفتي صغيرة لكنها مرتبة جدا.', word: 'tidy' },
      { en: 'The lamp is in the corner of the bedroom.', ar: 'المصباح في زاوية غرفة النوم.', word: 'corner' },
    ],
    orders: [
      { en: 'The sofa is next to the window.', ar: 'الأريكة بجانب النافذة.' },
      { en: 'Please put your clothes in the wardrobe.', ar: 'من فضلك ضع ملابسك في خزانة الملابس.' },
      { en: 'The carpet is under the small table.', ar: 'السجادة تحت الطاولة الصغيرة.' },
      { en: 'Where is the mirror?', ar: 'أين المرآة؟' },
      { en: 'My books are on the shelf.', ar: 'كتيبي على الرف.' },
      { en: 'We bought a new carpet for the living room.', ar: 'اشترينا سجادة جديدة لغرفة الجلوس.' },
    ],
    mc: [
      { question: 'Where do you keep your hanging clothes?', options: ['in the wardrobe', 'in the sink', 'on the roof', 'in the fridge'], answerIndex: 0, ar: 'أين تحفظ ملابسك المعلقة؟' },
      { question: 'You look at your face in the:', options: ['mirror', 'carpet', 'shelf', 'lamp'], answerIndex: 0, ar: 'تنظر إلى وجهك في:' },
      { question: '"The carpet is under the table" means:', options: ['السجادة تحت الطاولة', 'السجادة فوق الطاولة', 'السجادة بجانب الطاولة', 'السجادة على الطاولة'], answerIndex: 0, ar: 'ما معنى The carpet is under the table؟' },
      { question: 'Which word is furniture?', options: ['dresser', 'kitchen', 'window', 'curtain'], answerIndex: 0, ar: 'أي كلمة من الأثاث؟' },
    ],
  },

  /* ================= lesson 49 — Renting and Neighbors ================= */
  {
    num: 49,
    tags: ['home', 'renting', 'neighbors'],
    objectives: [
      'Talk about rent, leases and contracts',
      'Ask the landlord for help politely',
      'Describe neighbors and building rules',
    ],
    grammar: {
      explanation: 'When you rent a home, you are the tenant and the owner is the landlord. You pay the rent monthly, usually on the same date every month; the date you must pay is when the rent is due. The lease (or contract) is the paper you both sign; it says how long you stay and how much you pay. Useful sentences: "When is the rent due?", "Can you fix the tap, please?", "The lease is for one year". Good neighbors are quiet and friendly; noisy neighbors can be a problem at night.',
      explanationAr: 'عند استئجار مسكن فأنت المستأجر (tenant) والمالك هو صاحب العقار (landlord). تدفع الإيجار شهريا وغالبا في تاريخ ثابت من كل شهر، والتاريخ المحدد للدفع يسمى when the rent is due. وعقد الإيجار (lease أو contract) هو الورقة التي يوقعها الطرفان، ويحدد مدة السكن والمبلغ. من العبارات المفيدة: When is the rent due؟ وCan you fix the tap, please؟ وThe lease is for one year. والجيران الطيبون هادئون وودودون، أما الجيران المزعجون فيشكلون مشكلة ليلا.',
      examples: [
        { en: 'When is the rent due?', ar: 'متى يستحق الإيجار؟' },
        { en: 'Can you fix the tap, please?', ar: 'هل يمكنك إصلاح الحنفية من فضلك؟' },
        { en: 'Our neighbors are quiet and friendly.', ar: 'جيراننا هادئون وودودون.' },
      ],
    },
    vocabulary: [
      { word: 'rent', meaningAr: 'الإيجار', example: 'The rent is due on Sunday.', ipa: 'rɛnt' },
      { word: 'landlord', meaningAr: 'صاحب العقار / المؤجر', example: 'I will call the landlord tomorrow.' },
      { word: 'tenant', meaningAr: 'المستأجر', example: 'The tenant pays the rent every month.' },
      { word: 'monthly', meaningAr: 'شهري', example: 'We pay the rent monthly.' },
      { word: 'lease', meaningAr: 'عقد إيجار', example: 'The lease is for one year.' },
      { word: 'contract', meaningAr: 'عقد', example: 'I signed the contract yesterday.' },
      { word: 'sign', meaningAr: 'يوقع', example: 'Sign the paper here, please.' },
      { word: 'due', meaningAr: 'مستحق (للدفع)', example: 'When is the rent due?' },
      { word: 'fix', meaningAr: 'يصلح', example: 'Can you fix the tap, please?' },
      { word: 'noisy', meaningAr: 'مزعج', example: 'The neighbors upstairs are noisy.' },
      { word: 'upstairs', meaningAr: 'الطابق العلوي', example: 'The neighbors upstairs are noisy.' },
      { word: 'rule', meaningAr: 'قاعدة', example: 'Every building has rules.' },
    ],
    scenario: [
      { en: 'When is the rent due?', ar: 'متى يستحق الإيجار؟', d: 1 },
      { en: 'The rent is due on the first of the month.', ar: 'الإيجار مستحق في أول الشهر.', d: 1 },
      { en: 'I pay the rent monthly.', ar: 'أدفع الإيجار شهريا.', d: 1 },
      { en: 'Our landlord is a kind man.', ar: 'صاحب عقارنا رجل طيب.', d: 1 },
      { en: 'The tenant is a young teacher.', ar: 'المستأجر معلم شاب.', d: 2 },
      { en: 'I signed the lease yesterday.', ar: 'وقعت عقد الإيجار أمس.', d: 2 },
      { en: 'The contract is for one year.', ar: 'العقد لمدة سنة واحدة.', d: 1 },
      { en: 'Can you fix the tap, please?', ar: 'هل يمكنك إصلاح الحنفية من فضلك؟', d: 2 },
      { en: 'Yes, I will send a plumber tomorrow.', ar: 'نعم، سأرسل سباكا غدا.', d: 2 },
      { en: 'The neighbors upstairs are noisy.', ar: 'جيران الطابق العلوي مزعجون.', d: 2 },
      { en: 'Our neighbors are quiet and friendly.', ar: 'جيراننا هادئون وودودون.', d: 2 },
      { en: 'Are your neighbors quiet?', ar: 'هل جيرانك هادئون؟', d: 1 },
      { en: 'Yes, they are very quiet at night.', ar: 'نعم، هم هادئون جدا في الليل.', d: 1 },
      { en: 'Please do not make noise after ten.', ar: 'من فضلك لا تحدث ضجيجا بعد العاشرة.', d: 2 },
      { en: 'The landlord fixed the door yesterday.', ar: 'صلح صاحب العقار الباب أمس.', d: 2 },
      { en: 'Did you sign the contract?', ar: 'هل وقعت العقد؟', d: 2 },
      { en: 'No, I will sign it on Sunday.', ar: 'لا، سأوقعه يوم الأحد.', d: 2 },
      { en: 'We do not pay for water in our building.', ar: 'لا ندفع ثمن الماء في مبنانا.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'The landlord {A} {T}.', arTmpl: 'صاحب العقار {A_ar} {T_ar}.',
        slots: {
          A: [
            { en: 'fixed the tap', ar: 'صلح الحنفية' }, { en: 'fixed the door', ar: 'صلح الباب' },
            { en: 'changed the lock', ar: 'غير القفل' }, { en: 'painted the walls', ar: 'دهن الجدران' },
            { en: 'checked the water', ar: 'فحص الماء' },
          ],
          T: [
            { en: 'yesterday', ar: 'أمس' }, { en: 'last week', ar: 'الأسبوع الماضي' },
            { en: 'last month', ar: 'الشهر الماضي' },
          ],
        },
        tags: ['home', 'past-simple'], d: 2, limit: 12,
      },
      {
        tmpl: 'Our neighbors are {A}.', arTmpl: 'جيراننا {A_ar}.',
        slots: {
          A: [
            { en: 'quiet', ar: 'هادئون' }, { en: 'kind', ar: 'طيبون' },
            { en: 'friendly', ar: 'ودودون' }, { en: 'noisy', ar: 'مزعجون' },
            { en: 'helpful', ar: 'متعاونون' },
          ],
        },
        tags: ['home', 'neighbors'], d: 1, limit: 5,
      },
      {
        tmpl: 'The {X} is for {T}.', arTmpl: '{X_ar} لمدة {T_ar}.',
        slots: {
          X: [
            { en: 'lease', ar: 'عقد الإيجار' }, { en: 'contract', ar: 'العقد' },
          ],
          T: [
            { en: 'one year', ar: 'سنة واحدة' }, { en: 'two years', ar: 'سنتين' },
            { en: 'six months', ar: 'ستة أشهر' },
          ],
        },
        tags: ['home', 'renting'], d: 1, limit: 6,
      },
      {
        tmpl: 'I will {V} {T}.', arTmpl: 'س{V_ar} {T_ar}.',
        slots: {
          V: [
            { en: 'call the landlord', ar: 'أتصل بصاحب العقار' }, { en: 'sign the contract', ar: 'وقع العقد' },
            { en: 'pay the rent', ar: 'أدفع الإيجار' }, { en: 'talk to the neighbors', ar: 'أتحدث إلى الجيران' },
          ],
          T: [
            { en: 'tomorrow', ar: 'غدا' }, { en: 'on Sunday', ar: 'يوم الأحد' },
            { en: 'this week', ar: 'هذا الأسبوع' },
          ],
        },
        tags: ['home', 'future'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'When is the rent due?', ar: 'متى يستحق الإيجار؟', word: 'due', hint: 'مستحق' },
      { en: 'I signed the lease yesterday.', ar: 'وقعت عقد الإيجار أمس.', word: 'lease' },
      { en: 'Our landlord is a kind man.', ar: 'صاحب عقارنا رجل طيب.', word: 'landlord' },
      { en: 'The tenant pays the rent every month.', ar: 'المستأجر يدفع الإيجار كل شهر.', word: 'tenant' },
      { en: 'Can you fix the tap, please?', ar: 'هل يمكنك إصلاح الحنفية من فضلك؟', word: 'fix' },
      { en: 'Our neighbors are quiet and friendly.', ar: 'جيراننا هادئون وودودون.', word: 'neighbors' },
      { en: 'The contract is for one year.', ar: 'العقد لمدة سنة واحدة.', word: 'contract' },
      { en: 'We do not pay for water in our building.', ar: 'لا ندفع ثمن الماء في مبنانا.', word: 'water' },
    ],
    orders: [
      { en: 'When is the rent due?', ar: 'متى يستحق الإيجار؟' },
      { en: 'I signed the lease yesterday.', ar: 'وقعت عقد الإيجار أمس.' },
      { en: 'Our neighbors are quiet and friendly.', ar: 'جيراننا هادئون وودودون.' },
      { en: 'The contract is for one year.', ar: 'العقد لمدة سنة واحدة.' },
      { en: 'I will call the landlord tomorrow.', ar: 'سأتصل بصاحب العقار غدا.' },
      { en: 'Can you fix the tap, please?', ar: 'هل يمكنك إصلاح الحنفية من فضلك؟' },
    ],
    mc: [
      { question: 'The person who owns the apartment is the:', options: ['landlord', 'tenant', 'neighbor', 'plumber'], answerIndex: 0, ar: 'الشخص الذي يملك الشقة هو:' },
      { question: 'You pay the rent:', options: ['monthly', 'never', 'one time only', 'on Fridays only'], answerIndex: 0, ar: 'تدفع الإيجار:' },
      { question: 'The lease and the contract are:', options: ['papers you sign', 'rooms in a house', 'kinds of rent', 'kinds of neighbors'], answerIndex: 0, ar: 'عقد الإيجار والعقد هما:' },
      { question: 'Good neighbors are usually:', options: ['quiet and friendly', 'noisy at night', 'always angry', 'far away'], answerIndex: 0, ar: 'الجيران الطيبون عادة:' },
    ],
  },
];
