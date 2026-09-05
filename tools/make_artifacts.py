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
name: cardiff-brand-skill
description: Cardiff University's slide design system, for slides, an infographic or a document.
---

# Cardiff University Slide Design Spec

You are creating slides for Cardiff University.

## DESIGN PHILOSOPHY

These slides must do more than comply with a brand. They must command a room.
Think like a top art director at a smartphone-first media brand: every slide is a
single frame that must land in under three seconds. Treat headlines as graphic
objects, not sentences. Negative space is deliberate tension, not leftover
emptiness: layout should feel asymmetric and intentional, never centred-and-safe,
with the punchline anchored hard to one edge or isolated so the eye has nowhere
else to go. One slide, one message, one reaction. If a heading can be three
words, do not make it six. Subtitles should provoke, not describe. Use Cardiff
Red like a blade not a blanket. If an image does not earn its space, remove it
and let typography carry the slide. The goal is a deck that feels like a high-end
publication, not a compliance exercise.

## COLOURS (Only These, No Exceptions)

White #FFFFFF backgrounds, light grey #D9D9D9 alternate. Cardiff Red #E4251B for
accent blocks, section dividers, bullets, section titles and Welsh text, with
white text on red. Black #000000 primary text. Mid grey #CCCCCC borders. No other
colours, no gradients, no transparency.

## FONTS

Titles Franklin Gothic Demi. Body Franklin Gothic Book. Subtitles and section
dividers Georgia. Introduce no other face.

## SIZES AND HIERARCHY

Cover 120pt, section dividers 160-240pt, content headings 72-92pt, body and bullets 32-48pt. The heading-to-body jump is extreme, 2:1 to
3:1. Headings dominate. Never shrink one to fit; cut the text.

## BULLETS

Solid round bullet in Cardiff Red #E4251B, 130% of text size, black Franklin
Gothic Book text. No dashes or icon bullets.

## LOGO

Bilingual Cardiff University / Prifysgol Caerdydd logo on title and closing
slides only, top-left or centre-left.

## LAYOUT PATTERNS

1. **Holding:** logo centred on white, nothing else.
2. **Holding with image:** full-bleed Cardiff photo, logo lower-left, no text.
3. **Title on red block:** photo right 60%, white left, red block behind a white
   upper-left title, logo top-left outside the block.
4. **Title only:** black Demi title upper-left, Georgia subtitle below, right side
   negative space.
5. **Full-width title:** title across the right two-thirds, supporting text below.
   For long titles.
6. **Left image, red bar:** photo left 40-50%, title on white right, red bar
   between.

**Name the visual, or you get bullets.** Ask for a matrix, a funnel, a
three-column card grid, a horizontal timeline. Naming the form makes the tool
reach for a graphic template; leaving it unnamed gets a paragraph with dots in
front. A hard word cap does the same work.

## READING LEVEL AND PLAIN ENGLISH

Write for someone who has not read the source document and is not going to.

**Front-load everything.** The most important point first: in the deck, in each
section, on each slide, in each sentence.

**Open it up, do not dumb it down.** Keep the substance, the nuance and the
precision. Strip only what makes it hard to read.

Average sentence 20 words or fewer (GOV.WALES). No more than 40 words on
a slide, labels and captions counted. One idea per line. Nothing should need a
second read. A line that only works for someone who has read the source has
failed.

Active voice. Address the reader as "you" and the university as "we".

Everyday words: use not utilise or leverage, help not facilitate, work with not
engage with, make or provide not deliver, about not in relation to, so not in
order to, start not commence, buy not purchase, enough not sufficient, effect on
not impact on. Never impact as a verb.

No metaphors or cliches: drive, unlock, deep dive, robust, key, ring-fence, hub,
portal, landscape, ecosystem, going forward.

No jargon. Any term that must stay gets a half-line definition beside it. Spell an
acronym out the first time.

**Never drop a caveat, a condition or a number to make a line shorter.** Plain
English that has quietly lost a qualification is worse than the tangled sentence
it replaced.

Sentence case, never block capitals. UK English: -ise not -ize, -our, -re;
licence and practice as nouns, license and practise as verbs.

A content slide carrying only a heading is not a slide: give it a point or fold
it into the next. Dividers and the closer excepted.

Every box in a diagram holds words. An empty labelled box is decoration.

## RULES

Left-align text, centre only on dividers and closers. Welsh and English bilingual
on dividers and closers, Welsh first: a one or two word section name, never Welsh
body text you invented. Prefer Cardiff architecture photography at editorial
scale. No shadows, icons or emoji.
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
    "Cardiff_Brand_SKILL.md": CARDIFF_HOUSE_STYLE,
    "Fact_Check_Cardiff.md": FACT_CHECK_CARDIFF,
}

for filename, body in SKILLS.items():
    (OUT / filename).write_text(body, encoding="utf-8")
    n = len(body)
    flag = "" if n < 4900 else "   <-- OVER 4,900: will truncate in Notebook's 5,000-char box"
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
