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
