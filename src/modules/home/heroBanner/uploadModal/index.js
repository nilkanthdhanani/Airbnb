import React, { useEffect } from 'react'
import './uploadModal.scss'
import CloseModalIco from '../../../../assets/images/svg/closeModalIco';

const Modal = ({ onClose, content }) => {
    useEffect(() => {
        document.body.classList.add('no-scroll');
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    return (
        <div className="upload-modal-overlay" onClick={onClose}>
            <div className="upload-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="close-btn-modal">
                    <button aria-label="close button" type="button" onClick={onClose}>
                        <CloseModalIco />
                    </button>
                </div>
                <h2>Share this experience</h2>
                <div className="upload-image-name">
                    <img src={content.image} alt="upload-modal-img" className="upload-modal-image" />
                    <h3>{content.h3}</h3>
                </div>
            </div>
        </div>
    );
};

export default Modal;
