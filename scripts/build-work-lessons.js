/* ============================================================
   build-work-lessons.js — add the missing operational work
   lessons (spec section 6-د: warehouse, inventory, quality,
   safety, data entry) as lesson-251 and lesson-252:
   - 55 exercises each (42 listen-and-type, 6 fill-blank,
     4 word-order, 3 multiple-choice)
   - MSA translations, practical full sentences
   - verifies global sentence uniqueness + vocab max-4 cap
     before writing, then registers both in the manifest
   Run: node scripts/build-work-lessons.js
   ============================================================ */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { normalizeForDup } from '../js/lesson-schema.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const lt = (en, ar, d = 1) => ({ type: 'listen-and-type', en, ar, difficulty: d });
const fb = (display, blankWord, en, ar, hint) => ({ type: 'fill-blank', display, blankWord, en, ar, difficulty: 2, ...(hint ? { hint } : {}) });
const wo = (en, ar, words, d = 2) => ({ type: 'word-order', en, ar, words, difficulty: d });
const mc = (question, options, answerIndex, ar, d = 2) => ({ type: 'multiple-choice', question, options, answerIndex, ar, difficulty: d });

/* ---------- lesson-251: Warehouse and Inventory ---------- */
const L251 = {
  id: 'lesson-251',
  title: 'Warehouse and Inventory',
  titleAr: 'المستودعات والمخزون',
  section: 'work-money',
  level: 'A2',
  estimatedMinutes: 14,
  objectives: [
    'Name common warehouse places, tools and goods',
    'Check quantity, weight and stock in simple sentences',
    'Receive and hand over deliveries politely',
  ],
  grammar: {
    explanation: 'Warehouse work uses short, direct sentences. Use the imperative for instructions: "Check the quantity", "Put the boxes on the shelf". Use the present simple for routines: "We pack the products every evening", "The warehouse opens at six". For problems, say what is wrong plainly: "The scale is broken", "The boxes are damaged", "The delivery is late". Numbers are everywhere in this job: "The weight is fifty kilograms", "We received fifty cartons".',
    explanationAr: 'يعتمد العمل في المستودع على جمل قصيرة ومباشرة. استخدم صيغة الأمر للتعليمات: Check the quantity أي تحقق من الكمية، وPut the boxes on the shelf أي ضع الصناديق على الرف. واستخدم المضارع البسيط للروتين: We pack the products every evening أي نغلّف المنتجات كل مساء، وThe warehouse opens at six أي يفتح المستودع في السادسة. ولوصف المشكلات قل ما هو خاطئ بوضوح: The scale is broken أي الميزان معطل، وThe boxes are damaged أي الصناديق تالفة، وThe delivery is late أي عملية التسليم متأخرة. والأرقام حاضرة في هذه المهنة دائمًا: The weight is fifty kilograms أي الوزن خمسون كيلوغرامًا.',
    examples: [
      { en: 'Please check the quantity.', ar: 'يُرجى التحقق من الكمية.' },
      { en: 'Put the boxes on the shelf.', ar: 'ضع الصناديق على الرف.' },
      { en: 'The delivery is late.', ar: 'عملية التسليم متأخرة.' },
    ],
  },
  vocabulary: [
    { word: 'warehouse', meaningAr: 'مستودع', example: 'I work in a warehouse.' },
    { word: 'inventory', meaningAr: 'جرد المخزون', example: 'The inventory starts on Monday.' },
    { word: 'stock', meaningAr: 'مخزون', example: 'The stock is low.' },
    { word: 'shelf', meaningAr: 'رف', example: 'Put the boxes on the shelf.' },
    { word: 'pallet', meaningAr: 'منصة نقل', example: 'I need a pallet for these boxes.' },
    { word: 'forklift', meaningAr: 'رافعة شوكية', example: 'Where is the forklift?' },
    { word: 'scale', meaningAr: 'ميزان', example: 'The scale is broken.' },
    { word: 'quantity', meaningAr: 'كمية', example: 'Please check the quantity.' },
    { word: 'weight', meaningAr: 'وزن', example: 'Please check the weight.' },
    { word: 'driver', meaningAr: 'سائق', example: 'The forklift driver is very careful.' },
    { word: 'carton', meaningAr: 'صندوق كبير', example: 'We received fifty cartons.' },
    { word: 'goods', meaningAr: 'بضائع', example: 'The goods are ready for delivery.' },
    { word: 'shipment', meaningAr: 'شحنة', example: 'The shipment arrived this morning.' },
  ],
  exercises: [
    lt('I work in a warehouse.', 'أعمل في مستودع.'),
    lt('The warehouse is very big.', 'المستودع كبير جدًا.'),
    lt('The warehouse opens at six.', 'يفتح المستودع في السادسة.'),
    lt('The shipment arrived this morning.', 'وصلت الشحنة هذا الصباح.'),
    lt('Please check the quantity.', 'يُرجى التحقق من الكمية.'),
    lt('Please check the weight.', 'يُرجى التحقق من الوزن.'),
    lt('We need more supplies.', 'نحتاج إلى مزيد من المستلزمات.'),
    lt('The delivery is late.', 'عملية التسليم متأخرة.'),
    lt('The delivery truck is at the gate.', 'شاحنة التسليم عند البوابة.', 2),
    lt('Sign the delivery note, please.', 'وقّع إشعار التسليم من فضلك.', 2),
    lt('The boxes are heavy.', 'الصناديق ثقيلة.'),
    lt('Put the boxes on the shelf.', 'ضع الصناديق على الرف.'),
    lt('The shelves are full.', 'الرفوف ممتلئة.'),
    lt('Where is the forklift?', 'أين الرافعة الشوكية؟'),
    lt('The forklift driver is very careful.', 'سائق الرافعة الشوكية حذر جدًا.', 2),
    lt('Move the pallet to section B.', 'انقل المنصة إلى القسم B.', 2),
    lt('I need a pallet for these boxes.', 'أحتاج منصة نقل لهذه الصناديق.'),
    lt('The scale is broken.', 'الميزان معطل.'),
    lt('Please weigh this box.', 'من فضلك زِن هذا الصندوق.', 2),
    lt('The weight is fifty kilograms.', 'الوزن خمسون كيلوغرامًا.', 2),
    lt('The stock is low.', 'المخزون منخفض.'),
    lt('The stock number is wrong.', 'رقم المخزون خاطئ.'),
    lt('The inventory starts on Monday.', 'يبدأ الجرد يوم الاثنين.'),
    lt('The inventory list is on the desk.', 'قائمة الجرد على المكتب.'),
    lt('Count the items carefully.', 'عدّ العناصر بعناية.'),
    lt('We received fifty cartons.', 'استلمنا خمسين صندوقًا كبيرًا.'),
    lt('The label is on the box.', 'الملصق على الصندوق.'),
    lt('The label is not clear.', 'الملصق غير واضح.'),
    lt('This aisle is for small items.', 'هذا الممر للعناصر الصغيرة.'),
    lt('The boxes are damaged.', 'الصناديق تالفة.'),
    lt('Two cartons are missing.', 'صندوقان كبيران مفقودان.', 2),
    lt('The goods are ready for delivery.', 'البضائع جاهزة للتسليم.'),
    lt('The storage area is clean.', 'منطقة التخزين نظيفة.'),
    lt('Where do I store this item?', 'أين أخزن هذا العنصر؟'),
    lt('Store the paint away from the sun.', 'اخزن الطلاء بعيدًا عن الشمس.', 2),
    lt('The temperature in the warehouse is high.', 'الحرارة في المستودع مرتفعة.', 2),
    lt('The loading door is open.', 'باب التحميل مفتوح.'),
    lt('Check the invoice against the order.', 'تحقق من الفاتورة مقابل الطلب.', 2),
    lt('The order number is on the box.', 'رقم الطلب على الصندوق.'),
    lt('We pack the products every evening.', 'نغلّف المنتجات كل مساء.'),
    lt('The packing area is behind the office.', 'منطقة التغليف خلف المكتب.'),
    lt('Our warehouse has twenty shelves.', 'مستودعنا فيه عشرون رفًا.', 2),
    fb('I work in a ___.', 'warehouse', 'I work in a warehouse.', 'أعمل في مستودع.', 'مكان العمل'),
    fb('Please check the ___.', 'quantity', 'Please check the quantity.', 'يُرجى التحقق من الكمية.', 'عدد'),
    fb('The ___ is broken.', 'scale', 'The scale is broken.', 'الميزان معطل.', 'أداة وزن'),
    fb('The ___ is low.', 'stock', 'The stock is low.', 'المخزون منخفض.', 'بضائع مخزنة'),
    fb('Count the items ___.', 'carefully', 'Count the items carefully.', 'عدّ العناصر بعناية.', 'بتركيز'),
    fb('The ___ is on the box.', 'label', 'The label is on the box.', 'الملصق على الصندوق.', 'بطاقة'),
    wo('The shipment arrived this morning.', 'وصلت الشحنة هذا الصباح.', ['this', 'The', 'shipment', 'morning.', 'arrived']),
    wo('The boxes are heavy.', 'الصناديق ثقيلة.', ['are', 'The', 'heavy.', 'boxes']),
    wo('Move the pallet to section B.', 'انقل المنصة إلى القسم B.', ['to', 'Move', 'pallet', 'B.', 'section', 'the']),
    wo('The delivery is late.', 'عملية التسليم متأخرة.', ['is', 'The', 'late.', 'delivery']),
    mc('Where do you check the weight of a box?', ['On the scale', 'In the meeting', 'On the computer'], 0, 'أين تتحقق من وزن الصندوق؟'),
    mc('What do you sign when you receive goods?', ['The delivery note', 'The price list', 'The calendar'], 0, 'ماذا توقع عند استلام البضائع؟'),
    mc('What moves heavy pallets in a warehouse?', ['A forklift', 'A telephone', 'A keyboard'], 0, 'ما ينقل المنصات الثقيلة في المستودع؟'),
  ],
};

/* ---------- lesson-252: Work Tasks, Quality and Safety ---------- */
const L252 = {
  id: 'lesson-252',
  title: 'Work Tasks, Quality and Safety',
  titleAr: 'المهام والجودة والسلامة في العمل',
  section: 'work-money',
  level: 'A2',
  estimatedMinutes: 14,
  objectives: [
    'Ask for help and report problems at work',
    'Enter data and check quality in simple English',
    'Follow and explain basic safety rules',
  ],
  grammar: {
    explanation: 'At work you often report states and ask for action. Report a problem with "is not working" or "is broken": "The machine is not working". Ask for action politely with "please": "Please enter the data carefully", "Please report the problem to the supervisor". Safety rules often use imperatives: "Follow the safety rules", "Wear your helmet at all times", "Report any accident immediately". Talk about time with "at + time" and "in + minutes": "I have a meeting at ten", "The meeting starts in five minutes".',
    explanationAr: 'في العمل كثيرًا ما تصف الحالة وتطلب إجراءً. أبلغ عن المشكلة بعبارة is not working أو is broken مثل: The machine is not working أي الآلة لا تعمل. واطلب الإجراء بأدب مع please مثل: Please enter the data carefully أي يُرجى إدخال البيانات بعناية، وPlease report the problem to the supervisor أي أبلغ المشرف بالمشكلة من فضلك. وقواعد السلامة تستخدم صيغة الأمر غالبًا: Follow the safety rules أي اتبع قواعد السلامة، وWear your helmet at all times أي ارتدِ خوذتك في كل الأوقات، وReport any accident immediately أي أبلغ عن أي حادث فورًا. وتحدث عن الوقت بـ at مع الساعة وin مع الدقائق: I have a meeting at ten أي لدي اجتماع في الساعة العاشرة، وThe meeting starts in five minutes أي يبدأ الاجتماع بعد خمس دقائق.',
    examples: [
      { en: 'I need help with this task.', ar: 'أحتاج إلى مساعدة في هذه المهمة.' },
      { en: 'The machine is not working.', ar: 'الآلة لا تعمل.' },
      { en: 'Wear your helmet at all times.', ar: 'ارتدِ خوذتك في كل الأوقات.' },
    ],
  },
  vocabulary: [
    { word: 'task', meaningAr: 'مهمة', example: 'I need help with this task.' },
    { word: 'machine', meaningAr: 'آلة', example: 'The machine is not working.' },
    { word: 'data', meaningAr: 'بيانات', example: 'Please enter the data carefully.' },
    { word: 'warning', meaningAr: 'تحذير', example: 'The warning sign is on the wall.' },
    { word: 'supervisor', meaningAr: 'مشرف', example: 'Please report the problem to the supervisor.' },
    { word: 'quality', meaningAr: 'جودة', example: 'The quality check passed.' },
    { word: 'safety', meaningAr: 'سلامة', example: 'Follow the safety rules.' },
    { word: 'helmet', meaningAr: 'خوذة', example: 'Wear your helmet at all times.' },
    { word: 'inspector', meaningAr: 'مفتش', example: 'The inspector checks every box.' },
    { word: 'summary', meaningAr: 'ملخص', example: 'The manager wants a short summary.' },
    { word: 'meeting', meaningAr: 'اجتماع', example: 'I have a meeting at ten.' },
    { word: 'exit', meaningAr: 'مخرج', example: 'The fire exit is clear.' },
    { word: 'accident', meaningAr: 'حادث', example: 'Report any accident immediately.' },
  ],
  exercises: [
    lt('I need help with this task.', 'أحتاج إلى مساعدة في هذه المهمة.'),
    lt('Could you send me the report?', 'هل يمكنك إرسال التقرير إليّ؟'),
    lt('The machine is not working.', 'الآلة لا تعمل.'),
    lt('Please enter the data carefully.', 'يُرجى إدخال البيانات بعناية.'),
    lt('I have a meeting at ten.', 'لدي اجتماع في الساعة العاشرة.'),
    lt('Please report the problem to the supervisor.', 'أبلغ المشرف بالمشكلة من فضلك.', 2),
    lt('The supervisor explained the task.', 'شرح المشرف المهمة.'),
    lt('The task is due tomorrow.', 'المهمة مطلوبة غدًا.'),
    lt('I finished my tasks for today.', 'أنهيت مهامي لليوم.'),
    lt('Please double-check the numbers.', 'تحقق من الأرقام مرة أخرى.', 2),
    lt('The data is ready for review.', 'البيانات جاهزة للمراجعة.'),
    lt('Our team meets every Monday.', 'يجتمع فريقنا كل اثنين.'),
    lt('The report is on your desk.', 'التقرير على مكتبك.'),
    lt('The quality check passed.', 'اجتاز فحص الجودة.'),
    lt('This product failed the quality test.', 'رسب هذا المنتج في اختبار الجودة.', 2),
    lt('Quality comes first in our factory.', 'الجودة أولًا في مصنعنا.', 2),
    lt('The inspector checks every box.', 'يفحص المفتش كل صندوق.'),
    lt('The product is ready for the customer.', 'المنتج جاهز للعميل.'),
    lt('Wear your helmet at all times.', 'ارتدِ خوذتك في كل الأوقات.'),
    lt('The safety gloves are in the box.', 'قفازات السلامة في الصندوق.'),
    lt('Follow the safety rules.', 'اتبع قواعد السلامة.'),
    lt('The safety training is on Friday.', 'تدريب السلامة يوم الجمعة.'),
    lt('The fire exit is clear.', 'مخرج الحريق خالٍ.'),
    lt('Report any accident immediately.', 'أبلغ عن أي حادث فورًا.'),
    lt('The warning sign is on the wall.', 'لافتة التحذير على الحائط.'),
    lt('The floor is wet.', 'الأرضية مبللة.'),
    lt('Walk slowly in the workshop.', 'امشِ ببطء في الورشة.'),
    lt('Turn off the machine before cleaning.', 'أطفئ الآلة قبل التنظيف.'),
    lt('The area is clean and safe.', 'المنطقة نظيفة وآمنة.'),
    lt('The printer needs new paper.', 'تحتاج الطابعة إلى ورق جديد.'),
    lt('My computer is slow today.', 'حاسوبي بطيء اليوم.'),
    lt('Save the file before you close it.', 'احفظ الملف قبل أن تغلقه.', 2),
    lt('The keyboard is broken again.', 'لوحة المفاتيح معطلة مجددًا.'),
    lt('The email did not arrive.', 'الرسالة الإلكترونية لم تصل.'),
    lt('Please answer the customer quickly.', 'أجب العميل بسرعة من فضلك.', 2),
    lt('The customer is waiting for an answer.', 'العميل ينتظر إجابة.'),
    lt('The order was cancelled.', 'أُلغي الطلب.'),
    lt('The manager wants a short summary.', 'يريد المدير ملخصًا قصيرًا.'),
    lt('The meeting starts in five minutes.', 'يبدأ الاجتماع بعد خمس دقائق.'),
    lt('The workshop opens at eight.', 'تفتح الورشة في الثامنة.'),
    lt('My colleague repairs the machines.', 'يصلح زميلي الآلات.'),
    lt('The repair takes two hours.', 'يستغرق الإصلاح ساعتين.'),
    fb('I need ___ with this task.', 'help', 'I need help with this task.', 'أحتاج إلى مساعدة في هذه المهمة.', 'مساندة'),
    fb('The ___ is not working.', 'machine', 'The machine is not working.', 'الآلة لا تعمل.', 'جهاز'),
    fb('Please enter the ___ carefully.', 'data', 'Please enter the data carefully.', 'يُرجى إدخال البيانات بعناية.', 'معلومات'),
    fb('Follow the ___ rules.', 'safety', 'Follow the safety rules.', 'اتبع قواعد السلامة.', 'حماية'),
    fb('The fire ___ is clear.', 'exit', 'The fire exit is clear.', 'مخرج الحريق خالٍ.', 'مخرج'),
    fb('The report is on your ___.', 'desk', 'The report is on your desk.', 'التقرير على مكتبك.', 'مكتب صغير'),
    wo('The machine is not working.', 'الآلة لا تعمل.', ['is', 'The', 'working.', 'machine', 'not']),
    wo('I have a meeting at ten.', 'لدي اجتماع في الساعة العاشرة.', ['meeting', 'I', 'ten.', 'at', 'have', 'a']),
    wo('Follow the safety rules.', 'اتبع قواعد السلامة.', ['safety', 'Follow', 'the', 'rules.']),
    wo('The report is on your desk.', 'التقرير على مكتبك.', ['desk.', 'report', 'is', 'The', 'on', 'your']),
    mc('The machine is not working. What do you do?', ['Report it to the supervisor', 'Drink some water', 'Go home early'], 0, 'الآلة لا تعمل. ماذا تفعل؟'),
    mc('What protects your head in a workshop?', ['A helmet', 'A wallet', 'A pencil'], 0, 'ما يحمي رأسك في الورشة؟'),
    mc('Where do you enter the data?', ['On the computer', 'On the scale', 'On the shelf'], 0, 'أين تُدخل البيانات؟'),
  ],
};

/* ---------- finalize, verify, write ---------- */

function finalize(lesson) {
  lesson.exercises.forEach((ex, i) => {
    ex.id = `${lesson.id}-ex-${String(i + 1).padStart(3, '0')}`;
    ex.grammarTags = lesson.id === 'lesson-251' ? ['work', 'warehouse'] : ['work', 'safety'];
    if (ex.type === 'listen-and-type') ex.acceptedAnswers = [ex.en];
    if (ex.type === 'fill-blank') ex.acceptedAnswers = [ex.blankWord];
    if (ex.type === 'word-order') ex.acceptedAnswers = [ex.en];
  });
}

finalize(L251);
finalize(L252);

if (L251.exercises.length !== 55 || L252.exercises.length !== 55) {
  console.error('exercise count wrong:', L251.exercises.length, L252.exercises.length);
  process.exit(1);
}

/* global uniqueness + vocab cap pre-check against current content */
const { lessonManifest } = await import('../data/lesson-manifest.js');
const sentenceCount = new Map();
const vocabCount = new Map();
for (const entry of lessonManifest) {
  const mod = await import(new URL(`file://${join(ROOT, entry.path)}`));
  for (const ex of mod.default.exercises) {
    if (!['listen-and-type', 'fill-blank', 'word-order'].includes(ex.type)) continue;
    const k = normalizeForDup(ex.en);
    sentenceCount.set(k, (sentenceCount.get(k) || 0) + 1);
  }
  for (const v of mod.default.vocabulary) {
    const k = normalizeForDup(v.word);
    vocabCount.set(k, (vocabCount.get(k) || 0) + 1);
  }
}
const problems = [];
for (const L of [L251, L252]) {
  const local = new Set();
  for (const ex of L.exercises) {
    if (!['listen-and-type', 'fill-blank', 'word-order'].includes(ex.type)) continue;
    const k = normalizeForDup(ex.en);
    if ((sentenceCount.get(k) || 0) > 0 && !local.has(k)) problems.push(`${L.id}: sentence already exists elsewhere → "${ex.en}"`);
    local.add(k);
  }
  for (const v of L.vocabulary) {
    const k = normalizeForDup(v.word);
    if ((vocabCount.get(k) || 0) + 1 > 4) problems.push(`${L.id}: vocab word would exceed cap 4 → "${v.word}" (current ${vocabCount.get(k) || 0})`);
  }
}
if (problems.length) {
  console.error('PROBLEMS:');
  problems.forEach((p) => console.error('  -', p));
  process.exit(1);
}

/* write lesson files (exact builder.js format) */
for (const L of [L251, L252]) {
  const file = join(ROOT, 'lessons', L.section, `${L.id}.js`);
  const body = JSON.stringify(L, null, 2);
  writeFileSync(file, `// LingoStep lesson — auto-registered in data/lesson-manifest.js\n// Grammar topic: ${L.title}\nexport default ${body};\n`, 'utf-8');
}

/* register in manifest (append at the end) */
const manifestPath = join(ROOT, 'data/lesson-manifest.js');
let manifest = readFileSync(manifestPath, 'utf-8');
for (const L of [L251, L252]) {
  if (manifest.includes(`"id": "${L.id}"`)) continue;
  const entry = `  {\n    "id": "${L.id}",\n    "n": ${parseInt(L.id.slice(7), 10)},\n    "title": ${JSON.stringify(L.title)},\n    "titleAr": ${JSON.stringify(L.titleAr)},\n    "section": "${L.section}",\n    "level": "${L.level}",\n    "path": "lessons/${L.section}/${L.id}.js",\n    "exercises": ${L.exercises.length},\n    "available": true\n  }`;
  const closeIdx = manifest.lastIndexOf('];');
  manifest = manifest.slice(0, closeIdx) + (manifest.slice(0, closeIdx).trimEnd().endsWith('}') ? ',\n' : '') + entry + '\n' + manifest.slice(closeIdx);
}
writeFileSync(manifestPath, manifest, 'utf-8');

console.log('lesson-251 + lesson-252 written and registered (55 exercises each).');
