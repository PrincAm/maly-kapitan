import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useTransition, animated } from "react-spring"
import BackgroundImage from "gatsby-background-image"

const WelcomeContainer = styled.div`
  background-image: url("../../images/cover.jpg");
  height: 100vh;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 10rem 0;
  font-size: 3rem;
`

const Welcome = ({ content }) => {
  // const re = /<\s*p[^>]*>(.*?)<\s*\/\s*p>/g
  // const paragraphs = content.split(re).filter(paragraph => {
  //   return /^[a-z0-9]+$/.test(paragraph)
  // })

  const [show, setDisplayContent] = useState(false)
  const transitions = useTransition(show, null, {
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    config: { tension: 220, friction: 120 },
  })
  useEffect(() => {
    setTimeout(() => setDisplayContent(true), 500)
  })
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
  return (
    <BackgroundImage
      Tag="section"
      fluid={imageData}
      backgroundColor={`#040e18`}
      // Title get's passed to both container and noscriptImg.
      title="gbitest"
      // You are able to set a classId and style by wrapper (see below or
      // https://github.com/timhagn/gatsby-background-image/#styling--passed-through-styles):
      // classId="gbi"
      // style={{
      //   // Defaults are overwrite-able by setting one of the following:
      //   // backgroundSize: '',
      //   // backgroundPosition: '',
      //   // backgroundRepeat: '',
      // }}
      // To "force" the classic fading in of every image (especially on
      // imageData change for fluid / fixed) by setting `soft` on `fadeIn`:
      // fadeIn={`soft`}
      // To be able to use stacking context changing elements yourself,
      // set this to true to disable the "opacity hack":
      // preserveStackingContext={true}
      // You can "safely" (look them up beforehand ; ) add other props:
      id="gbitest"
      role="img"
      aria-label="gbitest"
    >
      <WelcomeContainer>
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                <Content dangerouslySetInnerHTML={{ __html: content }} />
              </animated.div>
            )
        )}
      </WelcomeContainer>
    </BackgroundImage>
  )
}

export default Welcome

Welcome.propTypes = {
  content: PropTypes.string.isRequired,
}
