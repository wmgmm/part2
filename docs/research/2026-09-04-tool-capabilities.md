# Tool capabilities as at 2026-09-04

Commissioned during the single-document pivot, to stop the exercises promising things the
tools do not do. Every row was checked against a vendor source on 2026-09-04. Anything marked
UNVERIFIED stayed out of the site copy.

**Standing caveat:** most Google limits depend on which Workspace for Education edition
Cardiff holds (Fundamentals / Standard / Plus / Teaching & Learning add-on / AI Pro). That was
not established. Admins can also disable individual features per organisational unit, so a
feature being licensed does not mean it is switched on here. Confirmed locally: **Cardiff
staff accounts cannot create Gems**, despite Google's published Education availability. Treat
published availability as a starting point and test on a standard account.

## Google

| Claim | Status | Source |
|---|---|---|
| NotebookLM renamed **Gemini Notebook**, 16 Jul 2026. Same product, same URL | Confirmed | blog.google, 16 Jul 2026 |
| Gemini Notebook is a core service for all Education editions, enterprise data protection | Confirmed | Workspace admin quickstart; support.google.com/notebooklm/answer/16337734 |
| **Data Tables**: Studio > Data Tables > pencil to customise rows and columns in natural language | Confirmed, Education included | Workspace Updates, 23 Dec 2025 |
| Data Tables **Export to Sheets** puts content on tab 1 and **citations on tab 2** | Confirmed | Gemini Notebook Help, Create a notebook |
| Native CSV export from Data Tables | Not a feature. Export to Sheets, then download as CSV | no source |
| Data Tables row or column limits | UNVERIFIED, none published. Do not promise a size | no source |
| **Slide Decks**: prompt-based revision via the pencil, export to **PPTX and PDF**, users **18+** | Confirmed | Workspace Updates, 20 Mar 2026; blog.google, 16 Dec 2025 |
| Native export from Gemini Notebook to Google Slides | Teased Feb 2026, no evidence it shipped. PPTX only | no source |
| **Brand kit, logo upload or template import in Gemini Notebook** | **Does not exist.** Third-party blogs claim it; no Google source. Style is set by prompt, plus a brand document uploaded as a source. Influence, not enforcement | no source |
| Ten named infographic styles (Sketch Note, Professional, Bento Grid and so on) | Confirmed for infographics; no equivalent named picker verified for decks | Workspace Updates, 20 Mar 2026 |
| Studio outputs live: Notes, Audio Overview, Video Overview, Mind Map, Reports, Data Tables, Flashcards, Quizzes, Slide Decks, Infographics | Confirmed | Gemini Notebook Help |
| Cinematic Video Overviews | Not listed for Education editions | Workspace Updates, 20 Mar 2026 |
| Gemini **Canvas**: documents, apps, slides, code; exports to Docs, Slides, PDF, Colab, public app link. AI features require 18+ | Confirmed | Canvas Help Centre |
| Canvas app-building on base Education editions | UNVERIFIED. Test on a real account | no source |
| **Gems: Education users can create them** | Published as available, but **contradicted locally**. Cardiff staff accounts cannot. The site's plain-text-file rationale stands | support.google.com/gemini/answer/14620100 vs local test |
| **Gemini Skills in Chrome**, 6 May 2026: save a prompt as a one-click `/` tool. Education Fundamentals, Standard and Plus listed | Confirmed as published; **gated in the site copy** given the Gems contradiction | Workspace Updates, 6 May 2026 |
| Gemini **in Google Slides** (native, editable, brand-matching decks) requires **Education Plus or Teaching & Learning** | Confirmed. Not safe to build on | Workspace Updates, 3 Feb 2026 |
| Gemini app **Deep Research: 5 reports/month** on Fundamentals/Standard/Plus | Confirmed | support.google.com/gemini/answer/14620100 (Education) |
| Deep Research **inside** Gemini Notebook: a separate quota, reported as 10/month | Two different products, two quotas. Never quote one figure without saying which | Gemini Notebook limits table |

## Microsoft

| Claim | Status | Source |
|---|---|---|
| **Researcher and Analyst share a hard cap of 25 queries per user per month**, resetting on the 1st | Confirmed. The single biggest constraint on a roomful of staff | learn.microsoft.com/microsoft-365/copilot/faq-researcher |
| Ordinary Copilot chat has **code interpreter** with no such cap, and it is available to Copilot Chat users without metered usage | Confirmed. This is why Exercise 05 routes through plain chat | learn.microsoft.com/.../extensibility/code-interpreter |
| Code interpreter output files **do not survive the session** | Confirmed. Exercise 05 says download immediately | same |
| **Agent Builder** available to ordinary licensed staff, no admin and no Copilot Studio. 8,000-char instructions, 20 knowledge sources, sharing with named colleagues | Confirmed, but admin-toggleable per tenant, so gated in the site copy | learn.microsoft.com/.../extensibility/agent-builder |
| Actions calling external services need Copilot Studio | Confirmed, out of scope for staff | same |
| Vision (upload an image, get a description) works on work accounts | Confirmed. It is personal subscriptions that lack it | Microsoft Q&A, resolved 30 Mar 2026 |
| Image generation: style presets, aspect ratios, reference images, and **brand kits** where an organisation has configured one | Confirmed | support.microsoft.com, create AI-generated images |
| Which model serves image generation in work chat today | UNVERIFIED. Three surface-specific models found. Do not name one | no source |
| Files per chat, page limits, daily upload throttles for **work** accounts | UNVERIFIED. The widely quoted 20 files / 50 MB figures are the **consumer** limits. Community reports of undocumented daily throttles. Dry-run before a session | no source |
| Researcher runtime 10 to 45 minutes on complex queries | Confirmed. Cannot be a live in-session step | learn.microsoft.com/.../researcher-agent |
| Researcher cannot process images inside input documents, and cannot be customised or extended | Confirmed | faq-researcher |
| Copilot **Pages** work **without** a Copilot licence, given SharePoint or OneDrive storage | Confirmed. Useful when licensing in the room is uneven | support.microsoft.com, get started with Pages |

## Copilot versus Gemini

**There is no credible, independent, methodologically transparent 2026 head-to-head.** What
search returns is vendor marketing or SEO affiliate content, including comparisons published
by vendors of competing presentation products. Exercise 05 therefore does not name a winner.

The honest framing, and the one the deck already uses: the choice is decided by the
productivity stack, not by model quality. Gemini has no visibility into an M365 tenant and
Copilot has none into Workspace. Each can give a second opinion on the other's work, and the
person is the third.

## Experiments to standardised workflows

- **Jisc AI maturity toolkit for tertiary education.** Five stages. Stage 2 "Experimenting and
  exploring" to stage 3 "Operational: training staff, developing workflows, and establishing
  support systems" is exactly the move Exercise 06 teaches, and is the anchor named in it.
  Sector-specific and current (resources round-up updated 8 Jan 2026).
- **NCSC agentic AI guidance**, published with Five Eyes partners, April/May 2026 (mirror dates
  differ). Start with tightly bounded pilots, use agents for low-risk tasks, name accountable
  individuals, and reflect on whether AI is needed at all. The "when not to use it" half.
- **AI Playbook for the UK Government**, 10 Feb 2025, plus the **AI Insights** series
  (collection updated 13 Mar 2026), which covers evaluation metrics for LLM systems.
- **NHS England, June 2026**: Microsoft 365 Copilot to around 500,000 staff. The closest UK
  public-sector analogue at scale.
- Wales: the AI plan for Wales; the Workforce Partnership Council's social-partnership guidance
  on algorithmic management, agreed with trade unions; Public Health Wales generative AI
  guidance approved 19 Feb 2026, a rare dated organisational policy to show as a worked example.
- **No named UK standard exists for documenting an individual AI workflow.** The nearest are the
  AI Insights evaluation articles, the draft DSIT AI Management Essentials self-assessment, and
  the Jisc Operational stage. Exercise 06's workflow record is filling a real gap.

## Generation limits in Gemini Notebook (researched 2026-09-04)

Commissioned because the redesigned Exercise 04 asks people to generate images, and a room of
twenty hitting a wall mid-exercise would be unrecoverable.

**The headline: Google publishes no number for Infographics, Slide Decks or Data Tables at any
tier.** Those cells in the limits table render as words, not integers, while every other row in
the same table shows numbers. That is Google's gap, not a retrieval artefact.

Source: [Use Gemini Notebook with a work or school Google account](https://support.google.com/notebooklm/answer/16337734),
fetched 2026-09-04. Section heading "Usage Limits Breakdown". No published last-updated date.

**Tier mapping.** Education Fundamentals and Education Standard both map to the column Google
calls **Standard Access**. Education Plus and the Teaching and Learning add-on map to **More
Access**. Google AI Pro for Education maps to **Higher Level Access**. Cardiff's tier is not
established: the self-service check is the Pro / Plus / Expanded / Ultra badge next to the
profile image.

Standard Access, the pessimistic assumption:

| Output | Standard Access | More Access |
|---|---|---|
| Chats | 50/day | 200/day |
| Reports, Flashcards, Quizzes, Mind Maps | 10/day each | 20/day each |
| Audio Overviews | 3/day | 6/day |
| Video Overviews | 3/day | 6/day |
| Deep Research (in Notebook) | 10/month | 3/day |
| **Data Tables** | "Limited" | "More Limits" |
| **Infographics** | "Limited" | "More Limits" |
| **Slide Decks and Revisions** | "Limited" | "More Limits" |

**How to plan against the three unpublished rows.** Use the neighbouring rows as calibration:
text outputs get 10/day, media-heavy outputs get 3/day. Infographics and slide decks are
image-model-heavy and will sit nearer 3 than 10. Plan for 3.

Three facts that make the workshop safe:
- **Limits are per user and per output type, and are not pooled.** Google's admin doc is
  explicit: "Limits apply to each user and aren't shared." So one data table, one infographic
  and one slide deck each sit inside a separate ceiling. See
  [About AI usage limits](https://knowledge.workspace.google.com/admin/generative-ai/workspace-with-gemini/about-ai-usage-limits).
- **Daily limits reset at 12am Pacific**, which is about 8am UK. A morning session starts clean;
  an afternoon one inherits whatever people did that morning.
- Google's row is labelled **"Slide Decks and Revisions"**, and the slide-deck help page says
  every revision creates an entirely new deck. So a pencil-revision burns another unit.
  Nudging individual slides *inside* a deck is free.

**Could not verify:** whether an infographic restyle costs a generation (Google says nothing
either way; the safe assumption is yes, since each restyle re-runs an image model); any numeric
value for the three unpublished rows; any classroom or whole-room concurrency guidance.

**Diarise before the next session.** On 28 August 2026 Google announced
[flexible, compute-based usage limits](https://blog.google/innovation-and-ai/products/gemini-notebook/new-flexible-usage-limits/)
for Gemini Notebook, replacing fixed daily counts with a compute budget that refreshes every
five hours against a weekly cap, plus a "Generate later" deferral for Slide Decks and Video
Overviews. Rollout began 2 September 2026 and is described as **consumer accounts**; the
Workspace limits table still showed the fixed numbers on 2026-09-04. Re-check
[the limits page](https://support.google.com/notebooklm/answer/16337734) and
[the compute-limits page](https://support.google.com/gemininotebook/answer/17670842) before
running the workshop again.

**The only trustworthy number is a measured one.** Google publishes nothing for the three
outputs this workshop uses most, so run a pilot on two or three real staff accounts a few days
before a session and count generations until something fails. Twenty minutes of work.
