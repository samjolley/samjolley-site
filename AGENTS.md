# Agent guide — samjolley-site

Conventions for AI coding agents (Claude Code, Codex) editing this repository.

## Architecture

- **Astro 5 + TypeScript, fully static** (`output: 'static'`), no client-side
  framework, no runtime JavaScript beyond what Astro emits for static pages.
- Routes are file-based:
  - `src/pages/index.astro` (home), `about.astro`, `privacy.astro`, `404.astro`.
  - `src/pages/work/index.astro` (portfolio index) and
    `src/pages/work/[slug].astro` (one page per work entry, at `/work/<slug>/`).
  - `src/pages/writing/index.astro` and `src/pages/writing/[slug].astro`
    (the `writing` content collection). This section can be empty.
  - `src/pages/rss.xml.ts` (writing feed at `/rss.xml`).
  Adding a work or writing entry is just a new Markdown file in the matching
  `src/content/` folder. Adding a whole new top-level section still needs an
  explicit request from Sam.
- `src/layouts/Base.astro` owns `<head>` metadata (title, description,
  canonical, OG/Twitter, RSS alternate, the site-wide `Person` JSON-LD, and an
  optional per-page `structuredData` prop), nav, footer, and the skip link.
  Page files own their own content only. Work pages pass a `CreativeWork`
  object (portfolio pieces are undated, so no `datePublished` is fabricated);
  writing pages pass a `BlogPosting` object.
- `src/content/work/` and `src/content/writing/` are Astro content collections
  (schemas in `src/content.config.ts`). Writing drafts (`draft: true`) render
  in `dev` for review but are excluded from production builds, so they never
  reach the sitemap or RSS feed.
- `src/styles/global.css` holds all design tokens as CSS custom properties.
  Retheme by editing tokens, not by scattering new color literals.
- **Sitemap is generated, never hand-edited.** `@astrojs/sitemap` emits
  `sitemap-index.xml` + `sitemap-0.xml` from the built routes. Do not add a
  static `public/sitemap.xml`; it would drift the moment routes change.
- `public/` is copied verbatim into the build: `CNAME`, `robots.txt`,
  `favicon.svg`, icons, `og.png`.

## Safe-editing rules

1. **Never fabricate content**: no invented biography, clients, testimonials,
   results, contact info, or social links. Unknowns get an HTML comment
   placeholder (`<!-- TODO: ... -->`) and a row in the README content
   inventory.
2. **Approved copy is verbatim.** Headlines, CTAs, summaries, and the About
   block come from Sam's vault. Do not paraphrase or "improve" them.
3. **Synthetic work is labeled.** Any demo built on fictional data keeps
   `synthetic: true` in its frontmatter so the badge renders.
4. **No service pricing, offer FAQs, or sales process here** — that content
   belongs on zerobeatlabs.org. This site links out instead.
5. **No analytics, tracking, cookies, third-party embeds, or external fonts.**
6. **No secrets** anywhere in the repo.
7. Every link must have a valid destination — never commit a dead button.
8. Run `npm run check && npm run build` before committing; both must pass.

## Verification commands

```sh
npm run check   # diagnostics must be clean
npm run build   # must exit 0; output in dist/
```
