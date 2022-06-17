import React from 'react'
import {IToastProps} from "../../Interfaces";
import {CloseContainer, ToastStyled, ToastText, ToastTitle} from "./style";

const close = require('../../svgs/close-2.svg') as string;

export const Toast: React.FC<IToastProps> =
  ({
     deleteFromToastList,
     title,
     text,
     bgColor,
     titleColor,
     icon,
     id,
   }) => {

    const handleDeleteToastById = () => {
      deleteFromToastList(id)
    }

    return (
      <div>
        <ToastTitle>{title}</ToastTitle>
        <ToastStyled
          titleColor={titleColor}
          bgColor={bgColor}
        >
          <img alt="icon" src={icon}/>
          <ToastText>{text}</ToastText>
          <CloseContainer>
            <img onClick={handleDeleteToastById} alt="icon-close" src={close}/>
          </CloseContainer>
        </ToastStyled>
      </div>
    )
  }