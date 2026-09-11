import {zones,zoneProfiles,missions,solutionCatalogue,offerings,vendorRows,graph,roadmap,kpis,guardrails,sources,assumptions} from './data.js';

const nav=[
  ['overview','dashboard','National twin','Twin'],['missions','crisis_alert','Mission threads','Missions'],['solutions','inventory_2','Solutions catalogue','Solutions'],['offerings','deployed_code','Offer portfolio','Offers'],['graph','hub','Knowledge graph','Graph'],['roadmap','conversion_path','Roadmap','Roadmap'],['governance','policy','Governance','Governance'],['sources','library_books','Sources','Sources']
];

const state={
  view:location.hash.slice(1)||'overview',
  selectedState:'Nigeria',
  selectedZone:'National',
  mapMode:'readiness',
  solution:null,
  offerGroup:0
};

const $=s=>document.querySelector(s); const $$=s=>[...document.querySelectorAll(s)];
const icon=n=>`<span class="material-symbols-rounded" aria-hidden="true">${n}</span>`;
const zoneFor=name=>Object.entries(zones).find(([,states])=>states.includes(name))?.[0];
const fmt=n=>String(n).padStart(2,'0');

function shell(){
  $('#app').innerHTML=`<div class="app-shell">
    <aside class="sidebar" id="sidebar" aria-label="Primary navigation">
      <div class="brand"><div class="brand-mark">TSL</div><div class="brand-text"><strong>National Resilience Twin</strong><small>Strategy foundation • v1</small></div></div>
      <div class="nav-label">Strategy workspace</div>
      <nav class="nav-list">${nav.map(([id,ic,l])=>`<button class="nav-item" data-view="${id}" aria-label="${l}">${icon(ic)}<span>${l}</span></button>`).join('')}</nav>
      <div class="sidebar-note"><strong>${icon('verified_user')}Bounded prototype</strong>No live operations, personal data, target locations or autonomous enforcement.</div>
    </aside>
    <div class="content-shell">
      <header class="topbar"><button class="icon-button mobile-menu" id="menu" aria-label="Open navigation">${icon('menu')}</button>
      <div class="page-title"><strong id="top-title">National twin</strong><span>Prepared by TSL Logistics</span></div>
      <div class="top-actions"><span class="status-chip"><i class="status-dot"></i>Illustrative strategic model</span>
        <button class="icon-button" id="brief" aria-label="Open executive brief">${icon('description')}</button>
        <button class="icon-button" id="theme" aria-label="Toggle colour theme">${icon('contrast')}</button></div></header>
      <main id="main" tabindex="-1">${views()}</main>
    </div>
  </div>
  <nav class="mobile-bottom" aria-label="Mobile navigation">${nav.slice(0,5).map(([id,ic,l,s])=>`<button data-view="${id}">${icon(ic)}<span>${s||l.slice(0,6)}</span></button>`).join('')}</nav>
  <div class="dialog" id="brief-dialog" role="dialog" aria-modal="true" aria-hidden="true"><div class="dialog-head"><div><strong>Executive brief</strong><div class="org">TSL Logistics proposal foundation</div></div><button class="icon-button" id="close-brief" aria-label="Close">${icon('close')}</button></div><div class="dialog-body"><textarea id="brief-text" readonly>${execBrief()}</textarea><div style="display:flex;gap:8px;margin-top:12px"><button class="action-button" id="copy-brief">${icon('content_copy')}Copy brief</button><button class="action-button secondary" onclick="window.print()">${icon('print')}Print / PDF</button></div></div></div>
  <div class="toast" role="status" aria-live="polite" id="toast"></div>`;
}

function views(){return `${overviewView()}${missionsView()}${solutionsView()}${offeringsView()}${graphView()}${roadmapView()}${governanceView()}${sourcesView()}`}

function headFn(eye,title,lede,extra){
  return `<div class="section-head"><div><div class="eyebrow">${eye}</div><h1>${title}</h1><p class="lede">${lede}</p></div>`+
  (extra||`<div class="disclosure">${icon('info')}Illustrative, national-level strategy. Validate every score and integration during formal discovery.</div></div>`);
}

function metric(label,value,sub,pct){
  return `<article class="metric"><div class="metric-top"><span>${label}</span>${icon('trending_up')}</div><div class="metric-value">${value}</div><small>${sub}</small><div class="progress"><span style="width:${pct}%"></span></div></article>`;
}

function overviewView(){
  return `<section class="view" id="view-overview" data-title="National twin">`+
  headFn('TSL Logistics strategic intelligence','One national picture. Multiple accountable owners.','A high-level interactive model joining security missions, critical services, hydrography, maritime awareness, infrastructure integrity and predictive tasking—with sovereign data control and human-authorised action.')+
  `<div class="grid kpi-grid">
    ${metric('Mission portfolios','06','prioritised threads',82)}
        ${metric('Solution catalogue',fmt(solutionCatalogue.length),'lowest to highest complexity',68)}
        ${metric('Offer modules',fmt(offerings.reduce((a,g)=>a+g.items.length,0))+'+','grouped for procurement',74)}
    ${metric('Pilot horizon','90 days','to approved scope',58)}
    ${metric('Design posture','Federated','sovereign by default',91)}
  </div>
  <div class="grid workspace">
    <article class="panel"><div class="panel-head"><div class="panel-title"><strong>Nigeria resilience twin</strong><span>37 state/FCT boundaries • aggregated zonal profiles</span></div>
      <div class="segmented" aria-label="Map display"><button data-mapmode="readiness" class="active">Readiness</button><button data-mapmode="mission">Mission</button></div></div>
      <div class="map-wrap"><div id="nigeria-map" role="img" aria-label="Interactive map of Nigeria states coloured by illustrative zonal readiness priority"></div>
      <div class="map-legend"><span>Lower</span><i class="legend-swatch" style="background:#2b6357"></i><i class="legend-swatch" style="background:#6d8e6e"></i><i class="legend-swatch" style="background:#96763e"></i><i class="legend-swatch" style="background:#a2634d"></i><i class="legend-swatch" style="background:#914a50"></i><span>Higher</span></div></div></article>
    <aside class="panel inspector"><div class="panel-head"><div class="panel-title"><strong id="inspector-title">Nigeria</strong><span id="inspector-zone">National strategic baseline</span></div>${icon('travel_explore')}</div><div class="inspector-body" id="inspector-body"></div></aside>
  </div>
  <div class="grid activity-strip">
    <article class="panel activity"><div class="panel-title"><strong>Indicative delivery pulse</strong><span>Illustrative workstream load—not incident volume</span></div>
      <div class="activity-bars">${[36,42,58,52,64,74,52,72,68,76,72,81].map(h=>`<i class="activity-bar" style="height:${h}%"></i>`).join('')}</div></article>
    <article class="panel activity"><div class="panel-title"><strong>Architecture at a glance</strong><span>Full stack from mission to capability to integrator</span></div>
      <div class="legend-list"><div><strong>Mission owners</strong><span>Retain statutory authority and source data</span></div>
      <div><strong>TSL Logistics</strong><span>Integration, local operations and accountability</span></div>
      <div><strong>TSL and partners</strong><span>Complementary maritime, hydrographic and sensing technologies</span></div>
      <div><strong>Platforms</strong><span>Federated data and decision support, mission-owned</span></div></div></article>
  </div>
</section>`;
}

function missionsView(){
  return `<section class="view" id="view-missions" data-title="Mission threads">`+
  headFn('Outcome architecture','Organise around public outcomes — not vendor catalogues.','Six threads connect Nigeria\u2019s documented priorities to clean, procurable service packages.')+
  `<div class="grid mission-grid">`+
  missions.map(m=>`<button class="mission-card" data-mission="${m.id}" style="--accent:${m.color}"><span class="mission-icon">${icon(m.icon)}</span><h3>${m.title}</h3><p>${m.outcome}</p>
    <div class="meta-row"><span class="tag">${m.horizon}</span><span class="tag">${m.vendors.join(' + ')}</span></div>
    <span class="arrow">Inspect thread ${icon('arrow_forward')}</span></button>`).join('')+
  `</div><div class="mission-detail" id="mission-detail"></div></section>`;
}

function solutionsView(){
  return `<section class="view" id="view-solutions" data-title="Solutions catalogue">`+
  headFn('The full offer stack','Lowest to highest complexity — what is actually possible.','From protected public reporting to a federated national decision platform, every solution links problems, dependencies and value.')+
  `<div class="segmented" aria-label="Complexity filter"><button data-cx="all" class="active">All complexity</button>
    <button data-cx="1">Complexity 1</button><button data-cx="2">Complexity 2</button><button data-cx="3">Complexity 3</button>
    <button data-cx="4">Complexity 4</button><button data-cx="5">Complexity 5</button></div>
  <div class="grid solution-grid" id="solution-grid"></div>
</section>`;
}

function offeringsView(){
  return `<section class="view" id="view-offerings" data-title="Offer portfolio">`+
  headFn('Commercial structure','A modular stack TSL can lead, combine and sustain.','The portfolio separates infrastructure, advisory, technology and managed services so government can procure in phases while keeping interoperability and exit rights.')+
  `<div class="offering-tabs" role="tablist">`+
  offerings.map((g,i)=>`<button class="tab-button ${i===0?'active':''}" data-offer="${i}" role="tab" aria-selected="${i===0}">${icon(g.icon)}${g.group}</button>`).join('')+
  `</div><div class="grid offer-grid" id="offer-grid"></div>
  <div class="section-head" style="margin-top:34px"><div><div class="eyebrow">Partner fit</div><h2>One integrator, two complementary technology anchors</h2><p class="lede">TSL owns Nigerian delivery, asset operations and lifecycle accountability; partners anchor integrated sensing and maritime systems and add advanced robotics, navigation and remote hydrographic survey.</p></div></div>
  <div class="matrix-wrap"><table><thead><tr><th>Capability</th><th><span class="vendor-mark">Partner A</span></th><th><span class="vendor-mark">Partner B</span></th><th><span class="vendor-mark">TSL Logistics</span></th></tr></thead><tbody>`+
  vendorRows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')+
  `</tbody></table></div></section>`;
}

function graphView(){
  return `<section class="view" id="view-graph" data-title="Knowledge graph">`+
  headFn('Sense-making layer','Relationships matter more than another wall of feeds.','The graph connects mission owners, services, vendors, platforms and outcomes. Click any node to inspect its connections.')+
  `<div class="graph-shell"><div class="graph-panel" id="graph-host"></div><aside class="graph-inspector" id="graph-inspector"><div class="eyebrow">Selected node</div><h2>Select a node</h2><p class="lede">Click any node on the knowledge graph to see its relationships, role and connected missions.</p></aside></div></section>`;
}

function roadmapView(){
  return `<section class="view" id="view-roadmap" data-title="Roadmap">`+
  headFn('Execution path','Prove value in 90 days. Scale only what earns trust.','A phased path avoids an oversized national procurement, strengthens existing programmes and makes local capability a contractual outcome—not a future promise.')+
  `<div class="timeline">`+
  roadmap.map(p=>`<article class="phase"><div class="phase-index">${p.phase}</div><div class="phase-time">${p.time}</div>
    <div><h3>${p.title}</h3><p>${p.result}</p></div>
    <ul>${p.actions.map(a=>`<li>${a}</li>`).join('')}</ul></article>`).join('')+
  `</div></section>`;
}

function governanceView(){
  return `<section class="view" id="view-governance" data-title="Governance">`+
  headFn('Trust architecture','Capability without visible constraint is not sustainable.','The twin is designed for public safety, service continuity and accountable coordination. These controls must be specified, tested and funded alongside every component.')+
  `<div class="grid gov-grid">`+
  guardrails.map((g,i)=>`<article class="guardrail"><div class="guardrail-index">${fmt(i+1)}</div><div><h3>${g[0]}</h3><p>${g[1]}</p></div></article>`).join('')+
  `</div><div class="section-head" style="margin-top:36px"><div><div class="eyebrow">Board-level measures</div><h2>Measures and gates</h2><p class="lede">Targets are proposed programme gates. Discovery establishes baselines and owners before they become contractual.</p></div></div>
  <div class="matrix-wrap kpi-table"><table><thead><tr><th>Domain</th><th>Measure</th><th>Proposed gate</th></tr></thead><tbody>`+
  kpis.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')+
  `</tbody></table></div></section>`;
}

function sourcesView(){
  return `<section class="view" id="view-sources" data-title="Sources">`+
  headFn('Evidence register','Documented capabilities. Explicit proposals. Visible assumptions.','Links open the originating public source; dates and availability should be revalidated during procurement.',
  `<div class="source-tools"><button class="action-button secondary" id="export-sources">${icon('download')}Export register</button><input class="search" id="source-search" type="search" placeholder="Filter sources…" aria-label="Filter source register"></div></div>`)+
  `<div class="source-list" id="source-list"></div>
  <div class="assumption-box"><strong>Assumptions and boundaries</strong><ul>`+
  assumptions.map(a=>`<li>${a}</li>`).join('')+
  `</ul></div></section>`;
}


const nodeInfo={
  "TSL Logistics":['Prime integrator','Owns Nigerian service design, systems integration, HSSEQ, field logistics, lifecycle support, local workforce development, service levels and benefits reporting.'],
  "TSL + Partners":['Technology anchor','Documented strengths in maritime surveillance, cView/Foresight, AIS, hydrography (EM multibeam, HUGIN, Sounder), sonar, subsea inspection and lifecycle support.'],
  "TSL + Partners":['Advanced technology anchor','Documented strengths in DriX supervised autonomy, hydrography, inertial navigation, subsea positioning, sonar and remote survey operations.'],
  "National Resilience Twin":['Federated decision platform','A knowledge-and-workflow layer over authorised source systems; exposes provenance, confidence and accountable ownership across all mission threads.'],
  "Knowledge & Scenario Graph":['Cross-mission model','Links missions, services, assets, dependencies and outcomes with provenance so planners can rehearse scenarios without exposing personal data.'],
  "Federated Security Data Platform":['Sovereign data layer','Zero-trust platform letting agencies collaborate without ceding source authority or personal-data control.'],
  "Predictive policing & patrol optimisation":['Predictive tasking engine','Scores place, time and route from incident history and live feeds, solves patrol schedules and writes tasking back to agency C2. Named officials authorise every dispatch.'],
  "Sovereign ontology & writeback":['Platform spine','Foundry-class object model: vessel, asset, incident, alert, patrol, survey. Resolves entities, stamps provenance, and writes decisions back into case, C2 and maintenance systems.'],
  "TSL-Colossus deep-sea vessel":['Financed flagship','UNCLOS/CLCS-capable survey vessel for NHA: $100\u2013150M asset, 15\u201320% NHA commitment, LTO 36\u201360 months, delivery 12\u201324 months. Joint own / operate / maintain.'],
  "NNS LANA rehab track":['Interim capability','OCEA 2018, 60.1m, EM2040/EM304, SEAPATH, HIPAP. Joint condition assessment 4\u20136 weeks before any repair cost; survey-ready inside 4 months.']
};
function nodeColor(kind){return {"integrator":"#68e0c3","platform":"#7cb7ff","vendor":"#b8a1ff","mission":"#ffd166","service":"#ff8a80","agency":"#ffad66"}[kind]||"#51645f"}

function execBrief(){
  const list=solutionCatalogue.map((s,i)=>(i+1)+". "+s.title).join("\n");
  const colossus=solutionCatalogue.find(s=>s.id==="sol-22");
  const ontology=solutionCatalogue.find(s=>s.id==="sol-21");
  const predictive=solutionCatalogue.find(s=>s.id==="sol-20");
  return [
    "TSL LOGISTICS - NIGERIA NATIONAL RESILIENCE TWIN",
    "High-level strategy foundation for TSL + Partners opportunity architecture",
    "",
    "PROPOSITION",
    "Position TSL Logistics as Nigeria's sovereign integrator and lifecycle operator for a full security-technology stack. Partners provide integrated maritime sensing, hydrography, autonomous underwater survey and decision support on one side and supervised autonomy, inertial navigation, subsea positioning and remote hydrographic operations on the other. TSL owns the Nigerian layer and the TSL-Colossus vehicle finances sovereign survey capability.",
    "",
    "PLATFORM SPINE",
    ontology.summary,
    predictive.summary,
    "",
    "WHAT IS POSSIBLE: "+solutionCatalogue.length+" SOLUTIONS LOWEST TO HIGHEST COMPLEXITY",
    list,
    "",
    "HYDROGRAPHY TRACK (TSL-COLOSSUS)",
    "Two tracks, one partnership. Track 1: NNS LANA rehabilitation (OCEA 2018, EM2040/EM304, SEAPATH, HIPAP) as the interim survey asset - joint condition assessment in 4-6 weeks, no repair cost until assessed. Track 2: financed UNCLOS/CLCS-capable flagship, $100-150M asset with 15-20% NHA commitment, deliverable in 12-24 months, interim capability within 4 months of signing.",
    "",
    "FIRST TWO LIGHTHOUSE PILOTS",
    "1. Bounded maritime/hydrographic data-fusion pilot including NNS LANA technical readiness assessment and an unmanned survey demonstration.",
    "2. Critical-infrastructure integrity twin on a consenting TSL-managed asset joining inspection, maintenance, cyber-physical risk, inventory and recovery data.",
    "",
    "COMMERCIAL MODEL",
    "Paid discovery + two fixed-outcome pilots. Then modular managed services with uptime, data-quality, throughput, asset-readiness, predictive-task authorisation, local-capacity and safeguards KPIs. Open interfaces, Nigeria-controlled keys, source-system authority and exit rights.",
    "",
    "NON-NEGOTIABLES",
    "No live or personal data on this prototype. Models score place, time and route; named officials authorise every patrol or enforcement tasking and every override is logged. No automated arrest or autonomous use of force. Provenance and confidence on every claim; purpose-based access; audit; retention; redress; independent oversight.",
    "",
    "DECISION REQUEST",
    "Approve a 90-day joint discovery: mandate and baseline, LANA Phase-1 assessment, ontology workshop with mission owners, and commercial envelope for the two-track hydrography programme."
  ].join("\n");
}

function complexityColor(c){return ["#2f6a5b","#397463","#96763e","#9a773d","#914a50"][c-1]}
function renderSolutions(cx="all"){
  state.cx=cx;
  const list=cx==="all"?solutionCatalogue:solutionCatalogue.filter(s=>s.complexity===+cx);
  const html=list.map(s=>`
    <article class="solution-card" data-solution="${s.id}" style="--accent:${complexityColor(+s.complexity)}">
      <div class="solution-head"><span class="num">Complexity ${s.complexity}</span><span class="tag">${s.tag}</span></div>
      <div class="solution-icon">${icon(s.icon)}</div>
      <h3>${s.title}</h3>
      <p class="lede">${s.summary}</p>
      <div class="solution-meta">
        <div><strong class="label">Problem solved</strong><ul class="small">${s.what_it_solves.map(x=>'<li>'+x+'</li>').join('')}</ul></div>
        <div><strong class="label">Dependencies</strong><ul class="small">${s.dependencies.map(x=>'<li>'+x+'</li>').join('')}</ul></div>
      </div>
      <div class="meta-row">${s.owners.map(o=>`<span class="tag">${o}</span>`).join('')}${s.vendors.map(v=>`<span class="tag">${v}</span>`).join('')}</div>
    </article>`).join('');
  document.getElementById("solution-grid").innerHTML=html;
  const cxButtons=document.querySelectorAll("[data-cx]");
  cxButtons.forEach(b=>b.classList.toggle("active",b.dataset.cx===cx));
}

function inspectSolution(id){
  const s=solutionCatalogue.find(x=>x.id===id); if(!s)return; state.solution=id;
  const detail=document.getElementById("solution-grid");
  const connected=missions.filter(m=>m.offers.some(o=>o===s.title)).map(m=>m.title);
  const parts=[];
  parts.push('<article class="solution-detail" style="--accent:'+complexityColor(+s.complexity)+'">');
  parts.push('<div class="solution-head"><span class="num">Solution '+s.id+' - Complexity '+s.complexity+'</span><span class="tag">'+s.tag+'</span></div>');
  parts.push('<div class="solution-icon">'+icon(s.icon)+'</div>');
  parts.push('<h2>'+s.title+'</h2>');
  parts.push('<p class="lede">'+s.summary+'</p>');
  parts.push('<div class="grid solution-spec">');
  parts.push('<div><strong class="label">Problem this solves</strong><ul>'+s.what_it_solves.map(x=>'<li>'+x+'</li>').join('')+'</ul></div>');
  parts.push('<div><strong class="label">Required first (dependencies)</strong><ul>'+s.dependencies.map(x=>'<li>'+x+'</li>').join('')+'</ul></div>');
  parts.push('<div><strong class="label">Components & deliverables</strong><ul>'+s.components.map(x=>'<li>'+x+'</li>').join('')+'</ul></div>');
  parts.push('<div><strong class="label">Measurable value</strong><p class="lede">'+s.value+'</p></div>');
  parts.push('</div>');
  parts.push('<div class="meta-row">'+s.owners.map(o=>'<span class="tag">'+o+'</span>').join('')+s.vendors.map(v=>'<span class="tag">'+v+'</span>').join('')+(connected.length?'<span class="tag">Threads: '+connected.length+'</span>':'')+'</div>');
  if(connected.length){
      parts.push('<div class="assumption-box"><strong>Connected mission threads</strong><ul>'+connected.map(t=>'<li>'+t+'</li>').join('')+'</ul></div>');
    }
    parts.push('<div style="margin-top:12px"><button class="action-button secondary" id="back-to-catalogue" type="button">'+icon('arrow_back')+'Back to catalogue</button></div>');
    parts.push('</article>');
    detail.innerHTML=parts.join('');
    const back=document.getElementById("back-to-catalogue");
    if(back)back.addEventListener("click",()=>renderSolutions(state.cx||"all"));
    detail.scrollIntoView({behavior:"smooth",block:"nearest"});
    state.view="solutions";
  }

function colorFor(zone,mode){
  if(mode==="mission"){
    const m={"North West":"#965b58","North East":"#8d4e55","North Central":"#9a773d","South West":"#397463","South East":"#69668c","South South":"#2f7080"};
    return m[zone]||"#51645f";
  }
  const score=zoneProfiles[zone]?.score||55;
  return score>=80?"#914a50":score>=75?"#a2634d":score>=65?"#96763e":score>=60?"#397463":"#2f6a5b";
}
function renderMap(){
  const root=document.getElementById("nigeria-map"); if(!root||root.dataset.ready)return;
  root.innerHTML='<div class="disclosure">Loading local boundary geometry...</div>';
  fetch("/nigeria-states.geojson").then(r=>r.json()).then(geo=>{
    const coords=[]; const walk=a=>{if(typeof a[0]==="number")coords.push(a);else a.forEach(walk)};
    geo.features.forEach(f=>walk(f.geometry.coordinates));
    const minX=Math.min(...coords.map(c=>c[0])),maxX=Math.max(...coords.map(c=>c[0]));
    const minY=Math.min(...coords.map(c=>c[1])),maxY=Math.max(...coords.map(c=>c[1]));
    const W=760,H=610,pad=28;
    const project=([x,y])=>[pad+(x-minX)/(maxX-minX)*(W-pad*2),H-pad-(y-minY)/(maxY-minY)*(H-pad*2)];
    function ringToPath(r){return "M"+r.map(project).map(p=>p.join(",")).join("L")+"Z"}
    function pathGeom(g){
      if(g.type==="Polygon")return g.coordinates.map(ringToPath).join(" ");
      return g.coordinates.flatMap(poly=>poly.map(ringToPath)).join(" ");
    }
    let html='<svg viewBox="0 0 '+W+' '+H+'" width="100%" height="100%" aria-labelledby="map-title"><title id="map-title">Nigeria state boundaries by zonal planning profile</title>';
    geo.features.forEach(f=>{
      const n=f.properties.shapeName,z=zoneFor(n);
      html+='<path class="state" tabindex="0" role="button" aria-label="'+n+' '+z+'" data-state="'+n+'" data-zone="'+z+'" d="'+pathGeom(f.geometry)+'" fill="'+colorFor(z,state.mapMode)+'"><title>'+n+' '+z+'</title></path>';
    });
    html+="</svg>";
    root.innerHTML=html;
    root.dataset.ready="1";
    document.querySelectorAll(".state").forEach(el=>{
      el.addEventListener("click",()=>selectMapState(el.dataset.state,el.dataset.zone));
      el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();selectMapState(el.dataset.state,el.dataset.zone)}});
    });
    selectMapState("Nigeria","National");
  }).catch(()=>root.innerHTML='<div class="disclosure">Boundary file unavailable. The strategy remains accessible in the other views.</div>');
}
function selectMapState(name,zone){
  state.selectedState=name;state.selectedZone=zone;
  document.querySelectorAll(".state").forEach(s=>s.classList.toggle("selected",s.dataset.state===name));
  const p=zone==="National"?{
    score:71,confidence:"Medium",posture:"Federated resilience",
    focus:["Protect people and territory","Secure prosperity and critical services","Strengthen accountable coordination"],
    summary:"A composite planning baseline across six public-outcome missions. Not a live threat level or operational assessment.",
    priority:"Fund discovery, two lighthouse pilots, sovereign data governance and Nigerian lifecycle capacity before national scale."
  }:zoneProfiles[zone];
  document.getElementById("inspector-title").textContent=name;
  document.getElementById("inspector-zone").textContent=zone==="National"?"National strategic baseline":zone;
  const focusHtml=p.focus.map(x=>"<li>"+x+"</li>").join("");
  const body='<div class="risk-score"><div><div class="label">Illustrative priority index</div><div class="score-number">'+p.score+'</div></div><span class="tag">Confidence: '+p.confidence+'</span></div>'+
    '<div><div class="label">Planning posture</div><h3>'+p.posture+'</h3><p>'+p.summary+'</p></div>'+
    '<div><div class="label">Mission emphasis</div><ul class="focus-list">'+focusHtml+'</ul></div>'+
    '<div class="inspector-callout"><strong>TSL priority move</strong>'+p.priority+'</div>'+
    '<div class="disclosure">'+icon("lock")+'Aggregated planning content only. No live incidents, precise assets or tactical indicators.</div>';
  document.getElementById("inspector-body").innerHTML=body;
}
function updateMapColors(){
  state.mapMode=this.dataset.mapmode;
  document.querySelectorAll("[data-mapmode]").forEach(b=>b.classList.toggle("active",b===this));
  document.querySelectorAll(".state").forEach(s=>s.setAttribute("fill",colorFor(s.dataset.zone,state.mapMode)));
}

function renderOffers(i=0){
  state.offerGroup=+i;const g=offerings[i];
  const html=g.items.map((x,j)=>'<article class="offer-item"><span class="num">'+fmt(j+1)+' / '+fmt(g.items.length)+'</span><h3>'+x[0]+'</h3><p>'+x[1]+'</p></article>').join("");
  document.getElementById("offer-grid").innerHTML=html;
  document.querySelectorAll("[data-offer]").forEach((b,j)=>{b.classList.toggle("active",j===+i);b.setAttribute("aria-selected",j===+i)});
}

function renderMission(id){
  const m=missions.find(x=>x.id===id); if(!m)return; state.mission=id;
  const detail=document.getElementById("mission-detail");detail.className="mission-detail open";
  const cards=m.offers.map(x=>{
    const match=solutionCatalogue.find(item=>item.title===x);
    const sid=match?match.id:"";
    const sub=match?"Complexity "+match.complexity:"See catalogue";
    const disabled=match?"":" aria-disabled='true'";
    return '<button class="solution-card mini" data-solution="'+sid+'"'+disabled+'><h3>'+x+'</h3><small>'+sub+'</small></button>';
  }).join("");
  const html='<div><div class="eyebrow">'+m.lead+'</div><h2>'+m.title+'</h2>'+
    '<div class="label">Problem to solve</div><p class="lede">'+m.problem+'</p>'+
    '<div class="label">Target outcome</div><p class="lede">'+m.outcome+'</p></div>'+
    '<div><div class="label">Connected solutions</div><div class="solution-grid">'+cards+'</div></div>'+
    '<div class="meta-row">'+m.vendors.map(v=>'<span class="tag">'+v+'</span>').join('')+'<span class="tag">'+m.horizon+'</span></div>';
  detail.innerHTML=html;
  detail.scrollIntoView({behavior:"smooth",block:"nearest"});
}

function renderGraph(){
  const host=document.getElementById("graph-host");if(!host||host.dataset.ready)return;host.innerHTML="";
  // Build name-to-index lookup for edges that reference nodes by name
  const nodeIdx={};
  graph.nodes.forEach((n,i)=>nodeIdx[n[0]]=i);
  let svg='<svg viewBox="0 0 1000 660" width="100%" height="650" aria-labelledby="gtitle" class="graph">'+
    '<title id="gtitle">Knowledge graph linking mission owners, vendors, platforms, services and outcomes</title>';
  // edges (edges use [sourceName, label, targetName])
  graph.edges.forEach(([src,label,dst])=>{
    const a=nodeIdx[src],b=nodeIdx[dst];
    if(a===undefined||b===undefined)return;
    const na=graph.nodes[a],nb=graph.nodes[b];
    const mx=(na[2]+nb[2])/2,my=(na[3]+nb[3])/2;
    svg+='<line class="edge" x1="'+na[2]+'" y1="'+na[3]+'" x2="'+nb[2]+'" y2="'+nb[3]+'"></line>';
    svg+='<text class="edge-label" x="'+Math.round(mx+6)+'" y="'+Math.round(my-6)+'">'+label+'</text>';
  });
  // nodes
  graph.nodes.forEach((n,i)=>{
    const r=n[1]==="integrator"||n[1]==="platform"||n[1]==="graph"?26:20;
    svg+='<g class="node" tabindex="0" role="button" aria-label="'+n[0]+'" data-node="'+i+'" transform="translate('+n[2]+','+n[3]+')">';
    svg+='<circle r="'+r+'" fill="'+nodeColor(n[1])+'" stroke="var(--md-sys-color-surface)" stroke-width="4"></circle>';
    svg+='<text text-anchor="middle" y="38" font-family="var(--font)" font-size="10" font-weight="700">'+n[0]+'</text>';
    svg+='</g>';
  });
  svg+='</svg>';
  host.innerHTML=svg;
  host.dataset.ready="1";
  // attach event listeners
  $$('.node').forEach((g,i)=>{
    g.addEventListener("click",()=>selectGraphNode(i));
    g.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();selectGraphNode(i)}});
  });
  selectGraphNode(0);
}
function selectGraphNode(i){
  document.querySelectorAll(".node").forEach(n=>n.classList.toggle("active",+n.dataset.node===i));
  const n=graph.nodes[i];const name=n[0];const info=nodeInfo[name];
  const header=info?'<div class="eyebrow">'+info[0]+'</div><h2>'+name+'</h2><p class="lede">'+info[1]+'</p>':'<div class="eyebrow">'+n[1]+'</div><h2>'+name+'</h2><p class="lede">A bounded public-service thread connected through governed data, workflow and measurable readiness.</p>';
  const connected=graph.edges.filter(e=>e[0]===name||e[2]===name).map(e=>{
    const other=e[0]===name?e[2]:e[0];
    return '<li><strong>'+e[1]+'</strong> -> '+other+'</li>';
  }).join("");
  const count=graph.edges.filter(e=>e[0]===name||e[2]===name).length;
  document.getElementById("graph-inspector").innerHTML=header+
    '<div class="assumption-box"><strong>Connected relationships ('+count+')</strong><ul>'+(connected||'<li>No direct edges</li>')+'</ul></div>'+
    '<div class="disclosure">'+icon("lock")+'Edge labels describe integration type, not tactical detail.</div>';
}

function renderSources(q=""){
  const low=q.toLowerCase();
  const filtered=sources.filter(s=>Object.values(s).join(" ").toLowerCase().includes(low));
  const html=filtered.map(s=>s.private
    ?'<div class="source-card" aria-disabled="true"><span class="tag">'+s.tag+'</span><div><strong>'+s.title+'</strong><span class="org">'+s.org+'</span></div><p>'+s.note+'</p><span class="open-icon">'+icon("lock")+'</span></div>'
    :'<a class="source-card" href="'+s.url+'" target="_blank" rel="noopener"><span class="tag">'+s.tag+'</span><div><strong>'+s.title+'</strong><span class="org">'+s.org+'</span></div><p>'+s.note+'</p><span class="open-icon">'+icon("open_in_new")+'</span></a>').join("")||'<div class="disclosure">No source matches that filter.</div>';
  document.getElementById("source-list").innerHTML=html;
}
function exportSources(){
  const rows=[["Tag","Title","Organisation","URL","Relevance"],...sources.filter(s=>!s.private).map(s=>[s.tag,s.title,s.org,s.url,s.note])];
  const csv=rows.map(r=>r.map(v=>'"'+String(v).replaceAll('"','""')+'"').join(",")).join("\n");
  const a=document.createElement("a");
  a.href=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));
  a.download="TSL-security-strategy-source-register.csv";a.click();URL.revokeObjectURL(a.href);
  toast("Source register exported");
}

function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1800)}
function theme(){const next=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=next;localStorage.setItem("tsl-theme",next);toast(next[0].toUpperCase()+next.slice(1)+" theme")}

function navigate(view){
  if(!nav.some(n=>n[0]===view))view="overview"; state.view=view; location.hash=view;
  document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id==="view-"+view));
  document.querySelectorAll("[data-view]").forEach(b=>{const active=b.dataset.view===view;b.classList.toggle("active",active);if(b.classList.contains("nav-item"))b.setAttribute("aria-current",active?"page":"false")});
  const label=nav.find(n=>n[0]===view)?.[2]||"National twin";
  document.getElementById("top-title").textContent=label;
  document.getElementById("sidebar").classList.remove("open");
  if(view==="overview")renderMap(); if(view==="solutions")renderSolutions(); if(view==="graph")renderGraph();
  window.scrollTo({top:0,behavior:"smooth"});
}

function events(){
  document.addEventListener("click",e=>{
    const v=e.target.closest("[data-view]");if(v)navigate(v.dataset.view);
    const o=e.target.closest("[data-offer]");if(o)renderOffers(o.dataset.offer);
    const m=e.target.closest("[data-mission]");if(m)renderMission(m.dataset.mission);
    const s=e.target.closest("[data-solution]");if(s){
      if(s.dataset.solution){navigate("solutions");inspectSolution(s.dataset.solution)}else{e.preventDefault()}
    }
    const c=e.target.closest("[data-cx]");if(c)renderSolutions(c.dataset.cx);
    const mm=e.target.closest("[data-mapmode]");if(mm)updateMapColors.call(mm);
    const n=e.target.closest("[data-node]");if(n)selectGraphNode(+n.dataset.node);
  });
  document.getElementById("menu").addEventListener("click",()=>document.getElementById("sidebar").classList.toggle("open"));
  document.getElementById("theme").addEventListener("click",theme);
  document.getElementById("brief").addEventListener("click",()=>{document.getElementById("brief-dialog").classList.add("open");document.body.insertAdjacentHTML("beforeend","<div class='dialog-backdrop' id='brief-backdrop'></div>")});
  document.getElementById("close-brief").addEventListener("click",()=>{document.getElementById("brief-dialog").classList.remove("open");const bd=document.getElementById("brief-backdrop");if(bd)bd.remove()});
  document.getElementById("copy-brief").addEventListener("click",()=>navigator.clipboard.writeText(document.getElementById("brief-text").value).then(()=>toast("Executive brief copied")));
  document.getElementById("source-search").addEventListener("input",e=>renderSources(e.target.value));
  document.getElementById("export-sources").addEventListener("click",exportSources);
  window.addEventListener("hashchange",()=>navigate(location.hash.slice(1)||"overview"));
}

if(localStorage.getItem("tsl-theme"))document.documentElement.dataset.theme=localStorage.getItem("tsl-theme");

shell();events();renderOffers();renderSolutions();renderSources();navigate(state.view);

