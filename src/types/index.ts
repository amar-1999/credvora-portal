export interface User {
  id: string
  email: string
  name: string
  role: 'investor' | 'amc' | 'distributor'
  avatar?: string
}

export interface AuthContextType {
  user: User | null
  login: (email: string, password: string, role: string) => Promise<void>
  logout: () => void
  isLoading: boolean
}

export interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export interface PortfolioItem {
  id: string
  name: string
  value: number
  change: number
  allocation: number
}

export interface Transaction {
  id: string
  type: 'buy' | 'sell'
  asset: string
  amount: number
  price: number
  date: string
}

export interface Fund {
  id: string
  name: string
  aum: number
  performance: number
  riskLevel: 'Low' | 'Medium' | 'High'
  category: string
}

export interface Client {
  id: string
  name: string
  email: string
  totalInvestment: number
  status: 'Active' | 'Inactive'
  joinDate: string
}