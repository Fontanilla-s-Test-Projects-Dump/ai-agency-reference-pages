const buttons = document.querySelectorAll('.stack-card');
const panel = document.querySelector('.panel');
const copy = {
  sense: ['SELECTED LAYER','Context is a competitive advantage.','We join your notes, systems, and hard-won pattern recognition into a layer your team can actually use.'],
  decide: ['SELECTED LAYER','Make the trade-off visible.','A decision is easier to move when the options, constraints, and consequences are in the same frame.'],
  ship: ['SELECTED LAYER','Keep the answer moving.','The useful system does not stop at the recommendation. It carries the next action to the person who owns it.']
};
buttons.forEach((button) => button.addEventListener('click', () => {
  buttons.forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  const data = copy[button.dataset.panel];
  panel.querySelector('span').textContent = data[0];
  panel.querySelector('h3').textContent = data[1];
  panel.querySelector('p').textContent = data[2];
}));
document.querySelectorAll('[data-scroll]').forEach((button) => button.addEventListener('click', () => document.querySelector(button.dataset.scroll)?.scrollIntoView({behavior:'smooth'})));
