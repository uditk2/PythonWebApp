import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../contexts/auth'
import Layout from '../components/layout'
import Link from 'next/link'

const Login: NextPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { login, loginWithOAuth } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(username, password)
      router.push('/')
    } catch (err: any) {
      setError(err.message || 'Failed to login')
    } finally {
      setLoading(false)
    }
  }

  const handleOAuthLogin = async (provider: string) => {
    try {
      const loginUrl = await loginWithOAuth(provider)
      window.location.href = loginUrl
    } catch (err: any) {
      setError(err.message || `Failed to login with ${provider}`)
    }
  }

  return (
    <Layout>
      <Head>
        <title>Login - Python Web Application</title>
        <meta name="description" content="Login to Python Web Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="login-page min-h-screen flex items-center justify-center" data-gjs-editable="true">
        <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-md" data-gjs-editable="true">
          <h1 className="text-3xl font-bold text-center mb-6" data-gjs-editable="true">Login</h1>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" data-gjs-editable="true">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4" data-gjs-editable="true">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700" data-gjs-editable="true">Username</label>
              <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required data-gjs-editable="true" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700" data-gjs-editable="true">Password</label>
              <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required data-gjs-editable="true" />
            </div>
            <div>
              <button type="submit" disabled={loading} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-gjs-editable="true">
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
              <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500" data-gjs-editable="true">Or continue with</span></div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3">
              <button onClick={() => handleOAuthLogin('google')} className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-gjs-editable="true">Google</button>
            </div>
          </div>
          <div className="mt-6 text-center" data-gjs-editable="true">
            <Link href="/" className="text-indigo-600 hover:text-indigo-500">Back to home</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login