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

  const categories = [
    'Popular',
    'Arts & culture',
    'Outdoors',
    'Mountains',
    'Beach',
    'Unique stays',
    'Categories',
    'Things to do'
  ];

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
          {categories.map((category) => (
            <div
              key={category}
              className={`inspiration-select-box ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              <span>{category}</span>
            </div>
          ))}
        </div>

        {/* Render the selected category component */}
        {renderSelectedCategory()}
      </div>
    </div>
  );
}
