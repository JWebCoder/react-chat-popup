import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './styles'

let messagesDiv = null

const scrollToBottom = () => {
  if (messagesDiv) {
    messagesDiv.scrollTop = messagesDiv.scrollHeight
  }
}

class Messages extends React.Component {
  componentDidMount() {
    messagesDiv = document.getElementById('messages')
    scrollToBottom()
  }

  componentDidUpdate() {
    scrollToBottom()
  }

  getComponentToRender = (message) => {
    const ComponentToRender = message.component
    if (message.type === 'component') {
      return <ComponentToRender {...message.props} />
    }
    return <ComponentToRender message={message} />
  };

  render() {
    let messagesContainerStyle = styles.messagesContainer

    if (this.props.fullscreen) {
      messagesContainerStyle = {
        ...messagesContainerStyle,
        ...styles.fullscreenMessagesContainer,
      }
    }

    return (
      <div id="messages" style={messagesContainerStyle}>
        {
          this.props.messages.map((message, index) =>
            <div style={styles.message} key={index}>
              {
                this.props.profileAvatar &&
                message.showAvatar &&
                <img src={this.props.profileAvatar} style={styles.avatar} alt="profile" />
              }
              {
                this.getComponentToRender(message)
              }
            </div>
          )
        }
      </div>
    )
  }
}

Messages.propTypes = {
  messages: PropTypes.array,
  profileAvatar: PropTypes.string,
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
    fullscreen: state.behavior.get('fullscreen'),
  }
}

export default connect(mapStateToProps)(Messages)
