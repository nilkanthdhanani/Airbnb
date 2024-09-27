import React, { useState } from 'react';
import '../footer.scss';
import Popular from './popular';
import ArtsCulture from './artsCulture';
import Outdoors from './outdoors';
import Mountains from './mountains';
import Beach from './beach';
import UniqueStays from './uniqueStays';
import Categories from './categories';
import ThingsToDo from './thingsToDo';

export default function Inspiration() {
  const [selectedCategory, setSelectedCategory] = useState('Popular'); // Default to 'Popular'

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

  return (
    <div className='inspiration'>
      <div className="container">
        <h2>Inspiration for future getaways</h2>
        <div className="inspiration-select">
          <div className="inspiration-select-box" onClick={() => setSelectedCategory('Popular')}>
            <span>Popular</span>
          </div>
          <div className="inspiration-select-box" onClick={() => setSelectedCategory('Arts & culture')}>
            <span>Arts & culture</span>
          </div>
          <div className="inspiration-select-box" onClick={() => setSelectedCategory('Outdoors')}>
            <span>Outdoors</span>
          </div>
          <div className="inspiration-select-box" onClick={() => setSelectedCategory('Mountains')}>
            <span>Mountains</span>
          </div>
          <div className="inspiration-select-box" onClick={() => setSelectedCategory('Beach')}>
            <span>Beach</span>
          </div>
          <div className="inspiration-select-box" onClick={() => setSelectedCategory('Unique stays')}>
            <span>Unique stays</span>
          </div>
          <div className="inspiration-select-box" onClick={() => setSelectedCategory('Categories')}>
            <span>Categories</span>
          </div>
          <div className="inspiration-select-box" onClick={() => setSelectedCategory('Things to do')}>
            <span>Things to do</span>
          </div>
        </div>
        {renderSelectedCategory()}
      </div>
    </div>
  );
}
