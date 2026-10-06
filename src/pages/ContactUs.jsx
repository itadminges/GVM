import React, { useState, useEffect } from 'react'
import { useSubmissions } from '../context/SubmissionsContext'

export default function ContactUs() {
  const { addSubmission } = useSubmissions()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    document.title = 'Contact Us | Global Vessel Management'
    window.scrollTo(0, 0)
  }, [])

  const validate = () => {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Valid email is required'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    setTimeout(() => {
      addSubmission({
        fullName: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        service: 'Contact Us Enquiry',
        subject: 'General Enquiry',
        message: formData.message
      })
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
      })
    }, 600)
  }

  return (
    <div className="contact_page_wrapper bg-white">
      {/* BANNER FRAME */}
      <div
        className="banner inner_banner"
        style={{ backgroundImage: 'url(/assets/uploads/2025/07/contact-banner.png)' }}
      >
        <div className="container">
          <div className="banner_text">
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>

      {/* CONTACT FORM & INFO SECTION */}
      <div className="contact_form_wrapper" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="cmn_title" style={{ paddingBottom: '30px' }}>
            <h2>Make an Enquiry</h2>
          </div>
          <div className="row">
            {/* Left Column: Contact Details */}
            <div className="col-md-6 mb-5 mb-md-0">
              <div className="contact_info">
                <p style={{ fontSize: '16px', lineHeight: '26px', marginBottom: '30px' }}>
                  We welcome your enquiry. If you require any further information or assistance, please
                  contact us using the details below. Our team is committed to responding promptly and
                  professionally.
                </p>
                <ul className="foot_links">
                  <li style={{ marginBottom: '25px', display: 'flex', gap: '20px' }}>
                    <div className="ft_icon">
                      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.78153 13.2212C10.3527 13.9434 10.9814 14.6512 11.6651 15.3349C12.3487 16.0186 13.0566 16.6473 13.7788 17.2184C15.1677 18.3169 17.1355 18.2025 18.3876 16.9503L18.8102 16.5277C20.0572 15.2807 22.0978 15.2807 23.3449 16.5277L25.0271 18.2099C28.0644 21.2472 23.1958 25.3424 21.2517 25.6366C17.4065 26.9051 11.5801 24.803 6.88858 20.1115C2.19704 15.42 0.0949147 9.59355 1.36343 5.74832C1.65752 3.80424 5.7528 -1.06433 8.79019 1.97301L10.4723 3.65517C11.7194 4.90221 11.7194 6.94282 10.4723 8.18981L10.0497 8.61248C8.79756 9.86455 8.68303 11.8323 9.78153 13.2212Z"
                          stroke="#1E1E1E"
                          strokeWidth="1.5"
                          strokeMiterlimit="22.926"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.6758 5.50373C17.854 5.74638 18.9361 6.32665 19.7902 7.17378C20.6443 8.02091 21.2334 9.09828 21.4856 10.2745"
                          stroke="#1E1E1E"
                          strokeWidth="1.5"
                          strokeMiterlimit="22.926"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5586 2.3476C16.6511 1.72172 19.8515 2.68671 22.0826 4.91783C24.31 7.14527 25.2758 10.3393 24.6556 13.4277"
                          stroke="#1E1E1E"
                          strokeWidth="1.5"
                          strokeMiterlimit="22.926"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="ft_text" style={{ color: '#1E1E1E' }}>
                      <em style={{ display: 'block', fontStyle: 'normal', color: '#64748b' }}>Phone Number</em>
                      <a href="tel:+96871770077" style={{ color: '#1E1E1E', fontWeight: 600 }}>
                        +968 71770077
                      </a>
                    </div>
                  </li>

                  <li style={{ marginBottom: '25px', display: 'flex', gap: '20px' }}>
                    <div className="ft_icon">
                      <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.6292 17.732H3.41002C2.86739 17.732 2.34697 17.5164 1.96327 17.1327C1.57957 16.749 1.36401 16.2286 1.36401 15.686V3.4099C1.36401 2.86726 1.57957 2.34685 1.96327 1.96315C2.34697 1.57945 2.86739 1.36389 3.41002 1.36389H21.8241C22.3668 1.36389 22.8872 1.57945 23.2709 1.96315C23.6546 2.34685 23.8702 2.86726 23.8702 3.4099V7.47601C23.8702 7.65689 23.942 7.83036 24.0699 7.95826C24.1978 8.08616 24.3713 8.15801 24.5522 8.15801C24.733 8.15801 24.9065 8.08616 25.0344 7.95826C25.1623 7.83036 25.2342 7.65689 25.2342 7.47601V3.4099C25.2331 2.50584 24.8735 1.63911 24.2342 0.999846C23.5949 0.360578 22.7282 0.000960856 21.8241 -0.00012207H3.41002C2.50596 0.000960856 1.63924 0.360578 0.999968 0.999846C0.3607 1.63911 0.00108293 2.50584 0 3.4099V15.686C0.00108293 16.59 0.3607 17.4568 0.999968 18.096C1.63924 18.7353 2.50596 19.0949 3.41002 19.096H13.6292C13.8101 19.096 13.9835 19.0241 14.1114 18.8962C14.2393 18.7683 14.3112 18.5949 14.3112 18.414C14.3112 18.2331 14.2393 18.0596 14.1114 17.9317C13.9835 17.8038 13.8101 17.732 13.6292 17.732Z"
                          fill="#1E1E1E"
                        />
                        <path
                          d="M27.7617 11.5571C26.7037 10.6522 25.4147 10.0597 24.0391 9.84562C22.6635 9.63159 21.2554 9.80456 19.9725 10.3452C19.4684 10.5529 18.9905 10.8191 18.5485 11.1383L16.6818 9.2751L21.625 4.33194C21.7492 4.20331 21.818 4.03103 21.8164 3.85221C21.8149 3.67339 21.7432 3.50234 21.6167 3.37589C21.4903 3.24944 21.3192 3.17771 21.1404 3.17616C20.9616 3.17461 20.7893 3.24335 20.6607 3.36758L12.6178 11.4098L4.57491 3.3669C4.51199 3.30176 4.43674 3.2498 4.35353 3.21406C4.27032 3.17832 4.18083 3.1595 4.09027 3.15872C3.99972 3.15793 3.90991 3.17519 3.8261 3.20948C3.74228 3.24377 3.66613 3.29441 3.6021 3.35845C3.53806 3.42248 3.48742 3.49863 3.45313 3.58244C3.41884 3.66626 3.40158 3.75607 3.40237 3.84662C3.40316 3.93718 3.42197 4.02667 3.45771 4.10988C3.49346 4.19309 3.54541 4.26834 3.61055 4.33125L8.55304 9.2751L3.61055 14.2176C3.54541 14.2805 3.49346 14.3558 3.45771 14.439C3.42197 14.5222 3.40316 14.6117 3.40237 14.7022C3.40158 14.7928 3.41884 14.8826 3.45313 14.9664C3.48742 15.0502 3.53806 15.1264 3.6021 15.1904C3.66613 15.2544 3.74228 15.3051 3.8261 15.3394C3.90991 15.3737 3.99972 15.3909 4.09027 15.3901C4.18083 15.3893 4.27032 15.3705 4.35353 15.3348C4.43674 15.299 4.51199 15.2471 4.57491 15.1819L9.51739 10.2388L12.1356 12.8563C12.2635 12.9842 12.4369 13.056 12.6178 13.056C12.7986 13.056 12.9721 12.9842 13.1 12.8563L15.7175 10.2388L17.5173 12.04C16.6141 13.0379 15.9976 14.2616 15.733 15.5813C15.4684 16.901 15.5655 18.2677 16.0142 19.5368C16.4628 20.8058 17.2462 21.9299 18.2815 22.7901C19.3168 23.6503 20.5654 24.2145 21.8951 24.4231C22.2344 24.4661 22.5761 24.4866 22.9181 24.4845C23.743 24.4899 24.5641 24.3722 25.3542 24.1353C25.4397 24.1084 25.5191 24.065 25.5878 24.0074C25.6565 23.9499 25.7131 23.8794 25.7546 23.8C25.796 23.7205 25.8214 23.6337 25.8293 23.5444C25.8372 23.4552 25.8275 23.3652 25.8006 23.2797C25.7737 23.1942 25.7303 23.1149 25.6727 23.0462C25.6152 22.9775 25.5447 22.9208 25.4652 22.8793C25.3858 22.8379 25.299 22.8125 25.2097 22.8046C25.1204 22.7967 25.0305 22.8065 24.945 22.8334C24.0227 23.0984 23.0576 23.1806 22.1038 23.0755C20.7771 22.8987 19.5494 22.278 18.6206 21.3144C17.6918 20.3507 17.1166 19.101 16.9887 17.7688C16.8171 16.5012 17.0657 15.2123 17.6965 14.0995C18.3273 12.9867 19.3055 12.1113 20.4813 11.6076C21.5283 11.1625 22.6786 11.0176 23.8033 11.189C24.928 11.3604 25.9829 11.8413 26.8498 12.5781C27.6243 13.2717 28.1807 14.1752 28.4515 15.179C28.7223 16.1827 28.6959 17.2435 28.3755 18.2326C28.0556 19.392 27.3661 20.0194 26.5341 19.9048C26.2547 19.882 25.9921 19.7624 25.7916 19.5665C25.5911 19.3706 25.4653 19.1108 25.4361 18.832C25.436 18.7927 25.4328 18.7535 25.4265 18.7147C25.4312 18.6818 25.4335 18.6485 25.4333 18.6152V14.401C25.4332 14.2415 25.3772 14.0871 25.275 13.9646C25.1729 13.8421 25.031 13.7593 24.8741 13.7306C24.7766 13.7115 22.4427 13.3051 20.8973 14.5934C20.4601 14.9853 20.1178 15.4716 19.8961 16.0153C19.6745 16.559 19.5793 17.1461 19.6179 17.732C19.5945 18.163 19.6715 18.5937 19.8429 18.9899C20.0142 19.3861 20.2753 19.7372 20.6054 20.0153C21.1861 20.4578 21.9005 20.6888 22.6303 20.67C23.2949 20.6745 23.9494 20.5072 24.5304 20.1844C24.7476 20.4764 25.0215 20.7215 25.3357 20.9051C25.6499 21.0887 25.9978 21.2071 26.3588 21.2531C27.5182 21.4093 29.0868 20.8078 29.6972 18.5933C30.08 17.3581 30.1011 16.0391 29.7581 14.7922C29.4151 13.5454 28.7224 12.4228 27.7617 11.5571ZM24.0789 18.8143C23.8189 19.0326 23.5116 19.1873 23.1814 19.266C22.8512 19.3448 22.5072 19.3454 22.1768 19.2678C21.8152 19.2213 21.4867 19.0338 21.2629 18.7461C21.0391 18.4584 20.938 18.0938 20.9819 17.732C20.9496 17.3465 21.004 16.9587 21.1412 16.5969C21.2783 16.2352 21.4946 15.9088 21.7744 15.6416C22.3881 15.2 23.1334 14.9794 23.8886 15.0155H24.0761V18.6186C24.0886 18.6843 24.0897 18.7516 24.0795 18.8177L24.0789 18.8143Z"
                          fill="#1E1E1E"
                        />
                      </svg>
                    </div>
                    <div className="ft_text" style={{ color: '#1E1E1E' }}>
                      <em style={{ display: 'block', fontStyle: 'normal', color: '#64748b' }}>Email Address</em>
                      <a href="mailto:Info@gvm.om" style={{ color: '#1E1E1E', fontWeight: 600 }}>
                        Info@gvm.om
                      </a>
                    </div>
                  </li>

                  <li style={{ marginBottom: '25px', display: 'flex', gap: '20px' }}>
                    <div className="ft_icon">
                      <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M21.5737 25.2761C21.9504 24.9021 30.4166 16.4014 30.4166 9.33225C30.4166 6.85715 29.4334 4.48343 27.6832 2.73327C25.9331 0.983108 23.5594 -0.00012207 21.0843 -0.00012207C18.6092 -0.00012207 16.2354 0.983108 14.4853 2.73327C12.7351 4.48343 11.7519 6.85715 11.7519 9.33225C11.7519 14.9497 17.0948 21.4699 19.4805 24.0968H12.4432V18.5665C12.4432 18.3831 12.3703 18.2073 12.2407 18.0777C12.1111 17.948 11.9352 17.8752 11.7519 17.8752H6.91287C6.72953 17.8752 6.5537 17.948 6.42406 18.0777C6.29441 18.2073 6.22158 18.3831 6.22158 18.5665V24.0968H2.76515V15.1004C2.78174 15.1004 2.79556 15.11 2.81216 15.11H8.98673C9.17007 15.11 9.3459 15.0372 9.47554 14.9076C9.60519 14.7779 9.67802 14.6021 9.67802 14.4187V6.1233C9.67802 5.93996 9.60519 5.76413 9.47554 5.63448C9.3459 5.50484 9.17007 5.43201 8.98673 5.43201H2.81216C2.79556 5.43201 2.78174 5.44031 2.76515 5.44169V4.04944C2.76515 3.49942 2.98364 2.97192 3.37257 2.583C3.76149 2.19407 4.28899 1.97558 4.83901 1.97558H13.1345C13.3178 1.97558 13.4936 1.90274 13.6233 1.7731C13.7529 1.64346 13.8257 1.46763 13.8257 1.28429C13.8257 1.10095 13.7529 0.925117 13.6233 0.795475C13.4936 0.665834 13.3178 0.593002 13.1345 0.593002H4.83901C3.92264 0.5941 3.04412 0.958611 2.39615 1.60658C1.74818 2.25455 1.38367 3.13307 1.38257 4.04944V24.0968H0.691287C0.507946 24.0968 0.332115 24.1696 0.202473 24.2992C0.0728318 24.4289 0 24.6047 0 24.788C0 24.9714 0.0728318 25.1472 0.202473 25.2769C0.332115 25.4065 0.507946 25.4793 0.691287 25.4793H21.0843C21.2587 25.4795 21.4264 25.4121 21.5523 25.2913C21.5578 25.2858 21.5661 25.2837 21.5716 25.2782L21.5737 25.2761ZM2.81216 13.7275C2.79556 13.7275 2.78174 13.7358 2.76515 13.7371V10.9623H8.21111C8.23962 10.9587 8.26781 10.9529 8.29544 10.945V13.7275H2.81216ZM2.81216 6.81459H8.29544V9.59702C8.26781 9.58914 8.23962 9.58336 8.21111 9.57973H2.76515V6.80491C2.78174 6.80629 2.79556 6.81459 2.81216 6.81459ZM21.0843 1.42877C23.1858 1.42509 25.203 2.25512 26.6933 3.73678C28.1836 5.21844 29.0255 7.23074 29.0341 9.33225C29.0341 14.9109 22.8816 21.875 21.0843 23.7912C19.2869 21.8757 13.1345 14.9158 13.1345 9.33225C13.1431 7.23074 13.9849 5.21844 15.4752 3.73678C16.9655 2.25512 18.9827 1.42509 21.0843 1.42877ZM7.60416 19.2578H11.0606V24.0968H7.60416V19.2578Z"
                          fill="#1E1E1E"
                        />
                      </svg>
                    </div>
                    <div className="ft_text" style={{ color: '#1E1E1E' }}>
                      <em style={{ display: 'block', fontStyle: 'normal', color: '#64748b' }}>Office Address</em>
                      <span style={{ fontWeight: 600 }}>Muscat, Sultanate of Oman</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="col-md-6">
              {isSubmitted ? (
                <div
                  className="p-5 text-center"
                  style={{
                    backgroundColor: '#F0FDF4',
                    border: '1px solid #BBF7D0',
                    borderRadius: '8px',
                    padding: '40px 20px',
                  }}
                >
                  <h4 style={{ color: '#166534', marginBottom: '10px' }}>Enquiry Transmitted!</h4>
                  <p style={{ color: '#15803D', marginBottom: '20px' }}>
                    Thank you. Your message has been recorded and our team will get in touch shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="btnn btnn-blue"
                    style={{ border: 'none', cursor: 'pointer', padding: '10px 30px' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="input_wrapper" style={{ marginBottom: '20px' }}>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First Name *"
                          className="inp"
                          style={{
                            width: '100%',
                            padding: '12px 15px',
                            border: errors.firstName ? '1px solid #ef4444' : '1px solid #DEDEDE',
                            borderRadius: '4px',
                            outline: 'none',
                          }}
                        />
                        {errors.firstName && <span style={{ color: '#ef4444', fontSize: '12px' }}>{errors.firstName}</span>}
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="input_wrapper" style={{ marginBottom: '20px' }}>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Last Name *"
                          className="inp"
                          style={{
                            width: '100%',
                            padding: '12px 15px',
                            border: errors.lastName ? '1px solid #ef4444' : '1px solid #DEDEDE',
                            borderRadius: '4px',
                            outline: 'none',
                          }}
                        />
                        {errors.lastName && <span style={{ color: '#ef4444', fontSize: '12px' }}>{errors.lastName}</span>}
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="input_wrapper" style={{ marginBottom: '20px' }}>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number *"
                          className="inp"
                          style={{
                            width: '100%',
                            padding: '12px 15px',
                            border: errors.phone ? '1px solid #ef4444' : '1px solid #DEDEDE',
                            borderRadius: '4px',
                            outline: 'none',
                          }}
                        />
                        {errors.phone && <span style={{ color: '#ef4444', fontSize: '12px' }}>{errors.phone}</span>}
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="input_wrapper" style={{ marginBottom: '20px' }}>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address *"
                          className="inp"
                          style={{
                            width: '100%',
                            padding: '12px 15px',
                            border: errors.email ? '1px solid #ef4444' : '1px solid #DEDEDE',
                            borderRadius: '4px',
                            outline: 'none',
                          }}
                        />
                        {errors.email && <span style={{ color: '#ef4444', fontSize: '12px' }}>{errors.email}</span>}
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="input_wrapper" style={{ marginBottom: '25px' }}>
                        <textarea
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Your Message *"
                          style={{
                            width: '100%',
                            padding: '12px 15px',
                            border: errors.message ? '1px solid #ef4444' : '1px solid #DEDEDE',
                            borderRadius: '4px',
                            outline: 'none',
                          }}
                        />
                        {errors.message && <span style={{ color: '#ef4444', fontSize: '12px' }}>{errors.message}</span>}
                      </div>
                    </div>

                    <div className="col-12 text-center text-md-end">
                      <div className="con-btn">
                        <input
                          type="submit"
                          value={isSubmitting ? 'Submitting...' : 'Submit'}
                          disabled={isSubmitting}
                          style={{ cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                        />
                        <em />
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
