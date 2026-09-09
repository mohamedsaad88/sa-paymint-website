# PayMint South Africa website

Local editable website: `~/Sites/paymint/paymint-sa-website/`.

## Run

Use Node >=22.13 and npm:

```sh
npm ci
npm run dev
```

Open the Local URL printed by the server (normally http://localhost:3000). Install dependencies in a new checkout with `npm ci`; do not copy a dependency tree while recursively excluding folders named `dist`.

## Stack and structure

TypeScript, React 19 and Tailwind CSS 4 with Next.js App Router conventions, running on Vinext with a static production export for Netlify. No server or Cloudflare Worker is required in production.

- `lib/content.ts`: source-grounded product copy, navigation, interest allowlist, own-key route lookup.
- `lib/enquiry.ts`: pure local email-draft validation and encoding.
- `lib/site.ts`: validated canonical origin (`SITE_URL`, HTTPS origin only).
- `app/[slug]/page.tsx`: multi-page rendering, own-key metadata lookup and 404 handling.
- `components/site`: shared presentation, navigation, official assets and email-preparation form.
- `proxy.ts`: response security headers.
- `app/globals.css`: responsive layouts and shared visual tokens.

## Contact

This iteration intentionally uses email preparation, not direct submission. There is no webhook or public enquiry POST endpoint. Visitors enter their details, review the prepared text and send through their email application. Copy support handles systems without a mail client. The form is disabled until hydrated and provides a no-JavaScript email link. No enquiry details are stored in browser storage or sent by the website.

## Checks

```sh
npx tsc --noEmit --incremental false
npm run lint
npm test
npm run build
npm run start -- --port 8787
python3 scripts/verify-local.py http://localhost:8787
```

Unit tests run pure source modules without network access. The HTTP verification script allows loopback HTTP only and uses GET requests; it cannot send an enquiry. The preview server serves the exported files, applies their static headers and resolves clean page URLs. It does not run an application server.

The bundled UI primitives retain upstream lint exclusions; application code is linted. The dependency lockfile is retained. `npm ci` installs the exact tree.

## Review and release

See `REVIEW.md`, `CONTENT-SOURCES.md` and `VERIFICATION.md`. Current copy follows the South African reference and clearly attributes Egypt-only background. Claims not supported by the reference have been removed.

Before a custom-domain deployment, configure `SITE_URL` as the approved HTTPS origin. Browser QA remains a separately recorded requirement when the administrator browser policy check is unavailable. The hosted preview is not automatically changed by local edits.

## Deploy to Netlify

Run `npm run build`. The complete deployable site is in `dist/client`, including index.html, per-page HTML, navigation .txt files, _next, images and fonts. Netlify reads netlify.toml: build command `npm run build`, publish directory `dist/client`. `npm start` previews this exact output at http://localhost:4173.

Do not publish the repository root or the parent dist folder. Do not add an SPA catch-all redirect. See NETLIFY.md.
