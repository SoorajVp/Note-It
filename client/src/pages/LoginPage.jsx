import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Login from '../components/Login/Login'

const LoginPage = () => {
  const navigate = useNavigate()
  const { isLoggedIn } = useSelector((store) => store.user)

  useEffect(() => {
    isLoggedIn && navigate('/')
  }, [isLoggedIn])

  return (
    <Login />
  )
}

export default LoginPage