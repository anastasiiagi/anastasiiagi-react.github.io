import React from 'react'
import arrowBack from './arrowBack.png'
import arrowForth from './arrowForth.png'
import louis from './louis.png'
import rekha from './rekha.png'
import quotes from './quotes.png'



const Testimonials = () => {
    return (
        <>
            <section className="testimonials">
                <div className="testimonials-titles">
                    <h5 className="subtitle">Testimonials</h5>
                    <h2 className="title">Client says about us</h2>
                </div>
                <div className="switching testimonials-switching">
                    <div className="forth">
                        <img className="arrow-forth__img" src={arrowBack} alt="arrow-forth"/>
                    </div>
                    <div className="back">
                        <img className="arrow-back__img" src={arrowForth} alt="arrow-back"/>
                    </div>
                </div>
                <div className="testimonials-cards">
                    <div className="testimonials-card">
                        <div className="testimonials-card__picture">
                            <img className="testimonials-card__img" src={louis} alt="img"/>
                        </div>
                        <div className="testimonials-card__wrap">
                            <div className="testimonials-card__title">
                                <h6 className="testimonials-card__name">Louis Saville<span className="service-card__position"> /CEO at Google inc</span></h6>
                                <img className="testimonials-card__quotes" src={quotes} alt="quotes"/>
                            </div>
                            <p className="testimonials-card__text">Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="testimonials-card">
                        <div className="testimonials-card__picture">
                            <img className="testimonials-card__img" src={rekha} alt="img"/>
                        </div>
                        <div className="testimonials-card__wrap">
                            <div className="testimonials-card__title">
                                <h6 className="testimonials-card__name">Rekha Varadwaz<span className="service-card__position"> /Manager at Nike inc</span></h6>
                                <img className="testimonials-card__quotes" src={quotes} alt="quotes"/>
                            </div>
                            <p className="testimonials-card__text">Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials