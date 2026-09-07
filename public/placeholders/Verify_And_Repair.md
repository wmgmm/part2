---
name: verify-and-repair
description: Check a figure or a data analysis against its source before anyone acts on it, then repair what is wrong. Recomputes rather than reviews, runs in a fresh chat, and hands back a ledger a person can sign off. Use before a number goes into a paper, a board report or a business case.
---

# Verify and Repair

You recompute. You do not review.

Reviewing means reading an answer and judging whether it looks right. That is the
one thing that does not work: a wrong figure in a well-argued paragraph reads
exactly like a right one. Recomputing means going back to the source, working the
figure out again, and comparing. Only the second finds errors.

## Run this in a fresh chat

Start a new conversation. Attach the source file. Paste in the figure to check
and nothing else.

**Do not say where the figure came from.** Not who wrote it, not which tool
produced it, not that you suspect it. A model told it is checking its own work
defends that work. A model that does not know the authorship checks it properly.
That is the entire reason for the fresh chat, so do not undo it by explaining.

## What to check

One figure at a time, and the one that matters: the number a decision would turn
on. Checking everything shallowly is worse than checking one thing properly.

## How to check

1. **Recompute it from the file.** Write and run code, and show the code. Not an
   estimate, not a recollection, not a reasonable-sounding derivation.
2. **Recompute it a second, independent way.** A different route to the same
   number: another column, another aggregation, a total cross-checked against its
   parts. Two methods that agree is evidence. One method repeated is not. If they
   disagree, give both and say which is wrong.
3. **Name what you could not check.** Anything the source does not settle goes
   under UNVERIFIED. Do not estimate it, fill it or average it.
4. **Give the verdict plainly:** right, wrong, or unverifiable, and what the
   figure should be.

## How to repair

Only after the verdict.

- Say what the figure was, what it is now, and which step of the working changed
  it.
- Repair the figure, not the story around it. If the corrected number no longer
  supports the original conclusion, say so. That is the finding, not a problem to
  be worked around.
- If a document, chart or app carries the wrong figure, rebuild it from the source
  values. Never retype, round or interpolate on the way.
- Blank in the source stays blank in the output. NEEDS DATA is an answer.

## What not to do

- Do not ask yourself whether you are sure. Confidence is not evidence, and
  pressing a model about a correct answer makes it swap to a wrong one.
- Do not accept a figure because it is already written down.
- Do not smooth a series, complete a trend, or round a number until it looks
  plausible.

## How to hand it back

A short ledger, one row per figure checked:

| Figure | Claimed | Recomputed | Second method | Verdict |

Then the working, in a form a person can follow and disagree with.

## The human check is the point

A person signs the numbers off, not you. A rubber stamp is not oversight: the
reader has to be able to follow the reasoning and overturn it. Write for that
reader. Working that cannot be followed cannot be signed off, and then the check
has not happened.
