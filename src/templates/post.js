import React from "react"
import {graphql, Link} from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/post.css"
import {GatsbyImage} from "gatsby-plugin-image";

const Title = styled.h1`
  margin-bottom: 0.3rem;
`

const Date = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 0.5rem;
`

const FeaturedImage = styled(GatsbyImage)`
  margin-bottom: 2rem;
`

const Post = ({data}) => {
    const {title, date, content, featuredImage} = data.wpPost

    return (
        <Layout>
            <Seo title={title}/>
            <div className="post-container">
                <Title>{title}</Title>
                <Date>{date}</Date>
                {featuredImage && (
                    <FeaturedImage
                        image={featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData}
                        alt={featuredImage?.node?.alt || ``}
                    />
                )}
                <div dangerouslySetInnerHTML={{__html: content}}/>
                <Link to={`/blog`}>&larr; Zpátky na blog</Link>
            </div>
        </Layout>
    )
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
      date(formatString: "DD.MM.YYYY")
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
`
