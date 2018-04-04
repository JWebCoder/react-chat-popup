// @flow

import { colors } from 'styles/variables'

const styles: {
  messagesContainer: {},
  fullscreenMessagesContainer: {},
  avatar: {},
  message: {},
  messagesInner: {},
} = {
  messagesContainer: {
    backgroundColor: colors.white,
    paddingTop: 10,
  },

  fullscreenMessagesContainer: {
    flex: 1,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 10,
  },

  message: {
    margin: 10,
  },
  messagesInner: {
    paddingBottom: 10,
  },
}

export default styles
