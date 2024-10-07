import React, { useEffect, useState } from 'react';
import '../footer.scss';
import DropIco from '../../../assets/images/svg/dropIco';

const popularDestinations = [
  { city: "Canmore", type: "Flat rentals" },
  { city: "Benalmádena", type: "Beach house rentals" },
  { city: "Marbella", type: "Beach house rentals" },
  { city: "Mijas", type: "House rentals" },
  { city: "Prescott", type: "Cottage rentals" },
  { city: "Scottsdale", type: "Rentals with pools" },
  { city: "Tucson", type: "Apartment rentals" },
  { city: "Jasper", type: "Cabin rentals" },
  { city: "Mountain View", type: "Family-friendly rentals" },
  { city: "Devonport", type: "Cottage rentals" },
  { city: "Mallacoota", type: "Beach house rentals" },
  { city: "Ibiza", type: "Holiday rentals" },
  { city: "Anaheim", type: "Beach house rentals" },
  { city: "Monterey", type: "Apartment rentals" },
  { city: "Paso Robles", type: "Cottage rentals" },
  { city: "Santa Barbara", type: "Cottage rentals" },
  { city: "Sonoma", type: "Cottage rentals" },
  { city: "Canmore", type: "Flat rentals" },
  { city: "Benalmádena", type: "Beach house rentals" },
  { city: "Marbella", type: "Beach house rentals" },
  { city: "Mijas", type: "House rentals" },
  { city: "Prescott", type: "Cottage rentals" },
  { city: "Scottsdale", type: "Rentals with pools" },
  { city: "Tucson", type: "Apartment rentals" },
  { city: "Jasper", type: "Cabin rentals" },
  { city: "Mountain View", type: "Family-friendly rentals" },
  { city: "Devonport", type: "Cottage rentals" },
  { city: "Mallacoota", type: "Beach house rentals" },
  { city: "Ibiza", type: "Holiday rentals" },
  { city: "Anaheim", type: "Beach house rentals" },
  { city: "Monterey", type: "Apartment rentals" },
  { city: "Paso Robles", type: "Cottage rentals" },
  { city: "Santa Barbara", type: "Cottage rentals" },
  { city: "Sonoma", type: "Cottage rentals" },
];

export default function Popular() {
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