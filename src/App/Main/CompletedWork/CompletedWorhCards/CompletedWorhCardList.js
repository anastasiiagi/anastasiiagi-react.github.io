import React from 'react'
import CompletedWorhCardItem from './CompletedWorhCardItem'
import completedWorhCards from './completedWorhCards'

const CompletedWorhCardList = () => {
    return (
        <>
            <div className="completedWorh-wrap">
                {
                    completedWorhCards.map((completedWorhCard) => (
                        <CompletedWorhCardItem
                            title={completedWorhCard.title}
                            text={completedWorhCard.text}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default CompletedWorhCardList