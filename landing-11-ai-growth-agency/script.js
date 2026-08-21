const notes = document.querySelectorAll('.floating-note');
window.addEventListener('scroll', () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const shift = Math.min(window.scrollY * .06, 18);
  notes.forEach((note, index) => { note.style.translate = `0 ${index ? shift : -shift}px`; });
});
const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.animate([{opacity:0, transform:'translateY(18px)'},{opacity:1, transform:'translateY(0)'}], {duration:650, easing:'cubic-bezier(.2,.8,.2,1)', fill:'forwards'}); reveal.unobserve(entry.target); }
}), {threshold:.15});
document.querySelectorAll('.work,.approach,.hello').forEach((section) => reveal.observe(section));
