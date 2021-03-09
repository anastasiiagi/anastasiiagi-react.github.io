import React from 'react'
import TestimonialsCardItem from './TestimonialsCardItem'

const TestimonialsCardList = () => {
    return (
        <>
            <div className="testimonials-cards">
                <TestimonialsCardItem
                    name="Louis Saville"
                    position=" /CEO at Google inc"
                    text="Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TestimonialsCardItem
                    name="Rekha Varadwaz"
                    position=" /Manager at Nike inc"
                    text="Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
        </>
    )
}

export default TestimonialsCardList