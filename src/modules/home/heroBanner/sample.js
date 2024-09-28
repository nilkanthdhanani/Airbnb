import React, { useState } from 'react';
import './sample.scss';
import { five1, five2, five3, five4, four1, four2, four3, four4, one1, one2, one3, one4, six1, six2, six3, six4, three1, three2, three3, three4, two, two2, two3, two4 } from '../../../assets/images/image';
import RightScrollIco from '../../../assets/images/svg/rightScrollIco';
import LeftScrollIco from '../../../assets/images/svg/leftScrollIco';

export default function Sample() {
    const [currentIndex, setCurrentIndex] = useState([0, 0, 0, 0, 0, 0]);

    const imageSets = [
        [one1, one2, one3, one4],
        [two, two2, two3, two4],
        [three1, three2, three3, three4],
        [four1, four2, four3, four4],
        [five1, five2, five3, five4],
        [six1, six2, six3, six4],
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

    return (
        <div className='container'>
            <div className="grid">
                {imageSets.map((images, index) => (
                    <div className="grid-div" key={index}>
                        <div className="image-div">
                            <div
                                className="image-wrapper"
                                style={{
                                    transform: `translateX(-${currentIndex[index] * 100}%)`,
                                    transition: 'transform 0.5s ease-in-out',
                                    display: 'flex',
                                }}>
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
                            <div className="track-buttons">
                                {images.map((_, imgIndex) => (
                                    <button
                                        key={imgIndex}
                                        className={`track-btn ${currentIndex[index] === imgIndex ? 'active' : ''}`}
                                        onClick={() => handleTrackClick(index, imgIndex)}/>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
