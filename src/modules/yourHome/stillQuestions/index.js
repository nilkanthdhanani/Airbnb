import React from 'react'
import "./stillQuestions.scss"
import { questionsBg, questionsBgTeb } from '../../../assets/images/image'

export default function StillQuestions() {
    return (
        <section className='still-questions'>
            <div className="container2">
                <div className="still-questions-content">
                    <div className="still-questions-img">
                        <picture>
                            <source media="(max-width: 1024px)" srcSet={questionsBgTeb} />
                        <img src={questionsBg} alt="questionsBg" />
                        </picture>
                    </div>
                    <div className="still-questions-div">
                        <h2>Still have questions?</h2>
                        <p>Get answers from an experienced Superhost near you.</p>
                        <button>Match with a Superhost</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
