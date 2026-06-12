# Agent guide — samjolley-site

Conventions for AI coding agents (Claude Code, Codex) editing this repository.

## Architecture

- **Astro 5 + TypeScript, fully static** (`output: 'static'`), no client-side
  framework, no runtime JavaScript beyond what Astro emits for static pages.
- Routes are file-based: `src/pages/index.astro`, `work.astro`, `about.astro`.
  The launch sitemap is exactly these three routes — do not add pages without
  an explicit request.
- `src/layouts/Base.astro` owns `<head>` metadata, nav, footer, and the skip
  link. Page files own their own content only.
- `src/content/work/` is an Astro content collection (schema in
  `src/content.config.ts`). Adding a work entry = adding one Markdown file.
- `src/styles/global.css` holds all design tokens as CSS custom properties.
  Retheme by editing tokens, not by scattering new color literals.
- `public/` is copied verbatim into the build: `CNAME`, `robots.txt`,
  `sitemap.xml` (hand-maintained — update it if routes ever change),
  `favicon.svg`.

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
