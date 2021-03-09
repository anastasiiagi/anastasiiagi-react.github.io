import React from 'react'
import TestimonialsCardItem from './TestimonialsCardItem'
import testimonialsCards from './testimonialsCards'

const TestimonialsCardList = () => {
    return (
        <>
            <div className="testimonials-cards">
                {
                    testimonialsCards.map(({
                        id,
                        name,
                        position,
                        text,
                    }) => (
                        <div className="testimonials-card" key={id}>
                            <TestimonialsCardItem
                                name={name}
                                position={position}
                                text={text}
                            />
                        </div>
                    ))        
                }
            </div>
        </>
    )
}

export default TestimonialsCardList