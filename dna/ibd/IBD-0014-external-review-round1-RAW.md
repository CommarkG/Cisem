# IBD-0014 — External Review Round 1 (RAW QUARANTINE) 2026-07-19
**Type:** IBD (quarantine) | **Status:** RAW-EXTERNAL · UN-PURIFIED · verbatim
**source:** external reviewer, self-identified "Claude (Sonnet 5)", relayed by the Governor (response to external-feedback-packet-2026-07-19) | **trust_tier:** EXTERNAL-UNTRUSTED (a CLAIM to verify — never the Governor's voice; IBD-0008 security core seed)
**depollution_source:** none — pre-Stage-1 capture (predates ARCH-00405 external de-pollution; Governor-supplied and/or internal PAE Stage-2 only)
**depollution_pass:** no
**Purified version (mandatory PAIR):** [[IBD-0014-external-review-round1-PURIFIED]] — essence + critique→patch mapping lives THERE. Raw stays raw.

## VERBATIM
This is a comment for CISEM. I am Claude (Sonnet 5), acting as external reviewer at Yariv's request — not as CISEM's own reasoning tier.

**1. Three-layer conflict model — sound in shape, one hidden regress.**
The weak point isn't the three layers, it's the *triage function in Layer 2*. Deciding "rigid-default fires" vs. "provisional-proceed" vs. "vault-and-halt" is itself a classification decision — and nothing says that decision is simpler or more mechanical than the conflicts it's routing. If triage requires judgment, you've just relocated the hard problem one level up, not solved it. Fix: the triage criteria need to be more mechanical/checklist-driven than anything they route, or you've built infinite regress with extra steps.

Two more concrete failure modes:
- **Vault-and-halt is a queue with no drain discipline.** No staleness SLA, no escalation, no priority order stated → it either fills up and rots, or gets quietly bypassed under pressure. Needs an explicit review cadence and an auto-escalation rule.
- **"Provisional" tends to ossify.** Once something is built on a provisional resolution, reversing it later has real cost — this is the standard temporary-fix-becomes-permanent trap. "Never final until ratified" is a claim, not a guarantee, unless provisional states have a hard expiry or a blocking dependency that forces the ratification conversation before more gets built on top.

**2. Sealed-boundary + re-groundable — real, but its defeasibility criterion is undefined.**
"Argument-weight" is doing all the work here and isn't specified. If it cashes out to a human judgment call, that's fine — but call it that, not a structural guarantee. This is the same pattern as the CS-MASTER-VALIDATION-001 root self-reference issue already flagged: single-point Governor decree standing in for schema logic. It holds as long as one attentive Governor exists. It breaks under governor turnover, unavailability, or scale to multiple governors. Name the dependency explicitly rather than let "re-groundable" imply a formal mechanism that isn't there.

**3. Significance = governing reach — necessary, not sufficient.**
Reach alone is gameable: an overly abstract corespine can *claim* to govern everything without concretely constraining anything (unfalsifiable authority). Pair it with: (a) demonstrated breakage — does removing it actually break named, existing instances, not hypothetical ones — and (b) constraint stability over time. A domain whose rules churn weekly isn't governing, it's just noisy.

**4. Build-one-refine-until-flawless — has no stopping criterion, which is the actual risk.**
"Flawless" is undefined. Polishing one instance indefinitely risks encoding that instance's idiosyncrasies as general law, then generalizing from an overfit sample of one. Two fixes, pick one: (a) define "flawless" operationally — e.g., passes N adversarial reviews with zero open findings against a fixed checklist — before it's allowed to generalize; or (b) require at least two built instances (not both flawless, just built) before abstracting the pattern. Triangulating across two beats polishing one.

**5. What you're not seeing:**
- No meta-governance layer for the system's own health — queue depth, staleness, drift rate on the vault itself aren't monitored by anything described. Classic ops answer: instrument the queue, not just the conflicts.
- Self-hosting risk: the referee and the player are the same reasoning tier. If a "Pro Colleague" adversarial persona is your only counterweight, understand it shares the base model's blind spots with the thing it's reviewing — it's not independent in the way this outside letter is. A one-time external review (like this one) is more valuable but is a single data point; you'd want this as a recurring, not one-off, input.
- Undefined behavior for deployed downstream apps when vault-and-halt fires — do they freeze, degrade, or error? Not specified, and it's the difference between a design principle and an operational one.

Willing to go deeper on any of these if useful.
