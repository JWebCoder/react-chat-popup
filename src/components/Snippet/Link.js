// @flow

import * as React from 'react'

import styles from './styles'

type Props = {
  link: string,
  target: string,
}

const Link = ({link, target}: Props) => (
  <a href={link} target={target} style={styles.link}>
    {link}
  </a>
)

export default Link
