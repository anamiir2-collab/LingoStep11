/* ============================================================
   LingoStep — book-dialogues.js
   Dialogue library (44 book dialogues, Level One & Level Two)
   + dialogue detail view with per-line listen and a launch
   point for the listen-and-type practice (#/dialogue-practice/:id).

   Notes:
   - Every dialogue loads from its own module in dialogues/.
     Five books ship under alias files (23a, 34b, 35a, 36a, 39a).
   - All interface text goes through i18n.js.
   - Original dialogue text and Arabic translations are never
     modified here — they are rendered as-is via textContent.
   ============================================================ */

import { el, toast } from './utils.js';
import { speak, stopSpeaking, isSupported as speechSupported } from './speech.js';
import { getSettings } from './settings.js';
import { t } from './i18n.js';

const META = [
["Hello, I'm Khaled","التعارف"],["This is my family","العائلة"],["Colours","الألوان"],["My clothes","شراء الملابس"],["Where are you from?","لعبة التخمين"],["Today is Friday","الترتيب والخطط"],["Personal Details","مقابلة عمل وبيانات شخصية"],["Is there...?","السؤال عن المكان"],["Whose dog is this?","الملكية"],["Amira's Family","شجرة العائلة"],["At the Supermarket","في السوبر ماركت"],["What's the time?","السؤال عن الوقت"],["A lot of Arabs speak English","لغات العرب"],["How old is your grandmother?","السؤال عن العمر"],["What are you doing now?","الأنشطة اليومية"],["I like gardening","الهوايات والطقس"],["She has got long straight hair","وصف الشخص"],["Can you spell your name?","التهجئة والجمارك"],["Directions","الاتجاهات"],["At the restaurant","في المطعم"],["I didn't sleep well last night","السهر والحفلات"],["At what time did you come home?","السؤال عن العودة"],["What's the date today?","تاريخ اليوم"],["At the dentist","عند طبيب الأسنان"],["It's colder than here","المقارنات والوصف"],["Comparisons","المقارنات السريعة"],["The busiest street in the world","التفضيل والآراء"],["It's going to rain","التنبؤ بالمستقبل"],["There aren't many biscuits","المطبخ والمشتريات"],["What are you going to do on Christmas Day?","المناسبات والتمنيات"],["The train is coming soon","القرارات السريعة"],["They've gone to the cinema","التأخير عن المنزل"],["Have you ever been to Mexico?","السفر والرحلات"],["How long have you stayed there?","التخطيط للإجازة"],["The negative","النفي واقتراح المساعدة"],["Would you like some tea?","الضيافة"],["There's a little but not much","التسوق والكميات"],["You have to pay for the prescription","استشارة الطبيب"],["If I were you","تقديم النصيحة"],["It's a lovely day, isn't it?","الأسئلة المذيلة"],["Punctuation Marks / Job Interview","مقابلة وظيفية"],["How lovely to hear from you!","اتصال بين صديقين"],["Phone conversations","مكالمات هاتفية"],["What's... Like?","الشخصية والتفضيلات"]
];

const ALIASES = { 23: '23a', 34: '34b', 35: '35a', 36: '36a', 39: '39a' };

function dialoguePath(id) {
  const file = ALIASES[id] ? 'dialogue-' + ALIASES[id] + '.js' : 'dialogue-' + String(id).padStart(2, '0') + '.js';
  return '../dialogues/' + file;
}

function levelOf(id) { return id <= 11 ? 1 : 2; }

/** Speak or stop. Toggles the button between "listen" and "stop" states. */
function toggleSpeech(button, text, settings, labels) {
  const active = button.dataset.speaking === '1';
  if (active) {
    stopSpeaking();
    button.dataset.speaking = '0';
    button.textContent = labels.play;
    return;
  }
  if (!speechSupported()) {
    stopSpeaking();
    button.dataset.speaking = '0';
    button.textContent = labels.play;
    toast(labels.unsupported);
    return;
  }
  speak(text, { rate: settings.rate || 0.9, voiceURI: settings.voiceURI || '', onend: () => {
    button.dataset.speaking = '0';
    button.textContent = labels.play;
  } });
  button.dataset.speaking = '1';
  button.textContent = labels.stop;
}

export async function renderBookDialoguesView(view, params = [], lang = 'en') {
  const L = lang === 'ar' ? 'ar' : 'en';
  const T = (key, vars) => t(L, key, vars);
  const ar = L === 'ar';
  const id = Number(params[0]);

  const head = el('div', { class: 'page-head' }, [
    el('h1', { text: T('dlgLibTitle') }),
    el('p', { text: T('dlgLibIntro') }),
  ]);

  /* ---------- dialogue detail ---------- */
  if (id >= 1 && id <= 44) {
    let dialogue;
    try { dialogue = (await import(dialoguePath(id))).default; }
    catch {
      view.replaceChildren(head,
        el('div', { class: 'card dlg-error', role: 'alert', text: T('dlgLibLoadError') }),
        el('a', { class: 'btn', href: '#/dialogues', text: T('dlgBackToList') }));
      return;
    }
    if (!dialogue || !Array.isArray(dialogue.groups)) {
      view.replaceChildren(head,
        el('div', { class: 'card dlg-error', role: 'alert', text: T('dlgLibLoadError') }),
        el('a', { class: 'btn', href: '#/dialogues', text: T('dlgBackToList') }));
      return;
    }
    const settings = getSettings();
    const showArabic = settings.bookDialoguesShowArabic !== false;
    const lineCount = (dialogue.groups || []).reduce((n, g) => n + (g.lines || []).length, 0);
    const lineNodes = [];
    for (const group of dialogue.groups || []) {
      if (group.label) lineNodes.push(el('h3', { class: 'book-dialogue-group', text: group.label }));
      for (const line of group.lines || []) {
        const [speaker, en, translation] = line;
        const arLine = el('p', { class: 'book-dialogue-ar', dir: 'rtl', lang: 'ar', text: translation });
        arLine.hidden = !showArabic;
        const listenBtn = el('button', {
          class: 'btn btn-sm btn-ghost book-line-listen', type: 'button',
          'aria-label': T('play') + ' — ' + en,
          text: T('play'),
          onclick: () => toggleSpeech(listenBtn, en, settings, { play: T('play'), stop: T('dlgStopAudio'), unsupported: T('dlgSpeechUnsupported') }),
        });
        lineNodes.push(el('article', { class: 'book-dialogue-line' }, [
          el('div', { class: 'book-dialogue-line-top' }, [
            el('strong', { class: 'book-dialogue-speaker', dir: 'ltr', text: speaker }),
            listenBtn,
          ]),
          el('p', { class: 'book-dialogue-en', dir: 'ltr', text: en }),
          arLine,
        ]));
      }
    }
    const toggle = el('button', {
      class: 'btn btn-ghost', type: 'button', text: showArabic ? T('dlgHideTranslations') : T('dlgShowTranslations'),
      onclick: () => {
        const next = lineNodes.filter((n) => n.classList?.contains('book-dialogue-line')).flatMap((n) => [...n.querySelectorAll('.book-dialogue-ar')]);
        const hide = next.some((n) => !n.hidden);
        next.forEach((n) => { n.hidden = hide; });
        toggle.textContent = hide ? T('dlgShowTranslations') : T('dlgHideTranslations');
      },
    });
    const allText = (dialogue.groups || []).flatMap((g) => (g.lines || []).map((line) => line[1])).join('. ');
    const listenAll = el('button', {
      class: 'btn btn-primary', type: 'button', text: T('dlgListenFull'),
      onclick: () => toggleSpeech(listenAll, allText, settings, { play: T('dlgListenFull'), stop: T('dlgStopAudio'), unsupported: T('dlgSpeechUnsupported') }),
    });
    view.replaceChildren(
      el('a', { class: 'breadcrumb', href: '#/dialogues', text: T('dlgAllDialogues') }),
      head,
      el('div', { class: 'card book-dialogue-detail' }, [
        el('div', { class: 'book-dialogue-detail-head' }, [
          el('span', { class: 'chip chip-level', text: T('dlgLevel') + ' ' + dialogue.level }),
          el('span', { class: 'chip', text: T('dlgSentencesCount', { n: lineCount }) }),
          el('h2', { dir: 'ltr', text: dialogue.title || '' }),
          el('p', { class: 'muted', dir: 'rtl', lang: 'ar', text: dialogue.titleAr || '' }),
        ]),
        el('div', { class: 'row book-dialogue-actions' }, [
          listenAll,
          toggle,
          el('a', { class: 'btn btn-primary', href: '#/dialogue-practice/' + id, text: T('dlgStartPractice') }),
        ]),
        ...lineNodes,
      ])
    );
    return;
  }

  /* ---------- library list ---------- */
  const search = el('input', {
    class: 'input book-dialogue-search', type: 'search',
    placeholder: T('dlgSearchPlaceholder'),
    'aria-label': T('dlgSearchLabel'),
  });
  const levelBtns = new Map();
  function markActiveLevel() {
    for (const [value, btn] of levelBtns) {
      const active = value === level;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    }
  }
  const filter = el('div', { class: 'row book-dialogue-levels', role: 'group', 'aria-label': T('dlgLevel') }, [
    (() => { const b = el('button', { class: 'btn btn-ghost', type: 'button', text: T('dlgLevelOne'), onclick: () => { level = 1; markActiveLevel(); draw(); } }); levelBtns.set(1, b); return b; })(),
    (() => { const b = el('button', { class: 'btn btn-ghost', type: 'button', text: T('dlgLevelTwo'), onclick: () => { level = 2; markActiveLevel(); draw(); } }); levelBtns.set(2, b); return b; })(),
    (() => { const b = el('button', { class: 'btn btn-ghost', type: 'button', text: T('dlgAll'), onclick: () => { level = 0; markActiveLevel(); draw(); } }); levelBtns.set(0, b); return b; })(),
  ]);
  const list = el('div', { class: 'book-dialogue-list' });
  let level = 0;

  function draw() {
    const q = search.value.trim().toLowerCase();
    const cards = META.map((m, i) => ({ m, i, id: i + 1 }))
      .filter((x) => (!level || levelOf(x.id) === level) && (!q || x.m.join(' ').toLowerCase().includes(q) || String(x.id).includes(q)))
      .map((x) => {
        const card = el('a', { class: 'card book-dialogue-card', href: '#/dialogues/' + x.id }, [
          el('span', { class: 'book-dialogue-number', 'aria-hidden': 'true', text: String(x.id).padStart(2, '0') }),
          el('div', { class: 'grow' }, [
            el('strong', { dir: 'ltr', text: ar ? x.m[1] : x.m[0] }),
            el('span', { class: 'muted small', dir: 'auto', text: ar ? x.m[0] : x.m[1] }),
            el('span', { class: 'muted small book-dialogue-count', 'data-id': String(x.id), text: '' }),
          ]),
          el('span', { class: 'chip', text: levelOf(x.id) === 1 ? T('dlgLevelOne') : T('dlgLevelTwo') }),
        ]);
        return card;
      });
    list.replaceChildren(...cards);
    markActiveLevel();
  }

  // Sentence counts are enriched asynchronously from the real modules —
  // the list renders immediately and counts appear when modules resolve.
  (async () => {
    const counts = await Promise.allSettled(META.map((_, i) => import(dialoguePath(i + 1))));
    counts.forEach((res, i) => {
      if (res.status !== 'fulfilled') return;
      const d = res.value?.default;
      const n = d && Array.isArray(d.groups) ? d.groups.reduce((acc, g) => acc + (g.lines || []).length, 0) : 0;
      if (!n) return;
      const nodes = list.querySelectorAll('.book-dialogue-count[data-id="' + (i + 1) + '"]');
      nodes.forEach((node) => { node.textContent = T('dlgSentencesCount', { n }); });
    });
  })();

  search.addEventListener('input', draw);
  view.replaceChildren(head, el('div', { class: 'card book-dialogues-toolbar' }, [search, filter]), list);
  draw();
}
