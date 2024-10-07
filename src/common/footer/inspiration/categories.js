import React, { useEffect, useState } from 'react';
import '../footer.scss';
import DropIco from '../../../assets/images/svg/dropIco';

const popularDestinations = [
  { city: "Amazing pools", type: "" },
  { city: "Arctic", type: "" },
  { city: "Camping", type: "" },
  { city: "Camper vans", type: "" },
  { city: "Castles", type: "" },
  { city: "Containers", type: "" },
  { city: "Countryside", type: "" },
  { city: "Design", type: "" },
  { city: "Earth homes", type: "" },
  { city: "Farms", type: "" },
  { city: "National parks", type: "" },
  { city: "Vineyards", type: "" },
  { city: "OMG!", type: "" },
  { city: "Tiny homes", type: "" },
  { city: "Towers", type: "" },
  { city: "Windmills", type: "" },
  { city: "Luxe", type: "" },
];

export default function Categories() {
  const calculateVisibleDestinations = () => {
    if (window.innerWidth <= 576) {
      return 7;
    } else if (window.innerWidth <= 1024) {
      return 11;
    } else {
      return 17;
    }
  };

  // Initialize state with the correct number of destinations based on screen size
  const [visibleDestinations, setVisibleDestinations] = useState(calculateVisibleDestinations);

  useEffect(() => {
    const updateVisibleDestinations = () => {
      setVisibleDestinations(calculateVisibleDestinations());
    };

    window.addEventListener('resize', updateVisibleDestinations);

    return () => {
      window.removeEventListener('resize', updateVisibleDestinations);
    };
  }, []);

  const handleShowMore = () => {
    setVisibleDestinations(popularDestinations.length);
  };

  return (
    <div className="inspier-inner">
      {popularDestinations.slice(0, visibleDestinations).map((destination, index) => (
        <div key={index} className="inspier-inner-box">
          <h3>{destination.city}</h3>
          <p>{destination.type}</p>
        </div>
      ))}
      {visibleDestinations < popularDestinations.length && (
        <div className="Show-more" onClick={handleShowMore}>
          <h3>Show more</h3>
          <DropIco />
        </div>
      )}
    </div>
  );
}