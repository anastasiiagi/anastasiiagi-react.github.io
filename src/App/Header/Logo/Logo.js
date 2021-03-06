import React from 'react'
import logo from './logo.jpg'


const Logo = () => {
    return (
        <>
            <div className="header-logo">
                <a className="header-logo__link" href="#">
                    <img className="header-logo__img" src={logo} alt="logo"/>
                </a>
            </div>
        </>
    )
}

export default Logo