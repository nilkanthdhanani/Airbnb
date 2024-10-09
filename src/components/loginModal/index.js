import React, { useEffect, useState } from "react";
import './loginModal.scss';
import CloseModalIco from '../../assets/images/svg/closeModalIco';
import SelectDropIco from '../../assets/images/svg/selectDropIco';
import { NavLink } from 'react-router-dom';
import LoginFacebook from '../../assets/images/svg/loginFacebook';
import LoginGoogle from '../../assets/images/svg/loginGoogle';
import LoginApple from '../../assets/images/svg/loginApple';
import LoginEmail from '../../assets/images/svg/loginEmail';

export default function LoginModal({ isOpen, toggleLoginModal }) {
    const [phoneValue, setPhoneValue] = useState('');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768 && isOpen) {
                toggleLoginModal();
            }
        };

        const toggleNoScroll = () => {
            if (isOpen) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
        };

        window.addEventListener('resize', handleResize);
        toggleNoScroll();

        return () => {
            window.removeEventListener('resize', handleResize);
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen, toggleLoginModal]);

    return (
        <div className={`login-modal-overlay ${isOpen ? 'open' : ''}`} onClick={toggleLoginModal}>
            <div
                className="login-modal-content"
                onClick={(e) => e.stopPropagation()}>
                <div className="login-close-btn">
                    <button aria-label="close button" type="button" onClick={toggleLoginModal}>
                        <CloseModalIco />
                    </button>
                    <span>Log in or sign up</span>
                </div>
                <div className="login-modal-content-div">
                    <h2>Welcome to Airbnb</h2>
                    <form>
                        <div className="login-select">
                            <span>Country/Region</span>
                            <SelectDropIco />
                            <select>
                                <option>India (+91)</option>
                                <option>United States (+1)</option>
                                <option>Germany (+49)</option>
                                <option>France (+33)</option>
                                <option>Japan (+81)</option>
                            </select>
                        </div>
                        <div className={`login-input ${phoneValue ? 'has-value' : ''}`}>
                            <input
                                type="number"
                                value={phoneValue}
                                onChange={(e) => setPhoneValue(e.target.value)}
                                required
                            />
                            <span className="placeholder">Phone Number</span>
                            <span className="country-code">+91</span>
                        </div>
                        <p>We’ll call or text you to confirm your number. Standard message and data rates apply. <NavLink>Privacy Policy</NavLink> </p>
                        <button>Continue</button>
                    </form>
                    <div className="login-or"><span>or</span></div>
                    <div className="login-types">
                        <NavLink><LoginFacebook />Countinue with Facebook</NavLink>
                        <NavLink><LoginGoogle />Countinue with Google</NavLink>
                        <NavLink><LoginApple />Countinue with Apple</NavLink>
                        <NavLink><LoginEmail />Countinue with email</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
