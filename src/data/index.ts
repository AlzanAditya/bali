import { pages } from './pages';
import { tours } from './tours';
import { blogs } from './blogs';
import { transport } from './transport';

export { pages, pagesByPath } from './pages';
export { tours, toursByPath } from './tours';
export { blogs, blogsByPath } from './blogs';
export { transport, transportByPath } from './transport';
export type { PageData } from './types';

export const allPages = [
  ...pages,
  ...tours,
  ...blogs,
  ...transport,
] as const;
