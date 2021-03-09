import React from 'react'

const ServiceCartItem = (props) => {
    return (
        <>
            <div className="service-card">
                {/* <div className="service-card__picture">
                    <img className="service-card__img" src={sr} alt="img"/>
                </div> */}
                <div className="service-card__wrap">
                    <h6 className="service-card__title">{props.title}</h6>
                    <p className="service-card__text">{props.text}</p>
                </div>
            </div>
        </>
    )
}

export default ServiceCartItem