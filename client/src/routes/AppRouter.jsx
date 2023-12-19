import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'
import CreatePage from '../pages/CreatePage'

const AppRouter = () => {
  
  return (
      <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<CreatePage />} />
      </Routes>
  )
}

export default AppRouter