import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

const CustomModal = ({ isOpen, closeModal, children }) => {
    const modalStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            borderRadius: '8px', // Optional: You can set a specific border radius
            padding: '20px', // Optional: Add padding to the modal content
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            style={modalStyle}
            className="rounded"
        >
            <div className="p-3 bg-white rounded-xl">
                {/* <button className="close-btn" onClick={closeModal}>
                    &times;
                </button> */}
                {children}
            </div>
        </Modal>
    );
};

export default CustomModal;
