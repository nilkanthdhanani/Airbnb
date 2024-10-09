import React, { useEffect, useState } from 'react';
import './uploadModal.scss';
import CloseModalIco from '../../assets/images/svg/closeModalIco';
import CopyIco from '../../assets/images/svg/copyIco';
import EmailIco from '../../assets/images/svg/emailIco';
import MessageIco from '../../assets/images/svg/messageIco';
import WhatsAppIco from '../../assets/images/svg/whatsappIco';
import MessengerIco from '../../assets/images/svg/messengerIco';
import FacebookIco2 from '../../assets/images/svg/facebookIco2';
import TwitterIco2 from '../../assets/images/svg/twitterIco2';
import MoreOptionIco from '../../assets/images/svg/moreOptionIco';
import { NavLink } from 'react-router-dom';

export default function UploadModal({ onClose, content }) {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const currentScrollY = window.scrollY;

        document.body.style.top = `-${currentScrollY}px`;
        document.body.classList.add('no-scroll');

        return () => {
            document.body.classList.remove('no-scroll');
            document.body.style.top = '';
            window.scrollTo(0, currentScrollY);
        };
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 500);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 576) {
                onClose();
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [onClose]);

    return (
        <div className="upload-modal-overlay" onClick={handleClose}>
            <div
                className={`upload-modal-content ${isClosing ? 'closing' : ''}`}
                onClick={(e) => e.stopPropagation()}>
                <div className="close-btn-modal">
                    <button aria-label="close button" type="button" onClick={handleClose}>
                        <CloseModalIco />
                    </button>
                </div>
                <h2>Share this experience</h2>
                <div className="upload-image-name">
                    <img src={content.image} alt="upload-modal-img" className="upload-modal-image" />
                    <h3>{content.h3}</h3>
                </div>
                <div className="upload-modal-grid">
                    <NavLink className="upload-modal-grid-box">
                        <CopyIco />
                        <h4>Copy Link</h4>
                    </NavLink>
                    <NavLink className="upload-modal-grid-box">
                        <EmailIco />
                        <h4>Email</h4>
                    </NavLink>
                    <NavLink className="upload-modal-grid-box">
                        <MessageIco />
                        <h4>Messages</h4>
                    </NavLink>
                    <NavLink to={"https://web.whatsapp.com/"} target='_blank' className="upload-modal-grid-box">
                        <WhatsAppIco />
                        <h4>WhatsApp</h4>
                    </NavLink>
                    <NavLink to={"https://www.messenger.com/"} target='_blank' className="upload-modal-grid-box">
                        <MessengerIco />
                        <h4>Messenger</h4>
                    </NavLink>
                    <NavLink to={"https://www.facebook.com/"} target='_blank' className="upload-modal-grid-box">
                        <FacebookIco2 />
                        <h4>Facebook</h4>
                    </NavLink>
                    <NavLink to={"https://x.com/"} target='_blank' className="upload-modal-grid-box">
                        <TwitterIco2 />
                        <h4>Twitter</h4>
                    </NavLink>
                    <NavLink className="upload-modal-grid-box">
                        <MoreOptionIco />
                        <h4>More options</h4>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
