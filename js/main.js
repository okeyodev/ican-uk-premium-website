// main.js
import { initScroll } from './scroll.js';
import { initReveal } from './reveal.js';
import { initParallax } from './parallax.js';
import { initCards } from './cards.js';
import { initTimeline } from './timeline.js';
import { initObjectives } from './objectives.js';
import { initMagazine } from './magazine.js';
import { initCountdown } from './countdown.js';
import { initThree } from './three/init.js';

async function init(){
  initScroll();
  initReveal();
  initParallax();
  initCards();
  initTimeline();
  initObjectives();
  initMagazine();
  initCountdown();
  initThree();
}
document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
