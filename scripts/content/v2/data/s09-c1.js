/* ============================================================
   v2 section data — s09-c1.js
   Education & Digital Skills · lessons 210–213
   (Online Scams · Online Banking · Applications and Apps · Privacy)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 210 — Online Scams ================= */
  {
    num: 210,
    tags: ['online-scams', 'internet-safety'],
    objectives: [
      'Recognize common online scams and fake offers',
      'Warn others about suspicious messages and callers',
      'Protect your bank details, PIN and passwords',
    ],
    grammar: {
      explanation: 'Scam warnings use imperatives and modals: "Do not click on strange links", "You should never send money to strangers". Use "too + adjective + to + verb" for impossible offers: "This offer is too good to be true". If + present + will gives advice: "If a stranger asks for money, I will refuse". A scam is a plan to steal money or information, usually by email, phone or fake websites. When you see one: stop, do not reply, report it, and then delete it.',
      explanationAr: 'تحذيرات الاحتيال تستخدم صيغة الأمر وأفعال القدرة: Do not click on strange links، You should never send money to strangers. ونستخدم too + صفة + to لوصف العروض المستحيلة: This offer is too good to be true. وللنصيحة نستخدم if مع المضارع وwill: If a stranger asks for money, I will refuse. والاحتيال خطة لسرقة المال أو المعلومات عادة بالبريد أو الهاتف أو المواقع المزيفة. إذا رأيت واحدا: توقف، لا ترد، أبلغ عنه، ثم احذفه.',
      examples: [
        { en: 'She never replies to strange emails.', ar: 'لا ترد أبدا على الرسائل الإلكترونية الغريبة.' },
        { en: 'The prize sounded too good to be true.', ar: 'بدت الجائزة جيدة لدرجة الاستحالة.' },
        { en: 'If a caller asks for your PIN, hang up.', ar: 'إذا طلب منك المتصل رمزك السري، أغلق الخط.' },
      ],
    },
    vocabulary: [
      { word: 'scam', meaningAr: 'احتيال / نصب', example: 'That email is a scam.', ipa: 'skæm' },
      { word: 'fraud', meaningAr: 'غش مالي', example: 'The police caught a fraud ring.' },
      { word: 'suspicious', meaningAr: 'مشبوه', example: 'The message looks suspicious.' },
      { word: 'link', meaningAr: 'رابط', example: 'Do not open links from strangers.' },
      { word: 'attachment', meaningAr: 'ملف مرفق', example: 'The attachment hid a virus.' },
      { word: 'bank details', meaningAr: 'البيانات البنكية', example: 'He asked for my bank details.' },
      { word: 'pop-up', meaningAr: 'نافذة منبثقة', example: 'A pop-up promised a free prize.' },
      { word: 'urgent', meaningAr: 'عاجل / مستعجل', example: 'The caller sounded very urgent.' },
      { word: 'hacker', meaningAr: 'مخترق / هاكر', example: 'A hacker tried my account last night.' },
      { word: 'block', meaningAr: 'يحظر', example: 'Block that number immediately.' },
      { word: 'report', meaningAr: 'يبلغ عن', example: 'Report the scam to the website.' },
      { word: 'too good to be true', meaningAr: 'جيد جدا لدرجة الاستحالة', example: 'A free laptop is too good to be true.' },
    ],
    scenario: [
      { en: 'That email is a scam.', ar: 'تلك الرسالة الإلكترونية احتيال.', d: 1 },
      { en: 'Do not click on strange links.', ar: 'لا تنقر على الروابط الغريبة.', d: 1 },
      { en: 'He asked for my bank details.', ar: 'طلب مني بياناتي البنكية.', d: 1 },
      { en: 'This offer is too good to be true.', ar: 'هذا العرض جيد جدا لدرجة الاستحالة.', d: 1 },
      { en: 'Did you receive a strange message yesterday?', ar: 'هل وصلك رسالة غريبة أمس؟', d: 1 },
      { en: 'Yes, someone said I won a prize.', ar: 'نعم، قال أحدهم إنني فزت بجائزة.', d: 1 },
      { en: 'I have received three scam calls this week.', ar: 'وصلتني ثلاث مكالمات احتيالية هذا الأسبوع.', d: 2 },
      { en: 'Never send money to strangers online.', ar: 'لا ترسل المال أبدا للغرباء على الإنترنت.', d: 1 },
      { en: 'My aunt almost lost her savings last month.', ar: 'كدت عمتي تفقد مدخراتها الشهر الماضي.', d: 2 },
      { en: 'The caller sounded urgent, so she got worried.', ar: 'بدا المتصل مستعجلا، فأصبحت قلقة.', d: 2 },
      { en: 'She called the bank, and they stopped the payment.', ar: 'اتصلت بالبنك، وأوقفوا الدفعة.', d: 2 },
      { en: 'Should I reply to this message?', ar: 'هل أرد على هذه الرسالة؟', d: 1 },
      { en: 'No, report it and delete it, please.', ar: 'لا، أبلغ عنها واحذفها، من فضلك.', d: 1 },
      { en: 'A real bank never asks for your PIN by email.', ar: 'البنك الحقيقي لا يطلب رمزك السري عبر البريد أبدا.', d: 2 },
      { en: 'If it sounds too good to be true, it is probably a scam.', ar: 'إذا بدأ جيدا لدرجة الاستحالة، فهو على الأرجح احتيال.', d: 3 },
      { en: 'I have never answered calls from unknown numbers.', ar: 'لم أرد أبدا على مكالمات من أرقام مجهولة.', d: 3 },
      { en: 'Why do they want my card number?', ar: 'لماذا يريدون رقم بطاقتي؟', d: 2 },
      { en: 'They want it to steal your money.', ar: 'يريدونه لسرقة أموالك.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'The email promised a free {Pz}.', arTmpl: 'وعدت الرسالة بـ{Pz_ar}.',
        slots: {
          Pz: [
            { en: 'prize', ar: 'جائزة مجانية' }, { en: 'gift card', ar: 'بطاقة هدايا مجانية' },
            { en: 'smartphone', ar: 'هاتف ذكي مجاني' }, { en: 'holiday trip', ar: 'رحلة سياحية مجانية' },
            { en: 'laptop', ar: 'حاسوب محمول مجاني' }, { en: 'voucher', ar: 'قسيمة شراء مجانية' },
          ],
        },
        tags: ['online-scams'], d: 2, limit: 6,
      },
      {
        tmpl: 'Do not click on {L} from strangers.', arTmpl: 'لا تنقر على {L_ar} من الغرباء.',
        slots: {
          L: [
            { en: 'links', ar: 'روابط' }, { en: 'attachments', ar: 'مرفقات' },
            { en: 'pop-ups', ar: 'نوافذ منبثقة' }, { en: 'files', ar: 'ملفات' },
            { en: 'photos', ar: 'صور' }, { en: 'ads', ar: 'إعلانات' },
          ],
        },
        tags: ['online-scams', 'imperatives'], d: 1, limit: 6,
      },
      {
        tmpl: 'He asked for my {D} on the phone.', arTmpl: 'طلب {D_ar} عبر الهاتف.',
        slots: {
          D: [
            { en: 'bank details', ar: 'بياناتي البنكية' }, { en: 'card number', ar: 'رقم بطاقتي' },
            { en: 'PIN code', ar: 'رمز PIN الخاص بي' }, { en: 'password', ar: 'كلمة مروري' },
            { en: 'account number', ar: 'رقم حسابي' }, { en: 'home address', ar: 'عنوان منزلي' },
          ],
        },
        tags: ['online-scams', 'money'], d: 2, limit: 6,
      },
      {
        tmpl: '{S} {V} like a scam to me.', arTmpl: '{S_ar} احتيال من وجهة نظري.',
        slots: {
          S: [
            { en: 'This email', ar: 'هذه الرسالة الإلكترونية' }, { en: 'That message', ar: 'تلك الرسالة' },
            { en: 'The offer', ar: 'هذا العرض' }, { en: 'The website', ar: 'هذا الموقع الإلكتروني' },
            { en: 'His story', ar: 'قصته' },
          ],
          V: [
            { en: 'looks', ar: 'يبدو' }, { en: 'sounds', ar: 'يبدو' }, { en: 'seems', ar: 'يبدو' },
          ],
        },
        tags: ['online-scams'], d: 2, limit: 15,
      },
      {
        tmpl: 'If a stranger asks for money, I will {R}.', arTmpl: 'إذا طلب مني غريب المال، سأ{R_ar}.',
        slots: {
          R: [
            { en: 'refuse', ar: 'أرفض' }, { en: 'report him', ar: 'أبلغ عنه' },
            { en: 'block the number', ar: 'أحظر الرقم' }, { en: 'hang up', ar: 'أغلق الخط' },
            { en: 'delete the message', ar: 'أحذف الرسالة' },
          ],
        },
        tags: ['online-scams', 'conditionals'], d: 3, limit: 5,
      },
    ],
    fills: [
      { en: 'That email is a scam.', ar: 'تلك الرسالة الإلكترونية احتيال.', word: 'scam', hint: 'احتيال' },
      { en: 'Do not click on strange links.', ar: 'لا تنقر على الروابط الغريبة.', word: 'click', hint: 'انقر' },
      { en: 'He asked for my bank details.', ar: 'طلب مني بياناتي البنكية.', word: 'bank', hint: 'بنك' },
      { en: 'This offer is too good to be true.', ar: 'هذا العرض جيد جدا لدرجة الاستحالة.', word: 'offer', hint: 'عرض' },
      { en: 'Never send money to strangers online.', ar: 'لا ترسل المال أبدا للغرباء على الإنترنت.', word: 'strangers', hint: 'غرباء' },
      { en: 'Please report the email and delete it.', ar: 'من فضلك أبلغ عن الرسالة ثم احذفها.', word: 'report', hint: 'يبلغ' },
      { en: 'A real bank never asks for your PIN by email.', ar: 'البنك الحقيقي لا يطلب رمزك السري عبر البريد أبدا.', word: 'PIN', hint: 'رمز سري' },
      { en: 'She called the bank, and they stopped the payment.', ar: 'اتصلت بالبنك، وأوقفوا الدفعة.', word: 'payment', hint: 'دفعة' },
    ],
    orders: [
      { en: 'That email is a scam.', ar: 'تلك الرسالة الإلكترونية احتيال.' },
      { en: 'Do not click on strange links.', ar: 'لا تنقر على الروابط الغريبة.' },
      { en: 'This offer is too good to be true.', ar: 'هذا العرض جيد جدا لدرجة الاستحالة.' },
      { en: 'He asked for my bank details.', ar: 'طلب مني بياناتي البنكية.' },
      { en: 'We should warn our friends about these messages.', ar: 'يجب أن نحذر أصدقاءنا من هذه الرسائل.' },
      { en: 'If it sounds too good to be true, it is probably a scam.', ar: 'إذا بدأ جيدا لدرجة الاستحالة، فهو على الأرجح احتيال.' },
    ],
    mc: [
      { question: 'You receive an email promising a free phone. What is it?', options: ['Probably a scam', 'A real gift', 'A bank statement', 'A safe website'], answerIndex: 0, ar: 'وصلك بريد يعدك بهاتف مجاني، فما هو؟' },
      { question: 'What should you do with a suspicious message?', options: ['Report it and delete it', 'Reply with your card number', 'Send money quickly', 'Click every link'], answerIndex: 0, ar: 'ماذا تفعل برسالة مشبوهة؟' },
      { question: '"Too good to be true" means:', options: ['جيد جدا لدرجة الاستحالة', 'رخيص ومعقول', 'مضمون من البنك', 'قديم لكن جيد'], answerIndex: 0, ar: 'ماذا يعني Too good to be true؟' },
      { question: 'A bank employee asks for your PIN by email. This is:', options: ['a scam, because banks never ask for your PIN', 'normal security', 'a lucky prize', 'a fast transfer'], answerIndex: 0, ar: 'موظف بنك يطلب رمزك السري بالبريد، هذا:' },
    ],
  },

  /* ================= lesson 211 — Online Banking ================= */
  {
    num: 211,
    tags: ['online-banking', 'money'],
    objectives: [
      'Log in to your bank account safely',
      'Transfer money and check your balance online',
      'Use confirmation codes and log out correctly',
    ],
    grammar: {
      explanation: 'Online banking lets you manage money from your phone or computer. Log in with your username and password, then you can transfer money, check your balance or pay bills. For safety, the bank sends a confirmation code by text message before big payments. Always log out when you finish, and never use public computers for banking. Questions about the past use did + base verb: "Did you transfer the money yesterday?", and the present perfect asks about experience: "Have you ever paid a bill through the app?"',
      explanationAr: 'تتيح لك الخدمات المصرفية عبر الإنترنت إدارة أموالك من هاتفك أو حاسوبك. سجل الدخول باسم المستخدم وكلمة المرور، ثم يمكنك تحويل المال أو التحقق من رصيدك أو دفع الفواتير. وللأمان يرسل البنك رمز تأكيد برسالة نصية قبل المدفوعات الكبيرة. سجل الخروج دائما عند الانتهاء، ولا تستخدم الحواسيب العامة للمصرفية أبدا. والأسئلة عن الماضي تستخدم did مع المصدر: Did you transfer the money yesterday؟ والمضارع التام يسأل عن التجربة: Have you ever paid a bill through the app؟',
      examples: [
        { en: 'Log in with your username and password.', ar: 'سجل الدخول باسم المستخدم وكلمة المرور.' },
        { en: 'She transfers money to her family monthly.', ar: 'تحول المال لعائلتها شهريا.' },
        { en: 'Always log out on shared computers.', ar: 'سجل الخروج دائما على الأجهزة المشتركة.' },
      ],
    },
    vocabulary: [
      { word: 'log in', meaningAr: 'يسجل الدخول', example: 'I log in to my account every Friday.', ipa: 'lɒɡ ɪn' },
      { word: 'transfer', meaningAr: 'يحوّل (مالا)', example: 'Transfer the rent money today.' },
      { word: 'balance', meaningAr: 'الرصيد', example: 'Your balance is five hundred dollars.' },
      { word: 'confirmation code', meaningAr: 'رمز التأكيد', example: 'The app asked me for a confirmation code.' },
      { word: 'log out', meaningAr: 'يسجل الخروج', example: 'Please log out when you finish.' },
      { word: 'secure', meaningAr: 'آمن', example: 'This website is secure.' },
      { word: 'transaction', meaningAr: 'عملية مالية', example: 'The transaction took one minute.' },
      { word: 'deposit', meaningAr: 'يودع', example: 'I deposited the cash this morning.' },
      { word: 'statement', meaningAr: 'كشف حساب', example: 'We check our statements every month.' },
      { word: 'notification', meaningAr: 'إشعار', example: 'The bank sent me a notification.' },
      { word: 'username', meaningAr: 'اسم المستخدم', example: 'Never share your username and password.' },
      { word: 'account', meaningAr: 'حساب', example: 'My account is with a local bank.' },
    ],
    scenario: [
      { en: 'I log in to my account every Friday.', ar: 'أسجل الدخول إلى حسابي كل جمعة.', d: 1 },
      { en: 'Have you transferred the rent money yet?', ar: 'هل حولت مال الإيجار بعد؟', d: 1 },
      { en: 'Yes, I sent it two hours ago.', ar: 'نعم، أرسلته قبل ساعتين.', d: 1 },
      { en: 'How much is in your balance?', ar: 'كم في رصيدك؟', d: 1 },
      { en: 'About five hundred dollars right now.', ar: 'نحو خمسمئة دولار الآن.', d: 1 },
      { en: 'The app asked me for a confirmation code.', ar: 'طلب التطبيق مني رمز تأكيد.', d: 1 },
      { en: 'I received the code by text message.', ar: 'وصلني الرمز برسالة نصية.', d: 1 },
      { en: 'Please log out when you finish.', ar: 'من فضلك سجل الخروج عند الانتهاء.', d: 1 },
      { en: 'Never log in from a public computer.', ar: 'لا تسجل الدخول أبدا من حاسوب عام.', d: 2 },
      { en: 'She transfers money to her mother every month.', ar: 'تحول المال لأمها كل شهر.', d: 2 },
      { en: 'We check our statements at the end of each month.', ar: 'نتحقق من كشوف حساباتنا نهاية كل شهر.', d: 2 },
      { en: 'I forgot my password, so I reset it.', ar: 'نسيت كلمة المرور، فأعدت ضبطها.', d: 2 },
      { en: 'The bank sent me a notification about the payment.', ar: 'أرسل لي البنك إشعارا عن الدفعة.', d: 2 },
      { en: 'This website is not secure, so I left it.', ar: 'هذا الموقع غير آمن، فتركتُه.', d: 2 },
      { en: 'Look for the small padlock in the browser.', ar: 'ابحث عن القفل الصغير في المتصفح.', d: 2 },
      { en: 'Have you ever paid a bill through the app?', ar: 'هل دفعت يوما فاتورة عبر التطبيق؟', d: 3 },
      { en: 'No, I always pay it at the office.', ar: 'لا، أدفعها دائما في المكتب.', d: 3 },
      { en: 'You should check your balance once a week.', ar: 'يجب أن تتحقق من رصيدك مرة كل أسبوع.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'I check my {A} on my phone.', arTmpl: 'أتحقق من {A_ar} على هاتفي.',
        slots: {
          A: [
            { en: 'balance', ar: 'رصيدي' }, { en: 'transactions', ar: 'معاملاتي' },
            { en: 'savings', ar: 'مدخراتي' }, { en: 'account', ar: 'حسابي' },
            { en: 'statement', ar: 'كشف حسابي' }, { en: 'recent payments', ar: 'آخر مدفوعاتي' },
          ],
        },
        tags: ['online-banking', 'money'], d: 1, limit: 6,
      },
      {
        tmpl: 'Did you {V} the money {T}?', arTmpl: 'هل {V_ar} المال {T_ar}؟',
        slots: {
          V: [
            { en: 'transfer', ar: 'حولت' }, { en: 'send', ar: 'أرسلت' },
            { en: 'deposit', ar: 'أودعت' }, { en: 'receive', ar: 'استلمت' },
          ],
          T: [
            { en: 'yesterday', ar: 'أمس' }, { en: 'this morning', ar: 'هذا الصباح' },
            { en: 'last night', ar: 'البارحة' }, { en: 'on Sunday', ar: 'يوم الأحد' },
          ],
        },
        tags: ['online-banking', 'past-simple'], d: 2, limit: 16,
      },
      {
        tmpl: '{S} {V} money online every month.', arTmpl: '{S_ar} {V_ar} مالا عبر الإنترنت كل شهر.',
        slots: {
          S: [
            { en: 'I', ar: 'أنا', agr: 'I' }, { en: 'He', ar: 'هو', agr: 'he' },
            { en: 'She', ar: 'هي', agr: 'she' }, { en: 'We', ar: 'نحن', agr: 'we' },
            { en: 'They', ar: 'هم', agr: 'they' },
          ],
          V: (x) => [{ en: B.enPresent('send', x.S.agr), ar: B.arPresent('send', x.S.agr) }],
        },
        tags: ['online-banking', 'present-simple'], d: 2, limit: 5,
      },
      {
        tmpl: 'The bank sent me a {C}.', arTmpl: 'أرسل لي البنك {C_ar}.',
        slots: {
          C: [
            { en: 'confirmation code', ar: 'رمز تأكيد' }, { en: 'text message', ar: 'رسالة نصية' },
            { en: 'security alert', ar: 'تنبيه أمني' }, { en: 'new card', ar: 'بطاقة جديدة' },
            { en: 'payment notification', ar: 'إشعار دفع' },
          ],
        },
        tags: ['online-banking', 'money'], d: 1, limit: 5,
      },
      {
        tmpl: 'Do not share your {P} with anyone.', arTmpl: 'لا تشارك {P_ar} مع أحد.',
        slots: {
          P: [
            { en: 'password', ar: 'كلمة المرور' }, { en: 'CVV code', ar: 'رمز CVV' },
            { en: 'card number', ar: 'رقم البطاقة' }, { en: 'confirmation code', ar: 'رمز التأكيد' },
            { en: 'account details', ar: 'تفاصيل حسابك' },
          ],
        },
        tags: ['online-banking', 'internet-safety'], d: 2, limit: 5,
      },
    ],
    fills: [
      { en: 'I log in to my account every Friday.', ar: 'أسجل الدخول إلى حسابي كل جمعة.', word: 'account', hint: 'حساب' },
      { en: 'Have you transferred the rent money yet?', ar: 'هل حولت مال الإيجار بعد؟', word: 'transferred', hint: 'حوّل' },
      { en: 'The app asked me for a confirmation code.', ar: 'طلب التطبيق مني رمز تأكيد.', word: 'confirmation', hint: 'تأكيد' },
      { en: 'Please log out when you finish.', ar: 'من فضلك سجل الخروج عند الانتهاء.', word: 'finish', hint: 'ينتهي' },
      { en: 'Never log in from a public computer.', ar: 'لا تسجل الدخول أبدا من حاسوب عام.', word: 'public', hint: 'عام' },
      { en: 'This website is not secure, so I left it.', ar: 'هذا الموقع غير آمن، فتركتُه.', word: 'secure', hint: 'آمن' },
      { en: 'I forgot my password, so I reset it.', ar: 'نسيت كلمة المرور، فأعدت ضبطها.', word: 'forgot', hint: 'نسي' },
      { en: 'The bank sent me a notification about the payment.', ar: 'أرسل لي البنك إشعارا عن الدفعة.', word: 'notification', hint: 'إشعار' },
    ],
    orders: [
      { en: 'I log in to my account every Friday.', ar: 'أسجل الدخول إلى حسابي كل جمعة.' },
      { en: 'Have you transferred the rent money yet?', ar: 'هل حولت مال الإيجار بعد؟' },
      { en: 'The app asked me for a confirmation code.', ar: 'طلب التطبيق مني رمز تأكيد.' },
      { en: 'Never log in from a public computer.', ar: 'لا تسجل الدخول أبدا من حاسوب عام.' },
      { en: 'She transfers money to her mother every month.', ar: 'تحول المال لأمها كل شهر.' },
      { en: 'You should check your balance once a week.', ar: 'يجب أن تتحقق من رصيدك مرة كل أسبوع.' },
    ],
    mc: [
      { question: 'What do you need to log in to your account?', options: ['A username and a password', 'A new phone', 'A paper letter', "A friend's help"], answerIndex: 0, ar: 'ماذا تحتاج لتسجيل الدخول إلى حسابك؟' },
      { question: 'What does the bank send before a big payment?', options: ['A confirmation code', 'A gift', 'A new card', 'A paper bill'], answerIndex: 0, ar: 'ماذا يرسل البنك قبل دفعة كبيرة؟' },
      { question: 'You finish banking at the library. You should:', options: ['Log out at once', 'Leave it open', 'Share your password', 'Buy a new computer'], answerIndex: 0, ar: 'انتهيت من الخدمات المصرفية في المكتبة، فيجب أن:' },
      { question: 'Which website is safer for banking?', options: ['One with a padlock and https', 'One from a strange email link', 'One with pop-up ads', 'One with no name'], answerIndex: 0, ar: 'أي موقع أكثر أمانا للخدمات المصرفية؟' },
    ],
  },

  /* ================= lesson 212 — Applications and Apps ================= */
  {
    num: 212,
    tags: ['apps', 'technology'],
    objectives: [
      'Download and update apps on your phone',
      'Describe app problems like crashes and full storage',
      'Leave a review and manage your storage',
    ],
    grammar: {
      explanation: 'Apps are small programs on your phone. Use "I will download" for plans and "I downloaded" for the past. If something goes wrong, say "The app crashed" or "It closed by itself". To fix problems, update the app, free some storage, or delete it and install it again. When you like an app, leave a review and give it stars. Use will for quick decisions: "I will try again tomorrow".',
      explanationAr: 'التطبيقات برامج صغيرة على هاتفك. استخدم I will download للخطط وI downloaded للماضي. إذا حدث خطأ قل The app crashed أو It closed by itself. ولإصلاح المشاكل حدّث التطبيق أو أفرغ بعض المساحة أو احذفه وثبته من جديد. وعندما يعجبك تطبيق اترك مراجعة وأعطه نجوما. واستخدم will للقرارات السريعة: I will try again tomorrow.',
      examples: [
        { en: 'Download the app from the store.', ar: 'حمل التطبيق من المتجر.' },
        { en: 'The app crashed, so I updated it.', ar: 'تعطل التطبيق، فحدثته.' },
        { en: 'My storage is full; I will delete old files.', ar: 'مساحة التخزين ممتلئة؛ سأحذف الملفات القديمة.' },
      ],
    },
    vocabulary: [
      { word: 'download', meaningAr: 'يحمّل', example: 'I want to download this app.', ipa: 'ˈdaʊnloʊd' },
      { word: 'update', meaningAr: 'يحدّث / تحديث', example: 'The update will fix the problem.' },
      { word: 'install', meaningAr: 'يثبّت', example: 'Install the new version tonight.' },
      { word: 'delete', meaningAr: 'يحذف', example: 'Delete the old photos, please.' },
      { word: 'crash', meaningAr: 'يتعطل / ينهار', example: 'The app crashed again.' },
      { word: 'review', meaningAr: 'مراجعة / تقييم', example: 'Please leave a review for the app.' },
      { word: 'storage', meaningAr: 'مساحة التخزين', example: 'My storage is full.' },
      { word: 'full', meaningAr: 'ممتلئ', example: 'The memory is full.' },
      { word: 'version', meaningAr: 'إصدار', example: 'This is version two of the app.' },
      { word: 'Wi-Fi', meaningAr: 'واي فاي / شبكة لاسلكية', example: 'Download it on the Wi-Fi.' },
      { word: 'app store', meaningAr: 'متجر التطبيقات', example: 'It is free on the app store.' },
      { word: 'stars', meaningAr: 'نجوم (تقييم)', example: 'I gave it five stars.' },
    ],
    scenario: [
      { en: 'I want to download this app.', ar: 'أريد تحميل هذا التطبيق.', d: 1 },
      { en: 'It is free on the app store.', ar: 'إنه مجاني في متجر التطبيقات.', d: 1 },
      { en: 'Will you install the new version?', ar: 'هل ستثبت الإصدار الجديد؟', d: 1 },
      { en: 'Yes, tonight on the Wi-Fi.', ar: 'نعم، هذه الليلة عبر الواي فاي.', d: 1 },
      { en: 'The update will fix the problem.', ar: 'التحديث سيصلح المشكلة.', d: 1 },
      { en: 'My storage is full.', ar: 'مساحة التخزين لدي ممتلئة.', d: 1 },
      { en: 'I deleted some old photos.', ar: 'حذفت بعض الصور القديمة.', d: 1 },
      { en: 'The app crashed again.', ar: 'تعطل التطبيق من جديد.', d: 1 },
      { en: 'Did the app work well?', ar: 'هل عمل التطبيق جيدا؟', d: 1 },
      { en: 'No, it closed by itself.', ar: 'لا، أغلق نفسه وحده.', d: 1 },
      { en: 'Please leave a review for the app.', ar: 'من فضلك اترك مراجعة للتطبيق.', d: 1 },
      { en: 'I gave it five stars.', ar: 'أعطيته خمس نجوم.', d: 1 },
      { en: 'This game did not work on my phone.', ar: 'هذه اللعبة لم تعمل على هاتفي.', d: 2 },
      { en: 'Why is your phone so slow?', ar: 'لماذا هاتفك بهذا البطء؟', d: 2 },
      { en: 'Because the storage is almost full.', ar: 'لأن مساحة التخزين ممتلئة تقريبا.', d: 2 },
      { en: 'We downloaded two new apps yesterday.', ar: 'حمّلنا تطبيقين جديدين أمس.', d: 2 },
      { en: 'I will try again tomorrow.', ar: 'سأحاول من جديد غدا.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I will {V} the app {T}.', arTmpl: 'س{V_ar} التطبيق {T_ar}.',
        slots: {
          V: [
            { en: 'download', ar: 'أحمّل' }, { en: 'update', ar: 'أحدّث' },
            { en: 'install', ar: 'أثبّت' }, { en: 'delete', ar: 'أحذف' },
            { en: 'open', ar: 'أفتح' },
          ],
          T: [
            { en: 'tonight', ar: 'هذه الليلة' }, { en: 'tomorrow', ar: 'غدا' },
            { en: 'later', ar: 'لاحقا' }, { en: 'at home', ar: 'في المنزل' },
          ],
        },
        tags: ['apps', 'future-will'], d: 1, limit: 20,
      },
      {
        tmpl: '{N} crashed again.', arTmpl: '{N_ar}.',
        slots: {
          N: [
            { en: 'The browser', ar: 'تعطل المتصفح من جديد' }, { en: 'The game', ar: 'توقفت اللعبة من جديد' },
            { en: 'The chat app', ar: 'تعطل تطبيق الدردشة من جديد' }, { en: 'The video player', ar: 'توقف مشغل الفيديو من جديد' },
            { en: 'The camera app', ar: 'تعطل تطبيق الكاميرا من جديد' },
          ],
        },
        tags: ['apps', 'past-simple'], d: 2, limit: 5,
      },
      {
        tmpl: 'My {N} is full.', arTmpl: '{N_ar}.',
        slots: {
          N: [
            { en: 'phone', ar: 'هاتفي ممتلئ' }, { en: 'memory', ar: 'الذاكرة ممتلئة' },
            { en: 'email inbox', ar: 'صندوق بريدي ممتلئ' }, { en: 'cloud', ar: 'التخزين السحابي ممتلئ' },
            { en: 'download folder', ar: 'مجلد التنزيلات ممتلئ' },
          ],
        },
        tags: ['apps', 'technology'], d: 1, limit: 5,
      },
      {
        tmpl: '{A} needs an update.', arTmpl: '{A_ar} يحتاج إلى تحديث.',
        slots: {
          A: [
            { en: 'This app', ar: 'هذا التطبيق' }, { en: 'That game', ar: 'تلك اللعبة' },
            { en: 'The camera app', ar: 'تطبيق الكاميرا' }, { en: 'The chat app', ar: 'تطبيق الدردشة' },
            { en: 'The map app', ar: 'تطبيق الخرائط' },
          ],
        },
        tags: ['apps', 'present-simple'], d: 1, limit: 5,
      },
      {
        tmpl: 'Did you {V} the new version?', arTmpl: 'هل {V_ar} الإصدار الجديد؟',
        slots: {
          V: [
            { en: 'download', ar: 'حمّلت' }, { en: 'install', ar: 'ثبّتت' },
            { en: 'try', ar: 'جرّبت' },
          ],
        },
        tags: ['apps', 'past-simple'], d: 2, limit: 3,
      },
    ],
    fills: [
      { en: 'I want to download this app.', ar: 'أريد تحميل هذا التطبيق.', word: 'download', hint: 'يحمّل' },
      { en: 'It is free on the app store.', ar: 'إنه مجاني في متجر التطبيقات.', word: 'free', hint: 'مجاني' },
      { en: 'My storage is full.', ar: 'مساحة التخزين لدي ممتلئة.', word: 'full', hint: 'ممتلئ' },
      { en: 'The app crashed again.', ar: 'تعطل التطبيق من جديد.', word: 'crashed', hint: 'تعطل' },
      { en: 'Please leave a review for the app.', ar: 'من فضلك اترك مراجعة للتطبيق.', word: 'review', hint: 'مراجعة' },
      { en: 'I gave it five stars.', ar: 'أعطيته خمس نجوم.', word: 'stars', hint: 'نجوم' },
      { en: 'I deleted some old photos.', ar: 'حذفت بعض الصور القديمة.', word: 'deleted', hint: 'حذف' },
      { en: 'The update will fix the problem.', ar: 'التحديث سيصلح المشكلة.', word: 'update', hint: 'تحديث' },
    ],
    orders: [
      { en: 'I want to download this app.', ar: 'أريد تحميل هذا التطبيق.' },
      { en: 'The app crashed again.', ar: 'تعطل التطبيق من جديد.' },
      { en: 'Please leave a review for the app.', ar: 'من فضلك اترك مراجعة للتطبيق.' },
      { en: 'My storage is almost full now.', ar: 'مساحة التخزين لدي ممتلئة تقريبا الآن.' },
      { en: 'The update will fix the problem.', ar: 'التحديث سيصلح المشكلة.' },
      { en: 'I gave it five stars.', ar: 'أعطيته خمس نجوم.' },
    ],
    mc: [
      { question: 'Where do you download apps?', options: ['From the app store', 'From a paper magazine', 'From the post office', 'From a cookbook'], answerIndex: 0, ar: 'من أين تحمّل التطبيقات؟' },
      { question: 'The app crashed. What can help?', options: ['Update it and try again', 'Type in ALL CAPS', 'Delete all your photos', 'Buy a new TV'], answerIndex: 0, ar: 'تعطل التطبيق، ما الذي قد يساعد؟' },
      { question: 'Storage is full. What should you do?', options: ['Delete old files', 'Download more games', 'Turn off the Wi-Fi', 'Leave a bad review'], answerIndex: 0, ar: 'مساحة التخزين ممتلئة، ماذا تفعل؟' },
      { question: 'You like the app very much. You leave:', options: ['five stars and a kind review', 'a complaint to the police', 'a new password', 'a long bill'], answerIndex: 0, ar: 'أعجبك التطبيق كثيرا، فتترك:' },
    ],
  },

  /* ================= lesson 213 — Privacy ================= */
  {
    num: 213,
    tags: ['privacy', 'internet-safety'],
    objectives: [
      'Change your privacy settings on social media',
      'Talk about personal data and app permissions',
      'Explain how to delete an account and why terms matter',
    ],
    grammar: {
      explanation: 'Privacy talk uses "who can see ...?" questions and modals like can and should: "Who can see my posts?", "Only my friends can see them". Use "I do not share ..." for refusals: "I do not share my location with apps". The terms and conditions are the rules you accept when you install an app, so read them before you click agree. If you stop using a service, you can delete your account, and the company should remove your data after some time.',
      explanationAr: 'حديث الخصوصية يستخدم أسئلة Who can see ...؟ وأفعال القدرة like can وshould: Who can see my posts؟ وOnly my friends can see them. ونستخدم I do not share ... للرفض: I do not share my location with apps. والشروط والأحكام هي القواعد التي توافق عليها عند تثبيت تطبيق، فاقرأها قبل أن تنقر على موافق. وإذا توقفت عن استخدام خدمة فيمكنك حذف حسابك، وينبغي للشركة أن تحذف بياناتك بعد فترة.',
      examples: [
        { en: 'Check your privacy settings once a month.', ar: 'تحقق من إعدادات الخصوصية مرة كل شهر.' },
        { en: 'I do not share my data with strangers.', ar: 'لا أشارك بياناتي مع الغرباء.' },
        { en: 'Delete your account if you stop using it.', ar: 'احذف حسابك إذا توقفت عن استخدامه.' },
      ],
    },
    vocabulary: [
      { word: 'privacy', meaningAr: 'الخصوصية', example: 'Privacy is important online.', ipa: 'ˈprɪvəsi' },
      { word: 'settings', meaningAr: 'الإعدادات', example: 'I changed my privacy settings.' },
      { word: 'personal data', meaningAr: 'البيانات الشخصية', example: 'Apps collect personal data.' },
      { word: 'terms', meaningAr: 'الشروط والأحكام', example: 'Did you read the terms?' },
      { word: 'delete', meaningAr: 'يحذف', example: 'He deleted his account last month.' },
      { word: 'account', meaningAr: 'حساب', example: 'How do I delete my account?' },
      { word: 'public', meaningAr: 'عام / للجميع', example: 'Her profile is public.' },
      { word: 'private', meaningAr: 'خاص', example: 'My photos are private.' },
      { word: 'share', meaningAr: 'يشارك', example: 'I never share my location.' },
      { word: 'location', meaningAr: 'الموقع الجغرافي', example: 'Turn off your location.' },
      { word: 'permission', meaningAr: 'إذن / موافقة', example: 'Ask for permission before you tag me.' },
      { word: 'follower', meaningAr: 'متابع', example: 'She has a thousand followers.' },
    ],
    scenario: [
      { en: 'I changed my privacy settings yesterday.', ar: 'غيّرت إعدادات الخصوصية أمس.', d: 1 },
      { en: 'Who can see my posts now?', ar: 'من يمكنه رؤية منشوراتي الآن؟', d: 1 },
      { en: 'Only my friends can see them.', ar: 'أصدقائي فقط يمكنهم رؤيتها.', d: 1 },
      { en: 'Did you read the terms and conditions?', ar: 'هل قرأت الشروط والأحكام؟', d: 1 },
      { en: 'They are long, but they are important.', ar: 'إنها طويلة، لكنها مهمة.', d: 1 },
      { en: 'I never share my location with apps.', ar: 'لا أشارك موقعي مع التطبيقات أبدا.', d: 1 },
      { en: 'Some apps sell your data to companies.', ar: 'بعض التطبيقات تبيع بياناتك للشركات.', d: 2 },
      { en: 'That is why my photos are private, not public.', ar: 'لهذا صوري خاصة، وليست عامة.', d: 2 },
      { en: 'Please ask for my permission before you tag me.', ar: 'من فضلك اطلب إذني قبل أن تضع لي وسما.', d: 2 },
      { en: 'He deleted his account last month.', ar: 'حذف حسابه الشهر الماضي.', d: 2 },
      { en: 'How do I delete my account?', ar: 'كيف أحذف حسابي؟', d: 2 },
      { en: 'Go to settings, then choose delete account.', ar: 'اذهب إلى الإعدادات، ثم اختر حذف الحساب.', d: 2 },
      { en: 'You should check your settings every few months.', ar: 'يجب أن تتحقق من إعداداتك كل بضعة أشهر.', d: 2 },
      { en: 'The app does not work without my consent.', ar: 'التطبيق لا يعمل بدون موافقتي.', d: 2 },
      { en: 'Have you ever read a privacy policy to the end?', ar: 'هل قرأت يوما سياسة خصوصية حتى النهاية؟', d: 3 },
      { en: 'Honestly, never, but I will start today.', ar: 'بصراحة أبدا، لكنني سأبدأ اليوم.', d: 3 },
      { en: 'They removed my post without any warning.', ar: 'أزالوا منشوري بدون أي تحذير.', d: 3 },
      { en: 'If an app asks for too much data, do not install it.', ar: 'إذا طلب تطبيق بيانات كثيرة جدا، فلا تثبته.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Who can see my {N}?', arTmpl: 'من يمكنه رؤية {N_ar}؟',
        slots: {
          N: [
            { en: 'posts', ar: 'منشوراتي' }, { en: 'photos', ar: 'صوري' },
            { en: 'profile', ar: 'ملفي الشخصي' }, { en: 'stories', ar: 'قصصي' },
            { en: 'phone number', ar: 'رقم هاتفي' }, { en: 'friends list', ar: 'قائمة أصدقائي' },
          ],
        },
        tags: ['privacy', 'questions'], d: 1, limit: 6,
      },
      {
        tmpl: '{P} can see my posts.', arTmpl: '{P_ar}.',
        slots: {
          P: [
            { en: 'Everyone', ar: 'الجميع يمكنه رؤية منشوراتي' },
            { en: 'Only my friends', ar: 'أصدقائي فقط يمكنهم رؤية منشوراتي' },
            { en: 'Only my family', ar: 'عائلتي فقط يمكنها رؤية منشوراتي' },
            { en: 'My followers', ar: 'متابعيّ فقط يمكنهم رؤية منشوراتي' },
            { en: 'No one', ar: 'لا أحد يمكنه رؤية منشوراتي' },
          ],
        },
        tags: ['privacy'], d: 1, limit: 5,
      },
      {
        tmpl: 'I do not share my {D} with {W}.', arTmpl: 'لا أشارك {D_ar} مع {W_ar}.',
        slots: {
          D: [
            { en: 'personal data', ar: 'بياناتي الشخصية' }, { en: 'location', ar: 'موقعي' },
            { en: 'photos', ar: 'صوري' }, { en: 'phone number', ar: 'رقم هاتفي' },
            { en: 'real name', ar: 'اسمي الحقيقي' },
          ],
          W: [
            { en: 'anyone', ar: 'أحد' }, { en: 'strangers', ar: 'الغرباء' },
            { en: 'other apps', ar: 'تطبيقات أخرى' }, { en: 'companies', ar: 'الشركات' },
          ],
        },
        tags: ['privacy', 'negative'], d: 2, limit: 20,
      },
      {
        tmpl: 'Read the terms before you {V}.', arTmpl: 'اقرأ الشروط قبل أن {V_ar}.',
        slots: {
          V: [
            { en: 'accept', ar: 'توافق' }, { en: 'install', ar: 'تثبّت' },
            { en: 'sign up', ar: 'تسجّل' }, { en: 'download', ar: 'تحمّل' },
            { en: 'click agree', ar: 'تنقر على موافق' },
          ],
        },
        tags: ['privacy', 'imperatives'], d: 2, limit: 5,
      },
      {
        tmpl: 'You should check your {S} regularly.', arTmpl: 'يجب أن تتحقق من {S_ar} بانتظام.',
        slots: {
          S: [
            { en: 'privacy settings', ar: 'إعدادات الخصوصية' }, { en: 'app permissions', ar: 'أذونات التطبيق' },
            { en: 'account security', ar: 'أمان حسابك' }, { en: 'linked accounts', ar: 'الحسابات المرتبطة' },
            { en: 'saved passwords', ar: 'كلمات المرور المحفوظة' },
          ],
        },
        tags: ['privacy', 'modals'], d: 2, limit: 5,
      },
    ],
    fills: [
      { en: 'I changed my privacy settings yesterday.', ar: 'غيّرت إعدادات الخصوصية أمس.', word: 'privacy', hint: 'الخصوصية' },
      { en: 'Who can see my posts now?', ar: 'من يمكنه رؤية منشوراتي الآن؟', word: 'posts', hint: 'منشورات' },
      { en: 'Did you read the terms and conditions?', ar: 'هل قرأت الشروط والأحكام؟', word: 'terms', hint: 'الشروط' },
      { en: 'Some apps sell your data to companies.', ar: 'بعض التطبيقات تبيع بياناتك للشركات.', word: 'data', hint: 'بيانات' },
      { en: 'Please ask for my permission before you tag me.', ar: 'من فضلك اطلب إذني قبل أن تضع لي وسما.', word: 'permission', hint: 'إذن' },
      { en: 'He deleted his account last month.', ar: 'حذف حسابه الشهر الماضي.', word: 'deleted', hint: 'حذف' },
      { en: 'That is why my photos are private, not public.', ar: 'لهذا صوري خاصة، وليست عامة.', word: 'private', hint: 'خاص' },
      { en: 'Go to settings, then choose delete account.', ar: 'اذهب إلى الإعدادات، ثم اختر حذف الحساب.', word: 'settings', hint: 'الإعدادات' },
    ],
    orders: [
      { en: 'Who can see my posts now?', ar: 'من يمكنه رؤية منشوراتي الآن؟' },
      { en: 'I changed my privacy settings yesterday.', ar: 'غيّرت إعدادات الخصوصية أمس.' },
      { en: 'Some apps sell your data to companies.', ar: 'بعض التطبيقات تبيع بياناتك للشركات.' },
      { en: 'He deleted his account last month.', ar: 'حذف حسابه الشهر الماضي.' },
      { en: 'If an app asks for too much data, do not install it.', ar: 'إذا طلب تطبيق بيانات كثيرة جدا، فلا تثبته.' },
      { en: 'You should check your settings every few months.', ar: 'يجب أن تتحقق من إعداداتك كل بضعة أشهر.' },
    ],
    mc: [
      { question: 'Who can see your posts when your account is private?', options: ['Only people you approve', 'Everyone on the internet', 'All companies', 'No one, not even you'], answerIndex: 0, ar: 'من يرى منشوراتك عندما يكون حسابك خاصا؟' },
      { question: 'What are the terms and conditions?', options: ['The rules you accept when you use an app', 'A list of your friends', 'A kind of password', 'A phone bill'], answerIndex: 0, ar: 'ما هي الشروط والأحكام؟' },
      { question: 'You stop using an app. What is the safe final step?', options: ['Delete your account', 'Post more photos', 'Share your location', 'Buy a new phone'], answerIndex: 0, ar: 'توقفت عن استخدام تطبيق، ما الخطوة الأخيرة الآمنة؟' },
      { question: 'An app wants your contacts, photos and location. You should:', options: ['think: does it really need all this data?', 'accept quickly', 'send your bank details too', 'turn off your screen forever'], answerIndex: 0, ar: 'تطبيق يريد جهات اتصالك وصورك وموقعك، فيجب أن:' },
    ],
  },
];
