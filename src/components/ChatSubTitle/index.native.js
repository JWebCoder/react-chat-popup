// @flow

import * as React from 'react'
import { Text } from 'react-native'

import styles from './style'

type Props = {
  subTitle: string
}

const Title = (props: Props) => (
  <Text style={styles.subTitle}>{props.subTitle}</Text>
)

export default Title
