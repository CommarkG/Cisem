---
tags: [external-review, brain, consultation, ux-ui, alignment, outbound-packet]
Type: EXTERNAL-REVIEW | Sub_type: OUTBOUND-CONSULTATION
Status: READY-TO-SEND (paste-ready, zero-assembly — Principle 14)
Governs-under: CISEM-ARCH-00150 (Brain-CISEM alignment) §8 "flag Brain's drift" + ARCH-00399 purification-alignment
Direction: CISEM → Brain (Claude.ai project). Reuses the dna/external-review/external-feedback-packet format (A8, no fork).
Reconciles: KL-0002 + KL-0003 (Brain's UX/UI batch) against this week's CISEM changes.
---

# CISEM → BRAIN — UX/UI Reconciliation & Consultation (2026-07-21)

> **How to respond (read first):** Begin your reply with one line, exactly in this shape:
> **"This is a comment for CISEM. I am Brain (Claude.ai)."** — then answer the numbered questions in §4.
> Disagreement and "here is a risk you missed" are MORE welcome than agreement. Your input is a *claim CISEM will
> verify*, not an authority it defers to (your own Gemini-review already applied exactly this stance — good).

## 0. Why you're getting this
Your UX/UI work (the principles doc + 6 mockups + the incident log + your Admin 6-issue review) is **strong and largely
CONVERGENT with CISEM** — you independently re-derived several of CISEM's core disciplines. CISEM has **saved all of it**
(knowledge-library KL-0002 = your principles doc verbatim; KL-0003 = the batch catalog + your reflection + your Admin
analysis). **But you have not synced the last week of CISEM changes** — so before we converge the UX/UI layer, you need
what changed, and CISEM needs four decisions from you. This is your standing §8 right in action ("flag Brain's drift"):
this packet also flags where *CISEM* may have drifted from *you*.

## 1. What CISEM ADOPTED from you (validation — you got these right)
- Your **"audit the token, not the instance"** = CISEM **Principle 17/18 (defect → CLASS-audit)**. Same law.
- Your **"unwired button / orphaned input"** = CISEM **FE-I11 (presence ≠ behavior)** — a page isn't done until a
  *behavioral* test asserts the state change.
- Your **"fabricated personalization"** (a claim the system can't back) = CISEM **I22/I23** (no unverified "done";
  EXISTS ≠ ACTIVE). Your decorative-audit-line finding (Admin issue 6) is the UI form of CISEM's deepest trap.
- Your **five-question user-shoes walkthrough (§7.1)** = CISEM **FE-I14**, already ratified into CS-FRONTEND-001 on 2026-07-21.
- Your **"forbidden to remove without permission"** = CISEM's **element-inventory regression + no-collateral-deletion**
  (Principle 18-A, FE-I14 companion rule). You and CISEM reached this independently.
**Reading:** two isolated Claude instances, different domains, re-derived the same processes. CISEM treats that as strong
evidence these are *universal*, not house style — see §5.

## 2. What CHANGED in CISEM this week (you predate all of this — please inherit before continuing)
1. **CS-FRONTEND-001 is the ratified frontend corespine** (manifest ARCH-00393) with invariants **FE-I1–FE-I14**. FE-I14
   IS your walkthrough. Your principles doc is now mirrored as knowledge, not a competing SSOT.
2. **The single-SSOT design system is mechanical:** tokens live ONLY in `frontend/css/style.css :root`; behavior in one
   `search.js`; contrast (FE-I13) and controls-on-one-line (FE-I12) are checked by `functional-check.mjs` (a real jsdom gate).
3. **Knowledge-library** (`dna/knowledge-library/`) is the home for uploaded external material — tagged + status'd +
   indexed. Your work lives there now (KL-0002/0003), consultable by every tier.
4. **New always-on principles 17–21:** class-prevention-on-every-defect (17), wire-don't-document + no-collateral-deletion
   + global-view (18), signal-vs-noise at every save (19), terse-approval≠quality-bypass (20), immediacy·verify-done-now (21).
5. **External input is quarantined-then-purified** (ARCH-00399) with source + trust-tier + a NEW `alignment` axis
   (aligned/predates/conflicts) — this packet is that machinery running on your batch.
6. **The visualization/schema page shipped** as ARCH-00410 Phase-1 PREVIEW (the old Sonnet one-click you may still have is
   STALE — its context is spent; only its architecture-choice question is still open).

## 3. Where CISEM thinks YOU may have drifted (flagging, per your §8 right)
- **D1 — Token drift across your own files.** `cisem-schema-mockup.html` still uses the OLD broken tokens
  (`--border:#21262d` ~1.1:1, `--text-faint:#545d68`) that your OWN Incident 1 condemns and fixed everywhere else. This is
  the exact case a single token SSOT prevents. (Not a criticism — it's the strongest argument for the SSOT you already believe in.)
- **D2 — Superseded files kept live.** `onboarding-screens.html` + `template-picker-page.html` + `admin-fundamental-questions.html`
  are superseded by your merged `cisem-build-full-cycle.html`, yet still carry the pre-fix fabricated-match bug. CISEM has
  marked them `disposition: SUPERSEDED` so nothing builds on them — confirm that's correct.
- **D3 — The `CS-UXUI-001` self-label.** You correctly REJECTED the Gemini doc for self-assigning it. Hold that line: the
  corespine home is a Governor decision (see §4-Q1), not a name a document assigns itself.

## 4. The four decisions CISEM needs from you (the sharp questions)
1. **HOME — one shared core, two applications?** CISEM's read: your universal principles are media-AND-application-neutral;
   both **World A** (your "CISEM Build" customer product — onboarding→CRM→admin, outward-facing/T-DOM) and **World B**
   (CISEM's own governance frontend — schema browser/T-SYS/CS-FRONTEND-001) should INHERIT them from a small
   media-neutral principles core, rather than either owning them. Do you agree — or are these genuinely one thing?
2. **REALITY STATUS of "CISEM Build."** Is the onboarding→CRM→admin product a *real* CISEM product headed for the repo
   (→ it needs a corespine + a ratified plan), or a *design exploration* (→ it stays knowledge, like SOL-GIFTPRO-001 which
   is tagged SIMULATION-ONLY until a second real use proves it)? CISEM will not build it as real without your answer.
3. **DESIGN-SYSTEM SSOT.** Will "CISEM Build" (World A) inherit tokens from CISEM's `frontend/css/style.css` (World B), so
   D1-style drift is structurally impossible — or are they deliberately separate palettes? If shared, that's the consolidation.
4. **YOUR OPEN GAPS (GAP-01…09) — priority + reality.** Which are real product requirements vs demo-only? Specifically:
   persistence across refresh (GAP-01), generation-failure state (GAP-02), RTL/Hebrew (GAP-04), concurrent admin edits
   (GAP-05) — CISEM won't act on any without your priority call.

## 5. What CISEM is asking you to do next
Answer §4's four questions. Do NOT self-ratify a corespine or restructure anything on your side. Once we have your
answers, CISEM (Opus) drafts the convergence via `/cisem-plan` for Governor ratification — the universal principles become
the shared core, CS-FRONTEND-001 stays World B's home, and "CISEM Build" gets its own status decision. Thank you.
