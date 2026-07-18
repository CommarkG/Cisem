# BUILD-PROMPT BP-0007 — The plan-gate bootstrap (meta-layer + plan protocol/wizard)
**FOR:** Opus drafts (sensitive/root governance); Governor foundational-decrees. **status:** QUEUED | **priority:** HIGH | **essential:** y | **depends-on:** none (this IS the root)
**Ratified design:** tiered double-ratification plan-gate; wizard-mirrors-protocol; bootstrap-by-decree; consolidated into ARCH-00190.

## THE EDGE CASE (Governor's question) — where do the wizard/protocol for creating wizards/protocols come from?
They are the ROOT. They cannot go through themselves (infinite regress). Escape = **foundational
decree** (root_authority): Opus drafts, Governor decrees. This is the ONLY creation path that skips
the wizard — because it CREATES the wizard. After that, everything flows through them.

## THE HIERARCHY to build (top = ratified by foundational decree; below = created THROUGH the layer above)
```
ROOT (foundational decree, Opus+Governor):
  META-PROTOCOL   — how to create any protocol (structure, ratification, SSOT rule)
  META-WIZARD     — how to create any wizard (must faithfully implement its protocol; verified)
    │
    ├─ PLAN-PROTOCOL   (enhance ARCH-00190) — how a DRAFT becomes a PLAN
    ├─ PLAN-WIZARD     (/cisem-plan skill)  — executes the plan-protocol; wizard MIRRORS protocol (I10)
    ├─ CREATION-PROTOCOL (§3 + ARCH-00230)  — already exists
    └─ CREATION-WIZARD  (/cisem-create)     — already built (needs verify)
        │
        └─ ALL governed creations — require a PLAN ratified by BOTH Opus (soundness) + Governor (authority)
```

## THE RULE it wires (A4, finally enforced)
- **Governed creation** (node/corespine/protocol/engine/wizard) → requires a ratified PLAN (Opus+Governor).
- **Raw capture (IBD/park) + SWIFT-safe zero-blast extraction** → EXEMPT (else it freezes park-by-demand, D6).
- A wizard is ratified only when verified to faithfully implement its protocol (mirror, not parallel — I10).

## CORE SEEDS (immutable)
[[CORE-SEED 1 | MUST: META-PROTOCOL + META-WIZARD are the ONLY things ratified by foundational decree (root); everything else goes through them | WHY: bootstrap without regress | VERIFY: only root nodes carry root_authority (I11)]]
[[CORE-SEED 2 | MUST: every wizard is verified to MIRROR its protocol (the protocol is SSOT; the wizard is its executable) — never two divergent sources | WHY: I10 | VERIFY: wizard steps map 1:1 to protocol clauses]]
[[CORE-SEED 3 | MUST: the plan-gate binds GOVERNED creations only; raw capture + SWIFT-safe extractions stay exempt | WHY: no rigidity (D6) / preserve park-by-demand | VERIFY: an IBD capture needs no plan; a new node does]]

## PLAN (Opus drafts each as PROPOSED for Governor foundational decree)
1. META-PROTOCOL + META-WIZARD (root). 2. PLAN-PROTOCOL (enhance ARCH-00190) + PLAN-WIZARD (/cisem-plan).
3. Wire the plan-gate check into the audit. 4. Governor foundational-decrees the root; ratifies the rest double.
