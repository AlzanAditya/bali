import type { ReactNode } from 'react'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="w-full overflow-x-clip relative">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  )
}
