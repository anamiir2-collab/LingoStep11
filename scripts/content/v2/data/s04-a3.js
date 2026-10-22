/* ============================================================
   v2 section data — s04-a3.js
   Food, Shopping & Services · lessons 78–83 (A2)
   Negotiating Prices, Online Shopping, Deliveries and Orders,
   At the Pharmacy, At the Barber or Hair Salon,
   Laundry and Dry Cleaning.
   Export contract: `lessons` = array of lesson definitions.
   ============================================================ */

import * as B from '../banks2.js';

export const lessons = [

  /* ================= lesson 78 — Negotiating Prices ================= */
  {
    num: 78,
    tags: ['bargaining', 'prices', 'shopping'],
    objectives: [
      'Say a price is too high politely',
      'Ask for a lower price and a discount',
      'Agree on a final price with the seller',
    ],
    grammar: {
      explanation: 'In a market, sellers often start with a high price, and buyers negotiate. Say the problem politely with "too + adjective": "That is too expensive". Ask for a better price with "Can you lower the price a little?", "What is your best price?" or "How much for both?". Offer your own price with "I will give you ten dollars for it". The seller may answer "I can give you a small discount" or "That is my final offer". When you agree, say "Deal" or "I will take it".',
      explanationAr: 'في السوق يبدأ البائع غالبا بسعر مرتفع، والمشتري يتفاوض. اذكر المشكلة بأدب مع too + صفة: That is too expensive. واطلب سعرا أفضل بـ Can you lower the price a little؟ أو What is your best price؟ أو How much for both؟ واعرض سعرك بـ I will give you ten dollars for it. وقد يجيب البائع: I can give you a small discount أو That is my final offer. وعند الاتفاق قل Deal أو I will take it.',
      examples: [
        { en: 'That is too expensive. Can you lower it?', ar: 'هذا غالٍ جدا. هل يمكنك خفضه؟' },
        { en: 'What is your best price for two?', ar: 'ما أفضل سعر للاثنين؟' },
        { en: 'I will give you ten dollars for it.', ar: 'سأعطيك عشرة دولارات مقابله.' },
      ],
    },
    vocabulary: [
      { word: 'negotiate', meaningAr: 'يتفاوض', example: 'I negotiate prices with patience.', ipa: 'nɪˈɡoʊʃieɪt' },
      { word: 'price', meaningAr: 'السعر', example: 'The price is too high for me.' },
      { word: 'discount', meaningAr: 'خصم', example: 'The shop gave me a discount.', ipa: 'ˈdɪskaʊnt' },
      { word: 'cheap', meaningAr: 'رخيص', example: 'These pens are very cheap.' },
      { word: 'deal', meaningAr: 'صفقة', example: 'We made a good deal today.' },
      { word: 'seller', meaningAr: 'بائع', example: 'The seller wrapped the gift.' },
      { word: 'offer', meaningAr: 'عرض', example: 'Is that your final offer?' },
      { word: 'lower', meaningAr: 'يخفض', example: 'Can you lower the price a bit?' },
      { word: 'customer', meaningAr: 'زبون', example: 'The customer paid in cash.' },
      { word: 'save', meaningAr: 'يوفر مالا', example: 'I save money every month.' },
      { word: 'worth', meaningAr: 'يستحق', example: 'This carpet is worth every dollar.' },
      { word: 'bargaining', meaningAr: 'مساومة', example: 'Bargaining is normal in our market.' },
    ],
    scenario: [
      { en: 'This carpet is handmade, sir.', ar: 'هذه السجادة مصنوعة يدويا يا سيدي.', d: 1 },
      { en: 'How much do you want for it?', ar: 'بكم تريدها؟', d: 2 },
      { en: 'I want eighty dollars for it.', ar: 'أريدها بثمانين دولارا.', d: 1 },
      { en: 'That is not a good price for me.', ar: 'هذا ليس سعرا جيدا بالنسبة لي.', d: 2 },
      { en: 'I can give you a small discount.', ar: 'يمكنني منحك خصما صغيرا.', d: 2 },
      { en: 'Can you lower the price a little, please?', ar: 'هل يمكنك خفض السعر قليلا من فضلك؟', d: 1 },
      { en: 'OK, sixty dollars, and that is final.', ar: 'حسنا، ستون دولارا، وهذا نهائي.', d: 1 },
      { en: 'Deal! I will take it.', ar: 'اتفقنا! سآخذها.', d: 2 },
      { en: 'You are a smart customer, sir.', ar: 'أنت زبون ذكي يا سيدي.', d: 2 },
      { en: 'I saved a lot of money today.', ar: 'وفّرت مالا كثيرا اليوم.', d: 1 },
      { en: 'Do you accept cards or cash?', ar: 'هل تقبلون البطاقات أم النقد؟', d: 1 },
      { en: 'Cash is better for me, please.', ar: 'النقد أفضل لي، من فضلك.', d: 2 },
      { en: 'Yesterday I bought a scarf for ten dollars.', ar: 'أمس اشتريت وشاحا بعشرة دولارات.', d: 2 },
      { en: 'It was cheaper in the old market.', ar: 'كان أرخص في السوق القديم.', d: 2 },
      { en: 'The market has many small shops.', ar: 'في السوق متاجر صغيرة كثيرة.', d: 1 },
      { en: 'Bargaining is normal there.', ar: 'المساومة طبيعية هناك.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'Can you lower the price {Q}?', arTmpl: 'هل يمكنك خفض السعر {Q_ar}؟',
        slots: {
          Q: [
            { en: 'a little', ar: 'قليلا' }, { en: 'a bit', ar: 'بعض الشيء' },
            { en: 'by ten dollars', ar: 'بعشرة دولارات' }, { en: 'for a regular customer', ar: 'لزبون دائم' },
          ],
        },
        tags: ['bargaining', 'requests'], d: 1, limit: 4,
      },
      {
        tmpl: 'I will give you {P} for {N}.', arTmpl: 'سأعطيك {P_ar} مقابل {N_ar}.',
        slots: {
          P: [
            { en: 'five dollars', ar: 'خمسة دولارات' }, { en: 'ten dollars', ar: 'عشرة دولارات' },
            { en: 'twenty dollars', ar: 'عشرين دولارا' }, { en: 'fifty dollars', ar: 'خمسين دولارا' },
          ],
          N: [
            { en: 'both', ar: 'الاثنين معا' }, { en: 'one', ar: 'واحدا فقط' },
            { en: 'two', ar: 'اثنين' }, { en: 'all of them', ar: 'جميعها' },
          ],
        },
        tags: ['bargaining', 'future-will'], d: 2, limit: 10,
      },
      {
        tmpl: 'That is too {ADJ} for me.', arTmpl: 'هذا {ADJ_ar} علي جدا.',
        slots: {
          ADJ: [
            { en: 'expensive', ar: 'غالٍ' }, { en: 'big', ar: 'كبير' },
            { en: 'small', ar: 'صغير' }, { en: 'heavy', ar: 'ثقيل' },
          ],
        },
        tags: ['bargaining', 'adjectives'], d: 1, limit: 4,
      },
      {
        tmpl: 'Can I get {ITEM} for {P}?', arTmpl: 'هل يمكنني شراء {ITEM_ar} مقابل {P_ar}؟',
        slots: {
          ITEM: [
            { en: 'this shirt', ar: 'هذا القميص' }, { en: 'this watch', ar: 'هذه الساعة' },
            { en: 'this bag', ar: 'هذه الحقيبة' }, { en: 'these shoes', ar: 'هذا الحذاء' },
          ],
          P: [
            { en: 'ten dollars', ar: 'عشرة دولارات' }, { en: 'twenty dollars', ar: 'عشرين دولارا' },
            { en: 'thirty dollars', ar: 'ثلاثين دولارا' }, { en: 'forty dollars', ar: 'أربعين دولارا' },
          ],
        },
        tags: ['bargaining', 'questions', 'shopping'], d: 2, limit: 10,
      },
      {
        tmpl: 'I bought {ITEM} for {P} yesterday.', arTmpl: 'اشتريت {ITEM_ar} مقابل {P_ar} أمس.',
        slots: {
          ITEM: [
            { en: 'this hat', ar: 'هذه القبعة' }, { en: 'this belt', ar: 'هذا الحزام' },
            { en: 'this scarf', ar: 'هذا الوشاح' }, { en: 'a used phone', ar: 'هاتفا مستعملا' },
          ],
          P: [
            { en: 'eight dollars', ar: 'ثمانية دولارات' }, { en: 'twelve dollars', ar: 'اثني عشر دولارا' },
            { en: 'fifteen dollars', ar: 'خمسة عشر دولارا' }, { en: 'twenty dollars', ar: 'عشرين دولارا' },
          ],
        },
        tags: ['bargaining', 'past-simple', 'clothes'], d: 2, limit: 8,
      },
    ],
    fills: [
      { en: 'What is your best price?', ar: 'ما أفضل سعر لديك؟', word: 'best', hint: 'سؤال عن السعر' },
      { en: 'This watch is too expensive.', ar: 'هذه الساعة غالية جدا.', word: 'expensive', hint: 'سعر مرتفع' },
      { en: 'Can you give me a small discount?', ar: 'هل يمكنك منحي خصما صغيرا؟', word: 'discount' },
      { en: 'I paid thirty dollars for this jacket.', ar: 'دفعت ثلاثين دولارا مقابل هذه السترة.', word: 'paid', hint: 'فعل ماض' },
      { en: 'The seller agreed to my price.', ar: 'وافق البائع على سعري.', word: 'agreed' },
      { en: 'We saved money at the market.', ar: 'وفّرنا مالا في السوق.', word: 'saved' },
      { en: 'Is that your final offer?', ar: 'هل هذا عرضك النهائي؟', word: 'final', hint: 'سؤال' },
      { en: 'The new price is much cheaper.', ar: 'السعر الجديد أرخص بكثير.', word: 'cheaper' },
    ],
    orders: [
      { en: 'Can you lower the price, please?', ar: 'هل يمكنك خفض السعر من فضلك؟' },
      { en: 'What is your best price for two?', ar: 'ما أفضل سعر لديك للاثنين؟' },
      { en: 'Give me a small discount, my friend.', ar: 'امنحني خصما صغيرا يا صديقي.' },
      { en: 'I will take it at fifty dollars.', ar: 'سآخذها بخمسين دولارا.' },
      { en: 'That is my final offer, sorry.', ar: 'هذا عرضي النهائي، آسف.' },
      { en: 'The seller gave me a good deal.', ar: 'منحني البائع صفقة جيدة.' },
    ],
    mc: [
      { question: 'The price is very high. What do you say?', options: ["That's too expensive.", 'It is too small.', 'It is too late.', 'It is too hot.'], answerIndex: 0, ar: 'السعر مرتفع جدا، ماذا تقول؟' },
      { question: 'What does "discount" mean?', options: ['خصم', 'سعر جديد', 'فاتورة', 'إيصال'], answerIndex: 0, ar: 'ما معنى discount؟' },
      { question: 'You want a lower price politely. You ask:', options: ['Can you lower the price?', 'Lower the price now!', 'The price is high.', 'Where is the price?'], answerIndex: 0, ar: 'تريد سعرا أقل بأدب، فتسأل:' },
      { question: '"I paid ten dollars" means:', options: ['دفعت عشرة دولارات', 'سأدفع عشرة دولارات', 'أعطني عشرة دولارات', 'السعر عشرة دولارات'], answerIndex: 0, ar: 'ما معنى I paid ten dollars؟' },
    ],
  },

  /* ================= lesson 79 — Online Shopping ================= */
  {
    num: 79,
    tags: ['online-shopping', 'internet', 'shopping'],
    objectives: [
      'Buy things on a website step by step',
      'Talk about shipping, reviews and stock',
      'Say how you will pay at checkout',
    ],
    grammar: {
      explanation: 'When you shop online, you first search for a product and open the website. Click on "Add to cart" to keep the item, then go to checkout to pay. Many sites offer free shipping, so look for that before you order. Read the customer reviews to know if the product is good: "The reviews are excellent". Talk about the next step with will: "I will pay with my card at checkout". If an item is out of stock, choose another size or color.',
      explanationAr: 'عندما تتسوق عبر الإنترنت تبحث أولا عن المنتج وتفتح الموقع. انقر على Add to cart لوضع السلعة في السلة ثم انتقل إلى checkout للدفع. كثير من المواقع تقدم شحنا مجانيا فابحث عنها قبل أن تطلب. واقرأ تقييمات العملاء لتعرف جودة المنتج: The reviews are excellent. وتحدث عن الخطوة القادمة بـ will: I will pay with my card at checkout. وإذا كانت السلعة غير متوفرة اختر مقاسا أو لونا آخر.',
      examples: [
        { en: 'Add the shoes to the cart, please.', ar: 'أضف الحذاء إلى السلة من فضلك.' },
        { en: 'I will pay at checkout.', ar: 'سأدفع عند إتمام الشراء.' },
        { en: 'The reviews are very good.', ar: 'التقييمات جيدة جدا.' },
      ],
    },
    vocabulary: [
      { word: 'online', meaningAr: 'عبر الإنترنت', example: 'I often buy books online.', ipa: 'ˌɒnˈlaɪn' },
      { word: 'add to cart', meaningAr: 'يضيف إلى السلة', example: 'Add to cart, then continue shopping.' },
      { word: 'checkout', meaningAr: 'إتمام الشراء', example: 'Go to checkout when you finish.', ipa: 'ˈtʃɛˌkaʊt' },
      { word: 'free shipping', meaningAr: 'شحن مجاني', example: 'This site gives free shipping.' },
      { word: 'customer review', meaningAr: 'تقييم العميل', example: 'I read a customer review first.' },
      { word: 'website', meaningAr: 'موقع إلكتروني', example: 'The website opened slowly.', ipa: 'ˈwɛbˌsaɪt' },
      { word: 'account', meaningAr: 'حساب', example: 'I created a new account.' },
      { word: 'password', meaningAr: 'كلمة المرور', example: 'Never share your password.' },
      { word: 'search', meaningAr: 'يبحث', example: 'Search for winter boots there.' },
      { word: 'click', meaningAr: 'ينقر', example: 'Click on the small picture.' },
      { word: 'payment', meaningAr: 'عملية الدفع', example: 'The payment failed twice.' },
      { word: 'out of stock', meaningAr: 'غير متوفر', example: 'The blue bag is out of stock.' },
    ],
    scenario: [
      { en: 'I found a nice jacket on this website.', ar: 'وجدت سترة جميلة على هذا الموقع.', d: 1 },
      { en: 'Add it to the cart, please.', ar: 'أضفها إلى السلة من فضلك.', d: 2 },
      { en: 'The shoes cost forty dollars online.', ar: 'الحذاء يكلف أربعين دولارا عبر الإنترنت.', d: 1 },
      { en: 'Is the shipping free this week?', ar: 'هل الشحن مجاني هذا الأسبوع؟', d: 1 },
      { en: 'Read the customer reviews first.', ar: 'اقرأ تقييمات العملاء أولا.', d: 2 },
      { en: 'They are very good, four stars.', ar: 'هي جيدة جدا، أربع نجوم.', d: 1 },
      { en: 'I will pay with my card at checkout.', ar: 'سأدفع ببطاقتي عند إتمام الشراء.', d: 2 },
      { en: 'Do you need my account password?', ar: 'هل تحتاج كلمة مرور حسابي؟', d: 1 },
      { en: 'No, just your email address.', ar: 'لا، فقط عنوان بريدك الإلكتروني.', d: 1 },
      { en: 'The website said the item is out of stock.', ar: 'قال الموقع إن السلعة غير متوفرة.', d: 2 },
      { en: 'I will choose a different size then.', ar: 'سأختار مقاسا آخر إذا إذن.', d: 2 },
      { en: 'The app sent me a confirmation email.', ar: 'أرسل لي التطبيق بريدا بالتأكيد.', d: 1 },
      { en: 'This store has a big sale today.', ar: 'في هذا المتجر تخفيض كبير اليوم.', d: 1 },
      { en: 'Everything is cheaper than the market.', ar: 'كل شيء أرخص من السوق.', d: 2 },
      { en: 'Do they deliver to Riyadh?', ar: 'هل يوصلون إلى الرياض؟', d: 1 },
      { en: 'I did not click the buy button.', ar: 'لم أنقر على زر الشراء.', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'The {I} costs {P} dollars.', arTmpl: '{I_ar} {V_ar} {P_ar} دولارا.',
        slots: {
          I: [
            { en: 'jacket', ar: 'السترة', g: 'f' }, { en: 'shirt', ar: 'القميص', g: 'm' },
            { en: 'dress', ar: 'الفستان', g: 'f' }, { en: 'hat', ar: 'القبعة', g: 'f' },
          ],
          V: (x) => [{ en: 'costs', ar: x.I.g === 'f' ? 'تكلف' : 'يكلف' }],
          P: [
            { en: 'twenty', ar: 'عشرين' }, { en: 'thirty', ar: 'ثلاثين' },
            { en: 'forty', ar: 'أربعين' }, { en: 'sixty', ar: 'ستين' },
          ],
        },
        tags: ['online-shopping', 'prices'], d: 1, limit: 16,
      },
      {
        tmpl: 'Is the {I} in stock?', arTmpl: 'هل {I_ar} {V_ar}؟',
        slots: {
          I: [
            { en: 'jacket', ar: 'السترة', g: 'f' }, { en: 'laptop', ar: 'الحاسوب المحمول', g: 'm' },
            { en: 'bag', ar: 'الحقيبة', g: 'f' }, { en: 'phone', ar: 'الهاتف', g: 'm' },
            { en: 'camera', ar: 'الكاميرا', g: 'f' }, { en: 'printer', ar: 'الطابعة', g: 'f' },
          ],
          V: (x) => [{ en: 'item', ar: x.I.g === 'f' ? 'متوفرة' : 'متوفر' }],
        },
        tags: ['online-shopping', 'questions'], d: 1, limit: 6,
      },
      {
        tmpl: 'I will pay for the {I} at checkout.', arTmpl: 'سأدفع ثمن {I_ar} عند إتمام الشراء.',
        slots: {
          I: [
            { en: 'shoes', ar: 'الحذاء' }, { en: 'jacket', ar: 'السترة' },
            { en: 'headphones', ar: 'السماعات' }, { en: 'watch', ar: 'الساعة' },
            { en: 'dress', ar: 'الفستان' }, { en: 'sweater', ar: 'الكنزة' },
          ],
        },
        tags: ['online-shopping', 'future-will', 'clothes'], d: 2, limit: 6,
      },
      {
        tmpl: 'There is {DISC} on {ITEM} today.', arTmpl: 'يوجد {DISC_ar} على {ITEM_ar} اليوم.',
        slots: {
          DISC: [
            { en: 'a discount', ar: 'خصم' }, { en: 'a big sale', ar: 'تخفيض كبير' },
            { en: 'free shipping', ar: 'شحن مجاني' }, { en: 'a coupon', ar: 'كوبون' },
          ],
          ITEM: [
            { en: 'all shoes', ar: 'كل الأحذية' }, { en: 'this jacket', ar: 'هذه السترة' },
            { en: 'the new phones', ar: 'الهواتف الجديدة' }, { en: 'winter clothes', ar: 'ملابس الشتاء' },
          ],
        },
        tags: ['online-shopping', 'sales'], d: 1, limit: 10,
      },
    ],
    fills: [
      { en: 'I added the shoes to my cart.', ar: 'أضفت الحذاء إلى سلتي.', word: 'cart' },
      { en: 'Free shipping ends on Sunday.', ar: 'الشحن المجاني ينتهي يوم الأحد.', word: 'shipping' },
      { en: 'The website asked for my password.', ar: 'طلب الموقع كلمة المرور.', word: 'website' },
      { en: 'I read two customer reviews before buying.', ar: 'قرأت تقييمين للعملاء قبل الشراء.', word: 'reviews' },
      { en: 'Checkout was quick and easy.', ar: 'كان إتمام الشراء سريعا وسهلا.', word: 'Checkout' },
      { en: 'The store sent me a coupon.', ar: 'أرسل لي المتجر كوبونا.', word: 'coupon' },
      { en: 'My card payment did not work.', ar: 'لم تنجح عملية الدفع ببطاقتي.', word: 'payment' },
      { en: 'I shop online every weekend.', ar: 'أتسوق عبر الإنترنت كل عطلة نهاية أسبوع.', word: 'online' },
    ],
    orders: [
      { en: 'Add this jacket to the cart.', ar: 'أضف هذه السترة إلى السلة.' },
      { en: 'The free shipping offer ends today.', ar: 'عرض الشحن المجاني ينتهي اليوم.' },
      { en: 'You can pay at checkout easily.', ar: 'يمكنك الدفع عند إتمام الشراء بسهولة.' },
      { en: 'Do you have an account on this website?', ar: 'هل لديك حساب على هذا الموقع؟' },
      { en: 'The customer reviews were very helpful.', ar: 'كانت تقييمات العملاء مفيدة جدا.' },
      { en: 'This website sells shoes and clothes.', ar: 'يبيع هذا الموقع الأحذية والملابس.' },
    ],
    mc: [
      { question: 'Where do you put things before paying online?', options: ['in the cart', 'in the fridge', 'in the garage', 'in the kitchen'], answerIndex: 0, ar: 'أين تضع الأشياء قبل الدفع عبر الإنترنت؟' },
      { question: '"Free shipping" means:', options: ['التوصيل بلا مقابل', 'سعر مرتفع', 'متجر مغلق', 'سلعة قديمة'], answerIndex: 0, ar: 'ما معنى Free shipping؟' },
      { question: 'You read customer reviews to:', options: ['know the product quality', 'hear music', 'watch films', 'meet friends'], answerIndex: 0, ar: 'تقرأ تقييمات العملاء لـ:' },
      { question: 'Checkout is the step where you:', options: ['pay for your order', 'wash your clothes', 'open a shop', 'write an email'], answerIndex: 0, ar: 'إتمام الشراء هو الخطوة التي تقوم فيها بـ:' },
    ],
  },

  /* ================= lesson 80 — Deliveries and Orders ================= */
  {
    num: 80,
    tags: ['deliveries', 'orders', 'phone'],
    objectives: [
      'Track an order and ask about delivery',
      'Report a delivery problem politely',
      'Use will for arrival times',
    ],
    grammar: {
      explanation: 'When you wait for a delivery, you talk about the future with will: "Your package will arrive tomorrow". You can track the order with a tracking number: "I want to track my order". Talk about problems in the past simple: "The parcel went to the wrong address" or "It did not arrive yet". Be polite on the phone: "Can you check the order number, please?". The delivery man usually calls before he comes, and you sign when you receive the box.',
      explanationAr: 'عند انتظار توصيلة تتحدث عن المستقبل بـ will: Your package will arrive tomorrow. ويمكنك تتبع الطلب برقم التتبع: I want to track my order. وتحدث عن المشكلات بالماضي البسيط: The parcel went to the wrong address أو It did not arrive yet. وكن مهذبا في الهاتف: Can you check the order number, please؟ عادة يتصل عامل التوصيل قبل قدومه، وتوقّع عند استلام الصندوق.',
      examples: [
        { en: 'Your order will arrive on Tuesday.', ar: 'طلبك سيصل يوم الثلاثاء.' },
        { en: 'I want to track my order, please.', ar: 'أريد أن أتتبع طلبي من فضلك.' },
        { en: 'The parcel went to the wrong address.', ar: 'ذهب الطرد إلى العنوان الخطأ.' },
      ],
    },
    vocabulary: [
      { word: 'order', meaningAr: 'طلب', example: 'My order left the store today.' },
      { word: 'track', meaningAr: 'يتتبع', example: 'I track my order on the app.', ipa: 'træk' },
      { word: 'tracking number', meaningAr: 'رقم التتبع', example: 'Use this tracking number, please.' },
      { word: 'package', meaningAr: 'طرد', example: 'The package is on the table.', ipa: 'ˈpækɪdʒ' },
      { word: 'parcel', meaningAr: 'طرد صغير', example: 'A parcel came for you.' },
      { word: 'delivery man', meaningAr: 'عامل التوصيل', example: 'The delivery man is downstairs.' },
      { word: 'deliver', meaningAr: 'يوصل', example: 'They deliver only in the city.' },
      { word: 'address', meaningAr: 'عنوان', example: 'Write your address on the box.' },
      { word: 'arrive', meaningAr: 'يصل', example: 'The boxes arrive in the morning.', ipa: 'əˈraɪv' },
      { word: 'sign', meaningAr: 'يوقّع', example: 'Please sign this paper here.' },
      { word: 'late', meaningAr: 'متأخر', example: 'The delivery is one hour late.' },
      { word: 'receive', meaningAr: 'يستلم', example: 'I receive the letters at work.' },
    ],
    scenario: [
      { en: 'I ordered a bookcase online yesterday.', ar: 'طلبت مكتبة كتب عبر الإنترنت أمس.', d: 1 },
      { en: 'The company sent me a message today.', ar: 'أرسلت لي الشركة رسالة اليوم.', d: 1 },
      { en: 'Your package will arrive tomorrow morning.', ar: 'طردك سيصل صباح غد.', d: 1 },
      { en: 'Really? I am going to wait at home.', ar: 'حقا؟ سأنتظر في المنزل.', d: 2 },
      { en: 'Where is my package, please?', ar: 'أين طردي من فضلك؟', d: 1 },
      { en: 'Can I track my order on the app?', ar: 'هل يمكنني تتبع طلبي على التطبيق؟', d: 1 },
      { en: 'Yes, use this tracking number.', ar: 'نعم، استخدم رقم التتبع هذا.', d: 1 },
      { en: 'The delivery man called me an hour ago.', ar: 'اتصل بي عامل التوصيل قبل ساعة.', d: 2 },
      { en: 'The package went to the wrong address.', ar: 'ذهب الطرد إلى العنوان الخطأ.', d: 2 },
      { en: 'I am sorry about that, sir.', ar: 'أنا آسف لذلك يا سيدي.', d: 1 },
      { en: 'Will you bring it again today?', ar: 'هل ست أحضرها مرة أخرى اليوم؟', d: 2 },
      { en: 'We will bring it before five.', ar: 'سنحضرها قبل الخامسة.', d: 1 },
      { en: 'My new shoes did not arrive yet.', ar: 'حذائي الجديد لم يصل بعد.', d: 2 },
      { en: 'Please check the order number again.', ar: 'تحقق من رقم الطلب مرة أخرى من فضلك.', d: 1 },
      { en: 'The parcel was heavy but not broken.', ar: 'كان الطرد ثقيلا لكنه غير مكسور.', d: 2 },
      { en: 'I signed for two boxes this morning.', ar: 'وقعت على صندوقين هذا الصباح.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'My {N} will arrive {T}.', arTmpl: '{N_ar} {V_ar} {T_ar}.',
        slots: {
          N: [
            { en: 'package', ar: 'طردي', g: 'm' }, { en: 'order', ar: 'طلبي', g: 'm' },
            { en: 'letter', ar: 'خطابي', g: 'm' }, { en: 'shipment', ar: 'شحنتي', g: 'f' },
          ],
          V: (x) => [{ en: 'will arrive', ar: x.N.g === 'f' ? 'ستصل' : 'سيصل' }],
          T: [
            { en: 'tomorrow', ar: 'غدا' }, { en: 'on Monday', ar: 'يوم الاثنين' },
            { en: 'in the morning', ar: 'صباحا' }, { en: 'next week', ar: 'الأسبوع القادم' },
          ],
        },
        tags: ['deliveries', 'future-will'], d: 1, limit: 12,
      },
      {
        tmpl: 'I am going to {V} the company {T}.', arTmpl: 'سوف {V_ar} الشركة {T_ar}.',
        slots: {
          V: [
            { en: 'call', ar: 'أتصل بـ' }, { en: 'email', ar: 'أرسل بريدا إلى' },
            { en: 'visit', ar: 'أزور' }, { en: 'ask about', ar: 'أسأل عن' },
          ],
          T: [
            { en: 'today', ar: 'اليوم' }, { en: 'tomorrow', ar: 'غدا' },
            { en: 'after lunch', ar: 'بعد الغداء' }, { en: 'this evening', ar: 'مساء' },
          ],
        },
        tags: ['deliveries', 'going-to', 'phone'], d: 2, limit: 10,
      },
      {
        tmpl: 'The delivery man {V} my package {T}.', arTmpl: 'عامل التوصيل {V_ar} طردي {T_ar}.',
        slots: {
          V: (x) => [
            { en: B.enPast('leave'), ar: B.arPast('leave', 'he') },
            { en: B.enPast('bring'), ar: B.arPast('bring', 'he') },
          ],
          T: [
            { en: 'at the door', ar: 'عند الباب' }, { en: 'this morning', ar: 'هذا الصباح' },
            { en: 'near the gate', ar: 'قرب البوابة' }, { en: 'an hour ago', ar: 'قبل ساعة' },
          ],
        },
        tags: ['deliveries', 'past-simple'], d: 2, limit: 8,
      },
      {
        tmpl: 'I want to {V} my order {T}.', arTmpl: 'أريد أن {V_ar} طلبي {T_ar}.',
        slots: {
          V: [
            { en: 'track', ar: 'أتتبع' }, { en: 'check', ar: 'أتحقق من' },
            { en: 'change', ar: 'أغير' }, { en: 'cancel', ar: 'ألغي' },
          ],
          T: [
            { en: 'on the app', ar: 'على التطبيق' }, { en: 'online', ar: 'عبر الإنترنت' },
            { en: 'by phone', ar: 'عبر الهاتف' }, { en: 'right now', ar: 'الآن' },
          ],
        },
        tags: ['deliveries', 'orders', 'questions'], d: 1, limit: 10,
      },
    ],
    fills: [
      { en: 'My package did not arrive yesterday.', ar: 'لم يصل طردي أمس.', word: 'arrive' },
      { en: 'Please write your address clearly.', ar: 'اكتب عنوانك بوضوح من فضلك.', word: 'address' },
      { en: 'The delivery man knows my building.', ar: 'يعرف عامل التوصيل عمارتي.', word: 'delivery' },
      { en: 'I tracked my order all night.', ar: 'تتبعت طلبي الليل كله.', word: 'tracked' },
      { en: 'The parcel arrived broken last week.', ar: 'وصل الطرد مكسورا الأسبوع الماضي.', word: 'broken' },
      { en: 'Can you resend the tracking number?', ar: 'هل يمكنك إعادة إرسال رقم التتبع؟', word: 'tracking' },
      { en: 'We are going to pick it up tomorrow.', ar: 'سوف نستلمه غدا.', word: 'pick' },
      { en: 'The company apologized for the delay.', ar: 'اعتذرت الشركة عن التأخير.', word: 'delay' },
    ],
    orders: [
      { en: 'Where is my package from Cairo?', ar: 'أين طردي القادم من القاهرة؟' },
      { en: 'The delivery man will call you soon.', ar: 'سيتصل بك عامل التوصيل قريبا.' },
      { en: 'I did not receive my order yet.', ar: 'لم أستلم طلبي بعد.' },
      { en: 'Please deliver it to this address.', ar: 'يوصلها إلى هذا العنوان من فضلك.' },
      { en: 'My order number is four five two.', ar: 'رقم طلبي أربعة خمسة اثنان.' },
      { en: 'The wrong package came to our house.', ar: 'جاء الطرد الخطأ إلى منزلنا.' },
    ],
    mc: [
      { question: 'You want to see where your parcel is. You:', options: ['track my order', 'wash my car', 'cook dinner', 'read a book'], answerIndex: 0, ar: 'تريد معرفة مكان طردي، فأنت:' },
      { question: '"The package will arrive tomorrow" means:', options: ['سيصل الطرد غدا', 'وصل الطرد أمس', 'الطرد مكسور', 'ألغيت الطلب'], answerIndex: 0, ar: 'ما معنى The package will arrive tomorrow؟' },
      { question: 'The driver came to the wrong address. The problem is the:', options: ['address', 'price', 'size', 'color'], answerIndex: 0, ar: 'جاء السائق إلى عنوان خاطئ، فالمشكلة في:' },
      { question: 'A "delivery man" is a person who:', options: ['brings packages', 'teaches English', 'sells medicine', 'fixes cars'], answerIndex: 0, ar: 'عامل التوصيل شخص يقوم بـ:' },
      { question: 'Your order is late. You call to:', options: ['ask about it', 'order pizza', 'buy shoes', 'book a ticket'], answerIndex: 0, ar: 'طلبك متأخر، فتتصل لـ:' },
    ],
  },

  /* ================= lesson 81 — At the Pharmacy ================= */
  {
    num: 81,
    tags: ['pharmacy', 'health', 'medicine'],
    objectives: [
      'Buy medicine at the counter',
      'Ask how to take the medicine',
      'Ask about prices and side effects',
    ],
    grammar: {
      explanation: 'At the pharmacy counter, the pharmacist gives instructions with the imperative: "Take two pills twice a day after meals". Use "a day" or "a week" for frequency: "three times a day", "once a week". Ask about the medicine with "How many pills should I take?" or "Does it have side effects?". "Should" gives advice: "You should rest and drink water". Use will for comfort: "You will feel better in two days". Always read the label before you take any medicine.',
      explanationAr: 'عند منضدة الصيدلية يعطي الصيدلي التعليمات بصيغة الأمر: Take two pills twice a day after meals. واستخدم a day أو a week للتكرار: three times a day، once a week. واسأل عن الدواء بـ How many pills should I take؟ أو Does it have side effects؟ وتُستخدم should للنصيحة: You should rest and drink water. واستخدم will للطمأنة: You will feel better in two days. واقرأ دائما النشرة قبل تناول أي دواء.',
      examples: [
        { en: 'Take one pill in the morning.', ar: 'خذ حبة واحدة في الصباح.' },
        { en: 'How many pills should I take?', ar: 'كم حبة يجب أن آخذ؟' },
        { en: 'You will feel better soon.', ar: 'سوف تشعر بالتحسن قريبا.' },
      ],
    },
    vocabulary: [
      { word: 'pharmacy', meaningAr: 'صيدلية', example: 'The pharmacy opens at nine.' },
      { word: 'pharmacist', meaningAr: 'صيدلي', example: 'The pharmacist knows my name.' },
      { word: 'prescription', meaningAr: 'وصفة طبية', example: 'I have a prescription from the doctor.', ipa: 'prɪˈskrɪpʃən' },
      { word: 'pills', meaningAr: 'حبوب', example: 'These pills are for sleep.' },
      { word: 'syrup', meaningAr: 'شراب', example: 'The syrup tastes like honey.', ipa: 'ˈsɪrəp' },
      { word: 'twice a day', meaningAr: 'مرتين يوميا', example: 'Take it twice a day.' },
      { word: 'after meals', meaningAr: 'بعد الوجبات', example: 'Drink it after meals only.' },
      { word: 'side effects', meaningAr: 'أعراض جانبية', example: 'Ask about the side effects.' },
      { word: 'cream', meaningAr: 'كريم', example: 'This cream is for dry skin.' },
      { word: 'drops', meaningAr: 'قطرات', example: 'Two drops in each eye.' },
      { word: 'label', meaningAr: 'نشرة الدواء', example: 'Read the label carefully.' },
      { word: 'vitamins', meaningAr: 'فيتامينات', example: 'Vitamins are good in winter.' },
    ],
    scenario: [
      { en: 'Good evening, I need medicine for a cough.', ar: 'مساء الخير، أحتاج دواء للكحة.', d: 1 },
      { en: 'Do you have a prescription from the doctor?', ar: 'هل لديك وصفة من الطبيب؟', d: 1 },
      { en: 'Yes, here is my prescription.', ar: 'نعم، هذه وصفتي.', d: 1 },
      { en: 'One moment, I will get the pills.', ar: 'لحظة واحدة، سأحضر الحبوب.', d: 2 },
      { en: 'How many pills should I take?', ar: 'كم حبة يجب أن آخذ؟', d: 1 },
      { en: 'Take two pills twice a day after meals.', ar: 'خذ حبتين مرتين يوميا بعد الأكل.', d: 1 },
      { en: 'Should I take them with water?', ar: 'هل آخذها مع الماء؟', d: 1 },
      { en: 'Yes, drink a big glass of water.', ar: 'نعم، اشرب كوب ماء كبيرا.', d: 1 },
      { en: 'Does the syrup have side effects?', ar: 'هل للشراب أعراض جانبية؟', d: 2 },
      { en: 'Some people feel a little sleepy.', ar: 'بعض الناس يشعرون بنعاس خفيف.', d: 2 },
      { en: 'How much is the small box?', ar: 'بكم العلبة الصغيرة؟', d: 1 },
      { en: 'It is six dollars, sir.', ar: 'بستة دولارات يا سيدي.', d: 1 },
      { en: 'I will take the pills and the syrup.', ar: 'سآخذ الحبوب والشراب.', d: 2 },
      { en: 'That will be nine dollars together.', ar: 'سيكون ذلك تسعة دولارات معا.', d: 1 },
      { en: 'I did not buy vitamins last time.', ar: 'لم أشترِ الفيتامينات المرة الماضية.', d: 2 },
      { en: 'Please put them in a small bag.', ar: 'ضعها في كيس صغير من فضلك.', d: 1 },
    ],
    patterns: [
      {
        tmpl: 'Take {N} pills {F}.', arTmpl: 'خذ {N_ar} حبوب {F_ar}.',
        slots: {
          N: [
            { en: 'three', ar: 'ثلاث' }, { en: 'four', ar: 'أربع' }, { en: 'five', ar: 'خمس' },
          ],
          F: [
            { en: 'twice a day', ar: 'مرتين في اليوم' }, { en: 'after meals', ar: 'بعد الأكل' },
            { en: 'before bed', ar: 'قبل النوم' }, { en: 'with food', ar: 'مع الطعام' },
          ],
        },
        tags: ['pharmacy', 'imperative'], d: 1, limit: 10,
      },
      {
        tmpl: 'Do you have {MED} for {SYM}?', arTmpl: 'هل لديكم {MED_ar} {SYM_ar}؟',
        slots: {
          MED: [
            { en: 'syrup', ar: 'شراب' }, { en: 'pills', ar: 'حبوب' },
            { en: 'cream', ar: 'كريما' }, { en: 'drops', ar: 'قطرة' },
          ],
          SYM: [
            { en: 'a cough', ar: 'للكحة' }, { en: 'a cold', ar: 'للزكام' },
            { en: 'a headache', ar: 'للصداع' }, { en: 'a fever', ar: 'للحمى' },
          ],
        },
        tags: ['pharmacy', 'questions', 'health'], d: 1, limit: 10,
      },
      {
        tmpl: 'The {MED} costs {P} dollars.', arTmpl: '{MED_ar} {V_ar} {P_ar} دولارات.',
        slots: {
          MED: [
            { en: 'syrup', ar: 'الشراب', g: 'm' }, { en: 'cream', ar: 'الكريم', g: 'm' },
            { en: 'bandage', ar: 'الضمادة', g: 'f' }, { en: 'small box', ar: 'العلبة الصغيرة', g: 'f' },
          ],
          V: (x) => [{ en: 'costs', ar: x.MED.g === 'f' ? 'تكلف' : 'يكلف' }],
          P: [
            { en: 'five', ar: 'خمسة' }, { en: 'six', ar: 'ستة' },
            { en: 'seven', ar: 'سبعة' }, { en: 'eight', ar: 'ثمانية' },
          ],
        },
        tags: ['pharmacy', 'prices'], d: 2, limit: 10,
      },
      {
        tmpl: 'I {V} the medicine {T}.', arTmpl: '{V_ar} الدواء {T_ar}.',
        slots: {
          V: (x) => [
            { en: B.enPast('take'), ar: B.arPast('take', 'I') },
            { en: B.enPast('forget'), ar: B.arPast('forget', 'I') },
            { en: B.enPast('buy'), ar: B.arPast('buy', 'I') },
          ],
          T: [
            { en: 'after lunch', ar: 'بعد الغداء' }, { en: 'before bed', ar: 'قبل النوم' },
            { en: 'with tea', ar: 'مع الشاي' }, { en: 'at night', ar: 'ليلا' },
          ],
        },
        tags: ['pharmacy', 'past-simple'], d: 2, limit: 9,
      },
    ],
    fills: [
      { en: 'The pharmacist put the pills in a bag.', ar: 'وضع الصيدلي الحبوب في كيس.', word: 'pharmacist' },
      { en: 'This syrup is for children.', ar: 'هذا الشراب للأطفال.', word: 'syrup' },
      { en: 'I take my medicine three times a day.', ar: 'آخذ دوائي ثلاث مرات في اليوم.', word: 'times' },
      { en: 'Read the label before you start.', ar: 'اقرأ النشرة قبل أن تبدأ.', word: 'label' },
      { en: 'The doctor wrote a new prescription.', ar: 'كتب الطبيب وصفة جديدة.', word: 'prescription' },
      { en: 'Do these pills have side effects?', ar: 'هل لهذه الحبوب أعراض جانبية؟', word: 'effects' },
      { en: 'We did not pay for the vitamins.', ar: 'لم ندفع ثمن الفيتامينات.', word: 'vitamins' },
      { en: 'Feel better soon, my friend.', ar: 'أتشافى قريبا يا صديقي.', word: 'soon' },
    ],
    orders: [
      { en: 'I need medicine for my son.', ar: 'أحتاج دواء لابني.' },
      { en: 'Take one pill in the morning, please.', ar: 'خذ حبة واحدة في الصباح من فضلك.' },
      { en: 'How much is this cream?', ar: 'بكم هذا الكريم؟' },
      { en: 'You will feel better in two days.', ar: 'ستشعر بالتحسن بعد يومين.' },
      { en: 'The cough syrup is on the top shelf.', ar: 'شراب الكحة على الرف الأعلى.' },
      { en: 'Did you take your medicine today?', ar: 'هل أخذت دواءك اليوم؟' },
    ],
    mc: [
      { question: 'Where do you buy medicine?', options: ['at the pharmacy', 'at the bakery', 'at the barber', 'at the bank'], answerIndex: 0, ar: 'أين تشتري الدواء؟' },
      { question: '"Take two pills twice a day" means:', options: ['أربع حبوب كل يوم', 'حبتان كل أسبوع', 'حبة واحدة ليلا', 'لا تأخذ حبوبا'], answerIndex: 0, ar: 'ما معنى Take two pills twice a day؟' },
      { question: '"Side effects" are:', options: ['أعراض غير مرغوبة', 'سعر الدواء', 'اسم الطبيب', 'موعد الزيارة'], answerIndex: 0, ar: 'ما المقصود بـ Side effects؟' },
      { question: 'You need a ___ to buy this medicine.', options: ['prescription', 'passport', 'plate', 'present'], answerIndex: 0, ar: 'تحتاج ___ لشراء هذا الدواء.' },
    ],
  },

  /* ================= lesson 82 — At the Barber or Hair Salon ================= */
  {
    num: 82,
    tags: ['barber', 'hair', 'services'],
    objectives: [
      'Ask for a haircut or a shave',
      'Describe the style you want',
      'Talk about prices and appointments',
    ],
    grammar: {
      explanation: 'At the barber or hair salon, ask for the service politely: "I would like a haircut" or "Can I get a shave, please?". Describe the style with short adjectives: "Short on the sides, please" or "Not too short". The barber may ask "How do you want your hair today?" or "Do you like the same style?". Say how often you go: "I cut my hair twice a month". Book a time with "I made an appointment for Friday". Useful words here: barber, scissors, comb, mirror and shampoo.',
      explanationAr: 'عند الحلاق أو مصفف الشعر اطلب الخدمة بأدب: I would like a haircut أو Can I get a shave, please؟ وصف التسريحة بصفات قصيرة: Short on the sides, please أو Not too short. وقد يسألك الحلاق: How do you want your hair today؟ أو Do you like the same style؟ وقل كم مرة تقص شعرك: I cut my hair twice a month. واحجز الوقت بـ I made an appointment for Friday. وكلمات مفيدة هنا: barber وscissors وcomb وmirror وshampoo.',
      examples: [
        { en: 'I would like a haircut, please.', ar: 'أود قص شعري من فضلك.' },
        { en: 'Not too short, please.', ar: 'ليس قصيرا جدا، من فضلك.' },
        { en: 'I made an appointment for Saturday.', ar: 'حجزت موعدا يوم السبت.' },
      ],
    },
    vocabulary: [
      { word: 'barber', meaningAr: 'حلاق', example: 'The barber knows all the news.' },
      { word: 'hair salon', meaningAr: 'صالون حلاقة', example: 'The hair salon is very busy today.' },
      { word: 'haircut', meaningAr: 'قص شعر', example: 'I need a haircut before Eid.', ipa: 'ˈhɛrkʌt' },
      { word: 'trim', meaningAr: 'تشذيب', example: 'Just a trim, please.' },
      { word: 'shave', meaningAr: 'حلاقة الذقن', example: 'A shave and a wash, please.' },
      { word: 'beard', meaningAr: 'لحية', example: 'He trims his beard every week.' },
      { word: 'scissors', meaningAr: 'مقص', example: 'The scissors are very sharp.' },
      { word: 'comb', meaningAr: 'مشط', example: 'Use this small comb, please.' },
      { word: 'shampoo', meaningAr: 'شامبو', example: 'This shampoo smells nice.' },
      { word: 'style', meaningAr: 'تسريحة', example: 'I like your new style.' },
      { word: 'mirror', meaningAr: 'مرآة', example: 'Look in the mirror behind you.' },
      { word: 'short on the sides', meaningAr: 'قصير من الجوانب', example: 'Cut it short on the sides.' },
    ],
    scenario: [
      { en: 'Welcome! Do you have an appointment?', ar: 'أهلا بك! هل لديك موعد؟', d: 1 },
      { en: 'No, but can I get a haircut now?', ar: 'لا، لكن هل يمكنني قص شعري الآن؟', d: 1 },
      { en: 'Of course, sit here, please.', ar: 'بالتأكيد، اجلس هنا من فضلك.', d: 2 },
      { en: 'How do you want your hair today?', ar: 'كيف تريد شعرك اليوم؟', d: 1 },
      { en: 'Short on the sides, longer on top.', ar: 'قصير من الجوانب، أطول من الأعلى.', d: 1 },
      { en: 'And a shave, please.', ar: 'وحلاقة ذقن من فضلك.', d: 1 },
      { en: 'OK. I will cut it slowly.', ar: 'حسنا. سأقصه على مهل.', d: 2 },
      { en: 'Not too short, please.', ar: 'ليس قصيرا جدا، من فضلك.', d: 1 },
      { en: 'Do you like the same style as last time?', ar: 'هل تريد التسريحة نفسها كالمرة الماضية؟', d: 2 },
      { en: 'Yes, the same style, please.', ar: 'نعم، التسريحة نفسها من فضلك.', d: 1 },
      { en: 'Both of my sisters go to a hair salon downtown.', ar: 'كلتا أختي تذهبان إلى صالون حلاقة في وسط المدينة.', d: 2 },
      { en: 'She pays twenty dollars for a haircut.', ar: 'تدفع عشرين دولارا مقابل قصة شعر.', d: 2 },
      { en: 'I paid only ten dollars last week.', ar: 'دفعت عشرة دولارات فقط الأسبوع الماضي.', d: 1 },
      { en: 'The barber cut my hair too short once.', ar: 'قص الحلاق شعري قصيرا جدا مرة.', d: 2 },
      { en: 'My hair did not look good for two weeks.', ar: 'لم يكن شعري جميلا لمدة أسبوعين.', d: 2 },
      { en: 'Now I always check in the mirror.', ar: 'الآن أتحقق دائما في المرآة.', d: 1 },
      { en: 'The salon is next to the bakery.', ar: 'الصالون بجانب المخبز.', d: 1 },
      { en: 'Can we go together on Thursday?', ar: 'هل نذهب معا يوم الخميس؟', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'I would like {S}, please.', arTmpl: 'أود {S_ar} من فضلك.',
        slots: {
          S: [
            { en: 'a haircut', ar: 'قص شعري' }, { en: 'a shave', ar: 'حلاقة' },
            { en: 'a trim', ar: 'تشذيبا' }, { en: 'a new style', ar: 'تسريحة جديدة' },
            { en: 'just a wash', ar: 'غسلا فقط' }, { en: 'a beard trim', ar: 'تشذيبا للحيّة' },
          ],
        },
        tags: ['barber', 'requests'], d: 1, limit: 6,
      },
      {
        tmpl: 'How much is {S} here?', arTmpl: 'بكم {S_ar} هنا؟',
        slots: {
          S: [
            { en: 'a haircut', ar: 'القصة' }, { en: 'a shave', ar: 'الحلاقة' },
            { en: 'a wash', ar: 'الغسل' }, { en: 'the beard trim', ar: 'تشذيب اللحية' },
            { en: 'hair coloring', ar: 'صبغة الشعر' }, { en: 'a kids cut', ar: 'قصة الأطفال' },
          ],
        },
        tags: ['barber', 'questions', 'prices'], d: 1, limit: 6,
      },
      {
        tmpl: 'I {V} my hair {F} a month.', arTmpl: '{V_ar} شعري {F_ar} في الشهر.',
        slots: {
          V: [
            { en: 'cut', ar: 'أقص' }, { en: 'comb', ar: 'أمشط' }, { en: 'wash', ar: 'أغسل' },
          ],
          F: [
            { en: 'once', ar: 'مرة واحدة' }, { en: 'twice', ar: 'مرتين' },
            { en: 'three times', ar: 'ثلاث مرات' }, { en: 'four times', ar: 'أربع مرات' },
          ],
        },
        tags: ['barber', 'present-simple'], d: 2, limit: 12,
      },
      {
        tmpl: 'The barber {V} my beard {ADV}.', arTmpl: 'الحلاق {V_ar} لحيتي {ADV_ar}.',
        slots: {
          V: [
            { en: 'trimmed', ar: 'قلّص' }, { en: 'shaved', ar: 'حلق' }, { en: 'shaped', ar: 'شكّل' },
          ],
          ADV: [
            { en: 'carefully', ar: 'بعناية' }, { en: 'quickly', ar: 'بسرعة' },
            { en: 'this morning', ar: 'هذا الصباح' }, { en: 'with a razor', ar: 'بالموس' },
          ],
        },
        tags: ['barber', 'past-simple'], d: 2, limit: 8,
      },
    ],
    fills: [
      { en: 'The barber uses clean scissors.', ar: 'يستعمل الحلاق مقصا نظيفا.', word: 'scissors' },
      { en: 'I made an appointment for Friday.', ar: 'حجزت موعدا يوم الجمعة.', word: 'Friday' },
      { en: 'Please comb my hair gently.', ar: 'مشط شعري بلطف من فضلك.', word: 'comb' },
      { en: 'The shave did not hurt at all.', ar: 'لم تؤلمني الحلاقة إطلاقا.', word: 'hurt' },
      { en: 'She dyes her hair at the salon.', ar: 'تصبغ شعرها في الصالون.', word: 'salon' },
      { en: 'A good haircut makes me happy.', ar: 'قصة الشعر الجيدة تجعلني سعيدا.', word: 'happy' },
      { en: 'He looked at himself in the mirror.', ar: 'نظر إلى نفسه في المرآة.', word: 'mirror' },
      { en: 'The shampoo smelled like flowers.', ar: 'كانت رائحة الشامبو كالزهور.', word: 'shampoo' },
    ],
    orders: [
      { en: 'Can I get a haircut today?', ar: 'هل يمكنني قص شعري اليوم؟' },
      { en: 'The barber cut my hair too short.', ar: 'قص الحلاق شعري قصيرا جدا.' },
      { en: 'Do you have an appointment for Saturday?', ar: 'هل لديك موعد يوم السبت؟' },
      { en: 'I want the same style as before.', ar: 'أريد التسريحة نفسها كالسابق.' },
      { en: 'Please shave my beard carefully.', ar: 'احلق لحيتي بعناية من فضلك.' },
      { en: 'The barber knows my whole family.', ar: 'يعرف الحلاق عائلتي كلها.' },
    ],
    mc: [
      { question: 'Where can you get a haircut?', options: ['at the barber', 'at the pharmacy', 'at the bank', 'at the bakery'], answerIndex: 0, ar: 'أين يمكنك قص شعرك؟' },
      { question: '"Short on the sides" describes:', options: ['the haircut style', 'the price', 'the smell', 'the color of the walls'], answerIndex: 0, ar: 'عبارة Short on the sides تصف:' },
      { question: 'The barber works with:', options: ['scissors and a comb', 'pots and pans', 'books and pens', 'cars and buses'], answerIndex: 0, ar: 'يعمل الحلاق بـ:' },
      { question: 'You want the same haircut as last time. You say:', options: ['The same style, please.', 'A new style, please.', 'A shave, please.', 'Just a wash, please.'], answerIndex: 0, ar: 'تريد القصة نفسها كالمرة الماضية، فتقول:' },
    ],
  },

  /* ================= lesson 83 — Laundry and Dry Cleaning ================= */
  {
    num: 83,
    tags: ['laundry', 'dry-cleaning', 'clothes'],
    objectives: [
      'Give washing and dry-cleaning instructions',
      'Ask the price per piece and the deadline',
      'Describe a stain or a laundry problem',
    ],
    grammar: {
      explanation: 'At the laundry, you give simple instructions: "Wash this shirt, please" or "Dry clean this jacket". Say the deadline with "by": "It will be ready by Friday" (not later than Friday). Ask the cost with "How much per piece?" — the answer is the price for one item, for example "Three dollars a shirt". Talk about stains and problems in the past: "The stain did not come out". Separate white and dark clothes, and do not wash them together, or light clothes will change color.',
      explanationAr: 'في المغسلة تعطي تعليمات بسيطة: Wash this shirt, please أو Dry clean this jacket. وحدد الموعد النهائي بـ by: It will be ready by Friday (أي قبل الجمعة أو يومها). واسأل عن الثمن بـ How much per piece؟ والجواب هو سعر القطعة الواحدة، مثل Three dollars a shirt. وتحدث عن البقع والمشكلات بالماضي: The stain did not come out. وافصل الملابس البيضاء عن الداكنة ولا تغسلها معا وإلا تغير لون الفاتح.',
      examples: [
        { en: 'Please dry clean this jacket.', ar: 'من فضلك نظّف هذه السترة تنظيفا جافا.' },
        { en: 'The laundry will be ready by Friday.', ar: 'سيكون الغسيل جاهزا بحلول الجمعة.' },
        { en: 'How much per piece?', ar: 'بكم القطعة؟' },
      ],
    },
    vocabulary: [
      { word: 'laundry', meaningAr: 'المغسلة / الغسيل', example: 'The laundry closes at eight.', ipa: 'ˈlɔːndri' },
      { word: 'dry cleaning', meaningAr: 'تنظيف جاف', example: 'Dry cleaning costs more here.' },
      { word: 'dry cleaner', meaningAr: 'محل التنظيف الجاف', example: 'The dry cleaner is very careful.' },
      { word: 'stain', meaningAr: 'بقعة', example: 'There is a stain on the sleeve.', ipa: 'steɪn' },
      { word: 'iron', meaningAr: 'يكوي / مكواة', example: 'Iron the shirt while it is warm.' },
      { word: 'hanger', meaningAr: 'علاقة ملابس', example: 'Put the dress on a hanger.' },
      { word: 'detergent', meaningAr: 'مسحوق غسيل', example: 'This detergent smells like lemons.' },
      { word: 'fold', meaningAr: 'يطوي', example: 'Fold the towels after they dry.' },
      { word: 'pick up', meaningAr: 'يستلم', example: 'I pick up my clothes at noon.' },
      { word: 'per piece', meaningAr: 'للقطعة', example: 'Two dollars per piece, please.' },
      { word: 'by (time)', meaningAr: 'بحلول / قبل', example: 'I need it by Thursday.' },
      { word: 'wet', meaningAr: 'مبلل', example: 'The wet socks are on the line.' },
    ],
    scenario: [
      { en: 'This white shirt has a big stain.', ar: 'في هذا القميص الأبيض بقعة كبيرة.', d: 1 },
      { en: 'Can you remove the stain, please?', ar: 'هل يمكنك إزالة البقعة من فضلك؟', d: 1 },
      { en: 'I will try my best, madam.', ar: 'سأبذل قصارى جهدي يا سيدتي.', d: 2 },
      { en: 'I need to dry clean this jacket.', ar: 'أحتاج إلى تنظيف هذه السترة جافا.', d: 1 },
      { en: 'It will be ready by Friday.', ar: 'ستكون جاهزة بحلول الجمعة.', d: 1 },
      { en: 'How much do you charge per piece?', ar: 'بكم تتقاضون القطعة؟', d: 1 },
      { en: 'Three dollars for shirts, five for jackets.', ar: 'ثلاثة دولارات للقمصان وخمسة للسترات.', d: 2 },
      { en: 'Fine, here are four shirts.', ar: 'حسنا، هذه أربعة قمصان.', d: 1 },
      { en: 'Do you wash by hand or by machine?', ar: 'هل تغسلون باليد أم بالغسالة؟', d: 2 },
      { en: 'We use a gentle machine, do not worry.', ar: 'نستعمل غسالة لطيفة، لا تقلق.', d: 1 },
      { en: 'My red socks colored the other clothes.', ar: 'لوّنت جواربي الحمراء الملابس الأخرى.', d: 2 },
      { en: 'Do not wash the dark clothes with the white ones.', ar: 'لا تغسل الملابس الداكنة مع البيضاء.', d: 1 },
      { en: 'I am going to pick up the laundry tomorrow.', ar: 'سوف أستلم الغسيل غدا.', d: 2 },
      { en: 'Your clothes will be clean and folded.', ar: 'ستكون ملابسك نظيفة ومطوية.', d: 1 },
      { en: 'The dry cleaner is open until eight.', ar: 'محل التنظيف الجاف مفتوح حتى الثامنة.', d: 1 },
      { en: 'Did you iron my new dress?', ar: 'هل كويت فستاني الجديد؟', d: 2 },
    ],
    patterns: [
      {
        tmpl: 'Can you {V} this {I} by {D}?', arTmpl: 'هل يمكنك {V_ar} {I_ar} بحلول {D_ar}؟',
        slots: {
          V: [
            { en: 'wash', ar: 'غسل' }, { en: 'dry clean', ar: 'تنظيف' },
            { en: 'iron', ar: 'كبس' }, { en: 'fold', ar: 'طي' },
          ],
          I: [
            { en: 'jacket', ar: 'السترة' }, { en: 'shirt', ar: 'القميص' },
            { en: 'dress', ar: 'الفستان' }, { en: 'coat', ar: 'المعطف' },
          ],
          D: B.pick(B.DAYS, 3, 4),
        },
        tags: ['laundry', 'requests', 'clothes'], d: 2, limit: 14,
      },
      {
        tmpl: 'How much per {U}?', arTmpl: 'بكم {U_ar}؟',
        slots: {
          U: [
            { en: 'piece', ar: 'القطعة' }, { en: 'kilo', ar: 'الكيلو' },
            { en: 'shirt', ar: 'القميص' }, { en: 'load', ar: 'الغسلة' },
          ],
        },
        tags: ['laundry', 'questions', 'prices'], d: 1, limit: 4,
      },
      {
        tmpl: 'I will {V} the {N} {T}.', arTmpl: 'سوف {V_ar} {N_ar} {T_ar}.',
        slots: {
          V: [
            { en: 'wash', ar: 'أغسل' }, { en: 'fold', ar: 'أطوي' }, { en: 'iron', ar: 'أكوي' },
          ],
          N: [
            { en: 'clothes', ar: 'الملابس' }, { en: 'shirts', ar: 'القمصان' }, { en: 'towels', ar: 'المناشف' },
          ],
          T: [
            { en: 'tomorrow', ar: 'غدا' }, { en: 'tonight', ar: 'الليلة' },
            { en: 'on Saturday', ar: 'يوم السبت' }, { en: 'after work', ar: 'بعد العمل' },
          ],
        },
        tags: ['laundry', 'future-will'], d: 1, limit: 12,
      },
      {
        tmpl: 'There is a stain on my {I}.', arTmpl: 'توجد بقعة على {I_ar}.',
        slots: {
          I: [
            { en: 'shirt', ar: 'قميصي' }, { en: 'pants', ar: 'بنطالي' },
            { en: 'dress', ar: 'فستاني' }, { en: 'scarf', ar: 'وشاحي' },
            { en: 'sweater', ar: 'كنزتي' }, { en: 'jacket', ar: 'سترتي' },
          ],
        },
        tags: ['laundry', 'clothes'], d: 1, limit: 6,
      },
    ],
    fills: [
      { en: 'The laundry returns my clothes on time.', ar: 'ترد المغسلة ملابسي في الوقت المحدد.', word: 'laundry' },
      { en: 'I put detergent in the machine.', ar: 'أضع مسحوق الغسيل في الغسالة.', word: 'detergent' },
      { en: 'Please hang the wet shirts here.', ar: 'علق القمصان المبللة هنا من فضلك.', word: 'wet' },
      { en: 'My white socks are gray now.', ar: 'جواربي البيضاء رمادية الآن.', word: 'gray' },
      { en: 'Did the stain come out?', ar: 'هل خرجت البقعة؟', word: 'stain' },
      { en: 'We iron the sheets every week.', ar: 'نكوي الشراشف كل أسبوع.', word: 'iron' },
      { en: 'The hanger broke under the heavy coat.', ar: 'انكسرت العلاقة تحت ثقل المعطف.', word: 'hanger' },
      { en: 'I will pick up my suit on Tuesday.', ar: 'سأستلم بدلتي يوم الثلاثاء.', word: 'suit' },
    ],
    orders: [
      { en: 'I need this jacket by Friday, please.', ar: 'أحتاج هذه السترة بحلول الجمعة من فضلك.' },
      { en: 'How much per piece for jackets?', ar: 'بكم القطعة بالنسبة للسترات؟' },
      { en: 'The stain did not come out.', ar: 'لم تخرج البقعة.' },
      { en: 'Please wash my clothes with care.', ar: 'اغسل ملابسي بعناية من فضلك.' },
      { en: 'Your order will be ready tomorrow.', ar: 'سيكون طلبك جاهزا غدا.' },
      { en: 'The dry cleaner is near the mosque.', ar: 'محل التنظيف الجاف قرب المسجد.' },
    ],
    mc: [
      { question: 'You take a suit with oil stains to the:', options: ['dry cleaner', 'bakery', 'bookstore', 'barber'], answerIndex: 0, ar: 'تأخذ البدلة الملطخة بالزيت إلى:' },
      { question: '"By Friday" means:', options: ['قبل الجمعة أو يومها', 'بعد الجمعة', 'يوم الأحد', 'الشهر القادم'], answerIndex: 0, ar: 'ما معنى By Friday؟' },
      { question: 'A "stain" is:', options: ['بقعة وسخة', 'قطعة قماش', 'نشرة دواء', 'علاقة ملابس'], answerIndex: 0, ar: 'البقعة هي:' },
      { question: 'You wash white clothes:', options: ['separate from dark clothes', 'with the dark clothes', 'in the kitchen', 'with food'], answerIndex: 0, ar: 'تغسل الملابس البيضاء:' },
    ],
  },
];
