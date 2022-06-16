import styled from 'styled-components'
import {IToastStyled} from "../../Interfaces";

// height: ${({ size }) => size / 4}px;
// width: ${({ size }) => size}px;

export const ToastStyled = styled.div<IToastStyled>`
  position: fixed;
  ${({ position }) => ({...position})};
  z-index: 100;
  height: 100px;
  width: 400px;
  border-radius: 15px;
  margin: ${({ spaces }) => spaces}px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ titleColor }) => titleColor};
  background-color: ${({ bgColor }) => bgColor};
`

export const CloseButtonStyled = styled.button`
  width: 50px;
  height: 50px;
`

export const ToastTitle = styled.p`
  font-size: 24px;
`