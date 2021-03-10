import React from 'react'
import logo from './logo.jpg'
import {Link} from 'react-router-dom'


const Logo = () => {
    return (
        <>
            <div className="header-logo">
                <Link className="header-logo__link" to="/">
                    <img className="header-logo__img" src={logo} alt="logo"/>
                </Link>
            </div>
        </>
    )
}

export default Logo