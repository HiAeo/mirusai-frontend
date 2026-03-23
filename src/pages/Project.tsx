import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Layout } from '../components/Layout'

export const Project: React.FC = () => {
  const { t } = useLanguage()
  const [projects] = useState([
    { id: 1, name: 'Project A', brand: 'Brand A', created: '2024-01-01' },
    { id: 2, name: 'Project B', brand: 'Brand B', created: '2024-01-02' },
  ])

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">{t('project.title')}</h1>
          <button className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            {t('project.createProject')}
          </button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('project.projectName')}</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('project.brandName')}</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('project.createdAt')}</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('project.actions')}</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">{project.name}</td>
                  <td className="px-6 py-4 text-sm">{project.brand}</td>
                  <td className="px-6 py-4 text-sm">{project.created}</td>
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
