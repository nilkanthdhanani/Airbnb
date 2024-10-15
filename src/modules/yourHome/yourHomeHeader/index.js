import React from "react";
import "./yourHomeHeader.scss";
import Logo from '../../../assets/images/svg/logoIco';
import { NavLink } from 'react-router-dom';
import HomeIco from "../../../assets/images/svg/homeIco";

export default function YourHomeHeader() {
  return (
    <div className="your-home-header">
      <div className="container2">
        <div className="your-header-main">
          <div className="logo">
            <NavLink to={"/"} aria-label="logo">
              <Logo />
            </NavLink>
          </div>
          <div className="your-header-button">
            <span>Ready to Airbnb it?</span>
            <NavLink to={"/login"}><HomeIco />Airbnb Setup</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
