import api from './index'

export interface WelcomeContent {
  title: string
  message: string
  features: string[]
}

export const getWelcomeContent = async (): Promise<WelcomeContent> => {
  try {
    const response = await api.get<WelcomeContent>('/welcome')
    return response.data
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.detail || 'Failed to fetch welcome content')
    }
    throw new Error('Network error')
  }
}