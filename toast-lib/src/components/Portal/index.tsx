import React from 'react'
import { createPortal } from 'react-dom'

export const Portal: React.FC<any> = ({ children }) => {
  const rootToast = document.createElement('div')
  rootToast.id = "root-toast"
  document.body.prepend(rootToast)

  return(createPortal(children, rootToast))
}