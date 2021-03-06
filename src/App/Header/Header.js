import React from 'react'

import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'

const Header = () => {
    return (
        <>
            <header className="header header-container">
                <Logo/>
                <Navigation />
                <button className="button header__button">Sign Up</button>
            </header>
        </>
    )
}

export default Header