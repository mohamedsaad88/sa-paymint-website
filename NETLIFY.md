# Netlify deployment

This repository uses Vinext on Vite. The default `npm run build` now produces a complete static Netlify deployment. No alternate build command is needed.

## Git-based deployment

Commit and push the current changes, then redeploy the connected Netlify site. The root netlify.toml sets:

- Build command: `npm run build`
- Publish directory: `dist/client`
- Node: 22
- SITE_URL: `https://paymintsa.netlify.app`

The Netlify build excludes the Cloudflare and Sites plugins, pre-renders every page, validates HTML and navigation payloads/assets, and writes robots.txt, sitemap.xml and static response headers. Contact query selection runs in the browser; the static HTML includes the form fallback.

Do not use a catch-all SPA redirect to index.html. Each page has its own generated HTML, and client navigation has its own .txt payload. The standard Next.js adapter is unnecessary for this static Vinext build; remove a manually installed Next.js build plugin if one is configured in the Netlify dashboard.

If a custom domain is added, update SITE_URL in netlify.toml and rebuild.

## Manual deployment

Run `npm run build`. Upload the **contents of dist/client** (index.html must be at the upload root) to the existing Netlify site's deploys area. Use freshly generated dist/client contents after each build. npm start previews that exact directory locally.

## Validation limits

The exported HTML, navigation payloads and referenced assets are checked automatically. The live Netlify URL timed out from this environment, and automated browser inspection is still unavailable. A successful export is not a claim that the live deployment has been updated or browser-tested.
