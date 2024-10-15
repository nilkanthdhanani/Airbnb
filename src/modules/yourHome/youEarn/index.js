import React, { useState } from "react";
import "./youEarn.scss";
import { NavLink } from "react-router-dom";
import SearchIco from '../../../assets/images/svg/searchIco';

export default function YouEarn() {
    const [earnings, setEarnings] = useState(16450);
    const [nights, setNights] = useState(7);
    const perNight = 2350;

    const handleRangeChange = (event) => {
        const value = event.target.value;
        setNights(value);
        setEarnings(value * perNight);
    };

    return (
        <section className="you-earn">
            <div className="container2">
                <div className="you-earn-content">
                    <div className="you-earn-content-range">
                        <div className="earn-div">
                            <div className="earn-div-count">
                                <h1><span>Airbnb it.</span>You could earn</h1>
                                <div className="range-number">₹{earnings.toLocaleString()}</div>
                                <p><NavLink>{nights} nights</NavLink> at an estimated ₹{perNight} a night</p>
                                <div className="range">
                                    <input
                                        type="range"
                                        min="1"
                                        max="30"
                                        value={nights}
                                        onChange={handleRangeChange}
                                    />
                                </div>
                            </div>
                            <div className="earn-learn">
                                <NavLink>Learn how we estimate your earnings</NavLink>
                            </div>
                            <button aria-label="header respo button" type='button'>
                                <SearchIco />
                                <div className="button-content">
                                    <p>Surat</p>
                                    <div className="button-span">
                                        <span>Entire place</span>
                                        <span>•</span>
                                        <span>2 bedrooms</span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="you-earn-content-map">
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d238132.67288296486!2d72.65747847665986!3d21.159440570118544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1728467236200!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
