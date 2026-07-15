# Template Protocol
**Node ID:** CISEM-TEMPLATE-PROTOCOL-001
**Type:** ARCH (protocol subtype) | **Status:** DRAFT
**Goal:** Resolve the CS-TEMPLATE-001 A/B scope fork by correcting a category
error — Template is not a corespine, it is a protocol every corespine follows.
**Position:** T-SYS, protocol layer — sibling to Naming Policy, NOT a peer of
CS-UXUI-001 or CS-DESIGN-001.

## 1. The correction
A corespine governs WHY and WHAT'S REQUIRED. A template is the concrete
default-compliant starting artifact. They are bonded (class/constructor), not peers.
**This dissolves the A/B fork entirely** — it was never a real choice between
UX/UI-only vs. platform-wide; every ratified corespine owns its own template.

## 2. The rule
Every RATIFIED corespine SHOULD have a child `{CORESPINE-ID}-TEMPLATE.md`.
A corespine without one is not broken, but is flagged INCOMPLETE until it does.

## 3. Hard-coded, mechanically-enforced recurring check (Governor mandate)
Fires at EVERY creation event, no exceptions:
```
"Do we have a core template and a corespine for this already?"
```
Feeds directly into CLAUDE.md §3.2b (Template-First Check). If no template
exists: name the gap explicitly (do not silently proceed without one), and
this is what "prioritize enhancement/bundling over new creation" actually
means as an executable check rather than a slogan.
