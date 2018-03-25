import { colors } from 'styles/variables'

const styles = {
  header: {
    backgroundColor: colors.turqois1,
    borderRadius: '10px 10px 0 0',
    color: colors.white,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '15px 0 25px',
  },
  fullscreenHeader: {
    borderRadius: 0,
    flexShrink: 0,
    position: 'relative',
  },

  title: {
    fontSize: '24px',
    margin: 0,
    padding: '15px 0',
  },
  fullscreenTitle: {
    padding: '0 0 15px 0',
  },

  closeButton: {
    display: 'none',
  },
  closeIcon: {
    width: '20px',
    height: '20px',
  },
  fullscreenCloseButton: {
    backgroundColor: colors.turqois1,
    border: 0,
    display: 'block',
    position: 'absolute',
    right: '10px',
    top: '20px',
    width: '40px',
  },
}

export default styles
