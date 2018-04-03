// @flow

import * as React from 'react'
import { Text } from 'react-native'

import styles from './styles'

type Props = {
  text: string,
}

const TextElement = ({text}: Props) => (
  <Text style={styles.snippetTitle}>
    {text}
  </Text>
)

export default TextElement
