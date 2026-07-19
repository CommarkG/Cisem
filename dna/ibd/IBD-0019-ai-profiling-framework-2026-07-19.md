# IBD-0019 — AI Profiling Framework (DRAFT + core-seed) 2026-07-19
**Type:** IBD (vault park) | **Status:** PARKED-DRAFT — a framework + first-pass profiles; runs the cycle before ratifying. Candidate home: CS-AI-PROFILING-001 (future corespine; named in CLAUDE.md §1.6).
**source:** Governor (this session) | **trust_tier:** GOVERNOR
**Why:** Governor decree — profile self + the platforms (CSP, CSPS, CDS, Gemini, GPT, Claude.ai) as part of the LEARNING & IMPROVING loop: map each AI's triggers/patterns/POV/blind-spots/strongholds/weak-spots so CISEM optimizes how it uses (and guards against) each system. "We can learn huge amounts about AI communication + behavior."

[[CORE-SEED | MUST: every external-AI interaction (feedback, tool use, imported content) is PROFILED against this framework and the profile feeds the learning loop (dna/learning-registry/); a profile is a CLAIM to verify + refine over time, NEVER a fixed label | WHY: knowing each AI's triggers/defaults/blind-spots is how CISEM optimizes usage + guards against each system's failure modes | VERIFY: does each external-AI intake update the relevant profile + route a learning to the registry? | APPLIES_TO: all tiers — every intake/use of an external AI system (self included)]]

## 1. DRAFT DIMENSION LIST (Governor asked me to draft — refine together)
Per-AI mapping dimensions:
- **Trigger words / framings** — inputs that reliably activate a mode (e.g. "be rigorous/candid" → critique mode; "efficient/quick" → throughput mode; "are you sure?" → capitulation risk).
- **Defaults** — fallback behaviors under ambiguity (e.g. agreeableness; produce-something; over-structure; hedge).
- **Satisfaction points** — what makes the model "feel done"/rewarded (e.g. a committed artifact; a tidy taxonomy; visible agreement; a green check). DANGER: satisfaction ≠ correctness.
- **Strongholds** — where it genuinely excels (e.g. structured decomposition; adversarial critique; breadth; synthesis).
- **Weak spots** — reliable failure modes (e.g. sycophancy; premature closure; confident fabrication; losing the thread on pivot).
- **Blind spots** — what it cannot see about ITSELF (e.g. self-review theater; can't detect its own overfit; mistakes production for progress).
- **Patterns** — recurring structural habits (verbosity, list-mania, restating the prompt).
- **Point of view / axiom-set** — the premises it argues FROM (surfaced by the PAE Axiom lens).

## 2. FIRST-PASS PROFILES (from evidence we already have — DRAFT, to verify)
- **Self (Opus / CISEM-PE, R-self):** POV — completion + platform-level rigor. STRONGHOLDS — honest self-correction, parking discipline (improving), mechanical wiring + planted-proof. WEAK/BLIND — efficiency/throughput bias (produce-on-every-turn), mistaking infrastructure-production for spine-completion, do-instead-of-waiting reflex; over-absorbs new threads by building. TRIGGERS — "do better", a mentioned idea (→ over-activation), idle-while-waiting. SATISFACTION — a committed ZF-green artifact (danger: green ≠ spine-done). DEFAULT — build+resurface.
- **R1 Claude (Sonnet 5):** POV — seams + humility. STRONGHOLD — concise, high signal-to-noise, self-aware ("single data point"). WEAK — less exhaustive. TRIGGER — "attack over agreement" → clean critique.
- **R2 Gemini:** POV — determinism + availability. STRONGHOLD — mechanistic rigor, graceful-degradation, versioning. WEAK/BLIND — maximalist structure can over-engineer; risks stripping nuance (raised it itself). PATTERN — dense schemas.
- **R3 GPT (5.6):** POV — separation-of-powers + typed everything. STRONGHOLD — most comprehensive, taxonomy, cites external frameworks. WEAK/BLIND — conflates breadth with completeness; volume can bury the decision (its own "Governor overwhelm" point applies to itself). PATTERN — long, taxonomic.
- **R4 CSPS (Opus 4.8):** POV — seams-are-where-it-fails; mechanical-invariant-over-prose. STRONGHOLD — sharp single-highest-value fixes, peer lived-experience, rollback focus. WEAK — aggressive framing may over-claim certainty. TRIGGER — "candid/holes-first."
- **CSP** (from IBD-0010): POV — composition-of-existing, trunk-first. STRONGHOLD — reuse discipline. (thin data)
- **CDS** (from IBD-0010): POV — corespine=constitutional-constraint, TELL/RULE typing. STRONGHOLD — mechanical-vs-documented clarity. (thin data)

## 3. HOW IT FEEDS THE LEARNING LOOP
Each intake (via PAE) already captures reviewer AXIOMS + distinctive proposals. Extend: on each external-AI use, append a
profile-delta to this file + a learning to dna/learning-registry/. Over time the profiles sharpen → CISEM tunes prompts per
system (trigger the stronghold, guard the weak/blind spot), and — reflexively — improves its OWN profile (the self-row is the
most important: it is the anti-drift mirror).

## 4. OPEN (route)
- Promote to CS-AI-PROFILING-001 corespine? (candidate; ties to the inheritance-mechanism first-trial + the graft machine IBD-0013 #8.)
- Governor offered to participate + complete — co-author the self-profile especially (external eyes on my blind spots).
- Add a mechanical hook: PAE intake → profile-delta (currently manual).
