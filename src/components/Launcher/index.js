import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Badge from 'components/Badge'

import openLauncher from '../../../assets/launcher_button.svg'
import close from '../../../assets/clear-button.svg'
import styles from './style'

const Launcher = ({ toggle, chatOpened, badge, fullscreen }) => {
  let launcherStyle = {
    ...styles.launcher,
  }

  if (chatOpened && fullscreen) {
    launcherStyle = {
      display: 'none',
    }
  }

  return (
    <button type="button" style={launcherStyle} onClick={toggle}>
      <Badge badge={badge} />
      {
        chatOpened
          ? <img src={close} alt="close launcher" style={styles.closeLauncher}/>
          : <img src={openLauncher} alt="open launcher" />
      }
    </button>
  )
}

Launcher.propTypes = {
  toggle: PropTypes.func,
  chatOpened: PropTypes.bool,
  badge: PropTypes.number,
}

const mapStateToProps = ({ behavior }) => ({
  chatOpened: behavior.showChat,
  fullscreen: behavior.fullscreen,
})

export default connect(mapStateToProps)(Launcher)
