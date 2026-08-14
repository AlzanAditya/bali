import { PageRenderer } from '../components/PageRenderer';
import { pagesByPath } from '../data/pages';

export default function ContactPage() {
  const page = pagesByPath.get('/contact.html');
  return page ? <PageRenderer page={page} /> : null;
}
