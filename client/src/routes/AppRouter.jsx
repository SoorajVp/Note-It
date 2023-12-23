import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'
import CreatePage from '../pages/CreatePage'
import PrivateRoute from './Layout/Private'
import NotFound from '../components/Error/NotFound'
import Layout from './Layout/Layout'

const AppRouter = () => {

  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path='/' element={<Layout />}>
        <Route index element={<PrivateRoute ><HomePage /></PrivateRoute>} />
        <Route path='create' element={<PrivateRoute ><CreatePage /></PrivateRoute>} />
      </Route>

      

      {/* Error Route */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter