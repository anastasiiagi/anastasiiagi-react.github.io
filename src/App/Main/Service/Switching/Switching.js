import React from 'react'
import arrowBack from './arrowBack.png'
import arrowForth from './arrowForth.png'

const Switching = () => {
    return (
        <>
            <div className="switching">
                <div className="forth">
                    <img className="arrow-forth__img" src={arrowBack} alt="arrow-forth"/>
                </div>
                <div className="back">
                    <img className="arrow-back__img" src={arrowForth} alt="arrow-back"/>
                </div>
            </div>
        </>
    )
}

export default Switching