import React from 'react'
import ServiceCartItem from './ServiceCardItem'
import serviceCards from './serviceCards'

const ServiceCartList = () => {
    return (
        <>
            <div className="service-cards">
                {
                    serviceCards.map(({
                        id,
                        title,
                        text,
                        image,
                    }) => (
                        <div className="service-card" key={id}>
                            <ServiceCartItem
                                image={image}
                                title={title}
                                text={text}
                            />
                        </div>
                    )) 
                }
            </div>
        </>
    )
}

export default ServiceCartList