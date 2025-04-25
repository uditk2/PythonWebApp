import React, { createContext, useContext, useState, useEffect } from 'react'
import { login as apiLogin, loginWithOAuth as apiLoginWithOAuth } from '../services/api/auth'

interface AuthContextType {
  isAuthenticated: boolean
  token: string | null
  login: (username: string, password: string) => Promise<void>
  loginWithOAuth: (provider: string) => Promise<string>
  logout: () => void
  setToken: (token: string) => void
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  token: null,
  login: async () => {},
  loginWithOAuth: async () => '',
  logout: () => {},
  setToken: () => {}
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const storedToken = localStorage.getItem('auth_token')
    if (storedToken) {
      setToken(storedToken)
      setIsAuthenticated(true)
    }
  }, [])

  const login = async (username: string, password: string) => {
    const response = await apiLogin(username, password)
    const newToken = response.access_token
    localStorage.setItem('auth_token', newToken)
    setToken(newToken)
    setIsAuthenticated(true)
  }

  const loginWithOAuth = async (provider: string) => {
    const response = await apiLoginWithOAuth(provider)
    return response.login_url
  }

  const logout = () => {
    localStorage.removeItem('auth_token')
    setToken(null)
    setIsAuthenticated(false)
  }

  const authContextValue: AuthContextType = {
    isAuthenticated,
    token,
    login,
    loginWithOAuth,
    logout,
    setToken: (newToken: string) => {
      localStorage.setItem('auth_token', newToken)
      setToken(newToken)
      setIsAuthenticated(true)
    }
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  )
}