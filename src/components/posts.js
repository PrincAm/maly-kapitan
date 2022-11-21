import React from "react"
import PropTypes from "prop-types"
import {graphql, useStaticQuery} from "gatsby"
import classNames from "classnames"

import PostPreview from "../components/postPreview"

import "../styles/posts.css"

const Posts = ({title, inOnWelcomePage = false}) => {
    const data = useStaticQuery(graphql`
    query WpPosts {
      # Query all WordPress blog posts sorted by date
      allWpPost(sort: {date: DESC}) {
        edges {
          node {
            id
            title
            excerpt
            date(formatString: "DD.MM.YYYY")
            uri
            featuredImage {
                node {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        quality: 100
                        placeholder: TRACED_SVG
                        layout: FULL_WIDTH
                      )
                    }
                  }
                }
              }
          }
        }
      }
    }
  `)

    const numberOfPreviews = inOnWelcomePage
        ? 3
        : data.allWpPost.edges.length
    return (
        <div
            className={classNames("posts-container", {welcome: inOnWelcomePage})}
        >
            <h1 className="posts-title">{title}</h1>
            {data.allWpPost.edges
                .slice(0, numberOfPreviews)
                .map(({node}) => (
                    <PostPreview
                        key={node.id}
                        excerpt={node.excerpt}
                        date={node.date}
                        title={node.title}
                        featuredMedia={node.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData}
                        alt={node.featuredImage?.node?.alt || ``}
                        uri={node.uri}
                    />
                ))}
        </div>
    )
}

export default Posts

Posts.propTypes = {
    title: PropTypes.string.isRequired,
    inOnWelcomePage: PropTypes.bool,
}
