import { useParams } from '@tanstack/react-router';
import { PageRenderer } from '../components/PageRenderer';
import { blogsByPath } from '../data/blogs';

export default function BlogDetailPage() {
  const { slug } = useParams({ strict: false });
  const normalized = slug.endsWith('.html') ? slug : `${slug}.html`;
  const page = blogsByPath.get(`/blogs/${normalized}`);
  return page ? <PageRenderer page={page} /> : null;
}
