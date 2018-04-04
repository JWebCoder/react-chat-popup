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
    backgroundColor: colors.grey2,
    height: 45,
    padding: 5,
  },

  newMessage: {
    width: '100%',
    backgroundColor: colors.grey2,
    height: 30,
    paddingLeft: 15,
  },

  send: {
    backgroundColor: colors.grey2,
  },

  fullscreenSend: {
    flexShrink: 0,
  },

  sendIcon: {
    height: 25,
  },
}

export default styles
