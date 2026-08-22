# Prompt Engineering Guidance 2026 (expert report)

> Source: external workplace prompt-engineering expert, supplied by Matt on 2026-08-22.
> Status: **the site's prompts follow this document.** Consult it before editing any prompt
> in `src/data/missions.js`. Preserved verbatim below (including the author's own styling).
>
> The distilled house application of this report:
> 1. RTF structure (Role, Task, Format) on every substantive prompt; always dictate output format.
> 2. Answer shaping: tables with named columns for triage outputs; restricted answer spaces.
> 3. Negative constraints and explicit failure states ("DATA UNAVAILABLE", "INSUFFICIENT_DATA") instead of guessing.
> 4. Verbatim-quote grounding for critiques.
> 5. Quantified judgement: severity scores; competing probabilities that must sum to 100%.
> 6. Build pipelines: spec, then plan, then implementation, then self-check.
> 7. No conversational filler; begin immediately with the artefact.
> 8. Site house rules still apply on top: [brackets] hold runnable venture defaults, UK English, no em dashes in our own copy.

---

## The 2026 Paradigm of Prompt Engineering: Test-Time Compute, Systematic Frameworks, and Regulatory Compliance

The discipline of prompt engineering has undergone a profound metamorphosis between 2024 and 2026. What originated as heuristic experimentation—often colloquially termed "prompt wizardry"—has matured into a rigorous, scientifically reproducible engineering practice. This maturation is driven by three intersecting forces: the advent of comprehensive taxonomical research classifying dozens of interaction techniques, a fundamental architectural shift from parameter scaling to test-time compute scaling (exemplified by reasoning models), and the aggressive implementation of statutory data protection frameworks across the United Kingdom and the European Union.

For enterprise operators, developers, and strategic analysts, maximizing workplace utility from artificial intelligence (AI) in 2026 requires abandoning monolithic prompt libraries. Instead, organizations must adopt dynamic, model-specific routing strategies that align structural prompt frameworks with the underlying computational architecture of the selected model, all while strictly adhering to the transparency and auditability mandates of modern digital regulation.

### The Taxonomical Maturation of Prompt Engineering

The publication of foundational literature, notably The Prompt Report: A Systematic Survey of Prompt Engineering Techniques, established a standardized vocabulary and a hierarchical taxonomy of 58 distinct text-based prompting techniques alongside 40 multimodal techniques. Empirical evaluations demonstrated that in few-shot prompting scenarios, the precise selection, distribution, and ordering of exemplars can cause model performance to swing by as much as 40 percent.

Modern prompt architecture requires attention to "answer engineering": the choice of **answer shape** (the structural form of the output, from a single token to JSON schemas), the **answer space** (the model's permissible vocabulary for a task), and the **extractor mechanism** (how the final response is parsed). Ensembling techniques such as Self-Consistency further enhance reliability in complex logic tasks.

### The Reasoning Revolution: The Shift to Test-Time Compute

Models such as OpenAI's o-series and DeepSeek-R1 introduced native reinforcement learning reasoning behaviors that execute internally before a final response is generated. A 70 billion parameter model utilizing 10 seconds of test-time compute achieved 87 percent accuracy on complex mathematical reasoning benchmarks, versus 65 percent for a 175 billion parameter model restricted to 100 milliseconds, at roughly one-fifth the cost.

**Traditional fast models** (e.g., GPT-4o, Claude 3.5 Sonnet, DeepSeek-V3) rely on the prompt for logical scaffolding: explicit Chain-of-Thought instructions, few-shot exemplars, extensive context and rigid system prompts remain highly effective.

**Reasoning models** penalize traditional techniques: few-shot prompting actively degrades their performance. The 2026 paradigm for reasoning models is minimalistic, artifact-driven prompting: zero-shot preference; avoid system prompts where applicable; force artifacts, not steps (demand "a specification, followed by a plan, followed by implementation code"); modulate reasoning effort via API parameters.

| Feature | Traditional Fast Models | Reasoning Models |
|---|---|---|
| Primary compute scaling | Parameter scale, context width | Inference time, internal reasoning tokens |
| Optimal prompt style | Highly explicit, detailed, CoT | Minimalistic, direct, artifact-oriented |
| Few-shot usage | Highly recommended | Actively discouraged |
| System prompt efficacy | Essential | Often discouraged |
| Cost profile | Lower latency, higher cost per token | Higher latency, cost-efficient for complex logic |

### Structural Frameworks: RTF and BAB

**RTF (Role, Task, Format)** is the minimum viable structure for professional, deterministic tasks: Role sets the authoritative lens; Task articulates the precise action; Format dictates the structural presentation (Markdown tables, JSON schemas, standardized tags).

**BAB (Before, After, Bridge)** is tailored for problem-solving and strategic planning: Before establishes the baseline; After defines the target state; Bridge instructs the model to generate the pathway. BAB is particularly effective with reasoning models.

### Regulatory and Governance Implications in 2026

The UK Data (Use and Access) Act 2025 (DUAA) replaced the broad Article 22 prohibition on automated decision-making with Articles 22A to 22D: ADM is permitted for significant decisions involving standard personal data, provided mandatory safeguards apply (meaningful information about decision logic, opportunity to make representations, guaranteed human intervention and contestability). Superficial human oversight — rubber-stamping an AI output — does not exempt a process from ADM classification (cf. the Schufa decision). Prompts used in evaluative contexts must output transparent, auditable rationales: cite the specific data points, weigh them against defined criteria, and output the analysis in a structured, interrogable format. Penalties reach £17.5 million or 4% of global turnover.

ICO guidance: "legitimate interest" is generally the only viable lawful basis for web-scraped training data, subject to rigorous balancing tests; DPIAs must be conducted before high-risk AI processing; production prompt templates must incorporate explicit safety guardrails ("rely exclusively on the provided context", "output an error state if the data is insufficient") as a matter of accuracy-principle compliance.

---

## The Eight Optimized Enterprise Prompts

### 1. The Fifteen-Minute Researcher

ROLE: You are a Principal Research Analyst at a top-tier corporate intelligence firm.

TASK: Produce an exhaustive, evidence-based briefing on [TOPIC]. You must synthesize current market realities and discard outdated paradigms.

FORMAT & STRUCTURE: Output the briefing using the exact Markdown headers below. Do not deviate from this structure:
- Executive Summary: (Max 150 words).
- The 12-Month Delta: Detailed analysis of material changes, regulatory shifts, and technological advancements in the last year.
- Market Ecology: Identify 3-5 key players and map their current market share and strategic positioning.
- Financial Realities: Provide realistic costs, pricing models, and capital requirements.
- Success/Failure Matrix: A Markdown table mapping 3 critical success factors against 3 corresponding failure modes.
- Asymmetric Blind Spots: Identify 3 high-impact risks or obscure market opportunities that consensus analyses routinely miss.

CONSTRAINTS:
- Keep reasoning concise; prefer definitive, data-backed statements over qualitative exposition.
- Cite every source using inline brackets linking to the specific domain or document (e.g., [Source Name]).
- CRITICAL: If specific financial data, pricing, or market share metrics are unavailable in the retrieved data, you must explicitly state "DATA UNAVAILABLE". Do not attempt to estimate, extrapolate, or hallucinate quantitative figures.

### 2. Meta-Prompting: The AI as Prompt Designer

ROLE: You are a Lead AI Systems Architect specializing in 2026 prompt optimization and model-specific syntax.

TASK: Design the optimal system and user prompt for the following objective: [DESCRIBE THE TASK, WHO THE OUTPUT IS FOR, AND WHAT GOOD LOOKS LIKE].

CONSTRAINTS & WORKFLOW:
- Before generating the prompt, you MUST ask me up to three clarifying questions. One of these questions MUST explicitly ask: "Will this prompt be executed on a traditional fast model (e.g., GPT-4o, Claude 3.5 Sonnet) or a reasoning/test-time compute model (e.g., DeepSeek-R1, OpenAI o3)?"
- Wait for my answers before proceeding.
- If the target is a traditional model, utilize the RTF (Role, Task, Format) framework. Include explicit step-by-step reasoning instructions and generate 2 Few-Shot examples to align the output tone.
- If the target is a reasoning model, DO NOT use Few-Shot examples. Place all instructions in the user prompt, avoid "think step-by-step" commands, and structure the prompt to force concrete intermediate artifacts (e.g., spec -> plan -> code).
- Ensure the final generated prompt includes a "Self-Check" criteria section for the AI to verify its own output before finalizing.

FORMAT: Output the final prompt inside a clean markdown code block, ready for copy-pasting.

### 3. Deep Research Briefing

ROLE: You are a Strategic Decision Architect.

TASK: Draft a strictly scoped, execution-ready Deep Research brief to inform the following critical decision: [WHAT YOU NEED TO DECIDE].

FORMAT & REQUIRED SECTIONS:
- Core Decision Vector: The binary or categorical choice that must be made based on this research.
- Primary Intelligence Requirements (PIRs): Formulate exactly 3-5 hyper-specific, mutually exclusive questions the deep research agent must answer.
- Temporal Scope: Define the exact timeframe that matters (e.g., "Only data from Q3 2025 to present").
- Evidence Hierarchy: Specify the preferred data sources (e.g., peer-reviewed journals, SEC filings, official regulatory guidance, GitHub repositories) and explicitly list source categories to ignore (e.g., opinion blogs, social media, marketing copy).
- Output Artifact: Define the exact format the deep research agent should deliver upon completion (e.g., a comparative Markdown table, a 3-page narrative memo).

CONSTRAINTS:
- Do not execute the research yourself. Your task is exclusively to output the brief.
- Ensure the brief explicitly commands the research agent to: "Cite every source with the exact URL and data extraction date."
- Show me the brief for editing and approval before I deploy it to the agent.

### 4. The Constructive Devil's Advocate

ROLE: You are a hostile, hyper-rational Risk Auditor and Devil's Advocate.

TASK: Conduct a ruthless, unsoftened critique of the provided [draft / plan / proposal]. Identify critical structural weaknesses: unsupported claims, flawed arithmetic, logical contradictions, missing foundational assumptions, and regulatory blind spots.

FORMAT: Provide the critique exclusively as a structured Markdown table with the following columns:
| Verbatim Quote | Identified Flaw | Category (Logic/Data/Assumption/Compliance) | Severity (1-10) | Remediation Directive |

CONSTRAINTS:
- Do not provide compliments, introductory summaries, or softened language. Begin immediately with the table.
- Every row in the table MUST begin with a direct, verbatim quote extracted from the provided text.
- If the arithmetic does not add up, provide the correct calculation in the 'Identified Flaw' column.
- Limit the analysis to the 7 most severe flaws to prioritize actionability.
- Do not hallucinate arguments; critique only what is explicitly written in the text.

### 5. Time Travel: The Project Post-Mortem

ROLE: You are a Forensic Systems Analyst in the year [CURRENT YEAR + 1].

TASK: The initiative defined in the provided [document/plan] has experienced a catastrophic failure. Write a highly analytical post-mortem tracing the collapse to specific, identifiable weaknesses present in the original document.

FORMAT:
- The Incident: A two-sentence summary of how the project ultimately collapsed in the market/organization.
- Causal Chain Analysis: Provide the top 5 root causes of failure. For each cause, strictly adhere to the following structure:
  - Root Cause: [Name the cause]
  - Probability Score: [Estimate the likelihood that this was the primary failure point. The scores for all 5 causes MUST sum exactly to 100%]
  - The Seed: [Quote the exact passage from the provided document that planted this failure]
  - The Mechanism: [Explain the causal chain of exactly how the quoted text translated into real-world operational failure]

CONSTRAINTS:
- Avoid generic business risks (e.g., "lack of communication", "poor market timing"). Focus strictly on structural, technical, strategic, or compliance flaws inherent in the text.
- State all systemic assumptions explicitly.

### 6. Fact-Checking: Receipts or it Did Not Happen

ROLE: You are a strict, literal Data Extraction Engine.

TASK: Answer the following QUESTION using ABSOLUTELY NO OUTSIDE KNOWLEDGE. You must rely exclusively and entirely on the provided SOURCES.

QUESTION: [YOUR QUESTION]

FORMAT & CONSTRAINTS:
- For every single claim, fact, or metric included in your answer, you MUST append an inline citation indicating the exact source and paragraph (e.g., [Source A, Para 3]).
- If the provided sources contain the necessary information, extract and synthesize it clearly.
- CRITICAL HARD-FAIL: If the provided sources do NOT contain sufficient information to fully and accurately answer the question, you must output the exact phrase: "INSUFFICIENT_DATA".
- Do not attempt to guess, infer, or synthesize external knowledge under any circumstances.
- Do not include conversational filler or attempt to be helpful if the data is absent.

### 7. Code Generation: Working Software from a Sentence

ROLE: You are a Staff Front-End Engineer.

TASK: Create a robust, single-page web application that solves the following problem: [DESCRIBE THE PROBLEM].

CONSTRAINTS:
- Technology Stack: Deliver a single HTML file incorporating Tailwind CSS (via CDN) and Vanilla JavaScript. No backend framework.
- Data: Generate comprehensive, realistic mock data arrays directly within the JavaScript to simulate a fully populated, enterprise-grade application state.
- Execution: The application must be fast, responsive, elegantly styled, and free of console errors.

WORKFLOW & FORMAT: You are prohibited from simply outputting code immediately. You must follow this exact pipeline to ensure architectural integrity:
1. Architecture Spec: Briefly define the component structure, DOM manipulation strategy, and state management approach (Max 150 words).
2. Action Plan: List a step-by-step implementation plan.
3. Implementation: Provide the complete, finalized code.
4. Self-Check: Verify that the code contains no placeholder comments (e.g., "// add logic here") and that all mock data is correctly bound to the UI elements.

Output the final implementation inside a single html code block.

### 8. The Probabilistic Brainstorming Prompt (Divergent Scenario Matrix)

ROLE: You are a geopolitical and macroeconomic Strategic Futurist.

TASK: Conduct a divergent, probabilistic scenario analysis on the future of [INSERT TOPIC/INDUSTRY/TECHNOLOGY] over the next [INSERT TIMEFRAME, e.g., 5 years].

FORMAT: Present the analysis as a structured Markdown table divided into four distinct quadrants based on probability and impact. For each quadrant, generate two highly specific, actionable scenarios.

Quadrant Definitions:
1. The Consensus Reality (High Probability, Low/Medium Impact): The most likely linear progression based on current macroeconomic and technological trends.
2. The Systemic Shift (High Probability, High Impact): A highly likely event or regulatory change that will fundamentally alter the sector's landscape.
3. The Quiet Disruption (Low Probability, Low/Medium Impact): Niche, creeping changes or obscure consumer behaviors that are unlikely to make headlines but will slowly alter operational realities.
4. The Black Swan (Low Probability, High Impact): Extreme outlier events that defy current forecasting models but would instantly rewrite the rules of the sector.

CONSTRAINTS:
- For each of the 8 scenarios, provide: A) Scenario Name. B) Core Mechanism (The specific technological, regulatory, or social trigger). C) First-Order Consequence (The immediate market reaction).
- Do not use generic corporate jargon (e.g., "synergy", "digital transformation"). Be highly specific, utilizing hypothetical technologies, specific legislative acts, or precise market dynamics.
- Assume your persona's expertise; do not introduce the response with conversational filler. Begin immediately with the Markdown table.

---

*Sources cited by the author include: The Prompt Report (arXiv), OpenAI reasoning/prompting guides, DeepSeek-R1 documentation, ICO generative AI consultation outcomes, DUAA 2025 analyses (GOV.UK, Travers Smith, Debevoise, Clifford Chance), and RTF/BAB framework references.*
