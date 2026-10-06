import React, { useEffect } from 'react'

export default function CookiesPolicy() {
  useEffect(() => {
    document.title = 'Cookies Policy | Global Vessel Management'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="cookies-page-wrapper">
      {/* banner start */}
      <div 
        className="banner inner_banner" 
        style={{ backgroundImage: 'url(/assets/uploads/2025/07/promise-img.png)' }}
      >
        <div className="container">
          <div className="banner_text">
            <h1>Cookies Policy</h1>
          </div>
        </div>
      </div>
      {/* banner end */}

      <div className="privacy-sec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Cookies Policy</h2>
              <p>&nbsp;</p>
              <p>
                Our website uses cookies. A cookie is a small file of letters and numbers that we put on your computer if you agree. Most browsers allow you to control cookies, including whether or not to accept them and how to remove them.<br />
                The cookies we use are analytical tools that allow us to collect anonymous information about how you use our website and the pages you viewed. They also help us provide you with a good experience when you browse our website and allows us to improve the site. These third – party cookies come from Google Analytics.<br />
                Some cookies are necessary for the operation of our website, so if you choose to block them, some aspects of the site may not work for you.<br />
                If you want to delete or disable cookies, you can visit{' '}
                <a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer">
                  www.aboutcookies.org
                </a>{' '}
                for more information on how to manage and remove cookies by adjusting the settings on your browser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
