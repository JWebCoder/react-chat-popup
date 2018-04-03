// @flow

import * as React from 'react'

import styles from './styles'

type Props = {
  text: string,
}

const TextElement = ({text}: Props) => (
  <h5 style={styles.snippetTitle}>
    {text}
  </h5>
)

export default TextElement
