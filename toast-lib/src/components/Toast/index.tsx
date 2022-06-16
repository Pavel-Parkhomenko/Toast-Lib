import React, {useEffect, useState} from 'react'
import {IToastProps} from "../../Interfaces";
import {CloseContainer, ToastStyled, ToastTitle} from "./style";
const close = require('../../svgs/close-2.svg') as string;

export const Toast: React.FC<IToastProps> = ({
  title,
  bgColor,
  titleColor,
  icon,
  spaces,
  delay
}) => {
  const [isDeleteToast, setIsDeleteToast] = useState(false)
  useEffect(() => {
    const deleteInterval = setInterval(() => {
      setIsDeleteToast(true)
    }, delay)

    return () => {
      clearInterval(deleteInterval);
    };
  });

  if(isDeleteToast) return null

  return(
    <ToastStyled
      titleColor = {titleColor}
      bgColor = {bgColor}
      spaces = {spaces}
    >
      <img alt="icon" src={icon}/>
      <ToastTitle>{title}</ToastTitle>
      <CloseContainer>
        <img alt="icon-close" src={close}/>
      </CloseContainer>
    </ToastStyled>
  )
}