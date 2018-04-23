// @flow

import { colors } from 'styles/variables'

const messageBubble = (color: string): {} => ({
  backgroundColor: color,
  borderRadius: 5,
  padding: 15,
  maxWidth: 215,
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
      alignSelf: 'flex-end',
    },
    response: {
      ...messageBubble(colors.grey2),
    },
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  button: {
    borderColor: colors.turqois1,
    borderWidth: 1,
    backgroundColor: colors.white,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
}

export default styles
