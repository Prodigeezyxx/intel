// Nigeria National Resilience Twin — strategic content
// Author: TSL Logistics foundation proposal (defensive, civilian, sovereign)
// All scores/indices are illustrative planning baselines, NOT live or tactical.

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
    summary: 'Strategic planning profile reflecting the documented national challenge from armed banditry and kidnapping. Not a live incident picture.',
    priority: 'Connect lawful community reporting, case workflows, resilient comms and logistics visibility before adding more sensors.'
  },
  'North East': {
    score: 83, confidence: 'Medium', posture: 'Civilian protection + continuity',
    focus: ['Insurgency impact','Humanitarian access','Critical-service continuity'],
    summary: 'High-level preparedness profile based on public strategy and humanitarian reporting; no positions, movements or tactical indicators.',
    priority: 'Improve inter-agency information quality, emergency routing, infrastructure uptime and trusted early-warning handoffs.'
  },
  'North Central': {
    score: 68, confidence: 'Medium', posture: 'Community resilience',
    focus: ['Inter-communal violence','Kidnapping','Transport and food corridors'],
    summary: 'National-level lens on civilian protection, transport continuity and conflict prevention using aggregated, non-personal information.',
    priority: 'Pilot a rights-respecting multi-agency coordination model with community safeguards and auditable escalation.'
  },
  'South West': {
    score: 55, confidence: 'Medium', posture: 'Urban + port resilience',
    focus: ['Port safety','Cyber resilience','Urban critical infrastructure'],
    summary: 'Exposure and readiness profile for high-density economic infrastructure, ports and national digital services.',
    priority: 'Unify port, vessel, terminal, cyber and emergency readiness measures without centralising unnecessary personal data.'
  },
  'South East': {
    score: 62, confidence: 'Low–medium', posture: 'Mobility + infrastructure',
    focus: ['Transport continuity','Public safety','Critical-site resilience'],
    summary: 'Planning baseline for protecting movement, commerce and essential assets while improving evidence quality.',
    priority: 'Start with service continuity, verified public reporting and shared incident taxonomy, not predictive policing.'
  },
  'South South': {
    score: 76, confidence: 'Medium', posture: 'Maritime + energy assurance',
    focus: ['Pipeline vandalism','Maritime crime','Flood and coastal risk'],
    summary: 'Bounded resilience view linking public maritime, hydrographic, environmental and infrastructure priorities—not a map of vulnerable assets.',
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

// Expanded solution catalogue: lowest (1) to highest (5) implementation complexity.
// problem / what_it_solves => the pain or gap being addressed
// dependencies           => legal, data and stakeholder conditions that must exist first
// components             => the concrete deliverables / building blocks
// value                  => measurable benefit to the mission
// complexity             => 1 (low) .. 5 (high)
// owners                 => primary accountable bodies
// vendors                => KONGSBERG / Exail / TSL / neutral where applicable
export const solutionCatalogue = [
  {
    id: 'sol-01',
    complexity: 1,
    title: 'Trusted community incident reporting hotlines',
    summary: 'Toll-free / USSD / SMS channels for verified, protected public reporting into existing law-enforcement case workflows.',
    what_it_solves: ['Unverified tips overwhelm agencies', 'No trusted channel for at-risk reporters', 'Missing rural/low-connectivity reporting'],
    dependencies: ['Agency receiving officers and SLAs', 'Anonymity and protection policy', 'Feedback loop to reporters'],
    components: ['Multi-channel intake (voice, SMS, USSD, web)', 'Anonymity-preserving routing', 'Case-number issuance and status tracking', 'Feedback and protection handling'],
    value: 'Faster verified referrals; higher public trust; lower duplicate load.',
    owners: ['Police', 'ONSA', 'States'],
    vendors: ['neutral', 'TSL'],
    icon: 'call', tag: 'Community trust'
  },
  {
    id: 'sol-02',
    complexity: 1,
    title: 'Incident taxonomy and shared case tracking',
    summary: 'A minimal national incident classification and a shared, read-only referral tracker so agencies acknowledge ownership within agreed SLAs.',
    what_it_solves: ['Inconsistent incident definitions', 'Lost or duplicated referrals', 'No visibility on acknowledgement time'],
    dependencies: ['Agency agreement on definitions', 'Basic identity for receiving officers', 'SLAs published publicly'],
    components: ['Common incident taxonomy', 'Shared referral tracker with timestamps', 'Automated SLA breach alerts', 'Simple dashboard for senior leadership'],
    value: 'Median time from verified referral to acknowledged ownership improves measurably.',
    owners: ['ONSA', 'Police', 'NEMA'],
    vendors: ['TSL', 'neutral'],
    icon: 'track_changes', tag: 'Interoperability'
  },
  {
    id: 'sol-03',
    complexity: 2,
    title: 'Offline-first field data collection with sync',
    summary: 'Offline-capable field applications for inspections, surveys, damage assessments and case evidence, with conflict-aware sync into agency systems.',
    what_it_solves: ['No connectivity in rural/remote field work', 'Data lost when devices go offline', 'No integrity checks on field data'],
    dependencies: ['Field-device management', 'Agency acceptance of sync model', 'Data-validation rules agreed'],
    components: ['Offline-first field apps', 'Digital signature + photo + location capture', 'Conflict-aware sync gateway', 'Data-quality and completeness scoring'],
    value: 'Evidence-grade field records; higher inspection and survey throughput.',
    owners: ['Sector inspectors', 'NHA', 'NEMA', 'Police'],
    vendors: ['TSL', 'neutral'],
    icon: 'offline_bolt', tag: 'Field operations'
  },
  {
    id: 'sol-04',
    complexity: 2,
    title: 'Resilient multi-bearer communications backbone',
    summary: 'Backup and failover communications for authorised responders using radio, cellular and satellite bearers with automatic routing and priority for safety-of-life traffic.',
    what_it_solves: ['Single-network failure cuts responders off', 'No priority for emergency traffic', 'No fallback when cellular degrades'],
    dependencies: ['Bearer coverage maps', 'Priority/pre-emption agreements', 'Power resilience at sites'],
    components: ['Multi-bearer gateways', 'Automatic failover and priority queuing', 'Portable responder kits', 'Availability monitoring dashboard'],
    value: 'Mission continuation during network or power outages; faster emergency response in degraded areas.',
    owners: ['Nigerian Communications Commission', 'States', 'NEMA'],
    vendors: ['KONGSBERG', 'TSL'],
    icon: 'wifi', tag: 'Continuity'
  },
  {
    id: 'sol-05',
    complexity: 2,
    title: 'Local maintenance, calibration and spares centre',
    summary: 'A TSL-led depot with OEM certification for maritime, hydrographic and sensor equipment maintenance, calibration and spares holding.',
    what_it_solves: ['Long equipment downtime waiting for overseas spares', 'Limited local technical skills', 'High cost of ad-hoc support'],
    dependencies: ['Land/site agreement', 'OEM certification process', 'Local technician training'],
    components: ['Certified depot facility', 'Calibration standards and lab', 'Spares inventory strategy', 'SLA-based repair service'],
    value: 'Reduced mean time to repair; lower logistics cost; sustained regional availability.',
    owners: ['NHA', 'NIMASA', 'Navy'],
    vendors: ['KONGSBERG', 'Exail', 'TSL'],
    icon: 'precision_manufacturing', tag: 'Lifecycle'
  },
  {
    id: 'sol-06',
    complexity: 3,
    title: 'National maritime picture pilot (bounded area)',
    summary: 'A limited-area pilot fusing lawful AIS, coastal sensors and satellite products into a shared, auditable common operating picture under TSL local delivery.',
    what_it_solves: ['Fragmented maritime awareness', 'No shared tactical picture', 'Limited persistence and coverage'],
    dependencies: ['Authorised data sources and sharing agreements', 'Clear operational area', 'Human review before any enforcement referral'],
    components: ['Sensor ingest and fusion layer', 'AIS and satellite correlation', 'User workbench with audit trail', 'Lessons-learned and scale decision'],
    value: 'Improved SAR/navigation support; defensible, auditable maritime picture.',
    owners: ['NIMASA', 'Navy', 'NHA'],
    vendors: ['KONGSBERG', 'Exail', 'TSL'],
    icon: 'public', tag: 'MDA'
  },
  {
    id: 'sol-07',
    complexity: 3,
    title: 'Digital twin of a consenting critical asset',
    summary: 'A bounded integrity twin of one TSL-managed pipeline or terminal joining asset data, inspection, maintenance, condition monitoring and cyber-physical risk under a single owner.',
    what_it_solves: ['Scattered asset data across systems', 'Reactive maintenance', 'No single view of integrity'],
    dependencies: ['Asset owner consent', 'Data-sharing agreement', 'Defined criticality and risk tiers'],
    components: ['Asset and inspection data connectors', 'Condition and degradation models', 'Risk-based inspection scheduling', 'Maintenance and work-order integration'],
    value: 'Higher availability and safety; lower downtime and inspection cost.',
    owners: ['Sector owners', 'ONSA'],
    vendors: ['KONGSBERG', 'TSL'],
    icon: 'precision_factorial', tag: 'Asset integrity'
  },
  {
    id: 'sol-08',
    complexity: 3,
    title: 'National asset knowledge graph (abstracted)',
    summary: 'A federated, ownership-retaining knowledge graph of national critical assets, dependencies, inspection status and recovery plans—not precise coordinates.',
    what_it_solves: ['No cross-sector dependency visibility', 'Unknown recovery plans during incidents', 'Duplicated asset inventories'],
    dependencies: ['Agency willingness to share attributes not coordinates', 'Data steward for each sector', 'Clear use cases and access control'],
    components: ['Graph schema for assets and dependencies', 'Ownership and provenance metadata', 'Recovery-plan linking', 'Governed query and API'],
    value: 'Better incident prioritisation; faster, coordinated recovery.',
    owners: ['ONSA', 'Sector owners', 'NEMA'],
    vendors: ['TSL', 'KONGSBERG'],
    icon: 'account_tree', tag: 'Dependencies'
  },
  {
    id: 'sol-09',
    complexity: 3,
    title: 'NNS LANA readiness and lifecycle review',
    summary: 'An OEM-led technical health and obsolescence assessment of NNS LANA combined with a TSL lifecycle-support plan covering spares, crew training and data workflow.',
    what_it_solves: ['Unclear vessel availability and capability', 'Spares and consumable risk', 'Limited integration with national chart workflow'],
    dependencies: ['Nigerian Navy / NHA authorisation', 'KONGSBERG EM multibeam access', 'Crew and training data'],
    components: ['Technical health report', 'Obsolescence and upgrade options', 'Spares and support plan', 'Crew training and certification pathway'],
    value: 'Higher survey productivity; lower risk of capability gaps.',
    owners: ['NHA', 'Navy'],
    vendors: ['KONGSBERG', 'TSL'],
    icon: 'directions_boat', tag: 'Hydrography'
  },
  {
    id: 'sol-10',
    complexity: 4,
    title: 'Autonomous hydrographic survey service',
    summary: 'Outcome-based hydrographic survey campaigns using Exail DriX and KONGSBERG sonar payloads, delivering IHO-compliant data through a TSL-managed service while national teams build capability.',
    what_it_solves: ['Slow, expensive ship-based surveys', 'Limited coverage of offshore and riverine areas', 'Data quality inconsistency'],
    dependencies: ['IHO compliance regime', 'Mission-and-user authorisation', 'Crew transfer and local operations model'],
    components: ['USV/Vehicle operations and mission planning', 'Sensor integration and data workflow', 'QA/QC and chart-production handoff', 'Local crew training and certification'],
    value: 'Faster survey throughput; higher safety; certified local operators.',
    owners: ['NHA', 'Navy', 'States'],
    vendors: ['Exail', 'KONGSBERG', 'TSL'],
    icon: 'survey', tag: 'Blue economy'
  },
  {
    id: 'sol-11',
    complexity: 4,
    title: 'Federated security data platform with Sovereign control',
    summary: 'A sovereign, zero-trust federated platform letting agencies collaborate on shared workloads without ceding source authority or personal-data control.',
    what_it_solves: ['Data stored in foreign clouds against policy', 'Vendor lock-in across tools', 'Weak access control and audit'],
    dependencies: ['Agency mandates and legal basis', 'Nigeria-controlled encryption keys', 'Clear records schedule'],
    components: ['Identity and access with purpose control', 'API gateway and data catalogue', 'Audit, retention and verified deletion', 'Zero-trust network and endpoint controls'],
    value: 'Trust, compliance and reuse of data and services across missions.',
    owners: ['ONSA', 'NITDA', 'Nigerian Data Protection Commission'],
    vendors: ['TSL', 'neutral'],
    icon: 'security', tag: 'Sovereignty'
  },
  {
    id: 'sol-12',
    complexity: 4,
    title: 'Flood-readiness digital twin with early action',
    summary: 'A digital twin joining public flood forecasts, service dependencies, logistics and shelter capacity at safe aggregation levels, with pre-committed early-action funding.',
    what_it_solves: ['Forecasts do not translate to action', 'No visibility on service and logistics dependencies', 'Late or missing early action'],
    dependencies: ['Public forecast feeds', 'Service-dependency data from owners', 'Pre-approved early-action budgets'],
    components: ['Hazard and exposure model (aggregated)', 'Service-dependency graph', 'Logistics and shelter capacity view', 'Early-action trigger workflow'],
    value: 'Earlier public protection decisions; lower loss of life and economic disruption.',
    owners: ['NEMA', 'NiMet', 'States', 'NIHSA'],
    vendors: ['TSL', 'KONGSBERG'],
    icon: 'flood', tag: 'Climate'
  },
  {
    id: 'sol-13',
    complexity: 4,
    title: 'Evidence and chain-of-custody interoperability',
    summary: 'Standards-based digital evidence, custody and prosecution-readiness interfaces shared across agencies for kidnapping, banditry and maritime cases.',
    what_it_solves: ['Evidence lost in transfers', 'Weak chain of custody', 'Prosecution delays from poor case files'],
    dependencies: ['Legal admissibility standards', 'Digital-signature regime', 'Prosecutor and court adoption'],
    components: ['Evidence capture and sealing', 'Custody ledger with tamper evidence', 'Inter-agency handoff protocol', 'Prosecution-file generation'],
    value: 'Higher conviction rates; faster justice outcomes.',
    owners: ['Police', 'Navy', 'NBS', 'Prosecutors'],
    vendors: ['TSL', 'neutral'],
    icon: 'gavel', tag: 'Justice'
  },
  {
    id: 'sol-14',
    complexity: 5,
    title: 'Federated National Resilience Twin',
    summary: 'A federated decision platform spanning assets, services, readiness and scenarios across all six mission threads, owned by the missions, operated by TSL and advised by KONGSBERG/Exail technology where relevant.',
    what_it_solves: ['Siloed national resilience information', 'No common readiness picture', 'Hard to rehearse multi-domain scenarios'],
    dependencies: ['Mandate and legal basis', 'Agency data-sharing agreements', 'Sovereign governance and independent audit'],
    components: ['Federated data and identity layer', 'Knowledge and scenario graph', 'Readiness dashboards and simulation', 'Human-authorised decision workflow'],
    value: 'Coordinated, auditable national readiness; lower response time across missions.',
    owners: ['ONSA', 'NEMA', 'Sector owners'],
    vendors: ['TSL', 'KONGSBERG', 'Exail'],
    icon: 'hub', tag: 'National twin'
  },
  {
    id: 'sol-15',
    complexity: 5,
    title: 'Command, control and coordination modernisation',
    summary: 'A standards-based upgrade of federal and zonal coordination centres connecting mission owners, the common picture and workflow, without duplicating command hierarchies.',
    what_it_solves: ['Outdated, stove-piped command systems', 'Poor visibility across agencies', 'No shared workflow for escalation'],
    dependencies: ['Command structure agreement', 'Existing C4i inventory', 'Staff training and change management'],
    components: ['Common-picture workbench', 'Authoritative workflow engine', 'Voice/data/video integration', 'Exercise and rehearsal capability'],
    value: 'Better escalation; faster authorised response; preserved command relationships.',
    owners: ['ONSA', 'NEMA', 'NIMASA', 'States'],
    vendors: ['KONGSBERG', 'TSL'],
    icon: 'leaderboard', tag: 'C4I'
  },
  {
    id: 'sol-16',
    complexity: 5,
    title: 'AI assurance and trust office for security analytics',
    summary: 'A dedicated function governing any algorithmic assistance through algorithm registers, impact assessments, human review and recourse, with no autonomous enforcement.',
    what_it_solves: ['Unauditable AI assistance', 'Bias and explainability concerns', 'No recourse for affected people'],
    dependencies: ['Legislative/governance mandate', 'Resource and staffing', 'Agency participation and data'],
    components: ['Algorithm register', 'Impact and human-rights assessments', 'Model card and confidence labelling', 'Complaint, audit and recourse workflow'],
    value: 'Public trust in automated assistance; defensible, compliant analytics.',
    owners: ['ONSA', 'Nigerian Data Protection Commission', 'Civil society'],
    vendors: ['TSL', 'neutral'],
    icon: 'psychology', tag: 'Governance'
  },
  {
    id: 'sol-17',
    complexity: 4,
    title: 'Sovereign AI lab and compute centre',
    summary: 'On-soil AI compute and experimentation facility for training, testing and validating sovereign models, with controlled access to agency data and algorithmic oversight.',
    what_it_solves: ['AI capability depends on foreign cloud', 'No controlled environment for model training', 'Untrusted data flows into model development'],
    dependencies: ['Power/resilient infrastructure', 'Approved data-sharing protocols', 'Staff with security clearance'],
    components: ['On-prem GPU/TPU racks', 'Secure data enclave with isolation', 'Model training and evaluation pipelines', 'Experiment tracking and lineage'],
    value: 'Reduced reliance on foreign infrastructure; auditable AI development; faster model iteration.',
    owners: ['Nigerian Army Intelligence', 'NITDA', 'ONSA'],
    vendors: ['TSL', 'neutral'],
    icon: 'smart_toy', tag: 'AI capability'
  }
];

export const offerings = [
  {
    group: 'Immediate community trust & reporting (complexity 1)',
    icon: 'handshake',
    items: [
      ['Trusted community incident reporting hotlines','Toll-free/USSD/SMS channels routing protected public reports into verified law-enforcement case workflows.'],
      ['Incident taxonomy and shared case tracking','Minimal national classification plus shared read-only referral tracker so incidents are acknowledged within SLA.']
    ]
  },
  {
    group: 'Foundational data & field capability (complexity 2)',
    icon: 'offline_bolt',
    items: [
      ['Offline-first field data collection with sync','Offline-capable inspection/survey/evidence apps with conflict-aware sync into agency systems.'],
      ['Resilient multi-bearer communications backbone','Radio/cellular/satellite failover with priority for safety-of-life traffic.'],
      ['Local maintenance, calibration and spares centre','TSL depot with OEM certification for maritime/hydrographic/sensor equipment.'],
      ['National asset knowledge graph (abstracted)','Federated, ownership-retaining graph of assets, dependencies, inspection status and recovery plans.']
    ]
  },
  {
    group: 'Pilot services linking assets and missions (complexity 3)',
    icon: 'rocket',
    items: [
      ['National maritime picture pilot (bounded area)','Limited-area pilot fusing lawful AIS, coastal sensors and satellite data into an auditable common picture.'],
      ['Digital twin of a consenting critical asset','Bounded integrity twin of one consenting TSL-managed asset joining condition, maintenance and risk data.'],
      ['NNS LANA readiness and lifecycle review','OEM health and obsolescence assessment plus TSL lifecycle-support plan for national hydrography.']
    ]
  },
  {
    group: 'Sovereign platforms and national services (complexity 4)',
    icon: 'security',
    items: [
      ['Autonomous hydrographic survey service','Outcome-based USV campaigns using DriX and KONGSBERG sonar, IHO-compliant, building local capability.'],
      ['Federated security data platform with Sovereign control','Zero-trust platform enabling collaboration without ceding source authority or personal-data control.'],
      ['Flood-readiness digital twin with early action','Aggregated forecast + service + logistics + shelter twin with pre-committed early-action funding.'],
      ['Evidence and chain-of-custody interoperability','Standards-based digital evidence, custody ledger and prosecution-file interfaces across agencies.'],
      ['Sovereign AI lab and compute centre','On-soil AI compute facility for training, testing and validating sovereign models with controlled agency-data access and algorithmic oversight.']
    ]
  },
  {
    group: 'National-scale coordination and governance (complexity 5)',
    icon: 'account_balance',
    items: [
      ['Federated National Resilience Twin','Federated decision platform across all six mission threads, mission-owned and TSL-operated.'],
      ['Command, control and coordination modernisation','Modernised federal/zonal coordination centres connecting picture, workflow and mission owners.'],
      ['AI assurance and trust office for security analytics','Governance function for algorithmic assistance via register, assessments, human review and recourse.']
    ]
  }
];

export const vendorRows = [
  ['Maritime domain awareness (MDA)','cView, Foresight, AIS network, coastal sensors','DriX sensor platform and maritime data acquisition','TSL integration, local ops, stakeholder model'],
  ['Hydrography','EM multibeam, Sounder USV, HUGIN, processing ecosystem','DriX H-8/H-9, INS, USBL, sonar and survey services','NNS LANA support, logistics, training, service operations'],
  ['Subsea infrastructure','HUGIN AUV, imaging sonar, passive acoustics, inspection','DriX/ROV/AUV positioning and repeat survey','Pipeline/terminal knowledge, maintenance and HSSEQ'],
  ['Navigation resilience','Inertial and maritime navigation portfolio','FOG-based INS, AHRS, GNSS-independent navigation','Installation, certification coordination and lifecycle support'],
  ['Digital twin & analytics','Maritime/industrial digital platforms and fleet data','Mission software, data processing and remote operations','National knowledge graph, sovereign integration and managed service'],
  ['Training & support','Global support, OEM training and simulators','Operator, hydrography, robotics and maintenance training','Local academy, competency records, depots and SLA governance'],
  ['Secure infrastructure','Sovereign hosting, API gateway, identity and audit','Mission-grade communications and edge compute','Field integration, maintenance and local lifecycle support'],
  ['Governance & assurance','Standards-based, auditable integration and compliance','Trusted autonomy with human review and safety cases','Sovereign oversight, DPIA, records, redress and audit']
];

// Richer knowledge graph.
// Each node: [id, kind, x, y]
// Each edge: [sourceId, targetId, label]
export const graph = {
  nodes: [
    // Integrators / platforms
    ['TSL Logistics','integrator',500,250],
    ['National Resilience Twin','platform',500,86],
    ['Federated Security Data Platform','platform',260,170],
    ['Knowledge & Scenario Graph','platform',740,170],
    // Technology partners
    ['KONGSBERG','vendor',180,300],
    ['Exail','vendor',820,300],
    // Missions (the "why")
    ['Maritime security & blue economy','mission',220,410],
    ['Critical infrastructure assurance','mission',500,430],
    ['Community safety & kidnapping prevention','mission',780,410],
    ['Disaster & climate resilience','mission',340,530],
    ['Border, coast & environmental crime','mission',660,530],
    ['Cyber & information resilience','mission',500,600],
    // Services / offers
    ['Community reporting hotlines','service',220,290],
    ['Offline field data collection','service',360,300],
    ['Asset integrity twin','service',580,290],
    ['Maritime common picture','service',700,300],
    ['Flood-readiness twin','service',780,470],
    ['Evidence & chain of custody','service',620,470],
    ['Command & coordination modernisation','service',190,510],
    ['AI assurance & trust office','service',810,510],
    // Agencies / owners
    ['NIMASA / Navy / NHA','agency',120,380],
    ['ONSA / Police / States','agency',500,550],
    ['NEMA / sector owners','agency',340,620],
    ['Customs / Immigration','agency',870,380],
    ['ONSA / NITDA / CSIRTs','agency',810,620],
    // Abstract platform nodes
    ['Common operating picture','platform',500,170],
    ['Critical dependencies','service',260,290],
    ['All missions','mission',500,600]
  ],
  edges: [
    // Integrator relationships
    ['TSL Logistics','governs','National Resilience Twin'],
    ['TSL Logistics','local delivery','KONGSBERG'],
    ['TSL Logistics','local delivery','Exail'],
    ['TSL Logistics','local delivery','Federated Security Data Platform'],
    ['TSL Logistics','local delivery','Knowledge & Scenario Graph'],
    // Platform composition
    ['National Resilience Twin','aggregates','Common operating picture'],
    ['Common operating picture','feeds','Maritime common picture'],
    ['National Resilience Twin','aggregates','Asset integrity twin'],
    ['National Resilience Twin','aggregates','Flood-readiness twin'],
    ['Knowledge & Scenario Graph','models','Critical dependencies'],
    ['Federated Security Data Platform','enables','Evidence & chain of custody'],
    // Partner connections
    ['KONGSBERG','provides sensing + COP to','Maritime security & blue economy'],
    ['KONGSBERG','provides survey stack to','Maritime security & blue economy'],
    ['KONGSBERG','provides inspection to','Critical infrastructure assurance'],
    ['KONGSBERG','provides sensing to','Disaster & climate resilience'],
    ['KONGSBERG','provides C4I to','Command & coordination modernisation'],
    ['Exail','provides robotics + INS to','Maritime security & blue economy'],
    ['Exail','provides survey + positioning to','Maritime security & blue economy'],
    ['Exail','provides environmental data to','Border, coast & environmental crime'],
    ['Exail','provides autonomy to','Asset integrity twin'],
    ['Exail','provides autonomy to','Flood-readiness twin'],
    // Services back to missions / platforms
    ['Community reporting hotlines','mitigates','Community safety & kidnapping prevention'],
    ['Offline field data collection','supports','Critical infrastructure assurance'],
    ['Offline field data collection','supports','Community safety & kidnapping prevention'],
    ['Asset integrity twin','protects','Critical infrastructure assurance'],
    ['Maritime common picture','supports','Maritime security & blue economy'],
    ['Flood-readiness twin','reduces impact of','Disaster & climate resilience'],
    ['Evidence & chain of custody','strengthens','Border, coast & environmental crime'],
    ['Command & coordination modernisation','coordinates','All missions'],
    ['AI assurance & trust office','governs','Common operating picture'],
    // Mission owners
    ['NIMASA / Navy / NHA','owns','Maritime security & blue economy'],
    ['NIMASA / Navy / NHA','owns','Maritime common picture'],
    ['ONSA / Police / States','owns','Community safety & kidnapping prevention'],
    ['ONSA / Police / States','owns','Cyber & information resilience'],
    ['NEMA / sector owners','owns','Disaster & climate resilience'],
    ['NEMA / sector owners','owns','Critical infrastructure assurance'],
    ['Customs / Immigration','owns','Border, coast & environmental crime'],
    ['ONSA / NITDA / CSIRTs','owns','Cyber & information resilience'],
    ['ONSA / Police / States','owns','Evidence & chain of custody'],
    ['ONSA / NITDA / CSIRTs','owns','AI assurance & trust office']
  ]
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
  {tag:'KONGSBERG',title:'Vessel Insight platform',org:'KONGSBERG',url:'https://www.kongsberg.com/maritime/vessel-insight/',note:'Official maritime fleet and asset-data platform for condition and readiness.'},
  {tag:'Exail',title:'DriX H-8 medium-range USV',org:'Exail',url:'https://www.exail.com/product/drix-h8-medium-range-usv',note:'Official supervised-autonomy, payload, hydrographic and remote-control capability.'},
  {tag:'Exail',title:'DriX H-9 selected by Shom',org:'Exail',url:'https://www.exail.com/news/shom-strengthens-its-hydrographic-capabilities-with-drix-h-9-usv',note:'Official case for accelerating certified hydrographic data acquisition and extending coverage.'},
  {tag:'Exail',title:'Navigation & inertial solutions for maritime',org:'Exail',url:'https://www.exail.com/product-family/navigation-for-maritime-applications',note:'Official FOG-based INS, AHRS and GNSS-independent navigation portfolio.'},
  {tag:'TSL',title:'TSL Logistics operations and services',org:'TSL Logistics',url:'https://tsllog.tsllogisticsltd.com/tsl-operations/',note:'Documents TSL’s terminal, pipeline, infrastructure, inventory, consultancy, HSSEQ and technology credentials.'},
  {tag:'Rule of law',title:'Strategic Vision for Nigeria 2030',org:'UNODC',url:'https://www.unodc.org/conig/uploads/documents/documents/UNODC_Strategic_Vision_for_Nigeria_2030-WEB_VERSION.pdf',note:'Frames justice, terrorism prevention, organised crime, maritime crime, environment and institutional integrity.'},
  {tag:'Maritime evidence',title:'Piracy and armed robbery reporting',org:'IMO',url:'https://www.imo.org/en/ourwork/security/pages/piracy-reports-default.aspx',note:'Authoritative incident-reporting framework and annual/monthly public reports.'},
  {tag:'Cyber law',title:'Designation and Protection of CNII Order 2024',org:'Federal Republic of Nigeria / National Library',url:'https://nigeriareposit.nln.gov.ng/items/dc4b6ee8-5165-4108-b985-bf6fdff58274',note:'Official gazette record for critical national information infrastructure protection.'},
  {tag:'Geospatial',title:'Nigeria ADM1 boundaries',org:'geoBoundaries / GRID3',url:'https://www.geoboundaries.org/api/current/gbOpen/NGA/ADM1/',note:'CC BY 4.0 state-boundary geometry used only for the illustrative digital-twin map.'},
  {tag:'Disaster risk',title:'Nigeria flood disaster and early warning',org:'National Emergency Management Agency / NIHSA',url:'https://www.nemawarrriors.org/',note:'Public documentation of flood impact, displacement and early-warning approaches informing the resilience twin scenarios.'}
];

export const assumptions = [
  'This prototype uses no live operational feed, classified source, personal record or precise critical-asset location.',
  'Zone scores are illustrative planning indices derived from public qualitative themes, not measured threat probabilities.',
  'Product references describe documented vendor capabilities; all Nigeria-specific combinations are TSL strategic proposals subject to discovery, export controls and procurement.',
  'The two named TSL consortium PDFs were not present in the accessible local folders; their content has not been represented as reviewed.',
  'Any production system requires agency mandate, legal review, DPIA, cyber accreditation, data-sharing agreements and independent safeguards assurance.'
];
