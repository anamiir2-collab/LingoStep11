/* ============================================================
   v2 section data — s09-b2.js
   Education & Digital Skills · lessons 207–209
   (Email and Social Media · Video Calls · Technical Support)
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 207 — Email and Social Media ================= */
  {
    num: 207,
    tags: ['email', 'social-media'],
    objectives: [
      'Check your inbox and reply to personal messages',
      'Post photos and like or comment on posts',
      'Follow pages and send things with will',
    ],
    grammar: {
      explanation: 'Email and social media talk uses three simple tenses. Use the present simple for habits: "I check my inbox every morning", "Do you follow your friends online?". Use the past simple for finished actions: "She posted a photo from the beach", "He did not reply to my message". Use will for future actions: "I will send the photos tonight". Polite requests start with please: "Please reply to the message today". Remember: you reply to a message, and you comment on a post.',
      explanationAr: 'حديث البريد الإلكتروني ووسائل التواصل يستخدم ثلاثة أزمنة بسيطة. استخدم المضارع البسيط للعادات: I check my inbox every morning، Do you follow your friends online؟ واستخدم الماضي البسيط للأحداث المنتهية: She posted a photo from the beach، He did not reply to my message. واستخدم will للمستقبل: I will send the photos tonight. وتبدأ الطلبات المهذبة بـ please: Please reply to the message today. وتذكر: ترد على رسالة reply to، وتعلق على منشور comment on.',
      examples: [
        { en: 'I check my inbox every morning.', ar: 'أتفقد صندوق الوارد كل صباح.' },
        { en: 'She posted a photo from the beach.', ar: 'نشرت صورة من الشاطئ.' },
        { en: 'I will send the photos tonight.', ar: 'سأرسل الصور الليلة.' },
      ],
    },
    vocabulary: [
      { word: 'inbox', meaningAr: 'صندوق الوارد', example: 'I check my inbox every morning.' },
      { word: 'reply', meaningAr: 'يرد', example: 'Please reply to the message today.' },
      { word: 'message', meaningAr: 'رسالة', example: 'I have three new messages.' },
      { word: 'post', meaningAr: 'ينشر / منشور', example: 'She posted a photo from the beach.' },
      { word: 'photo', meaningAr: 'صورة', example: 'I liked the photo.' },
      { word: 'like', meaningAr: 'يضع إعجابا / يحب', example: 'Did you like the photo?' },
      { word: 'comment', meaningAr: 'تعليق / يعلق', example: 'I wrote a comment on her post.' },
      { word: 'follow', meaningAr: 'يتابع', example: 'Do you follow your friends online?' },
      { word: 'share', meaningAr: 'يشارك', example: 'She will share the album with us.' },
      { word: 'send', meaningAr: 'يرسل', example: 'I will send the photos tonight.' },
      { word: 'delete', meaningAr: 'يحذف', example: 'I deleted the old messages.' },
      { word: 'link', meaningAr: 'رابط', example: 'Please send me the link.' },
    ],
    scenario: [
      { en: 'I check my inbox every morning.', ar: 'أتفقد صندوق الوارد كل صباح.', d: 1 },
      { en: 'I have three new messages.', ar: 'لدي ثلاث رسائل جديدة.', d: 1 },
      { en: 'Please reply to the message today.', ar: 'رد على الرسالة اليوم من فضلك.', d: 1 },
      { en: 'She posted a photo from the beach.', ar: 'نشرت صورة من الشاطئ.', d: 1 },
      { en: 'I liked the photo and wrote a comment.', ar: 'أعجبتني الصورة وكتبت تعليقا.', d: 1 },
      { en: 'My brother follows many funny pages.', ar: 'يتابع أخي صفحات مضحكة كثيرة.', d: 1 },
      { en: 'Do you follow your friends online?', ar: 'هل تتابع أصدقاءك على الإنترنت؟', d: 1 },
      { en: 'Yes, I follow them every day.', ar: 'نعم، أتابعهم كل يوم.', d: 1 },
      { en: 'Do not share your private photos.', ar: 'لا تشارك صورك الخاصة.', d: 2 },
      { en: 'I will send the photos tonight.', ar: 'سأرسل الصور الليلة.', d: 2 },
      { en: 'He did not reply to my message.', ar: 'لم يرد على رسالتي.', d: 2 },
      { en: 'When did you post the video?', ar: 'متى نشرت الفيديو؟', d: 2 },
      { en: 'I deleted the old messages.', ar: 'حذفت الرسائل القديمة.', d: 2 },
      { en: 'She will share the album with us.', ar: 'ستشارك الألبوم معنا.', d: 3 },
      { en: 'My inbox is full of advertisements.', ar: 'صندوق الوارد ممتلئ بالإعلانات.', d: 3 },
      { en: 'Please send me the link, not the photo.', ar: 'أرسل لي الرابط من فضلك، لا الصورة.', d: 3 },
    ],
    patterns: [
      {
        tmpl: '{S} {REPLY} to the message {T}.', arTmpl: '{S_ar} {REPLY_ar} على الرسالة {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          REPLY: (x) => [{ en: (x.S.agr === 'he' || x.S.agr === 'she') ? 'replies' : 'reply', ar: { I: 'أرد', you: 'ترد', he: 'يرد', she: 'ترد', we: 'نرد', they: 'يردون' }[x.S.agr] }],
          T: [
            { en: 'every day', ar: 'كل يوم' }, { en: 'in the evening', ar: 'في المساء' },
            { en: 'quickly', ar: 'بسرعة' }, { en: 'before dinner', ar: 'قبل العشاء' },
          ],
        },
        tags: ['email', 'present-simple'], d: 1, limit: 12,
      },
      {
        tmpl: 'Did you like the {N}?', arTmpl: 'هل أعجبك {N_ar}؟',
        slots: {
          N: [
            { en: 'photo', ar: 'الصورة' }, { en: 'video', ar: 'الفيديو' },
            { en: 'post', ar: 'المنشور' }, { en: 'new story', ar: 'القصة الجديدة' },
          ],
        },
        tags: ['social-media', 'past-simple'], d: 1, limit: 4,
      },
      {
        tmpl: 'I {V} a photo {WHERE}.', arTmpl: '{V_ar} صورة {WHERE_ar}.',
        slots: {
          V: [
            { en: 'posted', ar: 'نشرت' }, { en: 'shared', ar: 'شاركت' },
            { en: 'sent', ar: 'أرسلت' }, { en: 'deleted', ar: 'حذفت' },
          ],
          WHERE: [
            { en: 'from the trip', ar: 'من الرحلة' }, { en: 'from the party', ar: 'من الحفلة' },
            { en: 'on my page', ar: 'على صفحتي' }, { en: 'in the group', ar: 'في المجموعة' },
          ],
        },
        tags: ['social-media', 'past-simple'], d: 2, limit: 12,
      },
      {
        tmpl: '{S} {FOLLOW} {N} {T}.', arTmpl: '{S_ar} {FOLLOW_ar} {N_ar} {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          FOLLOW: (x) => [{ en: (x.S.agr === 'he' || x.S.agr === 'she') ? 'follows' : 'follow', ar: { I: 'أتابع', you: 'تتابع', he: 'يتابع', she: 'تتابع', we: 'نتابع', they: 'يتابعون' }[x.S.agr] }],
          N: [
            { en: 'funny pages', ar: 'صفحات مضحكة' }, { en: 'news accounts', ar: 'حسابات أخبار' },
            { en: 'sports teams', ar: 'فرقا رياضية' }, { en: 'cooking pages', ar: 'صفحات طبخ' },
          ],
          T: [
            { en: 'every day', ar: 'كل يوم' }, { en: 'online', ar: 'على الإنترنت' },
            { en: 'too', ar: 'أيضا' },
          ],
        },
        tags: ['social-media', 'present-simple'], d: 2, limit: 12,
      },
    ],
    fills: [
      { en: 'I check my inbox every morning.', ar: 'أتفقد صندوق الوارد كل صباح.', word: 'inbox' },
      { en: 'Please reply to the message today.', ar: 'رد على الرسالة اليوم من فضلك.', word: 'reply' },
      { en: 'She posted a photo from the beach.', ar: 'نشرت صورة من الشاطئ.', word: 'posted' },
      { en: 'I liked the photo and wrote a comment.', ar: 'أعجبتني الصورة وكتبت تعليقا.', word: 'comment' },
      { en: 'Do you follow your friends online?', ar: 'هل تتابع أصدقاءك على الإنترنت؟', word: 'follow' },
      { en: 'I will send the photos tonight.', ar: 'سأرسل الصور الليلة.', word: 'send' },
      { en: 'He did not reply to my message.', ar: 'لم يرد على رسالتي.', word: 'message' },
      { en: 'My inbox is full of advertisements.', ar: 'صندوق الوارد ممتلئ بالإعلانات.', word: 'advertisements', hint: 'إعلانات' },
    ],
    orders: [
      { en: 'I check my inbox every morning.', ar: 'أتفقد صندوق الوارد كل صباح.' },
      { en: 'Please reply to the message today.', ar: 'رد على الرسالة اليوم من فضلك.' },
      { en: 'She posted a photo from the beach.', ar: 'نشرت صورة من الشاطئ.' },
      { en: 'Do you follow your friends online?', ar: 'هل تتابع أصدقاءك على الإنترنت؟' },
      { en: 'I will send the photos tonight.', ar: 'سأرسل الصور الليلة.' },
      { en: 'When did you post the video?', ar: 'متى نشرت الفيديو؟' },
    ],
    mc: [
      { question: 'Where do new emails arrive?', options: ['In the inbox', 'In the camera', 'In the battery', 'In the router'], answerIndex: 0, ar: 'أين تصل الرسائل الجديدة؟' },
      { question: 'You want to answer a message. You:', options: ['reply to it', 'delete it', 'charge it', 'restart it'], answerIndex: 0, ar: 'تريد أن تجيب على رسالة، فأنت:' },
      { question: 'You like a page and want its posts. You:', options: ['follow it', 'hang up', 'unplug it', 'lock it'], answerIndex: 0, ar: 'تعجبك صفحة وتريد منشوراتها، فأنت:' },
      { question: '"Like and comment" means:', options: ['ضع إعجابا واكتب تعليقا', 'احذف الرسالة', 'أطفئ الجهاز', 'غيّر كلمة المرور'], answerIndex: 0, ar: 'ما معنى Like and comment؟' },
      { question: 'You received a message. First you:', options: ['open your inbox', 'buy a tablet', 'charge the router', 'crack the screen'], answerIndex: 0, ar: 'وصلتك رسالة، فأولا:' },
    ],
  },

  /* ================= lesson 208 — Video Calls ================= */
  {
    num: 208,
    tags: ['video-calls', 'communication'],
    objectives: [
      'Check picture and sound during a video call',
      'Report common call problems like mute and freezing',
      'Make polite requests and promises with will',
    ],
    grammar: {
      explanation: 'Video calls need short, clear sentences. Ask about picture and sound: "Can you see me now?", "Is my audio clear?". Tell someone about a problem with be: "You are on mute", "The camera does not work". Use will for what you will do next: "I will turn on the microphone", "I will call you back". Use the past simple for what happened: "The call dropped again", "I joined the video call late". Polite requests start with please: "Please turn on your camera".',
      explanationAr: 'تحتاج مكالمات الفيديو إلى جمل قصيرة واضحة. اسأل عن الصورة والصوت: Can you see me now؟ وIs my audio clear؟ وأخبر عن المشكلة بفعل be: You are on mute، The camera does not work. واستخدم will لما ستفعله بعد قليل: I will turn on the microphone، I will call you back. واستخدم الماضي البسيط لما حدث: The call dropped again، I joined the video call late. وتبدأ الطلبات المهذبة بـ please: Please turn on your camera.',
      examples: [
        { en: 'Can you see me now?', ar: 'هل تراني الآن؟' },
        { en: 'You are on mute.', ar: 'أنت مكتوم الصوت.' },
        { en: 'The call dropped again.', ar: 'انقطعت المكالمة مرة أخرى.' },
      ],
    },
    vocabulary: [
      { word: 'video call', meaningAr: 'مكالمة فيديو', example: 'I joined the video call late.' },
      { word: 'camera', meaningAr: 'كاميرا', example: 'Please turn on your camera.' },
      { word: 'microphone', meaningAr: 'ميكروفون', example: 'I will turn on the microphone.' },
      { word: 'mute', meaningAr: 'كتم الصوت / مكتوم', example: 'You are on mute.' },
      { word: 'unmute', meaningAr: 'يزيل كتم الصوت', example: 'Please unmute yourself.' },
      { word: 'join', meaningAr: 'ينضم', example: 'She will join us at six.' },
      { word: 'screen', meaningAr: 'شاشة', example: 'The screen froze for a moment.' },
      { word: 'freeze', meaningAr: 'يتجمد', example: 'The screen froze for a moment.' },
      { word: 'hang up', meaningAr: 'يغلق المكالمة', example: 'Do not hang up yet.' },
      { word: 'drop', meaningAr: 'ينقطع (للمكالمة)', example: 'The call dropped again.' },
      { word: 'invite', meaningAr: 'يدعو', example: 'Did you invite grandma to the call?' },
      { word: 'audio', meaningAr: 'الصوت', example: 'Is my audio clear now?' },
    ],
    scenario: [
      { en: 'Can you see me now?', ar: 'هل تراني الآن؟', d: 1 },
      { en: 'Yes, I can see you clearly.', ar: 'نعم، أراك بوضوح.', d: 1 },
      { en: 'You are on mute.', ar: 'أنت مكتوم الصوت.', d: 1 },
      { en: 'One moment, I will turn on the microphone.', ar: 'لحظة واحدة، سأشغّل الميكروفون.', d: 1 },
      { en: 'Please turn on your camera.', ar: 'شغّل الكاميرا من فضلك.', d: 1 },
      { en: 'I joined the video call late.', ar: 'انضممت إلى مكالمة الفيديو متأخرا.', d: 1 },
      { en: 'Is my audio clear now?', ar: 'هل صوتي واضح الآن؟', d: 2 },
      { en: 'The screen froze for a moment.', ar: 'تجمدت الشاشة للحظة.', d: 2 },
      { en: 'Do not hang up yet.', ar: 'لا تغلق المكالمة بعد.', d: 2 },
      { en: 'The call dropped again.', ar: 'انقطعت المكالمة مرة أخرى.', d: 2 },
      { en: 'I will call you back on the app.', ar: 'سأعاود الاتصال بك عبر التطبيق.', d: 2 },
      { en: 'Did you invite grandma to the call?', ar: 'هل دعوت الجدة إلى المكالمة؟', d: 2 },
      { en: 'Yes, she will join us at six.', ar: 'نعم، ستنضم إلينا في الساعة السادسة.', d: 2 },
      { en: 'We see our cousins on video calls every week.', ar: 'نرى أبناء عمومتنا في مكالمات الفيديو كل أسبوع.', d: 3 },
      { en: 'The camera does not work today.', ar: 'الكاميرا لا تعمل اليوم.', d: 3 },
      { en: 'Please unmute yourself and speak louder.', ar: 'أزل كتم الصوت وتحدث بصوت أعلى من فضلك.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Can you {V} me {ADV}?', arTmpl: 'هل {V_ar} {ADV_ar}؟',
        slots: {
          V: [
            { en: 'see', ar: 'تراني' }, { en: 'hear', ar: 'تسمعني' },
          ],
          ADV: [
            { en: 'clearly', ar: 'بوضوح' }, { en: 'again', ar: 'مرة أخرى' },
            { en: 'on this app', ar: 'على هذا التطبيق' },
          ],
        },
        tags: ['video-calls', 'questions'], d: 1, limit: 6,
      },
      {
        tmpl: 'I will {V} the {N} {T}.', arTmpl: 'س{V_ar} {N_ar} {T_ar}.',
        slots: {
          V: [
            { en: 'turn on', ar: 'أشغّل' }, { en: 'turn off', ar: 'أطفئ' },
            { en: 'share', ar: 'أشارك' }, { en: 'fix', ar: 'أصلح' },
          ],
          N: [
            { en: 'camera', ar: 'الكاميرا' }, { en: 'microphone', ar: 'الميكروفون' },
            { en: 'screen', ar: 'الشاشة' },
          ],
          T: [
            { en: 'now', ar: 'الآن' }, { en: 'in a moment', ar: 'بعد لحظة' },
            { en: 'before the call', ar: 'قبل المكالمة' },
          ],
        },
        tags: ['video-calls', 'future'], d: 2, limit: 12,
      },
      {
        tmpl: '{S} {JOIN} the video call {T}.', arTmpl: '{S_ar} {JOIN_ar} إلى مكالمة الفيديو {T_ar}.',
        slots: {
          S: B.PRONOUNS,
          JOIN: (x) => [{ en: B.enPresent('join', x.S.agr), ar: B.arPresent('join', x.S.agr) }],
          T: [
            { en: 'at six', ar: 'في الساعة السادسة' }, { en: 'tomorrow', ar: 'غدا' },
            { en: 'from home', ar: 'من المنزل' }, { en: 'in a minute', ar: 'بعد دقيقة' },
          ],
        },
        tags: ['video-calls', 'present-simple'], d: 2, limit: 12,
      },
      {
        tmpl: 'The call {V} {T}.', arTmpl: '{V_ar} المكالمة {T_ar}.',
        slots: {
          V: [
            { en: 'dropped', ar: 'انقطعت' }, { en: 'froze', ar: 'تجمدت' },
            { en: 'ended', ar: 'انتهت' },
          ],
          T: [
            { en: 'after five minutes', ar: 'بعد خمس دقائق' }, { en: 'in the middle', ar: 'في المنتصف' },
            { en: 'last night', ar: 'البارحة' }, { en: 'during the lesson', ar: 'أثناء الدرس' },
          ],
        },
        tags: ['video-calls', 'past-simple'], d: 2, limit: 8,
      },
    ],
    fills: [
      { en: 'Can you see me now?', ar: 'هل تراني الآن؟', word: 'see' },
      { en: 'You are on mute.', ar: 'أنت مكتوم الصوت.', word: 'mute' },
      { en: 'Please turn on your camera.', ar: 'شغّل الكاميرا من فضلك.', word: 'camera' },
      { en: 'The call dropped again.', ar: 'انقطعت المكالمة مرة أخرى.', word: 'dropped' },
      { en: 'I joined the video call late.', ar: 'انضممت إلى مكالمة الفيديو متأخرا.', word: 'joined' },
      { en: 'One moment, I will turn on the microphone.', ar: 'لحظة واحدة، سأشغّل الميكروفون.', word: 'microphone' },
      { en: 'Do not hang up yet.', ar: 'لا تغلق المكالمة بعد.', word: 'hang' },
      { en: 'Is my audio clear now?', ar: 'هل صوتي واضح الآن؟', word: 'audio' },
    ],
    orders: [
      { en: 'Can you see me now?', ar: 'هل تراني الآن؟' },
      { en: 'You are on mute.', ar: 'أنت مكتوم الصوت.' },
      { en: 'Please turn on your camera.', ar: 'شغّل الكاميرا من فضلك.' },
      { en: 'The call dropped again.', ar: 'انقطعت المكالمة مرة أخرى.' },
      { en: 'I joined the video call late.', ar: 'انضممت إلى مكالمة الفيديو متأخرا.' },
      { en: 'Did you invite grandma to the call?', ar: 'هل دعوت الجدة إلى المكالمة؟' },
    ],
    mc: [
      { question: 'People cannot hear you. You are:', options: ['on mute', 'on camera', 'on holiday', 'on time'], answerIndex: 0, ar: 'لا يستطيع الناس سماعك، فأنت:' },
      { question: 'How do people see you in a video call?', options: ['Through the camera', 'Through the charger', 'Through the router', 'Through the battery'], answerIndex: 0, ar: 'كيف يراك الناس في مكالمة الفيديو؟' },
      { question: '"The call dropped" means:', options: ['انقطعت المكالمة', 'طالت المكالمة', 'سُجلت المكالمة', 'بدأت المكالمة'], answerIndex: 0, ar: 'ما معنى The call dropped؟' },
      { question: 'The screen froze. A good first step is:', options: ['rejoin the call', 'post a photo', 'open the inbox', 'buy a keyboard'], answerIndex: 0, ar: 'تجميدت الشاشة، فالخطوة الأولى الجيدة:' },
      { question: 'You want to speak on the call. You:', options: ['unmute yourself', 'hang up', 'drop the call', 'crack the screen'], answerIndex: 0, ar: 'تريد أن تتكلم في المكالمة، فأنت:' },
    ],
  },

  /* ================= lesson 209 — Technical Support ================= */
  {
    num: 209,
    tags: ['tech-support', 'problems'],
    objectives: [
      'Report a device problem to technical support',
      'Ask and answer questions with the present perfect',
      'Talk about warranty, repair and replacement',
    ],
    grammar: {
      explanation: 'Technical support talks about problems and solutions. Describe the problem: "My laptop will not start", "It still does not work". Ask what the customer tried with the present perfect: "Have you tried restarting it?", "Have you updated the system yet?". Use will for the next step: "The technician will check the device tomorrow". Use if for conditions: "If the screen is faulty, they will replace it". The warranty is the promise that repairs are free: "The warranty covers it".',
      explanationAr: 'حديث الدعم التقني يدور حول المشكلات والحلول. صف المشكلة: My laptop will not start، It still does not work. واسأل عما جرّبه المستخدم بالمضارع التام: Have you tried restarting it؟ واستخدم will للخطوة التالية: The technician will check the device tomorrow. واستخدم if للشروط: If the screen is faulty, they will replace it. والضمان وعد بأن يكون الإصلاح مجانيا: The warranty covers it.',
      examples: [
        { en: 'My laptop will not start.', ar: 'حاسوبي المحمول لا يشتغل.' },
        { en: 'Have you tried restarting it?', ar: 'هل جربت إعادة تشغيله؟' },
        { en: 'The warranty covers the repair.', ar: 'الضمان يشمل الإصلاح.' },
      ],
    },
    vocabulary: [
      { word: 'support', meaningAr: 'دعم', example: 'I called the support center this morning.' },
      { word: 'repair', meaningAr: 'إصلاح', example: 'You should send it for repair.' },
      { word: 'warranty', meaningAr: 'ضمان', example: 'The warranty covers the repair.' },
      { word: 'restart', meaningAr: 'يعيد التشغيل', example: 'Have you tried restarting it?' },
      { word: 'issue', meaningAr: 'مشكلة / مسألة', example: 'Please describe the issue clearly.' },
      { word: 'faulty', meaningAr: 'معطل / به عطل', example: 'The screen is faulty.' },
      { word: 'fix', meaningAr: 'يصلح', example: 'They could not fix my old printer.' },
      { word: 'replace', meaningAr: 'يستبدل', example: 'They will replace the battery.' },
      { word: 'backup', meaningAr: 'نسخة احتياطية', example: 'Did you save a backup of your files?' },
      { word: 'technician', meaningAr: 'فني', example: 'The technician will check the device.' },
      { word: 'update', meaningAr: 'تحديث / يحدّث', example: 'You may need to update the system.' },
      { word: 'device', meaningAr: 'جهاز', example: 'The technician will check the device tomorrow.' },
    ],
    scenario: [
      { en: 'My laptop will not start.', ar: 'حاسوبي المحمول لا يشتغل.', d: 1 },
      { en: 'Have you tried restarting it?', ar: 'هل جربت إعادة تشغيله؟', d: 1 },
      { en: 'Yes, I have restarted it twice.', ar: 'نعم، أعدت تشغيله مرتين.', d: 1 },
      { en: 'It still does not work.', ar: 'ما زال لا يعمل.', d: 1 },
      { en: 'I have had this laptop for two years.', ar: 'أملك هذا الحاسوب المحمول منذ عامين.', d: 1 },
      { en: 'The warranty covers it, so the repair is free.', ar: 'الضمان يشمله، لذا الإصلاح مجاني.', d: 2 },
      { en: 'If the screen is faulty, they will replace it.', ar: 'إذا كانت الشاشة معطلة، فسيستبدلونها.', d: 3 },
      { en: 'You should send it for repair.', ar: 'ينبغي أن ترسله للإصلاح.', d: 1 },
      { en: 'I called the support center this morning.', ar: 'اتصلت بمركز الدعم هذا الصباح.', d: 2 },
      { en: 'When will the technician check the device?', ar: 'متى سيفحص الفني الجهاز؟', d: 2 },
      { en: 'Did you save a backup of your files?', ar: 'هل حفظت نسخة احتياطية من ملفاتك؟', d: 2 },
      { en: 'No, I have not made a backup yet.', ar: 'لا، لم أعمل نسخة احتياطية بعد.', d: 2 },
      { en: 'If the problem continues, we will ask for a replacement.', ar: 'إذا استمرت المشكلة، سنطلب استبدالا.', d: 3 },
      { en: 'They could not fix my old printer.', ar: 'لم يستطيعوا إصلاح طابعتي القديمة.', d: 2 },
      { en: 'Please describe the issue clearly.', ar: 'صف المشكلة بوضوح من فضلك.', d: 2 },
      { en: 'You may need to update the system first.', ar: 'قد تحتاج إلى تحديث النظام أولا.', d: 3 },
      { en: 'We have not received a reply from the support team.', ar: 'لم نستلم ردا من فريق الدعم.', d: 3 },
    ],
    patterns: [
      {
        tmpl: 'Have you {PP} the {DEV} {T}?', arTmpl: 'هل {PP_ar} {DEV_ar} {T_ar}؟',
        slots: {
          PP: [
            { en: 'restarted', ar: 'أعدت تشغيل' }, { en: 'checked', ar: 'فحصت' },
            { en: 'updated', ar: 'حدّثت' },
          ],
          DEV: [
            { en: 'laptop', ar: 'الحاسوب المحمول' }, { en: 'printer', ar: 'الطابعة' },
            { en: 'router', ar: 'الراوتر' }, { en: 'tablet', ar: 'الجهاز اللوحي' },
          ],
          T: [
            { en: 'today', ar: 'اليوم' }, { en: 'this week', ar: 'هذا الأسبوع' },
            { en: 'yet', ar: 'بعد' },
          ],
        },
        tags: ['tech-support', 'present-perfect'], d: 2, limit: 12,
      },
      {
        tmpl: 'If the {PART} is faulty, they will {V} it.', arTmpl: 'إذا كانت {PART_ar} معطلة، {V_ar}ها.',
        slots: {
          PART: [
            { en: 'keyboard', ar: 'لوحة المفاتيح' }, { en: 'battery', ar: 'البطارية' },
            { en: 'camera', ar: 'الكاميرا' }, { en: 'mouse', ar: 'الفأرة' },
          ],
          V: [
            { en: 'replace', ar: 'سيستبدلون' }, { en: 'repair', ar: 'سيصلحون' },
            { en: 'check', ar: 'سيفحصون' },
          ],
        },
        tags: ['tech-support', 'conditional'], d: 3, limit: 12,
      },
      {
        tmpl: 'My {DEV} will not {V}.', arTmpl: '{DEV_ar} {V_ar}.',
        slots: {
          DEV: [
            { en: 'printer', ar: 'طابعتي', g: 'f' }, { en: 'tablet', ar: 'جهازي اللوحي', g: 'm' },
            { en: 'phone', ar: 'هاتفي', g: 'm' },
          ],
          V: (x) => [{ en: 'start', ar: x.DEV.g === 'f' ? 'لا تشتغل' : 'لا يشتغل' }],
        },
        tags: ['tech-support', 'problems'], d: 1, limit: 6,
      },
      {
        tmpl: 'The {N} needs {S}.', arTmpl: '{N_ar} إلى {S_ar}.',
        slots: {
          N: [
            { en: 'printer', ar: 'الطابعة تحتاج' }, { en: 'laptop', ar: 'الحاسوب المحمول يحتاج' },
          ],
          S: [
            { en: 'a repair', ar: 'إصلاح' }, { en: 'a new battery', ar: 'بطارية جديدة' },
            { en: 'a software update', ar: 'تحديث للنظام' }, { en: 'a good cleaning', ar: 'تنظيف جيد' },
          ],
        },
        tags: ['tech-support', 'problems'], d: 2, limit: 8,
      },
    ],
    fills: [
      { en: 'My laptop will not start.', ar: 'حاسوبي المحمول لا يشتغل.', word: 'start' },
      { en: 'Have you tried restarting it?', ar: 'هل جربت إعادة تشغيله؟', word: 'tried' },
      { en: 'The warranty covers it, so the repair is free.', ar: 'الضمان يشمله، لذا الإصلاح مجاني.', word: 'warranty' },
      { en: 'You should send it for repair.', ar: 'ينبغي أن ترسله للإصلاح.', word: 'repair' },
      { en: 'When will the technician check the device?', ar: 'متى سيفحص الفني الجهاز؟', word: 'technician' },
      { en: 'Please describe the issue clearly.', ar: 'صف المشكلة بوضوح من فضلك.', word: 'issue' },
      { en: 'Did you save a backup of your files?', ar: 'هل حفظت نسخة احتياطية من ملفاتك؟', word: 'backup' },
      { en: 'If the screen is faulty, they will replace it.', ar: 'إذا كانت الشاشة معطلة، فسيستبدلونها.', word: 'faulty' },
    ],
    orders: [
      { en: 'My laptop will not start.', ar: 'حاسوبي المحمول لا يشتغل.' },
      { en: 'Have you tried restarting it?', ar: 'هل جربت إعادة تشغيله؟' },
      { en: 'The warranty covers the repair.', ar: 'الضمان يشمل الإصلاح.' },
      { en: 'You should send it for repair.', ar: 'ينبغي أن ترسله للإصلاح.' },
      { en: 'When will the technician check the device?', ar: 'متى سيفحص الفني الجهاز؟' },
      { en: 'If the screen is faulty, they will replace it.', ar: 'إذا كانت الشاشة معطلة، فسيستبدلونها.' },
    ],
    mc: [
      { question: 'Your laptop will not start. What do you try first?', options: ['Restarting it', 'Buying a new one', 'Deleting your files', 'Changing the password'], answerIndex: 0, ar: 'حاسوبك لا يشتغل، ماذا تجرب أولا؟' },
      { question: 'The repair is free because:', options: ['the warranty covers it', 'the shop is close', 'the device is old', 'the screen is cracked'], answerIndex: 0, ar: 'الإصلاح مجاني لأن:' },
      { question: '"Send it for repair" means:', options: ['أرسله للإصلاح', 'أبيعه غدا', 'أشحنه الليلة', 'أحذف ملفاته'], answerIndex: 0, ar: 'ما معنى Send it for repair؟' },
      { question: 'Who fixes devices at the support center?', options: ['A technician', 'A pilot', 'A waiter', 'A driver'], answerIndex: 0, ar: 'من يصلح الأجهزة في مركز الدعم؟' },
      { question: 'Before you send a device for repair, you should:', options: ['save a backup', 'delete the warranty', 'break the screen', 'lose the receipt'], answerIndex: 0, ar: 'قبل أن ترسل جهازا للإصلاح، ينبغي أن:' },
    ],
  },
];
