export function initBookingToggle(){
 const show=document.getElementById('btn-show-booking-form'),hide=document.getElementById('btn-hide-booking-form'),shortForm=document.getElementById('booking-short-form'),fullForm=document.getElementById('booking-full-form'),container=document.getElementById('booking-form-section');
 if(!show||!hide||!shortForm||!fullForm) return;
 const scroll=()=>container?.scrollIntoView({behavior:'smooth',block:'start'});
 show.addEventListener('click',e=>{e.preventDefault();shortForm.classList.add('hidden');fullForm.classList.remove('hidden');container?.classList.remove('lg:sticky','lg:top-32');setTimeout(scroll,50)});
 hide.addEventListener('click',e=>{e.preventDefault();fullForm.classList.add('hidden');shortForm.classList.remove('hidden');container?.classList.add('lg:sticky','lg:top-32');setTimeout(scroll,50)});
}
