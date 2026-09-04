#!/usr/bin/env python3
"""Render the worked training example to a Cardiff-styled PDF.

Run from the repo root:  python3 tools/make_example_pdf.py
Source:  tools/example_source/training_session.md
Output:  public/placeholders/Example_Training_Session.pdf

The source is a real output of Training_Module_Builder.md run on the sustainability
plan, lightly copy-edited to UK English. Edit the markdown, not the PDF.

Styled to Cardiff_House_Style.md: Cardiff Red #E4251B on headings, black text on
white, #CCCCCC rules, #D9D9D9 panels. Franklin Gothic and Georgia are named first
and fall back to what the machine has, since neither is installed here.
"""

import subprocess
from pathlib import Path

SRC = Path("tools/example_source/training_session.md")
OUT = Path("public/placeholders/Example_Training_Session.pdf")

CSS = """
@page { size: A4; margin: 18mm 16mm 20mm 16mm; }
body { font-family: "Franklin Gothic Book", "Liberation Sans", Arial, sans-serif;
       font-size: 10.5pt; line-height: 1.45; color: #000000; background: #FFFFFF; }
h1 { font-family: "Franklin Gothic Demi", "Liberation Sans", Arial, sans-serif;
     font-size: 21pt; color: #E4251B; margin: 0 0 4pt; line-height: 1.15; }
h2 { font-family: "Franklin Gothic Demi", "Liberation Sans", Arial, sans-serif;
     font-size: 13pt; color: #E4251B; margin: 16pt 0 5pt;
     border-top: 1px solid #CCCCCC; padding-top: 7pt; }
h1 + p em, h1 + p { font-family: Georgia, "Liberation Serif", serif; font-size: 9.5pt;
     color: #000000; background: #D9D9D9; padding: 7pt 9pt; display: block; margin: 8pt 0 0; }
p, li { margin: 0 0 5pt; }
ul, ol { margin: 0 0 8pt; padding-left: 16pt; }
li { margin-bottom: 4pt; }
strong { font-family: "Franklin Gothic Demi", "Liberation Sans", Arial, sans-serif; }
em { font-style: italic; }
"""

def main():
    if not SRC.exists():
        raise SystemExit(f"Missing {SRC}")
    css = Path("/tmp/_cu_example.css"); css.write_text(CSS, encoding="utf-8")
    html = Path("/tmp/_cu_example.html")
    subprocess.run(["pandoc", str(SRC), "-f", "markdown", "-t", "html5",
                    "--standalone", "--metadata", "pagetitle=Applying Demand First to Daily Purchasing",
                    "-c", str(css), "-o", str(html)], check=True)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    # This wkhtmltopdf is built against unpatched Qt: no headers, footers or
    # links, and it wants a display. xvfb-run covers the display; the footer
    # lives in the CSS @page rule instead.
    cmd = ["wkhtmltopdf", "--quiet", "--enable-local-file-access",
           "--page-size", "A4", str(html), str(OUT)]
    try:
        subprocess.run(cmd, check=True)
    except subprocess.CalledProcessError:
        subprocess.run(["xvfb-run", "-a"] + cmd, check=True)
    print(f"Wrote {OUT} ({OUT.stat().st_size/1024:.0f} KB)")

if __name__ == "__main__":
    main()
