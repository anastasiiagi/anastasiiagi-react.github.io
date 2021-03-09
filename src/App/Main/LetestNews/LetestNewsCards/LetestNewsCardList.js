import React from 'react'
import LetestNewsCardItem from './LetestNewsCardItem'
import letestNewsCards from './letestNewsCards'

const LetestNewsCardList = () => {
    return (
        <>
            <div className="letestNews-cards">
                {
                    letestNewsCards.map(({
                        id,
                        title,
                        text,
                    }) => (
                        <div className="letestNews-card" key={id}>
                            <LetestNewsCardItem 
                                title={title}
                                text={text}
                            />
                        </div>
                    ))
                }
                
                {/* <img className="picture letestNews__img" src={foto2} alt="img"/> */}
            </div>
        </>
    )
}
export default LetestNewsCardList