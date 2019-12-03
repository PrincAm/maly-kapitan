import React from "react"
import { graphql, Link } from "gatsby"

export default ({ data }) => {
  return (
    <>
      <h1>Posts</h1>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div key={node.id}>
          <h1>{node.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: node.content }} />
        </div>
      ))}
    </>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          content
          id
        }
      }
    }
  }
`

// allWordpressPost {
//   edges {
//     node {
//       title
//       excerpt
//       slug
//       content
//       featured_media {
//         localFile {
//           childImageSharp {
//             resolutions(width: 400, height: 600) {
//               ...GatsbyImageSharpResolutions_withWebp
//             }
//           }
//         }
//       }
//     }
//   }
// }
