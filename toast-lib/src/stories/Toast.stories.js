import React from 'react'
import { Toast } from '../components/Toast'
import { toastService } from '../ToastService'
import { POSITION, SPACES } from '../constants'

export default {
  title: 'Toast',
  argTypes: {
    toastType: {
      type: 'string',
      description: "вариант внешнего вида",
      defaultValue: "success",
      options: ['error', 'warning', 'success', 'info'],
      control: {
        type: "inline-radio"
      },
    },
    toastPosition: {
      type: 'string',
      description: "положение контейнера с тостами",
      defaultValue: "topLeft",
      options: ["bottomRight", "bottomLeft", "topRight", "topLeft"],
      control: {
        type: "inline-radio",
      }
    },
    toastSpaces: {
      type: "number",
      description: "margin контейнера",
      defaultValue: 0,
      options: SPACES,
      control: {
        type: "inline-radio",
      },
    },
    toastDelay:{
      type: "number",
      description: "margin контейнера",
      defaultValue: 3000,
      options: [3000,4000,5000,6000,7000,8000,9000],
      control: {
        type: "inline-radio",
      },
    }
  }
}

export const ToastExample = (args: any) =>
  toastService.createToast({
    position: POSITION[args.toastPosition],
    autoDelete: true,
    delay: args.toastDelay,
    spaces: args.toastSpaces,
  },{
    type: args.toastType,
  });