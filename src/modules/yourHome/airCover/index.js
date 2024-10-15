import React, { useEffect, useState } from 'react'
import "./airCover.scss"
import { airCoverLogo, airCoverLogoTeb } from '../../../assets/images/image'
import { NavLink } from 'react-router-dom'
import HostRightIco from '../../../assets/images/svg/hostRightIco'
import HostWrongIco from '../../../assets/images/svg/hostWrongIco'

export default function AirCover() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="air-cover">
            <div className="container2">
                <div className="air-cover-content">
                    <div className="air-cover-img">
                        <picture>
                            <source media="(max-width: 1024px)" srcSet={airCoverLogoTeb} />
                            <img src={airCoverLogo} alt="airCoverLogo" />
                        </picture>
                    </div>
                    <h2>Airbnb it easily with Airbnb Setup</h2>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Airbnb</th>
                                <th>Competitors</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th height="80" >Guest identity verification</th>
                                <td>
                                    <div className='host-right'><HostRightIco /></div>
                                </td>
                                <td>
                                    <div className='host-right'><HostRightIco /></div>
                                </td>
                            </tr>
                            <tr className='pera-table'>
                                <td colSpan={windowWidth < 1024 ? 3 : 1}>Our comprehensive verification system checks details such as name, address, government ID and more to confirm the identity of guests who book on Airbnb</td>
                                <td colSpan={2}></td>
                            </tr>
                            <tr>
                                <th height="80" >Reservation screening</th>
                                <td>
                                    <div className='host-right'><HostRightIco /></div>
                                </td>
                                <td>
                                    <div className='host-wrong'><HostWrongIco /></div>
                                </td>
                            </tr>
                            <tr className='pera-table'>
                                <td colSpan={windowWidth < 1024 ? 3 : 1}>Our proprietary technology analyses hundreds of factors in each reservation and blocks certain bookings that show a high risk for disruptive parties and property damage.</td>
                                <td colSpan={2}></td>
                            </tr>
                            <tr>
                                <th height="80" >$3m damage protection</th>
                                <td>
                                    <div className='host-right'><HostRightIco /></div>
                                </td>
                                <td>
                                    <div className='host-wrong'><HostWrongIco /></div>
                                </td>
                            </tr>
                            <tr className='pera-table'>
                                <td colSpan={windowWidth < 1024 ? 3 : 1}>Airbnb reimburses you for damage caused by guests to your home and belongings and includes these specialised protections:</td>
                                <td colSpan={2}></td>
                            </tr>
                            <tr className='list-table'>
                                <th height="80" >Art & valuables</th>
                                <td>
                                    <div className='host-right'><HostRightIco /></div>
                                </td>
                                <td>
                                    <div className='host-wrong'><HostWrongIco /></div>
                                </td>
                            </tr>
                            <tr className='list-table'>
                                <th height="80" >Auto & boat</th>
                                <td>
                                    <div className='host-right'><HostRightIco /></div>
                                </td>
                                <td>
                                    <div className='host-wrong'><HostWrongIco /></div>
                                </td>
                            </tr>
                            <tr className='list-table'>
                                <th height="80" >Pet damage</th>
                                <td>
                                    <div className='host-right'><HostRightIco /></div>
                                </td>
                                <td>
                                    <div className='host-wrong'><HostWrongIco /></div>
                                </td>
                            </tr>
                            <tr className='list-table'>
                                <th height="80" >Income loss</th>
                                <td>
                                    <div className='host-right'><HostRightIco /></div>
                                </td>
                                <td>
                                    <div className='host-wrong'><HostWrongIco /></div>
                                </td>
                            </tr>
                            <tr className='list-table'>
                                <th height="80" >Deep cleaning</th>
                                <td>
                                    <div className='host-right'><HostRightIco /></div>
                                </td>
                                <td>
                                    <div className='host-wrong'><HostWrongIco /></div>
                                </td>
                            </tr>
                            <tr>
                                <th height="80" >$1m USD liability insurance</th>
                                <td>
                                    <div className='host-right'><HostRightIco /></div>
                                </td>
                                <td>
                                    <div className='host-right'><HostRightIco /></div>
                                </td>
                            </tr>
                            <tr className='pera-table'>
                                <td colSpan={windowWidth < 1024 ? 3 : 1}>You’re protected in the rare event that a guest gets hurt or their belongings are damaged or stolen.</td>
                                <td colSpan={2}></td>
                            </tr>
                            <tr>
                                <th height="80" >24-hour safety line</th>
                                <td>
                                    <div className='host-right'><HostRightIco /></div>
                                </td>
                                <td>
                                    <div className='host-wrong'><HostWrongIco /></div>
                                </td>
                            </tr>
                            <tr className='pera-table'>
                                <td colSpan={windowWidth < 1024 ? 3 : 1}>If you ever feel unsafe, our app provides one-tap access to specially trained safety agents, day or night.</td>
                                <td colSpan={2}></td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Comparison is based on public information and free offerings by top competitors as of 22/10. <NavLink>Find details and exclusions here.</NavLink></p>
                    <div className="air-cover-button">
                        <button>Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
