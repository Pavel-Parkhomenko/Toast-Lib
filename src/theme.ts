import { DefaultTheme } from 'styled-components'

const font = 'sans-serif'

const textColor = {
  primary: '#2140bb',
  secondary: '#919191',
  success: '#30c20d',
  danger: '#d31111',
  warning: '#dcd929',
  info: '#b4cdea',
  light: '#fff',
  dark: '#101215',
  muted: '#cecdcd',
  white: '#fff',
}

const bgColor = {
  primary: '#2140bb',
  secondary: '#919191',
  success: '#30c20d',
  danger: '#d31111',
  warning: '#dcd929',
  dark: '#101215',
}

const size = {
  xs: 50,
  small: 100,
  med: 150,
  large: 200,
}

const theme: DefaultTheme = {
  textColor,
  bgColor,
  font,
  size,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
}

export default theme
