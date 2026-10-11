import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ExplorePage } from './pages/ExplorePage'
import { ExperimentPage } from './pages/ExperimentPage'
import { HomePage } from './pages/HomePage'

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experiments" element={<ExplorePage />} />
        <Route path="/experiments/:experimentId" element={<ExperimentPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
