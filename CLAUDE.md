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

The AI in the Workplace Part 2 workshop website for Cardiff University staff: seven guided exercises (called Exercises in the UI; still `MISSIONS` in code) plus a "Useful Prompts" library strip anchored on two real documents (Cardiff's Sustainable Futures plan 2025-35 and a university AI position statement), teaching Gemini Deep Research, Gemini Notebook, Gemini Canvas and Copilot, including an explicit tool-chaining exercise (05), a Notebook Data Tables data exercise (03) and a skill-file exercise (07: a prompt packaged as a plain text file you attach, deliberately NOT Gems, which staff accounts cannot create). Narrative (self-contained, no escaperoom backstory): Chris Gravitas, the participants' new line manager in the Sustainability Engagement job, volunteers the team to build the briefing pack (infographic, deck, decision tool, reusable skill files). The pivot roadmap is `ROADMAP.md`; the build log lives in `tasks/todo.md`.

## Architecture

Single-page React app (Vite, framer-motion). No router library. `App.jsx` renders SPLASH (login) until a user exists, then the mission gallery or a mission page selected by hash routing (`#/m1` … `#/m7` plus `#/prompts` for the library, via a `hashchange` listener that ignores plain anchors like `#main-content`; unknown routes fall back to the gallery). The library lives in the `PROMPT_LIBRARY` export in `missions.js`, outside the `MISSIONS` array. URL mode: `?doctor` (facilitator preflight, `DoctorPanel`).

**All prompts follow `docs/PROMPT_GUIDANCE_2026.md`** (the expert prompt-engineering standard: RTF structure, answer shaping, failure states, verbatim grounding). Consult it before editing any prompt.

**Content lives in `src/data/missions.js`** -- briefs, steps, prompts, artifacts, Gravitas verdict lines. Components are generic renderers; to change an exercise, edit the data file. Step fields: `tier: 'core' | 'stretch'` (renders under "Today's path" vs "Take home"), `estMinutes`, `check: true` (the "30-second check" ritual), `prompt` (copyable PromptBox), `type: 'sort'` (SortGame), `laneNotes` (per-Copilot-licence guidance keyed by lane id).

**Key components** (`src/components/`): `SplashScreen` (name + email), `MissionGallery`/`MissionCard` (card grid; whole card is a button opening the exercise), `MissionDetail` (brief, artifact download strip, tiered steps, check-in, verdict), `PromptBox` (copy with select-text fallback), `SortGame` (green/amber/red data-classification sort).

**Persistence** (`src/lib/progress.js`): localStorage. `workshop_user_v1` holds `{name, email, lane}` for refresh-resume; `workshop_progress_v1:<lowercased email>` holds per-exercise completion. The leaderboard UI was deleted on 2026-09-04; the backend half is kept for the planned check-in wall: `src/lib/leaderboard.js` (only `recordAttendance` is called, on sign-in), `src/config.js` and the Apps Script mirror `google_apps_script.js`.

**Legacy escaperoom components were deleted** (Countdown, SubmissionPortal, Success/Failure screens, HintReveal, CopilotHint, EvidenceGallery/Card, data/gravitas.js, data/hints.js, assets/placeholders SVGs). `Leaderboard`, `LeaderboardPage` and `AdminPanel` went the same way on 2026-09-04, with their CSS and the `?admin` / `?leaderboard` URL modes. Still live: `TaglineBar`, `SortGame` (the `type: 'sort'` step renderer, currently unused by content).

**Styling**: single file `src/styles.css`. Palette matched to the thematts google.html workshop page (page `#f5f5f7`, white cards, charcoal `#1d1d1f`, blue accent `#0071e3`) over the original tabloid/evidence-tag devices (stamps, tags, Playfair Display). CSS custom properties at `:root`; later "FIELD MISSIONS" and "GOOGLE-PAGE SKIN" sections override earlier rules by cascade order -- append restyles there rather than editing old blocks. Exercise grid auto-flows (not hard-wired to a card count).

**Artifacts** are served from `public/placeholders/` and downloaded via a synthetic `<a download>` (same-origin only). Four files: `Sustainable-Futures-en.pdf` (copy of the real published plan, not generated), `AI_Position_Statement.pdf` the stand-in `Policy_Landscape_Report.pdf` and `Document_QA_Skill.txt` (all three regenerate via `python3 tools/make_artifacts.py`). Swap contract: Cardiff's own AI statement replaces the file under the same name; only the `aiStatement` note in `missions.js` then changes. The old `Venture_*` files were deleted with the pivot, and the escaperoom `evidence_*`/`placeholder_*` images, `Exhibit_D_Raw_Meeting_Transcript.pdf` and `Staff_Survey_Results.xlsx` in the 2026-09-04 tidy-up (git history has them all).

## Deployment

`.github/workflows/deploy.yml` builds with Node 22 and deploys to GitHub Pages (repo `wmgmm/part2` → https://wmgmm.github.io/part2/). The Vite base path is `/part2/` -- keep it matching the repo name. Never `git push` unless Matt explicitly asks.
