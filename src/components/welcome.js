import { graphql, useStaticQuery } from "gatsby"
import React, { useState, useEffect, useRef } from "react"
import styled, { keyframes } from "styled-components"
import { animated, useTransition } from "react-spring"
import BackgroundImage from "gatsby-background-image"

import SEO from "./seo"
import Posts from "./posts"
import ArrowIcon from "../images/svgs/arrow-down-regular.svg"

const WelcomeContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url("../../images/cover.jpg");
  padding-top: 20rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10%;
  @media (max-width: 767px) {
    padding-top: 15rem;
    text-align: center;
  }
`

const MainParagraph = styled(animated.div)`
  line-height: 5rem;
  color: #363636;
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
  color: #fff;
  font-size: 2em;
  font-weight: 800;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
  @media (max-width: 767px) {
    line-height: 1.8rem;
    font-size: 1.5em;
    margin: 0 1rem;
  }
`

const GreenText = styled.span`
  color: #8de4f0;
`

const PostsWrapper = styled.div`
  min-height: 100vh;
`

const ArrowContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  color: #fff;
  transition: color 0.5s ease;
  &:hover {
    cursor: pointer;
    color: #363636;
  }
`

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0px);
  }

  40% {
    transform: translateY(-15px);
  }

  60% {
    transform: translateY(-5px);
}
`

const Arrow = styled(ArrowIcon)`
  height: 2rem;
  width: 2rem;
  animation: ${bounce} 2.5s 3;
`

const Blog = styled.span`
  font-size: 1.2rem;
  margin-left: 0.5rem;
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
                  <animated.div key={key} style={props} onClick={handleScroll}>
                    <ArrowContainer>
                      <Arrow />
                      <Blog>Nové příspěvky na blogu</Blog>
                    </ArrowContainer>
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
