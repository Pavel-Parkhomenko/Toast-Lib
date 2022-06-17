import React from 'react'
import {Color, Title, Types} from "../constants";
import {ToastContainer} from "../components/Container";
import {IToastContainer, IToastProps} from "../Interfaces";

const error = require('../svgs/error.svg') as string;
const info = require('../svgs/info.svg') as string;
const success = require('../svgs/success.svg') as string;
const warning = require('../svgs/warning.svg') as string;

let toastList: IToastProps[] = [];

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
      case Types.success:
        return Title.success
      case Types.error:
        return Title.error;
      case Types.info:
        return Title.info;
      case Types.warning:
        return Title.warning;
    }
  }

  getBgColor(prop: any) {
    switch (prop.type) {
      case Types.success:
        return Color.green;
      case Types.error:
        return Color.red;
      case Types.info:
        return Color.purple;
      case Types.warning:
        return Color.yellow;
    }
  }

  getTitleColor(prop: any) {
    switch (prop.type) {
      case Types.success:
        return Color.white;
      case Types.error:
        return Color.white;
      case Types.info:
        return Color.white;
      case Types.warning:
        return Color.black;
    }
  }

  getId() {
    return Math.floor(Math.random() * 111);
  }

  getIcon(prop: any) {
    switch (prop.type) {
      case Types.success:
        return success;
      case Types.error:
        return error;
      case Types.info:
        return info;
      case Types.warning:
        return warning;
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
    };
  }

  deleteToastById(id: number): IToastProps[]{
    const deleteToastIndex = toastList.findIndex(toast => toast.id === id);
    toastList.splice(deleteToastIndex, 1);
    return toastList
  }

  createToast(styleContainerToast: IToastContainer, prop: IToastProps) {
    if(toastList.length <= 3)
      toastList = [...toastList, this.getProp(prop)]

    styleContainerToast.deleteToastById = this.deleteToastById

    return (
      <ToastContainer
        styleContainerToast={styleContainerToast}
        toastList={toastList}
      >
      </ToastContainer>
    );
  }
}

export const toastService = new ToastService([])