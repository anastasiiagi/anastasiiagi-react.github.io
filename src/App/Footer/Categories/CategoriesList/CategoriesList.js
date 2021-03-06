import React from 'react'
import QuickLinks from './QuickLinks/QuickLinks'
import Company from './Company/Company'
import ContactUs from './ContactUs/ContactUs'
import FollowUs from './FollowUs/FollowUs'

const CategoriesList = () => {
    return(
        <>
            <div className="footer-categories__list">
                <QuickLinks />
                <Company />
                <ContactUs />
                <FollowUs />
            </div>
        </>
    )
}

export default CategoriesList