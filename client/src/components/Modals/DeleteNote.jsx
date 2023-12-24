import { useState } from 'react'
import toast from 'react-hot-toast';
import CustomModal from './Modal';

const DeleteNote = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = (event) => {
        event.preventDefault();
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleDelete = () => {
        toast.success("Note deleted successfully")
        closeModal()
    }

    return (
        <div>
            <h2 className='font-medium text-xs text-red-600 sm:text-sm py-2 cursor-pointer' onClick={openModal}>Delete</h2>

            <CustomModal isOpen={modalIsOpen} closeModal={closeModal}>
                <div className='text-center p-4'>
                    <p className='text-sm text-gray-600'>Confirm deletion? <br /> This note will be permanently removed <br /> from your account.</p>
                    <div className='flex justify-end gap-5 mt-5'>
                        <button className='text-primary text-sm font-semibold' onClick={closeModal}>Cancel</button>
                        <button className='text-red-600 text-sm font-semibold' onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </CustomModal>
        </div>
    )
}

export default DeleteNote