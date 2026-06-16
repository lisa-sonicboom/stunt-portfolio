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
The form sends submissions straight to **lisa.koivunen@gmail.com** using FormSubmit (no server or signup needed). It works via AJAX, so visitors stay on the page and see a "message sent" confirmation.

**One-time activation (do this once after the site is live):**
1. Open your live site and send yourself a test message through the form.
2. FormSubmit emails you a confirmation link the first time — click it to activate.
3. From then on, every submission lands in your inbox automatically.

Notes:
- To send to a different address, change both `formsubmit.co/ajax/...` in `index.html` and the `mailto:` links.
- For extra spam protection you can swap the email in the endpoint for FormSubmit's hashed address (get it from the confirmation email), so your address isn't visible in the page source.
- Alternatives if you ever prefer: Formspree or Web3Forms (both free, need a quick signup for a form key).
