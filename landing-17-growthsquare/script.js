const heroCenter = document.querySelector('.hero-center');
window.addEventListener('pointermove', (event) => {
  if (!heroCenter || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const x = (event.clientX / innerWidth - .5) * 7;
  const y = (event.clientY / innerHeight - .5) * 7;
  heroCenter.style.transform = `translate(${x * .25}px, ${y * .25}px)`;
});
