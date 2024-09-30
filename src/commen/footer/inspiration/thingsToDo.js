import React, { useState } from 'react';
import '../footer.scss';
import DropIco from '../../../assets/images/svg/dropIco';

const popularDestinations = [
  { city: "London", type: "England" },
  { city: "Paris", type: "Île-de-France" },
  { city: "New York", type: "New York" },
  { city: "Barcelona", type: "Catalonia" },
  { city: "İstanbul", type: "İstanbul" },
  { city: "Bali", type: "Indonesia" },
  { city: "Amsterdam", type: "North Holland" },
  { city: "Miami", type: "Florida" },
  { city: "Madrid", type: "Community of Madrid" },
  { city: "Los Angeles", type: "California" },
  { city: "Rome", type: "Lazio" },
  { city: "Lisbon", type: "Lisbon" },
  { city: "Tokyo", type: "Tokyo" },
  { city: "Vienna", type: "Vienna" },
  { city: "Athens", type: "Greece" },
  { city: "Prague", type: "Czechia" },
  { city: "Orlando", type: "Florida" },
  { city: "London", type: "England" },
  { city: "Paris", type: "Île-de-France" },
  { city: "New York", type: "New York" },
  { city: "Barcelona", type: "Catalonia" },
  { city: "İstanbul", type: "İstanbul" },
  { city: "Bali", type: "Indonesia" },
  { city: "Amsterdam", type: "North Holland" },
  { city: "Miami", type: "Florida" },
  { city: "Madrid", type: "Community of Madrid" },
  { city: "Los Angeles", type: "California" },
  { city: "Rome", type: "Lazio" },
  { city: "Lisbon", type: "Lisbon" },
  { city: "Tokyo", type: "Tokyo" },
  { city: "Vienna", type: "Vienna" },
  { city: "Athens", type: "Greece" },
  { city: "Prague", type: "Czechia" },
  { city: "Orlando", type: "Florida" },
];

export default function ThingsToDo() {
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