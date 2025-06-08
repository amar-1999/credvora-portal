import React, { createContext, useContext, useState, useEffect } from 'react'
import { AuthContextType, User } from '../types'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock users for demo
const mockUsers: User[] = [
  { id: '1', email: 'investor@demo.com', name: 'John Investor', role: 'investor' },
  { id: '2', email: 'amc@demo.com', name: 'Sarah AMC', role: 'amc' },
  { id: '3', email: 'distributor@demo.com', name: 'Mike Distributor', role: 'distributor' },
]

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string, role: string) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const mockUser = mockUsers.find(u => u.email === email && u.role === role)
    if (mockUser && password === 'password') {
      setUser(mockUser)
      localStorage.setItem('user', JSON.stringify(mockUser))
    } else {
      throw new Error('Invalid credentials')
    }
    setIsLoading(false)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}