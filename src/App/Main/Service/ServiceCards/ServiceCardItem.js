import React from 'react'
import PropTypes from 'prop-types'

const ServiceCartItem = ({
    title,
    text,
    image
}) => {
    return (
        <>
            <div className="service-card__picture">
                <img className="service-card__img" src={image} alt="img"/>
            </div>
            <div className="service-card__wrap">
                <h6 className="service-card__title">{title}</h6>
                <p className="service-card__text">{text}</p>
            </div>
        </>
    )
}

ServiceCartItem.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
}

export default ServiceCartItem