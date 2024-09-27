import React from 'react'
import './footer.scss'
import { NavLink } from 'react-router-dom'
import WorldIco from '../../assets/images/svg/worldIco'
import FacebookIco from '../../assets/images/svg/facebookIco'
import TwitterIco from '../../assets/images/svg/twitterIco'
import InstagramIco from '../../assets/images/svg/instagramIco'

export default function FooterList() {
    return (
        <div className='footer-list'>
            <div className="container-footer">
                <div className="footer-list-link">
                    <div className="footer-link-box">
                        <h3>Support</h3>
                        <NavLink to={'/'}>Help Centre</NavLink>
                        <NavLink to={'/'}>AirCover</NavLink>
                        <NavLink to={'/'}>Anti-discrimination</NavLink>
                        <NavLink to={'/'}>Disability support</NavLink>
                        <NavLink to={'/'}>Cancellation options</NavLink>
                        <NavLink to={'/'}>Report neighbourhood concern</NavLink>
                    </div>
                    <div className="footer-link-box">
                        <h3>Hosting</h3>
                        <NavLink to={'/'}>Airbnb your home</NavLink>
                        <NavLink to={'/'}>AirCover for Hosts</NavLink>
                        <NavLink to={'/'}>Hosting resources</NavLink>
                        <NavLink to={'/'}>Community forum</NavLink>
                        <NavLink to={'/'}>Hosting responsibly</NavLink>
                        <NavLink to={'/'}>Join a free Hosting class</NavLink>
                    </div>
                    <div className="footer-link-box">
                        <h3>Airbnb</h3>
                        <NavLink to={'/'}>Newsroom</NavLink>
                        <NavLink to={'/'}>New features</NavLink>
                        <NavLink to={'/'}>Careers</NavLink>
                        <NavLink to={'/'}>Investors</NavLink>
                        <NavLink to={'/'}>Airbnb.org emergency stays</NavLink>
                    </div>
                </div>
                <div className="footer-list-copy">
                    <div className="footer-copy-div">
                        <p>© 2024 Airbnb, Inc.</p>
                        <span>·</span>
                        <NavLink to={'/'}>Privacy</NavLink>
                        <span>·</span>
                        <NavLink to={'/'}>Terms</NavLink>
                        <span>·</span>
                        <NavLink to={'/'}>Sitemap</NavLink>
                        <span>·</span>
                        <NavLink to={'/'}>Company details</NavLink>
                    </div>
                    <div className="footer-copy-div2">
                        <div className="footer-leg">
                            <WorldIco />
                            <NavLink to={'/'}>English (IN)</NavLink>
                        </div>
                        <div className="footer-leg">
                            <span>₹</span>
                            <NavLink to={'/'}> INR</NavLink>
                        </div>
                        <div className="footer-media">
                            <NavLink to={'/'}><FacebookIco /> </NavLink>
                            <NavLink to={'/'}><TwitterIco /> </NavLink>
                            <NavLink to={'/'}><InstagramIco /> </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
