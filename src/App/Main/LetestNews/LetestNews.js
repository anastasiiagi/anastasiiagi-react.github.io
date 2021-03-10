import React from 'react'
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