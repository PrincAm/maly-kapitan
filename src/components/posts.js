import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import classNames from "classnames"

import PostPreview from "../components/postPreview"

import "../styles/posts.css"

const Posts = ({ title, inOnWelcomePage }) => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost {
        edges {
          node {
            id
            content
            slug
            title
            status
            template
            format
            excerpt
            date(formatString: "DD.MM.YYYY")
            featured_media {
              id
              localFile {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 200) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
      placeholderImage: file(relativePath: { eq: "captain.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const numberOfPreviews = inOnWelcomePage
    ? 3
    : data.allWordpressPost.edges.length
  return (
    <div
      className={classNames("posts-container", { welcome: inOnWelcomePage })}
    >
      <h1 className="posts-title">{title}</h1>
      {data.allWordpressPost.edges
        .slice(0, numberOfPreviews)
        .map(({ node }) => (
          <PostPreview
            key={node.id}
            excerpt={node.excerpt}
            date={node.date}
            title={node.title}
            slug={node.slug}
            featuredMedia={node.featured_media}
            defaultImage={data.placeholderImage}
          />
        ))}
    </div>
  )
}

export default Posts

Posts.propTypes = {
  title: PropTypes.string.isRequired,
  inOnWelcomePage: PropTypes.bool.isRequired,
}
