# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # dev server at http://localhost:5173/part2/ (port increments if busy)
npm run build     # production build to dist/
npm run preview   # serve the dist/ build locally
```

No linter or test runner is configured.

## What this is

"Field Missions", the AI in the Workplace Part 2 workshop website for Cardiff University staff: six guided missions teaching best practice across Microsoft Copilot, Google Gemini and NotebookLM, including cross-tool workflows. Converted from an earlier escape-room game; the approved conversion plan and build log live in `tasks/todo.md`.

## Architecture

Single-page React app (Vite, framer-motion). No router library. `App.jsx` renders SPLASH (login) until a user exists, then the mission gallery or a mission page selected by hash routing (`#/m1` … `#/m6`, via a `hashchange` listener).

**Content lives in `src/data/missions.js`** -- briefs, steps, prompts, artifacts, Gravitas verdict lines. Components are generic renderers; to change a mission, edit the data file. Step fields: `tier: 'core' | 'stretch'` (renders under "Today's path" vs "Take home"), `estMinutes`, `check: true` (the "30-second check" ritual), `prompt` (copyable PromptBox), `type: 'sort'` (SortGame), `laneNotes` (per-Copilot-licence guidance keyed by lane id).

**Key components** (`src/components/`): `SplashScreen` (name + email + Copilot licence lane), `MissionGallery`/`MissionCard` (card grid; whole card is a button opening the mission), `MissionDetail` (brief, artifact download strip, tiered steps, check-in, verdict), `PromptBox` (copy with select-text fallback), `SortGame` (green/amber/red data-classification sort).

**Persistence** (`src/lib/progress.js`): localStorage. `workshop_user_v1` holds `{name, email, lane}` for refresh-resume; `workshop_progress_v1:<lowercased email>` holds per-mission completion. The legacy escaperoom leaderboard code (`src/lib/leaderboard.js`, Apps Script mirror in `google_apps_script.js`, `?admin` and `?leaderboard` URL modes) is still wired but pending rework into check-in walls; see tasks/todo.md step 5.

**Legacy components** (`Countdown`, `SubmissionPortal`, `SuccessScreen`, `FailureScreen`, `HintReveal`, `CopilotHint`) are no longer referenced by `App.jsx`; delete once the check-in flow settles.

**Styling**: single file `src/styles.css`. Palette matched to the thematts google.html workshop page (page `#f5f5f7`, white cards, charcoal `#1d1d1f`, blue accent `#0071e3`) over the original tabloid/evidence-tag devices (stamps, tags, Playfair Display). CSS custom properties at `:root`; later "FIELD MISSIONS" and "GOOGLE-PAGE SKIN" sections override earlier rules by cascade order -- append restyles there rather than editing old blocks. Mission grid auto-flows (not hard-wired to six cards).

**Artifacts** are served from `public/placeholders/` and downloaded via a synthetic `<a download>` (same-origin only). Missions m2, m5, m6 still need their artifact packs authored (todo step 6).

## Deployment

`.github/workflows/deploy.yml` builds with Node 22 and deploys to GitHub Pages (repo `wmgmm/part2` → https://wmgmm.github.io/part2/). The Vite base path is `/part2/` -- keep it matching the repo name. Never `git push` unless Matt explicitly asks.
