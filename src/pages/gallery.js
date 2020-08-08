import React, { useState, useCallback } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import ImageGallery from "react-photo-gallery"
import ReactBnbGallery from "react-bnb-gallery"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/gallery.css"
import "react-bnb-gallery/dist/style.css"

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
            width
            height
          }
        }
      }
    }
  `)

  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpened, setViewerOpened] = useState(false)

  const openViewer = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerOpened(true)
  }, [])

  const photos = data.allCloudinaryMedia.edges.map((image, index) => {
    return {
      src: image.node.secure_url,
      width: image.node.width,
      height: image.node.height,

      photo: image.node.secure_url,
      number: index,
    }
  })

  return (
    <Layout>
      <SEO title="Galerie" />
      <Title>Galerie</Title>
      <ImageGallery photos={photos} onClick={openViewer} />
      <ReactBnbGallery
        showThumbnails={false}
        activePhotoIndex={currentImage}
        show={isViewerOpened}
        photos={photos}
        onClose={() => setViewerOpened(false)}
      />
    </Layout>
  )
}

export default Gallery
