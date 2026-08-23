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
    estMinutesCore: 15,
    summary: "Start the market research using Gemini's Deep Research.",
    toolInfo: {
      feature: 'Tool: Gemini Deep Research. A research agent that does your Google searches and takes five to fifteen minutes to run.',
      apps: [APPS.gemini],
    },
    workflow: ['Paste the brief', 'Edit the plan', 'Make it personal', 'Skim the report', 'Make the infographic'],
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
          'In Gemini (gemini.google.com), choose Deep Research in the tools menu beneath the prompt box and paste the brief below, or rewrite it for your own idea. A good brief dictates the report\'s sections and tells the tool what to do when data is missing, not just the topic.',
        promptLabel: 'THE BRIEF (EDIT FOR YOUR IDEA)',
        prompt:
          'ROLE: You are a market research analyst preparing a briefing for a first-time food vendor.\nTASK: Research the viability of [a small Welsh cake stall on a UK university campus (Cardiff)].\nFORMAT: Use exactly these section headings:\n- Who Buys, and When: footfall patterns for [campus food stalls] across the day and the academic year.\n- Price Expectations: realistic prices for [a fresh Welsh cake and comparable snacks].\n- Competitors: [on and near a typical campus, including mobile and permanent options].\n- Succeed or Fail: what decides it for [small campus food ventures], including [the regulatory basics for UK street food].\n- Blind Spots: three opportunities or risks I am probably not thinking about.\nCONSTRAINTS: Cite every claim to its source. If a price or figure is not in your sources, write DATA UNAVAILABLE rather than estimating it.',
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
          'When the report is done, do not read it top to bottom. Ask how it changes your decisions.',
        prompt:
          'From this report only, give me a three-column table: Finding, So I Should, Source. Fill it with the five findings most likely to change my plans, one sentence per cell, naming the report\'s cited source in each row. Below the table, one line: the single biggest risk the report identifies, with its source. No preamble.',
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
        tier: 'core',
        estMinutes: 3,
        title: 'Turn the findings into an infographic',
        body:
          'Still in Gemini, make the findings shareable before you leave. Ask for an image, or open Gemini Canvas and use its Create menu to generate an Infographic from the same material.',
        prompt:
          'Using only the five findings in the table above (no new numbers, no invented claims), create a clean, simple infographic [a colleague] would understand in ten seconds: white background, one accent colour, large readable labels, no clutter. Then make a second, portrait version sized for a phone screen.',
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
          'Create a notebook at notebooklm.google.com (the old links still redirect) and add the market report as a source: the provided PDF, or your own Mission 1 report (Export to Docs in Gemini, then Add sources and pick it from Drive).',
      },
      {
        tier: 'core',
        estMinutes: 3,
        title: 'Map it',
        body:
          'In the Studio panel (right-hand side), generate a Mind Map: a clickable visual index of everything the report covers. Thirty seconds, and you now know the report better than most people know documents they wrote themselves.',
      },
      {
        tier: 'core',
        estMinutes: 4,
        title: 'Ask with citations',
        body: 'Now the difference from ordinary chat: every claim must come from your sources, and a blunt INSUFFICIENT_DATA beats a confident guess.',
        prompt:
          'ROLE: a strict, literal fact-checker. Answer from the sources in this notebook and nothing else.\nQ1: What should I charge for [a single Welsh cake]? Cite the passage that supports the figure.\nQ2: List every risk the sources name for [a venture like this], each with its citation.\nRULES: no outside knowledge, no estimates, no filler. If the sources cannot fully answer a question, output the exact phrase INSUFFICIENT_DATA for that question instead of guessing.',
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
          'The newest move in the toolkit: run Deep Research from INSIDE the notebook, grounded in your own evidence plus the open web. Find what your document misses before a reviewer does.',
        prompt:
          'Based only on my sources: what has my evidence failed to cover that a sceptical [funder] would ask about?\nOutput three sections:\nGAP REGISTER: 3-5 gaps, each phrased as one specific research question.\nFINDINGS: research each question on the open web; a short answer per gap, with sources.\nVERDICT: the single gap I most need to fix before anyone sceptical reads this.',
      },
      {
        tier: 'stretch',
        choice: 'B',
        toolChip: 'Notebook Studio',
        hook: 'For the visual, on-brand option.',
        estMinutes: 6,
        title: 'Infographic, then make it Cardiff',
        body:
          'Generate a Key-Numbers Infographic in the Studio panel. Then, instead of accepting the default look, open the revise (pencil) panel, type MODE: INFOGRAPHIC, and paste the Cardiff University design prompt below beneath it. One click makes an infographic; a design prompt makes YOUR infographic.',
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
          'Upload the file to Gemini with the prompt below. The magic words are "use code". The prompt also demands a confession: a stated DATA UNAVAILABLE beats a confident guess, and section 3 is where the machine owns up to the mess.',
        prompt:
          'Act as a careful data analyst. Summarise this spreadsheet. Use code (Python) for every figure; if something cannot be computed from the file itself, write DATA UNAVAILABLE rather than estimating it. Report, in this order:\n1. Shape: rows, columns and what the data covers.\n2. Key numbers: totals, averages, highest and lowest, each computed by code.\n3. Anomalies: every missing value, outlier or suspect entry, each with its [response_id]. If there are none, write NONE FOUND rather than staying silent.\n4. Three insights in plain business English, each tied to a number above.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Gemini',
        hook: 'Nobody has time to read a hundred of them.',
        estMinutes: 1,
        title: 'Find the themes in free-text comments',
        prompt:
          'Categorise every free-text comment in this file into themes you derive from the data itself. Give me: the themes ranked by count with percentages; one representative quote per theme with its row reference; and the comments you found hard to place, with why. Finish with this: if I could fix only one thing, what does the data say it should be?',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Any AI chat',
        hook: 'Structured assessment with cited evidence.',
        estMinutes: 1,
        title: 'Score it against a rubric',
        prompt:
          'Score this [document] against the attached [rubric or criteria], 1 to 5 per criterion. For every score, cite the exact sentence or figure that justifies it. Finish with the three revisions that would most improve the total score.',
      },
      {
        tier: 'core',
        estMinutes: 5,
        title: 'Find the themes',
        body:
          'The free-text comments are where the truth lives, and nobody has time to read a hundred of them. Make the machine do the reading and show its working.',
        prompt:
          'Categorise every free-text comment in this file into themes you derive from the data itself, not a preset list. Answer as a table, ranked by count, with columns: Theme | Count | % of comments | Verbatim quote | [response_id]. Rules: assign each comment to exactly one theme; the counts must sum to the number of comments; quotes must be word for word from the file. Below the table, list any comments you could not place, with why. Finish with one line: if I could fix only one thing, what does the data say it should be, and how many comments back it?',
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
          'Chart [the weekly average rating] across [the term], computed with code from the file, not read off by eye. Then exactly two bullets about [the middle weeks]: first, what happened, with the weeks and the size of the change; second, one verbatim comment (with its [response_id]) that supports your explanation. If the comments do not actually explain it, say so rather than inventing a cause.',
      },
      {
        tier: 'stretch',
        choice: 'B',
        toolChip: 'Gemini Notebook',
        hook: 'For the one who has a meeting about this later.',
        estMinutes: 6,
        title: 'Present the findings as slides',
        body:
          'Paste your themes answer into Gemini Notebook as a new source, then in Studio generate a Slide Deck with the brief below. Fancy it up with the Cardiff design prompt from Mission 5.',
        prompt:
          'Five slides for [the stall owner]: what customers say, and what to do about it.',
        link: { href: 'https://notebooklm.google.com', label: 'Open Gemini Notebook' },
      },
      {
        tier: 'stretch',
        choice: 'C',
        toolChip: 'Sheets + Canvas',
        hook: 'For the one who wants it updating itself.',
        estMinutes: 6,
        title: 'Build the live dashboard',
        body:
          'Upload the Excel file to Google Drive, open it with Google Sheets, then open the Ask Gemini side panel and choose Create canvas. Filters and edits write back to the sheet underneath.',
        prompt:
          'Build an interactive dashboard from this sheet. KPI cards along the top for [average rating, total responses and total spend]; a [weekly average-rating] chart across [the term]; filter toggles for [time slot and item]; and a bar chart of [complaint themes] from the comments. Compute every figure from the sheet itself, and add a small data-quality note listing any rows you excluded or doubted, each with its [response_id]. If a KPI cannot be computed cleanly, label it DATA UNAVAILABLE rather than guessing.',
      },
      {
        tier: 'stretch',
        choice: 'D',
        toolChip: 'Gemini',
        hook: 'For the poster-on-the-stall option.',
        estMinutes: 5,
        title: 'Turn it into an infographic',
        body:
          'Follow up in the same chat with the prompt below. Or paste your summary into Gemini Notebook as a text source (the spreadsheet itself will not ingest, and hitting that wall IS the lesson) and generate one in Studio.',
        link: { href: 'https://notebooklm.google.com', label: 'Open Gemini Notebook' },
        prompt:
          'Using this analysis and nothing else, create a clean, simple infographic [a stall customer] would understand: white background, one accent colour, large readable labels, no clutter. Show at most [four] numbers, each taken verbatim from the analysis above; if a figure is not in the analysis, leave it out rather than inventing one. No decorative statistics.',
      },
      {
        tier: 'stretch',
        choice: 'E',
        toolChip: 'Gemini',
        hook: 'For the pessimist, and therefore the planner.',
        estMinutes: 4,
        title: 'Predict the failure',
        body: 'The pre-mortem. The same prompt works on any feedback file you are about to defend in a review.',
        prompt:
          'It is [next term] and [the stall] has closed. Using only this feedback data, write the post-mortem.\nThe Incident: two sentences on how it failed.\nThen the top [three] causes of death. For each give:\n- Probability score: how likely this was the killer. The scores must sum to exactly 100%.\n- The Seed: one verbatim comment from the file, with its [response_id], that showed the warning sign.\n- The Mechanism: how that complaint grew into a closure.\nFinish with the single change most likely to have saved it, and how many comments support it.',
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
      'Gravitas asked an AI to write his business plan overnight and submitted it unread. It looks professional. It is not: find the flaws before an investor does. Everyone audits the same plan, so you can compare catches with colleagues.',
    artifacts: [A.plan, A.rubric],
    steps: [
      {
        tier: 'core',
        estMinutes: 5,
        title: "Devil's advocate",
        body: 'Upload the plan to Copilot chat in a NEW chat (fresh eyes, no accumulated politeness).',
        prompt:
          'You are a hostile, hyper-rational risk auditor reviewing this [business plan] before a sceptical [investor] sees it. Hunt for unsupported claims, arithmetic that does not add up, internal contradictions, and missing regulatory or operational basics.\nReport your findings only as a table with these columns:\nVerbatim Quote | Identified Flaw | Category (Logic / Data / Assumption / Compliance) | Severity (1-10) | Fix\nRules:\n- Every row must begin with an exact quote from the plan.\n- Where the arithmetic is wrong, show the correct calculation in the Identified Flaw column.\n- Limit yourself to the 7 most severe flaws.\n- Critique only what is actually written. No compliments, no preamble: begin immediately with the table.',
      },
      {
        tier: 'core',
        estMinutes: 4,
        title: 'The post-mortem from the future',
        body:
          'Stay in the same chat. Critique finds flaws; a post-mortem finds the ones that kill. Time-travel makes the AI commit to consequences.',
        prompt:
          'It is [one year after launch] and [the Welsh cake stall] has failed. You are the forensic analyst writing the post-mortem.\nOpen with The Incident: two sentences on how it collapsed. Then give the top 5 root causes. For each one:\n- Root Cause: name it\n- Probability Score: how likely this was the primary killer. The five scores must sum to exactly 100%.\n- The Seed: the exact passage in this [business plan] that planted the failure, quoted verbatim\n- The Mechanism: step by step, how that passage became a real-world collapse\nGeneric causes ("poor communication", "bad timing") are banned: every cause must trace to something written in the plan.',
      },
      {
        tier: 'core',
        estMinutes: 5,
        title: 'Score it against the rubric',
        body: 'Upload the rubric to the same chat. Structured assessment with cited evidence: the actual workplace skill.',
        prompt:
          'Score this [business plan] against the attached rubric, 1 to 5 per criterion. Present the results as a table:\nCriterion | Score (1-5) | Verbatim Evidence | Why That Score\nThe Verbatim Evidence column must quote the exact sentence or figure from the plan. If the plan contains nothing relevant to a criterion, write NO EVIDENCE IN PLAN and score it accordingly; do not invent a justification. Finish with the three revisions that would most improve the total score, in priority order.',
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
          'Run the same devil\'s advocate prompt in Gemini. Then start a fresh Copilot chat, attach the plan, and paste both critiques in. Disagreement is a flag worth chasing.',
        prompt:
          'Here are two AI reviews of the same [business plan]. Adjudicate them using only the plan\'s own text as evidence.\nPresent the disagreements as a table:\nPoint of Disagreement | Review 1 Says | Review 2 Says | Verdict | Verbatim Evidence From the Plan\nJudge each verdict on what the plan actually says, not on which reviewer sounds more confident. Then finish with two short lists: flaws only Review 1 caught, and flaws only Review 2 caught.',
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
    estMinutesCore: 13,
    summary: 'Build the investor slide deck in Notebook Studio.',
    toolInfo: {
      feature: 'Tool: the Studio panel in Gemini Notebook (until recently NotebookLM). One button turns your sources into slides, quizzes and video.',
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
          'Create a new notebook and add the three files below as sources: the business plan, the market report and the feedback summary (all provided; substitute your own versions if you made them in earlier missions).',
      },
      {
        tier: 'core',
        estMinutes: 5,
        title: 'Generate the deck',
        body:
          'In Studio, choose Slide Deck and paste the prompt below into its customise box before generating. Note: some university accounts do not offer deck generation; if you do not see it, export the notebook Report to Docs and ask Gemini Canvas to build the deck from it.',
        prompt:
          'Create a ten-slide [investor pitch for the stall] from these sources only. One message per slide, each backed by a figure or quote from the sources; no invented numbers. Give the risks the sources raise one honest slide. Slide ten is "The Ask": [funding for a second griddle].',
      },
      {
        tier: 'core',
        estMinutes: 3,
        title: 'Take your own quiz',
        body:
          'Generate a Quiz from the same sources and take it. If your pitch cannot survive its own quiz, the pitch is not ready, and better to learn that here than in the meeting.',
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
          'Generate a Video Overview (generation queues for a few minutes; start it and do something else, which by now is a habit). Then open its revise (pencil) panel, type MODE: VIDEO, and paste the Cardiff design prompt from Path A beneath it.',
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
          'In Gemini, pick Canvas from the tools under the message box, then use the prompt below. Yes, it produces a working app. No, you do not need to read the code. Iterate in plain English: "bigger buttons", "add a Welsh language toggle", "show a running total". It will show a short plan before the app appears; that is deliberate, and it is why the app works first time.',
        prompt:
          'You are a front-end engineer who ships. Build a single-page web app for [a campus Welsh cake stall] that fixes this customer problem: [long queues at lunchtime and selling out by 1pm]. Ideas if useful: [a pre-order form with pickup time slots, a live sold-out board, a Build-a-Box picker with a running price total]. Rules: one HTML file with Tailwind CSS and vanilla JavaScript, no backend; invent realistic fake data in the JavaScript so the app looks busy from the first click. Do not jump straight to code. In order: 1) a short spec, under 100 words, saying what the app does and where its data lives; 2) a numbered build plan; 3) the complete app; 4) a self-check confirming there are no placeholder comments like "add logic here", every button does something, and the fake data actually appears on screen. Friendly and fast.',
      },
      {
        tier: 'core',
        estMinutes: 2,
        title: 'Show someone',
        body:
          'Turn to a neighbour (or a colleague on Monday) and let them press the buttons. Canvas can share the app as a link; keep real personal data out of prototypes.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Gemini',
        hook: 'The honest final step.',
        estMinutes: 4,
        title: 'Grade your own build',
        body: 'In Canvas, switch to the Code view and copy it all. Paste it into a new Gemini chat with the theme list, then run the prompt.',
        prompt:
          'You are a blunt product reviewer. Below is the list of complaint themes from the feedback data, then the full HTML of an app built to fix one of them. Grade the app in a single table with columns: Theme | Verdict (SOLVES / PARTLY HELPS / IGNORES) | Evidence. Evidence must be a short verbatim snippet from the HTML (a button label, heading or function name) proving the verdict, or the word NONE. No credit for good intentions: judge only what the code actually does. Under the table, one sentence naming what to build next. Begin with the table; no warm-up.',
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
    tools: [TOOLS.copilot, TOOLS.canvas],
    estMinutesCore: 17,
    summary: 'Same sales data: dashboard in Copilot, control room in Canvas.',
    toolInfo: {
      feature:
        'Tool duel: Copilot builds the dashboard inside your spreadsheet; Gemini Canvas builds a control room around it. Same data, two philosophies.',
      apps: [APPS.copilot, APPS.gemini],
    },
    workflow: ['Download the sales log', 'Dashboard in Copilot', 'Control room in Canvas', '30-second check', 'Compare'],
    brief:
      'A term of stall sales and the waste log, warts and all: something odd happened mid-term, and one number is a typo. Build a dashboard twice and see which tool tells you the truth faster. Any non-sensitive sales or activity data of your own works the same way.',
    artifacts: [A.salesLog],
    steps: [
      {
        tier: 'core',
        estMinutes: 6,
        title: 'The dashboard, in Copilot',
        body:
          'Upload the workbook to Copilot chat at m365copilot.com, or open it in Excel and use Copilot there if your licence includes it. In chat you get the charts and the written verdict; in Excel the dashboard lands on a real new sheet.',
        prompt:
          'Analyse this sales workbook (the [Sales] and [Waste log] sheets). Build me a dashboard (on a new sheet if you are in Excel, otherwise here) with four named sections.\nREVENUE: revenue by [product] and by week, plus the weekly revenue trend.\nWASTE: waste cost by reason, biggest first.\nMANAGER\'S FIVE: the five insights a manager should act on, one sentence each.\nDATA HEALTH: anything in the raw data that looks abnormal or mistyped, quoting the exact row or cell and one line on why you suspect it; check especially for weeks that break the normal pattern and single values that do not fit their column. If you genuinely find nothing wrong, write "NO ANOMALIES FOUND" rather than inventing something.',
      },
      {
        tier: 'core',
        estMinutes: 7,
        title: 'The control room, in Gemini Canvas',
        body:
          'Now the same data as an app. In Gemini (gemini.google.com), open Canvas, attach the workbook and use the prompt below. It talks like a quality engineer, but the ideas are plain: status lamps, "is this dip real or just noise?", and "which few problems cause most of the cost". Press SIMULATE A BAD WEEK and watch the control chart catch it. If a button does nothing, tell Canvas so in plain English; it fixes its own bugs.',
        prompt:
          'Build an interactive sales control room for [a campus Welsh cake stall] from this workbook, as a single-page web app with a dark control-room theme. Across the top: an andon strip with one status lamp per [product] - green, amber or red based on the latest week against that product\'s own average. Charts: (1) a statistical process control chart of daily revenue with the mean and plus/minus three sigma limits calculated from the data, highlighting in red any point outside the limits or any run of eight points on one side of the mean, labelled "special cause: investigate"; (2) a Pareto chart of [waste reasons] by cost with a cumulative percentage line and the vital-few cutoff marked; (3) KPI cards that count up on load: revenue, units, average sale, and cost of poor quality (waste cost). Under every chart, write one plain-English sentence of insight that updates when I filter. Filters: date range and [product]. Add a SITUATION REPORT button that turns whatever is on screen into five bullet points I can paste into an email, and a Cymraeg/English toggle for the labels. Party tricks: a SIMULATE A BAD WEEK button that injects a realistic failure into the data so the control chart and lamps catch it live, and a REPLAY button that streams [the term] in day by day like a live feed. Single HTML file, Tailwind CSS and vanilla JavaScript, no backend: embed the data as JSON. Every number on screen must come from the embedded workbook data (or from the simulate button\'s clearly labelled injection), never invented. Before you declare it finished, self-check: every button visibly does something, there are no placeholder comments or unfinished code, and each chart is correctly bound to the embedded JSON.',
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
          'Before you vote, press SITUATION REPORT: a screen turned into five email-ready bullets is the part you will reuse on Monday. Then the honest question: which of the two would you actually send to your manager? There is no right answer, and that is the lesson: Copilot upgraded your spreadsheet, Canvas replaced it.',
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
        body: 'In a NEW chat (a fresh one, so the critic has no stake in the first attempt), hand the lazy prompt over for demolition.',
        prompt:
          'Critique this prompt, then rewrite it to be far more effective: "Write a poster for [the reopening of a campus Welsh cake stall]." Your rewrite must specify: the role the AI should take, the audience it is writing for, the tone, the constraints (size, word limits, what must be included), and the exact output format. The rewritten prompt must also end with a one-line self-check telling the AI to confirm it has met every constraint before answering. Finish with two bullets on why your version will produce better work.',
      },
      {
        tier: 'core',
        estMinutes: 3,
        title: 'The 30-second check',
        check: true,
        body:
          'Run the rewritten prompt in the same chat, then compare the two outputs (two browser tabs works). Which one would you actually put on a wall? The gap between them is the prompt, not the model.',
      },
      {
        tier: 'core',
        estMinutes: 4,
        title: 'Let the AI interview you',
        body:
          'Now the transferable version, on your real work. The AI asks the questions you did not know your prompt needed to answer.',
        prompt:
          'I need a prompt for this task: [writing the monthly update email for my team]. Interview me first: ask up to five questions, one at a time, that will make the prompt better, and wait for my answers. Then write the final prompt in a copyable block, ending with a short self-check for the AI to run before answering, plus one line on when I should reuse it.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Any AI chat',
        hook: 'Turn it into a standing habit.',
        estMinutes: 2,
        title: 'The IMPROVE: trick',
        body: 'Paste this once at the start of a chat and you have a prompt editor on call.',
        prompt:
          'From now on in this chat, whenever I send a message starting with IMPROVE:, do not answer the prompt that follows. Instead return a stronger version of that prompt and one sentence on what you changed and why.',
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
        'Works in any AI chat. The [square brackets] mark what to swap for your own task.',
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
          'ROLE: You are a Strategic Decision Architect.\nTASK: Draft a strictly scoped, execution-ready Deep Research brief to inform this decision: [WHAT YOU NEED TO DECIDE].\nFORMAT, with these sections:\n- Core Decision Vector: the binary or categorical choice this research must inform\n- Primary Intelligence Requirements: exactly 3-5 hyper-specific, mutually exclusive questions the research must answer\n- Temporal Scope: the exact timeframe that matters\n- Evidence Hierarchy: preferred sources (peer-reviewed journals, audited accounts, official regulatory guidance) and source categories to ignore (opinion blogs, social media, marketing copy)\n- Output Artifact: the exact format the finished research should deliver\nCONSTRAINTS: Do not run the research yourself; output only the brief. The brief must command the researcher to cite every source with its exact URL and extraction date. Show me the brief for editing before I run it.',
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
        toolChip: 'Gemini',
        hook: 'Make it compute, not guess.',
        estMinutes: 2,
        title: 'Verified spreadsheet analysis',
        prompt:
          'Act as a careful data analyst. Summarise this spreadsheet. Use code (Python) for every figure; if something cannot be computed from the file itself, write DATA UNAVAILABLE rather than estimating it. Report, in this order:\n1. Shape: rows, columns and what the data covers.\n2. Key numbers: totals, averages, highest and lowest, each computed by code.\n3. Anomalies: every missing value, outlier or suspect entry, each with its row reference. If there are none, write NONE FOUND rather than staying silent.\n4. Three insights in plain business English, each tied to a number above.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Gemini',
        hook: 'Audit the file before the file embarrasses you.',
        estMinutes: 2,
        title: 'QA an Excel file with code',
        prompt:
          'ROLE: You are a meticulous data quality auditor.\nTASK: Audit this spreadsheet using code (Python) for every check; nothing judged by eye.\nFORMAT: one table, columns: Check | Result | Rows affected (row references) | Severity (1-5) | Suggested fix. Run these checks in order:\n1. Structure: row and column counts, column types, header problems (blank, duplicate or merged headers).\n2. Completeness: missing or blank values per column, with counts.\n3. Uniqueness: duplicate rows and duplicate IDs. Flag them, do not delete: similar rows can be legitimate.\n4. Validity: values that break their column\'s rules (dates out of range, negative quantities, text in number columns, categories outside the expected set).\n5. Consistency: mixed formats within one column (date styles, units, spellings, capitalisation).\n6. Outliers: values statistically far from their column\'s norm, each with its row reference.\nCONSTRAINTS: every finding must be computed by code and carry its row reference. If a check finds nothing, write CLEAN in its row rather than staying silent. If a check cannot run on this file, write NOT APPLICABLE and why. Do not invent issues and do not alter the data. Finish with one line: is this file fit for analysis as it stands, YES or NO, and the single most urgent fix.',
      },
      {
        tier: 'stretch',
        collapsed: true,
        toolChip: 'Gemini',
        hook: 'Nobody has time to read a hundred of them.',
        estMinutes: 2,
        title: 'Find the themes in free-text comments',
        prompt:
          'Categorise every free-text comment in this file into themes you derive from the data itself, not a preset list. Answer as a table, ranked by count, with columns: Theme | Count | % of comments | Verbatim quote | Row reference. Rules: assign each comment to exactly one theme; the counts must sum to the number of comments; quotes must be word for word from the file. Below the table, list any comments you could not place, with why. Finish with one line: if I could fix only one thing, what does the data say it should be, and how many comments back it?',
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
        toolChip: 'Gemini Canvas',
        hook: 'Working software from a sentence.',
        estMinutes: 2,
        title: 'Build a small tool',
        prompt:
          'ROLE: You are a Staff Front-End Engineer.\nTASK: Create a robust single-page web application that solves this problem: [DESCRIBE THE PROBLEM].\nCONSTRAINTS: one HTML file with Tailwind CSS and vanilla JavaScript, no backend; generate realistic mock data in the JavaScript so the app looks fully populated; fast, responsive and free of console errors.\nWORKFLOW: you are prohibited from outputting code immediately. In order:\n1. Architecture Spec: component structure and state approach (max 150 words).\n2. Action Plan: a numbered implementation plan.\n3. Implementation: the complete, finalised code in a single html block.\n4. Self-Check: confirm there are no placeholder comments and all mock data is bound to the interface.',
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
      'You are leaving with my prompts in your pocket. Stealing from the founder: the first sound business decision anyone has made all day.',
  },

];



export function getMission(id) {
  return MISSIONS.find(m => m.id === id) || null;
}
