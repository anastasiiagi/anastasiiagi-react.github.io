import React from 'react'
import foto1 from './foto1.png'
import foto2 from './foto2.png'

const LetestNews = () => {
    return (
        <>
            <section className="letestNews">
                <div className="letestNews-titles">
                    <h5 className="subtitle">Letest News</h5>
                    <h2 className="title">From Our Blog</h2>
                </div>
                <div className="letestNews-cards">
                    <div className="letestNews-card">
                        <img className="picture letestNews__img" src={foto1} alt="img"/>
                        <h3 className="letestNews__title">2020 Interior Design Trends</h3>
                        <p className="letestNews__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.</p>
                        <button className="button button-big letestNews__button">Continue Readinc....</button>
                    </div>
                    <div className="letestNews-card">
                        <img className="picture letestNews__img" src={foto2} alt="img"/>
                        <h3 className="letestNews__title">28 Notable Product at ARC Interior Design</h3>
                        <p className="letestNews__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.</p>
                        <button className="button button-big letestNews__button">Continue Readinc....</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LetestNews