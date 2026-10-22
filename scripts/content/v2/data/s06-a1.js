/* ============================================================
   v2 section data — s06-a1.js
   Health & Emergencies · lessons 124–127
   124 At the Dentist · 125 At the Hospital ·
   126 Health Insurance · 127 Emergency Calls
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 124 — At the Dentist ================= */
  {
    num: 124,
    tags: ['dentist', 'teeth', 'health'],
    objectives: [
      'Describe a toothache and other dental problems',
      'Understand what the dentist asks and says',
      'Follow care instructions before and after treatment',
    ],
    grammar: {
      explanation: 'At the dentist you describe pain with "My tooth hurts" or "I have a toothache". Use the past simple for problems that already happened: "My filling fell out last night". The dentist gives instructions with the imperative: "Open your mouth, please", "Rinse your mouth". Use "will" for the treatment that comes next: "The dentist will clean my teeth today". After treatment you can say "It does not hurt now".',
      explanationAr: 'عند طبيب الأسنان تصف الألم بـ My tooth hurts أو I have a toothache. واستخدم الماضي البسيط للمشاكل التي حدثت: My filling fell out last night. ويعطي الطبيب التعليمات بصيغة الأمر: Open your mouth, please وRinse your mouth. واستخدم will للعلاج القادم: The dentist will clean my teeth today. وبعد العلاج يمكنك أن تقول It does not hurt now.',
      examples: [
        { en: 'I have a toothache.', ar: 'عندي ألم في الأسنان.' },
        { en: 'My filling fell out last night.', ar: 'سقطت حشوتي الليلة الماضية.' },
        { en: 'Open your mouth, please.', ar: 'افتح فمك من فضلك.' },
      ],
    },
    vocabulary: [
      { word: 'dentist', meaningAr: 'طبيب أسنان', example: 'The dentist checked my teeth.', ipa: 'ˈdɛntɪst' },
      { word: 'toothache', meaningAr: 'ألم في الأسنان', example: 'I have a toothache.', ipa: 'ˈtuːθeɪk' },
      { word: 'filling', meaningAr: 'حشوة', example: 'My filling fell out.', ipa: 'ˈfɪlɪŋ' },
      { word: 'cavity', meaningAr: 'تجويف في السن', example: 'You have a small cavity.', ipa: 'ˈkævəti' },
      { word: 'molar', meaningAr: 'ضرس', example: 'This molar hurts.', ipa: 'ˈmoʊlər' },
      { word: 'gum', meaningAr: 'لثة', example: 'My gums bleed when I brush.' },
      { word: 'brush', meaningAr: 'ينظف بالفرشاة', example: 'Brush your teeth twice a day.', ipa: 'brʌʃ' },
      { word: 'rinse', meaningAr: 'يمضمض', example: 'Rinse your mouth with water.', ipa: 'rɪns' },
      { word: 'hurt', meaningAr: 'يؤلم', example: 'My tooth hurts a lot.', ipa: 'hɜːrt' },
      { word: 'clean', meaningAr: 'ينظف', example: 'The dentist will clean my teeth.' },
      { word: 'appointment', meaningAr: 'موعد', example: 'When is my next appointment?', ipa: 'əˈpɔɪntmənt' },
      { word: 'clinic', meaningAr: 'عيادة', example: 'The clinic opens at nine.' },
    ],
    scenario: [
      { en: 'I have a toothache.', ar: 'عندي ألم في الأسنان.', d: 1 },
      { en: 'Open your mouth, please.', ar: 'افتح فمك من فضلك.', d: 1 },
      { en: 'Which tooth hurts?', ar: 'أي سن يؤلمك؟', d: 1 },
      { en: 'This molar hurts when I drink cold water.', ar: 'هذا الضرس يؤلمني عندما أشرب الماء البارد.', d: 2 },
      { en: 'It doesn\'t hurt now, thank you.', ar: 'لا يؤلمني الآن، شكرا لك.', d: 1 },
      { en: 'The dentist will clean my teeth this afternoon.', ar: 'سينظف طبيب الأسنان أسناني بعد الظهر.', d: 2 },
      { en: 'You have a small cavity in one tooth.', ar: 'لديك تجويف صغير في سن واحد.', d: 2 },
      { en: 'Do your gums bleed when you brush?', ar: 'هل تنزف لثتك عندما تنظف أسنانك؟', d: 2 },
      { en: 'Yes, a little, every morning.', ar: 'نعم، قليلا، كل صباح.', d: 2 },
      { en: 'Rinse your mouth, please.', ar: 'مضمض فمك من فضلك.', d: 1 },
      { en: 'I brush my teeth twice a day.', ar: 'أنظف أسناني مرتين في اليوم.', d: 2 },
      { en: 'Brush your teeth after every meal.', ar: 'نظف أسنانك بعد كل وجبة.', d: 1 },
      { en: 'My son is afraid of the dentist.', ar: 'ابني يخاف من طبيب الأسنان.', d: 3 },
      { en: 'The nurse called my name at the clinic.', ar: 'نادت الممرضة اسمي في العيادة.', d: 3 },
      { en: 'When is my next appointment?', ar: 'متى موعدي القادم؟', d: 2 },
      { en: 'The dentist filled two teeth yesterday.', ar: 'حشا طبيب الأسنان سنّين أمس.', d: 3 },
      { en: 'My filling fell out last night.', ar: 'سقطت حشوتي الليلة الماضية.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'My {T} hurts.', arTmpl: '{T_ar}.',
        slots: {
          T: [
            { en: 'tooth', ar: 'سني يؤلمني' }, { en: 'molar', ar: 'ضرسي يؤلمني' },
            { en: 'front tooth', ar: 'سني الأمامي يؤلمني' }, { en: 'back tooth', ar: 'ضرسي الخلفي يؤلمني' },
            { en: 'gum', ar: 'لثتي تؤلمني' },
          ],
        },
        tags: ['dentist', 'pain'], d: 1, limit: 5,
      },
      {
        tmpl: 'The dentist will {V} my {P} today.', arTmpl: 'س{V_ar} طبيب الأسنان {P_ar} اليوم.',
        slots: {
          V: [
            { en: 'clean', ar: 'ينظف' }, { en: 'check', ar: 'يفحص' },
          ],
          P: [
            { en: 'teeth', ar: 'أسناني' }, { en: 'tooth', ar: 'سني' },
            { en: 'front teeth', ar: 'أسناني الأمامية' },
          ],
        },
        tags: ['dentist', 'future'], d: 2, limit: 6,
      },
      {
        tmpl: 'Brush your {P} {N} a day.', arTmpl: 'نظف {P_ar} {N_ar} في اليوم.',
        slots: {
          P: [
            { en: 'teeth', ar: 'أسنانك' }, { en: 'front teeth', ar: 'أسنانك الأمامية' },
            { en: 'gums', ar: 'لثتك' },
          ],
          N: [
            { en: 'twice', ar: 'مرتين' }, { en: 'three times', ar: 'ثلاث مرات' },
          ],
        },
        tags: ['dentist', 'imperative'], d: 1, limit: 6,
      },
      {
        tmpl: 'The dentist took out my {T} yesterday.', arTmpl: 'أخرج طبيب الأسنان {T_ar} أمس.',
        slots: {
          T: [
            { en: 'molar', ar: 'ضرسا' }, { en: 'broken tooth', ar: 'سنا مكسورا' },
          ],
        },
        tags: ['dentist', 'past-simple'], d: 3, limit: 2,
      },
      {
        tmpl: 'It does not hurt {W}.', arTmpl: 'لا يؤلمني {W_ar}.',
        slots: {
          W: [
            { en: 'now', ar: 'الآن' }, { en: 'anymore', ar: 'أبدا' },
            { en: 'at night', ar: 'ليلا' },
          ],
        },
        tags: ['dentist', 'negative'], d: 2, limit: 3,
      },
      {
        tmpl: 'I also have {SYM}.', arTmpl: 'لدي أيضا {SYM_ar}.',
        slots: { SYM: B.SYMPTOMS },
        tags: ['dentist', 'symptoms'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'I have a toothache.', ar: 'عندي ألم في الأسنان.', word: 'toothache', hint: 'ألم الأسنان' },
      { en: 'My filling fell out last night.', ar: 'سقطت حشوتي الليلة الماضية.', word: 'filling', hint: 'الحشوة' },
      { en: 'Open your mouth, please.', ar: 'افتح فمك من فضلك.', word: 'mouth', hint: 'الفم' },
      { en: 'Rinse your mouth with water.', ar: 'مضمض فمك بالماء.', word: 'Rinse', hint: 'يُمضمض' },
      { en: 'The dentist will clean my teeth.', ar: 'سينظف طبيب الأسنان أسناني.', word: 'clean', hint: 'ينظف' },
      { en: 'You have a small cavity.', ar: 'لديك تجويف صغير في السن.', word: 'cavity', hint: 'تجويف في السن' },
      { en: 'Do your gums bleed?', ar: 'هل تنزف لثتك؟', word: 'gums', hint: 'اللثة' },
      { en: 'When is my next appointment?', ar: 'متى موعدي القادم؟', word: 'appointment', hint: 'موعد' },
    ],
    orders: [
      { en: 'Open your mouth, please.', ar: 'افتح فمك من فضلك.' },
      { en: 'My filling fell out last night.', ar: 'سقطت حشوتي الليلة الماضية.' },
      { en: 'The dentist will clean my teeth.', ar: 'سينظف طبيب الأسنان أسناني.' },
      { en: 'I brush my teeth twice a day.', ar: 'أنظف أسناني مرتين في اليوم.' },
      { en: 'When is my next appointment?', ar: 'متى موعدي القادم؟' },
      { en: 'This molar hurts when I drink cold water.', ar: 'هذا الضرس يؤلمني عندما أشرب الماء البارد.' },
    ],
    mc: [
      { question: 'Your tooth hurts a lot. Where do you go?', options: ['To the dentist', 'To the bakery', 'To the bank', 'To the airport'], answerIndex: 0, ar: 'تؤلمك سنا كثيرا، فإلى أين تذهب؟' },
      { question: 'What does "My filling fell out" mean?', options: ['سقطت حشوتي', 'كسرت سني', 'نظفت أسناني', 'أخرجت ضرسا'], answerIndex: 0, ar: 'ما معنى My filling fell out؟' },
      { question: 'The dentist says: "Rinse your mouth." What do you do?', options: ['Wash your mouth with water', 'Eat an apple', 'Go to sleep', 'Call the police'], answerIndex: 0, ar: 'قال الطبيب: Rinse your mouth، فماذا تفعل؟' },
      { question: 'How often should you brush your teeth?', options: ['Twice a day', 'Once a year', 'Never', 'Only at night'], answerIndex: 0, ar: 'كم مرة يجب أن تنظف أسنانك؟' },
    ],
  },

  /* ================= lesson 125 — At the Hospital ================= */
  {
    num: 125,
    tags: ['hospital', 'emergency-room', 'health'],
    objectives: [
      'Check in at the hospital and the emergency room',
      'Talk about injuries, tests and hospital rooms',
      'Understand visiting hours and doctor instructions',
    ],
    grammar: {
      explanation: 'At the hospital, use "will" for what happens next: "The doctor will see you soon". Use the present perfect for recent actions with a present result: "They have taken him to the ward". Use the past simple for finished events: "My father broke his arm this morning". Polite requests use "please" and "can": "Can I visit my grandfather tonight?", "Please fill in this form".',
      explanationAr: 'في المستشفى استخدم will لما سيحدث: The doctor will see you soon. واستخدم المضارع التام لأعمال حديثة لها أثر في الحاضر: They have taken him to the ward. واستخدم الماضي البسيط لأحداث منتهية: My father broke his arm this morning. والطلبات المهذبة تستخدم please وcan: Can I visit my grandfather tonight؟ وPlease fill in this form.',
      examples: [
        { en: 'The doctor will see you soon.', ar: 'سيكشف عليك الطبيب قريبا.' },
        { en: 'They have taken him to the ward.', ar: 'أخذوه إلى الجناح.' },
        { en: 'Visiting hours are from four to eight.', ar: 'ساعات الزيارة من الرابعة إلى الثامنة.' },
      ],
    },
    vocabulary: [
      { word: 'hospital', meaningAr: 'مستشفى', example: 'The hospital is very big.', ipa: 'ˈhɒspɪtəl' },
      { word: 'emergency room', meaningAr: 'غرفة الطوارئ', example: 'We ran to the emergency room.', ipa: 'ɪˈmɜːrdʒənsi ruːm' },
      { word: 'broken arm', meaningAr: 'ذراع مكسورة', example: 'My father has a broken arm.' },
      { word: 'X-ray', meaningAr: 'أشعة', example: 'I need an X-ray of my chest.', ipa: 'ˈeksreɪ' },
      { word: 'cast', meaningAr: 'جبيرة جبسية', example: 'His arm is in a cast.' },
      { word: 'ward', meaningAr: 'جناح في المستشفى', example: 'She sleeps in ward four.' },
      { word: 'operation', meaningAr: 'عملية جراحية', example: 'The operation took two hours.' },
      { word: 'visiting hours', meaningAr: 'ساعات الزيارة', example: 'Visiting hours end at eight.' },
      { word: 'patient', meaningAr: 'مريض', example: 'The patient is sleeping now.' },
      { word: 'wait', meaningAr: 'ينتظر / الانتظار', example: 'How long is the wait?' },
      { word: 'nurse', meaningAr: 'ممرضة', example: 'The nurse is very kind.' },
      { word: 'form', meaningAr: 'استمارة', example: 'Please fill in this form.' },
    ],
    scenario: [
      { en: 'Welcome to the hospital emergency room.', ar: 'أهلا بك في غرفة الطوارئ في المستشفى.', d: 1 },
      { en: 'My father broke his arm this morning.', ar: 'كسر أبي ذراعه هذا الصباح.', d: 1 },
      { en: 'The doctor will see you soon.', ar: 'سيكشف عليك الطبيب قريبا.', d: 1 },
      { en: 'Please fill in this form first.', ar: 'املأ هذه الاستمارة أولا من فضلك.', d: 1 },
      { en: 'How long is the wait?', ar: 'كم تدوم مدة الانتظار؟', d: 1 },
      { en: 'About twenty minutes; please sit down.', ar: 'حوالي عشرين دقيقة؛ اجلس من فضلك.', d: 2 },
      { en: 'They took my mother to the ward after her operation.', ar: 'أخذوا أمي إلى الجناح بعد عمليتها.', d: 3 },
      { en: 'Visiting hours end at eight in the evening.', ar: 'تنتهي ساعات الزيارة في الثامنة مساء.', d: 2 },
      { en: 'Can I visit my grandfather tonight?', ar: 'أستطيع زيارة جدي الليلة؟', d: 2 },
      { en: 'Yes, but only two visitors per patient.', ar: 'نعم، لكن زائران فقط لكل مريض.', d: 2 },
      { en: 'His arm is in a cast now.', ar: 'ذراعه في جبيرة الآن.', d: 2 },
      { en: 'The nurses here are very kind.', ar: 'الممرضات هنا لطيفات جدا.', d: 2 },
      { en: 'They have not found the cause of the pain yet.', ar: 'لم يجدوا سبب الألم بعد.', d: 3 },
      { en: 'I need an X-ray of my chest.', ar: 'أحتاج إلى أشعة على صدري.', d: 2 },
      { en: 'The doctor said I can go home tomorrow.', ar: 'قال الطبيب إنه أستطيع العودة إلى المنزل غدا.', d: 3 },
      { en: 'Where is the pharmacy inside the hospital?', ar: 'أين الصيدلية داخل المستشفى؟', d: 2 },
      { en: 'He has a fever and a bad cough.', ar: 'عنده حمى وكحة شديدة.', d: 3 },
    ],
    patterns: [
      {
        tmpl: '{S} broke {P} {T}.', arTmpl: '{S_ar} {P_ar} {T_ar}.',
        slots: {
          S: [
            { en: 'I', ar: 'كسرتُ', agr: 'I' }, { en: 'My brother', ar: 'أخي كسر', agr: 'he' },
            { en: 'My sister', ar: 'أختي كسرت', agr: 'she' }, { en: 'My son', ar: 'ابني كسر', agr: 'he' },
          ],
          P: (x) => [x.S.agr === 'I' ? { en: 'my arm', ar: 'ذراعي' } : x.S.agr === 'she' ? { en: 'her arm', ar: 'ذراعها' } : { en: 'his arm', ar: 'ذراعه' }],
          T: [
            { en: 'yesterday', ar: 'أمس' }, { en: 'this morning', ar: 'هذا الصباح' },
            { en: 'last week', ar: 'الأسبوع الماضي' }, { en: 'while playing', ar: 'أثناء اللعب' },
          ],
        },
        tags: ['hospital', 'past-simple'], d: 2, limit: 12,
      },
      {
        tmpl: '{S} is waiting for the {N}.', arTmpl: '{S_ar} {N_ar}.',
        slots: {
          S: [
            { en: 'My father', ar: 'والدي ينتظر' }, { en: 'My mother', ar: 'أمي تنتظر' },
            { en: 'My grandfather', ar: 'جدي ينتظر' }, { en: 'My sister', ar: 'أختي تنتظر' },
          ],
          N: [
            { en: 'doctor', ar: 'الطبيب' }, { en: 'nurse', ar: 'الممرضة' },
            { en: 'X-ray results', ar: 'نتائج الأشعة' },
          ],
        },
        tags: ['hospital', 'present-continuous'], d: 2, limit: 12,
      },
      {
        tmpl: 'They have taken him to the {N}.', arTmpl: 'أخذوه إلى {N_ar}.',
        slots: {
          N: [
            { en: 'emergency room', ar: 'غرفة الطوارئ' }, { en: 'ward', ar: 'الجناح' },
            { en: 'operating room', ar: 'غرفة العمليات' }, { en: 'X-ray department', ar: 'قسم الأشعة' },
          ],
        },
        tags: ['hospital', 'present-perfect'], d: 2, limit: 4,
      },
      {
        tmpl: 'Visiting hours are from {A} to {B}.', arTmpl: 'ساعات الزيارة من {A_ar} إلى {B_ar}.',
        slots: {
          A: [
            { en: 'four', ar: 'الرابعة' }, { en: 'five', ar: 'الخامسة' }, { en: 'six', ar: 'السادسة' },
          ],
          B: [
            { en: 'eight', ar: 'الثامنة' }, { en: 'nine', ar: 'التاسعة' }, { en: 'ten', ar: 'العاشرة' },
          ],
        },
        tags: ['hospital', 'visiting-hours'], d: 2, limit: 6,
      },
      {
        tmpl: 'Can I see {R} now?', arTmpl: 'أستطيع رؤية {R_ar} الآن؟',
        slots: {
          R: [
            { en: 'the doctor', ar: 'الطبيب' }, { en: 'the patient', ar: 'المريض' },
            { en: 'my grandmother', ar: 'جدتي' },
          ],
        },
        tags: ['hospital', 'questions'], d: 1, limit: 3,
      },
      {
        tmpl: 'The nurse gave me {M}.', arTmpl: 'أعطتني الممرضة {M_ar}.',
        slots: {
          M: [
            { en: 'pills', ar: 'حبوبا' }, { en: 'cough syrup', ar: 'شرابا للكحة' },
            { en: 'an injection', ar: 'حقنة' }, { en: 'vitamins', ar: 'فيتامينات' },
            { en: 'antibiotics', ar: 'مضادات حيوية' },
          ],
        },
        tags: ['hospital', 'medicine'], d: 3, limit: 5,
      },
    ],
    fills: [
      { en: 'The doctor will see you soon.', ar: 'سيكشف عليك الطبيب قريبا.', word: 'soon', hint: 'قريبا' },
      { en: 'My father broke his arm this morning.', ar: 'كسر أبي ذراعه هذا الصباح.', word: 'broke', hint: 'كسر (ماضي)' },
      { en: 'Please fill in this form first.', ar: 'املأ هذه الاستمارة أولا من فضلك.', word: 'form', hint: 'استمارة' },
      { en: 'His arm is in a cast.', ar: 'ذراعه في جبيرة.', word: 'cast', hint: 'جبيرة جبسية' },
      { en: 'Visiting hours are from four to eight.', ar: 'ساعات الزيارة من الرابعة إلى الثامنة.', word: 'Visiting', hint: 'الزيارة' },
      { en: 'I need an X-ray of my chest.', ar: 'أحتاج إلى أشعة على صدري.', word: 'X-ray', hint: 'أشعة' },
      { en: 'They have not found the cause of the pain yet.', ar: 'لم يجدوا سبب الألم بعد.', word: 'cause', hint: 'سبب' },
      { en: 'Welcome to the emergency room.', ar: 'أهلا بك في غرفة الطوارئ.', word: 'emergency', hint: 'طوارئ' },
    ],
    orders: [
      { en: 'The doctor will see you soon.', ar: 'سيكشف عليك الطبيب قريبا.' },
      { en: 'My father broke his arm this morning.', ar: 'كسر أبي ذراعه هذا الصباح.' },
      { en: 'Visiting hours are from four to eight.', ar: 'ساعات الزيارة من الرابعة إلى الثامنة.' },
      { en: 'I need an X-ray of my chest.', ar: 'أحتاج إلى أشعة على صدري.' },
      { en: 'They have taken him to the operating room.', ar: 'أخذوه إلى غرفة العمليات.' },
      { en: 'Can I visit my grandfather tonight?', ar: 'أستطيع زيارة جدي الليلة؟' },
    ],
    mc: [
      { question: 'Where do you go with a broken arm at midnight?', options: ['The emergency room', 'The bakery', 'The library', 'The park'], answerIndex: 0, ar: 'إذا كسرت ذراعك في منتصف الليل، فإلى أين تذهب؟' },
      { question: '"Visiting hours are from four to eight" means:', options: ['الزيارة من الرابعة إلى الثامنة', 'العملية تبدأ الرابعة', 'المستشفى يغلق الثامنة', 'الطبيب يأتي الرابعة'], answerIndex: 0, ar: 'ما معنى الجملة؟' },
      { question: 'A machine that takes pictures of the bones is:', options: ['an X-ray', 'a stove', 'a mirror', 'a printer'], answerIndex: 0, ar: 'الجهاز الذي يصور العظام هو:' },
      { question: '"They have taken him to the ward" means:', options: ['أخذوه إلى الجناح', 'أخذوه إلى المنزل', 'أخذوه إلى الصيدلية', 'أخذوه إلى السيارة'], answerIndex: 0, ar: 'ما معنى الجملة؟' },
    ],
  },

  /* ================= lesson 126 — Health Insurance ================= */
  {
    num: 126,
    tags: ['insurance', 'documents', 'health'],
    objectives: [
      'Ask what your insurance covers',
      'Use an insurance card and get pre-approval',
      'Fill out and submit a claim form',
    ],
    grammar: {
      explanation: 'Insurance questions use "Does my insurance cover ...?" and answers use the present simple: "Your policy covers doctor visits". Use "must" for obligation: "You must renew your card". Use "will" for future results: "The company will pay the hospital directly". Conditional sentences use "if": "If the treatment is covered, the company will pay."',
      explanationAr: 'أسئلة التأمين تستخدم Does my insurance cover ...؟ والجواب بالمضارع البسيط: Your policy covers doctor visits. واستخدم must للإلزام: You must renew your card. واستخدم will للنتيجة المستقبلية: The company will pay the hospital directly. وجمل الشرط تستخدم if: إذا كان العلاج مشمولا فستدفع الشركة.',
      examples: [
        { en: 'Does my insurance cover the treatment?', ar: 'هل يغطي تأميني العلاج؟' },
        { en: 'My card expired last month.', ar: 'انتهت صلاحية بطاقتي الشهر الماضي.' },
        { en: 'Fill out this claim form in blue ink.', ar: 'املأ نموذج المطالبة هذا بحبر أزرق.' },
      ],
    },
    vocabulary: [
      { word: 'insurance', meaningAr: 'تأمين', example: 'My insurance pays for the visit.', ipa: 'ɪnˈʃʊrəns' },
      { word: 'cover', meaningAr: 'يغطي', example: 'Does my insurance cover this?', ipa: 'ˈkʌvər' },
      { word: 'insurance card', meaningAr: 'بطاقة تأمين', example: 'Show your insurance card, please.' },
      { word: 'policy', meaningAr: 'وثيقة تأمين', example: 'My policy covers my family.', ipa: 'ˈpɒləsi' },
      { word: 'pre-approval', meaningAr: 'موافقة مسبقة', example: 'I need pre-approval for the operation.' },
      { word: 'claim form', meaningAr: 'نموذج مطالبة', example: 'Fill out the claim form carefully.' },
      { word: 'copay', meaningAr: 'مشاركة في الدفع', example: 'You pay a small copay.', ipa: 'ˈkoʊpeɪ' },
      { word: 'expire', meaningAr: 'تنتهي صلاحيته', example: 'My card expired last month.' },
      { word: 'renew', meaningAr: 'يجدد', example: 'You must renew your card.', ipa: 'rɪˈnuː' },
      { word: 'treatment', meaningAr: 'علاج', example: 'The treatment takes two weeks.' },
      { word: 'company', meaningAr: 'شركة', example: 'The insurance company will pay.' },
      { word: 'submit', meaningAr: 'يقدم (مستندا)', example: 'Submit the form by email.' },
    ],
    scenario: [
      { en: 'Does my insurance cover the treatment?', ar: 'هل يغطي تأميني العلاج؟', d: 1 },
      { en: 'Let me check your insurance card, please.', ar: 'دعني أفحص بطاقة التأمين الخاصة بك من فضلك.', d: 1 },
      { en: 'Your policy covers doctor visits and tests.', ar: 'وثيقتك تغطي زيارات الطبيب والتحاليل.', d: 1 },
      { en: 'It does not cover cosmetic surgery.', ar: 'إنها لا تغطي العمليات التجميلية.', d: 2 },
      { en: 'I need pre-approval from the company first.', ar: 'أحتاج إلى موافقة مسبقة من الشركة أولا.', d: 2 },
      { en: 'How long does the pre-approval take?', ar: 'كم تستغرق الموافقة المسبقة؟', d: 2 },
      { en: 'Usually two working days.', ar: 'عادة يومي عمل.', d: 2 },
      { en: 'Please bring your insurance card next time.', ar: 'أحضر بطاقة التأمين الخاصة بك في المرة القادمة من فضلك.', d: 1 },
      { en: 'My card expired two months ago.', ar: 'انتهت صلاحية بطاقتي قبل شهرين.', d: 2 },
      { en: 'You must renew it before your next visit.', ar: 'يجب أن تجدد بطاقتك قبل زيارتك القادمة.', d: 2 },
      { en: 'Fill out this claim form in blue ink.', ar: 'املأ نموذج المطالبة هذا بحبر أزرق.', d: 2 },
      { en: 'Where do I send the claim form?', ar: 'أين أرسل نموذج المطالبة؟', d: 2 },
      { en: 'Send it to the insurance company by email.', ar: 'أرسله إلى شركة التأمين بالبريد الإلكتروني.', d: 3 },
      { en: 'The company will pay the hospital directly.', ar: 'ستدفع الشركة للمستشفى مباشرة.', d: 3 },
      { en: 'My children are on the same policy.', ar: 'أطفالي مشمولون في الوثيقة نفسها.', d: 3 },
      { en: 'The copay is ten dollars per visit.', ar: 'مبلغ المشاركة عشرة دولارات لكل زيارة.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Does my insurance cover {T}?', arTmpl: 'هل يغطي تأميني {T_ar}؟',
        slots: {
          T: [
            { en: 'this treatment', ar: 'هذا العلاج' }, { en: 'the medicine', ar: 'الدواء' },
            { en: 'the operation', ar: 'العملية' }, { en: 'dental care', ar: 'علاج الأسنان' },
            { en: 'blood tests', ar: 'تحاليل الدم' }, { en: 'the scan', ar: 'الأشعة' },
          ],
        },
        tags: ['insurance', 'questions'], d: 1, limit: 7,
      },
      {
        tmpl: 'My {D} expired last {T}.', arTmpl: 'انتهت صلاحية {D_ar} {T_ar}.',
        slots: {
          D: [
            { en: 'card', ar: 'بطاقتي' }, { en: 'policy', ar: 'وثيقتي' },
          ],
          T: [
            { en: 'month', ar: 'الشهر الماضي' }, { en: 'year', ar: 'السنة الماضية' },
            { en: 'week', ar: 'الأسبوع الماضي' },
          ],
        },
        tags: ['insurance', 'past-simple'], d: 2, limit: 6,
      },
      {
        tmpl: 'Fill out the {D} and {V} it.', arTmpl: 'املأ {D_ar} و{V_ar}.',
        slots: {
          D: [
            { en: 'claim form', ar: 'نموذج المطالبة' }, { en: 'application form', ar: 'استمارة الطلب' },
          ],
          V: [
            { en: 'send', ar: 'أرسله' }, { en: 'email', ar: 'أرسله بالبريد الإلكتروني' },
            { en: 'mail', ar: 'أرسله بالبريد' },
          ],
        },
        tags: ['insurance', 'imperative'], d: 2, limit: 6,
      },
      {
        tmpl: 'If the {T} is covered, {S}.', arTmpl: 'إذا كان {T_ar} مشمولا، {S_ar}.',
        slots: {
          T: [
            { en: 'treatment', ar: 'العلاج' }, { en: 'operation', ar: 'العملية' },
            { en: 'test', ar: 'الفحص' }, { en: 'medicine', ar: 'الدواء' },
            { en: 'surgery', ar: 'العملية الجراحية' },
          ],
          S: [
            { en: 'the company will pay', ar: 'ستدفع الشركة' }, { en: 'my insurance will pay', ar: 'سيدفع التأمين' },
          ],
        },
        tags: ['insurance', 'conditionals'], d: 3, limit: 8,
      },
      {
        tmpl: 'I am waiting for pre-approval for the {T}.', arTmpl: 'أنتظر الموافقة المسبقة لإجراء {T_ar}.',
        slots: {
          T: [
            { en: 'operation', ar: 'العملية' }, { en: 'scan', ar: 'الأشعة' },
            { en: 'treatment', ar: 'العلاج' },
          ],
        },
        tags: ['insurance', 'pre-approval'], d: 3, limit: 3,
      },
      {
        tmpl: 'Show your {D} at the desk.', arTmpl: 'أرِ {D_ar} عند المكتب.',
        slots: {
          D: [
            { en: 'insurance card', ar: 'بطاقة التأمين' }, { en: 'ID card', ar: 'بطاقة الهوية' },
          ],
        },
        tags: ['insurance', 'documents'], d: 1, limit: 2,
      },
      {
        tmpl: 'You pay a {C} copay for each {N}.', arTmpl: 'تدفع مبلغ مشاركة {C_ar} لكل {N_ar}.',
        slots: {
          C: [
            { en: 'small', ar: 'صغيرا' }, { en: 'fixed', ar: 'ثابتا' },
          ],
          N: [
            { en: 'visit', ar: 'زيارة' }, { en: 'test', ar: 'فحص' },
            { en: 'treatment session', ar: 'جلسة علاج' },
          ],
        },
        tags: ['insurance', 'copay'], d: 3, limit: 6,
      },
    ],
    fills: [
      { en: 'Does my insurance cover this treatment?', ar: 'هل يغطي تأميني هذا العلاج؟', word: 'cover', hint: 'يغطي' },
      { en: 'Please bring your insurance card next time.', ar: 'أحضر بطاقة التأمين في المرة القادمة من فضلك.', word: 'insurance', hint: 'تأمين' },
      { en: 'My card expired last month.', ar: 'انتهت صلاحية بطاقتي الشهر الماضي.', word: 'expired', hint: 'انتهت صلاحيته' },
      { en: 'Fill out this claim form in blue ink.', ar: 'املأ نموذج المطالبة هذا بحبر أزرق.', word: 'claim', hint: 'مطالبة' },
      { en: 'I need pre-approval from the company first.', ar: 'أحتاج إلى موافقة مسبقة من الشركة أولا.', word: 'pre-approval', hint: 'موافقة مسبقة' },
      { en: 'You must renew it before your next visit.', ar: 'يجب أن تجدده قبل زيارتك القادمة.', word: 'renew', hint: 'يجدد' },
      { en: 'You pay a small copay for each visit.', ar: 'تدفع مبلغ مشاركة صغيرا لكل زيارة.', word: 'copay', hint: 'مشاركة في الدفع' },
      { en: 'The company will pay the hospital directly.', ar: 'ستدفع الشركة للمستشفى مباشرة.', word: 'directly', hint: 'مباشرة' },
    ],
    orders: [
      { en: 'Does my insurance cover this treatment?', ar: 'هل يغطي تأميني هذا العلاج؟' },
      { en: 'My card expired last month.', ar: 'انتهت صلاحية بطاقتي الشهر الماضي.' },
      { en: 'Fill out this claim form in blue ink.', ar: 'املأ نموذج المطالبة هذا بحبر أزرق.' },
      { en: 'The company will pay the hospital directly.', ar: 'ستدفع الشركة للمستشفى مباشرة.' },
      { en: 'I need pre-approval from the company first.', ar: 'أحتاج إلى موافقة مسبقة من الشركة أولا.' },
      { en: 'Send it to the insurance company by email.', ar: 'أرسله إلى شركة التأمين بالبريد الإلكتروني.' },
    ],
    mc: [
      { question: 'What shows that you have health insurance?', options: ['An insurance card', 'A bus ticket', 'A library card', 'A parking fine'], answerIndex: 0, ar: 'ما الذي يثبت أن لديك تأمينا صحيا؟' },
      { question: '"Pre-approval" means:', options: ['موافقة مسبقة من شركة التأمين', 'دفع نقدي كامل', 'موعد جديد مع الطبيب', 'وصفة طبية مجانية'], answerIndex: 0, ar: 'ما معنى Pre-approval؟' },
      { question: 'If the treatment is not covered, who pays?', options: ['You pay yourself', 'The taxi driver', 'The police', 'Nobody'], answerIndex: 0, ar: 'إذا لم يكن العلاج مشمولا، فمن يدفع؟' },
      { question: 'What do you fill out to ask for payment?', options: ['A claim form', 'A menu', 'A passport', 'A lottery ticket'], answerIndex: 0, ar: 'ماذا تملأ لطلب الدفع؟' },
    ],
  },

  /* ================= lesson 127 — Emergency Calls ================= */
  {
    num: 127,
    tags: ['emergency', 'phone-calls', 'safety'],
    objectives: [
      'Call an ambulance and describe the emergency',
      'Give your name, address and phone number clearly',
      'Follow the operator instructions and stay on the line',
    ],
    grammar: {
      explanation: 'In an emergency call, use the imperative for urgent instructions: "Call an ambulance!", "Stay on the line", "Do not move him". Use "There has been ..." to report a new event: "There has been an accident on the bridge". Give the address with "The address is ...". The operator asks questions like "Is anyone injured?" and says "Help is coming".',
      explanationAr: 'في مكالمة الطوارئ استخدم صيغة الأمر للتعليمات العاجلة: Call an ambulance! وStay on the line وDo not move him. واستخدم There has been للإبلاغ عن حدث جديد: There has been an accident on the bridge. واذكر العنوان بـ The address is ... ويطرح المشغل أسئلة مثل Is anyone injured؟ ويقول Help is coming.',
      examples: [
        { en: 'Call an ambulance quickly!', ar: 'اتصل بسيارة الإسعاف بسرعة!' },
        { en: 'There has been an accident on the bridge.', ar: 'لقد وقع حادث على الجسر.' },
        { en: 'Stay on the line; help is coming.', ar: 'ابق على الخط؛ المساعدة في الطريق.' },
      ],
    },
    vocabulary: [
      { word: 'ambulance', meaningAr: 'سيارة إسعاف', example: 'The ambulance came fast.', ipa: 'ˈæmbjələns' },
      { word: 'operator', meaningAr: 'مشغل الهاتف', example: 'The operator asked my address.' },
      { word: 'emergency services', meaningAr: 'خدمات الطوارئ', example: 'I called the emergency services.' },
      { word: 'accident', meaningAr: 'حادث', example: 'There was an accident here.', ipa: 'ˈæksɪdənt' },
      { word: 'injured', meaningAr: 'مصاب', example: 'One man is injured.' },
      { word: 'bleeding', meaningAr: 'ينزف', example: 'His hand is bleeding.' },
      { word: 'breathing', meaningAr: 'يتنفس', example: 'He is not breathing!' },
      { word: 'address', meaningAr: 'عنوان', example: 'The address is King Street.' },
      { word: 'stay on the line', meaningAr: 'ابق على الخط', example: 'Please stay on the line.' },
      { word: 'medic', meaningAr: 'مسعف', example: 'The medics helped the man.' },
      { word: 'crossroads', meaningAr: 'تقاطع طرق', example: 'Stop at the crossroads.' },
      { word: 'calm', meaningAr: 'هادئ / اهدأ', example: 'Calm down and speak slowly.' },
    ],
    scenario: [
      { en: 'Emergency services; how can I help you?', ar: 'خدمات الطوارئ؛ كيف أستطيع مساعدتك؟', d: 1 },
      { en: 'Call an ambulance quickly!', ar: 'اتصل بسيارة الإسعاف بسرعة!', d: 1 },
      { en: 'There has been an accident on the bridge.', ar: 'لقد وقع حادث على الجسر.', d: 1 },
      { en: 'Is anyone injured?', ar: 'هل هناك أي مصاب؟', d: 1 },
      { en: 'Yes, one man is bleeding badly.', ar: 'نعم، رجل ينزف بشدة.', d: 2 },
      { en: 'He is not breathing!', ar: 'إنه لا يتنفس!', d: 2 },
      { en: 'Calm down and speak slowly, please.', ar: 'اهدأ وتحدث ببطء من فضلك.', d: 2 },
      { en: 'The address is twelve King Fahad Street.', ar: 'العنوان شارع الملك فهد، بناية رقم اثنا عشر.', d: 2 },
      { en: 'Is there a big sign near the building?', ar: 'هل هناك لافتة كبيرة قرب المبنى؟', d: 2 },
      { en: 'Yes, there is a blue pharmacy sign.', ar: 'نعم، هناك لافتة زرقاء لصيدلية.', d: 2 },
      { en: 'Stay on the line; help is coming.', ar: 'ابق على الخط؛ المساعدة في الطريق.', d: 1 },
      { en: 'Do not move the injured man.', ar: 'لا تحرك الرجل المصاب.', d: 2 },
      { en: 'My phone number is zero five five one two three.', ar: 'رقم هاتفي صفر خمسة خمسة واحد اثنان ثلاثة.', d: 3 },
      { en: 'The police and the ambulance are on the way.', ar: 'الشرطة والإسعاف في الطريق.', d: 3 },
      { en: 'Thank you; they arrived in five minutes.', ar: 'شكرا لك؛ وصلوا خلال خمس دقائق.', d: 3 },
      { en: 'Are the doors open for the medics?', ar: 'هل الأبواب مفتوحة للمسعفين؟', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'There has been {E} {P}.', arTmpl: 'لقد وقع {E_ar} {P_ar}.',
        slots: {
          E: [
            { en: 'an accident', ar: 'حادث' }, { en: 'a car crash', ar: 'تصادم سيارتين' },
            { en: 'a gas leak', ar: 'تسرب غاز' }, { en: 'a collapse', ar: 'انهيار' },
          ],
          P: [
            { en: 'on the main road', ar: 'على الطريق الرئيسي' }, { en: 'near the school', ar: 'قرب المدرسة' },
            { en: 'at the market', ar: 'في السوق' }, { en: 'at the crossroads', ar: 'عند التقاطع' },
            { en: 'on the highway', ar: 'على الطريق السريع' },
          ],
        },
        tags: ['emergency', 'present-perfect'], d: 2, limit: 14,
      },
      {
        tmpl: 'Please send {S} to {P}.', arTmpl: 'أرسل {S_ar} إلى {P_ar} من فضلك.',
        slots: {
          S: [
            { en: 'an ambulance', ar: 'سيارة إسعاف' }, { en: 'the police', ar: 'الشرطة' },
          ],
          P: [
            { en: 'the bridge', ar: 'الجسر' }, { en: 'the school', ar: 'المدرسة' },
            { en: 'King Fahad Street', ar: 'شارع الملك فهد' }, { en: 'the market', ar: 'السوق' },
          ],
        },
        tags: ['emergency', 'imperative'], d: 1, limit: 8,
      },
      {
        tmpl: 'The address is {N} {S}.', arTmpl: 'العنوان {S_ar}، بناية رقم {N_ar}.',
        slots: {
          N: [
            { en: 'five', ar: 'خمسة' }, { en: 'thirty-two', ar: 'اثنين وثلاثين' },
            { en: 'ninety', ar: 'تسعين' },
          ],
          S: [
            { en: 'King Fahad Street', ar: 'شارع الملك فهد' }, { en: 'Garden Road', ar: 'طريق الحدائق' },
            { en: 'Palm Avenue', ar: 'شارع النخيل' },
          ],
        },
        tags: ['emergency', 'address'], d: 2, limit: 6,
      },
      {
        tmpl: 'Stay on the line until {E}.', arTmpl: 'ابق على الخط حتى {E_ar}.',
        slots: {
          E: [
            { en: 'the ambulance arrives', ar: 'وصول الإسعاف' }, { en: 'the police arrive', ar: 'وصول الشرطة' },
            { en: 'help arrives', ar: 'وصول المساعدة' }, { en: 'the fire truck arrives', ar: 'وصول سيارة الإطفاء' },
          ],
        },
        tags: ['emergency', 'imperative'], d: 2, limit: 4,
      },
      {
        tmpl: '{P} {BE} injured.', arTmpl: '{P_ar}.',
        slots: {
          P: [
            { en: 'He', ar: 'إنه مصاب', agr: 'he' }, { en: 'She', ar: 'إنها مصابة', agr: 'she' },
            { en: 'Two people', ar: 'الشخصان مصابان', agr: 'they' },
          ],
          BE: (x) => [{ en: x.P.agr === 'they' ? 'are' : 'is', ar: '' }],
        },
        tags: ['emergency', 'verb-be'], d: 1, limit: 3,
      },
    ],
    fills: [
      { en: 'Call an ambulance quickly!', ar: 'اتصل بسيارة الإسعاف بسرعة!', word: 'ambulance', hint: 'سيارة إسعاف' },
      { en: 'There has been an accident on the bridge.', ar: 'لقد وقع حادث على الجسر.', word: 'accident', hint: 'حادث' },
      { en: 'The address is twelve King Fahad Street.', ar: 'العنوان شارع الملك فهد، بناية رقم اثنا عشر.', word: 'address', hint: 'عنوان' },
      { en: 'Stay on the line; help is coming.', ar: 'ابق على الخط؛ المساعدة في الطريق.', word: 'line', hint: 'الخط الهاتفي' },
      { en: 'He is not breathing!', ar: 'إنه لا يتنفس!', word: 'breathing', hint: 'يتنفس' },
      { en: 'Is anyone injured?', ar: 'هل هناك أي مصاب؟', word: 'injured', hint: 'مصاب' },
      { en: 'Emergency services; how can I help you?', ar: 'خدمات الطوارئ؛ كيف أستطيع مساعدتك؟', word: 'Emergency', hint: 'طوارئ' },
      { en: 'The police are on the way.', ar: 'الشرطة في الطريق.', word: 'police', hint: 'الشرطة' },
    ],
    orders: [
      { en: 'Call an ambulance quickly!', ar: 'اتصل بسيارة الإسعاف بسرعة!' },
      { en: 'There has been an accident on the bridge.', ar: 'لقد وقع حادث على الجسر.' },
      { en: 'Stay on the line until help arrives.', ar: 'ابق على الخط حتى وصول المساعدة.' },
      { en: 'Do not move the injured man.', ar: 'لا تحرك الرجل المصاب.' },
      { en: 'The address is twelve King Fahad Street.', ar: 'العنوان شارع الملك فهد، بناية رقم اثنا عشر.' },
      { en: 'Emergency services; how can I help you?', ar: 'خدمات الطوارئ؛ كيف أستطيع مساعدتك؟' },
    ],
    mc: [
      { question: 'You see an accident. Who do you call first?', options: ['The emergency services', 'A pizza shop', 'A taxi company', 'The school'], answerIndex: 0, ar: 'رأيت حادثا، فمن تتصل به أولا؟' },
      { question: 'What does "Stay on the line" mean?', options: ['ابق على الخط الهاتفي', 'انزل من القطار', 'اترك الهاتف', 'اذهب إلى الطريق'], answerIndex: 0, ar: 'ما معنى Stay on the line؟' },
      { question: '"There has been an accident" means:', options: ['لقد وقع حادث', 'لن يحدث حادث', 'أريد حادثا', 'الحادث قديم'], answerIndex: 0, ar: 'ما معنى الجملة؟' },
      { question: 'The operator asks: "Is anyone injured?" You answer:', options: ['Yes, one man is hurt.', 'My favorite color is blue.', 'The weather is nice.', 'I like coffee.'], answerIndex: 0, ar: 'سأل المشغل: Is anyone injured؟ فما جوابك؟' },
    ],
  },
];
