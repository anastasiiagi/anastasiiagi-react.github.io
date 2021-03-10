import React from 'react'
import TestimonialsTitles from './TestimonialsTitles/TestimonialsTitles'
import Switching from './Switching/Switching'
import TestimonialsCardList from './TestimonialsCards/TestimonialsCardList'



const Testimonials = () => {
    return (
        <>
            <section className="testimonials">
                <TestimonialsTitles />
                <Switching />
                <TestimonialsCardList/>
            </section>
        </>
    )
}

export default Testimonials