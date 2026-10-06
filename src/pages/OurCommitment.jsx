import React, { useEffect } from 'react'

export default function OurCommitment() {
  useEffect(() => {
    document.title = 'Our Commitment | Global Vessel Management'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="our-commitment-page-wrapper">
      {/* banner start */}
      <div 
        className="banner inner_banner" 
        style={{ backgroundImage: 'url(/assets/uploads/2025/07/Picture1-2-1.png)' }}
      >
        <div className="container">
          <div className="banner_text">
            <h1>Our Commitment</h1>
          </div>
        </div>
      </div>
      {/* banner end */}

      <div className="inner_about_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="inner_about_img">
                <img 
                  src="/assets/uploads/2025/07/banner-img.png" 
                  alt="Our Commitment" 
                  loading="lazy" 
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cmn_title">
                <h2>Our Commitment</h2>
                <p>
                  At GVM, we understand that our long-term success is directly tied to the health of the planet and the wellbeing of our people. We are committed to delivering exceptional vessel management services while promoting environmental stewardship and corporate responsibility.
                </p>
                <p>
                  We will continue to lead by example, advocating for innovative and sustainable solutions that reduce our environmental footprint and set new industry standards. Through collaboration, transparency, and a relentless commitment to excellence, GVM aims to shape a more sustainable future for the maritime industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
