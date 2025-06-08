import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon, User, LogOut, ChevronDown } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { useTheme } from '../../contexts/ThemeContext'
import { cn } from '../../utils/cn'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    logout()
    navigate('/')
    setIsUserMenuOpen(false)
  }

  const getDashboardPath = () => {
    if (!user) return '/'
    return `/${user.role}`
  }

  const isHomePage = location.pathname === '/'

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-200',
        isHomePage
          ? 'bg-white/80 dark:bg-neutral-900/80 border-white/20 dark:border-neutral-700/50'
          : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div> */}
            <div className="w-8 h-8 bg-gradient-to-br bg-validus-blue  rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Credvora
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {user ? (
              <Link
                to={getDashboardPath()}
                className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <a href="#features" className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Features
                </a>
                <a href="#solutions" className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Solutions
                </a>
                <a href="#about" className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  About
                </a>
              </>
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <User size={16} className="text-white" />
                  </div>
                  <span className="text-sm font-medium">{user.name}</span>
                  <ChevronDown size={16} className={cn(
                    'transition-transform',
                    isUserMenuOpen && 'rotate-180'
                  )} />
                </button>

                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 py-1"
                  >
                    <div className="px-4 py-2 border-b border-neutral-200 dark:border-neutral-700">
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-neutral-500 capitalize">{user.role}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
                    >
                      <LogOut size={16} />
                      <span>Sign out</span>
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="btn-secondary"
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-neutral-700 dark:text-neutral-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-neutral-200 dark:border-neutral-700 py-4"
          >
            <nav className="space-y-4">
              {user ? (
                <>
                  <Link
                    to={getDashboardPath()}
                    className="block text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-700">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                        <User size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-neutral-500 capitalize">{user.role}</p>
                      </div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-colors"
                    >
                      <LogOut size={18} />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <a href="#features" className="block text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    Features
                  </a>
                  <a href="#solutions" className="block text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    Solutions
                  </a>
                  <a href="#about" className="block text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    About
                  </a>
                  <Link
                    to="/login"
                    className="btn-primary inline-block text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                </>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">Theme</span>
                <button
                  onClick={toggleTheme}
                  className="p-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header