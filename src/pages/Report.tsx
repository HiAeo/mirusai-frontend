import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Layout } from '../components/Layout'

export const Report: React.FC = () => {
  const { t } = useLanguage()
  const [reports] = useState([
    { id: 1, name: 'January Report', created: '2024-01-31', format: 'PDF' },
    { id: 2, name: 'February Report', created: '2024-02-28', format: 'Excel' },
  ])

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">{t('report.title')}</h1>
          <button className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            {t('report.generateReport')}
          </button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('report.reportName')}</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('project.createdAt')}</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('report.format')}</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('project.actions')}</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">{report.name}</td>
                  <td className="px-6 py-4 text-sm">{report.created}</td>
                  <td className="px-6 py-4 text-sm">{report.format}</td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-secondary hover:underline mr-4">{t('common.download')}</button>
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
