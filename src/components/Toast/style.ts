import styled from 'styled-components'

import { IToastStyled } from "../../Interfaces"

export const ToastStyled = styled.div<IToastStyled>`
  z-index: 100;
  min-height: 70px;
  min-width: 450px;
  border-radius: 15px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ titleColor }) => titleColor};
  background-color: ${({ bgColor }) => bgColor};
`

export const ToastTitle = styled.p`
  color: gray;
  font-size: 18px;
  margin: 0 0 5px 5px;
`

export const ToastText = styled.p`
  font-size: 20px;
`

export const CloseContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`