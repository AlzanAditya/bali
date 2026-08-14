// Reconstructed from the original site bundle. Logic is kept behaviorally equivalent.
export function init() {
  let e=document.getElementById(`main-header`);
if(e){let t=()=>{if(window.scrollY>280)(!e.classList.contains(`is-fixed`)||e.classList.contains(`is-animating-up`))&&(e.classList.remove(`absolute`,`animate-header-slide-up`,`is-animating-up`),e.classList.add(`fixed`,`is-fixed`,`animate-header-slide-down`));else if(e.classList.contains(`is-fixed`)&&!e.classList.contains(`is-animating-up`))if(e.classList.remove(`animate-header-slide-down`),window.scrollY>200){e.classList.add(`is-animating-up`,`animate-header-slide-up`);let t=()=>{e.classList.contains(`is-animating-up`)&&(e.classList.remove(`fixed`,`is-fixed`,`animate-header-slide-up`,`is-animating-up`),e.classList.add(`absolute`)),e.removeEventListener(`animationend`,t)};e.addEventListener(`animationend`,t)}else e.classList.remove(`fixed`,`is-fixed`),e.classList.add(`absolute`)};window.addEventListener(`scroll`,t),t()}
}
