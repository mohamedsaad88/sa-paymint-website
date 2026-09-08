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
    url: `https://paymint-south-africa.eng-mohammedsaad.chatgpt.site/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: slug ? 0.7 : 1,
  }));
}
