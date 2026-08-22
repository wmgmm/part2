# AI in the Workplace Part 2

A hands-on workshop website for Cardiff University staff: nine mission cards that teach practical AI skills with **Microsoft Copilot, Google Gemini and Gemini Notebook (formerly NotebookLM)** by building a fictional business (Christopher Gravitas's campus Welsh cake stall) from market research to a working app.

**Live site:** https://wmgmm.github.io/part2/

## How it works

- Participants sign in with a name and email (attendance can mirror to a Google Sheet via Apps Script), then work through mission cards in any order. Mission 01 starts a Deep Research run that works in the background.
- Each mission page names the tool, links to it, shows a visual workflow, downloadable fictional artifacts, copyable prompts, and optional "CHOOSE YOUR NEXT MOVE" paths.
- Every prompt uses the bracket convention: `[square brackets]` mark what to swap for your own work; the venture default inside them means prompts run verbatim. Card 07 collects the generic templates plus meta-prompting.
- By The Matts. Companion resources: [Google-tools workshop](https://wmgmm.github.io/thematts/google.html) · [NotebookLM Prompt Library](https://wmgmm.github.io/notebooklm/)

## Facilitators

Read `FACILITATOR_GUIDE.md` (session plans, preflight, the planted flaws and data answer key). Before a session, open https://wmgmm.github.io/part2/?doctor to verify every file responds. Append `?admin` for session data or `?leaderboard` for a projectable board.

## Development

```bash
npm install
npm run dev       # http://localhost:5173/part2/
npm run build     # production build to dist/
```

React + Vite SPA, no router (hash navigation), deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to `main`. All mission content lives in `src/data/missions.js`; components are generic renderers. The downloadable artifacts regenerate deterministically with `python3 tools/make_artifacts.py` - edit that file to re-skin the whole scenario (see the resource contract comment in `missions.js`). More detail in `CLAUDE.md`.

All workshop materials are fictional teaching content.
