/* ============================================================
   Content engine v2 — banks2.js
   Shared lexical banks for the 250-lesson curriculum.
   Re-exports the classic banks (banks.js) and conjugations,
   and adds topic banks for the new sections.
   Slot values: {en, ar, agr?, g?} objects.
   ============================================================ */

export * from '../lib/banks.js';
export * from '../lib/conjugations.js';

import { VERBS } from '../lib/conjugations.js';

/* ---------- colors & shapes ---------- */
export const COLORS = [
  { en: 'red', ar: 'أحمر', f: 'حمراء' }, { en: 'blue', ar: 'أزرق', f: 'زرقاء' },
  { en: 'green', ar: 'أخضر', f: 'خضراء' }, { en: 'yellow', ar: 'أصفر', f: 'صفراء' },
  { en: 'black', ar: 'أسود', f: 'سوداء' }, { en: 'white', ar: 'أبيض', f: 'بيضاء' },
  { en: 'brown', ar: 'بني', f: 'بنية' }, { en: 'orange', ar: 'برتقالي', f: 'برتقالية' },
  { en: 'pink', ar: 'وردي', f: 'وردية' }, { en: 'purple', ar: 'بنفسجي', f: 'بنفسجية' },
  { en: 'gray', ar: 'رمادي', f: 'رمادية' },
];

export const SHAPES = [
  { en: 'a circle', ar: 'دائرة' }, { en: 'a square', ar: 'مربع' },
  { en: 'a triangle', ar: 'مثلث' }, { en: 'a rectangle', ar: 'مستطيل' },
  { en: 'a star', ar: 'نجمة' }, { en: 'a heart', ar: 'قلب' },
  { en: 'a line', ar: 'خط' }, { en: 'a box', ar: 'صندوق' },
];

/* colored objects (masculine-singular frames) */
export const COLORED_THINGS_M = [
  { en: 'The car', ar: 'السيارة', g: 'f' }, { en: 'The bag', ar: 'الحقيبة', g: 'f' },
  { en: 'The door', ar: 'الباب', g: 'm' }, { en: 'The box', ar: 'الصندوق', g: 'm' },
  { en: 'The shirt', ar: 'القميص', g: 'm' }, { en: 'The book', ar: 'الكتاب', g: 'm' },
  { en: 'The phone', ar: 'الهاتف', g: 'm' }, { en: 'The wall', ar: 'الحائط', g: 'm' },
];

/* ---------- days, months, seasons ---------- */
export const DAYS = [
  { en: 'Monday', ar: 'الاثنين' }, { en: 'Tuesday', ar: 'الثلاثاء' },
  { en: 'Wednesday', ar: 'الأربعاء' }, { en: 'Thursday', ar: 'الخميس' },
  { en: 'Friday', ar: 'الجمعة' }, { en: 'Saturday', ar: 'السبت' },
  { en: 'Sunday', ar: 'الأحد' },
];

export const MONTHS = [
  { en: 'January', ar: 'يناير' }, { en: 'February', ar: 'فبراير' }, { en: 'March', ar: 'مارس' },
  { en: 'April', ar: 'أبريل' }, { en: 'May', ar: 'مايو' }, { en: 'June', ar: 'يونيو' },
  { en: 'July', ar: 'يوليو' }, { en: 'August', ar: 'أغسطس' }, { en: 'September', ar: 'سبتمبر' },
  { en: 'October', ar: 'أكتوبر' }, { en: 'November', ar: 'نوفمبر' }, { en: 'December', ar: 'ديسمبر' },
];

export const SEASONS = [
  { en: 'summer', ar: 'الصيف' }, { en: 'winter', ar: 'الشتاء' },
  { en: 'spring', ar: 'الربيع' }, { en: 'autumn', ar: 'الخريف' },
];

/* number words (counting / age / phone digits are authored per lesson) */
export const NUM_WORDS = [
  { en: 'one', ar: 'واحد' }, { en: 'two', ar: 'اثنان' }, { en: 'three', ar: 'ثلاثة' },
  { en: 'four', ar: 'أربعة' }, { en: 'five', ar: 'خمسة' }, { en: 'six', ar: 'ستة' },
  { en: 'seven', ar: 'سبعة' }, { en: 'eight', ar: 'ثمانية' }, { en: 'nine', ar: 'تسعة' },
  { en: 'ten', ar: 'عشرة' }, { en: 'eleven', ar: 'أحد عشر' }, { en: 'twelve', ar: 'اثنا عشر' },
  { en: 'fifteen', ar: 'خمسة عشر' }, { en: 'twenty', ar: 'عشرون' }, { en: 'thirty', ar: 'ثلاثون' },
  { en: 'forty', ar: 'أربعون' }, { en: 'fifty', ar: 'خمسون' }, { en: 'hundred', ar: 'مئة' },
];

/* ---------- extended family ---------- */
export const FAMILY = [
  { en: 'my mother', ar: 'أمي', agr: 'she' }, { en: 'my father', ar: 'أبي', agr: 'he' },
  { en: 'my brother', ar: 'أخي', agr: 'he' }, { en: 'my sister', ar: 'أختي', agr: 'she' },
  { en: 'my grandfather', ar: 'جدي', agr: 'he' }, { en: 'my grandmother', ar: 'جدتي', agr: 'she' },
  { en: 'my uncle', ar: 'عمي', agr: 'he' }, { en: 'my aunt', ar: 'عمتي', agr: 'she' },
  { en: 'my cousin', ar: 'ابن عمي', agr: 'he' }, { en: 'my wife', ar: 'زوجتي', agr: 'she' },
  { en: 'my husband', ar: 'زوجي', agr: 'he' }, { en: 'my son', ar: 'ابني', agr: 'he' },
  { en: 'my daughter', ar: 'ابنتي', agr: 'she' }, { en: 'my baby', ar: 'طفلي', agr: 'he' },
];

export const FAMILY_PLURAL = [
  { en: 'My parents', ar: 'والداي', agr: 'they' }, { en: 'My grandparents', ar: 'جداي', agr: 'they' },
  { en: 'My brothers', ar: 'إخوتي', agr: 'they' }, { en: 'My sisters', ar: 'أخواتي', agr: 'they' },
  { en: 'My children', ar: 'أطفالي', agr: 'they' }, { en: 'My relatives', ar: 'أقاربي', agr: 'they' },
];

/* ---------- appearance ---------- */
export const APPEARANCE = {
  tall: { m: 'طويل', f: 'طويلة' }, short: { m: 'قصير', f: 'قصيرة' },
  thin: { m: 'نحيف', f: 'نحيفة' }, strong: { m: 'قوي', f: 'قوية' },
  young: { m: 'شاب', f: 'شابة' }, old: { m: 'كبير في السن', f: 'كبيرة في السن' },
  handsome: { m: 'وسيم', f: 'وسيمة' }, beautiful: { m: 'جميل', f: 'جميلة' },
};

export const APPEARANCE_FEATS = [
  { en: 'long hair', ar: 'شعر طويل' }, { en: 'short hair', ar: 'شعر قصير' },
  { en: 'black hair', ar: 'شعر أسود' }, { en: 'a beard', ar: 'لحية' },
  { en: 'glasses', ar: 'نظارة' }, { en: 'brown eyes', ar: 'عينان بنيتان' },
  { en: 'a big smile', ar: 'ابتسامة كبيرة' }, { en: 'curly hair', ar: 'شعر مجعد' },
];

/* ---------- weather ---------- */
export const WEATHER_ADJ = [
  { en: 'sunny', ar: 'مشمس' }, { en: 'cloudy', ar: 'غائم' }, { en: 'windy', ar: 'عاصف' },
  { en: 'rainy', ar: 'ممطر' }, { en: 'hot', ar: 'حار' }, { en: 'cold', ar: 'بارد' },
  { en: 'warm', ar: 'دافئ' }, { en: 'cool', ar: 'معتدل' }, { en: 'humid', ar: 'رطب' },
];

export const WEATHER_NP = [
  { en: 'The weather', ar: 'الجو', g: 'm' }, { en: 'The sky', ar: 'السماء', g: 'f' },
  { en: 'The wind', ar: 'الريح', g: 'f' }, { en: 'The sun', ar: 'الشمس', g: 'f' },
  { en: 'The rain', ar: 'المطر', g: 'm' }, { en: 'Today', ar: 'الطقس اليوم', g: 'm' },
];

/* ---------- rooms, furniture, household ---------- */
export const ROOMS = [
  { en: 'the kitchen', ar: 'المطبخ', g: 'm' }, { en: 'the bedroom', ar: 'غرفة النوم', g: 'f' },
  { en: 'the bathroom', ar: 'الحمام', g: 'm' }, { en: 'the living room', ar: 'غرفة الجلوس', g: 'f' },
  { en: 'the balcony', ar: 'الشرفة', g: 'f' }, { en: 'the garden', ar: 'الحديقة', g: 'f' },
  { en: 'the garage', ar: 'المرآب', g: 'm' }, { en: 'the hall', ar: 'المدخل', g: 'm' },
];

export const FURNITURE = [
  { en: 'a table', ar: 'طاولة' }, { en: 'a chair', ar: 'كرسي' }, { en: 'a bed', ar: 'سرير' },
  { en: 'a sofa', ar: 'أريكة' }, { en: 'a wardrobe', ar: 'خزانة ملابس' }, { en: 'a mirror', ar: 'مرآة' },
  { en: 'a lamp', ar: 'مصباح' }, { en: 'a carpet', ar: 'سجادة' }, { en: 'a shelf', ar: 'رف' },
  { en: 'a desk', ar: 'مكتب' }, { en: 'a fridge', ar: 'ثلاجة' }, { en: 'a stove', ar: 'موقد' },
];

export const HOME_OBJECTS = [
  { en: 'the door', ar: 'الباب' }, { en: 'the window', ar: 'النافذة' }, { en: 'the key', ar: 'المفتاح' },
  { en: 'the light', ar: 'الضوء' }, { en: 'the tap', ar: 'الحنفية' }, { en: 'the stairs', ar: 'السلالم' },
  { en: 'the elevator', ar: 'المصعد' }, { en: 'the roof', ar: 'السطح' }, { en: 'the wall', ar: 'الحائط' },
  { en: 'the floor', ar: 'الأرضية' }, { en: 'the curtain', ar: 'الستارة' }, { en: 'the trash', ar: 'القمامة' },
];

export const CLEANING_TOOLS = [
  { en: 'a broom', ar: 'مكنسة' }, { en: 'a mop', ar: 'ممسحة' }, { en: 'a bucket', ar: 'دلو' },
  { en: 'soap', ar: 'الصابون' }, { en: 'detergent', ar: 'منظف' }, { en: 'a sponge', ar: 'إسفنجة' },
  { en: 'a towel', ar: 'منشفة' }, { en: 'a vacuum cleaner', ar: 'مكنسة كهربائية' },
];

export const KITCHEN_TOOLS = [
  { en: 'a knife', ar: 'سكين' }, { en: 'a spoon', ar: 'ملعقة' }, { en: 'a fork', ar: 'شوكة' },
  { en: 'a plate', ar: 'طبق' }, { en: 'a cup', ar: 'كوب' }, { en: 'a pan', ar: 'مقلاة' },
  { en: 'a pot', ar: 'قدر' }, { en: 'a bowl', ar: 'سلطانية' }, { en: 'a kettle', ar: 'غلاية' },
  { en: 'a cutting board', ar: 'لوح تقطيع' }, { en: 'a strainer', ar: 'منخل' }, { en: 'a tray', ar: 'صينية' },
];

/* ---------- extended food & drinks ---------- */
export const FOODS2 = [
  { en: 'tomatoes', ar: 'الطماطم' }, { en: 'onions', ar: 'البصل' }, { en: 'potatoes', ar: 'البطاطس' },
  { en: 'meat', ar: 'اللحم' }, { en: 'pasta', ar: 'المكرونة' }, { en: 'cake', ar: 'الكعك' },
  { en: 'cookies', ar: 'البسكويت' }, { en: 'grapes', ar: 'العنب' }, { en: 'watermelon', ar: 'البطيخ' },
  { en: 'olive oil', ar: 'زيت الزيتون' }, { en: 'salt', ar: 'الملح' }, { en: 'sugar', ar: 'السكر' },
  { en: 'pepper', ar: 'الفلفل' }, { en: 'butter', ar: 'الزبدة' }, { en: 'jam', ar: 'المربى' },
  { en: 'beans', ar: 'الفاصولياء' }, { en: 'lentils', ar: 'العدس' }, { en: 'nuts', ar: 'المكسرات' },
];

export const DRINKS2 = [
  { en: 'orange juice', ar: 'عصير البرتقال' }, { en: 'lemonade', ar: 'الليموناضة' },
  { en: 'milk', ar: 'الحليب' }, { en: 'mineral water', ar: 'المياه المعدنية' },
  { en: 'green tea', ar: 'الشاي الأخضر' }, { en: 'coffee with milk', ar: 'القهوة بالحليب' },
  { en: 'a soft drink', ar: 'مشروب غازي' }, { en: 'hot chocolate', ar: 'الشوكولاتة الساخنة' },
];

/* ---------- clothes & shopping ---------- */
export const CLOTHES = [
  { en: 'a shirt', ar: 'قميص' }, { en: 'a jacket', ar: 'سترة' }, { en: 'a dress', ar: 'فستان' },
  { en: 'shoes', ar: 'حذاء' }, { en: 'pants', ar: 'بنطال' }, { en: 'a hat', ar: 'قبعة' },
  { en: 'a coat', ar: 'معطف' }, { en: 'a scarf', ar: 'وشاح' }, { en: 'socks', ar: 'جوارب' },
  { en: 'a skirt', ar: 'تنورة' }, { en: 'a belt', ar: 'حزام' }, { en: 'a sweater', ar: 'كنزة' },
];

export const SIZES = [
  { en: 'small', ar: 'صغير' }, { en: 'medium', ar: 'متوسط' }, { en: 'large', ar: 'كبير' },
  { en: 'extra large', ar: 'كبير جدا' },
];

/* ---------- jobs & services ---------- */
export const JOBS2 = [
  { en: 'a mechanic', ar: 'ميكانيكي', agr: 'he' }, { en: 'a plumber', ar: 'سباك', agr: 'he' },
  { en: 'an electrician', ar: 'كهربائي', agr: 'he' }, { en: 'a barber', ar: 'حلاق', agr: 'he' },
  { en: 'a pharmacist', ar: 'صيدلي', agr: 'he' }, { en: 'a cashier', ar: 'أمين صندوق', agr: 'he' },
  { en: 'a waiter', ar: 'نادل', agr: 'he' }, { en: 'a lawyer', ar: 'محام', agr: 'he' },
  { en: 'an accountant', ar: 'محاسب', agr: 'he' }, { en: 'a nurse', ar: 'ممرضة', agr: 'she' },
  { en: 'a salesperson', ar: 'بائع', agr: 'he' }, { en: 'a janitor', ar: 'عامل نظافة', agr: 'he' },
  { en: 'a receptionist', ar: 'موظف استقبال', agr: 'she' }, { en: 'a delivery driver', ar: 'سائق توصيل', agr: 'he' },
];

/* ---------- transport & travel ---------- */
export const TRANSPORT = [
  { en: 'the bus', ar: 'الحافلة' }, { en: 'the metro', ar: 'المترو' }, { en: 'the train', ar: 'القطار' },
  { en: 'a taxi', ar: 'سيارة أجرة' }, { en: 'the plane', ar: 'الطائرة' }, { en: 'the car', ar: 'السيارة' },
  { en: 'a bike', ar: 'دراجة' }, { en: 'the ferry', ar: 'العبارة' },
];

export const TRAVEL_ITEMS = [
  { en: 'a passport', ar: 'جواز سفر' }, { en: 'a ticket', ar: 'تذكرة' }, { en: 'a suitcase', ar: 'حقيبة سفر' },
  { en: 'a boarding pass', ar: 'بطاقة صعود' }, { en: 'a map', ar: 'خريطة' }, { en: 'a camera', ar: 'كاميرا' },
  { en: 'a backpack', ar: 'حقيبة ظهر' }, { en: 'luggage', ar: 'الأمتعة' },
];

/* ---------- health ---------- */
export const SYMPTOMS = [
  { en: 'a headache', ar: 'صداع' }, { en: 'a fever', ar: 'حمى' }, { en: 'a cough', ar: 'كحة' },
  { en: 'a sore throat', ar: 'التهاب في الحلق' }, { en: 'a stomachache', ar: 'ألم في المعدة' },
  { en: 'a cold', ar: 'زكام' }, { en: 'a runny nose', ar: 'سيلان في الأنف' },
  { en: 'back pain', ar: 'ألم في الظهر' }, { en: 'a toothache', ar: 'ألم في الأسنان' },
  { en: 'dizziness', ar: 'دوار' }, { en: 'a rash', ar: 'طفح جلدي' }, { en: 'an allergy', ar: 'حساسية' },
];

export const BODY_PARTS = [
  { en: 'head', ar: 'رأس' }, { en: 'eye', ar: 'عين' }, { en: 'ear', ar: 'أذن' },
  { en: 'tooth', ar: 'سن' }, { en: 'arm', ar: 'ذراع' }, { en: 'leg', ar: 'ساق' },
  { en: 'hand', ar: 'يد' }, { en: 'foot', ar: 'قدم' }, { en: 'back', ar: 'ظهر' },
  { en: 'stomach', ar: 'معدة' }, { en: 'throat', ar: 'حلق' }, { en: 'chest', ar: 'صدر' },
];

export const MEDICINE = [
  { en: 'pills', ar: 'حبوب' }, { en: 'syrup', ar: 'شراب' }, { en: 'an injection', ar: 'حقنة' },
  { en: 'a bandage', ar: 'ضمادة' }, { en: 'cream', ar: 'كريم' }, { en: 'vitamins', ar: 'فيتامينات' },
  { en: 'antibiotics', ar: 'مضادات حيوية' }, { en: 'a prescription', ar: 'وصفة طبية' },
];

/* ---------- feelings ---------- */
export const EMOTIONS = {
  happy: { m: 'سعيد', f: 'سعيدة' }, sad: { m: 'حزين', f: 'حزينة' },
  angry: { m: 'غاضب', f: 'غاضبة' }, tired: { m: 'متعب', f: 'متعبة' },
  worried: { m: 'قلق', f: 'قلقة' }, excited: { m: 'متحمس', f: 'متحمسة' },
  scared: { m: 'خائف', f: 'خائفة' }, proud: { m: 'فخور', f: 'فخورة' },
  calm: { m: 'هادئ', f: 'هادئة' }, nervous: { m: 'متوتر', f: 'متوترة' },
};

/* ---------- technology ---------- */
export const TECH = [
  { en: 'my phone', ar: 'هاتفي' }, { en: 'the laptop', ar: 'الحاسوب المحمول' },
  { en: 'the computer', ar: 'الحاسوب' }, { en: 'the internet', ar: 'الإنترنت' },
  { en: 'the password', ar: 'كلمة المرور' }, { en: 'the app', ar: 'التطبيق' },
  { en: 'the email', ar: 'البريد الإلكتروني' }, { en: 'the printer', ar: 'الطابعة' },
  { en: 'the screen', ar: 'الشاشة' }, { en: 'the charger', ar: 'الشاحن' },
  { en: 'the keyboard', ar: 'لوحة المفاتيح' }, { en: 'the website', ar: 'الموقع الإلكتروني' },
  { en: 'the file', ar: 'الملف' }, { en: 'the camera', ar: 'الكاميرا' },
];

/* ---------- money & numbers of daily life ---------- */
export const MONEY_WORDS = [
  { en: 'money', ar: 'المال' }, { en: 'cash', ar: 'نقدا' }, { en: 'a card', ar: 'بطاقة' },
  { en: 'a receipt', ar: 'إيصال' }, { en: 'a discount', ar: 'خصم' }, { en: 'the price', ar: 'السعر' },
  { en: 'the change', ar: 'الباقي' }, { en: 'coins', ar: 'قطع معدنية' }, { en: 'a bill', ar: 'فاتورة' },
  { en: 'the budget', ar: 'الميزانية' },
];

/* ---------- countries & cities ---------- */
export const COUNTRIES = [
  { en: 'Egypt', ar: 'مصر' }, { en: 'Saudi Arabia', ar: 'السعودية' }, { en: 'Jordan', ar: 'الأردن' },
  { en: 'Morocco', ar: 'المغرب' }, { en: 'Algeria', ar: 'الجزائر' }, { en: 'Tunisia', ar: 'تونس' },
  { en: 'Iraq', ar: 'العراق' }, { en: 'Syria', ar: 'سوريا' }, { en: 'Lebanon', ar: 'لبنان' },
  { en: 'Kuwait', ar: 'الكويت' }, { en: 'Yemen', ar: 'اليمن' }, { en: 'Oman', ar: 'عمان' },
  { en: 'Sudan', ar: 'السودان' }, { en: 'Libya', ar: 'ليبيا' }, { en: 'Palestine', ar: 'فلسطين' },
  { en: 'Qatar', ar: 'قطر' },
];

export const CITIES = [
  { en: 'Cairo', ar: 'القاهرة' }, { en: 'Riyadh', ar: 'الرياض' }, { en: 'Amman', ar: 'عمّان' },
  { en: 'Casablanca', ar: 'الدار البيضاء' }, { en: 'Dubai', ar: 'دبي' }, { en: 'Alexandria', ar: 'الإسكندرية' },
  { en: 'Baghdad', ar: 'بغداد' }, { en: 'Damascus', ar: 'دمشق' }, { en: 'Tunis', ar: 'تونس العاصمة' },
];

/* ---------- school subjects & languages ---------- */
export const SUBJECTS2 = [
  { en: 'English', ar: 'الإنجليزية' }, { en: 'math', ar: 'الرياضيات' }, { en: 'science', ar: 'العلوم' },
  { en: 'history', ar: 'التاريخ' }, { en: 'geography', ar: 'الجغرافيا' }, { en: 'art', ar: 'الرسم' },
  { en: 'music', ar: 'الموسيقى' }, { en: 'computer science', ar: 'علوم الحاسوب' },
];

/* helper: pick a stable pseudo-random subset of a bank (deterministic) */
export function pick(arr, start, count) {
  return arr.slice(start % arr.length, (start % arr.length) + count);
}

export { VERBS };
