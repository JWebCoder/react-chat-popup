import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import send from '../../../assets/send_button.svg'
import styles from './style'

const Sender = ({ sendMessage, placeholder, disabledInput, fullscreen }) => {
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
    <form style={styles.sender} onSubmit={sendMessage}>
      <input type="text" style={styles.newMessage} name="message" placeholder={placeholder} disabled={disabledInput} autoFocus autoComplete="off" />
      <button type="submit" style={sendStyle}>
        <img src={send} style={styles.sendIcon} alt="send" />
      </button>
    </form>
  )
}

Sender.propTypes = {
  sendMessage: PropTypes.func,
  placeholder: PropTypes.string,
  disabledInput: PropTypes.bool,
}

const mapStateToProps = state => ({
  fullscreen: state.behavior.get('fullscreen'),
})

export default connect(mapStateToProps)(Sender)
