import React, { useState } from 'react';
import './header.scss';
import Logo from '../../assets/images/svg/logoIco';
import { NavLink } from 'react-router-dom';
import WorldIco from '../../assets/images/svg/worldIco';
import UserIco from '../../assets/images/svg/userIcon';
import MenuIco from '../../assets/images/svg/menuIco';
import SearchIco from '../../assets/images/svg/searchIco';
import Sidebar from '../sidebar';

export default function Header() {
  const [activeButton, setActiveButton] = useState('stays');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

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

        <div className="header-respo">
          <button type='button' onClick={toggleSidebar}>
            <SearchIco />
            <div className="button-content">
              <p>Where to?</p>
              <div className="button-span">
                <span>Anywhere</span>
                <span>•</span>
                <span>Any week</span>
                <span>•</span>
                <span>Add guests</span>
              </div>
            </div>
          </button>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
}
