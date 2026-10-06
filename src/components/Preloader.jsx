import React, { useState, useEffect } from 'react'

export default function Preloader({ minDisplayTime = 300 }) {
  const hasSeenPreloader = typeof window !== 'undefined' && sessionStorage.getItem('gvm_preloader_seen')
  const [isLoading, setIsLoading] = useState(!hasSeenPreloader)
  const [shouldRender, setShouldRender] = useState(!hasSeenPreloader)

  useEffect(() => {
    if (hasSeenPreloader) return

    const timer = setTimeout(() => {
      setIsLoading(false)
      try {
        sessionStorage.setItem('gvm_preloader_seen', 'true')
      } catch (e) {}
      const removeTimer = setTimeout(() => setShouldRender(false), 400)
      return () => clearTimeout(removeTimer)
    }, minDisplayTime)

    return () => clearTimeout(timer)
  }, [minDisplayTime, hasSeenPreloader])

  if (!shouldRender) return null

  return (
    <div
      id="preloader"
      className={isLoading ? 'opacity-100' : 'opacity-0 preloader-hidden'}
    >
      <div className="relative flex flex-col items-center">
        {/* Maritime Radar / Pulse Ring */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-[#003366]/20 animate-ping" />
          <div className="absolute inset-2 rounded-full border border-[#003366]/30 animate-pulse" />
          <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-[#003366] animate-spin" />

          {/* GVM Center Logo */}
          <div className="relative z-10 w-16 h-16 rounded-full bg-white flex items-center justify-center p-3 shadow-md border border-slate-200">
            <img
              src="/assets/uploads/2025/07/logo.svg"
              alt="GVM"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = '/assets/logo.svg'
              }}
            />
          </div>
        </div>

        {/* Text */}
        <div className="mt-5 text-center">
          <h4 className="text-[#003366] font-heading font-bold text-lg tracking-wider">
            GLOBAL VESSEL MANAGEMENT
          </h4>
          <p className="text-xs text-slate-500 tracking-widest uppercase mt-1 animate-pulse font-medium">
            Navigating Excellence at Sea
          </p>
        </div>
      </div>
    </div>
  )
}
