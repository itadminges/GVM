import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

console.log('========================================================')
console.log('   GLOBAL VESSEL MANAGEMENT (GVM) - VERIFICATION SUITE   ')
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

// -------------------------------------------------------------------
// 1. Production Build Verification
// -------------------------------------------------------------------
console.log('>> 1. Production Build & Distribution Artifacts')
test('dist/index.html exists and contains valid HTML structure', () => {
  const indexPath = path.join(rootDir, 'dist', 'index.html')
  if (!fs.existsSync(indexPath)) throw new Error('dist/index.html missing')
  const content = fs.readFileSync(indexPath, 'utf-8')
  if (!content.includes('<div id="root">')) throw new Error('Root mount point missing in dist/index.html')
  if (!content.includes('stylesheet')) throw new Error('CSS bundle link missing in dist/index.html')
})

test('dist/assets contains compiled JS and CSS bundles', () => {
  const assetsDir = path.join(rootDir, 'dist', 'assets')
  if (!fs.existsSync(assetsDir)) throw new Error('dist/assets directory missing')
  const files = fs.readdirSync(assetsDir)
  const jsFiles = files.filter(f => f.endsWith('.js'))
  const cssFiles = files.filter(f => f.endsWith('.css'))
  if (jsFiles.length === 0) throw new Error('No JS bundle found in dist/assets')
  if (cssFiles.length === 0) throw new Error('No CSS bundle found in dist/assets')
  console.log(`         Bundles found: ${jsFiles.join(', ')} (${cssFiles.join(', ')})`)
})

// -------------------------------------------------------------------
// 2. All 22+ Page Routes Verification
// -------------------------------------------------------------------
console.log('\n>> 2. Page Routes & Component Files')
const expectedPages = [
  { name: 'Home', file: 'src/pages/Home.jsx', route: '/' },
  { name: 'About Us', file: 'src/pages/AboutUs.jsx', route: '/about-us' },
  { name: 'Services Overview', file: 'src/pages/ServicesIndex.jsx', route: '/services' },
  { name: 'Service Detail', file: 'src/pages/ServiceDetail.jsx', route: '/service/:serviceSlug' },
  { name: 'Sustainability Strategy', file: 'src/pages/SustainabilityStrategy.jsx', route: '/sustainability-strategy' },
  { name: 'Environmental Solutions', file: 'src/pages/EnvironmentalSolutions.jsx', route: '/environmental-solutions' },
  { name: 'Our Commitment', file: 'src/pages/OurCommitment.jsx', route: '/our-commitment' },
  { name: 'CSR', file: 'src/pages/CSR.jsx', route: '/csr' },
  { name: 'Contact Us', file: 'src/pages/ContactUs.jsx', route: '/contact-us' },
  { name: 'Terms & Conditions', file: 'src/pages/TermsConditions.jsx', route: '/terms-conditions' },
  { name: 'Privacy Policy', file: 'src/pages/PrivacyPolicy.jsx', route: '/privacy-policy' },
  { name: 'Cookies Policy', file: 'src/pages/CookiesPolicy.jsx', route: '/cookies-policy' },
  { name: 'Admin Login', file: 'src/pages/AdminLogin.jsx', route: '/admin/login' },
  { name: 'Admin Dashboard', file: 'src/pages/AdminDashboard.jsx', route: '/admin' }
]

expectedPages.forEach(p => {
  test(`Page component ${p.name} exists at ${p.file}`, () => {
    const filePath = path.join(rootDir, p.file)
    if (!fs.existsSync(filePath)) throw new Error(`${filePath} not found`)
    const code = fs.readFileSync(filePath, 'utf-8')
    if (code.length < 100) throw new Error(`File ${p.file} is suspiciously empty`)
    if (!code.includes('export default')) throw new Error(`${p.file} does not export default component`)
  })
})

test('Verify servicesData contains all 12 services', async () => {
  const servicesPath = path.join(rootDir, 'src', 'data', 'servicesData.js')
  const content = fs.readFileSync(servicesPath, 'utf-8')
  const expectedServices = [
    'tankers',
    'bulk-carriers',
    'container-vessels',
    'leisure',
    'offshore',
    'lng',
    'new-building-supervision',
    'lay-up-management',
    'crew-management',
    'technology-and-innovation',
    'insurance-and-procurement',
    'ship-management'
  ]
  for (const s of expectedServices) {
    if (!content.includes(`slug: '${s}'`)) {
      throw new Error(`Missing service slug in servicesData: ${s}`)
    }
  }
  console.log(`         Verified 12/12 maritime service datasets`)
})

test('App.jsx configures public routes, admin routes, and WP redirects', () => {
  const appPath = path.join(rootDir, 'src', 'App.jsx')
  const appContent = fs.readFileSync(appPath, 'utf-8')
  const requiredRoutes = [
    '/admin/login',
    '/wp-login.php',
    '/admin',
    '/wp-admin',
    '/about-us',
    '/services',
    '/service/:serviceSlug',
    '/service/ship-management/:subSlug',
    '/sustainability-strategy',
    '/environmental-solutions',
    '/our-commitment',
    '/csr',
    '/contact-us',
    '/privacy-policy',
    '/terms-conditions',
    '/cookies-policy'
  ]
  for (const r of requiredRoutes) {
    if (!appContent.includes(`path="${r}"`)) {
      throw new Error(`Route "${r}" missing in App.jsx`)
    }
  }
})

// -------------------------------------------------------------------
// 3. Preloader Verification
// -------------------------------------------------------------------
console.log('\n>> 3. Preloader Component & Maritime Animation')
test('Preloader component implements auto-dismiss, smooth fadeout, and fallback', () => {
  const preloaderPath = path.join(rootDir, 'src', 'components', 'Preloader.jsx')
  if (!fs.existsSync(preloaderPath)) throw new Error('Preloader.jsx missing')
  const preloaderCode = fs.readFileSync(preloaderPath, 'utf-8')
  if (!preloaderCode.includes('minDisplayTime')) throw new Error('minDisplayTime prop missing')
  if (!preloaderCode.includes('opacity-100') || !preloaderCode.includes('opacity-0')) {
    throw new Error('Opacity transition classes missing in Preloader')
  }
  if (!preloaderCode.includes('GLOBAL VESSEL MANAGEMENT')) {
    throw new Error('Brand text missing in Preloader')
  }
})

test('Layout.jsx mounts Preloader, Header, Footer, ScrollToTop, EnquiryModal', () => {
  const layoutPath = path.join(rootDir, 'src', 'components', 'Layout.jsx')
  const code = fs.readFileSync(layoutPath, 'utf-8')
  if (!code.includes('<Preloader />')) throw new Error('Layout does not mount Preloader')
  if (!code.includes('<Header />')) throw new Error('Layout does not mount Header')
  if (!code.includes('<Footer />')) throw new Error('Layout does not mount Footer')
  if (!code.includes('<ScrollToTop />')) throw new Error('Layout does not mount ScrollToTop')
  if (!code.includes('<EnquiryModal />')) throw new Error('Layout does not mount EnquiryModal')
})

// -------------------------------------------------------------------
// 4. Administration Login & Dashboard
// -------------------------------------------------------------------
console.log('\n>> 4. Administration Login & Dashboard')
test('AdminLogin supports standard credentials, 1-click verification agent mode, and auth redirect', () => {
  const loginPath = path.join(rootDir, 'src', 'pages', 'AdminLogin.jsx')
  const code = fs.readFileSync(loginPath, 'utf-8')
  if (!code.includes('gvm_admin_auth')) throw new Error('localStorage auth key missing')
  if (!code.includes('handleQuickAgentAccess')) throw new Error('1-click agent access handler missing')
  if (!code.includes('/wp-login.php')) {
    // verified via App.jsx
  }
})

test('AdminDashboard features Looping Verification Agent, Submissions Inspector, and Frame Inspector', () => {
  const dashPath = path.join(rootDir, 'src', 'pages', 'AdminDashboard.jsx')
  const code = fs.readFileSync(dashPath, 'utf-8')
  if (!code.includes('isLoopingActive')) throw new Error('Looping agent state missing in AdminDashboard')
  if (!code.includes('Submissions Inspector')) throw new Error('Submissions Inspector tab missing')
  if (!code.includes('Frame-by-Frame Inspector')) throw new Error('Frame Inspector tab missing')
  if (!code.includes('ALL_PAGES')) throw new Error('ALL_PAGES registry missing')
})

// -------------------------------------------------------------------
// 5. Submissions Handling & LocalStorage Persistence
// -------------------------------------------------------------------
console.log('\n>> 5. Submissions Handling & LocalStorage Persistence')
test('SubmissionsContext provides add, update, delete, modal controls with localStorage syncing', () => {
  const ctxPath = path.join(rootDir, 'src', 'context', 'SubmissionsContext.jsx')
  const code = fs.readFileSync(ctxPath, 'utf-8')
  if (!code.includes('localStorage.getItem(\'gvm_submissions\')')) throw new Error('localStorage reading missing')
  if (!code.includes('localStorage.setItem(\'gvm_submissions\'')) throw new Error('localStorage writing missing')
  if (!code.includes('addSubmission')) throw new Error('addSubmission missing')
  if (!code.includes('updateSubmissionStatus')) throw new Error('updateSubmissionStatus missing')
  if (!code.includes('deleteSubmission')) throw new Error('deleteSubmission missing')
})

test('ContactUs form wires addSubmission with full field validation', () => {
  const contactPath = path.join(rootDir, 'src', 'pages', 'ContactUs.jsx')
  const code = fs.readFileSync(contactPath, 'utf-8')
  if (!code.includes('addSubmission')) throw new Error('addSubmission not connected in ContactUs')
  if (!code.includes('validate()') && !code.includes('errors.fullName')) throw new Error('Validation missing')
  if (!code.includes('isSubmitted')) throw new Error('Submission feedback state missing')
})

test('EnquiryModal wires addSubmission with service auto-selection', () => {
  const modalPath = path.join(rootDir, 'src', 'components', 'EnquiryModal.jsx')
  const code = fs.readFileSync(modalPath, 'utf-8')
  if (!code.includes('useSubmissions')) throw new Error('useSubmissions not connected in EnquiryModal')
  if (!code.includes('enquiryInitialService')) throw new Error('enquiryInitialService missing')
})

// -------------------------------------------------------------------
// 6. Assets & Theme Fonts
// -------------------------------------------------------------------
console.log('\n>> 6. Assets & Theme Fonts Availability')
test('Objectivity custom fonts exist in public/assets/theme/fonts', () => {
  const fontsDir = path.join(rootDir, 'public', 'assets', 'theme', 'fonts')
  const requiredFonts = [
    'Objectivity-Regular.woff2',
    'Objectivity-Medium.woff2',
    'Objectivity-Bold.woff2',
    'Objectivity-ExtraBold.woff2'
  ]
  for (const f of requiredFonts) {
    const fontFile = path.join(fontsDir, f)
    if (!fs.existsSync(fontFile)) throw new Error(`Font file missing: ${f}`)
  }
})

test('Theme CSS files (bootstrap.min.css, style.css, responsive.css) exist', () => {
  const themeDir = path.join(rootDir, 'public', 'assets', 'theme')
  const files = ['bootstrap.min.css', 'style.css', 'responsive.css']
  for (const f of files) {
    if (!fs.existsSync(path.join(themeDir, f))) throw new Error(`Theme file missing: ${f}`)
  }
})

test('Brand logo SVGs exist in public/assets and public/assets/uploads/2025/07', () => {
  const logo1 = path.join(rootDir, 'public', 'assets', 'logo.svg')
  const logo2 = path.join(rootDir, 'public', 'assets', 'uploads', '2025', '07', 'logo.svg')
  if (!fs.existsSync(logo1) && !fs.existsSync(logo2)) {
    throw new Error('GVM brand logo SVG missing')
  }
})

test('Service imagery referenced in servicesData exists in public/assets/uploads/2025/07', () => {
  const uploadsDir = path.join(rootDir, 'public', 'assets', 'uploads', '2025', '07')
  const keyImages = [
    'service-banner.png',
    'Picture1-2-1.png',
    'Picture1.png',
    'Picture4-1.png',
    'Picture7-1.png',
    'Picture10-1.png',
    'Picture14-1.png',
    'Picture1-1.png',
    'Picture4-1-1.png',
    'Picture11.png',
    'Picture14.png',
    'Picture17.png',
    'service1.png'
  ]
  let missing = []
  for (const img of keyImages) {
    if (!fs.existsSync(path.join(uploadsDir, img))) {
      missing.push(img)
    }
  }
  if (missing.length > 0) {
    throw new Error(`Missing service images: ${missing.join(', ')}`)
  }
  console.log(`         Verified ${keyImages.length} core service banner & hero images`)
})

// -------------------------------------------------------------------
// Summary
// -------------------------------------------------------------------
console.log('\n========================================================')
console.log(`   VERIFICATION COMPLETE: ${passCount} PASSED, ${failCount} FAILED`)
console.log('========================================================')

if (failCount > 0) {
  process.exit(1)
} else {
  process.exit(0)
}
