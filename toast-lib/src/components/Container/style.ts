import styled, { keyframes } from 'styled-components'

const fromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`

const fromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

const fromBottom = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`

const fromTop = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`

export const ContainerToastStyle = styled.div<any>`
  position: fixed;
  margin: ${({ spaces }) => spaces}px;

  & > div:last-child{
    // animation-name: ${({ animationFromType }) => animationFromType};
    // animation-delay: ${({ animationDelay }) => animationDelay}s;
    animation: ${"fromBottom"} 0.9s;
  }
  
  ${({ position }) => position}
`