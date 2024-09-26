import React, { useState } from 'react';
import './header.scss';
import Logo from '../../assets/images/svg/logoIco';
import { NavLink } from 'react-router-dom';
import WorldIco from '../../assets/images/svg/worldIco';
import UserIco from '../../assets/images/svg/userIcon';
import MenuIco from '../../assets/images/svg/menuIco';

export default function Header() {
  const [activeButton, setActiveButton] = useState('stays');

  return (
    <header>
      <div className="container">
        <div className="header-div">
          <div className="logo">
            <NavLink to={"/"} >
              <Logo />
            </NavLink>
          </div>
          <nav>
            <button
              type="button"
              className={activeButton === 'stays' ? 'active' : ''}
              onClick={() => setActiveButton('stays')}>
              Stays
            </button>
            <button
              type="button"
              className={activeButton === 'experiences' ? 'active' : ''}
              onClick={() => setActiveButton('experiences')}>
              Experiences
            </button>
          </nav>
          <div className="user">
            <div className="home-button">
              <NavLink>
                <button type="button">Airbnb your home</button>
              </NavLink>
            </div>
            <div className="search-button">
              <button>
                <WorldIco />
              </button>
            </div>
            <div className="user-button">
              <button>
                <MenuIco />
                <UserIco />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
