# WordPress to Portfolio Migration Checklist

Use this checklist to migrate content from your existing WordPress site into this new static portfolio.

## 1) Content Inventory

- [ ] List all current WordPress pages (Home, About, Projects, Contact, Blog if needed).
- [ ] Collect all project titles, descriptions, technologies, and URLs.
- [ ] Download original media assets (profile image, project screenshots, logos, PDFs).
- [ ] Note current SEO title and meta description from WordPress.

## 2) Map WordPress Sections to `index.html`

- WordPress Home hero -> `#home` section
- WordPress About page -> `#about` section
- WordPress Portfolio/Projects -> `#projects` section
- WordPress Contact -> `#contact` section

## 3) Replace Placeholder Content

- [ ] Update your name, role, and intro text in the hero.
- [ ] Replace About section bio, highlights, and skills.
- [ ] Edit project cards (title, summary, stack, links, categories).
- [ ] Add real contact email and social links.

## 4) Migrate and Optimize Images

- [ ] Create an `assets/` folder.
- [ ] Add profile and project images.
- [ ] Compress large images before upload (WebP/JPEG preferred).
- [ ] Update image paths in `index.html`.

## 5) Branding and Design Matching

- [ ] Match WordPress brand colors in `styles.css` (`:root` section).
- [ ] Match typography as closely as possible (or add web fonts).
- [ ] Recreate key visual sections that mattered in your old site.

## 6) SEO Essentials

- [ ] Update `<title>` in `index.html`.
- [ ] Update `<meta name="description">` content.
- [ ] Add social sharing tags (Open Graph/Twitter) if desired.
- [ ] Keep heading hierarchy clean (`h1` -> `h2` -> `h3`).

## 7) Launch Readiness

- [ ] Test on mobile + desktop.
- [ ] Verify all links are valid.
- [ ] Confirm project filters work correctly.
- [ ] Run through a basic accessibility check (color contrast, alt text, keyboard navigation).

## 8) Optional Next Steps

- Add a blog via static site generator if needed.
- Add contact form backend (Formspree, Netlify Forms, custom API).
- Deploy to GitHub Pages, Netlify, or Vercel.
