# Facilitator Guide - AI in the Workplace Part 2

Site: https://wmgmm.github.io/part2/ · One page per mission, hash links `#/m1` … `#/m8`.
Premise: Christopher Gravitas has left IT Services to open a campus Welsh cake stall; participants build the business with AI. All files are fictional and safe to upload anywhere. Every mission is self-contained (provided files stand in for any other mission's output), so any order works.

## Session plans

**90 minutes:** all six missions (cards 01-06), core paths only, choice paths ("CHOOSE YOUR NEXT MOVE") as take-home.
**60 minutes:** missions 01, 03 and 06 (research → customers → app). Say so out loud at the start.
Either way: everyone fires Mission 01's Deep Research run in the first five minutes, then works around it. Close by pointing everyone at **card 07 "Useful Prompts"**: the mission prompts stripped generic, plus meta-prompting (AI writes your prompt, AI writes your Deep Research brief). It is the take-home.

**The bracket convention (worth saying out loud):** in every prompt on the site, [square brackets] mark what to swap for your own work; the text inside them is just the Welsh cake default, so prompts run verbatim today and transfer on Monday.

**Closer (recommended):** while people finish Mission 6, drop the day's artefacts into a Gemini Notebook and generate an Audio Overview. Play 60 seconds of two synthetic hosts earnestly discussing a Welsh cake queueing crisis. Doubles as the wrap-up.

## Preflight (five minutes before)

1. Open **https://wmgmm.github.io/part2/?doctor** - it checks every artifact and asset automatically and tells you "Run the session" or lists what failed.
2. On a STANDARD staff account (not yours): check Gemini Notebook Studio shows **Slide Deck** generation (education-tier gated; Mission 5 has a fallback line if absent).
3. Deep Research visible in Gemini's tool picker on a standard account.
4. If using attendance: Apps Script deployed with the current `google_apps_script.js` (Attendance sheet) and `src/config.js` pointing at it.

## Per-mission crib

### 01 Market Research with Deep Research
Teaching point: EDIT the research plan before running; long jobs run while you work.
Watch for: runs capped per day on some tiers - the backup report on the page is the recovery path. Prefer "Export to Docs" for the Mission 2 handoff.

### 02 Question the Report in Gemini Notebook
Teaching point: grounded answers with citations; the 30-second check (open one citation).
Wow moment: the choice path "Close the loop" runs Deep Research from INSIDE the notebook against their own evidence gaps.

### 03 Customer Feedback Analysis with Gemini
Teaching point: "use code, do not estimate", then verify one number by response_id.
**Planted data quirks** (a good verified summary confesses them): 3 blank ratings; row **R067 spend £320.00** (typo); 16 rows with no comment. Ratings average 3.2, dipping below 2.8 in weeks 5–8 as queue complaints spike, recovering by term end.
**Theme distribution** (~104 comments): queue ~34, price ~22 (split too-dear vs fair), sold-out-by-1pm ~19, dietary/allergens ~14, payment ~9, location/hours ~7, pure praise ~5; six comments straddle two themes; two are sarcastic (sentiment traps). Queue + sold-out are the same capacity problem: **48%** - the intended "fix one thing" answer, and Mission 6's target.
Discussion gold: did people merge queue and sold-out into one theme or not? Both are defensible; that judgement call is the lesson.

### 04 Business Plan Audit with Copilot
Teaching point: AI as critic beats AI as author; structured scoring with cited evidence.
Hazard: on work Copilot licences, opening the docx in Word can land in agent mode, which FIXES instead of critiquing. Chat, not agent.
**The ten planted flaws** (finding six beats the AI that wrote it):
1. 600 cakes/day claimed vs its own ops section's one-griddle ceiling (8 cakes/6 min × 4 h = 320).
2. £1,800/week "profit" is actually revenue: no ingredient costs, pitch fee or labour.
3. No allergen provision (Natasha's Law/PPDS) or 28-day food-business registration, despite gluten-free demand in the feedback.
4. Annual figure = term-time week × 52; the market report says ~14 dead weeks.
5. "No competition" vs the report's two named competitors (The Cwtch Coffee Co., Mrs Mabli's Bakes).
6. Fabricated citation: "78% of students… (Cardiff Student Survey, 2024)" - exists nowhere. The AI-slop tell; the highest-value catch.
7. Single point of failure everywhere: one griddle, one supplier, one operator, outdoor pitch, no contingency ("We do not anticipate significant risks").
8. Untestable success measure ("go-to campus destination within the first year").
9. Price contradiction: £2.50 in Pricing vs £3.20 in the financial model.
10. Loyalty scheme "shares the list with local partner businesses": UK GDPR breach, meant to be discovered rather than lectured.
Choice path B (Canvas sliders) makes flaws 1, 2 and 4 collapse visibly.

### 05 Pitch Deck in Notebook Studio
Teaching point: grounded generation beats blank-page generation; the quiz-your-own-pitch check.
Gate: slide generation is tier-dependent; fallback (in the step): export the notebook Report to Docs, build the deck in Gemini Canvas.
Choice paths use the Cardiff University Slide Design prompt (Matts' NotebookLM Prompt Library) via Studio's revise pencil.

### 06 Build an App with Gemini Canvas
Teaching point: plain-English iteration; fix the top complaint (capacity), not an easy one.
Endings that land: pre-order form with pickup slots; live sold-out board; Build-a-Box picker.

### 08 Build a Dashboard, Twice
Teaching point: Copilot upgrades the spreadsheet, Canvas replaces it; a control chart separates common from special cause.
**Planted patterns in Venture_Sales_Log.xlsx** (Sales + Waste log sheets): Plain cakes 51% of revenue; weeks 5-6 revenue drops ~51% (griddle temperature fault, matching waste-log entries) - genuine special-cause variation the SPC chart should flag; one clerical outlier (2026-03-04, Plain, units 250, a typo for 25); two waste causes carry ~68% of waste cost (griddle-related waste ~67%: the vital few). The Canvas prompt's SIMULATE A BAD WEEK button is the demo moment; the Cymraeg toggle plays well in the room.

## Re-skinning
All artefacts regenerate from `tools/make_artifacts.py` (deterministic). Swap the feedback file for module evals or helpdesk tickets, keep the filenames, and the whole workshop re-skins. Mission copy lives in `src/data/missions.js`.

---
*The old FACILITATOR_GUIDE.txt/pdf and PARTICIPANT_GUIDE files describe Part 1's escape room, not this workshop.*
