import styled from 'styled-components'

import { IToastStyled } from '../../Interfaces'

export const ToastStyled = styled.div<IToastStyled>`
  z-index: 100;
  min-height: ${({ theme }) => theme.size.xs + 20}px;
  min-width: ${({ theme }) => theme.size.large * 2 + 50}px;
  border-radius: ${({ theme }) => theme.spaces[3]}px;
  padding: ${({ theme }) => theme.spaces[3]}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ titleColor }) => titleColor};
  background-color: ${({ bgColor }) => bgColor};
`

export const ToastTitle = styled.p`
  color: ${({ theme }) => theme.textColor.muted};
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  margin: 0 0 5px 5px;
`

export const ToastText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
`

export const CloseContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
