import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showButton, setShowButton] = useState(true)
  const hideTimerRef = useRef(null)


  const togglePlayPause = () => {
    if (!videoRef.current) return

    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
      setShowButton(true)
      clearTimeout(hideTimerRef.current)
      hideTimerRef.current = setTimeout(() => {
        setShowButton(false)
      }, 1000)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
      setShowButton(true)
      clearTimeout(hideTimerRef.current)
    }
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
    setShowButton(true)
  }

  // Exact Arrow SVG for Buttons
  const ArrowIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.0084 0.164451L4.30658 0.292544C4.12904 0.299021 3.95848 0.374924 3.83164 0.503906C3.7048 0.632887 3.63182 0.804628 3.62843 0.982137C3.62504 1.15965 3.6915 1.32872 3.8135 1.45295C3.9355 1.57717 4.10328 1.64661 4.28071 1.6463L9.34821 1.54945L0.768919 10.1287C0.639534 10.2581 0.564918 10.4317 0.561487 10.6112C0.558055 10.7908 0.626089 10.9616 0.750621 11.0861C0.875152 11.2107 1.04598 11.2787 1.22553 11.2753C1.40508 11.2718 1.57863 11.1972 1.70802 11.0678L10.2873 2.48854L10.1904 7.55604C10.1872 7.64595 10.2018 7.73493 10.2335 7.81778C10.2653 7.90064 10.3134 7.97571 10.3752 8.03862C10.437 8.10153 10.5112 8.15102 10.5934 8.18419C10.6756 8.21737 10.7643 8.23357 10.8542 8.23185C10.9441 8.23013 11.0334 8.21053 11.117 8.17419C11.2005 8.13784 11.2766 8.08548 11.3409 8.02016C11.4051 7.95485 11.4562 7.87788 11.4911 7.79375C11.526 7.70962 11.5441 7.62002 11.5442 7.53017L11.6723 0.828393C11.6757 0.648883 11.6077 0.478095 11.4832 0.353588C11.3587 0.22908 11.1879 0.161048 11.0084 0.164451Z"
        fill="currentColor"
      />
    </svg>
  )

  return (
    <div className="home_page_wrapper">
      {/* ========================================================
          FRAME 1: HERO BANNER
      ======================================================== */}
      <section
        className="banner"
        style={{
          background: 'url(/assets/uploads/2025/07/banner-img-min.jpg) no-repeat center center / cover',
        }}
      >
        <div className="container">
          <div className="banner_text hm-banner-txt">
            <h1>Trusted Partner at Sea</h1>
            <p>Steadfast at sea, always reliable. Committed to every wave, every promise.</p>
            <div className="cmn_btnn flex flex-wrap items-center gap-3">
              <Link className="btnn btnn-white" to="/about-us">
                Know More <ArrowIcon />
                <span />
              </Link>
              <Link className="btnn btnn-blue" to="/contact-us">
                Make an Enquiry <ArrowIcon />
                <span />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          FRAME 2: ABOUT GVM SECTION
      ======================================================== */}
      <section className="about_sec">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Image & Floating Badge */}
            <div className="col-lg-6 hm-left mb-5 mb-lg-0">
              <div className="ab_wrapper">
                <div className="about_img">
                  <img
                    src="/assets/uploads/2025/07/Group-8-4.png"
                    alt="Global Vessel Management"
                    loading="lazy"
                  />
                  <div className="img_icon_bx">
                    <img src="/assets/uploads/2025/07/sm-icon-1.png" alt="Maritime Management Partner" />
                    <h5>Your Maritime Management Partner</h5>
                  </div>
                  <em />
                </div>
              </div>
            </div>

            {/* Right Text & Statement Cards */}
            <div className="col-lg-6 hm-right">
              <div className="about_text">
                <div className="cmn_title">
                  <h6>About Us</h6>
                  <h2>Who We Are</h2>
                  <p>
                    Global Vessel Management (GVM) is a specialized maritime services company headquartered in
                    Muscat, Sultanate of Oman, dedicated to delivering comprehensive vessel management solutions
                    with a focus on safety, efficiency, and innovation.
                  </p>
                </div>

                {/* Vision Statement Card */}
                <div className="statement">
                  <div className="statement_icon">
                    <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 58H58" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21.5833 45.3333L15.25 58" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M27.916 31.0834L23.166 40.5834" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M45.332 58L31.082 31.0833" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M4.3288 31.869L7.22528 36.8243C7.55628 37.3908 8.28969 37.5849 8.8632 37.2579L9.90164 36.6657C10.475 36.3387 10.6716 35.6143 10.3405 35.0478L7.4441 30.0925C7.11299 29.526 6.37958 29.3319 5.80606 29.6589L4.76774 30.2511C4.19423 30.5782 3.99769 31.3026 4.3288 31.869Z"
                        stroke="white"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M21.584 27.363L9.73992 34.25L7.33398 30.0525L19.1769 23.1667" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M46.918 1.91054C50.4516 0.0362805 54.9701 1.14854 57.0103 4.39489C59.0504 7.64124 57.8396 11.7924 54.306 13.6667L46.918 1.91054Z"
                        stroke="white"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M49.3629 17.78L42.3293 4.88245C41.9973 4.27365 42.1942 3.49514 42.7694 3.14369L45.9973 1.17073C46.5723 0.819157 47.3077 1.02788 47.6397 1.63656L54.6734 14.5341C55.0054 15.1429 54.8083 15.9214 54.2333 16.2729L51.0053 18.2458C50.4303 18.5974 49.695 18.3888 49.3629 17.78Z"
                        stroke="white"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M38.625 7.78559L42.1153 5.75008L48.4987 16.9185L38.0623 23.0051C37.4915 23.3379 36.7618 23.1404 36.4323 22.5639L31.2421 13.483C30.9126 12.9066 31.1081 12.1694 31.6788 11.8367L35.304 9.72234"
                        stroke="white"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.0846 13.6667L19.1037 20.4789C18.448 20.8506 18.2232 21.6762 18.602 22.3215L22.4156 28.8246C22.7931 29.4699 23.6313 29.6919 24.287 29.319L25.5996 28.5731"
                        stroke="white"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M32.668 23.1667H35.8346" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M34.2487 27.1249C34.2487 29.3111 32.4764 31.0833 30.2903 31.0833C28.1043 31.0833 26.332 29.3111 26.332 27.1249C26.332 24.9388 28.1043 23.1666 30.2903 23.1666C32.4764 23.1666 34.2487 24.9388 34.2487 27.1249Z"
                        stroke="white"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4>Vision Statement</h4>
                  <p>
                    At Global Vessel Management (GVM), our vision is to redefine excellence in maritime operations
                    by becoming the most trusted, efficient, and forward-thinking vessel management partner in the
                    MENA region and beyond.
                  </p>
                </div>

                {/* Mission Statement Card */}
                <div className="statement">
                  <div className="statement_icon">
                    <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mission_mask" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="59" height="59">
                        <path d="M58.5 58.5V0.5H0.5V58.5H58.5Z" fill="white" stroke="white" />
                      </mask>
                      <g mask="url(#mission_mask)">
                        <path
                          d="M53.673 31.7308C53.673 46.3138 41.8511 58.1357 27.2681 58.1357C12.6852 58.1357 0.863281 46.3138 0.863281 31.7308C0.863281 17.1478 12.6852 5.3259 27.2681 5.3259C41.8511 5.3259 53.673 17.1478 53.673 31.7308Z"
                          stroke="white"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M27.2697 50.8773C37.8271 50.8773 46.4163 42.2881 46.4163 31.7307C46.4163 21.1732 37.8271 12.584 27.2697 12.584C16.7123 12.584 8.12305 21.1732 8.12305 31.7307C8.12305 42.2881 16.7123 50.8773 27.2697 50.8773Z"
                          stroke="white"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M27.2712 43.6193C20.716 43.6193 15.3828 38.2861 15.3828 31.7309C15.3828 25.1755 20.716 19.8424 27.2712 19.8424C33.8265 19.8424 39.1597 25.1755 39.1597 31.7309C39.1597 38.2861 33.8265 43.6193 27.2712 43.6193Z"
                          stroke="white"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M27.2689 36.3608C24.7159 36.3608 22.6387 34.2837 22.6387 31.7306C22.6387 29.1775 24.7159 27.1004 27.2689 27.1004C29.8219 27.1004 31.8993 29.1775 31.8993 31.7306C31.8993 34.2837 29.8219 36.3608 27.2689 36.3608Z"
                          stroke="white"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path d="M27.2676 31.7307L56.122 2.87626" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                          d="M51.7476 0.984401L45.9549 6.777C45.8318 6.90007 45.7364 7.04791 45.6749 7.21071C45.6134 7.37351 45.5872 7.54754 45.5981 7.72123L45.9336 13.0659L52.7582 6.24128L52.4448 1.24794C52.4226 0.896593 51.9965 0.735495 51.7476 0.984401Z"
                          stroke="white"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M58.0151 7.2518L52.2225 13.0444C52.0994 13.1675 51.9516 13.2629 51.7888 13.3245C51.626 13.386 51.452 13.4122 51.2783 13.4013L45.9336 13.0658L52.7582 6.24119L57.7516 6.55463C58.103 6.57664 58.264 7.00289 58.0151 7.2518Z"
                          stroke="white"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </div>
                  <h4>Mission Statement</h4>
                  <p>Delivering exceptional maritime services by upholding safety, environmental compliance, and customer-first commitment.</p>
                </div>

                <div className="cmn_btnn">
                  <Link className="btnn btnn-blue" to="/about-us">
                    Know More <ArrowIcon />
                    <span />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          FRAME 3: OUR SERVICES SECTION
      ======================================================== */}
      <section className="service_sec">
        <div className="container">
          <div className="cmn_title hm-title text-center mb-5">
            <h6>What We Offers</h6>
            <h2>Our Services</h2>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Service 1: Ship Management */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service_bx">
                <div className="service_bx_img">
                  <img src="/assets/uploads/2025/07/service1.png" alt="Ship Management" loading="lazy" />
                </div>
                <div className="service_bx_text">
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip_s1)">
                      <path
                        d="M34.5759 33.6596L32.369 32.6872C31.3013 32.2113 30.1111 32.083 28.9665 32.3202L34.9083 21.4024C34.9559 21.3103 34.9828 21.209 34.9873 21.1054C34.9917 21.0019 34.9735 20.8986 34.934 20.8028C34.8943 20.7069 34.8341 20.6209 34.7578 20.5507C34.6814 20.4804 34.5906 20.4277 34.4918 20.3962L32.1944 19.7176V14.7068C32.1944 14.5212 32.1207 14.3432 31.9894 14.212C31.8582 14.0808 31.6802 14.007 31.4946 14.007H28.6956V7.70914C28.6956 7.52355 28.6218 7.34556 28.4906 7.21433C28.3594 7.0831 28.1814 7.00937 27.9958 7.00937H25.1967V0.711484C25.1967 0.525895 25.123 0.347907 24.9918 0.216675C24.8605 0.0854438 24.6826 0.0117188 24.497 0.0117188H10.5017C10.3161 0.0117188 10.1381 0.0854438 10.0068 0.216675C9.87561 0.347907 9.80189 0.525895 9.80189 0.711484V7.00937H7.00282C6.81723 7.00937 6.63925 7.0831 6.50801 7.21433C6.37678 7.34556 6.30306 7.52355 6.30306 7.70914V14.007H3.50399C3.3184 14.007 3.14042 14.0808 3.00919 14.212C2.87795 14.3432 2.80423 14.5212 2.80423 14.7068V19.7176L0.506723 20.3962C0.407922 20.4277 0.317186 20.4803 0.24085 20.5505C0.164514 20.6207 0.104417 20.7067 0.064754 20.8025C0.0250913 20.8984 0.00681852 21.0017 0.0112114 21.1053C0.0156043 21.2089 0.042557 21.3103 0.090188 21.4024L6.03207 32.3205C4.88751 32.0828 3.69718 32.2111 2.62955 32.6872L0.422664 33.6596C0.309256 33.7084 0.210808 33.7864 0.137346 33.8856C0.063885 33.9848 0.0180352 34.1018 0.00446666 34.2245C-0.00926814 34.3472 0.00969791 34.4713 0.0594404 34.5843C0.109183 34.6973 0.187932 34.7952 0.287697 34.8679C0.387533 34.9406 0.504818 34.9856 0.627653 34.9983C0.750488 35.011 0.874501 34.991 0.987112 34.9403L3.194 33.9679C3.73093 33.7244 4.31372 33.5984 4.90331 33.5984C5.4929 33.5984 6.07568 33.7244 6.61262 33.9679L6.82814 34.0629C6.98498 34.1319 7.14426 34.19 7.30416 34.2443L7.32122 34.2508C8.64846 34.7004 10.0964 34.6333 11.3764 34.0629L11.5913 33.9679C12.1282 33.7244 12.711 33.5984 13.3005 33.5984C13.8901 33.5984 14.4729 33.7244 15.0098 33.9679L15.2253 34.0629C15.941 34.3822 16.7158 34.5473 17.4994 34.5473C18.2831 34.5473 19.0579 34.3822 19.7735 34.0629L19.9885 33.9679C20.5254 33.7244 21.1082 33.5984 21.6977 33.5984C22.2873 33.5984 22.8701 33.7244 23.407 33.9679L23.6225 34.0629C24.3381 34.3822 25.113 34.5473 25.8966 34.5473C26.6803 34.5473 27.4551 34.3822 28.1707 34.0629L28.3856 33.9679C28.9227 33.7246 29.5055 33.5987 30.0951 33.5987C30.6847 33.5987 31.2675 33.7246 31.8045 33.9679L34.0114 34.9403C34.124 34.9913 34.2481 35.0116 34.3711 34.9991C34.4941 34.9865 34.6115 34.9416 34.7115 34.8689C34.8116 34.7962 34.8906 34.6983 34.9405 34.5852C34.9904 34.4721 35.0093 34.3477 34.9955 34.2248C34.9817 34.102 34.9356 33.985 34.8619 33.8857C34.7882 33.7864 34.6895 33.7085 34.5759 33.6598V33.6596ZM16.7996 15.4066V15.5833L11.2015 17.237V15.4066H16.7996ZM14.7003 8.40891H20.2985V14.007H14.7003V8.40891ZM23.7973 17.237L18.1992 15.5833V15.4066H23.7973V17.237ZM1.73367 21.4936L16.7995 17.0429V19.0701L2.52528 22.9486L1.73367 21.4936ZM18.1991 17.0429L33.2649 21.4936L32.4732 22.9485L18.1991 19.0701V17.0429ZM30.7949 19.3042L25.1967 17.6504V15.4066H30.7949V19.3042ZM27.296 14.007H21.6979V8.40891H27.296V14.007ZM23.7972 7.00937H18.1991V1.41125H23.7972V7.00937ZM11.2014 1.41125H16.7995V7.00937H11.2014V1.41125ZM7.70259 8.40891H13.3007V14.007H7.70259V8.40891ZM4.20376 15.4066H9.80189V17.6504L4.20376 19.3042V15.4066ZM15.5746 32.6872C14.859 32.3679 14.0842 32.2029 13.3005 32.2029C12.5169 32.2029 11.7421 32.3679 11.0265 32.6872L10.8116 32.7822C9.9254 33.1826 8.92614 33.2567 7.99063 32.9912L3.2128 24.2121L16.7995 20.5203V33.0854C16.452 33.0255 16.1131 32.9238 15.7901 32.7823L15.5746 32.6872ZM24.1874 32.7822L23.9718 32.6872C23.2562 32.3679 22.4813 32.2029 21.6977 32.2029C20.9141 32.2029 20.1393 32.3679 19.4237 32.6872L19.2087 32.7822C18.8857 32.9236 18.5466 33.0254 18.1991 33.0853V20.5202L31.7854 24.2121L27.008 32.9913C26.0726 33.2568 25.0734 33.1827 24.1874 32.7822Z"
                        fill="#013E62"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip_s1">
                        <rect width="35" height="35" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h4>
                    <Link to="/service/ship-management/tankers">Ship Management</Link>
                  </h4>
                  <p className="text-sm text-slate-600 mt-2 mb-3">
                    Full-scale technical and operational management ensuring optimal performance and absolute safety compliance.
                  </p>
                  <div className="service_bx_link">
                    <Link to="/service/ship-management/tankers" aria-label="Read more about Ship Management">
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2: New Building Supervision */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service_bx">
                <div className="service_bx_img">
                  <img src="/assets/uploads/2025/07/service2.png" alt="New Building Supervision" loading="lazy" />
                </div>
                <div className="service_bx_text">
                  <svg width="39" height="45" viewBox="0 0 39 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.4126 15C18.3075 15.0001 18.2067 14.968 18.132 14.9108L14.1189 11.8453C14.0812 11.8164 14.0512 11.782 14.0308 11.7441C14.0104 11.7062 13.9999 11.6655 14 11.6244C14.0001 11.5833 14.0108 11.5427 14.0314 11.5048C14.0521 11.467 14.0824 11.4327 14.1204 11.404L19.7698 7.13114C19.8459 7.07475 19.9476 7.04389 20.0529 7.04525C20.1582 7.0466 20.2585 7.08008 20.3321 7.13839C20.4057 7.1967 20.4465 7.27513 20.4458 7.35664C20.4451 7.43815 20.4028 7.51614 20.3282 7.57366L14.9698 11.6263L18.6933 14.4706C18.7497 14.5137 18.7883 14.5688 18.8041 14.6289C18.8199 14.689 18.8123 14.7514 18.7822 14.8081C18.7522 14.8649 18.701 14.9134 18.6351 14.9476C18.5693 14.9817 18.4919 15 18.4126 15Z"
                      fill="#013E62"
                    />
                    <path
                      d="M38.5832 43.9241L33.7249 43.912C33.6146 43.9117 33.5088 43.8677 33.4309 43.7896C33.3529 43.7114 33.3091 43.6056 33.3091 43.4952V5.70377H29.5571C27.9846 5.70377 26.7052 4.42439 26.7052 2.85188C26.7052 1.27938 27.9846 0 29.5571 0H36.6361C37.9396 0 39 1.0604 39 2.36386V43.5073C39 43.6179 38.9561 43.7239 38.8779 43.802C38.7998 43.8802 38.6938 43.9241 38.5832 43.9241ZM34.1427 43.0794L38.1665 43.0894V2.36386C38.1665 1.52012 37.4801 0.833533 36.6361 0.833533H29.5571C28.4443 0.833533 27.5389 1.7389 27.5389 2.85169C27.5389 3.96467 28.4443 4.87004 29.5571 4.87004H33.7259C33.9561 4.87004 34.1427 5.05666 34.1427 5.28681V43.0794Z"
                      fill="#013E62"
                    />
                  </svg>
                  <h4>
                    <Link to="/service/new-building-supervision">New Building Supervision</Link>
                  </h4>
                  <p className="text-sm text-slate-600 mt-2 mb-3">
                    Expert shipyard supervision from initial design approval through construction to final sea trials.
                  </p>
                  <div className="service_bx_link">
                    <Link to="/service/new-building-supervision" aria-label="Read more about New Building Supervision">
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3: Lay-up Management */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service_bx">
                <div className="service_bx_img">
                  <img src="/assets/uploads/2025/07/service3.png" alt="Lay-up Management" loading="lazy" />
                </div>
                <div className="service_bx_text">
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip_s3)">
                      <path
                        d="M27.4696 20.1875L23.0481 17.4592C22.7303 17.2631 22.3023 17.3666 22.1068 17.682C21.9109 17.9982 22.0149 18.4286 22.3297 18.6227L26.7512 21.3509C27.0688 21.5469 27.4965 21.446 27.6918 21.1281C27.8871 20.8101 27.7875 20.3835 27.4696 20.1875Z"
                        fill="#013E62"
                      />
                      <path
                        d="M34.8323 31.1352C34.5846 30.8503 34.1529 30.8202 33.8679 31.0679C33.139 31.7017 32.4644 32.3587 31.508 32.6231C30.4448 32.9169 29.4344 32.685 28.4722 32.2039L32.0323 20.2257C32.0753 20.0808 32.0692 19.9257 32.0147 19.7847C31.9602 19.6437 31.8606 19.5247 31.7313 19.4464L28.4375 17.4506V11.6228C28.4375 11.2453 28.1315 10.9392 27.754 10.9392H26.3868V8.88841C26.3868 8.51093 26.0807 8.20482 25.7032 8.20482H23.5499V6.15404C23.5499 5.77656 23.2438 5.47045 22.8663 5.47045H19.5508V0.685301C19.5508 0.307822 19.2448 0.00170898 18.8672 0.00170898H16.1329C15.7553 0.00170898 15.4493 0.307822 15.4493 0.685301V5.47045H12.1339C11.7563 5.47045 11.4503 5.77656 11.4503 6.15404V8.20482H9.29695C8.91941 8.20482 8.61336 8.51093 8.61336 8.88841V10.9392H7.24618C6.86863 10.9392 6.56258 11.2453 6.56258 11.6228V17.4506L3.2689 19.4463C3.13961 19.5246 3.03993 19.6436 2.98547 19.7846C2.93101 19.9257 2.92484 20.0807 2.96791 20.2257L6.52075 32.1794C6.46011 31.9754 5.36623 31.8411 5.17284 31.816C3.18242 31.5585 1.66888 32.5555 0.235116 33.8022C-0.0498051 34.0499 -0.0798832 34.4816 0.167782 34.7666C0.404237 35.0385 0.844265 35.0842 1.13213 34.8339C2.60923 33.5498 4.27453 32.571 6.22892 33.5483C7.99697 34.4323 9.82708 34.8113 11.6686 33.8423C13.1535 33.0606 14.5865 32.3857 16.2439 33.1749L17.9479 33.9863C19.4057 34.6806 21.0701 34.6646 22.5142 33.9424C23.4041 33.4975 24.3086 32.9053 25.3251 32.8355C26.3215 32.767 27.2843 33.138 28.1597 33.5761C29.3163 34.1545 30.6703 34.27 31.9122 33.916C33.0562 33.5898 33.8888 32.8612 34.7649 32.0994C35.0499 31.8518 35.08 31.4201 34.8323 31.1352Z"
                        fill="#013E62"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip_s3">
                        <rect width="35" height="35" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h4>
                    <Link to="/service/lay-up-management">Lay-up Management</Link>
                  </h4>
                  <p className="text-sm text-slate-600 mt-2 mb-3">
                    Secure, cost-effective preservation solutions for warm and cold lay-ups in strategic locations worldwide.
                  </p>
                  <div className="service_bx_link">
                    <Link to="/service/lay-up-management" aria-label="Read more about Lay-up Management">
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 4: Crew Management */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service_bx">
                <div className="service_bx_img">
                  <img src="/assets/uploads/2025/07/service4.png" alt="Crew Management" loading="lazy" />
                </div>
                <div className="service_bx_text">
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask_s4" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="35">
                      <path d="M34.5 34.5V0.5H0.5V34.5H34.5Z" fill="white" stroke="white" />
                    </mask>
                    <g mask="url(#mask_s4)">
                      <path d="M25.2988 24.7485L28.075 23.5929H30.9413L34.4865 25.0686V33.2921" stroke="#013E62" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M31.185 21.8887H27.8311C26.8333 21.8887 26.0244 21.0798 26.0244 20.0819V16.9025H32.9917V20.0819C32.9917 21.0798 32.1828 21.8887 31.185 21.8887Z" stroke="#013E62" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19.8672 17.1875H15.1307C13.7215 17.1875 12.5791 16.0451 12.5791 14.6359V9.41237H22.4188V14.6359C22.4188 16.0451 21.2764 17.1875 19.8672 17.1875Z" stroke="#013E62" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                  <h4>
                    <Link to="/service/crew-management">Crew Management</Link>
                  </h4>
                  <p className="text-sm text-slate-600 mt-2 mb-3">
                    Comprehensive crew recruitment, training, welfare, and retention of highly qualified maritime professionals.
                  </p>
                  <div className="service_bx_link">
                    <Link to="/service/crew-management" aria-label="Read more about Crew Management">
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 5: Technology and Innovation */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service_bx">
                <div className="service_bx_img">
                  <img src="/assets/uploads/2025/07/service5.png" alt="Technology and Innovation" loading="lazy" />
                </div>
                <div className="service_bx_text">
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask_s5" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="35">
                      <path d="M34.4004 34.4004V0.599609H0.599609V34.4004H34.4004Z" fill="white" stroke="white" strokeWidth="1.2" />
                    </mask>
                    <g mask="url(#mask_s5)">
                      <path d="M19.8826 27.4738H22.1135V30.6156C22.1135 31.5496 21.3564 32.3066 20.4225 32.3066H14.5782C13.6444 32.3066 12.8872 31.5496 12.8872 30.6156V27.4738H17.8318" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17.5002 19.7988C15.9483 19.7988 14.6902 18.5407 14.6902 16.9888C14.6902 15.4369 15.9483 14.1788 17.5002 14.1788C19.0521 14.1788 20.3102 15.4369 20.3102 16.9888C20.3102 18.5407 19.0521 19.7988 17.5002 19.7988Z" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                  <h4>
                    <Link to="/service/technology-and-innovation">Technology and Innovation</Link>
                  </h4>
                  <p className="text-sm text-slate-600 mt-2 mb-3">
                    Digital fleet monitoring, fuel efficiency optimization, and innovative technologies driving decarbonization.
                  </p>
                  <div className="service_bx_link">
                    <Link to="/service/technology-and-innovation" aria-label="Read more about Technology and Innovation">
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 6: Insurance and Procurement */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service_bx">
                <div className="service_bx_img">
                  <img src="/assets/uploads/2025/07/service6.png" alt="Insurance and Procurement" loading="lazy" />
                </div>
                <div className="service_bx_text">
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip_s6)">
                      <path
                        d="M31.5 6.30003C31.4977 6.15611 31.4511 6.01638 31.3666 5.89989C31.282 5.78339 31.1636 5.6958 31.0275 5.64903L17.7275 1.09903C17.5804 1.04642 17.4196 1.04642 17.2725 1.09903L3.97249 5.64903C3.83635 5.6958 3.71794 5.78339 3.63339 5.89989C3.54884 6.01638 3.50225 6.15611 3.49999 6.30003L3.46499 8.36503C3.35999 14.7245 3.87449 19.2885 5.04349 22.323C5.91999 24.6079 7.24175 26.6958 8.93199 28.4655C10.954 30.5219 13.35 32.1731 15.9915 33.3305L17.2095 33.887C17.3007 33.9286 17.3998 33.9502 17.5 33.9502C17.6002 33.9502 17.6993 33.9286 17.7905 33.887L19.0085 33.3305C21.6499 32.1731 24.046 30.5219 26.068 28.4655C27.7599 26.6951 29.0828 24.6059 29.96 22.3195C31.129 19.285 31.6435 14.721 31.5385 8.36153L31.5 6.30003Z"
                        fill="#003366"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip_s6">
                        <rect width="35" height="35" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h4>
                    <Link to="/service/insurance-and-procurement">Insurance and Procurement</Link>
                  </h4>
                  <p className="text-sm text-slate-600 mt-2 mb-3">
                    Robust marine insurance coverage and cost-competitive global supply chain procurement services.
                  </p>
                  <div className="service_bx_link">
                    <Link to="/service/insurance-and-procurement" aria-label="Read more about Insurance and Procurement">
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          FRAME 4: FEATURE VIDEO & STATS SECTION
      ======================================================== */}
      <section
        className="seller_sec"
        style={{ backgroundImage: 'url(/assets/uploads/2025/07/map-img-bg.png)' }}
      >
        <div className="container">
          {/* Interactive Feature Video Container */}
          <div className="feature_video_sec hm-feature-video">
            <div className={`video-container ${!isPlaying ? 'paused' : ''}`}>
              <video
                ref={videoRef}
                id="myVideo"
                muted
                poster="/assets/uploads/2025/07/video-poster.png"
                playsInline
                loop
                onClick={togglePlayPause}
                onEnded={handleVideoEnded}
              >
                <source src="/assets/uploads/2025/07/VID-20250728-WA0000.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
              <div
                className="overlay-button"
                id="playPauseBtn"
                onClick={togglePlayPause}
                style={{
                  opacity: showButton ? 1 : 0,
                  display: showButton ? 'flex' : 'none',
                  cursor: 'pointer',
                }}
                role="button"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? '❚❚' : '▶'}
              </div>
            </div>
          </div>

          {/* Sustainability & Stats / Metrics Grid */}
          <div className="seller_sec_middle">
            <div className="row gy-4 gy-md-0 align-items-center">
              {/* Left Column: Copy */}
              <div className="col-md-6 hm-left mb-4 mb-md-0">
                <div className="cmn_title">
                  <h6>Innovating for a Sustainable Future</h6>
                  <h2>Sustainability at GVM</h2>
                  <p>
                    At Global Vessel Management LLC (GVM), sustainability isn’t just a concept it’s a core
                    value that drives our operations. We are dedicated to making meaningful contributions toward
                    the health of our planet while ensuring the long-term success of our business. Our commitment
                    to sustainability spans from environmental stewardship to social responsibility, aligning with
                    international best practices and focusing on innovation and proactive solutions.
                  </p>
                  <div className="cmn_btnn">
                    <Link className="btnn btnn-white" to="/sustainability-strategy">
                      Know More <ArrowIcon />
                      <span />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: 4 Sustainability Pillars */}
              <div className="col-md-6 hm-right">
                <div className="row">
                  {/* Pillar 1: Navigating Responsibility */}
                  <div className="col-6">
                    <div className="seller_bx">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M32.508 11.5807C32.5393 11.7181 32.6087 11.8439 32.7084 11.9436C32.808 12.0432 32.9338 12.1127 33.0713 12.144C33.162 12.165 34.2248 12.4012 35.5658 12.4012C37.0643 12.4012 38.91 12.1057 40.1333 10.8825C42.45 8.56495 41.439 4.0132 41.3948 3.82045C41.3635 3.68303 41.294 3.55724 41.1944 3.45758C41.0947 3.35793 40.9689 3.28847 40.8315 3.2572C40.6403 3.21295 36.087 2.20195 33.7695 4.5187C31.452 6.8362 32.4638 11.3887 32.508 11.5807ZM39.0728 9.8227C37.9335 10.9612 35.865 10.974 34.566 10.8495L40.1423 5.83045C40.2022 7.1827 40.023 8.8717 39.0728 9.8227ZM34.8293 5.5792C35.9647 4.44445 38.022 4.42795 39.3218 4.55095L33.759 9.5572C33.7013 8.20795 33.882 6.5272 34.8293 5.5792ZM45.0825 42.363C45.4935 41.8492 45.75 41.2072 45.75 40.5C45.75 38.8455 44.4045 37.5 42.75 37.5C42.6247 37.5 42.5047 37.5217 42.3833 37.5367C40.5223 34.8186 38.0872 32.5423 35.25 30.8685V20.25C35.25 20.051 35.171 19.8603 35.0303 19.7196C34.8897 19.579 34.6989 19.5 34.5 19.5H29.25V16.5C29.25 16.301 29.171 16.1103 29.0303 15.9696C28.8897 15.829 28.6989 15.75 28.5 15.75H27.75V15C27.75 13.7595 26.7405 12.75 25.5 12.75H24.75V11.25H23.25V12.75H22.5C21.2595 12.75 20.25 13.7595 20.25 15V15.75H19.5C19.3011 15.75 19.1103 15.829 18.9697 15.9696C18.829 16.1103 18.75 16.301 18.75 16.5V19.5H13.5C13.3011 19.5 13.1103 19.579 12.9697 19.7196C12.829 19.8603 12.75 20.051 12.75 20.25V30.6705C9.77847 32.3533 7.22885 34.6903 5.29425 37.5045C5.27925 37.5045 5.265 37.5 5.25 37.5C3.5955 37.5 2.25 38.8455 2.25 40.5C2.25 41.2072 2.5065 41.8492 2.9175 42.363C1.641 42.9622 0.75 44.25 0.75 45.75V47.25H2.25V45.75C2.25 44.5095 3.2595 43.5 4.5 43.5H6C7.2405 43.5 8.25 44.5095 8.25 45.75V47.25H9.75V45.75C9.75 44.5095 10.7595 43.5 12 43.5H13.5C14.7405 43.5 15.75 44.5095 15.75 45.75V47.25H17.25V45.75C17.25 44.5095 18.2595 43.5 19.5 43.5H21C22.2405 43.5 23.25 44.5095 23.25 45.75V47.25H24.75V45.75C24.75 44.5095 25.7595 43.5 27 43.5H28.5C29.7405 43.5 30.75 44.5095 30.75 45.75V47.25H32.25V45.75C32.25 44.5095 33.2595 43.5 34.5 43.5H36C37.2405 43.5 38.25 44.5095 38.25 45.75V47.25H39.75V45.75C39.75 44.5095 40.7595 43.5 42 43.5H43.5C44.7405 43.5 45.75 44.5095 45.75 45.75V47.25H47.25V45.75C47.25 44.25 46.359 42.9622 45.0825 42.363ZM44.25 40.5C44.25 41.3272 43.5773 42 42.75 42C41.9227 42 41.25 41.3272 41.25 40.5C41.25 39.6727 41.9227 39 42.75 39C43.5773 39 44.25 39.6727 44.25 40.5ZM29.124 31.9162L30.237 30.2475C32.4214 30.9483 34.4756 32.0039 36.3172 33.372L34.5487 33.726L32.4878 33.039C32.3793 33.003 32.2642 32.9923 32.151 33.0075C32.0378 33.0227 31.9296 33.0635 31.8345 33.1267L29.7727 34.5H27.4012L26.4645 33.0952L27.3105 32.25H28.5C28.7505 32.25 28.9845 32.1247 29.124 31.9162ZM33.75 21V30.0592C32.3132 29.351 30.8046 28.7988 29.25 28.4122V21H33.75ZM21.75 15C21.75 14.5867 22.0868 14.25 22.5 14.25H25.5C25.9132 14.25 26.25 14.5867 26.25 15V15.75H21.75V15ZM27.75 17.25V28.0987C27.2525 28.012 26.7522 27.9419 26.25 27.8887V25.5C26.25 25.301 26.171 25.1103 26.0303 24.9696C25.8897 24.829 25.6989 24.75 25.5 24.75H22.5C22.3011 24.75 22.1103 24.829 21.9697 24.9696C21.829 25.1103 21.75 25.301 21.75 25.5V27.8565C21.246 27.903 20.7465 27.966 20.25 28.0455V17.25H27.75ZM24.75 27.7785C24.4433 27.7665 24.1365 27.75 23.8283 27.75C23.6348 27.75 23.4435 27.7627 23.25 27.768V26.25H24.75V27.7785ZM14.25 21H18.75V28.3365C17.1991 28.6927 15.6906 29.2131 14.25 29.889V21ZM17.3445 31.905L17.8575 33.444L16.2728 34.5H14.427L13.0853 33.8287C12.9811 33.7769 12.8663 33.7499 12.75 33.75H10.839C12.4484 32.4803 14.2354 31.4539 16.143 30.7035L17.3445 31.905ZM5.25 39C6.07725 39 6.75 39.6727 6.75 40.5C6.75 41.3272 6.07725 42 5.25 42C4.42275 42 3.75 41.3272 3.75 40.5C3.75 39.6727 4.42275 39 5.25 39ZM12.75 42C11.9227 42 11.25 41.3272 11.25 40.5C11.25 39.6727 11.9227 39 12.75 39C13.5773 39 14.25 39.6727 14.25 40.5C14.25 41.3272 13.5773 42 12.75 42ZM20.25 42C19.4228 42 18.75 41.3272 18.75 40.5C18.75 39.6727 19.4228 39 20.25 39C21.0772 39 21.75 39.6727 21.75 40.5C21.75 41.3272 21.0772 42 20.25 42ZM27.75 42C26.9228 42 26.25 41.3272 26.25 40.5C26.25 39.6727 26.9228 39 27.75 39C28.5772 39 29.25 39.6727 29.25 40.5C29.25 41.3272 28.5772 42 27.75 42ZM35.25 42C34.4227 42 33.75 41.3272 33.75 40.5C33.75 39.6727 34.4227 39 35.25 39C36.0773 39 36.75 39.6727 36.75 40.5C36.75 41.3272 36.0773 42 35.25 42ZM39 43.5232C38.6304 43.0255 38.1435 42.6269 37.5825 42.363C37.9935 41.8492 38.25 41.2072 38.25 40.5C38.25 38.8455 36.9045 37.5 35.25 37.5C33.5955 37.5 32.25 38.8455 32.25 40.5C32.25 41.2072 32.5065 41.8492 32.9175 42.363C32.3567 42.6271 31.8698 43.0256 31.5 43.5232C31.1304 43.0255 30.6435 42.6269 30.0825 42.363C30.4935 41.8492 30.75 41.2072 30.75 40.5C30.75 38.8455 29.4045 37.5 27.75 37.5C26.0955 37.5 24.75 38.8455 24.75 40.5C24.75 41.2072 25.0065 41.8492 25.4175 42.363C24.8567 42.6271 24.3698 43.0256 24 43.5232C23.6304 43.0255 23.1435 42.6269 22.5825 42.363C22.9935 41.8492 23.25 41.2072 23.25 40.5C23.25 38.8455 21.9045 37.5 20.25 37.5C18.5955 37.5 17.25 38.8455 17.25 40.5C17.25 41.2072 17.5065 41.8492 17.9175 42.363C17.3567 42.6271 16.8698 43.0256 16.5 43.5232C16.1304 43.0255 15.6435 42.6269 15.0825 42.363C15.4935 41.8492 15.75 41.2072 15.75 40.5C15.75 38.8455 14.4045 37.5 12.75 37.5C11.0955 37.5 9.75 38.8455 9.75 40.5C9.75 41.2072 10.0065 41.8492 10.4175 42.363C9.85667 42.6271 9.36975 43.0256 9 43.5232C8.63043 43.0255 8.14346 42.6269 7.5825 42.363C7.9935 41.8492 8.25 41.2072 8.25 40.5C8.24867 39.988 8.11599 39.4849 7.86465 39.0388C7.61332 38.5927 7.25174 38.2186 6.8145 37.9522C7.51221 36.9873 8.29049 36.0833 9.141 35.25H12.5737L13.9155 35.9212C14.0194 35.9731 14.1339 36.0001 14.25 36H16.5C16.6477 36 16.7933 35.9557 16.9163 35.874L19.1663 34.374C19.3031 34.2827 19.4062 34.149 19.4596 33.9934C19.513 33.8378 19.5137 33.669 19.4618 33.513L18.7118 31.263C18.6748 31.1524 18.6127 31.052 18.5303 30.9697L17.721 30.1605C19.7008 29.5581 21.7588 29.2513 23.8283 29.25C25.4955 29.25 27.1313 29.4525 28.713 29.8297L28.0988 30.75H27C26.9015 30.7499 26.8039 30.7692 26.713 30.8069C26.622 30.8446 26.5393 30.9 26.4697 30.9697L24.9697 32.4697C24.8471 32.5923 24.7707 32.7536 24.7536 32.9262C24.7366 33.0988 24.7798 33.2719 24.876 33.4162L26.376 35.6662C26.5155 35.8747 26.7495 36 27 36H30C30.1478 36 30.2933 35.9557 30.4163 35.874L32.361 34.5772L34.263 35.211C34.3867 35.2522 34.5195 35.2597 34.6478 35.235L37.8285 34.599C38.9983 35.6496 40.047 36.8277 40.9552 38.1112C40.2277 38.6602 39.75 39.522 39.75 40.5C39.75 41.2072 40.0065 41.8492 40.4175 42.363C39.8565 42.6269 39.3696 43.0255 39 43.5232Z"
                          fill="white"
                        />
                        <path
                          d="M21.7495 18.75H26.2495V20.25H21.7495V18.75ZM21.7495 21.75H26.2495V23.25H21.7495V21.75ZM15.7495 22.5H17.2495V24H15.7495V22.5ZM15.7495 25.5H17.2495V27H15.7495V25.5ZM30.7495 22.5H32.2495V24H30.7495V22.5ZM30.7495 25.5H32.2495V27H30.7495V25.5ZM9.83647 15.75C11.1767 15.75 12.2402 15.5138 12.331 15.4928C12.4684 15.4615 12.5942 15.392 12.6938 15.2924C12.7935 15.1927 12.863 15.0669 12.8942 14.9295C12.9385 14.7368 13.9502 10.185 11.6327 7.86751C9.31597 5.55001 4.76272 6.56176 4.57072 6.60601C4.43329 6.63727 4.30751 6.70673 4.20785 6.80639C4.10819 6.90604 4.03873 7.03183 4.00747 7.16926C3.96322 7.36201 2.95147 11.9138 5.26897 14.2313C6.49147 15.4538 8.33722 15.75 9.83647 15.75ZM10.5722 8.92726C11.5675 9.92251 11.7017 11.631 11.6372 12.9135L6.06697 7.89526C7.47472 7.76551 9.49447 7.85026 10.5722 8.92726ZM5.26372 9.19126L10.8272 14.2035C9.41947 14.3318 7.40497 14.2463 6.32947 13.1708C5.33572 12.177 5.19997 10.473 5.26372 9.19126ZM6.27097 16.3703C6.09018 17.4037 5.99934 18.4509 5.99947 19.5C5.99947 23.5028 7.28497 27.2918 9.71797 30.4568L10.9075 29.5425C8.67772 26.6415 7.49947 23.169 7.49947 19.5C7.49947 18.5355 7.58272 17.5695 7.74847 16.6298L6.27097 16.3703ZM37.645 31.239C40.4549 27.9735 42 23.8081 41.9995 19.5C41.9995 17.0558 41.518 14.6865 40.5685 12.456L39.1885 13.0433C40.058 15.0846 40.504 17.2812 40.4995 19.5C40.4995 23.4503 39.082 27.2715 36.508 30.261L37.645 31.239ZM23.9995 3.00001C26.7572 3.00001 29.4857 3.69376 31.8902 5.00551L32.6087 3.68851C29.9665 2.25216 27.0069 1.4998 23.9995 1.50001C19.5133 1.49588 15.1881 3.17102 11.875 6.19576L12.886 7.30426C15.9226 4.53144 19.8873 2.99591 23.9995 3.00001Z"
                          fill="white"
                        />
                      </svg>
                      <h4>Navigating Responsibility</h4>
                    </div>
                  </div>

                  {/* Pillar 2: Safeguarding People */}
                  <div className="col-6">
                    <div className="seller_bx">
                      <svg width="52" height="48" viewBox="0 0 52 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M51.0879 25.1533C50.133 24.9955 48.371 24.6008 46.5475 24.0077C44.1842 23.2394 42.3248 22.3536 41.0218 21.3756C40.6972 21.1315 40.1621 21.1317 39.8379 21.3754C38.5347 22.3536 36.6754 23.2394 34.3118 24.0077C32.4885 24.6006 30.7265 24.9955 29.7718 25.1533C29.5353 25.1922 29.317 25.2942 29.1561 25.441C28.965 25.6153 28.86 25.8436 28.8606 26.0843C28.8639 27.0353 28.9285 27.9891 29.0433 28.9351C28.8085 28.8792 28.5749 28.8184 28.3427 28.7527C28.0385 28.6645 27.7547 28.5173 27.5072 28.3196L26.5966 26.6944C26.5849 26.5983 26.5771 26.5013 26.5771 26.4028V23.9153L26.823 23.6399C27.7434 22.612 28.3664 21.3529 28.6252 19.9976C29.0798 19.8935 29.636 19.5789 29.7547 18.8429C29.9536 17.6095 30.1258 16.9451 30.2515 16.46C30.3917 15.9184 30.4843 15.5607 30.4843 14.9128C30.4843 14.2869 30.3617 13.8359 30.1228 13.5613C30.2195 10.4455 30.3321 5.80988 27.5333 2.92233C25.9387 1.27711 23.5869 0.442871 20.5439 0.442871C17.2589 0.442871 14.7801 1.46757 13.1762 3.48827C10.5895 6.74718 11.0263 11.6217 11.3381 13.587C11.1144 13.864 11.0007 14.3073 11.0007 14.9126C11.0007 15.5605 11.0933 15.9182 11.2335 16.4598C11.3592 16.9448 11.5314 17.6093 11.7303 18.8427C11.8488 19.5789 12.405 19.8937 12.8596 19.9976C13.1185 21.3528 13.7415 22.6119 14.6618 23.6399L14.9077 23.9153V26.4028C14.9077 27.4867 14.1817 28.4529 13.1425 28.7527C11.8084 29.1373 10.0344 29.5369 8.319 29.9237C7.0971 30.1992 5.83346 30.484 4.75701 30.7575C2.81241 31.2517 1.30851 32.7632 0.832362 34.7022C0.826804 34.7244 0.823167 34.747 0.821491 34.7698L0.0011645 45.304C-0.004271 45.3749 0.00964414 45.4421 0.0361694 45.503C0.0730282 45.5893 0.137819 45.6608 0.220151 45.7059C0.302482 45.751 0.397582 45.7672 0.490195 45.7518C0.582808 45.7364 0.667567 45.6903 0.730876 45.621C0.794185 45.5517 0.832374 45.4631 0.839319 45.3695L0.86954 44.9807L1.65682 34.8702C2.06774 33.2492 3.33204 31.987 4.96399 31.5722C6.02979 31.3013 7.28734 31.0178 8.50381 30.7436C10.2312 30.3542 12.0173 29.9518 13.3751 29.5604C13.6421 29.483 13.8981 29.3717 14.1367 29.2291L16.1959 34.0484C16.2218 34.109 16.2615 34.1626 16.3118 34.205C16.3622 34.2474 16.4218 34.2774 16.4859 34.2925C16.55 34.3076 16.6167 34.3075 16.6808 34.2921C16.7448 34.2767 16.8043 34.2465 16.8545 34.2039L20.7426 30.9067L24.6307 34.2039C24.6811 34.2465 24.7407 34.2767 24.8049 34.292C24.8691 34.3074 24.9359 34.3075 25.0001 34.2923C25.0643 34.2771 25.1239 34.2469 25.1743 34.2043C25.2246 34.1617 25.2643 34.1078 25.2899 34.0471L27.3315 29.2184C27.5749 29.3663 27.8368 29.4814 28.1103 29.5606C28.4312 29.6533 28.7884 29.7426 29.17 29.8298C29.1959 29.9922 29.2176 30.1555 29.2468 30.317C29.4827 31.6176 29.8206 32.8976 30.2576 34.1451C31.0179 36.3213 32.0917 38.4564 33.4488 40.491C34.5109 42.0791 35.7113 43.5701 37.0361 44.9466L37.0376 44.9481C37.3154 45.2368 37.5987 45.5202 37.8873 45.7982C38.6684 46.5507 39.2944 47.0736 39.6453 47.3532C39.8558 47.521 40.1345 47.6135 40.4304 47.6135C40.7265 47.6135 41.0055 47.521 41.2155 47.3532C41.6865 46.9779 42.6511 46.1665 43.8235 44.9479C45.1489 43.571 46.3499 42.0795 47.4122 40.4908C48.7693 38.4562 49.843 36.3213 50.6035 34.1451C51.0403 32.8976 51.3783 31.6176 51.6143 30.317C51.866 28.9199 51.995 27.5035 52 26.0839C52.0006 25.8436 51.8956 25.6151 51.7041 25.4405C51.5425 25.2942 51.3243 25.1922 51.0879 25.1533ZM15.7391 26.6146C15.7437 26.5444 15.748 26.4739 15.748 26.4028V24.4706L18.8561 26.1613C18.8708 26.1691 18.8858 26.1763 18.9013 26.1826C19.5489 26.4398 20.2395 26.5715 20.9363 26.5709C21.7043 26.5709 22.472 26.412 23.181 26.0952C23.1981 26.0876 23.2149 26.0786 23.2305 26.0689L25.7357 24.5182V26.403C25.7357 26.4741 25.74 26.5446 25.7446 26.615L20.742 29.855L15.7391 26.6146ZM21.4453 30.4007L26.0416 27.424L26.6884 28.5788L24.7377 33.1928L21.4453 30.4007ZM26.9206 3.51567C29.3227 5.9936 29.3661 10.0589 29.2857 13.0067L28.7217 10.2085C28.7112 10.157 28.6914 10.1079 28.6632 10.0635L26.1909 6.18624C26.1578 6.13424 26.1138 6.09004 26.0619 6.05671C26.0101 6.02337 25.9516 6.00169 25.8905 5.99315C25.8295 5.98461 25.7673 5.98943 25.7083 6.00726C25.6492 6.0251 25.5948 6.05552 25.5487 6.09645L23.0618 8.29956C22.0735 9.17561 20.7984 9.65913 19.4777 9.65865H17.1743C15.7275 9.659 14.3285 10.1773 13.2307 11.1197C12.7735 11.5137 12.4611 12.0494 12.3434 12.6414L12.1836 13.4524C11.8997 11.6057 11.4907 6.98287 13.8434 4.01813C15.2773 2.21137 17.5317 1.29538 20.5434 1.29538C23.3469 1.29559 25.4924 2.04243 26.9206 3.51567ZM13.6369 19.558C13.6214 19.4587 13.571 19.3681 13.4949 19.3024C13.4187 19.2367 13.3217 19.2002 13.2212 19.1995C13.1238 19.1986 12.6341 19.1708 12.5596 18.709C12.3545 17.4369 12.1767 16.7505 12.0469 16.2493C11.914 15.7362 11.841 15.4538 11.841 14.913C11.841 14.8609 11.8434 14.8176 11.8453 14.7717L12.3326 14.8659C12.4531 14.8868 12.5674 14.8631 12.6607 14.8001C12.7539 14.7371 12.8184 14.6399 12.8403 14.5295L13.1799 12.8067C13.2603 12.4021 13.4737 12.036 13.7862 11.7668C14.7294 10.957 15.9313 10.5117 17.1743 10.5114H19.4777C21.0083 10.5114 22.482 9.95261 23.6275 8.93769L25.7407 7.0657L27.9018 10.4551L28.6469 14.1516C28.6604 14.2188 28.6898 14.2818 28.7328 14.3351C28.7757 14.3885 28.8309 14.4307 28.8937 14.4582C28.9564 14.4857 29.0249 14.4976 29.0933 14.493C29.1616 14.4884 29.2278 14.4674 29.2863 14.4317L29.5646 14.2623C29.6044 14.3815 29.6431 14.5813 29.6431 14.913C29.6431 15.4538 29.5701 15.7364 29.4372 16.2493C29.3076 16.7505 29.1298 17.4369 28.9246 18.709C28.85 19.1708 28.3601 19.1986 28.2662 19.1995H28.2625C28.0544 19.1995 27.8772 19.3519 27.8468 19.5582C27.6533 20.8685 27.0792 22.0931 26.1957 23.08L25.8663 23.4487L22.8124 25.339C21.6766 25.8355 20.3902 25.8614 19.2352 25.411L15.6074 23.4376L15.288 23.0802C14.4047 22.0931 13.8306 20.8684 13.6369 19.558ZM16.7447 33.1942L14.8183 28.686C15.146 28.3469 15.3977 27.9419 15.5567 27.498L20.0388 30.4007L16.7447 33.1942ZM50.7742 30.1657C50.5462 31.4221 50.2197 32.6586 49.7977 33.8638C49.0609 35.9724 48.0195 38.0428 46.7019 40.0174C45.6677 41.5642 44.4986 43.0163 43.2082 44.3567C42.07 45.5401 41.1379 46.3242 40.6833 46.6866C40.6383 46.7225 40.548 46.7607 40.4296 46.7607C40.3113 46.7607 40.221 46.7225 40.1758 46.6866C39.7214 46.3244 38.7893 45.5404 37.6511 44.3572C36.3608 43.0167 35.1916 41.5646 34.1574 40.0179C32.8401 38.0431 31.7984 35.9728 31.0616 33.864C30.6397 32.6588 30.3132 31.4223 30.0851 30.1659C29.8431 28.8219 29.7179 27.4595 29.711 26.0939C29.7159 26.0852 29.7223 26.0775 29.7299 26.071C29.7692 26.0352 29.8366 26.0067 29.9106 25.9945C30.8944 25.8317 32.7066 25.4262 34.5751 24.8185C37.0278 24.021 38.9709 23.092 40.3495 22.057C40.3565 22.0518 40.3837 22.0388 40.4291 22.0388C40.4733 22.0388 40.5004 22.0507 40.5093 22.0572C41.8878 23.0919 43.8307 24.0208 46.2836 24.8183C48.1521 25.426 49.9643 25.8314 50.9486 25.9943C51.022 26.0065 51.0894 26.0352 51.1286 26.0704C51.1397 26.0806 51.144 26.0889 51.146 26.0841C51.1414 27.4529 51.017 28.8186 50.7742 30.1657Z"
                          fill="white"
                        />
                      </svg>
                      <h4>Safeguarding People</h4>
                    </div>
                  </div>

                  {/* Pillar 3: Evolving Environmental Stewardship */}
                  <div className="col-6">
                    <div className="seller_bx">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M44.7532 25.7466C44.4374 25.4308 44.0624 25.1802 43.6497 25.0092C43.237 24.8382 42.7947 24.7502 42.348 24.7502C41.9013 24.7502 41.4589 24.8382 41.0462 25.0092C40.6335 25.1802 40.2586 25.4308 39.9427 25.7466L34.1205 31.5689C33.865 31.096 33.4868 30.7007 33.0256 30.4246C32.5645 30.1485 32.0374 30.0018 31.5 29.9999H22.983C22.2497 29.1124 21.3391 28.3879 20.3096 27.8729C19.28 27.3578 18.1542 27.0636 17.0043 27.009C15.8544 26.9544 14.7058 27.1407 13.632 27.5559C12.5583 27.9711 11.5832 28.6061 10.7692 29.4202L7.49996 32.6894L6.53021 31.7197C6.38957 31.579 6.19883 31.5001 5.99996 31.5001C5.80109 31.5001 5.61036 31.579 5.46971 31.7197L2.46971 34.7197C2.32911 34.8603 2.25012 35.051 2.25012 35.2499C2.25012 35.4488 2.32911 35.6395 2.46971 35.7802L14.4697 47.7802C14.6104 47.9208 14.8011 47.9997 15 47.9997C15.1988 47.9997 15.3896 47.9208 15.5302 47.7802L18.5302 44.7802C18.6708 44.6395 18.7498 44.4488 18.7498 44.2499C18.7498 44.051 18.6708 43.8603 18.5302 43.7197L17.5605 42.7499L18.402 41.9084C18.8248 41.4884 19.396 41.2518 19.992 41.2499H30.954C31.9393 41.2525 32.9154 41.0597 33.8258 40.6825C34.7361 40.3053 35.5625 39.7512 36.2572 39.0524L44.7532 30.5572C45.0691 30.2413 45.3197 29.8663 45.4907 29.4536C45.6616 29.0409 45.7496 28.5986 45.7496 28.1519C45.7496 27.7052 45.6616 27.2629 45.4907 26.8502C45.3197 26.4375 45.0691 26.0625 44.7532 25.7466ZM15 46.1894L4.06046 35.2499L5.99996 33.3104L16.9395 44.2499L15 46.1894ZM43.6927 29.4966L35.1975 37.9927C34.6415 38.5516 33.9802 38.9948 33.2518 39.2964C32.5233 39.598 31.7423 39.7522 30.954 39.7499H19.9927C19.5001 39.7486 19.0122 39.8449 18.5571 40.0334C18.102 40.2218 17.6888 40.4987 17.3415 40.8479L16.5 41.6894L8.56046 33.7499L11.8297 30.4806C12.5046 29.8058 13.3148 29.2815 14.2068 28.9421C15.0988 28.6028 16.0526 28.456 17.0054 28.5116C17.9582 28.5671 18.8884 28.8237 19.735 29.2644C20.5816 29.7051 21.3253 30.32 21.9172 31.0687L22.0327 31.2149C22.103 31.3038 22.1924 31.3756 22.2944 31.425C22.3963 31.4743 22.5082 31.4999 22.6215 31.4999H31.5C31.8978 31.4999 32.2793 31.6579 32.5606 31.9392C32.8419 32.2205 33 32.6021 33 32.9999C33 33.3977 32.8419 33.7793 32.5606 34.0606C32.2793 34.3419 31.8978 34.4999 31.5 34.4999H21C20.8011 34.4999 20.6103 34.5789 20.4696 34.7196C20.329 34.8602 20.25 35.051 20.25 35.2499C20.25 35.4488 20.329 35.6396 20.4696 35.7802C20.6103 35.9209 20.8011 35.9999 21 35.9999H31.5C32.2336 35.9975 32.9408 35.7257 33.4873 35.2363C34.0338 34.7469 34.3816 34.0738 34.4647 33.3449L41.0032 26.8072C41.3654 26.4612 41.8471 26.2681 42.348 26.2681C42.8489 26.2681 43.3305 26.4612 43.6927 26.8072C44.0493 27.1638 44.2496 27.6475 44.2496 28.1519C44.2496 28.6563 44.0493 29.14 43.6927 29.4966Z"
                          fill="white"
                        />
                      </svg>
                      <h4>Evolving Environmental Stewardship</h4>
                    </div>
                  </div>

                  {/* Pillar 4: Working Together */}
                  <div className="col-6">
                    <div className="seller_bx">
                      <svg width="50" height="48" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20.184 42.9757L20.0396 43.6807L20.1787 42.975C20.086 42.9567 19.9906 42.9569 19.8979 42.9755C19.8053 42.9941 19.7172 43.0308 19.6388 43.0834C19.5603 43.1361 19.493 43.2037 19.4406 43.2823C19.3883 43.361 19.3519 43.4492 19.3337 43.5419C19.3154 43.6346 19.3156 43.73 19.3342 43.8227C19.3528 43.9153 19.3895 44.0034 19.4421 44.0818C19.4948 44.1603 19.5624 44.2276 19.641 44.28C19.7197 44.3323 19.8079 44.3686 19.9006 44.3869C19.9017 44.3873 19.9125 44.3891 19.9137 44.3895C19.9594 44.3981 20.0048 44.4026 20.0497 44.4026C20.3881 44.4026 20.6899 44.1628 20.7555 43.8179C20.8305 43.4274 20.5745 43.0503 20.1839 42.9757H20.184ZM25.6861 43.207L25.7577 43.9228L25.6838 43.2074C25.5898 43.217 25.4987 43.2451 25.4155 43.29C25.3324 43.3348 25.2589 43.3957 25.1993 43.469C25.1397 43.5423 25.0951 43.6266 25.0681 43.7172C25.0411 43.8077 25.0322 43.9027 25.0419 43.9967C25.0515 44.0907 25.0796 44.1819 25.1245 44.2651C25.1693 44.3483 25.2302 44.4218 25.3035 44.4815C25.3768 44.5411 25.4611 44.5858 25.5517 44.6128C25.6422 44.6399 25.7372 44.6488 25.8312 44.6392L25.8511 44.6369C26.2446 44.5908 26.5239 44.2358 26.4801 43.8423C26.4358 43.4491 26.0797 43.1658 25.6861 43.207ZM22.9313 43.2977L22.9207 43.2973C22.5242 43.2793 22.1929 43.5874 22.1749 43.9843C22.1573 44.3812 22.4692 44.7175 22.866 44.7355C22.9604 44.7398 23.0548 44.7255 23.1437 44.6934C23.2325 44.6612 23.3142 44.6119 23.384 44.5481C23.4538 44.4844 23.5103 44.4075 23.5504 44.3219C23.5905 44.2363 23.6133 44.1437 23.6175 44.0493C23.6218 43.9548 23.6075 43.8605 23.5753 43.7716C23.5432 43.6828 23.4938 43.6011 23.4301 43.5313C23.3664 43.4615 23.2895 43.4049 23.2039 43.3649C23.1183 43.3248 23.0257 43.3019 22.9313 43.2977ZM17.5257 42.2445L17.5167 42.241C17.1427 42.1069 16.7349 42.3025 16.6007 42.6767C16.4661 43.0507 16.6648 43.4644 17.0388 43.599C17.2185 43.6635 17.4164 43.654 17.589 43.5726C17.7616 43.4912 17.8948 43.3446 17.9594 43.165C17.9914 43.076 18.0056 42.9817 18.0011 42.8873C17.9966 42.7929 17.9736 42.7003 17.9333 42.6148C17.893 42.5294 17.8363 42.4526 17.7664 42.3891C17.6964 42.3256 17.6146 42.2764 17.5257 42.2445ZM28.4021 42.7032L28.5793 43.4008L28.3999 42.704C28.2301 42.7475 28.082 42.8515 27.9835 42.9965C27.885 43.1414 27.8427 43.3173 27.8646 43.4912C27.8866 43.6651 27.9712 43.825 28.1027 43.9409C28.2341 44.0568 28.4034 44.1207 28.5786 44.1207C28.6381 44.1207 28.6986 44.1133 28.7589 44.0975C28.7618 44.0967 28.7747 44.0934 28.778 44.0927C29.1599 43.9884 29.3833 43.5961 29.2814 43.2133C29.1794 42.831 28.7855 42.6035 28.4021 42.7032ZM31.0036 41.7958L31.2889 42.4563L31.0014 41.7966C30.8265 41.8728 30.689 42.0154 30.6191 42.193C30.5493 42.3706 30.5528 42.5686 30.6288 42.7436C30.6848 42.8722 30.7771 42.9817 30.8945 43.0585C31.0118 43.1354 31.149 43.1763 31.2893 43.1763C31.3848 43.1763 31.4826 43.1567 31.576 43.1163C31.579 43.1148 31.5906 43.1099 31.5936 43.1084C31.9545 42.9453 32.1138 42.5226 31.9527 42.1609C31.7915 41.7988 31.3664 41.6365 31.0037 41.7958H31.0036ZM14.7769 8.99072C14.8923 8.99072 15.0096 8.96289 15.1179 8.90522C15.2013 8.86073 15.2751 8.80025 15.3351 8.72723C15.3951 8.65421 15.4401 8.57008 15.4676 8.47965C15.4951 8.38922 15.5046 8.29426 15.4953 8.20019C15.4861 8.10612 15.4585 8.01479 15.414 7.9314C15.3695 7.84803 15.3091 7.77423 15.2361 7.71422C15.1631 7.65421 15.0791 7.60917 14.9887 7.58167C14.8983 7.55417 14.8034 7.54475 14.7093 7.55396C14.6153 7.56316 14.524 7.5908 14.4406 7.6353L14.432 7.63981C14.0816 7.82691 13.953 8.26052 14.14 8.61132C14.269 8.85351 14.5193 8.99072 14.7769 8.99072ZM6.45262 17.0285C6.53633 17.0725 6.62789 17.0996 6.72207 17.1082C6.81624 17.1167 6.91118 17.1066 7.00145 17.0785C7.09172 17.0503 7.17556 17.0046 7.24815 16.944C7.32075 16.8834 7.38068 16.8091 7.42452 16.7253L7.43729 16.7002C7.47904 16.6154 7.50366 16.5232 7.50976 16.4289C7.51585 16.3345 7.50329 16.2399 7.4728 16.1504C7.4423 16.061 7.39447 15.9784 7.33204 15.9074C7.2696 15.8365 7.19379 15.7785 7.10894 15.7368C6.9389 15.653 6.74265 15.6398 6.56288 15.6999C6.38312 15.7601 6.23438 15.8888 6.14903 16.0581C6.06077 16.2271 6.04317 16.4242 6.10009 16.6061C6.15701 16.7881 6.2838 16.94 6.45262 17.0285ZM5.43947 19.7358C5.51594 19.7617 5.59356 19.774 5.67042 19.774C5.82086 19.7739 5.96747 19.7266 6.08967 19.6389C6.21187 19.5511 6.30353 19.4273 6.35178 19.2849L6.36118 19.2564C6.38898 19.166 6.3987 19.0711 6.3898 18.9771C6.3809 18.883 6.35354 18.7916 6.3093 18.7081C6.26506 18.6246 6.20479 18.5506 6.13195 18.4904C6.05911 18.4302 5.97512 18.385 5.88478 18.3573C5.70381 18.3016 5.50817 18.3194 5.34027 18.4069C5.17236 18.4945 5.04573 18.6447 4.98782 18.825C4.92712 19.0056 4.94059 19.203 5.02526 19.3738C5.10994 19.5446 5.2589 19.6748 5.43947 19.7358ZM7.87233 14.5108C7.94872 14.5665 8.03533 14.6066 8.12722 14.6288C8.21912 14.651 8.31448 14.6548 8.40785 14.6401C8.50122 14.6253 8.59078 14.5923 8.67139 14.543C8.752 14.4936 8.82208 14.4288 8.87762 14.3523L8.88703 14.3396C9.11789 14.0165 9.04257 13.5682 8.72026 13.3374C8.39748 13.1061 7.94775 13.1803 7.71612 13.5027L8.29596 13.9292L7.71382 13.5057C7.60157 13.66 7.55523 13.8526 7.58497 14.0411C7.61471 14.2296 7.71802 14.3986 7.87233 14.5108ZM12.3338 10.545C12.4849 10.545 12.637 10.4974 12.7671 10.3984C13.0879 10.1638 13.1573 9.71362 12.9226 9.39285C12.8099 9.23889 12.6406 9.13601 12.452 9.10684C12.2634 9.07767 12.071 9.1246 11.917 9.23731L11.8991 9.25036C11.5827 9.49063 11.5197 9.94304 11.7599 10.2598C11.827 10.3484 11.9137 10.4203 12.0133 10.4698C12.1129 10.5193 12.2226 10.545 12.3338 10.545ZM4.79707 30.6496C4.84222 30.7965 4.93327 30.9251 5.05685 31.0164C5.18043 31.1077 5.33003 31.157 5.4837 31.1571C5.55374 31.1571 5.62542 31.1466 5.69585 31.1249C6.07371 31.0091 6.28692 30.6087 6.17369 30.2302C6.12156 30.0483 5.99985 29.8942 5.83492 29.8014C5.66999 29.7086 5.47513 29.6845 5.29256 29.7343C5.10844 29.7846 4.95182 29.9059 4.85714 30.0717C4.76246 30.2374 4.73747 30.4339 4.78766 30.6181L4.79707 30.6496ZM10.1598 12.4415C10.3469 12.4415 10.534 12.3692 10.6753 12.2253C10.9559 11.9441 10.9559 11.4884 10.6753 11.2077C10.6084 11.1408 10.5291 11.0878 10.4417 11.0516C10.3544 11.0155 10.2608 10.9968 10.1663 10.9968C10.0717 10.9968 9.97812 11.0155 9.89078 11.0516C9.80344 11.0878 9.72408 11.1408 9.65724 11.2077L9.64524 11.2197C9.36717 11.5034 9.37274 11.9584 9.65656 12.2365C9.79087 12.3684 9.97161 12.442 10.1598 12.4415ZM5.59251 27.5121C5.54185 27.1211 5.18471 26.8438 4.79323 26.8903C4.60379 26.9131 4.43112 27.0101 4.31314 27.16C4.19516 27.31 4.14151 27.5006 4.16397 27.6901L4.1681 27.7189C4.22058 28.0765 4.52754 28.333 4.87882 28.333C4.91326 28.333 4.94848 28.3303 4.98408 28.325C5.37575 28.268 5.64759 27.9038 5.59251 27.5121ZM4.68835 25.4509C4.69584 25.4509 4.70303 25.4513 4.71013 25.4513C4.89728 25.4512 5.07701 25.3782 5.21122 25.2478C5.34542 25.1173 5.42354 24.9398 5.42901 24.7527L5.42977 24.722C5.42977 24.5311 5.35396 24.3481 5.219 24.2131C5.08404 24.0782 4.90099 24.0023 4.71013 24.0023C4.52087 24.0023 4.33919 24.0768 4.20448 24.2097C4.06978 24.3426 3.99289 24.5233 3.99049 24.7126C3.9854 24.903 4.05601 25.0876 4.18682 25.226C4.31764 25.3644 4.49799 25.4453 4.68835 25.4509ZM4.84619 22.5649C5.03411 22.5984 5.22765 22.556 5.3843 22.4469C5.54095 22.3378 5.6479 22.171 5.68165 21.9831C5.68357 21.9727 5.68501 21.9622 5.68645 21.9517C5.70026 21.8582 5.6955 21.7629 5.67245 21.6712C5.64941 21.5795 5.60852 21.4933 5.55213 21.4175C5.49573 21.3416 5.42495 21.2776 5.34381 21.2292C5.26267 21.1807 5.17277 21.1487 5.07926 21.135C4.69065 21.0772 4.32671 21.3445 4.26405 21.732C4.19592 22.1225 4.45596 22.4948 4.84619 22.5649ZM38.7929 14.7381C38.859 14.8341 38.9474 14.9126 39.0506 14.9667C39.1538 15.0209 39.2687 15.049 39.3852 15.0488C39.5257 15.0488 39.6682 15.0075 39.7927 14.9217C40.1199 14.6968 40.2027 14.2485 39.9778 13.9209L39.3796 14.3212L39.9755 13.9176C39.9225 13.8393 39.8546 13.7723 39.7756 13.7203C39.6967 13.6683 39.6083 13.6324 39.5155 13.6146C39.4226 13.5968 39.3272 13.5974 39.2346 13.6165C39.1421 13.6355 39.0541 13.6726 38.9759 13.7257C38.8977 13.7787 38.8307 13.8466 38.7787 13.9256C38.7267 14.0045 38.6907 14.0929 38.6729 14.1857C38.6551 14.2786 38.6557 14.374 38.6748 14.4666C38.6939 14.5591 38.731 14.6471 38.784 14.7253L38.7929 14.7381ZM42.4681 21.9798C42.3742 21.9903 42.2832 22.0192 42.2005 22.0649C42.1177 22.1106 42.0448 22.1722 41.9859 22.2461C41.9269 22.32 41.8831 22.4048 41.857 22.4956C41.8308 22.5865 41.8228 22.6816 41.8335 22.7755L41.8373 22.8067C41.8644 22.9956 41.9655 23.166 42.1182 23.2805C42.2709 23.395 42.4628 23.4442 42.6517 23.4172C42.839 23.3903 43.0082 23.2908 43.1227 23.1402C43.2372 22.9895 43.2877 22.7998 43.2634 22.6122C43.2181 22.2182 42.8604 21.9355 42.468 21.9799L42.4681 21.9798ZM41.2536 19.949L41.2567 19.9584C41.3005 20.1075 41.3913 20.2385 41.5157 20.3316C41.6401 20.4248 41.7913 20.4752 41.9467 20.4753C42.0139 20.4753 42.082 20.4659 42.1498 20.4457C42.2405 20.419 42.3251 20.3748 42.3987 20.3155C42.4723 20.2562 42.5334 20.1829 42.5787 20.0999C42.624 20.017 42.6525 19.9259 42.6626 19.8319C42.6727 19.7379 42.6641 19.6429 42.6374 19.5522L42.6345 19.5428C42.6079 19.4521 42.5636 19.3675 42.5043 19.2939C42.445 19.2203 42.3717 19.1591 42.2887 19.1138C42.2057 19.0686 42.1146 19.0401 42.0206 19.0301C41.9266 19.0201 41.8315 19.0288 41.7409 19.0555C41.5578 19.1094 41.4036 19.2338 41.3122 19.4014C41.2208 19.5689 41.1998 19.7659 41.2536 19.949ZM40.2372 17.2582C40.2969 17.3795 40.3893 17.4816 40.504 17.553C40.6188 17.6244 40.7512 17.6623 40.8863 17.6623C40.9924 17.6623 41.1003 17.6387 41.202 17.5884C41.5584 17.4131 41.7064 16.9843 41.5306 16.6275L40.8785 16.9314L41.53 16.6259C41.4899 16.5404 41.4333 16.4636 41.3635 16.3999C41.2937 16.3362 41.212 16.2869 41.1231 16.2548C41.0343 16.2226 40.94 16.2083 40.8456 16.2127C40.7512 16.217 40.6586 16.2399 40.573 16.28C40.4002 16.361 40.2666 16.5073 40.2017 16.6867C40.1367 16.8662 40.1457 17.0641 40.2267 17.2369L40.2372 17.2582ZM36.9804 12.4907C37.0473 12.5592 37.1272 12.6136 37.2155 12.6506C37.3038 12.6877 37.3986 12.7067 37.4943 12.7066C37.676 12.7066 37.8579 12.6383 37.9981 12.5007C38.1333 12.3683 38.2108 12.1879 38.2139 11.9987C38.2169 11.8095 38.1453 11.6266 38.0145 11.4899C37.9503 11.4206 37.873 11.3646 37.7872 11.3251C37.7013 11.2856 37.6085 11.2634 37.5141 11.2598C37.4197 11.2562 37.3255 11.2712 37.2368 11.304C37.1482 11.3368 37.0669 11.3868 36.9976 11.451C36.9283 11.5152 36.8723 11.5924 36.8328 11.6783C36.7934 11.7641 36.7712 11.8569 36.7676 11.9513C36.764 12.0458 36.779 12.14 36.8118 12.2286C36.8446 12.3172 36.8945 12.3985 36.9587 12.4678L36.9804 12.4907ZM42.702 24.9847C42.3065 24.9745 41.9756 25.2845 41.9617 25.68C41.9572 25.7772 41.9725 25.8743 42.0067 25.9655C42.0409 26.0566 42.0932 26.1399 42.1605 26.2102C42.2277 26.2806 42.3086 26.3366 42.3981 26.3748C42.4876 26.413 42.584 26.4327 42.6813 26.4326C43.0603 26.4326 43.3777 26.1361 43.399 25.7527L43.4002 25.7231C43.4115 25.3261 43.0989 24.9963 42.7019 24.9847H42.702ZM32.3785 8.95694L32.3957 8.96625C32.4989 9.02133 32.6141 9.05017 32.7311 9.05021C32.8612 9.05011 32.9889 9.01476 33.1005 8.9479C33.2121 8.88104 33.3035 8.78519 33.3649 8.67052C33.5524 8.32164 33.4205 7.88535 33.0726 7.69642L32.7243 8.32606L33.0703 7.69488C32.9875 7.64946 32.8964 7.6208 32.8025 7.61055C32.7085 7.6003 32.6134 7.60866 32.5227 7.63515C32.432 7.66164 32.3474 7.70574 32.2737 7.76494C32.2 7.82413 32.1387 7.89726 32.0933 7.98015C31.9024 8.32836 32.0299 8.76609 32.3784 8.95694H32.3785ZM34.8125 10.5353L34.8238 10.5439C34.9487 10.6389 35.1013 10.6902 35.2581 10.69C35.4089 10.6901 35.5558 10.6428 35.6783 10.5549C35.8007 10.467 35.8925 10.3428 35.9406 10.2C35.9887 10.0571 35.9907 9.90274 35.9464 9.75866C35.9021 9.61458 35.8137 9.48803 35.6937 9.39688L35.6887 9.39352C35.6137 9.33596 35.5282 9.29372 35.4369 9.26922C35.3457 9.24472 35.2505 9.23844 35.1568 9.25073C35.0631 9.26303 34.9727 9.29366 34.8909 9.34088C34.809 9.3881 34.7373 9.45099 34.6797 9.52594C34.5635 9.67739 34.5122 9.86878 34.5371 10.0581C34.562 10.2473 34.661 10.419 34.8124 10.5353H34.8125Z"
                          fill="white"
                        />
                        <path
                          d="M48.6833 35.8793L45.3051 32.4951C45.1642 32.3532 44.9965 32.2406 44.8118 32.164C44.6271 32.0874 44.429 32.0482 44.229 32.0487C44.0291 32.0482 43.831 32.0874 43.6464 32.164C43.4618 32.2407 43.2942 32.3532 43.1534 32.4951L43.075 32.5735L42.853 32.3516C42.5831 32.0818 42.3691 31.7615 42.223 31.4089C42.2105 31.3628 42.1933 31.3182 42.1717 31.2756C42.0603 30.9617 42.0036 30.631 42.0041 30.298V29.3407C42.1079 29.3955 42.2234 29.424 42.3407 29.4239C42.5089 29.4236 42.6717 29.3645 42.8009 29.2568C42.93 29.149 43.0173 28.9994 43.0476 28.834C43.074 28.7001 43.0618 28.5614 42.0124 28.4342C42.963 28.307 42.8784 28.1964 42.7685 28.1155C42.6587 28.0345 42.5281 27.9864 42.3919 27.9769C42.2558 27.9673 42.1197 27.9967 41.9996 28.0616C41.9554 27.039 41.5374 26.084 40.8103 25.3553L37.533 22.0723C36.7976 21.3358 35.8197 20.9303 34.7796 20.9303C33.9746 20.9303 33.2076 21.1743 32.5607 21.626L32.2129 21.2762V13.0453C32.2131 12.0538 31.8527 11.096 31.199 10.3504C30.7339 9.82028 30.4775 9.13898 30.4779 8.4337V7.83055H30.5273C31.3662 7.83055 32.0487 7.14804 32.0487 6.30884V1.5218C32.0487 0.682507 31.3662 0 30.5273 0H17.0847C16.2459 0 15.5633 0.682507 15.5633 1.5218V6.30884C15.5633 7.14804 16.2459 7.83064 17.0847 7.83064H17.1957V8.14613C17.1957 8.922 16.8939 9.65143 16.3463 10.1998L14.8955 11.6533C14.1256 12.4247 13.7017 13.4498 13.7017 14.5405V19.1833C13.7013 19.7927 13.8444 20.3936 14.1195 20.9374C13.1653 20.9925 12.2759 21.3902 11.5945 22.0723L8.31712 25.3553C7.5472 26.1268 7.12329 27.1522 7.12329 28.2425V30.298C7.12329 31.0739 6.822 31.8032 6.2744 32.3516L6.05505 32.5713C6.054 32.572 6.05313 32.5727 6.05246 32.5735L5.97455 32.4951C5.83366 32.3532 5.66599 32.2406 5.48126 32.164C5.29654 32.0874 5.09843 32.0482 4.89845 32.0487C4.69852 32.0482 4.50047 32.0874 4.31581 32.164C4.13115 32.2406 3.96354 32.3532 3.82273 32.4951L0.444162 35.8793C-0.148054 36.4726 -0.148054 37.4382 0.444162 38.0315L1.60125 39.1901C1.66798 39.257 1.74724 39.3101 1.8345 39.3463C1.92177 39.3826 2.01532 39.4013 2.10981 39.4014C2.20431 39.4015 2.2979 39.383 2.38524 39.3469C2.47257 39.3108 2.55195 39.2579 2.61882 39.1911C2.68572 39.1243 2.73881 39.045 2.77505 38.9577C2.8113 38.8704 2.82999 38.7768 2.83006 38.6823C2.83013 38.5877 2.81158 38.4941 2.77547 38.4067C2.73936 38.3194 2.68639 38.24 2.61959 38.1731L1.46288 37.0143C1.44724 36.9986 1.43845 36.9774 1.43845 36.9552C1.43845 36.9331 1.44724 36.9119 1.46288 36.8962L4.84145 33.512C4.84894 33.5045 4.85784 33.4985 4.86765 33.4944C4.87746 33.4904 4.88797 33.4883 4.89859 33.4883C4.90921 33.4883 4.91972 33.4904 4.92953 33.4944C4.93934 33.4985 4.94824 33.5045 4.95573 33.512L5.54315 34.1005H5.54344L13.5633 42.1342L14.4618 43.0345C14.4944 43.0671 14.4944 43.1199 14.4618 43.1525L11.0836 46.5367C11.0761 46.5443 11.0672 46.5503 11.0573 46.5544C11.0475 46.5585 11.0369 46.5606 11.0262 46.5606C11.0156 46.5606 11.005 46.5585 10.9951 46.5544C10.9853 46.5503 10.9764 46.5443 10.9689 46.5367L4.65713 40.214C4.59039 40.147 4.51112 40.0939 4.42385 40.0577C4.33658 40.0214 4.24302 40.0027 4.14851 40.0026C4.054 40.0025 3.9604 40.021 3.87306 40.0571C3.78571 40.0932 3.70633 40.1461 3.63946 40.2129C3.57253 40.2797 3.51941 40.359 3.48314 40.4463C3.44686 40.5336 3.42813 40.6272 3.42802 40.7217C3.42792 40.8162 3.44643 40.9099 3.48251 40.9972C3.51859 41.0846 3.57153 41.164 3.63831 41.231L9.95051 47.5536C10.2376 47.8415 10.62 48 11.0266 48C11.2265 48.0005 11.4245 47.9613 11.6092 47.8847C11.7938 47.808 11.9614 47.6955 12.1022 47.5536L15.4805 44.1694C16.0727 43.5764 16.0727 42.6109 15.4805 42.0176L15.4438 41.9809L15.87 41.5539C16.3671 41.0553 17.029 40.7552 17.7316 40.7099C18.7205 40.6458 19.6521 40.2234 20.3519 39.5218L23.4554 36.4116C24.3504 36.1765 25.0472 35.4476 25.2365 34.5345C25.565 34.691 25.9243 34.772 26.2882 34.7718C27.6417 34.7718 28.7429 33.6694 28.7429 32.314V30.6053C29.0616 30.751 29.4079 30.8262 29.7583 30.826C31.1117 30.826 32.2125 29.7237 32.2125 28.3684V23.3167L34.4261 25.5412C34.493 25.6085 34.5724 25.6618 34.66 25.6982C34.7476 25.7346 34.8415 25.7532 34.9363 25.753C35.0306 25.7532 35.124 25.7347 35.2111 25.6988C35.2982 25.6628 35.3774 25.6101 35.4442 25.5435C35.5794 25.4088 35.6556 25.226 35.656 25.0351C35.6565 24.8443 35.581 24.6611 35.4464 24.5258L33.6009 22.6713C33.9619 22.4725 34.3675 22.3688 34.7796 22.3696C35.4348 22.3696 36.051 22.6252 36.5143 23.0896L39.7916 26.3721C40.2901 26.8718 40.5649 27.536 40.5649 28.2425V30.298C40.5649 31.4581 41.0157 32.5484 41.8343 33.3685L42.0577 33.5922L41.0138 34.6379L34.7006 40.9621L34.3486 40.6095C34.3448 40.606 34.3414 40.6023 34.3377 40.5989L34.2759 40.5368C33.5315 39.7908 32.5408 39.3418 31.4891 39.2736C30.8486 39.2318 30.2452 38.958 29.7919 38.5033L27.4273 36.1515C27.3603 36.0848 27.2808 36.0319 27.1934 35.996C27.1059 35.96 27.0123 35.9416 26.9177 35.9419C26.8232 35.9421 26.7296 35.961 26.6424 35.9974C26.5552 36.0338 26.4759 36.087 26.4093 36.154C26.1293 36.4359 26.1304 36.8916 26.4123 37.1716L28.7755 39.5218C29.4754 40.2235 30.4072 40.6459 31.3962 40.7099C32.0986 40.7553 32.7603 41.0553 33.2574 41.5536L33.2924 41.5885C33.3111 41.6098 33.3309 41.6297 33.3519 41.6484L33.6837 41.9804L33.6469 42.0176C33.0547 42.6109 33.0547 43.5761 33.6469 44.1694L37.0251 47.5536C37.3126 47.8415 37.6946 48 38.1012 48C38.3012 48.0005 38.4993 47.9613 38.684 47.8847C38.8687 47.808 39.0364 47.6955 39.1773 47.5536L48.6833 38.0311C49.2755 37.4378 49.2755 36.4726 48.6833 35.8793ZM19.3333 38.5049C18.8808 38.9588 18.2783 39.2321 17.6388 39.2736C16.587 39.3417 15.5961 39.7907 14.8515 40.5368L14.4269 40.9621L14.0446 40.5791C14.0398 40.5743 14.0349 40.569 14.03 40.5645L7.06965 33.5922L7.29312 33.3685C8.11169 32.5484 8.56257 31.4581 8.56257 30.298V28.2425C8.56257 27.536 8.83699 26.8718 9.33584 26.3722L12.6132 23.0896C13.0764 22.6252 13.6926 22.3696 14.3478 22.3696C14.7681 22.3696 15.172 22.4752 15.5303 22.6736L13.6818 24.5251C13.547 24.6602 13.4713 24.8433 13.4715 25.0341C13.4716 25.2249 13.5476 25.4079 13.6826 25.5427C13.7493 25.6095 13.8286 25.6624 13.9159 25.6985C14.0032 25.7346 14.0967 25.7531 14.1911 25.753C14.2857 25.7531 14.3795 25.7345 14.4669 25.6983C14.5543 25.6621 14.6337 25.609 14.7005 25.5419L16.9086 23.3299V32.314C16.9086 33.6694 18.0097 34.7718 19.3632 34.7718C19.7447 34.7718 20.1061 34.6841 20.4284 34.528C20.5746 35.2413 21.0304 35.8426 21.648 36.1851L19.3333 38.5049ZM30.7736 28.3688C30.7736 28.9303 30.3179 29.3872 29.7583 29.3872C29.1983 29.3872 28.7429 28.9303 28.7429 28.3688V20.3414C28.7429 20.1506 28.6671 19.9675 28.5321 19.8326C28.3972 19.6976 28.2141 19.6218 28.0233 19.6218C27.8324 19.6218 27.6494 19.6976 27.5144 19.8326C27.3794 19.9675 27.3036 20.1506 27.3036 20.3414V32.3144C27.3036 32.8759 26.8482 33.3325 26.2883 33.3325C25.7856 33.3325 25.3685 32.9644 25.2879 32.4827V20.3333C25.288 20.2077 25.2551 20.0842 25.1927 19.9752C25.1303 19.8662 25.0403 19.7754 24.9319 19.712C24.8235 19.6485 24.7004 19.6145 24.5747 19.6134C24.4491 19.6123 24.3254 19.6442 24.2159 19.7058C24.1004 19.767 24.0038 19.8585 23.9365 19.9705C23.8691 20.0825 23.8336 20.2108 23.8336 20.3414V32.314C23.8336 32.4056 23.8388 32.4951 23.8486 32.584V34.0341C23.8486 34.5956 23.3932 35.0524 22.8332 35.0524C22.2736 35.0524 21.8182 34.5956 21.8182 34.0341V20.3246C21.8182 20.1336 21.7424 19.9506 21.6074 19.8156C21.4724 19.6806 21.2893 19.6047 21.0984 19.6047C20.9075 19.6047 20.7244 19.6806 20.5894 19.8156C20.4544 19.9506 20.3786 20.1336 20.3786 20.3246V32.314C20.3786 32.8756 19.9232 33.3325 19.3636 33.3325C18.8036 33.3325 18.3482 32.8756 18.3482 32.314V18.9277C18.3482 18.7368 18.2724 18.5538 18.1375 18.4188C18.0025 18.2839 17.8195 18.208 17.6286 18.208C17.4377 18.208 17.2547 18.2839 17.1197 18.4188C16.9848 18.5538 16.909 18.7368 16.909 18.9277V21.4036C16.8477 21.4233 16.7894 21.4511 16.7358 21.4865C15.805 21.1368 15.1409 20.2365 15.1409 19.1833V14.5405C15.1409 13.834 15.4156 13.1698 15.9141 12.6702L17.3651 11.2166C18.1841 10.3966 18.6349 9.30619 18.6349 8.14613V7.83064H20.0817C20.2726 7.83064 20.4556 7.75482 20.5906 7.61987C20.7255 7.48491 20.8013 7.30186 20.8013 7.111C20.8013 6.71338 20.4794 6.39136 20.0817 6.39136H17.0847C17.0629 6.39129 17.042 6.38257 17.0266 6.36712C17.0112 6.35167 17.0026 6.33075 17.0026 6.30894V1.5218C17.0026 1.47641 17.0393 1.43928 17.0847 1.43928H30.5269C30.5488 1.43928 30.5698 1.44797 30.5853 1.46345C30.6008 1.47892 30.6095 1.49991 30.6095 1.5218V6.30884C30.6095 6.35461 30.5727 6.39136 30.5269 6.39136H23.4603C23.2694 6.39136 23.0864 6.46718 22.9514 6.60214C22.8164 6.7371 22.7406 6.92014 22.7406 7.111C22.7406 7.30186 22.8164 7.48491 22.9514 7.61987C23.0864 7.75482 23.2694 7.83064 23.4603 7.83064H29.0386V8.4337C29.0386 9.48917 29.4213 10.5067 30.1166 11.2998C30.5402 11.7826 30.7738 12.403 30.7736 13.0453V28.3688ZM47.6645 37.0143L38.1586 46.5367C38.1512 46.5445 38.1423 46.5506 38.1324 46.5548C38.1225 46.5589 38.1119 46.5609 38.1012 46.5607C38.0905 46.5609 38.0799 46.5588 38.07 46.5547C38.0602 46.5505 38.0512 46.5444 38.0438 46.5367L34.6656 43.1525C34.65 43.1368 34.6412 43.1156 34.6412 43.0935C34.6412 43.0714 34.65 43.0501 34.6656 43.0345L35.2095 42.4895L35.2099 42.4891L40.7283 36.9614L44.1717 33.5119C44.1792 33.5043 44.1881 33.4983 44.1979 33.4942C44.2077 33.4901 44.2182 33.488 44.2288 33.488C44.2395 33.488 44.25 33.4901 44.2598 33.4942C44.2696 33.4983 44.2785 33.5043 44.286 33.5119L47.6644 36.8961C47.6971 36.9288 47.6971 36.9816 47.6644 37.0142L47.6645 37.0143Z"
                          fill="white"
                        />
                        <path
                          d="M19.3622 3.14771C18.9398 3.14771 18.5961 3.49217 18.5961 3.91532C18.5961 4.33886 18.9398 4.68294 19.3623 4.68294C19.7851 4.68294 20.1288 4.33886 20.1288 3.91532C20.1288 3.49217 19.785 3.14771 19.3622 3.14771ZM44.4635 35.9521C44.0407 35.9521 43.697 36.2966 43.697 36.7197C43.697 37.1429 44.0407 37.4874 44.4635 37.4874C44.886 37.4874 45.2297 37.1429 45.2297 36.7197C45.2297 36.2966 44.886 35.9521 44.4635 35.9521ZM11.9915 43.2939C11.9915 42.8708 11.6478 42.5263 11.2255 42.5263C10.8027 42.5263 10.459 42.8708 10.459 43.2939C10.459 43.7171 10.8027 44.0615 11.2255 44.0615C11.6478 44.0615 11.9915 43.7171 11.9915 43.2939Z"
                          fill="white"
                        />
                      </svg>
                      <h4>Working Together</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          FRAME 5: PROMISE & COMMITMENT SECTION
      ======================================================== */}
      <section className="promise_sec">
        <div className="container">
          <div className="promise_sec_wrapper">
            <div className="row align-items-center">
              <div className="col-lg-5 hm-left mb-4 mb-lg-0">
                <div className="promise_sec_img">
                  <img src="/assets/uploads/2025/07/promise-img.png" alt="Our Promise" loading="lazy" />
                </div>
              </div>
              <div className="col-lg-7 hm-right">
                <div className="cmn_title">
                  <h6>Our Promise</h6>
                  <h2>Our Commitment</h2>
                  <p>
                    At Global Vessel Management LLC (GVM), we understand that our long-term success is directly tied
                    to the health of the planet and the wellbeing of our people. We are committed to delivering
                    exceptional vessel management services while promoting environmental stewardship and corporate
                    responsibility.
                  </p>

                  {/* Key Commitment Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                    <div className="flex items-center space-x-2 text-slate-700">
                      <i className="fa-solid fa-circle-check text-cyan-600 text-lg flex-shrink-0" />
                      <span className="font-medium text-sm">Uncompromising Safety &amp; Quality</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-700">
                      <i className="fa-solid fa-circle-check text-cyan-600 text-lg flex-shrink-0" />
                      <span className="font-medium text-sm">Absolute Operational Transparency</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-700">
                      <i className="fa-solid fa-circle-check text-cyan-600 text-lg flex-shrink-0" />
                      <span className="font-medium text-sm">Environmental &amp; Regulatory Compliance</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-700">
                      <i className="fa-solid fa-circle-check text-cyan-600 text-lg flex-shrink-0" />
                      <span className="font-medium text-sm">Peak Fleet Performance &amp; Uptime</span>
                    </div>
                  </div>

                  <div className="cmn_btnn mt-4">
                    <Link className="btnn btnn-blue" to="/our-commitment">
                      Know More <ArrowIcon />
                      <span />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          FRAME 6: CORPORATE SOCIAL RESPONSIBILITY
      ======================================================== */}
      <section className="about_sec reverse_about_sec">
        <div className="container">
          <div className="row align-items-center">
            {/* Right Image on Desktop (rendered via flex-row-reverse) */}
            <div className="col-lg-6 hm-right mb-5 mb-lg-0">
              <div className="ab_wrapper">
                <div className="about_img">
                  <img src="/assets/uploads/2025/07/Group-8-5.png" alt="Corporate Social Responsibility" loading="lazy" />
                  <div className="img_icon_bx">
                    <img src="/assets/uploads/2025/07/sm-icon-2.png" alt="CSR Icon" />
                    <h5>CSR through Local Training &amp; Employment</h5>
                  </div>
                  <em />
                </div>
              </div>
            </div>

            {/* Left Content */}
            <div className="col-lg-6 hm-left">
              <div className="about_text">
                <div className="cmn_title">
                  <h6>Making a Difference Locally &amp; Globally</h6>
                  <h2>Corporate Social Responsibility</h2>
                  <p>
                    At the heart of sustainable vessel management lies a strong commitment to Corporate Social
                    Responsibility. Investing in local training and employment programs not only strengthens the
                    maritime industry but also empowers the communities we serve. By equipping local talent with
                    specialized skills in ship operations, technical services, and port logistics, we help create
                    long-term employment opportunities and foster economic resilience.
                  </p>
                  <p>
                    These initiatives support national development goals, reduce reliance on foreign labor, and
                    ensure a pipeline of qualified professionals who uphold international standards. Through
                    partnerships with maritime academies, hands-on apprenticeships, and continuous professional
                    development, we are proud to contribute to a skilled and empowered local workforce anchoring
                    success for both industry and society.
                  </p>
                </div>

                <div className="cmn_btnn">
                  <Link className="btnn btnn-blue" to="/csr">
                    Know More <ArrowIcon />
                    <span />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
