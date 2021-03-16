import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <nav className="header-navigation">
                <ul className="header-menu">
                    <li className="header-menu__item"><Link className="header-menu__link" to="/">Home</Link></li>
                    <li className="header-menu__item"><Link className="header-menu__link" to="/project">Project</Link></li>
                    <li className="header-menu__item"><Link className="header-menu__link" to="/services">Services</Link></li>
                    <li className="header-menu__item"><Link className="header-menu__link" to="/aboutUs">About</Link></li>
                    <li className="header-menu__item"><Link className="header-menu__link" to="/blog">Blog</Link></li>
                    <li className="header-menu__item"><Link className="header-menu__link" to="/shop">Shop</Link></li>
                    <li className="header-menu__item"><Link className="header-menu__link" to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation