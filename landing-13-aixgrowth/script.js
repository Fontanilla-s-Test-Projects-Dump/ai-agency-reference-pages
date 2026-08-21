const ticker = document.querySelector('.ticker');
ticker?.addEventListener('mouseenter', () => ticker.querySelectorAll('span').forEach((item) => item.style.animationPlayState = 'paused'));
ticker?.addEventListener('mouseleave', () => ticker.querySelectorAll('span').forEach((item) => item.style.animationPlayState = 'running'));
const image = document.querySelector('.hero-photo img');
window.addEventListener('scroll', () => { if (image && !matchMedia('(prefers-reduced-motion: reduce)').matches) image.style.transform = `translateY(${Math.min(scrollY * .025, 12)}px)`; });
