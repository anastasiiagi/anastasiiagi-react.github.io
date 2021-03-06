import React from 'react'
import AboutUs from './AboutUs/AboutUs'
import CompletedWork from './CompletedWork/CompletedWork'
import HowMuchWorking from './HowMuchWorking/HowMuchWorking'
import LetestNews from './LetestNews/LetestNews'
import ModernInterior from './ModernInterior/ModernInterior'
import Service from './Service/Service'
import SingUs from './SingUs/SingUs'
import Testimonials from './Testimonials/Testimonials'

const Main = () => {
    return (
        <>
            <main className="main main-conteiner">
                <ModernInterior/>
                <Service/>
                <AboutUs/>
                <HowMuchWorking/>
                <CompletedWork/>
                <Testimonials/>
                <LetestNews />
                <SingUs/>
            </main>
        </>
    )
}

export default Main