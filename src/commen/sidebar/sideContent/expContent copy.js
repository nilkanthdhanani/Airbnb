import React from 'react';
import './sideContent.scss';
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

    return (
        <div className='stays-content'>
            <div className="stay-where">
                <div className="stay-where-search">
                    <h2>Where to?</h2>
                    <div className="stay-where-search-input">
                        <input type="text" id='search' placeholder="Search destinations" />
                        <ExploreIco />
                    </div>
                </div>
                <div className="upper-div">
                    <div className="stay-where-list">
                        <span>Suggested destinations</span>
                        <PlaceList places={suggestedPlaces} />
                    </div>
                </div>
                <div className="more-items"><DropIco /></div>
            </div>

            <div className="when">
                <h3>When</h3>
                <span>Add dates</span>
            </div>

            <div className="who">
                <h3>Who</h3>
                <span>Add guests</span>
            </div>
        </div>
    );
}
