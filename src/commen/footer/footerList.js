import React, { useState } from 'react';
import './footer.scss';
import { NavLink } from 'react-router-dom';
import WorldIco from '../../assets/images/svg/worldIco';
import FacebookIco from '../../assets/images/svg/facebookIco';
import TwitterIco from '../../assets/images/svg/twitterIco';
import InstagramIco from '../../assets/images/svg/instagramIco';
import Modal from '../modal';

export default function FooterList() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('language');

    const toggleModal = (tab) => {
        setActiveTab(tab);
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className='footer-list'>
            <div className="container-footer">
                <div className="footer-list-link">
                    <div className="footer-link-box">
                        <h3>Support</h3>
                        <NavLink to={'/'}>Help Centre</NavLink>
                        <NavLink to={'/'}>AirCover</NavLink>
                        <NavLink to={'/'}>Anti-discrimination</NavLink>
                        <NavLink to={'/'}>Disability support</NavLink>
                        <NavLink to={'/'}>Cancellation options</NavLink>
                        <NavLink to={'/'}>Report neighbourhood concern</NavLink>
                    </div>
                    <div className="footer-link-box">
                        <h3>Hosting</h3>
                        <NavLink to={'/'}>Airbnb your home</NavLink>
                        <NavLink to={'/'}>AirCover for Hosts</NavLink>
                        <NavLink to={'/'}>Hosting resources</NavLink>
                        <NavLink to={'/'}>Community forum</NavLink>
                        <NavLink to={'/'}>Hosting responsibly</NavLink>
                        <NavLink to={'/'}>Join a free Hosting class</NavLink>
                    </div>
                    <div className="footer-link-box">
                        <h3>Airbnb</h3>
                        <NavLink to={'/'}>Newsroom</NavLink>
                        <NavLink to={'/'}>New features</NavLink>
                        <NavLink to={'/'}>Careers</NavLink>
                        <NavLink to={'/'}>Investors</NavLink>
                        <NavLink to={'/'}>Airbnb.org emergency stays</NavLink>
                    </div>
                </div>
                <div className="footer-list-copy">
                    <div className="footer-copy-div">
                        <p>© 2024 Airbnb, Inc.</p>
                        <div className="term-list">
                            <span>·</span>
                            <NavLink to={'/'}>Privacy</NavLink>
                            <span>·</span>
                            <NavLink to={'/'}>Terms</NavLink>
                            <span>·</span>
                            <NavLink to={'/'}>Sitemap</NavLink>
                            <span>·</span>
                            <NavLink to={'/'}>Company details</NavLink>
                        </div>
                    </div>
                    <div className="footer-copy-div2">
                        <div className="footer-leg" onClick={() => toggleModal('language')}>
                            <WorldIco />
                            <h4>English (IN)</h4>
                        </div>
                        <div className="footer-leg" onClick={() => toggleModal('currency')}>
                            <span>₹</span>
                            <h4> INR</h4>
                        </div>
                        <div className="footer-media">
                            <NavLink to={'https://www.facebook.com/AirbnbIndia'} target='_blank'><FacebookIco /> </NavLink>
                            <NavLink to={'https://x.com/airbnb_in'} target='_blank'><TwitterIco /> </NavLink>
                            <NavLink to={'https://www.instagram.com/airbnb/'} target='_blank'><InstagramIco /> </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} toggleModal={toggleModal} activeTab={activeTab} />
        </div>
    );
}
