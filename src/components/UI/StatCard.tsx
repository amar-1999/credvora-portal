import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown } from 'lucide-react'
import Card from './Card'

interface StatCardProps {
  title: string
  value: string | number
  change?: number
  icon?: React.ReactNode
  trend?: 'up' | 'down' | 'neutral'
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, trend = 'neutral' }) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-secondary-600'
      case 'down': return 'text-red-600'
      default: return 'text-neutral-600'
    }
  }

  const getTrendIcon = () => {
    if (change === undefined) return null
    return trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />
  }

  return (
    <Card hover className="relative overflow-hidden">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{title}</p>
          <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-1">{value}</p>
          {change !== undefined && (
            <div className={`flex items-center mt-2 text-sm font-medium ${getTrendColor()}`}>
              {getTrendIcon()}
              <span className="ml-1">{Math.abs(change)}%</span>
            </div>
          )}
        </div>
        {icon && (
          <div className="text-primary-600">
            {icon}
          </div>
        )}
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-full -mr-8 -mt-8"></div>
    </Card>
  )
}

export default StatCard