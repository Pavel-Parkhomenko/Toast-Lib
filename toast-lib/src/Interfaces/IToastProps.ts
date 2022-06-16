export interface IToastStyled{
  bgColor: string,
  titleColor: string,
  position: object,
  spaces: string
}

export interface IToastProps extends IToastStyled {
  title: string,
  icon: string,
  delay: number
}