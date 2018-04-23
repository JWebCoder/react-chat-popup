// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import Div from 'components/Div'
import Img from 'components/Image'

import styles from './styles'

import type { StoreState } from 'store/store'

type Message = {
  showAvatar: boolean,
  type: string,
  component: React.ComponentType<any>,
  props?: {}
}

type Props = {
  fullscreen: boolean,
  messages: Message[],
  profileAvatar: string,
  sendMessage: (message: string) => void,
}

let messagesDiv = null

const scrollToBottom = (): void => {
  if (messagesDiv) {
    messagesDiv.scrollTop = messagesDiv.scrollHeight
  }
}

class Messages extends React.Component<Props> {
  componentDidMount() {
    messagesDiv = document.getElementById('messages')
    scrollToBottom()
  }

  componentDidUpdate() {
    scrollToBottom()
  }

  getComponentToRender = (message: Message) => {
    const ComponentToRender = message.component
    if (message.type === 'component' && ComponentToRender) {
      return <ComponentToRender {...message.props} />
    }
    return <ComponentToRender message={message} sendMessage={this.props.sendMessage}/>
  };

  render() {
    let messagesContainerStyle = styles.messagesContainer

    if (this.props.fullscreen) {
      messagesContainerStyle = {
        ...messagesContainerStyle,
        ...styles.fullscreenMessagesContainer,
      }
    }

    return (
      <Div id="messages" style={messagesContainerStyle}>
        {
          this.props.messages.map((message, index) =>
            <Div style={styles.message} key={index}>
              {
                this.props.profileAvatar &&
                message.showAvatar &&
                <Img src={this.props.profileAvatar} style={styles.avatar} alt="profile" />
              }
              {
                this.getComponentToRender(message)
              }
            </Div>
          )
        }
      </Div>
    )
  }
}

const mapStateToProps = ({ messages, behavior }: StoreState) => {
  return {
    messages: messages,
    fullscreen: behavior.fullscreen,
  }
}

export default connect(mapStateToProps)(Messages)
