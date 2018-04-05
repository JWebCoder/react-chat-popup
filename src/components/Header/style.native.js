// @flow

import { colors } from 'styles/variables'

const styles: {
  header: {},
  fullscreenHeader: {},
  title: {},
  fullscreenTitle: {},
  closeButton: {},
  closeIcon: {},
  fullscreenCloseButton: {},
} = {
  header: {
    backgroundColor: colors.turqois1,
    paddingTop: 50,
    paddingBottom: 25,
  },
  fullscreenHeader: {
    flexShrink: 0,
    position: 'relative',
  },

  title: {
    fontSize: 24,
    margin: 0,
    paddingVertical: 15,
  },
  fullscreenTitle: {
    paddingBottom: 15,
  },

  closeButton: {
    display: 'none',
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
  fullscreenCloseButton: {
    backgroundColor: colors.turqois1,
    position: 'absolute',
    right: 10,
    top: 55,
    width: 40,
    zIndex: 1,
  },
}

export default styles
