// @flow

import React from 'react'
import { Provider } from 'react-redux'

import Chat from 'components/Chat'
import store from 'store/store'

type Props = {
  fullScreenMode: boolean,
  title: string,
  senderPlaceHolder: string,
  profileAvatar: string,
  showCloseButton: boolean,
  badge: number,
  handleNewUserMessage: (message:string) => void,
}

const ConnectedChat = (props: Props) =>
  <Provider store={store}>
    <Chat
      title={props.title}
      handleNewUserMessage={props.handleNewUserMessage}
      senderPlaceHolder={props.senderPlaceHolder}
      profileAvatar={props.profileAvatar}
      showCloseButton={props.showCloseButton}
      fullScreenMode={props.fullScreenMode}
      badge={props.badge}
    />
  </Provider>

ConnectedChat.defaultProps = {
  title: 'Welcome',
  senderPlaceHolder: 'Type a message...',
  showCloseButton: true,
  fullScreenMode: false,
  badge: 0,
}

export default ConnectedChat
