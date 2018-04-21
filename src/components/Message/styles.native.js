// @flow

import { colors } from 'styles/variables'

const messageBubble = (color: string): {} => ({
  backgroundColor: color,
  borderRadius: 5,
  paddingHorizontal: 15,
  maxWidth: 215,
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
      alignSelf: 'flex-end',
    },
    response: {
      ...messageBubble(colors.grey2),
    },
  },
}

export default styles
