const nextTurnBtn = document.getElementById('nextTurnBtn');
const turnBadge = document.getElementById('turnBadge');
const turnMeta = document.getElementById('turnMeta');
const turnPrompt = document.getElementById('turnPrompt');
const turnCopy = document.getElementById('turnCopy');
const wrapHeader = document.getElementById('wrapHeader');
const wrapBody = document.getElementById('wrapBody');
const peekBtn = document.getElementById('peekBtn');
const peekPanel = document.getElementById('peekPanel');

const turns = [
  {
    badge: 'Turn 1',
    meta: 'Heavily scaffolded',
    prompt: 'The waiter asks what you’d like. Start with: “Je voudrais…”',
    copy: 'The first turn is nearly impossible to fail. It proves the learner can pull a familiar phrase into context.',
    wrapHeader: 'From phrase to conversation',
    wrapBody: 'After 3 short turns, show that the learner moved from repetition into actual conversational retrieval.'
  },
  {
    badge: 'Turn 2',
    meta: 'Partially prompted',
    prompt: 'Now add one detail: what drink would you like with it?',
    copy: 'The second turn uses mostly familiar language but introduces one small stretch so the learner adapts, not just repeats.',
    wrapHeader: 'Middle rung',
    wrapBody: 'This is where the prototype earns its keep: not pure recall, not full freestyle — a realistic middle step.'
  },
  {
    badge: 'Turn 3',
    meta: 'Freer final turn',
    prompt: 'The waiter didn’t hear you. Say the whole request again naturally.',
    copy: 'The third turn is freer. The learner now has to retrieve the phrase in a lightly pressured but still safe context.',
    wrapHeader: 'End state',
    wrapBody: 'Close with a small progress message like “You just used your café phrases in a mini conversation.”'
  }
];

let idx = 0;
if (nextTurnBtn) {
  nextTurnBtn.addEventListener('click', () => {
    idx = (idx + 1) % turns.length;
    const turn = turns[idx];
    turnBadge.textContent = turn.badge;
    turnMeta.textContent = turn.meta;
    turnPrompt.textContent = turn.prompt;
    turnCopy.textContent = turn.copy;
    wrapHeader.textContent = turn.wrapHeader;
    wrapBody.textContent = turn.wrapBody;
    nextTurnBtn.textContent = idx === turns.length - 1 ? 'Reset turns' : 'Next turn';
    if (idx === 0) nextTurnBtn.textContent = 'Next turn';
  });
}

if (peekBtn && peekPanel) {
  peekBtn.addEventListener('click', () => {
    const hidden = peekPanel.classList.toggle('hidden');
    peekBtn.setAttribute('aria-expanded', String(!hidden));
    peekBtn.textContent = hidden ? 'Show example stretch' : 'Hide example stretch';
  });
}
