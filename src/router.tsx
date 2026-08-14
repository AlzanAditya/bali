import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import { pages } from './pages/registry'
import { AppRoot } from './root'

export const rootRoute = createRootRoute({
  component: AppRoot,
})

const routeChildren = pages.map((page) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: page.route,
    component: page.component,
    head: () => ({
      meta: [
        { title: page.title },
        { name: 'description', content: page.description },
        { property: 'og:title', content: page.title },
        { property: 'og:description', content: page.description },
        ...(page.ogImage ? [{ property: 'og:image', content: page.ogImage }] : []),
      ],
    }),
  }),
)

export const routeTree = rootRoute.addChildren(routeChildren as any)

export function createAppRouter() {
  return createRouter({
    routeTree,
    defaultPreload: 'intent',
    scrollRestoration: true,
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createAppRouter>
  }
}
