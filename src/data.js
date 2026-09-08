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
    offers:['National maritime picture pilot (bounded area)','NNS LANA readiness and lifecycle review','Autonomous hydrographic survey service','Deep-sea survey vessel acquisition (TSL-Colossus)','AI-assisted surveillance and preventive analysis','Federated National Resilience Twin'],
    vendors:['KONGSBERG','Exail','TSL'], color:'#68e0c3'
  },
  {
    id:'infrastructure', icon:'account_tree', title:'Critical infrastructure assurance', horizon:'0–24 months', lead:'ONSA / sector owners',
    problem:'Energy, ports, telecoms, transport and subsea assets require coordinated resilience, inspection, maintenance and cyber-physical risk governance.',
    outcome:'Higher asset availability, faster verified anomaly triage, improved preventive maintenance and evidence-grade incident records.',
    offers:['National asset knowledge graph (abstracted)','Digital twin of a consenting critical asset','Offline-first field data collection with sync','Local maintenance, calibration and spares centre','Federated security data platform with Sovereign control','Sovereign object ontology and writeback layer'],
    vendors:['TSL','KONGSBERG','Exail'], color:'#ffd166'
  },
  {
    id:'land', icon:'shield', title:'Community safety & kidnapping prevention', horizon:'0–18 months', lead:'Police / ONSA / states',
    problem:'Kidnapping, banditry and disrupted rural access demand trusted reporting, case coordination, logistics, communications and predictive tasking of scarce patrols.',
    outcome:'Faster verified referrals, predictive patrol allocation, stronger chain of custody and better protection of schools and communities.',
    offers:['Trusted community incident reporting hotlines','Incident taxonomy and shared case tracking','Evidence and chain-of-custody interoperability','AI-assisted surveillance and preventive analysis','Predictive policing and patrol optimisation','Resilient multi-bearer communications backbone'],
    vendors:['TSL','KONGSBERG'], color:'#ff8a80'
  },
  {
    id:'disaster', icon:'flood', title:'Disaster & climate resilience', horizon:'0–18 months', lead:'NEMA / states / NiMet / NIHSA',
    problem:'Floods and climate shocks compound displacement, access and critical-service risks; forecasts need clearer links to funded early action.',
    outcome:'A common readiness picture, pre-positioned logistics, accessible alerts and measurable early action before impact.',
    offers:['Flood-readiness digital twin with early action','Offline-first field data collection with sync','Autonomous hydrographic survey service','Resilient multi-bearer communications backbone','Sovereign object ontology and writeback layer','Federated National Resilience Twin'],
    vendors:['TSL','Exail','KONGSBERG'], color:'#7cb7ff'
  },
  {
    id:'border', icon:'public', title:'Border, coast & environmental crime', horizon:'6–30 months', lead:'Customs / Immigration / Navy / regulators',
    problem:'Smuggling, trafficking, illegal fishing, illegal mining and environmental crime cross agency and geographic boundaries.',
    outcome:'Shared risk indicators, defensible referrals and coordinated patrol planning at an aggregated level with judicial oversight.',
    offers:['AI-assisted surveillance and preventive analysis','Predictive policing and patrol optimisation','Evidence and chain-of-custody interoperability','Autonomous drone airport facility','National maritime picture pilot (bounded area)','Sovereign object ontology and writeback layer'],
    vendors:['TSL','KONGSBERG','Exail'], color:'#b8a1ff'
  },
  {
    id:'cyber', icon:'security', title:'Cyber & information resilience', horizon:'0–24 months', lead:'ONSA / NITDA / sector CSIRTs',
    problem:'National services face cyber risk, data fragmentation, vendor lock-in, disinformation and weak cross-sector incident learning.',
    outcome:'Sovereign, federated security operations with common standards, recovery metrics, auditability and public-trust controls.',
    offers:['Federated security data platform with Sovereign control','Sovereign AI lab and compute centre','AI assurance and trust office for security analytics','Sovereign object ontology and writeback layer','Command, control and coordination modernisation','Predictive policing and patrol optimisation'],
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
    summary: 'Easy ways for the public to report incidents safely — phone, SMS, USSD or web — routing verified reports into existing police and agency case systems.',
    what_it_solves: ['Agencies overloaded with unverified tips', 'No safe way for people to report', 'Rural areas left out'],
    dependencies: ['Agencies assign receiving officers and response times', 'Protection policy for reporters', 'A way to give feedback to reporters'],
    components: ['Reporting by voice, SMS, USSD and web', 'Reporter identity protected automatically', 'Case numbers and status tracking', 'Feedback and protection support'],
    value: 'Verified reports reach the right team faster; public trust grows; duplicate tips drop.',
    owners: ['Police', 'ONSA', 'States'],
    vendors: ['neutral', 'TSL'],
    icon: 'call', tag: 'Community trust',
  },
    {
    id: 'sol-02',
    complexity: 1,
    title: 'Incident taxonomy and shared case tracking',
    summary: 'One national way to classify incidents and a simple shared tracker so every agency sees who owns what within agreed response times.',
    what_it_solves: ['Agencies describe incidents differently', 'Referrals get lost or duplicated', 'No one knows when a referral was picked up'],
    dependencies: ['Agencies agree on definitions', 'Simple identity for receiving officers', 'Response times published'],
    components: ['Common incident categories', 'Shared tracker with timestamps', 'Automatic alerts when response times slip', 'Simple leadership dashboard'],
    value: 'The time between a verified report and an agency accepting it drops measurably.',
    owners: ['ONSA', 'Police', 'NEMA'],
    vendors: ['TSL', 'neutral'],
    icon: 'track_changes', tag: 'Interoperability',
  },
    {
    id: 'sol-03',
    complexity: 2,
    title: 'Offline-first field data collection with sync',
    summary: 'Field apps that work with no signal — inspections, surveys, damage checks and evidence — then sync when connectivity returns.',
    what_it_solves: ['No coverage in rural and remote areas', 'Data lost when devices go offline', 'No way to verify field data'],
    dependencies: ['Device management plan', 'Agencies accept the sync model', 'Agreed validation rules'],
    components: ['Offline-first field apps', 'Signatures, photos and GPS captured in the field', 'Conflict-safe sync gateway', 'Data quality scoring'],
    value: 'Evidence-grade field records; more inspections completed each day.',
    owners: ['Sector inspectors', 'NHA', 'NEMA', 'Police'],
    vendors: ['TSL', 'neutral'],
    icon: 'offline_bolt', tag: 'Field operations',
  },
    {
    id: 'sol-04',
    complexity: 2,
    title: 'Resilient multi-bearer communications backbone',
    summary: 'Backup communications for responders using radio, mobile and satellite, with automatic switching and priority for life-safety traffic.',
    what_it_solves: ['One network failure cuts responders off', 'Emergency traffic gets no priority', 'No fallback when mobile coverage drops'],
    dependencies: ['Coverage maps per area', 'Priority agreements with operators', 'Backup power at sites'],
    components: ['Multi-network gateways', 'Automatic failover and priority queues', 'Portable responder kits', 'Uptime dashboard'],
    value: 'Responder comms survive outages; help arrives faster where coverage is poor.',
    owners: ['Nigerian Communications Commission', 'States', 'NEMA'],
    vendors: ['KONGSBERG', 'TSL'],
    icon: 'wifi', tag: 'Continuity',
  },
    {
    id: 'sol-05',
    complexity: 2,
    title: 'Local maintenance, calibration and spares centre',
    summary: 'A TSL-run repair and calibration centre with manufacturer certification for maritime, survey and sensor equipment, holding local spares.',
    what_it_solves: ['Equipment waits months for overseas spares', 'Few local technicians', 'Ad-hoc support is expensive'],
    dependencies: ['Site and land agreement', 'Manufacturer certification', 'Local technician training'],
    components: ['Certified workshop', 'Calibration lab', 'Spares stock policy', 'Repair service with response targets'],
    value: 'Repair times and costs drop; equipment availability rises across regions.',
    owners: ['NHA', 'NIMASA', 'Navy'],
    vendors: ['KONGSBERG', 'Exail', 'TSL'],
    icon: 'precision_manufacturing', tag: 'Lifecycle',
  },
    {
    id: 'sol-06',
    complexity: 3,
    title: 'National maritime picture pilot (bounded area)',
    summary: 'A small-area pilot that fuses licensed ship tracking, coastal sensors and satellite data into one shared, auditable picture.',
    what_it_solves: ['Maritime awareness is fragmented', 'No shared picture between agencies', 'Coverage is patchy'],
    dependencies: ['Approved data sources and sharing agreements', 'A defined pilot area', 'Human review before any enforcement'],
    components: ['Sensor and feed integration', 'Ship-tracking and satellite correlation', 'Operator workbench with audit trail', 'Scale decision with lessons learned'],
    value: 'Better search and rescue support; a defensible, auditable maritime picture.',
    owners: ['NIMASA', 'Navy', 'NHA'],
    vendors: ['KONGSBERG', 'Exail', 'TSL'],
    icon: 'public', tag: 'MDA',
  },
    {
    id: 'sol-07',
    complexity: 3,
    title: 'Digital twin of a consenting critical asset',
    summary: 'A limited digital twin of one TSL-managed pipeline or terminal, bringing asset, inspection, maintenance and risk data into a single view.',
    what_it_solves: ['Asset data scattered across systems', 'Repairs are reactive', 'No single integrity view'],
    dependencies: ['Asset owner consent', 'Data-sharing agreement', 'Agreed risk tiers'],
    components: ['Connectors to asset and inspection data', 'Condition models', 'Inspection scheduling by risk', 'Work-order integration'],
    value: 'Higher uptime and safety; lower downtime and inspection cost.',
    owners: ['Sector owners', 'ONSA'],
    vendors: ['KONGSBERG', 'TSL'],
    icon: 'precision_manufacturing', tag: 'Asset integrity',
  },
    {
    id: 'sol-08',
    complexity: 3,
    title: 'National asset knowledge graph (abstracted)',
    summary: 'A national map of critical assets and what they depend on — shared attributes only, no sensitive locations.',
    what_it_solves: ['No view of cross-sector dependencies', 'Recovery plans unknown during incidents', 'Duplicate asset lists'],
    dependencies: ['Agencies share attributes, not coordinates', 'A data steward per sector', 'Clear use cases and access rules'],
    components: ['Asset and dependency model', 'Ownership and source metadata', 'Recovery plan links', 'Controlled query access'],
    value: 'Better incident prioritisation; faster, coordinated recovery.',
    owners: ['ONSA', 'Sector owners', 'NEMA'],
    vendors: ['TSL', 'KONGSBERG'],
    icon: 'account_tree', tag: 'Dependencies',
  },
    {
    id: 'sol-09',
    complexity: 3,
    title: 'NNS LANA readiness and lifecycle review',
    summary: 'Manufacturer-led health check of survey ship NNS LANA plus a TSL support plan for spares, crew training and data flow.',
    what_it_solves: ['Unclear vessel availability', 'Spare-part risk', 'Weak link to national chart production'],
    dependencies: ['Navy and hydrographic agency approval', 'Manufacturer access to survey systems', 'Crew and training data'],
    components: ['Technical health report', 'Upgrade options', 'Spares and support plan', 'Crew training pathway'],
    value: 'More survey days per year; fewer capability gaps.',
    owners: ['NHA', 'Navy'],
    vendors: ['KONGSBERG', 'TSL'],
    icon: 'directions_boat', tag: 'Hydrography',
  },
    {
    id: 'sol-18',
    complexity: 3,
    title: 'AI-assisted surveillance and preventive analysis',
    summary: 'Analytics that find patterns across cameras, radar, ship tracking and communications — with a human reviewing every alert.',
    what_it_solves: ['Sensor feeds sit in silos', 'False alarms overwhelm analysts', 'No cross-domain correlation'],
    dependencies: ['Sensor coverage plan', 'Agency escalation procedure', 'Data retention and deletion policy'],
    components: ['On-site analytics on cameras and radar', 'Cross-feed correlation', 'Alert triage with audit trail', 'Model-drift monitoring'],
    value: 'Fewer missed events; analysts spend time on investigation.',
    owners: ['Nigerian Army Intelligence', 'NSCDC', 'NIMASA'],
    vendors: ['TSL', 'KONGSBERG', 'neutral'],
    icon: 'visibility', tag: 'Surveillance',
  },
    {
    id: 'sol-10',
    complexity: 4,
    title: 'Autonomous hydrographic survey service',
    summary: 'Survey campaigns as a service using unmanned boats and manufacturer sonar, producing chart-ready data while local teams build skill.',
    what_it_solves: ['Ship-based surveys are slow and costly', 'Offshore and river areas undercovered', 'Data quality varies'],
    dependencies: ['Maritime authorisation', 'International chart standards', 'Agreed crew model'],
    components: ['Unmanned survey operations', 'Sensor and data workflow', 'Quality checks before chart handoff', 'Local crew training'],
    value: 'Faster, safer surveys; certified Nigerian operators.',
    owners: ['NHA', 'Navy', 'States'],
    vendors: ['Exail', 'KONGSBERG', 'TSL'],
    icon: 'waves', tag: 'Blue economy',
  },
    {
    id: 'sol-11',
    complexity: 4,
    title: 'Federated security data platform with Sovereign control',
    summary: 'A shared, securely controlled platform where agencies work together without handing over their raw data.',
    what_it_solves: ['Data held in foreign clouds against policy', 'Tool lock-in', 'Weak access control and audit'],
    dependencies: ['Agency mandates and legal basis', 'Nigeria-held encryption keys', 'Agreed records schedule'],
    components: ['Identity and role-based access', 'API gateway and data catalogue', 'Audit, retention and deletion', 'Strict network controls'],
    value: 'Trusted data sharing and reuse across missions.',
    owners: ['ONSA', 'NITDA', 'Nigerian Data Protection Commission'],
    vendors: ['TSL', 'neutral'],
    icon: 'security', tag: 'Sovereignty',
  },
    {
    id: 'sol-12',
    complexity: 4,
    title: 'Flood-readiness digital twin with early action',
    summary: 'A flood model joining public forecasts, service dependencies, logistics and shelter capacity — with funding agreed before the flood.',
    what_it_solves: ['Forecasts never become action', 'Dependencies are invisible', 'Early action arrives too late'],
    dependencies: ['Public forecast feeds', 'Service maps from owners', 'Pre-approved emergency budgets'],
    components: ['Flood hazard model', 'Dependency map', 'Logistics and shelter view', 'Early-action triggers'],
    value: 'Decisions move earlier; loss of life and economic damage fall.',
    owners: ['NEMA', 'NiMet', 'States', 'NIHSA'],
    vendors: ['TSL', 'KONGSBERG'],
    icon: 'flood', tag: 'Climate',
  },
    {
    id: 'sol-13',
    complexity: 4,
    title: 'Evidence and chain-of-custody interoperability',
    summary: 'Digital evidence with proven chain of custody, shared across agencies for kidnapping, banditry and maritime cases.',
    what_it_solves: ['Evidence lost in handoffs', 'Custody cannot be proven', 'Weak case files delay trials'],
    dependencies: ['Court-approved standards', 'Digital signature regime', 'Prosecutor buy-in'],
    components: ['Evidence capture and sealing', 'Tamper-evident custody record', 'Inter-agency handoff protocol', 'Court-ready file generation'],
    value: 'Higher conviction rates; faster justice.',
    owners: ['Police', 'Navy', 'NBS', 'Prosecutors'],
    vendors: ['TSL', 'neutral'],
    icon: 'gavel', tag: 'Justice',
  },
    {
    id: 'sol-17',
    complexity: 4,
    title: 'Sovereign AI lab and compute centre',
    summary: 'On-shore AI compute and experimentation space for building, testing and validating models with controlled access to agency data.',
    what_it_solves: ['Capability depends on foreign clouds', 'No controlled training environment', 'Untrusted data enters model development'],
    dependencies: ['Reliable power', 'Approved data-sharing rules', 'Cleared staff'],
    components: ['On-site GPU compute', 'Isolated data rooms', 'Training and evaluation pipelines', 'Experiment tracking'],
    value: 'Less reliance on foreign infrastructure; auditable, faster model development.',
    owners: ['Nigerian Army Intelligence', 'NITDA', 'ONSA'],
    vendors: ['TSL', 'neutral'],
    icon: 'smart_toy', tag: 'AI capability',
  },
    {
    id: 'sol-20',
    complexity: 4,
    title: 'Predictive policing and patrol optimisation',
    summary: 'A tasking engine that scores where and when incidents are likely, works out the best patrol plan, and sends it to field command systems. People authorise every step.',
    what_it_solves: ['Patrols assigned by habit, not evidence', 'Hotspots spotted too late', 'No loop from prediction to deployment'],
    dependencies: ['Lawful incident and patrol data', 'Named authorisers', 'Model register and override log'],
    components: ['Place and time risk scoring', 'Patrol optimisation', 'Writeback to command systems', 'Analyst workbench with explanations'],
    value: 'Higher hit-rate on crime windows; fewer wasted patrol hours.',
    owners: ['Police', 'ONSA', 'NSCDC', 'Navy'],
    vendors: ['TSL', 'KONGSBERG', 'neutral'],
    icon: 'online_prediction', tag: 'Predictive ops',
  },
    {
    id: 'sol-14',
    complexity: 5,
    title: 'Federated National Resilience Twin',
    summary: 'A national decision platform across all six mission areas — owned by the missions, operated by TSL.',
    what_it_solves: ['National resilience data lives in silos', 'No common readiness view', 'Hard to rehearse multi-domain scenarios'],
    dependencies: ['Mandate and legal basis', 'Agency sharing agreements', 'Independent audit'],
    components: ['Federated data and identity', 'Knowledge and scenario model', 'Readiness dashboards and simulation', 'Human-authorised decisions'],
    value: 'Coordinated national readiness; faster response across missions.',
    owners: ['ONSA', 'NEMA', 'Sector owners'],
    vendors: ['TSL', 'KONGSBERG', 'Exail'],
    icon: 'hub', tag: 'National twin',
  },
    {
    id: 'sol-15',
    complexity: 5,
    title: 'Command, control and coordination modernisation',
    summary: 'An upgrade of federal and zonal coordination centres connecting owners, the common picture and workflow — no duplicated command.',
    what_it_solves: ['Outdated, disconnected command systems', 'Poor cross-agency visibility', 'No shared escalation flow'],
    dependencies: ['Command structure agreement', 'Existing equipment inventory', 'Staff training and change support'],
    components: ['Common-picture workbench', 'Workflow engine', 'Voice, data and video integration', 'Exercise and rehearsal tools'],
    value: 'Faster escalation and authorised response; command lines stay intact.',
    owners: ['ONSA', 'NEMA', 'NIMASA', 'States'],
    vendors: ['KONGSBERG', 'TSL'],
    icon: 'leaderboard', tag: 'C4I',
  },
    {
    id: 'sol-16',
    complexity: 5,
    title: 'AI assurance and trust office for security analytics',
    summary: 'An office that governs every AI system: a public register, assessments, human review and a complaints path.',
    what_it_solves: ['AI decisions cannot be audited', 'Bias and explainability concerns', 'No recourse for affected people'],
    dependencies: ['Legal mandate', 'Funding and staffing', 'Agency participation'],
    components: ['Algorithm register', 'Impact assessments', 'Model documentation and confidence labels', 'Complaints and audit workflow'],
    value: 'Public trust in automated assistance; compliant, defensible analytics.',
    owners: ['ONSA', 'Nigerian Data Protection Commission', 'Civil society'],
    vendors: ['TSL', 'neutral'],
    icon: 'psychology', tag: 'Governance',
  },
    {
    id: 'sol-19',
    complexity: 5,
    title: 'Autonomous drone airport facility',
    summary: 'A drone port handling takeoff, landing, charging and dispatch automatically, tied into air-traffic coordination for remote-area coverage.',
    what_it_solves: ['Long-range drones lack safe recovery', 'Manual recovery loses assets remotely', 'No link to national airspace management'],
    dependencies: ['Aviation authority clearance', 'Reliable power', 'Certified remote operators'],
    components: ['Automated landing pad and nets', 'Charging and payload swap', 'Air-traffic de-confliction', 'Tasking with geo-fencing'],
    value: 'Continuous wide-area coverage without aircrew risk; fewer lost assets.',
    owners: ['NAMA', 'Nigerian Air Force', 'Nigerian Army Intelligence'],
    vendors: ['KONGSBERG', 'TSL', 'Exail'],
    icon: 'flight', tag: 'Air mobility',
  },
    {
    id: 'sol-21',
    complexity: 5,
    title: 'Sovereign object ontology and writeback layer',
    summary: 'A shared data model for vessels, assets, incidents, alerts, patrols and surveys. Agencies keep their own systems; decisions flow back into live operations.',
    what_it_solves: ['Agencies cannot share without pooling raw data', 'No source or confidence on claims', 'Analytics never reach operations'],
    dependencies: ['Each agency owns its objects', 'Role-based access', 'Writeback agreements with source systems'],
    components: ['Shared object model', 'Identity resolution with lineage', 'Writeback connectors', 'Operations workbench'],
    value: 'One operational picture with source control intact; analytics change what crews do.',
    owners: ['ONSA', 'NITDA', 'NIMASA', 'Police'],
    vendors: ['TSL', 'neutral'],
    icon: 'schema', tag: 'Ontology',
  },
    {
    id: 'sol-22',
    complexity: 5,
    title: 'Deep-sea survey vessel acquisition (TSL-Colossus)',
    summary: 'Financed survey ship for the hydrographic agency: interim capability in 4 months by reactivating NNS LANA, permanent deep-sea ship in 12-24 months.',
    what_it_solves: ['No sovereign deep-sea survey ship', 'Chartering costs money and leaves no national asset', 'NNS LANA currently not survey-ready'],
    dependencies: ['Agency mandate and treasury path', 'Joint condition assessment of NNS LANA first', 'Manufacturer support for sonar systems'],
    components: ['NNS LANA reactivation as interim step', 'New or upgraded flagship with on-board labs', 'Usage-linked financing (36-60 months)', 'Joint operations and chart revenue model'],
    value: 'Surveying starts in months; Nigeria owns the capability instead of renting it.',
    owners: ['NHA', 'Navy', 'Ministry of Finance'],
    vendors: ['TSL', 'KONGSBERG'],
    icon: 'sailing', tag: 'Hydrography',
  }
];;

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
      ['NNS LANA readiness and lifecycle review','OEM health and obsolescence assessment plus TSL lifecycle-support plan for national hydrography.'],
      ['AI-assisted surveillance and preventive analysis','Edge-to-federated analytics stack for pattern detection across camera, radar, AIS and comms feeds with human-in-the-loop alerting.']
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
      ['Sovereign AI lab and compute centre','On-soil AI compute facility for training, testing and validating sovereign models with controlled agency-data access and algorithmic oversight.'],
      ['Predictive policing and patrol optimisation','Risk scoring of place, time and route with named human authorisers, patrol solver and writeback into agency C2.']
    ]
  },
  {
    group: 'National-scale coordination and governance (complexity 5)',
    icon: 'account_balance',
    items: [
      ['Federated National Resilience Twin','Federated decision platform across all six mission threads, mission-owned and TSL-operated.'],
      ['Command, control and coordination modernisation','Modernised federal/zonal coordination centres connecting picture, workflow and mission owners.'],
      ['AI assurance and trust office for security analytics','Governance function for algorithmic assistance via register, assessments, human review and recourse.'],
      ['Autonomous drone airport facility','End-to-end verti-port for UAV takeoff, landing, charging and automated dispatch integrated with air-traffic coordination.'],
      ['Sovereign object ontology and writeback layer','Foundry-class object model with provenance and writeback so analytics change what crews actually do.'],
      ['Deep-sea survey vessel acquisition (TSL-Colossus)','Financed UNCLOS/CLCS-capable flagship for NHA: interim via NNS LANA rehab in 4 months, permanent hull in 12–24.']
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
  ['Governance & assurance','Standards-based, auditable integration and compliance','Trusted autonomy with human review and safety cases','Sovereign oversight, DPIA, records, redress and audit'],
  ['Predictive ops & platform','C2 and MDA data feeds for pattern models','Mission software, data processing and remote operations','TSL ontology, writeback adapters and Nigerian field delivery'],
  ['Deep-sea survey hull','EM2040/EM304, SBP, SSS, DP, AUV/ROV LARS','Inertial positioning for deep-water survey ops','TSL-Colossus finance, joint operations and NNS LANA rehab']
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
    ['AI surveillance & analytics','service',220,550],
    ['Autonomous drone airport','service',900,490],
    ['Predictive policing & patrol optimisation','service',330,620],
    ['Sovereign ontology & writeback','platform',560,120],
    ['TSL-Colossus deep-sea vessel','service',120,250],
    ['NNS LANA rehab track','service',60,340],
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
    ['AI assurance & trust office','governs','AI surveillance & analytics'],
    ['Federated Security Data Platform','enables','AI surveillance & analytics'],
    ['AI surveillance & analytics','supports','Cyber & information resilience'],
    ['Autonomous drone airport','provides aerial sensing to','Border, coast & environmental crime'],
    ['Autonomous drone airport','extends','Maritime security & blue economy'],
    ['Autonomous drone airport','de-conflicts via','National Resilience Twin'],
    // Ontology + predictive spine
    ['Sovereign ontology & writeback','enables','Predictive policing & patrol optimisation'],
    ['Sovereign ontology & writeback','enables','Evidence & chain of custody'],
    ['Sovereign ontology & writeback','supports','National Resilience Twin'],
    ['Predictive policing & patrol optimisation','supports','Community safety & kidnapping prevention'],
    ['Predictive policing & patrol optimisation','supports','Border, coast & environmental crime'],
    ['Predictive policing & patrol optimisation','supports','Maritime security & blue economy'],
    ['AI surveillance & analytics','feeds','Predictive policing & patrol optimisation'],
    ['Autonomous drone airport','feeds','Predictive policing & patrol optimisation'],
    // Colossus hydrography track
    ['TSL-Colossus deep-sea vessel','extends','Maritime security & blue economy'],
    ['TSL-Colossus deep-sea vessel','supports','Cyber & information resilience'],
    ['NNS LANA rehab track','interim for','TSL-Colossus deep-sea vessel'],
    ['KONGSBERG','provides survey stack to','TSL-Colossus deep-sea vessel'],
    ['KONGSBERG','equips','NNS LANA rehab track'],
    ['TSL Logistics','finances','TSL-Colossus deep-sea vessel'],
    ['TSL Logistics','operates','NNS LANA rehab track'],
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
  ['Predictive tasking','Patrols and survey tasking written back from risk models with named human sign-off','100% of model-generated tasking authorised before dispatch'],
  ['Platform spine','Priority object types with an agency owner and a writeback adapter','≥ 90% by Phase 2'],
  ['Hydrography','NNS LANA Phase-1 assessment complete; interim survey capability live','Assessment ≤ 6 weeks; interim ≤ 4 months of award'],
  ['Economic value','Avoided downtime, survey vessel days and duplicated procurement','Audited benefit case annually']
];

export const guardrails = [
  ['Mission before data','Collect only what a defined, lawful public-safety or resilience service needs.'],
  ['Federated by default','Agencies retain source authority; share minimum necessary views and claims.'],
  ['Human accountability','Models advise. Named public officials authorise consequential action.'],
  ['Accountable predictive tasking','Models score place, time and route. Named officials authorise every tasking. Overrides logged. No automated arrest or enforcement.'],
  ['Provenance and confidence','Every claim shows source, timestamp, quality, transformation and confidence.'],
  ['Role and purpose controls','Attribute- and purpose-based access, strong authentication and recurring recertification.'],
  ['Retention and deletion','Time-bound records schedules, legal holds, verified deletion and immutable access logs.'],
  ['Independent oversight','DPIA, algorithm register, complaint/redress path and periodic external audit.'],
  ['Sovereignty and exit','Nigeria-controlled keys, local data residency where required, open interfaces and export rights.'],
  ['Safety and security','Zero-trust architecture, segmentation, secure update chain, backups and tested recovery.']
];

export const sources = [
  {tag:'TSL-Colossus confidential',private:true,title:'Securing Nigeria\u2019s Advanced Hydrographic Future',org:'TSL-Colossus Consortium',url:'',note:'Private client proposal: financed deep-sea survey vessel ($100\u2013150M asset, 15\u201320% NHA commitment, LTO 36\u201360 months, interim capability in 4 months). Treated as proposal assertions, not agreed terms.'},
  {tag:'TSL-Colossus confidential',private:true,title:'NNS Lana Rehabilitation Proposal',org:'TSL-Colossus Consortium',url:'',note:'Private client proposal: NNS LANA (OCEA 2018, 60.1m, EM2040/EM304, SEAPATH 380-5, HIPAP) rehabilitation as the interim hydrography track \u2014 joint condition assessment 4\u20136 weeks before any repair cost.'},
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
  'Predictive policing and surveillance analytics are internal offer options: models score place, time and route; named officials authorise every tasking; overrides are logged. No automated arrest or enforcement.',
  'TSL-Colossus figures (asset value, commitment %, timelines, ENC revenue) are proposal assertions from the two consortium documents, not agreed contract terms. They require NHA and Ministry of Finance discovery.',
  'Product references describe documented vendor capabilities; all Nigeria-specific combinations are TSL strategic proposals subject to discovery, export controls and procurement.',
  'The two TSL consortium documents were ingested as pasted extracts, not reviewed as original signed PDFs.',
  'Any production system requires agency mandate, legal review, DPIA, cyber accreditation, data-sharing agreements and independent safeguards assurance.'
];
