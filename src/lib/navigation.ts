import type { Router } from '@tanstack/react-router'

const INTERNAL_EXTENSIONS = /\.html(?:#.*)?$/

export function installInternalNavigation(router: Router<any, any, any>) {
  const handler = (event: MouseEvent) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    const target = event.target as HTMLElement | null
    const anchor = target?.closest('a[href]') as HTMLAnchorElement | null
    if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return
    const url = new URL(anchor.href, window.location.href)
    if (url.origin !== window.location.origin || !INTERNAL_EXTENSIONS.test(url.pathname)) return
    event.preventDefault()
    const pathname = url.pathname === '/index.html' ? '/' : url.pathname
    router.navigate({ to: pathname + url.search + url.hash } as any)
  }
  document.addEventListener('click', handler)
  return () => document.removeEventListener('click', handler)
}
