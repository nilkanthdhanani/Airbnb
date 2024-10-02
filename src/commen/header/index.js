import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isSidebarOpen) {
        setIsSidebarOpen(false);
        document.body.classList.remove('no-scroll');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isSidebarOpen]);

  return (
    <header>
      <div className="container">
        <div className="header-div">
          <div className="logo">
            <NavLink to={"/"} aria-label="logo" >
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
              <NavLink to={"/"} >Airbnb your home</NavLink>
            </div>
            <div className="search-button">
              <NavLink><WorldIco /></NavLink>
            </div>
            <div className="user-button">
              <button aria-label="user button" type="button">
                <MenuIco />
                <UserIco />
              </button>
            </div>
          </div>
        </div>

        <div className="header-respo">
          <button aria-label="header respo button" type='button' onClick={toggleSidebar}>
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
