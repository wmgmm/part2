# How to write a skill file, and where ours came from

Researched 2026-09-04 while building the three skills the workshop hands out. Recorded so the
next person writing one does not re-derive the pattern.

## Sources

- **Ordovera, `course-dev-skills`** — https://github.com/Ordovera/course-dev-skills, **CC BY
  4.0**, five instructional-design skills plus context documents. The anatomy below is theirs.
- **`fact-check` v0.2** by anotherpanacea-eng —
  https://gist.github.com/anotherpanacea-eng/30f9a6ca309923877f7e70b61e88fd24, about 18,500
  characters, which credits the APODICTIC Development Editor's Citation Verifier as its origin.
  **It states no licence.** `Fact_Check_Cardiff.md` is a trimmed adaptation shipped with credit
  on Matt's decision; if it is ever reused beyond this workshop, ask the author first.

## The anatomy

Every skill in the Ordovera set follows this, and ours do too:

1. **YAML front matter, `name` and `description` only.** `name` in kebab-case. `description` is
   two clauses: what it does and what it produces, then "Use when…". No other keys. This is what
   Copilot Studio reads on upload and what Claude reads from a skill folder.
2. **H1 title, then a one or two sentence identity line in the second person.** Always "You
   *verb*…". Where there is a differentiator worth defending, a second line states the anti-goal
   ("A generic style pass is not this").
3. **`## When to use this`.** What has landed on the person's desk, and the range of acceptable
   inputs.
4. **The method section(s)**, named with a working verb: `## How to build`, `## How to review`,
   `## How to check`. Context-dependent skills prepend an acquisition section.
5. **`## What to hand back`, always last, always that heading.** The deliverable, then the
   mandatory disclosure that goes with it, then one sentence on why the disclosure is not
   optional.

## The two devices worth copying

**Every rule states the failure it prevents**, usually as a comparative. "A confidently wrong
module is worse than an incomplete one." "A citation pointing at the wrong section is worse than
no citation, because it manufactures the appearance of verification." This does more work than
any amount of emphasis: it tells the model what it is trading off.

**The context contract.** Four steps, and the order matters:
- *Search before you ask.* "Go looking for it before you ask for it." Never open with a question
  you could have answered from the attachments.
- *Search by filename semantics, not filenames.* "files named for voice, tone, style, brand" —
  which is why the skill survives being pointed at somebody else's documents.
- *Name what you found, in the output, before doing any work.*
- *Stop if you find nothing.* And if the user overrides, produce the work but stamp it "rules
  not applied" and mark every finding provisional, so an override can never later be mistaken
  for a real review. That last move is the neatest idea in the whole set.

## Composition

The Ordovera skills compose without referencing each other. No skill names another, none reads
another's file, and nothing enforces an order. What makes it work:

- Each skill's input list names the previous one's output **by generic noun**, not by skill name.
- Standards are **deliberately duplicated** across skills, so running one alone still enforces
  them and running two produces no conflict.
- **Disjoint citation namespaces.** Voice rules are `V`, compliance rules are `C`, and the
  source policy uses `§`, precisely so a document citing all three cannot collide. Ours follows
  this: `Cardiff_House_Style.md` uses `V` for voice and `D` for design, leaving the plan's own
  section numbers untouched.

## The length budget

Keep a skill **under 6,000 characters**. M365 Copilot Agent Builder's Instructions field holds
8,000, and that is the tightest real constraint on portability. If a skill is outgrowing 6,000
it is usually two skills. Ours: Training Module Builder 3,765; Cardiff House Style 3,905; Fact
Check 3,870. Context documents have no budget: Ordovera's exemplar module is 15,807 characters.

## What we changed for a UK university

The Ordovera set is US English and corporate L&D throughout. Beyond spelling, the traps:

- **"Module" collides.** In UK HE a module is a credit-bearing unit of 10-20 credits, not a
  30-minute e-learning object. `Training_Module_Builder.md` says so in its first paragraph.
- **"Customer" does not transfer.** Student, applicant or colleague, depending. It is politically
  loaded in UK HE even though CMA guidance treats students as consumers.
- **Reading level.** Their plain-language rule cites "US grade 8". Use reading age, or WCAG,
  which for a UK university is 2.2 AA under the Public Sector Bodies Accessibility Regulations.
- **The compliance frame is commercial-liability shaped** (refunds, fault admission). The HE
  equivalents are different: academic judgement, safeguarding, disability disclosure and
  consent, fitness to practise, and immigration advice, which is a regulated activity under the
  Immigration and Asylum Act 1999 and which staff must not give without OISC-exempt status.
