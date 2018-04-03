// @flow

import * as React from 'react'
import { TouchableOpacity } from 'react-native'

const Button = (props: {children: any, onClick: () => void}) => (
  <TouchableOpacity {...props} onPress={props.onClick}>
    {props.children}
  </TouchableOpacity>
)

export default Button
