# Facilitator Guide - AI in the Workplace Part 2

Site: https://wmgmm.github.io/part2/ · One page per exercise, hash links `#/m1` … `#/m7`.
Premise (self-contained, no Part 2 backstory needed): Chris Gravitas is the participants' new line manager, freshly moved into the Sustainability Engagement job. Two real documents landed on his desk in week one: Cardiff University's Sustainable Futures plan 2025-35 and a university AI position statement. He has volunteered the team to build the briefing pack: an infographic, a slide deck and a working decision tool, all grounded in the two documents. One exercise per piece; every exercise is self-contained, so any order works. (For returning Part 2 veterans only: yes, this is the Welsh cake man; the stall went to the students' union at the peak of the market.)

**The two anchor documents** (download cards on the exercises):
- `Sustainable-Futures-en.pdf`: Cardiff's real ten-year Environmental Sustainability Plan (18pp, approved by UEB 8 July 2025). Public, safe to upload.
- `AI_Position_Statement.pdf`: currently Cardiff Met's public statement, reproduced with attribution as the stand-in; swap in Cardiff's own under the same filename when it publishes.

**The arc, said out loud at the close:** the day mirrors the plan's own change framework: Discover (01), Understand (02, 03), Act (04, 05), Lead (06), Embed (07). Scattered experiments, then shared learning, then embedding AI-enabled ways of working in team processes. Exercise 07 is the "embed it" move, and the Useful Prompts strip is the take-home.

## Session plans

**90 minutes:** exercises 01-04 and 07 core paths only (07 is the one that lands the day); choice paths as take-home.
**60 minutes:** exercises 01, 04 and 07 (research, infographic duel, the skill file); swap 04 for 03 (the data table audit) in a data-curious room.
Either way: everyone fires Exercise 01's Deep Research run in the first five minutes, then works around it (a good wait-filler: the Useful Prompts strip's "What can these tools do for my job?" prompt, run with their real role).
Close by pointing everyone at the **Useful Prompts strip below the exercise grid**: the exercise prompts stripped generic. It is the take-home.

**The bracket convention (worth saying out loud):** in every prompt on the site, [square brackets] mark what to swap for your own work; the text inside them is a runnable default, so prompts work verbatim today and transfer on Monday.

**Closer (recommended):** while people finish Exercise 07, generate an Audio Overview of the day's own briefing pack in a Gemini Notebook. Two synthetic hosts earnestly discussing whether the AI statement survives the Demand First test doubles as the wrap-up.

## Preflight (five minutes before)

1. Open **https://wmgmm.github.io/part2/?doctor** - it checks every artifact and asset automatically and tells you "Run the session" or lists what failed.
2. The sustainability plan PDF is 10.7 MB: on thin venue wifi, have it on a stick or ask people to download it while Deep Research runs.
3. On a STANDARD staff account (not yours): check Gemini Notebook Studio shows **Slide Deck** generation (education-tier gated; Exercise 06 has a fallback line if absent), and that Deep Research is visible in Gemini's tool picker.
4. If using attendance: Apps Script deployed with the current `google_apps_script.js` and `src/config.js` pointing at it.

## Per-exercise crib

### 01 The Landscape (Deep Research) - DISCOVER
Teaching point: EDIT the research plan before running; long jobs run while you work.
The brief surveys UK university generative AI positions as a comparable table (who each covers, main values, PRO/NEUTRAL/AGAINST stance, and whether AI's environmental footprint gets a mention: the datapoint that seeds the later exercises), with Welsh and Russell Group sections and an outliers hunt (The Differences is the section to read aloud). Watch for: runs capped per day on some tiers; the backup landscape report on the page is the recovery path. Prefer "Export to Docs" for the Exercise 2 handoff.
While the run grinds, point people at the Useful Prompts strip's "What can these tools do for my job?" prompt with their real role in the brackets; reading two answers aloud is a strong early-room moment.

### 02 The Documents (Gemini Notebook) - UNDERSTAND
Teaching point: grounded answers with citations; the 30-second check (open one citation).
**The planted moment:** Q2 asks what the AI statement says about AI's environmental footprint. The statement genuinely says nothing, so a well-behaved notebook answers INSUFFICIENT_DATA. Say it in the room: that refusal is the tool working, and the silence it found is Exercise 5's star catch. If a participant's notebook confabulates an answer instead, even better: the 30-second check catches it live.

### 03 The Commitments (Notebook Data Tables + Gemini) - UNDERSTAND
Teaching point: documents become data (Studio > Data Table > Export to Sheets > download .xlsx), then "use code" analysis computes rather than guesses.
**The answer key:** expect MOST commitments to come back NONE STATED for dates and NONE NAMED for owners. That is not a gotcha: Sustainable Futures is a strategy that explicitly defers yearly targets to the annual ESAP. Teach it as strategy-vs-action-plan, and "so ask for the ESAP" as the natural follow-up. The 30-second check matters here: every audit inherits its table's errors, so verify one quote against the PDF.
Gate: Data Tables is a newer Studio output; if an account does not show it, pair people up (the export is one file anyway).

### 04 The Infographic (Gemini) - ACT
Teaching point: the gap between outputs is the prompt, not the model.
Facilitation of the blind step: give the room four quiet minutes to write and run their own prompt, then collect two volunteers' prompts and read them aloud BEFORE revealing the engineered card. Compare outputs side by side; then "Name the gap" (role, audience, format, constraints, failure state) does the teaching for you.
The engineered prompt centres the Demand First ladder and caps the numbers at four, all verbatim.

### 05 The Post-Mortem (Gemini + Copilot) - ACT
Teaching point: the pre-mortem is a named prompt-engineering method (prospective hindsight): "will this work?" gets hedging, "it failed, explain why" gets committed causes with quoted evidence. Second lesson: CHAINING, the output of one tool becoming the input of another.
**The real gap** (not planted, genuinely there): the AI statement never mentions AI's environmental footprint, implementation timelines or accountability structures; the plan demands Demand First thinking on every resource decision. The Demand First test's four rungs: Avoid and minimise demand; Source low-impact alternatives; Ensure circularity and recovery; Manage unavoidable impacts responsibly. Expect SILENT on most rungs; that is the point, and it is a finding about a real document, so keep the tone curious rather than gleeful.
The chain step (Gemini critique pasted into Copilot for adjudication) is the exercise's name-the-lesson moment: say the word "chaining" out loud.

### 06 The Briefing (Notebook Studio + Canvas) - LEAD
Teaching point: grounded generation beats blank-page generation; then embed it.
Gate: slide generation is tier-dependent; fallback in the step (export Report to Docs, build in Canvas). The Canvas step builds the Demand First decision helper: teams genuinely can use it on their next purchase, which is the "team processes" landing. Choice paths use the Cardiff University Slide Design prompt via Studio's revise pencil.

### 07 The Skill (any AI chat) - EMBED
Teaching point, and the point of the whole day: a prompt scales to one person, a skill scales to a process. Most teams are at "using AI" (ad hoc, in one person's chat history, and it leaves when they leave). A skill is a plain text file you attach alongside the document, so anyone picks it up and gets the same answer the same way.
**Why plain text and not a Gem or an agent:** Cardiff staff accounts cannot create Gems, and Copilot Studio needs licences and admin. A .txt file needs neither, works in Copilot and Gemini alike, and survives the next tool change. Say that out loud: it is a feature, not a workaround.
**What to expect:** first attempts come back too vague (missing failure states, no human check). That IS the lesson, and the 30-second check catches it: if the model ignored the skill's own OUTPUT FORMAT, the file was not specific enough. Editing the file rather than the chat is the habit to name.
The last step ("Give it a home") is the one to land in the room: the file goes where the work happens, with one line saying which process step it belongs to. The AI does the repeatable analysis; the human still makes and owns the decision.

### The Useful Prompts strip (not an exercise)
Below the exercise grid; opens the library page (#/prompts). Fourteen generic rows, including "Chain a second opinion", "Copy the style of a document you like" and the restored spreadsheet pair. Point at "What can these tools do for my job?" first; it is the orientation prompt.


## Prompt standard
Every prompt on the site follows `docs/PROMPT_GUIDANCE_2026.md` (the expert report: structure, output formats, failure states like DATA UNAVAILABLE and INSUFFICIENT_DATA, verbatim quotes, probability scores). Worth saying in the room: the odd-looking ALL-CAPS sections are what makes the outputs reliable.

## Re-skinning
The anchor documents are the whole scenario. Swap `AI_Position_Statement.pdf` for Cardiff's own statement (same filename) when it publishes; regenerate generated files with `python3 tools/make_artifacts.py`. Exercise copy lives in `src/data/missions.js`.

---
*The old FACILITATOR_GUIDE.txt/pdf and PARTICIPANT_GUIDE files describe Part 1's escape room, not this workshop.*
