import { PageRenderer } from '../components/PageRenderer';
import { pagesByPath } from '../data/pages';

export default function ToursPage() {
  const page = pagesByPath.get('/tours.html');
  return page ? <PageRenderer page={page} /> : null;
}
