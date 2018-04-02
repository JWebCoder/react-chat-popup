// @flow

import * as React from 'react'
import { View } from 'react-native'

const Div = (props: {children: any}) => (
  <View {...props}>
    {props.children}
  </View>
)

export default Div
