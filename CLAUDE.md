# alfredoromero.github.io — Site Rebuild

## Status
The old WordPress/HTTrack static site has been cleaned up and is in the repo. A full rebuild is planned and in progress.

## What Was Done (Session 1 — 2026-04-23)

### Cleanup of HTTrack Export
- Deleted: `wp-admin/`, `wp-json/`, `wp-login.html`, `wp-loginc2b6.html`, `xmlrpc.php`, `xmlrpc0db0.php`, 19 orphan redirect files
- Stripped from all 35 HTML pages: WordPress emoji script, HTTrack mirror comments, `wlwmanifest`/`EditURI`/`pingback`/`shortlink`/generator meta tags, invisible SVG duotone blocks, Meta sidebar widget ("Log in", "WordPress.org"), empty Recent Comments widget, "Proudly powered by WordPress" footer credit
- Fixed Google Fonts URLs: `http://` → `https://`
- Fixed both search forms (floating overlay + sidebar): now submit to DuckDuckGo with `sites=alfredoromero.github.io`
- Added Open Graph + Twitter Card tags to all pages (per-page title, shared description, headshot image)
- Added SVG favicon (`favicon.svg` — red #d10014, white "AR" initials)
- Created `sitemap.xml` (24 content pages) and `robots.txt`
- Fixed typo: folder renamed `crypotocurrencies-...` → `cryptocurrencies-...`, updated in 8 linking pages
- Updated copyright year 2022 → 2026 across all pages

### Repo Setup
- GitHub repo: `https://github.com/MacroInsights/alfredoromero.github.io`
- Local path: `C:\Users\aaromero\Desktop\Github Projects\alfredoromero.github.io\`
- GitHub Pages URL: `https://macroinsights.github.io/alfredoromero.github.io/`
- Target custom domain: `alfredoromero.com` (DNS not yet configured)

### Custom Domain — Pending
- Add A records in GoDaddy DNS: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Add CNAME record: `www` → `macroinsights.github.io`
- Add custom domain in GitHub Pages Settings → Pages

---

## What Was Done (Session 2 — 2026-04-23)

### Jekyll Rebuild — Complete
- Created `_config.yml` (Jekyll config, excludes old WP folders and resume)
- Created `_layouts/default.html` (sticky nav, OG tags, Google Fonts, footer)
- Created `assets/css/main.css` (Aggie Blue #004684 / Gold #FDB927, Poppins + Inter, fully responsive)
- Created `assets/js/main.js` (scroll shadow, mobile nav toggle)
- Replaced `index.html` with Jekyll single-page site (6 sections: Hero, AEI, Media, Research, Data Musings, Book a Talk)
- Compressed `GroundworkHS_38.jpg` → `assets/images/headshot.jpg` (900×674, 36 KB)

### Still Needed
- **Formspree**: Replace `YOUR_FORM_ID` in `index.html` contact form with actual Formspree endpoint
- **Custom domain**: GoDaddy DNS A records + CNAME still pending
- **AEI URL**: Add real link to AEI report/dashboard once available
- **More Data Musings**: Port second essay to Jekyll or add new ones

---

## Rebuild Plan (Next Session)

### Stack
**Jekyll** — GitHub Pages builds it natively, no CI/CD setup needed, push-to-deploy.

### Design
- Colors: **Aggie Blue `#004684`** and **Aggie Gold `#FDB927`** (official NC A&T brand, matches AEI branding)
- Typography: Poppins headings (keep), clean sans-serif body
- Layout: Modern, editorial — not generic academic template

### Sections (in order)
1. **Hero** — New headshot + name + "Former Senior Economist, U.S. Congress • Interim Chair, NC A&T Economics" + CTAs: "Book a Talk" and "Aggie Economic Index"
2. **Aggie Economic Index** — Featured product section with description and link to report/dashboard
3. **In the Media** — Logo bar (CNN, CNBC, MSNBC, NPR, WSJ, Univision, Telemundo) + 3–4 featured appearances
4. **Research** — Clean paper list
5. **Data Musings** — Blog/essay section (2 existing essays + room to add more)
6. **Book a Talk** — Speaker bio + contact/booking form

### Headshot
- New professional photos (January 2026, Groundwork Photography) are in:
  `C:\Users\aaromero\OneDrive - North Carolina A&T State University\Work\Resume and Pics\2026 01 Headshots\Web\`
- Files: `GroundworkHS_34.jpg` through `GroundworkHS_38.jpg` (~2.3MB each — need compression to ~400KB)
- **Need to confirm:** which shot (34–38) to use

### CV / Bio Source
- Rolling CV: `resume/Alfredo_A_Romero Rolling CV.docx` (inside this repo)
- Key credentials to feature:
  - Chair, Department of Economics, NC A&T SU (2024–present)
  - Former Senior Economist, U.S. Congressional Joint Economic Committee (2023–2024)
  - Former WSJ Panel of Economic Forecasters (2021–2023)
  - Former Fed Survey of Professional Forecasters (2022–2023)
  - Aggie Economic Index — creator
  - Bilingual media economist: CNN, CNBC, MSNBC, NPR, WSJ, Barron's, Univision, Telemundo

### Content to Port
All existing content (research papers, media appearances, invited talks, Data Musings essays) to be ported to Jekyll Markdown during rebuild. Source HTML is in the current repo folders.
