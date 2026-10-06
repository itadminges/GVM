import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { subpagesContent } from '../data/subpagesContent'

export default function ServiceDetail() {
  const { serviceSlug, subSlug } = useParams()

  const normalizeSlug = (slug) => {
    if (!slug || slug === 'ship-management') return 'tankers'
    return slug
  }

  const currentSlug = normalizeSlug(subSlug || serviceSlug)
  const content = subpagesContent[currentSlug] || subpagesContent['tankers']

  useEffect(() => {
    document.title = `${content.title} | Global Vessel Management`
    window.scrollTo(0, 0)
  }, [currentSlug, content.title])

  return (
    <div className="subpage-wrapper">
      {/* 1. Authentic WordPress Inner Banner */}
      <div
        className="banner inner_banner"
        style={{
          backgroundImage: `url(${content.bannerImg || '/assets/uploads/2025/07/service-banner.png'})`
        }}
      >
        <div className="container">
          <div className="banner_text">
            <h1>{content.title}</h1>
          </div>
        </div>
      </div>

      {/* 2. Authentic WordPress Default Content */}
      <div className="default_content">
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
      </div>
    </div>
  )
}
