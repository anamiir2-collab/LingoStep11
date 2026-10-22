/* ============================================================
   v2 section data — s10-b1.js
   Complex Situations & Rights · lessons 234–237 (stolen phone,
   car accidents, company disputes, mediation)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

/* small agreement maps for verbs missing from the conjugation bank */
const AR_STEAL = { he: 'سرق', she: 'سرقت' };
const AR_REPORT = { I: 'أبلغت', you: 'أبلغت', he: 'أبلغ', she: 'أبلغت', we: 'أبلغنا', they: 'أبلغوا' };
const AR_AGREE = { I: 'أوافق', you: 'توافق', he: 'يوافق', she: 'توافق', we: 'نوافق', they: 'يوافقون' };

export const lessons = [

  /* ================= lesson 234 — Stolen Mobile Phone ================= */
  {
    num: 234,
    tags: ['phone-theft', 'reports'],
    objectives: [
      'Report a stolen phone to the police and the operator',
      'Block the SIM card and secure your accounts',
      'Use the IMEI number to identify a phone',
    ],
    grammar: {
      explanation: 'When you report a theft, use the past simple for the event: "Someone stole my phone yesterday". Use "will" for the actions you take now: "I will block the SIM card". "Could you ... ?" makes a polite request: "Could you help me track my phone?". The IMEI number is a unique code that identifies your phone; the police and your mobile operator use it. Report the theft quickly, keep the receipt, and ask for the report number.',
      explanationAr: 'عندما تبلغ عن سرقة استخدم الماضي البسيط للحدث: Someone stole my phone yesterday. واستخدم will للإجراءات التي تتخذها الآن: I will block the SIM card. وصيغة Could you تجعل الطلب مهذبا: Could you help me track my phone? رقم IMEI رمز فريد يحدد هوية هاتفك تستخدمه الشرطة وشركة الاتصالات. أبلغ عن السرقة بسرعة واحتفظ بالفاتورة واطلب رقم البلاغ.',
      examples: [
        { en: 'Someone stole my phone on the metro.', ar: 'سرق شخص ما هاتفي في المترو.' },
        { en: 'I will block the SIM card immediately.', ar: 'سأحجب شريحة الهاتف فورا.' },
        { en: 'Could you help me track my phone, please?', ar: 'هل يمكنك مساعدتي في تتبع هاتفي من فضلك؟' },
      ],
    },
    vocabulary: [
      { word: 'stolen', meaningAr: 'مسروق', example: 'My phone was stolen yesterday.' },
      { word: 'thief', meaningAr: 'لص', example: 'The thief took the bag and ran.' },
      { word: 'theft', meaningAr: 'سرقة', example: 'Theft is a crime everywhere.' },
      { word: 'block', meaningAr: 'يحجب', example: 'Block the SIM card first.' },
      { word: 'SIM card', meaningAr: 'شريحة الهاتف', example: 'The SIM card holds my number.' },
      { word: 'IMEI number', meaningAr: 'رقم الآيمي (هوية الجهاز)', example: 'The IMEI number identifies the phone.' },
      { word: 'track', meaningAr: 'يتتبع', example: 'Can you track my phone?' },
      { word: 'report', meaningAr: 'يبلغ / يقدم بلاغا', example: 'I will report the theft today.' },
      { word: 'contact list', meaningAr: 'قائمة الاتصالات', example: 'My contact list is saved in the cloud.' },
      { word: 'backup', meaningAr: 'نسخة احتياطية', example: 'The backup saved my photos.' },
      { word: 'password', meaningAr: 'كلمة المرور', example: 'Change your password after the theft.' },
      { word: 'switched off', meaningAr: 'مطفأ', example: 'The phone is switched off now.' },
    ],
    scenario: [
      { en: 'Someone stole my phone on the metro this morning.', ar: 'سرق شخص ما هاتفي في المترو هذا الصباح.', d: 1 },
      { en: 'Oh no! When did it happen?', ar: 'يا للأسف! متى حدث هذا؟', d: 1 },
      { en: 'It happened between two stations, I think.', ar: 'حدث ذلك بين محطتين على ما أظن.', d: 2 },
      { en: 'First, I will block the SIM card.', ar: 'أولا، سأحجب شريحة الهاتف.', d: 1 },
      { en: 'Then I will change all my passwords.', ar: 'ثم سأغير كل كلمات المرور الخاصة بي.', d: 2 },
      { en: 'Can you track my phone from your office?', ar: 'هل يمكنك تتبع هاتفي من مكتبك؟', d: 1 },
      { en: 'No, the phone is switched off now.', ar: 'لا، الهاتف مطفأ الآن.', d: 1 },
      { en: 'The tracking app shows the last location.', ar: 'يظهر تطبيق التتبع آخر موقع.', d: 2 },
      { en: 'I reported the theft to the police this afternoon.', ar: 'أبلغت عن السرقة إلى الشرطة بعد الظهر.', d: 2 },
      { en: 'They asked me for the IMEI number.', ar: 'طلبوا مني رقم الآيمي.', d: 2 },
      { en: 'The IMEI number is printed on the phone box.', ar: 'رقم الآيمي مطبوع على علبة الهاتف.', d: 3 },
      { en: 'I gave the officer a copy of the receipt too.', ar: 'أعطيت الضابط نسخة من الفاتورة أيضا.', d: 3 },
      { en: 'My contact list is saved in the cloud.', ar: 'قائمة اتصالاتي محفوظة في السحابة.', d: 2 },
      { en: 'Did you lose your photos as well?', ar: 'هل فقدت صورك أيضا؟', d: 1 },
      { en: 'Yes, but most of them are in the backup.', ar: 'نعم، لكن معظمها في النسخة الاحتياطية.', d: 2 },
      { en: 'Never leave your phone on the café table.', ar: 'لا تترك هاتفك أبدا على طاولة المقهى.', d: 2 },
      { en: 'Thieves often work in crowded places.', ar: 'غالبا ما يعمل اللصوص في الأماكن المزدحمة.', d: 3 },
      { en: 'My sister\u0027s phone was stolen last year as well.', ar: 'سُرق هاتف أختي في العام الماضي أيضا.', d: 3 },
    ],
    patterns: [
      {
        tmpl: '{S} {STEAL} my phone {T}.', arTmpl: '{S_ar} {STEAL_ar} هاتفي {T_ar}.',
        slots: {
          S: [
            { en: 'Someone', ar: 'شخص ما', agr: 'he' }, { en: 'A thief', ar: 'لص', agr: 'he' },
            { en: 'An unknown man', ar: 'رجل مجهول', agr: 'he' }, { en: 'A woman', ar: 'امرأة', agr: 'she' },
          ],
          STEAL: (x) => [{ en: 'stole', ar: AR_STEAL[x.S.agr] }],
          T: [
            { en: 'on the metro', ar: 'في المترو' }, { en: 'at the bus stop', ar: 'عند موقف الحافلة' },
            { en: 'in the crowded street', ar: 'في الشارع المزدحم' }, { en: 'outside the gym', ar: 'أمام النادي الرياضي' },
          ],
        },
        tags: ['phone-theft', 'past-simple'], d: 1, limit: 12,
      },
      {
        tmpl: 'I will {A} the SIM card {T}.', arTmpl: 'سأ{A_ar} شريحة الهاتف {T_ar}.',
        slots: {
          A: [
            { en: 'block', ar: 'حجب' }, { en: 'change', ar: 'غير' },
            { en: 'replace', ar: 'ستبدل' }, { en: 'cancel', ar: 'لغي' },
          ],
          T: [
            { en: 'immediately', ar: 'فورا' }, { en: 'right away', ar: 'في الحال' },
            { en: 'this evening', ar: 'هذا المساء' }, { en: 'before work', ar: 'قبل العمل' },
          ],
        },
        tags: ['phone-theft', 'will'], d: 1, limit: 12,
      },
      {
        tmpl: 'Could you help me {V} my phone, please?', arTmpl: 'هل يمكنك مساعدتي في {V_ar} هاتفي من فضلك؟',
        slots: {
          V: [
            { en: 'track', ar: 'تتبع' }, { en: 'lock', ar: 'قفل' },
            { en: 'find', ar: 'العثور على' }, { en: 'recover', ar: 'استعادة' },
          ],
        },
        tags: ['phone-theft', 'requests'], d: 2, limit: 4,
      },
      {
        tmpl: '{S} {REPORT} the theft to the police {T}.', arTmpl: '{S_ar} {REPORT_ar} عن السرقة إلى الشرطة {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          REPORT: (x) => [{ en: 'reported', ar: AR_REPORT[x.S.agr] }],
          T: [
            { en: 'this morning', ar: 'هذا الصباح' }, { en: 'yesterday evening', ar: 'أمس مساء' },
            { en: 'last Friday', ar: 'الجمعة الماضية' }, { en: 'half an hour later', ar: 'بعد نصف ساعة' },
          ],
        },
        tags: ['phone-theft', 'past-simple'], d: 2, limit: 15,
      },
      {
        tmpl: 'Do you know the IMEI number of your {D}?', arTmpl: 'هل تعرف رقم الآيمي الخاص بـ{D_ar}؟',
        slots: {
          D: [
            { en: 'phone', ar: 'هاتفك' }, { en: 'tablet', ar: 'جهازك اللوحي' },
            { en: 'old phone', ar: 'هاتفك القديم' },
          ],
        },
        tags: ['phone-theft', 'questions'], d: 2, limit: 3,
      },
    ],
    fills: [
      { en: 'A thief stole my phone last night.', ar: 'سرق لص هاتفي الليلة الماضية.', word: 'stole', hint: 'الماضي من steal' },
      { en: 'I will block the SIM card immediately.', ar: 'سأحجب شريحة الهاتف فورا.', word: 'block', hint: 'يحجب' },
      { en: 'Can you track my phone?', ar: 'هل يمكنك تتبع هاتفي؟', word: 'track', hint: 'يتتبع' },
      { en: 'They asked me for the IMEI number.', ar: 'طلبوا مني رقم الآيمي.', word: 'IMEI' },
      { en: 'I reported the theft to the police.', ar: 'أبلغت عن السرقة إلى الشرطة.', word: 'theft', hint: 'السرقة' },
      { en: 'My contact list is saved in the cloud.', ar: 'قائمة اتصالاتي محفوظة في السحابة.', word: 'contact' },
      { en: 'Most of my photos are in the backup.', ar: 'معظم صوري في النسخة الاحتياطية.', word: 'backup', hint: 'نسخة احتياطية' },
      { en: 'The phone is switched off now.', ar: 'الهاتف مطفأ الآن.', word: 'switched', hint: 'مطفأ' },
    ],
    orders: [
      { en: 'Someone stole my phone this morning.', ar: 'سرق شخص ما هاتفي هذا الصباح.' },
      { en: 'I will block the SIM card first.', ar: 'سأحجب شريحة الهاتف أولا.' },
      { en: 'Can you track my lost phone?', ar: 'هل يمكنك تتبع هاتفي المفقود؟' },
      { en: 'We reported the theft to the police together.', ar: 'أبلغنا عن السرقة إلى الشرطة معا.' },
      { en: 'Please write down the IMEI number.', ar: 'من فضلك اكتب رقم الآيمي.' },
      { en: 'My contact list is safe in the cloud backup.', ar: 'قائمة اتصالاتي محفوظة في النسخة السحابية الاحتياطية.' },
    ],
    mc: [
      { question: 'Your phone is stolen. What should you do first?', options: ['Block the SIM card', 'Buy a new cover', 'Post a photo online', 'Charge the battery'], answerIndex: 2, ar: 'هاتفك مسروق. ماذا تفعل أولا؟' },
      { question: 'What is the IMEI number?', options: ['A unique code that identifies your phone', 'The price of the phone', 'The name of the mobile operator', 'A type of SIM card'], answerIndex: 0, ar: 'ما هو رقم الآيمي؟' },
      { question: '"I reported the theft" means:', options: ['اشتريت هاتفا جديدا', 'أبلغت عن السرقة', 'وجدت الهاتف', 'دفعت ثمن الهاتف'], answerIndex: 1, ar: 'ما معنى I reported the theft؟' },
      { question: 'Where is the IMEI number often printed?', options: ['Inside the SIM card', 'On the charger only', 'In the contact list', 'On the phone box'], answerIndex: 3, ar: 'أين يطبع رقم الآيمي غالبا؟' },
      { question: 'Which sentence is good advice?', options: ['Thieves work only at night.', 'The IMEI number changes every week.', 'Never leave your phone on the café table.', 'Phones are always safe in cafés.'], answerIndex: 2, ar: 'أي جملة نصيحة جيدة؟' },
    ],
  },

  /* ================= lesson 235 — Car Accidents and Next Steps ================= */
  {
    num: 235,
    tags: ['car-accidents', 'insurance'],
    objectives: [
      'Describe a small car accident calmly',
      'Exchange insurance details and collect evidence',
      'Call the towing service and plan the next steps',
    ],
    grammar: {
      explanation: 'Talk about a finished accident with the past simple: "There was a small accident", "Nobody was hurt". For next steps use "should" and "will": "We should call the towing service", "I will report the accident to my insurance company". Give clear instructions with the imperative: "Take photos of the scene", "Exchange insurance details". Exchange means each side gives and receives the same information. Keep calm, move to a safe place, and collect evidence.',
      explanationAr: 'تحدث عن حادث انتهى بالماضي البسيط: There was a small accident وNobody was hurt. وللخطوات التالية استخدم should وwill: We should call the towing service وI will report the accident to my insurance company. واعط التعليمات بصيغة الأمر: Take photos of the scene وExchange insurance details. ومعنى exchange أن كل طرف يعطي ويستلم المعلومات نفسها. ابق هادئا وانتقل إلى مكان آمن واجمع الأدلة.',
      examples: [
        { en: 'There was a small accident at the crossroads.', ar: 'وقع حادث صغير عند التقاطع.' },
        { en: 'We exchanged insurance details after the accident.', ar: 'تبادلنا بيانات التأمين بعد الحادث.' },
        { en: 'Take photos of the scene before we move the cars.', ar: 'صوّر مكان الحادث قبل أن نحرك السيارات.' },
      ],
    },
    vocabulary: [
      { word: 'accident', meaningAr: 'حادث', example: 'The accident was small.' },
      { word: 'crash', meaningAr: 'اصطدام', example: 'The crash broke the headlight.' },
      { word: 'damage', meaningAr: 'ضرر / أضرار', example: 'The damage is not serious.' },
      { word: 'bumper', meaningAr: 'مصد', example: 'The bumper is scratched.' },
      { word: 'scene', meaningAr: 'مكان الحادث', example: 'Take photos of the scene.' },
      { word: 'exchange', meaningAr: 'يتبادل', example: 'We exchanged phone numbers.' },
      { word: 'insurance details', meaningAr: 'بيانات التأمين', example: 'Write down the insurance details.' },
      { word: 'policy number', meaningAr: 'رقم وثيقة التأمين', example: 'My policy number is on this card.' },
      { word: 'towing service', meaningAr: 'خدمة سحب السيارات', example: 'The towing service will take the car.' },
      { word: 'tow truck', meaningAr: 'شاحنة السحب', example: 'The tow truck arrived quickly.' },
      { word: 'hurt', meaningAr: 'مصاب', example: 'Thankfully, nobody was hurt.' },
      { word: 'repair estimate', meaningAr: 'تقدير تكلفة التصليح', example: 'The workshop gave me a repair estimate.' },
    ],
    scenario: [
      { en: 'There was a small accident near the bridge.', ar: 'وقع حادث صغير قرب الجسر.', d: 1 },
      { en: 'Are you all right?', ar: 'هل أنت بخير؟', d: 1 },
      { en: 'Yes, nobody was hurt, thankfully.', ar: 'نعم، لحسن الحظ لم يصب أحد.', d: 1 },
      { en: 'The damage is only a broken headlight.', ar: 'الضرر مجرد مصباح أمامي مكسور.', d: 2 },
      { en: 'Let us exchange insurance details.', ar: 'لنتبادل بيانات التأمين.', d: 2 },
      { en: 'Here is my policy number and my licence.', ar: 'هذا رقم وثيقتي ورخصتي.', d: 2 },
      { en: 'Take photos of the scene before we move the cars.', ar: 'صوّر مكان الحادث قبل أن نحرك السيارات.', d: 2 },
      { en: 'Good idea; the position of the cars is evidence.', ar: 'فكرة جيدة؛ مواقع السيارات دليل.', d: 3 },
      { en: 'Did you call the police?', ar: 'هل اتصلت بالشرطة؟', d: 1 },
      { en: 'They said no officer is needed for minor damage.', ar: 'قالوا إنه لا حاجة إلى شرطي للأضرار البسيطة.', d: 2 },
      { en: 'My car cannot move; the front wheel is blocked.', ar: 'سيارتي لا تتحرك؛ العجلة الأمامية عالقة.', d: 2 },
      { en: 'Then we should call the towing service.', ar: 'إذن يجب أن نتصل بخدمة السحب.', d: 2 },
      { en: 'The tow truck will arrive in twenty minutes.', ar: 'ستصل شاحنة السحب خلال عشرين دقيقة.', d: 2 },
      { en: 'Where is the nearest repair workshop?', ar: 'أين أقرب ورشة تصليح؟', d: 1 },
      { en: 'I will report the accident to my insurance company tomorrow.', ar: 'سأبلغ شركة التأمين عن الحادث غدا.', d: 2 },
      { en: 'Keep the repair estimate for the insurance claim.', ar: 'احتفظ بتقدير التصليح لطلب التعويض.', d: 3 },
      { en: 'The other driver accepted the fault politely.', ar: 'قبل السائق الآخر الخطأ بلطف.', d: 3 },
      { en: 'Drive slowly near this school; children cross here.', ar: 'أبطئ السير قرب هذه المدرسة؛ الأطفال يعبرون هنا.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'There was a small accident {L}.', arTmpl: 'وقع حادث صغير {L_ar}.',
        slots: {
          L: [
            { en: 'at the crossroads', ar: 'عند التقاطع' }, { en: 'in the car park', ar: 'في موقف السيارات' },
            { en: 'on the bridge', ar: 'على الجسر' }, { en: 'near the school gate', ar: 'قرب بوابة المدرسة' },
            { en: 'at the roundabout', ar: 'عند الدوار' }, { en: 'in the narrow street', ar: 'في الشارع الضيق' },
            { en: 'outside the bank', ar: 'أمام البنك' }, { en: 'at the parking exit', ar: 'عند مخرج الموقف' },
          ],
        },
        tags: ['car-accidents', 'past-simple'], d: 1, limit: 8,
      },
      {
        tmpl: '{S} {V} photos of the scene.', arTmpl: '{S_ar} {V_ar} صورا لمكان الحادث.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: B.enPresent('take', x.S.agr), ar: B.arPresent('take', x.S.agr) }],
        },
        tags: ['car-accidents', 'present-simple'], d: 2, limit: 12,
      },
      {
        tmpl: 'The tow truck will arrive {T}.', arTmpl: 'ستصل شاحنة السحب {T_ar}.',
        slots: {
          T: [
            { en: 'in twenty minutes', ar: 'خلال عشرين دقيقة' }, { en: 'before noon', ar: 'قبل الظهر' },
            { en: 'in half an hour', ar: 'خلال نصف ساعة' }, { en: 'soon', ar: 'قريبا' },
            { en: 'before sunset', ar: 'قبل الغروب' }, { en: 'by evening', ar: 'بحلول المساء' },
          ],
        },
        tags: ['car-accidents', 'will'], d: 2, limit: 6,
      },
      {
        tmpl: 'Nobody was hurt in the {N}.', arTmpl: 'لم يصب أحد في {N_ar}.',
        slots: {
          N: [
            { en: 'accident', ar: 'الحادث' }, { en: 'collision', ar: 'التصادم' },
            { en: 'small crash', ar: 'الاصطدام البسيط' }, { en: 'traffic incident', ar: 'الحادث المروري' },
            { en: 'minor crash', ar: 'الاصطدام الطفيف' },
          ],
        },
        tags: ['car-accidents', 'passive'], d: 1, limit: 5,
      },
      {
        tmpl: 'You should call the {SC} first.', arTmpl: 'يجب أن تتصل بـ{SC_ar} أولا.',
        slots: {
          SC: [
            { en: 'towing service', ar: 'خدمة السحب' }, { en: 'police', ar: 'الشرطة' },
            { en: 'insurance company', ar: 'شركة التأمين' }, { en: 'repair workshop', ar: 'ورشة التصليح' },
            { en: 'traffic department', ar: 'دائرة المرور' },
            { en: 'municipality', ar: 'البلدية' },
          ],
        },
        tags: ['car-accidents', 'should'], d: 2, limit: 6,
      },
    ],
    fills: [
      { en: 'The accident happened at the crossroads yesterday.', ar: 'وقع الحادث عند التقاطع أمس.', word: 'accident', hint: 'حادث' },
      { en: 'We exchanged insurance details after the crash.', ar: 'تبادلنا بيانات التأمين بعد الاصطدام.', word: 'insurance', hint: 'تأمين' },
      { en: 'Take photos of the scene, please.', ar: 'صوّر مكان الحادث من فضلك.', word: 'scene', hint: 'مكان الحادث' },
      { en: 'Nobody was hurt, but both cars were damaged.', ar: 'لم يصب أحد لكن كلا السيارتين تضررت.', word: 'hurt', hint: 'مصاب' },
      { en: 'The tow truck took the car to the workshop.', ar: 'أخذت شاحنة السحب السيارة إلى الورشة.', word: 'tow' },
      { en: 'The damage looks worse than it is.', ar: 'يبدو الضرر أسوأ من حقيقته.', word: 'damage', hint: 'ضرر' },
      { en: 'Keep the repair estimate for the claim.', ar: 'احتفظ بتقدير التصليح للمطالبة.', word: 'estimate' },
      { en: 'My car cannot move; the wheel is blocked.', ar: 'سيارتي لا تتحرك؛ العجلة عالقة.', word: 'blocked', hint: 'عالق' },
    ],
    orders: [
      { en: 'There was a small accident here today.', ar: 'وقع حادث صغير هنا اليوم.' },
      { en: 'We exchanged insurance details calmly.', ar: 'تبادلنا بيانات التأمين بهدوء.' },
      { en: 'Take photos of the scene first.', ar: 'صوّر مكان الحادث أولا.' },
      { en: 'Nobody was hurt, thankfully.', ar: 'لحسن الحظ لم يصب أحد.' },
      { en: 'We should call the towing service now.', ar: 'يجب أن نتصل بخدمة السحب الآن.' },
      { en: 'The tow truck is on its way.', ar: 'شاحنة السحب في طريقها إلينا.' },
    ],
    mc: [
      { question: 'After a small accident, what should both drivers exchange?', options: ['Car keys', 'Driving gloves', 'Insurance details', 'Parking tickets'], answerIndex: 2, ar: 'بعد حادث صغير ماذا يتبادل السائقان؟' },
      { question: 'The car cannot move after the crash. Who do you call?', options: ['The towing service', 'The hairdresser', 'The travel agent', 'The school'], answerIndex: 0, ar: 'السيارة لا تتحرك بعد الاصطدام. بمن تتصل؟' },
      { question: '"Nobody was hurt" means:', options: ['الطريق مزدحم', 'السيارة جديدة', 'الشرطة غاضبة', 'لم يصب أحد'], answerIndex: 3, ar: 'ما معنى Nobody was hurt؟' },
      { question: 'What is a "repair estimate"?', options: ['A type of driving licence', 'A document that says how much the repair costs', 'A photo of the scene', 'A police report number'], answerIndex: 1, ar: 'ما هو تقدير تكلفة التصليح؟' },
      { question: 'Why do you take photos of the scene?', options: ['They are evidence for the insurance claim', 'They are beautiful memories', 'They show the weather only', 'They replace the driving licence'], answerIndex: 0, ar: 'لماذا تصور مكان الحادث؟' },
    ],
  },

  /* ================= lesson 236 — Disputes with Companies ================= */
  {
    num: 236,
    tags: ['disputes', 'companies'],
    objectives: [
      'Describe what a company has failed to do',
      'Send a written warning and name the breach',
      'Escalate to the consumer protection agency or court',
    ],
    grammar: {
      explanation: 'When a company does not keep its promises, use formal language. Present perfect shows what has happened so far: "They have not replied", "The fault has returned twice". "Refuse" takes the infinitive: "The company refuses to fix it". A "breach of contract" means one side did not follow the written agreement. Before court, send a written warning and complain to the consumer protection agency; you may ask for compensation or a replacement.',
      explanationAr: 'عندما لا تفي الشركة بوعودها استخدم لغة رسمية. ويظهر المضارع التام ما حدث حتى الآن: They have not replied وThe fault has returned twice. ويلحق فعل refuse بالمصدر: The company refuses to fix it. ومعنى breach of contract أن طرفا لم يلتزم بالاتفاق المكتوب. وقبل المحكمة أرسل إنذارا كتابيا وتقدم شكوى إلى هيئة حماية المستهلك، ويمكنك أن تطلب تعويضا أو بديلا.',
      examples: [
        { en: 'The company refuses to fix the washing machine.', ar: 'ترفض الشركة إصلاح الغسالة.' },
        { en: 'That is a clear breach of contract.', ar: 'هذا إخلال واضح بالعقد.' },
        { en: 'You could complain to the consumer protection agency.', ar: 'يمكنك التقدم بشكوى إلى هيئة حماية المستهلك.' },
      ],
    },
    vocabulary: [
      { word: 'dispute', meaningAr: 'نزاع', example: 'We have a dispute with the supplier.' },
      { word: 'refuse', meaningAr: 'يرفض', example: 'They refuse to answer my letters.' },
      { word: 'faulty', meaningAr: 'معيب', example: 'The company sold faulty goods.' },
      { word: 'repair', meaningAr: 'إصلاح', example: 'The repair took three weeks.' },
      { word: 'written warning', meaningAr: 'إنذار كتابي', example: 'I sent them a written warning.' },
      { word: 'breach of contract', meaningAr: 'إخلال بالعقد', example: 'No repair after ten days is a breach of contract.' },
      { word: 'consumer protection agency', meaningAr: 'هيئة حماية المستهلك', example: 'The agency helps angry customers.' },
      { word: 'court', meaningAr: 'محكمة', example: 'Court cases cost money.' },
      { word: 'compensation', meaningAr: 'تعويض', example: 'We asked for fair compensation.' },
      { word: 'supplier', meaningAr: 'المورد', example: 'The supplier delivered the wrong parts.' },
      { word: 'replacement', meaningAr: 'بديل', example: 'They offered a replacement device.' },
      { word: 'evidence', meaningAr: 'دليل', example: 'Emails are strong evidence in disputes.' },
    ],
    scenario: [
      { en: 'The company refuses to repair our washing machine.', ar: 'ترفض الشركة إصلاح غسالتنا.', d: 1 },
      { en: 'The fault came back after one week.', ar: 'عاد العيب بعد أسبوع واحد.', d: 1 },
      { en: 'What does the contract say about repairs?', ar: 'ماذا يقول العقد عن التصليح؟', d: 1 },
      { en: 'It guarantees a full repair within ten days.', ar: 'يضمن تصليحا كاملا خلال عشرة أيام.', d: 2 },
      { en: 'That is a clear breach of contract.', ar: 'هذا إخلال واضح بالعقد.', d: 2 },
      { en: 'I sent the company a written warning last Monday.', ar: 'أرسلت إلى الشركة إنذارا كتابيا الاثنين الماضي.', d: 2 },
      { en: 'Did they reply to your letter?', ar: 'هل ردوا على خطابك؟', d: 1 },
      { en: 'No, they have not replied at all.', ar: 'لا، لم يردوا إطلاقا.', d: 1 },
      { en: 'Then you can take the case to court.', ar: 'إذن يمكنك رفع القضية إلى المحكمة.', d: 2 },
      { en: 'Court cases take time and money.', ar: 'قضايا المحاكم تأخذ وقتا ومالا.', d: 3 },
      { en: 'Have you contacted the consumer protection agency yet?', ar: 'هل تواصلت مع هيئة حماية المستهلك بعد؟', d: 2 },
      { en: 'Not yet; I will file the complaint this week.', ar: 'ليس بعد؛ سأقدم الشكوى هذا الأسبوع.', d: 2 },
      { en: 'The agency handled a similar dispute last year.', ar: 'تولت الهيئة نزاعا مماثلا في العام الماضي.', d: 3 },
      { en: 'Will I receive any compensation?', ar: 'هل سأستلم أي تعويض؟', d: 2 },
      { en: 'You may receive a refund or a replacement.', ar: 'قد تستلم استردادا للمال أو بديلا.', d: 2 },
      { en: 'The supplier delivered faulty goods twice.', ar: 'سلم المورد بضائع معيبة مرتين.', d: 3 },
      { en: 'Could you send me your final answer in writing, please?', ar: 'هل يمكنك إرسال جوابك النهائي كتابيا من فضلك؟', d: 2 },
      { en: 'A fair outcome is possible if your documents are complete.', ar: 'النتيجة العادلة ممكنة إذا كانت مستنداتك كاملة.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'The company refuses to {V} the {N}.', arTmpl: 'ترفض الشركة أن {V_ar} {N_ar}.',
        slots: {
          V: [
            { en: 'fix', ar: 'يصلح' }, { en: 'replace', ar: 'يستبدل' },
            { en: 'inspect', ar: 'يفحص' }, { en: 'collect', ar: 'يجمع' },
          ],
          N: [
            { en: 'washing machine', ar: 'الغسالة' }, { en: 'television', ar: 'التلفاز' },
            { en: 'refrigerator', ar: 'الثلاجة' }, { en: 'air conditioner', ar: 'المكيف' },
          ],
        },
        tags: ['disputes', 'present-simple'], d: 1, limit: 10,
      },
      {
        tmpl: 'I sent them a written warning {T}.', arTmpl: 'أرسلت إليهم إنذارا كتابيا {T_ar}.',
        slots: {
          T: [
            { en: 'last Monday', ar: 'الاثنين الماضي' }, { en: 'a month ago', ar: 'قبل شهر' },
            { en: 'after the second repair', ar: 'بعد التصليح الثاني' }, { en: 'in March', ar: 'في مارس' },
            { en: 'by email', ar: 'بالبريد الإلكتروني' },
          ],
        },
        tags: ['disputes', 'past-simple'], d: 2, limit: 5,
      },
      {
        tmpl: 'If they refuse again, we will {A}.', arTmpl: 'إذا رفضوا مرة أخرى، {A_ar}.',
        slots: {
          A: [
            { en: 'take the case to court', ar: 'سنقاضي الشركة' },
            { en: 'contact the consumer protection agency', ar: 'سنتواصل مع هيئة حماية المستهلك' },
            { en: 'ask for compensation', ar: 'سنطالب بالتعويض' },
            { en: 'cancel the contract', ar: 'سنلغي العقد' },
            { en: 'return the faulty goods', ar: 'سنعيد البضائع المعيبة' },
          ],
        },
        tags: ['disputes', 'conditionals'], d: 2, limit: 5,
      },
      {
        tmpl: 'The {N} must be repaired within {T}.', arTmpl: 'يجب إصلاح {N_ar} خلال {T_ar}.',
        slots: {
          N: [
            { en: 'washing machine', ar: 'الغسالة' }, { en: 'television', ar: 'التلفاز' },
            { en: 'refrigerator', ar: 'الثلاجة' }, { en: 'air conditioner', ar: 'المكيف' },
          ],
          T: [
            { en: 'ten days', ar: 'عشرة أيام' }, { en: 'two weeks', ar: 'أسبوعين' },
            { en: 'seven working days', ar: 'سبعة أيام عمل' },
          ],
        },
        tags: ['disputes', 'passive'], d: 3, limit: 10,
      },
      {
        tmpl: 'They have not answered my {N} yet.', arTmpl: 'لم يجيبوا عن {N_ar} بعد.',
        slots: {
          N: [
            { en: 'letters', ar: 'رسائلي' }, { en: 'emails', ar: 'رسائلي الإلكترونية' },
            { en: 'last complaint', ar: 'شكواي الأخيرة' }, { en: 'first request', ar: 'طلبي الأول' },
          ],
        },
        tags: ['disputes', 'present-perfect'], d: 2, limit: 4,
      },
    ],
    fills: [
      { en: 'The company refuses to fix the machine.', ar: 'ترفض الشركة إصلاح الآلة.', word: 'refuses', hint: 'ترفض' },
      { en: 'This is a serious breach of our agreement.', ar: 'هذا إخلال خطير باتفاقنا.', word: 'breach', hint: 'إخلال' },
      { en: 'I sent the company a written warning.', ar: 'أرسلت إلى الشركة إنذارا كتابيا.', word: 'warning', hint: 'إنذار' },
      { en: 'You can take the case to court.', ar: 'يمكنك نقض القضية إلى المحكمة.', word: 'court', hint: 'محكمة' },
      { en: 'We asked for fair compensation.', ar: 'طالبنا بتعويض عادل.', word: 'compensation', hint: 'تعويض' },
      { en: 'The supplier sent the wrong parts again.', ar: 'أرسل المورد القطع الخطأ مرة أخرى.', word: 'supplier', hint: 'المورد' },
      { en: 'Contact the consumer protection agency this week.', ar: 'تواصل مع هيئة حماية المستهلك هذا الأسبوع.', word: 'consumer' },
      { en: 'Keep every email as evidence.', ar: 'احتفظ بكل بريد إلكتروني كدليل.', word: 'evidence', hint: 'دليل' },
    ],
    orders: [
      { en: 'The company refuses to repair the device.', ar: 'ترفض الشركة إصلاح الجهاز.' },
      { en: 'That is a breach of the contract.', ar: 'هذا إخلال بالعقد.' },
      { en: 'I sent them a written warning last week.', ar: 'أرسلت إليهم إنذارا كتابيا الأسبوع الماضي.' },
      { en: 'We will take the case to court.', ar: 'سنرفع القضية إلى المحكمة.' },
      { en: 'The consumer agency handles such disputes.', ar: 'تتولى هيئة حماية المستهلك مثل هذه النزاعات.' },
      { en: 'Keep every email as written evidence.', ar: 'احتفظ بكل بريد إلكتروني كدليل مكتوب.' },
    ],
    mc: [
      { question: 'The company will not repair the product. Where can you complain first?', options: ['The weather office', 'The consumer protection agency', 'The school', 'The bakery'], answerIndex: 1, ar: 'ترفض الشركة إصلاح المنتج. أين تشكو أولا؟' },
      { question: 'A "breach of contract" means:', options: ['The contract was lost', 'Both sides are happy', 'One side did not follow the written agreement', 'The price went down'], answerIndex: 2, ar: 'ما معنى breach of contract؟' },
      { question: 'What should you send before going to court?', options: ['A birthday card', 'A new order', 'A photo album', 'A written warning'], answerIndex: 3, ar: 'ماذا ترسل قبل اللجوء إلى المحكمة؟' },
      { question: '"Compensation" is:', options: ['money or something given for a loss', 'a kind of discount card', 'a monthly bill', 'a delivery service'], answerIndex: 0, ar: 'ما هو التعويض؟' },
      { question: 'The fault returned twice. This means:', options: ['The machine is new', 'The repair did not solve the problem', 'The power is strong', 'The guarantee is long'], answerIndex: 1, ar: 'عاد العيب مرتين. ماذا يعني هذا؟' },
    ],
  },

  /* ================= lesson 237 — Mediation and Dispute Resolution ================= */
  {
    num: 237,
    tags: ['mediation', 'dispute-resolution'],
    objectives: [
      'Explain what a neutral mediator does',
      'Reach an agreement and sign a settlement',
      'Explain why mediation is better than court',
    ],
    grammar: {
      explanation: 'Mediation vocabulary: a mediator is neutral and helps both sides talk. Use "agree to" for consent: "Both sides agree to the mediation", "They agreed to sign the settlement". "Suggest" takes a noun or a that-clause: "The mediator suggested a compromise". Present perfect reports progress: "We have reached an agreement". Mediation is confidential and cheaper than court; the goal is a written settlement that both sides sign.',
      explanationAr: 'مفردات الوساطة: الوسيط شخص محايد يساعد الطرفين على الحوار. استخدم agree to للموافقة: Both sides agree to the mediation وThey agreed to sign the settlement. ويلحق suggest باسم أو بجملة: The mediator suggested a compromise. ويستخدم المضارع التام لعرض التقدم: We have reached an agreement. والوساطة سرية وأرخص من المحكمة، وهدفها تسوية مكتوبة يوقعها الطرفان.',
      examples: [
        { en: 'The mediator is neutral and the sessions are confidential.', ar: 'الوسيط محايد والجلسات سرية.' },
        { en: 'Both sides must agree to the settlement.', ar: 'يجب أن يوافق الطرفان على التسوية.' },
        { en: 'Mediation helped them avoid going to court.', ar: 'ساعدتهم الوساطة على تجنب اللجوء إلى المحكمة.' },
      ],
    },
    vocabulary: [
      { word: 'mediator', meaningAr: 'وسيط', example: 'The mediator listens to both sides.' },
      { word: 'neutral', meaningAr: 'محايد', example: 'A good mediator is neutral.' },
      { word: 'mediation', meaningAr: 'وساطة', example: 'Mediation is faster than court.' },
      { word: 'agreement', meaningAr: 'اتفاق', example: 'We finally reached an agreement.' },
      { word: 'settlement', meaningAr: 'تسوية', example: 'The settlement includes a partial refund.' },
      { word: 'compromise', meaningAr: 'حل وسط', example: 'A compromise saved the deal.' },
      { word: 'confidential', meaningAr: 'سري', example: 'The sessions are confidential.' },
      { word: 'session', meaningAr: 'جلسة', example: 'The next session is on Thursday.' },
      { word: 'proposal', meaningAr: 'اقتراح', example: 'The company made a new proposal.' },
      { word: 'sign', meaningAr: 'يوقع', example: 'Both sides will sign the document.' },
      { word: 'avoid', meaningAr: 'يتجنب', example: 'We want to avoid going to court.' },
      { word: 'resolve', meaningAr: 'يحل', example: 'Talking can resolve the dispute.' },
    ],
    scenario: [
      { en: 'The mediator is a neutral person, not a judge.', ar: 'الوسيط شخص محايد وليس قاضيا.', d: 1 },
      { en: 'Both sides must agree to the mediation.', ar: 'يجب أن يوافق الطرفان على الوساطة.', d: 1 },
      { en: 'The sessions are completely confidential.', ar: 'الجلسات سرية تماما.', d: 2 },
      { en: 'What does the mediator actually do?', ar: 'ماذا يفعل الوسيط فعلا؟', d: 1 },
      { en: 'He listens to both sides and suggests solutions.', ar: 'يستمع إلى الطرفين ويقترح حلولا.', d: 2 },
      { en: 'Can we bring a lawyer to the session?', ar: 'هل يمكننا إحضار محام إلى الجلسة؟', d: 2 },
      { en: 'Yes, but the mediator manages the discussion.', ar: 'نعم، لكن الوسيط يدير النقاش.', d: 2 },
      { en: 'The company has made a new proposal.', ar: 'قدمت الشركة اقتراحا جديدا.', d: 2 },
      { en: 'We are ready to reach an agreement this week.', ar: 'نحن مستعدون للوصول إلى اتفاق هذا الأسبوع.', d: 2 },
      { en: 'The settlement includes a partial refund.', ar: 'تتضمن التسوية استردادا جزئيا للمال.', d: 3 },
      { en: 'Will the settlement be written down?', ar: 'هل ستكتب التسوية؟', d: 2 },
      { en: 'Yes, both sides will sign the document.', ar: 'نعم، سيوقع الطرفان المستند.', d: 2 },
      { en: 'Did the two sides reach an agreement last month?', ar: 'هل وصل الطرفان إلى اتفاق في الشهر الماضي؟', d: 2 },
      { en: 'No, they did not; the talks stopped for a while.', ar: 'لا؛ توقفت المفاوضات فترة.', d: 2 },
      { en: 'A compromise later helped them avoid going to court.', ar: 'ساعدهم حل وسط لاحق على تجنب المحكمة.', d: 3 },
      { en: 'Mediation is cheaper and faster than court.', ar: 'الوساطة أرخص وأسرع من المحكمة.', d: 3 },
      { en: 'Please keep the discussion respectful.', ar: 'أبقِ النقاش محترما من فضلك.', d: 2 },
      { en: 'A good mediator never takes sides.', ar: 'الوسيط الجيد لا ينحاز أبدا.', d: 3 },
    ],
    patterns: [
      {
        tmpl: '{S} {V} to the mediation.', arTmpl: '{S_ar} {V_ar} على الوساطة.',
        slots: {
          S: B.PRONOUNS,
          V: (x) => [{ en: (x.S.agr === 'he' || x.S.agr === 'she') ? 'agrees' : 'agree', ar: AR_AGREE[x.S.agr] }],
        },
        tags: ['mediation', 'present-simple'], d: 1, limit: 12,
      },
      {
        tmpl: 'Both sides must {A}.', arTmpl: 'يجب على الطرفين {A_ar}.',
        slots: {
          A: [
            { en: 'reach an agreement', ar: 'الوصول إلى اتفاق' },
            { en: 'sign the settlement', ar: 'توقيع التسوية' },
            { en: 'attend the next session', ar: 'حضور الجلسة القادمة' },
            { en: 'share the costs', ar: 'تقاسم التكاليف' },
            { en: 'accept the proposal', ar: 'قبول الاقتراح' },
            { en: 'write down the terms', ar: 'تدوين الشروط' },
          ],
        },
        tags: ['mediation', 'must'], d: 2, limit: 6,
      },
      {
        tmpl: 'The mediator suggested {SG}.', arTmpl: 'اقترح الوسيط {SG_ar}.',
        slots: {
          SG: [
            { en: 'a compromise', ar: 'حلا وسطا' }, { en: 'a short break', ar: 'استراحة قصيرة' },
            { en: 'a written settlement', ar: 'تسوية مكتوبة' }, { en: 'a new meeting date', ar: 'موعدا جديدا للقاء' },
            { en: 'a neutral venue', ar: 'مكانا محايدا' },
          ],
        },
        tags: ['mediation', 'past-simple'], d: 2, limit: 5,
      },
      {
        tmpl: 'Mediation helped us avoid {N}.', arTmpl: 'ساعدتنا الوساطة على تجنب {N_ar}.',
        slots: {
          N: [
            { en: 'going to court', ar: 'اللجوء إلى المحكمة' }, { en: 'a long dispute', ar: 'نزاع طويل' },
            { en: 'extra costs', ar: 'تكاليف إضافية' }, { en: 'a second meeting', ar: 'لقاء ثان' },
          ],
        },
        tags: ['mediation'], d: 3, limit: 4,
      },
      {
        tmpl: 'We want to {V} this dispute {T}.', arTmpl: 'نريد أن {V_ar} هذا النزاع {T_ar}.',
        slots: {
          V: [
            { en: 'resolve', ar: 'نحل' }, { en: 'settle', ar: 'نسوّي' }, { en: 'end', ar: 'ننهي' },
          ],
          T: [
            { en: 'peacefully', ar: 'بسلام' }, { en: 'quickly', ar: 'بسرعة' },
            { en: 'this month', ar: 'هذا الشهر' }, { en: 'before the hearing', ar: 'قبل الجلسة' },
            { en: 'before the deadline', ar: 'قبل الموعد النهائي' },
          ],
        },
        tags: ['mediation'], d: 2, limit: 10,
      },
    ],
    fills: [
      { en: 'The mediator is a neutral person.', ar: 'الوسيط شخص محايد.', word: 'neutral', hint: 'محايد' },
      { en: 'Both sides agreed to try mediation.', ar: 'وافق الطرفان على تجربة الوساطة.', word: 'agreed', hint: 'وافق' },
      { en: 'The settlement includes free repairs too.', ar: 'تتضمن التسوية تصليحات مجانية أيضا.', word: 'settlement', hint: 'تسوية' },
      { en: 'Please keep the session confidential.', ar: 'أبقِ الجلسة سرية من فضلك.', word: 'confidential', hint: 'سري' },
      { en: 'A compromise helped them avoid court.', ar: 'ساعدهم حل وسط على تجنب المحكمة.', word: 'compromise', hint: 'حل وسط' },
      { en: 'Both sides will sign the final agreement.', ar: 'سيوقع الطرفان الاتفاق النهائي.', word: 'sign', hint: 'يوقع' },
      { en: 'Their proposal arrived this morning.', ar: 'وصل اقتراحهم هذا الصباح.', word: 'proposal', hint: 'اقتراح' },
      { en: 'We want to resolve the dispute peacefully.', ar: 'نريد أن نحل النزاع بسلام.', word: 'resolve', hint: 'يحل' },
    ],
    orders: [
      { en: 'The mediator listens to both sides.', ar: 'يستمع الوسيط إلى الطرفين.' },
      { en: 'We hope to reach an agreement soon.', ar: 'نأمل أن نصل إلى اتفاق قريبا.' },
      { en: 'Both sides will sign the settlement.', ar: 'سيوقع الطرفان التسوية.' },
      { en: 'Mediation is cheaper than going to court.', ar: 'الوساطة أرخص من اللجوء إلى المحكمة.' },
      { en: 'The next session is on Thursday morning.', ar: 'الجلسة القادمة صباح الخميس.' },
      { en: 'The talks stopped for a short while.', ar: 'توقفت المفاوضات فترة قصيرة.' },
    ],
    mc: [
      { question: 'Who is a mediator?', options: ['A judge who decides the case', 'A neutral person who helps both sides talk', 'A police officer', 'A company manager'], answerIndex: 1, ar: 'من هو الوسيط؟' },
      { question: 'Why do people choose mediation?', options: ['It is cheaper and faster than court', 'It is more expensive', 'It takes many years', 'It is always public'], answerIndex: 0, ar: 'لماذا يختار الناس الوساطة؟' },
      { question: 'A "settlement" is:', options: ['A court punishment', 'A kind of invoice', 'An agreement that ends the dispute', 'A legal lawyer'], answerIndex: 2, ar: 'ما هي التسوية؟' },
      { question: 'The sessions are confidential. This means:', options: ['Everyone can watch', 'The media writes about it', 'The doors are broken', 'People keep the discussion private'], answerIndex: 3, ar: 'الجلسات سرية. ماذا يعني هذا؟' },
      { question: 'What must both sides do at the end?', options: ['Sign the written settlement', 'Pay the mediator a fine', 'Start a new dispute', 'Close the company'], answerIndex: 0, ar: 'ماذا يجب أن يفعل الطرفان في النهاية؟' },
    ],
  },
];
