const hero = document.querySelector('.hero');
window.addEventListener('pointermove', (event) => {
  if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const x = (event.clientX / window.innerWidth - .5) * 8;
  const y = (event.clientY / window.innerHeight - .5) * 8;
  hero.style.backgroundPosition = `${x}px ${y}px, ${-x}px ${y * -1}px, ${x * -.5}px ${y}px`;
});
const clock = document.querySelector('.hero-foot span:last-of-type');
let seconds = 0;
setInterval(() => { seconds = (seconds + 1) % 60; if (clock) clock.textContent = `SYNC / 00:${String(seconds).padStart(2,'0')}`; }, 1000);
