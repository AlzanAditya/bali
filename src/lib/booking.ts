import flatpickr from 'flatpickr'

export function initBooking() {
  const cleanups: Array<() => void> = []
  const serviceTypes = document.querySelectorAll<HTMLInputElement>('input[name="service_type"]')
  const guestField = document.getElementById('field-guest')
  const destinationField = document.getElementById('field-destination')
  if (serviceTypes.length && guestField && destinationField) {
    const onChange = (event: Event) => {
      const value = (event.target as HTMLInputElement).value
      if (value === 'transports') { guestField.classList.replace('block', 'hidden'); destinationField.classList.replace('hidden', 'block') }
      else { destinationField.classList.replace('block', 'hidden'); guestField.classList.replace('hidden', 'block') }
    }
    serviceTypes.forEach((input) => input.addEventListener('change', onChange))
    cleanups.push(() => serviceTypes.forEach((input) => input.removeEventListener('change', onChange)))
  }

  const bookingDate = document.getElementById('booking-date') as HTMLInputElement | null
  if (bookingDate) {
    const instance = flatpickr(bookingDate, { dateFormat: 'd/m/Y', minDate: 'today', disableMobile: true })
    cleanups.push(() => instance.destroy())
  }

  const container = document.getElementById('guest-input-container')
  const dropdown = document.getElementById('guest-dropdown')
  const input = document.getElementById('guest-input') as HTMLInputElement | null
  const apply = document.getElementById('btn-guest-apply')
  if (container && dropdown) {
    let adults = Number.parseInt(container.dataset.adults || '2', 10) || 2
    let children = Number.parseInt(container.dataset.children || '0', 10) || 0
    const adultCount = document.getElementById('adult-count')
    const childCount = document.getElementById('child-count')
    const adultInput = document.getElementById('adults-input') as HTMLInputElement | null
    const childInput = document.getElementById('children-input') as HTMLInputElement | null
    const totalInput = document.getElementById('total-price-input') as HTMLInputElement | null
    const update = (initial = false) => {
      if (adultCount) adultCount.textContent = String(adults)
      if (childCount) childCount.textContent = String(children)
      const minusAdult = document.getElementById('btn-adult-minus') as HTMLButtonElement | null
      const minusChild = document.getElementById('btn-child-minus') as HTMLButtonElement | null
      if (minusAdult) minusAdult.disabled = adults <= 1
      if (minusChild) minusChild.disabled = children <= 0
      if (input && !initial) input.value = `${adults} Adult${adults > 1 ? 's' : ''}${children ? `, ${children} Children` : ''}`
      if (adultInput) adultInput.value = String(adults)
      if (childInput) childInput.value = String(children)
      try {
        const prices = JSON.parse(container.dataset.prices || '[]') as Array<{min_people:number,max_people:number|null,adult_price:string,child_price:string}>
        const totalGuests = adults + children
        const price = prices.find((p) => totalGuests >= p.min_people && (p.max_people === null || totalGuests <= p.max_people)) || prices.reduce((a,p) => a.min_people < p.min_people ? a : p, prices[0])
        if (price) {
          const total = adults * Number.parseFloat(price.adult_price) + children * Number.parseFloat(price.child_price)
          const formatted = `$${total.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`
          document.getElementById('short-total-price')?.replaceChildren(document.createTextNode(formatted))
          document.getElementById('full-total-price')?.replaceChildren(document.createTextNode(formatted))
          if (totalInput) totalInput.value = total.toFixed(2)
        }
      } catch { /* malformed data should not break the page */ }
    }
    const toggle = (force?: boolean) => { const hidden = dropdown.classList.toggle('hidden', force === false ? true : force === true ? false : undefined); container.setAttribute('aria-expanded', String(!hidden)) }
    const onContainerClick = (event: Event) => { event.stopPropagation(); toggle() }
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggle() } }
    const onDocumentClick = (event: MouseEvent) => { if (!container.contains(event.target as Node) && !dropdown.contains(event.target as Node)) { dropdown.classList.add('hidden'); container.setAttribute('aria-expanded', 'false') } }
    container.addEventListener('click', onContainerClick); container.addEventListener('keydown', onKey); document.addEventListener('click', onDocumentClick)
    const adultMinus = document.getElementById('btn-adult-minus'); const adultPlus = document.getElementById('btn-adult-plus'); const childMinus = document.getElementById('btn-child-minus'); const childPlus = document.getElementById('btn-child-plus')
    const decAdult = () => { if (adults > 1) { adults--; update() } }; const incAdult = () => { if (adults < 15) { adults++; update() } }; const decChild = () => { if (children > 0) { children--; update() } }; const incChild = () => { if (children < 10) { children++; update() } }
    adultMinus?.addEventListener('click', decAdult); adultPlus?.addEventListener('click', incAdult); childMinus?.addEventListener('click', decChild); childPlus?.addEventListener('click', incChild); apply?.addEventListener('click', () => dropdown.classList.add('hidden'))
    update(true)
    cleanups.push(() => { container.removeEventListener('click', onContainerClick); container.removeEventListener('keydown', onKey); document.removeEventListener('click', onDocumentClick); adultMinus?.removeEventListener('click', decAdult); adultPlus?.removeEventListener('click', incAdult); childMinus?.removeEventListener('click', decChild); childPlus?.removeEventListener('click', incChild) })
  }

  return () => cleanups.forEach((cleanup) => cleanup())
}
