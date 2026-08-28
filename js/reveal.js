// reveal.js
export function initReveal(){
  const els = document.querySelectorAll('[data-reveal]');
  if(!('IntersectionObserver' in window)){
    els.forEach(el=>el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        // Web Animations API for extra polish
        if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
          entry.target.animate(
            [{opacity:0, transform:'translateY(30px)'},{opacity:1, transform:'translateY(0)'}],
            {duration:700, easing:'cubic-bezier(.22,1,.36,1)', fill:'both'}
          );
        }
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.15, rootMargin:'0px 0px -40px 0px'});
  els.forEach(el=>observer.observe(el));
}
