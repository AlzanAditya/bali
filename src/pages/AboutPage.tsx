import { PageRenderer } from '../components/PageRenderer';
import { pagesByPath } from '../data/pages';

export default function AboutPage() {
  const page = pagesByPath.get('/about.html');
  return page ? <PageRenderer page={page} /> : null;
}
