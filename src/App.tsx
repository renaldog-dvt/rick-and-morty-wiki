import { Route, Routes } from 'react-router'
import './App.css'
import DashboardPage from './pages/DashboardPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
