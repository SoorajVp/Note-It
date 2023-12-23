import React from 'react'
import Logo from '../Elements/Logo'
import profileIcon from '../../assets/profile-user.png'

const Header = () => {
    return (
        <div className="bg-gradient-to-r from-secondary to-violet-800 py-3">
            <div className='flex justify-between px-3 sm:px-[10%]  w-full'>
                <Logo />
                <img src={profileIcon} alt="Profile" className='w-7 h-7 mr-0.5' />
            </div>
        </div>
    )
}

export default Header