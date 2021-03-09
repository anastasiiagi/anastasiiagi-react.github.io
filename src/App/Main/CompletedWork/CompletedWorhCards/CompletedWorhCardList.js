import React from 'react'
import CompletedWorhCardItem from './CompletedWorhCardItem'
import completedWorhCards from './completedWorhCards'

const CompletedWorhCardList = () => {
    return (
        <>
            <div className="completedWorh-wrap">
                {
                    completedWorhCards.map(({
                        id,
                        title,
                        text,
                    }) => (
                        <div className="completedWorh-cart" key={id}>
                            <CompletedWorhCardItem
                                title={title}
                                text={text}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default CompletedWorhCardList