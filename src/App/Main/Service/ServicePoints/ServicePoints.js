import React from 'react'
import points from './points.png'

const ServicePoints = () => {
    return (
        <>
            <div className="service-points">
                <img className="service-points__img" src={points} alt="points"/>
            </div>
        </>
    )
}

export default ServicePoints