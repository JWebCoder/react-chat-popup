// @flow

import * as React from 'react'

type Props = {
  HTML: string,
  onChangeHeight: (height: number) => void,
  target: string
}

const HTMLDiv = (props: Props) => {
  const HTML = props.HTML

  const noHTMLProps = {
    ...props,
  }

  delete noHTMLProps.HTML
  delete noHTMLProps.target
  delete noHTMLProps.onChangeHeight

  return (
    <div {...noHTMLProps} dangerouslySetInnerHTML={{ __html: HTML }}/>
  )
}

export default HTMLDiv
