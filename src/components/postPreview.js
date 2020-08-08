import React from "react"
import { Link } from "gatsby"
import Truncate from "react-truncate"
import Img from "gatsby-image"

import "../styles/postPreview.css"

const PostPreview = ({
  excerpt,
  date,
  title,
  slug,
  featuredMedia,
  defaultImage,
}) => {
  const imageSharp = featuredMedia && featuredMedia.localFile.childImageSharp
  return (
    <div className="post-preview-container">
      <Link to={`/post/${slug}`}>
        {imageSharp ? (
          <Img
            className="post-preview-img"
            fluid={imageSharp.fluid}
            key={imageSharp.fluid.src}
          />
        ) : (
          <Img
            className="post-preview-img"
            fluid={defaultImage.childImageSharp.fluid}
            key={defaultImage.childImageSharp.fluid.src}
          />
        )}
      </Link>
      <div className="post-preview-content">
        <h3 className="post-preview-title">
          <Link to={`/post/${slug}`}>{title}</Link>
        </h3>
        <div className="post-preview-date">{date}</div>
        <Truncate lines={4}>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        </Truncate>
      </div>
    </div>
  )
}

export default PostPreview
