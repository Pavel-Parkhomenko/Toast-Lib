import styled from 'styled-components'
import {IToastStyled} from "../../Interfaces";

export const ToastStyled = styled.div<IToastStyled>`
  z-index: 100;
  height: 70px;
  width: 450px;
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

export const CloseContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`