import { useParams } from '@tanstack/react-router';
import { PageRenderer } from '../components/PageRenderer';
import { transportByPath } from '../data/transport';

export default function TransportDetailPage() {
  const { slug } = useParams({ strict: false });
  const normalized = slug.endsWith('.html') ? slug : `${slug}.html`;
  const page = transportByPath.get(`/transport/${normalized}`);
  return page ? <PageRenderer page={page} /> : null;
}
