import React, { useEffect } from 'react'

export default function CSR() {
  useEffect(() => {
    document.title = 'CSR | Global Vessel Management'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="csr-page-wrapper">
      {/* banner start */}
      <div 
        className="banner inner_banner" 
        style={{ backgroundImage: 'url(/assets/uploads/2025/07/Picture7-1.png)' }}
      >
        <div className="container">
          <div className="banner_text">
            <h1>CSR</h1>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* Frame 1: CSR Intro */}
      <div className="inner_about_sec csr2-sec1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="inner_about_img">
                <img 
                  src="/assets/uploads/2025/07/ab1.png" 
                  alt="Corporate Social Responsibility" 
                  loading="lazy" 
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cmn_title">
                <h3>Corporate Social Responsibility (CSR) through Local Training &amp; Employment</h3>
                <p>
                  At the heart of sustainable vessel management lies a strong commitment to Corporate Social Responsibility. Investing in <strong>local training and employment programs</strong> not only strengthens the maritime industry but also empowers the communities we serve. By equipping local talent with specialized skills in ship operations, technical services, and port logistics, we help create long-term employment opportunities and foster economic resilience. These initiatives support national development goals, reduce reliance on foreign labor, and ensure a pipeline of qualified professionals who uphold international standards. Through partnerships with maritime academies, hands-on apprenticeships, and continuous professional development, we are proud to contribute to a skilled and empowered local workforce—anchoring success for both industry and society.
                </p>
                <p>
                  As a responsible leader in the maritime sector, we recognize that true progress goes beyond operational excellence. Our <strong>Corporate Social Responsibility (CSR)</strong> strategy is rooted in creating long-term, inclusive value by investing in <strong>local human capital</strong>, promoting <strong>sustainable maritime practices</strong>, and fostering <strong>community development</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frame 2: CSR Pillars / Action Points */}
      <div className="csr-sec2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ol>
                <li><strong>Maritime Education &amp; Skills Development Programs</strong></li>
              </ol>
              <p>We are committed to bridging the skills gap in the maritime industry through:</p>
              <ul>
                <li><strong>Scholarships &amp; Sponsorships</strong> for local students in marine engineering, nautical science, and maritime logistics.</li>
                <li><strong>Partnerships with maritime academies</strong> to offer accredited courses and hands-on training in vessel operations, safety management, and maritime law.</li>
                <li><strong>Cadetship &amp; Internship Programs</strong> on board our vessels and within port operations to give young Omanis real-world exposure.</li>
              </ul>
              <p>&nbsp;</p>

              <ol start="2">
                <li><strong>Local Employment &amp; Career Development</strong></li>
              </ol>
              <p>We prioritize local employment by:</p>
              <ul>
                <li>Creating <strong>structured career pathways</strong> for Omani nationals across technical, operational, and managerial roles.</li>
                <li>Running <strong>on-the-job training (OJT) programs</strong> for roles in engine and deck departments, port logistics, supply chain management, and vessel maintenance.</li>
                <li>Supporting <strong>women in maritime</strong> by offering targeted programs and safe working environments that encourage greater female participation in the industry.</li>
              </ul>
              <p>&nbsp;</p>

              <ol start="3">
                <li><strong>Capacity Building Through Community-Based Training</strong></li>
              </ol>
              <p>To support broader community engagement, we:</p>
              <ul>
                <li>Conduct <strong>free or subsidized short courses</strong> in areas like firefighting, safety at sea, basic seamanship, and maritime English.</li>
                <li>Host <strong>workshops and seminars</strong> in coastal towns to raise awareness about careers in the maritime field.</li>
                <li>Collaborate with local NGOs and technical colleges to build training infrastructure in underserved areas.</li>
              </ul>
              <p>&nbsp;</p>

              <ol start="4">
                <li><strong>Support for Startups and Local Service Providers</strong></li>
              </ol>
              <p>We boost the local economy by:</p>
              <ul>
                <li>Subcontracting non-core services like catering, transportation, and minor repairs to <strong>local SMEs</strong> and entrepreneurs.</li>
                <li>Facilitating <strong>mentorship and knowledge transfer</strong> to local marine services companies to enhance their quality and competitiveness.</li>
              </ul>
              <p>&nbsp;</p>

              <ol start="5">
                <li><strong>Environmental Stewardship &amp; Sustainability</strong></li>
              </ol>
              <p>In line with global sustainability goals:</p>
              <ul>
                <li>We conduct <strong>community shoreline clean-up initiatives</strong> and involve local youth in marine conservation education.</li>
                <li>Invest in <strong>green technologies and training</strong> to reduce emissions and promote eco-friendly shipping practices.</li>
                <li>Educate local fishermen and marine users about <strong>marine biodiversity and pollution control</strong>.</li>
              </ul>
              <p>&nbsp;</p>

              <ol start="6">
                <li><strong>Social Investment in Coastal Communities</strong></li>
              </ol>
              <p>Our impact goes beyond business. We support:</p>
              <ul>
                <li><strong>Community infrastructure projects</strong> like vocational schools, health clinics, and public amenities in port towns.</li>
                <li><strong>Emergency preparedness programs</strong> in collaboration with local authorities for coastal disaster response and marine safety.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Frame 3: CSR Vision 2040 Alignment */}
      <div className="inner_about_sec csr2-sec1 csr2-sec3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="inner_about_img">
                <img 
                  src="/assets/uploads/2025/07/service-banner-1.png" 
                  alt="Oman Vision 2040" 
                  loading="lazy" 
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cmn_title">
                <p>
                  <strong>By aligning our CSR efforts with national priorities like Oman Vision 2040</strong>, we aim to be more than a maritime service provider—we strive to be a partner in social and economic progress. Through inclusive employment, capacity building, and environmental care, we are proud to help chart a sustainable course for Oman’s maritime future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
