import { useDispatch } from 'react-redux'
import { deleteNote } from '../../services/apiCalls/note';
import { setLoading, setRefetch } from '../../state/slices/userSlice';
import CustomModal from './Modal';
import { useState } from 'react';

const DeleteNote = ({noteId}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const dispatch = useDispatch()

    const openModal = (event) => {
        event.preventDefault();
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleDelete = async() => {
        try {
            dispatch(setLoading(true))
            await deleteNote(noteId)
        } catch (error) {
            console.error(error)
        } finally {
            dispatch(setRefetch())
            closeModal()
        }
        
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