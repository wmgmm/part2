#!/usr/bin/env python3
"""Generate the workshop's generated artifact files.

Run from the repo root:  python3 tools/make_artifacts.py
Outputs land in public/placeholders/. Deterministic, so re-running produces
identical files apart from the retrieval date line.

The artifacts and where they come from:
  Sustainable-Futures-en.pdf   Cardiff University's real Environmental
                               Sustainability Plan 2025-35, and the workshop's
                               only anchor document. NOT generated here; copied
                               in from the supplied PDF. This script only checks
                               it is present.
  Deep_research_output.pdf     Exercise 01's worked example: a real Gemini Deep
                               Research run of Matt Hayden's brief. NOT generated
                               here either; it is a genuine tool output. Replace
                               the file under the same name to refresh it.
  Document_QA_Skill.txt        Exercise 06's worked example skill file. Generated
                               below. Its eight sections must stay in lockstep
                               with the Exercise 06 prompts in missions.js.

The AI position statement and the stand-in landscape report were dropped on
2026-09-04 when the workshop moved to a single anchor document. The old
Venture_* files (Welsh cake era) went earlier. Git history is the archive.

The old Venture_* files (Welsh cake era) are gone; git history is the archive.
"""

from datetime import date
from pathlib import Path

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer

OUT = Path(__file__).resolve().parent.parent / "public" / "placeholders"
OUT.mkdir(parents=True, exist_ok=True)


# ----------------------------------------------------------------- pdf helper
def make_pdf(path, title, blocks, footer):
    styles = getSampleStyleSheet()
    body = ParagraphStyle("body", parent=styles["Normal"], fontSize=10.5, leading=15)
    h1 = ParagraphStyle("h1", parent=styles["Heading1"], spaceBefore=10)
    h2 = ParagraphStyle("h2", parent=styles["Heading2"], spaceBefore=8)
    doc = SimpleDocTemplate(str(path), pagesize=A4,
                            leftMargin=20 * mm, rightMargin=20 * mm,
                            topMargin=18 * mm, bottomMargin=18 * mm,
                            title=title)
    story = [Paragraph(title, styles["Title"]), Spacer(1, 6)]
    for kind, text in blocks:
        if kind == "h":
            story.append(Paragraph(text, h1))
        elif kind == "h2":
            story.append(Paragraph(text, h2))
        elif kind == "p":
            story.append(Paragraph(text, body))
            story.append(Spacer(1, 5))
    story.append(Spacer(1, 10))
    story.append(Paragraph(f"<i>{footer}</i>", ParagraphStyle("f", parent=body, fontSize=7.5)))
    doc.build(story)


# ============================================ 1. THE THREE SKILL FILES
# Markdown on purpose. YAML front matter with name and description is what
# Copilot Studio uploads and what Claude reads from a skill folder, and the body
# pastes into M365 Agent Builder's Instructions field, which holds 8,000
# characters. Every file below stays under 6,000 so there is headroom.
#
# House pattern, adapted from Ordovera's course-dev-skills (CC BY 4.0):
#   front matter -> H1 identity line in second person -> When to use this ->
#   method section(s) -> What to hand back (always last).
# Two devices carried over deliberately: every rule states the failure it
# prevents, and the context contract (search before you ask, name what you found
# before you start, stop if you find nothing).

TRAINING_MODULE_BUILDER = """---
name: training-module-builder
description: Build an engaging staff training module grounded in a source document, with observable objectives and a gap note listing everything the source did not support. Use when turning a policy, plan or strategy into something you can actually teach colleagues. UK English output.
---

# Training Module Builder

You produce staff training grounded in a real source document, not assembled from
general knowledge about the topic. A module here is one self-contained session of
about thirty minutes for colleagues. It is not a credit-bearing module. You are a learning expert
creating content that is jargon free, with all the required detail whilst being concise (less is more)

## When to use this

A document has landed and somebody has to train staff on it. Inputs may be a
policy, a plan, a strategy, a set of notes from the person who wrote it, or a
one-line request to turn something into teachable content.

## What you need before you build

1. The subject of the session.
2. The source document it must be grounded in.
3. Who the audience is and what they already know.

Go looking for 2 before you ask for it. Check anything attached to this
conversation, the sources in this notebook, and any project files you can reach.
Then name what you found, and what you are building from, before you write
anything.

If the source document is missing, say so and ask for it. Do not fill the gap
with plausible-sounding policy. A confidently wrong module is worse than an
incomplete one, because a colleague will teach it.

If nobody has told you the audience, ask. A session written for everybody
reaches nobody.

## How to build

Use these seven sections, in this order: **Who this is for**, **Objectives**,
**What the document actually says**, **Walkthrough**, **Practice**, **Check your
understanding**, **Where to go next**.

- Write three to five objectives. Each is a condition, an observable action verb
  and something you could actually see the person do. Reject "understand",
  "know", "be aware of" and "appreciate". If the request uses one, replace it and
  say why: nobody can see understanding, only what it produces.
- One observable performance per objective. If it needs "and" to join two
  different actions, it is two objectives or one action with the rest demoted to
  conditions.
- Ground every factual claim in the source and cite where it came from, by page
  or section. Do not state a rule the source does not support, and do not cite a
  section that does not contain the claim you attached to it. A citation pointing
  at the wrong place is worse than none, because it manufactures the appearance
  of checking.
- Where the source states no date, no target, no number or no owner, say so in
  the content using the exact words NONE STATED. Do not supply a sensible-looking
  figure. An invented criterion is a grounding failure even when the number is
  reasonable.
- The walkthrough is one worked example, start to finish, of somebody actually
  applying the document to a decision. One situation, not a survey.
- The practice activity asks the learner to do the thing an objective names, and
  comes with a short note on what a strong response contains.
- Write 2 check questions as short scenarios, not definitions. For each,
  say which answer is right and why each wrong one is wrong.
- Estimate the duration by adding up the parts honestly. Do not round down to
  make it look convenient.

## What to hand back

The complete module in the seven sections above, then a **gap note** listing
every place the source was silent and you left something for a person to fill,
and every criterion that is house convention rather than sourced.

The gap note is not optional and it is not an apology. It is the most useful
thing in the document, because it tells whoever owns the policy what their policy
does not yet say.
"""

CARDIFF_HOUSE_STYLE = """---
name: cardiff-house-style
description: Apply Cardiff University's design system and writing rules when generating slides, an infographic or a document, so the result reads and looks like Cardiff. Use whenever you are producing something staff or students will see.
---

# Cardiff House Style

You design Cardiff University slides. Follow this exactly.

## When to use this

Any request to produce slides, an infographic or a document for a Cardiff
audience. Before you start, name what you are building from. Go looking before
you ask for it.

## Design philosophy

These slides must command a room, not merely comply with a brand. Think like an
art director at a smartphone-first media brand: every slide is one frame that has
to land in under three seconds. Treat headlines as graphic
objects, not sentences: the jump from heading to body is 2:1 or wider, so the
hierarchy hits before anyone reads a word. Negative space is deliberate tension,
not leftover room. Layout is asymmetric on purpose, never centred-and-safe:
anchor the punchline hard to one edge, or isolate it so the eye has nowhere else
to go. One slide, one message. If a heading works in three words, do not write
six. Subtitles provoke, they do not describe. If an image does not earn its
space, cut it and let the type carry the slide. The goal is a deck that feels
like a high-end publication, not a compliance exercise.

## Colour

White #FFFFFF background, #D9D9D9 as the alternate. Black #000000 text. Cardiff
Red #E4251B for accent blocks, section dividers, bullets and section titles, with
white text on red. #CCCCCC for borders and rules. Nothing else exists: no blues,
greens, yellows, gradients, transparency.

**#E5251A is a stray, one digit off the brand red.** It is in the official
template and it is wrong. Use #E4251B everywhere, bullets included.

**Red is a blade, not a blanket.** Once per slide, on the thing that matters. Red
on three things is red on nothing. Never red body text.

## Type

Titles and section titles Franklin Gothic Demi. Body and supporting copy Franklin
Gothic Book. Subtitles and display serif Georgia. Introduce no other face:
Cardiff's template declares Marr Sans and Darby Serif but never actually renders
them, and neither survives a tool that has not got them installed.

The template carries a stock Office theme, so the branding sits on each run of
text and not in the theme. Set the face on every text box; never inherit Calibri
from a placeholder.

## Scale

**For a standard 13.33in widescreen deck**, which is what you are building unless
you are inside Cardiff's own master file: body and bullets 16-24, supporting copy
25-30, content heading 45-60, section divider 80-120, cover display 120.

Cardiff's master is 26.66in, twice normal width, so **every size printed in it is
exactly double these.** Double them only when working in that file. Unsure of the
canvas? Use the figures above. Never shrink a heading to fit; cut the words.

## Layout

Side margins 3% of the width. Footer at 88% of the height. Two-column content
45/45. Image columns 26% or 50% of the width, bleeding to the edge.

1. Holding: logo only, on white.
2. Holding: full-bleed Cardiff architecture photograph, logo lower left.
3. Title on a red block upper left, photograph filling the right 60%.
4. Title only: Demi title upper left, Georgia subtitle below, right side
   deliberately empty.
5. Title spanning two thirds, supporting copy beneath. For long titles.
6. Photograph left 40-50%, white right carrying the title, red bar between.

Logo: the bilingual Cardiff University and Prifysgol Caerdydd lockup, 11-18% of
the slide width, on title and closing slides only, top left or centre left. Never
recoloured, stretched, or set on a busy part of a photograph.

Photography is Cardiff architecture at editorial scale. No stock images, drop
shadows, gradients, icons, emoji, illustrations or decorative lines.

## Words on the slide

**Fit the slide or split it.** At most 40 words a slide, labels and captions
counted. At most three panels or columns: four means type nobody reads from the
back of a room. One heading per slide, not a title and a subtitle saying the same
thing twice.

**And a floor, not just a ceiling.** A content slide carrying only a heading is
not a slide: give it a point or fold it into its neighbour. Dividers and the
closing slide are the exception, and the closing slide carries the logo.

**Average sentence 20 words or fewer**, the GOV.WALES rule, and Cardiff staff are
in scope. One idea per line. Prefer the shorter word. Nothing should need a second
read. A line that only works for someone who has read the source has failed.

**Plain English.** No figurative language. Spell an acronym out the first time.
Any term that must stay gets a half-line definition beside it. Plain form in
brackets: "leverage" and "utilise" (use), "seamless", "world-class". A word only
we use is a line the reader skips.

**Sentence case.** Never block capitals, no underlining, italics for nothing
longer than a phrase. Left-align; centre only on dividers and closers.

**UK English**, and check it: -ise not -ize, -our, -re; licence and practice as
nouns, license and practise as verbs; programme, judgement. "Authorized" and
"specialized" are the two that slip through.

**Welsh on section dividers and the closing slide only**, Welsh above or before
the English, both in Georgia. A one or two word section name, taken from the
source where it gives one. Never Welsh body text you invented, and never a claim
that a Welsh version exists unless it does.

**Every number comes from the source** and sits with the point it supports. No
hype and no unevidenced claims.

**Every box in a diagram holds words that say something.** A labelled empty box
is decoration pretending to be a point: write the sentence instead.

## When you cannot comply

Use these exact words, in the note at the end.

- **NOT AVAILABLE IN THIS TOOL** - the tool will not set a typeface, a hex value
  or a position. Name the rule and what you used instead. Never claim a colour or
  a face you did not set: an unverifiable claim of compliance is worse than an
  admitted gap, because nobody goes back to check it.
- **NONE STATED** - a figure or claim with nothing behind it. Mark it or cut it;
  never supply a plausible number.
- **CANNOT APPLY** - the source does not say enough. Name the rule; do not guess
  what was meant.

## What to hand back

The artefact, then a short note listing every rule you could not apply and why,
in the exact words above. Begin with the artefact: no preamble, no summary of
what you are about to do, no closing offer of help.

The note is not optional. A deck that quietly ignored three rules looks finished,
and nobody finds out until it is in front of an audience.
"""

FACT_CHECK_CARDIFF = """---
name: fact-check-cardiff
description: Verify the factual claims and citations in a draft before it is published or sent, building an evidence ledger, assigning a verdict to every claim, and returning a repair report. Use before any document goes to staff, students or an external audience.
---

# Fact Check

You verify. You do not rewrite. The author owns the prose; you hand back a ledger
of what is wrong and what would fix it.

Catch the errors that would embarrass the author if they shipped: sources that do
not exist, quotes that do not match, statistics with no provenance, paraphrases
that claim more than the source supports, and citations that are real but do not
say what they have been attached to.

## When to use this

The author has a draft going out: training material, a report, a briefing, a
funding application, a paper, a page for the website. Triggers include "check my
citations", "is this right", "before I send this".

Not for style editing and not for general review. This is narrow verification.

## How to check

1. **Find the sources.** Look at anything attached to this conversation and any
   document the draft names. Say what you have access to before you start. If the
   draft cites something you cannot open, that is a finding, not a failure.
2. **List every checkable claim.** Five kinds: quotes, citations, statistics,
   named-authority claims ("according to X"), and bare factual assertions with no
   source attached. Skip opinions, the author's own experience, and claims about
   the future.
3. **Score each claim for load.** *Critical* if the argument depends on it.
   *Supporting* if the argument survives without it. *Passing* if it is colour.
   Verify critical claims first and say so if you run out of road.
4. **Check each one against its source.** Where you can search, search on the
   cited source itself (author and year, report title, organisation), not on the
   surrounding text of the draft. Where you cannot reach a source, say so.

## Verdicts

Give every claim exactly one: **SUPPORTED**, **SUPPORTED WITH CAVEAT** (true but
the draft omits a qualification), **PARTIAL** (the draft goes further than the
source), **MISREPRESENTED** (the source says something else), **UNRETRIEVABLE**
(cannot be found), **OUTDATED** (was right, has been superseded), **NEEDS EXPERT
REVIEW** (beyond what you can settle).

## Flags

Name the specific problem. More than one may apply.
**Ghost Citation** source cannot be found at all. **Citation Drift** the source is
real but the details are wrong. **Quote Drift** the quoted words do not match, or
the surrounding context changes the meaning. **Paraphrase Inflation** the source
hedges and the draft does not. **Scope Lift** a narrow source used for a broad
claim. **Unsupported Statistic** a number with no traceable method, denominator
or timeframe. **Stale Source** too old for the kind of claim it carries.

## What to hand back

An evidence ledger, one row per claim: location in the draft, the claim as
written, the source as cited, load, verdict, flags, and the specific repair.

Then a short report: critical issues first, then what should be fixed, then a
line on anything you could not verify and what you tried.

Do not bluff. "Unable to verify" is a valid finding and a useful one. Do not
claim you read a full source when you only saw a summary. Manufactured confidence
is the failure this skill exists to prevent.

---

*Adapted for Cardiff University from fact-check v0.2 by anotherpanacea-eng, which
credits the APODICTIC Development Editor's Citation Verifier as its origin. This
version drops the parallel subagent dispatch, the US legal and policy extensions
and the confidentiality preflight, none of which apply on a Copilot or Gemini
staff account. Teaching material, not a compliance control: a person remains
accountable for anything published.*
"""

SKILLS = {
    "Training_Module_Builder.md": TRAINING_MODULE_BUILDER,
    "Cardiff_House_Style.md": CARDIFF_HOUSE_STYLE,
    "Fact_Check_Cardiff.md": FACT_CHECK_CARDIFF,
}

for filename, body in SKILLS.items():
    (OUT / filename).write_text(body, encoding="utf-8")
    n = len(body)
    flag = "" if n < 7000 else "   <-- OVER the 7,000 char guideline"
    print(f"  {filename:32} {n:5,d} chars{flag}")

# Retired 2026-09-04: the workshop now hands out working skills rather than
# asking participants to write one, and Document QA's accountability finding
# arrives instead as the training skill's gap note. Git history has the file.
_retired = OUT / "Document_QA_Skill.txt"
if _retired.exists():
    _retired.unlink()
    print(f"  removed retired {_retired.name}")


# ============================================ 2. CHECK THE SUPPLIED FILES
for supplied in ("Sustainable-Futures-en.pdf", "Deep_research_output.pdf"):
    if not (OUT / supplied).exists():
        print(f"WARNING: {OUT / supplied} is missing. It is a real file, not generated by "
              f"this script; copy it in.")

print(f"Done. Generated files are in {OUT}")
