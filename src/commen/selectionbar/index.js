import React, { useRef, useState, useEffect } from 'react';
import './selectionbar.scss';
import { beachfront, cabins, castles, caves, farms, icons, islands, luxe, omg, pools, rooms, tinyHomes, topWorld, views } from '../../assets/images/image';
import RightScrollIco from '../../assets/images/svg/rightScrollIco copy';
import LeftScrollIco from '../../assets/images/svg/leftScrollIco';

const selectionData = [
    { imgSrc: icons, text: 'Icons' },
    { imgSrc: views, text: 'Amazing views' },
    { imgSrc: pools, text: 'Amazing pools' },
    { imgSrc: farms, text: 'Farms' },
    { imgSrc: islands, text: 'Island' },
    { imgSrc: caves, text: 'Caves' },
    { imgSrc: omg, text: 'OMG!' },
    { imgSrc: luxe, text: 'Luxe' },
    { imgSrc: castles, text: 'Castles' },
    { imgSrc: beachfront, text: 'Beachfront' },
    { imgSrc: cabins, text: 'Cabins' },
    { imgSrc: rooms, text: 'Rooms' },
    { imgSrc: tinyHomes, text: 'Tiny Homes' },
    { imgSrc: topWorld, text: 'Top of the Worlds' },
    { imgSrc: icons, text: 'Icons' },
    { imgSrc: views, text: 'Amazing views' },
    { imgSrc: pools, text: 'Amazing pools' },
    { imgSrc: farms, text: 'Farms' },
    { imgSrc: islands, text: 'Island' },
    { imgSrc: caves, text: 'Caves' },
    { imgSrc: omg, text: 'OMG!' },
    { imgSrc: luxe, text: 'Luxe' },
    { imgSrc: castles, text: 'Castles' },
    { imgSrc: beachfront, text: 'Beachfront' },
    { imgSrc: cabins, text: 'Cabins' },
    { imgSrc: rooms, text: 'Rooms' },
    { imgSrc: tinyHomes, text: 'Tiny Homes' },
    { imgSrc: topWorld, text: 'Top of the Worlds' },
];

export default function Selectionbar() {
    const sliderRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const checkScrollPosition = () => {
        const slider = sliderRef.current;
        if (slider) {
            // Check if at start
            setShowLeft(slider.scrollLeft > 0);

            // Check if at end
            setShowRight(slider.scrollLeft + slider.offsetWidth < slider.scrollWidth);
        }
    };

    const handleScrollLeft = () => {
        sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const handleScrollRight = () => {
        sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    useEffect(() => {
        const slider = sliderRef.current;

        // Check the scroll position on mount and on scroll
        if (slider) {
            checkScrollPosition();
            slider.addEventListener('scroll', checkScrollPosition);
        }

        return () => {
            if (slider) {
                slider.removeEventListener('scroll', checkScrollPosition);
            }
        };
    }, []);

    return (
        <div className="selectionbar">
            <div className="container">
                <div className="selection-main">
                    {showLeft && (
                        <div className="left-scroll">
                            <button type="button" onClick={handleScrollLeft}>
                                <LeftScrollIco />
                            </button>
                        </div>
                    )}
                    {showRight && (
                        <div className="right-scroll">
                            <button type="button" onClick={handleScrollRight}>
                                <RightScrollIco />
                            </button>
                        </div>
                    )}
                    <div className="selection-slider" ref={sliderRef}>
                        {selectionData.map(({ imgSrc, text }, index) => (
                            <div key={index} className="selection-box">
                                <img src={imgSrc} alt={text} />
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
