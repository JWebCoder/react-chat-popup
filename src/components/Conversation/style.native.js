// @flow

import { colors } from 'styles/variables'

const styles: {
  conversationContainer: {},
  visible: {},
  fullScreen: {}
} = {
  conversationContainer: {
    opacity: 0,
    borderRadius: 10,
    shadowColor: colors.grey3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  visible: {
    opacity: 1,
  },
  fullScreen: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
}

export default styles
