import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default ({ data }) => {
  return (
    <>
      <h1>Images</h1>
      {data.allWordpressWpMedia.edges.map(({ node }) => (
        <Img
          resolutions={node.localFile.childImageSharp.resolutions}
          key={node.localFile.childImageSharp.resolutions.src}
        />
      ))}
      <div>
        <h1>Pages</h1>
        {data.allWordpressPage.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={node.slug}>
              <h2>{node.title}</h2>
            </Link>
            <h3>{node.excerpt}</h3>
          </div>
        ))}
      </div>
      <h1>Posts</h1>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div key={node.slug}>
          <Link to={node.slug}>
            <h2>{node.title}</h2>
          </Link>
          <h3>{node.excerpt}</h3>
        </div>
      ))}

      {console.log(data)}
    </>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
    allWordpressWpMedia {
      edges {
        node {
          localFile {
            childImageSharp {
              resolutions(width: 500, height: 500) {
                ...GatsbyImageSharpResolutions_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
