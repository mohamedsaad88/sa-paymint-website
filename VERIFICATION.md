# Verification — reviewed local version

8 September 2026. Tested in `/Users/mohamedsaad/Sites/paymint/paymint-sa-website`.

## Passed

- TypeScript: `npx tsc --noEmit --incremental false`.
- Application lint: `npm run lint`. Unmodified bundled UI primitives retain documented upstream exclusions.
- Ten repeatable core regression tests: prototype-safe route lookup; page/interest mapping; fixed recipient and subject encoding; Unicode/newlines; trimming and optional fields; exact boolean consent; required-field validation; all bounds; safe canonical origin; absence of direct delivery and SSR form guard.
- Production build: `npm run build` on the existing patched dependency tree.
- Local production HTTP checks: all 16 pages return 200 with one H1 and title; internal links and section anchors resolve; official logo/portraits load; security headers present.
- Contact server-rendered controls are disabled before hydration, preventing normal native GET submission before JavaScript is active.
- `/constructor`, `/toString`, `/__proto__`, `/hasOwnProperty` and a regular nonexistent page return 404.
- Sitemap and robots return 200.
- npm security audit reports zero vulnerabilities on the locked tree.
- Product/content re-review: passed for South African reference fidelity; Egypt-only background remains attributed.
- Engineering and UX/UI source re-reviews: no remaining P1/P2 source blockers identified after final corrections.

Tests used GET-only loopback requests or pure modules. No external messages, email sends, clipboard actions or financial operations were performed.

## Still blocked — not passed

The browser tool could not access the existing PayMint tab because the administrator-enforced policy check was unavailable. It is not appropriate to bypass that control using another browser channel. Therefore the following remain unverified:

- Actual visual layout at 320, 375, 390, 768, 1024 and 1440 pixels.
- Browser hydration and live console errors.
- Live dropdown Escape/outside-click/focus behavior, mobile menu and navigation.
- Live form enablement, draft invalidation, interest query changes and clipboard failure experience.

Source review and HTTP tests do not establish these browser outcomes. This version has passed content, source and automated checks; browser release approval remains pending.

## Delivery scope

Changes are in the requested local project. The pre-existing local development server belongs to the user and was retained. The temporary production verification server was stopped after checks. The hosted Sites preview has not been redeployed as part of this local review.

## Image-led design revision — 8 September 2026

After the visual refresh, TypeScript, lint, all ten regression tests and the production build passed. The final production output passed the full 16-route HTTP suite. Home, all three new WebP images and all five local font weights returned 200 on both the production check server and the existing development server. Standalone generated images were visually inspected. Responsive CSS was source-reviewed and small-screen hero typography adjusted; browser layout, hydration and interaction verification remain blocked as described above. The earlier expert source sign-off predates this visual revision and should not be read as visual approval of it.

## Distinct editorial imagery revision

The homepage sculpture was replaced with a business scene; ten product pages now each have a dedicated editorial image. The two existing homepage story photos are each used once. The CTA no longer reuses a photograph. TypeScript, lint, all ten regression tests and the final production build passed. GET-only checks passed for all 16 routes, links/anchors, images, security headers and the contact guard. An additional inspection of server-rendered figure sources confirmed exactly 13 distinct assets across 13 editorial placements. Browser layout/interaction sign-off remains pending the administrator policy check; no hosted deployment was performed.

## Balanced imagery revision

Nine new assets were generated and inspected individually: six without people, and three collaborative scenes with a wider range of skin tones and ages. Full-width group compositions are preserved on the Developers and Partners pages; the homepage business crop is wider. The payroll crop excludes malformed calculator legends. This source-level crop review is not browser-rendered inspection. TypeScript, lint and the production build passed; all 16 route checks and an additional 13-unique-editorial-assets check passed. The user’s supplied logo is unchanged. Changes remain local; browser visual/interaction sign-off remains blocked as documented above.


## PayMint SA logo and motion revision

The supplied SA JPEG is used unchanged in the header/footer with its correct intrinsic dimensions; duplicated country labels were removed. MotionEffects progressively enhances below-viewport content via IntersectionObserver and Web Animations, with cleanup on route changes/unmount and cancellation when reduced motion is enabled. Content is visible without enhancement. CSS adds brief hero/menu entrances and interactive link/button effects; no continuous animation is used.

TypeScript, lint, all ten core tests, production build and all 16-route HTTP checks passed. Header/footer image references and absence of separate country labels were checked in production HTML. Actual browser rendering, scroll reveals, reduced-motion interaction and hydration remain unverified because the browser administrator policy check is unavailable. Local-only changes; no hosted deployment.

## Page transitions and animated homepage intro

Added a route-keyed fade/slide entrance without intercepting links, delaying navigation or changing router behavior. The homepage now uses the existing editorial image with slow camera motion, rotating business themes and a pause/play control. Animation begins only after hydration; server output is static. Reduced-motion preferences are read through a subscribed media-query store, and CSS disables motion when requested. No video or extra image download is introduced.

The final corrected version passed TypeScript, lint, production build and the 16-route HTTP suite; ten core regression tests also passed during this revision. The static hero fallback and page-transition wrapper were verified in server-rendered HTML. Browser navigation timing, pause/resume and live reduced-motion behavior still require visual/browser QA, which remains blocked by the administrator policy check. Local-only delivery.

## Standard Netlify build correction — 9 September 2026

Independent engineering review identified the default build/start mismatch: ordinary build still targeted Cloudflare while only the alternate command exported a static site. The default build now invokes the verified static export, removes stale generated output first, and matches Netlify's build command. The legacy build:netlify command aliases build. Start now serves static dist/client files rather than Wrangler. Canonical defaults agree with Netlify.

After a clean ordinary npm run build: TypeScript, lint and ten core tests passed; all 16 routes, links, anchors, images, 404 cases, sitemap, robots and the server-rendered Contact fallback passed against the static preview server. Every navigation .txt payload matched its generated file, and every JavaScript/CSS bundle returned the expected content type. Independent source re-review found no blocking issue in the correction.

Browser access was retried on 9 September and again denied because the administrator policy check was unavailable. Hydration/interaction and the reported live deployment still cannot be signed off from these HTTP/source checks. Changes have not been pushed or deployed by this review.

## Development configuration cleanup — 9 September 2026

Normal development now uses Vinext and Tailwind without Sites sign-in, Cloudflare bindings or worker emulation. The dependency optimiser excludes next/link, next/navigation and lucide-react (with Vinext's own exclusion), preserving client boundaries. Package-only and internal-path exclusions did not resolve the warning; the optimiser manifest identified the next/link alias as the remaining bundled entry.

A separate Vite instance using the final project configuration served all 16 routes, internal links/anchors, assets, 404 cases and contact fallback. Its fresh log contained neither the reported RSC optimisation warning nor the Sites sign-in message after all route requests. TypeScript, lint and the normal Netlify production build passed. The user-owned server on port 3000 was not stopped. Browser interaction verification remains a separate limitation.
