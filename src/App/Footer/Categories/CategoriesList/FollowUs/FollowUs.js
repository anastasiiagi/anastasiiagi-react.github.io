import React from 'react'
import fcebook from './fcebook.png'
import twitter from './twitter.png'
import instagram from './instagram.png'
import linkedIn from './linkedIn.png'

const FollowUs = () => {
    return (
        <>
            <div className="footer-followUs">
                <h6 className="footer__title">Follow Us</h6>
                <a className="footer__link" href="#"><img className="footer__icon" src={fcebook} alt="icon"/></a>
                <a className="footer__link" href="#"><img className="footer__icon" src={twitter} alt="icon"/></a>
                <a className="footer__link" href="#"><img className="footer__icon" src={instagram} alt="icon"/></a>
                <a className="footer__link" href="#"><img className="footer__icon" src={linkedIn} alt="icon"/></a>
            </div>
        </>
    )
}

export default FollowUs