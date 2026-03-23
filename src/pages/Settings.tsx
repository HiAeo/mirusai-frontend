import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Layout } from '../components/Layout'

export const Settings: React.FC = () => {
  const { t } = useLanguage()

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">{t('settings.title')}</h1>

        <div className="bg-white rounded-lg shadow p-6 max-w-2xl">
          <h2 className="text-lg font-semibold text-primary mb-4">{t('settings.basicSettings')}</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('settings.language')}</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option>中文</option>
                <option>English</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('settings.timezone')}</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option>UTC+8 (Asia/Shanghai)</option>
                <option>UTC+0 (GMT)</option>
              </select>
            </div>
            <button className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              {t('common.save')}
            </button>
          </div>

          <hr className="my-6" />

          <h2 className="text-lg font-semibold text-primary mb-4">{t('settings.monitorSettings')}</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('settings.defaultFrequency')}</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option>Daily</option>
                <option>Weekly</option>
              </select>
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
