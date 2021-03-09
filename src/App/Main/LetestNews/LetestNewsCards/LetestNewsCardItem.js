import React from 'react'
import PropTypes from 'prop-types'

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

LetestNewsCardItem.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
}

export default LetestNewsCardItem