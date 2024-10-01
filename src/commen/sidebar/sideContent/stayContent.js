import React, { useState } from 'react'
import './sideContent.scss'
import { placeIco1, placeIco10, placeIco11, placeIco12, placeIco13, placeIco14, placeIco15, placeIco16, placeIco17, placeIco18, placeIco19, placeIco2, placeIco20, placeIco3, placeIco4, placeIco5, placeIco6, placeIco7, placeIco8, placeIco9 } from '../../../assets/images/image';
import ExploreIco from '../../../assets/images/svg/exploreIco';
import DropIco from '../../../assets/images/svg/dropIco';

const places = [
    { ico: placeIco19, title: "Mumbai", desc: "Any week" },
    { ico: placeIco18, title: "Udaipur", desc: "Any week" }
];

const suggestedPlaces = [
    { ico: placeIco1, title: "North Goa, Goa", desc: "Guests interested in Mumbai also looked here" },
    { ico: placeIco2, title: "Jaipur, Rajasthan", desc: "Guests interested in Udaipur also looked here" },
    { ico: placeIco3, title: "Lonavala, Maharashtra", desc: "A short distance from your Mumbai search" },
    { ico: placeIco4, title: "New Delhi, Delhi", desc: "For sights like India Gate" },
    { ico: placeIco5, title: "Pune City, Maharashtra", desc: "Guests interested in Mumbai also looked here" },
    { ico: placeIco6, title: "South Goa, Goa", desc: "Guests interested in Udaipur also looked here" },
    { ico: placeIco7, title: "Calangute, Goa", desc: "For its seaside allure" },
    { ico: placeIco8, title: "Manali, Himachal Pradesh", desc: "For nature lovers" },
    { ico: placeIco9, title: "Rishikesh, Uttarakhand", desc: "For nature lovers" },
    { ico: placeIco10, title: "Puducherry, Puducherry", desc: "For sights like Sri Aurobindo Ashram" },
    { ico: placeIco11, title: "Mount Abu, Rajasthan", desc: "A hidden gem" },
    { ico: placeIco12, title: "Jodhpur, Rajasthan", desc: "Guests interested in Udaipur also looked here" },
    { ico: placeIco13, title: "Shimla, Himachal Pradesh", desc: "Great for winter getaways" },
    { ico: placeIco14, title: "Ujjain, Madhya Pradesh", desc: "Off the beaten path" },
    { ico: placeIco15, title: "Alibag, Maharashtra", desc: "A short distance from your Mumbai search" },
    { ico: placeIco16, title: "Greater Noida, Uttar Pradesh", desc: "A hidden gem" },
    { ico: placeIco17, title: "Anjuna, Goa", desc: "For its bustling nightlife" },
    { ico: placeIco18, title: "Dehradun, Uttarakhand", desc: "Guests interested in Udaipur also looked here" },
    { ico: placeIco19, title: "Mahabaleshwar, Maharashtra", desc: "Off the beaten path" },
    { ico: placeIco20, title: "Andheri, Maharashtra", desc: "A short distance from your Mumbai search" }
];

const PlaceList = ({ places }) => places.map(({ ico, title, desc }, i) => (
    <div className="place-list" key={i}>
        <img src={ico} alt="place" />
        <div className="place-list-text">
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    </div>
));

export default function StayContent() {
    const [activeSection, setActiveSection] = useState('where');

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className='stays-content'>
            {activeSection !== 'where' && (
                <div className="where" onClick={() => toggleSection('where')}>
                    <h3>Where</h3>
                    <span>{activeSection === 'where' ? '-' : "I'm Flexible"}</span>
                </div>
            )}
            {activeSection === 'where' && (
                <div className="stay-where">
                    <div className="stay-where-search">
                        <h2>Where to?</h2>
                        <div className="stay-where-search-input">
                            <input type="text" id='search' placeholder="Search destinations" />
                            <ExploreIco />
                        </div>
                    </div>
                    <div className="stay-where-list">
                        <span>Recent searches</span>
                        <PlaceList places={places} />
                    </div>
                    <div className="stay-where-list">
                        <span>Suggested destinations</span>
                        <PlaceList places={suggestedPlaces} />
                    </div>
                    <div className="more-items"><DropIco /></div>
                </div>
            )}

            {activeSection !== 'when' && (
                <div className="when" onClick={() => toggleSection('when')}>
                    <h3>When</h3>
                    <span>{activeSection === 'when' ? '-' : 'Add dates'}</span>
                </div>
            )}
            {activeSection === 'when' && (
                <div className="stay-when">
                    <div className="stay-where-search">
                        <h2>When’s your trip?</h2>
                        <div className="stay-where-search-input">
                            <input type="text" id='search' placeholder="Search destinations" />
                            <ExploreIco />
                        </div>
                    </div>
                    <div className="stay-where-list">
                        <span>Recent searches</span>
                        <PlaceList places={places} />
                    </div>
                    <div className="stay-where-list">
                        <span>Suggested destinations</span>
                        <PlaceList places={suggestedPlaces} />
                    </div>
                    <div className="more-items"><DropIco /></div>
                </div>
            )}

            {activeSection !== 'who' && (
                <div className="who" onClick={() => toggleSection('who')}>
                    <h3>Who</h3>
                    <span>{activeSection === 'who' ? '-' : 'Add guests'}</span>
                </div>
            )}
            {activeSection === 'who' && (
                <div className="stay-who">
                    <div className="stay-where-search">
                        <h2>Who’s coming?</h2>
                        <div className="stay-where-search-input">
                            <input type="text" id='search' placeholder="Search destinations" />
                            <ExploreIco />
                        </div>
                    </div>
                    <div className="stay-where-list">
                        <span>Recent searches</span>
                        <PlaceList places={places} />
                    </div>
                    <div className="stay-where-list">
                        <span>Suggested destinations</span>
                        <PlaceList places={suggestedPlaces} />
                    </div>
                    <div className="more-items"><DropIco /></div>
                </div>
            )}
        </div>
    );
}
