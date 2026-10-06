/**
 * Global Vessel Management (GVM) - Canonical SEO, GEO & Schema Configuration
 * Sourced directly from authentic GVM website content and official corporate assets.
 * Validated strictly against Schema.org and standard Open Graph / Twitter Card protocols.
 */

export const SITE_URL = 'https://www.gvm.om'
export const SITE_NAME = 'Global Vessel Management'
export const SITE_LEGAL_NAME = 'Global Vessel Management LLC'
export const SITE_PHONE = '+968 71770077'
export const SITE_EMAIL = 'Info@gvm.om'
export const SITE_ADDRESS = {
  addressLocality: 'Muscat',
  addressCountry: 'Oman',
  addressRegion: 'Muscat Governorate'
}
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/uploads/2025/07/logo.svg`

// Comprehensive SEO & Schema Metadata Registry for all public routes
export const seoRoutesData = {
  '/': {
    title: 'Global Vessel Management | World-Class Maritime Solutions',
    description: 'Global Vessel Management (GVM) is an international maritime leader headquartered in Muscat, Oman, delivering world-class ship management, crewing, technical supervision, and sustainable maritime solutions.',
    canonical: `${SITE_URL}/`,
    ogType: 'website',
    ogImage: `${SITE_URL}/assets/uploads/2025/07/banner-img-min.jpg`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` }
    ],
    schemaType: 'WebPage',
    aboutEntities: ['Ship Management', 'Maritime Logistics', 'Technical Vessel Superintendence', 'Maritime Decarbonization']
  },
  '/about-us': {
    title: 'About Us | Global Vessel Management',
    description: 'Discover Global Vessel Management (GVM), our executive leadership, maritime vision, and strategic goals advancing operational excellence, safety, and sustainable shipping across the MENA region.',
    canonical: `${SITE_URL}/about-us`,
    ogType: 'website',
    ogImage: `${SITE_URL}/assets/uploads/2025/07/about-banner.png`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'About Us', url: `${SITE_URL}/about-us` }
    ],
    schemaType: 'AboutPage',
    aboutEntities: ['Global Vessel Management Leadership', 'Maritime Strategy', 'Vision 2040 Maritime Operations']
  },
  '/services': {
    title: 'Maritime Services | Global Vessel Management',
    description: 'Explore comprehensive vessel management and specialized maritime solutions from Global Vessel Management (GVM), including ship operations, newbuilding supervision, lay-up management, crewing, and maritime technology.',
    canonical: `${SITE_URL}/services`,
    ogType: 'website',
    ogImage: `${SITE_URL}/assets/uploads/2025/07/service-banner-1.png`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/services` }
    ],
    schemaType: 'CollectionPage',
    aboutEntities: ['Ship Management Services', 'Maritime Technology', 'Crew Management', 'Lay-up Management']
  },
  '/service/ship-management/tankers': {
    title: 'Tanker Ship Management | Global Vessel Management',
    description: 'GVM provides specialized tanker ship management for crude oil tankers, product tankers, chemical tankers, LNG, and LPG carriers, adhering to strict OCIMF SIRE 2.0 standards and TMSA 3 benchmarks.',
    canonical: `${SITE_URL}/service/ship-management/tankers`,
    ogType: 'article',
    ogImage: `${SITE_URL}/assets/uploads/2025/07/service-banner.png`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/services` },
      { name: 'Ship Management: Tankers', url: `${SITE_URL}/service/ship-management/tankers` }
    ],
    schemaType: 'ItemPage',
    serviceType: 'Tanker Vessel Management'
  },
  '/service/ship-management/bulk-carriers': {
    title: 'Bulk Carrier Management | Global Vessel Management',
    description: 'Expert dry bulk fleet superintendence by GVM across Handysize, Panamax, Capesize, and VLOC vessels, optimizing uptime, cargo integrity, and fuel efficiency worldwide.',
    canonical: `${SITE_URL}/service/ship-management/bulk-carriers`,
    ogType: 'article',
    ogImage: `${SITE_URL}/assets/uploads/2025/07/Picture1.png`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/services` },
      { name: 'Bulk Carriers', url: `${SITE_URL}/service/ship-management/bulk-carriers` }
    ],
    schemaType: 'ItemPage',
    serviceType: 'Bulk Carrier Ship Management'
  },
  '/service/ship-management/container-vessels': {
    title: 'Container Vessel Management | Global Vessel Management',
    description: 'Streamlined container ship operations and technical superintendence from Feeder to Ultra Large Container Vessels (ULCV) ensuring global supply chain velocity and IMO compliance.',
    canonical: `${SITE_URL}/service/ship-management/container-vessels`,
    ogType: 'article',
    ogImage: `${SITE_URL}/assets/uploads/2025/07/Picture4-1.png`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/services` },
      { name: 'Container Vessels', url: `${SITE_URL}/service/ship-management/container-vessels` }
    ],
    schemaType: 'ItemPage',
    serviceType: 'Container Vessel Management'
  },
  '/service/ship-management/leisure': {
    title: 'Leisure Ship & Luxury Yacht Management | Global Vessel Management',
    description: 'High-end management solutions for luxury yachts, superyachts, and cruise vessels ensuring elite guest experiences, safety compliance, and flawless operational execution.',
    canonical: `${SITE_URL}/service/ship-management/leisure`,
    ogType: 'article',
    ogImage: `${SITE_URL}/assets/uploads/2025/07/Picture7-1.png`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/services` },
      { name: 'Leisure Vessels', url: `${SITE_URL}/service/ship-management/leisure` }
    ],
    schemaType: 'ItemPage',
    serviceType: 'Leisure & Yacht Vessel Management'
  },
  '/service/ship-management/offshore': {
    title: 'Offshore Vessel Management | Global Vessel Management',
    description: 'Dependable offshore fleet management by GVM for PSVs, AHTS, OCVs, and drill ships supporting energy, oil, gas, and offshore renewable installations.',
    canonical: `${SITE_URL}/service/ship-management/offshore`,
    ogType: 'article',
    ogImage: `${SITE_URL}/assets/uploads/2025/07/Picture10-1.png`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/services` },
      { name: 'Offshore Ships', url: `${SITE_URL}/service/ship-management/offshore` }
    ],
    schemaType: 'ItemPage',
    serviceType: 'Offshore Vessel Management'
  },
  '/service/ship-management/lng': {
    title: 'LNG & LNG-Fuelled Vessel Management | Global Vessel Management',
    description: 'Integrated ship management and crewing for LNG carriers, bunker vessels, and dual-fuel tonnage, advancing maritime decarbonization and vetting compliance.',
    canonical: `${SITE_URL}/service/ship-management/lng`,
    ogType: 'article',
    ogImage: `${SITE_URL}/assets/uploads/2025/07/Picture14-1.png`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/services` },
      { name: 'LNG Vessels', url: `${SITE_URL}/service/ship-management/lng` }
    ],
    schemaType: 'ItemPage',
    serviceType: 'LNG Vessel Management'
  },
  '/service/new-building-supervision': {
    title: 'New Building Supervision | Global Vessel Management',
    description: 'Turnkey shipbuilding oversight from design review, plan approval, and shipyard quality inspections to sea trials and delivery handover.',
    canonical: `${SITE_URL}/service/new-building-supervision`,
    ogType: 'article',
    ogImage: `${SITE_URL}/assets/uploads/2025/07/Picture1-1.png`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/services` },
      { name: 'New Building Supervision', url: `${SITE_URL}/service/new-building-supervision` }
    ],
    schemaType: 'ItemPage',
    serviceType: 'Newbuilding Supervision'
  },
  '/service/lay-up-management': {
    title: 'Lay-up Management (Hot & Cold) | Global Vessel Management',
    description: 'Safe, cost-effective hot and cold lay-up management solutions preserving vessel integrity during market cycles with streamlined reactivation protocols.',
    canonical: `${SITE_URL}/service/lay-up-management`,
    ogType: 'article',
    ogImage: `${SITE_URL}/assets/uploads/2025/07/Picture4-1-1.png`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/services` },
      { name: 'Lay-up Management', url: `${SITE_URL}/service/lay-up-management` }
    ],
    schemaType: 'ItemPage',
    serviceType: 'Lay-up Management'
  },
  '/service/crew-management': {
    title: 'Crew Management Services | Global Vessel Management',
    description: 'End-to-end maritime crewing solutions including recruitment, STCW vetting, specialized training, seafarer welfare, travel logistics, and payroll administration.',
    canonical: `${SITE_URL}/service/crew-management`,
    ogType: 'article',
    ogImage: `${SITE_URL}/assets/uploads/2025/07/Picture11.png`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/services` },
      { name: 'Crew Management', url: `${SITE_URL}/service/crew-management` }
    ],
    schemaType: 'ItemPage',
    serviceType: 'Crew Management'
  },
  '/service/technology-and-innovation': {
    title: 'Maritime Technology & Innovation | Global Vessel Management',
    description: 'Smart maritime operations harnessing digital platforms, predictive maintenance, real-time fleet analytics, and emissions monitoring software.',
    canonical: `${SITE_URL}/service/technology-and-innovation`,
    ogType: 'article',
    ogImage: `${SITE_URL}/assets/uploads/2025/07/Picture14.png`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/services` },
      { name: 'Technology & Innovation', url: `${SITE_URL}/service/technology-and-innovation` }
    ],
    schemaType: 'ItemPage',
    serviceType: 'Maritime Technology'
  },
  '/service/insurance-and-procurement': {
    title: 'Marine Insurance & Global Procurement | Global Vessel Management',
    description: 'Strategic maritime sourcing and tailored marine insurance placement covering H&M, P&I, War Risk, LOH, and COFR guarantees for maximum fleet resilience.',
    canonical: `${SITE_URL}/service/insurance-and-procurement`,
    ogType: 'article',
    ogImage: `${SITE_URL}/assets/uploads/2025/07/Picture17.png`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/services` },
      { name: 'Insurance & Procurement', url: `${SITE_URL}/service/insurance-and-procurement` }
    ],
    schemaType: 'ItemPage',
    serviceType: 'Marine Insurance & Procurement'
  },
  '/sustainability-strategy': {
    title: 'Sustainability Strategy | Global Vessel Management',
    description: 'GVM Sustainovate roadmap outlining strategic pillars for maritime decarbonization, environmental stewardship, operational efficiency, and social responsibility.',
    canonical: `${SITE_URL}/sustainability-strategy`,
    ogType: 'website',
    ogImage: `${SITE_URL}/assets/uploads/2025/07/sustain-banner.png`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Sustainability', url: `${SITE_URL}/sustainability-strategy` }
    ],
    schemaType: 'WebPage',
    aboutEntities: ['Maritime Sustainability', 'Decarbonization Roadmap', 'Sustainovate']
  },
  '/environmental-solutions': {
    title: 'Environmental Solutions | Global Vessel Management',
    description: 'Practical environmental solutions by GVM including EEXI assessments, CII optimization, biofouling management, ballast water compliance, and emission reduction.',
    canonical: `${SITE_URL}/environmental-solutions`,
    ogType: 'website',
    ogImage: `${SITE_URL}/assets/uploads/2025/07/Picture2-2.png`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Sustainability', url: `${SITE_URL}/sustainability-strategy` },
      { name: 'Environmental Solutions', url: `${SITE_URL}/environmental-solutions` }
    ],
    schemaType: 'WebPage',
    aboutEntities: ['EEXI Assessment', 'CII Compliance', 'Ballast Water Treatment', 'Vessel Energy Efficiency']
  },
  '/our-commitment': {
    title: 'Our Commitment to Maritime Excellence | Global Vessel Management',
    description: 'Read GVM’s pledge to ethical governance, seafarer safety, environmental stewardship, and continuous quality advancement in global shipping operations.',
    canonical: `${SITE_URL}/our-commitment`,
    ogType: 'website',
    ogImage: `${SITE_URL}/assets/uploads/2025/07/Picture1-2-1.png`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Sustainability', url: `${SITE_URL}/sustainability-strategy` },
      { name: 'Our Commitment', url: `${SITE_URL}/our-commitment` }
    ],
    schemaType: 'WebPage',
    aboutEntities: ['Corporate Commitment', 'Maritime Safety Culture', 'Environmental Stewardship']
  },
  '/csr': {
    title: 'Corporate Social Responsibility (CSR) | Global Vessel Management',
    description: 'GVM’s CSR initiatives advancing local maritime education, cadet sponsorships, Omani employment development, and community welfare programs.',
    canonical: `${SITE_URL}/csr`,
    ogType: 'website',
    ogImage: `${SITE_URL}/assets/uploads/2025/07/Picture7-1.png`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'CSR', url: `${SITE_URL}/csr` }
    ],
    schemaType: 'WebPage',
    aboutEntities: ['Maritime Education', 'Cadetship Programs', 'Local Workforce Training', 'Community Engagement']
  },
  '/contact-us': {
    title: 'Contact Us | Global Vessel Management',
    description: 'Get in touch with Global Vessel Management in Muscat, Oman for vessel management enquiries, technical fleet audits, crewing contracts, or partnership opportunities.',
    canonical: `${SITE_URL}/contact-us`,
    ogType: 'website',
    ogImage: `${SITE_URL}/assets/uploads/2025/07/contact-banner.png`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Contact Us', url: `${SITE_URL}/contact-us` }
    ],
    schemaType: 'ContactPage',
    aboutEntities: ['Maritime Inquiries', 'Global Vessel Management Office', 'Fleet Management Quotes']
  },
  '/terms-conditions': {
    title: 'Terms & Conditions | Global Vessel Management',
    description: 'Terms and conditions governing the use of the Global Vessel Management (GVM) website, maritime information services, and digital resources.',
    canonical: `${SITE_URL}/terms-conditions`,
    ogType: 'website',
    ogImage: `${SITE_URL}/assets/uploads/2025/07/about-banner.png`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Terms & Conditions', url: `${SITE_URL}/terms-conditions` }
    ],
    schemaType: 'WebPage'
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Global Vessel Management',
    description: 'Privacy Policy for Global Vessel Management (GVM) detailing data handling, cookies, analytics tracking, and visitor confidentiality standards.',
    canonical: `${SITE_URL}/privacy-policy`,
    ogType: 'website',
    ogImage: `${SITE_URL}/assets/uploads/2025/07/video-poster.png`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Privacy Policy', url: `${SITE_URL}/privacy-policy` }
    ],
    schemaType: 'WebPage'
  },
  '/cookies-policy': {
    title: 'Cookies Policy | Global Vessel Management',
    description: 'Information regarding the use of cookies and analytical tools on the Global Vessel Management (GVM) website and user management options.',
    canonical: `${SITE_URL}/cookies-policy`,
    ogType: 'website',
    ogImage: `${SITE_URL}/assets/uploads/2025/07/promise-img.png`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Cookies Policy', url: `${SITE_URL}/cookies-policy` }
    ],
    schemaType: 'WebPage'
  }
}
