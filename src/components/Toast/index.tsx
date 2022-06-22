import React, { useRef } from 'react'
import { IToastProps } from '../../Interfaces'
import { CloseContainer, ToastStyled, ToastText, ToastTitle } from "./style"

const close = require('../../@types/close-2.svg') as string

export const Toast: React.FC<IToastProps> =
  ({
     deleteFromToastList,
     title,
     text,
     bgColor,
     titleColor,
     icon,
     id,
     animationFromType,
   }) => {

    const toast = useRef<HTMLDivElement>(null)

    const handleDeleteToastById = () => {
      deleteFromToastList(id)
    }

    let mouseX: number
    function mouseUpHandel(e:React.MouseEvent<HTMLDivElement, MouseEvent>){
      if(Math.abs(mouseX - e.clientX) > 30){
        if(mouseX - e.clientX < 0)
          toast.current!.classList.add('delete-right')
        else
          toast.current!.classList.add('delete-left')

        setTimeout(() => deleteFromToastList(id))
      }
    }

    function mouseDownHandel(e:React.MouseEvent<HTMLDivElement, MouseEvent>){
      mouseX = e.clientX
    }

    return (
      <div className={animationFromType} ref={toast} onMouseDown={mouseDownHandel} onClick={mouseUpHandel}>
        <ToastTitle>{title}</ToastTitle>
        <ToastStyled
          titleColor={titleColor}
          bgColor={bgColor}
        >
          <img alt="icon" src={icon} />
          <ToastText>{text}</ToastText>
          <CloseContainer>
            <img onClick={handleDeleteToastById} alt="icon-close" src={close} />
          </CloseContainer>
        </ToastStyled>
      </div>
    )
  }
