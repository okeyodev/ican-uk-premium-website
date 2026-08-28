
import { initConferenceHero } from './hero.js';
import { initConferenceCore } from './conference-core.js';
import { initAgenda } from './agenda.js';
import { initSpeakers } from './speakers.js';
import { initPricing } from './pricing.js';
import { initCountdown } from './countdown.js';
import { initVenue } from './venue.js';
import { initFAQ } from './faq.js';
import { initConferenceThree } from './three-init.js';

function initConferencePage(){
  initConferenceHero();
  initConferenceCore();
  initAgenda();
  initSpeakers();
  initPricing();
  initCountdown();
  initVenue();
  initFAQ();
  initConferenceThree();

  // Mobile register bar
  const bar = document.getElementById('mobileRegisterBar');
  const hero = document.querySelector('.conf-hero');
  if(bar && hero && 'IntersectionObserver' in window){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting){
          bar.classList.add('is-visible');
        } else {
          bar.classList.remove('is-visible');
        }
      });
    }, {threshold:0});
    obs.observe(hero);
  }

  // Sticky nav active state based on section
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.conf-nav a[href^="#"]');
  if('IntersectionObserver' in window && sections.length){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          navLinks.forEach(a=>a.classList.remove('is-active'));
          const active = document.querySelector(`.conf-nav a[href="#${entry.target.id}"]`);
          if(active) active.classList.add('is-active');
        }
      });
    }, {threshold:0.4});
    sections.forEach(s=>obs.observe(s));
  }
}

document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', initConferencePage) : initConferencePage();
