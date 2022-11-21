import React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"
import Truncate from "react-truncate"
import {GatsbyImage, StaticImage} from 'gatsby-plugin-image';

import "../styles/postPreview.css"

const PostPreview = ({excerpt, date, title, featuredMedia, alt, uri}) => (
    <div className="post-preview-container">
        <Link to={uri}>
            {featuredMedia ? (
                <GatsbyImage
                    className="post-preview-image-wrapper"
                    image={featuredMedia}
                    alt={alt}
                />
            ) : (
                <StaticImage
                    src="../images/captain.jpg"
                    alt="dog head"
                    placeholder="blurred"
                    layout="fixed"
                    height={200}
                    width={200}
                />
            )}
        </Link>
        <div className="post-preview-content">
            <h3 className="post-preview-title">
                <Link to={uri}>{title}</Link>
            </h3>
            <div className="post-preview-date">{date}</div>
            <Truncate lines={4}>
                <div dangerouslySetInnerHTML={{__html: excerpt}}/>
            </Truncate>
        </div>
    </div>
)

export default PostPreview

PostPreview.propTypes = {
    excerpt: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
    featuredMedia: PropTypes.shape({}),
    alt: PropTypes.string,
}
