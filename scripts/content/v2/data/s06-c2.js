/* ============================================================
   v2 section data — s06-c2.js
   Health & Emergencies · lessons 142–145
   (Calling an Ambulance · Asking a Pharmacist · Understanding
    Medical Instructions · Health and Emergency Review)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 142 — Calling an Ambulance ================= */
  {
    num: 142,
    tags: ['ambulance', 'emergency'],
    objectives: [
      'Call for an ambulance and give the address',
      'Describe the emergency in short clear sentences',
      'Follow the operator instructions while you wait',
    ],
    grammar: {
      explanation: 'In an emergency call, speak fast but clearly. Give the address first: "Send an ambulance to 12 King Street". Describe the problem with the present simple or continuous: "He is not breathing", "He is bleeding badly". Use imperatives for urgent requests: "Hurry, please", "Stay on the line". The operator may ask questions: "Is he conscious?", "How old is he?". Answer with yes or no and short facts. Stay calm; the paramedics will arrive quickly.',
      explanationAr: 'في مكالمة الطوارئ تحدث بسرعة ووضوح. أعط العنوان أولا: Send an ambulance to 12 King Street. وصف المشكلة بالمضارع البسيط أو المستمر: He is not breathing، He is bleeding badly. واستخدم صيغة الأمر للطلبات العاجلة: Hurry, please، Stay on the line. وقد يسألك الموظف: Is he conscious؟ وHow old is he؟ أجب بنعم أو لا وبمعلومات قصيرة. وابق هادئا، فسيصل المسعفون سريعا.',
      examples: [
        { en: 'Send an ambulance to 12 King Street, please.', ar: 'أرسل سيارة إسعاف إلى شارع الملك رقم 12 من فضلك.' },
        { en: 'He fell down and he is not breathing.', ar: 'سقط وهو لا يتنفس.' },
        { en: 'Stay on the line, help is coming.', ar: 'ابق على الخط، المساعدة قادمة.' },
      ],
    },
    vocabulary: [
      { word: 'ambulance', meaningAr: 'سيارة إسعاف', example: 'The ambulance arrived in eight minutes.', ipa: 'ˈæmbjələns' },
      { word: 'emergency', meaningAr: 'حالة طوارئ', example: 'Dial the emergency number quickly.' },
      { word: 'breathing', meaningAr: 'تنفس', example: 'Check his breathing first.' },
      { word: 'unconscious', meaningAr: 'فاقد للوعي', example: 'The man is unconscious on the floor.' },
      { word: 'injured', meaningAr: 'مصاب', example: 'Two people are injured, but they are safe.' },
      { word: 'paramedic', meaningAr: 'مسعف', example: 'The paramedics carried him carefully.' },
      { word: 'address', meaningAr: 'عنوان', example: 'Say the address slowly and clearly.' },
      { word: 'pulse', meaningAr: 'نبض', example: 'The paramedic checked his pulse.' },
      { word: 'siren', meaningAr: 'صفارة', example: 'I can hear the siren now.' },
      { word: 'stretcher', meaningAr: 'نقالة', example: 'They lifted him onto the stretcher.' },
      { word: 'corner', meaningAr: 'زاوية', example: 'Wait for us at the street corner.' },
      { word: 'line', meaningAr: 'خط (الهاتف)', example: 'Do not hang up, stay on the line.' },
    ],
    scenario: [
      { en: 'My father collapsed and he is not breathing!', ar: 'أبي سقط مغشيا عليه وهو لا يتنفس!', d: 1 },
      { en: 'Send an ambulance to 12 King Street.', ar: 'أرسل سيارة إسعاف إلى شارع الملك رقم 12.', d: 1 },
      { en: 'Hurry, please!', ar: 'أسرعوا من فضلكم!', d: 1 },
      { en: 'He fell down and he cannot stand up.', ar: 'سقط ولا يستطيع النهوض.', d: 1 },
      { en: 'Is he conscious? Can you hear me?', ar: 'هل هو واع؟ هل تسمعني؟', d: 1 },
      { en: 'No, he is unconscious.', ar: 'لا، إنه فاقد للوعي.', d: 1 },
      { en: 'A man fell off a ladder in our building.', ar: 'سقط رجل من سلم في عمارتنا.', d: 2 },
      { en: 'He is bleeding badly from his head.', ar: 'ينزف بشدة من رأسه.', d: 1 },
      { en: 'The address is 12 King Street, near the school.', ar: 'العنوان شارع الملك رقم 12 قرب المدرسة.', d: 1 },
      { en: 'Stay on the line until the ambulance arrives.', ar: 'ابق على الخط حتى تصل سيارة الإسعاف.', d: 1 },
      { en: 'Should I move him to a comfortable position?', ar: 'هل أنقله إلى وضع مريح؟', d: 2 },
      { en: 'No, do not move him at all.', ar: 'لا، لا تحركه إطلاقا.', d: 1 },
      { en: 'I can hear the siren now.', ar: 'أستطيع سماع الصفارة الآن.', d: 1 },
      { en: 'The paramedics arrived in ten minutes.', ar: 'وصل المسعفون في عشر دقائق.', d: 1 },
      { en: 'They took him to the nearest hospital.', ar: 'أخذوه إلى أقرب مستشفى.', d: 1 },
      { en: 'Stay calm and keep the door open for them.', ar: 'ابق هادئا واترك الباب مفتوحا لهم.', d: 2 },
      { en: 'Has the ambulance arrived yet?', ar: 'هل وصلت سيارة الإسعاف بعد؟', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Send an ambulance to {A}.', arTmpl: 'أرسل سيارة إسعاف إلى {A_ar}.',
        slots: {
          A: [
            { en: '5 Garden Road', ar: 'طريق الحديقة رقم 5' },
            { en: '24 Palm Street', ar: 'شارع النخيل رقم 24' },
            { en: '7 Nile Avenue', ar: 'شارع النيل رقم 7' },
            { en: '19 School Street', ar: 'شارع المدرسة رقم 19' },
            { en: '3 King Street', ar: 'شارع الملك رقم 3' },
            { en: '42 Main Road', ar: 'الطريق الرئيسي رقم 42' },
          ],
        },
        tags: ['ambulance', 'imperatives'], d: 1, limit: 6,
      },
      {
        tmpl: 'He is {C}.', arTmpl: 'إنه {C_ar}.',
        slots: {
          C: [
            { en: 'unconscious', ar: 'فاقد للوعي' }, { en: 'bleeding badly', ar: 'ينزف بشدة' },
            { en: 'breathing but weak', ar: 'يتنفس لكنه ضعيف' }, { en: 'very pale', ar: 'شاحبا جدا' },
            { en: 'cold and tired', ar: 'بارد ومتعب' },
          ],
        },
        tags: ['ambulance', 'emergency'], d: 1, limit: 5,
      },
      {
        tmpl: 'The {W} arrived in {T} minutes.', arTmpl: 'وصلت {W_ar} في {T_ar} دقائق.',
        slots: {
          W: [
            { en: 'ambulance', ar: 'سيارة الإسعاف' }, { en: 'police car', ar: 'سيارة الشرطة' },
            { en: 'fire truck', ar: 'سيارة الإطفاء' },
          ],
          T: [
            { en: 'five', ar: 'خمس' }, { en: 'ten', ar: 'عشر' },
            { en: 'six', ar: 'ست' }, { en: 'nine', ar: 'تسع' },
          ],
        },
        tags: ['ambulance', 'numbers'], d: 2, limit: 12,
      },
      {
        tmpl: 'Stay on the line, {R}.', arTmpl: 'ابق على الخط، {R_ar}.',
        slots: {
          R: [
            { en: 'please', ar: 'من فضلك' }, { en: 'do not hang up', ar: 'لا تغلق' },
            { en: 'help is coming', ar: 'المساعدة قادمة' }, { en: 'and stay calm', ar: 'وابق هادئا' },
          ],
        },
        tags: ['ambulance', 'imperatives'], d: 1, limit: 4,
      },
      {
        tmpl: 'A man fell down {L} and he cannot get up.', arTmpl: 'سقط رجل {L_ar} ولا يستطيع النهوض.',
        slots: {
          L: [
            { en: 'near the school', ar: 'قرب المدرسة' }, { en: 'in the market', ar: 'في السوق' },
            { en: 'at the bus stop', ar: 'عند موقف الحافلة' }, { en: 'in the mosque yard', ar: 'في ساحة الجامع' },
          ],
        },
        tags: ['ambulance', 'emergency'], d: 2, limit: 4,
      },
      {
        tmpl: 'Please hurry, the situation is {B}.', arTmpl: 'أرجوك أسرع، الحالة {B_ar}.',
        slots: {
          B: [
            { en: 'serious', ar: 'خطيرة' }, { en: 'getting worse', ar: 'تسوء' },
            { en: 'not normal', ar: 'غير طبيعية' },
          ],
        },
        tags: ['ambulance', 'emergency'], d: 2, limit: 3,
      },
    ],
    fills: [
      { en: 'My father collapsed and he is not breathing!', ar: 'أبي سقط مغشيا عليه وهو لا يتنفس!', word: 'breathing', hint: 'تنفس' },
      { en: 'Send an ambulance to 12 King Street.', ar: 'أرسل سيارة إسعاف إلى شارع الملك رقم 12.', word: 'ambulance', hint: 'سيارة إسعاف' },
      { en: 'Stay on the line until the ambulance arrives.', ar: 'ابق على الخط حتى تصل سيارة الإسعاف.', word: 'line', hint: 'خط الهاتف' },
      { en: 'No, he is unconscious.', ar: 'لا، إنه فاقد للوعي.', word: 'unconscious', hint: 'فاقد للوعي' },
      { en: 'The paramedics arrived in ten minutes.', ar: 'وصل المسعفون في عشر دقائق.', word: 'paramedics', hint: 'مسعفون' },
      { en: 'They took him to the nearest hospital.', ar: 'أخذوه إلى أقرب مستشفى.', word: 'nearest', hint: 'أقرب' },
      { en: 'I can hear the siren now.', ar: 'أستطيع سماع الصفارة الآن.', word: 'siren', hint: 'صفارة' },
      { en: 'He is bleeding badly from his head.', ar: 'ينزف بشدة من رأسه.', word: 'bleeding', hint: 'ينزف' },
    ],
    orders: [
      { en: 'Send an ambulance to 24 Palm Street.', ar: 'أرسل سيارة إسعاف إلى شارع النخيل رقم 24.' },
      { en: 'He fell down and he cannot stand up.', ar: 'سقط ولا يستطيع النهوض.' },
      { en: 'Stay calm and keep the door open.', ar: 'ابق هادئا واترك الباب مفتوحا.' },
      { en: 'Please hurry, the situation is getting worse.', ar: 'أرجوك أسرع، الحالة تسوء.' },
      { en: 'Stay on the line, do not hang up.', ar: 'ابق على الخط، لا تغلق.' },
      { en: 'They took my father to the hospital quickly.', ar: 'أخذوا أبي إلى المستشفى بسرعة.' },
    ],
    mc: [
      { question: 'Someone is not breathing. You call:', options: ['an ambulance', 'a taxi', 'a waiter', 'a plumber'], answerIndex: 0, ar: 'شخص لا يتنفس، تتصل بـ:' },
      { question: 'What do you tell the operator first?', options: ['The address of the emergency', 'Your favorite food', 'The weather today', 'Your job title'], answerIndex: 0, ar: 'ماذا تخبر موظف الطوارئ أولا؟' },
      { question: '"He is unconscious" means:', options: ['فاقد للوعي', 'سعيد جدا', 'جائع', 'غاضب'], answerIndex: 0, ar: 'ما معنى He is unconscious؟' },
      { question: 'While waiting for the ambulance, you should:', options: ['stay calm and stay on the line', 'run around the building', 'hang up quickly', 'go to sleep'], answerIndex: 0, ar: 'أثناء انتظار الإسعاف يجب أن:' },
    ],
  },

  /* ================= lesson 143 — Asking a Pharmacist ================= */
  {
    num: 143,
    tags: ['pharmacy', 'questions'],
    objectives: [
      'Ask if a medicine is safe for children',
      'Ask about food, days and how to take it',
      'Ask for a cheaper option and check the date',
    ],
    grammar: {
      explanation: 'At the pharmacy, ask short polite questions with can and is: "Can I take it with food?", "Is this safe for children?". Use how many for countable days and pills: "How many days should I take it?". Ask about price with "Is there a cheaper option?". The pharmacist answers with the imperative: "Take it twice a day", "Do not take it with milk". Always check the date; an expired medicine is not safe.',
      explanationAr: 'في الصيدلية اسأل أسئلة قصيرة مهذبة بـ can وis: Can I take it with food؟ وIs this safe for children؟. واستخدم how many للأيام والحبوب المعدودة: How many days should I take it؟. واسأل عن السعر بـ Is there a cheaper option؟. ويجيب الصيدلي بصيغة الأمر: Take it twice a day، Do not take it with milk. وتحقق دائما من التاريخ، فالدواء منتهي الصلاحية غير آمن.',
      examples: [
        { en: 'Is this medicine safe for children?', ar: 'هل هذا الدواء آمن للأطفال؟' },
        { en: 'Can I take it with food?', ar: 'هل يمكنني تناوله مع الطعام؟' },
        { en: 'Is there a cheaper option?', ar: 'هل يوجد خيار أرخص؟' },
      ],
    },
    vocabulary: [
      { word: 'safe', meaningAr: 'آمن', example: 'This medicine is safe for children.', ipa: 'seɪf' },
      { word: 'adults', meaningAr: 'البالغون', example: 'The pills are for adults only.' },
      { word: 'cheaper', meaningAr: 'أرخص', example: 'The green box is cheaper.' },
      { word: 'option', meaningAr: 'خيار', example: 'We have another option for you.' },
      { word: 'expired', meaningAr: 'منتهي الصلاحية', example: 'Do not drink expired syrup.' },
      { word: 'taste', meaningAr: 'طعم / يتذوق', example: 'The taste is sweet like honey.' },
      { word: 'twice', meaningAr: 'مرتين', example: 'Rinse your mouth twice a day.' },
      { word: 'days', meaningAr: 'أيام', example: 'Take the pills for seven days.' },
      { word: 'milk', meaningAr: 'حليب', example: 'Do not take it with milk.' },
      { word: 'babies', meaningAr: 'الرضع', example: 'This cream is not for babies.' },
      { word: 'problem', meaningAr: 'مشكلة', example: 'What is the problem, exactly?' },
      { word: 'sweet', meaningAr: 'حلو', example: 'The syrup tastes sweet.' },
    ],
    scenario: [
      { en: 'Excuse me, is this medicine safe for children?', ar: 'عفوا، هل هذا الدواء آمن للأطفال؟', d: 1 },
      { en: 'Yes, but only one small spoon at night.', ar: 'نعم، لكن ملعقة صغيرة واحدة ليلا فقط.', d: 1 },
      { en: 'Can I take it with food?', ar: 'هل يمكنني تناوله مع الطعام؟', d: 1 },
      { en: 'Sure, take it with breakfast or dinner.', ar: 'بالتأكيد، خذه مع الفطور أو العشاء.', d: 1 },
      { en: 'How many days should I take it?', ar: 'كم يوما يجب أن آخذه؟', d: 1 },
      { en: 'Take it for five days, twice a day.', ar: 'خذه لمدة خمسة أيام، مرتين في اليوم.', d: 1 },
      { en: 'Is there a cheaper option?', ar: 'هل يوجد خيار أرخص؟', d: 1 },
      { en: 'Yes, this one is cheaper and good.', ar: 'نعم، هذا أرخص وجيد.', d: 1 },
      { en: 'Check the date, is it expired?', ar: 'تحقق من التاريخ، هل انتهت صلاحيته؟', d: 2 },
      { en: 'No, it is good for two years.', ar: 'لا، هو صالح لمدة سنتين.', d: 1 },
      { en: 'Can children take the same pills as adults?', ar: 'هل يأخذ الأطفال نفس حبوب البالغين؟', d: 2 },
      { en: 'No, children need a special syrup.', ar: 'لا، الأطفال يحتاجون شرابا خاصا.', d: 1 },
      { en: 'Does it taste bad?', ar: 'هل طعمه سيء؟', d: 1 },
      { en: 'It tastes sweet, most children like it.', ar: 'طعمه حلو، معظم الأطفال يحبونه.', d: 1 },
      { en: 'Do not take it with milk.', ar: 'لا تتناوله مع الحليب.', d: 1 },
      { en: 'It is not safe for babies under two.', ar: 'إنه غير آمن للرضع دون عمر سنتين.', d: 2 },
      { en: 'Thank you, you helped me a lot.', ar: 'شكرا لك، لقد ساعدتني كثيرا.', d: 1 },
      { en: 'My daughter has a small cough at night.', ar: 'ابنتي عندها كحة خفيفة ليلا.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Can I take the {M} with {F}?', arTmpl: 'هل يمكنني تناول {M_ar} مع {F_ar}؟',
        slots: {
          M: [
            { en: 'pills', ar: 'الحبوب' }, { en: 'syrup', ar: 'الشراب' },
            { en: 'tablets', ar: 'الأقراص' }, { en: 'vitamins', ar: 'الفيتامينات' },
          ],
          F: [
            { en: 'food', ar: 'الطعام' }, { en: 'milk', ar: 'الحليب' },
            { en: 'juice', ar: 'العصير' },
          ],
        },
        tags: ['pharmacy', 'questions'], d: 1, limit: 12,
      },
      {
        tmpl: 'Is the {M} {SAFE} for {P}?', arTmpl: 'هل {M_ar} {SAFE_ar} {P_ar}؟',
        slots: {
          M: [
            { en: 'syrup', ar: 'الشراب', g: 'm' }, { en: 'cream', ar: 'الكريم', g: 'm' },
            { en: 'pills', ar: 'الحبوب', g: 'pl' }, { en: 'vitamins', ar: 'الفيتامينات', g: 'pl' },
          ],
          SAFE: (x) => [{ en: 'safe', ar: x.M.g === 'm' ? 'آمن' : 'آمنة' }],
          P: [
            { en: 'children', ar: 'للأطفال' }, { en: 'babies', ar: 'للرضع' },
            { en: 'adults', ar: 'للبالغين' }, { en: 'pregnant women', ar: 'للحوامل' },
          ],
        },
        tags: ['pharmacy', 'questions'], d: 1, limit: 16,
      },
      {
        tmpl: 'How many days should I take the {M}?', arTmpl: 'كم يوما يجب أن آخذ {M_ar}؟',
        slots: {
          M: [
            { en: 'pills', ar: 'الحبوب' }, { en: 'syrup', ar: 'الشراب' },
            { en: 'tablets', ar: 'الأقراص' }, { en: 'drops', ar: 'القطرة' },
          ],
        },
        tags: ['pharmacy', 'questions'], d: 2, limit: 4,
      },
      {
        tmpl: 'Do you have a {A} option?', arTmpl: 'هل لديكم خيار {A_ar}؟',
        slots: {
          A: [
            { en: 'cheaper', ar: 'أرخص' }, { en: 'bigger', ar: 'أكبر' },
            { en: 'smaller', ar: 'أصغر' }, { en: 'better', ar: 'أفضل' },
          ],
        },
        tags: ['pharmacy', 'questions'], d: 1, limit: 4,
      },
      {
        tmpl: 'Take it {F} for {D} days.', arTmpl: 'خذه {F_ar} لمدة {D_ar} أيام.',
        slots: {
          F: [
            { en: 'once a day', ar: 'مرة في اليوم' }, { en: 'twice a day', ar: 'مرتين في اليوم' },
            { en: 'in the morning', ar: 'في الصباح' }, { en: 'at night', ar: 'ليلا' },
          ],
          D: [
            { en: 'three', ar: 'ثلاثة' }, { en: 'five', ar: 'خمسة' },
            { en: 'seven', ar: 'سبعة' }, { en: 'ten', ar: 'عشرة' },
          ],
        },
        tags: ['pharmacy', 'imperatives'], d: 1, limit: 16,
      },
    ],
    fills: [
      { en: 'Excuse me, is this medicine safe for children?', ar: 'عفوا، هل هذا الدواء آمن للأطفال؟', word: 'safe', hint: 'آمن' },
      { en: 'Can I take it with food?', ar: 'هل يمكنني تناوله مع الطعام؟', word: 'food', hint: 'طعام' },
      { en: 'How many days should I take it?', ar: 'كم يوما يجب أن آخذه؟', word: 'days', hint: 'أيام' },
      { en: 'Is there a cheaper option?', ar: 'هل يوجد خيار أرخص؟', word: 'cheaper', hint: 'أرخص' },
      { en: 'It is not safe for babies under two.', ar: 'إنه غير آمن للرضع دون عمر سنتين.', word: 'babies', hint: 'الرضع' },
      { en: 'It tastes sweet, most children like it.', ar: 'طعمه حلو، معظم الأطفال يحبونه.', word: 'tastes', hint: 'طعمه' },
      { en: 'Check the date, is it expired?', ar: 'تحقق من التاريخ، هل انتهت صلاحيته؟', word: 'expired', hint: 'منتهي الصلاحية' },
      { en: 'Thank you, you helped me a lot.', ar: 'شكرا لك، لقد ساعدتني كثيرا.', word: 'helped', hint: 'ساعد' },
    ],
    orders: [
      { en: 'Is this medicine safe for children?', ar: 'هل هذا الدواء آمن للأطفال؟' },
      { en: 'Can I take the pills with milk?', ar: 'هل يمكنني تناول الحبوب مع الحليب؟' },
      { en: 'Do you have a cheaper option, please?', ar: 'هل لديكم خيار أرخص من فضلكم؟' },
      { en: 'Take the syrup twice a day after lunch.', ar: 'خذ الشراب مرتين في اليوم بعد الغداء.' },
      { en: 'No, children need a special syrup.', ar: 'لا، الأطفال يحتاجون شرابا خاصا.' },
      { en: 'Excuse me, where is the cough syrup?', ar: 'عفوا، أين شراب الكحة؟' },
    ],
    mc: [
      { question: 'The medicine is for children. Ask:', options: ['Is this safe for children?', 'Is this fast for children?', 'Is this loud for children?', 'Is this heavy for children?'], answerIndex: 0, ar: 'الدواء للأطفال، اسأل:' },
      { question: 'You cannot swallow pills. You ask for:', options: ['a syrup', 'a hammer', 'a ticket', 'a towel'], answerIndex: 0, ar: 'لا تستطيع بلع الحبوب، تطلب:' },
      { question: '"A cheaper option" means:', options: ['خيار أرخص', 'خيار أغلى', 'خيار أسرع', 'خيار أكبر'], answerIndex: 0, ar: 'ما معنى a cheaper option؟' },
      { question: '"Twice a day" means:', options: ['مرتين في اليوم', 'مرتين في الأسبوع', 'مرتين في الشهر', 'مرتين في الساعة'], answerIndex: 0, ar: 'ما معنى twice a day؟' },
      { question: 'The box has an old date. The medicine is:', options: ['expired', 'new', 'sweet', 'free'], answerIndex: 0, ar: 'العلبة عليها تاريخ قديم، الدواء:' },
    ],
  },

  /* ================= lesson 144 — Understanding Medical Instructions ================= */
  {
    num: 144,
    tags: ['medical-instructions', 'imperatives'],
    objectives: [
      'Understand dosage and frequency instructions',
      'Follow warnings about food, driving and lifting',
      'Know when to call the doctor or come back',
    ],
    grammar: {
      explanation: 'Medical instructions often use the imperative: "Take one tablet after meals", "Avoid heavy lifting". Frequency goes with times a day: "twice a day for five days" means two times every day for five days. Use should not or must not for warnings: "You should not drive after this syrup". If-clauses give conditions: "If the fever returns, call us immediately". Always complete the full course even when you feel well, and come back next week if the pain continues.',
      explanationAr: 'تأتي التعليمات الطبية غالبا بصيغة الأمر: Take one tablet after meals، Avoid heavy lifting. ويعبر التكرار بـ times a day: twice a day for five days أي مرتين كل يوم لمدة خمسة أيام. واستخدم should not أو must not للتحذير: You should not drive after this syrup. وجمل if للشرط: If the fever returns, call us immediately. وأكمل الجرعة كاملة حتى لو شعرت بتحسن، وعود الأسبوع القادم إذا استمر الألم.',
      examples: [
        { en: 'Take one tablet after meals.', ar: 'خذ قرصا واحدا بعد الوجبات.' },
        { en: 'Avoid heavy lifting for two weeks.', ar: 'تجنب رفع الأشياء الثقيلة لمدة أسبوعين.' },
        { en: 'If the fever returns, call us immediately.', ar: 'إذا عادت الحمى، اتصل بنا فورا.' },
      ],
    },
    vocabulary: [
      { word: 'instructions', meaningAr: 'تعليمات', example: 'Read the instructions twice, please.' },
      { word: 'tablet', meaningAr: 'قرص', example: 'One tablet after every meal.' },
      { word: 'twice', meaningAr: 'مرتين', example: 'Take the medicine twice a day.' },
      { word: 'avoid', meaningAr: 'يتجنب', example: 'Avoid sweet drinks at night.' },
      { word: 'heavy lifting', meaningAr: 'رفع الأشياء الثقيلة', example: 'Heavy lifting is bad for your back.' },
      { word: 'apply', meaningAr: 'يضع / يدهن', example: 'Apply the cream on clean skin.' },
      { word: 'empty stomach', meaningAr: 'معدة فارغة', example: 'Take it on an empty stomach.' },
      { word: 'improve', meaningAr: 'يتحسن', example: 'Your pain will improve slowly.' },
      { word: 'follow', meaningAr: 'يتبع', example: 'Follow the instructions carefully.' },
      { word: 'course', meaningAr: 'جرعة كاملة', example: 'The course lasts seven days.' },
      { word: 'immediately', meaningAr: 'فورا', example: 'Call us immediately if it hurts.' },
      { word: 'rash', meaningAr: 'طفح جلدي', example: 'A small rash appeared on his arm.' },
    ],
    scenario: [
      { en: 'Listen carefully to the doctor\'s instructions.', ar: 'استمع بعناية لتعليمات الطبيب.', d: 1 },
      { en: 'Take one tablet after meals.', ar: 'خذ قرصا واحدا بعد الوجبات.', d: 1 },
      { en: 'Take it on an empty stomach in the morning.', ar: 'خذه على معدة فارغة في الصباح.', d: 1 },
      { en: 'Drink plenty of water with every tablet.', ar: 'اشرب كثيرا من الماء مع كل قرص.', d: 1 },
      { en: 'Avoid heavy lifting for two weeks.', ar: 'تجنب رفع الأشياء الثقيلة لمدة أسبوعين.', d: 1 },
      { en: 'Do not stop the medicine when you feel better.', ar: 'لا توقف الدواء عندما تشعر بتحسن.', d: 2 },
      { en: 'Come back next week for a quick check.', ar: 'عد الأسبوع القادم لفحص سريع.', d: 1 },
      { en: 'You should not drive after taking this syrup.', ar: 'يجب ألا تقود بعد تناول هذا الشراب.', d: 2 },
      { en: 'Apply the cream on the rash twice a day.', ar: 'ضع الكريم على الطفح مرتين في اليوم.', d: 1 },
      { en: 'Do you understand the instructions, Mr. Sami?', ar: 'هل فهمت التعليمات يا أستاذ سامي؟', d: 1 },
      { en: 'Yes, doctor. One tablet after meals, twice a day.', ar: 'نعم يا دكتور، قرص بعد الوجبات مرتين في اليوم.', d: 1 },
      { en: 'And avoid coffee and tea at night.', ar: 'وتجنب القهوة والشاي ليلا.', d: 1 },
      { en: 'What should I avoid while taking these pills?', ar: 'ماذا يجب أن أتجنب أثناء تناول هذه الحبوب؟', d: 2 },
      { en: 'If the fever returns, call us immediately.', ar: 'إذا عادت الحمى، اتصل بنا فورا.', d: 1 },
      { en: 'Has your pain improved since last week?', ar: 'هل تحسن ألمك منذ الأسبوع الماضي؟', d: 2 },
      { en: 'A little, but my back still hurts in the morning.', ar: 'قليلا، لكن ظهري ما زال يؤلمني في الصباح.', d: 2 },
      { en: 'Complete the full course, even if you feel well.', ar: 'أكمل الجرعة كاملة حتى لو شعرت أنك بخير.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Take one tablet {T}.', arTmpl: 'خذ قرصا واحدا {T_ar}.',
        slots: {
          T: [
            { en: 'before breakfast', ar: 'قبل الفطور' }, { en: 'at bedtime', ar: 'قبل النوم' },
            { en: 'with warm water', ar: 'مع ماء دافئ' }, { en: 'on an empty stomach', ar: 'على معدة فارغة' },
            { en: 'in the afternoon', ar: 'بعد الظهر' },
          ],
        },
        tags: ['medical-instructions', 'imperatives'], d: 1, limit: 5,
      },
      {
        tmpl: 'Take the {M} twice a day for {D} days.', arTmpl: 'خذ {M_ar} مرتين في اليوم لمدة {D_ar} أيام.',
        slots: {
          M: [
            { en: 'tablets', ar: 'الأقراص' }, { en: 'syrup', ar: 'الشراب' },
            { en: 'drops', ar: 'القطرة' }, { en: 'capsules', ar: 'الكبسولات' },
          ],
          D: [
            { en: 'three', ar: 'ثلاثة' }, { en: 'five', ar: 'خمسة' },
            { en: 'seven', ar: 'سبعة' }, { en: 'ten', ar: 'عشرة' },
          ],
        },
        tags: ['medical-instructions', 'imperatives'], d: 1, limit: 16,
      },
      {
        tmpl: 'Avoid {A} for two weeks.', arTmpl: 'تجنب {A_ar} لمدة أسبوعين.',
        slots: {
          A: [
            { en: 'coffee and tea', ar: 'القهوة والشاي' }, { en: 'cold drinks', ar: 'المشروبات الباردة' },
            { en: 'salty food', ar: 'الطعام المالح' }, { en: 'long walks', ar: 'المشي الطويل' },
            { en: 'smoking', ar: 'التدخين' },
          ],
        },
        tags: ['medical-instructions', 'imperatives'], d: 2, limit: 5,
      },
      {
        tmpl: 'If the pain {C}, call the clinic.', arTmpl: 'إذا {C_ar}، اتصل بالعيادة.',
        slots: {
          C: [
            { en: 'comes back', ar: 'عاد الألم' }, { en: 'gets worse', ar: 'ازداد الألم سوءا' },
            { en: 'does not stop', ar: 'لم يتوقف الألم' }, { en: 'moves to your arm', ar: 'انتقل الألم إلى ذراعك' },
          ],
        },
        tags: ['medical-instructions', 'conditionals'], d: 2, limit: 4,
      },
      {
        tmpl: 'Apply the cream {P} twice a day.', arTmpl: 'ضع الكريم {P_ar} مرتين في اليوم.',
        slots: {
          P: [
            { en: 'on clean skin', ar: 'على بشرة نظيفة' }, { en: 'on the small burn', ar: 'على الحرق الصغير' },
            { en: 'before bedtime', ar: 'قبل النوم' }, { en: 'on dry hands', ar: 'على اليدين الجافتين' },
          ],
        },
        tags: ['medical-instructions', 'imperatives'], d: 2, limit: 4,
      },
      {
        tmpl: 'You should not {V} while taking this {M}.', arTmpl: 'يجب ألا {V_ar} أثناء تناول هذا {M_ar}.',
        slots: {
          V: [
            { en: 'drive', ar: 'تقود' }, { en: 'drink coffee', ar: 'تشرب القهوة' },
            { en: 'lift heavy boxes', ar: 'ترفع صناديق ثقيلة' }, { en: 'eat salty food', ar: 'تأكل طعاما مالحا' },
          ],
          M: [ { en: 'syrup', ar: 'الشراب' }, { en: 'medicine', ar: 'الدواء' } ],
        },
        tags: ['medical-instructions', 'warnings'], d: 2, limit: 8,
      },
    ],
    fills: [
      { en: 'Take one tablet after meals.', ar: 'خذ قرصا واحدا بعد الوجبات.', word: 'tablet', hint: 'قرص' },
      { en: 'Avoid heavy lifting for two weeks.', ar: 'تجنب رفع الأشياء الثقيلة لمدة أسبوعين.', word: 'heavy', hint: 'رفع الأشياء الثقيلة' },
      { en: 'Come back next week for a quick check.', ar: 'عد الأسبوع القادم لفحص سريع.', word: 'check', hint: 'فحص' },
      { en: 'Do you understand the instructions, Mr. Sami?', ar: 'هل فهمت التعليمات يا أستاذ سامي؟', word: 'understand', hint: 'يفهم' },
      { en: 'You should not drive after taking this syrup.', ar: 'يجب ألا تقود بعد تناول هذا الشراب.', word: 'drive', hint: 'يقود' },
      { en: 'Take it on an empty stomach in the morning.', ar: 'خذه على معدة فارغة في الصباح.', word: 'stomach', hint: 'معدة' },
      { en: 'Has your pain improved since last week?', ar: 'هل تحسن ألمك منذ الأسبوع الماضي؟', word: 'improved', hint: 'تحسن' },
      { en: 'Complete the full course, even if you feel well.', ar: 'أكمل الجرعة كاملة حتى لو شعرت أنك بخير.', word: 'course', hint: 'جرعة كاملة' },
    ],
    orders: [
      { en: 'Take one tablet before breakfast, please.', ar: 'خذ قرصا واحدا قبل الفطور من فضلك.' },
      { en: 'Listen carefully to the doctor\'s instructions.', ar: 'استمع بعناية لتعليمات الطبيب.' },
      { en: 'Do not stop the medicine when you feel better.', ar: 'لا توقف الدواء عندما تشعر بتحسن.' },
      { en: 'If the fever returns, call us immediately.', ar: 'إذا عادت الحمى، اتصل بنا فورا.' },
      { en: 'Apply the cream on the rash twice a day.', ar: 'ضع الكريم على الطفح مرتين في اليوم.' },
      { en: 'Please come back next week, Mr. Sami.', ar: 'من فضلك عد الأسبوع القادم يا أستاذ سامي.' },
    ],
    mc: [
      { question: '"Twice a day for five days" means:', options: ['مرتين يوميا لمدة خمسة أيام', 'مرتين في الأسبوع', 'خمس مرات في اليوم', 'قرص كل خمسة أيام'], answerIndex: 0, ar: 'ما معنى twice a day for five days؟' },
      { question: 'Take one tablet after meals. When?', options: ['After you eat', 'Before you sleep only', 'Once a week', 'With no water'], answerIndex: 0, ar: 'خذ قرصا بعد الوجبات، متى؟' },
      { question: 'The doctor says "avoid heavy lifting". You should not:', options: ['carry heavy boxes', 'drink water', 'rest at home', 'walk slowly'], answerIndex: 0, ar: 'قال الطبيب تجنب رفع الثقيل، يجب ألا:' },
      { question: 'Which sentence is a doctor instruction?', options: ['Take the tablets twice a day.', 'I like the tablets.', 'The tablets are white.', 'Where is the box?'], answerIndex: 0, ar: 'أي جملة من تعليمات الطبيب؟' },
      { question: 'You feel better after two days. You should:', options: ['complete the full course', 'stop taking the medicine', 'take three tablets at once', 'give the medicine away'], answerIndex: 0, ar: 'شعرت بتحسن بعد يومين، يجب أن:' },
    ],
  },

  /* ================= lesson 145 — Health and Emergency Review ================= */
  {
    num: 145,
    tags: ['review', 'health'],
    objectives: [
      'Recycle Section 6 health and emergency vocabulary',
      'Give advice, warnings and urgent instructions',
      'Ask and answer about past health problems',
    ],
    grammar: {
      explanation: 'This review mixes the language of Section 6: appointments, symptoms, medicine, emergencies and care. Use should and must for advice and rules: "You should rest", "You must take the tablets". Use the present perfect for results: "Has your pain improved?". If-clauses connect problems and actions: "If the pain does not stop, see a doctor". In emergencies, speak short and clear: give the address, the problem and the number. Health language lives in small kind sentences, so practice them every day.',
      explanationAr: 'هذه المراجعة تجمع لغة القسم السادس: المواعيد والأعراض والدواء والطوارئ والرعاية. استخدم should وmust للنصيحة والقواعد: You should rest، You must take the tablets. واستخدم المضارع التام للنتائج: Has your pain improved؟. وجمل if تربط المشكلة بالفعل: If the pain does not stop, see a doctor. وفي الطوارئ تحدث باختصار ووضوح: أعط العنوان والمشكلة والرقم. ولغة الصحة تعيش في جمل صغيرة لطيفة، فتدرب عليها كل يوم.',
      examples: [
        { en: 'If the pain does not stop, you must see a doctor.', ar: 'إذا لم يتوقف الألم، يجب أن تذهب إلى الطبيب.' },
        { en: 'Has your back pain improved this week?', ar: 'هل تحسن ألم ظهرك هذا الأسبوع؟' },
        { en: 'Follow the doctor\'s instructions and finish all the tablets.', ar: 'اتبع تعليمات الطبيب وأكمل كل الأقراص.' },
      ],
    },
    vocabulary: [
      { word: 'appointment', meaningAr: 'موعد', example: 'Please call and change my appointment.' },
      { word: 'symptoms', meaningAr: 'أعراض', example: 'Describe your symptoms clearly to the doctor.' },
      { word: 'insurance', meaningAr: 'تأمين', example: 'The insurance paid most of the bill.' },
      { word: 'emergency', meaningAr: 'طوارئ', example: 'Keep the emergency number on the fridge.' },
      { word: 'first aid', meaningAr: 'إسعافات أولية', example: 'A first aid course helps the whole family.' },
      { word: 'sick leave', meaningAr: 'إجازة مرضية', example: 'He asked for two days of sick leave.' },
      { word: 'ambulance', meaningAr: 'سيارة إسعاف', example: 'An ambulance came for our neighbor.' },
      { word: 'pharmacist', meaningAr: 'صيدلي', example: 'The pharmacist explained the dose to me.' },
      { word: 'instructions', meaningAr: 'تعليمات', example: 'Good instructions keep patients safe.' },
      { word: 'recover', meaningAr: 'يتعافى', example: 'Grandfather needs two weeks to recover.' },
      { word: 'healthy habits', meaningAr: 'عادات صحية', example: 'Sleep and water are healthy habits.' },
      { word: 'care', meaningAr: 'رعاية', example: 'Good care makes patients feel safe.' },
    ],
    scenario: [
      { en: 'My dental appointment is on Thursday at five.', ar: 'موعد طبيب الأسنان لدي يوم الخميس في الخامسة.', d: 2 },
      { en: 'She has had a bad cough since last Friday.', ar: 'لديها كحة سيئة منذ الجمعة الماضية.', d: 2 },
      { en: 'If the pain does not stop, you must see a doctor.', ar: 'إذا لم يتوقف الألم، يجب أن تذهب إلى الطبيب.', d: 2 },
      { en: 'We have called the insurance company about the bill.', ar: 'اتصلنا بشركة التأمين بشأن الفاتورة.', d: 2 },
      { en: 'He reported the stolen phone at the police station yesterday.', ar: 'بلغ عن الهاتف المسروق في مركز الشرطة أمس.', d: 2 },
      { en: 'When there is smoke, stay low and leave the building.', ar: 'عند وجود دخان، انخفض وغادر المبنى.', d: 2 },
      { en: 'You should talk to someone if you feel sad for weeks.', ar: 'يجب أن تتحدث مع أحد إذا شعرت بالحزن لأسابيع.', d: 2 },
      { en: 'Walking for thirty minutes every day is a healthy habit.', ar: 'المشي ثلاثين دقيقة كل يوم عادة صحية.', d: 2 },
      { en: 'Try to sleep at least seven hours every night.', ar: 'حاول أن تنام سبع ساعات على الأقل كل ليلة.', d: 1 },
      { en: 'Fresh vegetables and water are better than fast food.', ar: 'الخضروات الطازجة والماء أفضل من الوجبات السريعة.', d: 1 },
      { en: 'Put a bandage on the cut and keep it dry.', ar: 'ضع ضمادة على الجرح وأبقه جافا.', d: 1 },
      { en: 'My manager accepted my sick leave for two days.', ar: 'وافق مديري على إجازتي المرضية ليومين.', d: 2 },
      { en: 'Keep your sick child at home until the fever stops.', ar: 'ابق طفلك المريض في المنزل حتى تتوقف الحمى.', d: 1 },
      { en: 'Remind grandma to take her medicine after dinner.', ar: 'ذكر الجدة بأن تتناول دواءها بعد العشاء.', d: 1 },
      { en: 'The ambulance reached us in eight minutes.', ar: 'وصلت إلينا سيارة الإسعاف في ثماني دقائق.', d: 2 },
      { en: 'Ask the pharmacist if the cream is safe for babies.', ar: 'اسأل الصيدلي إن كان الكريم آمنا للرضع.', d: 2 },
      { en: 'Follow the doctor\'s instructions and finish all the tablets.', ar: 'اتبع تعليمات الطبيب وأكمل كل الأقراص.', d: 1 },
      { en: 'Has your back pain improved this week?', ar: 'هل تحسن ألم ظهرك هذا الأسبوع؟', d: 2 },
      { en: 'How many hours did you sleep last night?', ar: 'كم ساعة نمت الليلة الماضية؟', d: 1 },
      { en: 'Where should we keep the first-aid kit at home?', ar: 'أين يجب أن نحتفظ بحقيبة الإسعافات في المنزل؟', d: 2 },
      { en: 'Doctor, can I go back to work next week?', ar: 'يا دكتور، هل أستطيع العودة إلى العمل الأسبوع القادم؟', d: 1 },
      { en: 'Yes, if you complete the full course first.', ar: 'نعم، إذا أكملت الجرعة كاملة أولا.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'You should {V} if the pain {C}.', arTmpl: 'ينبغي أن {V_ar} إذا {C_ar}.',
        slots: {
          V: [
            { en: 'go to the doctor', ar: 'تذهب إلى الطبيب' }, { en: 'rest at home', ar: 'ترتاح في المنزل' },
            { en: 'drink warm water', ar: 'تشرب ماء دافئا' }, { en: 'call the clinic', ar: 'تتصل بالعيادة' },
          ],
          C: [
            { en: 'gets worse', ar: 'ازداد الألم سوءا' }, { en: 'does not stop', ar: 'لم يتوقف الألم' },
            { en: 'comes back', ar: 'عاد الألم' }, { en: 'keeps you awake', ar: 'منعك الألم من النوم' },
          ],
        },
        tags: ['review', 'health', 'conditionals'], d: 2, limit: 16,
      },
      {
        tmpl: 'Buy the {M} from the pharmacy {T}.', arTmpl: 'اشتر {M_ar} من الصيدلية {T_ar}.',
        slots: {
          M: [
            { en: 'syrup', ar: 'الشراب' }, { en: 'pills', ar: 'الحبوب' },
            { en: 'cream', ar: 'الكريم' }, { en: 'vitamins', ar: 'الفيتامينات' },
          ],
          T: [
            { en: 'after work', ar: 'بعد العمل' }, { en: 'in the morning', ar: 'في الصباح' },
            { en: 'on your way home', ar: 'في طريقك إلى المنزل' }, { en: 'before noon', ar: 'قبل الظهر' },
          ],
        },
        tags: ['review', 'health', 'imperatives'], d: 1, limit: 16,
      },
      {
        tmpl: 'We need {N} quickly, {P}.', arTmpl: 'نحتاج {N_ar} بسرعة، {P_ar}.',
        slots: {
          N: [
            { en: 'an ambulance', ar: 'سيارة إسعاف' }, { en: 'a doctor', ar: 'طبيبا' },
            { en: 'a fire truck', ar: 'سيارة إطفاء' }, { en: 'a nurse', ar: 'ممرضة' },
          ],
          P: [
            { en: 'please', ar: 'من فضلك' }, { en: 'hurry', ar: 'أرجوك أسرع' },
            { en: 'right now', ar: 'الآن حالا' },
          ],
        },
        tags: ['review', 'health', 'emergency'], d: 2, limit: 12,
      },
      {
        tmpl: 'Has {S} taken {M} yet?', arTmpl: '{S_ar} {M_ar} بعد؟',
        slots: {
          S: [
            { en: 'he', ar: 'هل أخذ' }, { en: 'your father', ar: 'هل أخذ والدك' },
            { en: 'your grandfather', ar: 'هل أخذ جدك' }, { en: 'the boy', ar: 'هل أخذ الولد' },
          ],
          M: [
            { en: 'the medicine', ar: 'الدواء' }, { en: 'the syrup', ar: 'الشراب' },
            { en: 'the pills', ar: 'الحبوب' },
          ],
        },
        tags: ['review', 'health', 'present-perfect'], d: 2, limit: 12,
      },
      {
        tmpl: '{S} should {V} {N} hours every night.', arTmpl: 'يجب أن {V_ar} {S_ar} {N_ar} ساعات كل ليلة.',
        slots: {
          S: [
            { en: 'The children', ar: 'الأطفال' }, { en: 'The patients', ar: 'المرضى' },
            { en: 'The students', ar: 'الطلاب' }, { en: 'The workers', ar: 'العمال' },
          ],
          V: (x) => [{ en: 'sleep', ar: 'ينام' }],
          N: [
            { en: 'six', ar: 'ست' }, { en: 'seven', ar: 'سبع' }, { en: 'eight', ar: 'ثماني' },
          ],
        },
        tags: ['review', 'health', 'sleep'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'If the pain does not stop, you must see a doctor.', ar: 'إذا لم يتوقف الألم، يجب أن تذهب إلى الطبيب.', word: 'pain', hint: 'ألم' },
      { en: 'She has had a bad cough since last Friday.', ar: 'لديها كحة سيئة منذ الجمعة الماضية.', word: 'cough', hint: 'كحة' },
      { en: 'My manager accepted my sick leave for two days.', ar: 'وافق مديري على إجازتي المرضية ليومين.', word: 'leave', hint: 'إجازة' },
      { en: 'Put a bandage on the cut and keep it dry.', ar: 'ضع ضمادة على الجرح وأبقه جافا.', word: 'bandage', hint: 'ضمادة' },
      { en: 'The ambulance reached us in eight minutes.', ar: 'وصلت إلينا سيارة الإسعاف في ثماني دقائق.', word: 'reached', hint: 'وصل' },
      { en: 'Ask the pharmacist if the cream is safe for babies.', ar: 'اسأل الصيدلي إن كان الكريم آمنا للرضع.', word: 'safe', hint: 'آمن' },
      { en: 'Try to sleep at least seven hours every night.', ar: 'حاول أن تنام سبع ساعات على الأقل كل ليلة.', word: 'least', hint: 'على الأقل' },
      { en: 'Has your back pain improved this week?', ar: 'هل تحسن ألم ظهرك هذا الأسبوع؟', word: 'improved', hint: 'تحسن' },
      { en: 'The nurse checked my blood pressure twice.', ar: 'فحصت الممرضة ضغطي مرتين.', word: 'nurse', hint: 'ممرضة' },
      { en: 'Take your medicine with a full glass of water.', ar: 'تناول دواءك بكوب ماء كامل.', word: 'glass', hint: 'كوب' },
    ],
    orders: [
      { en: 'Please send an ambulance to the old market.', ar: 'من فضلك أرسل سيارة إسعاف إلى السوق القديم.' },
      { en: 'You should talk to someone if you feel sad.', ar: 'يجب أن تتحدث مع أحد إذا شعرت بالحزن.' },
      { en: 'Walk for thirty minutes every morning.', ar: 'امش ثلاثين دقيقة كل صباح.' },
      { en: 'Remind grandpa to take his medicine at night.', ar: 'ذكر الجد بأن يتناول دواءه ليلا.' },
      { en: 'Follow the instructions and rest for two days.', ar: 'اتبع التعليمات وارتاح يومين.' },
      { en: 'Did you sleep well in the new bed?', ar: 'هل نمت جيدا في السرير الجديد؟' },
    ],
    mc: [
      { question: 'Which sentence describes symptoms?', options: ['I have a headache and a fever.', 'I have two brothers.', 'The bus leaves at six.', 'I like the blue shirt.'], answerIndex: 0, ar: 'أي جملة تصف الأعراض؟' },
      { question: 'You cut your hand deeply. First you should:', options: ['clean it and put a bandage on it', 'eat a big meal', 'watch television', 'water the plants'], answerIndex: 0, ar: 'جرحت يدك بعمق، أولا يجب أن:' },
      { question: 'Where do you buy medicine?', options: ['at the pharmacy', 'at the bakery', 'at the barbershop', 'at the garage'], answerIndex: 0, ar: 'أين تشتري الدواء؟' },
      { question: '"Send an ambulance" means:', options: ['اطلب سيارة إسعاف', 'اشتر سيارة', 'نظف السيارة', 'انتظر الحافلة'], answerIndex: 0, ar: 'ما معنى Send an ambulance؟' },
      { question: 'The doctor wrote instructions. You should:', options: ['follow them carefully', 'forget them at home', 'give them to a friend', 'lose them quickly'], answerIndex: 0, ar: 'كتب الطبيب تعليمات، يجب أن:' },
      { question: 'You feel sad and worried for many weeks. You should:', options: ['talk to a doctor or someone you trust', 'keep it secret forever', 'shout at people', 'eat only sweets'], answerIndex: 0, ar: 'تشعر بالحزن والقلق لأسابيع، يجب أن:' },
    ],
  },
];
