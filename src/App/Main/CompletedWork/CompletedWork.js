import React from 'react'
import CompletedWorhCardList from './CompletedWorhCards/CompletedWorhCardList'

const CompletedWork = () => {
    return (
        <>
            <section className="completedWork">
                <h2 className="completedWork__title">3000+ Completed Work Which WE have Successfully Done</h2>
                <CompletedWorhCardList/>
            </section>
        </>
    )
}

export default CompletedWork