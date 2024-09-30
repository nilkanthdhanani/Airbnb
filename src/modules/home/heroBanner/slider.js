import React, { useState, useRef } from 'react';
import './slider.scss';
import {
    mainBlock1, mainBlock2, polly1, polly2, polly3, polly4, polly6, polly7, polly8, polly9, polly10, polly11, polly12, kevin1, kevin2, kevin3, kevin4, train1, train2, train3, train4, polly5
} from '../../../assets/images/image';
import UploadIco from '../../../assets/images/svg/uploadIco';
import RightScrollIco from '../../../assets/images/svg/rightScrollIco';
import LeftScrollIco from '../../../assets/images/svg/leftScrollIco';

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState([0, 0, 0, 0, 0, 0]);
    const [dragStartX, setDragStartX] = useState(null);
    const [dragging, setDragging] = useState(false);
    const imageWrapperRef = useRef(null);

    const imageSets = [
        [mainBlock1],
        [mainBlock2],
        [polly1, polly2, polly3, polly4, polly6, polly7, polly8, polly9, polly10, polly11, polly12],
        [polly2, polly3, polly4, polly5],
        [kevin1, kevin2, kevin3, kevin4],
        [train1, train2, train3, train4],
    ];

    const textContent = [
        { h3: 'Stay in Prince’s Purple Rain house', p: 'Hosted by Wendy and Lisa', span: 'Coming September' },
        { h3: 'Join a living room session with Doja', p: 'Hosted by Doja Cat', span: 'Coming October' },
        { h3: 'Sleepover at Polly Pocket’s Compact', p: 'Hosted by Polly Pocket', span: 'Sold out' },
        { h3: 'Playdate at Polly Pocket’s Compact', p: 'Hosted by Polly Pocket', span: 'Sold out' },
        { h3: 'Go VIP with Kevin Hart', p: 'Hosted by Kevin Hart', span: 'Sold out' },
        { h3: 'Train at the X-Mansion', p: 'Hosted by Jubilee', span: 'Sold out' },
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
                                    <button
                                        type="button"
                                        onClick={() => handleScroll(index, -1)}
                                        disabled={currentIndex[index] === 0}>
                                        <LeftScrollIco />
                                    </button>
                                </div>
                                <div className="right-scroll">
                                    <button
                                        type="button"
                                        onClick={() => handleScroll(index, 1)}
                                        disabled={currentIndex[index] === images.length - 1}>
                                        <RightScrollIco />
                                    </button>
                                </div>

                                {images.length > 1 && (
                                    <div className="track-buttons">
                                        {images.map((_, imgIndex) => (
                                            <button
                                                key={imgIndex}
                                                className={`track-btn ${currentIndex[index] === imgIndex ? 'active' : ''}`}
                                                onClick={() => handleTrackClick(index, imgIndex)} />
                                        ))}
                                    </div>
                                )}
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
