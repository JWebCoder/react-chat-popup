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
    height: 45,
    padding: 5,
    borderRadius: 10,
  },

  newMessage: {
    width: '100%',
    backgroundColor: colors.grey2,
    height: 30,
    paddingLeft: 15,
  },

  send: {
    background: colors.grey2,
  },

  fullscreenSend: {
    borderRadius: 0,
    flexShrink: 0,
  },

  sendIcon: {
    height: 25,
  },
}

export default styles
