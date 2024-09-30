import React, { useState } from 'react';
import '../footer.scss';
import DropIco from '../../../assets/images/svg/dropIco';

const popularDestinations = [
  { city: "Mentone", type: "House rentals" },
  { city: "Sedona", type: "Apartment rentals" },
  { city: "Helen", type: "Cabin rentals" },
  { city: "Pine Moutnain", type: "Holiday rentals" },
  { city: "Stone Moutnain", type: "Cabin rentals" },
  { city: "Island Park", type: "Cabin rentals" },
  { city: "Blue Moutnain", type: "Chalet rentals" },
  { city: "Asheville", type: "Flat rentals" },
  { city: "Blowing Rock", type: "House rentals" },
  { city: "Boone", type: "Holiday rentals" },
  { city: "Hochatown", type: "Holiday rentals" },
  { city: "Pideon Forge", type: "Holiday rentals" },
  { city: "Townsend", type: "Holiday rentals" },
  { city: "Wears Valley", type: "Holiday rentals" },
  { city: "Cabins", type: "Holiday rentals" },
  { city: "Mentone", type: "House rentals" },
  { city: "Sedona", type: "Apartment rentals" },
  { city: "Helen", type: "Cabin rentals" },
  { city: "Pine Moutnain", type: "Holiday rentals" },
  { city: "Stone Moutnain", type: "Cabin rentals" },
  { city: "Island Park", type: "Cabin rentals" },
  { city: "Blue Moutnain", type: "Chalet rentals" },
  { city: "Asheville", type: "Flat rentals" },
  { city: "Blowing Rock", type: "House rentals" },
  { city: "Boone", type: "Holiday rentals" },
  { city: "Hochatown", type: "Holiday rentals" },
  { city: "Pideon Forge", type: "Holiday rentals" },
  { city: "Townsend", type: "Holiday rentals" },
  { city: "Wears Valley", type: "Holiday rentals" },
  { city: "Cabins", type: "Holiday rentals" },
];

export default function Mountains() {
  const [visibleDestinations, setVisibleDestinations] = useState(17);

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