import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Preloader from './Preloader'
import ScrollToTop from './ScrollToTop'
import EnquiryModal from './EnquiryModal'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <Preloader />
      <Header />
      <main className="flex-grow bg-white">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <EnquiryModal />
    </div>
  )
}
