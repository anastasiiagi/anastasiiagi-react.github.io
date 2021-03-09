import React from 'react'
import HowMuchWorkingPicture from './HowMuchWorkingPicture/HowMuchWorkingPicture'
import HowMuchWorkingWrap from './HowMuchWorkingWrap/HowMuchWorkingWrap'


const HowMuchWorking = () => {
    return (
        <>
            <section className="howMuchWorking">
                <HowMuchWorkingWrap />
                <HowMuchWorkingPicture/>
            </section>
        </>
    )
}

export default HowMuchWorking