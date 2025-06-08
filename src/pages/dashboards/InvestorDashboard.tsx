import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import DashboardLayout from '../../components/Dashboard/DashboardLayout'
import StatCard from '../../components/UI/StatCard'
import Card from '../../components/UI/Card'
import { TrendingUp, DollarSign, PieChart, Target } from 'lucide-react'

const InvestorDashboard = () => {
  const portfolioStats = [
    { title: 'Total Portfolio Value', value: '$2,487,650', change: 12.5, trend: 'up' as const, icon: <DollarSign size={24} /> },
    { title: 'Monthly Return', value: '8.2%', change: 2.1, trend: 'up' as const, icon: <TrendingUp size={24} /> },
    { title: 'Active Investments', value: '24', icon: <PieChart size={24} /> },
    { title: 'Goal Progress', value: '78%', change: 5.3, trend: 'up' as const, icon: <Target size={24} /> }
  ]

  const recentTransactions = [
    { id: '1', type: 'Buy', asset: 'AAPL', amount: 100, price: 175.50, date: '2024-01-15' },
    { id: '2', type: 'Sell', asset: 'GOOGL', amount: 25, price: 142.30, date: '2024-01-14' },
    { id: '3', type: 'Buy', asset: 'TSLA', amount: 50, price: 248.80, date: '2024-01-13' },
    { id: '4', type: 'Dividend', asset: 'MSFT', amount: 150, price: 3.20, date: '2024-01-12' }
  ]

  const portfolioAllocation = [
    { name: 'Technology', value: 35, color: 'bg-primary-500' },
    { name: 'Healthcare', value: 25, color: 'bg-secondary-500' },
    { name: 'Finance', value: 20, color: 'bg-accent-500' },
    { name: 'Energy', value: 15, color: 'bg-purple-500' },
    { name: 'Other', value: 5, color: 'bg-gray-500' }
  ]

  return (
    <DashboardLayout userRole="investor">
      <Routes>
        <Route path="/" element={
          <div className="space-y-8">
            {/* Welcome Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                Welcome back, John
              </h1>
              <p className="text-neutral-600 dark:text-neutral-300">
                Here's an overview of your investment portfolio
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioStats.map((stat, index) => (
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
              {/* Portfolio Allocation */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
                    Portfolio Allocation
                  </h3>
                  <div className="space-y-4">
                    {portfolioAllocation.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                          <span className="text-neutral-700 dark:text-neutral-300">{item.name}</span>
                        </div>
                        <span className="font-medium text-neutral-900 dark:text-neutral-100">
                          {item.value}%
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Recent Transactions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
                    Recent Transactions
                  </h3>
                  <div className="space-y-4">
                    {recentTransactions.map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            transaction.type === 'Buy' ? 'bg-secondary-500' : 
                            transaction.type === 'Sell' ? 'bg-red-500' : 'bg-blue-500'
                          }`}></div>
                          <div>
                            <p className="font-medium text-neutral-900 dark:text-neutral-100">
                              {transaction.type} {transaction.asset}
                            </p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                              {transaction.date}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-neutral-900 dark:text-neutral-100">
                            {transaction.amount} shares
                          </p>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            ${transaction.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        } />
        <Route path="/portfolio" element={<div>Portfolio Details</div>} />
        <Route path="/transactions" element={<div>Transaction History</div>} />
        <Route path="/reports" element={<div>Reports & Analytics</div>} />
      </Routes>
    </DashboardLayout>
  )
}

export default InvestorDashboard