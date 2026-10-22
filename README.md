# Pick your Raphael

Portfolio of **Raphael Gabriel Geronimo** — full-stack developer & founder.

Visitors are dealt three face-down cards. Each card is a different "Raphael"
(Rock-phael, Lab-riel, Cab-riel…). Pick one and the whole site becomes that
theme. A clean professional version is always one click away at `/pro`.

- **18 themes**, The Deal (`/`), and the professional page (`/pro`)
- **Next.js 16** (App Router) + React 19
- **Sanity** as the headless CMS, with the editor built in at `/studio`
- Works with **no CMS at all** — it falls back to placeholder content

---

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000. Without Sanity configured you'll see the
`[bracketed]` placeholders everywhere — that's expected.

## Connect the CMS (Sanity)

1. Create a free project at https://www.sanity.io/manage (dataset: `production`).
2. Copy `.env.example` to `.env.local` and fill in your project ID:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xy
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
3. In the Sanity dashboard → **API → CORS origins**, add
   `http://localhost:3000` (and later your production domain) with
   credentials allowed.
4. Restart `npm run dev` and open http://localhost:3000/studio.
5. Fill in **Profile** (you, your skills, your company) and add up to
   **three Projects** (Order 1–3, with screenshots).

Pages re-fetch content every 60 seconds, so edits show up without a redeploy.

### What the CMS controls

| Field | Where it appears |
|---|---|
| Email, GitHub, LinkedIn | Every contact section; links are wired automatically |
| City, "where you started" | Bios and about sections |
| Skills (front end, back end, design, as an owner) | Every skills section |
| Company name, what you sell, website | Every company section (kept separate from projects) |
| Projects 1–3: name, type, one-liner, result, problem, stack, screenshot | Every theme's project section |

A few theme-specific lines are still hard-coded placeholders (for example
Rock-phael's tour dates/career history, VALO-RAPH's individual skill items).
Search the code for `[` to find them and edit them directly.

## Project structure

```
app/
  page.jsx              The Deal (/)
  pro/page.jsx          Professional version
  [slug]/page.jsx       The 18 themes (/rock-phael, /lab-riel, …)
  studio/[[...tool]]/   Sanity Studio
components/
  themes/*.jsx          One React component per theme
  ThemeHost.jsx         Loads a theme in the browser (code-split per theme)
  ContentRoot.jsx       Passes CMS content to the themes
lib/
  content.js            Content shape + defaults + normalisation
  sanity.js             Server-side fetch from Sanity
  runtime.js            Helpers every theme uses (content, css(), shot())
  themes.js             Slug ↔ component list
sanity/schemas/         Profile + Project schemas
design/                 Original design files (source for the themes)
scripts/convert.js      Regenerates components/themes from design/
```

### Editing a theme

Each file in `components/themes/` is a plain React class component: state
and logic at the top, JSX in `render()`. Edit it like any component.

`scripts/convert.js` generated these from the original designs in `design/`.
Running `npm run convert` **overwrites** `components/themes/`, so only use it
if you're editing the design files instead of the components.

### Adding a theme

1. Create `components/themes/MyTheme.jsx` (copy an existing one).
2. Add it to the registry in `components/ThemeHost.jsx`.
3. Add `{ slug, comp, label }` to `lib/themes.js`.
4. Add a card for it to the deck in `components/themes/Deal.jsx`
   (`deck()` list, plus a card face and transition).

## Deploy

Push to GitHub, import the repo at https://vercel.com/new, add the two
`NEXT_PUBLIC_SANITY_*` environment variables, and deploy. Add the
production URL to Sanity's CORS origins.

## Notes

- Themes render client-side only (random deals, timers, audio, pointer
  effects all need the browser).
- The Deal remembers which cards a visitor has seen in `localStorage`, so
  reshuffles show unseen cards first.
- All theme art is original — no game logos, characters or trademarks.
