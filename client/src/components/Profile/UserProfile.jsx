import { useState } from 'react';
import userIcon from '../../assets/user.png';
import LogoutUser from '../Modals/LogoutUser';
import UserForm from './UserForm';
import ManagePassword from './ManagePassword';

const UserProfile = () => {
    const [changePassword, setChangePassword] = useState(false)

    const handlePasswordChange = () => {
        setChangePassword(!changePassword)
    }

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-secondary font-semibold uppercase'>User Profile</h1>
            </div>
            <div className='grid lg:grid-cols-2 lg:mt-14'>
                <div className='flex justify-center lg:pt-0 pt-8'>
                    <div className='flex-col text-center'>
                        <div className='flex justify-center'>
                            <img src={userIcon} alt="User" className='w-10 lg:w-32 h-10 lg:h-32' />
                        </div>
                        {
                            changePassword ?
                                <p className='py-4 text-primary hover:text-secondary text-sm font-semibold cursor-pointer' onClick={handlePasswordChange}>User Informations</p> :
                                <p className='py-4 text-primary hover:text-secondary text-sm font-semibold cursor-pointer' onClick={handlePasswordChange}>Change password</p>
                        }
                        <LogoutUser />
                    </div>
                </div>

                <div className='mx-5 lg:mx-10 lg:pt-0 pt-8'>
                    {
                        changePassword ?
                            <ManagePassword setChangePassword={setChangePassword} /> :
                            <UserForm />
                    }
                </div>
            </div>
        </div>
    )
}

export default UserProfile