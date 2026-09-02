#!/usr/bin/env python3
"""Generate the workshop's generated artifact files.

Run from the repo root:  python3 tools/make_artifacts.py
Outputs land in public/placeholders/. Deterministic, so re-running produces
identical files apart from the retrieval date line.

The three anchor artifacts and the swap contract:
  Sustainable-Futures-en.pdf   Cardiff University's real Environmental
                               Sustainability Plan 2025-35. NOT generated
                               here; copied in from the supplied PDF. This
                               script only checks it is present.
  AI_Position_Statement.pdf    Generated below from POSITION_STATEMENT_TEXT
                               (currently Cardiff Met's public statement,
                               reproduced with attribution as the stand-in).
                               When Cardiff University publishes its own
                               statement, replace this FILE under the SAME
                               filename and update the artifact `note` string
                               in src/data/missions.js. No other code changes.
  Policy_Landscape_Report.pdf  Exercise 1's backup. Generated below as a
                               clearly labelled stand-in; replace with a real
                               Deep Research export of the Exercise 1 brief
                               under the same filename when available.

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


# ============================================== 1. THE AI POSITION STATEMENT
# Verbatim text of Cardiff Metropolitan University's public position statement,
# retrieved from the URL below. Reproduced for teaching with attribution; to be
# replaced by Cardiff University's own statement when published (see the swap
# contract in the module docstring).
STATEMENT_URL = "https://www.cardiffmet.ac.uk/about/artificial-intelligence/position-statement/"
STATEMENT_RETRIEVED = date(2026, 8, 29).isoformat()

POSITION_STATEMENT_BLOCKS = [
    ("h", "Position Statement"),
    ("p", "Cardiff Metropolitan University recognises the profound impact that Generative "
          "Artificial Intelligence (AI) is having across education, research, industry, and "
          "society. We recognise the huge potential benefits AI may bring, and we also "
          "acknowledge the potential risks and concerns being expressed around different facets "
          "of the technology. As an ambitious and progressive modern University, we are "
          "committed to engaging with AI tools in a way that is forward-looking, ethically "
          "responsible, and aligned with our core mission and values."),
    ("h", "Our Approach"),
    ("p", "We take a positive and principle-based stance on the integration of AI into our "
          "learning, teaching, research and operational practices. AI offers considerable "
          "potential to enhance the student experience, student employability, enable "
          "personalised learning, support researcher activities, and increase efficiency in "
          "administrative and academic tasks."),
    ("p", "We believe that AI tools, when used thoughtfully and ethically, can empower our "
          "students and staff, offering new avenues for exploration, creativity, and the "
          "optimisation of academic processes. However, we are acutely aware of the "
          "considerations that accompany these powerful technologies, most notably the "
          "paramount importance of academic integrity and rigour."),
    ("p", "To navigate this evolving landscape, we are committed to promoting literacy around "
          "AI technology across both our students and our staff and fostering a culture of its "
          "responsible use among all members of our community. This involves providing clear "
          "guidance on when and how AI tools can and cannot be leveraged to support learning "
          "and work, while emphasising the critical need for original thought, critical "
          "evaluation of AI-generated content, and transparent attribution where AI has been "
          "utilised."),
    ("h2", "Moving Forward"),
    ("p", "As AI technologies continue to advance, we will remain actively engaged in the "
          "development of comprehensive policies and guidance that will ensure the ethical, "
          "fair, and effective integration of AI across all aspects of university life. These "
          "policies will address areas such as appropriate use in coursework and research, data "
          "privacy, and the cultivation of AI literacy skills for all."),
    ("p", "Our commitment to our community is to harness the benefits of AI to enrich the "
          "educational experience, advance knowledge, and prepare our community for the future, "
          "all while upholding the highest standards of academic honesty and rigor."),
    ("p", "We invite open dialogue across the university community to help continually shape "
          "our collective response and to ensure that AI serves as an ongoing tool for "
          "empowerment."),
]

make_pdf(
    OUT / "AI_Position_Statement.pdf",
    "Position on the Use of Generative Artificial Intelligence (AI)",
    POSITION_STATEMENT_BLOCKS,
    footer=(f"Source: Cardiff Metropolitan University, {STATEMENT_URL} "
            f"(retrieved {STATEMENT_RETRIEVED}). Reproduced for teaching in the AI in the "
            f"Workplace workshop; to be replaced by Cardiff University's own position "
            f"statement when published."),
)


# ========================================== 2. THE LANDSCAPE REPORT (STAND-IN)
# Exercise 1's backup artifact. This stand-in keeps the site and the ?doctor
# preflight green until a real Deep Research run of the Exercise 1 brief is
# exported to PDF and dropped in under the same filename.
make_pdf(
    OUT / "Policy_Landscape_Report.pdf",
    "Policy Landscape Report (stand-in)",
    [
        ("p", "This is a stand-in for the Exercise 1 backup report. The real version is a "
              "Gemini Deep Research run of the Exercise 1 brief (UK university AI position "
              "statements and net-zero commitments, and how institutions reconcile the two), "
              "exported to PDF and saved under this filename."),
        ("p", "If you are reading this during a workshop: your own Deep Research run is the "
              "mission. This file only exists so the download link never breaks. Ask the "
              "facilitator if your run has failed and you need a report to work from."),
    ],
    footer="Stand-in teaching material for the AI in the Workplace workshop, Cardiff University.",
)


# ============================================ 3. THE EXAMPLE SKILL FILE
# Exercise 7's worked example. Plain text on purpose: the whole teaching point
# is that a skill is a file you attach, not a product feature you need a
# licence for. The eight sections here must match the structure the Exercise 7
# prompts ask for, or the exercise contradicts its own example.
SKILL_FILE = """SKILL NAME: Document QA

WHEN TO USE IT: Use this when a plan, policy, strategy or report arrives and
someone has to check what it actually commits us to before it goes further.

INPUTS:
- The document to check (PDF, Word or text).
- Optional: a spreadsheet or register of commitments already extracted from it.

STEPS:
1. Read only the attached document. Use no outside knowledge.
2. Find every commitment: any sentence saying the organisation will do something.
3. For each commitment, record the verbatim quote, the goal or section it sits
   under, its target date, whether it is measurable (a number or a date is
   attached), and the named owner.
4. Count them: how many commitments in total, how many dated, how many
   measurable, how many owned. Use code to calculate the percentages if a
   spreadsheet is attached; do not estimate them by eye.
5. Note anything that looks wrong in the document itself: contradictions,
   figures that do not add up, commitments that repeat.

OUTPUT FORMAT:
- A table with these columns: Commitment (verbatim quote) | Section or goal |
  Target date | Measurable (YES/NO) | Named owner
- Then three lines of accountability numbers: percentage dated, percentage
  measurable, percentage owned.
- Then at most three findings in plain English, each tied to one of the numbers.
- Then one line headed DATA HEALTH.

FAILURE STATES:
- No target date in the text: write NONE STATED.
- No owner named in the text: write NONE NAMED.
- A figure that cannot be computed from what was supplied: write DATA UNAVAILABLE.
- Nothing wrong found in the document: write DATA HEALTH: CLEAN.
- Never infer, estimate or fill a gap to be helpful.

HUMAN CHECK: Before the output is used, a person opens the source document and
confirms one quoted commitment appears there word for word. Every audit
inherits the errors of the extraction it was built on.

OWNER AND VERSION: [your team], v1, [date]. Change the brackets and this file
is yours.
"""

(OUT / "Document_QA_Skill.txt").write_text(SKILL_FILE, encoding="utf-8")


# ================================================ 4. CHECK THE SUPPLIED PLAN
plan_pdf = OUT / "Sustainable-Futures-en.pdf"
if not plan_pdf.exists():
    print(f"WARNING: {plan_pdf} is missing. Copy the supplied Sustainable Futures PDF there; "
          f"it is a real document and is not generated by this script.")

print(f"Done. Generated files are in {OUT}")
