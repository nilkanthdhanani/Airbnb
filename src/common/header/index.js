import React, { useState, useEffect, useRef } from 'react';
import './header.scss';
import Logo from '../../assets/images/svg/logoIco';
import { NavLink } from 'react-router-dom';
import WorldIco from '../../assets/images/svg/worldIco';
import UserIco from '../../assets/images/svg/userIcon';
import MenuIco from '../../assets/images/svg/menuIco';
import SearchIco from '../../assets/images/svg/searchIco';
import Sidebar from '../sidebar';
import Modal from '../../components/modal';
import LoginModal from '../../components/loginModal';

export default function Header() {
  const [activeButton, setActiveButton] = useState('stays');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('language');
  const dropDownRef = useRef(null);
  const userButtonRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const toggleModal = (tab) => {
    setActiveTab(tab);
    setIsModalOpen(!isModalOpen);
  };

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target) &&
        userButtonRef.current &&
        !userButtonRef.current.contains(event.target)
      ) {
        setIsDropDownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isModalOpen]);

  return (
    <div className="header-main">
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
              <NavLink to={"/yourhome"}>Airbnb your home</NavLink>
            </div>
            <div className="search-button" onClick={() => toggleModal('language')}>
              <NavLink aria-label="search earth">
                <WorldIco />
              </NavLink>
            </div>
            <div className="user-button">
              <button
                aria-label="user button"
                type="button"
                onClick={toggleDropDown}
                ref={userButtonRef}>
                <MenuIco />
                <UserIco />
              </button>
              {isDropDownOpen && (
                <div className="drop-down" ref={dropDownRef}>
                  <NavLink onClick={() => { setIsDropDownOpen(false); toggleLoginModal(); }}>Sign up</NavLink>
                  <NavLink onClick={() => { setIsDropDownOpen(false); toggleLoginModal(); }}>Log In</NavLink>
                  <div className="drop-down-border"></div>
                  <NavLink onClick={() => setIsDropDownOpen(false)}>Airbnb your home</NavLink>
                  <NavLink onClick={() => setIsDropDownOpen(false)}>Host an experience</NavLink>
                  <NavLink onClick={() => setIsDropDownOpen(false)}>Help Center</NavLink>
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
      <Modal isOpen={isModalOpen} toggleModal={toggleModal} activeTab={activeTab} />
      <LoginModal isOpen={isLoginModalOpen} toggleLoginModal={toggleLoginModal} />
    </div>
  );
}
