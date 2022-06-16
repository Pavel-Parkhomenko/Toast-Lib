export interface IToastStyled{
  bgColor: string,
  titleColor: string,
  spaces: string
}

export interface IToastProps extends IToastStyled {
  title: string,
  icon: string,
  delay: number
}