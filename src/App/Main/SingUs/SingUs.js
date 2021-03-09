import React from 'react'

const SingUs = () => {
    return (
        <>
            <section className="singUs">
                <h2 className="title">Don't forget to sign up</h2>
                <hr className="singUs__line"/>
                <p className="singUs__text">Find out early about all upcoming promotions and new product releases with our newsletter.</p>
                <div className="singUs__forma">
                    <input className="singUs__input" type="text" placeholder="Enter your email address....."/>
                    <button className="button singUs__button">Subscribe</button>
                </div> 
            </section>
        </>
    )
}

export default SingUs