import React from 'react'

import sr from './sr.png'
import ere from './ere.png'
import sd from './sd.png'
import ServiceCartItem from './ServiceCardItem'

const ServiceCartList = () => {
    return (
        <>
            <div className="service-cards">
                <ServiceCartItem
                    title="Interior Design"
                    text="Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore."
                />
                <ServiceCartItem 
                    title="Architecture"
                    text="Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore."
                />
                <ServiceCartItem 
                    title="Planning"
                    text="Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore."
                />
            </div>
        </>
    )
}

export default ServiceCartList