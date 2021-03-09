import React from 'react'

const ServiceCartItem = ({
    title,
    text
}) => {
    return (
        <>
            {/* <div className="service-card__picture">
                <img className="service-card__img" src={sr} alt="img"/>
            </div> */}
            <div className="service-card__wrap">
                <h6 className="service-card__title">{title}</h6>
                <p className="service-card__text">{text}</p>
            </div>
        </>
    )
}

export default ServiceCartItem