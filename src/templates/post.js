import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/post.css"

const Title = styled.h1`
  margin-bottom: 0.3rem;
`

const Date = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 0.5rem;
`

const ImgWrapper = styled.div`
  margin: 0 auto 0.5rem auto;
  max-width: 30rem;
`

const Post = ({ data }) => {
  const { title, date, content, featured_media } = data.wordpressPost

  return (
    <Layout>
      <SEO title={title} />
      <div className="post-container">
        <Title>{title}</Title>
        <Date>{date}</Date>
        {featured_media && (
          <ImgWrapper>
            <Img
              fluid={featured_media.localFile.childImageSharp.fluid}
              key={featured_media.localFile.childImageSharp.fluid.src}
            />
          </ImgWrapper>
        )}
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <Link to={`/blog`}>&larr; Zpátky na blog</Link>
      </div>
    </Layout>
  )
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      date(formatString: "DD.MM.YYYY")
      featured_media {
        id
        localFile {
          childImageSharp {
            fluid(quality: 90, maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`
