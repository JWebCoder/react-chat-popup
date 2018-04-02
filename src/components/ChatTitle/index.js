// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import Title from './title'

import styles from './style'

import type { StoreState } from 'store/store'

type Props = {
  title: string,
  fullscreen: boolean,
}

const ChatTitle = (props: Props) => {
  let titleStyle = styles.title

  if (props.fullscreen) {
    titleStyle = {
      ...titleStyle,
      ...styles.fullscreenTitle,
    }
  }

  return (
    <Title style={titleStyle} title={props.title}/>
  )
}

const mapStateToProps = ({ behavior }: StoreState) => ({
  fullscreen: behavior.fullscreen,
})

export default connect(mapStateToProps)(ChatTitle)
