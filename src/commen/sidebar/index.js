import React, { useState } from 'react';
import './sidebar.scss';
import CloseIco from '../../assets/images/svg/closeIco';
import ExploreIco from '../../assets/images/svg/exploreIco';
import StayContent from './sideContent/stayContent';
import ExpContent from './sideContent/expContent';

export default function Sidebar({ isOpen, toggleSidebar }) {
    const [activeSection, setActiveSection] = useState('stays');

    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="aside-div">
                <div className="aside-header">
                    <div className="close-btn">
                        <button  aria-label="close button" type="button" onClick={toggleSidebar}>
                            <CloseIco />
                        </button>
                    </div>
                    <div className="aside-header-link">
                        <button
                            type="button"
                            onClick={() => setActiveSection('stays')}
                            className={activeSection === 'stays' ? 'active' : ''}>
                            Stays
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveSection('experiences')}
                            className={activeSection === 'experiences' ? 'active' : ''}>
                            Experiences
                        </button>
                    </div>
                </div>

                <div className="aside-content">
                    {activeSection === 'stays' && (
                        <StayContent />
                    )}
                    {activeSection === 'experiences' && (
                        <ExpContent />
                    )}
                </div>

                <div className="aside-footer">
                    <div className="clear-all-btn">
                        <button>
                            Clear all
                        </button>
                    </div>
                    <div className="search-btn">
                        <button>
                            <ExploreIco />
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}
