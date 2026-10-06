import React, { useEffect } from 'react'

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Global Vessel Management'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="privacy-page-wrapper">
      {/* banner start */}
      <div 
        className="banner inner_banner" 
        style={{ backgroundImage: 'url(/assets/uploads/2025/07/video-poster.png)' }}
      >
        <div className="container">
          <div className="banner_text">
            <h1>Privacy Policy</h1>
          </div>
        </div>
      </div>
      {/* banner end */}

      <div className="privacy-sec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="wp-block-heading">Privacy Policy</h2>
              <p>&nbsp;</p>
              <h3 className="text-left">Privacy Statement</h3>
              <p className="text-left">
                This Privacy Policy discloses the privacy practices for www.gvm.com, the main Global Education Services Company (GVM®) website. Please note that GVM®, and other GVM®activities and affiliates have separate privacy policies. By using this website, you are consenting to our collection and use of information in accordance with this Privacy Policy.
              </p>
              <p>&nbsp;</p>
              <h3 className="text-left">What information do we gather about you?</h3>
              <p className="text-left">
                We and our third-party vendors collect certain information regarding your use of www.gvm.com, such as your IP address and browser type. Your session and the pages you visit on www.gvm.com will be tracked, but you will remain anonymous. We may use your IP address to identify the general geographic area from which you are accessing www.gvm.com We connect data from different systems but do not link IP addresses to any personal information. We may also collect other information as described in this policy.
              </p>
              <p>&nbsp;</p>
              <h3 className="text-left">What do we use your information for?</h3>
              <p className="text-left">
                We use the information we gather from you for systems administration purposes, abuse prevention, and to track user trends, and for the other purposes described in this policy. If you send us an email, the email address you provide may be used to send you information, respond to inquiries, and/or other requests or questions. We will not share, sell, rent, swap, or authorize any third party to use your email address for commercial purposes without your permission.<br />
                User information may be shared with third-party vendors to the extent necessary to provide and improve web services or other communications to users. For example, we use third parties such as Google Analytics to generate reports on site usage, web traffic, user behavior, and user interests in order to optimize our website for our visitors. We also use geographic, demographic, and interest-based reports of our website visitors to create custom audience lists. We prohibit any third parties who receive user information for this purpose from using or sharing user information for any purpose other than providing services for the benefit of our users.<br />
                We may also provide your information to third parties in circumstances where we believe that doing so is necessary or appropriate to satisfy any applicable law, regulation, legal process or governmental request; detect, prevent or otherwise address fraud, security, or technical issues; or protect our rights and safety and the rights and safety of our users or others.
              </p>
              <p>&nbsp;</p>
              <h3 className="text-left">How is this information collected and how can you opt out?</h3>
              <p className="text-left">
                Google and other third parties may use cookies, web beacons, and similar technologies to collect or receive information from this website and elsewhere on the internet and use that information to provide measurement services and target ads. For more information on Google Analytics, consult their terms of use, privacy practices, and ads settings. You can opt out of the collection and use of this information through tools like the Network Advertising Initiative opt-out page.
              </p>
              <p>&nbsp;</p>
              <h3 className="text-left">Cookies</h3>
              <p className="text-left">
                Cookies are small files that are stored on your computer (unless you block them). We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. You may disable cookies through your individual browser options or you can opt out of the collection and use of this information through tools like the Network Advertising Initiative opt-out page.
              </p>
              <p>&nbsp;</p>
              <h3 className="text-left">Other Websites and Cookies</h3>
              <p className="text-left">
                This website may contain links to other websites. We are not responsible for the privacy practices or the content of such websites.<br />
                Cookies may be set by parties other than us. These “third-party cookies” may, for example, originate from websites such as YouTube, Twitter, Facebook, Soundcloud, or other social media services for which www.gvm.com has implemented “plug-ins.” Since the cookie policies of these sites change over time, you should determine their policies by visiting the privacy policy pages of these sites directly.
              </p>
              <p>&nbsp;</p>
              <h3 className="text-left">Information Protection</h3>
              <p className="text-left">
                This site has reasonable security measures in place to help protect against the loss, misuse, and alteration of the information under our control. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>
              <p>&nbsp;</p>
              <h3 className="text-left">Changes to this Policy</h3>
              <p className="text-left">
                This Privacy Policy may be amended from time to time. Any such changes will be posted on this page.
              </p>
              <p>&nbsp;</p>
              <h3 className="text-left">Effective Date</h3>
              <p className="text-left">The effective date of this policy is January 1st, 2025.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
