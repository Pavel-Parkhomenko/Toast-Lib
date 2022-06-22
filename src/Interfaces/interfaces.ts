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
  deleteFromToastList: (id: number) => void,
  animationFromType: string,
}

export interface IToastContainer {
  position: object,
  autoDelete: true,
  delay: number,
  deleteToastById: (id: number) => IToastProps[],
  animationDelay: number,
  spaces: number,
}

export interface IPropsToastContainer {
  styleContainerToast: IToastContainer,
  toastList: IToastProps[]
}