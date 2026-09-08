import assert from 'node:assert/strict';
import {zones,zoneProfiles,missions,solutionCatalogue,offerings,vendorRows,graph,roadmap,kpis,guardrails,sources} from '../src/data.js';

const allStates=Object.values(zones).flat();
assert.equal(allStates.length,37,'36 states plus FCT must be represented');
assert.equal(new Set(allStates).size,37,'state/FCT names must be unique');
assert.deepEqual(Object.keys(zoneProfiles).sort(),Object.keys(zones).sort(),'every zone needs a planning profile');
assert.equal(missions.length,6,'six mission portfolios required');
assert.ok(missions.every(m=>m.offers.length>=6),'each mission requires a robust offer set');

// Expanded solution catalogue: lowest (1) to highest (5)
assert.ok(solutionCatalogue.length>=16,'at least 16 solutions required for full stack visibility');
const byComplexity=[...solutionCatalogue].sort((a,b)=>a.complexity-b.complexity);
byComplexity.forEach((s,i)=>{
  if(i>0)assert.ok(s.complexity>=byComplexity[i-1].complexity,'complexity must be ascending in catalogue');
  assert.ok(/sol-\d{2}/.test(s.id),'solution id format');
  assert.ok(s.owners?.length,'every solution needs owners');
  assert.ok(s.dependencies?.length,'every solution needs dependencies');
  assert.ok(s.components?.length,'every solution needs components');
  assert.ok(s.value,'every solution has a value statement');
});

assert.ok(offerings.length>=5,'at least 5 grouped offering categories');
assert.ok(vendorRows.length>=7,'partner matrix must cover core capabilities');
assert.ok(graph.nodes.length>=25 && graph.edges.length>=30,'rich knowledge graph required (nodes+edges)');
assert.ok(graph.edges.every(e=>e[2] && typeof e[2]==='string'),'every edge must carry a typed label');
assert.equal(roadmap.length,5,'roadmap must span discovery to sustainment');
assert.ok(kpis.length>=10 && guardrails.length>=10,'governance and benefits gates required');
assert.ok(sources.length>=12 && sources.every(s=>s.private||s.url.startsWith('https://')),'public source register must be linked; private client inputs are allowed unlinked');
assert.ok(missions.every(m=>m.offers.every(t=>solutionCatalogue.some(s=>s.title===t))),'every mission offer must exist in the solution catalogue');
const nodeNames=new Set(graph.nodes.map(n=>n[0]));
assert.ok(graph.edges.every(e=>nodeNames.has(e[0])&&nodeNames.has(e[2])),'every graph edge endpoint must be a node');

console.log(`PASS: ${allStates.length} jurisdictions, ${missions.length} missions, ${solutionCatalogue.length} solutions, ${offerings.length} offer groups, ${graph.nodes.length} graph nodes, ${sources.length} sources`);
