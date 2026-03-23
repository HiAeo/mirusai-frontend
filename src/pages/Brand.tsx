import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Layout } from '../components/Layout'

export const Brand: React.FC = () => {
  const { t } = useLanguage()

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">{t('brand.title')}</h1>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">{t('brand.brandInfo')}</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('project.brandName')}</label>
              <input type="text" defaultValue="MirusAI" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('project.brandAlias')}</label>
              <input type="text" defaultValue="迈瑞斯 AI" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('project.officialUrl')}</label>
              <input type="text" defaultValue="https://mirusai.cn" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <button className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              {t('common.save')}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
