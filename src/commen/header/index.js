import React, { useState, useEffect, useRef } from 'react';
import './header.scss';
import Logo from '../../assets/images/svg/logoIco';
import { NavLink } from 'react-router-dom';
import WorldIco from '../../assets/images/svg/worldIco';
import UserIco from '../../assets/images/svg/userIcon';
import MenuIco from '../../assets/images/svg/menuIco';
import SearchIco from '../../assets/images/svg/searchIco';
import Sidebar from '../sidebar';
import Modal from './globalModal/index';

export default function Header() {
  const [activeButton, setActiveButton] = useState('stays');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropDownRef = useRef(null); // Create ref for the drop-down
  const userButtonRef = useRef(null); // Create ref for the user button

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  // Handle click outside the drop-down to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target) &&
        userButtonRef.current &&
        !userButtonRef.current.contains(event.target)
      ) {
        setIsDropDownOpen(false); // Close drop-down when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="container">
        <div className="header-div">
          <div className="logo">
            <NavLink to={"/"} aria-label="logo">
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
              <NavLink to={"/"}>Airbnb your home</NavLink>
            </div>
            <div className="search-button">
              <NavLink aria-label="search earth" onClick={() => setIsModalOpen(true)}>
                <WorldIco />
              </NavLink>
            </div>
            <div className="user-button">
              <button
                aria-label="user button"
                type="button"
                onClick={toggleDropDown}
                ref={userButtonRef} // Add ref to the button
              >
                <MenuIco />
                <UserIco />
              </button>
              {isDropDownOpen && (
                <div className="drop-down" ref={dropDownRef}>
                  <NavLink to="/" onClick={() => setIsDropDownOpen(false)}>Sign up</NavLink>
                  <NavLink to="/" onClick={() => setIsDropDownOpen(false)}>Log In</NavLink>
                  <div className="drop-down-border"></div>
                  <NavLink to="/" onClick={() => setIsDropDownOpen(false)}>Airbnb your home</NavLink>
                  <NavLink to="/" onClick={() => setIsDropDownOpen(false)}>Host an experience</NavLink>
                  <NavLink to="/" onClick={() => setIsDropDownOpen(false)}>Help Center</NavLink>
                </div>
              )}
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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}
