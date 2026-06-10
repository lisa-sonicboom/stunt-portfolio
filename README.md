# Lisa Koivunen — Stunt Website

A single-page stunt portfolio. Dark/warm theme, gold accent, fully responsive.

## What's inside
```
lisa-stunt-site/
├── index.html        ← the whole website
├── README.md         ← this file
└── assets/           ← images + your CV PDF
```
Everything is self-contained. No build step, no dependencies — just open `index.html`.

## Preview it locally
Double-click `index.html` to open it in your browser. (The YouTube reel and Google Fonts need an internet connection to load.)

## Put it online — pick one

**Netlify (drag & drop, free, ~1 min)** — you already use Netlify:
1. Go to https://app.netlify.com/drop
2. Drag the whole `lisa-stunt-site` folder onto the page.
3. Done — you get a live link. Add your custom domain in Site settings → Domain.

**GitHub Pages (free):**
1. Create a repo, upload the contents of this folder (so `index.html` is at the root).
2. Settings → Pages → Deploy from branch → `main` / root.

**Any web host:** upload the folder contents via FTP so `index.html` sits at the public root.

## Easy edits (all in `index.html`)
- **Bio text** → find the `<!-- ABOUT -->` section.
- **Details/stats** → find `<!-- STATS -->`; each line is one `<li>`.
- **Showreel** → search for `yjAkWRx33g4` and swap the YouTube ID.
- **Links** → search for `lisa_sonicboom` (Instagram) or `nm17635617` (IMDb).
- **Swap a photo** → drop a new file in `assets/` and update the matching `src="assets/..."`.

## Contact form
The form opens the visitor's email app with the message pre-filled to lisa.koivunen@gmail.com — no backend needed. If you'd prefer submissions to arrive automatically in your inbox, a free service like Formspree can be wired in (just ask).
