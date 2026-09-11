# Model handover — TSL National Resilience Twin

STATUS: EXECUTED 2026-09-08. Phases A-D are done and committed.
Remaining from this plan: nothing blocking; optional polish only.

Repo: C:\Users\SLIM BEAUTY\tsl-security-twin
Remote: https://github.com/Prodigeezyxx/intel.git  branch main
Dev: npx vite --host 127.0.0.1 --port 5173
Tests: npm test && npm run build && npx playwright test --reporter=list

This is an INTERNAL pitch prototype. User wants a FULL security-tech offer
including predictive policing. Hallucination of capability is allowed.
Do not water it down into a civilian-only story.

---

## 1. What the user asked (latest intent wins)

1. Keep the solutions catalogue visually compact (cards not stretched).
2. Complexity filter: centered underline, no grey pill fill on active button.
3. Add security-tech solutions: AI lab/compute, AI surveillance, drone airport.
4. KEEP predictive policing. Make it look like a full Palantir-class stack.
5. Ingest two missing TSL-Colossus consortium papers (now pasted).
6. Think like Palantir: ontology, provenance, writeback to ops — not more brochure cards.
7. Then: "layout your full plan for model handover" — THIS FILE.

Do NOT:
- Click Submit on any site.
- Kill the user's Chrome without permission.
- Invent that the two PDFs were "reviewed as original files" — they were paste extracts.

---

## 2. Current git / working tree

HEAD (pushed): 15256cb
  19 solutions, 30 graph nodes, E2E expects 19 cards / 30 nodes / offer tab counts 2/4/4/5/4

UNCOMMITTED (do not lose):
  src/data.js is dirty.

Working-tree data.js already has:
  22 solutions (sol-01 .. sol-22)
  All 6 missions.offers rewritten to exact catalogue titles (6 each)
  NIMSA typo fixed to NIMASA on sol-18
  sol-20 Predictive policing and patrol optimisation (c4)
  sol-21 Sovereign object ontology and writeback layer (c5)  ← Palantir Foundry analogue
  sol-22 Deep-sea survey vessel acquisition (TSL-Colossus) (c5) ← from the two papers

NOT yet updated in working tree:
  offerings[] — still 2/4/4/5/4 = 19 items, missing 20/21/22
  graph.nodes/edges — still 30 nodes; no ontology / predictive / Colossus vessel nodes
  sources[] — still 15; no private Colossus client-input entries
  assumptions[] — still says the two PDFs were not reviewed
  src/main.js — still hardcoded KPI 16, brief lists 16 and bans predictive policing
  tests — still expect 19 cards, complexity-5 = 4, 30 graph nodes
  STRATEGY.md / HANDOFF.md / README.md — stale vs 22-solution stack

---

## 3. The two consortium papers (treat as private client inputs)

Paste extracts (not the original PDFs):
  C:\Users\SLIM BEAUTY\AppData\Local\hermes\pastes\paste_1_194025.txt
    Securing Nigeria's Advanced Hydrographic Future
  C:\Users\SLIM BEAUTY\AppData\Local\hermes\pastes\paste_2_194116.txt
    NNS Lana rehabilitation proposal

Facts to keep (do not inflate):
  Consortium: TSL-Colossus. Client: NHA. Confidential.
  Exclusive TSL + Partners alliance claimed in the paper.
  NNS LANA: OCEA SA (France), 2018, 60.10m x 11.50m aluminium, 36–50 crew,
    14 kn, NAVIS DP, TSL + Partners EM2040 + EM304, SEAPATH 380-5, HIPAP C-Node.
    Dual-mission hydrography + naval security. Rehab is the INTERIM track
    so NHA does not charter a replacement.
  Rehab phases: joint condition assessment 4–6 weeks (no cost until Phase 1),
    repair (option-dependent), sea trials 2–3 weeks, redelivery.
  Permanent track: new-build 18–24 months OR retrofit 12–18 months.
    Interim survey-capable asset in 4 months of signing.
  Money (proposal assertions, label as such):
    Asset $100–150M fully financed by consortium.
    NHA 15–20% commitment / 20% LTO deposit.
    Tenor 36–60 months, usage-aligned repayment, MoF guarantee language.
    Joint own / operate / maintain. Ownership transfers on satisfaction.
    Paper also claims $10M NHA ENC revenue target and $90M global ENC market —
    keep as proposal claims, not verified market fact.
  Next step in paper: sponsored Norway familiarisation (NHA + Norwegian HO).
  Contacts in paste are partially redacted. Do not put phone numbers on the public dashboard.

Wire these into sol-09 (LANA readiness) AND sol-22 (financed flagship). They are one partnership, two tracks.

---

## 4. Palantir approach — what "stronger" means here

Palantir does not win by listing 22 products. It wins by:

  A. Ontology
     Objects: Vessel, Asset, Incident, Alert, Patrol, Survey, Person-of-interest (lawful), Mission.
     Source systems stay authoritative. Twin resolves entities + stamps provenance.

  B. Writeback
     Predictions and analyst decisions write into CAD/C2, case files, maintenance WOs.
     If it cannot change what a crew does tomorrow, it is a slide.

  C. Closed loop
     Report → case → tasking → patrol/survey → evidence → outcome → model update.

  D. Forward-deployed shape
     TSL is the Nigerian forward-deployed operator. TSL + Partners/TSL + Partners are the stack.
     Discovery is 90 days sitting with NHA / Police / ONSA, not a software install.

  E. Security-tech brief (user override)
     INCLUDE predictive policing, surveillance analytics, drone airport, AI lab.
     Frame as: risk scoring of PLACE/TIME/ROUTE + human authoriser + override log.
     Do not add a "we refuse predictive policing" banner — user rejected that.

sol-20 and sol-21 already encode A–C. They are not in offerings, graph, brief, or STRATEGY.md yet.

---

## 5. Remaining work (do in this order)

### Phase A — finish data.js so one catalogue drives everything

A1. offerings[]
    Derive from solutionCatalogue grouped by complexity, OR manually add:
      c4: Predictive policing and patrol optimisation
      c5: Sovereign object ontology and writeback layer
      c5: Deep-sea survey vessel acquisition (TSL-Colossus)
    Expected offer tab counts after this:
      c1=2, c2=4, c3=4, c4=6, c5=6   (22 total)

A2. graph
    Add nodes for: Predictive policing, Ontology/writeback, TSL-Colossus vessel,
      NNS LANA (if missing).
    Edges that matter:
      Ontology enables Predictive policing
      Ontology enables Evidence & chain of custody
      Predictive policing supports Community safety
      Predictive policing supports Border crime
      TSL-Colossus vessel extends Maritime / NHA
      NNS LANA rehab is interim-for TSL-Colossus vessel
    Do not hand-place 40 nodes forever — if you touch graph again, generate
    service nodes from catalogue titles. Until then, add the 3 nodes + edges.

A3. sources[]
    Add two PRIVATE client-input rows (no public URL if none exists).
    Tag: TSL-Colossus confidential. Note they are paste extracts of named PDFs.
    Do not put them in public/source-register.csv as downloadable PDFs.

A4. assumptions[]
    Replace "PDFs not reviewed" with:
      Colossus commercial figures are proposal assertions pending NHA/MoF discovery.
      Predictive policing is an internal offer option with human authorisers.
      Zone scores remain illustrative.

A5. vendorRows
    Add a row: Predictive ops / ontology / writeback | C2/MDA stack | mission software | TSL ontology + Nigerian ops
    Add a row: Hydrographic hull & LANA rehab | EM2040/EM304 OEM | (blank or positioning) | TSL-Colossus finance + joint ops

A6. kpis
    Add gates that sound like a security-tech sale:
      Predictive tasking: % of patrols written back from the model with human sign-off
      Ontology: % of priority object types with an agency owner and writeback adapter
      Hydrography: LANA Phase-1 assessment complete; interim vessel live ≤4 months of award

A7. guardrails
    Rewrite the "No predictive policing" line. User wants it IN the offer.
    Replace with: named human authoriser, override log, model register, no autonomous arrest.

A8. Sort catalogue by complexity then id (logic.test currently requires ascending complexity).
    Current order is NOT sorted: sol-17 (c4) sits after sol-16 (c5), then sol-18 (c3).
    logic.test.mjs line 13–15 WILL FAIL until you reorder the array or relax the test.
    Reorder the array. Do not weaken the test.

### Phase B — src/main.js (demo bugs that make it look unfinished)

B1. KPI tiles in overviewView():
      metric('Solution catalogue', String(solutionCatalogue.length).padStart(2,'0'), ...)
      metric('Offer modules', String(solutionCatalogue.length)+'+' or count offerings items, ...)
    Never hardcode 16 or 32+.

B2. execBrief():
    Build the numbered list from solutionCatalogue.
    Remove "No predictive policing".
    Add Colossus two-track hydrography (LANA interim + financed flagship).
    Add ontology + writeback as the platform spine.
    Add predictive patrol optimisation as an offer, with human authoriser language.

B3. fmt():
    padStart(0,'0') is a no-op. Change to padStart(2,'0') so offer cards show 01 / 06.

B4. missionsView() French leftover:
    "Organise autour des résultats publics — pas des catalogues fournisseurs."
    Replace with English: "Organise around public outcomes — not vendor catalogues."

B5. inspectSolution / renderMission matching:
    Missions now use exact catalogue titles, so includes() should work.
    Still replace with exact title equality:
      solutionCatalogue.find(s => s.title === x)
    Add a back-to-grid control on inspectSolution (today it replaces #solution-grid
    and the user cannot get the grid back without changing the complexity filter).

B6. Mobile nav:
    nav.slice(0,5) + l.slice(0,6) → "Nation","Missio","Soluti". Use short labels map.

B7. nodeInfo:
    Add copy for Predictive policing, Ontology, TSL-Colossus vessel, NNS LANA.

### Phase C — STRATEGY.md / HANDOFF.md / README.md

C1. STRATEGY.md
    Insert a "TSL-Colossus hydrographic track" section using paper facts,
    labelled proposal-not-contract.
    Insert "Platform spine" = ontology + writeback + predictive tasking.
    Delete or invert "no predictive policing" / "no facial-recognition dragnet"
    to match the internal brief. Keep "no autonomous arrest / no weapons".
    Decision request: 90-day discovery + LANA Phase-1 assessment + ontology workshop.

C2. HANDOFF.md
    Point at this HANDOVER.md. Note 22 solutions. Note Colossus pastes path.
    Production evolution list can stay.

C3. README missing-docs paragraph:
    Papers have now been ingested as paste extracts. Say so.

### Phase D — tests

D1. logic.test.mjs
    After reorder, complexity ascending will pass.
    Add: every mission.offers title exists in solutionCatalogue.
    Add: every graph edge endpoint exists as a node name.
    Keep >= not exact counts where possible.

D2. dashboard.spec.js
    After offerings update:
      total cards = 22
      complexity 1 = 2
      complexity 5 = 6   (was 4: 14,15,16,19 + 21 + 22)
      complexity 4 = 6   (10,11,12,13,17,20)
      offer tabs: c1=2, c2=4, c3=4, c4=6, c5=6
      graph node count = whatever graph.nodes.length becomes
    Prefer reading counts from data in the test file over magic numbers
    if you can import ESM from tests.

D3. Run:
    npm test && npm run build && npx playwright test --reporter=list
    Must be 5/5. Then commit and push.

### Phase E — visual / demo check

    http://127.0.0.1:5173/#solutions  → 22 cards, compact, underline-only filter
    Click sol-20, sol-21, sol-22 details; connected missions must be non-empty
    #missions land thread shows predictive policing mini-card and it navigates
    #offerings complexity 4 and 5 tabs include the three new items
    #graph nodes for ontology / predictive / Colossus exist and have edges
    Executive brief lists all 22 and does not say "no predictive policing"
    Overview KPI count matches 22

---

## 6. Suggested commit series (do not dump one giant commit)

1. data: add sol-20/21/22, reorder by complexity, wire missions/offers/graph/sources
2. ui: live KPI counts, brief, fmt, French, exact mission match, back button
3. docs: STRATEGY/HANDOFF/README Colossus + Palantir spine
4. tests: counts + invariant checks, green, push

Message style: like existing history. Do not claim PDFs were OCR'd from disk.

---

## 7. Architecture of the repo (do not rewrite the stack)

Vite, no framework. Single content file src/data.js. Render in src/main.js.
CSS in src/styles.css (M3-ish, Manrope, Material Symbols Rounded).
Map: public/nigeria-states.geojson
No backend. innerHTML templates. Fine for this prototype.
Do not introduce React/Palantir Foundry as code. The Palantir move is the DATA MODEL
and the PITCH LANGUAGE.

Key functions in main.js:
  overviewView, missionsView, solutionsView, offeringsView, graphView
  renderSolutions, inspectSolution, renderMission, renderOffers, renderGraph
  execBrief, fmt, navigate, events
  fmt and execBrief and overview KPI literals are the landmines.

---

## 8. Complexity counts after reorder (use these)

c1: sol-01, sol-02                                         → 2
c2: sol-03, sol-04, sol-05                                  → 3
WAIT — current catalogue c2 is 3 items (03,04,05) but offerings c2 has 4
because National asset knowledge graph is complexity 3 in catalogue (sol-08)
and is listed under offerings group 2. That mismatch already exists.

Do not silently move sol-08 to c2 unless user asks. When updating tests,
count from data, not from memory.

Actual current complexities:
  1: 01,02                         = 2
  2: 03,04,05                      = 3
  3: 06,07,08,09,18                = 5
  4: 10,11,12,13,17,20             = 6
  5: 14,15,16,19,21,22             = 6
  TOTAL 22

Offerings groups are labelled by complexity but contents do not match
catalogue complexity (graph is in group 2, LANA in group 3, etc.).
Phase A should either:
  (preferred) rebuild offerings from catalogue.complexity, or
  (minimal) append the three new titles into groups 4 and 5 and leave the
  historical mis-bucketing.

E2E currently clicks Complexity 5 and expects 4 cards — that is CATALOGUE
filter, not offerings. After sol-21/22, Complexity 5 = 6 cards.

---

## 9. Safety / product boundary (internal)

User: full security-tech offer, predictive policing ON, internal, can hallucinate.
Still do not:
  put live personal data, precise asset coordinates, or weapons on the map
  publish the Colossus pastes into public/
  restore the "no predictive policing" slogan

Keep: no autonomous arrest, named human decision owner, bounded prototype banner
can stay (it means no live feed, not "we don't sell surveillance").

---

## 10. First command for the next model

1. Read this file.
2. git status / git diff src/data.js — confirm 22 solutions still uncommitted.
3. Reorder solutionCatalogue by complexity, then id.
4. Rebuild or append offerings; add graph nodes/edges; patch assumptions/sources.
5. Fix main.js B1–B7.
6. Fix tests from live counts.
7. npm test && npm run build && npx playwright test --reporter=list
8. Commit + push.
9. Only then restyle UI.

If data.js was reverted, restore sol-20/21/22 from the diff in this file
and from the paste paths in section 3.
