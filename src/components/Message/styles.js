import { colors } from 'styles/variables'

const messageBubble = (color) => ({
  backgroundColor: color,
  borderRadius: '10px',
  padding: ' 0px 15px',
  maxWidth: '215px',
  textAlign: 'left',
})

const styles = {
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
