import React from 'react'
import studio from './studio.jpg'
import './aboutUsPage.css'

const AboutUsPage = () => {
    return (
        <>
            <h1 className="title-page">About Us</h1>

            <section className="aboutUsPage">
                <div className="aboutUsPage__wrap">
                    <h2 className="aboutUsPage__title">Interior Lab Design Studio</h2>
                    <p className="aboutUsPage__text">
                        Welcome to our interior design laboratory - Interior LAB!
                        We are a team of professionals who know everything about the design and equipment of objects.
                        We are in love with our business and our clients. We create unique interiors.
                        We are engaged in the development of interior design from scratch,
                        from planning to completing the completed object. We also work with designers and separately deal with the professional
                        completion of objects with materials such as: tiles of all kinds, parquet boards and other wooden flooring, plumbing, lighting, video and audio components.
                        Interior LAB is a direct importer of products. We have been cooperating with renowned manufacturers for many years
                        and focus on the quality of the products we supply to our customers.
                        Turnkey interior design
                        Completion of objects
                        Retail
                    </p>
                </div>
                <img className="aboutUsPage__picture" src={studio} alt="interior Photography" />
            </section>
        </>
    )
}

export default AboutUsPage