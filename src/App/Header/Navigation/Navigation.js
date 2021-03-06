import React from 'react'

const Navigation = () => {
    return (
        <>
            <nav className="header-navigation">
                <ul className="header-menu">
                    <li className="header-menu__item"><a className="header-menu__link" href="#">Home</a></li>
                    <li className="header-menu__item"><a className="header-menu__link" href="#">Project</a></li>
                    <li className="header-menu__item"><a className="header-menu__link" href="#">Services</a></li>
                    <li className="header-menu__item"><a className="header-menu__link" href="#">About</a></li>
                    <li className="header-menu__item"><a className="header-menu__link" href="#">Blog</a></li>
                    <li className="header-menu__item"><a className="header-menu__link" href="#">Shop</a></li>
                    <li className="header-menu__item"><a className="header-menu__link" href="#">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation