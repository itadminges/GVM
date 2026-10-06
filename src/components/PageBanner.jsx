import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageBanner({ 
  title, 
  subtitle, 
  bgImage = '/assets/uploads/2025/07/about-banner.png',
  breadcrumbs = []
}) {
  return (
    <section 
      className="inner_banner relative flex items-center justify-center text-center overflow-hidden py-24 sm:py-28 md:py-32"
      style={{
        background: `linear-gradient(rgba(4, 15, 27, 0.78), rgba(4, 15, 27, 0.88)), url(${bgImage}) no-repeat center center / cover`
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb if available */}
          <nav className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-cyan-300 font-medium mb-3 uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            {breadcrumbs.map((b, idx) => (
              <React.Fragment key={idx}>
                {b.path ? (
                  <Link to={b.path} className="hover:text-white transition-colors">{b.label}</Link>
                ) : (
                  <span className="text-slate-300">{b.label}</span>
                )}
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </React.Fragment>
            ))}
            <span className="text-white font-semibold line-clamp-1">{title}</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight mb-4 drop-shadow-md">
            {title}
          </h1>

          {subtitle && (
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
