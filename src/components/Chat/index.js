import React from 'react'
import PropTypes from 'prop-types'
import { setFullscreen, toggleChat, addUserMessage } from 'store/actions/dispatcher'

import ChatLayout from './layout'

class Chat extends React.Component {
  componentDidMount() {
    if (this.props.fullScreenMode) {
      setFullscreen()
    }
  }

  toggleConversation = () => {
    toggleChat()
  }

  handleMessageSubmit = (event) => {
    event.preventDefault()
    const userInput = event.target.message.value
    if (userInput) {
      addUserMessage(userInput)
      this.props.handleNewUserMessage(userInput)
    }
    event.target.message.value = ''
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

Chat.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  handleNewUserMessage: PropTypes.func.isRequired,
  senderPlaceHolder: PropTypes.string,
  profileAvatar: PropTypes.string,
  showCloseButton: PropTypes.bool,
  fullScreenMode: PropTypes.bool,
  badge: PropTypes.number,
}

export default Chat
