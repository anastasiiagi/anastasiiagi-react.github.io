import React from 'react'
import points from './points.jpg'
import interiorPhotography from './interiorPhotography.png'

const ModernInterior = () => {
    return (
        <>
            <section className="modernInterior">
                <div className="points modernInterior-points">
                    <img className="modernInterior-points__img" src={points} alt="points"/>
                </div>
                <div className="modernInterior-wrap">
                    <h5 className="subtitle">Modern interior</h5>
                    <h1 className="modernInterior__title">Create Your Interior Design</h1>
                    <p className="modernInterior__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation.</p>
                    <button className="button modernInterior__button">Contact</button>
                </div>
                <div className="modernInterior-picture">
                    <img className="picture modernInterior__img" src={interiorPhotography} alt="interior Photography"/>
                </div>
            </section>
        </>
    )
}

export default ModernInterior 