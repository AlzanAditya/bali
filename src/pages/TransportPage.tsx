import { PageRenderer } from '../components/PageRenderer';
import { pagesByPath } from '../data/pages';

export default function TransportPage() {
  const page = pagesByPath.get('/transport.html');
  return page ? <PageRenderer page={page} /> : null;
}
