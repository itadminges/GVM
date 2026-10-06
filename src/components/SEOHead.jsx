import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  SITE_URL,
  SITE_NAME,
  SITE_LEGAL_NAME,
  SITE_PHONE,
  SITE_EMAIL,
  SITE_ADDRESS,
  DEFAULT_OG_IMAGE,
  seoRoutesData
} from '../data/seoData'

/**
 * SEOHead: High-performance, client-side dynamic head injector.
 * Synchronizes document title, canonical link, Open Graph tags, Twitter/X cards,
 * robots indexing directives, and valid Schema.org JSON-LD graphs.
 */
export default function SEOHead() {
  const location = useLocation()
  const pathname = location.pathname

  // Check if current route is private/admin/dashboard
  const isPrivate = pathname.startsWith('/admin') || 
                    pathname.startsWith('/wp-admin') || 
                    pathname === '/wp-login.php'

  const currentSEO = seoRoutesData[pathname] || {
    title: `${SITE_NAME} | Maritime Fleet Management Solutions`,
    description: 'Global Vessel Management (GVM) provides world-class vessel management, ship operations, technical management, crew services, and sustainable maritime solutions.',
    canonical: `${SITE_URL}${pathname}`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    breadcrumbs: [{ name: 'Home', url: `${SITE_URL}/` }]
  }

  useEffect(() => {
    // 1. Title
    document.title = currentSEO.title

    // Helper function to safely update or create <meta> elements
    const setMetaTag = (attrName, attrValue, content) => {
      let meta = document.querySelector(`meta[${attrName}="${attrValue}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attrName, attrValue)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    // 2. Robots Indexing Directives
    if (isPrivate) {
      setMetaTag('name', 'robots', 'noindex, nofollow, noarchive, nosnippet')
      setMetaTag('name', 'googlebot', 'noindex, nofollow')
    } else {
      setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
      setMetaTag('name', 'googlebot', 'index, follow')
    }

    // 3. Primary Meta Tags
    setMetaTag('name', 'description', currentSEO.description)
    setMetaTag('name', 'application-name', SITE_NAME)
    setMetaTag('name', 'author', SITE_LEGAL_NAME)

    // 4. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', isPrivate ? `${SITE_URL}/admin` : currentSEO.canonical)

    // 5. Open Graph Meta Tags
    setMetaTag('property', 'og:site_name', SITE_NAME)
    setMetaTag('property', 'og:title', currentSEO.title)
    setMetaTag('property', 'og:description', currentSEO.description)
    setMetaTag('property', 'og:url', currentSEO.canonical)
    setMetaTag('property', 'og:type', currentSEO.ogType || 'website')
    setMetaTag('property', 'og:image', currentSEO.ogImage || DEFAULT_OG_IMAGE)
    setMetaTag('property', 'og:locale', 'en_US')

    // 6. Twitter / X Card Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', currentSEO.title)
    setMetaTag('name', 'twitter:description', currentSEO.description)
    setMetaTag('name', 'twitter:image', currentSEO.ogImage || DEFAULT_OG_IMAGE)
    setMetaTag('name', 'twitter:site', '@gvm_om')

    // 7. Structured Data (JSON-LD)
    let jsonLdScript = document.getElementById('gvm-schema-jsonld')
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script')
      jsonLdScript.id = 'gvm-schema-jsonld'
      jsonLdScript.type = 'application/ld+json'
      document.head.appendChild(jsonLdScript)
    }

    if (isPrivate) {
      jsonLdScript.textContent = ''
    } else {
      // Build comprehensive, unified Schema.org graph
      const orgId = `${SITE_URL}/#organization`
      const websiteId = `${SITE_URL}/#website`
      const webpageId = `${currentSEO.canonical}#webpage`

      const schemaGraph = [
        // Organization / LocalBusiness Entity
        {
          '@type': ['Organization', 'LocalBusiness'],
          '@id': orgId,
          name: SITE_NAME,
          legalName: SITE_LEGAL_NAME,
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            '@id': `${SITE_URL}/#logo`,
            url: `${SITE_URL}/assets/uploads/2025/07/logo.svg`,
            caption: SITE_NAME
          },
          image: `${SITE_URL}/assets/uploads/2025/07/logo.svg`,
          description: 'Global Vessel Management (GVM) is an international ship management and maritime operations company based in Muscat, Oman.',
          email: SITE_EMAIL,
          telephone: SITE_PHONE,
          address: {
            '@type': 'PostalAddress',
            addressLocality: SITE_ADDRESS.addressLocality,
            addressRegion: SITE_ADDRESS.addressRegion,
            addressCountry: SITE_ADDRESS.addressCountry
          },
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: SITE_PHONE,
              contactType: 'customer support',
              email: SITE_EMAIL,
              areaServed: ['OM', 'GCC', 'Worldwide'],
              availableLanguage: ['en', 'ar']
            }
          ],
          sameAs: [
            'https://www.linkedin.com',
            'https://twitter.com'
          ]
        },

        // WebSite Entity
        {
          '@type': 'WebSite',
          '@id': websiteId,
          url: SITE_URL,
          name: SITE_NAME,
          publisher: {
            '@id': orgId
          },
          inLanguage: 'en-US'
        },

        // WebPage Entity for current route
        {
          '@type': currentSEO.schemaType || 'WebPage',
          '@id': webpageId,
          url: currentSEO.canonical,
          name: currentSEO.title,
          description: currentSEO.description,
          isPartOf: {
            '@id': websiteId
          },
          about: {
            '@id': orgId
          },
          inLanguage: 'en-US'
        }
      ]

      // Add BreadcrumbList Schema if breadcrumbs exist
      if (currentSEO.breadcrumbs && currentSEO.breadcrumbs.length > 0) {
        schemaGraph.push({
          '@type': 'BreadcrumbList',
          '@id': `${currentSEO.canonical}#breadcrumb`,
          itemListElement: currentSEO.breadcrumbs.map((crumb, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: crumb.name,
            item: crumb.url
          }))
        })
      }

      // Add Service Schema if route represents a service
      if (currentSEO.serviceType) {
        schemaGraph.push({
          '@type': 'Service',
          '@id': `${currentSEO.canonical}#service`,
          name: currentSEO.serviceType,
          provider: {
            '@id': orgId
          },
          areaServed: {
            '@type': 'AdministrativeArea',
            name: 'Global Maritime Trade Routes'
          },
          description: currentSEO.description,
          serviceType: currentSEO.serviceType
        })
      }

      // Specific Schema additions for About Us (People / Leadership)
      if (pathname === '/about-us') {
        schemaGraph.push(
          {
            '@type': 'Person',
            name: 'H.H. Sayyid Hamoud Kais Tarik Al Said',
            jobTitle: 'Chairman',
            worksFor: { '@id': orgId }
          },
          {
            '@type': 'Person',
            name: 'Sheikh Julanda Salim Hamood Al Hashmi',
            jobTitle: 'Vice Chairman',
            worksFor: { '@id': orgId }
          },
          {
            '@type': 'Person',
            name: 'Dr. Davis Kallukaran',
            jobTitle: 'Board Member',
            worksFor: { '@id': orgId }
          }
        )
      }

      // Specific Schema additions for Contact Us
      if (pathname === '/contact-us') {
        schemaGraph.push({
          '@type': 'ContactPage',
          '@id': `${SITE_URL}/contact-us#contactpage`,
          url: `${SITE_URL}/contact-us`,
          mainEntity: {
            '@id': orgId
          }
        })
      }

      jsonLdScript.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': schemaGraph
      })
    }
  }, [pathname, isPrivate, currentSEO])

  return null
}
