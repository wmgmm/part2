# Facilitator Guide - AI in the Workplace Part 2

Site: https://wmgmm.github.io/part2/ · One page per mission, hash links `#/m1` … `#/m6`.
Premise (self-contained, no Part 2 backstory needed): Chris Gravitas is the participants' new line manager, freshly moved into the Sustainability Engagement job. Two real documents landed on his desk in week one: Cardiff University's Sustainable Futures plan 2025-35 and a university AI position statement. He has volunteered the team to build the briefing pack: an infographic, a slide deck and a working decision tool, all grounded in the two documents. One mission per piece; every mission is self-contained, so any order works. (For returning Part 2 veterans only: yes, this is the Welsh cake man; the stall went to the students' union at the peak of the market.)

**The two anchor documents** (download cards on the missions):
- `Sustainable-Futures-en.pdf`: Cardiff's real ten-year Environmental Sustainability Plan (18pp, approved by UEB 8 July 2025). Public, safe to upload.
- `AI_Position_Statement.pdf`: currently Cardiff Met's public statement, reproduced with attribution as the stand-in; swap in Cardiff's own under the same filename when it publishes.

**The arc, said out loud at the close:** the day mirrors the plan's own change framework: Discover (01), Understand (02), Act (03, 04), Lead (05). Scattered experiments, then shared learning, then embedding AI-enabled ways of working in team processes. Mission 5's last step and card 06 are the "embed it" move.

## Session plans

**90 minutes:** all five missions (01-05), core paths only, choice paths as take-home.
**60 minutes:** missions 01, 03 and 04 (research, infographic duel, critique-and-chain).
Either way: everyone fires Mission 01's Deep Research run in the first five minutes, then works around it (the "make it personal" step fills the wait).
Close by pointing everyone at **card 06 "Useful Prompts (for after the workshop)"**: the mission prompts stripped generic. It is the take-home.

**The bracket convention (worth saying out loud):** in every prompt on the site, [square brackets] mark what to swap for your own work; the text inside them is a runnable default, so prompts work verbatim today and transfer on Monday.

**Closer (recommended):** while people finish Mission 5, generate an Audio Overview of the day's own briefing pack in a Gemini Notebook. Two synthetic hosts earnestly discussing whether the AI statement survives the Demand First test doubles as the wrap-up.

## Preflight (five minutes before)

1. Open **https://wmgmm.github.io/part2/?doctor** - it checks every artifact and asset automatically and tells you "Run the session" or lists what failed.
2. The sustainability plan PDF is 10.7 MB: on thin venue wifi, have it on a stick or ask people to download it while Deep Research runs.
3. On a STANDARD staff account (not yours): check Gemini Notebook Studio shows **Slide Deck** generation (education-tier gated; Mission 5 has a fallback line if absent), and that Deep Research is visible in Gemini's tool picker.
4. If using attendance: Apps Script deployed with the current `google_apps_script.js` and `src/config.js` pointing at it.

## Per-mission crib

### 01 The Landscape (Deep Research) - DISCOVER
Teaching point: EDIT the research plan before running; long jobs run while you work.
One brief covers both themes: AI statements AND net-zero commitments across UK universities, and The Collision section makes them argue. Watch for: runs capped per day on some tiers; the backup landscape report on the page is the recovery path. Prefer "Export to Docs" for the Mission 2 handoff.
The walk-away step ("make it personal") maps the three tools onto each person's real job; reading two answers aloud is a strong early-room moment.

### 02 The Documents (Gemini Notebook) - UNDERSTAND
Teaching point: grounded answers with citations; the 30-second check (open one citation).
**The planted moment:** Q2 asks what the AI statement says about AI's environmental footprint. The statement genuinely says nothing, so a well-behaved notebook answers INSUFFICIENT_DATA. Say it in the room: that refusal is the tool working, and the silence it found is Mission 4's star catch. If a participant's notebook confabulates an answer instead, even better: the 30-second check catches it live.

### 03 The Infographic (Gemini) - ACT
Teaching point: the gap between outputs is the prompt, not the model.
Facilitation of the blind step: give the room four quiet minutes to write and run their own prompt, then collect two volunteers' prompts and read them aloud BEFORE revealing the engineered card. Compare outputs side by side; then "Name the gap" (role, audience, format, constraints, failure state) does the teaching for you.
The engineered prompt centres the Demand First ladder and caps the numbers at four, all verbatim.

### 04 The Gap (Gemini + Copilot) - ACT
Teaching point: AI as critic beats AI as author, and CHAINING: the output of one tool becomes the input of another.
**The real gap** (not planted, genuinely there): the AI statement never mentions AI's environmental footprint, implementation timelines or accountability structures; the plan demands Demand First thinking on every resource decision. The Demand First test's four rungs: Avoid and minimise demand; Source low-impact alternatives; Ensure circularity and recovery; Manage unavoidable impacts responsibly. Expect SILENT on most rungs; that is the point, and it is a finding about a real document, so keep the tone curious rather than gleeful.
The chain step (Gemini critique pasted into Copilot for adjudication) is the mission's name-the-lesson moment: say the word "chaining" out loud.

### 05 The Briefing (Notebook Studio + Canvas) - LEAD
Teaching point: grounded generation beats blank-page generation; then embed it.
Gate: slide generation is tier-dependent; fallback in the step (export Report to Docs, build in Canvas). The Canvas step builds the Demand First decision helper: teams genuinely can use it on their next purchase, which is the "team processes" landing. Choice paths use the Cardiff University Slide Design prompt via Studio's revise pencil.

### 06 Useful Prompts
Eleven generic rows, including the new "Chain a second opinion". Point at "What can these tools do for my job?" first; it is the orientation prompt.

## Prompt standard
Every prompt on the site follows `docs/PROMPT_GUIDANCE_2026.md` (the expert report: structure, output formats, failure states like DATA UNAVAILABLE and INSUFFICIENT_DATA, verbatim quotes, probability scores). Worth saying in the room: the odd-looking ALL-CAPS sections are what makes the outputs reliable.

## Re-skinning
The anchor documents are the whole scenario. Swap `AI_Position_Statement.pdf` for Cardiff's own statement (same filename) when it publishes; regenerate generated files with `python3 tools/make_artifacts.py`. Mission copy lives in `src/data/missions.js`.

---
*The old FACILITATOR_GUIDE.txt/pdf and PARTICIPANT_GUIDE files describe Part 1's escape room, not this workshop.*
