import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import close from '../../../assets/clear-button.svg'
import styles from './style'

const Header = ({ title, subtitle, toggleChat, showCloseButton, fullscreen }) => {
  let headerStyle = styles.header
  let closeButtonStyle = styles.closeButton
  let titleStyle = styles.title

  if (fullscreen) {
    headerStyle = {
      ...headerStyle,
      ...styles.fullscreenHeader,
    }

    closeButtonStyle = {
      ...closeButtonStyle,
      ...styles.fullscreenCloseButton,
    }

    titleStyle = {
      ...titleStyle,
      ...styles.fullscreenTitle,
    }
  }

  return (
    <div style={headerStyle}>
      {
        showCloseButton &&
        <button style={closeButtonStyle} onClick={toggleChat}>
          <img src={close} style={styles.closeIcon} alt="close" />
        </button>
      }
      <h4 style={titleStyle}>{title}</h4>
      <span>{subtitle}</span>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  toggleChat: PropTypes.func,
  showCloseButton: PropTypes.bool,
}

const mapStateToProps = ({ behavior }) => ({
  fullscreen: behavior.fullscreen,
})

export default connect(mapStateToProps)(Header)
