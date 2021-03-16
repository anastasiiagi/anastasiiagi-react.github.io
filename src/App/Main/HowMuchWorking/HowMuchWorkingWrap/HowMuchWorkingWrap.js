import React from 'react'
import { Link } from 'react-router-dom'

const HowMuchWorkingWrap = () => {
    return (
        <>
            <div className="howMuchWorking-wrap">
                <span className="howMuchWorking__number">20</span>
                <h2 className="howMuchWorking__title">Years Of Successful Working The Market</h2>
                
                <Link to='/successful'><button className="button howMuchWorking__button">Read more</button></Link>
            </div>
        </>
    )
}

export default HowMuchWorkingWrap