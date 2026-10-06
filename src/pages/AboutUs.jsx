import React, { useState, useEffect } from 'react'

export default function AboutUs() {
  const [selectedLeader, setSelectedLeader] = useState(null)
  const [slideIndex, setSlideIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(2)

  // Handle responsive slidesToShow for goal slider matching WordPress edit-js.js
  useEffect(() => {
    document.title = 'About Us | Global Vessel Management'
    window.scrollTo(0, 0)

    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 992 ? 1 : 2)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedLeader(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // 7 Strategic Goals Data from raw_html/about-us.html
  const strategicGoals = [
    {
      id: 1,
      title: 'Achieve Operational Excellence',
      image: '/assets/uploads/2025/07/Picture1-1.png',
      description:
        'Continuously enhance the quality, reliability, and efficiency of our vessel management services. We aim to minimize downtime, reduce costs, and ensure optimal performance of every vessel under our care through proactive planning, skilled technical management, and detailed oversight.'
    },
    {
      id: 2,
      title: 'Lead in Safety and Regulatory Compliance',
      image: '/assets/uploads/2025/07/Picture1-3.png',
      description:
        'Uphold and exceed international maritime regulations, including IMO, ISM, and flag-state requirements. Our goal is to maintain a zero-incident safety record through rigorous training, continuous audits, and a company-wide safety culture that puts people and the environment first.'
    },
    {
      id: 3,
      title: 'Deliver Client-Centric Service',
      image: '/assets/uploads/2025/07/Picture11.png',
      description:
        'Build long-lasting partnerships through transparent communication, personalized service, and agile problem-solving. GVM is committed to understanding our clients’ business goals and aligning our services to deliver measurable value and dependable results.'
    },
    {
      id: 4,
      title: 'Embrace Technological Innovation',
      image: '/assets/uploads/2025/07/Picture1.png',
      description:
        'Leverage smart technologies, real-time analytics, and integrated management platforms to deliver data-driven insights, improve decision-making, and create a modern vessel management experience. We will continue to invest in digital transformation to future-proof our operations.'
    },
    {
      id: 5,
      title: 'Champion Environmental Sustainability',
      image: '/assets/uploads/2025/07/Picture4-1.png',
      description:
        'Reduce our environmental footprint and promote green shipping practices by optimizing fuel efficiency, reducing emissions, and supporting clients in complying with global environmental standards. Our goal is to contribute meaningfully to a cleaner and more sustainable maritime industry.'
    },
    {
      id: 6,
      title: 'Establish Regional Leadership in MENA',
      image: '/assets/uploads/2025/07/Picture17.png',
      description:
        'Position GVM as the go-to vessel management company in the MENA region by building a strong operational network, expanding service capabilities, and attracting top maritime talent. We aim to be recognized for our reliability, integrity, and regional insight.'
    },
    {
      id: 7,
      title: 'Cultivate a High-Performance Team Culture',
      image: '/assets/uploads/2025/07/Picture2-1.png',
      description:
        'Attract, train, and retain top maritime professionals by fostering a culture of excellence, continuous learning, and accountability. Our people are our most valuable asset, and we aim to empower them with the tools, trust, and support needed to succeed.'
    }
  ]

  // Leadership Team Data from raw_html/about-us.html
  const leadershipTeam = [
    {
      name: 'H.H. Sayyid Hamoud Kais Tarik Al Said',
      designation: 'Chairman',
      image: '/assets/uploads/2025/07/WhatsApp-Image-2025-07-15-at-11.48.33-AM.jpeg',
      bio: [
        'His Highness Sayyid Hamoud is committed to advancing Oman’s legacy of innovation, sustainability, and economic growth.',
        'A graduate of Oxford Brookes University with a degree in International Business and Management, Sayyid Hamoud established Eagle Holdings in 2019, expanding into real estate, tourism, green energy, artificial intelligence, and IT security.',
        'Under his leadership, Eagle Holdings holds substantial assets in Muscat and beyond, including landmark developments such as Muscat Hills.',
        'His vision emphasizes cultural preservation, community empowerment, and sustainable development, positioning him as a key figure driving Oman’s future progress.'
      ]
    },
    {
      name: 'Sheikh Julanda Salim Hamood Al Hashmi',
      designation: 'Vice Chairman',
      image: '/assets/uploads/2025/07/WhatsApp-Image-1600.jpg',
      bio: [
        'Shiekh Julanda Al Hashmi is the Co-founder of Shomoukh International Investments Company, a leading Omani investment house driving innovation and economic diversification.',
        'Shk. Julanda has played a key role in transforming private sector initiatives aligned with Oman’s Vision 2040, including overseeing one of the country’s fastest-growing education networks.',
        'Sheikh Julanda holds a Bachelor of Arts from The George Washington University and a Master’s in Government and Public Policy from Harvard University. He has also completed specialized training in naval operations and executive leadership programs at Georgetown University.',
        'He serves on the Youth Shadow Advisory Board of Renaissance Services SAOG and the Foreign Investors Committee at the Oman Chamber of Commerce and Industry, contributing to Oman’s strategic international partnerships and sustainable development.'
      ]
    },
    {
      name: 'Dr. Davis Kallukaran',
      designation: 'Board Member',
      image: '/assets/uploads/2026/01/WhatsApp-Image-2026-01-11-at-11.54.08-AM.jpeg',
      bio: [
        'Dr. Davis Kallukaran is the Founding and Managing Partner of Crowe Mak Ghazali, Chartered Accountants, Muscat one of the top ten audit firms in the Sultanate of Oman. He has extensive experience in accounting, auditing, management, and IT consultancy.',
        'A Fellow of the Institute of Chartered Accountants of India, he was co-opted to the International Affairs Committee of the ICAI Council, New Delhi (2007–08), and served as the Founding Chairman of the Muscat Chapter of the Institute (2008–09). He is also a Certified Member of the Institute of Certified Fraud Examiners. Davis is a regular columnist for the Times of Oman on tax-related matters and has co-authored a book on the taxation of Non-Resident Indians.',
        'He has represented the firm at numerous international conferences on accounting, auditing, risk advisory services, and corporate finance. In recognition of his outstanding global contributions, he was honored with the Pinnacle Award the highest recognition from Crowe Horwath, a top-ten global accounting network.'
      ]
    }
  ]

  const maxSlide = Math.max(0, strategicGoals.length - slidesToShow)

  return (
    <div className="about_page_wrapper">
      {/* 1. INNER BANNER */}
      <div 
        className="banner inner_banner" 
        style={{ backgroundImage: 'url(/assets/uploads/2025/07/about-banner.png)' }}
      >
        <div className="container">
          <div className="banner_text">
            <h1>About Us</h1>
          </div>
        </div>
      </div>

      {/* 2. INNER ABOUT SECTION: WHO WE ARE */}
      <div className="inner_about_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="inner_about_img">
                <img 
                  src="/assets/uploads/2025/07/transport-logistics-concepta-1.jpg" 
                  alt="Who We Are - Global Vessel Management" 
                  loading="lazy" 
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cmn_title">
                <h6>About Us</h6>
                <h2>Who We Are</h2>
                <p>
                  GVM is a specialized maritime services company headquartered in Muscat, Sultanate of Oman, dedicated to delivering comprehensive vessel management solutions with a focus on safety, efficiency, and innovation.
                </p>
                <p>
                  We manage a diverse range of marine assets with precision and integrity ensuring optimal performance, regulatory compliance, and peace of mind for our clients. Our services span technical management, crew coordination, maintenance planning, and sustainability compliance, providing ship owners with a fully integrated management experience.
                </p>
                <p>
                  Backed by a team of seasoned maritime professionals, engineers, and operational experts, GVM blends deep industry knowledge with advanced technology to create smarter, more sustainable vessel operations. We serve the MENA region and beyond, with a strong commitment to quality, accountability, and long-term partnerships.
                </p>
                <p>
                  At GVM, we don’t just manage vessels, we navigate your vision with excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. VISION & MISSION STATEMENTS */}
      <div className="vm_stmnt">
        <div className="container">
          <div className="vm_stmnt_wrapper">
            {/* Row 1: Vision Statement */}
            <div className="row">
              <div className="col-lg-6">
                <div className="cmn_title">
                  <h6>Our Vision</h6>
                  <h2>Vision Statement</h2>
                  <p>
                    At GVM, our vision is to redefine excellence in maritime operations by becoming the most trusted, efficient, and forward-thinking vessel management partner in the MENA region and beyond. We aspire to create a maritime ecosystem where safety, sustainability, and technological advancement work in harmony to deliver seamless and optimized vessel operations. GVM aims to empower ship owners with complete peace of mind, knowing their assets are being managed with precision, transparency, and care.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="vm_stmnt_img_wrapper">
                  <div className="vm_stmnt_img">
                    <div className="statement_icon">
                      <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 58H58" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.5833 45.3333L15.25 58" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M27.916 31.0834L23.166 40.5834" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M45.332 58L31.082 31.0833" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.3288 31.869L7.22528 36.8243C7.55628 37.3908 8.28969 37.5849 8.8632 37.2579L9.90164 36.6657C10.475 36.3387 10.6716 35.6143 10.3405 35.0478L7.4441 30.0925C7.11299 29.526 6.37958 29.3319 5.80606 29.6589L4.76774 30.2511C4.19423 30.5782 3.99769 31.3026 4.3288 31.869Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.584 27.363L9.73992 34.25L7.33398 30.0525L19.1769 23.1667" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M46.918 1.91054C50.4516 0.0362805 54.9701 1.14854 57.0103 4.39489C59.0504 7.64124 57.8396 11.7924 54.306 13.6667L46.918 1.91054Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M49.3629 17.78L42.3293 4.88245C41.9973 4.27365 42.1942 3.49514 42.7694 3.14369L45.9973 1.17073C46.5723 0.819157 47.3077 1.02788 47.6397 1.63656L54.6734 14.5341C55.0054 15.1429 54.8083 15.9214 54.2333 16.2729L51.0053 18.2458C50.4303 18.5974 49.695 18.3888 49.3629 17.78Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M38.625 7.78559L42.1153 5.75008L48.4987 16.9185L38.0623 23.0051C37.4915 23.3379 36.7618 23.1404 36.4323 22.5639L31.2421 13.483C30.9126 12.9066 31.1081 12.1694 31.6788 11.8367L35.304 9.72234" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M31.0846 13.6667L19.1037 20.4789C18.448 20.8506 18.2232 21.6762 18.602 22.3215L22.4156 28.8246C22.7931 29.4699 23.6313 29.6919 24.287 29.319L25.5996 28.5731" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M32.668 23.1667H35.8346" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M34.2487 27.1249C34.2487 29.3111 32.4764 31.0833 30.2903 31.0833C28.1043 31.0833 26.332 29.3111 26.332 27.1249C26.332 24.9388 28.1043 23.1666 30.2903 23.1666C32.4764 23.1666 34.2487 24.9388 34.2487 27.1249Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <img 
                      src="/assets/uploads/2025/07/fgha.png" 
                      alt="GVM Vision" 
                      loading="lazy" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Mission Statement */}
            <div className="row">
              <div className="col-lg-6">
                <div className="cmn_title">
                  <h6>Our Mission</h6>
                  <h2>Mission Statement</h2>
                  <p>
                    At GVM, our mission is to deliver safe, efficient, and innovative vessel management solutions that protect our clients’ assets, empower their operations, and uphold the highest standards of maritime excellence.
                  </p>
                  <p>
                    We are committed to operating with integrity, leveraging technology, and fostering sustainability to ensure every vessel under our care performs at its peak today and into the future.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="vm_stmnt_img_wrapper">
                  <div className="vm_stmnt_img">
                    <div className="statement_icon">
                      <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_224_164" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="59" height="59">
                          <path d="M58.5 58.5V0.5H0.5V58.5H58.5Z" fill="white" stroke="white" />
                        </mask>
                        <g mask="url(#mask0_224_164)">
                          <path d="M53.673 31.7308C53.673 46.3138 41.8511 58.1357 27.2681 58.1357C12.6852 58.1357 0.863281 46.3138 0.863281 31.7308C0.863281 17.1478 12.6852 5.3259 27.2681 5.3259C41.8511 5.3259 53.673 17.1478 53.673 31.7308Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M27.2697 50.8773C37.8271 50.8773 46.4163 42.2881 46.4163 31.7307C46.4163 21.1732 37.8271 12.584 27.2697 12.584C16.7123 12.584 8.12305 21.1732 8.12305 31.7307C8.12305 42.2881 16.7123 50.8773 27.2697 50.8773Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M27.2712 43.6193C20.716 43.6193 15.3828 38.2861 15.3828 31.7309C15.3828 25.1755 20.716 19.8424 27.2712 19.8424C33.8265 19.8424 39.1597 25.1755 39.1597 31.7309C39.1597 38.2861 33.8265 43.6193 27.2712 43.6193Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M27.2689 36.3608C24.7159 36.3608 22.6387 34.2837 22.6387 31.7306C22.6387 29.1775 24.7159 27.1004 27.2689 27.1004C29.8219 27.1004 31.8993 29.1775 31.8993 31.7306C31.8993 34.2837 29.8219 36.3608 27.2689 36.3608Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M27.2676 31.7307L56.122 2.87626" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M51.7476 0.984401L45.9549 6.777C45.8318 6.90007 45.7364 7.04791 45.6749 7.21071C45.6134 7.37351 45.5872 7.54754 45.5981 7.72123L45.9336 13.0659L52.7582 6.24128L52.4448 1.24794C52.4226 0.896593 51.9965 0.735495 51.7476 0.984401Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M58.0151 7.2518L52.2225 13.0444C52.0994 13.1675 51.9516 13.2629 51.7888 13.3245C51.626 13.386 51.452 13.4122 51.2783 13.4013L45.9336 13.0658L52.7582 6.24119L57.7516 6.55463C58.103 6.57664 58.264 7.00289 58.0151 7.2518Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                    <img 
                      src="/assets/uploads/2025/07/abca.png" 
                      alt="GVM Mission" 
                      loading="lazy" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. STRATEGIC GOALS SLIDER */}
      <div 
        className="goal_sec" 
        style={{ backgroundImage: 'url(/assets/uploads/2025/07/map-img-bg.png)' }}
      >
        <div className="container">
          <div className="cmn_title">
            <h6>Objectives</h6>
            <h2>Strategic Goals</h2>
          </div>

          <div className="goal_slider">
            <div style={{ overflow: 'hidden', width: '100%' }}>
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'nowrap',
                  width: `${(strategicGoals.length * 100) / slidesToShow}%`,
                  transform: `translateX(-${(slideIndex * 100) / strategicGoals.length}%)`,
                  transition: 'transform 0.5s ease-in-out'
                }}
              >
                {strategicGoals.map((goal) => (
                  <div 
                    key={goal.id} 
                    className="item"
                    style={{
                      width: `${100 / strategicGoals.length}%`,
                      flexShrink: 0
                    }}
                  >
                    <div className="goal_bx">
                      <img src={goal.image} alt={goal.title} loading="lazy" />
                      <div className="goal_bx_content">
                        <h4>{goal.title}</h4>
                        <p>{goal.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slick Indicator Dots */}
            <ul className="slick-dots" style={{ marginTop: '30px' }}>
              {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                <li 
                  key={i} 
                  className={slideIndex === i ? 'slick-active' : ''}
                  onClick={() => setSlideIndex(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Slide ${i + 1}`}
                >
                  <button type="button" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 5. EXECUTIVE LEADERSHIP TEAM */}
      <div className="leader_sec">
        <div className="container">
          <div className="container">
            <div className="cmn_title">
              <h2>Leadership</h2>
            </div>
          </div>
          <div className="leader_sec_wrapper">
            <div className="row">
              {leadershipTeam.map((leader, idx) => (
                <div 
                  key={idx} 
                  className="col-lg-4 col-sm-6 leader_info_about"
                  onClick={() => setSelectedLeader(leader)}
                >
                  <div className="leader_bx">
                    <div className="leader_bx_img">
                      <img src={leader.image} alt={leader.name} loading="lazy" />
                    </div>
                    <div className="leader_info">
                      <h4>{leader.name}</h4>
                      <em>{leader.designation}</em>
                      {leader.bio.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 6. LEADERSHIP MODAL POPUP */}
      <div 
        className={`modall ${selectedLeader ? 'showModal' : ''}`} 
        id="myModall"
        onClick={() => setSelectedLeader(null)}
        role="dialog"
        aria-modal="true"
        aria-hidden={!selectedLeader}
      >
        <div className="container" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <div 
              className="modal-close" 
              id="closeModal" 
              onClick={() => setSelectedLeader(null)}
              role="button"
              tabIndex={0}
              aria-label="Close Biography"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_260_970)">
                  <path d="M16.5652 14.0229L27.468 3.11991C28.1775 2.4107 28.1775 1.26398 27.468 0.554855C26.7588 -0.154353 25.6121 -0.154353 24.903 0.554855L13.9999 11.4578L3.09721 0.554855C2.38766 -0.154353 1.24137 -0.154353 0.532161 0.554855C-0.177387 1.26406 -0.177387 2.4107 0.532161 3.11991L11.4347 14.0229L0.532246 24.9258C-0.177302 25.635 -0.177302 26.7818 0.532246 27.4909C0.700473 27.6596 0.900378 27.7934 1.12048 27.8846C1.34057 27.9758 1.57652 28.0226 1.81477 28.0224C2.27907 28.0224 2.74354 27.8446 3.0973 27.4909L13.9999 16.588L24.903 27.4909C25.0712 27.6596 25.2711 27.7933 25.4912 27.8845C25.7113 27.9757 25.9472 28.0226 26.1855 28.0224C26.6498 28.0224 27.1143 27.8446 27.468 27.4909C28.1775 26.7817 28.1775 25.635 27.468 24.9258L16.5652 14.0229Z" fill="#172240"/>
                </g>
                <defs>
                  <clipPath id="clip0_260_970">
                    <rect width="28" height="28" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="modal-content-inner">
              <div className="row gy-4 gy-md-0">
                <div className="col-12 col-md-5">
                  <div className="modal-img">
                    <img 
                      src={selectedLeader?.image || ''} 
                      className="img-fluid" 
                      id="modalImg" 
                      alt={selectedLeader?.name || ''} 
                    />
                  </div>
                </div>
                <div className="col-12 col-md-7">
                  <div className="modal-info">
                    <h4 id="modalTitle">{selectedLeader?.name || ''}</h4>
                    <em id="modalDesig">{selectedLeader?.designation || ''}</em>
                    <div id="modalBody">
                      {selectedLeader?.bio.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
