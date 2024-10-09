import React, { useEffect, useState } from "react";
import "../footer.scss";
import DropIco from '../../../assets/images/svg/dropIco';

const popularDestinations = [
  { city: "Phoenix", type: "Rentals with pools" },
  { city: "Hot Springs", type: "Lakehouse pools" },
  { city: "Los Angeles", type: "Apartment rentals" },
  { city: "San Diego", type: "Beach house rentals" },
  { city: "San Francisco", type: "Holiday rentals" },
  { city: "Barcelona", type: "Holiday rentals" },
  { city: "Prague", type: "Holiday rentals" },
  { city: "Washington", type: "Flat rentals" },
  { city: "Keswick", type: "Flat rentals" },
  { city: "London", type: "Flat rentals" },
  { city: "Scarborough", type: "Holiday rentals" },
  { city: "Sherwood Forest", type: "Cabin rentals" },
  { city: "York", type: "Flat rentals" },
  { city: "Paris", type: "House rentals" },
  { city: "Rhodes", type: "House rentals" },
  { city: "Nashville", type: "Holiday rentals" },
  { city: "Dublin", type: "House rentals" },
  { city: "Phoenix", type: "Rentals with pools" },
  { city: "Hot Springs", type: "Lakehouse pools" },
  { city: "Los Angeles", type: "Apartment rentals" },
  { city: "San Diego", type: "Beach house rentals" },
  { city: "San Francisco", type: "Holiday rentals" },
  { city: "Barcelona", type: "Holiday rentals" },
  { city: "Prague", type: "Holiday rentals" },
  { city: "Washington", type: "Flat rentals" },
  { city: "Keswick", type: "Flat rentals" },
  { city: "London", type: "Flat rentals" },
  { city: "Scarborough", type: "Holiday rentals" },
  { city: "Sherwood Forest", type: "Cabin rentals" },
  { city: "York", type: "Flat rentals" },
  { city: "Paris", type: "House rentals" },
  { city: "Rhodes", type: "House rentals" },
  { city: "Nashville", type: "Holiday rentals" },
  { city: "Dublin", type: "House rentals" },
];

export default function ArtsCulture() {
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