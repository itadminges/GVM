import React, { useEffect } from 'react'

export default function EnvironmentalSolutions() {
  useEffect(() => {
    document.title = 'Environmental Solutions | Global Vessel Management'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="environmental-solutions-page-wrapper">
      {/* banner start */}
      <div 
        className="banner inner_banner" 
        style={{ backgroundImage: 'url(/assets/uploads/2025/07/Picture2-2.png)' }}
      >
        <div className="container">
          <div className="banner_text">
            <h1>Environmental Solutions</h1>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* Frame 1: Intro */}
      <div className="inner_about_sec inner-env-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="inner_about_img">
                <img 
                  src="/assets/uploads/2025/07/banner-img.png" 
                  alt="Environmental Solutions" 
                  loading="lazy" 
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cmn_title">
                <h2>Environmental Solutions</h2>
                <p>
                  At GVM, we offer a comprehensive suite of environmental solutions designed to help our clients meet their sustainability goals. These solutions are rooted in innovative technologies and industry-leading best practices, ensuring we are contributing to the global effort of reducing marine pollution, conserving resources, and improving vessel efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frame 2: Alternating Solutions List */}
      <section className="env-page-sec">
        <div className="container">
          <div className="content-wrap">
            {/* Item 1: EEXI Assessment */}
            <div className="row mb-5 gy-4 gy-md-0">
              <div className="col-12 col-md-6 col-left">
                <div className="env-img">
                  <img 
                    src="/assets/uploads/2025/07/Picture3-2.png" 
                    alt="EEXI Assessment" 
                    loading="lazy" 
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-right">
                <h2>EEXI Assessment (Energy Efficiency Existing Ship Index)</h2>
                <p>
                  We help vessels comply with the IMO’s Energy Efficiency Existing Ship Index (EEXI) requirements by conducting thorough assessments of their energy efficiency performance. Our team of experts identifies opportunities to optimize vessel performance, reduce emissions, and ensure compliance with global regulations.
                </p>
              </div>
            </div>

            {/* Item 2: BWTS */}
            <div className="row mb-5 gy-4 gy-md-0">
              <div className="col-12 col-md-6 col-left">
                <div className="env-img">
                  <img 
                    src="/assets/uploads/2025/07/Picture12-1-1.png" 
                    alt="Ballast Water Treatment Systems" 
                    loading="lazy" 
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-right">
                <h2>BWTS (Ballast Water Treatment Systems)</h2>
                <p>
                  To safeguard marine biodiversity, we implement Ballast Water Treatment Systems (BWTS) onboard our vessels, effectively treating ballast water to prevent the spread of invasive aquatic species. Our team ensures that these systems are compliant with the International Maritime Organization’s (IMO) Ballast Water Management Convention, minimizing ecological disruption.
                </p>
              </div>
            </div>

            {/* Item 3: Underwater Technologies */}
            <div className="row mb-5 gy-4 gy-md-0">
              <div className="col-12 col-md-6 col-left">
                <div className="env-img">
                  <img 
                    src="/assets/uploads/2025/07/video-poster.png" 
                    alt="Underwater Technologies" 
                    loading="lazy" 
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-right">
                <h2>Underwater Technologies</h2>
                <p>
                  We utilize state-of-the-art underwater monitoring technologies to assess and optimize hull performance. This helps vessels maintain fuel efficiency, reduce drag, and extend their operational lifespan. Our solutions include advanced sonar and ultrasound technologies that provide real-time data on hull condition, reducing the need for frequent dry-docking.
                </p>
              </div>
            </div>

            {/* Item 4: Condition Monitoring */}
            <div className="row mb-5 gy-4 gy-md-0">
              <div className="col-12 col-md-6 col-left">
                <div className="env-img">
                  <img 
                    src="/assets/uploads/2025/07/Picture4-1-1.png" 
                    alt="Condition Monitoring" 
                    loading="lazy" 
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-right">
                <h2>Condition Monitoring</h2>
                <p>
                  Through comprehensive condition monitoring, we gather real-time data on vessel performance, allowing us to predict maintenance needs and optimize operations. This proactive approach helps extend the lifespan of vessels, reduce downtime, and enhance fuel efficiency.
                </p>
              </div>
            </div>

            {/* Item 5: Single-Use Plastics Reduction */}
            <div className="row mb-5 gy-4 gy-md-0">
              <div className="col-12 col-md-6 col-left">
                <div className="env-img">
                  <img 
                    src="/assets/uploads/2025/07/Picture6-1.png" 
                    alt="Single-Use Plastics Reduction" 
                    loading="lazy" 
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-right">
                <h2>Single-Use Plastics Reduction</h2>
                <p>
                  As part of our commitment to sustainability, we have developed a strategy to eliminate single-use plastics onboard our vessels. We replace these plastics with sustainable alternatives and actively promote recycling and waste reduction across all operations. We also work with our crews to ensure that sustainable practices are followed across the fleet.
                </p>
              </div>
            </div>

            {/* Item 6: Inventory of Hazardous Materials (IHM) */}
            <div className="row mb-5 gy-4 gy-md-0">
              <div className="col-12 col-md-6 col-left">
                <div className="env-img">
                  <img 
                    src="/assets/uploads/2025/07/Picture17-1-scaled.png" 
                    alt="Inventory of Hazardous Materials (IHM)" 
                    loading="lazy" 
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-right">
                <h2>Inventory of Hazardous Materials (IHM)</h2>
                <p>
                  We maintain comprehensive inventories of hazardous materials aboard our vessels to ensure they are managed and disposed of safely and in compliance with international regulations. Our team helps ensure that vessels are fully compliant with the European Union’s Ship Recycling Regulation and the Hong Kong International Convention for the Safe and Environmentally Sound Recycling of Ships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
