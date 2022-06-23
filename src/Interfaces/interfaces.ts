import { ToastType, PositionType } from '@/constants'

export interface IToastStyled {
  bgColor: string,
  titleColor: string,
}

export interface IToastProps extends IToastStyled {
  type: keyof typeof ToastType,
  title: string,
  text: string,
  icon: string | undefined,
  id: number,
  deleteFromToastList: (id: number) => void,
  animationFromType: string,
}

export interface IContainerToastStyle {
  animationDelay: number,
  spaces: number,
  position: keyof typeof PositionType,
}

export interface IToastContainer extends IContainerToastStyle{
  autoDelete: true,
  delay: number,
  deleteToastById: (id: number) => IToastProps[],
}

export interface IPropsToastContainer {
  styleContainerToast: IToastContainer,
  toastList: IToastProps[]
}
