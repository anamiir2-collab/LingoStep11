/* ============================================================
   v2 section data — s06-c1.js
   Health & Emergencies · lessons 138–141
   (First Aid · Sick Leave · Caring for a Sick Child · Caring for Older Adults)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 138 — First Aid ================= */
  {
    num: 138,
    tags: ['first-aid', 'health'],
    objectives: [
      'Give simple first-aid instructions',
      'Stop bleeding and clean a cut safely',
      'Ask and answer about small injuries',
    ],
    grammar: {
      explanation: 'First aid is the quick help you give before the doctor comes. We usually use the imperative for instructions: "Clean the cut", "Press here", "Do not move him". For polite advice use should: "You should put ice on the burn", and for warnings use should not or must not: "You should not touch the wound". Remember: wash cuts with clean water, stop the bleeding with gentle pressure, and keep a first-aid kit at home. If the bleeding does not stop, call for help immediately.',
      explanationAr: 'الإسعافات الأولية هي المساعدة السريعة قبل وصول الطبيب. نستخدم صيغة الأمر عادة للتعليمات: Clean the cut، Press here، Do not move him. وللنصيحة المهذبة استخدم should: You should put ice on the burn، وللتحذير استخدم should not أو must not. تذكر: اغسل الجروح بماء نظيف، وأوقف النزيف بضغط خفيف، واحتفظ بمجموعة إسعافات أولية في المنزل. وإذا لم يتوقف النزيف فاطلب المساعدة فورا.',
      examples: [
        { en: 'Clean the cut with soap and water.', ar: 'نظف الجرح بالصابون والماء.' },
        { en: 'Do not move him, help is coming.', ar: 'لا تحركه، المساعدة قادمة.' },
        { en: 'You should press here to stop the bleeding.', ar: 'يجب أن تضغط هنا لإيقاف النزيف.' },
      ],
    },
    vocabulary: [
      { word: 'first aid', meaningAr: 'الإسعافات الأولية', example: 'First aid is quick help before the doctor.', ipa: 'fɜːst eɪd' },
      { word: 'bandage', meaningAr: 'ضمادة', example: 'She put a soft bandage on my arm.', ipa: 'ˈbændɪdʒ' },
      { word: 'cut', meaningAr: 'جرح / يجرح', example: 'The cut on my finger is small.' },
      { word: 'bleeding', meaningAr: 'نزيف / ينزف', example: 'The bleeding stopped after ten minutes.' },
      { word: 'press', meaningAr: 'يضغط', example: 'Press the wound gently with a clean cloth.' },
      { word: 'burn', meaningAr: 'حرق / يحرق', example: 'Cool the burn with cold water.' },
      { word: 'wound', meaningAr: 'جرح', example: 'Keep the wound clean and dry.' },
      { word: 'ointment', meaningAr: 'مرهم', example: 'This ointment helps small burns.' },
      { word: 'ice pack', meaningAr: 'كيس ثلج', example: 'An ice pack reduces the swelling.' },
      { word: 'first-aid kit', meaningAr: 'حقيبة إسعافات أولية', example: 'Our first-aid kit is in the kitchen.' },
      { word: 'calm', meaningAr: 'هادئ / يهدئ', example: 'Stay calm and speak clearly.' },
      { word: 'gloves', meaningAr: 'قفازات', example: 'Wear gloves before you help.' },
    ],
    scenario: [
      { en: 'First, wash your hands before you help.', ar: 'أولا، اغسل يديك قبل أن تساعد.', d: 1 },
      { en: 'Clean the cut with water and soap.', ar: 'نظف الجرح بالماء والصابون.', d: 1 },
      { en: 'Put a clean bandage on the cut.', ar: 'ضع ضمادة نظيفة على الجرح.', d: 1 },
      { en: 'Press here to stop the bleeding.', ar: 'اضغط هنا لإيقاف النزيف.', d: 1 },
      { en: 'Never touch a wound with dirty hands.', ar: 'لا تلمس جرحا أبدا بأيدي متسخة.', d: 2 },
      { en: 'What happened to your hand?', ar: 'ماذا حدث ليدك؟', d: 1 },
      { en: 'I cut my finger with a knife.', ar: 'جرحت إصبعي بسكين.', d: 1 },
      { en: 'Do not move him, his leg hurts.', ar: 'لا تحركه، ساقه تؤلمه.', d: 2 },
      { en: 'Help is coming, stay calm.', ar: 'المساعدة قادمة، ابق هادئا.', d: 1 },
      { en: 'You should put ice on the burn.', ar: 'يجب أن تضع ثلجا على الحرق.', d: 2 },
      { en: 'Should I cover the burn with a bandage?', ar: 'هل أغطي الحرق بضمادة؟', d: 2 },
      { en: 'Has the bleeding stopped yet?', ar: 'هل توقف النزيف بعد؟', d: 2 },
      { en: 'She fell down, but she can stand now.', ar: 'سقطت، لكنها تستطيع الوقوف الآن.', d: 2 },
      { en: 'We keep a first-aid kit at home.', ar: 'نحتفظ بحقيبة إسعافات أولية في المنزل.', d: 1 },
      { en: 'Dirty cuts can get infected quickly.', ar: 'الجروح المتسخة قد تصاب بعدوى سريعا.', d: 3 },
      { en: 'Call for help immediately, please!', ar: 'اطلب المساعدة فورا من فضلك!', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'Put a clean bandage on {B}.', arTmpl: 'ضع ضمادة نظيفة على {B_ar}.',
        slots: {
          B: [
            { en: 'your hand', ar: 'يدك' }, { en: 'his arm', ar: 'ذراعه' },
            { en: 'her leg', ar: 'ساقها' }, { en: 'my foot', ar: 'قدمي' },
            { en: 'your head', ar: 'رأسك' }, { en: 'his knee', ar: 'ركبته' },
            { en: 'her finger', ar: 'إصبعها' }, { en: 'my hand', ar: 'يدي' },
          ],
        },
        tags: ['first-aid', 'imperatives'], d: 1, limit: 8,
      },
      {
        tmpl: 'Put some ice on the {I}.', arTmpl: 'ضع بعض الثلج على {I_ar}.',
        slots: {
          I: [
            { en: 'burn', ar: 'الحرق' }, { en: 'swelling', ar: 'التورم' },
            { en: 'bruise', ar: 'الكدمة' }, { en: 'bite', ar: 'العضة' },
            { en: 'bump', ar: 'الورمة' }, { en: 'sprained ankle', ar: 'الكاحل الملتوي' },
          ],
        },
        tags: ['first-aid', 'imperatives'], d: 1, limit: 6,
      },
      {
        tmpl: '{S} {V} the {W} with soap and water.', arTmpl: '{S_ar} {V_ar} {W_ar} بالصابون والماء.',
        slots: {
          S: [
            { en: 'You', ar: 'أنت', agr: 'you' }, { en: 'He', ar: 'هو', agr: 'he' },
            { en: 'She', ar: 'هي', agr: 'she' }, { en: 'We', ar: 'نحن', agr: 'we' },
            { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{ en: B.enPresent('wash', x.S.agr), ar: B.arPresent('wash', x.S.agr) }],
          W: [
            { en: 'cut', ar: 'الجرح' }, { en: 'wound', ar: 'الجرح' },
            { en: 'small burn', ar: 'الحرق الصغير' }, { en: 'long scratch', ar: 'الخدش الطويل' },
          ],
        },
        tags: ['first-aid', 'present-simple'], d: 2, limit: 20,
      },
      {
        tmpl: 'Do not {V} the {W} with dirty hands.', arTmpl: 'لا {V_ar} {W_ar} بأيدي متسخة.',
        slots: {
          V: [
            { en: 'touch', ar: 'تلمس' }, { en: 'press', ar: 'تضغط' },
            { en: 'scratch', ar: 'تخربش' },
          ],
          W: [
            { en: 'cut', ar: 'الجرح' }, { en: 'wound', ar: 'الجرح' },
            { en: 'burn', ar: 'الحرق' }, { en: 'eye', ar: 'العين' },
          ],
        },
        tags: ['first-aid', 'imperatives', 'negatives'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'Clean the cut with water and soap.', ar: 'نظف الجرح بالماء والصابون.', word: 'soap', hint: 'ما نغسل به' },
      { en: 'Press here to stop the bleeding.', ar: 'اضغط هنا لإيقاف النزيف.', word: 'bleeding', hint: 'نزيف' },
      { en: 'Put a clean bandage on the cut.', ar: 'ضع ضمادة نظيفة على الجرح.', word: 'bandage', hint: 'ضمادة' },
      { en: 'Help is coming, stay calm.', ar: 'المساعدة قادمة، ابق هادئا.', word: 'calm', hint: 'هادئ' },
      { en: 'Do not move him, his leg hurts.', ar: 'لا تحركه، ساقه تؤلمه.', word: 'move', hint: 'يحرك' },
      { en: 'You should put ice on the burn.', ar: 'يجب أن تضع ثلجا على الحرق.', word: 'ice', hint: 'ثلج' },
      { en: 'We keep a first-aid kit at home.', ar: 'نحتفظ بحقيبة إسعافات أولية في المنزل.', word: 'kit', hint: 'حقيبة' },
      { en: 'Has the bleeding stopped yet?', ar: 'هل توقف النزيف بعد؟', word: 'stopped', hint: 'توقف' },
    ],
    orders: [
      { en: 'Wash your hands before you help him.', ar: 'اغسل يديك قبل أن تساعده.' },
      { en: 'Put a clean bandage on it, please.', ar: 'ضع ضمادة نظيفة عليه من فضلك.' },
      { en: 'Press gently on the wound with a cloth.', ar: 'اضغط بلطف على الجرح بقطعة قماش.' },
      { en: 'You should put ice on the burn soon.', ar: 'يجب أن تضع ثلجا على الحرق سريعا.' },
      { en: 'Help is coming, so stay calm.', ar: 'المساعدة قادمة، لذلك ابق هادئا.' },
      { en: 'Do not touch the wound, call a doctor.', ar: 'لا تلمس الجرح، اتصل بطبيب.' },
    ],
    mc: [
      { question: 'What do you put on a small cut?', options: ['a clean bandage', 'a spoon of sugar', 'a bus ticket', 'a wet sock'], answerIndex: 0, ar: 'ماذا تضع على جرح صغير؟' },
      { question: 'The bleeding will not stop. What do you do?', options: ['Press on the cut and call for help', 'Wait for next week', 'Drink cold juice', 'Go to sleep'], answerIndex: 0, ar: 'النزيف لا يتوقف، ماذا تفعل؟' },
      { question: '"Do not move him" means:', options: ['لا تحركه', 'احمله بسرعة', 'دعه ينام', 'اشربه ماء'], answerIndex: 0, ar: 'ما معنى Do not move him؟' },
      { question: 'What do we keep in a first-aid kit?', options: ['bandages and ointment', 'knives and forks', 'shoes and socks', 'pens and books'], answerIndex: 0, ar: 'ماذا نحتفظ به في حقيبة الإسعافات؟' },
    ],
  },

  /* ================= lesson 139 — Sick Leave ================= */
  {
    num: 139,
    tags: ['sick-leave', 'work'],
    objectives: [
      'Call your manager and say you cannot come',
      'Ask for and send a sick note',
      'Wish a sick colleague well',
    ],
    grammar: {
      explanation: 'When you are sick and cannot work, call your manager early and say "I cannot come to work today". For a formal day off you need a sick note from the doctor; you can promise "I will send you the sick note today". Use will for promises about coming back: "I will be back on Monday". To wish someone health, say "Get well soon". "Absent" means not present: "Two workers are absent today". Speak politely and thank your manager for understanding.',
      explanationAr: 'عندما تمرض ولا تستطيع العمل اتصل بمديرك مبكرا وقل I cannot come to work today. وللحصول على إجازة رسمية تحتاج شهادة طبية من الطبيب، ويمكنك أن تعد: I will send you the sick note today. واستخدم will للوعد بالعودة: I will be back on Monday. ولتهنئة المريض قل Get well soon. وكلمة absent تعني غائب: Two workers are absent today. وتحدث بأدب واشكر مديرك على تفهمه.',
      examples: [
        { en: 'I cannot come to work today, I am sick.', ar: 'لا أستطيع القدوم إلى العمل اليوم، أنا مريض.' },
        { en: 'I need a sick note from the doctor.', ar: 'أحتاج شهادة طبية من الطبيب.' },
        { en: 'Get well soon, see you on Monday.', ar: 'شفاء عاجلا، أراك يوم الاثنين.' },
      ],
    },
    vocabulary: [
      { word: 'sick leave', meaningAr: 'إجازة مرضية', example: 'My manager accepted my sick leave.', ipa: 'sɪk liːv' },
      { word: 'manager', meaningAr: 'مدير', example: 'I called my manager in the morning.' },
      { word: 'sick note', meaningAr: 'شهادة طبية', example: 'The doctor wrote a sick note for me.' },
      { word: 'absent', meaningAr: 'غائب', example: 'He is absent from the office.' },
      { word: 'rest', meaningAr: 'يستريح / راحة', example: 'Rest at home and drink water.' },
      { word: 'feel better', meaningAr: 'يتحسن حاله', example: 'I feel better after two days.' },
      { word: 'get well soon', meaningAr: 'شفاء عاجلا', example: 'Get well soon, my friend!' },
      { word: 'be back', meaningAr: 'يعود / يرجع', example: 'She will be back next week.' },
      { word: 'colleague', meaningAr: 'زميل عمل', example: 'My colleague helped with my work.', ipa: 'ˈkɒliːɡ' },
      { word: 'appointment', meaningAr: 'موعد', example: 'I have a doctor appointment at ten.' },
      { word: 'day off', meaningAr: 'يوم إجازة', example: 'Can I take a day off, please?' },
      { word: 'worry', meaningAr: 'يقلق', example: 'Do not worry about your work.' },
    ],
    scenario: [
      { en: 'I am sorry, I cannot come to work today.', ar: 'آسف، لا أستطيع القدوم إلى العمل اليوم.', d: 1 },
      { en: 'I am sick, so I will stay home.', ar: 'أنا مريض، لذلك سأبقى في المنزل.', d: 1 },
      { en: 'Can I take a sick day, please?', ar: 'هل يمكنني أخذ يوم مرضي من فضلك؟', d: 1 },
      { en: 'I need a sick note from the doctor.', ar: 'أحتاج شهادة طبية من الطبيب.', d: 1 },
      { en: 'The doctor gave me a sick note.', ar: 'أعطاني الطبيب شهادة طبية.', d: 1 },
      { en: 'I will send you the note today.', ar: 'سأرسل لك الشهادة اليوم.', d: 2 },
      { en: 'Do you have a doctor appointment?', ar: 'هل لديك موعد عند الطبيب؟', d: 1 },
      { en: 'Yes, it is at ten in the morning.', ar: 'نعم، إنه في العاشرة صباحا.', d: 1 },
      { en: 'When will you be back?', ar: 'متى ستعود؟', d: 1 },
      { en: 'I will be back on Monday.', ar: 'سأعود يوم الاثنين.', d: 1 },
      { en: 'Get well soon, my friend.', ar: 'شفاء عاجلا يا صديقي.', d: 1 },
      { en: 'Thank you, see you soon.', ar: 'شكرا لك، أراك قريبا.', d: 1 },
      { en: 'Two workers are absent today.', ar: 'عاملان غائبان اليوم.', d: 1 },
      { en: 'She is not at work; her son is sick.', ar: 'هي ليست في العمل؛ ابنها مريض.', d: 2 },
      { en: 'Please rest and drink a lot of water.', ar: 'من فضلك ارتاح واشرب كثيرا من الماء.', d: 1 },
      { en: 'I feel better, but I am still tired.', ar: 'أشعر بتحسن، لكنني ما زلت متعبا.', d: 2 },
      { en: 'Do not worry about the report.', ar: 'لا تقلق بشأن التقرير.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I cannot come to work {T}.', arTmpl: 'لا أستطيع القدوم إلى العمل {T_ar}.',
        slots: {
          T: [
            { en: 'today', ar: 'اليوم' }, { en: 'tomorrow', ar: 'غدا' },
            { en: 'this morning', ar: 'هذا الصباح' }, { en: 'this week', ar: 'هذا الأسبوع' },
            { en: 'on Sunday', ar: 'يوم الأحد' }, { en: 'at night', ar: 'ليلا' },
          ],
        },
        tags: ['sick-leave', 'modals'], d: 1, limit: 6,
      },
      {
        tmpl: 'I will be back {T}.', arTmpl: 'سأعود {T_ar}.',
        slots: {
          T: [
            { en: 'on Tuesday', ar: 'يوم الثلاثاء' }, { en: 'on Wednesday', ar: 'يوم الأربعاء' },
            { en: 'on Thursday', ar: 'يوم الخميس' }, { en: 'next week', ar: 'الأسبوع القادم' },
            { en: 'in two days', ar: 'بعد يومين' }, { en: 'next Sunday', ar: 'الأحد القادم' },
          ],
        },
        tags: ['sick-leave', 'future'], d: 1, limit: 6,
      },
      {
        tmpl: '{N} is not at work today.', arTmpl: '{N_ar} ليس في العمل اليوم.',
        slots: {
          N: [
            { en: 'My colleague', ar: 'زميلي' }, { en: 'My manager', ar: 'مديري' },
            { en: 'The engineer', ar: 'المهندس' }, { en: 'My uncle', ar: 'عمي' },
            { en: 'My brother', ar: 'أخي' }, { en: 'The driver', ar: 'السائق' },
          ],
        },
        tags: ['sick-leave', 'work'], d: 1, limit: 6,
      },
      {
        tmpl: 'Get well soon, {P}!', arTmpl: 'شفاء عاجل يا {P_ar}!',
        slots: { P: B.NAMED_SING },
        tags: ['sick-leave', 'wishes'], d: 1, limit: 8,
      },
      {
        tmpl: 'The doctor will give you a sick note {R}.', arTmpl: 'سيمنحك الطبيب شهادة طبية {R_ar}.',
        slots: {
          R: [
            { en: 'for work', ar: 'للعمل' }, { en: 'for school', ar: 'للمدرسة' },
            { en: 'for your manager', ar: 'لمديرك' }, { en: 'for the office', ar: 'للمكتب' },
          ],
        },
        tags: ['sick-leave', 'future'], d: 2, limit: 4,
      },
      {
        tmpl: 'I feel {F} today.', arTmpl: 'أشعر {F_ar} اليوم.',
        slots: {
          F: [
            { en: 'better', ar: 'بأنني أفضل' }, { en: 'worse', ar: 'بأنني أسوأ' },
            { en: 'tired', ar: 'بتعب' }, { en: 'stronger', ar: 'بقوة' },
          ],
        },
        tags: ['sick-leave', 'feelings'], d: 1, limit: 4,
      },
    ],
    fills: [
      { en: 'I am sorry, I cannot come to work today.', ar: 'آسف، لا أستطيع القدوم إلى العمل اليوم.', word: 'sorry', hint: 'آسف' },
      { en: 'Can I take a sick day, please?', ar: 'هل يمكنني أخذ يوم مرضي من فضلك؟', word: 'sick', hint: 'مريض' },
      { en: 'I need a sick note from the doctor.', ar: 'أحتاج شهادة طبية من الطبيب.', word: 'note', hint: 'شهادة' },
      { en: 'When will you be back?', ar: 'متى ستعود؟', word: 'back', hint: 'عودة' },
      { en: 'Two workers are absent today.', ar: 'عاملان غائبان اليوم.', word: 'absent', hint: 'غائب' },
      { en: 'Please rest and drink a lot of water.', ar: 'من فضلك ارتاح واشرب كثيرا من الماء.', word: 'rest', hint: 'استراحة' },
      { en: 'I will be back on Monday.', ar: 'سأعود يوم الاثنين.', word: 'Monday', hint: 'يوم من الأسبوع' },
      { en: 'I feel better, but I am still tired.', ar: 'أشعر بتحسن، لكنني ما زلت متعبا.', word: 'tired', hint: 'متعب' },
    ],
    orders: [
      { en: 'I cannot come to work today.', ar: 'لا أستطيع القدوم إلى العمل اليوم.' },
      { en: 'Can I take two days off, please?', ar: 'هل يمكنني أخذ يومين إجازة من فضلك؟' },
      { en: 'When will you be back in the office?', ar: 'متى ستعود إلى المكتب؟' },
      { en: 'I will be back next Wednesday.', ar: 'سأعود الأربعاء القادم.' },
      { en: 'Get well soon, my dear friend.', ar: 'شفاء عاجلا يا صديقي العزيز.' },
      { en: 'Please rest and drink warm tea.', ar: 'من فضلك ارتاح واشرب شاي دافئا.' },
    ],
    mc: [
      { question: 'You are sick and cannot go to work. You say:', options: ['I cannot come to work today.', 'I cannot find my shoes.', 'I cannot play the piano.', 'I cannot see the board.'], answerIndex: 0, ar: 'أنت مريض ولا تستطيع الذهاب إلى العمل، فتقول:' },
      { question: 'What do you ask the doctor for?', options: ['a sick note', 'a plane ticket', 'a menu', 'a library card'], answerIndex: 0, ar: 'ماذا تطلب من الطبيب؟' },
      { question: '"Get well soon" means:', options: ['شفاء عاجلا', 'إلى اللقاء', 'أهلا وسهلا', 'بالتوفيق'], answerIndex: 0, ar: 'ما معنى Get well soon؟' },
      { question: 'Two workers are absent. This means they are:', options: ['not at work', 'at home happy', 'in a meeting', 'on the phone'], answerIndex: 0, ar: 'عاملان غائبان، هذا يعني أنهما:' },
    ],
  },

  /* ================= lesson 140 — Caring for a Sick Child ================= */
  {
    num: 140,
    tags: ['child-care', 'health'],
    objectives: [
      'Check a child temperature and give medicine',
      'Keep a sick child at home and comfortable',
      'Call the doctor when the fever goes up',
    ],
    grammar: {
      explanation: 'To care for a sick child, give clear instructions with the imperative: "Check his temperature", "Give him the syrup", "Keep him home". Use should for advice and must for strong rules: "He must stay in bed". Conditionals with if are very common: "Call the doctor if the fever goes up". Remember the possessives: his temperature, her medicine. Speak kindly: sick children need rest, warm soup and a lot of love.',
      explanationAr: 'لرعاية طفل مريض قدّم تعليمات واضحة بصيغة الأمر: Check his temperature، Give him the syrup، Keep him home. واستخدم should للنصيحة وmust للقاعدة الصارمة: He must stay in bed. وشائع جدا استخدام الشرط مع if: Call the doctor if the fever goes up. وتذكر ضمائر الملكية: his temperature، her medicine. وتحدث بلطف، فالأطفال المرضى يحتاجون راحة وحساء دافئا وكثيرا من المحبة.',
      examples: [
        { en: 'Check her temperature every four hours.', ar: 'افحص حرارتها كل أربع ساعات.' },
        { en: 'He must stay in bed today.', ar: 'يجب أن يبقى في السرير اليوم.' },
        { en: 'Call the doctor if the fever goes up.', ar: 'اتصل بالطبيب إذا ارتفعت الحرارة.' },
      ],
    },
    vocabulary: [
      { word: 'temperature', meaningAr: 'حرارة', example: 'The thermometer shows his temperature.' },
      { word: 'thermometer', meaningAr: 'ميزان الحرارة', example: 'Where is the thermometer, Mom?', ipa: 'θəˈmɒmɪtə' },
      { word: 'syrup', meaningAr: 'شراب', example: 'The child drinks the syrup slowly.' },
      { word: 'dose', meaningAr: 'جرعة', example: 'Never give a second dose too soon.' },
      { word: 'spoon', meaningAr: 'ملعقة', example: 'One spoon of syrup after breakfast.' },
      { word: 'blanket', meaningAr: 'بطانية', example: 'Cover him with a warm blanket.' },
      { word: 'soup', meaningAr: 'حساء', example: 'Warm soup helps sick children.' },
      { word: 'rest', meaningAr: 'راحة / يرتاح', example: 'Rest is the best medicine.' },
      { word: 'recover', meaningAr: 'يتعافى', example: 'Most children recover in a few days.' },
      { word: 'quiet', meaningAr: 'هادئ', example: 'Keep the house quiet for him.' },
      { word: 'weak', meaningAr: 'ضعيف', example: 'He is weak, but he is safe.' },
      { word: 'sleep', meaningAr: 'نوم / ينام', example: 'A sick child needs a lot of sleep.' },
    ],
    scenario: [
      { en: 'My son is sick, so he will stay home today.', ar: 'ابني مريض، لذلك سيبقى في المنزل اليوم.', d: 1 },
      { en: 'Let me check his temperature first.', ar: 'دعني أفحص حرارته أولا.', d: 1 },
      { en: 'The thermometer shows a small fever.', ar: 'ميزان الحرارة يبين حمى خفيفة.', d: 2 },
      { en: 'Give him one spoon of syrup after breakfast.', ar: 'أعطه ملعقة شراب بعد الفطور.', d: 1 },
      { en: 'Keep him home until he feels better.', ar: 'ابقه في المنزل حتى يتحسن حاله.', d: 1 },
      { en: 'He should rest in bed and drink water.', ar: 'يجب أن يرتاح في السرير ويشرب الماء.', d: 1 },
      { en: 'Call the doctor if the fever goes up.', ar: 'اتصل بالطبيب إذا ارتفعت الحرارة.', d: 1 },
      { en: 'Never give a child more than the right dose.', ar: 'لا تعط طفلا أبدا أكثر من الجرعة الصحيحة.', d: 2 },
      { en: 'Make some warm soup for him.', ar: 'اصنع له بعض الحساء الدافئ.', d: 1 },
      { en: 'Can I go to school tomorrow, Mom?', ar: 'هل أستطيع الذهاب إلى المدرسة غدا يا أمي؟', d: 1 },
      { en: 'No, you must stay in bed today.', ar: 'لا، يجب أن تبقى في السرير اليوم.', d: 1 },
      { en: 'His fever is gone, but he is still weak.', ar: 'حماته زالت، لكنه ما زال ضعيفا.', d: 2 },
      { en: 'Has he taken his medicine yet?', ar: 'هل أخذ دواءه بعد؟', d: 2 },
      { en: 'Yes, he took it after lunch.', ar: 'نعم، أخذه بعد الغداء.', d: 1 },
      { en: 'How is your son today?', ar: 'كيف حال ابنك اليوم؟', d: 1 },
      { en: 'Better, thank you. He is sleeping now.', ar: 'أفضل، شكرا. إنه نائم الآن.', d: 1 },
      { en: 'Sick children need a lot of sleep and love.', ar: 'الأطفال المرضى يحتاجون كثيرا من النوم والمحبة.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Check {P} temperature every {N} hours.', arTmpl: 'افحص حرارت{P_ar} كل {N_ar} ساعات.',
        slots: {
          P: [ { en: 'his', ar: 'ه' }, { en: 'her', ar: 'ها' } ],
          N: [
            { en: 'four', ar: 'أربع' }, { en: 'six', ar: 'ست' },
            { en: 'eight', ar: 'ثماني' }, { en: 'ten', ar: 'عشر' },
          ],
        },
        tags: ['child-care', 'imperatives'], d: 1, limit: 8,
      },
      {
        tmpl: 'If the fever goes up, {W}.', arTmpl: 'إذا ارتفعت الحرارة، {W_ar}.',
        slots: {
          W: [
            { en: 'call us right away', ar: 'اتصل بنا فورا' },
            { en: 'call the clinic', ar: 'اتصل بالعيادة' },
            { en: 'go to the hospital', ar: 'اذهب إلى المستشفى' },
            { en: 'give him water and rest', ar: 'أعطه ماء وراحة' },
          ],
        },
        tags: ['child-care', 'conditionals'], d: 2, limit: 4,
      },
      {
        tmpl: 'Make {S} for {P}.', arTmpl: 'اصنع {S_ar} {P_ar}.',
        slots: {
          S: [
            { en: 'warm soup', ar: 'حساء دافئ' }, { en: 'warm tea', ar: 'شاي دافئ' },
            { en: 'warm milk', ar: 'حليب دافئ' }, { en: 'fresh juice', ar: 'عصيرا طازجا' },
          ],
          P: [ { en: 'him', ar: 'له' }, { en: 'her', ar: 'لها' }, { en: 'them', ar: 'لهم' } ],
        },
        tags: ['child-care', 'imperatives'], d: 1, limit: 12,
      },
      {
        tmpl: '{S} {V} a lot of water when sick.', arTmpl: '{S_ar} {V_ar} كثيرا من الماء عند المرض.',
        slots: {
          S: [
            { en: 'He', ar: 'هو', agr: 'he' }, { en: 'She', ar: 'هي', agr: 'she' },
            { en: 'The boy', ar: 'الولد', agr: 'he' }, { en: 'The girl', ar: 'البنت', agr: 'she' },
            { en: 'They', ar: 'هم', agr: 'they' }, { en: 'We', ar: 'نحن', agr: 'we' },
          ],
          V: (x) => [{ en: B.enPresent('drink', x.S.agr), ar: B.arPresent('drink', x.S.agr) }],
        },
        tags: ['child-care', 'present-simple'], d: 2, limit: 6,
      },
      {
        tmpl: 'Give {P} one spoon of {M} {T}.', arTmpl: 'أعط {P_ar} ملعقة من {M_ar} {T_ar}.',
        slots: {
          P: [ { en: 'him', ar: 'له' }, { en: 'her', ar: 'لها' } ],
          M: [ { en: 'syrup', ar: 'الشراب' }, { en: 'the medicine', ar: 'الدواء' } ],
          T: [
            { en: 'in the morning', ar: 'في الصباح' }, { en: 'after dinner', ar: 'بعد العشاء' },
            { en: 'before bed', ar: 'قبل النوم' },
          ],
        },
        tags: ['child-care', 'imperatives'], d: 2, limit: 12,
      },
      {
        tmpl: '{S} must {V} in bed {T}.', arTmpl: 'يجب أن {V_ar} {S_ar} في السرير {T_ar}.',
        slots: {
          S: [
            { en: 'He', ar: 'هو', agr: 'he' }, { en: 'She', ar: 'هي', agr: 'she' },
            { en: 'My son', ar: 'ابني', agr: 'he' }, { en: 'My daughter', ar: 'ابنتي', agr: 'she' },
          ],
          V: (x) => [{ en: 'stay', ar: x.S.agr === 'she' ? 'تبقى' : 'يبقى' }],
          T: [
            { en: 'today', ar: 'اليوم' }, { en: 'this week', ar: 'هذا الأسبوع' },
            { en: 'until tomorrow', ar: 'حتى الغد' },
          ],
        },
        tags: ['child-care', 'modals'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'My son is sick, so he will stay home today.', ar: 'ابني مريض، لذلك سيبقى في المنزل اليوم.', word: 'stay', hint: 'يبقى' },
      { en: 'Give him one spoon of syrup after breakfast.', ar: 'أعطه ملعقة شراب بعد الفطور.', word: 'spoon', hint: 'ملعقة' },
      { en: 'Call the doctor if the fever goes up.', ar: 'اتصل بالطبيب إذا ارتفعت الحرارة.', word: 'fever', hint: 'حمى' },
      { en: 'He should rest in bed and drink water.', ar: 'يجب أن يرتاح في السرير ويشرب الماء.', word: 'rest', hint: 'يرتاح' },
      { en: 'Has he taken his medicine yet?', ar: 'هل أخذ دواءه بعد؟', word: 'taken', hint: 'أخذ (مضارع تام)' },
      { en: 'His fever is gone, but he is still weak.', ar: 'حماته زالت، لكنه ما زال ضعيفا.', word: 'weak', hint: 'ضعيف' },
      { en: 'No, you must stay in bed today.', ar: 'لا، يجب أن تبقى في السرير اليوم.', word: 'must', hint: 'يجب' },
      { en: 'The thermometer shows a small fever.', ar: 'ميزان الحرارة يبين حمى خفيفة.', word: 'thermometer', hint: 'ميزان الحرارة' },
    ],
    orders: [
      { en: 'Check his temperature every four hours.', ar: 'افحص حرارته كل أربع ساعات.' },
      { en: 'Keep him home until he feels better.', ar: 'ابقاه في المنزل حتى يتحسن حاله.' },
      { en: 'Call the doctor if the fever comes back.', ar: 'اتصل بالطبيب إذا عادت الحمى.' },
      { en: 'Give her one spoon of syrup after lunch.', ar: 'أعطها ملعقة شراب بعد الغداء.' },
      { en: 'She should rest in bed all day.', ar: 'يجب أن ترتاح في السرير طوال اليوم.' },
      { en: 'Sick children need a lot of sleep.', ar: 'الأطفال المرضى يحتاجون كثيرا من النوم.' },
    ],
    mc: [
      { question: 'Your child has a fever. What do you check?', options: ['his temperature', 'his homework', 'his shoes', 'his lunch box'], answerIndex: 0, ar: 'طفلك عنده حمى، ماذا تفحص؟' },
      { question: 'The fever goes up at night. You should:', options: ['call the doctor', 'give him candy', 'take him to the park', 'wake him for school'], answerIndex: 0, ar: 'ارتفعت الحرارة ليلا، يجب أن:' },
      { question: '"Keep him home" means:', options: ['لا تذهب به إلى المدرسة', 'خذه إلى الحديقة', 'أرسله إلى العمل', 'خذمه في السيارة'], answerIndex: 0, ar: 'ما معنى Keep him home؟' },
      { question: 'What is a good meal for a sick child?', options: ['warm soup', 'ice cream', 'chips', 'cold soda'], answerIndex: 0, ar: 'ما وجبة جيدة لطفل مريض؟' },
      { question: 'How much medicine should you give?', options: ['the right dose', 'the whole bottle', 'two bottles', 'no dose at all'], answerIndex: 0, ar: 'كم دواء يجب أن تعطي؟' },
    ],
  },

  /* ================= lesson 141 — Caring for Older Adults ================= */
  {
    num: 141,
    tags: ['elderly-care', 'family'],
    objectives: [
      'Help older people walk and move safely',
      'Remind them kindly about their pills',
      'Offer patient company and support',
    ],
    grammar: {
      explanation: 'Caring for older adults needs gentle language and small actions. Offer help with can or could: "Can you carry this bag for grandpa?" or "Could I help you up?". Remind someone with remind + person + to + verb: "Remind her to take her pills". Use adverbs like slowly, gently and quietly to describe kind actions: "Walk slowly and hold his arm". Be patient means give people time; older people need company, respect and kind words more than money.',
      explanationAr: 'رعاية كبار السن تحتاج لغة لطيفة وأفعالا صغيرة. اعرض المساعدة بـ can أو could: Can you carry this bag for grandpa؟ أو Could I help you up؟ وللتذكير استخدم remind + الشخص + to + الفعل: Remind her to take her pills. واستخدم الظروف مثل slowly وgently وquietly لوصف الأفعال اللطيفة: Walk slowly and hold his arm. وكن صبورا أي امنح الناس وقتا، فكبار السن يحتاجون الصحبة والاحترام والكلمات الطيبة أكثر من المال.',
      examples: [
        { en: 'Remind him to take his pills after lunch.', ar: 'ذكره بأن يأخذ حبوبه بعد الغداء.' },
        { en: 'Help her walk slowly on the stairs.', ar: 'ساعدها على المشي ببطء على السلالم.' },
        { en: 'Be patient with them, they need time.', ar: 'كن صبورا معهم، هم يحتاجون وقتا.' },
      ],
    },
    vocabulary: [
      { word: 'elderly', meaningAr: 'كبار السن', example: 'The elderly need our respect.' },
      { word: 'cane', meaningAr: 'عصا', example: 'Grandpa walks with a cane.' },
      { word: 'walker', meaningAr: 'مشاية', example: 'She uses a walker in the house.' },
      { word: 'support', meaningAr: 'يدعم / دعم', example: 'Support them with a kind word.' },
      { word: 'remind', meaningAr: 'يذكر', example: 'Remind me about the pills, please.' },
      { word: 'patient', meaningAr: 'صبور', example: 'A good caregiver is patient.' },
      { word: 'lonely', meaningAr: 'وحيد', example: 'Old people feel lonely sometimes.' },
      { word: 'company', meaningAr: 'صحبة / رفقة', example: 'Your visit is good company for her.' },
      { word: 'gently', meaningAr: 'بلطف', example: 'Hold her hand gently.' },
      { word: 'stairs', meaningAr: 'السلالم', example: 'Be careful on the stairs.' },
      { word: 'grateful', meaningAr: 'ممتن', example: 'Grandma is grateful for your help.' },
      { word: 'slowly', meaningAr: 'ببطء', example: 'Please speak slowly and clearly.' },
    ],
    scenario: [
      { en: 'Help grandpa walk to the kitchen, please.', ar: 'ساعد الجد على المشي إلى المطبخ من فضلك.', d: 1 },
      { en: 'Give him your arm on the stairs.', ar: 'أعطه ذراعك على السلالم.', d: 1 },
      { en: 'Walk slowly with him and hold his arm.', ar: 'امش ببطء معه وامسك ذراعه.', d: 1 },
      { en: 'Remind her to take her pills after breakfast.', ar: 'ذكرها بأن تأخذ حبوبها بعد الفطور.', d: 1 },
      { en: 'She forgets things, so be patient with her.', ar: 'تنسى الأشياء، لذلك كن صبورا معها.', d: 2 },
      { en: 'Do not shout; speak slowly and clearly.', ar: 'لا تصرخ؛ تكلم ببطء ووضوح.', d: 1 },
      { en: 'Older people need company and kind words.', ar: 'كبار السن يحتاجون صحبة وكلمات طيبة.', d: 1 },
      { en: 'Visit your grandparents every weekend.', ar: 'زر أجدادك كل نهاية أسبوع.', d: 1 },
      { en: 'I helped my grandmother stand up yesterday.', ar: 'ساعدت جدتي على الوقوف أمس.', d: 2 },
      { en: 'She has problems with her eyes, so I read to her.', ar: 'لديها مشاكل في عينيها، لذلك أقرأ لها.', d: 2 },
      { en: 'Can you carry this bag for grandpa?', ar: 'هل يمكنك حمل هذه الحقيبة عن الجد؟', d: 1 },
      { en: 'Of course, it is not heavy.', ar: 'بالتأكيد، إنها ليست ثقيلة.', d: 1 },
      { en: 'He is proud, so offer help gently.', ar: 'هو معتز بنفسه، لذلك اعرض المساعدة بلطف.', d: 3 },
      { en: 'We take turns caring for our father.', ar: 'نتناوب على رعاية أبانا.', d: 2 },
      { en: 'Has he taken his heart pills today?', ar: 'هل أخذ حبوب القلب اليوم؟', d: 2 },
      { en: 'Does grandma need anything from the market?', ar: 'هل تحتاج الجدة شيئا من السوق؟', d: 1 },
      { en: 'Their stories teach us patience and love.', ar: 'حكاياتهم تعلمنا الصبر والمحبة.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Remind {R} to take {O} pills after lunch.', arTmpl: 'ذكر{R_ar} بأن {V_ar} {O_ar} بعد الغداء.',
        slots: {
          R: [
            { en: 'him', ar: 'ه', k: 'he' }, { en: 'her', ar: 'ها', k: 'she' },
            { en: 'them', ar: 'هم', k: 'they' },
          ],
          V: (x) => [{ en: 'take', ar: B.arPresent('take', x.R.k) }],
          O: (x) => [
            x.R.k === 'he' ? { en: 'his', ar: 'حبوبه' }
              : x.R.k === 'she' ? { en: 'her', ar: 'حبوبها' }
                : { en: 'their', ar: 'حبوبهم' }
          ],
        },
        tags: ['elderly-care', 'family'], d: 2, limit: 3,
      },
      {
        tmpl: 'Help {P} walk {W}.', arTmpl: 'ساعد{P_ar} على المشي {W_ar}.',
        slots: {
          P: [ { en: 'him', ar: 'ه' }, { en: 'her', ar: 'ها' }, { en: 'them', ar: 'هم' } ],
          W: [
            { en: 'slowly', ar: 'ببطء' }, { en: 'up the stairs', ar: 'إلى أعلى السلالم' },
            { en: 'to the kitchen', ar: 'إلى المطبخ' }, { en: 'in the garden', ar: 'في الحديقة' },
          ],
        },
        tags: ['elderly-care', 'imperatives'], d: 1, limit: 12,
      },
      {
        tmpl: '{S} {V} {P} every weekend.', arTmpl: '{S_ar} {V_ar} {P_ar} كل نهاية أسبوع.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'We', ar: 'نحن', agr: 'we' },
            { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{ en: B.enPresent('visit', x.S.agr), ar: B.arPresent('visit', x.S.agr) }],
          P: [
            { en: 'my grandparents', ar: 'أجدادي' }, { en: 'my grandmother', ar: 'جدتي' },
            { en: 'my uncle', ar: 'عمي' }, { en: 'our neighbors', ar: 'جيراننا' },
          ],
        },
        tags: ['elderly-care', 'present-simple', 'family'], d: 1, limit: 12,
      },
      {
        tmpl: 'Old people need {N} and {K}.', arTmpl: 'كبار السن يحتاجون {N_ar} و{K_ar}.',
        slots: {
          N: [
            { en: 'company', ar: 'الصحبة' }, { en: 'patience', ar: 'الصبر' },
            { en: 'kindness', ar: 'اللطف' }, { en: 'help', ar: 'المساعدة' },
          ],
          K: [
            { en: 'love', ar: 'المحبة' }, { en: 'respect', ar: 'الاحترام' },
            { en: 'care', ar: 'الرعاية' },
          ],
        },
        tags: ['elderly-care'], d: 2, limit: 12,
      },
      {
        tmpl: 'Be {A} with them.', arTmpl: 'كن {A_ar} معهم.',
        slots: {
          A: [
            { en: 'patient', ar: 'صبورا' }, { en: 'kind', ar: 'لطيفا' },
            { en: 'gentle', ar: 'رفيقا' }, { en: 'calm', ar: 'هادئا' },
          ],
        },
        tags: ['elderly-care', 'imperatives'], d: 1, limit: 4,
      },
    ],
    fills: [
      { en: 'Help grandpa walk to the kitchen, please.', ar: 'ساعد الجد على المشي إلى المطبخ من فضلك.', word: 'walk', hint: 'يمشي' },
      { en: 'Remind her to take her pills after breakfast.', ar: 'ذكرها بأن تأخذ حبوبها بعد الفطور.', word: 'pills', hint: 'حبوب' },
      { en: 'She forgets things, so be patient with her.', ar: 'تنسى الأشياء، لذلك كن صبورا معها.', word: 'patient', hint: 'صبور' },
      { en: 'Do not shout; speak slowly and clearly.', ar: 'لا تصرخ؛ تكلم ببطء ووضوح.', word: 'slowly', hint: 'ببطء' },
      { en: 'Older people need company and kind words.', ar: 'كبار السن يحتاجون صحبة وكلمات طيبة.', word: 'company', hint: 'صحبة' },
      { en: 'Has he taken his heart pills today?', ar: 'هل أخذ حبوب القلب اليوم؟', word: 'heart', hint: 'قلب' },
      { en: 'I helped my grandmother stand up yesterday.', ar: 'ساعدت جدتي على الوقوف أمس.', word: 'yesterday', hint: 'أمس' },
      { en: 'We take turns caring for our father.', ar: 'نتناوب على رعاية أبانا.', word: 'turns', hint: 'نتناوب' },
    ],
    orders: [
      { en: 'Give him your arm on the stairs, please.', ar: 'أعطه ذراعك على السلالم من فضلك.' },
      { en: 'Remind grandpa to take his pills at night.', ar: 'ذكر الجد بأن يأخذ حبوبه ليلا.' },
      { en: 'Walk slowly and hold his arm gently.', ar: 'امش ببطء وامسك ذراعه بلطف.' },
      { en: 'Be patient and speak clearly, please.', ar: 'كن صبورا وتكلم بوضوح من فضلك.' },
      { en: 'Old people need respect and care too.', ar: 'كبار السن يحتاجون الاحترام والرعاية أيضا.' },
      { en: 'Does grandma need anything from the market?', ar: 'هل تحتاج الجدة شيئا من السوق؟' },
    ],
    mc: [
      { question: 'How do you help grandpa on the stairs?', options: ['Give him your arm', 'Run in front of him', 'Push him quickly', 'Shout at him'], answerIndex: 0, ar: 'كيف تساعد الجد على السلالم؟' },
      { question: 'Grandma forgets her pills. What do you do?', options: ['Remind her kindly', 'Take them yourself', 'Hide the bottle', 'Do nothing'], answerIndex: 0, ar: 'الجدة تنسى حبوبها، ماذا تفعل؟' },
      { question: '"They need company" means:', options: ['يحتاجون صحبة', 'يحتاجون مالا', 'يحتاجون سفرا', 'يحتاجون لعبا'], answerIndex: 0, ar: 'ما معنى They need company؟' },
      { question: 'Speak with older people:', options: ['slowly and clearly', 'very fast', 'in an angry voice', 'only by text'], answerIndex: 0, ar: 'تحدث مع كبار السن:' },
    ],
  },
];
