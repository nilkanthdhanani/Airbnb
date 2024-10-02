import React, { useState, useRef } from 'react';
import './slider.scss';
import {
    one1, one2, one3, one4, two, two2, two3, two4, three1, three2, three3, three4, four1, four2, four3, four4, five1, five2, five3, five4, six1, six2, six3, six4, seven1, seven2, seven3, seven4, eight1, eight2, eight3, eight4, nine1, nine2, nine3, nine4, ten1, ten2, ten3, ten4, eleven1, eleven2, eleven3, eleven4, twelve1, twelve2, twelve3, twelve4, thirteen1, thirteen2, thirteen3, thirteen4, fourteen1, fourteen2, fourteen3, fourteen4, fifteen1, fifteen2, fifteen3, fifteen4, sixteen1, sixteen2, sixteen3, sixteen4,
} from '../../../assets/images/image';
import UploadIco from '../../../assets/images/svg/uploadIco';
import RightScrollIco from '../../../assets/images/svg/rightScrollIco';
import LeftScrollIco from '../../../assets/images/svg/leftScrollIco';

export default function Slider2() {
    const [currentIndex, setCurrentIndex] = useState(Array(16).fill(0));
    const [dragStartX, setDragStartX] = useState(null);
    const [dragging, setDragging] = useState(false);
    const imageWrapperRef = useRef(null);

    const imageSets = [
        [one1, one2, one3, one4],
        [two, two2, two3, two4],
        [three1, three2, three3, three4],
        [four1, four2, four3, four4],
        [five1, five2, five3, five4],
        [six1, six2, six3, six4],
        [seven1, seven2, seven3, seven4],
        [eight1, eight2, eight3, eight4],
        [nine1, nine2, nine3, nine4],
        [ten1, ten2, ten3, ten4],
        [eleven1, eleven2, eleven3, eleven4],
        [twelve1, twelve2, twelve3, twelve4],
        [thirteen1, thirteen2, thirteen3, thirteen4],
        [fourteen1, fourteen2, fourteen3, fourteen4],
        [fifteen1, fifteen2, fifteen3, fifteen4],
        [sixteen1, sixteen2, sixteen3, sixteen4],
    ];

    const textContent = [
        { h3: 'Live like Bollywood star Janhvi Kapoor', p: 'Hosted by Janhvi Kapoor', span: 'Sold out' },
        { h3: 'Open the Olympic Games at Musée d’Orsa', p: 'Hosted by Mathieu Lehanneur', span: 'Sold out' },
        { h3: 'Wake up in the Musée d’Orsay', p: 'Hosted by Mathieu Lehanneur', span: 'Sold out' },
        { h3: 'Make core memories with Inside Out 2', p: 'Hosted by Joy', span: 'Sold out' },
        { h3: 'Design your Incredibles Supersuit', p: 'Hosted by Edna Mode', span: 'Sold out' },
        { h3: 'Go on tour with Feid', p: 'Hosted by Feid', span: 'Sold out' },
        { h3: 'Game with Khaby Lame', p: 'Hosted by Khaby Lame', span: 'Sold out' },
        { h3: 'Crash at the X-Mansion', p: 'Hosted by Jubilee', span: 'Sold out' },
        { h3: 'Spend the night in the Ferrari Museum', p: 'Hosted by Marc Gené', span: 'Sold out' },
        { h3: 'Drift off in the Up house', p: 'Hosted by Carl Fredricksen', span: 'Sold out' },
        { h3: 'Shrek’s Swamp', p: 'Hosted by Donkey', span: 'Sold out' },
        { h3: 'Barbie’s Malibu DreamHouse, Ken’s Way', p: 'Hosted by Ken', span: 'Sold out' },
        { h3: 'Ted Lasso’s Favorite Pub', p: 'Hosted by Mae', span: 'Sold out' },
        { h3: 'Houseplant Retreat', p: 'Hosted by Seth Rogen', span: 'Sold out' },
        { h3: 'Home Alone Holiday', p: 'Hosted by Buzz', span: 'Sold out' },
        { h3: 'The Last Blockbuster', p: 'Hosted by Sandi', span: 'Sold out' },
    ];

    const handleScroll = (setIndex, direction) => {
        setCurrentIndex((prev) => {
            const newIndexes = [...prev];
            const maxIndex = imageSets[setIndex].length - 1;
            if (direction === -1 && prev[setIndex] > 0) {
                newIndexes[setIndex] -= 1;
            } else if (direction === 1 && prev[setIndex] < maxIndex) {
                newIndexes[setIndex] += 1;
            }
            return newIndexes;
        });
    };

    const handleTrackClick = (setIndex, newIndex) => {
        setCurrentIndex((prev) => {
            const newIndexes = [...prev];
            newIndexes[setIndex] = newIndex;
            return newIndexes;
        });
    };

    const handleMouseDown = (e) => {
        setDragStartX(e.clientX);
        setDragging(true);
    };

    const handleMouseMove = (e, setIndex) => {
        if (!dragging) return;
        const movement = dragStartX - e.clientX;
        if (movement > 50) {
            handleScroll(setIndex, 1);
            setDragging(false);
        } else if (movement < -50) {
            handleScroll(setIndex, -1);
            setDragging(false);
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    const handleTouchStart = (e) => {
        setDragStartX(e.touches[0].clientX);
        setDragging(true);
    };

    const handleTouchMove = (e, setIndex) => {
        if (!dragging) return;
        const movement = dragStartX - e.touches[0].clientX;
        if (movement > 50) {
            handleScroll(setIndex, 1);
            setDragging(false);
        } else if (movement < -50) {
            handleScroll(setIndex, -1);
            setDragging(false);
        }
    };

    const handleTouchEnd = () => {
        setDragging(false);
    };

    return (
        <div className="past-expireance">
            <div className='container'>
                <h2>Past experiences</h2>
                <div className="slider">
                    {imageSets.map((images, index) => (
                        <div className="slider-div" key={index}>
                            <div className="slider-image-div">
                                <div className="upload">
                                    <UploadIco />
                                </div>
                                <div
                                    className="image-wrapper"
                                    style={{
                                        transform: `translateX(-${currentIndex[index] * 100}%)`,
                                        transition: dragging ? 'none' : 'transform 0.5s ease-in-out',
                                        display: 'flex',
                                    }}
                                    ref={imageWrapperRef}
                                    onMouseDown={handleMouseDown}
                                    onMouseMove={(e) => handleMouseMove(e, index)}
                                    onMouseUp={handleMouseUp}
                                    onMouseLeave={handleMouseUp}
                                    onTouchStart={handleTouchStart}
                                    onTouchMove={(e) => handleTouchMove(e, index)}
                                    onTouchEnd={handleTouchEnd}>
                                    {images.map((image, imgIndex) => (
                                        <img key={imgIndex} src={image} alt={`card${imgIndex}`} />
                                    ))}
                                </div>
                                <div className="left-scroll">
                                    <button aria-label="left scroll button"
                                        type="button"
                                        onClick={() => handleScroll(index, -1)}
                                        disabled={currentIndex[index] === 0}>
                                        <LeftScrollIco />
                                    </button>
                                </div>
                                <div className="right-scroll">
                                    <button aria-label="right scroll button"
                                        type="button"
                                        onClick={() => handleScroll(index, 1)}
                                        disabled={currentIndex[index] === images.length - 1}>
                                        <RightScrollIco />
                                    </button>
                                </div>
                                <div className="track-buttons">
                                    {images.map((_, imgIndex) => (
                                        <button  aria-label="track button"
                                            key={imgIndex}
                                            className={`track-btn ${currentIndex[index] === imgIndex ? 'active' : ''}`}
                                            onClick={() => handleTrackClick(index, imgIndex)} />
                                    ))}
                                </div>
                            </div>
                            <div className="slider-div-text">
                                <h3>{textContent[index].h3}</h3>
                                <p>{textContent[index].p}</p>
                                <span>{textContent[index].span}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
