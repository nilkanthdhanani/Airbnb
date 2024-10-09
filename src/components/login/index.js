import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './login.scss';
import SelectDropIco from '../../assets/images/svg/selectDropIco';
import { NavLink } from 'react-router-dom';
import LoginFacebook from '../../assets/images/svg/loginFacebook';
import LoginGoogle from '../../assets/images/svg/loginGoogle';
import LoginApple from '../../assets/images/svg/loginApple';
import LoginEmail from '../../assets/images/svg/loginEmail';

export default function Login() {
    const [phoneValue, setPhoneValue] = useState('');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        if (windowWidth > 768) {
            navigate('/');
        }

            return () => window.removeEventListener('resize', handleResize);
    }, [windowWidth, navigate]);

    return windowWidth <= 768 ? (
        <div className="login">
            <div className="login-close-btn">
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
                    <p>
                        We’ll call or text you to confirm your number. Standard message and data rates apply.{' '}
                        <NavLink>Privacy Policy</NavLink>
                    </p>
                    <button>Continue</button>
                </form>
                <div className="login-or"><span>or</span></div>
                <div className="login-types">
                    <NavLink><LoginFacebook />Continue with Facebook</NavLink>
                    <NavLink><LoginGoogle />Continue with Google</NavLink>
                    <NavLink><LoginApple />Continue with Apple</NavLink>
                    <NavLink><LoginEmail />Continue with email</NavLink>
                </div>
            </div>
            <div className="need-help">
                <NavLink>Need help?</NavLink>
            </div>
        </div>
    ) : null;
}
