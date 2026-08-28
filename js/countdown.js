// countdown.js
export function initCountdown(){
  const el = document.getElementById('countdown');
  if(!el) return;
  const target = new Date('2026-09-20T18:00:00Z').getTime();
  function tick(){
    const now = Date.now();
    let diff = Math.max(0, target - now);
    const d = Math.floor(diff / 86400000); diff %= 86400000;
    const h = Math.floor(diff / 3600000); diff %= 3600000;
    const m = Math.floor(diff / 60000); diff %= 60000;
    const s = Math.floor(diff / 1000);
    el.innerHTML = `
      <div class="cd-box"><b>${String(d).padStart(2,'0')}</b><span>Days</span></div>
      <div class="cd-box"><b>${String(h).padStart(2,'0')}</b><span>Hours</span></div>
      <div class="cd-box"><b>${String(m).padStart(2,'0')}</b><span>Minutes</span></div>
      <div class="cd-box"><b>${String(s).padStart(2,'0')}</b><span>Seconds</span></div>
    `;
  }
  tick();
  setInterval(tick, 1000);
}
