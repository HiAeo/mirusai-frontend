import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Layout } from '../components/Layout'
import { useParams } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const mockData = [
  { date: '2024-01-01', visScore: 65, sentiment: 72 },
  { date: '2024-01-02', visScore: 70, sentiment: 75 },
  { date: '2024-01-03', visScore: 68, sentiment: 70 },
]

export const PromptDetail: React.FC = () => {
  const { t } = useLanguage()
  const { id } = useParams()

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">{t('prompt.detail')}</h1>

        {/* Latest Data */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">{t('dashboard.visibilityScore')}</p>
            <p className="text-3xl font-bold text-secondary mt-2">68</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">{t('dashboard.ranking')}</p>
            <p className="text-3xl font-bold text-secondary mt-2">#3</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">{t('dashboard.sentiment')}</p>
            <p className="text-3xl font-bold text-secondary mt-2">70</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">{t('dashboard.citations')}</p>
            <p className="text-3xl font-bold text-secondary mt-2">45</p>
          </div>
        </div>

        {/* Trend Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">{t('prompt.trendChart')}</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="visScore" stroke="#3B82F6" name={t('dashboard.visibilityScore')} />
              <Line type="monotone" dataKey="sentiment" stroke="#10B981" name={t('dashboard.sentiment')} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Citations */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">{t('prompt.citations')}</h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 border-b">
              <span>example.com</span>
              <span className="text-secondary font-semibold">5</span>
            </div>
            <div className="flex justify-between items-center p-3 border-b">
              <span>another.com</span>
              <span className="text-secondary font-semibold">3</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
