import React from 'react'
import LetestNewsCardItem from './LetestNewsCardItem'

const LetestNewsCardList = () => {
    return (
        <>
            <div className="letestNews-cards">
                <LetestNewsCardItem 
                    title="2020 Interior Design Trends"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua."
                />
                <LetestNewsCardItem 
                    title="28 Notable Product at ARC Interior Design"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua."
                />
                {/* <img className="picture letestNews__img" src={foto2} alt="img"/> */}
            </div>
        </>
    )
}
export default LetestNewsCardList