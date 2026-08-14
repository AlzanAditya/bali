// Reconstructed from the original site bundle. Logic is kept behaviorally equivalent.
export function init() {
  let t=document.getElementById(`mobile-menu-toggle`),n=document.getElementById(`mobile-menu`),r=document.querySelectorAll(`.mobile-nav-item`);
if(t&&n){let e=window.gsap.timeline({paused:!0});window.gsap.set(n,{opacity:0,scale:.95}),window.gsap.set(r,{opacity:0,y:20}),e.to(n,{opacity:1,scale:1,duration:.4,ease:`power3.out`,onStart:()=>{n.classList.remove(`pointer-events-none`)},onReverseComplete:()=>{n.classList.add(`pointer-events-none`)}}),e.to(r,{opacity:1,y:0,duration:.4,stagger:.08,ease:`back.out(1.5)`},`-=0.2`);let i=!1;t.addEventListener(`click`,()=>{i=!i,i?(t.classList.add(`is-active`),document.body.classList.add(`overflow-hidden`),e.timeScale(1).play()):(t.classList.remove(`is-active`),document.body.classList.remove(`overflow-hidden`),e.timeScale(1.5).reverse())})}
}
