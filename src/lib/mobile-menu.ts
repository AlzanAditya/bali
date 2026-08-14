import { gsap } from 'gsap'

export function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle')
  const menu = document.getElementById('mobile-menu')
  const items = document.querySelectorAll<HTMLElement>('.mobile-nav-item')
  if (!toggle || !menu) return () => {}

  const timeline = gsap.timeline({ paused: true })
  gsap.set(menu, { opacity: 0, scale: 0.95 })
  gsap.set(items, { opacity: 0, y: 20 })
  timeline
    .to(menu, { opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out', onStart: () => menu.classList.remove('pointer-events-none'), onReverseComplete: () => menu.classList.add('pointer-events-none') })
    .to(items, { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'back.out(1.5)' }, '-=0.2')

  let active = false
  const onClick = () => {
    active = !active
    toggle.classList.toggle('is-active', active)
    document.body.classList.toggle('overflow-hidden', active)
    timeline.timeScale(active ? 1 : 1.5)[active ? 'play' : 'reverse']()
  }
  toggle.addEventListener('click', onClick)
  return () => {
    toggle.removeEventListener('click', onClick)
    timeline.kill()
  }
}
