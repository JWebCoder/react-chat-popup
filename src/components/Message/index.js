// @flow

import * as React from 'react'
import marked from 'marked'
import Div from 'components/Div'
import HTMLDiv from 'components/HTMLDiv'

import styles from './styles'

type Props = {
  message: {
    text: string,
    sender: "client" | "response"
  }
}

class Message extends React.PureComponent<Props> {
  render() {
    const {
      text,
    } = this.props.message

    const sanitizedHTML = marked.parse(text, { sanitize: true })

    return (
      <Div style={styles.message[this.props.message.sender]}>
        <HTMLDiv HTML={sanitizedHTML} />
      </Div>
    )
  }
}

export default Message
