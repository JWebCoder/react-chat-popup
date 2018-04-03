// @flow

import { colors } from 'styles/variables'

const styles: {
  messagesContainer: {},
  fullscreenMessagesContainer: {},
  avatar: {},
  message: {},
} = {
  messagesContainer: {
    backgroundColor: colors.white,
    overflowY: 'scroll',
    paddingTop: 10,
  },

  fullscreenMessagesContainer: {
    flex: 1,
    height: 'auto',
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 10,
  },

  message: {
    margin: 10,
    fontSize: 14,
  },
}

export default styles
