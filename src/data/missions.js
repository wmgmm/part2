// All mission content for the workshop site: "The Policy Pivot".
// One running thread: Chris Gravitas, the participant's new line manager, has
// been moved into the university's Sustainability Engagement job and has
// volunteered the team to respond to two real documents: the Sustainable
// Futures plan and the AI position statement. Each mission builds one piece of
// the team briefing pack (infographic, deck, decision tool). Every mission is
// SELF-CONTAINED: provided files stand in for any other mission's output, so
// missions work in any order.
//
// THE ANCHOR DOCUMENTS AND THE SWAP CONTRACT (for Matt):
//   Sustainable-Futures-en.pdf    - Cardiff University's real Environmental
//                                   Sustainability Plan 2025-35. Not generated;
//                                   a copy of the published document.
//   AI_Position_Statement.pdf     - a university AI position statement
//                                   (currently Cardiff Met's as the stand-in).
//                                   When Cardiff publishes its own, replace the
//                                   FILE under the same name and update the
//                                   aiStatement note below. Nothing else moves.
//   Policy_Landscape_Report.pdf   - Mission 1's backup: a Deep Research run of
//                                   the M1 brief, exported to PDF (stand-in
//                                   until a real run is dropped in).
// Regenerate the generated files with: python3 tools/make_artifacts.py
//
// Step fields: tier 'core'|'stretch', estMinutes, check (30-second check),
// prompt (+ optional promptLabel), link {href, label}.

const BASE = import.meta.env.BASE_URL;

// Tool names in one place. NotebookLM became "Gemini Notebook" on 16 Jul 2026;
// if it renames again, edit here once.
export const TOOLS = {
  copilot: 'Copilot',
  gemini: 'Gemini',
  deepResearch: 'Gemini Deep Research',
  notebook: 'Gemini Notebook',
  notebookFirstMention: 'Gemini Notebook (until recently NotebookLM)',
  canvas: 'Gemini Canvas',
};

const PROMPT_LIBRARY_URL = 'https://wmgmm.github.io/notebooklm/';

// Gallery hero image, shared with the ?doctor preflight so the check cannot drift.
export const HERO_IMAGE = 'policy_stall.webp';

// Click-to-open sign-in cards (google.html copilot-card pattern).
export const APPS = {
  gemini: {
    name: 'Gemini',
    url: 'https://gemini.google.com',
    urlLabel: 'gemini.google.com',
    logo: 'gemini-logo.png',
    colour: '#1a73e8',
    note: 'Sign in with your work Google account',
  },
  notebook: {
    name: 'Gemini Notebook',
    url: 'https://notebooklm.google.com',
    urlLabel: 'notebooklm.google.com',
    logo: 'notebooklm-logo.png',
    colour: '#1a73e8',
    note: 'Sign in with your work Google account',
  },
  copilot: {
    name: 'Copilot',
    url: 'https://m365copilot.com',
    urlLabel: 'm365copilot.com',
    logo: 'CopilotLogo.png',
    colour: '#0078D4',
    note: 'Sign in with your work Microsoft account',
  },
};

// "Cardiff University Slide Design" prompt, verbatim from The Matts'
// NotebookLM Prompt Library (see PROMPT_LIBRARY_URL). Apply it in the Studio
// revise (pencil) panel. Modes: SLIDES, VIDEO, INFOGRAPHIC.
const CARDIFF_DESIGN_PROMPT = `ROLE
Turn Cardiff University source material into a clear visual output a no-background reader
follows in one pass. Mode varies: SLIDES, VIDEO, INFOGRAPHIC. Thinking is identical; only
the render changes. Order: declare mode, name spine, rewrite plainly, apply render profile.
When impact and comprehension compete, comprehension wins.

MODE: state SLIDES, VIDEO, or INFOGRAPHIC. If unstated, ask first.

SPINE: state in one plain sentence the single idea the whole output serves. Every unit (a
slide, scene, or zone) must advance, support, or apply it; cut units that don't. Group into
2-4 named sections, each adding something the others don't. Write the spine atop your output.

REWRITE: lead with why it matters before detail. Kill jargon; any term that must stay gets a
half-line definition in the same unit. Short sentences, one idea each, active voice, no
hedging. One message per unit, carried by its heading or narration.
Banned (plain form in brackets): "jagged intelligence" (strong at some tasks, weak at
others), "sandbox" (safe approved space), "raw data asset" (source material), "SOP"
(standard operating procedure), "leverage"/"utilise" (use), "robust". Every number comes
from the source and connects to its unit; no citable source, no figure.

READBACK: per unit, write the one sentence a no-background reader would say it was about.
Can't, from the unit alone? Rebuild it. Provocative headings need their answer in the same
unit. Whole output: headings/narration/zones in order must tell the spine's story alone.

BRAND (all modes)
Colours only: white #FFFFFF bg, grey #D9D9D9 alt, Cardiff Red #E4251B accents/dividers/
section titles/Welsh, black #000000 text, white on red, grey #CCCCCC borders. No other
colours, gradients, transparency.
Type: titles Franklin Gothic Demi, serif subtitles/dividers Georgia, body Franklin Gothic
Book, labels Marr Sans.
Imagery: Cardiff architecture photos only, no stock, no icons/emoji/illustrations/shadows.
Logo: bilingual Cardiff University / Prifysgol Caerdydd, never resized or recoloured.
Welsh-first on section markers and close.
Language: UK English throughout (-ise, -our, -re, licence/practise as nouns, programme,
judgement). Proof for stray US spellings and Welsh diacritics before finishing.

RENDER (apply only the matching profile)

SLIDES: one frame, lands in three seconds. Headlines are graphic objects. Red is a blade
not a blanket. Budget: heading, optional subtitle, at most one supporting element (bullets
OR table OR stat OR image); two means two slides. Sizes: cover 120, dividers 160-240,
headings 72-92, body 32-48, closing bilingual 100-160; heading-to-body 2:1-3:1, never
shrink a heading to fit. Bullets solid round, red at 130%, black body. Logo on title/close
slides only. Layouts, pick by need: logo-only; full-bleed photo no text; image+red block
when photo is evidence; text-only for a standalone statement; full-width for a longer
point; left photo+red bar for a place-tied point. Dividers Welsh-first, English below, one
line on what the section adds.

VIDEO: two layers per scene. Voice carries the sentence; screen shows one heading, number,
or image, never a paragraph to read aloud. Per scene write SPOKEN (1-2 sentences, 8-15 sec)
and ON SCREEN (single element). State the spine in the opening scene, restate at close; the
viewer can't pause. Sections are spoken Welsh-first transitions, not silent cards. Red once
per scene. Open and close on the bilingual logo.

INFOGRAPHIC: one frame, no sequence. Print the spine near the top as title. 2-4 labelled
zones matching the sections, each passing readback alone, one clear reading path. Density
allowed: every element sits in a zone with a job, none floating; cap each zone at heading
plus three elements. Spine largest, zone labels next, support smallest. Red on zone labels
and the single key figure only. One photo max as banner. Logo once, corner. Welsh-first on
title and zone labels.

SWEEP (once, after drafting): headings/narration/zones tell the spine's story alone or
reorder; merge units making the same point; final unit restates the spine plainly.
Break a rule only to make the message land harder. Never break: palette, Welsh-first,
one message per unit, the spine.`;

const A = {
  susPlan: {
    label: 'THE SUSTAINABILITY PLAN',
    filename: 'Sustainable-Futures-en.pdf',
    downloadPath: `${BASE}placeholders/Sustainable-Futures-en.pdf`,
    note: "Cardiff University's real ten-year plan, 18 pages. A public document: safe to upload.",
  },
  aiStatement: {
    label: 'THE AI POSITION STATEMENT',
    filename: 'AI_Position_Statement.pdf',
    downloadPath: `${BASE}placeholders/AI_Position_Statement.pdf`,
    note: "A university AI position statement (currently Cardiff Met's, standing in until Cardiff publishes its own). Public: safe to upload.",
  },
  landscapeReport: {
    label: 'BACKUP: THE LANDSCAPE REPORT',
    filename: 'Policy_Landscape_Report.pdf',
    downloadPath: `${BASE}placeholders/Policy_Landscape_Report.pdf`,
    note: 'Only needed if your Deep Research run fails or you cannot wait.',
  },
};

export const MISSIONS = [
  {
    id: 'm1',
    code: '01',
    level: 1,
    title: 'The Landscape',
    pageTitle: 'Research the Policy Landscape with Deep Research',
    tools: [TOOLS.deepResearch],
    accentType: 'stamp-red',
    accentText: 'START HERE',
    estMinutesCore: 12,
    summary: 'Start the policy landscape research with Deep Research.',
    toolInfo: {
      feature: 'Tool: Gemini Deep Research. A research agent that does your Google searches and takes five to fifteen minutes to run.',
      apps: [APPS.gemini],
    },
    workflow: ['Paste the brief', 'Edit the plan', 'Make it personal', 'Skim like an executive'],
    brief:
      'Two policies have landed on Chris\'s desk: a ten-year sustainability plan and an AI position statement. Before reading either, find out what every other UK university is saying about AI and about net zero, and where Cardiff sits. Start the run, walk away, come back. Prefer your own topic? Rewrite the brief. Plan stage: DISCOVER.',
    artifacts: [A.landscapeReport],
    steps: [
      {
        tier: 'core',
        estMinutes: 2,
        title: 'Brief your researcher',
        body:
          'In Gemini (gemini.google.com), choose Deep Research in the tools menu beneath the prompt box and paste the brief below, or rewrite it for your own topic. A good brief dictates the report\'s sections and tells the tool what to do when data is missing, not just the topic.',
        promptLabel: 'THE BRIEF (EDIT FOR YOUR TOPIC)',
        prompt:
          'ROLE: You are a policy analyst preparing a briefing for a university team.\nTASK: Research the landscape of [UK university] statements on generative AI and the sustainability and net-zero commitments the same institutions have made, and how they reconcile the two.\nFORMAT: Use exactly these section headings:\n- The AI Statements: what [UK universities] publish about generative AI, and the principles they commit to.\n- The Net-Zero Commitments: the sustainability and net-zero pledges [the same institutions] have made, with target dates.\n- The Collision: how AI\'s energy, water and hardware footprint squares with those pledges, and which institutions acknowledge the tension.\n- Where [Cardiff University] Sits: how its published positions compare with the rest of the sector.\n- Blind Spots: three things I am probably not thinking about.\nCONSTRAINTS: Cite every claim to its source. If a figure, date or policy detail is not in your sources, write DATA UNAVAILABLE rather than estimating it.',
      },
      {
        tier: 'core',
        estMinutes: 3,
        title: 'Edit the plan. Then walk away',
        body:
          'Before it runs, Gemini shows you its research plan. EDIT IT: tell it what to cut and what to add, then press Start research. That edit is the entire skill.',
      },
      {
        tier: 'core',
        estMinutes: 3,
        title: 'While it runs: make it personal',
        body:
          'The research is grinding away, so spend the wait on yourself. Open a NEW chat and run the prompt below with your real job in the brackets. The answer is your personal syllabus for the rest of this site.',
        prompt:
          'I work as [a project officer] in [a university professional services team]. Map three AI tools onto my actual job: Gemini Deep Research (long, sourced research runs), Gemini Notebook (answers grounded only in files I give it, plus mind maps, decks and audio) and Gemini Canvas (builds small working web apps from a description).\nFORMAT: for each tool, exactly three lines:\n- The task: one task from my role it would genuinely improve.\n- The prompt: an example prompt I could run tomorrow, with swap points in [square brackets].\n- Building it in: one line on where it fits in my week.\nCONSTRAINTS: no filler, no generic advice; every example must be specific to the role I named. If a tool has no honest use for my role, say NO STRONG FIT and why rather than forcing one. Finish with one line: the single tool I should try first, and why.',
      },
      {
        tier: 'core',
        estMinutes: 3,
        title: 'Return and skim like an executive',
        body:
          'When the report is done, do not read it top to bottom. Ask how it changes your team\'s decisions.',
        prompt:
          'From this report only, give me a three-column table with the columns Finding, So We Should, Source. Exactly five rows, one sentence per cell, naming the report\'s cited source in each row. Below the table, one line: the single finding most likely to change [our team]\'s behaviour, and why. No preamble.',
      },
      {
        tier: 'core',
        estMinutes: 1,
        title: 'The 30-second check',
        check: true,
        body:
          'Pick one of the five findings and click through to its source. Does the source actually say that? Deep Research cites well, not perfectly, and the habit starts here.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Gemini Notebook',
        hook: 'Two variations worth knowing.',
        estMinutes: 3,
        title: 'Ideas: other ways in',
        body:
          'Run Deep Research from INSIDE Gemini Notebook and the report lands there as a source automatically: Mission 2 set up with zero copying. If you ran it in Gemini instead, choose Export to Docs at the end; a Doc adds to any notebook in one click.',
      },
    ],
    verdict:
      'You edited the plan before pressing the button, then made the wait useful. In my old department we called that requirements gathering followed by capacity planning. Here it is just called Tuesday.',
  },

  {
    id: 'm2',
    code: '02',
    level: 2,
    title: 'The Documents',
    pageTitle: 'Question Both Policies in Gemini Notebook',
    stretchTitle: 'CHOOSE YOUR NEXT MOVE',
    stretchIntro: 'Pick ONE path below; come back for another any time.',
    tools: [TOOLS.notebook],
    estMinutesCore: 11,
    summary: 'Question both policies in Gemini Notebook.',
    toolInfo: {
      feature: 'Tool: Gemini Notebook (until recently NotebookLM). It only answers from the files you give it, and shows its receipts.',
      apps: [APPS.notebook],
    },
    workflow: ['Add both documents', 'Mind map', 'Ask with citations', '30-second check'],
    brief:
      'Before the team can be briefed, somebody has to actually understand the two documents; a policy you skim once is a policy you misremember forever. Load both documents and interrogate them: grounded answers with citations, and a blunt refusal when the sources fall short. Plan stage: UNDERSTAND.',
    artifacts: [A.susPlan, A.aiStatement],
    steps: [
      {
        tier: 'core',
        estMinutes: 3,
        title: 'Ground it',
        body:
          'Create a notebook at notebooklm.google.com (the old links still redirect) and add BOTH documents above as sources. Made your own Mission 1 report? Add it too (Export to Docs in Gemini, then Add sources and pick it from Drive).',
      },
      {
        tier: 'core',
        estMinutes: 2,
        title: 'Map it',
        body:
          'In the Studio panel (right-hand side), generate a Mind Map: a clickable visual index of everything the two documents cover. Thirty seconds, and you now know them better than most people know documents they wrote themselves.',
      },
      {
        tier: 'core',
        estMinutes: 4,
        title: 'Ask with citations',
        body:
          'Now the difference from ordinary chat: every claim must come from your sources, and a blunt INSUFFICIENT_DATA beats a confident guess. An INSUFFICIENT_DATA is not a failure; it is a finding.',
        prompt:
          'ROLE: a strict, literal fact-checker. Answer from the sources in this notebook and nothing else.\nQ1: Before any new [software purchase], what does the Demand First hierarchy require us to do FIRST, and what are its four steps, in order? Cite the passage for each step.\nQ2: What does the AI position statement say about the [environmental footprint] of AI tools? Cite every passage you rely on.\nRULES: no outside knowledge, no estimates, no filler. If the sources cannot fully answer a question, output the exact phrase INSUFFICIENT_DATA for that question, then name which source falls short and what is missing from it.',
      },
      {
        tier: 'core',
        estMinutes: 2,
        title: 'The 30-second check',
        check: true,
        body:
          'Click one citation. Does the passage actually support the claim? Grounded does not mean gospel; it means checkable. So check. And if one of your questions drew an INSUFFICIENT_DATA, remember which: Mission 4 pays it off.',
      },
      {
        tier: 'stretch',
        choice: 'A',
        toolChip: 'Notebook Studio',
        hook: 'For the commute.',
        estMinutes: 4,
        title: 'Make it listenable',
        body:
          'Generate an Audio Overview: two hosts discussing a sustainability plan and an AI statement like it is the story of the year. Useful for the commute; unsettling the first time.',
      },
      {
        tier: 'stretch',
        choice: 'B',
        toolChip: 'Notebook + Deep Research',
        hook: 'For the researcher who wants the gaps found.',
        estMinutes: 5,
        title: 'Close the loop',
        body:
          'The newest move in the toolkit: run Deep Research from INSIDE the notebook, grounded in your own sources plus the open web. Find what the documents miss before a colleague does.',
        prompt:
          'Act for [a sceptical member of staff] who has read both documents in this notebook. Based only on my sources: what questions can the two documents not answer between them?\nOutput three sections:\nGAP REGISTER: 3-5 gaps, each phrased as one specific research question that neither document answers.\nFINDINGS: research the top three gaps on the open web for the strongest external evidence; a short answer per gap, with sources.\nVERDICT: exactly one line, starting PASS WITH GAPS or NOT READY: whether the two policies together are ready to guide [our team]\'s decisions about using AI tools, and the single fix that matters most.',
      },
    ],
    verdict:
      'You asked two policies to explain themselves and one of them went quiet. Write down which question drew the silence. That silence has a mission of its own.',
  },

  {
    id: 'm3',
    code: '03',
    level: 1,
    title: 'The Infographic',
    pageTitle: 'Explain the Plan to Staff: Your Prompt vs Ours',
    stretchTitle: 'CHOOSE YOUR NEXT MOVE',
    stretchIntro: 'Pick ONE path below; come back for another any time.',
    tools: [TOOLS.gemini],
    estMinutesCore: 11,
    summary: 'Your infographic prompt versus ours, on the real plan.',
    toolInfo: {
      feature: 'Tool: Gemini. Attach a PDF and it reads it; ask for an image and it draws it. Today you do both.',
      apps: [APPS.gemini],
    },
    workflow: ['Write your own prompt', 'Run it', 'Compare with ours', '30-second check'],
    brief:
      'The first piece of the briefing pack: the sustainability plan explained to the whole team in one emailable image. First write your own prompt, no help, no template. Then compare it with ours. Friendly rivalry encouraged. Plan stage: ACT.',
    artifacts: [A.susPlan],
    steps: [
      {
        tier: 'core',
        estMinutes: 4,
        title: 'Your prompt, blind',
        body:
          'Attach the plan PDF in a Gemini chat and write your own prompt for a one-page staff infographic. No peeking at the card below. Run it, then compare results with a neighbour: whose lands best, and what did their prompt have that yours did not?',
      },
      {
        tier: 'core',
        estMinutes: 4,
        title: 'Now the engineered version',
        body:
          'Same task, our prompt. Run it in a NEW chat with the PDF attached, then put the two outputs side by side.',
        promptLabel: 'THE ENGINEERED PROMPT',
        prompt:
          'ROLE: You are an internal communications designer at [a university].\nTASK: From the attached sustainability plan and nothing else, design a single-page infographic explaining the plan to [staff with no sustainability background]. It goes round by email, so it must land in ten seconds.\nCONTENT REQUIREMENTS:\n- One spine sentence across the top: the single thing a reader should remember, in plain English.\n- The visual centrepiece: the plan\'s Demand First decision hierarchy as a ladder of four named rungs, in the plan\'s own order.\n- At most [four] numbers, each taken verbatim from the document and labelled with what it means.\n- One strip along the bottom: what staff are actually being asked to do, as verbs, not values.\nRULES: anything not in the document is left out, never invented. If a figure you need is absent, write NOT IN DOCUMENT in its place rather than estimating.\nFORMAT: generate the infographic as an image: white background, one accent colour, large readable labels, no clutter, no decorative statistics. If you cannot generate an image, output a text specification instead: the layout zone by zone, with the exact wording of every label. No preamble; begin with the infographic.',
      },
      {
        tier: 'core',
        estMinutes: 2,
        title: 'Name the gap',
        body:
          'No prompt for this one: just answer it. Which ingredient made the difference: the role, the audience, the format, the constraints, or the failure state? The gap between the two outputs is the prompt, not the model. That sentence is the workshop.',
      },
      {
        tier: 'core',
        estMinutes: 1,
        title: 'The 30-second check',
        check: true,
        body:
          'Pick one number on the infographic and find it in the PDF. If it is not there, the machine invented it, and you have just caught your first hallucination in the wild.',
      },
      {
        tier: 'stretch',
        choice: 'A',
        toolChip: 'Notebook Studio',
        hook: 'For the visual, on-brand option.',
        estMinutes: 6,
        title: 'Make it Cardiff',
        body:
          'Add the plan to a Gemini Notebook (your Mission 2 one already has it) and generate an Infographic in the Studio panel. Then, instead of accepting the default look, open the revise (pencil) panel, type MODE: INFOGRAPHIC, and paste the Cardiff University design prompt below beneath it. One click makes an infographic; a design prompt makes YOUR infographic.',
        promptLabel: 'CARDIFF DESIGN PROMPT',
        prompt: CARDIFF_DESIGN_PROMPT,
        link: { href: PROMPT_LIBRARY_URL, label: "From The Matts' NotebookLM Prompt Library" },
      },
      {
        tier: 'stretch',
        choice: 'B',
        toolChip: 'Gemini',
        hook: 'For your own most-ignored policy.',
        estMinutes: 4,
        title: 'Make it yours',
        body:
          'Re-run the engineered prompt against [your own team\'s most-ignored policy or guidance document], or ask for a second, portrait version sized for a phone screen. The prompt transfers; that is the point of writing it properly once.',
      },
    ],
    verdict:
      'Your first prompt against the engineered one: the gap between them is the whole discipline. And now several thousand colleagues can understand a ten-year plan in ten seconds, which is more than I can say for some strategies I have launched.',
  },

  {
    id: 'm4',
    code: '04',
    level: 3,
    title: 'The Gap',
    pageTitle: 'Critique the Policies, Then Chain the Tools',
    stretchTitle: 'CHOOSE YOUR NEXT MOVE',
    stretchIntro: 'Pick ONE path below; come back for another any time.',
    tools: [TOOLS.gemini, TOOLS.copilot],
    estMinutesCore: 15,
    summary: 'Critique the two policies, then chain Copilot to judge the critique.',
    toolInfo: {
      feature:
        'Tools: Gemini critiques, Copilot adjudicates. Chaining: the output of one tool becomes the input of another.',
      apps: [APPS.gemini, APPS.copilot],
    },
    workflow: ["Devil's advocate", 'The Demand First test', 'Chain to Copilot', '30-second check'],
    brief:
      'Two documents, one university. Do they agree? Set an AI on the space between them, then chain a second AI to judge the first. AI as critic beats AI as author, and chained tools beat either alone. The briefing pack needs an honest page, and this is where it comes from. Plan stage: ACT.',
    artifacts: [A.susPlan, A.aiStatement],
    steps: [
      {
        tier: 'core',
        estMinutes: 5,
        title: "Devil's advocate",
        body: 'Attach BOTH PDFs to Gemini in a NEW chat (fresh eyes, no accumulated politeness).',
        prompt:
          'You are a hostile, hyper-rational [risk auditor] reviewing the two attached documents together: the university\'s [sustainability plan] and its [position statement on generative AI]. Your target is the space BETWEEN them: hunt for tensions, contradictions and silences where one document commits to something the other undermines or never mentions at all.\nReport your findings only as a table with these columns:\nVerbatim Quote | The Tension | Category | Severity (1-10) | The Fix\nRules:\n- Every row must begin with an exact quote from one of the documents, prefixed "Plan:" or "AI statement:". Where the flaw is that a document says nothing, write GAP: NOT ADDRESSED in that column and name the silent document.\n- Category must be exactly one of: Contradiction / Silence / Unfunded promise / Untestable claim / Governance.\n- Limit yourself to the 7 most severe findings, worst first.\n- Critique only what is written, or missing, in these two documents. No compliments, no preamble: begin immediately with the table.',
      },
      {
        tier: 'core',
        estMinutes: 4,
        title: 'The Demand First test',
        body:
          'Stay in the same chat. The sustainability plan contains its own decision hierarchy; make the AI statement climb it, one rung at a time.',
        prompt:
          'ROLE: You are a strict, literal compliance assessor. Attached are the university\'s [sustainability plan], which defines the Demand First decision hierarchy, and its [position statement on generative AI].\nTASK: Apply the plan\'s own Demand First hierarchy to the AI statement, treating [adopting generative AI tools across the university] as the resource decision under review. Work one rung at a time, in the plan\'s order: 1 Avoid and minimise demand; 2 Source low-impact alternatives; 3 Ensure circularity and recovery; 4 Manage unavoidable impacts responsibly.\nFORMAT: a table with one row per rung and these columns:\nRung | What the Plan Requires (verbatim quote) | What the AI Statement Says (verbatim quote or NO EVIDENCE) | Verdict | Why\nRules:\n- Verdict must be exactly one of: PASSES / SILENT / CONFLICTS. No other wording.\n- Quotes must be word for word from the documents. If the AI statement contains nothing relevant to a rung, write NO EVIDENCE; do not paraphrase generosity into it.\n- End with exactly one summary line: can the AI statement survive its own university\'s decision hierarchy, yes or no, and the single rung that decides it.\nNo preamble; begin immediately with the table.',
      },
      {
        tier: 'core',
        estMinutes: 5,
        title: 'Chain it: the second opinion',
        body:
          'Copy the devil\'s advocate table. Open Copilot chat (m365copilot.com), attach BOTH PDFs, paste the prompt below, then paste the table under its marker line. The output of one tool has just become the input of another: that is chaining, and it is the difference between a party trick and a process.',
        prompt:
          'You are a neutral adjudicator. Attached are the two source documents: the [sustainability plan] and the [AI position statement]. Below the marker line is another AI\'s critique of them. Judge each row of that critique strictly against the documents\' own text, not against which claim sounds more confident.\nFORMAT: a table with these columns:\nCritique Row | Verdict | Verbatim Quote (supporting or refuting, with document named) | Why\nRules:\n- Verdict must be exactly one of: CONFIRMED / OVERSTATED / WRONG. No other wording, no diplomatic hedging.\n- Every verdict must rest on a verbatim quote from one of the documents. Where a critique row alleges a silence, quote the nearest passage that could have addressed it, or write NOTHING RELEVANT EXISTS.\n- After the table, list up to [three] material issues the critique missed entirely, each anchored to a verbatim quote or a named gap.\nNo preamble; begin immediately with the table.\nTHE CRITIQUE:',
      },
      {
        tier: 'core',
        estMinutes: 1,
        title: 'The 30-second check',
        check: true,
        body:
          'Pick one CONFIRMED row. Open the PDF. Does the quote exist, and does it mean what the verdict says it means?',
      },
      {
        tier: 'stretch',
        choice: 'A',
        toolChip: 'Gemini',
        hook: 'Time travel makes the critique commit.',
        estMinutes: 5,
        title: 'Post-mortem from 2035',
        prompt:
          'It is [2035]. The university has missed the goals in its [sustainability plan] while its use of generative AI grew tenfold. You are the forensic analyst writing the post-mortem. Both documents, as published back in [2025], are attached.\nOpen with The Incident: two sentences on how the failure unfolded. Then give the top 5 causes. For each one:\n- Root Cause: name it\n- Probability Score: how likely this was the primary killer. The five scores must sum to exactly 100%.\n- The Seed: the exact passage, quoted verbatim from one of the two documents and prefixed "Plan:" or "AI statement:", where the failure was already visible in [2025]. A silence counts as a seed: quote the passage that should have addressed it and name what is missing.\n- The Mechanism: step by step, how that seed grew into the missed goals.\nGeneric causes ("lack of engagement", "insufficient funding") are banned unless tied to a specific quoted passage. No preamble; begin with The Incident.',
      },
      {
        tier: 'stretch',
        choice: 'B',
        toolChip: 'Gemini + Copilot',
        hook: 'For your actual work.',
        estMinutes: 5,
        title: 'Your own pair',
        body:
          'Chain the same loop over [two documents your own team must reconcile]: a strategy and a budget, a policy and a job description, a plan and its progress report. Critique in one tool, adjudicate in the other, check one quote yourself.',
      },
    ],
    verdict:
      'You used one AI to mark another AI\'s homework and then checked the quotes yourself. In this job we call that assurance. In my old department we called it a turf war.',
  },

  {
    id: 'm5',
    code: '05',
    level: 3,
    title: 'The Briefing',
    pageTitle: 'The Team Briefing in Notebook Studio and Canvas',
    stretchTitle: 'CHOOSE YOUR NEXT MOVE',
    stretchIntro: 'Pick ONE path below; come back for another any time.',
    tools: [TOOLS.notebook, TOOLS.canvas],
    estMinutesCore: 17,
    summary: 'Build the team briefing: deck, quiz and interactive helper.',
    toolInfo: {
      feature:
        'Tools: the Studio panel in Gemini Notebook turns your sources into slides, quizzes and video; Gemini Canvas builds the interactive piece.',
      apps: [APPS.notebook, APPS.gemini],
    },
    workflow: ['Load the sources', 'Generate the deck', 'Quiz yourself', 'Make it interactive'],
    brief:
      'The finale: assemble the briefing pack the team actually receives. A deck grounded in the two documents, a quiz to prove it, and a working tool to hand round. Then the real question: how does this become how the team works every week, not what it did one Tuesday? Plan stage: LEAD.',
    artifacts: [A.susPlan, A.aiStatement],
    steps: [
      {
        tier: 'core',
        estMinutes: 3,
        title: 'Load the evidence',
        body:
          'Create a new notebook and add both documents as sources. Made your own Mission 1 report or Mission 4 critique? Add those too (Export to Docs, or paste as a text source): the deck gets better with every source you feed it.',
      },
      {
        tier: 'core',
        estMinutes: 5,
        title: 'Generate the deck',
        body:
          'In Studio, choose Slide Deck and paste the prompt below into its customise box before generating. Note: some university accounts do not offer deck generation; if you do not see it, export the notebook Report to Docs and ask Gemini Canvas to build the deck from it.',
        prompt:
          'Create a ten-slide briefing for [my team in a university professional services department] from these sources only. One message per slide, each backed by a figure or quote traceable to a named source; no invented numbers or commitments. Cover, in order: what the sustainability plan commits the university to, including the four goals, the Demand First hierarchy and net zero Scope 1 and 2; what the AI position statement promises; exactly one honest slide stating plainly the gap between the two documents; then what both documents mean for [our team]\'s everyday work. If a critique table is among the sources, draw the gap slide\'s evidence from it first. Slide ten is titled "Monday: the first three changes": three concrete actions [our team] can start next week, each traceable to a source. If the sources cannot support a slide, say so on that slide rather than padding.',
      },
      {
        tier: 'core',
        estMinutes: 3,
        title: 'Take your own quiz',
        body:
          'Generate a Quiz from the same sources and take it. If your briefing cannot survive its own quiz, the briefing is not ready, and better to learn that here than in the team meeting.',
      },
      {
        tier: 'core',
        estMinutes: 1,
        title: 'The 30-second check',
        check: true,
        body:
          'Pick one number on any slide and find it in the sources. Polished is not the same as true.',
      },
      {
        tier: 'core',
        estMinutes: 5,
        title: 'Make it interactive',
        body:
          'In Gemini, open Canvas from the tools menu and build the hand-round piece: a Demand First decision helper the team can use on its next purchase. Iterate in plain English: "bigger buttons", "add a Welsh language toggle". It fixes its own bugs if you tell it what is broken.',
        prompt:
          'You are a front-end engineer who ships. Build a single-page interactive [Demand First decision helper] for [a university team]. Flow: the user describes a [decision, e.g. buying new laptops or adopting an AI tool] in a short form, then walks the four rungs of the Demand First hierarchy one at a time, in order. Each rung is a card whose label is the rung\'s exact name, verbatim from the plan: 1 "Avoid and minimise demand", 2 "Source low-impact alternatives", 3 "Ensure circularity and recovery", 4 "Manage unavoidable impacts responsibly", with one plain-English question derived from that name; the user answers yes or no and can add a note per rung. At the end, show a verdict card restricted to exactly PROCEED, PROCEED WITH CHANGES or RETHINK, decided from the answers, plus a summary of the whole walk the user can copy into a briefing with one click. Rules: one HTML file with Tailwind CSS and vanilla JavaScript, no backend and no external data; embed one worked example decision so the tool looks alive from the first click. Do not jump straight to code. In order: 1) a short spec, under 100 words, saying what the tool does and how the verdict is decided; 2) a numbered build plan; 3) the complete app; 4) a self-check listing what you verified: the four rung labels match the wording above character for character, every button visibly does something, the copy button really copies, and there are no placeholder comments like "add logic here".',
      },
      {
        tier: 'stretch',
        choice: 'A',
        toolChip: 'Notebook Studio',
        hook: 'For the on-brand deck.',
        estMinutes: 6,
        title: 'Make it Cardiff',
        body:
          'Open the deck\'s revise (pencil) panel and paste the design prompt below with the first line "MODE: SLIDES". Watch a generic deck become an on-brand one: Cardiff Red used like a blade, bilingual Welsh-first section markers, no stock photos. Welsh speakers: the library has a full Cymraeg version of this prompt.',
        promptLabel: 'CARDIFF DESIGN PROMPT',
        prompt: CARDIFF_DESIGN_PROMPT,
        link: { href: PROMPT_LIBRARY_URL, label: "From The Matts' NotebookLM Prompt Library" },
      },
      {
        tier: 'stretch',
        choice: 'B',
        toolChip: 'Notebook Studio',
        hook: 'For the briefing that plays itself.',
        estMinutes: 6,
        title: 'The video briefing',
        body:
          'Generate a Video Overview (generation queues for a few minutes; start it and do something else, which by now is a habit). Then open its revise (pencil) panel, type MODE: VIDEO, and paste the Cardiff design prompt from Path A beneath it.',
      },
    ],
    verdict:
      'A briefing grounded in evidence, a quiz it survived, and a tool the team can press. The pack was the easy part. The real mission starts Monday: making this how the team works, not what it did once.',
  },

  {
    id: 'm6',
    code: '06',
    level: 1,
    title: 'Useful Prompts (for after the workshop)',
    pageTitle: 'Prompts to Take Back to Work',
    tools: ['Any AI chat'],
    estMinutesCore: 0,
    summary: 'Reusable templates and meta-prompting for your own work.',
    toolInfo: {
      feature:
        'Works in any AI chat. The [square brackets] mark what to swap for your own task.',
      apps: [APPS.gemini, APPS.notebook, APPS.copilot],
    },
    brief:
      'A good prompt is a reusable asset, not a one-off. These are the prompts behind the missions with the policies stripped out: steal them, swap the brackets, keep them somewhere you can find on a Tuesday.',
    artifacts: [],
    stretchTitle: 'THE PROMPTS',
    stretchIntro: 'Open one, copy it, swap the [brackets].',
    steps: [
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Gemini',
        hook: 'Three tools, mapped to your actual job.',
        estMinutes: 2,
        title: 'What can these tools do for my job?',
        prompt:
          'I work as [a project officer] in [a university professional services team]. Map three AI tools onto my actual job: Gemini Deep Research (long, sourced research runs), Gemini Notebook (answers grounded only in files I give it, plus mind maps, decks and audio) and Gemini Canvas (builds small working web apps from a description).\nFORMAT: for each tool, exactly three lines:\n- The task: one task from my role it would genuinely improve.\n- The prompt: an example prompt I could run tomorrow, with swap points in [square brackets].\n- Building it in: one line on where it fits in my week.\nCONSTRAINTS: no filler, no generic advice; every example must be specific to the role I named. If a tool has no honest use for my role, say NO STRONG FIT and why rather than forcing one. Finish with one line: the single tool I should try first, and why.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Gemini Deep Research',
        hook: 'The fifteen-minute researcher, on any topic.',
        estMinutes: 2,
        title: 'Deep Research on anything',
        prompt:
          'ROLE: You are a Principal Research Analyst at a top-tier corporate intelligence firm.\nTASK: Produce an exhaustive, evidence-based briefing on [TOPIC]. Synthesise current realities and discard outdated paradigms.\nFORMAT: Use exactly these Markdown headers:\n- Executive Summary (max 150 words)\n- The 12-Month Delta: material changes, regulatory shifts and technological advances in the last year\n- Market Ecology: 3-5 key players, their share and positioning\n- Financial Realities: realistic costs, pricing models and capital requirements\n- Success/Failure Matrix: a table mapping 3 critical success factors against 3 failure modes\n- Asymmetric Blind Spots: 3 high-impact risks or opportunities consensus analyses miss\nCONSTRAINTS: Keep reasoning concise; prefer definitive, data-backed statements. Cite every source inline (e.g. [Source Name]). CRITICAL: if financial data, pricing or market-share figures are unavailable in the retrieved data, state DATA UNAVAILABLE; do not estimate, extrapolate or invent figures.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Gemini',
        hook: 'A better brief in, better research out.',
        estMinutes: 2,
        title: 'Let AI write your Deep Research brief',
        prompt:
          'ROLE: You are a Strategic Decision Architect.\nTASK: Draft a strictly scoped, execution-ready Deep Research brief to inform this decision: [WHAT YOU NEED TO DECIDE].\nFORMAT, with these sections:\n- Core Decision Vector: the binary or categorical choice this research must inform\n- Primary Intelligence Requirements: exactly 3-5 hyper-specific, mutually exclusive questions the research must answer\n- Temporal Scope: the exact timeframe that matters\n- Evidence Hierarchy: preferred sources (peer-reviewed journals, audited accounts, official regulatory guidance) and source categories to ignore (opinion blogs, social media, marketing copy)\n- Output Artefact: the exact format the finished research should deliver\nCONSTRAINTS: Do not run the research yourself; output only the brief. The brief must command the researcher to cite every source with its exact URL and extraction date. Show me the brief for editing before I run it.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Any AI chat',
        hook: 'The best prompt writer is the AI itself.',
        estMinutes: 2,
        title: 'Let AI write the prompt',
        prompt:
          'ROLE: You are a Lead AI Systems Architect specialising in 2026 prompt optimisation.\nTASK: Design the optimal prompt for this objective: [DESCRIBE THE TASK, WHO THE OUTPUT IS FOR, AND WHAT GOOD LOOKS LIKE].\nWORKFLOW:\n- First ask me up to three clarifying questions, one of which must be: "Will this run on a fast everyday model, or a reasoning model that thinks before it answers?" Wait for my answers.\n- For a fast model: use Role, Task, Format structure, explicit step-by-step instructions, and two short examples to set the tone.\n- For a reasoning model: no examples, no "think step-by-step"; state the problem plainly and demand concrete intermediate artefacts (specification, then plan, then output).\n- The finished prompt must end with a Self-Check section telling the AI to verify its own output before answering.\nFORMAT: output the final prompt in a copyable block.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Any AI chat',
        hook: 'A prompt editor on call for the whole chat.',
        estMinutes: 1,
        title: 'The IMPROVE: trick',
        prompt:
          'From now on in this chat, whenever I send a message starting with IMPROVE:, do not answer the prompt that follows. Instead return a stronger version of that prompt and one sentence on what you changed and why.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Any AI chat',
        hook: 'AI is a better critic than author.',
        estMinutes: 2,
        title: 'Devil\'s advocate',
        prompt:
          'ROLE: You are a hostile, hyper-rational Risk Auditor and Devil\'s Advocate.\nTASK: Conduct a ruthless, unsoftened critique of the provided [draft / plan / proposal]: unsupported claims, flawed arithmetic, logical contradictions, missing foundational assumptions, regulatory blind spots.\nFORMAT: exclusively a table with columns:\nVerbatim Quote | Identified Flaw | Category (Logic/Data/Assumption/Compliance) | Severity (1-10) | Remediation Directive\nCONSTRAINTS: No compliments, introductions or softened language; begin immediately with the table. Every row must begin with a direct, verbatim quote from the text. Where arithmetic fails, show the correct calculation in the Identified Flaw column. Limit the analysis to the 7 most severe flaws. Critique only what is explicitly written.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Any AI chat',
        hook: 'Structured assessment with cited evidence.',
        estMinutes: 2,
        title: 'Score it against a rubric',
        prompt:
          'Score this [document] against the attached [rubric or criteria], 1 to 5 per criterion. Present the results as a table:\nCriterion | Score (1-5) | Verbatim Evidence | Why That Score\nThe Verbatim Evidence column must quote the exact sentence or figure from the document. If the document contains nothing relevant to a criterion, write NO EVIDENCE and score it accordingly; do not invent a justification. Finish with the three revisions that would most improve the total score, in priority order.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Any AI chat',
        hook: 'Time travel makes the critique commit.',
        estMinutes: 2,
        title: 'Post-mortem from the future',
        prompt:
          'ROLE: You are a Forensic Systems Analyst in the year [CURRENT YEAR + 1].\nTASK: The initiative in the provided [document / plan] has failed catastrophically. Write the analytical post-mortem tracing the collapse to weaknesses present in the original document.\nFORMAT:\n- The Incident: a two-sentence summary of how it collapsed.\n- Causal Chain Analysis: the top 5 root causes. For each: Root Cause (name it); Probability Score (the five scores must sum to exactly 100%); The Seed (the exact passage that planted the failure, quoted verbatim); The Mechanism (exactly how that text became real-world failure).\nCONSTRAINTS: Avoid generic business risks ("lack of communication", "poor market timing"); focus strictly on structural, technical, strategic or compliance flaws in the text. State all assumptions explicitly.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Any AI chat',
        hook: 'One AI critiques, another judges the critique.',
        estMinutes: 2,
        title: 'Chain a second opinion',
        prompt:
          'You are a neutral adjudicator. Attached is [a document]; below is another AI\'s critique of it. Judge each point in the critique strictly against the document\'s own text, not against what sounds plausible. Answer as a table with columns:\nCritique Point | Verdict (CONFIRMED / OVERSTATED / WRONG) | Verbatim Quote From the Document | Why (one sentence)\nRules: every verdict must rest on an exact quote from the document; if the document contains nothing relevant to a point, write NO RELEVANT TEXT in the quote column rather than inventing one. After the table, list up to three material issues the critique missed, each with its own verbatim quote; if there are none, write NONE MISSED. End with one line: the single change to the document most worth making. Begin immediately with the table.\nTHE CRITIQUE:',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Gemini Notebook',
        hook: 'Answers only from files you have added to a notebook, with receipts.',
        estMinutes: 2,
        title: 'Grounded answers only',
        prompt:
          'ROLE: You are a strict, literal Data Extraction Engine.\nTASK: Answer the QUESTION using ABSOLUTELY NO OUTSIDE KNOWLEDGE; rely exclusively on the provided sources.\nQUESTION: [YOUR QUESTION]\nCONSTRAINTS:\n- Every claim, fact or metric must carry an inline citation naming the exact source and passage.\n- CRITICAL HARD-FAIL: if the sources do not contain enough to answer fully and accurately, output the exact phrase INSUFFICIENT_DATA.\n- Do not guess, infer or synthesise outside knowledge under any circumstances.\n- No conversational filler; do not attempt to be helpful if the data is absent.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Any AI chat',
        hook: 'Brainstorming that escapes the obvious.',
        estMinutes: 2,
        title: 'The scenario matrix',
        prompt:
          'ROLE: You are a Strategic Futurist.\nTASK: Conduct a divergent, probabilistic scenario analysis on the future of [INSERT TOPIC, INDUSTRY OR TECHNOLOGY] over the next [5 years].\nFORMAT: a table in four quadrants, two specific scenarios per quadrant:\n1. The Consensus Reality (high probability, low/medium impact): the likely linear progression.\n2. The Systemic Shift (high probability, high impact): the near-certain change that rewrites the landscape.\n3. The Quiet Disruption (low probability, low/medium impact): creeping changes that never make headlines but alter daily reality.\n4. The Black Swan (low probability, high impact): outliers that would instantly rewrite the rules.\nCONSTRAINTS: for each of the 8 scenarios give A) Scenario Name, B) Core Mechanism (the specific trigger), C) First-Order Consequence. No generic corporate jargon ("synergy", "digital transformation"); be highly specific. No conversational filler; begin immediately with the table.',
      },
    ],
    verdict:
      'You are leaving with my prompts in your pocket. Stealing from your new line manager in week one: exactly the initiative this team needs.',
  },

];



export function getMission(id) {
  return MISSIONS.find(m => m.id === id) || null;
}
