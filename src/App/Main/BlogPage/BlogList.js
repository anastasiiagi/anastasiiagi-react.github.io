import React from 'react'
import BlogListItem from './BlogListItem'
import blogData from './blogData'

const BlogList = () => {
    return (
        <>
            <section className="blogList">
                {
                    blogData.map(({
                        id,
                        title,
                        text,
                        image
                    }) => (
                        <div className="blog" key={id}>
                            <BlogListItem 
                                title={title}
                                text={text}
                                image={image}
                            />
                        </div>
                    ))
                }
            </section>
        </>
    )
}

export default BlogList