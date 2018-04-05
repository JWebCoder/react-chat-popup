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
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingBottom: 25,
    flexDirection: 'row',
  },

  send: {
    backgroundColor: colors.grey2,
  },

  fullscreenSend: {},

  sendIcon: {
    height: 25,
    width: 25,
  },
}

export default styles
