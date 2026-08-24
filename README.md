# Academic Website

A personal academic website for a mathematics graduate student, built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **MDX** with **KaTeX** math rendering.

Live pages: Home · Research · Publications · Notes · Teaching · CV · About · Blog.

---

## 1. Requirements

- [Node.js](https://nodejs.org) 18.18+ (20.x recommended)
- npm (comes with Node)

## 2. Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page auto-reloads as you edit files.

## 3. Project structure

```
src/
  app/                 # Routes (App Router). One folder per page.
    page.tsx           # Home
    research/page.tsx
    publications/page.tsx
    notes/page.tsx      notes/[slug]/page.tsx
    teaching/page.tsx
    cv/page.tsx
    about/page.tsx
    blog/page.tsx        blog/[slug]/page.tsx
  components/          # Nav, Footer, MathEnv (theorem boxes), MDXContent, ThemeToggle...
  config/
    site.ts            # ← Your name, links, bio. Edit this first.
    teaching.ts         # ← Courses, office hours.
  lib/
    content.ts          # Reads content/ from disk
    mdx.ts               # MDX → HTML with KaTeX math support

content/
  pages/research.mdx    # Research page body (editable prose + LaTeX)
  pages/about.mdx        # About page body
  publications/*.json    # One JSON file per publication
  notes/*.mdx             # One MDX file per mathematical note
  blog/*.mdx               # One MDX file per blog post

public/
  cv.pdf                 # ← Replace with your real CV
  papers/                 # Put publication PDFs here
```

## 4. Where to add your personal information

Open **`src/config/site.ts`** — this is the single file that drives your name, role,
institution, advisor, email, research interests, homepage introduction, and all
external links (GitHub, Google Scholar, ORCID, CV path). Every `[PLACEHOLDER]`
in the site pulls from here or from the files listed below.

Also edit:
- `content/pages/research.mdx` — your research description (supports LaTeX, see §6)
- `content/pages/about.mdx` — your background, interests, hobbies, books
- `src/config/teaching.ts` — your courses, teaching interests, office hours, resources
- `src/app/cv/page.tsx` — the CV outline sections (Education, Awards, etc.)

## 5. How to add a publication

Create a new file in `content/publications/`, named e.g. `my-new-paper.json`:

```json
{
  "title": "Title of the Paper",
  "authors": "Your Name, Coauthor Name",
  "venue": "Journal or Conference Name",
  "year": "2026",
  "doi": "10.xxxx/xxxxx",
  "arxiv": "https://arxiv.org/abs/xxxx.xxxxx",
  "pdf": "/papers/my-new-paper.pdf",
  "abstract": "One paragraph abstract."
}
```

Any field except `title`, `authors`, `venue`, `year`, and `abstract` is optional —
omit `doi`, `arxiv`, or `pdf` if they don't apply. Drop the PDF itself into
`public/papers/`. Publications are sorted by year automatically; no other file
needs to be touched.

## 6. How to add a mathematical note or blog post

Create a new `.mdx` file in `content/notes/` (or `content/blog/`):

```mdx
---
title: "Title of the Note"
date: "2026-03-01"
summary: "One sentence summary shown in the list view."
tags: ["topology", "expository"]
---

Ordinary Markdown works here, and so does LaTeX:

Inline math: $f(x) = x^2$

Display math:

$$
\int_0^1 x^2\,dx = \frac{1}{3}
$$

<Theorem title="Optional theorem title">
State the theorem here. Math works inside these too: $a^2 + b^2 = c^2$.
</Theorem>

<Proof>
Your proof text.
</Proof>
```

Available theorem-style components: `<Definition>`, `<Proposition>`, `<Lemma>`,
`<Theorem>`, `<Corollary>`, `<Example>`, `<Proof>`. Each takes an optional
`title` prop. `<Proof>` automatically appends a ∎ mark.

The file's name (without `.mdx`) becomes the URL, e.g.
`content/notes/my-note.mdx` → `/notes/my-note`. Nothing else needs to be
registered — the notes/blog index pages read the folder automatically and
sort by `date` (newest first).

## 7. How to add your CV

Replace `public/cv.pdf` with your real CV, keeping the same filename (or
update `links.cv` in `src/config/site.ts` if you rename it). The "Download
CV" button on the homepage and CV page link to this file directly. The CV
page also shows an optional text outline (`src/app/cv/page.tsx`) that mirrors
your PDF for accessibility and SEO — edit the `sections` array there, or
delete the outline and keep only the download button.

## 8. Deploying via GitHub Pages

This repo is preconfigured for GitHub Pages with a GitHub Actions workflow
(`.github/workflows/deploy.yml`) that builds and deploys on every push to `main`.

1. Push this repository to GitHub.
2. In your repo, go to **Settings → Pages → Build and deployment** and set
   **Source** to **GitHub Actions**.
3. If your repo is **not** named `<your-username>.github.io` (i.e. it will be
   served from `https://<username>.github.io/<repo-name>/`), open
   `next.config.mjs` and uncomment/set:
   ```js
   basePath: '/<repo-name>',
   ```
4. Push to `main` — the workflow builds the static site (`next build` with
   `output: 'export'`) and publishes the `out/` folder automatically.

Alternative hosts (Vercel, Netlify, Cloudflare Pages) also work — they auto-detect
Next.js and don't require the `basePath` change or the static export config;
if you switch to one of those, you can remove `output: 'export'` from
`next.config.mjs` to regain full Next.js server features (not required for
this site, which is fully static).

## 9. Quality checklist (run before publishing)

- [ ] `npm run build` completes with no errors
- [ ] Every page loads: Home, Research, Publications, Notes (+ a note), Teaching, CV, About, Blog (+ a post)
- [ ] Resize to mobile width — nav collapses to hamburger, equations don't overflow
- [ ] Toggle dark mode (sun/moon icon) — check contrast on every page
- [ ] Confirm all placeholder `[TEXT]` has been replaced with your real information
- [ ] Confirm `public/cv.pdf` is your real CV
- [ ] Confirm external links (GitHub, Scholar, ORCID, email, DOIs, arXiv) resolve correctly
- [ ] Run a Lighthouse pass in Chrome DevTools for accessibility/SEO/performance

## 10. What to customize next

- Swap the accent color and fonts in `tailwind.config.ts` / `src/app/layout.tsx` if you want a different palette (currently: paper/ink neutrals, an indigo accent, Newsreader for headings, IBM Plex Sans for body, IBM Plex Mono for labels).
- Add a real Open Graph image and update `metadataBase` in `src/app/layout.tsx`.
- Add Google Analytics / Plausible if you want visitor stats (not included, to keep the site fast and dependency-free by default).
- Delete the sample note (`content/notes/compactness-and-continuity.mdx`) and sample post (`content/blog/on-writing-mathematics.mdx`) once you've added your own.
