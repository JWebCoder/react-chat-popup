// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import Div from 'components/Div'
import Img from 'components/Image'
import { ScrollView } from 'react-native'

import styles from './styles'

import type { StoreState } from 'store/store'

type Message = {
  showAvatar: boolean,
  type: string,
  component: any,
  props?: {}
}

type Props = {
  fullscreen: boolean,
  messages: Message[],
  profileAvatar: string,
}

class Messages extends React.Component<Props> {
  constructor() {
    super()
    this.scrollView = null
  }
  componentDidMount() {
    this.scrollView.scrollToEnd({animated: true})
  }

  getComponentToRender = (message: Message) => {
    const ComponentToRender = message.component
    if (message.type === 'component' && ComponentToRender) {
      return <ComponentToRender {...message.props} />
    }
    return <ComponentToRender message={message} />
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
      <ScrollView
        id="messages"
        style={messagesContainerStyle}
        contentContainerStyle={styles.messagesInner}
        ref={ref => { this.scrollView = ref }}
        onContentSizeChange={
          (contentWidth: number, contentHeight: number) => {
            this.scrollView.scrollToEnd({animated: true})
          }
        }
        onLayout={
          () => {
            this.scrollView.scrollToEnd({animated: true})
          }
        }
      >
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
      </ScrollView>
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
