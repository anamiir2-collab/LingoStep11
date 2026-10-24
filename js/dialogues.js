import { el } from './utils.js';
import { speak, stopSpeaking, isSupported as speechSupported } from './speech.js';
import { isAcceptable, wordDiff } from './grading.js';
import { getSettings } from './settings.js';

const ALIASES = { 23: '23a', 34: '34b', 35: '35a', 36: '36a', 39: '39a' };

async function loadDialogue(id) {
  const file = ALIASES[id] ? ALIASES[id] : String(id).padStart(2, '0');
  return (await import('../dialogues/dialogue-' + file + '.js')).default;
}

export async function renderDialoguePractice(view, params = [], lang = 'en') {
  const ar = lang === 'ar';
  const id = Number(params[0]);
  const settings = getSettings();
  let dialogue;
  try {
    if (!Number.isInteger(id) || id < 1 || id > 44) throw new Error('Invalid dialogue');
    dialogue = await loadDialogue(id);
  } catch {
    view.replaceChildren(
      el('div', { class: 'card', text: ar ? 'تعذر تحميل الحوار. حاول مرة أخرى.' : 'Could not load this dialogue. Please try again.' }),
      el('a', { class: 'btn', href: '#/dialogues', text: ar ? 'العودة للحوارات' : 'Back to dialogues' })
    );
    return;
  }

  const exercises = (dialogue.groups || []).flatMap(group =>
    (group.lines || []).map(([speaker, en, translation]) => ({ speaker, en, ar: translation }))
  );
  let index = 0;
  let correct = 0;
  let locked = false;
  const history = el('div', { class: 'chat-history', role: 'log', 'aria-live': 'polite' });
  const counter = el('span', { class: 'chip' });
  const hint = el('p', { class: 'dialogue-practice-hint', dir: 'rtl' });
  const input = el('input', { class: 'input dialogue-practice-input', type: 'text', autocomplete: 'off', placeholder: ar ? 'اكتب الجملة التي تسمعها...' : 'Type what you hear...', 'aria-label': ar ? 'اكتب الجملة الإنجليزية' : 'Type the English sentence' });
  const feedback = el('p', { class: 'dialogue-practice-feedback', role: 'status', 'aria-live': 'polite' });
  const check = el('button', { class: 'btn btn-primary', type: 'button', text: ar ? 'تحقق' : 'Check' });
  const skip = el('button', { class: 'btn btn-ghost', type: 'button', text: ar ? 'تخطي' : 'Skip' });
  const play = el('button', { class: 'btn btn-primary dialogue-audio-button', type: 'button', text: ar ? 'استمع' : 'Listen' });
  const slow = el('button', { class: 'btn btn-ghost', type: 'button', text: ar ? 'استمع ببطء' : 'Slow listen' });
  const exercisePanel = el('section', { class: 'card exercise-panel' }, [
    el('div', { class: 'dialogue-practice-top' }, [counter, el('span', { class: 'chip', text: ar ? 'استمع واكتب' : 'Listen & type' })]),
    el('h2', { class: 'dialogue-practice-title', text: ar ? 'اكتب ما تسمعه' : 'TYPE WHAT YOU HEAR' }),
    el('div', { class: 'dialogue-practice-audio' }, [play, slow]),
    hint,
    el('div', { class: 'dialogue-practice-typing' }, [input]),
    feedback,
    el('div', { class: 'dialogue-practice-actions' }, [check, skip])
  ]);
  const chatPanel = el('section', { class: 'card chat-panel' }, [
    el('h3', { class: 'chat-header', text: ar ? 'سجل المحادثة' : 'Conversation History' }),
    history
  ]);
  const title = el('h1', { text: ar ? 'تدريب المحادثة' : 'Dialogue practice' });
  const subtitle = el('p', { class: 'muted', text: ar ? (dialogue.titleAr || dialogue.title) : dialogue.title });
  const back = el('a', { class: 'btn btn-ghost', href: '#/dialogues/' + id, text: ar ? 'العودة للحوار' : 'Back to dialogue' });
  const layout = el('div', { class: 'dialogues-container' }, [exercisePanel, chatPanel]);
  view.replaceChildren(el('div', { class: 'page-head' }, [title, subtitle, back]), layout);

  function addMessage(text, sender, skipped = false) {
    const row = el('div', { class: 'chat-message ' + (sender === 'ai' ? 'message-ai' : 'message-user') + (skipped ? ' skipped' : '') }, [
      el('div', { class: 'bubble ' + (sender === 'ai' ? 'bubble-ai' : 'bubble-user'), dir: 'ltr', text })
    ]);
    history.appendChild(row);
    history.scrollTop = history.scrollHeight;
  }

  function renderSentence() {
    locked = false;
    feedback.textContent = '';
    input.classList.remove('correct-border', 'wrong-border');
    input.disabled = false;
    check.disabled = false;
    skip.disabled = false;
    if (index >= exercises.length) {
      counter.textContent = ar ? 'اكتمل الدرس' : 'Lesson complete';
      hint.textContent = '';
      input.value = '';
      input.disabled = true;
      check.disabled = true;
      skip.disabled = true;
      play.disabled = true;
      slow.disabled = true;
      feedback.textContent = ar ? 'أحسنت! إجابات صحيحة: ' + correct + ' من ' + exercises.length : 'Great work! Correct: ' + correct + ' of ' + exercises.length;
      addMessage(ar ? 'أحسنت! لقد أكملت هذا الحوار.' : 'Great job! You have completed this dialogue.', 'ai');
      stopSpeaking();
      return;
    }
    const item = exercises[index];
    counter.textContent = ar ? 'الجملة ' + (index + 1) + ' من ' + exercises.length : 'Sentence ' + (index + 1) + ' of ' + exercises.length;
    hint.textContent = item.ar || '';
    input.value = '';
    addMessage(item.en, 'ai');
    input.focus({ preventScroll: true });
    playSentence(false);
  }

  function playSentence(isSlow) {
    const item = exercises[index];
    if (!item || !speechSupported()) {
      feedback.textContent = ar ? 'النطق غير مدعوم في هذا المتصفح.' : 'Speech is not supported in this browser.';
      return;
    }
    speak(item.en, { rate: isSlow ? Math.max(0.55, (settings.rate || 0.9) * 0.65) : (settings.rate || 0.9), voiceURI: settings.voiceURI || '' });
  }

  function checkAnswer() {
    if (locked || index >= exercises.length) return;
    const answer = input.value.trim();
    if (!answer) {
      feedback.textContent = ar ? 'اكتب إجابتك أولاً.' : 'Type an answer first.';
      return;
    }
    const item = exercises[index];
    const accepted = isAcceptable(answer, [item.en], { strict: settings.strictGrading !== false });
    if (accepted) {
      locked = true;
      correct++;
      addMessage(answer, 'user');
      input.classList.add('correct-border');
      feedback.textContent = ar ? 'إجابة صحيحة، ممتاز!' : 'Correct — well done!';
      index++;
      window.setTimeout(renderSentence, 500);
    } else {
      input.classList.add('wrong-border');
      feedback.textContent = ar ? 'مش مطابقة تمامًا. راجع الكلمات وجرب تاني.' : 'Not quite. Check the words and try again.';
      const diff = wordDiff(answer, item.en);
      feedback.title = diff.missing.length ? (ar ? 'كلمات ناقصة: ' : 'Missing words: ') + diff.missing.map(w => w.text).join(', ') : '';
    }
  }

  function skipSentence() {
    if (locked || index >= exercises.length) return;
    const item = exercises[index];
    addMessage(item.en, 'user', true);
    index++;
    renderSentence();
  }

  play.addEventListener('click', () => playSentence(false));
  slow.addEventListener('click', () => playSentence(true));
  check.addEventListener('click', checkAnswer);
  skip.addEventListener('click', skipSentence);
  input.addEventListener('keydown', event => { if (event.key === 'Enter') checkAnswer(); });
  renderSentence();
}
