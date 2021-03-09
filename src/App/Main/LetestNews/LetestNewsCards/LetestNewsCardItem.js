import React from 'react'

const LetestNewsCardItem = (props) => {
    return (
        <>
            <div className="letestNews-card">
                {/* <img className="picture letestNews__img" src={foto1} alt="img"/> */}
                <h3 className="letestNews__title">{props.title}</h3>
                <p className="letestNews__text">{props.text}</p>
                <button className="button button-big letestNews__button">Continue Readinc....</button>
            </div>
        </>
    )
}
export default LetestNewsCardItem