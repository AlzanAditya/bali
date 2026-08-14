import { PageRenderer } from '../components/PageRenderer';
import { pagesByPath } from '../data/pages';

export default function BlogsPage() {
  const page = pagesByPath.get('/blogs.html');
  return page ? <PageRenderer page={page} /> : null;
}
