// @flow

import { colors } from 'styles/variables'

const styles: {
  sender: {},
  fullscreenSender: {},
  send: {},
  fullscreenSend: {},
  sendIcon: {},
} = {
  sender: {
    alignItems: 'center',
    display: 'flex',
    backgroundColor: colors.grey2,
    padding: '5px',
    borderRadius: '0 0 5px 5px',
  },

  fullscreenSender: {
    borderRadius: 0,
  },

  send: {
    background: colors.grey2,
    border: 0,
  },

  fullscreenSend: {
    borderRadius: 0,
    flexShrink: 0,
  },

  sendIcon: {
    height: '25px',
  },
}

export default styles
