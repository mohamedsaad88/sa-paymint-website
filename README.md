# PayMint South Africa

A responsive multi-page marketing website built with TypeScript, React 19, Tailwind CSS 4 and Next.js App Router conventions, running on Vinext for Cloudflare Workers / Sites deployment. The starter is the official Sites scaffold; this is not a stock Next.js server deployment.

## Development

- Node >=22.13
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run start` runs the built Worker locally.
- `npx tsc --noEmit` and `npm run lint` validate source.

## Architecture

- `lib/content.ts`: navigation, enquiry interests, typed solution-page content.
- `app/[slug]/page.tsx`: reusable product routes and company-page routing with metadata and 404 handling.
- `components/site`: shared navigation/footer, product illustrations, company content, insights filter and enquiry form.
- `app/api/enquiries/route.ts`: validated same-origin server-side enquiry delivery.
- `app/globals.css`: shared tokens, layouts, responsive design and reduced-motion handling.

## Enquiry delivery

With no delivery destination configured, validated enquiries offer an explicit email draft to the verified public group email `info@paymint-eg.com`. Nothing is silently stored or falsely marked sent. The visitor must send the draft in their email client.

To enable direct delivery, configure `LEAD_WEBHOOK_URL` (HTTPS only) and optional `LEAD_WEBHOOK_TOKEN` in the deployment runtime. The webhook must reliably accept the submitted enquiry and return 2xx. The token is used only server-side. Implement spam/rate limiting at the edge or receiving service before public launch; the route includes a honeypot, input bounds and same-origin validation but does not claim durable rate limiting. Do not put secrets in source. Verify delivery using an approved test inbox before launch.

## Content and launch review

See `CONTENT-SOURCES.md` for evidence and claims policy. Local product availability is not independently verified. Illustrations use fictional sample ZAR values and are visibly labelled. The editorial image is AI-generated and is not a customer or leadership photograph. No fabricated case studies, partner logos, news articles or open vacancies are included.

Before public launch, PayMint should approve current leadership titles, product scope, jurisdiction-specific privacy/controller details and current security documentation; configure the lead destination; and replace the canonical origin with the approved custom domain in layout, sitemap and robots. Source build and local browser checks are recorded in `VERIFICATION.md`.
