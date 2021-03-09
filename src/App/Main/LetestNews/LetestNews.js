import React from 'react'
import foto1 from './foto1.png'
import foto2 from './foto2.png'
import LetestNewsCardList from './LetestNewsCards/LetestNewsCardList'
import LetestNewsTitles from './LetestNewsTitles/LetestNewsTitles'

const LetestNews = () => {
    return (
        <>
            <section className="letestNews">
                <LetestNewsTitles />
                <LetestNewsCardList />
            </section>
        </>
    )
}

export default LetestNews