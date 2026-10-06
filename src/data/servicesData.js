/**
 * Global Vessel Management (GVM) - Services Data
 * Sourced directly from GVM website raw HTML files.
 * Covers all 12 services across Ship Management and Specialized Maritime Services.
 */

export const servicesData = [
  {
    id: 'tankers',
    slug: 'tankers',
    path: '/service/ship-management/tankers',
    title: 'Tankers',
    subtitle: 'Specialized Liquid Bulk, Chemical & Cryogenic Gas Carrier Management',
    category: 'Ship Management',
    categorySlug: 'ship-management',
    bannerImg: '/assets/uploads/2025/07/service-banner.png',
    mainImg: '/assets/uploads/2025/07/Picture1-2-1.png',
    gallery: [
      '/assets/uploads/2025/07/Picture2-2.png',
      '/assets/uploads/2025/07/Picture3-2.png'
    ],
    shortDescription: 'Comprehensive management of crude oil, refined product, chemical, LNG, and LPG tankers with exemplary safety records and stringent OCIMF SIRE compliance.',
    description: [
      "At GVM, we specialize in the management of tanker vessels, which play a vital role in transporting liquid bulk cargoes, including crude oil, refined products, chemicals, and liquefied gases. With our extensive experience, we offer comprehensive ship management services designed to ensure the highest standards of safety, operational efficiency, and regulatory compliance.",
      "Tankers are designed to carry liquid cargo in large quantities, and each type of tanker is specifically engineered for the cargo it transports. We focus on safety at every level, ensuring all vessels comply with international regulations and environmental standards, and we pride ourselves on consistently strong safety records.",
      "Our tankers come in various sizes, from Aframax (80,000 – 120,000 DWT) to Very Large Crude Carriers (VLCC) and Ultra Large Crude Carriers (ULCC), with each type tailored to different operational needs. We focus on safety at every level, ensuring all vessels comply with international regulations and environmental standards, and we pride ourselves on consistently strong safety records.",
      "With GVM, you benefit from a team of experienced professionals, a comprehensive safety culture, and the latest technologies in vessel management. Our services range from routine maintenance to complex technical management, all aimed at ensuring your tankers operate at peak performance, safely and efficiently.",
      "Whether you're operating a single vessel or a large fleet, we are your trusted partner in managing tanker operations, ensuring that your assets are well-maintained and compliant, while delivering value at every step of the journey."
    ],
    bulletPoints: [
      "Crude Oil Tankers: Transport unrefined crude oil from extraction points to refineries worldwide.",
      "Product Tankers: Carry refined petroleum products such as diesel, gasoline, and jet fuel with segregated tank systems.",
      "Chemical Tankers: Designed for the transport of complex hazardous liquid chemicals, requiring specialized stainless steel containment.",
      "LNG Carriers: Transport liquefied natural gas at cryogenic temperatures (-162°C) in highly insulated membrane and spherical tanks.",
      "LPG Carriers: Carry liquefied petroleum gas under pressure or refrigeration, ensuring safe transportation of propane and butane."
    ],
    vesselTypes: [
      { name: 'Aframax Tankers', range: '80,000 – 120,000 DWT', use: 'Regional crude oil trading and short-to-medium haul routes' },
      { name: 'Suezmax Tankers', range: '120,000 – 200,000 DWT', use: 'Versatile deepwater trading capable of full transit through the Suez Canal' },
      { name: 'VLCC (Very Large Crude Carriers)', range: '200,000 – 320,000 DWT', use: 'Long-haul intercontinental crude transportation from Middle East to world refineries' },
      { name: 'ULCC (Ultra Large Crude Carriers)', range: '320,000 – 550,000+ DWT', use: 'Maximum-capacity global crude bulk movements and floating storage' }
    ],
    specifications: [
      { label: 'Managed Vessel Classes', value: 'Handysize, MR, LR1, LR2, Aframax, Suezmax, VLCC, ULCC' },
      { label: 'Deadweight Tonnage (DWT)', value: '25,000 to 320,000+ DWT' },
      { label: 'Cargo Systems Managed', value: 'FRAMO submerged pumps, crude oil washing (COW), inert gas generators (IGS)' },
      { label: 'Vetting Accreditations', value: 'OCIMF SIRE 2.0, CDI, TMSA 3, Flag State, Port State Control (PSC)' },
      { label: 'Environmental Standards', value: 'MARPOL Annex I & II, Ballast Water Management (BWMS), Tier III NOx' }
    ],
    coreCapabilities: [
      'Comprehensive vetting inspection management and TMSA compliance audits',
      'Advanced cargo handling oversight, tank cleaning, and inerting operations',
      'Full technical management and class-approved Planned Maintenance Systems (PMS)',
      'High-retention crew staffing with specialized oil/chemical/gas endorsements',
      '24/7 technical and emergency response superintendence'
    ],
    safetyStandards: 'Full compliance with OCIMF SIRE 2.0 vetting protocols, CDI chemical tanker inspections, TMSA Level 3+ KPIs, and strict zero-spill environmental stewardship.'
  },
  {
    id: 'bulk-carriers',
    slug: 'bulk-carriers',
    path: '/service/ship-management/bulk-carriers',
    title: 'Bulk Carriers',
    subtitle: 'Global Dry Bulk Fleet Management & Operational Excellence',
    category: 'Ship Management',
    categorySlug: 'ship-management',
    bannerImg: '/assets/uploads/2025/07/Picture1.png',
    mainImg: '/assets/uploads/2025/07/Picture3-1.png',
    gallery: [
      '/assets/uploads/2025/07/Picture2.png'
    ],
    shortDescription: 'Expert superintendence of Handysize, Panamax, Capesize, and VLOC dry bulk vessels moving essential raw materials with optimal fuel efficiency and safety.',
    description: [
      "At GVM, we provide expert management services for bulk carriers, vessels designed to transport unpackaged bulk cargo, such as coal, grain, ore, and fertilizers, across global shipping routes. Bulk carriers are vital to the world economy, moving large volumes of raw materials that are essential to various industries, and we ensure that these operations are carried out with the utmost efficiency and safety.",
      "Our bulk carrier management services are designed to enhance operational performance while maintaining high standards of safety, regulatory compliance, and environmental responsibility. We offer a range of services including daily vessel management, crewing, maintenance, and technical support, all tailored to the specific needs of bulk carriers.",
      "Bulk carriers come in several sizes, from Handysize (10,000 – 40,000 DWT) to Panamax (60,000 – 80,000 DWT), Capesize (80,000 – 180,000 DWT), and Very Large Ore Carriers (VLOC), each optimized for different types of cargo and trade routes. We manage these vessels with a focus on safety, ensuring that they operate with optimal fuel efficiency, meet international environmental standards, and are fully compliant with all safety regulations.",
      "Whether you're transporting coal to power stations, grain to ports, or ore to steel mills, GVM is committed to managing your fleet with precision and care. We focus on the long-term performance of your vessels, with experienced crews and technical expertise to maximize uptime and minimize operational disruptions.",
      "With our global reach and comprehensive vessel management services, GVM ensures that your bulk carriers are operating at their full potential, safely and profitably, wherever they are in the world."
    ],
    bulletPoints: [
      "Handysize (10,000 – 40,000 DWT): Agile regional traders with on-board cargo cranes and grabs for versatile port access.",
      "Handymax & Supramax (40,000 – 60,000 DWT): High-versatility workhorses servicing major global bulk trade routes.",
      "Panamax & Kamsarmax (60,000 – 85,000 DWT): Dimensionally optimized for grain, coal, and bauxite shipments through international waterways.",
      "Capesize (80,000 – 180,000 DWT): Long-haul heavy mineral movers delivering high-tonnage iron ore and coking coal.",
      "Very Large Ore Carriers (VLOC) (200,000 – 400,000+ DWT): Massive dedicated bulk transit maximizing economies of scale."
    ],
    vesselTypes: [
      { name: 'Handysize / Supramax', range: '10,000 – 60,000 DWT', use: 'Geared bulkers carrying grains, fertilizers, steel products, and minor bulks' },
      { name: 'Panamax / Post-Panamax', range: '65,000 – 95,000 DWT', use: 'Agricultural commodities, thermal coal, and bauxite across deepwater channels' },
      { name: 'Capesize', range: '100,000 – 180,000 DWT', use: 'Dedicated iron ore and coal corridors linking Australia, Brazil, and worldwide steel mills' },
      { name: 'Valemax / VLOC', range: '200,000 – 400,000 DWT', use: 'Ultra-heavy mineral freight operations' }
    ],
    specifications: [
      { label: 'Fleet Deadweight Scope', value: '10,000 to 400,000+ DWT' },
      { label: 'Cargo Gear Supervised', value: 'Electro-hydraulic deck cranes, grabs, conveyor systems, hatch covers' },
      { label: 'Structural Safety Monitoring', value: 'SOLAS XII bulk carrier safety, hold water ingress detection, hull stress gauges' },
      { label: 'Quality & Vetting', value: 'RightShip Safety Score 5/5, Port State Control MoU compliance' },
      { label: 'Regulations', value: 'IMSBC Code, BLU Code, MARPOL Annex V, Grain Loading Code' }
    ],
    coreCapabilities: [
      'RightShip safety rating optimization and pre-vetting inspections',
      'Hold cleanliness and fumigation management for sensitive grain cargoes',
      'Comprehensive hull stress and ballast tank corrosion prevention programs',
      'Fuel optimization and CII/EEXI rating improvement schemes',
      'Prompt turnarounds during high-rate terminal loading operations'
    ],
    safetyStandards: 'IMSBC Code solid bulk cargo safety, BLU Code terminal-ship interface protocols, RightShip inspection preparation, and SOLAS double-side skin integrity inspections.'
  },
  {
    id: 'container-vessels',
    slug: 'container-vessels',
    path: '/service/ship-management/container-vessels',
    title: 'Container Vessels',
    subtitle: 'High-Paced Liner & Feeder Fleet Management',
    category: 'Ship Management',
    categorySlug: 'ship-management',
    bannerImg: '/assets/uploads/2025/07/Picture4-1.png',
    mainImg: '/assets/uploads/2025/07/Picture1-3.png',
    gallery: [
      '/assets/uploads/2025/07/Picture5-1-1.png'
    ],
    shortDescription: 'Integrated technical and operational management for feeder, Panamax, Post-Panamax, and ULCV container boxships driving seamless global supply chains.',
    description: [
      "At GVM, we provide expert management services for container ships, the backbone of global trade and commerce. These vessels are designed to transport standardized cargo in large containers, ranging from consumer goods to industrial products, across international shipping lanes. Container ships are key to the fast-moving global supply chain, and we ensure that your operations are streamlined, efficient, and meet the highest standards of safety and performance.",
      "Our services encompass all aspects of container ship management, from daily operations and crewing to maintenance and technical management. We offer customized solutions that ensure your fleet operates at peak efficiency, maximizing vessel uptime, minimizing costs, and adhering to all safety and regulatory standards.",
      "Container ships come in various sizes, from Feeder vessels (1,000 – 3,000 TEU) that serve smaller ports to Panamax (4,000 – 5,000 TEU) and Post-Panamax (5,000 – 14,000 TEU) vessels designed for large ports. Ultra Large Container Vessels (ULCV) can carry more than 20,000 TEU and are used for long-haul routes between major global ports. Each vessel type is optimized for different trade routes, port capacities, and cargo requirements, and we ensure that every vessel is managed to its fullest potential.",
      "With a focus on efficiency, safety, and reliability, GVM ensures that your container ships meet the demands of modern global shipping. We work to improve fuel efficiency, ensure compliance with environmental regulations, and implement best practices in crew management to guarantee seamless, on-time deliveries.",
      "From regional trade to transoceanic voyages, GVM is your trusted partner for container vessel operations, ensuring smooth and cost-effective transportation of goods worldwide."
    ],
    bulletPoints: [
      "Feeder Vessels (1,000 – 3,000 TEU): Coastal and regional redistribution connecting hub transshipment ports.",
      "Panamax Boxships (4,000 – 5,000 TEU): Arterial transit through canal locks and regional container hubs.",
      "Post-Panamax & New Panamax (5,000 – 14,000 TEU): Modern multi-lane container transport with high reefer intake.",
      "Ultra Large Container Vessels (ULCV) (14,000 – 24,000+ TEU): Flagship mega-carriers demanding rigorous schedule integrity."
    ],
    vesselTypes: [
      { name: 'Feeder & Regional', range: '500 – 3,000 TEU', use: 'Intra-regional feeder networks and short sea shipping' },
      { name: 'Panamax / Post-Panamax', range: '3,000 – 10,000 TEU', use: 'Transpacific, transatlantic, and Middle East trades' },
      { name: 'Neo-Panamax', range: '10,000 – 14,500 TEU', use: 'Expanded Panama Canal and global liner rotations' },
      { name: 'ULCV (Ultra Large)', range: '18,000 – 24,000+ TEU', use: 'Asia-Europe mega-corridors with strict schedule reliability' }
    ],
    specifications: [
      { label: 'Capacities Managed', value: '1,000 to 24,000+ TEU' },
      { label: 'Reefer Monitoring', value: 'Continuous electrical and temperature telemetry for temperature-sensitive cargo' },
      { label: 'Cargo Securing Systems', value: 'Lashing bridge integrity, twistlock audits, Cargo Securing Manual (CSM) compliance' },
      { label: 'Propulsion Technologies', value: 'Electronically controlled 2-stroke diesel, Dual-Fuel LNG, retrofitted energy-saving devices' },
      { label: 'Schedule Adherence', value: '> 99.2% on-time port window reliability across managed boxships' }
    ],
    coreCapabilities: [
      'Schedule precision management ensuring seamless port berth window arrivals',
      'Advanced main engine condition monitoring and auxiliary generator upkeep',
      'Specialized reefer cargo maintenance ensuring zero cold-chain losses',
      'Continuous hull hydrodynamics optimization and biofouling management',
      'Strict hazardous materials (IMDG Code) stowage and segregation audits'
    ],
    safetyStandards: 'Full compliance with IMDG Code dangerous goods stowage, SOLAS Chapter VI container weight verification (VGM), and CSS Code cargo securing rules.'
  },
  {
    id: 'leisure',
    slug: 'leisure',
    path: '/service/ship-management/leisure',
    title: 'Leisure',
    subtitle: 'Superyacht & Luxury Passenger Vessel Management',
    category: 'Ship Management',
    categorySlug: 'ship-management',
    bannerImg: '/assets/uploads/2025/07/Picture7-1.png',
    mainImg: '/assets/uploads/2025/07/Picture8-1.png',
    gallery: [
      '/assets/uploads/2025/07/Picture9-1.png'
    ],
    shortDescription: 'White-glove yacht and cruise management combining five-star hospitality standards with flawless technical superintendence and safety.',
    description: [
      "At GVM, we specialize in the management of leisure ships, which include luxury yachts, cruise ships, and other high-end recreational vessels. These ships are designed to provide an exceptional experience for passengers, offering luxury, comfort, and top-tier service while navigating some of the world's most scenic waterways. Our dedicated team ensures that every aspect of your leisure vessel is managed with the highest standards of safety, operational efficiency, and guest satisfaction.",
      "We provide a full range of management services tailored to leisure vessels, from daily operational oversight to crewing, maintenance, and safety compliance. Our expert teams work to ensure that your vessel operates smoothly, with no detail overlooked, so your passengers enjoy the very best in maritime luxury.",
      "Leisure vessels can range from superyachts (30m – 100m+ in length) to luxury cruise ships that carry thousands of passengers. Each type of leisure ship requires unique management solutions that include impeccable service standards, advanced onboard systems, and the highest levels of crew professionalism. We ensure that your vessel's operations are seamless, whether it's a private yacht for exclusive charters or a luxury cruise ship for international voyages.",
      "At GVM, we focus on optimizing the performance of your leisure vessel, improving fuel efficiency, maintaining a pristine safety record, and ensuring that every guest's journey is a memorable one. Our commitment to high standards and operational excellence ensures that your leisure vessel will remain in peak condition, ready to provide exceptional experiences to its passengers.",
      "Whether you own a private yacht, run a luxury cruise service, or manage a fleet of leisure vessels, GVM is your trusted partner in leisure ship operations, ensuring luxury, comfort, and safety on every journey."
    ],
    bulletPoints: [
      "Superyachts & Megayachts (30m – 100m+): Confidential private ownership administration and high-end charter management.",
      "Luxury Ocean Cruise Liners: Multi-deck hospitality operations, passenger hotel engineering, and worldwide itineraries.",
      "Expedition & Boutique Cruise Vessels: Remote destination operations with strict environmental and Polar Code compliance.",
      "High-Spec Day Cruisers & Catamarans: Executive marine transit, tourism, and private event vessels."
    ],
    vesselTypes: [
      { name: 'Superyachts', range: '30m – 60m length', use: 'Private pleasure craft and boutique international charters' },
      { name: 'Megayachts & Gigayachts', range: '60m – 140m+ length', use: 'Ultra-exclusive private vessels with helidecks and tenders' },
      { name: 'Expedition Cruise Ships', range: '100 – 350 passengers', use: 'Specialty exploration cruises in pristine eco-regions' },
      { name: 'Ocean Cruise Ships', range: '500 – 3,000+ passengers', use: 'Full-service international cruise line operations' }
    ],
    specifications: [
      { label: 'Vessel Lengths Managed', value: '30 meters to 250+ meters' },
      { label: 'Hotel & Hospitality', value: 'Five-star international hospitality and executive culinary standards' },
      { label: 'Technical Systems', value: 'Zero-speed dynamic stabilizers, advanced HVAC, low-vibration propulsion' },
      { label: 'Safety & Regulations', value: 'SOLAS Passenger Ship Safety, MLC 2006, Large Yacht Code (REG Code)' },
      { label: 'Environmental Controls', value: 'Advanced wastewater treatment systems (AWTS), silent battery hybrid modes' }
    ],
    coreCapabilities: [
      'Discreet yacht operational management and private family office liaison',
      'Hotel engineering: watermakers, sewage treatment, HVAC, and stabilization',
      'World-class interior, deck, and culinary crew recruitment and hospitality training',
      'Flawless safety drills and passenger evacuation preparedness',
      'Comprehensive shipyard refit, winterization, and seasonal commissioning supervision'
    ],
    safetyStandards: 'Large Yacht Code (REG Yacht Code), SOLAS Passenger Ship Safety Certification, MLC 2006 crew rights, and international public health sanitation guidelines (USPH / WHO).'
  },
  {
    id: 'offshore',
    slug: 'offshore',
    path: '/service/ship-management/offshore',
    title: 'Offshore',
    subtitle: 'Innovative, Robust, Dependable – Your Partner in Offshore Vessel Management',
    category: 'Ship Management',
    categorySlug: 'ship-management',
    bannerImg: '/assets/uploads/2025/07/Picture10-1.png',
    mainImg: '/assets/uploads/2025/07/Picture11-1.png',
    gallery: [
      '/assets/uploads/2025/07/Picture12-1.png',
      '/assets/uploads/2025/07/Picture13-1.png'
    ],
    shortDescription: 'Robust management of PSVs, AHTS, OCVs, and drillships operating in high-demand oil, gas, subsea, and offshore renewable energy environments.',
    description: [
      "At GVM, we specialize in the management of offshore vessels, which are crucial for supporting the energy, oil, gas, and renewable industries. These vessels are used for a variety of offshore operations, including drilling support, platform supply, subsea operations, and offshore construction. With a focus on safety, efficiency, and technical precision, we ensure that your offshore fleet operates smoothly, even in the most challenging environments.",
      "Our offshore vessel management services are designed to meet the demanding requirements of the offshore sector. We provide comprehensive management solutions for vessels such as platform supply vessels (PSVs), anchor handling tug supply vessels (AHTS), offshore construction vessels (OCVs), and drill ships, ensuring the highest standards of safety, operational efficiency, and regulatory compliance.",
      "Offshore vessels come in various types and sizes, each tailored for specific functions within offshore operations: Platform Supply Vessels, Anchor Handling Tug Supply Vessels, Offshore Construction Vessels, and Drill Ships.",
      "These vessels are built to withstand harsh weather conditions and operate efficiently in remote offshore environments. At GVM, we ensure that each vessel is maintained to the highest standards, minimizing downtime and maximizing productivity.",
      "With a team of seasoned experts, we manage the full spectrum of offshore vessel operations, from routine maintenance and crewing to technical and regulatory compliance, all while keeping safety as our top priority.",
      "Whether you're operating in oil and gas exploration, subsea operations, or renewable energy projects, GVM is your trusted partner in offshore vessel management, ensuring safe, efficient, and compliant operations."
    ],
    bulletPoints: [
      "Platform Supply Vessels (PSVs): Support offshore platforms by transporting drill water, fuel, mud, dry bulk, equipment, and personnel.",
      "Anchor Handling Tug Supply Vessels (AHTS): High-bollard-pull vessels for rig towing, mooring deployment, and anchor positioning.",
      "Offshore Construction Vessels (OCVs): Multi-purpose subsea construction, subsea tree installation, and offshore wind logistics.",
      "Drill Ships: Deepwater mobile drilling units equipped with advanced DP3 dynamic positioning and blow-out prevention systems.",
      "Fast Support & Crew Intervention Vessels: Rapid personnel deployment and emergency offshore standby duties."
    ],
    vesselTypes: [
      { name: 'Platform Supply Vessels (PSV)', range: '3,000 – 6,000 DWT', use: 'Deck cargo, liquid mud, brine, methanol, and base oil deliveries' },
      { name: 'Anchor Handling Tugs (AHTS)', range: '120 – 300+ Tonnes Bollard Pull', use: 'Semi-submersible rig towing, mooring anchor handling' },
      { name: 'Offshore Construction (OCV/DSV)', range: '100m – 160m length', use: 'Active heave-compensated subsea craneage and saturation diving' },
      { name: 'Drill Ships', range: 'Deepwater DP3 Units', use: 'Ultra-deepwater exploration and subsea well completion' }
    ],
    specifications: [
      { label: 'Dynamic Positioning', value: 'DP-1, DP-2, and DP-3 redundant positioning configurations' },
      { label: 'Bollard Pull Capabilities', value: 'Up to 300+ Metric Tonnes continuous pull' },
      { label: 'Offshore Vetting Compliance', value: 'IMCA Guidelines, OCIMF OVID, CMID, Shell/Aramco charter specs' },
      { label: 'Subsea Equipment Supervised', value: 'AHC subsea cranes (up to 400T), ROV hangars, helidecks' },
      { label: 'Specialized Crew', value: 'Certified DPOs, crane operators, offshore riggers, marine superintendents' }
    ],
    coreCapabilities: [
      'IMCA and OVID inspection compliance assurance and pre-charter audits',
      'Dynamic positioning annual trials, FMEA verification, and proving trials',
      'Liquid cargo pump system maintenance (mud, brine, dry bulk compressors)',
      'Subsea crane maintenance, hydraulic testing, and wire rope certification',
      'Offshore wind turbine installation and cable-laying support logistics'
    ],
    safetyStandards: 'Strict adherence to IMCA International Marine Contractors Association guidelines, OCIMF OVID inspection standards, and offshore oil major safety charters.'
  },
  {
    id: 'lng',
    slug: 'lng',
    path: '/service/ship-management/lng',
    title: 'LNG',
    subtitle: 'A New Standard in LNG and LNG-Fuelled Vessel Management',
    category: 'Ship Management',
    categorySlug: 'ship-management',
    bannerImg: '/assets/uploads/2025/07/Picture14-1.png',
    mainImg: '/assets/uploads/2025/07/Picture15-1.png',
    gallery: [
      '/assets/uploads/2025/07/Picture16-1.png',
      '/assets/uploads/2025/07/Picture17-1-scaled.png'
    ],
    shortDescription: 'Industry-leading LNG carrier and dual-fuel management, pioneering cryogenic safety, Boil-Off Gas reliquefaction, and sustainable maritime transition.',
    description: [
      "GVM offers integrated ship management and crewing services to LNG and LNG-fuelled vessel owners, delivering operational excellence through innovation, expertise, and a deep commitment to safety and compliance. As a new entrant led by a team with decades of maritime and offshore experience, GVM brings a fresh yet proven approach to managing LNG vessels, including LNG bunker and dual-fuel fleets. Our deep technical knowledge spans all containment and propulsion types, allowing us to operate LNG assets safely, efficiently, and in full alignment with international regulations.",
      "Safety and compliance are central to our operations. With systems and processes built to meet and exceed industry expectations, we strive to maintain the highest standards of operational integrity. Our approach is aligned with the requirements of Oil Majors, Flag States, and Class Societies, helping us build lasting relationships across the value chain and ensuring positive vetting outcomes.",
      "Our crewing solutions are designed to attract, develop, and retain LNG-ready talent from around the world. With a growing pool of LNG-experienced seafarers, GVM offers vessel owners consistent access to highly trained, motivated crew members who are prepared to meet the demands of LNG operations. From recruitment to deployment and career progression, we ensure the right people are on board at all times.",
      "Supporting our crewing operations is a comprehensive LNG training framework tailored to the evolving needs of the sector. As the global fleet of LNG and LNG-fuelled vessels expands, the ability to transfer experience from LPG and other adjacent sectors is becoming critical. At GVM, we have developed structured programs to transition LPG-experienced officers into LNG roles, equipping them with the skills and competencies required through simulator-based and classroom training.",
      "As the shipping industry moves toward decarbonisation, LNG continues to play a vital transitional role. GVM is well-positioned to support this shift, offering expertise in managing newbuilds, conversions, and dual-fuel vessels. Our team provides end-to-end support, combining technical excellence with commercial insight to help clients navigate this evolving landscape.",
      "Whether through full technical management or flexible crewing arrangements, GVM's services are designed around your operational goals. We take responsibility for every vessel we manage, ensuring high performance, crew wellbeing, and total transparency in every engagement."
    ],
    bulletPoints: [
      "Conventional LNG Carriers: Membrane containment (GTT No96, Mark III) and Moss sphere tank systems.",
      "LNG Bunker Vessels (LNGBVs): Specialized ship-to-ship bunkering units for maritime fuel supply.",
      "Dual-Fuel & Multi-Fuel Fleets: Dual-fuel diesel electric (DFDE), ME-GI, and X-DF propulsion management.",
      "FSRU & Floating Storage: Regasification systems and floating LNG infrastructure operations.",
      "LPG to LNG Career Pathways: Structured competency programs converting skilled gas officers."
    ],
    vesselTypes: [
      { name: 'Conventional LNG Carriers', range: '140,000 – 174,000 cbm', use: 'Global LNG export trades from Middle East to global terminals' },
      { name: 'Q-Flex & Q-Max', range: '210,000 – 266,000 cbm', use: 'High-volume long-haul cryogenic transport' },
      { name: 'LNG Bunkering Vessels', range: '5,000 – 20,000 cbm', use: 'Port and offshore ship-to-ship cryogenic bunkering' },
      { name: 'FSRUs & Dual-Fuel Cargo', range: 'Flexible setups', use: 'Offshore regasification and LNG-fueled commercial fleets' }
    ],
    specifications: [
      { label: 'Containment Types', value: 'GTT Membrane (Mark III, NO96), Moss Spherical, IMO Type C Tanks' },
      { label: 'Cargo Temperatures', value: 'Cryogenic conditions at -162°C (-260°F)' },
      { label: 'Propulsion Systems', value: 'ME-GI, X-DF, DFDE, Steam Reheat, Sub-cooler Reliquefaction Plants' },
      { label: 'Governance & Guidelines', value: 'SIGTTO Standards, IGC Code, IGF Code for dual-fuel vessels' },
      { label: 'Vetting Affiliations', value: 'OCIMF SIRE 2.0, Major Energy Charterers, Class Gas Notations' }
    ],
    coreCapabilities: [
      'Advanced Boil-Off Gas (BOG) optimization and sub-cooler reliquefaction control',
      'SIGTTO-compliant cooldown, loading, custody transfer, and gas-freeing oversight',
      'Dual-fuel high-pressure gas injection engine maintenance (ME-GI & X-DF)',
      'Simulator-certified gas engineers and cryogenic cargo masters',
      'Decarbonization pathway consulting and methane slip mitigation'
    ],
    safetyStandards: 'SIGTTO guidelines, IMO IGC Code for gas carriers, IGF Code for gas-fueled ships, and strict Energy Major vetting criteria.'
  },
  {
    id: 'new-building-supervision',
    slug: 'new-building-supervision',
    path: '/service/new-building-supervision',
    title: 'New Building Supervision',
    subtitle: 'From Concept to Completion – Building Excellence Every Step of the Way',
    category: 'Specialized Maritime Services',
    categorySlug: 'specialized-maritime-services',
    bannerImg: '/assets/uploads/2025/07/Picture1-1.png',
    mainImg: '/assets/uploads/2025/07/Picture2-1.png',
    gallery: [
      '/assets/uploads/2025/07/Picture4.png'
    ],
    shortDescription: 'Rigorous end-to-end shipyard supervision from initial design review, steel cutting, and machinery FAT testing to sea trials and delivery handover.',
    description: [
      "At GVM, we offer comprehensive newbuilding supervision services to ensure that every vessel is constructed to the highest standards of quality, safety, and performance. From the initial design phase to the final delivery, we manage the entire shipbuilding process, ensuring that every detail is executed with precision and in compliance with industry regulations.",
      "Our expert team provides meticulous oversight at each stage of construction, working closely with shipyards, designers, and contractors to ensure that your new vessel meets your operational requirements and exceeds your expectations. We focus on quality control, project management, and cost optimization, ensuring that your vessel is delivered on time and within budget.",
      "Key services include initial planning and design review, quality control and inspection, project management and progress reporting, and final delivery and handover. With GVM, you can trust that your newbuilding project will be executed with the highest level of expertise, ensuring a seamless process from start to finish."
    ],
    bulletPoints: [
      "Initial Planning and Design Review: We collaborate with you during the early stages of vessel design to ensure that specifications meet your operational and regulatory needs.",
      "Quality Control and Inspection: Our experienced team conducts regular inspections to ensure that construction meets the highest standards of craftsmanship, material quality, and safety.",
      "Project Management and Progress Reporting: We manage the project timeline, coordinate with shipyards, and provide regular updates to ensure smooth project delivery.",
      "Final Delivery and Handover: Once construction is complete, we oversee the final inspections, sea trials, and ensure that the vessel is ready for operational use."
    ],
    vesselTypes: [
      { name: 'Commercial Tankers & Gas Carriers', range: 'Newbuild & Conversion', use: 'LNG, VLCC, product tankers at leading global shipyards' },
      { name: 'Bulk Carriers & Boxships', range: 'Standard & Dual-Fuel', use: 'Capesize, Newcastlemax, and mega container vessels' },
      { name: 'Offshore & Specialty Units', range: 'Custom Specification', use: 'DP3 subsea vessels, cable layers, and offshore tugs' },
      { name: 'Luxury Yachts & Passenger Ships', range: 'Custom Craft', use: 'High-end interior fitting, styling, and acoustic engineering' }
    ],
    specifications: [
      { label: 'Phases Covered', value: 'Contract Review, Plan Approval, Block Assembly, Hull Outfitting, Sea Trials, Handover' },
      { label: 'Site Team Presence', value: 'Dedicated site managers, hull inspectors, machinery specialists, coating surveyors' },
      { label: 'Quality Assurance', value: '100% NDT weld testing reviews, NACE/FROSIO paint inspections, alignment audits' },
      { label: 'Trial Supervisions', value: 'Dock trials, incline tests, endurance trials, speed and fuel consumption verification' },
      { label: 'Guarantee Support', value: '12-month post-delivery warranty claim tracking and shipyard claim resolution' }
    ],
    coreCapabilities: [
      'Comprehensive shipbuilding specification appraisal and makers list optimization',
      'Factory Acceptance Testing (FAT) for main engines, generators, and cargo systems',
      'Hull block alignment, welding radiography verification, and watertight checks',
      'Coating system application supervision meeting PSPC ballast tank rules',
      'Comprehensive sea trial management and official class certificate issuance'
    ],
    safetyStandards: 'IACS Classification rules, IMO conventions (SOLAS, MARPOL, MLC), flag state statutory regulations, and IMO PSPC coating standards.'
  },
  {
    id: 'lay-up-management',
    slug: 'lay-up-management',
    path: '/service/lay-up-management',
    title: 'Lay-up Management',
    subtitle: 'Optimizing Your Fleet During Market Downturns – Safe, Efficient, Cost-Effective Solutions',
    category: 'Specialized Maritime Services',
    categorySlug: 'specialized-maritime-services',
    bannerImg: '/assets/uploads/2025/07/Picture4-1-1.png',
    mainImg: '/assets/uploads/2025/07/Picture5-1-2.png',
    gallery: [
      '/assets/uploads/2025/07/Picture6-1.png',
      '/assets/uploads/2025/07/Picture9-1-1.png',
      '/assets/uploads/2025/07/Picture8-1-1.png'
    ],
    shortDescription: 'Turnkey Hot and Cold lay-up solutions preserving asset value, minimizing OPEX, and guaranteeing swift, trouble-free reactivation when markets rebound.',
    description: [
      "In times of challenging market conditions, especially for certain segments of the shipping industry, the best economic option for ship owners can be to lay-up their vessels. Lay-up management involves temporarily suspending a vessel's operations to preserve its value while minimizing costs until market conditions improve.",
      "There are two primary types of lay-up options: Cold Lay-Up and Hot Lay-Up. Each offers distinct advantages based on the duration of inactivity and operational requirements.",
      "Cold Lay-Up involves shutting down the vessel's machinery and systems for an extended period, typically more than six months. It ensures a longer preservation of the vessel, but reactivation can take 7 to 14 days as the machinery and systems need to be re-activated and tested.",
      "Hot Lay-Up keeps the vessel in a fully operational state, with the machinery frequently switched on to preserve its readiness. This method requires less downtime and is ideal for shorter periods of inactivity, as the vessel is maintained in a more active condition.",
      "At Global Vessel Management LLC, we offer specialized lay-up management services to ensure the safe preservation and efficient reactivation of your vessels. Whether you opt for a cold or hot lay-up, our experienced team will provide the necessary supervision and planning to keep your asset in optimal condition while reducing unnecessary costs.",
      "Our comprehensive lay-up management solutions cover all maritime sectors, including Leisure, Offshore, and Cargo vessels. With years of expertise and a network of qualified professionals, we ensure that your vessel is protected during its downtime, while facilitating cost-effective reactivation when needed."
    ],
    bulletPoints: [
      "Cold Lay-Up: Safe and secure preservation of your vessel; strategic anchorage at chosen locations under strict supervision; optimal crew solutions based on your needs; routine maintenance and inspections; cost-effective repairs during lay-up; and well-planned reactivation processes.",
      "Hot Lay-Up: Continuous safe preservation in operational readiness; minimum safe manning to maintain essential vessel functions; conducted strictly according to class and insurance guidelines; optimized operational costs; streamlined reactivation with minimal downtime for swift return to trade.",
      "Expert Management: Tailored preservation protocols ensuring machinery, hull, electrical, and accommodation systems remain intact.",
      "Regulatory & Insurance Compliance: Coordinated approvals with Classification Societies and Hull & Machinery/P&I insurers to maintain coverage at reduced lay-up premium rates."
    ],
    vesselTypes: [
      { name: 'Cold Lay-Up Solutions', range: '6+ months inactivity', use: 'Dehumidified spaces, machinery cocooning, minimal watchman crew' },
      { name: 'Hot Lay-Up Solutions', range: '1 – 6 months standby', use: 'Machinery rotation, live electrical circuits, rapid commercial reactivation' },
      { name: 'Lay-Up Across All Sectors', range: 'All Vessel Classes', use: 'Container vessels, bulkers, tankers, offshore rigs, luxury yachts' }
    ],
    specifications: [
      { label: 'Lay-Up Modes Available', value: 'Warm Lay-Up, Hot Lay-Up, Cold Lay-Up, Long-Term Cocooning' },
      { label: 'Reactivation Timeline', value: 'Hot: 24 to 72 hours; Cold: 7 to 14 business days' },
      { label: 'Strategic Locations', value: 'Sheltered anchorages and lay-up berths in Oman and regional waters' },
      { label: 'Asset Preservation Systems', value: 'Desiccant dehumidifiers, cathodic anode arrays, inert gas blanketing' },
      { label: 'Insurance & Class Approvals', value: 'Approved by major P&I clubs, H&M underwriters, and IACS societies' }
    ],
    coreCapabilities: [
      'Detailed site hazard identification, holding ground assessment, and mooring layout',
      'Machinery preservation: inhibitor circulation, nitrogen blankets, and shaft rotation',
      'Cargo hold and accommodation dehumidification to prevent mold and corrosion',
      '24/7 dedicated security watchkeeping, anti-piracy, and emergency towing readiness',
      'Recommissioning protocol execution, sea trials, and class certificate endorsement'
    ],
    safetyStandards: 'Strict conformity with Class lay-up guidelines (DNV, BV, LR, ABS), Joint Hull Committee lay-up warranty conditions, and local Port Authority regulations.'
  },
  {
    id: 'crew-management',
    slug: 'crew-management',
    path: '/service/crew-management',
    title: 'Crew Management',
    subtitle: 'Reliable Crew Management for All Vessel Types',
    category: 'Specialized Maritime Services',
    categorySlug: 'specialized-maritime-services',
    bannerImg: '/assets/uploads/2025/07/Picture11.png',
    mainImg: '/assets/uploads/2025/07/Picture12-1-1.png',
    gallery: [
      '/assets/uploads/2025/07/Picture5.png'
    ],
    shortDescription: 'Full-spectrum crewing services from recruitment, vetting, and continuous maritime training to worldwide travel logistics, payroll, and seafarer welfare.',
    description: [
      "At GVM, we believe that behind every successful voyage is a well-prepared, well-supported crew. Our comprehensive crew management solutions are designed to meet the diverse needs of ship owners and operators across all vessel types and classes—from commercial cargo ships and tankers to offshore units, passenger vessels, and specialized fleets.",
      "We provide end-to-end crew services, ensuring that every crew member deployed under our management is trained, certified, and ready to perform. Our expertise spans recruitment, vetting, deployment, scheduling, travel, payroll, and welfare delivered with precision, professionalism, and a strong sense of accountability.",
      "GVM draws on a global pool of highly qualified maritime professionals, supported by regional offices and recruitment partners strategically located to meet crewing needs swiftly and efficiently. Whether you're looking to fully outsource your crew operations or need targeted support, our flexible service model adapts to your requirements.",
      "Training and professional development are core to our crewing philosophy. We invest in continuous learning covering safety, compliance, technical skills, and soft skills to ensure seafarers are not only competent but also aligned with your vessel's operational standards and company culture. Through blended learning solutions that combine onboard mentorship, shore-based programs, and digital modules, we help build capable and confident maritime professionals.",
      "GVM also prioritizes the physical and mental wellbeing of seafarers. Our crew welfare framework includes access to health and wellness resources, mental health support, and family engagement initiatives because a supported crew is a stronger crew.",
      "From culinary training and hospitality services for passenger and offshore vessels to seamless global crew travel arrangements, GVM provides the logistical strength to move people efficiently and safely, wherever they're needed. Our dedicated travel team ensures minimal downtime and maximum responsiveness.",
      "With a solid foundation built on trust, transparency, and industry experience, GVM is your dependable partner in crew management committed to operational continuity, compliance, and crew excellence at sea."
    ],
    bulletPoints: [
      "Rigorous Recruitment & Vetting: In-depth background checks, psychometric testing, STCW verification, and technical competence interviews.",
      "End-to-End Travel Logistics: 24/7 dedicated crew travel desk managing international flights, visas, and port agent transfers.",
      "Comprehensive Training Framework: Simulator-based navigation, high-voltage certification, LNG handling, and safety leadership modules.",
      "Crew Welfare & Wellness: Mental health hotlines, medical insurance, high-speed onboard Wi-Fi access, and family liaison programs.",
      "Transparent Payroll Administration: Accurate multi-currency disbursements, tax compliance, and automated allotments under MLC 2006."
    ],
    vesselTypes: [
      { name: 'Commercial Tankers & LNG', range: 'Specialized Gas/Oil Crews', use: 'Master mariners and chief engineers with oil/chem/gas dangerous cargo endorsements' },
      { name: 'Dry Bulk & Container Fleets', range: 'High-Efficiency Complements', use: 'Multinational officers and ratings experienced in rapid port cargo turns' },
      { name: 'Offshore Marine Units', range: 'DP & Construction Crews', use: 'Certified Dynamic Positioning Officers, riggers, and offshore technicians' },
      { name: 'Passenger & Leisure Crafts', range: 'Hospitality Specialists', use: 'Culinary chefs, service personnel, and passenger safety officers' }
    ],
    specifications: [
      { label: 'Regulatory Framework', value: 'STCW 2010 Manila Amendments, Maritime Labour Convention (MLC 2006)' },
      { label: 'Global Seafarer Database', value: 'Multi-national pool of qualified officers, engineers, and deck/engine ratings' },
      { label: 'Officer Retention Rate', value: 'Consistently above 88% officer retention year-on-year' },
      { label: 'Medical Verification', value: 'Pre-Employment Medical Examination (PEME) at accredited clinics' },
      { label: '24/7 Support Desk', value: 'Dedicated round-the-clock emergency medical and repatriation desk' }
    ],
    coreCapabilities: [
      'Custom crewing matrix development aligned with oil major and charterer vetting requirements',
      'Fast-track visa processing, flag state seaman book issuance, and letters of guarantee',
      'Onboard safety culture coaching and human factors behavioral training',
      'Seamless relief scheduling preventing seafarer fatigue and overdue tours of duty',
      'Specialized transition programs transferring LPG officers into LNG fleet roles'
    ],
    safetyStandards: 'STCW Manila Amendments, MLC 2006 Seafarers Bill of Rights, Flag State Minimum Safe Manning requirements, and ISO 9001/45001 crewing certifications.'
  },
  {
    id: 'technology-and-innovation',
    slug: 'technology-and-innovation',
    path: '/service/technology-and-innovation',
    title: 'Technology and Innovation',
    subtitle: 'Technology and Innovation in Vessel Management',
    category: 'Specialized Maritime Services',
    categorySlug: 'specialized-maritime-services',
    bannerImg: '/assets/uploads/2025/07/Picture14.png',
    mainImg: '/assets/uploads/2025/07/Picture15.png',
    gallery: [
      '/assets/uploads/2025/07/Picture6.png'
    ],
    shortDescription: 'Cutting-edge digital fleet platforms, real-time telemetry, AI predictive maintenance, and voyage emissions tracking powering modern maritime operations.',
    description: [
      "At GVM, technology is at the heart of how we manage vessels—bringing precision, efficiency, and foresight into every aspect of maritime operations. We are committed to using innovation as a strategic tool to support vessel owners with smarter, safer, and more sustainable management solutions across all vessel types and classes.",
      "Our integrated digital platforms provide real-time visibility into fleet performance, covering technical operations, safety compliance, maintenance planning, fuel efficiency, and environmental monitoring. These systems empower ship owners with actionable data and transparent reporting, enabling informed decisions that enhance vessel reliability and reduce operating costs.",
      "Predictive maintenance is a key area where GVM adds value. By harnessing sensor data and machine learning, we can anticipate machinery issues before they impact operations—reducing unscheduled downtime and extending equipment lifespan. This proactive approach ensures high availability and optimized lifecycle management of all critical onboard systems.",
      "We also deploy advanced technologies for safety and compliance. From electronic documentation and digital ISM systems to remote audits and condition monitoring, our solutions streamline regulatory adherence while minimizing manual workload and human error.",
      "In the area of sustainability, GVM uses emissions monitoring tools and voyage optimization software to help clients meet environmental standards and reduce their carbon footprint. We are aligned with the industry's decarbonization goals and continuously evolve our practices to support greener operations.",
      "Furthermore, innovation extends to shore support through centralized dashboards, remote diagnostics, and integrated communication channels—ensuring seamless coordination between ship and shore, round the clock.",
      "At GVM, we believe that innovation is not just about adopting new tools—it's about delivering lasting value to vessel owners through smarter operations, enhanced safety, and future-ready solutions."
    ],
    bulletPoints: [
      "Real-Time Fleet Telemetry: Integrated dashboards providing live insight into vessel speed, fuel flow, engine parameters, and weather conditions.",
      "AI Predictive Maintenance: Sensor analysis and vibration diagnostics predicting machinery failures weeks before off-hire occurs.",
      "Paperless Digital ISM: Electronic logbooks, digital permit-to-work systems, and automated regulatory reporting.",
      "Weather Routing & Voyage Optimization: Hydrodynamic routing engines minimizing fuel consumption and greenhouse gas emissions.",
      "Emissions & Decarbonization Analytics: Automated CII tracking, EU ETS allowance calculations, and IMO DCS reporting.",
      "Remote Survey & Diagnostics: High-definition live video inspections enabling class surveyors and superintendents to conduct remote audits."
    ],
    vesselTypes: [
      { name: 'Fleet Telemetry Platforms', range: 'Cloud-Connected', use: 'Centralized shore monitoring and automated alert escalations' },
      { name: 'Predictive Machinery Analytics', range: 'Vibration & Oil Sensors', use: 'Main propulsion, generators, purifiers, and turbochargers' },
      { name: 'Voyage Route Optimization', range: 'Meteorological AI', use: 'Fuel reduction, storm avoidance, and speed profile optimization' },
      { name: 'Cyber Security Defenses', range: 'IMO MSC.428(98)', use: 'OT/IT onboard network segmentation and firewall management' }
    ],
    specifications: [
      { label: 'Data Architecture', value: 'High-frequency edge computing with satellite-to-cloud synchronization' },
      { label: 'Environmental Compliance', value: 'Automated calculations for IMO CII, EEXI, EU MRV, EU ETS, and FuelEU Maritime' },
      { label: 'Condition Monitoring', value: 'Online vibration analysis, acoustic oil debris sensors, thermographic imaging' },
      { label: 'Cybersecurity Level', value: 'ISO 27001 and IMO Resolution MSC.428(98) compliance verified' },
      { label: 'Shore-Ship Connectivity', value: 'LEO / GEO satellite integration with failover communication links' }
    ],
    coreCapabilities: [
      'Digital Planned Maintenance System (PMS) implementation and lifecycle tracking',
      'Real-time fuel consumption telemetry and bunker quality monitoring',
      'Remote technical diagnostics connecting shipboard engineers with OEM experts',
      'Automated safety drill tracking, defect logging, and corrective action workflows',
      'Comprehensive onboard cyber risk audits and security patch management'
    ],
    safetyStandards: 'IMO Resolution MSC.428(98) Maritime Cyber Risk Management, Class digital notation requirements, and international electronic logbook standards.'
  },
  {
    id: 'insurance-and-procurement',
    slug: 'insurance-and-procurement',
    path: '/service/insurance-and-procurement',
    title: 'Insurance and Procurement',
    subtitle: 'Strategic Sourcing & Robust Risk Mitigation for Marine Assets',
    category: 'Specialized Maritime Services',
    categorySlug: 'specialized-maritime-services',
    bannerImg: '/assets/uploads/2025/07/Picture17.png',
    mainImg: '/assets/uploads/2025/07/Picture18.png',
    gallery: [
      '/assets/uploads/2025/07/Picture19.png',
      '/assets/uploads/2025/07/Picture20-1.png'
    ],
    shortDescription: 'Global marine procurement network leveraging bulk purchasing power, coupled with comprehensive marine insurance placement and claims handling.',
    description: [
      "At GVM, our comprehensive procurement and insurance solutions are designed to safeguard the operational and financial resilience of vessel owners and operators. We understand that effective vessel management extends beyond technical operations—it requires strategic sourcing and robust risk mitigation through tailored insurance coverage.",
      "Our procurement team operates with global reach and local insight, ensuring timely access to critical marine equipment, spare parts, provisions, and services at competitive terms. Leveraging a trusted supplier network and data-driven systems, we maintain cost-efficiency without compromising quality or compliance. We streamline the procurement lifecycle—from vendor qualification to delivery coordination—supporting uninterrupted vessel performance across all classes and geographies.",
      "GVM offers a full spectrum of marine insurance services to address the complex risks faced by vessel owners, operators, and charterers. Working with top-tier underwriters and brokers, we provide access to specialized marine insurance products.",
      "Through this integrated approach, GVM helps clients navigate volatile markets, regulatory challenges, and operational uncertainties—backed by strong insurance coverage and agile procurement capabilities. Whether for a single vessel or an entire fleet, our mission is to provide seamless support and peace of mind at every stage of vessel operation."
    ],
    bulletPoints: [
      "Hull and Machinery (H&M): Protects against physical damage to the vessel, main engines, boilers, and auxiliary machinery.",
      "Protection and Indemnity (P&I): Covers third-party liabilities including crew injury, environmental pollution, wreck removal, and collision liabilities.",
      "War Risk (WR): Addresses maritime threats arising from conflict zones, piracy, terrorism, and political civil unrest.",
      "Disbursements – Increased Value (IV): Protects additional financial interests in the vessel beyond its standard insured market value.",
      "Freight Interest (FI) & Maritime Lien Insurance (MLI): Secures expected freight revenues and protects against claims for unpaid maritime services.",
      "Loss of Hire (LOH): Compensates owners for charter revenue losses incurred during unexpected vessel downtime from covered casualties.",
      "Freight, Demurrage and Defense (FD&D): Provides comprehensive legal cost protection for charter disputes and contractual claims.",
      "Marine Kidnap and Ransom (K&R): Offers specialized protection, negotiation support, and ransom reimbursement against piracy extortion.",
      "Federal and California COFR Guarantees: Ensures regulatory financial compliance for trading in US territorial waters.",
      "Cash on Board & Cash in Transit: Safeguards master cash funds during port transit, disbursements, and onboard safe storage."
    ],
    vesselTypes: [
      { name: 'Strategic Marine Procurement', range: 'Global Port Network', use: 'Bunkers, lubricants, technical spares, deck/engine stores, and fresh provisions' },
      { name: 'P&I Club Liaison', range: 'International Group', use: 'Mutual and fixed-premium P&I placement with top-tier clubs' },
      { name: 'Hull & Machinery Underwriting', range: 'A-Rated Markets', use: 'Lloyd\'s of London, European, and regional marine syndicates' },
      { name: 'Claims Management', range: 'End-to-End Resolution', use: 'Average adjusters coordination, casualty response, and salvage negotiations' }
    ],
    specifications: [
      { label: 'Procurement Reach', value: 'Vetted network of 500+ global maritime suppliers and authorized OEMs' },
      { label: 'Bunker & Lubes Management', value: 'Competitive volume procurement, fuel quality testing, and ISO 8217 compliance' },
      { label: 'Insurance Market Access', value: 'A-rated Lloyd’s syndicates, International Group P&I Clubs, leading international underwriters' },
      { label: 'Claims Settlement Speed', value: 'Dedicated in-house claims team accelerating adjuster reviews and payouts' },
      { label: 'Cost Reductions', value: 'Average 15% to 25% cost savings achieved through GVM aggregated purchasing contracts' }
    ],
    coreCapabilities: [
      'Strategic marine bunker fuel and lubricant contracts at major international ports',
      'Critical genuine OEM spare parts sourcing with certificates of conformity',
      'Seamless freight forwarding, customs clearance, and ship-side bonded delivery',
      'Proactive insurance policy benchmarking, risk exposure analysis, and renewal negotiation',
      'Full casualty handling, general average declaration, and claim recovery representation'
    ],
    safetyStandards: 'Strict anti-bribery & anti-corruption (FCPA/UK Bribery Act) compliance, genuine OEM parts traceability, and ISO 9001 quality management.'
  },
  {
    id: 'ship-management',
    slug: 'ship-management',
    path: '/service/ship-management',
    title: 'Ship Management',
    subtitle: 'Comprehensive Fleet Management Across All Vessel Classes',
    category: 'Ship Management',
    categorySlug: 'ship-management',
    bannerImg: '/assets/uploads/2025/07/service-banner-1.png',
    mainImg: '/assets/uploads/2025/07/service1.png',
    gallery: [
      '/assets/uploads/2025/07/Picture1-2-1.png',
      '/assets/uploads/2025/07/Picture3-1.png',
      '/assets/uploads/2025/07/Picture1-3.png',
      '/assets/uploads/2025/07/Picture8-1.png',
      '/assets/uploads/2025/07/Picture11-1.png',
      '/assets/uploads/2025/07/Picture15-1.png'
    ],
    shortDescription: 'End-to-end technical, operational, crewing, and safety management tailored for tankers, dry bulkers, container boxships, offshore units, and gas carriers.',
    description: [
      "Global Vessel Management (GVM) delivers premier ship management solutions engineered to optimize vessel performance, safeguard asset integrity, and ensure complete regulatory compliance. Operating from our maritime headquarters in Muscat, Sultanate of Oman, GVM provides end-to-end technical, operational, and commercial superintendence for a diverse global fleet.",
      "Our comprehensive Ship Management portfolio encompasses specialized vessel types across the commercial, industrial, and passenger sectors—including Tankers (Crude, Product, Chemical, LPG), Dry Bulk Carriers, High-Speed Container Vessels, Luxury Yachts & Passenger Liners, Offshore Support Vessels, and Advanced Cryogenic LNG & Dual-Fuel Carriers.",
      "At GVM, safety and environmental stewardship stand at the pinnacle of our philosophy. Every vessel in our care operates under stringent international conventions, including the International Safety Management (ISM) Code, International Ship and Port Facility Security (ISPS) Code, Maritime Labour Convention (MLC 2006), and strict MARPOL requirements.",
      "Through continuous monitoring, predictive maintenance technologies, seasoned marine superintendents, and a world-class pool of certified seafarers, GVM ensures that client vessels achieve optimal uptime, superior charter party compliance, and maximum commercial asset value."
    ],
    bulletPoints: [
      "Tankers: Crude Oil, Product, Chemical, and Gas Carrier management compliant with OCIMF SIRE 2.0 vetting standards.",
      "Bulk Carriers: Reliable dry bulk operations optimizing RightShip ratings, cargo hold cleanliness, and structural integrity.",
      "Container Vessels: Schedule-critical boxship management with advanced reefer monitoring and high reliability.",
      "Leisure & Yachts: Bespoke superyacht and passenger cruise ship management combining white-glove hospitality with marine safety.",
      "Offshore Marine: DP2/DP3 platform supply, anchor handling, and construction vessel operations supporting oil, gas, and offshore wind.",
      "LNG & Gas Carriers: Cryogenic handling expertise, BOG management, dual-fuel propulsion, and SIGTTO safety alignment."
    ],
    vesselTypes: [
      { name: 'Tankers Fleet', range: 'Liquid Bulk', use: 'Crude, Clean/Dirty Products, Chemicals, LPG/LNG' },
      { name: 'Bulk Carriers Fleet', range: 'Dry Bulk', use: 'Handysize, Supramax, Panamax, Capesize, VLOC' },
      { name: 'Container Vessels Fleet', range: 'Containerized Liner', use: 'Feeders, Panamax, Post-Panamax, ULCV' },
      { name: 'Leisure & Passenger Fleet', range: 'Yachts & Cruises', use: 'Superyachts, Luxury Expedition, Ocean Liners' },
      { name: 'Offshore Vessels Fleet', range: 'Energy Support', use: 'PSV, AHTS, OCV, Drill Ships, Wind Support' },
      { name: 'LNG & Dual-Fuel Fleet', range: 'Cryogenic Gas', use: 'Membrane, Spherical, LNG Bunkering' }
    ],
    specifications: [
      { label: 'Headquarters & Operations Hub', value: 'Muscat, Sultanate of Oman with 24/7 global response capability' },
      { label: 'Management Accreditations', value: 'Document of Compliance (DOC) for ISM, ISPS Code, MLC 2006, ISO 9001, ISO 14001' },
      { label: 'Vessel Classes Under Care', value: 'Tankers, Bulk Carriers, Containers, Leisure Yachts, Offshore Units, LNG Carriers' },
      { label: 'Technical Scope', value: 'Full technical management, planned maintenance (PMS), drydocking, spares & stores' },
      { label: 'Vetting Track Record', value: 'Top-tier ratings across OCIMF SIRE, RightShip, CDI, and PSC MoUs' }
    ],
    coreCapabilities: [
      '24/7 technical superintendence with seasoned marine and engineering superintendents',
      'Drydocking project management, budget control, and shipyard contract oversight',
      'Comprehensive safety, quality, and environmental compliance audits',
      'Integrated Planned Maintenance Systems (PMS) with predictive condition monitoring',
      'Vetting inspection preparation, SIRE 2.0 audits, and corrective action closure'
    ],
    safetyStandards: 'Comprehensive Safety Management System (SMS) certified under the ISM Code, ISPS Code, MLC 2006, ISO 9001 (Quality), ISO 14001 (Environment), and ISO 45001 (Occupational Health & Safety).'
  }
]

/**
 * Filtered subsets for easy navigation and grouping
 */
export const shipManagementServices = servicesData.filter(
  (s) => s.category === 'Ship Management' && s.id !== 'ship-management'
)

export const specializedServices = servicesData.filter(
  (s) => s.category === 'Specialized Maritime Services'
)

export const technicalServices = [
  servicesData.find((s) => s.id === 'ship-management'),
  ...servicesData.filter((s) => s.category === 'Specialized Maritime Services')
]

/**
 * Primary 6 offerings shown on the main /services overview grid
 * matching raw_html/services.html
 */
export const mainServiceOfferings = [
  {
    id: 'ship-management',
    slug: 'ship-management',
    path: '/service/ship-management/tankers',
    title: 'Ship Management',
    img: '/assets/uploads/2025/07/service1.png',
    iconNumber: 1,
    description: 'Specialized management across Tankers, Bulk Carriers, Container Vessels, Leisure Yachts, Offshore, and LNG Carriers.'
  },
  {
    id: 'new-building-supervision',
    slug: 'new-building-supervision',
    path: '/service/new-building-supervision',
    title: 'New Building Supervision',
    img: '/assets/uploads/2025/07/service2.png',
    iconNumber: 2,
    description: 'Expert shipyard oversight from initial design review and steel cutting to factory testing, sea trials, and handover.'
  },
  {
    id: 'lay-up-management',
    slug: 'lay-up-management',
    path: '/service/lay-up-management',
    title: 'Lay-up Management',
    img: '/assets/uploads/2025/07/service3.png',
    iconNumber: 3,
    description: 'Turnkey Hot and Cold lay-up solutions preserving asset integrity and minimizing operating expenses during market downtime.'
  },
  {
    id: 'crew-management',
    slug: 'crew-management',
    path: '/service/crew-management',
    title: 'Crew Management',
    img: '/assets/uploads/2025/07/service4.png',
    iconNumber: 4,
    description: 'End-to-end recruitment, credential vetting, continuous simulator training, global travel logistics, and seafarer welfare.'
  },
  {
    id: 'technology-and-innovation',
    slug: 'technology-and-innovation',
    path: '/service/technology-and-innovation',
    title: 'Technology and Innovation',
    img: '/assets/uploads/2025/07/service5.png',
    iconNumber: 5,
    description: 'Cloud fleet telemetry, AI-driven predictive maintenance, paperless digital ISM, and voyage emissions tracking.'
  },
  {
    id: 'insurance-and-procurement',
    slug: 'insurance-and-procurement',
    path: '/service/insurance-and-procurement',
    title: 'Insurance and Procurement',
    img: '/assets/uploads/2025/07/service6.png',
    iconNumber: 6,
    description: 'Global marine procurement network leveraging bulk economies of scale, coupled with comprehensive marine insurance.'
  }
]

/**
 * Service lookup by slug, supporting both direct slugs and aliases.
 */
export const getServiceBySlug = (slug) => {
  if (!slug) return servicesData[0]
  const cleanSlug = slug.toLowerCase().trim()
  
  // Direct match
  const found = servicesData.find((s) => s.slug === cleanSlug || s.id === cleanSlug)
  if (found) return found

  // Special aliases
  if (cleanSlug === 'ship-management' || cleanSlug === 'shipmanagement') {
    return servicesData.find((s) => s.slug === 'ship-management') || servicesData[0]
  }

  // Sub-slug fallback
  const subFound = servicesData.find((s) => s.path.endsWith('/' + cleanSlug))
  if (subFound) return subFound

  return servicesData[0]
}

export default servicesData
