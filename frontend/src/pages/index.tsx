import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { getWelcomeContent } from '../services/api/welcome'
import Layout from '../components/layout'

interface WelcomeContent {
  title: string
  message: string
  features: string[]
}

const Home: NextPage = () => {
  const [content, setContent] = useState<WelcomeContent | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await getWelcomeContent()
        setContent(data)
      } catch (error) {
        console.error('Failed to fetch welcome content:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchContent()
  }, [])

  return (
    <Layout>
      <Head>
        <title>Python Web Application</title>
        <meta name="description" content="Python Web Application with FastAPI and Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="welcome-page" data-gjs-editable="true">
        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : content ? (
          <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center mb-6" data-gjs-editable="true">
              {content.title}
            </h1>
            <p className="text-xl text-center mb-8" data-gjs-editable="true">
              {content.message}
            </p>
            <div className="bg-white rounded-lg shadow-md p-6" data-gjs-editable="true">
              <h2 className="text-2xl font-semibold mb-4" data-gjs-editable="true">Features</h2>
              <ul className="list-disc pl-5 space-y-2">
                {content.features.map((feature, index) => (
                  <li key={index} className="text-lg" data-gjs-editable="true">{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="text-center py-10 text-red-500">Failed to load content</div>
        )}
      </div>
    </Layout>
  )
}

export default Home