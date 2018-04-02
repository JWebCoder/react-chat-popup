// @flow

import { colors } from 'styles/variables'

const styles: {
  sender: {},
  newMessage: {},
  send: {},
  fullscreenSend: {},
  sendIcon: {},
} = {
  sender: {
    alignItems: 'center',
    display: 'flex',
    backgroundColor: colors.grey2,
    height: '45px',
    padding: '5px',
    borderRadius: '0 0 10px 10px',
  },

  newMessage: {
    width: '100%',
    border: 0,
    backgroundColor: colors.grey2,
    height: '30px',
    paddingLeft: '15px',
    outline: 'none',
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
