import React from 'react'
import PropTypes from 'prop-types'
import quotes from './quotes.png'

const TestimonialsCardItem = ({
    name,
    position,
    text,
    image,
}) => {
    return (
        <>
            <div className="testimonials-card__picture">
                <img className="testimonials-card__img" src={image} alt="img"/>
            </div>
            <div className="testimonials-card__wrap">
                <div className="testimonials-card__title">
                    <h6 className="testimonials-card__name">{name}<span className="service-card__position">{position}</span></h6>
                    <img className="testimonials-card__quotes" src={quotes} alt="quotes"/>
                </div>
                <p className="testimonials-card__text">{text}</p>
            </div>
        </>
    )
}

TestimonialsCardItem.propTypes = {
    name: PropTypes.string,
    position: PropTypes.string,
    text: PropTypes.string,
}

export default TestimonialsCardItem