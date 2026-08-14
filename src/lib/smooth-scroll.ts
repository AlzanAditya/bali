import Lenis from 'lenis'

export function initSmoothScroll() {
  const lenis = new Lenis({ smoothWheel: true })
  let frame = 0
  const raf = (time: number) => {
    lenis.raf(time)
    frame = requestAnimationFrame(raf)
  }
  frame = requestAnimationFrame(raf)
  return () => {
    cancelAnimationFrame(frame)
    lenis.destroy()
  }
}
