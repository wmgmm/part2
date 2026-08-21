// All mission content for the Field Missions workshop site.
// Components stay generic; everything a mission needs lives here.
//
// Step fields:
//   tier: 'core' (Today's path) | 'stretch' (Take home)
//   estMinutes: rough time for the step
//   check: true marks a "30-second check" verification ritual step
//   prompt: copyable prompt text (rendered in a PromptBox)
//   type: 'sort' renders the SortGame with `items`
//   laneNotes: optional per-licence-lane guidance { copilotPro, copilotChat }

const BASE = import.meta.env.BASE_URL;

export const LANES = [
  {
    id: 'copilotPro',
    label: 'Copilot with the work shield',
    hint: 'Signed in with your university account; a green shield appears in Copilot.',
  },
  {
    id: 'copilotChat',
    label: 'Copilot Chat only',
    hint: 'Free Copilot, or no shield when signed in.',
  },
  {
    id: 'notSure',
    label: 'Not sure yet',
    hint: 'No problem. Mission 01 helps you find out.',
  },
];

export const MISSIONS = [
  {
    id: 'm1',
    code: '01',
    level: 1,
    title: 'The Green Light',
    tools: ['No AI needed'],
    accentType: 'stamp',
    accentText: 'CLEARANCE',
    estMinutesCore: 5,
    summary: 'What is safe to paste, and which tools count as work tools.',
    brief:
      'Before you touch a single AI tool, you need clearance. One question decides almost everything about safe AI use at work: what am I about to paste, and where am I pasting it? Sort the six items below, then declare which Copilot you actually have.',
    artifact: null,
    steps: [
      {
        tier: 'core',
        estMinutes: 3,
        title: 'Sort the six',
        body:
          'For each item, decide: GREEN (fine in any approved AI tool), AMBER (only in a work-protected tool, never a personal account), or RED (does not go into an AI tool at all).',
        type: 'sort',
        items: [
          {
            text: 'A published university policy PDF',
            answer: 'green',
            why: 'Already public. Any approved tool is fine.',
          },
          {
            text: "A student's mitigating circumstances email",
            answer: 'red',
            why: 'Highly sensitive personal data. It does not belong in an AI tool, even a protected one, without a clear approved process.',
          },
          {
            text: 'Meeting notes that name three colleagues',
            answer: 'amber',
            why: 'Personal data about identifiable staff. Work-protected tools with your university account only.',
          },
          {
            text: 'An unpublished grant draft',
            answer: 'amber',
            why: 'Confidential university work. Fine in enterprise-protected tools, never in a personal account.',
          },
          {
            text: "This workshop's mission files",
            answer: 'green',
            why: 'Entirely fictional and built to be uploaded. Paste away.',
          },
          {
            text: 'A spreadsheet of staff salaries',
            answer: 'red',
            why: 'Sensitive personal and financial data. Stop and ask Information Governance first.',
          },
        ],
      },
      {
        tier: 'core',
        estMinutes: 2,
        title: 'Know your shield',
        body:
          'Open Copilot at m365copilot.com signed in with your university account. Look for the green shield icon: it means your prompts and files stay inside the university tenancy and are not used to train models. No shield means you are in the free consumer version, so treat it like a personal account: public or fictional material only. The same logic applies on the Google side: gemini.google.com and notebooklm.google.com with your university Google account are the work lane.',
      },
      {
        tier: 'stretch',
        estMinutes: 2,
        title: 'The one-line rule',
        body:
          'If you would not email it to an external consultant without a contract in place, do not paste it into a tool without the shield. Keep that sentence; it settles most cases in ten seconds.',
      },
    ],
    verdict:
      'Adequate. You now know more about data classification than at least one professor I could name.',
  },

  {
    id: 'm2',
    code: '02',
    level: 2,
    title: 'The Deep Dive',
    tools: ['Gemini Deep Research', 'NotebookLM'],
    accentType: 'stamp-red',
    accentText: 'START NOW',
    startNow: true,
    estMinutesCore: 10,
    summary: 'Start a long research job, walk away, come back to a sourced report.',
    brief:
      'Some AI jobs take fifteen minutes. The skill is starting them early and doing something useful while you wait, which is exactly what this mission teaches. Do the first step NOW, then go and complete other missions. Come back when your report is ready.',
    artifact: null,
    steps: [
      {
        tier: 'core',
        estMinutes: 4,
        title: 'Visit one: brief your researcher, then leave',
        body:
          'In Gemini (gemini.google.com), choose Deep Research and paste the brief below. Before you hit start, Gemini shows you its research plan. EDIT IT: cross out anything you do not need, add anything missing. That edit is the entire skill. Then start the run and go do Mission 03.',
        prompt:
          'I need a sourced briefing on how UK universities are adopting AI tools across teaching, research and professional services. Cover: what has changed in the last 12 months; which tools institutions have approved and how staff actually use them day to day; the main risks and how universities are governing them; and five practical recommendations for a university that wants all staff, not just enthusiasts, to use AI well. Cite every source so I can verify claims.',
      },
      {
        tier: 'core',
        estMinutes: 4,
        title: 'Visit two: ground it in NotebookLM',
        body:
          'When the report finishes, export or copy it, then add it as a source in a new notebook at notebooklm.google.com. Generate a Mind Map from the Studio panel: a clickable visual index of the whole report in seconds.',
      },
      {
        tier: 'core',
        estMinutes: 2,
        title: 'The 30-second check',
        check: true,
        body:
          'Pick one confident claim in the report. Open its cited source. Does the source actually say that? Deep Research is good, not infallible, and citations are only worth something if someone occasionally follows them.',
      },
      {
        tier: 'stretch',
        estMinutes: 5,
        title: 'Make it listenable',
        body:
          'In NotebookLM, generate an Audio Overview: a podcast-style discussion of your report. Useful for the commute; startling the first time you hear it.',
      },
    ],
    verdict:
      'You started a long job and did something useful while you waited. I know colleagues with doctorates who cannot manage this.',
  },

  {
    id: 'm3',
    code: '03',
    level: 1,
    title: 'The Meeting',
    tools: ['Any AI chat'],
    accentType: 'handwritten',
    accentText: 'pdf',
    estMinutesCore: 10,
    summary: 'One messy transcript, one lazy prompt, one good one. Compare.',
    brief:
      'A meeting transcript nobody will ever read, until you make an AI read it. Use whichever assistant you already have open: Copilot, Gemini, either works. This mission is about the prompt, not the tool.',
    artifact: {
      filename: 'Mission_03_Meeting_Transcript.pdf',
      downloadPath: `${BASE}placeholders/Exhibit_D_Raw_Meeting_Transcript.pdf`,
      thumb: `${BASE}placeholders/evidence_transcript_thumb.webp`,
      altText: 'Raw meeting transcript, PDF',
      note: 'Fictional transcript. Safe to upload anywhere.',
    },
    steps: [
      {
        tier: 'core',
        estMinutes: 4,
        title: 'The lazy prompt versus the real one',
        body:
          'Upload the transcript and ask the lazy question first: "What does this show?". Read the answer. Then start a NEW chat, upload it again, and use the structured prompt below. Put the two answers side by side. This gap is the whole course.',
        prompt:
          'Summarise this meeting transcript in under 200 words. Focus on key points, decisions made, action items and deadlines. Present the action items as a table with columns for action, owner and due date.',
      },
      {
        tier: 'core',
        estMinutes: 3,
        title: 'Filter it to your role',
        body:
          'Most of any meeting is not about you. Make the AI find the part that is. Replace the bracket with your actual job.',
        prompt:
          'Read this transcript from the perspective of a [YOUR ROLE, e.g. project manager]. Only pull out the information, action items and deadlines that would affect my role. If nothing affects me, say so plainly.',
      },
      {
        tier: 'stretch',
        estMinutes: 3,
        title: 'Plain English rewrite',
        body: 'Turn the worst paragraph of the transcript into something a human would willingly read.',
        prompt:
          'Rewrite this section in plain English for a general staff audience. Remove jargon, shorten sentences, use active voice, and keep any technical term only if losing it would change the meaning. Then list the three most significant changes you made and why.',
      },
    ],
    verdict:
      'A structured prompt at last. The lazy one produced the analytical equivalent of a shrug, and you saw it with your own eyes.',
  },

  {
    id: 'm4',
    code: '04',
    level: 1,
    title: 'The Spreadsheet',
    tools: ['Gemini'],
    accentType: 'tape',
    accentText: 'xlsx',
    estMinutesCore: 10,
    summary: 'Make the AI compute, not guess, then check its arithmetic.',
    brief:
      'Language models are eloquent and terrible at mental arithmetic, which is a dangerous combination around spreadsheets. The fix is one sentence: make it write code. Use Gemini for this one.',
    artifact: {
      filename: 'Mission_04_Staff_Survey_Results.xlsx',
      downloadPath: `${BASE}placeholders/Staff_Survey_Results.xlsx`,
      thumb: `${BASE}placeholders/evidence_survey_thumb.webp`,
      altText: 'Staff survey results spreadsheet',
      note: 'Fictional survey data. Safe to upload anywhere.',
    },
    steps: [
      {
        tier: 'core',
        estMinutes: 5,
        title: 'The verified summary',
        body:
          'Upload the spreadsheet with the prompt below. The magic words are "use code": they turn a guessing poet into a calculator.',
        prompt:
          'Summarise this Excel file. Use code (Python) to calculate the figures, do not estimate them. Give me: an overview (rows, columns, what the data covers); the key numbers (totals, averages, highest and lowest); and three insights in plain business English.',
      },
      {
        tier: 'core',
        estMinutes: 2,
        title: 'The 30-second check',
        check: true,
        body:
          'Pick ONE number from the answer, open the spreadsheet, and verify it yourself: a quick sum, a filter, a count. If it checks out, trust rises. If it does not, you just learnt the most valuable lesson on this site for the price of thirty seconds.',
      },
      {
        tier: 'stretch',
        estMinutes: 3,
        title: 'Chart the trend',
        body: 'Follow up in the same chat:',
        prompt:
          'Now chart the most important trend in this data, and explain in two bullets what it means for a manager.',
      },
      {
        tier: 'stretch',
        estMinutes: 4,
        title: 'Categorise the comments',
        body: 'Free-text feedback at scale is where this genuinely saves days.',
        prompt:
          'Analyse the free-text comments in this file. Add a Category column classifying each row into exactly one of: Workload, Management, Work Environment, IT and Tools, Work-Life Balance, or Other. Then give me the count per category and one representative quote for each.',
      },
    ],
    verdict:
      'You checked the machine’s arithmetic. I have never been prouder, which admittedly is a low bar.',
  },

  {
    id: 'm5',
    code: '05',
    level: 3,
    title: 'The Bid',
    tools: ['Copilot', 'NotebookLM', 'Gemini'],
    accentType: 'stamp',
    accentText: 'FLAWED',
    estMinutesCore: 15,
    summary: 'Critique a flawed AI-written bid with all three tools.',
    brief:
      'Christopher Gravitas wrote a funding bid. Or rather, he asked an AI to write it, submitted the first draft, and is now mysteriously unavailable. Your job: find the flaws before the panel does. This is the full three-tool workflow, and the lesson is that AI is a better critic than author.',
    artifact: null,
    artifactPending: 'Bid pack (flawed draft + funding criteria) arrives in a later build.',
    steps: [
      {
        tier: 'core',
        estMinutes: 5,
        title: "Devil's advocate in Copilot",
        body:
          'Upload the draft bid to Copilot in a NEW chat (fresh eyes, no flattery from earlier context) and let it attack.',
        prompt:
          "Act as a constructive devil's advocate reviewing this funding bid. First identify the weaknesses and blind spots a sceptical reviewer would seize on: vague impact claims, unsubstantiated assertions, methodology gaps, budget problems. Be specific and challenging but constructive. Do not soften criticism.",
        laneNotes: {
          copilotChat:
            'Free Copilot Chat handles this fine: the bid is fictional, so no shield is needed.',
        },
      },
      {
        tier: 'core',
        estMinutes: 6,
        title: 'Criteria check in NotebookLM',
        body:
          'New notebook, two sources: the draft bid AND the funding criteria. Grounded in both documents, NotebookLM must cite its evidence rather than improvise. Micro-skill: to move text between Microsoft and Google tools, use "copy", then "add source, paste text" in NotebookLM.',
        prompt:
          'For each criterion in the funding call, state whether the draft bid meets it clearly, partially, or not at all. Cite the exact passage from each document that supports your judgement. List any funder language that never appears in the bid.',
      },
      {
        tier: 'core',
        estMinutes: 2,
        title: 'The 30-second check',
        check: true,
        body:
          'Click one of NotebookLM’s citations. Does the cited passage really support the judgement? Grounded does not mean gospel.',
      },
      {
        tier: 'stretch',
        estMinutes: 6,
        title: 'The rewrite in Gemini',
        body:
          'Take the weakest section (the critiques agree on it more often than not) and have Gemini rebuild it, then generate a clean summary document.',
        prompt:
          'Here is the weakest section of a funding bid, plus the reviewer criticism it received. Rewrite the section to answer every criticism. Keep the claims honest: strengthen the evidence and language, do not invent results. Then generate a one-page summary document of the improved bid.',
      },
    ],
    verdict:
      'You made the machine mark its own homework, then checked the marking. That is the entire trick. Do it forever.',
  },

  {
    id: 'm6',
    code: '06',
    level: 3,
    title: 'The Showcase',
    tools: ['Copilot', 'NotebookLM', 'Gemini Canvas'],
    accentType: 'arrow',
    accentText: '→ FINALE',
    estMinutesCore: 15,
    summary: 'Turn rough notes into something a colleague can actually use.',
    brief:
      'The capstone: rough notes in, shareable product out, with each tool doing the step it is best at. Copilot to structure, NotebookLM to teach, Gemini to build. You will finish with something you could genuinely send to your team on Monday.',
    artifact: null,
    artifactPending: 'Notes and data pack arrives in a later build.',
    steps: [
      {
        tier: 'core',
        estMinutes: 5,
        title: 'Structure the notes in Copilot',
        body: 'Turn the rough notes into a briefing with a shape.',
        prompt:
          "Turn my rough notes into a one-page briefing for staff. Plain English, a clear title, three short sections with headings, and a 'what you need to do' list at the end.",
        laneNotes: {
          copilotPro:
            'With the work shield you can do this in a Copilot Notebook or Page and keep refining it there; Notebooks can even turn the result into a Word document directly.',
          copilotChat: 'Copilot Chat handles this fine: paste the notes into the chat.',
        },
      },
      {
        tier: 'core',
        estMinutes: 6,
        title: 'Teach it with NotebookLM',
        body:
          'New notebook: add your briefing (paste as text, or the PDF version of the data pack; NotebookLM does not read spreadsheets). Generate a Mind Map, then a Quiz, and take your own quiz. If your briefing cannot survive its own quiz, revise it.',
      },
      {
        tier: 'core',
        estMinutes: 3,
        title: 'The exit question',
        body:
          'Before you check in, answer honestly: name one task from your actual job where you should NOT use these tools, and why. Knowing where the line sits is the mark of someone who can be trusted on either side of it.',
      },
      {
        tier: 'stretch',
        estMinutes: 8,
        title: 'The finale: build the quiz app',
        body:
          'In Gemini, open Canvas, attach your briefing, and use the prompt below. Yes, it builds a working web app. No, you do not need to read the code.',
        prompt:
          'Create an interactive one-page quiz web app that tests staff on the key points of the attached document. Five multiple-choice questions, friendly feedback after each answer, and a score at the end. Use Tailwind CSS and vanilla JavaScript in a single HTML file.',
      },
      {
        tier: 'stretch',
        estMinutes: 5,
        title: 'Or make it a video',
        body:
          'In NotebookLM Studio, generate a Video Overview of your briefing. Generation can take a few minutes; start it, make tea, return to applause.',
      },
    ],
    verdict:
      'You built something a colleague can actually use. There is no need to tell them how little of it you typed.',
  },
];

export function getMission(id) {
  return MISSIONS.find(m => m.id === id) || null;
}
