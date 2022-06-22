import React from 'react'
import { Color, TOAST_TITLE, TOAST_TYPES } from "../constants"
import { ToastContainer } from "../components/Container"
import { IToastContainer, IToastProps } from "../Interfaces"

const error = require('../svgs/error.svg') as string
const info = require('../svgs/info.svg') as string
const success = require('../svgs/success.svg') as string
const warning = require('../svgs/warning.svg') as string

let toastList: IToastProps[] = []

class ToastService {
  private static toastService: ToastService
  private toastList: IToastProps[] | undefined = []

  constructor(toastList: IToastProps[]) {
    if(ToastService.toastService)
      return ToastService.toastService

    this.toastList = toastList
    ToastService.toastService = this
  }

  getTitle(prop: any){
    switch(prop.type){
      case TOAST_TYPES.success:
        return TOAST_TITLE.success
      case TOAST_TYPES.error:
        return TOAST_TITLE.error
      case TOAST_TYPES.info:
        return TOAST_TITLE.info
      case TOAST_TYPES.warning:
        return TOAST_TITLE.warning
    }
  }

  getBgColor(prop: any) {
    switch (prop.type) {
      case TOAST_TYPES.success:
        return Color.green
      case TOAST_TYPES.error:
        return Color.red
      case TOAST_TYPES.info:
        return Color.purple
      case TOAST_TYPES.warning:
        return Color.yellow
    }
  }

  getTitleColor(prop: any) {
    switch (prop.type) {
      case TOAST_TYPES.success:
        return Color.white
      case TOAST_TYPES.error:
        return Color.white
      case TOAST_TYPES.info:
        return Color.white
      case TOAST_TYPES.warning:
        return Color.black
    }
  }

  getId() {
    return Math.floor(Math.random() * 111)
  }

  getIcon(prop: any) {
    switch (prop.type) {
      case TOAST_TYPES.success:
        return success
      case TOAST_TYPES.error:
        return error
      case TOAST_TYPES.info:
        return info
      case TOAST_TYPES.warning:
        return warning
    }
  }

  getProp(prop: any) {
    return {
      ...prop,
      title: this.getTitle(prop),
      titleColor: this.getTitleColor(prop),
      bgColor: this.getBgColor(prop),
      icon: this.getIcon(prop),
      id: this.getId()
    }
  }

  deleteToastById(id: number): IToastProps[]{
    const deleteToastIndex = toastList.findIndex(toast => toast.id === id)
    toastList.splice(deleteToastIndex, 1)
    return toastList
  }

  createToast(styleContainerToast: IToastContainer, prop: IToastProps) {
    if(toastList.length < 3)
      toastList = [...toastList, this.getProp(prop)]

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