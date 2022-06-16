import styled from 'styled-components'

export const ContainerToastStyle = styled.div<any>`
  position: fixed;
  ${({ position }) => position}
`