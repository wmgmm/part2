# AI in the Workplace Part 2

A hands-on workshop website for Cardiff University staff: six guided exercises plus a take-home prompt library, teaching practical AI skills with **Google Gemini (Deep Research, Notebook, Canvas) and Microsoft Copilot**, anchored on one real document: Cardiff University's Sustainable Futures plan 2025-35. Chris Gravitas, your new line manager in the Sustainability Engagement job, has volunteered the team to build the briefing pack: a fact-checked research report, matching imagery, a slide deck, an audit of what the plan actually commits the university to, a working decision tool, and a way of working the team can repeat.

The workshop is delivered by two presenters. Exercises 01-03 are Matt Hayden's and the site carries his prompts verbatim from his deck; exercises 04-06 are Matt Mort's.

**Live site:** https://wmgmm.github.io/part2/

## How it works

- Participants sign in with a name and email (attendance can mirror to a Google Sheet via Apps Script), then work through the exercise cards in any order. Exercise 01 starts a Deep Research run that works in the background.
- Each exercise page names the tool, links to it, shows a visual workflow, downloadable documents, copyable prompts, and optional "CHOOSE YOUR NEXT MOVE" paths. Exercise 01 chains two tools, having Copilot fact-check and rebuild a Gemini Deep Research report. Exercises 04-06 hand out three working skill files as Markdown downloads and build staff training with them: one skill drafts the module from the plan, a second shapes it into Cardiff's voice and look with a change log, and a third verifies the claims before it goes anywhere.
- Every prompt uses the bracket convention: `[square brackets]` mark what to swap for your own work; the default inside them means prompts run verbatim. The Useful Prompts strip below the grid collects the generic templates plus meta-prompting.
- By The Matts. Companion resources: [Google-tools workshop](https://wmgmm.github.io/thematts/google.html) · [NotebookLM Prompt Library](https://wmgmm.github.io/notebooklm/)

## Facilitators

Read `FACILITATOR_GUIDE.md` (session plans, preflight, per-exercise cribs and the answer keys). Before a session, open https://wmgmm.github.io/part2/?doctor to verify every file and image responds. Note the quotas in the preflight: Gemini Deep Research is 5 runs a month on a base Education tier, and Copilot's Researcher and Analyst share 25 a month. Verified tool limits and their sources are in `docs/research/2026-09-04-tool-capabilities.md`.

## Development

```bash
npm install
npm run dev       # http://localhost:5173/part2/
npm run build     # production build to dist/
```

React + Vite SPA, no router (hash navigation), deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to `main`. All exercise content lives in `src/data/missions.js`; components are generic renderers. The one generated artifact rebuilds deterministically with `python3 tools/make_artifacts.py`; the sustainability plan PDF is a copy of the real published document and the Deep Research output is a genuine tool run, so neither is generated. Matt Hayden's prompts are held as `MH_*` constants at the top of `missions.js` and are verbatim from his deck: do not edit them to match house style.

The anchor document is public; everything else is teaching material.
