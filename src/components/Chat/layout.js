// @flow

import React from 'react'
import { connect } from 'react-redux'

import Conversation from 'components/Conversation'
import Launcher from 'components/Launcher'
import Div from 'components/Div'
import { setFullscreen, unsetFullscreen } from 'store/actions/dispatcher'
import styles from './style'
import _ from 'lodash'

import type { StoreState } from 'store/store'
import type { Props } from './props'

type State = {
  width: number,
  height: number,
}

class ChatLayout extends React.Component<Props, State> {
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
    let style: {[key: string]: any} = {}
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
      <Div style={style}>
        {
          this.props.showChat &&
          <Conversation
            title={this.props.title}
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
      </Div>
    )
  }
}

const mapStateToProps = ({ behavior }: StoreState) => ({
  showChat: behavior.showChat,
  disabledInput: behavior.disabledInput,
  fullscreen: behavior.fullscreen,
})

export default connect(mapStateToProps)(ChatLayout)
