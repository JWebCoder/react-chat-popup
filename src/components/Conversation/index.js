// @flow

import React from 'react'
import { connect } from 'react-redux'

import Header from 'components/Header'
import Messages from 'components/Messages'
import Sender from 'components/Sender'
import Div from 'components/Div'
import styles from './style'

import type { StoreState } from 'store/store'
import type { State } from './state'
import type { Props } from './props'

class Conversation extends React.Component<Props, State> {
  state = {
    visible: false,
  }

  componentDidMount() {
    this.setState({
      visible: true,
    })
  }

  render() {
    let style: {} = {
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
      <Div style={style}>
        <Header
          title={this.props.title}
          toggleChat={this.props.toggleChat}
          showCloseButton={this.props.showCloseButton}
        />
        <Messages
          profileAvatar={this.props.profileAvatar}
          sendMessage={this.props.sendMessage}
        />
        <Sender
          sendMessage={this.props.sendMessage}
          placeholder={this.props.senderPlaceHolder}
          disabledInput={this.props.disabledInput}
        />
      </Div>
    )
  }
}

const mapStateToProps = ({ behavior }: StoreState) => ({
  fullscreen: behavior.fullscreen,
})

export default connect(mapStateToProps)(Conversation)
