import React, { useEffect, useState } from "react";
import './headerBottom.scss';
import ExploreIco from '../../assets/images/svg/exploreIco';
import HeartIco from '../../assets/images/svg/heartIco';
import LogInIco from '../../assets/images/svg/logInIco';
import { NavLink } from 'react-router-dom';

export default function HeaderBottom() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (isAtBottom) {
        setIsVisible(true);
      } else if (currentScrollY > prevScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <>
      <div className={`header-bottom ${isVisible ? 'show' : 'hide'}`}>
        <div className="header-bottom-div">
          <NavLink to={"/"}>
            <ExploreIco />
            <span>Explore</span>
          </NavLink>
        </div>
        <div className="header-bottom-div">
          <NavLink to={"/wishlists"}>
            <HeartIco />
            <span>Wishlists</span>
          </NavLink>
        </div>
        <div className="header-bottom-div">
          <NavLink to={"/login"}>
            <LogInIco />
            <span>Log in</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}
