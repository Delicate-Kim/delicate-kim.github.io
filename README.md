# Soohwan Kim Portfolio Website

This repository contains a static portfolio website migrated from your WordPress export.

## Project Structure

- `index.html` - Main one-page portfolio with About, Projects, Press, Gallery, and Contact sections
- `styles.css` - Visual design, responsive layout, and component styling
- `script.js` - Project filter behavior and auto-updating footer year
- `wordpress-migration-checklist.md` - Migration reference checklist

## Run Locally

### Option 1: Open directly

Open `index.html` in your browser.

### Option 2: Run a local server (recommended)

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## How to Edit Content

All content is in `index.html`:

- **Hero/About**: update your intro and biography text
- **Projects**: add/remove `article.project-card` blocks
- **Press**: edit links in `#press`
- **Media Gallery**: update images in `#gallery`
- **Contact**: update email/phone/office text in footer

Styling is in `styles.css`, especially theme colors under `:root`.

## Deploy to GitHub Pages

1. Push your branch to GitHub.
2. In GitHub, go to **Settings -> Pages**.
3. Under **Build and deployment**, choose:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or your preferred branch), folder `/ (root)`
4. Save and wait for deployment.
5. Your site will be served at:
   - `https://<your-github-username>.github.io/<repo-name>/`

## Notes

- Project images and videos currently reference WordPress-hosted media URLs.
- To fully detach from WordPress hosting, download those files into a local `assets/` folder and update the paths in `index.html`.
