// @flow

import * as React from 'react'
import { TouchableOpacity } from 'react-native'

const Button = (props: {children: any}) => (
  <TouchableOpacity {...props}>
    {props.children}
  </TouchableOpacity>
)

export default Button
