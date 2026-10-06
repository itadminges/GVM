import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }, [pathname])

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!visible) return null

  return (
    <div className="back_to_top fixed bottom-6 right-6 z-40">
      <button
        id="back-to-top"
        type="button"
        onClick={scrollToTop}
        className="w-11 h-11 rounded-full bg-[#003366] hover:bg-[#002244] text-white flex items-center justify-center shadow-xl transition-all hover:scale-110 cursor-pointer border border-white/20"
        aria-label="Back to Top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 32 32"
          className="fill-current"
        >
          <path d="M16.71 15.29a1 1 0 0 0-1.42 0l-10 10a1 1 0 0 0 1.42 1.42l9.29-9.3 9.29 9.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
          <path d="M6.71 16.71 16 7.41l9.29 9.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-10-10a1 1 0 0 0-1.42 0l-10 10a1 1 0 0 0 1.42 1.42z" />
        </svg>
      </button>
    </div>
  )
}
