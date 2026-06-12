# samjolley-site

Personal site for Sam Jolley at [samjolley.com](https://samjolley.com). Static
Astro site, three routes (`/`, `/work/`, `/about/`), deployable to GitHub Pages.

## Local development

```sh
npm install
npm run dev        # dev server at http://localhost:4321
npm run check      # TypeScript / Astro diagnostics
npm run build      # static output to dist/
npm run preview    # serve dist/ locally
```

## Editing content

- **Approved page copy** lives directly in `src/pages/*.astro`. Headlines,
  CTAs, and body copy are vault-approved — do not paraphrase them.
- **Work entries** are Markdown files in `src/content/work/`. Frontmatter:
  `title`, `summary`, `order`, and optional `synthetic: true` (renders a
  visible "Synthetic demonstration" badge — required for any non-client demo).
- **Design tokens** (colors, type, spacing) are CSS custom properties in
  `src/styles/global.css`.
- See `AGENTS.md` before making changes with an AI coding agent.

## Deployment (GitHub Pages)

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository: **Settings → Pages → Source: GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds with Astro
   and deploys on every push to `main`.
4. **Settings → Pages → Custom domain:** enter `samjolley.com` (the
   `public/CNAME` file keeps this setting across deploys). Enable
   **Enforce HTTPS** once the certificate is issued.

### DNS for GitHub Pages

At the DNS provider, point the apex domain at GitHub Pages:

- Four `A` records for `samjolley.com` → `185.199.108.153`,
  `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Optional `CNAME` record for `www` → `<github-username>.github.io`,
  with `www` → apex redirect handled by GitHub Pages.

## Domain remediation — samjolley.com

Observed 2026-06-11: HTTP redirects to HTTPS, and the HTTPS endpoint appears
to redirect back to the same HTTPS URL (likely redirect loop at the current
Bluehost/CDN configuration). Before pointing DNS at GitHub Pages:

- [ ] Record the current DNS records and hosting destination.
- [ ] Check whether both the origin and CDN enforce the same redirect.
- [ ] Choose one canonical host: apex or `www` (this repo assumes apex).
- [ ] Configure exactly one HTTP-to-HTTPS redirect.
- [ ] Configure one noncanonical-to-canonical redirect.
- [ ] Confirm the origin serves `200` on the canonical HTTPS URL.
- [ ] Test apex, `www`, HTTP, and HTTPS in a private browser session.
- [ ] Preserve a rollback copy of redirect and DNS settings.

Do not disable HTTPS or proxy protections as a shortcut.

## Content inventory — remaining placeholders

| Item | Location | Status |
| --- | --- | --- |
| Contact path (email or form) | `src/layouts/Base.astro` footer | Done 2026-06-12: `zerobeatlabs@proton.me`; switch to a `hello@` address once that mailbox is confirmed |
| GitHub links for projects | `src/pages/work.astro`, `src/content/work/*.md` | Needs Sam to pick repositories |
| Reporting-workflow demo repo link | `src/content/work/it-operations-reporting-workflow.md` | Pending public release of the demo repo |
| Career history on `/about/` | `src/pages/about.astro` comment | Needs approved resume-derived copy |
| OG image | `public/og.png` + manifest icons | Done 2026-06-12: generated from design tokens and approved copy; project photos still none |
| `Explore ZeroBeatLabs` CTA target | `src/pages/index.astro` | Done 2026-06-12: zerobeatlabs.org is live |
| 404 page | none yet | Drafted locally, uncommitted — copy pending Sam's review |
