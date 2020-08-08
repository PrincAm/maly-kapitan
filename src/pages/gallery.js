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
    query galleryQuery {
      cloudinaryImage: allCloudinaryImage {
        edges {
          node {
            id
            folder
            thumb
            imgUrl
            width
            height
            orientation
          }
        }
      }
    }
  `)

  console.log("DATA")
  console.log(data)

  return (
    <Layout>
      <SEO title="Galerie" />
      <Title>Galerie</Title>
      {/* <StaticQuery
        query={imageGalleryQuery}
        render={data => (
          <ImageGalleryWrapper>
            <ImageGallery folder="gatsby" data={data} orientation="square" />
          </ImageGalleryWrapper>
        )}
      /> */}
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
