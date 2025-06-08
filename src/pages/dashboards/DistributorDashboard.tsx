import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import DashboardLayout from '../../components/Dashboard/DashboardLayout'
import StatCard from '../../components/UI/StatCard'
import Card from '../../components/UI/Card'
import { Users, DollarSign, TrendingUp, Target } from 'lucide-react'

const DistributorDashboard = () => {
  const salesStats = [
    { title: 'Total Sales', value: '$3.2M', change: 15.3, trend: 'up' as const, icon: <DollarSign size={24} /> },
    { title: 'Active Clients', value: '287', change: 8.7, trend: 'up' as const, icon: <Users size={24} /> },
    { title: 'Monthly Commission', value: '$45,670', change: 12.1, trend: 'up' as const, icon: <TrendingUp size={24} /> },
    { title: 'Target Achievement', value: '89%', change: 5.2, trend: 'up' as const, icon: <Target size={24} /> }
  ]

  const topClients = [
    { name: 'Jennifer Martinez', investment: '$250,000', status: 'Active', joinDate: '2023-08-15' },
    { name: 'Robert Thompson', investment: '$185,000', status: 'Active', joinDate: '2023-09-22' },
    { name: 'Sarah Johnson', investment: '$160,000', status: 'Active', joinDate: '2023-10-05' },
    { name: 'Michael Chen', investment: '$140,000', status: 'Active', joinDate: '2023-11-12' }
  ]

  const recentLeads = [
    { name: 'David Wilson', interest: 'Growth Fund', value: '$75,000', stage: 'Qualified' },
    { name: 'Lisa Anderson', interest: 'Tech Fund', value: '$120,000', stage: 'Proposal' },
    { name: 'James Brown', interest: 'Income Fund', value: '$90,000', stage: 'Follow-up' },
    { name: 'Maria Garcia', interest: 'ESG Fund', value: '$110,000', stage: 'Meeting' }
  ]

  const commissionBreakdown = [
    { product: 'Equity Funds', commission: '$18,450', percentage: 40 },
    { product: 'Fixed Income', commission: '$12,200', percentage: 27 },
    { product: 'Balanced Funds', commission: '$8,900', percentage: 19 },
    { product: 'Alternative Investments', commission: '$6,120', percentage: 14 }
  ]

  return (
    <DashboardLayout userRole="distributor">
      <Routes>
        <Route path="/" element={
          <div className="space-y-8">
            {/* Welcome Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                Sales Dashboard
              </h1>
              <p className="text-neutral-600 dark:text-neutral-300">
                Track your sales performance and manage client relationships
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {salesStats.map((stat, index) => (
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
              {/* Top Clients */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
                    Top Clients
                  </h3>
                  <div className="space-y-4">
                    {topClients.map((client, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-medium text-sm">
                              {client.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-neutral-900 dark:text-neutral-100">
                              {client.name}
                            </p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                              Joined {client.joinDate}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-neutral-900 dark:text-neutral-100">
                            {client.investment}
                          </p>
                          <span className="px-2 py-1 text-xs bg-secondary-100 text-secondary-700 rounded-full">
                            {client.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Recent Leads */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
                    Recent Leads
                  </h3>
                  <div className="space-y-4">
                    {recentLeads.map((lead, index) => (
                      <div key={index} className="p-3 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                            {lead.name}
                          </h4>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            lead.stage === 'Qualified' ? 'bg-secondary-100 text-secondary-700' :
                            lead.stage === 'Proposal' ? 'bg-primary-100 text-primary-700' :
                            lead.stage === 'Meeting' ? 'bg-accent-100 text-accent-700' :
                            'bg-neutral-100 text-neutral-700'
                          }`}>
                            {lead.stage}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-neutral-600 dark:text-neutral-400">
                          <span>Interest: {lead.interest}</span>
                          <span>Value: {lead.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Commission Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
                  Commission Breakdown
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {commissionBreakdown.map((item, index) => (
                    <div key={index} className="p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                      <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                        {item.product}
                      </h4>
                      <p className="text-2xl font-bold text-primary-600 mb-1">
                        {item.commission}
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {item.percentage}% of total
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        } />
        <Route path="/clients" element={<div>Client Management</div>} />
        <Route path="/leads" element={<div>Lead Generation</div>} />
        <Route path="/commission" element={<div>Commission Tracking</div>} />
      </Routes>
    </DashboardLayout>
  )
}

export default DistributorDashboard