import { useState } from 'react'
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import CustomModal from './Modal';
import { setLogout } from '../../state/slices/userSlice';

const LogoutUser = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const dispatch = useDispatch()

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleLogout = () => {
        dispatch(setLogout());
        toast.success("Logged out successfully")
        window.location.pathname = "/login"
        closeModal()
    }

    return (
        <div>
            <p className='text-red-600 hover:text-red-700 text-sm font-semibold cursor-pointer' onClick={openModal}>Logout</p>

            <CustomModal isOpen={modalIsOpen} closeModal={closeModal}>
                <div className='text-center p-4 w-60'>
                    <p className='text-sm text-gray-600'>Ready to leave? <br /> Confirm your logout below.</p>
                    <div className='flex justify-end gap-5 mt-5'>
                        <button className='text-primary text-sm font-semibold' onClick={closeModal}>Cancel</button>
                        <button className='text-red-600 text-sm font-semibold' onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </CustomModal>
        </div>
    )
}

export default LogoutUser