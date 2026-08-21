const route = document.querySelector('.route');
window.addEventListener('pointermove', (event) => {
  if (!route || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const box = route.getBoundingClientRect();
  route.style.setProperty('--trace-x', `${((event.clientX - box.left) / box.width) * 100}%`);
  route.style.setProperty('--trace-y', `${((event.clientY - box.top) / box.height) * 100}%`);
});
document.querySelectorAll('.route-node').forEach((node) => node.addEventListener('click', () => {
  document.querySelectorAll('.route-node').forEach((item) => item.style.background = 'var(--coal)');
  node.style.background = 'var(--acid)'; node.style.color = 'var(--black)';
}));
