import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ServicesIndex() {
  useEffect(() => {
    document.title = 'Services | Global Vessel Management'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="services-page-wrapper">
      {/* banner start */}
      <div 
        className="banner inner_banner" 
        style={{ backgroundImage: 'url(/assets/uploads/2025/07/service-banner-1.png)' }}
      >
        <div className="container">
          <div className="banner_text">
            <h1>Services</h1>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* Main Services Section matching raw_html/services.html */}
      <div className="inner_service_sec">
        <div className="container">
          <div className="cmn_title">
            <h6>What We Offer</h6>
            <h2>Our Services</h2>
          </div>
          <div className="row">
            {/* Box 1: Ship Management */}
            <div className="col-lg-4 col-sm-6">
              <div className="service_bx">
                <div className="service_bx_img">
                  <img 
                    src="/assets/uploads/2025/07/service1.png" 
                    alt="Ship Management" 
                    loading="lazy" 
                  />
                </div>
                <div className="service_bx_text">
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <g clipPath="url(#clip0_188_104)">
                      <path d="M12.9103 26.6874V32.7831H21.7589V26.6874" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12.9103 29.7347H21.7589" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.74707 26.6873L9.67389 32.783H12.9102V26.6873H7.74707Z" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M26.9224 26.6873L24.9956 32.783H21.7593V26.6873H26.9224Z" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M33.6841 23.6396L32.8457 26.6874H1.82324L0.984863 23.6396H33.6841Z" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M30.7329 11.4503L28.8062 17.546H5.86279L3.93597 11.4503H30.7329Z" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M32.8458 17.5459H1.82324V23.6416H32.8458V17.5459Z" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22.0622 6.87793H12.6074V11.4497H22.0622V6.87793Z" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19.0142 2.30664H15.6548V6.87844H19.0142V2.30664Z" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_188_104">
                        <rect width="33.8542" height="33.8542" fill="white" transform="translate(0.407227 0.782715)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h4><Link to="/service/ship-management">Ship Management</Link></h4>
                  <div className="service_bx_link">
                    <Link to="/service/ship-management" aria-label="Explore Ship Management">
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2: Crew Management */}
            <div className="col-lg-4 col-sm-6">
              <div className="service_bx">
                <div className="service_bx_img">
                  <img 
                    src="/assets/uploads/2025/07/service2.png" 
                    alt="Crew Management" 
                    loading="lazy" 
                  />
                </div>
                <div className="service_bx_text">
                  <svg width="39" height="45" viewBox="0 0 39 45" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M28.0645 10.334C28.0645 15.0487 24.2384 18.874 19.5246 18.874C14.8099 18.874 10.9846 15.0487 10.9846 10.334C10.9846 5.62013 14.8099 1.79401 19.5246 1.79401C24.2384 1.79401 28.0645 5.62013 28.0645 10.334Z" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.5246 22.0156C11.5178 22.0156 5.01172 28.5208 5.01172 36.5285V43.2057H34.0375V36.5285C34.0375 28.5208 27.5314 22.0156 19.5246 22.0156Z" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M30.6272 5.21045C33.456 6.36866 34.8967 9.54477 33.8443 12.3087C33.2774 13.7975 32.1158 14.9582 30.6272 15.526" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M34.0371 23.0137C36.671 24.0886 38.6473 26.4173 39.4678 29.2787C39.8452 30.596 40.0245 31.9616 39.9998 33.3323V38.0772H34.0371" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.42171 5.21045C5.59292 6.36866 4.15223 9.54477 5.2046 12.3087C5.7715 13.7975 6.93311 14.9582 8.42171 15.526" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.01172 23.0137C2.3778 24.0886 0.401494 26.4173 -0.418967 29.2787C-0.796434 30.596 -0.975736 31.9616 -0.951016 33.3323V38.0772H5.01172" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h4><Link to="/service/crew-management">Crew Management</Link></h4>
                  <div className="service_bx_link">
                    <Link to="/service/crew-management" aria-label="Explore Crew Management">
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 3: Lay up Management */}
            <div className="col-lg-4 col-sm-6">
              <div className="service_bx">
                <div className="service_bx_img">
                  <img 
                    src="/assets/uploads/2025/07/service3.png" 
                    alt="Lay up Management" 
                    loading="lazy" 
                  />
                </div>
                <div className="service_bx_text">
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M17.4998 2.05176C12.3458 2.05176 8.16797 6.22959 8.16797 11.3836C8.16797 18.0694 16.5492 26.1557 16.9056 26.4988C17.0722 26.6588 17.2917 26.7518 17.4998 26.7518C17.708 26.7518 17.9275 26.6588 18.0941 26.4988C18.4505 26.1557 26.8317 18.0694 26.8317 11.3836C26.8317 6.22959 22.6539 2.05176 17.4998 2.05176ZM17.4998 14.6756C15.6841 14.6756 14.2078 13.1993 14.2078 11.3836C14.2078 9.56788 15.6841 8.09159 17.4998 8.09159C19.3156 8.09159 20.7919 9.56788 20.7919 11.3836C20.7919 13.1993 19.3156 14.6756 17.4998 14.6756Z" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.9103 26.6874V32.7831H21.7589V26.6874" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.9103 29.7347H21.7589" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.74707 26.6873L9.67389 32.783H12.9102V26.6873H7.74707Z" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M26.9224 26.6873L24.9956 32.783H21.7593V26.6873H26.9224Z" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h4><Link to="/service/lay-up-management">Lay up Management</Link></h4>
                  <div className="service_bx_link">
                    <Link to="/service/lay-up-management" aria-label="Explore Lay up Management">
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 4: New building Supervision */}
            <div className="col-lg-4 col-sm-6">
              <div className="service_bx">
                <div className="service_bx_img">
                  <img 
                    src="/assets/uploads/2025/07/service4.png" 
                    alt="New building Supervision" 
                    loading="lazy" 
                  />
                </div>
                <div className="service_bx_text">
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M28.0645 10.334C28.0645 15.0487 24.2384 18.874 19.5246 18.874C14.8099 18.874 10.9846 15.0487 10.9846 10.334C10.9846 5.62013 14.8099 1.79401 19.5246 1.79401C24.2384 1.79401 28.0645 5.62013 28.0645 10.334Z" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.5246 22.0156C11.5178 22.0156 5.01172 28.5208 5.01172 36.5285V43.2057H34.0375V36.5285C34.0375 28.5208 27.5314 22.0156 19.5246 22.0156Z" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.74707 26.6873L9.67389 32.783H12.9102V26.6873H7.74707Z" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h4><Link to="/service/new-building-supervision">New building Supervision</Link></h4>
                  <div className="service_bx_link">
                    <Link to="/service/new-building-supervision" aria-label="Explore New building Supervision">
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 5: Technology and Innovation */}
            <div className="col-lg-4 col-sm-6">
              <div className="service_bx">
                <div className="service_bx_img">
                  <img 
                    src="/assets/uploads/2025/07/service5.png" 
                    alt="Technology and Innovation" 
                    loading="lazy" 
                  />
                </div>
                <div className="service_bx_text">
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <g>
                      <path d="M17.4998 2.05176C12.3458 2.05176 8.16797 6.22959 8.16797 11.3836C8.16797 18.0694 16.5492 26.1557 16.9056 26.4988C17.0722 26.6588 17.2917 26.7518 17.4998 26.7518C17.708 26.7518 17.9275 26.6588 18.0941 26.4988C18.4505 26.1557 26.8317 18.0694 26.8317 11.3836C26.8317 6.22959 22.6539 2.05176 17.4998 2.05176Z" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17.5 3.49817V0.491177" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M29.8389 15.837H32.8459" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2.1543 15.837H5.16136" stroke="#003366" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                  <h4><Link to="/service/technology-and-innovation">Technology and Innovation</Link></h4>
                  <div className="service_bx_link">
                    <Link to="/service/technology-and-innovation" aria-label="Explore Technology and Innovation">
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 6: Insurance and Procurement */}
            <div className="col-lg-4 col-sm-6">
              <div className="service_bx">
                <div className="service_bx_img">
                  <img 
                    src="/assets/uploads/2025/07/service6.png" 
                    alt="Insurance and Procurement" 
                    loading="lazy" 
                  />
                </div>
                <div className="service_bx_text">
                  <svg width="29" height="33" viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M28.5 5.30003C28.4977 5.15611 28.4511 5.01638 28.3666 4.89989C28.282 4.78339 28.1636 4.6958 28.0275 4.64903L14.7275 0.0990326C14.5804 0.0464162 14.4196 0.0464162 14.2725 0.0990326L0.972487 4.64903C0.836351 4.6958 0.717941 4.78339 0.633389 4.89989C0.548838 5.01638 0.502255 5.15611 0.499987 5.30003L0.464986 7.36503C0.359986 13.7245 0.874487 18.2885 2.04349 21.323C2.91999 23.6079 4.24175 25.6958 5.93199 27.4655C7.95396 29.5219 10.35 31.1731 12.9915 32.3305L14.2095 32.887C14.3007 32.9286 14.3998 32.9502 14.5 32.9502C14.6002 32.9502 14.6993 32.9286 14.7905 32.887L16.0085 32.3305C18.6499 31.1731 21.046 29.5219 23.068 27.4655C24.7599 25.6951 26.0828 23.6059 26.96 21.3195C28.129 18.285 28.6435 13.721 28.5385 7.36153L28.5 5.30003Z" fill="#003366" />
                  </svg>
                  <h4><Link to="/service/insurance-and-procurement">Insurance and Procurement</Link></h4>
                  <div className="service_bx_link">
                    <Link to="/service/insurance-and-procurement" aria-label="Explore Insurance and Procurement">
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
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
