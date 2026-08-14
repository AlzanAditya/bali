export function initHeader(header: HTMLElement | null){
 if(!header) return;
 const onScroll=()=>{
  if(window.scrollY>280){header.classList.add('fixed','is-fixed','animate-header-slide-down');header.classList.remove('absolute','animate-header-slide-up','is-animating-up');}
  else if(header.classList.contains('is-fixed')){
   if(window.scrollY>200){header.classList.add('is-animating-up','animate-header-slide-up');header.addEventListener('animationend',()=>{header.classList.remove('fixed','is-fixed','animate-header-slide-up','is-animating-up');header.classList.add('absolute')},{once:true});}
   else {header.classList.remove('fixed','is-fixed');header.classList.add('absolute');}
  }
 };
 window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
 return()=>window.removeEventListener('scroll',onScroll);
}
