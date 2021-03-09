import React from 'react'
import ModernInteriorPicture from './ModernInteriorPicture/ModernInteriorPicture'
import ModernInteriorPoints from './ModernInteriorPoints/ModernInteriorPoints'
import ModernInteriorWrap from './ModernInteriorWrap/ModernInteriorWrap'



const ModernInterior = () => {
    return (
        <>
            <section className="modernInterior">
                <ModernInteriorPoints/>
                <ModernInteriorWrap />
                <ModernInteriorPicture/>
            </section>
        </>
    )
}

export default ModernInterior 