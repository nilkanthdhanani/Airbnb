import React from 'react'
import './headerBottom.scss'
import ExploreIco from '../../../assets/images/svg/exploreIco'
import HeartIco from '../../../assets/images/svg/heartIco'
import LogInIco from '../../../assets/images/svg/logInIco'
import { NavLink } from 'react-router-dom'

export default function HeaderBottom() {
    return (
        <>
            <div className="header-bottom">
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
    )
}
