import React from 'react'

const CompletedWorhCardItem = ({
    title,
    text
}) => {
    return (
        <>
            <div className="completedWorh-cart">
                <h2 className="completedWorh-cart__title">{title}</h2>
                <p className="completedWorh-cart__text">{text}</p>
            </div>
        </>
    )
}

export default CompletedWorhCardItem