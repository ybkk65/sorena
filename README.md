# Sorena

Landing page for Sorena — premium aesthetic-cure acquisition agency.
Built with Next.js 14 (App Router), ported from the HTML/CSS/JS design prototype.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Structure

- `app/` — App Router (root layout, page, global CSS)
- `components/` — Section components + global SiteEffects (animations, modal wiring)
- `public/assets/` — logo and static assets

The contact modal is opened by any element with `data-open-form` via a custom `sorena:open-form` event dispatched by `SiteEffects`.

## Connecting the form

`components/ContactModal.tsx` currently logs submissions to the console. Replace the `handleSubmit` body with a `fetch` to your endpoint (Formspree, Resend, your own API route, etc.).
