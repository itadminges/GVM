import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

console.log('========================================================')
console.log('   SEO / GEO & TECHNICAL AUDIT LOOPING QA SUITE         ')
console.log('========================================================\n')

let passCount = 0
let failCount = 0

function test(description, fn) {
  try {
    fn()
    console.log(`  [PASS] ${description}`)
    passCount++
  } catch (err) {
    console.error(`  [FAIL] ${description}`)
    console.error(`         Error: ${err.message}`)
    failCount++
  }
}

// 1. Audit robots.txt
console.log('>> 1. robots.txt Crawlability & Boundary Audit')
test('robots.txt exists in public/ and dist/', () => {
  const pubPath = path.join(rootDir, 'public', 'robots.txt')
  const distPath = path.join(rootDir, 'dist', 'robots.txt')
  if (!fs.existsSync(pubPath)) throw new Error('public/robots.txt missing')
  if (!fs.existsSync(distPath)) throw new Error('dist/robots.txt missing from build')
  const content = fs.readFileSync(pubPath, 'utf-8')
  if (!content.includes('Allow: /')) throw new Error('Missing Allow: /')
  if (!content.includes('Disallow: /admin')) throw new Error('Missing Disallow: /admin')
  if (!content.includes('Disallow: /wp-admin')) throw new Error('Missing Disallow: /wp-admin')
  if (!content.includes('Sitemap: https://www.gvm.om/sitemap.xml')) throw new Error('Missing Sitemap directive')
})

// 2. Audit sitemap.xml
console.log('\n>> 2. sitemap.xml Route Coverage & XML Well-Formedness')
test('sitemap.xml covers all 22 public canonical routes without private routes', () => {
  const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml')
  if (!fs.existsSync(sitemapPath)) throw new Error('public/sitemap.xml missing')
  const xml = fs.readFileSync(sitemapPath, 'utf-8')

  if (!xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')) {
    throw new Error('Invalid XML header in sitemap.xml')
  }

  // Must not include private routes
  if (xml.includes('/admin') || xml.includes('/wp-admin') || xml.includes('wp-login')) {
    throw new Error('Private or admin route found in sitemap.xml!')
  }

  const requiredRoutes = [
    'https://www.gvm.om/',
    'https://www.gvm.om/about-us',
    'https://www.gvm.om/services',
    'https://www.gvm.om/service/ship-management/tankers',
    'https://www.gvm.om/service/ship-management/bulk-carriers',
    'https://www.gvm.om/service/ship-management/container-vessels',
    'https://www.gvm.om/service/ship-management/leisure',
    'https://www.gvm.om/service/ship-management/offshore',
    'https://www.gvm.om/service/ship-management/lng',
    'https://www.gvm.om/service/new-building-supervision',
    'https://www.gvm.om/service/lay-up-management',
    'https://www.gvm.om/service/crew-management',
    'https://www.gvm.om/service/technology-and-innovation',
    'https://www.gvm.om/service/insurance-and-procurement',
    'https://www.gvm.om/sustainability-strategy',
    'https://www.gvm.om/environmental-solutions',
    'https://www.gvm.om/our-commitment',
    'https://www.gvm.om/csr',
    'https://www.gvm.om/contact-us',
    'https://www.gvm.om/terms-conditions',
    'https://www.gvm.om/privacy-policy',
    'https://www.gvm.om/cookies-policy'
  ]

  for (const r of requiredRoutes) {
    if (!xml.includes(`<loc>${r}</loc>`)) {
      throw new Error(`Route missing in sitemap.xml: ${r}`)
    }
  }
})

// 3. Audit llms.txt
console.log('\n>> 3. GEO / AI Answer Engine llms.txt Audit')
test('llms.txt exists with structured company context & endpoint directory', () => {
  const llmPath = path.join(rootDir, 'public', 'llms.txt')
  if (!fs.existsSync(llmPath)) throw new Error('public/llms.txt missing')
  const content = fs.readFileSync(llmPath, 'utf-8')
  if (!content.includes('Global Vessel Management')) throw new Error('llms.txt missing entity name')
  if (!content.includes('Muscat, Sultanate of Oman')) throw new Error('llms.txt missing headquarters location')
  if (!content.includes('Tanker Management')) throw new Error('llms.txt missing key services')
})

// 4. Audit Structured Data & Metadata Registry
console.log('\n>> 4. JSON-LD Schema & Metadata Registry Audit')
test('seoData.js exports comprehensive records for all 22 routes', async () => {
  const { seoRoutesData, SITE_URL } = await import('../src/data/seoData.js')
  const keys = Object.keys(seoRoutesData)
  if (keys.length < 22) throw new Error(`Expected at least 22 routes in seoRoutesData, got ${keys.length}`)

  for (const [route, data] of Object.entries(seoRoutesData)) {
    if (!data.title) throw new Error(`Missing title for ${route}`)
    if (!data.description) throw new Error(`Missing description for ${route}`)
    if (!data.canonical.startsWith(SITE_URL)) throw new Error(`Invalid canonical URL for ${route}`)
    if (!data.ogImage) throw new Error(`Missing ogImage for ${route}`)
    if (!data.breadcrumbs || data.breadcrumbs.length === 0) throw new Error(`Missing breadcrumbs for ${route}`)
  }
})

// 5. Audit Dist HTML Metadata & Fallbacks
console.log('\n>> 5. HTML Index Head Tags & JSON-LD Validation')
test('dist/index.html includes complete canonical, Open Graph, Twitter & Schema.org data', () => {
  const htmlPath = path.join(rootDir, 'dist', 'index.html')
  const html = fs.readFileSync(htmlPath, 'utf-8')
  if (!html.includes('<link rel="canonical" href="https://www.gvm.om/"')) throw new Error('Canonical link missing')
  if (!html.includes('og:title')) throw new Error('og:title missing')
  if (!html.includes('og:description')) throw new Error('og:description missing')
  if (!html.includes('og:image')) throw new Error('og:image missing')
  if (!html.includes('twitter:card')) throw new Error('twitter:card missing')
  if (!html.includes('twitter:title')) throw new Error('twitter:title missing')
  if (!html.includes('twitter:image')) throw new Error('twitter:image missing')
  if (!html.includes('id="gvm-schema-jsonld"')) throw new Error('JSON-LD script tag missing')

  // Extract and validate JSON-LD
  const match = html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)
  if (!match) throw new Error('No JSON-LD block found in dist/index.html')
  try {
    const parsed = JSON.parse(match[1])
    if (parsed['@context'] !== 'https://schema.org') throw new Error('Invalid @context in JSON-LD')
    if (!parsed['@graph'] || !Array.isArray(parsed['@graph'])) throw new Error('Missing @graph array')
  } catch (e) {
    throw new Error(`JSON-LD failed to parse: ${e.message}`)
  }
})

// 6. Content Protection & Immutability Check
console.log('\n>> 6. Content Protection & Immutability Audit')
test('Verify core business identity and visible contact numbers remain unmodified', () => {
  const homePath = path.join(rootDir, 'src', 'pages', 'Home.jsx')
  const homeContent = fs.readFileSync(homePath, 'utf-8')
  if (!homeContent.includes('Trusted Partner at Sea')) throw new Error('Home hero title was modified!')
  if (!homeContent.includes('Steadfast at sea, always reliable. Committed to every wave, every promise.')) {
    throw new Error('Home hero subtitle was modified!')
  }

  const footerPath = path.join(rootDir, 'src', 'components', 'Footer.jsx')
  const footerContent = fs.readFileSync(footerPath, 'utf-8')
  if (!footerContent.includes('+968 71770077')) throw new Error('Footer telephone was modified!')
  if (!footerContent.includes('Info@gvm.om')) throw new Error('Footer email was modified!')
  if (!footerContent.includes('Muscat, Sultanate of Oman')) throw new Error('Footer address was modified!')

  const contactPath = path.join(rootDir, 'src', 'pages', 'ContactUs.jsx')
  const contactContent = fs.readFileSync(contactPath, 'utf-8')
  if (!contactContent.includes('+968 71770077')) throw new Error('ContactUs telephone was modified!')
  if (!contactContent.includes('Info@gvm.om')) throw new Error('ContactUs email was modified!')
  if (!contactContent.includes('Muscat, Sultanate of Oman')) throw new Error('ContactUs address was modified!')
})

console.log('\n========================================================')
console.log(`   LOOPING QA RESULTS: ${passCount} PASSED, ${failCount} FAILED`)
console.log('========================================================')

if (failCount > 0) {
  process.exit(1)
}
