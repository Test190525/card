import gsap from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
  gsap.fromTo('#logo', { x: -100 }, { x: 0, duration: 1 });
});