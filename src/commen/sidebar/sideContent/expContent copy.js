import React, { useState } from 'react'
import './sideContent.scss'
import { placeIco21, placeIco22, placeIco23, placeIco24, placeIco25, placeIco26, placeIco27, placeIco28, placeIco29, placeIco30, } from '../../../assets/images/image';
import ExploreIco from '../../../assets/images/svg/exploreIco';
import DropIco from '../../../assets/images/svg/dropIco';

const suggestedPlaces = [
    { ico: placeIco21, title: "Los Angeles, United States" },
    { ico: placeIco22, title: "New York City, United States" },
    { ico: placeIco23, title: "Miami Beach, United States" },
    { ico: placeIco24, title: "San Francisco, United States" },
    { ico: placeIco25, title: "London, United Kingdom" },
    { ico: placeIco26, title: "Rome, Italy" },
    { ico: placeIco27, title: "Paris, France" },
    { ico: placeIco28, title: "Mexico City, Mexico" },
    { ico: placeIco29, title: "Florence, Italy" },
    { ico: placeIco30, title: "Lisbon, Portugal" }
];

const PlaceList = ({ places }) => places.map(({ ico, title }, i) => (
    <div className="place-list" key={i}>
        <img src={ico} alt="place" />
        <div className="place-list-text">
            <h3>{title}</h3>
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
                        <span>Suggested destinations</span>
                        <PlaceList places={suggestedPlaces} />
                    </div>
                    <div className="more-items"><DropIco /></div>
                </div>
            )}
        </div>
    );
}
