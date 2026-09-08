export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap:
      'https://paymint-south-africa.eng-mohammedsaad.chatgpt.site/sitemap.xml',
  };
}
