import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useTransition, animated } from "react-spring"

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

const Welcome = ({ content }) => {
  const [show, setDisplayContent] = useState(false)
  const transitions = useTransition(show, null, {
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    config: { tension: 220, friction: 120 },
  })
  useEffect(() => {
    setTimeout(() => setDisplayContent(true), 500)
  })
  return (
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
  )
}

export default Welcome

Welcome.propTypes = {
  content: PropTypes.string.isRequired,
}
