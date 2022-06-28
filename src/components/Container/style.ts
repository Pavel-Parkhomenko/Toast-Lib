import styled, { keyframes } from 'styled-components'
import { IContainerToastStyle } from '@/Interfaces'
import { POSITION } from '@/constants'

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

export const ContainerToastStyle = styled.div<IContainerToastStyle>`
  position: fixed;
  margin: ${({ spaces }) => spaces};
  user-select: none;
  
  & > div{
    margin-bottom: ${({ spaces }) => spaces}px;
  }

  .fromBottom{
    animation: ${fromBottom} ${({ animationDelay }) => animationDelay}s;
  }

  .fromTop{
    animation: ${fromTop} ${({ animationDelay }) => animationDelay}s;
  }

  .fromLeft{
    animation: ${fromLeft} ${({ animationDelay }) => animationDelay}s;
  }

  .fromRight{
    animation: ${fromRight} ${({ animationDelay }) => animationDelay}s;
  }

  .delete-right {
    transition: transform 0.6s ease-in-out;
    animation: ${fromRight} 0.7s;
  }
  .delete-left {
    transition: transform 0.6s ease-in-out;
    animation: ${fromLeft} 0.7s;
  }
  ${({ position }) => POSITION[position]}
`
