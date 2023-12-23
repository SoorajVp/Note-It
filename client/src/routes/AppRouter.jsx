import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'
import CreatePage from '../pages/CreatePage'
import PrivateRoute from './Layout/Private'
import NotFound from '../components/Error/NotFound'
import Layout from './Layout/Layout'
import NotePage from '../pages/NotePage'

const AppRouter = () => {

  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Note nexted routes */}
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='create' element={<CreatePage />} />
        <Route path='note/:id' element={<NotePage />} />
      </Route>

      {/* Error Route */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter