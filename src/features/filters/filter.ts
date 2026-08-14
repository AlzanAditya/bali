export function filterByCategory(buttonSelector:string,itemSelector:string){
 const buttons=[...document.querySelectorAll<HTMLElement>(buttonSelector)]; const items=[...document.querySelectorAll<HTMLElement>(itemSelector)];
 buttons.forEach(btn=>btn.addEventListener('click',()=>{const value=btn.dataset.filter||'all';buttons.forEach(b=>b.classList.toggle('bg-foreground',b===btn));buttons.forEach(b=>b.classList.toggle('text-background',b===btn));items.forEach(item=>{const categories=(item.dataset.category||'').split(',').map(x=>x.trim()); item.classList.toggle('hidden',value!=='all'&&!categories.includes(value));});}));
}
