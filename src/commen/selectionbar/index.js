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
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const scrollDistance = 200;

    const handleScroll = () => {
        const slider = sliderRef.current;
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

        setShowLeftScroll(slider.scrollLeft > 0);
        setShowRightScroll(slider.scrollLeft < maxScrollLeft);
    };

    const scrollLeftBtn = () => {
        sliderRef.current.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
    };

    const scrollRightBtn = () => {
        sliderRef.current.scrollBy({ left: scrollDistance, behavior: 'smooth' });
    };

    const handleMouseDown = (e) => {
        const slider = sliderRef.current;
        setIsDragging(true);
        setStartX(e.pageX - slider.offsetLeft);
        setScrollLeft(slider.scrollLeft);
        slider.classList.add('dragging');
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const slider = sliderRef.current;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1;
        slider.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        sliderRef.current.classList.remove('dragging');
    };

    const handleTouchStart = (e) => {
        const slider = sliderRef.current;
        setIsDragging(true);
        setStartX(e.touches[0].pageX - slider.offsetLeft);
        setScrollLeft(slider.scrollLeft);
        slider.classList.add('dragging');
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const slider = sliderRef.current;
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 1;
        slider.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        sliderRef.current.classList.remove('dragging');
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
                            <button type="button" onClick={scrollLeftBtn}>
                                <LeftScrollIco />
                            </button>
                        </div>
                    )}
                    <div
                        className="selection-slider"
                        ref={sliderRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}>
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
                            <button type="button" onClick={scrollRightBtn}>
                                <RightScrollIco />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
