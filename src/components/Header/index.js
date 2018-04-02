// @flow

import React from 'react'
import { connect } from 'react-redux'

import Div from 'components/Div'

import close from '../../../assets/clear-button.svg'
import styles from './style'

import type { StoreState } from 'store/store'

type Props = {
  title: string,
  subtitle: string,
  showCloseButton: boolean,
  fullscreen: boolean,
  toggleChat: () => void,
}

const Header = ({ title, subtitle, toggleChat, showCloseButton, fullscreen }: Props) => {
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
    <Div style={headerStyle}>
      {
        showCloseButton &&
        <button style={closeButtonStyle} onClick={toggleChat}>
          <img src={close} style={styles.closeIcon} alt="close" />
        </button>
      }
      <h4 style={titleStyle}>{title}</h4>
      <span>{subtitle}</span>
    </Div>
  )
}

const mapStateToProps = ({ behavior }: StoreState) => ({
  fullscreen: behavior.fullscreen,
})

export default connect(mapStateToProps)(Header)
