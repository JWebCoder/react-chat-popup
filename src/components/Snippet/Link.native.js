// @flow

import * as React from 'react'
import Button from 'components/Button'
import { Text, Linking } from 'react-native'

import styles from './styles'

type Props = {
  link: string,
  target: string,
}

const onClick = (url) => () => {
  Linking.openURL(url).catch((err: {}) => console.error('An error occurred', err))
}

const Link = ({link}: Props) => (
  <Button style={styles.link} onPress={onClick(link)}>
    <Text>{link}</Text>
  </Button>
)

export default Link
