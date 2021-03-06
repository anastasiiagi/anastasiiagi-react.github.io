import React from 'react'

import arrowBack from './arrowBack.png'
import arrowForth from './arrowForth.png'
import sr from './sr.png'
import ere from './ere.png'
import sd from './sd.png'
import points from './points.png'

const Service = () => {
    return (
        <>
            <section className="service">
                <div className="service-titles">
                    <h5 className="subtitle">What we do</h5>
                    <h2 className="title">Our Service</h2>
                </div>
                <div className="switching">
                    <div className="forth">
                        <img className="arrow-forth__img" src={arrowBack} alt="arrow-forth"/>
                    </div>
                    <div className="back">
                        <img className="arrow-back__img" src={arrowForth} alt="arrow-back"/>
                    </div>
                </div>
                <div className="service-cards">
                    <div className="service-card">
                        <div className="service-card__picture">
                            <img className="service-card__img" src={sr} alt="img"/>
                        </div>
                        <div className="service-card__wrap">
                            <h6 className="service-card__title">Interior Design</h6>
                            <p className="service-card__text">Lorem ipsum dolor amet consectetur
                            adipiscing elit sed eiusmod tempor incididunt ut labore.</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-card__picture">
                            <img className="service-card__img" src={ere} alt="img"/>
                        </div>
                        <div className="service-card__wrap">
                            <h6 className="service-card__title">Architecture</h6>
                            <p className="service-card__text">Lorem ipsum dolor amet consectetur
                            adipiscing elit sed eiusmod tempor incididunt ut labore.</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-card__picture">
                            <img className="service-card__img" src={sd} alt="img"/>
                        </div>
                        <div className="service-card__wrap">
                            <h6 className="service-card__title">Planning</h6>
                            <p className="service-card__text">Lorem ipsum dolor amet consectetur
                            adipiscing elit sed eiusmod tempor incididunt ut labore.</p>
                        </div>
                    </div>
                </div>
                <div className="service-points">
                    <img className="service-points__img" src={points} alt="points"/>
                </div>
            </section>
        </>
    )
}

export default Service