import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'
import CreatePage from '../pages/CreatePage'
import PrivateRoute from './Private'

const AppRouter = () => {

  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path='/' element={<PrivateRoute ><HomePage /></PrivateRoute>} />
      <Route path='/create' element={<PrivateRoute ><CreatePage /></PrivateRoute>} />
    </Routes>
  )
}

export default AppRouter