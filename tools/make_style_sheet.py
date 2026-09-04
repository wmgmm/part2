#!/usr/bin/env python3
"""Composite Matt's infographic style exports into one labelled image for Exercise 04.

Why: Studio generations are metered and Google publishes no number for infographics,
so participants get ONE. The style comparison therefore has to work from examples on
the page rather than from everyone regenerating. See
docs/research/2026-09-04-tool-capabilities.md.

Usage:
    1. Generate the SAME infographic in three or four named styles (Professional,
       Editorial, Sketch Note, Bento Grid are a good spread) and export each as PNG.
    2. Drop them in tools/style_exports/ named after the style, e.g. professional.png.
    3. python3 tools/make_style_sheet.py
    4. Uncomment the `image:` block in the "One each, then look sideways" step in
       src/data/missions.js.

Step 4 matters: ?doctor HEAD-checks every step image, so referencing the file before
it exists turns the preflight red.
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

SRC = Path("tools/style_exports")
OUT = Path("public/infographic_styles.webp")
COLS = 2
TILE_W = 520          # per tile, before the label strip
LABEL_H = 34
PAD = 12
BG = (245, 245, 247)  # matches the site page background
INK = (29, 29, 31)


def load_font(size):
    for candidate in (
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
    ):
        if Path(candidate).exists():
            return ImageFont.truetype(candidate, size)
    return ImageFont.load_default()


def main():
    if not SRC.exists():
        raise SystemExit(f"Put the style exports in {SRC}/ first (see the docstring).")
    files = sorted(p for p in SRC.iterdir() if p.suffix.lower() in {".png", ".jpg", ".jpeg", ".webp"})
    if not files:
        raise SystemExit(f"No images found in {SRC}/.")

    font = load_font(20)
    tiles = []
    for f in files:
        im = Image.open(f).convert("RGB")
        h = round(im.height * TILE_W / im.width)
        im = im.resize((TILE_W, h), Image.LANCZOS)
        tile = Image.new("RGB", (TILE_W, h + LABEL_H), BG)
        tile.paste(im, (0, LABEL_H))
        d = ImageDraw.Draw(tile)
        d.text((2, 6), f.stem.replace("_", " ").replace("-", " ").title(), font=font, fill=INK)
        tiles.append(tile)

    rows = (len(tiles) + COLS - 1) // COLS
    row_h = [max(t.height for t in tiles[r * COLS:(r + 1) * COLS]) for r in range(rows)]
    sheet = Image.new(
        "RGB",
        (COLS * TILE_W + (COLS + 1) * PAD, sum(row_h) + (rows + 1) * PAD),
        BG,
    )
    y = PAD
    for r in range(rows):
        x = PAD
        for tile in tiles[r * COLS:(r + 1) * COLS]:
            sheet.paste(tile, (x, y))
            x += TILE_W + PAD
        y += row_h[r] + PAD

    OUT.parent.mkdir(exist_ok=True)
    sheet.save(OUT, "WEBP", quality=84, method=6)
    print(f"Wrote {OUT} ({sheet.width}x{sheet.height}) from {len(files)} styles: "
          f"{', '.join(f.stem for f in files)}")
    print("Now uncomment the image: block in the Exercise 04 compare step in src/data/missions.js.")


if __name__ == "__main__":
    main()
