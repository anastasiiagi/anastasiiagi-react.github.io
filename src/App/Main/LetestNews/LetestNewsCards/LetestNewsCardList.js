import React from 'react'
import LetestNewsCardItem from './LetestNewsCardItem'
import letestNewsCards from './letestNewsCards'

const LetestNewsCardList = () => {
    return (
        <>
            <div className="letestNews-cards">
                {
                    letestNewsCards.map((letestNewsCard) => (
                        <LetestNewsCardItem 
                            title={letestNewsCard.title}
                            text={letestNewsCard.text}
                        />
                    ))
                }
                
                {/* <img className="picture letestNews__img" src={foto2} alt="img"/> */}
            </div>
        </>
    )
}
export default LetestNewsCardList