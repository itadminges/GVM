import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShieldCheck, Lock, User, ArrowRight } from 'lucide-react'

export default function AdminLogin() {
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('gvm2026')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'GVM Administration & Verification Agent Login'
    const isAuthenticated = localStorage.getItem('gvm_admin_auth')
    if (isAuthenticated === 'true') {
      navigate('/admin', { replace: true })
    }
  }, [navigate])

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    setTimeout(() => {
      // Standard credentials or any verification agent access
      if ((username === 'admin' && password === 'gvm2026') || username.toLowerCase() === 'agent') {
        localStorage.setItem('gvm_admin_auth', 'true')
        localStorage.setItem('gvm_admin_user', username)
        setIsLoading(false)
        navigate('/admin', { replace: true })
      } else {
        setIsLoading(false)
        setError('Invalid credentials. Use admin / gvm2026 or click Quick Agent Access below.')
      }
    }, 400)
  }

  const handleQuickAgentAccess = () => {
    localStorage.setItem('gvm_admin_auth', 'true')
    localStorage.setItem('gvm_admin_user', 'Verification Agent')
    navigate('/admin', { replace: true })
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 text-slate-900 relative">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center relative z-10">
        <div className="flex justify-center mb-4">
          <img 
            src="/assets/uploads/2025/07/logo.svg" 
            alt="Global Vessel Management" 
            className="h-12 w-auto object-contain"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = '/assets/logo.svg'
            }}
          />
        </div>
        <h2 className="text-2xl font-bold font-heading text-[#003366]">
          GVM Administration Portal
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Verification Agent &amp; Systems Inspection Dashboard
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4">
        <div className="bg-white border border-slate-200 py-8 px-6 shadow-xl rounded-2xl sm:px-10">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-xs font-medium">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                Admin Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#003366] focus:bg-white"
                  placeholder="admin"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#003366] focus:bg-white"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 px-4 bg-[#003366] hover:bg-[#002244] text-white font-semibold rounded-lg shadow-md transition-all text-sm flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                <span>{isLoading ? 'Verifying Credentials...' : 'Sign In as Administrator'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <button
              type="button"
              onClick={handleQuickAgentAccess}
              className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-[#003366] font-semibold rounded-lg text-xs transition-colors flex items-center justify-center space-x-2 cursor-pointer border border-slate-200"
            >
              <ShieldCheck className="w-4 h-4 text-[#003366]" />
              <span>Quick Login: Automated Verification Agent</span>
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-[11px] text-slate-400">
              Default access: <span className="font-mono text-slate-600">admin / gvm2026</span>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-xs text-slate-500 hover:text-[#003366] transition-colors"
          >
            &larr; Return to Public Website
          </a>
        </div>
      </div>
    </div>
  )
}
