#!/usr/bin/env python3
"""One A4 page per exercise, generated from the site's own data file.

Reads a JSON dump of MISSIONS (src/data/missions.js evaluated with the Vite
base stubbed; see the invocation in tasks/todo.md addendum 111) and writes
Workshop_Hint_Sheets.pdf: a cover, then one page for each exercise, then the
bonus. It never writes to the site.

Every exercise page has the same skeleton, in this order: header with QR code,
a TOOL / FILES / WEBSITE / TIME table, then the core steps numbered as the site
numbers them. The site's closing "Responsible AI" step and the verdict quote are
not printed (Matt's decision, 2026-09-08). Inside a step the order is fixed:
body, files from the website, the chat line (NEW CHAT or SAME CHAT, attach,
paste, turn on), the prompt, then the backup route.

Content shrinks to fit a page rather than spilling on to a second one, so every
exercise is exactly one sheet. The script prints each page's fill and warns when
a page shrinks below SHRINK_FLOOR: cut content rather than let the type go tiny.

    node --input-type=module -e "..." > missions.json     # see addendum 111
    python3 tools/make_hint_sheets.py missions.json out.pdf
"""
import json
import re
import sys

from reportlab.graphics.barcode import qr
from reportlab.graphics.shapes import Drawing
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import (KeepInFrame, PageBreak, Paragraph, SimpleDocTemplate, Spacer,
                                Table, TableStyle)
from reportlab.platypus.flowables import _listWrapOn

SITE = "https://wmgmm.github.io/part2/"
BLACK, GREY, BLUE, RED, PAGE = "#1d1d1f", "#6e6e73", "#0071e3", "#E4251B", "#f5f5f7"
PROMPT_LIMIT = 1300  # characters; longer prompts are pointed at the site instead
SHRINK_FLOOR = 0.85  # warn below this; cut content rather than shrink further
SKIPPED_STEP = "Responsible AI"  # the site's last core step, not printed on paper

INDENT = 14
COL = 174 * mm  # frame width: A4 less 16 mm each side

st = {
    "eyebrow": ParagraphStyle("eyebrow", fontName="Helvetica-Bold", fontSize=8.5, leading=11,
                              textColor=BLUE, spaceAfter=1),
    "title": ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=18, leading=21,
                            textColor=BLACK, spaceAfter=3),
    "brief": ParagraphStyle("brief", fontName="Helvetica", fontSize=10.5, leading=13.5,
                            textColor=BLACK, spaceAfter=2),
    "qr_cap": ParagraphStyle("qr_cap", fontName="Helvetica", fontSize=6.5, leading=8,
                             textColor=GREY, alignment=1),
    "h": ParagraphStyle("h", fontName="Helvetica-Bold", fontSize=8, leading=10, textColor=GREY,
                        spaceBefore=6, spaceAfter=2),
    "info_k": ParagraphStyle("info_k", fontName="Helvetica-Bold", fontSize=7.5, leading=11,
                             textColor=GREY),
    "info_v": ParagraphStyle("info_v", fontName="Helvetica", fontSize=9, leading=11,
                             textColor=BLACK),
    "step": ParagraphStyle("step", fontName="Helvetica-Bold", fontSize=10, leading=12.5,
                           textColor=BLACK, spaceBefore=5, leftIndent=INDENT, firstLineIndent=-INDENT),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=9.2, leading=11.8,
                           textColor=BLACK, leftIndent=INDENT, spaceAfter=1),
    "setup": ParagraphStyle("setup", fontName="Helvetica", fontSize=8.5, leading=11,
                            textColor=BLACK, leftIndent=INDENT, spaceBefore=1),
    "note": ParagraphStyle("note", fontName="Helvetica-Oblique", fontSize=8.3, leading=10.5,
                           textColor=GREY, leftIndent=INDENT),
    "plabel": ParagraphStyle("plabel", fontName="Helvetica-Bold", fontSize=8, leading=10,
                             textColor=GREY, leftIndent=INDENT, spaceBefore=3, spaceAfter=1),
    "prompt": ParagraphStyle("prompt", fontName="Courier", fontSize=7.4, leading=9,
                             textColor=BLACK),
    "bk_label": ParagraphStyle("bk_label", fontName="Helvetica-Bold", fontSize=8, leading=10,
                               textColor=GREY),
    "bk_body": ParagraphStyle("bk_body", fontName="Helvetica", fontSize=8.5, leading=10.8,
                              textColor=BLACK),
    "by": ParagraphStyle("by", fontName="Helvetica", fontSize=8, leading=10, textColor=GREY),
    "cover_t": ParagraphStyle("cover_t", fontName="Helvetica-Bold", fontSize=26, leading=30,
                              textColor=BLACK, spaceAfter=4),
    "cover_s": ParagraphStyle("cover_s", fontName="Helvetica", fontSize=12, leading=16,
                              textColor=GREY, spaceAfter=10),
    "cover_b": ParagraphStyle("cover_b", fontName="Helvetica", fontSize=10.5, leading=14.5,
                              textColor=BLACK, spaceAfter=3),
    "cover_li": ParagraphStyle("cover_li", fontName="Helvetica", fontSize=10.5, leading=14.5,
                               textColor=BLACK, spaceAfter=2, leftIndent=INDENT, firstLineIndent=-INDENT),
    "cover_url": ParagraphStyle("cover_url", fontName="Helvetica-Bold", fontSize=15, leading=19,
                                textColor=BLUE, spaceAfter=2),
}

NOPAD = [("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
         ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
         ("VALIGN", (0, 0), (-1, -1), "TOP")]


def esc(s):
    return (s or "").replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def clean(body):
    """Site bodies carry {icon} tokens and **bold** markers; paper needs neither."""
    body = re.sub(r"\{download\}", "with the Download button", body or "")
    body = re.sub(r"\{[a-z_]+\}", "", body)
    body = re.sub(r"\s*[\U0001F000-\U0001FFFF\u2600-\u27BF\uFE0F]", "", body)  # emoji: Helvetica has none
    body = re.sub(r"\*\*([^*]+)\*\*", r"<b>\1</b>", esc(body))
    return body


def grey(s, size=7.5):
    return f'<font color="{GREY}" size="{size}">{s}</font>'


def qr_code(url, size):
    w = qr.QrCodeWidget(url)
    b = w.getBounds()
    bw, bh = b[2] - b[0], b[3] - b[1]
    d = Drawing(size, size, transform=[size / bw, 0, 0, size / bh, 0, 0])
    d.add(w)
    return d


def indented(flowable, indent=INDENT):
    return Table([[flowable]], colWidths=[COL], style=NOPAD + [("LEFTPADDING", (0, 0), (-1, -1), indent)])


# ----------------------------------------------------------------------------- data views

def core_steps(m):
    """(site number, step) for every core step except the closing Responsible AI one.
    Numbering follows the site, so dropping the last step leaves 1..n intact."""
    core = [s for s in m["steps"] if s.get("tier") == "core"]
    return [(i, s) for i, s in enumerate(core, 1) if s.get("title") != SKIPPED_STEP]


def step_artifacts(s):
    arts = s.get("artifact")
    return arts if isinstance(arts, list) else ([arts] if arts else [])


def attached_names(m):
    names = set()
    for s in m["steps"]:
        for obj in [s] + s.get("parts", []) + ([s["backup"]] if s.get("backup") else []):
            names.update(a["filename"] for a in obj.get("attach", []) if not a.get("paste"))
    return names


def site_action(a, attached):
    """The button on the site's card that gets the file into the tool."""
    if a.get("openOnly"):
        return "OPEN IT"
    if a.get("copyable") and a["filename"] not in attached:
        return "COPY"
    return "DOWNLOAD"


def files_for(m):
    """Every file the exercise fetches from the site, mission cards first, then in-step cards."""
    attached = attached_names(m)
    seen, out = set(), []
    entries = [(a, None) for a in m.get("artifacts", [])]
    for n, s in core_steps(m):
        entries += [(a, n) for a in step_artifacts(s)]
    for a, n in entries:
        if a["filename"] in seen or not a.get("downloadPath"):
            continue
        seen.add(a["filename"])
        out.append((a, n, site_action(a, attached)))
    return out


def tools_text(m):
    return " + ".join(m.get("tools", [])).replace(" + ", f" {m.get('toolsJoin', '+')} ")


# ----------------------------------------------------------------------------- page pieces

def header(m, url):
    code = m.get("code") or "BONUS"
    eyebrow = "BONUS EXERCISE" if m.get("bonus") else f"EXERCISE {code}"
    left = [
        Paragraph(eyebrow, ParagraphStyle("e2", parent=st["eyebrow"],
                                          textColor=RED if m.get("bonus") else BLUE)),
        Paragraph(esc(m.get("pageTitle") or m["title"]), st["title"]),
        Paragraph(esc(m.get("brief", "")), st["brief"]),
    ]
    right = [qr_code(url, 22 * mm), Paragraph("scan for this page", st["qr_cap"])]
    t = Table([[left, right]], colWidths=[148 * mm, 26 * mm], style=NOPAD)
    return [t]


def info_table(m, url):
    files = []
    for a, n, action in files_for(m):
        where = f"step {n}" if n else "top of the page"
        files.append(Paragraph(f"<b>{esc(a['filename'])}</b>  "
                               + grey(f"{esc(a['label'])} · {where}, {action} button"), st["info_v"]))
    minutes = sum(s.get("estMinutes", 0) for _, s in core_steps(m))
    rows = [
        ["TOOL", Paragraph(esc(tools_text(m)) + grey("  ·  sign in with your Cardiff account"), st["info_v"])],
        ["FILES", files or [Paragraph("none", st["info_v"])]],
        ["WEBSITE", Paragraph(f'<font color="{BLUE}"><b>{url}</b></font>'
                              + grey("  ·  the QR code opens it. Every prompt has a COPY PROMPT button there."),
                              st["info_v"])],
        ["TIME", Paragraph(f"about {minutes} minutes", st["info_v"])],
    ]
    rows = [[Paragraph(k, st["info_k"]), v] for k, v in rows]
    t = Table(rows, colWidths=[20 * mm, COL - 20 * mm])
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 2), ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
        ("LINEABOVE", (0, 0), (-1, 0), 0.5, colors.HexColor("#d2d2d7")),
        ("LINEBELOW", (0, -1), (-1, -1), 0.5, colors.HexColor("#d2d2d7")),
    ]))
    return [Spacer(1, 3), t]


def setup_line(obj):
    """The chat line: NEW CHAT or SAME CHAT, then attach, paste and turn on, always in that order."""
    bits = []
    label = (obj.get("attachLabel") or "").upper()
    if label in ("NEW CHAT", "SAME CHAT"):
        bits.append(f"<b>{label}</b>")
    attach = [a["filename"] for a in obj.get("attach", []) if not a.get("paste")]
    paste = [re.sub(r"^paste ", "", a["filename"]) for a in obj.get("attach", []) if a.get("paste")]
    if attach:
        bits.append("<b>Attach</b> " + esc(" and ".join(attach)))
    if paste:
        bits.append("<b>Paste</b> " + esc(" and ".join(paste)))
    extra = obj.get("attachExtra")
    if extra:
        alt = extra.get("alt", "")
        control = "Deep Research" if "Deep Research" in alt else "Canvas" if "Canvas" in alt else "the control shown on the site"
        bits.append(f"<b>Turn on</b> {control}")
    return [Paragraph("  ·  ".join(bits), st["setup"])] if bits else []


def files_line(s, attached):
    arts = [a for a in step_artifacts(s) if a.get("downloadPath")]
    if not arts:
        return []
    parts = [f"{esc(a['filename'])} ({esc(a['label'])}, {site_action(a, attached)} button)" for a in arts]
    return [Paragraph("<b>From the website</b>  ·  " + "  ·  ".join(parts), st["setup"])]


def prompt_block(obj, n, indent=INDENT, width=None):
    p = obj.get("prompt")
    if not p:
        return []
    label = esc(obj.get("promptLabel") or "PROMPT")
    out = [Paragraph(label, ParagraphStyle("pl", parent=st["plabel"], leftIndent=indent))]
    if len(p) <= PROMPT_LIMIT:
        txt = esc(p).replace("\n", "<br/>")
        box = Table([[Paragraph(txt, st["prompt"])]], colWidths=[width or COL - indent])
        box.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#f0f0f2")),
                                 ("BOX", (0, 0), (-1, -1), 0.4, colors.HexColor("#e5e5ea")),
                                 ("LEFTPADDING", (0, 0), (-1, -1), 6), ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                                 ("TOPPADDING", (0, 0), (-1, -1), 4), ("BOTTOMPADDING", (0, 0), (-1, -1), 4)]))
        out.append(indented(box, indent))
    else:
        out.append(Paragraph(f"Long prompt, {len(p.splitlines())} lines, not printed: copy it from the "
                             f"website, step {n}, with the COPY PROMPT button.",
                             ParagraphStyle("pn", parent=st["note"], leftIndent=indent)))
    if obj.get("promptNote"):
        out.append(Paragraph(esc(obj["promptNote"]), ParagraphStyle("pn2", parent=st["note"], leftIndent=indent)))
    return out


def backup_block(b, n):
    """The other route, boxed so it reads as an aside on every page it appears."""
    inner = [Paragraph(esc(b.get("label") or "BACKUP"), st["bk_label"]),
             Paragraph(clean(b.get("text", "")), st["bk_body"])]
    inner += [Paragraph(p.text, ParagraphStyle("s0", parent=st["setup"], leftIndent=0)) for p in setup_line(b)]
    inner += prompt_block(b, n, indent=0, width=COL - INDENT - 12)
    if b.get("after"):
        inner.append(Paragraph(clean(b["after"]), ParagraphStyle("n0", parent=st["note"], leftIndent=0)))
    box = Table([[inner]], colWidths=[COL - INDENT])
    box.setStyle(TableStyle([("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#d2d2d7")),
                             ("LEFTPADDING", (0, 0), (-1, -1), 6), ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                             ("TOPPADDING", (0, 0), (-1, -1), 4), ("BOTTOMPADDING", (0, 0), (-1, -1), 4)]))
    return [Spacer(1, 3), indented(box)]


def page(m, url):
    attached = attached_names(m)
    story = header(m, url) + info_table(m, url)
    story.append(Paragraph("STEPS, NUMBERED AS ON THE WEBSITE", st["h"]))
    for n, s in core_steps(m):
        mins = s.get("estMinutes")
        story.append(Paragraph(f"{n}.  {esc(s['title'])}" + (grey(f"  ·  {mins} min", 8) if mins else ""),
                               st["step"]))
        if s.get("body"):
            story.append(Paragraph(clean(s["body"]), st["body"]))
        for part in s.get("parts", []):
            story.append(Paragraph(f"<b>{part['letter']}.</b>  {clean(part.get('body', ''))}", st["body"]))
            for frm, to in part.get("examples", []):
                story.append(Paragraph(esc(f"Instead of “{frm}” write “{to}”"), st["note"]))
            story += setup_line(part)
            story += prompt_block(part, n)
        story += files_line(s, attached)
        story += setup_line(s)
        story += prompt_block(s, n)
        if s.get("backup"):
            story += backup_block(s["backup"], n)
    return story


def cover(missions):
    plan_users = [m["code"] for m in missions
                  if any(a["filename"] == "Sustainable-Futures-en.pdf" for a in m.get("artifacts", []))]
    story = [
        Spacer(1, 10 * mm),
        Paragraph("AI in the Workplace, Part 2", st["cover_t"]),
        Paragraph("Hint sheets: one page per exercise, in case the website is out of reach.", st["cover_s"]),
        Paragraph("The website is the main thing. Every prompt has a COPY PROMPT button and every file "
                  "a DOWNLOAD button there. The sheets carry the short prompts; the long ones are on the site only.",
                  st["cover_b"]),
        Paragraph(SITE, st["cover_url"]),
        qr_code(SITE, 30 * mm),
        Spacer(1, 4 * mm),
        Paragraph("BEFORE YOU START", st["h"]),
        Paragraph("1.  Sign in to Gemini and Copilot with your Cardiff work account.", st["cover_li"]),
        Paragraph("2.  Open the website: scan the QR code or type the address.", st["cover_li"]),
        Paragraph("3.  Pick an exercise. Its sheet lists the files it needs under FILES: download them "
                  "from the exercise page before you begin.", st["cover_li"]),
        Paragraph(f"4.  The sustainability plan, Sustainable-Futures-en.pdf, is 10.7 MB and is used by "
                  f"exercises {', '.join(plan_users[:-1])} and {plan_users[-1]}: download it once.", st["cover_li"]),
        Spacer(1, 2 * mm),
        Paragraph("HOW TO READ A SHEET", st["h"]),
        Paragraph("<b>NEW CHAT</b> means start a fresh conversation; <b>SAME CHAT</b> means stay in the one "
                  "you are in.", st["cover_li"]),
        Paragraph("<b>Attach</b> means add the file: the paperclip in Copilot, the + under the box in Gemini. "
                  "<b>Paste</b> means put the text into the chat box. <b>Turn on</b> names a tool to switch on "
                  "before you send.", st["cover_li"]),
        Paragraph("Grey boxes are prompts: copy them exactly. Square brackets under a prompt are an "
                  "instruction to you, not text to send. Step numbers match the website.", st["cover_li"]),
        Spacer(1, 2 * mm),
        Paragraph("THE EXERCISES", st["h"]),
    ]
    rows = []
    for m in missions:
        code = "Bonus" if m.get("bonus") else m["code"]
        minutes = sum(s.get("estMinutes", 0) for _, s in core_steps(m))
        rows.append([Paragraph(f"<b>{code}</b>", st["cover_b"]),
                     Paragraph(f"<b>{esc(m['title'])}</b>  {esc(m.get('summary', ''))}", st["cover_b"]),
                     Paragraph(esc(tools_text(m)), ParagraphStyle("ct", parent=st["cover_b"], textColor=GREY)),
                     Paragraph(f"{minutes} min", ParagraphStyle("cm", parent=st["cover_b"], textColor=GREY))])
    t = Table(rows, colWidths=[14 * mm, 90 * mm, 54 * mm, 16 * mm])
    t.setStyle(TableStyle(NOPAD + [("BOTTOMPADDING", (0, 0), (-1, -1), 2)]))
    story.append(t)
    story.append(Spacer(1, 3 * mm))
    story.append(Paragraph("Nobody runs all six: the core steps add up to more than an hour, so choose.",
                           st["cover_b"]))
    story.append(Spacer(1, 3 * mm))
    story.append(Paragraph("The Matts, Cardiff University, September 2026.", st["by"]))
    return story


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(colors.HexColor(GREY))
    W, _ = A4
    canvas.drawString(16 * mm, 7 * mm, "AI in the Workplace, Part 2  ·  hint sheets  ·  The Matts, Cardiff University")
    canvas.drawRightString(W - 16 * mm, 7 * mm, f"{SITE}  ·  page {doc.page}")
    canvas.restoreState()


def main(src, out):
    data = json.load(open(src, encoding="utf-8"))
    missions = data["missions"]
    doc = SimpleDocTemplate(out, pagesize=A4, leftMargin=16 * mm, rightMargin=16 * mm,
                            topMargin=14 * mm, bottomMargin=12 * mm,
                            title="AI in the Workplace Part 2: hint sheets", author="The Matts")
    W, H = A4
    fw, fh = W - 32 * mm, H - 26 * mm
    frames = [("cover", KeepInFrame(fw, fh, cover(missions), mode="shrink"))]
    for m in missions:
        url = f"{SITE}#/{m['id']}"
        frames.append((m["id"], KeepInFrame(fw, fh, page(m, url), mode="shrink")))
    story = []
    for i, (_, k) in enumerate(frames):
        story.append(k)
        if i < len(frames) - 1:
            story.append(PageBreak())
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    print(f"wrote {out}: {len(missions) + 1} pages")
    for name, k in frames:
        _, h = _listWrapOn(k._content, fw, None)
        scale = 1 / getattr(k, "_scale", 1)
        flag = "  WARNING: below the shrink floor, cut content" if scale < SHRINK_FLOOR else ""
        print(f"  {name:7s} fill {h / fh * 100:5.1f}%  scale {scale:.2f}{flag}")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
