import React, { useState } from 'react';
import './heroBanner.scss';
import {
  mainBlock1, mainBlock2, polly1, polly2, polly3, polly4, polly6, polly7, polly8, polly9, polly10, polly11, polly12, kevin1, kevin2, kevin3, kevin4, train1, train2, train3, train4, polly5
} from '../../../assets/images/image';
import UploadIco from '../../../assets/images/svg/uploadIco';
import RightScrollIco from '../../../assets/images/svg/rightScrollIco';
import LeftScrollIco from '../../../assets/images/svg/leftScrollIco';

const pollyImages = [polly1, polly2, polly3, polly4, polly6, polly7, polly8, polly9, polly10, polly11, polly12];
const playImages = [polly2, polly3, polly4, polly5];
const kevinImages = [kevin1, kevin2, kevin3, kevin4];
const trainImages = [train1, train2, train3, train4];

export default function HeroBanner() {
  const [pollyIndex, setPollyIndex] = useState(0);
  const [playIndex, setPlayIndex] = useState(0);
  const [kevinIndex, setKevinIndex] = useState(0);
  const [trainIndex, setTrainIndex] = useState(0);
  const [direction, setDirection] = useState('');

  const handleNextImage = (setIndex, currentIndex, imagesLength) => {
    if (currentIndex < imagesLength - 1) {
      setDirection('right');
      setIndex(currentIndex + 1);
    }
  };

  const handlePrevImage = (setIndex, currentIndex) => {
    if (currentIndex > 0) {
      setDirection('left');
      setIndex(currentIndex - 1);
    }
  };

  const renderBlockDiv = (images, index, setIndex, altText, h3Text, pText, spanText) => (
    <div className="block-div">
      <div className={`block-div-image slide-${direction}`}>
        <img src={images[index]} alt={`${altText}${index + 1}`} />
        <div className="upload">
          <UploadIco />
        </div>
        {index > 0 && (
          <div className="left-scroll">
            <button type="button" onClick={() => handlePrevImage(setIndex, index)}>
              <LeftScrollIco />
            </button>
          </div>
        )}
        {index < images.length - 1 && (
          <div className="right-scroll">
            <button type="button" onClick={() => handleNextImage(setIndex, index, images.length)}>
              <RightScrollIco />
            </button>
          </div>
        )}
        {images.length > 1 && (
          <div className="track-dots">
            {images.map((_, i) => (
              <span key={i} className={`dot ${index === i ? 'active' : ''}`} />
            ))}
          </div>
        )}
      </div>
      <div className="block-div-text">
        <h3>{h3Text}</h3>
        <p>{pText}</p>
        <span>{spanText}</span>
      </div>
    </div>
  );

  return (
    <section>
      <div className="container">
        <div className="main-block">
          {renderBlockDiv([mainBlock1], 0, null, 'mainBlock1', 'Stay in Prince’s Purple Rain house', 'Hosted by Wendy and Lisa', 'Coming September')}
          {renderBlockDiv([mainBlock2], 0, null, 'mainBlock2', 'Join a living room session with Doja', 'Hosted by Doja Cat', 'Coming October')}
          {renderBlockDiv(pollyImages, pollyIndex, setPollyIndex, 'polly', 'Sleepover at Polly Pocket’s Compact', 'Hosted by Polly Pocket', 'Sold out')}
          {renderBlockDiv(playImages, playIndex, setPlayIndex, 'play', 'Playdate at Polly Pocket’s Compact', 'Hosted by Polly Pocket', 'Sold out')}
          {renderBlockDiv(kevinImages, kevinIndex, setKevinIndex, 'kevin', 'Go VIP with Kevin Hart', 'Hosted by Kevin Hart', 'Sold out')}
          {renderBlockDiv(trainImages, trainIndex, setTrainIndex, 'train', 'Train at the X-Mansion', 'Hosted by Jubilee', 'Sold out')}
        </div>
      </div>
    </section>
  );
}