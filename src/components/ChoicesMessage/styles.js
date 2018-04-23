// @flow

import { colors } from 'styles/variables'

const messageBubble = (color: string): {} => ({
  backgroundColor: color,
  borderRadius: '5px',
  padding: '15px',
  maxWidth: '215px',
  textAlign: 'left',
})

const styles: {
  message: {
    client: {},
    response: {},
  },
  buttonContainer: {},
  button: {},
} = {
  message: {
    client: {
      ...messageBubble(colors.turqois2),
      marginLeft: 'auto',
    },
    response: {
      ...messageBubble(colors.grey2),
    },
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: '15px 0 0 0',
  },
  button: {
    borderColor: colors.turqois1,
    borderWidth: '1px',
    backgroundColor: colors.white,
    padding: '10px 15px',
    borderRadius: '4px',
  },
}

export default styles
