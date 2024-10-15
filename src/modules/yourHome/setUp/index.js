import React from 'react'
import "./setUp.scss"
import { setUpBg } from '../../../assets/images/image'

export default function SetUp() {
    return (
        <section className="set-up">
            <div className="container2">
                <div className="set-up-content">
                    <h2>Airbnb it easily with Airbnb Setup</h2>
                    <img src={setUpBg} alt="setUpBg" />
                    <div className="set-up-grid">
                        <div className="set-up-grid-box">
                            <h3>One-to-one guidance from a Superhost</h3>
                            <p>We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest – by phone, video call or chat.</p>
                        </div>
                        <div className="set-up-grid-box">
                            <h3>An experienced guest for your first booking</h3>
                            <p>For your first booking, you can choose to welcome an experienced guest who has at least three stays and a good track record on Airbnb.</p>
                        </div>
                        <div className="set-up-grid-box">
                            <h3>Specialised support from Airbnb</h3>
                            <p>New Hosts get one-tap access to specially trained Community Support agents who can help with everything from account issues to billing support.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
