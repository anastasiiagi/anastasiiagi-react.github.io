import React from 'react'

import ServicePoints from './ServicePoints/ServicePoints'
import Switching from './Switching/Switching'
import ServiceTitles from './ServiceTitles/ServiceTitles'
import ServiceCartList from './ServiceCards/ServiceCardList'


const Service = () => {
    return (
        <>
            <section className="service">
                <ServiceTitles/>
                <Switching/>
                <ServiceCartList/>
                <ServicePoints/>
            </section>
        </>
    )
}

export default Service