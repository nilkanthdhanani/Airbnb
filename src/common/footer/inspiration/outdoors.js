import React, { useEffect, useState } from "react";
import "../footer.scss";
import DropIco from '../../../assets/images/svg/dropIco';

const popularDestinations = [
  { city: "Lake Martin", type: "Apartment rental" },
  { city: "Banff", type: "Flat rental" },
  { city: "Nerja", type: "Flat rental" },
  { city: "Greer", type: "Cabin rental" },
  { city: "Lake Havasu City", type: "House rental" },
  { city: "Lake Powell", type: "Holiday rental" },
  { city: "North Rim", type: "Holiday rental" },
  { city: "Payson", type: "Holiday rental" },
  { city: "Pinetop-Lakeside", type: "Cabin rental" },
  { city: "Red Rock", type: "Cabin rental" },
  { city: "Dinner Plain", type: "Pet-friendly rentals" },
  { city: "Streaky Bay", type: "Holiday rentals" },
  { city: "Emerald Lake", type: "Cabin rentals" },
  { city: "Vancouver", type: "Apartment rental" },
  { city: "Victoria", type: "House rental" },
  { city: "Idyllwild-Pine Cove", type: "Cabin rental" },
  { city: "Mammoth Lakes", type: "Holiday rental" },
  { city: "Lake Martin", type: "Apartment rental" },
  { city: "Banff", type: "Flat rental" },
  { city: "Nerja", type: "Flat rental" },
  { city: "Greer", type: "Cabin rental" },
  { city: "Lake Havasu City", type: "House rental" },
  { city: "Lake Powell", type: "Holiday rental" },
  { city: "North Rim", type: "Holiday rental" },
  { city: "Payson", type: "Holiday rental" },
  { city: "Pinetop-Lakeside", type: "Cabin rental" },
  { city: "Red Rock", type: "Cabin rental" },
  { city: "Dinner Plain", type: "Pet-friendly rentals" },
  { city: "Streaky Bay", type: "Holiday rentals" },
  { city: "Emerald Lake", type: "Cabin rentals" },
  { city: "Vancouver", type: "Apartment rental" },
  { city: "Victoria", type: "House rental" },
  { city: "Idyllwild-Pine Cove", type: "Cabin rental" },
  { city: "Mammoth Lakes", type: "Holiday rental" },
];

export default function Outdoors() {
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