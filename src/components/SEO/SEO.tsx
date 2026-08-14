/**
 * SEO metadata is rendered as real React head elements instead of being
 * injected through an effect. React 19 hoists <title>, <meta>, and <link>
 * elements into <head> during SSR/SSG and also keeps them correct on the
 * client after navigation.
 */
export function SEO({
  title,
  description,
  canonical,
}: {
  title: string;
  description?: string;
  canonical?: string;
}) {
  return (
    <>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}
    </>
  );
}
