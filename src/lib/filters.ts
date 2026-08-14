import { gsap } from 'gsap'

export function initFilters() {
  const groups: Array<[string,string]> = [['.filter-tab-btn','.tour-item'], ['.filter-tab-btn-blog','.blog-item']]
  const cleanups: Array<() => void> = []
  for (const [tabSelector, itemSelector] of groups) {
    const tabs = document.querySelectorAll<HTMLElement>(tabSelector)
    const items = document.querySelectorAll<HTMLElement>(itemSelector)
    if (!tabs.length || !items.length) continue
    const handlers: Array<() => void> = []
    tabs.forEach((tab) => {
      const handler = (event: Event) => {
        event.preventDefault()
        const filter = tab.getAttribute('data-filter')
        tabs.forEach((item) => { item.classList.remove('bg-foreground','text-background'); item.classList.add('bg-white','text-foreground') })
        tab.classList.remove('bg-white','text-foreground'); tab.classList.add('bg-foreground','text-background')
        const visible: HTMLElement[] = []
        items.forEach((item) => {
          if (filter === 'all' || filter === item.getAttribute('data-category')) { item.classList.remove('hidden'); visible.push(item) }
          else item.classList.add('hidden')
        })
        if (visible.length) gsap.fromTo(visible, { opacity: 0, scale: .9, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: .5, stagger: .1, ease: 'power3.out', overwrite: true })
      }
      tab.addEventListener('click', handler); handlers.push(() => tab.removeEventListener('click', handler))
    })
    cleanups.push(() => handlers.forEach((fn) => fn()))
  }
  return () => cleanups.forEach((cleanup) => cleanup())
}
