import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Layout } from '../components/Layout'

export const Profile: React.FC = () => {
  const { t } = useLanguage()

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">{t('profile.title')}</h1>

        <div className="bg-white rounded-lg shadow p-6 max-w-2xl">
          <h2 className="text-lg font-semibold text-primary mb-4">{t('common.profile')}</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('profile.username')}</label>
              <input type="text" defaultValue="User" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('profile.email')}</label>
              <input type="email" defaultValue="user@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('profile.phone')}</label>
              <input type="tel" defaultValue="" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <button className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              {t('common.save')}
            </button>
          </div>

          <hr className="my-6" />

          <h2 className="text-lg font-semibold text-primary mb-4">{t('profile.changePassword')}</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('profile.oldPassword')}</label>
              <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('profile.newPassword')}</label>
              <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('profile.confirmNewPassword')}</label>
              <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
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
