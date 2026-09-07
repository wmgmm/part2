#!/usr/bin/env python3
"""One A4 page per exercise, generated from the site's own data file.

Reads a JSON dump of MISSIONS (src/data/missions.js evaluated with the Vite
base stubbed; see the invocation in tasks/todo.md addendum 111) and writes
Workshop_Hint_Sheets.pdf: a cover, then one page for each exercise, then the
bonus. It never writes to the site. Content shrinks to fit a page rather than
spilling on to a second one, so every exercise is exactly one sheet.

    node --input-type=module -e "..." > missions.json     # see addendum 111
    python3 tools/make_hint_sheets.py missions.json out.pdf
"""
import json
import re
import sys

from reportlab.graphics.barcode import qr
from reportlab.graphics.shapes import Drawing
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import (KeepInFrame, PageBreak, Paragraph, SimpleDocTemplate, Spacer,
                                Table, TableStyle)

SITE = "https://wmgmm.github.io/part2/"
BLACK, GREY, BLUE, RED, PAGE = "#1d1d1f", "#6e6e73", "#0071e3", "#E4251B", "#f5f5f7"
PROMPT_LIMIT = 700   # characters; longer prompts are pointed at the site instead

st = {
    "eyebrow": ParagraphStyle("eyebrow", fontName="Helvetica-Bold", fontSize=8.5, leading=11,
                              textColor=BLUE, spaceAfter=1),
    "title": ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=18, leading=21,
                            textColor=BLACK, spaceAfter=3),
    "brief": ParagraphStyle("brief", fontName="Helvetica", fontSize=10.5, leading=13.5,
                            textColor=BLACK, spaceAfter=2),
    "meta": ParagraphStyle("meta", fontName="Helvetica", fontSize=8.5, leading=11,
                           textColor=GREY, spaceAfter=6),
    "h": ParagraphStyle("h", fontName="Helvetica-Bold", fontSize=8, leading=10, textColor=GREY,
                        spaceBefore=4, spaceAfter=2),
    "step": ParagraphStyle("step", fontName="Helvetica-Bold", fontSize=10, leading=12.5,
                           textColor=BLACK, spaceBefore=4, leftIndent=14, firstLineIndent=-14),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=9.2, leading=11.8,
                           textColor=BLACK, leftIndent=14, spaceAfter=1),
    "note": ParagraphStyle("note", fontName="Helvetica-Oblique", fontSize=8.3, leading=10.5,
                           textColor=GREY, leftIndent=14),
    "prompt": ParagraphStyle("prompt", fontName="Courier", fontSize=7.4, leading=9,
                             textColor=BLACK, leftIndent=0),
    "verdict": ParagraphStyle("verdict", fontName="Helvetica-Oblique", fontSize=9.2,
                              leading=12, textColor=BLACK, spaceBefore=6),
    "by": ParagraphStyle("by", fontName="Helvetica", fontSize=8, leading=10, textColor=GREY),
    "cover_t": ParagraphStyle("cover_t", fontName="Helvetica-Bold", fontSize=26, leading=30,
                              textColor=BLACK, spaceAfter=4),
    "cover_s": ParagraphStyle("cover_s", fontName="Helvetica", fontSize=12, leading=16,
                              textColor=GREY, spaceAfter=10),
    "cover_b": ParagraphStyle("cover_b", fontName="Helvetica", fontSize=10.5, leading=14.5,
                              textColor=BLACK, spaceAfter=3),
    "cover_url": ParagraphStyle("cover_url", fontName="Helvetica-Bold", fontSize=15, leading=19,
                                textColor=BLUE, spaceAfter=2),
}


def esc(s):
    return (s or "").replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def clean(body):
    """Site bodies carry {icon} tokens and **bold** markers; paper needs neither."""
    body = re.sub(r"\{download\}", "the Download button", body or "")
    body = re.sub(r"\{[a-z_]+\}", "", body)
    body = re.sub(r"\*\*([^*]+)\*\*", r"<b>\1</b>", esc(body))
    return body


def qr_code(url, size):
    w = qr.QrCodeWidget(url)
    b = w.getBounds()
    bw, bh = b[2] - b[0], b[3] - b[1]
    d = Drawing(size, size, transform=[size / bw, 0, 0, size / bh, 0, 0])
    d.add(w)
    return d


def header(m, url):
    code = m.get("code") or "BONUS"
    eyebrow = "BONUS EXERCISE" if m.get("bonus") else f"EXERCISE {code}"
    left = [
        Paragraph(eyebrow, ParagraphStyle("e2", parent=st["eyebrow"],
                                          textColor=RED if m.get("bonus") else BLUE)),
        Paragraph(esc(m.get("pageTitle") or m["title"]), st["title"]),
        Paragraph(esc(m.get("brief", "")), st["brief"]),
        Paragraph(esc(" + ".join(m.get("tools", [])).replace(" + ", f" {m.get('toolsJoin', '+')} ")
                      + f"  ·  {url}"), st["meta"]),
    ]
    right = [qr_code(url, 22 * mm)]
    t = Table([[left, right]], colWidths=[148 * mm, 26 * mm])
    t.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"),
                           ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                           ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0)]))
    return [t]


def prompt_block(step, n):
    p = step.get("prompt")
    if not p:
        return []
    label = esc(step.get("promptLabel") or "PROMPT")
    out = [Paragraph(label, ParagraphStyle("pl", parent=st["h"], leftIndent=14))]
    if len(p) <= PROMPT_LIMIT:
        txt = esc(p).replace("\n", "<br/>")
        box = Table([[Paragraph(txt, st["prompt"])]], colWidths=[160 * mm])
        box.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#f0f0f2")),
                                 ("BOX", (0, 0), (-1, -1), 0.4, colors.HexColor("#e5e5ea")),
                                 ("LEFTPADDING", (0, 0), (-1, -1), 6), ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                                 ("TOPPADDING", (0, 0), (-1, -1), 4), ("BOTTOMPADDING", (0, 0), (-1, -1), 4)]))
        out.append(Table([[box]], colWidths=[174 * mm], style=[("LEFTPADDING", (0, 0), (-1, -1), 14)]))
    else:
        out.append(Paragraph(f"This prompt is {len(p.splitlines())} lines long. Copy it from the "
                             f"website, step {n}, with the COPY PROMPT button.", st["note"]))
    if step.get("promptNote"):
        out.append(Paragraph(esc(step["promptNote"]), st["note"]))
    return out


def attach_line(step):
    items = [a["filename"] for a in step.get("attach", [])]
    label = step.get("attachLabel")
    bits = []
    if label:
        bits.append(label)
    if items:
        bits.append("attach " + " + ".join(items))
    if step.get("attachExtra"):
        bits.append("then enable the " + ("Canvas" if "anvas" in step["attachExtra"].get("alt", "") else "control shown on the site"))
    return [Paragraph(esc(", ".join(bits)), st["note"])] if bits else []


def page(m, url):
    core = [s for s in m["steps"] if s.get("tier") == "core"]
    story = header(m, url)
    files = [a for a in m.get("artifacts", []) if a.get("downloadPath")]
    if files:
        story.append(Paragraph("DOWNLOAD FROM THE SITE FIRST", st["h"]))
        story.append(Paragraph(esc("  ·  ".join(f"{a['filename']}" for a in files)), st["body"]))
    story.append(Paragraph("STEPS", st["h"]))
    for i, s in enumerate(core, 1):
        story.append(Paragraph(f"{i}.  {esc(s['title'])}", st["step"]))
        if s.get("body"):
            story.append(Paragraph(clean(s["body"]), st["body"]))
        story += attach_line(s)
        arts = s.get("artifact")
        for a in (arts if isinstance(arts, list) else ([arts] if arts else [])):
            story.append(Paragraph(esc(f"{a['label']}: {a['filename']} (on the site)"), st["note"]))
        story += prompt_block(s, i)
        if s.get("backup"):
            b = s["backup"]
            story.append(Paragraph(f"<b>{esc(b.get('label') or 'Backup')}:</b> {clean(b.get('text', ''))}", st["note"]))
    if m.get("verdict"):
        story.append(Paragraph("“" + esc(m["verdict"]) + "”", st["verdict"]))
        story.append(Paragraph(esc(m.get("verdictBy", "")), st["by"]))
    return story


def cover(missions):
    story = [
        Spacer(1, 18 * mm),
        Paragraph("AI in the Workplace, Part 2", st["cover_t"]),
        Paragraph("Hint sheets: one page per exercise, in case the website is out of reach.", st["cover_s"]),
        Paragraph("The website is the main thing. Every prompt has a COPY button and every file a DOWNLOAD button there.", st["cover_b"]),
        Paragraph(SITE, st["cover_url"]),
        qr_code(SITE, 34 * mm),
        Spacer(1, 6 * mm),
        Paragraph("<b>Before you start:</b> sign in to Gemini and Copilot with your Cardiff work account. "
                  "Download the sustainability plan, Sustainable-Futures-en.pdf, from the site. It is 10.7 MB.", st["cover_b"]),
        Spacer(1, 4 * mm),
        Paragraph("THE EXERCISES", st["h"]),
    ]
    for m in missions:
        code = "Bonus" if m.get("bonus") else m["code"]
        story.append(Paragraph(f"<b>{code}  {esc(m['title'])}</b>  {esc(m.get('summary', ''))}", st["cover_b"]))
    story.append(Spacer(1, 6 * mm))
    story.append(Paragraph("Responsible AI, every time: this is your work and AI is your assistant. Sign in with the "
                           "work account, keep C1 and C2 data out of anything public, and check before you trust.",
                           st["cover_b"]))
    story.append(Paragraph("The Matts, Cardiff University, September 2026.", st["by"]))
    return story


def main(src, out):
    data = json.load(open(src, encoding="utf-8"))
    missions = data["missions"]
    doc = SimpleDocTemplate(out, pagesize=A4, leftMargin=16 * mm, rightMargin=16 * mm,
                            topMargin=14 * mm, bottomMargin=12 * mm,
                            title="AI in the Workplace Part 2: hint sheets", author="The Matts")
    W, H = A4
    fw, fh = W - 32 * mm, H - 26 * mm
    story = [KeepInFrame(fw, fh, cover(missions), mode="shrink"), PageBreak()]
    for i, m in enumerate(missions):
        url = f"{SITE}#/{m['id']}"
        story.append(KeepInFrame(fw, fh, page(m, url), mode="shrink"))
        if i < len(missions) - 1:
            story.append(PageBreak())
    doc.build(story)
    print(f"wrote {out}: {len(missions) + 1} pages")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
