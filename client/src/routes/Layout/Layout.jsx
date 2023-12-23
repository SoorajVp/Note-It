import React from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Header />
            <div className='pt-6 px-3 sm:px-[10%] bg-purple-200 min-h-screen'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout