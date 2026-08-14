import { useParams } from '@tanstack/react-router';
import { PageRenderer } from '../components/PageRenderer';
import { toursByPath } from '../data/tours';

export default function TourDetailPage() {
  const { slug } = useParams({ strict: false });
  const normalized = slug.endsWith('.html') ? slug : `${slug}.html`;
  const page = toursByPath.get(`/tours/${normalized}`);
  return page ? <PageRenderer page={page} /> : null;
}
