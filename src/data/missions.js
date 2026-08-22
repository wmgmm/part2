// All mission content for the workshop site: "The Gravitas Venture".
// One running thread: Christopher Gravitas has left IT Services to open a
// Welsh cake stall on campus, and each mission is one stage of making the
// venture real. Every mission is SELF-CONTAINED: provided files stand in for
// any other mission's output, so missions work in any order.
//
// THE SWAPPABLE RESOURCE CONTRACT (for Matt):
// The files in public/placeholders/ below are the whole scenario. Swap them
// (same filenames, or update the artifacts arrays here) to re-skin the
// workshop, e.g. venture_customer_feedback -> student module feedback.
//   Venture_Research_Brief.docx     - facilitator copy of the M1 brief (site shows it as a prompt; no download card)
//   Venture_Market_Report.pdf       - M1/M2/M5 pre-generated research report
//   Venture_Customer_Feedback.xlsx  - M3 data (plus .csv twin)
//   Venture_Business_Plan.docx      - M4/M5 deliberately flawed plan
//   Venture_Rubric.pdf              - M4 scoring rubric
//   Venture_Feedback_Summary.pdf    - M5 one-page stand-in for an M3 result
//   Venture_Theme_List.txt          - M6 fallback complaint themes
//   Venture_Sales_Log.xlsx          - M8 sales + waste data (Sales / Waste log sheets)
// Regenerate all of them with: python3 tools/make_artifacts.py
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
export const HERO_IMAGE = 'venture_stall.webp';

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
  report: {
    label: 'THE MARKET REPORT',
    filename: 'Venture_Market_Report.pdf',
    downloadPath: `${BASE}placeholders/Venture_Market_Report.pdf`,
    note: 'The finished market research report.',
  },
  feedbackXlsx: {
    label: 'CUSTOMER FEEDBACK (EXCEL)',
    filename: 'Venture_Customer_Feedback.xlsx',
    downloadPath: `${BASE}placeholders/Venture_Customer_Feedback.xlsx`,
    note: 'One term of stall feedback. Fictional, upload anywhere.',
  },
  feedbackCsv: {
    label: 'CUSTOMER FEEDBACK (CSV)',
    filename: 'Venture_Customer_Feedback.csv',
    downloadPath: `${BASE}placeholders/Venture_Customer_Feedback.csv`,
    note: 'Same data as CSV: the more reliable format for most AI tools.',
  },
  plan: {
    label: 'THE BUSINESS PLAN',
    filename: 'Venture_Business_Plan.docx',
    downloadPath: `${BASE}placeholders/Venture_Business_Plan.docx`,
    note: 'Written by an AI overnight. Submitted unread. Audit it.',
  },
  rubric: {
    label: 'THE RUBRIC',
    filename: 'Venture_Rubric.pdf',
    downloadPath: `${BASE}placeholders/Venture_Rubric.pdf`,
    note: 'Five criteria, scored 1 to 5, evidence required.',
  },
  feedbackSummary: {
    label: 'FEEDBACK SUMMARY',
    filename: 'Venture_Feedback_Summary.pdf',
    downloadPath: `${BASE}placeholders/Venture_Feedback_Summary.pdf`,
    note: 'A one-page customer feedback summary (a Mission 3 stand-in).',
  },
  salesLog: {
    label: 'THE SALES LOG',
    filename: 'Venture_Sales_Log.xlsx',
    downloadPath: `${BASE}placeholders/Venture_Sales_Log.xlsx`,
    note: 'A term of daily sales plus the waste log, on two sheets. Fictional, upload anywhere.',
  },
  themes: {
    label: 'THEME LIST (FALLBACK)',
    filename: 'Venture_Theme_List.txt',
    downloadPath: `${BASE}placeholders/Venture_Theme_List.txt`,
    note: 'The complaint themes, if you skipped Mission 3.',
  },
};

export const MISSIONS = [
  {
    id: 'm1',
    code: '01',
    level: 1,
    title: 'The Market',
    pageTitle: 'Research ANYTHING with Deep Research',
    tools: [TOOLS.deepResearch],
    accentType: 'stamp-red',
    accentText: 'START HERE',
    estMinutesCore: 11,
    summary: "Start the market research using Gemini's Deep Research.",
    toolInfo: {
      feature: 'Tool: Gemini Deep Research. A research agent that does your google searches and takes a while to run.',
      apps: [APPS.gemini],
    },
    workflow: ['Paste the brief', 'Edit the plan', 'Walk away ☕', 'Skim the report', 'Make the infographic'],
    brief:
      'Gravitas wants evidence the stall can work before he spends his pension on a griddle. Start the research run, walk away, come back. Prefer your own idea? Rewrite the brief.',
    artifacts: [
      {
        ...A.report,
        label: 'BACKUP: THE FINISHED REPORT',
        note: 'Only needed if your Deep Research run fails or you cannot wait: a ready-made report so you can carry on.',
      },
    ],
    steps: [
      {
        tier: 'core',
        estMinutes: 2,
        title: 'Brief your researcher',
        body:
          'In Gemini (gemini.google.com), choose Deep Research and paste the brief below, or rewrite it for your own idea. A good brief names the decisions the research should inform, not just the topic.',
        promptLabel: 'THE BRIEF (EDIT FOR YOUR IDEA)',
        prompt:
          'I am opening [a small Welsh cake stall on a UK university campus (Cardiff)]. Produce a sourced market briefing covering: who buys [from campus food stalls] and when (footfall patterns across the day and the academic year); realistic price expectations for [a fresh Welsh cake and comparable snacks]; who my competitors would be [on and near a typical campus, including mobile and permanent options]; what makes [small campus food ventures] succeed or fail, including [the regulatory basics for UK street food]; and three opportunities or risks I am probably not thinking about. Cite every source.',
      },
      {
        tier: 'core',
        estMinutes: 3,
        title: 'Edit the plan. Then walk away',
        body:
          'Before it runs, Gemini shows you its research plan. EDIT IT: cross out what you do not need, add what is missing. That edit is the entire skill.',
      },
      {
        tier: 'core',
        estMinutes: 3,
        title: 'Return and skim like an executive',
        body:
          'When the report is done, use this to ask for how this info changes your decisions.',
        prompt:
          'Give me the five findings in this report that should change my plans, each in one sentence, each with its source. Then the single biggest risk the report identifies.',
      },
      {
        tier: 'core',
        estMinutes: 3,
        title: 'Turn the findings into an infographic',
        body:
          'Still in Gemini, make the findings shareable before you leave. Ask for an image, or open Canvas and use its Create menu to generate an Infographic from the same material.',
        prompt:
          'Using the five findings above, create a clean, simple infographic a colleague would understand in ten seconds: white background, one accent colour, large readable labels, no clutter. Then make a second, portrait version sized for a phone screen.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Gemini Notebook',
        hook: 'Two variations worth knowing.',
        estMinutes: 3,
        title: 'Ideas: other ways in',
        body:
          'You can run Deep Research from INSIDE Gemini Notebook instead, and the report lands in your notebook as a source automatically, which sets up Mission 2 with zero copying. And when you run it in Gemini, prefer "Export to Docs" at the end: a Doc drops straight into a notebook through the Drive picker.',
      },
    ],
    verdict:
      'You edited the plan before pressing the button. In IT Services we called that requirements gathering. In baking it is how you avoid burning the first batch.',
  },

  {
    id: 'm2',
    code: '02',
    level: 2,
    title: 'The Evidence',
    pageTitle: 'Question the Report in Gemini Notebook',
    stretchTitle: 'CHOOSE YOUR NEXT MOVE',
    stretchIntro: 'Pick ONE path below; come back for another any time.',
    tools: [TOOLS.notebook],
    estMinutesCore: 12,
    summary: 'Question the research report in Gemini Notebook.',
    toolInfo: {
      feature: 'Tool: Gemini Notebook (until recently NotebookLM). It only answers from the files you give it, and shows its receipts.',
      apps: [APPS.notebook],
    },
    workflow: ['Add the report as a source', 'Mind map', 'Ask with citations', '30-second check'],
    brief:
      'A report you skim once is a report you misremember forever. Load the market report and interrogate it. Any non-sensitive document of your own works just as well.',
    artifacts: [A.report],
    steps: [
      {
        tier: 'core',
        estMinutes: 3,
        title: 'Ground it',
        body:
          'Create a notebook at notebooklm.google.com (the old links still redirect) and add the market report as a source: your own via Export to Docs and the Drive picker, or the provided PDF.',
      },
      {
        tier: 'core',
        estMinutes: 3,
        title: 'Map it',
        body:
          'In the Studio panel, generate a Mind Map: a clickable visual index of everything the report covers. Thirty seconds, and you now know the report better than most people know documents they wrote themselves.',
      },
      {
        tier: 'core',
        estMinutes: 4,
        title: 'Ask with citations',
        body: 'Now the difference from ordinary chat: every claim must come from your sources.',
        prompt:
          'Based only on the sources: what should I charge for [a single Welsh cake]? Cite the passage that supports the answer. Then list every risk the sources name for [a venture like this], each with its source. If the sources do not cover something, say so plainly rather than guessing.',
      },
      {
        tier: 'core',
        estMinutes: 2,
        title: 'The 30-second check',
        check: true,
        body:
          'Click one citation. Does the passage actually support the claim? Grounded does not mean gospel; it means checkable. So check.',
      },
      {
        tier: 'stretch',
        choice: 'A',
        toolChip: 'Notebook + Deep Research',
        hook: 'For the researcher who wants the gaps found.',
        estMinutes: 5,
        title: 'Close the loop',
        body:
          'The newest move in the toolkit: run Deep Research from INSIDE the notebook, grounded in your own evidence plus the open web. This is the research step almost nobody demonstrates.',
        prompt:
          'Based only on my sources, what has my evidence failed to cover that a sceptical [funder] would ask about? List the gaps, then research those gaps and report back with sources.',
      },
      {
        tier: 'stretch',
        choice: 'B',
        toolChip: 'Notebook Studio',
        hook: 'For the visual, on-brand option.',
        estMinutes: 6,
        title: 'Infographic, then make it Cardiff',
        body:
          'Generate a Key-Numbers Infographic in the Studio panel. Then, instead of accepting the default look, open the revise (pencil) panel and paste the Cardiff University design prompt below with the first line "MODE: INFOGRAPHIC". One click makes an infographic; a design prompt makes YOUR infographic.',
        promptLabel: 'CARDIFF DESIGN PROMPT',
        prompt: CARDIFF_DESIGN_PROMPT,
        link: { href: PROMPT_LIBRARY_URL, label: "From The Matts' NotebookLM Prompt Library" },
      },
      {
        tier: 'stretch',
        choice: 'C',
        toolChip: 'Notebook Studio',
        hook: 'For the commute.',
        estMinutes: 4,
        title: 'Make it listenable',
        body:
          'Generate an Audio Overview: two hosts discussing your market evidence like it is the story of the year. Useful for the commute; unsettling the first time.',
      },
    ],
    verdict:
      'You asked for evidence and then checked a citation. The stall does not exist yet and it is already better governed than several departments I could name.',
  },

  {
    id: 'm3',
    code: '03',
    level: 1,
    title: 'The Customers',
    pageTitle: 'Customer Feedback Analysis with Gemini',
    stretchTitle: 'CHOOSE YOUR NEXT MOVE',
    stretchIntro:
      'The analysis is done; now decide what to make of it. Like the old adventure books: pick ONE path below. You can always come back and take another.',
    tools: [TOOLS.gemini],
    estMinutesCore: 11,
    summary: "Analyse the customer feedback spreadsheet with Gemini's code analysis.",
    toolInfo: {
      feature: 'Tool: Gemini. It writes code to do the maths on your spreadsheet, instead of guessing.',
      apps: [APPS.gemini],
    },
    workflow: ['Upload the spreadsheet', 'Verified summary', 'Find the themes', '30-second check'],
    brief:
      'The stall has run for a term and collected 120 customer feedback responses (fictional, upload anywhere). Find out what they are really saying. Any non-sensitive spreadsheet of your own works with the same prompts.',
    artifacts: [A.feedbackXlsx, A.feedbackCsv],
    steps: [
      {
        tier: 'core',
        estMinutes: 4,
        title: 'The verified summary',
        body:
          'Upload the file to Gemini with the prompt below. The magic words are "use code". A good analysis also confesses what is wrong with the data; watch whether it finds the problems on its own.',
        prompt:
          'Summarise this spreadsheet. Use code (Python) to calculate the figures, do not estimate them. Report: the rows, columns and what the data covers; the key numbers (totals, averages, highest and lowest); any missing values, outliers or suspect entries; and three insights in plain business English.',
      },
      {
        tier: 'core',
        estMinutes: 5,
        title: 'Find the themes',
        body:
          'The free-text comments are where the truth lives, and nobody has time to read a hundred of them. Make the machine do the reading and show its working.',
        prompt:
          'Categorise every free-text comment in this file into themes you derive from the data itself. Give me: the themes ranked by count with percentages; one representative quote per theme with its row reference ([response_id]); and the comments you found hard to place, with why. Finish with this: if I could fix only one thing, what does the data say it should be?',
      },
      {
        tier: 'core',
        estMinutes: 2,
        title: 'The 30-second check',
        check: true,
        body:
          'Pick one number from the answers, find the rows by response_id in the file, and verify it yourself. Also: did the summary mention the blank ratings and the suspicious spend entry? If not, you just caught the machine skimming.',
      },
      {
        tier: 'stretch',
        choice: 'A',
        toolChip: 'Gemini',
        hook: 'For the visual thinker.',
        estMinutes: 3,
        title: 'Chart the trend',
        body: 'Follow up in the same chat:',
        prompt:
          'Chart [the weekly average rating] across [the term]. Explain in two bullets what happened [in the middle weeks], and what evidence in the comments supports your explanation.',
      },
      {
        tier: 'stretch',
        choice: 'B',
        toolChip: 'Gemini Notebook',
        hook: 'For the one who has a meeting about this later.',
        estMinutes: 6,
        title: 'Present the findings as slides',
        body:
          'Paste your themes answer into Gemini Notebook as a new source, then in Studio generate a Slide Deck: "five slides for the stall owner: what customers say, and what to do about it". Fancy it up with the Cardiff design prompt from Mission 5.',
      },
      {
        tier: 'stretch',
        choice: 'C',
        toolChip: 'Sheets + Canvas',
        hook: 'For the one who wants it updating itself.',
        estMinutes: 6,
        title: 'Build the live dashboard',
        body:
          'Open the feedback file in Google Sheets, open the Ask Gemini side panel and choose Create canvas. Filters and edits write back to the sheet underneath.',
        prompt:
          'Build an interactive dashboard from this sheet. KPI cards along the top for [average rating, total responses and total spend]; a [weekly average-rating] chart across [the term]; filter toggles for [time slot and item]; and a bar chart of [complaint themes] from the comments.',
      },
      {
        tier: 'stretch',
        choice: 'D',
        toolChip: 'Gemini',
        hook: 'For the poster-on-the-stall option.',
        estMinutes: 5,
        title: 'Turn it into an infographic',
        body:
          'Run the prompt below in Gemini. Or paste your summary into Gemini Notebook as a text source (the spreadsheet itself will not ingest, and hitting that wall IS the lesson) and generate one in Studio.',
        prompt:
          'Using this analysis, create a clean, simple infographic [a stall customer] would understand: white background, one accent colour, large readable labels, no clutter.',
      },
      {
        tier: 'stretch',
        choice: 'E',
        toolChip: 'Gemini',
        hook: 'For the pessimist, and therefore the planner.',
        estMinutes: 4,
        title: 'Predict the failure',
        prompt:
          'It is next term and the stall has closed. Using only this feedback data, write the post-mortem: what killed it, which warning signs were already in these comments, and what single change would most likely have saved it.',
      },
    ],
    verdict:
      'Nearly half my customers are queueing too long or finding an empty tray. I am told this is a good problem to have. It is not. Mission 06 exists because of you.',
  },

  {
    id: 'm4',
    code: '04',
    level: 3,
    title: 'The Audit',
    pageTitle: 'Business Plan Audit with Copilot',
    stretchTitle: 'CHOOSE YOUR NEXT MOVE',
    stretchIntro: 'Pick ONE path below; come back for another any time.',
    tools: [TOOLS.copilot],
    estMinutesCore: 15,
    summary: 'Audit the flawed business plan using Copilot chat.',
    toolInfo: {
      feature: 'Tool: Copilot chat. Upload a document and interrogate it. Chat critiques; agent mode rewrites, so stay in chat.',
      apps: [APPS.copilot],
    },
    workflow: ["Devil's advocate", 'Post-mortem from the future', 'Score with the rubric', '30-second check'],
    brief:
      'Gravitas asked an AI to write his business plan overnight and submitted it unread. It looks professional. It is not: find the flaws before an investor does. Everyone audits the same plan, so you can compare catches with the room.',
    artifacts: [A.plan, A.rubric],
    steps: [
      {
        tier: 'core',
        estMinutes: 5,
        title: "Devil's advocate",
        body: 'Upload the plan to Copilot chat in a NEW chat (fresh eyes, no accumulated politeness).',
        prompt:
          'Act as a constructive devil\'s advocate reviewing this [business plan]. Identify the weaknesses a sceptical [investor] would seize on: unsupported claims, arithmetic that does not add up, missing regulatory or operational basics, and internal contradictions. Be specific: quote the sentence, then state the problem. Do not soften criticism.',
      },
      {
        tier: 'core',
        estMinutes: 4,
        title: 'The post-mortem from the future',
        body:
          'Critique finds flaws; a post-mortem finds the ones that kill. Time-travel makes the AI commit to consequences.',
        prompt:
          'It is [one year after launch] and [the Welsh cake stall] has failed. Write the post-mortem: the five most likely causes of death, each traced to a specific weakness in this [business plan], quoting the passage that planted it.',
      },
      {
        tier: 'core',
        estMinutes: 5,
        title: 'Score it against the rubric',
        body: 'Structured assessment with cited evidence: the actual workplace skill.',
        prompt:
          'Score this [business plan] against the attached rubric, 1 to 5 per criterion. For every score, cite the exact sentence or figure from the plan that justifies it. Finish with the three revisions that would most improve the total score.',
      },
      {
        tier: 'core',
        estMinutes: 1,
        title: 'The 30-second check',
        check: true,
        body:
          'Pick one rubric score. Open the plan. Does the cited sentence really say what the AI claims it says?',
      },
      {
        tier: 'stretch',
        choice: 'A',
        toolChip: 'Copilot + Gemini',
        hook: 'For the sceptic: agreement between models is weak evidence.',
        estMinutes: 5,
        title: 'Second opinion, adjudicated',
        body:
          'Run the same devil\'s advocate prompt in Gemini. Then paste both critiques into a third prompt. Agreement between models is weak evidence; disagreement is a flag worth chasing.',
        prompt:
          'Here are two AI reviews of the same [business plan]. Where do they disagree? For each disagreement, decide which review is right based on the evidence in the plan itself, quoting it. What did each reviewer miss that the other caught?',
      },
      {
        tier: 'stretch',
        choice: 'B',
        toolChip: 'Gemini Canvas',
        hook: 'For the one who wants to watch the numbers fall over.',
        estMinutes: 6,
        title: 'Break the plan with sliders',
        body:
          'The plan claims £1,800 a week. Make the claim move. Build a scenario dashboard in Gemini Canvas and drag the sliders until the plan\'s own numbers fall over: it cannot survive its stated production ceiling.',
        prompt:
          'Build an interactive financial scenario dashboard for [a campus food stall] as a single-page web app. Sliders: price per cake (£1.50 to £4.00), cakes sold per day (50 to 600) and trading weeks per year (20 to 52); a fixed-costs input defaulting to £75 per week pitch fee. Show weekly revenue, weekly profit assuming 40 per cent ingredient costs, and annual profit. Highlight the daily-sales figure in red beyond 320 cakes per day, labelled "exceeds single-griddle capacity".',
      },
      {
        tier: 'stretch',
        choice: 'C',
        toolChip: 'Copilot',
        hook: 'For your actual work.',
        estMinutes: 5,
        title: 'Your own draft',
        body:
          'Now the transferable version: run the rubric prompt against any non-sensitive draft of your own, a proposal, a report, a course description. The rubric criteria transfer better than you expect.',
      },
    ],
    verdict:
      'Ten flaws were planted in that plan. Find six and you have outperformed both the AI that wrote it and the man who submitted it unread. I can say this because the man was me.',
  },

  {
    id: 'm5',
    code: '05',
    level: 3,
    title: 'The Pitch',
    pageTitle: 'Pitch Deck in Notebook Studio',
    stretchTitle: 'CHOOSE YOUR NEXT MOVE',
    stretchIntro: 'Pick ONE path below; come back for another any time.',
    tools: [TOOLS.notebook],
    estMinutesCore: 12,
    summary: 'Build the investor slide deck in Gemini Notebook Studio.',
    toolInfo: {
      feature: 'Tool: Gemini Notebook Studio. One button turns your sources into slides, quizzes and video.',
      apps: [APPS.notebook],
    },
    workflow: ['Load three sources', 'Generate the deck', 'Take your own quiz'],
    brief:
      'Gravitas has twenty minutes to impress a griddle-franchise owner. Slides built from your sources beat slides built from a blank page. Load the evidence and let Studio do the deck; your own documents work just as well.',
    artifacts: [A.plan, A.report, A.feedbackSummary],
    steps: [
      {
        tier: 'core',
        estMinutes: 4,
        title: 'Load the evidence',
        body:
          'New notebook, three sources: the business plan, the market report and the feedback summary (all provided; substitute your own versions if you made them in earlier missions).',
      },
      {
        tier: 'core',
        estMinutes: 5,
        title: 'Generate the deck',
        body:
          'In Studio, generate a Slide Deck with the ask below. Note: deck generation is gated on some education tiers; if you do not see it, export the notebook Report to Docs and ask Gemini Canvas to build the deck from it, which is nearly as good and teaches the same lesson.',
        prompt:
          'Create a ten-slide [investor pitch for the stall] from these sources, honest about the risks the sources raise. One message per slide, a clear ask on the final slide.',
      },
      {
        tier: 'core',
        estMinutes: 3,
        title: 'Take your own quiz',
        body:
          'Generate a Quiz from the same sources and take it. If your pitch cannot survive its own quiz, the pitch is not ready, and better to learn that here than in the meeting.',
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
        hook: 'For the pitch that plays itself.',
        estMinutes: 6,
        title: 'The video pitch',
        body:
          'Generate a Video Overview (generation queues for a few minutes; start it and do something else, which by now is a habit). Then revise it with the same Cardiff prompt, "MODE: VIDEO".',
      },
    ],
    verdict:
      'A deck grounded in evidence, on brand, and bilingual. The Vice-Chancellor once said my slides looked like a ransom note. Look at us now.',
  },

  {
    id: 'm6',
    code: '06',
    level: 3,
    title: 'The App',
    pageTitle: 'Build an App with Gemini Canvas',
    tools: [TOOLS.canvas],
    estMinutesCore: 11,
    summary: "Build the app that fixes the top complaint using Gemini Canvas.",
    toolInfo: {
      feature: 'Tool: Gemini Canvas. Describe an app in plain English; it builds the app.',
      apps: [APPS.gemini],
    },
    workflow: ['Pick the target', 'Build it in Canvas', 'Show someone'],
    brief:
      'Mission 3 found the problem: queues and empty trays. Gravitas cannot code and no longer has an IT department, which he asks you not to repeat. Build the fix; better still, build one for a problem your own team has.',
    artifacts: [A.themes],
    steps: [
      {
        tier: 'core',
        estMinutes: 2,
        title: 'Pick the target',
        body:
          'Use the top complaint theme from YOUR Mission 3 analysis, or take one from the provided theme list. Fixing the biggest complaint is strategy; fixing an easy one is decoration.',
      },
      {
        tier: 'core',
        estMinutes: 7,
        title: 'Build it',
        body:
          'In Gemini, open Canvas and use the prompt below. Yes, it produces a working app. No, you do not need to read the code. Iterate in plain English: "bigger buttons", "add a Welsh language toggle", "show a running total".',
        prompt:
          'Create a single-page web app for [a campus Welsh cake stall] that fixes this customer problem: [PASTE YOUR TOP THEME, e.g. "long queues at lunchtime and selling out by 1pm"]. Ideas if useful: [a pre-order form with pickup time slots, a live sold-out board, a Build-a-Box picker with a running price total]. Friendly and fast, single HTML file with Tailwind CSS and vanilla JavaScript, no backend: fake the data in JavaScript.',
      },
      {
        tier: 'core',
        estMinutes: 2,
        title: 'Show someone',
        body:
          'Turn to a neighbour (or a colleague on Monday) and let them press the buttons. Software that fixes a complaint gets used; software that is merely impressive gets a nod.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Gemini',
        hook: 'The honest final step.',
        estMinutes: 4,
        title: 'Grade your own build',
        body: 'Check the build against the evidence it came from.',
        prompt:
          'Here is the HTML of an app built to fix a customer complaint, plus the list of complaint themes from the feedback data. Which theme does the app actually solve, which does it partially help, and which does it ignore? Be blunt.',
      },
    ],
    verdict:
      'You built software that shortens a queue for griddle cakes. Somewhere my old job title weeps, and I have never been happier. Ship it.',
  },
  {
    id: 'm8',
    code: '07',
    level: 2,
    title: 'The Dashboard',
    pageTitle: 'Build a Dashboard, Twice',
    tools: ['Copilot', 'Gemini Canvas'],
    estMinutesCore: 15,
    summary: 'Same sales data: dashboard in Copilot, control room in Canvas.',
    toolInfo: {
      feature:
        'Tool duel: Copilot builds the dashboard inside your spreadsheet; Gemini Canvas builds a control room around it. Same data, two philosophies.',
      apps: [APPS.copilot, APPS.gemini],
    },
    workflow: ['Download the sales log', 'Dashboard in Copilot', 'Control room in Canvas', 'Compare'],
    brief:
      'A term of stall sales and the waste log, warts and all: something odd happened mid-term, and one number is a typo. Build a dashboard twice and see which tool tells you the truth faster. Any non-sensitive sales or activity data of your own works the same way.',
    artifacts: [A.salesLog],
    steps: [
      {
        tier: 'core',
        estMinutes: 6,
        title: 'The dashboard, in Copilot',
        body:
          'Upload the workbook to Copilot (or open it in Excel and use Copilot there). Copilot works IN the spreadsheet: pivots, charts, a written verdict.',
        prompt:
          'Analyse this sales workbook (Sales and Waste log sheets). Build me a dashboard on a new sheet: revenue by [product] and week, the weekly revenue trend, waste cost by reason, and a written panel of the five insights a manager should act on. Flag anything in the data that looks abnormal or wrong, and say why.',
      },
      {
        tier: 'core',
        estMinutes: 7,
        title: 'The control room, in Gemini Canvas',
        body:
          'Now the same data as an app. Open Canvas, attach the workbook, and use the prompt below. This one has party tricks: press SIMULATE A BAD WEEK and watch the control chart catch it.',
        prompt:
          'Build an interactive sales control room for [a campus Welsh cake stall] from this spreadsheet, as a single-page web app with a dark control-room theme. Across the top: an andon strip with one status lamp per [product] - green, amber or red based on the latest week against that product\'s own average. Charts: (1) a statistical process control chart of daily revenue with the mean and plus/minus three sigma limits calculated from the data, highlighting in red any point outside the limits or any run of eight points on one side of the mean, labelled "special cause: investigate"; (2) a Pareto chart of [waste reasons] by cost with a cumulative percentage line and the vital-few cutoff marked; (3) KPI cards that count up on load: revenue, units, average sale, and cost of poor quality (waste cost). Under every chart, write one plain-English sentence of insight that updates when I filter. Filters: date range and [product]. Add a SITUATION REPORT button that turns whatever is on screen into five bullet points I can paste into an email, and a Cymraeg/English toggle for the labels. Party tricks: a SIMULATE A BAD WEEK button that injects a realistic failure into the data so the control chart and lamps catch it live, and a REPLAY button that streams the term in day by day like a live feed. Single HTML file, Tailwind CSS and vanilla JavaScript, no backend: embed the data as JSON.',
      },
      {
        tier: 'core',
        estMinutes: 2,
        title: 'The 30-second check',
        check: true,
        body:
          'Two things are hiding in this data: a fortnight that is genuinely abnormal, and one typed-wrong number. Did each dashboard find them? Open the raw sheet and confirm at least one of them yourself.',
      },
      {
        tier: 'core',
        estMinutes: 2,
        title: 'Pick a winner',
        body:
          'Honest question: which of the two would you actually send to your manager, and which would you keep for yourself? There is no right answer, and that is the lesson: Copilot upgraded your spreadsheet, Canvas replaced it.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Sheets + Canvas',
        hook: 'The live version.',
        estMinutes: 5,
        title: 'Wire it to the sheet',
        body:
          'Upload the workbook to Google Sheets, open the Ask Gemini side panel and choose Create canvas with the same prompt. Built this way, the dashboard reads the live sheet: edits to the data update the control room.',
      },
    ],
    verdict:
      'Two dashboards before lunch, and one of them caught the griddle fortnight on its own. The quality department used to take a quarter to do that. Do not tell them.',
  },
  {
    id: 'm9',
    code: '08',
    level: 2,
    title: 'The Prompt Workshop',
    pageTitle: 'Make AI Write Better Prompts Than You',
    tools: ['Any AI chat'],
    estMinutesCore: 13,
    summary: 'Meta-prompting: make the AI critique, rewrite and design your prompts.',
    toolInfo: {
      feature:
        'Tool: any AI chat. Meta-prompting: the fastest route to a great prompt is making the AI write it.',
      apps: [APPS.copilot, APPS.gemini],
    },
    workflow: ['Run the lazy prompt', 'AI rewrites it', 'Compare the outputs', 'AI interviews you'],
    brief:
      'Gravitas needs a poster for the stall\'s reopening, and his prompt, in full, is "write a poster". Do not fix the prompt yourself: make the AI fix it. This is the skill that improves every other skill on this site.',
    artifacts: [],
    steps: [
      {
        tier: 'core',
        estMinutes: 2,
        title: 'Run the lazy prompt',
        body: 'Run it exactly as written. Keep the output; it is the before photo.',
        prompt: 'Write a poster for [the reopening of a campus Welsh cake stall].',
      },
      {
        tier: 'core',
        estMinutes: 4,
        title: 'Make the AI rewrite the prompt',
        body: 'In a NEW chat, hand the lazy prompt over for demolition.',
        prompt:
          'Critique this prompt, then rewrite it to be far more effective: "Write a poster for [the reopening of a campus Welsh cake stall]." Your rewrite must specify: the role the AI should take, the audience, the tone, the constraints (size, word limits, what must be included), and the exact output format. Finish with two bullets on why your version will produce better work.',
      },
      {
        tier: 'core',
        estMinutes: 3,
        title: 'The 30-second check',
        check: true,
        body:
          'Run the rewritten prompt and put the two outputs side by side. Which one would you actually put on a wall? The gap between them is the prompt, not the model.',
      },
      {
        tier: 'core',
        estMinutes: 4,
        title: 'Let the AI interview you',
        body:
          'Now the transferable version, on your real work. The AI asks the questions you did not know your prompt needed to answer.',
        prompt:
          'I need a prompt for this task: [DESCRIBE A REAL TASK FROM YOUR OWN WORK]. Interview me first: ask up to five questions, one at a time, that will make the prompt better. Then write the final prompt, and one line on when I should reuse it.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Any chat',
        hook: 'Turn it into a standing habit.',
        estMinutes: 2,
        title: 'The IMPROVE: trick',
        body: 'Paste this once at the start of a chat and you have a prompt editor on call.',
        prompt:
          'From now on in this chat, whenever I send a message starting with IMPROVE:, do not answer the prompt that follows. Instead return a stronger version of that prompt and one sentence on what you changed.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Gems / Copilot agents',
        hook: 'Make your best prompt a button.',
        estMinutes: 5,
        title: 'Package it',
        body:
          'Take the prompt the interview produced and paste it into the instructions of a Gemini Gem or a Copilot agent. Congratulations: your best prompt is now a reusable assistant rather than a thing you hunt for in old chats.',
      },
    ],
    verdict:
      'You made the machine improve your instructions to the machine. Recursion, as a productivity gain. My old department would have formed a working group.',
  },
  {
    id: 'm7',
    code: '09',
    level: 1,
    title: 'Useful Prompts (for after the workshop)',
    pageTitle: 'Prompts to Take Back to Work',
    tools: ['Any AI chat'],
    estMinutesCore: 0,
    summary: 'Reusable templates and meta-prompting for your own work.',
    toolInfo: {
      feature:
        'Works in any AI chat. The square brackets mark what to swap for your own task; everything inside them is just the Welsh cake default.',
      apps: [APPS.gemini, APPS.notebook, APPS.copilot],
    },
    brief:
      'A good prompt is a reusable asset, not a one-off. These are the prompts behind the missions with the Welsh cakes stripped out: steal them, swap the brackets, keep them somewhere you can find on a Tuesday.',
    artifacts: [],
    stretchTitle: 'THE PROMPTS',
    stretchIntro: 'Open one, copy it, swap the [brackets].',
    steps: [
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Gemini Deep Research',
        hook: 'The fifteen-minute researcher, on any topic.',
        estMinutes: 1,
        title: 'Deep Research on anything',
        prompt:
          'Produce a sourced briefing on [TOPIC]. Cover: what has changed in the last 12 months; who the key players are; realistic costs and prices; what makes efforts like this succeed or fail; and three risks or opportunities I am probably not thinking about. Cite every source.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Any chat',
        hook: 'Meta-prompting: the best prompt writer is the AI itself.',
        estMinutes: 1,
        title: 'Let AI write the prompt',
        prompt:
          'You are an expert prompt designer. Write the most effective prompt for this task: [DESCRIBE THE TASK, WHO THE OUTPUT IS FOR, AND WHAT GOOD LOOKS LIKE]. Include the role the AI should take, the constraints, and the exact output format. Ask me up to three clarifying questions first if the answers would improve the prompt.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Gemini',
        hook: 'Meta-prompting again: a better brief means better research.',
        estMinutes: 1,
        title: 'Let AI write your Deep Research brief',
        prompt:
          'Draft a Deep Research brief for me. The decision it must inform: [WHAT YOU NEED TO DECIDE]. Write the brief so it names the questions to answer, the evidence to prefer, and the timeframe that matters, and end it with "Cite every source." Show me the brief for editing before I run it.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Gemini',
        hook: 'Make it compute, not guess.',
        estMinutes: 1,
        title: 'Verified spreadsheet analysis',
        prompt:
          'Summarise this spreadsheet. Use code (Python) to calculate the figures, do not estimate them. Report: the rows, columns and what the data covers; the key numbers (totals, averages, highest and lowest); any missing values, outliers or suspect entries; and three insights in plain business English.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Any chat',
        hook: 'AI is a better critic than author.',
        estMinutes: 1,
        title: "Devil's advocate",
        prompt:
          'Act as a constructive devil\'s advocate reviewing this [draft / plan / proposal]. Identify the weaknesses a sceptical reader would seize on: unsupported claims, arithmetic that does not add up, missing basics, internal contradictions. Be specific: quote the sentence, then state the problem. Do not soften criticism.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Any chat',
        hook: 'Time travel makes the critique commit.',
        estMinutes: 1,
        title: 'Post-mortem from the future',
        prompt:
          'It is [a year from now] and [this plan] has failed. Write the post-mortem: the five most likely causes, each traced to a specific weakness in the document, quoting the passage that planted it.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Gemini Notebook',
        hook: 'Receipts or it did not happen.',
        estMinutes: 1,
        title: 'Grounded answers only',
        prompt:
          'Based only on the sources: [YOUR QUESTION]. Cite the passage supporting each claim, and say plainly if the sources do not cover something rather than guessing.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Gemini Canvas',
        hook: 'Working software from a sentence.',
        estMinutes: 1,
        title: 'Build a small tool',
        prompt:
          'Create a single-page web app that [solves this problem: DESCRIBE IT]. Friendly and fast, single HTML file with Tailwind CSS and vanilla JavaScript, no backend: fake the data in JavaScript.',
      },
    ],
    verdict:
      'You are leaving with my prompts in your pocket. Stealing from the founder: the first sound business decision anyone has made all day.',
  },

];



export function getMission(id) {
  return MISSIONS.find(m => m.id === id) || null;
}
