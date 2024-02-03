import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'
import CreatePage from '../pages/CreatePage'
import NotFound from '../components/Error/NotFound'
import Layout from './Layout/Layout'
import NotePage from '../pages/NotePage'
import ProfilePage from '../pages/ProfilePage'
import ForgotPassword from '../pages/ForgotPassword'

const AppRouter = () => {

  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />

      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='create' element={<CreatePage />} />
        <Route path='note/:id' element={<NotePage />} />
        <Route path='profile' element={<ProfilePage />} />
      </Route>

      {/* Error Route */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter