// @flow

import * as React from 'react'

const Div = (props: {children: any}) => (
  <div {...props}>
    {props.children}
  </div>
)

export default Div
