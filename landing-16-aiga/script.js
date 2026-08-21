document.querySelectorAll('.question-list button').forEach((button) => button.addEventListener('click', () => {
  const answer = button.nextElementSibling;
  const open = answer.classList.toggle('open');
  button.querySelector('b').textContent = open ? '−' : '+';
}));
