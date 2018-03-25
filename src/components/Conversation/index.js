import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Header from 'components/Header'
import Messages from 'components/Messages'
import Sender from 'components/Sender'
import styles from './style'

class Conversation extends React.Component {
  state = {
    visible: false,
  }

  componentDidMount() {
    this.setState({
      visible: true,
    })
  }

  render() {
    let style = {
      ...styles.conversationContainer,
    }

    if (this.props.fullscreen) {
      style = {
        ...style,
        ...styles.fullScreen,
      }
    }

    if (this.state.visible) {
      style = {
        ...style,
        ...styles.visible,
      }
    }

    return (
      <div style={style}>
        <Header
          title={this.props.title}
          subtitle={this.props.subtitle}
          toggleChat={this.props.toggleChat}
          showCloseButton={this.props.showCloseButton}
        />
        <Messages
          profileAvatar={this.props.profileAvatar}
        />
        <Sender
          sendMessage={this.props.sendMessage}
          placeholder={this.props.senderPlaceHolder}
          disabledInput={this.props.disabledInput}
        />
      </div>
    )
  }
}

Conversation.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  sendMessage: PropTypes.func,
  senderPlaceHolder: PropTypes.string,
  profileAvatar: PropTypes.string,
  toggleChat: PropTypes.func,
  showCloseButton: PropTypes.bool,
  disabledInput: PropTypes.bool,
}

const mapStateToProps = state => ({
  fullscreen: state.behavior.get('fullscreen'),
})

export default connect(mapStateToProps)(Conversation)
