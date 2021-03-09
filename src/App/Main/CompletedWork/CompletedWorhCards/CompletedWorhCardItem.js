import React from 'react'

const CompletedWorhCardItem = (props) => {
    return (
        <>
            <div className="completedWorh-cart">
                <h2 className="completedWorh-cart__title">{props.title}</h2>
                <p className="completedWorh-cart__text">{props.text}</p>
            </div>
        </>
    )
}

export default CompletedWorhCardItem