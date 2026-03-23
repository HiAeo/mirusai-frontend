import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Layout } from '../components/Layout'

export const Compare: React.FC = () => {
  const { t } = useLanguage()

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">{t('compare.title')}</h1>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Metric</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">MirusAI</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Competitor A</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Competitor B</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{t('compare.visScore')}</td>
                <td className="px-6 py-4 text-sm font-semibold text-secondary">85</td>
                <td className="px-6 py-4 text-sm">72</td>
                <td className="px-6 py-4 text-sm">68</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{t('compare.ranking')}</td>
                <td className="px-6 py-4 text-sm font-semibold text-secondary">#1</td>
                <td className="px-6 py-4 text-sm">#3</td>
                <td className="px-6 py-4 text-sm">#5</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{t('compare.sentiment')}</td>
                <td className="px-6 py-4 text-sm font-semibold text-secondary">82</td>
                <td className="px-6 py-4 text-sm">75</td>
                <td className="px-6 py-4 text-sm">70</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{t('compare.citations')}</td>
                <td className="px-6 py-4 text-sm font-semibold text-secondary">156</td>
                <td className="px-6 py-4 text-sm">120</td>
                <td className="px-6 py-4 text-sm">95</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}
