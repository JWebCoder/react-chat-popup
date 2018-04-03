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
    color: colors.white,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    paddingTop: 15,
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
    border: 0,
    display: 'block',
    position: 'absolute',
    right: 10,
    top: 20,
    width: 40,
  },
}

export default styles
