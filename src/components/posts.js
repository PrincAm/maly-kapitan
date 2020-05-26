import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/postPreview"

const PostsInner = styled.div`
  margin: 0 auto;
  max-width: 60rem;
  padding-top: ${({ inOnWelcomePage }) => (inOnWelcomePage ? "3rem" : 0)};
`

const Title = styled.h1`
  margin-bottom: 1rem;
`

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
                  resolutions(width: 200, height: 200) {
                    ...GatsbyImageSharpResolutions_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
      placeholderImage: file(relativePath: { eq: "captain.jpg" }) {
        childImageSharp {
          resolutions(width: 200, height: 200) {
            ...GatsbyImageSharpResolutions_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  const numberOfPreviews = inOnWelcomePage
    ? 3
    : data.allWordpressPost.edges.length
  return (
    <PostsInner inOnWelcomePage={inOnWelcomePage}>
      <Title>{title}</Title>
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
    </PostsInner>
  )
}

export default Posts
