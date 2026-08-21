const root = document.documentElement;
const art = document.querySelector('.hero-art');
window.addEventListener('pointermove', (event) => {
  if (!art || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const box = art.getBoundingClientRect();
  const x = ((event.clientX - box.left) / box.width - .5) * 10;
  const y = ((event.clientY - box.top) / box.height - .5) * 10;
  art.style.transform = `perspective(900px) rotateY(${x * .18}deg) rotateX(${-y * .18}deg)`;
});
document.querySelectorAll('.reveal').forEach((item) => {
  const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { item.classList.add('in'); observer.disconnect(); } }, {threshold:.12});
  observer.observe(item);
});
