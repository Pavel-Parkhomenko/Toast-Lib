import React from 'react'
import { Portal } from '../Portal'

// @ts-ignore
export const ToastContainer = ({ children }) => {
  return <Portal>{ children }</Portal>
}