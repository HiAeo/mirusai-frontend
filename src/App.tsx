import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { LanguageProvider } from './contexts/LanguageContext'
import { useAuth } from './hooks/useAuth'

// Pages
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Dashboard } from './pages/Dashboard'
import { Project } from './pages/Project'
import { Brand } from './pages/Brand'
import { Competitor } from './pages/Competitor'
import { Prompt } from './pages/Prompt'
import { PromptDetail } from './pages/PromptDetail'
import { Compare } from './pages/Compare'
import { Report } from './pages/Report'
import { Profile } from './pages/Profile'
import { Settings } from './pages/Settings'

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth()

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  return user ? <>{children}</> : <Navigate to="/login" />
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/project"
            element={
              <ProtectedRoute>
                <Project />
              </ProtectedRoute>
            }
          />
          <Route
            path="/brand"
            element={
              <ProtectedRoute>
                <Brand />
              </ProtectedRoute>
            }
          />
          <Route
            path="/competitor"
            element={
              <ProtectedRoute>
                <Competitor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/prompt"
            element={
              <ProtectedRoute>
                <Prompt />
              </ProtectedRoute>
            }
          />
          <Route
            path="/prompt/:id"
            element={
              <ProtectedRoute>
                <PromptDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/compare"
            element={
              <ProtectedRoute>
                <Compare />
              </ProtectedRoute>
            }
          />
          <Route
            path="/report"
            element={
              <ProtectedRoute>
                <Report />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
        <Toaster position="top-right" />
      </Router>
    </LanguageProvider>
  )
}

export default App
