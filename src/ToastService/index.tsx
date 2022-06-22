import React from 'react'
import { BgColor, Color, ToastType } from '../constants'
import { IToastContainer, IToastProps } from '../Interfaces'
import { ToastContainer } from '../components/Container'

const error = require('../svgs/error.svg') as string
const info = require('../svgs/info.svg') as string
const success = require('../svgs/success.svg') as string
const warning = require('../svgs/warning.svg') as string

let toastList: IToastProps[] = []

class ToastService {
  private static toastService: ToastService
  private toastList: IToastProps[] | undefined = []

  constructor(toastList: IToastProps[]) {
    if (ToastService.toastService) {
      return ToastService.toastService
    }

    this.toastList = toastList
    ToastService.toastService = this
  }

  getTitle(type: keyof typeof ToastType): string {
    return ToastType[type] || ToastType.Success;
  }

  getBgColor(type: keyof typeof ToastType): string {
    return BgColor[type] || BgColor.Success;
  }

  getTitleColor(type: keyof typeof ToastType): string {
    return Color[type] || Color.Success;
  }

  getId() {
    return Math.floor(Math.random() * 111)
  }

  getIcon(type: keyof typeof ToastType) {
    switch (type) {
      case ToastType.Success:
        return success
      case ToastType.Error:
        return error
      case ToastType.Info:
        return info
      case ToastType.Warning:
        return warning
    }
  }

  getProp(prop: IToastProps) {
    return {
      ...prop,
      title: this.getTitle(prop.type),
      titleColor: this.getTitleColor(prop.type),
      bgColor: this.getBgColor(prop.type),
      icon: this.getIcon(prop.type),
      id: this.getId()
    }
  }

  deleteToastById(id: number): IToastProps[] {
    const deleteToastIndex = toastList.findIndex(toast => toast.id === id)
    toastList.splice(deleteToastIndex, 1)
    return toastList
  }

  createToast(styleContainerToast: IToastContainer, prop: IToastProps) {
    if (toastList.length < 3) {
      toastList = [...toastList, this.getProp(prop)]
    }

    styleContainerToast.deleteToastById = this.deleteToastById

    return (
      <ToastContainer
        styleContainerToast={styleContainerToast}
        toastList={toastList}
      />
    )
  }
}

export const toastService = new ToastService([])
