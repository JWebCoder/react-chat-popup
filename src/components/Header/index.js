// @flow

import React from 'react'
import { connect } from 'react-redux'

import Div from 'components/Div'
import Button from 'components/Button'
import Img from 'components/Image'
import ChatTitle from 'components/ChatTitle'
// import ChatSubTitle from 'components/ChatSubTitle'

import close from '../../../assets/clear-button.png'
import styles from './style'

import type { StoreState } from 'store/store'

type Props = {
  title: string,
  showCloseButton: boolean,
  fullscreen: boolean,
  toggleChat: () => void,
}

const Header = ({ title, subtitle, toggleChat, showCloseButton, fullscreen }: Props) => {
  let headerStyle = styles.header
  let closeButtonStyle = styles.closeButton

  if (fullscreen) {
    headerStyle = {
      ...headerStyle,
      ...styles.fullscreenHeader,
    }

    closeButtonStyle = styles.fullscreenCloseButton
  }

  return (
    <Div style={headerStyle}>
      {
        showCloseButton &&
        <Button style={closeButtonStyle} onClick={toggleChat}>
          <Img src={close} style={styles.closeIcon} alt="close" />
        </Button>
      }
      <Div style={styles.headerTitles}>
        <ChatTitle title={title}/>
        {/* <ChatSubTitle subTitle={subtitle}/> */}
      </Div>
    </Div>
  )
}

const mapStateToProps = ({ behavior }: StoreState) => ({
  fullscreen: behavior.fullscreen,
})

export default connect(mapStateToProps)(Header)
