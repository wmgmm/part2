# AI in the Workplace Part 2

A hands-on workshop website for Cardiff University staff: seven guided exercises plus a take-home prompt library, teaching practical AI skills with **Google Gemini (Deep Research, Notebook, Canvas) and Microsoft Copilot**, anchored on two real documents: Cardiff University's Sustainable Futures plan 2025-35 and a university AI position statement. Chris Gravitas, your new line manager in the Sustainability Engagement job, has volunteered the team to build the briefing pack: an infographic, a slide deck and a working decision tool, all grounded in the two documents.

**Live site:** https://wmgmm.github.io/part2/

## How it works

- Participants sign in with a name and email (attendance can mirror to a Google Sheet via Apps Script), then work through the exercise cards in any order. Exercise 01 starts a Deep Research run that works in the background.
- Each exercise page names the tool, links to it, shows a visual workflow, downloadable documents, copyable prompts, and optional "CHOOSE YOUR NEXT MOVE" paths. Exercise 05 teaches chaining: a Gemini post-mortem adjudicated in Copilot, and Exercise 07 packages a prompt as a plain text skill file the whole team can attach.
- Every prompt uses the bracket convention: `[square brackets]` mark what to swap for your own work; the default inside them means prompts run verbatim. The Useful Prompts strip below the grid collects the generic templates plus meta-prompting. Exercise 03 turns the plan into a data table with Notebook Data Tables and audits it with code.
- By The Matts. Companion resources: [Google-tools workshop](https://wmgmm.github.io/thematts/google.html) · [NotebookLM Prompt Library](https://wmgmm.github.io/notebooklm/)

## Facilitators

Read `FACILITATOR_GUIDE.md` (session plans, preflight, the real policy gap and the Demand First rungs). Before a session, open https://wmgmm.github.io/part2/?doctor to verify every file responds. Append `?admin` for session data or `?leaderboard` for a projectable board.

## Development

```bash
npm install
npm run dev       # http://localhost:5173/part2/
npm run build     # production build to dist/
```

React + Vite SPA, no router (hash navigation), deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to `main`. All exercise content lives in `src/data/missions.js`; components are generic renderers. Generated artifacts rebuild deterministically with `python3 tools/make_artifacts.py`; the sustainability plan PDF is a copy of the real published document, and the AI position statement swaps for Cardiff's own under the same filename when published (see the swap contract comment in `missions.js`).

The anchor documents are public; everything else is teaching material.
