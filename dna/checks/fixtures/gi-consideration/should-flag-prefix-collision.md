# SYNTHETIC FIXTURE — gi-consideration should-FLAG (PREFIX-COLLISION, the RI-0012 regression proof;
# GI-68 design-review fix; never a real plan; test-only)
Node ID: TEST-FIXTURE | Type: TEST | Status: TEST | tags: [fixture, test]
wisdom_considered: [GI-7]

This synthetic plan cites GI-7, which is NOT a real id — it is a string-PREFIX of the real GI-70/GI-72.
A naive unanchored `grep -q "id: GI-7"` would wrongly PASS this (it matches "id: GI-70," as a substring).
This fixture proves the DELIMITER-ANCHORED lookup (`grep -qE "id: GI-7(,|\}|[[:space:]]|$)"`) correctly
flags GI-7 as a STALE-CITATION instead.
