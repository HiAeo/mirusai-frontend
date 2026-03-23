import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Globe } from 'lucide-react'

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Globe size={18} />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'zh' | 'en')}
        className="px-2 py-1 rounded border border-gray-300 text-sm"
      >
        <option value="zh">中文</option>
        <option value="en">English</option>
      </select>
    </div>
  )
}
