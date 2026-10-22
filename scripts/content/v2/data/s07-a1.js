/* ============================================================
   v2 section data — s07-a1.js
   Relationships & Social Communication · lessons 146–149
   (small talk, starting a conversation, introducing two
   people, invitations)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 146 — Small Talk ================= */
  {
    num: 146,
    tags: ['small-talk', 'weather', 'weekend'],
    objectives: [
      'Start a short friendly chat',
      'Talk about the weather and the weekend',
      'Choose safe topics and avoid private ones',
    ],
    grammar: {
      explanation: 'Small talk is a short, friendly chat about safe topics. Good topics are the weather ("It is warm today"), the weekend ("Are you doing anything fun?"), food, hobbies and family news. When someone says "Nice weather today, is not it?", agree and add a small detail: "Yes, it is warm and sunny". Keep your answers short and friendly, then ask a question back. Avoid private topics like salary, politics, religion and age — they can make people uncomfortable. End the chat kindly: "It was nice talking to you".',
      explanationAr: 'الحديث القصير الودي يدور حول مواضيع آمنة. المواضيع الجيدة هي الطقس وعطلة نهاية الأسبوع والطعام والهوايات وأخبار العائلة. عندما يقول أحدهم Nice weather today فموافق وأضف تفصيلا صغيرا: Yes, it is warm and sunny. اجعل أجوبتك قصيرة وودية ثم اسأل سؤالا مقابلا. وتجنب المواضيع الخاصة كالراتب والسياسة والدين والعمر لأنها قد تسبب الإحراج. واختم الحديث بلطف: It was nice talking to you.',
      examples: [
        { en: 'It is warm today, is not it?', ar: 'الجو دافئ اليوم، أليس كذلك؟' },
        { en: 'What do you usually do on weekends?', ar: 'ماذا تفعل عادة في العطلات؟' },
        { en: 'Avoid salary and politics in small talk.', ar: 'تجنب الراتب والسياسة في الحديث القصير.' },
      ],
    },
    vocabulary: [
      { word: 'small talk', meaningAr: 'حديث قصير ودود', example: 'Small talk makes new friends.' },
      { word: 'chat', meaningAr: 'حديث', example: 'We had a short chat.' },
      { word: 'polite', meaningAr: 'مؤدب', example: 'He is always polite.' },
      { word: 'topic', meaningAr: 'موضوع', example: 'The weather is a safe topic.' },
      { word: 'avoid', meaningAr: 'يتجنب', example: 'Avoid private questions.' },
      { word: 'salary', meaningAr: 'راتب', example: 'Never ask about salary.' },
      { word: 'politics', meaningAr: 'سياسة', example: 'Politics is not safe small talk.' },
      { word: 'hobby', meaningAr: 'هواية', example: 'Reading is my hobby.' },
      { word: 'sunny', meaningAr: 'مشمس', example: 'It is sunny this morning.' },
      { word: 'rainy', meaningAr: 'ممطر', example: 'It was rainy yesterday.' },
      { word: 'weekend', meaningAr: 'عطلة نهاية الأسبوع', example: 'Have a nice weekend!' },
      { word: 'friendly', meaningAr: 'ودود', example: 'My neighbors are friendly.' },
    ],
    scenario: [
      { en: "Nice weather today, isn't it?", ar: 'طقس جميل اليوم، أليس كذلك؟', d: 1 },
      { en: 'Yes, it is warm and sunny.', ar: 'نعم، الجو دافئ ومشمس.', d: 1 },
      { en: 'It was rainy all week.', ar: 'كان الجو ممطرا طوال الأسبوع.', d: 2 },
      { en: 'I think the rain will stop tomorrow.', ar: 'أعتقد أن المطر سيتوقف غدا.', d: 2 },
      { en: 'Are you doing anything fun this weekend?', ar: 'هل ستفعل شيئا ممتعا في عطلة نهاية هذا الأسبوع؟', d: 1 },
      { en: 'Nothing special, I will visit my cousins.', ar: 'لا شيء مميز، سأزور أبناء عمي.', d: 1 },
      { en: 'We are having a picnic on Saturday.', ar: 'سنقيم نزهة يوم السبت.', d: 2 },
      { en: 'Do you like football?', ar: 'هل تحب كرة القدم؟', d: 1 },
      { en: 'I watch it with my brothers every week.', ar: 'أشاهده مع إخوتي كل أسبوع.', d: 2 },
      { en: 'Your children are very polite.', ar: 'أطفالكم مؤدبون جدا.', d: 2 },
      { en: 'Thank you, they are good kids.', ar: 'شكرا، إنهم أطفال جيدون.', d: 1 },
      { en: 'The coffee here is really good.', ar: 'القهوة هنا جيدة جدا.', d: 2 },
      { en: 'My neighbors are friendly people.', ar: 'جيراني أناس ودودون.', d: 2 },
      { en: 'Do not ask about salary or politics.', ar: 'لا تسأل عن الراتب أو السياسة.', d: 3 },
      { en: 'Salary is a private topic.', ar: 'الراتب موضوع خاص.', d: 3 },
      { en: 'Safe topics are weather, food and hobbies.', ar: 'المواضيع الآمنة هي الطقس والطعام والهوايات.', d: 3 },
      { en: 'Keep the chat short and friendly.', ar: 'اجعل الحديث قصيرا ووديا.', d: 3 },
      { en: 'It was nice talking to you!', ar: 'سعدت بالحديث معك!', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'It is {W} today.', arTmpl: 'الجو {W_ar} اليوم.',
        slots: { W: B.WEATHER_ADJ },
        tags: ['small-talk', 'weather'], d: 1, limit: 9,
      },
      {
        tmpl: 'It was {W} yesterday.', arTmpl: 'كان الجو {W_ar} أمس.',
        slots: { W: B.WEATHER_ADJ },
        tags: ['small-talk', 'weather', 'past'], d: 2, limit: 9,
      },
      {
        tmpl: 'Are you doing anything {T}?', arTmpl: 'هل ستفعل شيئا {T_ar}؟',
        slots: {
          T: [
            { en: 'this weekend', ar: 'في عطلة نهاية هذا الأسبوع' }, { en: 'on Saturday', ar: 'يوم السبت' },
            { en: 'tomorrow', ar: 'غدا' }, { en: 'next week', ar: 'الأسبوع القادم' },
            { en: 'on Friday', ar: 'يوم الجمعة' },
          ],
        },
        tags: ['small-talk', 'weekend', 'questions'], d: 1, limit: 5,
      },
      {
        tmpl: 'We are going to {V} {T}.', arTmpl: 'س{V_ar} {T_ar}.',
        slots: {
          V: [
            { en: 'visit my cousins', ar: 'نزور أبناء عمي' }, { en: 'cook lunch together', ar: 'نطبخ الغداء معا' },
            { en: 'watch a match', ar: 'نشاهد مباراة' }, { en: 'clean the garden', ar: 'ننظف الحديقة' },
            { en: 'meet our friends', ar: 'نلتقي بأصدقائنا' }, { en: 'have a picnic', ar: 'نقيم نزهة' },
          ],
          T: [
            { en: 'on Friday', ar: 'يوم الجمعة' }, { en: 'on Saturday', ar: 'يوم السبت' },
            { en: 'this weekend', ar: 'في عطلة نهاية هذا الأسبوع' }, { en: 'tomorrow', ar: 'غدا' },
          ],
        },
        tags: ['small-talk', 'weekend', 'going-to'], d: 2, limit: 14,
      },
    ],
    fills: [
      { en: 'It is warm and sunny today.', ar: 'الجو دافئ ومشمس اليوم.', word: 'sunny', hint: 'طقس' },
      { en: 'Are you doing anything fun this weekend?', ar: 'هل ستفعل شيئا ممتعا في عطلة نهاية هذا الأسبوع؟', word: 'weekend', hint: 'عطلة' },
      { en: 'I will visit my cousins on Saturday.', ar: 'سأزور أبناء عمي يوم السبت.', word: 'visit' },
      { en: 'Do not ask about salary or politics.', ar: 'لا تسأل عن الراتب أو السياسة.', word: 'politics', hint: 'موضوع محظور' },
      { en: 'The coffee here is really good.', ar: 'القهوة هنا جيدة جدا.', word: 'coffee' },
      { en: 'Keep the chat short and friendly.', ar: 'اجعل الحديث قصيرا ووديا.', word: 'chat', hint: 'حديث' },
      { en: 'My neighbors are friendly people.', ar: 'جيراني أناس ودودون.', word: 'friendly', hint: 'وصف' },
      { en: 'We are having a picnic on Saturday.', ar: 'سنقيم نزهة يوم السبت.', word: 'picnic' },
    ],
    orders: [
      { en: 'It was rainy all week.', ar: 'كان الجو ممطرا طوال الأسبوع.' },
      { en: 'I think the rain will stop tomorrow.', ar: 'أعتقد أن المطر سيتوقف غدا.' },
      { en: 'Safe topics are weather, food and hobbies.', ar: 'المواضيع الآمنة هي الطقس والطعام والهوايات.' },
      { en: 'Do you like football, my friend?', ar: 'هل تحب كرة القدم يا صديقي؟' },
      { en: 'Your children are very polite.', ar: 'أطفالكم مؤدبون جدا.' },
      { en: 'I watch it with my brothers every week.', ar: 'أشاهده مع إخوتي كل أسبوع.' },
    ],
    mc: [
      { question: 'Which topic is safe for small talk?', options: ['the weather', 'the salary', 'politics', 'religion'], answerIndex: 0, ar: 'أي موضوع آمن للحديث القصير؟' },
      { question: 'Someone says "Nice weather today!" You answer:', options: ['My salary is big.', 'I am thirty years old.', 'Yes, it is warm and sunny.', 'Go away now.'], answerIndex: 2, ar: 'قال أحدهم Nice weather today! فما ردك؟' },
      { question: 'What should you avoid asking about?', options: ['hobbies', 'salary', 'food', 'the weekend'], answerIndex: 1, ar: 'ما الذي يجب تجنبه في السؤال؟' },
      { question: '"It was nice talking to you" means:', options: ['سعدت بالحديث معك', 'أكره الحديث', 'الطقس سيء', 'أنا مشغول جدا'], answerIndex: 0, ar: 'ما معنى It was nice talking to you؟' },
    ],
  },

  /* ================= lesson 147 — Starting a Conversation ================= */
  {
    num: 147,
    tags: ['conversation', 'social', 'questions'],
    objectives: [
      'Open a conversation with a stranger',
      'Ask friendly easy questions',
      'Reply to compliments politely',
    ],
    grammar: {
      explanation: 'To start a conversation with a stranger, begin with a greeting and a light comment or question: "Hi, I do not think we have met", "Is this seat taken?" or "Do you come here often?". Compliments open doors too: "I love your bag!" — people answer "Thank you!". Smile, speak slowly and ask easy questions. If the person answers with one word only, they may be busy; say "Nice talking to you" and move on politely. Do not take a short answer personally.',
      explanationAr: 'لبدء محادثة مع شخص غريب ابدأ بتحية وتعليق خفيف أو سؤال: Hi, I do not think we have met أو Is this seat taken؟ أو Do you come here often؟. والمدح يفتح الأبواب أيضا: I love your bag! فيجيب الناس Thank you! ابتسم وتكلم ببطء واسأل أسئلة سهلة. وإذا أجاب الشخص بكلمة واحدة فقد يكون مشغولا، فقل Nice talking to you وانسحب بأدب ولا تأخذ الجواب المختصر على محمل شخصي.',
      examples: [
        { en: 'Hi, I do not think we have met before.', ar: 'أهلا، لا أظن أننا التقينا من قبل.' },
        { en: 'Is this seat taken? No, please sit.', ar: 'هل هذا المقعد محجوز؟ لا، اجلس من فضلك.' },
        { en: 'A smile makes starting a conversation easy.', ar: 'الابتسامة تجعل بدء المحادثة سهلا.' },
      ],
    },
    vocabulary: [
      { word: 'stranger', meaningAr: 'شخص غريب', example: 'I spoke to a stranger politely.' },
      { word: 'seat', meaningAr: 'مقعد', example: 'Is this seat taken?' },
      { word: 'taken', meaningAr: 'محجوز', example: 'Sorry, this place is taken.' },
      { word: 'crowded', meaningAr: 'مزدحم', example: 'The bus is crowded tonight.' },
      { word: 'shy', meaningAr: 'خجول', example: 'Do not be shy, say hello.' },
      { word: 'smile', meaningAr: 'ابتسامة', example: 'A smile is friendly.' },
      { word: 'often', meaningAr: 'غالبا / كثيرا', example: 'I come here often.' },
      { word: 'event', meaningAr: 'حدث / مناسبة', example: 'The event starts at seven.' },
      { word: 'line', meaningAr: 'طابور', example: 'The line is long today.' },
      { word: 'wait for', meaningAr: 'ينتظر', example: 'I wait for the bus here.' },
      { word: 'shop', meaningAr: 'متجر', example: 'It is from a small shop.' },
      { word: 'alone', meaningAr: 'وحده', example: 'I came alone today.' },
    ],
    scenario: [
      { en: "Hi, I don't think we've met.", ar: 'أهلا، لا أظن أننا التقينا من قبل.', d: 1 },
      { en: 'My name is Lina, and you?', ar: 'اسمي لينا، وأنت؟', d: 1 },
      { en: 'Is this seat taken?', ar: 'هل هذا المقعد محجوز؟', d: 1 },
      { en: 'No, it is free, please sit down.', ar: 'لا، إنه فارغ، تفضل بالجلوس.', d: 1 },
      { en: 'Do you come here often?', ar: 'هل تأتي هنا كثيرا؟', d: 1 },
      { en: 'Yes, I come every Friday.', ar: 'نعم، آتي كل جمعة.', d: 1 },
      { en: 'It is crowded here tonight.', ar: 'المكان مزدحم الليلة.', d: 2 },
      { en: 'Are you waiting for the bus too?', ar: 'هل تنتظر الحافلة أيضا؟', d: 2 },
      { en: 'Yes, the bus was late yesterday too.', ar: 'نعم، كانت الحافلة متأخرة أمس أيضا.', d: 1 },
      { en: 'I love your bag!', ar: 'أحب حقيبتك!', d: 2 },
      { en: 'Where is it from?', ar: 'من أين هي؟', d: 1 },
      { en: 'It is from a small shop.', ar: 'إنها من متجر صغير.', d: 2 },
      { en: 'Excuse me, are you a friend of Ahmed?', ar: 'عفوا، هل أنت صديق أحمد؟', d: 2 },
      { en: 'Yes, we work together.', ar: 'نعم، نعمل معا.', d: 1 },
      { en: 'Do not be shy, just say hello.', ar: 'لا تخجل، قل أهلا فقط.', d: 3 },
      { en: 'A smile and kind words are a good start.', ar: 'الابتسامة والكلمات الطيبة بداية جيدة.', d: 3 },
      { en: 'Start with the weather or the event.', ar: 'ابدأ بالطقس أو الحدث.', d: 3 },
      { en: 'I will get us some coffee.', ar: 'سأجلب لنا بعض القهوة.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Excuse me, is this {S} taken?', arTmpl: 'عفوا، هل {S_ar} محجوز؟',
        slots: {
          S: [
            { en: 'seat', ar: 'هذا المقعد' }, { en: 'chair', ar: 'هذا الكرسي' },
            { en: 'table', ar: 'هذه الطاولة' }, { en: 'place', ar: 'هذا المكان' },
            { en: 'computer', ar: 'هذا الحاسوب' }, { en: 'desk', ar: 'هذا المكتب' },
          ],
        },
        tags: ['conversation', 'questions'], d: 1, limit: 6,
      },
      {
        tmpl: 'Do you come here {F}?', arTmpl: 'هل تأتي هنا {F_ar}؟',
        slots: {
          F: [
            { en: 'every week', ar: 'كل أسبوع' }, { en: 'every Friday', ar: 'كل جمعة' },
            { en: 'with your family', ar: 'مع عائلتك' }, { en: 'on weekends', ar: 'في العطلات' },
            { en: 'alone', ar: 'وحدك' }, { en: 'in the morning', ar: 'في الصباح' },
          ],
        },
        tags: ['conversation', 'questions'], d: 1, limit: 6,
      },
      {
        tmpl: 'Are you waiting for {W}?', arTmpl: 'هل تنتظر {W_ar}؟',
        slots: {
          W: [
            { en: 'the bus', ar: 'الحافلة' }, { en: 'a taxi', ar: 'سيارة أجرة' },
            { en: 'your friend', ar: 'صديقك' }, { en: 'the train', ar: 'القطار' },
            { en: 'your mother', ar: 'أمك' }, { en: 'the doctor', ar: 'الطبيب' },
            { en: 'your turn', ar: 'دورك' }, { en: 'the results', ar: 'النتائج' },
          ],
        },
        tags: ['conversation', 'questions'], d: 2, limit: 8,
      },
      {
        tmpl: 'Say hello to {P} for me.', arTmpl: 'قل أهلا ل{P_ar} مني.',
        slots: { P: B.NAMED_SING },
        tags: ['conversation', 'greetings'], d: 2, limit: 8,
      },
      {
        tmpl: 'It is crowded here {T}.', arTmpl: 'المكان مزدحم هنا {T_ar}.',
        slots: {
          T: [
            { en: 'today', ar: 'اليوم' }, { en: 'on Fridays', ar: 'أيام الجمعة' },
            { en: 'this morning', ar: 'هذا الصباح' }, { en: 'in summer', ar: 'في الصيف' },
          ],
        },
        tags: ['conversation', 'places'], d: 2, limit: 4,
      },
    ],
    fills: [
      { en: 'Excuse me, is this window seat taken?', ar: 'عفوا، هل هذا المقعد قرب النافذة محجوز؟', word: 'taken', hint: 'محجوز' },
      { en: 'Do not be shy, just say hello.', ar: 'لا تخجل، قل أهلا فقط.', word: 'shy', hint: 'خجول' },
      { en: 'I come to this cafe every Friday.', ar: 'آتي إلى هذا المقهى كل جمعة.', word: 'every' },
      { en: 'The bus was late yesterday too.', ar: 'كانت الحافلة متأخرة أمس أيضا.', word: 'late' },
      { en: 'I love your bag, it is beautiful.', ar: 'أحب حقيبتك، إنها جميلة.', word: 'beautiful' },
      { en: 'Are you waiting for a friend?', ar: 'هل تنتظر صديقا؟', word: 'waiting' },
      { en: 'A smile and kind words are a good start.', ar: 'الابتسامة والكلمات الطيبة بداية جيدة.', word: 'smile', hint: 'ابتسامة' },
      { en: 'I will get us some coffee.', ar: 'سأجلب لنا بعض القهوة.', word: 'coffee' },
    ],
    orders: [
      { en: 'Is this seat taken, my friend?', ar: 'هل هذا المقعد محجوز يا صديقي؟' },
      { en: 'Do you come here often, Sara?', ar: 'هل تأتي هنا كثيرا يا سارة؟' },
      { en: 'The bus was late again yesterday.', ar: 'كانت الحافلة متأخرة أمس مجددا.' },
      { en: 'Say hello to your family for me.', ar: 'قل أهلا لعائلتك مني.' },
      { en: 'I will get us some coffee, please.', ar: 'سأجلب لنا بعض القهوة من فضلك.' },
      { en: 'Start with the weather or the event.', ar: 'ابدأ بالطقس أو الحدث.' },
    ],
    mc: [
      { question: 'You want to sit next to a stranger. You ask:', options: ['Is this seat taken?', 'What is your salary?', 'Go away, please!', 'How old are you?'], answerIndex: 0, ar: 'تريد الجلوس بجانب شخص غريب، فتسأل:' },
      { question: 'A good first sentence is:', options: ["Hi, I don't think we've met.", 'Give me your phone.', 'You are late again!', 'My house is big.'], answerIndex: 0, ar: 'أي جملة جيدة للبداية؟' },
      { question: '"Do you come here often?" is:', options: ['a friendly question', 'an angry order', 'a sad goodbye', 'a math problem'], answerIndex: 0, ar: 'ما نوع السؤال Do you come here often؟' },
      { question: 'Someone says "I love your bag!" You say:', options: ['Thank you!', 'No, it is not.', 'My name is Omar.', 'Good night.'], answerIndex: 0, ar: 'قال أحدهم I love your bag! فما ردك؟' },
    ],
  },

  /* ================= lesson 148 — Introducing Two People ================= */
  {
    num: 148,
    tags: ['introductions', 'social', 'people'],
    objectives: [
      'Introduce two people to each other',
      'Add one line about each person',
      'Ask if two people have met before',
    ],
    grammar: {
      explanation: 'To introduce two people, say the first name, then "this is" and the second name: "Omar, this is Sara". Add one line about the person: "Sara works with me" or "She is my cousin". If you are not sure they know each other, ask "Have you two met?". Each person then says "Pleased to meet you" or "Nice to meet you too". After that, help the talk start: "How do you two know each other?" keeps both people speaking.',
      explanationAr: 'لتعريف شخصين قل الاسم الأول ثم this is ثم الاسم الثاني: Omar, this is Sara. وأضف سطرا عن الشخص: Sara works with me أو She is my cousin. وإن لم تكن متأكدا من معرفتهما بعضهما اسأل Have you two met؟. ثم يقول كل منهما Pleased to meet you أو Nice to meet you too. وبعدها ساعد في بدء الحديث بسؤال: How do you two know each other؟ ليشارك الطرفان في الكلام.',
      examples: [
        { en: 'Ahmed, this is my colleague Lina.', ar: 'أحمد، هذه زميلتي لينا.' },
        { en: 'Have you two met before? I think not.', ar: 'هل تعرفتما من قبل؟ لا أظن.' },
        { en: 'Pleased to meet you too, Ahmed.', ar: 'مسرور بلقائك أيضا يا أحمد.' },
      ],
    },
    vocabulary: [
      { word: 'introduce', meaningAr: 'يعرّف', example: 'Let me introduce my friend.' },
      { word: 'colleague', meaningAr: 'زميل عمل', example: 'Lina is my colleague.' },
      { word: 'each other', meaningAr: 'بعضهم البعض', example: 'They know each other well.' },
      { word: 'met', meaningAr: 'التقى', example: 'Have you two met?' },
      { word: 'team', meaningAr: 'فريق', example: 'We are on the same team.' },
      { word: 'cousin', meaningAr: 'ابن العم / الخال', example: 'Ahmed, meet my cousin.' },
      { word: 'moved', meaningAr: 'انتقل', example: 'He moved to our city.' },
      { word: 'both', meaningAr: 'كلاهما', example: 'Talk to both of them.' },
      { word: 'glad', meaningAr: 'مسرور', example: 'I am glad to be here.' },
      { word: 'together', meaningAr: 'معا', example: 'We work together.' },
      { word: 'hospital', meaningAr: 'مستشفى', example: 'She works at the hospital.' },
      { word: 'before', meaningAr: 'من قبل / قبل', example: 'We met before, in Cairo.' },
    ],
    scenario: [
      { en: 'Omar, this is Sara.', ar: 'عمر، هذه سارة.', d: 1 },
      { en: 'Sara works with me at the hospital.', ar: 'سارة تعمل معي في المستشفى.', d: 2 },
      { en: 'Have you two met?', ar: 'هل تعرفتما من قبل؟', d: 1 },
      { en: 'No, we have not met before.', ar: 'لا، لم نتقابل من قبل.', d: 2 },
      { en: 'Pleased to meet you, Sara.', ar: 'مسرور بلقائك يا سارة.', d: 1 },
      { en: 'Pleased to meet you too, Omar.', ar: 'مسرورة بلقائك أيضا يا عمر.', d: 1 },
      { en: 'Ahmed, meet my cousin Youssef.', ar: 'أحمد، هذا ابن عمي يوسف.', d: 1 },
      { en: 'He just moved to our city.', ar: 'لقد انتقل إلى مدينتنا للتو.', d: 2 },
      { en: 'Where are you from, Youssef?', ar: 'من أين أنت يا يوسف؟', d: 1 },
      { en: 'I am from Aleppo, but I live here now.', ar: 'أنا من حلب، لكني أسكن هنا الآن.', d: 2 },
      { en: 'Lina is my colleague at work.', ar: 'لينا زميلتي في العمل.', d: 2 },
      { en: 'We are on the same team.', ar: 'نحن في الفريق نفسه.', d: 2 },
      { en: 'How do you two know each other?', ar: 'كيف تعرفتما على بعضكما؟', d: 2 },
      { en: 'We went to school together.', ar: 'ذهبنا إلى المدرسة معا.', d: 2 },
      { en: 'Please sit with us.', ar: 'اجلس معنا من فضلك.', d: 1 },
      { en: 'I will introduce you to my wife.', ar: 'سأعرفك على زوجتي.', d: 3 },
      { en: 'Talk to both of them.', ar: 'تحدث مع كليهما.', d: 3 },
      { en: 'Do not forget their names.', ar: 'لا تنسَ أسماءهم.', d: 3 },
    ],
    patterns: [
      {
        tmpl: '{A}, this is {B}.', arTmpl: '{A_ar}، {TH_ar} {B_ar}.',
        slots: {
          A: B.NAMED_SING.slice(0, 4), B: B.NAMED_SING.slice(4, 8),
          TH: (x) => [{ en: 'this is', ar: x.B.agr === 'she' ? 'هذه' : 'هذا' }],
        },
        tags: ['introductions'], d: 1, limit: 10,
      },
      {
        tmpl: '{P} {V} with me.', arTmpl: '{P_ar} {V_ar} معي.',
        slots: {
          P: B.PEOPLE_SING,
          V: (x) => [{ en: B.enPresent('work', x.P.agr), ar: B.arPresent('work', x.P.agr) }],
        },
        tags: ['introductions', 'present-simple'], d: 2, limit: 10,
      },
      {
        tmpl: 'Have you met {N}?', arTmpl: 'هل قابلت {N_ar} من قبل؟',
        slots: { N: B.NAMED_SING },
        tags: ['introductions', 'questions'], d: 2, limit: 8,
      },
      {
        tmpl: '{A} and {B} {FR}.', arTmpl: '{A_ar} و{B_ar} {FR_ar}.',
        slots: {
          A: B.NAMED_SING.slice(0, 4), B: B.NAMED_SING.slice(4, 8),
          FR: (x) => [{ en: 'are my friends', ar: (x.A.agr === 'she' && x.B.agr === 'she') ? 'صديقاتي' : 'أصدقائي' }],
        },
        tags: ['introductions', 'people'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'Omar, this is Sara.', ar: 'عمر، هذه سارة.', word: 'this', hint: 'للتعريف' },
      { en: 'Sara works with me at the hospital.', ar: 'سارة تعمل معي في المستشفى.', word: 'with' },
      { en: 'Have you two met?', ar: 'هل تعرفتما من قبل؟', word: 'met' },
      { en: 'He just moved to our city.', ar: 'لقد انتقل إلى مدينتنا للتو.', word: 'moved', hint: 'انتقل' },
      { en: 'We are on the same team.', ar: 'نحن في الفريق نفسه.', word: 'team', hint: 'فريق' },
      { en: 'Please sit with us.', ar: 'اجلس معنا من فضلك.', word: 'sit' },
      { en: 'Talk to both of them.', ar: 'تحدث مع كليهما.', word: 'both', hint: 'كلاهما' },
      { en: 'Ahmed, meet my cousin Youssef.', ar: 'أحمد، هذا ابن عمي يوسف.', word: 'cousin', hint: 'ابن العم' },
    ],
    orders: [
      { en: 'Omar, this is my good friend Sara.', ar: 'عمر، هذه صديقتي المقربة سارة.' },
      { en: 'Have you two met before?', ar: 'هل تعرفتما من قبل؟' },
      { en: 'No, we have not met before.', ar: 'لا، لم نتقابل من قبل.' },
      { en: 'Lina is my colleague at work.', ar: 'لينا زميلتي في العمل.' },
      { en: 'We went to school together years ago.', ar: 'ذهبنا إلى المدرسة معا منذ سنوات.' },
      { en: 'I will introduce you to my wife later.', ar: 'سأعرفك على زوجتي لاحقا.' },
    ],
    mc: [
      { question: 'How do you introduce Sara to Omar?', options: ['Omar, this is Sara.', 'Omar, go away!', 'Sara, where is Omar?', 'This is mine.'], answerIndex: 0, ar: 'كيف تعرّف سارة على عمر؟' },
      { question: '"Have you two met?" means:', options: ['هل تعرفتما من قبل؟', 'أين تعملان؟', 'هل أنتما متعبان؟', 'متى سافرتما؟'], answerIndex: 0, ar: 'ما معنى Have you two met؟' },
      { question: 'Sara works with me. She is my:', options: ['daughter', 'teacher', 'neighbor', 'colleague'], answerIndex: 3, ar: 'سارة تعمل معي، فهي:' },
      { question: 'After an introduction you say:', options: ['Nice to meet you.', 'I am hungry.', 'Close the door.', 'My phone is dead.'], answerIndex: 0, ar: 'ماذا تقول بعد التعريف؟' },
    ],
  },

  /* ================= lesson 149 — Invitations ================= */
  {
    num: 149,
    tags: ['invitations', 'social', 'parties'],
    objectives: [
      'Invite someone politely',
      'Offer to bring something as a guest',
      'Give the day, time and place clearly',
    ],
    grammar: {
      explanation: 'To invite someone politely, use "Would you like to ...?" — "Would you like to come for dinner?". You can also say "We are having a party on Friday. Can you come?" or "Please join us". A good guest asks "Can I bring something?", and a kind host answers "Just bring yourself!". Give clear details: the day ("on Friday"), the time ("at eight") and the place ("at our home"). If you plan food, say "I am going to make a big cake".',
      explanationAr: 'لدعوة أحدهم بأدب استخدم Would you like to...؟ مثل Would you like to come for dinner؟. ويمكنك أن تقول We are having a party on Friday. Can you come؟ أو Please join us. والضيف الجيد يسأل Can I bring something؟ فيجيب المضيف الكريم Just bring yourself!. واذكر التفاصيل بوضوح: اليوم on Friday والوقت at eight والمكان at our home. وإذا كنت ستعد الطعام قل I am going to make a big cake.',
      examples: [
        { en: 'Would you like to come for lunch on Friday?', ar: 'هل تحب أن تأتي على الغداء يوم الجمعة؟' },
        { en: 'The guests will come at eight.', ar: 'سيأتي الضيوف في الثامنة.' },
        { en: 'Can I bring a salad for the party?', ar: 'هل أحضر سلطة للحفلة؟' },
      ],
    },
    vocabulary: [
      { word: 'invite', meaningAr: 'يدعو', example: 'I want to invite you.' },
      { word: 'invitation', meaningAr: 'دعوة', example: 'Thank you for the invitation.' },
      { word: 'party', meaningAr: 'حفلة', example: 'We are having a party.' },
      { word: 'dinner', meaningAr: 'عشاء', example: 'Come for dinner, please.' },
      { word: 'wedding', meaningAr: 'حفل زفاف', example: 'You are invited to our wedding.' },
      { word: 'guest', meaningAr: 'ضيف', example: 'We have ten guests today.' },
      { word: 'host', meaningAr: 'مضيف', example: 'The host welcomes the guests.' },
      { word: 'bring', meaningAr: 'يحضر', example: 'Can I bring something?' },
      { word: 'celebrate', meaningAr: 'يحتفل', example: 'We celebrate on Friday.' },
      { word: 'fun', meaningAr: 'ممتع', example: 'It will be a fun evening.' },
      { word: 'garden', meaningAr: 'حديقة', example: 'The children play in the garden.' },
      { word: 'cake', meaningAr: 'كعك', example: 'I am going to make a cake.' },
    ],
    scenario: [
      { en: 'Would you like to come for dinner?', ar: 'هل تحب أن تأتي للعشاء؟', d: 1 },
      { en: 'We are having a party next Friday.', ar: 'نقيم حفلة الجمعة القادمة.', d: 2 },
      { en: 'Can I bring something?', ar: 'هل أحضر شيئا؟', d: 1 },
      { en: 'Just bring yourself!', ar: 'أحضر نفسك فقط!', d: 1 },
      { en: 'You are invited to our wedding.', ar: 'أنت مدعو إلى حفل زفافنا.', d: 2 },
      { en: 'The party starts at eight.', ar: 'تبدأ الحفلة في الثامنة.', d: 2 },
      { en: 'Please join us for lunch on Sunday.', ar: 'انضم إلينا على الغداء يوم الأحد.', d: 2 },
      { en: 'Can you come to my house tonight?', ar: 'هل يمكنك القدوم إلى منزلي الليلة؟', d: 2 },
      { en: 'My brother will cook the main dish.', ar: 'سيطبخ أخي الطبق الرئيسي.', d: 3 },
      { en: 'How many guests are coming?', ar: 'كم ضيفا سيأتون؟', d: 2 },
      { en: 'We invited about fifteen guests.', ar: 'دعونا نحو خمسة عشر ضيفا.', d: 2 },
      { en: 'The children can play in the garden.', ar: 'يمكن للأطفال اللعب في الحديقة.', d: 2 },
      { en: 'Do not worry about the food.', ar: 'لا تقلق بشأن الطعام.', d: 3 },
      { en: 'I am going to make a big cake.', ar: 'سأصنع كعكة كبيرة.', d: 2 },
      { en: 'The invitation says seven thirty.', ar: 'الدعوة تقول السابعة والنصف.', d: 3 },
      { en: 'Come early if you can.', ar: 'تعال مبكرا إن استطعت.', d: 2 },
      { en: 'It will be a fun evening.', ar: 'سيكون مساء ممتعا.', d: 2 },
      { en: 'We would love to see you there.', ar: 'نحب أن نراك هناك.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Would you like to come for {M}?', arTmpl: 'هل تحب أن تأتي لل{M_ar}؟',
        slots: {
          M: [
            { en: 'lunch', ar: 'غداء' }, { en: 'breakfast', ar: 'فطور' },
            { en: 'a coffee', ar: 'قهوة' }, { en: 'tea', ar: 'شاي' },
            { en: 'cake', ar: 'كعك' }, { en: 'a snack', ar: 'وجبة خفيفة' },
          ],
        },
        tags: ['invitations', 'questions'], d: 1, limit: 6,
      },
      {
        tmpl: 'We are having {EV} on {D}.', arTmpl: 'نقيم {EV_ar} يوم {D_ar}.',
        slots: {
          EV: [
            { en: 'a party', ar: 'حفلة' }, { en: 'a dinner', ar: 'عشاء' },
            { en: 'a barbecue', ar: 'حفلة شواء' }, { en: 'a family lunch', ar: 'غداء عائلي' },
          ],
          D: B.DAYS,
        },
        tags: ['invitations', 'days'], d: 2, limit: 14,
      },
      {
        tmpl: 'Can I bring {TH}?', arTmpl: 'هل أحضر {TH_ar}؟',
        slots: {
          TH: [
            { en: 'a dessert', ar: 'حلوى' }, { en: 'a salad', ar: 'سلطة' },
            { en: 'some fruit', ar: 'بعض الفواكه' }, { en: 'drinks', ar: 'مشروبات' },
            { en: 'a gift', ar: 'هدية' }, { en: 'the bread', ar: 'الخبز' },
            { en: 'flowers', ar: 'زهورا' }, { en: 'some juice', ar: 'بعض العصير' },
          ],
        },
        tags: ['invitations', 'food'], d: 1, limit: 8,
      },
      {
        tmpl: 'Please join us {T}.', arTmpl: 'انضم إلينا {T_ar}.',
        slots: {
          T: [
            { en: 'for lunch', ar: 'على الغداء' }, { en: 'for dinner', ar: 'على العشاء' },
            { en: 'at our home', ar: 'في منزلنا' }, { en: 'this evening', ar: 'هذا المساء' },
            { en: 'on Sunday', ar: 'يوم الأحد' },
          ],
        },
        tags: ['invitations'], d: 2, limit: 5,
      },
    ],
    fills: [
      { en: 'Would you like to come for dinner?', ar: 'هل تحب أن تأتي للعشاء؟', word: 'dinner' },
      { en: 'We are having a party next Friday.', ar: 'نقيم حفلة الجمعة القادمة.', word: 'party' },
      { en: 'Can I bring something?', ar: 'هل أحضر شيئا؟', word: 'bring', hint: 'يحضر' },
      { en: 'You are invited to our wedding.', ar: 'أنت مدعو إلى حفل زفافنا.', word: 'invited', hint: 'مدعو' },
      { en: 'The party starts at eight.', ar: 'تبدأ الحفلة في الثامنة.', word: 'eight', hint: 'وقت' },
      { en: 'The children can play in the garden.', ar: 'يمكن للأطفال اللعب في الحديقة.', word: 'garden' },
      { en: 'I am going to make a big cake.', ar: 'سأصنع كعكة كبيرة.', word: 'cake', hint: 'حلوى' },
      { en: 'We would love to see you there.', ar: 'نحب أن نراك هناك.', word: 'love' },
    ],
    orders: [
      { en: 'Please join us for lunch on Sunday.', ar: 'انضم إلينا على الغداء يوم الأحد.' },
      { en: 'My brother will cook the main dish.', ar: 'سيطبخ أخي الطبق الرئيسي.' },
      { en: 'Can you come to my house tonight?', ar: 'هل يمكنك القدوم إلى منزلي الليلة؟' },
      { en: 'Come early if you can, please.', ar: 'تعال مبكرا إن استطعت من فضلك.' },
      { en: 'It will be a fun evening for everyone.', ar: 'سيكون مساء ممتعا للجميع.' },
      { en: 'The invitation says seven thirty.', ar: 'الدعوة تقول السابعة والنصف.' },
    ],
    mc: [
      { question: 'Which sentence invites a friend to dinner?', options: ['Would you like to come for dinner?', 'The dinner is cold.', 'I ate dinner alone.', 'Dinner is at nine.'], answerIndex: 0, ar: 'أي جملة تدعو صديقا إلى العشاء؟' },
      { question: 'A guest asks "Can I bring something?" The host says:', options: ['Just bring yourself!', 'No, stay home.', 'Pay me money.', 'Never come again.'], answerIndex: 0, ar: 'سأل الضيف Can I bring something? فما جواب المضيف؟' },
      { question: '"You are invited" means:', options: ['أنت مدعو', 'أنت ممنوع', 'أنت متعب', 'أنت متأخر'], answerIndex: 0, ar: 'ما معنى You are invited؟' },
      { question: 'The party starts at eight. Guests come:', options: ['at eight', 'at noon', 'next year', 'never'], answerIndex: 0, ar: 'تبدأ الحفلة في الثامنة، فيأتي الضيوف:' },
    ],
  },
];
