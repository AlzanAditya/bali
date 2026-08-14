export function initGallery(){
 const track=document.getElementById('tour-detail-slider'); if(!track) return;
 const children=[...track.children].map(x=>x.cloneNode(true)); children.forEach(x=>track.appendChild(x));
 const half=()=>track.scrollWidth/2;
 const next=()=>{if(track.scrollLeft>=half()){track.classList.remove('scroll-smooth');track.scrollLeft-=half();void track.offsetWidth;track.classList.add('scroll-smooth')}track.scrollBy({left:track.clientWidth/2,behavior:'smooth'});};
 const prev=()=>{if(track.scrollLeft<=0){track.classList.remove('scroll-smooth');track.scrollLeft+=half();void track.offsetWidth;track.classList.add('scroll-smooth')}track.scrollBy({left:-track.clientWidth/2,behavior:'smooth'});};
 const p=document.getElementById('tour-slider-prev'),n=document.getElementById('tour-slider-next');let timer=window.setInterval(next,2000);const stop=()=>clearInterval(timer),start=()=>{stop();timer=window.setInterval(next,2000)};p?.addEventListener('click',()=>{stop();prev();start()});n?.addEventListener('click',()=>{stop();next();start()});track.addEventListener('mouseenter',stop);track.addEventListener('mouseleave',start);track.addEventListener('touchstart',stop,{passive:true});track.addEventListener('touchend',start,{passive:true});return()=>stop();
}
