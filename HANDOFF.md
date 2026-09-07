# Handoff — TSL Nigeria National Resilience Twin

## Current state

The project is a Vite-powered, framework-free interactive dashboard. It is intentionally portable: all strategy content is local JavaScript, the state map is local GeoJSON, and there is no backend or credential requirement.

## Product intent

Primary surface: **Monitor**. Secondary surface: **Explore**.

Audience: TSL Logistics executives, Nigerian public-sector decision makers and prospective KONGSBERG/Exail partners.

Core proposition: TSL becomes the Nigerian sovereign integrator and lifecycle operator; KONGSBERG and Exail provide complementary documented technologies; mission-owning public bodies retain statutory authority and source-data ownership.

## Files

- `index.html` — shell, pre-paint theme, fonts and entrypoint.
- `src/main.js` — render functions, navigation, map projection, interactions, graph and exports.
- `src/data.js` — single content source for zones, missions, offerings, partner matrix, roadmap, KPIs, guardrails and evidence register.
- `src/styles.css` — M3-inspired visual system, desktop/mobile/print layouts.
- `public/nigeria-states.geojson` — simplified CC BY 4.0 ADM1 boundary geometry from geoBoundaries/GRID3.
- `public/source-register.csv` — portable evidence register.
- `STRATEGY.md` — full written strategy and executive recommendation.
- `README.md` — run/build guide and safety boundary.
- `tests/logic.test.mjs` — strategic data integrity checks.
- `tests/dashboard.spec.js` — Playwright interaction and responsive checks.

## Fast edits

- Add or change an offering in `src/data.js` under `offerings`.
- Add a source to both `sources` in `src/data.js` and `public/source-register.csv`.
- Change the executive summary in `executiveBrief()` in `src/main.js` and the long form in `STRATEGY.md`.
- Replace illustrative zone indices only after an agreed methodology and approved data source exist.

## Required reconciliation

The following referenced documents were not present in accessible local folders and have **not** been represented as reviewed:

1. `NNS Lana Rehabilitation Proposal - TSL Colossus Consortium.pdf`
2. `Securing_Nigeria's_Advanced_Hydrographic_Future_TSL_Consortium.pdf`

When received:

1. Extract scope, named systems, technical findings, consortium roles, cost assumptions and commitments.
2. Separate verified vessel facts from proposal assertions.
3. Compare proposed rehabilitation work with an OEM-led NNS LANA health/obsolescence assessment.
4. Reconcile duplicates and conflicts into `STRATEGY.md` and `src/data.js`.
5. Add both documents to the source register as private client inputs; do not publish them in `public/` without permission.

## Safety and governance boundary

Do not add live incidents, precise critical-asset coordinates, tactical force locations, personal records, biometric watchlists, inferred criminality or autonomous enforcement. A production version requires mandate, DPIA, legal review, cyber accreditation, data-sharing agreements, records schedules, access recertification, redress and independent oversight.

## Production evolution

A real deployment should replace static content with:

- an API gateway and source registry;
- federated identity and purpose-based access;
- geospatial catalogue and tiles;
- entity/claim graph with provenance, confidence and temporal validity;
- workflow/case referrals rather than indiscriminate data pooling;
- audit, retention, deletion and redress services;
- separate unclassified, sensitive and restricted environments;
- synthetic/demo datasets for training and public presentations.

## Validation commands

```bash
npm install
npm test
npm run build
npm run test:e2e
npm run preview
```
