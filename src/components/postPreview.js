import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
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
            resolutions={imageSharp.resolutions}
            key={imageSharp.resolutions.src}
          />
        ) : (
          <Img
            className="post-preview-img"
            resolutions={defaultImage.childImageSharp.resolutions}
            key={defaultImage.childImageSharp.resolutions.src}
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
