// @flow

import { colors } from 'styles/variables'

const messageBubble = (color: string): {} => ({
  backgroundColor: color,
  borderRadius: '10px',
  padding: '15px',
  maxWidth: '215px',
  textAlign: 'left',
})

const styles:{
  snippet: {},
  snippetTitle: {},
  snippetDetails: {},
  link: {},
} = {
  snippet: {
    ...messageBubble(colors.grey2),
  },

  snippetTitle: {
    margin: 0,
  },

  snippetDetails: {
    borderLeft: `2px solid ${colors.green1}`,
    marginTop: '5px',
    paddingLeft: '10px',
  },

  link: {
    fontSize: '12px',
  },
}

export default styles
