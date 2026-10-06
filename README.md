# Global Vessel Management (GVM) 🚢

[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)](https://gvm.om)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)

Global Vessel Management (GVM) LLC is a premier specialized maritime operations company headquartered in Muscat, Sultanate of Oman. This repository contains the high-performance, responsive React application engineered for GVM, delivering end-to-end vessel management services, sustainability initiatives, and corporate inquiry workflows.

---

## 🌟 Overview & Key Features

- **High-Performance Architecture**: Powered by React 18, Vite, and Tailwind CSS alongside authentic GVM custom brand styling (`style.css` and `responsive.css`).
- **Comprehensive Route Matrix**:
  - **Core Pages**: Home, About Us, Corporate Social Responsibility (CSR), Terms & Conditions, Privacy Policy, Cookies Policy.
  - **12 Specialized Maritime Services**: Ship Management (Tankers, Bulk Carriers, Container Vessels, Leisure, Offshore, LNG), New Building Supervision, Lay-up Management, Crew Management, Technology and Innovation, Insurance and Procurement.
  - **Sustainability & Environment**: Sustainability Strategy, Environmental Solutions, Our Commitment.
  - **Inquiry & Admin Management**: Contact Us, Interactive Modal Enquiry workflow, Admin Authentication, and Verification QA Dashboard.
- **Enterprise-Grade SEO & GEO Optimization**:
  - Full machine-readable Schema.org JSON-LD data across all 22 public routes (`Organization`, `WebSite`, `WebPage`, `BreadcrumbList`, `LocalBusiness`, `EducationalOrganization`, etc.).
  - AI and answer-engine discoverability via `/llms.txt`.
  - Crawler protection and canonical management via `/robots.txt` and `/sitemap.xml`.
- **Pixel-Perfect Responsive Design**:
  - Tuned across all desktop, laptop, tablet, and mobile breakpoints ($\le 1440\text{px}$, $1300\text{px}$, $1199\text{px}$, $991.98\text{px}$, $767.98\text{px}$, $575\text{px}$, and $\le 420\text{px}$).
  - Mobile touch navigation drawer with smooth backdrop dismissal and animated multi-level accordion submenus.
  - Quick-action phone connection at viewports $\le 420\text{px}$.

---

## 🏗️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | UI Component Architecture |
| **React Router v6** | Client-side routing with scroll restoration & WP URL redirects |
| **Vite** | Next-generation frontend build tooling |
| **Tailwind CSS + Custom Theme** | Responsive styling, typography, and layout rules |
| **Lucide React & FontAwesome** | Maritime iconography and user-interface symbols |
| **HTML5 Video & Canvas** | Interactive hero & sustainability feature media |

---

## 📁 Project Structure

```text
GVm/
├── dist/                      # Production build output
├── public/                    # Static assets & public crawler endpoints
│   ├── assets/                # GVM brand logos, custom fonts, images, and media
│   ├── llms.txt               # Machine-readable discovery guide for AI answer engines
│   ├── robots.txt             # Search crawler directives
│   └── sitemap.xml            # Canonical XML sitemap covering all 22 public routes
├── raw_html/                  # Reference markup and extracted content datasets
├── scripts/                   # Automated verification and testing suites
│   ├── download-all-media.js  # Media asset synchronizer
│   ├── verify-all.js          # Core verification suite (29 tests)
│   └── verify-seo.js          # SEO / GEO & boundary audit suite (6 tests)
├── src/
│   ├── components/            # Header, Footer, Layout, EnquiryModal, Preloader, SEOHead
│   ├── context/               # SubmissionsContext & enquiry persistence
│   ├── data/                  # servicesData, seoData, subpagesContent
│   ├── pages/                 # Full page components across all routes
│   ├── App.jsx                # Router configuration & route declarations
│   ├── index.css              # Custom navigation styling & transitions
│   └── main.jsx               # React DOM entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

Clone the repository and install dependencies:

```bash
# Clone repository using SSH
git clone git@github.com-itadminges:itadminges/GVM.git

# Navigate into project directory
cd GVM

# Install project dependencies
npm install
```

### Development Server

Start the local Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🛠️ Build & Verification Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server |
| `npm run build` | Compiles production assets into `dist/` |
| `npm run preview` | Previews the compiled production build locally |
| `npm run verify` | Runs the 29-point GVM verification suite |
| `npm run verify-seo` | Runs the 6-point SEO, GEO, and schema audit suite |
| `npm run sync-media` | Verifies and downloads remote media assets if missing |

---

## 🧪 Testing & Quality Assurance

### 1. Verification Suite (`npm run verify`)
Ensures structural integrity across:
- Production build bundle generation and artifact checks.
- All 14 page components and 12 service datasets.
- Interactive modals (Leadership biography modal and Make an Enquiry modal).
- Form validation and local submission persistence.
- Theme CSS, custom Objectivity typography, and media assets.

### 2. SEO & GEO Looping QA Suite (`npm run verify-seo`)
Validates technical discoverability:
- `/robots.txt` configuration and private administrative boundary shielding.
- `/sitemap.xml` well-formedness and public route coverage.
- Structured Schema.org JSON-LD definitions across all routes.
- `/llms.txt` formatting for AI search systems (Copilot, ChatGPT, Perplexity, Gemini).
- Content protection ensuring visible contact information and branding remain authentic.

---

## 📞 Contact & Company Info

- **Organization**: Global Vessel Management (GVM) LLC
- **Headquarters**: Muscat, Sultanate of Oman
- **Official Website**: [https://gvm.om](https://gvm.om)
- **Email**: [Info@gvm.om](mailto:Info@gvm.om)
- **Phone**: [+968 71770077](tel:+96871770077)
