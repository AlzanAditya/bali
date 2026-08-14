import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
gsap.registerPlugin(ScrollTrigger);
let lenis: Lenis | null = null;
export function initAnimations(){
 if(typeof window==='undefined') return ()=>{};
 lenis=new Lenis({autoRaf:false});
 lenis.on('scroll',ScrollTrigger.update);
 const raf=(time:number)=>{lenis?.raf(time*1000)}; gsap.ticker.add(raf); gsap.ticker.lagSmoothing(0);
 const ctx=gsap.context(()=>{
  const reveal=(selector:string, trigger?:string)=>{const els=gsap.utils.toArray<HTMLElement>(selector); if(!els.length)return; ScrollTrigger.batch(els,{start:'top 80%',onEnter:items=>gsap.to(items,{opacity:1,y:0,scale:1,duration:.8,stagger:.12,ease:'power3.out'})});};
  gsap.timeline({defaults:{ease:'power3.out'}}).to('.gsap-hero-bg',{scale:1,opacity:1,duration:1.5,ease:'power2.out'}).to('.gsap-hero-overlay',{opacity:1,duration:1.5,ease:'power2.out'},'<').to('.gsap-hero-badge',{y:0,opacity:1,duration:.8},'-=1').to('.gsap-hero-title',{y:0,opacity:1,duration:.8},'-=.6').to('.gsap-hero-text',{y:0,opacity:1,duration:.8},'-=.6');
  if(document.querySelector('.gsap-tours-bg')) gsap.timeline({defaults:{ease:'power3.out'}}).to('.gsap-tours-bg',{scale:1,opacity:1,duration:1.5,ease:'power2.out'}).to('.gsap-tours-overlay',{opacity:1,duration:1.5,ease:'power2.out'},'<').to('.gsap-tours-badge',{y:0,opacity:1,duration:.8},'-=1').to('.gsap-tours-title',{y:0,opacity:1,duration:.8},'-=.6').to('.gsap-tours-text',{y:0,opacity:1,duration:.8,stagger:.1},'-=.6');
  reveal('.gsap-tour-card,.gsap-blog-card,.gsap-transport-card'); reveal('.gsap-faq-item'); reveal('.gsap-tours-filter-tab,.gsap-transport-filter-tab');
  document.querySelectorAll<HTMLElement>('.gsap-marquee-horizontal').forEach(el=>{const tween=gsap.to(el,{xPercent:-50,ease:'none',duration:30,repeat:-1});el.addEventListener('mouseenter',()=>tween.pause());el.addEventListener('mouseleave',()=>tween.play());});
 });
 return()=>{ctx.revert();gsap.ticker.remove(raf);lenis?.destroy();lenis=null};
}
export function getLenis(){return lenis}
