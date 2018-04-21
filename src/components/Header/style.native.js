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
    paddingTop: 45,
    paddingBottom: 10,
    paddingHorizontal: 10,
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
    width: 15,
    height: 15,
  },
  fullscreenCloseButton: {
    backgroundColor: colors.turqois1,
    position: 'absolute',
    right: 0,
    top: 45,
    width: 40,
    zIndex: 1,
    padding: 10,
  },
  headerTitles: {
    flexDirection: 'row',
  },
}

export default styles
