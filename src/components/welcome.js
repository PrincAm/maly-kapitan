import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import {
  animated,
  useTransition,
  useSpring,
  useChain,
  config,
} from "react-spring"
import BackgroundImage from "gatsby-background-image"

import SEO from "./seo"
import Posts from "./posts"

const WelcomeContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url("../../images/cover.jpg");
  padding-top: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    padding-top: 15rem;
    text-align: center;
  }
`

const MainParagraph = styled(animated.div)`
  line-height: 5rem;
  color: palevioletred;
  font-size: 4.5em;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  @media (max-width: 767px) {
    line-height: 2.4rem;
    font-size: 1.8em;
    margin: 0 1rem;
  }
`

const SecondaryParagraph = styled(animated.div)`
  line-height: 2.3rem;
  color: palevioletred;
  font-size: 2em;
  font-weight: 800;
  margin-bottom: 0.4rem;
  @media (max-width: 767px) {
    line-height: 1.8rem;
    font-size: 1.5em;
    margin: 0 1rem;
  }
`

const GreenText = styled.span`
  color: #4f868e;
`

const PostsWrapper = styled.div`
  min-height: 100vh;
`

const Arrow = styled.div`
  box-sizing: border-box;
  height: 5vw;
  width: 5vw;
  border-style: solid;
  border-color: #4f868e;
  border-width: 0px 3px 3px 0px;
  transform: rotate(45deg);
  transition: border-width 150ms ease-in-out;
  &:hover {
    border-bottom-width: 4px;
    border-right-width: 4px;
    cursor: pointer;
  }
`

const texts = [
  {
    id: "init",
    text: (
      <>
        šiperka <GreenText>malý kapitán</GreenText>
      </>
    ),
  },
  {
    id: "schipperke",
    text: "Stránky věnované tomuto krásnému plemeni",
  },
  {
    id: "site",
    text: "Mnoho informací, postřehů a fotek",
  },
  {
    id: "button",
  },
]

const scrollToRef = ref =>
  ref.current.scrollIntoView({ behavior: "smooth", block: "start" })

const Welcome = () => {
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

  const [paragraphs, setParagraphs] = useState({})

  useEffect(() => {
    setTimeout(() => setParagraphs(texts), 500)
  })

  const postsRef = useRef(null)
  const handleScroll = () => scrollToRef(postsRef)

  const paragraphsTransition = useTransition(paragraphs, item => item.id, {
    trail: 1000 / paragraphs.length,
    from: { opacity: 0, transform: "translateY(20px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
  })

  return (
    <div>
      <SEO title="Home" />
      <BackgroundImage
        tag="section"
        fluid={imageData}
        backgroundColor="#363636"
        id="malykapitan.cz"
        role="img"
        aria-label="black dog"
      >
        <WelcomeContainer>
          {paragraphsTransition.map(({ item, props, key }) => {
            switch (item.id) {
              case "init":
                return (
                  <MainParagraph key={key} style={props}>
                    {item.text}
                  </MainParagraph>
                )

              case "button":
                return (
                  <animated.div key={key} style={props}>
                    <Arrow onClick={handleScroll} />
                  </animated.div>
                )

              default:
                return (
                  <SecondaryParagraph key={key} style={props}>
                    {item.text}
                  </SecondaryParagraph>
                )
            }
          })}
        </WelcomeContainer>
      </BackgroundImage>
      <PostsWrapper ref={postsRef}>
        <Posts title="Poslední příspěvky" inOnWelcomePage />
      </PostsWrapper>
    </div>
  )
}

export default Welcome
