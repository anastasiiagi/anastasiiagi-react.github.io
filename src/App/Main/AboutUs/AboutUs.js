import React from 'react'
import points from './points.png'
import interiorPhotography from './interiorPhotography.png'

const AboutUs = () => {
    return (
        <>
            <section className="aboutUs">
                <div className="points aboutUs-points">
                    <img className="aboutUs-points__img" src={points} alt="points"/>
                </div>
                <div className="aboutUs-picture">
                    <img className="aboutUs__img" src={interiorPhotography} alt="interior Photography"/>
                </div>
                <div className="aboutUs-wrap">
                    <h5 className="subtitle">About us</h5>
                    <h2 className="title">Interioris The Will of An Epoch Mextreo</h2>
                    <p className="aboutUs__text">There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form injected
                        humour, or randomised words which don't look even slightly
                        believable.If you are going to use a passage of Lorem Ipsum,
                        sure there isn't anything embarrassing hidden the middleof text.
                        All the Lorem Ipsum generators on the Internettend to repeat
                        predefined chunks as necessary,making this the first true
                        generator on the Internet.</p>
                    <button className="button aboutUs__button">Learn more</button>
                </div>
            </section>
        </>
    )
}

export default AboutUs