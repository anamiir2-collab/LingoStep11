/* ============================================================
   v2 section data — s07-c2.js
   Relationships & Social Communication · lessons 164–166
   (Celebrations and Special Occasions · Communicating with
    Children · Interacting with Neighbors)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

/* child instructions paired with a short reason (lesson 165) */
const SHOULD_V = [
  { en: 'share your toys', ar: 'تشارك ألعابك', r: { en: 'your friends will be happy', ar: 'سيكون أصدقاؤك سعداء' } },
  { en: 'be gentle with the cat', ar: 'تتعامل بلطف مع القطة', r: { en: 'she is small', ar: 'هي صغيرة' } },
  { en: 'help your sister', ar: 'تساعد أختك', r: { en: 'she is younger than you', ar: 'هي أصغر منك' } },
  { en: 'say sorry', ar: 'تعتذر', r: { en: 'everyone makes mistakes', ar: 'الجميع يخطئ' } },
  { en: 'listen to your teacher', ar: 'تستمع إلى معلمك', r: { en: 'you will learn more', ar: 'ستتعلم أكثر' } },
];

/* praise verbs paired with the finished thing (lesson 165) */
const PRAISE_V = [
  { en: 'finished', ar: 'أنهيت', o: { en: 'your homework', ar: 'واجبك' } },
  { en: 'cleaned', ar: 'نظفت', o: { en: 'your room', ar: 'غرفتك' } },
  { en: 'shared', ar: 'شاركت', o: { en: 'your toys', ar: 'ألعابك' } },
  { en: 'helped', ar: 'ساعدت', o: { en: 'your sister', ar: 'أختك' } },
  { en: 'washed', ar: 'غسلت', o: { en: 'the dishes', ar: 'الأطباق' } },
];

export const lessons = [

  /* ================= lesson 164 — Celebrations and Special Occasions ================= */
  {
    num: 164,
    tags: ['celebrations', 'occasions'],
    objectives: [
      'Congratulate people on happy occasions',
      'Wish someone a happy birthday, Eid or Christmas',
      'Respond to invitations and good wishes',
    ],
    grammar: {
      explanation: 'Use short exclamations for special occasions: "Congratulations!", "Happy birthday!", "Eid Mubarak!" and "Merry Christmas!". For a wedding or an engagement we say "Congratulations on your engagement!". To invite people, say "You are invited to our party" or "Here is an invitation". Respond to good wishes with "Thank you" and repeat the wish back: "Same to you!", "Eid Mubarak to you too!". Talk about future plans with will: "We will celebrate on Saturday", "I will come with my wife".',
      explanationAr: 'استخدم تعجبات قصيرة في المناسبات: Congratulations! وHappy birthday! وEid Mubarak! وMerry Christmas!. وللعرس أو الخطوبة نقول Congratulations on your engagement!. ولدعوة الناس قل You are invited to our party أو Here is an invitation. ورد على التهاني بـ Thank ثم أعدها لصاحبها: Same to you! وEid Mubarak to you too!. وتحدث عن الخطط المستقبلية بـ will: We will celebrate on Saturday، I will come with my wife.',
      examples: [
        { en: 'Congratulations on your graduation!', ar: 'مبروك تخرجك!' },
        { en: 'Eid Mubarak to you and your family!', ar: 'عيد مبارك لك ولعائلتك!' },
        { en: 'We will celebrate on Saturday.', ar: 'سنحتفل يوم السبت.' },
      ],
    },
    vocabulary: [
      { word: 'congratulations', meaningAr: 'مبروك / تهانينا', example: 'Congratulations on your engagement!', ipa: 'kənˌɡrætʃʊˈleɪʃənz' },
      { word: 'celebrate', meaningAr: 'يحتفل', example: 'We will celebrate on Saturday.' },
      { word: 'invitation', meaningAr: 'دعوة', example: 'Thank you for the invitation.' },
      { word: 'engagement', meaningAr: 'خطوبة', example: 'The engagement party is on Friday.' },
      { word: 'wedding', meaningAr: 'عرس / زفاف', example: 'The wedding is in a big hotel.' },
      { word: 'party', meaningAr: 'حفلة', example: 'The party starts at seven.' },
      { word: 'cake', meaningAr: 'كعكة', example: 'She made a big birthday cake.' },
      { word: 'gift', meaningAr: 'هدية', example: 'I bought a gift for you.' },
      { word: 'guest', meaningAr: 'ضيف', example: 'We invited fifty guests.' },
      { word: 'wish', meaningAr: 'يتمنى', example: 'I wish you a happy life.' },
      { word: 'special', meaningAr: 'خاص', example: 'Today is a very special day.' },
      { word: 'balloon', meaningAr: 'بالون', example: 'The children love the balloons.' },
    ],
    scenario: [
      { en: 'Happy birthday, dear Lina!', ar: 'عيد ميلاد سعيد يا لينا الغالية!', d: 1 },
      { en: 'Thank you so much!', ar: 'شكرا جزيلا!', d: 1 },
      { en: 'How old are you today?', ar: 'كم عمرك اليوم؟', d: 1 },
      { en: 'I am twenty today.', ar: 'عمري عشرون عاما اليوم.', d: 1 },
      { en: 'Congratulations on your graduation!', ar: 'مبروك تخرجك!', d: 1 },
      { en: 'Thank you, I studied very hard.', ar: 'شكرا، درست بجد تام.', d: 1 },
      { en: 'My sister is getting married next month.', ar: 'أختي ستتزوج الشهر القادم.', d: 2 },
      { en: 'Really? Congratulations to her!', ar: 'حقا؟ مبروك لها!', d: 2 },
      { en: 'Here is an invitation to the wedding.', ar: 'هذه دعوة إلى العرس.', d: 2 },
      { en: 'The engagement party is on Friday.', ar: 'حفلة الخطوبة يوم الجمعة.', d: 2 },
      { en: 'I will come with my wife.', ar: 'سآتي مع زوجتي.', d: 2 },
      { en: 'We will bring a special gift.', ar: 'سنحضر هدية خاصة.', d: 2 },
      { en: 'Eid Mubarak, my friend!', ar: 'عيد مبارك يا صديقي!', d: 3 },
      { en: 'Eid Mubarak to you and your family!', ar: 'عيد مبارك لك ولعائلتك!', d: 3 },
      { en: 'Merry Christmas, Mr. Brown!', ar: 'ميلاد مجيد يا سيد براون!', d: 3 },
      { en: 'Merry Christmas to you too.', ar: 'ميلاد مجيد لك أيضا.', d: 3 },
      { en: 'The cake is delicious, well done!', ar: 'الكعكة لذيذة، أحسنتم!', d: 3 },
      { en: 'What a wonderful party!', ar: 'يا لها من حفلة رائعة!', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Congratulations on your {O}!', arTmpl: 'مبروك على {O_ar}!',
        slots: {
          O: [
            { en: 'graduation', ar: 'التخرج' }, { en: 'engagement', ar: 'الخطوبة' },
            { en: 'new job', ar: 'وظيفتك الجديدة' }, { en: 'new baby', ar: 'مولودك الجديد' },
            { en: 'success', ar: 'نجاحك' }, { en: 'new house', ar: 'بيتك الجديد' },
          ],
        },
        tags: ['celebrations'], d: 1, limit: 6,
      },
      {
        tmpl: '{W}, {P}!', arTmpl: '{W_ar} يا {P_ar}!',
        slots: {
          W: [
            { en: 'Happy birthday', ar: 'عيد ميلاد سعيد' }, { en: 'Eid Mubarak', ar: 'عيد مبارك' },
            { en: 'Merry Christmas', ar: 'ميلاد مجيد' }, { en: 'Happy New Year', ar: 'سنة جديدة سعيدة' },
            { en: 'Happy anniversary', ar: 'ذكرى زواج سعيدة' },
          ],
          P: B.NAMED_SING,
        },
        tags: ['celebrations', 'wishes'], d: 1, limit: 24,
      },
      {
        tmpl: 'We will {V} {T}.', arTmpl: 'سوف {V_ar} {T_ar}.',
        slots: {
          V: [
            { en: 'celebrate together', ar: 'نحتفل معا' }, { en: 'sing songs', ar: 'نغني أغنيات' },
            { en: 'cut the cake', ar: 'نقطع الكعكة' }, { en: 'open the gifts', ar: 'نفتح الهدايا' },
            { en: 'dance a little', ar: 'نرقص قليلا' }, { en: 'invite the guests', ar: 'ندعو الضيوف' },
          ],
          T: [
            { en: 'on Saturday', ar: 'يوم السبت' }, { en: 'after dinner', ar: 'بعد العشاء' },
            { en: 'at the party', ar: 'في الحفلة' }, { en: 'next week', ar: 'الأسبوع القادم' },
          ],
        },
        tags: ['celebrations', 'will-future'], d: 2, limit: 20,
      },
      {
        tmpl: 'Thank you for the {N}.', arTmpl: 'شكرا على {N_ar}.',
        slots: {
          N: [
            { en: 'invitation', ar: 'دعوة' }, { en: 'beautiful flowers', ar: 'الزهور الجميلة' },
            { en: 'cake', ar: 'كعكة' }, { en: 'card', ar: 'بطاقة' },
            { en: 'lovely party', ar: 'حفلة جميلة' },
          ],
        },
        tags: ['celebrations', 'thanks'], d: 1, limit: 5,
      },
    ],
    fills: [
      { en: 'Happy birthday, dear Lina!', ar: 'عيد ميلاد سعيد يا لينا الغالية!', word: 'birthday', hint: 'عيد ميلاد' },
      { en: 'Congratulations on your engagement!', ar: 'مبروك خطوبتك!', word: 'Congratulations', hint: 'تهانينا' },
      { en: 'Thank you for the invitation.', ar: 'شكرا على الدعوة.', word: 'invitation', hint: 'دعوة' },
      { en: 'We will celebrate on Saturday.', ar: 'سنحتفل يوم السبت.', word: 'celebrate', hint: 'يحتفل' },
      { en: 'She made a big birthday cake.', ar: 'صنعت كعكة عيد ميلاد كبيرة.', word: 'cake', hint: 'كعكة' },
      { en: 'Eid Mubarak to you and your family!', ar: 'عيد مبارك لك ولعائلتك!', word: 'Mubarak', hint: 'مبارك' },
      { en: 'I bought a gift for you.', ar: 'اشتريت لك هدية.', word: 'gift', hint: 'هدية' },
      { en: 'Today is a very special day.', ar: 'اليوم يوم خاص جدا.', word: 'special', hint: 'خاص' },
    ],
    orders: [
      { en: 'Happy birthday to you, Sara!', ar: 'عيد ميلاد سعيد لك يا سارة!' },
      { en: 'Congratulations on your graduation!', ar: 'مبروك تخرجك!' },
      { en: 'Thank you for the invitation.', ar: 'شكرا على الدعوة.' },
      { en: 'We will bring a gift for the baby.', ar: 'سنحضر هدية للمولود.' },
      { en: 'Eid Mubarak to you and your family!', ar: 'عيد مبارك لك ولعائلتك!' },
      { en: 'What a lovely party this evening!', ar: 'يا لها من حفلة جميلة هذا المساء!' },
    ],
    mc: [
      { question: 'Your friend has a new baby. You say:', options: ['Congratulations!', 'I am sorry.', 'Good night.', 'You are late.'], answerIndex: 0, ar: 'رفيقك أنجب مولودا جديدا، فتقول:' },
      { question: 'It is Eid. What do you say?', options: ['Eid Mubarak!', 'Happy late!', 'Bad Eid!', 'No Eid!'], answerIndex: 0, ar: 'إنه عيد، فماذا تقول؟' },
      { question: 'You receive a wedding invitation. You say:', options: ['Thank you for the invitation.', 'Where is my car?', 'I do not eat cake.', 'Close the door.'], answerIndex: 0, ar: 'وصلتك دعوة عرس، فتقول:' },
      { question: 'Someone says "Merry Christmas!" You answer:', options: ['Merry Christmas to you too.', 'Goodbye forever.', 'I am twenty.', 'It is raining.'], answerIndex: 0, ar: 'تمنى لك أحدهم Merry Christmas، فتجيب:' },
    ],
  },

  /* ================= lesson 165 — Communicating with Children ================= */
  {
    num: 165,
    tags: ['children', 'imperatives', 'parenting'],
    objectives: [
      'Encourage children with simple praise like "Well done!"',
      'Give clear, kind instructions and family rules',
      'Set routines like bedtime and tidy-up time',
    ],
    grammar: {
      explanation: 'With children, use short clear imperatives: "Share your toys", "Brush your teeth". For negative instructions use "Do not" or "Don\'t": "Do not shout inside". Soften instructions with "please" and praise good behavior: "Well done!", "Good job!", "I am proud of you". Use "should" for advice and "can" for permission: "You should say sorry", "You can watch it tomorrow". A short reason with "because" helps children understand: "...because your friends will be happy".',
      explanationAr: 'مع الأطفال استخدم أوامر قصيرة واضحة: Share your toys، Brush your teeth. وللنفي استخدم Do not أو Don\'t: Do not shout inside. ولوّن التعليمات بـ please وامدح السلوك الجيد: Well done! وGood job! وI am proud of you. واستخدم should للنصيحة وcan للإذن: You should say sorry، You can watch it tomorrow. والسبب القصير مع because يساعد الطفل على الفهم: ...because your friends will be happy.',
      examples: [
        { en: 'Well done! You finished your homework.', ar: 'أحسنت! أنهيت واجبك.' },
        { en: 'Do not shout inside, the baby is sleeping.', ar: 'لا تصرخ داخل البيت، الطفل نائم.' },
        { en: 'You should share your toys.', ar: 'ينبغي أن تشارك ألعابك.' },
      ],
    },
    vocabulary: [
      { word: 'well done', meaningAr: 'أحسنت', example: 'Well done, you finished your homework!' },
      { word: 'share', meaningAr: 'يشارك / يقتسم', example: 'Please share your toys with your sister.' },
      { word: 'gentle', meaningAr: 'لطيف / رقيق', example: 'Be gentle with the cat.' },
      { word: 'bedtime', meaningAr: 'وقت النوم', example: 'It is bedtime, brush your teeth.' },
      { word: 'tidy up', meaningAr: 'يرتب', example: 'Tidy up your room before dinner.' },
      { word: 'shout', meaningAr: 'يصرخ', example: 'Do not shout inside the house.' },
      { word: 'behave', meaningAr: 'يتصرف بشكل جيد', example: 'You behaved very well today.' },
      { word: 'brush', meaningAr: 'ينظف بالفرشاة', example: 'Brush your teeth before bed.' },
      { word: 'promise', meaningAr: 'يعد', example: 'I promise we will play tomorrow.' },
      { word: 'proud', meaningAr: 'فخور', example: 'I am really proud of you.' },
      { word: 'rule', meaningAr: 'قاعدة', example: 'This is a family rule.' },
      { word: 'finish', meaningAr: 'ينهي', example: 'Finish your plate first, please.' },
    ],
    scenario: [
      { en: 'Well done! You finished your homework so fast.', ar: 'أحسنت! أنهيت واجبك بهذه السرعة.', d: 1 },
      { en: 'Thank you, Mom! Can I play outside now?', ar: 'شكرا يا أمي! هل أستطيع اللعب في الخارج الآن؟', d: 1 },
      { en: 'Yes, but be gentle with the cat.', ar: 'نعم، لكن تعامل بلطف مع القطة.', d: 1 },
      { en: 'Do not pull her tail, she is small.', ar: 'لا تشد ذيلها، فهي صغيرة.', d: 1 },
      { en: 'Mom, Ahmed will not share the toys.', ar: 'أمي، أحمد لن يشارك الألعاب.', d: 2 },
      { en: 'Share your toys, please. You two are brothers.', ar: 'شارك ألعابك من فضلك. أنتما الاثنان أخوان.', d: 2 },
      { en: 'It is bedtime now, brush your teeth.', ar: 'حان وقت النوم، نظف أسنانك.', d: 2 },
      { en: 'But Mom, the film is not finished!', ar: 'لكن يا أمي، الفيلم لم ينته!', d: 2 },
      { en: 'You can watch it tomorrow, I promise.', ar: 'يمكنك مشاهدته غدا، أعدها لك.', d: 2 },
      { en: 'Should I tidy up my room too?', ar: 'هل أرتب غرفتي أيضا؟', d: 2 },
      { en: 'Yes, you should, and then I will read you a story.', ar: 'نعم ينبغي عليك، ثم سأقرأ لك قصة.', d: 3 },
      { en: 'You should always put dirty clothes in the basket.', ar: 'ينبغي أن تضع الملابس المتسخة دائما في السلة.', d: 3 },
      { en: 'Do not shout inside, the baby is sleeping.', ar: 'لا تصرخ داخل البيت، الطفل نائم.', d: 3 },
      { en: 'You behaved very well at grandma\'s house today.', ar: 'تصرفت اليوم بشكل جيد جدا في بيت الجدة.', d: 3 },
      { en: 'I am really proud of you, my love.', ar: 'أنا فخورة بك حقا يا حبيبي.', d: 3 },
      { en: 'Can we have ice cream after dinner?', ar: 'هل يمكن أن نأكل مثلجات بعد العشاء؟', d: 3 },
      { en: 'You can have a little, but not too much.', ar: 'يمكنك تناول القليل، لكن ليس كثيرا.', d: 3 },
      { en: 'Good night, sweet dreams!', ar: 'تصبح على خير، أحلاما سعيدة!', d: 3 },
    ],
    patterns: [
      {
        tmpl: '{A}, {P}.', arTmpl: '{A_ar} يا {P_ar}.',
        slots: {
          A: [
            { en: 'Brush your teeth', ar: 'نظف أسنانك' }, { en: 'Tidy your room', ar: 'رتب غرفتك' },
            { en: 'Wash your hands', ar: 'اغسل يديك' }, { en: 'Finish your plate', ar: 'أنهِ طبقك' },
            { en: 'Put away your toys', ar: 'أوضح ألعابك' }, { en: 'Do your homework', ar: 'اعمل واجبك' },
          ],
          P: B.NAMED_SING,
        },
        tags: ['children', 'imperatives'], d: 1, limit: 24,
      },
      {
        tmpl: 'Do not {V}, {P}.', arTmpl: 'لا {V_ar} يا {P_ar}.',
        slots: {
          V: [
            { en: 'shout inside', ar: 'تصرخ داخل البيت' }, { en: 'touch the oven', ar: 'تلمس الفرن' },
            { en: 'open the door', ar: 'تفتح الباب' }, { en: 'wake the baby', ar: 'توقظ الطفل' },
            { en: 'jump on the sofa', ar: 'تقفز على الأريكة' }, { en: 'eat more candy', ar: 'تأكل المزيد من الحلوى' },
          ],
          P: B.NAMED_SING,
        },
        tags: ['children', 'negative-imperative'], d: 2, limit: 24,
      },
      {
        tmpl: 'You should {V} because {R}.', arTmpl: 'ينبغي أن {V_ar} لأن {R_ar}.',
        slots: {
          V: SHOULD_V,
          R: (x) => [x.V.r],
        },
        tags: ['children', 'should-advice'], d: 2, limit: 5,
      },
      {
        tmpl: 'Well done! You {V} {O}.', arTmpl: 'أحسنت! لقد {V_ar} {O_ar}.',
        slots: {
          V: PRAISE_V,
          O: (x) => [x.V.o],
        },
        tags: ['children', 'praise'], d: 1, limit: 5,
      },
    ],
    fills: [
      { en: 'Well done, you finished your homework!', ar: 'أحسنت، أنهيت واجبك!', word: 'done', hint: 'أحسنت' },
      { en: 'Share your toys with your sister, please.', ar: 'شارك ألعابك مع أختك من فضلك.', word: 'Share', hint: 'يشارك' },
      { en: 'Be gentle with the cat.', ar: 'كن لطيفا مع القطة.', word: 'gentle', hint: 'لطيف' },
      { en: 'It is bedtime, brush your teeth.', ar: 'حان وقت النوم، نظف أسنانك.', word: 'bedtime', hint: 'وقت النوم' },
      { en: 'Do not shout inside the house.', ar: 'لا تصرخ داخل البيت.', word: 'shout', hint: 'يصرخ' },
      { en: 'You should tidy up your room.', ar: 'ينبغي أن ترتب غرفتك.', word: 'tidy', hint: 'يرتب' },
      { en: 'I am really proud of you.', ar: 'أنا فخور بك حقا.', word: 'proud', hint: 'فخور' },
      { en: 'I promise we will play tomorrow.', ar: 'أعدك أننا سنلعب غدا.', word: 'promise', hint: 'يعد' },
    ],
    orders: [
      { en: 'Well done, you finished so fast!', ar: 'أحسنت، أنهيت بهذه السرعة!' },
      { en: 'Share your toys with your brother.', ar: 'شارك ألعابك مع أخيك.' },
      { en: 'It is bedtime now, brush your teeth.', ar: 'حان وقت النوم، نظف أسنانك.' },
      { en: 'Do not shout, the baby is sleeping.', ar: 'لا تصرخ، الطفل نائم.' },
      { en: 'You should always listen to your teacher.', ar: 'ينبغي أن تستمع إلى معلمك دائما.' },
      { en: 'I am really proud of you today.', ar: 'أنا فخور بك اليوم.' },
    ],
    mc: [
      { question: 'Your child cleaned his room. You say:', options: ['Well done!', 'Do not shout!', 'Go to bed now!', 'Stop it!'], answerIndex: 0, ar: 'نظف ابنك غرفته، فتقول له:' },
      { question: 'You want a child to stop shouting. You say:', options: ['Do not shout, please.', 'Shout louder, please.', 'Why you shout?', 'Shout is good.'], answerIndex: 0, ar: 'تريد من طفل أن يتوقف عن الصراخ، فتقول:' },
      { question: 'Choose the kind instruction:', options: ['Be gentle with the cat.', 'Pull the cat hard.', 'Throw the cat out.', 'Ignore the cat now.'], answerIndex: 0, ar: 'اختر التعليمة اللطيفة:' },
      { question: '"It is bedtime" means:', options: ['حان وقت النوم', 'وقت اللعب', 'وقت الطعام', 'وقت المدرسة'], answerIndex: 0, ar: 'ما معنى It is bedtime؟' },
    ],
  },

  /* ================= lesson 166 — Interacting with Neighbors ================= */
  {
    num: 166,
    tags: ['neighbors', 'politeness'],
    objectives: [
      'Greet neighbors in a friendly way',
      'Invite a neighbor for coffee and apologize for noise',
      'Receive packages and offer small help',
    ],
    grammar: {
      explanation: 'Be friendly and polite with neighbors. Greet them: "Good morning, neighbor!". Invite them with "We should have coffee sometime". Apologize for problems with "I am sorry about + noun": "I am sorry about the noise last night". Past simple works for what happened: "The music was too loud", "A package arrived for you". Offer or accept help: "Do you need help with those bags?", "Thank you, you are very kind".',
      explanationAr: 'كن وديا ومؤدبا مع الجيران. حيّهم: Good morning, neighbor!. وادعهم بـ We should have coffee sometime. واعتذر عن المشكلات بـ I am sorry about مع الاسم: I am sorry about the noise last night. واستخدم الماضي البسيط لما حدث: The music was too loud، A package arrived for you. واعرض المساعدة أو اقبلها: Do you need help with those bags؟ وThank you, you are very kind.',
      examples: [
        { en: 'Good morning, neighbor!', ar: 'صباح الخير يا جاري!' },
        { en: 'I am sorry about the noise last night.', ar: 'أنا آسف بشأن الضجيج الليلة الماضية.' },
        { en: 'We should have coffee sometime.', ar: 'ينبغي أن نشرب القهوة معا يوما ما.' },
      ],
    },
    vocabulary: [
      { word: 'neighbor', meaningAr: 'جار', example: 'Our new neighbor is very polite.', ipa: 'ˈneɪbər' },
      { word: 'noise', meaningAr: 'ضجيج', example: 'I am sorry about the noise last night.' },
      { word: 'loud', meaningAr: 'عال / مرتفع', example: 'The music was too loud.' },
      { word: 'package', meaningAr: 'طرد', example: 'A package arrived for you today.' },
      { word: 'apologize', meaningAr: 'يعتذر', example: 'I apologized and she smiled.' },
      { word: 'deliver', meaningAr: 'يوصل (بريدا)', example: 'The driver will deliver the box tomorrow.' },
      { word: 'quiet', meaningAr: 'هادئ', example: 'The street is quiet at night.' },
      { word: 'wave', meaningAr: 'يلوح بيده', example: 'We wave at each other every morning.' },
      { word: 'courtyard', meaningAr: 'فناء', example: 'The children play in the courtyard.' },
      { word: 'stairs', meaningAr: 'الدروز / السلم', example: 'I saw her on the stairs.' },
      { word: 'knock', meaningAr: 'يطرق', example: 'Someone knocked on my door.' },
      { word: 'move in', meaningAr: 'ينتقل للسكن', example: 'They moved in last week.' },
    ],
    scenario: [
      { en: 'Good morning, neighbor!', ar: 'صباح الخير يا جاري!', d: 1 },
      { en: 'Good morning! Did you sleep well?', ar: 'صباح الخير! هل نمت جيدا؟', d: 1 },
      { en: 'Yes, thank you. And you?', ar: 'نعم شكرا لك. وأنت؟', d: 1 },
      { en: 'I slept very well, the street is quiet.', ar: 'نمت جيدا جدا، الشارع هادئ.', d: 1 },
      { en: 'I am sorry about the noise last night.', ar: 'أنا آسف بشأن الضجيج الليلة الماضية.', d: 1 },
      { en: 'We had a small family party.', ar: 'أقمنا حفلة عائلية صغيرة.', d: 1 },
      { en: 'No problem, it ended early.', ar: 'لا مشكلة، انتهت مبكرا.', d: 2 },
      { en: 'Next time I will knock on your door.', ar: 'في المرة القادمة سأطرق بابك.', d: 2 },
      { en: 'A package arrived for you this morning.', ar: 'وصل طرد لك هذا الصباح.', d: 2 },
      { en: 'I was not at home, so I took it.', ar: 'لم أكن في البيت، فأخذته أنا.', d: 2 },
      { en: 'Thank you, that is so nice of you.', ar: 'شكرا لك، هذا لطف كبير منك.', d: 2 },
      { en: 'We should have coffee sometime.', ar: 'ينبغي أن نشرب القهوة معا يوما ما.', d: 2 },
      { en: 'Come to our garden on Friday.', ar: 'تعال إلى حديقتنا يوم الجمعة.', d: 3 },
      { en: 'How do you like our building so far?', ar: 'كيف بدت لك عمارتنا حتى الآن؟', d: 3 },
      { en: 'It is nice, and the courtyard is big.', ar: 'إنها جميلة، والفناء واسع.', d: 3 },
      { en: 'Do you need help with those bags?', ar: 'هل تحتاج مساعدة في تلك الحقائب؟', d: 3 },
      { en: 'The elevator is broken today.', ar: 'المصعد معطل اليوم.', d: 3 },
      { en: 'I can carry the small one for you.', ar: 'أستطيع أن أحمل الصغيرة عنك.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I am sorry about {N}, {P}.', arTmpl: 'أنا آسف بشأن {N_ar} يا {P_ar}.',
        slots: {
          N: [
            { en: 'the noise last night', ar: 'الضجيج الليلة الماضية' }, { en: 'the loud music', ar: 'الموسيقى العالية' },
            { en: 'the mess in the hall', ar: 'الفوضى في الممر' }, { en: 'my late guests', ar: 'ضيوفي المتأخرين' },
            { en: 'the boxes in the hallway', ar: 'الصناديق في الممر' },
          ],
          P: B.NAMED_SING,
        },
        tags: ['neighbors', 'apologies'], d: 1, limit: 24,
      },
      {
        tmpl: 'We should have {D} sometime, {P}.', arTmpl: 'ينبغي أن نتناول {D_ar} معا يوما ما يا {P_ar}.',
        slots: {
          D: [
            { en: 'coffee', ar: 'قهوة' }, { en: 'tea', ar: 'شاي' },
            { en: 'lunch', ar: 'غداء' }, { en: 'dinner', ar: 'عشاء' },
          ],
          P: B.NAMED_SING,
        },
        tags: ['neighbors', 'invitations'], d: 1, limit: 20,
      },
      {
        tmpl: 'A package {V} for you {T}.', arTmpl: '{V_ar} طرد لك {T_ar}.',
        slots: {
          V: [
            { en: 'arrived', ar: 'وصل إليك' }, { en: 'is waiting', ar: 'ينتظرك' },
          ],
          T: [
            { en: 'this morning', ar: 'هذا الصباح' }, { en: 'at the door', ar: 'عند الباب' },
            { en: 'with the doorman', ar: 'مع البواب' }, { en: 'on the stairs', ar: 'على الدروز' },
          ],
        },
        tags: ['neighbors', 'packages'], d: 2, limit: 8,
      },
      {
        tmpl: 'Our new neighbors are very {A}.', arTmpl: 'جيراننا الجدد {A_ar} جدا.',
        slots: {
          A: [
            { en: 'polite', ar: 'مهذبون' }, { en: 'friendly', ar: 'ودودون' },
            { en: 'quiet', ar: 'هادئون' }, { en: 'helpful', ar: 'متعاونون' },
          ],
        },
        tags: ['neighbors', 'adjectives'], d: 1, limit: 4,
      },
    ],
    fills: [
      { en: 'Good morning, neighbor!', ar: 'صباح الخير يا جاري!', word: 'neighbor', hint: 'جار' },
      { en: 'I am sorry about the noise last night.', ar: 'أنا آسف بشأن الضجيج الليلة الماضية.', word: 'noise', hint: 'ضجيج' },
      { en: 'The music was too loud.', ar: 'كانت الموسيقى عالية جدا.', word: 'loud', hint: 'عال' },
      { en: 'A package arrived for you today.', ar: 'وصل طرد لك اليوم.', word: 'package', hint: 'طرد' },
      { en: 'I can keep it until you come.', ar: 'أستطيع إبقاءه حتى تأتي.', word: 'until', hint: 'حتى' },
      { en: 'We should have coffee sometime.', ar: 'ينبغي أن نشرب القهوة معا يوما ما.', word: 'coffee', hint: 'قهوة' },
      { en: 'The street is quiet at night.', ar: 'الشارع هادئ في الليل.', word: 'quiet', hint: 'هادئ' },
      { en: 'They moved in last week.', ar: 'انتقلوا للسكن الأسبوع الماضي.', word: 'moved', hint: 'انتقل' },
    ],
    orders: [
      { en: 'Good morning, neighbor! How are you?', ar: 'صباح الخير يا جاري! كيف حالك؟' },
      { en: 'I am sorry about the noise last night.', ar: 'أنا آسف بشأن الضجيج الليلة الماضية.' },
      { en: 'A package arrived for you this morning.', ar: 'وصل طرد لك هذا الصباح.' },
      { en: 'We should have coffee sometime.', ar: 'ينبغي أن نشرب القهوة معا يوما ما.' },
      { en: 'Do you need help with those bags?', ar: 'هل تحتاج مساعدة في تلك الحقائب؟' },
      { en: 'Next time I will knock on your door.', ar: 'في المرة القادمة سأطرق بابك.' },
    ],
    mc: [
      { question: 'You made noise last night. You say to your neighbor:', options: ['I am sorry about the noise.', 'Good night, sleep well.', 'Happy birthday!', 'Where is my key?'], answerIndex: 0, ar: 'أحدثت ضجيجا الليلة الماضية، فتقول لجارك:' },
      { question: 'Your neighbor\'s package arrived. You say:', options: ['A package arrived for you.', 'I lost your package.', 'Buy a new package.', 'Packages are heavy.'], answerIndex: 0, ar: 'وصل طرد جارك، فتقول له:' },
      { question: 'You want to be friendly with your neighbor. You say:', options: ['We should have coffee sometime.', 'Never talk to me.', 'Give me your food.', 'Your dog is ugly.'], answerIndex: 0, ar: 'تريد مودّة جارك، فتقول له:' },
      { question: '"quiet" means:', options: ['هادئ', 'عال', 'مزدحم', 'متسخ'], answerIndex: 0, ar: 'ما معنى quiet؟' },
    ],
  },
];
