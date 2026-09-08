const fallback = 'https://paymint-south-africa.eng-mohammedsaad.chatgpt.site';
export function validatedOrigin(value: string): string {
  const url = new URL(value);
  if (
    url.protocol !== 'https:' ||
    url.username ||
    url.password ||
    url.pathname !== '/' ||
    url.search ||
    url.hash
  )
    throw new Error(
      'SITE_URL must be an HTTPS origin without credentials, a path or query.',
    );
  return url.origin;
}
export const siteOrigin = validatedOrigin(process.env.SITE_URL || fallback);
