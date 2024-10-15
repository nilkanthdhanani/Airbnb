import React, { useState, useEffect, useCallback, useRef } from "react";
import "./yourHeaderBottom.scss";
import { NavLink } from 'react-router-dom';
import HomeIco from "../../../assets/images/svg/homeIco";

export default function YourHeaderBottom() {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollTop = useRef(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop.current) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="your-hb">
      <div className="container2">
        <div className={`your-hb-head ${showHeader ? '' : 'hidden'}`}>
          <span>Ready to Airbnb it?</span>
        </div>
        <div className="your-hb-button">
          <NavLink to={"/login"}><HomeIco />Airbnb Setup</NavLink>
        </div>
      </div>
    </div>
  );
}
