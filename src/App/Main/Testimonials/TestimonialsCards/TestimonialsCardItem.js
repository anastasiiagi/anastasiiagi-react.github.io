import React from 'react'

const TestimonialsCardItem = (props) => {
    return (
        <>
            <div className="testimonials-card">
                {/* <div className="testimonials-card__picture">
                    <img className="testimonials-card__img" src={louis} alt="img"/>
                </div> */}
                <div className="testimonials-card__wrap">
                    <div className="testimonials-card__title">
                        <h6 className="testimonials-card__name">{props.name}<span className="service-card__position">{props.position}</span></h6>
                        {/* <img className="testimonials-card__quotes" src={quotes} alt="quotes"/> */}
                    </div>
                    <p className="testimonials-card__text">{props.text}</p>
                </div>
            </div>
        </>
    )
}

export default TestimonialsCardItem