export function initAccordions() {
  const handler = (event: Event) => {
    const target = event.target as HTMLElement | null
    const item = target?.closest('.itinerary-item, [data-accordion-item]') as HTMLElement | null
    if (!item || target?.closest('.itinerary-content, [data-accordion-content]')) return
    const content = item.querySelector<HTMLElement>('.itinerary-content, [data-accordion-content]')
    if (!content) return
    const expanded = item.getAttribute('aria-expanded') === 'true'
    item.setAttribute('aria-expanded', String(!expanded))
    item.setAttribute('data-expanded', String(!expanded))
    content.style.maxHeight = expanded ? '0px' : `${content.scrollHeight}px`
  }
  document.addEventListener('click', handler)
  return () => document.removeEventListener('click', handler)
}
