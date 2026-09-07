# AI in the Workplace - Field Missions build

## Venture redesign (approved 2026-08-21, plan file has full detail)
- [x] A. Schema: artifacts[] array + step link field (MissionDetail, MissionCard) - verified: m5 renders 3 download strips
- [x] B. missions.js rewrite: TOOLS const (Gemini Notebook rename, verified 16 Jul 2026), six venture missions, Cardiff design prompt embedded verbatim, per-mission SWAP lines, in-notebook Deep Research listed under ideas (m1 stretch + m2 stretch)
- [x] C. MissionGallery: Gravitas recruitment memo + C1/C2 governance callout (Matt's exact wording) + only-an-hour line
- [x] D. tools/make_artifacts.py → 7 venture files generated & regenerable. Data verified: 120 rows/104 comments, capacity themes 48%, ratings dip weeks 5-8 (2.6-2.8 vs ~3.9-4.3), 3 blank ratings, R067 £320 typo; summary PDF matches actual data (avg 3.2)
- [x] E. Build green; browser-walked gallery + m2 + m5 (multi-artifact strips, steps, prompts). Note: hash navigation via the extension's navigate tool needs a reload; real card clicks fire hashchange fine. Background-tab screenshots freeze framer-motion fades (rAF throttling), not a product bug.
- Facilitator notes: close live sessions with a 60s Audio Overview of the day's artifacts; VERIFY on a standard Cardiff staff account that Gemini Notebook deck generation is available (education-tier gated)

Plan: /home/wmgmm2/.claude/plans/this-was-an-escaperoom-effervescent-squid.md (approved 2026-08-20)
Hourly Ralph Wiggum loop: one verifiable slice per iteration, tick items here.

## Build order
- [x] 1. Rebase to `/workshop/`, strip timer/scoring/failure, hash routing (`#/m3`) - `npm run build` passes; preview serves page + artifacts (200)
- [x] 2. `missions.js` schema + MissionGallery/MissionCard/MissionDetail - built, incl. PromptBox (copy + select fallback), SortGame, progress lib
- [~] 3. Mission content: first pass authored for ALL six missions in missions.js (prompts from google.html bank). Still to refine: browser walkthrough of each mission page; survey xlsx needs a free-text comments column for m4 step 4
- [x] 4. Check-in flow: DEBRIEF form ("one thing the AI got wrong" required with witty error, "best prompt" optional) stored in progress entry via markComplete(email, missionId, checkIn); localStorage progress + refresh-resume already working. Apps Script mirroring still pending (step 5). Browser-verified on m4 incl. validation, CLEARED verdict.
- [ ] 5. Walls: `?leaderboard` → progress wall + Wall of Wrong; Apps Script v1 payload; `?doctor` preflight
- [ ] 6. Artifact authoring: Green Light cheat sheet, research brief + pre-generated Deep Research report, Gravitas flawed bid + criteria doc, notes+data pack, multi-format exports
- [ ] 7. Styling pass (google.html prompt boxes/badges/callouts + tabloid reskin), a11y, mobile

## Session log
- 2026-08-22 (iteration: lint of new prompts): both copies of the personalisation prompt byte-identical, all brackets balanced, no double-escapes, m1 core minutes sum to the declared 15. Build green. The Excel-QA + personalisation batch is clean and ready to push on Matt's word.
- 2026-08-22 (personalisation prompt, user-directed, plan approved): "I work as [X] in a [Y]" tool-mapping prompt added twice — m1's new core step "While it runs: make it personal" (the walk-away filler while Deep Research runs; estMinutesCore 15; workflow chip 'Make it personal') and as the FIRST row of card 09 (14 rows now, title "What can these tools do for my job?"). Expert standard: FORMAT three lines per tool (task / example prompt with brackets / building it in), NO STRONG FIT failure state, try-first verdict. Facilitator guide crib note added. Also this session: "QA an Excel file with code" row (13th) added earlier. Build green, m1 step browser-verified, no console errors. Uncommitted.
- 2026-08-22 (iteration: post-upgrade QA sweep): linted all 42 prompt strings after the 27 scripted rewrites — no leftover pre-upgrade phrasing, no double-escaped newlines, all [brackets] balanced, both IMPROVE copies carry the upgraded clause; m4's multi-line auditor prompt render-verified in the browser, no console errors. The upgrade batch is clean and ready to ship on Matt's word.
- 2026-08-22 (expert prompt-engineering upgrade, 8 subagents + card 09 rebuild): expert report saved as docs/PROMPT_GUIDANCE_2026.md and referenced from CLAUDE.md + facilitator guide. All 27 prompt rewrites applied across m1-m9: RTF structure, named-section/table answer shaping, failure states (DATA UNAVAILABLE, INSUFFICIENT_DATA, NONE FOUND, NO EVIDENCE, NO ANOMALIES FOUND), verbatim-quote grounding, probability-sum-to-100% post-mortems, spec-plan-code-self-check pipelines (m6 build, m8 canvas tail), lazy poster prompt untouched by design. Card 09 rebuilt: 12 rows = the expert's 8 house-styled (UK English, brackets, incl. the NEW scenario-matrix brainstorming quadrants) + our 4 upgraded uniques. BRIEF_TEXT re-synced with real newlines, guard unescape extended for \\n, brief docx now multi-paragraph, artifacts regenerated, guard passes. Build green; m1 multi-line PromptBox + card 09 rows browser-verified, no console errors. Uncommitted.
- 2026-08-22 (four-lens review, 10 subagents, fixes applied): nine mission reviewers (workplace usefulness / comms clarity / user-centric) + one consistency auditor. ~40 findings; applied the high-confidence set across all nine cards: solo-visitor plumbing (UI locations for Deep Research, Studio panel, Canvas, Code view, Sheets upload; same-chat vs NEW-chat continuity in m3/m4/m9; attach-the-rubric in m4; paste-into-customise-box in m5), runnable bracket defaults (m6 build prompt, m9 interview prompt), two new 30-second checks (m1 citations, m5 slide numbers), m8 Copilot chat-vs-Excel surface fix + LSS plain-English gloss + estMinutes 17 + workflow chip, card 09: accurate feature line, two new rows (themes, rubric), clustered order, hook/title polish, 'Any AI chat' chips, consistency fixes (Notebook Studio naming, TOOLS constants in m8, bracket misses m3E/m8). Card 09 steps array rebuilt after a botched reorder (11 rows verified). Drift guard passes; build green; m5 check + card 09 rubric row browser-verified; no console errors. REPORT-class items listed in chat for Matt. Uncommitted.
- 2026-08-22 (pushed aaccbbc + 2c61c99): guide placement note live; Useful Prompts (card 09) gains "The IMPROVE: trick (reusable meta-prompt)" row after "Let AI write the prompt". Deploy succeeded; IMPROVE: verified in the live bundle.
- 2026-08-22 (iteration: session-plan note for 08): post-push tree clean (73affb5 live with nine cards). Facilitator guide now places card 08: opener for a prompt-sceptical room or first take-home with 09; no files or specific tool needed, so it absorbs latecomers. Build unaffected. Uncommitted (one file).
- 2026-08-22 (card order + The Prompt Workshop, user-directed after web brainstorm): Useful Prompts retitled "(for after the workshop)" and moved last as card 09; dashboard duel renumbered 07; NEW card 08 "The Prompt Workshop" (meta-prompting, Matt's pick over the Gems/agents and agent-mode alternatives): lazy poster prompt → AI critiques and rewrites it → side-by-side 30-second check ("the gap is the prompt, not the model") → AI interviews you to design a prompt for your real work; stretch: the IMPROVE: standing trick and Package It (prompt → Gem/agent instructions). Guide crib added; guide/README/CLAUDE.md renumbered (nine cards, m1-m9). Browser-verified m9 page + 3x3 gallery in the right order. Build green. Uncommitted.
- 2026-08-22 (iteration: session-plan note for 08): post-push tree clean (6d69a74 live). Facilitator guide session plans now place card 08: swap for 04 in a data-heavy room, pair with 07 as take-home, or use SIMULATE A BAD WEEK as a five-minute front-of-room demo. Build unaffected. Uncommitted (one file).
- 2026-08-22 (card 08 The Dashboard, user-directed after web brainstorm): new mission "Build a Dashboard, Twice" - Part 1 Copilot builds the dashboard IN the workbook, Part 2 Gemini Canvas builds the A+B-blend control room (andon lamps, SPC chart with 3-sigma special-cause flagging, waste Pareto with vital-few cutoff, per-chart insight sentences, SITUATION REPORT button, Cymraeg toggle, SIMULATE A BAD WEEK + REPLAY party tricks). New Venture_Sales_Log.xlsx (Sales + Waste log sheets) with verified planted patterns: Plain 51% of revenue, weeks 5-6 dip 51% (griddle fault + matching waste entries), 2026-03-04 units-250 typo, top-2 waste causes 68% of cost. Docs synced (guide crib with answers, README/CLAUDE.md counts, contract comment); ?doctor auto-discovered the new file (12 green). m8 page browser-verified. Build green. Uncommitted. Note: dev browser now signed in as Matt/matt@local.dev after test seeding.
- 2026-08-22 (iteration: style sweep): removed the five remaining em dashes from FACILITATOR_GUIDE.md per Matt's no-em-dash documentation rule (the review had swept README/todo only). Project markdown is now clean except PARTICIPANT_GUIDE.md, which is the Part 1 escaperoom leftover awaiting Matt's delete/keep decision. No build impact.
- 2026-08-22 (iteration: finishing-moment verification): seeded a test user with all 7 missions complete via the browser console and confirmed the gallery renders the green close-out line ("All 7 complete. 'The stall is in better hands than mine, which the stall and I both suspected.' - C.G."). Test localStorage keys removed afterwards (note: workshop_user_v1 was cleared, so the local dev browser will show the splash again on next visit). No code changes needed. Build untouched.
- 2026-08-22 (iteration: brief drift guard): tools/make_artifacts.py now extracts the m1 brief prompt from src/data/missions.js and refuses to generate if it differs from BRIEF_TEXT (the dual-sourcing risk the code review flagged below its finding cap). Positive test: generator runs clean. Negative test: mutated copy fails with the drift message. Build green. Uncommitted.
- 2026-08-21 (iteration: code review of the batch + fixes): /code-review medium over the uncommitted diff returned 10 verified findings; ALL fixed and re-verified: skip-link no longer bounces mission pages (hashchange ignores plain anchors); ?doctor derives its URL list from APPS/HERO_IMAGE exports (cannot drift), uses cache no-store, and labels shared files with every mission code; restored the dropped "(footfall patterns...)" phrase in the m1 brief (site + generator + regenerated docx) and "across [the term]" in the m3 dashboard prompt; CLAUDE.md/FACILITATOR_GUIDE/README drift corrected (7 cards, m7 route, ?doctor, artifacts done, full doctor URL); latent stretch-step numbering fixed; 926 lines of orphaned escaperoom CSS deleted against the reviewer's verified range map (gallery/m1/doctor pixel-checked after). Em dashes removed from README/todo per style rule; lesson recorded in tasks/lessons.md. Build green.
- 2026-08-21 (iteration: README): wrote README.md for the public repo - what it is, live URL, how it works (bracket convention, card 07), facilitator pointers (?doctor, ?admin, guide), dev commands, artifact regeneration/re-skin note, links to Matt's companion resources. Build unaffected. Uncommitted.
- 2026-08-21 (iteration: finishing moment): when all 7 cards are complete the gallery counter becomes a green Gravitas close-out line ("The stall is in better hands than mine, which the stall and I both suspected."). Conditional in MissionGallery + one CSS rule. Build green. Uncommitted.
- 2026-08-21 (iteration: ?doctor preflight): built the DoctorPanel route from the original plan's quick wins - ?doctor HEAD-checks all mission artifacts + hero image + logos, shows red/green with a run/fix verdict, links back. Verified live: "All 11 files respond." Facilitator guide preflight step now points at it. Build green. Uncommitted.
- 2026-08-21 (iteration: artifact/site consistency): BRIEF_TEXT in tools/make_artifacts.py now carries the [bracket] convention matching the on-page prompt; artifacts regenerated and the docx verified to contain the bracketed text; missions.js resource-contract comment corrected (brief docx = facilitator copy, no download card on m1). Build green. Uncommitted.
- 2026-08-21 (iteration: pre-push regression sweep): browser-verified the uncommitted batch - m1 bracketed brief renders, m5's promoted deck PromptBox with COPY, m7 meta-prompting accordions, zero console errors on every page after the ten file deletions, ?leaderboard route alive. One find, fixed: ?leaderboard and ?admin still said "THE ALBRIGHT AFFAIR"; retitled to SESSION BOARD / AI IN THE WORKPLACE PART 2. Build green. Batch ready for commit+push on Matt's word.
- 2026-08-21 (iteration: copyability): the last two inline quoted prompts promoted to copyable PromptBoxes - m5 "Generate the deck" (now a proper deck ask with one-message-per-slide constraint, bracketed) and m3 path D infographic prompt (bracketed "[a stall customer]"). Bodies trimmed to instructions only. Build green. Uncommitted.
- 2026-08-21 (iteration: facilitator guide catch-up): guide now covers card 07 as the session take-home, the meta-prompting angle, and the [bracket] swap convention as a thing to say out loud; hash-link range m1-m7. Build unaffected. Uncommitted.
- 2026-08-21 (iteration: dead-code cleanup): deleted the ten unreferenced escaperoom-era files (Countdown, SubmissionPortal, SuccessScreen, FailureScreen, HintReveal, CopilotHint, EvidenceGallery, EvidenceCard, data/gravitas.js, data/hints.js) plus src/assets/placeholders SVGs, after grep-verifying nothing imports them (Leaderboard/TaglineBar/AdminPanel/LeaderboardPage/SortGame kept - still referenced). Build green. CLAUDE.md updated. Old escaperoom images in public/placeholders/ left on disk (nothing links them; Matt to confirm before deleting downloads-visible assets). Staged as deletions; uncommitted.
- 2026-08-21 (reusable prompts + card 07, user-directed, plan approved): bracket pass over all mission prompts (venture context in [square brackets], defaults kept inside so prompts run verbatim); new card 07 "Useful Prompts" / "Prompts to Take Back to Work": 8 collapsed prompt rows (Deep Research on [TOPIC], meta-prompting x2 incl. AI-writes-your-Deep-Research-brief, verified spreadsheet, devil's advocate, post-mortem, grounded answers, Canvas tool) with tool chips, three sign-in cards, Gravitas verdict. MissionDetail skips TODAY'S PATH when no core steps. Grounded in 2026 prompt-engineering best practice (role+task+constraints+format, placeholders, meta-prompt contents). Verified: m7 page + 7-card gallery. Build green. Uncommitted.
- 2026-08-21 (iteration: facilitator guide): wrote FACILITATOR_GUIDE.md for the venture workshop - 90/60-min session plans, audio-overview closer, 5-min preflight, per-mission crib incl. the ten planted business-plan flaws, the feedback data quirks (R067 typo, blank ratings, weeks 5-8 dip) and theme distribution with the 48% capacity answer, tier-gate notes, re-skin instructions. Old escaperoom guides flagged as Part 1 leftovers (not deleted; Matt to confirm removal). Build unaffected. Uncommitted.
- 2026-08-21 (choice accordions everywhere, user-directed with preview): choice paths now render as native details/summary accordion rows (letter badge + title + tool chip + chevron; hook + body + prompt inside). Rolled to all missions: m2 (A close-the-loop / B infographic+Cardiff / C audio), m3 (A-E as before), m4 (A adjudicated second opinion / B break-the-plan sliders / C your own draft), m5 (A Cardiff deck / B video pitch) with CHOOSE YOUR NEXT MOVE headings; m1 and m6 keep GO FURTHER (OPTIONAL) with their single item as one quiet collapsed '+' row so mission 1 stays light. Verified: m3 rows, m4 accordion click-to-expand reveals prompt+COPY. Build green. Uncommitted.
- 2026-08-21 (m3 choose-your-adventure, user-directed): after m3's mandatory core, the stretch section is now "CHOOSE YOUR NEXT MOVE" with five lettered paths (A chart / B slides via Gemini Notebook Studio / C Canvas live dashboard / D infographic / E data-grounded "predict the failure" post-mortem), each with a one-line audience hook ("For the one who has a meeting about this later"). Schema: per-mission stretchTitle/stretchIntro + step.choice letter badges. Default stretch heading elsewhere renamed to GO FURTHER (OPTIONAL). Verified via accessibility tree (all five paths + prompts render). Build green. Uncommitted.
- 2026-08-21 (iteration: naming alignment): browser-tab title and tagline bar aligned to Matt's chosen name - tab: "AI in the Workplace Part 2"; tagline: "AI IN THE WORKPLACE PART 2 - Hands-on training with Copilot, Gemini and NotebookLM". "FIELD MISSIONS" no longer appears anywhere user-facing. Build green. Uncommitted, so the LIVE site still shows the old tab title until the next commit+push Matt requests.
- 2026-08-21 (hero image, user-supplied): Matt's stall cartoon added to the gallery as venture_stall.webp (converted from his screenshot, 476KB png → 72KB webp), displayed beside the WHY YOU'RE HERE memo (intro-row flex; stacks under 768px), alt text written. GitHub repo wmgmm/part2 created by Matt; push + Pages enablement are his steps (documented in chat). Build green, gallery verified. Uncommitted.
- 2026-08-21 (iteration: brief trim m2-m6): applied Matt's Mission-1 editorial rhythm to the other five briefs - three short sentences, no tool re-explanation (the strap covers it), SWAP folded into a short closing clause. m4's agent-mode hazard survives in its strap and step 1; m3's fictional-data note survives as a parenthesis. Build green. Uncommitted (rides with next commit request).
- 2026-08-21 (compact mission header + gallery copy round, user-directed): eyebrow trimmed to "MISSION 01 · LEVEL 1"; new per-mission pageTitle (action + tool, e.g. "Research the Market with Deep Research") used on mission pages while cards keep short names; sign-in card moved inline right of the title (flex row, wraps on narrow); title size reduced; tool strap full-width and m1's reworded. Earlier same session: card summaries action+tool; START HERE only on m1; legibility pass (white cards); memo rewritten (WHY YOU'RE HERE label, witty question + signature in Caveat); governance callout moved below grid as discreet footnote; strap line removed; time estimates off cards. All build-green and browser-verified. Uncommitted.
- 2026-08-21 (card titles, user-directed): six card summaries rewritten as action + tool: "Start the market research using Gemini's Deep Research" / "Question the research report in Gemini Notebook: cited answers only" / "Analyse the customer feedback spreadsheet with Gemini's code analysis" / "Audit the flawed business plan using Copilot chat" / "Build the investor slide deck in Gemini Notebook Studio" / "Build the app that fixes the top complaint using Gemini Canvas". Build green, gallery verified.
- 2026-08-21 (card chips, user-directed): Mission 01's top-right stamp now reads START HERE; accent chips removed from missions 02-06 (accent fields deleted in missions.js; MissionCard now renders the chip only when accentText exists). Build green, gallery verified.
- 2026-08-21 (legibility pass, user-directed): killed white-on-black body text. Mission cards → white google-style cards (blue Inter Tight numerals, dark summaries, grey meta, white label strip, green outline when done); prompt-box bars → light grey with dark label (blue COPY pill kept); tagline-bar text enlarged/whitened; tag/handwritten/arrow accent chips restyled as bordered light chips so they read on white. Build green; gallery + card zoom browser-verified. Uncommitted.
- 2026-08-21 (iteration: template verification sweep): browser-walked m3, m4, m6 and m1 on the google.html template. All correct: eyebrows, tool straps, sign-in cards (Gemini spark logo / Copilot logo, correct brand-blue URLs), workflow chips incl. 4-chip and 5-chip layouts, artifact strips (xlsx+csv pair on m3, plan+rubric on m4, theme list on m6), prompt boxes, check-in pill. Zero defects found. Mobile-width check NOT possible via the extension (window manager pins the Chrome window size; resize_window reports success but the viewport stays 1568px) - verify responsive layout on a real phone during the dry run; CSS uses auto-fit minmax(170px,1fr) with a 650px single-column fallback so risk is low.
- 2026-08-21 (google.html template, user-directed, plan approved): mission pages + gallery restyled on the thematts google.html template. Per mission: blue eyebrow, Inter Tight title, toolInfo.feature strap naming tool+feature, click-to-open sign-in cards (real logos: gemini-logo/notebooklm-logo/CopilotLogo.png copied from thematts into public/logos/; Google blue vs Microsoft blue URLs; sign-in note), WORKFLOW quick-start strip (numbered step-badge chips) from new mission.workflow arrays. Briefing/memo turned into light cards; steps get blue outline number badges; Inter Tight added to index.html fonts. Splash untouched. Build green; m1 + gallery browser-verified. Uncommitted.
- 2026-08-21 (Canvas additions, user-directed): M1 gains core step 4 "Turn the findings into an infographic" (Gemini image or Canvas Create → Infographic; core now ~11 min). Canvas brought forward as labelled add-ons: M3 stretch "Canvas add-on: the living dashboard" (Sheets → Ask Gemini → Create canvas; KPI cards, weekly chart, filters, writes back to cells) and M4 stretch "Canvas add-on: break the plan with sliders" (scenario dashboard: price/daily-sales/weeks sliders, red warning past the 320/day griddle ceiling - weaponises the planted flaws). M6 stays the Canvas finale. Rejected from the pasted idea list as wrong-audience: Colab/Cloud deploy, Apps Script Drive monitor, algorithm visualiser. Build green; m1 browser-checked. Uncommitted.
- 2026-08-21 (user edits): splash stamp → "THE MATTS PRESENT AI IN THE WORKPLACE PART 2"; "sign in with your work account"; licence-lane question REMOVED (laneNotes now all render in mission steps; LANES data kept in missions.js but unused on splash). Login now fires recordAttendance() → POST {type:'signin', v:1, name, email, at} to the Apps Script; google_apps_script.js updated with an Attendance sheet handler. NOT yet live: Matt must paste the updated script into script.google.com and redeploy (ideally a NEW spreadsheet + fresh TOKEN + new URL in src/config.js for part2). Until redeploy, sign-ins fall through to the legacy handler and append junk rows to the old escaperoom Submissions sheet. Uncommitted.
- 2026-08-21: plan approved; starting slice 1+2.
- 2026-08-21 (iteration 1): slices 1+2 done and verified. New files: src/data/missions.js, components/MissionGallery|MissionCard|MissionDetail|PromptBox|SortGame.jsx, lib/progress.js. Rewrote App.jsx (no timer/scoring; hash routing; localStorage user resume) and SplashScreen.jsx (rebrand + licence-lane question). CSS: grid auto-flow, ~450 lines of mission styles appended. vite base → /workshop/; index.html title updated. Old components (Countdown, SubmissionPortal, Success/Failure/HintReveal, CopilotHint) now unreferenced - delete in a later slice once check-in flow (step 4) settles. dist/ not git-tracked after all.
- 2026-08-21 (iteration 2): browser walkthrough of splash → login → gallery → m1 (sort game, check-in, CLEARED verdict) → back to gallery (DONE stamp, 1/6 counter) → m3 (prompt boxes, artifact strip). Whole flow works, incl. hash routing. Fixed three bugs it surfaced: stale escaperoom TaglineBar copy; invisible mission-card meta (black on black); invisible mission-detail eyebrow (unstyled evidence-card__id reuse). Rebuild passes.
- 2026-08-21 (iteration 3, user-directed): restyled to the google.html palette (page #f5f5f7, white cards, charcoal #1d1d1f, accent blue #0071e3, soft shadows, rounded cards, pill buttons) via var rename --yellow→--page + new "GOOGLE-PAGE SKIN" override section; kept stamps/evidence devices. Repo named part2: vite base /part2/, remote → https://github.com/wmgmm/part2.git, CLAUDE.md rewritten for new architecture, package renamed. Browser-verified splash/gallery/m3 in new skin. Committed 6eb87bd (not pushed). Deploy URL once pushed: https://wmgmm.github.io/part2/
- 2026-08-21 (iteration 4): built the check-in DEBRIEF form (plan step 4) in MissionDetail + progress.js + App.jsx, styles appended. npm run build green; browser-tested the full flow on m4: empty submit shows witty required error, filed debrief stores {gotWrong, bestPrompt} in the progress entry and reveals the verdict. Data is ready for the Wall of Wrong (step 5).
- (superseded) step 4 suggestion: proper check-in form (2 questions: "what did the AI get wrong" + best prompt; replace bare "mark complete") wired to localStorage now, Apps Script v1 payload later; or start artifact authoring (m5 flawed bid + criteria doc is highest-value). Also: prompt COPY button untested against real clipboard permissions; m3 thumbnail (man+cat Teams still) worth keeping, it is funny.

## 2026-08-29: THE POLICY PIVOT (approved and executed)

Matt pivoted the site to two real anchor documents: Cardiff's Sustainable Futures plan 2025-35 and a university AI position statement (Cardiff Met's as stand-in, swap contract in missions.js). Nine cards became six: 01 The Landscape (Deep Research, one brief covering AI statements AND net zero), 02 The Documents (Notebook, both sources, the INSUFFICIENT_DATA moment), 03 The Infographic (your prompt vs ours), 04 The Gap (critique both policies, Demand First test, chain to Copilot for adjudication), 05 The Briefing (Studio deck + quiz + Canvas Demand First helper), 06 Useful Prompts (11 rows, new Chain a second opinion). Narrative: Gravitas returns as Sustainability Engagement Officer.

Done: ROADMAP.md written and published as artifact; make_artifacts.py rewritten (Venture generation and drift guard removed, position statement PDF generated with attribution, stand-in landscape report); Venture_* files deleted; sustainability PDF copied in; missions.js fully rewritten (ids m1-m6 = codes 01-06, prompts to the expert standard via three subagents); gallery memo, splash, FACILITATOR_GUIDE, README, CLAUDE.md updated. Build green. Uncommitted, awaiting Matt.

Open (Matt): hero image from the agreed image prompt; real Deep Research run for Policy_Landscape_Report.pdf; confirm full-text reproduction of the Cardiff Met statement; card 06 spreadsheet-row drop; PDF recompression.

## 2026-08-29 (later): story consistency pass + first live deploy of the pivot

Memo rewritten self-contained ("I'm Chris, your new line manager"; briefing pack defined as infographic + deck + decision tool). Consistency sweep: m1 brief names Chris's desk; m2/m3/m4/m5 briefs thread the briefing pack; verdicts lose the IT Services/Estates/founder backstory ("my old department", "this job", "your new line manager"); splash byline now "Your new line manager"; gallery header "BUILD YOUR TEAM'S BRIEFING PACK WITH AI AS YOUR ASSISTANT"; hero swapped to Matt's policy_stall.webp cartoon. Guide/README/CLAUDE.md premise lines updated (Welsh cake survives only as a facilitator in-joke). Committed and pushed at Matt's request.

## 2026-08-30: data mission + library strip

New Mission 03 "The Commitments" (Notebook Data Tables): extract every commitment from the two policies into a table (verbatim quote, goal, date or NONE STATED, measurable, owner), Export to Sheets, download .xlsx, then the accountability audit in Gemini with code (% dated, % measurable, % owned, chart by goal); choice paths: Canvas commitments-tracker compare, own meeting notes. Infographic, Post-Mortem and Briefing renumbered 04/05/06. Useful Prompts left the mission grid: now the PROMPT_LIBRARY export served at #/prompts from a full-width strip below the grid (14 rows; spreadsheet pair restored). Progress counter is N of 6. Guide/README/CLAUDE.md renumbered; guide's 03 answer key notes the strategy-vs-ESAP nuance. Uncommitted.

## 2026-09-02: Mission renamed to Exercise + new Exercise 07 "The Skill"

Rename: every user-visible "Mission" is now "Exercise" (ALL EXERCISES, EXERCISE NN, EXERCISE COMPLETE, NEXT EXERCISE, EXERCISE MATERIALS, aria-labels, gallery counter and memo, splash deck line fixed from "Five Missions" to "Seven Exercises", cross-references inside exercise copy, all four markdown docs). Code identifiers, CSS classes, #/m1..#/m7 routes and localStorage keys deliberately unchanged: renaming routes would wipe saved progress.

New Exercise 07 "The Skill" (stage Embed, the finale that answers Exercise 06's closing question). Thesis: a prompt scales to one person, a skill scales to a process. Mechanic per Matt: a skill is a PLAIN TEXT FILE you attach alongside the document, not a Gem (staff accounts cannot create Gems) and not Copilot Studio (licences/admin). Steps: convert Exercise 03's accountability audit into a skill file with eight fixed sections (SKILL NAME / WHEN TO USE IT / INPUTS / STEPS / OUTPUT FORMAT / FAILURE STATES / HUMAN CHECK / OWNER AND VERSION); run it the new way by attaching skill + document with a three-line prompt; build a second Policy Review skill (key changes, risks, staff impact, equality considerations, communications required) and test it on the AI position statement; 30-second check that the model actually obeyed the file; "Give it a home" (team folder + which process step it belongs to). Choice paths: your own process, and the skill that writes skills. New artifact Document_QA_Skill.txt generated by make_artifacts.py. Exercise 03 now cross-links forward to it. Uncommitted.

## 2026-09-04: escaperoom tidy-up before the re-skin

Deleted the Part 1 escape-room residue. Files: `PARTICIPANT_GUIDE.md/.pdf` and `FACILITATOR_GUIDE.pdf/.txt` (all Albright-era; `FACILITATOR_GUIDE.md` is the live one and lost its footnote about them); 14 `evidence_*` images, 6 `placeholder_*.svg`, `Exhibit_D_Raw_Meeting_Transcript.pdf` and `Staff_Survey_Results.xlsx` from `public/placeholders/`; the superseded `public/venture_stall.webp` hero; and three untracked root QR codes (`code.png`, `results.png`, `website.png`) pointing at Part 1's submission/results flow. That is 32 MB gone; `dist/` went 44 MB to 12 MB.

Leaderboard, per Matt's call: UI out, backend kept. Deleted `Leaderboard.jsx`, `LeaderboardPage.jsx`, `AdminPanel.jsx`, the `?admin` and `?leaderboard` URL modes in `App.jsx`, and 566 lines of leaderboard/leaderboard-page/admin CSS plus the responsive leaderboard rules. Kept `google_apps_script.js`, `src/config.js` and `src/lib/leaderboard.js` as the starting point for the check-in wall -- `recordAttendance` is still called on sign-in, so the attendance path is live; `submitEntry`, `loadBoard` and `loadLocalBoard` are now unused but deliberately retained.

Verified: build green (CSS 38.1 to 29.2 kB, JS 343.7 to 335.4 kB), gallery and Exercise 01 render clean in the browser, no console errors, `?doctor` reports all 8 files 200.

Dead CSS removed on Matt's say-so, same day: `.cover-stamp`, `.cover-brand-stamp--presenter`, `.splash-kicker`/`__tagline`, `.splash-warning`, `.splash-footer` (base and its 768px override), `.directive__stamp`, `.splash-masthead`, `.app-shell`/`.main-page`, `.mission-artifact__pending`, `.mission-step__est`, the whole `.splash-lane*` licence-picker block and its google-skin override, the whole `.checkin*` debrief form, `.gallery-strap`, and two dead selectors trimmed out of the shared `border-radius` rule. Orphaned comments went with them (`/* Form: single column */`, `/* Splash licence lanes */`, `/* Check-in debrief form */`); `/* Headline block */` stayed with the live `.splash-headline`. styles.css 2109 -> 1899 lines, built CSS 29.2 -> 26.2 kB. Braces balance; the only unused selectors left are the eleven built dynamically or kept as palette (`evidence-card__accent--*`, `sort-choice--*`, `sort-item__result--*`).

Re-verified in the browser after the CSS cut: splash (stamps, headline, deck, steps, fields, button), sign-in, gallery, Exercise 07 end to end including the artifact strip, prompt boxes, the 30-second check step, choose-your-next-move and the CLEARED verdict on completion. No console errors. Note on the mobile breakpoints: the two responsive rules removed (`.splash-footer`, `.splash-masthead`) target elements that appear in no component's markup, so there is nothing there to regress; the extension would not give a genuine narrow viewport to confirm visually.

Left alone, flagged to Matt: `src/config.js` still carries a live Apps Script deployment URL and the token `jaja` in the repo.

Committed locally and tagged `pre-pivot-2026-09-04` as the restore point for the re-skin. Not pushed.

## 2026-09-04 (later): the single-document pivot, and the split between two presenters

Brief from Matt: the workshop now focuses on the environmental sustainability plan alone, no AI position statement. Matt Hayden owns three exercises and his prompts are fixed; Matt Mort's three were a sketch (Notebook to Cardiff slides, reverse engineer the PDF for a style guide, Data Tables into analysis comparing Gemini and Copilot, then skills). Local AI stays a deck demo, not a site exercise. Plan approved before any edits.

**Researched first, because half the sketch depended on features that may not exist.** Two parallel web sweeps against vendor sources, written up in `docs/research/2026-09-04-tool-capabilities.md` so the next session does not repeat them. What changed the design:
- There is **no brand kit, logo upload or template import in Gemini Notebook**. Third-party blogs claim otherwise; no Google source supports it. Exercise 04 therefore teaches styling as influence, not enforcement, and says so on the page.
- **Copilot's Researcher and Analyst share a hard 25 queries per user per month.** Exercise 05 routes its second opinion through ordinary Copilot chat, which has code interpreter and no such cap.
- **Gemini Deep Research is 5 runs a month** on a base Education tier, which is why the finished run now ships as a download.
- **No credible independent Copilot vs Gemini comparison exists** in 2026; what search returns is vendor marketing, including from vendors of competing presentation products. Exercise 05 names no winner.
- **Jisc's AI maturity ladder** names Matt's own framing exactly (stage 2 experimenting and exploring, to stage 3 operational: training staff, developing workflows, establishing support systems). Exercise 06 is anchored on it.
- Google's docs list Gems as available to Education accounts. Matt confirmed against a real account that **Cardiff staff still cannot create them**, so the plain-text-file rationale stands unchanged and the tenant beats the documentation. Copilot Agent Builder and Gemini Skills in Chrome went in as gated stretch paths only.

**Seven exercises became six.** 01-03 are Matt Hayden's: Deep Research plus the Copilot top and tail; reverse prompting with images; the Canvas ZX Spectrum game. 04-06 are new: reverse engineer the plan's own design into a style block then generate the deck; Data Tables audited with code in Gemini and again in Copilot; the skill file plus the workflow record and test plan around it. The old 02 (The Documents), 05 (The Post-Mortem) and the two-document teaching gap that was the spine of both are gone with the AI statement.

**His prompts are held as `MH_*` constants** at the top of `missions.js` under a do-not-edit banner, rather than inline, so drift is structurally visible. All five deck-sourced prompts diffed clean against the extracted deck text; the two email-sourced ones (the ~7,000-character Copilot fact-check, the style block) verified section by section. The only deliberate changes: two missing spaces after full stops that the deck had lost, and the presentational quotation marks wrapping the deck versions, dropped so the text pastes clean. Recorded in the file header.

**One code change, additive.** Exercise 02 needs a picture on the page and the step renderer had none: everything went through `{step.body}` as a text child, so markup was escaped. Added an optional `image: {src, alt, caption}` field with a `StepFigure` component used by both `Step` and `ChoiceStep`, plus CSS. Unknown fields were already ignored, so nothing else moved. Did NOT reuse `artifacts[0].thumb`, which replaces the whole card panel. `DoctorPanel` now collects step images too, so the preflight still cannot drift from the data.

Assets: added `Deep_research_output.pdf` (a real run of his brief) and `cardiff_study_space.webp` (the Cardiff photo Matt supplied, GIF converted, 620x413, 62 kB). Deleted `AI_Position_Statement.pdf` and `Policy_Landscape_Report.pdf` and dropped both generators from `tools/make_artifacts.py`, which now generates one file and checks two supplied ones. `PROMPT_LIBRARY` gained one row (reverse engineer an image), the only new move with no existing generic twin; the other 14 were already policy-free and were left alone.

Docs: `CLAUDE.md` (the presenter split and the verbatim rule, the `image` field, six routes, the new artifact set), `FACILITATOR_GUIDE.md` rewritten with new cribs, answer keys and the quota numbers in preflight, `README.md`, and `ROADMAP.md` marked superseded rather than rewritten, since it is the record of the previous pivot.

Verified: build green (CSS 26.5 kB, JS 344.4 kB); `?doctor` all 8 files 200 including the new image; gallery renders six cards; Exercise 02 renders the photo, caption and all three prompt boxes with no horizontal overflow; Exercise 06 renders both artifact strips and the Jisc framing; no console errors; no references to `aiStatement`, `AI_Position_Statement` or `Policy_Landscape_Report` left in `src/` or `tools/`. `#/m7` falls back to the gallery, confirmed in code (`getMission` returns null, and `player && !mission` renders the grid) and by direct evaluation. Note on browser checks: setting `location.hash` from the automation tool does not fire `hashchange`, and `requestAnimationFrame` does not fire in a background tab, so each route was checked by full page load rather than by in-page navigation.

Still flagged, still untouched: `src/config.js` carries a live Apps Script deployment URL and the token `jaja` in the repo.

## 2026-09-04 (later still): three-agent clarity review, and Exercise 06 redesigned

Matt asked for a subagent review of the exercises for clarity. Three reviewers in parallel: 01-03 (Matt Hayden's, prompts verbatim-locked), 04-06 (mine, prompts editable), and a cross-cutting pass on consistency, terminology, the facilitator guide and the prompt library. Roughly fifty findings; the serious ones were all silent failures, where a participant proceeds and gets a wrong result without knowing.

**The four that would have cost the room most:**
- **Exercise 03 destroyed its own comparison.** Step 1 said "keep it open, this is your control"; step 2 said run the engineered prompt. In the same Canvas chat that EDITS the first game rather than building a second, so the before-and-after the exercise exists for vanished, silently. Now says start a NEW chat.
- **Exercise 05's teaching point was nowhere on the page.** A table full of NONE STATED reads as a failed extraction. The explanation lived only in the facilitator crib and in the Gravitas verdict, which renders after the Complete button. Added a core step, "Read the empty columns", so the finding is where the participant is.
- **Exercise 05 switched tool without saying so.** The audit step leaves Gemini Notebook for Gemini itself; a notebook cannot run code, so pasting the prompt into the notebook returns a fluent estimate that looks identical to arithmetic. Now says so explicitly.
- **Exercise 01 step 3 did not produce what step 4 needed.** It offered a share link or copied text; Matt Hayden's prompt requires an attached PDF. Now gives the export chain: Export to Docs, then File, Download, PDF Document.

**Also fixed:** the splash screen still read "Two Real Policies, Seven Exercises" (the first line anyone reads); the tagline banner on every screen said NotebookLM; Chris's memo promised a decision tool that is only a stretch path and never mentioned the game; the hero alt text still named the three dropped AI policy documents; Exercise 02 was missing two physical actions (replace the `Subject:` placeholder before sending the style block, download the generated image before uploading it to a fresh chat) and shipped a 10.7 MB download it never opens; Exercise 06 contradicted itself about Copilot agents three screens apart; the 30-second check in 06 pointed back to "step 2" eleven minutes earlier; prompt boxes had no height cap, so Matt Hayden's 133-line Copilot prompt buried the check several screens down (now 22rem with scroll); `MissionDetail` rendered an empty `<p>` for a step with no body; the prompt library page offered an EXERCISE COMPLETE button and a CLEARED stamp despite not being an exercise; "NEXT EXERCISE" linked to the gallery.

**Structural, on Matt's call:** stage badges re-cut from Discover/Act/Act/Lead/Understand/Embed (two repeats, and Understand landing two cards after Lead) to six distinct verbs, Research/Illustrate/Build/Present/Audit/Embed. Prompt library re-cut: four rows orphaned by the deleted post-mortem exercise removed, four added for moves the day teaches but the library did not carry, including "Turn a prompt into a skill file", which is the day's headline move and was not take-home-able. Still fifteen rows.

**`estMinutesCore` was wrong on three exercises** (01 declared 6 against 12, 02 declared 12 against 14, 04 declared 16 against 18). The field renders nowhere, which is why it drifted unnoticed, but the session plans are built on it. All six now match their own step sums; 95 minutes of core across the site, so nobody does all six.

**Exercise 06 redesigned**, to Matt's brief: make a deck by hand, reverse engineer that into a skill, then let the skill make it again. Stronger than the old version because it demonstrates "a prompt scales to one person, a skill scales to a process" instead of asserting it, and it completes a motif that now runs all day: reverse engineer an image (02), a document's design (04), your own output (06). The framing that keeps it distinct from Exercise 03's thin-versus-engineered lesson: the test is not whether the second deck is better, it is whether a colleague who was not in the room could have produced it. Six core steps, 20 minutes, with the test plan, the Copilot agent and the Chrome skill as take-home paths. It now starts from the Exercise 04 deck, so the session plans pair 04 with 06 and step 1 carries a two-minute fallback for anyone who skipped it.

Matt confirmed **Slide Deck is available on Cardiff staff accounts**, so the licence-tier hedges I had added to Exercise 04 and the preflight were removed. Data Tables keeps its pair-up fallback.

Rejected one finding: a reviewer claimed `CLAUDE.md` still listed the deleted artifacts as live. It does not; it says "Three files" and names the other two as deleted. The reviewer misread the sentence recording the deletions.

Verified: build green (CSS 26.58 kB, JS 350.98 kB); all six exercises' declared minutes match their step sums; every workflow strip matches its core steps; `?doctor` green; gallery renders the six new badges; Exercise 06 renders the new three-move structure. Not committed.

## 2026-09-04 (last): 04 and 06 split by artefact, and the generation-quota question answered

Matt's call after seeing the site: 04 and 06 both built a slide deck, which made 06 a do-over. Split them by artefact instead, so the pair models the day's own thesis. **04 is now the experiment** (one-page infographic, play with the named styles), **06 is the standardisation** (write the method down as a skill, then point it at a slide deck it has never made). The proof lands because the output type changes: a skill derived from a PDF producing a well-formed deck is a process, not a lucky prompt.

**04 renamed The Deck to The Explainer.** New brief and infographic spec (single frame, spine sentence, three or four labelled zones, Demand First ladder in the plan's own words, cap of four numbers, NONE STATED where the plan commits to nothing). New step "One each, then look sideways" replaces per-person regeneration. "Make it Cardiff" moved from core to a take-home path, because running it through the pencil costs a second generation and directly contradicted the one-each budget the previous step had just set. 17 minutes core.

**06 rebuilt again.** Its skill is now derived from the plan itself rather than from anything made in 04, so every exercise is self-contained again and any order works. The skill prompt deliberately asks for a method that holds "whether the output is a slide deck, a one-page infographic or a briefing note", and the OUTPUT FORMAT section has to work across artefact types. New first step, "A style block is not a recipe", explains why the paragraph from 04 is an ingredient rather than a procedure. 22 minutes core.

**Matt's question, "I don't know how much limit they will have to create stuff", researched properly.** The answer is uncomfortable: **Google publishes no number for Infographics, Slide Decks or Data Tables at any tier.** Those cells render as words ("Limited", "More Limits") while every other row in the same table shows integers. Calibration from the neighbouring rows on Standard Access, which is where Education Fundamentals and Standard both land: text outputs get 10/day, media-heavy outputs (Audio and Video Overviews) get 3/day. Infographics and decks are image-model-heavy, so plan for 3.

Three facts made the design safe: limits are **per user AND per output type, not pooled**, so one data table, one infographic and one deck sit inside separate ceilings; daily limits reset at **12am Pacific, about 8am UK**, so a morning session starts clean; and Google's row is labelled "Slide Decks **and Revisions**", so every pencil-revision burns another unit while nudging individual slides inside a deck is free. The whole day now budgets one generation of each type per participant.

Diarised: Google began moving Notebook to **compute-based limits on 2 September 2026**, refreshing every five hours against a weekly cap. Currently described as consumer-only and the Workspace table still showed fixed numbers on 2026-09-04, but it needs re-checking before the next run. Full findings and sources appended to `docs/research/2026-09-04-tool-capabilities.md`.

**Worked examples, pending Matt.** The style comparison is quota-proof only if the page carries pre-generated examples. Added `tools/make_style_sheet.py`, which composites exports from `tools/style_exports/` into a labelled `public/infographic_styles.webp`. The `image:` reference in the 04 compare step is commented out on purpose: `?doctor` HEAD-checks step images, so referencing the file before it exists turns the preflight red. One line to uncomment when the exports land.

Docs updated: facilitator guide (04 and 06 cribs rewritten, session plans no longer pair 04 with 06 as a dependency, preflight carries the quota budget and a recommendation to pilot on real accounts), CLAUDE.md (the 04/06 split and the instruction not to add regenerating steps), and the slide deck regenerated to ten slides from the new content.

Verified: build green; all six exercises' declared minutes match their step sums (96 total); no core step in 04 makes a deck and none in 06 makes an infographic; `?doctor` green; 04 and 06 walked in the browser. Not committed.

## 2026-09-04 (final): 04-06 hand out working skills instead of asking anyone to write one

Matt's call after two earlier designs: drop the reverse-engineering framing entirely and invert it. **We supply working skills; the room finds out what a good one buys you.** The brief changes with it, from "build a briefing pack" to "build staff training on the plan", which is a job Cardiff staff actually have. Writing a skill from scratch in fifteen minutes produces a thin skill; being handed a serious one and made to run it, compose it and check with it produces somebody who knows what to ask for.

**Three skills, shipped as downloadable Markdown**, generated by `tools/make_artifacts.py`:
- `Training_Module_Builder.md` (3,765 chars) - drafts the session from the plan, cites the source, refuses to invent a criterion, and ends with a gap note.
- `Cardiff_House_Style.md` (3,905) - V1-V6 voice rules and D1-D5 design rules, derived from `CARDIFF_DESIGN_PROMPT` (which stays in `missions.js` byte-identical). Returns a change log citing the rule behind every edit.
- `Fact_Check_Cardiff.md` (3,870) - evidence ledger, seven verdicts, named flags. Verifies and does not rewrite.

All three follow the Ordovera `course-dev-skills` anatomy (CC BY 4.0): YAML front matter with just name and description, an H1 identity line in the second person, `## When to use this`, method sections, and `## What to hand back` last. All under 6,000 characters so they paste into Copilot Agent Builder's 8,000-character instructions field. Two devices carried over deliberately: **every rule states the failure it prevents**, and the **context contract** (search before you ask, name what you found before you start, stop if you find nothing). Pattern, provenance and the UK-HE adaptations recorded in `docs/research/2026-09-04-skill-authoring-patterns.md`.

**The exercises.** 04 The Module: read the skill before running it, run it on the plan, then read the gap note. 05 The House Style: attach the second skill, read the change log, then Notebook generates the deck from the module. 06 The Check: run the fact-check skill on your own work, then the workflow record, give it a home, and the Jisc ladder.

**Two things the redesign fixed for free.** The accountability finding that used to need its own data exercise now arrives as the training skill's gap note, which is a better delivery: the tool writes NONE STATED because the plan genuinely has no dates or owners, and the note doubles as a list of questions for whoever owns the policy. And **Studio generations dropped to one per participant for the entire day** (the deck in 05), because 04 and 06 are pure text in either tool. That removes most of the quota risk the earlier design carried.

**Exercise 06 closes with the callback that justifies the day**: Matt Hayden's Exercise 01 does the fact-checking job in the first hour as a 7,000-character prompt pasted once. Exercise 06 is the same job as a file anyone can run, on anything, without having been in the room.

Retired `Document_QA_Skill.txt`. Stage badges are now Research / Illustrate / Build / Teach / Shape / Embed, six distinct verbs. Chris's memo and the gallery heading rewritten to the training brief. `MissionDetail` labels the secondary artifact link "OPEN IN A NEW TAB" for `.md` files, because servers send Markdown as `text/markdown` and browsers download rather than render it, so "VIEW IN BROWSER" was a lie.

**On the fact-check skill's provenance:** it is a trimmed adaptation of fact-check v0.2 by anotherpanacea-eng, which credits the APODICTIC Development Editor's Citation Verifier and **states no licence**. I flagged that before publishing to a public GitHub Pages site; Matt's decision was to ship with prominent credit, which the file carries in a closing note. Worth dropping the author a line. The cuts: parallel subagent dispatch, the US legal and policy extensions, and the confidentiality preflight, none of which survive contact with a Copilot or Gemini staff account.

Verified: build green; all six exercises' declared minutes match their step sums (87 total core); `?doctor` reports all 10 files 200 including the three new Markdown skills; every skill's YAML front matter parses with exactly `name` and `description`; Exercise 04 and the gallery walked in the browser; no references to Document QA or reverse engineering left in `src/`. Slides regenerated to ten from the new content. Not committed.

## 2026-09-04 (last): every exercise page cut back to goal-then-steps

Matt's steer: the pages had become over-complicated, and the reference is his own Part 1 page at wmgmm.github.io/thematts/workshop.html, where an exercise is a short goal followed by numbered steps, each led by a bolded action with a sentence or two of detail and exact button labels, with no character voice.

Measured before starting: **3,033 words of step body across the site**, with single steps up to 124 words and briefs of 73-108. Someone reading that while a presenter talks over the top is skimming for the next thing to click.

**The pattern now applied to all six.** `brief` is 25-40 words stating the goal, no narrative. Step `title` is the imperative action, which is the site's equivalent of the reference page's bolded action line, and the renderer already treats it as the heading so no code change was needed. Step `body` is one or two sentences, capped at about 45 words, naming the exact control. Prompts, workflow strips, verdicts, tool straps and artifact strips all untouched.

**Result: 3,033 to 1,135 words, a 63% cut.** No body over 45 words, no brief over 40, every `estMinutesCore` still matching its step sum. Chris Gravitas is out of the briefs and survives in the gallery memo and each exercise's completion verdict, which was Matt's call.

**Exercise 04 additionally lost its 30-second check and its whole stretch section**, both on Matt's explicit instruction. It is now three steps, 11 minutes, and renders at 1.1 screens. It is the only exercise without a check and without take-home paths; that inconsistency is deliberate and is now noted in the facilitator guide so nobody thinks it is a bug.

**How this was done safely.** The edit was surgical rather than a rewrite: a line-wise pass replacing only `brief`, step `title` and step `body` values, never touching `prompt`, `promptLabel`, `link`, `image`, `check`, `tier` or `estMinutes`. That guaranteed Matt Hayden's `MH_*` constants could not move, and they did not: all four deck-sourced prompts still diff clean against the extracted deck text, and the three long ones are still exactly 7,085, 2,023 and 893 characters.

**Two things the pass got wrong and I caught in verification.** The mission-id state variable leaked past the end of `m6`, so `PROMPT_LIBRARY`'s brief was overwritten with Exercise 06's; restored. And the Exercise 01 callback in 06 ("this morning that job was a 7,000-character prompt pasted once") was cut as padding when it is the line the whole day is built on; restored into the ledger step, along with the Jisc stage-three anchor which had gone the same way. Both were on the plan's explicit must-survive list, which is the only reason they were caught. Also verified surviving: 01's export-to-PDF chain and the warning that Copilot returns the report in the chat, 02's Subject-placeholder and download-before-re-upload fixes, and 03's "start a NEW chat", which is now in the step title rather than buried in the body.

The house copy standard is recorded in `CLAUDE.md` so the next edit does not re-inflate the pages.

Verified: build green; word counts as above; all six timings match; `?doctor` green; 04 and 01 walked in the browser, 04 renders with no orphaned stretch heading and no horizontal overflow. Not committed.

## 2026-09-04 (addendum): Exercise 04 on the Part 1 rhythm

Matt: 04's workflow should be prompt, attach (maybe read), review, save. Reshaped to exactly that, four steps matching a four-item workflow strip: **Copy the prompt / Attach both files and paste it / Review the gap note at the bottom / Save the module.** 12 minutes, still 1.2 screens, still no check and no take-home paths.

Two judgement calls worth recording. **"Maybe read" is kept as a clause inside the attach step** rather than its own beat ("worth opening the skill first: five short sections, no magic in there"), because the legibility of the file is the argument for a file over a prompt and it costs one sentence.

**"Save" closed a real gap rather than just renaming one.** Nothing previously told anyone to keep the training module, and Exercise 05 opens by attaching it. The step now says to paste it into Word or a Copilot Page and save it, on the grounds that nothing left in a chat window survives the tab closing. Noted in the facilitator crib too, since it is the step a facilitator will need to chase.

Session-plan minutes updated: 04 is 12 rather than 11, site total 85.

## 2026-09-04 (addendum 2): the skill prompts now read as an ordinary ask plus one constant line

Matt supplied the pattern: you still write a normal prompt, and the skill adds one line at the end. The three skill prompts had been written as formal three-line incantations ("Use the attached skill on the attached document..."), which taught the opposite: that invoking a skill needs a special form of words.

All three rewritten to the same shape, labelled **YOUR PROMPT, PLUS ONE LINE** so the pattern is named every time it appears:

- what you want, in plain words
- a line or two of context, with the swap point in [brackets]
- `[attach the ...]`
- `Follow the attached skill.`

Exercise 04's first step now carries the teaching line rather than describing the prompt: "an ordinary request for what you want, then one line at the end that never changes. You still prompt. The skill carries the detail you would otherwise have to know." By 06 the shape is familiar, which is the point.

Also added to 04's attach step, from Matt's example: save the skill where the team can reach it, so everyone runs the same one. That is the seed for 06's "give it a home".

**One thing worth a second look:** the `[attach the plan and the skill]` line sits inside the copyable prompt, so anyone copying the whole box sends that line to the model too. Harmless, and it matches the example, but it is slightly off the site's own bracket convention, where brackets mark text to swap rather than an instruction to yourself.

Verified: build green, all six timings match, no body over 45 words, every one of the three prompts ends on the constant line.

## 2026-09-04 (addendum 3): goal before explanation in the page header

Matt: the brief should sit above the "what a skill is" line. It was rendering underneath, so every exercise page opened by explaining the tool before saying what you were there to do.

Swapped in `MissionDetail.jsx`, so it applies to all six exercises and the prompt library: eyebrow, then title and tool cards, then the `brief` in black, then `toolInfo.feature` in grey. The type already supported it, the brief being the darker of the two, so the hierarchy now matches the reading order instead of fighting it. Recorded in `CLAUDE.md` so it does not get swapped back.

Exercise 04's brief also shortened to Matt's wording: "Build a half-hour training session on the plan, using a skill file. Watch what it does when the plan cannot answer a question the training needs answering." The old version explained that we wrote the skill, which the artifact strip directly below already makes obvious.

Verified in the browser: header order is eyebrow, head row, brief, strap on both 04 and 01. Build green.

## 2026-09-04 (addendum 4): the three skill prompts settled on one shape

Matt supplied the 04 prompt with the skill named at the start ("Using the attached skill build me..."), which left 04 front-loaded and 05 and 06 back-loaded. Flagged it, because the value of the pattern is being identical every time. His call: **skill at the end**, as in his original example.

So all three now read the same way, labelled YOUR PROMPT, PLUS ONE LINE:

- what you want, in plain words
- a line or two of context
- `[attach the ...]`
- `Follow the attached skill.`

Matt's wording kept throughout for 04, including "the sustainability pdf" and the audience line; only the invocation moved to the closing line. Note the audience is no longer in [square brackets]: it is fixed to the actual room, professional services and academic staff, rather than being a swap point.

Exercise 04's first step reads: "an ordinary request. What you want, who it is for, what matters most. Then one line at the end that never changes. You still prompt; the skill carries the detail you would otherwise have to know."

Verified: all three end on the constant line, all three share the label, timings match, no body over 45 words.

## 2026-09-04 (addendum 5): the attach line is no longer copied

Matt spotted what I had flagged and left: `[attach the ...]` sat inside the copyable prompt, so pressing COPY sent it to the model. It is an instruction to the reader, not part of the prompt.

Added an optional `promptNote` field. `PromptBox` renders it under the prompt, **outside the `<pre>`**, which excludes it from both copy routes: the clipboard path writes the `prompt` string only, and the select-text fallback selects the `<pre>` contents. Styled as a small dashed-separated caption so it does not read as prompt text. Wired through both `Step` and `ChoiceStep`.

All three skill prompts moved their attach line into it, using Matt's wording ("skill file", not "skill"):
- 04 `[attach the sustainability pdf and the skill file]`
- 05 `[attach your training module and the house style skill file]`
- 06 `[attach your training module, the sustainability pdf and the skill file]`

Each prompt now ends cleanly on "Follow the attached skill."

Verified in the browser by intercepting `navigator.clipboard.writeText`: the copied text ends on the constant line and contains no attach line. Then forced the fallback by making the clipboard throw: the button switches to PRESS CTRL+C and the selection also excludes the note. Field documented in `CLAUDE.md`.

## 2026-09-04 (addendum 6): step 1 of Exercise 04 rewritten

Matt on the previous version ("Look at the shape of it: an ordinary request. What you want, who it is for, what matters most. Then one line at the end that never changes. You still prompt; the skill carries the detail you would otherwise have to know."): gobbledygook, be concise. He was right. It restated the prompt's structure back at someone who could see the prompt directly below it, then made the same point twice.

Now: "An ordinary request, plus one line at the end that never changes. You still prompt. The skill makes it come out the same every time." 44 words to 25, and it borrows Matt's own phrasing from the example he supplied.

## 2026-09-04 (addendum 7): step 1 wording, and a UK English error in our own house style skill

Exercise 04 step 1 now reads: "An ordinary request, plus one line at the end that never changes. You still prompt. The skill helps make it follow your best practice."

Matt wrote "best practise". Corrected to **practice**, because in UK English practice is the noun and practise is the verb, and the site's own rule says UK English throughout.

That check turned up a genuine error in `Cardiff_House_Style.md`, which I wrote: rule V4 said "licence and practise as nouns". Practise is the verb. A house style skill teaching the wrong half of the licence/practice split would have propagated the mistake into everything it touched. Now reads "licence and practice as nouns with license and practise as the verbs". Fixed in `tools/make_artifacts.py` and regenerated; the file is 3,944 characters, still inside the 6,000 budget.

## 2026-09-04 (addendum 8): the Part 1 rhythm applied to all six

Matt: do the same for 05 and 06, and although 01-03 carry locked prompts, the language and workflow can be shaped the same way.

**Every exercise now runs on the same rhythm**: paste the prompt, attach the files, do the thing, check or save. Step titles are concrete actions, bodies name the actual file and the actual control, and the tool is named up front ("Use Copilot or Gemini", "Use Gemini. Turn Canvas on in the Tools menu").

Specific changes worth noting:
- **"strip above" became "links above"** everywhere, on Matt's instruction. The word "strip" survives only in code and in this guide, where it describes the UI to a facilitator rather than to a participant.
- **05 and 06 gained a separate attach step**, so all three skill exercises share 04's shape: paste is one beat, attaching is the next. 05 went to five core steps and 17 minutes, 06 to six and 18.
- **Files are named rather than gestured at**: Training_Module_Builder.md, Cardiff_House_Style.md, Fact_Check_Cardiff.md, Sustainable-Futures-en.pdf, Deep_research_output.pdf.
- **"module" became "training session"** in 04's save step and through 05 and 06's references, avoiding the UK HE collision where a module means a credit-bearing unit.
- 01's step 1 is now "Paste the brief into Deep Research"; 03's is "Run the thin ask"; the strips match the titles throughout.

**Nothing load-bearing was lost.** Swept and confirmed present: 01's export chain and the report-comes-back-in-the-chat warning, 02's Subject-bracket and download-before-re-upload fixes, 03's "start a NEW chat", 05's one-generation constraint, and 06's Exercise 01 callback and Jisc anchor. All seven MH_* constants are still byte-identical at 747, 7085, 239, 2023, 115, 202 and 893 characters.

Site copy is now 1,281 words across all six pages, from 3,033 before the first cut. No body over 45 words, every timing matching its step sum, 86 minutes of core across the site.

## 2026-09-04 (addendum 9): Exercise 05 moved into Gemini Notebook

Matt: 05 is a Notebook exercise now, grounded in two sources, the sustainability pdf and the training session from 04, with a backup for anyone who does not have one. Same concise language as 04, and drop the "Change a rule" path.

Rebuilt: tools are Gemini Notebook only, four core steps at 15 minutes. Make a notebook and add two sources; put the house style in the pencil; generate and export; check. The old shape ran the house style skill over the draft in a chat and then went to Notebook for the deck, which meant two tools and a step that no longer earns its place.

**The technical point that shapes the exercise, and is worth saying in the room:** the house style skill goes in the Studio **pencil**, not the source list. Studio generates from its sources, so adding a style guide as a source produces a deck partly about the style rules. The step says DO NOT add it as a source and explains why in the same sentence. This is the kind of failure that reads as the tool misbehaving.

**New artifact: `Example_Training_Session.md`** (4,224 chars), generated by `tools/make_artifacts.py`. A real output of the training skill on the plan, seven sections plus a gap note that records no dates, no named owners, no thresholds and one house convention. It exists so 05 and 06 work for anyone who skipped 04 or lost their output, and it doubles as a worked example to project. No character budget applies: it is a context document, not a skill.

Also aligned: 06 now says "training session" rather than "training module" in its prompt, and carries the backup artifact too, so it stands alone as well.

Dropped the "Change a rule" stretch path. 05 keeps one take-home path, "The rest of Studio".

Verified: `?doctor` reports all 11 files 200, including the new backup; timings match on all six; site copy is 1,249 words; 05 walked in the browser showing three download links and the pencil warning.

## 2026-09-04 (addendum 10): COPY on text artifacts

Matt: the house style needs a copy button for Notebook's pencil, while still downloading as .md for Copilot and Gemini. A skill has to go two ways, and the site only supported one of them.

Added to the artifact strip. `.md` and `.txt` files now show **DOWNLOAD** and **COPY**; COPY fetches the file same-origin and writes its contents to the clipboard, confirming with COPIED for two seconds. If the clipboard is blocked by policy it falls back to opening the file in a new tab.

**COPY replaced OPEN IN A NEW TAB rather than joining it.** That button was near-useless on a `.md`: servers send Markdown as `text/markdown` and browsers download it rather than rendering it, so it did the same thing as DOWNLOAD with a misleading label. PDFs keep VIEW IN BROWSER, which does work.

Exercise 05 step 2 now says "Press COPY on Cardiff_House_Style.md above and paste it in", and the skill's own note reads "COPY it for Notebook's pencil, or download it to attach in Copilot or Gemini".

Verified in the browser by intercepting `navigator.clipboard.writeText`: pressing COPY on the house style put all 3,944 characters on the clipboard, front matter through to the V and D rules, and the button showed COPIED. The PDF above it still shows DOWNLOAD and VIEW IN BROWSER, the two .md files show DOWNLOAD and COPY.

## 2026-09-04 (addendum 11): the house style card moved into the step that uses it

Matt: move the house style card into step 2. It was sitting in the top strip alongside the two notebook sources, which was misleading, because it is not a source. Adding it as one is the failure the step warns about.

Refactored the card into an `ArtifactCard` component with its own download and copy handlers, used both by the strip and by a new optional step field, `artifact`. That removed the copy state and the two handlers from `MissionDetail`'s default export rather than drilling them down into `Step`.

Exercise 05's top strip is now exactly the two notebook sources, Sustainable-Futures-en.pdf and Example_Training_Session.md, which matches what step 1 asks for. Cardiff_House_Style.md sits inside step 2, directly above the prompt, where "Press COPY below" now points at something on the same screen.

**One thing this nearly broke silently.** `?doctor` collected `mission.artifacts` and step images only, so moving the file into a step dropped it out of the preflight without any visible sign. `DoctorPanel` now collects step artifacts too. Still 11 files, still all 200, and Cardiff_House_Style.md is still among them, which is the point.

Verified in the browser: the card renders inside step 2, the top strip carries only the two sources, and COPY inside the step puts all 3,944 characters on the clipboard.

## 2026-09-04 (addendum 12): Exercise 05 stripped to three steps

Matt removed 05's 30-second check and then its whole CHOOSE YOUR NEXT MOVE section. It is now three core steps and 12 minutes, on one screen: make a notebook and add two sources, put the house style in the pencil, generate and export.

Also fixed the workflow strip, which still read "Check it" and had been slightly out of step anyway, its first item covering what step 1 does in one go. Now three items for three steps: Add two sources, Style in the pencil, Generate and export.

**04 and 05 now both run without a check and without take-home paths.** That is deliberate and is written into the facilitator guide as intent rather than omission: those two move fast, and 06 gives verification a whole exercise instead of a thirty-second habit. 01, 02, 03 and 06 keep both.

What went with the stretch section: "The rest of Studio", which pointed at infographics, audio overviews, quizzes and mind maps and noted each has its own daily budget. That budget point survives in the preflight section of the facilitator guide.

Site core time is now 81 minutes. Verified in the browser: 05 renders three steps, one INSTRUCTIONS heading, no orphaned stretch heading, 1.2 screens, no horizontal overflow.

## 2026-09-04 (addendum 13): the Cardiff house style skill rebuilt from the real template, then reviewed

Matt supplied Cardiff's own deck, `Cardiff-University-Presentation-Oct24 (2).pptx`, and asked for the design prompt improved from it with a subagent review after. Measurements are in `docs/research/2026-09-04-cardiff-template-design-system.md`.

**What the template actually gave up.** The palette is confirmed exactly: #E4251B (56 uses), black, white, #D9D9D9 panels, #CCCCCC rules, and **a stray #E5251A used 14 times**, one digit off the brand red, now called out as an error to correct. The theme is **stock Office, Calibri**, so all branding is applied at run level; read the theme alone and you would call the deck unbranded. The file is **26.66in wide, double-scale 16:9**, so every point size printed in it is twice a normal deck's. Grid: 3% margins, footer at 88% height, 45/45 columns, image columns at 26% or 50%, logo at 11-18% of width. Welsh-first has a real instance: slide 10 sets "Croeso" above "Welcome" at 240pt Georgia.

**I broke Matt Hayden's prompts doing this, and nearly shipped it.** Removing the now-dead `CARDIFF_DESIGN_PROMPT` I sliced from its opening comment to `const A = {`, and all seven `MH_*` constants sit between those points: 17,083 characters deleted instead of 4,226. **`npm run build` passed**, because Vite does not resolve identifiers, so seven runtime ReferenceErrors built clean and reported a smaller bundle. Exercises 01, 02 and 03 would have crashed on load. Caught only because the reported byte count looked too large. Restored from a scratchpad copy and verified three ways: all seven byte-identical at 747/7085/239/2023/115/893/202, all 11 prompts resolving, and `#/m1` and `#/m3` rendering their prompt boxes at the right lengths in the browser. The lesson: a green build proves nothing about this file, and index-based slicing across a region I had not re-read was reckless given how often I have said those constants must not move.

**The review found two things I had missed and one I had introduced.** The change log was **impossible in the tool Exercise 05 uses it in**: Studio's pencil generates a deck from sources, there is no draft, and a change log cannot be emitted. D3 **contradicted itself**, giving both a ratio and raw figures that disagreed, and stated the doubled template sizes first with the halving as an afterthought. And the sharpest omission was the stock-Office-theme point, whose consequence is direct: a model trusting placeholder defaults gets Calibri while every type rule silently fails and the output still looks compliant.

**One review finding I rejected.** It called "supporting copy 50-60" a fabricated number breaching the skill's own evidence rule. The XML has 50pt 54 times and 60pt 21 times as supporting-copy runs with an inherited typeface. Real. My research doc's table listed only verified font-and-size pairs, which is what misled the reviewer; the table now records the two sizes explicitly so it cannot mislead again.

**Then Matt cut the revise mode**, since the workshop only ever uses the skill in generation mode and 05 no longer has a change-log step. The file is now build-only: 5,479 characters, inside the 6,000 guideline, with `## How to build` in place of `## How to review` and four named failure states, `CANNOT APPLY`, `NOT AVAILABLE IN THIS TOOL`, `NONE STATED` and `WELSH NOT SUPPLIED`. That last one matters in a room: a model told "Welsh first" with no Welsh supplied will machine-translate, and wrong Welsh on a Cardiff slide is worse than English alone.

Also removed: the dead `CARDIFF_DESIGN_PROMPT` and the unused `PROMPT_LIBRARY_URL`. The prompt library site still hosts the original.

## 2026-09-04 (addendum 14): Exercise 06 is now real data analysis

Matt: 06 should be data analysis in Gemini, with Python, on real official university sustainability data. Researched the options; the answer is unambiguous.

**The dataset: HESA's HE Provider Data: Estates Management.** Ten academic years, 2015/16 to 2024/25, 163 UK universities, 346,050 rows, published 9 July 2026, **CC BY 4.0** so redistribution is allowed with attribution. Cardiff is in it every year. Everything else checked was unusable: People and Planet's league table is a paid commercial product, SCEF publishes methodology and no data, DESNZ subnational data cannot identify institutions, Cardiff's own carbon page is one year of HTML with no time series, and no Medr estates dataset could be verified.

**Scripted download is blocked.** `curl` on the HESA zip returns **403 with a Cloudflare challenge**, confirmed. A browser download works, which is how Matt got it and how I verified it. The file is hosted at `public/placeholders/HESA_Estates_Management.xlsx`, unmodified, credited to HESA, www.hesa.ac.uk, CC BY 4.0. `dist/` is now 25 MB.

**Two structural traps I verified against the file**, both handled in the prompt: the header is on **row 11** under a metadata block, not row 9 as first reported; and **27.66% of the Value column is text** (`Yes`, `No`, `Medium`, `Basic`, `0.0%`), so it reads as object and must be coerced.

**The findings are real, and I computed all of them from the file** so the crib has answer keys. Cardiff's Scope 1 and 2 fell 29,663 to 21,336 tCO2e, down 28%. The estate grew 451,363 to 532,968 m2, up 18%, so intensity fell 65.7 to 40.0 kgCO2e/m2, down 39%: two true charts telling different stories, which is step 3's whole point. The linear trend is about **-804 tCO2e a year**, projecting to roughly 13,300 in 2034/35 and reaching zero around **2051**. The plan runs 2025-35, so **on this trend Cardiff does not get there**. That is the Demand First argument made in numbers.

**A trap the prompt deliberately does not handle**, left as the best teaching moment available: a UK-wide total is misleading, because reporting was compulsory for English and NI providers until 2018/19 and voluntary after, so the provider count falls from about 160 to about 140 and the national line drops for a reporting reason. Per-provider trends are unaffected. It is in the crib.

**What 06 lost, on Matt's instruction:** the fact-check skill and the day's landing. The Jisc ladder, the workflow record and "give it a home" are no longer anywhere on the site. The day now ends on the analysis. Four core steps, 16 minutes, site total 79.

**Flagged: `Fact_Check_Cardiff.md` is now reachable by nobody.** Still generated, still good. Left in place rather than deleted unasked; noted in the facilitator guide as either a take-home or a retirement, for Matt to decide.

## 2026-09-04 (addendum 15): Exercise 06 ends on an interactive dashboard in Canvas

Matt supplied a Canvas "interactive infographic" workflow and master prompt, and asked for 06 to end on it, reviewed and improved. Added as a fifth core step, "Build it into something people can click". 06 is now 20 minutes and the site is 83.

This fixes the thing I flagged when the landing was dropped: the day was ending on a chart in a chat window. It now ends on an artefact you can send someone, and the toggle between absolute emissions and intensity IS the step 3 finding made clickable.

**What I changed in his master prompt, and why.**

- **Added the grounding constraint, which was the biggest gap.** The original said "Paste key numbers" with nothing stopping the model inventing the rest. It now says use only the figures computed above in this chat, do not invent, round or extend them, and put **NEEDS DATA** on any card whose number was never computed. Without that, a dashboard built off a real analysis quietly fills its gaps with plausible fiction, which is the exact failure the whole day teaches against.
- **Added the four-stage build pipeline** from `docs/PROMPT_GUIDANCE_2026.md`: spec under 150 words, numbered plan, the complete file, then a self-check naming what was verified, with no code before stage 3 and no placeholder comments. The original went straight to "create a self-contained infographic".
- **Named Chart.js rather than "Chart.js or D3.js".** D3 is a reliable way to get a broken page out of a model; Chart.js is not.
- **Dropped the dark theme.** The original asked for "a dark or modern neutral theme", which contradicts the Cardiff house style we built the same day (white ground, one accent). Now white background, one accent, readable at arm's length on a projector.
- **Made the projection honest.** The page must state on itself that the projection assumes the last ten years simply continue. A straight line through ten points is not a forecast, and a dashboard that does not say so is a claim.
- **Cut the deployment advice.** The original suggested hosting on GitHub Pages, Vercel or Notion. None of those is a route Cardiff staff can take with university content, and Exercise 03 already tells them what a Canvas share link is and is not.
- Fixed "A interactive chart", and specified units on every axis and UK English.

**One process note.** The step was first inserted after the closing bracket of the steps array rather than inside it. `npm run build` **failed** on that, correctly, because a stray object literal is a syntax error rather than an undefined identifier. Worth recording next to the earlier incident: the build catches malformed structure, and does not catch missing references. Both checked afterwards; all seven MH_* constants still byte-identical.

## 2026-09-04 (addendum 16): the 04 to 05 handoff goes by clipboard, not by file

Matt: in Gemini it is easier to use the copy icon under the answer and paste into Notebook via Add source than to save and upload a file.

He is right, and the site was teaching the long way round. Notebook takes pasted text as a source, so the training session never needs to become a file at all.

- **04's last step** now leads with the copy icon under the Gemini answer and says why: Exercise 05 pastes it straight into a notebook. Copilot's Export to Word is kept as the second route for anyone on that side.
- **05's first step** now says upload the pdf, then Add source again and paste the training session in as copied text, rather than implying both sources arrive as files.

Deliberately did not name Notebook's paste button verbatim. I have not verified its exact label on a Cardiff account and have been caught on unverified UI specifics before; "Add source and paste it in as copied text" is findable whatever the button says.

Also noted in the 04 crib, since keeping the session is the step a facilitator has to chase.

## 2026-09-04 (addendum 17): Matt's version of the training skill, and the audience narrowed

Matt supplied his own edit of `Training_Module_Builder.md` and asked to drop academic staff from the Exercise 04 prompt.

**His changes, adopted:** "engaging" added to the description and "UK English output" appended; the identity line gains "You are a learning expert creating content that is jargon free, with all the required detail whilst being concise (less is more)"; check questions cut from four to six down to **two**; and the description no longer claims Cardiff house format, which is right since that is a separate skill now.

**Three corrections I made to his file rather than shipping as-is**, all mechanical rather than content: "an learning expert" to "a learning expert", "consise" to "concise", and "UK english output" to "UK English output" in a file whose own rule is UK English. Flagged to him rather than done silently.

His content now lives in `tools/make_artifacts.py`, so regeneration reproduces it rather than clobbering it. 3,886 characters, front matter valid, inside the budget.

**Exercise 04's prompt** now reads "Audience: professional services staff who have not read it and will not."

**The backup had to follow.** `Example_Training_Session.md` is meant to be a plausible output of that skill, and it still said "Professional services and academic staff" and carried three check questions against the skill's new two. Both fixed, so the worked example does not contradict the instructions that produced it. Nothing anywhere says "academic staff" now.

## 2026-09-04 (addendum 18): the day lands on a Matts quote

Matt asked for 06's CLEARED quote to be from The Matts, about Jisc, experiments to workflows and standardising. This recovers what I flagged as lost when 06 became the data analysis: the day had stopped landing on embedding and ended on a chart.

Added an optional mission field, `verdictBy`, defaulting to C. Gravitas, because the attribution was hardcoded in `MissionDetail`. 06 is the only exercise that uses it.

The quote: "Jisc calls where most teams sit stage two: experimenting and exploring. Stage three is operational, and the difference is not skill, it is writing the thing down so somebody else can run it. Nothing you did today was hard. Doing it the same way twice is the hard part, and it is the only part that scales."

Verified by pressing Exercise Complete in the browser: CLEARED stamp, the quote, attributed to The Matts. Test progress cleared afterwards so nothing is left marked done in local storage.

Noted in the facilitator guide with a caveat worth having: this is the last thing anyone reads on the site, but **nobody presses Exercise Complete in a room**, so it needs saying out loud at the close rather than relying on the page to deliver it.

## 2026-09-04 (addendum 19): three buttons, one width, and a shorter close

Matt: the skill card should have a view-in-browser too, the buttons should be the same size, and the closing quote should be more concise.

**VIEW IN BROWSER now works on a `.md`.** I had removed it because servers send Markdown as `text/markdown` and browsers download that rather than rendering it, so the link did the same job as DOWNLOAD under a misleading label. The fix is to fetch the file and open a `text/plain` blob, which renders. Verified by intercepting `window.open`: it opens a `blob:` URL whose contents are the skill file. Falls back to the plain link if the fetch fails. PDFs keep the direct link, which already worked.

**Buttons are one width.** `.btn-artifact` is now an inline-flex box with `min-width: 11rem` and centred text, so DOWNLOAD, COPY and VIEW IN BROWSER all measure 176px and the row does not jump when COPY becomes COPIED. Measured in the browser.

**The closing quote went from 55 words to 33**, keeping the part that earns its place: "Jisc calls where most teams sit stage two: experimenting. Stage three is operational. Nothing you did today was hard; doing it the same way twice is the hard part, and the only part that scales." That is now in line with the other five verdicts, which run 20 to 37 words.

## 2026-09-04 (addendum 20): the gap note step says what a gap note is

Matt: drop "That is the plan being a ten-year strategy, not the tool failing" from Exercise 04 step 3, and make it clear what the gap actually is.

Fair. The old wording spent two-thirds of its words defending the tool and never said what a gap note contains. Now: "The gap note is everything the training needed and the plan does not say: no dates, no named owners, no thresholds. That list is your questions for whoever owns the plan."

That defines it, gives the three things they will actually see, and ends on what it is for. 31 words.

The fuller framing, that a ten-year strategy defers annual targets to the action plan underneath it, stays in the facilitator crib, where it is the answer key rather than a defence printed on the page. Say if you want it gone from there too.

## 2026-09-04 (addendum 21): the Matts quote belongs on 04, not 06

I put the Jisc quote on 06 when Matt asked for it, reading "this exercise" as the closer. He meant 04. Moved.

It is better there. 04 is where they first run a skill and feel what it does, so the stage two to stage three argument lands while the experience is fresh rather than ninety minutes later. It also means the day's thesis is stated early and the site does not depend on anyone reaching the last exercise to hear it.

06 goes back to Gravitas on the finding: "So the line does not get there. I would rather find that out from a spreadsheet in September than from a committee in 2034."

Both cribs updated. Note the swap had to be done in the right order, freeing the quote from 06 before giving it to 04, or the second replacement matches twice; the assert caught that before anything was written.

## 2026-09-04 (addendum 22): the real Exercise 04 output ships as the backup PDF

Matt ran Exercise 04 for real and pasted the output back, a professional services session on applying Demand First to daily purchasing. It replaces the worked example I had invented.

The source is `tools/example_source/training_session.md`, copy-edited to UK English with the chat preamble stripped and a note at the top saying what it is. `tools/make_example_pdf.py` renders it through pandoc and wkhtmltopdf with Cardiff house-style CSS: red `#E4251B` headings, grey `#D9D9D9` note panel, `#CCCCCC` rules between sections. Two A4 pages, 51 KB, at `public/placeholders/Example_Training_Session.pdf`.

The invented `Example_Training_Session.md` and its generator block are gone. Exercise 05 now offers the PDF as a source to upload rather than text to paste, which is what Notebook wants anyway.

Two notes for anyone rerunning the PDF build. This machine's wkhtmltopdf 0.12.6 is compiled against unpatched Qt, so headers, footers and link support are simply unavailable and `--footer-color` is a hard failure rather than a warning; the script now passes nothing but page size and falls back to `xvfb-run` if there is no display. And pandoc's `--metadata title=` makes the standalone HTML template emit its own title block, which duplicated the H1 on page one. Use `pagetitle` instead: it sets `<title>` and nothing else.

## 2026-09-04 (addendum 23): three small corrections from Matt

**COPY is opt-in on artifact cards.** Only Cardiff_House_Style.md carries it now, via a `copyable: true` flag, because Notebook's Studio pencil takes pasted text and not files. Every other skill is attached as a file, so a COPY button next to it was just a third thing to read past. Exercise 04's card is down to DOWNLOAD and VIEW IN BROWSER.

**The prompt button says COPY PROMPT and is bigger.** 0.7rem to 0.82rem, padding roughly doubled. It is the one control in the whole page a person has to find while a presenter talks over the top, and "COPY" alone sat in the label bar reading as part of the label.

**Exercise 04 leads on Gemini.** Its app cards, `tools` list and tool strap were Copilot first; the room is on Gemini. Exercise 01 was already in that order.

Still unresolved: `Fact_Check_Cardiff.md` is generated but reachable from no exercise.

## 2026-09-04 (addendum 24): 04 becomes the house pattern, and the other five come to it

Matt: "exercise 4 is now like a model exercise for language layout design ... do same for 1-2-3 but remember we can't edit the prompt."

A read-only agent audited 01, 02, 03, 05 and 06 against 04 before anything was touched. Four cross-cutting fixes did most of the work.

**Instruction first, why last.** Six bodies opened with an explanation and closed with what to press. Reversing that order fixed the two worst cases automatically. Exercise 05's hard constraint was a throwaway opener, "One generation each, so make it count", ahead of any instruction; it is now the imperative itself, "You get one generation each, so read the prompt back before you press Generate". Exercise 06 step 4 was eleven words of presenter voice naming no control and never saying what the hard question was; it now says what the prompt does and what it settles.

**The chip is the contract.** Every workflow chip is 2-4 verb-first words naming the step's real work, and every title is an expansion of its own chip carrying nothing the chip does not. That removed the pronoun chips ("Save it as a PDF", "Audit it"), the one noun-phrase chip ("Style in the pencil"), and the chip/title split in 03 where the chip said "Start a new chat" and dropped the actual work.

**Every field does one job.** `feature` is now exactly two sentences everywhere, define then kill one objection: 01 went from 49 words to 25, 02 from 38 to 21, and 03 gained the second sentence it never had, its objection-kill having been sitting in `summary` instead. `brief` is one sentence everywhere, 14 to 18 words. `promptNote` took the do-not-copy lines out of the bodies in 01 and 03. Content that appeared in two fields at once is now in one: the Deep Research cost, the Canvas definition, and the spreadsheet quirks that 06 explained in prose while its own prompt already handled them.

**A fixed lexicon.** Five gestures, one wording each: copy the prompt and paste it; attach it with the paperclip; turn X on in the Tools menu, under the box where you type; start a NEW chat; the three-dot menu gives you X. Exercise 04's own wording was left alone, since it is the model and every line of it was agreed with Matt directly.

**The 30-second check is gone from 01, 02 and 03.** Three exercises ending on a step called "The 30-second check", a noun phrase, was the most visible break in a pattern the other three had already left. Core minutes drop to 10, 12 and 11; the session total is now 77. The stretch blocks stay, because they carry real take-home content. Exercise 03's check was the best of the three, so its substance moved into the facilitator guide as something to say out loud rather than print.

All step bodies now total 764 words. The pre-simplification baseline was 3,033.

Two verifications worth keeping. The seven `MH_*` constants were hashed before and after and are byte-identical, which is the check that matters because Vite does not resolve identifiers at build time, so a wrecked constant builds clean and fails on load. And a script asserted, per exercise, that `estMinutesCore` equals its core step sum, that the chip count equals the core step count, that no brief exceeds 20 words, that no body exceeds 37, and that every `feature` is exactly two sentences. All six pass.

**Still open, and asked but not answered.** Whether `Fact_Check_Cardiff.md` becomes a take-home on 06; it remains generated and linked from nothing. Whether `src/config.js` keeps its live Apps Script URL and the token `jaja`. What replaces `public/policy_stall.webp`, which still advertises the AI policy documents dropped in the pivot. And whether the Exercise 01 callback, which grep confirms is genuinely absent from 06 since 06 was rebuilt as the data exercise, should be restored or formally dropped.

**Browser-tool note for the next session:** after a hash-only navigation, `get_page_text` returns the previous page's content and screenshots keep the old scroll position, so a short page reads as blank. Load `index.html#/mN` rather than `#/mN`, then press ctrl+Home before believing a screenshot. Nothing was wrong with the site both times it looked broken.

## 2026-09-04 (addendum 25): the completion quotes become learning points

Matt: "make the completed quotes mini learning opportunities."

All six were Chris Gravitas punchlines except 04, which already carried the Jisc quote from The Matts. That one was doing real work, so it became the model for the other five. Each verdict is now the single transferable lesson from its exercise, 29 to 36 words, attributed to The Matts via `verdictBy`.

- **01** a citation is not a check; the value is one model proving another, and reading what changed.
- **02** models weight nouns, not negations; and an image the model cannot describe back is one a screen reader user cannot use.
- **03** both games came from the same model on the same day, so everything separating them is in the prompt.
- **05** where you put an instruction changes what it does: as a source the house style becomes the subject of the deck, in the pencil it becomes the method.
- **06** ask for the code and the numbers are computed rather than guessed, which is the difference between a finding and a plausible sentence.

The trade is deliberate and worth naming: Chris Gravitas is now out of the verdicts entirely and survives only in the gallery memo and the prompt library. A teaching line in a comic bureaucrat's voice undercuts itself, and 04 had already broken the pattern. Reverting is one field per exercise: drop `verdictBy` and the default attribution comes back.

`CLAUDE.md` updated so the next session does not restore the punchlines.

## 2026-09-04 (addendum 26): the gallery memo cut from 130 words to 45

Matt: "more concise so like 3 lines."

The memo was carrying six jobs and four of them were duplicated further down the page. The section header directly beneath it already says BUILD THE STAFF TRAINING, so it did not need to list the deliverables; 04, 05 and 06 each state the three-working-skills thesis, so it did not need to state it either; and the exercise arc is visible in the grid.

What is left is what only the memo can do: who is asking, why, and the Responsible AI line. Chris introduces himself, the plan lands on his desk, he volunteers the team, and the last sentence is the governance beat that matters more than the joke.

It renders as two lines, not three, because the directive column is wider than it looks in the source.

**One knock-on that had to be fixed.** `.intro-row` was `align-items: stretch`, so the black memo box sized itself to the hero image's 280px. At 130 words the text filled it; at 45 it left most of the box empty. Changed to `align-items: center`, which matches the image's existing `align-self: center`, so both now sit centred and the box hugs its content.

Also cleared `workshop_progress_v1:matt@cardiff.ac.uk` from the browser profile, which was test state left by verification clicks earlier in the session and was showing Exercise 04 stamped DONE on the gallery.

## 2026-09-04 (addendum 27): the hero image finally matches the workshop

Matt generated the replacement from the style-block-plus-subject prompt and it landed every element of the brief: striped suit, otherwise empty desk, the Sustainable Futures document, the green hoodie, the dragon pennant, the clock at five to twelve.

It came back in ZX Spectrum 8-bit rather than the red-brick British comic style the block specified. That is a better outcome than the one asked for, because Exercise 03 builds a ZX Spectrum game, so the hero now rhymes with the day rather than merely decorating it. Worth remembering as a teaching point: the style block constrains, it does not guarantee, and the miss was more useful than the hit.

Converted at `-q 88 -resize 960 0`, giving 960x524 and 90 KB, down from the old image's 237 KB. The hero renders at 320px so 960 is 3x for retina. Saved as `public/staff_briefing.webp`; `policy_stall.webp` deleted, since it advertised the AI policy documents dropped in the pivot and nothing now references it.

`HERO_IMAGE` in `missions.js` is the only wiring, and `DoctorPanel` derives from it, so the preflight followed automatically. Alt text in `MissionGallery.jsx` rewritten to describe the actual scene, including the whiteboard text and the clock.

The new aspect ratio is 1.83:1 against the old 1.23:1, so at 320px wide the image is 175px tall rather than 260px. That works only because `.intro-row` was changed to `align-items: center` in addendum 26; under the old `stretch` it would have left a gap. The two changes were independent but the second one saved the first.

`ROADMAP.md` still mentions `policy_stall.webp` in two dated log entries. Those are historical records of what was true then, so they stay.

## 2026-09-05 (addendum 28): Notebook dropped the pencil, and the site had it in nine places

Matt, from the live tool: "its click the slide deck and then you don't need the pencil now - you paste the style prompt in the 'describe what slide deck you want'."

Gemini Notebook has changed since the exercise was written. Clicking Slide Deck now opens a **Customize Slide Deck** dialog carrying Format (Detailed Deck or Presenter Slides), language, length, sources, and a large field labelled **Describe the slide deck you want to create**. That field is where the house style goes. There is no pencil.

This is the failure mode the tool-capabilities research doc exists to prevent, and it still caught us out: the instruction was verified in early September and was wrong by the fifth. Anything naming a control is perishable. `docs/research/2026-09-04-tool-capabilities.md` needs re-checking before every run, not just before the first.

"Pencil" was load-bearing in nine places across five files, which is more than it looked: the artifact note, the exercise summary, the step title, the step body, **the completion verdict**, two source comments in `MissionDetail.jsx`, the header text inside the generated skill file itself, and four separate lines in `FACILITATOR_GUIDE.md` including the trap-to-name-out-loud and the quota note about revisions. The verdict was the easiest to miss, because it is the one place the word carried an argument rather than an instruction: "in the pencil, it becomes the way the deck is made" is now "in the description box".

`Cardiff_House_Style.md` was regenerated and is 5,492 characters, still inside the 6,000 budget.

**Matt's screenshot is now on the step**, which is new for this site outside Exercise 02. It needed a CSS variant: `.mission-step__figure img` caps at 460px, which is right for 02's photograph and useless for a screenshot of a control someone has to find. Added `--ui`, opted into by `image.ui` in the data, which lets it take the full column. It renders at 784px against an 851px source, so near 1:1 and the field labels stay sharp.

`?doctor` picked the screenshot up with no code change, because `DoctorPanel` derives from `MISSIONS` and already collected step images. Twelve files now, all 200. Its hero row label still said "stall illustration" from the old cartoon; fixed to "hero illustration".

**Browser-tool note, third time this session.** After a screenshot timeout the tab served a stale JS bundle and the new `--ui` class was silently absent, so the image looked unchanged and I nearly "fixed" working CSS. `javascript_tool` reading `className` and `getBoundingClientRect()` settled it in one call where a screenshot could not. Check the DOM, not the picture, when a style change appears to do nothing.

## 2026-09-05 (addendum 29): Exercise 05's prompt shrinks to one line, and moves above the skill card

Matt: "the prompt here is just Training Slide deck on the Demand First ladder, so staff can apply it in practise, plus prompt should be above the skills so it matches."

The old prompt was four lines telling Notebook to follow the training session section by section, one message per slide, every figure from the sources, then "Follow the attached skill." All of that was written for a chat box. The Slide Deck dialog is not a chat box: it is a field called "Describe the slide deck you want to create", and the house style pasted above it already carries the rules. So the prompt is now one line and the rest was duplication:

> Training slide deck on the Demand First ladder, so staff can apply it in practice.

`promptLabel` changed from 'YOUR PROMPT, PLUS ONE LINE' to 'THE DECK DESCRIPTION'. The old label named the "Follow the attached skill" line that no longer exists, so it would have been a small lie left on the page.

Spelling: Matt wrote "in practise". Kept as **practice**, the UK noun; practise is the verb.

**Render order swapped in `MissionDetail.jsx`:** prompt now comes before the step's artifact card. Exercise 05 step 2 is the only step in the site carrying both, so nothing else moves, and the prompt now sits directly under the body on every exercise without exception.

`promptNote` rewritten twice. It has to describe the order things go into the Notebook field, which is no longer the order they appear on the page, and that is exactly the kind of sentence that gets read backwards in a room. Settled on "[house style first, then this line underneath it]".

## 2026-09-05 (addendum 30): the house style skill learns what good actually looks like

Matt: "the cardiff house prompt needs some guidence like a few lines on what good looks like for vocab, sentence structure, etc you could use the sustainability doc for this and search web."

V1-V6 told the model what to do but never showed it. "Short sentences, active voice, no hedging" is the kind of instruction every style guide gives and no model can calibrate against. So the new **What good looks like** section is measured out of the sustainability plan rather than asserted, and every number in it is checkable.

What the measurement actually found, from `pdftotext` over the real plan:

- **"our" 119 times, "we will" 9, "we are" 6, and "you" exactly 0.** The plan never once addresses its reader. That is the single most useful voice fact in the document, because a training deck has to break it: the collective "our" is right for what the university commits to, and "you" is right for what the reader does on Monday.
- **Zero contractions.** No we'll, we're, don't, it's, we've anywhere.
- **UK spelling is clean:** 24 -ise, 0 -ize, 7 -isation, 0 -ization.
- **The hype list is already honoured by the source:** world-class 0, leverage 0, utilise 0, seamless 0, cutting-edge 0.
- **Median sentence 24 words, mean 25.3, a third over 30 words. Flesch reading ease -3. Flesch-Kincaid grade 20, a reading age around 25.**

That last figure is the important one and it reframes the exercise. The plan is close to unreadable by plain-English standards, which is precisely why staff will not read it and precisely why the training exercise exists. So the skill now says in terms: take the plan's vocabulary and stance, do **not** take its sentences. Right for a strategy, wrong for a slide.

**A contradiction the measurement exposed.** V2 banned "robust", and the plan uses it four times, all defensibly: "robust evidence", "robust environmental credentials", "robust, evidence-based pathways". The skill was telling the model to strip a word out of the very document it was applying the rules to. Removed from the ban list. Worth remembering as a pattern: a banned-words list written from instinct will collide with a real source, and the collision is invisible until someone counts.

**Budget.** The file is now 5,999 characters against the 6,000 guideline, so there is one character of headroom and the next edit will breach it. Paid for by cutting the tool-routing sentence, which duplicated what the website step already says, trimming a clause from V1 now that the new section carries the concrete number, and tightening the identity line. If it needs to grow, the honest move is raising the guideline: the Copilot Agent Builder instructions field holds 8,000, and 6,000 was always a safety margin rather than a limit.

First placement put the block between V6 and D1, which silently reparented D1 to D8 under "What good looks like". Moved after D8.

Web research on Cardiff's own published tone-of-voice guidance was commissioned in parallel and had not reported when this landed. If it turns up named voice attributes, they belong in this section.

## 2026-09-05 (addendum 31): the vocabulary list was wrong, and readability is now the stated job

Matt: "I don't want vocab too specific to the document that don't make sense and also I want the cardiff slide deck to reduce the reading age the Flesh thing... clear and easy consise, jargon free bake that in to the style."

**The vocabulary list is gone, and he was right.** Listing "circular, nature-positive, Demand First" as words to reuse was a category error: `Cardiff_House_Style.md` is a general skill for any Cardiff deck, infographic or document, and it was seeding one document's jargon into all of them. Someone building a deck about research funding would have been told to reach for "nature-positive". Worse, it pushed *towards* jargon in a skill whose V2 rule bans it. The measurement was sound; the conclusion drawn from it was not.

What replaces it is the point the measurement actually supports. The plan scores Flesch reading ease -3 at a reading age near 25, so the skill now states that bringing that down **is the job, not a nicety**, and gives a test that can be applied line by line: *a line that only works for someone who has already read the source has failed*. That is checkable in a way "be concise" never is.

**Budget, resolved by deletion rather than more slicing.** The addition took the file to 6,065, then 6,025 after tightening. Rather than keep shaving good sentences, removed step 1 of "How to build" ("Say in one line what you are building from"), which restated what "When to use this" already says two paragraphs earlier. One statement of the context contract is enough. The file is 5,949 characters, and for once there is real headroom rather than one character of it.

Standing note for next time: if this file needs to grow again, raise the guideline rather than cut content. The Copilot Agent Builder instructions field holds 8,000; 6,000 was always a safety margin.

## 2026-09-05 (addendum 32): the first real run of the skill, and what it exposed

Matt ran the house style skill for real and sent back `Demand_First_Purchasing.pdf`, fourteen slides out of Notebook. It is an image-only export, so `pdftotext` returns nothing; rendering with `pdftoppm` and tiling into contact sheets is how to read one of these.

**V5 was actively harmful and is gone.** It demanded Welsh first on every title, with WELSH NOT SUPPLIED as the failure state when no Welsh was given. The source had no Welsh, so the model did exactly as instructed and stamped **WELSH NOT SUPPLIED across all fourteen slide titles**. Every slide. It is the first thing you see on the cover and it never stops. A rule whose failure state fires on every unit is worse than no rule, because the honest failure state is louder than the content it is protecting.

The wider lesson, worth carrying into any skill: a failure state should be rare by construction. If the common case triggers it, the rule is wrong, not the source. Welsh belongs in the room, where a person supplies it, not in an unattended generation. Note Matt's own teaching slide still lists "Welsh first" as part of the Cardiff brand answer, which is correct for the brand and wrong to delegate; the facilitator guide now says so explicitly.

**Two real clarity failures in the output**, both now ruled against:

- **Slide 8, "Elimination Beats Substitution", was two empty rectangles** labelled Step 1: Avoidance and Step 2: Substitution. A diagram containing nothing. D8 now says every box in a diagram holds words that say something, and that a labelled empty box is decoration pretending to be a point.
- **Slide 9 packed five narrow columns of small text**, and the two "Check Your Understanding" slides carried ninety-odd words each. V5's slot was free, so it became the density rule: at most 40 words a slide including labels, at most three panels or columns, one heading rather than a title and a subtitle saying the same thing twice.

**What the run got right**, worth not breaking: red used once per slide, the ladder motif repeated down the deck with the current step highlighted, and slide 4 landing on "The most sustainable purchase is the one you do not make." That is the deck's best line and it came out of the skill working as intended.

The file is 5,991 characters. Dropping V5's Welsh paragraph paid for both new rules almost exactly.

## 2026-09-05 (addendum 33): Matt's own design spec becomes the skill

Matt: "I have a prompt that I used before I think sometimes less is more with the studio... review and run with this with maybe a tweak", plus a second real deck, `Information_Classification_Architecture.pdf`, produced by that spec.

That second deck is markedly better than the one the old skill produced. Headlines that are statements rather than labels ("Security is not just an IT problem", "Three tiers of classification. One standard of care"), Demi over Georgia for contrast, red used once a slide, architecture photography at full bleed, and a classification matrix slide that says more in nine words than the old deck's five-column monster said in ninety. So the skill is now built on his spec rather than the other way round.

**Three bugs in the spec, fixed rather than shipped.**

1. **It contained both hex values.** COLOURS said `#E4251B`, BULLETS said `#E5251A`. The template analysis has 56 runs of the first and 14 of the second, and the second is a stray one digit off. Ported the correction into the rewrite.
2. **Every point size in it is the 26.66in master's raw number.** Cover 120, dividers 160-240, headings 72-92, body 32-48, supporting 50: those are exactly the figures in the research doc's table, measured off the double-width canvas. On a standard 13.33in deck they must be halved, or a heading arrives at twice the intended size. This is the single most consequential fix.
3. **Marr Sans and Darby Serif are specified but unfounded.** The research doc records Marr Sans as declared on 19 and 16 slides yet never the effective run font, and Darby as appearing twice, "not enough to state a rule". They also will not exist in Studio. Named only as declared-but-not-rendered, so the model stops reaching for them.

**What the spec had that the skill did not, and now does:** a design philosophy paragraph. Rules tell a model what to avoid; that paragraph gives it something to aim at, and the difference between the two decks is largely the difference between having one and not.

**Welsh is back, and the earlier removal was right for the wrong reason.** Matt's spec scopes it to dividers and closers, and at that scope it works: the real run produced "Dosbarthu Data" and "Gweithredu", both correct. The failure was never Welsh, it was demanding it on every title so the failure state fired on every unit. Research confirms the scoping is also the defensible one: Cardiff's Welsh-first requirement (Service Delivery Policy 10.1, v4, 21 May 2024) covers signs and notices, and Operational Standards 8.1, 8.2 and 14.2 put a staff training deck outside the strict obligation.

**Two things the real deck exposed:**

- **US spellings got through**: "authorized" and "specialized". The UK English rule now names those two, since they are the ones that slip.
- **Sparse slides.** A 40-word ceiling with no floor gave a closing slide that was two words and no logo. Added a floor: a content slide carrying only a heading is not a slide.

**The 6,000 character guideline is now 7,000.** I defended 6,000 across four edits, twice by cutting content that was doing work, and it was never the constraint: Copilot Agent Builder's instructions field holds 8,000. The file is 6,647. Recorded in `CLAUDE.md` with the reason, so the next session does not re-litigate it.

**Also new from the research:** an authoritative sentence-length number to replace my inferred one. GOV.WALES style guide, last updated 3 September 2026: "Keep average sentence length 20 words or fewer." Cardiff staff are in scope, and the plan's median of 24 sits just above it. Cardiff itself publishes no reading-age or readability target at all, which is a verified negative worth knowing: do not invent one, and do not cite "reading age 9", which is GOV.UK and could not be verified.

## 2026-09-05 (addendum 34): two lines of Matt's philosophy restored

Matt asked whether his spec had actually been tuned. Reviewing the merge against his original, two of its strongest lines had been cut for length rather than for cause, back when the file was being squeezed under 6,000:

- "Think like an art director at a smartphone-first media brand" - a persona anchor, and the only line in the spec that tells the model whose taste to borrow. Rules constrain; a persona gives it a target to aim at.
- "The goal is a deck that feels like a high-end publication, not a compliance exercise." - the closing frame, and the line that most clearly separates his spec from a brand checklist.

Both restored now the guideline is 7,000. File is 6,795. This is the second time in two days that squeezing to 6,000 removed something load-bearing, which is the argument for having raised it.

Still deliberately not restored from his original: "Think like a top art director" (dropped "top" as it adds nothing), "one reaction" from "one slide, one message, one reaction", and "The contrast between text-dense areas and vast white voids creates rhythm across a deck", which restates the negative-space sentence immediately before it. His red-blade line was not cut, it was moved into the Colour section next to the hex values it governs.

## 2026-09-05 (addendum 35): back to Matt's spec, with one section added

Matt: "this was mine, i think you over complicated it a bit and we need a section on reading level no jargon etc as notebook can be confusing."

He was right. The merge had grown a "When to use this" preamble, a three-item failure-state section, a separate "What to hand back", a paragraph on the stock Office theme, and a "Words on the slide" section of eight sub-rules. All of it defensible in isolation, and collectively it buried the thing that made his spec work, which is that it reads like an art director briefing a designer rather than a compliance document.

The file is now his spec, his section headings, his wording, with exactly three interventions:

1. **`#E5251A` corrected to `#E4251B` in BULLETS.** His spec carried both; the template has 56 runs of the first and 14 of the stray.
2. **Two lines on the point sizes.** Rather than halving his numbers and losing his hierarchy, the sizes stay as written with a note that they are Cardiff's master-file scale on a 26.66in canvas, that the ratio is what matters, and that a standard 13.33in PowerPoint deck needs them halved. His numbers demonstrably work through Studio, which interprets rather than applies them; the correction only bites in PowerPoint. Halving them outright would have been the wrong fix to a real problem.
3. **A new section, READING LEVEL AND PLAIN ENGLISH**, which is what he asked for and the one thing his spec never had. His spec is entirely about how a slide looks. Both real runs show the design carrying itself while the words stay as dense as whatever they came from, which is exactly his point about Notebook being confusing.

Also folded in rather than kept as sections: Marr Sans and Darby dropped from FONTS (declared in the template but never rendered, and absent from Studio); the Welsh line in RULES scoped to a one or two word section name; and the failure-state machinery compressed from a section into two sentences at the end, because "never claim a font or a colour you did not set" is the part that earns its place and the rest was ceremony.

5,669 characters, down from 6,795. Under the old 6,000 guideline again, which is the better outcome: the guideline was raised because content was load-bearing, and this proves some of it was not.

## 2026-09-05 (addendum 36): the plain-English skill feeds the slide skill

Matt supplied his separate plain-English writing skill and asked for some of it, not all, plus a WHEN TO USE IT section.

**Taken**, because each earns its place on a slide:

- **Front-load everything.** Conclusion first, in the deck, the section, the slide and the sentence. This is the single most useful rule in his document for a deck, because a slide that buries its point has failed before anyone reads it.
- **"Open it up, do not dumb it down."** The best line in the whole document and the necessary counterweight to every other rule here. A 40-word cap and a 20-word sentence rule both push towards losing nuance; this says keep the substance and strip only what makes it hard to read.
- **"Never drop a caveat, a condition or a number to make a line shorter."** The same insurance, stated as a prohibition. Without these two lines the clarity rules are dangerous.
- Active voice, "you" and "we", the everyday-words list, the cliche list, and no Latin abbreviations. All concrete and checkable, which is what the section needed.

**Left out** as prose-specific and irrelevant to a deck: bullet punctuation, link text, date and time formats, numbered-list conventions, ampersands, the output change-table, FAQs.

**One conflict worth naming.** His cliche list bans "robust", and two days ago I removed "robust" from the banned list precisely because the sustainability plan uses it four times, all defensibly. Both are right, because they govern different things: the rule is about what the model writes, not what it quotes from a source. Nothing to reconcile, but it will look like a contradiction to anyone reading the two skills side by side.

**WHEN TO USE IT restored**, having been cut yesterday as over-complication. It is back because his own document has one and because it carries something the file otherwise lost: the instruction to attach this to a long research run so the report comes back already in the style.

6,999 characters against the 7,000 guideline. One character. The next edit needs the trim planned rather than discovered.

## 2026-09-05 (addendum 37): renamed to Cardiff_Brand_SKILL.md, and the paste order flipped

Matt sent a new screenshot of the Slide Deck dialog and asked for the skill to be called `Cardiff_Brand_SKILL.md`.

Renamed across `tools/make_artifacts.py`, `tools/make_example_pdf.py`, `src/data/missions.js`, `CLAUDE.md` and `FACILITATOR_GUIDE.md`, with the old file deleted. The Python constant keeps its old name deliberately: only the artefact Matt hands out was renamed, and churning the constant too would have made the diff harder to read for no gain.

**The screenshot carried a change he did not mention, and it reversed an instruction.** His new capture shows the description box holding the prompt on the first line and `[PASTE CARDIFF BRAND SKILL HERE]` beneath it. Every instruction on the page said the opposite: the old note read "[house style first, then this line underneath it]" and the body said "paste the style and the prompt into the description box", in that order. Anyone following the page would have pasted them the wrong way round.

Fixed in four places, since the order was baked into more of the step than expected: the step body, the `promptNote`, the image `alt`, and the caption. The caption now reads "Prompt first, skill underneath, both in the description box."

Worth noting for its own sake: the on-screen order now matches the paste order exactly. The prompt box sits above the skill card because Matt asked for that a few edits ago, and the description box wants them in that same sequence. That was luck rather than design, but it is worth not breaking.

`?doctor` reports twelve files, all 200, with the renamed skill picked up automatically because it derives from `MISSIONS`.

**Left alone and worth a decision:** the workflow chip still says "Paste the house style" and the step title "Paste the house style into Slide Deck", while the file is now `Cardiff_Brand_SKILL.md` and its card reads "SKILL 2: MAKE IT CARDIFF". Three names for one thing. Not changed because that copy has been hand-tuned repeatedly and the rename was the only instruction given.

## 2026-09-05 (addendum 38): Notebook's description box truncates at exactly 5,000 characters

Matt pasted the skill into the Slide Deck description box and it cut off mid-word at "No metaphors or cliches: drive, unlock, deep dive, robust, ke". He trimmed it and it truncated at the same place.

Measured against the shipped file, his paste survives to **exactly 5,001 characters** counting the one-line prompt above it. That is a hard 5,000-character field limit, and the number landing dead on a round figure is what makes it a finding rather than a guess.

**This overturns the constraint the file has been written against all week.** The 6,000 then 7,000 character guideline came from Copilot Agent Builder's 8,000-character instructions field. Notebook's box is far tighter, and Notebook is what Exercise 05 actually uses. The generator's warning threshold is now 4,900 and says what it is protecting.

**It also truncates silently.** No warning, no error, no visual cue: it stops mid-word and generates the deck from whatever fragment survived. A deck built from two thirds of a rule set looks like a deck that ignored its rules, which is a diagnosis nobody would reach unaided. That is now in the facilitator guide.

**Budget:** 5,000 for the field, minus 84 for the prompt line, leaves 4,916. The file is **4,883**, about 30 characters spare. Note the COPY button sends the whole file, front matter included, so the front matter counts against the budget even though Matt's manual paste omitted it.

**1,521 characters cut, all of it duplication or explanation.** Nothing that was stated only once was removed. The largest savings:

- **RULES fell from seven rules to three.** Four of its lines were said earlier in substance: "one message per slide" is in the philosophy, "whitespace is deliberate" is the philosophy's negative-space line, red's placement is already itemised in COLOURS, and gradients are already banned there. What survived is the three things stated nowhere else: left-align, the Welsh line, the photography line.
- **LAYOUT PATTERNS compressed to one line each.** All six patterns survive; the prose around them went.
- **DESIGN PHILOSOPHY lost about 300 characters of internal repetition only.** Three consecutive sentences made the same point about asymmetry and negative space, so they became one. The clause after "blade not a blanket" restated the metaphor it followed. Every distinctive line survives, including all the ones worth protecting.
- **The PowerPoint size note went.** It only mattered for a deck built in PowerPoint, and the exercise is a Notebook exercise, so it was paying rent in the one place where space was scarcest. Worth restoring if anyone ever builds from this in PowerPoint.
- **Latin abbreviations, the active-voice example, and the "authorized/specialized" catch went.** The last is the one I would restore first if headroom appears: it caught a real bug in Matt's own deck.

**Two false alarms worth recording.** My verification grep reported "three words, do not make it six" as LOST when it was present but wrapped across a line, so the grep pattern spanned a newline. Line-wrapped files need `tr -d '\\n'` before phrase greps, or the check lies. And one of my own edits left a 96-character line in the middle of a hard-wrapped file; an `awk 'length > 82'` pass now catches that, though it correctly flags the front-matter description, which must stay on one line.

## 2026-09-05 (addendum 39): the stock-image and illustration bans removed

Matt: "remove that no illustractions and maybe the no stock images."

Removed both, and the "maybe" resolves cleanly once you ask whether the tool can obey. **Notebook has no access to Cardiff's photo library**, so "no stock images" was a rule it could only ever fail: whatever it puts on a slide is stock by definition. That is the same class of error as the old Welsh rule, a requirement the tool cannot satisfy, and the cost is that the model either ignores it or apologises for it.

The illustration ban had a second problem: the site's own hero is an illustration, and Exercise 03 builds an 8-bit game. Banning illustrations outright contradicted the workshop around it.

What survives is what a generator can actually control: no shadows, icons or emoji. "Photography is Cardiff architecture at editorial scale" stays as direction rather than prohibition.

4,854 characters, 62 spare against the box. Not quite enough to restore the "authorized/specialized" catch, which needs 58 and would leave four.

## 2026-09-05 (addendum 40): naming the visual, and photography demoted to a preference

Matt: "make this Photography is Cardiff architecture at editorial scale a preference not a rule, plus we need to add in something to make slides useful for visual learners, this is just text on a slide."

**Photography is now "Prefer Cardiff architecture photography at editorial scale."** Same steer, no longer a rule the tool cannot verify. It sits alongside the stock-image ban removed in addendum 39 for the same reason: Notebook cannot confirm a photograph is of Cardiff, so stating it as law only invites either silent failure or a false claim of compliance. As direction it demonstrably works, since every photograph in the Information Classification deck came back as architecture.

**The real gap he identified is bigger than photography.** Both real runs produced decks that are text on slides. Well-set text, properly ranked, but text. The skill described how a slide should *look* and never once told the tool what kind of object to draw. So:

> **Name the visual, or you get bullets.** Ask for a matrix, a funnel, a three-column card grid, a horizontal timeline. Naming the form makes the tool reach for a graphic template; leaving it unnamed gets a paragraph with dots in front. A hard word cap does the same work.

Matt's two observations behind it are worth keeping as reasoning, not just as a rule. Naming a form ("matrix", "funnel", "timeline") makes these tools select a graphic template rather than a text container. And a tight word budget forces the same outcome from the other direction: the fewer words allowed, the more the tool has to draw. That reframes the 40-word cap, which until now read as a limit on density and is really a lever on layout.

**One tension it creates, worth watching.** BULLETS says "no numbered lists", and a numbered ladder is exactly the visual the Demand First material wants. If a run comes back refusing to number the four steps, that rule is the cause.

**Paid for by 264 characters of trimming**, mostly things the earlier cuts had already orphaned: "the ratio matters more than the number" in SIZES lost its point when the PowerPoint note went, and "a non-specialist and an expert should both get it on first read" was the third sentence making the same case in one paragraph. 4,878 characters, 38 spare.

## 2026-09-05 (addendum 41): front matter removed from the brand skill

Matt asked for the YAML block to go. It was costing 152 characters of a 5,000-character budget and nothing was reading it: the file is pasted into Notebook's description box or attached to a chat, and neither parses front matter. It was formal correctness with no reader.

This does make the brand skill the odd one out. `Training_Module_Builder.md` and `Fact_Check_Cardiff.md` both keep their `name` and `description`, and the anatomy in `docs/research/2026-09-04-skill-authoring-patterns.md` describes front matter as part of the pattern. The difference is defensible: those two are attached as files, where a description helps a tool decide whether to use them, and neither is squeezed against a hard field limit. This one is pasted into a box that truncates.

4,730 characters, 186 spare, which is the most headroom the file has had since the limit was discovered.

## 2026-09-05 (addendum 42): Exercise 05 down to one source, and the two blocks the skin missed

Matt: Exercise 05 needs only one source, the training session from 04; say "brand
skill" rather than "house style"; the skill card "looks cluttered and cheap"; and the
pages should carry more of the vibe of the Part 1 workshop page. Chosen scope, on
asking: rename everything to Brand, and restyle everything **inside a step**, leaving
the page header, tool cards and gallery alone.

**One source, not two.** `Sustainable-Futures-en.pdf` came off Exercise 05. It was
redundant: the training session was generated from the plan in Exercise 04, so the
content is already in the source they paste. It also removes an 11 MB upload from a
room on conference wifi. The exercise is now: paste your training session in, paste the
brand skill into the Slide Deck description box, generate, export. Notebook's own
"Sources: 1 source" in the step screenshot now matches the instruction, which it did
not before. The trade-off, taken deliberately: nobody can pull a figure straight out of
the plan during 05 any more.

**Three names became one.** `title` The House Style -> The Brand, workflow chip ->
"Paste the brand skill", step 2 title, the verdict, the `A` map key
`houseStyleSkill` -> `brandSkill`, and the comments in `MissionDetail.jsx` and
`DoctorPanel.jsx`. Only the artifact card label "SKILL 2: MAKE IT CARDIFF" survives as
a different form of words, and that one is deliberate: it says what the skill does
rather than what it is called. Addendum 41 flagged this; it is now closed.

Also cut `A.brandSkill.note` to "Builds it in Cardiff's voice and look." The rest of it
("COPY it into the Slide Deck description box, or download it to attach in Copilot or
Gemini") repeated the step body above it and the two buttons below it. The skill card
was saying the same instruction four times: label, filename, note, buttons.

**Why the card looked cheap, which turned out to be mechanical rather than a matter of
taste.** `styles.css` is three archaeological layers. The GOOGLE-PAGE SKIN pass (line
1141 on) converted `.mission-step`, `.quick-step`, the tool cards and the gallery to
1px hairlines with a soft shadow. It never revisited `.mission-artifact` or
`.prompt-box`: it only patched a `border-radius` onto them, and rounding a tabloid
device does not convert it. So inside a `.mission-step` that is a 1px soft-bordered
white card, we were rendering a **3px pure-black box, three times heavier than its own
parent**, and it was the only panel on the page excluded from the shadow rule at 1194.

Five specific defects behind the verdict, four of them found by a subagent review
against the Part 1 page:

- `min-width: 11rem` on `.btn-artifact` was 176px per button. Three buttons plus gaps
  was about 544px of solid pill in an 860px column, over half the width given to one
  file. `flex-wrap: nowrap` then forbade them from wrapping, so they crushed the
  filename instead. Both deleted; DOWNLOAD is now 111px and VIEW 149px.
- Two primary-button languages on one screen: `.btn-start` was already the blue pill
  from the reference page, `.btn-artifact` was a black Courier-caps pill carrying a
  redundant 2px black border on a black fill. DOWNLOAD is now the same blue pill.
- Hover was incoherent: line 827 sent hover light, 1221 overrode it to solid blue, and
  `.btn-artifact--ghost` inherited the base rule, so the two **secondary** buttons went
  solid blue and shouted louder than the primary. Ghosts are now transparent with a
  hairline, hovering to accent text and accent border.
- **A real bug, not just clutter.** `isText` is `/\.(md|txt)$/`, so
  `HESA_Estates_Management.xlsx` took the plain-anchor branch of VIEW IN BROWSER. No
  browser renders an xlsx: it downloads. That card carried two 176px buttons doing the
  identical thing under different names. VIEW is now gated on `canView`
  (`.md`, `.txt`, `.pdf`) and the HESA card shows DOWNLOAD only.
- Courier New bold caps on every label, where the Part 1 page never sets a UI label in
  monospace. It uses Inter Tight caps in grey and keeps mono for prompt text alone.

**What I got wrong and corrected mid-task.** I claimed `.prompt-box__copy` was light
grey on a light grey bar. It is not: the skin already overrides it to accent blue at
line 1201, after the `var(--page)` declaration at 963, so blue wins. No fix was needed
and none was made. Reading a declaration without checking what overrides it is the same
mistake as trusting a screenshot over the DOM.

**What changed, all appended as a closing "STEP BLOCKS" section rather than edited into
the old blocks**, per the rule in `CLAUDE.md`. Deleted in place only where deleting was
clearer than overriding: `min-width: 11rem`, `flex-wrap: nowrap`, and
`word-break: break-all` (which shattered `Cardiff_Brand_SKILL.md` mid-token; now
`overflow-wrap: anywhere`).

- `.mission-artifact` and `.prompt-box`: 1px `--border-soft`, `--shadow-card`. They now
  read as siblings inside the step, which is what they are.
- `.mission-artifact__label`: Inter Tight caps in `--grey`, not Courier in black. Grey
  rather than the blue of `.eyebrow`, so it does not compete with the accent step
  number sitting a few pixels to its left.
- `.mission-artifact__note`: roman grey, not italic black. A 130-character italic
  paragraph inside a bordered box was most of the "cluttered".
- `.prompt-box__label`, `.prompt-box__note`, `.mission-step__caption` and
  `.prompt-box__copy`: off Courier onto Inter Tight. `.prompt-box__text` **keeps**
  Courier, because that really is a prompt and fixed pitch is what makes a long one
  scannable. COPY PROMPT had been the last button in a different typeface from the
  DOWNLOAD sitting beside it. Its size and padding are Matt's and were left alone.

**Deliberately not done.** `--radius-card` is 14px where the Part 1 page uses 22px for
cards and 14px only for medium panels, so every panel on the site sits one step tighter
than the target. Changing it moves the gallery and the page header, which are outside
the agreed scope. Same for `.mission-detail__section` (the INSTRUCTIONS heading), which
still carries `border-bottom: 4px solid var(--black)` from the tabloid layer and is now
the heaviest thing on an exercise page.

**Verified.** MH block sha256 `f037880d...` identical before and after. `npm run build`
green. `?doctor` reports all 12 files 200, with `Sustainable-Futures-en.pdf` now
attributed to 01/03/04/06 and no longer 05. Computed styles read out of the live DOM
rather than judged from a screenshot: card border `1px solid rgb(229,229,234)` matching
`.mission-step` exactly, both carrying `--shadow-card`; label Inter Tight
`rgb(110,110,115)`; DOWNLOAD `rgb(0,113,227)`; ghosts `rgba(0,0,0,0)` with a hairline.
The HESA card on `#/m6` renders one button.

Note for anyone running the dev server: `npm run dev` currently dies with
`ENOSPC: System limit for number of file watchers reached`. `npm run preview` serves
`dist/` with no watchers and was used instead. The real fix needs sudo:
`sysctl fs.inotify.max_user_watches=524288`.

## 2026-09-05 (addendum 43): tagline stripped, and the pack is a briefing

Three small ones after the look-and-feel sign-off.

**Tagline bar cut to the title.** `AI IN THE WORKPLACE PART 2` alone; the em dash and
"Hands-on training with Copilot, Gemini and Gemini Notebook" are gone. Removed the two
CSS rules my change orphaned (`.tagline-bar__sep`, `.tagline-bar__text`, in both the
base block and the legibility pass).

**The gallery heading is now BUILD THE STAFF BRIEFING PACK.** The decision, after
brainstorming whether "training" should become "briefing" throughout: **keep training
for the artefact, make briefing the frame.** The reason to keep it is that the skill
genuinely emits Walkthrough, Practice and Check your understanding, with a practice
activity and two scenario questions. That is a training session, and calling it a
briefing would have written a cheque the output does not cash. But the *pack* is a
briefing, which the project already believed: the header comment in `missions.js` says
"team briefing pack", the completion line says "The briefing pack exists", the hero
image is `staff_briefing.webp`, and the whiteboard inside that image reads STAFF
BRIEFING. The heading was the only thing still calling the whole day training.

Exercise 04's `pageTitle` deliberately stays "Build the Staff Training With a Skill".
I changed it first, then reverted: Matt's "main title" meant the gallery `<h2>`, not the
exercise page. The two now say different things on purpose, the pack and the piece.

**Memo tweak.** "Sustainable Futures landed on my desk" -> "The Sustainable Futures
policy landed on my desk in week one".

Snapshots of the settled pages (framer-motion fade disabled via injected CSS so the
capture is not a mid-animation frame) at repo root, untracked: `snapshot-gallery.jpg`,
`snapshot-m5-top.jpg`, `snapshot-m5-steps.jpg`.

## 2026-09-05 (addendum 44): a cover thumbnail on the policy download card

Matt: put the Sustainable Futures cover on the download card, small, so it is clearer
what you are downloading.

Rendered from **page 1 of the shipped PDF** with `pdftoppm -r 60`, not from the
screenshot he sent, so the card shows the real document at a clean source resolution.
`public/sustainable_futures_cover.webp`, 128x182, 9.6 KB, displayed at 46x65 for about
2.8x pixel density. Small on purpose: it identifies the file, it is not an illustration.

New optional artifact field **`thumb`**, a site-root relative image path, so any card
can carry one later. `ArtifactCard` renders it as the first flex child with `alt=""`,
because it is decorative: the label and filename beside it already say what the file
is. `DoctorPanel` now HEAD-checks `thumb` on both mission artifacts and step artifacts,
so a new asset class cannot slip past the preflight. It reports 13 files where it
reported 12, and the cover shows against 01 / 03 / 04 / 06, which is every exercise
that hands out the plan.

**Tooling note for next time:** `convert` on this machine is a **metapub** CLI, not
ImageMagick, and fails with a PMID usage message. ImageMagick is there as
`convert-im6.q16` / `identify-im6.q16`. `cwebp -resize <w> 0` does the scaling in one
step and avoids the question entirely.

## 2026-09-05 (addendum 45): the strapline comes back, on the picker only

Matt: the stripped tagline was meant for the exercise pages only, not the picker.

`TaglineBar` takes a `compact` prop. `App.jsx` passes `Boolean(mission)`, which is
truthy only on an exercise page, so the picker and the splash keep
"AI IN THE WORKPLACE PART 2 — Hands-on training with Copilot, Gemini and Gemini
Notebook" and an exercise page shows the title alone. The reasoning is the same one
that made stripping it right in the first place: the strapline is orientation for
someone arriving, and it is redundant chrome above work someone is already doing.

Restored the `.tagline-bar__sep` and `.tagline-bar__text` rules I had deleted as
orphans in addendum 43, in both the base block and the legibility pass, and tidied the
double blank line my earlier deletion left behind.

Verified all three states in the DOM rather than by eye: splash and picker carry the
full line, `#/m4` carries the title alone.

## 2026-09-05 (addendum 46): the cover leaked onto the picker cards, via dormant code

Matt: the image is still on the exercise picker cards.

**My fault, and worth recording because the mechanism is not obvious.** `MissionCard`
carried a branch nobody had run:

```jsx
{mission.artifacts?.[0]?.thumb ? (
  <div className="evidence-card__image">
    <img src={mission.artifacts[0].thumb} alt="" draggable={false} />
```

Left over from the escaperoom evidence gallery, and dead only because no artifact had
ever carried a `thumb`. Adding one to `susPlan` in addendum 44 switched it on and
swapped the big numeral, stage and summary for a cover picture on **four of the six
cards**, 01, 03, 04 and 06, every exercise whose first artifact is the plan.

The branch is now deleted, so a picker card is always the panel. Two things it was
doing wrong anyway, had anyone ever triggered it before:

- `src={mission.artifacts[0].thumb}` has no `BASE` prefix, so it would have 404'd on
  GitHub Pages under `/part2/` and worked only on a dev server at the root.
- It replaced the summary text as well as the numeral, so a card lost its one line of
  description.

Also removed `.evidence-card__image` and `.evidence-card__image img`, orphaned by the
deletion; the branch was their only user.

**The lesson to carry:** adding a new optional data field can wake dead code that reads
it. Before adding one, grep for the field name across `src/`, not just for the place you
intend to render it. `grep -rn "thumb" src/` would have shown this in one line.

Verified in the DOM: `.mission-card img` is 0, `.mission-card__panel` is 6, and the only
image on the picker is the hero.

## 2026-09-05 (addendum 47): a file-type icon on the three skill cards

Matt: same treatment for the `.md` skills. He sent an orange folder first, then corrected
it to a blue document icon with a folded corner, a header band, "SKILL.MD" and ruled
bullet lines.

**Drawn as SVG, not converted from the image.** The corrected icon was pasted from the
clipboard, so there was no file on disk to convert, and `find ~ -newermt "-45 minutes"`
turned up nothing. Redrawing it was the better answer anyway: the source was 1408px wide
with large white margins, and at the 46-52px the card renders, a downscale would have
turned the bullet lines to mush. `public/skill_md_icon.svg` is 1.5 KB and stays sharp at
any size. If Matt wants his exact raster, he only has to save it and it can be swapped
in; the `thumb` field takes any path.

`SKILL_ICON` is a single constant applied to all three skills, because that is what the
icon is: a generic "this is a skill you attach" marker, not a picture of a particular
document. The plan keeps its real cover, so the card set now reads as two classes,
document and skill.

**Two shapes meant the fixed width had to go.** `width: 46px` was fine for a portrait
cover but left the first, landscape icon looking lost. Replaced with
`max-width: 52px; max-height: 62px; width: auto; height: auto`, so each image picks
whichever constraint binds: the cover comes out 44x62, the icon 52x43 when it was
landscape and about 49x62 now it is a portrait document. No per-artifact class needed.

**Double border.** The drawn icon carries its own page outline, so the card's
`1px solid var(--border-soft)` framed it twice. Scoped that border off with
`.mission-artifact__thumb[src$=".svg"]`; photographic covers still need it to sit on
white.

`?doctor` reports 14 files, all 200, the icon against 04 (mission artifact) and 05 (step
artifact). `factCheckSkill` carries the icon too but does not appear in the preflight,
because it is still linked from no exercise. That remains open.

## 2026-09-05 (addendum 48): the skill line reworded, and bolded in the box

Matt: change "Follow the attached skill." to "skill file" or "skill.md file", think about
it as prompt engineering, and bold it in the card.

**One occurrence, not several.** Only Exercise 04 carries the line. Exercise 05 pastes the
skill into the Slide Deck description box rather than attaching it, so its prompt never
refers to one, and no `MH_*` constant contains the phrase. Checked before editing.

**Settled on "Follow the attached skill file as your instructions."**

- Kept **skill**, because that is the word the whole workshop teaches. Dropping it for
  something more literal would undercut the lesson.
- Added **file**, which anchors the noun to an attachment. "Skill" alone is jargon a
  model has no reason to map onto one of two attachments.
- Added **as your instructions**, which is the part actually doing work. With a PDF and
  an `.md` attached, the failure mode is the model treating the `.md` as a second
  document to summarise rather than as the method. Naming the role removes the ambiguity
  that "follow" alone leaves open.
- **Rejected "skill.md"**, which Matt offered. No attached file has that name: it is
  `Training_Module_Builder.md`. Pointing a model at a filename that is not in the
  attachment list invites it to hedge or report that it cannot find the file, and buys
  nothing that "file" does not already buy.

**The bolding, and why it does not touch the clipboard.** New optional step field
`promptEmphasis`, a substring of `prompt`. `PromptBox` splits the string on it and wraps
that slice in `<strong className="prompt-box__em">`. `handleCopy` still writes the plain
`prompt` string, so no markup can reach the clipboard, and the select-text fallback
selects exactly the same characters. If the substring is ever mistyped, `indexOf` returns
-1 and the box renders the plain prompt: a data typo degrades to no emphasis rather than
to lost text.

Styling is bold **plus a light accent wash**, because Courier bold inside a wall of
Courier is nearly invisible. `box-shadow: 0 0 0 3px` of the same tint pads the highlight
out beyond the glyphs without changing the line box, so the `<pre>` spacing is untouched.

`emphasis` is passed at **both** `PromptBox` call sites in `MissionDetail.jsx`, the step
renderer and the collapsed choice renderer, so a stretch path gets it too.

**Verified by intercepting `navigator.clipboard.writeText`:** the copied string is the
plain prompt ending "Follow the attached skill file as your instructions.", contains no
tags or entities, and matches `textContent` of the `<pre>` exactly. Note for next time:
the interception also revealed that `writeText` rejects when the tab is not focused, so
the select-text fallback fires and leaves the whole prompt highlighted. That grey is the
browser's selection, not a style bug.

## 2026-09-05 (addendum 49): an attach strip on 04's step 2, and "or" not "+"

**The attach strip.** Matt: put a paperclip and the two file images in Exercise 04's
attach step. New optional step field `attach`, an array of artifacts, rendered by a new
`AttachStrip` component as a paperclip, an ATTACH BOTH label, then each file as its
thumbnail plus filename joined by a `+`.

The user-centric argument for it: at step 2 the question in the room is "which two?",
and a picture answers that faster than a sentence. So the strip carries the *what* and
the body was rewritten to carry the *how*, naming the control the way the house standard
requires: "use the paperclip under the box where you type". Before, the body was doing
both jobs and doing neither well.

Deliberately quieter than an artifact card, and nothing in it is clickable: the cards
above are for downloading, this is a reminder of what to pick up. The paperclip is an
inline stroked SVG rather than the 📎 emoji, so it takes `currentColor` and does not
render as a colour emoji in the middle of a monochrome UI. Thumbnails reuse the same
max-box trick as the artifact cards (`max-width: 26px; max-height: 34px`), so the drawn
icon and the photographic cover come out the same visual weight.

Wired into both `PromptBox`-adjacent render sites, the step renderer and the collapsed
choice renderer, so a stretch path can use the field too.

**"Gemini or Copilot", not "+".** Matt spotted that the picker card for 04 read
"Gemini + Copilot", which says you need both. You need either. Checked the other two
multi-tool exercises before changing anything: 01 runs Deep Research **then** Copilot,
and 06 analyses in Gemini **then** builds in Canvas, so both genuinely use two tools in
sequence and keep the `+`. Only 04 is either/or.

So this is a per-exercise fact, not a global one. New optional mission field `toolsJoin`,
defaulting to `+`; `MissionCard` joins on it. Verified across all six cards: 01
"Gemini Deep Research + Copilot", 04 "Gemini or Copilot", 06 "Gemini + Gemini Canvas",
the three single-tool cards unchanged.

Checked the strip wraps rather than overflowing: at a 420px body it is 121px tall with
`scrollWidth === clientWidth` and no horizontal page scroll. `?doctor` still 14 files,
all 200.

## 2026-09-05 (addendum 50): the attach control is a + in Gemini, a paperclip in Copilot

Matt: in Gemini the attach control is a **+**, not a paperclip.

Fixed 04's step 2, and **grepping for the word turned up a second, unrelated error**:

- **04 step 2** used one control name for two tools. Now: "In Gemini the button is a +
  under the box where you type; in Copilot it is a paperclip."
- **06 step 2** said "attach it with the paperclip" on a **Gemini-only** step, so it was
  naming Copilot's control in a Gemini exercise. Nobody had reported it. Now the +.
- **02 step 1** keeps "paperclip" and is correct: that step is Copilot only.

The strip's icon stays a paperclip. It is the universal glyph for "attachment" and the
strip's label is tool-neutral ATTACH BOTH; the body is where exact control names belong,
per the house standard. Easy to swap for a + if the room finds it confusing.

**The transferable point:** a control name is a per-tool fact, and this site names
controls deliberately. Whenever one changes, grep the whole data file for the old name
rather than fixing the step in front of you, because the same wrong name will have been
copied into a step for a different tool.

## 2026-09-05 (addendum 51): 04 step 2 body, Matt's wording

Matt supplied the exact text: "In Gemini the button is a + under the box where you type;
in Copilot it is a paperclip. Attach both, then send with the prompt above."

Two changes from what was there. "Download both from the cards above" is gone, and
"then send" became "then send **with the prompt above**", which ties the step back to
step 1 rather than leaving "send" hanging.

**Worth watching in the room:** no step now says the word *download*. It relies on the
DOWNLOAD buttons on the two cards a few centimetres up, and on the attach strip naming
the same two files. That is probably fine, and it is tighter, but if anyone stalls at
this step in a live session, the missing download instruction is the first thing to
suspect. 27 words, inside the 45-word cap.

## 2026-09-05 (addendum 52): a Blue Peter badge for the "one we made earlier" files

Matt supplied a document icon carrying the Blue Peter shield, for optional files, naming
`Example_Training_Session.pdf` as the example. The joke lands because that file's note
already reads "Here's one we made earlier", which is where the whole idea started
several addenda ago.

**Converted properly this time**, because the file was on disk rather than on the
clipboard: `convert-im6.q16 -fuzz 8% -trim +repage` cropped 1407x768 down to the 444x659
document, then `cwebp -q 86 -resize 128 0`. 128x190, 3.5 KB. The crop matters: two
thirds of the supplied image was white margin, which at 46px would have rendered a
postage stamp inside a lot of nothing. It shares the folded-corner shape with the drawn
`skill_md_icon.svg`, so the two read as a set rather than as two unrelated pictures.

**Applied to two artifacts, not one.** `EXAMPLE_ICON` now marks:

- `exampleTraining`, the one Matt named. "OPTIONAL: BACKUP TRAINING SESSION".
- `deepResearch`, which is the same class of thing: "The brief already run, so you can
  compare, or so you can do the Copilot half if your own run is still going." A finished
  run supplied so nobody is stranded is exactly one we made earlier.

Matt said "for optional files, e.g.", which reads as a class rather than a single file,
and `deepResearch` is the only other member. **Flagged for him to reverse** if he
intended only the one he named.

The card set now has three visual classes: the real document (its own cover), the skill
you attach (drawn `.md` icon), and the safety net (Blue Peter). `?doctor` reports 15
files, all 200, the badge against 01 and 05.

## 2026-09-05 (addendum 53): two regressions on the artifact card, both mine

**1. Buttons moved, and the cards stopped matching each other.** Matt: "it looks
different than exercise 3, icons and buttons moved". Correct, and I caused it. Addendum
44 deleted `flex-wrap: nowrap` on the reasoning that the buttons were now small enough to
wrap safely. What that actually produced: a card with a **long** note pushed its buttons
onto a second row, left-aligned under the thumbnail, while a card with a **short** note
kept them on the right. So the same component looked like two different components down
one page, and Exercise 05's backup card looked nothing like Exercise 03's.

`nowrap` is back, with a comment recording the experiment so nobody repeats it. The info
column still has `flex: 1 1 auto; min-width: 0`, so a long note wraps to two lines inside
its own column rather than pushing anything. The 650px media query still stacks the card
for phones. Verified: every card on 01 and 05 now reports buttons on the same row as the
info block and to its right.

**2. A stray box around the Blue Peter icon.** Two causes, both fixed.

- **The crop.** `-fuzz 8% -trim` left **85 rows of pure white below the document**, which
  `-trim` had not removed. Measured it properly with PIL rather than guessing: content
  ran rows 0-573 of a 659-tall image. A first attempt at `-shave 6x6` was worse, clipping
  the document's own rounded corners. Final crop is `444x574+0+0`, then resize to 128
  wide: 128x166, 3.8 KB, and the ratio now sits between the skill icon and the plan cover.
- **The CSS.** The card draws `1px solid var(--border-soft)` around a thumbnail. That is
  right for a photographic cover, which would otherwise float on white, and wrong for a
  drawn icon that already has its own page outline: it frames the artwork in a second,
  offset rectangle. The rule had been scoped off for `.svg` only, so the SVG skill icon
  escaped it and the Blue Peter `.webp` did not.

  Now matched on a **file-naming convention** rather than an extension:
  `[src*="_icon."]` gets no border, `*_cover.*` keeps one. Extension-matching was the
  wrong axis, since whether artwork needs a frame has nothing to do with its format.
  Keep the convention: drawn icons are `*_icon.*`, real document covers are `*_cover.*`.

**The lesson from both:** a component that renders variable-length content needs checking
against its *longest* case and its *shortest* in the same pass. I verified the new
thumbnail on Exercise 04, where both notes are short, and never looked at Exercise 05,
where the note is 100 characters and pushed the layout apart.

## 2026-09-05 (addendum 54): Exercise 05 moves to Matt's own slide skill, four steps

Matt supplied `TheMattsBrandSkill.md` verbatim, emojis included, and asked for Exercise
05 to be a simple four steps using it, same deck-description prompt as before.

**The skill, stored verbatim.** Added to `tools/make_artifacts.py` so there is still one
source of truth and one length check, but with no processing: his wording, capitalisation
and both emojis are untouched. The two emojis are written in the generator as
`\N{UNAMUSED FACE}` and `\N{SMILING FACE WITH SMILING EYES}` escapes, so the Python source
stays ASCII and no editor, terminal or copy-paste can silently mangle them; the written
file carries the real characters. Verified by reading the served file back over HTTP and
listing every codepoint above U+2100: exactly the two emojis, nothing else.

**1,751 characters.** With the 84-character prompt line that is 1,837 against Notebook's
5,000. **For the first time in days that box is not the binding constraint**, with over
3,000 characters of headroom instead of 186. If this skill is the direction, the whole
character-budget discipline that shaped `Cardiff_Brand_SKILL.md` stops mattering here.

**Four steps**, splitting the old dense step 2 into "open the dialog" and "fill the box":

1. Add your training session to a notebook (3 min)
2. In the Studio pane, click Slide Deck (2) - carries the Detailed Deck / Default note
3. Paste the prompt, then the skill underneath (4) - carries the screenshot, the prompt
   and the skill card
4. Generate the deck, then export (3)

Still 12 minutes. The old step 2 was doing three jobs in one sentence.

**Copy that had to change, because the new skill contradicts it.** The skill says nothing
about Cardiff red, the logo or Welsh: it is about clarity, layout and wit. So
`pageTitle` "Turn the Training Into Slides That Look Like Cardiff" would have been simply
untrue, and became "Turn the Training Into a Deck People Will Watch"; the brief follows.
The **verdict is unchanged in substance** and still the right lesson: where you put an
instruction changes what it does.

**Two things left for Matt to decide.**

- **The screenshot is now wrong in one detail.** His capture of the Customize Slide Deck
  dialog shows the placeholder line `[PASTE CARDIFF BRAND SKILL HERE]`, and the file is
  now `TheMattsBrandSkill.md`. The `alt` still describes the image accurately, and the
  caption now says so out loud, but a re-capture would be cleaner.
- **`Cardiff_Brand_SKILL.md` is now linked from no exercise.** Still generated, still
  downloadable, `A.brandSkill` still defined and commented as unlinked. Same status as
  `Fact_Check_Cardiff.md`, which means the repo now carries two orphaned skills. Not
  deleted, because days of work went into it and nobody asked.

`MH_*` block sha256 unchanged. `?doctor` 15 files, all 200.

**Correction to the MH check in addendum 54.** The `sed -n '111,291p' | sha256sum` guard
reported a mismatch, and for a moment it looked as though a verbatim constant had been
touched. It had not. The **line range** had drifted: comment lines added to the step-field
documentation at the top of the file over addenda 47-49 pushed the MH block from 111-289
down to 118-296, so a fixed range was hashing different lines.

Re-checked by anchoring on the constant names instead of line numbers:

```bash
start=$(grep -n "^const MH_DEEP_RESEARCH" src/data/missions.js | cut -d: -f1)
end=$(grep -n "^const MH_CANVAS_GAME" src/data/missions.js | cut -d: -f1)
sed -n "${start},${end}p" src/data/missions.js | sha256sum
```

`e4f8082373927ce38d7d8b59c1352c51f4f77aab05e0c9e5636b1818fa26fabf`, identical to the same
extraction from commit `d95d404`. **Use the anchored form from now on.** A hardcoded line
range is exactly the wrong check for the one thing in this repo that must never change,
because it fails loudly when nothing is wrong and would pass quietly if someone edited a
constant while adding lines above it.

## 2026-09-05 (addendum 55): I misread addendum 54. The Matts skill is a fourth step, not a replacement

Matt: "no! revert, it was not a replacement, what we had before was perfect. It was for
after they had saved the first deck from ex5, new rerun with the Matts."

**What I got wrong.** He wrote "exercise 5 now has a simple 4 step, same prompt but use
TheMattsBrandSkill.md". I read "use X" as *instead of* the Cardiff skill and rebuilt the
exercise around it, restructuring three steps into four in the process. He meant the
opposite: keep all three steps exactly as they were and **add a fourth**, so the same
notebook and the same one-line prompt run twice with two different skill files. "Simple 4
step" was 3 + 1, not a redesign. The clue I had and did not use: he said "same prompt",
which only means anything if there is a first run to be the same as.

**Reverted** with `git checkout 25989fb -- src/data/missions.js`, so the title, brief,
summary, verdict wording, the three original steps, the Cardiff skill card, the prompt
note and the screenshot caption are all back to the exact bytes he approved. Then the
addition on top:

- `A.mattsBrandSkill`, "SKILL 3: NOW MAKE IT WATCHABLE". `A.brandSkill` is **not**
  orphaned after all; both are live in Exercise 05.
- Step 4, "Now run it again with a different skill": open Slide Deck again, same source,
  same prompt, this skill underneath instead.
- A fourth workflow chip, "Run it again".
- Step 3 gains "Save it before the next step", and **loses "You get one generation each"**,
  which step 4 now contradicts.
- The verdict changes, because the exercise now proves something better than it did.
  Was: where you put an instruction changes what it does. Now: "Two decks, one source,
  one prompt. Everything that differs between them came from the skill file, which is the
  clearest evidence you will get today that a skill is worth writing down."

**The constraint this breaks, deliberately.** `CLAUDE.md` said: "the design budgets one
[Studio generation] of each per participant, so do not add a step that regenerates."
Step 4 regenerates on purpose. I have rewritten that rule rather than quietly violating
it, recording it as **the one sanctioned exception** and noting that if the quota bites in
a live session, the second run is what gets dropped. Left as it was, the next session
would have read the rule and "fixed" the new step.

**Timing: 05 goes 12 to 15 minutes**, the day 77 to 80. `FACILITATOR_GUIDE.md` updated,
including the two-generation cost, the instruction to make people save the first deck
before step 4, and the fallback of showing a pre-made second deck on the projector.

MH block sha256 `e4f80823...` unchanged, checked with the anchored form from addendum 54.
`?doctor` 16 files, all 200, both skills against 05.

## 2026-09-05 (addendum 56): Exercise 05 says the decks are internal

Matt: the deck needs to be marked internal, not public facing, and he wanted a subtle
tweak because he likes the page. His steer after a brainstorm: the word on the main
title, "internal" on the skill card, plus a few words like *public facing is a human
task*.

**Two touches, no new component, no new CSS, no banner.**

- `m5.pageTitle`: "Turn the Training Into **Internal** Slides That Look Like Cardiff".
  One word. Keeping "That Look Like Cardiff" is what makes it work, because the sentence
  now carries the tension the exercise actually creates: a deck that looks official and
  is not.
- `A.brandSkill.note`: "Builds it in Cardiff's voice and look, **for internal
  presentations. Public-facing work is a human task.**" Same grey `mission-artifact__note`
  slot every artifact already uses.

**Only the Cardiff card carries it, not `A.mattsBrandSkill`.** Both decks are internal
drafts, but saying it twice on one page stops it being subtle, and the Cardiff skill is
the one whose whole purpose is making the output look approved. The title covers the
exercise as a whole.

**What a subagent found first, and why it changed the shape of this.** The site already
has a governance pattern, `governance-callout--discreet`: a quiet green left rule with
grey 0.78rem text, live on the gallery for the C1/C2 data note. Using it here would have
meant new JSX and a new mission field, which is a banner by another name. It also found
that `laneNotes` is a **live renderer with no data**, an unused per-step note slot, and
that Exercise 03 already has the exact register for this kind of sentence: "It works on
the desktop site and is not university hosting." A plain factual clause, no ceremony.
The artifact note turned out to be simpler than any of them.

It also confirmed this **duplicates nothing**: Exercise 06 is the HESA data exercise and
makes no "check before it goes out" point, and the only such language on the site is in
`Fact_Check_Cardiff.md`, which no exercise links.

**Verified.** MH block sha256 `e4f80823...` by the anchored check. All three cards on 05
now report buttons on the same row and a uniform 108px height, checked at 860px and at
560px with no horizontal overflow, because a longer note broke exactly that layout
earlier today. Title still wraps to two lines. `?doctor` 16 files, all 200.

**Stale, found while working, not fixed:** `CLAUDE.md:21` still describes Exercise 06 as
"The Check" running `Fact_Check_Cardiff.md`. 06 has been the data exercise for two days
and that skill is reachable from nowhere.

## 2026-09-05 (addendum 57): the Detailed Deck sentence removed

Matt: remove "Leave Detailed Deck and Default length alone."

It was the second half of the step 2 image caption, which now reads "Prompt first, skill
underneath, both in the description box." Grepped `src/`, `FACILITATOR_GUIDE.md` and
`CLAUDE.md` first: one occurrence only, so nothing else refers to those two controls and
nothing is left dangling. Verified in the DOM that the phrase appears nowhere on the
rendered page. MH block sha256 unchanged.

## 2026-09-05 (addendum 58): an Excel icon on the HESA dataset card

Matt supplied a green spreadsheet document icon for Exercise 06's dataset.
`public/excel_icon.webp`, 128x160, 4.3 KB, on `A.hesaData` via a new `EXCEL_ICON`
constant.

**Cropping it needed a third technique.** The trim tricks that worked for the two earlier
icons both failed here:

- `-fuzz -trim` and a plain "is this pixel non-white" scan both returned the **full 1407
  width**, because a faint JPEG edge artefact runs down the last column at rgb(243,241,242).
- Requiring a run of eight consecutive non-white pixels helped but still caught it.

What worked was locating the artwork **by hue rather than by darkness**: the document is
strongly green, so scanning for `g > r + 25 and g > b + 20` found it immediately at
`451x561+478+104`, with 6px of padding kept so the soft shadow survives. Ratio 0.804,
which matches `skill_md_icon.svg` exactly and sits beside the Blue Peter icon's 0.773.

**Generalise this:** for a generated icon on a white field, find the subject by its colour,
not by thresholding the background. JPEG noise makes background thresholds unreliable at
exactly the edges you care about.

**The naming convention paid off.** `excel_icon.webp` matched the
`.mission-artifact__thumb[src*="_icon."]` rule added in addendum 53 and got
`border: none` automatically, while the plan's cover next to it keeps its border. No CSS
change was needed, which is what a convention is for.

Exercise 06's two cards now sit at a uniform 99px with buttons on the same row. The
dataset card still shows DOWNLOAD only, from the `canView` gate. `?doctor` 17 files, all
200. MH block sha256 unchanged.

## 2026-09-05 (addendum 59): the HESA card note trimmed

Matt: remove ", CC BY 4.0, unmodified. 13 MB." The card now reads "Every UK university,
2015/16 to 2024/25. HESA, www.hesa.ac.uk." (The card lives on Exercise **06**, not 05.)

**Checked what the removal costs before making it**, since both clauses were doing a job:

- **The 13 MB warning survives** where it actually matters. Exercise 06's step 2 body
  still says "It is 13 MB of real data, 163 universities over ten years, so give it a
  moment", and `FACILITATOR_GUIDE.md:87` tells the facilitator to start people
  downloading early. Nothing lost.
- **The attribution survives in part.** The card still credits HESA by name and URL,
  which is the substance of CC BY. What has gone from the **published site** is the
  licence name and the statement that the file is unmodified. The full line is still in
  `FACILITATOR_GUIDE.md:86`, but that is a facilitator document, not something a
  participant or a passer-by sees.

**Worth a decision at some point:** CC BY 4.0 asks for the licence to be identified
wherever the work is distributed, and the site distributes the file. If that matters,
the natural home is the discreet governance footnote on the gallery, next to the C1/C2
note, rather than back on the card. Not doing it unasked; flagged here so it is not lost.

Card still 99px with buttons on the same row. MH block unchanged.

## 2026-09-05 (addendum 60): strapline off the picker, and the memo opens on Chris

Two on the picker screen.

**The strapline now belongs to the arrival screen only.** `App.jsx` passes
`compact={Boolean(player)}` instead of `Boolean(mission)`, so the full line survives on
the splash, where someone landing cold has a reason to read it, and the bar is the title
alone everywhere behind the sign-in: picker and exercise pages both. This is the third
setting for this bar in one session, so for the record the sequence was: off everywhere
(addendum 43), back on the picker and splash (45), now splash only. **The splash still
carries it** and that is deliberate, not an oversight; say if it should go too.

**The memo opens on Chris.** "Hey {player.name}, I'm Chris, your new line manager"
becomes "I'm Chris, your new line manager". The joke was never the greeting, and dropping
the name means the first thing a reader sees is the character rather than their own name
echoed back at them.

**That orphaned a prop, so it went too.** `player` was passed into `MissionGallery` for
exactly one purpose, the name in that greeting. Removed from the component signature and
from the call site in `App.jsx`. `player.name` is still used in `App.jsx` for the
"Signed in as ..." footer, which is untouched, and `loadUser` still drives routing, so
nothing else is affected. Verified on the page: the footer still reads "Signed in as
Matt. Not you?"

## 2026-09-05 (addendum 61): a backup link to HESA on the dataset card

Matt: could the HESA file also link to the dataset on the HESA site, as a backup.

**The URL came out of the file itself, not a guess.** Row 5 of
`HESA_Estates_Management.xlsx` is a **"Data file canonical link"** written by HESA:
`https://www.hesa.ac.uk/data-and-analysis/estates/data.zip`. That is the same target as
"Download source data (zip)" on their site, which settles where our copy came from.

**A finding that matters more than the link.** HESA publish **no .xlsx**. The page offers
only a zip of the whole release and per-table CSVs. So the backup cannot be a like-for-like
swap of our file. What saves it: rows 1-10 of our file are HESA's own metadata block
(Title, Location, Academic years, Data source, canonical link, Licence, Code page, blank,
Last updated, blank) with the real header on row 11. That block is HESA's standard
open-data layout and is in their CSV too, so Exercise 06's prompt line "The header row is
row 11, so skip the ten rows above it" **still holds on a file fetched from HESA**. Had our
copy been re-cut rather than converted, the backup would have silently broken the prompt.

**Matt chose the page over the canonical zip**, and it is the better call for a live room:
nothing downloads unexpectedly, the licence and year range are visible, and a single-table
CSV is far easier to attach to Gemini than a zip somebody has to extract first. Verified
live in the browser: `hesa.ac.uk/data-and-analysis/estates/environmental`, titled "HE
Provider Data: Estates Management", covering **2015/16 to 2024/25**, exactly our range.
`WebFetch` gets a 403 from HESA, so the browser was the only way to confirm it.

**Implementation.** New optional artifact field `sourceLink: { href, label }`, rendered by
`ArtifactCard` as a small accent-blue text link under the note. **Deliberately not a fourth
button**: it is a fallback, and the card keeps one obvious primary action. `target="_blank"`
with `rel="noopener noreferrer"`.

**`DoctorPanel` deliberately does not check it.** A `fetch(..., {method:'HEAD'})` at
hesa.ac.uk from the site would be blocked by CORS and reported as a **false failure** on the
facilitator's preflight, which is worse than not checking. The preflight is for files we
host. It still reports 17, all 200.

MH block sha256 unchanged. Card grew to 115px; buttons still on the same row.

## 2026-09-05 (addendum 62): the two decks compared, and the Cardiff skill rebuilt on the evidence

Matt ran both skills through Notebook: `The_Demand_First_Ladder.pdf` (Matts skill) and
`The_Strict_Filter.pdf` (Cardiff skill). **Same tool, same source, same one-line prompt,
same day, and only the skill file differed**, so every difference is attributable to the
skill. That is an unusually clean control and it turned this from a taste argument into a
diagnosis. Both are image-only exports, so `pdftoppm -r 45` plus `montage` into contact
sheets is again the way to read one.

**What the Cardiff deck got right, and must not be broken:** Cardiff red, the bilingual
logo on title and closer only, the architecture cover, huge numerals, left alignment, the
40-word discipline, and the **Welsh dividers firing correctly** ("Ymarfer / Practice",
"Gwerthuso / Evaluate"). Matt is right that he could run with it.

**What it got wrong, each traced to a line in the spec:**

| Symptom in the deck | Line that caused it |
|---|---|
| 1 photo in 12 slides, no illustration anywhere | "No shadows, icons or emoji" |
| Grey wash on slides 2, 8, 10; grey boxes instead of diagrams | "light grey #D9D9D9 alternate", "Mid grey #CCCCCC borders" |
| Slide 11 is 70% empty white | "Negative space is deliberate tension, not leftover emptiness" |
| **Welsh dividers came out in a serif**, the most off-brand thing in the deck | "Subtitles and section dividers Georgia" |
| No exercise anywhere; it is a briefing, not training | **all six layout patterns are title compositions** |

**That last row is the real finding.** Holding, holding with image, title on red block,
title only, full-width title, left image with red bar. Not one is a content or activity
slide, so the model had no template for teaching. The Matts deck has two TASK slides and
three worked SCENARIO slides because its skill names "The Task" and "The Comparison" as
layouts. Nothing about wit or cartoons explains the difference; structure does.

**Why the loose skill won, researched rather than assumed.** Sources and the durable
version are in `~/.claude/llm-learnings.md`. The load-bearing ones: IFScale
(arXiv 2507.11538, 15 Jul 2025) on instruction-following degrading with constraint count,
with a primacy bias and **silent omission** as the dominant failure; MulDimIF (ACL 2026,
arXiv 2505.07591) measuring **80.8% to 36.8%** as constraints compose; ConInstruct
(arXiv 2511.14342) finding GPT-4o answered **without acknowledging a present contradiction
in 97.5% of cases**; DETAIL Matters (arXiv 2512.02246) measuring **+0.47 on maths but
+0.02 on decision-making**. **The persona is not the lever**: EMNLP 2024 Findings
(arXiv 2311.10054) found 162 personas did not improve performance, so "we gave it a role"
is the wrong explanation to give a room.

**Deliberately not asserted:** any study comparing goal framing to format framing, and any
Google statement that the description field truncates. Our own 5,000-character measurement
from earlier today stands as our observation, not Google's documentation.

**The rewrite.** `CARDIFF_HOUSE_STYLE` in `tools/make_artifacts.py`. **4,730 to 4,684
characters**, so it got slightly shorter while gaining two teaching layouts.

- **NON-NEGOTIABLE block moved to the top.** Colours, sans-not-serif, logo, Welsh rule, in
  one short block. Primacy bias says a rule buried mid-list is the most fragile, and these
  are the rules Matt least wants dropped.
- **Two passes named** (clarity, then layout), which is the decomposition the Matts skill
  uses and which DeCRIM-style work supports as a way to cut simultaneous constraint load.
- **Six title layouts cut to four options**, two of them content patterns: **The
  comparison** (pass side and fail side) and **The task** (an exercise the reader does
  with their own work, startable on Monday).
- **Every content slide** now must name its visual and end with a footer takeaway. Both
  are lifted straight from what demonstrably works in the Matts deck.
- **Illustration unbanned**, scoped to Matt's instruction: flat diagrams, line icons and
  editorial illustration, **never cartoons**, and "there is no photograph of an idea", so
  photography stays on covers and dividers where it actually works.
- **Cut:** all point sizes (no evidence Notebook honoured any), Franklin Gothic and
  Georgia by name (unavailable, and Georgia caused the serif), and the grey palette.

**Verified.** 4,684 chars, 216 spare, 4,768 with the prompt line against Notebook's 5,000.
Greps confirm the removals landed and every protected phrase survived. **Three of those
greps first reported FAIL and were line-wrap false alarms**, the same trap as the earlier
"three words, do not make it six" scare: phrase-grep a hard-wrapped file only after
`tr '\n' ' '`. `awk 'length > 82'` clean. Build green, `?doctor` 17 files all 200, and the
COPY button puts all 4,684 characters on the clipboard with NON-NEGOTIABLE ahead of
DESIGN PHILOSOPHY. MH block sha256 unchanged.

**Still untested**, exactly as the previous version was until today. Only Matt can run it.
Two things to tell him: Google's three-dot menu has **View custom prompt**, which reads
back what was actually stored and is the fastest way to see which rules survived; and
Google documents that **slide revisions create a whole new deck and do not re-consult the
sources**, which matters for Exercise 05 step 4.

**Snapshots** at repo root: `snapshot-gallery.jpg` and `snapshot-m5-top.jpg` refreshed,
plus `snapshot-deck-matts.png` and `snapshot-deck-cardiff.png` as the before-state of the
two real runs. Note for capturing this site: an unfocused tab throttles
requestAnimationFrame, so framer-motion's fade never completes and every screenshot comes
out washed out. Inject
`*{animation:none!important;transition:none!important;opacity:1!important}` first.

---

# CLOSED 2026-09-06: compare the new Cardiff brand skill's output

**Resolved. All nine claims below landed; see addendum 87 for the scoring.** The skill
is settled and must not be edited without a new controlled run. The original brief is
kept as written because the value of it is that the criteria were fixed before the
test, not after.

**Status when written: waiting on Matt.** The skill was rewritten on 2026-09-05 (addendum 62) and has
**never been run**. Matt will paste it into Notebook and generate, then bring the PDF
back. Nothing else should be changed in `Cardiff_Brand_SKILL.md` until that output exists,
because the last version was rewritten several times without evidence and this one is
finally a controlled test.

## What to compare against

| File | What it is |
|---|---|
| `~/Downloads/The_Strict_Filter.pdf` | The **old** Cardiff skill's output. The baseline. |
| `~/Downloads/The_Demand_First_Ladder.pdf` | The Matts skill's output. The target for usefulness, **not** for style. |
| `snapshot-deck-cardiff.png`, `snapshot-deck-matts.png` (repo root, untracked) | Contact sheets of both, already rendered. |

Both are image-only PDFs, so `pdftotext` returns nothing. Read them with
`pdftoppm -r 45 -png` then `montage-im6.q16 <pages> -tile 2x3 -geometry +4+4`.
Note `convert` on this machine is a metapub CLI; ImageMagick is `convert-im6.q16`.

## The specific claims to test, each tied to a change

Score the new deck on these, not on general impressions. Each was a deliberate edit with a
predicted effect:

1. **Illustration appears.** Old deck: 1 photo in 12 slides, nothing else. Did unbanning
   flat diagrams, icons and editorial illustration actually produce pictures on content
   slides? **And are they free of cartoons?** Matt was emphatic: "never cartoons, this must
   carry the Cardiff style".
2. **The grey is gone.** Old deck had a grey wash on slides 2, 8 and 10 and grey boxes
   standing in for diagrams. White ground and hairline rules only now.
3. **No empty slides.** Old slide 11 was 70% white. The new floor is "a content slide more
   than half empty has failed".
4. **Dividers are sans, not serif.** The Georgia rule is gone. This was the most off-brand
   thing in the old deck.
5. **The Welsh dividers still fire.** They worked before ("Ymarfer / Practice",
   "Gwerthuso / Evaluate"). This is a regression check, not an improvement check.
6. **A task slide exists.** The single most important test. The old deck had no exercise
   at all; "The task" is now a named layout. If this does not appear, the layout-pattern
   theory is wrong and that is worth knowing.
7. **Comparison slides appear** with a pass side and a fail side.
8. **Every content slide has a footer takeaway.** None did before.
9. **The brand still holds:** Cardiff red, bilingual logo on title and closer only, left
   alignment, 40-word discipline. The non-negotiable block moved to the top specifically
   to protect these; if any of them regressed, the move backfired.

## How to decide what happens next

- **If most of 1-8 landed:** the skill is done. Say so and stop editing it.
- **If the task slide is missing but the visuals improved:** the layout list is being read
  as styling, not as structure. Next lever is to state the deck's *shape* (how many
  teaching slides, in what order) rather than adding more layout names.
- **If nothing changed:** suspect the constraint count is still too high. The evidence in
  addendum 62 says the fix is fewer rules, not better ones. Cut the reading-level section
  to a third of its length before touching anything else.
- **Resist adding rules.** Every symptom in the old deck was caused by a rule, not by a
  missing one.

## Two things to tell Matt when he runs it

- Google's three-dot menu on the deck has **View custom prompt**. It reads back what was
  actually stored, which is the fastest way to see which rules survived the paste.
- Google documents that **slide revisions create an entirely new deck and do not
  re-consult the sources**. So do content checks before any styling revision, and expect
  a revision to spend another generation.

## Current state at handoff

- `Cardiff_Brand_SKILL.md` **4,684 chars**, 216 spare against the 4,900 warning, 4,768
  with the prompt line against Notebook's measured 5,000 limit.
- Site green: `npm run build` clean, `?doctor` 17 files all 200.
- **39 commits unpushed.** `main` is ahead of `origin/main`; the live site still shows a
  much older version. Do not push unless Matt asks in that message.
- `npm run dev` is broken with `ENOSPC: System limit for number of file watchers reached`.
  Use `npm run preview` (serves `dist/`, no watchers). The real fix needs sudo:
  `sysctl fs.inotify.max_user_watches=524288`.
- Verify `MH_*` by anchor, never by line range:
  `e4f8082373927ce38d7d8b59c1352c51f4f77aab05e0c9e5636b1818fa26fabf`.

## 2026-09-05 (addendum 63): Exercise 06 was broken, and why

Matt ran Exercise 06 and Gemini refused: *"I cannot run code on this file. Additionally, I
cannot see the contents of HESA_Estates_Management.xlsx ... Could you please copy and paste
the relevant data directly into our chat"*. The exercise's premise is "Gemini writes and
runs Python on a spreadsheet you attach", so this was the exercise not working, not a
cosmetic fault.

**Researched rather than guessed, and the popular answer is wrong. The 13 MB was never the
problem.**

1. **346,050 rows fit no context window.** Google publishes **32k tokens with no AI plan,
   128k on AI Plus, 1M on Pro/Ultra**
   (support.google.com/gemini/answer/16275805). A long-format table that size is tens of
   millions of tokens. "I cannot see the contents" was literally true.
2. **Google's code execution tool does not list .xlsx.** The API docs say "Code execution
   works best with text and CSV files" and the Vertex file-input MIME list is
   `.cpp .csv .java .jpeg .js .png .py .ts .xml`
   (ai.google.dev/gemini-api/docs/code-execution). **Google's own Gemini Notebook accepts
   csv and refuses xlsx.** So the upload succeeded and the only tool that could have done
   the work would not take the file. Both doors shut, which is exactly what the error said.
3. **Size was irrelevant:** the documented upload limit is **100 MB**.
4. **Copilot is different.** Microsoft explicitly lists `.xlsx` for data analysis
   (support.microsoft.com/en-us/microsoft-365-copilot/file-formats-supported-by-microsoft-365-copilot),
   which is why the Excel version is still offered rather than dropped.

**A workshop hazard worth knowing:** a Cardiff staff account on Gemini for Education is
likely on a 1M-token window while a personal Google account with no AI plan is on **32k**,
about fifty times smaller, and nothing on screen tells either person which they are on.

**The fix: `tools/make_workshop_dataset.py`.** Pivots the source long to wide once, so the
workshop is about analysis rather than schema archaeology. **346,050 rows and 13 MB become
307 rows and 25 KB**, a 500-fold cut.

- 31 institutions: the Russell Group plus every Welsh provider, Cardiff counted once.
  Matched on **exact names**, because "Cardiff" also catches Cardiff Metropolitan.
- Ten years, 2015/16 to 2024/25, not the six the brief asked for. Six would have broken the
  answer keys, which start at 2015/16.
- Nine columns, Matt's seven plus `Institution`/`AcademicYear` and **`Scope12_tCO2e`**,
  added because the exercise is about emissions and the brief had no carbon column.
- Both `.csv` (what Exercise 06 hands out) and `.xlsx` (two sheets, for Excel and Copilot).

**Two corrections to the brief, both material.** Energy uses HESA's published
`Total energy consumption (kWh)`: summing the components would **double count**, because
they include both `Natural gas used as input for a CHP unit` and `Electricity consumed from
onsite CHP`. And `RenewablesPct` was never missing, it is text like `100.0%` and reads as 0%
complete under a naive numeric test.

**Every answer key reproduces exactly**, which is the check that mattered:

| Key | Guide | Rebuilt file |
|---|---|---|
| Scope 1+2 2015/16 to 2024/25 | 29,663 to 21,336 tCO2e, -28% | identical |
| Estate | 451,363 to 532,968 m2, +18% | identical |
| Intensity | 65.7 to 40.0 kgCO2e/m2, -39% | identical |
| Linear trend | -804 tCO2e/yr, ~13,300 by 2034/35, zero ~2051 | -804, 13,345, 2051 |

**Exercise 06 rewritten around it.** The prompt loses four lines of schema archaeology (the
row-11 header, the text coercion, the category filter) and simply names the columns.
Step 1's "the prompt already handles the buried header row" is gone, step 2's "13 MB ... 163
universities, give it a moment" becomes "25 KB, so it goes up instantly", and the HESA
website link Matt asked to remove is gone, its slot reused for the Excel version.

**Left alone:** `HESA_Estates_Management.xlsx` stays in `public/placeholders/` as the
generator's input and is no longer linked from any exercise. It is 13 MB of Matt's source
data and nobody asked for it to be deleted, but it could be dropped from the deploy later.

**Licence changed status.** The workbook is now a **derivative**, so CC BY 4.0's "indicate
if changes were made" applies where it did not when we hosted the file unmodified. Both the
card note and the guide now say adapted, and the `Workshop_Questions` sheet carries the
attribution.

Verified: `?doctor` 17 files all 200 with the CSV under 06 and the old file gone from the
listing, build green, MH block sha256 unchanged, CSV served with 307 rows and Cardiff's
2024/25 row reading `21336.4`.

## 2026-09-05 (addendum 64): say the CSV lesson on the page, not just in the guide

Matt: mention the CSV point on the website, frame it as try CSV in both Copilot and
Gemini, start with Gemini, and note that this changes fast.

Split across two existing slots so neither has to carry the whole thing:

- **The tool strap**, the grey line under 06's brief, states the fact: "Gemini writes and
  runs Python on a data file you attach, so the numbers are computed rather than guessed.
  **It takes CSV, not Excel.**" That is where the page already says what the tool is, and
  it now says the one thing that would otherwise waste ten minutes of a session.
- **Step 2** carries the practical advice: "Start in Gemini: CSV is what its code tool
  takes, so convert spreadsheets first. Copilot reads Excel too. This changes fast, so try
  both." 43 words, inside the 45-word house cap.

The hedge is deliberate and matches the evidence rather than softening it. Google's docs
list CSV and text for code execution and omit xlsx; Microsoft's list Excel for data
analysis. Both are vendor documentation as of 2026-09-05, and the developer forum shows a
backend fault where even CSV sometimes fails, so "try both" is the honest instruction, not
a fudge. Telling a room "Gemini cannot read Excel" as a permanent fact would be wrong
within months.

No change to the verdict: "ask for the code and the numbers are computed rather than
guessed" is still the lesson, and format handling is a practical note rather than a
teaching point.

## 2026-09-05 (addendum 65): Matt's new Exercise 06 prompt, with question 3 replaced

Matt supplied a new step 1 prompt: summarise from a Cardiff perspective, insist on Python,
degrade gracefully if code will not run, then an executive summary, three insights, and a
target question.

**Question 3 as written was a dud, and checking the data before wiring it in caught it.**
He asked "is Cardiff on track to reach 50% renewable energy by 2030?" **Cardiff has reported
100% every year since 2015/16**, so the answer is one line and teaches nothing. The plan
itself sets no renewables percentage at all: its commitment is "carbon net zero (Scope 1
and 2)".

Replaced, with Matt's agreement, by the question actually hiding in the data: **Cardiff
reports 100% renewable through green tariffs AND 21,336 tCO2e, in adjacent columns.** Both
are true, because a green tariff says where the electricity was bought and not what was
burnt, and most of what is left is gas on site. It cannot be answered without reading the
data, and it is the same "two true numbers, two different stories" lesson the exercise
already turns on.

**Matt asked for one powerful chart instead of a basic summary chart:** box plots across all
31 universities with Cardiff marked, on three metrics. Checked the distribution first to
make sure it was worth drawing, and it is:

| 2024/25 | Cardiff | Median | Rank |
|---|---|---|---|
| Emissions per m2 | 40.0 kgCO2e | 44.4 | 11 of 31 |
| Energy per m2 | 222 kWh | 225 | 12 of 31 |
| Renewables | 100% | 26% | joint top |

**Top of the class at buying green, mid-table at using less.** The chart makes the paradox
visible, which is why the box plot beats the old two-line-chart pair.

**"the attached file", not "the Excel file".** Matt wrote "Excel file" and then suggested
"Analyse this excel file". The card hands out a CSV for Gemini and an .xlsx for Copilot and
step 2 says to try both, so naming either format in the prompt would contradict the page two
inches above it. "The attached file" is true whichever they attach.

Also fixed his "perspecitive" typo. `promptEmphasis` bolds "Work out every figure by writing
and running code (Python), not by estimating", matching Exercise 04's treatment of its
load-bearing line.

**Knock-ons handled:** the workflow chip and step 3 both referred to "both charts", which no
longer exist. Step 3 is now "Find Cardiff on the chart", and its body points at the gap
between the three box plots and back at question 3. The verdict's "two true charts" became
"two true numbers", which now describes the green tariff paradox rather than the old chart
pair. Answer keys and the Cardiff ranking table added to `FACILITATOR_GUIDE.md`.

Verified: COPY puts the full prompt on the clipboard with no markup, emphasis renders, MH
block sha256 unchanged, build green.

## 2026-09-05 (addendum 66): attribution and the Excel link off the dataset card

Matt: remove "Adapted from HESA, www.hesa.ac.uk, CC BY 4.0." and "Also as Excel, with a
questions sheet". The card note is now just "31 UK universities, 2015/16 to 2024/25, one
row each per year." Card back to 99px, buttons still on the same row.

**Two consequences, both flagged rather than fixed.**

**1. The site now carries no HESA attribution anywhere.** Verified in the DOM: nothing on
Exercise 06 matches `hesa.ac.uk` or `CC BY`. This is a sharper version of the point raised
in addendum 59, because the file is no longer a copy of HESA's, it is a **derivative** we
filtered and reshaped, and CC BY 4.0 asks for attribution and an indication of changes
wherever the work is distributed. What survives: the `Workshop_Questions` sheet inside the
`.xlsx` carries the adapted-from line, and `FACILITATOR_GUIDE.md` carries the full
attribution. **Neither is on the website, and the CSV people actually download has no
attribution in it at all.** If this matters, the natural home is the discreet green-rule
governance footnote already on the gallery beside the C1/C2 note, which costs one line and
does not touch the card. Not doing it unasked.

**2. The `.xlsx` is now unreachable from the site.** Still generated by
`tools/make_workshop_dataset.py` and still served, but nothing links it, so `?doctor` no
longer checks it either. Step 2 still says "Copilot reads Excel too", which remains true
and useful as a general point, and Copilot reads CSV perfectly well, so nobody is blocked.
Worth deciding later whether the xlsx keeps earning its place.

**The `sourceLink` renderer is now dormant**, with no artifact setting the field. Kept
rather than deleted: it is opt-in, it renders nothing unless a card asks for it, and Matt
has now wanted such a link twice. Commented in `MissionDetail.jsx` as unused with a
pointer to grep the field name before reintroducing it, which is the addendum 46 lesson
applied rather than repeated.

## 2026-09-05 (addendum 67): the chart request rewritten against a real output

Matt ran the new prompt and sent the chart back. The **structure worked**: three box plots,
Cardiff marked, an IQR/median/whisker footnote, and the model correctly reported 29
universities for renewables against 31 for the two intensity measures, which matches the
coverage in the file. So the ask was sound; four things in the wording were not.

**1. The legend overlapped the data.** Matt's actual complaint. "Cardiff University" sat
inside panel 1 at the top, colliding with the whisker. Fixed by removing the need for a
legend at all: "Mark Cardiff on each as a single point, labelled beside the point with its
own value. Use no legend, and put nothing inside the plot area that can overlap a box or a
whisker." **Annotating one point directly beats a legend for one series**, and it also
answers the question the legend could not, which is what Cardiff's value actually is.

**2. The units made the numbers unreadable.** The emissions axis came back as
`tCO2e per m2`, running 0.02 to 0.08. Cardiff's 40.0 rendered as **0.04**. The prompt now
names the unit: **kgCO2e per square metre**, so the axis reads 20 to 80 and the number is
the one in the facilitator answer keys.

**3. Nothing told the reader which direction is good.** On two panels low is good and on the
third high is good, and Cardiff is low, low, high. A reader glancing across could take that
as three consistent results or as Cardiff being poor on the third. The prompt now asks each
panel to state **whether lower or higher is better**, which is the difference between a
chart and a chart someone can read without a briefing.

**4. The panel n belongs on the chart, not in the prose.** The model volunteered the 29
versus 31 in its explanation. Asking for it on the panel means it survives when the chart
is pasted into a deck without the paragraph underneath.

**"Publication-ready" was left in** because Matt wrote it, but it is doing no work on its
own: the four concrete requirements are what will produce the result. That is the same
lesson as addendum 62, where a vague quality adjective loses to a checkable instruction.

Verified: COPY puts all 1,389 characters on the clipboard with no markup, MH block sha256
unchanged, build green.

## 2026-09-05 (addendum 68): a phrase for the principle, and a named chart title

Matt asked for a phrase capturing "user centric, clear without knowing the background",
then for the chart title to be named in the prompt rather than left to the model.

**The phrase: "Assume the chart will be forwarded on its own, without the words around
it: everything needed to read it sits on the chart."**

It works because it is literally what happens to charts. They get pasted into a deck or an
email, stripped of the paragraph that explained them, and then read by someone who was not
in the room. Stating that turns the four mechanical requirements underneath it (no legend,
units named, n per panel, direction of good) from arbitrary rules into obvious
consequences, which is the goal-plus-non-negotiables pattern the research in addendum 62
recommends: state the outcome, then the checkable specifics.

It also matches the house voice. Exercise 04's prompt says "professional services staff who
have not read it and will not"; `Cardiff_Brand_SKILL.md` says "write for someone who has not
read the source document and is not going to". **Same idea, three places.** Worth reusing
verbatim if the phrase proves itself.

**The title is now named in the prompt:** `Title it "University estates and energy
benchmarks, 2024/25"`. Taken from the model's own output, which chose it unprompted and
chose well. Naming it makes every participant's chart come back with the same heading,
which matters in a room where the facilitator wants to talk about one thing on a screen
rather than thirty variations of it. It also removes a small, pointless decision from the
model's plate.

Verified: quotes survive the copy intact, no markup on the clipboard, build green.

## 2026-09-05 (addendum 69): item 4 cut by a third

Matt: shorter and more concise, still effective. **140 words to 95** in the source, and
nothing that was doing work was lost. What went, and why each cut was safe:

- **"publication-ready"** and **"side by side"**. Vague quality adjectives that the four
  specifics below already deliver. Addendum 62's lesson applied to my own writing.
- **"Give each panel its own y-axis"**. The three metrics have three different units, so
  separate axes are forced. The model did it unprompted in the real run. This is the
  "anything the goal already implies" cut.
- **"everything needed to read it sits on the chart"**. A restatement of "assume it will be
  forwarded on its own, without the words around it". One sentence, said once.
- **"Mark Cardiff on each as a single point, labelled beside the point with its own value"**
  becomes "Label the Cardiff point on each with its value". Same instruction, half the words.
- **"a box or a whisker"** becomes "the data". Broader and shorter, and it covers the median
  line too, which the longer version accidentally did not.

**A build break worth recording.** Writing "Label Cardiff's point" put an apostrophe inside
a single-quoted JS string and esbuild failed with `Expected "}" but found "s"`. First fix
attempt over-escaped and produced a literal backslash in the copied prompt. Settled on
**"the Cardiff point"**, which needs no apostrophe, is shorter, and cannot break again.
**The general rule: prompt text lives in single-quoted strings in `missions.js`, so avoid
apostrophes in new prompt copy rather than escaping them.** Verified there is no stray
backslash anywhere in the copied output.

Item 4 is 102 words as rendered, the whole prompt 228. MH block sha256 unchanged.

## 2026-09-05 (addendum 70): Matt's tested prompt replaces mine

Matt: "I have a tested prompt that works well." Applied verbatim. **A tested prompt beats a
reasoned one**, and several of my refinements are now gone by his choice, which is the right
outcome: I was theorising from one screenshot, he ran it.

**What changed from the version I had built:**

- **Four items become three.** "Three insights worth knowing, one sentence each" is gone. It
  was his own earlier item, so this is him editing himself after seeing the output.
- **The chart moves from 4 to 2**, straight after the executive summary, which puts the
  visual next to the prose it supports rather than at the end.
- **His legend fix, not mine.** He keeps a legend and places it outside: "Place any legend
  outside the plotting area so it does not cover data points, labels or boxplots." I had
  removed the legend entirely and annotated the point. Both solve the overlap; **his is
  tested and mine was not**, so his stands.
- **Dropped from my version:** the kgCO2e unit, the per-panel n, the direction-of-good line,
  the named title, and the "assume it will be forwarded on its own" framing.

**One observation, recorded rather than argued.** The unit was a real legibility problem in
his own screenshot: the emissions axis came back as `tCO2e per m2` running 0.02 to 0.08, so
Cardiff's 40.0 rendered as **0.04**. If his tested run produced a readable axis then the
point is moot and the shorter prompt is better. If a future run comes back in tonnes again,
adding "in kgCO2e" to the chart line is a two-word fix. Noted here so the option is not lost.

The **"assume it will be forwarded on its own"** phrase from addendum 68 is no longer in any
prompt. It is still a good phrase and is recorded here; the same idea survives in Exercise
04 and in `Cardiff_Brand_SKILL.md`.

**Nothing downstream broke.** The chart is now item 2 but the green tariff is still item 3,
so step 3's "check it against the answer to question 3" still points at the right thing. The
workflow chip "Find Cardiff" and the step title "Find Cardiff on the chart" both still hold.
`promptEmphasis` still matches its line exactly. 170 words, no apostrophes, clipboard clean,
MH block sha256 unchanged.

## 2026-09-05 (addendum 71): Exercise 06 runs Copilot first, and the attach strip arrives

Four changes from Matt in quick succession, all on 06.

**1. The attach strip, as on Exercise 04.** New `attach: [A.hesaData]` on step 2. **The
strip's label was hardcoded "ATTACH BOTH"**, which is wrong for one file, so `AttachStrip`
now picks from the count: **1 gives ATTACH THIS, 2 gives ATTACH BOTH, 3 or more gives ATTACH
ALL.** Checked Exercise 04 afterwards: still says ATTACH BOTH. The sustainability plan is
deliberately not in 06's strip, because it is reference material and never gets attached to
the model.

**2. "takes" becomes "prefers".** Matt is right and it is not pedantry: Copilot does accept
xlsx, the Gemini forum shows CSV sometimes failing too, and the whole area moves. "Prefers"
is the claim the evidence supports; "takes" would be wrong within months.

**3. Copilot first, then repeat in Gemini.** This reorders the exercise, so several things
moved together rather than just the one sentence:
- The strap now covers both tools: "Copilot and Gemini both write and run Python on a data
  file you attach ... Both prefer CSV, not Excel." Matt's phrase was "It prefers", but "It"
  no longer has one referent once the sentence names two tools.
- `tools` gains Copilot, so the picker card reads Copilot + Gemini + Gemini Canvas, and
  `apps` gains it so both sign-in cards show at the top.
- Step 1 opens "Start in Copilot".
- Step 2 names the right control for each: **paperclip in Copilot, + in Gemini**, which is
  the distinction fixed back in addendum 50.
- **Step 5 now says "Back in Gemini"**, because Canvas is Gemini's and "the same chat" would
  otherwise mean the Copilot one. That was the only real trap in the reorder.
- Workflow chip 2 becomes "Run it twice".

**4. The sustainability plan card comes off 06.** `artifacts` is now just the dataset.
`?doctor` confirms the plan is still checked, under 01, 03 and 04.

Matt then asked to remove "Start in Gemini: CSV is what its code tool takes ... so try
both", which change 3 had already replaced. Confirmed gone by grep rather than assumed.

Step 2 is 37 words. All 17 files still 200. MH block sha256 unchanged.

## 2026-09-05 (addendum 72): Exercise 06 becomes a cross-check exercise, and loses the trend

Two instructions from Matt, and the second one had a bigger blast radius than it looked.

**Step 3 is now the cross-check.** Was "Find Cardiff on the chart", which I had written.
Now "Run it again in the other tool": same prompt, same file, in Gemini, where the button
is a +. **The chart reading survives inside it**, because comparing two tools' charts IS
comparing where each puts Cardiff, so nothing was lost by the swap: "Do both put Cardiff in
the same place on the box plots, and do the numbers match? Where they differ, one of them
is wrong."

It also gains a second prompt, from Matt's "how else could you check, e.g. macro or formula
AI to generate":

> Pick the single most important number in your summary. Give me one Excel formula I can
> paste into the spreadsheet to check it myself, and say which columns it uses. Then name
> one thing that formula still would not catch.

**That third clause is the point.** Two AI runs agreeing is weak evidence, since they can
be wrong the same way. A formula is an independent check that depends on neither model, and
asking what it would still miss stops the check being mistaken for proof. Step 2 was doing
two jobs and now just runs Copilot.

**Step 4, "Fit the trend to 2035", is dropped.** It fed more than itself:

- **The dashboard prompt asked for "a projection line to 2035 that can be switched on and
  off"** and simultaneously forbids inventing figures, so with no trend computed it would
  have rendered a NEEDS DATA card or invented a line. Replaced with "a short note naming
  the one number on the page you would check by hand first", which fits the new
  verification theme. The matching constraint about saying the projection assumes ten years
  continue also went.
- **The page title promised it:** "Ten Years of Real Emissions Data, and Where the Trend
  Lands". Now "Ten Years of Real Data, Run Twice and Checked". Brief and summary followed.
- The dashboard SUBJECT line said "decarbonisation against campus growth", which was the
  trend framing; now "emissions and energy against the rest of the sector".
- Chip removed, 20 minutes down to **17**.

**The trend findings are kept in the facilitator guide**, marked as dropped from the
exercise, because they are still true and still the sharpest thing in the data: -804 tCO2e
a year, 13,300 by 2034/35, zero around **2051**, against a plan that runs to 2035. Worth
saying from the front if the room has time. Deleting them would have thrown away real
analysis for no reason.

**Two stale things fixed while in the guide:** the 90 and 60 minute plans both said "01, 04
and 06 is 42 minutes", which is now **39**, and described 06 as "verify with a skill", which
it stopped being when 06 became the data exercise. Day total 80 to **77**.

Verified: four steps, no reference to a projection or a trend anywhere in `missions.js`,
build green.

## 2026-09-05 (addendum 73): prompt 1 reflowed, and the scroll cap raised 8px short

Matt reflowed Exercise 06's first prompt to kill the vertical scrollbar: the three opening
paragraphs merge into one, and "Give me:" becomes "Output:", with item 1 tight under it.

**It nearly worked and would have been easy to call done.** Measured in the browser rather
than assumed: the reflow took the box to **360px against a 352px cap**, so it still
scrolled, **by eight pixels**. The text change alone did not achieve what he asked for.

Raised `.prompt-box__text` `max-height` from **22rem to 24rem**. Safe, because the cap
exists only to stop Matt Hayden's 133-line Copilot prompt pushing the rest of the page
below the fold, and raising it only ever shows more before scrolling. Nothing can lose
content this way. Comment updated to record the 360px reason so nobody trims it back.

**Result, measured across all 21 step prompts:** only two still scroll, and both should.
Exercise 06's dashboard build prompt is ~616px and Exercise 03's process-designer prompt
~394px; both are genuinely long and scrolling is the right behaviour. Exercise 06's first
prompt now reports `scrollHeight === clientHeight`.

`promptEmphasis` still matches: "Work out every figure by writing and running code (Python),
not by estimating" survives verbatim inside the merged opening paragraph, so the bolding is
unaffected by the reflow.

## 2026-09-05 (addendum 74): step 3's check prompt, Matt's version

Replaced my Excel-formula version with Matt's:

> Pick the single most important number in your summary. Show exactly how you calculated it
> from the source data so I can verify it manually.
>
> Then independently calculate it a second way and confirm both methods give the same
> result. If they differ, explain why.

**What it does better:** "show exactly how you calculated it from the source data" forces
the working into the open, which is a stronger ask than a formula, because it exposes which
rows were filtered and which column was used. That is where these go wrong, not in the
arithmetic. "If they differ, explain why" is also a good trap: it gives the model somewhere
to go other than quietly picking one answer, which is exactly the silent-resolution
behaviour ConInstruct measured (addendum 62).

**What it gives up, worth watching in the room.** My version asked for an Excel formula, so
the check ran outside both models. Matt's asks the same model to do the sum twice, and two
methods from one model in one context can be **wrong the same way**: agreement is weaker
evidence than it looks. What rescues it is the first sentence, "so I can verify it
manually", which keeps a human in the loop. Worth saying out loud if anyone treats the
second method as proof.

Label kept as "THEN GET A CHECK YOU CAN RUN YOURSELF", which still describes it accurately
given the manual-verification clause.

**Matt then cut "Where they differ, one of them is wrong" from step 3's body**, so it now
ends on the question: "Do both put Cardiff in the same place on the box plots, and do the
numbers match?" Better, and not only shorter: the cut sentence was answering its own
question a beat after asking it. Leaving the question open is what makes someone actually
go and look, and it matches the house pattern where the transferable lesson lands in the
completion quote rather than in the step. 31 words.

Verified: no apostrophes, so the JS string is safe, clipboard clean, no scrollbar, MH block
sha256 unchanged.

## 2026-09-05 (addendum 75): step 1 body cut to one line

Matt: step 1 becomes "Start in Copilot and analyse the data (you will repeat this in
Gemini)." **13 words, down from 22.**

The line it replaced explained the file's shape ("one row per university per year, so it
gets straight to the analysis instead of unpicking the file first"), which was a leftover
from when the file was 346,050 long-format rows and that fact mattered. It stopped
mattering the moment the workshop dataset shipped: nobody now needs to know what the file
avoided being. **The parenthetical does more work than the sentence it replaced**, because
it tells someone at step 1 that there is a second run coming, which is the shape of the
exercise rather than a property of the file.

Worth noting the four step bodies now read as a clean sequence with no repetition between
them: start in Copilot, attach and read it, run it again in Gemini and compare, then build
the dashboard in Gemini. Nothing explains the file, and nothing needs to.

## 2026-09-05 (addendum 76): step 4 becomes a new chat, and a much bigger dashboard prompt

Matt: step 4 needs a **new chat** with the data uploaded and Canvas clicked, it can take a
while or crash the first time, and just try again. Plus a wholly new build prompt.

**The new-chat detail resolved a contradiction I would otherwise have shipped.** The old
prompt said "DATA: use only the figures computed above in this chat", which is meaningless
in a fresh chat where nothing has been computed. Matt's replacement says "Use only figures
provided or calculated in this chat", which works either way, because in a new chat the
attached CSV **is** the provided figures. Had only the body changed, the prompt would have
told the model to use figures that did not exist and the NEEDS DATA rule would have fired
on everything.

**The prompt is far more ambitious than what it replaced**, and the data supports it. The
centrepiece is an animated bubble chart: one bubble per university, energy intensity against
emissions intensity, sized by floor area, playing 2015/16 to 2024/25 with Cardiff
highlighted and a trail. That needs per-university per-year floor area, energy and emissions
for all 31 institutions across ten years, which is **exactly the 307-row shape** the
workshop dataset was built into. The old two-line-chart version used a fraction of it.

It also keeps the verification idea that has been circling this exercise all day, and puts
it **inside the artefact**: a panel showing source values, formula, arithmetic, result, an
Excel formula and one limitation for the single most important number. The Excel formula
from my step 3 draft survives here, which is a better home for it.

**Body rewritten:** new chat, attach the CSV again, Tools menu, Canvas, "the first build
often takes a while or falls over. If it does, just send it again." New `promptNote`:
"[new chat, Canvas on, and attach HESA_Estates_Workshop.csv again]".

**Escaping, since this prompt is full of traps.** Four apostrophes (Cardiff University's,
Cardiff's x2, and one in the closing question), plus `kWh/m²` and `kgCO₂e/m²` carrying a
superscript two and a **subscript two**. Built the JS string programmatically rather than by
hand and verified from the clipboard: **2,047 characters, four apostrophes rendering, no
stray backslash, both special characters intact**, all four stage headings present, and the
closing double quote in place.

Facilitator guide updated with the bubble chart, the three operational warnings and the
verification panel.

## 2026-09-05 (addendum 77): the Gapminder dashboard prompt

Matt supplied a much larger step 4 prompt: a Hans Rosling / Gapminder animated bubble
chart, one HTML file, autoplaying and looping, Cardiff against the sector with Bristol as
the default comparator. **5,394 characters**, up from 2,047. Then two refinements: 1.8
seconds per year became 2.5, then the whole line became "~2.5 seconds per academic year
transition with linear fractional time interpolation", which pairs properly with the
"2020.1, 2020.2, 2020.3" requirement above it.

**Checked against the data before installing it, because the prompt hard-codes three column
names and an institution.** All three columns exist exactly as written: `Energy_kWh`,
`FloorArea_m2`, `Scope12_tCO2e`. **"University of Bristol" matches exactly**, and only
because the generator strips HESA's leading "The": the raw record calls it "The University
of Bristol", so without that rule the default comparator would have silently found nothing.
Bristol has all ten years.

**Bristol is a better comparator than Matt may realise.** 2024/25: Bristol 21,670 tCO2e on
536,730 m2 against Cardiff 21,336 on 532,968. **Near-identical estates and near-identical
emissions**, so the bubbles start on top of each other and any divergence over the decade is
real rather than a size artefact. And Bristol buys **13.6% renewable against Cardiff 100%**,
which sets up the green tariff paradox from step 1 without the prompt having to mention it.

**Escaping: zero needed, and that was a decision.** My first pass rephrased Matt's
possessives to dodge the single-quote trap, which changed his words for no good reason. His
originals use the **curly** apostrophe, which needs no escaping inside a single-quoted JS
string, so restoring his exact text was both more faithful and safer than my rewrite.
Verified from the clipboard: 5,394 characters, `÷ × “ ” ’` all intact, no stray backslash,
all eleven section headings present.

**Body carries the model tip:** "It works on Flash but Pro handles it better." 41 words,
inside the house cap. That phrasing is deliberate: it does not block anyone stuck on Flash,
which is what "use Pro" alone would have implied.

## 2026-09-05 (addendum 78): comparator changed from Bristol to York

Matt gave one line, the default-comparator line. **Eight references needed changing**, not
one: the opening frame, the trails during the hold, the comet trails, the end-of-loop
journeys, the compact comparison, the data-integrity check and the self-check all named
Bristol. Changing only the line Matt quoted would have left the prompt telling the model to
select York and then to verify Bristol.

**Verified York exists first.** All ten years, and it matches as "University of York" only
because the generator strips HESA's leading "The", same as Bristol did.

**York is a materially better comparator, and the numbers say why:**

| Emissions intensity kgCO2e/m2 | 2015/16 | 2024/25 | Change |
|---|---|---|---|
| Cardiff | 65.7 | 40.0 | **-39%** |
| York | 60.7 | 55.5 | -9% |
| Bristol | 85.5 | 40.4 | -53% |

**York starts better than Cardiff and ends worse, so the two bubbles cross over.** That is
a story you can watch happen, which is the entire point of a Gapminder chart. Bristol
converged on almost exactly Cardiff's endpoint, 40.4 against 40.0, so the two would have
finished sitting on top of each other with nothing to see. The swap improves the artefact
rather than just changing a name.

York also reports **no green tariff figure at all** against Cardiff's 100%, which is a
second contrast available if anyone clicks in.

Verified from the clipboard: 5,370 characters, no Bristol anywhere, all eight York lines
correct including the curly apostrophes in "Cardiff and York's". Facilitator guide updated
with the crossover and why Bristol was dropped.

## 2026-09-05 (addendum 79): the dashboard prompt grows to 7,382 characters

Matt's third version of the step 4 prompt. **5,370 to 7,382 characters.** Installed
verbatim, verified from the clipboard: all eleven section headings present, all six special
characters intact (`÷ × – ’ “ ”`), no stray backslash, no surviving Bristol reference.

**What is new:**

- **VIEWPORT OPTIMISATION**, a whole section, and it is the most useful addition. Zoom to
  the 5th-95th percentile range, keep most universities in 60-80% of the chart area, fix
  those axes for the whole animation, never crop Cardiff, York or the median lines. **This
  is the difference between a chart and a chart you can see**: with 31 universities the
  outliers would otherwise squash everyone into a corner.
- **Force-based collision separation, with a guard rail:** "Do not allow collision
  separation to imply false values: axes and tooltips must continue to show the true
  values." That is the right instinct. Nudging bubbles apart to make them readable is a
  visual lie unless the numbers underneath stay honest, and the prompt says so.
- **A cinematic open**, trail arrows, label collision avoidance, layering, and three named
  example callouts rather than one.
- **Rankings and quartiles must come from valid observations for the selected time only**,
  which quietly handles the missing-data problem: 1% of Buildings and 6% of CarSpaces are
  blank, so a naive rank would silently move institutions around.

**What is gone, and it needed a documentation fix.** The prompt now says "avoid secondary
charts, **verification panels**, audit traces and dashboard clutter", and the VERIFICATION
section is deleted. The facilitator guide claimed the verification panel was "the
through-line of the whole exercise", which was written two hours ago and is now wrong.
Rewritten to say **the verification lives in step 3 instead**, which is the better place
anyway: the check happens before the pretty thing is built rather than inside it.

**Worth naming for the workshop.** This prompt is the longest thing on the site by a wide
margin, and Exercise 05 spent the day proving a shorter skill beat a longer one. Both are
true, and the distinction is real: **a design spec competes with the content, a build spec
is the content.** Every line here is a requirement the code either meets or does not, which
is the "machine-checkable output" category the addendum 62 research said to hard-constrain.
Added to the guide so the contradiction is answered rather than noticed.

## 2026-09-05 (addendum 80): the Canvas button joins the attach strip

Matt: use the paperclip strip on step 4 too, with the HESA icon, plus a Canvas button icon
he captured. Step 4 opens a new chat, so it genuinely is a second attach.

`AttachStrip` gains two optional props rather than a second component:

- **`label`**, because the count-derived label was wrong here. "ATTACH THIS" then a Canvas
  chip reads as though you attach Canvas, which you do not. Step 4 sets **"IN THIS CHAT"**,
  which covers a file and a control in one phrase.
- **`extra`**, a trailing control image after a `+`. So the strip reads: paperclip, IN THIS
  CHAT, the Excel icon, `HESA_Estates_Workshop.csv`, +, the Canvas button.

`public/canvas_button.webp` is his screenshot at **91x26, 384 bytes**, saved lossless and
rendered at its captured size. Deliberately not scaled up: at 1:1 it looks like the thing
they are hunting for on screen rather than an illustration of it.

**A real trap caught by running the preflight rather than trusting it.** `?doctor` came back
"All 17 files respond" with the Canvas image **not in the list at all**. `attachExtra` was a
new asset class `DoctorPanel` knew nothing about, so a missing file would have passed the
five-minute preflight and 404d in front of a room. Now covered, along with the `attach`
array itself: those files are usually also in `mission.artifacts`, but **nothing enforces
that**, so a step that attached something not on the card would have been invisible too.
17 files becomes **18**.

That is the second time this exact shape of bug has appeared, after the `thumb` field in
addendum 44. **The standing rule now: any new field naming a file or an image must be added
to `collectUrls` in the same commit.**

## 2026-09-05 (addendum 81): Exercise 06's verdict follows the exercise

Matt: "Two true numbers still told two different stories" becomes "Transforming numbers into
a story can be engaging."

Right call, and not only a wording preference. **The old line described an exercise that no
longer exists.** It came from the version with two static charts, absolute against
intensity, where step 3 asked you to compare them. Step 3 became the cross-check in addendum
72 and step 4 became a Gapminder animation, so the closing line was pointing at a comparison
the page had stopped making. The new one describes what the exercise now actually does: turn
a spreadsheet into something you watch.

**A stale reference fell out of the change.** `FACILITATOR_GUIDE.md` still read "Two true
charts, two different stories. Which one you show is an editorial choice, and that is the
point of step 3." Step 3 is now the cross-check, so that sentence sent a facilitator looking
for a beat that is not there. Rewritten to say the point directly and to flag that **the
exercise no longer makes it for you**: absolute emissions fell 28% while intensity fell 39%,
both honest, and it is now the facilitator's line rather than a step.

Worth noting the intensity finding survives in the data even though no step asks for it. If
the room wants it, it is one prompt away, and the guide now carries the numbers.

## 2026-09-05 (addendum 82): the dashboard prompt gains a size key and named bubbles

Third revision of step 4. **7,382 to 9,666 characters.** Two new sections, both fixing the
same weakness: a Gapminder chart where you cannot tell what the bubbles mean or who they
are.

- **BUBBLE SIZE KEY.** A legend saying "Bubble size = total floor area", three example
  bubbles at representative m² values, and a **square-root radius scale**, which is the
  correct one: area, not radius, must be proportional to the value, or a university twice
  the size looks four times bigger. The previous version asked for "bubble area, not
  radius" but never said how, and never asked for a key at all.
- **UNIVERSITY IDENTITIES.** Grey bubbles must stay recognisable: short labels, a JavaScript
  abbreviation map, full names in tooltips, leader lines, a white halo, and a stated
  priority order when labels cannot all fit. This is the fix for the obvious failure mode of
  the previous version, 29 anonymous grey circles.

**Checked the ten named abbreviations against the data before installing.** All ten resolve
to real institutions in the CSV. Worth recording that **"Imperial College London" only
exists because the generator renames it**: HESA calls it "Imperial College of Science,
Technology and Medicine". Same class of dependency as the leading-"The" strip that
"University of Bristol" and "University of York" rely on. **If anyone edits
`tools/make_workshop_dataset.py`, three things in this prompt break silently.**

Also new: labels and leader lines interpolate at the same frame rate as the bubbles, Follow
Cardiff keeps enough contrast to read neighbours, and the self-check grows from twelve
items to seventeen.

Verified from the clipboard: 9,666 characters, thirteen section headings, all seven special
characters (`÷ × ² – ’ “ ”`) intact, no stray backslash. MH block sha256 unchanged.

## 2026-09-05 (addendum 83): the strip reads as a sequence, and prompt notes go bold

Matt: tune the order to New Chat, then paperclip attach with the HESA icon, then enable
Canvas. And bold the note at the bottom, shortened to "[Canvas on and attach
HESA_Estates_Workshop.csv]".

**The strip now reads as three steps rather than a list:**

> 📎 **NEW CHAT** [Excel icon] HESA_Estates_Workshop.csv *then* [Canvas]

Two changes made that work. The label went from "IN THIS CHAT" to **"NEW CHAT"**, which is
the first action rather than a location. And the joiner before the control went from `+` to
**"then"**, because they mean different things: `+` on Exercise 04 means "and this one too",
where two files go in together, while Canvas is the next thing you do. The strip now
carries an order, which is what Matt asked for and what `+` could not express.

**Prompt notes are now bold and black across the site**, not just this one. They are the
do-this-before-you-send line rather than part of the prompt, they are already excluded from
the COPY button, and all eight of them do the same job: attach this, paste that underneath,
switch this on. Making one bold and leaving seven grey would have been the inconsistency.
**Flagged in case Matt wants it scoped to Exercise 06 only**, but the site-wide version
looks right: verified all eight render at weight 700.

The note also lost "new chat" and "again", which the strip and the body now both say. It is
down from 66 characters to 47.

## 2026-09-05 (addendum 84): step 3 says why, in four words

Matt: drop ", where the button is a +" and end on "do Gemini and Copilots numbers match? AI
does make mistakes."

> Same prompt, same file, in Gemini this time. Do Gemini and Copilot's numbers match?
> **AI does make mistakes.**

**18 words, down from 31.** Two things went, both rightly:

- **The + control.** Step 2 already names the paperclip for Copilot, and by step 3 someone
  has attached a file once and does not need the button pointed at again. It was there from
  when step 2 covered both tools.
- **The box plot comparison.** "Do both put Cardiff in the same place on the box plots" was
  my line, and it asked for a visual comparison when the actual test is numeric. "Do the
  numbers match" is the same check, stated plainly.

**"AI does make mistakes" is the addition that matters**, and it is the first time the site
says it outright. Everything else on these pages teaches verification by making people do
it: attach the source, ask for the code, run it twice, show the working. This names the
reason in four words, at the moment someone is looking at two answers. It is also the honest
framing for a room that has spent an hour being impressed.

Apostrophe escaped in the single-quoted string and verified rendering once with no stray
backslash.

## 2026-09-05 (addendum 85): "then enable" completes the strip sentence

Matt: add the word "enable" before the Canvas icon.

> 📎 **NEW CHAT** [Excel icon] HESA_Estates_Workshop.csv *then enable* [Canvas]

Small change, and it finishes what "then" started in addendum 83. **"then" gave the strip an
order; "then enable" gives it a verb.** Reading it now produces a complete instruction with
no inference required: open a new chat, attach this file, then enable that control. Before,
a reader had to supply the verb themselves from the icon, which is exactly the sort of
half-step that costs a minute in a room.

Left as a literal in `AttachStrip` rather than made configurable. There is one `extra` on
the site and it is a control you switch on, so a prop would be speculative. If a second
extra ever needs a different verb, that is the moment to add one.

Verified: step 4 reads "NEW CHAT | HESA_Estates_Workshop.csv | then enable" plus the Canvas
image, no overflow, and **step 2's strip is untouched** at "ATTACH THIS |
HESA_Estates_Workshop.csv", which is right since it has no control to enable.

## 2026-09-05 (addendum 86): the 04-06 patterns carried back to 01-03

Matt asked which of today's improvements should come back to the first three exercises,
with one example: the Deep Research fallback needs the OPTIONAL prefix that 04's backup
training session has. An audit of all six found five gaps and one latent bug. Thumbnails
and Matts-attributed verdicts were already consistent across all six.

**1. `A.deepResearch` label gains OPTIONAL.** It already carried the Blue Peter icon and a
note explaining it is the fallback when a Deep Research quota is spent. Only the label was
out of step.

**2. Attach strip on 03 step 2.** It already said "[attach Sustainable-Futures-en.pdf]" and
the plan was already on its card, so this was the identical situation to 04 and 06.

**3. Canvas icon on 03 step 1.** That step says "Turn Canvas on in the Tools menu, under the
box where you type", word for word what 06 step 4 illustrates. **This needed a real fix
rather than a copy:** `AttachStrip` assumed a control always followed at least one file, so
it would have rendered a dangling "then enable" with nothing before it. Now `items` defaults
to empty, the strip renders when either files or a control are present, and the joiner is
suppressed when there are no files. 03 step 1 reads **`ENABLE [Canvas]`**, verified with no
stray "then".

**4. Exercise 02's picture is now a download card.** Step 1 said "Right-click the picture
below, Save image as", the most awkward instruction on the site. New `A.studySpace` artifact
pointing at the file already served at the site root, using itself as its thumbnail, plus an
attach strip. Body is now "Download the picture from the card above, attach it with the
paperclip, and paste the prompt." **The picture stays in the step at full size**, because
the exercise works from it. Shows DOWNLOAD only, correctly: it is already on screen, so VIEW
IN BROWSER would be redundant.

**5. Duplicate SKILL 3 fixed.** `mattsBrandSkill` and `factCheckSkill` were both "SKILL 3".
The fact-check skill, which is linked from no exercise, is now SKILL 4.

**6. Matt Hayden's Copilot prompt gets one bolded line, and this is the sensitive one.**
`promptEmphasis: 'CRITICAL SEPARATION RULE'` on 01 step 4. That prompt is 7,085 characters
over 133 lines and is the only one on the site that still scrolls badly; line 5 is **his own
all-caps heading**. **Display only, and proved rather than asserted:** intercepting
`navigator.clipboard.writeText` shows the copied string is **exactly 7,085 characters, no
markup, and identical to the rendered `textContent`**. The MH block sha256 is unchanged at
`e4f80823...`, checked by anchor. Nothing he wrote has moved.

**7. The memo gains Chris's job**, at Matt's request: "I got a new job as Sustainability
Engagement Officer". Repeating the role from the sign-off is the joke rather than a slip.

**8. The Useful Prompts card is removed from the gallery**, also at Matt's request. Removed
32 lines of `.library-strip` CSS that this orphaned. **Flagged: `PROMPT_LIBRARY` and the
`#/prompts` route still exist and still work, but nothing on the site links to them any
more.** That is a whole page of content now reachable only by typing the URL. Not deleted,
because removing the card is not the same instruction as deleting the library.

`?doctor` reports 18 files all 200, with the Canvas icon now against **03 and 06**.

---

## 2026-09-06 (addendum 87): the Cardiff brand skill tested, and settled

Matt ran the rebuilt skill in Gemini Notebook with the same one-line description Exercise 05
ships ("Training slide deck on the Demand First ladder, so staff can apply it in practice.")
and dropped the output back: `~/Downloads/Demand_First_Purchasing (1).pdf`, 13 slides,
1376x768, image-only like the earlier two. His verdict first: "it was amazing".

**The identity check, before reading a single slide.** The spec text he pasted into the chat
is **byte-identical** to `public/placeholders/Cardiff_Brand_SKILL.md`, 4,684 characters, and
re-running `tools/make_artifacts.py` reproduces that file exactly. So this deck is the output
of the file the site actually hands out, not of a variant edited on the way. Exercise 05
step 2 already carries that description line verbatim as its `prompt`, and step 4 repeats it
for the Matts run, which is what keeps the two decks a controlled comparison.

**All nine claims from addendum 62 landed.**

| # | Claim | Result |
|---|---|---|
| 1 | Illustration appears, no cartoons | **Pass.** Six illustrated slides: a stepped ladder, a decision flow, a three-card icon grid, a circular lifecycle, a timeline, a scored table. Line icons only. |
| 2 | The grey is gone | **Pass.** White ground throughout, black hairline rules, red as an accent. No grey wash, no grey boxes standing in for diagrams. |
| 3 | No empty content slides | **Pass.** Every content slide carries a diagram or a table plus its footer. |
| 4 | Dividers are sans, not serif | **Pass.** The one divider is bold sans, white on Cardiff red. |
| 5 | Welsh dividers still fire | **Pass.** "Ymarfer / Practice", Welsh above English, one word each. Regression check clean. |
| 6 | **A task slide exists** | **Pass, and this was the load-bearing one.** Slide 10, "Test your next purchase", a red-ruled panel with an 8-minute limit and ruled writing lines, asking for one item they plan to order this month. |
| 7 | Comparison slides with a pass and a fail side | **Pass.** Slide 7 splits Pass and Fail with red on the fail; slide 4's flow has a red No to Stop branch; slide 11 scores four real scenarios Pass or Fail. |
| 8 | Every content slide ends with a footer takeaway | **Pass.** Ten of ten. |
| 9 | The brand still holds | **Pass.** Bilingual logo on the title slide, architecture cover, Cardiff red used sparingly, left aligned, inside 40 words. Moving the non-negotiables to the top did not cost anything. |

**The layout-pattern theory is confirmed.** Naming two content layouts, rather than writing
better prose about quality, is what turned a briefing into training. The old Cardiff deck had
no exercise in it at all; this one has an exercise, a worked scenario table and a decision
flow, and it did that while getting *shorter*. That is the addendum 62 lesson holding up
under test: structure beats adjectives, and fewer rules beat more.

**Two cosmetic notes, neither worth a rule change.**

- Slide 7 reads "you **must** must justify it and offset it locally". A duplicated word from
  the generator, not from any line in the spec. Worth fixing in the exported file if Matt
  presents this deck; nothing to fix here.
- The closing slide sets "Prifysgol Caerdydd / Cardiff University" as centred text rather
  than the logo lockup. The Welsh-above-English rule fired, the logo did not. One slide, and
  chasing it would mean adding a rule.

**Decision, taken against the criterion written before the test rather than after it.**
Addendum 62 said: if most of 1-8 land, the skill is done, say so and stop editing it. All
nine landed. `Cardiff_Brand_SKILL.md` is **settled**. Do not edit it, and treat any future
request to "improve" it as needing a new controlled run first. `CLAUDE.md` updated from
"untested" to match.

---

## 2026-09-06 (addendum 88): the Canvas prompt confirmed against a working run

Matt ran the Exercise 06 step 4 Canvas prompt: "we have the canvas prompt and it works
amazing so don't change it". He pasted his final version back to be checked against what
the site ships.

**Verified identical.** Extracted the single-quoted literal from `src/data/missions.js`
(9,666 characters, no stray escapes), stripped blank lines from both, and diffed:
**159 non-blank lines each, identical line for line**, including `÷`, `×`, the en-dash in
"60-80%", and every curly quote. The site ships the prompt that was tested.

The only difference is whitespace: his pasted copy carries a blank line between every
bullet, which is how it rendered coming back through the chat. The card deliberately keeps
bullets tight, because he asked earlier the same day to reflow prompt 1 so the box does not
grow a vertical scrollbar. **Left as is**; adding 158 blank lines would roughly double the
card's height for no gain.

**Do not edit this prompt.** It is now in the same category as `Cardiff_Brand_SKILL.md` and
the `MH_*` constants: tested in a real run, and any change needs a new run to justify it.
To re-verify after any edit near it:

```python
line = pathlib.Path("src/data/missions.js").read_text().splitlines()[863]
txt = line.strip()[1:-2].replace("\\'", "'").replace("\\n", "\n")   # expect 9,666 chars
```

---

## 2026-09-06 (addendum 89): Exercise 06 gains a fifth step, and the exhibit is a fake

Matt confirmed Exercise 06 runs end to end, then asked for a new step 5 carrying the Blue
Peter icon and the dashboard the prompt actually produced, opening in a new page as it is.
He dropped `~/Downloads/animated_bubble_chart.html`, 62 KB, and asked me to compare it
against mine or check whether mine had not worked.

**Checked before shipping, and the finding changed the step.** The file embeds its dataset in
a `<script id="hesa-data-csv" type="text/csv">` block. Compared against the shipped CSV:

| | Embedded in the dashboard | `HESA_Estates_Workshop.csv` |
|---|---|---|
| Data rows | 180 | 307 |
| Institutions | 18 | 31 |
| Rows matching source exactly | **11 of 180** | - |
| Cardiff 2015/16 to 2024/25 Scope 1+2 | 32,450 to 13,200, **-59.3%** | 29,662.9 to 21,336.4, **-28.1%** |

**Every Cardiff row is invented**, and the invention flatters: it doubles the reported
decarbonisation. Buildings sit at a suspiciously flat 180 to 188 against a real 256 to 301,
and RenewablesPct climbs 0.1 to 3.5 where the source says 100. York is the tell: its first
six years are **exact** matches and only the last four are fabricated, and Aberystwyth's
first five match too. So the model read the real file, then drifted into generation partway
through. That is the silent-omission failure IFScale describes (addendum 62), caught in the
wild on our own prompt.

It also quietly ignored two more instructions: the deck renders **dark** where the prompt says
white background, and its own chip reads "Rank: #6 of 18" while the prompt says use every
university in the supplied dataset. The prompt's DATA INTEGRITY section is explicit ("Never
invent, replace, estimate, shorten, sample or manually retype figures") and its self-check
asks the model to confirm "no values were invented". **It confirmed, and it had.**

**Why this ships anyway, unmodified.** Exercise 06 is the exercise about checking figures in a
second tool. A dashboard that looks like a broadcast graphic and is quietly wrong is the best
possible closing exhibit for it, and a fabricated one we *made* beats any warning we could
write. The file is copied byte-for-byte (`cmp` clean) as `Example_Bubble_Chart.html`, because
the exhibit is what the tool actually did. **Never "fix" its data.**

**What was built**

- `A.exampleChart`, Blue Peter icon, label OPTIONAL: ONE WE MADE EARLIER, note saying plainly
  that its numbers do not match the file it was given.
- Step 5, 2 minutes, core: "Open the one we made earlier, then check it", naming Cardiff's real
  21,336 tonnes so the reader has one number to test it against.
- `estMinutesCore` 17 to 19, site total 77 to 79 minutes, and a fifth workflow chip.
- **`.html` handling in `ArtifactCard`.** An HTML artifact is a working page, so the buttons
  swap roles: **OPEN IT is the blue pill, DOWNLOAD drops to a ghost**. Derived from the
  extension (`isPage`), not a new data field, so there is nothing extra to keep in sync.
  Served same-origin as `text/html`, so a plain anchor renders it; no blob needed.

**Verified.** Build green. `?doctor` **19 files, all 200**, and it picked the new file up with
no change needed because step artifacts were already covered. The card holds **one button row
at 560, 480, 400 and 340px** with no horizontal overflow, which is the wrap regression that bit
twice before. Opened in the browser: it renders and animates. MH hash unchanged. `CLAUDE.md`
back to exactly 200 lines.

**Open question for Matt, not acted on:** whether to also ship a corrected build. Splicing the
real 307-row CSV into the same file is a ten-minute job, but it may break a chart written
around 18 institutions, and it would cost the exercise its punchline.

---

## 2026-09-06 (addendum 90): Cardiff Met labelled in the example dashboard

Matt: keep the rest as is so he can see the site, but Cardiff Met was showing as an unlabelled
grey dot. Cause: `Cardiff Metropolitan University` was already in the chart's `ABBREVIATIONS`
map as "Cardiff Met", but `renderLabels` drops any label whose bubble radius is under 12px
unless the institution is in `PRIORITY_LABEL_INSTITUTIONS`. Cardiff Met's estate is small
(98,745 m2 against Cardiff's 512,000 in this file), so it never cleared the threshold.

**Fix: one line**, adding `"Cardiff Metropolitan University"` to that priority list. **The
embedded CSV is untouched** and verified identical to the pre-edit file, so the exhibit still
carries exactly the invented numbers that make it worth showing. That is now the only
divergence from Gemini's output, and `CLAUDE.md` says so.

**Verified in the DOM, not from a screenshot.** The label renders at 9px beside the bubble in
grey, `opacity: 1`, `visibility: visible`, inside the chart bounds, overlapping no other label,
and present in 8 of 8 samples. A screenshot of this page is not evidence either way: the intro
fade is driven by requestAnimationFrame, an unfocused tab throttles it, and the whole plot
captures blank. Two probe attempts also failed misleadingly because `document.querySelector('svg')`
picks up an icon rather than the chart; scope label queries as `document.querySelectorAll('svg text')`
or via `ownerSVGElement`.

**New trap, cost a shell:** `pkill -f "vite preview"` matches the invoking shell too, because
that pattern is in its own command line, so the whole tool call dies with exit 144 and every
edit in it is lost. Kill by port instead: `fuser -k 4173/tcp`.

---

## 2026-09-06 (addendum 91): a corrected dashboard, built by a Fable subagent

Matt asked whether everything else was labelled, and for a Fable subagent to correct the data,
polish the visuals and see whether it could zoom in so crowded bubbles separate. He also said
it matters that he can **verify the data was included incorrectly**, so the fabricated build is
kept and the check is now reproducible.

**Labelling audit, answering the question directly.** After the Cardiff Met fix, all 18
institutions in the old build label in all ten frames. Nothing else was missing. But the
crowding he noticed is real and measurable: **11 to 19 overlapping label pairs and 29 to 46
touching bubble pairs per frame**, against a prompt that explicitly asked for collision
avoidance and 60 to 80% occupancy.

**`tools/verify_chart_data.py`** extracts the CSV a build embeds in itself and diffs it against
`HESA_Estates_Workshop.csv`. Exit 0 and IDENTICAL on a clean build, so it doubles as a
regression test. On the old build it prints 180 rows against 307, 18 institutions against 31,
11 of 180 rows matching, and 13 named institutions dropped. **The year-by-year Cardiff table
turned up something new: the error grows monotonically**, 1.6% out in 2016/17, 14.8% by
2019/20, 38.1% by 2024/25. With York's first six years exact and last four invented, that is
the same fingerprint twice: it read the real file, then drifted into generating plausible
continuations. Worth saying out loud in the room, because it means spot-checking the first few
rows of an AI's output is exactly the wrong check.

**`public/placeholders/Cardiff_Estates_Dashboard.html`**, 92 KB, built by the subagent.
Verified here rather than taken on trust:

- **Data identical**, confirmed with our own script, not the agent's: 307 of 307 rows, 31
  institutions, every Cardiff year exact.
- **Displayed figures recomputed from the CSV independently.** Energy intensity 222.0 kWh/m2,
  emissions intensity 40.0 kgCO2e/m2, floor 532,968 m2, rank 11 of 31, intensity down 39.1%
  while absolute emissions fell 28.1%, sector medians 44.4 and 225.0. All reproduce exactly.
  The two different percentages are correct and are a teaching point: intensity fell faster
  than absolute emissions because the estate grew.
- **Crowding fixed:** max **2** overlapping label pairs, down from 11 to 19. Every one of the
  31 institutions labels at some point, 27 to 31 per frame.
- **Missing data handled honestly:** Glasgow's absent 2015/16 emissions and Birmingham's
  three-year gap fade out rather than plotting as zero, trails break at gaps, and a footnote
  states the blank counts and says they are never filled in or interpolated.
- Zoom, pan, Reset view and Full range controls, and an honest "N outside view (names)" chip
  when the focus view crops an outlier such as Trinity Saint David.

**One correction to the agent's report.** It claimed 0 overlapping label pairs in every frame.
Measured in a real browser with real glyph widths it is **0 to 2**: its harness estimated text
width at 0.58 em per character. Still a large improvement, but its number was optimistic.
General lesson, and the reason the file was re-checked from scratch: it verified with DOM stubs
and never rendered the page.

**Not wired in.** `Example_Bubble_Chart.html` is untouched and still the artifact on Exercise 06
step 5. Matt decides whether step 5 keeps the fabricated one, swaps to the corrected one, or
shows both, which is the version that actually teaches the lesson.

---

## 2026-09-07 (addendum 92): Exercise 06 gains step 6, Always verify and repair

Matt's shape for the ending: step 5 stops being "check it against the CSV" and becomes **"Open
the one the Matts made earlier, then check it against yours"**, and a new step 6 tells the
story of the repair. He then cut the line naming Cardiff's 21,336 tonnes from step 5, which is
right: step 5 is now app against app, and handing over the answer would do the comparison for
the reader.

**Step 6, "Always verify, and repair if required".** The narrative is what actually happened
here: the first version of the app got the data slightly wrong and it flattered Cardiff, so the
HTML was downloaded, a new Gemini chat opened, and the app and the CSV attached together.
`Cardiff_Estates_Dashboard.html` is the card on that step, labelled THE SAME APP, REPAIRED.

**One thing added that Matt did not specify:** a repair prompt, because every other acting step
in 06 carries one and "attach both and ask it to fix" is not runnable on its own. It tells the
model the CSV is the only source it should trust, to list what does not match before rebuilding,
and never to retype, round or fill in a figure. Cut it if it is not wanted.

**`html_icon.svg`**, new, drawn to match `skill_md_icon.svg` exactly (same page and folded
corner geometry, same 96x120 box) so the two read as a set: HTML orange band, angle brackets
where the markdown icon has bullets. Renders 26x33 in the strip, identical to the Excel icon.

**`A.yourChart` is not a download.** It exists only so the attach strip can show
`your-dashboard.html`, the reader's own Canvas export, which we cannot supply. Its
`downloadPath` points at the repaired file purely so `?doctor` has something to HEAD. If anyone
ever puts it on a card as an artifact, that path is wrong: fix it then.

**Two real defects caught in the browser, both worth remembering.**

1. **`promptEmphasis` silently did nothing.** The substring ended in a full stop where the
   prompt has a comma, so `indexOf` missed and it degraded to no emphasis, exactly as designed.
   The design is right, but it fails *quietly*: nothing in the build or the preflight notices.
   **Always confirm the bold actually rendered**, and assert the substring is present in the
   prompt string, which is now a two-line check worth repeating.
2. **The preview served a stale bundle.** `vite preview` was started before the rebuild, so the
   page held `index-dqUA8l7i.js` while `dist/` had `index-BcF9C6Sz.js`, and the first
   "the bold is still missing" reading was false. **Check `script[src]` matches the bundle the
   build just printed** before believing a negative result from the browser.

**Verified.** COPY writes 318 characters, no markup, identical to the rendered `<pre>`, so the
emphasis is display-only on this prompt too. Build green, `?doctor` **21 files all 200**,
6 steps, attach strip one row with no overflow, MH hash unchanged, `CLAUDE.md` back to exactly
200 lines. Exercise 06 is now 22 minutes and the site total is 82.

---

## 2026-09-07 (addendum 93): the attach strip reads NEW CHAT, then the paperclip

Matt, on step 6: "new chat then paperclip". The strip always drew the clip first, so it read
`clip NEW CHAT file`, which puts the attaching before the thing you do first.

**Rule now in `AttachStrip`:** a **custom** `attachLabel` names what happens before attaching,
so it leads and the clip follows it. A **default** label (ATTACH THIS / BOTH / ALL) is itself
the attach instruction, so the clip still leads. Implemented as
`labelFirst = Boolean(label) && items.length > 0`.

This also fixes **Exercise 06 step 4**, which Matt asked for in the same words on 2026-09-05
("jus t tune the order New Chat then paperclip") and which had been built clip-first. Both
NEW CHAT strips now match. The `items.length > 0` guard keeps **Exercise 03 step 1** as it was,
`clip ENABLE [Canvas]`, because nothing is attached there and a paperclip after ENABLE would
promise a file that does not exist.

`.attach-strip__label` margin-right 0.15rem to 0.35rem, so the label does not crowd the clip
now that it sits in front of it.

**Verified in the browser**, with the loaded bundle checked against the one the build printed,
after yesterday's stale-bundle false negative. Rendered order:

| Where | Order |
|---|---|
| 06 step 2 | CLIP, ATTACH THIS, csv |
| 06 step 4 | NEW CHAT, CLIP, csv, then enable, Canvas |
| 06 step 6 | NEW CHAT, CLIP, your-dashboard.html, +, csv |
| 03 step 1 | CLIP, ENABLE, Canvas |
| 03 step 2 | CLIP, ATTACH THIS, pdf |

All one row, no overflow. **Trap seen twice today:** changing the hash on this SPA does not
re-render if the route is already mounted in the way the probe expects, so a query can report
the previous exercise's DOM. Reload after changing the hash before trusting what you read.

---

## 2026-09-07 (addendum 94): Exercise 06 down to five steps, and a reusable verification prompt

Matt: combine steps 1 and 2, turn the old step 3 into a Verify and repair step to rhyme with
step 6, and research a **reusable** prompt for it that includes Responsible AI, because the
human check is part of it.

**Five steps now**, 21 minutes, site total 81.

| # | Step | Min |
|---|---|---|
| 1 | Attach the data and run the prompt (old 1 and 2 merged; the prompt and the file arrive together, which is how anyone actually does it) | 6 |
| 2 | **Verify and repair the numbers** | 4 |
| 3 | Build the dashboard in Gemini's Canvas | 6 |
| 4 | Open the one the Matts made earlier, then check it against yours | 2 |
| 5 | Always verify, and repair if required | 3 |

The two verify steps are deliberately parallel: step 2 verifies the analysis, step 5 verifies
the app. Same habit, twice, at different scales.

**The prompt was researched, not guessed, and the research changed it.** The old wording was
"Pick the single most important number ... show how you calculated it". Searching turned up
that the instinctive framing, asking a model to check its own work, is actively harmful:

- **Intrinsic self-correction degrades accuracy.** Prompting a model to review its own answer
  with no external signal does not reliably fix reasoning errors and often makes them worse,
  and adding rounds of self-critique makes it worse still. Huang et al., *Large Language Models
  Cannot Self-Correct Reasoning Yet* (arXiv 2310.01798); Kambhampati et al., *On the
  Self-Verification Limitations of LLMs* (arXiv 2402.08115).
- **"Are you sure?" flips correct answers to incorrect ones**, by lowering confidence rather
  than finding errors.
- **Extrinsic verification does work:** feedback from an external tool or the source itself.
  CRITIC runs a verify-then-correct loop with a Python interpreter for arithmetic and a search
  API for facts.

So the prompt now opens **"Do not review your own answer. Recompute it from the source."**,
which is also its `promptEmphasis`. It then asks for the figure to be recomputed with code, a
second independent method, an explicit **UNVERIFIED** list for anything not checkable against
the file, and a statement of what changed. That is a self-review converted into a tool-grounded
recomputation.

**Responsible AI, and it is also UK law.** `docs/PROMPT_GUIDANCE_2026.md` records that under
the Data (Use and Access) Act 2025, **rubber-stamping an AI output is not meaningful human
oversight** (cf. Schufa). So the human check is written into the prompt as an instruction with
teeth, "Show your working so a person can follow it and disagree with it. I am signing this
off, not you.", and the step body says a rubber stamp does not count. Better than a disclaimer,
because it changes the output shape rather than just warning the reader.

**Reusable by construction: it contains no placeholders.** No brackets to edit, nothing about
Cardiff, HESA or emissions. It works on any AI analysis, which is why the note under it reads
"[keep this one, it works on any AI analysis]". A prompt with nothing to swap is more reusable
than one with swap points.

**Verified.** Build green, five steps in the right order, the bold line renders, COPY writes
573 plain characters identical to the `<pre>`, strips unchanged, `CLAUDE.md` still 200 lines.
Logged to `~/.claude/llm-learnings.md` with the sources.

**Worth reusing elsewhere:** `PROMPT_LIBRARY` should carry this check if that page is ever
relinked (open item 3), since it is the most portable thing on the site.

---

## 2026-09-07 (addendum 95): the check moves to a fresh chat, and becomes SKILL 5

Matt spotted that step 2's body no longer matched what it asked for, and asked the right
question: should the verification prompt run **in the same chat**? He guessed a new chat would
be better but could not see how to carry the figure across. He also asked to look for a
skills.md for verifying and repairing a data analysis.

**A fresh chat is better, and the research says why.** Two mechanisms, not one:

- **Anchoring.** In the original chat the model's first answer is the anchor for everything
  after it, so a check inside that chat is scored against the wrong reference.
- **Self-preference bias.** Models rate their own output higher than comparable text from
  elsewhere (arXiv 2410.21819). The load-bearing detail: **when a model does not know the
  authorship of what it is evaluating, that bias nearly disappears** (Cross-Context Review,
  arXiv 2603.12123). A fresh chat anonymises the work for free.

**So the anonymity is the mechanism, and that answers Matt's practical worry.** You do not need
to carry the analysis across. You carry **one line**: the figure and what it claims. And you
must **not** say where it came from. Saying "check this AI output" or "I think this is wrong"
hands the authorship back and undoes the whole thing. That is now the step's body and the
prompt note, and it is written into the comment above the prompt so nobody "helpfully" adds
context later.

**Step 2 rebuilt:** NEW CHAT attach strip with the CSV, prompt opening
**"Recompute this from the attached file."** (also its `promptEmphasis`), a
`FIGURE TO CHECK: [paste the number and what it claims]` slot, and the same four demands:
recompute with code, a second independent method, an UNVERIFIED list, a plain verdict. 4 to 5
minutes, so 06 is 22 and the site 82.

**`Verify_And_Repair.md`, SKILL 5**, 3,340 chars, generated by `tools/make_artifacts.py` and
carded on step 2 as the long version to take away. This is the first skill Exercise 06 has had,
and it suits the site's thesis: the check is a habit worth writing down, not a prompt to
remember. It covers running it in a fresh chat and why, one figure at a time, recompute rather
than review, how to repair (state what changed, repair the figure not the story, rebuild from
source values, blanks stay blank), what not to do ("are you sure" makes it worse), a ledger
format, and the human sign-off. **Note it is untested**, like every skill here before its first
real run: treat it as a draft until Matt runs it.

The house skills are **not** Anthropic Agent Skills, which are folders with YAML frontmatter,
progressive disclosure and optional scripts. Ours are single .md files pasted or attached into
Gemini and Copilot. The frontmatter block is kept because it reads as a name and a description
to a human, not because any runtime consumes it. Worth not confusing the two in the room.

**Verified.** Build green, `?doctor` **22 files all 200**, bold renders, card is one button row
with DOWNLOAD, COPY and VIEW IN BROWSER, strip reads NEW CHAT then paperclip then the CSV,
`CLAUDE.md` back to exactly 200 lines. Sources added to `~/.claude/llm-learnings.md`.

**`Fact_Check_Cardiff.md` is still linked from nowhere** and now overlaps this one: it verifies
claims against sources in prose, where SKILL 5 verifies figures against a data file. Decide
whether to link it, merge it, or retire it. Open item 4 is now slightly worse, not better.

---

## 2026-09-07 (addendum 96): p1 hands p2 one line, and p2 runs on the skill

Matt's shape: p1 runs in Copilot, p2 verifies in Gemini using the skill, and p1 should emit
something extra that makes p2 easy. He wanted the extra to be generic enough to paste into any
data analysis, without overloading the workshop prompt.

**One output, not a section.** Prompt-engineering term for it is answer shape: a fixed,
labelled terminal line the next step can consume without interpretation. Added as item 4 of the
p1 prompt:

> End with one line labelled KEY FIGURE: the single number this analysis turns on, with its
> unit, the period or group it covers, and what it shows, written so that someone with only the
> data file could check it.

Why this shape: it forces a **definition** (measure, unit, period or group) and a **claim**, and
deliberately not the **method**. A verifier handed the method tends to replicate it; the skill
asks for two independent routes, so the method stays out. "Someone with only the data file" is
the falsifiability test written as a sentence. Nothing in it is about Cardiff, HESA or emissions,
so it pastes onto any analysis prompt as it stands.

**p2 now attaches the skill rather than restating it.** NEW CHAT, paperclip, `Verify_And_Repair.md`
+ the CSV, and a two-line prompt: "Follow the attached skill file as your instructions."
(the same load-bearing line Exercise 04 uses, and its `promptEmphasis`) then
`FIGURE TO CHECK: [paste the KEY FIGURE line here]`. The bracket text says nothing about which
tool produced the line, on purpose: the anonymity from addendum 95 is the mechanism.

The skill card stays on the step so the file can be downloaded to attach. Its note changed from
"the long version to keep" to "Attach it and it does the checking", because that is now its job.

**Verified.** Bundle checked against the build, p1 prompt ends on item 4, p2 bold renders, strip
reads NEW CHAT then clip then skill + CSV with no overflow, card one button row. `?doctor` count
unchanged at 22 because both attached files were already known to it.

---

## 2026-09-07 (addendum 97): the way home moves into the black bar

Matt: the site's look is right but "← ALL EXERCISES" above the title "looks so bad", remove
it, brainstorm first. Diagnosis: it was the last black stroke on the exercise pages, a bold mono
caps pill with a 2px border, a survivor of the escaperoom skin. Three options were put up; he
chose **A, the wordmark is home, but discoverable**.

First cut kept a quiet sentence-case "← All exercises" on the page. He did not like that either
and asked for the control to live **in the black bar, spelled out**. So:

- `AI IN THE WORKPLACE PART 2` in the bar is now a link to the gallery, underlined on hover.
- On exercise pages (`compact`) the bar also carries **"← Return to all exercises"** at the
  right: sans, sentence case, white text, a 1px white hairline pill on black, the inverse of
  the ghost buttons below. Fills white on hover.
- The on-page link is gone entirely. The post-verdict "All exercises →" stays, restyled to
  sentence-case sans in the accent.

**Two traps hit while verifying, both already in the log, both bit again.**

1. **Stale bundle.** Navigating to a hash URL does not refetch `index.html`, so the tab kept
   the previous build and reported the old link still present. Check `script[src]` against the
   bundle the build printed, then `location.reload()`.
2. **Frozen exit animation.** After a real click on the home link the hash flipped to `#/` but
   the exercise page stayed in the DOM at `opacity: 0.243`, mid-exit. `document.hidden` was
   true: an unfocused tab throttles rAF, and `AnimatePresence mode="wait"` will not mount the
   gallery until the exit completes. Routing was fine. **A stuck page transition in a
   background tab is not evidence of a routing bug.**

**Verified** on the right bundle: old link absent, control inside the bar, 24px from the right
edge, `href="#/"`.

---

## 2026-09-07 (addendum 98): Exercise 06 split into The Story and a Bonus exercise

Matt: snapshot first, then split 06. **06 becomes data storytelling** (the Canvas build, the
comparison with ours, the repair), titled **The Story**. The analysis half (run in Copilot,
verify in Gemini with the skill) becomes a **Bonus exercise**, reached from a slim white card
that spans the full width of the card grid, headed **BONUS EXERCISES** in **Cardiff red**.
Decisions taken in plan mode: the card opens a proper exercise page (`#/bonus1`), the red is
brand `#E4251B`, the bonus is excluded from the tally and the core-time total, and 06's page
title is *Turn Ten Years of Real Data Into a Story You Can Show*.

**Snapshot:** tag `snapshot-2026-09-07-pre-split` on `ed595be`, and
`snapshot-gallery-pre-split.jpg` at repo root, untracked like the other images.

**What moved where.** Old steps 3-5 (6+2+3 = 11 min) stay on `m6` with new title, summary,
tools (Gemini + Canvas only), feature line, workflow and brief. Old steps 1-2 (6+5 = 11 min)
move verbatim to `bonus1`, which reuses 06's old page title, feature line and brief because
they already described exactly that half. One copy fix: old step 3 said "with the CSV attached
**again**", which as a first step follows nothing; "again" is gone. The old two-sentence
verdict split one sentence each way: Matt's storytelling line stays on 06 with a second clause
about checking, and "Ask for the code..." goes to the bonus. **Flag for Matt:** he wrote the
storytelling sentence, so if the added clause is unwanted, cut it.

**The strip already existed.** Exploration found the full-width white card under the grid was
the prompt-library strip deleted in `4eeef36`. Its CSS came back from git as `.bonus-strip`:
white, hairline border, card radius, hover lift. The label is a red eyebrow (`--cardiff-red`,
appended to `:root` at the end of the stylesheet), the only brand red on the site, so blue
stays the colour of things you press. It sits outside the grid, so full width needs no
`grid-column` trick, and it renders one row per bonus mission.

**The one thing the split would have broken, and did not.** The gallery counted
`MISSIONS.length`, so a seventh member would have read "0 of 7". `bonus: true` on the mission
plus `main = MISSIONS.filter(m => !m.bonus)` for the grid and all three tally usages keeps it
"n of 6". The bonus stays inside `MISSIONS` deliberately: `getMission` finds it by id with no
router change, and `?doctor` iterates the array so its files stay preflighted. It has
`code: 'B1'` because the doctor labels rows by code, and the detail eyebrow gained a
`mission.bonus` branch reading BONUS EXERCISE instead of EXERCISE B1.

Completing the bonus still writes `progress['bonus1']` and reveals its verdict; the gallery just
does not count it. Nothing else in `MissionDetail` needed to change.

**Verified** on the built bundle: MH hash unchanged, gallery 6 cards and "0 of 6", strip width
identical to the grid's 1,320px and left-aligned to it, label `rgb(228, 37, 27)` in sans,
no overflow; `#/bonus1` shows BONUS EXERCISE, two steps, both attach strips, both bold lines,
the CSV card and the return control. `CLAUDE.md` back to exactly 200 lines, with the stale
`TaglineBar` note fixed on the way.

**Trap, again:** clicking the strip flipped the hash but the detail page did not mount in the
hidden tab, because the gallery's exit animation froze mid-way. Reloading straight onto the
route is the reliable check.

---

## 2026-09-07 (addendum 99): Matt ran the repair prompt, and Gemini repaired nothing

Matt ran Exercise 06 step 3 (attach the fabricated dashboard plus the CSV, "check every number
in the app against the CSV ... then rebuild the file using the CSV values only") and brought
back `animated_bubble_chart (2).html` with Gemini's "Audit Findings and Discrepancies": eight
RenewablesPct cells, Bangor 2015/16 and 2016/17 and York 2015/16 to 2020/21, "empty in the
HTML, corrected from the CSV".

**`tools/verify_chart_data.py` on the returned file: identical result to the original.** 180
rows against 307, 18 institutions against 31, 11 of 180 matching, Cardiff 38.1% off by
2024/25. Then the direct comparison: **the returned file is byte-identical to the original
download**, and a cell-by-cell diff of the embedded CSV finds **zero changes**.

The eight claimed corrections fail twice. They are not in the file (all eight cells are still
blank). And the "CSV values" it claims to have read are not in the CSV: Bangor's RenewablesPct
is `0` for both years, not 0.2 and 0.5, and all six York cells are **blank** in the source, not
0.3 rising to 1.6. So it invented source values, then reported having applied them, to a file it
did not touch, while saying nothing about the 169 altered rows and 13 missing universities that
are the actual defect.

**Why this is the best exhibit the exercise has.** It is both failure modes from addendum 62 in
one message: silent omission of the real problem, and confident confirmation of work not done.
And it looks diligent: a numbered list, specific cells, a tidy before-and-after. The shape of a
careful answer with none of the substance. This is the thing step 3's verdict is about, and the
reason the step's card carries *our* repaired `Cardiff_Estates_Dashboard.html`, which passes
the same check with exit 0.

**Open question for Matt**, not acted on: did Gemini return a downloadable HTML at all, or only
the audit text (with the attached file being the original, re-saved)? If the latter, the repair
prompt should say "return the complete corrected HTML file" explicitly, since "rebuild the file"
was read as optional. One line; waiting on the answer before changing a tested prompt.

---

## 2026-09-07 (addendum 100): the repair rebuilt the app, but Canvas showed it as code

Answering addendum 99's open question. Matt's repair run did rebuild the app, in a new chat
with Canvas enabled, but Gemini output the corrected HTML as a code block in the chat rather
than rendering it in the Canvas panel, unlike the original build. That is also why the file he
brought back was byte-identical to the input: there was no rendered app to download, so the
attached file was the original.

His web search found the cause: uploading an existing HTML file into a new chat makes Gemini
treat it as a code asset rather than start a Canvas session, so it answers with a markdown code
block. The fix is to ask for the workspace explicitly.

**Changes to Exercise 06 step 3**, a tested prompt edited on evidence:
- The repair prompt now opens: "Open a Canvas workspace for the attached HTML file and rebuild
  it there, so it runs as an app rather than showing as code in the chat." The rest is
  unchanged and `promptEmphasis` still matches.
- The attach strip gains the Canvas control, so it reads NEW CHAT, clip, your-dashboard.html +
  CSV, then enable Canvas, matching step 1's strip.
- The prompt note reads "[Canvas on, then attach your saved HTML and the CSV]" and the body
  says the new chat had Canvas on, because that is what happened.

Untested in the new form: Matt runs it next.

---

## 2026-09-07 (addendum 101): Responsible AI endings, and one line of human augmentation

**A Responsible AI closing step now ends 03, 04, 05 and 06.** Each is one sentence, one
minute, and specific to what that exercise just built rather than a generic warning:

- 03, the game: nobody has reviewed this code, keep real or personal data out, and a public
  Canvas link is not university hosting. It picks up the stretch step that already says the
  share link is not university hosting.
- 04, the module: the human value is in the review and the improvement.
- 05, the brand: AI branding will not be as good as a human designer, so use it for low-risk
  work like that internal presentation, not anything public facing.
- 06, the story: human evaluation is a key part of the workflow, but AI can still augment it.

Core step time is now **75 minutes** (10 / 12 / 12 / 13 / 16 / 12), bonus excluded.

**Exercise 04 step 3 is now Review and Augment**, retitled from "Review the gap note at the
bottom". The gap note stays in the body as where to start, and the workflow chip follows. The
augment line was first written into 03 by mistake, then moved.

**The training skill gained one line, and only one.** Research on AI-drafted training says the
same thing repeatedly: the model gives you the first 80%, and the human jobs are the local
example, the real case and the terminology. The risk was that asking for augmentation ideas
would invite the model to draft the missing content, which the skill spends three paragraphs
preventing. The constraint that makes it safe is **name the action, not the content**, capped
at a single line so the module does not become an account of what is missing:

> Close the gap note with one line beginning **a person could**: the single change a human
> would make that improves this training most, such as a local example or a real case from
> their own team. One line, and name the action, not the content.

`Training_Module_Builder.md` went 3,886 to 4,129 characters, still under the 4,900 ceiling.

**Tested the same day.** Matt ran it on the sustainability plan and the note closed with:
"a person could replace the fictional walkthrough with one completed, anonymised purchase from
a Professional Services team and show the evidence used at each Demand First step." One line,
an action, a named source of the material, and no invented policy. It landed at the end of the
gap note, not floated into the module.

**Open, if it annoys anyone:** that run's gap note ran to eighteen bullets plus a paragraph on
teaching conventions, so the augment line is the last thing on a long list. Capping the gap
note itself is a separate change and has not been made.

---

## 2026-09-07 (addendum 102): the dashboard now fits the screen it is shown on

Matt: the Canvas dashboard looks superb but the room has to scroll to see it. Measured before
touching anything: **the page was 1,148px tall at every window size**, because
`#chartContainer` carried `min-h-[480px] md:min-h-[560px]` and nothing in the layout responded
to viewport height. On a 1366x768 laptop that is 490px, about 43% of the page, below the fold.

Everything except the chart cost **588px**: body padding 48, header title block 120, KPI grid 99,
narrative 50, header margin 16, main padding 40, legend bar 94 (its circles are drawn from the
bubble radius scale, hence 69px tall), provenance 33, footer 78.

**Three changes, one file, no data touched:**

1. **Fit to window**, guarded by `@media (min-width: 1024px) and (min-height: 560px)`:
   `body { height: 100vh; overflow: hidden }`, `main` and `#chartContainer` flex to fill, the
   fixed `min-h-*` reduced to a 200px floor. Phones and very short windows keep scrolling instead
   of clipping, verified at 390x700.
2. **Two compaction tiers** in the existing `<style>` block, `max-height: 1100px` and
   `max-height: 750px`: smaller title, tighter card padding, thinner footer, and the subtitle
   held to one line. Nothing hidden, nothing reordered, per Matt's choice.
3. **Bubble radius derives from height as well as width**:
   `Math.max(14, Math.min(width > 768 ? 34 : 24, height / 14))`. A short chart no longer fills
   with overlapping circles, and the external legend shrinks with it because
   `renderExternalLegend` reads the same scale.

**Measured after, probe iframes, no scrolling at any of them:**

| viewport | page height | chart |
|---|---|---|
| 1280x600 | 600 | 252 |
| 1366x657 | 657 | 302 |
| 1440x731 | 731 | 365 |
| 1536x722 | 722 | 358 |
| 1920x950 | 950 | 491 |
| 1920x1150 | 1150 | 562, uncompacted, exactly as it looked before |

**The subagent's tier 1 breakpoint was 900px and I raised it to 1100.** At 900 a 1080p laptop
(about 950px of usable page) fell outside compaction and the chart dropped to 362px, shorter than
the 560 it used to have. At 1100 that screen gets 491 and the deck-sized window still gets 562.

**A trap worth keeping.** The subagent's first write went through Python text mode and silently
rewrote the embedded CSV's CRLF line endings to LF. `tools/verify_chart_data.py` still said
IDENTICAL, because it parses the CSV rather than comparing bytes. It caught itself and redid the
edit in binary mode. **Read and write that file as bytes.** Byte check against HEAD:

```bash
python3 - <<'EOF'
import re, subprocess
new = open('public/placeholders/Cardiff_Estates_Dashboard.html','rb').read()
old = subprocess.run(['git','show','HEAD:public/placeholders/Cardiff_Estates_Dashboard.html'],
                     capture_output=True).stdout
pat = re.compile(rb'<script id="hesa-data-csv".*?</script>', re.S)
print(pat.search(new).group(0) == pat.search(old).group(0))
EOF
```

---

## 2026-09-07 (addendum 103): why the bubbles stopped overlapping, and the honesty cap

Matt, on seeing the fitted dashboard: the bubbles used to overlap and now they touch, so are the
values still right? Fair question, and the answer needed evidence rather than reassurance.

**The bubbles were never drawn purely where the data puts them.** `separateBubbles` relaxes
collisions: it pushes overlapping bubbles apart, up to a cap, and `renderTethers` draws a grey
line back to the true position for anything moved more than 4px. Cardiff and the comparator are
anchored and never move. Smaller radii mean fewer collisions, so the separation succeeds where it
used to give up, which is exactly what Matt saw.

**The values are exact.** Every institution's plotted energy intensity, emissions intensity and
floor area was compared against `HESA_Estates_Workshop.csv`, recomputed independently, for
2015/16 and 2024/25: **zero mismatches** to 1e-9 relative, 30 and 31 institutions. Cardiff
2024/25 reads 222.0388 kWh/m2 and 40.0332 kgCO2e/m2 against 222.039 and 40.033 from the file.

**But the fit made one thing worse, and that is now fixed.** The nudge was capped in *pixels*
(`r * 1.2 + 10`). A shorter chart has fewer pixels per kgCO2e/m2, so the same nudge became a
bigger lie: worst case went from 6.4 to 9.66 kgCO2e/m2, and Exeter sat 24% above its true
emissions intensity. Two changes:

- **The cap is now expressed in data units**: `separateBubbles(frame, box, Math.abs(sy(10) - sy(13)))`,
  so no bubble is ever drawn more than **3 kgCO2e/m2** from where its number puts it, at any
  window size or zoom level.
- **Clamp then cap, not cap then clamp.** The edge clamp used to run last and could push a bubble
  past the cap: 5.06 kgCO2e/m2 measured at 2015/16. Reordered, so a bubble on the edge is clipped
  by `plotClip` rather than shoved inwards.

Measured after: max vertical error **exactly 3.00** at every year and both window heights, max
horizontal 1.97 kWh/m2 short and 3.66 tall. The trade is more overlap where the sector bunches up
in 2024/25 (21 pairs at 1366x657), which is the honest picture.

**And it now says so on the page**, appended to the provenance line under the chart: "Where
bubbles collide they are nudged apart by at most 3 kgCO2e/m2, with a grey line back to the true
position; Cardiff and the comparator are never moved." Exercise 06 is about checking what a tool
tells you, so the exhibit should not have an unstated layout fudge in it.

---

# HANDOVER, end of 2026-09-05

Read this first. It supersedes the earlier "OPEN" block, which is folded in below.

## Where the site is

Six exercises, **77 minutes** of core steps (10 / 12 / 11 / 12 / 15 / 17). Build green,
`?doctor` reports **18 files all 200**. `main` is **66 commits ahead of `origin/main`**, so
the live GitHub Pages site is badly out of date: it still shows the old hero, the old
tagline, the pre-rewrite skills and the old HESA file. **Do not push. Matt asks explicitly,
in that message, or it does not happen.**

Working tree is clean apart from two untracked contact sheets, `snapshot-deck-cardiff.png`
and `snapshot-deck-matts.png`, left out of git deliberately because they are 5 MB of binary.

## What changed today, in one paragraph each

**Exercise 05** dropped to one source, its own Exercise 04 output, and gained a fourth step
that re-runs the same prompt with `TheMattsBrandSkill.md` so the room sees two decks from
one source. It is marked internal ("Turn the Training Into **Internal** Slides That Look
Like Cardiff") because a deck that looks like Cardiff is not a deck Cardiff approved.

**Exercise 06 was rebuilt entirely.** It failed in a real run: Gemini refused the 13 MB,
346,050-row HESA workbook. Researched, not guessed: no context window fits that many rows,
and **Google's code execution tool documents CSV and text and does not list xlsx**. New
`tools/make_workshop_dataset.py` pivots it to **307 rows, 25 KB, 31 universities, ten
years**, and every facilitator answer key reproduces exactly. The exercise now runs Copilot
first, repeats in Gemini to cross-check, and ends with a 9,666-character Gapminder animated
bubble chart prompt in Canvas.

**The Cardiff brand skill was rebuilt on evidence** from two real decks Matt ran. Its six
layout patterns were all title compositions, so the model had no template for a teaching
slide and produced a briefing. Now 4,684 characters with two content patterns, a required
visual per slide and a footer takeaway.

**The whole site got a design pass**: the artifact card and prompt box finally got the skin
they had been missing, every download card carries a thumbnail, attach strips show what goes
in the chat box, and the prompt box gained a bolded key line.

## Open, in priority order

**Items 1 and 2 are BLOCKED ON MATT.** Both need him to run something and drop the output
back into the chat. Do not attempt either from this side, and do not edit the files they
concern in the meantime: the whole point is that the next change is evidence-led rather than
another untested guess.

1. ~~**BLOCKED ON MATT: compare the new Cardiff brand skill's output.**~~ **DONE 2026-09-06.**
   Matt ran it and brought back `Demand_First_Purchasing (1).pdf`. All nine claims from
   addendum 62 landed, including the load-bearing one: a task slide appears. The
   layout-pattern theory is confirmed and `Cardiff_Brand_SKILL.md` is **settled**. Scoring in
   addendum 87. **Resist adding rules** still stands if anyone reopens it.
2. ~~**BLOCKED ON MATT: run the new Exercise 06 end to end.**~~ **DONE 2026-09-06.** Matt
   checked all of Exercise 06 and it is good. The Canvas prompt is verified identical to his
   tested version (addendum 88), and its real output now ships as step 5 (addendum 89).
3. **`PROMPT_LIBRARY` is now unreachable.** The Useful Prompts card came off the gallery on
   request, but the data and the `#/prompts` route still exist. A whole page of content is
   reachable only by typing the URL. Decide: relink, or delete properly.
4. **`Fact_Check_Cardiff.md` is still generated and linked from no exercise.** Open since
   06 became the data exercise.
5. **CC BY attribution is nowhere on the site.** The HESA workbook is now a derivative we
   filtered and reshaped, and the licence asks for attribution and an indication of changes
   wherever it is distributed. It survives only in the facilitator guide and inside the
   `.xlsx`. The gallery's discreet governance footnote is the natural home if it matters.
6. **The 13 MB `HESA_Estates_Management.xlsx` is still in `public/placeholders/`**, unlinked,
   as the generator's input. It could come out of the deploy.
7. **`HESA_Estates_Workshop.xlsx` is also unreachable**, since the Excel link came off the
   card. Still generated.

## Rules and traps learned today. These cost real time.

- **Verify `MH_*` by anchor, never by line range.** A hardcoded `sed -n '111,291p'` drifted
  as comments were added above and cried wolf. Use:
  `start=$(grep -n "^const MH_DEEP_RESEARCH" src/data/missions.js | cut -d: -f1)` and
  `end=$(grep -n "^const MH_CANVAS_GAME" ...)`. Expect
  `e4f8082373927ce38d7d8b59c1352c51f4f77aab05e0c9e5636b1818fa26fabf`.
- **Prompt text lives in single-quoted JS strings.** An apostrophe breaks the build with
  `Expected "}" but found "s"`. Matt's own text usually uses **curly** apostrophes, which
  need no escaping, so paste his wording verbatim rather than rephrasing it. Build long
  prompts programmatically and verify from the clipboard, not by eye.
- **A new field naming a file or image must be added to `collectUrls` in `DoctorPanel.jsx`
  in the same commit.** This bit twice: `thumb` and then `attachExtra` both passed a green
  preflight while being invisible to it.
- **A new optional data field can wake dead code that reads it.** Adding `thumb` lit up a
  dormant branch in `MissionCard` and replaced the numerals on four gallery cards. `grep -rn
  "<field>" src/` before adding one.
- **Phrase-grep a hard-wrapped file only after `tr '\n' ' '`.** Three "FAIL missing" reports
  today were line wraps, not deletions.
- **Check a component at its longest and shortest content in the same pass.** A long note
  wrapped the artifact card's buttons onto a second row, which only showed on one exercise.
- **`npm run dev` is broken** with `ENOSPC: System limit for number of file watchers
  reached`. Use `npm run preview` (serves `dist/`, no watchers). The real fix needs sudo:
  `sysctl fs.inotify.max_user_watches=524288`, so ask Matt rather than working around it.
- **Screenshots of this site come out washed out** because an unfocused tab throttles
  requestAnimationFrame and framer-motion's fade never completes. Inject
  `*{animation:none!important;transition:none!important;opacity:1!important}` first.
- **`convert` on this machine is a metapub CLI, not ImageMagick.** Use `convert-im6.q16`.
  For icons on a white field, find the artwork **by hue**, not by thresholding the
  background: JPEG noise makes background thresholds unreliable at exactly the edges that
  matter.
- **`tools/make_workshop_dataset.py` is load-bearing for Exercise 06's prompts.** They
  hard-code `Energy_kWh`, `FloorArea_m2`, `Scope12_tCO2e`, "University of York" and
  "Imperial College London". The last two only match because the generator strips HESA's
  leading "The" and renames Imperial. Editing that script breaks the prompts silently.

## Standing constraints

- **Never `git push`** unless Matt asks in that same message.
- **`MH_*` constants are verbatim from Matt Hayden's deck.** Do not reword, retitle or
  reformat. `promptEmphasis` is display-only and was cleared for use, proved by clipboard
  interception showing 7,085 characters unchanged.
- Skills must stay **under 4,900 characters**: Gemini Notebook's Slide Deck box truncates
  silently at 5,000, prompt included.
- **UK English, no emdashes.**

---

# Traps, moved from CLAUDE.md

Moved here 2026-09-06 to bring `CLAUDE.md` back under the 200-line house limit. These
are the ones that have actually cost time in this repo, so read them before anything
fiddly.

- **Prompt text lives in single-quoted JS strings**, so an apostrophe breaks the build.
  Matt's own text usually uses curly apostrophes, which need no escaping: paste his wording
  verbatim rather than rephrasing it. Build long prompts programmatically, verify by copying.
- **A new optional field can wake dead code that reads it.** Adding `thumb` lit a dormant
  branch in `MissionCard` and replaced the numerals on four gallery cards. Grep first.
- **Phrase-grep a hard-wrapped file only after `tr '\n' ' '`.**
- **Check a component at its longest and shortest content together.** A long note wrapped the
  artifact card's buttons onto a second row on one exercise only.
- **Screenshots come out washed out**: an unfocused tab throttles requestAnimationFrame so
  framer-motion never settles. Inject
  `*{animation:none!important;transition:none!important;opacity:1!important}` first.
- **`convert` here is metapub, not ImageMagick.** Use `convert-im6.q16`. For icons on white,
  find the artwork by hue rather than thresholding the background.

---

## 2026-09-07 (addendum 104): Exercises 01 and 02 tuned to the Cardiff accounts, three MH prompts edited

Matt ran 01 and 02 on the Cardiff Gemini and Copilot accounts and sent a list. Everything
landed in one commit.

**The rule change.** Three of Matt Hayden's prompt constants are edited, at Matt's explicit
direction, for the first time since they were fixed on 2026-09-04. The header comment above the
`MH_*` block lists them so nobody "restores" them from the deck, and `CLAUDE.md` now says
"verbatim except those three". Anchor hash before
`e4f8082373927ce38d7d8b59c1352c51f4f77aab05e0c9e5636b1818fa26fabf`, after
`f94d871840e4d6c9b71287799504f849efd8d439e48a3a5cd88a6cbbcb2ca7ea`. **Deck slides 9, 17 and 19
and the covering email now differ from the site** in those three places; Matt Hayden has not
been told by this session.

- `MH_COPILOT_TOP_AND_TAIL`: a new line 3 says the report is either attached as a PDF or pasted
  at the end under a named heading, and "wherever this prompt says 'the attached PDF', it means
  that report". The heading `DEEP RESEARCH REPORT BY GEMINI, PASTED BELOW (leave this empty if
  the PDF is attached):` is appended after the last line. Reason: Cardiff's Gemini offers only
  "Copy contents" and "Export to notebook" under Share and export, so most of the room will
  paste, not attach. The 2026 vendor guidance agrees on the shape: instructions first, pasted
  material last, an explicit delimiter the instructions name. Defining the term once at the top
  fixed the seven internal "attached PDF" references without touching them.
- `MH_IMAGE_REVERSE`: "an AI image generation prompt", and the placeholder is pinned to
  `Subject: [INSERT SUBJECT HERE]` so step 2 can tell people what to replace.
- `MH_ACCESSIBILITY_AUDIT`: asks for alt text under 125 characters and whether anything is lost
  in greyscale (WCAG 1.4.1, colour alone). **Correction, later on 2026-09-07:** 125 is not a
  ceiling and never was. WCAG sets no limit, and JAWS does not truncate long alt text, it splits
  it across several graphics; the truncation story is a misreading of that. Keep the number
  anyway, because a hard figure constrains model verbosity where "concise" does not.

**01.** Step 3 is "Copy the report out" and quotes the two options Cardiff actually shows. Step
4 says attach or paste. The "Choose your next move" block is gone. New step 5, Responsible AI:
energy. Google's own figure is a median 0.24 Wh per Gemini text prompt (August 2025), the same
order as the long-quoted 0.3 Wh for a search; Google gave no number for Deep Research and said
so, hence "far more" and no figure on the page. Core time 10 to 11.

**02.** Page heading "Analyse a Photo to Build a Reusable Prompt That Replicates Its Unique
Style". The picture is now `cardiff_study_space.jpg` (Pillow, quality 90, 87 KB, same 620x413;
the webp is deleted, git has it). Step 1 "Clone the style of the image into a reusable prompt".
Step 2 uses the template from step 1 with an example subject; Matt Hayden's style block moved
out of the step and became a Blue Peter card at the top, `Example_Style_Block.md`, which
`make_artifacts.py` extracts from `MH_STYLE_BLOCK` by regex so the two cannot drift (verified
byte-equal plus a trailing newline). Step 3 runs the ban line in the SAME CHAT strip, then a
NEW CHAT `backup` card, the 06 pattern, with a new strip-only `A.stepTwoPrompt`. Step 4
"Audit one of your new images". Stretch block gone, new Responsible AI step 5 on accessibility.
Verdict untouched. Core time 12 to 14; site total 78.

**Verified:** `?doctor` 25 files all 200 (the jpg replaces the webp, the md is new); both pages
render five core steps and no stretch heading; the top-and-tail prompt box ends with the new
heading; every new body is at or under 45 words; `CLAUDE.md` still 200 lines.

## 2026-09-07 (addendum 105): Exercise 03, display copy only

Matt's pass over 03. **No prompt touched**, anchor hash still `f94d87…`. Step 1 loses the
", under the box where you type," clause and its title gains "(so very limited context)".
Step 2 is retitled "NEW chat, then run the detailed prompt with the PDF for more context",
its body cut to the two facts that matter (new chat or Canvas edits the first game; the PDF is
the context the thin ask lacked) and its strip now follows 06: NEW CHAT pill, the PDF, "then
enable" the Canvas chip. Step 3 says click the Code toggle and asks which strings came from the
PDF, so the point of reading the code is on the page. Step 5 Responsible AI now reads:
reviewing is part of the workflow, nobody has reviewed this code, fine for a demo with friends,
and do not share an app holding confidential (C1/C2) work data by link. The workflow chip is
"Run the detailed prompt". The stretch block stays on 03; only 01 and 02 lost theirs, and only
by request. Verified on the preview and `?doctor` (25, all 200).

## 2026-09-07 (addendum 106): pre-deploy polish, and Matt's rewrite of the reverse prompt

Matt, getting ready to deploy: review for cross-browser quirks, exercise consistency, WCAG
quick wins and a functional pre-flight, then safe minimal fixes, no rewrites, no content
changes. Three read-only audits (CSS, accessibility, functional) plus browser probes: iframes at
320, 390, 700, 768 and 1366px on every route, keyboard tabbing, contrast computed from rendered
styles. Findings and what changed, one commit:

**Fixed, high.** No scroll reset on route change (`App.jsx` now scrolls to top, focuses `main`,
sets `document.title` per exercise, and rewrites an unknown route to `#/`). Three-button skill
cards clipped on phones (`.mission-artifact__actions` wraps). Tool cards overflowed a phone on
every two-tool page (`.mission-head-row .tool-cards` may shrink). VIEW IN BROWSER and COPY on
artifact cards awaited a fetch before `window.open` / clipboard write, which Safari and Firefox
block as a popup: the tab now opens inside the click and the skill text is prefetched so COPY
writes inside the click. Contrast: eyebrow, splash links, prompt label, button hover blue,
splash input border, amber sort colour, splash stamp all now pass AA (measured zero failures on
every route and the splash). Splash inputs: real focus ring, 16px text so iOS does not zoom.
`MotionConfig reducedMotion="user"` so framer-motion honours the OS setting. One `h1` per page
(gallery and exercise titles, class-styled so nothing moved: gallery title measured identical).

**Fixed, medium.** Skip link focuses `main` directly so `#main-content` never enters history
(Back works in one press). Gallery grid breakpoints were inverted (two columns at 481 to 650,
one at 651 to 768): now two columns to 768, one below 480. Paperclip no longer shown on ENABLE
strips that attach nothing. Copy confirmations and doctor status announced (`role="status"`,
`.sr-only`); DOWNLOAD/COPY/VIEW carry the filename in their names; `ol`s carry `role="list"`;
tagline bar is a `header`, sign-out row a `footer`; splash inputs have `autocomplete`; wordmark
tracking reduced under 480px; `-webkit-user-select`; `html { font-size: 100% }`; print rule so
prompts do not truncate on paper; Inter Tight stacks carry a system fallback (17 rules);
`div`s inside the card `button` are `span`s; `loadUser` rejects records without an email;
`recordAttendance` has a 5s timeout; doctor guards a strip-only artifact; `yourChart` lost its
misleading `downloadPath`; `lang="en-GB"`; favicon (`public/favicon.svg`, a black square with a
white 2, swap it if you have a better one).

**Not changed, Matt's call.** Skill labels read 1, 2, 3, 5 because `Fact_Check_Cardiff.md`
("SKILL 4") is linked nowhere. Attendance is recorded on first sign-in only. `#/prompts` still
unreachable. Two HESA `.xlsx` files ship unreferenced and a comment on the bonus claims an
`.xlsx` hand-out. Pill buttons are 32px (pass WCAG 2.2's 24px, not Apple's 44).

**Not testable here.** The Safari and Firefox popup and clipboard fixes are correct by
construction (gesture preserved) but were only exercised in Chrome. Worth one click each on a
Mac before the day.

**Matt's rewrite of `MH_IMAGE_REVERSE`** landed in the same commit: output-only, a fixed
seven-line format, the placeholder pinned. Anchor hash is now
`0f9eb82c7492a3416330dcc21fa0dd77cde0615d00d741caeb29e3271dff09a5`. His pasted text had a
non-breaking hyphen in "reverse-engineer"; the constant uses a plain hyphen.

## 2026-09-07 (addendum 107): the accessibility audit prompt, researched and rewritten

Matt asked for a web search for a published accessibility audit skill, not to ship one, but to
see whether Exercise 02 step 4's prompt could be improved. A subagent surveyed the field.
**There is no accessibility, a11y, WCAG or alt-text skill in `anthropics/skills` at all**; the
useful material is community-authored, so what came back was techniques rather than a file.

Six changes applied, ranked by value to a three-minute exercise. Matt Hayden's three opening
deck sentences are byte-identical; everything added is house-authored.

1. **A fourth labelled line, `I ASSUMED`.** The best-evidenced change. Kreiss et al. (EMNLP
   2022, 16 blind and low-vision plus 59 sighted raters) found relevance to context predicted
   description quality about as strongly as imaginability, and found no correlation between
   CLIPScore and any human rating, so automated metrics miss it. ASSETS 2024 showed that
   feeding page context to GPT-4V produced descriptions blind and low-vision participants rated
   significantly higher. Our image is standalone with no context to give, and W3C says whether
   an image is decorative is "a judgment that only the author can make", so surfacing the guess
   is the only move available.
2. **`Quote any words in the image exactly, and say so if you cannot read them.`** Their image
   is AI-generated and will contain pseudo-text. GPT-Vision was shown to trust text baked into
   an image over the pixels. On genuinely unanswerable visual questions from blind users,
   abstention was 56% for human experts, 59% for GPT-4V and **14% for Gemini**, one of the two
   tools this exercise runs on.
3. **The decorative default reversed to `Assume it needs alt text.`** The old line invited the
   worst workshop outcome, AI telling someone the image they just made needs no alt text. This
   change shortens the prompt.
4. **`Do not guess anyone's age, background or feelings.`** Meta's Automatic Alt Text blocklist
   removed 103 of its top 200 concepts including identity attributes and categorically omits
   gender; Google stopped returning gendered Cloud Vision labels. `MH_STYLE_BLOCK` tells the
   style block to define who is depicted, so participants' images routinely contain people.
5. **`most important thing first`** on the alt text line, W3C's own advice and the real
   mitigation the 125 figure was always a proxy for.
6. **`do not start it with "image of"`.** WebAIM and W3C both say so, because the screen reader
   already announces the element. Weakest evidence of the six, a convention rather than a
   finding, but it is the one instruction a participant can check themselves in ten seconds.

**Left alone deliberately.** The `A PERSON COULD` line, already narrowed twice today, keeps its
one-line cap and its three worked examples, which are what stop the model proposing a caption
rewrite instead of an image change. The phrase "written for what the image is doing on the page
rather than a list of what is in it" is the plain-English rendering of SC 1.1.1's "equivalent
purpose" and is the best line in the prompt. No WCAG numbers, no severity scale, no role line,
no long-description branch: all standard in the audit skills surveyed, all wrong for three
minutes with an audience that met the term today.

**Two corrections to what this log said earlier.** 125 characters is not a ceiling and never
was: JAWS splits long alt text across several graphics rather than truncating it, and the
truncation story is a misreading of that. Addendum 104 has been corrected in place. And the US
Title II deadline is not April 2026; an Interim Final Rule moved it to 26 April 2027 and 2028.
For Cardiff the operative instrument is the Public Sector Bodies (Websites and Mobile
Applications) Accessibility Regulations 2018 anyway, and gov.uk now states WCAG 2.2 AA.

**A trap the subagent walked into, worth knowing.** It reported the anchor hash in `CLAUDE.md`
as two states stale. It was not: the agent had read the repo before several commits landed and
was comparing against its own snapshot. Verified all three records matched the file before
acting. **A long-running subagent's view of a file it does not own goes stale; re-check any
repo claim it makes against the working tree.**

**A caveat for the facilitator, not the page.** Two studies eight years apart found that the
reader who most needs a description is least able to catch its errors: blind users facing a
caption contradicting the tweet text doubted their own understanding rather than the caption
("I have to trust them because I don't have any [alternative]", CHI 2017), and UIST 2025 titled
its study of 3,467 real hallucination cases "This is My Fault", Really? That is the argument
for the "say so if you cannot read them" line, and it belongs in what Matt says out loud.

# HANDOVER, end of 2026-09-07

**Supersedes the 2026-09-05 handover above.** That block's traps still hold; this one carries the
current state and what is about to change.

## Snapshot

`git tag snapshot-2026-09-07-pre-mh-tweaks` on `d81e929`, tree clean apart from three untracked
snapshot images at the repo root. **`main` is 120 commits ahead of `origin/main` and the live
site is far behind. That is expected. Never push unless Matt asks in that same message.**

## Next job: tweaks to Matt Hayden's Exercises 01 and 02

**Done, 2026-09-07 afternoon (addenda 104 to 106).** The 01 and 02 tweaks, the 03 tweaks and
the pre-deploy polish are all committed. Three `MH_*` constants now carry Matt-directed edits
(listed in the block's header comment), so the hash below is the new one, and the deck differs
from the site in those three places. The rules below still hold for anything further.

Read this before touching either.

**His prompts are `MH_*` constants at the top of `missions.js` and are verbatim from his deck
(slides 7-24) and covering email. The room follows his deck while working through the site, so a
reworded prompt shows up live.** Verify the block by anchor, never a line range:

```bash
start=$(grep -n "^const MH_DEEP_RESEARCH" src/data/missions.js | cut -d: -f1)
end=$(grep -n "^const MH_CANVAS_GAME" src/data/missions.js | cut -d: -f1)
sed -n "${start},${end}p" src/data/missions.js | sha256sum
# 0f9eb82c7492a3416330dcc21fa0dd77cde0615d00d741caeb29e3271dff09a5
```

**Editable without touching his words:** step `title`, `body`, `promptLabel`, `promptNote`,
`attach` / `attachLabel` / `attachExtra`, `artifact`, `image`, `bodyIcons`, `backup`, and
`promptEmphasis` (display only: COPY writes the plain constant, so a non-matching substring
degrades to no emphasis and never loses text, but **always assert your substring is really in the
prompt**, that has bitten twice). **Not editable:** the constant strings themselves.

Where 01 and 02 stand after today:

- **01 The Landscape**, 11 minutes, five core steps, no stretch block. Step 1 "Turn on Deep
  Research and paste the prompt" with Matt's ENABLE screenshot; step 3 "Copy the report out"
  (Cardiff shows only "Copy contents" and "Export to notebook"); step 4's prompt takes the report
  attached or pasted; step 5 Responsible AI, energy. See addendum 104.
- **02 The Image**, 14 minutes, five core steps, no stretch block. JPEG picture, style block as a
  Blue Peter card, SAME CHAT then NEW CHAT on step 3, Responsible AI on accessibility. Addendum 104.
- **03 The Game**, 12 minutes, prompts untouched. Step 2 uses the NEW CHAT strip with the Canvas
  chip, step 3 asks which strings came from the PDF, step 5 carries the C1/C2 sharing warning.
  Stretch block removed; step 4 is "Play it, then give AI feedback". Addenda 105 and 106.

## Where the site is

Six exercises plus one bonus, **75 minutes** of core steps (10 / 12 / 12 / 13 / 16 / 12), bonus
excluded. Build green. `CLAUDE.md` is exactly 200 lines and must stay there.

Today's other changes:

- **A Responsible AI closing step now ends 03, 04, 05 and 06**, one sentence each, specific to
  what that exercise built. See addendum 101.
- **04 step 3 is "Review and Augment"**, and `Training_Module_Builder.md` closes its gap note with
  one "a person could" line. Tested on a real run, addendum 101.
- **The splash** says "Download the public PDF" with no size warning, step 1 fits one line, and
  the deck breaks before "Skills You Will Use on Monday".
- **The 06 dashboard fits the screen it is shown on** and its collision nudge is capped at
  3 kgCO2e/m2 with that stated on the page. Addenda 102 and 103, which carry the numbers.

## Verify before you hand anything back

```bash
npm run build                                   # dev is BROKEN, ENOSPC, use preview
python3 tools/verify_chart_data.py public/placeholders/Cardiff_Estates_Dashboard.html
wc -l CLAUDE.md                                 # exactly 200
```

Then hard-refresh http://localhost:4173/part2/ and check `script[src]` matches what the build
printed. **Hash navigation does not refetch `index.html`, so a stale bundle will happily show you
yesterday's copy and make you doubt a correct edit.** Add any new file-bearing step field to
`collectUrls` in `DoctorPanel.jsx` in the same commit; `?doctor` currently reports 24 files, all
200.

## Traps added today

- **A long-running subagent's picture of the repo goes stale.** One reported the `MH_*` anchor
  hash as two states behind; it had read the file before later commits landed. Re-verify any
  claim a subagent makes about the working tree before acting on it.
- **A background tab never finishes a framer-motion exit, so hash routing looks broken.**
  `document.hidden` is true, Chrome throttles `requestAnimationFrame`, and `AnimatePresence
  mode="wait"` waits forever for the exit animation. Cost half an hour before the check. Probe
  routing with the tab in front; layout and contrast probes in iframes are fine either way.
- **Edit `Cardiff_Estates_Dashboard.html` as bytes.** Python text mode silently rewrote the
  embedded CSV's CRLF endings to LF, and `verify_chart_data.py` did not notice because it parses
  rather than compares. Byte-check the block against HEAD, the snippet is in addendum 102.
- **A pixel-based layout constant becomes a bigger lie on a smaller chart.** The bubble nudge cap
  was `r * 1.2 + 10` pixels; on the fitted chart that was 9.66 kgCO2e/m2 of error. Anything that
  displaces a mark from its true position should be capped in data units.
- **`resize_window` did not change `innerWidth`/`innerHeight` here.** Measure responsive layouts
  with fixed-size probe iframes instead, and wait about 3s for D3 to draw before reading.

## Still open

- **Deck slides 9, 17 and 19 and the covering email now differ from three `MH_*` constants**
  (addendum 104). Matt to tell Matt Hayden, or the room sees the divergence live.
- `Verify_And_Repair.md` and the revised 06 repair prompt are untested in a real run.
- `Fact_Check_Cardiff.md` and `Example_Bubble_Chart.html` are generated but linked nowhere.
- `PROMPT_LIBRARY` still routes at `#/prompts` with nothing linking to it. Relink or delete.
- The gap note in a real 04 run came back at eighteen bullets. Capping it is a one-line skill
  change, deliberately not made without a second run to look at.
