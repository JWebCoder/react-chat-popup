import React, { PureComponent } from 'react'
import marked from 'marked'

import styles from './styles'

class Message extends PureComponent {
  render() {
    const sanitizedHTML = marked.parse(this.props.message.text, { sanitize: true })

    return (
      <div style={styles.message[this.props.message.sender]}>
        <div style={styles.messageText} dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
      </div>
    )
  }
}

export default Message
