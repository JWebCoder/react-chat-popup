// @flow

export type Props = {
  title: string,
  senderPlaceHolder: string,
  profileAvatar: string,
  showCloseButton: boolean,
  disabledInput: boolean,
  fullscreen: boolean,
  sendMessage: (message: string) => void,
  toggleChat: () => void,
}
