import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import InvestorDashboard from './pages/dashboards/InvestorDashboard'
import AMCDashboard from './pages/dashboards/AMCDashboard'
import DistributorDashboard from './pages/dashboards/DistributorDashboard'
import ProtectedRoute from './components/Auth/ProtectedRoute'
import { useTheme } from './contexts/ThemeContext'

function App() {
  const { theme } = useTheme()
  
  React.useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/investor/*"
            element={
              <ProtectedRoute allowedRoles={['investor']}>
                <InvestorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/amc/*"
            element={
              <ProtectedRoute allowedRoles={['amc']}>
                <AMCDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/distributor/*"
            element={
              <ProtectedRoute allowedRoles={['distributor']}>
                <DistributorDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </motion.main>
      <Footer />
    </div>
  )
}

export default App