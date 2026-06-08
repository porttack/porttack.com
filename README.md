# porttack.com

Personal site for Eric Brown — engineer and Computer Science teacher at San Lorenzo Valley High School. Built with [Jekyll](https://jekyllrb.com/) on the [minima](https://github.com/jekyll/minima) theme and published via GitHub Pages at [porttack.com](https://porttack.com) (custom domain set in `CNAME`).

## Site structure

Standard Jekyll layout:

- `_config.yml` — site config: theme, plugins, nav (`header_pages`), Google Analytics ID, fonts
- `_layouts/` — page templates (`home.html` drives the blog list views; other layouts come from minima)
- `_includes/` — shared partials (`header.html`, `footer.html`, `youtube.html`, `google-analytics.html`)
- `_posts/` — published blog posts (date-prefixed Markdown)
- `_drafts/` / `drafts/` — unpublished/in-progress posts
- `assets/main.scss` — site styles (imports the minima theme)
- `docs/assets/images/` — images referenced from pages and posts
- `.well-known/webfinger` — Fediverse identity verification (`@ericbrown@hachyderm.io`)
- `404.html` — custom GitHub Pages not-found page

### Top-level pages (site nav)

Listed under `header_pages` in `_config.yml`:

- `welcome.md` — homepage / bio (`/`)
- `slv.md` — SLV Computer Science class info (`/slv/`), with sub-pages under `slv/`
- `blog.md` — blog landing page (`/blog/`); companion views in `blog/all.md`, `blog/news.md`, `blog/drafts.md` filter posts by category
- `resume.md` — résumé (`/resume.html`)

## Standalone utilities (outside the Jekyll nav)

These are self-contained HTML pages — mostly client-side JS/React-via-CDN — that live alongside the Jekyll site and are linked to directly (e.g. for students), but aren't part of the site's navigation or templating.

### Classroom & robotics tools

| File | Purpose |
|---|---|
| `2048.html` | Playable 2048 game |
| `bingame.html`, `bingame2.html` | "Binary Learning Game" — interactive binary-number practice |
| `timer.html` | Full-screen countdown timer for class activities |
| `keygen.html` | "Key Exchange Party" — interactive public/private key exchange demo (*Little Brother* tie-in) |
| `passwordcheck.html` | Password strength checker (zxcvbn-based, with an AI-generated explanation panel) |
| `rov26quiz1.html`, `rov26quiz2.html` | SLV ROV 2026 quizzes |
| `rovjobs.html` | SEL ROV — team roles & rubric reference page |
| `buoy.html` | "Autonomous Ocean Profiling Float Challenge" — interactive presentation/slide deck |
| `2025CASymposiumPresentation.html` | Meta-refresh redirect to an external CA Symposium presentation link |

### AI experiments

| File | Purpose |
|---|---|
| `ai1.html` | Minimal demo calling the Gemini API and rendering the response |
| `aibias.html` | Tool for exploring/analyzing biased AI responses |
| `aimodelcheck.html` | Lists Gemini models available to an API key |
| `isearch.html`, `isearch2.html` | Google Custom Search Engine–powered image search pages |

> ⚠️ `ai1.html`, `aibias.html`, `aimodelcheck.html`, and `passwordcheck.html` currently embed Gemini API keys directly in client-side JavaScript (visible to anyone via "view source"). These keys should be rotated and the calls moved behind a backend/proxy rather than shipped in static HTML.

### Misc / scratch files

`vocab1b.csv`, `abc.py`, `servo_test.py` — small teaching/scratch artifacts (vocabulary list, Python snippets) not wired into any page.

## Testing locally

This is a standard Jekyll + GitHub Pages site, run with Ruby/Bundler.

1. Install a Ruby version compatible with the [GitHub Pages gem](https://pages.github.com/versions/) pinned in the `Gemfile`.
2. Install dependencies:
   ```sh
   bundle install
   ```
3. Serve with live rebuild:
   ```sh
   bundle exec jekyll serve
   ```
   Site is available at `http://localhost:4000`. Useful flags: `--drafts` (render posts in `_drafts/`/`drafts/`), `--livereload` (auto-refresh the browser on changes).
4. Build a static copy without serving:
   ```sh
   bundle exec jekyll build
   ```
   Output goes to `_site/` (already gitignored).

The standalone utilities above don't need Jekyll at all — open them straight in a browser, or hit them on the running local server, e.g. `http://localhost:4000/timer.html`.
