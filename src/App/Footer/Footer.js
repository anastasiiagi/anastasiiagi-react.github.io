import React from 'react'
import Categories from './Categories/Categories'
import SiteYear from './SiteYear/SiteYear'

const Footer = () => {
    return (
        <>
            <footer className="footer footer-container">
                <Categories />
                
                <hr className="footer-line" />
                
                <SiteYear/>
            </footer>
        </>
    )
}

export default Footer