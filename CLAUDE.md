# Website Migration: GoDaddy WordPress → GitHub Pages

## Project Overview

Migrated `alfredoromero.com` from a GoDaddy-hosted WordPress site to a static site hosted on GitHub Pages.

## What Was Done

### 1. Static Site Export
- Used **HTTrack Website Copier** to crawl and download the live WordPress site as static HTML/CSS/JS files.
- HTTrack output saved to `C:\My Web Sites\alfredoromero.com\alfredoromero.com\`

### 2. Repository Setup
- GitHub repo created at: `https://github.com/MacroInsights/alfredoromero.github.io`
- Initialized a standalone git repo inside `C:\Users\aaromero\Desktop\Github Projects\website\`
- Copied all static site files from HTTrack output into this repo
- Pushed to GitHub (branch: `master`)

### 3. GitHub Pages
- Enabled GitHub Pages in repo Settings → Pages
- Source: `master` branch, root `/`
- Temporary GitHub URL: `https://macroinsights.github.io/alfredoromero.github.io/`

### 4. Custom Domain (In Progress)
- Custom domain `alfredoromero.com` needs to be pointed to GitHub Pages
- Add these A records in GoDaddy DNS:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Add CNAME record: `www` → `macroinsights.github.io`
- Add custom domain in GitHub Pages settings: `alfredoromero.com`

### 5. Image Fix
- WordPress embeds responsive image sizes via `srcset` attributes with absolute URLs pointing to `alfredoromero.com`
- HTTrack only downloaded the primary image size, leaving `srcset` URLs broken
- Fixed by stripping all `srcset="http://alfredoromero.com..."` attributes from 29 HTML files using PowerShell
- Images now load from relative `src` paths using locally downloaded files

## Known Limitations
- Search forms still point to `http://alfredoromero.com/` (non-functional on static site — WordPress search requires a backend)
- Some embedded iframes (`src="http://alfredoromero.com/.../embed/..."`) require the old domain to be live

## Local Folder Note
The local folder is named `website` but the GitHub repo is named `alfredoromero.github.io`. This is cosmetic — git connects them via the remote URL. Can be renamed once Claude Code is not running from this directory.
