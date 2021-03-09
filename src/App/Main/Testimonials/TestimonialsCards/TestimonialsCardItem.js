import React from 'react'

const TestimonialsCardItem = ({
    name,
    position,
    text
}) => {
    return (
        <>
            {/* <div className="testimonials-card__picture">
                <img className="testimonials-card__img" src={louis} alt="img"/>
            </div> */}
            <div className="testimonials-card__wrap">
                <div className="testimonials-card__title">
                    <h6 className="testimonials-card__name">{name}<span className="service-card__position">{position}</span></h6>
                    {/* <img className="testimonials-card__quotes" src={quotes} alt="quotes"/> */}
                </div>
                <p className="testimonials-card__text">{text}</p>
            </div>
        </>
    )
}

export default TestimonialsCardItem