import { siteOrigin } from '@/lib/site';
import { pages } from '@/lib/content';
export default function sitemap() {
  return [
    '',
    ...Object.keys(pages),
    'about',
    'insights',
    'careers',
    'contact',
    'privacy',
  ].map((slug) => ({
    url: `${siteOrigin}/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: slug ? 0.7 : 1,
  }));
}
