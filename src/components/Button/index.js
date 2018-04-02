// @flow

import * as React from 'react'

const Button = (props: {children: any}) => (
  <button {...props}>
    {props.children}
  </button>
)

export default Button
