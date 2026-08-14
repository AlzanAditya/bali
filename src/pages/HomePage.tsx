import { PageRenderer } from '../components/PageRenderer';
import { pagesByPath } from '../data/pages';

export default function HomePage() {
  const page = pagesByPath.get('/');
  return page ? <PageRenderer page={page} /> : null;
}
