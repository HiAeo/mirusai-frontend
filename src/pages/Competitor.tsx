import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Layout } from '../components/Layout'

export const Competitor: React.FC = () => {
  const { t } = useLanguage()
  const [competitors] = useState([
    { id: 1, name: 'Competitor A', alias: 'CompA', url: 'https://compa.com', status: 1 },
    { id: 2, name: 'Competitor B', alias: 'CompB', url: 'https://compb.com', status: 1 },
  ])

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">{t('competitor.title')}</h1>
          <button className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            {t('competitor.addCompetitor')}
          </button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('competitor.compName')}</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('competitor.compAlias')}</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('competitor.compUrl')}</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('competitor.status')}</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('project.actions')}</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((comp) => (
                <tr key={comp.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">{comp.name}</td>
                  <td className="px-6 py-4 text-sm">{comp.alias}</td>
                  <td className="px-6 py-4 text-sm">{comp.url}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                      {comp.status === 1 ? t('competitor.enabled') : t('competitor.disabled')}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-secondary hover:underline mr-4">{t('common.edit')}</button>
                    <button className="text-red-600 hover:underline">{t('common.delete')}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}
