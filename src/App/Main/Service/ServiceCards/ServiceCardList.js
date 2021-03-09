import React from 'react'

import sr from './sr.png'
import ere from './ere.png'
import sd from './sd.png'
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
                    }) => (
                        <div className="service-card" key={id}>
                            <ServiceCartItem
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