import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Forgotten from '../components/SendOTP/Forgotten'

const ForgotPassword = () => {
    const navigate = useNavigate()
    const { isLoggedIn } = useSelector((store) => store.user)

    useEffect(() => {
        isLoggedIn && navigate('/')
    }, [isLoggedIn])

    return (
        <Forgotten />
    )
}

export default ForgotPassword