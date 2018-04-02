// @flow

import * as React from 'react'

const HTMLDiv = (props: {HTML: string}) => {
  const HTML = props.HTML

  const noHTMLProps = {
    ...props,
  }

  delete noHTMLProps.HTML

  return (
    <div {...noHTMLProps} dangerouslySetInnerHTML={{ __html: HTML }}/>
  )
}

export default HTMLDiv
