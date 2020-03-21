import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useTrail, animated } from "react-spring"
import BackgroundImage from "gatsby-background-image"

import SEO from "./seo"
import Posts from "./posts"

const WelcomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("../../images/cover.jpg");
  padding-top: 20rem;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 5rem 0;
  font-size: 3rem;
`

const Welcome = ({ content }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "cover.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  )
  const imageData = desktop.childImageSharp.fluid

  const re = /<\s*p[^>]*>(.*?)<\s*\/\s*p>/g // get paragraphs
  const paragraphs = content
    .split(re)
    .filter(paragraph => paragraph.match(/[a-zA-Z0-9_]/g)) // remove empty strings
  const config = { mass: 5, tension: 1000, friction: 300 }

  const Text = styled(animated.div)`
    position: relative;
    width: 100%;
    height: 120px;
    line-height: 120px;
    color: palevioletred;
    font-size: 5em;
    font-weight: 800;
    text-transform: uppercase;
    will-change: transform, opacity;
    overflow: hidden;
    div {
      overflow: hidden;
    }
  `

  const [toggle, set] = useState(false)
  const trail = useTrail(paragraphs.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 120 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  useEffect(() => {
    setTimeout(() => set(true), 300)
  })
  return (
    <div>
      <SEO title="Home" />
      <BackgroundImage
        Tag="section"
        fluid={imageData}
        backgroundColor={`#040e18`}
        title="maly-kapitan.cz"
        id="maly-kapitan.cz"
        role="img"
        aria-label="black dog"
      >
        <WelcomeContainer>
          {trail.map(({ x, height, ...rest }, index) => (
            <Text
              key={paragraphs[index]}
              style={{
                ...rest,
                transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
              }}
            >
              <animated.div style={{ height }}>
                {paragraphs[index]}
              </animated.div>
            </Text>
          ))}
        </WelcomeContainer>
      </BackgroundImage>
      <Posts />
    </div>
  )
}

export default Welcome

Welcome.propTypes = {
  content: PropTypes.string.isRequired,
}
