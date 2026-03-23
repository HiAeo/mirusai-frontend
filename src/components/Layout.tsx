import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { Menu, X, LogOut } from 'lucide-react'
import { LanguageSwitcher } from './LanguageSwitcher'

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useLanguage()
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  const menuItems = [
    { label: t('common.dashboard'), path: '/dashboard', icon: '📊' },
    { label: t('common.project'), path: '/project', icon: '📁' },
    { label: t('common.brand'), path: '/brand', icon: '🏷️' },
    { label: t('common.competitor'), path: '/competitor', icon: '🎯' },
    { label: t('common.prompt'), path: '/prompt', icon: '💬' },
    { label: t('common.compare'), path: '/compare', icon: '📈' },
    { label: t('common.report'), path: '/report', icon: '📄' },
    { label: t('common.settings'), path: '/settings', icon: '⚙️' },
    { label: t('common.profile'), path: '/profile', icon: '👤' },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-primary text-white transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">🚀</div>
            {sidebarOpen && <span className="font-bold">MirusAI</span>}
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto p-4">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="w-full text-left px-4 py-2 rounded hover:bg-secondary transition-colors mb-2 flex items-center gap-2"
            >
              <span>{item.icon}</span>
              {sidebarOpen && <span className="text-sm">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 rounded hover:bg-red-600 transition-colors flex items-center gap-2"
          >
            <LogOut size={18} />
            {sidebarOpen && <span className="text-sm">{t('common.logout')}</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <LanguageSwitcher />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
