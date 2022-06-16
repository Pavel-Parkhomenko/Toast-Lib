import React, {useEffect, useState} from 'react'
import { IToastProps } from '../../Interfaces'
import {Portal} from '../Portal'
import {Toast} from '../Toast'
import {ContainerToastStyle} from "./style";

// @ts-ignore
export const ToastContainer: React.FC<any> = ({styleContainerToast, toastList}) => {
  const { position } = styleContainerToast

  return (
    <Portal>
      <ContainerToastStyle
        position={position}
      >
        {toastList.map((toast: JSX.IntrinsicAttributes & IToastProps) => <Toast {...toast} />)}
      </ContainerToastStyle>
    </Portal>
  )
}