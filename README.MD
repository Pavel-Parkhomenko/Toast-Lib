# Toast Lib
***Toast*** Javascript library, for presenting non-blocking notifications. It is extensible and customizable

## Some information about the implementation
The library has been divided into two main components: views and logic. To implement the logic of the application, a generative programming pattern was used ***"Loner"***, which ensures that the class has only one instance, and provides a global access point to it. Using the pattern, a service class was created in which you will set the configuration and call the notification. To implement the view, you must use **react portals**.

## Stack
- JavaScript
- TypeScript
- React
- Styled-Components
- EsLint/Prettier
- NPM
- Rollap
- StoryBook

## Branches
- main
- develop - contains the source code
- gh-pages - demo

## Functional:
- Show notification.
- Ability to set the position of the notification.
- Ability to set the type of notification (notifications of success, error, notification, etc.).
- Ability to set the duration of the notification display.
- Ability to set the title and description of the notification.
- Ability to set notification margins.
- Ability to change the color of the notification type.
- Ability to change the animation of appearance and disappearance.
- The ability to "swipe" notifications aside for quick closure.
- Display up to 3 notifications at the same time.

## Demo
https://pavel-parkhomenko.github.io/Toast-Lib/?path=/story/toast--toast-example&args=toastType:Success
