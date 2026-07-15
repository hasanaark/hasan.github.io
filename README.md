# Mohammad Abir Hasan — Executive Portfolio

A free, static, bilingual (English / 中文) portfolio site. No build tools, no framework, no paid hosting — just HTML, CSS, and JS, deployable on GitHub Pages at no cost.

## Files

- `index.html` — all page content and structure
- `styles.css` — the design system (navy/brass "technical drawing" theme)
- `script.js` — language toggle logic
- `photo.jpg` — **you need to add your own headshot here** (see below)

## 1. Add your photo

Drop your headshot into `/photo.jpg` (any image works, but a tightly-cropped, neutral-background photo matches the design best — same one from your resume works well). Keep the filename `photo.jpg`, or update the `src` in `index.html` under `.hero-photo`.

## 2. Publish for free on GitHub Pages

1. Create a new **public** repository on GitHub, e.g. `abir-portfolio`.
2. Upload these files (`index.html`, `styles.css`, `script.js`, and the `assets` folder) to the repo — either via the GitHub web UI ("Add file → Upload files") or with git:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/abir-portfolio.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
5. GitHub will give you a live URL within a minute or two, typically:
   `https://YOUR-USERNAME.github.io/abir-portfolio/`

That's it — no cost, no account beyond GitHub, and you fully own the code.

## 3. Editing content later

All text lives directly in `index.html`. Each translatable element has two attributes:

```html
<p data-en="English text here" data-zh="中文内容">English text here</p>
```

Update both, and the visible text inside the tag should match whichever language is currently shown by default (English). The toggle in the top-right switches everything at once — no separate Chinese page to maintain.

## 4. Custom domain (optional, still free)

GitHub Pages supports a custom domain (e.g. `abirhasan.com`) if you buy one from any registrar — add it under Settings → Pages → Custom domain. The registrar charge is separate; GitHub's hosting itself remains free either way.
