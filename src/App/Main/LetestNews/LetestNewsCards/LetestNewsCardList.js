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
                        image
                    }) => (
                        <div className="letestNews-card" key={id}>
                            <LetestNewsCardItem 
                                title={title}
                                text={text}
                                image={image}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default LetestNewsCardList