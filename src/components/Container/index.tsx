import React, { useEffect, useState } from 'react'
import { IPropsToastContainer, IToastProps } from '../../Interfaces'
import { Portal } from '../Portal'
import { Toast } from '../Toast'
import { ContainerToastStyle } from "./style"
import { ThemeProvider } from 'styled-components'
import theme from "../../theme"

export const ToastContainer: React.FC<IPropsToastContainer> = ({ styleContainerToast, toastList }) => {
  const {
    position,
    delay,
    autoDelete,
    deleteToastById,
    spaces,
    animationDelay,
  } = styleContainerToast

  const [toastListState, setToastListState] = useState<IToastProps[]>([])

  useEffect(() => {
    setToastListState([...toastList])
  }, [toastList])

  useEffect(() => {
    if (autoDelete && toastListState.length) {
      const deleteInterval = setInterval(() => {
        deleteFromToastList(toastListState[0].id)
      }, delay)

      return () => {
        clearInterval(deleteInterval)
      }
    }
  }, [toastList, autoDelete, toastListState])

  const deleteFromToastList = (id: number) => {
    setToastListState([...deleteToastById(id)])
  }

  return (
    <Portal>
      <ThemeProvider theme={theme}>
        <ContainerToastStyle
        position={position}
        spaces={spaces}
        animationDelay={animationDelay}
      >
        {toastListState.map((toast: JSX.IntrinsicAttributes & IToastProps) =>
          <Toast key={toast.id} {... {...toast, deleteFromToastList } } />)}
      </ContainerToastStyle>
      </ThemeProvider>
    </Portal>
  )
}
