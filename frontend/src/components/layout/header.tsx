import React from 'react'
import Link from 'next/link'
import { useAuth } from '../../contexts/auth'

const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuth()

  return (
    <header className="bg-white shadow-sm" data-gjs-editable="true">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-indigo-600">Python Web App</Link>
            </div>
          </div>
          <div className="flex items-center">
            {isAuthenticated ? (
              <button onClick={logout} className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-gjs-editable="true">Logout</button>
            ) : (
              <Link href="/login" className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-gjs-editable="true">Login</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header