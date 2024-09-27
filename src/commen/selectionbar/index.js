import React, { useRef, useState, useEffect } from 'react';
import './selectionbar.scss';
import { beachfront, cabins, castles, caves, farms, icons, islands, luxe, omg, pools, rooms, tinyHomes, topWorld, views } from '../../assets/images/image';
import RightScrollIco from '../../assets/images/svg/rightScrollIco';
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
    const [showLeftScroll, setShowLeftScroll] = useState(false);
    const [showRightScroll, setShowRightScroll] = useState(true);

    const scrollDistance = 200; // You can adjust this value

    const handleScroll = () => {
        const slider = sliderRef.current;
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

        setShowLeftScroll(slider.scrollLeft > 0);
        setShowRightScroll(slider.scrollLeft < maxScrollLeft);
    };

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: scrollDistance, behavior: 'smooth' });
    };

    useEffect(() => {
        const slider = sliderRef.current;
        slider.addEventListener('scroll', handleScroll);
        return () => slider.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="selectionbar">
            <div className="container">
                <div className="selection-main">
                    {showLeftScroll && (
                        <div className="left-scroll">
                            <button type="button" onClick={scrollLeft}>
                                <LeftScrollIco />
                            </button>
                        </div>
                    )}
                    <div className="selection-slider" ref={sliderRef}>
                        {selectionData.map(({ imgSrc, text }, index) => (
                            <div className="slider-box" key={index}>
                                <div className="selection-box">
                                    <img src={imgSrc} alt={text} />
                                    <span>{text}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {showRightScroll && (
                        <div className="right-scroll">
                            <button type="button" onClick={scrollRight}>
                                <RightScrollIco />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
