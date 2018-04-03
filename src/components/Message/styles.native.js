// @flow

import { colors } from 'styles/variables'

const messageBubble = (color: string): {} => ({
  backgroundColor: color,
  borderRadius: 10,
  paddingHorizontal: 15,
  maxWidth: 215,
  textAlign: 'left',
})

const styles: {
  message: {
    client: {},
    response: {},
  },
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
}

export default styles
