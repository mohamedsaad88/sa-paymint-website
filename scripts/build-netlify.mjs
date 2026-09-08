import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';
const origin = new URL(process.env.SITE_URL || 'https://paymintsa.netlify.app');
if (
  origin.protocol !== 'https:' ||
  origin.username ||
  origin.password ||
  origin.pathname !== '/' ||
  origin.search ||
  origin.hash
)
  throw new Error('SITE_URL must be an HTTPS origin.');
const pkg = JSON.parse(
  readFileSync('node_modules/vinext/package.json', 'utf8'),
);
const bin = typeof pkg.bin === 'string' ? pkg.bin : pkg.bin.vinext;
const result = spawnSync(
  process.execPath,
  [path.resolve('node_modules/vinext', bin), 'build'],
  {
    stdio: 'inherit',
    env: {
      ...process.env,
      PAYMINT_STATIC_EXPORT: '1',
      SITE_URL: origin.origin,
    },
  },
);
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status || 1);
const root = 'dist/client';
const routes = [
  '',
  'business',
  'payouts',
  'payroll',
  'embedded-finance',
  'employees',
  'financial-wellness',
  'platform',
  'developers',
  'security',
  'partners',
  'about',
  'careers',
  'insights',
  'contact',
  'privacy',
];
for (const route of routes) {
  const base = route || 'index';
  const html = readFileSync(`${root}/${base}.html`, 'utf8');
  if (!html.includes('<h1') || !html.includes(origin.origin))
    throw new Error(`Incomplete exported page: /${route}`);
  if (!existsSync(`${root}/${base}.txt`))
    throw new Error(`Missing navigation payload: /${route}`);
  for (const match of html.matchAll(
    /(?:src|href)="(\/(?:images|fonts|_next)\/[^"?#]+)(?:[?#][^"]*)?"/g,
  )) {
    if (!existsSync(root + match[1]))
      throw new Error(`Missing asset on /${route}: ${match[1]}`);
  }
}
if (!existsSync(`${root}/404.html`))
  throw new Error('Missing static 404 page.');
writeFileSync(
  `${root}/robots.txt`,
  `User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${origin.origin}/sitemap.xml\n`,
);
writeFileSync(
  `${root}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((route) => `<url><loc>${origin.origin}/${route}</loc></url>`).join('')}</urlset>\n`,
);
console.log(
  `Netlify export verified: ${routes.length} HTML pages, navigation payloads, referenced assets, 404, sitemap and robots.`,
);
// Manual uploads do not read netlify.toml; include equivalent static headers.
writeFileSync(
  `${root}/_headers`,
  '/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: SAMEORIGIN\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n',
);
