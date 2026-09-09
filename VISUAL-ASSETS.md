# Visual assets — balanced editorial direction

The latest revision replaces the abstract sculpture with a business-led homepage hero and uses a distinct editorial asset for every image placement. The shared call-to-action uses colour gradients, not a repeated photograph. No product claims, statistics, customer logos or interface mockups were added.

## Placement map

| Placement | Local asset in `public/images/` |
| --- | --- |
| Homepage hero — Business growth | home-business.webp |
| Homepage hero — Financial wellbeing | hero-financial-wellbeing.webp |
| Homepage hero — Shared opportunity | hero-shared-opportunity.webp |
| Homepage business story | business-diverse.webp |
| Homepage employee story | employee-editorial.webp |
| Business | business-workshop.webp |
| Payouts | payouts-logistics.webp |
| Payroll | payroll-planning.webp |
| Embedded Finance | enterprise-city.webp |
| Employees | employees-city.webp |
| Financial Wellness | wellness-still-life.webp |
| Platform | platform-devices.webp |
| Developers | developers-diverse.webp |
| Security | security-network.webp |
| Partners | partners-diverse.webp |

All are AI-generated editorial illustrations, not actual PayMint customers, staff, facilities or product screenshots. Source provenance is retained in these internal asset records; visible captions were removed at the user’s request. Each asset is assigned to only one placement. Official logo and leadership portraits remain unchanged and are documented in CONTENT-SOURCES.md.

The homepage employee story image is retained from the first visual revision. Its exact prompt remains in VISUAL-ASSET-PROMPTS.txt. Three current images are retained from the second revision, whose prompts are recorded in VISUAL-ASSET-PROMPTS-V2.txt; superseded files in those prompt records are historical. Nine newly generated replacements are documented below. The original abstract sculpture is retired from the website.

## Delivery

Images are local WebP assets with explicit dimensions, useful alt text and lazy loading below the fold. Hero images have high fetch priority. Crops adapt to smaller screens, and reduced-motion preferences are respected.

Manrope fonts are self-hosted under `public/fonts/`, sourced from Google Fonts. SIL Open Font License: `public/fonts/OFL-Manrope.txt`.

Standalone image inspection is separate from rendered browser inspection. Browser layout/interaction QA remains blocked by the administrator policy check described in VERIFICATION.md. Changes are local and have not been published to the hosted preview.

## Subject variety and representation revision

Six placements now use people-free editorial scenes: Payouts, Payroll, Embedded Finance, Financial Wellness, Platform and Security. Seven placements retain people, including three newly generated collaborative scenes with a broader range of skin tones and ages on the homepage business section, Developers and Partners. The thirteen placements still each use a distinct asset. This is an editorial balance, not a demographic claim about South Africa or PayMint employees.

Nine new images were generated using built-in imagegen with the exact prompts recorded in VISUAL-ASSET-PROMPTS-V3.txt. Earlier prompt files remain a historical record. New assets are separate files; the original logo and official leadership portraits remain unchanged.

## Synchronized hero scenes — 9 September 2026

The three hero messages each have a dedicated image. Financial wellbeing uses a new home financial-planning illustration; Shared opportunity uses a new Cape Town-inspired commerce streetscape. These two assets appear nowhere else on the website. Both were generated and visually inspected at 1536×1024, then compressed to WebP quality 85. Exact prompts are in VISUAL-ASSET-PROMPTS-HERO.txt. They are editorial illustrations, not documentary photographs or evidence of PayMint customers or locations.

Image and message live within the same animated scene, using an 18-second cycle with six seconds per scene and 0.9-second crossfades. Pause freezes the animation; server rendering and reduced-motion mode show the first scene without movement. Only the opening image receives high fetch priority; the others load eagerly at low priority.

The subsequent hero refinement replaces the original 18-second CSS cycle with a single seven-second progress clock per scene, 850ms crossfades, manually selectable scene controls and a pause on hidden tabs. No additional images were introduced.
