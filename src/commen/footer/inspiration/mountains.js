import React, { useState } from 'react';
import '../footer.scss';
import DropIco from '../../../assets/images/svg/dropIco';

const popularDestinations = [
  { city: "Canmore", type: "Flat rentals" },
  { city: "Benalmádena", type: "Beach house rentals" },
  { city: "Marbella", type: "Beach house rentals" },
  { city: "Mijas", type: "House rentals" },
  { city: "Prescott", type: "Cottage rentals" },
  { city: "Scottsdale", type: "Rentals with pools" },
  { city: "Canmore", type: "Flat rentals" },
  { city: "Benalmádena", type: "Beach house rentals" },
  { city: "Marbella", type: "Beach house rentals" },
  { city: "Mijas", type: "House rentals" },
  { city: "Prescott", type: "Cottage rentals" },
  { city: "Scottsdale", type: "Rentals with pools" },
  { city: "Canmore", type: "Flat rentals" },
  { city: "Benalmádena", type: "Beach house rentals" },
  { city: "Marbella", type: "Beach house rentals" },
  { city: "Mijas", type: "House rentals" },
  { city: "Prescott", type: "Cottage rentals" },
  { city: "Canmore", type: "Flat rentals" },
  { city: "Benalmádena", type: "Beach house rentals" },
  { city: "Marbella", type: "Beach house rentals" },
  { city: "Mijas", type: "House rentals" },
  { city: "Prescott", type: "Cottage rentals" },
];

export default function Mountains() {
  const [visibleDestinations, setVisibleDestinations] = useState(11);

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