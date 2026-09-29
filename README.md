# Deep Air Cool Solutions

Bilingual HVAC and refrigeration website for Miami. Spanish is served at `/`; English is served at `/en`. Each of the seven services and twelve existing service areas has a statically generated page in both languages. The canonical domain is `https://deepaircool.com`.

## Run locally

```bash
npm install
npm run dev
```

Check production output with `npm run lint` and `npm run build`.

Business contact details, service categories, hours, and service areas were taken from the [previous site](https://deepaircool.com/). The project gallery uses the supplied real photos; the introductory section uses a generated background. No testimonials are fabricated.

The sole service-area source is [data/locations.ts](data/locations.ts). It supplies `/locations/[location]`, `/en/locations/[location]`, homepage and footer links, and the sitemap. Update each entry's content and the sitemap `lastModified` value when a location page is materially revised. No physical office or local project is implied by these pages.

The Google Maps review section links to the business profile now. To load up to five relevant reviews automatically, follow [GOOGLE_REVIEWS.md](GOOGLE_REVIEWS.md).
