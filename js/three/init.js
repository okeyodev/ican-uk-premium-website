// three/init.js - optional enhancement
export async function initThree(){
  const canvas = document.getElementById('three-canvas');
  if(!canvas) return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if(!('WebGLRenderingContext' in window)) return;

  const quality = getDeviceQuality();
  if(quality === 'low') return; // respect low-end

  try{
    const THREE = await import('https://unpkg.com/three@0.160.0/build/three.module.js');
    const { initParticles } = await import('./particles.js');
    initParticles(THREE, canvas, quality);
  }catch(e){
    console.warn('Three.js optional layer failed, CSS 3D continues', e);
  }
}

function getDeviceQuality(){
  const mem = navigator.deviceMemory || 4;
  const cores = navigator.hardwareConcurrency || 4;
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  if(mem <= 2 || cores <= 2 || isMobile) return 'medium';
  if(mem <= 4) return 'medium';
  return 'high';
}
