import React, { useEffect, useState } from 'react';
import '../footer.scss';
import DropIco from '../../../assets/images/svg/dropIco';

const popularDestinations = [
  { city: "Yurt Rentals", type: "United States" },
  { city: "Yurt Rentals", type: "United Kingdom" },
  { city: "Castle Rentals", type: "United States" },
  { city: "Houseboats", type: "United States" },
  { city: "Holiday Caravans", type: "United Kingdom" },
  { city: "Private Island Rentals", type: "United States" },
  { city: "Farm Houses", type: "United States" },
  { city: "Farm Cottages", type: "United Kingdom" },
  { city: "Cabin Rentals", type: "Australia" },
  { city: "Luxury Cabins", type: "United Kingdom" },
  { city: "Luxury Cabins", type: "United States" },
  { city: "Holiday Chalets", type: "United Kingdom" },
  { city: "Cottage Rentals", type: "United States" },
  { city: "Holiday Cottages", type: "United Kingdom" },
  { city: "Mansion Rentals", type: "United States" },
  { city: "Villa Rentals", type: "United Kingdom" },
  { city: "Holiday Bungalows", type: "United Kingdom" },
  { city: "Yurt Rentals", type: "United States" },
  { city: "Yurt Rentals", type: "United Kingdom" },
  { city: "Castle Rentals", type: "United States" },
  { city: "Houseboats", type: "United States" },
  { city: "Holiday Caravans", type: "United Kingdom" },
  { city: "Private Island Rentals", type: "United States" },
  { city: "Farm Houses", type: "United States" },
  { city: "Farm Cottages", type: "United Kingdom" },
  { city: "Cabin Rentals", type: "Australia" },
  { city: "Luxury Cabins", type: "United Kingdom" },
  { city: "Luxury Cabins", type: "United States" },
  { city: "Holiday Chalets", type: "United Kingdom" },
  { city: "Cottage Rentals", type: "United States" },
  { city: "Holiday Cottages", type: "United Kingdom" },
  { city: "Mansion Rentals", type: "United States" },
  { city: "Villa Rentals", type: "United Kingdom" },
  { city: "Holiday Bungalows", type: "United Kingdom" },
];

export default function UniqueStays() {
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