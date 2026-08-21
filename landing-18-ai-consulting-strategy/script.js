document.querySelectorAll('.model-grid article').forEach((card, index) => card.addEventListener('mouseenter', () => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  card.style.transform = `translateY(${index % 2 ? '-5px' : '5px'})`;
}));
document.querySelectorAll('.model-grid article').forEach((card) => card.addEventListener('mouseleave', () => card.style.transform = ''));
