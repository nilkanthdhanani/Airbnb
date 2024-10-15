import React, { useState } from 'react';
import './yourQuestions.scss';
import HostDropIco from '../../../assets/images/svg/hostDropIco';
import { NavLink } from 'react-router-dom';

const faqData = [
    {
        title: "Is my place right for Airbnb?",
        content: "Airbnb guests are interested in all kinds of places. We have listings for tiny homes, cabins, tree houses and more. Even a spare room can be a great place to stay."
    },
    {
        title: "Do I have to host all the time?",
        content: "Not at all – you control your calendar. You can host once a year, a few nights a month or more often."
    },
    {
        title: "How much should I interact with guests?",
        content: "It’s up to you. Some Hosts prefer to message guests only at key moments – like sending a short note when they check in – while others also enjoy meeting their guests in person. You’ll find a style that works for you and your guests."
    },
    {
        title: "Any tips on being a great Airbnb Host?",
        content: "Getting the basics down goes a long way. Keep your place clean, respond to guests promptly and provide necessary amenities like fresh towels. Some Hosts like adding a personal touch such as putting out fresh flowers or sharing a list of local places to explore – but it’s not required.",
        link: "Read on for more hosting tips"
    },
    {
        title: "What are Airbnb’s fees?",
        content: "Airbnb typically collects a flat service fee of 3% of the reservation subtotal when you get paid. We also collect a fee from guests when they book. In many areas Airbnb also collects and pays sales and tourism taxes automatically on your behalf.",
        link: "Learn more about fees"
    },
];

export default function YourQuestions() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className='your-questions'>
            <div className="container">
                <div className="your-questions-content">
                    <h2>Your questions,<span>answered</span></h2>
                    <div className="your-questions-faq">
                        {faqData.map((data, index) => (
                            <div className="faq-box" key={index}>
                                <div
                                    className="faq-box-main"
                                    onClick={() => toggleFAQ(index)}>
                                    <h3>{data.title}</h3>
                                    <HostDropIco
                                        className={openIndex === index ? 'rotated' : ''}
                                    />
                                </div>
                                <div
                                    className={`faq-content ${openIndex === index ? 'open' : ''}`}>
                                    <p>{data.content}</p>
                                    {data.link && <NavLink to="#">{data.link}</NavLink>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
