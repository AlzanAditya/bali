import { PageRenderer } from '../components/PageRenderer';
import { pagesByPath } from '../data/pages';

export default function GalleryPage() {
  const page = pagesByPath.get('/gallery.html');
  return page ? <PageRenderer page={page} /> : null;
}
