import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initAnimations() {
  const animated = document.querySelectorAll<HTMLElement>('[class*="gsap-"]')
  if (!animated.length) return () => {}
  const ctx = gsap.context(() => {
    animated.forEach((element) => {
      if (element.dataset.gsapReady === 'true') return
      element.dataset.gsapReady = 'true'
      gsap.fromTo(element, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: element, start: 'top 88%', once: true },
      })
    })
  })
  return () => ctx.revert()
}
