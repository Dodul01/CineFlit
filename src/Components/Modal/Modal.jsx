import React, { useContext, useState } from 'react';
import './Modal.css';
import { AppContext } from '../../AppContext/AppContextProvider';
const Modal = ({ children }) => {
    const { isModalOpen, setIsModalOpen } = useContext(AppContext)

    const modalStyles = {
        display: isModalOpen ? 'block' : 'none',
    };

    return (
        <div className="modal" style={modalStyles}>
            <div className="modal-content">
                <span className="close" onClick={()=> setIsModalOpen(!isModalOpen)}>&times;</span>
                {children}
            </div>
        </div>
    );
};

export default Modal;
