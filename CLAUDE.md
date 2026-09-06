# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Static personal academic website for Jiayi Qian, hosted via GitHub Pages at `jiayi-19.github.io`. Forked from [Jon Barron's academic website template](https://github.com/jonbarron/jonbarron_website).

## Architecture

- **`index.html`** — The entire site is a single HTML file. All content (bio, publications, news, teaching) lives here. There is no build step, templating engine, or static site generator.
- **`homepage.css`** — Homepage typography, layout, responsive breakpoints, interaction states, reduced-motion support, and print styles. `stylesheet.css` is retained from the original template but is not loaded by the homepage.
- **`script.js`** — Topic filters for publications and ongoing work. Research-direction links select the corresponding filter. All content is present in HTML; filter controls are hidden when JavaScript is unavailable.
- **`images/`** — Profile photo (`cat.png`) and publication thumbnail PNGs, referenced in the paper articles.
- **`data/`** — Current CV (`CV_jiayi.pdf`) and compatibility copy (`CV-Jiayi.pdf`), which should remain identical, plus legacy `.bib` files from the Barron template (mostly unused).
- **`mipnerf/`, `mipnerf360/`, `zipnerf/`** — Self-contained project pages (each has its own `index.html`, `css/`, `js/`, `img/`). These are legacy from the template and not part of the main site content.

## Development

No build tools, package manager, or test suite. To preview changes, open `index.html` in a browser. For a local server:

```
python3 -m http.server 8000
```

Deploy by pushing to `master` — GitHub Pages serves from the root of that branch.

## HTML Structure (index.html)

The homepage uses semantic sections, articles, lists, and native disclosure controls:

1. **Navigation and hero** — Text navigation without a monogram; name, bio, both Ph.D. advisors, contact links, and cat photo. Keep the Google role in Industry experience rather than adding a separate hero sentence.
2. **Research** — Sys/Arch for AI and AI for Sys/Arch; links filter related work.
3. **Background and experience** — Education first, then industry experience, then research/teaching experience. The user confirmed the Google role has started; describe it as current. No technical toolkit.
4. **News** — Three recent entries and a native `<details>` archive.
5. **Publications and ongoing work** — `.paper` articles with `data-topic="systems|design|models"`. Submissions under review live in `#ongoing-work` and must not be presented as accepted papers. The user requested omitting Fast-AIPS from the homepage while retaining ArchOrchestra.
6. **Footer** — Contact, last-updated date, and template attribution.

## Key Conventions

- Paper titles use `<h3>` elements; published titles link to the paper.
- Author's own name is bolded with `<strong>Jiayi Qian</strong>` in author lists; equal contribution marked with `*`
- Conference and workshop names use `.venue` spans; workshop and review status must stay explicit.
- Awards use `.award` paragraphs. News dates use `.news-date` spans.
- Paper thumbnails use `.paper-image` and `object-fit: contain` to preserve research figures.
- Keep author order and equal-contribution markers faithful to the current CV.
- Keep the selected systems paper order: DyServe, ReCA, Compositional AI, REASON, ISPASS 2026, ISPASS 2025. In efficient models, show AmoebaLLM before diffusion deployment.
- Preserve existing source files and project pages; the homepage has no dependency installation or build step.
