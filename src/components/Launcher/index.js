// @flow

import React from 'react'
import { connect } from 'react-redux'
import Badge from 'components/Badge'
import Img from 'components/Image'
import Button from 'components/Button'

import openLauncher from '../../../assets/launcher_button.png'
import close from '../../../assets/clear-button.png'
import styles from './style'

import type { StoreState } from 'store/store'

type Props = {
  toggle: () => void,
  chatOpened: boolean,
  badge: number,
  fullscreen: boolean,
}

const Launcher = ({ toggle, chatOpened, badge, fullscreen }: Props) => {
  let launcherStyle = {
    ...styles.launcher,
  }

  if (chatOpened && fullscreen) {
    launcherStyle = {
      display: 'none',
    }
  }

  return (
    <Button style={launcherStyle} onClick={toggle}>
      <Badge badge={badge} />
      {
        chatOpened
          ? <Img src={close} alt="close launcher" style={styles.closeLauncher}/>
          : <Img src={openLauncher} alt="open launcher" />
      }
    </Button>
  )
}

const mapStateToProps = ({ behavior }: StoreState) => ({
  chatOpened: behavior.showChat,
  fullscreen: behavior.fullscreen,
})

export default connect(mapStateToProps)(Launcher)
