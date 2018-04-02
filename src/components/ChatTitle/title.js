// @flow

import * as React from 'react'

type Props = {
  title: string,
  style: {}
}

const Title = (props: Props) => (
  <h2 style={props.style}>{props.title}</h2>
)

export default Title
