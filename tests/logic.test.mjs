import assert from 'node:assert/strict';
import {zones,zoneProfiles,missions,offerings,vendorRows,graph,roadmap,kpis,guardrails,sources} from '../src/data.js';

const allStates=Object.values(zones).flat();
assert.equal(allStates.length,37,'36 states plus FCT must be represented');
assert.equal(new Set(allStates).size,37,'state/FCT names must be unique');
assert.deepEqual(Object.keys(zoneProfiles).sort(),Object.keys(zones).sort(),'every zone needs a planning profile');
assert.equal(missions.length,6,'six mission portfolios required');
assert.ok(missions.every(m=>m.offers.length>=6),'each mission requires a robust offer set');
assert.equal(offerings.length,4,'four clean commercial groupings required');
assert.ok(offerings.reduce((n,g)=>n+g.items.length,0)>=28,'offer catalogue should be comprehensive');
assert.ok(vendorRows.length>=6,'partner matrix must cover core capabilities');
assert.ok(graph.nodes.length>=10 && graph.edges.length>=15,'knowledge graph must be substantive');
assert.equal(roadmap.length,5,'roadmap must span discovery to sustainment');
assert.ok(kpis.length>=10 && guardrails.length>=10,'governance and benefits gates required');
assert.ok(sources.length>=10 && sources.every(s=>s.url.startsWith('https://')),'source register must be linked');
console.log(`PASS: ${allStates.length} jurisdictions, ${missions.length} missions, ${offerings.reduce((n,g)=>n+g.items.length,0)} offers, ${sources.length} sources`);
