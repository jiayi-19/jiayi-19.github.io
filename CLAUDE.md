# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Static personal academic website for Jiayi Qian, hosted via GitHub Pages at `jiayi-19.github.io`. Forked from [Jon Barron's academic website template](https://github.com/jonbarron/jonbarron_website).

## Architecture

- **`index.html`** — The entire site is a single HTML file. All content (bio, publications, news, teaching) lives here. There is no build step, templating engine, or static site generator.
- **`stylesheet.css`** — Base styles (fonts, links, typography) inherited from the Barron template. Site-specific overrides (publication layout, thumbnail sizing, section spacing) are in a `<style>` block inside `index.html`'s `<head>`.
- **`images/`** — Profile photo (`cat.png`) and publication thumbnail PNGs. Each publication has one thumbnail image referenced in the pubs table.
- **`data/`** — CV PDF (`CV-Jiayi.pdf`) and legacy `.bib` files from the Barron template (mostly unused).
- **`mipnerf/`, `mipnerf360/`, `zipnerf/`** — Self-contained project pages (each has its own `index.html`, `css/`, `js/`, `img/`). These are legacy from the template and not part of the main site content.

## Development

No build tools, package manager, or test suite. To preview changes, open `index.html` in a browser. For a local server:

```
python3 -m http.server 8000
```

Deploy by pushing to `master` — GitHub Pages serves from the root of that branch.

## HTML Structure (index.html)

The page is structured as nested `<table>` elements (template convention, not semantic HTML):

1. **Header** — Name, bio paragraphs, contact links (left) + profile photo (right)
2. **Research Interests** — Bulleted list with conference paper links
3. **News** — Scrollable `<div>` (130px height) with timestamped entries
4. **Selected Publications** — Table with class `pubs`, each paper is a `<tr>` with thumbnail (`.thumbcell`) and text (`.textcell`). Thumbnails use a `.one`/`.two` overlay pattern for hover effects.
5. **Teaching Experience**
6. **ClustrMaps visitor widget**
7. **Footer** — Template attribution

## Key Conventions

- Publication paper titles use custom `<papertitle>` elements (not standard HTML)
- Author's own name is bolded with `<strong>Jiayi Qian</strong>` in author lists; equal contribution marked with `*`
- Conference names are bolded inside `<em>` tags: `<em><strong>VENUE YEAR</strong></em>`
- Awards use `<font color="red"><strong>...</strong></font>`
- News items follow the pattern: `[Month. Year] <b style="color:#3EA055;">[Paper]</b> description`
- Thumbnail dimensions are controlled by `.one` class (170x120px in inline styles, overridden from 160x160px in stylesheet)
