export const zones = {
  'North West': ['Jigawa','Kaduna','Kano','Katsina','Kebbi','Sokoto','Zamfara'],
  'North East': ['Adamawa','Bauchi','Borno','Gombe','Taraba','Yobe'],
  'North Central': ['Benue','Kogi','Kwara','Nasarawa','Niger','Plateau','Abuja Federal Capital Territory'],
  'South West': ['Ekiti','Lagos','Ogun','Ondo','Osun','Oyo'],
  'South East': ['Abia','Anambra','Ebonyi','Enugu','Imo'],
  'South South': ['Akwa Ibom','Bayelsa','Cross River','Delta','Edo','Rivers']
};

export const zoneProfiles = {
  'North West': {
    score: 79, confidence: 'Medium', posture: 'Prevention + protection',
    focus: ['Kidnapping & banditry','Rural access resilience','School and community safety'],
    summary: 'A strategic planning profile reflecting the documented national challenge from armed banditry and kidnapping. It is not a live incident picture.',
    priority: 'Connect community reporting, lawful case workflows, resilient communications and logistics visibility before adding more sensors.'
  },
  'North East': {
    score: 83, confidence: 'Medium', posture: 'Civilian protection + continuity',
    focus: ['Insurgency impact','Humanitarian access','Critical-service continuity'],
    summary: 'A high-level preparedness profile based on public strategy and humanitarian reporting; no positions, movements or tactical indicators are shown.',
    priority: 'Improve inter-agency information quality, emergency routing, infrastructure uptime and trusted early-warning handoffs.'
  },
  'North Central': {
    score: 68, confidence: 'Medium', posture: 'Community resilience',
    focus: ['Inter-communal violence','Kidnapping','Transport and food corridors'],
    summary: 'A national-level lens on civilian protection, transport continuity and conflict prevention using aggregated, non-personal information.',
    priority: 'Pilot a rights-respecting multi-agency coordination model with community safeguards and auditable escalation.'
  },
  'South West': {
    score: 55, confidence: 'Medium', posture: 'Urban + port resilience',
    focus: ['Port safety','Cyber resilience','Urban critical infrastructure'],
    summary: 'An exposure and readiness profile for high-density economic infrastructure, ports and national digital services.',
    priority: 'Unify port, vessel, terminal, cyber and emergency readiness measures without centralising unnecessary personal data.'
  },
  'South East': {
    score: 62, confidence: 'Low–medium', posture: 'Mobility + infrastructure',
    focus: ['Transport continuity','Public safety','Critical-site resilience'],
    summary: 'A planning baseline for protecting movement, commerce and essential assets while improving evidence quality.',
    priority: 'Start with service continuity, verified public reporting and shared incident taxonomy rather than predictive policing.'
  },
  'South South': {
    score: 76, confidence: 'Medium', posture: 'Maritime + energy assurance',
    focus: ['Pipeline vandalism','Maritime crime','Flood and coastal risk'],
    summary: 'A bounded resilience view linking public maritime, hydrographic, environmental and infrastructure priorities—not a map of vulnerable assets.',
    priority: 'Combine hydrographic renewal, subsea inspection, environmental baselines and lawful maritime-domain awareness with TSL lifecycle operations.'
  }
};

export const missions = [
  {
    id:'maritime', icon:'sailing', title:'Maritime security & blue economy', horizon:'0–18 months', lead:'NIMASA / Nigerian Navy / NHA',
    problem:'Fragmented maritime picture, piracy and armed robbery exposure, illegal activity, navigation risk and limited persistence across a large maritime domain.',
    outcome:'A shared, auditable maritime picture that strengthens safety of navigation, search and rescue, lawful enforcement and blue-economy confidence.',
    offers:['National Maritime Data Fabric','cView / Foresight interoperability study','Coastal AIS and radar refresh','DriX hydrographic service pilot','NNS LANA readiness & lifecycle programme','Search-and-rescue decision support'],
    vendors:['KONGSBERG','Exail','TSL'], color:'#68e0c3'
  },
  {
    id:'infrastructure', icon:'account_tree', title:'Critical infrastructure assurance', horizon:'0–24 months', lead:'ONSA / sector owners',
    problem:'Energy, ports, telecoms, transport and subsea assets require coordinated resilience, inspection, maintenance and cyber-physical risk governance.',
    outcome:'Higher asset availability, faster verified anomaly triage, improved preventive maintenance and evidence-grade incident records.',
    offers:['National asset knowledge graph','Pipeline and terminal integrity twin','Subsea infrastructure inspection service','Leak and environmental baseline monitoring','CNII-aligned cyber risk service','Resilience exercises and continuity plans'],
    vendors:['TSL','KONGSBERG','Exail'], color:'#ffd166'
  },
  {
    id:'land', icon:'shield', title:'Community safety & kidnapping prevention', horizon:'0–18 months', lead:'Police / ONSA / states',
    problem:'Kidnapping, banditry and disrupted rural access demand trusted reporting, case coordination, logistics and communications—without creating a mass-surveillance system.',
    outcome:'Faster verified referrals, safer public-service continuity, stronger chain of custody and better protection of schools and communities.',
    offers:['Federated incident exchange','Offline-first protected reporting','Emergency communications resilience','School safety readiness assessments','Evidence and chain-of-custody workflows','Victim support referral coordination'],
    vendors:['TSL','KONGSBERG'], color:'#ff8a80'
  },
  {
    id:'disaster', icon:'flood', title:'Disaster & climate resilience', horizon:'0–18 months', lead:'NEMA / states / NiMet / NIHSA',
    problem:'Floods and climate shocks compound displacement, access and critical-service risks; forecasts need clearer links to funded early action.',
    outcome:'A common readiness picture, pre-positioned logistics, accessible alerts and measurable early action before impact.',
    offers:['Flood readiness digital twin','Critical-route contingency model','Relief inventory visibility','Hydrographic and river survey support','Multi-channel public warning service','Post-event rapid assessment workflow'],
    vendors:['TSL','Exail','KONGSBERG'], color:'#7cb7ff'
  },
  {
    id:'border', icon:'public', title:'Border, coast & environmental crime', horizon:'6–30 months', lead:'Customs / Immigration / Navy / regulators',
    problem:'Smuggling, trafficking, illegal fishing, illegal mining and environmental crime cross agency and geographic boundaries.',
    outcome:'Shared risk indicators, defensible referrals and coordinated patrol planning at an aggregated level with judicial oversight.',
    offers:['Cross-agency entity resolution','Trade and vessel anomaly screening','Illegal fishing evidence service','Environmental change detection','Mobile inspection toolkit','Regional information-sharing gateway'],
    vendors:['TSL','KONGSBERG','Exail'], color:'#b8a1ff'
  },
  {
    id:'cyber', icon:'security', title:'Cyber & information resilience', horizon:'0–24 months', lead:'ONSA / NITDA / sector CSIRTs',
    problem:'National services face cyber risk, data fragmentation, vendor lock-in, disinformation and weak cross-sector incident learning.',
    outcome:'Sovereign, federated security operations with common standards, recovery metrics, auditability and public-trust controls.',
    offers:['Sovereign security data platform','CNII maturity assessments','Zero-trust integration blueprint','OT/IT monitoring for terminals','Crisis communications playbooks','Data-governance and AI assurance office'],
    vendors:['TSL','KONGSBERG'], color:'#ffad66'
  }
];

export const offerings = [
  {group:'Infrastructure', icon:'domain', items:[
    ['Federated coordination centres','Upgrade existing federal and zonal operations rooms; do not create a duplicate command bureaucracy.'],
    ['Secure national data exchange','API gateway, identity, audit, geospatial catalogue and sovereign hosting across agency boundaries.'],
    ['Maritime and hydrographic operations hub','Remote survey control, chart-production workflow, training lab and maintenance capability.'],
    ['Resilient field connectivity','Multi-bearer communications, offline operation, backup power and failover for authorised responders.'],
    ['Local lifecycle centre','Spares, calibration, depot maintenance and configuration management led by TSL with OEM certification.'],
    ['Critical-infrastructure sensor gateways','Open, vendor-neutral edge integration around ports, terminals and authorised assets.']
  ]},
  {group:'Consultancy services', icon:'strategy', items:[
    ['National capability baseline','Mission, governance, data, workforce and lifecycle maturity assessment.'],
    ['Concept of operations & service design','Inter-agency workflows, decision rights, service levels and escalation controls.'],
    ['Programme and systems integration office','Architecture authority, benefits management, testing and independent assurance.'],
    ['Hydrographic transformation roadmap','NNS LANA readiness, fleet mix, IHO-aligned quality and chart-production planning.'],
    ['Cyber and privacy impact assurance','DPIAs, threat modelling, records schedules, access reviews and red-team governance.'],
    ['Commercial and financing design','Pilot-to-service contracting, uptime SLAs, local content, lease/service and blended-finance options.'],
    ['Workforce academy','Surveyors, technicians, analysts, dispatchers, data stewards and executive exercising.'],
    ['Community trust and safeguards','Complaint, redress, public communication and civil-society consultation design.']
  ]},
  {group:'Technology solutions', icon:'memory', items:[
    ['National Resilience Twin','Bounded digital twin for assets, services, incidents, readiness and scenarios—not people tracking.'],
    ['Security knowledge graph','Entities, relationships, provenance, confidence and permissions for cross-agency sense-making.'],
    ['Maritime common operating picture','Fuse lawful AIS, coastal sensors, satellite products, weather and registry data.'],
    ['Hydrographic robotics','DriX USV and HUGIN/Sounder options for surveys, inspection and environmental baselines.'],
    ['Subsea and pipeline assurance','Sonar, AUV/ROV, acoustic monitoring and repeat-survey change detection.'],
    ['Fleet and asset health','Condition monitoring, maintenance forecasting, spares and readiness dashboards.'],
    ['Case and evidence interoperability','Referral, digital evidence, chain of custody and prosecution-readiness interfaces.'],
    ['Early warning and decision support','Transparent rules, confidence labels and human approval; no autonomous coercive action.']
  ]},
  {group:'Managed services & capacity', icon:'handshake', items:[
    ['Hydrography-as-a-service','Outcome-based survey campaigns and data QA while national teams build capability.'],
    ['Maritime data operations','24/7 data quality, common-picture administration and authorised agency support.'],
    ['Infrastructure assurance service','Scheduled inspection, integrity analytics, maintenance orchestration and reporting.'],
    ['Simulation and exercise service','Tabletop and simulator-based readiness for SAR, spill, cyber and continuity events.'],
    ['Sovereign data stewardship','Catalogue, quality, lineage, retention, access certification and independent audit.'],
    ['Innovation sandbox','Time-boxed trials with safety cases, measurable outcomes and explicit stop/scale decisions.']
  ]}
];

export const vendorRows = [
  ['Maritime domain awareness','cView, Foresight, AIS network, sensors','DriX sensor platform and maritime data acquisition','Integration, local operations, stakeholder model'],
  ['Hydrography','EM multibeam, Sounder USV, HUGIN, processing ecosystem','DriX H-8/H-9, INS, USBL, sonar and survey services','NNS LANA support, logistics, training, service operations'],
  ['Subsea infrastructure','HUGIN AUV, imaging sonar, passive acoustics, inspection','DriX/ROV/AUV positioning and repeat survey','Pipeline/terminal knowledge, maintenance and HSSEQ'],
  ['Navigation resilience','Inertial and maritime navigation portfolio','FOG-based INS, AHRS, GNSS-independent navigation','Installation, certification coordination and lifecycle support'],
  ['Digital twin & analytics','Maritime/industrial digital platforms and fleet data','Mission software, data processing and remote operations','National knowledge graph, sovereign integration and managed service'],
  ['Training & support','Global support, OEM training and simulators','Operator, hydrography, robotics and maintenance training','Local academy, competency records, depots and SLA governance']
];

export const graph = {
  nodes:[
    ['TSL Logistics','integrator',500,242],['National Resilience Twin','platform',500,72],['KONGSBERG','vendor',228,152],['Exail','vendor',772,152],
    ['Maritime safety','mission',110,330],['Hydrography','mission',286,412],['Infrastructure','mission',500,442],['Community safety','mission',714,412],['Disaster readiness','mission',890,330],
    ['NIMASA / Navy / NHA','agency',190,52],['ONSA / Police / States','agency',500,540],['NEMA / sector owners','agency',810,52]
  ],
  edges:[[0,1,'governs'],[0,2,'local delivery'],[0,3,'local delivery'],[2,4,'sensing + COP'],[2,5,'survey stack'],[2,6,'inspection'],[3,5,'robotics + INS'],[3,6,'survey + positioning'],[3,8,'environmental data'],[1,4,'decision support'],[1,5,'data fabric'],[1,6,'asset graph'],[1,7,'protected workflows'],[1,8,'early action'],[9,4,'mission owner'],[9,5,'mission owner'],[10,7,'mission owner'],[11,8,'mission owner'],[11,6,'asset owner']]
};

export const roadmap = [
  {phase:'0', time:'0–90 days', title:'Mandate & discovery', result:'A jointly owned problem definition and lawful data baseline.', actions:['Executive sponsor and cross-agency steering charter','Capability, data, infrastructure and workforce baseline','NNS LANA/OEM technical health assessment','DPIA, legal basis and human-rights risk screen','Select two measurable, non-overlapping pilots']},
  {phase:'1', time:'3–9 months', title:'Prove two lighthouse services', result:'Operational evidence before national procurement.', actions:['Maritime/hydrographic data-fusion pilot in a bounded test area','Critical-infrastructure integrity pilot on a consenting TSL-managed asset','Train local operators and data stewards','Independent technical and safeguards evaluation','Publish benefits, limitations and scale decision']},
  {phase:'2', time:'9–24 months', title:'Integrate & regionalise', result:'Reusable platform, zonal operations and Nigerian lifecycle capacity.', actions:['Deploy sovereign data exchange and knowledge graph','Integrate selected existing agency systems','Stand up local maintenance, calibration and spares centre','Extend to SAR, flood readiness and evidence workflows','Introduce availability and outcome-based service levels']},
  {phase:'3', time:'24–48 months', title:'Scale national services', result:'Federated national coverage with transparent governance.', actions:['Scale by mission and readiness, not sensor volume','Connect authorised state and sector nodes','Certify Nigerian academy and technical pathways','Run annual national resilience exercises','Independent audit, benefits review and architecture refresh']},
  {phase:'4', time:'48+ months', title:'Export & sustain', result:'Nigeria-owned capability and a West African service proposition.', actions:['Increase local configuration and assembly','Develop regional hydrography and maritime data services','Maintain vendor interoperability and exit rights','Fund continuous chart, model and cyber updates','Benchmark trust, readiness and economic outcomes annually']}
];

export const kpis = [
  ['Data quality','% mission datasets with owner, provenance, timestamp and confidence','≥ 90% by Phase 2'],
  ['Inter-agency readiness','Median time from verified referral to acknowledged ownership','Baseline then −40%'],
  ['Asset assurance','Critical assets with current inspection and recovery plan','≥ 85% in participating portfolio'],
  ['Hydrographic throughput','Priority survey area accepted through national QA workflow','Pilot baseline then +50%'],
  ['Maritime safety','SAR / navigation cases supported with shared, auditable picture','100% of participating cases'],
  ['Availability','Operational uptime of contracted digital and field services','≥ 99.5% where justified'],
  ['Local capacity','Certified Nigerian roles able to operate and maintain services','≥ 70% by Phase 3'],
  ['Rights & trust','Substantiated access/control breaches and redress closure time','Zero severe; closure SLA tracked'],
  ['Interoperability','Priority interfaces passing conformance tests','100% before scale'],
  ['Economic value','Avoided downtime, survey vessel days and duplicated procurement','Audited benefit case annually']
];

export const guardrails = [
  ['Mission before data','Collect only what a defined, lawful public-safety or resilience service needs.'],
  ['Federated by default','Agencies retain source authority; share minimum necessary views and claims.'],
  ['Human accountability','Models advise. Named public officials authorise consequential action.'],
  ['No predictive policing','Do not infer individual criminality from proxies, networks, ethnicity, religion or location.'],
  ['Provenance and confidence','Every claim shows source, timestamp, quality, transformation and confidence.'],
  ['Role and purpose controls','Attribute- and purpose-based access, strong authentication and recurring recertification.'],
  ['Retention and deletion','Time-bound records schedules, legal holds, verified deletion and immutable access logs.'],
  ['Independent oversight','DPIA, algorithm register, complaint/redress path and periodic external audit.'],
  ['Sovereignty and exit','Nigeria-controlled keys, local data residency where required, open interfaces and export rights.'],
  ['Safety and security','Zero-trust architecture, segmentation, secure update chain, backups and tested recovery.']
];

export const sources = [
  {tag:'Nigeria policy',title:'National Security Strategy 2019',org:'Federal Republic of Nigeria / NCTC',url:'https://nctc.gov.ng/storage/2024/01/NSS-2019.pdf',note:'Sets comprehensive security objectives, inter-agency implementation and measurable outcomes.'},
  {tag:'Nigeria maritime',title:'Deep Blue Project launch and asset model',org:'NIMASA',url:'https://nimasa.gov.ng/president-buhari-launches-deep-blue-project-in-lagos/',note:'Documents Nigeria’s integrated land, sea, air and C4i maritime-security foundation.'},
  {tag:'Nigeria hydrography',title:'National Hydrographic Agency survey fleet',org:'NHA',url:'https://nha.gov.ng/survey-fleet/',note:'Documents NNS LANA, NNS OCHUZO, survey launches and existing KONGSBERG multibeam systems.'},
  {tag:'KONGSBERG',title:'Surveillance & monitoring portfolio',org:'KONGSBERG',url:'https://www.kongsberg.com/what-we-do/ocean-space/surveillance-monitoring/',note:'Official portfolio: AIS, cView, Foresight, HUGIN, sonar, infrastructure inspection and situational awareness.'},
  {tag:'KONGSBERG',title:'HUGIN autonomous underwater vehicle',org:'KONGSBERG',url:'https://www.kongsberg.com/what-we-do/ocean-space/autonomous-and-uncrewed-solutions/auv/hugin/',note:'Official multi-sensor hydrography, geophysical survey and inspection capabilities.'},
  {tag:'Exail',title:'DriX H-8 medium-range USV',org:'Exail',url:'https://www.exail.com/product/drix-h8-medium-range-usv',note:'Official supervised-autonomy, payload, hydrographic and remote-control capability.'},
  {tag:'Exail',title:'DriX H-9 selected by Shom',org:'Exail',url:'https://www.exail.com/news/shom-strengthens-its-hydrographic-capabilities-with-drix-h-9-usv',note:'Official case for accelerating certified hydrographic data acquisition and extending coverage.'},
  {tag:'TSL',title:'TSL Logistics operations and services',org:'TSL Logistics',url:'https://tsllog.tsllogisticsltd.com/tsl-operations/',note:'Documents TSL’s terminal, pipeline, infrastructure, inventory, consultancy, HSSEQ and technology credentials.'},
  {tag:'Rule of law',title:'Strategic Vision for Nigeria 2030',org:'UNODC',url:'https://www.unodc.org/conig/uploads/documents/documents/UNODC_Strategic_Vision_for_Nigeria_2030-WEB_VERSION.pdf',note:'Frames justice, terrorism prevention, organised crime, maritime crime, environment and institutional integrity.'},
  {tag:'Maritime evidence',title:'Piracy and armed robbery reporting',org:'IMO',url:'https://www.imo.org/en/ourwork/security/pages/piracy-reports-default.aspx',note:'Authoritative incident-reporting framework and annual/monthly public reports.'},
  {tag:'Cyber law',title:'Designation and Protection of CNII Order 2024',org:'Federal Republic of Nigeria / National Library',url:'https://nigeriareposit.nln.gov.ng/items/dc4b6ee8-5165-4108-b985-bf6fdff58274',note:'Official gazette record for critical national information infrastructure protection.'},
  {tag:'Geospatial',title:'Nigeria ADM1 boundaries',org:'geoBoundaries / GRID3',url:'https://www.geoboundaries.org/api/current/gbOpen/NGA/ADM1/',note:'CC BY 4.0 state-boundary geometry used only for the illustrative digital-twin map.'}
];

export const assumptions = [
  'This prototype uses no live operational feed, classified source, personal record or precise critical-asset location.',
  'Zone scores are illustrative planning indices derived from public qualitative themes, not measured threat probabilities.',
  'Product references describe documented vendor capabilities; all Nigeria-specific combinations are TSL strategic proposals subject to discovery, export controls and procurement.',
  'The two named TSL consortium PDFs were not present in the accessible local folders; their content has not been represented as reviewed.',
  'Any production system requires agency mandate, legal review, DPIA, cyber accreditation, data-sharing agreements and independent safeguards assurance.'
];
