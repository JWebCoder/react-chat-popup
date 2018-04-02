// @flow

import * as React from 'react'
import { Text } from 'react-native'

type Props = {
  title: string,
  style: {}
}

const Title = (props: Props) => (
  <Text style={props.style}>{props.title}</Text>
)

export default Title
