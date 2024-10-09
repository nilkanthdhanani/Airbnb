import React, { useState, useRef, useEffect } from "react";
import "../footer.scss";
import Popular from './popular';
import ArtsCulture from './artsCulture';
import Outdoors from './outdoors';
import Mountains from './mountains';
import Beach from './beach';
import UniqueStays from './uniqueStays';
import Categories from './categories';
import ThingsToDo from './thingsToDo';
import RightScrollIco from '../../../assets/images/svg/rightScrollIco';
import LeftScrollIco from '../../../assets/images/svg/leftScrollIco';

export default function Inspiration() {
  const [selectedCategory, setSelectedCategory] = useState('Popular');
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const inspirationSelectRef = useRef(null);

  const categories = [
    'Popular',
    'Arts & culture',
    'Outdoors',
    'Mountains',
    'Beach',
    'Unique stays',
    'Categories',
    'Things to do',
  ];

  const renderSelectedCategory = () => {
    switch (selectedCategory) {
      case 'Popular':
        return <Popular />;
      case 'Arts & culture':
        return <ArtsCulture />;
      case 'Outdoors':
        return <Outdoors />;
      case 'Mountains':
        return <Mountains />;
      case 'Beach':
        return <Beach />;
      case 'Unique stays':
        return <UniqueStays />;
      case 'Categories':
        return <Categories />;
      case 'Things to do':
        return <ThingsToDo />;
      default:
        return <Popular />;
    }
  };

  const handleScroll = (direction) => {
    const scrollAmount = 150;
    const container = inspirationSelectRef.current;

    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  const checkScrollButtonsVisibility = () => {
    const container = inspirationSelectRef.current;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    setShowLeftButton(container.scrollLeft > 0);
    setShowRightButton(container.scrollLeft < maxScrollLeft && container.scrollWidth > container.clientWidth);
  };

  useEffect(() => {
    const container = inspirationSelectRef.current;
    
    const handleResize = () => {
      checkScrollButtonsVisibility();
    };

    container.addEventListener('scroll', checkScrollButtonsVisibility);
    window.addEventListener('resize', handleResize);
    checkScrollButtonsVisibility();

    return () => {
      container.removeEventListener('scroll', checkScrollButtonsVisibility);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="inspiration">
      <div className="container-footer">
        <h2>Inspiration for future getaways</h2>
        <div className="inspiration-main">
          <div className="inspiration-select" ref={inspirationSelectRef}>
            {categories.map((category) => (
              <div
                key={category}
                className={`inspiration-select-box ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}>
                <span>{category}</span>
              </div>
            ))}
          </div>
          {showLeftButton && (
            <div className="left-slide">
              <button aria-label="left scroll button" type="button" onClick={() => handleScroll('left')}>
                <LeftScrollIco />
              </button>
            </div>
          )}
          {showRightButton && (
            <div className="right-slide">
              <button aria-label="right scroll button" type="button" onClick={() => handleScroll('right')}>
                <RightScrollIco />
              </button>
            </div>
          )}
        </div>
        {renderSelectedCategory()}
      </div>
    </div>
  );
}
