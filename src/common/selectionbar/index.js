import React, { useRef, useState, useEffect } from 'react';
import './selectionbar.scss';
import { adapted, aframes, arctic, barns, beach, beachfront, bedBreakfast, boats, cabins, camper, camping, casas, castles, caves, chefKitchen, container, countryside, creative, cycladic, dammusi, desert, design, domes, eartHomes, farms, golfing, hanoks, historicalHomes, houseBoat, huts, icons, islands, lake, lakeFront, luxe, mansions, minsus, nationalParks, newkey, offGrid, omg, pianos, play, pools, raids, rooms, ryokans, ski, skilling, surfing, tinyHomes, topCities, topWorld, tower, tranding, treeHouse, tropical, trulli, views, vineYards, windmills, yurts } from '../../assets/images/image';
import RightScrollIco from '../../assets/images/svg/rightScrollIco';
import LeftScrollIco from '../../assets/images/svg/leftScrollIco';

const selectionData = [
    { imgSrc: adapted, text: 'Adapted' },
    { imgSrc: aframes, text: 'Aframes' },
    { imgSrc: arctic, text: 'Arctic' },
    { imgSrc: barns, text: 'Barns' },
    { imgSrc: beach, text: 'Beach' },
    { imgSrc: beachfront, text: 'Beachfront' },
    { imgSrc: bedBreakfast, text: 'BedBreakfast' },
    { imgSrc: boats, text: 'Boats' },
    { imgSrc: cabins, text: 'Cabins' },
    { imgSrc: camper, text: 'Camper' },
    { imgSrc: camping, text: 'Camping' },
    { imgSrc: casas, text: 'Casas' },
    { imgSrc: castles, text: 'Castles' },
    { imgSrc: caves, text: 'Caves' },
    { imgSrc: chefKitchen, text: 'ChefKitchen' },
    { imgSrc: container, text: 'Container' },
    { imgSrc: countryside, text: 'Countryside' },
    { imgSrc: creative, text: 'Creative' },
    { imgSrc: cycladic, text: 'Cycladic' },
    { imgSrc: dammusi, text: 'Dammusi' },
    { imgSrc: desert, text: 'Desert' },
    { imgSrc: design, text: 'Design' },
    { imgSrc: domes, text: 'Domes' },
    { imgSrc: eartHomes, text: 'EartHomes' },
    { imgSrc: farms, text: 'Farms' },
    { imgSrc: golfing, text: 'Golfing' },
    { imgSrc: hanoks, text: 'Hanoks' },
    { imgSrc: historicalHomes, text: 'HistoricalHomes' },
    { imgSrc: houseBoat, text: 'HouseBoat' },
    { imgSrc: huts, text: 'Huts' },
    { imgSrc: icons, text: 'Icons' },
    { imgSrc: islands, text: 'Islands' },
    { imgSrc: lake, text: 'Lake' },
    { imgSrc: lakeFront, text: 'LakeFront' },
    { imgSrc: luxe, text: 'Luxe' },
    { imgSrc: mansions, text: 'Mansions' },
    { imgSrc: minsus, text: 'Minsus' },
    { imgSrc: nationalParks, text: 'NationalParks' },
    { imgSrc: newkey, text: 'Newkey' },
    { imgSrc: offGrid, text: 'OffGrid' },
    { imgSrc: omg, text: 'Omg' },
    { imgSrc: pianos, text: 'Pianos' },
    { imgSrc: play, text: 'Play' },
    { imgSrc: pools, text: 'Pools' },
    { imgSrc: raids, text: 'Raids' },
    { imgSrc: rooms, text: 'Rooms' },
    { imgSrc: ryokans, text: 'Ryokans' },
    { imgSrc: ski, text: 'Ski' },
    { imgSrc: skilling, text: 'Skilling' },
    { imgSrc: surfing, text: 'Surfing' },
    { imgSrc: tinyHomes, text: 'TinyHomes' },
    { imgSrc: topCities, text: 'TopCities' },
    { imgSrc: topWorld, text: 'TopWorld' },
    { imgSrc: tower, text: 'Tower' },
    { imgSrc: tranding, text: 'Tranding' },
    { imgSrc: treeHouse, text: 'TreeHouse' },
    { imgSrc: tropical, text: 'Tropical' },
    { imgSrc: trulli, text: 'Trulli' },
    { imgSrc: views, text: 'Views' },
    { imgSrc: vineYards, text: 'VineYards' },
    { imgSrc: windmills, text: 'Windmills' },
    { imgSrc: yurts, text: 'Yurts' },
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
                            <button aria-label="left scroll button" type="button" onClick={scrollLeftBtn}>
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
                            <button aria-label="right scrollbutton" type="button" onClick={scrollRightBtn}>
                                <RightScrollIco />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
