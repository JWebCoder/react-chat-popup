// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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
      <div style={styles.sender} onSubmit={sendMessage}>
        <input
          type="text"
          style={styles.newMessage}
          placeholder={placeholder}
          disabled={disabledInput}
          autoFocus
          autoComplete="off"
          value={this.state.message}
          onChange={this.onChangeMessage}
        />
        <button type="button" style={sendStyle} onClick={this.sendMessage}>
          <img src={send} style={styles.sendIcon} alt="send" />
        </button>
      </div>
    )
  }
}

Sender.propTypes = {
  sendMessage: PropTypes.func,
  placeholder: PropTypes.string,
  disabledInput: PropTypes.bool,
}

const mapStateToProps = ({ behavior }: StoreState) => ({
  fullscreen: behavior.fullscreen,
})

export default connect(mapStateToProps)(Sender)
