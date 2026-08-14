import { initHeader } from './header'
import { initMobileMenu } from './mobile-menu'
import { initBooking } from './booking'
import { initFilters } from './filters'
import { initAccordions } from './accordions'

export function initSiteInteractions() {
  const cleanups = [initHeader(), initMobileMenu(), initBooking(), initFilters(), initAccordions()]
  return () => cleanups.forEach((cleanup) => cleanup?.())
}
