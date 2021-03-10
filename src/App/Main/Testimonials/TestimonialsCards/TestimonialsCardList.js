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
                        image,
                        name,
                        position,
                        text,
                    }) => (
                        <div className="testimonials-card" key={id}>
                            <TestimonialsCardItem
                                image={image}
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