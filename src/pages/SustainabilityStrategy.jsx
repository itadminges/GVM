import React, { useEffect } from 'react'

export default function SustainabilityStrategy() {
  useEffect(() => {
    document.title = 'Sustainability Strategy | Global Vessel Management'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="sustainability-strategy-page-wrapper">
      {/* banner start */}
      <div 
        className="banner inner_banner" 
        style={{ backgroundImage: 'url(/assets/uploads/2025/07/sustain-banner.png)' }}
      >
        <div className="container">
          <div className="banner_text">
            <h1>Sustainability Strategy</h1>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* Frame 1: Sustainovate Intro */}
      <div className="inner_about_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="inner_about_img">
                <img 
                  src="/assets/uploads/2025/07/st1.png" 
                  alt="Sustainability at GVM" 
                  loading="lazy" 
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cmn_title">
                <h6>Sustainovate</h6>
                <h2>Sustainability at GVM</h2>
                <p>
                  At Global Vessel Management LLC (GVM), sustainability isn’t just a concept—it’s a core value that drives our operations. We are dedicated to making meaningful contributions toward the health of our planet while ensuring the long-term success of our business. Our commitment to sustainability spans from environmental stewardship to social responsibility, aligning with international best practices and focusing on innovation and proactive solutions.
                </p>
                <p>
                  We recognize that the maritime industry plays a crucial role in global trade and transportation, and with that comes an inherent responsibility to minimize our environmental footprint and safeguard the welfare of the people who rely on our services. Our sustainability strategy is designed to fulfill this responsibility while creating value for our stakeholders, clients, and the wider maritime community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frame 2: Four Main Pillars Roadmap */}
      <div className="vm_stmnt">
        <div className="container">
          <div className="cmn_title text-center">
            <h6>Roadmap</h6>
            <h2>Our Sustainability Strategy</h2>
            <p>
              At GVM, we understand that a sustainable future is only possible through clear strategies and continuous improvement. Our sustainability strategy rests on four main pillars
            </p>
          </div>

          <div className="vm_stmnt_wrapper">
            {/* Pillar 1: Navigating Responsibility */}
            <div className="row mb-5">
              <div className="col-lg-6">
                <div className="cmn_title">
                  <h3>Navigating Responsibility</h3>
                  <p>
                    We operate with a sense of duty and accountability in all aspects of our business, recognizing that every decision and action we take has an impact on the environment and society. By navigating with responsibility, we ensure that our business practices contribute positively to the maritime industry and the global community. We actively engage with stakeholders, including regulators, customers, and suppliers, to ensure that our operations meet or exceed environmental standards.
                  </p>
                  <h5>Our policies and procedures are designed to:</h5>
                  <ul>
                    <li>Adhere to national and international environmental regulations, including IMO conventions and regional agreements.</li>
                    <li>Promote ethical decision-making across all levels of the organization.</li>
                    <li>Foster a culture of continuous improvement, with a focus on risk mitigation and innovation in environmental practices.</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="strategy_img">
                  <img 
                    src="/assets/uploads/2025/07/st2.png" 
                    alt="Navigating Responsibility" 
                    loading="lazy" 
                  />
                </div>
              </div>
            </div>

            {/* Pillar 2: Evolving Environmental Stewardship */}
            <div className="row mb-5">
              <div className="col-lg-6">
                <div className="cmn_title">
                  <h3>Evolving Environmental Stewardship</h3>
                  <p>
                    Environmental stewardship is at the heart of what we do. We are committed to minimizing our environmental impact through a range of measures aimed at reducing emissions, energy consumption, and waste. By evolving with the changing landscape of environmental challenges, we seek to innovate and adopt technologies that drive greater operational efficiency and lower our carbon footprint.
                  </p>
                  <h5>We aim to:</h5>
                  <ul>
                    <li>Reduce greenhouse gas emissions across our fleet by optimizing vessel operations.</li>
                    <li>Incorporate alternative fuel sources, such as LNG, into our fleet, where feasible.</li>
                    <li>Enhance energy efficiency through continuous monitoring and technological upgrades.</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="strategy_img">
                  <img 
                    src="/assets/uploads/2025/07/st3.png" 
                    alt="Evolving Environmental Stewardship" 
                    loading="lazy" 
                  />
                </div>
              </div>
            </div>

            {/* Pillar 3: Safeguarding People */}
            <div className="row mb-5">
              <div className="col-lg-6">
                <div className="cmn_title">
                  <h3>Safeguarding People</h3>
                  <p>
                    Our commitment to sustainability extends beyond the environment. At GVM, we place a strong emphasis on the health, safety, and wellbeing of our employees, partners, and the communities we serve. We prioritize developing a robust culture of safety on board and ashore, ensuring that our operations protect human life at all times.
                  </p>
                  <h5>Our initiatives include:</h5>
                  <ul>
                    <li>Comprehensive health and safety programs for crew and shore-based personnel.</li>
                    <li>Mental health support and wellbeing initiatives for employees, ensuring a healthy work-life balance.</li>
                    <li>Continuous training and development programs to ensure our workforce is equipped to handle evolving industry challenges.</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="strategy_img">
                  <img 
                    src="/assets/uploads/2025/07/st4.png" 
                    alt="Safeguarding People" 
                    loading="lazy" 
                  />
                </div>
              </div>
            </div>

            {/* Pillar 4: Working Together */}
            <div className="row mb-5">
              <div className="col-lg-6">
                <div className="cmn_title">
                  <h3>Working Together</h3>
                  <p>
                    We believe in the power of collaboration. Sustainability is not an individual effort, but a collective one. At GVM, we work together with stakeholders at every level to foster an environment of shared value. We engage with regulators, clients, environmental organizations, and other maritime stakeholders to drive forward industry-wide sustainable practices.
                  </p>
                  <h5>Our collaboration efforts focus on:</h5>
                  <ul>
                    <li>Building strong partnerships with our clients to deliver customized, sustainable vessel management solutions.</li>
                    <li>Engaging in industry-wide forums and initiatives aimed at advancing maritime sustainability.</li>
                    <li>Working closely with our suppliers to ensure responsible sourcing and reduce the environmental impact of the materials we use.</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="strategy_img">
                  <img 
                    src="/assets/uploads/2025/07/st5.png" 
                    alt="Working Together" 
                    loading="lazy" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
