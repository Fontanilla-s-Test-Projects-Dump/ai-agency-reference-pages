const artifact = document.querySelector('.artifact');
window.addEventListener('scroll', () => {
  if (!artifact || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const number = artifact.querySelector('.big-number');
  number.style.transform = `translateY(${Math.min(scrollY * .018, 13)}px)`;
});
