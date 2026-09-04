# Cardiff's own template, measured

Extracted 2026-09-04 from `Cardiff-University-Presentation-Oct24 (2).pptx` (11.2 MB, 25 slides),
so `Cardiff_House_Style.md` states measured values rather than remembered ones. Everything below
came out of the file; anything not evidenced is marked.

## The trap in the numbers

**The template is 26.66 x 15 inches, which is double-scale 16:9.** Every point size in it is
therefore twice what the same design would use on a standard 13.33in deck. The skill states the
scale as a ratio first and gives the raw template figures second, with an explicit instruction to
halve them, because quoting 120pt at someone building a normal deck would be wrong by a factor of
two.

## Palette

Every colour that appears anywhere in the slides, layouts or master, by frequency:

| Hex | Uses | Role |
|---|---|---|
| `#000000` | 102 | Body text |
| `#FFFFFF` | 64 | Background |
| `#E4251B` | 56 | **Cardiff Red.** Section titles, solid left panels, single key figures |
| `#E5251A` | 14 | A stray one digit off the brand red. Correct it to `#E4251B` |
| `#D9D9D9` | 11 | Content panel fill |
| `#CCCCCC` | 11 | Rules and borders |

There is no seventh colour. No gradients and no transparency anywhere in the file.

## Typography

The theme is **stock Office** (Calibri, default Office accents), so the branding is applied at
run level on the slides, not through the theme. Anyone reading the theme alone would conclude
this deck is unbranded.

Verified from actual runs:

| Face | Role | Sizes seen (raw, on the 26.66in canvas) |
|---|---|---|
| Franklin Gothic Demi | Titles and section titles | 90, 92, 96, 100, 120, 240 |
| Franklin Gothic Book | Body and supporting copy | 31.5, 32, 48 |

Two further sizes carry supporting copy on slides 5 to 8 but leave the typeface to
be inherited, so they do not appear in the table above: **50pt (54 runs) and 60pt
(21 runs)**. They are real and the skill uses them, halved, as its supporting-copy
range. Recording this because the table alone reads as though 48 were the ceiling,
which caused a reviewer to flag the skill's figure as invented.
| Georgia | Subtitles, and Welsh display text | 120, 240 |
| Franklin Gothic Heavy | The closing "Discover more" only | 32 |

Marr Sans Regular and Bold are declared on 19 and 16 slides but never surface as the effective
run font, so no role could be verified for them. The skill names Marr Sans as the declared
alternate and tells the model not to introduce any other face, which is honest about what is known.
Darby Serif Text Regular appears once in the master and once on a slide; not enough to state a rule.

**The Welsh-first rule has a real instance:** slide 10 sets "Croeso" above "Welcome", both Georgia
at 240pt.

## Grid and layout

- Side margins at **0.82in, which is 3% of the width**. Consistent across content slides.
- The footer line sits at **13.17in, 88% of the height**, two lines: Franklin Gothic Demi above
  Franklin Gothic Book, both 32pt.
- Two-column content is **45% and 45%** (12.08in panels at x=0.83 and x=13.75).
- Image columns are **26%** (6.98in) or **50%** (13.33in) of the width, bleeding to the edge.
- The logo group runs **11 to 18% of slide width**, bottom left (7%, 40%) or centred.

Layouts actually present in the 25 slides, which is what the skill's D5 list is drawn from:
logo-only cover; full-bleed photograph with logo; half photograph and half title with the title in
red; title with Georgia subtitle; title with supporting copy; left photograph column; left solid
red panel; section divider with a red title and a caption at 88%; two grey panels side by side with
captions beneath; closing slide with the logo and "Discover more / cardiff.ac.uk".

## What changed in the skill as a result

The previous version was written from `CARDIFF_DESIGN_PROMPT`, which was broadly right and
unevidenced. The palette and the four typefaces were correct. What the measurement added: the
ratio-based type scale and the halving warning; the 3% margin, 88% footer line and 45/45 columns;
the 26% and 50% image column widths; the logo sizing band; the named layout list; the `#E5251A`
stray; and the Croeso instance behind the Welsh-first rule. `CARDIFF_DESIGN_PROMPT` was deleted
from `missions.js` afterwards, having become unreferenced; the prompt library still hosts it.
