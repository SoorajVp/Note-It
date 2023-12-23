import { useEffect, useState } from 'react';
import userIcon from '../../assets/user.png';
import UserForm from './UserForm';
import { getUserData } from '../../services/apiCalls/user';

const UserProfile = () => {
    

    return (
        <div>
            <div className='text-center mb-10'>
                <h1 className='text-secondary font-semibold uppercase'>User Profile</h1>
            </div>
            <div className='grid grid-cols-2 pt-4'>
                <div className='flex justify-center'>
                    <div className='flex-col text-center'>
                        <img src={userIcon} alt="User" className='w-32 h-32' />
                        <p className='py-4 text-primary hover:text-secondary text-sm font-semibold'>Change password</p>
                    </div>
                </div>

                <div className='mx-10'>
                    <UserForm />
                </div>
            </div>
        </div>
    )
}

export default UserProfile