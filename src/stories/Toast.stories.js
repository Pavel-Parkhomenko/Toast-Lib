import React from 'react'
import {
  FROM_ANIMATION,
  POSITION,
  SPACES,
  ToastType,
} from '../constants'
import { ToastContainer } from '../components/Container'
import { toastService } from '../ToastService'

export default {
  title: 'Toast',
  argTypes: {
    toastText: {
      type: 'string',
      description: 'наполнение тоста',
      defaultValue: 'default text for example',
      control: {
        type: 'text',
      }
    },
    toastType: {
      type: 'string',
      description: 'вариант внешнего вида',
      defaultValue: 'success',
      options: Object.values(ToastType),
      control: {
        type: 'inline-radio',
      },
    },
    toastPosition: {
      type: 'string',
      description: 'положение контейнера с тостами',
      defaultValue: 'topLeft',
      options: ['bottomRight', 'bottomLeft', 'topRight', 'topLeft'],
      control: {
        type: 'inline-radio',
      },
    },
    toastSpaces: {
      type: 'number',
      description: 'margin контейнера',
      defaultValue: 0,
      options: SPACES,
      control: {
        type: 'inline-radio',
      },
    },
    animationFromType: {
      type: 'string',
      description: 'тип анимации при появлении',
      defaultValue: 'fromBottom',
      options: Object.values(FROM_ANIMATION),
      control: {
        type: 'inline-radio',
      },
    },
    toastDelay: {
      type: 'number',
      description: 'margin контейнера',
      defaultValue: 3000,
      options: [3000, 4000, 5000, 6000, 7000, 8000, 9000],
      control: {
        type: 'inline-radio',
      },
    },
    toastAnimationDelay: {
      type: 'number',
      description: 'длительность анимации',
      defaultValue: 0.7,
      options: [0.3, 0.4, 0.5, 1, 2],
      control: {
        type: 'inline-radio',
      },
    },
  },
}

export const ToastExample = (args: any) => (
  <ToastContainer
    {...toastService.createToast({
      position: POSITION[args.toastPosition],
      autoDelete: true,
      delay: args.toastDelay,
      animationDelay: args.toastAnimationDelay,
      spaces: args.toastSpaces,
    }, {
      type: args.toastType,
      text: args.toastText,
      animationFromType: args.animationFromType,
    })}
  />
)
