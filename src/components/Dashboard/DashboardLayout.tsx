import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  LayoutDashboard, 
  PieChart, 
  FileText, 
  Settings, 
  Building2,
  Shield,
  BarChart3,
  Users,
  Target,
  TrendingUp,
  Menu,
  X
} from 'lucide-react'
import { cn } from '../../utils/cn'

interface DashboardLayoutProps {
  children: React.ReactNode
  userRole: 'investor' | 'amc' | 'distributor'
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, userRole }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const getNavigationItems = () => {
    const baseItems = [
      { name: 'Dashboard', href: `/${userRole}`, icon: LayoutDashboard }
    ]

    switch (userRole) {
      case 'investor':
        return [
          ...baseItems,
          { name: 'Portfolio', href: `/${userRole}/portfolio`, icon: PieChart },
          { name: 'Transactions', href: `/${userRole}/transactions`, icon: TrendingUp },
          { name: 'Reports', href: `/${userRole}/reports`, icon: FileText }
        ]
      case 'amc':
        return [
          ...baseItems,
          { name: 'Fund Management', href: `/${userRole}/funds`, icon: Building2 },
          { name: 'Compliance', href: `/${userRole}/compliance`, icon: Shield },
          { name: 'Analytics', href: `/${userRole}/analytics`, icon: BarChart3 }
        ]
      case 'distributor':
        return [
          ...baseItems,
          { name: 'Client Management', href: `/${userRole}/clients`, icon: Users },
          { name: 'Lead Generation', href: `/${userRole}/leads`, icon: Target },
          { name: 'Commission', href: `/${userRole}/commission`, icon: TrendingUp }
        ]
      default:
        return baseItems
    }
  }

  const navigationItems = getNavigationItems()

  const isActivePath = (href: string) => {
    if (href === `/${userRole}`) {
      return location.pathname === href
    }
    return location.pathname.startsWith(href)
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-neutral-800 border-r border-neutral-200 dark:border-neutral-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-neutral-200 dark:border-neutral-700">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 capitalize">
            {userRole} Portal
          </h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 text-neutral-600 dark:text-neutral-400"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mt-6 px-3">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={cn(
                      "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      isActivePath(item.href)
                        ? "bg-primary-50 text-primary-700 dark:bg-primary-950/20 dark:text-primary-400"
                        : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700"
                    )}
                  >
                    <Icon size={20} className="mr-3" />
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <Link
            to="#"
            className="flex items-center px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700 rounded-lg transition-colors"
          >
            <Settings size={20} className="mr-3" />
            Settings
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="h-16 bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 flex items-center justify-between px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 text-neutral-600 dark:text-neutral-400"
          >
            <Menu size={20} />
          </button>
          
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>

        {/* Page content */}
        <main className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout