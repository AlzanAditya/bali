import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ToursPage from '../pages/ToursPage';
import TourDetailPage from '../pages/TourDetailPage';
import BlogsPage from '../pages/BlogsPage';
import BlogDetailPage from '../pages/BlogDetailPage';
import TransportPage from '../pages/TransportPage';
import TransportDetailPage from '../pages/TransportDetailPage';
import GalleryPage from '../pages/GalleryPage';
import ContactPage from '../pages/ContactPage';

const rootRoute = createRootRoute();
const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: HomePage });
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/about.html', component: AboutPage });
const toursRoute = createRoute({ getParentRoute: () => rootRoute, path: '/tours.html', component: ToursPage });
const tourDetailRoute = createRoute({ getParentRoute: () => rootRoute, path: '/tours/$slug', component: TourDetailPage });
const blogsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/blogs.html', component: BlogsPage });
const blogDetailRoute = createRoute({ getParentRoute: () => rootRoute, path: '/blogs/$slug', component: BlogDetailPage });
const transportRoute = createRoute({ getParentRoute: () => rootRoute, path: '/transport.html', component: TransportPage });
const transportDetailRoute = createRoute({ getParentRoute: () => rootRoute, path: '/transport/$slug', component: TransportDetailPage });
const galleryRoute = createRoute({ getParentRoute: () => rootRoute, path: '/gallery.html', component: GalleryPage });
const contactRoute = createRoute({ getParentRoute: () => rootRoute, path: '/contact.html', component: ContactPage });

export const routeTree = rootRoute.addChildren([
  indexRoute, aboutRoute, toursRoute, tourDetailRoute, blogsRoute, blogDetailRoute,
  transportRoute, transportDetailRoute, galleryRoute, contactRoute,
]);

export const router = createRouter({ routeTree, defaultPreload: 'intent' });

declare module '@tanstack/react-router' {
  interface Register { router: typeof router }
}
