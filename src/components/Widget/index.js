import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { toggleChat, addUserMessage } from 'store/actions'
import { setFullscreen } from 'store/actions/dispatcher'

import WidgetLayout from './layout'

class Widget extends React.Component {
  componentDidMount() {
    if (this.props.fullScreenMode) {
      setFullscreen()
    }
  }

  toggleConversation = () => {
    this.props.dispatch(toggleChat())
  }

  handleMessageSubmit = (event) => {
    event.preventDefault()
    const userInput = event.target.message.value
    if (userInput) {
      this.props.dispatch(addUserMessage(userInput))
      this.props.handleNewUserMessage(userInput)
    }
    event.target.message.value = ''
  }

  render() {
    return (
      <WidgetLayout
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

Widget.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  handleNewUserMessage: PropTypes.func.isRequired,
  senderPlaceHolder: PropTypes.string,
  profileAvatar: PropTypes.string,
  showCloseButton: PropTypes.bool,
  fullScreenMode: PropTypes.bool,
  badge: PropTypes.number,
}

export default connect()(Widget)
