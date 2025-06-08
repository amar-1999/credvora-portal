import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { Eye, EyeOff, User, Building2, Users } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import Button from '../components/UI/Button'
import Card from '../components/UI/Card'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<'investor' | 'amc' | 'distributor'>('investor')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const { login, isLoading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || `/${role}`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      await login(email, password, role)
      navigate(from, { replace: true })
    } catch (err) {
      setError('Invalid credentials. Please try again.')
    }
  }

  const roleOptions = [
    { value: 'investor', label: 'Investor', icon: <User size={20} />, description: 'Individual or institutional investor' },
    { value: 'amc', label: 'AMC', icon: <Building2 size={20} />, description: 'Asset Management Company' },
    { value: 'distributor', label: 'Distributor', icon: <Users size={20} />, description: 'Financial product distributor' }
  ]

  const getDemoCredentials = () => {
    const credentials = {
      investor: { email: 'investor@demo.com', password: 'password' },
      amc: { email: 'amc@demo.com', password: 'password' },
      distributor: { email: 'distributor@demo.com', password: 'password' }
    }
    return credentials[role]
  }

  const fillDemoCredentials = () => {
    const demo = getDemoCredentials()
    setEmail(demo.email)
    setPassword(demo.password)
  }

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            Welcome to Credvora
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300">
            Sign in to access your portal
          </p>
        </div>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                Select Your Role
              </label>
              <div className="grid grid-cols-1 gap-3">
                {roleOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setRole(option.value as any)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${role === option.value
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-950/20'
                        : 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600'
                      }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${role === option.value
                          ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400'
                          : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400'
                        }`}>
                        {option.icon}
                      </div>
                      <div>
                        <div className="font-medium text-neutral-900 dark:text-neutral-100">
                          {option.label}
                        </div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">
                          {option.description}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 pr-10 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-neutral-600 dark:text-neutral-400"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}

            {/* Demo Credentials */}
            <div className="p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                Demo credentials for {role}:
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-mono">
                Email: {getDemoCredentials().email}<br />
                Password: {getDemoCredentials().password}
              </p>
              <button
                type="button"
                onClick={fillDemoCredentials}
                className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 mt-1 underline"
              >
                Click to fill automatically
              </button>
            </div>

            <Button type="submit" isLoading={isLoading} className="w-full">
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>

            <div className="text-center">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Don't have an account?{' '}
                <a href="#" className="text-primary-600 hover:text-primary-500 font-medium">
                  Contact Sales
                </a>
              </p>
            </div>
          </form>
        </Card>
      </motion.div>
    </div>
  )
}

export default LoginPage