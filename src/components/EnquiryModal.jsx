import React, { useState, useEffect } from 'react'
import { useSubmissions } from '../context/SubmissionsContext'
import { X, Send, CheckCircle2, Ship } from 'lucide-react'

export default function EnquiryModal() {
  const { isEnquiryModalOpen, closeEnquiryModal, enquiryInitialService, addSubmission } = useSubmissions()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (isEnquiryModalOpen) {
      setFormData((prev) => ({
        ...prev,
        service: enquiryInitialService || 'Ship Management - Tankers'
      }))
      setIsSubmitted(false)
      setErrors({})
    }
  }, [isEnquiryModalOpen, enquiryInitialService])

  if (!isEnquiryModalOpen) return null

  const servicesList = [
    'Ship Management - Tankers',
    'Ship Management - Bulk Carriers',
    'Ship Management - Container Vessels',
    'Ship Management - Leisure',
    'Ship Management - Offshore',
    'Ship Management - LNG',
    'New Building Supervision',
    'Lay-up Management',
    'Crew Management',
    'Technology and Innovation',
    'Insurance and Procurement',
    'Environmental Solutions & Decarbonization',
    'Other Maritime Enquiry'
  ]

  const validate = () => {
    const errs = {}
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required'
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address'
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required'
    if (!formData.message.trim()) errs.message = 'Please provide enquiry details'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      addSubmission({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        source: 'Global Enquiry Modal'
      })
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: 'Ship Management - Tankers',
        message: ''
      })
    }, 500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeEnquiryModal}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#003366]/10 border border-[#003366]/20 flex items-center justify-center text-[#003366]">
            <Ship className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-heading text-[#003366]">Make an Enquiry</h3>
            <p className="text-xs text-slate-500">Directly contact GVM Maritime Management</p>
          </div>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-2 font-heading">Enquiry Submitted!</h4>
            <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
              Thank you for reaching out to Global Vessel Management. Our operations and chartering specialists will review your requirements and respond shortly.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                onClick={closeEnquiryModal}
                className="px-6 py-2.5 bg-[#003366] hover:bg-[#002244] text-white font-semibold rounded-lg shadow-md text-sm transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Capt. John Doe"
                className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 border ${
                  errors.fullName ? 'border-red-500' : 'border-slate-300'
                } text-slate-900 focus:outline-none focus:border-[#003366] focus:bg-white text-sm`}
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 border ${
                    errors.email ? 'border-red-500' : 'border-slate-300'
                  } text-slate-900 focus:outline-none focus:border-[#003366] focus:bg-white text-sm`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+968 9000 0000"
                  className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 border ${
                    errors.phone ? 'border-red-500' : 'border-slate-300'
                  } text-slate-900 focus:outline-none focus:border-[#003366] focus:bg-white text-sm`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1">
                Selected Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#003366] focus:bg-white text-sm"
              >
                {servicesList.map((svc) => (
                  <option key={svc} value={svc} className="text-slate-900">
                    {svc}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1">
                Enquiry Details *
              </label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Please describe your vessel specs, operational schedule, or technical management requirements..."
                className={`w-full px-4 py-2 rounded-lg bg-slate-50 border ${
                  errors.message ? 'border-red-500' : 'border-slate-300'
                } text-slate-900 focus:outline-none focus:border-[#003366] focus:bg-white text-sm`}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#003366] hover:bg-[#002244] text-white font-bold rounded-lg shadow-md flex items-center justify-center space-x-2 transition-all cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Submitting Enquiry...</span>
              ) : (
                <>
                  <span>Transmit Enquiry</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
