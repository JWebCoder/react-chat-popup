// @flow

import * as React from 'react'
import { Image } from 'react-native'

const Img = (props: {src: string}) => {
  const src = props.src

  const noSrcProps = {
    ...props,
  }

  delete noSrcProps.src
  return <Image {...noSrcProps} source={src}/>
}

export default Img
