// Reconstructed from the original site bundle. Logic is kept behaviorally equivalent.
export function init() {
  let H=document.getElementById(`transport-service`),de=document.getElementById(`pickup-location`);
if(H&&de){let e=``;de.addEventListener(`input`,t=>{H.value!==`airport`&&(e=t.target.value)}),H.addEventListener(`change`,()=>{let t=de.closest(`.relative`);H.value===`airport`?(de.value=`Ngurah Rai International Airport (DPS), Bali`,de.setAttribute(`readonly`,`true`),t.classList.add(`bg-gray-50/50`,`cursor-not-allowed`),de.classList.add(`cursor-not-allowed`)):(de.value=e,de.removeAttribute(`readonly`),t.classList.remove(`bg-gray-50/50`,`cursor-not-allowed`),de.classList.remove(`cursor-not-allowed`))}),H.value===`airport`&&H.dispatchEvent(new Event(`change`))}
let fe=document.getElementById(`other-vehicles`);
if(fe){let e=fe.querySelector(`.gsap-other-vehicles-badge`),t=fe.querySelector(`.gsap-other-vehicles-title`),n=window.gsap.utils.toArray(`#other-vehicles .gsap-transport-card`),r=window.gsap.timeline({scrollTrigger:{trigger:fe,start:`top 75%`}});e&&r.to(e,{y:0,opacity:1,duration:.8,ease:`power3.out`}),t&&r.to(t,{y:0,opacity:1,duration:.8,ease:`power3.out`},`-=0.4`),n.length>0&&r.to(n,{y:0,opacity:1,duration:.8,stagger:.2,ease:`power3.out`},`-=0.4`)}
}
