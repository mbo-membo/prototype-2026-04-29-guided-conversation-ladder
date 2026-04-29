const states = [
  {
    stepLabel: '1/3',
    stepMeta: 'warm-up',
    title: 'Café conversation',
    subtitle: 'Answer naturally in 3 short turns.',
    hintLevel: 'Guided',
    sceneText: "You're ordering at a café. Keep it short and natural.",
    waiterLine: 'Bonjour ! Vous voulez commander ?',
    coachText: 'Begin with: <strong>Je voudrais…</strong>',
    reply: "Je voudrais un café, s'il vous plaît.",
    chips: ['Je voudrais…', 'un café', "s'il vous plaît"],
    feedbackTitle: 'That sounds natural.',
    feedbackBody: 'You used a phrase you already know in a real situation.',
    feedbackBadge: 'Clear start',
    primary: 'Next turn',
    secondary: 'See translation'
  },
  {
    stepLabel: '2/3',
    stepMeta: 'stretch',
    title: 'Add one small detail',
    subtitle: 'The waiter asks a follow-up. Adapt your answer.',
    hintLevel: 'Less guided',
    sceneText: 'Same café, but now you need to respond with a drink too.',
    waiterLine: 'Et pour boire ?',
    coachText: 'Use your café phrase, then add a drink.',
    reply: "Un café et une eau, s'il vous plaît.",
    chips: ['un café', 'et une eau', "s'il vous plaît"],
    feedbackTitle: 'Nice adjustment.',
    feedbackBody: 'You handled a follow-up without leaving the conversation.',
    feedbackBadge: 'Small stretch',
    primary: 'Final turn',
    secondary: 'Need a hint?'
  },
  {
    stepLabel: '3/3',
    stepMeta: 'freer',
    title: 'One more time',
    subtitle: 'Less support now. Just answer naturally.',
    hintLevel: 'Almost free',
    sceneText: 'The waiter did not catch it. Say the whole request again.',
    waiterLine: 'Pardon ?',
    coachText: 'No starter this time — just answer naturally.',
    reply: "Je voudrais un café et une eau, s'il vous plaît.",
    chips: ['Je voudrais', 'un café', 'une eau'],
    feedbackTitle: 'You just did a real mini conversation.',
    feedbackBody: 'That was not a drill anymore — you retrieved the language in context.',
    feedbackBadge: 'Conversation done',
    primary: 'Try another one',
    secondary: 'Review phrases'
  }
];

const els = {
  stepLabel: document.getElementById('stepLabel'),
  stepMeta: document.getElementById('stepMeta'),
  screenTitle: document.getElementById('screenTitle'),
  screenSubtitle: document.getElementById('screenSubtitle'),
  hintLevel: document.getElementById('hintLevel'),
  sceneText: document.getElementById('sceneText'),
  waiterLine: document.getElementById('waiterLine'),
  coachText: document.getElementById('coachText'),
  replyBox: document.getElementById('replyBox'),
  chipRow: document.getElementById('chipRow'),
  feedbackTitle: document.getElementById('feedbackTitle'),
  feedbackBody: document.getElementById('feedbackBody'),
  feedbackBadge: document.getElementById('feedbackBadge'),
  primaryBtn: document.getElementById('primaryBtn'),
  secondaryBtn: document.getElementById('secondaryBtn')
};

let index = 0;

function render(state) {
  els.stepLabel.textContent = state.stepLabel;
  els.stepMeta.textContent = state.stepMeta;
  els.screenTitle.textContent = state.title;
  els.screenSubtitle.textContent = state.subtitle;
  els.hintLevel.textContent = state.hintLevel;
  els.sceneText.textContent = state.sceneText;
  els.waiterLine.textContent = state.waiterLine;
  els.coachText.innerHTML = state.coachText;
  els.replyBox.textContent = state.reply;
  els.feedbackTitle.textContent = state.feedbackTitle;
  els.feedbackBody.textContent = state.feedbackBody;
  els.feedbackBadge.textContent = state.feedbackBadge;
  els.primaryBtn.textContent = state.primary;
  els.secondaryBtn.textContent = state.secondary;
  els.chipRow.innerHTML = state.chips.map((chip, i) => `<button class="chip${i === 0 ? ' active' : ''}">${chip}</button>`).join('');
}

els.primaryBtn?.addEventListener('click', () => {
  index = (index + 1) % states.length;
  render(states[index]);
});

render(states[index]);
