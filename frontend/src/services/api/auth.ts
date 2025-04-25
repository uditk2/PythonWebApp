import api from './index'

export interface LoginResponse {
  access_token: string
  token_type: string
}

export interface OAuthLoginResponse {
  login_url: string
}

export const login = async (username: string, password: string): Promise<LoginResponse> => {
  const formData = new FormData()
  formData.append('username', username)
  formData.append('password', password)

  try {
    const response = await api.post<LoginResponse>('/auth/login', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    return response.data
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Login failed')
    }
    throw new Error('Network error')
  }
}

export const loginWithOAuth = async (provider: string): Promise<OAuthLoginResponse> => {
  try {
    const response = await api.get<OAuthLoginResponse>(`/auth/oauth/${provider}`)
    return response.data
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.detail || `OAuth login with ${provider} failed`)
    }
    throw new Error('Network error')
  }
}

export const logout = async (): Promise<void> => {
  try {
    await api.post('/auth/logout')
  } catch (error) {
    console.error('Logout failed:', error)
  }
}