import React, { Component } from 'react'

class BlogListItem extends Component {
    render() {
        const {
            title,
            text,
            image
        } = this.props

        return (
            <>
                <img className="blog-img" src={image} alt="foto"></img>
                <div className="blog__wrap">
                    <h2 className="blog-title">{title}</h2>
                    <p className="blog-text">{text}</p>
                </div> 
            </>
        )
    }
}

export default BlogListItem