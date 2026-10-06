import React, { useEffect } from 'react'

export default function TermsConditions() {
  useEffect(() => {
    document.title = 'Terms & Conditions | Global Vessel Management'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="terms-page-wrapper">
      {/* banner start */}
      <div 
        className="banner inner_banner" 
        style={{ backgroundImage: 'url(/assets/uploads/2025/07/about-banner.png)' }}
      >
        <div className="container">
          <div className="banner_text">
            <h1>Terms &amp; Conditions</h1>
          </div>
        </div>
      </div>
      {/* banner end */}

      <div className="privacy-sec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Terms &amp; Conditions</h2>
              <p>&nbsp;</p>
              <p>
                Welcome to our website www.gvm.om. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern GVM®’s relationship with you in relation to this website.
              </p>
              <p>
                If you disagree with any part of these terms and conditions, please do not use our website.
              </p>
              <p>
                The term GVM®’ or ‘us’ or ‘we’ refer to GVM®, its affiliates, subsidiaries, and network companies around the world. The term ‘you’ refers to the user or viewer of our website. The use of this website is subject to the following terms of use:
              </p>
              <p>
                The content of the pages of this website is for your general information and use only. It is subject to change without notice.
              </p>
              <p>
                Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
              </p>
              <p>
                Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
              </p>
              <p>
                This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
              </p>
              <p>
                All trademarks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.
              </p>
              <p>
                Access to and use of this website is subject to all applicable laws and regulations. You agree to abide by these laws and regulations and not use this website in any way that violates such laws or regulations. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.
              </p>
              <p>
                From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website (s).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
