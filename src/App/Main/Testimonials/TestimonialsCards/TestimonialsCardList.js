import React from 'react'
import TestimonialsCardItem from './TestimonialsCardItem'
import testimonialsCards from './testimonialsCards'

const TestimonialsCardList = () => {
    return (
        <>
            <div className="testimonials-cards">
                {
                    testimonialsCards.map((testimonialsCard) => (
                        <TestimonialsCardItem
                            name={testimonialsCard.name}
                            position={testimonialsCard.position}
                            text={testimonialsCard.text}
                        />
                    ))        
                }
            </div>
        </>
    )
}

export default TestimonialsCardList