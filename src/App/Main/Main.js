import React from 'react'

import AboutUs from './AboutUs/AboutUs'
import ProjectPage from './ProjectPage/ProjectPage'
import ServicesPage from './ServicesPage/ServicesPage'
import AboutUsPage from './AboutUsPage/AboutUsPage'
import BlogPage from './BlogPage/BlogPage'
import ShopPage from './ShopPage/ShopPage'
import { Route } from 'react-router-dom'

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
                {/* <ModernInterior/>
                <Service/>
                <AboutUs />
                <HowMuchWorking/>
                <CompletedWork/>
                <Testimonials/>
                <LetestNews />
                <SingUs/> */}

                <Route path="/" exact render={() => <ModernInterior />} />
                <Route path="/" exact render={() => <Service />} />
                <Route path="/" exact render={() => <AboutUs />} />
                <Route path="/" exact render={() => <HowMuchWorking />} />
                <Route path="/" exact render={() => <CompletedWork />} />
                <Route path="/" exact render={() => <Testimonials />} />
                <Route path="/" exact render={() => <LetestNews />} />
                <Route path="/" exact render={() => <SingUs />} />

                <Route path="/project" component={ProjectPage} />
                <Route path="/services" component={ServicesPage} />
                <Route path="/aboutUs" component={AboutUsPage} />
                <Route path="/blog" component={BlogPage} />
                <Route path="/shop" component={ShopPage} />
                
            </main>
        </>
    )
}

export default Main