import React, { useState } from 'react';
import './heroBanner.scss';
import {
  mainBlock1, mainBlock2, polly1, polly2, polly3, polly4, polly6, polly7, polly8, polly9, polly10, polly11, polly12, kevin1, kevin2, kevin3, train1, train2, train3, polly5, kevin4, train4
} from '../../../assets/images/image';
import UploadIco from '../../../assets/images/svg/uploadIco';
import RightScrollIco from '../../../assets/images/svg/rightScrollIco';
import LeftScrollIco from '../../../assets/images/svg/leftScrollIco';

const pollyImages = [polly1, polly2, polly3, polly4, polly6, polly7, polly8, polly9, polly10, polly11, polly12];
const playImages = [polly2, polly3, polly4, polly5];
const kevinImages = [kevin1, kevin2, kevin3, kevin4];
const trainImages = [train1, train2, train3, train4];

export default function SecBanner() {
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

  return (
    <section>
      <div className="container">
        <div className="main-block">
          {/* Janhvi Kapoor */}
          <div className="block-div">
            <div className={`block-div-image slide-${direction}`}>
              <img src={pollyImages[pollyIndex]} alt={`polly${pollyIndex + 1}`} />
              <div className="upload">
                <UploadIco />
              </div>
              {pollyIndex > 0 && (
                <div className="left-scroll">
                  <button type="button" onClick={() => handlePrevImage(setPollyIndex, pollyIndex)}>
                    <LeftScrollIco />
                  </button>
                </div>
              )}
              {pollyIndex < pollyImages.length - 1 && (
                <div className="right-scroll">
                  <button type="button" onClick={() => handleNextImage(setPollyIndex, pollyIndex, pollyImages.length)}>
                    <RightScrollIco />
                  </button>
                </div>
              )}
              <div className="track-dots">
                {pollyImages.map((_, index) => (
                  <span key={index} className={`dot ${pollyIndex === index ? 'active' : ''}`} />
                ))}
              </div>
            </div>
            <div className="block-div-text">
              <h3>Sleepover at Polly Pocket’s Compact</h3>
              <p>Hosted by Polly Pocket</p>
              <span>Sold out</span>
            </div>
          </div>

          {/* Playdate Section */}
          <div className="block-div">
            <div className={`block-div-image slide-${direction}`}>
              <img src={playImages[playIndex]} alt={`play${playIndex + 1}`} />
              <div className="upload">
                <UploadIco />
              </div>
              {playIndex > 0 && (
                <div className="left-scroll">
                  <button type="button" onClick={() => handlePrevImage(setPlayIndex, playIndex)}>
                    <LeftScrollIco />
                  </button>
                </div>
              )}
              {playIndex < playImages.length - 1 && (
                <div className="right-scroll">
                  <button type="button" onClick={() => handleNextImage(setPlayIndex, playIndex, playImages.length)}>
                    <RightScrollIco />
                  </button>
                </div>
              )}
              <div className="track-dots">
                {playImages.map((_, index) => (
                  <span key={index} className={`dot ${playIndex === index ? 'active' : ''}`} />
                ))}
              </div>
            </div>
            <div className="block-div-text">
              <h3>Playdate at Polly Pocket’s Compact</h3>
              <p>Hosted by Polly Pocket</p>
              <span>Sold Out</span>
            </div>
          </div>

          {/* Kevin Hart Section */}
          <div className="block-div">
            <div className={`block-div-image slide-${direction}`}>
              <img src={kevinImages[kevinIndex]} alt={`kevin${kevinIndex + 1}`} />
              <div className="upload">
                <UploadIco />
              </div>
              {kevinIndex > 0 && (
                <div className="left-scroll">
                  <button type="button" onClick={() => handlePrevImage(setKevinIndex, kevinIndex)}>
                    <LeftScrollIco />
                  </button>
                </div>
              )}
              {kevinIndex < kevinImages.length - 1 && (
                <div className="right-scroll">
                  <button type="button" onClick={() => handleNextImage(setKevinIndex, kevinIndex, kevinImages.length)}>
                    <RightScrollIco />
                  </button>
                </div>
              )}
              <div className="track-dots">
                {kevinImages.map((_, index) => (
                  <span key={index} className={`dot ${kevinIndex === index ? 'active' : ''}`} />
                ))}
              </div>
            </div>
            <div className="block-div-text">
              <h3>Go VIP with Kevin Hart</h3>
              <p>Hosted by Kevin Hart</p>
              <span>Sold Out</span>
            </div>
          </div>

          {/* X-Mansion Section */}
          <div className="block-div">
            <div className={`block-div-image slide-${direction}`}>
              <img src={trainImages[trainIndex]} alt={`train${trainIndex + 1}`} />
              <div className="upload">
                <UploadIco />
              </div>
              {trainIndex > 0 && (
                <div className="left-scroll">
                  <button type="button" onClick={() => handlePrevImage(setTrainIndex, trainIndex)}>
                    <LeftScrollIco />
                  </button>
                </div>
              )}
              {trainIndex < trainImages.length - 1 && (
                <div className="right-scroll">
                  <button type="button" onClick={() => handleNextImage(setTrainIndex, trainIndex, trainImages.length)}>
                    <RightScrollIco />
                  </button>
                </div>
              )}
              <div className="track-dots">
                {trainImages.map((_, index) => (
                  <span key={index} className={`dot ${trainIndex === index ? 'active' : ''}`} />
                ))}
              </div>
            </div>
            <div className="block-div-text">
              <h3>Train at the X-Mansion</h3>
              <p>Hosted by Jubilee</p>
              <span>Sold Out</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
