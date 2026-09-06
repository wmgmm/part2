#!/usr/bin/env python3
"""Check whether a Canvas-built dashboard is telling the truth about our data.

    python3 tools/verify_chart_data.py public/placeholders/Example_Bubble_Chart.html

WHY THIS EXISTS
    Exercise 06 teaches people to check a figure in a second tool before they
    trust it. On 2026-09-06 the exercise's own example dashboard failed that
    test: Gemini Canvas embedded a dataset that looks like ours and is not.
    This script is the check, so nobody has to take the claim on trust.

    It compares the CSV a dashboard carries inside itself against the CSV we
    handed the model, row by row, and prints what differs. Run it on any build:
    a clean one prints IDENTICAL and exits 0, so it also works as a regression
    test on a corrected dashboard.

HOW THE DATA IS FOUND
    These builds embed the file in <script id="hesa-data-csv" type="text/csv">.
    That is a convention of the prompt, not a standard, so if a future build
    stores it differently this script says so rather than guessing.
"""

import csv
import io
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "public" / "placeholders" / "HESA_Estates_Workshop.csv"
KEY = ("Institution", "AcademicYear")


def embedded_csv(html):
    """Pull the CSV out of the page, or explain why it could not be found."""
    m = re.search(
        r'<script[^>]*type=["\']text/csv["\'][^>]*>(.*?)</script>',
        html, re.S | re.I,
    )
    if not m:
        # Fall back to the header line, in case the block is stored some other way.
        i = html.find("Institution,AcademicYear")
        if i == -1:
            raise SystemExit(
                "No embedded CSV found. This build does not carry the data inside\n"
                "itself, so there is nothing to compare. Check how it loads the file."
            )
        raise SystemExit(
            "Found a CSV header but not the expected\n"
            '<script type="text/csv"> block. Inspect the file by hand.'
        )
    return m.group(1).strip()


def rows_by_key(text):
    reader = csv.DictReader(io.StringIO(text))
    if reader.fieldnames is None:
        raise SystemExit("The embedded block has no header row.")
    return {tuple(r[k] for k in KEY): r for r in reader}, reader.fieldnames


def main():
    if len(sys.argv) != 2:
        raise SystemExit(__doc__.strip().splitlines()[2].strip())
    target = Path(sys.argv[1])
    if not target.exists():
        raise SystemExit(f"No such file: {target}")

    theirs, their_cols = rows_by_key(embedded_csv(target.read_text()))
    ours, our_cols = rows_by_key(SOURCE.read_text())

    print(f"  dashboard   {target.name}")
    print(f"  source      {SOURCE.name}\n")
    print(f"  rows           {len(theirs):>6}  vs {len(ours):>6}")
    t_inst = {k[0] for k in theirs}
    o_inst = {k[0] for k in ours}
    print(f"  institutions   {len(t_inst):>6}  vs {len(o_inst):>6}")
    if their_cols != our_cols:
        print(f"  columns differ: {their_cols}")

    missing = sorted(o_inst - t_inst)
    if missing:
        print(f"\n  DROPPED, {len(missing)} institutions never appear:")
        for name in missing:
            print(f"    {name}")
    invented = sorted(t_inst - o_inst)
    if invented:
        print(f"\n  NOT IN THE SOURCE AT ALL, {len(invented)}:")
        for name in invented:
            print(f"    {name}")

    shared = sorted(set(theirs) & set(ours))
    exact = [k for k in shared if theirs[k] == ours[k]]
    print(f"\n  rows present in both      {len(shared)}")
    print(f"  of those, matching exactly {len(exact)}")
    if shared:
        print(f"  ALTERED                    {len(shared) - len(exact)}")

    # Cardiff is what the exercise is about, so it gets shown in full.
    print("\n  Cardiff University, Scope 1 and 2 emissions (tCO2e):")
    print(f"    {'year':10} {'dashboard':>12} {'source':>12}   {'':>8}")
    worst = None
    for year in sorted({k[1] for k in ours if k[0] == "Cardiff University"}):
        k = ("Cardiff University", year)
        t = theirs.get(k, {}).get("Scope12_tCO2e", "-")
        o = ours[k]["Scope12_tCO2e"]
        flag = ""
        if t not in ("-", "") and o:
            gap = abs(float(t) - float(o)) / float(o) * 100
            flag = "" if gap < 0.05 else f"off by {gap:5.1f}%"
            if worst is None or gap > worst[1]:
                worst = (year, gap)
        print(f"    {year:10} {t:>12} {o:>12}   {flag}")

    def trend(rows, key):
        first = rows.get((key, "2015/16"), {}).get("Scope12_tCO2e")
        last = rows.get((key, "2024/25"), {}).get("Scope12_tCO2e")
        if not first or not last:
            return None
        return float(first), float(last), (float(last) - float(first)) / float(first) * 100

    a, b = trend(theirs, "Cardiff University"), trend(ours, "Cardiff University")
    if a and b:
        print(f"\n  The story each one tells about Cardiff, 2015/16 to 2024/25:")
        print(f"    dashboard  {a[0]:>10,.1f} to {a[1]:>10,.1f}   {a[2]:+.1f}%")
        print(f"    source     {b[0]:>10,.1f} to {b[1]:>10,.1f}   {b[2]:+.1f}%")

    clean = not missing and not invented and len(exact) == len(shared) == len(ours)
    print("\n  " + ("IDENTICAL. Every figure traces to the source file."
                    if clean else
                    "NOT THE SOURCE DATA. Do not present any figure from this build."))
    return 0 if clean else 1


if __name__ == "__main__":
    sys.exit(main())
