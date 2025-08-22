# Copilot instructions for this repo

This repository is an Astro 5 static site with Tailwind CSS v4 (via Vite plugin), TypeScript, Biome for lint/format, and Leaflet for maps.

Project at a glance

- Framework: Astro 5 (static output)
- Styling: Tailwind v4 utilities in markup + a light `src/styles/global.css`
- Lint/format: Biome
- Maps: Leaflet (OpenStreetMap tiles)
- Images: Astro sharp service; assets in `src/assets` or `public`

Runbook

- Dev: `pnpm dev`
- Build: `pnpm build` then `pnpm preview`
- Type/lint: `pnpm check` (Astro/TS), `pnpm lint` or `pnpm lint:fix`

Code organization

- Pages: `src/pages/**` (route = file path)
- Layout: `src/layouts/Layout.astro`
- Components: `src/components/**`
- Styles: `src/styles/global.css`
- Static: `public/**` (served at site root)

Styling conventions

- Prefer Tailwind utilities directly in markup.
- Use Tailwind `@apply` and other at-rules in global CSS
- Keep UI accessible: large touch targets, visible focus states, sensible contrast.
- Remove unused or redundant CSS.

Accessibility and SEO

- Keep the skip link and header semantics in `Layout.astro` intact.
- Preserve `aria-expanded` on the mobile menu toggle.
- Use descriptive alt text; keep external links `target="_blank" rel="noopener noreferrer"`.
- Keep canonical URL and structured data logic in `Layout.astro`.

Leaflet map (Session widget)

- File: `src/components/SessionWidget.astro`.
- Z-index: keep the map and its panes at a low z-index so the header/nav stays above when scrolling. The CSS at the bottom of the file enforces this—do not remove.
- Types: we locally type the inline script and augment `window.openMarker`. Avoid reintroducing implicit `any` or global `window` warnings.
- Tiles: OSM tile URL is configured; keep attribution.

Content patterns and UX

- Keep copy concise and inclusive; favor plain language.
- External actions like “Join Session” should always open in a new tab.
- Header includes a desktop “Join Sessions” CTA near Donate.
- Maintain spacing rhythm established in components (use existing utility patterns).

Non-negotiables before merging

- No new linter errors: `pnpm lint` and `pnpm check` must be clean.
- Do not break the header-over-map stacking order.
- Validate responsive behavior at 320px, 768px, 1024px, 1280px breakpoints.

Common tasks

- Add/edit content: update page in `src/pages` or a component in `src/components`.
- New page: create under `src/pages`, import `Layout.astro`.
- Update social links/icons: `src/components/Footer.astro`.
- Nav changes or CTAs: `src/components/Header.astro`.

Notes

- Emails on Privacy/Safety currently use `contact@tuhuratech.org.nz`. Confirm before mass-updating other addresses.
- Tailwind config is implicit (v4). Reuse existing utility tokens (e.g., `text-tuhura-green`) seen in the code; don’t invent new design tokens without discussion.

PR checklist

- [ ] Build passes locally (`pnpm build`)
- [ ] Lint and type checks are clean (`pnpm lint`, `pnpm check`)
- [ ] Accessibility basics validated (labels, alt text, focus order)
- [ ] No regressions to header/menu behavior or map stacking
