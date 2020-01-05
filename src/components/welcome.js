import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const WelcomeContainer = styled.div`
  background-color: #bbe1fa;
  height: 50vh;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 2rem 0;
  font-size: 3rem;
`

const Welcome = ({ content }) => (
  <WelcomeContainer>
    <Content dangerouslySetInnerHTML={{ __html: content }} />
  </WelcomeContainer>
)

export default Welcome

Welcome.propTypes = {
  content: PropTypes.string.isRequired,
}
