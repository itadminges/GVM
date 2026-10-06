import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSubmissions } from '../context/SubmissionsContext'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)

  const location = useLocation()
  const { openEnquiryModal } = useSubmissions()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile navigation on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveMobileSubmenu(null)
  }, [location.pathname])

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const toggleSubmenu = (menuName, e) => {
    e.preventDefault()
    e.stopPropagation()
    setActiveMobileSubmenu(prev => prev === menuName ? null : menuName)
  }

  return (
    <header
      className={`header ${isScrolled ? 'sticky' : ''}`}
      style={{
        backgroundImage: 'url(/assets/uploads/2025/07/head-bg.png)',
      }}
    >
      <div className="header_wrapper">
        {/* LOGO */}
        <div className="logo">
          <Link to="/" aria-label="Global Vessel Management Home">
            <img
              src="/assets/uploads/2025/07/logo.svg"
              alt="Global Vessel Management"
              width="189"
              height="51"
              fetchPriority="high"
              decoding="async"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = '/assets/logo.svg'
              }}
            />
          </Link>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="nav-links-wrapper">
          {/* Backdrop overlay for mobile menu */}
          {isMobileMenuOpen && (
            <div
              className="nav-backdrop"
              onClick={() => setIsMobileMenuOpen(false)}
              role="button"
              tabIndex={0}
              aria-label="Close navigation overlay"
            />
          )}

          <div className="nav_and_mail">
            <nav className={`nav_sec ${isMobileMenuOpen ? 'slidein' : ''}`}>
              {/* Close Button for Mobile Drawer */}
              {isMobileMenuOpen && (
                <div
                  className="cls-btn"
                  onClick={() => setIsMobileMenuOpen(false)}
                  role="button"
                  tabIndex={0}
                  aria-label="Close menu"
                />
              )}

              <ul id="menu-navigation-menu" className="menu">
                {/* Home */}
                <li className={`menu-item menu-item-type-post_type menu-item-object-page ${isActive('/') ? 'active current-menu-item' : ''}`}>
                  <Link to="/">Home</Link>
                </li>

                {/* About Us */}
                <li className={`menu-item menu-item-type-post_type menu-item-object-page ${isActive('/about-us') ? 'active current-menu-item' : ''}`}>
                  <Link to="/about-us">About Us</Link>
                </li>

                {/* Services with Multi-level Dropdown */}
                <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children ${isActive('/service') ? 'active current-menu-item' : ''}`}>
                  <Link to="/services">Services</Link>
                  <i 
                    className={`arw-nav ${activeMobileSubmenu === 'services' ? 'actv' : ''}`}
                    onClick={(e) => toggleSubmenu('services', e)}
                  />
                  <ul className={`sub-menu ${activeMobileSubmenu === 'services' ? 'block' : ''}`}>
                    {/* Ship Management Nested */}
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                      <Link to="/service/ship-management/tankers">Ship Management</Link>
                      <i 
                        className={`arw-nav ${activeMobileSubmenu === 'ship-mgmt' ? 'actv' : ''}`}
                        onClick={(e) => toggleSubmenu('ship-mgmt', e)}
                      />
                      <ul className={`sub-menu ${activeMobileSubmenu === 'ship-mgmt' ? 'block' : ''}`}>
                        <li><Link to="/service/ship-management/tankers">Tankers</Link></li>
                        <li><Link to="/service/ship-management/bulk-carriers">Bulk Carriers</Link></li>
                        <li><Link to="/service/ship-management/container-vessels">Container Vessels</Link></li>
                        <li><Link to="/service/ship-management/leisure">Leisure</Link></li>
                        <li><Link to="/service/ship-management/offshore">Offshore</Link></li>
                        <li><Link to="/service/ship-management/lng">LNG</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/service/new-building-supervision">New Building Supervision</Link></li>
                    <li><Link to="/service/lay-up-management">Lay-up Management</Link></li>
                    <li><Link to="/service/crew-management">Crew Management</Link></li>
                    <li><Link to="/service/technology-and-innovation">Technology and Innovation</Link></li>
                    <li><Link to="/service/insurance-and-procurement">Insurance and Procurement</Link></li>
                  </ul>
                </li>

                {/* Sustainability */}
                <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children ${isActive('/sustainability') || isActive('/environmental') || isActive('/our-commitment') ? 'active current-menu-item' : ''}`}>
                  <Link to="/sustainability-strategy">Sustainability</Link>
                  <i 
                    className={`arw-nav ${activeMobileSubmenu === 'sustainability' ? 'actv' : ''}`}
                    onClick={(e) => toggleSubmenu('sustainability', e)}
                  />
                  <ul className={`sub-menu ${activeMobileSubmenu === 'sustainability' ? 'block' : ''}`}>
                    <li><Link to="/environmental-solutions">Environmental Solutions</Link></li>
                    <li><Link to="/our-commitment">Our Commitment</Link></li>
                  </ul>
                </li>

                {/* Contact Us */}
                <li className={`menu-item menu-item-type-post_type menu-item-object-page ${isActive('/contact-us') ? 'active current-menu-item' : ''}`}>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* CTA BUTTONS & MOBILE CONTROLS */}
        <div className="cmn_btnn">
          <button
            type="button"
            onClick={() => openEnquiryModal()}
            className="btnn btnn-blue"
            style={{ cursor: 'pointer', border: 'none', font: 'inherit' }}
          >
            Make an Enquiry{' '}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.0084 0.164451L4.30658 0.292544C4.12904 0.299021 3.95848 0.374924 3.83164 0.503906C3.7048 0.632887 3.63182 0.804628 3.62843 0.982137C3.62504 1.15965 3.6915 1.32872 3.8135 1.45295C3.9355 1.57717 4.10328 1.64661 4.28071 1.6463L9.34821 1.54945L0.768919 10.1287C0.639534 10.2581 0.564918 10.4317 0.561487 10.6112C0.558055 10.7908 0.626089 10.9616 0.750621 11.0861C0.875152 11.2107 1.04598 11.2787 1.22553 11.2753C1.40508 11.2718 1.57863 11.1972 1.70802 11.0678L10.2873 2.48854L10.1904 7.55604C10.1872 7.64595 10.2018 7.73493 10.2335 7.81778C10.2653 7.90064 10.3134 7.97571 10.3752 8.03862C10.437 8.10153 10.5112 8.15102 10.5934 8.18419C10.6756 8.21737 10.7643 8.23357 10.8542 8.23185C10.9441 8.23013 11.0334 8.21053 11.117 8.17419C11.2005 8.13784 11.2766 8.08548 11.3409 8.02016C11.4051 7.95485 11.4562 7.87788 11.4911 7.79375C11.526 7.70962 11.5441 7.62002 11.5442 7.53017L11.6723 0.828393C11.6757 0.648883 11.6077 0.478095 11.4832 0.353588C11.3587 0.22908 11.1879 0.161048 11.0084 0.164451Z"
                fill="white"
              />
            </svg>
            <span />
          </button>

          <div className="mobile-btn-wrap">
            <a className="mobile-btn" href="tel:+96871770077" aria-label="Call GVM">
              <i className="fa-solid fa-phone" />
            </a>
          </div>

          <span
            className="toggle-menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <i className="fa-sharp fa-solid fa-bars-sort" />
          </span>
        </div>
      </div>
    </header>
  )
}
