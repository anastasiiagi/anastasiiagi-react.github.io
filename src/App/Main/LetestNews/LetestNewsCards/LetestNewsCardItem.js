import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LetestNewsCardItem extends Component {
    render() {
        const {
            title,
            text,
            image
        } = this.props

        return (
            <>
                <img className="picture letestNews__img" src={image} alt="img"/>
                <h3 className="letestNews__title">{title}</h3>
                <p className="letestNews__text">{text}</p>
                <button className="button button-big letestNews__button">Continue Readinc....</button>
            </>
        )
    }
}

LetestNewsCardItem.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
}

export default LetestNewsCardItem