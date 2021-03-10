import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CompletedWorhCardItem extends Component {
    render() {
        const {
            title,
            text
        } = this.props

        return (
            <>
                <h2 className="completedWorh-cart__title">{title}</h2>
                <p className="completedWorh-cart__text">{text}</p>    
            </>
        )
    }
}

CompletedWorhCardItem.propTypes = {
    title: PropTypes.number,
    text: PropTypes.string,
}

export default CompletedWorhCardItem