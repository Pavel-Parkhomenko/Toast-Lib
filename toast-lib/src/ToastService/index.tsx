import React from 'react'
import {Color, Title, Types} from "../constants";
import {ToastContainer} from "../components/Container";
import {Toast} from '../components/Toast'
import {IToastProps} from "../Interfaces";

const error = require('../svgs/error.svg') as string;
const info = require('../svgs/info.svg') as string;
const success = require('../svgs/success.svg') as string;
const warning = require('../svgs/warning.svg') as string;

class ToastService {
  private static toastService: ToastService
  private toastList: string[] | undefined

  constructor(toastList: string[]) {
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
    return Math.floor(Math.random() * 101);
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
    };
  }

  createToast(prop: IToastProps) {
    console.log(this.getProp(prop))
    return (
      <ToastContainer>
        <Toast
          {...this.getProp(prop)}
        />
      </ToastContainer>
    );
  }
}

export const toastService = new ToastService([])