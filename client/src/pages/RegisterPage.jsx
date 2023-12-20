import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Register from '../components/Register/Register'

const RegisterPage = () => {
  const navigate = useNavigate()
  const { isLoggedIn } = useSelector((store) => store.user)

  useEffect(() => {
    isLoggedIn && navigate('/')
  }, [isLoggedIn])

  return (
      <Register />
  )
}

export default RegisterPage