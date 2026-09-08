# Handoff — TSL Nigeria National Resilience Twin

## Current state

The project is a Vite-powered, framework-free interactive dashboard. It is intentionally portable: all strategy content is local JavaScript, the state map is local GeoJSON, and there is no backend or credential requirement.

## Product intent

Primary surface: **Monitor**. Secondary surface: **Explore**.

Audience: TSL Logistics executives, Nigerian public-sector decision makers and prospective KONGSBERG/Exail partners.

Core proposition: TSL becomes the Nigerian sovereign integrator and lifecycle operator; KONGSBERG and Exail provide complementary documented technologies; mission-owning public bodies retain statutory authority and source-data ownership.

## Files

- `index.html` — shell, pre-paint theme, fonts and entrypoint.
- `src/main.js` — render functions, navigation, map projection, interactions, graph, exports. `execBrief()`, `renderSolutions()`, `inspectSolution()` (back-to-catalogue button included).
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

The two referenced TSL-Colossus documents have been ingested as pasted extracts (confidential, not original signed PDFs):

1. `NNS Lana Rehabilitation Proposal - TSL Colossus Consortium.pdf` — interim hydrography track.
2. `Securing_Nigeria's_Advanced_Hydrographic_Future_TSL_Consortium.pdf` — financed flagship track.

Both are now represented in `src/data.js` (sol-22, graph, sources as private client inputs) and `STRATEGY.md`. When originals arrive, verify vessel facts, figures and consortium roles against the extracts; do not publish either document in `public/`.

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
