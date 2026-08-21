# AI in the Workplace — Field Missions build

Plan: /home/wmgmm2/.claude/plans/this-was-an-escaperoom-effervescent-squid.md (approved 2026-08-20)
Hourly Ralph Wiggum loop: one verifiable slice per iteration, tick items here.

## Build order
- [x] 1. Rebase to `/workshop/`, strip timer/scoring/failure, hash routing (`#/m3`) — `npm run build` passes; preview serves page + artifacts (200)
- [x] 2. `missions.js` schema + MissionGallery/MissionCard/MissionDetail — built, incl. PromptBox (copy + select fallback), SortGame, progress lib
- [~] 3. Mission content: first pass authored for ALL six missions in missions.js (prompts from google.html bank). Still to refine: browser walkthrough of each mission page; survey xlsx needs a free-text comments column for m4 step 4
- [ ] 4. Check-in flow + localStorage progress keyed by email + refresh-resume badges
- [ ] 5. Walls: `?leaderboard` → progress wall + Wall of Wrong; Apps Script v1 payload; `?doctor` preflight
- [ ] 6. Artifact authoring: Green Light cheat sheet, research brief + pre-generated Deep Research report, Gravitas flawed bid + criteria doc, notes+data pack, multi-format exports
- [ ] 7. Styling pass (google.html prompt boxes/badges/callouts + tabloid reskin), a11y, mobile

## Session log
- 2026-08-21: plan approved; starting slice 1+2.
- 2026-08-21 (iteration 1): slices 1+2 done and verified. New files: src/data/missions.js, components/MissionGallery|MissionCard|MissionDetail|PromptBox|SortGame.jsx, lib/progress.js. Rewrote App.jsx (no timer/scoring; hash routing; localStorage user resume) and SplashScreen.jsx (rebrand + licence-lane question). CSS: grid auto-flow, ~450 lines of mission styles appended. vite base → /workshop/; index.html title updated. Old components (Countdown, SubmissionPortal, Success/Failure/HintReveal, CopilotHint) now unreferenced — delete in a later slice once check-in flow (step 4) settles. dist/ not git-tracked after all.
- 2026-08-21 (iteration 2): browser walkthrough of splash → login → gallery → m1 (sort game, check-in, CLEARED verdict) → back to gallery (DONE stamp, 1/6 counter) → m3 (prompt boxes, artifact strip). Whole flow works, incl. hash routing. Fixed three bugs it surfaced: stale escaperoom TaglineBar copy; invisible mission-card meta (black on black); invisible mission-detail eyebrow (unstyled evidence-card__id reuse). Rebuild passes.
- Next iteration suggestions: step 4 proper check-in form (2 questions: "what did the AI get wrong" + best prompt; replace bare "mark complete") wired to localStorage now, Apps Script v1 payload later; or start artifact authoring (m5 flawed bid + criteria doc is highest-value). Also: prompt COPY button untested against real clipboard permissions; m3 thumbnail (man+cat Teams still) worth keeping, it is funny.
