// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import Send from './Send'

import styles from './style'

import type { StoreState } from 'store/store'
type Props = {
  placeholder: string,
  disabledInput: boolean,
  fullscreen: boolean,
  sendMessage: (message: string) => void,
}

type State = {
  message: string,
}

class Sender extends React.Component<Props, State> {
  state = {
    message: '',
  }

  onChangeMessage = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      message: event.currentTarget.value,
    })
  }

  sendMessage = () => {
    this.props.sendMessage(this.state.message.trim())
    this.setState({
      message: '',
    })
  }

  handleKeyPress = (event: SyntheticKeyboardEvent<>) => {
    if (event.key === 'Enter') {
      this.sendMessage()
    }
  }

  render() {
    let {
      placeholder,
      disabledInput,
      fullscreen,
    } = this.props

    let sendStyle = {
      ...styles.send,
    }

    let senderStyle = {
      ...styles.sender,
    }

    if (fullscreen) {
      senderStyle = {
        ...senderStyle,
        ...styles.fullscreenSender,
      }
      sendStyle = {
        ...sendStyle,
        ...styles.fullscreenSend,
      }
    }

    return (
      <Send
        placeholder={placeholder}
        disabledInput={disabledInput}
        message={this.state.message}
        onChangeMessage={this.onChangeMessage}
        handleKeyPress={this.handleKeyPress}
        sendMessage={this.sendMessage}
        styles={{
          sender: senderStyle,
          send: sendStyle,
          sendIcon: styles.sendIcon,
        }}
      />
    )
  }
}

const mapStateToProps = ({ behavior }: StoreState) => ({
  fullscreen: behavior.fullscreen,
})

export default connect(mapStateToProps)(Sender)
