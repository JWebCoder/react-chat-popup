// @flow

import React from 'react'
import { connect } from 'react-redux'

import Conversation from 'components/Conversation'
import Launcher from 'components/Launcher'
import Div from 'components/Div'
import { setFullscreen } from 'store/actions/dispatcher'
import styles from './style'

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
    if (!this.props.fullscreen) {
      setFullscreen()
    }
  }

  render() {
    let style: {[key: string]: any} = {}

    style = {
      ...styles.widgetContainer,
    }

    if (this.props.showChat) {
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
