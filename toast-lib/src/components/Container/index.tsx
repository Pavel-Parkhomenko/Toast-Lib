import React, {useEffect, useState} from 'react'
import {IPropsToastContainer, IToastProps} from '../../Interfaces'
import {Portal} from '../Portal'
import {Toast} from '../Toast'
import {ContainerToastStyle} from "./style";

export const ToastContainer: React.FC<any> = ({styleContainerToast, toastList}) => {
  const { position, delay, autoDelete, deleteToastById, spaces } = styleContainerToast

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

  return (
    <Portal>
      <ContainerToastStyle
        position={position}
        spaces = {spaces}
      >
        {toastListState.map((toast: JSX.IntrinsicAttributes & IToastProps) =>
          <Toast key={toast.id} {...{...toast, deleteFromToastList}} />)}
      </ContainerToastStyle>
    </Portal>
  )
}