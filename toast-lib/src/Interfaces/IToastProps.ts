export interface IToastStyled{
  bgColor: string,
  titleColor: string,
}

export interface IToastProps extends IToastStyled {
  type: string,
  title: string,
  text: string,
  icon: string,
  id: number,
  spaces: string,
  deleteFromToastList: (id: number) => void,
}

export interface IToastContainer{
  position: object,
  autoDelete: true,
  delay: number,
  deleteToastById: (id: number) => IToastProps[],
  animationDelay: number,
  animationFromType: string
}

export interface IPropsToastContainer {
  styleContainerToast: IToastContainer,
  toastList: IToastProps[]
}