import React, { createContext, useContext, useState, useEffect } from 'react'

const SubmissionsContext = createContext(null)

const INITIAL_SUBMISSIONS = [
  {
    id: 'SUB-1001',
    fullName: 'Capt. Salim Al-Harthy',
    email: 'salim.alharthy@omanship.om',
    phone: '+968 9123 4567',
    subject: 'Fleet Technical Management Inquiry',
    service: 'Ship Management - Tankers',
    message: 'We are seeking full technical management and ISM compliance audit support for 3 product tankers operating in the Arabian Sea.',
    date: '2026-09-28 14:32',
    status: 'Pending Review',
    priority: 'High'
  },
  {
    id: 'SUB-1002',
    fullName: 'Elena Rostova',
    email: 'e.rostova@maritime-logistics.com',
    phone: '+971 50 123 4567',
    subject: 'Crew Management Requirements',
    service: 'Crew Management',
    message: 'Looking for qualified STCW certified officers and engineers for bulk carriers on long term contracts.',
    date: '2026-09-29 09:15',
    status: 'Reviewed',
    priority: 'Normal'
  },
  {
    id: 'SUB-1003',
    fullName: 'Tariq Al-Balushi',
    email: 'tariq.b@gulfvessels.com',
    phone: '+968 9876 5432',
    subject: 'Lay-up Management & Reactivation',
    service: 'Lay-up Management',
    message: 'Need cold lay-up preservation and preservation inspection protocols for offshore support vessels in Sohar port.',
    date: '2026-09-30 08:20',
    status: 'In Progress',
    priority: 'High'
  }
]

export function SubmissionsProvider({ children }) {
  const [submissions, setSubmissions] = useState(() => {
    try {
      const saved = localStorage.getItem('gvm_submissions')
      return saved ? JSON.parse(saved) : INITIAL_SUBMISSIONS
    } catch {
      return INITIAL_SUBMISSIONS
    }
  })

  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false)
  const [enquiryInitialService, setEnquiryInitialService] = useState('')

  useEffect(() => {
    try {
      localStorage.setItem('gvm_submissions', JSON.stringify(submissions))
    } catch (e) {
      console.error('Failed to save submissions to localStorage:', e)
    }
  }, [submissions])

  const addSubmission = (data) => {
    const newSubmission = {
      id: `SUB-${Date.now().toString().slice(-4)}`,
      date: new Date().toISOString().replace('T', ' ').slice(0, 16),
      status: 'Pending Review',
      priority: 'Normal',
      ...data
    }
    setSubmissions((prev) => [newSubmission, ...prev])
    return newSubmission
  }

  const updateSubmissionStatus = (id, newStatus) => {
    setSubmissions((prev) =>
      prev.map((sub) => (sub.id === id ? { ...sub, status: newStatus } : sub))
    )
  }

  const deleteSubmission = (id) => {
    setSubmissions((prev) => prev.filter((sub) => sub.id !== id))
  }

  const clearAllSubmissions = () => {
    setSubmissions([])
  }

  const openEnquiryModal = (serviceName = '') => {
    setEnquiryInitialService(serviceName)
    setIsEnquiryModalOpen(true)
  }

  const closeEnquiryModal = () => {
    setIsEnquiryModalOpen(false)
    setEnquiryInitialService('')
  }

  return (
    <SubmissionsContext.Provider
      value={{
        submissions,
        addSubmission,
        updateSubmissionStatus,
        deleteSubmission,
        clearAllSubmissions,
        isEnquiryModalOpen,
        enquiryInitialService,
        openEnquiryModal,
        closeEnquiryModal
      }}
    >
      {children}
    </SubmissionsContext.Provider>
  )
}

export function useSubmissions() {
  const context = useContext(SubmissionsContext)
  if (!context) {
    throw new Error('useSubmissions must be used within a SubmissionsProvider')
  }
  return context
}
