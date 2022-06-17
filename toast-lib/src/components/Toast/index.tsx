import React, {useEffect, useState} from 'react'
import {IToastProps} from "../../Interfaces";
import {CloseContainer, ToastStyled, ToastTitle} from "./style";
const close = require('../../svgs/close-2.svg') as string;

export const Toast: React.FC<IToastProps> = ({
  deleteFromToastList,
  title,
  bgColor,
  titleColor,
  icon,
  id
}) => {

  const handleDeleteToastById = () => {
    deleteFromToastList(id)
  }

  return(
    <ToastStyled
      titleColor = {titleColor}
      bgColor = {bgColor}
    >
      <img alt="icon" src={icon}/>
      <ToastTitle>{title}</ToastTitle>
      <CloseContainer>
        <img onClick={handleDeleteToastById} alt="icon-close" src={close}/>
      </CloseContainer>
    </ToastStyled>
  )
}