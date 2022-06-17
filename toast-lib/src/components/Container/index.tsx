import React, {useEffect, useState} from 'react'
import {IToastProps} from '../../Interfaces'
import {Portal} from '../Portal'
import {Toast} from '../Toast'
import {ContainerToastStyle} from "./style";

export const ToastContainer: React.FC<any> = ({styleContainerToast, toastList}) => {
  const {
    position,
    delay,
    autoDelete,
    deleteToastById,
    spaces,
    animationDelay,
    animationFromType
  } = styleContainerToast

  const [toastListState, setToastListState] = useState<IToastProps[]>([])

  useEffect(() => {
    setToastListState([...toastList])
  }, [toastList])

  useEffect(() => {
    if(autoDelete && toastListState.length) {
      const deleteInterval = setInterval(() => {
        deleteFromToastList(toastListState[0].id)
      }, delay)

      return () => {
        clearInterval(deleteInterval);
      };
    }
  }, [toastList, autoDelete, toastListState]);

  const deleteFromToastList = (id: number) => {
    setToastListState([...deleteToastById(id)])
  }

  console.log(animationFromType)

  return (
    <Portal>
      <ContainerToastStyle
        position={position}
        spaces = {spaces}
        animationDelay = {animationDelay}
        animationFromType={animationFromType}
      >
        {toastListState.map((toast: JSX.IntrinsicAttributes & IToastProps) =>
          <Toast key={toast.id} {...{...toast, deleteFromToastList}} />)}
      </ContainerToastStyle>
    </Portal>
  )
}