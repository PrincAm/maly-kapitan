import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Truncate from "react-truncate"
import Img from "gatsby-image"

const Preview = styled.div`
  display: flex;
  margin-bottom: 2rem;
`
const PreviewImg = styled(Img)`
  flex-shrink: 0;
`
const Content = styled.div`
  margin-left: 1rem;
`
const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0.2rem;
`
const Date = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 0.5rem;
`

const PostPreview = ({
  excerpt,
  date,
  title,
  slug,
  featuredMedia,
  defaultImage,
}) => {
  const imageSharp = featuredMedia && featuredMedia.localFile.childImageSharp
  return (
    <Preview>
      {imageSharp ? (
        <PreviewImg
          resolutions={imageSharp.resolutions}
          key={imageSharp.resolutions.src}
        />
      ) : (
        <PreviewImg
          resolutions={defaultImage.childImageSharp.resolutions}
          key={defaultImage.childImageSharp.resolutions.src}
        />
      )}
      <Content>
        <Title>
          <Link to={`/post/${slug}`}>{title}</Link>
        </Title>
        <Date>{date}</Date>
        <Truncate lines={4}>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        </Truncate>
      </Content>
    </Preview>
  )
}

export default PostPreview
