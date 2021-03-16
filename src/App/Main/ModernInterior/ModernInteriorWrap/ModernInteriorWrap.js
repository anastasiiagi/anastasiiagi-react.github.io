import React from 'react'
import { Link } from 'react-router-dom'

const ModernInteriorWrap = () => {
    return (
        <>
            <div className="modernInterior-wrap">
                <h5 className="subtitle">Modern interior</h5>
                <h1 className="modernInterior__title">Create Your Interior Design</h1>
                <p className="modernInterior__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation.</p>
                <Link to="/contact"><button className="button modernInterior__button">Contact</button></Link>
            </div>
        </>
    )
}

export default ModernInteriorWrap