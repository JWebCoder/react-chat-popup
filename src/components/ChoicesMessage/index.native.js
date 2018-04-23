// @flow

import * as React from 'react'
import Button from 'components/Button'
import Div from 'components/Div'
import { Text } from 'react-native'

import styles from './styles'

import type { Choices } from 'store/reducers/messagesReducer'

type Props = {
  message: {
    data: Choices,
    sender: string,
  },
  sendMessage: (message: string | number) => void,
}

type State = {
  height: number,
  clicked: boolean,
}

class Message extends React.PureComponent<Props, State> {
  state = {
    height: 0,
    clicked: false,
  }

  onChangeHeight = (height: number) => {
    this.setState({
      height,
    })
  }

  choose = (value: string | number) => () => {
    if (!this.state.clicked) {
      this.props.sendMessage(value)
      this.setState({
        clicked: true,
      })
    }
  }

  render() {
    return (
      <Div style={{...styles.message[this.props.message.sender], ...{height: this.state.height || 'auto', paddingVertical: 10}}}>
        <Text>{this.props.message.data.text}</Text>
        <Div style={styles.buttonContainer}>
          {this.props.message.data.choices.map(
            (choice, index) => {
              return <Button key={index} onClick={this.choose(choice.value)} style={styles.button}><Text>{choice.text}</Text></Button>
            }
          )}
        </Div>
      </Div>
    )
  }
}

export default Message
