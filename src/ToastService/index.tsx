import React from 'react'

import Error from '@/@types/error.svg'
import Info from '@/@types/info.svg'
import Success from '@/@types/success.svg'
import Warning from '@/@types/warning.svg'

import { BgColor, Color, ToastType } from '@/constants'
import { IToastContainer, IToastProps } from '@/Interfaces'

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
    return ToastType[type] || ToastType.Success
  }

  getBgColor(type: keyof typeof ToastType): string {
    return BgColor[type] || BgColor.Success
  }

  getTitleColor(type: keyof typeof ToastType): string {
    return Color[type] || Color.Success
  }

  getId() {
    return Math.floor(Math.random() * 111)
  }

  getIcon(type: keyof typeof ToastType) {
    switch (type) {
      case ToastType.Success:
        return Success
      case ToastType.Error:
        return Error
      case ToastType.Info:
        return Info
      case ToastType.Warning:
        return Warning
    }
  }

  getProp(prop: IToastProps) {
    return {
      ...prop,
      title: this.getTitle(prop.type),
      titleColor: this.getTitleColor(prop.type),
      bgColor: this.getBgColor(prop.type),
      icon: this.getIcon(prop.type),
      id: this.getId(),
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

    return ({
        styleContainerToast,
        toastList,
      }
    )
  }
}

export const toastService = new ToastService([])
