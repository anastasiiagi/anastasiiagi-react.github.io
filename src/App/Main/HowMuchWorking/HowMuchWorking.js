import React from 'react'
import interiorPhotography from './interiorPhotography.png'

const HowMuchWorking = () => {
    return (
        <>
            <section className="howMuchWorking">
                <div className="howMuchWorking-wrap">
                    <span className="howMuchWorking__number">20</span>
                    <h2 className="howMuchWorking__title">Years Of Successful Working The Market</h2>
                    <button className="button howMuchWorking__button">Read more</button>
                </div>
                <div className="howMuchWorking-picture">
                    <img className="howMuchWorking__img" src={interiorPhotography} alt="interior Photography"/>
                </div>
            </section>
        </>
    )
}

export default HowMuchWorking