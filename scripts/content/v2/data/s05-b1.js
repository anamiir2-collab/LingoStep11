/* ============================================================
   v2 section data — s05-b1.js
   Mobility & Travel · lessons 103–106 (A2)
   103 Train Tickets · 104 Airport Check-In · 105 Airport Security · 106 Transit and Boarding
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 103 — Train Tickets ================= */
  {
    num: 103,
    tags: ['train-travel', 'tickets'],
    objectives: [
      'Buy a one-way or round trip ticket',
      'Ask about platforms and departure times',
      'Choose between first and second class',
    ],
    grammar: {
      explanation: 'At the train station, buy your ticket at the ticket office. Say "a one-way ticket" when you are not coming back, and "a round trip" when you will return. Use "a ticket to + city" for the destination: "a ticket to Alexandria". Timetables use the present simple: "The train leaves at 8:40 and arrives at 10:40". Ask "Which platform does the train leave from?" and "How long does the trip take?" First class is more comfortable and more expensive than second class.',
      explanationAr: 'في محطة القطار اشترِ تذكرتك من شباك التذاكر. قل a one-way ticket إذا كنت ذاهبا فقط دون عودة، وa round trip إذا كنت ستعود. استخدم a ticket to + المدينة للوجهة: a ticket to Alexandria. تستخدم جداول المواعيد المضارع البسيط: The train leaves at 8:40. واسأل: Which platform does the train leave from؟ وHow long does the trip take؟ الدرجة الأولى أراح وأغلى من الدرجة الثانية.',
      examples: [
        { en: 'I want a one-way ticket to Alexandria.', ar: 'أريد تذكرة ذهاب فقط إلى الإسكندرية.' },
        { en: 'Which platform does the train leave from?', ar: 'من أي رصيف يغادر القطار؟' },
        { en: 'The train leaves at 8:40 and arrives at 10:40.', ar: 'يغادر القطار في الثامنة وأربعين دقيقة ويصل في العاشرة وأربعين دقيقة.' },
      ],
    },
    vocabulary: [
      { word: 'one-way ticket', meaningAr: 'تذكرة ذهاب فقط', example: 'A one-way ticket to Cairo, please.' },
      { word: 'round trip', meaningAr: 'ذهاب وعودة', example: 'I bought a round trip to Aswan.' },
      { word: 'platform', meaningAr: 'رصيف القطار', example: 'The train leaves from platform 5.' },
      { word: 'first class', meaningAr: 'الدرجة الأولى', example: 'First class seats are wide.' },
      { word: 'second class', meaningAr: 'الدرجة الثانية', example: 'Second class is cheaper.' },
      { word: 'ticket office', meaningAr: 'شباك التذاكر', example: 'The ticket office opens at seven.' },
      { word: 'passenger', meaningAr: 'راكب', example: 'The passengers are waiting on the platform.' },
      { word: 'leave', meaningAr: 'يغادر', example: 'The train leaves at eight forty.', ipa: 'liːv' },
      { word: 'arrive', meaningAr: 'يصل', example: 'We arrive in Alexandria at noon.' },
      { word: 'seat', meaningAr: 'مقعد', example: 'Is that seat free?' },
      { word: 'schedule', meaningAr: 'جدول المواعيد', example: 'The schedule shows all the trains.' },
      { word: 'trip', meaningAr: 'رحلة', example: 'The trip takes two hours.' },
    ],
    scenario: [
      { en: 'I would like a ticket to Alexandria, please.', ar: 'أريد تذكرة إلى الإسكندرية من فضلك.', d: 1 },
      { en: 'One-way or round trip?', ar: 'ذهاب فقط أم ذهاب وعودة؟', d: 1 },
      { en: 'Round trip, please.', ar: 'ذهاب وعودة من فضلك.', d: 1 },
      { en: 'That is forty-five dollars.', ar: 'ذلك خمسة وأربعون دولارا.', d: 1 },
      { en: 'Which platform does the train leave from?', ar: 'من أي رصيف يغادر القطار؟', d: 2 },
      { en: 'It leaves from platform 5.', ar: 'يغادر من الرصيف رقم 5.', d: 2 },
      { en: 'What time does the train leave?', ar: 'متى يغادر القطار؟', d: 2 },
      { en: 'It leaves at 8:40 in the morning.', ar: 'يغادر في الثامنة وأربعين دقيقة صباحا.', d: 2 },
      { en: 'I do not want a second class seat.', ar: 'لا أريد مقعدا في الدرجة الثانية.', d: 2 },
      { en: 'First class is more expensive.', ar: 'الدرجة الأولى أغلى.', d: 2 },
      { en: 'Is that seat free?', ar: 'هل ذلك المقعد فارغ؟', d: 2 },
      { en: 'How long does the trip take?', ar: 'كم تستغرق الرحلة؟', d: 2 },
      { en: 'It takes two hours by train.', ar: 'تستغرق ساعتين بالقطار.', d: 2 },
      { en: 'The ticket office opens at seven.', ar: 'يفتح شباك التذاكر في السابعة.', d: 2 },
      { en: 'The passengers are waiting on the platform.', ar: 'الركاب ينتظرون على الرصيف.', d: 3 },
      { en: 'My uncle arrived at the station late yesterday.', ar: 'وصل عمي إلى المحطة متأخرا أمس.', d: 3 },
      { en: 'We are going to take the morning train tomorrow.', ar: 'سنستقل قطار الصباح غدا.', d: 3 },
      { en: 'I will wait for you at the station.', ar: 'سأنتظرك في المحطة.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'One ticket to {C}, please.', arTmpl: 'تذكرة واحدة إلى {C_ar} من فضلك.',
        slots: { C: B.CITIES },
        tags: ['train-travel', 'tickets'], d: 1, limit: 9,
      },
      {
        tmpl: 'How much is {T}?', arTmpl: 'كم ثمن {T_ar}؟',
        slots: {
          T: [
            { en: 'a one-way ticket', ar: 'تذكرة الذهاب فقط' },
            { en: 'a round trip', ar: 'تذكرة الذهاب والعودة' },
            { en: 'a first class ticket', ar: 'تذكرة الدرجة الأولى' },
            { en: 'a second class ticket', ar: 'تذكرة الدرجة الثانية' },
            { en: 'a ticket for two passengers', ar: 'تذكرة لراكبين' },
          ],
        },
        tags: ['tickets', 'questions'], d: 1, limit: 5,
      },
      {
        tmpl: 'The train leaves at {T}.', arTmpl: 'يغادر القطار في {T_ar}.',
        slots: {
          T: [
            { en: 'eight forty', ar: 'الثامنة وأربعين دقيقة' },
            { en: 'nine fifteen', ar: 'التاسعة وخمس عشرة دقيقة' },
            { en: 'ten thirty', ar: 'العاشرة والنصف' },
            { en: 'six twenty', ar: 'السادسة وعشرين دقيقة' },
            { en: 'noon', ar: 'ظهرا' },
          ],
        },
        tags: ['train-travel', 'time'], d: 2, limit: 5,
      },
      {
        tmpl: 'Which platform does the {TR} leave from?', arTmpl: 'من أي رصيف يغادر {TR_ar}؟',
        slots: {
          TR: [
            { en: 'train', ar: 'القطار' },
            { en: 'express train', ar: 'القطار السريع' },
            { en: 'night train', ar: 'القطار الليلي' },
          ],
        },
        tags: ['train-travel', 'questions'], d: 2, limit: 3,
      },
      {
        tmpl: '{S} {V} {T} yesterday.', arTmpl: '{S_ar} {V_ar} {T_ar} أمس.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'My brother', ar: 'أخي', agr: 'he' },
            { en: 'We', ar: 'نحن', agr: 'we' }, { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{ en: B.enPast('buy'), ar: B.arPast('buy', x.S.agr) }],
          T: [
            { en: 'a one-way ticket', ar: 'تذكرة ذهاب فقط' },
            { en: 'a round trip', ar: 'تذكرة ذهاب وعودة' },
            { en: 'a first class ticket', ar: 'تذكرة درجة أولى' },
          ],
        },
        tags: ['tickets', 'past-simple'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'One-way or round trip?', ar: 'ذهاب فقط أم ذهاب وعودة؟', word: 'round', hint: 'نوع التذكرة' },
      { en: 'The train leaves from platform 5.', ar: 'يغادر القطار من الرصيف رقم 5.', word: 'platform', hint: 'مكان انتظار القطار' },
      { en: 'What time does the train leave?', ar: 'متى يغادر القطار؟', word: 'leave' },
      { en: 'I want a first class ticket.', ar: 'أريد تذكرة درجة أولى.', word: 'first' },
      { en: 'It takes two hours by train.', ar: 'تستغرق ساعتين بالقطار.', word: 'hours' },
      { en: 'The passengers are waiting on the platform.', ar: 'الركاب ينتظرون على الرصيف.', word: 'waiting' },
      { en: 'We are going to take the morning train tomorrow.', ar: 'سنستقل قطار الصباح غدا.', word: 'tomorrow' },
      { en: 'The ticket office opens at seven.', ar: 'يفتح شباك التذاكر في السابعة.', word: 'ticket' },
    ],
    orders: [
      { en: 'I want a round trip, please.', ar: 'أريد تذكرة ذهاب وعودة من فضلك.' },
      { en: 'Which platform does the train leave from?', ar: 'من أي رصيف يغادر القطار؟' },
      { en: 'The train leaves at eight forty.', ar: 'يغادر القطار في الثامنة وأربعين دقيقة.' },
      { en: 'How long does the trip take?', ar: 'كم تستغرق الرحلة؟' },
      { en: 'My uncle arrived at the station late.', ar: 'وصل عمي إلى المحطة متأخرا.' },
      { en: 'First class is more expensive.', ar: 'الدرجة الأولى أغلى.' },
    ],
    mc: [
      { question: 'You want to come back on Sunday. Which ticket do you buy?', options: ['a round trip', 'a one-way ticket', 'a platform ticket', 'a second class seat'], answerIndex: 0, ar: 'تريد العودة يوم الأحد. أي تذكرة تشتري؟' },
      { question: 'The train leaves from platform 5. Where do you go?', options: ['to platform 5', 'to the ticket office', 'to the hotel', 'to the airport'], answerIndex: 0, ar: 'يغادر القطار من الرصيف 5. إلى أين تذهب؟' },
      { question: '"One-way" means:', options: ['ذهاب فقط', 'ذهاب وعودة', 'درجة أولى', 'محطة قطار'], answerIndex: 0, ar: 'ما معنى One-way؟' },
      { question: 'Which sentence is correct?', options: ['The train leaves at 8:40.', 'The train leave at 8:40.', 'The train leaving at 8:40.', 'The train leaves on 8:40.'], answerIndex: 0, ar: 'أي جملة صحيحة؟' },
    ],
  },

  /* ================= lesson 104 — Airport Check-In ================= */
  {
    num: 104,
    tags: ['airport', 'check-in'],
    objectives: [
      'Check in a bag at the airport counter',
      'Ask for a window seat and get a boarding pass',
      'Find your gate and talk about your flight',
    ],
    grammar: {
      explanation: 'At the check-in counter, show your documents: "Here is my passport and ticket". The clerk asks "Are you checking any bags?" — answer "Yes, I want to check in one bag" or "I do not have any luggage to check". Ask for a seat politely: "A window seat, please". You receive a boarding pass, and the clerk says "Your flight leaves from gate 12". Use the present continuous for travel plans: "We are flying to Paris this afternoon".',
      explanationAr: 'في مكتب تسجيل الوصول أظهر مستنداتك: Here is my passport and ticket. يسألك الموظف: Are you checking any bags؟ فتجيب: Yes, I want to check in one bag أو I do not have any luggage to check. اطلب مقعدك بأدب: A window seat, please. ثم تحصل على بطاقة الصعود ويقول الموظف: Your flight leaves from gate 12. واستخدم المضارع المستمر لخطط السفر: We are flying to Paris this afternoon.',
      examples: [
        { en: 'Here is my passport and ticket.', ar: 'ها هو جواز سفري وتذكرتي.' },
        { en: 'Yes, I want to check in one bag.', ar: 'نعم، أريد تسجيل حقيبة واحدة.' },
        { en: 'Your flight leaves from gate 12.', ar: 'رحلتك تغادر من البوابة 12.' },
      ],
    },
    vocabulary: [
      { word: 'check in', meaningAr: 'يسجل الوصول', example: 'I want to check in one bag.' },
      { word: 'passport', meaningAr: 'جواز سفر', example: 'May I see your passport?', ipa: 'pɑːspɔːrt' },
      { word: 'boarding pass', meaningAr: 'بطاقة الصعود', example: 'Here is your boarding pass.' },
      { word: 'gate', meaningAr: 'بوابة', example: 'Your flight leaves from gate 12.' },
      { word: 'flight', meaningAr: 'رحلة جوية', example: 'Our flight is at noon.' },
      { word: 'window seat', meaningAr: 'مقعد بجوار النافذة', example: 'A window seat, please.' },
      { word: 'aisle seat', meaningAr: 'مقعد بجانب الممر', example: 'He prefers an aisle seat.' },
      { word: 'suitcase', meaningAr: 'حقيبة سفر', example: 'Please put your suitcase on the scale.' },
      { word: 'luggage', meaningAr: 'أمتعة', example: 'I do not have any luggage to check.' },
      { word: 'weigh', meaningAr: 'يزن', example: 'The clerk weighed my bag.' },
      { word: 'counter', meaningAr: 'مكتب / كاونتر', example: 'The counter opened an hour ago.' },
      { word: 'scale', meaningAr: 'ميزان', example: 'Put the bag on the scale.' },
    ],
    scenario: [
      { en: 'Good morning. Can I see your passport, please?', ar: 'صباح الخير. هل يمكنني رؤية جواز سفرك من فضلك؟', d: 1 },
      { en: 'Here is my passport and ticket.', ar: 'ها هو جواز سفري وتذكرتي.', d: 1 },
      { en: 'Are you checking any bags today?', ar: 'هل تسجل أي حقائب اليوم؟', d: 1 },
      { en: 'Yes, I want to check in one bag.', ar: 'نعم، أريد تسجيل حقيبة واحدة.', d: 1 },
      { en: 'Please put your suitcase on the scale.', ar: 'ضع حقيبة سفرك على الميزان من فضلك.', d: 2 },
      { en: 'Your bag is not too heavy.', ar: 'حقيبتك ليست ثقيلة جدا.', d: 2 },
      { en: 'Do you want a window seat?', ar: 'هل تريد مقعدا بجوار النافذة؟', d: 2 },
      { en: 'A window seat, please.', ar: 'مقعد بجوار النافذة من فضلك.', d: 2 },
      { en: 'Here is your boarding pass.', ar: 'ها هي بطاقة صعودك.', d: 2 },
      { en: 'Your flight leaves from gate 12.', ar: 'رحلتك تغادر من البوابة 12.', d: 2 },
      { en: 'What time does boarding start?', ar: 'متى يبدأ الصعود؟', d: 2 },
      { en: 'We are flying to Paris this afternoon.', ar: 'سنطير إلى باريس بعد الظهر.', d: 3 },
      { en: 'I do not have any luggage to check.', ar: 'ليس لدي أي أمتعة أسجلها.', d: 2 },
      { en: 'How many bags can I take on the plane?', ar: 'كم حقيبة يمكنني أخذها إلى الطائرة؟', d: 3 },
      { en: 'You can take one small bag with you.', ar: 'يمكنك أخذ حقيبة صغيرة واحدة معك.', d: 2 },
      { en: 'The check-in counter opened an hour ago.', ar: 'فُتح مكتب تسجيل الوصول قبل ساعة.', d: 3 },
      { en: 'Please arrive at the airport two hours early.', ar: 'احضر إلى المطار قبل ساعتين من فضلك.', d: 3 },
      { en: 'My wife and I checked in online last night.', ar: 'أنا وزوجتي سجلنا الوصول عبر الإنترنت الليلة الماضية.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I need to check in {N}.', arTmpl: 'أريد تسجيل {N_ar}.',
        slots: {
          N: [
            { en: 'one bag', ar: 'حقيبة واحدة' },
            { en: 'two bags', ar: 'حقائب اثنتين' },
            { en: 'one suitcase', ar: 'حقيبة سفر واحدة' },
            { en: 'three bags', ar: 'ثلاث حقائب' },
          ],
        },
        tags: ['airport', 'check-in'], d: 1, limit: 4,
      },
      {
        tmpl: 'May I see your {D}?', arTmpl: 'هل يمكنني رؤية {D_ar}؟',
        slots: {
          D: [
            { en: 'passport', ar: 'جواز سفرك' },
            { en: 'ticket', ar: 'تذكرتك' },
            { en: 'boarding pass', ar: 'بطاقة صعودك' },
          ],
        },
        tags: ['airport', 'questions'], d: 1, limit: 3,
      },
      {
        tmpl: 'My flight to {C} leaves from gate {G}.', arTmpl: 'رحلتي إلى {C_ar} تغادر من البوابة رقم {G_ar}.',
        slots: {
          C: B.CITIES,
          G: [
            { en: '12', ar: '12' }, { en: '7', ar: '7' },
            { en: '3', ar: '3' }, { en: '22', ar: '22' },
          ],
        },
        tags: ['airport', 'gates'], d: 2, limit: 12,
      },
      {
        tmpl: '{S} {V} online {T}.', arTmpl: '{S_ar} {V_ar} عبر الإنترنت {T_ar}.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'My brother', ar: 'أخي', agr: 'he' },
            { en: 'My wife and I', ar: 'أنا وزوجتي', agr: 'we' }, { en: 'My parents', ar: 'والداي', agr: 'they' },
          ],
          V: (x) => [{
            en: 'checked in',
            ar: { I: 'سجلت الوصول', he: 'سجل الوصول', she: 'سجلت الوصول', we: 'سجلنا الوصول', they: 'سجلوا الوصول' }[x.S.agr],
          }],
          T: [
            { en: 'last night', ar: 'الليلة الماضية' },
            { en: 'this morning', ar: 'هذا الصباح' },
            { en: 'two days ago', ar: 'قبل يومين' },
          ],
        },
        tags: ['check-in', 'past-simple'], d: 2, limit: 8,
      },
      {
        tmpl: 'We are going to fly to {C} on {D}.', arTmpl: 'سنطير إلى {C_ar} يوم {D_ar}.',
        slots: { C: B.CITIES, D: B.DAYS },
        tags: ['airport', 'future'], d: 3, limit: 12,
      },
    ],
    fills: [
      { en: 'Here is my passport and ticket.', ar: 'ها هو جواز سفري وتذكرتي.', word: 'passport', hint: 'مستند سفر' },
      { en: 'Yes, I want to check in one bag.', ar: 'نعم، أريد تسجيل حقيبة واحدة.', word: 'bag' },
      { en: 'A window seat, please.', ar: 'مقعد بجوار النافذة من فضلك.', word: 'seat' },
      { en: 'Here is your boarding pass.', ar: 'ها هي بطاقة صعودك.', word: 'boarding' },
      { en: 'Your flight leaves from gate 12.', ar: 'رحلتك تغادر من البوابة 12.', word: 'gate' },
      { en: 'Please put your suitcase on the scale.', ar: 'ضع حقيبة سفرك على الميزان من فضلك.', word: 'suitcase' },
      { en: 'I do not have any luggage to check.', ar: 'ليس لدي أي أمتعة أسجلها.', word: 'luggage' },
      { en: 'My wife and I checked in online last night.', ar: 'أنا وزوجتي سجلنا الوصول عبر الإنترنت الليلة الماضية.', word: 'online' },
    ],
    orders: [
      { en: 'May I see your passport and ticket, please?', ar: 'هل يمكنني رؤية جواز سفرك وتذكرتك من فضلك؟' },
      { en: 'Do you want a window seat or an aisle seat?', ar: 'هل تريد مقعدا بجوار النافذة أم بجانب الممر؟' },
      { en: 'We are flying to Rome tomorrow morning.', ar: 'سنطير إلى روما صباح غد.' },
      { en: 'Please put the small bag on the scale.', ar: 'ضع الحقيبة الصغيرة على الميزان من فضلك.' },
      { en: 'The check-in counter opened an hour ago.', ar: 'فُتح مكتب تسجيل الوصول قبل ساعة.' },
      { en: 'I checked in online and printed my boarding pass.', ar: 'سجلت الوصول عبر الإنترنت وطبعت بطاقة الصعود.' },
    ],
    mc: [
      { question: 'What do you show at the check-in counter?', options: ['a passport', 'a menu', 'a library card', 'a pillow'], answerIndex: 0, ar: 'ماذا تظهر في مكتب تسجيل الوصول؟' },
      { question: 'You get this after check-in and need it to board:', options: ['a boarding pass', 'a wake-up call', 'a first class ticket', 'a platform'], answerIndex: 0, ar: 'تحصل على هذا بعد تسجيل الوصول وتحتاجه للصعود:' },
      { question: '"Gate 12" means:', options: ['بوابة 12', 'الرصيف 12', 'المقعد 12', 'الرحلة 12'], answerIndex: 0, ar: 'ما معنى Gate 12؟' },
      { question: 'Which seat is next to the window?', options: ['a window seat', 'an aisle seat', 'a back seat', 'a free seat'], answerIndex: 0, ar: 'أي مقعد يكون بجوار النافذة؟' },
    ],
  },

  /* ================= lesson 105 — Airport Security ================= */
  {
    num: 105,
    tags: ['airport', 'security'],
    objectives: [
      'Follow security instructions at the airport',
      'Talk about liquids and the 100 ml rule',
      'Understand what the security officer asks',
    ],
    grammar: {
      explanation: 'At security, officers use short imperatives: "Take out your laptop", "Empty your pockets", "Walk through the scanner". To say something is necessary, use "have to": "You have to take out your laptop". For negative instructions, use "do not" or "never": "Do not carry sharp things". Liquids follow the 100 ml rule: "Liquids under 100 ml are allowed" but "This water bottle is not allowed". The past simple describes finished checks: "The officer checked my bag twice".',
      explanationAr: 'عند الأمن يستخدم المفتشون صيغة الأمر القصيرة: Take out your laptop وEmpty your pockets وWalk through the scanner. وللتعبير عن الضرورة استخدم have to: You have to take out your laptop. وللنفي استخدم do not: Do not carry sharp things. تخضع السوائل لقاعدة 100 مل: السوائل التي تقل عن 100 مل مسموح بها، أما زجاجة الماء الكبيرة فغير مسموحة. ويصف الماضي البسيط فحوصا منتهية: The officer checked my bag twice.',
      examples: [
        { en: 'Take out your laptop, please.', ar: 'أخرج حاسوبك المحمول من فضلك.' },
        { en: 'Liquids under 100 ml are allowed.', ar: 'السوائل التي تقل عن 100 مل مسموح بها.' },
        { en: 'The officer checked my bag twice.', ar: 'فتش المفتش حقيبتي مرتين.' },
      ],
    },
    vocabulary: [
      { word: 'security', meaningAr: 'الأمن والتفتيش', example: 'Security is very busy today.' },
      { word: 'scanner', meaningAr: 'جهاز المسح', example: 'Please walk through the scanner.' },
      { word: 'laptop', meaningAr: 'حاسوب محمول', example: 'Take out your laptop, please.', ipa: 'læptɑːp' },
      { word: 'pockets', meaningAr: 'جيوب', example: 'Empty your pockets, please.' },
      { word: 'liquids', meaningAr: 'سوائل', example: 'Liquids under 100 ml are allowed.' },
      { word: 'tray', meaningAr: 'صينية', example: 'Put your phone in the tray.' },
      { word: 'belt', meaningAr: 'حزام', example: 'Take off your belt, please.' },
      { word: 'shoes', meaningAr: 'أحذية', example: 'You have to take off your shoes.' },
      { word: 'officer', meaningAr: 'مفتش / شرطي', example: 'The officer checked my bag twice.' },
      { word: 'allowed', meaningAr: 'مسموح به', example: 'This water bottle is not allowed.' },
      { word: 'cream', meaningAr: 'كريم', example: 'Is this cream under 100 ml?' },
      { word: 'alarm', meaningAr: 'جهاز إنذار', example: 'The alarm rang because of my belt.' },
    ],
    scenario: [
      { en: 'Please take out your laptop.', ar: 'أخرج حاسوبك المحمول من فضلك.', d: 1 },
      { en: 'Put your phone in the small tray.', ar: 'ضع هاتفك في الصينية الصغيرة.', d: 1 },
      { en: 'Empty your pockets, please.', ar: 'أفرغ جيوبك من فضلك.', d: 1 },
      { en: 'Take off your belt and shoes.', ar: 'اخلع حزامك وأحذيتك.', d: 2 },
      { en: 'Do I need to take out my laptop?', ar: 'هل أحتاج إلى إخراج حاسوبي المحمول؟', d: 2 },
      { en: 'Yes, all laptops go through the scanner.', ar: 'نعم، جميع الحواسيب المحمولة تمر عبر جهاز المسح.', d: 2 },
      { en: 'Liquids under 100 ml are allowed.', ar: 'السوائل التي تقل عن 100 مل مسموح بها.', d: 2 },
      { en: 'This water bottle is not allowed.', ar: 'زجاجة الماء هذه غير مسموحة.', d: 2 },
      { en: 'Please walk through the scanner.', ar: 'اعبر جهاز المسح من فضلك.', d: 2 },
      { en: 'Do not carry sharp things.', ar: 'لا تحمل أشياء حادة.', d: 2 },
      { en: 'Is this cream under 100 ml?', ar: 'هل هذا الكريم أقل من 100 مل؟', d: 2 },
      { en: 'No, you cannot take it on the plane.', ar: 'لا، لا يمكنك أخذها إلى الطائرة.', d: 2 },
      { en: 'How many bottles of liquid can I take?', ar: 'كم قارورة سائلة يمكنني أخذها؟', d: 2 },
      { en: 'We have to empty all pockets here.', ar: 'علينا إفراغ جميع الجيوب هنا.', d: 3 },
      { en: 'The officer checked my bag twice.', ar: 'فتش المفتش حقيبتي مرتين.', d: 3 },
      { en: 'She took her laptop out of the bag.', ar: 'أخرجت حاسوبها المحمول من الحقيبة.', d: 3 },
      { en: 'I put my belt back on after the scan.', ar: 'أعدت وضع حزامي بعد الفحص.', d: 3 },
      { en: 'The alarm rang because of my belt.', ar: 'رن جهاز الإنذار بسبب حزامي.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Take out your {I}, please.', arTmpl: 'أخرج {I_ar} من فضلك.',
        slots: {
          I: [
            { en: 'laptop', ar: 'حاسوبك المحمول' },
            { en: 'phone', ar: 'هاتفك' },
            { en: 'keys', ar: 'مفاتيحك' },
            { en: 'wallet', ar: 'محفظتك' },
            { en: 'camera', ar: 'كاميرتك' },
          ],
        },
        tags: ['security', 'imperative'], d: 1, limit: 5,
      },
      {
        tmpl: 'Put your {I} in the tray.', arTmpl: 'ضع {I_ar} في الصينية.',
        slots: {
          I: [
            { en: 'phone', ar: 'هاتفك' },
            { en: 'watch', ar: 'ساعة يدك' },
            { en: 'coins', ar: 'نقودك المعدنية' },
            { en: 'keys', ar: 'مفاتيحك' },
            { en: 'belt', ar: 'حزامك' },
          ],
        },
        tags: ['security', 'imperative'], d: 1, limit: 5,
      },
      {
        tmpl: 'You have to {V} at security.', arTmpl: 'عليك {V_ar} عند الأمن.',
        slots: {
          V: [
            { en: 'take out your laptop', ar: 'إخراج حاسوبك المحمول' },
            { en: 'empty your pockets', ar: 'إفراغ جيوبك' },
            { en: 'take off your belt', ar: 'خلع حزامك' },
            { en: 'take off your shoes', ar: 'خلع أحذيتك' },
            { en: 'show your boarding pass', ar: 'إظهار بطاقة صعودك' },
          ],
        },
        tags: ['security', 'obligation'], d: 2, limit: 5,
      },
      {
        tmpl: 'Can I take {O} through security?', arTmpl: 'هل يمكنني أخذ {O_ar} عبر الأمن؟',
        slots: {
          O: [
            { en: 'this cream', ar: 'هذا الكريم' },
            { en: 'my medicine', ar: 'دوائي' },
            { en: 'my perfume', ar: 'عطري' },
            { en: 'this shampoo', ar: 'هذا الشامبو' },
            { en: 'this water bottle', ar: 'زجاجة الماء هذه' },
          ],
        },
        tags: ['security', 'questions'], d: 2, limit: 5,
      },
      {
        tmpl: '{S} {V} {O} at security {T}.', arTmpl: '{S_ar} {V_ar} {O_ar} عند الأمن {T_ar}.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'My brother', ar: 'أخي', agr: 'he' },
            { en: 'We', ar: 'نحن', agr: 'we' }, { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{
            en: B.enPast('leave'),
            ar: { I: 'تركت', he: 'ترك', she: 'تركت', we: 'تركنا', they: 'تركوا' }[x.S.agr],
          }],
          O: [
            { en: 'my phone', ar: 'هاتفي' },
            { en: 'my keys', ar: 'مفاتيحي' },
            { en: 'my belt', ar: 'حزامي' },
            { en: 'my wallet', ar: 'محفظتي' },
            { en: 'my watch', ar: 'ساعتي' },
          ],
          T: [
            { en: 'yesterday', ar: 'أمس' },
            { en: 'this morning', ar: 'هذا الصباح' },
            { en: 'last week', ar: 'الأسبوع الماضي' },
          ],
        },
        tags: ['security', 'past-simple'], d: 3, limit: 12,
      },
    ],
    fills: [
      { en: 'Please take out your laptop.', ar: 'أخرج حاسوبك المحمول من فضلك.', word: 'laptop', hint: 'حاسوب صغير' },
      { en: 'Empty your pockets, please.', ar: 'أفرغ جيوبك من فضلك.', word: 'pockets' },
      { en: 'Put your phone in the small tray.', ar: 'ضع هاتفك في الصينية الصغيرة.', word: 'tray' },
      { en: 'Take off your belt and shoes.', ar: 'اخلع حزامك وأحذيتك.', word: 'belt' },
      { en: 'Liquids under 100 ml are allowed.', ar: 'السوائل التي تقل عن 100 مل مسموح بها.', word: 'Liquids' },
      { en: 'This water bottle is not allowed.', ar: 'زجاجة الماء هذه غير مسموحة.', word: 'allowed' },
      { en: 'Please walk through the scanner.', ar: 'اعبر جهاز المسح من فضلك.', word: 'scanner' },
      { en: 'The officer checked my bag twice.', ar: 'فتش المفتش حقيبتي مرتين.', word: 'officer' },
    ],
    orders: [
      { en: 'Take out your laptop, please.', ar: 'أخرج حاسوبك المحمول من فضلك.' },
      { en: 'Empty your pockets, please.', ar: 'أفرغ جيوبك من فضلك.' },
      { en: 'Please walk through the scanner slowly.', ar: 'اعبر جهاز المسح ببطء من فضلك.' },
      { en: 'Do not carry sharp things on the plane.', ar: 'لا تحمل أشياء حادة في الطائرة.' },
      { en: 'The officer checked my bag twice.', ar: 'فتش المفتش حقيبتي مرتين.' },
      { en: 'I left my phone in the tray this morning.', ar: 'تركت هاتفي في الصينية هذا الصباح.' },
    ],
    mc: [
      { question: 'What do you do with your laptop at security?', options: ['take it out', 'drink it', 'wear it', 'eat it'], answerIndex: 0, ar: 'ماذا تفعل بحاسوبك المحمول عند الأمن؟' },
      { question: 'Which liquid can you take through security?', options: ['a 100 ml bottle', 'a one liter bottle', 'a two liter bottle', 'a big can'], answerIndex: 0, ar: 'أي سائل يمكنك أخذه عبر الأمن؟' },
      { question: '"Empty your pockets" means:', options: ['أفرغ جيوبك', 'اغسل جيوبك', 'اشترِ جيوبا', 'أغلق جيوبك'], answerIndex: 0, ar: 'ما معنى Empty your pockets؟' },
      { question: 'You walk ___ the scanner at security.', options: ['through', 'under', 'into', 'above'], answerIndex: 0, ar: 'تعبر ___ جهاز المسح عند الأمن.' },
    ],
  },

  /* ================= lesson 106 — Transit and Boarding ================= */
  {
    num: 106,
    tags: ['airport', 'transit', 'boarding'],
    objectives: [
      'Talk about a layover and transit stops',
      'Ask about transit visas and connections',
      'Understand boarding times and announcements',
    ],
    grammar: {
      explanation: 'A layover is a stop between two flights: "We have a layover in Istanbul". Ask "How long is the layover?" and "Do I need a transit visa?". For boarding, listen for times: "Boarding starts at 9:30" — then go to your gate. Use "will" and "going to" for plans during transit: "We are going to spend the layover in the lounge". The past simple talks about finished trips: "The plane landed in Istanbul on time". A delayed flight leaves later than planned.',
      explanationAr: 'التوقف بين رحلتين هو محطة انتقال بين رحلتين: We have a layover in Istanbul. واسأل: How long is the layover؟ وDo I need a transit visa؟ وللصعود انتبه للأوقات: Boarding starts at 9:30، فتوجه إلى بوابتك. واستخدم will وgoing to للخطط أثناء الترانزيت: We are going to spend the layover in the lounge. ويصف الماضي البسيط رحلات منتهية: The plane landed in Istanbul on time. والرحلة المتأخرة تغادر بعد موعدها.',
      examples: [
        { en: 'We have a long layover in Istanbul.', ar: 'لدينا توقف طويل بين رحلتين في إسطنبول.' },
        { en: 'Boarding starts at 9:30.', ar: 'يبدأ الصعود في التاسعة والنصف.' },
        { en: 'The plane landed in Istanbul on time.', ar: 'هبطت الطائرة في إسطنبول في موعدها.' },
      ],
    },
    vocabulary: [
      { word: 'layover', meaningAr: 'توقف بين رحلتين', example: 'We have a layover in Istanbul.', ipa: 'leɪˌoʊvər' },
      { word: 'transit', meaningAr: 'ترانزيت / عبور', example: 'She stayed in the transit area.' },
      { word: 'transit visa', meaningAr: 'تأشيرة عبور', example: 'Do I need a transit visa?' },
      { word: 'connecting flight', meaningAr: 'رحلة واصلة', example: 'Our connecting flight leaves at noon.' },
      { word: 'transfer', meaningAr: 'ينتقل بين الرحلات', example: 'Where do we transfer to the next plane?' },
      { word: 'boarding', meaningAr: 'الصعود إلى الطائرة', example: 'Boarding starts at 9:30.' },
      { word: 'announcement', meaningAr: 'إعلان', example: 'Did you hear the last announcement?' },
      { word: 'delayed', meaningAr: 'متأخر', example: 'Our flight is delayed by one hour.' },
      { word: 'lounge', meaningAr: 'صالة انتظار', example: 'We waited in the lounge.' },
      { word: 'passport control', meaningAr: 'مراقبة الجوازات', example: 'I showed my passport at passport control.' },
      { word: 'destination', meaningAr: 'وجهة', example: 'Our final destination is Amman.' },
      { word: 'land', meaningAr: 'يهبط', example: 'The plane landed in Istanbul.' },
    ],
    scenario: [
      { en: 'We have a long layover in Istanbul.', ar: 'لدينا توقف طويل بين رحلتين في إسطنبول.', d: 1 },
      { en: 'How long is the layover?', ar: 'كم مدة التوقف؟', d: 1 },
      { en: 'The layover is three hours.', ar: 'مدة التوقف ثلاث ساعات.', d: 1 },
      { en: 'Do I need a transit visa?', ar: 'هل أحتاج إلى تأشيرة عبور؟', d: 2 },
      { en: 'For most countries, you do not need one.', ar: 'في معظم الدول، لا تحتاج إلى واحدة.', d: 2 },
      { en: 'Boarding starts at 9:30.', ar: 'يبدأ الصعود في التاسعة والنصف.', d: 1 },
      { en: 'Please go to your gate now.', ar: 'توجه إلى بوابتك الآن من فضلك.', d: 1 },
      { en: 'Our flight is delayed by one hour.', ar: 'رحلتنا متأخرة بمقدار ساعة واحدة.', d: 2 },
      { en: 'Where do we transfer to the next plane?', ar: 'أين ننتقل إلى الطائرة التالية؟', d: 2 },
      { en: 'Follow the blue signs for connecting flights.', ar: 'اتبع اللافتات الزرقاء نحو الرحلات الواصلة.', d: 2 },
      { en: 'Did you hear the last announcement?', ar: 'هل سمعت الإعلان الأخير؟', d: 2 },
      { en: 'Passengers on flight 226, please board now.', ar: 'المسافرون على الرحلة 226، اصعدوا الآن من فضلك.', d: 3 },
      { en: 'We are going to spend the layover in the lounge.', ar: 'سنقضي فترة التوقف في صالة الانتظار.', d: 3 },
      { en: 'My friend stayed in the transit area last night.', ar: 'بقي صديقي في منطقة الترانزيت الليلة الماضية.', d: 3 },
      { en: 'Our final destination is Amman.', ar: 'وجهتنا النهائية عمّان.', d: 2 },
      { en: 'I showed my passport at passport control.', ar: 'أظهرت جواز سفري عند مراقبة الجوازات.', d: 3 },
      { en: 'They did not find our names on the list.', ar: 'لم يجدوا أسماءنا في القائمة.', d: 3 },
      { en: 'The plane landed in Istanbul on time.', ar: 'هبطت الطائرة في إسطنبول في موعدها.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'We have a layover in {C}.', arTmpl: 'لدينا توقف بين رحلتين في {C_ar}.',
        slots: {
          C: [
            { en: 'Istanbul', ar: 'إسطنبول' }, { en: 'Dubai', ar: 'دبي' },
            { en: 'Doha', ar: 'الدوحة' }, { en: 'Cairo', ar: 'القاهرة' },
            { en: 'Amman', ar: 'عمّان' },
          ],
        },
        tags: ['transit', 'layover'], d: 1, limit: 5,
      },
      {
        tmpl: 'Boarding starts at {T}.', arTmpl: 'يبدأ الصعود في {T_ar}.',
        slots: {
          T: [
            { en: 'nine thirty', ar: 'التاسعة والنصف' },
            { en: 'ten fifteen', ar: 'العاشرة وخمس عشرة دقيقة' },
            { en: 'noon', ar: 'ظهرا' },
            { en: 'eight o\'clock', ar: 'الثامنة تماما' },
            { en: 'six forty-five', ar: 'السادسة وخمس وأربعين دقيقة' },
          ],
        },
        tags: ['boarding', 'time'], d: 1, limit: 5,
      },
      {
        tmpl: 'Do I need a transit visa for {C}?', arTmpl: 'هل أحتاج إلى تأشيرة عبور لـ{C_ar}؟',
        slots: {
          C: [
            { en: 'Turkey', ar: 'تركيا' }, { en: 'Egypt', ar: 'مصر' },
            { en: 'Jordan', ar: 'الأردن' }, { en: 'Morocco', ar: 'المغرب' },
          ],
        },
        tags: ['transit', 'questions'], d: 2, limit: 4,
      },
      {
        tmpl: '{S} {V} to {C} last year.', arTmpl: '{S_ar} {V_ar} إلى {C_ar} العام الماضي.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'My sister', ar: 'أختي', agr: 'she' },
            { en: 'We', ar: 'نحن', agr: 'we' }, { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{
            en: 'flew',
            ar: { I: 'طرت', he: 'طار', she: 'طارت', we: 'طرنا', they: 'طاروا' }[x.S.agr],
          }],
          C: [
            { en: 'Istanbul', ar: 'إسطنبول' }, { en: 'Dubai', ar: 'دبي' },
            { en: 'Paris', ar: 'باريس' }, { en: 'London', ar: 'لندن' },
          ],
        },
        tags: ['transit', 'past-simple'], d: 3, limit: 8,
      },
      {
        // brief mention; full flight-delay vocab lands in lesson 118
        tmpl: '{F} is delayed by {N}.', arTmpl: '{F_ar} متأخرة بمقدار {N_ar}.',
        slots: {
          F: [
            { en: 'Our flight', ar: 'رحلتنا' },
            { en: 'The evening flight', ar: 'رحلة المساء' },
            { en: 'Flight 226', ar: 'الرحلة رقم 226' },
          ],
          N: [
            { en: 'one hour', ar: 'ساعة واحدة' },
            { en: 'thirty minutes', ar: 'ثلاثين دقيقة' },
            { en: 'twenty minutes', ar: 'عشرين دقيقة' },
          ],
        },
        tags: ['transit', 'delayed'], d: 2, limit: 9,
      },
    ],
    fills: [
      { en: 'We have a long layover in Istanbul.', ar: 'لدينا توقف طويل بين رحلتين في إسطنبول.', word: 'layover', hint: 'توقف بين رحلتين' },
      { en: 'Do I need a transit visa?', ar: 'هل أحتاج إلى تأشيرة عبور؟', word: 'transit', hint: 'عبور بين الرحلات' },
      { en: 'Boarding starts at 9:30.', ar: 'يبدأ الصعود في التاسعة والنصف.', word: 'Boarding' },
      { en: 'Our flight is delayed by one hour.', ar: 'رحلتنا متأخرة بمقدار ساعة واحدة.', word: 'delayed', hint: 'بعد الموعد' },
      { en: 'Please go to your gate now.', ar: 'توجه إلى بوابتك الآن من فضلك.', word: 'gate' },
      { en: 'Our final destination is Amman.', ar: 'وجهتنا النهائية عمّان.', word: 'destination' },
      { en: 'The plane landed in Istanbul on time.', ar: 'هبطت الطائرة في إسطنبول في موعدها.', word: 'landed' },
      { en: 'Follow the blue signs for connecting flights.', ar: 'اتبع اللافتات الزرقاء نحو الرحلات الواصلة.', word: 'signs' },
    ],
    orders: [
      { en: 'How long is the layover?', ar: 'كم مدة التوقف؟' },
      { en: 'Boarding for flight 226 starts soon.', ar: 'يبدأ صعود الرحلة 226 قريبا.' },
      { en: 'Do I need a transit visa for Turkey?', ar: 'هل أحتاج إلى تأشيرة عبور لتركيا؟' },
      { en: 'We are going to spend the layover in the lounge.', ar: 'سنقضي فترة التوقف في صالة الانتظار.' },
      { en: 'They did not find our names on the list.', ar: 'لم يجدوا أسماءنا في القائمة.' },
      { en: 'Passengers on flight 226, please board now.', ar: 'المسافرون على الرحلة 226، اصعدوا الآن من فضلك.' },
    ],
    mc: [
      { question: 'A layover is:', options: ['a stop between two flights', 'a hotel room', 'a kind of ticket', 'a large bag'], answerIndex: 0, ar: 'التوقف بين رحلتين هو:' },
      { question: 'Boarding starts at 9:30. What do you do at 9:30?', options: ['go to the gate', 'go to sleep', 'buy a ticket', 'leave the airport'], answerIndex: 0, ar: 'يبدأ الصعود في 9:30. ماذا تفعل في 9:30؟' },
      { question: '"The flight is delayed" means:', options: ['الرحلة متأخرة', 'الرحلة مبكرة', 'الرحلة وصلت', 'الرحلة ملغاة'], answerIndex: 0, ar: 'ما معنى The flight is delayed؟' },
      { question: 'You stay in the transit area and do not enter the country. What might you need?', options: ['a transit visa', 'a library card', 'a driving license', 'a menu'], answerIndex: 0, ar: 'تبقى في منطقة الترانزيت ولا تدخل البلد. ماذا قد تحتاج؟' },
    ],
  },
];
