// @flow

import * as React from 'react'
import { WebView } from 'react-native'

const HTMLDiv = (props: {HTML: string}) => (
  <WebView {...props} source={{html: props.HTML}}/>
)

export default HTMLDiv
