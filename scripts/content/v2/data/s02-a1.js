/* ============================================================
   v2 section data — s02-a1.js
   Simple Daily Life · lessons 21–24 (routine, time, requests, thanks)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 21 — Waking Up and Daily Routine ================= */
  {
    num: 21,
    tags: ['daily-routine', 'present-simple'],
    objectives: [
      'Describe your morning routine step by step',
      'Use routine verbs in the present simple',
      'Ask about another person\'s daily habits',
    ],
    grammar: {
      explanation: 'We use the present simple for daily routines: "I wake up at six", "I brush my teeth", "I eat breakfast". With I, you, we and they the verb stays in its base form; with he, she and it we add -s: "She gets dressed early", "My brother sleeps late". Time words like "in the morning", "every day" and "on Friday" usually come at the end. To ask about routines, use "Do you...?" and "Does he/she...?", and make negatives with "do not / does not": "I do not eat breakfast".',
      explanationAr: 'نستخدم المضارع البسيط للروتين اليومي: I wake up at six، I brush my teeth، I eat breakfast. مع I وyou وwe وthey يبقى الفعل مجردا، ومع he وshe وit نضيف s: She gets dressed early. وتأتي كلمات الزمن مثل in the morning وevery day في نهاية الجملة عادة. وللسؤال عن العادات نقول Do you...؟ وDoes he...؟ وللنفي نقول I do not eat breakfast.',
      examples: [
        { en: 'I wake up at six every day.', ar: 'أستيقظ في السادسة كل يوم.' },
        { en: 'She gets dressed after breakfast.', ar: 'تلبس ملابسها بعد الفطور.' },
        { en: 'Do you brush your teeth in the morning?', ar: 'هل تنظف أسنانك في الصباح؟' },
      ],
    },
    vocabulary: [
      { word: 'wake up', meaningAr: 'يستيقظ', example: 'I wake up at six.', ipa: 'ˈweɪk ʌp' },
      { word: 'get up', meaningAr: 'ينهض من الفراش', example: 'He gets up and opens the window.' },
      { word: 'brush', meaningAr: 'ينظف بالفرشاة', example: 'I brush my teeth every morning.' },
      { word: 'wash', meaningAr: 'يغسل', example: 'I wash my face with cold water.' },
      { word: 'get dressed', meaningAr: 'يلبس ملابسه', example: 'I get dressed in my bedroom.' },
      { word: 'breakfast', meaningAr: 'الفطور', example: 'I eat breakfast with my family.' },
      { word: 'pray', meaningAr: 'يصلي', example: 'We pray in the morning.' },
      { word: 'lunch', meaningAr: 'الغداء', example: 'We eat lunch at one o\'clock.' },
      { word: 'dinner', meaningAr: 'العشاء', example: 'We eat dinner together every evening.' },
      { word: 'early', meaningAr: 'مبكرا', example: 'My parents wake up very early.' },
      { word: 'late', meaningAr: 'متأخر', example: 'My brother sleeps late on Friday.' },
      { word: 'every day', meaningAr: 'كل يوم', example: 'I brush my teeth every day.' },
    ],
    scenario: [
      { en: 'I wake up at six in the morning.', ar: 'أستيقظ في السادسة صباحا.', d: 1 },
      { en: 'Please get up and brush your teeth.', ar: 'من فضلك، انهض ونظف أسنانك.', d: 1 },
      { en: 'I brush my teeth every morning.', ar: 'أنظف أسناني كل صباح.', d: 1 },
      { en: 'I wash my face with cold water.', ar: 'أغسل وجهي بماء بارد.', d: 1 },
      { en: 'I get dressed in my bedroom.', ar: 'ألبس ملابسي في غرفة النوم.', d: 2 },
      { en: 'I eat breakfast with my family.', ar: 'أتناول الفطور مع عائلتي.', d: 1 },
      { en: 'My brother does not eat breakfast.', ar: 'أخي لا يتناول الفطور.', d: 1 },
      { en: 'My parents wake up very early.', ar: 'والداي يستيقظان مبكرا جدا.', d: 2 },
      { en: 'We pray together in the morning.', ar: 'نصلي معا في الصباح.', d: 2 },
      { en: 'The children go to school at seven.', ar: 'يذهب الأطفال إلى المدرسة في السابعة.', d: 2 },
      { en: 'I go to work by bus.', ar: 'أذهب إلى العمل بالحافلة.', d: 1 },
      { en: 'My father does not work on Friday.', ar: 'أبي لا يعمل يوم الجمعة.', d: 2 },
      { en: 'When do you come home?', ar: 'متى تعود إلى البيت؟', d: 1 },
      { en: 'We eat dinner together every evening.', ar: 'نتعشى معا كل مساء.', d: 2 },
      { en: 'Do you wake up early on Sunday?', ar: 'هل تستيقظ مبكرا يوم الأحد؟', d: 2 },
      { en: 'Yes, I wake up at five.', ar: 'نعم، أستيقظ في الخامسة.', d: 2 },
      { en: 'Does your sister sleep late?', ar: 'هل تنام أختك متأخرة؟', d: 2 },
      { en: 'No, she wakes up early too.', ar: 'لا، هي تستيقظ مبكرا أيضا.', d: 2 },
    ],
    patterns: [
      {
        tmpl: '{S} {V} {T}.', arTmpl: '{S_ar} {V_ar} {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => ['wake', 'sleep', 'work', 'study', 'rest', 'eat'].map((k) => (
            { en: B.enPresent(k, x.S.agr), ar: B.arPresent(k, x.S.agr) })),
          T: [
            { en: 'in the morning', ar: 'في الصباح' }, { en: 'in the afternoon', ar: 'بعد الظهر' },
            { en: 'in the evening', ar: 'في المساء' }, { en: 'at night', ar: 'في الليل' },
            { en: 'every day', ar: 'كل يوم' }, { en: 'on Friday', ar: 'يوم الجمعة' },
          ],
        },
        tags: ['daily-routine', 'present-simple'], d: 1, limit: 30,
      },
      {
        tmpl: 'Does {N} {V} {T}?', arTmpl: 'هل {V_ar} {N_ar} {T_ar}؟',
        slots: {
          N: B.NAMED_SING,
          V: (x) => ['wake', 'sleep', 'work', 'study', 'rest'].map((k) => (
            { en: B.enPresent(k, x.N.agr), ar: B.arPresent(k, x.N.agr) })),
          T: [
            { en: 'early', ar: 'مبكرا' }, { en: 'late', ar: 'متأخرا' },
            { en: 'every day', ar: 'كل يوم' }, { en: 'in the morning', ar: 'في الصباح' },
            { en: 'on Friday', ar: 'يوم الجمعة' },
          ],
        },
        tags: ['daily-routine', 'questions'], d: 2, limit: 12,
      },
      {
        tmpl: 'I {V} at {H}.', arTmpl: '{V_ar} في {H_ar}.',
        slots: {
          V: [
            { en: 'wake up', ar: 'أستيقظ' }, { en: 'get up', ar: 'أنهض' },
            { en: 'eat breakfast', ar: 'أتناول الفطور' }, { en: 'come home', ar: 'أرجع إلى البيت' },
            { en: 'go to bed', ar: 'أذهب إلى الفراش' },
          ],
          H: [
            { en: 'five', ar: 'الخامسة' }, { en: 'six', ar: 'السادسة' }, { en: 'seven', ar: 'السابعة' },
            { en: 'eight', ar: 'الثامنة' }, { en: 'nine', ar: 'التاسعة' }, { en: 'ten', ar: 'العاشرة' },
          ],
        },
        tags: ['daily-routine', 'time'], d: 1, limit: 20,
      },
      {
        tmpl: '{F} {V} {T}.', arTmpl: '{F_ar} {V_ar} {T_ar}.',
        slots: {
          F: [...B.FAMILY, ...B.FAMILY_PLURAL],
          V: (x) => ['wake', 'sleep', 'work', 'study', 'rest'].map((k) => (
            { en: B.enPresent(k, x.F.agr), ar: B.arPresent(k, x.F.agr) })),
          T: [
            { en: 'every day', ar: 'كل يوم' }, { en: 'in the morning', ar: 'في الصباح' },
            { en: 'at night', ar: 'في الليل' }, { en: 'on Friday', ar: 'يوم الجمعة' },
          ],
        },
        tags: ['daily-routine', 'family'], d: 2, limit: 24,
      },
      {
        tmpl: 'Do you {V} {T}?', arTmpl: 'هل {V_ar} {T_ar}؟',
        slots: {
          V: [
            { en: 'wake up', ar: 'تستيقظ' }, { en: 'get up', ar: 'تنهض' },
            { en: 'eat breakfast', ar: 'تتناول الفطور' }, { en: 'pray', ar: 'تصلي' },
            { en: 'work', ar: 'تعمل' }, { en: 'sleep', ar: 'تنام' },
          ],
          T: [
            { en: 'in the morning', ar: 'في الصباح' }, { en: 'every day', ar: 'كل يوم' },
            { en: 'at night', ar: 'في الليل' }, { en: 'on Sunday', ar: 'يوم الأحد' },
            { en: 'before work', ar: 'قبل العمل' }, { en: 'with your family', ar: 'مع عائلتك' },
          ],
        },
        tags: ['daily-routine', 'questions'], d: 1, limit: 18,
      },
    ],
    fills: [
      { en: 'I wake up at six in the morning.', ar: 'أستيقظ في السادسة صباحا.', word: 'wake', hint: 'يستيقظ' },
      { en: 'I brush my teeth every morning.', ar: 'أنظف أسناني كل صباح.', word: 'brush' },
      { en: 'I eat breakfast with my family.', ar: 'أتناول الفطور مع عائلتي.', word: 'breakfast' },
      { en: 'My brother does not eat breakfast.', ar: 'أخي لا يتناول الفطور.', word: 'does', hint: 'نفي' },
      { en: 'I get dressed in my bedroom.', ar: 'ألبس ملابسي في غرفة النوم.', word: 'dressed' },
      { en: 'My parents wake up very early.', ar: 'والداي يستيقظان مبكرا جدا.', word: 'early', hint: 'وقت' },
      { en: 'We eat dinner together every evening.', ar: 'نتعشى معا كل مساء.', word: 'together' },
      { en: 'I go to work by bus.', ar: 'أذهب إلى العمل بالحافلة.', word: 'bus', hint: 'مواصلات' },
    ],
    orders: [
      { en: 'I brush my teeth every morning.', ar: 'أنظف أسناني كل صباح.' },
      { en: 'We eat dinner together every evening.', ar: 'نتعشى معا كل مساء.' },
      { en: 'Does your sister sleep late?', ar: 'هل تنام أختك متأخرة؟' },
      { en: 'My father does not work on Friday.', ar: 'أبي لا يعمل يوم الجمعة.' },
      { en: 'The children go to school at seven.', ar: 'يذهب الأطفال إلى المدرسة في السابعة.' },
      { en: 'I get dressed in my bedroom.', ar: 'ألبس ملابسي في غرفة النوم.' },
    ],
    mc: [
      { question: 'What do you do first in the morning?', options: ['I wake up', 'I eat dinner', 'I go to bed', 'I watch TV'], answerIndex: 0, ar: 'ماذا تفعل أولا في الصباح؟' },
      { question: 'You clean your teeth. You say:', options: ['I brush my teeth', 'I wash the car', 'I get dressed', 'I sleep'], answerIndex: 0, ar: 'تنظف أسنانك، فتقول:' },
      { question: 'Which sentence is correct?', options: ['She gets up early.', 'She get up early.', 'She getting up early.', 'She gots up early.'], answerIndex: 0, ar: 'أي جملة صحيحة؟', explanation: 'With he / she / it we add -s: she gets up early.' },
      { question: '"We pray in the morning" means:', options: ['نصلي في الصباح', 'ننام في الصباح', 'نأكل في الصباح', 'نعمل في الصباح'], answerIndex: 0, ar: 'ما معنى We pray in the morning؟' },
    ],
  },

  /* ================= lesson 22 — Telling the Time ================= */
  {
    num: 22,
    tags: ['time', 'questions'],
    objectives: [
      'Ask for and tell the time',
      'Use o\'clock, half past, quarter past and quarter to',
      'Say when daily events happen',
    ],
    grammar: {
      explanation: 'To ask about the time, say "What time is it?". The answer starts with "It is...". Use "o\'clock" for the exact hour: "It is nine o\'clock". Use "half past" for :30 — "It is half past seven" (7:30). Use "quarter past" for :15 and "quarter to" for :45 — "It is a quarter past five" (5:15), "It is a quarter to nine" (8:45). Use "at" with clock times for events: "The meeting starts at half past nine". Morning hours are "in the morning" and evening hours are "in the evening".',
      explanationAr: 'للسؤال عن الوقت نقول What time is it؟ ويبدأ الجواب بـ It is. نستخدم o\'clock للساعة التامة: It is nine o\'clock. ونستخدم half past للنصف: It is half past seven أي السابعة والنصف. ونستخدم quarter past للربع والquarter to إلا الربع: It is a quarter past five، It is a quarter to nine. ونستخدم at مع أوقات الأحداث: The meeting starts at half past nine. وساعات الصباح نقول عنها in the morning، وساعات المساء نقول عنها in the evening.',
      examples: [
        { en: 'What time is it? It is three o\'clock.', ar: 'كم الساعة؟ الساعة الثالثة تماما.' },
        { en: 'It is half past ten.', ar: 'الساعة العاشرة والنصف.' },
        { en: 'The bus leaves at a quarter past six.', ar: 'تغادر الحافلة في السادسة والربع.' },
      ],
    },
    vocabulary: [
      { word: 'time', meaningAr: 'وقت / الساعة', example: 'What time is it?', ipa: 'taɪm' },
      { word: 'clock', meaningAr: 'ساعة حائط', example: 'The clock is on the wall.' },
      { word: 'watch', meaningAr: 'ساعة يد', example: 'My watch is new.' },
      { word: 'hour', meaningAr: 'ساعة (مدة)', example: 'The class is one hour.' },
      { word: 'minute', meaningAr: 'دقيقة', example: 'Wait five minutes, please.' },
      { word: 'o\'clock', meaningAr: 'تماما (ساعة تامة)', example: 'It is eight o\'clock.' },
      { word: 'half past', meaningAr: 'والنصف', example: 'It is half past seven.' },
      { word: 'quarter past', meaningAr: 'والربع', example: 'It is a quarter past five.' },
      { word: 'quarter to', meaningAr: 'إلا الربع', example: 'It is a quarter to nine.' },
      { word: 'morning', meaningAr: 'صباح', example: 'It is six o\'clock in the morning.' },
      { word: 'noon', meaningAr: 'الظهر', example: 'We eat lunch at noon.' },
      { word: 'evening', meaningAr: 'مساء', example: 'The shop closes in the evening.' },
    ],
    scenario: [
      { en: 'What time is it, please?', ar: 'كم الساعة من فضلك؟', d: 1 },
      { en: 'Excuse me, what time is it?', ar: 'عفوا، كم الساعة؟', d: 1 },
      { en: 'It is half past seven.', ar: 'الساعة السابعة والنصف.', d: 1 },
      { en: 'It is a quarter past five.', ar: 'الساعة الخامسة والربع.', d: 1 },
      { en: 'It is a quarter to nine.', ar: 'الساعة التاسعة إلا الربع.', d: 2 },
      { en: 'It is six o\'clock in the morning.', ar: 'الساعة السادسة صباحا.', d: 1 },
      { en: 'It is eight o\'clock in the evening.', ar: 'الساعة الثامنة مساء.', d: 2 },
      { en: 'I wake up at half past six.', ar: 'أستيقظ في السادسة والنصف.', d: 1 },
      { en: 'The children watch TV after school.', ar: 'يشاهد الأطفال التلفاز بعد المدرسة.', d: 1 },
      { en: 'The shop closes at seven in the evening.', ar: 'يغلق المتجر في السابعة مساء.', d: 2 },
      { en: 'The meeting starts at half past nine.', ar: 'يبدأ الاجتماع في التاسعة والنصف.', d: 2 },
      { en: 'I do not have a watch.', ar: 'ليس لدي ساعة يد.', d: 2 },
      { en: 'The children come home at three o\'clock.', ar: 'يعود الأطفال إلى البيت في الثالثة تماما.', d: 2 },
      { en: 'Is it five o\'clock now?', ar: 'هل هي الخامسة الآن؟', d: 2 },
      { en: 'No, it is only half past four.', ar: 'لا، إنها الرابعة والنصف فقط.', d: 2 },
      { en: 'Thank you, it is late.', ar: 'شكرا لك، الوقت متأخر.', d: 2 },
      { en: 'School starts at eight o\'clock.', ar: 'تبدأ المدرسة في الثامنة تماما.', d: 1 },
      { en: 'The bus arrives at a quarter past six.', ar: 'تصل الحافلة في السادسة والربع.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'It is {T}.', arTmpl: 'الساعة {T_ar}.',
        slots: {
          T: [
            { en: 'one o\'clock', ar: 'الواحدة تماما' }, { en: 'two o\'clock', ar: 'الثانية تماما' },
            { en: 'three o\'clock', ar: 'الثالثة تماما' }, { en: 'four o\'clock', ar: 'الرابعة تماما' },
            { en: 'five o\'clock', ar: 'الخامسة تماما' }, { en: 'six o\'clock', ar: 'السادسة تماما' },
            { en: 'seven o\'clock', ar: 'السابعة تماما' }, { en: 'eight o\'clock', ar: 'الثامنة تماما' },
            { en: 'nine o\'clock', ar: 'التاسعة تماما' }, { en: 'ten o\'clock', ar: 'العاشرة تماما' },
            { en: 'eleven o\'clock', ar: 'الحادية عشرة تماما' }, { en: 'twelve o\'clock', ar: 'الثانية عشرة تماما' },
            { en: 'half past one', ar: 'الواحدة والنصف' }, { en: 'half past two', ar: 'الثانية والنصف' },
            { en: 'half past three', ar: 'الثالثة والنصف' }, { en: 'half past four', ar: 'الرابعة والنصف' },
          ],
        },
        tags: ['time'], d: 1, limit: 16,
      },
      {
        tmpl: 'We {V} at {T}.', arTmpl: '{V_ar} في {T_ar}.',
        slots: {
          V: [
            { en: 'eat breakfast', ar: 'نتناول الفطور' }, { en: 'eat lunch', ar: 'نتناول الغداء' },
            { en: 'eat dinner', ar: 'نتعشى' }, { en: 'come home', ar: 'نرجع إلى البيت' },
            { en: 'go to work', ar: 'نذهب إلى العمل' }, { en: 'go to school', ar: 'نذهب إلى المدرسة' },
          ],
          T: [
            { en: 'seven o\'clock', ar: 'السابعة تماما' }, { en: 'eight o\'clock', ar: 'الثامنة تماما' },
            { en: 'one o\'clock', ar: 'الواحدة تماما' }, { en: 'half past seven', ar: 'السابعة والنصف' },
            { en: 'half past eight', ar: 'الثامنة والنصف' }, { en: 'half past twelve', ar: 'الثانية عشرة والنصف' },
            { en: 'a quarter past six', ar: 'السادسة والربع' }, { en: 'a quarter to nine', ar: 'التاسعة إلا الربع' },
          ],
        },
        tags: ['time', 'daily-routine'], d: 2, limit: 18,
      },
      {
        tmpl: 'Is it {T} now?', arTmpl: 'هل الساعة {T_ar} الآن؟',
        slots: {
          T: [
            { en: 'four o\'clock', ar: 'الرابعة تماما' }, { en: 'five o\'clock', ar: 'الخامسة تماما' },
            { en: 'six o\'clock', ar: 'السادسة تماما' }, { en: 'seven o\'clock', ar: 'السابعة تماما' },
            { en: 'half past four', ar: 'الرابعة والنصف' }, { en: 'half past five', ar: 'الخامسة والنصف' },
            { en: 'half past six', ar: 'السادسة والنصف' }, { en: 'half past seven', ar: 'السابعة والنصف' },
          ],
        },
        tags: ['time', 'questions'], d: 2, limit: 8,
      },
      {
        tmpl: 'Please wake me up at {T}.', arTmpl: 'أيقظني في {T_ar} من فضلك.',
        slots: {
          T: [
            { en: 'five', ar: 'الخامسة' }, { en: 'six', ar: 'السادسة' }, { en: 'seven', ar: 'السابعة' },
            { en: 'six thirty', ar: 'السادسة والنصف' }, { en: 'seven thirty', ar: 'السابعة والنصف' },
            { en: 'eight', ar: 'الثامنة' },
          ],
        },
        tags: ['time', 'polite-requests'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'What time is it, please?', ar: 'كم الساعة من فضلك؟', word: 'time', hint: 'الوقت' },
      { en: 'It is a quarter to nine.', ar: 'الساعة التاسعة إلا الربع.', word: 'quarter', hint: 'الربع' },
      { en: 'It is six o\'clock in the morning.', ar: 'الساعة السادسة صباحا.', word: 'morning' },
      { en: 'I do not have a watch.', ar: 'ليس لدي ساعة يد.', word: 'watch', hint: 'ساعة اليد' },
      { en: 'The meeting starts at half past nine.', ar: 'يبدأ الاجتماع في التاسعة والنصف.', word: 'half' },
      { en: 'The children come home at three o\'clock.', ar: 'يعود الأطفال إلى البيت في الثالثة تماما.', word: 'home' },
      { en: 'The shop closes at seven in the evening.', ar: 'يغلق المتجر في السابعة مساء.', word: 'closes' },
      { en: 'School starts at eight o\'clock.', ar: 'تبدأ المدرسة في الثامنة تماما.', word: 'o\'clock' },
    ],
    orders: [
      { en: 'What time is it, please?', ar: 'كم الساعة من فضلك؟' },
      { en: 'It is a quarter to nine.', ar: 'الساعة التاسعة إلا الربع.' },
      { en: 'The shop closes at seven in the evening.', ar: 'يغلق المتجر في السابعة مساء.' },
      { en: 'The children come home at three o\'clock.', ar: 'يعود الأطفال إلى البيت في الثالثة تماما.' },
      { en: 'I do not have a watch.', ar: 'ليس لدي ساعة يد.' },
      { en: 'The children watch TV after school.', ar: 'يشاهد الأطفال التلفاز بعد المدرسة.' },
    ],
    mc: [
      { question: 'How do you ask about the time?', options: ['What time is it?', 'What day is it?', 'What color is it?', 'How old are you?'], answerIndex: 0, ar: 'كيف تسأل عن الوقت؟' },
      { question: 'The time is 7:30. You say:', options: ['It is half past seven.', 'It is half past eight.', 'It is a quarter past seven.', 'It is a quarter to seven.'], answerIndex: 0, ar: 'الساعة 7:30، فتقول:' },
      { question: '"A quarter to nine" means:', options: ['التاسعة إلا الربع', 'التاسعة والربع', 'التاسعة والنصف', 'التاسعة تماما'], answerIndex: 0, ar: 'ما معنى A quarter to nine؟' },
      { question: 'You wake up at 6:00. You say:', options: ['I wake up at six o\'clock.', 'I wake up at half past six.', 'I wake up at a quarter to six.', 'I wake up at six thirty.'], answerIndex: 0, ar: 'تستيقظ في السادسة تماما، فتقول:' },
    ],
  },

  /* ================= lesson 23 — Making Polite Requests ================= */
  {
    num: 23,
    tags: ['polite-requests', 'imperative'],
    objectives: [
      'Make polite requests with Can you / Could you / Would you',
      'Use Please + verb and polite negative requests',
      'Respond politely with Of course, Sure and No problem',
    ],
    grammar: {
      explanation: 'We make polite requests with "Can you...?", "Could you...?" and "Would you...?" — "Can you open the window?" is direct, "Could you open the window, please?" is more polite, and "Would you open the window, please?" is the most polite of the three. With Please + verb you give a polite instruction: "Please give me that book". The negative request is "Please do not be late". Good polite answers are "Of course", "Sure" and "No problem", and if you refuse, say "Sorry, I can not".',
      explanationAr: 'نطلب بأدب بـ Can you...؟ وCould you...؟ وWould you...؟ فصيغة Can you open the window مباشرة، وCould you open the window, please؟ أكثر تأدبا، وWould you open the window, please؟ هي الأكثر تأدبا. وصيغة Please مع الفعل تعطي أمرا مهذبا: Please give me that book. والطلب المنفي يكون Please do not be late. ومن الأجوبة المهذبة Of course وSure وNo problem، وإذا رفضت قل Sorry, I can not.',
      examples: [
        { en: 'Could you open the window, please?', ar: 'هل يمكنك فتح النافذة من فضلك؟' },
        { en: 'Please sit down, children.', ar: 'اجلسوا من فضلك يا أطفال.' },
        { en: 'Would you like some water?', ar: 'هل تفضل بعض الماء؟' },
      ],
    },
    vocabulary: [
      { word: 'please', meaningAr: 'من فضلك', example: 'Please give me that book.', ipa: 'pliːz' },
      { word: 'can you', meaningAr: 'هل تستطيع', example: 'Can you pass the salt?' },
      { word: 'could you', meaningAr: 'هل يمكنك (أكثر تأدبا)', example: 'Could you wait a minute, please?' },
      { word: 'would you', meaningAr: 'هل تفضل / هل تود', example: 'Would you help me, please?' },
      { word: 'of course', meaningAr: 'بالتأكيد', example: 'Of course, I can help you.' },
      { word: 'sure', meaningAr: 'حسنا / أكيد', example: 'Sure, no problem at all.' },
      { word: 'request', meaningAr: 'طلب', example: 'This is a polite request.' },
      { word: 'pass', meaningAr: 'يمرر / يناول', example: 'Can you pass the bread?' },
      { word: 'bring', meaningAr: 'يحضر', example: 'Bring me some water, please.' },
      { word: 'turn off', meaningAr: 'يطفئ', example: 'Turn off the light, please.' },
      { word: 'politely', meaningAr: 'بأدب', example: 'Please ask politely.' },
      { word: 'here you are', meaningAr: 'تفضل', example: 'Here you are, my friend.' },
    ],
    scenario: [
      { en: 'Can you pass the salt, please?', ar: 'هل يمكنك تمرير الملح من فضلك؟', d: 1 },
      { en: 'Could you close the door, please?', ar: 'هل يمكنك إغلاق الباب من فضلك؟', d: 1 },
      { en: 'Would you help me, please?', ar: 'هل تساعدني من فضلك؟', d: 1 },
      { en: 'Of course, I can help you.', ar: 'بالتأكيد، أستطيع مساعدتك.', d: 1 },
      { en: 'Please give me that book.', ar: 'أعطني ذلك الكتاب من فضلك.', d: 1 },
      { en: 'Could you wait a minute, please?', ar: 'هل يمكنك الانتظار دقيقة من فضلك؟', d: 2 },
      { en: 'Please do not be late.', ar: 'من فضلك لا تتأخر.', d: 2 },
      { en: 'Can you turn off the light, please?', ar: 'هل يمكنك إطفاء الضوء من فضلك؟', d: 2 },
      { en: 'Sure, no problem at all.', ar: 'حسنا، لا مشكلة على الإطلاق.', d: 2 },
      { en: 'Would you bring me some water, please?', ar: 'هل تحضر لي بعض الماء من فضلك؟', d: 2 },
      { en: 'Yes, here you are.', ar: 'نعم، تفضل.', d: 1 },
      { en: 'Please come in and sit down.', ar: 'تفضل بالدخول واجلس من فضلك.', d: 2 },
      { en: 'Would you like some milk?', ar: 'هل تفضل بعض الحليب؟', d: 1 },
      { en: 'Yes, please. Thank you.', ar: 'نعم، من فضلك. شكرا لك.', d: 1 },
      { en: 'Please help your mother in the kitchen.', ar: 'ساعد أمك في المطبخ من فضلك.', d: 2 },
      { en: 'Could you carry these bags, please?', ar: 'هل يمكنك حمل هذه الحقائب من فضلك؟', d: 2 },
      { en: 'Can I see your new phone?', ar: 'هل أرى هاتفك الجديد؟', d: 2 },
      { en: 'No, sorry, I need it now.', ar: 'لا، آسف، أحتاجه الآن.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Could you {V} {O}, please?', arTmpl: 'هل يمكنك {V_ar} {O_ar} من فضلك؟',
        slots: {
          V: [
            { en: 'open', ar: 'فتح' }, { en: 'close', ar: 'إغلاق' }, { en: 'carry', ar: 'حمل' },
            { en: 'bring', ar: 'إحضار' }, { en: 'pass', ar: 'تمرير' },
          ],
          O: [
            { en: 'the window', ar: 'النافذة' }, { en: 'the door', ar: 'الباب' },
            { en: 'the heavy bag', ar: 'الحقيبة الثقيلة' }, { en: 'some water', ar: 'بعض الماء' },
            { en: 'the sugar', ar: 'السكر' }, { en: 'this chair', ar: 'هذا الكرسي' },
          ],
        },
        tags: ['polite-requests', 'could'], d: 1, limit: 20,
      },
      {
        tmpl: 'Please {V} {O}.', arTmpl: '{V_ar} {O_ar} من فضلك.',
        slots: {
          V: [
            { en: 'give me', ar: 'أعطني' }, { en: 'bring me', ar: 'أحضر لي' }, { en: 'pass me', ar: 'مرر لي' },
          ],
          O: [
            { en: 'the book', ar: 'الكتاب' }, { en: 'some tea', ar: 'بعض الشاي' },
            { en: 'some water', ar: 'بعض الماء' }, { en: 'the bread', ar: 'الخبز' },
            { en: 'the sugar', ar: 'السكر' }, { en: 'my pen', ar: 'قلمي' },
          ],
        },
        tags: ['polite-requests', 'imperative'], d: 1, limit: 12,
      },
      {
        tmpl: 'Would you like {D}?', arTmpl: 'هل تفضل {D_ar}؟',
        slots: {
          D: [
            { en: 'an apple', ar: 'تفاحة' }, { en: 'some milk', ar: 'بعض الحليب' },
            { en: 'a glass of water', ar: 'كوبا من الماء' }, { en: 'some bread', ar: 'بعض الخبز' },
            { en: 'an orange', ar: 'برتقالة' }, { en: 'a banana', ar: 'موزة' },
          ],
        },
        tags: ['polite-requests', 'offers'], d: 1, limit: 6,
      },
      {
        tmpl: 'Sorry, I can not {V} now.', arTmpl: 'آسف، لا أستطيع {V_ar} الآن.',
        slots: {
          V: [
            { en: 'help you', ar: 'مساعدتك' }, { en: 'come today', ar: 'المجيء اليوم' },
            { en: 'stay here', ar: 'البقاء هنا' }, { en: 'carry it', ar: 'حمله' },
            { en: 'hear you', ar: 'سماعك' },
          ],
        },
        tags: ['polite-requests', 'apologies'], d: 2, limit: 5,
      },
    ],
    fills: [
      { en: 'Can you pass the salt, please?', ar: 'هل يمكنك تمرير الملح من فضلك؟', word: 'pass', hint: 'يمرر' },
      { en: 'Please do not be late.', ar: 'من فضلك لا تتأخر.', word: 'late' },
      { en: 'Would you like some milk?', ar: 'هل تفضل بعض الحليب؟', word: 'Would' },
      { en: 'Sorry, I can not help you now.', ar: 'آسف، لا أستطيع مساعدتك الآن.', word: 'Sorry' },
      { en: 'Could you carry these bags, please?', ar: 'هل يمكنك حمل هذه الحقائب من فضلك؟', word: 'carry' },
      { en: 'Yes, here you are.', ar: 'نعم، تفضل.', word: 'here' },
      { en: 'Please give me that book.', ar: 'أعطني ذلك الكتاب من فضلك.', word: 'give' },
      { en: 'Sure, no problem at all.', ar: 'حسنا، لا مشكلة على الإطلاق.', word: 'Sure' },
    ],
    orders: [
      { en: 'Could you pass the salt, please?', ar: 'هل يمكنك تمرير الملح من فضلك؟' },
      { en: 'Please do not be late.', ar: 'من فضلك لا تتأخر.' },
      { en: 'Would you like some milk?', ar: 'هل تفضل بعض الحليب؟' },
      { en: 'Sorry, I can not help you now.', ar: 'آسف، لا أستطيع مساعدتك الآن.' },
      { en: 'Yes, here you are.', ar: 'نعم، تفضل.' },
      { en: 'Could you carry these bags, please?', ar: 'هل يمكنك حمل هذه الحقائب من فضلك؟' },
    ],
    mc: [
      { question: 'Which request is the most polite?', options: ['Could you open the window, please?', 'Open the window.', 'You open the window.', 'Window open now.'], answerIndex: 0, ar: 'أي طلب هو الأكثر تأدبا؟' },
      { question: 'You offer tea politely. You say:', options: ['Would you like some tea?', 'Give tea!', 'Tea now.', 'You want tea.'], answerIndex: 0, ar: 'تعرض الشاي بأدب، فتقول:' },
      { question: '"No problem" means:', options: ['لا مشكلة', 'مشكلة كبيرة', 'لا أعرف', 'لا شكرا'], answerIndex: 0, ar: 'ما معنى No problem؟' },
      { question: 'Someone says "Thank you." You answer:', options: ['You are welcome.', 'I am late.', 'Good night.', 'My name is Ali.'], answerIndex: 0, ar: 'قال أحدهم Thank you، فتجيب:' },
    ],
  },

  /* ================= lesson 24 — Thanks and Apologies ================= */
  {
    num: 24,
    tags: ['thanks', 'apologies'],
    objectives: [
      'Thank people in natural ways',
      'Apologize and accept apologies politely',
      'Use Excuse me before interrupting or asking',
    ],
    grammar: {
      explanation: 'Thank people with "Thank you", "Thank you very much", "Thanks" or "Thanks a lot" — "Thanks" is friendly and informal. Answers are "You are welcome", "No problem" and "Never mind". To apologize, say "I am sorry" or "I am sorry for the mistake"; if it is small, answer "It is okay" or "No problem". Use "Excuse me" BEFORE you interrupt, ask a question or pass in front of someone, and "Sorry" AFTER a small mistake: "Excuse me, can I come in?" / "I am sorry, I am late".',
      explanationAr: 'نشكر بـ Thank you وThank you very much وThanks وThanks a lot، وThanks ودية وغير رسمية. ومن الأجوبة You are welcome وNo problem وNever mind. وللاعتذار نقول I am sorry أو I am sorry for the mistake، وإذا كان الأمر صغيرا فالجواب It is okay أو No problem. نستخدم Excuse me قبل أن نقاطع أو نسأل أو نمر أمام أحدهم، أما Sorry فنقولها بعد خطأ صغير: Excuse me, can I come in؟ وI am sorry, I am late.',
      examples: [
        { en: 'Thank you so much, teacher.', ar: 'شكرا جزيلا يا معلم.' },
        { en: 'I am sorry for the delay.', ar: 'أنا آسف على التأخير.' },
        { en: 'Excuse me, can I come in?', ar: 'عفوا، هل يمكنني الدخول؟' },
      ],
    },
    vocabulary: [
      { word: 'thank you', meaningAr: 'شكرا لك', example: 'Thank you very much, Omar.', ipa: 'θæŋk juː' },
      { word: 'thanks a lot', meaningAr: 'شكرا جزيلا', example: 'Thanks a lot, my friend.' },
      { word: 'you are welcome', meaningAr: 'على الرحب والسعة', example: 'You are welcome, Sara.' },
      { word: 'sorry', meaningAr: 'آسف', example: 'I am sorry, I am late.' },
      { word: 'excuse me', meaningAr: 'عفوا (قبل المقاطعة)', example: 'Excuse me, is this seat free?' },
      { word: 'no problem', meaningAr: 'لا مشكلة', example: 'No problem, come in.' },
      { word: 'never mind', meaningAr: 'لا بأس / لا تهتم', example: 'Never mind, it is okay.' },
      { word: 'apologize', meaningAr: 'يعتذر', example: 'He says sorry to apologize.' },
      { word: 'mistake', meaningAr: 'خطأ', example: 'It is my mistake.' },
      { word: 'polite', meaningAr: 'مهذب', example: 'Thanks is a polite word.' },
      { word: 'kind', meaningAr: 'لطيف', example: 'Thank you, that is very kind.' },
      { word: 'okay', meaningAr: 'حسنا / بخير', example: 'It is okay, do not worry.' },
    ],
    scenario: [
      { en: 'Thank you very much, Omar.', ar: 'شكرا جزيلا يا عمر.', d: 1 },
      { en: 'Thanks a lot, my friend.', ar: 'ألف شكر يا صديقي.', d: 1 },
      { en: 'You are welcome, sir.', ar: 'على الرحب والسعة يا سيدي.', d: 1 },
      { en: 'I am sorry, I am late.', ar: 'أنا آسف، أنا متأخر.', d: 1 },
      { en: 'No problem, come in.', ar: 'لا مشكلة، تفضل بالدخول.', d: 1 },
      { en: 'Excuse me, can I pass?', ar: 'عفوا، هل أستطيع المرور؟', d: 2 },
      { en: 'I am sorry, it is my mistake.', ar: 'أنا آسف، هذا خطئي.', d: 2 },
      { en: 'Never mind, it is okay.', ar: 'لا بأس، لا تهتم.', d: 2 },
      { en: 'Excuse me, is this seat free?', ar: 'عفوا، هل هذا المقعد فارغ؟', d: 2 },
      { en: 'Yes, it is free, please sit.', ar: 'نعم، إنه فارغ، تفضل بالجلوس.', d: 2 },
      { en: 'Can I help you, sir?', ar: 'هل أستطيع مساعدتك يا سيدي؟', d: 2 },
      { en: 'Yes, please, I need help.', ar: 'نعم، من فضلك، أحتاج مساعدة.', d: 2 },
      { en: 'I am sorry, I do not remember.', ar: 'أنا آسف، لا أتذكر.', d: 2 },
      { en: 'It is okay, do not worry.', ar: 'لا بأس، لا تقلق.', d: 2 },
      { en: 'Thank you, that is very kind.', ar: 'شكرا لك، هذا لطف كبير.', d: 2 },
      { en: 'We are sorry for the noise.', ar: 'نحن آسفون على الضجيج.', d: 2 },
      { en: 'Do not worry, it is fine.', ar: 'لا تقلق، كل شيء بخير.', d: 2 },
      { en: 'Excuse me, I have a question.', ar: 'عفوا، لدي سؤال.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Thank you for the {N}.', arTmpl: 'شكرا على {N_ar}.',
        slots: {
          N: [
            { en: 'book', ar: 'الكتاب' }, { en: 'gift', ar: 'الهدية' }, { en: 'food', ar: 'الطعام' },
            { en: 'drink', ar: 'الشراب' }, { en: 'visit', ar: 'الزيارة' }, { en: 'message', ar: 'الرسالة' },
            { en: 'call', ar: 'المكالمة' }, { en: 'coffee', ar: 'القهوة' },
          ],
        },
        tags: ['thanks'], d: 1, limit: 8,
      },
      {
        tmpl: 'I am sorry for {X}.', arTmpl: 'أنا آسف على {X_ar}.',
        slots: {
          X: [
            { en: 'the mistake', ar: 'الخطأ' }, { en: 'the noise', ar: 'الضجيج' },
            { en: 'the delay', ar: 'التأخير' }, { en: 'the trouble', ar: 'الإزعاج' },
            { en: 'the broken cup', ar: 'الكوب المكسور' }, { en: 'the wrong number', ar: 'الرقم الخطأ' },
            { en: 'the long wait', ar: 'الانتظار الطويل' }, { en: 'the noise at night', ar: 'الضجيج في الليل' },
          ],
        },
        tags: ['apologies'], d: 2, limit: 8,
      },
      {
        tmpl: 'Excuse me, {Q}?', arTmpl: 'عفوا، {Q_ar}؟',
        slots: {
          Q: [
            { en: 'can I sit here', ar: 'هل يمكنني الجلوس هنا' },
            { en: 'can I come in', ar: 'هل يمكنني الدخول' },
            { en: 'can I ask you', ar: 'هل يمكنني سؤالك' },
            { en: 'can I open the window', ar: 'هل يمكنني فتح النافذة' },
            { en: 'can I help you', ar: 'هل يمكنني مساعدتك' },
            { en: 'can I pay here', ar: 'هل يمكنني الدفع هنا' },
          ],
        },
        tags: ['apologies', 'questions'], d: 2, limit: 6,
      },
      {
        tmpl: 'You are welcome, {P}.', arTmpl: 'على الرحب والسعة يا {P_ar}.',
        slots: { P: B.NAMED_SING },
        tags: ['thanks'], d: 1, limit: 8,
      },
      {
        tmpl: 'It is okay, {P}.', arTmpl: 'لا بأس يا {P_ar}.',
        slots: { P: B.NAMED_SING },
        tags: ['apologies'], d: 1, limit: 8,
      },
    ],
    fills: [
      { en: 'Thank you very much, Omar.', ar: 'شكرا جزيلا يا عمر.', word: 'Thank', hint: 'شكر' },
      { en: 'Thanks a lot, my friend.', ar: 'ألف شكر يا صديقي.', word: 'Thanks' },
      { en: 'You are welcome, sir.', ar: 'على الرحب والسعة يا سيدي.', word: 'welcome' },
      { en: 'I am sorry, I am late.', ar: 'أنا آسف، أنا متأخر.', word: 'sorry' },
      { en: 'Excuse me, is this seat free?', ar: 'عفوا، هل هذا المقعد فارغ؟', word: 'Excuse', hint: 'لقول عفوا' },
      { en: 'No problem, come in.', ar: 'لا مشكلة، تفضل بالدخول.', word: 'problem' },
      { en: 'Never mind, it is okay.', ar: 'لا بأس، لا تهتم.', word: 'Never' },
      { en: 'I am sorry, it is my mistake.', ar: 'أنا آسف، هذا خطئي.', word: 'mistake' },
    ],
    orders: [
      { en: 'I am sorry, I am late.', ar: 'أنا آسف، أنا متأخر.' },
      { en: 'Thank you, that is very kind.', ar: 'شكرا لك، هذا لطف كبير.' },
      { en: 'Excuse me, is this seat free?', ar: 'عفوا، هل هذا المقعد فارغ؟' },
      { en: 'You are welcome, my friend.', ar: 'على الرحب والسعة يا صديقي.' },
      { en: 'No problem, come in.', ar: 'لا مشكلة، تفضل بالدخول.' },
      { en: 'We are sorry for the noise.', ar: 'نحن آسفون على الضجيج.' },
    ],
    mc: [
      { question: 'You step on someone\'s foot. You say:', options: ['I am sorry!', 'Thank you!', 'You are welcome!', 'Good luck!'], answerIndex: 0, ar: 'دهشت قدم أحدهم، فتقول:' },
      { question: '"Thanks a lot" means:', options: ['شكرا جزيلا', 'لا بأس', 'عفوا', 'أنا آسف'], answerIndex: 0, ar: 'ما معنى Thanks a lot؟' },
      { question: 'You want to pass in a crowd. You say:', options: ['Excuse me', 'Go away', 'Hurry up', 'Come here'], answerIndex: 0, ar: 'تريد المرور وسط الزحام، فتقول:' },
      { question: '"Never mind" means:', options: ['لا بأس', 'انتبه جيدا', 'لا أذكر', 'بطيء جدا'], answerIndex: 0, ar: 'ما معنى Never mind؟' },
    ],
  },
];
