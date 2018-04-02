// @flow

import React from 'react'
import { setFullscreen, toggleChat, addUserMessage } from 'store/actions/dispatcher'

import ChatLayout from './layout'

type Props = {
  fullScreenMode: boolean,
  handleNewUserMessage: (message:string) => void,
  title: string,
  subtitle: string,
  senderPlaceHolder: string,
  profileAvatar: string,
  showCloseButton: boolean,
  badge: number,
}

class Chat extends React.Component<Props> {
  componentDidMount() {
    if (this.props.fullScreenMode) {
      setFullscreen()
    }
  }

  toggleConversation = () => {
    toggleChat()
  }

  handleMessageSubmit = (message: string) => {
    if (message) {
      addUserMessage(message)
      this.props.handleNewUserMessage(message)
    }
  }

  render() {
    return (
      <ChatLayout
        onToggleConversation={this.toggleConversation}
        onSendMessage={this.handleMessageSubmit}
        title={this.props.title}
        subtitle={this.props.subtitle}
        senderPlaceHolder={this.props.senderPlaceHolder}
        profileAvatar={this.props.profileAvatar}
        showCloseButton={this.props.showCloseButton}
        fullScreenMode={this.props.fullScreenMode}
        badge={this.props.badge}
      />
    )
  }
}

export default Chat
