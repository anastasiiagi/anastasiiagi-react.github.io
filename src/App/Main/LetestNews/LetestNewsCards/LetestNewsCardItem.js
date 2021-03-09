import React from 'react'

const LetestNewsCardItem = ({
    title,
    text
}) => {
    return (
        <>
            {/* <img className="picture letestNews__img" src={foto1} alt="img"/> */}
            <h3 className="letestNews__title">{title}</h3>
            <p className="letestNews__text">{text}</p>
            <button className="button button-big letestNews__button">Continue Readinc....</button>
        </>
    )
}
export default LetestNewsCardItem