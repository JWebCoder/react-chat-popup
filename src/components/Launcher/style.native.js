// @flow

import { colors } from 'styles/variables'

const styles: {
  launcher: {},
  closeLauncher: {},
} = {
  launcher: {
    alignSelf: 'flex-end',
    backgroundColor: colors.turqois1,
    borderRadius: 50,
    shadowColor: colors.grey3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    height: 60,
    marginBottom: 10,
    marginRight: 10,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeLauncher: {
    width: 20,
  },
}

export default styles
