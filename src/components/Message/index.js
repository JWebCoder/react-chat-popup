// @flow

import * as React from 'react'
import marked from 'marked'

import styles from './styles'

import type { Props } from './props'

class Message extends React.PureComponent<Props> {
  render() {
    const {
      text,
    } = this.props.message

    const sanitizedHTML = marked.parse(text, { sanitize: true })

    return (
      <div style={styles.message[this.props.message.sender]}>
        <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
      </div>
    )
  }
}

export default Message
