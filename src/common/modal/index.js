import React, { useState, useEffect } from 'react';
import './modal.scss';
import CloseModalIco from '../../assets/images/svg/closeModalIco';
import Language from './language';
import Currency from './currency';

export default function Modal({ isOpen, toggleModal, activeTab }) {
    const [currentTab, setCurrentTab] = useState(activeTab);

    useEffect(() => {
        if (isOpen) {
            setCurrentTab(activeTab);
        }
    }, [isOpen, activeTab]);

    const handleTabChange = (tab) => {
        setCurrentTab(tab);
    };

    // Add/remove no-scroll class on body when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        // Cleanup function to remove class when component unmounts or modal closes
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768 && isOpen) {
                toggleModal();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen, toggleModal]);

    return (
        <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={toggleModal}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}>
                <div className="close-btn-modal">
                    <button aria-label="close button" type="button" onClick={toggleModal}>
                        <CloseModalIco />
                    </button>
                </div>
                <div className="modal-content-div">
                    <div className="modal-selector">
                        <div
                            className={`modal-selector-box ${currentTab === 'language' ? 'active' : ''}`}
                            onClick={() => handleTabChange('language')}>
                            <span>Language and region</span>
                        </div>
                        <div
                            className={`modal-selector-box ${currentTab === 'currency' ? 'active' : ''}`}
                            onClick={() => handleTabChange('currency')}>
                            <span>Currency</span>
                        </div>
                    </div>

                    {currentTab === 'language' && <Language />}
                    {currentTab === 'currency' && <Currency />}
                </div>
            </div>
        </div>
    );
}
