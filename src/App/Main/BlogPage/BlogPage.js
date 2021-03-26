import React from 'react'
import './blog.css'
import BlogList from './BlogList'

const BlogPage = () => {
    return (
        <>
            <h1 className="title-page"> Blog</h1>

            <BlogList/>
        </>
    )
}

export default BlogPage