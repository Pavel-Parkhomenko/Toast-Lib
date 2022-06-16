import React from 'react'
import {IToastProps} from "../../Interfaces";
import {CloseButtonStyled, ToastStyled, ToastTitle} from "./style";

export const Toast: React.FC<IToastProps> = ({
  title,
  bgColor,
  titleColor,
  icon,
  position,
  spaces,
  delay
}) => {
  return(
    <ToastStyled
      titleColor = {titleColor}
      bgColor = {bgColor}
      position={position}
      spaces = {spaces}
    >
      <img alt="icon" src={icon}/>
      <ToastTitle>{title}</ToastTitle>
      <CloseButtonStyled> close </CloseButtonStyled>
    </ToastStyled>
  )
}