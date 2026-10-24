import { el } from './utils.js';
import { speak, isSupported as speechSupported } from './speech.js';
import { getSettings } from './settings.js';

const META = [
["Hello, I'm Khaled","التعارف"],["This is my family","العائلة"],["Colours","الألوان"],["My clothes","شراء الملابس"],["Where are you from?","لعبة التخمين"],["Today is Friday","الترتيب والخطط"],["Personal Details","مقابلة عمل وبيانات شخصية"],["Is there...?","السؤال عن المكان"],["Whose dog is this?","الملكية"],["Amira's Family","شجرة العائلة"],["At the Supermarket","في السوبر ماركت"],["What's the time?","السؤال عن الوقت"],["A lot of Arabs speak English","لغات العرب"],["How old is your grandmother?","السؤال عن العمر"],["What are you doing now?","الأنشطة اليومية"],["I like gardening","الهوايات والطقس"],["She has got long straight hair","وصف الشخص"],["Can you spell your name?","التهجئة والجمارك"],["Directions","الاتجاهات"],["At the restaurant","في المطعم"],["I didn't sleep well last night","السهر والحفلات"],["At what time did you come home?","السؤال عن العودة"],["What's the date today?","تاريخ اليوم"],["At the dentist","عند طبيب الأسنان"],["It's colder than here","المقارنات والوصف"],["Comparisons","المقارنات السريعة"],["The busiest street in the world","التفضيل والآراء"],["It's going to rain","التنبؤ بالمستقبل"],["There aren't many biscuits","المطبخ والمشتريات"],["What are you going to do on Christmas Day?","المناسبات والتمنيات"],["The train is coming soon","القرارات السريعة"],["They've gone to the cinema","التأخير عن المنزل"],["Have you ever been to Mexico?","السفر والرحلات"],["How long have you stayed there?","التخطيط للإجازة"],["The negative","النفي واقتراح المساعدة"],["Would you like some tea?","الضيافة"],["There's a little but not much","التسوق والكميات"],["You have to pay for the prescription","استشارة الطبيب"],["If I were you","تقديم النصيحة"],["It's a lovely day, isn't it?","الأسئلة المذيلة"],["Punctuation Marks / Job Interview","مقابلة وظيفية"],["How lovely to hear from you!","اتصال بين صديقين"],["Phone conversations","مكالمات هاتفية"],["What's... Like?","الشخصية والتفضيلات"]
];

export async function renderBookDialoguesView(view, params = [], lang = 'en') {
  const ar = lang === 'ar';
  const id = Number(params[0]);
  const head = el('div',{class:'page-head'},[
    el('h1',{text:ar?'الحوارات والمحادثات':'Dialogues & Conversations'}),
    el('p',{text:ar?'44 حواراً من الكتاب، مرتبة حسب المستوى مع ترجمة عربية لكل جملة.':'44 book dialogues organised by level, with Arabic translation for every line.'})
  ]);
  if (id >= 1 && id <= 44) {
    let dialogue;
    try { dialogue = (await import(`../dialogues/dialogue-${String(id).padStart(2,'0')}.js`)).default; }
    catch { view.replaceChildren(head,el('div',{class:'card',text:ar?'تعذر تحميل هذا الحوار حالياً. تأكد من اتصالك بالإنترنت ثم أعد المحاولة.':'This dialogue could not be loaded. Check your connection and try again.'}),el('a',{class:'btn',href:'#/dialogues',text:ar?'العودة للقائمة':'Back to dialogues'})); return; }
    const settings = getSettings();
    const showArabic = settings.bookDialoguesShowArabic !== false;
    const lineNodes = [];
    for (const group of dialogue.groups || []) {
      if (group.label) lineNodes.push(el('h3',{class:'book-dialogue-group',text:group.label}));
      for (const line of group.lines || []) {
        const [speaker,en,translation] = line;
        const arLine = el('p',{class:'book-dialogue-ar',dir:'rtl',text:translation});
        arLine.hidden = !showArabic;
        lineNodes.push(el('article',{class:'book-dialogue-line'},[
          el('div',{class:'book-dialogue-line-top'},[
            el('strong',{class:'book-dialogue-speaker',text:speaker}),
            el('button',{class:'btn btn-sm btn-ghost',type:'button',text:ar?'استمع':'Listen',onclick:()=>{if(speechSupported()) speak(en,{rate:settings.rate||0.9,voiceURI:settings.voiceURI||''}); else alert(ar?'النطق غير متاح في هذا المتصفح':'Speech is not available in this browser');}},)
          ]),
          el('p',{class:'book-dialogue-en',text:en}),
          arLine
        ]));
      }
    }
    const toggle = el('button',{class:'btn btn-ghost',text:showArabic?(ar?'إخفاء الترجمة':'Hide translations'):(ar?'إظهار الترجمة':'Show translations'),onclick:()=>{const next=lineNodes.filter(n=>n.classList?.contains('book-dialogue-line')).flatMap(n=>[...n.querySelectorAll('.book-dialogue-ar')]);const hide=next.some(n=>!n.hidden);next.forEach(n=>n.hidden=hide);toggle.textContent=hide?(ar?'إظهار الترجمة':'Show translations'):(ar?'إخفاء الترجمة':'Hide translations');}});
    const allText=(dialogue.groups||[]).flatMap(g=>(g.lines||[]).map(line=>line[1])).join('. ');
    const listenAll=el('button',{class:'btn btn-primary',text:ar?'استمع للحوار كاملاً':'Listen to full dialogue',onclick:()=>{if(speechSupported()) speak(allText,{rate:settings.rate||0.9,voiceURI:settings.voiceURI||''});}});
    view.replaceChildren(el('a',{class:'breadcrumb',href:'#/dialogues',text:ar?'← كل الحوارات':'← All dialogues'}),head,el('div',{class:'card book-dialogue-detail'},[
      el('div',{class:'book-dialogue-detail-head'},[el('span',{class:'chip',text:ar?'المستوى':'Level'}+' '+dialogue.level),el('h2',{text:ar?dialogue.titleAr:dialogue.title}),el('p',{class:'muted',text:dialogue.title})]),
      el('div',{class:'row book-dialogue-actions'},[listenAll,toggle]),
      ...lineNodes
    ]));
    return;
  }
  const search = el('input',{class:'input book-dialogue-search',type:'search',placeholder:ar?'ابحث عن حوار...':'Search dialogues...', 'aria-label':ar?'ابحث عن حوار':'Search dialogues'});
  const filter = el('div',{class:'row book-dialogue-levels'},[
    el('button',{class:'btn btn-primary',text:ar?'المستوى الأول':'Level One',onclick:()=>showLevel(1)}),
    el('button',{class:'btn btn-ghost',text:ar?'المستوى الثاني':'Level Two',onclick:()=>showLevel(2)}),
    el('button',{class:'btn btn-ghost',text:ar?'الكل':'All',onclick:()=>showLevel(0)})
  ]);
  const list = el('div',{class:'book-dialogue-list'});
  let level=0;
  function draw() {
    const q=search.value.trim().toLowerCase();
    list.replaceChildren(...META.map((m,i)=>({m,i,id:i+1})).filter(x=>(!level||(level===1?x.id<=11:x.id>=12))&&(!q||x.m.join(' ').toLowerCase().includes(q)||String(x.id).includes(q))).map(x=>el('a',{class:'card book-dialogue-card',href:`#/dialogues/${x.id}`},[
      el('span',{class:'book-dialogue-number',text:String(x.id).padStart(2,'0')}),
      el('div',{class:'grow'},[el('strong',{text:ar?x.m[1]:x.m[0]}),el('span',{class:'muted small',text:ar?x.m[0]:x.m[1]})]),
      el('span',{class:'chip',text:x.id<=11?(ar?'المستوى الأول':'Level One'):(ar?'المستوى الثاني':'Level Two')})
    ])));
  }
  function showLevel(next){level=next;draw();}
  search.addEventListener('input',draw);
  view.replaceChildren(head,el('div',{class:'card book-dialogues-toolbar'},[search,filter]),list);
  showLevel(0);
}
