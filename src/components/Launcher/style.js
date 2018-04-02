// @flow

import { colors } from 'styles/variables'

const styles: {
  launcher: {},
  closeLauncher: {},
} = {
  launcher: {
    alignSelf: 'flex-end',
    backgroundColor: colors.turqois1,
    border: 0,
    borderRadius: '50%',
    boxShadow: `0px 2px 10px 1px ${colors.grey3}`,
    height: '60px',
    marginTop: '10px',
    width: '60px',
    outline: 'none',
  },
  closeLauncher: {
    width: '20px',
  },
}

export default styles
