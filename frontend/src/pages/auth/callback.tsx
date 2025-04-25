import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../../contexts/auth'

const AuthCallback = () => {
  const router = useRouter()
  const { setToken } = useAuth()

  useEffect(() => {
    if (router.isReady) {
      const { token } = router.query
      if (token && typeof token === 'string') {
        setToken(token)
        router.push('/')
      } else {
        router.push('/login?error=Authentication failed')
      }
    }
  }, [router.isReady, router.query, router, setToken])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Processing authentication...</h1>
        <p>Please wait while we complete the authentication process.</p>
      </div>
    </div>
  )
}

export default AuthCallback