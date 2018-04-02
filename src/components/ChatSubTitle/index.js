// @flow

import * as React from 'react'

import styles from './style'

type Props = {
  subTitle: string
}

const Title = (props: Props) => (
  <span style={styles.subTitle}>{props.subTitle}</span>
)

export default Title
