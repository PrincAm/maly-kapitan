import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"

const HamburgerContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-right: 20px;
`

const Bar = styled.div`
  width: 2.2rem;
  height: 0.17rem;
  background-color: ${({ isOpened }) => (isOpened ? "#f7f7f7" : "#363636")};
  margin-bottom: 0.5rem;
  transition: 0.5s;
`

const FirstBar = styled(Bar)`
    transform: ${({ isOpened }) =>
      isOpened ? "rotate(-45deg) translate(-0.55rem, 0.55rem)" : "none"};
  }
`

const SecondBar = styled(Bar)`
  opacity: ${({ isOpened }) => (isOpened ? 0 : 1)};
`

const ThirdBar = styled(Bar)`
  transform: ${({ isOpened }) =>
    isOpened ? "rotate(45deg) translate(-0.38rem, -0.38rem)" : "none"};
`

const Hamburger = () => {
  const [isOpened, setOpened] = useState(false)

  return (
    <HamburgerContainer onClick={() => setOpened(!isOpened)}>
      <FirstBar isOpened={isOpened} />
      <SecondBar isOpened={isOpened} />
      <ThirdBar isOpened={isOpened} />
    </HamburgerContainer>
  )
}

export default Hamburger
