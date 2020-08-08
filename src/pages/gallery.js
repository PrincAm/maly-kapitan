import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import ImageGallery from "gatsby-plugin-cloudinary-image-gallery"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Title = styled.h1`
  margin-bottom: 1rem;
`

const ImageGalleryWrapper = styled.div`
  &:hover a {
    cursor: pointer;
  }
`

const Gallery = ({ folder, columns, orientation }) => {
  const data = useStaticQuery(graphql`
    query CloudinaryImage {
      allCloudinaryMedia {
        edges {
          node {
            secure_url
          }
        }
      }
    }
  `)

  const clImages = data.allCloudinaryMedia.edges

  console.log("DATA")
  console.log(data)

  return (
    <Layout>
      <SEO title="Galerie" />
      <Title>Galerie</Title>
      <div>raw data</div>
      <div>{JSON.stringify(data)}</div>
      {/* <StaticQuery
        query={imageGalleryQuery}
        render={data => (
          <ImageGalleryWrapper>
            <ImageGallery folder="gatsby" data={data} orientation="square" />
          </ImageGalleryWrapper>
        )}
      /> */}
      <div className="image-grid">
        {clImages.map((image, index) => (
          <div className="image-item" key={`${index}-cl`}>
            <img src={image.node.secure_url} alt={"no alt :("} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

// const imageGalleryQuery = graphql`
//   query galleryQuery {
//     cloudinaryImage: allCloudinaryImage {
//       edges {
//         node {
//           id
//           folder
//           thumb
//           imgUrl
//           width
//           height
//           orientation
//         }
//       }
//     }
//   }
// `

export default Gallery
