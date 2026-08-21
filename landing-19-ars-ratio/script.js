const horizon = document.querySelector('.horizon img');
window.addEventListener('scroll', () => {
  if (!horizon || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  horizon.style.transform = `translateY(${Math.min(scrollY * .02, 12)}px) scale(1.02)`;
});
