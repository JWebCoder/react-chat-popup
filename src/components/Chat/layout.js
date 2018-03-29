import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Conversation from 'components/Conversation'
import Launcher from 'components/Launcher'
import { setFullscreen, unsetFullscreen } from 'store/actions/dispatcher'
import styles from './style'
import _ from 'lodash'

class ChatLayout extends React.Component {
  state = {
    width: 0,
    height: 0,
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', _.throttle(this.updateWindowDimensions, 500))
  }

  updateWindowDimensions = () => {
    if (window.innerWidth < 800) {
      if (!this.props.fullscreen) {
        setFullscreen()
      }
    } else {
      if (!this.props.fullScreenMode) {
        unsetFullscreen()
      }
    }
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    let style = {}
    if (this.state.width === 0) {
      style = {
        display: 'none',
      }
    } else {
      style = {
        ...styles.widgetContainer,
      }
    }

    if (this.props.fullscreen && this.props.showChat) {
      style = {
        ...style,
        ...styles.fullscreen,
      }
    }

    return (
      <div style={style}>
        {
          this.props.showChat &&
          <Conversation
            title={this.props.title}
            subtitle={this.props.subtitle}
            sendMessage={this.props.onSendMessage}
            senderPlaceHolder={this.props.senderPlaceHolder}
            profileAvatar={this.props.profileAvatar}
            toggleChat={this.props.onToggleConversation}
            showChat={this.props.showChat}
            showCloseButton={this.props.showCloseButton}
            disabledInput={this.props.disabledInput}
          />
        }
        <Launcher
          toggle={this.props.onToggleConversation}
          badge={this.props.badge}
        />
      </div>
    )
  }
}

ChatLayout.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onSendMessage: PropTypes.func,
  onToggleConversation: PropTypes.func,
  showChat: PropTypes.bool,
  senderPlaceHolder: PropTypes.string,
  profileAvatar: PropTypes.string,
  showCloseButton: PropTypes.bool,
  disabledInput: PropTypes.bool,
  fullScreenMode: PropTypes.bool,
  badge: PropTypes.number,
}

const mapStateToProps = ({ behavior }) => ({
  showChat: behavior.showChat,
  disabledInput: behavior.disabledInput,
  fullscreen: behavior.fullscreen,
})

export default connect(mapStateToProps)(ChatLayout)
