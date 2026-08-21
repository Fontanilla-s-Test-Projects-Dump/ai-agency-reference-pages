const figure = document.querySelector('.hero-figure');
window.addEventListener('pointermove', (event) => {
  if (!figure || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const x = (event.clientX / innerWidth - .5) * 7;
  const y = (event.clientY / innerHeight - .5) * 7;
  figure.style.transform = `translate(${x}px, ${y}px)`;
});
