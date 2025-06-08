import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import DashboardLayout from '../../components/Dashboard/DashboardLayout'
import StatCard from '../../components/UI/StatCard'
import Card from '../../components/UI/Card'
import { Building2, Users, TrendingUp, Shield } from 'lucide-react'

const AMCDashboard = () => {
  const fundStats = [
    { title: 'Assets Under Management', value: '$1.2B', change: 8.7, trend: 'up' as const, icon: <Building2 size={24} /> },
    { title: 'Active Funds', value: '12', icon: <TrendingUp size={24} /> },
    { title: 'Total Investors', value: '4,567', change: 12.3, trend: 'up' as const, icon: <Users size={24} /> },
    { title: 'Compliance Score', value: '98%', change: 2.1, trend: 'up' as const, icon: <Shield size={24} /> }
  ]

  const fundPerformance = [
    { name: 'Growth Equity Fund', aum: '$450M', performance: 12.5, risk: 'Medium', category: 'Equity' },
    { name: 'Tech Innovation Fund', aum: '$320M', performance: 18.2, risk: 'High', category: 'Technology' },
    { name: 'Stable Income Fund', aum: '$280M', performance: 6.8, risk: 'Low', category: 'Fixed Income' },
    { name: 'ESG Leaders Fund', aum: '$150M', performance: 14.1, risk: 'Medium', category: 'ESG' }
  ]

  const complianceItems = [
    { item: 'Monthly NAV Reporting', status: 'Completed', date: '2024-01-15' },
    { item: 'Risk Assessment Update', status: 'Pending', date: '2024-01-20' },
    { item: 'Regulatory Filing', status: 'In Progress', date: '2024-01-25' },
    { item: 'Audit Preparation', status: 'Scheduled', date: '2024-02-01' }
  ]

  return (
    <DashboardLayout userRole="amc">
      <Routes>
        <Route path="/" element={
          <div className="space-y-8">
            {/* Welcome Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                AMC Command Center
              </h1>
              <p className="text-neutral-600 dark:text-neutral-300">
                Monitor your funds, compliance, and performance metrics
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fundStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <StatCard {...stat} />
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Fund Performance */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
                    Fund Performance
                  </h3>
                  <div className="space-y-4">
                    {fundPerformance.map((fund, index) => (
                      <div key={index} className="p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                            {fund.name}
                          </h4>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            fund.performance > 15 ? 'bg-secondary-100 text-secondary-700' :
                            fund.performance > 10 ? 'bg-primary-100 text-primary-700' :
                            'bg-neutral-100 text-neutral-700'
                          }`}>
                            {fund.performance}%
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-neutral-600 dark:text-neutral-400">
                          <span>AUM: {fund.aum}</span>
                          <span>Risk: {fund.risk}</span>
                          <span>{fund.category}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Compliance Tracking */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
                    Compliance Tracking
                  </h3>
                  <div className="space-y-4">
                    {complianceItems.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                        <div>
                          <p className="font-medium text-neutral-900 dark:text-neutral-100">
                            {item.item}
                          </p>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            Due: {item.date}
                          </p>
                        </div>
                        <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                          item.status === 'Completed' ? 'bg-secondary-100 text-secondary-700' :
                          item.status === 'In Progress' ? 'bg-primary-100 text-primary-700' :
                          item.status === 'Pending' ? 'bg-accent-100 text-accent-700' :
                          'bg-neutral-100 text-neutral-700'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        } />
        <Route path="/funds" element={<div>Fund Management</div>} />
        <Route path="/compliance" element={<div>Compliance Center</div>} />
        <Route path="/analytics" element={<div>Performance Analytics</div>} />
      </Routes>
    </DashboardLayout>
  )
}

export default AMCDashboard