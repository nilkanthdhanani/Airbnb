import React, { useState } from 'react';
import '../footer.scss';
import DropIco from '../../../assets/images/svg/dropIco';

const popularDestinations = [
  { city: "Dauphin Island", type: "Beach house rentals" },
  { city: "Fort Morgan", type: "Holiday rentals" },
  { city: "Gulf Shores", type: "Holiday rentals" },
  { city: "Bruny Island", type: "Holiday rentals" },
  { city: "Crescent Head", type: "Pet-friendly rentals" },
  { city: "Gerringong", type: "Holiday rentals" },
  { city: "Hamilton Island", type: "House rentals" },
  { city: "Lancelin", type: "Holiday rentals" },
  { city: "Melbourne Beach", type: "Beach apartment rentals" },
  { city: "Moonta Bay", type: "Beachfront rentals" },
  { city: "Ocean Grove", type: "Cottage rentals" },
  { city: "Majorca", type: "Chalet rentals" },
  { city: "Big Sur", type: "Beach house rentals" },
  { city: "Bodega Bay", type: "Holiday rentals" },
  { city: "Cambria", type: "House rentals" },
  { city: "Cayucos", type: "Holiday rentals" },
  { city: "Huntington Beach", type: "House rentals" },
  { city: "Dauphin Island", type: "Beach house rentals" },
  { city: "Fort Morgan", type: "Holiday rentals" },
  { city: "Gulf Shores", type: "Holiday rentals" },
  { city: "Bruny Island", type: "Holiday rentals" },
  { city: "Crescent Head", type: "Pet-friendly rentals" },
  { city: "Gerringong", type: "Holiday rentals" },
  { city: "Hamilton Island", type: "House rentals" },
  { city: "Lancelin", type: "Holiday rentals" },
  { city: "Melbourne Beach", type: "Beach apartment rentals" },
  { city: "Moonta Bay", type: "Beachfront rentals" },
  { city: "Ocean Grove", type: "Cottage rentals" },
  { city: "Majorca", type: "Chalet rentals" },
  { city: "Big Sur", type: "Beach house rentals" },
  { city: "Bodega Bay", type: "Holiday rentals" },
  { city: "Cambria", type: "House rentals" },
  { city: "Cayucos", type: "Holiday rentals" },
  { city: "Huntington Beach", type: "House rentals" },
];

export default function Beach() {
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