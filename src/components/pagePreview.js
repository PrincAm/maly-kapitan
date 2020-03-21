import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Truncate from "react-truncate"

const Preview = styled.div`
  h3 {
    margin-bottom: 0.2rem;
  }
  .btn-filled {
    display: none;
  }
`

const Date = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 0.5rem;
`

const PagePreview = ({ excerpt, date, title, slug }) => (
  <Preview>
    <h3>
      <Link to={`/post/${slug}`}>{title}</Link>
    </h3>
    <Date>{date}</Date>
    <Truncate lines={2}>
      <div dangerouslySetInnerHTML={{ __html: excerpt }} />
    </Truncate>
  </Preview>
)

export default PagePreview
