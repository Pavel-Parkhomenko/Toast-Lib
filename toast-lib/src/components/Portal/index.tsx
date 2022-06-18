import React from 'react'
import { createPortal } from 'react-dom'

export const Portal: React.FC<any> = ({ children }) => {
  const rootToastContainer = document.createElement('div')
  rootToastContainer.id = "root-toast-container"
  document.body.prepend(rootToastContainer)

  return(createPortal(children, rootToastContainer))
}