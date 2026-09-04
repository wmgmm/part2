# ROADMAP: The Policy Pivot (Gravitas Returns)

Status: **approved 2026-08-29, in progress.** This file is the working plan for the Part 2 pivot; tick items as they land. Also published as a private web page for reading. Log at the bottom.

## Why

The workshop pivots from the fictional Welsh cake venture to two real Cardiff documents. Staff practise the same AI skills, but every output is something they could genuinely take back to their team. The narrative arc is the point of the day: scattered individual experiments, then shared learning, then embedding AI-enabled ways of working into team processes. That arc happens to be the sustainability plan's own change framework (Discover, Understand, Act, Lead), so the workshop practises AI on the plan while quietly following it.

There is also a real, deliberate teaching gap: the AI position statement says nothing about AI's environmental footprint, while the sustainability plan demands Demand First thinking about every resource decision. The missions surface that gap honestly (Mission 2 hits INSUFFICIENT_DATA on it; Mission 5 makes it the star catch).

## The two anchor documents

| File | What it is | Source |
|---|---|---|
| `Sustainable-Futures-en.pdf` | Cardiff University's real Environmental Sustainability Plan 2025-35 (18 pages, approved by UEB 8 July 2025) | Supplied PDF |
| `AI_Position_Statement.pdf` | A university AI position statement. Currently Cardiff Met's, reproduced with attribution as the stand-in | cardiffmet.ac.uk/about/artificial-intelligence/position-statement/ |

**Swap contract:** when Cardiff University publishes its own AI position statement, replace `AI_Position_Statement.pdf` under the same filename and update one `note` string in `src/data/missions.js`. No other code changes.

Backup artifact: `Policy_Landscape_Report.pdf`, one real Deep Research run of the Mission 1 brief, exported to PDF (recovery path if a participant's run fails).

## The six cards

| Code | Card | Tool(s) | Plan stage |
|---|---|---|---|
| 01 | The Landscape: research the policy landscape with Deep Research (one brief covering AI statements AND net-zero across UK universities) | Gemini Deep Research | Discover |
| 02 | The Documents: question both policies in Gemini Notebook (grounded answers, mind map, the INSUFFICIENT_DATA moment) | Gemini Notebook | Understand |
| 03 | The Commitments: turn the plan into a data table (Notebook Data Tables), export, audit it with code | Gemini Notebook + Gemini | Understand |
| 04 | The Infographic: explain the plan to staff; your prompt first, then ours | Gemini | Act |
| 05 | The Post-Mortem: predict the failure (prospective hindsight), then chain Copilot to adjudicate | Gemini + Copilot | Act |
| 06 | The Briefing: team briefing deck in Notebook Studio, interactive Demand First helper in Canvas | Gemini Notebook + Canvas | Lead |
| - | Useful Prompts strip (not a mission, below the grid, #/prompts): the take-home library, 14 rows | Any AI chat | Take-home |

Narrative: Christopher Gravitas is back. He sold the Welsh cake stall to the students' union at the peak of the market (freshers' week) and has been rehired as Sustainability Engagement Officer. Two documents landed on his desk in week one; he has volunteered your team to work out what to do about them. Each mission builds one piece of the team briefing pack.

## Phase 1: Artifacts

- [x] Fetch the Cardiff Met position statement text verbatim
- [x] Rewrite `tools/make_artifacts.py`: remove all Venture_* generation, BRIEF_TEXT and the drift guard; add the `AI_Position_Statement.pdf` generator (attribution footer: source URL, retrieval date, "to be replaced by Cardiff University's own statement when published"); swap-contract comment at top
- [x] Generate `AI_Position_Statement.pdf`
- [x] Copy the sustainability PDF to `public/placeholders/Sustainable-Futures-en.pdf` (10.7 MB, shipping as-is)
- [x] Delete the eight `Venture_*` files (git history is the archive)
- [ ] Stand-in `Policy_Landscape_Report.pdf` in place; swap in a real Deep Research export when Matt runs the brief
- [x] Verify: script runs clean, both PDFs open, `npm run build` green

## Phase 2: Mission content (structure and copy)

- [x] Rewrite `src/data/missions.js`: artifact map A (susPlan, aiStatement, landscapeReport), six cards with clean ids m1-m6 = codes 01-06; keep TOOLS, APPS, CARDIFF_DESIGN_PROMPT (byte-identical), PROMPT_LIBRARY_URL, getMission
- [x] Mission briefs, step bodies, workflow chips, plan-stage lines, hooks
- [x] Five new Gravitas verdicts plus card 06 sign-off
- [x] New gallery memo and signature (`MissionGallery.jsx`), new section header, new all-complete line
- [x] `SplashScreen.jsx` deck line and the files-are-safe wording fix
- [x] Verify: build green; gallery and all six pages render; `?doctor` green under preview

## Phase 3: Expert prompts (subagents)

- [x] Agent P1: M1 brief + skim table, M2 fact-checker + gap register
- [x] Agent P2: M3 engineered infographic (new), M4 devil's advocate, Demand First test (new), Copilot adjudication
- [x] Agent P3: M5 deck prompt, Canvas Demand First helper, card 06 "Chain a second opinion"
- [x] Integrate all prompts in the main session (one file, one writer)
- [x] QA agent over the finished missions.js: brackets balanced with runnable defaults, failure states present, UK English, no em dashes, CARDIFF_DESIGN_PROMPT untouched, estMinutes sums
- [x] Fix QA findings; build green

## Phase 4: Docs sweep

- [x] `FACILITATOR_GUIDE.md` rewrite (session plans, per-mission crib with the real gap and Demand First rungs, blind-prompt facilitation for 03, preflight incl. 10.7 MB on venue wifi, Audio Overview closer, say the Discover/Understand/Act/Lead arc out loud)
- [x] `README.md` premise and card count
- [x] Project `CLAUDE.md` (what this is, routes #/m1..#/m6, artifact section)
- [x] `tasks/todo.md` dated log entry

## Phase 5: QA and sign-off

- [x] Full browser walk: splash, gallery, all six pages, accordions, downloads (both anchor PDFs open), verdict flow
- [x] `?doctor` all green
- [x] Prompt lint (brackets, em dashes, escapes)
- [x] Report to Matt; commits only when he asks (three logical commits: artifacts / content / docs); never push

## Open questions for Matt (defaults in use until answered)

1. ~~Hero image~~ RESOLVED: Matt supplied the campus AI-policy-stall cartoon; converted to `policy_stall.webp` (1600px, 237 KB) and wired in.
2. **Cardiff Met statement**: full text reproduced with attribution (default) or shortened extract plus link?
3. **10.7 MB plan PDF**: ship as-is (default) or recompress?
4. **Backup landscape report**: run the final M1 brief once on your account for a genuine artifact? (Stand-in note ships until then.)
5. **Gravitas lines**: approve "Sustainability Engagement Officer" and the freshers-week stall sale, or supply your own.
6. ~~Card 06 pruning~~ RESOLVED: the spreadsheet pair (verified analysis, Excel QA) returned with the new data mission; the library strip holds 14 rows.

## Out of scope

Leaderboard/check-in rework and Apps Script redeployment (still awaiting Matt). The legacy escaperoom images and Part 1 guide files were deleted on 2026-09-04.

## Log

- 2026-08-29: Pivot approved. Roadmap written; Phase 1 begun.
- 2026-08-29 (later): Phases 1-5 complete in one sitting. Artifacts generated and swapped; missions.js rewritten (six cards, prompts to the expert standard via three subagents, QA pass clean bar one spelling fix); gallery memo, splash, guides and docs updated; Matt supplied the new hero illustration (policy_stall.webp, wired in). Build green; ?doctor all 7 files 200; browser walk of gallery, 01, 04, 05, 06 clean; no console errors. Everything uncommitted, awaiting Matt.
- 2026-08-30: New Mission 03 The Commitments (Notebook Data Tables + code audit); missions renumbered 04-06; Useful Prompts moved out of the grid to a strip + #/prompts. Also this week: Mission 1 slimmed to two core steps, Mission 5 recentred on the post-mortem method, style-capture prompt added, story made self-contained (Chris, your new line manager), stage words on cards, artifact-card alignment fix.
