// @flow

import * as React from 'react'
import marked from 'marked'
import Div from 'components/Div'
import HTMLDiv from 'components/HTMLDiv'

import styles from './styles'

type Props = {
  message: {
    text: string,
    sender: "client" | "response"
  }
}

type State = {
  height: number
}

class Message extends React.PureComponent<Props, State> {
  state = {
    height: 0,
  }

  onChangeHeight = (height: number) => {
    this.setState({
      height,
    })
  }

  render() {
    const {
      text,
    } = this.props.message

    const sanitizedHTML = marked.parse(text, { sanitize: true })
    return (
      <Div style={{...styles.message[this.props.message.sender], ...{height: this.state.height || 'auto', paddingVertical: 10}}}>
        <HTMLDiv HTML={sanitizedHTML} onChangeHeight={this.onChangeHeight} target={this.props.message.sender}/>
      </Div>
    )
  }
}

export default Message
