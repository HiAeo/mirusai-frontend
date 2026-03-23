import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Layout } from '../components/Layout'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const mockData = [
  { date: '2024-01-01', visScore: 65, sentiment: 72 },
  { date: '2024-01-02', visScore: 70, sentiment: 75 },
  { date: '2024-01-03', visScore: 68, sentiment: 70 },
  { date: '2024-01-04', visScore: 75, sentiment: 78 },
  { date: '2024-01-05', visScore: 80, sentiment: 82 },
]

const competitorData = [
  { name: 'MirusAI', value: 85 },
  { name: 'Competitor A', value: 72 },
  { name: 'Competitor B', value: 68 },
]

export const Dashboard: React.FC = () => {
  const { t } = useLanguage()

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">{t('dashboard.title')}</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">{t('dashboard.visibilityScore')}</p>
            <p className="text-3xl font-bold text-secondary mt-2">85</p>
            <p className="text-green-600 text-sm mt-2">↑ 5%</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">{t('dashboard.ranking')}</p>
            <p className="text-3xl font-bold text-secondary mt-2">#1</p>
            <p className="text-green-600 text-sm mt-2">↑ 2 positions</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">{t('dashboard.sentiment')}</p>
            <p className="text-3xl font-bold text-secondary mt-2">82</p>
            <p className="text-green-600 text-sm mt-2">↑ 3%</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm">{t('dashboard.citations')}</p>
            <p className="text-3xl font-bold text-secondary mt-2">156</p>
            <p className="text-green-600 text-sm mt-2">↑ 12</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Trend Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-primary mb-4">{t('dashboard.trend')}</h2>
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

          {/* Competitor Comparison */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-primary mb-4">{t('dashboard.competitors')}</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={competitorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </Layout>
  )
}
