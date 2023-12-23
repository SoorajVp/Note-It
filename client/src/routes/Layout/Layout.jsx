import React from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import PrivateRoute from './Private'

const Layout = () => {
    return (
        <PrivateRoute >
            <Header />
            <div className='pt-6 px-3 sm:px-[10%] bg-purple-200 min-h-screen'>
                <Outlet />
            </div>
        </PrivateRoute>
    )
}

export default Layout