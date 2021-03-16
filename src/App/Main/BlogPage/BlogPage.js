import React from 'react'
import office1 from './office1.jpg'
import apartment from './apartment.jpg'
import office2 from './office2.jpg'
import office3 from './office3.jpg'
import office4 from './office4.jpg'

const BlogPage = () => {
    return (
        <>
            <h1 className="title-page"> Blog</h1>

            <div>
                <img className="blog-img" src={office1} alt="foto"></img>
                <h2 className="blog-title">ITERA OFFICE - HUGGE WORKSPACE</h2>
                <p className="blog-text">Partner Design has created a hygge-style office for Itera. Comfort, restraint and
                    environmental friendliness, a combination of loft and eco style.
                    We decided not to be shy and tell a little more about the projects we worked on.</p>
            </div>
            <div>
                <img className="blog-img" src={apartment} alt="foto"></img>
                <h2 className="blog-title">APARTMENT DESIGN: ADVANTAGES OF READY SOLUTIONS</h2>
                <p className="blog-text">Today, the greatest value of a modern person is time! And independent design experiments take away free time and lead to an
                irrational distribution of financial resources. Accordingly, when looking for future housing,
                buyers take into account not only the location and comfort of the residential complex,
                but also the degree of readiness of the apartment space for living. Buyers are ready to rely on specialists who
                will take over the organization of the entire process of arranging a stylish and comfortable home.</p>
            </div>
            <div>
                <img className="blog-img" src={office2} alt="foto"></img>
                <h2 className="blog-title">CO-WORKING: DISADVANTAGES AND ADVANTAGES</h2>
                <p className="blog-text">Let's talk about what co-working is, how it fundamentally differs from a classic office,
                and what are the advantages and disadvantages of modern coworking interiors.
                Indeed, in recent years, radical transformations have taken place. Now the concept of coworking has become
                 not just an alternative to traditional lease for startups and freelancers, but a new trend in corporate design.</p>
            </div>
            <div>
                <img className="blog-img" src={office3} alt="foto"></img>
                <h2 className="blog-title">THREE TRUTH AND ONE TRUTH ABOUT LOFT</h2>
                <p className="blog-text">Everyone loves a loft. But does everyone understand the same thing by this word?
                We debunk the most persistent myths about this style. LOFT IS FAST AND ...</p>
            </div>
            <div>
                <img className="blog-img" src={office4} alt="foto"></img>
                <h2 className="blog-title">FIVE MISTAKES WHEN CHOOSING A COMPANY FOR OFFICE DESIGN</h2>
                <p className="blog-text">Office interior design is one of the ways to demonstrate the positions and values ​​of a business;
                it is designed to reflect the philosophy, present the corporate identity of the company.
                To create a unique office design, you have to work hard, bringing every detail to perfection.
                A company that undertakes such a task must provide an integrated approach to design development:
                from idea creation to practical implementation, so that the end result reflects the specifics of your business.</p>
            </div>
        </>
    )
}

export default BlogPage