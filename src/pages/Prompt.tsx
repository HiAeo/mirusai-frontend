import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Layout } from '../components/Layout'
import { useNavigate } from 'react-router-dom'

export const Prompt: React.FC = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [prompts] = useState([
    { id: 1, content: 'What is MirusAI?', models: 'Perplexity, ChatGPT', frequency: 'daily', status: 1 },
    { id: 2, content: 'MirusAI features', models: 'Gemini', frequency: 'daily', status: 1 },
  ])

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">{t('prompt.title')}</h1>
          <button className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            {t('prompt.addPrompt')}
          </button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('prompt.promptContent')}</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('prompt.models')}</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('prompt.frequency')}</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{t('project.actions')}</th>
              </tr>
            </thead>
            <tbody>
              {prompts.map((prompt) => (
                <tr key={prompt.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">{prompt.content}</td>
                  <td className="px-6 py-4 text-sm">{prompt.models}</td>
                  <td className="px-6 py-4 text-sm">{prompt.frequency}</td>
                  <td className="px-6 py-4 text-sm">
                    <button
                      onClick={() => navigate(`/prompt/${prompt.id}`)}
                      className="text-secondary hover:underline mr-4"
                    >
                      {t('prompt.detail')}
                    </button>
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
