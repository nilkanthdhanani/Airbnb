import React, { useState } from 'react';
import './heroBanner.scss';
import {
  one1, one2, one3, one4, two, two2, two3, two4, three1, three2, three3, three4, four1, four2, four3, four4, five1, five2, five3, five4, six1, six2, six3, six4, seven1, seven2, seven3, seven4, eight1, eight2, eight3, eight4, nine1, nine2, nine3, nine4, ten1, ten2, ten3, ten4, eleven1, eleven2, eleven3, eleven4, twelve1, twelve2, twelve3, twelve4, thirteen1, thirteen2, thirteen3, thirteen4, fourteen1, fourteen2, fourteen3, fourteen4, fifteen1, fifteen2, fifteen3, fifteen4, sixteen1, sixteen2, sixteen3, sixteen4,
} from '../../../assets/images/image';
import UploadIco from '../../../assets/images/svg/uploadIco';
import RightScrollIco from '../../../assets/images/svg/rightScrollIco';
import LeftScrollIco from '../../../assets/images/svg/leftScrollIco';

const oneImages = [one1, one2, one3, one4];
const twoImages = [two, two2, two3, two4];
const threeImages = [three1, three2, three3, three4];
const fourImages = [four1, four2, four3, four4];
const fiveImages = [five1, five2, five3, five4];
const sixImages = [six1, six2, six3, six4];
const sevenImages = [seven1, seven2, seven3, seven4];
const eightImages = [eight1, eight2, eight3, eight4];
const nineImages = [nine1, nine2, nine3, nine4];
const tenImages = [ten1, ten2, ten3, ten4];
const elevenImages = [eleven1, eleven2, eleven3, eleven4];
const twelveImages = [twelve1, twelve2, twelve3, twelve4];
const thirteenImages = [thirteen1, thirteen2, thirteen3, thirteen4];
const fourteenImages = [fourteen1, fourteen2, fourteen3, fourteen4];
const fifteenImages = [fifteen1, fifteen2, fifteen3, fifteen4];
const sixteenImages = [sixteen1, sixteen2, sixteen3, sixteen4];

export default function SecBanner() {
  const [oneIndex, setOneIndex] = useState(0);
  const [twoIndex, setTwoIndex] = useState(0);
  const [threeIndex, setThreeIndex] = useState(0);
  const [fourIndex, setFourIndex] = useState(0);
  const [fiveIndex, setFiveIndex] = useState(0);
  const [sixIndex, setSixIndex] = useState(0);
  const [sevenIndex, setSevenIndex] = useState(0);
  const [eightIndex, setEightIndex] = useState(0);
  const [nineIndex, setNineIndex] = useState(0);
  const [tenIndex, setTenIndex] = useState(0);
  const [elevenIndex, setElevenIndex] = useState(0);
  const [twelveIndex, setTwelveIndex] = useState(0);
  const [thirteenIndex, setThirteenIndex] = useState(0);
  const [fourteenIndex, setFourteenIndex] = useState(0);
  const [fifteenIndex, setFifteenIndex] = useState(0);
  const [sixteenIndex, setSixteenIndex] = useState(0);

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
        <div className="track-dots">
          {images.map((_, i) => (
            <span key={i} className={`dot ${index === i ? 'active' : ''}`} />
          ))}
        </div>
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
        <div className="past-expireance">
          <h2>Past experiences</h2>
          <div className="main-block">
            {renderBlockDiv(oneImages, oneIndex, setOneIndex, 'one', 'Live like Bollywood star Janhvi Kapoor', 'Hosted by Janhvi Kapoor', 'Sold Out')}
            {renderBlockDiv(twoImages, twoIndex, setTwoIndex, 'two', 'Open the Olympic Games at Musée d’Orsay', 'Hosted by Mathieu Lehanneur', 'Sold Out')}
            {renderBlockDiv(threeImages, threeIndex, setThreeIndex, 'three', 'Wake up in the Musée d’Orsay', 'Hosted by Mathieu Lehanneur', 'Sold Out')}
            {renderBlockDiv(fourImages, fourIndex, setFourIndex, 'four', 'Make core memories with Inside Out 2', 'Hosted by Joy', 'Sold Out')}
            {renderBlockDiv(fiveImages, fiveIndex, setFiveIndex, 'five', 'Design your Incredibles Supersuit', 'Hosted by Edna Mode', 'Sold Out')}
            {renderBlockDiv(sixImages, sixIndex, setSixIndex, 'six', 'Go on tour with Feid', 'Hosted by Feid', 'Sold Out')}
            {renderBlockDiv(sevenImages, sevenIndex, setSevenIndex, 'seven', 'Game with Khaby Lame', 'Hosted by Khaby Lame', 'Sold Out')}
            {renderBlockDiv(eightImages, eightIndex, setEightIndex, 'eight', 'Crash at the X-Mansion', 'Hosted by Jubilee', 'Sold Out')}
            {renderBlockDiv(nineImages, nineIndex, setNineIndex, 'nine', 'Spend the night in the Ferrari Museum', 'Hosted by Marc Gené', 'Sold Out')}
            {renderBlockDiv(tenImages, tenIndex, setTenIndex, 'ten', 'Drift off in the Up house', 'Hosted by Carl Fredricksen', 'Sold Out')}
            {renderBlockDiv(elevenImages, elevenIndex, setElevenIndex, 'eleven', 'Shrek’s Swamp', 'Hosted by Donkey', 'Sold Out')}
            {renderBlockDiv(twelveImages, twelveIndex, setTwelveIndex, 'twelve', 'Barbie’s Malibu DreamHouse, Ken’s Way', 'Hosted by Ken', 'Sold Out')}
            {renderBlockDiv(thirteenImages, thirteenIndex, setThirteenIndex, 'thirteen', 'Ted Lasso’s Favorite Pub', 'Hosted by Mae', 'Sold Out')}
            {renderBlockDiv(fourteenImages, fourteenIndex, setFourteenIndex, 'fourteen', 'Houseplant Retreat', 'Hosted by Seth Rogen', 'Sold Out')}
            {renderBlockDiv(fifteenImages, fifteenIndex, setFifteenIndex, 'fifteen', 'Home Alone Holiday', 'Hosted by Buzz', 'Sold Out')}
            {renderBlockDiv(sixteenImages, sixteenIndex, setSixteenIndex, 'sixteen', 'The Last Blockbuster', 'Hosted by Sandi', 'Sold Out')}
          </div>
        </div>
      </div>
    </section>
  );
}
