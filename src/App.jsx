import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import SEOHead from './components/SEOHead'
import { SubmissionsProvider } from './context/SubmissionsContext'

// Pages
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ServicesIndex from './pages/ServicesIndex'
import ServiceDetail from './pages/ServiceDetail'
import SustainabilityStrategy from './pages/SustainabilityStrategy'
import EnvironmentalSolutions from './pages/EnvironmentalSolutions'
import OurCommitment from './pages/OurCommitment'
import CSR from './pages/CSR'
import ContactUs from './pages/ContactUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import CookiesPolicy from './pages/CookiesPolicy'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'

export default function App() {
  return (
    <SubmissionsProvider>
      <SEOHead />
      <Routes>
        {/* Admin and WP routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/wp-login.php" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/wp-admin" element={<Navigate to="/admin" replace />} />
        <Route path="/wp-admin/*" element={<Navigate to="/admin" replace />} />

        {/* Public Website Routes wrapped in Layout */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/services" element={<ServicesIndex />} />
                <Route path="/service" element={<Navigate to="/services" replace />} />
                <Route path="/service/ship-management" element={<Navigate to="/service/ship-management/tankers" replace />} />
                <Route path="/service/:serviceSlug" element={<ServiceDetail />} />
                <Route path="/service/ship-management/:subSlug" element={<ServiceDetail />} />
                <Route path="/sustainability-strategy" element={<SustainabilityStrategy />} />
                <Route path="/environmental-solutions" element={<EnvironmentalSolutions />} />
                <Route path="/our-commitment" element={<OurCommitment />} />
                <Route path="/csr" element={<CSR />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/cookies-policy" element={<CookiesPolicy />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </SubmissionsProvider>
  )
}
