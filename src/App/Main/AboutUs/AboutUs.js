import React from 'react'

import AboutUsWrap from './AboutUsWrap/AboutUsWrap'
import AboutUsPicture from './AboutUsPicture/AboutUsPicture'
import AboutUsPoints from './AboutUsPoints/AboutUsPoints'

const AboutUs = () => {
    return (
        <>
            <section className="aboutUs">
                <AboutUsPoints/>
                <AboutUsPicture/>
                <AboutUsWrap/>
            </section>
        </>
    )
}

export default AboutUs