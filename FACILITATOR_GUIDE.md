# Facilitator Guide - AI in the Workplace Part 2

Site: https://wmgmm.github.io/part2/ · One page per exercise, hash links `#/m1` … `#/m6`.

**The split.** Exercises 01-03 are Matt Hayden's, and the site carries his prompts verbatim from his deck so the room can follow either. Exercises 04-06 are Matt Mort's. The deck hands over at slide 25.

**Premise** (self-contained, no Part 1 backstory needed): Chris Gravitas is the participants' new line manager, freshly moved into the Sustainability Engagement job. One document landed on his desk in week one, Cardiff University's Sustainable Futures plan 2025-35, and he has volunteered the team to build the briefing pack from it. Every exercise is self-contained, so any order works. (For returning veterans only: yes, this is the Welsh cake man; the stall went to the students' union at the peak of the market.)

**The anchor document** (download card on every exercise):
- `Sustainable-Futures-en.pdf`: Cardiff's real ten-year Environmental Sustainability Plan (18pp, approved by UEB 8 July 2025). Public, safe to upload. It is the only anchor document; the AI position statement was dropped on 2026-09-04.
- `Deep_research_output.pdf` on Exercise 01: the brief already run. Doubles as the input for the Copilot half when someone's Deep Research allowance is spent.

**Say this at the close:** the day runs scattered experiments, then shared learning, then embedding it in how the team works. Exercise 06 is the "embed it" move and the one that lands the day. The Useful Prompts strip below the grid is the take-home.

## Session plans

Core step time: 01 is 10 minutes, 02 is 12, 03 is 11, 04 is 12, 05 is 12, 06 is 20. Seventy-seven minutes for all six, so nobody does all six. The pages were cut back hard on 2026-09-04 to read as goal-then-steps, so there is far less to read and more time to do.
**04, 05 and 06 run in order and build on each other**: 04 makes the training, 05 shapes it and turns it into slides, 06 checks it and lands the day. Each still works alone, but the arc is worth protecting.
**The 30-second check is gone from every exercise** as of 2026-09-04. It survived on 01, 02 and 03 after 04 and 05 dropped it, and three exercises ending on a step called "The 30-second check" was the most visible break in a pattern the rest of the site had left behind. Verification is not lost: it gets a whole exercise of its own in 06, and the habit is worth saying out loud rather than printing on the page. 01, 02 and 03 still carry their take-home choice paths; 04, 05 and 06 have none. **The last step matters:** they must keep the training session, because Exercise 05 needs it. The easy route is Gemini's copy icon under the answer, then Add source in Notebook and paste it in as copied text: no file, no download, no upload. Copilot users take Export to Word from the three dots. `Example_Training_Session.pdf`, a real Exercise 04 output, covers anyone who loses it: they upload it to Notebook as a source instead of pasting.
**90 minutes:** 01, 04 and 06 (42 min of steps) is the spine and the arc: research, build with a skill, verify with a skill. Add 05 if the room is quick, and let the choice paths be take-home.
**60 minutes:** 01, 04 and 06 is 42 minutes, which now fits with room to talk. If you would rather show breadth, run 02 or 03 in place of 01.
Either way: everyone fires Exercise 01's Deep Research run in the first five minutes, then works around it. Exercise 02 is the best wait-filler because it needs nothing running in the background and costs no Studio generations.
Close by pointing everyone at the **Useful Prompts strip below the exercise grid**: the exercise prompts stripped generic. It is the take-home.

**The bracket convention (worth saying out loud):** in every prompt on the site, [square brackets] mark what to swap for your own work; the text inside them is a runnable default, so prompts work verbatim today and transfer on Monday.

## Preflight (five minutes before)

1. Open **https://wmgmm.github.io/part2/?doctor** - it checks every artifact, image and logo automatically and tells you "Run the session" or lists what failed.
2. The sustainability plan PDF is 10.7 MB: on thin venue wifi, have it on a stick or ask people to download it while Deep Research runs.
3. **Know the quotas, because they will bite.** Gemini Deep Research on a base Education tier is **5 runs a month**. Copilot's Researcher and Analyst share **25 queries a month** between them, which is why Exercise 05 uses ordinary Copilot chat instead. Copilot Researcher takes 10-45 minutes on a complex query, so it is never a live step.
   **Gemini Notebook Studio generations are metered and Google publishes no number for Slide Decks, Infographics or Data Tables** — those rows read "Limited" rather than a figure. The neighbouring rows on the same tier are the calibration: text outputs get 10 a day, media-heavy outputs get 3. Plan for 3. The design keeps every participant to **one Studio generation for the whole day**, the slide deck in Exercise 05; exercises 04 and 06 are entirely text and cost nothing in either tool. Google's own row is labelled "Slide Decks and Revisions", so a revision through the pencil burns another unit, though nudging individual slides inside a deck is free. Daily limits reset at **12am Pacific, about 8am UK**, so a morning session starts clean and an afternoon one inherits whatever people did that morning.
   **Run a pilot.** Because Google publishes nothing, the only trustworthy number is a measured one: on two or three real staff accounts a few days before, generate until something fails. Twenty minutes. Also worth diarising: Google began moving Notebook to compute-based limits on 2 September 2026, currently described as consumer-only. Re-check before the next run. Full detail in `docs/research/2026-09-04-tool-capabilities.md`.
4. On a STANDARD staff account (not yours): check **Slide Deck** appears in Gemini Notebook Studio (confirmed available on Cardiff staff accounts) and that Deep Research is visible in Gemini's tool picker. Also check that a `.md` file attaches cleanly in both Copilot and Gemini, since all three skills are Markdown.
5. If using attendance: Apps Script deployed with the current `google_apps_script.js` and `src/config.js` pointing at it.

## Per-exercise crib

### 01 The Landscape (Deep Research, then Copilot) - Matt Hayden
Teaching point: EDIT the research plan before running; long jobs run while you work. Then the half most people skip: hand the finished report to a different AI and make it prove every claim.
His brief compares the plan's Demand First hierarchy against two other universities and two large public or corporate bodies, asking how demand reduction is enforced in practice rather than promised. The Copilot prompt then fact-checks every claim against its actual sources and rebuilds the report standalone, with an appendix of what changed.
**The moment to land:** the change appendix. Open it in the room and read one row aloud. It is the most concrete demonstration of "the first answer was confident and partly wrong" you will get all day.
Watch for: runs capped per day and per month on some tiers; the finished run on the page is the recovery path, and it is also the honest comparison for anyone who wants to see what good looks like.

### 02 The Image (Copilot) - Matt Hayden
Teaching point: stop writing image prompts from scratch. Take something that already looks right, get the AI to tell you the prompt that would produce it, then freeze that description and change only the subject.
The page supplies a Cardiff photograph to work from. His prompts run in order: reverse the image into subject/composition/camera/lighting/palette/style/mood, then the reusable style block, then the accessibility audit.
**The moment to land:** the accessibility audit. Upload your own generated image to a fresh chat and ask what it shows. If the description does not match what you intended, the image failed, and it would have failed for a screen reader user too. Say that out loud; it reframes accessibility as a quality check rather than a compliance chore.
**The reliable laugh:** nouns and negatives. Ask for "no text on the wall" and you get text on the wall. Demonstrate it live if you have a minute.
Note his caveat, which is on the page: the exercises use Copilot, but every technique is model agnostic.

### 03 The Game (Canvas) - Matt Hayden
Teaching point: the gap between the thin ask and the engineered ask, on the same tool, ten seconds apart. Participants run the one-line version first as a control, then his full specified version.
**The facilitation:** let people run the thin ask and sit with the disappointment for a moment before revealing the engineered one. Then read out what the long version pins down that the short one left open, especially the clause requiring the title, opening screen and game over messages to use terminology lifted from the attached document. That clause is what stops it inventing policy.
Expect imperfect games. Matt Hayden had to slow his down and add a rest lane. Say so: iterating in plain English is the actual skill, not the first output.
Worth doing out loud now the check step is gone: take a phrase from the game over screen and search the PDF for it. Either the model used the document or it invented something plausible.

### 04 The Module (Copilot or Gemini) - Matt Mort
Teaching point: we hand them a working skill rather than asking them to write one. Writing a skill in fifteen minutes produces a thin skill; running a serious one produces somebody who knows what to ask for.
**Make them read it before they run it.** That beat is the whole argument for a file over a remembered prompt: it is legible, auditable, improvable by a colleague, and it does not leave when that colleague does.
**04's completion quote is the day's thesis**, and it is the one quote attributed to The Matts rather than to Gravitas: Jisc's stage two to stage three, and the line that doing it the same way twice is the hard part and the only part that scales. It sits on 04 because that is where they first feel what a skill does. Worth saying out loud, because nobody presses Exercise Complete in a room.
**The line to say at step 1:** you still prompt. The prompt on the page is an ordinary request for what you want, and then one line at the end that never changes, "Follow the attached skill." The skill carries the detail you would otherwise have to remember. All three skill prompts on the site are built that way on purpose, so by Exercise 06 the shape is familiar.
**The moment to land is the gap note.** The skill is required to list everywhere the plan was silent. Most of Sustainable Futures' commitments have no date, no number and no named owner, so the note will be long and the training will say NONE STATED rather than inventing a plausible target. Say out loud that this is the tool working: a ten-year strategy defers annual targets to the plan underneath it, and the gap note is a list of questions worth putting to whoever owns the policy.
Costs no Studio generations. All text, both tools, so nobody is blocked.

### 05 The House Style (Gemini Notebook) - Matt Mort
Teaching point: a notebook grounded in two sources, and a house style applied at generation rather than after the fact.
**The trap to name out loud:** the house style skill goes in the Studio **pencil**, not in the source list. The download strip has a **COPY** button on it for exactly this: it puts the whole file on the clipboard, ready to paste into the pencil. They can still download it as a .md when they want to attach it in Copilot or Gemini. Add it as a source and the deck comes back partly about the style rules, because Studio generates from whatever you gave it. That is a genuinely confusing failure and it looks like the tool misbehaving.
**Nobody gets stranded.** `Example_Training_Session.md` ships as a backup for anyone who skipped 04 or lost what they made. It is a real output of the training skill, gap note and all, so it also doubles as a worked example if you want to show one on the projector.
Costs ONE Studio generation. Say so before they start, and note that a pencil revision spends another.

### 06 The Numbers (Gemini) - Matt Mort
Teaching point: attach a real spreadsheet, insist on Python, and the numbers are computed rather than guessed. Ask for the code and you can check the working.
**The data is real and so are the findings.** HESA's Estates Management record, ten academic years, 163 UK universities, 346,000 rows, published 9 July 2026 under CC BY 4.0. Cardiff is in it every year.
**The answer keys**, computed from the file:
- Scope 1 and 2 fell from **29,663 to 21,336 tCO2e**, down 28% across the decade.
- The estate grew from **451,363 to 532,968 m2**, up 18%, so intensity fell from 65.7 to **40.0 kgCO2e/m2**, down 39%. Two true charts, two different stories. Which one you show is an editorial choice, and that is the point of step 3.
- The linear trend is **about -804 tCO2e a year**. Projected to 2034/35 it lands near **13,300 tCO2e**, and it does not reach zero until roughly **2051**. The plan runs 2025-35. **On this trend Cardiff does not get there**, which is the argument for Demand First made in numbers rather than prose.
**Two traps the prompt handles for them, worth naming anyway:** the header is on row 11 under a metadata block, and 28% of the Value column is text (Yes, No, Medium, percentages), so it must be coerced.
**One trap the prompt does not handle.** A UK-wide total is misleading: reporting was compulsory for English and NI providers until 2018/19 and voluntary after, so the provider count drops from about 160 to about 140 and the national line falls for a reporting reason, not an environmental one. Per-provider trends are fine. If someone charts the UK total, that is the best teaching moment in the exercise.
**Attribution:** HESA, www.hesa.ac.uk, CC BY 4.0, hosted unmodified. Add Jisc's own line if you reproduce figures: they cannot accept responsibility for inferences drawn by third parties.
**Note the file is 13 MB.** Downloading and attaching it is the slow part; start people on it early.
**The close, and the best moment of the exercise:** step 5 turns Canvas on in the same chat and builds the numbers into an interactive dashboard, one HTML file with a toggle between absolute emissions and intensity. That toggle IS the finding from step 3, made clickable. The prompt works in four stages, spec then plan then file then self-check, and forbids code before stage 3, which is what stops it inventing a plausible-looking page. It also forbids inventing numbers: anything not computed earlier in the chat must show NEEDS DATA. Expect the first build to be imperfect and iterate in words, exactly as in Exercise 03.
**Say this at the end:** the projection line is a straight line through ten points, not a forecast. The prompt makes the page say so itself. That honesty is the difference between a dashboard and a claim.
**06 closes on the finding**, in Gravitas's voice: better to learn the line does not get there from a spreadsheet in September than from a committee in 2034.

### The skills we hand out
Downloads, not copy-and-paste. Generated by `tools/make_artifacts.py`, all under 6,000 characters so they paste into Copilot Agent Builder's instructions field.
- `Training_Module_Builder.md` - drafts the session, cites the source, and refuses to invent a criterion.
- `Cardiff_House_Style.md` - V1-V6 voice rules and D1-D8 design rules, measured out of Cardiff's own PowerPoint template. Generation only: it builds, it does not review, and it hands back a note of any rule it could not apply. Used inside Exercise 05's pencil step. The evidence is in `docs/research/2026-09-04-cardiff-template-design-system.md`.
- `Fact_Check_Cardiff.md` - **not used by any exercise since 06 became the data analysis.** It is still generated and still good: evidence ledger, seven verdicts, named flags, adapted with credit from fact-check v0.2. Either hand it out as a take-home or retire it; it is currently reachable by nobody.
Provenance, the anatomy they follow and the licence position are in `docs/research/2026-09-04-skill-authoring-patterns.md`. `Document_QA_Skill.txt` was retired on 2026-09-04.

### The Useful Prompts strip (not an exercise)
Below the exercise grid; opens the library page (#/prompts). Fifteen rows. Four orphaned by the dropped post-mortem exercise were cut on 2026-09-04 and four added for moves the day teaches but the library did not carry: "Turn a prompt into a skill file" (the day's headline move), "Lock a visual style across a set", "Audit an image you made" and "Build a small working tool". Point at "What can these tools do for my job?" first; it is the orientation prompt and the best filler while Deep Research grinds.

## Prompt standard
Exercises 04-06 follow `docs/PROMPT_GUIDANCE_2026.md` (structure, output formats, failure states like DATA UNAVAILABLE and NONE STATED, verbatim quotes, restricted answer spaces). Worth saying in the room: the odd-looking ALL-CAPS sections are what makes the outputs reliable.
Exercises 01-03 carry Matt Hayden's prompts verbatim and are deliberately exempt: they are held as `MH_*` constants in `missions.js` and must not be edited to match house style.

## Re-skinning
The sustainability plan is the whole scenario. Exercise copy lives in `src/data/missions.js`; regenerate the one generated file with `python3 tools/make_artifacts.py`. Verified tool limits and their sources are in `docs/research/2026-09-04-tool-capabilities.md`; check it before writing a step that promises a feature, and re-check it before a session in a few months, because most of these products shipped changes during 2026.
