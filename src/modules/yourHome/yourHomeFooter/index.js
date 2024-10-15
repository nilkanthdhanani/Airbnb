import React, { useEffect, useState } from 'react'
import './yourHomeFooter.scss'
import { NavLink } from 'react-router-dom';
import WorldIco from '../../../assets/images/svg/worldIco';
import FacebookIco from '../../../assets/images/svg/facebookIco';
import TwitterIco from '../../../assets/images/svg/twitterIco';
import InstagramIco from '../../../assets/images/svg/instagramIco';
import Modal from '../../../components/modal';

export default function YourHomeFooter() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('language');

    const toggleModal = (tab) => {
        setActiveTab(tab);
        setIsModalOpen((prev) => {
            const newIsModalOpen = !prev;
            if (newIsModalOpen) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
            return newIsModalOpen;
        });
    };

    useEffect(() => {
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    return (
        <div className='your-home-footer'>
            <div className="container2">
                <div className="footer-list-link">
                    <div className="footer-link-box">
                        <h3>Support</h3>
                        <NavLink>Help Centre</NavLink>
                        <NavLink>AirCover</NavLink>
                        <NavLink>Anti-discrimination</NavLink>
                        <NavLink>Disability support</NavLink>
                        <NavLink>Cancellation options</NavLink>
                        <NavLink>Report neighbourhood concern</NavLink>
                    </div>
                    <div className="footer-link-box">
                        <h3>Hosting</h3>
                        <NavLink>Airbnb your home</NavLink>
                        <NavLink>AirCover for Hosts</NavLink>
                        <NavLink>Hosting resources</NavLink>
                        <NavLink>Community forum</NavLink>
                        <NavLink>Hosting responsibly</NavLink>
                        <NavLink>Join a free Hosting class</NavLink>
                    </div>
                    <div className="footer-link-box">
                        <h3>Airbnb</h3>
                        <NavLink>Newsroom</NavLink>
                        <NavLink>New features</NavLink>
                        <NavLink>Careers</NavLink>
                        <NavLink>Investors</NavLink>
                        <NavLink>Airbnb.org emergency stays</NavLink>
                    </div>
                </div>
                <div className="footer-list-copy">
                    <div className="footer-copy-div">
                        <p>© 2024 Airbnb, Inc.</p>
                        <div className="term-list">
                            <span>·</span>
                            <NavLink>Privacy</NavLink>
                            <span>·</span>
                            <NavLink>Terms</NavLink>
                            <span>·</span>
                            <NavLink>Sitemap</NavLink>
                            <span>·</span>
                            <NavLink>Company details</NavLink>
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

