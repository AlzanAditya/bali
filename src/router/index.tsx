import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from '@tanstack/react-router';
import { Layout } from '../components/Layout/Layout';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ToursPage } from '../pages/ToursPage';
import { TourDetailPage } from '../pages/TourDetailPage';
import { BlogsPage } from '../pages/BlogsPage';
import { BlogDetailPage } from '../pages/BlogDetailPage';
import { TransportPage } from '../pages/TransportPage';
import { TransportDetailPage } from '../pages/TransportDetailPage';
import { GalleryPage } from '../pages/GalleryPage';
import { ContactPage } from '../pages/ContactPage';

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: HomePage });
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/about.html', component: AboutPage });
const toursRoute = createRoute({ getParentRoute: () => rootRoute, path: '/tours.html', component: ToursPage });
const tourDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tours/$slug.html',
  component: () => {
    const { slug } = tourDetailRoute.useParams();
    return <TourDetailPage slug={slug} />;
  },
});
const blogsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/blogs.html', component: BlogsPage });
const blogDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blogs/$slug.html',
  component: () => {
    const { slug } = blogDetailRoute.useParams();
    return <BlogDetailPage slug={slug} />;
  },
});
const transportRoute = createRoute({ getParentRoute: () => rootRoute, path: '/transport.html', component: TransportPage });
const transportDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/transport/$slug.html',
  component: () => {
    const { slug } = transportDetailRoute.useParams();
    return <TransportDetailPage slug={slug} />;
  },
});
const galleryRoute = createRoute({ getParentRoute: () => rootRoute, path: '/gallery.html', component: GalleryPage });
const contactRoute = createRoute({ getParentRoute: () => rootRoute, path: '/contact.html', component: ContactPage });

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  toursRoute,
  tourDetailRoute,
  blogsRoute,
  blogDetailRoute,
  transportRoute,
  transportDetailRoute,
  galleryRoute,
  contactRoute,
]);

/**
 * Creates a fresh router instance. The server-side prerenderer passes a
 * memory history so no browser globals are required during SSG.
 */
export function createAppRouter(history?: Parameters<typeof createRouter>[0]['history']) {
  return createRouter({
    routeTree,
    ...(history ? { history } : {}),
    defaultPreload: 'intent',
    scrollRestoration: true,
  });
}

export const router = createAppRouter();

// The prerender script uses the same route tree with a memory history.
export function createPrerenderRouter(pathname: string) {
  return createAppRouter(
    createMemoryHistory({
      initialEntries: [pathname],
    }),
  );
}

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
