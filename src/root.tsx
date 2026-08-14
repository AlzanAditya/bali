import { Outlet } from '@tanstack/react-router'
import { useEffect } from 'react'
import { installInternalNavigation } from './lib/navigation'
import { initSiteInteractions } from './lib/site-interactions'
import { initAnimations } from './lib/animations'
import { initSmoothScroll } from './lib/smooth-scroll'
import { useRouter } from '@tanstack/react-router'

export function AppRoot() {
  const router = useRouter()
  useEffect(() => {
    const cleanups = [
      installInternalNavigation(router),
      initSiteInteractions(),
      initAnimations(),
      initSmoothScroll(),
    ]
    return () => cleanups.forEach((cleanup) => cleanup?.())
  }, [router])

  return <Outlet />
}
