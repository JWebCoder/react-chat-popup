// @flow

import * as React from 'react'
import { View, WebView } from 'react-native'
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
      <View style={styles.message[this.props.message.sender]}>
        <WebView source={{html: sanitizedHTML}} />
      </View>
    )
  }
}

export default Message
