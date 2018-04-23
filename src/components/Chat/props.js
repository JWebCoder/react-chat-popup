// @flow

export type Props = {
  title: string,
  senderPlaceHolder: string,
  profileAvatar: string,
  showChat: boolean,
  showCloseButton: boolean,
  disabledInput: boolean,
  fullscreen: boolean,
  fullScreenMode: boolean,
  badge: number,
  onSendMessage: (message: string) => void,
  onToggleConversation: () => void,
}
