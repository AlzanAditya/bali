export function initHeader() {
  const header = document.getElementById('main-header')
  if (!header) return () => {}

  let animationCleanup: (() => void) | undefined
  const onScroll = () => {
    const y = window.scrollY
    if (y > 280) {
      header.classList.remove('absolute', 'animate-header-slide-up', 'is-animating-up')
      header.classList.add('fixed', 'is-fixed', 'animate-header-slide-down')
    } else if (header.classList.contains('is-fixed') && !header.classList.contains('is-animating-up')) {
      header.classList.remove('animate-header-slide-down')
      if (y > 200) {
        header.classList.add('is-animating-up', 'animate-header-slide-up')
        const onAnimationEnd = () => {
          header.classList.remove('fixed', 'is-fixed', 'animate-header-slide-up', 'is-animating-up')
          header.classList.add('absolute')
          header.removeEventListener('animationend', onAnimationEnd)
        }
        header.addEventListener('animationend', onAnimationEnd)
        animationCleanup = () => header.removeEventListener('animationend', onAnimationEnd)
      } else {
        header.classList.remove('fixed', 'is-fixed')
        header.classList.add('absolute')
      }
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  return () => {
    window.removeEventListener('scroll', onScroll)
    animationCleanup?.()
  }
}
