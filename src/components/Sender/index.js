// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import Div from 'components/Div'
import Button from 'components/Button'
import Img from 'components/Image'
import Input from 'components/Input'

import send from '../../../assets/send_button.svg'
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
    this.props.sendMessage(this.state.message)
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
      sendMessage,
      placeholder,
      disabledInput,
      fullscreen,
    } = this.props

    let sendStyle = {
      ...styles.send,
    }

    if (fullscreen) {
      sendStyle = {
        ...sendStyle,
        ...styles.fullscreenSend,
      }
    }

    return (
      <Div style={styles.sender} onSubmit={sendMessage}>
        <Input
          placeholder={placeholder}
          disabledInput={disabledInput}
          message={this.state.message}
          onChangeMessage={this.onChangeMessage}
          handleKeyPress={this.handleKeyPress}
        />
        <Button style={sendStyle} onClick={this.sendMessage}>
          <Img src={send} style={styles.sendIcon} alt="send" />
        </Button>
      </Div>
    )
  }
}

const mapStateToProps = ({ behavior }: StoreState) => ({
  fullscreen: behavior.fullscreen,
})

export default connect(mapStateToProps)(Sender)
